"use strict";
(self.webpackChunkpayload_starter_typescript =
  self.webpackChunkpayload_starter_typescript || []).push([
  [18],
  {
    26018: (e, r, t) => {
      t.r(r), t.d(r, { default: () => m });
      var a = t(67294),
        s = t(9980),
        l = t(28630),
        i = t(39599),
        n = t(37276),
        o = t(93313),
        d = t(5590),
        c = t(89877),
        u = t(46268);
      t(26325);
      const m = (e) => {
        const { setInitialized: r } = e,
          { setToken: t } = (0, l.a)(),
          {
            admin: { user: m },
            collections: p,
            serverURL: f,
            routes: { admin: y, api: w },
          } = (0, s.Z)(),
          k = p.find((e) => e.slug === m);
        return a.createElement(
          i.Z,
          { className: "create-first-user" },
          a.createElement("h1", null, "Welcome"),
          a.createElement("p", null, "To begin, create your first user."),
          a.createElement(n.Z, {
            title: "Create First User",
            description: "Create first user",
            keywords: "Create, Payload, CMS",
          }),
          a.createElement(
            o.Z,
            {
              onSuccess: (e) => {
                var a;
                (null === (a = null == e ? void 0 : e.user) || void 0 === a
                  ? void 0
                  : a.token) && t(e.user.token),
                  r(!0);
              },
              method: "post",
              redirect: y,
              action: `${f}${w}/${m}/first-register`,
              validationOperation: "create",
            },
            a.createElement(d.Z, {
              fieldSchema: [
                {
                  name: "email",
                  label: "Email Address",
                  type: "email",
                  required: !0,
                },
                {
                  name: "password",
                  label: "Password",
                  type: "password",
                  required: !0,
                },
                {
                  name: "confirm-password",
                  label: "Confirm Password",
                  type: "confirmPassword",
                  required: !0,
                },
                ...k.fields,
              ],
              fieldTypes: c.Z,
            }),
            a.createElement(u.Z, null, "Create")
          )
        );
      };
    },
  },
]);
