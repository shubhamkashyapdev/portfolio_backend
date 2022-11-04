import { Field } from "payload/types";

export const TitleField: Field = {
  name: "title",
  label: "Title",
  type: "text",
  required: true,
};

export const ViewsField: Field = {
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

export const TagsField: Field = {
  name: "tags",
  label: "Snippet Tags",
  type: "relationship",
  relationTo: "tags",
  hasMany: true,
  admin: {
    position: "sidebar",
  },
};
