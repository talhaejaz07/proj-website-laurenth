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

export const collections = {
  profiles: profilesCollection,
  testimonials: testimonialsCollection,
  steps: stepsCollection,
};
