import { fetchPostBySlug, fetchPosts } from "../server";
import { NavbarDemo } from "../../components/Navbar";
import { merriweather, sora } from "../../components/ui/fonts";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  const posts = await fetchPosts();
  // return posts.map((post: any) => ({
  //   slug: post.slug,
  // }));
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  // const post = await fetchPostBySlug(params.slug);
  // console.log(post);

  // if (!post) {
  //   notFound(); // Return a 404 status if the post is not found
  // }

  return (
    <div className="min-h-screen">
      <NavbarDemo />
      {/* <div className="p-32 grid place-content-center">
        <div id="intro" className="flex gap-10 flex-wrap-reverse">
          <div className="flex-1 my-auto place-content-around">
            <h1 className="text-5xl font-bold">
              <span className={merriweather.className}>{post.title}</span>
            </h1>
            <div className="py-4">
              <p className="text-gray-500 text-xl py-2">{post.introDescription}</p>
              <p className="text-gray-500 py-2">
                {new Date(post.publishedDate).toDateString()} | {post.readTime}{" "}
                min read
              </p>
              <div className="flex items-center mt-5">
                <Image
                  className="rounded-full"
                  src={post.author.headshotUrl}
                  alt={post.author.name}
                  width={50}
                  height={50}
                />
                <div className="ml-3 text-lg">
                  <p className="text-gray-900 font-semibold">
                    {post.author.name}
                  </p>
                  <p className="text-gray-500">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 max-w-4xl">
            <Image
              className="rounded-2xl"
              src={post.thumbnailUrl}
              alt={post.title}
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
        </div>
        <div className={merriweather.className}>
          <div
            id="content"
            dangerouslySetInnerHTML={{ __html: post.content_html }}
            className="prose prose-stone max-w-none py-20 text-black text-xl"
          />
        </div>
      </div> */}
    </div>
  );
}
