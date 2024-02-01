import { Frames, CardFrame } from 'frames-react';
import toast, { Toaster } from 'react-hot-toast'

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
            // alert('Payment processed successfully!');
            toast.success('Payment processed successfully!', { duration: 4000 })
        } catch (error) {
            console.error('Payment processing error:', error);
            // alert('Payment processing failed.');
            toast.error('Payment processing failed.', { duration: 4000 })
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

                <CardFrame />

                <button
                    className='border-none rounded px-4 py-2 text-white font-medium w-full bg-[#8C9E6E] shadow-[0_1px_3px_0_rgba(19,57,94,0.4)] hover:bg-[#323416] active:bg-[#0b2a49] cursor-pointer'
                    onClick={() => {
                        Frames.submitCard();
                    }}
                >
                    PAY
                </button>
            </Frames>
            <Toaster position="bottom-center" />
        </>

    );
};

export default PaymentFrame;
