"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formattedSlug = exports.getToken = void 0;
var getToken = function () {
    var token = "";
    while ((token === null || token === void 0 ? void 0 : token.length) !== 4) {
        token = Math.floor(Math.random() * 10000).toString();
    }
    return token;
};
exports.getToken = getToken;
var formattedSlug = function (val) {
    return val
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "")
        .toLowerCase();
};
exports.formattedSlug = formattedSlug;
