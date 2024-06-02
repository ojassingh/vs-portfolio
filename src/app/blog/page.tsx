import { fetchPosts } from "./server";
import { NavbarDemo } from "../components/Navbar";
import { merriweather } from "../components/ui/fonts";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";

export default async function Blogs() {
  const posts = await fetchPosts();
  // console.log(posts);

  return (
    <>
      <div className="min-h-screen">
        <NavbarDemo />
        <div className="py-16 px-4 sm:px-0 grid place-content-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 text-center">
            <span className={merriweather.className}>
              Vandana Singh and Associates Blog
            </span>
          </h1>
          <h3 className="text-gray-500 text-base md:text-lg text-center">
            "Navigating the Legal Labyrinth: Cutting-Edge Compliance Insights"
          </h3>
          <hr className="h-px my-8 bg-gray-100 border-0 dark:bg-gray-500"/>
          <div className="flex gap-8 place-content-center items-center">
            {posts.map((post: any) => (
              <Link key={post.sys.id} href={"/blog/" + post.fields.slug}>
                <div
                  key={post.sys.id}
                  className="shadow-lg rounded-2xl p-4 hover:translate-y-[-3px] transition-all grid place-content-center max-w-sm"
                >
                  <Image
                    className="rounded-2xl"
                    src={`https:${post.fields.thumbnail.fields.file.url}`}
                    alt={post.fields.title}
                    layout="responsive"
                    width={400}
                    height={200}
                  />
                  <div className="py-4">
                    {/* <p className="text-gray-500">
                      {new Date(post.fields.datePublished).toDateString()}
                    </p> */}
                    <h2 className="text-lg sm:text-xl md:text-2xl py-3 font-semibold hover:inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600">
                      {post.fields.title}
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg">{post.fields.thumbnailDescription}</p>
                    <div className="flex items-center mt-5">
                      <Image
                          className="rounded-full"
                          src={`https:${post.fields.author.fields.authorHeadshot.fields.file.url}`}
                          alt={post.fields.author.fields.name}
                          width={50}
                          height={50}
                        />
                      <div className="ml-3">
                        <p className="text-gray-900 font-semibold text-base">
                          {post.fields.author.fields.name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {post.fields.author.fields.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
