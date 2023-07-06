import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            // Ensure videoRef and videoRef.current are defined
            if (videoRef && videoRef.current) {
                videoRef.current.play();
            }
        }, 5000);

        // Clean up timer on unmount
        return () => clearTimeout(timer);
    }, []);



    return (
        <section className="relative h-auto bg-cover bg-center pb-8 pt-16" style={{backgroundImage: "url(" +"https://d2aaddunp29031.cloudfront.net/bg.png" + ")"}}>
            {/* <!-- Gradient Overlay --> */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 opacity-75"></div>

            {/* <!-- Hero Content --> */}
            <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4">
                <div className="animate-fade-in-down pt-10 mb-6 text-center text-white">
                    <h1 className="mb-4 text-5xl font-bold md:text-7xl">Elevate Your Winery Experience</h1>
                    <p className="mb-6 text-2xl">Engage your customers like never before with our AI-Powered Chatbot Solution.</p>
                    <Link href="/contact?source=waitlist" className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-purple-600 transition-colors duration-300 hover:bg-purple-600 hover:text-white">Join Wait List</Link>
                </div>

                {/* <!-- Product Screenshot --> */}
                <div className="mt-8 w-full rounded-lg md:w-2/3 shadow-lg">
                    {/* <Image src="https://webmobilefirst-screencasts.s3.eu-west-3.amazonaws.com/vs11Z6-7tQ.gif" width={1000} height={1000} alt="Product Screenshot" className="shadow-lg rounded-lg"/> */}
                    <video
                            ref={videoRef}
                            width="300"
                            loop
                            muted
                            style={{
                                position: "relative",
                                width: "100%",
                                left: 0,
                                top: 0,
                              }}>
                            <source src="https://d2aaddunp29031.cloudfront.net/herodemo4k.mp4" type="video/mp4"/>
                    </video>
                
                </div>
            </div>
        </section>
    )
}