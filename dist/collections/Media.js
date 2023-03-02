"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
exports.Media = {
    slug: "media",
    fields: [
        {
            name: "alt",
            type: "text",
            required: true,
        },
    ],
    access: {
        read: function () { return true; },
    },
    upload: {
        disableLocalStorage: true,
        staticURL: "/media",
        staticDir: "media",
        imageSizes: [
            {
                name: "thumbnail",
                width: 400,
                height: null,
                position: "centre",
            },
            {
                name: "card",
                width: 768,
                height: null,
                position: "centre",
            },
            {
                name: "desktop",
                width: 1440,
                height: null,
                position: "centre",
            },
        ],
        adminThumbnail: "thumbnail",
        mimeTypes: ["image/*"],
    },
};
