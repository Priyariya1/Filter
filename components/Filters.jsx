import { Search, SlidersHorizontal } from "lucide-react";

export default function Filters({
    products,
    search,
    setSearch,
    category,
    setCategory,
    priceRange,
    setPriceRange,
}) {
    const categories = ["all", ...new Set(products.map((p) => p.category))];

    return (
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl border border-gray-300 p-6 mb-8">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                {/* Search */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-1">Search Product</label>

                    <div className="relative">
                        <Search className="absolute left-3 top-3 text-gray-400" size={18} />

                        <input
                            type="text"
                            placeholder="Search by name…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border border-gray-300 rounded-xl w-full py-2.5 pl-10 pr-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                    </div>
                </div>

                {/* Category */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-1">Category</label>

                    <div className="relative">
                        <SlidersHorizontal className="absolute left-3 top-3 text-gray-400" size={18} />

                        <select
                            className="border border-gray-300 rounded-xl w-full py-2.5 pl-10 pr-3 shadow-sm capitalize focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {categories.map((cat, idx) => (
                                <option key={idx} value={cat} className="capitalize">
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Price Slider */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-1">
                        Price Range
                    </label>

                    <div className="p-3 border border-gray-300 rounded-xl bg-gray-50 shadow-sm">
                        <div className="flex justify-between mb-2 text-sm font-medium text-gray-600">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                        </div>

                        <input
                            type="range"
                            min="0"
                            max="200"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                            className="w-full accent-blue-600 cursor-pointer"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
