"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full"
      >
        <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
        <p className="text-gray-700 text-lg">
          Your form has been submitted successfully. <br />
          We will connect with you within <span className="font-semibold">12–24 hours</span>.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
