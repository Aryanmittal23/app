import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-0">
              <Image
                            src="/marmilixLogo1.png"
                            alt="Marmilix"
                            width={200}
                            height={60}
                            className="h-50 w-auto"
                            priority
                          />
            </div>
            <p className="text-black mb-4 max-w-md leading-relaxed">
              Marmilix is your trusted global partner for premium marble, granite, and natural stones.
              We connect India’s finest craftsmanship with international markets, delivering quality that goes
              <strong> Beyond the Surface.</strong>
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61580986195592" className="text-black hover:text-brand-green-400 transition-colors p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/marmilix" className="text-black hover:text-brand-green-400 transition-colors p-2 rounded-full">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/marmilix_official/" className="text-black hover:text-brand-green-400 transition-colors p-2 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/marmilix/?viewAsMember=true" className="text-black hover:text-brand-green-400 transition-colors p-2 rounded-full">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-green-400">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Products", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-black hover:text-brand-green-400 transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-green-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-green-400" />
                <span className="text-black">info@marmilix.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-green-400" />
                <span className="text-black">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-brand-green-400" />
                <span className="text-black">Kishangarh, Rajasthan, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={16} className="text-brand-green-400" />
                <span className="text-black">www.marmilix.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black text-sm">
              © 2025 Marmilix. All rights reserved. | Beyond the Surface
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
