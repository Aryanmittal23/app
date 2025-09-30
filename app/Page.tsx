"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react";
import { Shield, Gem, Globe, Users } from "lucide-react";
import { products } from "./data/products/products";
import { LinearFilter } from "three/src/constants.js";
import React from "react";

export default function Home() {
  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "40+", label: "Countries Served" },
    { number: "10K+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" },
  ]

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
    <div className="min-h-screen">
<section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mt-15"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* <Image
          src="/heroBackground.jpeg" // make sure this image is in /public folder
          alt="Luxury marble kitchen countertop"
          fill
          className="object-cover"
          priority
        /> */}
        <video src="/video-main.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge 
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm">Premium Quality Since 1985</span>
          </div>

          {/* Main Headline 
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            World-Class{" "}
            <span className="text-yellow-400">Marble</span> &{" "}
            <span className="text-yellow-400">Granite</span>
            <br />
            for Global Projects
          </h1>

          {/* Subheadline 
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Transform your spaces with our premium natural stones. From luxury
            residences to commercial landmarks, we deliver excellence across
            40+ countries worldwide.
          </p>

          {/* CTAs 
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products">
            <button className="flex items-center px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition text-lg">
              Explore Our Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            </Link>
            <Link href="/contact">
            <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition text-lg"> 
              Request Consultation
            </button>
            </Link>
          </div>

          {/* Stats 
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl mb-2">40+</div>
              <div className="text-sm text-gray-300">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl mb-2">5000+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl mb-2">35</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div> */}
    </section>

      {/* </section> */}

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
              <span className="bg-gray-900 text-white font-bold px-3 py-1 rounded-lg">
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
          <Link href="/about">
          <button className="mt-8 px-5 py-3 border rounded-lg hover:bg-gray-100 cursor-pointer">
            Learn More About Us
          </button>
          </Link>
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
  {products.slice(0, 3).map((p) => (
    <div
      key={p.id}
      className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-200"
    >
      <div className="relative w-full h-56">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover"
        />
        <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg">
          {p.category}
        </span>
      </div>
      <div className="p-6 text-left">
        <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
        <p className="text-gray-600 text-sm mt-2">{p.description}</p>
      </div>
      <div className="p-4">
        <Link href="/products/[id]" as={`/products/${p.id}`}>
          <button className="mt-3 w-full border  hover:bg-gray-100 px-4 py-2 rounded-lg transition cursor-pointer">
                    View Details
                  </button>
        </Link>
      </div>
    </div>
  ))}
</div>

          {/* View All Button */ }
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/products">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 cursor-pointer">
            View All Products
          </button>
          </Link>
        </div>
    </section>
        
      

      {/* Heritage Section */}
      

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

    {/* Testimonial Section */}
<section className="bg-white py-16 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
    <p className="text-gray-600 mb-12">
      Hear from our valued clients about their experience with{" "}
      <span className="font-bold">Marmilix</span>.
    </p>

    {/* Carousel */}
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex gap-8">
            {/* Single Testimonial */}
            <div className="min-w-[300px] max-w-sm bg-gray-50 shadow-lg rounded-xl p-6 text-left">
              <p className="text-gray-700 italic mb-4">
                “The marble quality exceeded expectations. Our hotel lobby looks
                absolutely stunning!”
              </p>
              <h4 className="font-bold text-gray-900">Devansh Sharma</h4>
              <span className="text-sm text-gray-500">Owner of Vinayak Residency, India</span>
            </div>

            <div className="min-w-[300px] max-w-sm bg-gray-50 shadow-lg rounded-xl p-6 text-left">
              <p className="text-gray-700 italic mb-4">
                “Timely delivery and premium granite helped us finish our project
                on schedule.”
              </p>
              <h4 className="font-bold text-gray-900">Vatsal Goyal</h4>
              <span className="text-sm text-gray-500">Architect, India</span>
            </div>

            <div className="min-w-[300px] max-w-sm bg-gray-50 shadow-lg rounded-xl p-6 text-left">
              <p className="text-gray-700 italic mb-4">
                “Marmilix stones brought unmatched elegance to our luxury villas.”
              </p>
              <h4 className="font-bold text-gray-900">Akash Jain</h4>
              <span className="text-sm text-gray-500">Builder, India</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>

      {/* Stats + CTA Section */}
      {/* <section className="bg-gray-900 text-white py-16">
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
            <button className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 cursor-pointer">
              Get Your Quote Today
            </button>
            </Link>
          </div>
        </div>
      </section> */}
   
    
    </div>
  )
}
