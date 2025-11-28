import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const products = defineCollection({
  loader: glob({
    pattern: ["**/*.md"],
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
      price_usd: z.number(),
      cover: image(),
      images: z.array(image()),
      tags: z.array(z.string()),
      isDraft: z.boolean(),
      slug: z.string(),
      specifications: z.array(z.string()),
    }),
});

export const collections = { products };
