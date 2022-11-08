"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mail_1 = __importDefault(require("@sendgrid/mail"));
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
var sendEmail = function (_a) {
    var to = _a.to, subject = _a.subject, html = _a.html;
    var msg = {
        to: to,
        from: "saffron.shubham@gmail.com",
        subject: subject,
        html: html,
    };
    mail_1.default
        .send(msg)
        .then(function () {
        console.log("Email sent successfully!");
    })
        .catch(function (error) {
        console.error(error);
    });
};
exports.default = sendEmail;
