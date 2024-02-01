import Link from 'next/link';

export default function CheckWorkflow() {
    return (
        <section className='bg-slate-200 rounded-xl p-8'>
            <h1 className='w-full text-center text-2xl font-bold mb-8'>Admin Use Only</h1>
            <div className='w-1/2'>
                <p>See transaction updates <Link rel="noopener noreferrer" target="_blank" className='text-blue-500 underline' href="https://webhook.site/3a4a21e3-02b0-48fd-83bf-3ef66e506a44">here</Link>.</p>
            </div>
        </section>
    );
};