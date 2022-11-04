"use strict";
(self.webpackChunkpayload_starter_typescript =
  self.webpackChunkpayload_starter_typescript || []).push([
  [995],
  {
    38398: (e, t, l) => {
      l.d(t, { Z: () => s });
      var a = l(67294),
        n = l(3902),
        i = l(39006);
      const s = (e) => {
        const {
            useAsTitle: t,
            title: l,
            data: s,
            fallback: o = "[untitled]",
          } = e,
          r = (0, n.Z)(t);
        let c = s && s[t];
        c || (c = r),
          c || (c = null == s ? void 0 : s.id),
          c || (c = o),
          (c = l || c);
        return c === (null == s ? void 0 : s.id)
          ? a.createElement(i.Z, { id: null == s ? void 0 : s.id })
          : a.createElement("span", { className: "render-title" }, c);
      };
    },
    73588: (e, t, l) => {
      l.d(t, { Z: () => k });
      var a = l(67294),
        n = l(39249),
        i = l(9980),
        s = l(28571),
        o = l(76067),
        r = l(26314),
        c = l(77329),
        d = l(74007),
        u = l(64012),
        m = l(44586),
        v = l(48170),
        p = l(953),
        E = l(55532),
        f = l(35193),
        y = l(71851),
        $ = l(39599),
        g = l(45074);
      l(25891);
      const h = "generate-confirmation",
        b = (e) => {
          const { setKey: t, highlightField: l } = e,
            { id: i } = (0, g.x5)(),
            { toggleModal: s } = (0, y.useModal)(),
            o = `generate-confirmation-${i}`;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              c.Z,
              {
                size: "small",
                buttonStyle: "secondary",
                onClick: () => {
                  s(o);
                },
              },
              "Generate new API key"
            ),
            a.createElement(
              y.Modal,
              { slug: o, className: h },
              a.createElement(
                $.Z,
                { className: `${h}__template` },
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
                      s(o);
                    },
                  },
                  "Cancel"
                ),
                a.createElement(
                  c.Z,
                  {
                    onClick: () => {
                      t(),
                        s(o),
                        n.Am.success("New API Key Generated.", {
                          autoClose: 3e3,
                        }),
                        l(!0);
                    },
                  },
                  "Generate"
                )
              )
            )
          );
        },
        Z = "apiKey",
        _ = (e) =>
          (0, f.text)(e, {
            minLength: 24,
            maxLength: 48,
            data: {},
            siblingData: {},
          }),
        C = () => {
          const [e, t] = (0, a.useState)(null),
            [l, n] = (0, a.useState)(!1),
            { getField: i } = (0, u.useWatchForm)(),
            s = i(Z),
            o = null == s ? void 0 : s.value,
            r = (0, a.useMemo)(
              () =>
                a.createElement(
                  "div",
                  { className: "api-key__label" },
                  a.createElement("span", null, "API Key"),
                  a.createElement(E.Z, { value: o })
                ),
              [o]
            ),
            c = (0, v.Z)({ path: "apiKey", validate: _ }),
            { value: d, setValue: f } = c;
          (0, a.useEffect)(() => {
            t((0, m.Z)());
          }, []),
            (0, a.useEffect)(() => {
              o || f(e);
            }, [o, f, e]),
            (0, a.useEffect)(() => {
              l &&
                setTimeout(() => {
                  n(!1);
                }, 1e4);
            }, [l]);
          const y = ["field-type", "api-key", "read-only"]
            .filter(Boolean)
            .join(" ");
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              "div",
              { className: y },
              a.createElement(p.Z, { htmlFor: Z, label: r }),
              a.createElement("input", {
                value: d || "",
                className: l ? "highlight" : void 0,
                disabled: !0,
                type: "text",
                id: "apiKey",
                name: "apiKey",
              })
            ),
            a.createElement(b, {
              setKey: () => f((0, m.Z)()),
              highlightField: () => {
                l && n(!1),
                  setTimeout(() => {
                    n(!0);
                  }, 1);
              },
            })
          );
        };
      l(32554);
      const w = "auth-fields",
        k = (e) => {
          const {
              useAPIKey: t,
              requirePassword: l,
              verify: m,
              collection: { slug: v },
              collection: p,
              email: E,
              operation: f,
            } = e,
            [y, $] = (0, a.useState)(l),
            { getField: g, dispatchFields: h } = (0, u.useWatchForm)(),
            b = (0, u.useFormModified)(),
            Z = g("enableAPIKey"),
            {
              serverURL: _,
              routes: { api: k },
            } = (0, i.Z)(),
            N = (0, a.useCallback)(
              async (e) => {
                e ||
                  (h({ type: "REMOVE", path: "password" }),
                  h({ type: "REMOVE", path: "confirm-password" })),
                  $(e);
              },
              [h]
            ),
            A = (0, a.useCallback)(async () => {
              const e = `${_}${k}/${v}/unlock`;
              200 ===
              (
                await fetch(e, {
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: E }),
                  method: "post",
                })
              ).status
                ? n.Am.success("Successfully unlocked", { autoClose: 3e3 })
                : n.Am.error("Successfully unlocked");
            }, [_, k, v, E]);
          return (
            (0, a.useEffect)(() => {
              b || $(!1);
            }, [b]),
            p.auth.disableLocalStrategy
              ? null
              : a.createElement(
                  "div",
                  { className: w },
                  a.createElement(s.Z, {
                    required: !0,
                    name: "email",
                    label: "Email",
                    admin: { autoComplete: "email" },
                  }),
                  (y || l) &&
                    a.createElement(
                      "div",
                      { className: "auth-fields__changing-password" },
                      a.createElement(o.Z, {
                        autoComplete: "off",
                        required: !0,
                        name: "password",
                        label: "New Password",
                      }),
                      a.createElement(d.Z, null),
                      !l &&
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
                    !l &&
                    a.createElement(
                      c.Z,
                      {
                        size: "small",
                        buttonStyle: "secondary",
                        onClick: () => N(!0),
                      },
                      "Change Password"
                    ),
                  "update" === f &&
                    a.createElement(
                      c.Z,
                      {
                        size: "small",
                        buttonStyle: "secondary",
                        onClick: () => A(),
                      },
                      "Force Unlock"
                    ),
                  t &&
                    a.createElement(
                      "div",
                      { className: "auth-fields__api-key" },
                      a.createElement(r.Z, {
                        label: "Enable API Key",
                        name: "enableAPIKey",
                      }),
                      (null == Z ? void 0 : Z.value) && a.createElement(C, null)
                    ),
                  m &&
                    a.createElement(r.Z, {
                      label: "Verified",
                      name: "_verified",
                    })
                )
          );
        };
    },
    5995: (e, t, l) => {
      l.r(t), l.d(t, { default: () => H });
      var a = l(67294),
        n = l(5977),
        i = l(9980),
        s = l(28630),
        o = l(75091),
        r = l(47489),
        c = l(2143),
        d = l(73727),
        u = l(49546),
        m = l(28584),
        v = l(93313),
        p = l(40829),
        E = l(4983),
        f = l(46268),
        y = l(5590),
        $ = l(55532),
        g = l(39249),
        h = l(71851),
        b = l(77329),
        Z = l(93780),
        _ = l(64012),
        C = l(39599);
      l(79280);
      const w = "duplicate",
        k = ({ slug: e, collection: t, id: l }) => {
          const { push: s } = (0, n.k6)(),
            o = (0, _.useFormModified)(),
            { toggleModal: r } = (0, h.useModal)(),
            { setModified: c } = (0, _.useForm)(),
            {
              serverURL: d,
              routes: { api: u },
              localization: m,
            } = (0, i.Z)(),
            {
              routes: { admin: v },
            } = (0, i.Z)(),
            [p, E] = (0, a.useState)(!1),
            f = `duplicate-${l}`,
            y = (0, a.useCallback)(
              async (a = !1) => {
                if ((E(!0), o && !a)) return void r(f);
                const n = async (t = "") => {
                  const a = await Z.E.get(`${d}${u}/${e}/${l}`, {
                      locale: t,
                      depth: 0,
                    }),
                    n = await a.json(),
                    i = await Z.E.post(`${d}${u}/${e}`, {
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(n),
                    }),
                    s = await i.json();
                  return 201 === i.status
                    ? s.doc.id
                    : (s.errors.forEach((e) => g.Am.error(e.message)), null);
                };
                let i;
                if (m) {
                  i = await n(m.defaultLocale);
                  let t = !1;
                  m.locales
                    .filter((e) => e !== m.defaultLocale)
                    .forEach(async (a) => {
                      if (!t) {
                        const n = await Z.E.get(`${d}${u}/${e}/${l}`, {
                            locale: a,
                            depth: 0,
                          }),
                          s = await n.json(),
                          o = await Z.E.patch(
                            `${d}${u}/${e}/${i}?locale=${a}`,
                            {
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(s),
                            }
                          );
                        if (o.status > 400) {
                          t = !0;
                          (await o.json()).errors.forEach((e) =>
                            g.Am.error(e.message)
                          );
                        }
                      }
                    }),
                    t && (await Z.E.delete(`${d}${u}/${e}/${l}`));
                } else i = await n();
                g.Am.success(`${t.labels.singular} successfully duplicated.`, {
                  autoClose: 3e3,
                }),
                  c(!1),
                  setTimeout(() => {
                    s({ pathname: `${v}/collections/${e}/${i}` });
                  }, 10);
              },
              [o, m, t.labels.singular, c, r, f, d, u, e, l, s, v]
            ),
            $ = (0, a.useCallback)(async () => {
              E(!1), await y(!0);
            }, [y]);
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              b.Z,
              {
                id: "action-duplicate",
                buttonStyle: "none",
                className: w,
                onClick: () => y(!1),
              },
              "Duplicate"
            ),
            o &&
              p &&
              a.createElement(
                h.Modal,
                { slug: f, className: "duplicate__modal" },
                a.createElement(
                  C.Z,
                  { className: "duplicate__modal-template" },
                  a.createElement("h1", null, "Confirm duplicate"),
                  a.createElement(
                    "p",
                    null,
                    "You have unsaved changes. Would you like to continue to duplicate?"
                  ),
                  a.createElement(
                    b.Z,
                    {
                      id: "confirm-cancel",
                      buttonStyle: "secondary",
                      type: "button",
                      onClick: () => r(f),
                    },
                    "Cancel"
                  ),
                  a.createElement(
                    b.Z,
                    { onClick: $, id: "confirm-duplicate" },
                    "Duplicate without saving changes"
                  )
                )
              )
          );
        };
      var N = l(3902);
      l(78612);
      const A = "delete-document",
        S = (e) => {
          const {
              title: t,
              id: l,
              buttonId: s,
              collection: {
                admin: { useAsTitle: o },
                slug: r,
                labels: { singular: c } = {},
              } = {},
            } = e,
            {
              serverURL: d,
              routes: { api: u, admin: m },
            } = (0, i.Z)(),
            { setModified: v } = (0, _.useForm)(),
            [p, E] = (0, a.useState)(!1),
            { toggleModal: f } = (0, h.useModal)(),
            y = (0, n.k6)(),
            $ = (0, N.Z)(o) || l,
            w = t || $,
            k = `delete-${l}`,
            S = (0, a.useCallback)(() => {
              g.Am.error(
                `There was an error while deleting ${$}. Please check your connection and try again.`
              );
            }, [$]),
            P = (0, a.useCallback)(() => {
              E(!0),
                v(!1),
                Z.E.delete(`${d}${u}/${r}/${l}`, {
                  headers: { "Content-Type": "application/json" },
                }).then(async (e) => {
                  try {
                    const t = await e.json();
                    return e.status < 400
                      ? (f(k),
                        g.Am.success(`${c} "${$}" successfully deleted.`),
                        y.push(`${m}/collections/${r}`))
                      : (f(k),
                        t.errors
                          ? t.errors.forEach((e) => g.Am.error(e.message))
                          : S(),
                        !1);
                  } catch (e) {
                    return S();
                  }
                });
            }, [S, f, k, y, l, c, r, $, m, u, d, v]);
          return l
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  "button",
                  {
                    type: "button",
                    id: s,
                    className: "delete-document__toggle",
                    onClick: (e) => {
                      e.preventDefault(), E(!1), f(k);
                    },
                  },
                  "Delete"
                ),
                a.createElement(
                  h.Modal,
                  { slug: k, className: A },
                  a.createElement(
                    C.Z,
                    { className: "delete-document__template" },
                    a.createElement("h1", null, "Confirm deletion"),
                    a.createElement(
                      "p",
                      null,
                      "You are about to delete the",
                      " ",
                      c,
                      " ",
                      '"',
                      a.createElement("strong", null, w),
                      '". Are you sure?'
                    ),
                    a.createElement(
                      b.Z,
                      {
                        id: "confirm-cancel",
                        buttonStyle: "secondary",
                        type: "button",
                        onClick: p ? void 0 : () => f(k),
                      },
                      "Cancel"
                    ),
                    a.createElement(
                      b.Z,
                      { onClick: p ? void 0 : P, id: "confirm-delete" },
                      p ? "Deleting..." : "Confirm"
                    )
                  )
                )
              )
            : null;
        };
      var P = l(37276),
        F = l(89877),
        L = l(38398),
        M = l(50854),
        T = l(73588),
        I = l(8742),
        K = l(56054),
        U = l(17095),
        D = l(24531),
        R = l(11750),
        j = l(8792),
        O = l(45074),
        x = l(9684),
        G = l(69850);
      l(37841);
      const V = "collection-edit",
        z = (e) => {
          var t, l, s, o, r, c, g, h, b, Z, _, C, w, N, A, z, q, B;
          const { params: { id: W } = {} } = (0, n.$B)(),
            {
              admin: { dateFormat: J },
              routes: { admin: Y },
            } = (0, i.Z)(),
            { publishedDoc: H } = (0, O.x5)(),
            {
              collection: Q,
              isEditing: X,
              data: ee,
              onSave: te,
              permissions: le,
              isLoading: ae,
              initialState: ne,
              apiURL: ie,
              action: se,
              hasSavePermission: oe,
            } = e,
            {
              slug: re,
              fields: ce,
              admin: {
                useAsTitle: de,
                disableDuplicate: ue,
                preview: me,
                hideAPIURL: ve,
              },
              versions: pe,
              timestamps: Ee,
              auth: fe,
              upload: ye,
            } = Q,
            $e = [V, X && `${V}--is-editing`].filter(Boolean).join(" "),
            ge = X ? "update" : "create";
          return a.createElement(
            "div",
            { className: $e },
            ae && a.createElement(p.Z, null),
            !ae &&
              a.createElement(
                x.R.Provider,
                { value: ge },
                a.createElement(
                  v.Z,
                  {
                    className: `${V}__form`,
                    method: W ? "patch" : "post",
                    action: se,
                    onSuccess: te,
                    disabled: !oe,
                    initialState: ne,
                  },
                  a.createElement(
                    "div",
                    { className: `${V}__main` },
                    a.createElement(P.Z, {
                      title: `${X ? "Editing" : "Creating"} - ${
                        Q.labels.singular
                      }`,
                      description: `${X ? "Editing" : "Creating"} - ${
                        Q.labels.singular
                      }`,
                      keywords: `${Q.labels.singular}, Payload, CMS`,
                    }),
                    a.createElement(m.Z, null),
                    !(
                      (null === (t = Q.versions) || void 0 === t
                        ? void 0
                        : t.drafts) &&
                      (null ===
                        (s =
                          null === (l = Q.versions) || void 0 === l
                            ? void 0
                            : l.drafts) || void 0 === s
                        ? void 0
                        : s.autosave)
                    ) && a.createElement(M.Z, null),
                    a.createElement(
                      G.T,
                      { className: `${V}__edit` },
                      a.createElement(
                        "header",
                        { className: `${V}__header` },
                        a.createElement(
                          "h1",
                          null,
                          a.createElement(L.Z, {
                            data: ee,
                            useAsTitle: de,
                            fallback: "[Untitled]",
                          })
                        )
                      ),
                      fe &&
                        a.createElement(T.Z, {
                          useAPIKey: fe.useAPIKey,
                          requirePassword: !X,
                          verify: fe.verify,
                          collection: Q,
                          email: null == ee ? void 0 : ee.email,
                          operation: ge,
                        }),
                      ye && a.createElement(K.Z, { data: ee, collection: Q }),
                      a.createElement(y.Z, {
                        readOnly: !oe,
                        permissions: le.fields,
                        filter: (e) => {
                          var t, l;
                          return (
                            !(null === (t = null == e ? void 0 : e.admin) ||
                            void 0 === t
                              ? void 0
                              : t.position) ||
                            "sidebar" !==
                              (null === (l = null == e ? void 0 : e.admin) ||
                              void 0 === l
                                ? void 0
                                : l.position)
                          );
                        },
                        fieldTypes: F.Z,
                        fieldSchema: ce,
                      })
                    )
                  ),
                  a.createElement(
                    "div",
                    { className: `${V}__sidebar-wrap` },
                    a.createElement(
                      "div",
                      { className: `${V}__sidebar` },
                      a.createElement(
                        "div",
                        { className: `${V}__sidebar-sticky-wrap` },
                        a.createElement(
                          "ul",
                          { className: `${V}__collection-actions` },
                          (null === (o = null == le ? void 0 : le.create) ||
                          void 0 === o
                            ? void 0
                            : o.permission) &&
                            a.createElement(
                              a.Fragment,
                              null,
                              a.createElement(
                                "li",
                                null,
                                a.createElement(
                                  d.Link,
                                  {
                                    id: "action-create",
                                    to: `${Y}/collections/${re}/create`,
                                  },
                                  "Create New"
                                )
                              ),
                              !ue &&
                                X &&
                                a.createElement(
                                  "li",
                                  null,
                                  a.createElement(k, {
                                    collection: Q,
                                    id: W,
                                    slug: re,
                                  })
                                )
                            ),
                          (null === (r = null == le ? void 0 : le.delete) ||
                          void 0 === r
                            ? void 0
                            : r.permission) &&
                            a.createElement(
                              "li",
                              null,
                              a.createElement(S, {
                                collection: Q,
                                id: W,
                                buttonId: "action-delete",
                              })
                            )
                        ),
                        a.createElement(
                          "div",
                          {
                            className: `${V}__document-actions${
                              ((null === (c = Q.versions) || void 0 === c
                                ? void 0
                                : c.drafts) &&
                                !(null ===
                                  (h =
                                    null === (g = Q.versions) || void 0 === g
                                      ? void 0
                                      : g.drafts) || void 0 === h
                                  ? void 0
                                  : h.autosave)) ||
                              (X && me)
                                ? ` ${V}__document-actions--has-2`
                                : ""
                            }`,
                          },
                          me &&
                            (!(null === (b = Q.versions) || void 0 === b
                              ? void 0
                              : b.drafts) ||
                              (null ===
                                (_ =
                                  null === (Z = Q.versions) || void 0 === Z
                                    ? void 0
                                    : Z.drafts) || void 0 === _
                                ? void 0
                                : _.autosave)) &&
                            a.createElement(E.Z, {
                              generatePreviewURL: me,
                              data: ee,
                            }),
                          oe &&
                            a.createElement(
                              a.Fragment,
                              null,
                              (null === (C = Q.versions) || void 0 === C
                                ? void 0
                                : C.drafts) &&
                                a.createElement(
                                  a.Fragment,
                                  null,
                                  !Q.versions.drafts.autosave &&
                                    a.createElement(j.Z, null),
                                  a.createElement(R.Z, null)
                                ),
                              !(null === (w = Q.versions) || void 0 === w
                                ? void 0
                                : w.drafts) &&
                                a.createElement(
                                  f.Z,
                                  { buttonId: "action-save" },
                                  "Save"
                                )
                            )
                        ),
                        a.createElement(
                          "div",
                          { className: `${V}__sidebar-fields` },
                          X &&
                            me &&
                            (null === (N = Q.versions) || void 0 === N
                              ? void 0
                              : N.drafts) &&
                            !(null ===
                              (z =
                                null === (A = Q.versions) || void 0 === A
                                  ? void 0
                                  : A.drafts) || void 0 === z
                              ? void 0
                              : z.autosave) &&
                            a.createElement(E.Z, {
                              generatePreviewURL: me,
                              data: ee,
                            }),
                          (null === (q = Q.versions) || void 0 === q
                            ? void 0
                            : q.drafts) &&
                            a.createElement(
                              a.Fragment,
                              null,
                              a.createElement(D.Z, null),
                              (null === (B = Q.versions) || void 0 === B
                                ? void 0
                                : B.drafts.autosave) &&
                                oe &&
                                a.createElement(U.Z, {
                                  publishedDocUpdatedAt:
                                    (null == H ? void 0 : H.updatedAt) ||
                                    (null == ee ? void 0 : ee.createdAt),
                                  collection: Q,
                                  id: W,
                                })
                            ),
                          a.createElement(y.Z, {
                            readOnly: !oe,
                            permissions: le.fields,
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
                            fieldTypes: F.Z,
                            fieldSchema: ce,
                          })
                        ),
                        X &&
                          a.createElement(
                            "ul",
                            { className: `${V}__meta` },
                            !ve &&
                              a.createElement(
                                "li",
                                { className: `${V}__api-url` },
                                a.createElement(
                                  "span",
                                  { className: `${V}__label` },
                                  "API URL",
                                  " ",
                                  a.createElement($.Z, { value: ie })
                                ),
                                a.createElement(
                                  "a",
                                  {
                                    href: ie,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                  ie
                                )
                              ),
                            pe &&
                              a.createElement(
                                "li",
                                null,
                                a.createElement(
                                  "div",
                                  { className: `${V}__label` },
                                  "Versions"
                                ),
                                a.createElement(I.Z, { collection: Q, id: W })
                              ),
                            Ee &&
                              a.createElement(
                                a.Fragment,
                                null,
                                ee.updatedAt &&
                                  a.createElement(
                                    "li",
                                    null,
                                    a.createElement(
                                      "div",
                                      { className: `${V}__label` },
                                      "Last Modified"
                                    ),
                                    a.createElement(
                                      "div",
                                      null,
                                      (0, u.default)(new Date(ee.updatedAt), J)
                                    )
                                  ),
                                ((null == H ? void 0 : H.createdAt) ||
                                  (null == ee ? void 0 : ee.createdAt)) &&
                                  a.createElement(
                                    "li",
                                    null,
                                    a.createElement(
                                      "div",
                                      { className: `${V}__label` },
                                      "Created"
                                    ),
                                    a.createElement(
                                      "div",
                                      null,
                                      (0, u.default)(
                                        new Date(
                                          (null == H ? void 0 : H.createdAt) ||
                                            (null == ee ? void 0 : ee.createdAt)
                                        ),
                                        J
                                      )
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
      var q = l(83780);
      const B = (e, t) =>
        t
          ? e.fields.filter(
              (e) => ((0, q.fieldAffectsData)(e) && "id" !== e.name) || !0
            )
          : e.fields;
      var W = l(19826),
        J = l(40684),
        Y = l(91455);
      const H = (e) => {
        var t, l, d;
        const { collection: u, isEditing: m } = e,
          {
            slug: v,
            labels: { plural: p },
            admin: {
              useAsTitle: E,
              components: { views: { Edit: f } = {} } = {},
            } = {},
          } = u,
          [y] = (0, a.useState)(() => B(u, m)),
          [$] = (0, a.useState)(() => ({ ...u, fields: y })),
          [g, h] = (0, a.useState)(),
          b = (0, J.bU)(),
          {
            serverURL: Z,
            routes: { admin: _, api: C },
          } = (0, i.Z)(),
          { params: { id: w } = {} } = (0, n.$B)(),
          { state: k } = (0, n.TH)(),
          N = (0, n.k6)(),
          { setStepNav: A } = (0, o.FP)(),
          [S, P] = (0, a.useState)(),
          { permissions: F, user: L } = (0, s.a)(),
          { getVersions: M, preferencesKey: T } = (0, O.x5)(),
          { getPreference: I } = (0, Y.G)(),
          K = (0, a.useCallback)(
            async (e) => {
              var t;
              if ((M(), m)) {
                const t = await (0, W.Z)({
                  fieldSchema: $.fields,
                  data: e.doc,
                  user: L,
                  id: w,
                  operation: "update",
                  locale: b,
                });
                P(t);
              } else
                h(
                  `${_}/collections/${$.slug}/${
                    null === (t = null == e ? void 0 : e.doc) || void 0 === t
                      ? void 0
                      : t.id
                  }`
                );
            },
            [_, $, m, M, L, w, b]
          ),
          [{ data: U, isLoading: D, isError: R }] = (0, r.Z)(
            m ? `${Z}${C}/${v}/${w}` : null,
            {
              initialParams: {
                "fallback-locale": "null",
                depth: 0,
                draft: "true",
              },
            }
          ),
          j = (null == k ? void 0 : k.data) || U;
        if (
          ((0, a.useEffect)(() => {
            const e = [{ url: `${_}/collections/${v}`, label: p }];
            if (m) {
              let t = "";
              j && (t = E ? (j[E] ? j[E] : "[Untitled]") : j.id),
                e.push({ label: t });
            } else e.push({ label: "Create New" });
            A(e);
          }, [A, m, p, j, v, E, _]),
          (0, a.useEffect)(() => {
            if (D) return;
            (async () => {
              const e = await (0, W.Z)({
                fieldSchema: y,
                data: j,
                user: L,
                operation: m ? "update" : "create",
                id: w,
                locale: b,
              });
              await I(T), P(e);
            })();
          }, [j, y, m, w, L, b, D, T, I]),
          (0, a.useEffect)(() => {
            g && N.push(g);
          }, [N, g]),
          R)
        )
          return a.createElement(n.l_, { to: `${_}/not-found` });
        const x =
            null === (t = null == F ? void 0 : F.collections) || void 0 === t
              ? void 0
              : t[v],
          G = `${Z}${C}/${v}/${w}${$.versions.drafts ? "?draft=true" : ""}`,
          V = `${Z}${C}/${v}${
            m ? `/${w}` : ""
          }?locale=${b}&depth=0&fallback-locale=null`,
          q =
            (m &&
              (null === (l = null == x ? void 0 : x.update) || void 0 === l
                ? void 0
                : l.permission)) ||
            (!m &&
              (null === (d = null == x ? void 0 : x.create) || void 0 === d
                ? void 0
                : d.permission));
        return a.createElement(c.Z, {
          DefaultComponent: z,
          CustomComponent: f,
          componentProps: {
            isLoading: !S,
            data: j,
            collection: $,
            permissions: x,
            isEditing: m,
            onSave: K,
            initialState: S,
            hasSavePermission: q,
            apiURL: G,
            action: V,
          },
        });
      };
    },
    3902: (e, t, l) => {
      l.d(t, { Z: () => n });
      var a = l(64012);
      const n = (e) => {
        const { getField: t } = (0, a.useWatchForm)(),
          l = t(e);
        return null == l ? void 0 : l.value;
      };
    },
  },
]);
