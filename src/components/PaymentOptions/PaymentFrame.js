// Import necessary components from Frames React Wrapper
import { Frames, CardNumber, ExpiryDate, Cvv } from 'frames-react';


// Documentation: https://github.com/checkout/frames-react
// Get Started: https://www.checkout.com/docs/get-started
const PaymentFrame = () => {

    // Function to handle tokenization success
    const handleCardTokenized = async (event) => {
        try {
            const response = await fetch('/api/payment-frame', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: event.token }),
            });

            const paymentResult = await response.json();
            console.log(paymentResult);
            alert('Payment processed successfully!');
        } catch (error) {
            console.error('Payment processing error:', error);
            alert('Payment processing failed.');
        }
    };

    return (
        <>
            <Frames
                config={{
                    publicKey: 'pk_sbox_fzspyszrkddxsgozkyqjbw4w7aw', // Use your own public key
                    localization:'DE-DE'
                }}
                cardTokenized={handleCardTokenized}
            >
                <CardNumber />
                <ExpiryDate />
                <Cvv />
                <button
                    onClick={() => {
                        Frames.submitCard();
                    }}
                >
                    PAY
                </button>
            </Frames>
        </>

    );
};

export default PaymentFrame;
