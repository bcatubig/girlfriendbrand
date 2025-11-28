// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { imageService } from "@unpic/astro/service";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["astro.build", "placehold.co"],
    service: imageService(),
  },
  experimental: {
    contentIntellisense: true,
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Raleway",
        cssVariable: "--ff-raleway",
        weights: [400, 500, 600, 700, 800],
      },
      {
        provider: fontProviders.google(),
        name: "Pacifico",
        cssVariable: "--ff-pacifico",
      },
      {
        provider: fontProviders.google(),
        name: "Homemade Apple",
        cssVariable: "--ff-homemade-apple",
        weights: [400, 500, 600, 700, 800],
      },
    ],
    headingIdCompat: true,
  },
});
