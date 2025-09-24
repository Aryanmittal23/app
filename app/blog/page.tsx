"use client";

import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Choosing the Right Marble ",
    category: "Marble",
    image: "/Exotic-granite.jpeg",
    excerpt:
      "Discover how to select the perfect marble for flooring, countertops, and wall cladding to match your interior style.",
  },
  {
    id: 2,
    title: "Granite vs Marble: Which is Better?",
    category: "Granite",
    image: "/Exotic-granite.jpeg",
    excerpt:
      "We compare granite and marble to help you understand durability, maintenance, and aesthetics.",
  },
  {
    id: 3,
    title: "Latest Stone Design Trends in 2025",
    category: "Trends",
    image: "/Exotic-granite.jpeg",
    excerpt:
      "From bold veining patterns to sustainable stone sourcing, here are the trends shaping luxury interiors.",
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/hero-blog.jpg"
            alt="Blog Banner"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl font-bold">Our Blog</h1>
          <p className="mt-2 text-lg">
            Insights & Inspiration from the World of Stone
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-200"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-lg">
                  {post.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                <button className="mt-4 px-4 py-2 border rounded text-sm hover:bg-black hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-12 text-center">
        <h2 className="text-2xl font-bold">Stay Inspired</h2>
        <p className="mt-2">
          Subscribe to our newsletter for the latest design tips and stone
          innovations.
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l border-none w-64 text-black"
          />
          <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-r">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
