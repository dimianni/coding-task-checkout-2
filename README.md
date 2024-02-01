# Checkout.com API integration with a Next.js application

This is a checkout page of an e-commerce store selling t-shirts. Deployed and Hosted on Vercel --> [link](https://coding-task-checkout-2.vercel.app/).

## Card Payment & Webhooks

Please input the following test card credentials into the Frames box (Main tab): 

Card Number:	4242424242424242
Expiry Date:	08/28
CVV:	100

In a matter of seconds, you should get a pop-up saying that payment was successful. 
Now, please go to the webhook receiver URL: [https://webhook.site/3a4a21e3-02b0-48fd-83bf-3ef66e506a44](https://webhook.site/3a4a21e3-02b0-48fd-83bf-3ef66e506a44)

Observe that there were two POST requests, one for "payment_approved" and one for "payment_captured".

P.S. since one of the extra mile bonuses was to display Frames in another language, I changed the default "en-GB" localization to "DE-DE".

## Giropay

Having followed the guide on [Giropay integration ](https://www.checkout.com/docs/previous/payments/payment-methods/bank-transfers/giropay), I created a button that sends a payment request to the sandbox. The status response code is 201 "Created", however, the status of the transaction itself is "Declined", with response code "20046" -- Bank Decline. Therefore, I am not getting the redirect link required to complete the transaction. 

In the [webhook receiver URL](https://webhook.site/3a4a21e3-02b0-48fd-83bf-3ef66e506a44), we see a new POST request for "payment_declined".

Unfortunately, [API Response Codes](https://www.checkout.com/docs/developer-resources/codes/api-response-codes) documentation can't help solving the error for code "20046".

## Libraries Used

For Integration purposes:

- [checkout-web-components](https://www.npmjs.com/package/checkout-web-components?activeTab=code) - for [Payment Components](https://www.checkout.com/docs/payments/accept-payments/accept-a-payment-on-your-website-with-payment-components/get-started-with-payment-components) integration
- [checkout-sdk-node](https://www.npmjs.com/package/checkout-sdk-node) - for Frames integration. Step-by-step guide [here](https://www.checkout.com/docs/get-started).
- [frames-react](https://www.npmjs.com/package/frames-react) - for Frames integration.
 
For UI purposes:

- [tailwindcss](https://www.npmjs.com/package/tailwindcss) 
- [@headlessui/react](https://www.npmjs.com/package/@headlessui/react)
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast) 

## Checkout.com useful documentation links

- [Frames step-by-step guide](https://www.checkout.com/docs/get-started)
- [Frames documentation](https://www.checkout.com/docs/payments/accept-payments/accept-a-payment-on-your-website/get-started)
- [Frames for React how-tos](https://github.com/checkout/frames-react)
- [Giropay integration guide](https://www.checkout.com/docs/previous/payments/payment-methods/bank-transfers/giropay)
- [Payment Components integration guide](https://www.checkout.com/docs/payments/accept-payments/accept-a-payment-on-your-website-with-payment-components/get-started-with-payment-components)
- [Webhooks integration guide](https://www.checkout.com/docs/developer-resources/webhooks/manage-webhooks)
- [API Reference](https://api-reference.checkout.com/)
- [API Response Codes](https://www.checkout.com/docs/developer-resources/codes/api-response-codes)

