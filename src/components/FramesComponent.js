import { Frames, CardNumber, ExpiryDate, Cvv } from 'frames-react';


export default function FramesComponent(){
    return (
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
    )
}