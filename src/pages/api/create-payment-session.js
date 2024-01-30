// pages/api/create-payment-session.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const body = {
            amount: 1000, // Example amount
            currency: "GBP",
            reference: "ORD-123A", // Example reference
            billing: {
                address: {
                    country: "GB",
                },
            },
            customer: {
                name: "John Smith", // Example customer
                email: "john.smith@example.com",
            },
            success_url: "https://example.com/payments/success",
            failure_url: "https://example.com/payments/failure",
        };

        try {
            const paymentSessionResponse = await fetch('https://api.sandbox.checkout.com/payment-sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer sk_sbox_o2nulev2arguvyf6w7sc5fkznas`, // Replace YOUR_SECRET_KEY with your actual Checkout.com secret key
                },
                body: JSON.stringify(body),
            });

            const paymentSessionData = await paymentSessionResponse.json();

            res.status(200).json(paymentSessionData);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create payment session' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
