"use client";

import { useState } from "react";
import { useRouter } from "next/navigation" 
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { countries } from "../data/countries/countries";
import Image from "next/image";

export default function ContactPage() {
   const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    project: "",
    consent: false,
  })
const router = useRouter()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlePhoneChange = (value: string, country: CountryData) => {
    setForm({ ...form, phone: value, country: country.name });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const oldForm={...form};

        setForm({ name: "", email: "", phone: "", country: "", project: "" ,consent:false})
        router.push("/thank-you")
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzmMQt5Vh3M7v-5lXeKrJIhcz2IqkmkkH4HIGuXNVvrwvTe6CGMMV1oHr1gI90AQUd8xg/exec", {
  method: "POST",
  mode: "no-cors", // important for Google Apps Script
  body: JSON.stringify(oldForm),
  headers: {
    "Content-Type": "application/json",
  },
      })

      // if (response.ok) {
          
      } catch (error) {
      console.error("Error:", error)
      alert("Something went wrong!")
    }
  }
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 text-center">
        <div className="absolute inset-0" />
        <Image
            src="/contact-img.webp"
            alt="Blog Banner"
            fill
            className="object-cover opacity-80"
          />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">Get In Touch</h1>
          <p className="mt-2 text-lg">Let&apos;s Discuss Your Project</p>
          <button className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded-full">
            Available 24/7 for International Clients
          </button>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-6">
        {/* Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-6 text-gray-600">Let&apos;s Discuss Your Project</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
            {/* Phone Input with Country Code */}
      <PhoneInput
        country={"in"} // default India
        value={form.phone}
        onChange={handlePhoneChange}
        inputStyle={{ width: "100%" }}
        containerClass="rounded-lg"
        inputClass="w-full border rounded-lg px-4 py-2"
      />

      {/* Country Dropdown (automatically filled) */}
      <select
        name="country"
        value={form.country}
        onChange={handleChange}
        className="w-full border rounded-md p-2"
      >
        {form.country ? (
          <option value={form.country}>{form.country}</option>
        ) : (
          <option value="">Select Country</option>
        )}
      </select>
            

            {/* Consent */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="w-4 h-4"
                required
              />
              <span className="text-gray-600 text-sm">
                I agree to be contacted via phone and email
              </span>
            </label>
            <textarea
              name="project"
              placeholder="Project Details *"
              value={form.project}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 h-28"
            />
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-bold text-lg">Visit Our Office</h3>
            <p className="text-gray-600 mt-2">
              Marmilix <br />
              City of Shiv, Sheopur <br />
              Madhya Pradesh, India - 476337
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-bold text-lg">Call Us</h3>
            <p className="text-gray-600 mt-2">
              +91-8109663368 {/*<br /> +91-81096-63368 */}
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="font-bold text-lg">Email Us</h3>
            <p className="text-gray-600 mt-2">info@marmilix.com</p>
          </div>
        </div>
      </section>

      {/* Map + Why Visit */}
      <section className="container mx-auto grid grid-cols-1 gap-8 py-16 px-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.4671779472313!2d78.7494827750881!3d25.66846458363269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a9055e272d7f%3A0x4200e1263c7246a3!2sSheopur%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1695379162920!5m2!1sen!2sin"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      {/* <div>
          <h2 className="text-2xl font-bold mb-4">Why Visit Our Showroom?</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Touch & Feel Quality</li>
            <li>✅ Expert Consultation</li>
            <li>✅ Facility Tour</li>
            <li>✅ Custom Solutions</li>
          </ul>
          <a href="https://www.google.com/maps?q=Sheopur,+Madhya+Pradesh,+India" className="text-black">
          <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Get Directions
          </button>
          </a>
        </div> */}
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="font-bold">What is your minimum order quantity?</h3>
              <p className="text-gray-600 mt-2">
                Our minimum order quantity is typically 100 square meters for
                most stone varieties. However, smaller orders can be accommodated
                with adjusted pricing.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="font-bold">How long does shipping take?</h3>
              <p className="text-gray-600 mt-2">
                Shipping varies: 15–25 days to Middle East, 20–30 days to
                Europe, 25–35 days to Americas. Tracking info provided for all
                shipments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  }
