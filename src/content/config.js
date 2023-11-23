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

export const collections = {
  profiles: profilesCollection,
};
