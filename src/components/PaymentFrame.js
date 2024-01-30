// Import necessary components from Frames React Wrapper
import { Frames, CardNumber, ExpiryDate, Cvv } from 'frames-react';

const PaymentFrame = () => {
    // Function to handle tokenization success
    const handleCardTokenized = async (event) => {
        try {
            const response = await fetch('/api/payment', {
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
        <Frames
            config={{
                publicKey: 'pk_test_6e40a700-d563-43cd-89d0-f9bb17d35e73', // Use your own public key
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
                PAY GBP 25.00
            </button>
        </Frames>
    );
};

export default PaymentFrame;
