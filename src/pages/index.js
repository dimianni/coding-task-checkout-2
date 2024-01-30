import PaymentComponents from '@/components/PaymentComponents'
import PaymentFrame from '@/components/PaymentFrame'
import GiropayPayment from '@/components/GiropayPayment'

export default function Home() {
  return (
    <>
      <PaymentFrame />
      <GiropayPayment />
      {/* <FramesComponent /> */}
      {/* <PaymentComponents /> */}
    </>
  )
}
