"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Categories = {
    slug: "category",
    admin: {
        useAsTitle: "name",
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: "name",
            type: "text",
        },
    ],
    timestamps: false,
};
exports.default = Categories;
