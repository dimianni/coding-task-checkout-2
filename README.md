# Checkout.com API integration with a Next.js application

This is a checkout page of an e-commerce store selling t-shirts. Deployed and Hosted on Vercel --> [link](https://coding-task-checkout-2.vercel.app/).

## Card Payment

Please input the following test card credentials into the Frames box (Main tab): 

Card Number:	4242424242424242
Expiry Date:	08/28
CVV:	100

In a matter of seconds, you should get a pop-up saying that payment was successful. 

P.S. since one of the extra mile bonuses was to display the frames in another language, I changed the default "en-GB" localization to "DE-DE".

## Webhooks
After every transaction, we will get a status update to the webhook receiver URL: [https://webhook.site/3a4a21e3-02b0-48fd-83bf-3ef66e506a44](https://webhook.site/3a4a21e3-02b0-48fd-83bf-3ef66e506a44).

Currently, the worflow is set up to follow "payment_approved", "payment_captured", and "payment_declined" events. There is a button in the Admin panel (/admin) to create new workflow. As of right now, I accidentally reached the limit of workflows, and you will get the corresponding error in the pop-up.

## Giropay

Having followed the guide on [Giropay integration ](https://www.checkout.com/docs/previous/payments/payment-methods/bank-transfers/giropay), I created a button that sends a payment request to the sandbox. The status response code is 201 "Created", however, the status of the transaction itself is "Declined", with response code "20046" -- Bank Decline. Therefore, I am not getting the redirect link required to complete the transaction. 

In the [webhook receiver URL](https://webhook.site/3a4a21e3-02b0-48fd-83bf-3ef66e506a44), we see a new POST request for "payment_declined".

Unfortunately, [API Response Codes](https://www.checkout.com/docs/developer-resources/codes/api-response-codes) documentation can't help solving the error for code "20046".

## Payment Components

In the "Alternative" payment method tab, I am outputting Payment Components. Having followed the [Payment Components integration guide](https://www.checkout.com/docs/payments/accept-payments/accept-a-payment-on-your-website-with-payment-components/get-started-with-payment-components), I was able to succesfully mount the component. However, I got blocked by the fact that all of the fileds are blocked except for the Cardholder name field. Unfortunately, I wasn't able to find a solution to this problem, since it is being loaded like this, with just the cardholder name being an <input>.

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

