// 'use server';


// export const fetchPosts = async () => {
//   return
// };

// export const fetchPostBySlug = async (slug: string) => {
//   return
// };

'use server';

import { createClient } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

// Define the Contentful entry type for a blog post
interface BlogPost {
  fields: {
    content: any; // Rich text type from Contentful
    title: string;
    thumbnailDescription: string;
    introDescription: string;
    datePublished: string;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    author: {
      fields: {
        name: string;
      };
    };
    tags: string[];
  };
}

// Fetch all blog posts
export const fetchPosts = async (): Promise<any> => {
  try {
    const response = await client.getEntries<any>({
      content_type: 'blogPost',
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Fetch a single blog post by its slug
export const fetchPostBySlug = async (slug: string): Promise<any | null> => {
  try {
    const response = await client.getEntries<any>({
      content_type: 'blogPost',
      'fields.slug': slug,
    });
    return response.items.length > 0 ? response.items[0] : null;
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error);
    return null;
  }
};
