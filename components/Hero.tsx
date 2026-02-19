
export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
                <div className="text-white max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Reliable Printer Services in USA
                    </h2>

                    <p className="mt-4 text-lg text-gray-200">
                        Expert repair, rental, and toner solutions
                    </p>

                    <div className="flex gap-4 justify-center">
                        <button className="mt-8 bg-transparent text-white border-white border rounded-xl px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-black transition">
                            Call Now
                        </button>
                        <button className="mt-8 bg-transparent text-white border-white border rounded-xl px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-black transition">
                            Get Quote
                        </button>

                    </div>
                </div>

                
            </div>

        
        </section>
    );
}
