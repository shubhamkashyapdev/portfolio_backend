/*! For license information please see 877.c19fca2d98057c70b342.js.LICENSE.txt */
"use strict";
(self.webpackChunkpayload_starter_typescript =
  self.webpackChunkpayload_starter_typescript || []).push([
  [877],
  {
    55532: (e, t, r) => {
      r.d(t, { Z: () => o });
      var n = r(67294),
        a = r(51265),
        i = r(70579);
      r(28362);
      const o = ({
        value: e,
        defaultMessage: t = "copy",
        successMessage: r = "copied",
      }) => {
        const o = (0, n.useRef)(null),
          [l, s] = (0, n.useState)(!1),
          [c, d] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            l &&
              !c &&
              setTimeout(() => {
                s(!1);
              }, 1500);
          }, [l, c]),
          e
            ? n.createElement(
                "button",
                {
                  onMouseEnter: () => {
                    d(!0), s(!1);
                  },
                  onMouseLeave: () => {
                    d(!1), s(!1);
                  },
                  type: "button",
                  className: "copy-to-clipboard",
                  onClick: () => {
                    o &&
                      o.current &&
                      (o.current.select(),
                      o.current.setSelectionRange(0, e.length + 1),
                      document.execCommand("copy"),
                      s(!0));
                  },
                },
                n.createElement(a.Z, null),
                n.createElement(i.Z, null, l && r, !l && t),
                n.createElement("textarea", { readOnly: !0, value: e, ref: o })
              )
            : null
        );
      };
    },
    29580: (e, t, r) => {
      r.d(t, { Z: () => m });
      var n = r(67294),
        a = r(68133),
        i = r(73559),
        o = r(77329),
        l = r(9980),
        s = r(55532),
        c = r(55976);
      r(85228);
      const d = "file-meta",
        u = (e) => {
          const {
              filename: t,
              filesize: r,
              width: a,
              height: i,
              mimeType: o,
              staticURL: u,
              url: p,
            } = e,
            { serverURL: f } = (0, l.Z)(),
            m = p || `${f}${u}/${t}`;
          return n.createElement(
            "div",
            { className: d },
            n.createElement(
              "div",
              { className: "file-meta__url" },
              n.createElement(
                "a",
                { href: m, target: "_blank", rel: "noopener noreferrer" },
                t
              ),
              n.createElement(s.Z, { value: m, defaultMessage: "Copy URL" })
            ),
            n.createElement(
              "div",
              { className: "file-meta__size-type" },
              (0, c.Z)(r),
              a && i && n.createElement(n.Fragment, null, " - ", a, "x", i),
              o && n.createElement(n.Fragment, null, " - ", o)
            )
          );
        };
      var p = r(65821);
      r(90516);
      const f = "file-details",
        m = (e) => {
          var t;
          const { doc: r, collection: l, handleRemove: s } = e,
            {
              upload: { staticURL: c },
            } = l,
            {
              filename: d,
              filesize: m,
              width: g,
              height: v,
              mimeType: b,
              sizes: h,
              url: y,
            } = r,
            [E, A] = (0, n.useState)(!1),
            w =
              h &&
              (null === (t = Object.keys(h)) || void 0 === t
                ? void 0
                : t.length) > 0;
          return n.createElement(
            "div",
            { className: f },
            n.createElement(
              "header",
              null,
              n.createElement(i.Z, { doc: r, collection: l }),
              n.createElement(
                "div",
                { className: "file-details__main-detail" },
                n.createElement(u, {
                  staticURL: c,
                  filename: d,
                  filesize: m,
                  width: g,
                  height: v,
                  mimeType: b,
                  url: y,
                }),
                w &&
                  n.createElement(
                    o.Z,
                    {
                      className:
                        "file-details__toggle-more-info" + (E ? " open" : ""),
                      buttonStyle: "none",
                      onClick: () => A(!E),
                    },
                    !E &&
                      n.createElement(
                        n.Fragment,
                        null,
                        "More info",
                        n.createElement(p.Z, null)
                      ),
                    E &&
                      n.createElement(
                        n.Fragment,
                        null,
                        "Less info",
                        n.createElement(p.Z, null)
                      )
                  )
              ),
              s &&
                n.createElement(o.Z, {
                  icon: "x",
                  round: !0,
                  buttonStyle: "icon-label",
                  iconStyle: "with-border",
                  onClick: s,
                  className: "file-details__remove",
                })
            ),
            w &&
              n.createElement(
                a.Z,
                {
                  className: "file-details__more-info",
                  height: E ? "auto" : 0,
                },
                n.createElement(
                  "ul",
                  { className: "file-details__sizes" },
                  Object.entries(h).map(([e, t]) =>
                    (null == t ? void 0 : t.filename)
                      ? n.createElement(
                          "li",
                          { key: e },
                          n.createElement(
                            "div",
                            { className: "file-details__size-label" },
                            e
                          ),
                          n.createElement(u, {
                            ...t,
                            mimeType: b,
                            staticURL: c,
                          })
                        )
                      : null
                  )
                )
              )
          );
        };
    },
    77070: (e, t, r) => {
      r.d(t, { Z: () => o });
      var n = r(67294),
        a = r(12049);
      r(14120);
      const i = "field-description",
        o = (e) => {
          const { className: t, description: r, value: o } = e;
          if ((0, a.isComponent)(r)) {
            const e = r;
            return n.createElement(e, { value: o });
          }
          return r
            ? n.createElement(
                "div",
                { className: [i, t].filter(Boolean).join(" ") },
                "function" == typeof r ? r({ value: o }) : r
              )
            : null;
        };
    },
    12049: function (e, t, r) {
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isComponent = void 0);
      const a = n(r(67294));
      t.isComponent = function (e) {
        return a.default.isValidElement(e);
      };
    },
    5590: (e, t, r) => {
      r.d(t, { Z: () => d });
      var n = r(67294),
        a = r(2143),
        i = r(47444),
        o = r(83780),
        l = r(9684);
      const s = "render-fields",
        c = { rootMargin: "1000px" },
        d = (e) => {
          var t;
          const {
              fieldSchema: r,
              fieldTypes: d,
              filter: u,
              permissions: p,
              readOnly: f,
              className: m,
              forceRender: g,
            } = e,
            [v, b] = (0, n.useState)(Boolean(g)),
            [h, y] = (0, i.Z)(c),
            E = (0, l.T)(),
            A = Boolean(null == y ? void 0 : y.isIntersecting),
            w =
              (null === (t = null == y ? void 0 : y.boundingClientRect) ||
              void 0 === t
                ? void 0
                : t.top) < 0,
            x = g || A || w;
          (0, n.useEffect)(() => {
            x && !v && b(!0);
          }, [x, v]);
          const I = [s, m].filter(Boolean).join(" ");
          return r
            ? n.createElement(
                "div",
                { ref: h, className: I },
                v &&
                  r.map((e, t) => {
                    var r, i, l, s, c, m, g, v;
                    const b = (0, o.fieldIsPresentationalOnly)(e);
                    let h = d[e.type];
                    if (
                      b ||
                      (!(null == e ? void 0 : e.hidden) &&
                        !0 !==
                          (null === (r = null == e ? void 0 : e.admin) ||
                          void 0 === r
                            ? void 0
                            : r.disabled))
                    ) {
                      if ((u && "function" == typeof u && u(e)) || !u) {
                        if (b) return n.createElement(h, { ...e, key: t });
                        (null === (i = null == e ? void 0 : e.admin) ||
                        void 0 === i
                          ? void 0
                          : i.hidden) && (h = d.hidden);
                        const r = (0, o.fieldAffectsData)(e),
                          u = r ? (null == p ? void 0 : p[e.name]) : p;
                        let { admin: { readOnly: y } = {} } = e;
                        if (
                          (f && !1 !== y && (y = !0),
                          (r &&
                            !1 !==
                              (null ===
                                (s =
                                  null ===
                                    (l =
                                      null == p
                                        ? void 0
                                        : p[null == e ? void 0 : e.name]) ||
                                  void 0 === l
                                    ? void 0
                                    : l.read) || void 0 === s
                                ? void 0
                                : s.permission)) ||
                            !r)
                        )
                          return (
                            r &&
                              !1 ===
                                (null ===
                                  (m =
                                    null ===
                                      (c =
                                        null == p
                                          ? void 0
                                          : p[null == e ? void 0 : e.name]) ||
                                    void 0 === c
                                      ? void 0
                                      : c[E]) || void 0 === m
                                  ? void 0
                                  : m.permission) &&
                              (y = !0),
                            h
                              ? n.createElement(a.Z, {
                                  key: t,
                                  CustomComponent:
                                    null ===
                                      (v =
                                        null ===
                                          (g = null == e ? void 0 : e.admin) ||
                                        void 0 === g
                                          ? void 0
                                          : g.components) || void 0 === v
                                      ? void 0
                                      : v.Field,
                                  DefaultComponent: h,
                                  componentProps: {
                                    ...e,
                                    path: e.path || (r ? e.name : ""),
                                    fieldTypes: d,
                                    admin: { ...(e.admin || {}), readOnly: y },
                                    permissions: u,
                                  },
                                })
                              : n.createElement(
                                  "div",
                                  { className: "missing-field", key: t },
                                  "No matched field found for",
                                  " ",
                                  '"',
                                  e.label,
                                  '"'
                                )
                          );
                      }
                      return null;
                    }
                    return null;
                  })
              )
            : null;
        };
    },
    26314: (e, t, r) => {
      r.d(t, { Z: () => p });
      var n = r(67294),
        a = r(48170),
        i = r(90546),
        o = r.n(i),
        l = r(90666),
        s = r(35193);
      r(65809);
      const c = () =>
        n.createElement(
          "svg",
          {
            className: "icon icon--check",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 25 25",
          },
          n.createElement("path", {
            d: "M10.6092 16.0192L17.6477 8.98076",
            className: "stroke",
            strokeLinecap: "square",
            strokeLinejoin: "bevel",
          }),
          n.createElement("path", {
            d: "M7.35229 12.7623L10.6092 16.0192",
            className: "stroke",
            strokeLinecap: "square",
            strokeLinejoin: "bevel",
          })
        );
      var d = r(77070);
      r(4198);
      const u = "checkbox",
        p = o()((e) => {
          const {
              name: t,
              path: r,
              validate: i = s.checkbox,
              label: o,
              onChange: p,
              disableFormData: f,
              required: m,
              admin: {
                readOnly: g,
                style: v,
                className: b,
                width: h,
                description: y,
                condition: E,
              } = {},
            } = e,
            A = r || t,
            w = (0, n.useCallback)(
              (e, t) => i(e, { ...t, required: m }),
              [i, m]
            ),
            {
              value: x,
              showError: I,
              errorMessage: C,
              setValue: D,
            } = (0, a.Z)({
              path: A,
              validate: w,
              disableFormData: f,
              condition: E,
            });
          return n.createElement(
            "div",
            {
              className: [
                "field-type",
                u,
                I && "error",
                b,
                x && `${u}--checked`,
                g && `${u}--read-only`,
              ]
                .filter(Boolean)
                .join(" "),
              style: { ...v, width: h },
            },
            n.createElement(
              "div",
              { className: `${u}__error-wrap` },
              n.createElement(l.Z, { showError: I, message: C })
            ),
            n.createElement("input", {
              id: `field-${A.replace(/\./gi, "__")}`,
              type: "checkbox",
              name: A,
              checked: Boolean(x),
              readOnly: !0,
            }),
            n.createElement(
              "button",
              {
                type: "button",
                onClick: g
                  ? void 0
                  : () => {
                      D(!x), "function" == typeof p && p(!x);
                    },
              },
              n.createElement(
                "span",
                { className: `${u}__input` },
                n.createElement(c, null)
              ),
              n.createElement("span", { className: `${u}__label` }, o)
            ),
            n.createElement(d.Z, { value: x, description: y })
          );
        });
    },
    74007: (e, t, r) => {
      r.d(t, { Z: () => s });
      var n = r(67294),
        a = r(48170),
        i = r(953),
        o = r(90666),
        l = r(64012);
      r(89013);
      const s = () => {
        const { getField: e } = (0, l.useWatchForm)(),
          t = e("password"),
          r = (0, n.useCallback)(
            (e) =>
              e
                ? e === (null == t ? void 0 : t.value) ||
                  "Passwords do not match."
                : "This field is required",
            [t]
          ),
          {
            value: s,
            showError: c,
            setValue: d,
            errorMessage: u,
          } = (0, a.Z)({
            path: "confirm-password",
            disableFormData: !0,
            validate: r,
            enableDebouncedValue: !0,
          }),
          p = ["field-type", "confirm-password", c && "error"]
            .filter(Boolean)
            .join(" ");
        return n.createElement(
          "div",
          { className: p },
          n.createElement(o.Z, { showError: c, message: u }),
          n.createElement(i.Z, {
            htmlFor: "field-confirm-password",
            label: "Confirm Password",
            required: !0,
          }),
          n.createElement("input", {
            value: s || "",
            onChange: d,
            type: "password",
            autoComplete: "off",
            id: "field-confirm-password",
            name: "confirm-password",
          })
        );
      };
    },
    28571: (e, t, r) => {
      r.d(t, { Z: () => u });
      var n = r(67294),
        a = r(90546),
        i = r.n(a),
        o = r(48170),
        l = r(953),
        s = r(90666),
        c = r(77070),
        d = r(35193);
      r(25786);
      const u = i()((e) => {
        const {
            name: t,
            path: r,
            required: a,
            validate: i = d.email,
            admin: {
              readOnly: u,
              style: p,
              className: f,
              width: m,
              placeholder: g,
              autoComplete: v,
              description: b,
              condition: h,
            } = {},
            label: y,
          } = e,
          E = r || t,
          A = (0, n.useCallback)((e, t) => i(e, { ...t, required: a }), [i, a]),
          w = (0, o.Z)({
            path: E,
            validate: A,
            enableDebouncedValue: !0,
            condition: h,
          }),
          { value: x, showError: I, setValue: C, errorMessage: D } = w,
          N = ["field-type", "email", f, I && "error", u && "read-only"]
            .filter(Boolean)
            .join(" ");
        return n.createElement(
          "div",
          { className: N, style: { ...p, width: m } },
          n.createElement(s.Z, { showError: I, message: D }),
          n.createElement(l.Z, {
            htmlFor: `field-${E.replace(/\./gi, "__")}`,
            label: y,
            required: a,
          }),
          n.createElement("input", {
            id: `field-${E.replace(/\./gi, "__")}`,
            value: x || "",
            onChange: C,
            disabled: Boolean(u),
            placeholder: g,
            type: "email",
            name: E,
            autoComplete: v,
          }),
          n.createElement(c.Z, { value: x, description: b })
        );
      });
    },
    74020: (e, t, r) => {
      r.d(t, { Z: () => o });
      var n = r(67294),
        a = r(48170),
        i = r(90546);
      const o = r.n(i)()((e) => {
        const { name: t, path: r, value: i, disableModifyingForm: o = !0 } = e,
          l = r || t,
          { value: s, setValue: c } = (0, a.Z)({ path: l });
        return (
          (0, n.useEffect)(() => {
            void 0 !== i && c(i, o);
          }, [i, c, o]),
          n.createElement("input", {
            id: `field-${l.replace(/\./gi, "__")}`,
            type: "hidden",
            value: s || "",
            onChange: c,
            name: l,
          })
        );
      });
    },
    76067: (e, t, r) => {
      r.d(t, { Z: () => d });
      var n = r(67294),
        a = r(48170),
        i = r(953),
        o = r(90666),
        l = r(90546),
        s = r.n(l),
        c = r(35193);
      r(8108);
      const d = s()((e) => {
        const {
            path: t,
            name: r,
            required: l,
            validate: s = c.password,
            style: d,
            className: u,
            width: p,
            autoComplete: f,
            label: m,
          } = e,
          g = t || r,
          v = (0, n.useCallback)((e, t) => s(e, { ...t, required: l }), [s, l]),
          {
            value: b,
            showError: h,
            formProcessing: y,
            setValue: E,
            errorMessage: A,
          } = (0, a.Z)({ path: g, validate: v, enableDebouncedValue: !0 }),
          w = ["field-type", "password", u, h && "error"]
            .filter(Boolean)
            .join(" ");
        return n.createElement(
          "div",
          { className: w, style: { ...d, width: p } },
          n.createElement(o.Z, { showError: h, message: A }),
          n.createElement(i.Z, {
            htmlFor: `field-${g.replace(/\./gi, "__")}`,
            label: m,
            required: l,
          }),
          n.createElement("input", {
            id: `field-${g.replace(/\./gi, "__")}`,
            value: b || "",
            onChange: E,
            disabled: y,
            type: "password",
            autoComplete: f,
            name: g,
          })
        );
      });
    },
    92962: (e, t, r) => {
      r.d(t, { Z: () => u });
      var n = r(67294),
        a = r(90666),
        i = r(953),
        o = r(77070);
      r(87376);
      const l = "radio-input",
        s = (e) => {
          const { isSelected: t, option: r, onChange: a, path: i } = e,
            o = [l, t && `${l}--is-selected`].filter(Boolean).join(" "),
            s = `field-${i}-${r.value}`;
          return n.createElement(
            "label",
            { htmlFor: s },
            n.createElement(
              "div",
              { className: o },
              n.createElement("input", {
                id: s,
                type: "radio",
                checked: t,
                onChange: () => ("function" == typeof a ? a(r.value) : null),
              }),
              n.createElement("span", { className: `${l}__styled-radio` }),
              n.createElement("span", { className: `${l}__label` }, r.label)
            )
          );
        };
      var c = r(83780);
      r(6129);
      const d = "radio-group",
        u = (e) => {
          const {
              name: t,
              path: r,
              required: l,
              label: u,
              readOnly: p,
              layout: f = "horizontal",
              style: m,
              className: g,
              width: v,
              description: b,
              onChange: h,
              value: y,
              showError: E,
              errorMessage: A,
              options: w,
            } = e,
            x = r || t,
            I = [
              "field-type",
              d,
              g,
              `${d}--layout-${f}`,
              E && "error",
              p && `${d}--read-only`,
            ]
              .filter(Boolean)
              .join(" ");
          return n.createElement(
            "div",
            { className: I, style: { ...m, width: v } },
            n.createElement(
              "div",
              { className: `${d}__error-wrap` },
              n.createElement(a.Z, { showError: E, message: A })
            ),
            n.createElement(i.Z, {
              htmlFor: `field-${x}`,
              label: u,
              required: l,
            }),
            n.createElement(
              "ul",
              {
                id: `field-${x.replace(/\./gi, "__")}`,
                className: `${d}--group`,
              },
              w.map((e) => {
                let t = "";
                t = (0, c.optionIsObject)(e) ? e.value : e;
                const r = String(t) === String(y);
                return n.createElement(
                  "li",
                  { key: `${x} - ${t}` },
                  n.createElement(s, {
                    path: x,
                    isSelected: r,
                    option: (0, c.optionIsObject)(e)
                      ? e
                      : { label: e, value: e },
                    onChange: p ? void 0 : h,
                  })
                );
              })
            ),
            n.createElement(o.Z, { value: y, description: b })
          );
        };
    },
    41884: (e, t, r) => {
      r.d(t, { Z: () => N });
      var n = r(67294),
        a = r(10251),
        i = r.n(a),
        o = r(9034),
        l = r.n(o),
        s = r(9980),
        c = r(28630),
        d = r(90546),
        u = r.n(d),
        p = r(97591),
        f = r(48170),
        m = r(953),
        g = r(90666),
        v = r(77070),
        b = r(35193),
        h = r(64012);
      const y = (e) =>
          e.reduce(
            (e, t) => (t.options ? [...e, ...y(t.options)] : [...e, t.value]),
            []
          ),
        E = (e) =>
          e.sort((e, t) => {
            var r, n;
            return "function" ==
              typeof (null === (r = null == e ? void 0 : e.label) ||
              void 0 === r
                ? void 0
                : r.localeCompare) &&
              "function" ==
                typeof (null === (n = null == t ? void 0 : t.label) ||
                void 0 === n
                  ? void 0
                  : n.localeCompare)
              ? e.label.localeCompare(t.label)
              : 0;
          }),
        A = (e, t) => {
          switch (t.type) {
            case "CLEAR":
              return [];
            case "ADD": {
              const {
                  hasMultipleRelations: r,
                  collection: n,
                  relation: a,
                  data: i,
                  sort: o,
                  ids: l = [],
                } = t,
                s = n.admin.useAsTitle || "id",
                c = y(e);
              if (!r) {
                const t = [
                  ...e,
                  ...i.docs.reduce(
                    (e, t) =>
                      -1 === c.indexOf(t.id)
                        ? (c.push(t.id),
                          [
                            ...e,
                            {
                              label: t[s] || `Untitled - ID: ${t.id}`,
                              value: t.id,
                            },
                          ])
                        : e,
                    []
                  ),
                ];
                return (
                  l.forEach((e) => {
                    c.includes(e) ||
                      t.push({
                        label: "id" === s ? e : `Untitled - ID: ${e}`,
                        value: e,
                      });
                  }),
                  o ? E(t) : t
                );
              }
              const d = [...e],
                u = d.find((e) => e.label === n.labels.plural),
                p = i.docs.reduce(
                  (e, t) =>
                    -1 === c.indexOf(t.id)
                      ? (c.push(t.id),
                        [
                          ...e,
                          {
                            label: t[s] || `Untitled - ID: ${t.id}`,
                            relationTo: a,
                            value: t.id,
                          },
                        ])
                      : e,
                  []
                );
              if (
                (l.forEach((e) => {
                  c.includes(e) ||
                    p.push({
                      label: "id" === s ? e : `Untitled - ID: ${e}`,
                      value: e,
                    });
                }),
                u)
              ) {
                const e = [...u.options, ...p];
                u.options = o ? E(e) : e;
              } else
                d.push({
                  label: n.labels.plural,
                  options: o ? E(p) : p,
                  value: void 0,
                });
              return d;
            }
            default:
              return e;
          }
        },
        w = ({ hasMany: e, relationTo: t, value: r }) => {
          const n = Array.isArray(t);
          let a;
          a = Array.isArray(t)
            ? t.reduce((e, t) => ({ ...e, [t]: [] }), {})
            : { [t]: [] };
          const i = (e, t) => {
            ("string" != typeof t && "number" != typeof t) ||
              "string" != typeof e ||
              a[e].push(t);
          };
          if (e && Array.isArray(r))
            r.forEach((e) => {
              n ? i(e.relationTo, e.value) : i(t, e);
            });
          else if (n) {
            const e = r;
            i(null == e ? void 0 : e.relationTo, null == e ? void 0 : e.value);
          } else i(t, r);
          return a;
        };
      var x = r(45074),
        I = r(10175),
        C = r(23438);
      r(84414);
      const D = "relationship",
        N = u()((e) => {
          const {
              relationTo: t,
              validate: r = b.relationship,
              path: a,
              name: o,
              required: d,
              label: u,
              hasMany: y,
              filterOptions: E,
              admin: {
                readOnly: N,
                style: S,
                className: B,
                width: R,
                description: O,
                condition: P,
                isSortable: _,
              } = {},
            } = e,
            {
              serverURL: T,
              routes: { api: L },
              collections: M,
            } = (0, s.Z)(),
            { id: k } = (0, x.x5)(),
            { user: Z, permissions: G } = (0, c.a)(),
            { getData: F, getSiblingData: $ } = (0, h.useWatchForm)(),
            U = (0, h.useFormProcessing)(),
            j = Array.isArray(t),
            [q, V] = (0, n.useReducer)(
              A,
              d || y ? [] : [{ value: null, label: "None" }]
            ),
            [W, H] = (0, n.useState)(-1),
            [Q, z] = (0, n.useState)(1),
            [K, J] = (0, n.useState)(""),
            [Y, X] = (0, n.useState)(),
            [ee, te] = (0, n.useState)(!1),
            [re, ne] = (0, n.useState)(""),
            [ae, ie] = (0, n.useState)(!1),
            oe = (0, n.useRef)(!0),
            le = (0, n.useCallback)(
              (e, t) => r(e, { ...t, required: d }),
              [r, d]
            ),
            {
              value: se,
              showError: ce,
              errorMessage: de,
              setValue: ue,
              initialValue: pe,
            } = (0, f.Z)({ path: a || o, validate: le, condition: P }),
            fe = (0, n.useCallback)(
              async ({
                lastFullyLoadedRelation: e,
                lastLoadedPage: r,
                search: n,
                value: a,
                sort: i,
              }) => {
                if (!G) return;
                let o = void 0 !== r ? r : 1;
                const s = void 0 !== e ? e : -1,
                  c = Array.isArray(t) ? t : [t],
                  d = -1 === s ? c : c.slice(s + 1);
                let u = 0;
                const p = w({ hasMany: y, relationTo: t, value: a });
                K ||
                  d.reduce(async (e, t) => {
                    var r;
                    if ((await e, u < 10)) {
                      const e = M.find((e) => e.slug === t),
                        a =
                          (null === (r = null == e ? void 0 : e.admin) ||
                          void 0 === r
                            ? void 0
                            : r.useAsTitle) || "id",
                        s = {
                          where: { and: [{ id: { not_in: p[t] } }] },
                          limit: 10,
                          page: o,
                          sort: a,
                          depth: 0,
                        };
                      n && s.where.and.push({ [a]: { like: n } }),
                        (null == Y ? void 0 : Y[t]) && s.where.and.push(Y[t]);
                      const d = await fetch(
                        `${T}${L}/${t}?${l().stringify(s)}`
                      );
                      if (d.ok) {
                        const r = await d.json();
                        r.docs.length > 0 &&
                          ((u += r.docs.length),
                          V({
                            type: "ADD",
                            data: r,
                            relation: t,
                            hasMultipleRelations: j,
                            collection: e,
                            sort: i,
                          }),
                          z(r.page),
                          r.nextPage ||
                            (H(c.indexOf(t)),
                            c.indexOf(t) + 1 < c.length && (o = 1)));
                      } else
                        403 === d.status
                          ? (H(c.indexOf(t)),
                            (o = 1),
                            V({
                              type: "ADD",
                              data: { docs: [] },
                              relation: t,
                              hasMultipleRelations: j,
                              collection: e,
                              sort: i,
                              ids: p[t],
                            }))
                          : J("An error has occurred.");
                    }
                  }, Promise.resolve());
              },
              [G, t, y, K, M, Y, T, L, j]
            ),
            me = (0, n.useCallback)(() => {
              if (se) {
                if (y)
                  return Array.isArray(se)
                    ? se.map((e) => {
                        if (j) {
                          let t;
                          return (
                            q.forEach((r) => {
                              r.options &&
                                r.options.some(
                                  (r) =>
                                    (null == r ? void 0 : r.value) ===
                                      e.value && ((t = r), !0)
                                );
                            }),
                            t
                          );
                        }
                        return q.find((t) => t.value === e);
                      })
                    : void 0;
                if (j) {
                  let e;
                  const t = se;
                  return (
                    q.forEach((r) => {
                      (null == r ? void 0 : r.options) &&
                        r.options.some(
                          (r) =>
                            (null == r ? void 0 : r.value) === t.value &&
                            ((e = r), !0)
                        );
                    }),
                    e
                  );
                }
                return q.find((e) => e.value === se);
              }
            }, [y, j, se, q]),
            ge = ((e, t) => {
              const r = (0, n.useRef)();
              return (0, n.useCallback)(
                (...n) => {
                  clearTimeout(r.current),
                    (r.current = setTimeout(() => {
                      clearTimeout(r.current), e(...n);
                    }, t));
                },
                [e, t]
              );
            })(
              (e, t) => {
                fe({ search: e, value: t, sort: !0 }), ne(e);
              },
              [fe]
            );
          (0, n.useEffect)(() => {
            if (pe && !ee) {
              const e = w({ hasMany: y, relationTo: t, value: pe });
              Object.entries(e).reduce(async (e, [t, r]) => {
                if ((await e, r.length > 0)) {
                  const e = {
                    where: { id: { in: r } },
                    depth: 0,
                    limit: r.length,
                  };
                  if (!K) {
                    const n = await fetch(`${T}${L}/${t}?${l().stringify(e)}`),
                      a = M.find((e) => e.slug === t);
                    if (n.ok) {
                      const e = await n.json();
                      V({
                        type: "ADD",
                        data: e,
                        relation: t,
                        hasMultipleRelations: j,
                        collection: a,
                        sort: !0,
                        ids: r,
                      });
                    } else
                      403 === n.status &&
                        V({
                          type: "ADD",
                          data: { docs: [] },
                          relation: t,
                          hasMultipleRelations: j,
                          collection: a,
                          sort: !0,
                          ids: r,
                        });
                  }
                }
              }, Promise.resolve()),
                te(!0);
            }
          }, [y, j, t, pe, ee, K, M, L, T]),
            (0, n.useEffect)(() => {
              if (!E) return;
              const e = (0, I.w)(E, {
                id: k,
                data: F(),
                relationTo: t,
                siblingData: $(a),
                user: Z,
              });
              i()(e, Y) || X(e);
            }, [t, E, Y, k, F, $, a, Z]),
            (0, n.useEffect)(() => {
              (!Y && E) || (te(!1), fe({ value: pe }));
            }, [pe, fe, Y, E]),
            (0, n.useEffect)(() => {
              const e = (Array.isArray(t) ? t : [t]).reduce((e, t) => {
                var r;
                const n = M.find((e) => e.slug === t);
                return (
                  "id" ===
                    ((null === (r = null == n ? void 0 : n.admin) ||
                    void 0 === r
                      ? void 0
                      : r.useAsTitle) || "id") && e
                );
              }, !0);
              ie(!e);
            }, [t, M]),
            (0, n.useEffect)(() => {
              oe.current ? (oe.current = !1) : (V({ type: "CLEAR" }), te(!1));
            }, [t]);
          const ve = [
              "field-type",
              D,
              B,
              ce && "error",
              K && "error-loading",
              N && `${D}--read-only`,
            ]
              .filter(Boolean)
              .join(" "),
            be = me() || se;
          return (
            "null" === (null == be ? void 0 : be.value) && (be.value = null),
            n.createElement(
              "div",
              {
                id: `field-${(a || o).replace(/\./gi, "__")}`,
                className: ve,
                style: { ...S, width: R },
              },
              n.createElement(g.Z, { showError: ce, message: de }),
              n.createElement(m.Z, { htmlFor: a, label: u, required: d }),
              !K &&
                n.createElement(p.Z, {
                  isDisabled: N,
                  onInputChange: (e) => {
                    return (r = se), void (re !== (t = e) && ge(t, r));
                    var t, r;
                  },
                  onChange: N
                    ? void 0
                    : (e) => {
                        ue(
                          y
                            ? e
                              ? e.map((e) =>
                                  j
                                    ? {
                                        relationTo: e.relationTo,
                                        value: e.value,
                                      }
                                    : e.value
                                )
                              : null
                            : j
                            ? { relationTo: e.relationTo, value: e.value }
                            : e.value
                        );
                      },
                  onMenuScrollToBottom: () => {
                    fe({
                      lastFullyLoadedRelation: W,
                      lastLoadedPage: Q + 1,
                      search: re,
                      value: pe,
                      sort: !1,
                    });
                  },
                  value: be,
                  showError: ce,
                  disabled: U,
                  options: q,
                  isMulti: y,
                  isSortable: _,
                  filterOption: ae
                    ? (e, t) => (0, C.Z)(t || "").test(e.label)
                    : void 0,
                }),
              K &&
                n.createElement("div", { className: `${D}__error-loading` }, K),
              n.createElement(v.Z, { value: se, description: O })
            )
          );
        });
    },
    67670: (e, t, r) => {
      r.d(t, { Z: () => m });
      var n = r(67294),
        a = r(90546),
        i = r.n(a),
        o = r(48170),
        l = r(35193),
        s = r(953),
        c = r(90666),
        d = r(77070),
        u = r(97591);
      r(33665);
      const p = (e) => {
          const {
              showError: t,
              errorMessage: r,
              readOnly: a,
              path: i,
              label: o,
              required: l,
              value: p,
              onChange: f,
              description: m,
              style: g,
              className: v,
              width: b,
              options: h,
              hasMany: y,
              isSortable: E,
              isClearable: A,
            } = e,
            w = ["field-type", "select", v, t && "error", a && "read-only"]
              .filter(Boolean)
              .join(" ");
          let x;
          return (
            (x =
              y && Array.isArray(p)
                ? p.map((e) => h.find((t) => t.value === e))
                : h.find((e) => e.value === p)),
            n.createElement(
              "div",
              {
                id: `field-${i.replace(/\./gi, "__")}`,
                className: w,
                style: { ...g, width: b },
              },
              n.createElement(c.Z, { showError: t, message: r }),
              n.createElement(s.Z, {
                htmlFor: `field-${i.replace(/\./gi, "__")}`,
                label: o,
                required: l,
              }),
              n.createElement(u.Z, {
                onChange: f,
                value: x,
                showError: t,
                isDisabled: a,
                options: h,
                isMulti: y,
                isSortable: E,
                isClearable: A,
              }),
              n.createElement(d.Z, { value: p, description: m })
            )
          );
        },
        f = (e) =>
          e.map((e) =>
            "object" != typeof e || (!e.value && "" !== e.value)
              ? { label: e, value: e }
              : e
          ),
        m = i()((e) => {
          const {
              path: t,
              name: r,
              validate: a = l.select,
              label: i,
              options: s,
              hasMany: c,
              required: d,
              admin: {
                readOnly: u,
                style: m,
                className: g,
                width: v,
                description: b,
                isClearable: h,
                condition: y,
                isSortable: E,
              } = {},
            } = e,
            A = t || r,
            [w, x] = (0, n.useState)(f(s));
          (0, n.useEffect)(() => {
            x(f(s));
          }, [s]);
          const I = (0, n.useCallback)(
              (e, t) => a(e, { ...t, options: w, hasMany: c, required: d }),
              [a, d, c, w]
            ),
            {
              value: C,
              showError: D,
              setValue: N,
              errorMessage: S,
            } = (0, o.Z)({ path: A, validate: I, condition: y }),
            B = (0, n.useCallback)(
              (e) => {
                if (!u) {
                  let t;
                  (t = e
                    ? c
                      ? Array.isArray(e)
                        ? e.map((e) => e.value)
                        : []
                      : e.value
                    : null),
                    N(t);
                }
              },
              [u, c, N]
            );
          return n.createElement(p, {
            path: A,
            onChange: B,
            value: C,
            name: r,
            options: w,
            label: i,
            showError: D,
            errorMessage: S,
            required: d,
            description: b,
            style: m,
            className: g,
            width: v,
            hasMany: c,
            isSortable: E,
            isClearable: h,
          });
        });
    },
    10175: (e, t, r) => {
      r.d(t, { w: () => n });
      const n = (e, t) => {
        const { relationTo: r } = t,
          n = Array.isArray(r) ? r : [r],
          a = {};
        return (
          void 0 !== e &&
            n.forEach((r) => {
              a[r] = "function" == typeof e ? e(t) : e;
            }),
          a
        );
      };
    },
    89877: (e, t, r) => {
      r.d(t, { Z: () => Cl });
      var n = r(67294),
        a = r(40829);
      const i = (0, n.lazy)(() =>
          Promise.all([r.e(532), r.e(16)]).then(r.bind(r, 29016))
        ),
        o = (e) =>
          n.createElement(
            n.Suspense,
            { fallback: n.createElement(a.Z, null) },
            n.createElement(i, { ...e })
          );
      var l = r(28571),
        s = r(74020),
        c = r(48170),
        d = r(90546),
        u = r.n(d),
        p = r(35193),
        f = r(953),
        m = r(90666),
        g = r(77070);
      r(9226);
      const v = (e) => {
          const {
              showError: t,
              errorMessage: r,
              placeholder: a,
              readOnly: i,
              path: o,
              label: l,
              required: s,
              value: c,
              onChange: d,
              onKeyDown: u,
              description: p,
              style: v,
              className: b,
              width: h,
              inputRef: y,
            } = e,
            E = ["field-type", "text", b, t && "error", i && "read-only"]
              .filter(Boolean)
              .join(" ");
          return n.createElement(
            "div",
            { className: E, style: { ...v, width: h } },
            n.createElement(m.Z, { showError: t, message: r }),
            n.createElement(f.Z, {
              htmlFor: `field-${o.replace(/\./gi, "__")}`,
              label: l,
              required: s,
            }),
            n.createElement("input", {
              ref: y,
              id: `field-${o.replace(/\./gi, "__")}`,
              value: c || "",
              onChange: d,
              onKeyDown: u,
              disabled: i,
              placeholder: a,
              type: "text",
              name: o,
            }),
            n.createElement(g.Z, { value: c, description: p })
          );
        },
        b = u()((e) => {
          const {
              path: t,
              name: r,
              required: a,
              validate: i = p.text,
              label: o,
              minLength: l,
              maxLength: s,
              admin: {
                placeholder: d,
                readOnly: u,
                style: f,
                className: m,
                width: g,
                description: b,
                condition: h,
              } = {},
              inputRef: y,
            } = e,
            E = t || r,
            A = (0, n.useCallback)(
              (e, t) => i(e, { ...t, minLength: l, maxLength: s, required: a }),
              [i, l, s, a]
            ),
            w = (0, c.Z)({
              path: E,
              validate: A,
              enableDebouncedValue: !0,
              condition: h,
            }),
            { value: x, showError: I, setValue: C, errorMessage: D } = w;
          return n.createElement(v, {
            path: E,
            name: r,
            onChange: (e) => {
              C(e.target.value);
            },
            showError: I,
            errorMessage: D,
            required: a,
            label: o,
            value: x,
            placeholder: d,
            readOnly: u,
            style: f,
            className: m,
            width: g,
            description: b,
            inputRef: y,
          });
        });
      var h = r(82626);
      r(21695);
      const y = "date-time-field",
        E = u()((e) => {
          const {
              path: t,
              name: r,
              required: a,
              validate: i = p.date,
              label: o,
              admin: {
                placeholder: l,
                readOnly: s,
                style: d,
                className: u,
                width: v,
                date: b,
                description: E,
                condition: A,
              } = {},
            } = e,
            w = t || r,
            x = (0, n.useCallback)(
              (e, t) => i(e, { ...t, required: a }),
              [i, a]
            ),
            {
              value: I,
              showError: C,
              errorMessage: D,
              setValue: N,
            } = (0, c.Z)({ path: w, validate: x, condition: A }),
            S = ["field-type", y, u, C && `${y}--has-error`, s && "read-only"]
              .filter(Boolean)
              .join(" ");
          return n.createElement(
            "div",
            { className: S, style: { ...d, width: v } },
            n.createElement(
              "div",
              { className: `${y}__error-wrap` },
              n.createElement(m.Z, { showError: C, message: D })
            ),
            n.createElement(f.Z, { htmlFor: w, label: o, required: a }),
            n.createElement(
              "div",
              {
                id: `field-${w.replace(/\./gi, "__")}`,
                className: `${y}__input-wrapper`,
              },
              n.createElement(h.Z, {
                ...b,
                placeholder: l,
                readOnly: s,
                onChange: s ? void 0 : N,
                value: I,
              })
            ),
            n.createElement(g.Z, { value: I, description: E })
          );
        });
      var A = r(76067),
        w = r(74007),
        x = r(41884);
      r(25536);
      const I = (e) => {
          const {
              path: t,
              required: r,
              readOnly: a,
              style: i,
              className: o,
              width: l,
              placeholder: s,
              description: c,
              label: d,
              showError: u,
              value: p,
              errorMessage: v,
              onChange: b,
              rows: h,
            } = e,
            y = ["field-type", "textarea", o, u && "error", a && "read-only"]
              .filter(Boolean)
              .join(" ");
          return n.createElement(
            "div",
            { className: y, style: { ...i, width: l } },
            n.createElement(m.Z, { showError: u, message: v }),
            n.createElement(f.Z, {
              htmlFor: `field-${t.replace(/\./gi, "__")}`,
              label: d,
              required: r,
            }),
            n.createElement("textarea", {
              id: `field-${t.replace(/\./gi, "__")}`,
              value: p || "",
              onChange: b,
              disabled: a,
              placeholder: s,
              name: t,
              rows: h,
            }),
            n.createElement(g.Z, { value: p, description: c })
          );
        },
        C = u()((e) => {
          const {
              path: t,
              name: r,
              required: a,
              validate: i = p.textarea,
              maxLength: o,
              minLength: l,
              admin: {
                readOnly: s,
                style: d,
                className: u,
                width: f,
                placeholder: m,
                rows: g,
                description: v,
                condition: b,
              } = {},
              label: h,
            } = e,
            y = t || r,
            E = (0, n.useCallback)(
              (e, t) => i(e, { ...t, required: a, maxLength: o, minLength: l }),
              [i, a, o, l]
            ),
            {
              value: A,
              showError: w,
              setValue: x,
              errorMessage: C,
            } = (0, c.Z)({
              path: y,
              validate: E,
              enableDebouncedValue: !0,
              condition: b,
            });
          return n.createElement(I, {
            path: y,
            name: r,
            onChange: (e) => {
              x(e.target.value);
            },
            showError: w,
            errorMessage: C,
            required: a,
            label: h,
            value: A,
            placeholder: m,
            readOnly: s,
            style: d,
            className: u,
            width: f,
            description: v,
            rows: g,
          });
        });
      var D = r(67670);
      r(75712);
      const N = u()((e) => {
        const {
            name: t,
            path: r,
            required: a,
            validate: i = p.number,
            label: o,
            max: l,
            min: s,
            admin: {
              readOnly: d,
              style: u,
              className: v,
              width: b,
              step: h,
              placeholder: y,
              description: E,
              condition: A,
            } = {},
          } = e,
          w = r || t,
          x = (0, n.useCallback)(
            (e, t) => i(e, { ...t, min: s, max: l, required: a }),
            [i, s, l, a]
          ),
          {
            value: I,
            showError: C,
            setValue: D,
            errorMessage: N,
          } = (0, c.Z)({
            path: w,
            validate: x,
            enableDebouncedValue: !0,
            condition: A,
          }),
          S = (0, n.useCallback)(
            (e) => {
              const t = parseFloat(e.target.value);
              Number.isNaN(t) ? D("") : D(t);
            },
            [D]
          ),
          B = ["field-type", "number", v, C && "error", d && "read-only"]
            .filter(Boolean)
            .join(" ");
        return n.createElement(
          "div",
          { className: B, style: { ...u, width: b } },
          n.createElement(m.Z, { showError: C, message: N }),
          n.createElement(f.Z, {
            htmlFor: `field-${w.replace(/\./gi, "__")}`,
            label: o,
            required: a,
          }),
          n.createElement("input", {
            id: `field-${w.replace(/\./gi, "__")}`,
            value: "number" == typeof I ? I : "",
            onChange: S,
            disabled: d,
            placeholder: y,
            type: "number",
            name: w,
            step: h,
            onWheel: (e) => {
              e.target.blur();
            },
          }),
          n.createElement(g.Z, { value: I, description: E })
        );
      });
      var S = r(26314);
      const B = (0, n.lazy)(() =>
          Promise.all([r.e(532), r.e(274)]).then(r.bind(r, 33274))
        ),
        R = (e) =>
          n.createElement(
            n.Suspense,
            { fallback: n.createElement(a.Z, null) },
            n.createElement(B, { ...e })
          );
      var O = r(92962);
      const P = u()((e) => {
        const {
            name: t,
            path: r,
            required: a,
            validate: i = p.radio,
            label: o,
            admin: {
              readOnly: l,
              layout: s = "horizontal",
              style: d,
              className: u,
              width: f,
              description: m,
              condition: g,
            } = {},
            options: v,
          } = e,
          b = r || t,
          h = (0, n.useCallback)(
            (e, t) => i(e, { ...t, options: v, required: a }),
            [i, v, a]
          ),
          {
            value: y,
            showError: E,
            errorMessage: A,
            setValue: w,
          } = (0, c.Z)({ path: b, validate: h, condition: g });
        return n.createElement(O.Z, {
          path: b,
          name: t,
          onChange: l ? void 0 : w,
          value: y,
          showError: E,
          errorMessage: A,
          required: a,
          label: o,
          layout: s,
          style: d,
          className: u,
          width: f,
          description: m,
          options: v,
        });
      });
      r(52879);
      const _ = "point",
        T = u()((e) => {
          const {
              name: t,
              path: r,
              required: a,
              validate: i = p.point,
              label: o,
              admin: {
                readOnly: l,
                style: s,
                className: d,
                width: u,
                step: v,
                placeholder: b,
                description: h,
                condition: y,
              } = {},
            } = e,
            E = r || t,
            A = (0, n.useCallback)(
              (e, t) => i(e, { ...t, required: a }),
              [i, a]
            ),
            {
              value: w = [null, null],
              showError: x,
              setValue: I,
              errorMessage: C,
            } = (0, c.Z)({
              path: E,
              validate: A,
              enableDebouncedValue: !0,
              condition: y,
            }),
            D = (0, n.useCallback)(
              (e, t) => {
                let r = parseFloat(e.target.value);
                Number.isNaN(r) && (r = e.target.value);
                const n = [...w];
                (n[t] = r), I(n);
              },
              [I, w]
            ),
            N = ["field-type", _, d, x && "error", l && "read-only"]
              .filter(Boolean)
              .join(" ");
          return n.createElement(
            "div",
            { className: N, style: { ...s, width: u } },
            n.createElement(m.Z, { showError: x, message: C }),
            n.createElement(
              "ul",
              { className: `${_}__wrap` },
              n.createElement(
                "li",
                null,
                n.createElement(f.Z, {
                  htmlFor: `field-longitude-${E.replace(/\./gi, "__")}`,
                  label: `${o} - Longitude`,
                  required: a,
                }),
                n.createElement("input", {
                  id: `field-longitude-${E.replace(/\./gi, "__")}`,
                  value: w && "number" == typeof w[0] ? w[0] : "",
                  onChange: (e) => D(e, 0),
                  disabled: l,
                  placeholder: b,
                  type: "number",
                  name: `${E}.longitude`,
                  step: v,
                })
              ),
              n.createElement(
                "li",
                null,
                n.createElement(f.Z, {
                  htmlFor: `field-latitude-${E.replace(/\./gi, "__")}`,
                  label: `${o} - Latitude`,
                  required: a,
                }),
                n.createElement("input", {
                  id: `field-latitude-${E.replace(/\./gi, "__")}`,
                  value: w && "number" == typeof w[1] ? w[1] : "",
                  onChange: (e) => D(e, 1),
                  disabled: l,
                  placeholder: b,
                  type: "number",
                  name: `${E}.latitude`,
                  step: v,
                })
              )
            ),
            n.createElement(g.Z, { value: w, description: h })
          );
        });
      var L = r(94578),
        M = r(87462),
        k = r(4942);
      function Z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(r), !0).forEach(function (t) {
                (0, k.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Z(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function F(e) {
        return (
          "Minified Redux error #" +
          e +
          "; visit https://redux.js.org/Errors?code=" +
          e +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var $ =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        U = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        j = {
          INIT: "@@redux/INIT" + U(),
          REPLACE: "@@redux/REPLACE" + U(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + U();
          },
        };
      function q(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function V(e, t, r) {
        var n;
        if (
          ("function" == typeof t && "function" == typeof r) ||
          ("function" == typeof r && "function" == typeof arguments[3])
        )
          throw new Error(F(0));
        if (
          ("function" == typeof t && void 0 === r && ((r = t), (t = void 0)),
          void 0 !== r)
        ) {
          if ("function" != typeof r) throw new Error(F(1));
          return r(V)(e, t);
        }
        if ("function" != typeof e) throw new Error(F(2));
        var a = e,
          i = t,
          o = [],
          l = o,
          s = !1;
        function c() {
          l === o && (l = o.slice());
        }
        function d() {
          if (s) throw new Error(F(3));
          return i;
        }
        function u(e) {
          if ("function" != typeof e) throw new Error(F(4));
          if (s) throw new Error(F(5));
          var t = !0;
          return (
            c(),
            l.push(e),
            function () {
              if (t) {
                if (s) throw new Error(F(6));
                (t = !1), c();
                var r = l.indexOf(e);
                l.splice(r, 1), (o = null);
              }
            }
          );
        }
        function p(e) {
          if (!q(e)) throw new Error(F(7));
          if (void 0 === e.type) throw new Error(F(8));
          if (s) throw new Error(F(9));
          try {
            (s = !0), (i = a(i, e));
          } finally {
            s = !1;
          }
          for (var t = (o = l), r = 0; r < t.length; r++) {
            (0, t[r])();
          }
          return e;
        }
        function f(e) {
          if ("function" != typeof e) throw new Error(F(10));
          (a = e), p({ type: j.REPLACE });
        }
        function m() {
          var e,
            t = u;
          return (
            ((e = {
              subscribe: function (e) {
                if ("object" != typeof e || null === e) throw new Error(F(11));
                function r() {
                  e.next && e.next(d());
                }
                return r(), { unsubscribe: t(r) };
              },
            })[$] = function () {
              return this;
            }),
            e
          );
        }
        return (
          p({ type: j.INIT }),
          ((n = { dispatch: p, subscribe: u, getState: d, replaceReducer: f })[
            $
          ] = m),
          n
        );
      }
      function W(e, t) {
        return function () {
          return t(e.apply(this, arguments));
        };
      }
      function H(e, t) {
        if ("function" == typeof e) return W(e, t);
        if ("object" != typeof e || null === e) throw new Error(F(16));
        var r = {};
        for (var n in e) {
          var a = e[n];
          "function" == typeof a && (r[n] = W(a, t));
        }
        return r;
      }
      function Q() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return 0 === t.length
          ? function (e) {
              return e;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
              return function () {
                return e(t.apply(void 0, arguments));
              };
            });
      }
      var z = n.createContext(null);
      var K = function (e) {
          e();
        },
        J = function () {
          return K;
        };
      var Y = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function X(e, t) {
        var r,
          n = Y;
        function a() {
          o.onStateChange && o.onStateChange();
        }
        function i() {
          r ||
            ((r = t ? t.addNestedSub(a) : e.subscribe(a)),
            (n = (function () {
              var e = J(),
                t = null,
                r = null;
              return {
                clear: function () {
                  (t = null), (r = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = t; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], r = t; r; ) e.push(r), (r = r.next);
                  return e;
                },
                subscribe: function (e) {
                  var n = !0,
                    a = (r = { callback: e, next: null, prev: r });
                  return (
                    a.prev ? (a.prev.next = a) : (t = a),
                    function () {
                      n &&
                        null !== t &&
                        ((n = !1),
                        a.next ? (a.next.prev = a.prev) : (r = a.prev),
                        a.prev ? (a.prev.next = a.next) : (t = a.next));
                    }
                  );
                },
              };
            })()));
        }
        var o = {
          addNestedSub: function (e) {
            return i(), n.subscribe(e);
          },
          notifyNestedSubs: function () {
            n.notify();
          },
          handleChangeWrapper: a,
          isSubscribed: function () {
            return Boolean(r);
          },
          trySubscribe: i,
          tryUnsubscribe: function () {
            r && (r(), (r = void 0), n.clear(), (n = Y));
          },
          getListeners: function () {
            return n;
          },
        };
        return o;
      }
      var ee =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? n.useLayoutEffect
          : n.useEffect;
      const te = function (e) {
        var t = e.store,
          r = e.context,
          a = e.children,
          i = (0, n.useMemo)(
            function () {
              var e = X(t);
              return { store: t, subscription: e };
            },
            [t]
          ),
          o = (0, n.useMemo)(
            function () {
              return t.getState();
            },
            [t]
          );
        ee(
          function () {
            var e = i.subscription;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              o !== t.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null);
              }
            );
          },
          [i, o]
        );
        var l = r || z;
        return n.createElement(l.Provider, { value: i }, a);
      };
      var re = r(63366),
        ne = r(8679),
        ae = r.n(ne),
        ie = r(72973),
        oe = [
          "getDisplayName",
          "methodName",
          "renderCountProp",
          "shouldHandleStateChanges",
          "storeKey",
          "withRef",
          "forwardRef",
          "context",
        ],
        le = ["reactReduxForwardedRef"],
        se = [],
        ce = [null, null];
      function de(e, t) {
        var r = e[1];
        return [t.payload, r + 1];
      }
      function ue(e, t, r) {
        ee(function () {
          return e.apply(void 0, t);
        }, r);
      }
      function pe(e, t, r, n, a, i, o) {
        (e.current = n),
          (t.current = a),
          (r.current = !1),
          i.current && ((i.current = null), o());
      }
      function fe(e, t, r, n, a, i, o, l, s, c) {
        if (e) {
          var d = !1,
            u = null,
            p = function () {
              if (!d) {
                var e,
                  r,
                  p = t.getState();
                try {
                  e = n(p, a.current);
                } catch (e) {
                  (r = e), (u = e);
                }
                r || (u = null),
                  e === i.current
                    ? o.current || s()
                    : ((i.current = e),
                      (l.current = e),
                      (o.current = !0),
                      c({ type: "STORE_UPDATED", payload: { error: r } }));
              }
            };
          (r.onStateChange = p), r.trySubscribe(), p();
          return function () {
            if (((d = !0), r.tryUnsubscribe(), (r.onStateChange = null), u))
              throw u;
          };
        }
      }
      var me = function () {
        return [null, 0];
      };
      function ge(e, t) {
        void 0 === t && (t = {});
        var r = t,
          a = r.getDisplayName,
          i =
            void 0 === a
              ? function (e) {
                  return "ConnectAdvanced(" + e + ")";
                }
              : a,
          o = r.methodName,
          l = void 0 === o ? "connectAdvanced" : o,
          s = r.renderCountProp,
          c = void 0 === s ? void 0 : s,
          d = r.shouldHandleStateChanges,
          u = void 0 === d || d,
          p = r.storeKey,
          f = void 0 === p ? "store" : p,
          m = (r.withRef, r.forwardRef),
          g = void 0 !== m && m,
          v = r.context,
          b = void 0 === v ? z : v,
          h = (0, re.Z)(r, oe),
          y = b;
        return function (t) {
          var r = t.displayName || t.name || "Component",
            a = i(r),
            o = (0, M.Z)({}, h, {
              getDisplayName: i,
              methodName: l,
              renderCountProp: c,
              shouldHandleStateChanges: u,
              storeKey: f,
              displayName: a,
              wrappedComponentName: r,
              WrappedComponent: t,
            }),
            s = h.pure;
          var d = s
            ? n.useMemo
            : function (e) {
                return e();
              };
          function p(r) {
            var a = (0, n.useMemo)(
                function () {
                  var e = r.reactReduxForwardedRef,
                    t = (0, re.Z)(r, le);
                  return [r.context, e, t];
                },
                [r]
              ),
              i = a[0],
              l = a[1],
              s = a[2],
              c = (0, n.useMemo)(
                function () {
                  return i &&
                    i.Consumer &&
                    (0, ie.isContextConsumer)(n.createElement(i.Consumer, null))
                    ? i
                    : y;
                },
                [i, y]
              ),
              p = (0, n.useContext)(c),
              f =
                Boolean(r.store) &&
                Boolean(r.store.getState) &&
                Boolean(r.store.dispatch);
            Boolean(p) && Boolean(p.store);
            var m = f ? r.store : p.store,
              g = (0, n.useMemo)(
                function () {
                  return (function (t) {
                    return e(t.dispatch, o);
                  })(m);
                },
                [m]
              ),
              v = (0, n.useMemo)(
                function () {
                  if (!u) return ce;
                  var e = X(m, f ? null : p.subscription),
                    t = e.notifyNestedSubs.bind(e);
                  return [e, t];
                },
                [m, f, p]
              ),
              b = v[0],
              h = v[1],
              E = (0, n.useMemo)(
                function () {
                  return f ? p : (0, M.Z)({}, p, { subscription: b });
                },
                [f, p, b]
              ),
              A = (0, n.useReducer)(de, se, me),
              w = A[0][0],
              x = A[1];
            if (w && w.error) throw w.error;
            var I = (0, n.useRef)(),
              C = (0, n.useRef)(s),
              D = (0, n.useRef)(),
              N = (0, n.useRef)(!1),
              S = d(
                function () {
                  return D.current && s === C.current
                    ? D.current
                    : g(m.getState(), s);
                },
                [m, w, s]
              );
            ue(pe, [C, I, N, s, S, D, h]),
              ue(fe, [u, m, b, g, C, I, N, D, h, x], [m, b, g]);
            var B = (0, n.useMemo)(
              function () {
                return n.createElement(t, (0, M.Z)({}, S, { ref: l }));
              },
              [l, t, S]
            );
            return (0, n.useMemo)(
              function () {
                return u ? n.createElement(c.Provider, { value: E }, B) : B;
              },
              [c, B, E]
            );
          }
          var m = s ? n.memo(p) : p;
          if (
            ((m.WrappedComponent = t), (m.displayName = p.displayName = a), g)
          ) {
            var v = n.forwardRef(function (e, t) {
              return n.createElement(
                m,
                (0, M.Z)({}, e, { reactReduxForwardedRef: t })
              );
            });
            return (v.displayName = a), (v.WrappedComponent = t), ae()(v, t);
          }
          return ae()(m, t);
        };
      }
      function ve(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      function be(e, t) {
        if (ve(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (var a = 0; a < r.length; a++)
          if (
            !Object.prototype.hasOwnProperty.call(t, r[a]) ||
            !ve(e[r[a]], t[r[a]])
          )
            return !1;
        return !0;
      }
      function he(e) {
        return function (t, r) {
          var n = e(t, r);
          function a() {
            return n;
          }
          return (a.dependsOnOwnProps = !1), a;
        };
      }
      function ye(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
          ? Boolean(e.dependsOnOwnProps)
          : 1 !== e.length;
      }
      function Ee(e, t) {
        return function (t, r) {
          r.displayName;
          var n = function (e, t) {
            return n.dependsOnOwnProps ? n.mapToProps(e, t) : n.mapToProps(e);
          };
          return (
            (n.dependsOnOwnProps = !0),
            (n.mapToProps = function (t, r) {
              (n.mapToProps = e), (n.dependsOnOwnProps = ye(e));
              var a = n(t, r);
              return (
                "function" == typeof a &&
                  ((n.mapToProps = a),
                  (n.dependsOnOwnProps = ye(a)),
                  (a = n(t, r))),
                a
              );
            }),
            n
          );
        };
      }
      const Ae = [
        function (e) {
          return "function" == typeof e ? Ee(e) : void 0;
        },
        function (e) {
          return e
            ? void 0
            : he(function (e) {
                return { dispatch: e };
              });
        },
        function (e) {
          return e && "object" == typeof e
            ? he(function (t) {
                return (function (e, t) {
                  var r = {},
                    n = function (n) {
                      var a = e[n];
                      "function" == typeof a &&
                        (r[n] = function () {
                          return t(a.apply(void 0, arguments));
                        });
                    };
                  for (var a in e) n(a);
                  return r;
                })(e, t);
              })
            : void 0;
        },
      ];
      const we = [
        function (e) {
          return "function" == typeof e ? Ee(e) : void 0;
        },
        function (e) {
          return e
            ? void 0
            : he(function () {
                return {};
              });
        },
      ];
      function xe(e, t, r) {
        return (0, M.Z)({}, r, e, t);
      }
      const Ie = [
        function (e) {
          return "function" == typeof e
            ? (function (e) {
                return function (t, r) {
                  r.displayName;
                  var n,
                    a = r.pure,
                    i = r.areMergedPropsEqual,
                    o = !1;
                  return function (t, r, l) {
                    var s = e(t, r, l);
                    return (
                      o ? (a && i(s, n)) || (n = s) : ((o = !0), (n = s)), n
                    );
                  };
                };
              })(e)
            : void 0;
        },
        function (e) {
          return e
            ? void 0
            : function () {
                return xe;
              };
        },
      ];
      var Ce = [
        "initMapStateToProps",
        "initMapDispatchToProps",
        "initMergeProps",
      ];
      function De(e, t, r, n) {
        return function (a, i) {
          return r(e(a, i), t(n, i), i);
        };
      }
      function Ne(e, t, r, n, a) {
        var i,
          o,
          l,
          s,
          c,
          d = a.areStatesEqual,
          u = a.areOwnPropsEqual,
          p = a.areStatePropsEqual,
          f = !1;
        function m(a, f) {
          var m,
            g,
            v = !u(f, o),
            b = !d(a, i, f, o);
          return (
            (i = a),
            (o = f),
            v && b
              ? ((l = e(i, o)),
                t.dependsOnOwnProps && (s = t(n, o)),
                (c = r(l, s, o)))
              : v
              ? (e.dependsOnOwnProps && (l = e(i, o)),
                t.dependsOnOwnProps && (s = t(n, o)),
                (c = r(l, s, o)))
              : b
              ? ((m = e(i, o)),
                (g = !p(m, l)),
                (l = m),
                g && (c = r(l, s, o)),
                c)
              : c
          );
        }
        return function (a, d) {
          return f
            ? m(a, d)
            : ((l = e((i = a), (o = d))),
              (s = t(n, o)),
              (c = r(l, s, o)),
              (f = !0),
              c);
        };
      }
      function Se(e, t) {
        var r = t.initMapStateToProps,
          n = t.initMapDispatchToProps,
          a = t.initMergeProps,
          i = (0, re.Z)(t, Ce),
          o = r(e, i),
          l = n(e, i),
          s = a(e, i);
        return (i.pure ? Ne : De)(o, l, s, e, i);
      }
      var Be = [
        "pure",
        "areStatesEqual",
        "areOwnPropsEqual",
        "areStatePropsEqual",
        "areMergedPropsEqual",
      ];
      function Re(e, t, r) {
        for (var n = t.length - 1; n >= 0; n--) {
          var a = t[n](e);
          if (a) return a;
        }
        return function (t, n) {
          throw new Error(
            "Invalid value of type " +
              typeof e +
              " for " +
              r +
              " argument when connecting component " +
              n.wrappedComponentName +
              "."
          );
        };
      }
      function Oe(e, t) {
        return e === t;
      }
      function Pe(e) {
        var t = void 0 === e ? {} : e,
          r = t.connectHOC,
          n = void 0 === r ? ge : r,
          a = t.mapStateToPropsFactories,
          i = void 0 === a ? we : a,
          o = t.mapDispatchToPropsFactories,
          l = void 0 === o ? Ae : o,
          s = t.mergePropsFactories,
          c = void 0 === s ? Ie : s,
          d = t.selectorFactory,
          u = void 0 === d ? Se : d;
        return function (e, t, r, a) {
          void 0 === a && (a = {});
          var o = a,
            s = o.pure,
            d = void 0 === s || s,
            p = o.areStatesEqual,
            f = void 0 === p ? Oe : p,
            m = o.areOwnPropsEqual,
            g = void 0 === m ? be : m,
            v = o.areStatePropsEqual,
            b = void 0 === v ? be : v,
            h = o.areMergedPropsEqual,
            y = void 0 === h ? be : h,
            E = (0, re.Z)(o, Be),
            A = Re(e, i, "mapStateToProps"),
            w = Re(t, l, "mapDispatchToProps"),
            x = Re(r, c, "mergeProps");
          return n(
            u,
            (0, M.Z)(
              {
                methodName: "connect",
                getDisplayName: function (e) {
                  return "Connect(" + e + ")";
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: A,
                initMapDispatchToProps: w,
                initMergeProps: x,
                pure: d,
                areStatesEqual: f,
                areOwnPropsEqual: g,
                areStatePropsEqual: b,
                areMergedPropsEqual: y,
              },
              E
            )
          );
        };
      }
      const _e = Pe();
      var Te,
        Le = r(73935);
      function Me(e, t) {
        var r = (0, n.useState)(function () {
            return { inputs: t, result: e() };
          })[0],
          a = (0, n.useRef)(!0),
          i = (0, n.useRef)(r),
          o =
            a.current ||
            Boolean(
              t &&
                i.current.inputs &&
                (function (e, t) {
                  if (e.length !== t.length) return !1;
                  for (var r = 0; r < e.length; r++)
                    if (e[r] !== t[r]) return !1;
                  return !0;
                })(t, i.current.inputs)
            )
              ? i.current
              : { inputs: t, result: e() };
        return (
          (0, n.useEffect)(
            function () {
              (a.current = !1), (i.current = o);
            },
            [o]
          ),
          o.result
        );
      }
      (Te = Le.unstable_batchedUpdates), (K = Te);
      var ke = Me,
        Ze = function (e, t) {
          return Me(function () {
            return e;
          }, t);
        },
        Ge = r(38776),
        Fe = function (e) {
          var t = e.top,
            r = e.right,
            n = e.bottom,
            a = e.left;
          return {
            top: t,
            right: r,
            bottom: n,
            left: a,
            width: r - a,
            height: n - t,
            x: a,
            y: t,
            center: { x: (r + a) / 2, y: (n + t) / 2 },
          };
        },
        $e = function (e, t) {
          return {
            top: e.top - t.top,
            left: e.left - t.left,
            bottom: e.bottom + t.bottom,
            right: e.right + t.right,
          };
        },
        Ue = function (e, t) {
          return {
            top: e.top + t.top,
            left: e.left + t.left,
            bottom: e.bottom - t.bottom,
            right: e.right - t.right,
          };
        },
        je = { top: 0, right: 0, bottom: 0, left: 0 },
        qe = function (e) {
          var t = e.borderBox,
            r = e.margin,
            n = void 0 === r ? je : r,
            a = e.border,
            i = void 0 === a ? je : a,
            o = e.padding,
            l = void 0 === o ? je : o,
            s = Fe($e(t, n)),
            c = Fe(Ue(t, i)),
            d = Fe(Ue(c, l));
          return {
            marginBox: s,
            borderBox: Fe(t),
            paddingBox: c,
            contentBox: d,
            margin: n,
            border: i,
            padding: l,
          };
        },
        Ve = function (e) {
          var t = e.slice(0, -2);
          if ("px" !== e.slice(-2)) return 0;
          var r = Number(t);
          return isNaN(r) && (0, Ge.Z)(!1), r;
        },
        We = function (e, t) {
          var r,
            n,
            a = e.borderBox,
            i = e.border,
            o = e.margin,
            l = e.padding,
            s =
              ((n = t),
              {
                top: (r = a).top + n.y,
                left: r.left + n.x,
                bottom: r.bottom + n.y,
                right: r.right + n.x,
              });
          return qe({ borderBox: s, border: i, margin: o, padding: l });
        },
        He = function (e, t) {
          return (
            void 0 === t &&
              (t = { x: window.pageXOffset, y: window.pageYOffset }),
            We(e, t)
          );
        },
        Qe = function (e, t) {
          var r = {
              top: Ve(t.marginTop),
              right: Ve(t.marginRight),
              bottom: Ve(t.marginBottom),
              left: Ve(t.marginLeft),
            },
            n = {
              top: Ve(t.paddingTop),
              right: Ve(t.paddingRight),
              bottom: Ve(t.paddingBottom),
              left: Ve(t.paddingLeft),
            },
            a = {
              top: Ve(t.borderTopWidth),
              right: Ve(t.borderRightWidth),
              bottom: Ve(t.borderBottomWidth),
              left: Ve(t.borderLeftWidth),
            };
          return qe({ borderBox: e, margin: r, padding: n, border: a });
        },
        ze = function (e) {
          var t = e.getBoundingClientRect(),
            r = window.getComputedStyle(e);
          return Qe(t, r);
        },
        Ke = r(30845);
      const Je = function (e) {
        var t = [],
          r = null,
          n = function () {
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
              a[i] = arguments[i];
            (t = a),
              r ||
                (r = requestAnimationFrame(function () {
                  (r = null), e.apply(void 0, t);
                }));
          };
        return (
          (n.cancel = function () {
            r && (cancelAnimationFrame(r), (r = null));
          }),
          n
        );
      };
      function Ye(e, t) {}
      Ye.bind(null, "warn"), Ye.bind(null, "error");
      function Xe() {}
      function et(e, t, r) {
        var n = t.map(function (t) {
          var n = (function (e, t) {
            return (0, M.Z)({}, e, {}, t);
          })(r, t.options);
          return (
            e.addEventListener(t.eventName, t.fn, n),
            function () {
              e.removeEventListener(t.eventName, t.fn, n);
            }
          );
        });
        return function () {
          n.forEach(function (e) {
            e();
          });
        };
      }
      var tt = "Invariant failed";
      function rt(e) {
        this.message = e;
      }
      function nt(e, t) {
        if (!e) throw new rt(tt);
      }
      rt.prototype.toString = function () {
        return this.message;
      };
      var at = (function (e) {
          function t() {
            for (
              var t, r = arguments.length, n = new Array(r), a = 0;
              a < r;
              a++
            )
              n[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(n)) || this).callbacks =
                null),
              (t.unbind = Xe),
              (t.onWindowError = function (e) {
                var r = t.getCallbacks();
                r.isDragging() && r.tryAbort(),
                  e.error instanceof rt && e.preventDefault();
              }),
              (t.getCallbacks = function () {
                if (!t.callbacks)
                  throw new Error(
                    "Unable to find AppCallbacks in <ErrorBoundary/>"
                  );
                return t.callbacks;
              }),
              (t.setCallbacks = function (e) {
                t.callbacks = e;
              }),
              t
            );
          }
          (0, L.Z)(t, e);
          var r = t.prototype;
          return (
            (r.componentDidMount = function () {
              this.unbind = et(window, [
                { eventName: "error", fn: this.onWindowError },
              ]);
            }),
            (r.componentDidCatch = function (e) {
              if (!(e instanceof rt)) throw e;
              this.setState({});
            }),
            (r.componentWillUnmount = function () {
              this.unbind();
            }),
            (r.render = function () {
              return this.props.children(this.setCallbacks);
            }),
            t
          );
        })(n.Component),
        it = function (e) {
          return e + 1;
        },
        ot = function (e, t) {
          var r = e.droppableId === t.droppableId,
            n = it(e.index),
            a = it(t.index);
          return r
            ? "\n      You have moved the item from position " +
                n +
                "\n      to position " +
                a +
                "\n    "
            : "\n    You have moved the item from position " +
                n +
                "\n    in list " +
                e.droppableId +
                "\n    to list " +
                t.droppableId +
                "\n    in position " +
                a +
                "\n  ";
        },
        lt = function (e, t, r) {
          return t.droppableId === r.droppableId
            ? "\n      The item " +
                e +
                "\n      has been combined with " +
                r.draggableId
            : "\n      The item " +
                e +
                "\n      in list " +
                t.droppableId +
                "\n      has been combined with " +
                r.draggableId +
                "\n      in list " +
                r.droppableId +
                "\n    ";
        },
        st = function (e) {
          return (
            "\n  The item has returned to its starting position\n  of " +
            it(e.index) +
            "\n"
          );
        },
        ct =
          "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n",
        dt = function (e) {
          return (
            "\n  You have lifted an item in position " +
            it(e.source.index) +
            "\n"
          );
        },
        ut = function (e) {
          var t = e.destination;
          if (t) return ot(e.source, t);
          var r = e.combine;
          return r
            ? lt(e.draggableId, e.source, r)
            : "You are over an area that cannot be dropped on";
        },
        pt = function (e) {
          if ("CANCEL" === e.reason)
            return (
              "\n      Movement cancelled.\n      " + st(e.source) + "\n    "
            );
          var t = e.destination,
            r = e.combine;
          return t
            ? "\n      You have dropped the item.\n      " +
                ot(e.source, t) +
                "\n    "
            : r
            ? "\n      You have dropped the item.\n      " +
              lt(e.draggableId, e.source, r) +
              "\n    "
            : "\n    The item has been dropped while not over a drop area.\n    " +
              st(e.source) +
              "\n  ";
        },
        ft = { x: 0, y: 0 },
        mt = function (e, t) {
          return { x: e.x + t.x, y: e.y + t.y };
        },
        gt = function (e, t) {
          return { x: e.x - t.x, y: e.y - t.y };
        },
        vt = function (e, t) {
          return e.x === t.x && e.y === t.y;
        },
        bt = function (e) {
          return { x: 0 !== e.x ? -e.x : 0, y: 0 !== e.y ? -e.y : 0 };
        },
        ht = function (e, t, r) {
          var n;
          return (
            void 0 === r && (r = 0),
            ((n = {})[e] = t),
            (n["x" === e ? "y" : "x"] = r),
            n
          );
        },
        yt = function (e, t) {
          return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
        },
        Et = function (e, t) {
          return Math.min.apply(
            Math,
            t.map(function (t) {
              return yt(e, t);
            })
          );
        },
        At = function (e) {
          return function (t) {
            return { x: e(t.x), y: e(t.y) };
          };
        },
        wt = function (e, t) {
          return {
            top: e.top + t.y,
            left: e.left + t.x,
            bottom: e.bottom + t.y,
            right: e.right + t.x,
          };
        },
        xt = function (e) {
          return [
            { x: e.left, y: e.top },
            { x: e.right, y: e.top },
            { x: e.left, y: e.bottom },
            { x: e.right, y: e.bottom },
          ];
        },
        It = function (e, t) {
          return t && t.shouldClipSubject
            ? (function (e, t) {
                var r = Fe({
                  top: Math.max(t.top, e.top),
                  right: Math.min(t.right, e.right),
                  bottom: Math.min(t.bottom, e.bottom),
                  left: Math.max(t.left, e.left),
                });
                return r.width <= 0 || r.height <= 0 ? null : r;
              })(t.pageMarginBox, e)
            : Fe(e);
        },
        Ct = function (e) {
          var t = e.page,
            r = e.withPlaceholder,
            n = e.axis,
            a = e.frame,
            i = (function (e, t) {
              return t ? wt(e, t.scroll.diff.displacement) : e;
            })(t.marginBox, a),
            o = (function (e, t, r) {
              var n;
              return r && r.increasedBy
                ? (0, M.Z)(
                    {},
                    e,
                    (((n = {})[t.end] = e[t.end] + r.increasedBy[t.line]), n)
                  )
                : e;
            })(i, n, r);
          return { page: t, withPlaceholder: r, active: It(o, a) };
        },
        Dt = function (e, t) {
          e.frame || nt(!1);
          var r = e.frame,
            n = gt(t, r.scroll.initial),
            a = bt(n),
            i = (0, M.Z)({}, r, {
              scroll: {
                initial: r.scroll.initial,
                current: t,
                diff: { value: n, displacement: a },
                max: r.scroll.max,
              },
            }),
            o = Ct({
              page: e.subject.page,
              withPlaceholder: e.subject.withPlaceholder,
              axis: e.axis,
              frame: i,
            });
          return (0, M.Z)({}, e, { frame: i, subject: o });
        };
      function Nt(e) {
        return Object.values
          ? Object.values(e)
          : Object.keys(e).map(function (t) {
              return e[t];
            });
      }
      function St(e, t) {
        if (e.findIndex) return e.findIndex(t);
        for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
        return -1;
      }
      function Bt(e, t) {
        if (e.find) return e.find(t);
        var r = St(e, t);
        return -1 !== r ? e[r] : void 0;
      }
      function Rt(e) {
        return Array.prototype.slice.call(e);
      }
      var Ot = (0, Ke.default)(function (e) {
          return e.reduce(function (e, t) {
            return (e[t.descriptor.id] = t), e;
          }, {});
        }),
        Pt = (0, Ke.default)(function (e) {
          return e.reduce(function (e, t) {
            return (e[t.descriptor.id] = t), e;
          }, {});
        }),
        _t = (0, Ke.default)(function (e) {
          return Nt(e);
        }),
        Tt = (0, Ke.default)(function (e) {
          return Nt(e);
        }),
        Lt = (0, Ke.default)(function (e, t) {
          var r = Tt(t)
            .filter(function (t) {
              return e === t.descriptor.droppableId;
            })
            .sort(function (e, t) {
              return e.descriptor.index - t.descriptor.index;
            });
          return r;
        });
      function Mt(e) {
        return e.at && "REORDER" === e.at.type ? e.at.destination : null;
      }
      function kt(e) {
        return e.at && "COMBINE" === e.at.type ? e.at.combine : null;
      }
      var Zt = (0, Ke.default)(function (e, t) {
          return t.filter(function (t) {
            return t.descriptor.id !== e.descriptor.id;
          });
        }),
        Gt = function (e, t) {
          return e.descriptor.droppableId === t.descriptor.id;
        },
        Ft = { point: ft, value: 0 },
        $t = { invisible: {}, visible: {}, all: [] },
        Ut = { displaced: $t, displacedBy: Ft, at: null },
        jt = function (e, t) {
          return function (r) {
            return e <= r && r <= t;
          };
        },
        qt = function (e) {
          var t = jt(e.top, e.bottom),
            r = jt(e.left, e.right);
          return function (n) {
            if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right)) return !0;
            var a = t(n.top) || t(n.bottom),
              i = r(n.left) || r(n.right);
            if (a && i) return !0;
            var o = n.top < e.top && n.bottom > e.bottom,
              l = n.left < e.left && n.right > e.right;
            return !(!o || !l) || (o && i) || (l && a);
          };
        },
        Vt = function (e) {
          var t = jt(e.top, e.bottom),
            r = jt(e.left, e.right);
          return function (e) {
            return t(e.top) && t(e.bottom) && r(e.left) && r(e.right);
          };
        },
        Wt = {
          direction: "vertical",
          line: "y",
          crossAxisLine: "x",
          start: "top",
          end: "bottom",
          size: "height",
          crossAxisStart: "left",
          crossAxisEnd: "right",
          crossAxisSize: "width",
        },
        Ht = {
          direction: "horizontal",
          line: "x",
          crossAxisLine: "y",
          start: "left",
          end: "right",
          size: "width",
          crossAxisStart: "top",
          crossAxisEnd: "bottom",
          crossAxisSize: "height",
        },
        Qt = function (e) {
          var t = e.target,
            r = e.destination,
            n = e.viewport,
            a = e.withDroppableDisplacement,
            i = e.isVisibleThroughFrameFn,
            o = a
              ? (function (e, t) {
                  var r = t.frame ? t.frame.scroll.diff.displacement : ft;
                  return wt(e, r);
                })(t, r)
              : t;
          return (
            (function (e, t, r) {
              return !!t.subject.active && r(t.subject.active)(e);
            })(o, r, i) &&
            (function (e, t, r) {
              return r(t)(e);
            })(o, n, i)
          );
        },
        zt = function (e) {
          return Qt((0, M.Z)({}, e, { isVisibleThroughFrameFn: qt }));
        },
        Kt = function (e) {
          return Qt((0, M.Z)({}, e, { isVisibleThroughFrameFn: Vt }));
        };
      function Jt(e) {
        var t = e.afterDragging,
          r = e.destination,
          n = e.displacedBy,
          a = e.viewport,
          i = e.forceShouldAnimate,
          o = e.last;
        return t.reduce(
          function (e, t) {
            var l = (function (e, t) {
                var r = e.page.marginBox,
                  n = { top: t.point.y, right: 0, bottom: 0, left: t.point.x };
                return Fe($e(r, n));
              })(t, n),
              s = t.descriptor.id;
            if (
              (e.all.push(s),
              !zt({
                target: l,
                destination: r,
                viewport: a,
                withDroppableDisplacement: !0,
              }))
            )
              return (e.invisible[t.descriptor.id] = !0), e;
            var c = (function (e, t, r) {
                if ("boolean" == typeof r) return r;
                if (!t) return !0;
                var n = t.invisible,
                  a = t.visible;
                if (n[e]) return !1;
                var i = a[e];
                return !i || i.shouldAnimate;
              })(s, o, i),
              d = { draggableId: s, shouldAnimate: c };
            return (e.visible[s] = d), e;
          },
          { all: [], visible: {}, invisible: {} }
        );
      }
      function Yt(e) {
        var t = e.insideDestination,
          r = e.inHomeList,
          n = e.displacedBy,
          a = e.destination,
          i = (function (e, t) {
            if (!e.length) return 0;
            var r = e[e.length - 1].descriptor.index;
            return t.inHomeList ? r : r + 1;
          })(t, { inHomeList: r });
        return {
          displaced: $t,
          displacedBy: n,
          at: {
            type: "REORDER",
            destination: { droppableId: a.descriptor.id, index: i },
          },
        };
      }
      function Xt(e) {
        var t = e.draggable,
          r = e.insideDestination,
          n = e.destination,
          a = e.viewport,
          i = e.displacedBy,
          o = e.last,
          l = e.index,
          s = e.forceShouldAnimate,
          c = Gt(t, n);
        if (null == l)
          return Yt({
            insideDestination: r,
            inHomeList: c,
            displacedBy: i,
            destination: n,
          });
        var d = Bt(r, function (e) {
          return e.descriptor.index === l;
        });
        if (!d)
          return Yt({
            insideDestination: r,
            inHomeList: c,
            displacedBy: i,
            destination: n,
          });
        var u = Zt(t, r),
          p = r.indexOf(d);
        return {
          displaced: Jt({
            afterDragging: u.slice(p),
            destination: n,
            displacedBy: i,
            last: o,
            viewport: a.frame,
            forceShouldAnimate: s,
          }),
          displacedBy: i,
          at: {
            type: "REORDER",
            destination: { droppableId: n.descriptor.id, index: l },
          },
        };
      }
      function er(e, t) {
        return Boolean(t.effected[e]);
      }
      var tr = function (e) {
          var t = e.isMovingForward,
            r = e.isInHomeList,
            n = e.draggable,
            a = e.draggables,
            i = e.destination,
            o = e.insideDestination,
            l = e.previousImpact,
            s = e.viewport,
            c = e.afterCritical,
            d = l.at;
          if ((d || nt(!1), "REORDER" === d.type)) {
            var u = (function (e) {
              var t = e.isMovingForward,
                r = e.isInHomeList,
                n = e.insideDestination,
                a = e.location;
              if (!n.length) return null;
              var i = a.index,
                o = t ? i + 1 : i - 1,
                l = n[0].descriptor.index,
                s = n[n.length - 1].descriptor.index;
              return o < l || o > (r ? s : s + 1) ? null : o;
            })({
              isMovingForward: t,
              isInHomeList: r,
              location: d.destination,
              insideDestination: o,
            });
            return null == u
              ? null
              : Xt({
                  draggable: n,
                  insideDestination: o,
                  destination: i,
                  viewport: s,
                  last: l.displaced,
                  displacedBy: l.displacedBy,
                  index: u,
                });
          }
          var p = (function (e) {
            var t = e.isMovingForward,
              r = e.destination,
              n = e.draggables,
              a = e.combine,
              i = e.afterCritical;
            if (!r.isCombineEnabled) return null;
            var o = a.draggableId,
              l = n[o].descriptor.index;
            return er(o, i) ? (t ? l : l - 1) : t ? l + 1 : l;
          })({
            isMovingForward: t,
            destination: i,
            displaced: l.displaced,
            draggables: a,
            combine: d.combine,
            afterCritical: c,
          });
          return null == p
            ? null
            : Xt({
                draggable: n,
                insideDestination: o,
                destination: i,
                viewport: s,
                last: l.displaced,
                displacedBy: l.displacedBy,
                index: p,
              });
        },
        rr = function (e) {
          var t = e.afterCritical,
            r = e.impact,
            n = e.draggables,
            a = kt(r);
          a || nt(!1);
          var i = a.draggableId,
            o = n[i].page.borderBox.center,
            l = (function (e) {
              var t = e.displaced,
                r = e.afterCritical,
                n = e.combineWith,
                a = e.displacedBy,
                i = Boolean(t.visible[n] || t.invisible[n]);
              return er(n, r) ? (i ? ft : bt(a.point)) : i ? a.point : ft;
            })({
              displaced: r.displaced,
              afterCritical: t,
              combineWith: i,
              displacedBy: r.displacedBy,
            });
          return mt(o, l);
        },
        nr = function (e, t) {
          return t.margin[e.start] + t.borderBox[e.size] / 2;
        },
        ar = function (e, t, r) {
          return (
            t[e.crossAxisStart] +
            r.margin[e.crossAxisStart] +
            r.borderBox[e.crossAxisSize] / 2
          );
        },
        ir = function (e) {
          var t = e.axis,
            r = e.moveRelativeTo,
            n = e.isMoving;
          return ht(
            t.line,
            r.marginBox[t.end] + nr(t, n),
            ar(t, r.marginBox, n)
          );
        },
        or = function (e) {
          var t = e.axis,
            r = e.moveRelativeTo,
            n = e.isMoving;
          return ht(
            t.line,
            r.marginBox[t.start] -
              (function (e, t) {
                return t.margin[e.end] + t.borderBox[e.size] / 2;
              })(t, n),
            ar(t, r.marginBox, n)
          );
        },
        lr = function (e) {
          var t = e.impact,
            r = e.draggable,
            n = e.draggables,
            a = e.droppable,
            i = e.afterCritical,
            o = Lt(a.descriptor.id, n),
            l = r.page,
            s = a.axis;
          if (!o.length)
            return (function (e) {
              var t = e.axis,
                r = e.moveInto,
                n = e.isMoving;
              return ht(
                t.line,
                r.contentBox[t.start] + nr(t, n),
                ar(t, r.contentBox, n)
              );
            })({ axis: s, moveInto: a.page, isMoving: l });
          var c = t.displaced,
            d = t.displacedBy,
            u = c.all[0];
          if (u) {
            var p = n[u];
            if (er(u, i))
              return or({ axis: s, moveRelativeTo: p.page, isMoving: l });
            var f = We(p.page, d.point);
            return or({ axis: s, moveRelativeTo: f, isMoving: l });
          }
          var m = o[o.length - 1];
          if (m.descriptor.id === r.descriptor.id) return l.borderBox.center;
          if (er(m.descriptor.id, i)) {
            var g = We(m.page, bt(i.displacedBy.point));
            return ir({ axis: s, moveRelativeTo: g, isMoving: l });
          }
          return ir({ axis: s, moveRelativeTo: m.page, isMoving: l });
        },
        sr = function (e, t) {
          var r = e.frame;
          return r ? mt(t, r.scroll.diff.displacement) : t;
        },
        cr = function (e) {
          var t = (function (e) {
              var t = e.impact,
                r = e.draggable,
                n = e.droppable,
                a = e.draggables,
                i = e.afterCritical,
                o = r.page.borderBox.center,
                l = t.at;
              return n && l
                ? "REORDER" === l.type
                  ? lr({
                      impact: t,
                      draggable: r,
                      draggables: a,
                      droppable: n,
                      afterCritical: i,
                    })
                  : rr({ impact: t, draggables: a, afterCritical: i })
                : o;
            })(e),
            r = e.droppable;
          return r ? sr(r, t) : t;
        },
        dr = function (e, t) {
          var r = gt(t, e.scroll.initial),
            n = bt(r);
          return {
            frame: Fe({
              top: t.y,
              bottom: t.y + e.frame.height,
              left: t.x,
              right: t.x + e.frame.width,
            }),
            scroll: {
              initial: e.scroll.initial,
              max: e.scroll.max,
              current: t,
              diff: { value: r, displacement: n },
            },
          };
        };
      function ur(e, t) {
        return e.map(function (e) {
          return t[e];
        });
      }
      var pr = function (e) {
          var t = e.pageBorderBoxCenter,
            r = e.draggable,
            n = (function (e, t) {
              return mt(e.scroll.diff.displacement, t);
            })(e.viewport, t),
            a = gt(n, r.page.borderBox.center);
          return mt(r.client.borderBox.center, a);
        },
        fr = function (e) {
          var t = e.draggable,
            r = e.destination,
            n = e.newPageBorderBoxCenter,
            a = e.viewport,
            i = e.withDroppableDisplacement,
            o = e.onlyOnMainAxis,
            l = void 0 !== o && o,
            s = gt(n, t.page.borderBox.center),
            c = {
              target: wt(t.page.borderBox, s),
              destination: r,
              withDroppableDisplacement: i,
              viewport: a,
            };
          return l
            ? (function (e) {
                return Qt(
                  (0, M.Z)({}, e, {
                    isVisibleThroughFrameFn:
                      ((t = e.destination.axis),
                      function (e) {
                        var r = jt(e.top, e.bottom),
                          n = jt(e.left, e.right);
                        return function (e) {
                          return t === Wt
                            ? r(e.top) && r(e.bottom)
                            : n(e.left) && n(e.right);
                        };
                      }),
                  })
                );
                var t;
              })(c)
            : Kt(c);
        },
        mr = function (e) {
          var t = e.isMovingForward,
            r = e.draggable,
            n = e.destination,
            a = e.draggables,
            i = e.previousImpact,
            o = e.viewport,
            l = e.previousPageBorderBoxCenter,
            s = e.previousClientSelection,
            c = e.afterCritical;
          if (!n.isEnabled) return null;
          var d = Lt(n.descriptor.id, a),
            u = Gt(r, n),
            p =
              (function (e) {
                var t = e.isMovingForward,
                  r = e.draggable,
                  n = e.destination,
                  a = e.insideDestination,
                  i = e.previousImpact;
                if (!n.isCombineEnabled) return null;
                if (!Mt(i)) return null;
                function o(e) {
                  var t = {
                    type: "COMBINE",
                    combine: { draggableId: e, droppableId: n.descriptor.id },
                  };
                  return (0, M.Z)({}, i, { at: t });
                }
                var l = i.displaced.all,
                  s = l.length ? l[0] : null;
                if (t) return s ? o(s) : null;
                var c = Zt(r, a);
                if (!s)
                  return c.length ? o(c[c.length - 1].descriptor.id) : null;
                var d = St(c, function (e) {
                  return e.descriptor.id === s;
                });
                -1 === d && nt(!1);
                var u = d - 1;
                return u < 0 ? null : o(c[u].descriptor.id);
              })({
                isMovingForward: t,
                draggable: r,
                destination: n,
                insideDestination: d,
                previousImpact: i,
              }) ||
              tr({
                isMovingForward: t,
                isInHomeList: u,
                draggable: r,
                draggables: a,
                destination: n,
                insideDestination: d,
                previousImpact: i,
                viewport: o,
                afterCritical: c,
              });
          if (!p) return null;
          var f = cr({
            impact: p,
            draggable: r,
            droppable: n,
            draggables: a,
            afterCritical: c,
          });
          if (
            fr({
              draggable: r,
              destination: n,
              newPageBorderBoxCenter: f,
              viewport: o.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
          )
            return {
              clientSelection: pr({
                pageBorderBoxCenter: f,
                draggable: r,
                viewport: o,
              }),
              impact: p,
              scrollJumpRequest: null,
            };
          var m = gt(f, l),
            g = (function (e) {
              var t = e.impact,
                r = e.viewport,
                n = e.destination,
                a = e.draggables,
                i = e.maxScrollChange,
                o = dr(r, mt(r.scroll.current, i)),
                l = n.frame ? Dt(n, mt(n.frame.scroll.current, i)) : n,
                s = t.displaced,
                c = Jt({
                  afterDragging: ur(s.all, a),
                  destination: n,
                  displacedBy: t.displacedBy,
                  viewport: o.frame,
                  last: s,
                  forceShouldAnimate: !1,
                }),
                d = Jt({
                  afterDragging: ur(s.all, a),
                  destination: l,
                  displacedBy: t.displacedBy,
                  viewport: r.frame,
                  last: s,
                  forceShouldAnimate: !1,
                }),
                u = {},
                p = {},
                f = [s, c, d];
              return (
                s.all.forEach(function (e) {
                  var t = (function (e, t) {
                    for (var r = 0; r < t.length; r++) {
                      var n = t[r].visible[e];
                      if (n) return n;
                    }
                    return null;
                  })(e, f);
                  t ? (p[e] = t) : (u[e] = !0);
                }),
                (0, M.Z)({}, t, {
                  displaced: { all: s.all, invisible: u, visible: p },
                })
              );
            })({
              impact: p,
              viewport: o,
              destination: n,
              draggables: a,
              maxScrollChange: m,
            });
          return { clientSelection: s, impact: g, scrollJumpRequest: m };
        },
        gr = function (e) {
          var t = e.subject.active;
          return t || nt(!1), t;
        },
        vr = function (e, t) {
          var r = e.page.borderBox.center;
          return er(e.descriptor.id, t) ? gt(r, t.displacedBy.point) : r;
        },
        br = function (e, t) {
          var r = e.page.borderBox;
          return er(e.descriptor.id, t) ? wt(r, bt(t.displacedBy.point)) : r;
        },
        hr = (0, Ke.default)(function (e, t) {
          var r = t[e.line];
          return { value: r, point: ht(e.line, r) };
        }),
        yr = function (e, t) {
          return (0, M.Z)({}, e, {
            scroll: (0, M.Z)({}, e.scroll, { max: t }),
          });
        },
        Er = function (e, t, r) {
          var n = e.frame;
          Gt(t, e) && nt(!1), e.subject.withPlaceholder && nt(!1);
          var a = hr(e.axis, t.displaceBy).point,
            i = (function (e, t, r) {
              var n = e.axis;
              if ("virtual" === e.descriptor.mode) return ht(n.line, t[n.line]);
              var a = e.subject.page.contentBox[n.size],
                i =
                  Lt(e.descriptor.id, r).reduce(function (e, t) {
                    return e + t.client.marginBox[n.size];
                  }, 0) +
                  t[n.line] -
                  a;
              return i <= 0 ? null : ht(n.line, i);
            })(e, a, r),
            o = {
              placeholderSize: a,
              increasedBy: i,
              oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
            };
          if (!n) {
            var l = Ct({
              page: e.subject.page,
              withPlaceholder: o,
              axis: e.axis,
              frame: e.frame,
            });
            return (0, M.Z)({}, e, { subject: l });
          }
          var s = i ? mt(n.scroll.max, i) : n.scroll.max,
            c = yr(n, s),
            d = Ct({
              page: e.subject.page,
              withPlaceholder: o,
              axis: e.axis,
              frame: c,
            });
          return (0, M.Z)({}, e, { subject: d, frame: c });
        },
        Ar = function (e) {
          var t = e.isMovingForward,
            r = e.previousPageBorderBoxCenter,
            n = e.draggable,
            a = e.isOver,
            i = e.draggables,
            o = e.droppables,
            l = e.viewport,
            s = e.afterCritical,
            c = (function (e) {
              var t = e.isMovingForward,
                r = e.pageBorderBoxCenter,
                n = e.source,
                a = e.droppables,
                i = e.viewport,
                o = n.subject.active;
              if (!o) return null;
              var l = n.axis,
                s = jt(o[l.start], o[l.end]),
                c = _t(a)
                  .filter(function (e) {
                    return e !== n;
                  })
                  .filter(function (e) {
                    return e.isEnabled;
                  })
                  .filter(function (e) {
                    return Boolean(e.subject.active);
                  })
                  .filter(function (e) {
                    return qt(i.frame)(gr(e));
                  })
                  .filter(function (e) {
                    var r = gr(e);
                    return t
                      ? o[l.crossAxisEnd] < r[l.crossAxisEnd]
                      : r[l.crossAxisStart] < o[l.crossAxisStart];
                  })
                  .filter(function (e) {
                    var t = gr(e),
                      r = jt(t[l.start], t[l.end]);
                    return (
                      s(t[l.start]) ||
                      s(t[l.end]) ||
                      r(o[l.start]) ||
                      r(o[l.end])
                    );
                  })
                  .sort(function (e, r) {
                    var n = gr(e)[l.crossAxisStart],
                      a = gr(r)[l.crossAxisStart];
                    return t ? n - a : a - n;
                  })
                  .filter(function (e, t, r) {
                    return (
                      gr(e)[l.crossAxisStart] === gr(r[0])[l.crossAxisStart]
                    );
                  });
              if (!c.length) return null;
              if (1 === c.length) return c[0];
              var d = c.filter(function (e) {
                return jt(gr(e)[l.start], gr(e)[l.end])(r[l.line]);
              });
              return 1 === d.length
                ? d[0]
                : d.length > 1
                ? d.sort(function (e, t) {
                    return gr(e)[l.start] - gr(t)[l.start];
                  })[0]
                : c.sort(function (e, t) {
                    var n = Et(r, xt(gr(e))),
                      a = Et(r, xt(gr(t)));
                    return n !== a ? n - a : gr(e)[l.start] - gr(t)[l.start];
                  })[0];
            })({
              isMovingForward: t,
              pageBorderBoxCenter: r,
              source: a,
              droppables: o,
              viewport: l,
            });
          if (!c) return null;
          var d = Lt(c.descriptor.id, i),
            u = (function (e) {
              var t = e.pageBorderBoxCenter,
                r = e.viewport,
                n = e.destination,
                a = e.insideDestination,
                i = e.afterCritical,
                o = a
                  .filter(function (e) {
                    return Kt({
                      target: br(e, i),
                      destination: n,
                      viewport: r.frame,
                      withDroppableDisplacement: !0,
                    });
                  })
                  .sort(function (e, r) {
                    var a = yt(t, sr(n, vr(e, i))),
                      o = yt(t, sr(n, vr(r, i)));
                    return a < o
                      ? -1
                      : o < a
                      ? 1
                      : e.descriptor.index - r.descriptor.index;
                  });
              return o[0] || null;
            })({
              pageBorderBoxCenter: r,
              viewport: l,
              destination: c,
              insideDestination: d,
              afterCritical: s,
            }),
            p = (function (e) {
              var t = e.previousPageBorderBoxCenter,
                r = e.moveRelativeTo,
                n = e.insideDestination,
                a = e.draggable,
                i = e.draggables,
                o = e.destination,
                l = e.viewport,
                s = e.afterCritical;
              if (!r) {
                if (n.length) return null;
                var c = {
                    displaced: $t,
                    displacedBy: Ft,
                    at: {
                      type: "REORDER",
                      destination: { droppableId: o.descriptor.id, index: 0 },
                    },
                  },
                  d = cr({
                    impact: c,
                    draggable: a,
                    droppable: o,
                    draggables: i,
                    afterCritical: s,
                  }),
                  u = Gt(a, o) ? o : Er(o, a, i);
                return fr({
                  draggable: a,
                  destination: u,
                  newPageBorderBoxCenter: d,
                  viewport: l.frame,
                  withDroppableDisplacement: !1,
                  onlyOnMainAxis: !0,
                })
                  ? c
                  : null;
              }
              var p,
                f = Boolean(
                  t[o.axis.line] <= r.page.borderBox.center[o.axis.line]
                ),
                m =
                  ((p = r.descriptor.index),
                  r.descriptor.id === a.descriptor.id || f ? p : p + 1),
                g = hr(o.axis, a.displaceBy);
              return Xt({
                draggable: a,
                insideDestination: n,
                destination: o,
                viewport: l,
                displacedBy: g,
                last: $t,
                index: m,
              });
            })({
              previousPageBorderBoxCenter: r,
              destination: c,
              draggable: n,
              draggables: i,
              moveRelativeTo: u,
              insideDestination: d,
              viewport: l,
              afterCritical: s,
            });
          if (!p) return null;
          var f = cr({
            impact: p,
            draggable: n,
            droppable: c,
            draggables: i,
            afterCritical: s,
          });
          return {
            clientSelection: pr({
              pageBorderBoxCenter: f,
              draggable: n,
              viewport: l,
            }),
            impact: p,
            scrollJumpRequest: null,
          };
        },
        wr = function (e) {
          var t = e.at;
          return t
            ? "REORDER" === t.type
              ? t.destination.droppableId
              : t.combine.droppableId
            : null;
        },
        xr = function (e) {
          var t = e.state,
            r = e.type,
            n = (function (e, t) {
              var r = wr(e);
              return r ? t[r] : null;
            })(t.impact, t.dimensions.droppables),
            a = Boolean(n),
            i = t.dimensions.droppables[t.critical.droppable.id],
            o = n || i,
            l = o.axis.direction,
            s =
              ("vertical" === l && ("MOVE_UP" === r || "MOVE_DOWN" === r)) ||
              ("horizontal" === l && ("MOVE_LEFT" === r || "MOVE_RIGHT" === r));
          if (s && !a) return null;
          var c = "MOVE_DOWN" === r || "MOVE_RIGHT" === r,
            d = t.dimensions.draggables[t.critical.draggable.id],
            u = t.current.page.borderBoxCenter,
            p = t.dimensions,
            f = p.draggables,
            m = p.droppables;
          return s
            ? mr({
                isMovingForward: c,
                previousPageBorderBoxCenter: u,
                draggable: d,
                destination: o,
                draggables: f,
                viewport: t.viewport,
                previousClientSelection: t.current.client.selection,
                previousImpact: t.impact,
                afterCritical: t.afterCritical,
              })
            : Ar({
                isMovingForward: c,
                previousPageBorderBoxCenter: u,
                draggable: d,
                isOver: o,
                draggables: f,
                droppables: m,
                viewport: t.viewport,
                afterCritical: t.afterCritical,
              });
        };
      function Ir(e) {
        return "DRAGGING" === e.phase || "COLLECTING" === e.phase;
      }
      function Cr(e) {
        var t = jt(e.top, e.bottom),
          r = jt(e.left, e.right);
        return function (e) {
          return t(e.y) && r(e.x);
        };
      }
      function Dr(e) {
        var t = e.pageBorderBox,
          r = e.draggable,
          n = e.droppables,
          a = _t(n).filter(function (e) {
            if (!e.isEnabled) return !1;
            var r,
              n,
              a = e.subject.active;
            if (!a) return !1;
            if (
              ((n = a),
              !(
                (r = t).left < n.right &&
                r.right > n.left &&
                r.top < n.bottom &&
                r.bottom > n.top
              ))
            )
              return !1;
            if (Cr(a)(t.center)) return !0;
            var i = e.axis,
              o = a.center[i.crossAxisLine],
              l = t[i.crossAxisStart],
              s = t[i.crossAxisEnd],
              c = jt(a[i.crossAxisStart], a[i.crossAxisEnd]),
              d = c(l),
              u = c(s);
            return (!d && !u) || (d ? l < o : s > o);
          });
        return a.length
          ? 1 === a.length
            ? a[0].descriptor.id
            : (function (e) {
                var t = e.pageBorderBox,
                  r = e.draggable,
                  n = e.candidates,
                  a = r.page.borderBox.center,
                  i = n
                    .map(function (e) {
                      var r = e.axis,
                        n = ht(
                          e.axis.line,
                          t.center[r.line],
                          e.page.borderBox.center[r.crossAxisLine]
                        );
                      return { id: e.descriptor.id, distance: yt(a, n) };
                    })
                    .sort(function (e, t) {
                      return t.distance - e.distance;
                    });
                return i[0] ? i[0].id : null;
              })({ pageBorderBox: t, draggable: r, candidates: a })
          : null;
      }
      var Nr = function (e, t) {
        return Fe(wt(e, t));
      };
      function Sr(e) {
        var t = e.displaced,
          r = e.id;
        return Boolean(t.visible[r] || t.invisible[r]);
      }
      var Br = function (e) {
          var t = e.pageOffset,
            r = e.draggable,
            n = e.draggables,
            a = e.droppables,
            i = e.previousImpact,
            o = e.viewport,
            l = e.afterCritical,
            s = Nr(r.page.borderBox, t),
            c = Dr({ pageBorderBox: s, draggable: r, droppables: a });
          if (!c) return Ut;
          var d = a[c],
            u = Lt(d.descriptor.id, n),
            p = (function (e, t) {
              var r = e.frame;
              return r ? Nr(t, r.scroll.diff.value) : t;
            })(d, s);
          return (
            (function (e) {
              var t = e.draggable,
                r = e.pageBorderBoxWithDroppableScroll,
                n = e.previousImpact,
                a = e.destination,
                i = e.insideDestination,
                o = e.afterCritical;
              if (!a.isCombineEnabled) return null;
              var l = a.axis,
                s = hr(a.axis, t.displaceBy),
                c = s.value,
                d = r[l.start],
                u = r[l.end],
                p = Bt(Zt(t, i), function (e) {
                  var t = e.descriptor.id,
                    r = e.page.borderBox,
                    a = r[l.size] / 4,
                    i = er(t, o),
                    s = Sr({ displaced: n.displaced, id: t });
                  return i
                    ? s
                      ? u > r[l.start] + a && u < r[l.end] - a
                      : d > r[l.start] - c + a && d < r[l.end] - c - a
                    : s
                    ? u > r[l.start] + c + a && u < r[l.end] + c - a
                    : d > r[l.start] + a && d < r[l.end] - a;
                });
              return p
                ? {
                    displacedBy: s,
                    displaced: n.displaced,
                    at: {
                      type: "COMBINE",
                      combine: {
                        draggableId: p.descriptor.id,
                        droppableId: a.descriptor.id,
                      },
                    },
                  }
                : null;
            })({
              pageBorderBoxWithDroppableScroll: p,
              draggable: r,
              previousImpact: i,
              destination: d,
              insideDestination: u,
              afterCritical: l,
            }) ||
            (function (e) {
              var t = e.pageBorderBoxWithDroppableScroll,
                r = e.draggable,
                n = e.destination,
                a = e.insideDestination,
                i = e.last,
                o = e.viewport,
                l = e.afterCritical,
                s = n.axis,
                c = hr(n.axis, r.displaceBy),
                d = c.value,
                u = t[s.start],
                p = t[s.end],
                f = (function (e) {
                  var t = e.draggable,
                    r = e.closest,
                    n = e.inHomeList;
                  return r
                    ? n && r.descriptor.index > t.descriptor.index
                      ? r.descriptor.index - 1
                      : r.descriptor.index
                    : null;
                })({
                  draggable: r,
                  closest: Bt(Zt(r, a), function (e) {
                    var t = e.descriptor.id,
                      r = e.page.borderBox.center[s.line],
                      n = er(t, l),
                      a = Sr({ displaced: i, id: t });
                    return n
                      ? a
                        ? p <= r
                        : u < r - d
                      : a
                      ? p <= r + d
                      : u < r;
                  }),
                  inHomeList: Gt(r, n),
                });
              return Xt({
                draggable: r,
                insideDestination: a,
                destination: n,
                viewport: o,
                last: i,
                displacedBy: c,
                index: f,
              });
            })({
              pageBorderBoxWithDroppableScroll: p,
              draggable: r,
              destination: d,
              insideDestination: u,
              last: i.displaced,
              viewport: o,
              afterCritical: l,
            })
          );
        },
        Rr = function (e, t) {
          var r;
          return (0, M.Z)({}, e, (((r = {})[t.descriptor.id] = t), r));
        },
        Or = function (e) {
          var t = e.previousImpact,
            r = e.impact,
            n = e.droppables,
            a = wr(t),
            i = wr(r);
          if (!a) return n;
          if (a === i) return n;
          var o = n[a];
          if (!o.subject.withPlaceholder) return n;
          var l = (function (e) {
            var t = e.subject.withPlaceholder;
            t || nt(!1);
            var r = e.frame;
            if (!r) {
              var n = Ct({
                page: e.subject.page,
                axis: e.axis,
                frame: null,
                withPlaceholder: null,
              });
              return (0, M.Z)({}, e, { subject: n });
            }
            var a = t.oldFrameMaxScroll;
            a || nt(!1);
            var i = yr(r, a),
              o = Ct({
                page: e.subject.page,
                axis: e.axis,
                frame: i,
                withPlaceholder: null,
              });
            return (0, M.Z)({}, e, { subject: o, frame: i });
          })(o);
          return Rr(n, l);
        },
        Pr = function (e) {
          var t = e.state,
            r = e.clientSelection,
            n = e.dimensions,
            a = e.viewport,
            i = e.impact,
            o = e.scrollJumpRequest,
            l = a || t.viewport,
            s = n || t.dimensions,
            c = r || t.current.client.selection,
            d = gt(c, t.initial.client.selection),
            u = {
              offset: d,
              selection: c,
              borderBoxCenter: mt(t.initial.client.borderBoxCenter, d),
            },
            p = {
              selection: mt(u.selection, l.scroll.current),
              borderBoxCenter: mt(u.borderBoxCenter, l.scroll.current),
              offset: mt(u.offset, l.scroll.diff.value),
            },
            f = { client: u, page: p };
          if ("COLLECTING" === t.phase)
            return (0, M.Z)({ phase: "COLLECTING" }, t, {
              dimensions: s,
              viewport: l,
              current: f,
            });
          var m = s.draggables[t.critical.draggable.id],
            g =
              i ||
              Br({
                pageOffset: p.offset,
                draggable: m,
                draggables: s.draggables,
                droppables: s.droppables,
                previousImpact: t.impact,
                viewport: l,
                afterCritical: t.afterCritical,
              }),
            v = (function (e) {
              var t = e.draggable,
                r = e.draggables,
                n = e.droppables,
                a = e.previousImpact,
                i = e.impact,
                o = Or({ previousImpact: a, impact: i, droppables: n }),
                l = wr(i);
              if (!l) return o;
              var s = n[l];
              if (Gt(t, s)) return o;
              if (s.subject.withPlaceholder) return o;
              var c = Er(s, t, r);
              return Rr(o, c);
            })({
              draggable: m,
              impact: g,
              previousImpact: t.impact,
              draggables: s.draggables,
              droppables: s.droppables,
            });
          return (0, M.Z)({}, t, {
            current: f,
            dimensions: { draggables: s.draggables, droppables: v },
            impact: g,
            viewport: l,
            scrollJumpRequest: o || null,
            forceShouldAnimate: !o && null,
          });
        };
      var _r = function (e) {
          var t = e.impact,
            r = e.viewport,
            n = e.draggables,
            a = e.destination,
            i = e.forceShouldAnimate,
            o = t.displaced,
            l = (function (e, t) {
              return e.map(function (e) {
                return t[e];
              });
            })(o.all, n),
            s = Jt({
              afterDragging: l,
              destination: a,
              displacedBy: t.displacedBy,
              viewport: r.frame,
              forceShouldAnimate: i,
              last: o,
            });
          return (0, M.Z)({}, t, { displaced: s });
        },
        Tr = function (e) {
          var t = e.impact,
            r = e.draggable,
            n = e.droppable,
            a = e.draggables,
            i = e.viewport,
            o = e.afterCritical,
            l = cr({
              impact: t,
              draggable: r,
              draggables: a,
              droppable: n,
              afterCritical: o,
            });
          return pr({ pageBorderBoxCenter: l, draggable: r, viewport: i });
        },
        Lr = function (e) {
          var t = e.state,
            r = e.dimensions,
            n = e.viewport;
          "SNAP" !== t.movementMode && nt(!1);
          var a = t.impact,
            i = n || t.viewport,
            o = r || t.dimensions,
            l = o.draggables,
            s = o.droppables,
            c = l[t.critical.draggable.id],
            d = wr(a);
          d || nt(!1);
          var u = s[d],
            p = _r({ impact: a, viewport: i, destination: u, draggables: l }),
            f = Tr({
              impact: p,
              draggable: c,
              droppable: u,
              draggables: l,
              viewport: i,
              afterCritical: t.afterCritical,
            });
          return Pr({
            impact: p,
            clientSelection: f,
            state: t,
            dimensions: o,
            viewport: i,
          });
        },
        Mr = function (e) {
          var t = e.draggable,
            r = e.home,
            n = e.draggables,
            a = e.viewport,
            i = hr(r.axis, t.displaceBy),
            o = Lt(r.descriptor.id, n),
            l = o.indexOf(t);
          -1 === l && nt(!1);
          var s,
            c = o.slice(l + 1),
            d = c.reduce(function (e, t) {
              return (e[t.descriptor.id] = !0), e;
            }, {}),
            u = {
              inVirtualList: "virtual" === r.descriptor.mode,
              displacedBy: i,
              effected: d,
            };
          return {
            impact: {
              displaced: Jt({
                afterDragging: c,
                destination: r,
                displacedBy: i,
                last: null,
                viewport: a.frame,
                forceShouldAnimate: !1,
              }),
              displacedBy: i,
              at: {
                type: "REORDER",
                destination:
                  ((s = t.descriptor),
                  { index: s.index, droppableId: s.droppableId }),
              },
            },
            afterCritical: u,
          };
        },
        kr = function (e) {
          0;
        },
        Zr = function (e) {
          0;
        },
        Gr = function (e) {
          var t = e.additions,
            r = e.updatedDroppables,
            n = e.viewport,
            a = n.scroll.diff.value;
          return t.map(function (e) {
            var t = e.descriptor.droppableId,
              i = (function (e) {
                var t = e.frame;
                return t || nt(!1), t;
              })(r[t]),
              o = i.scroll.diff.value,
              l = (function (e) {
                var t = e.draggable,
                  r = e.offset,
                  n = e.initialWindowScroll,
                  a = We(t.client, r),
                  i = He(a, n);
                return (0, M.Z)({}, t, {
                  placeholder: (0, M.Z)({}, t.placeholder, { client: a }),
                  client: a,
                  page: i,
                });
              })({
                draggable: e,
                offset: mt(a, o),
                initialWindowScroll: n.scroll.initial,
              });
            return l;
          });
        },
        Fr = function (e) {
          return "SNAP" === e.movementMode;
        },
        $r = function (e, t, r) {
          var n = (function (e, t) {
            return {
              draggables: e.draggables,
              droppables: Rr(e.droppables, t),
            };
          })(e.dimensions, t);
          return !Fr(e) || r
            ? Pr({ state: e, dimensions: n })
            : Lr({ state: e, dimensions: n });
        };
      function Ur(e) {
        return e.isDragging && "SNAP" === e.movementMode
          ? (0, M.Z)({ phase: "DRAGGING" }, e, { scrollJumpRequest: null })
          : e;
      }
      var jr = { phase: "IDLE", completed: null, shouldFlush: !1 },
        qr = function (e, t) {
          if ((void 0 === e && (e = jr), "FLUSH" === t.type))
            return (0, M.Z)({}, jr, { shouldFlush: !0 });
          if ("INITIAL_PUBLISH" === t.type) {
            "IDLE" !== e.phase && nt(!1);
            var r = t.payload,
              n = r.critical,
              a = r.clientSelection,
              i = r.viewport,
              o = r.dimensions,
              l = r.movementMode,
              s = o.draggables[n.draggable.id],
              c = o.droppables[n.droppable.id],
              d = {
                selection: a,
                borderBoxCenter: s.client.borderBox.center,
                offset: ft,
              },
              u = {
                client: d,
                page: {
                  selection: mt(d.selection, i.scroll.initial),
                  borderBoxCenter: mt(d.selection, i.scroll.initial),
                  offset: mt(d.selection, i.scroll.diff.value),
                },
              },
              p = _t(o.droppables).every(function (e) {
                return !e.isFixedOnPage;
              }),
              f = Mr({
                draggable: s,
                home: c,
                draggables: o.draggables,
                viewport: i,
              }),
              m = f.impact;
            return {
              phase: "DRAGGING",
              isDragging: !0,
              critical: n,
              movementMode: l,
              dimensions: o,
              initial: u,
              current: u,
              isWindowScrollAllowed: p,
              impact: m,
              afterCritical: f.afterCritical,
              onLiftImpact: m,
              viewport: i,
              scrollJumpRequest: null,
              forceShouldAnimate: null,
            };
          }
          if ("COLLECTION_STARTING" === t.type)
            return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase
              ? e
              : ("DRAGGING" !== e.phase && nt(!1),
                (0, M.Z)({ phase: "COLLECTING" }, e, { phase: "COLLECTING" }));
          if ("PUBLISH_WHILE_DRAGGING" === t.type)
            return (
              "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && nt(!1),
              (function (e) {
                var t = e.state,
                  r = e.published;
                kr();
                var n = r.modified.map(function (e) {
                    var r = t.dimensions.droppables[e.droppableId];
                    return Dt(r, e.scroll);
                  }),
                  a = (0, M.Z)({}, t.dimensions.droppables, {}, Ot(n)),
                  i = Pt(
                    Gr({
                      additions: r.additions,
                      updatedDroppables: a,
                      viewport: t.viewport,
                    })
                  ),
                  o = (0, M.Z)({}, t.dimensions.draggables, {}, i);
                r.removals.forEach(function (e) {
                  delete o[e];
                });
                var l = { droppables: a, draggables: o },
                  s = wr(t.impact),
                  c = s ? l.droppables[s] : null,
                  d = l.draggables[t.critical.draggable.id],
                  u = l.droppables[t.critical.droppable.id],
                  p = Mr({
                    draggable: d,
                    home: u,
                    draggables: o,
                    viewport: t.viewport,
                  }),
                  f = p.impact,
                  m = p.afterCritical,
                  g = c && c.isCombineEnabled ? t.impact : f,
                  v = Br({
                    pageOffset: t.current.page.offset,
                    draggable: l.draggables[t.critical.draggable.id],
                    draggables: l.draggables,
                    droppables: l.droppables,
                    previousImpact: g,
                    viewport: t.viewport,
                    afterCritical: m,
                  });
                Zr();
                var b = (0, M.Z)({ phase: "DRAGGING" }, t, {
                  phase: "DRAGGING",
                  impact: v,
                  onLiftImpact: f,
                  dimensions: l,
                  afterCritical: m,
                  forceShouldAnimate: !1,
                });
                return "COLLECTING" === t.phase
                  ? b
                  : (0, M.Z)({ phase: "DROP_PENDING" }, b, {
                      phase: "DROP_PENDING",
                      reason: t.reason,
                      isWaiting: !1,
                    });
              })({ state: e, published: t.payload })
            );
          if ("MOVE" === t.type) {
            if ("DROP_PENDING" === e.phase) return e;
            Ir(e) || nt(!1);
            var g = t.payload.client;
            return vt(g, e.current.client.selection)
              ? e
              : Pr({
                  state: e,
                  clientSelection: g,
                  impact: Fr(e) ? e.impact : null,
                });
          }
          if ("UPDATE_DROPPABLE_SCROLL" === t.type) {
            if ("DROP_PENDING" === e.phase) return Ur(e);
            if ("COLLECTING" === e.phase) return Ur(e);
            Ir(e) || nt(!1);
            var v = t.payload,
              b = v.id,
              h = v.newScroll,
              y = e.dimensions.droppables[b];
            if (!y) return e;
            var E = Dt(y, h);
            return $r(e, E, !1);
          }
          if ("UPDATE_DROPPABLE_IS_ENABLED" === t.type) {
            if ("DROP_PENDING" === e.phase) return e;
            Ir(e) || nt(!1);
            var A = t.payload,
              w = A.id,
              x = A.isEnabled,
              I = e.dimensions.droppables[w];
            I || nt(!1), I.isEnabled === x && nt(!1);
            var C = (0, M.Z)({}, I, { isEnabled: x });
            return $r(e, C, !0);
          }
          if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === t.type) {
            if ("DROP_PENDING" === e.phase) return e;
            Ir(e) || nt(!1);
            var D = t.payload,
              N = D.id,
              S = D.isCombineEnabled,
              B = e.dimensions.droppables[N];
            B || nt(!1), B.isCombineEnabled === S && nt(!1);
            var R = (0, M.Z)({}, B, { isCombineEnabled: S });
            return $r(e, R, !0);
          }
          if ("MOVE_BY_WINDOW_SCROLL" === t.type) {
            if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase)
              return e;
            Ir(e) || nt(!1), e.isWindowScrollAllowed || nt(!1);
            var O = t.payload.newScroll;
            if (vt(e.viewport.scroll.current, O)) return Ur(e);
            var P = dr(e.viewport, O);
            return Fr(e)
              ? Lr({ state: e, viewport: P })
              : Pr({ state: e, viewport: P });
          }
          if ("UPDATE_VIEWPORT_MAX_SCROLL" === t.type) {
            if (!Ir(e)) return e;
            var _ = t.payload.maxScroll;
            if (vt(_, e.viewport.scroll.max)) return e;
            var T = (0, M.Z)({}, e.viewport, {
              scroll: (0, M.Z)({}, e.viewport.scroll, { max: _ }),
            });
            return (0, M.Z)({ phase: "DRAGGING" }, e, { viewport: T });
          }
          if (
            "MOVE_UP" === t.type ||
            "MOVE_DOWN" === t.type ||
            "MOVE_LEFT" === t.type ||
            "MOVE_RIGHT" === t.type
          ) {
            if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase)
              return e;
            "DRAGGING" !== e.phase && nt(!1);
            var L = xr({ state: e, type: t.type });
            return L
              ? Pr({
                  state: e,
                  impact: L.impact,
                  clientSelection: L.clientSelection,
                  scrollJumpRequest: L.scrollJumpRequest,
                })
              : e;
          }
          if ("DROP_PENDING" === t.type) {
            var k = t.payload.reason;
            return (
              "COLLECTING" !== e.phase && nt(!1),
              (0, M.Z)({ phase: "DROP_PENDING" }, e, {
                phase: "DROP_PENDING",
                isWaiting: !0,
                reason: k,
              })
            );
          }
          if ("DROP_ANIMATE" === t.type) {
            var Z = t.payload,
              G = Z.completed,
              F = Z.dropDuration,
              $ = Z.newHomeClientOffset;
            return (
              "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && nt(!1),
              {
                phase: "DROP_ANIMATING",
                completed: G,
                dropDuration: F,
                newHomeClientOffset: $,
                dimensions: e.dimensions,
              }
            );
          }
          return "DROP_COMPLETE" === t.type
            ? { phase: "IDLE", completed: t.payload.completed, shouldFlush: !1 }
            : e;
        },
        Vr = function (e) {
          return { type: "PUBLISH_WHILE_DRAGGING", payload: e };
        },
        Wr = function () {
          return { type: "COLLECTION_STARTING", payload: null };
        },
        Hr = function (e) {
          return { type: "UPDATE_DROPPABLE_SCROLL", payload: e };
        },
        Qr = function (e) {
          return { type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e };
        },
        zr = function (e) {
          return { type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e };
        },
        Kr = function (e) {
          return { type: "MOVE", payload: e };
        },
        Jr = function () {
          return { type: "MOVE_UP", payload: null };
        },
        Yr = function () {
          return { type: "MOVE_DOWN", payload: null };
        },
        Xr = function () {
          return { type: "MOVE_RIGHT", payload: null };
        },
        en = function () {
          return { type: "MOVE_LEFT", payload: null };
        },
        tn = function (e) {
          return { type: "DROP_COMPLETE", payload: e };
        },
        rn = function (e) {
          return { type: "DROP", payload: e };
        },
        nn = function () {
          return { type: "DROP_ANIMATION_FINISHED", payload: null };
        };
      var an = "cubic-bezier(.2,1,.1,1)",
        on = { drop: 0, combining: 0.7 },
        ln = { drop: 0.75 },
        sn = 0.2 + "s " + "cubic-bezier(0.2, 0, 0, 1)",
        cn = {
          fluid: "opacity " + sn,
          snap: "transform " + sn + ", opacity " + sn,
          drop: function (e) {
            var t = e + "s " + an;
            return "transform " + t + ", opacity " + t;
          },
          outOfTheWay: "transform " + sn,
          placeholder: "height " + sn + ", width " + sn + ", margin " + sn,
        },
        dn = function (e) {
          return vt(e, ft) ? null : "translate(" + e.x + "px, " + e.y + "px)";
        },
        un = dn,
        pn = function (e, t) {
          var r = dn(e);
          return r ? (t ? r + " scale(" + ln.drop + ")" : r) : null;
        },
        fn = 0.33,
        mn = 0.55,
        gn = mn - fn,
        vn = function (e) {
          var t = e.getState,
            r = e.dispatch;
          return function (e) {
            return function (n) {
              if ("DROP" === n.type) {
                var a = t(),
                  i = n.payload.reason;
                if ("COLLECTING" !== a.phase) {
                  if ("IDLE" !== a.phase) {
                    "DROP_PENDING" === a.phase && a.isWaiting && nt(!1),
                      "DRAGGING" !== a.phase &&
                        "DROP_PENDING" !== a.phase &&
                        nt(!1);
                    var o = a.critical,
                      l = a.dimensions,
                      s = l.draggables[a.critical.draggable.id],
                      c = (function (e) {
                        var t = e.draggables,
                          r = e.reason,
                          n = e.lastImpact,
                          a = e.home,
                          i = e.viewport,
                          o = e.onLiftImpact;
                        return n.at && "DROP" === r
                          ? "REORDER" === n.at.type
                            ? { impact: n, didDropInsideDroppable: !0 }
                            : {
                                impact: (0, M.Z)({}, n, { displaced: $t }),
                                didDropInsideDroppable: !0,
                              }
                          : {
                              impact: _r({
                                draggables: t,
                                impact: o,
                                destination: a,
                                viewport: i,
                                forceShouldAnimate: !0,
                              }),
                              didDropInsideDroppable: !1,
                            };
                      })({
                        reason: i,
                        lastImpact: a.impact,
                        afterCritical: a.afterCritical,
                        onLiftImpact: a.onLiftImpact,
                        home: a.dimensions.droppables[a.critical.droppable.id],
                        viewport: a.viewport,
                        draggables: a.dimensions.draggables,
                      }),
                      d = c.impact,
                      u = c.didDropInsideDroppable,
                      p = u ? Mt(d) : null,
                      f = u ? kt(d) : null,
                      m = {
                        index: o.draggable.index,
                        droppableId: o.droppable.id,
                      },
                      g = {
                        draggableId: s.descriptor.id,
                        type: s.descriptor.type,
                        source: m,
                        reason: i,
                        mode: a.movementMode,
                        destination: p,
                        combine: f,
                      },
                      v = (function (e) {
                        var t = e.impact,
                          r = e.draggable,
                          n = e.dimensions,
                          a = e.viewport,
                          i = e.afterCritical,
                          o = n.draggables,
                          l = n.droppables,
                          s = wr(t),
                          c = s ? l[s] : null,
                          d = l[r.descriptor.droppableId],
                          u = Tr({
                            impact: t,
                            draggable: r,
                            draggables: o,
                            afterCritical: i,
                            droppable: c || d,
                            viewport: a,
                          });
                        return gt(u, r.client.borderBox.center);
                      })({
                        impact: d,
                        draggable: s,
                        dimensions: l,
                        viewport: a.viewport,
                        afterCritical: a.afterCritical,
                      }),
                      b = {
                        critical: a.critical,
                        afterCritical: a.afterCritical,
                        result: g,
                        impact: d,
                      };
                    if (!vt(a.current.client.offset, v) || Boolean(g.combine)) {
                      var h = (function (e) {
                        var t = e.current,
                          r = e.destination,
                          n = e.reason,
                          a = yt(t, r);
                        if (a <= 0) return fn;
                        if (a >= 1500) return mn;
                        var i = fn + gn * (a / 1500);
                        return Number(
                          ("CANCEL" === n ? 0.6 * i : i).toFixed(2)
                        );
                      })({
                        current: a.current.client.offset,
                        destination: v,
                        reason: i,
                      });
                      r(
                        (function (e) {
                          return { type: "DROP_ANIMATE", payload: e };
                        })({
                          newHomeClientOffset: v,
                          dropDuration: h,
                          completed: b,
                        })
                      );
                    } else r(tn({ completed: b }));
                  }
                } else
                  r(
                    (function (e) {
                      return { type: "DROP_PENDING", payload: e };
                    })({ reason: i })
                  );
              } else e(n);
            };
          };
        },
        bn = function () {
          return { x: window.pageXOffset, y: window.pageYOffset };
        };
      function hn(e) {
        var t = e.onWindowScroll;
        var r = Je(function () {
            t(bn());
          }),
          n = (function (e) {
            return {
              eventName: "scroll",
              options: { passive: !0, capture: !1 },
              fn: function (t) {
                (t.target !== window && t.target !== window.document) || e();
              },
            };
          })(r),
          a = Xe;
        function i() {
          return a !== Xe;
        }
        return {
          start: function () {
            i() && nt(!1), (a = et(window, [n]));
          },
          stop: function () {
            i() || nt(!1), r.cancel(), a(), (a = Xe);
          },
          isActive: i,
        };
      }
      var yn = function (e) {
          var t = hn({
            onWindowScroll: function (t) {
              e.dispatch({
                type: "MOVE_BY_WINDOW_SCROLL",
                payload: { newScroll: t },
              });
            },
          });
          return function (e) {
            return function (r) {
              t.isActive() || "INITIAL_PUBLISH" !== r.type || t.start(),
                t.isActive() &&
                  (function (e) {
                    return (
                      "DROP_COMPLETE" === e.type ||
                      "DROP_ANIMATE" === e.type ||
                      "FLUSH" === e.type
                    );
                  })(r) &&
                  t.stop(),
                e(r);
            };
          };
        },
        En = function () {
          var e = [];
          return {
            add: function (t) {
              var r = setTimeout(function () {
                  return (function (t) {
                    var r = St(e, function (e) {
                      return e.timerId === t;
                    });
                    -1 === r && nt(!1), e.splice(r, 1)[0].callback();
                  })(r);
                }),
                n = { timerId: r, callback: t };
              e.push(n);
            },
            flush: function () {
              if (e.length) {
                var t = [].concat(e);
                (e.length = 0),
                  t.forEach(function (e) {
                    clearTimeout(e.timerId), e.callback();
                  });
              }
            },
          };
        },
        An = function (e, t) {
          kr(), t(), Zr();
        },
        wn = function (e, t) {
          return {
            draggableId: e.draggable.id,
            type: e.droppable.type,
            source: { droppableId: e.droppable.id, index: e.draggable.index },
            mode: t,
          };
        },
        xn = function (e, t, r, n) {
          if (e) {
            var a = (function (e) {
              var t = !1,
                r = !1,
                n = setTimeout(function () {
                  r = !0;
                }),
                a = function (a) {
                  t || r || ((t = !0), e(a), clearTimeout(n));
                };
              return (
                (a.wasCalled = function () {
                  return t;
                }),
                a
              );
            })(r);
            e(t, { announce: a }), a.wasCalled() || r(n(t));
          } else r(n(t));
        },
        In = function (e, t) {
          var r = (function (e, t) {
            var r = En(),
              n = null,
              a = function (r) {
                n || nt(!1),
                  (n = null),
                  An(0, function () {
                    return xn(e().onDragEnd, r, t, pt);
                  });
              };
            return {
              beforeCapture: function (t, r) {
                n && nt(!1),
                  An(0, function () {
                    var n = e().onBeforeCapture;
                    n && n({ draggableId: t, mode: r });
                  });
              },
              beforeStart: function (t, r) {
                n && nt(!1),
                  An(0, function () {
                    var n = e().onBeforeDragStart;
                    n && n(wn(t, r));
                  });
              },
              start: function (a, i) {
                n && nt(!1);
                var o = wn(a, i);
                (n = {
                  mode: i,
                  lastCritical: a,
                  lastLocation: o.source,
                  lastCombine: null,
                }),
                  r.add(function () {
                    An(0, function () {
                      return xn(e().onDragStart, o, t, dt);
                    });
                  });
              },
              update: function (a, i) {
                var o = Mt(i),
                  l = kt(i);
                n || nt(!1);
                var s = !(function (e, t) {
                  if (e === t) return !0;
                  var r =
                      e.draggable.id === t.draggable.id &&
                      e.draggable.droppableId === t.draggable.droppableId &&
                      e.draggable.type === t.draggable.type &&
                      e.draggable.index === t.draggable.index,
                    n =
                      e.droppable.id === t.droppable.id &&
                      e.droppable.type === t.droppable.type;
                  return r && n;
                })(a, n.lastCritical);
                s && (n.lastCritical = a);
                var c,
                  d,
                  u =
                    ((d = o),
                    !(
                      (null == (c = n.lastLocation) && null == d) ||
                      (null != c &&
                        null != d &&
                        c.droppableId === d.droppableId &&
                        c.index === d.index)
                    ));
                u && (n.lastLocation = o);
                var p = !(function (e, t) {
                  return (
                    (null == e && null == t) ||
                    (null != e &&
                      null != t &&
                      e.draggableId === t.draggableId &&
                      e.droppableId === t.droppableId)
                  );
                })(n.lastCombine, l);
                if ((p && (n.lastCombine = l), s || u || p)) {
                  var f = (0, M.Z)({}, wn(a, n.mode), {
                    combine: l,
                    destination: o,
                  });
                  r.add(function () {
                    An(0, function () {
                      return xn(e().onDragUpdate, f, t, ut);
                    });
                  });
                }
              },
              flush: function () {
                n || nt(!1), r.flush();
              },
              drop: a,
              abort: function () {
                if (n) {
                  var e = (0, M.Z)({}, wn(n.lastCritical, n.mode), {
                    combine: null,
                    destination: null,
                    reason: "CANCEL",
                  });
                  a(e);
                }
              },
            };
          })(e, t);
          return function (e) {
            return function (t) {
              return function (n) {
                if ("BEFORE_INITIAL_CAPTURE" !== n.type) {
                  if ("INITIAL_PUBLISH" === n.type) {
                    var a = n.payload.critical;
                    return (
                      r.beforeStart(a, n.payload.movementMode),
                      t(n),
                      void r.start(a, n.payload.movementMode)
                    );
                  }
                  if ("DROP_COMPLETE" === n.type) {
                    var i = n.payload.completed.result;
                    return r.flush(), t(n), void r.drop(i);
                  }
                  if ((t(n), "FLUSH" !== n.type)) {
                    var o = e.getState();
                    "DRAGGING" === o.phase && r.update(o.critical, o.impact);
                  } else r.abort();
                } else
                  r.beforeCapture(
                    n.payload.draggableId,
                    n.payload.movementMode
                  );
              };
            };
          };
        },
        Cn = function (e) {
          return function (t) {
            return function (r) {
              if ("DROP_ANIMATION_FINISHED" === r.type) {
                var n = e.getState();
                "DROP_ANIMATING" !== n.phase && nt(!1),
                  e.dispatch(tn({ completed: n.completed }));
              } else t(r);
            };
          };
        },
        Dn = function (e) {
          var t = null,
            r = null;
          return function (n) {
            return function (a) {
              if (
                (("FLUSH" !== a.type &&
                  "DROP_COMPLETE" !== a.type &&
                  "DROP_ANIMATION_FINISHED" !== a.type) ||
                  (r && (cancelAnimationFrame(r), (r = null)),
                  t && (t(), (t = null))),
                n(a),
                "DROP_ANIMATE" === a.type)
              ) {
                var i = {
                  eventName: "scroll",
                  options: { capture: !0, passive: !1, once: !0 },
                  fn: function () {
                    "DROP_ANIMATING" === e.getState().phase &&
                      e.dispatch({
                        type: "DROP_ANIMATION_FINISHED",
                        payload: null,
                      });
                  },
                };
                r = requestAnimationFrame(function () {
                  (r = null), (t = et(window, [i]));
                });
              }
            };
          };
        },
        Nn = function (e) {
          return function (t) {
            return function (r) {
              if ((t(r), "PUBLISH_WHILE_DRAGGING" === r.type)) {
                var n = e.getState();
                "DROP_PENDING" === n.phase &&
                  (n.isWaiting || e.dispatch(rn({ reason: n.reason })));
              }
            };
          };
        },
        Sn = Q,
        Bn = function (e) {
          var t,
            r = e.dimensionMarshal,
            n = e.focusMarshal,
            a = e.styleMarshal,
            i = e.getResponders,
            o = e.announce,
            l = e.autoScroller;
          return V(
            qr,
            Sn(
              (function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                return function (e) {
                  return function () {
                    var r = e.apply(void 0, arguments),
                      n = function () {
                        throw new Error(F(15));
                      },
                      a = {
                        getState: r.getState,
                        dispatch: function () {
                          return n.apply(void 0, arguments);
                        },
                      },
                      i = t.map(function (e) {
                        return e(a);
                      });
                    return (
                      (n = Q.apply(void 0, i)(r.dispatch)),
                      G(G({}, r), {}, { dispatch: n })
                    );
                  };
                };
              })(
                ((t = a),
                function () {
                  return function (e) {
                    return function (r) {
                      "INITIAL_PUBLISH" === r.type && t.dragging(),
                        "DROP_ANIMATE" === r.type &&
                          t.dropping(r.payload.completed.result.reason),
                        ("FLUSH" !== r.type && "DROP_COMPLETE" !== r.type) ||
                          t.resting(),
                        e(r);
                    };
                  };
                }),
                (function (e) {
                  return function () {
                    return function (t) {
                      return function (r) {
                        ("DROP_COMPLETE" !== r.type &&
                          "FLUSH" !== r.type &&
                          "DROP_ANIMATE" !== r.type) ||
                          e.stopPublishing(),
                          t(r);
                      };
                    };
                  };
                })(r),
                (function (e) {
                  return function (t) {
                    var r = t.getState,
                      n = t.dispatch;
                    return function (t) {
                      return function (a) {
                        if ("LIFT" === a.type) {
                          var i = a.payload,
                            o = i.id,
                            l = i.clientSelection,
                            s = i.movementMode,
                            c = r();
                          "DROP_ANIMATING" === c.phase &&
                            n(tn({ completed: c.completed })),
                            "IDLE" !== r().phase && nt(!1),
                            n({ type: "FLUSH", payload: null }),
                            n({
                              type: "BEFORE_INITIAL_CAPTURE",
                              payload: { draggableId: o, movementMode: s },
                            });
                          var d = {
                              draggableId: o,
                              scrollOptions: {
                                shouldPublishImmediately: "SNAP" === s,
                              },
                            },
                            u = e.startPublishing(d),
                            p = u.critical,
                            f = u.dimensions,
                            m = u.viewport;
                          n({
                            type: "INITIAL_PUBLISH",
                            payload: {
                              critical: p,
                              dimensions: f,
                              clientSelection: l,
                              movementMode: s,
                              viewport: m,
                            },
                          });
                        } else t(a);
                      };
                    };
                  };
                })(r),
                vn,
                Cn,
                Dn,
                Nn,
                (function (e) {
                  return function (t) {
                    return function (r) {
                      return function (n) {
                        if (
                          (function (e) {
                            return (
                              "DROP_COMPLETE" === e.type ||
                              "DROP_ANIMATE" === e.type ||
                              "FLUSH" === e.type
                            );
                          })(n)
                        )
                          return e.stop(), void r(n);
                        if ("INITIAL_PUBLISH" === n.type) {
                          r(n);
                          var a = t.getState();
                          return (
                            "DRAGGING" !== a.phase && nt(!1), void e.start(a)
                          );
                        }
                        r(n), e.scroll(t.getState());
                      };
                    };
                  };
                })(l),
                yn,
                (function (e) {
                  var t = !1;
                  return function () {
                    return function (r) {
                      return function (n) {
                        if ("INITIAL_PUBLISH" === n.type)
                          return (
                            (t = !0),
                            e.tryRecordFocus(n.payload.critical.draggable.id),
                            r(n),
                            void e.tryRestoreFocusRecorded()
                          );
                        if ((r(n), t)) {
                          if ("FLUSH" === n.type)
                            return (t = !1), void e.tryRestoreFocusRecorded();
                          if ("DROP_COMPLETE" === n.type) {
                            t = !1;
                            var a = n.payload.completed.result;
                            a.combine &&
                              e.tryShiftRecord(
                                a.draggableId,
                                a.combine.draggableId
                              ),
                              e.tryRestoreFocusRecorded();
                          }
                        }
                      };
                    };
                  };
                })(n),
                In(i, o)
              )
            )
          );
        };
      var Rn = function (e) {
          var t = e.scrollHeight,
            r = e.scrollWidth,
            n = e.height,
            a = e.width,
            i = gt({ x: r, y: t }, { x: a, y: n });
          return { x: Math.max(0, i.x), y: Math.max(0, i.y) };
        },
        On = function () {
          var e = document.documentElement;
          return e || nt(!1), e;
        },
        Pn = function () {
          var e = On();
          return Rn({
            scrollHeight: e.scrollHeight,
            scrollWidth: e.scrollWidth,
            width: e.clientWidth,
            height: e.clientHeight,
          });
        },
        _n = function (e) {
          var t = e.critical,
            r = e.scrollOptions,
            n = e.registry;
          kr();
          var a,
            i,
            o,
            l,
            s,
            c,
            d,
            u =
              ((a = bn()),
              (i = Pn()),
              (o = a.y),
              (l = a.x),
              (s = On()),
              (c = s.clientWidth),
              (d = s.clientHeight),
              {
                frame: Fe({ top: o, left: l, right: l + c, bottom: o + d }),
                scroll: {
                  initial: a,
                  current: a,
                  max: i,
                  diff: { value: ft, displacement: ft },
                },
              }),
            p = u.scroll.current,
            f = t.droppable,
            m = n.droppable.getAllByType(f.type).map(function (e) {
              return e.callbacks.getDimensionAndWatchScroll(p, r);
            }),
            g = n.draggable.getAllByType(t.draggable.type).map(function (e) {
              return e.getDimension(p);
            }),
            v = { draggables: Pt(g), droppables: Ot(m) };
          return Zr(), { dimensions: v, critical: t, viewport: u };
        };
      function Tn(e, t, r) {
        return (
          r.descriptor.id !== t.id &&
          r.descriptor.type === t.type &&
          "virtual" ===
            e.droppable.getById(r.descriptor.droppableId).descriptor.mode
        );
      }
      var Ln,
        Mn,
        kn = function (e, t) {
          var r = null,
            n = (function (e) {
              var t = e.registry,
                r = e.callbacks,
                n = { additions: {}, removals: {}, modified: {} },
                a = null,
                i = function () {
                  a ||
                    (r.collectionStarting(),
                    (a = requestAnimationFrame(function () {
                      (a = null), kr();
                      var e = n,
                        i = e.additions,
                        o = e.removals,
                        l = e.modified,
                        s = Object.keys(i)
                          .map(function (e) {
                            return t.draggable.getById(e).getDimension(ft);
                          })
                          .sort(function (e, t) {
                            return e.descriptor.index - t.descriptor.index;
                          }),
                        c = Object.keys(l).map(function (e) {
                          return {
                            droppableId: e,
                            scroll: t.droppable
                              .getById(e)
                              .callbacks.getScrollWhileDragging(),
                          };
                        }),
                        d = {
                          additions: s,
                          removals: Object.keys(o),
                          modified: c,
                        };
                      (n = { additions: {}, removals: {}, modified: {} }),
                        Zr(),
                        r.publish(d);
                    })));
                };
              return {
                add: function (e) {
                  var t = e.descriptor.id;
                  (n.additions[t] = e),
                    (n.modified[e.descriptor.droppableId] = !0),
                    n.removals[t] && delete n.removals[t],
                    i();
                },
                remove: function (e) {
                  var t = e.descriptor;
                  (n.removals[t.id] = !0),
                    (n.modified[t.droppableId] = !0),
                    n.additions[t.id] && delete n.additions[t.id],
                    i();
                },
                stop: function () {
                  a &&
                    (cancelAnimationFrame(a),
                    (a = null),
                    (n = { additions: {}, removals: {}, modified: {} }));
                },
              };
            })({
              callbacks: {
                publish: t.publishWhileDragging,
                collectionStarting: t.collectionStarting,
              },
              registry: e,
            }),
            a = function (t) {
              r || nt(!1);
              var a = r.critical.draggable;
              "ADDITION" === t.type && Tn(e, a, t.value) && n.add(t.value),
                "REMOVAL" === t.type && Tn(e, a, t.value) && n.remove(t.value);
            },
            i = {
              updateDroppableIsEnabled: function (n, a) {
                e.droppable.exists(n) || nt(!1),
                  r && t.updateDroppableIsEnabled({ id: n, isEnabled: a });
              },
              updateDroppableIsCombineEnabled: function (n, a) {
                r &&
                  (e.droppable.exists(n) || nt(!1),
                  t.updateDroppableIsCombineEnabled({
                    id: n,
                    isCombineEnabled: a,
                  }));
              },
              scrollDroppable: function (t, n) {
                r && e.droppable.getById(t).callbacks.scroll(n);
              },
              updateDroppableScroll: function (n, a) {
                r &&
                  (e.droppable.exists(n) || nt(!1),
                  t.updateDroppableScroll({ id: n, newScroll: a }));
              },
              startPublishing: function (t) {
                r && nt(!1);
                var n = e.draggable.getById(t.draggableId),
                  i = e.droppable.getById(n.descriptor.droppableId),
                  o = { draggable: n.descriptor, droppable: i.descriptor },
                  l = e.subscribe(a);
                return (
                  (r = { critical: o, unsubscribe: l }),
                  _n({
                    critical: o,
                    registry: e,
                    scrollOptions: t.scrollOptions,
                  })
                );
              },
              stopPublishing: function () {
                if (r) {
                  n.stop();
                  var t = r.critical.droppable;
                  e.droppable.getAllByType(t.type).forEach(function (e) {
                    return e.callbacks.dragStopped();
                  }),
                    r.unsubscribe(),
                    (r = null);
                }
              },
            };
          return i;
        },
        Zn = function (e, t) {
          return (
            "IDLE" === e.phase ||
            ("DROP_ANIMATING" === e.phase &&
              e.completed.result.draggableId !== t &&
              "DROP" === e.completed.result.reason)
          );
        },
        Gn = function (e) {
          window.scrollBy(e.x, e.y);
        },
        Fn = (0, Ke.default)(function (e) {
          return _t(e).filter(function (e) {
            return !!e.isEnabled && !!e.frame;
          });
        }),
        $n = function (e) {
          var t = e.center,
            r = e.destination,
            n = e.droppables;
          if (r) {
            var a = n[r];
            return a.frame ? a : null;
          }
          var i = (function (e, t) {
            var r = Bt(Fn(t), function (t) {
              return t.frame || nt(!1), Cr(t.frame.pageMarginBox)(e);
            });
            return r;
          })(t, n);
          return i;
        },
        Un = 0.25,
        jn = 0.05,
        qn = 28,
        Vn = function (e) {
          return Math.pow(e, 2);
        },
        Wn = { stopDampeningAt: 1200, accelerateAt: 360 },
        Hn = function (e) {
          var t = e.startOfRange,
            r = e.endOfRange,
            n = e.current,
            a = r - t;
          return 0 === a ? 0 : (n - t) / a;
        },
        Qn = Wn.accelerateAt,
        zn = Wn.stopDampeningAt,
        Kn = function (e) {
          var t = e.distanceToEdge,
            r = e.thresholds,
            n = e.dragStartTime,
            a = e.shouldUseTimeDampening,
            i = (function (e, t) {
              if (e > t.startScrollingFrom) return 0;
              if (e <= t.maxScrollValueAt) return qn;
              if (e === t.startScrollingFrom) return 1;
              var r = Hn({
                  startOfRange: t.maxScrollValueAt,
                  endOfRange: t.startScrollingFrom,
                  current: e,
                }),
                n = qn * Vn(1 - r);
              return Math.ceil(n);
            })(t, r);
          return 0 === i
            ? 0
            : a
            ? Math.max(
                (function (e, t) {
                  var r = t,
                    n = zn,
                    a = Date.now() - r;
                  if (a >= zn) return e;
                  if (a < Qn) return 1;
                  var i = Hn({ startOfRange: Qn, endOfRange: n, current: a }),
                    o = e * Vn(i);
                  return Math.ceil(o);
                })(i, n),
                1
              )
            : i;
        },
        Jn = function (e) {
          var t = e.container,
            r = e.distanceToEdges,
            n = e.dragStartTime,
            a = e.axis,
            i = e.shouldUseTimeDampening,
            o = (function (e, t) {
              return {
                startScrollingFrom: e[t.size] * Un,
                maxScrollValueAt: e[t.size] * jn,
              };
            })(t, a);
          return r[a.end] < r[a.start]
            ? Kn({
                distanceToEdge: r[a.end],
                thresholds: o,
                dragStartTime: n,
                shouldUseTimeDampening: i,
              })
            : -1 *
                Kn({
                  distanceToEdge: r[a.start],
                  thresholds: o,
                  dragStartTime: n,
                  shouldUseTimeDampening: i,
                });
        },
        Yn = At(function (e) {
          return 0 === e ? 0 : e;
        }),
        Xn = function (e) {
          var t = e.dragStartTime,
            r = e.container,
            n = e.subject,
            a = e.center,
            i = e.shouldUseTimeDampening,
            o = {
              top: a.y - r.top,
              right: r.right - a.x,
              bottom: r.bottom - a.y,
              left: a.x - r.left,
            },
            l = Jn({
              container: r,
              distanceToEdges: o,
              dragStartTime: t,
              axis: Wt,
              shouldUseTimeDampening: i,
            }),
            s = Jn({
              container: r,
              distanceToEdges: o,
              dragStartTime: t,
              axis: Ht,
              shouldUseTimeDampening: i,
            }),
            c = Yn({ x: s, y: l });
          if (vt(c, ft)) return null;
          var d = (function (e) {
            var t = e.container,
              r = e.subject,
              n = e.proposedScroll,
              a = r.height > t.height,
              i = r.width > t.width;
            return i || a
              ? i && a
                ? null
                : { x: i ? 0 : n.x, y: a ? 0 : n.y }
              : n;
          })({ container: r, subject: n, proposedScroll: c });
          return d ? (vt(d, ft) ? null : d) : null;
        },
        ea = At(function (e) {
          return 0 === e ? 0 : e > 0 ? 1 : -1;
        }),
        ta =
          ((Ln = function (e, t) {
            return e < 0 ? e : e > t ? e - t : 0;
          }),
          function (e) {
            var t = e.current,
              r = e.max,
              n = e.change,
              a = mt(t, n),
              i = { x: Ln(a.x, r.x), y: Ln(a.y, r.y) };
            return vt(i, ft) ? null : i;
          }),
        ra = function (e) {
          var t = e.max,
            r = e.current,
            n = e.change,
            a = { x: Math.max(r.x, t.x), y: Math.max(r.y, t.y) },
            i = ea(n),
            o = ta({ max: a, current: r, change: i });
          return !o || (0 !== i.x && 0 === o.x) || (0 !== i.y && 0 === o.y);
        },
        na = function (e, t) {
          return ra({
            current: e.scroll.current,
            max: e.scroll.max,
            change: t,
          });
        },
        aa = function (e, t) {
          var r = e.frame;
          return (
            !!r &&
            ra({ current: r.scroll.current, max: r.scroll.max, change: t })
          );
        },
        ia = function (e) {
          var t = e.state,
            r = e.dragStartTime,
            n = e.shouldUseTimeDampening,
            a = e.scrollWindow,
            i = e.scrollDroppable,
            o = t.current.page.borderBoxCenter,
            l = t.dimensions.draggables[t.critical.draggable.id].page.marginBox;
          if (t.isWindowScrollAllowed) {
            var s = (function (e) {
              var t = e.viewport,
                r = e.subject,
                n = e.center,
                a = e.dragStartTime,
                i = e.shouldUseTimeDampening,
                o = Xn({
                  dragStartTime: a,
                  container: t.frame,
                  subject: r,
                  center: n,
                  shouldUseTimeDampening: i,
                });
              return o && na(t, o) ? o : null;
            })({
              dragStartTime: r,
              viewport: t.viewport,
              subject: l,
              center: o,
              shouldUseTimeDampening: n,
            });
            if (s) return void a(s);
          }
          var c = $n({
            center: o,
            destination: wr(t.impact),
            droppables: t.dimensions.droppables,
          });
          if (c) {
            var d = (function (e) {
              var t = e.droppable,
                r = e.subject,
                n = e.center,
                a = e.dragStartTime,
                i = e.shouldUseTimeDampening,
                o = t.frame;
              if (!o) return null;
              var l = Xn({
                dragStartTime: a,
                container: o.pageMarginBox,
                subject: r,
                center: n,
                shouldUseTimeDampening: i,
              });
              return l && aa(t, l) ? l : null;
            })({
              dragStartTime: r,
              droppable: c,
              subject: l,
              center: o,
              shouldUseTimeDampening: n,
            });
            d && i(c.descriptor.id, d);
          }
        },
        oa = function (e) {
          var t = e.move,
            r = e.scrollDroppable,
            n = e.scrollWindow,
            a = function (e, t) {
              if (!aa(e, t)) return t;
              var n = (function (e, t) {
                var r = e.frame;
                return r && aa(e, t)
                  ? ta({
                      current: r.scroll.current,
                      max: r.scroll.max,
                      change: t,
                    })
                  : null;
              })(e, t);
              if (!n) return r(e.descriptor.id, t), null;
              var a = gt(t, n);
              return r(e.descriptor.id, a), gt(t, a);
            },
            i = function (e, t, r) {
              if (!e) return r;
              if (!na(t, r)) return r;
              var a = (function (e, t) {
                if (!na(e, t)) return null;
                var r = e.scroll.max,
                  n = e.scroll.current;
                return ta({ current: n, max: r, change: t });
              })(t, r);
              if (!a) return n(r), null;
              var i = gt(r, a);
              return n(i), gt(r, i);
            };
          return function (e) {
            var r = e.scrollJumpRequest;
            if (r) {
              var n = wr(e.impact);
              n || nt(!1);
              var o = a(e.dimensions.droppables[n], r);
              if (o) {
                var l = e.viewport,
                  s = i(e.isWindowScrollAllowed, l, o);
                s &&
                  (function (e, r) {
                    var n = mt(e.current.client.selection, r);
                    t({ client: n });
                  })(e, s);
              }
            }
          };
        },
        la = function (e) {
          var t = e.scrollDroppable,
            r = e.scrollWindow,
            n = e.move,
            a = (function (e) {
              var t = e.scrollWindow,
                r = e.scrollDroppable,
                n = Je(t),
                a = Je(r),
                i = null,
                o = function (e) {
                  i || nt(!1);
                  var t = i,
                    r = t.shouldUseTimeDampening,
                    o = t.dragStartTime;
                  ia({
                    state: e,
                    scrollWindow: n,
                    scrollDroppable: a,
                    dragStartTime: o,
                    shouldUseTimeDampening: r,
                  });
                };
              return {
                start: function (e) {
                  kr(), i && nt(!1);
                  var t = Date.now(),
                    r = !1,
                    n = function () {
                      r = !0;
                    };
                  ia({
                    state: e,
                    dragStartTime: 0,
                    shouldUseTimeDampening: !1,
                    scrollWindow: n,
                    scrollDroppable: n,
                  }),
                    (i = { dragStartTime: t, shouldUseTimeDampening: r }),
                    Zr(),
                    r && o(e);
                },
                stop: function () {
                  i && (n.cancel(), a.cancel(), (i = null));
                },
                scroll: o,
              };
            })({ scrollWindow: r, scrollDroppable: t }),
            i = oa({ move: n, scrollWindow: r, scrollDroppable: t });
          return {
            scroll: function (e) {
              "DRAGGING" === e.phase &&
                ("FLUID" !== e.movementMode
                  ? e.scrollJumpRequest && i(e)
                  : a.scroll(e));
            },
            start: a.start,
            stop: a.stop,
          };
        },
        sa = {
          base: (Mn = "data-rbd-drag-handle"),
          draggableId: Mn + "-draggable-id",
          contextId: Mn + "-context-id",
        },
        ca = (function () {
          var e = "data-rbd-draggable";
          return { base: e, contextId: e + "-context-id", id: e + "-id" };
        })(),
        da = (function () {
          var e = "data-rbd-droppable";
          return { base: e, contextId: e + "-context-id", id: e + "-id" };
        })(),
        ua = { contextId: "data-rbd-scroll-container-context-id" },
        pa = function (e, t) {
          return e
            .map(function (e) {
              var r = e.styles[t];
              return r ? e.selector + " { " + r + " }" : "";
            })
            .join(" ");
        },
        fa =
          "undefined" != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement
            ? n.useLayoutEffect
            : n.useEffect,
        ma = function () {
          var e = document.querySelector("head");
          return e || nt(!1), e;
        },
        ga = function (e) {
          var t = document.createElement("style");
          return e && t.setAttribute("nonce", e), (t.type = "text/css"), t;
        };
      function va(e, t) {
        var r = ke(
            function () {
              return (function (e) {
                var t,
                  r,
                  n = (function (e) {
                    return function (t) {
                      return "[" + t + '="' + e + '"]';
                    };
                  })(e),
                  a =
                    ((t =
                      "\n      cursor: -webkit-grab;\n      cursor: grab;\n    "),
                    {
                      selector: n(sa.contextId),
                      styles: {
                        always:
                          "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                        resting: t,
                        dragging: "pointer-events: none;",
                        dropAnimating: t,
                      },
                    }),
                  i = [
                    ((r = "\n      transition: " + cn.outOfTheWay + ";\n    "),
                    {
                      selector: n(ca.contextId),
                      styles: { dragging: r, dropAnimating: r, userCancel: r },
                    }),
                    a,
                    {
                      selector: n(da.contextId),
                      styles: { always: "overflow-anchor: none;" },
                    },
                    {
                      selector: "body",
                      styles: {
                        dragging:
                          "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      ",
                      },
                    },
                  ];
                return {
                  always: pa(i, "always"),
                  resting: pa(i, "resting"),
                  dragging: pa(i, "dragging"),
                  dropAnimating: pa(i, "dropAnimating"),
                  userCancel: pa(i, "userCancel"),
                };
              })(e);
            },
            [e]
          ),
          a = (0, n.useRef)(null),
          i = (0, n.useRef)(null),
          o = Ze(
            (0, Ke.default)(function (e) {
              var t = i.current;
              t || nt(!1), (t.textContent = e);
            }),
            []
          ),
          l = Ze(function (e) {
            var t = a.current;
            t || nt(!1), (t.textContent = e);
          }, []);
        fa(
          function () {
            (a.current || i.current) && nt(!1);
            var n = ga(t),
              s = ga(t);
            return (
              (a.current = n),
              (i.current = s),
              n.setAttribute("data-rbd-always", e),
              s.setAttribute("data-rbd-dynamic", e),
              ma().appendChild(n),
              ma().appendChild(s),
              l(r.always),
              o(r.resting),
              function () {
                var e = function (e) {
                  var t = e.current;
                  t || nt(!1), ma().removeChild(t), (e.current = null);
                };
                e(a), e(i);
              }
            );
          },
          [t, l, o, r.always, r.resting, e]
        );
        var s = Ze(
            function () {
              return o(r.dragging);
            },
            [o, r.dragging]
          ),
          c = Ze(
            function (e) {
              o("DROP" !== e ? r.userCancel : r.dropAnimating);
            },
            [o, r.dropAnimating, r.userCancel]
          ),
          d = Ze(
            function () {
              i.current && o(r.resting);
            },
            [o, r.resting]
          );
        return ke(
          function () {
            return { dragging: s, dropping: c, resting: d };
          },
          [s, c, d]
        );
      }
      var ba = function (e) {
        return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
      };
      function ha(e) {
        return e instanceof ba(e).HTMLElement;
      }
      function ya(e, t) {
        var r = "[" + sa.contextId + '="' + e + '"]',
          n = Rt(document.querySelectorAll(r));
        if (!n.length) return null;
        var a = Bt(n, function (e) {
          return e.getAttribute(sa.draggableId) === t;
        });
        return a && ha(a) ? a : null;
      }
      function Ea() {
        var e = { draggables: {}, droppables: {} },
          t = [];
        function r(e) {
          t.length &&
            t.forEach(function (t) {
              return t(e);
            });
        }
        function n(t) {
          return e.draggables[t] || null;
        }
        function a(t) {
          return e.droppables[t] || null;
        }
        return {
          draggable: {
            register: function (t) {
              (e.draggables[t.descriptor.id] = t),
                r({ type: "ADDITION", value: t });
            },
            update: function (t, r) {
              var n = e.draggables[r.descriptor.id];
              n &&
                n.uniqueId === t.uniqueId &&
                (delete e.draggables[r.descriptor.id],
                (e.draggables[t.descriptor.id] = t));
            },
            unregister: function (t) {
              var a = t.descriptor.id,
                i = n(a);
              i &&
                t.uniqueId === i.uniqueId &&
                (delete e.draggables[a], r({ type: "REMOVAL", value: t }));
            },
            getById: function (e) {
              var t = n(e);
              return t || nt(!1), t;
            },
            findById: n,
            exists: function (e) {
              return Boolean(n(e));
            },
            getAllByType: function (t) {
              return Nt(e.draggables).filter(function (e) {
                return e.descriptor.type === t;
              });
            },
          },
          droppable: {
            register: function (t) {
              e.droppables[t.descriptor.id] = t;
            },
            unregister: function (t) {
              var r = a(t.descriptor.id);
              r &&
                t.uniqueId === r.uniqueId &&
                delete e.droppables[t.descriptor.id];
            },
            getById: function (e) {
              var t = a(e);
              return t || nt(!1), t;
            },
            findById: a,
            exists: function (e) {
              return Boolean(a(e));
            },
            getAllByType: function (t) {
              return Nt(e.droppables).filter(function (e) {
                return e.descriptor.type === t;
              });
            },
          },
          subscribe: function (e) {
            return (
              t.push(e),
              function () {
                var r = t.indexOf(e);
                -1 !== r && t.splice(r, 1);
              }
            );
          },
          clean: function () {
            (e.draggables = {}), (e.droppables = {}), (t.length = 0);
          },
        };
      }
      var Aa = n.createContext(null),
        wa = function () {
          var e = document.body;
          return e || nt(!1), e;
        },
        xa = {
          position: "absolute",
          width: "1px",
          height: "1px",
          margin: "-1px",
          border: "0",
          padding: "0",
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          "clip-path": "inset(100%)",
        };
      var Ia = 0,
        Ca = { separator: "::" };
      function Da(e, t) {
        return (
          void 0 === t && (t = Ca),
          ke(
            function () {
              return "" + e + t.separator + Ia++;
            },
            [t.separator, e]
          )
        );
      }
      var Na = n.createContext(null);
      function Sa(e) {
        0;
      }
      function Ba(e, t) {
        Sa();
      }
      function Ra() {
        Ba();
      }
      function Oa(e) {
        var t = (0, n.useRef)(e);
        return (
          (0, n.useEffect)(function () {
            t.current = e;
          }),
          t
        );
      }
      var Pa,
        _a = (((Pa = {})[13] = !0), (Pa[9] = !0), Pa),
        Ta = function (e) {
          _a[e.keyCode] && e.preventDefault();
        },
        La = (function () {
          var e = "visibilitychange";
          return "undefined" == typeof document
            ? e
            : Bt([e, "ms" + e, "webkit" + e, "moz" + e, "o" + e], function (e) {
                return "on" + e in document;
              }) || e;
        })();
      var Ma,
        ka = { type: "IDLE" };
      function Za(e) {
        var t = e.cancel,
          r = e.completed,
          n = e.getPhase,
          a = e.setPhase;
        return [
          {
            eventName: "mousemove",
            fn: function (e) {
              var t = e.button,
                r = e.clientX,
                i = e.clientY;
              if (0 === t) {
                var o = { x: r, y: i },
                  l = n();
                if ("DRAGGING" === l.type)
                  return e.preventDefault(), void l.actions.move(o);
                "PENDING" !== l.type && nt(!1);
                var s = l.point;
                if (
                  ((c = s),
                  (d = o),
                  Math.abs(d.x - c.x) >= 5 || Math.abs(d.y - c.y) >= 5)
                ) {
                  var c, d;
                  e.preventDefault();
                  var u = l.actions.fluidLift(o);
                  a({ type: "DRAGGING", actions: u });
                }
              }
            },
          },
          {
            eventName: "mouseup",
            fn: function (e) {
              var a = n();
              "DRAGGING" === a.type
                ? (e.preventDefault(),
                  a.actions.drop({ shouldBlockNextClick: !0 }),
                  r())
                : t();
            },
          },
          {
            eventName: "mousedown",
            fn: function (e) {
              "DRAGGING" === n().type && e.preventDefault(), t();
            },
          },
          {
            eventName: "keydown",
            fn: function (e) {
              if ("PENDING" !== n().type)
                return 27 === e.keyCode
                  ? (e.preventDefault(), void t())
                  : void Ta(e);
              t();
            },
          },
          { eventName: "resize", fn: t },
          {
            eventName: "scroll",
            options: { passive: !0, capture: !1 },
            fn: function () {
              "PENDING" === n().type && t();
            },
          },
          {
            eventName: "webkitmouseforcedown",
            fn: function (e) {
              var r = n();
              "IDLE" === r.type && nt(!1),
                r.actions.shouldRespectForcePress() ? t() : e.preventDefault();
            },
          },
          { eventName: La, fn: t },
        ];
      }
      function Ga() {}
      var Fa =
        (((Ma = {})[34] = !0), (Ma[33] = !0), (Ma[36] = !0), (Ma[35] = !0), Ma);
      function $a(e, t) {
        function r() {
          t(), e.cancel();
        }
        return [
          {
            eventName: "keydown",
            fn: function (n) {
              return 27 === n.keyCode
                ? (n.preventDefault(), void r())
                : 32 === n.keyCode
                ? (n.preventDefault(), t(), void e.drop())
                : 40 === n.keyCode
                ? (n.preventDefault(), void e.moveDown())
                : 38 === n.keyCode
                ? (n.preventDefault(), void e.moveUp())
                : 39 === n.keyCode
                ? (n.preventDefault(), void e.moveRight())
                : 37 === n.keyCode
                ? (n.preventDefault(), void e.moveLeft())
                : void (Fa[n.keyCode] ? n.preventDefault() : Ta(n));
            },
          },
          { eventName: "mousedown", fn: r },
          { eventName: "mouseup", fn: r },
          { eventName: "click", fn: r },
          { eventName: "touchstart", fn: r },
          { eventName: "resize", fn: r },
          { eventName: "wheel", fn: r, options: { passive: !0 } },
          { eventName: La, fn: r },
        ];
      }
      var Ua = { type: "IDLE" };
      var ja = {
        input: !0,
        button: !0,
        textarea: !0,
        select: !0,
        option: !0,
        optgroup: !0,
        video: !0,
        audio: !0,
      };
      function qa(e, t) {
        if (null == t) return !1;
        if (Boolean(ja[t.tagName.toLowerCase()])) return !0;
        var r = t.getAttribute("contenteditable");
        return "true" === r || "" === r || (t !== e && qa(e, t.parentElement));
      }
      function Va(e, t) {
        var r = t.target;
        return !!ha(r) && qa(e, r);
      }
      var Wa = function (e) {
        return Fe(e.getBoundingClientRect()).center;
      };
      var Ha = (function () {
        var e = "matches";
        return "undefined" == typeof document
          ? e
          : Bt([e, "msMatchesSelector", "webkitMatchesSelector"], function (e) {
              return e in Element.prototype;
            }) || e;
      })();
      function Qa(e, t) {
        return null == e ? null : e[Ha](t) ? e : Qa(e.parentElement, t);
      }
      function za(e, t) {
        return e.closest ? e.closest(t) : Qa(e, t);
      }
      function Ka(e, t) {
        var r,
          n = t.target;
        if (!((r = n) instanceof ba(r).Element)) return null;
        var a = (function (e) {
            return "[" + sa.contextId + '="' + e + '"]';
          })(e),
          i = za(n, a);
        return i && ha(i) ? i : null;
      }
      function Ja(e) {
        e.preventDefault();
      }
      function Ya(e) {
        var t = e.expected,
          r = e.phase,
          n = e.isLockActive;
        e.shouldWarn;
        return !!n() && t === r;
      }
      function Xa(e) {
        var t = e.lockAPI,
          r = e.store,
          n = e.registry,
          a = e.draggableId;
        if (t.isClaimed()) return !1;
        var i = n.draggable.findById(a);
        return !!i && !!i.options.isEnabled && !!Zn(r.getState(), a);
      }
      function ei(e) {
        var t = e.lockAPI,
          r = e.contextId,
          n = e.store,
          a = e.registry,
          i = e.draggableId,
          o = e.forceSensorStop,
          l = e.sourceEvent;
        if (!Xa({ lockAPI: t, store: n, registry: a, draggableId: i }))
          return null;
        var s = a.draggable.getById(i),
          c = (function (e, t) {
            var r = "[" + ca.contextId + '="' + e + '"]',
              n = Bt(Rt(document.querySelectorAll(r)), function (e) {
                return e.getAttribute(ca.id) === t;
              });
            return n && ha(n) ? n : null;
          })(r, s.descriptor.id);
        if (!c) return null;
        if (l && !s.options.canDragInteractiveElements && Va(c, l)) return null;
        var d = t.claim(o || Xe),
          u = "PRE_DRAG";
        function p() {
          return s.options.shouldRespectForcePress;
        }
        function f() {
          return t.isActive(d);
        }
        var m = function (e, t) {
          Ya({ expected: e, phase: u, isLockActive: f, shouldWarn: !0 }) &&
            n.dispatch(t());
        }.bind(null, "DRAGGING");
        function g(e) {
          function r() {
            t.release(), (u = "COMPLETED");
          }
          function a(t, a) {
            if (
              (void 0 === a && (a = { shouldBlockNextClick: !1 }),
              e.cleanup(),
              a.shouldBlockNextClick)
            ) {
              var i = et(window, [
                {
                  eventName: "click",
                  fn: Ja,
                  options: { once: !0, passive: !1, capture: !0 },
                },
              ]);
              setTimeout(i);
            }
            r(), n.dispatch(rn({ reason: t }));
          }
          return (
            "PRE_DRAG" !== u && (r(), "PRE_DRAG" !== u && nt(!1)),
            n.dispatch(
              (function (e) {
                return { type: "LIFT", payload: e };
              })(e.liftActionArgs)
            ),
            (u = "DRAGGING"),
            (0, M.Z)(
              {
                isActive: function () {
                  return Ya({
                    expected: "DRAGGING",
                    phase: u,
                    isLockActive: f,
                    shouldWarn: !1,
                  });
                },
                shouldRespectForcePress: p,
                drop: function (e) {
                  return a("DROP", e);
                },
                cancel: function (e) {
                  return a("CANCEL", e);
                },
              },
              e.actions
            )
          );
        }
        return {
          isActive: function () {
            return Ya({
              expected: "PRE_DRAG",
              phase: u,
              isLockActive: f,
              shouldWarn: !1,
            });
          },
          shouldRespectForcePress: p,
          fluidLift: function (e) {
            var t = Je(function (e) {
                m(function () {
                  return Kr({ client: e });
                });
              }),
              r = g({
                liftActionArgs: {
                  id: i,
                  clientSelection: e,
                  movementMode: "FLUID",
                },
                cleanup: function () {
                  return t.cancel();
                },
                actions: { move: t },
              });
            return (0, M.Z)({}, r, { move: t });
          },
          snapLift: function () {
            var e = {
              moveUp: function () {
                return m(Jr);
              },
              moveRight: function () {
                return m(Xr);
              },
              moveDown: function () {
                return m(Yr);
              },
              moveLeft: function () {
                return m(en);
              },
            };
            return g({
              liftActionArgs: {
                id: i,
                clientSelection: Wa(c),
                movementMode: "SNAP",
              },
              cleanup: Xe,
              actions: e,
            });
          },
          abort: function () {
            Ya({
              expected: "PRE_DRAG",
              phase: u,
              isLockActive: f,
              shouldWarn: !0,
            }) && t.release();
          },
        };
      }
      var ti = [
        function (e) {
          var t = (0, n.useRef)(ka),
            r = (0, n.useRef)(Xe),
            a = ke(
              function () {
                return {
                  eventName: "mousedown",
                  fn: function (t) {
                    if (
                      !t.defaultPrevented &&
                      0 === t.button &&
                      !(t.ctrlKey || t.metaKey || t.shiftKey || t.altKey)
                    ) {
                      var n = e.findClosestDraggableId(t);
                      if (n) {
                        var a = e.tryGetLock(n, l, { sourceEvent: t });
                        if (a) {
                          t.preventDefault();
                          var i = { x: t.clientX, y: t.clientY };
                          r.current(), d(a, i);
                        }
                      }
                    }
                  },
                };
              },
              [e]
            ),
            i = ke(
              function () {
                return {
                  eventName: "webkitmouseforcewillbegin",
                  fn: function (t) {
                    if (!t.defaultPrevented) {
                      var r = e.findClosestDraggableId(t);
                      if (r) {
                        var n = e.findOptionsForDraggable(r);
                        n &&
                          (n.shouldRespectForcePress ||
                            (e.canGetLock(r) && t.preventDefault()));
                      }
                    }
                  },
                };
              },
              [e]
            ),
            o = Ze(
              function () {
                r.current = et(window, [i, a], { passive: !1, capture: !0 });
              },
              [i, a]
            ),
            l = Ze(
              function () {
                "IDLE" !== t.current.type &&
                  ((t.current = ka), r.current(), o());
              },
              [o]
            ),
            s = Ze(
              function () {
                var e = t.current;
                l(),
                  "DRAGGING" === e.type &&
                    e.actions.cancel({ shouldBlockNextClick: !0 }),
                  "PENDING" === e.type && e.actions.abort();
              },
              [l]
            ),
            c = Ze(
              function () {
                var e = Za({
                  cancel: s,
                  completed: l,
                  getPhase: function () {
                    return t.current;
                  },
                  setPhase: function (e) {
                    t.current = e;
                  },
                });
                r.current = et(window, e, { capture: !0, passive: !1 });
              },
              [s, l]
            ),
            d = Ze(
              function (e, r) {
                "IDLE" !== t.current.type && nt(!1),
                  (t.current = { type: "PENDING", point: r, actions: e }),
                  c();
              },
              [c]
            );
          fa(
            function () {
              return (
                o(),
                function () {
                  r.current();
                }
              );
            },
            [o]
          );
        },
        function (e) {
          var t = (0, n.useRef)(Ga),
            r = ke(
              function () {
                return {
                  eventName: "keydown",
                  fn: function (r) {
                    if (!r.defaultPrevented && 32 === r.keyCode) {
                      var n = e.findClosestDraggableId(r);
                      if (n) {
                        var i = e.tryGetLock(n, s, { sourceEvent: r });
                        if (i) {
                          r.preventDefault();
                          var o = !0,
                            l = i.snapLift();
                          t.current(),
                            (t.current = et(window, $a(l, s), {
                              capture: !0,
                              passive: !1,
                            }));
                        }
                      }
                    }
                    function s() {
                      o || nt(!1), (o = !1), t.current(), a();
                    }
                  },
                };
              },
              [e]
            ),
            a = Ze(
              function () {
                t.current = et(window, [r], { passive: !1, capture: !0 });
              },
              [r]
            );
          fa(
            function () {
              return (
                a(),
                function () {
                  t.current();
                }
              );
            },
            [a]
          );
        },
        function (e) {
          var t = (0, n.useRef)(Ua),
            r = (0, n.useRef)(Xe),
            a = Ze(function () {
              return t.current;
            }, []),
            i = Ze(function (e) {
              t.current = e;
            }, []),
            o = ke(
              function () {
                return {
                  eventName: "touchstart",
                  fn: function (t) {
                    if (!t.defaultPrevented) {
                      var n = e.findClosestDraggableId(t);
                      if (n) {
                        var a = e.tryGetLock(n, s, { sourceEvent: t });
                        if (a) {
                          var i = t.touches[0],
                            o = { x: i.clientX, y: i.clientY };
                          r.current(), p(a, o);
                        }
                      }
                    }
                  },
                };
              },
              [e]
            ),
            l = Ze(
              function () {
                r.current = et(window, [o], { capture: !0, passive: !1 });
              },
              [o]
            ),
            s = Ze(
              function () {
                var e = t.current;
                "IDLE" !== e.type &&
                  ("PENDING" === e.type && clearTimeout(e.longPressTimerId),
                  i(Ua),
                  r.current(),
                  l());
              },
              [l, i]
            ),
            c = Ze(
              function () {
                var e = t.current;
                s(),
                  "DRAGGING" === e.type &&
                    e.actions.cancel({ shouldBlockNextClick: !0 }),
                  "PENDING" === e.type && e.actions.abort();
              },
              [s]
            ),
            d = Ze(
              function () {
                var e = { capture: !0, passive: !1 },
                  t = { cancel: c, completed: s, getPhase: a },
                  n = et(
                    window,
                    (function (e) {
                      var t = e.cancel,
                        r = e.completed,
                        n = e.getPhase;
                      return [
                        {
                          eventName: "touchmove",
                          options: { capture: !1 },
                          fn: function (e) {
                            var r = n();
                            if ("DRAGGING" === r.type) {
                              r.hasMoved = !0;
                              var a = e.touches[0],
                                i = { x: a.clientX, y: a.clientY };
                              e.preventDefault(), r.actions.move(i);
                            } else t();
                          },
                        },
                        {
                          eventName: "touchend",
                          fn: function (e) {
                            var a = n();
                            "DRAGGING" === a.type
                              ? (e.preventDefault(),
                                a.actions.drop({ shouldBlockNextClick: !0 }),
                                r())
                              : t();
                          },
                        },
                        {
                          eventName: "touchcancel",
                          fn: function (e) {
                            "DRAGGING" === n().type
                              ? (e.preventDefault(), t())
                              : t();
                          },
                        },
                        {
                          eventName: "touchforcechange",
                          fn: function (e) {
                            var r = n();
                            "IDLE" === r.type && nt(!1);
                            var a = e.touches[0];
                            if (a && a.force >= 0.15) {
                              var i = r.actions.shouldRespectForcePress();
                              if ("PENDING" !== r.type)
                                return i
                                  ? r.hasMoved
                                    ? void e.preventDefault()
                                    : void t()
                                  : void e.preventDefault();
                              i && t();
                            }
                          },
                        },
                        { eventName: La, fn: t },
                      ];
                    })(t),
                    e
                  ),
                  i = et(
                    window,
                    (function (e) {
                      var t = e.cancel,
                        r = e.getPhase;
                      return [
                        { eventName: "orientationchange", fn: t },
                        { eventName: "resize", fn: t },
                        {
                          eventName: "contextmenu",
                          fn: function (e) {
                            e.preventDefault();
                          },
                        },
                        {
                          eventName: "keydown",
                          fn: function (e) {
                            "DRAGGING" === r().type
                              ? (27 === e.keyCode && e.preventDefault(), t())
                              : t();
                          },
                        },
                        { eventName: La, fn: t },
                      ];
                    })(t),
                    e
                  );
                r.current = function () {
                  n(), i();
                };
              },
              [c, a, s]
            ),
            u = Ze(
              function () {
                var e = a();
                "PENDING" !== e.type && nt(!1);
                var t = e.actions.fluidLift(e.point);
                i({ type: "DRAGGING", actions: t, hasMoved: !1 });
              },
              [a, i]
            ),
            p = Ze(
              function (e, t) {
                "IDLE" !== a().type && nt(!1);
                var r = setTimeout(u, 120);
                i({
                  type: "PENDING",
                  point: t,
                  actions: e,
                  longPressTimerId: r,
                }),
                  d();
              },
              [d, a, i, u]
            );
          fa(
            function () {
              return (
                l(),
                function () {
                  r.current();
                  var e = a();
                  "PENDING" === e.type &&
                    (clearTimeout(e.longPressTimerId), i(Ua));
                }
              );
            },
            [a, l, i]
          ),
            fa(function () {
              return et(window, [
                {
                  eventName: "touchmove",
                  fn: function () {},
                  options: { capture: !1, passive: !1 },
                },
              ]);
            }, []);
        },
      ];
      function ri(e) {
        var t = e.contextId,
          r = e.store,
          a = e.registry,
          i = e.customSensors,
          o = e.enableDefaultSensors,
          l = [].concat(o ? ti : [], i || []),
          s = (0, n.useState)(function () {
            return (function () {
              var e = null;
              function t() {
                e || nt(!1), (e = null);
              }
              return {
                isClaimed: function () {
                  return Boolean(e);
                },
                isActive: function (t) {
                  return t === e;
                },
                claim: function (t) {
                  e && nt(!1);
                  var r = { abandon: t };
                  return (e = r), r;
                },
                release: t,
                tryAbandon: function () {
                  e && (e.abandon(), t());
                },
              };
            })();
          })[0],
          c = Ze(
            function (e, t) {
              e.isDragging && !t.isDragging && s.tryAbandon();
            },
            [s]
          );
        fa(
          function () {
            var e = r.getState();
            return r.subscribe(function () {
              var t = r.getState();
              c(e, t), (e = t);
            });
          },
          [s, r, c]
        ),
          fa(
            function () {
              return s.tryAbandon;
            },
            [s.tryAbandon]
          );
        var d = Ze(
            function (e) {
              return Xa({ lockAPI: s, registry: a, store: r, draggableId: e });
            },
            [s, a, r]
          ),
          u = Ze(
            function (e, n, i) {
              return ei({
                lockAPI: s,
                registry: a,
                contextId: t,
                store: r,
                draggableId: e,
                forceSensorStop: n,
                sourceEvent: i && i.sourceEvent ? i.sourceEvent : null,
              });
            },
            [t, s, a, r]
          ),
          p = Ze(
            function (e) {
              return (function (e, t) {
                var r = Ka(e, t);
                return r ? r.getAttribute(sa.draggableId) : null;
              })(t, e);
            },
            [t]
          ),
          f = Ze(
            function (e) {
              var t = a.draggable.findById(e);
              return t ? t.options : null;
            },
            [a.draggable]
          ),
          m = Ze(
            function () {
              s.isClaimed() &&
                (s.tryAbandon(),
                "IDLE" !== r.getState().phase &&
                  r.dispatch({ type: "FLUSH", payload: null }));
            },
            [s, r]
          ),
          g = Ze(s.isClaimed, [s]),
          v = ke(
            function () {
              return {
                canGetLock: d,
                tryGetLock: u,
                findClosestDraggableId: p,
                findOptionsForDraggable: f,
                tryReleaseLock: m,
                isLockClaimed: g,
              };
            },
            [d, u, p, f, m, g]
          );
        Sa();
        for (var b = 0; b < l.length; b++) l[b](v);
      }
      function ni(e) {
        return e.current || nt(!1), e.current;
      }
      function ai(e) {
        var t = e.contextId,
          r = e.setCallbacks,
          a = e.sensors,
          i = e.nonce,
          o = e.dragHandleUsageInstructions,
          l = (0, n.useRef)(null);
        Ra();
        var s = Oa(e),
          c = Ze(
            function () {
              return (function (e) {
                return {
                  onBeforeCapture: e.onBeforeCapture,
                  onBeforeDragStart: e.onBeforeDragStart,
                  onDragStart: e.onDragStart,
                  onDragEnd: e.onDragEnd,
                  onDragUpdate: e.onDragUpdate,
                };
              })(s.current);
            },
            [s]
          ),
          d = (function (e) {
            var t = ke(
                function () {
                  return (function (e) {
                    return "rbd-announcement-" + e;
                  })(e);
                },
                [e]
              ),
              r = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(
                function () {
                  var e = document.createElement("div");
                  return (
                    (r.current = e),
                    (e.id = t),
                    e.setAttribute("aria-live", "assertive"),
                    e.setAttribute("aria-atomic", "true"),
                    (0, M.Z)(e.style, xa),
                    wa().appendChild(e),
                    function () {
                      setTimeout(function () {
                        var t = wa();
                        t.contains(e) && t.removeChild(e),
                          e === r.current && (r.current = null);
                      });
                    }
                  );
                },
                [t]
              ),
              Ze(function (e) {
                var t = r.current;
                t && (t.textContent = e);
              }, [])
            );
          })(t),
          u = (function (e) {
            var t = e.contextId,
              r = e.text,
              a = Da("hidden-text", { separator: "-" }),
              i = ke(
                function () {
                  return (
                    "rbd-hidden-text-" +
                    (e = { contextId: t, uniqueId: a }).contextId +
                    "-" +
                    e.uniqueId
                  );
                  var e;
                },
                [a, t]
              );
            return (
              (0, n.useEffect)(
                function () {
                  var e = document.createElement("div");
                  return (
                    (e.id = i),
                    (e.textContent = r),
                    (e.style.display = "none"),
                    wa().appendChild(e),
                    function () {
                      var t = wa();
                      t.contains(e) && t.removeChild(e);
                    }
                  );
                },
                [i, r]
              ),
              i
            );
          })({ contextId: t, text: o }),
          p = va(t, i),
          f = Ze(function (e) {
            ni(l).dispatch(e);
          }, []),
          m = ke(
            function () {
              return H(
                {
                  publishWhileDragging: Vr,
                  updateDroppableScroll: Hr,
                  updateDroppableIsEnabled: Qr,
                  updateDroppableIsCombineEnabled: zr,
                  collectionStarting: Wr,
                },
                f
              );
            },
            [f]
          ),
          g = (function () {
            var e = ke(Ea, []);
            return (
              (0, n.useEffect)(
                function () {
                  return function () {
                    requestAnimationFrame(e.clean);
                  };
                },
                [e]
              ),
              e
            );
          })(),
          v = ke(
            function () {
              return kn(g, m);
            },
            [g, m]
          ),
          b = ke(
            function () {
              return la(
                (0, M.Z)(
                  { scrollWindow: Gn, scrollDroppable: v.scrollDroppable },
                  H({ move: Kr }, f)
                )
              );
            },
            [v.scrollDroppable, f]
          ),
          h = (function (e) {
            var t = (0, n.useRef)({}),
              r = (0, n.useRef)(null),
              a = (0, n.useRef)(null),
              i = (0, n.useRef)(!1),
              o = Ze(function (e, r) {
                var n = { id: e, focus: r };
                return (
                  (t.current[e] = n),
                  function () {
                    var r = t.current;
                    r[e] !== n && delete r[e];
                  }
                );
              }, []),
              l = Ze(
                function (t) {
                  var r = ya(e, t);
                  r && r !== document.activeElement && r.focus();
                },
                [e]
              ),
              s = Ze(function (e, t) {
                r.current === e && (r.current = t);
              }, []),
              c = Ze(
                function () {
                  a.current ||
                    (i.current &&
                      (a.current = requestAnimationFrame(function () {
                        a.current = null;
                        var e = r.current;
                        e && l(e);
                      })));
                },
                [l]
              ),
              d = Ze(function (e) {
                r.current = null;
                var t = document.activeElement;
                t && t.getAttribute(sa.draggableId) === e && (r.current = e);
              }, []);
            return (
              fa(function () {
                return (
                  (i.current = !0),
                  function () {
                    i.current = !1;
                    var e = a.current;
                    e && cancelAnimationFrame(e);
                  }
                );
              }, []),
              ke(
                function () {
                  return {
                    register: o,
                    tryRecordFocus: d,
                    tryRestoreFocusRecorded: c,
                    tryShiftRecord: s,
                  };
                },
                [o, d, c, s]
              )
            );
          })(t),
          y = ke(
            function () {
              return Bn({
                announce: d,
                autoScroller: b,
                dimensionMarshal: v,
                focusMarshal: h,
                getResponders: c,
                styleMarshal: p,
              });
            },
            [d, b, v, h, c, p]
          );
        l.current = y;
        var E = Ze(function () {
            var e = ni(l);
            "IDLE" !== e.getState().phase &&
              e.dispatch({ type: "FLUSH", payload: null });
          }, []),
          A = Ze(function () {
            var e = ni(l).getState();
            return e.isDragging || "DROP_ANIMATING" === e.phase;
          }, []);
        r(
          ke(
            function () {
              return { isDragging: A, tryAbort: E };
            },
            [A, E]
          )
        );
        var w = Ze(function (e) {
            return Zn(ni(l).getState(), e);
          }, []),
          x = Ze(function () {
            return Ir(ni(l).getState());
          }, []),
          I = ke(
            function () {
              return {
                marshal: v,
                focus: h,
                contextId: t,
                canLift: w,
                isMovementAllowed: x,
                dragHandleUsageInstructionsId: u,
                registry: g,
              };
            },
            [t, v, u, h, w, x, g]
          );
        return (
          ri({
            contextId: t,
            store: y,
            registry: g,
            customSensors: a,
            enableDefaultSensors: !1 !== e.enableDefaultSensors,
          }),
          (0, n.useEffect)(
            function () {
              return E;
            },
            [E]
          ),
          n.createElement(
            Na.Provider,
            { value: I },
            n.createElement(te, { context: Aa, store: y }, e.children)
          )
        );
      }
      var ii = 0;
      function oi(e) {
        var t = ke(function () {
            return "" + ii++;
          }, []),
          r = e.dragHandleUsageInstructions || ct;
        return n.createElement(at, null, function (a) {
          return n.createElement(
            ai,
            {
              nonce: e.nonce,
              contextId: t,
              setCallbacks: a,
              dragHandleUsageInstructions: r,
              enableDefaultSensors: e.enableDefaultSensors,
              sensors: e.sensors,
              onBeforeCapture: e.onBeforeCapture,
              onBeforeDragStart: e.onBeforeDragStart,
              onDragStart: e.onDragStart,
              onDragUpdate: e.onDragUpdate,
              onDragEnd: e.onDragEnd,
            },
            e.children
          );
        });
      }
      var li = function (e) {
          return function (t) {
            return e === t;
          };
        },
        si = li("scroll"),
        ci = li("auto"),
        di =
          (li("visible"),
          function (e, t) {
            return t(e.overflowX) || t(e.overflowY);
          }),
        ui = function (e) {
          var t = window.getComputedStyle(e),
            r = { overflowX: t.overflowX, overflowY: t.overflowY };
          return di(r, si) || di(r, ci);
        },
        pi = function e(t) {
          return null == t ||
            t === document.body ||
            t === document.documentElement
            ? null
            : ui(t)
            ? t
            : e(t.parentElement);
        },
        fi = function (e) {
          return { x: e.scrollLeft, y: e.scrollTop };
        },
        mi = function e(t) {
          return (
            !!t &&
            ("fixed" === window.getComputedStyle(t).position ||
              e(t.parentElement))
          );
        },
        gi = function (e) {
          return { closestScrollable: pi(e), isFixedOnPage: mi(e) };
        },
        vi = function (e) {
          var t = e.ref,
            r = e.descriptor,
            n = e.env,
            a = e.windowScroll,
            i = e.direction,
            o = e.isDropDisabled,
            l = e.isCombineEnabled,
            s = e.shouldClipSubject,
            c = n.closestScrollable,
            d = (function (e, t) {
              var r = ze(e);
              if (!t) return r;
              if (e !== t) return r;
              var n = r.paddingBox.top - t.scrollTop,
                a = r.paddingBox.left - t.scrollLeft,
                i = n + t.scrollHeight,
                o = a + t.scrollWidth,
                l = $e({ top: n, right: o, bottom: i, left: a }, r.border);
              return qe({
                borderBox: l,
                margin: r.margin,
                border: r.border,
                padding: r.padding,
              });
            })(t, c),
            u = He(d, a),
            p = (function () {
              if (!c) return null;
              var e = ze(c),
                t = {
                  scrollHeight: c.scrollHeight,
                  scrollWidth: c.scrollWidth,
                };
              return {
                client: e,
                page: He(e, a),
                scroll: fi(c),
                scrollSize: t,
                shouldClipSubject: s,
              };
            })(),
            f = (function (e) {
              var t = e.descriptor,
                r = e.isEnabled,
                n = e.isCombineEnabled,
                a = e.isFixedOnPage,
                i = e.direction,
                o = e.client,
                l = e.page,
                s = e.closest,
                c = (function () {
                  if (!s) return null;
                  var e = s.scrollSize,
                    t = s.client,
                    r = Rn({
                      scrollHeight: e.scrollHeight,
                      scrollWidth: e.scrollWidth,
                      height: t.paddingBox.height,
                      width: t.paddingBox.width,
                    });
                  return {
                    pageMarginBox: s.page.marginBox,
                    frameClient: t,
                    scrollSize: e,
                    shouldClipSubject: s.shouldClipSubject,
                    scroll: {
                      initial: s.scroll,
                      current: s.scroll,
                      max: r,
                      diff: { value: ft, displacement: ft },
                    },
                  };
                })(),
                d = "vertical" === i ? Wt : Ht;
              return {
                descriptor: t,
                isCombineEnabled: n,
                isFixedOnPage: a,
                axis: d,
                isEnabled: r,
                client: o,
                page: l,
                frame: c,
                subject: Ct({
                  page: l,
                  withPlaceholder: null,
                  axis: d,
                  frame: c,
                }),
              };
            })({
              descriptor: r,
              isEnabled: !o,
              isCombineEnabled: l,
              isFixedOnPage: n.isFixedOnPage,
              direction: i,
              client: d,
              page: u,
              closest: p,
            });
          return f;
        },
        bi = { passive: !1 },
        hi = { passive: !0 },
        yi = function (e) {
          return e.shouldPublishImmediately ? bi : hi;
        };
      function Ei(e) {
        var t = (0, n.useContext)(e);
        return t || nt(!1), t;
      }
      var Ai = function (e) {
        return (e && e.env.closestScrollable) || null;
      };
      function wi() {}
      var xi = {
          width: 0,
          height: 0,
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        Ii = function (e) {
          var t = e.isAnimatingOpenOnMount,
            r = e.placeholder,
            n = e.animate,
            a = (function (e) {
              var t = e.isAnimatingOpenOnMount,
                r = e.placeholder,
                n = e.animate;
              return t || "close" === n
                ? xi
                : {
                    height: r.client.borderBox.height,
                    width: r.client.borderBox.width,
                    margin: r.client.margin,
                  };
            })({ isAnimatingOpenOnMount: t, placeholder: r, animate: n });
          return {
            display: r.display,
            boxSizing: "border-box",
            width: a.width,
            height: a.height,
            marginTop: a.margin.top,
            marginRight: a.margin.right,
            marginBottom: a.margin.bottom,
            marginLeft: a.margin.left,
            flexShrink: "0",
            flexGrow: "0",
            pointerEvents: "none",
            transition: "none" !== n ? cn.placeholder : null,
          };
        };
      var Ci = n.memo(function (e) {
          var t = (0, n.useRef)(null),
            r = Ze(function () {
              t.current && (clearTimeout(t.current), (t.current = null));
            }, []),
            a = e.animate,
            i = e.onTransitionEnd,
            o = e.onClose,
            l = e.contextId,
            s = (0, n.useState)("open" === e.animate),
            c = s[0],
            d = s[1];
          (0, n.useEffect)(
            function () {
              return c
                ? "open" !== a
                  ? (r(), d(!1), wi)
                  : t.current
                  ? wi
                  : ((t.current = setTimeout(function () {
                      (t.current = null), d(!1);
                    })),
                    r)
                : wi;
            },
            [a, c, r]
          );
          var u = Ze(
              function (e) {
                "height" === e.propertyName && (i(), "close" === a && o());
              },
              [a, o, i]
            ),
            p = Ii({
              isAnimatingOpenOnMount: c,
              animate: e.animate,
              placeholder: e.placeholder,
            });
          return n.createElement(e.placeholder.tagName, {
            style: p,
            "data-rbd-placeholder-context-id": l,
            onTransitionEnd: u,
            ref: e.innerRef,
          });
        }),
        Di = n.createContext(null);
      var Ni = (function (e) {
          function t() {
            for (
              var t, r = arguments.length, n = new Array(r), a = 0;
              a < r;
              a++
            )
              n[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(n)) || this).state = {
                isVisible: Boolean(t.props.on),
                data: t.props.on,
                animate: t.props.shouldAnimate && t.props.on ? "open" : "none",
              }),
              (t.onClose = function () {
                "close" === t.state.animate && t.setState({ isVisible: !1 });
              }),
              t
            );
          }
          return (
            (0, L.Z)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.shouldAnimate
                ? e.on
                  ? { isVisible: !0, data: e.on, animate: "open" }
                  : t.isVisible
                  ? { isVisible: !0, data: t.data, animate: "close" }
                  : { isVisible: !1, animate: "close", data: null }
                : { isVisible: Boolean(e.on), data: e.on, animate: "none" };
            }),
            (t.prototype.render = function () {
              if (!this.state.isVisible) return null;
              var e = {
                onClose: this.onClose,
                data: this.state.data,
                animate: this.state.animate,
              };
              return this.props.children(e);
            }),
            t
          );
        })(n.PureComponent),
        Si = 5e3,
        Bi = 4500,
        Ri = function (e, t) {
          return t ? cn.drop(t.duration) : e ? cn.snap : cn.fluid;
        },
        Oi = function (e, t) {
          return e ? (t ? on.drop : on.combining) : null;
        };
      function Pi(e) {
        return "DRAGGING" === e.type
          ? (function (e) {
              var t = e.dimension.client,
                r = e.offset,
                n = e.combineWith,
                a = e.dropping,
                i = Boolean(n),
                o = (function (e) {
                  return null != e.forceShouldAnimate
                    ? e.forceShouldAnimate
                    : "SNAP" === e.mode;
                })(e),
                l = Boolean(a),
                s = l ? pn(r, i) : un(r);
              return {
                position: "fixed",
                top: t.marginBox.top,
                left: t.marginBox.left,
                boxSizing: "border-box",
                width: t.borderBox.width,
                height: t.borderBox.height,
                transition: Ri(o, a),
                transform: s,
                opacity: Oi(i, l),
                zIndex: l ? Bi : Si,
                pointerEvents: "none",
              };
            })(e)
          : {
              transform: un((t = e).offset),
              transition: t.shouldAnimateDisplacement ? null : "none",
            };
        var t;
      }
      function _i(e) {
        var t = Da("draggable"),
          r = e.descriptor,
          a = e.registry,
          i = e.getDraggableRef,
          o = e.canDragInteractiveElements,
          l = e.shouldRespectForcePress,
          s = e.isEnabled,
          c = ke(
            function () {
              return {
                canDragInteractiveElements: o,
                shouldRespectForcePress: l,
                isEnabled: s,
              };
            },
            [o, s, l]
          ),
          d = Ze(
            function (e) {
              var t = i();
              return (
                t || nt(!1),
                (function (e, t, r) {
                  void 0 === r && (r = ft);
                  var n = window.getComputedStyle(t),
                    a = t.getBoundingClientRect(),
                    i = Qe(a, n),
                    o = He(i, r);
                  return {
                    descriptor: e,
                    placeholder: {
                      client: i,
                      tagName: t.tagName.toLowerCase(),
                      display: n.display,
                    },
                    displaceBy: { x: i.marginBox.width, y: i.marginBox.height },
                    client: i,
                    page: o,
                  };
                })(r, t, e)
              );
            },
            [r, i]
          ),
          u = ke(
            function () {
              return {
                uniqueId: t,
                descriptor: r,
                options: c,
                getDimension: d,
              };
            },
            [r, d, c, t]
          ),
          p = (0, n.useRef)(u),
          f = (0, n.useRef)(!0);
        fa(
          function () {
            return (
              a.draggable.register(p.current),
              function () {
                return a.draggable.unregister(p.current);
              }
            );
          },
          [a.draggable]
        ),
          fa(
            function () {
              if (f.current) f.current = !1;
              else {
                var e = p.current;
                (p.current = u), a.draggable.update(u, e);
              }
            },
            [u, a.draggable]
          );
      }
      function Ti(e, t, r) {
        Ba();
      }
      function Li(e) {
        e.preventDefault();
      }
      var Mi = function (e, t) {
          return e === t;
        },
        ki = function (e) {
          var t = e.combine,
            r = e.destination;
          return r ? r.droppableId : t ? t.droppableId : null;
        };
      function Zi(e) {
        return {
          isDragging: !1,
          isDropAnimating: !1,
          isClone: !1,
          dropAnimation: null,
          mode: null,
          draggingOver: null,
          combineTargetFor: e,
          combineWith: null,
        };
      }
      var Gi = {
        mapped: {
          type: "SECONDARY",
          offset: ft,
          combineTargetFor: null,
          shouldAnimateDisplacement: !0,
          snapshot: Zi(null),
        },
      };
      var Fi = _e(
        function () {
          var e,
            t,
            r,
            n =
              ((e = (0, Ke.default)(function (e, t) {
                return { x: e, y: t };
              })),
              (t = (0, Ke.default)(function (e, t, r, n, a) {
                return {
                  isDragging: !0,
                  isClone: t,
                  isDropAnimating: Boolean(a),
                  dropAnimation: a,
                  mode: e,
                  draggingOver: r,
                  combineWith: n,
                  combineTargetFor: null,
                };
              })),
              (r = (0, Ke.default)(function (e, r, n, a, i, o, l) {
                return {
                  mapped: {
                    type: "DRAGGING",
                    dropping: null,
                    draggingOver: i,
                    combineWith: o,
                    mode: r,
                    offset: e,
                    dimension: n,
                    forceShouldAnimate: l,
                    snapshot: t(r, a, i, o, null),
                  },
                };
              })),
              function (n, a) {
                if (n.isDragging) {
                  if (n.critical.draggable.id !== a.draggableId) return null;
                  var i = n.current.client.offset,
                    o = n.dimensions.draggables[a.draggableId],
                    l = wr(n.impact),
                    s =
                      (d = n.impact).at && "COMBINE" === d.at.type
                        ? d.at.combine.draggableId
                        : null,
                    c = n.forceShouldAnimate;
                  return r(e(i.x, i.y), n.movementMode, o, a.isClone, l, s, c);
                }
                var d;
                if ("DROP_ANIMATING" === n.phase) {
                  var u = n.completed;
                  if (u.result.draggableId !== a.draggableId) return null;
                  var p = a.isClone,
                    f = n.dimensions.draggables[a.draggableId],
                    m = u.result,
                    g = m.mode,
                    v = ki(m),
                    b = (function (e) {
                      return e.combine ? e.combine.draggableId : null;
                    })(m),
                    h = {
                      duration: n.dropDuration,
                      curve: an,
                      moveTo: n.newHomeClientOffset,
                      opacity: b ? on.drop : null,
                      scale: b ? ln.drop : null,
                    };
                  return {
                    mapped: {
                      type: "DRAGGING",
                      offset: n.newHomeClientOffset,
                      dimension: f,
                      dropping: h,
                      draggingOver: v,
                      combineWith: b,
                      mode: g,
                      forceShouldAnimate: null,
                      snapshot: t(g, p, v, b, h),
                    },
                  };
                }
                return null;
              }),
            a = (function () {
              var e = (0, Ke.default)(function (e, t) {
                  return { x: e, y: t };
                }),
                t = (0, Ke.default)(Zi),
                r = (0, Ke.default)(function (e, r, n) {
                  return (
                    void 0 === r && (r = null),
                    {
                      mapped: {
                        type: "SECONDARY",
                        offset: e,
                        combineTargetFor: r,
                        shouldAnimateDisplacement: n,
                        snapshot: t(r),
                      },
                    }
                  );
                }),
                n = function (e) {
                  return e ? r(ft, e, !0) : null;
                },
                a = function (t, a, i, o) {
                  var l = i.displaced.visible[t],
                    s = Boolean(o.inVirtualList && o.effected[t]),
                    c = kt(i),
                    d = c && c.draggableId === t ? a : null;
                  if (!l) {
                    if (!s) return n(d);
                    if (i.displaced.invisible[t]) return null;
                    var u = bt(o.displacedBy.point),
                      p = e(u.x, u.y);
                    return r(p, d, !0);
                  }
                  if (s) return n(d);
                  var f = i.displacedBy.point,
                    m = e(f.x, f.y);
                  return r(m, d, l.shouldAnimate);
                };
              return function (e, t) {
                if (e.isDragging)
                  return e.critical.draggable.id === t.draggableId
                    ? null
                    : a(
                        t.draggableId,
                        e.critical.draggable.id,
                        e.impact,
                        e.afterCritical
                      );
                if ("DROP_ANIMATING" === e.phase) {
                  var r = e.completed;
                  return r.result.draggableId === t.draggableId
                    ? null
                    : a(
                        t.draggableId,
                        r.result.draggableId,
                        r.impact,
                        r.afterCritical
                      );
                }
                return null;
              };
            })();
          return function (e, t) {
            return n(e, t) || a(e, t) || Gi;
          };
        },
        { dropAnimationFinished: nn },
        null,
        { context: Aa, pure: !0, areStatePropsEqual: Mi }
      )(function (e) {
        var t = (0, n.useRef)(null),
          r = Ze(function (e) {
            t.current = e;
          }, []),
          a = Ze(function () {
            return t.current;
          }, []),
          i = Ei(Na),
          o = i.contextId,
          l = i.dragHandleUsageInstructionsId,
          s = i.registry,
          c = Ei(Di),
          d = c.type,
          u = c.droppableId,
          p = ke(
            function () {
              return {
                id: e.draggableId,
                index: e.index,
                type: d,
                droppableId: u,
              };
            },
            [e.draggableId, e.index, d, u]
          ),
          f = e.children,
          m = e.draggableId,
          g = e.isEnabled,
          v = e.shouldRespectForcePress,
          b = e.canDragInteractiveElements,
          h = e.isClone,
          y = e.mapped,
          E = e.dropAnimationFinished;
        Ti(),
          Sa(),
          h ||
            _i(
              ke(
                function () {
                  return {
                    descriptor: p,
                    registry: s,
                    getDraggableRef: a,
                    canDragInteractiveElements: b,
                    shouldRespectForcePress: v,
                    isEnabled: g,
                  };
                },
                [p, s, a, b, v, g]
              )
            );
        var A = ke(
            function () {
              return g
                ? {
                    tabIndex: 0,
                    role: "button",
                    "aria-describedby": l,
                    "data-rbd-drag-handle-draggable-id": m,
                    "data-rbd-drag-handle-context-id": o,
                    draggable: !1,
                    onDragStart: Li,
                  }
                : null;
            },
            [o, l, m, g]
          ),
          w = Ze(
            function (e) {
              "DRAGGING" === y.type &&
                y.dropping &&
                "transform" === e.propertyName &&
                E();
            },
            [E, y]
          ),
          x = ke(
            function () {
              var e = Pi(y),
                t = "DRAGGING" === y.type && y.dropping ? w : null;
              return {
                innerRef: r,
                draggableProps: {
                  "data-rbd-draggable-context-id": o,
                  "data-rbd-draggable-id": m,
                  style: e,
                  onTransitionEnd: t,
                },
                dragHandleProps: A,
              };
            },
            [o, A, m, y, w, r]
          ),
          I = ke(
            function () {
              return {
                draggableId: p.id,
                type: p.type,
                source: { index: p.index, droppableId: p.droppableId },
              };
            },
            [p.droppableId, p.id, p.index, p.type]
          );
        return f(x, y.snapshot, I);
      });
      function $i(e) {
        return Ei(Di).isUsingCloneFor !== e.draggableId || e.isClone
          ? n.createElement(Fi, e)
          : null;
      }
      function Ui(e) {
        var t = "boolean" != typeof e.isDragDisabled || !e.isDragDisabled,
          r = Boolean(e.disableInteractiveElementBlocking),
          a = Boolean(e.shouldRespectForcePress);
        return n.createElement(
          $i,
          (0, M.Z)({}, e, {
            isClone: !1,
            isEnabled: t,
            canDragInteractiveElements: r,
            shouldRespectForcePress: a,
          })
        );
      }
      var ji = function (e, t) {
          return e === t.droppable.type;
        },
        qi = function (e, t) {
          return t.draggables[e.draggable.id];
        };
      var Vi = {
          mode: "standard",
          type: "DEFAULT",
          direction: "vertical",
          isDropDisabled: !1,
          isCombineEnabled: !1,
          ignoreContainerClipping: !1,
          renderClone: null,
          getContainerForClone: function () {
            return document.body || nt(!1), document.body;
          },
        },
        Wi = _e(
          function () {
            var e = {
                placeholder: null,
                shouldAnimatePlaceholder: !0,
                snapshot: {
                  isDraggingOver: !1,
                  draggingOverWith: null,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !1,
                },
                useClone: null,
              },
              t = (0, M.Z)({}, e, { shouldAnimatePlaceholder: !1 }),
              r = (0, Ke.default)(function (e) {
                return {
                  draggableId: e.id,
                  type: e.type,
                  source: { index: e.index, droppableId: e.droppableId },
                };
              }),
              n = (0, Ke.default)(function (n, a, i, o, l, s) {
                var c = l.descriptor.id;
                if (l.descriptor.droppableId === n) {
                  var d = s ? { render: s, dragging: r(l.descriptor) } : null,
                    u = {
                      isDraggingOver: i,
                      draggingOverWith: i ? c : null,
                      draggingFromThisWith: c,
                      isUsingPlaceholder: !0,
                    };
                  return {
                    placeholder: l.placeholder,
                    shouldAnimatePlaceholder: !1,
                    snapshot: u,
                    useClone: d,
                  };
                }
                if (!a) return t;
                if (!o) return e;
                var p = {
                  isDraggingOver: i,
                  draggingOverWith: c,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !0,
                };
                return {
                  placeholder: l.placeholder,
                  shouldAnimatePlaceholder: !0,
                  snapshot: p,
                  useClone: null,
                };
              });
            return function (r, a) {
              var i = a.droppableId,
                o = a.type,
                l = !a.isDropDisabled,
                s = a.renderClone;
              if (r.isDragging) {
                var c = r.critical;
                if (!ji(o, c)) return t;
                var d = qi(c, r.dimensions),
                  u = wr(r.impact) === i;
                return n(i, l, u, u, d, s);
              }
              if ("DROP_ANIMATING" === r.phase) {
                var p = r.completed;
                if (!ji(o, p.critical)) return t;
                var f = qi(p.critical, r.dimensions);
                return n(i, l, ki(p.result) === i, wr(p.impact) === i, f, s);
              }
              if ("IDLE" === r.phase && r.completed && !r.shouldFlush) {
                var m = r.completed;
                if (!ji(o, m.critical)) return t;
                var g = wr(m.impact) === i,
                  v = Boolean(m.impact.at && "COMBINE" === m.impact.at.type),
                  b = m.critical.droppable.id === i;
                return g ? (v ? e : t) : b ? e : t;
              }
              return t;
            };
          },
          {
            updateViewportMaxScroll: function (e) {
              return { type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: e };
            },
          },
          null,
          { context: Aa, pure: !0, areStatePropsEqual: Mi }
        )(function (e) {
          var t = (0, n.useContext)(Na);
          t || nt(!1);
          var r = t.contextId,
            a = t.isMovementAllowed,
            i = (0, n.useRef)(null),
            o = (0, n.useRef)(null),
            l = e.children,
            s = e.droppableId,
            c = e.type,
            d = e.mode,
            u = e.direction,
            p = e.ignoreContainerClipping,
            f = e.isDropDisabled,
            m = e.isCombineEnabled,
            g = e.snapshot,
            v = e.useClone,
            b = e.updateViewportMaxScroll,
            h = e.getContainerForClone,
            y = Ze(function () {
              return i.current;
            }, []),
            E = Ze(function (e) {
              i.current = e;
            }, []),
            A =
              (Ze(function () {
                return o.current;
              }, []),
              Ze(function (e) {
                o.current = e;
              }, []));
          Ba();
          var w = Ze(
            function () {
              a() && b({ maxScroll: Pn() });
            },
            [a, b]
          );
          !(function (e) {
            var t = (0, n.useRef)(null),
              r = Ei(Na),
              a = Da("droppable"),
              i = r.registry,
              o = r.marshal,
              l = Oa(e),
              s = ke(
                function () {
                  return { id: e.droppableId, type: e.type, mode: e.mode };
                },
                [e.droppableId, e.mode, e.type]
              ),
              c = (0, n.useRef)(s),
              d = ke(
                function () {
                  return (0, Ke.default)(function (e, r) {
                    t.current || nt(!1);
                    var n = { x: e, y: r };
                    o.updateDroppableScroll(s.id, n);
                  });
                },
                [s.id, o]
              ),
              u = Ze(function () {
                var e = t.current;
                return e && e.env.closestScrollable
                  ? fi(e.env.closestScrollable)
                  : ft;
              }, []),
              p = Ze(
                function () {
                  var e = u();
                  d(e.x, e.y);
                },
                [u, d]
              ),
              f = ke(
                function () {
                  return Je(p);
                },
                [p]
              ),
              m = Ze(
                function () {
                  var e = t.current,
                    r = Ai(e);
                  (e && r) || nt(!1),
                    e.scrollOptions.shouldPublishImmediately ? p() : f();
                },
                [f, p]
              ),
              g = Ze(
                function (e, n) {
                  t.current && nt(!1);
                  var a = l.current,
                    i = a.getDroppableRef();
                  i || nt(!1);
                  var o = gi(i),
                    c = { ref: i, descriptor: s, env: o, scrollOptions: n };
                  t.current = c;
                  var d = vi({
                      ref: i,
                      descriptor: s,
                      env: o,
                      windowScroll: e,
                      direction: a.direction,
                      isDropDisabled: a.isDropDisabled,
                      isCombineEnabled: a.isCombineEnabled,
                      shouldClipSubject: !a.ignoreContainerClipping,
                    }),
                    u = o.closestScrollable;
                  return (
                    u &&
                      (u.setAttribute(ua.contextId, r.contextId),
                      u.addEventListener("scroll", m, yi(c.scrollOptions))),
                    d
                  );
                },
                [r.contextId, s, m, l]
              ),
              v = Ze(function () {
                var e = t.current,
                  r = Ai(e);
                return (e && r) || nt(!1), fi(r);
              }, []),
              b = Ze(
                function () {
                  var e = t.current;
                  e || nt(!1);
                  var r = Ai(e);
                  (t.current = null),
                    r &&
                      (f.cancel(),
                      r.removeAttribute(ua.contextId),
                      r.removeEventListener("scroll", m, yi(e.scrollOptions)));
                },
                [m, f]
              ),
              h = Ze(function (e) {
                var r = t.current;
                r || nt(!1);
                var n = Ai(r);
                n || nt(!1), (n.scrollTop += e.y), (n.scrollLeft += e.x);
              }, []),
              y = ke(
                function () {
                  return {
                    getDimensionAndWatchScroll: g,
                    getScrollWhileDragging: v,
                    dragStopped: b,
                    scroll: h,
                  };
                },
                [b, g, v, h]
              ),
              E = ke(
                function () {
                  return { uniqueId: a, descriptor: s, callbacks: y };
                },
                [y, s, a]
              );
            fa(
              function () {
                return (
                  (c.current = E.descriptor),
                  i.droppable.register(E),
                  function () {
                    t.current && b(), i.droppable.unregister(E);
                  }
                );
              },
              [y, s, b, E, o, i.droppable]
            ),
              fa(
                function () {
                  t.current &&
                    o.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
                },
                [e.isDropDisabled, o]
              ),
              fa(
                function () {
                  t.current &&
                    o.updateDroppableIsCombineEnabled(
                      c.current.id,
                      e.isCombineEnabled
                    );
                },
                [e.isCombineEnabled, o]
              );
          })({
            droppableId: s,
            type: c,
            mode: d,
            direction: u,
            isDropDisabled: f,
            isCombineEnabled: m,
            ignoreContainerClipping: p,
            getDroppableRef: y,
          });
          var x = n.createElement(
              Ni,
              { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
              function (e) {
                var t = e.onClose,
                  a = e.data,
                  i = e.animate;
                return n.createElement(Ci, {
                  placeholder: a,
                  onClose: t,
                  innerRef: A,
                  animate: i,
                  contextId: r,
                  onTransitionEnd: w,
                });
              }
            ),
            I = ke(
              function () {
                return {
                  innerRef: E,
                  placeholder: x,
                  droppableProps: {
                    "data-rbd-droppable-id": s,
                    "data-rbd-droppable-context-id": r,
                  },
                };
              },
              [r, s, x, E]
            ),
            C = v ? v.dragging.draggableId : null,
            D = ke(
              function () {
                return { droppableId: s, type: c, isUsingCloneFor: C };
              },
              [s, C, c]
            );
          return n.createElement(
            Di.Provider,
            { value: D },
            l(I, g),
            (function () {
              if (!v) return null;
              var e = v.dragging,
                t = v.render,
                r = n.createElement(
                  $i,
                  {
                    draggableId: e.draggableId,
                    index: e.source.index,
                    isClone: !0,
                    isEnabled: !0,
                    shouldRespectForcePress: !1,
                    canDragInteractiveElements: !0,
                  },
                  function (r, n) {
                    return t(r, n, e);
                  }
                );
              return Le.createPortal(r, h());
            })()
          );
        });
      Wi.defaultProps = Vi;
      var Hi = r(28630),
        Qi = r(91455),
        zi = r(40684),
        Ki = r(77329),
        Ji = r(2489),
        Yi = r.n(Ji);
      const Xi = (e, t) => {
        const r = [...(e || [])];
        switch (t.type) {
          case "SET_ALL": {
            const { data: e, collapsedState: r, initCollapsed: n } = t;
            return Array.isArray(e)
              ? e.map((e, t) => ({
                  id: (null == e ? void 0 : e.id) || new (Yi())().toHexString(),
                  collapsed: Array.isArray(r)
                    ? r.includes(null == e ? void 0 : e.id)
                    : n,
                  blockType: null == e ? void 0 : e.blockType,
                }))
              : [];
          }
          case "SET_COLLAPSE": {
            const { collapsed: e, id: n } = t,
              a = r.findIndex(({ id: e }) => e === n);
            return a > -1 && r[a] && (r[a].collapsed = e), r;
          }
          case "SET_ALL_COLLAPSED": {
            const { collapse: e } = t;
            return r.map((t) => ({ ...t, collapsed: e }));
          }
          case "ADD": {
            const { rowIndex: e, blockType: n } = t,
              a = {
                id: new (Yi())().toHexString(),
                collapsed: !1,
                blockType: void 0,
              };
            return n && (a.blockType = n), r.splice(e + 1, 0, a), r;
          }
          case "REMOVE": {
            const { rowIndex: e } = t;
            return r.splice(e, 1), r;
          }
          case "MOVE": {
            const { moveFromIndex: e, moveToIndex: n } = t,
              a = { ...r[e] };
            return r.splice(e, 1), r.splice(n, 0, a), r;
          }
          default:
            return e;
        }
      };
      var eo = r(45074),
        to = r(64012),
        ro = r(19826),
        no = r(95050);
      const ao = () =>
        n.createElement(
          "svg",
          {
            width: "25",
            height: "26",
            viewBox: "0 0 25 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "search",
          },
          n.createElement("circle", {
            cx: "11.2069",
            cy: "10.9135",
            r: "5",
            stroke: "#333333",
            strokeWidth: "2",
            className: "stroke",
          }),
          n.createElement("line", {
            x1: "14.914",
            y1: "14.2063",
            x2: "20.5002",
            y2: "19.7925",
            stroke: "#333333",
            strokeWidth: "2",
            className: "stroke",
          })
        );
      r(27775);
      const io = "block-search",
        oo = (e) => {
          const { setSearchTerm: t } = e;
          return n.createElement(
            "div",
            { className: io },
            n.createElement("input", {
              className: "block-search__input",
              placeholder: "Search for a block",
              onChange: (e) => {
                t(e.target.value);
              },
            }),
            n.createElement(ao, null)
          );
        };
      var lo = r(44586);
      const so = () => {
        const [e] = (0, n.useState)(`pattern${(0, lo.Z)()}`),
          [t] = (0, n.useState)(`image${(0, lo.Z)()}`);
        return n.createElement(
          "svg",
          { width: "82", height: "53", viewBox: "0 0 82 53", fill: "none" },
          n.createElement("rect", {
            x: "0.713013",
            width: "80.574",
            height: "52.7791",
            fill: `url(#${e})`,
          }),
          n.createElement(
            "defs",
            null,
            n.createElement(
              "pattern",
              {
                id: `${e}`,
                patternContentUnits: "objectBoundingBox",
                width: "1",
                height: "1",
              },
              n.createElement("use", {
                xlinkHref: `#${t}`,
                transform: "scale(0.00387597 0.00591716)",
              })
            ),
            n.createElement("image", {
              id: t,
              width: "258",
              height: "169",
              xlinkHref:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAACpCAYAAADA4zPJAAALpklEQVR4Ae2dSY/UOhSF+///DCSGHQuEgAVI7BBITAI2zCCGZuhmpqEBP53W8yOvK1UdO3Zyr/NFilJdXalyTo4/X984zlZgQQEUWLwCW4tXAAFQAAUCIMAEKIACgAAPoAAKBECACVAABQABHkABFAiAABOgAAoAAjyAAiggBbhqgA9QAAUAAR5AARQgIsADKIACdA3wAAqggBQgR4APUAAFAAEeQAEUICLAAyiAAnQN8AAKoIAUIEeAD1AABQABHkABFCAiwAMogAJ0DfAACqCAFCBHgA9QAAUAAR5AARQgIsADKIACdA3wAAqggBQgR4APUAAFAAEeQAEUICLAAyiAAnQN8AAKoIAUIEeAD1AABQABHkABFCAiwAMogAJ0DfAACqCAFCBHgA9QAAUAAR5AARQgIsADKIACdA3wAAqggBQgR4APUAAFAAEeQAEUICLAAyiAAnQN8AAKoIAUIEeAD1AABQABHkABFCAiwAMLVmB/fz98+/YtfPr0KXz48CHs7u6GnZ2dg+3Hjx/D169fw48fP8KfP3+aV4muQfOnmAPsKqDKr4r/9u3bsL29PXgVKPb29pqFAiDouoTXzSrw8+fPg5Y+pfL3ffbdu3fh+/fvzekECJo7pRxQVwGF9YoA+ir1mPfUhVB00coCCFo5kxzHigKqqGrBx1T4Tfu+efOmmegAEKzYhzdaUEBdAVXUTRW51P+UVPS+AALvZ5DyryigSGAqCESYeIcBIFixEW94VuDXr1/JVwRiZR671VUFrwsg8HrmKPeKAkoMKok3tkLn7q8oRCDyuAACj2eNMvcqoMFBuZW41H4alORxAQQezxplXlHg9+/fk+cF1sHDYxcBEKxYijc8KvDly5fZo4EIhvfv37uTEBC4O2UU+LACyg2kDhmOlbbWVpcvPS2AwNPZoqy9CigUr1Whc79Xoxk9LYDA09mirL0K1BhCnAuAuJ8iFE8LIPB0tihrrwI1hxHHip2z9XQpERD0Wos3vSig/EBOJZ1iH09XDwCBF8dTzl4FNJx4ikqd8xu6kuFlAQRezhTl7FVAMwjlVNIp9vn8+XNvmS2+aR4E6md56mtZPMktl8niFYMIGU9XDkyDQCdZ47e1eupvtVzxrB0bEUGZM2ISBEoAafLISNa4FWH1PxYUiApo4E70h7UtOYJ4ljK2OrGbLgfpfy1NEZUhEbt0FNA9BtYAEMvjaW5DMxGBWnpN7hBFPGrrfSKIjpd5OVIBa8OLo3c9DTM2AQJRXbdvRgGHbrWP9mVZtgKaanyoZ6b6nPJanrqxs4MgJgRzTxCJxGVDQEevEDzXP7X2E5w8LbOBQLQsOUZ8TCLx9evX4fHjx+HRo0esTjW4efNmKL3eu3cvyBs5sPB2lWsWENSaZlr3gacmEi9fvhyOHTvGiga9Hjh79mwyDJSz8NQtUOQyOQhSEoI5JNY+mrJqyPLy5cvekw8YAGPXA7du3UqKCob6b4hHp/rMZCDITQjmwmBIIvH+/fuAgEjgSA9cuXJlMAh0edtbNCDYTAICjf6a4xKPflO/vW4BBLT83ZZ/3esUEHi6ZNitF1VBIDLqxovcVr3UfipDH6UBASBYV/m77w8FgaeRhF0I6HU1EChpp+Rdqco89nv6EomAABB0K/y610NAoCHxfY3N4Qpn9e8qILAwv3wfODTmoJvIef78+ZH9w3Xm4P3lQOTGjRsbGzSNGfAMgeIRgRKCFkd5HYaCyqiyaj1//jwwIGG41gOnT58Ourp02EPx7zHjVyxFB8UigrkSgvGEpG5jIlEw0ECiO3fusDaowe3bt8PVq1eDwvvU9fr162sh0NqI1tEgsJIQTAVB/Py6RKIlWlOWcQrIo+oSlrpypShADUhLyygQaOYgSwnBWLlTtzoGZkFqydb9xxKBkONZQUSNRqs+yQaBbvRQeJRa6ax+Xsfi6f7xfqvz7lAFVKEVJSjbLzCookc/a6uBQcol6ZKgxgZ4TwYepUsyCBQSeUgI5gJHxmgt7DvKBPwfBZJAIDKW6mflVtQp9tMxeh0hhqVRIEeBQSBQWKQQaYpKaOk3dMyth4Q5pmGf9hQ4EgTqS+3s7CwOAhFIOvZWE0Tt2ZkjylVgIwhaSwjGyp26JZGYay/286JALwiULOubTjy1ArX2ee/jyb2YknJOr8AKCJQk06WT1ipxqeORNiQSpzcqv1hXgf9AsNSEYC4gSCTWNSbfPq0CByBYekIwFwYkEqc1K79WT4GtsdOJ51aiVvZTItHbjLX17MQ3e1Vgq5UKOfdxtHI7ajSy7iYlFxLVaH8LCLa3iyVGlUhMnU7dmsWUK+pOL6dZpxlUZe0slS8PICgIghiV6F4M3ct+6dIlV+vFixcPJmo5d+5c6K4XLlwI+p/l47l27RpdtBF8AAQVQHDmzJm1M94wxVm9Kc6kOzeM5dEAEBQGgR6dRmWvV9mP0lbdM5Z0BQBBYRA8ePAAEMw4B6KeVciSrgAgAARNgQsQpENAewACQAAI8upOU3sBgsIgePjwYVMV66g+ubX/ExHk8QkQFAaB5sA/ceIEMJghT3D8+HHmnczjAF2DeO2/5Pbu3bvh1KlTwGBCGJw8eTI8efIksxqwGxFB4YggAuXVq1fh2bNn4enTp0euL168OJj/QaP4Sq26O1JzLw75/Rqf0czApY5lyPcwfmAczABBJRBEIAzd6ual7nMZx5xWK3eTxkfLjTkW9p1GAUBgBAQRGGMrj7W7SRWV6AYmFtsKAAJjIBAQciqPbgyyPL0cj5YDBMXu7out5lK2QyuPl+nleLScXRgQERiMCLqg2zQLkqIAJdK6n7f+mhmhbcIAEBgHgSp2X+VRlnx3d9cVBLqQGpsLsVmd/JYKEDgAQaxA8bmM1hKCsXypWx4tZwccgMARCFTRFB2kVjjrn2dG6PmBAAicgcB6pc4t36ZcyPzVpP0SAAJAYCbC6MuFtF8FbRwhIAAEZkAQowkeLTc9HAABIDAHAgGBR8tNCwNAAAhMgiBGByQSpwECIAAEpkEgIJBIrA8DQAAIzINAMFAikUfL1QMCIAAELkAQuwqtPVquXtVO+2ZAAAhcgUBAaOHRcmnVtP6nAQEgcAeCGB3ohiuWMgoAAkDgFgQCgm68Ypqy8TAABIDANQgEAxKJgMC9iWOYy3b84+lJJOYDgYiAiKApmGoWpP39/fwasdA9AQEgaAoEMbIqNSP0UrgACABBkyAQEEgkDscYIAAEzYJAMMiZEXp49Wnnk4AAEDQNgthVGDojdDtVO+1IAAEgWAQIBAQSievhAAgAwWJAIBhozAGJxFUgAAJAsCgQxK4C06n/HwaAABAsEgQCAonEvzAABIBgsSCI0QGJxBAAASBYPAgEhKU/lxEQAAJA8K8HljydOiAABIDgkAfio+X+9qDbfwUIDpkg9hvZjr8b0LOGS3suIyAABEQEGzywlOnUAcEGE3hu0Sh7uYhmCdOpAwJAQEQwwAOtJxIBwQAT0LqWa129a9nqcxkBASAgIkj0QIvPZQQEiSbw3qJR/nLRTUuJREAACIgIRniglUQiIBhhAlrXcq2rZy1bmE4dEAACIoJCHvA8nTogKGQCzy0aZS8X2Xh9LiMgAAREBBU84O25jICgggloYcu1sJ619DSdOiAABEQEFT3gJZEICCqawHNrRtnLRjXWE4mAABAQEUzkAcvTqQOCiUxAC1u2hfWsp8Xp1AEBICAimMED1hKJgGAGE3huzSh7ucjG0nTqgAAQEBHM7AEL06kDgplNQAtbroX1rOXciURAAAiICIx4QGMO5kokAgIjJvDcmlH2slHNHM9lBASAgIjAoAemTiQCAoMmoIUt28J61nOqRCIgAAREBMY9MMUsSIDAuAk8t2aUvVxkU3s6dUAACIgIHHmg1nMZAYEjE9DClmthPWtZYzp1QAAIiAiceqDkdOqAwKkJPLdolL1cZFMqkbilkUysaIAH/Hpgb28vjF3+AbSb48mcXO9tAAAAAElFTkSuQmCC",
            })
          )
        );
      };
      r(66047);
      const co = "block-selection",
        uo = (e) => {
          const { addRow: t, addRowIndex: r, block: a, close: i } = e,
            { labels: o, slug: l, imageURL: s, imageAltText: c } = a;
          return n.createElement(
            "button",
            {
              className: co,
              tabIndex: 0,
              type: "button",
              onClick: () => {
                i(), t(r, l);
              },
            },
            n.createElement(
              "div",
              { className: "block-selection__image" },
              s
                ? n.createElement("img", { src: s, alt: c })
                : n.createElement(so, null)
            ),
            n.createElement(
              "div",
              { className: "block-selection__label" },
              o.singular
            )
          );
        };
      r(85680);
      const po = (e) => {
          const { blocks: t, ...r } = e;
          return n.createElement(
            "div",
            { className: "blocks-container" },
            null == t
              ? void 0
              : t.map((e, t) => n.createElement(uo, { key: t, block: e, ...r }))
          );
        },
        fo = (e) => {
          const {
              blocks: t,
              close: r,
              parentIsHovered: a,
              watchParentHover: i,
              ...o
            } = e,
            [l, s] = (0, n.useState)(""),
            [c, d] = (0, n.useState)(t),
            [u, p] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              const e = t.reduce(
                (e, t) => (
                  -1 !== t.slug.toLowerCase().indexOf(l.toLowerCase()) &&
                    e.push(t),
                  e
                ),
                []
              );
              d(e);
            }, [l, t]),
            (0, n.useEffect)(() => {
              !a && !u && r && i && r();
            }, [u, a, r, i]),
            n.createElement(
              "div",
              {
                className: "block-selector",
                onMouseEnter: () => p(!0),
                onMouseLeave: () => p(!1),
              },
              n.createElement(oo, { setSearchTerm: s }),
              n.createElement(po, { blocks: c, close: r, ...o })
            )
          );
        };
      var mo = r(54945),
        go = r(9684),
        vo = r(68133);
      const bo = (0, n.createContext)(!1),
        ho = ({ children: e, withinCollapsible: t = !0 }) =>
          n.createElement(bo.Provider, { value: t }, e),
        yo = () => (0, n.useContext)(bo);
      var Eo = r(65821);
      r(3064);
      const Ao = ({ className: e }) =>
        n.createElement(
          "svg",
          {
            className: ["icon icon--drag-handle", e].filter(Boolean).join(" "),
            viewBox: "0 0 25 25",
            xmlns: "http://www.w3.org/2000/svg",
          },
          n.createElement("circle", {
            cx: "10.468",
            cy: "14.5",
            r: "1",
            className: "fill",
          }),
          n.createElement("circle", {
            cx: "14.532",
            cy: "14.5",
            r: "1",
            className: "fill",
          }),
          n.createElement("circle", {
            cx: "10.468",
            cy: "11.35",
            r: "1",
            className: "fill",
          }),
          n.createElement("circle", {
            cx: "14.532",
            cy: "11.35",
            r: "1",
            className: "fill",
          }),
          n.createElement("circle", {
            cx: "10.468",
            cy: "8.3",
            r: "1",
            className: "fill",
          }),
          n.createElement("circle", {
            cx: "14.532",
            cy: "8.3",
            r: "1",
            className: "fill",
          })
        );
      r(8160);
      const wo = "collapsible",
        xo = ({
          children: e,
          collapsed: t,
          onToggle: r,
          className: a,
          header: i,
          initCollapsed: o,
          dragHandleProps: l,
          actions: s,
        }) => {
          const [c, d] = (0, n.useState)(Boolean(o)),
            [u, p] = (0, n.useState)(!1),
            f = yo(),
            m = "boolean" == typeof t ? t : c;
          return n.createElement(
            "div",
            {
              className: [
                wo,
                a,
                l && `${wo}--has-drag-handle`,
                m && `${wo}--collapsed`,
                f && `${wo}--nested`,
                u && `${wo}--hovered`,
              ]
                .filter(Boolean)
                .join(" "),
            },
            n.createElement(
              ho,
              null,
              n.createElement(
                "div",
                {
                  className: `${wo}__toggle-wrap`,
                  onMouseEnter: () => p(!0),
                  onMouseLeave: () => p(!1),
                },
                l &&
                  n.createElement(
                    "div",
                    { className: `${wo}__drag`, ...l },
                    n.createElement(Ao, null)
                  ),
                n.createElement(
                  "button",
                  {
                    type: "button",
                    className: [
                      `${wo}__toggle`,
                      `${wo}__toggle--${m ? "collapsed" : "open"}`,
                    ]
                      .filter(Boolean)
                      .join(" "),
                    onClick: () => {
                      "function" == typeof r && r(!m), d(!m);
                    },
                  },
                  n.createElement("span", null, "Toggle block")
                ),
                i &&
                  n.createElement(
                    "div",
                    {
                      className: [
                        `${wo}__header-wrap`,
                        l && `${wo}__header-wrap--has-drag-handle`,
                      ]
                        .filter(Boolean)
                        .join(" "),
                    },
                    i && i
                  ),
                n.createElement(
                  "div",
                  { className: `${wo}__actions-wrap` },
                  s &&
                    n.createElement("div", { className: `${wo}__actions` }, s),
                  n.createElement(Eo.Z, { className: `${wo}__indicator` })
                )
              ),
              n.createElement(
                vo.Z,
                { height: m ? 0 : "auto", duration: 200 },
                n.createElement("div", { className: `${wo}__content` }, e)
              )
            )
          );
        };
      r(97165);
      const Io = ({ className: e }) =>
        n.createElement(
          "svg",
          {
            className: ["icon icon--more", e].filter(Boolean).join(" "),
            viewBox: "0 0 25 25",
            xmlns: "http://www.w3.org/2000/svg",
          },
          n.createElement("circle", {
            cx: "16.3872",
            cy: "12.5",
            r: "1",
            className: "fill",
          }),
          n.createElement("circle", {
            cx: "12.3872",
            cy: "12.5",
            r: "1",
            className: "fill",
          }),
          n.createElement("circle", {
            cx: "8.61279",
            cy: "12.5",
            r: "1",
            className: "fill",
          })
        );
      var Co = r(1590),
        Do = r(33636),
        No = r(51265);
      r(39707);
      const So = "array-actions",
        Bo = ({
          moveRow: e,
          index: t,
          rowCount: r,
          addRow: a,
          duplicateRow: i,
          removeRow: o,
        }) =>
          n.createElement(no.Z, {
            horizontalAlign: "center",
            className: So,
            buttonClassName: "array-actions__button",
            button: n.createElement(Io, null),
            render: ({ close: l }) =>
              n.createElement(
                n.Fragment,
                null,
                0 !== t &&
                  n.createElement(
                    "button",
                    {
                      className: "array-actions__action array-actions__move-up",
                      type: "button",
                      onClick: () => {
                        e(t, t - 1), l();
                      },
                    },
                    n.createElement(Eo.Z, null),
                    "Move Up"
                  ),
                t < r - 1 &&
                  n.createElement(
                    "button",
                    {
                      className:
                        "array-actions__action array-actions__move-down",
                      type: "button",
                      onClick: () => {
                        e(t, t + 1), l();
                      },
                    },
                    n.createElement(Eo.Z, null),
                    "Move Down"
                  ),
                n.createElement(
                  "button",
                  {
                    className: "array-actions__action array-actions__add",
                    type: "button",
                    onClick: () => {
                      a(t), l();
                    },
                  },
                  n.createElement(Co.Z, null),
                  "Add Below"
                ),
                n.createElement(
                  "button",
                  {
                    className: "array-actions__action array-actions__duplicate",
                    type: "button",
                    onClick: () => {
                      i(t), l();
                    },
                  },
                  n.createElement(No.Z, null),
                  "Duplicate"
                ),
                n.createElement(
                  "button",
                  {
                    className: "array-actions__action array-actions__remove",
                    type: "button",
                    onClick: () => {
                      o(t), l();
                    },
                  },
                  n.createElement(Do.Z, null),
                  "Remove"
                )
              ),
          });
      var Ro = r(5590),
        Oo = r(83780);
      r(36742);
      const Po = "section-title",
        _o = (e) => {
          const { path: t, readOnly: r } = e,
            { value: a, setValue: i } = (0, c.Z)({ path: t }),
            o = [Po].filter(Boolean).join(" ");
          return n.createElement(
            "div",
            { className: o, "data-value": a },
            n.createElement("input", {
              className: `${Po}__input`,
              id: t,
              value: a || "",
              placeholder: "Untitled",
              type: "text",
              name: t,
              onChange: (e) => {
                e.stopPropagation(), e.preventDefault(), i(e.target.value);
              },
              readOnly: r,
            })
          );
        };
      var To = r(71486);
      const Lo = (e) => {
        const t = document.getElementById(e);
        if (t) {
          const e = t.getBoundingClientRect();
          window.scrollBy({ top: e.top - 100, behavior: "smooth" });
        }
      };
      r(53739);
      const Mo = "blocks-field",
        ko = { singular: "Block", plural: "Blocks" },
        Zo = u()((e) => {
          const {
              label: t,
              name: r,
              path: a,
              blocks: i,
              labels: o = ko,
              fieldTypes: l,
              maxRows: d,
              minRows: u,
              required: f,
              validate: v = p.blocks,
              permissions: b,
              admin: {
                readOnly: h,
                description: y,
                condition: E,
                initCollapsed: A,
                className: w,
              },
            } = e,
            x = a || r,
            { preferencesKey: I } = (0, eo.x5)(),
            { getPreference: C } = (0, Qi.G)(),
            { setPreference: D } = (0, Qi.G)(),
            [N, S] = (0, n.useReducer)(Xi, void 0),
            B = (0, to.useForm)(),
            { user: R } = (0, Hi.a)(),
            { id: O } = (0, eo.x5)(),
            P = (0, zi.bU)(),
            _ = (0, go.T)(),
            { dispatchFields: T } = B,
            L = (0, n.useCallback)(
              (e, t) => v(e, { ...t, minRows: u, maxRows: d, required: f }),
              [d, u, f, v]
            ),
            [M, k] = (0, n.useState)(!1),
            [Z, G] = (0, n.useState)(),
            {
              showError: F,
              errorMessage: $,
              value: U,
              setValue: j,
            } = (0, c.Z)({
              path: x,
              validate: L,
              disableFormData: M,
              condition: E,
            }),
            q = (0, n.useCallback)((e) => {
              e || G(void 0);
            }, []),
            V = (0, n.useCallback)(
              async (e, t) => {
                const r = i.find((e) => e.slug === t),
                  n = await (0, ro.Z)({
                    fieldSchema: r.fields,
                    operation: _,
                    id: O,
                    user: R,
                    locale: P,
                  });
                T({
                  type: "ADD_ROW",
                  rowIndex: e,
                  subFieldState: n,
                  path: x,
                  blockType: t,
                }),
                  S({ type: "ADD", rowIndex: e, blockType: t }),
                  j(U + 1),
                  setTimeout(() => {
                    Lo(`${x}-row-${e + 1}`);
                  }, 0);
              },
              [x, j, U, i, T, _, O, R, P]
            ),
            W = (0, n.useCallback)(
              async (e, t) => {
                T({ type: "DUPLICATE_ROW", rowIndex: e, path: x }),
                  S({ type: "ADD", rowIndex: e, blockType: t }),
                  j(U + 1),
                  setTimeout(() => {
                    Lo(`${x}-row-${e + 1}`);
                  }, 0);
              },
              [S, T, x, j, U]
            ),
            H = (0, n.useCallback)(
              (e) => {
                S({ type: "REMOVE", rowIndex: e }),
                  T({ type: "REMOVE_ROW", rowIndex: e, path: x }),
                  j(U - 1);
              },
              [x, j, U, T]
            ),
            Q = (0, n.useCallback)(
              (e, t) => {
                S({ type: "MOVE", moveFromIndex: e, moveToIndex: t }),
                  T({
                    type: "MOVE_ROW",
                    moveFromIndex: e,
                    moveToIndex: t,
                    path: x,
                  });
              },
              [S, T, x]
            ),
            z = (0, n.useCallback)(
              (e) => {
                if (!e.destination) return;
                const t = e.source.index,
                  r = e.destination.index;
                Q(t, r);
              },
              [Q]
            ),
            K = (0, n.useCallback)(
              async (e, t) => {
                var r, n, a;
                if ((S({ type: "SET_COLLAPSE", id: e, collapsed: t }), I)) {
                  const i = (await C(I)) || { fields: {} };
                  let o =
                    null ===
                      (n =
                        null === (r = null == i ? void 0 : i.fields) ||
                        void 0 === r
                          ? void 0
                          : r[x]) || void 0 === n
                      ? void 0
                      : n.collapsed;
                  A && void 0 === o
                    ? (o = N.map((e) => e.id))
                    : void 0 === o && (o = []),
                    t ? o.push(e) : (o = o.filter((t) => t !== e)),
                    D(I, {
                      ...i,
                      fields: {
                        ...((null == i ? void 0 : i.fields) || {}),
                        [x]: {
                          ...(null === (a = null == i ? void 0 : i.fields) ||
                          void 0 === a
                            ? void 0
                            : a[x]),
                          collapsed: o,
                        },
                      },
                    });
                }
              },
              [I, C, x, D, A, N]
            ),
            J = (0, n.useCallback)(
              async (e) => {
                var t;
                if ((S({ type: "SET_ALL_COLLAPSED", collapse: e }), I)) {
                  const r = (await C(I)) || { fields: {} };
                  D(I, {
                    ...r,
                    fields: {
                      ...((null == r ? void 0 : r.fields) || {}),
                      [x]: {
                        ...(null === (t = null == r ? void 0 : r.fields) ||
                        void 0 === t
                          ? void 0
                          : t[x]),
                        collapsed: e ? N.map(({ id: e }) => e) : [],
                      },
                    },
                  });
                }
              },
              [C, x, I, N, D]
            );
          (0, n.useEffect)(() => {
            (async () => {
              var e, t;
              const r = B.getDataByPath(x),
                n = (await C(I)) || { fields: {} };
              S({
                type: "SET_ALL",
                data: r || [],
                collapsedState:
                  null ===
                    (t =
                      null === (e = null == n ? void 0 : n.fields) ||
                      void 0 === e
                        ? void 0
                        : e[x]) || void 0 === t
                    ? void 0
                    : t.collapsed,
                initCollapsed: A,
              });
            })();
          }, [B, x, C, I, A]),
            (0, n.useEffect)(() => {
              j((null == N ? void 0 : N.length) || 0, !0),
                0 === (null == N ? void 0 : N.length) ? k(!1) : k(!0);
            }, [N, j]);
          const Y = d && (null == N ? void 0 : N.length) >= d,
            X = ["field-type", Mo, w].filter(Boolean).join(" ");
          return N
            ? n.createElement(
                oi,
                { onDragEnd: z },
                n.createElement(
                  "div",
                  { id: `field-${x.replace(/\./gi, "__")}`, className: X },
                  n.createElement(
                    "div",
                    { className: `${Mo}__error-wrap` },
                    n.createElement(m.Z, { showError: F, message: $ })
                  ),
                  n.createElement(
                    "header",
                    { className: `${Mo}__header` },
                    n.createElement(
                      "div",
                      { className: `${Mo}__header-wrap` },
                      n.createElement("h3", null, t),
                      n.createElement(
                        "ul",
                        { className: `${Mo}__header-actions` },
                        n.createElement(
                          "li",
                          null,
                          n.createElement(
                            "button",
                            {
                              type: "button",
                              onClick: () => J(!0),
                              className: `${Mo}__header-action`,
                            },
                            "Collapse All"
                          )
                        ),
                        n.createElement(
                          "li",
                          null,
                          n.createElement(
                            "button",
                            {
                              type: "button",
                              onClick: () => J(!1),
                              className: `${Mo}__header-action`,
                            },
                            "Show All"
                          )
                        )
                      )
                    ),
                    n.createElement(g.Z, { value: U, description: y })
                  ),
                  n.createElement(
                    Wi,
                    { droppableId: "blocks-drop", isDropDisabled: h },
                    (e) =>
                      n.createElement(
                        "div",
                        { ref: e.innerRef, ...e.droppableProps },
                        N.length > 0 &&
                          N.map((e, t) => {
                            const { blockType: r } = e,
                              a = i.find((e) => e.slug === r),
                              o = t + 1;
                            return a
                              ? n.createElement(
                                  Ui,
                                  {
                                    key: e.id,
                                    draggableId: e.id,
                                    index: t,
                                    isDragDisabled: h,
                                  },
                                  (c) =>
                                    n.createElement(
                                      "div",
                                      {
                                        id: `${x}-row-${t}`,
                                        ref: c.innerRef,
                                        ...c.draggableProps,
                                      },
                                      n.createElement(
                                        xo,
                                        {
                                          collapsed: e.collapsed,
                                          onToggle: (t) => K(e.id, t),
                                          className: `${Mo}__row`,
                                          key: e.id,
                                          dragHandleProps: c.dragHandleProps,
                                          header: n.createElement(
                                            "div",
                                            {
                                              className: `${Mo}__block-header`,
                                            },
                                            n.createElement(
                                              "span",
                                              {
                                                className: `${Mo}__block-number`,
                                              },
                                              o >= 10 ? o : `0${o}`
                                            ),
                                            n.createElement(
                                              To.Z,
                                              {
                                                pillStyle: "white",
                                                className: `${Mo}__block-pill ${Mo}__block-pill-${r}`,
                                              },
                                              a.labels.singular
                                            ),
                                            n.createElement(_o, {
                                              path: `${x}.${t}.blockName`,
                                              readOnly: h,
                                            })
                                          ),
                                          actions: h
                                            ? void 0
                                            : n.createElement(
                                                n.Fragment,
                                                null,
                                                n.createElement(no.Z, {
                                                  key: `${r}-${t}`,
                                                  forceOpen: Z === t,
                                                  onToggleOpen: q,
                                                  buttonType: "none",
                                                  size: "large",
                                                  horizontalAlign: "right",
                                                  render: ({ close: e }) =>
                                                    n.createElement(fo, {
                                                      blocks: i,
                                                      addRow: V,
                                                      addRowIndex: t,
                                                      close: e,
                                                    }),
                                                }),
                                                n.createElement(Bo, {
                                                  rowCount: N.length,
                                                  duplicateRow: () => W(t, r),
                                                  addRow: () => G(t),
                                                  moveRow: Q,
                                                  removeRow: H,
                                                  index: t,
                                                })
                                              ),
                                        },
                                        n.createElement(s.Z, {
                                          name: `${x}.${t}.id`,
                                          value: e.id,
                                        }),
                                        n.createElement(Ro.Z, {
                                          className: `${Mo}__fields`,
                                          forceRender: !0,
                                          readOnly: h,
                                          fieldTypes: l,
                                          permissions:
                                            null == b ? void 0 : b.fields,
                                          fieldSchema: a.fields.map((e) => ({
                                            ...e,
                                            path: `${x}.${t}${
                                              (0, Oo.fieldAffectsData)(e)
                                                ? `.${e.name}`
                                                : ""
                                            }`,
                                          })),
                                        })
                                      )
                                    )
                                )
                              : null;
                          }),
                        (N.length < u || (f && 0 === N.length)) &&
                          n.createElement(
                            mo.Z,
                            { type: "error" },
                            "This field requires at least",
                            " ",
                            `${u || 1} ${
                              1 === u || void 0 === u ? o.singular : o.plural
                            }`
                          ),
                        0 === N.length &&
                          h &&
                          n.createElement(
                            mo.Z,
                            null,
                            "This field has no",
                            " ",
                            o.plural,
                            "."
                          ),
                        e.placeholder
                      )
                  ),
                  !h &&
                    !Y &&
                    n.createElement(
                      "div",
                      { className: `${Mo}__add-button-wrap` },
                      n.createElement(no.Z, {
                        buttonType: "custom",
                        size: "large",
                        horizontalAlign: "left",
                        button: n.createElement(
                          Ki.Z,
                          {
                            buttonStyle: "icon-label",
                            icon: "plus",
                            iconPosition: "left",
                            iconStyle: "with-border",
                          },
                          `Add ${o.singular}`
                        ),
                        render: ({ close: e }) =>
                          n.createElement(fo, {
                            blocks: i,
                            addRow: V,
                            addRowIndex: U,
                            close: e,
                          }),
                      })
                    )
                )
              )
            : null;
        });
      r(38655);
      const Go = (0, n.createContext)(!1),
        Fo = ({ children: e, withinGroup: t = !0 }) =>
          n.createElement(Go.Provider, { value: t }, e),
        $o = (0, n.createContext)(!1),
        Uo = ({ children: e, withinTab: t = !0 }) =>
          n.createElement($o.Provider, { value: t }, e),
        jo = "group-field",
        qo = u()((e) => {
          const {
              label: t,
              fields: r,
              name: a,
              path: i,
              fieldTypes: o,
              admin: {
                readOnly: l,
                style: s,
                className: c,
                width: d,
                description: u,
                hideGutter: p = !1,
              },
              permissions: f,
            } = e,
            m = yo(),
            v = (0, n.useContext)(Go),
            b = (0, n.useContext)($o),
            h = i || a;
          return n.createElement(
            "div",
            {
              id: `field-${h.replace(/\./gi, "__")}`,
              className: [
                "field-type",
                jo,
                m && `${jo}--within-collapsible`,
                v && `${jo}--within-group`,
                b && `${jo}--within-tab`,
                !p && v && `${jo}--gutter`,
                c,
              ]
                .filter(Boolean)
                .join(" "),
              style: { ...s, width: d },
            },
            n.createElement(
              Fo,
              null,
              n.createElement(
                "div",
                { className: `${jo}__wrap` },
                (t || u) &&
                  n.createElement(
                    "header",
                    { className: `${jo}__header` },
                    t &&
                      n.createElement("h3", { className: `${jo}__title` }, t),
                    n.createElement(g.Z, { value: null, description: u })
                  ),
                n.createElement(Ro.Z, {
                  permissions: null == f ? void 0 : f.fields,
                  readOnly: l,
                  fieldTypes: o,
                  fieldSchema: r.map((e) => ({
                    ...e,
                    path: `${h}${
                      (0, Oo.fieldAffectsData)(e) ? `.${e.name}` : ""
                    }`,
                  })),
                })
              )
            )
          );
        });
      r(35396);
      const Vo = "array-field",
        Wo = u()((e) => {
          var t, r;
          const {
              name: a,
              path: i,
              fields: o,
              fieldTypes: l,
              validate: d = p.array,
              required: u,
              maxRows: f,
              minRows: v,
              permissions: b,
              admin: {
                readOnly: h,
                description: y,
                condition: E,
                initCollapsed: A,
                className: w,
              },
            } = e,
            x = i || a,
            I = (null == (C = e) ? void 0 : C.labels)
              ? C.labels
              : (null == C ? void 0 : C.label)
              ? { singular: C.label, plural: void 0 }
              : { singular: "Row", plural: "Rows" };
          var C;
          const D =
              null !== (t = null == e ? void 0 : e.label) && void 0 !== t
                ? t
                : null === (r = null == e ? void 0 : e.labels) || void 0 === r
                ? void 0
                : r.singular,
            { preferencesKey: N } = (0, eo.x5)(),
            { getPreference: S } = (0, Qi.G)(),
            { setPreference: B } = (0, Qi.G)(),
            [R, O] = (0, n.useReducer)(Xi, void 0),
            P = (0, to.useForm)(),
            { user: _ } = (0, Hi.a)(),
            { id: T } = (0, eo.x5)(),
            L = (0, zi.bU)(),
            M = (0, go.T)(),
            { dispatchFields: k } = P,
            Z = (0, n.useCallback)(
              (e, t) => d(e, { ...t, minRows: v, maxRows: f, required: u }),
              [f, v, u, d]
            ),
            [G, F] = (0, n.useState)(!1),
            {
              showError: $,
              errorMessage: U,
              value: j,
              setValue: q,
            } = (0, c.Z)({
              path: x,
              validate: Z,
              disableFormData: G,
              condition: E,
            }),
            V = (0, n.useCallback)(
              async (e) => {
                const t = await (0, ro.Z)({
                  fieldSchema: o,
                  operation: M,
                  id: T,
                  user: _,
                  locale: L,
                });
                k({ type: "ADD_ROW", rowIndex: e, subFieldState: t, path: x }),
                  O({ type: "ADD", rowIndex: e }),
                  q(j + 1),
                  setTimeout(() => {
                    Lo(`${x}-row-${e + 1}`);
                  }, 0);
              },
              [O, k, o, x, q, j, M, T, _, L]
            ),
            W = (0, n.useCallback)(
              async (e) => {
                k({ type: "DUPLICATE_ROW", rowIndex: e, path: x }),
                  O({ type: "ADD", rowIndex: e }),
                  q(j + 1),
                  setTimeout(() => {
                    Lo(`${x}-row-${e + 1}`);
                  }, 0);
              },
              [O, k, x, q, j]
            ),
            H = (0, n.useCallback)(
              (e) => {
                O({ type: "REMOVE", rowIndex: e }),
                  k({ type: "REMOVE_ROW", rowIndex: e, path: x }),
                  q(j - 1);
              },
              [O, k, x, j, q]
            ),
            Q = (0, n.useCallback)(
              (e, t) => {
                O({ type: "MOVE", moveFromIndex: e, moveToIndex: t }),
                  k({
                    type: "MOVE_ROW",
                    moveFromIndex: e,
                    moveToIndex: t,
                    path: x,
                  });
              },
              [O, k, x]
            ),
            z = (0, n.useCallback)(
              (e) => {
                if (!e.destination) return;
                const t = e.source.index,
                  r = e.destination.index;
                Q(t, r);
              },
              [Q]
            ),
            K = (0, n.useCallback)(
              async (e, t) => {
                var r, n, a;
                if ((O({ type: "SET_COLLAPSE", id: e, collapsed: t }), N)) {
                  const i = (await S(N)) || { fields: {} };
                  let o =
                    null ===
                      (n =
                        null === (r = null == i ? void 0 : i.fields) ||
                        void 0 === r
                          ? void 0
                          : r[x]) || void 0 === n
                      ? void 0
                      : n.collapsed;
                  A && void 0 === o
                    ? (o = R.map((e) => e.id))
                    : void 0 === o && (o = []),
                    t ? o.push(e) : (o = o.filter((t) => t !== e)),
                    B(N, {
                      ...i,
                      fields: {
                        ...((null == i ? void 0 : i.fields) || {}),
                        [x]: {
                          ...(null === (a = null == i ? void 0 : i.fields) ||
                          void 0 === a
                            ? void 0
                            : a[x]),
                          collapsed: o,
                        },
                      },
                    });
                }
              },
              [N, S, x, B, A, R]
            ),
            J = (0, n.useCallback)(
              async (e) => {
                var t;
                if ((O({ type: "SET_ALL_COLLAPSED", collapse: e }), N)) {
                  const r = (await S(N)) || { fields: {} };
                  B(N, {
                    ...r,
                    fields: {
                      ...((null == r ? void 0 : r.fields) || {}),
                      [x]: {
                        ...(null === (t = null == r ? void 0 : r.fields) ||
                        void 0 === t
                          ? void 0
                          : t[x]),
                        collapsed: e ? R.map(({ id: e }) => e) : [],
                      },
                    },
                  });
                }
              },
              [x, S, N, R, B]
            );
          (0, n.useEffect)(() => {
            (async () => {
              var e, t;
              const r = P.getDataByPath(x),
                n = (await S(N)) || { fields: {} };
              O({
                type: "SET_ALL",
                data: r || [],
                collapsedState:
                  null ===
                    (t =
                      null === (e = null == n ? void 0 : n.fields) ||
                      void 0 === e
                        ? void 0
                        : e[x]) || void 0 === t
                    ? void 0
                    : t.collapsed,
                initCollapsed: A,
              });
            })();
          }, [P, x, S, N, A]),
            (0, n.useEffect)(() => {
              q((null == R ? void 0 : R.length) || 0, !0),
                0 === (null == R ? void 0 : R.length) ? F(!1) : F(!0);
            }, [R, q]);
          const Y = f && (null == R ? void 0 : R.length) >= f,
            X = ["field-type", Vo, w].filter(Boolean).join(" ");
          return R
            ? n.createElement(
                oi,
                { onDragEnd: z },
                n.createElement(
                  "div",
                  { id: `field-${x.replace(/\./gi, "__")}`, className: X },
                  n.createElement(
                    "div",
                    { className: `${Vo}__error-wrap` },
                    n.createElement(m.Z, { showError: $, message: U })
                  ),
                  n.createElement(
                    "header",
                    { className: `${Vo}__header` },
                    n.createElement(
                      "div",
                      { className: `${Vo}__header-wrap` },
                      n.createElement("h3", null, D),
                      n.createElement(
                        "ul",
                        { className: `${Vo}__header-actions` },
                        n.createElement(
                          "li",
                          null,
                          n.createElement(
                            "button",
                            {
                              type: "button",
                              onClick: () => J(!0),
                              className: `${Vo}__header-action`,
                            },
                            "Collapse All"
                          )
                        ),
                        n.createElement(
                          "li",
                          null,
                          n.createElement(
                            "button",
                            {
                              type: "button",
                              onClick: () => J(!1),
                              className: `${Vo}__header-action`,
                            },
                            "Show All"
                          )
                        )
                      )
                    ),
                    n.createElement(g.Z, { value: j, description: y })
                  ),
                  n.createElement(Wi, { droppableId: "array-drop" }, (e) =>
                    n.createElement(
                      "div",
                      { ref: e.innerRef, ...e.droppableProps },
                      R.length > 0 &&
                        R.map((e, t) => {
                          const r = t + 1;
                          return n.createElement(
                            Ui,
                            {
                              key: e.id,
                              draggableId: e.id,
                              index: t,
                              isDragDisabled: h,
                            },
                            (a) =>
                              n.createElement(
                                "div",
                                {
                                  id: `${x}-row-${t}`,
                                  ref: a.innerRef,
                                  ...a.draggableProps,
                                },
                                n.createElement(
                                  xo,
                                  {
                                    collapsed: e.collapsed,
                                    onToggle: (t) => K(e.id, t),
                                    className: `${Vo}__row`,
                                    key: e.id,
                                    dragHandleProps: a.dragHandleProps,
                                    header: `${I.singular} ${
                                      r >= 10 ? r : `0${r}`
                                    }`,
                                    actions: h
                                      ? void 0
                                      : n.createElement(Bo, {
                                          rowCount: R.length,
                                          duplicateRow: W,
                                          addRow: V,
                                          moveRow: Q,
                                          removeRow: H,
                                          index: t,
                                        }),
                                  },
                                  n.createElement(s.Z, {
                                    name: `${x}.${t}.id`,
                                    value: e.id,
                                  }),
                                  n.createElement(Ro.Z, {
                                    className: `${Vo}__fields`,
                                    forceRender: !0,
                                    readOnly: h,
                                    fieldTypes: l,
                                    permissions: null == b ? void 0 : b.fields,
                                    fieldSchema: o.map((e) => ({
                                      ...e,
                                      path: `${x}.${t}${
                                        (0, Oo.fieldAffectsData)(e)
                                          ? `.${e.name}`
                                          : ""
                                      }`,
                                    })),
                                  })
                                )
                              )
                          );
                        }),
                      (R.length < v || (u && 0 === R.length)) &&
                        n.createElement(
                          mo.Z,
                          { type: "error" },
                          "This field requires at least",
                          " ",
                          v ? `${v} ${I.plural}` : `1 ${I.singular}`
                        ),
                      0 === R.length &&
                        h &&
                        n.createElement(
                          mo.Z,
                          null,
                          "This field has no",
                          " ",
                          I.plural,
                          "."
                        ),
                      e.placeholder
                    )
                  ),
                  !h &&
                    !Y &&
                    n.createElement(
                      "div",
                      { className: `${Vo}__add-button-wrap` },
                      n.createElement(
                        Ki.Z,
                        {
                          onClick: () => V(j),
                          buttonStyle: "icon-label",
                          icon: "plus",
                          iconStyle: "with-border",
                          iconPosition: "left",
                        },
                        `Add ${I.singular}`
                      )
                    )
                )
              )
            : null;
        }),
        Ho = (e, t) => {
          const r = e && "." === e.slice(-1) ? "" : ".";
          return `${e ? `${e}${r}` : ""}${
            (0, Oo.fieldAffectsData)(t) ? t.name : ""
          }`;
        };
      r(1745);
      const Qo = u()((e) => {
        const {
            fields: t,
            fieldTypes: r,
            path: a,
            permissions: i,
            admin: { readOnly: o, className: l },
          } = e,
          s = ["field-type", "row", l].filter(Boolean).join(" ");
        return n.createElement(Ro.Z, {
          readOnly: o,
          className: s,
          permissions: i,
          fieldTypes: r,
          fieldSchema: t.map((e) => ({ ...e, path: Ho(a, e) })),
        });
      });
      var zo = r(27924);
      r(15139);
      const Ko = "collapsible-field",
        Jo = u()((e) => {
          const {
              label: t,
              fields: r,
              fieldTypes: a,
              path: i,
              permissions: o,
              admin: {
                readOnly: l,
                className: s,
                initCollapsed: c,
                description: d,
              },
            } = e,
            { getPreference: u, setPreference: p } = (0, Qi.G)(),
            { preferencesKey: f } = (0, eo.x5)(),
            [m, v] = (0, n.useState)(),
            [b] = (0, n.useState)(() => `collapsible-${(0, zo.default)(t)}`),
            h = (0, n.useCallback)(
              async (e) => {
                var t;
                const r = await u(f);
                p(f, {
                  ...r,
                  fields: {
                    ...((null == r ? void 0 : r.fields) || {}),
                    [b]: {
                      ...(null === (t = null == r ? void 0 : r.fields) ||
                      void 0 === t
                        ? void 0
                        : t[b]),
                      collapsed: e,
                    },
                  },
                });
              },
              [f, b, u, p]
            );
          return (
            (0, n.useEffect)(() => {
              (async () => {
                var e, t, r;
                const n = await u(f);
                v(
                  Boolean(
                    null !==
                      (r =
                        null ===
                          (t =
                            null === (e = null == n ? void 0 : n.fields) ||
                            void 0 === e
                              ? void 0
                              : e[b]) || void 0 === t
                          ? void 0
                          : t.collapsed) && void 0 !== r
                      ? r
                      : c
                  )
                );
              })();
            }, [u, f, b, c]),
            "boolean" != typeof m
              ? null
              : n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    xo,
                    {
                      initCollapsed: m,
                      className: ["field-type", Ko, s]
                        .filter(Boolean)
                        .join(" "),
                      header: n.createElement(
                        "div",
                        { className: `${Ko}__label` },
                        t
                      ),
                      onToggle: h,
                    },
                    n.createElement(Ro.Z, {
                      forceRender: !0,
                      readOnly: l,
                      permissions: o,
                      fieldTypes: a,
                      fieldSchema: r.map((e) => ({ ...e, path: Ho(i, e) })),
                    })
                  ),
                  n.createElement(g.Z, { description: d })
                )
          );
        });
      r(98221);
      const Yo = "tabs-field",
        Xo = u()((e) => {
          const {
              tabs: t,
              fieldTypes: r,
              path: a,
              permissions: i,
              admin: { readOnly: o, className: l },
            } = e,
            s = yo(),
            [c, d] = (0, n.useState)(0),
            u = t[c];
          return n.createElement(
            "div",
            {
              className: [l, Yo, s && `${Yo}--within-collapsible`]
                .filter(Boolean)
                .join(" "),
            },
            n.createElement(
              Uo,
              null,
              n.createElement(
                "div",
                { className: `${Yo}__tabs-wrap` },
                n.createElement(
                  "div",
                  { className: `${Yo}__tabs` },
                  t.map((e, t) =>
                    n.createElement(
                      "button",
                      {
                        key: t,
                        type: "button",
                        className: [
                          `${Yo}__tab-button`,
                          c === t && `${Yo}__tab-button--active`,
                        ]
                          .filter(Boolean)
                          .join(" "),
                        onClick: () => d(t),
                      },
                      e.label ? e.label : (0, Oo.tabHasName)(e) && e.name
                    )
                  )
                )
              ),
              n.createElement(
                "div",
                { className: `${Yo}__content-wrap` },
                u &&
                  n.createElement(
                    "div",
                    {
                      className: [
                        `${Yo}__tab`,
                        `${Yo}__tab-${(0, zo.default)(u.label)}`,
                      ].join(" "),
                    },
                    n.createElement(g.Z, {
                      className: `${Yo}__description`,
                      description: u.description,
                    }),
                    n.createElement(Ro.Z, {
                      key: String(u.label),
                      forceRender: !0,
                      readOnly: o,
                      permissions: (0, Oo.tabHasName)(u) ? i[u.name].fields : i,
                      fieldTypes: r,
                      fieldSchema: u.fields.map((e) => ({
                        ...e,
                        path: `${a ? `${a}.` : ""}${
                          (0, Oo.tabHasName)(u) ? `${u.name}.` : ""
                        }${(0, Oo.fieldAffectsData)(e) ? e.name : ""}`,
                      })),
                    })
                  )
              )
            )
          );
        });
      var el = r(9980),
        tl = r(71851),
        rl = r(29580),
        nl = r(39599),
        al = r(93313),
        il = r(46268),
        ol = r(56054),
        ll = r(28019);
      r(62805);
      const sl = "add-upload-modal",
        cl = (e) => {
          var t, r;
          const {
              collection: a,
              collection: { admin: { description: i } = {} } = {},
              slug: o,
              fieldTypes: l,
              setValue: s,
            } = e,
            { permissions: c } = (0, Hi.a)(),
            {
              serverURL: d,
              routes: { api: u },
            } = (0, el.Z)(),
            { toggleModal: p } = (0, tl.useModal)(),
            f = (0, n.useCallback)(
              (e) => {
                p(o), s(e.doc);
              },
              [p, o, s]
            ),
            m = [sl].filter(Boolean).join(" "),
            g =
              null ===
                (r =
                  null === (t = null == c ? void 0 : c.collections) ||
                  void 0 === t
                    ? void 0
                    : t[a.slug]) || void 0 === r
                ? void 0
                : r.fields;
          return n.createElement(
            tl.Modal,
            { className: m, slug: o },
            n.createElement(
              nl.Z,
              { width: "wide" },
              n.createElement(
                al.Z,
                {
                  method: "post",
                  action: `${d}${u}/${a.slug}`,
                  onSuccess: f,
                  disableSuccessStatus: !0,
                  validationOperation: "create",
                },
                n.createElement(
                  "header",
                  { className: `${sl}__header` },
                  n.createElement(
                    "div",
                    null,
                    n.createElement("h1", null, "New", " ", a.labels.singular),
                    n.createElement(il.Z, null, "Save"),
                    n.createElement(Ki.Z, {
                      icon: "x",
                      round: !0,
                      buttonStyle: "icon-label",
                      iconStyle: "with-border",
                      onClick: () => p(o),
                    })
                  ),
                  i &&
                    n.createElement(
                      "div",
                      { className: `${sl}__sub-header` },
                      n.createElement(ll.Z, { description: i })
                    )
                ),
                n.createElement(ol.Z, { collection: a }),
                n.createElement(Ro.Z, {
                  permissions: g,
                  readOnly: !1,
                  fieldTypes: l,
                  fieldSchema: a.fields,
                })
              )
            )
          );
        };
      var dl = r(10251),
        ul = r.n(dl),
        pl = r(47489),
        fl = r(21280),
        ml = r(56628),
        gl = r(27656),
        vl = r(64267),
        bl = r(10254),
        hl = r(10175);
      r(10389);
      const yl = "select-existing-upload-modal",
        El = (e) => {
          var t, r, a;
          const {
              setValue: i,
              collection: o,
              collection: {
                slug: l,
                admin: { description: s, pagination: { defaultLimit: c } } = {},
              } = {},
              slug: d,
              path: u,
              filterOptions: p,
            } = e,
            {
              serverURL: f,
              routes: { api: m },
            } = (0, el.Z)(),
            { id: g } = (0, eo.x5)(),
            { user: v } = (0, Hi.a)(),
            { getData: b, getSiblingData: h } = (0, to.useWatchForm)(),
            { toggleModal: y, modalState: E } = (0, tl.useModal)(),
            [A] = (0, n.useState)(() => (0, bl.Z)(o)),
            [w, x] = (0, n.useState)(c),
            [I, C] = (0, n.useState)(null),
            [D, N] = (0, n.useState)(null),
            [S, B] = (0, n.useState)(null),
            [R, O] = (0, n.useState)(),
            P = [yl].filter(Boolean).join(" "),
            _ = null === (t = E[d]) || void 0 === t ? void 0 : t.isOpen,
            T = _ ? `${f}${m}/${l}` : null,
            [{ data: L }, { setParams: M }] = (0, pl.Z)(T, {});
          return (
            (0, n.useEffect)(() => {
              const e = {};
              S && (e.page = S),
                D && (e.where = { and: [D, R] }),
                I && (e.sort = I),
                w && (e.limit = w),
                M(e);
            }, [M, S, I, D, w, R]),
            (0, n.useEffect)(() => {
              if (!p || !_) return;
              const e = (0, hl.w)(p, {
                id: g,
                relationTo: l,
                data: b(),
                siblingData: h(u),
                user: v,
              })[l];
              ul()(e, R) || O(e);
            }, [l, p, R, g, b, h, u, v, _]),
            n.createElement(
              tl.Modal,
              { className: P, slug: d },
              _ &&
                n.createElement(
                  nl.Z,
                  { width: "wide" },
                  n.createElement(
                    "header",
                    { className: `${yl}__header` },
                    n.createElement(
                      "div",
                      null,
                      n.createElement(
                        "h1",
                        null,
                        " ",
                        "Select existing",
                        " ",
                        o.labels.singular
                      ),
                      n.createElement(Ki.Z, {
                        icon: "x",
                        round: !0,
                        buttonStyle: "icon-label",
                        iconStyle: "with-border",
                        onClick: () => y(d),
                      })
                    ),
                    s &&
                      n.createElement(
                        "div",
                        { className: `${yl}__sub-header` },
                        n.createElement(ll.Z, { description: s })
                      )
                  ),
                  n.createElement(fl.Z, {
                    collection: { ...o, fields: A },
                    enableColumns: !1,
                    enableSort: !0,
                    modifySearchQuery: !1,
                    handleSortChange: C,
                    handleWhereChange: N,
                  }),
                  n.createElement(gl.Z, {
                    docs: null == L ? void 0 : L.docs,
                    collection: o,
                    onCardClick: (e) => {
                      i(e), y(d);
                    },
                  }),
                  n.createElement(
                    "div",
                    { className: `${yl}__page-controls` },
                    n.createElement(ml.Z, {
                      limit: L.limit,
                      totalPages: L.totalPages,
                      page: L.page,
                      hasPrevPage: L.hasPrevPage,
                      hasNextPage: L.hasNextPage,
                      prevPage: L.prevPage,
                      nextPage: L.nextPage,
                      numberOfNeighbors: 1,
                      onChange: B,
                      disableHistoryChange: !0,
                    }),
                    (null == L ? void 0 : L.totalDocs) > 0 &&
                      n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                          "div",
                          { className: `${yl}__page-info` },
                          L.page,
                          "-",
                          L.totalPages > 1 ? L.limit : L.totalDocs,
                          " ",
                          "of",
                          " ",
                          L.totalDocs
                        ),
                        n.createElement(vl.Z, {
                          limits:
                            null ===
                              (a =
                                null === (r = null == o ? void 0 : o.admin) ||
                                void 0 === r
                                  ? void 0
                                  : r.pagination) || void 0 === a
                              ? void 0
                              : a.limits,
                          limit: w,
                          modifySearchParams: !1,
                          handleChange: x,
                        })
                      )
                  )
                )
            )
          );
        };
      r(40349);
      const Al = "upload",
        wl = (e) => {
          const {
              path: t,
              required: r,
              readOnly: a,
              style: i,
              className: o,
              width: l,
              description: s,
              label: c,
              relationTo: d,
              fieldTypes: u,
              value: p,
              onChange: v,
              showError: b,
              serverURL: h = "http://localhost:3000",
              api: y = "/api",
              collection: E,
              errorMessage: A,
              filterOptions: w,
            } = e,
            { toggleModal: x } = (0, tl.useModal)(),
            I = `${t}-add`,
            C = `${t}-select-existing`,
            [D, N] = (0, n.useState)(void 0),
            [S, B] = (0, n.useState)(!1),
            R = ["field-type", Al, o, b && "error", a && "read-only"]
              .filter(Boolean)
              .join(" ");
          return (
            (0, n.useEffect)(() => {
              if ("string" == typeof p && "" !== p) {
                (async () => {
                  const e = await fetch(`${h}${y}/${d}/${p}`);
                  if (e.ok) {
                    const t = await e.json();
                    N(t);
                  } else B(!0), N(void 0);
                })();
              } else N(void 0);
            }, [p, d, y, h]),
            n.createElement(
              "div",
              { className: R, style: { ...i, width: l } },
              n.createElement(m.Z, { showError: b, message: A }),
              n.createElement(f.Z, {
                htmlFor: `field-${t.replace(/\./gi, "__")}`,
                label: c,
                required: r,
              }),
              (null == E ? void 0 : E.upload) &&
                n.createElement(
                  n.Fragment,
                  null,
                  D &&
                    !S &&
                    n.createElement(rl.Z, {
                      collection: E,
                      doc: D,
                      handleRemove: () => {
                        v(null);
                      },
                    }),
                  (!D || S) &&
                    n.createElement(
                      "div",
                      { className: `${Al}__wrap` },
                      n.createElement(
                        Ki.Z,
                        {
                          buttonStyle: "secondary",
                          onClick: () => {
                            x(I);
                          },
                        },
                        "Upload new",
                        " ",
                        E.labels.singular
                      ),
                      n.createElement(
                        Ki.Z,
                        {
                          buttonStyle: "secondary",
                          onClick: () => {
                            x(C);
                          },
                        },
                        "Choose from existing"
                      )
                    ),
                  n.createElement(cl, {
                    collection: E,
                    slug: I,
                    fieldTypes: u,
                    setValue: (e) => {
                      B(!1), v(e);
                    },
                  }),
                  n.createElement(El, {
                    collection: E,
                    slug: C,
                    setValue: v,
                    addModalSlug: I,
                    filterOptions: w,
                    path: t,
                  }),
                  n.createElement(g.Z, { value: D, description: s })
                )
            )
          );
        },
        xl = u()((e) => {
          const {
              collections: t,
              serverURL: r,
              routes: { api: a },
            } = (0, el.Z)(),
            {
              path: i,
              name: o,
              required: l,
              admin: {
                readOnly: s,
                style: d,
                className: u,
                width: f,
                description: m,
                condition: g,
              } = {},
              label: v,
              validate: b = p.upload,
              relationTo: h,
              fieldTypes: y,
              filterOptions: E,
            } = e,
            A = t.find((e) => e.slug === h),
            w = (0, n.useCallback)(
              (e, t) => b(e, { ...t, required: l }),
              [b, l]
            ),
            x = (0, c.Z)({ path: i, validate: w, condition: g }),
            { value: I, showError: C, setValue: D, errorMessage: N } = x,
            S = (0, n.useCallback)(
              (e) => {
                const t = (null == e ? void 0 : e.id) || e;
                D(t);
              },
              [D]
            );
          return A.upload
            ? n.createElement(wl, {
                path: i,
                value: I,
                onChange: S,
                description: m,
                label: v,
                required: l,
                showError: C,
                serverURL: r,
                api: a,
                errorMessage: N,
                readOnly: s,
                style: d,
                className: u,
                width: f,
                collection: A,
                fieldTypes: y,
                name: o,
                relationTo: h,
                filterOptions: E,
              })
            : null;
        }),
        Il = u()((e) => {
          const {
            admin: {
              components: { Field: t },
            },
          } = e;
          return t ? n.createElement(t, { ...e }) : null;
        }),
        Cl = {
          code: o,
          email: l.Z,
          hidden: s.Z,
          text: b,
          date: E,
          password: A.Z,
          confirmPassword: w.Z,
          relationship: x.Z,
          textarea: C,
          select: D.Z,
          number: N,
          checkbox: S.Z,
          richText: R,
          point: T,
          radio: P,
          blocks: Zo,
          group: qo,
          array: Wo,
          row: Qo,
          collapsible: Jo,
          tabs: Xo,
          upload: xl,
          ui: Il,
        };
    },
    51265: (e, t, r) => {
      r.d(t, { Z: () => a });
      var n = r(67294);
      r(42926);
      const a = () =>
        n.createElement(
          "svg",
          {
            className: "icon icon--copy",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 25 25",
          },
          n.createElement("rect", {
            x: "6.5",
            y: "10",
            width: "8",
            height: "8",
            className: "stroke",
          }),
          n.createElement("path", {
            d: "M10 9.98438V6.5H18V14.5H14",
            className: "stroke",
          })
        );
    },
    56054: (e, t, r) => {
      r.d(t, { Z: () => u });
      var n = r(67294),
        a = r(48170),
        i = r(77329),
        o = r(29580),
        l = r(90666);
      r(55307);
      const s = "file-field",
        c = (e) => {
          e.preventDefault(), e.stopPropagation();
        },
        d = (e) => !(!e && void 0 !== e) || "A file is required.",
        u = (e) => {
          var t, r;
          const u = (0, n.useRef)(null),
            p = (0, n.useRef)(null),
            [f, m] = (0, n.useState)(!1),
            [g, v] = (0, n.useState)(!1),
            [b, h] = (0, n.useState)(0),
            [y, E] = (0, n.useState)(!1),
            { data: A = {}, collection: w } = e,
            { filename: x } = A,
            {
              value: I,
              setValue: C,
              showError: D,
              errorMessage: N,
            } = (0, a.Z)({ path: "file", validate: d }),
            S = (0, n.useCallback)((e) => {
              e.preventDefault(),
                e.stopPropagation(),
                h((e) => e + 1),
                e.dataTransfer.items &&
                  e.dataTransfer.items.length > 0 &&
                  v(!0);
            }, []),
            B = (0, n.useCallback)(
              (e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  h((e) => e - 1),
                  b > 1 || v(!1);
              },
              [b]
            ),
            R = (0, n.useCallback)(
              (e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  v(!1),
                  e.dataTransfer.files && e.dataTransfer.files.length > 0
                    ? (C(e.dataTransfer.files[0]),
                      v(!1),
                      e.dataTransfer.clearData(),
                      h(0))
                    : v(!1);
              },
              [C]
            ),
            O = (0, n.useCallback)(() => {
              var e, t;
              m(!1),
                C(
                  (null ===
                    (t =
                      null === (e = null == u ? void 0 : u.current) ||
                      void 0 === e
                        ? void 0
                        : e.files) || void 0 === t
                    ? void 0
                    : t[0]) || null
                );
            }, [u, C]);
          (0, n.useEffect)(() => {
            f && (u.current.click(), m(!1));
          }, [f, u, m]),
            (0, n.useEffect)(() => {
              const e = p.current;
              return e
                ? (e.addEventListener("dragenter", S),
                  e.addEventListener("dragleave", B),
                  e.addEventListener("dragover", c),
                  e.addEventListener("drop", R),
                  () => {
                    e.removeEventListener("dragenter", S),
                      e.removeEventListener("dragleave", B),
                      e.removeEventListener("dragover", c),
                      e.removeEventListener("drop", R);
                  })
                : () => null;
            }, [S, B, R, I]),
            (0, n.useEffect)(() => {
              E(!1);
            }, [A]);
          const P = [s, g && `${s}--dragging`, "field-type"]
            .filter(Boolean)
            .join(" ");
          return n.createElement(
            "div",
            { className: P },
            n.createElement(l.Z, { showError: D, message: N }),
            x &&
              !y &&
              n.createElement(o.Z, {
                doc: A,
                collection: w,
                handleRemove: () => {
                  E(!0), C(null);
                },
              }),
            (!x || y) &&
              n.createElement(
                "div",
                { className: `${s}__upload` },
                I &&
                  n.createElement(
                    "div",
                    { className: `${s}__file-selected` },
                    n.createElement(
                      "span",
                      { className: `${s}__filename` },
                      I.name
                    ),
                    n.createElement(i.Z, {
                      icon: "x",
                      round: !0,
                      buttonStyle: "icon-label",
                      iconStyle: "with-border",
                      onClick: () => {
                        C(null);
                      },
                    })
                  ),
                !I &&
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      "div",
                      { className: `${s}__drop-zone`, ref: p },
                      n.createElement(
                        i.Z,
                        {
                          size: "small",
                          buttonStyle: "secondary",
                          onClick: () => m(!0),
                        },
                        "Select a file"
                      ),
                      n.createElement(
                        "span",
                        { className: `${s}__drag-label` },
                        "or drag and drop a file here"
                      )
                    )
                  ),
                n.createElement("input", {
                  ref: u,
                  type: "file",
                  accept:
                    null ===
                      (r =
                        null === (t = null == w ? void 0 : w.upload) ||
                        void 0 === t
                          ? void 0
                          : t.mimeTypes) || void 0 === r
                      ? void 0
                      : r.join(","),
                  onChange: O,
                })
              )
          );
        };
    },
    55976: (e, t) => {
      t.Z = function (e, t = 0) {
        if (0 === e) return "0 bytes";
        const r = t < 0 ? 0 : t,
          n = Math.floor(Math.log(e) / Math.log(1024));
        return `${parseFloat((e / 1024 ** n).toFixed(r))}${
          [" bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][n]
        }`;
      };
    },
    23438: (e, t) => {
      t.Z = (e) => {
        const t = e.split(" "),
          r = t.reduce(
            (e, r, n) =>
              `${e}(?=.*(?:(?:[^\\p{L}\\p{N}])|^)${r}.*(?=[^\\p{L}\\p{N}]|$))${
                n + 1 === t.length ? ".+" : ""
              }`,
            ""
          );
        return new RegExp(r, "i");
      };
    },
    88359: (e, t) => {
      var r = 60103,
        n = 60106,
        a = 60107,
        i = 60108,
        o = 60114,
        l = 60109,
        s = 60110,
        c = 60112,
        d = 60113,
        u = 60120,
        p = 60115,
        f = 60116,
        m = 60121,
        g = 60122,
        v = 60117,
        b = 60129,
        h = 60131;
      if ("function" == typeof Symbol && Symbol.for) {
        var y = Symbol.for;
        (r = y("react.element")),
          (n = y("react.portal")),
          (a = y("react.fragment")),
          (i = y("react.strict_mode")),
          (o = y("react.profiler")),
          (l = y("react.provider")),
          (s = y("react.context")),
          (c = y("react.forward_ref")),
          (d = y("react.suspense")),
          (u = y("react.suspense_list")),
          (p = y("react.memo")),
          (f = y("react.lazy")),
          (m = y("react.block")),
          (g = y("react.server.block")),
          (v = y("react.fundamental")),
          (b = y("react.debug_trace_mode")),
          (h = y("react.legacy_hidden"));
      }
      function E(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case a:
                case o:
                case i:
                case d:
                case u:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case c:
                    case f:
                    case p:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case n:
              return t;
          }
        }
      }
      t.isContextConsumer = function (e) {
        return E(e) === s;
      };
    },
    72973: (e, t, r) => {
      e.exports = r(88359);
    },
    44586: (e, t, r) => {
      var n;
      r.d(t, { Z: () => u });
      var a = new Uint8Array(16);
      function i() {
        if (
          !n &&
          !(n =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return n(a);
      }
      const o =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const l = function (e) {
        return "string" == typeof e && o.test(e);
      };
      for (var s = [], c = 0; c < 256; ++c)
        s.push((c + 256).toString(16).substr(1));
      const d = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = (
            s[e[t + 0]] +
            s[e[t + 1]] +
            s[e[t + 2]] +
            s[e[t + 3]] +
            "-" +
            s[e[t + 4]] +
            s[e[t + 5]] +
            "-" +
            s[e[t + 6]] +
            s[e[t + 7]] +
            "-" +
            s[e[t + 8]] +
            s[e[t + 9]] +
            "-" +
            s[e[t + 10]] +
            s[e[t + 11]] +
            s[e[t + 12]] +
            s[e[t + 13]] +
            s[e[t + 14]] +
            s[e[t + 15]]
          ).toLowerCase();
        if (!l(r)) throw TypeError("Stringified UUID is invalid");
        return r;
      };
      const u = function (e, t, r) {
        var n = (e = e || {}).random || (e.rng || i)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
          r = r || 0;
          for (var a = 0; a < 16; ++a) t[r + a] = n[a];
          return t;
        }
        return d(n);
      };
    },
  },
]);
