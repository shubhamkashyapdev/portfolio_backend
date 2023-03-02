"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubTaglineField = exports.TaglineField = exports.TagsField = exports.ViewsField = exports.ReadTimeField = exports.SlugField = exports.TitleField = void 0;
exports.TitleField = {
    name: "title",
    label: "Title",
    type: "text",
    required: true,
};
exports.SlugField = {
    name: "slug",
    label: "Slug",
    type: "text",
    admin: {
        position: "sidebar",
    },
};
exports.ReadTimeField = {
    name: "readTime",
    type: "number",
    defaultValue: 5,
    required: true,
    admin: {
        position: "sidebar",
    },
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
exports.TaglineField = {
    name: "tagline",
    type: "text",
    required: true,
    admin: {
        position: "sidebar",
    },
};
exports.SubTaglineField = {
    name: "subTagline",
    type: "text",
    required: true,
    admin: {
        position: "sidebar",
    },
};
