/*! For license information please see 274.70a69bb944dc5da322b2.js.LICENSE.txt */
(self.webpackChunkpayload_starter_typescript =
  self.webpackChunkpayload_starter_typescript || []).push([
  [274],
  {
    6907: (e) => {
      "use strict";
      e.exports = function (e) {
        if (((e = String(e || "")), n.test(e))) return "rtl";
        if (u.test(e)) return "ltr";
        return "neutral";
      };
      var t = "֑-߿יִ-﷽ﹰ-ﻼ",
        r = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
        n = new RegExp("^[^" + r + "]*[" + t + "]"),
        u = new RegExp("^[^" + t + "]*[" + r + "]");
    },
    18156: (e, t) => {
      "use strict";
      for (
        var r =
            "undefined" != typeof window &&
            /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
          n = {
            alt: "altKey",
            control: "ctrlKey",
            meta: "metaKey",
            shift: "shiftKey",
          },
          u = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: r ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta",
          },
          a = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            " ": 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            delete: 46,
            meta: 91,
            numlock: 144,
            scrolllock: 145,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222,
          },
          o = 1;
        o < 20;
        o++
      )
        a["f" + o] = 111 + o;
      function i(e, t, r) {
        t && !("byKey" in t) && ((r = t), (t = null)),
          Array.isArray(e) || (e = [e]);
        var n = e.map(function (e) {
            return l(e, t);
          }),
          u = function (e) {
            return n.some(function (t) {
              return s(t, e);
            });
          };
        return null == r ? u : u(r);
      }
      function l(e, t) {
        var r = t && t.byKey,
          o = {},
          i = (e = e.replace("++", "+add")).split("+"),
          l = i.length;
        for (var s in n) o[n[s]] = !1;
        var f = !0,
          h = !1,
          D = void 0;
        try {
          for (
            var p, v = i[Symbol.iterator]();
            !(f = (p = v.next()).done);
            f = !0
          ) {
            var C = p.value,
              m = C.endsWith("?") && C.length > 1;
            m && (C = C.slice(0, -1));
            var g = d(C),
              B = n[g];
            if (C.length > 1 && !B && !u[C] && !a[g])
              throw new TypeError('Unknown modifier: "' + C + '"');
            (1 !== l && B) || (r ? (o.key = g) : (o.which = c(C))),
              B && (o[B] = !m || null);
          }
        } catch (e) {
          (h = !0), (D = e);
        } finally {
          try {
            !f && v.return && v.return();
          } finally {
            if (h) throw D;
          }
        }
        return o;
      }
      function s(e, t) {
        for (var r in e) {
          var n = e[r],
            u = void 0;
          if (
            null != n &&
            (null !=
              (u =
                "key" === r && null != t.key
                  ? t.key.toLowerCase()
                  : "which" === r
                  ? 91 === n && 93 === t.which
                    ? 91
                    : t.which
                  : t[r]) ||
              !1 !== n) &&
            u !== n
          )
            return !1;
        }
        return !0;
      }
      function c(e) {
        return (e = d(e)), a[e] || e.toUpperCase().charCodeAt(0);
      }
      function d(e) {
        return (e = e.toLowerCase()), (e = u[e] || e);
      }
      t.ZP = i;
    },
    62705: (e, t, r) => {
      var n = r(55639).Symbol;
      e.exports = n;
    },
    44239: (e, t, r) => {
      var n = r(62705),
        u = r(89607),
        a = r(2333),
        o = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : o && o in Object(e)
          ? u(e)
          : a(e);
      };
    },
    27561: (e, t, r) => {
      var n = r(67990),
        u = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, n(e) + 1).replace(u, "") : e;
      };
    },
    31957: (e, t, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = n;
    },
    89607: (e, t, r) => {
      var n = r(62705),
        u = Object.prototype,
        a = u.hasOwnProperty,
        o = u.toString,
        i = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        var t = a.call(e, i),
          r = e[i];
        try {
          e[i] = void 0;
          var n = !0;
        } catch (e) {}
        var u = o.call(e);
        return n && (t ? (e[i] = r) : delete e[i]), u;
      };
    },
    2333: (e) => {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    55639: (e, t, r) => {
      var n = r(31957),
        u = "object" == typeof self && self && self.Object === Object && self,
        a = n || u || Function("return this")();
      e.exports = a;
    },
    67990: (e) => {
      var t = /\s/;
      e.exports = function (e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)); );
        return r;
      };
    },
    23279: (e, t, r) => {
      var n = r(13218),
        u = r(7771),
        a = r(14841),
        o = Math.max,
        i = Math.min;
      e.exports = function (e, t, r) {
        var l,
          s,
          c,
          d,
          f,
          h,
          D = 0,
          p = !1,
          v = !1,
          C = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function m(t) {
          var r = l,
            n = s;
          return (l = s = void 0), (D = t), (d = e.apply(n, r));
        }
        function g(e) {
          return (D = e), (f = setTimeout(E, t)), p ? m(e) : d;
        }
        function B(e) {
          var r = e - h;
          return void 0 === h || r >= t || r < 0 || (v && e - D >= c);
        }
        function E() {
          var e = u();
          if (B(e)) return A(e);
          f = setTimeout(
            E,
            (function (e) {
              var r = t - (e - h);
              return v ? i(r, c - (e - D)) : r;
            })(e)
          );
        }
        function A(e) {
          return (f = void 0), C && l ? m(e) : ((l = s = void 0), d);
        }
        function F() {
          var e = u(),
            r = B(e);
          if (((l = arguments), (s = this), (h = e), r)) {
            if (void 0 === f) return g(h);
            if (v) return clearTimeout(f), (f = setTimeout(E, t)), m(h);
          }
          return void 0 === f && (f = setTimeout(E, t)), d;
        }
        return (
          (t = a(t) || 0),
          n(r) &&
            ((p = !!r.leading),
            (c = (v = "maxWait" in r) ? o(a(r.maxWait) || 0, t) : c),
            (C = "trailing" in r ? !!r.trailing : C)),
          (F.cancel = function () {
            void 0 !== f && clearTimeout(f), (D = 0), (l = h = s = f = void 0);
          }),
          (F.flush = function () {
            return void 0 === f ? d : A(u());
          }),
          F
        );
      };
    },
    13218: (e) => {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    37005: (e) => {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    33448: (e, t, r) => {
      var n = r(44239),
        u = r(37005);
      e.exports = function (e) {
        return "symbol" == typeof e || (u(e) && "[object Symbol]" == n(e));
      };
    },
    7771: (e, t, r) => {
      var n = r(55639);
      e.exports = function () {
        return n.Date.now();
      };
    },
    23493: (e, t, r) => {
      var n = r(23279),
        u = r(13218);
      e.exports = function (e, t, r) {
        var a = !0,
          o = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return (
          u(r) &&
            ((a = "leading" in r ? !!r.leading : a),
            (o = "trailing" in r ? !!r.trailing : o)),
          n(e, t, { leading: a, maxWait: t, trailing: o })
        );
      };
    },
    14841: (e, t, r) => {
      var n = r(27561),
        u = r(13218),
        a = r(33448),
        o = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        s = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (a(e)) return NaN;
        if (u(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = u(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = i.test(e);
        return r || l.test(e) ? s(e.slice(2), r ? 2 : 8) : o.test(e) ? NaN : +e;
      };
    },
    33274: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Jo });
      var n = r(67294),
        u = r(18156);
      function a(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function o(e) {
        var t, r;
        return (
          !1 !== a(e) &&
          (void 0 === (t = e.constructor) ||
            (!1 !== a((r = t.prototype)) &&
              !1 !== r.hasOwnProperty("isPrototypeOf")))
        );
      }
      function i(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (r.length
              ? " " +
                r
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf"
        );
      }
      function l(e) {
        return !!e && !!e[J];
      }
      function s(e) {
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var r =
              Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return (
              r === Object ||
              ("function" == typeof r && Function.toString.call(r) === X)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[K] ||
            !!e.constructor[K] ||
            v(e) ||
            C(e))
        );
      }
      function c(e, t, r) {
        void 0 === r && (r = !1),
          0 === d(e)
            ? (r ? Object.keys : Y)(e).forEach(function (n) {
                (r && "symbol" == typeof n) || t(n, e[n], e);
              })
            : e.forEach(function (r, n) {
                return t(n, r, e);
              });
      }
      function d(e) {
        var t = e[J];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
          ? 1
          : v(e)
          ? 2
          : C(e)
          ? 3
          : 0;
      }
      function f(e, t) {
        return 2 === d(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function h(e, t) {
        return 2 === d(e) ? e.get(t) : e[t];
      }
      function D(e, t, r) {
        var n = d(e);
        2 === n ? e.set(t, r) : 3 === n ? (e.delete(t), e.add(r)) : (e[t] = r);
      }
      function p(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function v(e) {
        return q && e instanceof Map;
      }
      function C(e) {
        return $ && e instanceof Set;
      }
      function m(e) {
        return e.o || e.t;
      }
      function g(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = Q(e);
        delete t[J];
        for (var r = Y(t), n = 0; n < r.length; n++) {
          var u = r[n],
            a = t[u];
          !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) &&
              (t[u] = {
                configurable: !0,
                writable: !0,
                enumerable: a.enumerable,
                value: e[u],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function B(e, t) {
        return (
          void 0 === t && (t = !1),
          A(e) ||
            l(e) ||
            !s(e) ||
            (d(e) > 1 && (e.set = e.add = e.clear = e.delete = E),
            Object.freeze(e),
            t &&
              c(
                e,
                function (e, t) {
                  return B(t, !0);
                },
                !0
              )),
          e
        );
      }
      function E() {
        i(2);
      }
      function A(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function F(e) {
        var t = G[e];
        return t || i(18, e), t;
      }
      function w() {
        return V;
      }
      function y(e, t) {
        t && (F("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function b(e) {
        x(e), e.p.forEach(k), (e.p = null);
      }
      function x(e) {
        e === V && (V = e.l);
      }
      function O(e) {
        return (V = { p: [], l: V, h: e, m: !0, _: 0 });
      }
      function k(e) {
        var t = e[J];
        0 === t.i || 1 === t.i ? t.j() : (t.O = !0);
      }
      function P(e, t) {
        t._ = t.p.length;
        var r = t.p[0],
          n = void 0 !== e && e !== r;
        return (
          t.h.g || F("ES5").S(t, e, n),
          n
            ? (r[J].P && (b(t), i(4)),
              s(e) && ((e = N(t, e)), t.l || j(t, e)),
              t.u && F("Patches").M(r[J].t, e, t.u, t.s))
            : (e = N(t, r, [])),
          b(t),
          t.u && t.v(t.u, t.s),
          e !== U ? e : void 0
        );
      }
      function N(e, t, r) {
        if (A(t)) return t;
        var n = t[J];
        if (!n)
          return (
            c(
              t,
              function (u, a) {
                return S(e, n, t, u, a, r);
              },
              !0
            ),
            t
          );
        if (n.A !== e) return t;
        if (!n.P) return j(e, n.t, !0), n.t;
        if (!n.I) {
          (n.I = !0), n.A._--;
          var u = 4 === n.i || 5 === n.i ? (n.o = g(n.k)) : n.o;
          c(3 === n.i ? new Set(u) : u, function (t, a) {
            return S(e, n, u, t, a, r);
          }),
            j(e, u, !1),
            r && e.u && F("Patches").R(n, r, e.u, e.s);
        }
        return n.o;
      }
      function S(e, t, r, n, u, a) {
        if (l(u)) {
          var o = N(
            e,
            u,
            a && t && 3 !== t.i && !f(t.D, n) ? a.concat(n) : void 0
          );
          if ((D(r, n, o), !l(o))) return;
          e.m = !1;
        }
        if (s(u) && !A(u)) {
          if (!e.h.F && e._ < 1) return;
          N(e, u), (t && t.A.l) || j(e, u);
        }
      }
      function j(e, t, r) {
        void 0 === r && (r = !1), e.h.F && e.m && B(t, r);
      }
      function T(e, t) {
        var r = e[J];
        return (r ? m(r) : e)[t];
      }
      function M(e, t) {
        if (t in e)
          for (var r = Object.getPrototypeOf(e); r; ) {
            var n = Object.getOwnPropertyDescriptor(r, t);
            if (n) return n;
            r = Object.getPrototypeOf(r);
          }
      }
      function R(e) {
        e.P || ((e.P = !0), e.l && R(e.l));
      }
      function _(e) {
        e.o || (e.o = g(e.t));
      }
      function L(e, t, r) {
        var n = v(t)
          ? F("MapSet").N(t, r)
          : C(t)
          ? F("MapSet").T(t, r)
          : e.g
          ? (function (e, t) {
              var r = Array.isArray(e),
                n = {
                  i: r ? 1 : 0,
                  A: t ? t.A : w(),
                  P: !1,
                  I: !1,
                  D: {},
                  l: t,
                  t: e,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                },
                u = n,
                a = ee;
              r && ((u = [n]), (a = te));
              var o = Proxy.revocable(u, a),
                i = o.revoke,
                l = o.proxy;
              return (n.k = l), (n.j = i), l;
            })(t, r)
          : F("ES5").J(t, r);
        return (r ? r.A : w()).p.push(n), n;
      }
      function z(e) {
        return (
          l(e) || i(22, e),
          (function e(t) {
            if (!s(t)) return t;
            var r,
              n = t[J],
              u = d(t);
            if (n) {
              if (!n.P && (n.i < 4 || !F("ES5").K(n))) return n.t;
              (n.I = !0), (r = W(t, u)), (n.I = !1);
            } else r = W(t, u);
            return (
              c(r, function (t, u) {
                (n && h(n.t, t) === u) || D(r, t, e(u));
              }),
              3 === u ? new Set(r) : r
            );
          })(e)
        );
      }
      function W(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return g(e);
      }
      var I,
        V,
        Z = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        q = "undefined" != typeof Map,
        $ = "undefined" != typeof Set,
        H =
          "undefined" != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "undefined" != typeof Reflect,
        U = Z
          ? Symbol.for("immer-nothing")
          : (((I = {})["immer-nothing"] = !0), I),
        K = Z ? Symbol.for("immer-draftable") : "__$immer_draftable",
        J = Z ? Symbol.for("immer-state") : "__$immer_state",
        X =
          ("undefined" != typeof Symbol && Symbol.iterator,
          "" + Object.prototype.constructor),
        Y =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames,
        Q =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              Y(e).forEach(function (r) {
                t[r] = Object.getOwnPropertyDescriptor(e, r);
              }),
              t
            );
          },
        G = {},
        ee = {
          get: function (e, t) {
            if (t === J) return e;
            var r = m(e);
            if (!f(r, t))
              return (function (e, t, r) {
                var n,
                  u = M(t, r);
                return u
                  ? "value" in u
                    ? u.value
                    : null === (n = u.get) || void 0 === n
                    ? void 0
                    : n.call(e.k)
                  : void 0;
              })(e, r, t);
            var n = r[t];
            return e.I || !s(n)
              ? n
              : n === T(e.t, t)
              ? (_(e), (e.o[t] = L(e.A.h, n, e)))
              : n;
          },
          has: function (e, t) {
            return t in m(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(m(e));
          },
          set: function (e, t, r) {
            var n = M(m(e), t);
            if (null == n ? void 0 : n.set) return n.set.call(e.k, r), !0;
            if (!e.P) {
              var u = T(m(e), t),
                a = null == u ? void 0 : u[J];
              if (a && a.t === r) return (e.o[t] = r), (e.D[t] = !1), !0;
              if (p(r, u) && (void 0 !== r || f(e.t, t))) return !0;
              _(e), R(e);
            }
            return (
              (e.o[t] === r &&
                "number" != typeof r &&
                (void 0 !== r || t in e.o)) ||
              ((e.o[t] = r), (e.D[t] = !0), !0)
            );
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== T(e.t, t) || t in e.t
                ? ((e.D[t] = !1), _(e), R(e))
                : delete e.D[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var r = m(e),
              n = Reflect.getOwnPropertyDescriptor(r, t);
            return n
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: n.enumerable,
                  value: r[t],
                }
              : n;
          },
          defineProperty: function () {
            i(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            i(12);
          },
        },
        te = {};
      c(ee, function (e, t) {
        te[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (te.deleteProperty = function (e, t) {
          return te.set.call(this, e, t, void 0);
        }),
        (te.set = function (e, t, r) {
          return ee.set.call(this, e[0], t, r, e[0]);
        });
      var re = (function () {
          function e(e) {
            var t = this;
            (this.g = H),
              (this.F = !0),
              (this.produce = function (e, r, n) {
                if ("function" == typeof e && "function" != typeof r) {
                  var u = r;
                  r = e;
                  var a = t;
                  return function (e) {
                    var t = this;
                    void 0 === e && (e = u);
                    for (
                      var n = arguments.length,
                        o = Array(n > 1 ? n - 1 : 0),
                        i = 1;
                      i < n;
                      i++
                    )
                      o[i - 1] = arguments[i];
                    return a.produce(e, function (e) {
                      var n;
                      return (n = r).call.apply(n, [t, e].concat(o));
                    });
                  };
                }
                var o;
                if (
                  ("function" != typeof r && i(6),
                  void 0 !== n && "function" != typeof n && i(7),
                  s(e))
                ) {
                  var l = O(t),
                    c = L(t, e, void 0),
                    d = !0;
                  try {
                    (o = r(c)), (d = !1);
                  } finally {
                    d ? b(l) : x(l);
                  }
                  return "undefined" != typeof Promise && o instanceof Promise
                    ? o.then(
                        function (e) {
                          return y(l, n), P(e, l);
                        },
                        function (e) {
                          throw (b(l), e);
                        }
                      )
                    : (y(l, n), P(o, l));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (o = r(e)) && (o = e),
                    o === U && (o = void 0),
                    t.F && B(o, !0),
                    n)
                  ) {
                    var f = [],
                      h = [];
                    F("Patches").M(e, o, f, h), n(f, h);
                  }
                  return o;
                }
                i(21, e);
              }),
              (this.produceWithPatches = function (e, r) {
                if ("function" == typeof e)
                  return function (r) {
                    for (
                      var n = arguments.length,
                        u = Array(n > 1 ? n - 1 : 0),
                        a = 1;
                      a < n;
                      a++
                    )
                      u[a - 1] = arguments[a];
                    return t.produceWithPatches(r, function (t) {
                      return e.apply(void 0, [t].concat(u));
                    });
                  };
                var n,
                  u,
                  a = t.produce(e, r, function (e, t) {
                    (n = e), (u = t);
                  });
                return "undefined" != typeof Promise && a instanceof Promise
                  ? a.then(function (e) {
                      return [e, n, u];
                    })
                  : [a, n, u];
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function (e) {
              s(e) || i(8), l(e) && (e = z(e));
              var t = O(this),
                r = L(this, e, void 0);
              return (r[J].C = !0), x(t), r;
            }),
            (t.finishDraft = function (e, t) {
              var r = (e && e[J]).A;
              return y(r, t), P(void 0, r);
            }),
            (t.setAutoFreeze = function (e) {
              this.F = e;
            }),
            (t.setUseProxies = function (e) {
              e && !H && i(20), (this.g = e);
            }),
            (t.applyPatches = function (e, t) {
              var r;
              for (r = t.length - 1; r >= 0; r--) {
                var n = t[r];
                if (0 === n.path.length && "replace" === n.op) {
                  e = n.value;
                  break;
                }
              }
              r > -1 && (t = t.slice(r + 1));
              var u = F("Patches").$;
              return l(e)
                ? u(e, t)
                : this.produce(e, function (e) {
                    return u(e, t);
                  });
            }),
            e
          );
        })(),
        ne = new re(),
        ue = ne.produce,
        ae =
          (ne.produceWithPatches.bind(ne),
          ne.setAutoFreeze.bind(ne),
          ne.setUseProxies.bind(ne),
          ne.applyPatches.bind(ne),
          ne.createDraft.bind(ne)),
        oe = ne.finishDraft.bind(ne);
      function ie(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var le = new WeakMap(),
        se = new WeakMap(),
        ce = new WeakMap(),
        de = new WeakMap(),
        fe = new WeakMap(),
        he = new WeakMap(),
        De = new WeakMap();
      function pe(e, t) {
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
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? pe(Object(r), !0).forEach(function (t) {
                ie(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : pe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Ce = () => {
          var e = {
            children: [],
            operations: [],
            selection: null,
            marks: null,
            isInline: () => !1,
            isVoid: () => !1,
            onChange: () => {},
            apply: (t) => {
              for (var r of et.pathRefs(e)) ct.transform(r, t);
              for (var n of et.pointRefs(e)) Dt.transform(n, t);
              for (var u of et.rangeRefs(e)) mt.transform(u, t);
              var a,
                o,
                i = le.get(e) || [],
                l = se.get(e) || new Set(),
                s = (e) => {
                  if (e) {
                    var t = e.join(",");
                    o.has(t) || (o.add(t), a.push(e));
                  }
                };
              if (st.operationCanTransformPath(t))
                for (var c of ((a = []), (o = new Set()), i)) {
                  s(st.transform(c, t));
                }
              else (a = i), (o = l);
              var d = me(t);
              for (var f of d) s(f);
              le.set(e, a),
                se.set(e, o),
                Vt.transform(e, t),
                e.operations.push(t),
                et.normalize(e),
                "set_selection" === t.type && (e.marks = null),
                ce.get(e) ||
                  (ce.set(e, !0),
                  Promise.resolve().then(() => {
                    ce.set(e, !1), e.onChange(), (e.operations = []);
                  }));
            },
            addMark: (t, r) => {
              var { selection: n } = e;
              if (n)
                if (Ct.isExpanded(n))
                  Vt.setNodes(e, { [t]: r }, { match: wt.isText, split: !0 });
                else {
                  var u = ve(ve({}, et.marks(e) || {}), {}, { [t]: r });
                  (e.marks = u), ce.get(e) || e.onChange();
                }
            },
            deleteBackward: (t) => {
              var { selection: r } = e;
              r && Ct.isCollapsed(r) && Vt.delete(e, { unit: t, reverse: !0 });
            },
            deleteForward: (t) => {
              var { selection: r } = e;
              r && Ct.isCollapsed(r) && Vt.delete(e, { unit: t });
            },
            deleteFragment: (t) => {
              var { selection: r } = e;
              r &&
                Ct.isExpanded(r) &&
                Vt.delete(e, { reverse: "backward" === t });
            },
            getFragment: () => {
              var { selection: t } = e;
              return t ? at.fragment(e, t) : [];
            },
            insertBreak: () => {
              Vt.splitNodes(e, { always: !0 });
            },
            insertFragment: (t) => {
              Vt.insertFragment(e, t);
            },
            insertNode: (t) => {
              Vt.insertNodes(e, t);
            },
            insertText: (t) => {
              var { selection: r, marks: n } = e;
              if (r) {
                if (n) {
                  var u = ve({ text: t }, n);
                  Vt.insertNodes(e, u);
                } else Vt.insertText(e, t);
                e.marks = null;
              }
            },
            normalizeNode: (t) => {
              var [r, n] = t;
              if (!wt.isText(r))
                if (Ke.isElement(r) && 0 === r.children.length) {
                  Vt.insertNodes(
                    e,
                    { text: "" },
                    { at: n.concat(0), voids: !0 }
                  );
                } else
                  for (
                    var u =
                        !et.isEditor(r) &&
                        Ke.isElement(r) &&
                        (e.isInline(r) ||
                          0 === r.children.length ||
                          wt.isText(r.children[0]) ||
                          e.isInline(r.children[0])),
                      a = 0,
                      o = 0;
                    o < r.children.length;
                    o++, a++
                  ) {
                    var i = at.get(e, n);
                    if (!wt.isText(i)) {
                      var l = r.children[o],
                        s = i.children[a - 1],
                        c = o === r.children.length - 1;
                      if (
                        (wt.isText(l) || (Ke.isElement(l) && e.isInline(l))) !==
                        u
                      )
                        Vt.removeNodes(e, { at: n.concat(a), voids: !0 }), a--;
                      else if (Ke.isElement(l)) {
                        if (e.isInline(l))
                          if (null != s && wt.isText(s)) {
                            if (c) {
                              Vt.insertNodes(
                                e,
                                { text: "" },
                                { at: n.concat(a + 1), voids: !0 }
                              ),
                                a++;
                            }
                          } else {
                            Vt.insertNodes(
                              e,
                              { text: "" },
                              { at: n.concat(a), voids: !0 }
                            ),
                              a++;
                          }
                      } else
                        null != s &&
                          wt.isText(s) &&
                          (wt.equals(l, s, { loose: !0 })
                            ? (Vt.mergeNodes(e, { at: n.concat(a), voids: !0 }),
                              a--)
                            : "" === s.text
                            ? (Vt.removeNodes(e, {
                                at: n.concat(a - 1),
                                voids: !0,
                              }),
                              a--)
                            : "" === l.text &&
                              (Vt.removeNodes(e, {
                                at: n.concat(a),
                                voids: !0,
                              }),
                              a--));
                    }
                  }
            },
            removeMark: (t) => {
              var { selection: r } = e;
              if (r)
                if (Ct.isExpanded(r))
                  Vt.unsetNodes(e, t, { match: wt.isText, split: !0 });
                else {
                  var n = ve({}, et.marks(e) || {});
                  delete n[t], (e.marks = n), ce.get(e) || e.onChange();
                }
            },
          };
          return e;
        },
        me = (e) => {
          switch (e.type) {
            case "insert_text":
            case "remove_text":
            case "set_node":
              var { path: t } = e;
              return st.levels(t);
            case "insert_node":
              var { node: r, path: n } = e,
                u = st.levels(n),
                a = wt.isText(r)
                  ? []
                  : Array.from(at.nodes(r), (e) => {
                      var [, t] = e;
                      return n.concat(t);
                    });
              return [...u, ...a];
            case "merge_node":
              var { path: o } = e;
              return [...st.ancestors(o), st.previous(o)];
            case "move_node":
              var { path: i, newPath: l } = e;
              if (st.equals(i, l)) return [];
              var s = [],
                c = [];
              for (var d of st.ancestors(i)) {
                var f = st.transform(d, e);
                s.push(f);
              }
              for (var h of st.ancestors(l)) {
                var D = st.transform(h, e);
                c.push(D);
              }
              var p = c[c.length - 1],
                v = l[l.length - 1],
                C = p.concat(v);
              return [...s, ...c, C];
            case "remove_node":
              var { path: m } = e;
              return [...st.ancestors(m)];
            case "split_node":
              var { path: g } = e;
              return [...st.levels(g), st.next(g)];
            default:
              return [];
          }
        };
      function ge(e, t) {
        if (null == e) return {};
        var r,
          n,
          u = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              u = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (u[r] = e[r]);
            return u;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (u[r] = e[r]));
        }
        return u;
      }
      var Be,
        Ee = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = !t,
            n = t ? xe(e) : e,
            u = Be.None,
            a = Be.None,
            o = 0,
            i = null;
          for (var l of n) {
            var s = l.codePointAt(0);
            if (!s) break;
            var c = ze(l, s);
            if (
              (([u, a] = r ? [a, c] : [c, u]),
              We(u, Be.ZWJ) &&
                We(a, Be.ExtPict) &&
                !qe(r ? e.substring(0, o) : e.substring(0, e.length - o)))
            )
              break;
            if (
              We(u, Be.RI) &&
              We(a, Be.RI) &&
              !(i = null !== i ? !i : !!r || He(e.substring(0, e.length - o)))
            )
              break;
            if (u !== Be.None && a !== Be.None && Ve(u, a)) break;
            o += l.length;
          }
          return o || 1;
        },
        Ae = /\s/,
        Fe =
          /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
        we = /['\u2018\u2019]/,
        ye = (e, t, r) => {
          if (r) {
            var n = e.length - t;
            return [e.slice(n, e.length), e.slice(0, n)];
          }
          return [e.slice(0, t), e.slice(t)];
        },
        be = function e(t, r) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (Ae.test(t)) return !1;
          if (we.test(t)) {
            var u = Ee(r, n),
              [a, o] = ye(r, u, n);
            if (e(a, o, n)) return !0;
          }
          return !Fe.test(t);
        },
        xe = function* (e) {
          for (var t = e.length - 1, r = 0; r < e.length; r++) {
            var n = e.charAt(t - r);
            if (ke(n.charCodeAt(0))) {
              var u = e.charAt(t - r - 1);
              if (Oe(u.charCodeAt(0))) {
                yield u + n, r++;
                continue;
              }
            }
            yield n;
          }
        },
        Oe = (e) => e >= 55296 && e <= 56319,
        ke = (e) => e >= 56320 && e <= 57343;
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Extend = 1)] = "Extend"),
          (e[(e.ZWJ = 2)] = "ZWJ"),
          (e[(e.RI = 4)] = "RI"),
          (e[(e.Prepend = 8)] = "Prepend"),
          (e[(e.SpacingMark = 16)] = "SpacingMark"),
          (e[(e.L = 32)] = "L"),
          (e[(e.V = 64)] = "V"),
          (e[(e.T = 128)] = "T"),
          (e[(e.LV = 256)] = "LV"),
          (e[(e.LVT = 512)] = "LVT"),
          (e[(e.ExtPict = 1024)] = "ExtPict"),
          (e[(e.Any = 2048)] = "Any");
      })(Be || (Be = {}));
      var Pe =
          /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
        Ne =
          /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
        Se =
          /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
        je = /^[\u1100-\u115F\uA960-\uA97C]$/,
        Te = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
        Me = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
        Re =
          /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
        _e =
          /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
        Le =
          /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
        ze = (e, t) => {
          var r = Be.Any;
          return (
            -1 !== e.search(Pe) && (r |= Be.Extend),
            8205 === t && (r |= Be.ZWJ),
            t >= 127462 && t <= 127487 && (r |= Be.RI),
            -1 !== e.search(Ne) && (r |= Be.Prepend),
            -1 !== e.search(Se) && (r |= Be.SpacingMark),
            -1 !== e.search(je) && (r |= Be.L),
            -1 !== e.search(Te) && (r |= Be.V),
            -1 !== e.search(Me) && (r |= Be.T),
            -1 !== e.search(Re) && (r |= Be.LV),
            -1 !== e.search(_e) && (r |= Be.LVT),
            -1 !== e.search(Le) && (r |= Be.ExtPict),
            r
          );
        };
      function We(e, t) {
        return 0 != (e & t);
      }
      var Ie = [
        [Be.L, Be.L | Be.V | Be.LV | Be.LVT],
        [Be.LV | Be.V, Be.V | Be.T],
        [Be.LVT | Be.T, Be.T],
        [Be.Any, Be.Extend | Be.ZWJ],
        [Be.Any, Be.SpacingMark],
        [Be.Prepend, Be.Any],
        [Be.ZWJ, Be.ExtPict],
        [Be.RI, Be.RI],
      ];
      function Ve(e, t) {
        return -1 === Ie.findIndex((r) => We(e, r[0]) && We(t, r[1]));
      }
      var Ze =
          /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
        qe = (e) => -1 !== e.search(Ze),
        $e = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
        He = (e) => {
          var t = e.match($e);
          return null !== t && (t[0].length / 2) % 2 == 1;
        },
        Ue = (e) => o(e) && at.isNodeList(e.children) && !et.isEditor(e),
        Ke = {
          isAncestor: (e) => o(e) && at.isNodeList(e.children),
          isElement: Ue,
          isElementList: (e) =>
            Array.isArray(e) && e.every((e) => Ke.isElement(e)),
          isElementProps: (e) => void 0 !== e.children,
          isElementType: function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "type";
            return Ue(e) && e[r] === t;
          },
          matches(e, t) {
            for (var r in t) if ("children" !== r && e[r] !== t[r]) return !1;
            return !0;
          },
        },
        Je = ["text"],
        Xe = ["text"];
      function Ye(e, t) {
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
      function Qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ye(Object(r), !0).forEach(function (t) {
                ie(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ye(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Ge = new WeakMap(),
        et = {
          above(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                voids: r = !1,
                mode: n = "lowest",
                at: u = e.selection,
                match: a,
              } = t;
            if (u) {
              var o = et.path(e, u),
                i = "lowest" === n;
              for (var [l, s] of et.levels(e, {
                at: o,
                voids: r,
                match: a,
                reverse: i,
              }))
                if (!wt.isText(l) && !st.equals(o, s)) return [l, s];
            }
          },
          addMark(e, t, r) {
            e.addMark(t, r);
          },
          after(e, t) {
            var r,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              u = {
                anchor: et.point(e, t, { edge: "end" }),
                focus: et.end(e, []),
              },
              { distance: a = 1 } = n,
              o = 0;
            for (var i of et.positions(e, Qe(Qe({}, n), {}, { at: u }))) {
              if (o > a) break;
              0 !== o && (r = i), o++;
            }
            return r;
          },
          before(e, t) {
            var r,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              u = {
                anchor: et.start(e, []),
                focus: et.point(e, t, { edge: "start" }),
              },
              { distance: a = 1 } = n,
              o = 0;
            for (var i of et.positions(
              e,
              Qe(Qe({}, n), {}, { at: u, reverse: !0 })
            )) {
              if (o > a) break;
              0 !== o && (r = i), o++;
            }
            return r;
          },
          deleteBackward(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { unit: r = "character" } = t;
            e.deleteBackward(r);
          },
          deleteForward(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { unit: r = "character" } = t;
            e.deleteForward(r);
          },
          deleteFragment(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { direction: r = "forward" } = t;
            e.deleteFragment(r);
          },
          edges: (e, t) => [et.start(e, t), et.end(e, t)],
          end: (e, t) => et.point(e, t, { edge: "end" }),
          first(e, t) {
            var r = et.path(e, t, { edge: "start" });
            return et.node(e, r);
          },
          fragment(e, t) {
            var r = et.range(e, t);
            return at.fragment(e, r);
          },
          hasBlocks: (e, t) => t.children.some((t) => et.isBlock(e, t)),
          hasInlines: (e, t) =>
            t.children.some((t) => wt.isText(t) || et.isInline(e, t)),
          hasTexts: (e, t) => t.children.every((e) => wt.isText(e)),
          insertBreak(e) {
            e.insertBreak();
          },
          insertFragment(e, t) {
            e.insertFragment(t);
          },
          insertNode(e, t) {
            e.insertNode(t);
          },
          insertText(e, t) {
            e.insertText(t);
          },
          isBlock: (e, t) => Ke.isElement(t) && !e.isInline(t),
          isEditor(e) {
            if (!o(e)) return !1;
            var t = Ge.get(e);
            if (void 0 !== t) return t;
            var r =
              "function" == typeof e.addMark &&
              "function" == typeof e.apply &&
              "function" == typeof e.deleteBackward &&
              "function" == typeof e.deleteForward &&
              "function" == typeof e.deleteFragment &&
              "function" == typeof e.insertBreak &&
              "function" == typeof e.insertFragment &&
              "function" == typeof e.insertNode &&
              "function" == typeof e.insertText &&
              "function" == typeof e.isInline &&
              "function" == typeof e.isVoid &&
              "function" == typeof e.normalizeNode &&
              "function" == typeof e.onChange &&
              "function" == typeof e.removeMark &&
              (null === e.marks || o(e.marks)) &&
              (null === e.selection || Ct.isRange(e.selection)) &&
              at.isNodeList(e.children) &&
              lt.isOperationList(e.operations);
            return Ge.set(e, r), r;
          },
          isEnd(e, t, r) {
            var n = et.end(e, r);
            return ht.equals(t, n);
          },
          isEdge: (e, t, r) => et.isStart(e, t, r) || et.isEnd(e, t, r),
          isEmpty(e, t) {
            var { children: r } = t,
              [n] = r;
            return (
              0 === r.length ||
              (1 === r.length && wt.isText(n) && "" === n.text && !e.isVoid(t))
            );
          },
          isInline: (e, t) => Ke.isElement(t) && e.isInline(t),
          isNormalizing(e) {
            var t = de.get(e);
            return void 0 === t || t;
          },
          isStart(e, t, r) {
            if (0 !== t.offset) return !1;
            var n = et.start(e, r);
            return ht.equals(t, n);
          },
          isVoid: (e, t) => Ke.isElement(t) && e.isVoid(t),
          last(e, t) {
            var r = et.path(e, t, { edge: "end" });
            return et.node(e, r);
          },
          leaf(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = et.path(e, t, r);
            return [at.leaf(e, n), n];
          },
          *levels(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { at: r = e.selection, reverse: n = !1, voids: u = !1 } = t,
              { match: a } = t;
            if ((null == a && (a = () => !0), r)) {
              var o = [],
                i = et.path(e, r);
              for (var [l, s] of at.levels(e, i))
                if (a(l, s) && (o.push([l, s]), !u && et.isVoid(e, l))) break;
              n && o.reverse(), yield* o;
            }
          },
          marks(e) {
            var { marks: t, selection: r } = e;
            if (!r) return null;
            if (t) return t;
            if (Ct.isExpanded(r)) {
              var [n] = et.nodes(e, { match: wt.isText });
              if (n) {
                var [u] = n;
                return ge(u, Je);
              }
              return {};
            }
            var { anchor: a } = r,
              { path: o } = a,
              [i] = et.leaf(e, o);
            if (0 === a.offset) {
              var l = et.previous(e, { at: o, match: wt.isText }),
                s = et.above(e, { match: (t) => et.isBlock(e, t) });
              if (l && s) {
                var [c, d] = l,
                  [, f] = s;
                st.isAncestor(f, d) && (i = c);
              }
            }
            return ge(i, Xe);
          },
          next(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { mode: r = "lowest", voids: n = !1 } = t,
              { match: u, at: a = e.selection } = t;
            if (a) {
              var o = et.after(e, a, { voids: n });
              if (o) {
                var [, i] = et.last(e, []),
                  l = [o.path, i];
                if (st.isPath(a) && 0 === a.length)
                  throw new Error(
                    "Cannot get the next node from the root node!"
                  );
                if (null == u)
                  if (st.isPath(a)) {
                    var [s] = et.parent(e, a);
                    u = (e) => s.children.includes(e);
                  } else u = () => !0;
                var [c] = et.nodes(e, { at: l, match: u, mode: r, voids: n });
                return c;
              }
            }
          },
          node(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = et.path(e, t, r);
            return [at.get(e, n), n];
          },
          *nodes(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                at: r = e.selection,
                mode: n = "all",
                universal: u = !1,
                reverse: a = !1,
                voids: o = !1,
              } = t,
              { match: i } = t;
            if ((i || (i = () => !0), r)) {
              var l, s;
              if (tt.isSpan(r)) (l = r[0]), (s = r[1]);
              else {
                var c = et.path(e, r, { edge: "start" }),
                  d = et.path(e, r, { edge: "end" });
                (l = a ? d : c), (s = a ? c : d);
              }
              var f,
                h = at.nodes(e, {
                  reverse: a,
                  from: l,
                  to: s,
                  pass: (t) => {
                    var [r] = t;
                    return !o && et.isVoid(e, r);
                  },
                }),
                D = [];
              for (var [p, v] of h) {
                var C = f && 0 === st.compare(v, f[1]);
                if ("highest" !== n || !C)
                  if (i(p, v))
                    if ("lowest" === n && C) f = [p, v];
                    else {
                      var m = "lowest" === n ? f : [p, v];
                      m && (u ? D.push(m) : yield m), (f = [p, v]);
                    }
                  else if (u && !C && wt.isText(p)) return;
              }
              "lowest" === n && f && (u ? D.push(f) : yield f), u && (yield* D);
            }
          },
          normalize(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { force: r = !1 } = t,
              n = (e) => le.get(e) || [],
              u = (e) => {
                var t = n(e).pop(),
                  r = t.join(",");
                return ((e) => se.get(e) || new Set())(e).delete(r), t;
              };
            if (et.isNormalizing(e)) {
              if (r) {
                var a = Array.from(at.nodes(e), (e) => {
                    var [, t] = e;
                    return t;
                  }),
                  o = new Set(a.map((e) => e.join(",")));
                le.set(e, a), se.set(e, o);
              }
              0 !== n(e).length &&
                et.withoutNormalizing(e, () => {
                  for (var t of n(e))
                    if (at.has(e, t)) {
                      var r = et.node(e, t),
                        [a, o] = r;
                      Ke.isElement(a) &&
                        0 === a.children.length &&
                        e.normalizeNode(r);
                    }
                  for (var i = 42 * n(e).length, l = 0; 0 !== n(e).length; ) {
                    if (l > i)
                      throw new Error(
                        "\n            Could not completely normalize the editor after ".concat(
                          i,
                          " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "
                        )
                      );
                    var s = u(e);
                    if (at.has(e, s)) {
                      var c = et.node(e, s);
                      e.normalizeNode(c);
                    }
                    l++;
                  }
                });
            }
          },
          parent(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = et.path(e, t, r),
              u = st.parent(n);
            return et.node(e, u);
          },
          path(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { depth: n, edge: u } = r;
            if (st.isPath(t))
              if ("start" === u) {
                var [, a] = at.first(e, t);
                t = a;
              } else if ("end" === u) {
                var [, o] = at.last(e, t);
                t = o;
              }
            return (
              Ct.isRange(t) &&
                (t =
                  "start" === u
                    ? Ct.start(t)
                    : "end" === u
                    ? Ct.end(t)
                    : st.common(t.anchor.path, t.focus.path)),
              ht.isPoint(t) && (t = t.path),
              null != n && (t = t.slice(0, n)),
              t
            );
          },
          hasPath: (e, t) => at.has(e, t),
          pathRef(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: n = "forward" } = r,
              u = {
                current: t,
                affinity: n,
                unref() {
                  var { current: t } = u;
                  return et.pathRefs(e).delete(u), (u.current = null), t;
                },
              };
            return et.pathRefs(e).add(u), u;
          },
          pathRefs(e) {
            var t = fe.get(e);
            return t || ((t = new Set()), fe.set(e, t)), t;
          },
          point(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { edge: n = "start" } = r;
            if (st.isPath(t)) {
              var u;
              if ("end" === n) {
                var [, a] = at.last(e, t);
                u = a;
              } else {
                var [, o] = at.first(e, t);
                u = o;
              }
              var i = at.get(e, u);
              if (!wt.isText(i))
                throw new Error(
                  "Cannot get the "
                    .concat(n, " point in the node at path [")
                    .concat(t, "] because it has no ")
                    .concat(n, " text node.")
                );
              return { path: u, offset: "end" === n ? i.text.length : 0 };
            }
            if (Ct.isRange(t)) {
              var [l, s] = Ct.edges(t);
              return "start" === n ? l : s;
            }
            return t;
          },
          pointRef(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: n = "forward" } = r,
              u = {
                current: t,
                affinity: n,
                unref() {
                  var { current: t } = u;
                  return et.pointRefs(e).delete(u), (u.current = null), t;
                },
              };
            return et.pointRefs(e).add(u), u;
          },
          pointRefs(e) {
            var t = he.get(e);
            return t || ((t = new Set()), he.set(e, t)), t;
          },
          *positions(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                at: r = e.selection,
                unit: n = "offset",
                reverse: u = !1,
                voids: a = !1,
              } = t;
            if (r) {
              var o = et.range(e, r),
                [i, l] = Ct.edges(o),
                s = u ? l : i,
                c = !1,
                d = "",
                f = 0,
                h = 0,
                D = 0;
              for (var [p, v] of et.nodes(e, { at: r, reverse: u, voids: a })) {
                if (Ke.isElement(p)) {
                  if (!a && e.isVoid(p)) {
                    yield et.start(e, v);
                    continue;
                  }
                  if (e.isInline(p)) continue;
                  if (et.hasInlines(e, p)) {
                    var C = st.isAncestor(v, l.path) ? l : et.end(e, v),
                      m = st.isAncestor(v, i.path) ? i : et.start(e, v);
                    (d = et.string(e, { anchor: m, focus: C }, { voids: a })),
                      (c = !0);
                  }
                }
                if (wt.isText(p)) {
                  var g = st.equals(v, s.path);
                  for (
                    g
                      ? ((h = u ? s.offset : p.text.length - s.offset),
                        (D = s.offset))
                      : ((h = p.text.length), (D = u ? h : 0)),
                      (g || c || "offset" === n) &&
                        (yield { path: v, offset: D }, (c = !1));
                    ;

                  ) {
                    if (0 === f) {
                      if ("" === d) break;
                      (f = B(d, n, u)), (d = ye(d, f, u)[1]);
                    }
                    if (((D = u ? D - f : D + f), (h -= f) < 0)) {
                      f = -h;
                      break;
                    }
                    (f = 0), yield { path: v, offset: D };
                  }
                }
              }
            }
            function B(e, t, r) {
              return "character" === t
                ? Ee(e, r)
                : "word" === t
                ? (function (e) {
                    for (
                      var t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        r = 0,
                        n = !1;
                      e.length > 0;

                    ) {
                      var u = Ee(e, t),
                        [a, o] = ye(e, u, t);
                      if (be(a, o, t)) (n = !0), (r += u);
                      else {
                        if (n) break;
                        r += u;
                      }
                      e = o;
                    }
                    return r;
                  })(e, r)
                : "line" === t || "block" === t
                ? e.length
                : 1;
            }
          },
          previous(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { mode: r = "lowest", voids: n = !1 } = t,
              { match: u, at: a = e.selection } = t;
            if (a) {
              var o = et.before(e, a, { voids: n });
              if (o) {
                var [, i] = et.first(e, []),
                  l = [o.path, i];
                if (st.isPath(a) && 0 === a.length)
                  throw new Error(
                    "Cannot get the previous node from the root node!"
                  );
                if (null == u)
                  if (st.isPath(a)) {
                    var [s] = et.parent(e, a);
                    u = (e) => s.children.includes(e);
                  } else u = () => !0;
                var [c] = et.nodes(e, {
                  reverse: !0,
                  at: l,
                  match: u,
                  mode: r,
                  voids: n,
                });
                return c;
              }
            }
          },
          range: (e, t, r) =>
            Ct.isRange(t) && !r
              ? t
              : { anchor: et.start(e, t), focus: et.end(e, r || t) },
          rangeRef(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: n = "forward" } = r,
              u = {
                current: t,
                affinity: n,
                unref() {
                  var { current: t } = u;
                  return et.rangeRefs(e).delete(u), (u.current = null), t;
                },
              };
            return et.rangeRefs(e).add(u), u;
          },
          rangeRefs(e) {
            var t = De.get(e);
            return t || ((t = new Set()), De.set(e, t)), t;
          },
          removeMark(e, t) {
            e.removeMark(t);
          },
          setNormalizing(e, t) {
            de.set(e, t);
          },
          start: (e, t) => et.point(e, t, { edge: "start" }),
          string(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids: n = !1 } = r,
              u = et.range(e, t),
              [a, o] = Ct.edges(u),
              i = "";
            for (var [l, s] of et.nodes(e, {
              at: u,
              match: wt.isText,
              voids: n,
            })) {
              var c = l.text;
              st.equals(s, o.path) && (c = c.slice(0, o.offset)),
                st.equals(s, a.path) && (c = c.slice(a.offset)),
                (i += c);
            }
            return i;
          },
          unhangRange(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids: n = !1 } = r,
              [u, a] = Ct.edges(t);
            if (0 !== u.offset || 0 !== a.offset || Ct.isCollapsed(t)) return t;
            var o = et.above(e, { at: a, match: (t) => et.isBlock(e, t) }),
              i = o ? o[1] : [],
              l = { anchor: et.start(e, u), focus: a },
              s = !0;
            for (var [c, d] of et.nodes(e, {
              at: l,
              match: wt.isText,
              reverse: !0,
              voids: n,
            }))
              if (s) s = !1;
              else if ("" !== c.text || st.isBefore(d, i)) {
                a = { path: d, offset: c.text.length };
                break;
              }
            return { anchor: u, focus: a };
          },
          void(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return et.above(
              e,
              Qe(Qe({}, t), {}, { match: (t) => et.isVoid(e, t) })
            );
          },
          withoutNormalizing(e, t) {
            var r = et.isNormalizing(e);
            et.setNormalizing(e, !1);
            try {
              t();
            } finally {
              et.setNormalizing(e, r);
            }
            et.normalize(e);
          },
        },
        tt = {
          isSpan: (e) =>
            Array.isArray(e) && 2 === e.length && e.every(st.isPath),
        },
        rt = ["children"],
        nt = ["text"],
        ut = new WeakMap(),
        at = {
          ancestor(e, t) {
            var r = at.get(e, t);
            if (wt.isText(r))
              throw new Error(
                "Cannot get the ancestor node at path ["
                  .concat(t, "] because it refers to a text node instead: ")
                  .concat(r)
              );
            return r;
          },
          *ancestors(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            for (var n of st.ancestors(t, r)) {
              var u = [at.ancestor(e, n), n];
              yield u;
            }
          },
          child(e, t) {
            if (wt.isText(e))
              throw new Error(
                "Cannot get the child of a text node: ".concat(
                  JSON.stringify(e)
                )
              );
            var r = e.children[t];
            if (null == r)
              throw new Error(
                "Cannot get child at index `"
                  .concat(t, "` in node: ")
                  .concat(JSON.stringify(e))
              );
            return r;
          },
          *children(e, t) {
            for (
              var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { reverse: n = !1 } = r,
                u = at.ancestor(e, t),
                { children: a } = u,
                o = n ? a.length - 1 : 0;
              n ? o >= 0 : o < a.length;

            ) {
              var i = at.child(u, o),
                l = t.concat(o);
              yield [i, l], (o = n ? o - 1 : o + 1);
            }
          },
          common(e, t, r) {
            var n = st.common(t, r);
            return [at.get(e, n), n];
          },
          descendant(e, t) {
            var r = at.get(e, t);
            if (et.isEditor(r))
              throw new Error(
                "Cannot get the descendant node at path ["
                  .concat(
                    t,
                    "] because it refers to the root editor node instead: "
                  )
                  .concat(r)
              );
            return r;
          },
          *descendants(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [r, n] of at.nodes(e, t)) 0 !== n.length && (yield [r, n]);
          },
          *elements(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [r, n] of at.nodes(e, t))
              Ke.isElement(r) && (yield [r, n]);
          },
          extractProps: (e) => (Ke.isAncestor(e) ? ge(e, rt) : ge(e, nt)),
          first(e, t) {
            for (
              var r = t.slice(), n = at.get(e, r);
              n && !wt.isText(n) && 0 !== n.children.length;

            )
              (n = n.children[0]), r.push(0);
            return [n, r];
          },
          fragment(e, t) {
            if (wt.isText(e))
              throw new Error(
                "Cannot get a fragment starting from a root text node: ".concat(
                  JSON.stringify(e)
                )
              );
            var r = ue({ children: e.children }, (e) => {
              var [r, n] = Ct.edges(t),
                u = at.nodes(e, {
                  reverse: !0,
                  pass: (e) => {
                    var [, r] = e;
                    return !Ct.includes(t, r);
                  },
                });
              for (var [, a] of u) {
                if (!Ct.includes(t, a)) {
                  var o = at.parent(e, a),
                    i = a[a.length - 1];
                  o.children.splice(i, 1);
                }
                if (st.equals(a, n.path)) {
                  var l = at.leaf(e, a);
                  l.text = l.text.slice(0, n.offset);
                }
                if (st.equals(a, r.path)) {
                  var s = at.leaf(e, a);
                  s.text = s.text.slice(r.offset);
                }
              }
              et.isEditor(e) && (e.selection = null);
            });
            return r.children;
          },
          get(e, t) {
            for (var r = e, n = 0; n < t.length; n++) {
              var u = t[n];
              if (wt.isText(r) || !r.children[u])
                throw new Error(
                  "Cannot find a descendant at path ["
                    .concat(t, "] in node: ")
                    .concat(JSON.stringify(e))
                );
              r = r.children[u];
            }
            return r;
          },
          has(e, t) {
            for (var r = e, n = 0; n < t.length; n++) {
              var u = t[n];
              if (wt.isText(r) || !r.children[u]) return !1;
              r = r.children[u];
            }
            return !0;
          },
          isNode: (e) => wt.isText(e) || Ke.isElement(e) || et.isEditor(e),
          isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = ut.get(e);
            if (void 0 !== t) return t;
            var r = e.every((e) => at.isNode(e));
            return ut.set(e, r), r;
          },
          last(e, t) {
            for (
              var r = t.slice(), n = at.get(e, r);
              n && !wt.isText(n) && 0 !== n.children.length;

            ) {
              var u = n.children.length - 1;
              (n = n.children[u]), r.push(u);
            }
            return [n, r];
          },
          leaf(e, t) {
            var r = at.get(e, t);
            if (!wt.isText(r))
              throw new Error(
                "Cannot get the leaf node at path ["
                  .concat(t, "] because it refers to a non-leaf node: ")
                  .concat(r)
              );
            return r;
          },
          *levels(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            for (var n of st.levels(t, r)) {
              var u = at.get(e, n);
              yield [u, n];
            }
          },
          matches: (e, t) =>
            (Ke.isElement(e) && Ke.isElementProps(t) && Ke.matches(e, t)) ||
            (wt.isText(e) && wt.isTextProps(t) && wt.matches(e, t)),
          *nodes(e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { pass: r, reverse: n = !1 } = t,
                { from: u = [], to: a } = t,
                o = new Set(),
                i = [],
                l = e;
              !a || !(n ? st.isBefore(i, a) : st.isAfter(i, a));

            )
              if (
                (o.has(l) || (yield [l, i]),
                o.has(l) ||
                  wt.isText(l) ||
                  0 === l.children.length ||
                  (null != r && !1 !== r([l, i])))
              ) {
                if (0 === i.length) break;
                if (!n) {
                  var s = st.next(i);
                  if (at.has(e, s)) {
                    (i = s), (l = at.get(e, i));
                    continue;
                  }
                }
                if (n && 0 !== i[i.length - 1])
                  (i = st.previous(i)), (l = at.get(e, i));
                else (i = st.parent(i)), (l = at.get(e, i)), o.add(l);
              } else {
                o.add(l);
                var c = n ? l.children.length - 1 : 0;
                st.isAncestor(i, u) && (c = u[i.length]),
                  (i = i.concat(c)),
                  (l = at.get(e, i));
              }
          },
          parent(e, t) {
            var r = st.parent(t),
              n = at.get(e, r);
            if (wt.isText(n))
              throw new Error(
                "Cannot get the parent of path [".concat(
                  t,
                  "] because it does not exist in the root."
                )
              );
            return n;
          },
          string: (e) =>
            wt.isText(e) ? e.text : e.children.map(at.string).join(""),
          *texts(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [r, n] of at.nodes(e, t)) wt.isText(r) && (yield [r, n]);
          },
        };
      function ot(e, t) {
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
      function it(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ot(Object(r), !0).forEach(function (t) {
                ie(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ot(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var lt = {
          isNodeOperation: (e) => lt.isOperation(e) && e.type.endsWith("_node"),
          isOperation(e) {
            if (!o(e)) return !1;
            switch (e.type) {
              case "insert_node":
              case "remove_node":
                return st.isPath(e.path) && at.isNode(e.node);
              case "insert_text":
              case "remove_text":
                return (
                  "number" == typeof e.offset &&
                  "string" == typeof e.text &&
                  st.isPath(e.path)
                );
              case "merge_node":
                return (
                  "number" == typeof e.position &&
                  st.isPath(e.path) &&
                  o(e.properties)
                );
              case "move_node":
                return st.isPath(e.path) && st.isPath(e.newPath);
              case "set_node":
                return (
                  st.isPath(e.path) && o(e.properties) && o(e.newProperties)
                );
              case "set_selection":
                return (
                  (null === e.properties && Ct.isRange(e.newProperties)) ||
                  (null === e.newProperties && Ct.isRange(e.properties)) ||
                  (o(e.properties) && o(e.newProperties))
                );
              case "split_node":
                return (
                  st.isPath(e.path) &&
                  "number" == typeof e.position &&
                  o(e.properties)
                );
              default:
                return !1;
            }
          },
          isOperationList: (e) =>
            Array.isArray(e) && e.every((e) => lt.isOperation(e)),
          isSelectionOperation: (e) =>
            lt.isOperation(e) && e.type.endsWith("_selection"),
          isTextOperation: (e) => lt.isOperation(e) && e.type.endsWith("_text"),
          inverse(e) {
            switch (e.type) {
              case "insert_node":
                return it(it({}, e), {}, { type: "remove_node" });
              case "insert_text":
                return it(it({}, e), {}, { type: "remove_text" });
              case "merge_node":
                return it(
                  it({}, e),
                  {},
                  { type: "split_node", path: st.previous(e.path) }
                );
              case "move_node":
                var { newPath: t, path: r } = e;
                if (st.equals(t, r)) return e;
                if (st.isSibling(r, t))
                  return it(it({}, e), {}, { path: t, newPath: r });
                var n = st.transform(r, e),
                  u = st.transform(st.next(r), e);
                return it(it({}, e), {}, { path: n, newPath: u });
              case "remove_node":
                return it(it({}, e), {}, { type: "insert_node" });
              case "remove_text":
                return it(it({}, e), {}, { type: "insert_text" });
              case "set_node":
                var { properties: a, newProperties: o } = e;
                return it(it({}, e), {}, { properties: o, newProperties: a });
              case "set_selection":
                var { properties: i, newProperties: l } = e;
                return it(
                  it({}, e),
                  {},
                  null == i
                    ? { properties: l, newProperties: null }
                    : null == l
                    ? { properties: null, newProperties: i }
                    : { properties: l, newProperties: i }
                );
              case "split_node":
                return it(
                  it({}, e),
                  {},
                  { type: "merge_node", path: st.next(e.path) }
                );
            }
          },
        },
        st = {
          ancestors(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: r = !1 } = t,
              n = st.levels(e, t);
            return (n = r ? n.slice(1) : n.slice(0, -1));
          },
          common(e, t) {
            for (var r = [], n = 0; n < e.length && n < t.length; n++) {
              var u = e[n];
              if (u !== t[n]) break;
              r.push(u);
            }
            return r;
          },
          compare(e, t) {
            for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
              if (e[n] < t[n]) return -1;
              if (e[n] > t[n]) return 1;
            }
            return 0;
          },
          endsAfter(e, t) {
            var r = e.length - 1,
              n = e.slice(0, r),
              u = t.slice(0, r),
              a = e[r],
              o = t[r];
            return st.equals(n, u) && a > o;
          },
          endsAt(e, t) {
            var r = e.length,
              n = e.slice(0, r),
              u = t.slice(0, r);
            return st.equals(n, u);
          },
          endsBefore(e, t) {
            var r = e.length - 1,
              n = e.slice(0, r),
              u = t.slice(0, r),
              a = e[r],
              o = t[r];
            return st.equals(n, u) && a < o;
          },
          equals: (e, t) =>
            e.length === t.length && e.every((e, r) => e === t[r]),
          hasPrevious: (e) => e[e.length - 1] > 0,
          isAfter: (e, t) => 1 === st.compare(e, t),
          isAncestor: (e, t) => e.length < t.length && 0 === st.compare(e, t),
          isBefore: (e, t) => -1 === st.compare(e, t),
          isChild: (e, t) =>
            e.length === t.length + 1 && 0 === st.compare(e, t),
          isCommon: (e, t) => e.length <= t.length && 0 === st.compare(e, t),
          isDescendant: (e, t) => e.length > t.length && 0 === st.compare(e, t),
          isParent: (e, t) =>
            e.length + 1 === t.length && 0 === st.compare(e, t),
          isPath: (e) =>
            Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
          isSibling(e, t) {
            if (e.length !== t.length) return !1;
            var r = e.slice(0, -1),
              n = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && st.equals(r, n);
          },
          levels(e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { reverse: r = !1 } = t,
                n = [],
                u = 0;
              u <= e.length;
              u++
            )
              n.push(e.slice(0, u));
            return r && n.reverse(), n;
          },
          next(e) {
            if (0 === e.length)
              throw new Error(
                "Cannot get the next path of a root path [".concat(
                  e,
                  "], because it has no next index."
                )
              );
            var t = e[e.length - 1];
            return e.slice(0, -1).concat(t + 1);
          },
          operationCanTransformPath(e) {
            switch (e.type) {
              case "insert_node":
              case "remove_node":
              case "merge_node":
              case "split_node":
              case "move_node":
                return !0;
              default:
                return !1;
            }
          },
          parent(e) {
            if (0 === e.length)
              throw new Error(
                "Cannot get the parent path of the root path [".concat(e, "].")
              );
            return e.slice(0, -1);
          },
          previous(e) {
            if (0 === e.length)
              throw new Error(
                "Cannot get the previous path of a root path [".concat(
                  e,
                  "], because it has no previous index."
                )
              );
            var t = e[e.length - 1];
            if (t <= 0)
              throw new Error(
                "Cannot get the previous path of a first child path [".concat(
                  e,
                  "] because it would result in a negative index."
                )
              );
            return e.slice(0, -1).concat(t - 1);
          },
          relative(e, t) {
            if (!st.isAncestor(t, e) && !st.equals(e, t))
              throw new Error(
                "Cannot get the relative path of ["
                  .concat(e, "] inside ancestor [")
                  .concat(t, "], because it is not above or equal to the path.")
              );
            return e.slice(t.length);
          },
          transform(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return ue(e, (n) => {
              var { affinity: u = "forward" } = r;
              if (e && 0 !== (null == e ? void 0 : e.length)) {
                if (null === n) return null;
                switch (t.type) {
                  case "insert_node":
                    var { path: a } = t;
                    (st.equals(a, n) ||
                      st.endsBefore(a, n) ||
                      st.isAncestor(a, n)) &&
                      (n[a.length - 1] += 1);
                    break;
                  case "remove_node":
                    var { path: o } = t;
                    if (st.equals(o, n) || st.isAncestor(o, n)) return null;
                    st.endsBefore(o, n) && (n[o.length - 1] -= 1);
                    break;
                  case "merge_node":
                    var { path: i, position: l } = t;
                    st.equals(i, n) || st.endsBefore(i, n)
                      ? (n[i.length - 1] -= 1)
                      : st.isAncestor(i, n) &&
                        ((n[i.length - 1] -= 1), (n[i.length] += l));
                    break;
                  case "split_node":
                    var { path: s, position: c } = t;
                    if (st.equals(s, n)) {
                      if ("forward" === u) n[n.length - 1] += 1;
                      else if ("backward" !== u) return null;
                    } else
                      st.endsBefore(s, n)
                        ? (n[s.length - 1] += 1)
                        : st.isAncestor(s, n) &&
                          e[s.length] >= c &&
                          ((n[s.length - 1] += 1), (n[s.length] -= c));
                    break;
                  case "move_node":
                    var { path: d, newPath: f } = t;
                    if (st.equals(d, f)) return;
                    if (st.isAncestor(d, n) || st.equals(d, n)) {
                      var h = f.slice();
                      return (
                        st.endsBefore(d, f) &&
                          d.length < f.length &&
                          (h[d.length - 1] -= 1),
                        h.concat(n.slice(d.length))
                      );
                    }
                    st.isSibling(d, f) &&
                    (st.isAncestor(f, n) || st.equals(f, n))
                      ? st.endsBefore(d, n)
                        ? (n[d.length - 1] -= 1)
                        : (n[d.length - 1] += 1)
                      : st.endsBefore(f, n) ||
                        st.equals(f, n) ||
                        st.isAncestor(f, n)
                      ? (st.endsBefore(d, n) && (n[d.length - 1] -= 1),
                        (n[f.length - 1] += 1))
                      : st.endsBefore(d, n) &&
                        (st.equals(f, n) && (n[f.length - 1] += 1),
                        (n[d.length - 1] -= 1));
                }
              }
            });
          },
        },
        ct = {
          transform(e, t) {
            var { current: r, affinity: n } = e;
            if (null != r) {
              var u = st.transform(r, t, { affinity: n });
              (e.current = u), null == u && e.unref();
            }
          },
        };
      function dt(e, t) {
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
      function ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? dt(Object(r), !0).forEach(function (t) {
                ie(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : dt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var ht = {
          compare(e, t) {
            var r = st.compare(e.path, t.path);
            return 0 === r
              ? e.offset < t.offset
                ? -1
                : e.offset > t.offset
                ? 1
                : 0
              : r;
          },
          isAfter: (e, t) => 1 === ht.compare(e, t),
          isBefore: (e, t) => -1 === ht.compare(e, t),
          equals: (e, t) => e.offset === t.offset && st.equals(e.path, t.path),
          isPoint: (e) =>
            o(e) && "number" == typeof e.offset && st.isPath(e.path),
          transform(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return ue(e, (e) => {
              if (null === e) return null;
              var { affinity: n = "forward" } = r,
                { path: u, offset: a } = e;
              switch (t.type) {
                case "insert_node":
                case "move_node":
                  e.path = st.transform(u, t, r);
                  break;
                case "insert_text":
                  st.equals(t.path, u) &&
                    t.offset <= a &&
                    (e.offset += t.text.length);
                  break;
                case "merge_node":
                  st.equals(t.path, u) && (e.offset += t.position),
                    (e.path = st.transform(u, t, r));
                  break;
                case "remove_text":
                  st.equals(t.path, u) &&
                    t.offset <= a &&
                    (e.offset -= Math.min(a - t.offset, t.text.length));
                  break;
                case "remove_node":
                  if (st.equals(t.path, u) || st.isAncestor(t.path, u))
                    return null;
                  e.path = st.transform(u, t, r);
                  break;
                case "split_node":
                  if (st.equals(t.path, u)) {
                    if (t.position === a && null == n) return null;
                    (t.position < a || (t.position === a && "forward" === n)) &&
                      ((e.offset -= t.position),
                      (e.path = st.transform(
                        u,
                        t,
                        ft(ft({}, r), {}, { affinity: "forward" })
                      )));
                  } else e.path = st.transform(u, t, r);
              }
            });
          },
        },
        Dt = {
          transform(e, t) {
            var { current: r, affinity: n } = e;
            if (null != r) {
              var u = ht.transform(r, t, { affinity: n });
              (e.current = u), null == u && e.unref();
            }
          },
        },
        pt = ["anchor", "focus"];
      function vt(e, t) {
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
      var Ct = {
          edges(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: r = !1 } = t,
              { anchor: n, focus: u } = e;
            return Ct.isBackward(e) === r ? [n, u] : [u, n];
          },
          end(e) {
            var [, t] = Ct.edges(e);
            return t;
          },
          equals: (e, t) =>
            ht.equals(e.anchor, t.anchor) && ht.equals(e.focus, t.focus),
          includes(e, t) {
            if (Ct.isRange(t)) {
              if (Ct.includes(e, t.anchor) || Ct.includes(e, t.focus))
                return !0;
              var [r, n] = Ct.edges(e),
                [u, a] = Ct.edges(t);
              return ht.isBefore(r, u) && ht.isAfter(n, a);
            }
            var [o, i] = Ct.edges(e),
              l = !1,
              s = !1;
            return (
              ht.isPoint(t)
                ? ((l = ht.compare(t, o) >= 0), (s = ht.compare(t, i) <= 0))
                : ((l = st.compare(t, o.path) >= 0),
                  (s = st.compare(t, i.path) <= 0)),
              l && s
            );
          },
          intersection(e, t) {
            var r = ge(e, pt),
              [n, u] = Ct.edges(e),
              [a, o] = Ct.edges(t),
              i = ht.isBefore(n, a) ? a : n,
              l = ht.isBefore(u, o) ? u : o;
            return ht.isBefore(l, i)
              ? null
              : (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? vt(Object(r), !0).forEach(function (t) {
                          ie(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : vt(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t)
                          );
                        });
                  }
                  return e;
                })({ anchor: i, focus: l }, r);
          },
          isBackward(e) {
            var { anchor: t, focus: r } = e;
            return ht.isAfter(t, r);
          },
          isCollapsed(e) {
            var { anchor: t, focus: r } = e;
            return ht.equals(t, r);
          },
          isExpanded: (e) => !Ct.isCollapsed(e),
          isForward: (e) => !Ct.isBackward(e),
          isRange: (e) => o(e) && ht.isPoint(e.anchor) && ht.isPoint(e.focus),
          *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
          },
          start(e) {
            var [t] = Ct.edges(e);
            return t;
          },
          transform(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return ue(e, (e) => {
              if (null === e) return null;
              var n,
                u,
                { affinity: a = "inward" } = r;
              if ("inward" === a) {
                var o = Ct.isCollapsed(e);
                Ct.isForward(e)
                  ? ((n = "forward"), (u = o ? n : "backward"))
                  : ((n = "backward"), (u = o ? n : "forward"));
              } else
                "outward" === a
                  ? Ct.isForward(e)
                    ? ((n = "backward"), (u = "forward"))
                    : ((n = "forward"), (u = "backward"))
                  : ((n = a), (u = a));
              var i = ht.transform(e.anchor, t, { affinity: n }),
                l = ht.transform(e.focus, t, { affinity: u });
              if (!i || !l) return null;
              (e.anchor = i), (e.focus = l);
            });
          },
        },
        mt = {
          transform(e, t) {
            var { current: r, affinity: n } = e;
            if (null != r) {
              var u = Ct.transform(r, t, { affinity: n });
              (e.current = u), null == u && e.unref();
            }
          },
        },
        gt = (e, t) => {
          for (var r in e) {
            var n = e[r],
              u = t[r];
            if (o(n) && o(u)) {
              if (!gt(n, u)) return !1;
            } else if (Array.isArray(n) && Array.isArray(u)) {
              if (n.length !== u.length) return !1;
              for (var a = 0; a < n.length; a++) if (n[a] !== u[a]) return !1;
            } else if (n !== u) return !1;
          }
          for (var i in t) if (void 0 === e[i] && void 0 !== t[i]) return !1;
          return !0;
        },
        Bt = ["text"],
        Et = ["anchor", "focus"];
      function At(e, t) {
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
      function Ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? At(Object(r), !0).forEach(function (t) {
                ie(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : At(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var wt = {
        equals(e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { loose: n = !1 } = r;
          function u(e) {
            return ge(e, Bt);
          }
          return gt(n ? u(e) : e, n ? u(t) : t);
        },
        isText: (e) => o(e) && "string" == typeof e.text,
        isTextList: (e) => Array.isArray(e) && e.every((e) => wt.isText(e)),
        isTextProps: (e) => void 0 !== e.text,
        matches(e, t) {
          for (var r in t)
            if ("text" !== r && (!e.hasOwnProperty(r) || e[r] !== t[r]))
              return !1;
          return !0;
        },
        decorations(e, t) {
          var r = [Ft({}, e)];
          for (var n of t) {
            var u = ge(n, Et),
              [a, o] = Ct.edges(n),
              i = [],
              l = 0;
            for (var s of r) {
              var { length: c } = s.text,
                d = l;
              if (((l += c), a.offset <= d && o.offset >= l))
                Object.assign(s, u), i.push(s);
              else if (
                (a.offset !== o.offset && (a.offset === l || o.offset === d)) ||
                a.offset > l ||
                o.offset < d ||
                (o.offset === d && 0 !== d)
              )
                i.push(s);
              else {
                var f = s,
                  h = void 0,
                  D = void 0;
                if (o.offset < l) {
                  var p = o.offset - d;
                  (D = Ft(Ft({}, f), {}, { text: f.text.slice(p) })),
                    (f = Ft(Ft({}, f), {}, { text: f.text.slice(0, p) }));
                }
                if (a.offset > d) {
                  var v = a.offset - d;
                  (h = Ft(Ft({}, f), {}, { text: f.text.slice(0, v) })),
                    (f = Ft(Ft({}, f), {}, { text: f.text.slice(v) }));
                }
                Object.assign(f, u), h && i.push(h), i.push(f), D && i.push(D);
              }
            }
            r = i;
          }
          return r;
        },
      };
      function yt(e, t) {
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
      function bt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? yt(Object(r), !0).forEach(function (t) {
                ie(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : yt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var xt = {
          transform(e, t) {
            e.children = ae(e.children);
            var r = e.selection && ae(e.selection);
            try {
              r = ((e, t, r) => {
                switch (r.type) {
                  case "insert_node":
                    var { path: n, node: u } = r,
                      a = at.parent(e, n),
                      o = n[n.length - 1];
                    if (o > a.children.length)
                      throw new Error(
                        'Cannot apply an "insert_node" operation at path ['.concat(
                          n,
                          "] because the destination is past the end of the node."
                        )
                      );
                    if ((a.children.splice(o, 0, u), t))
                      for (var [i, l] of Ct.points(t))
                        t[l] = ht.transform(i, r);
                    break;
                  case "insert_text":
                    var { path: s, offset: c, text: d } = r;
                    if (0 === d.length) break;
                    var f = at.leaf(e, s),
                      h = f.text.slice(0, c),
                      D = f.text.slice(c);
                    if (((f.text = h + d + D), t))
                      for (var [p, v] of Ct.points(t))
                        t[v] = ht.transform(p, r);
                    break;
                  case "merge_node":
                    var { path: C } = r,
                      m = at.get(e, C),
                      g = st.previous(C),
                      B = at.get(e, g),
                      E = at.parent(e, C),
                      A = C[C.length - 1];
                    if (wt.isText(m) && wt.isText(B)) B.text += m.text;
                    else {
                      if (wt.isText(m) || wt.isText(B))
                        throw new Error(
                          'Cannot apply a "merge_node" operation at path ['
                            .concat(C, "] to nodes of different interfaces: ")
                            .concat(m, " ")
                            .concat(B)
                        );
                      B.children.push(...m.children);
                    }
                    if ((E.children.splice(A, 1), t))
                      for (var [F, w] of Ct.points(t))
                        t[w] = ht.transform(F, r);
                    break;
                  case "move_node":
                    var { path: y, newPath: b } = r;
                    if (st.isAncestor(y, b))
                      throw new Error(
                        "Cannot move a path ["
                          .concat(y, "] to new path [")
                          .concat(
                            b,
                            "] because the destination is inside itself."
                          )
                      );
                    var x = at.get(e, y),
                      O = at.parent(e, y),
                      k = y[y.length - 1];
                    O.children.splice(k, 1);
                    var P = st.transform(y, r),
                      N = at.get(e, st.parent(P)),
                      S = P[P.length - 1];
                    if ((N.children.splice(S, 0, x), t))
                      for (var [j, T] of Ct.points(t))
                        t[T] = ht.transform(j, r);
                    break;
                  case "remove_node":
                    var { path: M } = r,
                      R = M[M.length - 1];
                    if ((at.parent(e, M).children.splice(R, 1), t))
                      for (var [_, L] of Ct.points(t)) {
                        var z = ht.transform(_, r);
                        if (null != t && null != z) t[L] = z;
                        else {
                          var W = void 0,
                            I = void 0;
                          for (var [V, Z] of at.texts(e)) {
                            if (-1 !== st.compare(Z, M)) {
                              I = [V, Z];
                              break;
                            }
                            W = [V, Z];
                          }
                          var q = !1;
                          W &&
                            I &&
                            (q = st.equals(I[1], M)
                              ? !st.hasPrevious(I[1])
                              : st.common(W[1], M).length <
                                st.common(I[1], M).length),
                            W && !q
                              ? ((_.path = W[1]), (_.offset = W[0].text.length))
                              : I
                              ? ((_.path = I[1]), (_.offset = 0))
                              : (t = null);
                        }
                      }
                    break;
                  case "remove_text":
                    var { path: $, offset: H, text: U } = r;
                    if (0 === U.length) break;
                    var K = at.leaf(e, $),
                      J = K.text.slice(0, H),
                      X = K.text.slice(H + U.length);
                    if (((K.text = J + X), t))
                      for (var [Y, Q] of Ct.points(t))
                        t[Q] = ht.transform(Y, r);
                    break;
                  case "set_node":
                    var { path: G, properties: ee, newProperties: te } = r;
                    if (0 === G.length)
                      throw new Error(
                        "Cannot set properties on the root node!"
                      );
                    var re = at.get(e, G);
                    for (var ne in te) {
                      if ("children" === ne || "text" === ne)
                        throw new Error(
                          'Cannot set the "'.concat(ne, '" property of nodes!')
                        );
                      var ue = te[ne];
                      null == ue ? delete re[ne] : (re[ne] = ue);
                    }
                    for (var ae in ee) te.hasOwnProperty(ae) || delete re[ae];
                    break;
                  case "set_selection":
                    var { newProperties: oe } = r;
                    if (null == oe) t = oe;
                    else {
                      if (null == t) {
                        if (!Ct.isRange(oe))
                          throw new Error(
                            'Cannot apply an incomplete "set_selection" operation properties '.concat(
                              JSON.stringify(oe),
                              " when there is no current selection."
                            )
                          );
                        t = bt({}, oe);
                      }
                      for (var ie in oe) {
                        var le = oe[ie];
                        if (null == le) {
                          if ("anchor" === ie || "focus" === ie)
                            throw new Error(
                              'Cannot remove the "'.concat(
                                ie,
                                '" selection property'
                              )
                            );
                          delete t[ie];
                        } else t[ie] = le;
                      }
                    }
                    break;
                  case "split_node":
                    var { path: se, position: ce, properties: de } = r;
                    if (0 === se.length)
                      throw new Error(
                        'Cannot apply a "split_node" operation at path ['.concat(
                          se,
                          "] because the root node cannot be split."
                        )
                      );
                    var fe,
                      he = at.get(e, se),
                      De = at.parent(e, se),
                      pe = se[se.length - 1];
                    if (wt.isText(he)) {
                      var ve = he.text.slice(0, ce),
                        Ce = he.text.slice(ce);
                      (he.text = ve), (fe = bt(bt({}, de), {}, { text: Ce }));
                    } else {
                      var me = he.children.slice(0, ce),
                        ge = he.children.slice(ce);
                      (he.children = me),
                        (fe = bt(bt({}, de), {}, { children: ge }));
                    }
                    if ((De.children.splice(pe + 1, 0, fe), t))
                      for (var [Be, Ee] of Ct.points(t))
                        t[Ee] = ht.transform(Be, r);
                }
                return t;
              })(e, r, t);
            } finally {
              (e.children = oe(e.children)),
                (e.selection = r ? (l(r) ? oe(r) : r) : null);
            }
          },
        },
        Ot = ["text"],
        kt = ["children"];
      function Pt(e, t) {
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
      function Nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pt(Object(r), !0).forEach(function (t) {
                ie(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Pt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var St = {
          insertNodes(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            et.withoutNormalizing(e, () => {
              var { hanging: n = !1, voids: u = !1, mode: a = "lowest" } = r,
                { at: o, match: i, select: l } = r;
              if ((at.isNode(t) && (t = [t]), 0 !== t.length)) {
                var [s] = t;
                if (
                  (o ||
                    ((o = e.selection
                      ? e.selection
                      : e.children.length > 0
                      ? et.end(e, [])
                      : [0]),
                    (l = !0)),
                  null == l && (l = !1),
                  Ct.isRange(o))
                )
                  if ((n || (o = et.unhangRange(e, o)), Ct.isCollapsed(o)))
                    o = o.anchor;
                  else {
                    var [, c] = Ct.edges(o),
                      d = et.pointRef(e, c);
                    Vt.delete(e, { at: o }), (o = d.unref());
                  }
                if (ht.isPoint(o)) {
                  null == i &&
                    (i = wt.isText(s)
                      ? (e) => wt.isText(e)
                      : e.isInline(s)
                      ? (t) => wt.isText(t) || et.isInline(e, t)
                      : (t) => et.isBlock(e, t));
                  var [f] = et.nodes(e, {
                    at: o.path,
                    match: i,
                    mode: a,
                    voids: u,
                  });
                  if (!f) return;
                  var [, h] = f,
                    D = et.pathRef(e, h),
                    p = et.isEnd(e, o, h);
                  Vt.splitNodes(e, { at: o, match: i, mode: a, voids: u });
                  var v = D.unref();
                  o = p ? st.next(v) : v;
                }
                var C = st.parent(o),
                  m = o[o.length - 1];
                if (u || !et.void(e, { at: C })) {
                  for (var g of t) {
                    var B = C.concat(m);
                    m++,
                      e.apply({ type: "insert_node", path: B, node: g }),
                      (o = st.next(o));
                  }
                  if (((o = st.previous(o)), l)) {
                    var E = et.end(e, o);
                    E && Vt.select(e, E);
                  }
                }
              }
            });
          },
          liftNodes(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            et.withoutNormalizing(e, () => {
              var {
                  at: r = e.selection,
                  mode: n = "lowest",
                  voids: u = !1,
                } = t,
                { match: a } = t;
              if (
                (null == a &&
                  (a = st.isPath(r) ? Mt(e, r) : (t) => et.isBlock(e, t)),
                r)
              ) {
                var o = et.nodes(e, { at: r, match: a, mode: n, voids: u }),
                  i = Array.from(o, (t) => {
                    var [, r] = t;
                    return et.pathRef(e, r);
                  });
                for (var l of i) {
                  var s = l.unref();
                  if (s.length < 2)
                    throw new Error(
                      "Cannot lift node at a path [".concat(
                        s,
                        "] because it has a depth of less than `2`."
                      )
                    );
                  var c = et.node(e, st.parent(s)),
                    [d, f] = c,
                    h = s[s.length - 1],
                    { length: D } = d.children;
                  if (1 === D) {
                    var p = st.next(f);
                    Vt.moveNodes(e, { at: s, to: p, voids: u }),
                      Vt.removeNodes(e, { at: f, voids: u });
                  } else if (0 === h)
                    Vt.moveNodes(e, { at: s, to: f, voids: u });
                  else if (h === D - 1) {
                    var v = st.next(f);
                    Vt.moveNodes(e, { at: s, to: v, voids: u });
                  } else {
                    var C = st.next(s),
                      m = st.next(f);
                    Vt.splitNodes(e, { at: C, voids: u }),
                      Vt.moveNodes(e, { at: s, to: m, voids: u });
                  }
                }
              }
            });
          },
          mergeNodes(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            et.withoutNormalizing(e, () => {
              var { match: r, at: n = e.selection } = t,
                { hanging: u = !1, voids: a = !1, mode: o = "lowest" } = t;
              if (n) {
                if (null == r)
                  if (st.isPath(n)) {
                    var [i] = et.parent(e, n);
                    r = (e) => i.children.includes(e);
                  } else r = (t) => et.isBlock(e, t);
                if (
                  (!u && Ct.isRange(n) && (n = et.unhangRange(e, n)),
                  Ct.isRange(n))
                )
                  if (Ct.isCollapsed(n)) n = n.anchor;
                  else {
                    var [, l] = Ct.edges(n),
                      s = et.pointRef(e, l);
                    Vt.delete(e, { at: n }),
                      (n = s.unref()),
                      null == t.at && Vt.select(e, n);
                  }
                var [c] = et.nodes(e, { at: n, match: r, voids: a, mode: o }),
                  d = et.previous(e, { at: n, match: r, voids: a, mode: o });
                if (c && d) {
                  var [f, h] = c,
                    [D, p] = d;
                  if (0 !== h.length && 0 !== p.length) {
                    var v,
                      C,
                      m = st.next(p),
                      g = st.common(h, p),
                      B = st.isSibling(h, p),
                      E = Array.from(et.levels(e, { at: h }), (e) => {
                        var [t] = e;
                        return t;
                      })
                        .slice(g.length)
                        .slice(0, -1),
                      A = et.above(e, {
                        at: h,
                        mode: "highest",
                        match: (t) => E.includes(t) && jt(e, t),
                      }),
                      F = A && et.pathRef(e, A[1]);
                    if (wt.isText(f) && wt.isText(D)) {
                      var w = ge(f, Ot);
                      (C = D.text.length), (v = w);
                    } else {
                      if (!Ke.isElement(f) || !Ke.isElement(D))
                        throw new Error(
                          "Cannot merge the node at path ["
                            .concat(
                              h,
                              "] with the previous sibling because it is not the same kind: "
                            )
                            .concat(JSON.stringify(f), " ")
                            .concat(JSON.stringify(D))
                        );
                      w = ge(f, kt);
                      (C = D.children.length), (v = w);
                    }
                    B || Vt.moveNodes(e, { at: h, to: m, voids: a }),
                      F && Vt.removeNodes(e, { at: F.current, voids: a }),
                      (Ke.isElement(D) && et.isEmpty(e, D)) ||
                      (wt.isText(D) && "" === D.text && 0 !== p[p.length - 1])
                        ? Vt.removeNodes(e, { at: p, voids: a })
                        : e.apply({
                            type: "merge_node",
                            path: m,
                            position: C,
                            properties: v,
                          }),
                      F && F.unref();
                  }
                }
              }
            });
          },
          moveNodes(e, t) {
            et.withoutNormalizing(e, () => {
              var {
                  to: r,
                  at: n = e.selection,
                  mode: u = "lowest",
                  voids: a = !1,
                } = t,
                { match: o } = t;
              if (n) {
                null == o &&
                  (o = st.isPath(n) ? Mt(e, n) : (t) => et.isBlock(e, t));
                var i = et.pathRef(e, r),
                  l = et.nodes(e, { at: n, match: o, mode: u, voids: a }),
                  s = Array.from(l, (t) => {
                    var [, r] = t;
                    return et.pathRef(e, r);
                  });
                for (var c of s) {
                  var d = c.unref(),
                    f = i.current;
                  0 !== d.length &&
                    e.apply({ type: "move_node", path: d, newPath: f }),
                    i.current &&
                      st.isSibling(f, d) &&
                      st.isAfter(f, d) &&
                      (i.current = st.next(i.current));
                }
                i.unref();
              }
            });
          },
          removeNodes(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            et.withoutNormalizing(e, () => {
              var { hanging: r = !1, voids: n = !1, mode: u = "lowest" } = t,
                { at: a = e.selection, match: o } = t;
              if (a) {
                null == o &&
                  (o = st.isPath(a) ? Mt(e, a) : (t) => et.isBlock(e, t)),
                  !r && Ct.isRange(a) && (a = et.unhangRange(e, a));
                var i = et.nodes(e, { at: a, match: o, mode: u, voids: n }),
                  l = Array.from(i, (t) => {
                    var [, r] = t;
                    return et.pathRef(e, r);
                  });
                for (var s of l) {
                  var c = s.unref();
                  if (c) {
                    var [d] = et.node(e, c);
                    e.apply({ type: "remove_node", path: c, node: d });
                  }
                }
              }
            });
          },
          setNodes(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            et.withoutNormalizing(e, () => {
              var { match: n, at: u = e.selection } = r,
                {
                  hanging: a = !1,
                  mode: o = "lowest",
                  split: i = !1,
                  voids: l = !1,
                } = r;
              if (u) {
                if (
                  (null == n &&
                    (n = st.isPath(u) ? Mt(e, u) : (t) => et.isBlock(e, t)),
                  !a && Ct.isRange(u) && (u = et.unhangRange(e, u)),
                  i && Ct.isRange(u))
                ) {
                  if (
                    Ct.isCollapsed(u) &&
                    et.leaf(e, u.anchor)[0].text.length > 0
                  )
                    return;
                  var s = et.rangeRef(e, u, { affinity: "inward" }),
                    [c, d] = Ct.edges(u),
                    f = "lowest" === o ? "lowest" : "highest",
                    h = et.isEnd(e, d, d.path);
                  Vt.splitNodes(e, {
                    at: d,
                    match: n,
                    mode: f,
                    voids: l,
                    always: !h,
                  });
                  var D = et.isStart(e, c, c.path);
                  Vt.splitNodes(e, {
                    at: c,
                    match: n,
                    mode: f,
                    voids: l,
                    always: !D,
                  }),
                    (u = s.unref()),
                    null == r.at && Vt.select(e, u);
                }
                for (var [p, v] of et.nodes(e, {
                  at: u,
                  match: n,
                  mode: o,
                  voids: l,
                })) {
                  var C = {},
                    m = {};
                  if (0 !== v.length) {
                    var g = !1;
                    for (var B in t)
                      "children" !== B &&
                        "text" !== B &&
                        t[B] !== p[B] &&
                        ((g = !0),
                        p.hasOwnProperty(B) && (C[B] = p[B]),
                        null != t[B] && (m[B] = t[B]));
                    g &&
                      e.apply({
                        type: "set_node",
                        path: v,
                        properties: C,
                        newProperties: m,
                      });
                  }
                }
              }
            });
          },
          splitNodes(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            et.withoutNormalizing(e, () => {
              var { mode: r = "lowest", voids: n = !1 } = t,
                {
                  match: u,
                  at: a = e.selection,
                  height: o = 0,
                  always: i = !1,
                } = t;
              if (
                (null == u && (u = (t) => et.isBlock(e, t)),
                Ct.isRange(a) && (a = Tt(e, a)),
                st.isPath(a))
              ) {
                var l = a,
                  s = et.point(e, l),
                  [c] = et.parent(e, l);
                (u = (e) => e === c),
                  (o = s.path.length - l.length + 1),
                  (a = s),
                  (i = !0);
              }
              if (a) {
                var d = et.pointRef(e, a, { affinity: "backward" }),
                  [f] = et.nodes(e, { at: a, match: u, mode: r, voids: n });
                if (f) {
                  var h = et.void(e, { at: a, mode: "highest" });
                  if (!n && h) {
                    var [D, p] = h;
                    if (Ke.isElement(D) && e.isInline(D)) {
                      var v = et.after(e, p);
                      if (!v) {
                        var C = st.next(p);
                        Vt.insertNodes(e, { text: "" }, { at: C, voids: n }),
                          (v = et.point(e, C));
                      }
                      (a = v), (i = !0);
                    }
                    (o = a.path.length - p.length + 1), (i = !0);
                  }
                  var m = et.pointRef(e, a),
                    g = a.path.length - o,
                    [, B] = f,
                    E = a.path.slice(0, g),
                    A = 0 === o ? a.offset : a.path[g] + 0;
                  for (var [F, w] of et.levels(e, {
                    at: E,
                    reverse: !0,
                    voids: n,
                  })) {
                    var y = !1;
                    if (
                      w.length < B.length ||
                      0 === w.length ||
                      (!n && et.isVoid(e, F))
                    )
                      break;
                    var b = d.current,
                      x = et.isEnd(e, b, w);
                    if (i || !d || !et.isEdge(e, b, w)) {
                      y = !0;
                      var O = at.extractProps(F);
                      e.apply({
                        type: "split_node",
                        path: w,
                        position: A,
                        properties: O,
                      });
                    }
                    A = w[w.length - 1] + (y || x ? 1 : 0);
                  }
                  if (null == t.at) {
                    var k = m.current || et.end(e, []);
                    Vt.select(e, k);
                  }
                  d.unref(), m.unref();
                }
              }
            });
          },
          unsetNodes(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            Array.isArray(t) || (t = [t]);
            var n = {};
            for (var u of t) n[u] = null;
            Vt.setNodes(e, n, r);
          },
          unwrapNodes(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            et.withoutNormalizing(e, () => {
              var { mode: r = "lowest", split: n = !1, voids: u = !1 } = t,
                { at: a = e.selection, match: o } = t;
              if (a) {
                null == o &&
                  (o = st.isPath(a) ? Mt(e, a) : (t) => et.isBlock(e, t)),
                  st.isPath(a) && (a = et.range(e, a));
                var i = Ct.isRange(a) ? et.rangeRef(e, a) : null,
                  l = et.nodes(e, { at: a, match: o, mode: r, voids: u }),
                  s = Array.from(l, (t) => {
                    var [, r] = t;
                    return et.pathRef(e, r);
                  }).reverse(),
                  c = function (t) {
                    var r = t.unref(),
                      [a] = et.node(e, r),
                      o = et.range(e, r);
                    n && i && (o = Ct.intersection(i.current, o)),
                      Vt.liftNodes(e, {
                        at: o,
                        match: (e) =>
                          Ke.isAncestor(a) && a.children.includes(e),
                        voids: u,
                      });
                  };
                for (var d of s) c(d);
                i && i.unref();
              }
            });
          },
          wrapNodes(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            et.withoutNormalizing(e, () => {
              var { mode: n = "lowest", split: u = !1, voids: a = !1 } = r,
                { match: o, at: i = e.selection } = r;
              if (i) {
                if (
                  (null == o &&
                    (o = st.isPath(i)
                      ? Mt(e, i)
                      : e.isInline(t)
                      ? (t) => et.isInline(e, t) || wt.isText(t)
                      : (t) => et.isBlock(e, t)),
                  u && Ct.isRange(i))
                ) {
                  var [l, s] = Ct.edges(i),
                    c = et.rangeRef(e, i, { affinity: "inward" });
                  Vt.splitNodes(e, { at: s, match: o, voids: a }),
                    Vt.splitNodes(e, { at: l, match: o, voids: a }),
                    (i = c.unref()),
                    null == r.at && Vt.select(e, i);
                }
                var d = Array.from(
                  et.nodes(e, {
                    at: i,
                    match: e.isInline(t)
                      ? (t) => et.isBlock(e, t)
                      : (e) => et.isEditor(e),
                    mode: "lowest",
                    voids: a,
                  })
                );
                for (var [, f] of d) {
                  var h = Ct.isRange(i)
                    ? Ct.intersection(i, et.range(e, f))
                    : i;
                  if (h) {
                    var D = Array.from(
                      et.nodes(e, { at: h, match: o, mode: n, voids: a })
                    );
                    if (D.length > 0) {
                      var p = (function () {
                        var [r] = D,
                          n = D[D.length - 1],
                          [, u] = r,
                          [, o] = n;
                        if (0 === u.length && 0 === o.length) return "continue";
                        var i = st.equals(u, o)
                            ? st.parent(u)
                            : st.common(u, o),
                          l = et.range(e, u, o),
                          s = et.node(e, i),
                          [c] = s,
                          d = i.length + 1,
                          f = st.next(o.slice(0, d)),
                          h = Nt(Nt({}, t), {}, { children: [] });
                        Vt.insertNodes(e, h, { at: f, voids: a }),
                          Vt.moveNodes(e, {
                            at: l,
                            match: (e) =>
                              Ke.isAncestor(c) && c.children.includes(e),
                            to: f.concat(0),
                            voids: a,
                          });
                      })();
                      if ("continue" === p) continue;
                    }
                  }
                }
              }
            });
          },
        },
        jt = (e, t) => {
          if (Ke.isElement(t)) {
            var r = t;
            return (
              !!et.isVoid(e, t) ||
              (1 === r.children.length && jt(e, r.children[0]))
            );
          }
          return !et.isEditor(t);
        },
        Tt = (e, t) => {
          if (Ct.isCollapsed(t)) return t.anchor;
          var [, r] = Ct.edges(t),
            n = et.pointRef(e, r);
          return Vt.delete(e, { at: t }), n.unref();
        },
        Mt = (e, t) => {
          var [r] = et.node(e, t);
          return (e) => e === r;
        };
      function Rt(e, t) {
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
      function _t(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Rt(Object(r), !0).forEach(function (t) {
                ie(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Rt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Lt = {
          collapse(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { edge: r = "anchor" } = t,
              { selection: n } = e;
            if (n)
              if ("anchor" === r) Vt.select(e, n.anchor);
              else if ("focus" === r) Vt.select(e, n.focus);
              else if ("start" === r) {
                var [u] = Ct.edges(n);
                Vt.select(e, u);
              } else if ("end" === r) {
                var [, a] = Ct.edges(n);
                Vt.select(e, a);
              }
          },
          deselect(e) {
            var { selection: t } = e;
            t &&
              e.apply({
                type: "set_selection",
                properties: t,
                newProperties: null,
              });
          },
          move(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { selection: r } = e,
              { distance: n = 1, unit: u = "character", reverse: a = !1 } = t,
              { edge: o = null } = t;
            if (r) {
              "start" === o && (o = Ct.isBackward(r) ? "focus" : "anchor"),
                "end" === o && (o = Ct.isBackward(r) ? "anchor" : "focus");
              var { anchor: i, focus: l } = r,
                s = { distance: n, unit: u },
                c = {};
              if (null == o || "anchor" === o) {
                var d = a ? et.before(e, i, s) : et.after(e, i, s);
                d && (c.anchor = d);
              }
              if (null == o || "focus" === o) {
                var f = a ? et.before(e, l, s) : et.after(e, l, s);
                f && (c.focus = f);
              }
              Vt.setSelection(e, c);
            }
          },
          select(e, t) {
            var { selection: r } = e;
            if (((t = et.range(e, t)), r)) Vt.setSelection(e, t);
            else {
              if (!Ct.isRange(t))
                throw new Error(
                  "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                    JSON.stringify(t)
                  )
                );
              e.apply({
                type: "set_selection",
                properties: r,
                newProperties: t,
              });
            }
          },
          setPoint(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { selection: n } = e,
              { edge: u = "both" } = r;
            if (n) {
              "start" === u && (u = Ct.isBackward(n) ? "focus" : "anchor"),
                "end" === u && (u = Ct.isBackward(n) ? "anchor" : "focus");
              var { anchor: a, focus: o } = n,
                i = "anchor" === u ? a : o;
              Vt.setSelection(e, {
                ["anchor" === u ? "anchor" : "focus"]: _t(_t({}, i), t),
              });
            }
          },
          setSelection(e, t) {
            var { selection: r } = e,
              n = {},
              u = {};
            if (r) {
              for (var a in t)
                (("anchor" === a &&
                  null != t.anchor &&
                  !ht.equals(t.anchor, r.anchor)) ||
                  ("focus" === a &&
                    null != t.focus &&
                    !ht.equals(t.focus, r.focus)) ||
                  ("anchor" !== a && "focus" !== a && t[a] !== r[a])) &&
                  ((n[a] = r[a]), (u[a] = t[a]));
              Object.keys(n).length > 0 &&
                e.apply({
                  type: "set_selection",
                  properties: n,
                  newProperties: u,
                });
            }
          },
        },
        zt = {
          delete(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            et.withoutNormalizing(e, () => {
              var {
                  reverse: r = !1,
                  unit: n = "character",
                  distance: u = 1,
                  voids: a = !1,
                } = t,
                { at: o = e.selection, hanging: i = !1 } = t;
              if (o) {
                if (
                  (Ct.isRange(o) && Ct.isCollapsed(o) && (o = o.anchor),
                  ht.isPoint(o))
                ) {
                  var l = et.void(e, { at: o, mode: "highest" });
                  if (!a && l) {
                    var [, s] = l;
                    o = s;
                  } else {
                    var c = { unit: n, distance: u };
                    (o = {
                      anchor: o,
                      focus: r
                        ? et.before(e, o, c) || et.start(e, [])
                        : et.after(e, o, c) || et.end(e, []),
                    }),
                      (i = !0);
                  }
                }
                if (st.isPath(o)) Vt.removeNodes(e, { at: o, voids: a });
                else if (!Ct.isCollapsed(o)) {
                  if (!i) {
                    var [, d] = Ct.edges(o),
                      f = et.end(e, []);
                    ht.equals(d, f) || (o = et.unhangRange(e, o, { voids: a }));
                  }
                  var [h, D] = Ct.edges(o),
                    p = et.above(e, {
                      match: (t) => et.isBlock(e, t),
                      at: h,
                      voids: a,
                    }),
                    v = et.above(e, {
                      match: (t) => et.isBlock(e, t),
                      at: D,
                      voids: a,
                    }),
                    C = p && v && !st.equals(p[1], v[1]),
                    m = st.equals(h.path, D.path),
                    g = a ? null : et.void(e, { at: h, mode: "highest" }),
                    B = a ? null : et.void(e, { at: D, mode: "highest" });
                  if (g) {
                    var E = et.before(e, h);
                    E && p && st.isAncestor(p[1], E.path) && (h = E);
                  }
                  if (B) {
                    var A = et.after(e, D);
                    A && v && st.isAncestor(v[1], A.path) && (D = A);
                  }
                  var F,
                    w = [];
                  for (var y of et.nodes(e, { at: o, voids: a })) {
                    var [b, x] = y;
                    (F && 0 === st.compare(x, F)) ||
                      (((!a && et.isVoid(e, b)) ||
                        (!st.isCommon(x, h.path) && !st.isCommon(x, D.path))) &&
                        (w.push(y), (F = x)));
                  }
                  var O = Array.from(w, (t) => {
                      var [, r] = t;
                      return et.pathRef(e, r);
                    }),
                    k = et.pointRef(e, h),
                    P = et.pointRef(e, D);
                  if (!m && !g) {
                    var N = k.current,
                      [S] = et.leaf(e, N),
                      { path: j } = N,
                      { offset: T } = h,
                      M = S.text.slice(T);
                    M.length > 0 &&
                      e.apply({
                        type: "remove_text",
                        path: j,
                        offset: T,
                        text: M,
                      });
                  }
                  for (var R of O) {
                    var _ = R.unref();
                    Vt.removeNodes(e, { at: _, voids: a });
                  }
                  if (!B) {
                    var L = P.current,
                      [z] = et.leaf(e, L),
                      { path: W } = L,
                      I = m ? h.offset : 0,
                      V = z.text.slice(I, D.offset);
                    V.length > 0 &&
                      e.apply({
                        type: "remove_text",
                        path: W,
                        offset: I,
                        text: V,
                      });
                  }
                  !m &&
                    C &&
                    P.current &&
                    k.current &&
                    Vt.mergeNodes(e, { at: P.current, hanging: !0, voids: a });
                  var Z = r ? k.unref() || P.unref() : P.unref() || k.unref();
                  null == t.at && Z && Vt.select(e, Z);
                }
              }
            });
          },
          insertFragment(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            et.withoutNormalizing(e, () => {
              var { hanging: n = !1, voids: u = !1 } = r,
                { at: a = e.selection } = r;
              if (t.length && a) {
                if (Ct.isRange(a))
                  if ((n || (a = et.unhangRange(e, a)), Ct.isCollapsed(a)))
                    a = a.anchor;
                  else {
                    var [, o] = Ct.edges(a);
                    if (!u && et.void(e, { at: o })) return;
                    var i = et.pointRef(e, o);
                    Vt.delete(e, { at: a }), (a = i.unref());
                  }
                else st.isPath(a) && (a = et.start(e, a));
                if (u || !et.void(e, { at: a })) {
                  var l = et.above(e, {
                    at: a,
                    match: (t) => et.isInline(e, t),
                    mode: "highest",
                    voids: u,
                  });
                  if (l) {
                    var [, s] = l;
                    if (et.isEnd(e, a, s)) a = et.after(e, s);
                    else if (et.isStart(e, a, s)) {
                      a = et.before(e, s);
                    }
                  }
                  var c = et.above(e, {
                      match: (t) => et.isBlock(e, t),
                      at: a,
                      voids: u,
                    }),
                    [, d] = c,
                    f = et.isStart(e, a, d),
                    h = et.isEnd(e, a, d),
                    D = f && h,
                    p = !f || (f && h),
                    v = !h,
                    [, C] = at.first({ children: t }, []),
                    [, m] = at.last({ children: t }, []),
                    g = [],
                    B = (t) => {
                      var [r, n] = t;
                      return (
                        !(0 === n.length) &&
                        (!!D ||
                          (!(
                            p &&
                            st.isAncestor(n, C) &&
                            Ke.isElement(r) &&
                            !e.isVoid(r) &&
                            !e.isInline(r)
                          ) &&
                            !(
                              v &&
                              st.isAncestor(n, m) &&
                              Ke.isElement(r) &&
                              !e.isVoid(r) &&
                              !e.isInline(r)
                            )))
                      );
                    };
                  for (var E of at.nodes({ children: t }, { pass: B }))
                    B(E) && g.push(E);
                  var A = [],
                    F = [],
                    w = [],
                    y = !0,
                    b = !1;
                  for (var [x] of g)
                    Ke.isElement(x) && !e.isInline(x)
                      ? ((y = !1), (b = !0), F.push(x))
                      : y
                      ? A.push(x)
                      : w.push(x);
                  var [O] = et.nodes(e, {
                      at: a,
                      match: (t) => wt.isText(t) || et.isInline(e, t),
                      mode: "highest",
                      voids: u,
                    }),
                    [, k] = O,
                    P = et.isStart(e, a, k),
                    N = et.isEnd(e, a, k),
                    S = et.pathRef(e, h ? st.next(d) : d),
                    j = et.pathRef(e, N ? st.next(k) : k),
                    T = et.pathRef(e, d);
                  Vt.splitNodes(e, {
                    at: a,
                    match: (t) =>
                      b ? et.isBlock(e, t) : wt.isText(t) || et.isInline(e, t),
                    mode: b ? "lowest" : "highest",
                    voids: u,
                  });
                  var M = et.pathRef(e, !P || (P && N) ? st.next(k) : k);
                  if (
                    (Vt.insertNodes(e, A, {
                      at: M.current,
                      match: (t) => wt.isText(t) || et.isInline(e, t),
                      mode: "highest",
                      voids: u,
                    }),
                    D && F.length && Vt.delete(e, { at: T.unref(), voids: u }),
                    Vt.insertNodes(e, F, {
                      at: S.current,
                      match: (t) => et.isBlock(e, t),
                      mode: "lowest",
                      voids: u,
                    }),
                    Vt.insertNodes(e, w, {
                      at: j.current,
                      match: (t) => wt.isText(t) || et.isInline(e, t),
                      mode: "highest",
                      voids: u,
                    }),
                    !r.at)
                  ) {
                    var R;
                    R =
                      w.length > 0
                        ? st.previous(j.current)
                        : F.length > 0
                        ? st.previous(S.current)
                        : st.previous(M.current);
                    var _ = et.end(e, R);
                    Vt.select(e, _);
                  }
                  M.unref(), S.unref(), j.unref();
                }
              }
            });
          },
          insertText(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            et.withoutNormalizing(e, () => {
              var { voids: n = !1 } = r,
                { at: u = e.selection } = r;
              if (u) {
                if ((st.isPath(u) && (u = et.range(e, u)), Ct.isRange(u)))
                  if (Ct.isCollapsed(u)) u = u.anchor;
                  else {
                    var a = Ct.end(u);
                    if (!n && et.void(e, { at: a })) return;
                    var o = Ct.start(u),
                      i = et.pointRef(e, o);
                    Vt.delete(e, { at: u, voids: n }),
                      (u = i.unref()),
                      Vt.setSelection(e, { anchor: u, focus: u });
                  }
                if (n || !et.void(e, { at: u })) {
                  var { path: l, offset: s } = u;
                  t.length > 0 &&
                    e.apply({
                      type: "insert_text",
                      path: l,
                      offset: s,
                      text: t,
                    });
                }
              }
            });
          },
        };
      function Wt(e, t) {
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
      function It(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Wt(Object(r), !0).forEach(function (t) {
                ie(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Wt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Vt = It(It(It(It({}, xt), St), Lt), zt),
        Zt = r(6907),
        qt = r.n(Zt),
        $t = r(23279),
        Ht = r.n($t),
        Ut = r(23493),
        Kt = r.n(Ut);
      function Jt(e) {
        return "object" == typeof e && null != e && 1 === e.nodeType;
      }
      function Xt(e, t) {
        return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
      }
      function Yt(e, t) {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
          var r = getComputedStyle(e, null);
          return (
            Xt(r.overflowY, t) ||
            Xt(r.overflowX, t) ||
            (function (e) {
              var t = (function (e) {
                if (!e.ownerDocument || !e.ownerDocument.defaultView)
                  return null;
                try {
                  return e.ownerDocument.defaultView.frameElement;
                } catch (e) {
                  return null;
                }
              })(e);
              return (
                !!t &&
                (t.clientHeight < e.scrollHeight ||
                  t.clientWidth < e.scrollWidth)
              );
            })(e)
          );
        }
        return !1;
      }
      function Qt(e, t, r, n, u, a, o, i) {
        return (a < e && o > t) || (a > e && o < t)
          ? 0
          : (a <= e && i <= r) || (o >= t && i >= r)
          ? a - e - n
          : (o > t && i < r) || (a < e && i > r)
          ? o - t + u
          : 0;
      }
      function Gt(e, t) {
        var r = window,
          n = t.scrollMode,
          u = t.block,
          a = t.inline,
          o = t.boundary,
          i = t.skipOverflowHiddenElements,
          l =
            "function" == typeof o
              ? o
              : function (e) {
                  return e !== o;
                };
        if (!Jt(e)) throw new TypeError("Invalid target");
        for (
          var s = document.scrollingElement || document.documentElement,
            c = [],
            d = e;
          Jt(d) && l(d);

        ) {
          if ((d = d.parentElement) === s) {
            c.push(d);
            break;
          }
          (null != d &&
            d === document.body &&
            Yt(d) &&
            !Yt(document.documentElement)) ||
            (null != d && Yt(d, i) && c.push(d));
        }
        for (
          var f = r.visualViewport ? r.visualViewport.width : innerWidth,
            h = r.visualViewport ? r.visualViewport.height : innerHeight,
            D = window.scrollX || pageXOffset,
            p = window.scrollY || pageYOffset,
            v = e.getBoundingClientRect(),
            C = v.height,
            m = v.width,
            g = v.top,
            B = v.right,
            E = v.bottom,
            A = v.left,
            F =
              "start" === u || "nearest" === u
                ? g
                : "end" === u
                ? E
                : g + C / 2,
            w = "center" === a ? A + m / 2 : "end" === a ? B : A,
            y = [],
            b = 0;
          b < c.length;
          b++
        ) {
          var x = c[b],
            O = x.getBoundingClientRect(),
            k = O.height,
            P = O.width,
            N = O.top,
            S = O.right,
            j = O.bottom,
            T = O.left;
          if (
            "if-needed" === n &&
            g >= 0 &&
            A >= 0 &&
            E <= h &&
            B <= f &&
            g >= N &&
            E <= j &&
            A >= T &&
            B <= S
          )
            return y;
          var M = getComputedStyle(x),
            R = parseInt(M.borderLeftWidth, 10),
            _ = parseInt(M.borderTopWidth, 10),
            L = parseInt(M.borderRightWidth, 10),
            z = parseInt(M.borderBottomWidth, 10),
            W = 0,
            I = 0,
            V = "offsetWidth" in x ? x.offsetWidth - x.clientWidth - R - L : 0,
            Z =
              "offsetHeight" in x ? x.offsetHeight - x.clientHeight - _ - z : 0;
          if (s === x)
            (W =
              "start" === u
                ? F
                : "end" === u
                ? F - h
                : "nearest" === u
                ? Qt(p, p + h, h, _, z, p + F, p + F + C, C)
                : F - h / 2),
              (I =
                "start" === a
                  ? w
                  : "center" === a
                  ? w - f / 2
                  : "end" === a
                  ? w - f
                  : Qt(D, D + f, f, R, L, D + w, D + w + m, m)),
              (W = Math.max(0, W + p)),
              (I = Math.max(0, I + D));
          else {
            (W =
              "start" === u
                ? F - N - _
                : "end" === u
                ? F - j + z + Z
                : "nearest" === u
                ? Qt(N, j, k, _, z + Z, F, F + C, C)
                : F - (N + k / 2) + Z / 2),
              (I =
                "start" === a
                  ? w - T - R
                  : "center" === a
                  ? w - (T + P / 2) + V / 2
                  : "end" === a
                  ? w - S + L + V
                  : Qt(T, S, P, R, L + V, w, w + m, m));
            var q = x.scrollLeft,
              $ = x.scrollTop;
            (F +=
              $ - (W = Math.max(0, Math.min($ + W, x.scrollHeight - k + Z)))),
              (w +=
                q - (I = Math.max(0, Math.min(q + I, x.scrollWidth - P + V))));
          }
          y.push({ el: x, top: W, left: I });
        }
        return y;
      }
      function er(e) {
        return e === Object(e) && 0 !== Object.keys(e).length;
      }
      const tr = function (e, t) {
        var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
        if (er(t) && "function" == typeof t.behavior)
          return t.behavior(r ? Gt(e, t) : []);
        if (r) {
          var n = (function (e) {
            return !1 === e
              ? { block: "end", inline: "nearest" }
              : er(e)
              ? e
              : { block: "start", inline: "nearest" };
          })(t);
          return (function (e, t) {
            void 0 === t && (t = "auto");
            var r = "scrollBehavior" in document.body.style;
            e.forEach(function (e) {
              var n = e.el,
                u = e.top,
                a = e.left;
              n.scroll && r
                ? n.scroll({ top: u, left: a, behavior: t })
                : ((n.scrollTop = u), (n.scrollLeft = a));
            });
          })(Gt(e, n), n.behavior);
        }
      };
      var rr = r(59619),
        nr = r(73935);
      function ur(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function ar(e, t) {
        if (null == e) return {};
        var r,
          n,
          u = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              u = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (u[r] = e[r]);
            return u;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (u[r] = e[r]));
        }
        return u;
      }
      var or =
          "undefined" != typeof navigator &&
          "undefined" != typeof window &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !window.MSStream,
        ir =
          "undefined" != typeof navigator &&
          /Mac OS X/.test(navigator.userAgent),
        lr =
          "undefined" != typeof navigator &&
          /Android/.test(navigator.userAgent),
        sr =
          "undefined" != typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
        cr =
          "undefined" != typeof navigator &&
          /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
        dr =
          "undefined" != typeof navigator &&
          /Edge?\/(?:[0-6][0-9]|[0-7][0-8])/i.test(navigator.userAgent),
        fr =
          "undefined" != typeof navigator &&
          /Chrome/i.test(navigator.userAgent),
        hr =
          "undefined" != typeof navigator &&
          /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])/i.test(navigator.userAgent),
        Dr =
          "undefined" != typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])).*/i.test(
            navigator.userAgent
          ),
        pr =
          "undefined" != typeof navigator &&
          /.*QQBrowser/.test(navigator.userAgent),
        vr =
          "undefined" != typeof navigator &&
          /.*UCBrowser/.test(navigator.userAgent),
        Cr =
          "undefined" != typeof navigator &&
          /.*Wechat/.test(navigator.userAgent),
        mr = !(
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        gr =
          !hr &&
          !dr &&
          "undefined" != typeof globalThis &&
          globalThis.InputEvent &&
          "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
        Br = mr ? n.useLayoutEffect : n.useEffect,
        Er = (e) => {
          var { isLast: t, leaf: r, parent: u, text: a } = e,
            o = en(),
            i = Zn.findPath(o, a),
            l = st.parent(i);
          return o.isVoid(u)
            ? n.createElement(Fr, { length: at.string(u).length })
            : "" !== r.text ||
              u.children[u.children.length - 1] !== a ||
              o.isInline(u) ||
              "" !== et.string(o, l)
            ? "" === r.text
              ? n.createElement(Fr, null)
              : t && "\n" === r.text.slice(-1)
              ? n.createElement(Ar, { isTrailing: !0, text: r.text })
              : n.createElement(Ar, { text: r.text })
            : n.createElement(Fr, { isLineBreak: !0 });
        },
        Ar = (e) => {
          var { text: t, isTrailing: r = !1 } = e,
            u = (0, n.useRef)(null),
            a = () => "".concat(null != t ? t : "").concat(r ? "\n" : "");
          return (
            Br(() => {
              var e = a();
              u.current &&
                u.current.textContent !== e &&
                (u.current.textContent = e);
            }),
            u.current
              ? n.createElement("span", { "data-slate-string": !0, ref: u })
              : n.createElement(
                  "span",
                  { "data-slate-string": !0, ref: u },
                  a()
                )
          );
        },
        Fr = (e) => {
          var { length: t = 0, isLineBreak: r = !1 } = e;
          return n.createElement(
            "span",
            { "data-slate-zero-width": r ? "n" : "z", "data-slate-length": t },
            "\ufeff",
            r ? n.createElement("br", null) : null
          );
        },
        wr = new WeakMap(),
        yr = new WeakMap(),
        br = new WeakMap(),
        xr = new WeakMap(),
        Or = new WeakMap(),
        kr = new WeakMap(),
        Pr = new WeakMap(),
        Nr = new WeakMap(),
        Sr = new WeakMap(),
        jr = new WeakMap(),
        Tr = new WeakMap(),
        Mr = new WeakMap(),
        Rr = new WeakMap(),
        _r = new WeakMap(),
        Lr = new WeakMap(),
        zr = Symbol("placeholder"),
        Wr = (e) => {
          var {
              leaf: t,
              isLast: r,
              text: u,
              parent: a,
              renderPlaceholder: o,
              renderLeaf: i = (e) => n.createElement(Vr, Object.assign({}, e)),
            } = e,
            l = (0, n.useRef)(null);
          (0, n.useEffect)(() => {
            var e = null == l ? void 0 : l.current,
              t = document.querySelector('[data-slate-editor="true"]');
            if (e && t)
              return (
                (t.style.minHeight = "".concat(e.clientHeight, "px")),
                () => {
                  t.style.minHeight = "auto";
                }
              );
          }, [l, t]);
          var s = n.createElement(Er, {
            isLast: r,
            leaf: t,
            parent: a,
            text: u,
          });
          if (t[zr]) {
            var c = {
              children: t.placeholder,
              attributes: {
                "data-slate-placeholder": !0,
                style: {
                  position: "absolute",
                  pointerEvents: "none",
                  width: "100%",
                  maxWidth: "100%",
                  display: "block",
                  opacity: "0.333",
                  userSelect: "none",
                  textDecoration: "none",
                },
                contentEditable: !1,
                ref: l,
              },
            };
            s = n.createElement(n.Fragment, null, o(c), s);
          }
          return i({
            attributes: { "data-slate-leaf": !0 },
            children: s,
            leaf: t,
            text: u,
          });
        },
        Ir = n.memo(
          Wr,
          (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            wt.equals(t.leaf, e.leaf) &&
            t.leaf[zr] === e.leaf[zr]
        ),
        Vr = (e) => {
          var { attributes: t, children: r } = e;
          return n.createElement("span", Object.assign({}, t), r);
        },
        Zr = ["anchor", "focus"],
        qr = ["anchor", "focus"],
        $r = (e, t) =>
          Object.keys(e).length === Object.keys(t).length &&
          Object.keys(e).every((r) => t.hasOwnProperty(r) && e[r] === t[r]),
        Hr = (e, t) => {
          if (e.length !== t.length) return !1;
          for (var r = 0; r < e.length; r++) {
            var n = e[r],
              u = t[r],
              a = ar(n, Zr),
              o = ar(u, qr);
            if (!Ct.equals(n, u) || n[zr] !== u[zr] || !$r(a, o)) return !1;
          }
          return !0;
        };
      function Ur(e) {
        var t = (0, n.useRef)(0),
          r = (0, n.useRef)(null),
          [, u] = (0, n.useState)(0);
        return (
          (0, n.useEffect)(
            () => (
              Lr.set(e, () => {
                r.current ||
                  ((r.current = requestAnimationFrame(() => {
                    u((e) => e + 1), (r.current = null);
                  })),
                  t.current++);
              }),
              () => {
                Lr.delete(e);
              }
            ),
            [e]
          ),
          r.current && (cancelAnimationFrame(r.current), (r.current = null)),
          t.current
        );
      }
      var Kr = (e) => {
          for (
            var {
                decorations: t,
                isLast: r,
                parent: u,
                renderPlaceholder: a,
                renderLeaf: o,
                text: i,
              } = e,
              l = en(),
              s = (0, n.useRef)(null),
              c = wt.decorations(i, t),
              d = Zn.findKey(l, i),
              f = [],
              h = 0;
            h < c.length;
            h++
          ) {
            var D = c[h];
            f.push(
              n.createElement(Ir, {
                isLast: r && h === c.length - 1,
                key: "".concat(d.id, "-").concat(h),
                renderPlaceholder: a,
                leaf: D,
                text: i,
                parent: u,
                renderLeaf: o,
              })
            );
          }
          Br(() => {
            var e = Nr.get(l);
            s.current
              ? (null == e || e.set(d, s.current),
                kr.set(i, s.current),
                Or.set(s.current, i))
              : (null == e || e.delete(d), kr.delete(i));
          });
          var p = lr ? Ur(i) : void 0;
          return n.createElement(
            "span",
            { "data-slate-node": "text", ref: s, key: p },
            f
          );
        },
        Jr = n.memo(
          Kr,
          (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.text === e.text &&
            Hr(t.decorations, e.decorations)
        ),
        Xr = (e) => {
          var {
              decorations: t,
              element: r,
              renderElement: u = (e) =>
                n.createElement(Qr, Object.assign({}, e)),
              renderPlaceholder: a,
              renderLeaf: o,
              selection: i,
            } = e,
            l = (0, n.useRef)(null),
            s = en(),
            c = fn(),
            d = s.isInline(r),
            f = Zn.findKey(s, r),
            h = un({
              decorations: t,
              node: r,
              renderElement: u,
              renderPlaceholder: a,
              renderLeaf: o,
              selection: i,
            }),
            D = { "data-slate-node": "element", ref: l };
          if ((d && (D["data-slate-inline"] = !0), !d && et.hasInlines(s, r))) {
            var p = at.string(r),
              v = qt()(p);
            "rtl" === v && (D.dir = v);
          }
          if (et.isVoid(s, r)) {
            (D["data-slate-void"] = !0), !c && d && (D.contentEditable = !1);
            var C = d ? "span" : "div",
              [[m]] = at.texts(r);
            (h = c
              ? null
              : n.createElement(
                  C,
                  {
                    "data-slate-spacer": !0,
                    style: {
                      height: "0",
                      color: "transparent",
                      outline: "none",
                      position: "absolute",
                    },
                  },
                  n.createElement(Jr, {
                    renderPlaceholder: a,
                    decorations: [],
                    isLast: !1,
                    parent: r,
                    text: m,
                  })
                )),
              wr.set(m, 0),
              yr.set(m, r);
          }
          Br(() => {
            var e = Nr.get(s);
            l.current
              ? (null == e || e.set(f, l.current),
                kr.set(r, l.current),
                Or.set(l.current, r))
              : (null == e || e.delete(f), kr.delete(r));
          });
          var g = u({ attributes: D, children: h, element: r });
          if (lr) {
            var B = Ur(r);
            return n.createElement(n.Fragment, { key: B }, g);
          }
          return g;
        },
        Yr = n.memo(
          Xr,
          (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            Hr(e.decorations, t.decorations) &&
            (e.selection === t.selection ||
              (!!e.selection &&
                !!t.selection &&
                Ct.equals(e.selection, t.selection)))
        ),
        Qr = (e) => {
          var { attributes: t, children: r, element: u } = e,
            a = en().isInline(u) ? "span" : "div";
          return n.createElement(
            a,
            Object.assign({}, t, { style: { position: "relative" } }),
            r
          );
        },
        Gr = (0, n.createContext)(null),
        en = () => {
          var e = (0, n.useContext)(Gr);
          if (!e)
            throw new Error(
              "The `useSlateStatic` hook must be used inside the <Slate> component's context."
            );
          return e;
        },
        tn = (0, n.createContext)(() => []),
        rn = (0, n.createContext)(!1),
        nn = () => (0, n.useContext)(rn),
        un = (e) => {
          for (
            var {
                decorations: t,
                node: r,
                renderElement: u,
                renderPlaceholder: a,
                renderLeaf: o,
                selection: i,
              } = e,
              l = (0, n.useContext)(tn),
              s = en(),
              c = Zn.findPath(s, r),
              d = [],
              f = Ke.isElement(r) && !s.isInline(r) && et.hasInlines(s, r),
              h = 0;
            h < r.children.length;
            h++
          ) {
            var D = c.concat(h),
              p = r.children[h],
              v = Zn.findKey(s, p),
              C = et.range(s, D),
              m = i && Ct.intersection(C, i),
              g = l([p, D]);
            for (var B of t) {
              var E = Ct.intersection(B, C);
              E && g.push(E);
            }
            Ke.isElement(p)
              ? d.push(
                  n.createElement(
                    rn.Provider,
                    { key: "provider-".concat(v.id), value: !!m },
                    n.createElement(Yr, {
                      decorations: g,
                      element: p,
                      key: v.id,
                      renderElement: u,
                      renderPlaceholder: a,
                      renderLeaf: o,
                      selection: m,
                    })
                  )
                )
              : d.push(
                  n.createElement(Jr, {
                    decorations: g,
                    key: v.id,
                    isLast: f && h === r.children.length - 1,
                    parent: r,
                    renderPlaceholder: a,
                    renderLeaf: o,
                    text: p,
                  })
                ),
              wr.set(p, h),
              yr.set(p, r);
          }
          return d;
        },
        an = {
          bold: "mod+b",
          compose: ["down", "left", "right", "up", "backspace", "enter"],
          moveBackward: "left",
          moveForward: "right",
          moveWordBackward: "ctrl+left",
          moveWordForward: "ctrl+right",
          deleteBackward: "shift?+backspace",
          deleteForward: "shift?+delete",
          extendBackward: "shift+left",
          extendForward: "shift+right",
          italic: "mod+i",
          splitBlock: "shift?+enter",
          undo: "mod+z",
        },
        on = {
          moveLineBackward: "opt+up",
          moveLineForward: "opt+down",
          moveWordBackward: "opt+left",
          moveWordForward: "opt+right",
          deleteBackward: ["ctrl+backspace", "ctrl+h"],
          deleteForward: ["ctrl+delete", "ctrl+d"],
          deleteLineBackward: "cmd+shift?+backspace",
          deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
          deleteWordBackward: "opt+shift?+backspace",
          deleteWordForward: "opt+shift?+delete",
          extendLineBackward: "opt+shift+up",
          extendLineForward: "opt+shift+down",
          redo: "cmd+shift+z",
          transposeCharacter: "ctrl+t",
        },
        ln = {
          deleteWordBackward: "ctrl+shift?+backspace",
          deleteWordForward: "ctrl+shift?+delete",
          redo: ["ctrl+y", "ctrl+shift+z"],
        },
        sn = (e) => {
          var t = an[e],
            r = on[e],
            n = ln[e],
            u = t && (0, rr.TB)(t),
            a = r && (0, rr.TB)(r),
            o = n && (0, rr.TB)(n);
          return (e) =>
            !(!u || !u(e)) || !!(ir && a && a(e)) || !(ir || !o || !o(e));
        },
        cn = {
          isBold: sn("bold"),
          isCompose: sn("compose"),
          isMoveBackward: sn("moveBackward"),
          isMoveForward: sn("moveForward"),
          isDeleteBackward: sn("deleteBackward"),
          isDeleteForward: sn("deleteForward"),
          isDeleteLineBackward: sn("deleteLineBackward"),
          isDeleteLineForward: sn("deleteLineForward"),
          isDeleteWordBackward: sn("deleteWordBackward"),
          isDeleteWordForward: sn("deleteWordForward"),
          isExtendBackward: sn("extendBackward"),
          isExtendForward: sn("extendForward"),
          isExtendLineBackward: sn("extendLineBackward"),
          isExtendLineForward: sn("extendLineForward"),
          isItalic: sn("italic"),
          isMoveLineBackward: sn("moveLineBackward"),
          isMoveLineForward: sn("moveLineForward"),
          isMoveWordBackward: sn("moveWordBackward"),
          isMoveWordForward: sn("moveWordForward"),
          isRedo: sn("redo"),
          isSplitBlock: sn("splitBlock"),
          isTransposeCharacter: sn("transposeCharacter"),
          isUndo: sn("undo"),
        },
        dn = (0, n.createContext)(!1),
        fn = () => (0, n.useContext)(dn),
        hn = (0, n.createContext)(null),
        Dn = () => {
          var e = (0, n.useContext)(hn);
          if (!e)
            throw new Error(
              "The `useSlate` hook must be used inside the <Slate> component's context."
            );
          var [t] = e;
          return t;
        },
        pn = (e) =>
          (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
        vn = (e) => Cn(e) && 1 === e.nodeType,
        Cn = (e) => {
          var t = pn(e);
          return !!t && e instanceof t.Node;
        },
        mn = (e) => {
          var t = e && e.anchorNode && pn(e.anchorNode);
          return !!t && e instanceof t.Selection;
        },
        gn = (e) => Cn(e) && 3 === e.nodeType,
        Bn = (e, t, r) => {
          for (
            var n, { childNodes: u } = e, a = u[t], o = t, i = !1, l = !1;
            ((Cn((n = a)) && 8 === n.nodeType) ||
              (vn(a) && 0 === a.childNodes.length) ||
              (vn(a) && "false" === a.getAttribute("contenteditable"))) &&
            (!i || !l);

          )
            o >= u.length
              ? ((i = !0), (o = t - 1), (r = "backward"))
              : o < 0
              ? ((l = !0), (o = t + 1), (r = "forward"))
              : ((a = u[o]), (t = o), (o += "forward" === r ? 1 : -1));
          return [a, t];
        },
        En = (e, t, r) => {
          var [n] = Bn(e, t, r);
          return n;
        },
        An = (e) => {
          var t = "";
          if (gn(e) && e.nodeValue) return e.nodeValue;
          if (vn(e)) {
            for (var r of Array.from(e.childNodes)) t += An(r);
            var n = getComputedStyle(e).getPropertyValue("display");
            ("block" !== n && "list" !== n && "BR" !== e.tagName) ||
              (t += "\n");
          }
          return t;
        },
        Fn = /data-slate-fragment="(.+?)"/m,
        wn = (e) => {
          var t = e.getData("text/html"),
            [, r] = t.match(Fn) || [];
          return r;
        },
        yn = [
          "autoFocus",
          "decorate",
          "onDOMBeforeInput",
          "placeholder",
          "readOnly",
          "renderElement",
          "renderLeaf",
          "renderPlaceholder",
          "scrollSelectionIntoView",
          "style",
          "as",
        ];
      function bn(e, t) {
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
      function xn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? bn(Object(r), !0).forEach(function (t) {
                ur(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : bn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var On = (e) => n.createElement(n.Fragment, null, un(e)),
        kn = (e) => {
          var { attributes: t, children: r } = e;
          return n.createElement("span", Object.assign({}, t), r);
        },
        Pn = () => [],
        Nn = (e, t) => {
          if (!e.selection || (e.selection && Ct.isCollapsed(e.selection))) {
            var r = t.startContainer.parentElement;
            (r.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
              tr(r, { scrollMode: "if-needed" }),
              delete r.getBoundingClientRect;
          }
        },
        Sn = (e, t) => Cn(t) && Zn.hasDOMNode(e, t),
        jn = (e, t) => Cn(t) && Zn.hasDOMNode(e, t, { editable: !0 }),
        Tn = (e, t) => {
          if (Sr.get(e)) return !1;
          var r = Sn(e, t) && Zn.toSlateNode(e, t);
          return et.isVoid(e, r);
        },
        Mn = (e, t) => {
          if (!t) return !1;
          var r = t(e);
          return null != r
            ? r
            : e.isDefaultPrevented() || e.isPropagationStopped();
        },
        Rn = (e, t) => {
          if (!t) return !1;
          var r = t(e);
          return null != r ? r : e.defaultPrevented;
        };
      function _n(e, t) {
        if (e === t) return null;
        var r = (function (e, t) {
          for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
            if (e.charAt(n) !== t.charAt(n)) return n;
          return e.length !== t.length ? r : null;
        })(e, t);
        if (null === r) return null;
        var n = (function (e, t, r) {
          for (
            var n = e.length, u = t.length, a = Math.min(n, u, r), o = 0;
            o < a;
            o++
          )
            if (e.charAt(n - o - 1) !== t.charAt(u - o - 1)) return o;
          return e.length !== t.length ? a : null;
        })(e, t, Math.min(e.length - r, t.length - r));
        return null === n ? null : { start: r, end: n };
      }
      function Ln(e, t) {
        return e.slice(t.start, e.length - t.end);
      }
      function zn(e, t) {
        var r = Zn.toSlateNode(e, t);
        if (wt.isText(r)) {
          var n = r.text,
            u = t.textContent;
          if ((u.endsWith("\n") && (u = u.slice(0, u.length - 1)), u !== n)) {
            var a = (function (e, t) {
              if (void 0 === e || void 0 === t) return null;
              var r = _n(e, t);
              if (null == r) return null;
              var n = Ln(t, r),
                u = Ln(e, r);
              return {
                start: r.start,
                end: e.length - r.end,
                insertText: n,
                removeText: u,
              };
            })(n, u);
            if (null !== a) return { text: a, path: Zn.findPath(e, r) };
          }
        }
      }
      function Wn(e, t, r) {
        var { path: n, text: u } = r,
          a = {
            anchor: { path: n, offset: u.start },
            focus: { path: n, offset: u.end },
          };
        if (!t || !Ct.isCollapsed(t)) return a;
        var { insertText: o, removeText: i } = u;
        if ((1 === o.length || 1 === i.length) && st.equals(t.anchor.path, n)) {
          var [l] = Array.from(et.nodes(e, { at: t, match: wt.isText }));
          if (l) {
            var [s] = l,
              { anchor: c } = t,
              d = s.text[c.offset - 1],
              f = s.text[c.offset];
            if (1 === o.length && o === f) return t;
            if (1 === i.length && i === d)
              return {
                anchor: { path: n, offset: c.offset - 1 },
                focus: { path: n, offset: c.offset },
              };
          }
        }
        return a;
      }
      var In = 0;
      class Vn {
        constructor() {
          this.id = "".concat(In++);
        }
      }
      var Zn = {
        getWindow(e) {
          var t = br.get(e);
          if (!t)
            throw new Error(
              "Unable to find a host window element for this editor"
            );
          return t;
        },
        findKey(e, t) {
          var r = Pr.get(t);
          return r || ((r = new Vn()), Pr.set(t, r)), r;
        },
        findPath(e, t) {
          for (var r = [], n = t; ; ) {
            var u = yr.get(n);
            if (null == u) {
              if (et.isEditor(n)) return r;
              break;
            }
            var a = wr.get(n);
            if (null == a) break;
            r.unshift(a), (n = u);
          }
          throw new Error(
            "Unable to find the path for Slate node: ".concat(JSON.stringify(t))
          );
        },
        findDocumentOrShadowRoot(e) {
          var t = Zn.toDOMNode(e, e),
            r = t.getRootNode();
          return (r instanceof Document || r instanceof ShadowRoot) &&
            null != r.getSelection
            ? r
            : t.ownerDocument;
        },
        isFocused: (e) => !!jr.get(e),
        isReadOnly: (e) => !!Sr.get(e),
        blur(e) {
          var t = Zn.toDOMNode(e, e),
            r = Zn.findDocumentOrShadowRoot(e);
          jr.set(e, !1), r.activeElement === t && t.blur();
        },
        focus(e) {
          var t = Zn.toDOMNode(e, e),
            r = Zn.findDocumentOrShadowRoot(e);
          jr.set(e, !0),
            r.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
          Zn.toDOMNode(e, e);
          var { selection: t } = e,
            r = Zn.findDocumentOrShadowRoot(e).getSelection();
          r && r.rangeCount > 0 && r.removeAllRanges(), t && Vt.deselect(e);
        },
        hasDOMNode(e, t) {
          var r,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { editable: u = !1 } = n,
            a = Zn.toDOMNode(e, e);
          try {
            r = vn(t) ? t : t.parentElement;
          } catch (e) {
            if (
              !e.message.includes(
                'Permission denied to access property "nodeType"'
              )
            )
              throw e;
          }
          return (
            !!r &&
            !(
              r.closest("[data-slate-editor]") !== a ||
              (u &&
                !r.isContentEditable &&
                ("boolean" != typeof r.isContentEditable ||
                  r.closest('[contenteditable="false"]') !== a) &&
                !r.getAttribute("data-slate-zero-width"))
            )
          );
        },
        insertData(e, t) {
          e.insertData(t);
        },
        insertFragmentData: (e, t) => e.insertFragmentData(t),
        insertTextData: (e, t) => e.insertTextData(t),
        setFragmentData(e, t, r) {
          e.setFragmentData(t, r);
        },
        toDOMNode(e, t) {
          var r = Nr.get(e),
            n = et.isEditor(t)
              ? xr.get(e)
              : null == r
              ? void 0
              : r.get(Zn.findKey(e, t));
          if (!n)
            throw new Error(
              "Cannot resolve a DOM node from Slate node: ".concat(
                JSON.stringify(t)
              )
            );
          return n;
        },
        toDOMPoint(e, t) {
          var r,
            [n] = et.node(e, t.path),
            u = Zn.toDOMNode(e, n);
          et.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
          var a = Array.from(
              u.querySelectorAll("[data-slate-string], [data-slate-zero-width]")
            ),
            o = 0;
          for (var i of a) {
            var l = i.childNodes[0];
            if (null != l && null != l.textContent) {
              var { length: s } = l.textContent,
                c = i.getAttribute("data-slate-length"),
                d = o + (null == c ? s : parseInt(c, 10));
              if (t.offset <= d) {
                r = [l, Math.min(s, Math.max(0, t.offset - o))];
                break;
              }
              o = d;
            }
          }
          if (!r)
            throw new Error(
              "Cannot resolve a DOM point from Slate point: ".concat(
                JSON.stringify(t)
              )
            );
          return r;
        },
        toDOMRange(e, t) {
          var { anchor: r, focus: n } = t,
            u = Ct.isBackward(t),
            a = Zn.toDOMPoint(e, r),
            o = Ct.isCollapsed(t) ? a : Zn.toDOMPoint(e, n),
            i = Zn.getWindow(e).document.createRange(),
            [l, s] = u ? o : a,
            [c, d] = u ? a : o,
            f = !!(vn(l) ? l : l.parentElement).getAttribute(
              "data-slate-zero-width"
            ),
            h = !!(vn(c) ? c : c.parentElement).getAttribute(
              "data-slate-zero-width"
            );
          return i.setStart(l, f ? 1 : s), i.setEnd(c, h ? 1 : d), i;
        },
        toSlateNode(e, t) {
          var r = vn(t) ? t : t.parentElement;
          r &&
            !r.hasAttribute("data-slate-node") &&
            (r = r.closest("[data-slate-node]"));
          var n = r ? Or.get(r) : null;
          if (!n)
            throw new Error(
              "Cannot resolve a Slate node from DOM node: ".concat(r)
            );
          return n;
        },
        findEventRange(e, t) {
          "nativeEvent" in t && (t = t.nativeEvent);
          var { clientX: r, clientY: n, target: u } = t;
          if (null == r || null == n)
            throw new Error(
              "Cannot resolve a Slate range from a DOM event: ".concat(t)
            );
          var a,
            o = Zn.toSlateNode(e, t.target),
            i = Zn.findPath(e, o);
          if (et.isVoid(e, o)) {
            var l = u.getBoundingClientRect(),
              s = e.isInline(o)
                ? r - l.left < l.left + l.width - r
                : n - l.top < l.top + l.height - n,
              c = et.point(e, i, { edge: s ? "start" : "end" }),
              d = s ? et.before(e, c) : et.after(e, c);
            if (d) return et.range(e, d);
          }
          var { document: f } = Zn.getWindow(e);
          if (f.caretRangeFromPoint) a = f.caretRangeFromPoint(r, n);
          else {
            var h = f.caretPositionFromPoint(r, n);
            h &&
              ((a = f.createRange()).setStart(h.offsetNode, h.offset),
              a.setEnd(h.offsetNode, h.offset));
          }
          if (!a)
            throw new Error(
              "Cannot resolve a Slate range from a DOM event: ".concat(t)
            );
          return Zn.toSlateRange(e, a, { exactMatch: !1, suppressThrow: !1 });
        },
        toSlatePoint(e, t, r) {
          var { exactMatch: n, suppressThrow: u } = r,
            [a, o] = n
              ? t
              : ((e) => {
                  var [t, r] = e;
                  if (vn(t) && t.childNodes.length) {
                    var n = r === t.childNodes.length,
                      u = n ? r - 1 : r;
                    for (
                      [t, u] = Bn(t, u, n ? "backward" : "forward"), n = u < r;
                      vn(t) && t.childNodes.length;

                    ) {
                      var a = n ? t.childNodes.length - 1 : 0;
                      t = En(t, a, n ? "backward" : "forward");
                    }
                    r = n && null != t.textContent ? t.textContent.length : 0;
                  }
                  return [t, r];
                })(t),
            i = a.parentNode,
            l = null,
            s = 0;
          if (i) {
            var c,
              d = i.closest('[data-slate-void="true"]'),
              f = i.closest("[data-slate-leaf]"),
              h = null;
            if (f) {
              if ((l = f.closest('[data-slate-node="text"]'))) {
                var D = Zn.getWindow(e).document.createRange();
                D.setStart(l, 0), D.setEnd(a, o);
                var p = D.cloneContents();
                [
                  ...Array.prototype.slice.call(
                    p.querySelectorAll("[data-slate-zero-width]")
                  ),
                  ...Array.prototype.slice.call(
                    p.querySelectorAll("[contenteditable=false]")
                  ),
                ].forEach((e) => {
                  e.parentNode.removeChild(e);
                }),
                  (s = p.textContent.length),
                  (h = l);
              }
            } else
              d &&
                ((f = d.querySelector("[data-slate-leaf]"))
                  ? ((l = f.closest('[data-slate-node="text"]')),
                    (s = (h = f).textContent.length),
                    h
                      .querySelectorAll("[data-slate-zero-width]")
                      .forEach((e) => {
                        s -= e.textContent.length;
                      }))
                  : (s = 1));
            h &&
              s === h.textContent.length &&
              (i.hasAttribute("data-slate-zero-width") ||
                (sr &&
                  null !== (c = h.textContent) &&
                  void 0 !== c &&
                  c.endsWith("\n\n"))) &&
              s--;
          }
          if (!l) {
            if (u) return null;
            throw new Error(
              "Cannot resolve a Slate point from DOM point: ".concat(t)
            );
          }
          var v = Zn.toSlateNode(e, l);
          return { path: Zn.findPath(e, v), offset: s };
        },
        toSlateRange(e, t, r) {
          var n,
            u,
            a,
            o,
            i,
            { exactMatch: l, suppressThrow: s } = r;
          if (
            ((mn(t) ? t.anchorNode : t.startContainer) &&
              (mn(t)
                ? ((n = t.anchorNode),
                  (u = t.anchorOffset),
                  (a = t.focusNode),
                  (o = t.focusOffset),
                  (i =
                    fr &&
                    window.document.activeElement &&
                    window.document.activeElement.shadowRoot
                      ? t.anchorNode === t.focusNode &&
                        t.anchorOffset === t.focusOffset
                      : t.isCollapsed))
                : ((n = t.startContainer),
                  (u = t.startOffset),
                  (a = t.endContainer),
                  (o = t.endOffset),
                  (i = t.collapsed))),
            null == n || null == a || null == u || null == o)
          )
            throw new Error(
              "Cannot resolve a Slate range from DOM range: ".concat(t)
            );
          var c = Zn.toSlatePoint(e, [n, u], {
            exactMatch: l,
            suppressThrow: s,
          });
          if (!c) return null;
          var d = i
            ? c
            : Zn.toSlatePoint(e, [a, o], { exactMatch: l, suppressThrow: s });
          if (!d) return null;
          var f = { anchor: c, focus: d };
          return (
            Ct.isExpanded(f) &&
              Ct.isForward(f) &&
              vn(a) &&
              et.void(e, { at: f.focus, mode: "highest" }) &&
              (f = et.unhangRange(e, f, { voids: !0 })),
            f
          );
        },
        hasRange(e, t) {
          var { anchor: r, focus: n } = t;
          return et.hasPath(e, r.path) && et.hasPath(e, n.path);
        },
      };
      class qn {
        constructor(e, t) {
          (this.editor = e),
            (this.restoreDOM = t),
            (this.flush = (e) => {
              try {
                this.reconcileMutations(e);
              } catch (e) {
                console.error(e), this.restoreDOM();
              }
            }),
            (this.reconcileMutations = (e) => {
              var t = (function (e, t) {
                  var r = [],
                    n = [],
                    u = [],
                    a = [];
                  return (
                    t.forEach((t) => {
                      switch (t.type) {
                        case "childList":
                          t.addedNodes.length &&
                            t.addedNodes.forEach((e) => {
                              r.push(e);
                            }),
                            t.removedNodes.forEach((e) => {
                              n.push(e);
                            });
                          break;
                        case "characterData":
                          a.push(t);
                          var { parentNode: o } = t.target;
                          if (!o) return;
                          var i = zn(e, o);
                          if (!i) return;
                          if (
                            u.some((e) => {
                              var { path: t } = e;
                              return st.equals(t, i.path);
                            })
                          )
                            return;
                          u.push(i);
                      }
                    }),
                    {
                      addedNodes: r,
                      removedNodes: n,
                      insertedText: u,
                      characterDataMutations: a,
                    }
                  );
                })(this.editor, e),
                { insertedText: r, removedNodes: n } = t;
              if (
                ((e, t) => {
                  var { selection: r } = e,
                    { removedNodes: n } = t;
                  return !!r && Ct.isExpanded(r) && n.length > 0;
                })(this.editor, t)
              ) {
                var u = (function (e) {
                  return e.reduce((e, t) => {
                    var { text: r } = t;
                    return "".concat(e).concat(r.insertText);
                  }, "");
                })(r);
                this.replaceExpandedSelection(u);
              } else
                ((e, t) => {
                  var { addedNodes: r } = t,
                    { selection: n } = e,
                    u = n ? at.parent(e, n.anchor.path) : null,
                    a = u ? Zn.toDOMNode(e, u) : null;
                  return (
                    !!a &&
                    r.some(
                      (e) =>
                        e instanceof HTMLElement &&
                        e.tagName === (null == a ? void 0 : a.tagName)
                    )
                  );
                })(this.editor, t)
                  ? this.insertBreak()
                  : ((e, t) => {
                      var {
                        addedNodes: r,
                        characterDataMutations: n,
                        removedNodes: u,
                      } = t;
                      return u.length > 0 && 0 === r.length && n.length > 0;
                    })(this.editor, t)
                  ? this.removeLeafNodes(n)
                  : ((e, t) => {
                      var { removedNodes: r } = t;
                      return r.length > 0;
                    })(this.editor, t)
                  ? this.deleteBackward()
                  : ((e, t) => {
                      var { insertedText: r } = t;
                      return r.length > 0;
                    })(this.editor, t) && this.insertText(r);
            }),
            (this.insertText = (e) => {
              var { selection: t } = this.editor;
              if (Tr.get(this.editor) || Mr.get(this.editor))
                return Rr.set(this.editor, e), void Mr.set(this.editor, !1);
              e.forEach((e) => {
                var r = e.text.insertText,
                  n = Wn(this.editor, t, e);
                Vt.setSelection(this.editor, n), et.insertText(this.editor, r);
              });
            }),
            (this.insertBreak = () => {
              var { selection: e } = this.editor;
              et.insertBreak(this.editor),
                this.restoreDOM(),
                e &&
                  setTimeout(() => {
                    this.editor.selection &&
                      Ct.equals(e, this.editor.selection) &&
                      Vt.move(this.editor);
                  }, 100);
            }),
            (this.replaceExpandedSelection = (e) => {
              et.deleteFragment(this.editor),
                e.length && et.insertText(this.editor, e),
                this.restoreDOM();
            }),
            (this.deleteBackward = () => {
              et.deleteBackward(this.editor),
                Zn.focus(this.editor),
                this.restoreDOM();
            }),
            (this.removeLeafNodes = (e) => {
              for (var t of e) {
                var r = Zn.toSlateNode(this.editor, t);
                if (r) {
                  var n = Zn.findPath(this.editor, r);
                  Vt.delete(this.editor, { at: n }), this.restoreDOM();
                }
              }
            }),
            (this.editor = e),
            (this.restoreDOM = t);
        }
      }
      function $n(e, t, r) {
        var [u] = (0, n.useState)(() => new MutationObserver(t));
        Br(() => {
          u.disconnect();
        }),
          (0, n.useEffect)(() => {
            if (!e.current)
              throw new Error(
                "Failed to attach MutationObserver, `node` is undefined"
              );
            return u.observe(e.current, r), u.disconnect.bind(u);
          });
      }
      var Hn = { childList: !0, characterData: !0, subtree: !0 };
      function Un(e) {
        var t,
          r = vn(e) ? e : e.parentElement;
        r &&
          !r.hasAttribute("data-slate-node") &&
          (r = r.closest("[data-slate-node]"));
        var n = r && Or.get(r);
        return (
          n ||
          (null !== (t = r) && void 0 !== t && t.parentElement
            ? Un(r.parentElement)
            : null)
        );
      }
      function Kn(e, t) {
        var r = en(),
          u = (0, n.useRef)(new Set());
        $n(
          e,
          (0, n.useCallback)((e) => {
            t.current &&
              e.forEach((e) => {
                var { target: t } = e,
                  r = Un(t);
                if (r) return u.current.add(r);
              });
          }, []),
          Hn
        ),
          u.current.clear();
        var a = (0, n.useCallback)(() => {
          var e = Array.from(u.current.values()),
            t = e.filter(
              (t) =>
                !e.some((e) =>
                  st.isParent(Zn.findPath(r, e), Zn.findPath(r, t))
                )
            );
          t.forEach((e) => {
            var t;
            null === (t = Lr.get(e)) || void 0 === t || t();
          }),
            u.current.clear();
        }, []);
        return a;
      }
      var Jn = {
        childList: !0,
        characterData: !0,
        characterDataOldValue: !0,
        subtree: !0,
      };
      function Xn(e) {
        var t = en(),
          { receivedUserInput: r, onUserInput: u } = (function () {
            var e = en(),
              t = (0, n.useRef)(!1),
              r = (0, n.useRef)(null),
              u = (0, n.useCallback)(() => {
                if (!1 === t.current) {
                  var n = Zn.getWindow(e);
                  (t.current = !0),
                    r.current && n.cancelAnimationFrame(r.current),
                    (r.current = n.requestAnimationFrame(() => {
                      (t.current = !1), (r.current = null);
                    }));
                }
              }, []);
            return (
              (0, n.useEffect)(() => {
                t.current && (t.current = !1);
              }),
              { receivedUserInput: t, onUserInput: u }
            );
          })(),
          a = Kn(e, r),
          o = (0, n.useMemo)(() => new qn(t, a), [a, t]),
          i = (0, n.useRef)(null),
          l = (0, n.useRef)(!1);
        return (
          $n(
            e,
            (0, n.useCallback)((e) => {
              r.current &&
                ((l.current = !0),
                o.flush(e),
                i.current && clearTimeout(i.current),
                (i.current = setTimeout(() => {
                  (l.current = !1), (i.current = null);
                }, 250)));
            }, []),
            Jn
          ),
          { isReconciling: l, onUserInput: u }
        );
      }
      var Yn = [
        "autoFocus",
        "decorate",
        "onDOMBeforeInput",
        "placeholder",
        "readOnly",
        "renderElement",
        "renderLeaf",
        "renderPlaceholder",
        "style",
        "as",
      ];
      function Qn(e, t) {
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
      function Gn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Qn(Object(r), !0).forEach(function (t) {
                ur(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Qn(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var eu = (0, n.createContext)(!1),
        tu = () => (0, n.useContext)(eu),
        ru = ["editor", "children", "onChange", "value"],
        nu = (e) => {
          var { editor: t, children: r, onChange: u, value: a } = e,
            o = ar(e, ru),
            i = (0, n.useRef)(!1),
            [l, s] = n.useState(() => {
              if (!at.isNodeList(a))
                throw new Error(
                  "[Slate] value is invalid! Expected a list of elements" +
                    "but got: ".concat(JSON.stringify(a))
                );
              if (!et.isEditor(t))
                throw new Error(
                  "[Slate] editor is invalid! you passed:" +
                    "".concat(JSON.stringify(t))
                );
              return (t.children = a), Object.assign(t, o), [t];
            }),
            c = (0, n.useCallback)(() => {
              u(t.children), s([t]);
            }, [u]);
          _r.set(t, c),
            (0, n.useEffect)(
              () => () => {
                _r.set(t, () => {}), (i.current = !0);
              },
              []
            );
          var [d, f] = (0, n.useState)(Zn.isFocused(t));
          return (
            (0, n.useEffect)(() => {
              f(Zn.isFocused(t));
            }),
            Br(() => {
              var e = () => {
                setTimeout(() => {
                  i.current || f(Zn.isFocused(t));
                }, 0);
              };
              return (
                document.addEventListener("focus", e, !0),
                document.addEventListener("blur", e, !0),
                () => {
                  document.removeEventListener("focus", e, !0),
                    document.removeEventListener("blur", e, !0);
                }
              );
            }, []),
            n.createElement(
              hn.Provider,
              { value: l },
              n.createElement(
                Gr.Provider,
                { value: t },
                n.createElement(eu.Provider, { value: d }, r)
              )
            )
          );
        },
        uu = (e, t) => {
          var r = (t.top + t.bottom) / 2;
          return e.top <= r && e.bottom >= r;
        },
        au = (e, t, r) => {
          var n = Zn.toDOMRange(e, t).getBoundingClientRect(),
            u = Zn.toDOMRange(e, r).getBoundingClientRect();
          return uu(n, u) && uu(u, n);
        },
        ou = (e) => {
          var t = e,
            { apply: r, onChange: n, deleteBackward: u } = t;
          return (
            Nr.set(t, new WeakMap()),
            (t.deleteBackward = (r) => {
              if ("line" !== r) return u(r);
              if (e.selection && Ct.isCollapsed(e.selection)) {
                var n = et.above(e, {
                  match: (t) => et.isBlock(e, t),
                  at: e.selection,
                });
                if (n) {
                  var [, a] = n,
                    o = et.range(e, a, e.selection.anchor),
                    i = ((e, t) => {
                      var r = et.range(e, Ct.end(t)),
                        n = Array.from(et.positions(e, { at: t })),
                        u = 0,
                        a = n.length,
                        o = Math.floor(a / 2);
                      if (au(e, et.range(e, n[u]), r))
                        return et.range(e, n[u], r);
                      if (n.length < 2) return et.range(e, n[n.length - 1], r);
                      for (; o !== n.length && o !== u; )
                        au(e, et.range(e, n[o]), r) ? (a = o) : (u = o),
                          (o = Math.floor((u + a) / 2));
                      return et.range(e, n[a], r);
                    })(t, o);
                  Ct.isCollapsed(i) || Vt.delete(e, { at: i });
                }
              }
            }),
            (t.apply = (e) => {
              var n = [];
              switch (e.type) {
                case "insert_text":
                case "remove_text":
                case "set_node":
                  for (var [u, a] of et.levels(t, { at: e.path })) {
                    var o = Zn.findKey(t, u);
                    n.push([a, o]);
                  }
                  break;
                case "insert_node":
                case "remove_node":
                case "merge_node":
                case "split_node":
                  for (var [i, l] of et.levels(t, { at: st.parent(e.path) })) {
                    var s = Zn.findKey(t, i);
                    n.push([l, s]);
                  }
                  break;
                case "move_node":
                  for (var [c, d] of et.levels(t, {
                    at: st.common(st.parent(e.path), st.parent(e.newPath)),
                  })) {
                    var f = Zn.findKey(t, c);
                    n.push([d, f]);
                  }
              }
              for (var [h, D] of (r(e), n)) {
                var [p] = et.node(t, h);
                Pr.set(p, D);
              }
            }),
            (t.setFragmentData = (e) => {
              var { selection: r } = t;
              if (r) {
                var [n, u] = Ct.edges(r),
                  a = et.void(t, { at: n.path }),
                  o = et.void(t, { at: u.path });
                if (!Ct.isCollapsed(r) || a) {
                  var i = Zn.toDOMRange(t, r),
                    l = i.cloneContents(),
                    s = l.childNodes[0];
                  if (
                    (l.childNodes.forEach((e) => {
                      e.textContent && "" !== e.textContent.trim() && (s = e);
                    }),
                    o)
                  ) {
                    var [c] = o,
                      d = i.cloneRange(),
                      f = Zn.toDOMNode(t, c);
                    d.setEndAfter(f), (l = d.cloneContents());
                  }
                  if (
                    (a && (s = l.querySelector("[data-slate-spacer]")),
                    Array.from(
                      l.querySelectorAll("[data-slate-zero-width]")
                    ).forEach((e) => {
                      var t = "n" === e.getAttribute("data-slate-zero-width");
                      e.textContent = t ? "\n" : "";
                    }),
                    gn(s))
                  ) {
                    var h = s.ownerDocument.createElement("span");
                    (h.style.whiteSpace = "pre"),
                      h.appendChild(s),
                      l.appendChild(h),
                      (s = h);
                  }
                  var D = t.getFragment(),
                    p = JSON.stringify(D),
                    v = window.btoa(encodeURIComponent(p));
                  s.setAttribute("data-slate-fragment", v),
                    e.setData("application/x-slate-fragment", v);
                  var C = l.ownerDocument.createElement("div");
                  return (
                    C.appendChild(l),
                    C.setAttribute("hidden", "true"),
                    l.ownerDocument.body.appendChild(C),
                    e.setData("text/html", C.innerHTML),
                    e.setData("text/plain", An(C)),
                    l.ownerDocument.body.removeChild(C),
                    e
                  );
                }
              }
            }),
            (t.insertData = (e) => {
              t.insertFragmentData(e) || t.insertTextData(e);
            }),
            (t.insertFragmentData = (e) => {
              var r = e.getData("application/x-slate-fragment") || wn(e);
              if (r) {
                var n = decodeURIComponent(window.atob(r)),
                  u = JSON.parse(n);
                return t.insertFragment(u), !0;
              }
              return !1;
            }),
            (t.insertTextData = (e) => {
              var r = e.getData("text/plain");
              if (r) {
                var n = r.split(/\r\n|\r|\n/),
                  u = !1;
                for (var a of n)
                  u && Vt.splitNodes(t, { always: !0 }),
                    t.insertText(a),
                    (u = !0);
                return !0;
              }
              return !1;
            }),
            (t.onChange = () => {
              nr.unstable_batchedUpdates(() => {
                var e = _r.get(t);
                e && e(), n();
              });
            }),
            t
          );
        },
        iu = lr
          ? (e) => {
              var {
                  autoFocus: t,
                  decorate: r = Pn,
                  onDOMBeforeInput: u,
                  placeholder: a,
                  readOnly: o = !1,
                  renderElement: i,
                  renderLeaf: l,
                  renderPlaceholder: s = (e) =>
                    n.createElement(kn, Object.assign({}, e)),
                  style: c = {},
                  as: d = "div",
                } = e,
                f = ar(e, Yn),
                h = Dn(),
                [D, p] = (0, n.useState)(!1),
                v = (0, n.useRef)(null),
                C = Xn(v);
              Sr.set(h, o);
              var m = (0, n.useMemo)(
                  () => ({
                    isComposing: !1,
                    isUpdatingSelection: !1,
                    latestElement: null,
                  }),
                  []
                ),
                g = Ur(h);
              Br(() => {
                var e;
                v.current && (e = pn(v.current))
                  ? (br.set(h, e),
                    xr.set(h, v.current),
                    kr.set(h, v.current),
                    Or.set(v.current, h))
                  : kr.delete(h);
                try {
                  var { selection: t } = h,
                    r = Zn.findDocumentOrShadowRoot(h).getSelection();
                  if (m.isComposing || !r || !Zn.isFocused(h)) return;
                  var n = "None" !== r.type;
                  if (!t && !n) return;
                  var u = xr.get(h),
                    a = !1;
                  if (
                    (u.contains(r.anchorNode) &&
                      u.contains(r.focusNode) &&
                      (a = !0),
                    n && a && t)
                  ) {
                    var o = Zn.toSlateRange(h, r, {
                      exactMatch: !0,
                      suppressThrow: !0,
                    });
                    if (o && Ct.equals(o, t)) return;
                  }
                  if (t && !Zn.hasRange(h, t))
                    return void (h.selection = Zn.toSlateRange(h, r, {
                      exactMatch: !1,
                      suppressThrow: !1,
                    }));
                  var i = Zn.toDOMNode(h, h);
                  m.isUpdatingSelection = !0;
                  var l = t && Zn.toDOMRange(h, t);
                  if (l) {
                    Ct.isBackward(t)
                      ? r.setBaseAndExtent(
                          l.endContainer,
                          l.endOffset,
                          l.startContainer,
                          l.startOffset
                        )
                      : r.setBaseAndExtent(
                          l.startContainer,
                          l.startOffset,
                          l.endContainer,
                          l.endOffset
                        );
                    var s = l.startContainer.parentElement;
                    (s.getBoundingClientRect = l.getBoundingClientRect.bind(l)),
                      tr(s, { scrollMode: "if-needed", boundary: i }),
                      delete s.getBoundingClientRect;
                  } else r.removeAllRanges();
                  setTimeout(() => {
                    m.isUpdatingSelection = !1;
                  });
                } catch (e) {
                  m.isUpdatingSelection = !1;
                }
              }),
                (0, n.useEffect)(() => {
                  v.current && t && v.current.focus();
                }, [t]);
              var B = (0, n.useCallback)(
                  Kt()(() => {
                    try {
                      if (
                        !m.isComposing &&
                        !m.isUpdatingSelection &&
                        !C.isReconciling.current
                      ) {
                        var e = Zn.findDocumentOrShadowRoot(h),
                          { activeElement: t } = e,
                          r = Zn.toDOMNode(h, h),
                          n = e.getSelection();
                        if (
                          (t === r
                            ? ((m.latestElement = t), jr.set(h, !0))
                            : jr.delete(h),
                          !n)
                        )
                          return Vt.deselect(h);
                        var { anchorNode: u, focusNode: a } = n,
                          o = jn(h, u) || Tn(h, u),
                          i = jn(h, a) || Tn(h, a);
                        if (o && i) {
                          var l = Zn.toSlateRange(h, n, {
                            exactMatch: !1,
                            suppressThrow: !1,
                          });
                          Vt.select(h, l);
                        } else Vt.deselect(h);
                      }
                    } catch (e) {}
                  }, 100),
                  [o]
                ),
                E = (0, n.useMemo)(() => Ht()(B, 0), [B]),
                A = (0, n.useCallback)(
                  (e) => {
                    o ||
                      !jn(h, e.target) ||
                      Rn(e, u) ||
                      (E.flush(), C.onUserInput());
                  },
                  [o, u]
                );
              Br(() => {
                var e = v.current;
                return (
                  null == e || e.addEventListener("beforeinput", A),
                  () =>
                    null == e ? void 0 : e.removeEventListener("beforeinput", A)
                );
              }, [g, u]),
                Br(() => {
                  var e = Zn.getWindow(h);
                  return (
                    e.document.addEventListener("selectionchange", E),
                    () => {
                      e.document.removeEventListener("selectionchange", E);
                    }
                  );
                }, [E]);
              var F = r([h, []]);
              if (
                a &&
                1 === h.children.length &&
                1 === Array.from(at.texts(h)).length &&
                "" === at.string(h) &&
                !D
              ) {
                var w = et.start(h, []);
                F.push({ [zr]: !0, placeholder: a, anchor: w, focus: w });
              }
              return n.createElement(
                dn.Provider,
                { value: o },
                n.createElement(
                  tn.Provider,
                  { value: r },
                  n.createElement(
                    d,
                    Object.assign({ key: g, role: o ? void 0 : "textbox" }, f, {
                      spellCheck: f.spellCheck,
                      autoCorrect: f.autoCorrect,
                      autoCapitalize: f.autoCapitalize,
                      "data-slate-editor": !0,
                      "data-slate-node": "value",
                      contentEditable: !o || void 0,
                      suppressContentEditableWarning: !0,
                      ref: v,
                      style: Gn(
                        {
                          position: "relative",
                          outline: "none",
                          whiteSpace: "pre-wrap",
                          wordWrap: "break-word",
                        },
                        c
                      ),
                      onCopy: (0, n.useCallback)(
                        (e) => {
                          jn(h, e.target) &&
                            !Mn(e, f.onCopy) &&
                            (e.preventDefault(),
                            Zn.setFragmentData(h, e.clipboardData, "copy"));
                        },
                        [f.onCopy]
                      ),
                      onCut: (0, n.useCallback)(
                        (e) => {
                          if (!o && jn(h, e.target) && !Mn(e, f.onCut)) {
                            e.preventDefault(),
                              Zn.setFragmentData(h, e.clipboardData, "cut");
                            var { selection: t } = h;
                            if (t)
                              if (Ct.isExpanded(t)) et.deleteFragment(h);
                              else {
                                var r = at.parent(h, t.anchor.path);
                                et.isVoid(h, r) && Vt.delete(h);
                              }
                          }
                        },
                        [o, f.onCut]
                      ),
                      onFocus: (0, n.useCallback)(
                        (e) => {
                          if (
                            !o &&
                            !m.isUpdatingSelection &&
                            jn(h, e.target) &&
                            !Mn(e, f.onFocus)
                          ) {
                            var t = Zn.findDocumentOrShadowRoot(h);
                            (m.latestElement = t.activeElement), jr.set(h, !0);
                          }
                        },
                        [o, f.onFocus]
                      ),
                      onBlur: (0, n.useCallback)(
                        (e) => {
                          if (
                            !o &&
                            !m.isUpdatingSelection &&
                            jn(h, e.target) &&
                            !Mn(e, f.onBlur)
                          ) {
                            var t = Zn.findDocumentOrShadowRoot(h);
                            if (m.latestElement !== t.activeElement) {
                              var { relatedTarget: r } = e;
                              if (
                                !(
                                  r === Zn.toDOMNode(h, h) ||
                                  (vn(r) && r.hasAttribute("data-slate-spacer"))
                                )
                              ) {
                                if (null != r && Cn(r) && Zn.hasDOMNode(h, r)) {
                                  var n = Zn.toSlateNode(h, r);
                                  if (Ke.isElement(n) && !h.isVoid(n)) return;
                                }
                                jr.delete(h);
                              }
                            }
                          }
                        },
                        [o, f.onBlur]
                      ),
                      onClick: (0, n.useCallback)(
                        (e) => {
                          if (
                            !o &&
                            Sn(h, e.target) &&
                            !Mn(e, f.onClick) &&
                            Cn(e.target)
                          ) {
                            var t = Zn.toSlateNode(h, e.target),
                              r = Zn.findPath(h, t);
                            if (et.hasPath(h, r))
                              if (at.get(h, r) === t) {
                                var n = et.start(h, r),
                                  u = et.end(h, r),
                                  a = et.void(h, { at: n }),
                                  i = et.void(h, { at: u });
                                if (a && i && st.equals(a[1], i[1])) {
                                  var l = et.range(h, n);
                                  Vt.select(h, l);
                                }
                              }
                          }
                        },
                        [o, f.onClick]
                      ),
                      onCompositionEnd: (0, n.useCallback)(
                        (e) => {
                          jn(h, e.target) &&
                            !Mn(e, f.onCompositionEnd) &&
                            (E.flush(),
                            setTimeout(() => {
                              m.isComposing && p(!1),
                                (m.isComposing = !1),
                                Tr.set(h, !1),
                                Mr.set(h, !0);
                              var e = Rr.get(h) || [];
                              if (e.length) {
                                Rr.set(h, []);
                                var { selection: t } = h;
                                e.forEach((e) => {
                                  var r = e.text.insertText,
                                    n = Wn(h, t, e);
                                  Vt.setSelection(h, n), et.insertText(h, r);
                                });
                              }
                            }, 20));
                        },
                        [f.onCompositionEnd]
                      ),
                      onCompositionUpdate: (0, n.useCallback)(
                        (e) => {
                          jn(h, e.target) &&
                            !Mn(e, f.onCompositionUpdate) &&
                            (!m.isComposing && p(!0),
                            (m.isComposing = !0),
                            Tr.set(h, !0));
                        },
                        [f.onCompositionUpdate]
                      ),
                      onCompositionStart: (0, n.useCallback)(
                        (e) => {
                          jn(h, e.target) &&
                            !Mn(e, f.onCompositionStart) &&
                            (!m.isComposing && p(!0),
                            (m.isComposing = !0),
                            Tr.set(h, !0));
                        },
                        [f.onCompositionStart]
                      ),
                      onPaste: (0, n.useCallback)(
                        (e) => {
                          (e.clipboardData = ((e) => {
                            if (!e.getData("application/x-slate-fragment")) {
                              var t = wn(e);
                              if (t) {
                                var r = new DataTransfer();
                                return (
                                  e.types.forEach((t) => {
                                    r.setData(t, e.getData(t));
                                  }),
                                  r.setData("application/x-slate-fragment", t),
                                  r
                                );
                              }
                            }
                            return e;
                          })(e.clipboardData)),
                            !jn(h, e.target) ||
                              Mn(e, f.onPaste) ||
                              o ||
                              (e.preventDefault(),
                              Zn.insertData(h, e.clipboardData));
                        },
                        [o, f.onPaste]
                      ),
                    }),
                    un({
                      decorations: F,
                      node: h,
                      renderElement: i,
                      renderPlaceholder: s,
                      renderLeaf: l,
                      selection: h.selection,
                    })
                  )
                )
              );
            }
          : (e) => {
              var {
                  autoFocus: t,
                  decorate: r = Pn,
                  onDOMBeforeInput: u,
                  placeholder: a,
                  readOnly: o = !1,
                  renderElement: i,
                  renderLeaf: l,
                  renderPlaceholder: s = (e) =>
                    n.createElement(kn, Object.assign({}, e)),
                  scrollSelectionIntoView: c = Nn,
                  style: d = {},
                  as: f = "div",
                } = e,
                h = ar(e, yn),
                D = Dn(),
                [p, v] = (0, n.useState)(!1),
                C = (0, n.useRef)(null),
                m = (0, n.useRef)([]);
              Sr.set(D, o);
              var g = (0, n.useMemo)(
                () => ({
                  isComposing: !1,
                  hasInsertPrefixInCompositon: !1,
                  isDraggingInternally: !1,
                  isUpdatingSelection: !1,
                  latestElement: null,
                }),
                []
              );
              Br(() => {
                var e;
                C.current && (e = pn(C.current))
                  ? (br.set(D, e),
                    xr.set(D, C.current),
                    kr.set(D, C.current),
                    Or.set(C.current, D))
                  : kr.delete(D);
                var { selection: t } = D,
                  r = Zn.findDocumentOrShadowRoot(D).getSelection();
                if (!g.isComposing && r && Zn.isFocused(D)) {
                  var n = "None" !== r.type;
                  if (t || n) {
                    var u = xr.get(D),
                      a = !1;
                    if (
                      (u.contains(r.anchorNode) &&
                        u.contains(r.focusNode) &&
                        (a = !0),
                      n && a && t)
                    ) {
                      var o = Zn.toSlateRange(D, r, {
                        exactMatch: !0,
                        suppressThrow: !0,
                      });
                      if (o && Ct.equals(o, t)) return;
                    }
                    if (!t || Zn.hasRange(D, t)) {
                      g.isUpdatingSelection = !0;
                      var i = t && Zn.toDOMRange(D, t);
                      i
                        ? (Ct.isBackward(t)
                            ? r.setBaseAndExtent(
                                i.endContainer,
                                i.endOffset,
                                i.startContainer,
                                i.startOffset
                              )
                            : r.setBaseAndExtent(
                                i.startContainer,
                                i.startOffset,
                                i.endContainer,
                                i.endOffset
                              ),
                          c(D, i))
                        : r.removeAllRanges(),
                        setTimeout(() => {
                          i && sr && Zn.toDOMNode(D, D).focus();
                          g.isUpdatingSelection = !1;
                        });
                    } else
                      D.selection = Zn.toSlateRange(D, r, {
                        exactMatch: !1,
                        suppressThrow: !1,
                      });
                  }
                }
              }),
                (0, n.useEffect)(() => {
                  C.current && t && C.current.focus();
                }, [t]);
              var B = (0, n.useCallback)(
                  Kt()(() => {
                    if (
                      !g.isComposing &&
                      !g.isUpdatingSelection &&
                      !g.isDraggingInternally
                    ) {
                      var e = Zn.findDocumentOrShadowRoot(D),
                        { activeElement: t } = e,
                        r = Zn.toDOMNode(D, D),
                        n = e.getSelection();
                      if (
                        (t === r
                          ? ((g.latestElement = t), jr.set(D, !0))
                          : jr.delete(D),
                        !n)
                      )
                        return Vt.deselect(D);
                      var { anchorNode: u, focusNode: a } = n,
                        o = jn(D, u) || Tn(D, u),
                        i = jn(D, a) || Tn(D, a);
                      if (o && i) {
                        var l = Zn.toSlateRange(D, n, {
                          exactMatch: !1,
                          suppressThrow: !1,
                        });
                        Vt.select(D, l);
                      }
                    }
                  }, 100),
                  [o]
                ),
                E = (0, n.useMemo)(() => Ht()(B, 0), [B]),
                A = (0, n.useCallback)(
                  (e) => {
                    if (!o && jn(D, e.target) && !Rn(e, u)) {
                      E.flush(), B.flush();
                      var { selection: t } = D,
                        { inputType: r } = e,
                        n = e.dataTransfer || e.data || void 0;
                      if (
                        "insertCompositionText" === r ||
                        "deleteCompositionText" === r
                      )
                        return;
                      var a = !1;
                      if (
                        "insertText" === r &&
                        t &&
                        Ct.isCollapsed(t) &&
                        e.data &&
                        1 === e.data.length &&
                        /[a-z ]/i.test(e.data) &&
                        0 !== t.anchor.offset
                      ) {
                        (a = !0), D.marks && (a = !1);
                        var { anchor: i } = t,
                          l = et.above(D, {
                            at: i,
                            match: (e) => et.isInline(D, e),
                            mode: "highest",
                          });
                        if (l) {
                          var [, s] = l;
                          et.isEnd(D, t.anchor, s) && (a = !1);
                        }
                      }
                      if (
                        (a || e.preventDefault(),
                        !r.startsWith("delete") || r.startsWith("deleteBy"))
                      ) {
                        var [c] = e.getTargetRanges();
                        if (c) {
                          var d = Zn.toSlateRange(D, c, {
                            exactMatch: !1,
                            suppressThrow: !1,
                          });
                          (t && Ct.equals(t, d)) || Vt.select(D, d);
                        }
                      }
                      if (t && Ct.isExpanded(t) && r.startsWith("delete")) {
                        var f = r.endsWith("Backward") ? "backward" : "forward";
                        return void et.deleteFragment(D, { direction: f });
                      }
                      switch (r) {
                        case "deleteByComposition":
                        case "deleteByCut":
                        case "deleteByDrag":
                          et.deleteFragment(D);
                          break;
                        case "deleteContent":
                        case "deleteContentForward":
                          et.deleteForward(D);
                          break;
                        case "deleteContentBackward":
                          et.deleteBackward(D);
                          break;
                        case "deleteEntireSoftLine":
                          et.deleteBackward(D, { unit: "line" }),
                            et.deleteForward(D, { unit: "line" });
                          break;
                        case "deleteHardLineBackward":
                          et.deleteBackward(D, { unit: "block" });
                          break;
                        case "deleteSoftLineBackward":
                          et.deleteBackward(D, { unit: "line" });
                          break;
                        case "deleteHardLineForward":
                          et.deleteForward(D, { unit: "block" });
                          break;
                        case "deleteSoftLineForward":
                          et.deleteForward(D, { unit: "line" });
                          break;
                        case "deleteWordBackward":
                          et.deleteBackward(D, { unit: "word" });
                          break;
                        case "deleteWordForward":
                          et.deleteForward(D, { unit: "word" });
                          break;
                        case "insertLineBreak":
                        case "insertParagraph":
                          et.insertBreak(D);
                          break;
                        case "insertFromComposition":
                        case "insertFromDrop":
                        case "insertFromPaste":
                        case "insertFromYank":
                        case "insertReplacementText":
                        case "insertText":
                          "insertFromComposition" === r &&
                            (g.isComposing && v(!1), (g.isComposing = !1)),
                            "DataTransfer" ===
                            (null == n ? void 0 : n.constructor.name)
                              ? Zn.insertData(D, n)
                              : "string" == typeof n &&
                                (a
                                  ? m.current.push(() => et.insertText(D, n))
                                  : et.insertText(D, n));
                      }
                    }
                  },
                  [o, u]
                );
              Br(
                () => (
                  C.current &&
                    gr &&
                    C.current.addEventListener("beforeinput", A),
                  () => {
                    C.current &&
                      gr &&
                      C.current.removeEventListener("beforeinput", A);
                  }
                ),
                [A]
              ),
                Br(() => {
                  var e = Zn.getWindow(D);
                  return (
                    e.document.addEventListener("selectionchange", E),
                    () => {
                      e.document.removeEventListener("selectionchange", E);
                    }
                  );
                }, [E]);
              var F = r([D, []]);
              if (
                a &&
                1 === D.children.length &&
                1 === Array.from(at.texts(D)).length &&
                "" === at.string(D) &&
                !p
              ) {
                var w = et.start(D, []);
                F.push({ [zr]: !0, placeholder: a, anchor: w, focus: w });
              }
              return n.createElement(
                dn.Provider,
                { value: o },
                n.createElement(
                  tn.Provider,
                  { value: r },
                  n.createElement(
                    f,
                    Object.assign({ role: o ? void 0 : "textbox" }, h, {
                      spellCheck: !(!gr && mr) && h.spellCheck,
                      autoCorrect: gr || !mr ? h.autoCorrect : "false",
                      autoCapitalize: gr || !mr ? h.autoCapitalize : "false",
                      "data-slate-editor": !0,
                      "data-slate-node": "value",
                      contentEditable: !o,
                      zindex: -1,
                      suppressContentEditableWarning: !0,
                      ref: C,
                      style: xn(
                        {
                          position: "relative",
                          outline: "none",
                          whiteSpace: "pre-wrap",
                          wordWrap: "break-word",
                        },
                        d
                      ),
                      onBeforeInput: (0, n.useCallback)(
                        (e) => {
                          if (
                            !gr &&
                            !o &&
                            !Mn(e, h.onBeforeInput) &&
                            jn(D, e.target) &&
                            (e.preventDefault(), !g.isComposing)
                          ) {
                            var t = e.data;
                            et.insertText(D, t);
                          }
                        },
                        [o]
                      ),
                      onInput: (0, n.useCallback)((e) => {
                        for (var t of m.current) t();
                        m.current = [];
                      }, []),
                      onBlur: (0, n.useCallback)(
                        (e) => {
                          if (
                            !o &&
                            !g.isUpdatingSelection &&
                            jn(D, e.target) &&
                            !Mn(e, h.onBlur)
                          ) {
                            var t = Zn.findDocumentOrShadowRoot(D);
                            if (g.latestElement !== t.activeElement) {
                              var { relatedTarget: r } = e;
                              if (
                                !(
                                  r === Zn.toDOMNode(D, D) ||
                                  (vn(r) && r.hasAttribute("data-slate-spacer"))
                                )
                              ) {
                                if (null != r && Cn(r) && Zn.hasDOMNode(D, r)) {
                                  var n = Zn.toSlateNode(D, r);
                                  if (Ke.isElement(n) && !D.isVoid(n)) return;
                                }
                                if (cr) {
                                  var u = t.getSelection();
                                  null == u || u.removeAllRanges();
                                }
                                jr.delete(D);
                              }
                            }
                          }
                        },
                        [o, h.onBlur]
                      ),
                      onClick: (0, n.useCallback)(
                        (e) => {
                          if (
                            !o &&
                            Sn(D, e.target) &&
                            !Mn(e, h.onClick) &&
                            Cn(e.target)
                          ) {
                            var t = Zn.toSlateNode(D, e.target),
                              r = Zn.findPath(D, t);
                            if (et.hasPath(D, r))
                              if (at.get(D, r) === t) {
                                var n = et.start(D, r),
                                  u = et.end(D, r),
                                  a = et.void(D, { at: n }),
                                  i = et.void(D, { at: u });
                                if (a && i && st.equals(a[1], i[1])) {
                                  var l = et.range(D, n);
                                  Vt.select(D, l);
                                }
                              }
                          }
                        },
                        [o, h.onClick]
                      ),
                      onCompositionEnd: (0, n.useCallback)(
                        (e) => {
                          if (
                            jn(D, e.target) &&
                            !Mn(e, h.onCompositionEnd) &&
                            (g.isComposing && v(!1),
                            (g.isComposing = !1),
                            cr ||
                              Dr ||
                              or ||
                              pr ||
                              Cr ||
                              vr ||
                              !e.data ||
                              et.insertText(D, e.data),
                            D.selection && Ct.isCollapsed(D.selection))
                          ) {
                            var t = D.selection.anchor.path,
                              r = at.leaf(D, t);
                            g.hasInsertPrefixInCompositon &&
                              ((g.hasInsertPrefixInCompositon = !1),
                              et.withoutNormalizing(D, () => {
                                var e = r.text.replace(/^\uFEFF/, "");
                                Vt.delete(D, {
                                  distance: r.text.length,
                                  reverse: !0,
                                }),
                                  et.insertText(D, e);
                              }));
                          }
                        },
                        [h.onCompositionEnd]
                      ),
                      onCompositionUpdate: (0, n.useCallback)(
                        (e) => {
                          jn(D, e.target) &&
                            !Mn(e, h.onCompositionUpdate) &&
                            (!g.isComposing && v(!0), (g.isComposing = !0));
                        },
                        [h.onCompositionUpdate]
                      ),
                      onCompositionStart: (0, n.useCallback)(
                        (e) => {
                          if (jn(D, e.target) && !Mn(e, h.onCompositionStart)) {
                            var { selection: t, marks: r } = D;
                            if (t) {
                              if (Ct.isExpanded(t))
                                return void et.deleteFragment(D);
                              var n = et.above(D, {
                                match: (e) => et.isInline(D, e),
                                mode: "highest",
                              });
                              if (n) {
                                var [, u] = n;
                                if (et.isEnd(D, t.anchor, u)) {
                                  var a = et.after(D, u);
                                  Vt.setSelection(D, { anchor: a, focus: a });
                                }
                              }
                              r &&
                                ((g.hasInsertPrefixInCompositon = !0),
                                Vt.insertNodes(D, xn({ text: "\ufeff" }, r), {
                                  select: !0,
                                }));
                            }
                          }
                        },
                        [h.onCompositionStart]
                      ),
                      onCopy: (0, n.useCallback)(
                        (e) => {
                          jn(D, e.target) &&
                            !Mn(e, h.onCopy) &&
                            (e.preventDefault(),
                            Zn.setFragmentData(D, e.clipboardData, "copy"));
                        },
                        [h.onCopy]
                      ),
                      onCut: (0, n.useCallback)(
                        (e) => {
                          if (!o && jn(D, e.target) && !Mn(e, h.onCut)) {
                            e.preventDefault(),
                              Zn.setFragmentData(D, e.clipboardData, "cut");
                            var { selection: t } = D;
                            if (t)
                              if (Ct.isExpanded(t)) et.deleteFragment(D);
                              else {
                                var r = at.parent(D, t.anchor.path);
                                et.isVoid(D, r) && Vt.delete(D);
                              }
                          }
                        },
                        [o, h.onCut]
                      ),
                      onDragOver: (0, n.useCallback)(
                        (e) => {
                          if (Sn(D, e.target) && !Mn(e, h.onDragOver)) {
                            var t = Zn.toSlateNode(D, e.target);
                            et.isVoid(D, t) && e.preventDefault();
                          }
                        },
                        [h.onDragOver]
                      ),
                      onDragStart: (0, n.useCallback)(
                        (e) => {
                          if (!o && Sn(D, e.target) && !Mn(e, h.onDragStart)) {
                            var t = Zn.toSlateNode(D, e.target),
                              r = Zn.findPath(D, t);
                            if (
                              et.isVoid(D, t) ||
                              et.void(D, { at: r, voids: !0 })
                            ) {
                              var n = et.range(D, r);
                              Vt.select(D, n);
                            }
                            (g.isDraggingInternally = !0),
                              Zn.setFragmentData(D, e.dataTransfer, "drag");
                          }
                        },
                        [o, h.onDragStart]
                      ),
                      onDrop: (0, n.useCallback)(
                        (e) => {
                          if (!o && Sn(D, e.target) && !Mn(e, h.onDrop)) {
                            e.preventDefault();
                            var t = D.selection,
                              r = Zn.findEventRange(D, e),
                              n = e.dataTransfer;
                            Vt.select(D, r),
                              g.isDraggingInternally &&
                                (!t ||
                                  Ct.equals(t, r) ||
                                  et.void(D, { at: r, voids: !0 }) ||
                                  Vt.delete(D, { at: t })),
                              Zn.insertData(D, n),
                              Zn.isFocused(D) || Zn.focus(D);
                          }
                          g.isDraggingInternally = !1;
                        },
                        [o, h.onDrop]
                      ),
                      onDragEnd: (0, n.useCallback)(
                        (e) => {
                          !o &&
                            g.isDraggingInternally &&
                            h.onDragEnd &&
                            Sn(D, e.target) &&
                            h.onDragEnd(e),
                            (g.isDraggingInternally = !1);
                        },
                        [o, h.onDragEnd]
                      ),
                      onFocus: (0, n.useCallback)(
                        (e) => {
                          if (
                            !o &&
                            !g.isUpdatingSelection &&
                            jn(D, e.target) &&
                            !Mn(e, h.onFocus)
                          ) {
                            var t = Zn.toDOMNode(D, D),
                              r = Zn.findDocumentOrShadowRoot(D);
                            if (
                              ((g.latestElement = r.activeElement),
                              sr && e.target !== t)
                            )
                              return void t.focus();
                            jr.set(D, !0);
                          }
                        },
                        [o, h.onFocus]
                      ),
                      onKeyDown: (0, n.useCallback)(
                        (e) => {
                          if (
                            !o &&
                            !g.isComposing &&
                            jn(D, e.target) &&
                            !Mn(e, h.onKeyDown)
                          ) {
                            var { nativeEvent: t } = e,
                              { selection: r } = D,
                              n = D.children[null !== r ? r.focus.path[0] : 0],
                              u = "rtl" === qt()(at.string(n));
                            if (cn.isRedo(t)) {
                              e.preventDefault();
                              var a = D;
                              return void (
                                "function" == typeof a.redo && a.redo()
                              );
                            }
                            if (cn.isUndo(t)) {
                              e.preventDefault();
                              var i = D;
                              return void (
                                "function" == typeof i.undo && i.undo()
                              );
                            }
                            if (cn.isMoveLineBackward(t))
                              return (
                                e.preventDefault(),
                                void Vt.move(D, { unit: "line", reverse: !0 })
                              );
                            if (cn.isMoveLineForward(t))
                              return (
                                e.preventDefault(),
                                void Vt.move(D, { unit: "line" })
                              );
                            if (cn.isExtendLineBackward(t))
                              return (
                                e.preventDefault(),
                                void Vt.move(D, {
                                  unit: "line",
                                  edge: "focus",
                                  reverse: !0,
                                })
                              );
                            if (cn.isExtendLineForward(t))
                              return (
                                e.preventDefault(),
                                void Vt.move(D, { unit: "line", edge: "focus" })
                              );
                            if (cn.isMoveBackward(t))
                              return (
                                e.preventDefault(),
                                void (r && Ct.isCollapsed(r)
                                  ? Vt.move(D, { reverse: !u })
                                  : Vt.collapse(D, { edge: "start" }))
                              );
                            if (cn.isMoveForward(t))
                              return (
                                e.preventDefault(),
                                void (r && Ct.isCollapsed(r)
                                  ? Vt.move(D, { reverse: u })
                                  : Vt.collapse(D, { edge: "end" }))
                              );
                            if (cn.isMoveWordBackward(t))
                              return (
                                e.preventDefault(),
                                r &&
                                  Ct.isExpanded(r) &&
                                  Vt.collapse(D, { edge: "focus" }),
                                void Vt.move(D, { unit: "word", reverse: !u })
                              );
                            if (cn.isMoveWordForward(t))
                              return (
                                e.preventDefault(),
                                r &&
                                  Ct.isExpanded(r) &&
                                  Vt.collapse(D, { edge: "focus" }),
                                void Vt.move(D, { unit: "word", reverse: u })
                              );
                            if (gr) {
                              if (
                                (fr || cr) &&
                                r &&
                                (cn.isDeleteBackward(t) ||
                                  cn.isDeleteForward(t)) &&
                                Ct.isCollapsed(r)
                              ) {
                                var l = at.parent(D, r.anchor.path);
                                if (
                                  Ke.isElement(l) &&
                                  et.isVoid(D, l) &&
                                  et.isInline(D, l)
                                )
                                  return (
                                    e.preventDefault(),
                                    void et.deleteBackward(D, { unit: "block" })
                                  );
                              }
                            } else {
                              if (
                                cn.isBold(t) ||
                                cn.isItalic(t) ||
                                cn.isTransposeCharacter(t)
                              )
                                return void e.preventDefault();
                              if (cn.isSplitBlock(t))
                                return (
                                  e.preventDefault(), void et.insertBreak(D)
                                );
                              if (cn.isDeleteBackward(t))
                                return (
                                  e.preventDefault(),
                                  void (r && Ct.isExpanded(r)
                                    ? et.deleteFragment(D, {
                                        direction: "backward",
                                      })
                                    : et.deleteBackward(D))
                                );
                              if (cn.isDeleteForward(t))
                                return (
                                  e.preventDefault(),
                                  void (r && Ct.isExpanded(r)
                                    ? et.deleteFragment(D, {
                                        direction: "forward",
                                      })
                                    : et.deleteForward(D))
                                );
                              if (cn.isDeleteLineBackward(t))
                                return (
                                  e.preventDefault(),
                                  void (r && Ct.isExpanded(r)
                                    ? et.deleteFragment(D, {
                                        direction: "backward",
                                      })
                                    : et.deleteBackward(D, { unit: "line" }))
                                );
                              if (cn.isDeleteLineForward(t))
                                return (
                                  e.preventDefault(),
                                  void (r && Ct.isExpanded(r)
                                    ? et.deleteFragment(D, {
                                        direction: "forward",
                                      })
                                    : et.deleteForward(D, { unit: "line" }))
                                );
                              if (cn.isDeleteWordBackward(t))
                                return (
                                  e.preventDefault(),
                                  void (r && Ct.isExpanded(r)
                                    ? et.deleteFragment(D, {
                                        direction: "backward",
                                      })
                                    : et.deleteBackward(D, { unit: "word" }))
                                );
                              if (cn.isDeleteWordForward(t))
                                return (
                                  e.preventDefault(),
                                  void (r && Ct.isExpanded(r)
                                    ? et.deleteFragment(D, {
                                        direction: "forward",
                                      })
                                    : et.deleteForward(D, { unit: "word" }))
                                );
                            }
                          }
                        },
                        [o, h.onKeyDown]
                      ),
                      onPaste: (0, n.useCallback)(
                        (e) => {
                          o ||
                            !jn(D, e.target) ||
                            Mn(e, h.onPaste) ||
                            (gr &&
                              !((e) =>
                                e.clipboardData &&
                                "" !== e.clipboardData.getData("text/plain") &&
                                1 === e.clipboardData.types.length)(
                                e.nativeEvent
                              )) ||
                            (e.preventDefault(),
                            Zn.insertData(D, e.clipboardData));
                        },
                        [o, h.onPaste]
                      ),
                    }),
                    n.createElement(On, {
                      decorations: F,
                      node: D,
                      renderElement: i,
                      renderPlaceholder: s,
                      renderLeaf: l,
                      selection: D.selection,
                    })
                  )
                )
              );
            },
        lu = {
          isHistory: (e) =>
            o(e) &&
            Array.isArray(e.redos) &&
            Array.isArray(e.undos) &&
            (0 === e.redos.length || lt.isOperationList(e.redos[0])) &&
            (0 === e.undos.length || lt.isOperationList(e.undos[0])),
        },
        su = (new WeakMap(), new WeakMap()),
        cu = new WeakMap(),
        du = {
          isHistoryEditor: (e) => lu.isHistory(e.history) && et.isEditor(e),
          isMerging: (e) => cu.get(e),
          isSaving: (e) => su.get(e),
          redo(e) {
            e.redo();
          },
          undo(e) {
            e.undo();
          },
          withoutMerging(e, t) {
            var r = du.isMerging(e);
            cu.set(e, !1), t(), cu.set(e, r);
          },
          withoutSaving(e, t) {
            var r = du.isSaving(e);
            su.set(e, !1), t(), su.set(e, r);
          },
        },
        fu = (e, t) =>
          "set_selection" === e.type ||
          !(
            !t ||
            "insert_text" !== e.type ||
            "insert_text" !== t.type ||
            e.offset !== t.offset + t.text.length ||
            !st.equals(e.path, t.path)
          ) ||
          !(
            !t ||
            "remove_text" !== e.type ||
            "remove_text" !== t.type ||
            e.offset + e.text.length !== t.offset ||
            !st.equals(e.path, t.path)
          ),
        hu = (e, t) =>
          "set_selection" !== e.type ||
          (null != e.properties && null != e.newProperties),
        Du = (e, t) =>
          !(!t || "set_selection" !== e.type || "set_selection" !== t.type),
        pu = (e) => "set_selection" !== e.type,
        vu = r(35193),
        Cu = r(48170),
        mu = r(90546),
        gu = r.n(mu),
        Bu = r(953),
        Eu = r(90666);
      const Au = (e, t) => {
          const r = et.marks(e);
          return !!r && !0 === r[t];
        },
        Fu = (e, t) => {
          Au(e, t) ? et.removeMark(e, t) : et.addMark(e, t, !0);
        };
      r(43318);
      const wu = "rich-text__button",
        yu = ({ format: e, children: t }) => {
          const r = Dn();
          return n.createElement(
            "button",
            {
              type: "button",
              className: [wu, Au(r, e) && `${wu}__button--active`]
                .filter(Boolean)
                .join(" "),
              onMouseDown: (t) => {
                t.preventDefault(), Fu(r, e);
              },
            },
            t
          );
        },
        bu = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic bold-icon",
            },
            n.createElement("path", {
              className: "fill",
              d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z",
            }),
            n.createElement("path", { fill: "none", d: "M0 0h24v24H0z" })
          ),
        xu = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic inline-code-icon",
            },
            n.createElement("path", {
              className: "fill",
              d: "M7.375 16.781l1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 000 1.562l5 4zm9.25-9.562l-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 000-1.562l-5-4zM14.976 3.216l-4 18-1.953-.434 4-18z",
            })
          ),
        Ou = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic italic-icon",
            },
            n.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            n.createElement("path", {
              className: "fill",
              d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z",
            })
          ),
        ku = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic strikethrough-icon",
            },
            n.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            n.createElement("path", {
              className: "fill",
              d: "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z",
            })
          ),
        Pu = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic underline-icon",
            },
            n.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            n.createElement("path", {
              className: "fill",
              d: "M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z",
            })
          ),
        Nu = {
          bold: {
            Button: () =>
              n.createElement(
                yu,
                { format: "bold" },
                n.createElement(bu, null)
              ),
            Leaf: ({ attributes: e, children: t }) =>
              n.createElement("strong", { ...e }, t),
          },
          code: {
            Button: () =>
              n.createElement(
                yu,
                { format: "code" },
                n.createElement(xu, null)
              ),
            Leaf: ({ attributes: e, children: t }) =>
              n.createElement("code", { ...e }, t),
          },
          italic: {
            Button: () =>
              n.createElement(
                yu,
                { format: "italic" },
                n.createElement(Ou, null)
              ),
            Leaf: ({ attributes: e, children: t }) =>
              n.createElement("em", { ...e }, t),
          },
          strikethrough: {
            Button: () =>
              n.createElement(
                yu,
                { format: "strikethrough" },
                n.createElement(ku, null)
              ),
            Leaf: ({ attributes: e, children: t }) =>
              n.createElement("del", { ...e }, t),
          },
          underline: {
            Button: () =>
              n.createElement(
                yu,
                { format: "underline" },
                n.createElement(Pu, null)
              ),
            Leaf: ({ attributes: e, children: t }) =>
              n.createElement("u", { ...e }, t),
          },
        },
        Su = (e, t) => {
          if (!e.selection) return !1;
          const [r] = Array.from(
            et.nodes(e, {
              at: et.unhangRange(e, e.selection),
              match: (e) => !et.isEditor(e) && Ke.isElement(e) && e.type === t,
            })
          );
          return !!r;
        },
        ju = ["ol", "ul"],
        Tu = (e, t) => {
          const r = Su(e, t),
            n = ju.includes(t);
          let u = t;
          if (
            (r ? (u = void 0) : n && (u = "li"),
            Vt.unwrapNodes(e, {
              match: (e) => Ke.isElement(e) && ju.includes(e.type),
              split: !0,
              mode: "lowest",
            }),
            Vt.setNodes(e, { type: u }),
            !r && n)
          ) {
            const r = { type: t, children: [] };
            Vt.wrapNodes(e, r);
          }
          Zn.focus(e);
        },
        Mu = "rich-text__button",
        Ru = ({ format: e, children: t, onClick: r, className: u }) => {
          const a = Dn(),
            o = (0, n.useCallback)(
              (t) => {
                t.preventDefault(), Tu(a, e);
              },
              [a, e]
            );
          return n.createElement(
            "button",
            {
              type: "button",
              className: [Mu, u, Su(a, e) && `${Mu}__button--active`]
                .filter(Boolean)
                .join(" "),
              onClick: r || o,
            },
            t
          );
        },
        _u = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic h1-icon",
            },
            n.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            n.createElement("path", {
              className: "fill",
              d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z",
            })
          ),
        Lu = {
          Button: () =>
            n.createElement(Ru, { format: "h1" }, n.createElement(_u, null)),
          Element: ({ attributes: e, children: t }) =>
            n.createElement("h1", { ...e }, t),
        },
        zu = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic h2-icon",
            },
            n.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            n.createElement("path", {
              className: "fill",
              d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8a2 2 0 01-2 2h-2v2h4v2H9v-4a2 2 0 012-2h2V9H9V7h4a2 2 0 012 2v2z",
            })
          ),
        Wu = {
          Button: () =>
            n.createElement(Ru, { format: "h2" }, n.createElement(zu, null)),
          Element: ({ attributes: e, children: t }) =>
            n.createElement("h2", { ...e }, t),
        },
        Iu = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic h3-icon",
            },
            n.createElement("path", { fill: "none", d: "M.01 0h24v24h-24z" }),
            n.createElement("path", {
              className: "fill",
              d: "M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15a2 2 0 01-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4a2 2 0 012 2v1.5z",
            })
          ),
        Vu = {
          Button: () =>
            n.createElement(Ru, { format: "h3" }, n.createElement(Iu, null)),
          Element: ({ attributes: e, children: t }) =>
            n.createElement("h3", { ...e }, t),
        },
        Zu = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic h4-icon",
            },
            n.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            n.createElement("path", {
              className: "fill",
              d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z",
            })
          ),
        qu = {
          Button: () =>
            n.createElement(Ru, { format: "h4" }, n.createElement(Zu, null)),
          Element: ({ attributes: e, children: t }) =>
            n.createElement("h4", { ...e }, t),
        },
        $u = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic h5-icon",
            },
            n.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            n.createElement("path", {
              className: "fill",
              d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2a2 2 0 012 2v2a2 2 0 01-2 2H9v-2h4v-2H9V7h6v2z",
            })
          ),
        Hu = {
          Button: () =>
            n.createElement(Ru, { format: "h5" }, n.createElement($u, null)),
          Element: ({ attributes: e, children: t }) =>
            n.createElement("h5", { ...e }, t),
        },
        Uu = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic h6-icon",
            },
            n.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            n.createElement("path", {
              className: "fill",
              d: "M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V9a2 2 0 012-2h4v2z",
            })
          ),
        Ku = {
          Button: () =>
            n.createElement(Ru, { format: "h6" }, n.createElement(Uu, null)),
          Element: ({ attributes: e, children: t }) =>
            n.createElement("h6", { ...e }, t),
        },
        Ju = (e) => {
          Vt.unwrapNodes(e, {
            match: (e) => Ke.isElement(e) && "link" === e.type,
          });
        };
      var Xu = r(71851);
      const Yu = () =>
        n.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            focusable: "false",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            className: "graphic link",
          },
          n.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
          n.createElement("path", {
            className: "fill",
            d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
          })
        );
      var Qu = r(39599),
        Gu = r(77329),
        ea = r(33636),
        ta = r(93313),
        ra = r(46268),
        na = r(89877),
        ua = r(5590);
      r(47086);
      const aa = "rich-text-link-edit-modal",
        oa = ({
          close: e,
          handleModalSubmit: t,
          initialState: r,
          fieldSchema: u,
          modalSlug: a,
        }) =>
          n.createElement(
            Xu.Modal,
            { slug: a, className: aa },
            n.createElement(
              Qu.Z,
              { className: `${aa}__template` },
              n.createElement(
                "header",
                { className: `${aa}__header` },
                n.createElement("h3", null, "Edit Link"),
                n.createElement(
                  Gu.Z,
                  { buttonStyle: "none", onClick: e },
                  n.createElement(ea.Z, null)
                )
              ),
              n.createElement(
                ta.Z,
                { onSubmit: t, initialState: r },
                n.createElement(ua.Z, {
                  fieldTypes: na.Z,
                  readOnly: !1,
                  fieldSchema: u,
                  forceRender: !0,
                }),
                n.createElement(ra.Z, null, "Confirm")
              )
            )
          ),
        ia = "rich-text-link-modal";
      var la = r(19826),
        sa = r(28630),
        ca = r(40684),
        da = r(9980);
      const fa = (e) => [
        { name: "text", label: "Text to display", type: "text", required: !0 },
        {
          name: "linkType",
          label: "Link Type",
          type: "radio",
          required: !0,
          admin: {
            description:
              "Choose between entering a custom text URL or linking to another document.",
          },
          defaultValue: "custom",
          options: [
            { label: "Custom URL", value: "custom" },
            { label: "Internal Link", value: "internal" },
          ],
        },
        {
          name: "url",
          label: "Enter a URL",
          type: "text",
          required: !0,
          admin: {
            condition: ({ linkType: e, url: t }) =>
              (void 0 === e && t) || "custom" === e,
          },
        },
        {
          name: "doc",
          label: "Choose a document to link to",
          type: "relationship",
          required: !0,
          relationTo: e.collections.map(({ slug: e }) => e),
          admin: { condition: ({ linkType: e }) => "internal" === e },
        },
        { name: "newTab", label: "Open in new tab", type: "checkbox" },
      ];
      var ha = r(56490);
      var Da = r(95050),
        pa = r(93582);
      r(73404);
      const va = "rich-text-link",
        Ca = {
          Button: ({ fieldProps: e }) => {
            var t, r;
            const u =
                null ===
                  (r =
                    null === (t = null == e ? void 0 : e.admin) || void 0 === t
                      ? void 0
                      : t.link) || void 0 === r
                  ? void 0
                  : r.fields,
              a = `${ia}-${e.path}`,
              o = (0, da.Z)(),
              i = Dn(),
              { user: l } = (0, sa.a)(),
              s = (0, ca.bU)(),
              { toggleModal: c } = (0, Xu.useModal)(),
              [d, f] = (0, n.useState)(!1),
              [h, D] = (0, n.useState)({}),
              [p] = (0, n.useState)(() => {
                const e = [...fa(o)];
                return (
                  u &&
                    e.push({
                      name: "fields",
                      type: "group",
                      admin: {
                        style: {
                          margin: 0,
                          padding: 0,
                          borderTop: 0,
                          borderBottom: 0,
                        },
                      },
                      fields: u,
                    }),
                  e
                );
              });
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(
                Ru,
                {
                  format: "link",
                  onClick: async () => {
                    if (Su(i, "link")) Ju(i);
                    else {
                      c(a), f(!0);
                      if (!(i.selection && Ct.isCollapsed(i.selection))) {
                        const e = {
                            text: i.selection ? et.string(i, i.selection) : "",
                          },
                          t = await (0, la.Z)({
                            fieldSchema: p,
                            data: e,
                            user: l,
                            operation: "create",
                            locale: s,
                          });
                        D(t);
                      }
                    }
                  },
                },
                n.createElement(Yu, null)
              ),
              d &&
                n.createElement(oa, {
                  modalSlug: a,
                  fieldSchema: p,
                  initialState: h,
                  close: () => {
                    c(a), f(!1);
                  },
                  handleModalSubmit: (e) => {
                    const t = i.selection && Ct.isCollapsed(i.selection),
                      r = (0, ha.Z)(e, !0),
                      n = {
                        type: "link",
                        linkType: r.linkType,
                        url: r.url,
                        doc: r.doc,
                        newTab: r.newTab,
                        fields: r.fields,
                        children: [],
                      };
                    t || !i.selection
                      ? Vt.insertNodes(i, {
                          ...n,
                          children: [{ text: String(r.text) }],
                        })
                      : i.selection &&
                        (Vt.wrapNodes(i, n, { split: !0 }),
                        Vt.delete(i, {
                          at: i.selection.focus.path,
                          unit: "word",
                        }),
                        Vt.move(i, { distance: 1, unit: "offset" }),
                        Vt.insertText(i, String(r.text), {
                          at: i.selection.focus.path,
                        })),
                      c(a),
                      f(!1),
                      Zn.focus(i);
                  },
                })
            );
          },
          Element: ({
            attributes: e,
            children: t,
            element: r,
            editorRef: u,
            fieldProps: a,
          }) => {
            var o, i;
            const l =
                null ===
                  (i =
                    null === (o = null == a ? void 0 : a.admin) || void 0 === o
                      ? void 0
                      : o.link) || void 0 === i
                  ? void 0
                  : i.fields,
              s = Dn(),
              c = (0, da.Z)(),
              { user: d } = (0, sa.a)(),
              f = (0, ca.bU)(),
              { openModal: h, toggleModal: D } = (0, Xu.useModal)(),
              [p, v] = (0, n.useState)(!1),
              [C, m] = (0, n.useState)(!1),
              [g, B] = (0, n.useState)({}),
              [E] = (0, n.useState)(() => {
                const e = [...fa(c)];
                return (
                  l &&
                    e.push({
                      name: "fields",
                      type: "group",
                      admin: {
                        style: {
                          margin: 0,
                          padding: 0,
                          borderTop: 0,
                          borderBottom: 0,
                        },
                      },
                      fields: l,
                    }),
                  e
                );
              }),
              A = `${ia}-${a.path}`,
              F = (0, n.useCallback)((e) => {
                e || m(e);
              }, []);
            return (
              (0, n.useEffect)(() => {
                (async () => {
                  const e = {
                      text: at.string(r),
                      linkType: r.linkType,
                      url: r.url,
                      doc: r.doc,
                      newTab: r.newTab,
                      fields: (0, pa.Z)(r.fields),
                    },
                    t = await (0, la.Z)({
                      fieldSchema: E,
                      data: e,
                      user: d,
                      operation: "update",
                      locale: f,
                    });
                  B(t);
                })();
              }, [p, r, E, d, f]),
              n.createElement(
                "span",
                { className: va, ...e },
                n.createElement(
                  "span",
                  { style: { userSelect: "none" }, contentEditable: !1 },
                  p &&
                    n.createElement(oa, {
                      modalSlug: A,
                      fieldSchema: E,
                      close: () => {
                        D(A), v(!1);
                      },
                      handleModalSubmit: (e) => {
                        D(A), v(!1);
                        const t = (0, ha.Z)(e, !0),
                          [, r] = et.above(s),
                          n = {
                            newTab: t.newTab,
                            url: t.url,
                            linkType: t.linkType,
                            doc: t.doc,
                          };
                        l && (n.fields = t.fields),
                          Vt.setNodes(s, n, { at: r }),
                          Vt.delete(s, {
                            at: s.selection.focus.path,
                            unit: "block",
                          }),
                          Vt.move(s, { distance: 1, unit: "offset" }),
                          Vt.insertText(s, String(t.text), {
                            at: s.selection.focus.path,
                          }),
                          Zn.focus(s);
                      },
                      initialState: g,
                    }),
                  n.createElement(Da.Z, {
                    buttonType: "none",
                    size: "small",
                    forceOpen: C,
                    onToggleOpen: F,
                    horizontalAlign: "left",
                    verticalAlign: "bottom",
                    boundingRef: u,
                    render: () => {
                      var e, t, u, a;
                      return n.createElement(
                        "div",
                        { className: "rich-text-link__popup" },
                        "internal" === r.linkType &&
                          (null === (e = r.doc) || void 0 === e
                            ? void 0
                            : e.relationTo) &&
                          (null === (t = r.doc) || void 0 === t
                            ? void 0
                            : t.value) &&
                          n.createElement(
                            n.Fragment,
                            null,
                            "Linked to ",
                            n.createElement(
                              "a",
                              {
                                className: "rich-text-link__link-label",
                                href: `${c.routes.admin}/collections/${r.doc.relationTo}/${r.doc.value}`,
                                target: "_blank",
                                rel: "noreferrer",
                              },
                              null ===
                                (a =
                                  null ===
                                    (u = c.collections.find(
                                      ({ slug: e }) => e === r.doc.relationTo
                                    )) || void 0 === u
                                    ? void 0
                                    : u.labels) || void 0 === a
                                ? void 0
                                : a.singular
                            )
                          ),
                        ("custom" === r.linkType || !r.linkType) &&
                          n.createElement(
                            "a",
                            {
                              className: "rich-text-link__link-label",
                              href: r.url,
                              target: "_blank",
                              rel: "noreferrer",
                            },
                            r.url
                          ),
                        n.createElement(Gu.Z, {
                          className: "rich-text-link__link-edit",
                          icon: "edit",
                          round: !0,
                          buttonStyle: "icon-label",
                          onClick: (e) => {
                            e.preventDefault(), m(!1), h(A), v(!0);
                          },
                          tooltip: "Edit",
                        }),
                        n.createElement(Gu.Z, {
                          className: "rich-text-link__link-close",
                          icon: "x",
                          round: !0,
                          buttonStyle: "icon-label",
                          onClick: (e) => {
                            e.preventDefault(), Ju(s);
                          },
                          tooltip: "Remove",
                        })
                      );
                    },
                  })
                ),
                n.createElement(
                  "span",
                  {
                    tabIndex: 0,
                    role: "button",
                    className: ["rich-text-link__button"]
                      .filter(Boolean)
                      .join(" "),
                    onKeyDown: (e) => {
                      "Enter" === e.key && m(!0);
                    },
                    onClick: () => m(!0),
                  },
                  t
                )
              )
            );
          },
          plugins: [
            (e) => {
              const t = e,
                { isInline: r } = t;
              return (t.isInline = (e) => "link" === e.type || r(e)), t;
            },
          ],
        },
        ma = Ca,
        ga = (e, t) => {
          var r;
          let n;
          try {
            n = et.parent(e, e.selection);
          } catch (e) {}
          if (
            (null === (r = null == n ? void 0 : n[1]) || void 0 === r
              ? void 0
              : r.length) > 0
          ) {
            const r = et.above(e, { at: n[1] });
            return Ke.isElement(r[0]) && r[0].type === t;
          }
          return !1;
        },
        Ba = "rich-text__button",
        Ea = ({ format: e, children: t, onClick: r, className: u }) => {
          const a = Dn(),
            o = (0, n.useCallback)(
              (t) => {
                t.preventDefault(), Tu(a, e);
              },
              [a, e]
            );
          return n.createElement(
            "button",
            {
              type: "button",
              className: [Ba, u, ga(a, e) && `${Ba}__button--active`]
                .filter(Boolean)
                .join(" "),
              onClick: r || o,
            },
            t
          );
        },
        Aa = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic ordered-list-icon",
            },
            n.createElement("path", {
              className: "fill",
              d: "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z",
            }),
            n.createElement("path", { fill: "none", d: "M0 0h24v24H0z" })
          );
      r(99529);
      const Fa = {
          Button: () =>
            n.createElement(Ea, { format: "ol" }, n.createElement(Aa, null)),
          Element: ({ attributes: e, children: t }) =>
            n.createElement("ol", { className: "rich-text-ol", ...e }, t),
        },
        wa = () =>
          n.createElement(
            "svg",
            {
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              focusable: "false",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              className: "graphic unordered-list-icon",
            },
            n.createElement("path", {
              className: "fill",
              d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z",
            }),
            n.createElement("path", { fill: "none", d: "M0 0h24v24H0V0z" })
          );
      r(88767);
      const ya = {
          Button: () =>
            n.createElement(Ea, { format: "ul" }, n.createElement(wa, null)),
          Element: ({ attributes: e, children: t }) =>
            n.createElement("ul", { className: "rich-text-ul", ...e }, t),
        },
        ba = {
          Element: (e) => {
            var t, r;
            const { attributes: u, element: a, children: o } = e,
              i =
                a.children.length >= 1 &&
                ju.includes(
                  null ===
                    (r =
                      null === (t = a.children) || void 0 === t
                        ? void 0
                        : t[0]) || void 0 === r
                    ? void 0
                    : r.type
                );
            return n.createElement(
              "li",
              { style: { listStyle: i ? "none" : void 0 }, ...u },
              o
            );
          },
        };
      r(30958);
      const xa = () =>
        n.createElement(
          "svg",
          {
            className: "icon icon--indent-left",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 25 25",
          },
          n.createElement("path", {
            d: "M16.005 9.61502L21.005 13.1864L21.005 6.04361L16.005 9.61502Z",
            className: "fill",
          }),
          n.createElement("rect", {
            x: "5",
            y: "5.68199",
            width: "9.0675",
            height: "2.15625",
            className: "fill",
          }),
          n.createElement("rect", {
            x: "5",
            y: "11.4738",
            width: "9.0675",
            height: "2.15625",
            className: "fill",
          }),
          n.createElement("rect", {
            x: "5",
            y: "17.2656",
            width: "16.005",
            height: "2.15625",
            className: "fill",
          })
        );
      r(73928);
      const Oa = () =>
          n.createElement(
            "svg",
            {
              className: "icon icon--indent-right",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 25 25",
            },
            n.createElement("path", {
              d: "M10 9.61502L5 6.04361L5 13.1864L10 9.61502Z",
              className: "fill",
            }),
            n.createElement("rect", {
              x: "11.9375",
              y: "5.68199",
              width: "9.0675",
              height: "2.15625",
              className: "fill",
            }),
            n.createElement("rect", {
              x: "11.9375",
              y: "11.4738",
              width: "9.0675",
              height: "2.15625",
              className: "fill",
            }),
            n.createElement("rect", {
              x: "5",
              y: "17.2656",
              width: "16.005",
              height: "2.15625",
              className: "fill",
            })
          ),
        ka = "indent",
        Pa = {
          Button: () => {
            const e = Dn(),
              t = (0, n.useCallback)(
                (t, r) => {
                  if (
                    (t.preventDefault(),
                    "left" === r &&
                      (Vt.unwrapNodes(e, {
                        match: (e) =>
                          Ke.isElement(e) && [ka, ...ju].includes(e.type),
                        split: !0,
                        mode: "lowest",
                      }),
                      Su(e, "li")))
                  ) {
                    const [, t] = et.parent(e, e.selection),
                      [, r] = t;
                    r > 0 || 0 === r
                      ? Vt.unwrapNodes(e, {
                          match: (e) => Ke.isElement(e) && "li" === e.type,
                          split: !0,
                          mode: "lowest",
                        })
                      : Vt.unsetNodes(e, ["type"]);
                  }
                  if ("right" === r) {
                    const t = Su(e, "ol"),
                      r = Su(e, "ul");
                    t || r
                      ? (Vt.wrapNodes(e, { type: "li", children: [] }),
                        Vt.wrapNodes(e, {
                          type: t ? "ol" : "ul",
                          children: [{ text: " " }],
                        }),
                        Vt.setNodes(e, { type: "li" }))
                      : Vt.wrapNodes(e, { type: ka, children: [] });
                  }
                  Zn.focus(e);
                },
                [e]
              ),
              r = Su(e, "li") || Su(e, ka);
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "button",
                {
                  type: "button",
                  className: [Mu, !r && `${Mu}--disabled`]
                    .filter(Boolean)
                    .join(" "),
                  onClick: r ? (e) => t(e, "left") : void 0,
                },
                n.createElement(xa, null)
              ),
              n.createElement(
                "button",
                {
                  type: "button",
                  className: Mu,
                  onClick: (e) => t(e, "right"),
                },
                n.createElement(Oa, null)
              )
            );
          },
          Element: ({ attributes: e, children: t }) =>
            n.createElement("div", { style: { paddingLeft: 25 }, ...e }, t),
        },
        Na = Pa,
        Sa = (e) => {
          const t = e,
            { isVoid: r } = t;
          return (t.isVoid = (e) => "relationship" === e.type || r(e)), t;
        };
      r(13981);
      const ja = () =>
        n.createElement(
          "svg",
          {
            className: "icon icon--relationship",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 25 25",
          },
          n.createElement("path", {
            d: "M19.0597 14.9691L19.0597 19.0946L6.01681 19.0946L6.01681 6.03028L10.0948 6.03028",
            className: "stroke",
            strokeWidth: "2",
          }),
          n.createElement("path", {
            d: "M19.0597 11.0039L19.0597 6.00387L14.0597 6.00387",
            className: "stroke",
            strokeWidth: "2",
          }),
          n.createElement("line", {
            x1: "18.7061",
            y1: "6.40767",
            x2: "13.0493",
            y2: "12.0645",
            className: "stroke",
            strokeWidth: "2",
          })
        );
      var Ta = r(47489);
      r(16654);
      const Ma = "rich-text-relationship",
        Ra = { depth: 0 },
        _a = (e) => {
          var t;
          const { attributes: r, children: u, element: a } = e,
            { relationTo: o, value: i } = a,
            {
              collections: l,
              serverURL: s,
              routes: { api: c },
            } = (0, da.Z)(),
            [d] = (0, n.useState)(() => l.find((e) => e.slug === o)),
            f = nn(),
            h = tu(),
            [{ data: D }] = (0, Ta.Z)(
              `${s}${c}/${d.slug}/${null == i ? void 0 : i.id}`,
              { initialParams: Ra }
            );
          return n.createElement(
            "div",
            {
              className: [Ma, f && h && `${Ma}--selected`]
                .filter(Boolean)
                .join(" "),
              contentEditable: !1,
              ...r,
            },
            n.createElement(ja, null),
            n.createElement(
              "div",
              { className: `${Ma}__wrap` },
              n.createElement(
                "div",
                { className: `${Ma}__label` },
                d.labels.singular,
                " ",
                "Relationship"
              ),
              n.createElement(
                "h5",
                null,
                D[
                  (null === (t = null == d ? void 0 : d.admin) || void 0 === t
                    ? void 0
                    : t.useAsTitle) || "id"
                ]
              )
            ),
            u
          );
        };
      var La = r(64012),
        za = r(41884),
        Wa = r(67670);
      const Ia = (e, t) =>
          e.reduce((e, r) => {
            var n, u, a, o;
            return (null ===
              (a =
                null ===
                  (u =
                    null === (n = null == t ? void 0 : t.collections) ||
                    void 0 === n
                      ? void 0
                      : n[r.slug]) || void 0 === u
                  ? void 0
                  : u.read) || void 0 === a
              ? void 0
              : a.permission) &&
              (null === (o = null == r ? void 0 : r.admin) || void 0 === o
                ? void 0
                : o.enableRichTextRelationship)
              ? [...e, { label: r.labels.plural, value: r.slug }]
              : e;
          }, []),
        Va = () => {
          const { collections: e } = (0, da.Z)(),
            { permissions: t } = (0, sa.a)(),
            [r, u] = (0, n.useState)(() => Ia(e, t)),
            { getData: a } = (0, La.useWatchForm)(),
            { relationTo: o } = a();
          return (
            (0, n.useEffect)(() => {
              u(Ia(e, t));
            }, [e, t]),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(Wa.Z, {
                required: !0,
                label: "Relation To",
                name: "relationTo",
                options: r,
              }),
              o &&
                n.createElement(za.Z, {
                  label: "Related Document",
                  name: "value",
                  relationTo: o,
                  required: !0,
                })
            )
          );
        };
      var Za = r(93780);
      const qa = (e, t) => {
        const r = ((e) => {
            var t;
            const r = Array.from(
                et.nodes(e, {
                  at: et.unhangRange(e, e.selection),
                  match: (e) =>
                    !et.isEditor(e) &&
                    Ke.isElement(e) &&
                    (!e.type || "p" === e.type),
                })
              ),
              n = null == r ? void 0 : r[(null == r ? void 0 : r.length) - 1];
            return (
              n &&
              Ke.isElement(n[0]) &&
              (!n[0].type || "p" === n[0].type) &&
              "" ===
                (null === (t = n[0].children) || void 0 === t
                  ? void 0
                  : t[0].text)
            );
          })(e),
          n = et.previous(e);
        r
          ? et.isVoid(e, null == n ? void 0 : n[0])
            ? (Vt.insertNodes(e, { children: [{ text: "" }] }),
              Vt.setNodes(e, t))
            : Vt.setNodes(e, t)
          : Vt.insertNodes(e, t),
          Vt.insertNodes(e, { children: [{ text: "" }] });
      };
      r(38723);
      const $a = {},
        Ha = "relationship-rich-text-button",
        Ua = {
          Button: ({ path: e }) => {
            const { toggleModal: t } = (0, Xu.useModal)(),
              r = Dn(),
              {
                serverURL: u,
                routes: { api: a },
                collections: o,
              } = (0, da.Z)(),
              [i, l] = (0, n.useState)(!1),
              [s, c] = (0, n.useState)(!1),
              [d] = (0, n.useState)(() =>
                o.find(({ admin: { enableRichTextRelationship: e } }) => e)
              ),
              f = `${e}-add-relationship`,
              h = (0, n.useCallback)(
                async (e, { relationTo: n, value: o }) => {
                  c(!0);
                  const i = await Za.E.get(`${u}${a}/${n}/${o}?depth=0`),
                    s = await i.json();
                  ((e, { value: t, relationTo: r }) => {
                    qa(e, {
                      type: "relationship",
                      value: t,
                      relationTo: r,
                      children: [{ text: " " }],
                    }),
                      Zn.focus(e);
                  })(r, { value: { id: s.id }, relationTo: n }),
                    t(f),
                    l(!1),
                    c(!1);
                },
                [r, t, f, a, u]
              );
            return (
              (0, n.useEffect)(() => {
                i && t(f);
              }, [i, t, f]),
              d
                ? n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      Ru,
                      {
                        className: Ha,
                        format: "relationship",
                        onClick: () => l(!0),
                      },
                      n.createElement(ja, null)
                    ),
                    i &&
                      n.createElement(
                        Xu.Modal,
                        {
                          slug: f,
                          className: "relationship-rich-text-button__modal",
                        },
                        n.createElement(
                          Qu.Z,
                          {
                            className:
                              "relationship-rich-text-button__modal-template",
                          },
                          n.createElement(
                            "header",
                            {
                              className:
                                "relationship-rich-text-button__header",
                            },
                            n.createElement("h3", null, "Add Relationship"),
                            n.createElement(
                              Gu.Z,
                              {
                                buttonStyle: "none",
                                onClick: () => {
                                  t(f), l(!1);
                                },
                              },
                              n.createElement(ea.Z, null)
                            )
                          ),
                          n.createElement(
                            ta.Z,
                            { onSubmit: h, initialData: $a, disabled: s },
                            n.createElement(Va, null),
                            n.createElement(ra.Z, null, "Add relationship")
                          )
                        )
                      )
                  )
                : null
            );
          },
          Element: _a,
          plugins: [Sa],
        },
        Ka = (e) => {
          const t = e,
            { isVoid: r } = t;
          return (t.isVoid = (e) => "upload" === e.type || r(e)), t;
        };
      var Ja = r(58499),
        Xa = r(75643),
        Ya = r(97591),
        Qa = r(21280),
        Ga = r(27656),
        eo = r(56628),
        to = r(64267),
        ro = r(10254);
      r(28083);
      const no = "rich-text-upload-modal",
        uo = ({
          closeModal: e,
          element: t,
          setRelatedCollectionConfig: r,
          relatedCollectionConfig: u,
          slug: a,
        }) => {
          var o, i;
          const {
              collections: l,
              serverURL: s,
              routes: { api: c },
            } = (0, da.Z)(),
            d = en(),
            [f, h] = n.useState(u),
            [D, p] = n.useState({ label: u.labels.singular, value: u.slug }),
            [v] = n.useState(() =>
              l.filter(
                ({ admin: { enableRichTextRelationship: e }, upload: t }) =>
                  Boolean(t) && e
              )
            ),
            [C, m] = n.useState(() => (0, ro.Z)(f)),
            [g, B] = n.useState(),
            [E, A] = n.useState(null),
            [F, w] = n.useState(null),
            [y, b] = n.useState(null),
            x = v.length > 1,
            O = `${s}${c}/${f.slug}`,
            [{ data: k }, { setParams: P }] = (0, Ta.Z)(O, {}),
            N = n.useCallback(
              (r) => {
                const n = {
                    type: "upload",
                    value: { id: r.id },
                    relationTo: f.slug,
                    children: [{ text: " " }],
                  },
                  u = Zn.findPath(d, t);
                Vt.setNodes(d, n, { at: u }), e();
              },
              [e, d, t, f]
            );
          return (
            n.useEffect(() => {
              const e = {};
              y && (e.page = y),
                F && (e.where = F),
                E && (e.sort = E),
                g && (e.limit = g),
                P(e);
            }, [P, y, E, F, g]),
            n.useEffect(() => {
              m((0, ro.Z)(f)), B(f.admin.pagination.defaultLimit);
            }, [f]),
            n.useEffect(() => {
              h(l.find(({ slug: e }) => D.value === e));
            }, [D, l]),
            n.createElement(
              Xu.Modal,
              { className: no, slug: a },
              n.createElement(
                Qu.Z,
                { width: "wide" },
                n.createElement(
                  "header",
                  { className: "rich-text-upload-modal__header" },
                  n.createElement("h1", null, "Choose", " ", f.labels.singular),
                  n.createElement(Gu.Z, {
                    icon: "x",
                    round: !0,
                    buttonStyle: "icon-label",
                    iconStyle: "with-border",
                    onClick: e,
                  })
                ),
                x &&
                  n.createElement(
                    "div",
                    {
                      className:
                        "rich-text-upload-modal__select-collection-wrap",
                    },
                    n.createElement(Bu.Z, {
                      label: "Select a Collection to Browse",
                    }),
                    n.createElement(Ya.Z, {
                      className: "rich-text-upload-modal__select-collection",
                      value: D,
                      onChange: p,
                      options: v.map((e) => ({
                        label: e.labels.singular,
                        value: e.slug,
                      })),
                    })
                  ),
                n.createElement(Qa.Z, {
                  collection: { ...f, fields: C },
                  enableColumns: !1,
                  enableSort: !0,
                  modifySearchQuery: !1,
                  handleSortChange: A,
                  handleWhereChange: w,
                }),
                n.createElement(Ga.Z, {
                  docs: null == k ? void 0 : k.docs,
                  collection: f,
                  onCardClick: (t) => {
                    N(t), r(f), e();
                  },
                }),
                n.createElement(
                  "div",
                  { className: "rich-text-upload-modal__page-controls" },
                  n.createElement(eo.Z, {
                    limit: k.limit,
                    totalPages: k.totalPages,
                    page: k.page,
                    hasPrevPage: k.hasPrevPage,
                    hasNextPage: k.hasNextPage,
                    prevPage: k.prevPage,
                    nextPage: k.nextPage,
                    numberOfNeighbors: 1,
                    onChange: b,
                    disableHistoryChange: !0,
                  }),
                  (null == k ? void 0 : k.totalDocs) > 0 &&
                    n.createElement(
                      n.Fragment,
                      null,
                      n.createElement(
                        "div",
                        { className: "rich-text-upload-modal__page-info" },
                        k.page,
                        "-",
                        k.totalPages > 1 ? k.limit : k.totalDocs,
                        " ",
                        "of",
                        " ",
                        k.totalDocs
                      ),
                      n.createElement(to.Z, {
                        limits:
                          null ===
                            (i =
                              null === (o = null == f ? void 0 : f.admin) ||
                              void 0 === o
                                ? void 0
                                : o.pagination) || void 0 === i
                            ? void 0
                            : i.limits,
                        limit: g,
                        modifySearchParams: !1,
                        handleChange: B,
                      })
                    )
                )
              )
            )
          );
        };
      r(99013);
      const ao = "edit-upload-modal",
        oo = ({
          slug: e,
          closeModal: t,
          relatedCollectionConfig: r,
          fieldSchema: u,
          element: a,
        }) => {
          const o = en(),
            [i, l] = (0, n.useState)({}),
            { user: s } = (0, sa.a)(),
            c = (0, ca.bU)(),
            d = (0, n.useCallback)(
              (e, r) => {
                const n = { fields: r },
                  u = Zn.findPath(o, a);
                Vt.setNodes(o, n, { at: u }), t();
              },
              [t, o, a]
            );
          return (
            (0, n.useEffect)(() => {
              (async () => {
                const e = await (0, la.Z)({
                  fieldSchema: u,
                  data: { ...((null == a ? void 0 : a.fields) || {}) },
                  user: s,
                  operation: "update",
                  locale: c,
                });
                l(e);
              })();
            }, [u, a.fields, s, c]),
            n.createElement(
              Xu.Modal,
              { slug: e, className: ao },
              n.createElement(
                Qu.Z,
                { width: "wide" },
                n.createElement(
                  "header",
                  { className: "edit-upload-modal__header" },
                  n.createElement(
                    "h1",
                    null,
                    "Edit",
                    " ",
                    r.labels.singular,
                    " ",
                    "data"
                  ),
                  n.createElement(Gu.Z, {
                    icon: "x",
                    round: !0,
                    buttonStyle: "icon-label",
                    onClick: t,
                  })
                ),
                n.createElement(
                  "div",
                  null,
                  n.createElement(
                    ta.Z,
                    { onSubmit: d, initialState: i },
                    n.createElement(ua.Z, {
                      readOnly: !1,
                      fieldTypes: na.Z,
                      fieldSchema: u,
                    }),
                    n.createElement(ra.Z, null, "Save changes")
                  )
                )
              )
            )
          );
        };
      r(52835);
      const io = "rich-text-upload",
        lo = { depth: 0 },
        so = ({
          attributes: e,
          children: t,
          element: r,
          path: u,
          fieldProps: a,
        }) => {
          var o, i, l, s;
          const { relationTo: c, value: d } = r,
            { toggleModal: f } = (0, Xu.useModal)(),
            {
              collections: h,
              serverURL: D,
              routes: { api: p },
            } = (0, da.Z)(),
            [v, C] = (0, n.useState)(void 0),
            [m, g] = (0, n.useState)(() => h.find((e) => e.slug === c)),
            B = en(),
            E = nn(),
            A = tu(),
            F = `${u}-edit-upload-${v}`,
            [{ data: w }] = (0, Ta.Z)(
              `${D}${p}/${m.slug}/${null == d ? void 0 : d.id}`,
              { initialParams: lo }
            ),
            y = (0, Xa.Z)(m, w),
            b = (0, n.useCallback)(() => {
              const e = Zn.findPath(B, r);
              Vt.removeNodes(B, { at: e });
            }, [B, r]),
            x = (0, n.useCallback)(() => {
              f(F), C(null);
            }, [f, F]);
          (0, n.useEffect)(() => {
            v && f(F);
          }, [v, f, F]);
          const O =
            null ===
              (s =
                null ===
                  (l =
                    null ===
                      (i =
                        null === (o = null == a ? void 0 : a.admin) ||
                        void 0 === o
                          ? void 0
                          : o.upload) || void 0 === i
                      ? void 0
                      : i.collections) || void 0 === l
                  ? void 0
                  : l[m.slug]) || void 0 === s
              ? void 0
              : s.fields;
          return n.createElement(
            "div",
            {
              className: [io, E && A && `${io}--selected`]
                .filter(Boolean)
                .join(" "),
              contentEditable: !1,
              ...e,
            },
            n.createElement(
              "div",
              { className: `${io}__card` },
              n.createElement(
                "div",
                { className: `${io}__topRow` },
                n.createElement(
                  "div",
                  { className: `${io}__thumbnail` },
                  y
                    ? n.createElement("img", {
                        src: y,
                        alt: null == w ? void 0 : w.filename,
                      })
                    : n.createElement(Ja.Z, null)
                ),
                n.createElement(
                  "div",
                  { className: `${io}__topRowRightPanel` },
                  n.createElement(
                    "div",
                    { className: `${io}__collectionLabel` },
                    m.labels.singular
                  ),
                  n.createElement(
                    "div",
                    { className: `${io}__actions` },
                    O &&
                      n.createElement(Gu.Z, {
                        icon: "edit",
                        round: !0,
                        buttonStyle: "icon-label",
                        className: `${io}__actionButton`,
                        onClick: (e) => {
                          e.preventDefault(), C("edit");
                        },
                        tooltip: "Edit",
                      }),
                    n.createElement(Gu.Z, {
                      icon: "swap",
                      round: !0,
                      buttonStyle: "icon-label",
                      className: `${io}__actionButton`,
                      onClick: (e) => {
                        e.preventDefault(), C("swap");
                      },
                      tooltip: "Swap Upload",
                    }),
                    n.createElement(Gu.Z, {
                      icon: "x",
                      round: !0,
                      buttonStyle: "icon-label",
                      className: `${io}__actionButton`,
                      onClick: (e) => {
                        e.preventDefault(), b();
                      },
                      tooltip: "Remove Upload",
                    })
                  )
                )
              ),
              n.createElement(
                "div",
                { className: `${io}__bottomRow` },
                n.createElement("strong", null, null == w ? void 0 : w.filename)
              )
            ),
            t,
            "swap" === v &&
              n.createElement(uo, {
                slug: F,
                element: r,
                closeModal: x,
                setRelatedCollectionConfig: g,
                relatedCollectionConfig: m,
              }),
            "edit" === v &&
              O &&
              n.createElement(oo, {
                slug: F,
                closeModal: x,
                relatedCollectionConfig: m,
                fieldSchema: O,
                element: r,
              })
          );
        };
      r(71168);
      const co = () =>
        n.createElement(
          "svg",
          {
            className: "icon icon--upload",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 25 25",
          },
          n.createElement("path", {
            d: "M20.06,5.12h-15v15h15Zm-2,2v7L15.37,11l-3.27,4.1-2-1.58-3,3.74V7.12Z",
            className: "fill",
          }),
          n.createElement("circle", {
            cx: "9.69",
            cy: "9.47",
            r: "0.97",
            className: "fill",
          })
        );
      r(59622);
      const fo = "upload-rich-text-button",
        ho = "rich-text-upload-modal",
        Do = ({ path: e }) => {
          var t, r, u;
          const { toggleModal: a, modalState: o } = (0, Xu.useModal)(),
            i = Dn(),
            {
              serverURL: l,
              routes: { api: s },
              collections: c,
            } = (0, da.Z)(),
            [d] = (0, n.useState)(() =>
              c.filter(
                ({ admin: { enableRichTextRelationship: e }, upload: t }) =>
                  Boolean(t) && e
              )
            ),
            [f, h] = (0, n.useState)(!1),
            [D, p] = (0, n.useState)(() => {
              const e = c.find(
                ({ admin: { enableRichTextRelationship: e }, upload: t }) =>
                  Boolean(t) && e
              );
              if (e) return { label: e.labels.singular, value: e.slug };
            }),
            [v, C] = (0, n.useState)(() =>
              c.find(
                ({ admin: { enableRichTextRelationship: e }, upload: t }) =>
                  Boolean(t) && e
              )
            ),
            [m, g] = (0, n.useState)(() => (v ? (0, ro.Z)(v) : void 0)),
            [B, E] = (0, n.useState)(),
            [A, F] = (0, n.useState)(null),
            [w, y] = (0, n.useState)(null),
            [b, x] = (0, n.useState)(null),
            O = `${e}-add-upload`,
            k = d.length > 1,
            P = null === (t = o[O]) || void 0 === t ? void 0 : t.isOpen,
            N = P ? `${l}${s}/${v.slug}` : null,
            [{ data: S }, { setParams: j }] = (0, Ta.Z)(N, {});
          return (
            (0, n.useEffect)(() => {
              v && g((0, ro.Z)(v));
            }, [v]),
            (0, n.useEffect)(() => {
              f && a(O);
            }, [f, a, O]),
            (0, n.useEffect)(() => {
              const e = {};
              b && (e.page = b),
                w && (e.where = w),
                A && (e.sort = A),
                B && (e.limit = B),
                j(e);
            }, [j, b, A, w, B]),
            (0, n.useEffect)(() => {
              D && C(c.find(({ slug: e }) => D.value === e));
            }, [D, c]),
            v
              ? n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    Ru,
                    { className: fo, format: "upload", onClick: () => h(!0) },
                    n.createElement(co, null)
                  ),
                  f &&
                    n.createElement(
                      Xu.Modal,
                      { className: ho, slug: O },
                      P &&
                        n.createElement(
                          Qu.Z,
                          { width: "wide" },
                          n.createElement(
                            "header",
                            { className: `${ho}__header` },
                            n.createElement(
                              "h1",
                              null,
                              "Add",
                              " ",
                              v.labels.singular
                            ),
                            n.createElement(Gu.Z, {
                              icon: "x",
                              round: !0,
                              buttonStyle: "icon-label",
                              iconStyle: "with-border",
                              onClick: () => {
                                a(O), h(!1);
                              },
                            })
                          ),
                          k &&
                            n.createElement(
                              "div",
                              { className: `${ho}__select-collection-wrap` },
                              n.createElement(Bu.Z, {
                                label: "Select a Collection to Browse",
                              }),
                              n.createElement(Ya.Z, {
                                className:
                                  "upload-rich-text-button__select-collection",
                                value: D,
                                onChange: p,
                                options: d.map((e) => ({
                                  label: e.labels.singular,
                                  value: e.slug,
                                })),
                              })
                            ),
                          n.createElement(Qa.Z, {
                            collection: { ...v, fields: m },
                            enableColumns: !1,
                            enableSort: !0,
                            modifySearchQuery: !1,
                            handleSortChange: F,
                            handleWhereChange: y,
                          }),
                          n.createElement(Ga.Z, {
                            docs: null == S ? void 0 : S.docs,
                            collection: v,
                            onCardClick: (e) => {
                              ((e, { value: t, relationTo: r }) => {
                                qa(e, {
                                  type: "upload",
                                  value: t,
                                  relationTo: r,
                                  children: [{ text: " " }],
                                }),
                                  Zn.focus(e);
                              })(i, {
                                value: { id: e.id },
                                relationTo: v.slug,
                              }),
                                h(!1),
                                a(O);
                            },
                          }),
                          n.createElement(
                            "div",
                            { className: `${ho}__page-controls` },
                            n.createElement(eo.Z, {
                              limit: S.limit,
                              totalPages: S.totalPages,
                              page: S.page,
                              hasPrevPage: S.hasPrevPage,
                              hasNextPage: S.hasNextPage,
                              prevPage: S.prevPage,
                              nextPage: S.nextPage,
                              numberOfNeighbors: 1,
                              onChange: x,
                              disableHistoryChange: !0,
                            }),
                            (null == S ? void 0 : S.totalDocs) > 0 &&
                              n.createElement(
                                n.Fragment,
                                null,
                                n.createElement(
                                  "div",
                                  { className: `${ho}__page-info` },
                                  S.page,
                                  "-",
                                  S.totalPages > 1 ? S.limit : S.totalDocs,
                                  " ",
                                  "of",
                                  " ",
                                  S.totalDocs
                                ),
                                n.createElement(to.Z, {
                                  limits:
                                    null ===
                                      (u =
                                        null ===
                                          (r = null == v ? void 0 : v.admin) ||
                                        void 0 === r
                                          ? void 0
                                          : r.pagination) || void 0 === u
                                      ? void 0
                                      : u.limits,
                                  limit: B,
                                  modifySearchParams: !1,
                                  handleChange: E,
                                })
                              )
                          )
                        )
                    )
                )
              : null
          );
        },
        po = {
          h1: Lu,
          h2: Wu,
          h3: Vu,
          h4: qu,
          h5: Hu,
          h6: Ku,
          link: ma,
          ol: Fa,
          ul: ya,
          li: ba,
          indent: Na,
          relationship: Ua,
          upload: { Button: Do, Element: so, plugins: [Ka] },
        },
        vo = {
          "mod+b": "bold",
          "mod+i": "italic",
          "mod+u": "underline",
          "mod+`": "code",
        },
        Co = (e, t) => ("function" == typeof t ? t(e) : e),
        mo = (e, t) =>
          t.reduce((e, t) => {
            if ("object" == typeof t && Array.isArray(t.plugins))
              return t.plugins.reduce(Co, e);
            if ("string" == typeof t) {
              if (po[t] && po[t].plugins) return po[t].plugins.reduce(Co, e);
              if (Nu[t] && Nu[t].plugins) return Nu[t].plugins.reduce(Co, e);
            }
            return e;
          }, e);
      var go = r(92077),
        Bo = r(77070);
      function Eo(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var Ao = new WeakMap(),
        Fo = new WeakMap();
      class wo {}
      class yo extends wo {
        constructor() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super();
          var { offset: t, path: r } = e;
          (this.offset = t), (this.path = r);
        }
      }
      class bo extends wo {
        constructor() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super();
          var { offset: t, path: r } = e;
          (this.offset = t), (this.path = r);
        }
      }
      var xo = (e) => Fo.get(e);
      function Oo(e, t) {
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
      function ko(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Oo(Object(r), !0).forEach(function (t) {
                Eo(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Oo(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Po = new WeakSet(),
        No = (e) => {
          var t = [],
            r = (e) => {
              if (null != e) {
                var n = t[t.length - 1];
                if ("string" == typeof e) {
                  var u = { text: e };
                  Po.add(u), (e = u);
                }
                if (wt.isText(e)) {
                  var a = e;
                  wt.isText(n) &&
                  Po.has(n) &&
                  Po.has(a) &&
                  wt.equals(n, a, { loose: !0 })
                    ? (n.text += a.text)
                    : t.push(a);
                } else if (Ke.isElement(e)) t.push(e);
                else {
                  if (!(e instanceof wo))
                    throw new Error(
                      "Unexpected hyperscript child object: ".concat(e)
                    );
                  var o = t[t.length - 1];
                  wt.isText(o) || (r(""), (o = t[t.length - 1])),
                    e instanceof yo
                      ? ((e, t) => {
                          var r = e.text.length;
                          Ao.set(e, [r, t]);
                        })(o, e)
                      : e instanceof bo &&
                        ((e, t) => {
                          var r = e.text.length;
                          Fo.set(e, [r, t]);
                        })(o, e);
                }
              }
            };
          for (var n of e.flat(1 / 0)) r(n);
          return t;
        };
      function So(e, t, r) {
        return ko(ko({}, t), {}, { children: No(r) });
      }
      function jo(e, t) {
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
      function To(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? jo(Object(r), !0).forEach(function (t) {
                Eo(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : jo(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Mo = {
          anchor: function (e, t, r) {
            return new yo(t);
          },
          cursor: function (e, t, r) {
            return [new yo(t), new bo(t)];
          },
          editor: function (e, t, r) {
            var n,
              u = [];
            for (var a of r) Ct.isRange(a) ? (n = a) : u.push(a);
            var o,
              i = No(u),
              l = {},
              s = Ce();
            for (var [c, d] of (Object.assign(s, t),
            (s.children = i),
            at.texts(s))) {
              var f = ((o = c), Ao.get(o)),
                h = xo(c);
              if (null != f) {
                var [D] = f;
                l.anchor = { path: d, offset: D };
              }
              if (null != h) {
                var [p] = h;
                l.focus = { path: d, offset: p };
              }
            }
            if (l.anchor && !l.focus)
              throw new Error(
                "Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<anchor />`. For collapsed selections, use `<cursor />` instead."
              );
            if (!l.anchor && l.focus)
              throw new Error(
                "Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<focus />`. For collapsed selections, use `<cursor />` instead."
              );
            return (
              null != n
                ? (s.selection = n)
                : Ct.isRange(l) && (s.selection = l),
              s
            );
          },
          element: So,
          focus: function (e, t, r) {
            return new bo(t);
          },
          fragment: function (e, t, r) {
            return No(r);
          },
          selection: function (e, t, r) {
            var n = r.find((e) => e instanceof yo),
              u = r.find((e) => e instanceof bo);
            if (!n || null == n.offset || null == n.path)
              throw new Error(
                "The <selection> hyperscript tag must have an <anchor> tag as a child with `path` and `offset` attributes defined."
              );
            if (!u || null == u.offset || null == u.path)
              throw new Error(
                "The <selection> hyperscript tag must have a <focus> tag as a child with `path` and `offset` attributes defined."
              );
            return ko(
              {
                anchor: { offset: n.offset, path: n.path },
                focus: { offset: u.offset, path: u.path },
              },
              t
            );
          },
          text: function (e, t, r) {
            var n = No(r);
            if (n.length > 1)
              throw new Error(
                "The <text> hyperscript tag must only contain a single node's worth of children."
              );
            var [u] = n;
            if ((null == u && (u = { text: "" }), !wt.isText(u)))
              throw new Error(
                "\n    The <text> hyperscript tag can only contain text content as children."
              );
            return Po.delete(u), Object.assign(u, t), u;
          },
        },
        Ro = (e) =>
          function (t, r) {
            for (
              var n = arguments.length, u = new Array(n > 2 ? n - 2 : 0), a = 2;
              a < n;
              a++
            )
              u[a - 2] = arguments[a];
            var i = e[t];
            if (!i)
              throw new Error(
                "No hyperscript creator found for tag: <".concat(t, ">")
              );
            null == r && (r = {}), o(r) || ((u = [r].concat(u)), (r = {}));
            var l = i(t, r, (u = u.filter((e) => Boolean(e)).flat()));
            return l;
          },
        _o = (e) => {
          var t = {},
            r = function (r) {
              var n = e[r];
              if ("object" != typeof n)
                throw new Error(
                  "Properties specified for a hyperscript shorthand should be an object, but for the custom element <"
                    .concat(r, ">  tag you passed: ")
                    .concat(n)
                );
              t[r] = (e, t, r) => So(0, To(To({}, n), t), r);
            };
          for (var n in e) r(n);
          return t;
        },
        Lo = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { elements: t = {} } = e,
            r = _o(t),
            n = To(To(To({}, Mo), r), e.creators),
            u = Ro(n);
          return u;
        })();
      const zo = {
          A: (e) => ({
            type: "link",
            newTab: "_blank" === e.getAttribute("target"),
            url: e.getAttribute("href"),
          }),
          BLOCKQUOTE: () => ({ type: "blockquote" }),
          H1: () => ({ type: "h1" }),
          H2: () => ({ type: "h2" }),
          H3: () => ({ type: "h3" }),
          H4: () => ({ type: "h4" }),
          H5: () => ({ type: "h5" }),
          H6: () => ({ type: "h6" }),
          LI: () => ({ type: "li" }),
          OL: () => ({ type: "ol" }),
          P: () => ({ type: "p" }),
          PRE: () => ({ type: "code" }),
          UL: () => ({ type: "ul" }),
        },
        Wo = {
          CODE: () => ({ code: !0 }),
          DEL: () => ({ strikethrough: !0 }),
          EM: () => ({ italic: !0 }),
          I: () => ({ italic: !0 }),
          S: () => ({ strikethrough: !0 }),
          STRONG: () => ({ bold: !0 }),
          U: () => ({ underline: !0 }),
        },
        Io = (e) => {
          if (3 === e.nodeType) return e.textContent;
          if (1 !== e.nodeType) return null;
          if ("BR" === e.nodeName) return "\n";
          const { nodeName: t } = e;
          let r = e;
          "PRE" === t &&
            e.childNodes[0] &&
            "CODE" === e.childNodes[0].nodeName &&
            ([r] = e.childNodes);
          let n = Array.from(r.childNodes).map(Io).flat();
          if ((0 === n.length && (n = [{ text: "" }]), "BODY" === e.nodeName))
            return Lo("fragment", {}, n);
          if (zo[t]) {
            const r = zo[t](e);
            return Lo("element", r, n);
          }
          if (Wo[t]) {
            const r = Wo[t](e);
            return n.map((e) => Lo("text", r, e));
          }
          return n;
        },
        Vo = (e) => {
          const { insertData: t } = e,
            r = e;
          return (
            (r.insertData = (e) => {
              if (!e.types.includes("application/x-slate-fragment")) {
                const t = e.getData("text/html");
                if (t) {
                  const e = new DOMParser().parseFromString(t, "text/html"),
                    n = Io(e.body);
                  return void Vt.insertFragment(r, n);
                }
              }
              t(e);
            }),
            r
          );
        },
        Zo = (e, t) => {
          const r = [...e];
          return (
            (e.indexOf("ul") > -1 || e.indexOf("ol") > -1) && r.push("li"),
            r.reduce(
              (e, r) =>
                "object" == typeof r && r.name
                  ? { ...e, [r.name]: r }
                  : "string" == typeof r && t[r]
                  ? { ...e, [r]: t[r] }
                  : e,
              {}
            )
          );
        },
        qo = ["h1", "h2", "h3", "h4", "h5", "h6", "link"],
        $o = (e) => {
          const t = e;
          return (
            (t.shouldBreakOutOnEnter = (e) => qo.includes(String(e.type))), t
          );
        };
      r(33329);
      const Ho = [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "ul",
          "ol",
          "indent",
          "link",
          "relationship",
          "upload",
        ],
        Uo = ["bold", "italic", "underline", "strikethrough", "code"],
        Ko = "rich-text",
        Jo = gu()((e) => {
          const {
              path: t,
              name: r,
              required: a,
              validate: o = vu.richText,
              label: i,
              admin: l,
              admin: {
                readOnly: s,
                style: c,
                className: d,
                width: f,
                placeholder: h,
                description: D,
                condition: p,
                hideGutter: v,
              } = {},
            } = e,
            C = (null == l ? void 0 : l.elements) || Ho,
            m = (null == l ? void 0 : l.leaves) || Uo,
            g = t || r,
            [B, E] = (0, n.useState)(!1),
            [A, F] = (0, n.useState)({}),
            [w, y] = (0, n.useState)({}),
            [b, x] = (0, n.useState)(""),
            O = (0, n.useRef)(null),
            k = (0, n.useCallback)(
              ({ attributes: t, children: r, element: u }) => {
                const a = A[null == u ? void 0 : u.type],
                  o = null == a ? void 0 : a.Element;
                return o
                  ? n.createElement(
                      o,
                      {
                        attributes: t,
                        element: u,
                        path: g,
                        fieldProps: e,
                        editorRef: O,
                      },
                      r
                    )
                  : n.createElement("div", { ...t }, r);
              },
              [A, g, e]
            ),
            P = (0, n.useCallback)(
              ({ attributes: t, children: r, leaf: u }) => {
                var a;
                const o = Object.keys(w).find((e) => u[e]);
                if (null === (a = w[o]) || void 0 === a ? void 0 : a.Leaf) {
                  const { Leaf: a } = w[o];
                  return n.createElement(
                    a,
                    {
                      attributes: t,
                      leaf: u,
                      path: g,
                      fieldProps: e,
                      editorRef: O,
                    },
                    r
                  );
                }
                return n.createElement("span", { ...t }, r);
              },
              [w, g, e]
            ),
            N = (0, n.useCallback)(
              (e, t) => o(e, { ...t, required: a }),
              [o, a]
            ),
            S = (0, Cu.Z)({ path: g, validate: N, condition: p }),
            {
              value: j,
              showError: T,
              setValue: M,
              errorMessage: R,
              initialValue: _,
            } = S,
            L = [
              Ko,
              "field-type",
              d,
              T && "error",
              s && `${Ko}--read-only`,
              !v && `${Ko}--gutter`,
            ]
              .filter(Boolean)
              .join(" "),
            z = (0, n.useMemo)(() => {
              let e = $o(
                ((e) => {
                  var t = e,
                    { apply: r } = t;
                  return (
                    (t.history = { undos: [], redos: [] }),
                    (t.redo = () => {
                      var { history: e } = t,
                        { redos: r } = e;
                      if (r.length > 0) {
                        var n = r[r.length - 1];
                        du.withoutSaving(t, () => {
                          et.withoutNormalizing(t, () => {
                            for (var e of n) t.apply(e);
                          });
                        }),
                          e.redos.pop(),
                          e.undos.push(n);
                      }
                    }),
                    (t.undo = () => {
                      var { history: e } = t,
                        { undos: r } = e;
                      if (r.length > 0) {
                        var n = r[r.length - 1];
                        du.withoutSaving(t, () => {
                          et.withoutNormalizing(t, () => {
                            var e = n.map(lt.inverse).reverse();
                            for (var r of e) t.apply(r);
                          });
                        }),
                          e.redos.push(n),
                          e.undos.pop();
                      }
                    }),
                    (t.apply = (e) => {
                      var { operations: n, history: u } = t,
                        { undos: a } = u,
                        o = a[a.length - 1],
                        i = o && o[o.length - 1],
                        l = Du(e, i),
                        s = du.isSaving(t),
                        c = du.isMerging(t);
                      if ((null == s && (s = hu(e)), s)) {
                        if (
                          (null == c &&
                            (c =
                              null != o && (0 !== n.length || fu(e, i) || l)),
                          o && c)
                        )
                          l && o.pop(), o.push(e);
                        else {
                          var d = [e];
                          a.push(d);
                        }
                        for (; a.length > 100; ) a.shift();
                        pu(e) && (u.redos = []);
                      }
                      r(e);
                    }),
                    t
                  );
                })(ou(Ce()))
              );
              return (e = Vo(e)), (e = mo(e, C)), (e = mo(e, m)), e;
            }, [C, m]);
          if (
            ((0, n.useEffect)(() => {
              if (!B) {
                const e = Zo(C, po),
                  t = Zo(m, Nu);
                F(e), y(t), E(!0);
              }
            }, [B, C, m]),
            (0, n.useEffect)(() => {
              x(JSON.stringify(_ || ""));
            }, [_]),
            !B)
          )
            return null;
          let W = j;
          if ("string" == typeof W)
            try {
              W = JSON.parse(W);
            } catch (e) {}
          return (
            W || (W = go.default),
            n.createElement(
              "div",
              { key: b, className: L, style: { ...c, width: f } },
              n.createElement(
                "div",
                { className: `${Ko}__wrap` },
                n.createElement(Eu.Z, { showError: T, message: R }),
                n.createElement(Bu.Z, {
                  htmlFor: `field-${g.replace(/\./gi, "__")}`,
                  label: i,
                  required: a,
                }),
                n.createElement(
                  nu,
                  {
                    editor: z,
                    value: W,
                    onChange: (e) => {
                      e !== go.default && e !== j && M(e);
                    },
                  },
                  n.createElement(
                    "div",
                    { className: `${Ko}__wrapper` },
                    n.createElement(
                      "div",
                      { className: `${Ko}__toolbar` },
                      n.createElement(
                        "div",
                        { className: `${Ko}__toolbar-wrap` },
                        C.map((t, r) => {
                          let u;
                          "object" == typeof t &&
                            (null == t ? void 0 : t.name) &&
                            (u = t.name),
                            "string" == typeof t && (u = t);
                          const a = A[u],
                            o = null == a ? void 0 : a.Button;
                          return o
                            ? n.createElement(o, {
                                fieldProps: e,
                                key: r,
                                path: g,
                              })
                            : null;
                        }),
                        m.map((t, r) => {
                          let u;
                          "object" == typeof t &&
                            (null == t ? void 0 : t.name) &&
                            (u = t.name),
                            "string" == typeof t && (u = t);
                          const a = w[u],
                            o = null == a ? void 0 : a.Button;
                          return o
                            ? n.createElement(o, {
                                fieldProps: e,
                                key: r,
                                path: g,
                              })
                            : null;
                        })
                      )
                    ),
                    n.createElement(
                      "div",
                      { className: `${Ko}__editor`, ref: O },
                      n.createElement(iu, {
                        id: `field-${g.replace(/\./gi, "__")}`,
                        className: `${Ko}__input`,
                        renderElement: k,
                        renderLeaf: P,
                        placeholder: h,
                        spellCheck: !0,
                        readOnly: s,
                        onKeyDown: (e) => {
                          if ("Enter" === e.key)
                            if (e.shiftKey)
                              e.preventDefault(), z.insertText("\n");
                            else {
                              const t = at.descendant(
                                z,
                                z.selection.anchor.path.slice(0, -1)
                              );
                              if (
                                Ke.isElement(t) &&
                                z.shouldBreakOutOnEnter(t)
                              ) {
                                e.preventDefault();
                                const t = at.descendant(
                                  z,
                                  z.selection.anchor.path
                                );
                                wt.isText(t) &&
                                String(t.text).length ===
                                  z.selection.anchor.offset
                                  ? Vt.insertNodes(z, {
                                      children: [{ text: "" }],
                                    })
                                  : (Vt.splitNodes(z), Vt.setNodes(z, {}));
                              }
                            }
                          if ("Backspace" === e.key) {
                            const e = at.descendant(
                              z,
                              z.selection.anchor.path.slice(0, -1)
                            );
                            if (Ke.isElement(e) && "li" === e.type) {
                              const e = at.descendant(
                                z,
                                z.selection.anchor.path
                              );
                              wt.isText(e) &&
                                1 === String(e.text).length &&
                                (Vt.unwrapNodes(z, {
                                  match: (e) =>
                                    Ke.isElement(e) && ju.includes(e.type),
                                  split: !0,
                                }),
                                Vt.setNodes(z, {}));
                            } else z.isVoid(e) && Vt.removeNodes(z);
                          }
                          Object.keys(vo).forEach((t) => {
                            if ((0, u.ZP)(t, e)) {
                              e.preventDefault();
                              Fu(z, vo[t]);
                            }
                          });
                        },
                      })
                    )
                  )
                ),
                n.createElement(Bo.Z, { value: j, description: D })
              )
            )
          );
        });
    },
    59619: (e, t) => {
      "use strict";
      for (
        var r =
            "undefined" != typeof window &&
            /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
          n = {
            alt: "altKey",
            control: "ctrlKey",
            meta: "metaKey",
            shift: "shiftKey",
          },
          u = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: r ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta",
          },
          a = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            " ": 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            delete: 46,
            meta: 91,
            numlock: 144,
            scrolllock: 145,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222,
          },
          o = 1;
        o < 20;
        o++
      )
        a["f" + o] = 111 + o;
      function i(e, t, r) {
        t && !("byKey" in t) && ((r = t), (t = null)),
          Array.isArray(e) || (e = [e]);
        var n = e.map(function (e) {
            return l(e, t);
          }),
          u = function (e) {
            return n.some(function (t) {
              return s(t, e);
            });
          };
        return null == r ? u : u(r);
      }
      function l(e, t) {
        var r = t && t.byKey,
          u = {},
          a = (e = e.replace("++", "+add")).split("+"),
          o = a.length;
        for (var i in n) u[n[i]] = !1;
        var l = !0,
          s = !1,
          f = void 0;
        try {
          for (
            var h, D = a[Symbol.iterator]();
            !(l = (h = D.next()).done);
            l = !0
          ) {
            var p = h.value,
              v = p.endsWith("?") && p.length > 1;
            v && (p = p.slice(0, -1));
            var C = d(p),
              m = n[C];
            (1 !== o && m) || (r ? (u.key = C) : (u.which = c(p))),
              m && (u[m] = !v || null);
          }
        } catch (e) {
          (s = !0), (f = e);
        } finally {
          try {
            !l && D.return && D.return();
          } finally {
            if (s) throw f;
          }
        }
        return u;
      }
      function s(e, t) {
        for (var r in e) {
          var n = e[r],
            u = void 0;
          if (
            null != n &&
            (null !=
              (u =
                "key" === r && null != t.key
                  ? t.key.toLowerCase()
                  : "which" === r
                  ? 91 === n && 93 === t.which
                    ? 91
                    : t.which
                  : t[r]) ||
              !1 !== n) &&
            u !== n
          )
            return !1;
        }
        return !0;
      }
      function c(e) {
        return (e = d(e)), a[e] || e.toUpperCase().charCodeAt(0);
      }
      function d(e) {
        return (e = e.toLowerCase()), (e = u[e] || e);
      }
      t.TB = function (e, t) {
        return i(e, { byKey: !0 }, t);
      };
    },
  },
]);
