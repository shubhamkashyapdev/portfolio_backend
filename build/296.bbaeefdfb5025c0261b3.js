"use strict";
(self.webpackChunkpayload_starter_typescript =
  self.webpackChunkpayload_starter_typescript || []).push([
  [296],
  {
    48296: (e, t, n) => {
      n.r(t), n.d(t, { default: () => p });
      var a = n(67294),
        o = n(9980),
        r = n(28584),
        l = n(75091),
        s = n(77329),
        c = n(37276),
        u = n(69850);
      const d = "not-found",
        p = () => {
          const { setStepNav: e } = (0, l.FP)(),
            {
              routes: { admin: t },
            } = (0, o.Z)();
          return (
            (0, a.useEffect)(() => {
              e([{ label: "Not Found" }]);
            }, [e]),
            a.createElement(
              "div",
              { className: d },
              a.createElement(c.Z, {
                title: "Not Found",
                description: "Page not found",
                keywords: "404, Not found, Payload, CMS",
              }),
              a.createElement(r.Z, null),
              a.createElement(
                u.T,
                { className: "not-found__wrap" },
                a.createElement("h1", null, "Nothing found"),
                a.createElement(
                  "p",
                  null,
                  "Sorry—there is nothing to correspond with your request."
                ),
                a.createElement(
                  s.Z,
                  { el: "link", to: `${t}` },
                  "Back to Dashboard"
                )
              )
            )
          );
        };
    },
  },
]);
