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

export const collections = {
  profiles: profilesCollection,
  testimonials: testimonialsCollection,
};
