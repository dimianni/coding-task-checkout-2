// pages/api/payment.js
import { Checkout } from 'checkout-sdk-node';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { token } = req.body; // Get the token from the request body

        const cko = new Checkout('sk_sbox_XXX'); // Use your own secret key

        try {
            const paymentResponse = await cko.payments.request({
                source: {
                    type: 'token',
                    token, // The token received from the client-side Frames
                },
                currency: 'GBP',
                amount: 2500, // Amount in minor units (e.g., 2500 for £25.00)
            });

            // Send the payment response back to the client
            res.status(200).json(paymentResponse);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        // Handle any requests other than POST
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
