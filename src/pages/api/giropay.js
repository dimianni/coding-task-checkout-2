// Import necessary libraries or SDK
import { Checkout } from 'checkout-sdk-node';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const cko = new Checkout('sk_sbox_o2nulev2arguvyf6w7sc5fkznas'); // Use your secret key

        try {
            const paymentResponse = await cko.payments.request({
                source: {
                    type: "giropay"
                },
                shipping: {
                    address: {
                        city: "Berlin",
                        zip: "10101",
                        country: "DE"
                    }
                },
                description: "Your product description",
                amount: 1914, // The amount in minor units
                currency: "EUR",
                success_url: "http://example.com/payments/success",
                failure_url: "http://example.com/payments/fail"
            });

            // approved: false,
            //     status: 'Declined',
            //         response_code: '20046',
            //             response_summary: 'Bank Decline',
            console.log(paymentResponse);
            

            // If the request is successful, redirect the customer to the giropay page
            if (paymentResponse.status === "Pending" && paymentResponse._links && paymentResponse._links.redirect) {
                res.redirect(paymentResponse._links.redirect.href);
            } else {
                // Handle other statuses or errors
                res.status(400).json({ error: 'Payment initiation failed' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
