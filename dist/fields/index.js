"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsField = exports.ViewsField = exports.TitleField = void 0;
exports.TitleField = {
    name: "title",
    label: "Title",
    type: "text",
    required: true,
};
exports.ViewsField = {
    name: "views",
    label: "Views",
    type: "number",
    required: true,
    defaultValue: 0,
    admin: {
        readOnly: true,
        position: "sidebar",
    },
};
exports.TagsField = {
    name: "tags",
    label: "Snippet Tags",
    type: "relationship",
    relationTo: "tags",
    hasMany: true,
    admin: {
        position: "sidebar",
    },
};
