"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"

export default function AboutPage() {
    const features = [
    {
      title: "Premium Quality",
      description:
        "Every Marmilix product is crafted with precision, ensuring durability, elegance, and unmatched quality.",
    },
    {
      title: "Sustainable Innovation",
      description:
        "We combine modern design with eco-friendly practices to create timeless, sustainable products.",
    },
    {
      title: "Customer-Centric",
      description:
        "Our focus is on delivering value and trust by putting our customers at the heart of every creation.",
    },
    {
      title: "Heritage Meets Modern",
      description:
        "Blending cultural inspiration with contemporary aesthetics to design products that resonate globally.",
    },
  ];

  return (
    <>
    
<div className="px-6 md:px-20 py-12 space-y-16 mt-15">

{/* Founder Video */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center"
      >
        <iframe
          src="/founders.mp4"
          className="rounded-2xl shadow-lg w-full md:w-3/4 h-80 md:h-[480px]"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </motion.div>

      {/* Founder Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Aryan Mittal
        </h1>
        <p className="text-lg mt-2 text-gray-600">Founder, Marmilix</p>
        <h2 className="mt-8 text-2xl md:text-3xl font-semibold">
           WE DON’T JUST CREATE PRODUCTS. WE BUILD EXPERIENCES.
        </h2>
        <p className="mt-6 text-gray-700 leading-relaxed">
          We believe in the power of innovation rooted in timeless
          values. Every collection is thoughtfully designed to balance
          functionality, aesthetics, and sustainability. Our mission is to
          inspire confidence and authenticity by offering products that not only
          serve but also tell a story.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 text-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[rgb(244,240,238)] p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To design and deliver premium products that combine quality,
            sustainability, and innovation, making everyday experiences more
            meaningful and stylish.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[rgb(244,240,238)] p-6 rounded-2xl shadow-sm "
        >
          <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To become a globally admired brand that redefines modern lifestyle
            by blending heritage craftsmanship with contemporary innovation.
          </p>
        </motion.div>
      </div>

      {/* What Sets Us Apart */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          What Sets Us Apart
        </h2>
        <div className="grid md:grid-cols-4 gap-6 ">
          {features.map((feature, idx) => (
            <div key={idx} className="rounded-2xl shadow-md bg-[#F7F7F7] hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <h4 className="text-lg font-semibold">{feature.title}</h4>
                <p className="text-sm text-gray-600 mt-3">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      
    </div>






    
    <main className="bg-white text-gray-900">

        {/* Heritage Banner */}
      {/* <section className="bg-gray-900 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Heritage of Excellence</h2>
        <p className="text-lg text-gray-300 mb-6">Three Decades of Stone Mastery</p>
        <button className="bg-yellow-600 px-6 py-3 rounded-md font-medium hover:bg-yellow-700 transition">
          Since 1990 • Premium Natural Stones
        </button>
      </section> */}

      {/* Founder’s Message */}
{/* <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
  {/* Message Text 
  <div className="md:w-1/2">
    <h2 className="text-3xl font-bold mb-4">Message from Our Founder</h2>
    <p className="text-gray-700 mb-4">
      At Marmilix, our journey has always been about combining traditional craftsmanship with
      modern innovation. We strive to deliver the highest quality natural stones to clients
      around the world while preserving the beauty and authenticity of each piece.
    </p>
    <p className="text-gray-700">
      – Aryan Mittal, Founder
    </p>
  </div>

  {/* Video 
  <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
    <video
      src="/founder-message.mp4"
      controls
      className="w-full h-auto rounded-lg"
    />
  </div>
</section> */}

       {/* Story of Excellence */}
      {/* <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Story of Excellence</h2>
        <p className="text-gray-700 mb-6">
          Founded in 1990 in the heart of Rajasthan, Marmilix began as a small family
          business with a simple vision: to share the extraordinary beauty of Indian
          natural stones with the world.
        </p>
        <p className="text-gray-700 mb-6">
          Over three decades, we have grown from a local stone supplier to a globally
          recognized export company, serving clients across 40+ countries. Our journey
          has been built on unwavering commitment to quality, authenticity, and the
          timeless craft of stone mastery.
        </p>
        <p className="text-gray-700">
          Today, Marmilix stands at the intersection of traditional craftsmanship and
          modern technology, ensuring every piece we export meets the highest
          international standards while preserving natural beauty.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Image src="/about-page.jpeg" alt="Team" width={400} height={250} className="rounded-lg" />
          <Image src="/Luxury-Private-Residence.jpeg" alt="Factory" width={400} height={250} className="rounded-lg" />
          <Image src="/Luxury-Private-Residence.jpeg" alt="Worker" width={400} height={250} className="rounded-lg" />
          <Image src="/Luxury-Private-Residence.jpeg" alt="Containers" width={400} height={250} className="rounded-lg" />
        </div>
      </section> */}

      {/* Core Values */}
      {/* <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
        <p className="text-gray-600 mb-10">
          The principles that guide everything we do, from sourcing to delivery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">Uncompromising Quality</h3>
            <p className="text-gray-600">
              Every piece is carefully selected, processed, and quality-checked to
              exceed expectations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">Rich Heritage</h3>
            <p className="text-gray-600">
              Since 1990, Marmilix has been at the forefront of natural stone exports,
              blending craftsmanship with technology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">Global Trust</h3>
            <p className="text-gray-600">
              Serving clients in 40+ countries with commitment to quality,
              authenticity, and timely delivery.
            </p>
          </div>
        </div>
      </section> */}

      {/* Expert Team */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
        <p className="text-gray-600 mb-10">
          Dedicated professionals bringing decades of expertise to every project
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded-lg">
            <Image src="/phtoto2.jpeg" alt="Aryan Mittal" width={120} height={120} className="mx-auto rounded-full" />
            <h3 className="text-xl font-semibold mt-4">Aryan Mittal</h3>
            <p className="text-yellow-600 font-medium">Founder</p>
            <p className="text-gray-600 mt-2">
              With 30+ years in the natural stone industry, Aryan founded Marmilix with
              a vision to showcase India’s finest stones to the world.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <Image src="/phtoto2.jpeg" alt="Priya Sharma" width={120} height={120} className="mx-auto rounded-full" />
            <h3 className="text-xl font-semibold mt-4">Priya Sharma</h3>
            <p className="text-yellow-600 font-medium">Export Director</p>
            <p className="text-gray-600 mt-2">
              Leading our international operations, Priya ensures seamless export
              processes and global partnerships.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <Image src="/phtoto2.jpeg" alt="Amit Kumar" width={120} height={120} className="mx-auto rounded-full" />
            <h3 className="text-xl font-semibold mt-4">Amit Kumar</h3>
            <p className="text-yellow-600 font-medium">Quality Manager</p>
            <p className="text-gray-600 mt-2">
              Amit oversees quality control from quarry selection to final packaging,
              ensuring global standards.
            </p>
          </div>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section className="bg-gray-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold">30+</h3>
            <p className="text-gray-300">Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">40+</h3>
            <p className="text-gray-300">Countries Served</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">99%</h3>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-4">Experience the Marmilix Difference</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Join thousands of satisfied clients worldwide who trust Marmilix for their
          premium natural stone needs.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <button className="bg-yellow-600 text-white px-6 py-3 rounded-md font-medium hover:bg-yellow-700 transition">
              Start Your Project
            </button>
          </Link>
          <Link href="/products">
          <button className="border border-gray-400 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
            View Our Products
          </button>
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
