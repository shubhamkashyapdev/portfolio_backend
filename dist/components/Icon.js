"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(require("react"));
require("../styles/logo.scss");
var Icon = function () { return (react_1.default.createElement("div", { className: "icon" },
    react_1.default.createElement("img", { src: "/assets/logo.png", alt: "DevStack Logo" }))); };
exports.Icon = Icon;
exports.default = exports.Icon;
