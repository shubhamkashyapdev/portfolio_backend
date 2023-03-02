"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fields_1 = require("../fields");
var BlockQuote = {
    slug: "blockquote",
    imageURL: "https://res.cloudinary.com/hexdev/image/upload/v1668104574/shubhamwebdesign/gcthvyioskulaxw2gxpj.webp",
    imageAltText: "Block Quote",
    fields: [
        fields_1.TitleField,
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
};
exports.default = BlockQuote;
