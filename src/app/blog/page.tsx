import { fetchPosts } from "./server";
import { NavbarDemo } from "../components/Navbar";
import { merriweather } from "../components/ui/fonts";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default async function Blogs() {
  // const posts = await fetchPosts();
  return (
    <div className="min-h-screen">
      <NavbarDemo />
      {/* <div className="py-16 grid place-content-center">
        
        <h1 className="text-5xl font-semibold mb-10 text-center ">
          <span className={merriweather.className}>Vandana Singh and Associates Blog</span>
        </h1>
        <h3 className="text-gray-500 text-lg text-center">
          "Navigating the Legal Labyrinth: Cutting-Edge Compliance Insights"
        </h3>
        <div className="py-10 flex gap-8 place-content-center">
          {posts.map((post: any) => (
            <Link key={post.id} href={"/blog/" + post.slug}>
              <div
                key={post.id}
                className="shadow-lg rounded-2xl p-4 hover:translate-y-[-3px] transition-all grid place-content-center max-w-sm"
              >
                <Image
                  className="rounded-2xl"
                  src={post.thumbnail.url}
                  alt={post.title}
                  width={500}
                  height={300}
                  layout="responsive"
                />
                <div className="py-4">
                  <p className="text-gray-500">
                    {new Date(post.publishedDate).toDateString()} |{" "}
                    {post.readTime} min read
                  </p>
                  <h2 className="text-2xl py-3 font-semibold hover:inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 underline">
                    {post.title}
                  </h2>
                  <p className="text-gray-500">{post.thumbnailDescription}</p>
                  <div className="flex items-center mt-5">
                    {post.author.headshotUrl && (
                      <Image
                        className="rounded-full"
                        src={post.author.headshotUrl}
                        alt={post.author.name}
                        width={50}
                        height={50}
                      />
                    )}
                    <div className="ml-3">
                      <p className="text-gray-900 font-semibold">
                        {post.author.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
}
