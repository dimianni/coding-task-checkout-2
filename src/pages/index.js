import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Frames, CardNumber, ExpiryDate, Cvv } from 'frames-react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Frames
        config={{
          debug: true,
          publicKey: 'pk_sbox_fzspyszrkddxsgozkyqjbw4w7aw',
          localization: {
            cardNumberPlaceholder: 'Card number',
            expiryMonthPlaceholder: 'MM',
            expiryYearPlaceholder: 'YY',
            cvvPlaceholder: 'CVV',
          },
          style: {
            base: {
              fontSize: '17px',
            },
          },
        }}
        ready={() => { }}
        frameActivated={(e) => { }}
        frameFocus={(e) => { }}
        frameBlur={(e) => { }}
        frameValidationChanged={(e) => { }}
        paymentMethodChanged={(e) => { }}
        cardValidationChanged={(e) => { }}
        cardSubmitted={() => { }}
        cardTokenized={(e) => { }}
        cardTokenizationFailed={(e) => { }}
        cardBinChanged={(e) => { }}
      >
        <CardNumber />
        <ExpiryDate />
        <Cvv />

        <button
          onClick={() => {
            Frames.submitCard();
          }}
        >
          PAY GBP 25.00
        </button>
      </Frames>
    </>
  )
}
