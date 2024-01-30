// Import necessary components from Frames React Wrapper
import { Frames, CardNumber, ExpiryDate, Cvv } from 'frames-react';
import { useState } from 'react';

// Documentation: https://github.com/checkout/frames-react

const PaymentFrame = () => {

    const [cardholder, setCardholder] = useState({
        name: '',
        email: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setCardholder(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

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
        <>
            <input
                type="text"
                name="name"
                value={cardholder.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={cardholder.email}
                onChange={handleChange}
            />
            <Frames
            
                config={{
                    publicKey: 'pk_sbox_fzspyszrkddxsgozkyqjbw4w7aw', // Use your own public key
                    cardholder: {
                        name: cardholder.name
                    },
                    name: cardholder.name,
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
                    PAY GBP 25.00
                </button>
            </Frames>
        </>

    );
};

export default PaymentFrame;
