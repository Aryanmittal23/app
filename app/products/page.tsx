"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Carrara White Marble",
    category: "Marble",
    image: "/Exotic-granite.jpeg",
    applications: "Flooring, Wall Cladding, Countertops",
  },
  {
    id: 2,
    name: "Emperador Dark Marble",
    category: "Marble",
    image: "/Exotic-granite.jpeg",
    applications: "Feature Walls, Bathroom Vanities",
  },
  {
    id: 3,
    name: "Thassos White Marble",
    category: "Marble",
    image: "/Exotic-granite.jpeg",
    applications: "Luxury Interiors, Sculptures",
  },
  {
    id: 4,
    name: "Kashmir Black Granite",
    category: "Granite",
    image: "/Exotic-granite.jpeg",
    applications: "Kitchen Countertops, Flooring",
  },
  {
    id: 5,
    name: "Rajasthan Red Granite",
    category: "Granite",
    image: "/Exotic-granite.jpeg",
    applications: "Exterior Cladding, Monuments",
  },
];

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-72 flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/Exotic-granite.jpeg.jpg"
            alt="Premium Stones"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl font-bold">Premium Stone Collection</h1>
          <p className="mt-2 text-lg">Discover Our Exquisite Range</p>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border px-4 py-2 rounded w-full md:w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-2">
            {["All", "Marble", "Granite"].map((c) => (
              <button
                key={c}
                className={`px-4 py-2 rounded ${
                  filter === c
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredProducts.map((p) => (
            // <div
            //   key={p.id}
            //   className="border rounded-lg shadow-sm overflow-hidden bg-white"
            // >
            //   <div className="relative h-48">
            //     <Image
            //       src={p.image}
            //       alt={p.name}
            //       fill
            //       className="object-cover"
            //     />
            //     <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            //       {p.category.toUpperCase()}
            //     </span>
            //   </div>
            //   <div className="p-4">
            //     <h3 className="font-semibold text-lg">{p.name}</h3>
            //     <p className="text-sm text-gray-600 mt-2">{p.applications}</p>
            //     <div className="flex justify-between mt-4">
            //       <Link href="/contact">
            //     <button className="px-7 py-2 border rounded-lg hover:bg-gray-100 ml-5">
            //     Get Quote
            //   </button>
            //     </Link>
            //       <button className="px-3 py-2 border rounded text-sm">
            //         View Details
            //       </button>
            //     </div>
            //   </div>
            // </div>
            <div
              key={p.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-200"
            >
              <div className="relative w-full h-56">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg">
                  {p.category}
                </span>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{p.applications}</p>
              </div>
              <div className="flex items-center gap-4 mt-6 mb-5">
              <Link href="/products">
              <button className="px-25 py-2 border rounded-lg hover:bg-gray-100 ml-8">View Details</button>
              </Link>
            </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64">
              <Image
                src="/Exotic-granite.jpeg"
                alt="Premium Marble"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                <h3 className="text-white text-2xl font-semibold">
                  Premium Marble
                </h3>
              </div>
            </div>
            <div className="relative h-64">
              <Image
                src="/Exotic-granite.jpeg"
                alt="Premium Granite"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                <h3 className="text-white text-2xl font-semibold">
                  Premium Granite
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-2xl font-bold">
          Can’t Find What You’re Looking For?
        </h2>
        <p className="mt-2">
          We offer custom sourcing and specialized stone solutions. Let our
          experts help you find the perfect stone for your project.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded">
          Request Custom Quote
        </button>
      </section>
    </div>
  );
}
