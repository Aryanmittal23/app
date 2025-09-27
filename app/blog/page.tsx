"use client";

import Image from "next/image";
import {blogs} from "../data/blog/blog";
import Link from "next/link";


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
          {blogs.map((post) => (
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
                  {post.date}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <button className="mt-4 px-4 py-2 border rounded text-sm hover:bg-black hover:text-white transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
