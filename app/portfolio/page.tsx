"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Globe, Award, Layers } from "lucide-react"
import { portfolioData } from "../data/portfolio/portfolio" // adjust path based on your folder structure

export default function PortfolioPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/marmilixLogo1.png"
              alt="Marmilix Logo"
              width={220}
              height={80}
              className="mx-auto mb-6"
              priority
            />
            <h1 className="text-4xl font-bold mb-4">Marmilix Portfolio</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming spaces worldwide with premium marble and granite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Marmilix</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          At Marmilix, we specialize in providing world-class marble and granite solutions that redefine
          luxury and elegance. With over three decades of experience, we have delivered premium stonework
          for hotels, residences, and commercial projects across the globe. Our commitment to quality,
          craftsmanship, and client satisfaction sets us apart in the industry.
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project, index) => (
              <motion.div
                key={project.id}
                className="rounded-2xl overflow-hidden shadow-lg bg-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Marmilix</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div>
            <Layers className="mx-auto w-10 h-10 text-gray-800 mb-3" />
            <h4 className="font-semibold">Premium Quality</h4>
            <p className="text-gray-600">Sourcing only the finest stones worldwide.</p>
          </div>
          <div>
            <Globe className="mx-auto w-10 h-10 text-gray-800 mb-3" />
            <h4 className="font-semibold">Global Reach</h4>
            <p className="text-gray-600">Supplying to luxury projects across continents.</p>
          </div>
          <div>
            <CheckCircle className="mx-auto w-10 h-10 text-gray-800 mb-3" />
            <h4 className="font-semibold">Customer Focus</h4>
            <p className="text-gray-600">Commitment to long-term client satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
          <p className="mb-6 text-gray-300">
            Partner with Marmilix for premium marble and granite that bring elegance and strength to your projects.
          </p>
          <a
            href="mailto:info@marmilix.com"
            className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
