"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var index_1 = require("../fields/index");
var isAdmin_1 = require("../access/isAdmin");
var PrimaryHeading_1 = require("../blocks/PrimaryHeading");
var SecondaryHeading_1 = require("../blocks/SecondaryHeading");
var Parragraph_1 = require("../blocks/Parragraph");
var Code_1 = require("../blocks/Code");
exports.Library = {
  slug: "library",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: function () {
      return true;
    },
    create: isAdmin_1.isAdmin,
    update: isAdmin_1.isAdmin,
    delete: isAdmin_1.isAdmin,
  },
  fields: [
    index_1.TitleField,
    index_1.ViewsField,
    index_1.TagsField,
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
        PrimaryHeading_1.PrimaryHeadingBlock,
        SecondaryHeading_1.SecondaryHeadingBlock,
        Parragraph_1.ParragraphBlock,
        Code_1.CodeBlock,
      ],
    },
  ],
};
//@todo - auto generated slug field to be added
