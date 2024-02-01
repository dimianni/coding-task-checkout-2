import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'


const CreateWorkflowButton = () => {

    const [workflowCreated, setWorkflowCreated] = useState(false);

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
            toast.success('Workflow created!', {duration: 4000})
            setWorkflowCreated(true)

        } catch (error) {
            console.error('Error creating workflow:', error);

            // Handle error response (e.g., display an error message)
            toast.error("Something went wrong :(", {duration: 4000})
        }
    };

    return (
        <section className='bg-slate-200 rounded-xl p-8'>
            <h1 className='w-full text-center text-2xl font-bold mb-8'>Admin Use Only</h1>
            <div className="flex justify-between">
                <div className='w-2/5'>
                    <button className='w-full border-none rounded px-4 py-2 text-white font-medium bg-[#888888] shadow-[0_1px_3px_0_rgba(19,57,94,0.4)] hover:bg-[#323416] active:bg-[#0b2a49] cursor-pointer' onClick={handleButtonClick}>Create Checkout Workflow</button>
                </div>

                {workflowCreated && (
                    <div className='w-1/2'>
                        Workflow has been created! Now you will see transaction updates on your Webhook.site URL!
                    </div>
                )}
            </div>
            <Toaster position="bottom-center" />
        </section>
    );
};

export default CreateWorkflowButton;