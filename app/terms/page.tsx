"use client"

import { motion } from "framer-motion"
import Image from "next/image"
export default function TermsOfServicePage() {
  return (
    <>
    <section className="relative h-64 flex items-center justify-center bg-black">
                    <div className="absolute inset-0">
                      <Image
                        src="/hero-terms.jpg"
                        alt="terms Banner"
                        fill
                        className="object-cover opacity-60"
                      />
                    </div>
                    <div className="relative text-center text-white z-10">
                      <h1 className="text-4xl font-bold">Terms of Service</h1>
                      <p className="mt-2 text-lg">
                        Please read our terms of service carefully before using our website.
                      </p>
                    </div>
        </section>
      <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-gray-900"
      >
        Terms of Service
      </motion.h1>

      <div className="space-y-6 leading-relaxed text-gray-700">
        <p>
          Welcome to <span className="font-semibold">Marmilix</span>. By accessing or using our
          website, services, or products, you agree to comply with and be bound by the following
          Terms of Service. Please read them carefully before proceeding.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Use of Our Services</h2>
        <p>
          You agree to use our website and services only for lawful purposes and in accordance with
          these Terms. You must not use Marmilix’s website in any way that may damage, disable, or
          impair our services or interfere with others’ use of the site.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. Intellectual Property</h2>
        <p>
          All content, logos, trademarks, images, and materials available on the Marmilix website
          are the property of Marmilix unless otherwise stated. You may not reproduce, distribute,
          or use any material without prior written consent.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Orders & Payments</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>All orders are subject to availability and confirmation.</li>
          <li>
            Prices are provided in accordance with quotations and may vary depending on material
            type, size, and customization.
          </li>
          <li>
            Payment terms will be communicated at the time of order confirmation. Delayed payments
            may incur additional charges.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Shipping & Delivery</h2>
        <p>
          Marmilix strives to deliver products within the agreed timelines. However, we are not
          responsible for delays caused by logistics providers, customs, or unforeseen
          circumstances. Risk of damage or loss passes to you upon delivery.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Returns & Refunds</h2>
        <p>
          Due to the nature of natural stone, variations in color, texture, and pattern are normal.
          Returns are accepted only for defective or incorrect orders delivered. Refunds (if
          applicable) will be processed according to our refund policy.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Limitation of Liability</h2>
        <p>
          Marmilix will not be liable for any indirect, incidental, or consequential damages arising
          from the use or inability to use our products or services. Our liability is limited to the
          value of the product purchased.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Privacy Policy</h2>
        <p>
          Your use of our website is also governed by our{" "}
          <a href="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          . Please review it to understand how we handle your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">8. Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and interpreted in accordance with the laws of
          India. Any disputes will be subject to the exclusive jurisdiction of the courts located in
          Madhya Pradesh, India.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">9. Changes to Terms</h2>
        <p>
          Marmilix reserves the right to update or modify these Terms at any time. Continued use of
          our website or services after changes indicates your acceptance of the revised Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">10. Contact Us</h2>
        <p>
          For any questions about these Terms, please contact us: <br />
          <span className="font-medium">Email:</span>{" "}
          <a href="mailto:info@marmilix.com" className="text-blue-600 underline">
            info@marmilix.com
          </a>{" "}
          <br />
          <span className="font-medium">Phone:</span> +91 8109663368
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-12">
        Effective Date: September 22, 2025
      </p>
    </div>
    </>
  )
}
