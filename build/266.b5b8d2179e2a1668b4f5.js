"use strict";
(self.webpackChunkpayload_starter_typescript =
  self.webpackChunkpayload_starter_typescript || []).push([
  [266],
  {
    74007: (e, a, t) => {
      t.d(a, { Z: () => d });
      var r = t(67294),
        s = t(48170),
        l = t(953),
        o = t(90666),
        n = t(64012);
      t(89013);
      const d = () => {
        const { getField: e } = (0, n.useWatchForm)(),
          a = e("password"),
          t = (0, r.useCallback)(
            (e) =>
              e
                ? e === (null == a ? void 0 : a.value) ||
                  "Passwords do not match."
                : "This field is required",
            [a]
          ),
          {
            value: d,
            showError: i,
            setValue: c,
            errorMessage: m,
          } = (0, s.Z)({
            path: "confirm-password",
            disableFormData: !0,
            validate: t,
            enableDebouncedValue: !0,
          }),
          u = ["field-type", "confirm-password", i && "error"]
            .filter(Boolean)
            .join(" ");
        return r.createElement(
          "div",
          { className: u },
          r.createElement(o.Z, { showError: i, message: m }),
          r.createElement(l.Z, {
            htmlFor: "field-confirm-password",
            label: "Confirm Password",
            required: !0,
          }),
          r.createElement("input", {
            value: d || "",
            onChange: c,
            type: "password",
            autoComplete: "off",
            id: "field-confirm-password",
            name: "confirm-password",
          })
        );
      };
    },
    74020: (e, a, t) => {
      t.d(a, { Z: () => o });
      var r = t(67294),
        s = t(48170),
        l = t(90546);
      const o = t.n(l)()((e) => {
        const { name: a, path: t, value: l, disableModifyingForm: o = !0 } = e,
          n = t || a,
          { value: d, setValue: i } = (0, s.Z)({ path: n });
        return (
          (0, r.useEffect)(() => {
            void 0 !== l && i(l, o);
          }, [l, i, o]),
          r.createElement("input", {
            id: `field-${n.replace(/\./gi, "__")}`,
            type: "hidden",
            value: d || "",
            onChange: i,
            name: n,
          })
        );
      });
    },
    76067: (e, a, t) => {
      t.d(a, { Z: () => c });
      var r = t(67294),
        s = t(48170),
        l = t(953),
        o = t(90666),
        n = t(90546),
        d = t.n(n),
        i = t(35193);
      t(8108);
      const c = d()((e) => {
        const {
            path: a,
            name: t,
            required: n,
            validate: d = i.password,
            style: c,
            className: m,
            width: u,
            autoComplete: p,
            label: w,
          } = e,
          h = a || t,
          E = (0, r.useCallback)((e, a) => d(e, { ...a, required: n }), [d, n]),
          {
            value: f,
            showError: v,
            formProcessing: Z,
            setValue: b,
            errorMessage: g,
          } = (0, s.Z)({ path: h, validate: E, enableDebouncedValue: !0 }),
          y = ["field-type", "password", m, v && "error"]
            .filter(Boolean)
            .join(" ");
        return r.createElement(
          "div",
          { className: y, style: { ...c, width: u } },
          r.createElement(o.Z, { showError: v, message: g }),
          r.createElement(l.Z, {
            htmlFor: `field-${h.replace(/\./gi, "__")}`,
            label: w,
            required: n,
          }),
          r.createElement("input", {
            id: `field-${h.replace(/\./gi, "__")}`,
            value: f || "",
            onChange: b,
            disabled: Z,
            type: "password",
            autoComplete: p,
            name: h,
          })
        );
      });
    },
    70266: (e, a, t) => {
      t.r(a), t.d(a, { default: () => f });
      var r = t(67294),
        s = t(5977),
        l = t(73727),
        o = t(9980),
        n = t(28630),
        d = t(39599),
        i = t(93313),
        c = t(76067),
        m = t(74007),
        u = t(46268),
        p = t(77329),
        w = t(37276),
        h = (t(73096), t(74020));
      const E = "reset-password",
        f = () => {
          const {
              admin: { user: e },
              serverURL: a,
              routes: { admin: t, api: f },
            } = (0, o.Z)(),
            { token: v } = (0, s.UO)(),
            Z = (0, s.k6)(),
            { user: b, setToken: g } = (0, n.a)();
          return b
            ? r.createElement(
                d.Z,
                { className: E },
                r.createElement(w.Z, {
                  title: "Reset Password",
                  description: "Reset password",
                  keywords: "Reset Password, Payload, CMS",
                }),
                r.createElement(
                  "div",
                  { className: `${E}__wrap` },
                  r.createElement("h1", null, "Already logged in"),
                  r.createElement(
                    "p",
                    null,
                    "To log in with another user, you should",
                    " ",
                    r.createElement(l.Link, { to: `${t}/logout` }, "log out"),
                    " ",
                    "first."
                  ),
                  r.createElement("br", null),
                  r.createElement(
                    p.Z,
                    { el: "link", buttonStyle: "secondary", to: t },
                    "Back to Dashboard"
                  )
                )
              )
            : r.createElement(
                d.Z,
                { className: E },
                r.createElement(
                  "div",
                  { className: `${E}__wrap` },
                  r.createElement("h1", null, "Reset Password"),
                  r.createElement(
                    i.Z,
                    {
                      onSuccess: (e) => {
                        e.token && (g(e.token), Z.push(`${t}`));
                      },
                      method: "post",
                      action: `${a}${f}/${e}/reset-password`,
                      redirect: t,
                    },
                    r.createElement(c.Z, {
                      label: "New Password",
                      name: "password",
                      autoComplete: "off",
                      required: !0,
                    }),
                    r.createElement(m.Z, null),
                    r.createElement(h.Z, { name: "token", value: v }),
                    r.createElement(u.Z, null, "Reset Password")
                  )
                )
              );
        };
    },
  },
]);
