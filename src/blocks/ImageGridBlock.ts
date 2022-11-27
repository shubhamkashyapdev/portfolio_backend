import { Block } from "payload/types"

const ImageGridBlock: Block = {
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
          name: "imageLabel",
          type: "text",
          required: true,
        },
        {
          name: "image",
          label: "Image Right",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
}
export default ImageGridBlock
