"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Globe,
  X
} from "lucide-react"

import { FaPinterest, FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      href: "https://www.facebook.com/profile.php?id=61580986195592",
      hoverColor: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/marmilix_official/",
      hoverColor: "hover:text-pink-600",
    },
    {
  name: "X",
  icon: <FaXTwitter className="w-6 h-6" />,
  href: "https://x.com/marmilix",
  hoverColor: "hover:text-neutral-800",
},
    {
      name: "Pinterest",
      icon: <FaPinterest className="w-6 h-6" />,
      href: "https://in.pinterest.com/marmilix/",
      hoverColor: "hover:text-red-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/marmilix/about/?viewAsMember=true",
      hoverColor: "hover:text-blue-700",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/our-story" },
      // { name: "Careers", href: "#" },
      // { name: "Press", href: "#" },
    ],
    Products: [
      { name: "Marble Collection", href: "/products" },
      { name: "Granite Selection", href: "/products" },
      { name: "Custom Solutions", href: "/products" },
      // { name: "Installation Services", href: "#" },
    ],
    Resources: [
      { name: "Portfolio", href: "/portfolio" },
      { name: "Care & Maintenance", href: "/care-maintenance" },
      { name: "Design Gallery", href: "/design-gallery" },
      // { name: "Technical Specs", href: "#" },
    ]
  };
  return (
    <footer className="bg-white text-black">
      <section className="py-16 bg-neutral-100 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg font-medium text-neutral-500 tracking-wider mb-12 uppercase">
              Keep in Touch
            </h2>

            <div className="flex justify-center items-center space-x-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-neutral-800 ${social.hoverColor} transition-all duration-300 transform hover:scale-110`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="absolute bottom-8 right-8 text-neutral-600 hover:text-neutral-800 transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8 space-x-2 mt-0">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/marmilixLogo1.png"
              alt="Marmilix"
              width={200}
              height={60}
              className="h-36 w-auto"
              priority
            />
             <p className="text-gray-1200 text-sm leading-snug">
                Beyond the Surface: Crafting Spaces with Marmilix's Exquisite Stone Solutions.
              </p> 
          </div>
        {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm mb-4 tracking-wide  font-semibold text-black">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          {/* Contact Info */}
          <div>
            <h3 className="text-sm mb-4 tracking-wide font-semibold text-black">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 ">
                <Mail size={16} className="text-brand-green-400" />
                <a href="mailto:info@marmilix.com" className="text-black" >info@marmilix.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-green-400" />
                <a href="tel:+918109663368" className="text-black">+91 8109663368</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={30} className="text-brand-green-400" />
                <a href="https://www.google.com/maps?q=Sheopur,+Madhya+Pradesh,+India" className="text-black">Sheopur, Madhya Pradesh, India</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black text-sm">
              © 2025 Marmilix. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-black hover:text-brand-green-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-black hover:text-brand-green-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
