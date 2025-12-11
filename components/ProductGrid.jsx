import Link from "next/link";

export default function ProductGrid({ products }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 ">
            {products.map((product) => (
                <Link
                    href={`/product/${product.id}`}
                    key={product.id}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col"
                >
                    <div className="relative aspect-square overflow-hidden bg-gray-50 p-4">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    <div className="p-4 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                                {product.category}
                            </p>
                            <div className="flex items-center text-yellow-500 text-xs font-bold">
                                <span>★</span>
                                <span className="ml-1 text-gray-700">{product.rating}</span>
                            </div>
                        </div>

                        <h2 className="font-bold text-gray-900 text-base mb-1 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                            {product.title}
                        </h2>

                        <div className="mt-auto pt-3 flex items-center justify-between">
                            <p className="text-lg font-extrabold text-gray-900">
                                ${product.price}
                            </p>
                            <span className="text-xs text-gray-400 font-medium">
                                View Details
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
