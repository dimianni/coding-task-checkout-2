import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { loadCheckoutWebComponents } from '@checkout.com/checkout-web-components';

export default function PaymentPage() {
    const router = useRouter();

    useEffect(() => {
        async function initializePayment() {
            
            const orderResponse = await fetch('/api/payment-session', { method: 'POST' });
            const paymentSession = await orderResponse.json();

            // Usage: README file https://www.npmjs.com/package/checkout-web-components?activeTab=code
            const cko = await loadCheckoutWebComponents({
                publicKey: 'pk_sbox_fzspyszrkddxsgozkyqjbw4w7aw',
                environment: 'sandbox',
                locale: 'en-GB',
                paymentSession,
                onPaymentCompleted: (component, paymentResponse) => {
                    // Handle payment success, e.g., redirect to a success page
                    router.push('/success'); // Example redirection on payment success
                },
                onError: (component, error) => {
                    // Handle payment error
                    console.error('Payment error:', error);
                },
            });

            // Create and mount the payments component
            const payments = cko.create('payments');
            payments.mount('#payments');
        }

        initializePayment();
    }, [router]);

    return (
        <div>
            <form id="payment-form">
                <div className="payments-container">
                    <div id="payments"></div> {/* This element will host the payment UI */}
                </div>
            </form>
        </div>
    );
}
