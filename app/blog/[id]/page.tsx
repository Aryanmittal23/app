"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "../../data/blog/blog";

export default function BlogDetailPage() {
  const { id } = useParams();
  const [visibleCount, setVisibleCount] = useState(3); // show 3 initially

  const blog = blogs.find((b) => b.id === Number(id));
  const related = blogs.filter((b) => b.id !== Number(id));

  if (!blog) return <p className="p-8">Blog not found</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 mt-12">
      {/* Main Blog */}
      
      <article className="mb-10 ">
        <Image
          src={blog.image}
          alt={blog.title}
          width={900}
          height={600}
          className="rounded-xl shadow-lg object-cover mb-8 w-full h-[600px]"
        />
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          By {blog.author} • {blog.date}
        </p>
        {/* <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p> */}
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>

      {/* Related Blogs */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {related.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="object-cover w-full h-56"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.excerpt}</p>
                <Link href={`/blog/${item.id}`}>
                  <button className="mt-3 w-full border hover:bg-gray-100 cursor-pointer px-4 py-2 rounded-lg transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Load More Button */}
        {visibleCount < related.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-3 rounded-lg border hover:bg-black hover:text-white cursor-pointer transition shadow-md"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
