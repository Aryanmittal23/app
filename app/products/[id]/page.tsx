"use client"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function ProductDetailPage() {
  const { id } = useParams() // get the product id from URL

  // Dummy product data (replace with API/DB later)
  const products = [
    {
      id: 1,
      name: "Premium Italian Marble",
      description: "Elegant and durable Italian marble, perfect for luxury interiors.",
      image: "/Premium-marble.jpeg",
    },
    {
      id: 2,
      name: "Classic White Marble",
      description: "Timeless white marble for flooring, walls, and countertops.",
      image: "/Exotic-granite.jpeg",
    },
    {
      id: 3,
      name: "Golden Beige Marble",
      description: "Warm golden tones that bring elegance to your spaces.",
      image: "/Exotic-granite.jpeg",
    },
    {
      id: 4,
      name: "Luxury Onyx Marble",
      description: "Exclusive onyx marble with striking patterns and colors.Premium onyx marble with striking patterns, rich tones, and natural elegance. This marble exudes sophistication, making it perfect for upscale interiors, luxury countertops, and bespoke architectural designs. Its polished finish enhances light reflection, creating a luxurious ambiance.",
      image: "/Exotic-granite.jpeg",
    },
  ]

  const product = products.find((p) => p.id === Number(id))
  const related = products.filter((p) => p.id !== Number(id))

  if (!product) return <p className="p-8">Product not found</p>

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover w-full"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-6">{product.description}</p>

          <Link href="/contact">
            <button className="bg-[#594423] hover:bg-[#82796B] text-white px-6 py-3 rounded-xl text-lg shadow-lg transition">
              Get Quote
            </button>
          </Link>
        </div>
      </div>
        {/* Related Products Section */}    
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {related.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={250}
                className="object-cover w-full h-56"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                <Link href={`/products/${item.id}`}>
                  <button className="mt-3 w-full border border-[#594423] text-[#594423] hover:bg-[#F7E6CA] px-4 py-2 rounded-lg transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
