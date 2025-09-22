"use client"

import { motion } from "framer-motion"
import Image from "next/image"
export default function PrivacyPolicyPage() {
  return (
    
    <div>
        <section className="relative h-64 flex items-center justify-center bg-black">
                <div className="absolute inset-0">
                  <Image
                    src="/hero-privacy.jpg"
                    alt="Privacy Policy Banner"
                    fill
                    className="object-cover opacity-60"
                  />
                </div>
                <div className="relative text-center text-white z-10">
                  <h1 className="text-4xl font-bold">Privacy Policy</h1>
                  <p className="mt-2 text-lg">
                    Your privacy is important to us. Read our policy to learn more.
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
        Privacy Policy
      </motion.h1>

      <div className="space-y-6 leading-relaxed text-gray-700">
        <p>
          At <span className="font-semibold">Marmilix</span>, we value your trust and are committed
          to protecting your personal information. This Privacy Policy explains how we collect, use,
          and safeguard your data when you interact with our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
        <p>
          We may collect personal details such as your name, email address, phone number, and any
          information you provide when contacting us or making inquiries. Additionally, we may
          collect non-personal data such as browser type, device information, and website usage
          statistics to improve our services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To respond to your inquiries and provide customer support.</li>
          <li>To share updates about our products, services, and promotions (with your consent).</li>
          <li>To improve our website, user experience, and offerings.</li>
          <li>To comply with legal obligations where required.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Data Protection</h2>
        <p>
          We use industry-standard security measures to safeguard your personal information. While
          we strive to protect your data, please note that no method of transmission over the
          internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Sharing of Information</h2>
        <p>
          We do not sell or trade your personal information. We may share data with trusted partners
          who assist us in operating our website, conducting business, or serving you—provided they
          agree to keep your information confidential.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Cookies</h2>
        <p>
          Our website may use cookies to enhance your browsing experience. You can choose to disable
          cookies in your browser settings, though some features may not function properly as a
          result.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Your Rights</h2>
        <p>
          You have the right to access, update, or request deletion of your personal information. To
          exercise these rights, please contact us at{" "}
          <a href="mailto:info@marmilix.com" className="text-blue-600 underline">
            info@marmilix.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Updates to This Policy</h2>
        <p>
          Marmilix may update this Privacy Policy from time to time. Any changes will be posted on
          this page with a revised effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please reach out to us at: <br />
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
    </div>
  )
}
