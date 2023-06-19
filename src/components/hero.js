export default function Hero() {
    return (
        <section className="relative h-auto bg-cover bg-center pb-8 pt-16" style={{backgroundImage: "url(" +"https://cdn.midjourney.com/509935f0-1faf-418a-bd17-777a2dcf85a1/0_0.png" + ")"}}>
            {/* <!-- Gradient Overlay --> */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 opacity-75"></div>

            {/* <!-- Hero Content --> */}
            <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4">
                <div className="animate-fade-in-down pt-10 mb-6 text-center text-white">
                    <h1 className="mb-4 text-5xl font-bold md:text-7xl">Elevate Your Winery Experience</h1>
                    <p className="mb-6 text-2xl">Engage your customers like never before with our AI-Powered Chatbot Solution.</p>
                    <a href="/contact?source=waitlist" className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-purple-600 transition-colors duration-300 hover:bg-purple-600 hover:text-white">Join Wait List</a>
                </div>

                {/* <!-- Product Screenshot --> */}
                <div className="mt-8 w-full rounded-lg md:w-2/3 lg:w-1/2">
                    <img src="https://i.imgur.com/65KQ2sl.png" alt="Product Screenshot" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    )
}