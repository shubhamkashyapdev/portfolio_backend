import { CollectionConfig } from "payload/types"
import { BlockQuote } from "../blocks/BlockQuote"
import { FeaturesList } from "../blocks/FeaturesList"
import { ImageBlock } from "../blocks/ImageBlock"
import { ImageGridBlock } from "../blocks/ImageGridBlock"
import { ParragraphBlock } from "../blocks/Parragraph"
import { SecondaryHeadingBlock } from "../blocks/SecondaryHeading"
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
      label: "Tech Stack",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "blocks",
      label: "Project Blocks",
      type: "blocks",
      blocks: [
        FeaturesList,
        BlockQuote,
        SecondaryHeadingBlock,
        ParragraphBlock,
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

export default Projects
