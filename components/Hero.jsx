export default function Hero() {
    return (
        <section className="bg-[#FFF5F0] min-h-[600px] relative overflow-hidden px-8 py-12 flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 md:pl-12">
                <div className="inline-block px-4 py-1 rounded-full border border-pink-300 text-pink-400 text-xs font-semibold mb-6 uppercase tracking-wide bg-white/50">
                    100% Organic Products
                </div>

                <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6">
                    Shine <span className="text-pink-400 text-4xl align-top">✦</span> With <br />
                    <span className="italic font-light">Natural</span> Beauty
                </h1>

                <div className="flex items-start space-x-4 mb-8 max-w-md">
                    <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden shrink-0 border-2 border-white shadow-md">
                        <img
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm italic leading-relaxed">
                            &quot;Our products are natural and 100% organic. We care about our
                            customers hygiene. It&apos;s our pleasure to treat you. Can&apos;t wait for
                            your order.&quot;
                        </p>
                        <p className="text-gray-900 font-semibold text-xs mt-2 text-right">
                            - Anna Francisco
                        </p>
                    </div>
                </div>

                <div className="mb-12">
                    <p className="font-semibold text-gray-800 mb-4 flex items-center">
                        Product Gallery
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 ml-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </p>

                </div>
            </div>

            {/* Right Content (Image) */}
            <div className="w-full md:w-1/2 relative mt-12 md:mt-0 flex justify-center">
                {/* Decorative Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-[#FFD6C9] rounded-t-[200px] rounded-b-[20px] -z-0"></div>

                {/* Floating Badge */}
                <div className="absolute top-0 left-10 md:left-20 bg-white rounded-full w-24 h-24 flex items-center justify-center border border-gray-200 shadow-sm z-20 animate-spin-slow">
                    <div className="text-[10px] font-bold text-center uppercase tracking-widest leading-3 text-gray-800">
                        Stylish
                        <br />
                        Design
                        <br />
                        2025
                    </div>
                </div>

                {/* Main Product Image */}
                <div className="relative z-10 w-80 md:w-96">
                    <img
                        src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
                        alt="Hero Product"
                        className="w-full h-auto drop-shadow-2xl rounded-lg"
                    />

                    {/* Review Card */}
                    <div className="absolute bottom-10 -left-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-[200px]">
                        <div className="flex items-center space-x-2 mb-2">
                            <img
                                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                alt="Reviewer"
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <p className="text-xs font-bold text-gray-900">
                                    Catherine D&apos;Souza
                                </p>
                                <p className="text-[10px] text-gray-500">Fashion Designer</p>
                            </div>
                        </div>
                        <div className="flex text-yellow-400 text-xs mb-1">★★★★★</div>
                        <p className="text-[10px] text-gray-600">
                            &quot;This product is absolutely amazing!&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
