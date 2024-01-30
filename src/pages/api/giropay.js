// Import necessary libraries or SDK
import { Checkout } from 'checkout-sdk-node';

export default async function handler(req, res) {
    if (req.method === 'POST') {

        try {

            // ------------------------------------ Method 1 (START) ------------------------------------

            const body = {
                source: {
                    type: "giropay",
                    purpose: "Mens black t-shirt L"
                },
                shipping: {
                    address: {
                        city: "Berlin",
                        zip: "10101",
                        country: "DE"
                    }
                },
                amount: 1914, // The amount in minor units
                currency: "EUR",
                success_url: "http://example.com/payments/success",
                failure_url: "http://example.com/payments/fail"
            }

            const paymentResponse = await fetch('https://api.sandbox.checkout.com/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer sk_sbox_o2nulev2arguvyf6w7sc5fkznas`, // Replace YOUR_SECRET_KEY with your actual Checkout.com secret key
                },
                body: JSON.stringify(body),
            });

            const paymentData = await paymentResponse.json();

            // ------------------------------------ Method 1 (END) ------------------------------------


            // ------------------------------------ Method 2 (START) ------------------------------------

            // const cko = new Checkout('sk_sbox_o2nulev2arguvyf6w7sc5fkznas'); // Use your secret key

            // const paymentData = await cko.payments.request({
            //     source: {
            //         type: "giropay",
            //         purpose: "Mens black t-shirt L"
            //     },
            //     // shipping: {
            //     //     address: {
            //     //         city: "Berlin",
            //     //         zip: "10101",
            //     //         country: "DE"
            //     //     }
            //     // },
            //     // description: "Your product description",
            //     amount: 1914, // The amount in minor units
            //     currency: "EUR",
            //     success_url: "http://example.com/payments/success",
            //     failure_url: "http://example.com/payments/fail"
            // });

            // ------------------------------------ Method 2 (END) ------------------------------------

            // ALWAYS GETTING:
            // approved: false,
            // status: 'Declined',
            // response_code: '20046',
            // response_summary: 'Bank Decline',
            console.log(paymentData);


            // If the request is successful, redirect the customer to the giropay page
            if (paymentData.status === "Pending" && paymentData._links && paymentData._links.redirect) {
                res.redirect(paymentData._links.redirect.href);
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
