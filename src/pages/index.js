import PaymentComponents from '@/components/PaymentOptions/PaymentComponents'
import PaymentFrame from '@/components/PaymentOptions/PaymentFrame'
import PaymentGiropay from '@/components/PaymentOptions/PaymentGiropay'
import Cart from '@/components/Cart'

export default function Home() {
  return (
    <main className='mt-16 container'>
      <div className='w-full flex justify-between items-center'>
        <section className='w-1/2'>
          <div>
            <PaymentFrame />
          </div>
          <div>
            <PaymentGiropay />
          </div>
          {/* <PaymentComponents /> */}
        </section>
        <section className='w-1/2'>
          <Cart />
        </section>
      </div>
    </main>
  )
}
