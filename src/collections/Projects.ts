import { CollectionConfig } from "payload/types"
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
import {
  SlugField,
  SubTaglineField,
  TaglineField,
  TitleField,
  ViewsField,
} from "../fields"
import { formattedSlug } from "../utils/utils"

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    TitleField,
    SlugField,
    ViewsField,
    TaglineField,
    SubTaglineField,
    {
      name: "projectType",
      type: "text",
      defaultValue: "Personal Project",
      required: true,
    },

    {
      name: "repoURL",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "liveSiteURL",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "featuredImage",
      label: "Featured Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "blocks",
      label: "Project Blocks",
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

export default Projects
