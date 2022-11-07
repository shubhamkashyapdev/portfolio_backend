import { CollectionConfig } from "payload/types"
import { TitleField } from "../fields"

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    TitleField,
    {
      name: "icon",
      label: "Tag Icon URL",
      type: "text",
      required: true,
    },
  ],
}
