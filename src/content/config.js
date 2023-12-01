import { z, defineCollection } from "astro:content";

const profilesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      image: image(),
      name: z.string(),
      tags: z.array(z.string()),
    }),
});

const testimonialsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      image: image(),
      name: z.string(),
      position: z.string(),
    }),
});

const stepsCollection = defineCollection({
  type: "content",
  schema: z.object({
    key: z.number(),
    title: z.string(),
  }),
});

const blogPostsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      title: z.string(),
      description: z.string(),
      datePublished: z.date(),
      dateUpdated: z.date(),
      tags: z.array(z.string()),
      imageUrl: image(),
      imageAlt: z.string(),
    }),
});

export const collections = {
  profiles: profilesCollection,
  testimonials: testimonialsCollection,
  steps: stepsCollection,
  blogPosts: blogPostsCollection,
};
