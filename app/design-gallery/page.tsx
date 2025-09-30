"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryData } from "../data/gallery/gallery"; // adjust path if needed

export default function DesignGallery() {
  return (
    <div className="min-h-screen bg-white py-12 px-6 lg:px-20 mt-15">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Marmilix Design Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600">
          Explore our exclusive collection of marble and granite designs, crafted for elegance and durability.
        </p>
      </div>
    </div>
  );
}
