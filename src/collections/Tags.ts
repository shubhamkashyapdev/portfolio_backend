import { CollectionConfig } from "payload/types"
import { isAdmin } from "../access/isAdmin"
import { SlugField, TitleField } from "../fields"
import { formattedSlug } from "../utils/utils"

const Tags: CollectionConfig = {
  slug: "tags",
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
    {
      name: "icon",
      type: "upload",
      relationTo: "media",
    },
  ],
  timestamps: false,
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

export default Tags
