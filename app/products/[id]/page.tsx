"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products/products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [visibleCount, setVisibleCount] = useState(9); // initially show 9

  const product = products.find((p) => p.id === Number(id));
  const related = products.filter((p) => p.id !== Number(id));

  if (!product) return <p className="p-8">Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-20">
      {/* Main Product */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Image
          src={product.image}
          alt={product.name}
          width={550}
          height={400}
          className="rounded-xl shadow-lg object-cover w-[550px] h-[400px]"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-6">{product.description}</p>

          <Link href="/contact">
            <button className="bg-[#594423] hover:bg-[#82796B] cursor-pointer text-white px-6 py-3 rounded-xl text-lg shadow-lg transition">
              Get Quote
            </button>
          </Link>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {related.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-200"
            >
              <div className="relative w-full h-56">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg">
                  {item.category}
                </span>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              </div>
              <div className="p-4">
        <Link href="/products/[id]" as={`/products/${item.id}`}>
           <button className="mt-3 w-full border hover:bg-gray-100 cursor-pointer px-4 py-2 rounded-lg transition">View Details</button>
        </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Load More Button */}
        {visibleCount < related.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)} // load 6 more
              className="px-6 py-3 rounded-lg border hover:bg-black hover:text-white cursor-pointer transition shadow-md"
            >
              View More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
