(self.webpackChunkpayload_starter_typescript =
  self.webpackChunkpayload_starter_typescript || []).push([
  [491],
  {
    4983: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      var a = n(67294),
        l = n(28630),
        o = n(77329),
        i = n(40684);
      n(33427);
      const r = (e) => {
        const { generatePreviewURL: t, data: n } = e,
          [r, s] = (0, a.useState)(void 0),
          c = (0, i.bU)(),
          { token: u } = (0, l.a)();
        return (
          (0, a.useEffect)(() => {
            if (t && "function" == typeof t) {
              (async () => {
                const e = await t(n, { locale: c, token: u });
                s(e);
              })();
            }
          }, [t, c, u, n]),
          r
            ? a.createElement(
                o.Z,
                {
                  el: "anchor",
                  className: "preview-btn",
                  buttonStyle: "secondary",
                  url: r,
                  newTab: !0,
                },
                "Preview"
              )
            : null
        );
      };
    },
    38398: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      var a = n(67294),
        l = n(3902),
        o = n(39006);
      const i = (e) => {
        const {
            useAsTitle: t,
            title: n,
            data: i,
            fallback: r = "[untitled]",
          } = e,
          s = (0, l.Z)(t);
        let c = i && i[t];
        c || (c = s),
          c || (c = null == i ? void 0 : i.id),
          c || (c = r),
          (c = n || c);
        return c === (null == i ? void 0 : i.id)
          ? a.createElement(o.Z, { id: null == i ? void 0 : i.id })
          : a.createElement("span", { className: "render-title" }, c);
      };
    },
    50854: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => d });
      var a = n(67294),
        l = n(82949),
        o = n.n(l),
        i = n(28630),
        r = n(64012),
        s = n(39599),
        c = n(77329);
      n(22300);
      const u = "leave-without-saving",
        d = () => {
          const e = (0, r.useFormModified)(),
            { user: t } = (0, i.a)();
          return a.createElement(
            o(),
            { when: Boolean(e && t) },
            ({ onConfirm: e, onCancel: t }) =>
              a.createElement(
                "div",
                { className: u },
                a.createElement(
                  s.Z,
                  { className: `${u}__template` },
                  a.createElement("h1", null, "Leave without saving"),
                  a.createElement(
                    "p",
                    null,
                    "Your changes have not been saved. If you leave now, you will lose your changes."
                  ),
                  a.createElement(
                    c.Z,
                    { onClick: t, buttonStyle: "secondary" },
                    "Stay on this page"
                  ),
                  a.createElement(c.Z, { onClick: e }, "Leave anyway")
                )
              )
          );
        };
    },
    86491: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => M });
      var a = n(67294),
        l = n(5977),
        o = n(9980),
        i = n(28630),
        r = n(75091),
        s = n(47489),
        c = n(40684),
        u = n(73727),
        d = n(49546),
        m = n(28584),
        p = n(93313),
        f = n(4983),
        v = n(46268),
        h = n(5590),
        y = n(55532),
        E = n(89877),
        b = n(38398),
        _ = n(50854),
        k = n(37276),
        w = n(73588),
        g = n(40829),
        C = n(9684),
        Z = n(92962),
        A = n(10935);
      const N = () => {
        const { theme: e, setTheme: t, autoMode: n } = (0, A.Fg)(),
          l = (0, a.useCallback)(
            (e) => {
              t(e);
            },
            [t]
          );
        return a.createElement(Z.Z, {
          name: "theme",
          label: "Admin Theme",
          value: n ? "auto" : e,
          onChange: l,
          options: [
            { label: "Automatic", value: "auto" },
            { label: "Light", value: "light" },
            { label: "Dark", value: "dark" },
          ],
        });
      };
      var $ = n(69850);
      n(30086);
      const P = "account",
        S = (e) => {
          var t, n, l, i;
          const {
              collection: r,
              data: s,
              permissions: c,
              hasSavePermission: Z,
              apiURL: A,
              initialState: S,
              isLoading: U,
              action: L,
            } = e,
            {
              slug: O,
              fields: F,
              admin: { useAsTitle: M, preview: x },
              timestamps: T,
              auth: I,
            } = r,
            {
              admin: { dateFormat: R },
              routes: { admin: K },
            } = (0, o.Z)(),
            j = [P].filter(Boolean).join(" ");
          return a.createElement(
            "div",
            { className: j },
            U && a.createElement(g.Z, null),
            !U &&
              a.createElement(
                C.R.Provider,
                { value: "update" },
                a.createElement(
                  p.Z,
                  {
                    className: `${P}__form`,
                    method: "patch",
                    action: L,
                    initialState: S,
                    disabled: !Z,
                  },
                  a.createElement(
                    "div",
                    { className: `${P}__main` },
                    a.createElement(k.Z, {
                      title: "Account",
                      description: "Account of current user",
                      keywords: "Account, Dashboard, Payload, CMS",
                    }),
                    a.createElement(m.Z, null),
                    !(
                      (null === (t = r.versions) || void 0 === t
                        ? void 0
                        : t.drafts) &&
                      (null ===
                        (l =
                          null === (n = r.versions) || void 0 === n
                            ? void 0
                            : n.drafts) || void 0 === l
                        ? void 0
                        : l.autosave)
                    ) && a.createElement(_.Z, null),
                    a.createElement(
                      "div",
                      { className: `${P}__edit` },
                      a.createElement(
                        $.T,
                        { className: `${P}__header` },
                        a.createElement(
                          "h1",
                          null,
                          a.createElement(b.Z, {
                            data: s,
                            useAsTitle: M,
                            fallback: "[Untitled]",
                          })
                        ),
                        a.createElement(w.Z, {
                          useAPIKey: I.useAPIKey,
                          collection: r,
                          email: null == s ? void 0 : s.email,
                          operation: "update",
                        }),
                        a.createElement(h.Z, {
                          permissions: c.fields,
                          readOnly: !Z,
                          filter: (e) => {
                            var t;
                            return (
                              "sidebar" !==
                              (null === (t = null == e ? void 0 : e.admin) ||
                              void 0 === t
                                ? void 0
                                : t.position)
                            );
                          },
                          fieldTypes: E.Z,
                          fieldSchema: F,
                        })
                      ),
                      a.createElement(
                        $.T,
                        { className: `${P}__payload-settings` },
                        a.createElement("h3", null, "Payload Settings"),
                        a.createElement(N, null)
                      )
                    )
                  ),
                  a.createElement(
                    "div",
                    { className: `${P}__sidebar-wrap` },
                    a.createElement(
                      "div",
                      { className: `${P}__sidebar` },
                      a.createElement(
                        "div",
                        { className: `${P}__sidebar-sticky-wrap` },
                        a.createElement(
                          "ul",
                          { className: `${P}__collection-actions` },
                          (null === (i = null == c ? void 0 : c.create) ||
                          void 0 === i
                            ? void 0
                            : i.permission) &&
                            a.createElement(
                              a.Fragment,
                              null,
                              a.createElement(
                                "li",
                                null,
                                a.createElement(
                                  u.Link,
                                  { to: `${K}/collections/${O}/create` },
                                  "Create New"
                                )
                              )
                            )
                        ),
                        a.createElement(
                          "div",
                          {
                            className: `${P}__document-actions${
                              x ? ` ${P}__document-actions--with-preview` : ""
                            }`,
                          },
                          a.createElement(f.Z, {
                            generatePreviewURL: x,
                            data: s,
                          }),
                          Z && a.createElement(v.Z, null, "Save")
                        ),
                        a.createElement(
                          "div",
                          { className: `${P}__sidebar-fields` },
                          a.createElement(h.Z, {
                            permissions: c.fields,
                            readOnly: !Z,
                            filter: (e) => {
                              var t;
                              return (
                                "sidebar" ===
                                (null === (t = null == e ? void 0 : e.admin) ||
                                void 0 === t
                                  ? void 0
                                  : t.position)
                              );
                            },
                            fieldTypes: E.Z,
                            fieldSchema: F,
                          })
                        ),
                        a.createElement(
                          "ul",
                          { className: `${P}__meta` },
                          a.createElement(
                            "li",
                            { className: `${P}__api-url` },
                            a.createElement(
                              "span",
                              { className: `${P}__label` },
                              "API URL",
                              " ",
                              a.createElement(y.Z, { value: A })
                            ),
                            a.createElement(
                              "a",
                              {
                                href: A,
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              A
                            )
                          ),
                          a.createElement(
                            "li",
                            null,
                            a.createElement(
                              "div",
                              { className: `${P}__label` },
                              "ID"
                            ),
                            a.createElement(
                              "div",
                              null,
                              null == s ? void 0 : s.id
                            )
                          ),
                          T &&
                            a.createElement(
                              a.Fragment,
                              null,
                              s.updatedAt &&
                                a.createElement(
                                  "li",
                                  null,
                                  a.createElement(
                                    "div",
                                    { className: `${P}__label` },
                                    "Last Modified"
                                  ),
                                  a.createElement(
                                    "div",
                                    null,
                                    (0, d.default)(new Date(s.updatedAt), R)
                                  )
                                ),
                              s.createdAt &&
                                a.createElement(
                                  "li",
                                  null,
                                  a.createElement(
                                    "div",
                                    { className: `${P}__label` },
                                    "Created"
                                  ),
                                  a.createElement(
                                    "div",
                                    null,
                                    (0, d.default)(new Date(s.createdAt), R)
                                  )
                                )
                            )
                        )
                      )
                    )
                  )
                )
              )
          );
        };
      var U = n(19826),
        L = n(2143),
        O = n(45074),
        F = n(91455);
      const M = () => {
        var e, t;
        const { state: n } = (0, l.TH)(),
          u = (0, c.bU)(),
          { setStepNav: d } = (0, r.FP)(),
          { user: m, permissions: p } = (0, i.a)(),
          [f, v] = (0, a.useState)(),
          { id: h, preferencesKey: y } = (0, O.x5)(),
          { getPreference: E } = (0, F.G)(),
          {
            serverURL: b,
            routes: { api: _ },
            collections: k,
            admin: {
              user: w,
              components: { views: { Account: g } = { Account: void 0 } } = {},
            } = { user: "users" },
          } = (0, o.Z)(),
          C = k.find((e) => e.slug === w),
          { fields: Z } = C,
          A =
            null === (e = null == p ? void 0 : p.collections) || void 0 === e
              ? void 0
              : e[w],
          [{ data: N }] = (0, s.Z)(
            `${b}${_}/${null == C ? void 0 : C.slug}/${
              null == m ? void 0 : m.id
            }?depth=0`,
            { initialParams: { "fallback-locale": "null" } }
          ),
          $ =
            null === (t = null == A ? void 0 : A.update) || void 0 === t
              ? void 0
              : t.permission,
          P = (null == n ? void 0 : n.data) || N,
          M = `${b}${_}/${m.collection}/${null == N ? void 0 : N.id}`,
          x = `${b}${_}/${m.collection}/${
            null == N ? void 0 : N.id
          }?locale=${u}&depth=0`;
        return (
          (0, a.useEffect)(() => {
            d([{ label: "Account" }]);
          }, [d]),
          (0, a.useEffect)(() => {
            (async () => {
              const e = await (0, U.Z)({
                fieldSchema: Z,
                data: P,
                operation: "update",
                id: h,
                user: m,
                locale: u,
              });
              await E(y), v(e);
            })();
          }, [P, Z, h, m, u, y, E]),
          a.createElement(L.Z, {
            DefaultComponent: S,
            CustomComponent: g,
            componentProps: {
              action: x,
              data: N,
              collection: C,
              permissions: A,
              hasSavePermission: $,
              initialState: f,
              apiURL: M,
              isLoading: !f,
            },
          })
        );
      };
    },
    73588: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => A });
      var a = n(67294),
        l = n(39249),
        o = n(9980),
        i = n(28571),
        r = n(76067),
        s = n(26314),
        c = n(77329),
        u = n(74007),
        d = n(64012),
        m = n(44586),
        p = n(48170),
        f = n(953),
        v = n(55532),
        h = n(35193),
        y = n(71851),
        E = n(39599),
        b = n(45074);
      n(25891);
      const _ = "generate-confirmation",
        k = (e) => {
          const { setKey: t, highlightField: n } = e,
            { id: o } = (0, b.x5)(),
            { toggleModal: i } = (0, y.useModal)(),
            r = `generate-confirmation-${o}`;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              c.Z,
              {
                size: "small",
                buttonStyle: "secondary",
                onClick: () => {
                  i(r);
                },
              },
              "Generate new API key"
            ),
            a.createElement(
              y.Modal,
              { slug: r, className: _ },
              a.createElement(
                E.Z,
                { className: `${_}__template` },
                a.createElement("h1", null, "Confirm Generation"),
                a.createElement(
                  "p",
                  null,
                  "Generating a new API key will",
                  " ",
                  a.createElement("strong", null, "invalidate"),
                  " ",
                  "the previous key.",
                  " ",
                  "Are you sure you wish to continue?"
                ),
                a.createElement(
                  c.Z,
                  {
                    buttonStyle: "secondary",
                    type: "button",
                    onClick: () => {
                      i(r);
                    },
                  },
                  "Cancel"
                ),
                a.createElement(
                  c.Z,
                  {
                    onClick: () => {
                      t(),
                        i(r),
                        l.Am.success("New API Key Generated.", {
                          autoClose: 3e3,
                        }),
                        n(!0);
                    },
                  },
                  "Generate"
                )
              )
            )
          );
        },
        w = "apiKey",
        g = (e) =>
          (0, h.text)(e, {
            minLength: 24,
            maxLength: 48,
            data: {},
            siblingData: {},
          }),
        C = () => {
          const [e, t] = (0, a.useState)(null),
            [n, l] = (0, a.useState)(!1),
            { getField: o } = (0, d.useWatchForm)(),
            i = o(w),
            r = null == i ? void 0 : i.value,
            s = (0, a.useMemo)(
              () =>
                a.createElement(
                  "div",
                  { className: "api-key__label" },
                  a.createElement("span", null, "API Key"),
                  a.createElement(v.Z, { value: r })
                ),
              [r]
            ),
            c = (0, p.Z)({ path: "apiKey", validate: g }),
            { value: u, setValue: h } = c;
          (0, a.useEffect)(() => {
            t((0, m.Z)());
          }, []),
            (0, a.useEffect)(() => {
              r || h(e);
            }, [r, h, e]),
            (0, a.useEffect)(() => {
              n &&
                setTimeout(() => {
                  l(!1);
                }, 1e4);
            }, [n]);
          const y = ["field-type", "api-key", "read-only"]
            .filter(Boolean)
            .join(" ");
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              "div",
              { className: y },
              a.createElement(f.Z, { htmlFor: w, label: s }),
              a.createElement("input", {
                value: u || "",
                className: n ? "highlight" : void 0,
                disabled: !0,
                type: "text",
                id: "apiKey",
                name: "apiKey",
              })
            ),
            a.createElement(k, {
              setKey: () => h((0, m.Z)()),
              highlightField: () => {
                n && l(!1),
                  setTimeout(() => {
                    l(!0);
                  }, 1);
              },
            })
          );
        };
      n(32554);
      const Z = "auth-fields",
        A = (e) => {
          const {
              useAPIKey: t,
              requirePassword: n,
              verify: m,
              collection: { slug: p },
              collection: f,
              email: v,
              operation: h,
            } = e,
            [y, E] = (0, a.useState)(n),
            { getField: b, dispatchFields: _ } = (0, d.useWatchForm)(),
            k = (0, d.useFormModified)(),
            w = b("enableAPIKey"),
            {
              serverURL: g,
              routes: { api: A },
            } = (0, o.Z)(),
            N = (0, a.useCallback)(
              async (e) => {
                e ||
                  (_({ type: "REMOVE", path: "password" }),
                  _({ type: "REMOVE", path: "confirm-password" })),
                  E(e);
              },
              [_]
            ),
            $ = (0, a.useCallback)(async () => {
              const e = `${g}${A}/${p}/unlock`;
              200 ===
              (
                await fetch(e, {
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: v }),
                  method: "post",
                })
              ).status
                ? l.Am.success("Successfully unlocked", { autoClose: 3e3 })
                : l.Am.error("Successfully unlocked");
            }, [g, A, p, v]);
          return (
            (0, a.useEffect)(() => {
              k || E(!1);
            }, [k]),
            f.auth.disableLocalStrategy
              ? null
              : a.createElement(
                  "div",
                  { className: Z },
                  a.createElement(i.Z, {
                    required: !0,
                    name: "email",
                    label: "Email",
                    admin: { autoComplete: "email" },
                  }),
                  (y || n) &&
                    a.createElement(
                      "div",
                      { className: "auth-fields__changing-password" },
                      a.createElement(r.Z, {
                        autoComplete: "off",
                        required: !0,
                        name: "password",
                        label: "New Password",
                      }),
                      a.createElement(u.Z, null),
                      !n &&
                        a.createElement(
                          c.Z,
                          {
                            size: "small",
                            buttonStyle: "secondary",
                            onClick: () => N(!1),
                          },
                          "Cancel"
                        )
                    ),
                  !y &&
                    !n &&
                    a.createElement(
                      c.Z,
                      {
                        size: "small",
                        buttonStyle: "secondary",
                        onClick: () => N(!0),
                      },
                      "Change Password"
                    ),
                  "update" === h &&
                    a.createElement(
                      c.Z,
                      {
                        size: "small",
                        buttonStyle: "secondary",
                        onClick: () => $(),
                      },
                      "Force Unlock"
                    ),
                  t &&
                    a.createElement(
                      "div",
                      { className: "auth-fields__api-key" },
                      a.createElement(s.Z, {
                        label: "Enable API Key",
                        name: "enableAPIKey",
                      }),
                      (null == w ? void 0 : w.value) && a.createElement(C, null)
                    ),
                  m &&
                    a.createElement(s.Z, {
                      label: "Verified",
                      name: "_verified",
                    })
                )
          );
        };
    },
    3902: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => l });
      var a = n(64012);
      const l = (e) => {
        const { getField: t } = (0, a.useWatchForm)(),
          n = t(e);
        return null == n ? void 0 : n.value;
      };
    },
    82949: (e, t, n) => {
      e.exports = (function (e) {
        var t = {};
        function n(a) {
          if (t[a]) return t[a].exports;
          var l = (t[a] = { i: a, l: !1, exports: {} });
          return e[a].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, a) {
            n.o(e, t) ||
              Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: a,
              });
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 0))
        );
      })([
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a,
            l =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              },
            o = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var a = t[n];
                  (a.enumerable = a.enumerable || !1),
                    (a.configurable = !0),
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a);
                }
              }
              return function (t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t;
              };
            })(),
            i = n(1),
            r = (a = i) && a.__esModule ? a : { default: a },
            s = n(2);
          var c = { action: null, isActive: !1, nextLocation: null },
            u = (function (e) {
              function t(e) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var n = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                );
                return (
                  (n._prevUserAction = ""),
                  (n._isMounted = !0),
                  (n.block = n.block.bind(n)),
                  (n.onBeforeUnload = n.onBeforeUnload.bind(n)),
                  (n.onCancel = n.onCancel.bind(n)),
                  (n.onConfirm = n.onConfirm.bind(n)),
                  (n.when = n.when.bind(n)),
                  (n.state = l({}, c, { unblock: function () {} })),
                  n
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                o(t, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.props.disableNative ||
                        window.addEventListener(
                          "beforeunload",
                          this.onBeforeUnload
                        ),
                        this.setState({
                          unblock: this.props.history.block(this.block),
                        });
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                      "CANCEL" === this._prevUserAction &&
                      "function" == typeof this.props.afterCancel
                        ? this.props.afterCancel()
                        : "CONFIRM" === this._prevUserAction &&
                          "function" == typeof this.props.afterConfirm &&
                          this.props.afterConfirm(),
                        (this._prevUserAction = "");
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      (this._isMounted = !1),
                        "CONFIRM" === this._prevUserAction &&
                          "function" == typeof this.props.afterConfirm &&
                          ((this._prevUserAction = ""),
                          this.props.afterConfirm()),
                        this.state.unblock(),
                        this.props.disableNative ||
                          window.removeEventListener(
                            "beforeunload",
                            this.onBeforeUnload
                          );
                    },
                  },
                  {
                    key: "block",
                    value: function (e, t) {
                      var n = this.when(e, t);
                      return (
                        n &&
                          this.setState({
                            action: t,
                            nextLocation: e,
                            isActive: !0,
                          }),
                        !n
                      );
                    },
                  },
                  {
                    key: "navigateToNextLocation",
                    value: function (e) {
                      var t = this,
                        n = this.state,
                        a = n.action,
                        o = n.nextLocation;
                      (a = {
                        POP: this.props.allowGoBack ? "goBack" : "push",
                        PUSH: "push",
                        REPLACE: "replace",
                      }[a || "PUSH"]),
                        o || (o = { pathname: "/" });
                      var i = this.props.history;
                      if (
                        (this.state.unblock(),
                        (this._prevUserAction = "CONFIRM"),
                        "goBack" === a)
                      ) {
                        var r = i.listen(function () {
                          r(),
                            t._isMounted &&
                              t.setState(
                                l({}, c, { unblock: i.block(t.block) })
                              );
                        });
                        i.goBack();
                      } else
                        i[a](o),
                          this._isMounted &&
                            this.setState(
                              l({}, c, {
                                unblock: this.props.history.block(this.block),
                              })
                            );
                    },
                  },
                  {
                    key: "onCancel",
                    value: function () {
                      var e = this;
                      (
                        this.props.beforeCancel ||
                        function (e) {
                          e();
                        }
                      )(function () {
                        (e._prevUserAction = "CANCEL"), e.setState(l({}, c));
                      });
                    },
                  },
                  {
                    key: "onConfirm",
                    value: function () {
                      var e = this;
                      (
                        this.props.beforeConfirm ||
                        function (e) {
                          e();
                        }
                      )(function () {
                        e.navigateToNextLocation(e.props.afterConfirm);
                      });
                    },
                  },
                  {
                    key: "onBeforeUnload",
                    value: function (e) {
                      if (this.when()) {
                        var t =
                          "Do you want to leave this site?\n\nChanges you made may not be saved.";
                        return (e.returnValue = t), t;
                      }
                    },
                  },
                  {
                    key: "when",
                    value: function (e, t) {
                      return "function" == typeof this.props.when
                        ? this.props.when(this.props.location, e, t)
                        : this.props.when;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      return this.state.isActive || this.props.renderIfNotActive
                        ? r.default.createElement(
                            "div",
                            null,
                            this.props.children({
                              isActive: this.state.isActive,
                              onConfirm: this.onConfirm,
                              onCancel: this.onCancel,
                            })
                          )
                        : null;
                    },
                  },
                ]),
                t
              );
            })(r.default.Component);
          t.default = (0, s.withRouter)(u);
        },
        function (e, t) {
          e.exports = n(67294);
        },
        function (e, t) {
          e.exports = n(73727);
        },
      ]);
    },
  },
]);
