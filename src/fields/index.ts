import { Field } from "payload/types"

export const TitleField: Field = {
  name: "title",
  label: "Title",
  type: "text",
  required: true,
}
export const SlugField: Field = {
  name: "slug",
  label: "Slug",
  type: "text",
  admin: {
    position: "sidebar",
  },
}

export const ReadTimeField: Field = {
  name: "readTime",
  type: "number",
  defaultValue: 5,
  required: true,
  admin: {
    position: "sidebar",
  },
}

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
}

export const TagsField: Field = {
  name: "tags",
  label: "Snippet Tags",
  type: "relationship",
  relationTo: "tags",
  hasMany: true,
  admin: {
    position: "sidebar",
  },
}

export const TaglineField: Field = {
  name: "tagline",
  type: "text",
  required: true,
  admin: {
    position: "sidebar",
  },
}

export const SubTaglineField: Field = {
  name: "subTagline",
  type: "text",
  required: true,
  admin: {
    position: "sidebar",
  },
}
