import { Block } from "payload/types";

export const SecondaryHeadingBlock: Block = {
  slug: "secondary-heading",
  imageURL:
    "https://res.cloudinary.com/hexdev/image/upload/v1667406925/shubhamwebdesign/y5xux1di3wuduguqcemx.webp",
  imageAltText: "Secondary Heading",
  fields: [
    {
      name: "text",
      label: "Secondary Heading Text",
      type: "text",
      required: true,
    },
    {
      name: "classname",
      label: "Secondary Heading Tailwind ClassName",
      type: "text",
    },
  ],
};
