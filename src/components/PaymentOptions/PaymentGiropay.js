// Documentation: https://www.checkout.com/docs/previous/payments/payment-methods/bank-transfers/giropay

const GiropayPayment = () => {
    const initiatePayment = async () => {
        try {
            // Send a POST request to your server-side endpoint to initiate the payment
            const response = await fetch('/api/payment-giropay', {
                method: 'POST'
            });

            if (!response.ok) {
                throw new Error('Payment initiation failed');
            }

            // If the response is successful, your server should handle the redirection
            // The server might send back a redirect URL, or directly perform the redirect
            const data = await response.json();

            // Optionally handle the response data, such as redirect URLs
            if (data.redirectUrl) {
                window.location.href = data.redirectUrl;
            }
        } catch (error) {
            console.error('Error initiating payment:', error);
            alert('There was an error initiating the payment. Please try again.');
        }
    };

    return (
        <button onClick={initiatePayment}>Pay with Giropay</button>
    );
};

export default GiropayPayment;
