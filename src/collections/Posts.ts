import { CollectionConfig } from "payload/types"
import { BlockQuote } from "../blocks/BlockQuote"
import { CodeBlock } from "../blocks/Code"
import { FeaturesList } from "../blocks/FeaturesList"
import { ImageBlock } from "../blocks/ImageBlock"
import { ImageGridBlock } from "../blocks/ImageGridBlock"
import { PrimaryHeadingBlock } from "../blocks/PrimaryHeading"
import { SecondaryHeadingBlock } from "../blocks/SecondaryHeading"
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
      name: "readTime",
      type: "number",
      defaultValue: 5,
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
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
        CodeBlock,
        PrimaryHeadingBlock,
        SecondaryHeadingBlock,
        BlockQuote,
        FeaturesList,
        ImageBlock,
        ImageGridBlock,
      ],
    },
  ],
  hooks: {
    beforeChange: [
      async ({ req, operation, data }) => {
        const name = data.name
        data.slug = formattedSlug(name)
        return data
      },
    ],
  },
}

export default Posts
