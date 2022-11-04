"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var payload_1 = __importDefault(require("payload"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
require("dotenv").config();
var app = (0, express_1.default)();
var PORT = process.env.PORT;
//cors
app.use((0, cors_1.default)());
// expose assets directory as public
app.use(
  "/assets",
  express_1.default.static(path_1.default.resolve(__dirname, "../assets"))
);
// Redirect root to Admin panel
app.get("/", function (_, res) {
  res.redirect("/admin");
});
// Initialize Payload
payload_1.default.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: function () {
    payload_1.default.logger.info(
      "Payload Admin URL: ".concat(payload_1.default.getAdminURL())
    );
  },
});
// Add your own express routes here
app.listen(PORT);
