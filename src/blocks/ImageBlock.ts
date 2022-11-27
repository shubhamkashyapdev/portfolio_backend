import { Block } from "payload/types"

const ImageBlock: Block = {
  slug: "imageblock",
  imageURL:
    "https://res.cloudinary.com/hexdev/image/upload/v1668104979/shubhamwebdesign/zanzx1paxilh1jlplyry.webp",
  imageAltText: "ImageBlock",
  fields: [
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
}
export default ImageBlock
