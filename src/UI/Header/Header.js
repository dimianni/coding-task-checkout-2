import Image from "next/image"
import Link from "next/link"
import logo from '../../../public/logo.png'

export default function Header() {
    return (
        <header className="sticky top-0 z-30 flex h-16 w-full justify-center items-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm">
            <div className="container flex h-16 items-center justify-center prose-headings:text-xl">
                <Link className="w-full" href="/">
                    <Image src={logo} alt="T" style={{ width: "100px", height: "auto" }} />
                </Link>
            </div>
        </header>
    )
}