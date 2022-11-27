import { CollectionConfig } from "payload/types"
import {
  BlockQuote,
  CodeBlock,
  FeaturesListBlock,
  ImageBlock,
  ImageGridBlock,
  ParragraphBlock,
  PrimaryHeadingBlock,
  SecondaryHeadingBlock,
} from "../blocks"
import { TitleField, SlugField, ReadTimeField, ViewsField } from "../fields"
import { formattedSlug } from "../utils/utils"

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    defaultColumns: ["title", "author", "category", "tags", "status"],
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    TitleField,
    SlugField,
    ReadTimeField,
    ViewsField,
    {
      name: "publishedDate",
      type: "date",
      admin: {
        position: "sidebar",
        readOnly: true,
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "category",
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "excerpt",
      type: "textarea",
      maxLength: 180,
      required: true,
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          value: "draft",
          label: "Draft",
        },
        {
          value: "published",
          label: "Published",
        },
      ],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: [
        PrimaryHeadingBlock,
        SecondaryHeadingBlock,
        ParragraphBlock,
        BlockQuote,
        CodeBlock,
        FeaturesListBlock,
        ImageGridBlock,
        ImageBlock,
      ],
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data }) => {
        const title = data.title
        data.slug = formattedSlug(title)
        return data
      },
    ],
  },
}

export default Posts
