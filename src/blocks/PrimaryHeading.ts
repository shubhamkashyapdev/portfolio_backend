import { Block } from "payload/types"

const PrimaryHeadingBlock: Block = {
  slug: "primary-heading",
  imageURL:
    "https://res.cloudinary.com/hexdev/image/upload/v1667406925/shubhamwebdesign/y5xux1di3wuduguqcemx.webp",
  imageAltText: "Primary Heading",
  fields: [
    {
      name: "text",
      label: "Primary Heading Text",
      type: "text",
      required: true,
    },
  ],
}
export default PrimaryHeadingBlock
