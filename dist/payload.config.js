"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var path_1 = __importDefault(require("path"));
// Graphics
var Logo_1 = __importDefault(require("./components/Logo"));
var Icon_1 = __importDefault(require("./components/Icon"));
// collections
var Users_1 = __importDefault(require("./collections/Users"));
var Media_1 = require("./collections/Media");
var Library_1 = require("./collections/Library");
var Tags_1 = require("./collections/Tags");
var sendEmilPath = path_1.default.resolve(
  __dirname,
  "collections/hooks/sendEmail.ts"
);
var mockEmailModulePath = path_1.default.resolve(
  __dirname,
  "mocks/sendEmail.ts"
);
exports.default = (0, config_1.buildConfig)({
  serverURL: process.env.SERVER_URL,
  admin: {
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
    webpack: function (config) {
      var _a;
      return __assign(__assign({}, config), {
        resolve: __assign(__assign({}, config.resolve), {
          alias: __assign(
            __assign({}, config.resolve.alias),
            ((_a = {}), (_a[sendEmilPath] = mockEmailModulePath), _a)
          ),
        }),
      });
    },
  },
  collections: [Users_1.default, Media_1.Media, Tags_1.Tags, Library_1.Library],
  typescript: {
    outputFile: path_1.default.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path_1.default.resolve(
      __dirname,
      "generated-schema.graphql"
    ),
  },
});
