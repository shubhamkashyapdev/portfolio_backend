"use strict";
(self.webpackChunkpayload_starter_typescript =
  self.webpackChunkpayload_starter_typescript || []).push([
  [570],
  {
    3570: (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      var l = a(67294),
        o = a(9980),
        r = a(28630),
        u = a(39599),
        n = a(77329),
        c = a(37276);
      a(67190);
      const s = "logout",
        i = (e) => {
          const { inactivity: t } = e,
            { logOut: a } = (0, r.a)(),
            {
              routes: { admin: i },
            } = (0, o.Z)();
          return (
            (0, l.useEffect)(() => {
              a();
            }, [a]),
            l.createElement(
              u.Z,
              { className: s },
              l.createElement(c.Z, {
                title: "Logout",
                description: "Logout user",
                keywords: "Logout, Payload, CMS",
              }),
              l.createElement(
                "div",
                { className: "logout__wrap" },
                t &&
                  l.createElement(
                    "h2",
                    null,
                    "You have been logged out due to inactivity."
                  ),
                !t &&
                  l.createElement(
                    "h2",
                    null,
                    "You have been logged out successfully."
                  ),
                l.createElement("br", null),
                l.createElement(
                  n.Z,
                  { el: "anchor", buttonStyle: "secondary", url: `${i}/login` },
                  "Log back in"
                )
              )
            )
          );
        };
    },
  },
]);
