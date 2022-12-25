import { CollectionConfig } from "payload/types";
import { SlugField, TagsField, TitleField, ViewsField } from "../fields";
import { formattedSlug } from "../utils/utils";

const Boilerplate: CollectionConfig = {
    slug: 'boilerplate',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        TitleField,
        SlugField,
        ViewsField,
        TagsField,
        {
            name: "tagline",
            label: "Boilerplate Tagline",
            type: "text",
            required: true,
        },
        {

            name: 'githubURL',
            label: 'Github URL',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'image',
            label: "Fatured Image",
            type: 'upload',
            relationTo: 'media',
            required: true,
        }

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

export default Boilerplate
