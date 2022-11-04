"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tags = void 0;
var fields_1 = require("../fields");
exports.Tags = {
    slug: "tags",
    admin: {
        useAsTitle: "title",
    },
    fields: [
        fields_1.TitleField,
        {
            name: "icon",
            label: "Tag Icon URL",
            type: "text",
            required: true,
        },
    ],
};
