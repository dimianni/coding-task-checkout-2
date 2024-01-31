const CreateWorkflowButton = () => {

    const handleButtonClick = async () => {
        try {
            const response = await fetch('/api/create-checkout-workflow', {
                method: 'POST'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Workflow created successfully:', data);

            // Handle success response (e.g., display a success message)

        } catch (error) {
            console.error('Error creating workflow:', error);

            // Handle error response (e.g., display an error message)
        }
    };

    return (
        <button onClick={handleButtonClick}>Create Checkout Workflow</button>
    );
};

export default CreateWorkflowButton;