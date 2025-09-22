"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const designs = [
  { src: "/design1.jpg", alt: "Elegant Marble Design" },
  { src: "/design2.jpg", alt: "Luxury Granite Design" },
  { src: "/design3.jpg", alt: "Modern Stone Pattern" },
  { src: "/design4.jpg", alt: "Classic Marble Pattern" },
  { src: "/design5.jpg", alt: "Premium Granite Finish" },
  { src: "/design6.jpg", alt: "Artistic Stone Design" },
];

export default function DesignGallery() {
  return (
    <div className="min-h-screen bg-white py-12 px-6 lg:px-20 mt-15">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Marmilix Design Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {designs.map((design, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            <Image
              src={design.src}
              alt={design.alt}
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-gray-800 font-medium">{design.alt}</p>
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
