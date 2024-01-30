import Image from 'next/image'
import { Inter } from 'next/font/google'
import FramesComponent from '@/components/FramesComponent'
import PaymentComponents from '@/components/PaymentComponents'
import PaymentFrame from '@/components/PaymentFrame'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <PaymentFrame />
      {/* <FramesComponent /> */}
      {/* <PaymentComponents /> */}
    </>
  )
}
