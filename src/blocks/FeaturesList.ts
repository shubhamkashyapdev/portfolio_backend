import { Block } from "payload/types"

export const FeaturesList: Block = {
  slug: "featureslist",
  imageURL:
    "https://res.cloudinary.com/hexdev/image/upload/v1668104431/shubhamwebdesign/tgdvszih2xrreckzbuuw.webp",
  imageAltText: "Features List",
  fields: [
    {
      name: "features",
      label: "Features",
      type: "array",
      fields: [
        {
          name: "featureIcon",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "featureText",
          type: "text",
          required: true,
        },
      ],
    },
  ],
}
