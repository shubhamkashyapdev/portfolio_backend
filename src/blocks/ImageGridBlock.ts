import { Block } from "payload/types"

export const ImageGridBlock: Block = {
  slug: "imageGridBlock",
  imageURL:
    "https://res.cloudinary.com/hexdev/image/upload/v1668105665/shubhamwebdesign/f1ucotptveq7tchcqora.webp",
  imageAltText: "ImageGridBlock",
  fields: [
    {
      name: "imageGrid",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "imageOneRight",
              label: "Image Right",
              type: "upload",
              relationTo: "media",
              required: true,
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "imageLeft",
              label: "Image Left",
              type: "upload",
              relationTo: "media",
              required: true,
              admin: {
                width: "50%",
              },
            },
          ],
        },
      ],
    },
  ],
}
