import { Block } from "payload/types"
import { TitleField } from "../fields"

const BlockQuote: Block = {
  slug: "blockquote",
  imageURL:
    "https://res.cloudinary.com/hexdev/image/upload/v1668104574/shubhamwebdesign/gcthvyioskulaxw2gxpj.webp",
  imageAltText: "Block Quote",
  fields: [
    TitleField,
    {
      name: "icons",
      type: "array",
      fields: [
        {
          name: "icon",
          label: "Icon URL",
          type: "text",
          required: true,
        },
      ],
    },
  ],
}

export default BlockQuote
