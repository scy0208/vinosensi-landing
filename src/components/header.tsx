import Link from "next/link";


export default function Header() {
    return (
        <header className="fixed z-10 w-full bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                <Link href="#" className="text-2xl font-semibold text-purple-600">VinoSensei</Link>
                <Link href="https://calendly.com/vinosensei/30min" className="rounded-full bg-purple-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-purple-700">Request A Demo</Link>
            </div>
        </header>
    )
}