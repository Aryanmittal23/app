"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle,Award, Layers } from "lucide-react"
import { portfolioData } from "../data/portfolio/portfolio" // adjust path based on your folder structure
import { Shield, Gem, Globe, Users } from "lucide-react";
import React from "react"


export default function PortfolioPage() {
  const features = [
      {
        icon: <Shield className="w-10 h-10 text-yellow-600" />,
        title: "Trusted Quality",
        desc: "We deliver premium marble & granite with strict quality standards for every project.",
      },
      {
        icon: <Gem className="w-10 h-10 text-yellow-600" />,
        title: "Unique Designs",
        desc: "Exclusive stone patterns & textures that add unmatched beauty to your spaces.",
      },
      {
        icon: <Globe className="w-10 h-10 text-yellow-600" />,
        title: "Global Reach",
        desc: "Supplying our products across India and worldwide with reliable logistics.",
      },
      {
        icon: <Users className="w-10 h-10 text-yellow-600" />,
        title: "Client Focused",
        desc: "We believe in long-term relationships and provide personalized solutions.",
      },
    ];
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-10">
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
              height={0}
              className="mx-auto mb-0"
              
            />
            <h1 className="text-4xl font-bold mb-4 mt-0">Marmilix Portfolio</h1>
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
          luxury and elegance. We have delivered premium stonework
          for hotels, residences, and commercial projects. Our commitment to quality,
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
      <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-gray-600 mb-12">
                Discover what makes <span className="font-semibold">Marmilix</span> your trusted partner in marble & granite solutions.
              </p>
      
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
                  >
                    {/* <div className="flex justify-center mb-4 text-gray-900">{feature.icon}</div> */}
                    <div className="flex justify-center mb-4">
        {React.cloneElement(feature.icon, { className: "w-10 h-10 text-gray-700" })}
      </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
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
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Connect With Us
          </a>
        </div>
      </section>
    </div>
  )
}
