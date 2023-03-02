"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var blocks_1 = require("../blocks");
var fields_1 = require("../fields");
var utils_1 = require("../utils/utils");
var Projects = {
    slug: "projects",
    admin: {
        useAsTitle: "title",
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        fields_1.TitleField,
        fields_1.SlugField,
        fields_1.ViewsField,
        fields_1.TaglineField,
        fields_1.SubTaglineField,
        {
            name: "projectType",
            type: "radio",
            options: [
                {
                    label: 'Public',
                    value: 'public',
                },
                {
                    label: "Private",
                    value: 'private',
                }
            ],
            required: true,
        },
        {
            name: "repoURL",
            type: "text",
            required: true,
            admin: {
                position: "sidebar",
                condition: function (data) { return data.projectType === 'public' ? true : false; }
            },
        },
        {
            name: "liveSiteURL",
            type: "text",
            admin: {
                position: "sidebar",
                condition: function (data) { return data.projectType === 'public' ? true : false; }
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
            type: "relationship",
            relationTo: "tags",
            hasMany: true,
            admin: {
                position: "sidebar",
            },
        },
        {
            name: "blocks",
            label: "Project Blocks",
            type: "blocks",
            blocks: [
                blocks_1.PrimaryHeadingBlock,
                blocks_1.SecondaryHeadingBlock,
                blocks_1.ParragraphBlock,
                blocks_1.BlockQuote,
                blocks_1.CodeBlock,
                blocks_1.FeaturesListBlock,
                blocks_1.ImageBlock,
                blocks_1.ImageGridBlock,
            ],
        },
    ],
    hooks: {
        beforeChange: [
            function (_a) {
                var data = _a.data;
                return __awaiter(void 0, void 0, void 0, function () {
                    var title;
                    return __generator(this, function (_b) {
                        title = data.title;
                        data.slug = (0, utils_1.formattedSlug)(title);
                        return [2 /*return*/, data];
                    });
                });
            },
        ],
    },
};
exports.default = Projects;
