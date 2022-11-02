import { CollectionConfig } from "payload/types"
import { TagsField, TitleField, ViewsField } from "../fields/index"
import { isAdmin } from "../access/isAdmin"
import { PrimaryHeadingBlock } from "../blocks/PrimaryHeading"
import { SecondaryHeadingBlock } from "../blocks/SecondaryHeading"
import { ParragraphBlock } from "../blocks/Parragraph"
import { CodeBlock } from "../blocks/Code"

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
    ViewsField,
    TagsField,
    {
      name: "tagline",
      label: "Snippet Tagline",
      type: "text",
      required: true,
    },
    {
      name: "sub-tagline",
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
        CodeBlock,
      ],
    },
  ],
}

//@todo - auto generated slug field to be added
