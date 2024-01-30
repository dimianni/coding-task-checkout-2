import Image from "next/image"

export default function ProductCard() {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl overflow-hidden">
                <div className='max-w-[40%] bg-white p-2 flex justify-center items-center'>
                    <figure>
                        <Image src="/tee.jpg" alt="tee" width={100} height={100} />
                    </figure>
                </div>
                <div className="card-body p-5">
                    <h2 className="card-title">Black Tee</h2>
                    <p>19.99</p>
                    <p>Quantity: 1</p>
                </div>
            </div>
        </div>
    )
} 