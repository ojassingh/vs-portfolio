import { fetchPostBySlug, fetchPosts } from "../server";
import { NavbarDemo } from "../../components/Navbar";
import { merriweather } from "../../components/ui/fonts";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Footer from "@/app/components/Footer";

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post: any, i: any) => ({
    slug: post.fields.slug,
  }));
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchPostBySlug(params.slug);
  // console.log(post.fields.content);

  if (!post) {
    notFound(); // Return a 404 status if the post is not found
  }

  const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <h1 className="text-3xl sm:text-4xl md:text-5xl pt-4"><span className={merriweather.className}>{children}</span></h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h1 className="text-2xl sm:text-3xl md:text-4xl pt-4"><span className={merriweather.className}>{children}</span></h1>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <h1 className="text-xl sm:text-2xl md:text-3xl pt-4"><span className={merriweather.className}>{children}</span></h1>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="text-neutral-600 text-base sm:text-base md:text-lg">
          {children}
        </p>
      ),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
      // Add more custom rendering options as needed
    },
  };

  return (
    <div className="min-h-screen">
      <NavbarDemo />
      <div className="py-10 sm:py-20 md:py-32 px-6 sm:px-10 md:px-60 grid place-content-center">
        <div id="intro" className="flex gap-10 flex-wrap-reverse">
          <div className="flex-1 my-auto place-content-center items-center">
            <p className="text-gray-500 py-4 text-base sm:text-lg">
              Blog &middot; {new Date(post.fields.datePublished).toDateString()}{" "}
              &middot;{" "}
              <span className="bg-green-500 px-2 py-1 rounded-2xl text-white">
                {post.fields.readTime} min read
              </span>
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 md:leading-[120%]">
              <span className={merriweather.className}>
                {post.fields.title}
              </span>
            </h1>
            <div className="py-4">
              <p className="text-gray-500 text-base sm:text-lg md:text-xl py-2 md:leading-[150%]">
                {post.fields.introDescription}
              </p>

              <div className="flex flex-wrap items-center mt-5">
                <Image
                  className="rounded-full"
                  src={`https:${post.fields.author.fields.authorHeadshot.fields.file.url}`}
                  alt={post.fields.author.fields.name}
                  width={50}
                  height={50}
                />
                <div className="ml-3 text-sm sm:text-base md:text-lg">
                  <p className="text-gray-900 font-semibold">
                    {post.fields.author.fields.name}
                  </p>
                  <p className="text-gray-500">
                    {post.fields.author.fields.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 max-w-4xl my-auto">
            {post.fields.thumbnail && (
              <Image
                className="rounded-2xl"
                src={`https:${post.fields.thumbnail.fields.file.url}`}
                alt={post.fields.title}
                width={500}
                height={300}
                layout="responsive"
              />
            )}
          </div>
        </div>
        <div className="">
          <div
            id="content"
            className="prose prose-stone max-w-none py-20 text-black text-xl"
          >
            {documentToReactComponents(post.fields.content, richTextOptions)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
