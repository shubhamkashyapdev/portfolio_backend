import { buildConfig } from "payload/config"
import path from "path"
import seo from "@payloadcms/plugin-seo"
// Graphics
import Logo from "./components/Logo"
import Icon from "./components/Icon"

// collections
import Users from "./collections/Users"
import { Media } from "./collections/Media"
import { Library } from "./collections/Library"

import { Tags, Categories, Posts, Projects, Boilerplate } from "./collections"
import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins"

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "- Payload Auth",
      favicon: "/assets/favicon.png",
      ogImage: "/assets/logo.png",
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
  },
  collections: [Users, Media, Tags, Library, Projects, Categories, Posts, Boilerplate],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
    disablePlaygroundInProduction: true,
  },
  rateLimit: {
    trustProxy: true,
    window: 2 * 60 * 1000, // 2 minutes
    max: 2400, // limit each IP per windowMs
  },
  plugins: [
    seo({
      collections: ["library", "posts", "projects"],
      uploadsCollection: "media",
    }),
    //@ts-ignore
    cloudinaryPlugin(),
  ],
})
