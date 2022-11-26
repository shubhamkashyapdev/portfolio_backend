import { buildConfig } from "payload/config"
import path from "path"

// Graphics
import Logo from "./components/Logo"
import Icon from "./components/Icon"

// collections
import Users from "./collections/Users"
import { Media } from "./collections/Media"
import { Library } from "./collections/Library"
import { Projects } from "./collections"

import { Tags, Categories, Posts } from "./collections"

const sendEmilPath = path.resolve(__dirname, "collections/hooks/sendEmail.ts")
const mockEmailModulePath = path.resolve(__dirname, "mocks/sendEmail.ts")
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
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          [sendEmilPath]: mockEmailModulePath,
        },
      },
    }),
  },
  collections: [Users, Media, Tags, Library, Projects, Categories, Posts],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
    disablePlaygroundInProduction: true,
  },
})
