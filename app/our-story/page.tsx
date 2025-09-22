"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Globe, Handshake, Users } from "lucide-react"

export default function OurStoryPage() {
  const steps = [
    {
      title: "Our Beginning",
      description:
        "Over 3 years ago, Marmilix began its journey in the marble & granite industry, driven by passion and craftsmanship.",
      image: "/story1.jpg",
      icon: <Users className="w-10 h-10 text-gray-800" />,
    },
    {
      title: "Local Growth",
      description:
        "We built strong relationships with local clients, delivering premium quality and earning their trust through dedication.",
      image: "/story2.jpg",
      icon: <Handshake className="w-10 h-10 text-gray-800" />,
    },
    {
      title: "Expanding Overseas",
      description:
        "Now, Marmilix is taking its expertise global, bringing premium stones to international markets and luxury projects.",
      image: "/story3.jpg",
      icon: <Globe className="w-10 h-10 text-gray-800" />,
    },
    {
      title: "Future Vision",
      description:
        "We aim to build long-term global partnerships, ensuring quality, trust, and excellence in every project we deliver.",
      image: "/story4.jpg",
      icon: <Handshake className="w-10 h-10 text-gray-800" />,
    },
  ]

  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gray-100 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-lg text-gray-600">
            With over 3+ years of experience, Marmilix is evolving from local beginnings to global excellence.
          </p>
        </motion.div>
      </section>

      {/* Flow Timeline */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="relative border-l-4 border-gray-300">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-16 ml-6 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon marker */}
              <span className="absolute -left-10 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                {step.icon}
              </span>

              {/* Image + Content */}
              <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={800}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Building Relationships That Last</h2>
          <p className="mb-6 text-gray-300">
            From local roots to international projects, Marmilix is committed to creating long-term partnerships
            founded on trust, quality, and excellence.
          </p>
          <a
            href="mailto:info@marmilix.com"
            className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Connect With Us
          </a>
        </div>
      </section>
    </div>
  )
}
