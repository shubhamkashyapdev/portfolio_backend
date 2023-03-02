"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
var isAdmin = function (_a) {
    var user = _a.req.user;
    if (user && (user === null || user === void 0 ? void 0 : user.role) === "admin") {
        return true;
    }
    return {
        id: {
            equals: user.id,
        },
    };
};
exports.isAdmin = isAdmin;
