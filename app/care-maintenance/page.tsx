"use client"

import { motion } from "framer-motion"

export default function CareMaintenancePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800 mt-15">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-gray-900"
      >
        Care & Maintenance
      </motion.h1>

      {/* Intro */}
      <p className="text-gray-600 mb-8 leading-relaxed">
        Marmilix stone surfaces are crafted to last for generations. With proper care and simple
        cleaning habits, your marble and granite will retain their beauty and durability for years
        to come.
      </p>

      {/* Quick Tips */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Quick Care Tips
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Clean surfaces regularly with a soft cloth and mild soap.</li>
          <li>Avoid harsh chemicals, acidic cleaners, and abrasive scrubbers.</li>
          <li>Use coasters, trivets, and mats to protect from stains and heat.</li>
          <li>Seal marble and granite periodically for long-lasting shine.</li>
          <li>Wipe spills immediately, especially wine, coffee, or oil.</li>
        </ul>
      </div>

      {/* Videos */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">
            How to Clean Marble Surfaces
          </h3>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/JR1CXVwY1N0"
              title="How to Clean Marble"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900">
            How to Clean Granite Surfaces
          </h3>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/S8uzG_MMG6o"
              title="How to Clean Granite"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <p className="text-gray-600 mt-12 text-center">
        For personalized care instructions, contact{" "}
        <a href="/contact" className="text-blue-600 underline">
          Marmilix experts
        </a>.
      </p>
    </div>
  )
}
