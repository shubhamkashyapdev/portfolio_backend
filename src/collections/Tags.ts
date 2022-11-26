import { CollectionConfig } from "payload/types"
import { isAdmin } from "../access/isAdmin"
import { formattedSlug } from "../utils/utils"

const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
  ],
  timestamps: false,
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

export default Tags
