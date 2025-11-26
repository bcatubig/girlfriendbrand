import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const products = defineCollection({
  loader: glob({
    pattern: ["**/.md", "**/*.mdx", "**/*.yml"],
    base: "./src/data/products",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      price: z.string(),
      description: z.string(),
      cover: image(),
      slug: z.string(),
      images: z.array(image()),
    }),
});

export const collections = { products };
