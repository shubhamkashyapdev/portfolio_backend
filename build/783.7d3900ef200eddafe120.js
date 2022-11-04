(self.webpackChunkpayload_starter_typescript =
  self.webpackChunkpayload_starter_typescript || []).push([
  [783],
  {
    52149: (e, t, n) => {
      "use strict";
      function o(e, t) {
        if (null == e)
          throw new TypeError(
            "assign requires that input parameter not be null or undefined"
          );
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }
      n.d(t, { Z: () => o });
    },
    84129: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var o = n(19013),
        a = n(13882);
      function r(e, t) {
        (0, a.Z)(2, arguments);
        var n = (0, o.default)(e),
          r = (0, o.default)(t),
          s = n.getFullYear() - r.getFullYear(),
          l = n.getMonth() - r.getMonth();
        return 12 * s + l;
      }
    },
    83894: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var o = n(19013),
        a = n(13882);
      function r(e) {
        (0, a.Z)(1, arguments);
        var t = (0, o.default)(e);
        return t.setHours(23, 59, 59, 999), t;
      }
    },
    4135: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      var o = n(19013),
        a = n(13882);
      function r(e) {
        (0, a.Z)(1, arguments);
        var t = (0, o.default)(e),
          n = t.getMonth();
        return (
          t.setFullYear(t.getFullYear(), n + 1, 0),
          t.setHours(23, 59, 59, 999),
          t
        );
      }
    },
    17095: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => T });
      var o = n(84314),
        a = n(19013),
        r = n(13882);
      function s(e, t) {
        (0, r.Z)(2, arguments);
        var n = (0, a.default)(e),
          o = (0, a.default)(t),
          s = n.getTime() - o.getTime();
        return s < 0 ? -1 : s > 0 ? 1 : s;
      }
      var l = n(84129),
        i = n(83894),
        u = n(4135);
      function c(e) {
        (0, r.Z)(1, arguments);
        var t = (0, a.default)(e);
        return (0, i.default)(t).getTime() === (0, u.default)(t).getTime();
      }
      function d(e, t) {
        (0, r.Z)(2, arguments);
        var n,
          o = (0, a.default)(e),
          i = (0, a.default)(t),
          u = s(o, i),
          d = Math.abs((0, l.default)(o, i));
        if (d < 1) n = 0;
        else {
          1 === o.getMonth() && o.getDate() > 27 && o.setDate(30),
            o.setMonth(o.getMonth() - u * d);
          var f = s(o, i) === -u;
          c((0, a.default)(e)) && 1 === d && 1 === s(e, i) && (f = !1),
            (n = u * (d - Number(f)));
        }
        return 0 === n ? 0 : n;
      }
      function f(e, t) {
        return (
          (0, r.Z)(2, arguments),
          (0, a.default)(e).getTime() - (0, a.default)(t).getTime()
        );
      }
      var v = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function (e) {
          return e < 0 ? Math.ceil(e) : Math.floor(e);
        },
      };
      function p(e) {
        return e ? v[e] : v.trunc;
      }
      function h(e, t, n) {
        (0, r.Z)(2, arguments);
        var o = f(e, t) / 1e3;
        return p(null == n ? void 0 : n.roundingMethod)(o);
      }
      var m = n(8958),
        b = n(52149);
      function y(e) {
        return (0, b.Z)({}, e);
      }
      var g = n(24262),
        C = 1440,
        w = 43200;
      var k = n(5977),
        _ = n(39249),
        E = n(67294),
        M = n(9980),
        $ = n(64012),
        Z = n(40684),
        D = n(56490),
        S = n(45074),
        N = n(25185);
      n(41263);
      const T = ({
        collection: e,
        global: t,
        id: n,
        publishedDocUpdatedAt: l,
      }) => {
        var i, u, c, f;
        const {
            serverURL: v,
            routes: { api: p, admin: T },
          } = (0, M.Z)(),
          { versions: U, getVersions: x } = (0, S.x5)(),
          { fields: A, dispatchFields: O } = (0, $.useWatchForm)(),
          P = (0, $.useFormModified)(),
          F = (0, Z.bU)(),
          { replace: j } = (0, k.k6)();
        let L = 800;
        (null == e ? void 0 : e.versions.drafts) &&
          (null ===
            (u =
              null === (i = e.versions) || void 0 === i ? void 0 : i.drafts) ||
          void 0 === u
            ? void 0
            : u.autosave) &&
          (L = e.versions.drafts.autosave.interval),
          (null == t ? void 0 : t.versions.drafts) &&
            (null ===
              (f =
                null === (c = t.versions) || void 0 === c
                  ? void 0
                  : c.drafts) || void 0 === f
              ? void 0
              : f.autosave) &&
            (L = t.versions.drafts.autosave.interval);
        const [R, B] = (0, E.useState)(!1),
          [X, Y] = (0, E.useState)(),
          H = (0, N.Z)(A, L),
          V = (0, E.useRef)(A);
        V.current = A;
        const I = (0, E.useCallback)(async () => {
          const t = await fetch(
            `${v}${p}/${e.slug}?locale=${F}&fallback-locale=null&depth=0&draft=true`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({}),
            }
          );
          if (201 === t.status) {
            const n = await t.json();
            j(`${T}/collections/${e.slug}/${n.doc.id}`, {
              state: { data: n.doc },
            });
          } else
            _.Am.error("There was a problem while autosaving this document.");
        }, [e, v, p, T, F, j]);
        return (
          (0, E.useEffect)(() => {
            !n && e && I();
          }, [n, e, I]),
          (0, E.useEffect)(() => {
            (async () => {
              if (P) {
                let o, a;
                if (
                  (B(!0),
                  e &&
                    n &&
                    ((o = `${v}${p}/${e.slug}/${n}?draft=true&autosave=true&locale=${F}`),
                    (a = "PATCH")),
                  t &&
                    ((o = `${v}${p}/globals/${t.slug}?draft=true&autosave=true&locale=${F}`),
                    (a = "POST")),
                  o)
                ) {
                  const e = { ...(0, D.Z)(V.current), _status: "draft" };
                  setTimeout(async () => {
                    const t = await fetch(o, {
                      method: a,
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(e),
                    });
                    B(!1), 200 === t.status && (Y(new Date().getTime()), x());
                  }, 1e3);
                }
              }
            })();
          }, [H, P, v, p, e, t, n, O, x, F]),
          (0, E.useEffect)(() => {
            var e;
            (
              null === (e = null == U ? void 0 : U.docs) || void 0 === e
                ? void 0
                : e[0]
            )
              ? Y(new Date(U.docs[0].updatedAt).getTime())
              : l && Y(new Date(l).getTime());
          }, [l, U]),
          E.createElement(
            "div",
            { className: "autosave" },
            R && "Saving...",
            !R &&
              X &&
              E.createElement(
                E.Fragment,
                null,
                "Last saved ",
                (function (e, t, n) {
                  var l, i;
                  (0, r.Z)(2, arguments);
                  var u = (0, o.j)(),
                    c =
                      null !==
                        (l =
                          null !== (i = null == n ? void 0 : n.locale) &&
                          void 0 !== i
                            ? i
                            : u.locale) && void 0 !== l
                        ? l
                        : m.Z;
                  if (!c.formatDistance)
                    throw new RangeError(
                      "locale must contain formatDistance property"
                    );
                  var f = s(e, t);
                  if (isNaN(f)) throw new RangeError("Invalid time value");
                  var v,
                    p,
                    k = (0, b.Z)(y(n), {
                      addSuffix: Boolean(null == n ? void 0 : n.addSuffix),
                      comparison: f,
                    });
                  f > 0
                    ? ((v = (0, a.default)(t)), (p = (0, a.default)(e)))
                    : ((v = (0, a.default)(e)), (p = (0, a.default)(t)));
                  var _,
                    E = h(p, v),
                    M = ((0, g.Z)(p) - (0, g.Z)(v)) / 1e3,
                    $ = Math.round((E - M) / 60);
                  if ($ < 2)
                    return null != n && n.includeSeconds
                      ? E < 5
                        ? c.formatDistance("lessThanXSeconds", 5, k)
                        : E < 10
                        ? c.formatDistance("lessThanXSeconds", 10, k)
                        : E < 20
                        ? c.formatDistance("lessThanXSeconds", 20, k)
                        : E < 40
                        ? c.formatDistance("halfAMinute", 0, k)
                        : E < 60
                        ? c.formatDistance("lessThanXMinutes", 1, k)
                        : c.formatDistance("xMinutes", 1, k)
                      : 0 === $
                      ? c.formatDistance("lessThanXMinutes", 1, k)
                      : c.formatDistance("xMinutes", $, k);
                  if ($ < 45) return c.formatDistance("xMinutes", $, k);
                  if ($ < 90) return c.formatDistance("aboutXHours", 1, k);
                  if ($ < C) {
                    var Z = Math.round($ / 60);
                    return c.formatDistance("aboutXHours", Z, k);
                  }
                  if ($ < 2520) return c.formatDistance("xDays", 1, k);
                  if ($ < w) {
                    var D = Math.round($ / C);
                    return c.formatDistance("xDays", D, k);
                  }
                  if ($ < 86400)
                    return (
                      (_ = Math.round($ / w)),
                      c.formatDistance("aboutXMonths", _, k)
                    );
                  if ((_ = d(p, v)) < 12) {
                    var S = Math.round($ / w);
                    return c.formatDistance("xMonths", S, k);
                  }
                  var N = _ % 12,
                    T = Math.floor(_ / 12);
                  return N < 3
                    ? c.formatDistance("aboutXYears", T, k)
                    : N < 9
                    ? c.formatDistance("overXYears", T, k)
                    : c.formatDistance("almostXYears", T + 1, k);
                })(new Date(), new Date(X)),
                " ago"
              )
          )
        );
      };
    },
    4983: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => l });
      var o = n(67294),
        a = n(28630),
        r = n(77329),
        s = n(40684);
      n(33427);
      const l = (e) => {
        const { generatePreviewURL: t, data: n } = e,
          [l, i] = (0, o.useState)(void 0),
          u = (0, s.bU)(),
          { token: c } = (0, a.a)();
        return (
          (0, o.useEffect)(() => {
            if (t && "function" == typeof t) {
              (async () => {
                const e = await t(n, { locale: u, token: c });
                i(e);
              })();
            }
          }, [t, u, c, n]),
          l
            ? o.createElement(
                r.Z,
                {
                  el: "anchor",
                  className: "preview-btn",
                  buttonStyle: "secondary",
                  url: l,
                  newTab: !0,
                },
                "Preview"
              )
            : null
        );
      };
    },
    11750: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => l });
      var o = n(67294),
        a = n(46268),
        r = n(45074),
        s = n(64012);
      const l = () => {
        const { unpublishedVersions: e, publishedDoc: t } = (0, r.x5)(),
          { submit: n } = (0, s.useForm)(),
          l = (0, s.useFormModified)(),
          i = (null == e ? void 0 : e.totalDocs) > 0,
          u = l || i || !t,
          c = (0, o.useCallback)(() => {
            n({ overrides: { _status: "published" } });
          }, [n]);
        return o.createElement(
          a.Z,
          { type: "button", onClick: c, disabled: !u },
          "Publish changes"
        );
      };
    },
    8792: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => u });
      var o = n(67294),
        a = n(9980),
        r = n(46268),
        s = n(64012),
        l = n(45074),
        i = n(40684);
      n(79129);
      const u = () => {
        const {
            serverURL: e,
            routes: { api: t },
          } = (0, a.Z)(),
          { submit: n } = (0, s.useForm)(),
          { collection: u, global: c, id: d } = (0, l.x5)(),
          f = (0, s.useFormModified)(),
          v = (0, i.bU)(),
          p = f,
          h = (0, o.useCallback)(() => {
            const o = `?locale=${v}&depth=0&fallback-locale=null&draft=true`;
            let a,
              r = "POST";
            u &&
              ((a = `${e}${t}/${u.slug}${d ? `/${d}` : ""}${o}`),
              d && (r = "PATCH")),
              c && (a = `${e}${t}/globals/${c.slug}${o}`),
              n({
                action: a,
                method: r,
                skipValidation: !0,
                overrides: { _status: "draft" },
              });
          }, [n, u, c, e, t, v, d]);
        return o.createElement(
          r.Z,
          {
            className: "save-draft",
            type: "button",
            buttonStyle: "secondary",
            onClick: h,
            disabled: !p,
          },
          "Save draft"
        );
      };
    },
    24531: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => p });
      var o = n(67294),
        a = n(39249),
        r = n(71851),
        s = n(9980),
        l = n(45074),
        i = n(77329),
        u = n(39599),
        c = n(93780),
        d = n(64012),
        f = n(40684);
      n(22118);
      const v = "status",
        p = () => {
          var e, t;
          const {
              publishedDoc: n,
              unpublishedVersions: p,
              collection: h,
              global: m,
              id: b,
              getVersions: y,
            } = (0, l.x5)(),
            { toggleModal: g } = (0, r.useModal)(),
            {
              serverURL: C,
              routes: { api: w },
            } = (0, s.Z)(),
            [k, _] = (0, o.useState)(!1),
            { reset: E } = (0, d.useForm)(),
            M = (0, f.bU)(),
            $ = `confirm-un-publish-${b}`,
            Z = `confirm-revert-${b}`;
          let D;
          (null === (e = null == p ? void 0 : p.docs) || void 0 === e
            ? void 0
            : e.length) > 0 && n
            ? (D = "Changed")
            : n
            ? n &&
              (null === (t = null == p ? void 0 : p.docs) || void 0 === t
                ? void 0
                : t.length) <= 1 &&
              (D = "Published")
            : (D = "Draft");
          const S = (0, o.useCallback)(
            async (e) => {
              let t, o, r;
              _(!0),
                "unpublish" === e && (r = { _status: "draft" }),
                "revert" === e && (r = n),
                h &&
                  ((t = `${C}${w}/${h.slug}/${b}?depth=0&locale=${M}&fallback-locale=null`),
                  (o = "patch")),
                m &&
                  ((t = `${C}${w}/globals/${m.slug}?depth=0&locale=${M}&fallback-locale=null`),
                  (o = "post"));
              const s = await c.E[o](t, {
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(r),
              });
              if (200 === s.status) {
                let e, t;
                const n = await s.json();
                m && ((e = n.result), (t = m.fields)),
                  h && ((e = n.doc), (t = h.fields)),
                  E(t, e),
                  a.Am.success(n.message),
                  y();
              } else
                a.Am.error(
                  "There was a problem while un-publishing this document."
                );
              _(!1), "revert" === e && g(Z), "unpublish" === e && g($);
            },
            [h, m, n, C, w, b, M, E, y, g, Z, $]
          );
          return D
            ? o.createElement(
                "div",
                { className: v },
                o.createElement(
                  "div",
                  { className: "status__value-wrap" },
                  o.createElement("span", { className: "status__value" }, D),
                  "Published" === D &&
                    o.createElement(
                      o.Fragment,
                      null,
                      " — ",
                      o.createElement(
                        i.Z,
                        {
                          onClick: () => g($),
                          className: "status__action",
                          buttonStyle: "none",
                        },
                        "Unpublish"
                      ),
                      o.createElement(
                        r.Modal,
                        { slug: $, className: "status__modal" },
                        o.createElement(
                          u.Z,
                          { className: "status__modal-template" },
                          o.createElement("h1", null, "Confirm unpublish"),
                          o.createElement(
                            "p",
                            null,
                            "You are about to unpublish this document. Are you sure?"
                          ),
                          o.createElement(
                            i.Z,
                            {
                              buttonStyle: "secondary",
                              type: "button",
                              onClick: k ? void 0 : () => g($),
                            },
                            "Cancel"
                          ),
                          o.createElement(
                            i.Z,
                            { onClick: k ? void 0 : () => S("unpublish") },
                            k ? "Unpublishing..." : "Confirm"
                          )
                        )
                      )
                    ),
                  "Changed" === D &&
                    o.createElement(
                      o.Fragment,
                      null,
                      " — ",
                      o.createElement(
                        i.Z,
                        {
                          onClick: () => g(Z),
                          className: "status__action",
                          buttonStyle: "none",
                        },
                        "Revert to published"
                      ),
                      o.createElement(
                        r.Modal,
                        { slug: Z, className: "status__modal" },
                        o.createElement(
                          u.Z,
                          { className: "status__modal-template" },
                          o.createElement(
                            "h1",
                            null,
                            "Confirm revert to saved"
                          ),
                          o.createElement(
                            "p",
                            null,
                            "You are about to revert this document's changes to its published state. Are you sure?"
                          ),
                          o.createElement(
                            i.Z,
                            {
                              buttonStyle: "secondary",
                              type: "button",
                              onClick: k ? void 0 : () => g(Z),
                            },
                            "Cancel"
                          ),
                          o.createElement(
                            i.Z,
                            { onClick: k ? void 0 : () => S("revert") },
                            k ? "Reverting..." : "Confirm"
                          )
                        )
                      )
                    )
                )
              )
            : null;
        };
    },
    8742: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => u });
      var o = n(67294),
        a = n(9980),
        r = n(77329),
        s = n(45074),
        l = n(43442);
      n(80351);
      const i = "versions-count",
        u = ({ collection: e, global: t, id: n }) => {
          var u, c, d;
          const {
              routes: { admin: f },
            } = (0, a.Z)(),
            {
              versions: v,
              publishedDoc: p,
              unpublishedVersions: h,
            } = (0, s.x5)(),
            m =
              (null ===
                (d =
                  null ===
                    (c =
                      null === (u = null == h ? void 0 : h.docs) || void 0 === u
                        ? void 0
                        : u[0]) || void 0 === c
                    ? void 0
                    : c.version) || void 0 === d
                ? void 0
                : d._status) ||
              (null == p ? void 0 : p._status) ||
              "draft";
          let b, y;
          e && ((b = `${f}/collections/${e.slug}/${n}/versions`), (y = e)),
            t && ((b = `${f}/globals/${t.slug}/versions`), (y = t));
          let g = 0;
          (0, l.y)({ entity: y, versions: v, docStatus: m }) && (g = 1);
          const C = ((null == v ? void 0 : v.totalDocs) || 0) + g;
          return o.createElement(
            "div",
            { className: i },
            0 === C && "No versions found",
            C > 0 &&
              o.createElement(
                r.Z,
                {
                  className: `${i}__button`,
                  buttonStyle: "none",
                  el: "link",
                  to: b,
                },
                C,
                " ",
                "version",
                C > 1 && "s",
                " ",
                "found"
              )
          );
        };
    },
    50854: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => d });
      var o = n(67294),
        a = n(82949),
        r = n.n(a),
        s = n(28630),
        l = n(64012),
        i = n(39599),
        u = n(77329);
      n(22300);
      const c = "leave-without-saving",
        d = () => {
          const e = (0, l.useFormModified)(),
            { user: t } = (0, s.a)();
          return o.createElement(
            r(),
            { when: Boolean(e && t) },
            ({ onConfirm: e, onCancel: t }) =>
              o.createElement(
                "div",
                { className: c },
                o.createElement(
                  i.Z,
                  { className: `${c}__template` },
                  o.createElement("h1", null, "Leave without saving"),
                  o.createElement(
                    "p",
                    null,
                    "Your changes have not been saved. If you leave now, you will lose your changes."
                  ),
                  o.createElement(
                    u.Z,
                    { onClick: t, buttonStyle: "secondary" },
                    "Stay on this page"
                  ),
                  o.createElement(u.Z, { onClick: e }, "Leave anyway")
                )
              )
          );
        };
    },
    82949: (e, t, n) => {
      e.exports = (function (e) {
        var t = {};
        function n(o) {
          if (t[o]) return t[o].exports;
          var a = (t[o] = { i: o, l: !1, exports: {} });
          return e[o].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, o) {
            n.o(e, t) ||
              Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: o,
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
          var o,
            a =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              },
            r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              return function (t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
              };
            })(),
            s = n(1),
            l = (o = s) && o.__esModule ? o : { default: o },
            i = n(2);
          var u = { action: null, isActive: !1, nextLocation: null },
            c = (function (e) {
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
                  (n.state = a({}, u, { unblock: function () {} })),
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
                r(t, [
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
                        o = n.action,
                        r = n.nextLocation;
                      (o = {
                        POP: this.props.allowGoBack ? "goBack" : "push",
                        PUSH: "push",
                        REPLACE: "replace",
                      }[o || "PUSH"]),
                        r || (r = { pathname: "/" });
                      var s = this.props.history;
                      if (
                        (this.state.unblock(),
                        (this._prevUserAction = "CONFIRM"),
                        "goBack" === o)
                      ) {
                        var l = s.listen(function () {
                          l(),
                            t._isMounted &&
                              t.setState(
                                a({}, u, { unblock: s.block(t.block) })
                              );
                        });
                        s.goBack();
                      } else
                        s[o](r),
                          this._isMounted &&
                            this.setState(
                              a({}, u, {
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
                        (e._prevUserAction = "CANCEL"), e.setState(a({}, u));
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
                        ? l.default.createElement(
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
            })(l.default.Component);
          t.default = (0, i.withRouter)(c);
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
