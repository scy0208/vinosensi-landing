

export default function Header() {
    return (
        <header class="fixed z-10 w-full bg-white shadow-md">
            <div class="container mx-auto flex items-center justify-between px-4 py-2">
                <a href="#" class="text-2xl font-semibold text-purple-600">VinoSensi</a>
                <nav>
                    <ul class="flex space-x-4">
                        <li><a href="#features" class="text-gray-600 hover:text-purple-600">Features</a></li>
                        <li><a href="#contact" class="text-gray-600 hover:text-purple-600">Contact</a></li>
                    </ul>
                </nav>
                <a href="#contact" class="rounded bg-purple-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-purple-700">Get Started</a>
            </div>
        </header>
    )
}