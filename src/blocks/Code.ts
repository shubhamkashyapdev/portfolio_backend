import { Block } from "payload/types"

export const CodeBlock: Block = {
  slug: "code",
  imageURL:
    "https://res.cloudinary.com/hexdev/image/upload/v1667408000/shubhamwebdesign/vmrlmd6iw6dsn2v1ofvw.webp",
  imageAltText: "Code",
  fields: [
    {
      name: "code",
      label: "Code",
      type: "richText",
      required: true,
    },
    {
      name: "language",
      label: "Select Code Language",
      type: "select",
      options: [
        { label: "jsx", value: "jsx" },
        { label: "json", value: "json" },
      ],
      required: true,
    },
    {
      name: "show-line-numbers",
      label: "Show Libe Numbers",
      type: "checkbox",
      defaultValue: false,
    },
  ],
}
