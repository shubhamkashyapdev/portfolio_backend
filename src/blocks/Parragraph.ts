import { Block } from "payload/types"

const ParragraphBlock: Block = {
  slug: "parragraph",
  imageURL:
    "https://res.cloudinary.com/hexdev/image/upload/v1667407772/shubhamwebdesign/sntxec3ngztaww4ykb39.webp",
  imageAltText: "Parragraph",
  fields: [
    {
      name: "parragraph",
      label: "Primary Heading Text",
      type: "richText",
      required: true,
    },
  ],
}
export default ParragraphBlock
