/*! For license information please see 304.0287affe5d2ed1672539.js.LICENSE.txt */
(self.webpackChunkpayload_starter_typescript =
  self.webpackChunkpayload_starter_typescript || []).push([
  [304],
  {
    92381: function (e, t) {
      !(function (e) {
        "use strict";
        function t() {}
        function n(e, t, n, r, l) {
          for (var i = 0, o = t.length, a = 0, s = 0; i < o; i++) {
            var d = t[i];
            if (d.removed) {
              if (
                ((d.value = e.join(r.slice(s, s + d.count))),
                (s += d.count),
                i && t[i - 1].added)
              ) {
                var c = t[i - 1];
                (t[i - 1] = t[i]), (t[i] = c);
              }
            } else {
              if (!d.added && l) {
                var u = n.slice(a, a + d.count);
                (u = u.map(function (e, t) {
                  var n = r[s + t];
                  return n.length > e.length ? n : e;
                })),
                  (d.value = e.join(u));
              } else d.value = e.join(n.slice(a, a + d.count));
              (a += d.count), d.added || (s += d.count);
            }
          }
          var f = t[o - 1];
          return (
            o > 1 &&
              "string" == typeof f.value &&
              (f.added || f.removed) &&
              e.equals("", f.value) &&
              ((t[o - 2].value += f.value), t.pop()),
            t
          );
        }
        function r(e) {
          return { newPos: e.newPos, components: e.components.slice(0) };
        }
        t.prototype = {
          diff: function (e, t) {
            var l =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = l.callback;
            "function" == typeof l && ((i = l), (l = {})), (this.options = l);
            var o = this;
            function a(e) {
              return i
                ? (setTimeout(function () {
                    i(void 0, e);
                  }, 0),
                  !0)
                : e;
            }
            (e = this.castInput(e)),
              (t = this.castInput(t)),
              (e = this.removeEmpty(this.tokenize(e)));
            var s = (t = this.removeEmpty(this.tokenize(t))).length,
              d = e.length,
              c = 1,
              u = s + d,
              f = [{ newPos: -1, components: [] }],
              p = this.extractCommon(f[0], t, e, 0);
            if (f[0].newPos + 1 >= s && p + 1 >= d)
              return a([{ value: this.join(t), count: t.length }]);
            function m() {
              for (var l = -1 * c; l <= c; l += 2) {
                var i = void 0,
                  u = f[l - 1],
                  p = f[l + 1],
                  m = (p ? p.newPos : 0) - l;
                u && (f[l - 1] = void 0);
                var v = u && u.newPos + 1 < s,
                  h = p && 0 <= m && m < d;
                if (v || h) {
                  if (
                    (!v || (h && u.newPos < p.newPos)
                      ? ((i = r(p)), o.pushComponent(i.components, void 0, !0))
                      : ((i = u).newPos++,
                        o.pushComponent(i.components, !0, void 0)),
                    (m = o.extractCommon(i, t, e, l)),
                    i.newPos + 1 >= s && m + 1 >= d)
                  )
                    return a(n(o, i.components, t, e, o.useLongestToken));
                  f[l] = i;
                } else f[l] = void 0;
              }
              c++;
            }
            if (i)
              !(function e() {
                setTimeout(function () {
                  if (c > u) return i();
                  m() || e();
                }, 0);
              })();
            else
              for (; c <= u; ) {
                var v = m();
                if (v) return v;
              }
          },
          pushComponent: function (e, t, n) {
            var r = e[e.length - 1];
            r && r.added === t && r.removed === n
              ? (e[e.length - 1] = { count: r.count + 1, added: t, removed: n })
              : e.push({ count: 1, added: t, removed: n });
          },
          extractCommon: function (e, t, n, r) {
            for (
              var l = t.length, i = n.length, o = e.newPos, a = o - r, s = 0;
              o + 1 < l && a + 1 < i && this.equals(t[o + 1], n[a + 1]);

            )
              o++, a++, s++;
            return s && e.components.push({ count: s }), (e.newPos = o), a;
          },
          equals: function (e, t) {
            return this.options.comparator
              ? this.options.comparator(e, t)
              : e === t ||
                  (this.options.ignoreCase &&
                    e.toLowerCase() === t.toLowerCase());
          },
          removeEmpty: function (e) {
            for (var t = [], n = 0; n < e.length; n++) e[n] && t.push(e[n]);
            return t;
          },
          castInput: function (e) {
            return e;
          },
          tokenize: function (e) {
            return e.split("");
          },
          join: function (e) {
            return e.join("");
          },
        };
        var l = new t();
        function i(e, t, n) {
          return l.diff(e, t, n);
        }
        function o(e, t) {
          if ("function" == typeof e) t.callback = e;
          else if (e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          return t;
        }
        var a = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
          s = /\S/,
          d = new t();
        function c(e, t, n) {
          return (n = o(n, { ignoreWhitespace: !0 })), d.diff(e, t, n);
        }
        function u(e, t, n) {
          return d.diff(e, t, n);
        }
        (d.equals = function (e, t) {
          return (
            this.options.ignoreCase &&
              ((e = e.toLowerCase()), (t = t.toLowerCase())),
            e === t ||
              (this.options.ignoreWhitespace && !s.test(e) && !s.test(t))
          );
        }),
          (d.tokenize = function (e) {
            for (
              var t = e.split(/(\s+|[()[\]{}'"]|\b)/), n = 0;
              n < t.length - 1;
              n++
            )
              !t[n + 1] &&
                t[n + 2] &&
                a.test(t[n]) &&
                a.test(t[n + 2]) &&
                ((t[n] += t[n + 2]), t.splice(n + 1, 2), n--);
            return t;
          });
        var f = new t();
        function p(e, t, n) {
          return f.diff(e, t, n);
        }
        function m(e, t, n) {
          var r = o(n, { ignoreWhitespace: !0 });
          return f.diff(e, t, r);
        }
        f.tokenize = function (e) {
          var t = [],
            n = e.split(/(\n|\r\n)/);
          n[n.length - 1] || n.pop();
          for (var r = 0; r < n.length; r++) {
            var l = n[r];
            r % 2 && !this.options.newlineIsToken
              ? (t[t.length - 1] += l)
              : (this.options.ignoreWhitespace && (l = l.trim()), t.push(l));
          }
          return t;
        };
        var v = new t();
        function h(e, t, n) {
          return v.diff(e, t, n);
        }
        v.tokenize = function (e) {
          return e.split(/(\S.+?[.!?])(?=\s+|$)/);
        };
        var g = new t();
        function y(e, t, n) {
          return g.diff(e, t, n);
        }
        function b(e) {
          return (
            (b =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            b(e)
          );
        }
        function w(e) {
          return k(e) || E(e) || N();
        }
        function k(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n;
          }
        }
        function E(e) {
          if (
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        }
        function N() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        }
        g.tokenize = function (e) {
          return e.split(/([{}:;,]|\s+)/);
        };
        var L = Object.prototype.toString,
          C = new t();
        function D(e, t, n) {
          return C.diff(e, t, n);
        }
        function S(e, t, n, r, l) {
          var i, o;
          for (
            t = t || [], n = n || [], r && (e = r(l, e)), i = 0;
            i < t.length;
            i += 1
          )
            if (t[i] === e) return n[i];
          if ("[object Array]" === L.call(e)) {
            for (
              t.push(e), o = new Array(e.length), n.push(o), i = 0;
              i < e.length;
              i += 1
            )
              o[i] = S(e[i], t, n, r, l);
            return t.pop(), n.pop(), o;
          }
          if (
            (e && e.toJSON && (e = e.toJSON()), "object" === b(e) && null !== e)
          ) {
            t.push(e), (o = {}), n.push(o);
            var a,
              s = [];
            for (a in e) e.hasOwnProperty(a) && s.push(a);
            for (s.sort(), i = 0; i < s.length; i += 1)
              o[(a = s[i])] = S(e[a], t, n, r, a);
            t.pop(), n.pop();
          } else o = e;
          return o;
        }
        (C.useLongestToken = !0),
          (C.tokenize = f.tokenize),
          (C.castInput = function (e) {
            var t = this.options,
              n = t.undefinedReplacement,
              r = t.stringifyReplacer,
              l =
                void 0 === r
                  ? function (e, t) {
                      return void 0 === t ? n : t;
                    }
                  : r;
            return "string" == typeof e
              ? e
              : JSON.stringify(S(e, null, null, l), l, "  ");
          }),
          (C.equals = function (e, n) {
            return t.prototype.equals.call(
              C,
              e.replace(/,([\r\n])/g, "$1"),
              n.replace(/,([\r\n])/g, "$1")
            );
          });
        var x = new t();
        function T(e, t, n) {
          return x.diff(e, t, n);
        }
        function A(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.split(/\r\n|[\n\v\f\r\x85]/),
            r = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
            l = [],
            i = 0;
          function o() {
            var e = {};
            for (l.push(e); i < n.length; ) {
              var r = n[i];
              if (/^(\-\-\-|\+\+\+|@@)\s/.test(r)) break;
              var o = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r);
              o && (e.index = o[1]), i++;
            }
            for (a(e), a(e), e.hunks = []; i < n.length; ) {
              var d = n[i];
              if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(d)) break;
              if (/^@@/.test(d)) e.hunks.push(s());
              else {
                if (d && t.strict)
                  throw new Error(
                    "Unknown line " + (i + 1) + " " + JSON.stringify(d)
                  );
                i++;
              }
            }
          }
          function a(e) {
            var t = /^(---|\+\+\+)\s+(.*)$/.exec(n[i]);
            if (t) {
              var r = "---" === t[1] ? "old" : "new",
                l = t[2].split("\t", 2),
                o = l[0].replace(/\\\\/g, "\\");
              /^".*"$/.test(o) && (o = o.substr(1, o.length - 2)),
                (e[r + "FileName"] = o),
                (e[r + "Header"] = (l[1] || "").trim()),
                i++;
            }
          }
          function s() {
            for (
              var e = i,
                l = n[i++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),
                o = {
                  oldStart: +l[1],
                  oldLines: +l[2] || 1,
                  newStart: +l[3],
                  newLines: +l[4] || 1,
                  lines: [],
                  linedelimiters: [],
                },
                a = 0,
                s = 0;
              i < n.length &&
              !(
                0 === n[i].indexOf("--- ") &&
                i + 2 < n.length &&
                0 === n[i + 1].indexOf("+++ ") &&
                0 === n[i + 2].indexOf("@@")
              );
              i++
            ) {
              var d = 0 == n[i].length && i != n.length - 1 ? " " : n[i][0];
              if ("+" !== d && "-" !== d && " " !== d && "\\" !== d) break;
              o.lines.push(n[i]),
                o.linedelimiters.push(r[i] || "\n"),
                "+" === d ? a++ : "-" === d ? s++ : " " === d && (a++, s++);
            }
            if (
              (a || 1 !== o.newLines || (o.newLines = 0),
              s || 1 !== o.oldLines || (o.oldLines = 0),
              t.strict)
            ) {
              if (a !== o.newLines)
                throw new Error(
                  "Added line count did not match for hunk at line " + (e + 1)
                );
              if (s !== o.oldLines)
                throw new Error(
                  "Removed line count did not match for hunk at line " + (e + 1)
                );
            }
            return o;
          }
          for (; i < n.length; ) o();
          return l;
        }
        function _(e, t, n) {
          var r = !0,
            l = !1,
            i = !1,
            o = 1;
          return function a() {
            if (r && !i) {
              if ((l ? o++ : (r = !1), e + o <= n)) return o;
              i = !0;
            }
            if (!l) return i || (r = !0), t <= e - o ? -o++ : ((l = !0), a());
          };
        }
        function B(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (("string" == typeof t && (t = A(t)), Array.isArray(t))) {
            if (t.length > 1)
              throw new Error("applyPatch only works with a single input.");
            t = t[0];
          }
          var r,
            l,
            i = e.split(/\r\n|[\n\v\f\r\x85]/),
            o = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
            a = t.hunks,
            s =
              n.compareLine ||
              function (e, t, n, r) {
                return t === r;
              },
            d = 0,
            c = n.fuzzFactor || 0,
            u = 0,
            f = 0;
          function p(e, t) {
            for (var n = 0; n < e.lines.length; n++) {
              var r = e.lines[n],
                l = r.length > 0 ? r[0] : " ",
                o = r.length > 0 ? r.substr(1) : r;
              if (" " === l || "-" === l) {
                if (!s(t + 1, i[t], l, o) && ++d > c) return !1;
                t++;
              }
            }
            return !0;
          }
          for (var m = 0; m < a.length; m++) {
            for (
              var v = a[m],
                h = i.length - v.oldLines,
                g = 0,
                y = f + v.oldStart - 1,
                b = _(y, u, h);
              void 0 !== g;
              g = b()
            )
              if (p(v, y + g)) {
                v.offset = f += g;
                break;
              }
            if (void 0 === g) return !1;
            u = v.offset + v.oldStart + v.oldLines;
          }
          for (var w = 0, k = 0; k < a.length; k++) {
            var E = a[k],
              N = E.oldStart + E.offset + w - 1;
            (w += E.newLines - E.oldLines), N < 0 && (N = 0);
            for (var L = 0; L < E.lines.length; L++) {
              var C = E.lines[L],
                D = C.length > 0 ? C[0] : " ",
                S = C.length > 0 ? C.substr(1) : C,
                x = E.linedelimiters[L];
              if (" " === D) N++;
              else if ("-" === D) i.splice(N, 1), o.splice(N, 1);
              else if ("+" === D) i.splice(N, 0, S), o.splice(N, 0, x), N++;
              else if ("\\" === D) {
                var T = E.lines[L - 1] ? E.lines[L - 1][0] : null;
                "+" === T ? (r = !0) : "-" === T && (l = !0);
              }
            }
          }
          if (r) for (; !i[i.length - 1]; ) i.pop(), o.pop();
          else l && (i.push(""), o.push("\n"));
          for (var B = 0; B < i.length - 1; B++) i[B] = i[B] + o[B];
          return i.join("");
        }
        function F(e, t) {
          "string" == typeof e && (e = A(e));
          var n = 0;
          function r() {
            var l = e[n++];
            if (!l) return t.complete();
            t.loadFile(l, function (e, n) {
              if (e) return t.complete(e);
              var i = B(n, l, t);
              t.patched(l, i, function (e) {
                if (e) return t.complete(e);
                r();
              });
            });
          }
          r();
        }
        function $(e, t, n, r, l, i, o) {
          o || (o = {}), void 0 === o.context && (o.context = 4);
          var a = p(n, r, o);
          function s(e) {
            return e.map(function (e) {
              return " " + e;
            });
          }
          a.push({ value: "", lines: [] });
          for (
            var d = [],
              c = 0,
              u = 0,
              f = [],
              m = 1,
              v = 1,
              h = function (e) {
                var t = a[e],
                  l = t.lines || t.value.replace(/\n$/, "").split("\n");
                if (((t.lines = l), t.added || t.removed)) {
                  var i;
                  if (!c) {
                    var p = a[e - 1];
                    (c = m),
                      (u = v),
                      p &&
                        ((f =
                          o.context > 0 ? s(p.lines.slice(-o.context)) : []),
                        (c -= f.length),
                        (u -= f.length));
                  }
                  (i = f).push.apply(
                    i,
                    w(
                      l.map(function (e) {
                        return (t.added ? "+" : "-") + e;
                      })
                    )
                  ),
                    t.added ? (v += l.length) : (m += l.length);
                } else {
                  if (c)
                    if (l.length <= 2 * o.context && e < a.length - 2) {
                      var h;
                      (h = f).push.apply(h, w(s(l)));
                    } else {
                      var g,
                        y = Math.min(l.length, o.context);
                      (g = f).push.apply(g, w(s(l.slice(0, y))));
                      var b = {
                        oldStart: c,
                        oldLines: m - c + y,
                        newStart: u,
                        newLines: v - u + y,
                        lines: f,
                      };
                      if (e >= a.length - 2 && l.length <= o.context) {
                        var k = /\n$/.test(n),
                          E = /\n$/.test(r),
                          N = 0 == l.length && f.length > b.oldLines;
                        !k &&
                          N &&
                          f.splice(
                            b.oldLines,
                            0,
                            "\\ No newline at end of file"
                          ),
                          ((k || N) && E) ||
                            f.push("\\ No newline at end of file");
                      }
                      d.push(b), (c = 0), (u = 0), (f = []);
                    }
                  (m += l.length), (v += l.length);
                }
              },
              g = 0;
            g < a.length;
            g++
          )
            h(g);
          return {
            oldFileName: e,
            newFileName: t,
            oldHeader: l,
            newHeader: i,
            hunks: d,
          };
        }
        function O(e, t, n, r, l, i, o) {
          var a = $(e, t, n, r, l, i, o),
            s = [];
          e == t && s.push("Index: " + e),
            s.push(
              "==================================================================="
            ),
            s.push(
              "--- " +
                a.oldFileName +
                (void 0 === a.oldHeader ? "" : "\t" + a.oldHeader)
            ),
            s.push(
              "+++ " +
                a.newFileName +
                (void 0 === a.newHeader ? "" : "\t" + a.newHeader)
            );
          for (var d = 0; d < a.hunks.length; d++) {
            var c = a.hunks[d];
            s.push(
              "@@ -" +
                c.oldStart +
                "," +
                c.oldLines +
                " +" +
                c.newStart +
                "," +
                c.newLines +
                " @@"
            ),
              s.push.apply(s, c.lines);
          }
          return s.join("\n") + "\n";
        }
        function R(e, t, n, r, l, i) {
          return O(e, e, t, n, r, l, i);
        }
        function V(e, t) {
          return e.length === t.length && P(e, t);
        }
        function P(e, t) {
          if (t.length > e.length) return !1;
          for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
          return !0;
        }
        function j(e) {
          var t = ne(e.lines),
            n = t.oldLines,
            r = t.newLines;
          void 0 !== n ? (e.oldLines = n) : delete e.oldLines,
            void 0 !== r ? (e.newLines = r) : delete e.newLines;
        }
        function M(e, t, n) {
          (e = I(e, n)), (t = I(t, n));
          var r = {};
          (e.index || t.index) && (r.index = e.index || t.index),
            (e.newFileName || t.newFileName) &&
              (H(e)
                ? H(t)
                  ? ((r.oldFileName = G(r, e.oldFileName, t.oldFileName)),
                    (r.newFileName = G(r, e.newFileName, t.newFileName)),
                    (r.oldHeader = G(r, e.oldHeader, t.oldHeader)),
                    (r.newHeader = G(r, e.newHeader, t.newHeader)))
                  : ((r.oldFileName = e.oldFileName),
                    (r.newFileName = e.newFileName),
                    (r.oldHeader = e.oldHeader),
                    (r.newHeader = e.newHeader))
                : ((r.oldFileName = t.oldFileName || e.oldFileName),
                  (r.newFileName = t.newFileName || e.newFileName),
                  (r.oldHeader = t.oldHeader || e.oldHeader),
                  (r.newHeader = t.newHeader || e.newHeader))),
            (r.hunks = []);
          for (
            var l = 0, i = 0, o = 0, a = 0;
            l < e.hunks.length || i < t.hunks.length;

          ) {
            var s = e.hunks[l] || { oldStart: 1 / 0 },
              d = t.hunks[i] || { oldStart: 1 / 0 };
            if (W(s, d))
              r.hunks.push(Z(s, o)), l++, (a += s.newLines - s.oldLines);
            else if (W(d, s))
              r.hunks.push(Z(d, a)), i++, (o += d.newLines - d.oldLines);
            else {
              var c = {
                oldStart: Math.min(s.oldStart, d.oldStart),
                oldLines: 0,
                newStart: Math.min(s.newStart + o, d.oldStart + a),
                newLines: 0,
                lines: [],
              };
              z(c, s.oldStart, s.lines, d.oldStart, d.lines),
                i++,
                l++,
                r.hunks.push(c);
            }
          }
          return r;
        }
        function I(e, t) {
          if ("string" == typeof e) {
            if (/^@@/m.test(e) || /^Index:/m.test(e)) return A(e)[0];
            if (!t)
              throw new Error(
                "Must provide a base reference or pass in a patch"
              );
            return $(void 0, void 0, t, e);
          }
          return e;
        }
        function H(e) {
          return e.newFileName && e.newFileName !== e.oldFileName;
        }
        function G(e, t, n) {
          return t === n ? t : ((e.conflict = !0), { mine: t, theirs: n });
        }
        function W(e, t) {
          return (
            e.oldStart < t.oldStart && e.oldStart + e.oldLines < t.oldStart
          );
        }
        function Z(e, t) {
          return {
            oldStart: e.oldStart,
            oldLines: e.oldLines,
            newStart: e.newStart + t,
            newLines: e.newLines,
            lines: e.lines,
          };
        }
        function z(e, t, n, r, l) {
          var i = { offset: t, lines: n, index: 0 },
            o = { offset: r, lines: l, index: 0 };
          for (
            Y(e, i, o), Y(e, o, i);
            i.index < i.lines.length && o.index < o.lines.length;

          ) {
            var a = i.lines[i.index],
              s = o.lines[o.index];
            if (
              ("-" !== a[0] && "+" !== a[0]) ||
              ("-" !== s[0] && "+" !== s[0])
            )
              if ("+" === a[0] && " " === s[0]) {
                var d;
                (d = e.lines).push.apply(d, w(K(i)));
              } else if ("+" === s[0] && " " === a[0]) {
                var c;
                (c = e.lines).push.apply(c, w(K(o)));
              } else
                "-" === a[0] && " " === s[0]
                  ? q(e, i, o)
                  : "-" === s[0] && " " === a[0]
                  ? q(e, o, i, !0)
                  : a === s
                  ? (e.lines.push(a), i.index++, o.index++)
                  : J(e, K(i), K(o));
            else U(e, i, o);
          }
          X(e, i), X(e, o), j(e);
        }
        function U(e, t, n) {
          var r = K(t),
            l = K(n);
          if (ee(r) && ee(l)) {
            var i, o;
            if (P(r, l) && te(n, r, r.length - l.length))
              return void (i = e.lines).push.apply(i, w(r));
            if (P(l, r) && te(t, l, l.length - r.length))
              return void (o = e.lines).push.apply(o, w(l));
          } else if (V(r, l)) {
            var a;
            return void (a = e.lines).push.apply(a, w(r));
          }
          J(e, r, l);
        }
        function q(e, t, n, r) {
          var l,
            i = K(t),
            o = Q(n, i);
          o.merged
            ? (l = e.lines).push.apply(l, w(o.merged))
            : J(e, r ? o : i, r ? i : o);
        }
        function J(e, t, n) {
          (e.conflict = !0), e.lines.push({ conflict: !0, mine: t, theirs: n });
        }
        function Y(e, t, n) {
          for (; t.offset < n.offset && t.index < t.lines.length; ) {
            var r = t.lines[t.index++];
            e.lines.push(r), t.offset++;
          }
        }
        function X(e, t) {
          for (; t.index < t.lines.length; ) {
            var n = t.lines[t.index++];
            e.lines.push(n);
          }
        }
        function K(e) {
          for (
            var t = [], n = e.lines[e.index][0];
            e.index < e.lines.length;

          ) {
            var r = e.lines[e.index];
            if (("-" === n && "+" === r[0] && (n = "+"), n !== r[0])) break;
            t.push(r), e.index++;
          }
          return t;
        }
        function Q(e, t) {
          for (
            var n = [], r = [], l = 0, i = !1, o = !1;
            l < t.length && e.index < e.lines.length;

          ) {
            var a = e.lines[e.index],
              s = t[l];
            if ("+" === s[0]) break;
            if (((i = i || " " !== a[0]), r.push(s), l++, "+" === a[0]))
              for (o = !0; "+" === a[0]; ) n.push(a), (a = e.lines[++e.index]);
            s.substr(1) === a.substr(1) ? (n.push(a), e.index++) : (o = !0);
          }
          if (("+" === (t[l] || "")[0] && i && (o = !0), o)) return n;
          for (; l < t.length; ) r.push(t[l++]);
          return { merged: r, changes: n };
        }
        function ee(e) {
          return e.reduce(function (e, t) {
            return e && "-" === t[0];
          }, !0);
        }
        function te(e, t, n) {
          for (var r = 0; r < n; r++) {
            var l = t[t.length - n + r].substr(1);
            if (e.lines[e.index + r] !== " " + l) return !1;
          }
          return (e.index += n), !0;
        }
        function ne(e) {
          var t = 0,
            n = 0;
          return (
            e.forEach(function (e) {
              if ("string" != typeof e) {
                var r = ne(e.mine),
                  l = ne(e.theirs);
                void 0 !== t &&
                  (r.oldLines === l.oldLines
                    ? (t += r.oldLines)
                    : (t = void 0)),
                  void 0 !== n &&
                    (r.newLines === l.newLines
                      ? (n += r.newLines)
                      : (n = void 0));
              } else void 0 === n || ("+" !== e[0] && " " !== e[0]) || n++, void 0 === t || ("-" !== e[0] && " " !== e[0]) || t++;
            }),
            { oldLines: t, newLines: n }
          );
        }
        function re(e) {
          for (var t, n, r = [], l = 0; l < e.length; l++)
            (n = (t = e[l]).added ? 1 : t.removed ? -1 : 0),
              r.push([n, t.value]);
          return r;
        }
        function le(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            var r = e[n];
            r.added ? t.push("<ins>") : r.removed && t.push("<del>"),
              t.push(ie(r.value)),
              r.added ? t.push("</ins>") : r.removed && t.push("</del>");
          }
          return t.join("");
        }
        function ie(e) {
          var t = e;
          return (t = (t = (t = (t = t.replace(/&/g, "&amp;")).replace(
            /</g,
            "&lt;"
          )).replace(/>/g, "&gt;")).replace(/"/g, "&quot;"));
        }
        (x.tokenize = function (e) {
          return e.slice();
        }),
          (x.join = x.removeEmpty =
            function (e) {
              return e;
            }),
          (e.Diff = t),
          (e.diffChars = i),
          (e.diffWords = c),
          (e.diffWordsWithSpace = u),
          (e.diffLines = p),
          (e.diffTrimmedLines = m),
          (e.diffSentences = h),
          (e.diffCss = y),
          (e.diffJson = D),
          (e.diffArrays = T),
          (e.structuredPatch = $),
          (e.createTwoFilesPatch = O),
          (e.createPatch = R),
          (e.applyPatch = B),
          (e.applyPatches = F),
          (e.parsePatch = A),
          (e.merge = M),
          (e.convertChangesToDMP = re),
          (e.convertChangesToXML = le),
          (e.canonicalize = S),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t);
    },
    93901: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          cache: () => w,
          css: () => y,
          cx: () => p,
          flush: () => u,
          getRegisteredStyles: () => v,
          hydrate: () => f,
          injectGlobal: () => h,
          keyframes: () => g,
          merge: () => m,
          sheet: () => b,
        });
      var r = n(36043),
        l = n(44343),
        i = n(68087);
      function o(e, t) {
        if (void 0 === e.inserted[t.name]) return e.insert("", t, e.sheet, !0);
      }
      function a(e, t, n) {
        var r = [],
          l = (0, i.f)(e, r, n);
        return r.length < 2 ? n : l + t(r);
      }
      var s = function e(t) {
        for (var n = "", r = 0; r < t.length; r++) {
          var l = t[r];
          if (null != l) {
            var i = void 0;
            switch (typeof l) {
              case "boolean":
                break;
              case "object":
                if (Array.isArray(l)) i = e(l);
                else
                  for (var o in ((i = ""), l))
                    l[o] && o && (i && (i += " "), (i += o));
                break;
              default:
                i = l;
            }
            i && (n && (n += " "), (n += i));
          }
        }
        return n;
      };
      const d = function (e) {
        var t = (0, r.Z)(e);
        (t.sheet.speedy = function (e) {
          this.isSpeedy = e;
        }),
          (t.compat = !0);
        var n = function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          var o = (0, l.O)(n, t.registered, void 0);
          return (0, i.M)(t, o, !1), t.key + "-" + o.name;
        };
        return {
          css: n,
          cx: function () {
            for (var e = arguments.length, r = new Array(e), l = 0; l < e; l++)
              r[l] = arguments[l];
            return a(t.registered, n, s(r));
          },
          injectGlobal: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            var i = (0, l.O)(n, t.registered);
            o(t, i);
          },
          keyframes: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            var i = (0, l.O)(n, t.registered),
              a = "animation-" + i.name;
            return (
              o(t, {
                name: i.name,
                styles: "@keyframes " + a + "{" + i.styles + "}",
              }),
              a
            );
          },
          hydrate: function (e) {
            e.forEach(function (e) {
              t.inserted[e] = !0;
            });
          },
          flush: function () {
            (t.registered = {}), (t.inserted = {}), t.sheet.flush();
          },
          sheet: t.sheet,
          cache: t,
          getRegisteredStyles: i.f.bind(null, t.registered),
          merge: a.bind(null, t.registered, n),
        };
      };
      var c = d(),
        u = c.flush,
        f = c.hydrate,
        p = c.cx,
        m = c.merge,
        v = c.getRegisteredStyles,
        h = c.injectGlobal,
        g = c.keyframes,
        y = c.css,
        b = c.sheet,
        w = c.cache;
    },
    40304: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => te });
      var r = n(67294),
        l = n(5977),
        i = n(49546),
        o = n(9980),
        a = n(28630),
        s = n(47489),
        d = n(28584),
        c = n(40829),
        u = n(75091),
        f = n(37276),
        p = n(9034),
        m = n.n(p),
        v = n(97591);
      const h = { label: "Most recent", value: "mostRecent" },
        g = { label: "Most recently published", value: "published" };
      n(97429);
      const y = "compare-version",
        b = [h],
        w = (e) => {
          const {
              onChange: t,
              value: n,
              baseURL: l,
              versionID: a,
              parentID: s,
              publishedDoc: d,
            } = e,
            {
              admin: { dateFormat: c },
            } = (0, o.Z)(),
            [u, f] = (0, r.useState)(b),
            [p, h] = (0, r.useState)(1),
            [w, k] = (0, r.useState)(""),
            E = (0, r.useCallback)(
              async ({ lastLoadedPage: e }) => {
                const t = {
                  limit: 10,
                  page: e,
                  depth: 0,
                  where: { and: [{ id: { not_equals: a } }] },
                };
                s && t.where.and.push({ parent: { equals: s } });
                const n = m().stringify(t),
                  r = await fetch(`${l}?${n}`);
                if (r.ok) {
                  const e = await r.json();
                  e.docs.length > 0 &&
                    (f((t) => [
                      ...t,
                      ...e.docs.map((e) => ({
                        label: (0, i.default)(new Date(e.createdAt), c),
                        value: e.id,
                      })),
                    ]),
                    h(e.page));
                } else k("An error has occurred.");
              },
              [c, l, s, a]
            ),
            N = ["field-type", y, w && "error-loading"]
              .filter(Boolean)
              .join(" ");
          return (
            (0, r.useEffect)(() => {
              E({ lastLoadedPage: 1 });
            }, [E]),
            (0, r.useEffect)(() => {
              "published" === (null == d ? void 0 : d._status) &&
                f((e) => [g, ...e]);
            }, [d]),
            r.createElement(
              "div",
              { className: N },
              r.createElement(
                "div",
                { className: `${y}__label` },
                "Compare version against:"
              ),
              !w &&
                r.createElement(v.Z, {
                  isSearchable: !1,
                  placeholder: "Select a version to compare",
                  onChange: t,
                  onMenuScrollToBottom: () => {
                    E({ lastLoadedPage: p + 1 });
                  },
                  value: n,
                  options: u,
                }),
              w &&
                r.createElement("div", { className: `${y}__error-loading` }, w)
            )
          );
        };
      var k = n(39249),
        E = n(71851),
        N = n(71486),
        L = n(39599),
        C = n(77329),
        D = n(93780);
      n(62285);
      const S = "restore-version",
        x = "restore-version",
        T = ({
          collection: e,
          global: t,
          className: n,
          versionID: i,
          originalDocID: a,
          versionDate: s,
        }) => {
          const {
              serverURL: d,
              routes: { api: c, admin: u },
            } = (0, o.Z)(),
            f = (0, l.k6)(),
            { toggleModal: p } = (0, E.useModal)(),
            [m, v] = (0, r.useState)(!1);
          let h,
            g,
            y = `${d}${c}`;
          e &&
            ((y = `${y}/${e.slug}/versions/${i}`),
            (h = `${u}/collections/${e.slug}/${a}`),
            (g = `You are about to restore this ${e.labels.singular} document to the state that it was in on ${s}.`)),
            t &&
              ((y = `${y}/globals/${t.slug}/versions/${i}`),
              (h = `${u}/globals/${t.slug}`),
              (g = `You are about to restore the global ${t.label} to the state that it was in on ${s}.`));
          const b = (0, r.useCallback)(async () => {
            v(!0);
            const e = await D.E.post(y);
            if (200 === e.status) {
              const t = await e.json();
              k.Am.success(t.message), f.push(h);
            } else
              k.Am.error("There was a problem while restoring this version.");
          }, [f, y, h]);
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              N.Z,
              {
                onClick: () => p(x),
                className: [S, n].filter(Boolean).join(" "),
              },
              "Restore this version"
            ),
            r.createElement(
              E.Modal,
              { slug: x, className: `${S}__modal` },
              r.createElement(
                L.Z,
                { className: `${S}__modal-template` },
                r.createElement("h1", null, "Confirm version restoration"),
                r.createElement("p", null, g),
                r.createElement(
                  C.Z,
                  {
                    buttonStyle: "secondary",
                    type: "button",
                    onClick: m ? void 0 : () => p(x),
                  },
                  "Cancel"
                ),
                r.createElement(
                  C.Z,
                  { onClick: m ? void 0 : b },
                  m ? "Restoring..." : "Confirm"
                )
              )
            )
          );
        };
      n(42084);
      const A = "select-version-locales",
        _ = ({ onChange: e, value: t, options: n }) =>
          r.createElement(
            "div",
            { className: A },
            r.createElement(
              "div",
              { className: "select-version-locales__label" },
              "Show locales:"
            ),
            r.createElement(v.Z, {
              isMulti: !0,
              placeholder: "Select locales to display",
              onChange: e,
              value: t,
              options: n,
            })
          );
      var B = n(83780);
      n(27517);
      const F = ({ children: e }) =>
        r.createElement("div", { className: "field-diff-label" }, e);
      n(34281);
      const $ = "nested-diff",
        O = ({
          version: e,
          comparison: t,
          permissions: n,
          field: l,
          locale: i,
          locales: o,
          fieldComponents: a,
          disableGutter: s = !1,
        }) =>
          r.createElement(
            "div",
            { className: $ },
            l.label &&
              r.createElement(
                F,
                null,
                i &&
                  r.createElement(
                    "span",
                    { className: "nested-diff__locale-label" },
                    i
                  ),
                l.label
              ),
            r.createElement(
              "div",
              {
                className: [
                  "nested-diff__wrap",
                  !s && "nested-diff__wrap--gutter",
                ]
                  .filter(Boolean)
                  .join(" "),
              },
              r.createElement(P, {
                locales: o,
                version: e,
                comparison: t,
                fieldPermissions: n,
                fields: l.fields,
                fieldComponents: a,
              })
            )
          ),
        R = {
          select: "WORDS_WITH_SPACE",
          relationship: "WORDS_WITH_SPACE",
          upload: "WORDS_WITH_SPACE",
          radio: "WORDS_WITH_SPACE",
        };
      n(75597);
      const V = "render-field-diffs",
        P = ({
          fields: e,
          fieldComponents: t,
          fieldPermissions: n,
          version: l,
          comparison: i,
          locales: o,
        }) =>
          r.createElement(
            "div",
            { className: V },
            e.map((e, a) => {
              var s, d, c;
              const u = t[e.type],
                f = "richText" === e.type,
                p = R[e.type] || "CHARS";
              if (u) {
                if ((0, B.fieldAffectsData)(e)) {
                  const m = null == l ? void 0 : l[e.name],
                    v = null == i ? void 0 : i[e.name],
                    h =
                      null ===
                        (d =
                          null === (s = null == n ? void 0 : n[e.name]) ||
                          void 0 === s
                            ? void 0
                            : s.read) || void 0 === d
                        ? void 0
                        : d.permission,
                    g =
                      null === (c = null == n ? void 0 : n[e.name]) ||
                      void 0 === c
                        ? void 0
                        : c.fields;
                  return !1 === h
                    ? null
                    : e.localized
                    ? r.createElement(
                        "div",
                        { className: "render-field-diffs__field", key: a },
                        o.map((n) => {
                          const l = null == m ? void 0 : m[n],
                            i = null == v ? void 0 : v[n];
                          return r.createElement(
                            "div",
                            { className: "render-field-diffs__locale", key: n },
                            r.createElement(
                              "div",
                              { className: "render-field-diffs__locale-value" },
                              r.createElement(u, {
                                diffMethod: p,
                                locale: n,
                                locales: o,
                                field: e,
                                fieldComponents: t,
                                version: l,
                                comparison: i,
                                permissions: g,
                                isRichText: f,
                              })
                            )
                          );
                        })
                      )
                    : r.createElement(
                        "div",
                        { className: "render-field-diffs__field", key: a },
                        r.createElement(u, {
                          diffMethod: p,
                          locales: o,
                          field: e,
                          fieldComponents: t,
                          version: m,
                          comparison: v,
                          permissions: g,
                          isRichText: f,
                        })
                      );
                }
                if ("tabs" === e.type) {
                  const n = t.tabs;
                  return r.createElement(n, {
                    key: a,
                    version: l,
                    comparison: i,
                    field: e,
                    locales: o,
                    fieldComponents: t,
                  });
                }
                if ((0, B.fieldHasSubFields)(e))
                  return r.createElement(O, {
                    key: a,
                    locales: o,
                    disableGutter: !0,
                    field: e,
                    fieldComponents: t,
                    version: l,
                    comparison: i,
                    permissions: n,
                  });
              }
              return null;
            })
          );
      var j = n(4817),
        M = n.n(j);
      const I = {
        variables: {
          light: {
            diffViewerBackground: "transparent",
            addedBackground: "var(--theme-success-100)",
            addedColor: "var(--theme-success-900)",
            removedBackground: "var(--theme-error-100)",
            removedColor: "var(--theme-error-900)",
            wordAddedBackground: "var(--theme-success-200)",
            wordRemovedBackground: "var(--theme-error-200)",
            emptyLineBackground: "var(--theme-elevation-50)",
          },
        },
      };
      n(17754);
      const H = "text-diff",
        G = ({
          field: e,
          locale: t,
          version: n,
          comparison: l,
          isRichText: i = !1,
          diffMethod: o,
        }) => {
          let a = "";
          n === l && (a = "[no value]");
          let s = n,
            d = l;
          return (
            i &&
              ("object" == typeof n && (s = JSON.stringify(n, null, 2)),
              "object" == typeof l && (d = JSON.stringify(l, null, 2))),
            r.createElement(
              "div",
              { className: H },
              r.createElement(
                F,
                null,
                t &&
                  r.createElement(
                    "span",
                    { className: "text-diff__locale-label" },
                    t
                  ),
                e.label
              ),
              r.createElement(M(), {
                styles: I,
                compareMethod: j.DiffMethod[o],
                oldValue: void 0 !== d ? String(d) : a,
                newValue: void 0 !== s ? String(s) : a,
                splitView: !0,
                hideLineNumbers: !0,
                showDiffOnly: !1,
              })
            )
          );
        };
      var W = n(56838);
      n(39412);
      const Z = "iterable-diff",
        z = ({
          version: e,
          comparison: t,
          permissions: n,
          field: l,
          locale: i,
          locales: o,
          fieldComponents: a,
        }) => {
          var s, d;
          const c = Array.isArray(e) ? e.length : 0,
            u = Array.isArray(t) ? t.length : 0,
            f = Math.max(c, u);
          return r.createElement(
            "div",
            { className: Z },
            l.label &&
              r.createElement(
                F,
                null,
                i &&
                  r.createElement(
                    "span",
                    { className: "iterable-diff__locale-label" },
                    i
                  ),
                l.label
              ),
            f > 0 &&
              r.createElement(
                r.Fragment,
                null,
                Array.from(Array(f).keys()).map((i, s) => {
                  const d = (null == e ? void 0 : e[s]) || {},
                    c = (null == t ? void 0 : t[s]) || {};
                  let u = [];
                  if (
                    ("array" === l.type && (u = l.fields), "blocks" === l.type)
                  )
                    if (
                      ((u = [
                        {
                          name: "blockType",
                          label: "Block Type",
                          type: "text",
                        },
                      ]),
                      (null == d ? void 0 : d.blockType) ===
                        (null == c ? void 0 : c.blockType))
                    ) {
                      const e = l.blocks.find(
                        (e) => e.slug === (null == d ? void 0 : d.blockType)
                      ) || { fields: [] };
                      u = [...u, ...e.fields];
                    } else {
                      const e = l.blocks.find(
                          (e) => e.slug === (null == d ? void 0 : d.blockType)
                        ) || { fields: [] },
                        t = l.blocks.find(
                          (e) => e.slug === (null == c ? void 0 : c.blockType)
                        ) || { fields: [] };
                      u = (0, W.Z)([...u, ...e.fields, ...t.fields], "name");
                    }
                  return r.createElement(
                    "div",
                    { className: "iterable-diff__wrap", key: s },
                    r.createElement(P, {
                      locales: o,
                      version: d,
                      comparison: c,
                      fieldPermissions: n,
                      fields: u.filter(
                        (e) => !((0, B.fieldAffectsData)(e) && "id" === e.name)
                      ),
                      fieldComponents: a,
                    })
                  );
                })
              ),
            0 === f &&
              r.createElement(
                "div",
                { className: "iterable-diff__no-rows" },
                "No",
                " ",
                null !==
                  (d =
                    null === (s = l.labels) || void 0 === s
                      ? void 0
                      : s.plural) && void 0 !== d
                  ? d
                  : "rows",
                " ",
                "found"
              )
          );
        };
      var U = n(40684);
      n(34629);
      const q = "relationship-diff",
        J = (e, t, n, r) => {
          var l;
          let i,
            o,
            a = "";
          Array.isArray(t.relationTo)
            ? "object" == typeof r && ((i = r.relationTo), (o = r.value))
            : ((i = t.relationTo), (o = r));
          const s = e.find((e) => e.slug === i);
          if (s) {
            const e =
                null === (l = null == s ? void 0 : s.admin) || void 0 === l
                  ? void 0
                  : l.useAsTitle,
              t = s.fields.find(
                (t) =>
                  (0, B.fieldAffectsData)(t) &&
                  !(0, B.fieldIsPresentationalOnly)(t) &&
                  t.name === e
              );
            let r = !1;
            t && (0, B.fieldAffectsData)(t) && (r = t.localized),
              void 0 !== (null == o ? void 0 : o[e])
                ? (a = o[e])
                : void 0 !== (null == o ? void 0 : o.id) && (a = o.id),
              "object" == typeof a && r && (a = a[n]);
          }
          return a;
        },
        Y = ({ field: e, version: t, comparison: n }) => {
          const { collections: l } = (0, o.Z)(),
            i = (0, U.bU)();
          let a = "";
          t === n && (a = "[no value]");
          let s = t,
            d = n;
          return (
            e.hasMany
              ? (Array.isArray(t) &&
                  (s = t.map((t) => J(l, e, i, t)).join(", ")),
                Array.isArray(n) &&
                  (d = n.map((t) => J(l, e, i, t)).join(", ")))
              : ((s = J(l, e, i, t)), (d = J(l, e, i, n))),
            r.createElement(
              "div",
              { className: q },
              r.createElement(
                F,
                null,
                i &&
                  r.createElement(
                    "span",
                    { className: "relationship-diff__locale-label" },
                    i
                  ),
                e.label
              ),
              r.createElement(M(), {
                styles: I,
                oldValue: void 0 !== d ? String(d) : a,
                newValue: void 0 !== s ? String(s) : a,
                splitView: !0,
                hideLineNumbers: !0,
                showDiffOnly: !1,
              })
            )
          );
        },
        X = "tabs-diff",
        K = {
          text: G,
          textarea: G,
          number: G,
          email: G,
          code: G,
          checkbox: G,
          radio: G,
          row: O,
          collapsible: O,
          group: O,
          array: z,
          blocks: z,
          date: G,
          select: G,
          richText: G,
          relationship: Y,
          upload: Y,
          point: G,
          tabs: ({
            version: e,
            comparison: t,
            permissions: n,
            field: l,
            locales: i,
            fieldComponents: o,
          }) =>
            r.createElement(
              "div",
              { className: X },
              r.createElement(
                "div",
                { className: "tabs-diff__wrap" },
                l.tabs.map((l, a) =>
                  r.createElement(P, {
                    key: a,
                    locales: i,
                    version: e,
                    comparison: t,
                    fieldPermissions: n,
                    fields: l.fields,
                    fieldComponents: o,
                  })
                )
              )
            ),
        };
      var Q = n(69850);
      n(12847);
      const ee = "view-version",
        te = ({ collection: e, global: t }) => {
          var n;
          const {
              serverURL: p,
              routes: { admin: m, api: v },
              admin: { dateFormat: g },
              localization: y,
            } = (0, o.Z)(),
            { setStepNav: b } = (0, u.FP)(),
            {
              params: { id: k, versionID: E },
            } = (0, l.$B)(),
            [N, L] = (0, r.useState)(h),
            [C] = (0, r.useState)(() =>
              y ? y.locales.map((e) => ({ label: e, value: e })) : []
            ),
            [D, S] = (0, r.useState)(C),
            { permissions: x } = (0, a.a)(),
            A = (0, U.bU)();
          let F, $, O, R, V, j, M, I;
          e &&
            (({ slug: M } = e),
            (F = `${p}${v}/${M}/${k}`),
            ($ = `${p}${v}/${M}/versions/${E}`),
            (j = `${p}${v}/${M}/versions`),
            (O = e.labels.singular),
            (I = k),
            (R = e.fields),
            (V = x.collections[e.slug].fields)),
            t &&
              (({ slug: M } = t),
              (F = `${p}${v}/globals/${M}`),
              ($ = `${p}${v}/globals/${M}/versions/${E}`),
              (j = `${p}${v}/globals/${M}/versions`),
              (O = t.label),
              (R = t.fields),
              (V = x.globals[t.slug].fields));
          const H =
              "mostRecent" === (null == N ? void 0 : N.value) ||
              "published" === (null == N ? void 0 : N.value)
                ? F
                : `${j}/${N.value}`,
            [{ data: G, isLoading: W }] = (0, s.Z)($, {
              initialParams: { locale: "*", depth: 1 },
            }),
            [{ data: Z }] = (0, s.Z)(F, {
              initialParams: { locale: "*", depth: 1 },
            }),
            [{ data: z }] = (0, s.Z)(F, {
              initialParams: { locale: "*", depth: 1, draft: !0 },
            }),
            [{ data: q }] = (0, s.Z)(H, {
              initialParams: { locale: "*", depth: 1, draft: "true" },
            });
          let J, Y;
          (0, r.useEffect)(() => {
            var n;
            let r = [];
            if (e) {
              let t = "";
              if (z) {
                const { useAsTitle: r } = e.admin;
                if ("id" !== r) {
                  const l = e.fields.find(
                    (e) => (0, B.fieldAffectsData)(e) && e.name === r
                  );
                  t =
                    l && z[r]
                      ? l.localized
                        ? null === (n = z[r]) || void 0 === n
                          ? void 0
                          : n[A]
                        : z[r]
                      : "[Untitled]";
                } else t = z.id;
              }
              r = [
                { url: `${m}/collections/${e.slug}`, label: e.labels.plural },
                { label: t, url: `${m}/collections/${e.slug}/${k}` },
                {
                  label: "Versions",
                  url: `${m}/collections/${e.slug}/${k}/versions`,
                },
                {
                  label: (null == G ? void 0 : G.createdAt)
                    ? (0, i.default)(new Date(G.createdAt), g)
                    : "",
                },
              ];
            }
            t &&
              (r = [
                { url: `${m}/globals/${t.slug}`, label: t.label },
                { label: "Versions", url: `${m}/globals/${t.slug}/versions` },
                {
                  label: (null == G ? void 0 : G.createdAt)
                    ? (0, i.default)(new Date(G.createdAt), g)
                    : "",
                },
              ]),
              b(r);
          }, [b, e, t, g, G, z, m, k, A]);
          const X = (null == G ? void 0 : G.createdAt)
            ? (0, i.default)(new Date(G.createdAt), g)
            : "";
          if (e) {
            const t =
              (null === (n = null == e ? void 0 : e.admin) || void 0 === n
                ? void 0
                : n.useAsTitle) || "id";
            (J = `Version - ${X} - ${G[t]} - ${O}`),
              (Y = `Viewing version for the ${O} ${G[t]}`);
          }
          t &&
            ((J = `Version - ${X} - ${O}`),
            (Y = `Viewing version for the global ${O}`));
          let te = null == q ? void 0 : q.version;
          return (
            "mostRecent" === (null == N ? void 0 : N.value) && (te = z),
            "published" === (null == N ? void 0 : N.value) && (te = Z),
            r.createElement(
              "div",
              { className: ee },
              r.createElement(f.Z, { title: J, description: Y }),
              r.createElement(d.Z, null),
              r.createElement(
                Q.T,
                { className: "view-version__wrap" },
                r.createElement(
                  "div",
                  { className: "view-version__intro" },
                  (null == G ? void 0 : G.autosave)
                    ? "Autosaved version "
                    : "Version",
                  " ",
                  "created on:"
                ),
                r.createElement(
                  "header",
                  { className: "view-version__header" },
                  r.createElement("h2", null, X),
                  r.createElement(T, {
                    className: "view-version__restore",
                    collection: e,
                    global: t,
                    originalDocID: k,
                    versionID: E,
                    versionDate: X,
                  })
                ),
                r.createElement(
                  "div",
                  { className: "view-version__controls" },
                  r.createElement(w, {
                    publishedDoc: Z,
                    versionID: E,
                    baseURL: j,
                    parentID: I,
                    value: N,
                    onChange: L,
                  }),
                  y && r.createElement(_, { onChange: S, options: C, value: D })
                ),
                W && r.createElement(c.Z, null),
                (null == G ? void 0 : G.version) &&
                  r.createElement(P, {
                    locales: D ? D.map(({ value: e }) => e) : [],
                    fields: R,
                    fieldComponents: K,
                    fieldPermissions: V,
                    version: null == G ? void 0 : G.version,
                    comparison: te,
                  })
              )
            )
          );
        };
    },
    56838: (e, t) => {
      "use strict";
      t.Z = function (e, t) {
        return [...new Map(e.map((e) => [e[t], e])).values()];
      };
    },
    33377: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__read) ||
          function (e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r,
              l,
              i = n.call(e),
              o = [];
            try {
              for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                o.push(r.value);
            } catch (e) {
              l = { error: e };
            } finally {
              try {
                r && !r.done && (n = i.return) && n.call(i);
              } finally {
                if (l) throw l.error;
              }
            }
            return o;
          },
        l =
          (this && this.__spread) ||
          function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e = e.concat(r(arguments[t]));
            return e;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        o,
        a = n(92381),
        s = a;
      !(function (e) {
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
          (e[(e.ADDED = 1)] = "ADDED"),
          (e[(e.REMOVED = 2)] = "REMOVED");
      })((i = t.DiffType || (t.DiffType = {}))),
        (function (e) {
          (e.CHARS = "diffChars"),
            (e.WORDS = "diffWords"),
            (e.WORDS_WITH_SPACE = "diffWordsWithSpace"),
            (e.LINES = "diffLines"),
            (e.TRIMMED_LINES = "diffTrimmedLines"),
            (e.SENTENCES = "diffSentences"),
            (e.CSS = "diffCss");
        })((o = t.DiffMethod || (t.DiffMethod = {})));
      var d = function (e) {
        var t = e.split("\n");
        if (
          t.every(function (e) {
            return !e;
          })
        )
          return 2 === t.length ? [] : (t.pop(), t);
        var n = t[t.length - 1],
          r = t[0];
        return n || t.pop(), r || t.shift(), t;
      };
      t.computeLineInformation = function (e, t, n, r, c) {
        void 0 === n && (n = !1),
          void 0 === r && (r = o.CHARS),
          void 0 === c && (c = 0);
        var u = a.diffLines(e.trimRight(), t.trimRight(), {
            newlineIsToken: !0,
            ignoreWhitespace: !1,
            ignoreCase: !1,
          }),
          f = c,
          p = c,
          m = [],
          v = 0,
          h = [],
          g = [],
          y = function (e, t, l, a, c) {
            return d(e)
              .map(function (e, m) {
                var b = {},
                  w = {};
                if (!(g.includes(t + "-" + m) || (c && 0 !== m))) {
                  if (l || a)
                    if ((h.includes(v) || h.push(v), a)) {
                      (p += 1),
                        (b.lineNumber = p),
                        (b.type = i.REMOVED),
                        (b.value = e || " ");
                      var k = u[t + 1];
                      if (k && k.added)
                        if (d(k.value)[m]) {
                          var E = y(k.value, t, !0, !1, !0)[0].right,
                            N = E.value,
                            L = E.lineNumber,
                            C = E.type;
                          if (
                            (g.push(t + 1 + "-" + m),
                            (w.lineNumber = L),
                            (w.type = C),
                            n)
                          )
                            w.value = N;
                          else {
                            var D = (function (e, t, n) {
                              void 0 === n && (n = o.CHARS);
                              var r = s[n](e, t),
                                l = { left: [], right: [] };
                              return (
                                r.forEach(function (e) {
                                  var t = e.added,
                                    n = e.removed,
                                    r = e.value,
                                    o = {};
                                  return (
                                    t &&
                                      ((o.type = i.ADDED),
                                      (o.value = r),
                                      l.right.push(o)),
                                    n &&
                                      ((o.type = i.REMOVED),
                                      (o.value = r),
                                      l.left.push(o)),
                                    n ||
                                      t ||
                                      ((o.type = i.DEFAULT),
                                      (o.value = r),
                                      l.right.push(o),
                                      l.left.push(o)),
                                    o
                                  );
                                }),
                                l
                              );
                            })(e, N, r);
                            (w.value = D.right), (b.value = D.left);
                          }
                        }
                    } else
                      (f += 1),
                        (w.lineNumber = f),
                        (w.type = i.ADDED),
                        (w.value = e);
                  else
                    (p += 1),
                      (f += 1),
                      (b.lineNumber = p),
                      (b.type = i.DEFAULT),
                      (b.value = e),
                      (w.lineNumber = f),
                      (w.type = i.DEFAULT),
                      (w.value = e);
                  return (v += 1), { right: w, left: b };
                }
              })
              .filter(Boolean);
          };
        return (
          u.forEach(function (e, t) {
            var n = e.added,
              r = e.removed,
              i = e.value;
            m = l(m, y(i, t, n, r));
          }),
          { lineInformation: m, diffLines: h }
        );
      };
    },
    4817: function (e, t, n) {
      "use strict";
      var r,
        l =
          (this && this.__extends) ||
          ((r = function (e, t) {
            return (
              (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                }),
              r(e, t)
            );
          }),
          function (e, t) {
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          });
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(67294),
        o = n(45697),
        a = n(94184),
        s = n(33377);
      t.DiffMethod = s.DiffMethod;
      var d,
        c = n(62918),
        u = n(30845),
        f = u.default || u;
      !(function (e) {
        (e.LEFT = "L"), (e.RIGHT = "R");
      })((d = t.LineNumberPrefix || (t.LineNumberPrefix = {})));
      var p = (function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (
            (n.resetCodeBlocks = function () {
              return (
                n.state.expandedBlocks.length > 0 &&
                (n.setState({ expandedBlocks: [] }), !0)
              );
            }),
            (n.onBlockExpand = function (e) {
              var t = n.state.expandedBlocks.slice();
              t.push(e), n.setState({ expandedBlocks: t });
            }),
            (n.computeStyles = f(c.default)),
            (n.onLineNumberClickProxy = function (e) {
              return n.props.onLineNumberClick
                ? function (t) {
                    return n.props.onLineNumberClick(e, t);
                  }
                : function () {};
            }),
            (n.renderWordDiff = function (e, t) {
              return e.map(function (e, r) {
                var l;
                return i.createElement(
                  "span",
                  {
                    key: r,
                    className: a.default(
                      n.styles.wordDiff,
                      ((l = {}),
                      (l[n.styles.wordAdded] = e.type === s.DiffType.ADDED),
                      (l[n.styles.wordRemoved] = e.type === s.DiffType.REMOVED),
                      l)
                    ),
                  },
                  t ? t(e.value) : e.value
                );
              });
            }),
            (n.renderLine = function (e, t, r, l, o, d) {
              var c,
                u,
                f,
                p,
                m,
                v = r + "-" + e,
                h = d + "-" + o,
                g =
                  n.props.highlightLines.includes(v) ||
                  n.props.highlightLines.includes(h),
                y = t === s.DiffType.ADDED,
                b = t === s.DiffType.REMOVED;
              return (
                (m = Array.isArray(l)
                  ? n.renderWordDiff(l, n.props.renderContent)
                  : n.props.renderContent
                  ? n.props.renderContent(l)
                  : l),
                i.createElement(
                  i.Fragment,
                  null,
                  !n.props.hideLineNumbers &&
                    i.createElement(
                      "td",
                      {
                        onClick: e && n.onLineNumberClickProxy(v),
                        className: a.default(
                          n.styles.gutter,
                          ((c = {}),
                          (c[n.styles.emptyGutter] = !e),
                          (c[n.styles.diffAdded] = y),
                          (c[n.styles.diffRemoved] = b),
                          (c[n.styles.highlightedGutter] = g),
                          c)
                        ),
                      },
                      i.createElement(
                        "pre",
                        { className: n.styles.lineNumber },
                        e
                      )
                    ),
                  !n.props.splitView &&
                    !n.props.hideLineNumbers &&
                    i.createElement(
                      "td",
                      {
                        onClick: o && n.onLineNumberClickProxy(h),
                        className: a.default(
                          n.styles.gutter,
                          ((u = {}),
                          (u[n.styles.emptyGutter] = !o),
                          (u[n.styles.diffAdded] = y),
                          (u[n.styles.diffRemoved] = b),
                          (u[n.styles.highlightedGutter] = g),
                          u)
                        ),
                      },
                      i.createElement(
                        "pre",
                        { className: n.styles.lineNumber },
                        o
                      )
                    ),
                  i.createElement(
                    "td",
                    {
                      className: a.default(
                        n.styles.marker,
                        ((f = {}),
                        (f[n.styles.emptyLine] = !m),
                        (f[n.styles.diffAdded] = y),
                        (f[n.styles.diffRemoved] = b),
                        (f[n.styles.highlightedLine] = g),
                        f)
                      ),
                    },
                    i.createElement("pre", null, y && "+", b && "-")
                  ),
                  i.createElement(
                    "td",
                    {
                      className: a.default(
                        n.styles.content,
                        ((p = {}),
                        (p[n.styles.emptyLine] = !m),
                        (p[n.styles.diffAdded] = y),
                        (p[n.styles.diffRemoved] = b),
                        (p[n.styles.highlightedLine] = g),
                        p)
                      ),
                    },
                    i.createElement(
                      "pre",
                      { className: n.styles.contentText },
                      m
                    )
                  )
                )
              );
            }),
            (n.renderSplitView = function (e, t) {
              var r = e.left,
                l = e.right;
              return i.createElement(
                "tr",
                { key: t, className: n.styles.line },
                n.renderLine(r.lineNumber, r.type, d.LEFT, r.value),
                n.renderLine(l.lineNumber, l.type, d.RIGHT, l.value)
              );
            }),
            (n.renderInlineView = function (e, t) {
              var r,
                l = e.left,
                o = e.right;
              return l.type === s.DiffType.REMOVED &&
                o.type === s.DiffType.ADDED
                ? i.createElement(
                    i.Fragment,
                    { key: t },
                    i.createElement(
                      "tr",
                      { className: n.styles.line },
                      n.renderLine(l.lineNumber, l.type, d.LEFT, l.value, null)
                    ),
                    i.createElement(
                      "tr",
                      { className: n.styles.line },
                      n.renderLine(null, o.type, d.RIGHT, o.value, o.lineNumber)
                    )
                  )
                : (l.type === s.DiffType.REMOVED &&
                    (r = n.renderLine(
                      l.lineNumber,
                      l.type,
                      d.LEFT,
                      l.value,
                      null
                    )),
                  l.type === s.DiffType.DEFAULT &&
                    (r = n.renderLine(
                      l.lineNumber,
                      l.type,
                      d.LEFT,
                      l.value,
                      o.lineNumber,
                      d.RIGHT
                    )),
                  o.type === s.DiffType.ADDED &&
                    (r = n.renderLine(
                      null,
                      o.type,
                      d.RIGHT,
                      o.value,
                      o.lineNumber
                    )),
                  i.createElement(
                    "tr",
                    { key: t, className: n.styles.line },
                    r
                  ));
            }),
            (n.onBlockClickProxy = function (e) {
              return function () {
                return n.onBlockExpand(e);
              };
            }),
            (n.renderSkippedLineIndicator = function (e, t, r, l) {
              var o,
                s = n.props,
                d = s.hideLineNumbers,
                c = s.splitView,
                u = n.props.codeFoldMessageRenderer
                  ? n.props.codeFoldMessageRenderer(e, r, l)
                  : i.createElement(
                      "pre",
                      { className: n.styles.codeFoldContent },
                      "Expand ",
                      e,
                      " lines ..."
                    ),
                f = i.createElement(
                  "td",
                  null,
                  i.createElement(
                    "a",
                    { onClick: n.onBlockClickProxy(t), tabIndex: 0 },
                    u
                  )
                ),
                p = !c && !d;
              return i.createElement(
                "tr",
                { key: r + "-" + l, className: n.styles.codeFold },
                !d &&
                  i.createElement("td", { className: n.styles.codeFoldGutter }),
                i.createElement("td", {
                  className: a.default(
                    ((o = {}), (o[n.styles.codeFoldGutter] = p), o)
                  ),
                }),
                p
                  ? i.createElement(
                      i.Fragment,
                      null,
                      i.createElement("td", null),
                      f
                    )
                  : i.createElement(
                      i.Fragment,
                      null,
                      f,
                      i.createElement("td", null)
                    ),
                i.createElement("td", null),
                i.createElement("td", null)
              );
            }),
            (n.renderDiff = function () {
              var e = n.props,
                t = e.oldValue,
                r = e.newValue,
                l = e.splitView,
                o = e.disableWordDiff,
                a = e.compareMethod,
                d = e.linesOffset,
                c = s.computeLineInformation(t, r, o, a, d),
                u = c.lineInformation,
                f = c.diffLines,
                p =
                  n.props.extraLinesSurroundingDiff < 0
                    ? 0
                    : n.props.extraLinesSurroundingDiff,
                m = [];
              return u.map(function (e, t) {
                var r = f[0],
                  o = r - t;
                if (
                  n.props.showDiffOnly &&
                  (o === -p && ((m = []), f.shift()),
                  e.left.type === s.DiffType.DEFAULT &&
                    (o > p || void 0 === r) &&
                    !n.state.expandedBlocks.includes(r))
                )
                  return (
                    m.push(t + 1),
                    t === u.length - 1 && m.length > 1
                      ? n.renderSkippedLineIndicator(
                          m.length,
                          r,
                          e.left.lineNumber,
                          e.right.lineNumber
                        )
                      : null
                  );
                var a = l ? n.renderSplitView(e, t) : n.renderInlineView(e, t);
                if (o === p && m.length > 0) {
                  var d = m.length;
                  return (
                    (m = []),
                    i.createElement(
                      i.Fragment,
                      { key: t },
                      n.renderSkippedLineIndicator(
                        d,
                        r,
                        e.left.lineNumber,
                        e.right.lineNumber
                      ),
                      a
                    )
                  );
                }
                return a;
              });
            }),
            (n.render = function () {
              var e,
                t = n.props,
                r = t.oldValue,
                l = t.newValue,
                o = t.useDarkTheme,
                s = t.leftTitle,
                d = t.rightTitle,
                c = t.splitView,
                u = t.hideLineNumbers;
              if ("string" != typeof r || "string" != typeof l)
                throw Error('"oldValue" and "newValue" should be strings');
              n.styles = n.computeStyles(n.props.styles, o);
              var f = n.renderDiff(),
                p = u ? 2 : 3,
                m = u ? 2 : 4,
                v =
                  (s || d) &&
                  i.createElement(
                    "tr",
                    null,
                    i.createElement(
                      "td",
                      { colSpan: c ? p : m, className: n.styles.titleBlock },
                      i.createElement(
                        "pre",
                        { className: n.styles.contentText },
                        s
                      )
                    ),
                    c &&
                      i.createElement(
                        "td",
                        { colSpan: p, className: n.styles.titleBlock },
                        i.createElement(
                          "pre",
                          { className: n.styles.contentText },
                          d
                        )
                      )
                  );
              return i.createElement(
                "table",
                {
                  className: a.default(
                    n.styles.diffContainer,
                    ((e = {}), (e[n.styles.splitView] = c), e)
                  ),
                },
                i.createElement("tbody", null, v, f)
              );
            }),
            (n.state = { expandedBlocks: [] }),
            n
          );
        }
        return (
          l(t, e),
          (t.defaultProps = {
            oldValue: "",
            newValue: "",
            splitView: !0,
            highlightLines: [],
            disableWordDiff: !1,
            compareMethod: s.DiffMethod.CHARS,
            styles: {},
            hideLineNumbers: !1,
            extraLinesSurroundingDiff: 3,
            showDiffOnly: !0,
            useDarkTheme: !1,
            linesOffset: 0,
          }),
          (t.propTypes = {
            oldValue: o.string.isRequired,
            newValue: o.string.isRequired,
            splitView: o.bool,
            disableWordDiff: o.bool,
            compareMethod: o.oneOf(Object.values(s.DiffMethod)),
            renderContent: o.func,
            onLineNumberClick: o.func,
            extraLinesSurroundingDiff: o.number,
            styles: o.object,
            hideLineNumbers: o.bool,
            showDiffOnly: o.bool,
            highlightLines: o.arrayOf(o.string),
            leftTitle: o.oneOfType([o.string, o.element]),
            rightTitle: o.oneOfType([o.string, o.element]),
            linesOffset: o.number,
          }),
          t
        );
      })(i.Component);
      t.default = p;
    },
    62918: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var l in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, l) &&
                        (e[l] = t[l]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
        l =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                t.indexOf(r) < 0 &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var l = 0;
              for (r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                t.indexOf(r[l]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
                  (n[r[l]] = e[r[l]]);
            }
            return n;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(93901);
      t.default = function (e, t) {
        var n, o, a, s, d, c, u;
        void 0 === t && (t = !1);
        var f = e.variables,
          p = void 0 === f ? {} : f,
          m = l(e, ["variables"]),
          v = {
            light: r(
              {
                diffViewerBackground: "#fff",
                diffViewerColor: "212529",
                addedBackground: "#e6ffed",
                addedColor: "#24292e",
                removedBackground: "#ffeef0",
                removedColor: "#24292e",
                wordAddedBackground: "#acf2bd",
                wordRemovedBackground: "#fdb8c0",
                addedGutterBackground: "#cdffd8",
                removedGutterBackground: "#ffdce0",
                gutterBackground: "#f7f7f7",
                gutterBackgroundDark: "#f3f1f1",
                highlightBackground: "#fffbdd",
                highlightGutterBackground: "#fff5b1",
                codeFoldGutterBackground: "#dbedff",
                codeFoldBackground: "#f1f8ff",
                emptyLineBackground: "#fafbfc",
                gutterColor: "#212529",
                addedGutterColor: "#212529",
                removedGutterColor: "#212529",
                codeFoldContentColor: "#212529",
                diffViewerTitleBackground: "#fafbfc",
                diffViewerTitleColor: "#212529",
                diffViewerTitleBorderColor: "#eee",
              },
              p.light || {}
            ),
            dark: r(
              {
                diffViewerBackground: "#2e303c",
                diffViewerColor: "#FFF",
                addedBackground: "#044B53",
                addedColor: "white",
                removedBackground: "#632F34",
                removedColor: "white",
                wordAddedBackground: "#055d67",
                wordRemovedBackground: "#7d383f",
                addedGutterBackground: "#034148",
                removedGutterBackground: "#632b30",
                gutterBackground: "#2c2f3a",
                gutterBackgroundDark: "#262933",
                highlightBackground: "#2a3967",
                highlightGutterBackground: "#2d4077",
                codeFoldGutterBackground: "#21232b",
                codeFoldBackground: "#262831",
                emptyLineBackground: "#363946",
                gutterColor: "#464c67",
                addedGutterColor: "#8c8c8c",
                removedGutterColor: "#8c8c8c",
                codeFoldContentColor: "#555a7b",
                diffViewerTitleBackground: "#2f323e",
                diffViewerTitleColor: "#555a7b",
                diffViewerTitleBorderColor: "#353846",
              },
              p.dark || {}
            ),
          },
          h = t ? v.dark : v.light,
          g = i.css({ width: "100%", label: "content" }),
          y = i.css(
            (((n = {})["." + g] = { width: "50%" }),
            (n.label = "split-view"),
            n)
          ),
          b = i.css({
            width: "100%",
            background: h.diffViewerBackground,
            pre: { margin: 0, whiteSpace: "pre-wrap", lineHeight: "25px" },
            label: "diff-container",
            borderCollapse: "collapse",
          }),
          w = i.css({
            color: h.codeFoldContentColor,
            label: "code-fold-content",
          }),
          k = i.css({ color: h.diffViewerColor, label: "content-text" }),
          E = i.css(
            (((o = {
              background: h.diffViewerTitleBackground,
              padding: 10,
              borderBottom: "1px solid " + h.diffViewerTitleBorderColor,
              label: "title-block",
              ":last-child": {
                borderLeft: "1px solid " + h.diffViewerTitleBorderColor,
              },
            })["." + k] = { color: h.diffViewerTitleColor }),
            o)
          ),
          N = i.css({ color: h.gutterColor, label: "line-number" }),
          L = i.css(
            (((a = {
              background: h.removedBackground,
              color: h.removedColor,
              pre: { color: h.removedColor },
            })["." + N] = { color: h.removedGutterColor }),
            (a.label = "diff-removed"),
            a)
          ),
          C = i.css(
            (((s = {
              background: h.addedBackground,
              color: h.addedColor,
              pre: { color: h.addedColor },
            })["." + N] = { color: h.addedGutterColor }),
            (s.label = "diff-added"),
            s)
          ),
          D = i.css({
            padding: 2,
            display: "inline-flex",
            borderRadius: 1,
            label: "word-diff",
          }),
          S = i.css({ background: h.wordAddedBackground, label: "word-added" }),
          x = i.css({
            background: h.wordRemovedBackground,
            label: "word-removed",
          }),
          T = i.css({
            backgroundColor: h.codeFoldGutterBackground,
            label: "code-fold-gutter",
          }),
          A = i.css({
            backgroundColor: h.codeFoldBackground,
            height: 40,
            fontSize: 14,
            fontWeight: 700,
            label: "code-fold",
            a: {
              textDecoration: "underline !important",
              cursor: "pointer",
              pre: { display: "inline" },
            },
          }),
          _ = i.css({
            backgroundColor: h.emptyLineBackground,
            label: "empty-line",
          }),
          B = i.css(
            (((d = {
              width: 25,
              paddingLeft: 10,
              paddingRight: 10,
              userSelect: "none",
              label: "marker",
            })["&." + C] = { pre: { color: h.addedColor } }),
            (d["&." + L] = { pre: { color: h.removedColor } }),
            d)
          ),
          F = i.css(
            (((c = {
              background: h.highlightBackground,
              label: "highlighted-line",
            })["." + S + ", ." + x] = { backgroundColor: "initial" }),
            c)
          ),
          $ = i.css({ label: "highlighted-gutter" }),
          O = i.css(
            (((u = {
              userSelect: "none",
              minWidth: 50,
              padding: "0 10px",
              label: "gutter",
              textAlign: "right",
              background: h.gutterBackground,
              "&:hover": {
                cursor: "pointer",
                background: h.gutterBackgroundDark,
                pre: { opacity: 1 },
              },
              pre: { opacity: 0.5 },
            })["&." + C] = { background: h.addedGutterBackground }),
            (u["&." + L] = { background: h.removedGutterBackground }),
            (u["&." + $] = {
              background: h.highlightGutterBackground,
              "&:hover": { background: h.highlightGutterBackground },
            }),
            u)
          ),
          R = i.css({
            "&:hover": { background: h.gutterBackground, cursor: "initial" },
            label: "empty-gutter",
          }),
          V = {
            diffContainer: b,
            diffRemoved: L,
            diffAdded: C,
            splitView: y,
            marker: B,
            highlightedGutter: $,
            highlightedLine: F,
            gutter: O,
            line: i.css({ verticalAlign: "baseline", label: "line" }),
            wordDiff: D,
            wordAdded: S,
            wordRemoved: x,
            codeFoldGutter: T,
            codeFold: A,
            emptyGutter: R,
            emptyLine: _,
            lineNumber: N,
            contentText: k,
            content: g,
            codeFoldContent: w,
            titleBlock: E,
          },
          P = Object.keys(m).reduce(function (e, t) {
            var n;
            return r({}, e, (((n = {})[t] = i.css(m[t])), n));
          }, {});
        return Object.keys(V).reduce(function (e, t) {
          var n;
          return r({}, e, (((n = {})[t] = P[t] ? i.cx(V[t], P[t]) : V[t]), n));
        }, {});
      };
    },
  },
]);
