"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageBlock = {
    slug: "imageblock",
    imageURL: "https://res.cloudinary.com/hexdev/image/upload/v1668104979/shubhamwebdesign/zanzx1paxilh1jlplyry.webp",
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
};
exports.default = ImageBlock;
