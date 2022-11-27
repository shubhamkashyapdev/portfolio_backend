import { Block } from "payload/types"

const SecondaryHeadingBlock: Block = {
  slug: "secondary-heading",
  imageURL:
    "https://res.cloudinary.com/hexdev/image/upload/v1667406925/shubhamwebdesign/y5xux1di3wuduguqcemx.webp",
  imageAltText: "Secondary Heading",
  fields: [
    {
      name: "secondaryHeading",
      label: "Secondary Heading Text",
      type: "text",
      required: true,
    },
  ],
}
export default SecondaryHeadingBlock
