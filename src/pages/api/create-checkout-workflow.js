
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const checkoutUrl = 'https://api.sandbox.checkout.com/workflows';
        const authToken = `Bearer ${process.env.SECRET_KEY}`; // Your Checkout.com authorization token
        const webhookUrl = process.env.WEBHOOK_SITE_URL; // Your webhook receiver URL from Webhook.site

        try {
            const response = await fetch(checkoutUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authToken,
                },
                body: JSON.stringify({
                    name: "Payment Webhooks",
                    active: true,
                    conditions: [
                        {
                            "type": "event",
                            "events": {
                                "gateway": [
                                    "payment_approved",
                                    "payment_captured",
                                    "payment_declined"
                                ]
                            }
                        }
                    ],
                    actions: [
                        {
                            "type": "webhook",
                            "url": webhookUrl,
                            "headers": {
                                "Authorization": "Bearer YOUR_AUTHORIZATION_HEADER_IF_NEEDED"
                            },
                            "signature": {
                                "method": "HMACSHA256",
                                "key": "YOUR_SIGNATURE_KEY"
                            }
                        }
                    ]
                })
            });

            if (!response.ok) {
                throw new Error(`Error from Checkout.com: ${response.statusText}`);
            }

            const responseData = await response.json();

            // Send success response back to the client
            res.status(200).json(responseData);
        } catch (error) {
            console.error('Error creating Checkout.com workflow:', error);
            // Send error response back to the client
            res.status(error.status || 500).json({ error: error.message });
        }
    } else {
        // Handle any non-POST requests
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}