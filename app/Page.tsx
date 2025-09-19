"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import Navbar from "./components/Navbar"

export default function Home() {
  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "40+", label: "Countries Served" },
    { number: "10K+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" },
  ]

  const products = [
    {
      id: 1,
      name: "Carrara White Marble",
      category: "Marble",
      description: "Classic Italian-style white marble with subtle veining",
      image: "/Exotic-granite.jpeg", // replace with your image path
    },
    {
      id: 2,
      name: "Kashmir Black Granite",
      category: "Granite",
      description: "Deep black granite with silver specks",
      image: "/about-page.jpeg", // replace with your image path
    },
    {
      id: 3,
      name: "Emperador Dark Marble",
      category: "Marble",
      description: "Rich brown marble with golden veining",
      image: "/Premium-marble.jpeg", // replace with your image path
    },
  ]
  return (
    <div className="min-h-screen"> 
            {/* <Navbar /> */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/heroBackground.jpeg"
            alt="Premium marble texture background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Badge */}
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-amber-600/20 border border-amber-600/30 rounded-full px-6 py-2">
                <span className="text-amber-400 text-sm font-medium">Beyond a Surface</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-gray-200 mb-2">Premium Indian</div>
              <div className="text-amber-400">Marble & Granite</div>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover the timeless elegance of Indian natural stones. From quarry to your doorstep, we deliver
              excellence that transcends ordinary surfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="bg-amber-600 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-amber-700 transition-colors">
                Explore Our Collection
              </button>
              <button className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-800 hover:border-gray-300 transition-colors">
                Download Catalog
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Collection</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover our handpicked selection of premium marble and granite, each piece telling a story
          of natural beauty and timeless elegance.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-200"
            >
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <Link href="/contact">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                Get Quote
              </button>
                </Link>
              
              <button className="text-gray-700 underline">View Catalog</button>
            </div>
            </div>
          ))}
        </div>
          {/* View All Button */ }
      </div>
      <div className="flex justify-center mt-10">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
            View All Products
          </button>
        </div>
    </section>
        
      

      {/* Heritage Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Our Heritage of Excellence
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Three Decades of Stone Mastery
          </p>
          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-4">
              <span className="bg-yellow-500 text-white font-bold px-3 py-1 rounded-lg">
                30+
              </span>
              <p className="text-gray-700">
                <strong>Rich Heritage</strong> – Since 1990, Marmilix has been at
                the forefront of Indian natural stone exports, combining
                traditional craftsmanship with modern technology.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-gray-900 text-white font-bold px-3 py-1 rounded-lg">
                40+
              </span>
              <p className="text-gray-700">
                <strong>Global Trust</strong> – Serving clients across 40+
                countries with unwavering commitment to quality, authenticity,
                and timely delivery.
              </p>
            </div>
          </div>
          <button className="mt-8 px-5 py-3 border rounded-lg hover:bg-gray-100">
            Learn More About Us
          </button>
        </div>
        <div>
          <Image
            src="/Luxury-Private-Residence.jpeg"
            alt="Luxury Private Residence"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Stats + CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-3xl font-bold text-yellow-500">30+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-yellow-500">40+</h3>
              <p>Countries Served</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-yellow-500">10,000+</h3>
              <p>Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-yellow-500">99%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-300 mb-8">
            Let’s discuss your project and find the perfect natural stone
            solution that goes beyond ordinary surfaces.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact">
            <button className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400">
              Get Your Quote Today
            </button>
            </Link>
            <button className="px-6 py-3 border rounded-lg hover:bg-gray-100 text-gray-900 bg-white">
              Download Catalog
            </button>
          </div>
        </div>
      </section>
   
    </div>
  )
}
