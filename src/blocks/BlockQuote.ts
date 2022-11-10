import { Block } from "payload/types"
import { TitleField } from "../fields"

export const BlockQuote: Block = {
  slug: "blockquote",
  imageURL:
    "https://res.cloudinary.com/hexdev/image/upload/v1668104574/shubhamwebdesign/gcthvyioskulaxw2gxpj.webp",
  imageAltText: "Block Quote",
  fields: [
    {
      name: "blockQuote",
      label: "Block Quote",
      type: "array",
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
    },
  ],
}
