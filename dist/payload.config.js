"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var path_1 = __importDefault(require("path"));
var plugin_seo_1 = __importDefault(require("@payloadcms/plugin-seo"));
// Graphics
var Logo_1 = __importDefault(require("./components/Logo"));
var Icon_1 = __importDefault(require("./components/Icon"));
// collections
var Users_1 = __importDefault(require("./collections/Users"));
var Media_1 = require("./collections/Media");
var Library_1 = require("./collections/Library");
var collections_1 = require("./collections");
var plugins_1 = __importDefault(require("payload-cloudinary-plugin/dist/plugins"));
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.SERVER_URL,
    admin: {
        disable: true,
        user: Users_1.default.slug,
        meta: {
            titleSuffix: "- Payload Auth",
            favicon: "/assets/favicon.png",
            ogImage: "/assets/logo.png",
        },
        components: {
            graphics: {
                Logo: Logo_1.default,
                Icon: Icon_1.default,
            },
        },
    },
    collections: [
        Users_1.default,
        Media_1.Media,
        collections_1.Tags,
        Library_1.Library,
        collections_1.Projects,
        collections_1.Categories,
        collections_1.Posts,
        collections_1.Boilerplate,
    ],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts"),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, "generated-schema.graphql"),
        disablePlaygroundInProduction: true,
    },
    rateLimit: {
        trustProxy: true,
        window: 2 * 60 * 1000,
        max: 2400, // limit each IP per windowMs
    },
    plugins: [
        (0, plugin_seo_1.default)({
            collections: ["library", "posts", "projects"],
            uploadsCollection: "media",
        }),
        //@ts-ignore
        (0, plugins_1.default)(),
    ],
});
