import { CollectionConfig } from "payload/types"
import { SlugField, TagsField, TitleField, ViewsField } from "../fields/index"
import { isAdmin } from "../access/isAdmin"
import { formattedSlug } from "../utils/utils"
import {
  PrimaryHeadingBlock,
  BlockQuote,
  CodeBlock,
  FeaturesListBlock,
  ImageBlock,
  ImageGridBlock,
  ParragraphBlock,
  SecondaryHeadingBlock,
} from "../blocks"

export const Library: CollectionConfig = {
  slug: "library",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    TitleField,
    SlugField,
    ViewsField,
    TagsField,
    {
      name: "tagline",
      label: "Snippet Tagline",
      type: "text",
      required: true,
    },
    {
      name: "subTagline",
      label: "Snippet Sub Tagline",
      type: "text",
      required: true,
    },
    {
      name: "blocks",
      label: "Component Blocks",
      type: "blocks",
      blocks: [
        PrimaryHeadingBlock,
        SecondaryHeadingBlock,
        ParragraphBlock,
        BlockQuote,
        CodeBlock,
        FeaturesListBlock,
        ImageBlock,
        ImageGridBlock,
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
