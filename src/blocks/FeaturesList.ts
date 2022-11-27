import { Block } from "payload/types"

const FeaturesList: Block = {
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
          name: "featureText",
          type: "text",
          required: true,
        },
      ],
    },
  ],
}
export default FeaturesList
