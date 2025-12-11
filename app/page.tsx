"use client";

import { useState, useEffect } from "react";
import ProductGrid from "../components/ProductGrid";
import Filters from "../components/Filters";
import Loader from "../components/Loader";
import Hero from "../components/Hero";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/products");

        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data.products);
        setFiltered(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    setFiltered(result);
  }, [search, category, priceRange, products]);

  if (loading) return <Loader />;
  if (error) return <h1 className="text-red-600 p-4">{error}</h1>;

  return (
    <div className="min-h-screen">

      <Hero />

      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          🛒 Product Explorer
        </h1>

        <Filters
          products={products}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
