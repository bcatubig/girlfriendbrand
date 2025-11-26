// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentIntellisense: true,
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Raleway",
        cssVariable: "--ff-raleway",
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
      },
    ],
    headingIdCompat: true,
  },
});
