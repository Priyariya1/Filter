import Link from "next/link";

async function getProduct(id: string) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }
    return res.json();
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = await getProduct(id);

    return (
        <div className="max-w-7xl mx-auto p-8 font-sans">
            <Link
                href="/"
                className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                </svg>
                Back to Products
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="bg-white rounded-3xl p-8 flex items-center justify-center shadow-sm">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full max-h-[500px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col justify-center space-y-6">
                    <div>
                        <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
                            {product.category}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            {product.title}
                        </h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                            <span className="text-yellow-700 font-bold mr-1">★</span>
                            <span className="text-yellow-800 font-medium">
                                {product.rating}
                            </span>
                        </div>
                        <span className="text-gray-400">|</span>
                        <span className="text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                            In Stock: {product.stock}
                        </span>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex items-end space-x-4 pt-4">
                        <span className="text-5xl font-bold text-gray-900">
                            ${product.price}
                        </span>
                        {product.discountPercentage > 0 && (
                            <span className="text-xl text-red-500 line-through mb-2">
                                $
                                {(
                                    product.price /
                                    (1 - product.discountPercentage / 100)
                                ).toFixed(2)}
                            </span>
                        )}
                    </div>

                    <div className="pt-8 flex space-x-4">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 active:scale-95">
                            Add to Cart
                        </button>
                        <button className="p-4 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
