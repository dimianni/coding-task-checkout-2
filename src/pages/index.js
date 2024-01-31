import PaymentComponents from '@/components/PaymentOptions/PaymentComponents'
import PaymentFrame from '@/components/PaymentOptions/PaymentFrame'
import PaymentGiropay from '@/components/PaymentOptions/PaymentGiropay'
import Cart from '@/components/Cart'

export default function Home() {
  return (
    <main className='mt-24 container'>
      <div className='w-full flex justify-between items-start'>
        <section className='w-1/2'>
          <h1 className="w-full text-center text-2xl font-bold">Please select your payment option:</h1>
          <div className='my-4 pb-4 border-b-2 border-gray-300'>
            <PaymentFrame />
          </div>
          <div className='my-4 pb-4 border-b-2 border-gray-300'>
            <PaymentGiropay />
          </div>
          <div className='my-4 pb-4'>
            <PaymentComponents />
          </div>
        </section>
        <section className='w-2/5'>
          <Cart />
        </section>
      </div>
    </main>
  )
}
