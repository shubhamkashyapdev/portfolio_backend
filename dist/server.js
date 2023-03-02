"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var payload_1 = __importDefault(require("payload"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var payload_cloudinary_plugin_1 = require("payload-cloudinary-plugin");
require("dotenv").config();
var app = (0, express_1.default)();
var PORT = process.env.PORT;
//cors
app.use((0, cors_1.default)());
app.use((0, payload_cloudinary_plugin_1.mediaManagement)({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
}, {
    folder: process.env.FOLDER,
}));
// expose assets directory as public
app.use("/assets", express_1.default.static(path_1.default.resolve(__dirname, "../assets")));
// Redirect root to Admin panel
app.get("/health-check", function (_, res) {
    res.json("API is working fine at PORT: ".concat(PORT));
});
app.get("/", function (_, res) {
    res.redirect("/admin");
});
// Initialize Payload
payload_1.default.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: function () {
        payload_1.default.logger.info("Payload Admin URL: ".concat(payload_1.default.getAdminURL()));
    },
});
// Add your own express routes here
app.listen(PORT);
