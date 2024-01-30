import Image from 'next/image'
import { Inter } from 'next/font/google'
import FramesComponent from '@/components/FramesComponent'
import PaymentComponents from '@/components/PaymentComponents'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <FramesComponent /> */}
      <PaymentComponents />
    </>
  )
}
