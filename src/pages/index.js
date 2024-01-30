import PaymentComponents from '@/components/PaymentComponents'
import PaymentFrame from '@/components/PaymentFrame'
import GiropayPayment from '@/components/GiropayPayment'
import Cart from '@/components/Cart'

export default function Home() {
  return (
    <>
      <div className='w-full flex justify-between items-center'>
        <section className='w-1/2'>
          <PaymentFrame />
          <GiropayPayment />
          {/* <FramesComponent /> */}
          {/* <PaymentComponents /> */}
        </section>
        <section className='w-1/2'>
          <Cart />
        </section>
      </div>
    </>
  )
}
