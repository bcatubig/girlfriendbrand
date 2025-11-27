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
      category: z.enum([
        "accessories",
        "jackets/vests",
        "shirts",
        "sweaters/hoodies",
        "t-shirts",
      ]),
      sizes: z.array(z.enum(["xs", "s", "m", "l", "xl", "2xl"])),
      price_usd: z.number(),
      description: z.string(),
      cover: image(),
      images: z.array(image()),
      tags: z.array(z.string()),
      isDraft: z.boolean(),
      slug: z.string(),
    }),
});

export const collections = { products };
