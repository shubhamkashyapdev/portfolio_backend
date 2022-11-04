"use strict";
(self.webpackChunkpayload_starter_typescript =
  self.webpackChunkpayload_starter_typescript || []).push([
  [354],
  {
    34354: (e, t, a) => {
      a.r(t), a.d(t, { default: () => u });
      var r = a(67294),
        l = a(9980),
        n = a(77329),
        o = a(37276),
        s = a(39599);
      const u = () => {
        const {
          routes: { admin: e },
        } = (0, l.Z)();
        return r.createElement(
          s.Z,
          { className: "unauthorized" },
          r.createElement(o.Z, {
            title: "Unauthorized",
            description: "Unauthorized",
            keywords: "Unauthorized, Payload, CMS",
          }),
          r.createElement("h2", null, "Unauthorized"),
          r.createElement(
            "p",
            null,
            "You are not allowed to access this page."
          ),
          r.createElement("br", null),
          r.createElement(n.Z, { el: "link", to: `${e}/logout` }, "Log out")
        );
      };
    },
  },
]);
