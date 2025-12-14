import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const products = defineCollection({
  loader: glob({
    pattern: ["**/*.mdoc"],
    base: "./src/content",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      category: z.string(),
      price_usd: z.number(),
      productImages: z.array(image()),
      specifications: z.array(z.string()),
    }),
});

export const collections = { products };
