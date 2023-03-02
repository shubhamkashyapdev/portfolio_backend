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
var isAdmin_1 = require("../access/isAdmin");
var roles_1 = require("../utils/roles");
var utils_1 = require("../utils/utils");
var Users = {
    slug: "users",
    auth: true,
    admin: {
        useAsTitle: "email",
    },
    labels: {
        singular: "user",
        plural: "users",
    },
    access: {
        create: function () { return true; },
        read: function () { return true; },
        update: isAdmin_1.isAdmin,
        delete: isAdmin_1.isAdmin,
    },
    fields: [
        {
            name: "avatar",
            type: "upload",
            relationTo: "media",
        },
        {
            name: "role",
            type: "select",
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
            ],
            required: true,
            defaultValue: "user",
            admin: {
                position: "sidebar",
            },
        },
        {
            name: "isVerified",
            type: "checkbox",
            defaultValue: false,
            admin: {
                position: "sidebar",
            },
        },
        {
            name: "otp",
            type: "text",
            maxLength: 4,
            admin: {
                readOnly: true,
                position: "sidebar",
            },
        },
    ],
    timestamps: true,
    hooks: {
        beforeChange: [
            function (_a) {
                var req = _a.req, operation = _a.operation, data = _a.data;
                return __awaiter(void 0, void 0, void 0, function () {
                    var reqUserRole, token;
                    var _b;
                    return __generator(this, function (_c) {
                        if (operation === "create") {
                            reqUserRole = (_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.role;
                            console.log({ user: req === null || req === void 0 ? void 0 : req.user, data: data });
                            if (data.role === "admin" && reqUserRole === "admin") {
                                data.isVerified = true;
                                return [2 /*return*/, data];
                            }
                            if (reqUserRole !== "admin" && !roles_1.userRoles.includes(data.role)) {
                                throw new Error("Invalid Role Assigned To User");
                            }
                            token = (0, utils_1.getToken)();
                            if (data.role !== "admin") {
                                data.otp = token;
                                return [2 /*return*/, data];
                            }
                            if (data.role === "admin" && reqUserRole !== "admin") {
                                throw new Error("User having role user is not allowed to create user with admin access");
                            }
                        }
                        return [2 /*return*/];
                    });
                });
            },
        ],
        afterLogin: [
            function (_a) {
                var user = _a.req.user;
                return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        // check if account is verified
                        if (Number(user.isVerified)) {
                            return [2 /*return*/, true];
                        }
                        else {
                            throw new Error("Please Verify Your Account!!");
                        }
                        return [2 /*return*/];
                    });
                });
            },
        ],
    },
    endpoints: [
        {
            path: "/verify",
            method: "post",
            handler: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
                var payload, body, user, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = req.payload;
                            body = req.body;
                            if (!(body === null || body === void 0 ? void 0 : body.id) || !(body === null || body === void 0 ? void 0 : body.otp)) {
                                return [2 /*return*/, res
                                        .status(400)
                                        .json({ message: "Please provide a valid otp and user ID" })];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            return [4 /*yield*/, payload.findByID({
                                    collection: "users",
                                    id: body.id,
                                })];
                        case 2:
                            user = _a.sent();
                            if (!user) {
                                res.status(404).json("No user found with provided user ID");
                            }
                            // check if account is already verified
                            if (Number(user.isVerified)) {
                                return [2 /*return*/, res
                                        .status(200)
                                        .json({ message: "User account is already verified!" })];
                            }
                            if (!(user.otp === body.otp)) return [3 /*break*/, 4];
                            // verify the user account
                            return [4 /*yield*/, payload.update({
                                    collection: "users",
                                    id: body.id,
                                    data: {
                                        isVerified: 1,
                                    },
                                })];
                        case 3:
                            // verify the user account
                            _a.sent();
                            res.status(200).json({ message: "OTP verified successfully" });
                            return [3 /*break*/, 5];
                        case 4:
                            res.status(400).json({ message: "Invalid OTP Provided" });
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            err_1 = _a.sent();
                            console.log({ err: err_1.message });
                            res.status(500).json({ message: "Internal Server Error" });
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            }); },
        },
    ],
};
exports.default = Users;
