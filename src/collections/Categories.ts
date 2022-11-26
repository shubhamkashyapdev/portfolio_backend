import { CollectionConfig } from "payload/types"

const Categories: CollectionConfig = {
  slug: "category",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
  timestamps: false,
}

export default Categories
