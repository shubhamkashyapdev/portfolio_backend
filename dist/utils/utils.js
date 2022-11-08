"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
var getToken = function () {
    var token = "";
    while ((token === null || token === void 0 ? void 0 : token.length) !== 4) {
        token = Math.floor(Math.random() * 10000).toString();
    }
    return token;
};
exports.getToken = getToken;
