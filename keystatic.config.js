// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    products: collection({
      label: "Products",
      slugField: "title",
      path: "src/content/products/*/",

      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Product Title" },
        }),
        cover: fields.image({
          label: "Cover Image",
          description: "The primary product image displayed on the homepage",
          directory: "src/assets/images/products",
          publicPath: "@assets/images/products/",
        }),
        category: fields.select({
          label: "Product Category",
          defaultValue: "designer",
          options: [
            { label: "Designer", value: "designer" },
            { label: "Developer", value: "developer" },
            { label: "Product manager", value: "product-manager" },
          ],
        }),
        price_usd: fields.number({
          label: "Price $",
          step: 1,
          defaultValue: 0,
          validation: {
            min: 0,
          },
        }),
        productImages: fields.array(
          fields.image({
            label: "Product Image",
            description: "Add a new product image",
            validation: { isRequired: true },
            directory: "src/assets/images/products",
            publicPath: "@assets/images/products/",
          }),
          {
            label: "Product Images",
            description: "Additional product images",
            itemLabel: (props) => props.value.filename,
          },
        ),
        specifications: fields.array(fields.text({}), {
          label: "Specifications",
          itemLabel: (props) => props.value,
        }),
        content: fields.markdoc({ label: "Product Description" }),
      },
    }),
  },
});
