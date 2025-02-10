/* 
 * Copyright 2016 Google Inc. All Rights Reserved.
 * See ../LICENSES.txt for licenses of bundled libraries
 */
!function(t) {
  if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = t();
  else if ("function" == typeof define && define.amd)
      define([], t);
  else {
      ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).app = t()
  }
}((function() {
  var t;
  return function t(e, n, r) {
      function i(s, a) {
          if (!n[s]) {
              if (!e[s]) {
                  var u = "function" == typeof require && require;
                  if (!a && u)
                      return u(s, !0);
                  if (o)
                      return o(s, !0);
                  var l = new Error("Cannot find module '" + s + "'");
                  throw l.code = "MODULE_NOT_FOUND",
                  l
              }
              var c = n[s] = {
                  exports: {}
              };
              e[s][0].call(c.exports, (function(t) {
                  return i(e[s][1][t] || t)
              }
              ), c, c.exports, t, e, n, r)
          }
          return n[s].exports
      }
      for (var o = "function" == typeof require && require, s = 0; s < r.length; s++)
          i(r[s]);
      return i
  }({
      1: [function(e, n, r) {
          (function(e) {
              /*!
* async
* https://github.com/caolan/async
*
* Copyright 2010-2014 Caolan McMahon
* Released under the MIT license
*/
              !function() {
                  var r, i, o = {};
                  function s(t) {
                      var e = !1;
                      return function() {
                          if (e)
                              throw new Error("Callback was already called.");
                          e = !0,
                          t.apply(r, arguments)
                      }
                  }
                  null != (r = this) && (i = r.async),
                  o.noConflict = function() {
                      return r.async = i,
                      o
                  }
                  ;
                  var a = Object.prototype.toString
                    , u = Array.isArray || function(t) {
                      return "[object Array]" === a.call(t)
                  }
                    , l = function(t, e) {
                      if (t.forEach)
                          return t.forEach(e);
                      for (var n = 0; n < t.length; n += 1)
                          e(t[n], n, t)
                  }
                    , c = function(t, e) {
                      if (t.map)
                          return t.map(e);
                      var n = [];
                      return l(t, (function(t, r, i) {
                          n.push(e(t, r, i))
                      }
                      )),
                      n
                  }
                    , h = function(t) {
                      if (Object.keys)
                          return Object.keys(t);
                      var e = [];
                      for (var n in t)
                          t.hasOwnProperty(n) && e.push(n);
                      return e
                  };
                  void 0 !== e && e.nextTick ? (o.nextTick = e.nextTick,
                  "undefined" != typeof setImmediate ? o.setImmediate = function(t) {
                      setImmediate(t)
                  }
                  : o.setImmediate = o.nextTick) : "function" == typeof setImmediate ? (o.nextTick = function(t) {
                      setImmediate(t)
                  }
                  ,
                  o.setImmediate = o.nextTick) : (o.nextTick = function(t) {
                      setTimeout(t, 0)
                  }
                  ,
                  o.setImmediate = o.nextTick),
                  o.each = function(t, e, n) {
                      if (n = n || function() {}
                      ,
                      !t.length)
                          return n();
                      var r = 0;
                      function i(e) {
                          e ? (n(e),
                          n = function() {}
                          ) : (r += 1) >= t.length && n()
                      }
                      l(t, (function(t) {
                          e(t, s(i))
                      }
                      ))
                  }
                  ,
                  o.forEach = o.each,
                  o.eachSeries = function(t, e, n) {
                      if (n = n || function() {}
                      ,
                      !t.length)
                          return n();
                      var r = 0
                        , i = function() {
                          e(t[r], (function(e) {
                              e ? (n(e),
                              n = function() {}
                              ) : (r += 1) >= t.length ? n() : i()
                          }
                          ))
                      };
                      i()
                  }
                  ,
                  o.forEachSeries = o.eachSeries,
                  o.eachLimit = function(t, e, n, r) {
                      p(e).apply(null, [t, n, r])
                  }
                  ,
                  o.forEachLimit = o.eachLimit;
                  var p = function(t) {
                      return function(e, n, r) {
                          if (r = r || function() {}
                          ,
                          !e.length || t <= 0)
                              return r();
                          var i = 0
                            , o = 0
                            , s = 0;
                          !function a() {
                              if (i >= e.length)
                                  return r();
                              for (; s < t && o < e.length; )
                                  s += 1,
                                  n(e[(o += 1) - 1], (function(t) {
                                      t ? (r(t),
                                      r = function() {}
                                      ) : (s -= 1,
                                      (i += 1) >= e.length ? r() : a())
                                  }
                                  ))
                          }()
                      }
                  }
                    , f = function(t) {
                      return function() {
                          var e = Array.prototype.slice.call(arguments);
                          return t.apply(null, [o.each].concat(e))
                      }
                  }
                    , d = function(t) {
                      return function() {
                          var e = Array.prototype.slice.call(arguments);
                          return t.apply(null, [o.eachSeries].concat(e))
                      }
                  }
                    , m = function(t, e, n, r) {
                      if (e = c(e, (function(t, e) {
                          return {
                              index: e,
                              value: t
                          }
                      }
                      )),
                      r) {
                          var i = [];
                          t(e, (function(t, e) {
                              n(t.value, (function(n, r) {
                                  i[t.index] = r,
                                  e(n)
                              }
                              ))
                          }
                          ), (function(t) {
                              r(t, i)
                          }
                          ))
                      } else
                          t(e, (function(t, e) {
                              n(t.value, (function(t) {
                                  e(t)
                              }
                              ))
                          }
                          ))
                  };
                  o.map = f(m),
                  o.mapSeries = d(m),
                  o.mapLimit = function(t, e, n, r) {
                      return v(e)(t, n, r)
                  }
                  ;
                  var v = function(t) {
                      return function(t, e) {
                          return function() {
                              var n = Array.prototype.slice.call(arguments);
                              return e.apply(null, [p(t)].concat(n))
                          }
                      }(t, m)
                  };
                  o.reduce = function(t, e, n, r) {
                      o.eachSeries(t, (function(t, r) {
                          n(e, t, (function(t, n) {
                              e = n,
                              r(t)
                          }
                          ))
                      }
                      ), (function(t) {
                          r(t, e)
                      }
                      ))
                  }
                  ,
                  o.inject = o.reduce,
                  o.foldl = o.reduce,
                  o.reduceRight = function(t, e, n, r) {
                      var i = c(t, (function(t) {
                          return t
                      }
                      )).reverse();
                      o.reduce(i, e, n, r)
                  }
                  ,
                  o.foldr = o.reduceRight;
                  var y = function(t, e, n, r) {
                      var i = [];
                      t(e = c(e, (function(t, e) {
                          return {
                              index: e,
                              value: t
                          }
                      }
                      )), (function(t, e) {
                          n(t.value, (function(n) {
                              n && i.push(t),
                              e()
                          }
                          ))
                      }
                      ), (function(t) {
                          r(c(i.sort((function(t, e) {
                              return t.index - e.index
                          }
                          )), (function(t) {
                              return t.value
                          }
                          )))
                      }
                      ))
                  };
                  o.filter = f(y),
                  o.filterSeries = d(y),
                  o.select = o.filter,
                  o.selectSeries = o.filterSeries;
                  var g = function(t, e, n, r) {
                      var i = [];
                      t(e = c(e, (function(t, e) {
                          return {
                              index: e,
                              value: t
                          }
                      }
                      )), (function(t, e) {
                          n(t.value, (function(n) {
                              n || i.push(t),
                              e()
                          }
                          ))
                      }
                      ), (function(t) {
                          r(c(i.sort((function(t, e) {
                              return t.index - e.index
                          }
                          )), (function(t) {
                              return t.value
                          }
                          )))
                      }
                      ))
                  };
                  o.reject = f(g),
                  o.rejectSeries = d(g);
                  var _ = function(t, e, n, r) {
                      t(e, (function(t, e) {
                          n(t, (function(n) {
                              n ? (r(t),
                              r = function() {}
                              ) : e()
                          }
                          ))
                      }
                      ), (function(t) {
                          r()
                      }
                      ))
                  };
                  o.detect = f(_),
                  o.detectSeries = d(_),
                  o.some = function(t, e, n) {
                      o.each(t, (function(t, r) {
                          e(t, (function(t) {
                              t && (n(!0),
                              n = function() {}
                              ),
                              r()
                          }
                          ))
                      }
                      ), (function(t) {
                          n(!1)
                      }
                      ))
                  }
                  ,
                  o.any = o.some,
                  o.every = function(t, e, n) {
                      o.each(t, (function(t, r) {
                          e(t, (function(t) {
                              t || (n(!1),
                              n = function() {}
                              ),
                              r()
                          }
                          ))
                      }
                      ), (function(t) {
                          n(!0)
                      }
                      ))
                  }
                  ,
                  o.all = o.every,
                  o.sortBy = function(t, e, n) {
                      o.map(t, (function(t, n) {
                          e(t, (function(e, r) {
                              e ? n(e) : n(null, {
                                  value: t,
                                  criteria: r
                              })
                          }
                          ))
                      }
                      ), (function(t, e) {
                          if (t)
                              return n(t);
                          n(null, c(e.sort((function(t, e) {
                              var n = t.criteria
                                , r = e.criteria;
                              return n < r ? -1 : n > r ? 1 : 0
                          }
                          )), (function(t) {
                              return t.value
                          }
                          )))
                      }
                      ))
                  }
                  ,
                  o.auto = function(t, e) {
                      e = e || function() {}
                      ;
                      var n = h(t)
                        , r = n.length;
                      if (!r)
                          return e();
                      var i = {}
                        , s = []
                        , a = function(t) {
                          s.unshift(t)
                      }
                        , c = function() {
                          r--,
                          l(s.slice(0), (function(t) {
                              t()
                          }
                          ))
                      };
                      a((function() {
                          if (!r) {
                              var t = e;
                              e = function() {}
                              ,
                              t(null, i)
                          }
                      }
                      )),
                      l(n, (function(n) {
                          var r = u(t[n]) ? t[n] : [t[n]]
                            , p = function(t) {
                              var r = Array.prototype.slice.call(arguments, 1);
                              if (r.length <= 1 && (r = r[0]),
                              t) {
                                  var s = {};
                                  l(h(i), (function(t) {
                                      s[t] = i[t]
                                  }
                                  )),
                                  s[n] = r,
                                  e(t, s),
                                  e = function() {}
                              } else
                                  i[n] = r,
                                  o.setImmediate(c)
                          }
                            , f = r.slice(0, Math.abs(r.length - 1)) || []
                            , d = function() {
                              return e = function(t, e) {
                                  return t && i.hasOwnProperty(e)
                              }
                              ,
                              r = !0,
                              ((t = f).reduce ? t.reduce(e, r) : (l(t, (function(t, n, i) {
                                  r = e(r, t, n, i)
                              }
                              )),
                              r)) && !i.hasOwnProperty(n);
                              var t, e, r
                          };
                          if (d())
                              r[r.length - 1](p, i);
                          else {
                              var m = function() {
                                  d() && (!function(t) {
                                      for (var e = 0; e < s.length; e += 1)
                                          if (s[e] === t)
                                              return void s.splice(e, 1)
                                  }(m),
                                  r[r.length - 1](p, i))
                              };
                              a(m)
                          }
                      }
                      ))
                  }
                  ,
                  o.retry = function(t, e, n) {
                      var r = [];
                      "function" == typeof t && (n = e,
                      e = t,
                      t = 5),
                      t = parseInt(t, 10) || 5;
                      var i = function(i, s) {
                          for (var a = function(t, e) {
                              return function(n) {
                                  t((function(t, r) {
                                      n(!t || e, {
                                          err: t,
                                          result: r
                                      })
                                  }
                                  ), s)
                              }
                          }; t; )
                              r.push(a(e, !(t -= 1)));
                          o.series(r, (function(t, e) {
                              e = e[e.length - 1],
                              (i || n)(e.err, e.result)
                          }
                          ))
                      };
                      return n ? i() : i
                  }
                  ,
                  o.waterfall = function(t, e) {
                      if (e = e || function() {}
                      ,
                      !u(t)) {
                          var n = new Error("First argument to waterfall must be an array of functions");
                          return e(n)
                      }
                      if (!t.length)
                          return e();
                      var r = function(t) {
                          return function(n) {
                              if (n)
                                  e.apply(null, arguments),
                                  e = function() {}
                                  ;
                              else {
                                  var i = Array.prototype.slice.call(arguments, 1)
                                    , s = t.next();
                                  s ? i.push(r(s)) : i.push(e),
                                  o.setImmediate((function() {
                                      t.apply(null, i)
                                  }
                                  ))
                              }
                          }
                      };
                      r(o.iterator(t))()
                  }
                  ;
                  var b = function(t, e, n) {
                      if (n = n || function() {}
                      ,
                      u(e))
                          t.map(e, (function(t, e) {
                              t && t((function(t) {
                                  var n = Array.prototype.slice.call(arguments, 1);
                                  n.length <= 1 && (n = n[0]),
                                  e.call(null, t, n)
                              }
                              ))
                          }
                          ), n);
                      else {
                          var r = {};
                          t.each(h(e), (function(t, n) {
                              e[t]((function(e) {
                                  var i = Array.prototype.slice.call(arguments, 1);
                                  i.length <= 1 && (i = i[0]),
                                  r[t] = i,
                                  n(e)
                              }
                              ))
                          }
                          ), (function(t) {
                              n(t, r)
                          }
                          ))
                      }
                  };
                  o.parallel = function(t, e) {
                      b({
                          map: o.map,
                          each: o.each
                      }, t, e)
                  }
                  ,
                  o.parallelLimit = function(t, e, n) {
                      b({
                          map: v(e),
                          each: p(e)
                      }, t, n)
                  }
                  ,
                  o.series = function(t, e) {
                      if (e = e || function() {}
                      ,
                      u(t))
                          o.mapSeries(t, (function(t, e) {
                              t && t((function(t) {
                                  var n = Array.prototype.slice.call(arguments, 1);
                                  n.length <= 1 && (n = n[0]),
                                  e.call(null, t, n)
                              }
                              ))
                          }
                          ), e);
                      else {
                          var n = {};
                          o.eachSeries(h(t), (function(e, r) {
                              t[e]((function(t) {
                                  var i = Array.prototype.slice.call(arguments, 1);
                                  i.length <= 1 && (i = i[0]),
                                  n[e] = i,
                                  r(t)
                              }
                              ))
                          }
                          ), (function(t) {
                              e(t, n)
                          }
                          ))
                      }
                  }
                  ,
                  o.iterator = function(t) {
                      var e = function(n) {
                          var r = function() {
                              return t.length && t[n].apply(null, arguments),
                              r.next()
                          };
                          return r.next = function() {
                              return n < t.length - 1 ? e(n + 1) : null
                          }
                          ,
                          r
                      };
                      return e(0)
                  }
                  ,
                  o.apply = function(t) {
                      var e = Array.prototype.slice.call(arguments, 1);
                      return function() {
                          return t.apply(null, e.concat(Array.prototype.slice.call(arguments)))
                      }
                  }
                  ;
                  var w = function(t, e, n, r) {
                      var i = [];
                      t(e, (function(t, e) {
                          n(t, (function(t, n) {
                              i = i.concat(n || []),
                              e(t)
                          }
                          ))
                      }
                      ), (function(t) {
                          r(t, i)
                      }
                      ))
                  };
                  o.concat = f(w),
                  o.concatSeries = d(w),
                  o.whilst = function(t, e, n) {
                      t() ? e((function(r) {
                          if (r)
                              return n(r);
                          o.whilst(t, e, n)
                      }
                      )) : n()
                  }
                  ,
                  o.doWhilst = function(t, e, n) {
                      t((function(r) {
                          if (r)
                              return n(r);
                          var i = Array.prototype.slice.call(arguments, 1);
                          e.apply(null, i) ? o.doWhilst(t, e, n) : n()
                      }
                      ))
                  }
                  ,
                  o.until = function(t, e, n) {
                      t() ? n() : e((function(r) {
                          if (r)
                              return n(r);
                          o.until(t, e, n)
                      }
                      ))
                  }
                  ,
                  o.doUntil = function(t, e, n) {
                      t((function(r) {
                          if (r)
                              return n(r);
                          var i = Array.prototype.slice.call(arguments, 1);
                          e.apply(null, i) ? n() : o.doUntil(t, e, n)
                      }
                      ))
                  }
                  ,
                  o.queue = function(t, e) {
                      function n(t, e, n, r) {
                          if (t.started || (t.started = !0),
                          u(e) || (e = [e]),
                          0 == e.length)
                              return o.setImmediate((function() {
                                  t.drain && t.drain()
                              }
                              ));
                          l(e, (function(e) {
                              var i = {
                                  data: e,
                                  callback: "function" == typeof r ? r : null
                              };
                              n ? t.tasks.unshift(i) : t.tasks.push(i),
                              t.saturated && t.tasks.length === t.concurrency && t.saturated(),
                              o.setImmediate(t.process)
                          }
                          ))
                      }
                      void 0 === e && (e = 1);
                      var r = 0
                        , i = {
                          tasks: [],
                          concurrency: e,
                          saturated: null,
                          empty: null,
                          drain: null,
                          started: !1,
                          paused: !1,
                          push: function(t, e) {
                              n(i, t, !1, e)
                          },
                          kill: function() {
                              i.drain = null,
                              i.tasks = []
                          },
                          unshift: function(t, e) {
                              n(i, t, !0, e)
                          },
                          process: function() {
                              if (!i.paused && r < i.concurrency && i.tasks.length) {
                                  var e = i.tasks.shift();
                                  i.empty && 0 === i.tasks.length && i.empty(),
                                  r += 1;
                                  var n = s((function() {
                                      r -= 1,
                                      e.callback && e.callback.apply(e, arguments),
                                      i.drain && i.tasks.length + r === 0 && i.drain(),
                                      i.process()
                                  }
                                  ));
                                  t(e.data, n)
                              }
                          },
                          length: function() {
                              return i.tasks.length
                          },
                          running: function() {
                              return r
                          },
                          idle: function() {
                              return i.tasks.length + r === 0
                          },
                          pause: function() {
                              !0 !== i.paused && (i.paused = !0,
                              i.process())
                          },
                          resume: function() {
                              !1 !== i.paused && (i.paused = !1,
                              i.process())
                          }
                      };
                      return i
                  }
                  ,
                  o.priorityQueue = function(t, e) {
                      function n(t, e) {
                          return t.priority - e.priority
                      }
                      var r = o.queue(t, e);
                      return r.push = function(t, e, i) {
                          !function(t, e, r, i) {
                              if (t.started || (t.started = !0),
                              u(e) || (e = [e]),
                              0 == e.length)
                                  return o.setImmediate((function() {
                                      t.drain && t.drain()
                                  }
                                  ));
                              l(e, (function(e) {
                                  var s = {
                                      data: e,
                                      priority: r,
                                      callback: "function" == typeof i ? i : null
                                  };
                                  t.tasks.splice(function(t, e, n) {
                                      for (var r = -1, i = t.length - 1; r < i; ) {
                                          var o = r + (i - r + 1 >>> 1);
                                          n(e, t[o]) >= 0 ? r = o : i = o - 1
                                      }
                                      return r
                                  }(t.tasks, s, n) + 1, 0, s),
                                  t.saturated && t.tasks.length === t.concurrency && t.saturated(),
                                  o.setImmediate(t.process)
                              }
                              ))
                          }(r, t, e, i)
                      }
                      ,
                      delete r.unshift,
                      r
                  }
                  ,
                  o.cargo = function(t, e) {
                      var n = !1
                        , r = []
                        , i = {
                          tasks: r,
                          payload: e,
                          saturated: null,
                          empty: null,
                          drain: null,
                          drained: !0,
                          push: function(t, n) {
                              u(t) || (t = [t]),
                              l(t, (function(t) {
                                  r.push({
                                      data: t,
                                      callback: "function" == typeof n ? n : null
                                  }),
                                  i.drained = !1,
                                  i.saturated && r.length === e && i.saturated()
                              }
                              )),
                              o.setImmediate(i.process)
                          },
                          process: function o() {
                              if (!n) {
                                  if (0 === r.length)
                                      return i.drain && !i.drained && i.drain(),
                                      void (i.drained = !0);
                                  var s = "number" == typeof e ? r.splice(0, e) : r.splice(0, r.length)
                                    , a = c(s, (function(t) {
                                      return t.data
                                  }
                                  ));
                                  i.empty && i.empty(),
                                  n = !0,
                                  t(a, (function() {
                                      n = !1;
                                      var t = arguments;
                                      l(s, (function(e) {
                                          e.callback && e.callback.apply(null, t)
                                      }
                                      )),
                                      o()
                                  }
                                  ))
                              }
                          },
                          length: function() {
                              return r.length
                          },
                          running: function() {
                              return n
                          }
                      };
                      return i
                  }
                  ;
                  var x = function(t) {
                      return function(e) {
                          var n = Array.prototype.slice.call(arguments, 1);
                          e.apply(null, n.concat([function(e) {
                              var n = Array.prototype.slice.call(arguments, 1);
                              "undefined" != typeof console && (e ? console.error && console.error(e) : console[t] && l(n, (function(e) {
                                  console[t](e)
                              }
                              )))
                          }
                          ]))
                      }
                  };
                  o.log = x("log"),
                  o.dir = x("dir"),
                  o.memoize = function(t, e) {
                      var n = {}
                        , r = {};
                      e = e || function(t) {
                          return t
                      }
                      ;
                      var i = function() {
                          var i = Array.prototype.slice.call(arguments)
                            , s = i.pop()
                            , a = e.apply(null, i);
                          a in n ? o.nextTick((function() {
                              s.apply(null, n[a])
                          }
                          )) : a in r ? r[a].push(s) : (r[a] = [s],
                          t.apply(null, i.concat([function() {
                              n[a] = arguments;
                              var t = r[a];
                              delete r[a];
                              for (var e = 0, i = t.length; e < i; e++)
                                  t[e].apply(null, arguments)
                          }
                          ])))
                      };
                      return i.memo = n,
                      i.unmemoized = t,
                      i
                  }
                  ,
                  o.unmemoize = function(t) {
                      return function() {
                          return (t.unmemoized || t).apply(null, arguments)
                      }
                  }
                  ,
                  o.times = function(t, e, n) {
                      for (var r = [], i = 0; i < t; i++)
                          r.push(i);
                      return o.map(r, e, n)
                  }
                  ,
                  o.timesSeries = function(t, e, n) {
                      for (var r = [], i = 0; i < t; i++)
                          r.push(i);
                      return o.mapSeries(r, e, n)
                  }
                  ,
                  o.seq = function() {
                      var t = arguments;
                      return function() {
                          var e = this
                            , n = Array.prototype.slice.call(arguments)
                            , r = n.pop();
                          o.reduce(t, n, (function(t, n, r) {
                              n.apply(e, t.concat([function() {
                                  var t = arguments[0]
                                    , e = Array.prototype.slice.call(arguments, 1);
                                  r(t, e)
                              }
                              ]))
                          }
                          ), (function(t, n) {
                              r.apply(e, [t].concat(n))
                          }
                          ))
                      }
                  }
                  ,
                  o.compose = function() {
                      return o.seq.apply(null, Array.prototype.reverse.call(arguments))
                  }
                  ;
                  var E = function(t, e) {
                      var n = function() {
                          var n = this
                            , r = Array.prototype.slice.call(arguments)
                            , i = r.pop();
                          return t(e, (function(t, e) {
                              t.apply(n, r.concat([e]))
                          }
                          ), i)
                      };
                      if (arguments.length > 2) {
                          var r = Array.prototype.slice.call(arguments, 2);
                          return n.apply(this, r)
                      }
                      return n
                  };
                  o.applyEach = f(E),
                  o.applyEachSeries = d(E),
                  o.forever = function(t, e) {
                      !function n(r) {
                          if (r) {
                              if (e)
                                  return e(r);
                              throw r
                          }
                          t(n)
                      }()
                  }
                  ,
                  void 0 !== n && n.exports ? n.exports = o : void 0 !== t && t.amd ? t([], (function() {
                      return o
                  }
                  )) : r.async = o
              }()
          }
          ).call(this, e("_process"))
      }
      , {
          _process: 211
      }],
      2: [function(e, n, r) {
          /*!
* Bowser - a browser detector
* https://github.com/ded/bowser
* MIT License | (c) Dustin Diaz 2014
*/
          !function(e, r) {
              void 0 !== n && n.exports ? n.exports.browser = r() : "function" == typeof t && t.amd ? t(r) : this.bowser = r()
          }(0, (function() {
              var t = !0;
              function e(e) {
                  function n(t) {
                      var n = e.match(t);
                      return n && n.length > 1 && n[1] || ""
                  }
                  var r, i = n(/(ipod|iphone|ipad)/i).toLowerCase(), o = !/like android/i.test(e) && /android/i.test(e), s = n(/version\/(\d+(\.\d+)?)/i), a = /tablet/i.test(e), u = !a && /[^-]mobi/i.test(e);
                  /opera|opr/i.test(e) ? r = {
                      name: "Opera",
                      opera: t,
                      version: s || n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
                  } : /windows phone/i.test(e) ? r = {
                      name: "Windows Phone",
                      windowsphone: t,
                      msie: t,
                      version: n(/iemobile\/(\d+(\.\d+)?)/i)
                  } : /msie|trident/i.test(e) ? r = {
                      name: "Internet Explorer",
                      msie: t,
                      version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                  } : /chrome|crios|crmo/i.test(e) ? r = {
                      name: "Chrome",
                      chrome: t,
                      version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                  } : i ? (r = {
                      name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
                  },
                  s && (r.version = s)) : /sailfish/i.test(e) ? r = {
                      name: "Sailfish",
                      sailfish: t,
                      version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                  } : /seamonkey\//i.test(e) ? r = {
                      name: "SeaMonkey",
                      seamonkey: t,
                      version: n(/seamonkey\/(\d+(\.\d+)?)/i)
                  } : /firefox|iceweasel/i.test(e) ? (r = {
                      name: "Firefox",
                      firefox: t,
                      version: n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
                  },
                  /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (r.firefoxos = t)) : /silk/i.test(e) ? r = {
                      name: "Amazon Silk",
                      silk: t,
                      version: n(/silk\/(\d+(\.\d+)?)/i)
                  } : o ? r = {
                      name: "Android",
                      version: s
                  } : /phantom/i.test(e) ? r = {
                      name: "PhantomJS",
                      phantom: t,
                      version: n(/phantomjs\/(\d+(\.\d+)?)/i)
                  } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? r = {
                      name: "BlackBerry",
                      blackberry: t,
                      version: s || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                  } : /(web|hpw)os/i.test(e) ? (r = {
                      name: "WebOS",
                      webos: t,
                      version: s || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                  },
                  /touchpad\//i.test(e) && (r.touchpad = t)) : r = /bada/i.test(e) ? {
                      name: "Bada",
                      bada: t,
                      version: n(/dolfin\/(\d+(\.\d+)?)/i)
                  } : /tizen/i.test(e) ? {
                      name: "Tizen",
                      tizen: t,
                      version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || s
                  } : /safari/i.test(e) ? {
                      name: "Safari",
                      safari: t,
                      version: s
                  } : {},
                  /(apple)?webkit/i.test(e) ? (r.name = r.name || "Webkit",
                  r.webkit = t,
                  !r.version && s && (r.version = s)) : !r.opera && /gecko\//i.test(e) && (r.name = r.name || "Gecko",
                  r.gecko = t,
                  r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)),
                  o || r.silk ? r.android = t : i && (r[i] = t,
                  r.ios = t);
                  var l = "";
                  i ? l = (l = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? l = n(/android[ \/-](\d+(\.\d+)*)/i) : r.windowsphone ? l = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.webos ? l = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? l = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? l = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (l = n(/tizen[\/\s](\d+(\.\d+)*)/i)),
                  l && (r.osversion = l);
                  var c = l.split(".")[0];
                  return a || "ipad" == i || o && (3 == c || 4 == c && !u) || r.silk ? r.tablet = t : (u || "iphone" == i || "ipod" == i || o || r.blackberry || r.webos || r.bada) && (r.mobile = t),
                  r.msie && r.version >= 10 || r.chrome && r.version >= 20 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 ? r.a = t : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 ? r.c = t : r.x = t,
                  r
              }
              var n = e("undefined" != typeof navigator ? navigator.userAgent : "");
              return n._detect = e,
              n
          }
          ))
      }
      , {}],
      3: [function(e, n, r) {
          /*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
          var i = i || "undefined" != typeof navigator && navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator) || function(t) {
              "use strict";
              if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
                  var e = t.document
                    , n = function() {
                      return t.URL || t.webkitURL || t
                  }
                    , r = e.createElementNS("http://www.w3.org/1999/xhtml", "a")
                    , i = "download"in r
                    , o = t.webkitRequestFileSystem
                    , s = t.requestFileSystem || o || t.mozRequestFileSystem
                    , a = function(e) {
                      (t.setImmediate || t.setTimeout)((function() {
                          throw e
                      }
                      ), 0)
                  }
                    , u = 0
                    , l = function(e) {
                      var r = function() {
                          "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
                      };
                      t.chrome ? r() : setTimeout(r, 500)
                  }
                    , c = function(t, e, n) {
                      for (var r = (e = [].concat(e)).length; r--; ) {
                          var i = t["on" + e[r]];
                          if ("function" == typeof i)
                              try {
                                  i.call(t, n || t)
                              } catch (t) {
                                  a(t)
                              }
                      }
                  }
                    , h = function(a, h) {
                      var p, f, d, m, v, y = this, g = a.type, _ = !1, b = function() {
                          c(y, "writestart progress write writeend".split(" "))
                      }, w = function() {
                          (!_ && p || (p = n().createObjectURL(a)),
                          f) ? f.location.href = p : null == t.open(p, "_blank") && "undefined" != typeof safari && (t.location.href = p);
                          y.readyState = y.DONE,
                          b(),
                          l(p)
                      }, x = function(t) {
                          return function() {
                              if (y.readyState !== y.DONE)
                                  return t.apply(this, arguments)
                          }
                      }, E = {
                          create: !0,
                          exclusive: !1
                      };
                      if (y.readyState = y.INIT,
                      h || (h = "download"),
                      i)
                          return p = n().createObjectURL(a),
                          r.href = p,
                          r.download = h,
                          m = r,
                          (v = e.createEvent("MouseEvents")).initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                          m.dispatchEvent(v),
                          y.readyState = y.DONE,
                          b(),
                          void l(p);
                      t.chrome && g && "application/octet-stream" !== g && (d = a.slice || a.webkitSlice,
                      a = d.call(a, 0, a.size, "application/octet-stream"),
                      _ = !0),
                      o && "download" !== h && (h += ".download"),
                      ("application/octet-stream" === g || o) && (f = t),
                      s ? (u += a.size,
                      s(t.TEMPORARY, u, x((function(t) {
                          t.root.getDirectory("saved", E, x((function(t) {
                              var e = function() {
                                  t.getFile(h, E, x((function(t) {
                                      t.createWriter(x((function(e) {
                                          e.onwriteend = function(e) {
                                              f.location.href = t.toURL(),
                                              y.readyState = y.DONE,
                                              c(y, "writeend", e),
                                              l(t)
                                          }
                                          ,
                                          e.onerror = function() {
                                              var t = e.error;
                                              t.code !== t.ABORT_ERR && w()
                                          }
                                          ,
                                          "writestart progress write abort".split(" ").forEach((function(t) {
                                              e["on" + t] = y["on" + t]
                                          }
                                          )),
                                          e.write(a),
                                          y.abort = function() {
                                              e.abort(),
                                              y.readyState = y.DONE
                                          }
                                          ,
                                          y.readyState = y.WRITING
                                      }
                                      )), w)
                                  }
                                  )), w)
                              };
                              t.getFile(h, {
                                  create: !1
                              }, x((function(t) {
                                  t.remove(),
                                  e()
                              }
                              )), x((function(t) {
                                  t.code === t.NOT_FOUND_ERR ? e() : w()
                              }
                              )))
                          }
                          )), w)
                      }
                      )), w)) : w()
                  }
                    , p = h.prototype;
                  return p.abort = function() {
                      this.readyState = this.DONE,
                      c(this, "abort")
                  }
                  ,
                  p.readyState = p.INIT = 0,
                  p.WRITING = 1,
                  p.DONE = 2,
                  p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null,
                  function(t, e) {
                      return new h(t,e)
                  }
              }
          }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
          void 0 !== n && n.exports ? n.exports = i : null != t && null != t.amd && t([], (function() {
              return i
          }
          ))
      }
      , {}],
      4: [function(t, e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", {
              value: !0
          }),
          n.setMatrixArrayType = function(t) {
              n.ARRAY_TYPE = i = t
          }
          ,
          n.toRadian = function(t) {
              return t * s
          }
          ,
          n.equals = function(t, e) {
              return Math.abs(t - e) <= r * Math.max(1, Math.abs(t), Math.abs(e))
          }
          ,
          n.RANDOM = n.ARRAY_TYPE = n.EPSILON = void 0;
          var r = 1e-6;
          n.EPSILON = r;
          var i = "undefined" != typeof Float32Array ? Float32Array : Array;
          n.ARRAY_TYPE = i;
          var o = Math.random;
          n.RANDOM = o;
          var s = Math.PI / 180;
          Math.hypot || (Math.hypot = function() {
              for (var t = 0, e = arguments.length; e--; )
                  t += arguments[e] * arguments[e];
              return Math.sqrt(t)
          }
          )
      }
      , {}],
      5: [function(t, e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", {
              value: !0
          }),
          n.vec4 = n.vec3 = n.vec2 = n.quat2 = n.quat = n.mat4 = n.mat3 = n.mat2d = n.mat2 = n.glMatrix = void 0;
          var r = f(t("./common.js"));
          n.glMatrix = r;
          var i = f(t("./mat2.js"));
          n.mat2 = i;
          var o = f(t("./mat2d.js"));
          n.mat2d = o;
          var s = f(t("./mat3.js"));
          n.mat3 = s;
          var a = f(t("./mat4.js"));
          n.mat4 = a;
          var u = f(t("./quat.js"));
          n.quat = u;
          var l = f(t("./quat2.js"));
          n.quat2 = l;
          var c = f(t("./vec2.js"));
          n.vec2 = c;
          var h = f(t("./vec3.js"));
          n.vec3 = h;
          var p = f(t("./vec4.js"));
          function f(t) {
              if (t && t.__esModule)
                  return t;
              var e = {};
              if (null != t)
                  for (var n in t)
                      if (Object.prototype.hasOwnProperty.call(t, n)) {
                          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                          r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                      }
              return e.default = t,
              e
          }
          n.vec4 = p
      }
      , {
          "./common.js": 4,
          "./mat2.js": 6,
          "./mat2d.js": 7,
          "./mat3.js": 8,
          "./mat4.js": 9,
          "./quat.js": 10,
          "./quat2.js": 11,
          "./vec2.js": 12,
          "./vec3.js": 13,
          "./vec4.js": 14
      }],
      6: [function(t, e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", {
              value: !0
          }),
          n.create = function() {
              var t = new r.ARRAY_TYPE(4);
              r.ARRAY_TYPE != Float32Array && (t[1] = 0,
              t[2] = 0);
              return t[0] = 1,
              t[3] = 1,
              t
          }
          ,
          n.clone = function(t) {
              var e = new r.ARRAY_TYPE(4);
              return e[0] = t[0],
              e[1] = t[1],
              e[2] = t[2],
              e[3] = t[3],
              e
          }
          ,
          n.copy = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[3],
              t
          }
          ,
          n.identity = function(t) {
              return t[0] = 1,
              t[1] = 0,
              t[2] = 0,
              t[3] = 1,
              t
          }
          ,
          n.fromValues = function(t, e, n, i) {
              var o = new r.ARRAY_TYPE(4);
              return o[0] = t,
              o[1] = e,
              o[2] = n,
              o[3] = i,
              o
          }
          ,
          n.set = function(t, e, n, r, i) {
              return t[0] = e,
              t[1] = n,
              t[2] = r,
              t[3] = i,
              t
          }
          ,
          n.transpose = function(t, e) {
              if (t === e) {
                  var n = e[1];
                  t[1] = e[2],
                  t[2] = n
              } else
                  t[0] = e[0],
                  t[1] = e[2],
                  t[2] = e[1],
                  t[3] = e[3];
              return t
          }
          ,
          n.invert = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = n * o - i * r;
              if (!s)
                  return null;
              return s = 1 / s,
              t[0] = o * s,
              t[1] = -r * s,
              t[2] = -i * s,
              t[3] = n * s,
              t
          }
          ,
          n.adjoint = function(t, e) {
              var n = e[0];
              return t[0] = e[3],
              t[1] = -e[1],
              t[2] = -e[2],
              t[3] = n,
              t
          }
          ,
          n.determinant = function(t) {
              return t[0] * t[3] - t[2] * t[1]
          }
          ,
          n.multiply = i,
          n.rotate = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = Math.sin(n)
                , u = Math.cos(n);
              return t[0] = r * u + o * a,
              t[1] = i * u + s * a,
              t[2] = r * -a + o * u,
              t[3] = i * -a + s * u,
              t
          }
          ,
          n.scale = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = n[0]
                , u = n[1];
              return t[0] = r * a,
              t[1] = i * a,
              t[2] = o * u,
              t[3] = s * u,
              t
          }
          ,
          n.fromRotation = function(t, e) {
              var n = Math.sin(e)
                , r = Math.cos(e);
              return t[0] = r,
              t[1] = n,
              t[2] = -n,
              t[3] = r,
              t
          }
          ,
          n.fromScaling = function(t, e) {
              return t[0] = e[0],
              t[1] = 0,
              t[2] = 0,
              t[3] = e[1],
              t
          }
          ,
          n.str = function(t) {
              return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
          }
          ,
          n.frob = function(t) {
              return Math.hypot(t[0], t[1], t[2], t[3])
          }
          ,
          n.LDU = function(t, e, n, r) {
              return t[2] = r[2] / r[0],
              n[0] = r[0],
              n[1] = r[1],
              n[3] = r[3] - t[2] * n[1],
              [t, e, n]
          }
          ,
          n.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t[3] = e[3] + n[3],
              t
          }
          ,
          n.subtract = o,
          n.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
          }
          ,
          n.equals = function(t, e) {
              var n = t[0]
                , i = t[1]
                , o = t[2]
                , s = t[3]
                , a = e[0]
                , u = e[1]
                , l = e[2]
                , c = e[3];
              return Math.abs(n - a) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(i - u) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(s - c) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(c))
          }
          ,
          n.multiplyScalar = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t[3] = e[3] * n,
              t
          }
          ,
          n.multiplyScalarAndAdd = function(t, e, n, r) {
              return t[0] = e[0] + n[0] * r,
              t[1] = e[1] + n[1] * r,
              t[2] = e[2] + n[2] * r,
              t[3] = e[3] + n[3] * r,
              t
          }
          ,
          n.sub = n.mul = void 0;
          var r = function(t) {
              if (t && t.__esModule)
                  return t;
              var e = {};
              if (null != t)
                  for (var n in t)
                      if (Object.prototype.hasOwnProperty.call(t, n)) {
                          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                          r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                      }
              return e.default = t,
              e
          }(t("./common.js"));
          function i(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = n[0]
                , u = n[1]
                , l = n[2]
                , c = n[3];
              return t[0] = r * a + o * u,
              t[1] = i * a + s * u,
              t[2] = r * l + o * c,
              t[3] = i * l + s * c,
              t
          }
          function o(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t[2] = e[2] - n[2],
              t[3] = e[3] - n[3],
              t
          }
          var s = i;
          n.mul = s;
          var a = o;
          n.sub = a
      }
      , {
          "./common.js": 4
      }],
      7: [function(t, e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", {
              value: !0
          }),
          n.create = function() {
              var t = new r.ARRAY_TYPE(6);
              r.ARRAY_TYPE != Float32Array && (t[1] = 0,
              t[2] = 0,
              t[4] = 0,
              t[5] = 0);
              return t[0] = 1,
              t[3] = 1,
              t
          }
          ,
          n.clone = function(t) {
              var e = new r.ARRAY_TYPE(6);
              return e[0] = t[0],
              e[1] = t[1],
              e[2] = t[2],
              e[3] = t[3],
              e[4] = t[4],
              e[5] = t[5],
              e
          }
          ,
          n.copy = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[3],
              t[4] = e[4],
              t[5] = e[5],
              t
          }
          ,
          n.identity = function(t) {
              return t[0] = 1,
              t[1] = 0,
              t[2] = 0,
              t[3] = 1,
              t[4] = 0,
              t[5] = 0,
              t
          }
          ,
          n.fromValues = function(t, e, n, i, o, s) {
              var a = new r.ARRAY_TYPE(6);
              return a[0] = t,
              a[1] = e,
              a[2] = n,
              a[3] = i,
              a[4] = o,
              a[5] = s,
              a
          }
          ,
          n.set = function(t, e, n, r, i, o, s) {
              return t[0] = e,
              t[1] = n,
              t[2] = r,
              t[3] = i,
              t[4] = o,
              t[5] = s,
              t
          }
          ,
          n.invert = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = e[4]
                , a = e[5]
                , u = n * o - r * i;
              if (!u)
                  return null;
              return u = 1 / u,
              t[0] = o * u,
              t[1] = -r * u,
              t[2] = -i * u,
              t[3] = n * u,
              t[4] = (i * a - o * s) * u,
              t[5] = (r * s - n * a) * u,
              t
          }
          ,
          n.determinant = function(t) {
              return t[0] * t[3] - t[1] * t[2]
          }
          ,
          n.multiply = i,
          n.rotate = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , u = e[5]
                , l = Math.sin(n)
                , c = Math.cos(n);
              return t[0] = r * c + o * l,
              t[1] = i * c + s * l,
              t[2] = r * -l + o * c,
              t[3] = i * -l + s * c,
              t[4] = a,
              t[5] = u,
              t
          }
          ,
          n.scale = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , u = e[5]
                , l = n[0]
                , c = n[1];
              return t[0] = r * l,
              t[1] = i * l,
              t[2] = o * c,
              t[3] = s * c,
              t[4] = a,
              t[5] = u,
              t
          }
          ,
          n.translate = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , u = e[5]
                , l = n[0]
                , c = n[1];
              return t[0] = r,
              t[1] = i,
              t[2] = o,
              t[3] = s,
              t[4] = r * l + o * c + a,
              t[5] = i * l + s * c + u,
              t
          }
          ,
          n.fromRotation = function(t, e) {
              var n = Math.sin(e)
                , r = Math.cos(e);
              return t[0] = r,
              t[1] = n,
              t[2] = -n,
              t[3] = r,
              t[4] = 0,
              t[5] = 0,
              t
          }
          ,
          n.fromScaling = function(t, e) {
              return t[0] = e[0],
              t[1] = 0,
              t[2] = 0,
              t[3] = e[1],
              t[4] = 0,
              t[5] = 0,
              t
          }
          ,
          n.fromTranslation = function(t, e) {
              return t[0] = 1,
              t[1] = 0,
              t[2] = 0,
              t[3] = 1,
              t[4] = e[0],
              t[5] = e[1],
              t
          }
          ,
          n.str = function(t) {
              return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
          }
          ,
          n.frob = function(t) {
              return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1)
          }
          ,
          n.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t[3] = e[3] + n[3],
              t[4] = e[4] + n[4],
              t[5] = e[5] + n[5],
              t
          }
          ,
          n.subtract = o,
          n.multiplyScalar = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t[3] = e[3] * n,
              t[4] = e[4] * n,
              t[5] = e[5] * n,
              t
          }
          ,
          n.multiplyScalarAndAdd = function(t, e, n, r) {
              return t[0] = e[0] + n[0] * r,
              t[1] = e[1] + n[1] * r,
              t[2] = e[2] + n[2] * r,
              t[3] = e[3] + n[3] * r,
              t[4] = e[4] + n[4] * r,
              t[5] = e[5] + n[5] * r,
              t
          }
          ,
          n.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5]
          }
          ,
          n.equals = function(t, e) {
              var n = t[0]
                , i = t[1]
                , o = t[2]
                , s = t[3]
                , a = t[4]
                , u = t[5]
                , l = e[0]
                , c = e[1]
                , h = e[2]
                , p = e[3]
                , f = e[4]
                , d = e[5];
              return Math.abs(n - l) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(i - c) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(c)) && Math.abs(o - h) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(s - p) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(a - f) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(f)) && Math.abs(u - d) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(d))
          }
          ,
          n.sub = n.mul = void 0;
          var r = function(t) {
              if (t && t.__esModule)
                  return t;
              var e = {};
              if (null != t)
                  for (var n in t)
                      if (Object.prototype.hasOwnProperty.call(t, n)) {
                          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                          r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                      }
              return e.default = t,
              e
          }(t("./common.js"));
          function i(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , u = e[5]
                , l = n[0]
                , c = n[1]
                , h = n[2]
                , p = n[3]
                , f = n[4]
                , d = n[5];
              return t[0] = r * l + o * c,
              t[1] = i * l + s * c,
              t[2] = r * h + o * p,
              t[3] = i * h + s * p,
              t[4] = r * f + o * d + a,
              t[5] = i * f + s * d + u,
              t
          }
          function o(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t[2] = e[2] - n[2],
              t[3] = e[3] - n[3],
              t[4] = e[4] - n[4],
              t[5] = e[5] - n[5],
              t
          }
          var s = i;
          n.mul = s;
          var a = o;
          n.sub = a
      }
      , {
          "./common.js": 4
      }],
      8: [function(t, e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", {
              value: !0
          }),
          n.create = function() {
              var t = new r.ARRAY_TYPE(9);
              r.ARRAY_TYPE != Float32Array && (t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[5] = 0,
              t[6] = 0,
              t[7] = 0);
              return t[0] = 1,
              t[4] = 1,
              t[8] = 1,
              t
          }
          ,
          n.fromMat4 = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[4],
              t[4] = e[5],
              t[5] = e[6],
              t[6] = e[8],
              t[7] = e[9],
              t[8] = e[10],
              t
          }
          ,
          n.clone = function(t) {
              var e = new r.ARRAY_TYPE(9);
              return e[0] = t[0],
              e[1] = t[1],
              e[2] = t[2],
              e[3] = t[3],
              e[4] = t[4],
              e[5] = t[5],
              e[6] = t[6],
              e[7] = t[7],
              e[8] = t[8],
              e
          }
          ,
          n.copy = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[3],
              t[4] = e[4],
              t[5] = e[5],
              t[6] = e[6],
              t[7] = e[7],
              t[8] = e[8],
              t
          }
          ,
          n.fromValues = function(t, e, n, i, o, s, a, u, l) {
              var c = new r.ARRAY_TYPE(9);
              return c[0] = t,
              c[1] = e,
              c[2] = n,
              c[3] = i,
              c[4] = o,
              c[5] = s,
              c[6] = a,
              c[7] = u,
              c[8] = l,
              c
          }
          ,
          n.set = function(t, e, n, r, i, o, s, a, u, l) {
              return t[0] = e,
              t[1] = n,
              t[2] = r,
              t[3] = i,
              t[4] = o,
              t[5] = s,
              t[6] = a,
              t[7] = u,
              t[8] = l,
              t
          }
          ,
          n.identity = function(t) {
              return t[0] = 1,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 1,
              t[5] = 0,
              t[6] = 0,
              t[7] = 0,
              t[8] = 1,
              t
          }
          ,
          n.transpose = function(t, e) {
              if (t === e) {
                  var n = e[1]
                    , r = e[2]
                    , i = e[5];
                  t[1] = e[3],
                  t[2] = e[6],
                  t[3] = n,
                  t[5] = e[7],
                  t[6] = r,
                  t[7] = i
              } else
                  t[0] = e[0],
                  t[1] = e[3],
                  t[2] = e[6],
                  t[3] = e[1],
                  t[4] = e[4],
                  t[5] = e[7],
                  t[6] = e[2],
                  t[7] = e[5],
                  t[8] = e[8];
              return t
          }
          ,
          n.invert = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = e[4]
                , a = e[5]
                , u = e[6]
                , l = e[7]
                , c = e[8]
                , h = c * s - a * l
                , p = -c * o + a * u
                , f = l * o - s * u
                , d = n * h + r * p + i * f;
              if (!d)
                  return null;
              return d = 1 / d,
              t[0] = h * d,
              t[1] = (-c * r + i * l) * d,
              t[2] = (a * r - i * s) * d,
              t[3] = p * d,
              t[4] = (c * n - i * u) * d,
              t[5] = (-a * n + i * o) * d,
              t[6] = f * d,
              t[7] = (-l * n + r * u) * d,
              t[8] = (s * n - r * o) * d,
              t
          }
          ,
          n.adjoint = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = e[4]
                , a = e[5]
                , u = e[6]
                , l = e[7]
                , c = e[8];
              return t[0] = s * c - a * l,
              t[1] = i * l - r * c,
              t[2] = r * a - i * s,
              t[3] = a * u - o * c,
              t[4] = n * c - i * u,
              t[5] = i * o - n * a,
              t[6] = o * l - s * u,
              t[7] = r * u - n * l,
              t[8] = n * s - r * o,
              t
          }
          ,
          n.determinant = function(t) {
              var e = t[0]
                , n = t[1]
                , r = t[2]
                , i = t[3]
                , o = t[4]
                , s = t[5]
                , a = t[6]
                , u = t[7]
                , l = t[8];
              return e * (l * o - s * u) + n * (-l * i + s * a) + r * (u * i - o * a)
          }
          ,
          n.multiply = i,
          n.translate = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , u = e[5]
                , l = e[6]
                , c = e[7]
                , h = e[8]
                , p = n[0]
                , f = n[1];
              return t[0] = r,
              t[1] = i,
              t[2] = o,
              t[3] = s,
              t[4] = a,
              t[5] = u,
              t[6] = p * r + f * s + l,
              t[7] = p * i + f * a + c,
              t[8] = p * o + f * u + h,
              t
          }
          ,
          n.rotate = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , u = e[5]
                , l = e[6]
                , c = e[7]
                , h = e[8]
                , p = Math.sin(n)
                , f = Math.cos(n);
              return t[0] = f * r + p * s,
              t[1] = f * i + p * a,
              t[2] = f * o + p * u,
              t[3] = f * s - p * r,
              t[4] = f * a - p * i,
              t[5] = f * u - p * o,
              t[6] = l,
              t[7] = c,
              t[8] = h,
              t
          }
          ,
          n.scale = function(t, e, n) {
              var r = n[0]
                , i = n[1];
              return t[0] = r * e[0],
              t[1] = r * e[1],
              t[2] = r * e[2],
              t[3] = i * e[3],
              t[4] = i * e[4],
              t[5] = i * e[5],
              t[6] = e[6],
              t[7] = e[7],
              t[8] = e[8],
              t
          }
          ,
          n.fromTranslation = function(t, e) {
              return t[0] = 1,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 1,
              t[5] = 0,
              t[6] = e[0],
              t[7] = e[1],
              t[8] = 1,
              t
          }
          ,
          n.fromRotation = function(t, e) {
              var n = Math.sin(e)
                , r = Math.cos(e);
              return t[0] = r,
              t[1] = n,
              t[2] = 0,
              t[3] = -n,
              t[4] = r,
              t[5] = 0,
              t[6] = 0,
              t[7] = 0,
              t[8] = 1,
              t
          }
          ,
          n.fromScaling = function(t, e) {
              return t[0] = e[0],
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = e[1],
              t[5] = 0,
              t[6] = 0,
              t[7] = 0,
              t[8] = 1,
              t
          }
          ,
          n.fromMat2d = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = 0,
              t[3] = e[2],
              t[4] = e[3],
              t[5] = 0,
              t[6] = e[4],
              t[7] = e[5],
              t[8] = 1,
              t
          }
          ,
          n.fromQuat = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = n + n
                , a = r + r
                , u = i + i
                , l = n * s
                , c = r * s
                , h = r * a
                , p = i * s
                , f = i * a
                , d = i * u
                , m = o * s
                , v = o * a
                , y = o * u;
              return t[0] = 1 - h - d,
              t[3] = c - y,
              t[6] = p + v,
              t[1] = c + y,
              t[4] = 1 - l - d,
              t[7] = f - m,
              t[2] = p - v,
              t[5] = f + m,
              t[8] = 1 - l - h,
              t
          }
          ,
          n.normalFromMat4 = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = e[4]
                , a = e[5]
                , u = e[6]
                , l = e[7]
                , c = e[8]
                , h = e[9]
                , p = e[10]
                , f = e[11]
                , d = e[12]
                , m = e[13]
                , v = e[14]
                , y = e[15]
                , g = n * a - r * s
                , _ = n * u - i * s
                , b = n * l - o * s
                , w = r * u - i * a
                , x = r * l - o * a
                , E = i * l - o * u
                , M = c * m - h * d
                , S = c * v - p * d
                , T = c * y - f * d
                , C = h * v - p * m
                , P = h * y - f * m
                , O = p * y - f * v
                , L = g * O - _ * P + b * C + w * T - x * S + E * M;
              if (!L)
                  return null;
              return L = 1 / L,
              t[0] = (a * O - u * P + l * C) * L,
              t[1] = (u * T - s * O - l * S) * L,
              t[2] = (s * P - a * T + l * M) * L,
              t[3] = (i * P - r * O - o * C) * L,
              t[4] = (n * O - i * T + o * S) * L,
              t[5] = (r * T - n * P - o * M) * L,
              t[6] = (m * E - v * x + y * w) * L,
              t[7] = (v * b - d * E - y * _) * L,
              t[8] = (d * x - m * b + y * g) * L,
              t
          }
          ,
          n.projection = function(t, e, n) {
              return t[0] = 2 / e,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = -2 / n,
              t[5] = 0,
              t[6] = -1,
              t[7] = 1,
              t[8] = 1,
              t
          }
          ,
          n.str = function(t) {
              return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
          }
          ,
          n.frob = function(t) {
              return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
          }
          ,
          n.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t[3] = e[3] + n[3],
              t[4] = e[4] + n[4],
              t[5] = e[5] + n[5],
              t[6] = e[6] + n[6],
              t[7] = e[7] + n[7],
              t[8] = e[8] + n[8],
              t
          }
          ,
          n.subtract = o,
          n.multiplyScalar = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t[3] = e[3] * n,
              t[4] = e[4] * n,
              t[5] = e[5] * n,
              t[6] = e[6] * n,
              t[7] = e[7] * n,
              t[8] = e[8] * n,
              t
          }
          ,
          n.multiplyScalarAndAdd = function(t, e, n, r) {
              return t[0] = e[0] + n[0] * r,
              t[1] = e[1] + n[1] * r,
              t[2] = e[2] + n[2] * r,
              t[3] = e[3] + n[3] * r,
              t[4] = e[4] + n[4] * r,
              t[5] = e[5] + n[5] * r,
              t[6] = e[6] + n[6] * r,
              t[7] = e[7] + n[7] * r,
              t[8] = e[8] + n[8] * r,
              t
          }
          ,
          n.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
          }
          ,
          n.equals = function(t, e) {
              var n = t[0]
                , i = t[1]
                , o = t[2]
                , s = t[3]
                , a = t[4]
                , u = t[5]
                , l = t[6]
                , c = t[7]
                , h = t[8]
                , p = e[0]
                , f = e[1]
                , d = e[2]
                , m = e[3]
                , v = e[4]
                , y = e[5]
                , g = e[6]
                , _ = e[7]
                , b = e[8];
              return Math.abs(n - p) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(p)) && Math.abs(i - f) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(f)) && Math.abs(o - d) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(s - m) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(a - v) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(v)) && Math.abs(u - y) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(y)) && Math.abs(l - g) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(g)) && Math.abs(c - _) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(_)) && Math.abs(h - b) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(b))
          }
          ,
          n.sub = n.mul = void 0;
          var r = function(t) {
              if (t && t.__esModule)
                  return t;
              var e = {};
              if (null != t)
                  for (var n in t)
                      if (Object.prototype.hasOwnProperty.call(t, n)) {
                          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                          r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                      }
              return e.default = t,
              e
          }(t("./common.js"));
          function i(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , u = e[5]
                , l = e[6]
                , c = e[7]
                , h = e[8]
                , p = n[0]
                , f = n[1]
                , d = n[2]
                , m = n[3]
                , v = n[4]
                , y = n[5]
                , g = n[6]
                , _ = n[7]
                , b = n[8];
              return t[0] = p * r + f * s + d * l,
              t[1] = p * i + f * a + d * c,
              t[2] = p * o + f * u + d * h,
              t[3] = m * r + v * s + y * l,
              t[4] = m * i + v * a + y * c,
              t[5] = m * o + v * u + y * h,
              t[6] = g * r + _ * s + b * l,
              t[7] = g * i + _ * a + b * c,
              t[8] = g * o + _ * u + b * h,
              t
          }
          function o(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t[2] = e[2] - n[2],
              t[3] = e[3] - n[3],
              t[4] = e[4] - n[4],
              t[5] = e[5] - n[5],
              t[6] = e[6] - n[6],
              t[7] = e[7] - n[7],
              t[8] = e[8] - n[8],
              t
          }
          var s = i;
          n.mul = s;
          var a = o;
          n.sub = a
      }
      , {
          "./common.js": 4
      }],
      9: [function(t, e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", {
              value: !0
          }),
          n.create = function() {
              var t = new r.ARRAY_TYPE(16);
              r.ARRAY_TYPE != Float32Array && (t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[6] = 0,
              t[7] = 0,
              t[8] = 0,
              t[9] = 0,
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0);
              return t[0] = 1,
              t[5] = 1,
              t[10] = 1,
              t[15] = 1,
              t
          }
          ,
          n.clone = function(t) {
              var e = new r.ARRAY_TYPE(16);
              return e[0] = t[0],
              e[1] = t[1],
              e[2] = t[2],
              e[3] = t[3],
              e[4] = t[4],
              e[5] = t[5],
              e[6] = t[6],
              e[7] = t[7],
              e[8] = t[8],
              e[9] = t[9],
              e[10] = t[10],
              e[11] = t[11],
              e[12] = t[12],
              e[13] = t[13],
              e[14] = t[14],
              e[15] = t[15],
              e
          }
          ,
          n.copy = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[3],
              t[4] = e[4],
              t[5] = e[5],
              t[6] = e[6],
              t[7] = e[7],
              t[8] = e[8],
              t[9] = e[9],
              t[10] = e[10],
              t[11] = e[11],
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15],
              t
          }
          ,
          n.fromValues = function(t, e, n, i, o, s, a, u, l, c, h, p, f, d, m, v) {
              var y = new r.ARRAY_TYPE(16);
              return y[0] = t,
              y[1] = e,
              y[2] = n,
              y[3] = i,
              y[4] = o,
              y[5] = s,
              y[6] = a,
              y[7] = u,
              y[8] = l,
              y[9] = c,
              y[10] = h,
              y[11] = p,
              y[12] = f,
              y[13] = d,
              y[14] = m,
              y[15] = v,
              y
          }
          ,
          n.set = function(t, e, n, r, i, o, s, a, u, l, c, h, p, f, d, m, v) {
              return t[0] = e,
              t[1] = n,
              t[2] = r,
              t[3] = i,
              t[4] = o,
              t[5] = s,
              t[6] = a,
              t[7] = u,
              t[8] = l,
              t[9] = c,
              t[10] = h,
              t[11] = p,
              t[12] = f,
              t[13] = d,
              t[14] = m,
              t[15] = v,
              t
          }
          ,
          n.identity = i,
          n.transpose = function(t, e) {
              if (t === e) {
                  var n = e[1]
                    , r = e[2]
                    , i = e[3]
                    , o = e[6]
                    , s = e[7]
                    , a = e[11];
                  t[1] = e[4],
                  t[2] = e[8],
                  t[3] = e[12],
                  t[4] = n,
                  t[6] = e[9],
                  t[7] = e[13],
                  t[8] = r,
                  t[9] = o,
                  t[11] = e[14],
                  t[12] = i,
                  t[13] = s,
                  t[14] = a
              } else
                  t[0] = e[0],
                  t[1] = e[4],
                  t[2] = e[8],
                  t[3] = e[12],
                  t[4] = e[1],
                  t[5] = e[5],
                  t[6] = e[9],
                  t[7] = e[13],
                  t[8] = e[2],
                  t[9] = e[6],
                  t[10] = e[10],
                  t[11] = e[14],
                  t[12] = e[3],
                  t[13] = e[7],
                  t[14] = e[11],
                  t[15] = e[15];
              return t
          }
          ,
          n.invert = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = e[4]
                , a = e[5]
                , u = e[6]
                , l = e[7]
                , c = e[8]
                , h = e[9]
                , p = e[10]
                , f = e[11]
                , d = e[12]
                , m = e[13]
                , v = e[14]
                , y = e[15]
                , g = n * a - r * s
                , _ = n * u - i * s
                , b = n * l - o * s
                , w = r * u - i * a
                , x = r * l - o * a
                , E = i * l - o * u
                , M = c * m - h * d
                , S = c * v - p * d
                , T = c * y - f * d
                , C = h * v - p * m
                , P = h * y - f * m
                , O = p * y - f * v
                , L = g * O - _ * P + b * C + w * T - x * S + E * M;
              if (!L)
                  return null;
              return L = 1 / L,
              t[0] = (a * O - u * P + l * C) * L,
              t[1] = (i * P - r * O - o * C) * L,
              t[2] = (m * E - v * x + y * w) * L,
              t[3] = (p * x - h * E - f * w) * L,
              t[4] = (u * T - s * O - l * S) * L,
              t[5] = (n * O - i * T + o * S) * L,
              t[6] = (v * b - d * E - y * _) * L,
              t[7] = (c * E - p * b + f * _) * L,
              t[8] = (s * P - a * T + l * M) * L,
              t[9] = (r * T - n * P - o * M) * L,
              t[10] = (d * x - m * b + y * g) * L,
              t[11] = (h * b - c * x - f * g) * L,
              t[12] = (a * S - s * C - u * M) * L,
              t[13] = (n * C - r * S + i * M) * L,
              t[14] = (m * _ - d * w - v * g) * L,
              t[15] = (c * w - h * _ + p * g) * L,
              t
          }
          ,
          n.adjoint = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = e[4]
                , a = e[5]
                , u = e[6]
                , l = e[7]
                , c = e[8]
                , h = e[9]
                , p = e[10]
                , f = e[11]
                , d = e[12]
                , m = e[13]
                , v = e[14]
                , y = e[15];
              return t[0] = a * (p * y - f * v) - h * (u * y - l * v) + m * (u * f - l * p),
              t[1] = -(r * (p * y - f * v) - h * (i * y - o * v) + m * (i * f - o * p)),
              t[2] = r * (u * y - l * v) - a * (i * y - o * v) + m * (i * l - o * u),
              t[3] = -(r * (u * f - l * p) - a * (i * f - o * p) + h * (i * l - o * u)),
              t[4] = -(s * (p * y - f * v) - c * (u * y - l * v) + d * (u * f - l * p)),
              t[5] = n * (p * y - f * v) - c * (i * y - o * v) + d * (i * f - o * p),
              t[6] = -(n * (u * y - l * v) - s * (i * y - o * v) + d * (i * l - o * u)),
              t[7] = n * (u * f - l * p) - s * (i * f - o * p) + c * (i * l - o * u),
              t[8] = s * (h * y - f * m) - c * (a * y - l * m) + d * (a * f - l * h),
              t[9] = -(n * (h * y - f * m) - c * (r * y - o * m) + d * (r * f - o * h)),
              t[10] = n * (a * y - l * m) - s * (r * y - o * m) + d * (r * l - o * a),
              t[11] = -(n * (a * f - l * h) - s * (r * f - o * h) + c * (r * l - o * a)),
              t[12] = -(s * (h * v - p * m) - c * (a * v - u * m) + d * (a * p - u * h)),
              t[13] = n * (h * v - p * m) - c * (r * v - i * m) + d * (r * p - i * h),
              t[14] = -(n * (a * v - u * m) - s * (r * v - i * m) + d * (r * u - i * a)),
              t[15] = n * (a * p - u * h) - s * (r * p - i * h) + c * (r * u - i * a),
              t
          }
          ,
          n.determinant = function(t) {
              var e = t[0]
                , n = t[1]
                , r = t[2]
                , i = t[3]
                , o = t[4]
                , s = t[5]
                , a = t[6]
                , u = t[7]
                , l = t[8]
                , c = t[9]
                , h = t[10]
                , p = t[11]
                , f = t[12]
                , d = t[13]
                , m = t[14]
                , v = t[15];
              return (e * s - n * o) * (h * v - p * m) - (e * a - r * o) * (c * v - p * d) + (e * u - i * o) * (c * m - h * d) + (n * a - r * s) * (l * v - p * f) - (n * u - i * s) * (l * m - h * f) + (r * u - i * a) * (l * d - c * f)
          }
          ,
          n.multiply = o,
          n.translate = function(t, e, n) {
              var r, i, o, s, a, u, l, c, h, p, f, d, m = n[0], v = n[1], y = n[2];
              e === t ? (t[12] = e[0] * m + e[4] * v + e[8] * y + e[12],
              t[13] = e[1] * m + e[5] * v + e[9] * y + e[13],
              t[14] = e[2] * m + e[6] * v + e[10] * y + e[14],
              t[15] = e[3] * m + e[7] * v + e[11] * y + e[15]) : (r = e[0],
              i = e[1],
              o = e[2],
              s = e[3],
              a = e[4],
              u = e[5],
              l = e[6],
              c = e[7],
              h = e[8],
              p = e[9],
              f = e[10],
              d = e[11],
              t[0] = r,
              t[1] = i,
              t[2] = o,
              t[3] = s,
              t[4] = a,
              t[5] = u,
              t[6] = l,
              t[7] = c,
              t[8] = h,
              t[9] = p,
              t[10] = f,
              t[11] = d,
              t[12] = r * m + a * v + h * y + e[12],
              t[13] = i * m + u * v + p * y + e[13],
              t[14] = o * m + l * v + f * y + e[14],
              t[15] = s * m + c * v + d * y + e[15]);
              return t
          }
          ,
          n.scale = function(t, e, n) {
              var r = n[0]
                , i = n[1]
                , o = n[2];
              return t[0] = e[0] * r,
              t[1] = e[1] * r,
              t[2] = e[2] * r,
              t[3] = e[3] * r,
              t[4] = e[4] * i,
              t[5] = e[5] * i,
              t[6] = e[6] * i,
              t[7] = e[7] * i,
              t[8] = e[8] * o,
              t[9] = e[9] * o,
              t[10] = e[10] * o,
              t[11] = e[11] * o,
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15],
              t
          }
          ,
          n.rotate = function(t, e, n, i) {
              var o, s, a, u, l, c, h, p, f, d, m, v, y, g, _, b, w, x, E, M, S, T, C, P, O = i[0], L = i[1], A = i[2], k = Math.hypot(O, L, A);
              if (k < r.EPSILON)
                  return null;
              O *= k = 1 / k,
              L *= k,
              A *= k,
              o = Math.sin(n),
              s = Math.cos(n),
              a = 1 - s,
              u = e[0],
              l = e[1],
              c = e[2],
              h = e[3],
              p = e[4],
              f = e[5],
              d = e[6],
              m = e[7],
              v = e[8],
              y = e[9],
              g = e[10],
              _ = e[11],
              b = O * O * a + s,
              w = L * O * a + A * o,
              x = A * O * a - L * o,
              E = O * L * a - A * o,
              M = L * L * a + s,
              S = A * L * a + O * o,
              T = O * A * a + L * o,
              C = L * A * a - O * o,
              P = A * A * a + s,
              t[0] = u * b + p * w + v * x,
              t[1] = l * b + f * w + y * x,
              t[2] = c * b + d * w + g * x,
              t[3] = h * b + m * w + _ * x,
              t[4] = u * E + p * M + v * S,
              t[5] = l * E + f * M + y * S,
              t[6] = c * E + d * M + g * S,
              t[7] = h * E + m * M + _ * S,
              t[8] = u * T + p * C + v * P,
              t[9] = l * T + f * C + y * P,
              t[10] = c * T + d * C + g * P,
              t[11] = h * T + m * C + _ * P,
              e !== t && (t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15]);
              return t
          }
          ,
          n.rotateX = function(t, e, n) {
              var r = Math.sin(n)
                , i = Math.cos(n)
                , o = e[4]
                , s = e[5]
                , a = e[6]
                , u = e[7]
                , l = e[8]
                , c = e[9]
                , h = e[10]
                , p = e[11];
              e !== t && (t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[3],
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15]);
              return t[4] = o * i + l * r,
              t[5] = s * i + c * r,
              t[6] = a * i + h * r,
              t[7] = u * i + p * r,
              t[8] = l * i - o * r,
              t[9] = c * i - s * r,
              t[10] = h * i - a * r,
              t[11] = p * i - u * r,
              t
          }
          ,
          n.rotateY = function(t, e, n) {
              var r = Math.sin(n)
                , i = Math.cos(n)
                , o = e[0]
                , s = e[1]
                , a = e[2]
                , u = e[3]
                , l = e[8]
                , c = e[9]
                , h = e[10]
                , p = e[11];
              e !== t && (t[4] = e[4],
              t[5] = e[5],
              t[6] = e[6],
              t[7] = e[7],
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15]);
              return t[0] = o * i - l * r,
              t[1] = s * i - c * r,
              t[2] = a * i - h * r,
              t[3] = u * i - p * r,
              t[8] = o * r + l * i,
              t[9] = s * r + c * i,
              t[10] = a * r + h * i,
              t[11] = u * r + p * i,
              t
          }
          ,
          n.rotateZ = function(t, e, n) {
              var r = Math.sin(n)
                , i = Math.cos(n)
                , o = e[0]
                , s = e[1]
                , a = e[2]
                , u = e[3]
                , l = e[4]
                , c = e[5]
                , h = e[6]
                , p = e[7];
              e !== t && (t[8] = e[8],
              t[9] = e[9],
              t[10] = e[10],
              t[11] = e[11],
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15]);
              return t[0] = o * i + l * r,
              t[1] = s * i + c * r,
              t[2] = a * i + h * r,
              t[3] = u * i + p * r,
              t[4] = l * i - o * r,
              t[5] = c * i - s * r,
              t[6] = h * i - a * r,
              t[7] = p * i - u * r,
              t
          }
          ,
          n.fromTranslation = function(t, e) {
              return t[0] = 1,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = 1,
              t[6] = 0,
              t[7] = 0,
              t[8] = 0,
              t[9] = 0,
              t[10] = 1,
              t[11] = 0,
              t[12] = e[0],
              t[13] = e[1],
              t[14] = e[2],
              t[15] = 1,
              t
          }
          ,
          n.fromScaling = function(t, e) {
              return t[0] = e[0],
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = e[1],
              t[6] = 0,
              t[7] = 0,
              t[8] = 0,
              t[9] = 0,
              t[10] = e[2],
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t
          }
          ,
          n.fromRotation = function(t, e, n) {
              var i, o, s, a = n[0], u = n[1], l = n[2], c = Math.hypot(a, u, l);
              if (c < r.EPSILON)
                  return null;
              return a *= c = 1 / c,
              u *= c,
              l *= c,
              i = Math.sin(e),
              o = Math.cos(e),
              s = 1 - o,
              t[0] = a * a * s + o,
              t[1] = u * a * s + l * i,
              t[2] = l * a * s - u * i,
              t[3] = 0,
              t[4] = a * u * s - l * i,
              t[5] = u * u * s + o,
              t[6] = l * u * s + a * i,
              t[7] = 0,
              t[8] = a * l * s + u * i,
              t[9] = u * l * s - a * i,
              t[10] = l * l * s + o,
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t
          }
          ,
          n.fromXRotation = function(t, e) {
              var n = Math.sin(e)
                , r = Math.cos(e);
              return t[0] = 1,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = r,
              t[6] = n,
              t[7] = 0,
              t[8] = 0,
              t[9] = -n,
              t[10] = r,
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t
          }
          ,
          n.fromYRotation = function(t, e) {
              var n = Math.sin(e)
                , r = Math.cos(e);
              return t[0] = r,
              t[1] = 0,
              t[2] = -n,
              t[3] = 0,
              t[4] = 0,
              t[5] = 1,
              t[6] = 0,
              t[7] = 0,
              t[8] = n,
              t[9] = 0,
              t[10] = r,
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t
          }
          ,
          n.fromZRotation = function(t, e) {
              var n = Math.sin(e)
                , r = Math.cos(e);
              return t[0] = r,
              t[1] = n,
              t[2] = 0,
              t[3] = 0,
              t[4] = -n,
              t[5] = r,
              t[6] = 0,
              t[7] = 0,
              t[8] = 0,
              t[9] = 0,
              t[10] = 1,
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t
          }
          ,
          n.fromRotationTranslation = s,
          n.fromQuat2 = function(t, e) {
              var n = new r.ARRAY_TYPE(3)
                , i = -e[0]
                , o = -e[1]
                , a = -e[2]
                , u = e[3]
                , l = e[4]
                , c = e[5]
                , h = e[6]
                , p = e[7]
                , f = i * i + o * o + a * a + u * u;
              f > 0 ? (n[0] = 2 * (l * u + p * i + c * a - h * o) / f,
              n[1] = 2 * (c * u + p * o + h * i - l * a) / f,
              n[2] = 2 * (h * u + p * a + l * o - c * i) / f) : (n[0] = 2 * (l * u + p * i + c * a - h * o),
              n[1] = 2 * (c * u + p * o + h * i - l * a),
              n[2] = 2 * (h * u + p * a + l * o - c * i));
              return s(t, e, n),
              t
          }
          ,
          n.getTranslation = function(t, e) {
              return t[0] = e[12],
              t[1] = e[13],
              t[2] = e[14],
              t
          }
          ,
          n.getScaling = a,
          n.getRotation = function(t, e) {
              var n = new r.ARRAY_TYPE(3);
              a(n, e);
              var i = 1 / n[0]
                , o = 1 / n[1]
                , s = 1 / n[2]
                , u = e[0] * i
                , l = e[1] * o
                , c = e[2] * s
                , h = e[4] * i
                , p = e[5] * o
                , f = e[6] * s
                , d = e[8] * i
                , m = e[9] * o
                , v = e[10] * s
                , y = u + p + v
                , g = 0;
              y > 0 ? (g = 2 * Math.sqrt(y + 1),
              t[3] = .25 * g,
              t[0] = (f - m) / g,
              t[1] = (d - c) / g,
              t[2] = (l - h) / g) : u > p && u > v ? (g = 2 * Math.sqrt(1 + u - p - v),
              t[3] = (f - m) / g,
              t[0] = .25 * g,
              t[1] = (l + h) / g,
              t[2] = (d + c) / g) : p > v ? (g = 2 * Math.sqrt(1 + p - u - v),
              t[3] = (d - c) / g,
              t[0] = (l + h) / g,
              t[1] = .25 * g,
              t[2] = (f + m) / g) : (g = 2 * Math.sqrt(1 + v - u - p),
              t[3] = (l - h) / g,
              t[0] = (d + c) / g,
              t[1] = (f + m) / g,
              t[2] = .25 * g);
              return t
          }
          ,
          n.fromRotationTranslationScale = function(t, e, n, r) {
              var i = e[0]
                , o = e[1]
                , s = e[2]
                , a = e[3]
                , u = i + i
                , l = o + o
                , c = s + s
                , h = i * u
                , p = i * l
                , f = i * c
                , d = o * l
                , m = o * c
                , v = s * c
                , y = a * u
                , g = a * l
                , _ = a * c
                , b = r[0]
                , w = r[1]
                , x = r[2];
              return t[0] = (1 - (d + v)) * b,
              t[1] = (p + _) * b,
              t[2] = (f - g) * b,
              t[3] = 0,
              t[4] = (p - _) * w,
              t[5] = (1 - (h + v)) * w,
              t[6] = (m + y) * w,
              t[7] = 0,
              t[8] = (f + g) * x,
              t[9] = (m - y) * x,
              t[10] = (1 - (h + d)) * x,
              t[11] = 0,
              t[12] = n[0],
              t[13] = n[1],
              t[14] = n[2],
              t[15] = 1,
              t
          }
          ,
          n.fromRotationTranslationScaleOrigin = function(t, e, n, r, i) {
              var o = e[0]
                , s = e[1]
                , a = e[2]
                , u = e[3]
                , l = o + o
                , c = s + s
                , h = a + a
                , p = o * l
                , f = o * c
                , d = o * h
                , m = s * c
                , v = s * h
                , y = a * h
                , g = u * l
                , _ = u * c
                , b = u * h
                , w = r[0]
                , x = r[1]
                , E = r[2]
                , M = i[0]
                , S = i[1]
                , T = i[2]
                , C = (1 - (m + y)) * w
                , P = (f + b) * w
                , O = (d - _) * w
                , L = (f - b) * x
                , A = (1 - (p + y)) * x
                , k = (v + g) * x
                , R = (d + _) * E
                , D = (v - g) * E
                , I = (1 - (p + m)) * E;
              return t[0] = C,
              t[1] = P,
              t[2] = O,
              t[3] = 0,
              t[4] = L,
              t[5] = A,
              t[6] = k,
              t[7] = 0,
              t[8] = R,
              t[9] = D,
              t[10] = I,
              t[11] = 0,
              t[12] = n[0] + M - (C * M + L * S + R * T),
              t[13] = n[1] + S - (P * M + A * S + D * T),
              t[14] = n[2] + T - (O * M + k * S + I * T),
              t[15] = 1,
              t
          }
          ,
          n.fromQuat = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = n + n
                , a = r + r
                , u = i + i
                , l = n * s
                , c = r * s
                , h = r * a
                , p = i * s
                , f = i * a
                , d = i * u
                , m = o * s
                , v = o * a
                , y = o * u;
              return t[0] = 1 - h - d,
              t[1] = c + y,
              t[2] = p - v,
              t[3] = 0,
              t[4] = c - y,
              t[5] = 1 - l - d,
              t[6] = f + m,
              t[7] = 0,
              t[8] = p + v,
              t[9] = f - m,
              t[10] = 1 - l - h,
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t
          }
          ,
          n.frustum = function(t, e, n, r, i, o, s) {
              var a = 1 / (n - e)
                , u = 1 / (i - r)
                , l = 1 / (o - s);
              return t[0] = 2 * o * a,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = 2 * o * u,
              t[6] = 0,
              t[7] = 0,
              t[8] = (n + e) * a,
              t[9] = (i + r) * u,
              t[10] = (s + o) * l,
              t[11] = -1,
              t[12] = 0,
              t[13] = 0,
              t[14] = s * o * 2 * l,
              t[15] = 0,
              t
          }
          ,
          n.perspective = function(t, e, n, r, i) {
              var o, s = 1 / Math.tan(e / 2);
              t[0] = s / n,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = s,
              t[6] = 0,
              t[7] = 0,
              t[8] = 0,
              t[9] = 0,
              t[11] = -1,
              t[12] = 0,
              t[13] = 0,
              t[15] = 0,
              null != i && i !== 1 / 0 ? (o = 1 / (r - i),
              t[10] = (i + r) * o,
              t[14] = 2 * i * r * o) : (t[10] = -1,
              t[14] = -2 * r);
              return t
          }
          ,
          n.perspectiveFromFieldOfView = function(t, e, n, r) {
              var i = Math.tan(e.upDegrees * Math.PI / 180)
                , o = Math.tan(e.downDegrees * Math.PI / 180)
                , s = Math.tan(e.leftDegrees * Math.PI / 180)
                , a = Math.tan(e.rightDegrees * Math.PI / 180)
                , u = 2 / (s + a)
                , l = 2 / (i + o);
              return t[0] = u,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = l,
              t[6] = 0,
              t[7] = 0,
              t[8] = -(s - a) * u * .5,
              t[9] = (i - o) * l * .5,
              t[10] = r / (n - r),
              t[11] = -1,
              t[12] = 0,
              t[13] = 0,
              t[14] = r * n / (n - r),
              t[15] = 0,
              t
          }
          ,
          n.ortho = function(t, e, n, r, i, o, s) {
              var a = 1 / (e - n)
                , u = 1 / (r - i)
                , l = 1 / (o - s);
              return t[0] = -2 * a,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = -2 * u,
              t[6] = 0,
              t[7] = 0,
              t[8] = 0,
              t[9] = 0,
              t[10] = 2 * l,
              t[11] = 0,
              t[12] = (e + n) * a,
              t[13] = (i + r) * u,
              t[14] = (s + o) * l,
              t[15] = 1,
              t
          }
          ,
          n.lookAt = function(t, e, n, o) {
              var s, a, u, l, c, h, p, f, d, m, v = e[0], y = e[1], g = e[2], _ = o[0], b = o[1], w = o[2], x = n[0], E = n[1], M = n[2];
              if (Math.abs(v - x) < r.EPSILON && Math.abs(y - E) < r.EPSILON && Math.abs(g - M) < r.EPSILON)
                  return i(t);
              p = v - x,
              f = y - E,
              d = g - M,
              m = 1 / Math.hypot(p, f, d),
              s = b * (d *= m) - w * (f *= m),
              a = w * (p *= m) - _ * d,
              u = _ * f - b * p,
              (m = Math.hypot(s, a, u)) ? (s *= m = 1 / m,
              a *= m,
              u *= m) : (s = 0,
              a = 0,
              u = 0);
              l = f * u - d * a,
              c = d * s - p * u,
              h = p * a - f * s,
              (m = Math.hypot(l, c, h)) ? (l *= m = 1 / m,
              c *= m,
              h *= m) : (l = 0,
              c = 0,
              h = 0);
              return t[0] = s,
              t[1] = l,
              t[2] = p,
              t[3] = 0,
              t[4] = a,
              t[5] = c,
              t[6] = f,
              t[7] = 0,
              t[8] = u,
              t[9] = h,
              t[10] = d,
              t[11] = 0,
              t[12] = -(s * v + a * y + u * g),
              t[13] = -(l * v + c * y + h * g),
              t[14] = -(p * v + f * y + d * g),
              t[15] = 1,
              t
          }
          ,
          n.targetTo = function(t, e, n, r) {
              var i = e[0]
                , o = e[1]
                , s = e[2]
                , a = r[0]
                , u = r[1]
                , l = r[2]
                , c = i - n[0]
                , h = o - n[1]
                , p = s - n[2]
                , f = c * c + h * h + p * p;
              f > 0 && (f = 1 / Math.sqrt(f),
              c *= f,
              h *= f,
              p *= f);
              var d = u * p - l * h
                , m = l * c - a * p
                , v = a * h - u * c;
              (f = d * d + m * m + v * v) > 0 && (f = 1 / Math.sqrt(f),
              d *= f,
              m *= f,
              v *= f);
              return t[0] = d,
              t[1] = m,
              t[2] = v,
              t[3] = 0,
              t[4] = h * v - p * m,
              t[5] = p * d - c * v,
              t[6] = c * m - h * d,
              t[7] = 0,
              t[8] = c,
              t[9] = h,
              t[10] = p,
              t[11] = 0,
              t[12] = i,
              t[13] = o,
              t[14] = s,
              t[15] = 1,
              t
          }
          ,
          n.str = function(t) {
              return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
          }
          ,
          n.frob = function(t) {
              return Math.hypot(t[0], t[1], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
          }
          ,
          n.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t[3] = e[3] + n[3],
              t[4] = e[4] + n[4],
              t[5] = e[5] + n[5],
              t[6] = e[6] + n[6],
              t[7] = e[7] + n[7],
              t[8] = e[8] + n[8],
              t[9] = e[9] + n[9],
              t[10] = e[10] + n[10],
              t[11] = e[11] + n[11],
              t[12] = e[12] + n[12],
              t[13] = e[13] + n[13],
              t[14] = e[14] + n[14],
              t[15] = e[15] + n[15],
              t
          }
          ,
          n.subtract = u,
          n.multiplyScalar = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t[3] = e[3] * n,
              t[4] = e[4] * n,
              t[5] = e[5] * n,
              t[6] = e[6] * n,
              t[7] = e[7] * n,
              t[8] = e[8] * n,
              t[9] = e[9] * n,
              t[10] = e[10] * n,
              t[11] = e[11] * n,
              t[12] = e[12] * n,
              t[13] = e[13] * n,
              t[14] = e[14] * n,
              t[15] = e[15] * n,
              t
          }
          ,
          n.multiplyScalarAndAdd = function(t, e, n, r) {
              return t[0] = e[0] + n[0] * r,
              t[1] = e[1] + n[1] * r,
              t[2] = e[2] + n[2] * r,
              t[3] = e[3] + n[3] * r,
              t[4] = e[4] + n[4] * r,
              t[5] = e[5] + n[5] * r,
              t[6] = e[6] + n[6] * r,
              t[7] = e[7] + n[7] * r,
              t[8] = e[8] + n[8] * r,
              t[9] = e[9] + n[9] * r,
              t[10] = e[10] + n[10] * r,
              t[11] = e[11] + n[11] * r,
              t[12] = e[12] + n[12] * r,
              t[13] = e[13] + n[13] * r,
              t[14] = e[14] + n[14] * r,
              t[15] = e[15] + n[15] * r,
              t
          }
          ,
          n.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
          }
          ,
          n.equals = function(t, e) {
              var n = t[0]
                , i = t[1]
                , o = t[2]
                , s = t[3]
                , a = t[4]
                , u = t[5]
                , l = t[6]
                , c = t[7]
                , h = t[8]
                , p = t[9]
                , f = t[10]
                , d = t[11]
                , m = t[12]
                , v = t[13]
                , y = t[14]
                , g = t[15]
                , _ = e[0]
                , b = e[1]
                , w = e[2]
                , x = e[3]
                , E = e[4]
                , M = e[5]
                , S = e[6]
                , T = e[7]
                , C = e[8]
                , P = e[9]
                , O = e[10]
                , L = e[11]
                , A = e[12]
                , k = e[13]
                , R = e[14]
                , D = e[15];
              return Math.abs(n - _) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(_)) && Math.abs(i - b) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(o - w) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(w)) && Math.abs(s - x) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(x)) && Math.abs(a - E) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(E)) && Math.abs(u - M) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(M)) && Math.abs(l - S) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(S)) && Math.abs(c - T) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(T)) && Math.abs(h - C) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(C)) && Math.abs(p - P) <= r.EPSILON * Math.max(1, Math.abs(p), Math.abs(P)) && Math.abs(f - O) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(O)) && Math.abs(d - L) <= r.EPSILON * Math.max(1, Math.abs(d), Math.abs(L)) && Math.abs(m - A) <= r.EPSILON * Math.max(1, Math.abs(m), Math.abs(A)) && Math.abs(v - k) <= r.EPSILON * Math.max(1, Math.abs(v), Math.abs(k)) && Math.abs(y - R) <= r.EPSILON * Math.max(1, Math.abs(y), Math.abs(R)) && Math.abs(g - D) <= r.EPSILON * Math.max(1, Math.abs(g), Math.abs(D))
          }
          ,
          n.sub = n.mul = void 0;
          var r = function(t) {
              if (t && t.__esModule)
                  return t;
              var e = {};
              if (null != t)
                  for (var n in t)
                      if (Object.prototype.hasOwnProperty.call(t, n)) {
                          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                          r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                      }
              return e.default = t,
              e
          }(t("./common.js"));
          function i(t) {
              return t[0] = 1,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = 1,
              t[6] = 0,
              t[7] = 0,
              t[8] = 0,
              t[9] = 0,
              t[10] = 1,
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t
          }
          function o(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , u = e[5]
                , l = e[6]
                , c = e[7]
                , h = e[8]
                , p = e[9]
                , f = e[10]
                , d = e[11]
                , m = e[12]
                , v = e[13]
                , y = e[14]
                , g = e[15]
                , _ = n[0]
                , b = n[1]
                , w = n[2]
                , x = n[3];
              return t[0] = _ * r + b * a + w * h + x * m,
              t[1] = _ * i + b * u + w * p + x * v,
              t[2] = _ * o + b * l + w * f + x * y,
              t[3] = _ * s + b * c + w * d + x * g,
              _ = n[4],
              b = n[5],
              w = n[6],
              x = n[7],
              t[4] = _ * r + b * a + w * h + x * m,
              t[5] = _ * i + b * u + w * p + x * v,
              t[6] = _ * o + b * l + w * f + x * y,
              t[7] = _ * s + b * c + w * d + x * g,
              _ = n[8],
              b = n[9],
              w = n[10],
              x = n[11],
              t[8] = _ * r + b * a + w * h + x * m,
              t[9] = _ * i + b * u + w * p + x * v,
              t[10] = _ * o + b * l + w * f + x * y,
              t[11] = _ * s + b * c + w * d + x * g,
              _ = n[12],
              b = n[13],
              w = n[14],
              x = n[15],
              t[12] = _ * r + b * a + w * h + x * m,
              t[13] = _ * i + b * u + w * p + x * v,
              t[14] = _ * o + b * l + w * f + x * y,
              t[15] = _ * s + b * c + w * d + x * g,
              t
          }
          function s(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = r + r
                , u = i + i
                , l = o + o
                , c = r * a
                , h = r * u
                , p = r * l
                , f = i * u
                , d = i * l
                , m = o * l
                , v = s * a
                , y = s * u
                , g = s * l;
              return t[0] = 1 - (f + m),
              t[1] = h + g,
              t[2] = p - y,
              t[3] = 0,
              t[4] = h - g,
              t[5] = 1 - (c + m),
              t[6] = d + v,
              t[7] = 0,
              t[8] = p + y,
              t[9] = d - v,
              t[10] = 1 - (c + f),
              t[11] = 0,
              t[12] = n[0],
              t[13] = n[1],
              t[14] = n[2],
              t[15] = 1,
              t
          }
          function a(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[4]
                , s = e[5]
                , a = e[6]
                , u = e[8]
                , l = e[9]
                , c = e[10];
              return t[0] = Math.hypot(n, r, i),
              t[1] = Math.hypot(o, s, a),
              t[2] = Math.hypot(u, l, c),
              t
          }
          function u(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t[2] = e[2] - n[2],
              t[3] = e[3] - n[3],
              t[4] = e[4] - n[4],
              t[5] = e[5] - n[5],
              t[6] = e[6] - n[6],
              t[7] = e[7] - n[7],
              t[8] = e[8] - n[8],
              t[9] = e[9] - n[9],
              t[10] = e[10] - n[10],
              t[11] = e[11] - n[11],
              t[12] = e[12] - n[12],
              t[13] = e[13] - n[13],
              t[14] = e[14] - n[14],
              t[15] = e[15] - n[15],
              t
          }
          var l = o;
          n.mul = l;
          var c = u;
          n.sub = c
      }
      , {
          "./common.js": 4
      }],
      10: [function(t, e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", {
              value: !0
          }),
          n.create = u,
          n.identity = function(t) {
              return t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t[3] = 1,
              t
          }
          ,
          n.setAxisAngle = l,
          n.getAxisAngle = function(t, e) {
              var n = 2 * Math.acos(e[3])
                , i = Math.sin(n / 2);
              i > r.EPSILON ? (t[0] = e[0] / i,
              t[1] = e[1] / i,
              t[2] = e[2] / i) : (t[0] = 1,
              t[1] = 0,
              t[2] = 0);
              return n
          }
          ,
          n.getAngle = function(t, e) {
              var n = x(t, e);
              return Math.acos(2 * n * n - 1)
          }
          ,
          n.multiply = c,
          n.rotateX = function(t, e, n) {
              n *= .5;
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = Math.sin(n)
                , u = Math.cos(n);
              return t[0] = r * u + s * a,
              t[1] = i * u + o * a,
              t[2] = o * u - i * a,
              t[3] = s * u - r * a,
              t
          }
          ,
          n.rotateY = function(t, e, n) {
              n *= .5;
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = Math.sin(n)
                , u = Math.cos(n);
              return t[0] = r * u - o * a,
              t[1] = i * u + s * a,
              t[2] = o * u + r * a,
              t[3] = s * u - i * a,
              t
          }
          ,
          n.rotateZ = function(t, e, n) {
              n *= .5;
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = Math.sin(n)
                , u = Math.cos(n);
              return t[0] = r * u + i * a,
              t[1] = i * u - r * a,
              t[2] = o * u + s * a,
              t[3] = s * u - o * a,
              t
          }
          ,
          n.calculateW = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2];
              return t[0] = n,
              t[1] = r,
              t[2] = i,
              t[3] = Math.sqrt(Math.abs(1 - n * n - r * r - i * i)),
              t
          }
          ,
          n.exp = h,
          n.ln = p,
          n.pow = function(t, e, n) {
              return p(t, e),
              w(t, t, n),
              h(t, t),
              t
          }
          ,
          n.slerp = f,
          n.random = function(t) {
              var e = r.RANDOM()
                , n = r.RANDOM()
                , i = r.RANDOM()
                , o = Math.sqrt(1 - e)
                , s = Math.sqrt(e);
              return t[0] = o * Math.sin(2 * Math.PI * n),
              t[1] = o * Math.cos(2 * Math.PI * n),
              t[2] = s * Math.sin(2 * Math.PI * i),
              t[3] = s * Math.cos(2 * Math.PI * i),
              t
          }
          ,
          n.invert = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = n * n + r * r + i * i + o * o
                , a = s ? 1 / s : 0;
              return t[0] = -n * a,
              t[1] = -r * a,
              t[2] = -i * a,
              t[3] = o * a,
              t
          }
          ,
          n.conjugate = function(t, e) {
              return t[0] = -e[0],
              t[1] = -e[1],
              t[2] = -e[2],
              t[3] = e[3],
              t
          }
          ,
          n.fromMat3 = d,
          n.fromEuler = function(t, e, n, r) {
              var i = .5 * Math.PI / 180;
              e *= i,
              n *= i,
              r *= i;
              var o = Math.sin(e)
                , s = Math.cos(e)
                , a = Math.sin(n)
                , u = Math.cos(n)
                , l = Math.sin(r)
                , c = Math.cos(r);
              return t[0] = o * u * c - s * a * l,
              t[1] = s * a * c + o * u * l,
              t[2] = s * u * l - o * a * c,
              t[3] = s * u * c + o * a * l,
              t
          }
          ,
          n.str = function(t) {
              return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
          }
          ,
          n.setAxes = n.sqlerp = n.rotationTo = n.equals = n.exactEquals = n.normalize = n.sqrLen = n.squaredLength = n.len = n.length = n.lerp = n.dot = n.scale = n.mul = n.add = n.set = n.copy = n.fromValues = n.clone = void 0;
          var r = a(t("./common.js"))
            , i = a(t("./mat3.js"))
            , o = a(t("./vec3.js"))
            , s = a(t("./vec4.js"));
          function a(t) {
              if (t && t.__esModule)
                  return t;
              var e = {};
              if (null != t)
                  for (var n in t)
                      if (Object.prototype.hasOwnProperty.call(t, n)) {
                          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                          r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                      }
              return e.default = t,
              e
          }
          function u() {
              var t = new r.ARRAY_TYPE(4);
              return r.ARRAY_TYPE != Float32Array && (t[0] = 0,
              t[1] = 0,
              t[2] = 0),
              t[3] = 1,
              t
          }
          function l(t, e, n) {
              n *= .5;
              var r = Math.sin(n);
              return t[0] = r * e[0],
              t[1] = r * e[1],
              t[2] = r * e[2],
              t[3] = Math.cos(n),
              t
          }
          function c(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = n[0]
                , u = n[1]
                , l = n[2]
                , c = n[3];
              return t[0] = r * c + s * a + i * l - o * u,
              t[1] = i * c + s * u + o * a - r * l,
              t[2] = o * c + s * l + r * u - i * a,
              t[3] = s * c - r * a - i * u - o * l,
              t
          }
          function h(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = Math.sqrt(n * n + r * r + i * i)
                , a = Math.exp(o)
                , u = s > 0 ? a * Math.sin(s) / s : 0;
              return t[0] = n * u,
              t[1] = r * u,
              t[2] = i * u,
              t[3] = a * Math.cos(s),
              t
          }
          function p(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = Math.sqrt(n * n + r * r + i * i)
                , a = s > 0 ? Math.atan2(s, o) / s : 0;
              return t[0] = n * a,
              t[1] = r * a,
              t[2] = i * a,
              t[3] = .5 * Math.log(n * n + r * r + i * i + o * o),
              t
          }
          function f(t, e, n, i) {
              var o, s, a, u, l, c = e[0], h = e[1], p = e[2], f = e[3], d = n[0], m = n[1], v = n[2], y = n[3];
              return (s = c * d + h * m + p * v + f * y) < 0 && (s = -s,
              d = -d,
              m = -m,
              v = -v,
              y = -y),
              1 - s > r.EPSILON ? (o = Math.acos(s),
              a = Math.sin(o),
              u = Math.sin((1 - i) * o) / a,
              l = Math.sin(i * o) / a) : (u = 1 - i,
              l = i),
              t[0] = u * c + l * d,
              t[1] = u * h + l * m,
              t[2] = u * p + l * v,
              t[3] = u * f + l * y,
              t
          }
          function d(t, e) {
              var n, r = e[0] + e[4] + e[8];
              if (r > 0)
                  n = Math.sqrt(r + 1),
                  t[3] = .5 * n,
                  n = .5 / n,
                  t[0] = (e[5] - e[7]) * n,
                  t[1] = (e[6] - e[2]) * n,
                  t[2] = (e[1] - e[3]) * n;
              else {
                  var i = 0;
                  e[4] > e[0] && (i = 1),
                  e[8] > e[3 * i + i] && (i = 2);
                  var o = (i + 1) % 3
                    , s = (i + 2) % 3;
                  n = Math.sqrt(e[3 * i + i] - e[3 * o + o] - e[3 * s + s] + 1),
                  t[i] = .5 * n,
                  n = .5 / n,
                  t[3] = (e[3 * o + s] - e[3 * s + o]) * n,
                  t[o] = (e[3 * o + i] + e[3 * i + o]) * n,
                  t[s] = (e[3 * s + i] + e[3 * i + s]) * n
              }
              return t
          }
          var m = s.clone;
          n.clone = m;
          var v = s.fromValues;
          n.fromValues = v;
          var y = s.copy;
          n.copy = y;
          var g = s.set;
          n.set = g;
          var _ = s.add;
          n.add = _;
          var b = c;
          n.mul = b;
          var w = s.scale;
          n.scale = w;
          var x = s.dot;
          n.dot = x;
          var E = s.lerp;
          n.lerp = E;
          var M = s.length;
          n.length = M;
          var S = M;
          n.len = S;
          var T = s.squaredLength;
          n.squaredLength = T;
          var C = T;
          n.sqrLen = C;
          var P = s.normalize;
          n.normalize = P;
          var O = s.exactEquals;
          n.exactEquals = O;
          var L = s.equals;
          n.equals = L;
          var A, k, R, D = (A = o.create(),
          k = o.fromValues(1, 0, 0),
          R = o.fromValues(0, 1, 0),
          function(t, e, n) {
              var r = o.dot(e, n);
              return r < -.999999 ? (o.cross(A, k, e),
              o.len(A) < 1e-6 && o.cross(A, R, e),
              o.normalize(A, A),
              l(t, A, Math.PI),
              t) : r > .999999 ? (t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t[3] = 1,
              t) : (o.cross(A, e, n),
              t[0] = A[0],
              t[1] = A[1],
              t[2] = A[2],
              t[3] = 1 + r,
              P(t, t))
          }
          );
          n.rotationTo = D;
          var I, N, F = (I = u(),
          N = u(),
          function(t, e, n, r, i, o) {
              return f(I, e, i, o),
              f(N, n, r, o),
              f(t, I, N, 2 * o * (1 - o)),
              t
          }
          );
          n.sqlerp = F;
          var j, z = (j = i.create(),
          function(t, e, n, r) {
              return j[0] = n[0],
              j[3] = n[1],
              j[6] = n[2],
              j[1] = r[0],
              j[4] = r[1],
              j[7] = r[2],
              j[2] = -e[0],
              j[5] = -e[1],
              j[8] = -e[2],
              P(t, d(t, j))
          }
          );
          n.setAxes = z
      }
      , {
          "./common.js": 4,
          "./mat3.js": 8,
          "./vec3.js": 13,
          "./vec4.js": 14
      }],
      11: [function(t, e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", {
              value: !0
          }),
          n.create = function() {
              var t = new r.ARRAY_TYPE(8);
              r.ARRAY_TYPE != Float32Array && (t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t[4] = 0,
              t[5] = 0,
              t[6] = 0,
              t[7] = 0);
              return t[3] = 1,
              t
          }
          ,
          n.clone = function(t) {
              var e = new r.ARRAY_TYPE(8);
              return e[0] = t[0],
              e[1] = t[1],
              e[2] = t[2],
              e[3] = t[3],
              e[4] = t[4],
              e[5] = t[5],
              e[6] = t[6],
              e[7] = t[7],
              e
          }
          ,
          n.fromValues = function(t, e, n, i, o, s, a, u) {
              var l = new r.ARRAY_TYPE(8);
              return l[0] = t,
              l[1] = e,
              l[2] = n,
              l[3] = i,
              l[4] = o,
              l[5] = s,
              l[6] = a,
              l[7] = u,
              l
          }
          ,
          n.fromRotationTranslationValues = function(t, e, n, i, o, s, a) {
              var u = new r.ARRAY_TYPE(8);
              u[0] = t,
              u[1] = e,
              u[2] = n,
              u[3] = i;
              var l = .5 * o
                , c = .5 * s
                , h = .5 * a;
              return u[4] = l * i + c * n - h * e,
              u[5] = c * i + h * t - l * n,
              u[6] = h * i + l * e - c * t,
              u[7] = -l * t - c * e - h * n,
              u
          }
          ,
          n.fromRotationTranslation = a,
          n.fromTranslation = function(t, e) {
              return t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t[3] = 1,
              t[4] = .5 * e[0],
              t[5] = .5 * e[1],
              t[6] = .5 * e[2],
              t[7] = 0,
              t
          }
          ,
          n.fromRotation = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[3],
              t[4] = 0,
              t[5] = 0,
              t[6] = 0,
              t[7] = 0,
              t
          }
          ,
          n.fromMat4 = function(t, e) {
              var n = i.create();
              o.getRotation(n, e);
              var s = new r.ARRAY_TYPE(3);
              return o.getTranslation(s, e),
              a(t, n, s),
              t
          }
          ,
          n.copy = u,
          n.identity = function(t) {
              return t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t[3] = 1,
              t[4] = 0,
              t[5] = 0,
              t[6] = 0,
              t[7] = 0,
              t
          }
          ,
          n.set = function(t, e, n, r, i, o, s, a, u) {
              return t[0] = e,
              t[1] = n,
              t[2] = r,
              t[3] = i,
              t[4] = o,
              t[5] = s,
              t[6] = a,
              t[7] = u,
              t
          }
          ,
          n.getDual = function(t, e) {
              return t[0] = e[4],
              t[1] = e[5],
              t[2] = e[6],
              t[3] = e[7],
              t
          }
          ,
          n.setDual = function(t, e) {
              return t[4] = e[0],
              t[5] = e[1],
              t[6] = e[2],
              t[7] = e[3],
              t
          }
          ,
          n.getTranslation = function(t, e) {
              var n = e[4]
                , r = e[5]
                , i = e[6]
                , o = e[7]
                , s = -e[0]
                , a = -e[1]
                , u = -e[2]
                , l = e[3];
              return t[0] = 2 * (n * l + o * s + r * u - i * a),
              t[1] = 2 * (r * l + o * a + i * s - n * u),
              t[2] = 2 * (i * l + o * u + n * a - r * s),
              t
          }
          ,
          n.translate = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = .5 * n[0]
                , u = .5 * n[1]
                , l = .5 * n[2]
                , c = e[4]
                , h = e[5]
                , p = e[6]
                , f = e[7];
              return t[0] = r,
              t[1] = i,
              t[2] = o,
              t[3] = s,
              t[4] = s * a + i * l - o * u + c,
              t[5] = s * u + o * a - r * l + h,
              t[6] = s * l + r * u - i * a + p,
              t[7] = -r * a - i * u - o * l + f,
              t
          }
          ,
          n.rotateX = function(t, e, n) {
              var r = -e[0]
                , o = -e[1]
                , s = -e[2]
                , a = e[3]
                , u = e[4]
                , l = e[5]
                , c = e[6]
                , h = e[7]
                , p = u * a + h * r + l * s - c * o
                , f = l * a + h * o + c * r - u * s
                , d = c * a + h * s + u * o - l * r
                , m = h * a - u * r - l * o - c * s;
              return i.rotateX(t, e, n),
              r = t[0],
              o = t[1],
              s = t[2],
              a = t[3],
              t[4] = p * a + m * r + f * s - d * o,
              t[5] = f * a + m * o + d * r - p * s,
              t[6] = d * a + m * s + p * o - f * r,
              t[7] = m * a - p * r - f * o - d * s,
              t
          }
          ,
          n.rotateY = function(t, e, n) {
              var r = -e[0]
                , o = -e[1]
                , s = -e[2]
                , a = e[3]
                , u = e[4]
                , l = e[5]
                , c = e[6]
                , h = e[7]
                , p = u * a + h * r + l * s - c * o
                , f = l * a + h * o + c * r - u * s
                , d = c * a + h * s + u * o - l * r
                , m = h * a - u * r - l * o - c * s;
              return i.rotateY(t, e, n),
              r = t[0],
              o = t[1],
              s = t[2],
              a = t[3],
              t[4] = p * a + m * r + f * s - d * o,
              t[5] = f * a + m * o + d * r - p * s,
              t[6] = d * a + m * s + p * o - f * r,
              t[7] = m * a - p * r - f * o - d * s,
              t
          }
          ,
          n.rotateZ = function(t, e, n) {
              var r = -e[0]
                , o = -e[1]
                , s = -e[2]
                , a = e[3]
                , u = e[4]
                , l = e[5]
                , c = e[6]
                , h = e[7]
                , p = u * a + h * r + l * s - c * o
                , f = l * a + h * o + c * r - u * s
                , d = c * a + h * s + u * o - l * r
                , m = h * a - u * r - l * o - c * s;
              return i.rotateZ(t, e, n),
              r = t[0],
              o = t[1],
              s = t[2],
              a = t[3],
              t[4] = p * a + m * r + f * s - d * o,
              t[5] = f * a + m * o + d * r - p * s,
              t[6] = d * a + m * s + p * o - f * r,
              t[7] = m * a - p * r - f * o - d * s,
              t
          }
          ,
          n.rotateByQuatAppend = function(t, e, n) {
              var r = n[0]
                , i = n[1]
                , o = n[2]
                , s = n[3]
                , a = e[0]
                , u = e[1]
                , l = e[2]
                , c = e[3];
              return t[0] = a * s + c * r + u * o - l * i,
              t[1] = u * s + c * i + l * r - a * o,
              t[2] = l * s + c * o + a * i - u * r,
              t[3] = c * s - a * r - u * i - l * o,
              a = e[4],
              u = e[5],
              l = e[6],
              c = e[7],
              t[4] = a * s + c * r + u * o - l * i,
              t[5] = u * s + c * i + l * r - a * o,
              t[6] = l * s + c * o + a * i - u * r,
              t[7] = c * s - a * r - u * i - l * o,
              t
          }
          ,
          n.rotateByQuatPrepend = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = n[0]
                , u = n[1]
                , l = n[2]
                , c = n[3];
              return t[0] = r * c + s * a + i * l - o * u,
              t[1] = i * c + s * u + o * a - r * l,
              t[2] = o * c + s * l + r * u - i * a,
              t[3] = s * c - r * a - i * u - o * l,
              a = n[4],
              u = n[5],
              l = n[6],
              c = n[7],
              t[4] = r * c + s * a + i * l - o * u,
              t[5] = i * c + s * u + o * a - r * l,
              t[6] = o * c + s * l + r * u - i * a,
              t[7] = s * c - r * a - i * u - o * l,
              t
          }
          ,
          n.rotateAroundAxis = function(t, e, n, i) {
              if (Math.abs(i) < r.EPSILON)
                  return u(t, e);
              var o = Math.hypot(n[0], n[1], n[2]);
              i *= .5;
              var s = Math.sin(i)
                , a = s * n[0] / o
                , l = s * n[1] / o
                , c = s * n[2] / o
                , h = Math.cos(i)
                , p = e[0]
                , f = e[1]
                , d = e[2]
                , m = e[3];
              t[0] = p * h + m * a + f * c - d * l,
              t[1] = f * h + m * l + d * a - p * c,
              t[2] = d * h + m * c + p * l - f * a,
              t[3] = m * h - p * a - f * l - d * c;
              var v = e[4]
                , y = e[5]
                , g = e[6]
                , _ = e[7];
              return t[4] = v * h + _ * a + y * c - g * l,
              t[5] = y * h + _ * l + g * a - v * c,
              t[6] = g * h + _ * c + v * l - y * a,
              t[7] = _ * h - v * a - y * l - g * c,
              t
          }
          ,
          n.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t[3] = e[3] + n[3],
              t[4] = e[4] + n[4],
              t[5] = e[5] + n[5],
              t[6] = e[6] + n[6],
              t[7] = e[7] + n[7],
              t
          }
          ,
          n.multiply = h,
          n.scale = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t[3] = e[3] * n,
              t[4] = e[4] * n,
              t[5] = e[5] * n,
              t[6] = e[6] * n,
              t[7] = e[7] * n,
              t
          }
          ,
          n.lerp = function(t, e, n, r) {
              var i = 1 - r;
              f(e, n) < 0 && (r = -r);
              return t[0] = e[0] * i + n[0] * r,
              t[1] = e[1] * i + n[1] * r,
              t[2] = e[2] * i + n[2] * r,
              t[3] = e[3] * i + n[3] * r,
              t[4] = e[4] * i + n[4] * r,
              t[5] = e[5] * i + n[5] * r,
              t[6] = e[6] * i + n[6] * r,
              t[7] = e[7] * i + n[7] * r,
              t
          }
          ,
          n.invert = function(t, e) {
              var n = v(e);
              return t[0] = -e[0] / n,
              t[1] = -e[1] / n,
              t[2] = -e[2] / n,
              t[3] = e[3] / n,
              t[4] = -e[4] / n,
              t[5] = -e[5] / n,
              t[6] = -e[6] / n,
              t[7] = e[7] / n,
              t
          }
          ,
          n.conjugate = function(t, e) {
              return t[0] = -e[0],
              t[1] = -e[1],
              t[2] = -e[2],
              t[3] = e[3],
              t[4] = -e[4],
              t[5] = -e[5],
              t[6] = -e[6],
              t[7] = e[7],
              t
          }
          ,
          n.normalize = function(t, e) {
              var n = v(e);
              if (n > 0) {
                  n = Math.sqrt(n);
                  var r = e[0] / n
                    , i = e[1] / n
                    , o = e[2] / n
                    , s = e[3] / n
                    , a = e[4]
                    , u = e[5]
                    , l = e[6]
                    , c = e[7]
                    , h = r * a + i * u + o * l + s * c;
                  t[0] = r,
                  t[1] = i,
                  t[2] = o,
                  t[3] = s,
                  t[4] = (a - r * h) / n,
                  t[5] = (u - i * h) / n,
                  t[6] = (l - o * h) / n,
                  t[7] = (c - s * h) / n
              }
              return t
          }
          ,
          n.str = function(t) {
              return "quat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ")"
          }
          ,
          n.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7]
          }
          ,
          n.equals = function(t, e) {
              var n = t[0]
                , i = t[1]
                , o = t[2]
                , s = t[3]
                , a = t[4]
                , u = t[5]
                , l = t[6]
                , c = t[7]
                , h = e[0]
                , p = e[1]
                , f = e[2]
                , d = e[3]
                , m = e[4]
                , v = e[5]
                , y = e[6]
                , g = e[7];
              return Math.abs(n - h) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(i - p) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(p)) && Math.abs(o - f) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(s - d) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(d)) && Math.abs(a - m) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(m)) && Math.abs(u - v) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(l - y) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(y)) && Math.abs(c - g) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(g))
          }
          ,
          n.sqrLen = n.squaredLength = n.len = n.length = n.dot = n.mul = n.setReal = n.getReal = void 0;
          var r = s(t("./common.js"))
            , i = s(t("./quat.js"))
            , o = s(t("./mat4.js"));
          function s(t) {
              if (t && t.__esModule)
                  return t;
              var e = {};
              if (null != t)
                  for (var n in t)
                      if (Object.prototype.hasOwnProperty.call(t, n)) {
                          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                          r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                      }
              return e.default = t,
              e
          }
          function a(t, e, n) {
              var r = .5 * n[0]
                , i = .5 * n[1]
                , o = .5 * n[2]
                , s = e[0]
                , a = e[1]
                , u = e[2]
                , l = e[3];
              return t[0] = s,
              t[1] = a,
              t[2] = u,
              t[3] = l,
              t[4] = r * l + i * u - o * a,
              t[5] = i * l + o * s - r * u,
              t[6] = o * l + r * a - i * s,
              t[7] = -r * s - i * a - o * u,
              t
          }
          function u(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[3],
              t[4] = e[4],
              t[5] = e[5],
              t[6] = e[6],
              t[7] = e[7],
              t
          }
          var l = i.copy;
          n.getReal = l;
          var c = i.copy;
          function h(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3]
                , a = n[4]
                , u = n[5]
                , l = n[6]
                , c = n[7]
                , h = e[4]
                , p = e[5]
                , f = e[6]
                , d = e[7]
                , m = n[0]
                , v = n[1]
                , y = n[2]
                , g = n[3];
              return t[0] = r * g + s * m + i * y - o * v,
              t[1] = i * g + s * v + o * m - r * y,
              t[2] = o * g + s * y + r * v - i * m,
              t[3] = s * g - r * m - i * v - o * y,
              t[4] = r * c + s * a + i * l - o * u + h * g + d * m + p * y - f * v,
              t[5] = i * c + s * u + o * a - r * l + p * g + d * v + f * m - h * y,
              t[6] = o * c + s * l + r * u - i * a + f * g + d * y + h * v - p * m,
              t[7] = s * c - r * a - i * u - o * l + d * g - h * m - p * v - f * y,
              t
          }
          n.setReal = c;
          var p = h;
          n.mul = p;
          var f = i.dot;
          n.dot = f;
          var d = i.length;
          n.length = d;
          var m = d;
          n.len = m;
          var v = i.squaredLength;
          n.squaredLength = v;
          var y = v;
          n.sqrLen = y
      }
      , {
          "./common.js": 4,
          "./mat4.js": 9,
          "./quat.js": 10
      }],
      12: [function(t, e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", {
              value: !0
          }),
          n.create = i,
          n.clone = function(t) {
              var e = new r.ARRAY_TYPE(2);
              return e[0] = t[0],
              e[1] = t[1],
              e
          }
          ,
          n.fromValues = function(t, e) {
              var n = new r.ARRAY_TYPE(2);
              return n[0] = t,
              n[1] = e,
              n
          }
          ,
          n.copy = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t
          }
          ,
          n.set = function(t, e, n) {
              return t[0] = e,
              t[1] = n,
              t
          }
          ,
          n.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t
          }
          ,
          n.subtract = o,
          n.multiply = s,
          n.divide = a,
          n.ceil = function(t, e) {
              return t[0] = Math.ceil(e[0]),
              t[1] = Math.ceil(e[1]),
              t
          }
          ,
          n.floor = function(t, e) {
              return t[0] = Math.floor(e[0]),
              t[1] = Math.floor(e[1]),
              t
          }
          ,
          n.min = function(t, e, n) {
              return t[0] = Math.min(e[0], n[0]),
              t[1] = Math.min(e[1], n[1]),
              t
          }
          ,
          n.max = function(t, e, n) {
              return t[0] = Math.max(e[0], n[0]),
              t[1] = Math.max(e[1], n[1]),
              t
          }
          ,
          n.round = function(t, e) {
              return t[0] = Math.round(e[0]),
              t[1] = Math.round(e[1]),
              t
          }
          ,
          n.scale = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t
          }
          ,
          n.scaleAndAdd = function(t, e, n, r) {
              return t[0] = e[0] + n[0] * r,
              t[1] = e[1] + n[1] * r,
              t
          }
          ,
          n.distance = u,
          n.squaredDistance = l,
          n.length = c,
          n.squaredLength = h,
          n.negate = function(t, e) {
              return t[0] = -e[0],
              t[1] = -e[1],
              t
          }
          ,
          n.inverse = function(t, e) {
              return t[0] = 1 / e[0],
              t[1] = 1 / e[1],
              t
          }
          ,
          n.normalize = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = n * n + r * r;
              i > 0 && (i = 1 / Math.sqrt(i));
              return t[0] = e[0] * i,
              t[1] = e[1] * i,
              t
          }
          ,
          n.dot = function(t, e) {
              return t[0] * e[0] + t[1] * e[1]
          }
          ,
          n.cross = function(t, e, n) {
              var r = e[0] * n[1] - e[1] * n[0];
              return t[0] = t[1] = 0,
              t[2] = r,
              t
          }
          ,
          n.lerp = function(t, e, n, r) {
              var i = e[0]
                , o = e[1];
              return t[0] = i + r * (n[0] - i),
              t[1] = o + r * (n[1] - o),
              t
          }
          ,
          n.random = function(t, e) {
              e = e || 1;
              var n = 2 * r.RANDOM() * Math.PI;
              return t[0] = Math.cos(n) * e,
              t[1] = Math.sin(n) * e,
              t
          }
          ,
          n.transformMat2 = function(t, e, n) {
              var r = e[0]
                , i = e[1];
              return t[0] = n[0] * r + n[2] * i,
              t[1] = n[1] * r + n[3] * i,
              t
          }
          ,
          n.transformMat2d = function(t, e, n) {
              var r = e[0]
                , i = e[1];
              return t[0] = n[0] * r + n[2] * i + n[4],
              t[1] = n[1] * r + n[3] * i + n[5],
              t
          }
          ,
          n.transformMat3 = function(t, e, n) {
              var r = e[0]
                , i = e[1];
              return t[0] = n[0] * r + n[3] * i + n[6],
              t[1] = n[1] * r + n[4] * i + n[7],
              t
          }
          ,
          n.transformMat4 = function(t, e, n) {
              var r = e[0]
                , i = e[1];
              return t[0] = n[0] * r + n[4] * i + n[12],
              t[1] = n[1] * r + n[5] * i + n[13],
              t
          }
          ,
          n.rotate = function(t, e, n, r) {
              var i = e[0] - n[0]
                , o = e[1] - n[1]
                , s = Math.sin(r)
                , a = Math.cos(r);
              return t[0] = i * a - o * s + n[0],
              t[1] = i * s + o * a + n[1],
              t
          }
          ,
          n.angle = function(t, e) {
              var n = t[0]
                , r = t[1]
                , i = e[0]
                , o = e[1]
                , s = n * n + r * r;
              s > 0 && (s = 1 / Math.sqrt(s));
              var a = i * i + o * o;
              a > 0 && (a = 1 / Math.sqrt(a));
              var u = (n * i + r * o) * s * a;
              return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u)
          }
          ,
          n.zero = function(t) {
              return t[0] = 0,
              t[1] = 0,
              t
          }
          ,
          n.str = function(t) {
              return "vec2(" + t[0] + ", " + t[1] + ")"
          }
          ,
          n.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1]
          }
          ,
          n.equals = function(t, e) {
              var n = t[0]
                , i = t[1]
                , o = e[0]
                , s = e[1];
              return Math.abs(n - o) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(i - s) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(s))
          }
          ,
          n.forEach = n.sqrLen = n.sqrDist = n.dist = n.div = n.mul = n.sub = n.len = void 0;
          var r = function(t) {
              if (t && t.__esModule)
                  return t;
              var e = {};
              if (null != t)
                  for (var n in t)
                      if (Object.prototype.hasOwnProperty.call(t, n)) {
                          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                          r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                      }
              return e.default = t,
              e
          }(t("./common.js"));
          function i() {
              var t = new r.ARRAY_TYPE(2);
              return r.ARRAY_TYPE != Float32Array && (t[0] = 0,
              t[1] = 0),
              t
          }
          function o(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t
          }
          function s(t, e, n) {
              return t[0] = e[0] * n[0],
              t[1] = e[1] * n[1],
              t
          }
          function a(t, e, n) {
              return t[0] = e[0] / n[0],
              t[1] = e[1] / n[1],
              t
          }
          function u(t, e) {
              var n = e[0] - t[0]
                , r = e[1] - t[1];
              return Math.hypot(n, r)
          }
          function l(t, e) {
              var n = e[0] - t[0]
                , r = e[1] - t[1];
              return n * n + r * r
          }
          function c(t) {
              var e = t[0]
                , n = t[1];
              return Math.hypot(e, n)
          }
          function h(t) {
              var e = t[0]
                , n = t[1];
              return e * e + n * n
          }
          var p = c;
          n.len = p;
          var f = o;
          n.sub = f;
          var d = s;
          n.mul = d;
          var m = a;
          n.div = m;
          var v = u;
          n.dist = v;
          var y = l;
          n.sqrDist = y;
          var g = h;
          n.sqrLen = g;
          var _, b = (_ = i(),
          function(t, e, n, r, i, o) {
              var s, a;
              for (e || (e = 2),
              n || (n = 0),
              a = r ? Math.min(r * e + n, t.length) : t.length,
              s = n; s < a; s += e)
                  _[0] = t[s],
                  _[1] = t[s + 1],
                  i(_, _, o),
                  t[s] = _[0],
                  t[s + 1] = _[1];
              return t
          }
          );
          n.forEach = b
      }
      , {
          "./common.js": 4
      }],
      13: [function(t, e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", {
              value: !0
          }),
          n.create = i,
          n.clone = function(t) {
              var e = new r.ARRAY_TYPE(3);
              return e[0] = t[0],
              e[1] = t[1],
              e[2] = t[2],
              e
          }
          ,
          n.length = o,
          n.fromValues = s,
          n.copy = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t
          }
          ,
          n.set = function(t, e, n, r) {
              return t[0] = e,
              t[1] = n,
              t[2] = r,
              t
          }
          ,
          n.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t
          }
          ,
          n.subtract = a,
          n.multiply = u,
          n.divide = l,
          n.ceil = function(t, e) {
              return t[0] = Math.ceil(e[0]),
              t[1] = Math.ceil(e[1]),
              t[2] = Math.ceil(e[2]),
              t
          }
          ,
          n.floor = function(t, e) {
              return t[0] = Math.floor(e[0]),
              t[1] = Math.floor(e[1]),
              t[2] = Math.floor(e[2]),
              t
          }
          ,
          n.min = function(t, e, n) {
              return t[0] = Math.min(e[0], n[0]),
              t[1] = Math.min(e[1], n[1]),
              t[2] = Math.min(e[2], n[2]),
              t
          }
          ,
          n.max = function(t, e, n) {
              return t[0] = Math.max(e[0], n[0]),
              t[1] = Math.max(e[1], n[1]),
              t[2] = Math.max(e[2], n[2]),
              t
          }
          ,
          n.round = function(t, e) {
              return t[0] = Math.round(e[0]),
              t[1] = Math.round(e[1]),
              t[2] = Math.round(e[2]),
              t
          }
          ,
          n.scale = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t
          }
          ,
          n.scaleAndAdd = function(t, e, n, r) {
              return t[0] = e[0] + n[0] * r,
              t[1] = e[1] + n[1] * r,
              t[2] = e[2] + n[2] * r,
              t
          }
          ,
          n.distance = c,
          n.squaredDistance = h,
          n.squaredLength = p,
          n.negate = function(t, e) {
              return t[0] = -e[0],
              t[1] = -e[1],
              t[2] = -e[2],
              t
          }
          ,
          n.inverse = function(t, e) {
              return t[0] = 1 / e[0],
              t[1] = 1 / e[1],
              t[2] = 1 / e[2],
              t
          }
          ,
          n.normalize = f,
          n.dot = d,
          n.cross = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = n[0]
                , a = n[1]
                , u = n[2];
              return t[0] = i * u - o * a,
              t[1] = o * s - r * u,
              t[2] = r * a - i * s,
              t
          }
          ,
          n.lerp = function(t, e, n, r) {
              var i = e[0]
                , o = e[1]
                , s = e[2];
              return t[0] = i + r * (n[0] - i),
              t[1] = o + r * (n[1] - o),
              t[2] = s + r * (n[2] - s),
              t
          }
          ,
          n.hermite = function(t, e, n, r, i, o) {
              var s = o * o
                , a = s * (2 * o - 3) + 1
                , u = s * (o - 2) + o
                , l = s * (o - 1)
                , c = s * (3 - 2 * o);
              return t[0] = e[0] * a + n[0] * u + r[0] * l + i[0] * c,
              t[1] = e[1] * a + n[1] * u + r[1] * l + i[1] * c,
              t[2] = e[2] * a + n[2] * u + r[2] * l + i[2] * c,
              t
          }
          ,
          n.bezier = function(t, e, n, r, i, o) {
              var s = 1 - o
                , a = s * s
                , u = o * o
                , l = a * s
                , c = 3 * o * a
                , h = 3 * u * s
                , p = u * o;
              return t[0] = e[0] * l + n[0] * c + r[0] * h + i[0] * p,
              t[1] = e[1] * l + n[1] * c + r[1] * h + i[1] * p,
              t[2] = e[2] * l + n[2] * c + r[2] * h + i[2] * p,
              t
          }
          ,
          n.random = function(t, e) {
              e = e || 1;
              var n = 2 * r.RANDOM() * Math.PI
                , i = 2 * r.RANDOM() - 1
                , o = Math.sqrt(1 - i * i) * e;
              return t[0] = Math.cos(n) * o,
              t[1] = Math.sin(n) * o,
              t[2] = i * e,
              t
          }
          ,
          n.transformMat4 = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = n[3] * r + n[7] * i + n[11] * o + n[15];
              return s = s || 1,
              t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / s,
              t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / s,
              t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / s,
              t
          }
          ,
          n.transformMat3 = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2];
              return t[0] = r * n[0] + i * n[3] + o * n[6],
              t[1] = r * n[1] + i * n[4] + o * n[7],
              t[2] = r * n[2] + i * n[5] + o * n[8],
              t
          }
          ,
          n.transformQuat = function(t, e, n) {
              var r = n[0]
                , i = n[1]
                , o = n[2]
                , s = n[3]
                , a = e[0]
                , u = e[1]
                , l = e[2]
                , c = i * l - o * u
                , h = o * a - r * l
                , p = r * u - i * a
                , f = i * p - o * h
                , d = o * c - r * p
                , m = r * h - i * c
                , v = 2 * s;
              return c *= v,
              h *= v,
              p *= v,
              f *= 2,
              d *= 2,
              m *= 2,
              t[0] = a + c + f,
              t[1] = u + h + d,
              t[2] = l + p + m,
              t
          }
          ,
          n.rotateX = function(t, e, n, r) {
              var i = []
                , o = [];
              return i[0] = e[0] - n[0],
              i[1] = e[1] - n[1],
              i[2] = e[2] - n[2],
              o[0] = i[0],
              o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r),
              o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r),
              t[0] = o[0] + n[0],
              t[1] = o[1] + n[1],
              t[2] = o[2] + n[2],
              t
          }
          ,
          n.rotateY = function(t, e, n, r) {
              var i = []
                , o = [];
              return i[0] = e[0] - n[0],
              i[1] = e[1] - n[1],
              i[2] = e[2] - n[2],
              o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r),
              o[1] = i[1],
              o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r),
              t[0] = o[0] + n[0],
              t[1] = o[1] + n[1],
              t[2] = o[2] + n[2],
              t
          }
          ,
          n.rotateZ = function(t, e, n, r) {
              var i = []
                , o = [];
              return i[0] = e[0] - n[0],
              i[1] = e[1] - n[1],
              i[2] = e[2] - n[2],
              o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r),
              o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r),
              o[2] = i[2],
              t[0] = o[0] + n[0],
              t[1] = o[1] + n[1],
              t[2] = o[2] + n[2],
              t
          }
          ,
          n.angle = function(t, e) {
              var n = s(t[0], t[1], t[2])
                , r = s(e[0], e[1], e[2]);
              f(n, n),
              f(r, r);
              var i = d(n, r);
              return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i)
          }
          ,
          n.zero = function(t) {
              return t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t
          }
          ,
          n.str = function(t) {
              return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
          }
          ,
          n.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
          }
          ,
          n.equals = function(t, e) {
              var n = t[0]
                , i = t[1]
                , o = t[2]
                , s = e[0]
                , a = e[1]
                , u = e[2];
              return Math.abs(n - s) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(i - a) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(a)) && Math.abs(o - u) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(u))
          }
          ,
          n.forEach = n.sqrLen = n.len = n.sqrDist = n.dist = n.div = n.mul = n.sub = void 0;
          var r = function(t) {
              if (t && t.__esModule)
                  return t;
              var e = {};
              if (null != t)
                  for (var n in t)
                      if (Object.prototype.hasOwnProperty.call(t, n)) {
                          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                          r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                      }
              return e.default = t,
              e
          }(t("./common.js"));
          function i() {
              var t = new r.ARRAY_TYPE(3);
              return r.ARRAY_TYPE != Float32Array && (t[0] = 0,
              t[1] = 0,
              t[2] = 0),
              t
          }
          function o(t) {
              var e = t[0]
                , n = t[1]
                , r = t[2];
              return Math.hypot(e, n, r)
          }
          function s(t, e, n) {
              var i = new r.ARRAY_TYPE(3);
              return i[0] = t,
              i[1] = e,
              i[2] = n,
              i
          }
          function a(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t[2] = e[2] - n[2],
              t
          }
          function u(t, e, n) {
              return t[0] = e[0] * n[0],
              t[1] = e[1] * n[1],
              t[2] = e[2] * n[2],
              t
          }
          function l(t, e, n) {
              return t[0] = e[0] / n[0],
              t[1] = e[1] / n[1],
              t[2] = e[2] / n[2],
              t
          }
          function c(t, e) {
              var n = e[0] - t[0]
                , r = e[1] - t[1]
                , i = e[2] - t[2];
              return Math.hypot(n, r, i)
          }
          function h(t, e) {
              var n = e[0] - t[0]
                , r = e[1] - t[1]
                , i = e[2] - t[2];
              return n * n + r * r + i * i
          }
          function p(t) {
              var e = t[0]
                , n = t[1]
                , r = t[2];
              return e * e + n * n + r * r
          }
          function f(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = n * n + r * r + i * i;
              return o > 0 && (o = 1 / Math.sqrt(o)),
              t[0] = e[0] * o,
              t[1] = e[1] * o,
              t[2] = e[2] * o,
              t
          }
          function d(t, e) {
              return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
          }
          var m = a;
          n.sub = m;
          var v = u;
          n.mul = v;
          var y = l;
          n.div = y;
          var g = c;
          n.dist = g;
          var _ = h;
          n.sqrDist = _;
          var b = o;
          n.len = b;
          var w = p;
          n.sqrLen = w;
          var x, E = (x = i(),
          function(t, e, n, r, i, o) {
              var s, a;
              for (e || (e = 3),
              n || (n = 0),
              a = r ? Math.min(r * e + n, t.length) : t.length,
              s = n; s < a; s += e)
                  x[0] = t[s],
                  x[1] = t[s + 1],
                  x[2] = t[s + 2],
                  i(x, x, o),
                  t[s] = x[0],
                  t[s + 1] = x[1],
                  t[s + 2] = x[2];
              return t
          }
          );
          n.forEach = E
      }
      , {
          "./common.js": 4
      }],
      14: [function(t, e, n) {
          "use strict";
          Object.defineProperty(n, "__esModule", {
              value: !0
          }),
          n.create = i,
          n.clone = function(t) {
              var e = new r.ARRAY_TYPE(4);
              return e[0] = t[0],
              e[1] = t[1],
              e[2] = t[2],
              e[3] = t[3],
              e
          }
          ,
          n.fromValues = function(t, e, n, i) {
              var o = new r.ARRAY_TYPE(4);
              return o[0] = t,
              o[1] = e,
              o[2] = n,
              o[3] = i,
              o
          }
          ,
          n.copy = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[3],
              t
          }
          ,
          n.set = function(t, e, n, r, i) {
              return t[0] = e,
              t[1] = n,
              t[2] = r,
              t[3] = i,
              t
          }
          ,
          n.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t[3] = e[3] + n[3],
              t
          }
          ,
          n.subtract = o,
          n.multiply = s,
          n.divide = a,
          n.ceil = function(t, e) {
              return t[0] = Math.ceil(e[0]),
              t[1] = Math.ceil(e[1]),
              t[2] = Math.ceil(e[2]),
              t[3] = Math.ceil(e[3]),
              t
          }
          ,
          n.floor = function(t, e) {
              return t[0] = Math.floor(e[0]),
              t[1] = Math.floor(e[1]),
              t[2] = Math.floor(e[2]),
              t[3] = Math.floor(e[3]),
              t
          }
          ,
          n.min = function(t, e, n) {
              return t[0] = Math.min(e[0], n[0]),
              t[1] = Math.min(e[1], n[1]),
              t[2] = Math.min(e[2], n[2]),
              t[3] = Math.min(e[3], n[3]),
              t
          }
          ,
          n.max = function(t, e, n) {
              return t[0] = Math.max(e[0], n[0]),
              t[1] = Math.max(e[1], n[1]),
              t[2] = Math.max(e[2], n[2]),
              t[3] = Math.max(e[3], n[3]),
              t
          }
          ,
          n.round = function(t, e) {
              return t[0] = Math.round(e[0]),
              t[1] = Math.round(e[1]),
              t[2] = Math.round(e[2]),
              t[3] = Math.round(e[3]),
              t
          }
          ,
          n.scale = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t[3] = e[3] * n,
              t
          }
          ,
          n.scaleAndAdd = function(t, e, n, r) {
              return t[0] = e[0] + n[0] * r,
              t[1] = e[1] + n[1] * r,
              t[2] = e[2] + n[2] * r,
              t[3] = e[3] + n[3] * r,
              t
          }
          ,
          n.distance = u,
          n.squaredDistance = l,
          n.length = c,
          n.squaredLength = h,
          n.negate = function(t, e) {
              return t[0] = -e[0],
              t[1] = -e[1],
              t[2] = -e[2],
              t[3] = -e[3],
              t
          }
          ,
          n.inverse = function(t, e) {
              return t[0] = 1 / e[0],
              t[1] = 1 / e[1],
              t[2] = 1 / e[2],
              t[3] = 1 / e[3],
              t
          }
          ,
          n.normalize = function(t, e) {
              var n = e[0]
                , r = e[1]
                , i = e[2]
                , o = e[3]
                , s = n * n + r * r + i * i + o * o;
              s > 0 && (s = 1 / Math.sqrt(s));
              return t[0] = n * s,
              t[1] = r * s,
              t[2] = i * s,
              t[3] = o * s,
              t
          }
          ,
          n.dot = function(t, e) {
              return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
          }
          ,
          n.cross = function(t, e, n, r) {
              var i = n[0] * r[1] - n[1] * r[0]
                , o = n[0] * r[2] - n[2] * r[0]
                , s = n[0] * r[3] - n[3] * r[0]
                , a = n[1] * r[2] - n[2] * r[1]
                , u = n[1] * r[3] - n[3] * r[1]
                , l = n[2] * r[3] - n[3] * r[2]
                , c = e[0]
                , h = e[1]
                , p = e[2]
                , f = e[3];
              return t[0] = h * l - p * u + f * a,
              t[1] = -c * l + p * s - f * o,
              t[2] = c * u - h * s + f * i,
              t[3] = -c * a + h * o - p * i,
              t
          }
          ,
          n.lerp = function(t, e, n, r) {
              var i = e[0]
                , o = e[1]
                , s = e[2]
                , a = e[3];
              return t[0] = i + r * (n[0] - i),
              t[1] = o + r * (n[1] - o),
              t[2] = s + r * (n[2] - s),
              t[3] = a + r * (n[3] - a),
              t
          }
          ,
          n.random = function(t, e) {
              var n, i, o, s, a, u;
              e = e || 1;
              do {
                  n = 2 * r.RANDOM() - 1,
                  i = 2 * r.RANDOM() - 1,
                  a = n * n + i * i
              } while (a >= 1);
              do {
                  o = 2 * r.RANDOM() - 1,
                  s = 2 * r.RANDOM() - 1,
                  u = o * o + s * s
              } while (u >= 1);
              var l = Math.sqrt((1 - a) / u);
              return t[0] = e * n,
              t[1] = e * i,
              t[2] = e * o * l,
              t[3] = e * s * l,
              t
          }
          ,
          n.transformMat4 = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = e[3];
              return t[0] = n[0] * r + n[4] * i + n[8] * o + n[12] * s,
              t[1] = n[1] * r + n[5] * i + n[9] * o + n[13] * s,
              t[2] = n[2] * r + n[6] * i + n[10] * o + n[14] * s,
              t[3] = n[3] * r + n[7] * i + n[11] * o + n[15] * s,
              t
          }
          ,
          n.transformQuat = function(t, e, n) {
              var r = e[0]
                , i = e[1]
                , o = e[2]
                , s = n[0]
                , a = n[1]
                , u = n[2]
                , l = n[3]
                , c = l * r + a * o - u * i
                , h = l * i + u * r - s * o
                , p = l * o + s * i - a * r
                , f = -s * r - a * i - u * o;
              return t[0] = c * l + f * -s + h * -u - p * -a,
              t[1] = h * l + f * -a + p * -s - c * -u,
              t[2] = p * l + f * -u + c * -a - h * -s,
              t[3] = e[3],
              t
          }
          ,
          n.zero = function(t) {
              return t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t
          }
          ,
          n.str = function(t) {
              return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
          }
          ,
          n.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
          }
          ,
          n.equals = function(t, e) {
              var n = t[0]
                , i = t[1]
                , o = t[2]
                , s = t[3]
                , a = e[0]
                , u = e[1]
                , l = e[2]
                , c = e[3];
              return Math.abs(n - a) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(i - u) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(s - c) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(c))
          }
          ,
          n.forEach = n.sqrLen = n.len = n.sqrDist = n.dist = n.div = n.mul = n.sub = void 0;
          var r = function(t) {
              if (t && t.__esModule)
                  return t;
              var e = {};
              if (null != t)
                  for (var n in t)
                      if (Object.prototype.hasOwnProperty.call(t, n)) {
                          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                          r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                      }
              return e.default = t,
              e
          }(t("./common.js"));
          function i() {
              var t = new r.ARRAY_TYPE(4);
              return r.ARRAY_TYPE != Float32Array && (t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0),
              t
          }
          function o(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t[2] = e[2] - n[2],
              t[3] = e[3] - n[3],
              t
          }
          function s(t, e, n) {
              return t[0] = e[0] * n[0],
              t[1] = e[1] * n[1],
              t[2] = e[2] * n[2],
              t[3] = e[3] * n[3],
              t
          }
          function a(t, e, n) {
              return t[0] = e[0] / n[0],
              t[1] = e[1] / n[1],
              t[2] = e[2] / n[2],
              t[3] = e[3] / n[3],
              t
          }
          function u(t, e) {
              var n = e[0] - t[0]
                , r = e[1] - t[1]
                , i = e[2] - t[2]
                , o = e[3] - t[3];
              return Math.hypot(n, r, i, o)
          }
          function l(t, e) {
              var n = e[0] - t[0]
                , r = e[1] - t[1]
                , i = e[2] - t[2]
                , o = e[3] - t[3];
              return n * n + r * r + i * i + o * o
          }
          function c(t) {
              var e = t[0]
                , n = t[1]
                , r = t[2]
                , i = t[3];
              return Math.hypot(e, n, r, i)
          }
          function h(t) {
              var e = t[0]
                , n = t[1]
                , r = t[2]
                , i = t[3];
              return e * e + n * n + r * r + i * i
          }
          var p = o;
          n.sub = p;
          var f = s;
          n.mul = f;
          var d = a;
          n.div = d;
          var m = u;
          n.dist = m;
          var v = l;
          n.sqrDist = v;
          var y = c;
          n.len = y;
          var g = h;
          n.sqrLen = g;
          var _, b = (_ = i(),
          function(t, e, n, r, i, o) {
              var s, a;
              for (e || (e = 4),
              n || (n = 0),
              a = r ? Math.min(r * e + n, t.length) : t.length,
              s = n; s < a; s += e)
                  _[0] = t[s],
                  _[1] = t[s + 1],
                  _[2] = t[s + 2],
                  _[3] = t[s + 3],
                  i(_, _, o),
                  t[s] = _[0],
                  t[s + 1] = _[1],
                  t[s + 2] = _[2],
                  t[s + 3] = _[3];
              return t
          }
          );
          n.forEach = b
      }
      , {
          "./common.js": 4
      }],
      15: [function(e, n, r) {
          /*! Hammer.JS - v2.0.4 - 2014-09-28
* http://hammerjs.github.io/
*
* Copyright (c) 2014 Jorik Tangelder;
* Licensed under the MIT license */
          !function(e, r, i, o) {
              "use strict";
              var s = ["", "webkit", "moz", "MS", "ms", "o"]
                , a = r.createElement("div")
                , u = "function"
                , l = Math.round
                , c = Math.abs
                , h = Date.now;
              function p(t, e, n) {
                  return setTimeout(g(t, n), e)
              }
              function f(t, e, n) {
                  return !!Array.isArray(t) && (d(t, n[e], n),
                  !0)
              }
              function d(t, e, n) {
                  var r;
                  if (t)
                      if (t.forEach)
                          t.forEach(e, n);
                      else if (t.length !== o)
                          for (r = 0; r < t.length; )
                              e.call(n, t[r], r, t),
                              r++;
                      else
                          for (r in t)
                              t.hasOwnProperty(r) && e.call(n, t[r], r, t)
              }
              function m(t, e, n) {
                  for (var r = Object.keys(e), i = 0; i < r.length; )
                      (!n || n && t[r[i]] === o) && (t[r[i]] = e[r[i]]),
                      i++;
                  return t
              }
              function v(t, e) {
                  return m(t, e, !0)
              }
              function y(t, e, n) {
                  var r, i = e.prototype;
                  (r = t.prototype = Object.create(i)).constructor = t,
                  r._super = i,
                  n && m(r, n)
              }
              function g(t, e) {
                  return function() {
                      return t.apply(e, arguments)
                  }
              }
              function _(t, e) {
                  return typeof t == u ? t.apply(e && e[0] || o, e) : t
              }
              function b(t, e) {
                  return t === o ? e : t
              }
              function w(t, e, n) {
                  d(S(e), (function(e) {
                      t.addEventListener(e, n, !1)
                  }
                  ))
              }
              function x(t, e, n) {
                  d(S(e), (function(e) {
                      t.removeEventListener(e, n, !1)
                  }
                  ))
              }
              function E(t, e) {
                  for (; t; ) {
                      if (t == e)
                          return !0;
                      t = t.parentNode
                  }
                  return !1
              }
              function M(t, e) {
                  return t.indexOf(e) > -1
              }
              function S(t) {
                  return t.trim().split(/\s+/g)
              }
              function T(t, e, n) {
                  if (t.indexOf && !n)
                      return t.indexOf(e);
                  for (var r = 0; r < t.length; ) {
                      if (n && t[r][n] == e || !n && t[r] === e)
                          return r;
                      r++
                  }
                  return -1
              }
              function C(t) {
                  return Array.prototype.slice.call(t, 0)
              }
              function P(t, e, n) {
                  for (var r = [], i = [], o = 0; o < t.length; ) {
                      var s = e ? t[o][e] : t[o];
                      T(i, s) < 0 && r.push(t[o]),
                      i[o] = s,
                      o++
                  }
                  return n && (r = e ? r.sort((function(t, n) {
                      return t[e] > n[e]
                  }
                  )) : r.sort()),
                  r
              }
              function O(t, e) {
                  for (var n, r, i = e[0].toUpperCase() + e.slice(1), a = 0; a < s.length; ) {
                      if ((r = (n = s[a]) ? n + i : e)in t)
                          return r;
                      a++
                  }
                  return o
              }
              var L = 1;
              function A(t) {
                  var e = t.ownerDocument;
                  return e.defaultView || e.parentWindow
              }
              var k = "ontouchstart"in e
                , R = O(e, "PointerEvent") !== o
                , D = k && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
                , I = 25
                , N = 1
                , F = 2
                , j = 4
                , z = 8
                , H = 1
                , B = 2
                , V = 4
                , q = 8
                , W = 16
                , Y = B | V
                , X = q | W
                , U = Y | X
                , G = ["x", "y"]
                , K = ["clientX", "clientY"];
              function $(t, e) {
                  var n = this;
                  this.manager = t,
                  this.callback = e,
                  this.element = t.element,
                  this.target = t.options.inputTarget,
                  this.domHandler = function(e) {
                      _(t.options.enable, [t]) && n.handler(e)
                  }
                  ,
                  this.init()
              }
              function Q(t, e, n) {
                  var r = n.pointers.length
                    , i = n.changedPointers.length
                    , s = e & N && r - i == 0
                    , a = e & (j | z) && r - i == 0;
                  n.isFirst = !!s,
                  n.isFinal = !!a,
                  s && (t.session = {}),
                  n.eventType = e,
                  function(t, e) {
                      var n = t.session
                        , r = e.pointers
                        , i = r.length;
                      n.firstInput || (n.firstInput = Z(e));
                      i > 1 && !n.firstMultiple ? n.firstMultiple = Z(e) : 1 === i && (n.firstMultiple = !1);
                      var s = n.firstInput
                        , a = n.firstMultiple
                        , u = a ? a.center : s.center
                        , l = e.center = J(r);
                      e.timeStamp = h(),
                      e.deltaTime = e.timeStamp - s.timeStamp,
                      e.angle = nt(u, l),
                      e.distance = et(u, l),
                      function(t, e) {
                          var n = e.center
                            , r = t.offsetDelta || {}
                            , i = t.prevDelta || {}
                            , o = t.prevInput || {};
                          e.eventType !== N && o.eventType !== j || (i = t.prevDelta = {
                              x: o.deltaX || 0,
                              y: o.deltaY || 0
                          },
                          r = t.offsetDelta = {
                              x: n.x,
                              y: n.y
                          });
                          e.deltaX = i.x + (n.x - r.x),
                          e.deltaY = i.y + (n.y - r.y)
                      }(n, e),
                      e.offsetDirection = tt(e.deltaX, e.deltaY),
                      e.scale = a ? (p = a.pointers,
                      f = r,
                      et(f[0], f[1], K) / et(p[0], p[1], K)) : 1,
                      e.rotation = a ? function(t, e) {
                          return nt(e[1], e[0], K) - nt(t[1], t[0], K)
                      }(a.pointers, r) : 0,
                      function(t, e) {
                          var n, r, i, s, a = t.lastInterval || e, u = e.timeStamp - a.timeStamp;
                          if (e.eventType != z && (u > I || a.velocity === o)) {
                              var l = a.deltaX - e.deltaX
                                , h = a.deltaY - e.deltaY
                                , p = function(t, e, n) {
                                  return {
                                      x: e / t || 0,
                                      y: n / t || 0
                                  }
                              }(u, l, h);
                              r = p.x,
                              i = p.y,
                              n = c(p.x) > c(p.y) ? p.x : p.y,
                              s = tt(l, h),
                              t.lastInterval = e
                          } else
                              n = a.velocity,
                              r = a.velocityX,
                              i = a.velocityY,
                              s = a.direction;
                          e.velocity = n,
                          e.velocityX = r,
                          e.velocityY = i,
                          e.direction = s
                      }(n, e);
                      var p, f;
                      var d = t.element;
                      E(e.srcEvent.target, d) && (d = e.srcEvent.target);
                      e.target = d
                  }(t, n),
                  t.emit("hammer.input", n),
                  t.recognize(n),
                  t.session.prevInput = n
              }
              function Z(t) {
                  for (var e = [], n = 0; n < t.pointers.length; )
                      e[n] = {
                          clientX: l(t.pointers[n].clientX),
                          clientY: l(t.pointers[n].clientY)
                      },
                      n++;
                  return {
                      timeStamp: h(),
                      pointers: e,
                      center: J(e),
                      deltaX: t.deltaX,
                      deltaY: t.deltaY
                  }
              }
              function J(t) {
                  var e = t.length;
                  if (1 === e)
                      return {
                          x: l(t[0].clientX),
                          y: l(t[0].clientY)
                      };
                  for (var n = 0, r = 0, i = 0; i < e; )
                      n += t[i].clientX,
                      r += t[i].clientY,
                      i++;
                  return {
                      x: l(n / e),
                      y: l(r / e)
                  }
              }
              function tt(t, e) {
                  return t === e ? H : c(t) >= c(e) ? t > 0 ? B : V : e > 0 ? q : W
              }
              function et(t, e, n) {
                  n || (n = G);
                  var r = e[n[0]] - t[n[0]]
                    , i = e[n[1]] - t[n[1]];
                  return Math.sqrt(r * r + i * i)
              }
              function nt(t, e, n) {
                  n || (n = G);
                  var r = e[n[0]] - t[n[0]]
                    , i = e[n[1]] - t[n[1]];
                  return 180 * Math.atan2(i, r) / Math.PI
              }
              $.prototype = {
                  handler: function() {},
                  init: function() {
                      this.evEl && w(this.element, this.evEl, this.domHandler),
                      this.evTarget && w(this.target, this.evTarget, this.domHandler),
                      this.evWin && w(A(this.element), this.evWin, this.domHandler)
                  },
                  destroy: function() {
                      this.evEl && x(this.element, this.evEl, this.domHandler),
                      this.evTarget && x(this.target, this.evTarget, this.domHandler),
                      this.evWin && x(A(this.element), this.evWin, this.domHandler)
                  }
              };
              var rt = {
                  mousedown: N,
                  mousemove: F,
                  mouseup: j
              }
                , it = "mousedown"
                , ot = "mousemove mouseup";
              function st() {
                  this.evEl = it,
                  this.evWin = ot,
                  this.allow = !0,
                  this.pressed = !1,
                  $.apply(this, arguments)
              }
              y(st, $, {
                  handler: function(t) {
                      var e = rt[t.type];
                      e & N && 0 === t.button && (this.pressed = !0),
                      e & F && 1 !== t.which && (e = j),
                      this.pressed && this.allow && (e & j && (this.pressed = !1),
                      this.callback(this.manager, e, {
                          pointers: [t],
                          changedPointers: [t],
                          pointerType: "mouse",
                          srcEvent: t
                      }))
                  }
              });
              var at = {
                  pointerdown: N,
                  pointermove: F,
                  pointerup: j,
                  pointercancel: z,
                  pointerout: z
              }
                , ut = {
                  2: "touch",
                  3: "pen",
                  4: "mouse",
                  5: "kinect"
              }
                , lt = "pointerdown"
                , ct = "pointermove pointerup pointercancel";
              function ht() {
                  this.evEl = lt,
                  this.evWin = ct,
                  $.apply(this, arguments),
                  this.store = this.manager.session.pointerEvents = []
              }
              e.MSPointerEvent && (lt = "MSPointerDown",
              ct = "MSPointerMove MSPointerUp MSPointerCancel"),
              y(ht, $, {
                  handler: function(t) {
                      var e = this.store
                        , n = !1
                        , r = t.type.toLowerCase().replace("ms", "")
                        , i = at[r]
                        , o = ut[t.pointerType] || t.pointerType
                        , s = "touch" == o
                        , a = T(e, t.pointerId, "pointerId");
                      i & N && (0 === t.button || s) ? a < 0 && (e.push(t),
                      a = e.length - 1) : i & (j | z) && (n = !0),
                      a < 0 || (e[a] = t,
                      this.callback(this.manager, i, {
                          pointers: e,
                          changedPointers: [t],
                          pointerType: o,
                          srcEvent: t
                      }),
                      n && e.splice(a, 1))
                  }
              });
              var pt = {
                  touchstart: N,
                  touchmove: F,
                  touchend: j,
                  touchcancel: z
              }
                , ft = "touchstart"
                , dt = "touchstart touchmove touchend touchcancel";
              function mt() {
                  this.evTarget = ft,
                  this.evWin = dt,
                  this.started = !1,
                  $.apply(this, arguments)
              }
              function vt(t, e) {
                  var n = C(t.touches)
                    , r = C(t.changedTouches);
                  return e & (j | z) && (n = P(n.concat(r), "identifier", !0)),
                  [n, r]
              }
              y(mt, $, {
                  handler: function(t) {
                      var e = pt[t.type];
                      if (e === N && (this.started = !0),
                      this.started) {
                          var n = vt.call(this, t, e);
                          e & (j | z) && n[0].length - n[1].length == 0 && (this.started = !1),
                          this.callback(this.manager, e, {
                              pointers: n[0],
                              changedPointers: n[1],
                              pointerType: "touch",
                              srcEvent: t
                          })
                      }
                  }
              });
              var yt = {
                  touchstart: N,
                  touchmove: F,
                  touchend: j,
                  touchcancel: z
              }
                , gt = "touchstart touchmove touchend touchcancel";
              function _t() {
                  this.evTarget = gt,
                  this.targetIds = {},
                  $.apply(this, arguments)
              }
              function bt(t, e) {
                  var n = C(t.touches)
                    , r = this.targetIds;
                  if (e & (N | F) && 1 === n.length)
                      return r[n[0].identifier] = !0,
                      [n, n];
                  var i, o, s = C(t.changedTouches), a = [], u = this.target;
                  if (o = n.filter((function(t) {
                      return E(t.target, u)
                  }
                  )),
                  e === N)
                      for (i = 0; i < o.length; )
                          r[o[i].identifier] = !0,
                          i++;
                  for (i = 0; i < s.length; )
                      r[s[i].identifier] && a.push(s[i]),
                      e & (j | z) && delete r[s[i].identifier],
                      i++;
                  return a.length ? [P(o.concat(a), "identifier", !0), a] : void 0
              }
              function wt() {
                  $.apply(this, arguments);
                  var t = g(this.handler, this);
                  this.touch = new _t(this.manager,t),
                  this.mouse = new st(this.manager,t)
              }
              y(_t, $, {
                  handler: function(t) {
                      var e = yt[t.type]
                        , n = bt.call(this, t, e);
                      n && this.callback(this.manager, e, {
                          pointers: n[0],
                          changedPointers: n[1],
                          pointerType: "touch",
                          srcEvent: t
                      })
                  }
              }),
              y(wt, $, {
                  handler: function(t, e, n) {
                      var r = "touch" == n.pointerType
                        , i = "mouse" == n.pointerType;
                      if (r)
                          this.mouse.allow = !1;
                      else if (i && !this.mouse.allow)
                          return;
                      e & (j | z) && (this.mouse.allow = !0),
                      this.callback(t, e, n)
                  },
                  destroy: function() {
                      this.touch.destroy(),
                      this.mouse.destroy()
                  }
              });
              var xt = O(a.style, "touchAction")
                , Et = xt !== o
                , Mt = "auto"
                , St = "manipulation"
                , Tt = "none"
                , Ct = "pan-x"
                , Pt = "pan-y";
              function Ot(t, e) {
                  this.manager = t,
                  this.set(e)
              }
              Ot.prototype = {
                  set: function(t) {
                      "compute" == t && (t = this.compute()),
                      Et && (this.manager.element.style[xt] = t),
                      this.actions = t.toLowerCase().trim()
                  },
                  update: function() {
                      this.set(this.manager.options.touchAction)
                  },
                  compute: function() {
                      var t = [];
                      return d(this.manager.recognizers, (function(e) {
                          _(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                      }
                      )),
                      function(t) {
                          if (M(t, Tt))
                              return Tt;
                          var e = M(t, Ct)
                            , n = M(t, Pt);
                          if (e && n)
                              return Ct + " " + Pt;
                          if (e || n)
                              return e ? Ct : Pt;
                          if (M(t, St))
                              return St;
                          return Mt
                      }(t.join(" "))
                  },
                  preventDefaults: function(t) {
                      if (!Et) {
                          var e = t.srcEvent
                            , n = t.offsetDirection;
                          if (!this.manager.session.prevented) {
                              var r = this.actions
                                , i = M(r, Tt)
                                , o = M(r, Pt)
                                , s = M(r, Ct);
                              return i || o && n & Y || s && n & X ? this.preventSrc(e) : void 0
                          }
                          e.preventDefault()
                      }
                  },
                  preventSrc: function(t) {
                      this.manager.session.prevented = !0,
                      t.preventDefault()
                  }
              };
              var Lt = 1
                , At = 2
                , kt = 4
                , Rt = 8
                , Dt = Rt
                , It = 16;
              function Nt(t) {
                  this.id = L++,
                  this.manager = null,
                  this.options = v(t || {}, this.defaults),
                  this.options.enable = b(this.options.enable, !0),
                  this.state = Lt,
                  this.simultaneous = {},
                  this.requireFail = []
              }
              function Ft(t) {
                  return t == W ? "down" : t == q ? "up" : t == B ? "left" : t == V ? "right" : ""
              }
              function jt(t, e) {
                  var n = e.manager;
                  return n ? n.get(t) : t
              }
              function zt() {
                  Nt.apply(this, arguments)
              }
              function Ht() {
                  zt.apply(this, arguments),
                  this.pX = null,
                  this.pY = null
              }
              function Bt() {
                  zt.apply(this, arguments)
              }
              function Vt() {
                  Nt.apply(this, arguments),
                  this._timer = null,
                  this._input = null
              }
              function qt() {
                  zt.apply(this, arguments)
              }
              function Wt() {
                  zt.apply(this, arguments)
              }
              function Yt() {
                  Nt.apply(this, arguments),
                  this.pTime = !1,
                  this.pCenter = !1,
                  this._timer = null,
                  this._input = null,
                  this.count = 0
              }
              function Xt(t, e) {
                  return (e = e || {}).recognizers = b(e.recognizers, Xt.defaults.preset),
                  new Ut(t,e)
              }
              Nt.prototype = {
                  defaults: {},
                  set: function(t) {
                      return m(this.options, t),
                      this.manager && this.manager.touchAction.update(),
                      this
                  },
                  recognizeWith: function(t) {
                      if (f(t, "recognizeWith", this))
                          return this;
                      var e = this.simultaneous;
                      return e[(t = jt(t, this)).id] || (e[t.id] = t,
                      t.recognizeWith(this)),
                      this
                  },
                  dropRecognizeWith: function(t) {
                      return f(t, "dropRecognizeWith", this) ? this : (t = jt(t, this),
                      delete this.simultaneous[t.id],
                      this)
                  },
                  requireFailure: function(t) {
                      if (f(t, "requireFailure", this))
                          return this;
                      var e = this.requireFail;
                      return -1 === T(e, t = jt(t, this)) && (e.push(t),
                      t.requireFailure(this)),
                      this
                  },
                  dropRequireFailure: function(t) {
                      if (f(t, "dropRequireFailure", this))
                          return this;
                      t = jt(t, this);
                      var e = T(this.requireFail, t);
                      return e > -1 && this.requireFail.splice(e, 1),
                      this
                  },
                  hasRequireFailures: function() {
                      return this.requireFail.length > 0
                  },
                  canRecognizeWith: function(t) {
                      return !!this.simultaneous[t.id]
                  },
                  emit: function(t) {
                      var e = this
                        , n = this.state;
                      function r(r) {
                          e.manager.emit(e.options.event + (r ? function(t) {
                              if (t & It)
                                  return "cancel";
                              if (t & Rt)
                                  return "end";
                              if (t & kt)
                                  return "move";
                              if (t & At)
                                  return "start";
                              return ""
                          }(n) : ""), t)
                      }
                      n < Rt && r(!0),
                      r(),
                      n >= Rt && r(!0)
                  },
                  tryEmit: function(t) {
                      if (this.canEmit())
                          return this.emit(t);
                      this.state = 32
                  },
                  canEmit: function() {
                      for (var t = 0; t < this.requireFail.length; ) {
                          if (!(this.requireFail[t].state & (32 | Lt)))
                              return !1;
                          t++
                      }
                      return !0
                  },
                  recognize: function(t) {
                      var e = m({}, t);
                      if (!_(this.options.enable, [this, e]))
                          return this.reset(),
                          void (this.state = 32);
                      this.state & (Dt | It | 32) && (this.state = Lt),
                      this.state = this.process(e),
                      this.state & (At | kt | Rt | It) && this.tryEmit(e)
                  },
                  process: function(t) {},
                  getTouchAction: function() {},
                  reset: function() {}
              },
              y(zt, Nt, {
                  defaults: {
                      pointers: 1
                  },
                  attrTest: function(t) {
                      var e = this.options.pointers;
                      return 0 === e || t.pointers.length === e
                  },
                  process: function(t) {
                      var e = this.state
                        , n = t.eventType
                        , r = e & (At | kt)
                        , i = this.attrTest(t);
                      return r && (n & z || !i) ? e | It : r || i ? n & j ? e | Rt : e & At ? e | kt : At : 32
                  }
              }),
              y(Ht, zt, {
                  defaults: {
                      event: "pan",
                      threshold: 10,
                      pointers: 1,
                      direction: U
                  },
                  getTouchAction: function() {
                      var t = this.options.direction
                        , e = [];
                      return t & Y && e.push(Pt),
                      t & X && e.push(Ct),
                      e
                  },
                  directionTest: function(t) {
                      var e = this.options
                        , n = !0
                        , r = t.distance
                        , i = t.direction
                        , o = t.deltaX
                        , s = t.deltaY;
                      return i & e.direction || (e.direction & Y ? (i = 0 === o ? H : o < 0 ? B : V,
                      n = o != this.pX,
                      r = Math.abs(t.deltaX)) : (i = 0 === s ? H : s < 0 ? q : W,
                      n = s != this.pY,
                      r = Math.abs(t.deltaY))),
                      t.direction = i,
                      n && r > e.threshold && i & e.direction
                  },
                  attrTest: function(t) {
                      return zt.prototype.attrTest.call(this, t) && (this.state & At || !(this.state & At) && this.directionTest(t))
                  },
                  emit: function(t) {
                      this.pX = t.deltaX,
                      this.pY = t.deltaY;
                      var e = Ft(t.direction);
                      e && this.manager.emit(this.options.event + e, t),
                      this._super.emit.call(this, t)
                  }
              }),
              y(Bt, zt, {
                  defaults: {
                      event: "pinch",
                      threshold: 0,
                      pointers: 2
                  },
                  getTouchAction: function() {
                      return [Tt]
                  },
                  attrTest: function(t) {
                      return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & At)
                  },
                  emit: function(t) {
                      if (this._super.emit.call(this, t),
                      1 !== t.scale) {
                          var e = t.scale < 1 ? "in" : "out";
                          this.manager.emit(this.options.event + e, t)
                      }
                  }
              }),
              y(Vt, Nt, {
                  defaults: {
                      event: "press",
                      pointers: 1,
                      time: 500,
                      threshold: 5
                  },
                  getTouchAction: function() {
                      return [Mt]
                  },
                  process: function(t) {
                      var e = this.options
                        , n = t.pointers.length === e.pointers
                        , r = t.distance < e.threshold
                        , i = t.deltaTime > e.time;
                      if (this._input = t,
                      !r || !n || t.eventType & (j | z) && !i)
                          this.reset();
                      else if (t.eventType & N)
                          this.reset(),
                          this._timer = p((function() {
                              this.state = Dt,
                              this.tryEmit()
                          }
                          ), e.time, this);
                      else if (t.eventType & j)
                          return Dt;
                      return 32
                  },
                  reset: function() {
                      clearTimeout(this._timer)
                  },
                  emit: function(t) {
                      this.state === Dt && (t && t.eventType & j ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = h(),
                      this.manager.emit(this.options.event, this._input)))
                  }
              }),
              y(qt, zt, {
                  defaults: {
                      event: "rotate",
                      threshold: 0,
                      pointers: 2
                  },
                  getTouchAction: function() {
                      return [Tt]
                  },
                  attrTest: function(t) {
                      return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & At)
                  }
              }),
              y(Wt, zt, {
                  defaults: {
                      event: "swipe",
                      threshold: 10,
                      velocity: .65,
                      direction: Y | X,
                      pointers: 1
                  },
                  getTouchAction: function() {
                      return Ht.prototype.getTouchAction.call(this)
                  },
                  attrTest: function(t) {
                      var e, n = this.options.direction;
                      return n & (Y | X) ? e = t.velocity : n & Y ? e = t.velocityX : n & X && (e = t.velocityY),
                      this._super.attrTest.call(this, t) && n & t.direction && t.distance > this.options.threshold && c(e) > this.options.velocity && t.eventType & j
                  },
                  emit: function(t) {
                      var e = Ft(t.direction);
                      e && this.manager.emit(this.options.event + e, t),
                      this.manager.emit(this.options.event, t)
                  }
              }),
              y(Yt, Nt, {
                  defaults: {
                      event: "tap",
                      pointers: 1,
                      taps: 1,
                      interval: 300,
                      time: 250,
                      threshold: 2,
                      posThreshold: 10
                  },
                  getTouchAction: function() {
                      return [St]
                  },
                  process: function(t) {
                      var e = this.options
                        , n = t.pointers.length === e.pointers
                        , r = t.distance < e.threshold
                        , i = t.deltaTime < e.time;
                      if (this.reset(),
                      t.eventType & N && 0 === this.count)
                          return this.failTimeout();
                      if (r && i && n) {
                          if (t.eventType != j)
                              return this.failTimeout();
                          var o = !this.pTime || t.timeStamp - this.pTime < e.interval
                            , s = !this.pCenter || et(this.pCenter, t.center) < e.posThreshold;
                          if (this.pTime = t.timeStamp,
                          this.pCenter = t.center,
                          s && o ? this.count += 1 : this.count = 1,
                          this._input = t,
                          0 === this.count % e.taps)
                              return this.hasRequireFailures() ? (this._timer = p((function() {
                                  this.state = Dt,
                                  this.tryEmit()
                              }
                              ), e.interval, this),
                              At) : Dt
                      }
                      return 32
                  },
                  failTimeout: function() {
                      return this._timer = p((function() {
                          this.state = 32
                      }
                      ), this.options.interval, this),
                      32
                  },
                  reset: function() {
                      clearTimeout(this._timer)
                  },
                  emit: function() {
                      this.state == Dt && (this._input.tapCount = this.count,
                      this.manager.emit(this.options.event, this._input))
                  }
              }),
              Xt.VERSION = "2.0.4",
              Xt.defaults = {
                  domEvents: !1,
                  touchAction: "compute",
                  enable: !0,
                  inputTarget: null,
                  inputClass: null,
                  preset: [[qt, {
                      enable: !1
                  }], [Bt, {
                      enable: !1
                  }, ["rotate"]], [Wt, {
                      direction: Y
                  }], [Ht, {
                      direction: Y
                  }, ["swipe"]], [Yt], [Yt, {
                      event: "doubletap",
                      taps: 2
                  }, ["tap"]], [Vt]],
                  cssProps: {
                      userSelect: "none",
                      touchSelect: "none",
                      touchCallout: "none",
                      contentZooming: "none",
                      userDrag: "none",
                      tapHighlightColor: "rgba(0,0,0,0)"
                  }
              };
              function Ut(t, e) {
                  var n;
                  e = e || {},
                  this.options = v(e, Xt.defaults),
                  this.options.inputTarget = this.options.inputTarget || t,
                  this.handlers = {},
                  this.session = {},
                  this.recognizers = [],
                  this.element = t,
                  this.input = new ((n = this).options.inputClass || (R ? ht : D ? _t : k ? wt : st))(n,Q),
                  this.touchAction = new Ot(this,this.options.touchAction),
                  Gt(this, !0),
                  d(e.recognizers, (function(t) {
                      var e = this.add(new t[0](t[1]));
                      t[2] && e.recognizeWith(t[2]),
                      t[3] && e.requireFailure(t[3])
                  }
                  ), this)
              }
              function Gt(t, e) {
                  var n = t.element;
                  d(t.options.cssProps, (function(t, r) {
                      n.style[O(n.style, r)] = e ? t : ""
                  }
                  ))
              }
              Ut.prototype = {
                  set: function(t) {
                      return m(this.options, t),
                      t.touchAction && this.touchAction.update(),
                      t.inputTarget && (this.input.destroy(),
                      this.input.target = t.inputTarget,
                      this.input.init()),
                      this
                  },
                  stop: function(t) {
                      this.session.stopped = t ? 2 : 1
                  },
                  recognize: function(t) {
                      var e = this.session;
                      if (!e.stopped) {
                          var n;
                          this.touchAction.preventDefaults(t);
                          var r = this.recognizers
                            , i = e.curRecognizer;
                          (!i || i && i.state & Dt) && (i = e.curRecognizer = null);
                          for (var o = 0; o < r.length; )
                              n = r[o],
                              2 === e.stopped || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(t),
                              !i && n.state & (At | kt | Rt) && (i = e.curRecognizer = n),
                              o++
                      }
                  },
                  get: function(t) {
                      if (t instanceof Nt)
                          return t;
                      for (var e = this.recognizers, n = 0; n < e.length; n++)
                          if (e[n].options.event == t)
                              return e[n];
                      return null
                  },
                  add: function(t) {
                      if (f(t, "add", this))
                          return this;
                      var e = this.get(t.options.event);
                      return e && this.remove(e),
                      this.recognizers.push(t),
                      t.manager = this,
                      this.touchAction.update(),
                      t
                  },
                  remove: function(t) {
                      if (f(t, "remove", this))
                          return this;
                      var e = this.recognizers;
                      return t = this.get(t),
                      e.splice(T(e, t), 1),
                      this.touchAction.update(),
                      this
                  },
                  on: function(t, e) {
                      var n = this.handlers;
                      return d(S(t), (function(t) {
                          n[t] = n[t] || [],
                          n[t].push(e)
                      }
                      )),
                      this
                  },
                  off: function(t, e) {
                      var n = this.handlers;
                      return d(S(t), (function(t) {
                          e ? n[t].splice(T(n[t], e), 1) : delete n[t]
                      }
                      )),
                      this
                  },
                  emit: function(t, e) {
                      this.options.domEvents && function(t, e) {
                          var n = r.createEvent("Event");
                          n.initEvent(t, !0, !0),
                          n.gesture = e,
                          e.target.dispatchEvent(n)
                      }(t, e);
                      var n = this.handlers[t] && this.handlers[t].slice();
                      if (n && n.length) {
                          e.type = t,
                          e.preventDefault = function() {
                              e.srcEvent.preventDefault()
                          }
                          ;
                          for (var i = 0; i < n.length; )
                              n[i](e),
                              i++
                      }
                  },
                  destroy: function() {
                      this.element && Gt(this, !1),
                      this.handlers = {},
                      this.session = {},
                      this.input.destroy(),
                      this.element = null
                  }
              },
              m(Xt, {
                  INPUT_START: N,
                  INPUT_MOVE: F,
                  INPUT_END: j,
                  INPUT_CANCEL: z,
                  STATE_POSSIBLE: Lt,
                  STATE_BEGAN: At,
                  STATE_CHANGED: kt,
                  STATE_ENDED: Rt,
                  STATE_RECOGNIZED: Dt,
                  STATE_CANCELLED: It,
                  STATE_FAILED: 32,
                  DIRECTION_NONE: H,
                  DIRECTION_LEFT: B,
                  DIRECTION_RIGHT: V,
                  DIRECTION_UP: q,
                  DIRECTION_DOWN: W,
                  DIRECTION_HORIZONTAL: Y,
                  DIRECTION_VERTICAL: X,
                  DIRECTION_ALL: U,
                  Manager: Ut,
                  Input: $,
                  TouchAction: Ot,
                  TouchInput: _t,
                  MouseInput: st,
                  PointerEventInput: ht,
                  TouchMouseInput: wt,
                  SingleTouchInput: mt,
                  Recognizer: Nt,
                  AttrRecognizer: zt,
                  Tap: Yt,
                  Pan: Ht,
                  Swipe: Wt,
                  Pinch: Bt,
                  Rotate: qt,
                  Press: Vt,
                  on: w,
                  off: x,
                  each: d,
                  merge: v,
                  extend: m,
                  inherit: y,
                  bindFn: g,
                  prefixed: O
              }),
              typeof t == u && t.amd ? t((function() {
                  return Xt
              }
              )) : void 0 !== n && n.exports ? n.exports = Xt : e.Hammer = Xt
          }(window, document)
      }
      , {}],
      16: [function(t, e, n) {
          /*! WeakMap shim
* (The MIT License)
*
* Copyright (c) 2012 Brandon Benvie <http://bbenvie.com>
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
* associated documentation files (the 'Software'), to deal in the Software without restriction,
* including without limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included with all copies or
* substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
* BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY  CLAIM,
* DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
          !function(t, r, i) {
              var o = Object.getOwnPropertyNames
                , s = Object.defineProperty
                , a = Function.prototype.toString
                , u = Object.create
                , l = Object.prototype.hasOwnProperty
                , c = /^\n?function\s?(\w*)?_?\(/;
              function h(t, e, n) {
                  return "function" == typeof e && (e = p(n = e).replace(/_$/, "")),
                  s(t, e, {
                      configurable: !0,
                      writable: !0,
                      value: n
                  })
              }
              function p(t) {
                  return "function" != typeof t ? "" : "_name"in t ? t._name : "name"in t ? t.name : a.call(t).match(c)[1]
              }
              function f(t, e) {
                  return e._name = t,
                  e
              }
              var d = function() {
                  var t = {
                      value: {
                          writable: !0,
                          value: i
                      }
                  }
                    , e = u(null)
                    , n = function() {
                      var t = Math.random().toString(36).slice(2);
                      return t in e ? n() : e[t] = t
                  }
                    , r = n()
                    , a = function(t) {
                      if (l.call(t, r))
                          return t[r];
                      if (!Object.isExtensible(t))
                          throw new TypeError("Object must be extensible");
                      var e = u(null);
                      return s(t, r, {
                          value: e
                      }),
                      e
                  };
                  function c() {
                      var e = n()
                        , r = {};
                      this.unlock = function(n) {
                          var i = a(n);
                          if (l.call(i, e))
                              return i[e](r);
                          var o = u(null, t);
                          return s(i, e, {
                              value: function(t) {
                                  if (t === r)
                                      return o
                              }
                          }),
                          o
                      }
                  }
                  return h(Object, f("getOwnPropertyNames", (function(t) {
                      var e = o(t);
                      return l.call(t, r) && e.splice(e.indexOf(r), 1),
                      e
                  }
                  ))),
                  h(c.prototype, f("get", (function(t) {
                      return this.unlock(t).value
                  }
                  ))),
                  h(c.prototype, f("set", (function(t, e) {
                      this.unlock(t).value = e
                  }
                  ))),
                  c
              }()
                , m = function(e) {
                  var n = function(t) {
                      if (null == t || "object" != typeof t && "function" != typeof t)
                          throw new TypeError("Invalid WeakMap key")
                  }
                    , o = function(t, n) {
                      var r = e.unlock(t);
                      if (r.value)
                          throw new TypeError("Object is already a WeakMap");
                      r.value = n
                  }
                    , s = function(t) {
                      var n = e.unlock(t).value;
                      if (!n)
                          throw new TypeError("WeakMap is not generic");
                      return n
                  }
                    , a = function(t, e) {
                      null !== e && "object" == typeof e && "function" == typeof e.forEach && e.forEach((function(n, r) {
                          n instanceof Array && 2 === n.length && c.call(t, e[r][0], e[r][1])
                      }
                      ))
                  };
                  function u(e) {
                      if (this === t || null == this || this === u.prototype)
                          return new u(e);
                      o(this, new d),
                      a(this, e)
                  }
                  function l(t) {
                      n(t);
                      var e = s(this).get(t);
                      return e === r ? i : e
                  }
                  function c(t, e) {
                      n(t),
                      s(this).set(t, e === i ? r : e)
                  }
                  function m(t) {
                      return n(t),
                      s(this).get(t) !== i
                  }
                  function v() {
                      return s(this),
                      "[object WeakMap]"
                  }
                  l._name = "get",
                  c._name = "set",
                  m._name = "has",
                  v._name = "toString";
                  var y = ("" + Object).split("Object")
                    , g = f("toString", (function() {
                      return y[0] + p(this) + y[1]
                  }
                  ));
                  h(g, g);
                  var _ = {
                      __proto__: []
                  }instanceof Array ? function(t) {
                      t.__proto__ = g
                  }
                  : function(t) {
                      h(t, g)
                  }
                  ;
                  return _(u),
                  [v, l, c, m, function(t) {
                      n(t);
                      var e = s(this)
                        , r = e.get(t) !== i;
                      return e.set(t, i),
                      r
                  }
                  ].forEach((function(t) {
                      h(u.prototype, t),
                      _(t)
                  }
                  )),
                  u
              }(new d)
                , v = Object.create ? function() {
                  return Object.create(null)
              }
              : function() {
                  return {}
              }
              ;
              function y(t) {
                  var e = new m;
                  return t || (t = v),
                  function(n, r) {
                      return r || 2 === arguments.length ? e.set(n, r) : (r = e.get(n)) === i && (r = t(n),
                      e.set(n, r)),
                      r
                  }
              }
              void 0 !== e ? e.exports = m : void 0 !== n ? n.WeakMap = m : "WeakMap"in t || (t.WeakMap = m),
              m.createStorage = y,
              t.WeakMap && (t.WeakMap.createStorage = y)
          }(function() {
              return this
          }())
      }
      , {}],
      17: [function(e, n, r) {
          /*!
* Knockout JavaScript library v3.3.0
* (c) Steven Sanderson - http://knockoutjs.com/
* License: MIT (http://www.opensource.org/licenses/mit-license.php)
*/
          var i;
          i = !0,
          function(o) {
              var s, a = this || (0,
              eval)("this"), u = a.document, l = a.navigator, c = a.jQuery, h = a.JSON;
              s = function(t, e) {
                  var n = void 0 !== t ? t : {};
                  n.exportSymbol = function(t, e) {
                      for (var r = t.split("."), i = n, o = 0; o < r.length - 1; o++)
                          i = i[r[o]];
                      i[r[r.length - 1]] = e
                  }
                  ,
                  n.exportProperty = function(t, e, n) {
                      t[e] = n
                  }
                  ,
                  n.version = "3.3.0",
                  n.exportSymbol("version", n.version),
                  n.utils = function() {
                      function t(t, e) {
                          for (var n in t)
                              t.hasOwnProperty(n) && e(n, t[n])
                      }
                      function e(t, e) {
                          if (e)
                              for (var n in e)
                                  e.hasOwnProperty(n) && (t[n] = e[n]);
                          return t
                      }
                      function r(t, e) {
                          return t.__proto__ = e,
                          t
                      }
                      var i = {
                          __proto__: []
                      }instanceof Array
                        , s = {}
                        , p = {};
                      s[l && /Firefox\/2/i.test(l.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"],
                      s.MouseEvents = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave"],
                      t(s, (function(t, e) {
                          if (e.length)
                              for (var n = 0, r = e.length; n < r; n++)
                                  p[e[n]] = t
                      }
                      ));
                      var f = {
                          propertychange: !0
                      }
                        , d = u && function() {
                          for (var t = 3, e = u.createElement("div"), n = e.getElementsByTagName("i"); e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e",
                          n[0]; )
                              ;
                          return t > 4 ? t : o
                      }()
                        , m = /\S+/g;
                      function v(t, e, r, i) {
                          var o = t[e].match(m) || [];
                          n.utils.arrayForEach(r.match(m), (function(t) {
                              n.utils.addOrRemoveItem(o, t, i)
                          }
                          )),
                          t[e] = o.join(" ")
                      }
                      return {
                          fieldsIncludedWithJsonPost: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                          arrayForEach: function(t, e) {
                              for (var n = 0, r = t.length; n < r; n++)
                                  e(t[n], n)
                          },
                          arrayIndexOf: function(t, e) {
                              if ("function" == typeof Array.prototype.indexOf)
                                  return Array.prototype.indexOf.call(t, e);
                              for (var n = 0, r = t.length; n < r; n++)
                                  if (t[n] === e)
                                      return n;
                              return -1
                          },
                          arrayFirst: function(t, e, n) {
                              for (var r = 0, i = t.length; r < i; r++)
                                  if (e.call(n, t[r], r))
                                      return t[r];
                              return null
                          },
                          arrayRemoveItem: function(t, e) {
                              var r = n.utils.arrayIndexOf(t, e);
                              r > 0 ? t.splice(r, 1) : 0 === r && t.shift()
                          },
                          arrayGetDistinctValues: function(t) {
                              for (var e = [], r = 0, i = (t = t || []).length; r < i; r++)
                                  n.utils.arrayIndexOf(e, t[r]) < 0 && e.push(t[r]);
                              return e
                          },
                          arrayMap: function(t, e) {
                              for (var n = [], r = 0, i = (t = t || []).length; r < i; r++)
                                  n.push(e(t[r], r));
                              return n
                          },
                          arrayFilter: function(t, e) {
                              for (var n = [], r = 0, i = (t = t || []).length; r < i; r++)
                                  e(t[r], r) && n.push(t[r]);
                              return n
                          },
                          arrayPushAll: function(t, e) {
                              if (e instanceof Array)
                                  t.push.apply(t, e);
                              else
                                  for (var n = 0, r = e.length; n < r; n++)
                                      t.push(e[n]);
                              return t
                          },
                          addOrRemoveItem: function(t, e, r) {
                              var i = n.utils.arrayIndexOf(n.utils.peekObservable(t), e);
                              i < 0 ? r && t.push(e) : r || t.splice(i, 1)
                          },
                          canSetPrototype: i,
                          extend: e,
                          setPrototypeOf: r,
                          setPrototypeOfOrExtend: i ? r : e,
                          objectForEach: t,
                          objectMap: function(t, e) {
                              if (!t)
                                  return t;
                              var n = {};
                              for (var r in t)
                                  t.hasOwnProperty(r) && (n[r] = e(t[r], r, t));
                              return n
                          },
                          emptyDomNode: function(t) {
                              for (; t.firstChild; )
                                  n.removeNode(t.firstChild)
                          },
                          moveCleanedNodesToContainerElement: function(t) {
                              for (var e = n.utils.makeArray(t), r = (e[0] && e[0].ownerDocument || u).createElement("div"), i = 0, o = e.length; i < o; i++)
                                  r.appendChild(n.cleanNode(e[i]));
                              return r
                          },
                          cloneNodes: function(t, e) {
                              for (var r = 0, i = t.length, o = []; r < i; r++) {
                                  var s = t[r].cloneNode(!0);
                                  o.push(e ? n.cleanNode(s) : s)
                              }
                              return o
                          },
                          setDomNodeChildren: function(t, e) {
                              if (n.utils.emptyDomNode(t),
                              e)
                                  for (var r = 0, i = e.length; r < i; r++)
                                      t.appendChild(e[r])
                          },
                          replaceDomNodes: function(t, e) {
                              var r = t.nodeType ? [t] : t;
                              if (r.length > 0) {
                                  for (var i = r[0], o = i.parentNode, s = 0, a = e.length; s < a; s++)
                                      o.insertBefore(e[s], i);
                                  for (s = 0,
                                  a = r.length; s < a; s++)
                                      n.removeNode(r[s])
                              }
                          },
                          fixUpContinuousNodeArray: function(t, e) {
                              if (t.length) {
                                  for (e = 8 === e.nodeType && e.parentNode || e; t.length && t[0].parentNode !== e; )
                                      t.splice(0, 1);
                                  if (t.length > 1) {
                                      var n = t[0]
                                        , r = t[t.length - 1];
                                      for (t.length = 0; n !== r; )
                                          if (t.push(n),
                                          !(n = n.nextSibling))
                                              return;
                                      t.push(r)
                                  }
                              }
                              return t
                          },
                          setOptionNodeSelectionState: function(t, e) {
                              d < 7 ? t.setAttribute("selected", e) : t.selected = e
                          },
                          stringTrim: function(t) {
                              return null === t || t === o ? "" : t.trim ? t.trim() : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                          },
                          stringStartsWith: function(t, e) {
                              return t = t || "",
                              !(e.length > t.length) && t.substring(0, e.length) === e
                          },
                          domNodeIsContainedBy: function(t, e) {
                              if (t === e)
                                  return !0;
                              if (11 === t.nodeType)
                                  return !1;
                              if (e.contains)
                                  return e.contains(3 === t.nodeType ? t.parentNode : t);
                              if (e.compareDocumentPosition)
                                  return 16 == (16 & e.compareDocumentPosition(t));
                              for (; t && t != e; )
                                  t = t.parentNode;
                              return !!t
                          },
                          domNodeIsAttachedToDocument: function(t) {
                              return n.utils.domNodeIsContainedBy(t, t.ownerDocument.documentElement)
                          },
                          anyDomNodeIsAttachedToDocument: function(t) {
                              return !!n.utils.arrayFirst(t, n.utils.domNodeIsAttachedToDocument)
                          },
                          tagNameLower: function(t) {
                              return t && t.tagName && t.tagName.toLowerCase()
                          },
                          registerEventHandler: function(t, e, r) {
                              var i = d && f[e];
                              if (!i && c)
                                  c(t).bind(e, r);
                              else if (i || "function" != typeof t.addEventListener) {
                                  if (void 0 === t.attachEvent)
                                      throw new Error("Browser doesn't support addEventListener or attachEvent");
                                  var o = function(e) {
                                      r.call(t, e)
                                  }
                                    , s = "on" + e;
                                  t.attachEvent(s, o),
                                  n.utils.domNodeDisposal.addDisposeCallback(t, (function() {
                                      t.detachEvent(s, o)
                                  }
                                  ))
                              } else
                                  t.addEventListener(e, r, !1)
                          },
                          triggerEvent: function(t, e) {
                              if (!t || !t.nodeType)
                                  throw new Error("element must be a DOM node when calling triggerEvent");
                              var r = function(t, e) {
                                  if ("input" !== n.utils.tagNameLower(t) || !t.type)
                                      return !1;
                                  if ("click" != e.toLowerCase())
                                      return !1;
                                  var r = t.type;
                                  return "checkbox" == r || "radio" == r
                              }(t, e);
                              if (c && !r)
                                  c(t).trigger(e);
                              else if ("function" == typeof u.createEvent) {
                                  if ("function" != typeof t.dispatchEvent)
                                      throw new Error("The supplied element doesn't support dispatchEvent");
                                  var i = p[e] || "HTMLEvents"
                                    , o = u.createEvent(i);
                                  o.initEvent(e, !0, !0, a, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, t),
                                  t.dispatchEvent(o)
                              } else if (r && t.click)
                                  t.click();
                              else {
                                  if (void 0 === t.fireEvent)
                                      throw new Error("Browser doesn't support triggering events");
                                  t.fireEvent("on" + e)
                              }
                          },
                          unwrapObservable: function(t) {
                              return n.isObservable(t) ? t() : t
                          },
                          peekObservable: function(t) {
                              return n.isObservable(t) ? t.peek() : t
                          },
                          toggleDomNodeCssClass: function(t, e, r) {
                              var i;
                              e && ("object" == typeof t.classList ? (i = t.classList[r ? "add" : "remove"],
                              n.utils.arrayForEach(e.match(m), (function(e) {
                                  i.call(t.classList, e)
                              }
                              ))) : "string" == typeof t.className.baseVal ? v(t.className, "baseVal", e, r) : v(t, "className", e, r))
                          },
                          setTextContent: function(t, e) {
                              var r = n.utils.unwrapObservable(e);
                              null !== r && r !== o || (r = "");
                              var i = n.virtualElements.firstChild(t);
                              !i || 3 != i.nodeType || n.virtualElements.nextSibling(i) ? n.virtualElements.setDomNodeChildren(t, [t.ownerDocument.createTextNode(r)]) : i.data = r,
                              n.utils.forceRefresh(t)
                          },
                          setElementName: function(t, e) {
                              if (t.name = e,
                              d <= 7)
                                  try {
                                      t.mergeAttributes(u.createElement("<input name='" + t.name + "'/>"), !1)
                                  } catch (t) {}
                          },
                          forceRefresh: function(t) {
                              if (d >= 9) {
                                  var e = 1 == t.nodeType ? t : t.parentNode;
                                  e.style && (e.style.zoom = e.style.zoom)
                              }
                          },
                          ensureSelectElementIsRenderedCorrectly: function(t) {
                              if (d) {
                                  var e = t.style.width;
                                  t.style.width = 0,
                                  t.style.width = e
                              }
                          },
                          range: function(t, e) {
                              t = n.utils.unwrapObservable(t),
                              e = n.utils.unwrapObservable(e);
                              for (var r = [], i = t; i <= e; i++)
                                  r.push(i);
                              return r
                          },
                          makeArray: function(t) {
                              for (var e = [], n = 0, r = t.length; n < r; n++)
                                  e.push(t[n]);
                              return e
                          },
                          isIe6: 6 === d,
                          isIe7: 7 === d,
                          ieVersion: d,
                          getFormFields: function(t, e) {
                              for (var r = n.utils.makeArray(t.getElementsByTagName("input")).concat(n.utils.makeArray(t.getElementsByTagName("textarea"))), i = "string" == typeof e ? function(t) {
                                  return t.name === e
                              }
                              : function(t) {
                                  return e.test(t.name)
                              }
                              , o = [], s = r.length - 1; s >= 0; s--)
                                  i(r[s]) && o.push(r[s]);
                              return o
                          },
                          parseJson: function(t) {
                              return "string" == typeof t && (t = n.utils.stringTrim(t)) ? h && h.parse ? h.parse(t) : new Function("return " + t)() : null
                          },
                          stringifyJson: function(t, e, r) {
                              if (!h || !h.stringify)
                                  throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                              return h.stringify(n.utils.unwrapObservable(t), e, r)
                          },
                          postJson: function(e, r, i) {
                              var o = (i = i || {}).params || {}
                                , s = i.includeFields || this.fieldsIncludedWithJsonPost
                                , a = e;
                              if ("object" == typeof e && "form" === n.utils.tagNameLower(e)) {
                                  var l = e;
                                  a = l.action;
                                  for (var c = s.length - 1; c >= 0; c--)
                                      for (var h = n.utils.getFormFields(l, s[c]), p = h.length - 1; p >= 0; p--)
                                          o[h[p].name] = h[p].value
                              }
                              r = n.utils.unwrapObservable(r);
                              var f = u.createElement("form");
                              for (var d in f.style.display = "none",
                              f.action = a,
                              f.method = "post",
                              r) {
                                  var m = u.createElement("input");
                                  m.type = "hidden",
                                  m.name = d,
                                  m.value = n.utils.stringifyJson(n.utils.unwrapObservable(r[d])),
                                  f.appendChild(m)
                              }
                              t(o, (function(t, e) {
                                  var n = u.createElement("input");
                                  n.type = "hidden",
                                  n.name = t,
                                  n.value = e,
                                  f.appendChild(n)
                              }
                              )),
                              u.body.appendChild(f),
                              i.submitter ? i.submitter(f) : f.submit(),
                              setTimeout((function() {
                                  f.parentNode.removeChild(f)
                              }
                              ), 0)
                          }
                      }
                  }(),
                  n.exportSymbol("utils", n.utils),
                  n.exportSymbol("utils.arrayForEach", n.utils.arrayForEach),
                  n.exportSymbol("utils.arrayFirst", n.utils.arrayFirst),
                  n.exportSymbol("utils.arrayFilter", n.utils.arrayFilter),
                  n.exportSymbol("utils.arrayGetDistinctValues", n.utils.arrayGetDistinctValues),
                  n.exportSymbol("utils.arrayIndexOf", n.utils.arrayIndexOf),
                  n.exportSymbol("utils.arrayMap", n.utils.arrayMap),
                  n.exportSymbol("utils.arrayPushAll", n.utils.arrayPushAll),
                  n.exportSymbol("utils.arrayRemoveItem", n.utils.arrayRemoveItem),
                  n.exportSymbol("utils.extend", n.utils.extend),
                  n.exportSymbol("utils.fieldsIncludedWithJsonPost", n.utils.fieldsIncludedWithJsonPost),
                  n.exportSymbol("utils.getFormFields", n.utils.getFormFields),
                  n.exportSymbol("utils.peekObservable", n.utils.peekObservable),
                  n.exportSymbol("utils.postJson", n.utils.postJson),
                  n.exportSymbol("utils.parseJson", n.utils.parseJson),
                  n.exportSymbol("utils.registerEventHandler", n.utils.registerEventHandler),
                  n.exportSymbol("utils.stringifyJson", n.utils.stringifyJson),
                  n.exportSymbol("utils.range", n.utils.range),
                  n.exportSymbol("utils.toggleDomNodeCssClass", n.utils.toggleDomNodeCssClass),
                  n.exportSymbol("utils.triggerEvent", n.utils.triggerEvent),
                  n.exportSymbol("utils.unwrapObservable", n.utils.unwrapObservable),
                  n.exportSymbol("utils.objectForEach", n.utils.objectForEach),
                  n.exportSymbol("utils.addOrRemoveItem", n.utils.addOrRemoveItem),
                  n.exportSymbol("utils.setTextContent", n.utils.setTextContent),
                  n.exportSymbol("unwrap", n.utils.unwrapObservable),
                  Function.prototype.bind || (Function.prototype.bind = function(t) {
                      var e = this;
                      if (1 === arguments.length)
                          return function() {
                              return e.apply(t, arguments)
                          }
                          ;
                      var n = Array.prototype.slice.call(arguments, 1);
                      return function() {
                          var r = n.slice(0);
                          return r.push.apply(r, arguments),
                          e.apply(t, r)
                      }
                  }
                  ),
                  n.utils.domData = new function() {
                      var t = 0
                        , e = "__ko__" + (new Date).getTime()
                        , n = {};
                      function r(r, i) {
                          var s = r[e];
                          if (!s || "null" === s || !n[s]) {
                              if (!i)
                                  return o;
                              s = r[e] = "ko" + t++,
                              n[s] = {}
                          }
                          return n[s]
                      }
                      return {
                          get: function(t, e) {
                              var n = r(t, !1);
                              return n === o ? o : n[e]
                          },
                          set: function(t, e, n) {
                              n === o && r(t, !1) === o || (r(t, !0)[e] = n)
                          },
                          clear: function(t) {
                              var r = t[e];
                              return !!r && (delete n[r],
                              t[e] = null,
                              !0)
                          },
                          nextKey: function() {
                              return t++ + e
                          }
                      }
                  }
                  ,
                  n.exportSymbol("utils.domData", n.utils.domData),
                  n.exportSymbol("utils.domData.clear", n.utils.domData.clear),
                  n.utils.domNodeDisposal = new function() {
                      var t = n.utils.domData.nextKey()
                        , e = {
                          1: !0,
                          8: !0,
                          9: !0
                      }
                        , r = {
                          1: !0,
                          9: !0
                      };
                      function i(e, r) {
                          var i = n.utils.domData.get(e, t);
                          return i === o && r && (i = [],
                          n.utils.domData.set(e, t, i)),
                          i
                      }
                      function s(t) {
                          var e = i(t, !1);
                          if (e) {
                              e = e.slice(0);
                              for (var o = 0; o < e.length; o++)
                                  e[o](t)
                          }
                          n.utils.domData.clear(t),
                          n.utils.domNodeDisposal.cleanExternalData(t),
                          r[t.nodeType] && function(t) {
                              for (var e, n = t.firstChild; e = n; )
                                  n = e.nextSibling,
                                  8 === e.nodeType && s(e)
                          }(t)
                      }
                      return {
                          addDisposeCallback: function(t, e) {
                              if ("function" != typeof e)
                                  throw new Error("Callback must be a function");
                              i(t, !0).push(e)
                          },
                          removeDisposeCallback: function(e, r) {
                              var s = i(e, !1);
                              s && (n.utils.arrayRemoveItem(s, r),
                              0 == s.length && function(e) {
                                  n.utils.domData.set(e, t, o)
                              }(e))
                          },
                          cleanNode: function(t) {
                              if (e[t.nodeType] && (s(t),
                              r[t.nodeType])) {
                                  var i = [];
                                  n.utils.arrayPushAll(i, t.getElementsByTagName("*"));
                                  for (var o = 0, a = i.length; o < a; o++)
                                      s(i[o])
                              }
                              return t
                          },
                          removeNode: function(t) {
                              n.cleanNode(t),
                              t.parentNode && t.parentNode.removeChild(t)
                          },
                          cleanExternalData: function(t) {
                              c && "function" == typeof c.cleanData && c.cleanData([t])
                          }
                      }
                  }
                  ,
                  n.cleanNode = n.utils.domNodeDisposal.cleanNode,
                  n.removeNode = n.utils.domNodeDisposal.removeNode,
                  n.exportSymbol("cleanNode", n.cleanNode),
                  n.exportSymbol("removeNode", n.removeNode),
                  n.exportSymbol("utils.domNodeDisposal", n.utils.domNodeDisposal),
                  n.exportSymbol("utils.domNodeDisposal.addDisposeCallback", n.utils.domNodeDisposal.addDisposeCallback),
                  n.exportSymbol("utils.domNodeDisposal.removeDisposeCallback", n.utils.domNodeDisposal.removeDisposeCallback),
                  n.utils.parseHtmlFragment = function(t, e) {
                      return c ? function(t, e) {
                          if (c.parseHTML)
                              return c.parseHTML(t, e) || [];
                          var n = c.clean([t], e);
                          if (n && n[0]) {
                              for (var r = n[0]; r.parentNode && 11 !== r.parentNode.nodeType; )
                                  r = r.parentNode;
                              r.parentNode && r.parentNode.removeChild(r)
                          }
                          return n
                      }(t, e) : function(t, e) {
                          e || (e = u);
                          var r = e.parentWindow || e.defaultView || a
                            , i = n.utils.stringTrim(t).toLowerCase()
                            , o = e.createElement("div")
                            , s = i.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !i.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!i.indexOf("<td") || !i.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""]
                            , l = "ignored<div>" + s[1] + t + s[2] + "</div>";
                          for ("function" == typeof r.innerShiv ? o.appendChild(r.innerShiv(l)) : o.innerHTML = l; s[0]--; )
                              o = o.lastChild;
                          return n.utils.makeArray(o.lastChild.childNodes)
                      }(t, e)
                  }
                  ,
                  n.utils.setHtml = function(t, e) {
                      if (n.utils.emptyDomNode(t),
                      null !== (e = n.utils.unwrapObservable(e)) && e !== o)
                          if ("string" != typeof e && (e = e.toString()),
                          c)
                              c(t).html(e);
                          else
                              for (var r = n.utils.parseHtmlFragment(e, t.ownerDocument), i = 0; i < r.length; i++)
                                  t.appendChild(r[i])
                  }
                  ,
                  n.exportSymbol("utils.parseHtmlFragment", n.utils.parseHtmlFragment),
                  n.exportSymbol("utils.setHtml", n.utils.setHtml),
                  n.memoization = function() {
                      var t = {};
                      function e() {
                          return (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1)
                      }
                      return {
                          memoize: function(n) {
                              if ("function" != typeof n)
                                  throw new Error("You can only pass a function to ko.memoization.memoize()");
                              var r = e() + e();
                              return t[r] = n,
                              "\x3c!--[ko_memo:" + r + "]--\x3e"
                          },
                          unmemoize: function(e, n) {
                              var r = t[e];
                              if (r === o)
                                  throw new Error("Couldn't find any memo with ID " + e + ". Perhaps it's already been unmemoized.");
                              try {
                                  return r.apply(null, n || []),
                                  !0
                              } finally {
                                  delete t[e]
                              }
                          },
                          unmemoizeDomNodeAndDescendants: function(t, e) {
                              var r = [];
                              !function t(e, r) {
                                  if (e)
                                      if (8 == e.nodeType) {
                                          var i = n.memoization.parseMemoText(e.nodeValue);
                                          null != i && r.push({
                                              domNode: e,
                                              memoId: i
                                          })
                                      } else if (1 == e.nodeType)
                                          for (var o = 0, s = e.childNodes, a = s.length; o < a; o++)
                                              t(s[o], r)
                              }(t, r);
                              for (var i = 0, o = r.length; i < o; i++) {
                                  var s = r[i].domNode
                                    , a = [s];
                                  e && n.utils.arrayPushAll(a, e),
                                  n.memoization.unmemoize(r[i].memoId, a),
                                  s.nodeValue = "",
                                  s.parentNode && s.parentNode.removeChild(s)
                              }
                          },
                          parseMemoText: function(t) {
                              var e = t.match(/^\[ko_memo\:(.*?)\]$/);
                              return e ? e[1] : null
                          }
                      }
                  }(),
                  n.exportSymbol("memoization", n.memoization),
                  n.exportSymbol("memoization.memoize", n.memoization.memoize),
                  n.exportSymbol("memoization.unmemoize", n.memoization.unmemoize),
                  n.exportSymbol("memoization.parseMemoText", n.memoization.parseMemoText),
                  n.exportSymbol("memoization.unmemoizeDomNodeAndDescendants", n.memoization.unmemoizeDomNodeAndDescendants),
                  n.extenders = {
                      throttle: function(t, e) {
                          t.throttleEvaluation = e;
                          var r = null;
                          return n.dependentObservable({
                              read: t,
                              write: function(n) {
                                  clearTimeout(r),
                                  r = setTimeout((function() {
                                      t(n)
                                  }
                                  ), e)
                              }
                          })
                      },
                      rateLimit: function(t, e) {
                          var n, r, i;
                          "number" == typeof e ? n = e : (n = e.timeout,
                          r = e.method),
                          i = "notifyWhenChangesStop" == r ? f : p,
                          t.limit((function(t) {
                              return i(t, n)
                          }
                          ))
                      },
                      notify: function(t, e) {
                          t.equalityComparer = "always" == e ? null : s
                      }
                  };
                  var r = {
                      undefined: 1,
                      boolean: 1,
                      number: 1,
                      string: 1
                  };
                  function s(t, e) {
                      return !!(null === t || typeof t in r) && t === e
                  }
                  function p(t, e) {
                      var n;
                      return function() {
                          n || (n = setTimeout((function() {
                              n = o,
                              t()
                          }
                          ), e))
                      }
                  }
                  function f(t, e) {
                      var n;
                      return function() {
                          clearTimeout(n),
                          n = setTimeout(t, e)
                      }
                  }
                  n.exportSymbol("extenders", n.extenders),
                  n.subscription = function(t, e, r) {
                      this._target = t,
                      this.callback = e,
                      this.disposeCallback = r,
                      this.isDisposed = !1,
                      n.exportProperty(this, "dispose", this.dispose)
                  }
                  ,
                  n.subscription.prototype.dispose = function() {
                      this.isDisposed = !0,
                      this.disposeCallback()
                  }
                  ,
                  n.subscribable = function() {
                      n.utils.setPrototypeOfOrExtend(this, n.subscribable.fn),
                      this._subscriptions = {},
                      this._versionNumber = 1
                  }
                  ;
                  var d = "change"
                    , m = {
                      subscribe: function(t, e, r) {
                          var i = this;
                          r = r || d;
                          var o = e ? t.bind(e) : t
                            , s = new n.subscription(i,o,(function() {
                              n.utils.arrayRemoveItem(i._subscriptions[r], s),
                              i.afterSubscriptionRemove && i.afterSubscriptionRemove(r)
                          }
                          ));
                          return i.beforeSubscriptionAdd && i.beforeSubscriptionAdd(r),
                          i._subscriptions[r] || (i._subscriptions[r] = []),
                          i._subscriptions[r].push(s),
                          s
                      },
                      notifySubscribers: function(t, e) {
                          if ((e = e || d) === d && this.updateVersion(),
                          this.hasSubscriptionsForEvent(e))
                              try {
                                  n.dependencyDetection.begin();
                                  for (var r, i = this._subscriptions[e].slice(0), o = 0; r = i[o]; ++o)
                                      r.isDisposed || r.callback(t)
                              } finally {
                                  n.dependencyDetection.end()
                              }
                      },
                      getVersion: function() {
                          return this._versionNumber
                      },
                      hasChanged: function(t) {
                          return this.getVersion() !== t
                      },
                      updateVersion: function() {
                          ++this._versionNumber
                      },
                      limit: function(t) {
                          var e, r, i, o = this, s = n.isObservable(o);
                          o._origNotifySubscribers || (o._origNotifySubscribers = o.notifySubscribers,
                          o.notifySubscribers = function(t, e) {
                              e && e !== d ? "beforeChange" === e ? o._rateLimitedBeforeChange(t) : o._origNotifySubscribers(t, e) : o._rateLimitedChange(t)
                          }
                          );
                          var a = t((function() {
                              s && i === o && (i = o()),
                              e = !1,
                              o.isDifferent(r, i) && o._origNotifySubscribers(r = i)
                          }
                          ));
                          o._rateLimitedChange = function(t) {
                              e = !0,
                              i = t,
                              a()
                          }
                          ,
                          o._rateLimitedBeforeChange = function(t) {
                              e || (r = t,
                              o._origNotifySubscribers(t, "beforeChange"))
                          }
                      },
                      hasSubscriptionsForEvent: function(t) {
                          return this._subscriptions[t] && this._subscriptions[t].length
                      },
                      getSubscriptionsCount: function(t) {
                          if (t)
                              return this._subscriptions[t] && this._subscriptions[t].length || 0;
                          var e = 0;
                          return n.utils.objectForEach(this._subscriptions, (function(t, n) {
                              e += n.length
                          }
                          )),
                          e
                      },
                      isDifferent: function(t, e) {
                          return !this.equalityComparer || !this.equalityComparer(t, e)
                      },
                      extend: function(t) {
                          var e = this;
                          return t && n.utils.objectForEach(t, (function(t, r) {
                              var i = n.extenders[t];
                              "function" == typeof i && (e = i(e, r) || e)
                          }
                          )),
                          e
                      }
                  };
                  n.exportProperty(m, "subscribe", m.subscribe),
                  n.exportProperty(m, "extend", m.extend),
                  n.exportProperty(m, "getSubscriptionsCount", m.getSubscriptionsCount),
                  n.utils.canSetPrototype && n.utils.setPrototypeOf(m, Function.prototype),
                  n.subscribable.fn = m,
                  n.isSubscribable = function(t) {
                      return null != t && "function" == typeof t.subscribe && "function" == typeof t.notifySubscribers
                  }
                  ,
                  n.exportSymbol("subscribable", n.subscribable),
                  n.exportSymbol("isSubscribable", n.isSubscribable),
                  n.computedContext = n.dependencyDetection = function() {
                      var t, e = [], r = 0;
                      function i(n) {
                          e.push(t),
                          t = n
                      }
                      function o() {
                          t = e.pop()
                      }
                      return {
                          begin: i,
                          end: o,
                          registerDependency: function(e) {
                              if (t) {
                                  if (!n.isSubscribable(e))
                                      throw new Error("Only subscribable things can act as dependencies");
                                  t.callback(e, e._id || (e._id = ++r))
                              }
                          },
                          ignore: function(t, e, n) {
                              try {
                                  return i(),
                                  t.apply(e, n || [])
                              } finally {
                                  o()
                              }
                          },
                          getDependenciesCount: function() {
                              if (t)
                                  return t.computed.getDependenciesCount()
                          },
                          isInitial: function() {
                              if (t)
                                  return t.isInitial
                          }
                      }
                  }(),
                  n.exportSymbol("computedContext", n.computedContext),
                  n.exportSymbol("computedContext.getDependenciesCount", n.computedContext.getDependenciesCount),
                  n.exportSymbol("computedContext.isInitial", n.computedContext.isInitial),
                  n.exportSymbol("computedContext.isSleeping", n.computedContext.isSleeping),
                  n.exportSymbol("ignoreDependencies", n.ignoreDependencies = n.dependencyDetection.ignore),
                  n.observable = function(t) {
                      var e = t;
                      function r() {
                          return arguments.length > 0 ? (r.isDifferent(e, arguments[0]) && (r.valueWillMutate(),
                          e = arguments[0],
                          i && (r._latestValue = e),
                          r.valueHasMutated()),
                          this) : (n.dependencyDetection.registerDependency(r),
                          e)
                      }
                      return n.subscribable.call(r),
                      n.utils.setPrototypeOfOrExtend(r, n.observable.fn),
                      i && (r._latestValue = e),
                      r.peek = function() {
                          return e
                      }
                      ,
                      r.valueHasMutated = function() {
                          r.notifySubscribers(e)
                      }
                      ,
                      r.valueWillMutate = function() {
                          r.notifySubscribers(e, "beforeChange")
                      }
                      ,
                      n.exportProperty(r, "peek", r.peek),
                      n.exportProperty(r, "valueHasMutated", r.valueHasMutated),
                      n.exportProperty(r, "valueWillMutate", r.valueWillMutate),
                      r
                  }
                  ,
                  n.observable.fn = {
                      equalityComparer: s
                  };
                  var v = n.observable.protoProperty = "__ko_proto__";
                  n.observable.fn[v] = n.observable,
                  n.utils.canSetPrototype && n.utils.setPrototypeOf(n.observable.fn, n.subscribable.fn),
                  n.hasPrototype = function(t, e) {
                      return null !== t && t !== o && t[v] !== o && (t[v] === e || n.hasPrototype(t[v], e))
                  }
                  ,
                  n.isObservable = function(t) {
                      return n.hasPrototype(t, n.observable)
                  }
                  ,
                  n.isWriteableObservable = function(t) {
                      return "function" == typeof t && t[v] === n.observable || !("function" != typeof t || t[v] !== n.dependentObservable || !t.hasWriteFunction)
                  }
                  ,
                  n.exportSymbol("observable", n.observable),
                  n.exportSymbol("isObservable", n.isObservable),
                  n.exportSymbol("isWriteableObservable", n.isWriteableObservable),
                  n.exportSymbol("isWritableObservable", n.isWriteableObservable),
                  n.observableArray = function(t) {
                      if ("object" != typeof (t = t || []) || !("length"in t))
                          throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                      var e = n.observable(t);
                      return n.utils.setPrototypeOfOrExtend(e, n.observableArray.fn),
                      e.extend({
                          trackArrayChanges: !0
                      })
                  }
                  ,
                  n.observableArray.fn = {
                      remove: function(t) {
                          for (var e = this.peek(), r = [], i = "function" != typeof t || n.isObservable(t) ? function(e) {
                              return e === t
                          }
                          : t, o = 0; o < e.length; o++) {
                              var s = e[o];
                              i(s) && (0 === r.length && this.valueWillMutate(),
                              r.push(s),
                              e.splice(o, 1),
                              o--)
                          }
                          return r.length && this.valueHasMutated(),
                          r
                      },
                      removeAll: function(t) {
                          if (t === o) {
                              var e = this.peek()
                                , r = e.slice(0);
                              return this.valueWillMutate(),
                              e.splice(0, e.length),
                              this.valueHasMutated(),
                              r
                          }
                          return t ? this.remove((function(e) {
                              return n.utils.arrayIndexOf(t, e) >= 0
                          }
                          )) : []
                      },
                      destroy: function(t) {
                          var e = this.peek()
                            , r = "function" != typeof t || n.isObservable(t) ? function(e) {
                              return e === t
                          }
                          : t;
                          this.valueWillMutate();
                          for (var i = e.length - 1; i >= 0; i--)
                              r(e[i]) && (e[i]._destroy = !0);
                          this.valueHasMutated()
                      },
                      destroyAll: function(t) {
                          return t === o ? this.destroy((function() {
                              return !0
                          }
                          )) : t ? this.destroy((function(e) {
                              return n.utils.arrayIndexOf(t, e) >= 0
                          }
                          )) : []
                      },
                      indexOf: function(t) {
                          var e = this();
                          return n.utils.arrayIndexOf(e, t)
                      },
                      replace: function(t, e) {
                          var n = this.indexOf(t);
                          n >= 0 && (this.valueWillMutate(),
                          this.peek()[n] = e,
                          this.valueHasMutated())
                      }
                  },
                  n.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function(t) {
                      n.observableArray.fn[t] = function() {
                          var e = this.peek();
                          this.valueWillMutate(),
                          this.cacheDiffForKnownOperation(e, t, arguments);
                          var n = e[t].apply(e, arguments);
                          return this.valueHasMutated(),
                          n
                      }
                  }
                  )),
                  n.utils.arrayForEach(["slice"], (function(t) {
                      n.observableArray.fn[t] = function() {
                          var e = this();
                          return e[t].apply(e, arguments)
                      }
                  }
                  )),
                  n.utils.canSetPrototype && n.utils.setPrototypeOf(n.observableArray.fn, n.observable.fn),
                  n.exportSymbol("observableArray", n.observableArray);
                  var y = "arrayChange";
                  n.extenders.trackArrayChanges = function(t) {
                      if (!t.cacheDiffForKnownOperation) {
                          var e, r = !1, i = null, o = 0, s = t.beforeSubscriptionAdd, a = t.afterSubscriptionRemove;
                          t.beforeSubscriptionAdd = function(a) {
                              s && s.call(t, a),
                              a === y && function() {
                                  if (!r) {
                                      r = !0;
                                      var s = t.notifySubscribers;
                                      t.notifySubscribers = function(t, e) {
                                          return e && e !== d || ++o,
                                          s.apply(this, arguments)
                                      }
                                      ;
                                      var a = [].concat(t.peek() || []);
                                      i = null,
                                      e = t.subscribe((function(e) {
                                          if (e = [].concat(e || []),
                                          t.hasSubscriptionsForEvent(y))
                                              var r = function(t, e) {
                                                  return (!i || o > 1) && (i = n.utils.compareArrays(t, e, {
                                                      sparse: !0
                                                  })),
                                                  i
                                              }(a, e);
                                          a = e,
                                          i = null,
                                          o = 0,
                                          r && r.length && t.notifySubscribers(r, y)
                                      }
                                      ))
                                  }
                              }()
                          }
                          ,
                          t.afterSubscriptionRemove = function(n) {
                              a && a.call(t, n),
                              n !== y || t.hasSubscriptionsForEvent(y) || (e.dispose(),
                              r = !1)
                          }
                          ,
                          t.cacheDiffForKnownOperation = function(t, e, s) {
                              if (r && !o) {
                                  var a = []
                                    , u = t.length
                                    , l = s.length
                                    , c = 0;
                                  switch (e) {
                                  case "push":
                                      c = u;
                                  case "unshift":
                                      for (var h = 0; h < l; h++)
                                          _("added", s[h], c + h);
                                      break;
                                  case "pop":
                                      c = u - 1;
                                  case "shift":
                                      u && _("deleted", t[c], c);
                                      break;
                                  case "splice":
                                      for (var p = Math.min(Math.max(0, s[0] < 0 ? u + s[0] : s[0]), u), f = 1 === l ? u : Math.min(p + (s[1] || 0), u), d = p + l - 2, m = Math.max(f, d), v = [], y = [], g = (h = p,
                                      2); h < m; ++h,
                                      ++g)
                                          h < f && y.push(_("deleted", t[h], h)),
                                          h < d && v.push(_("added", s[g], h));
                                      n.utils.findMovesInArrayComparison(y, v);
                                      break;
                                  default:
                                      return
                                  }
                                  i = a
                              }
                              function _(t, e, n) {
                                  return a[a.length] = {
                                      status: t,
                                      value: e,
                                      index: n
                                  }
                              }
                          }
                      }
                  }
                  ,
                  n.computed = n.dependentObservable = function(t, e, r) {
                      var s, a = !0, u = !1, l = !1, c = !1, h = t, p = !1, f = !1;
                      if (h && "object" == typeof h ? h = (r = h).read : (r = r || {},
                      h || (h = r.read)),
                      "function" != typeof h)
                          throw new Error("Pass a function that returns the value of the ko.computed");
                      function d(t, e, n) {
                          if (p && e === _)
                              throw Error("A 'pure' computed must not be called recursively");
                          P[t] = n,
                          n._order = O++,
                          n._version = e.getVersion()
                      }
                      function m() {
                          var t, e;
                          for (t in P)
                              if (P.hasOwnProperty(t) && (e = P[t])._target.hasChanged(e._version))
                                  return !0
                      }
                      function v() {
                          !f && P && n.utils.objectForEach(P, (function(t, e) {
                              e.dispose && e.dispose()
                          }
                          )),
                          P = null,
                          O = 0,
                          c = !0,
                          a = !1,
                          f = !1
                      }
                      function y() {
                          var t = _.throttleEvaluation;
                          t && t >= 0 ? (clearTimeout(L),
                          L = setTimeout((function() {
                              g(!0)
                          }
                          ), t)) : _._evalRateLimited ? _._evalRateLimited() : g(!0)
                      }
                      function g(t) {
                          if (!u && !c) {
                              if (T && T()) {
                                  if (!l)
                                      return void C()
                              } else
                                  l = !1;
                              u = !0;
                              try {
                                  var r = P
                                    , m = O
                                    , v = p ? o : !O;
                                  n.dependencyDetection.begin({
                                      callback: function(t, e) {
                                          c || (m && r[e] ? (d(e, t, r[e]),
                                          delete r[e],
                                          --m) : P[e] || d(e, t, f ? {
                                              _target: t
                                          } : t.subscribe(y)))
                                      },
                                      computed: _,
                                      isInitial: v
                                  }),
                                  P = {},
                                  O = 0;
                                  try {
                                      var g = e ? h.call(e) : h()
                                  } finally {
                                      n.dependencyDetection.end(),
                                      m && !f && n.utils.objectForEach(r, (function(t, e) {
                                          e.dispose && e.dispose()
                                      }
                                      )),
                                      a = !1
                                  }
                                  _.isDifferent(s, g) && (f || x(s, "beforeChange"),
                                  s = g,
                                  i && (_._latestValue = s),
                                  f ? _.updateVersion() : t && x(s)),
                                  v && x(s, "awake")
                              } finally {
                                  u = !1
                              }
                              O || C()
                          }
                      }
                      function _() {
                          if (arguments.length > 0) {
                              if ("function" != typeof E)
                                  throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                              return (E.apply(e, arguments),
                              this)
                          }
                          return n.dependencyDetection.registerDependency(_),
                          (a || f && m()) && g(),
                          s
                      }
                      function b() {
                          return (a && !O || f && m()) && g(),
                          s
                      }
                      function w() {
                          return a || O > 0
                      }
                      function x(t, e) {
                          _.notifySubscribers(t, e)
                      }
                      var E = r.write
                        , M = r.disposeWhenNodeIsRemoved || r.disposeWhenNodeIsRemoved || null
                        , S = r.disposeWhen || r.disposeWhen
                        , T = S
                        , C = v
                        , P = {}
                        , O = 0
                        , L = null;
                      e || (e = r.owner),
                      n.subscribable.call(_),
                      n.utils.setPrototypeOfOrExtend(_, n.dependentObservable.fn),
                      _.peek = b,
                      _.getDependenciesCount = function() {
                          return O
                      }
                      ,
                      _.hasWriteFunction = "function" == typeof E,
                      _.dispose = function() {
                          C()
                      }
                      ,
                      _.isActive = w;
                      var A = _.limit;
                      return _.limit = function(t) {
                          A.call(_, t),
                          _._evalRateLimited = function() {
                              _._rateLimitedBeforeChange(s),
                              a = !0,
                              _._rateLimitedChange(_)
                          }
                      }
                      ,
                      r.pure ? (p = !0,
                      f = !0,
                      _.beforeSubscriptionAdd = function(t) {
                          if (!c && f && "change" == t) {
                              if (f = !1,
                              a || m())
                                  P = null,
                                  O = 0,
                                  a = !0,
                                  g();
                              else {
                                  var e = [];
                                  n.utils.objectForEach(P, (function(t, n) {
                                      e[n._order] = t
                                  }
                                  )),
                                  n.utils.arrayForEach(e, (function(t, e) {
                                      var n = P[t]
                                        , r = n._target.subscribe(y);
                                      r._order = e,
                                      r._version = n._version,
                                      P[t] = r
                                  }
                                  ))
                              }
                              c || x(s, "awake")
                          }
                      }
                      ,
                      _.afterSubscriptionRemove = function(t) {
                          c || "change" != t || _.hasSubscriptionsForEvent("change") || (n.utils.objectForEach(P, (function(t, e) {
                              e.dispose && (P[t] = {
                                  _target: e._target,
                                  _order: e._order,
                                  _version: e._version
                              },
                              e.dispose())
                          }
                          )),
                          f = !0,
                          x(o, "asleep"))
                      }
                      ,
                      _._originalGetVersion = _.getVersion,
                      _.getVersion = function() {
                          return f && (a || m()) && g(),
                          _._originalGetVersion()
                      }
                      ) : r.deferEvaluation && (_.beforeSubscriptionAdd = function(t) {
                          "change" != t && "beforeChange" != t || b()
                      }
                      ),
                      n.exportProperty(_, "peek", _.peek),
                      n.exportProperty(_, "dispose", _.dispose),
                      n.exportProperty(_, "isActive", _.isActive),
                      n.exportProperty(_, "getDependenciesCount", _.getDependenciesCount),
                      M && (l = !0,
                      M.nodeType && (T = function() {
                          return !n.utils.domNodeIsAttachedToDocument(M) || S && S()
                      }
                      )),
                      f || r.deferEvaluation || g(),
                      M && w() && M.nodeType && (C = function() {
                          n.utils.domNodeDisposal.removeDisposeCallback(M, C),
                          v()
                      }
                      ,
                      n.utils.domNodeDisposal.addDisposeCallback(M, C)),
                      _
                  }
                  ,
                  n.isComputed = function(t) {
                      return n.hasPrototype(t, n.dependentObservable)
                  }
                  ;
                  var g, _ = n.observable.protoProperty;
                  n.dependentObservable[_] = n.observable,
                  n.dependentObservable.fn = {
                      equalityComparer: s
                  },
                  n.dependentObservable.fn[_] = n.dependentObservable,
                  n.utils.canSetPrototype && n.utils.setPrototypeOf(n.dependentObservable.fn, n.subscribable.fn),
                  n.exportSymbol("dependentObservable", n.dependentObservable),
                  n.exportSymbol("computed", n.dependentObservable),
                  n.exportSymbol("isComputed", n.isComputed),
                  n.pureComputed = function(t, e) {
                      return "function" == typeof t ? n.computed(t, e, {
                          pure: !0
                      }) : ((t = n.utils.extend({}, t)).pure = !0,
                      n.computed(t, e))
                  }
                  ,
                  n.exportSymbol("pureComputed", n.pureComputed),
                  function() {
                      function t(n, r, i) {
                          if (i = i || new e,
                          "object" != typeof (n = r(n)) || null === n || n === o || n instanceof Date || n instanceof String || n instanceof Number || n instanceof Boolean)
                              return n;
                          var s = n instanceof Array ? [] : {};
                          return i.save(n, s),
                          function(t, e) {
                              if (t instanceof Array) {
                                  for (var n = 0; n < t.length; n++)
                                      e(n);
                                  "function" == typeof t.toJSON && e("toJSON")
                              } else
                                  for (var r in t)
                                      e(r)
                          }(n, (function(e) {
                              var a = r(n[e]);
                              switch (typeof a) {
                              case "boolean":
                              case "number":
                              case "string":
                              case "function":
                                  s[e] = a;
                                  break;
                              case "object":
                              case "undefined":
                                  var u = i.get(a);
                                  s[e] = u !== o ? u : t(a, r, i)
                              }
                          }
                          )),
                          s
                      }
                      function e() {
                          this.keys = [],
                          this.values = []
                      }
                      n.toJS = function(e) {
                          if (0 == arguments.length)
                              throw new Error("When calling ko.toJS, pass the object you want to convert.");
                          return t(e, (function(t) {
                              for (var e = 0; n.isObservable(t) && e < 10; e++)
                                  t = t();
                              return t
                          }
                          ))
                      }
                      ,
                      n.toJSON = function(t, e, r) {
                          var i = n.toJS(t);
                          return n.utils.stringifyJson(i, e, r)
                      }
                      ,
                      e.prototype = {
                          constructor: e,
                          save: function(t, e) {
                              var r = n.utils.arrayIndexOf(this.keys, t);
                              r >= 0 ? this.values[r] = e : (this.keys.push(t),
                              this.values.push(e))
                          },
                          get: function(t) {
                              var e = n.utils.arrayIndexOf(this.keys, t);
                              return e >= 0 ? this.values[e] : o
                          }
                      }
                  }(),
                  n.exportSymbol("toJS", n.toJS),
                  n.exportSymbol("toJSON", n.toJSON),
                  n.selectExtensions = {
                      readValue: function(t) {
                          switch (n.utils.tagNameLower(t)) {
                          case "option":
                              return !0 === t.__ko__hasDomDataOptionValue__ ? n.utils.domData.get(t, n.bindingHandlers.options.optionValueDomDataKey) : n.utils.ieVersion <= 7 ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;
                          case "select":
                              return t.selectedIndex >= 0 ? n.selectExtensions.readValue(t.options[t.selectedIndex]) : o;
                          default:
                              return t.value
                          }
                      },
                      writeValue: function(t, e, r) {
                          switch (n.utils.tagNameLower(t)) {
                          case "option":
                              switch (typeof e) {
                              case "string":
                                  n.utils.domData.set(t, n.bindingHandlers.options.optionValueDomDataKey, o),
                                  "__ko__hasDomDataOptionValue__"in t && delete t.__ko__hasDomDataOptionValue__,
                                  t.value = e;
                                  break;
                              default:
                                  n.utils.domData.set(t, n.bindingHandlers.options.optionValueDomDataKey, e),
                                  t.__ko__hasDomDataOptionValue__ = !0,
                                  t.value = "number" == typeof e ? e : ""
                              }
                              break;
                          case "select":
                              "" !== e && null !== e || (e = o);
                              for (var i, s = -1, a = 0, u = t.options.length; a < u; ++a)
                                  if ((i = n.selectExtensions.readValue(t.options[a])) == e || "" == i && e === o) {
                                      s = a;
                                      break
                                  }
                              (r || s >= 0 || e === o && t.size > 1) && (t.selectedIndex = s);
                              break;
                          default:
                              null !== e && e !== o || (e = ""),
                              t.value = e
                          }
                      }
                  },
                  n.exportSymbol("selectExtensions", n.selectExtensions),
                  n.exportSymbol("selectExtensions.readValue", n.selectExtensions.readValue),
                  n.exportSymbol("selectExtensions.writeValue", n.selectExtensions.writeValue),
                  n.expressionRewriting = function() {
                      var t = ["true", "false", "null", "undefined"]
                        , e = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i
                        , r = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g")
                        , i = /[\])"'A-Za-z0-9_$]+$/
                        , o = {
                          in: 1,
                          return: 1,
                          typeof: 1
                      };
                      function s(t) {
                          var e = n.utils.stringTrim(t);
                          123 === e.charCodeAt(0) && (e = e.slice(1, -1));
                          var s, a = [], u = e.match(r), l = [], c = 0;
                          if (u) {
                              u.push(",");
                              for (var h, p = 0; h = u[p]; ++p) {
                                  var f = h.charCodeAt(0);
                                  if (44 === f) {
                                      if (c <= 0) {
                                          a.push(s && l.length ? {
                                              key: s,
                                              value: l.join("")
                                          } : {
                                              unknown: s || l.join("")
                                          }),
                                          s = c = 0,
                                          l = [];
                                          continue
                                      }
                                  } else if (58 === f) {
                                      if (!c && !s && 1 === l.length) {
                                          s = l.pop();
                                          continue
                                      }
                                  } else if (47 === f && p && h.length > 1) {
                                      var d = u[p - 1].match(i);
                                      d && !o[d[0]] && ((u = (e = e.substr(e.indexOf(h) + 1)).match(r)).push(","),
                                      p = -1,
                                      h = "/")
                                  } else
                                      40 === f || 123 === f || 91 === f ? ++c : 41 === f || 125 === f || 93 === f ? --c : s || l.length || 34 !== f && 39 !== f || (h = h.slice(1, -1));
                                  l.push(h)
                              }
                          }
                          return a
                      }
                      var a = {};
                      return {
                          bindingRewriteValidators: [],
                          twoWayBindings: a,
                          parseObjectLiteral: s,
                          preProcessBindings: function(r, i) {
                              function o(r, i) {
                                  var s, p;
                                  if (!h) {
                                      if ((p = n.getBindingHandler(r)) && p.preprocess && !(i = p.preprocess(i, r, o)))
                                          return;
                                      a[r] && (s = function(r) {
                                          if (n.utils.arrayIndexOf(t, r) >= 0)
                                              return !1;
                                          var i = r.match(e);
                                          return null !== i && (i[1] ? "Object(" + i[1] + ")" + i[2] : r)
                                      }(i)) && l.push("'" + r + "':function(_z){" + s + "=_z}")
                                  }
                                  c && (i = "function(){return " + i + " }"),
                                  u.push("'" + r + "':" + i)
                              }
                              var u = []
                                , l = []
                                , c = (i = i || {}).valueAccessors
                                , h = i.bindingParams
                                , p = "string" == typeof r ? s(r) : r;
                              return n.utils.arrayForEach(p, (function(t) {
                                  o(t.key || t.unknown, t.value)
                              }
                              )),
                              l.length && o("_ko_property_writers", "{" + l.join(",") + " }"),
                              u.join(",")
                          },
                          keyValueArrayContainsKey: function(t, e) {
                              for (var n = 0; n < t.length; n++)
                                  if (t[n].key == e)
                                      return !0;
                              return !1
                          },
                          writeValueToProperty: function(t, e, r, i, o) {
                              if (t && n.isObservable(t))
                                  !n.isWriteableObservable(t) || o && t.peek() === i || t(i);
                              else {
                                  var s = e.get("_ko_property_writers");
                                  s && s[r] && s[r](i)
                              }
                          }
                      }
                  }(),
                  n.exportSymbol("expressionRewriting", n.expressionRewriting),
                  n.exportSymbol("expressionRewriting.bindingRewriteValidators", n.expressionRewriting.bindingRewriteValidators),
                  n.exportSymbol("expressionRewriting.parseObjectLiteral", n.expressionRewriting.parseObjectLiteral),
                  n.exportSymbol("expressionRewriting.preProcessBindings", n.expressionRewriting.preProcessBindings),
                  n.exportSymbol("expressionRewriting._twoWayBindings", n.expressionRewriting.twoWayBindings),
                  n.exportSymbol("jsonExpressionRewriting", n.expressionRewriting),
                  n.exportSymbol("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", n.expressionRewriting.preProcessBindings),
                  function() {
                      var t = u && "\x3c!--test--\x3e" === u.createComment("test").text
                        , e = t ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/
                        , r = t ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/
                        , i = {
                          ul: !0,
                          ol: !0
                      };
                      function o(n) {
                          return 8 == n.nodeType && e.test(t ? n.text : n.nodeValue)
                      }
                      function s(e) {
                          return 8 == e.nodeType && r.test(t ? e.text : e.nodeValue)
                      }
                      function a(t, e) {
                          for (var n = t, r = 1, i = []; n = n.nextSibling; ) {
                              if (s(n) && 0 == --r)
                                  return i;
                              i.push(n),
                              o(n) && r++
                          }
                          if (!e)
                              throw new Error("Cannot find closing comment tag to match: " + t.nodeValue);
                          return null
                      }
                      function l(t, e) {
                          var n = a(t, e);
                          return n ? n.length > 0 ? n[n.length - 1].nextSibling : t.nextSibling : null
                      }
                      function c(t) {
                          var e = t.firstChild
                            , n = null;
                          if (e)
                              do {
                                  if (n)
                                      n.push(e);
                                  else if (o(e)) {
                                      var r = l(e, !0);
                                      r ? e = r : n = [e]
                                  } else
                                      s(e) && (n = [e])
                              } while (e = e.nextSibling);
                          return n
                      }
                      n.virtualElements = {
                          allowedBindings: {},
                          childNodes: function(t) {
                              return o(t) ? a(t) : t.childNodes
                          },
                          emptyNode: function(t) {
                              if (o(t))
                                  for (var e = n.virtualElements.childNodes(t), r = 0, i = e.length; r < i; r++)
                                      n.removeNode(e[r]);
                              else
                                  n.utils.emptyDomNode(t)
                          },
                          setDomNodeChildren: function(t, e) {
                              if (o(t)) {
                                  n.virtualElements.emptyNode(t);
                                  for (var r = t.nextSibling, i = 0, s = e.length; i < s; i++)
                                      r.parentNode.insertBefore(e[i], r)
                              } else
                                  n.utils.setDomNodeChildren(t, e)
                          },
                          prepend: function(t, e) {
                              o(t) ? t.parentNode.insertBefore(e, t.nextSibling) : t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
                          },
                          insertAfter: function(t, e, r) {
                              r ? o(t) ? t.parentNode.insertBefore(e, r.nextSibling) : r.nextSibling ? t.insertBefore(e, r.nextSibling) : t.appendChild(e) : n.virtualElements.prepend(t, e)
                          },
                          firstChild: function(t) {
                              return o(t) ? !t.nextSibling || s(t.nextSibling) ? null : t.nextSibling : t.firstChild
                          },
                          nextSibling: function(t) {
                              return o(t) && (t = l(t)),
                              t.nextSibling && s(t.nextSibling) ? null : t.nextSibling
                          },
                          hasBindingValue: o,
                          virtualNodeBindingValue: function(n) {
                              var r = (t ? n.text : n.nodeValue).match(e);
                              return r ? r[1] : null
                          },
                          normaliseVirtualElementDomStructure: function(t) {
                              if (i[n.utils.tagNameLower(t)]) {
                                  var e = t.firstChild;
                                  if (e)
                                      do {
                                          if (1 === e.nodeType) {
                                              var r = c(e);
                                              if (r)
                                                  for (var o = e.nextSibling, s = 0; s < r.length; s++)
                                                      o ? t.insertBefore(r[s], o) : t.appendChild(r[s])
                                          }
                                      } while (e = e.nextSibling)
                              }
                          }
                      }
                  }(),
                  n.exportSymbol("virtualElements", n.virtualElements),
                  n.exportSymbol("virtualElements.allowedBindings", n.virtualElements.allowedBindings),
                  n.exportSymbol("virtualElements.emptyNode", n.virtualElements.emptyNode),
                  n.exportSymbol("virtualElements.insertAfter", n.virtualElements.insertAfter),
                  n.exportSymbol("virtualElements.prepend", n.virtualElements.prepend),
                  n.exportSymbol("virtualElements.setDomNodeChildren", n.virtualElements.setDomNodeChildren),
                  n.bindingProvider = function() {
                      this.bindingCache = {}
                  }
                  ,
                  n.utils.extend(n.bindingProvider.prototype, {
                      nodeHasBindings: function(t) {
                          switch (t.nodeType) {
                          case 1:
                              return null != t.getAttribute("data-bind") || n.components.getComponentNameForNode(t);
                          case 8:
                              return n.virtualElements.hasBindingValue(t);
                          default:
                              return !1
                          }
                      },
                      getBindings: function(t, e) {
                          var r = this.getBindingsString(t, e)
                            , i = r ? this.parseBindingsString(r, e, t) : null;
                          return n.components.addBindingsForCustomElement(i, t, e, !1)
                      },
                      getBindingAccessors: function(t, e) {
                          var r = this.getBindingsString(t, e)
                            , i = r ? this.parseBindingsString(r, e, t, {
                              valueAccessors: !0
                          }) : null;
                          return n.components.addBindingsForCustomElement(i, t, e, !0)
                      },
                      getBindingsString: function(t, e) {
                          switch (t.nodeType) {
                          case 1:
                              return t.getAttribute("data-bind");
                          case 8:
                              return n.virtualElements.virtualNodeBindingValue(t);
                          default:
                              return null
                          }
                      },
                      parseBindingsString: function(t, e, r, i) {
                          try {
                              return function(t, e, r) {
                                  var i = t + (r && r.valueAccessors || "");
                                  return e[i] || (e[i] = function(t, e) {
                                      var r = n.expressionRewriting.preProcessBindings(t, e);
                                      return new Function("$context","$element","with($context){with($data||{}){return{" + r + "}}}")
                                  }(t, r))
                              }(t, this.bindingCache, i)(e, r)
                          } catch (e) {
                              throw e.message = "Unable to parse bindings.\nBindings value: " + t + "\nMessage: " + e.message,
                              e
                          }
                      }
                  }),
                  n.bindingProvider.instance = new n.bindingProvider,
                  n.exportSymbol("bindingProvider", n.bindingProvider),
                  function() {
                      n.bindingHandlers = {};
                      var t = {
                          script: !0,
                          textarea: !0
                      };
                      function e(t) {
                          return function() {
                              return t
                          }
                      }
                      function r(t) {
                          return t()
                      }
                      function i(t) {
                          return n.utils.objectMap(n.dependencyDetection.ignore(t), (function(e, n) {
                              return function() {
                                  return t()[n]
                              }
                          }
                          ))
                      }
                      function s(t, e) {
                          return i(this.getBindings.bind(this, t, e))
                      }
                      function u(t, e, r) {
                          var i, o = n.virtualElements.firstChild(e), s = n.bindingProvider.instance, a = s.preprocessNode;
                          if (a) {
                              for (; i = o; )
                                  o = n.virtualElements.nextSibling(i),
                                  a.call(s, i);
                              o = n.virtualElements.firstChild(e)
                          }
                          for (; i = o; )
                              o = n.virtualElements.nextSibling(i),
                              l(t, i, r)
                      }
                      function l(e, r, i) {
                          var o = !0
                            , s = 1 === r.nodeType;
                          s && n.virtualElements.normaliseVirtualElementDomStructure(r),
                          (s && i || n.bindingProvider.instance.nodeHasBindings(r)) && (o = p(r, null, e, i).shouldBindDescendants),
                          o && !t[n.utils.tagNameLower(r)] && u(e, r, !s)
                      }
                      n.getBindingHandler = function(t) {
                          return n.bindingHandlers[t]
                      }
                      ,
                      n.bindingContext = function(t, e, r, i) {
                          var s, a = this, u = "function" == typeof t && !n.isObservable(t), l = n.dependentObservable((function() {
                              var o = u ? t() : t
                                , s = n.utils.unwrapObservable(o);
                              return e ? (e._subscribable && e._subscribable(),
                              n.utils.extend(a, e),
                              l && (a._subscribable = l)) : (a.$parents = [],
                              a.$root = s,
                              a.ko = n),
                              a.$rawData = o,
                              a.$data = s,
                              r && (a[r] = s),
                              i && i(a, e, s),
                              a.$data
                          }
                          ), null, {
                              disposeWhen: function() {
                                  return s && !n.utils.anyDomNodeIsAttachedToDocument(s)
                              },
                              disposeWhenNodeIsRemoved: !0
                          });
                          l.isActive() && (a._subscribable = l,
                          l.equalityComparer = null,
                          s = [],
                          l._addNode = function(t) {
                              s.push(t),
                              n.utils.domNodeDisposal.addDisposeCallback(t, (function(t) {
                                  n.utils.arrayRemoveItem(s, t),
                                  s.length || (l.dispose(),
                                  a._subscribable = l = o)
                              }
                              ))
                          }
                          )
                      }
                      ,
                      n.bindingContext.prototype.createChildContext = function(t, e, r) {
                          return new n.bindingContext(t,this,e,(function(t, e) {
                              t.$parentContext = e,
                              t.$parent = e.$data,
                              t.$parents = (e.$parents || []).slice(0),
                              t.$parents.unshift(t.$parent),
                              r && r(t)
                          }
                          ))
                      }
                      ,
                      n.bindingContext.prototype.extend = function(t) {
                          return new n.bindingContext(this._subscribable || this.$data,this,null,(function(e, r) {
                              e.$rawData = r.$rawData,
                              n.utils.extend(e, "function" == typeof t ? t() : t)
                          }
                          ))
                      }
                      ;
                      var h = n.utils.domData.nextKey();
                      function p(t, e, i, a) {
                          var u, l, c = n.utils.domData.get(t, h);
                          if (!e) {
                              if (c)
                                  throw Error("You cannot apply bindings multiple times to the same element.");
                              n.utils.domData.set(t, h, !0)
                          }
                          if (!c && a && n.storedBindingContextForNode(t, i),
                          e && "function" != typeof e)
                              u = e;
                          else {
                              var p = n.bindingProvider.instance
                                , f = p.getBindingAccessors || s
                                , d = n.dependentObservable((function() {
                                  return (u = e ? e(i, t) : f.call(p, t, i)) && i._subscribable && i._subscribable(),
                                  u
                              }
                              ), null, {
                                  disposeWhenNodeIsRemoved: t
                              });
                              u && d.isActive() || (d = null)
                          }
                          if (u) {
                              var m = d ? function(t) {
                                  return function() {
                                      return r(d()[t])
                                  }
                              }
                              : function(t) {
                                  return u[t]
                              }
                              ;
                              function v() {
                                  return n.utils.objectMap(d ? d() : u, r)
                              }
                              v.get = function(t) {
                                  return u[t] && r(m(t))
                              }
                              ,
                              v.has = function(t) {
                                  return t in u
                              }
                              ;
                              var y = function(t) {
                                  var e = []
                                    , r = {}
                                    , i = [];
                                  return n.utils.objectForEach(t, (function o(s) {
                                      if (!r[s]) {
                                          var a = n.getBindingHandler(s);
                                          a && (a.after && (i.push(s),
                                          n.utils.arrayForEach(a.after, (function(e) {
                                              if (t[e]) {
                                                  if (-1 !== n.utils.arrayIndexOf(i, e))
                                                      throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + i.join(", "));
                                                  o(e)
                                              }
                                          }
                                          )),
                                          i.length--),
                                          e.push({
                                              key: s,
                                              handler: a
                                          })),
                                          r[s] = !0
                                      }
                                  }
                                  )),
                                  e
                              }(u);
                              n.utils.arrayForEach(y, (function(e) {
                                  var r = e.handler.init
                                    , s = e.handler.update
                                    , a = e.key;
                                  8 === t.nodeType && function(t) {
                                      if (!n.virtualElements.allowedBindings[t])
                                          throw new Error("The binding '" + t + "' cannot be used with virtual elements")
                                  }(a);
                                  try {
                                      "function" == typeof r && n.dependencyDetection.ignore((function() {
                                          var e = r(t, m(a), v, i.$data, i);
                                          if (e && e.controlsDescendantBindings) {
                                              if (l !== o)
                                                  throw new Error("Multiple bindings (" + l + " and " + a + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                              l = a
                                          }
                                      }
                                      )),
                                      "function" == typeof s && n.dependentObservable((function() {
                                          s(t, m(a), v, i.$data, i)
                                      }
                                      ), null, {
                                          disposeWhenNodeIsRemoved: t
                                      })
                                  } catch (t) {
                                      throw t.message = 'Unable to process binding "' + a + ": " + u[a] + '"\nMessage: ' + t.message,
                                      t
                                  }
                              }
                              ))
                          }
                          return {
                              shouldBindDescendants: l === o
                          }
                      }
                      var f = n.utils.domData.nextKey();
                      function d(t) {
                          return t && t instanceof n.bindingContext ? t : new n.bindingContext(t)
                      }
                      n.storedBindingContextForNode = function(t, e) {
                          if (2 != arguments.length)
                              return n.utils.domData.get(t, f);
                          n.utils.domData.set(t, f, e),
                          e._subscribable && e._subscribable._addNode(t)
                      }
                      ,
                      n.applyBindingAccessorsToNode = function(t, e, r) {
                          return 1 === t.nodeType && n.virtualElements.normaliseVirtualElementDomStructure(t),
                          p(t, e, d(r), !0)
                      }
                      ,
                      n.applyBindingsToNode = function(t, r, o) {
                          var s = d(o);
                          return n.applyBindingAccessorsToNode(t, function(t, r, o) {
                              return "function" == typeof t ? i(t.bind(null, r, o)) : n.utils.objectMap(t, e)
                          }(r, s, t), s)
                      }
                      ,
                      n.applyBindingsToDescendants = function(t, e) {
                          1 !== e.nodeType && 8 !== e.nodeType || u(d(t), e, !0)
                      }
                      ,
                      n.applyBindings = function(t, e) {
                          if (!c && a.jQuery && (c = a.jQuery),
                          e && 1 !== e.nodeType && 8 !== e.nodeType)
                              throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                          e = e || a.document.body,
                          l(d(t), e, !0)
                      }
                      ,
                      n.contextFor = function(t) {
                          switch (t.nodeType) {
                          case 1:
                          case 8:
                              var e = n.storedBindingContextForNode(t);
                              if (e)
                                  return e;
                              if (t.parentNode)
                                  return n.contextFor(t.parentNode)
                          }
                          return o
                      }
                      ,
                      n.dataFor = function(t) {
                          var e = n.contextFor(t);
                          return e ? e.$data : o
                      }
                      ,
                      n.exportSymbol("bindingHandlers", n.bindingHandlers),
                      n.exportSymbol("applyBindings", n.applyBindings),
                      n.exportSymbol("applyBindingsToDescendants", n.applyBindingsToDescendants),
                      n.exportSymbol("applyBindingAccessorsToNode", n.applyBindingAccessorsToNode),
                      n.exportSymbol("applyBindingsToNode", n.applyBindingsToNode),
                      n.exportSymbol("contextFor", n.contextFor),
                      n.exportSymbol("dataFor", n.dataFor)
                  }(),
                  function(t) {
                      var e = {}
                        , r = {};
                      function i(e, n) {
                          return e.hasOwnProperty(n) ? e[n] : t
                      }
                      function o(e, r, i, s) {
                          s || (s = n.components.loaders.slice(0));
                          var a = s.shift();
                          if (a) {
                              var u = a[e];
                              if (u) {
                                  var l = !1;
                                  if (u.apply(a, r.concat((function(t) {
                                      l ? i(null) : null !== t ? i(t) : o(e, r, i, s)
                                  }
                                  ))) !== t && (l = !0,
                                  !a.suppressLoaderExceptions))
                                      throw new Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
                              } else
                                  o(e, r, i, s)
                          } else
                              i(null)
                      }
                      n.components = {
                          get: function(t, s) {
                              var a = i(r, t);
                              a ? a.isSynchronousComponent ? n.dependencyDetection.ignore((function() {
                                  s(a.definition)
                              }
                              )) : setTimeout((function() {
                                  s(a.definition)
                              }
                              ), 0) : function(t, s) {
                                  var a, u = i(e, t);
                                  u ? u.subscribe(s) : ((u = e[t] = new n.subscribable).subscribe(s),
                                  function(t, e) {
                                      o("getConfig", [t], (function(n) {
                                          n ? o("loadComponent", [t, n], (function(t) {
                                              e(t, n)
                                          }
                                          )) : e(null, null)
                                      }
                                      ))
                                  }(t, (function(n, i) {
                                      var o = !(!i || !i.synchronous);
                                      r[t] = {
                                          definition: n,
                                          isSynchronousComponent: o
                                      },
                                      delete e[t],
                                      a || o ? u.notifySubscribers(n) : setTimeout((function() {
                                          u.notifySubscribers(n)
                                      }
                                      ), 0)
                                  }
                                  )),
                                  a = !0)
                              }(t, s)
                          },
                          clearCachedDefinition: function(t) {
                              delete r[t]
                          },
                          _getFirstResultFromLoaders: o
                      },
                      n.components.loaders = [],
                      n.exportSymbol("components", n.components),
                      n.exportSymbol("components.get", n.components.get),
                      n.exportSymbol("components.clearCachedDefinition", n.components.clearCachedDefinition)
                  }(),
                  function(t) {
                      var r = {};
                      n.components.register = function(t, e) {
                          if (!e)
                              throw new Error("Invalid configuration for " + t);
                          if (n.components.isRegistered(t))
                              throw new Error("Component " + t + " is already registered");
                          r[t] = e
                      }
                      ,
                      n.components.isRegistered = function(t) {
                          return t in r
                      }
                      ,
                      n.components.unregister = function(t) {
                          delete r[t],
                          n.components.clearCachedDefinition(t)
                      }
                      ,
                      n.components.defaultLoader = {
                          getConfig: function(t, e) {
                              e(r.hasOwnProperty(t) ? r[t] : null)
                          },
                          loadComponent: function(t, e, r) {
                              var o = c(t);
                              l(o, e, (function(e) {
                                  !function(t, e, r, o) {
                                      var s = {}
                                        , a = 2
                                        , u = function() {
                                          0 == --a && o(s)
                                      }
                                        , c = r.template
                                        , h = r.viewModel;
                                      c ? l(e, c, (function(e) {
                                          n.components._getFirstResultFromLoaders("loadTemplate", [t, e], (function(t) {
                                              s.template = t,
                                              u()
                                          }
                                          ))
                                      }
                                      )) : u(),
                                      h ? l(e, h, (function(e) {
                                          n.components._getFirstResultFromLoaders("loadViewModel", [t, e], (function(t) {
                                              s[i] = t,
                                              u()
                                          }
                                          ))
                                      }
                                      )) : u()
                                  }(t, o, e, r)
                              }
                              ))
                          },
                          loadTemplate: function(t, e, r) {
                              !function(t, e, r) {
                                  if ("string" == typeof e)
                                      r(n.utils.parseHtmlFragment(e));
                                  else if (e instanceof Array)
                                      r(e);
                                  else if (s(e))
                                      r(n.utils.makeArray(e.childNodes));
                                  else if (e.element) {
                                      var i = e.element;
                                      if (c = i,
                                      a.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType)
                                          r(o(i));
                                      else if ("string" == typeof i) {
                                          var l = u.getElementById(i);
                                          l ? r(o(l)) : t("Cannot find element with ID " + i)
                                      } else
                                          t("Unknown element type: " + i)
                                  } else
                                      t("Unknown template value: " + e);
                                  var c
                              }(c(t), e, r)
                          },
                          loadViewModel: function(t, e, n) {
                              !function t(e, n, r) {
                                  if ("function" == typeof n)
                                      r((function(t) {
                                          return new n(t)
                                      }
                                      ));
                                  else if ("function" == typeof n[i])
                                      r(n[i]);
                                  else if ("instance"in n) {
                                      var o = n.instance;
                                      r((function(t, e) {
                                          return o
                                      }
                                      ))
                                  } else
                                      "viewModel"in n ? t(e, n.viewModel, r) : e("Unknown viewModel value: " + n)
                              }(c(t), e, n)
                          }
                      };
                      var i = "createViewModel";
                      function o(t) {
                          switch (n.utils.tagNameLower(t)) {
                          case "script":
                              return n.utils.parseHtmlFragment(t.text);
                          case "textarea":
                              return n.utils.parseHtmlFragment(t.value);
                          case "template":
                              if (s(t.content))
                                  return n.utils.cloneNodes(t.content.childNodes)
                          }
                          return n.utils.cloneNodes(t.childNodes)
                      }
                      function s(t) {
                          return a.DocumentFragment ? t instanceof DocumentFragment : t && 11 === t.nodeType
                      }
                      function l(t, n, r) {
                          "string" == typeof n.require ? e || a.require ? (e || a.require)([n.require], r) : t("Uses require, but no AMD loader is present") : r(n)
                      }
                      function c(t) {
                          return function(e) {
                              throw new Error("Component '" + t + "': " + e)
                          }
                      }
                      n.exportSymbol("components.register", n.components.register),
                      n.exportSymbol("components.isRegistered", n.components.isRegistered),
                      n.exportSymbol("components.unregister", n.components.unregister),
                      n.exportSymbol("components.defaultLoader", n.components.defaultLoader),
                      n.components.loaders.push(n.components.defaultLoader),
                      n.components._allRegisteredComponents = r
                  }(),
                  function(t) {
                      n.components.getComponentNameForNode = function(t) {
                          var e = n.utils.tagNameLower(t);
                          return n.components.isRegistered(e) && e
                      }
                      ,
                      n.components.addBindingsForCustomElement = function(t, e, r, o) {
                          if (1 === e.nodeType) {
                              var s = n.components.getComponentNameForNode(e);
                              if (s) {
                                  if ((t = t || {}).component)
                                      throw new Error('Cannot use the "component" binding on a custom element matching a component');
                                  var a = {
                                      name: s,
                                      params: i(e, r)
                                  };
                                  t.component = o ? function() {
                                      return a
                                  }
                                  : a
                              }
                          }
                          return t
                      }
                      ;
                      var e, r = new n.bindingProvider;
                      function i(t, e) {
                          var i = t.getAttribute("params");
                          if (i) {
                              var o = r.parseBindingsString(i, e, t, {
                                  valueAccessors: !0,
                                  bindingParams: !0
                              })
                                , s = n.utils.objectMap(o, (function(e, r) {
                                  return n.computed(e, null, {
                                      disposeWhenNodeIsRemoved: t
                                  })
                              }
                              ))
                                , a = n.utils.objectMap(s, (function(e, r) {
                                  var i = e.peek();
                                  return e.isActive() ? n.computed({
                                      read: function() {
                                          return n.utils.unwrapObservable(e())
                                      },
                                      write: n.isWriteableObservable(i) && function(t) {
                                          e()(t)
                                      }
                                      ,
                                      disposeWhenNodeIsRemoved: t
                                  }) : i
                              }
                              ));
                              return a.hasOwnProperty("$raw") || (a.$raw = s),
                              a
                          }
                          return {
                              $raw: {}
                          }
                      }
                      n.utils.ieVersion < 9 && (n.components.register = (e = n.components.register,
                      function(t) {
                          return u.createElement(t),
                          e.apply(this, arguments)
                      }
                      ),
                      u.createDocumentFragment = function(t) {
                          return function() {
                              var e = t()
                                , r = n.components._allRegisteredComponents;
                              for (var i in r)
                                  r.hasOwnProperty(i) && e.createElement(i);
                              return e
                          }
                      }(u.createDocumentFragment))
                  }(),
                  g = 0,
                  n.bindingHandlers.component = {
                      init: function(t, e, r, i, o) {
                          var s, a, u = function() {
                              var t = s && s.dispose;
                              "function" == typeof t && t.call(s),
                              a = null
                          }, l = n.utils.makeArray(n.virtualElements.childNodes(t));
                          return n.utils.domNodeDisposal.addDisposeCallback(t, u),
                          n.computed((function() {
                              var r, i, c = n.utils.unwrapObservable(e());
                              if ("string" == typeof c ? r = c : (r = n.utils.unwrapObservable(c.name),
                              i = n.utils.unwrapObservable(c.params)),
                              !r)
                                  throw new Error("No component name specified");
                              var h = a = ++g;
                              n.components.get(r, (function(e) {
                                  if (a === h) {
                                      if (u(),
                                      !e)
                                          throw new Error("Unknown component '" + r + "'");
                                      !function(t, e, r) {
                                          var i = e.template;
                                          if (!i)
                                              throw new Error("Component '" + t + "' has no template");
                                          var o = n.utils.cloneNodes(i);
                                          n.virtualElements.setDomNodeChildren(r, o)
                                      }(r, e, t);
                                      var c = function(t, e, n, r) {
                                          var i = t.createViewModel;
                                          return i ? i.call(t, r, {
                                              element: e,
                                              templateNodes: n
                                          }) : r
                                      }(e, t, l, i)
                                        , p = o.createChildContext(c, void 0, (function(t) {
                                          t.$component = c,
                                          t.$componentTemplateNodes = l
                                      }
                                      ));
                                      s = c,
                                      n.applyBindingsToDescendants(p, t)
                                  }
                              }
                              ))
                          }
                          ), null, {
                              disposeWhenNodeIsRemoved: t
                          }),
                          {
                              controlsDescendantBindings: !0
                          }
                      }
                  },
                  n.virtualElements.allowedBindings.component = !0;
                  var b = {
                      class: "className",
                      for: "htmlFor"
                  };
                  function w(t, e, r, i) {
                      n.bindingHandlers[t] = {
                          init: function(t, o, s, a, u) {
                              var l, c;
                              return n.computed((function() {
                                  var s = n.utils.unwrapObservable(o())
                                    , a = !r != !s
                                    , h = !c;
                                  (h || e || a !== l) && (h && n.computedContext.getDependenciesCount() && (c = n.utils.cloneNodes(n.virtualElements.childNodes(t), !0)),
                                  a ? (h || n.virtualElements.setDomNodeChildren(t, n.utils.cloneNodes(c)),
                                  n.applyBindingsToDescendants(i ? i(u, s) : u, t)) : n.virtualElements.emptyNode(t),
                                  l = a)
                              }
                              ), null, {
                                  disposeWhenNodeIsRemoved: t
                              }),
                              {
                                  controlsDescendantBindings: !0
                              }
                          }
                      },
                      n.expressionRewriting.bindingRewriteValidators[t] = !1,
                      n.virtualElements.allowedBindings[t] = !0
                  }
                  n.bindingHandlers.attr = {
                      update: function(t, e, r) {
                          var i = n.utils.unwrapObservable(e()) || {};
                          n.utils.objectForEach(i, (function(e, r) {
                              var i = !1 === (r = n.utils.unwrapObservable(r)) || null === r || r === o;
                              i && t.removeAttribute(e),
                              n.utils.ieVersion <= 8 && e in b ? (e = b[e],
                              i ? t.removeAttribute(e) : t[e] = r) : i || t.setAttribute(e, r.toString()),
                              "name" === e && n.utils.setElementName(t, i ? "" : r.toString())
                          }
                          ))
                      }
                  },
                  n.bindingHandlers.checked = {
                      after: ["value", "attr"],
                      init: function(t, e, r) {
                          var i = n.pureComputed((function() {
                              return r.has("checkedValue") ? n.utils.unwrapObservable(r.get("checkedValue")) : r.has("value") ? n.utils.unwrapObservable(r.get("value")) : t.value
                          }
                          ));
                          function s() {
                              var o = t.checked
                                , s = h ? i() : o;
                              if (!n.computedContext.isInitial() && (!u || o)) {
                                  var a = n.dependencyDetection.ignore(e);
                                  l ? c !== s ? (o && (n.utils.addOrRemoveItem(a, s, !0),
                                  n.utils.addOrRemoveItem(a, c, !1)),
                                  c = s) : n.utils.addOrRemoveItem(a, s, o) : n.expressionRewriting.writeValueToProperty(a, r, "checked", s, !0)
                              }
                          }
                          var a = "checkbox" == t.type
                            , u = "radio" == t.type;
                          if (a || u) {
                              var l = a && n.utils.unwrapObservable(e())instanceof Array
                                , c = l ? i() : o
                                , h = u || l;
                              u && !t.name && n.bindingHandlers.uniqueName.init(t, (function() {
                                  return !0
                              }
                              )),
                              n.computed(s, null, {
                                  disposeWhenNodeIsRemoved: t
                              }),
                              n.utils.registerEventHandler(t, "click", s),
                              n.computed((function() {
                                  var r = n.utils.unwrapObservable(e());
                                  t.checked = l ? n.utils.arrayIndexOf(r, i()) >= 0 : a ? r : i() === r
                              }
                              ), null, {
                                  disposeWhenNodeIsRemoved: t
                              })
                          }
                      }
                  },
                  n.expressionRewriting.twoWayBindings.checked = !0,
                  n.bindingHandlers.checkedValue = {
                      update: function(t, e) {
                          t.value = n.utils.unwrapObservable(e())
                      }
                  },
                  n.bindingHandlers.css = {
                      update: function(t, e) {
                          var r = n.utils.unwrapObservable(e());
                          null !== r && "object" == typeof r ? n.utils.objectForEach(r, (function(e, r) {
                              r = n.utils.unwrapObservable(r),
                              n.utils.toggleDomNodeCssClass(t, e, r)
                          }
                          )) : (r = String(r || ""),
                          n.utils.toggleDomNodeCssClass(t, t.__ko__cssValue, !1),
                          t.__ko__cssValue = r,
                          n.utils.toggleDomNodeCssClass(t, r, !0))
                      }
                  },
                  n.bindingHandlers.enable = {
                      update: function(t, e) {
                          var r = n.utils.unwrapObservable(e());
                          r && t.disabled ? t.removeAttribute("disabled") : r || t.disabled || (t.disabled = !0)
                      }
                  },
                  n.bindingHandlers.disable = {
                      update: function(t, e) {
                          n.bindingHandlers.enable.update(t, (function() {
                              return !n.utils.unwrapObservable(e())
                          }
                          ))
                      }
                  },
                  n.bindingHandlers.event = {
                      init: function(t, e, r, i, o) {
                          var s = e() || {};
                          n.utils.objectForEach(s, (function(s) {
                              "string" == typeof s && n.utils.registerEventHandler(t, s, (function(t) {
                                  var a, u = e()[s];
                                  if (u) {
                                      try {
                                          var l = n.utils.makeArray(arguments);
                                          i = o.$data,
                                          l.unshift(i),
                                          a = u.apply(i, l)
                                      } finally {
                                          !0 !== a && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                                      }
                                      var c = !1 !== r.get(s + "Bubble");
                                      c || (t.cancelBubble = !0,
                                      t.stopPropagation && t.stopPropagation())
                                  }
                              }
                              ))
                          }
                          ))
                      }
                  },
                  n.bindingHandlers.foreach = {
                      makeTemplateValueAccessor: function(t) {
                          return function() {
                              var e = t()
                                , r = n.utils.peekObservable(e);
                              return r && "number" != typeof r.length ? (n.utils.unwrapObservable(e),
                              {
                                  foreach: r.data,
                                  as: r.as,
                                  includeDestroyed: r.includeDestroyed,
                                  afterAdd: r.afterAdd,
                                  beforeRemove: r.beforeRemove,
                                  afterRender: r.afterRender,
                                  beforeMove: r.beforeMove,
                                  afterMove: r.afterMove,
                                  templateEngine: n.nativeTemplateEngine.instance
                              }) : {
                                  foreach: e,
                                  templateEngine: n.nativeTemplateEngine.instance
                              }
                          }
                      },
                      init: function(t, e, r, i, o) {
                          return n.bindingHandlers.template.init(t, n.bindingHandlers.foreach.makeTemplateValueAccessor(e))
                      },
                      update: function(t, e, r, i, o) {
                          return n.bindingHandlers.template.update(t, n.bindingHandlers.foreach.makeTemplateValueAccessor(e), r, i, o)
                      }
                  },
                  n.expressionRewriting.bindingRewriteValidators.foreach = !1,
                  n.virtualElements.allowedBindings.foreach = !0,
                  n.bindingHandlers.hasfocus = {
                      init: function(t, e, r) {
                          var i = function(i) {
                              t.__ko_hasfocusUpdating = !0;
                              var o = t.ownerDocument;
                              if ("activeElement"in o) {
                                  var s;
                                  try {
                                      s = o.activeElement
                                  } catch (t) {
                                      s = o.body
                                  }
                                  i = s === t
                              }
                              var a = e();
                              n.expressionRewriting.writeValueToProperty(a, r, "hasfocus", i, !0),
                              t.__ko_hasfocusLastValue = i,
                              t.__ko_hasfocusUpdating = !1
                          }
                            , o = i.bind(null, !0)
                            , s = i.bind(null, !1);
                          n.utils.registerEventHandler(t, "focus", o),
                          n.utils.registerEventHandler(t, "focusin", o),
                          n.utils.registerEventHandler(t, "blur", s),
                          n.utils.registerEventHandler(t, "focusout", s)
                      },
                      update: function(t, e) {
                          var r = !!n.utils.unwrapObservable(e());
                          t.__ko_hasfocusUpdating || t.__ko_hasfocusLastValue === r || (r ? t.focus() : t.blur(),
                          n.dependencyDetection.ignore(n.utils.triggerEvent, null, [t, r ? "focusin" : "focusout"]))
                      }
                  },
                  n.expressionRewriting.twoWayBindings.hasfocus = !0,
                  n.bindingHandlers.hasFocus = n.bindingHandlers.hasfocus,
                  n.expressionRewriting.twoWayBindings.hasFocus = !0,
                  n.bindingHandlers.html = {
                      init: function() {
                          return {
                              controlsDescendantBindings: !0
                          }
                      },
                      update: function(t, e) {
                          n.utils.setHtml(t, e())
                      }
                  },
                  w("if"),
                  w("ifnot", !1, !0),
                  w("with", !0, !1, (function(t, e) {
                      return t.createChildContext(e)
                  }
                  ));
                  var x, E = {};
                  n.bindingHandlers.options = {
                      init: function(t) {
                          if ("select" !== n.utils.tagNameLower(t))
                              throw new Error("options binding applies only to SELECT elements");
                          for (; t.length > 0; )
                              t.remove(0);
                          return {
                              controlsDescendantBindings: !0
                          }
                      },
                      update: function(t, e, r) {
                          function i() {
                              return n.utils.arrayFilter(t.options, (function(t) {
                                  return t.selected
                              }
                              ))
                          }
                          var s, a, u = 0 == t.length, l = t.multiple, c = !u && l ? t.scrollTop : null, h = n.utils.unwrapObservable(e()), p = r.get("valueAllowUnset") && r.has("value"), f = r.get("optionsIncludeDestroyed"), d = {}, m = [];
                          function v(t, e, n) {
                              var r = typeof e;
                              return "function" == r ? e(t) : "string" == r ? t[e] : n
                          }
                          p || (l ? m = n.utils.arrayMap(i(), n.selectExtensions.readValue) : t.selectedIndex >= 0 && m.push(n.selectExtensions.readValue(t.options[t.selectedIndex]))),
                          h && (void 0 === h.length && (h = [h]),
                          a = n.utils.arrayFilter(h, (function(t) {
                              return f || t === o || null === t || !n.utils.unwrapObservable(t._destroy)
                          }
                          )),
                          r.has("optionsCaption") && null !== (s = n.utils.unwrapObservable(r.get("optionsCaption"))) && s !== o && a.unshift(E));
                          var y = !1;
                          function g(e, i) {
                              if (y && p)
                                  n.selectExtensions.writeValue(t, n.utils.unwrapObservable(r.get("value")), !0);
                              else if (m.length) {
                                  var o = n.utils.arrayIndexOf(m, n.selectExtensions.readValue(i[0])) >= 0;
                                  n.utils.setOptionNodeSelectionState(i[0], o),
                                  y && !o && n.dependencyDetection.ignore(n.utils.triggerEvent, null, [t, "change"])
                              }
                          }
                          d.beforeRemove = function(e) {
                              t.removeChild(e)
                          }
                          ;
                          var _ = g;
                          r.has("optionsAfterRender") && "function" == typeof r.get("optionsAfterRender") && (_ = function(t, e) {
                              g(0, e),
                              n.dependencyDetection.ignore(r.get("optionsAfterRender"), null, [e[0], t !== E ? t : o])
                          }
                          ),
                          n.utils.setDomNodeChildrenFromArrayMapping(t, a, (function(e, i, s) {
                              s.length && (m = !p && s[0].selected ? [n.selectExtensions.readValue(s[0])] : [],
                              y = !0);
                              var a = t.ownerDocument.createElement("option");
                              if (e === E)
                                  n.utils.setTextContent(a, r.get("optionsCaption")),
                                  n.selectExtensions.writeValue(a, o);
                              else {
                                  var u = v(e, r.get("optionsValue"), e);
                                  n.selectExtensions.writeValue(a, n.utils.unwrapObservable(u));
                                  var l = v(e, r.get("optionsText"), u);
                                  n.utils.setTextContent(a, l)
                              }
                              return [a]
                          }
                          ), d, _),
                          n.dependencyDetection.ignore((function() {
                              p ? n.selectExtensions.writeValue(t, n.utils.unwrapObservable(r.get("value")), !0) : (l ? m.length && i().length < m.length : m.length && t.selectedIndex >= 0 ? n.selectExtensions.readValue(t.options[t.selectedIndex]) !== m[0] : m.length || t.selectedIndex >= 0) && n.utils.triggerEvent(t, "change")
                          }
                          )),
                          n.utils.ensureSelectElementIsRenderedCorrectly(t),
                          c && Math.abs(c - t.scrollTop) > 20 && (t.scrollTop = c)
                      }
                  },
                  n.bindingHandlers.options.optionValueDomDataKey = n.utils.domData.nextKey(),
                  n.bindingHandlers.selectedOptions = {
                      after: ["options", "foreach"],
                      init: function(t, e, r) {
                          n.utils.registerEventHandler(t, "change", (function() {
                              var i = e()
                                , o = [];
                              n.utils.arrayForEach(t.getElementsByTagName("option"), (function(t) {
                                  t.selected && o.push(n.selectExtensions.readValue(t))
                              }
                              )),
                              n.expressionRewriting.writeValueToProperty(i, r, "selectedOptions", o)
                          }
                          ))
                      },
                      update: function(t, e) {
                          if ("select" != n.utils.tagNameLower(t))
                              throw new Error("values binding applies only to SELECT elements");
                          var r = n.utils.unwrapObservable(e());
                          r && "number" == typeof r.length && n.utils.arrayForEach(t.getElementsByTagName("option"), (function(t) {
                              var e = n.utils.arrayIndexOf(r, n.selectExtensions.readValue(t)) >= 0;
                              n.utils.setOptionNodeSelectionState(t, e)
                          }
                          ))
                      }
                  },
                  n.expressionRewriting.twoWayBindings.selectedOptions = !0,
                  n.bindingHandlers.style = {
                      update: function(t, e) {
                          var r = n.utils.unwrapObservable(e() || {});
                          n.utils.objectForEach(r, (function(e, r) {
                              null !== (r = n.utils.unwrapObservable(r)) && r !== o && !1 !== r || (r = ""),
                              t.style[e] = r
                          }
                          ))
                      }
                  },
                  n.bindingHandlers.submit = {
                      init: function(t, e, r, i, o) {
                          if ("function" != typeof e())
                              throw new Error("The value for a submit binding must be a function");
                          n.utils.registerEventHandler(t, "submit", (function(n) {
                              var r, i = e();
                              try {
                                  r = i.call(o.$data, t)
                              } finally {
                                  !0 !== r && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
                              }
                          }
                          ))
                      }
                  },
                  n.bindingHandlers.text = {
                      init: function() {
                          return {
                              controlsDescendantBindings: !0
                          }
                      },
                      update: function(t, e) {
                          n.utils.setTextContent(t, e())
                      }
                  },
                  n.virtualElements.allowedBindings.text = !0,
                  function() {
                      if (a && a.navigator)
                          var t = function(t) {
                              if (t)
                                  return parseFloat(t[1])
                          }
                            , e = a.opera && a.opera.version && parseInt(a.opera.version())
                            , r = a.navigator.userAgent
                            , s = t(r.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i))
                            , u = t(r.match(/Firefox\/([^ ]*)/));
                      if (n.utils.ieVersion < 10)
                          var l = n.utils.domData.nextKey()
                            , c = n.utils.domData.nextKey()
                            , h = function(t) {
                              var e = this.activeElement
                                , r = e && n.utils.domData.get(e, c);
                              r && r(t)
                          }
                            , p = function(t, e) {
                              var r = t.ownerDocument;
                              n.utils.domData.get(r, l) || (n.utils.domData.set(r, l, !0),
                              n.utils.registerEventHandler(r, "selectionchange", h)),
                              n.utils.domData.set(t, c, e)
                          };
                      n.bindingHandlers.textInput = {
                          init: function(t, r, a) {
                              var l, c, h = t.value, f = function(e) {
                                  clearTimeout(l),
                                  c = l = o;
                                  var s = t.value;
                                  h !== s && (i && e && (t._ko_textInputProcessedEvent = e.type),
                                  h = s,
                                  n.expressionRewriting.writeValueToProperty(r(), a, "textInput", s))
                              }, d = function(e) {
                                  if (!l) {
                                      c = t.value;
                                      var n = i ? f.bind(t, {
                                          type: e.type
                                      }) : f;
                                      l = setTimeout(n, 4)
                                  }
                              }, m = function() {
                                  var e = n.utils.unwrapObservable(r());
                                  null !== e && e !== o || (e = ""),
                                  c === o || e !== c ? t.value !== e && (h = e,
                                  t.value = e) : setTimeout(m, 4)
                              }, v = function(e, r) {
                                  n.utils.registerEventHandler(t, e, r)
                              };
                              i && n.bindingHandlers.textInput._forceUpdateOn ? n.utils.arrayForEach(n.bindingHandlers.textInput._forceUpdateOn, (function(t) {
                                  "after" == t.slice(0, 5) ? v(t.slice(5), d) : v(t, f)
                              }
                              )) : n.utils.ieVersion < 10 ? (v("propertychange", (function(t) {
                                  "value" === t.propertyName && f(t)
                              }
                              )),
                              8 == n.utils.ieVersion && (v("keyup", f),
                              v("keydown", f)),
                              n.utils.ieVersion >= 8 && (p(t, f),
                              v("dragend", d))) : (v("input", f),
                              s < 5 && "textarea" === n.utils.tagNameLower(t) ? (v("keydown", d),
                              v("paste", d),
                              v("cut", d)) : e < 11 ? v("keydown", d) : u < 4 && (v("DOMAutoComplete", f),
                              v("dragdrop", f),
                              v("drop", f))),
                              v("change", f),
                              n.computed(m, null, {
                                  disposeWhenNodeIsRemoved: t
                              })
                          }
                      },
                      n.expressionRewriting.twoWayBindings.textInput = !0,
                      n.bindingHandlers.textinput = {
                          preprocess: function(t, e, n) {
                              n("textInput", t)
                          }
                      }
                  }(),
                  n.bindingHandlers.uniqueName = {
                      init: function(t, e) {
                          if (e()) {
                              var r = "ko_unique_" + ++n.bindingHandlers.uniqueName.currentIndex;
                              n.utils.setElementName(t, r)
                          }
                      }
                  },
                  n.bindingHandlers.uniqueName.currentIndex = 0,
                  n.bindingHandlers.value = {
                      after: ["options", "foreach"],
                      init: function(t, e, r) {
                          if ("input" != t.tagName.toLowerCase() || "checkbox" != t.type && "radio" != t.type) {
                              var i = ["change"]
                                , o = r.get("valueUpdate")
                                , s = !1
                                , a = null;
                              o && ("string" == typeof o && (o = [o]),
                              n.utils.arrayPushAll(i, o),
                              i = n.utils.arrayGetDistinctValues(i));
                              var u = function() {
                                  a = null,
                                  s = !1;
                                  var i = e()
                                    , o = n.selectExtensions.readValue(t);
                                  n.expressionRewriting.writeValueToProperty(i, r, "value", o)
                              };
                              n.utils.ieVersion && "input" == t.tagName.toLowerCase() && "text" == t.type && "off" != t.autocomplete && (!t.form || "off" != t.form.autocomplete) && -1 == n.utils.arrayIndexOf(i, "propertychange") && (n.utils.registerEventHandler(t, "propertychange", (function() {
                                  s = !0
                              }
                              )),
                              n.utils.registerEventHandler(t, "focus", (function() {
                                  s = !1
                              }
                              )),
                              n.utils.registerEventHandler(t, "blur", (function() {
                                  s && u()
                              }
                              ))),
                              n.utils.arrayForEach(i, (function(e) {
                                  var r = u;
                                  n.utils.stringStartsWith(e, "after") && (r = function() {
                                      a = n.selectExtensions.readValue(t),
                                      setTimeout(u, 0)
                                  }
                                  ,
                                  e = e.substring("after".length)),
                                  n.utils.registerEventHandler(t, e, r)
                              }
                              ));
                              var l = function() {
                                  var i = n.utils.unwrapObservable(e())
                                    , o = n.selectExtensions.readValue(t);
                                  if (null === a || i !== a) {
                                      if (i !== o)
                                          if ("select" === n.utils.tagNameLower(t)) {
                                              var s = r.get("valueAllowUnset")
                                                , u = function() {
                                                  n.selectExtensions.writeValue(t, i, s)
                                              };
                                              u(),
                                              s || i === n.selectExtensions.readValue(t) ? setTimeout(u, 0) : n.dependencyDetection.ignore(n.utils.triggerEvent, null, [t, "change"])
                                          } else
                                              n.selectExtensions.writeValue(t, i)
                                  } else
                                      setTimeout(l, 0)
                              };
                              n.computed(l, null, {
                                  disposeWhenNodeIsRemoved: t
                              })
                          } else
                              n.applyBindingAccessorsToNode(t, {
                                  checkedValue: e
                              })
                      },
                      update: function() {}
                  },
                  n.expressionRewriting.twoWayBindings.value = !0,
                  n.bindingHandlers.visible = {
                      update: function(t, e) {
                          var r = n.utils.unwrapObservable(e())
                            , i = !("none" == t.style.display);
                          r && !i ? t.style.display = "" : !r && i && (t.style.display = "none")
                      }
                  },
                  x = "click",
                  n.bindingHandlers[x] = {
                      init: function(t, e, r, i, o) {
                          return n.bindingHandlers.event.init.call(this, t, (function() {
                              var t = {};
                              return t[x] = e(),
                              t
                          }
                          ), r, i, o)
                      }
                  },
                  n.templateEngine = function() {}
                  ,
                  n.templateEngine.prototype.renderTemplateSource = function(t, e, n, r) {
                      throw new Error("Override renderTemplateSource")
                  }
                  ,
                  n.templateEngine.prototype.createJavaScriptEvaluatorBlock = function(t) {
                      throw new Error("Override createJavaScriptEvaluatorBlock")
                  }
                  ,
                  n.templateEngine.prototype.makeTemplateSource = function(t, e) {
                      if ("string" == typeof t) {
                          var r = (e = e || u).getElementById(t);
                          if (!r)
                              throw new Error("Cannot find template with ID " + t);
                          return new n.templateSources.domElement(r)
                      }
                      if (1 == t.nodeType || 8 == t.nodeType)
                          return new n.templateSources.anonymousTemplate(t);
                      throw new Error("Unknown template type: " + t)
                  }
                  ,
                  n.templateEngine.prototype.renderTemplate = function(t, e, n, r) {
                      var i = this.makeTemplateSource(t, r);
                      return this.renderTemplateSource(i, e, n, r)
                  }
                  ,
                  n.templateEngine.prototype.isTemplateRewritten = function(t, e) {
                      return !1 === this.allowTemplateRewriting || this.makeTemplateSource(t, e).data("isRewritten")
                  }
                  ,
                  n.templateEngine.prototype.rewriteTemplate = function(t, e, n) {
                      var r = this.makeTemplateSource(t, n)
                        , i = e(r.text());
                      r.text(i),
                      r.data("isRewritten", !0)
                  }
                  ,
                  n.exportSymbol("templateEngine", n.templateEngine),
                  n.templateRewriting = function() {
                      var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi
                        , e = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;
                      function r(t, e, r, i) {
                          var o = n.expressionRewriting.parseObjectLiteral(t);
                          !function(t) {
                              for (var e = n.expressionRewriting.bindingRewriteValidators, r = 0; r < t.length; r++) {
                                  var i = t[r].key;
                                  if (e.hasOwnProperty(i)) {
                                      var o = e[i];
                                      if ("function" == typeof o) {
                                          var s = o(t[r].value);
                                          if (s)
                                              throw new Error(s)
                                      } else if (!o)
                                          throw new Error("This template engine does not support the '" + i + "' binding within its templates")
                                  }
                              }
                          }(o);
                          var s = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + n.expressionRewriting.preProcessBindings(o, {
                              valueAccessors: !0
                          }) + " } })()},'" + r.toLowerCase() + "')";
                          return i.createJavaScriptEvaluatorBlock(s) + e
                      }
                      return {
                          ensureTemplateIsRewritten: function(t, e, r) {
                              e.isTemplateRewritten(t, r) || e.rewriteTemplate(t, (function(t) {
                                  return n.templateRewriting.memoizeBindingAttributeSyntax(t, e)
                              }
                              ), r)
                          },
                          memoizeBindingAttributeSyntax: function(n, i) {
                              return n.replace(t, (function() {
                                  return r(arguments[4], arguments[1], arguments[2], i)
                              }
                              )).replace(e, (function() {
                                  return r(arguments[1], "\x3c!-- ko --\x3e", "#comment", i)
                              }
                              ))
                          },
                          applyMemoizedBindingsToNextSibling: function(t, e) {
                              return n.memoization.memoize((function(r, i) {
                                  var o = r.nextSibling;
                                  o && o.nodeName.toLowerCase() === e && n.applyBindingAccessorsToNode(o, t, i)
                              }
                              ))
                          }
                      }
                  }(),
                  n.exportSymbol("__tr_ambtns", n.templateRewriting.applyMemoizedBindingsToNextSibling),
                  function() {
                      n.templateSources = {},
                      n.templateSources.domElement = function(t) {
                          this.domElement = t
                      }
                      ,
                      n.templateSources.domElement.prototype.text = function() {
                          var t = n.utils.tagNameLower(this.domElement)
                            , e = "script" === t ? "text" : "textarea" === t ? "value" : "innerHTML";
                          if (0 == arguments.length)
                              return this.domElement[e];
                          var r = arguments[0];
                          "innerHTML" === e ? n.utils.setHtml(this.domElement, r) : this.domElement[e] = r
                      }
                      ;
                      var t = n.utils.domData.nextKey() + "_";
                      n.templateSources.domElement.prototype.data = function(e) {
                          if (1 === arguments.length)
                              return n.utils.domData.get(this.domElement, t + e);
                          n.utils.domData.set(this.domElement, t + e, arguments[1])
                      }
                      ;
                      var e = n.utils.domData.nextKey();
                      n.templateSources.anonymousTemplate = function(t) {
                          this.domElement = t
                      }
                      ,
                      n.templateSources.anonymousTemplate.prototype = new n.templateSources.domElement,
                      n.templateSources.anonymousTemplate.prototype.constructor = n.templateSources.anonymousTemplate,
                      n.templateSources.anonymousTemplate.prototype.text = function() {
                          if (0 == arguments.length) {
                              var t = n.utils.domData.get(this.domElement, e) || {};
                              return t.textData === o && t.containerData && (t.textData = t.containerData.innerHTML),
                              t.textData
                          }
                          var r = arguments[0];
                          n.utils.domData.set(this.domElement, e, {
                              textData: r
                          })
                      }
                      ,
                      n.templateSources.domElement.prototype.nodes = function() {
                          if (0 == arguments.length) {
                              var t = n.utils.domData.get(this.domElement, e) || {};
                              return t.containerData
                          }
                          var r = arguments[0];
                          n.utils.domData.set(this.domElement, e, {
                              containerData: r
                          })
                      }
                      ,
                      n.exportSymbol("templateSources", n.templateSources),
                      n.exportSymbol("templateSources.domElement", n.templateSources.domElement),
                      n.exportSymbol("templateSources.anonymousTemplate", n.templateSources.anonymousTemplate)
                  }(),
                  function() {
                      var t;
                      function e(t, e, r) {
                          for (var i, o = t, s = n.virtualElements.nextSibling(e); o && (i = o) !== s; )
                              r(i, o = n.virtualElements.nextSibling(i))
                      }
                      function r(t, r) {
                          if (t.length) {
                              var i = t[0]
                                , o = t[t.length - 1]
                                , s = i.parentNode
                                , a = n.bindingProvider.instance
                                , u = a.preprocessNode;
                              if (u) {
                                  if (e(i, o, (function(t, e) {
                                      var n = t.previousSibling
                                        , r = u.call(a, t);
                                      r && (t === i && (i = r[0] || e),
                                      t === o && (o = r[r.length - 1] || n))
                                  }
                                  )),
                                  t.length = 0,
                                  !i)
                                      return;
                                  i === o ? t.push(i) : (t.push(i, o),
                                  n.utils.fixUpContinuousNodeArray(t, s))
                              }
                              e(i, o, (function(t) {
                                  1 !== t.nodeType && 8 !== t.nodeType || n.applyBindings(r, t)
                              }
                              )),
                              e(i, o, (function(t) {
                                  1 !== t.nodeType && 8 !== t.nodeType || n.memoization.unmemoizeDomNodeAndDescendants(t, [r])
                              }
                              )),
                              n.utils.fixUpContinuousNodeArray(t, s)
                          }
                      }
                      function i(t) {
                          return t.nodeType ? t : t.length > 0 ? t[0] : null
                      }
                      function s(e, o, s, a, u) {
                          u = u || {};
                          var l = (e && i(e) || s || {}).ownerDocument
                            , c = u.templateEngine || t;
                          n.templateRewriting.ensureTemplateIsRewritten(s, c, l);
                          var h = c.renderTemplate(s, a, u, l);
                          if ("number" != typeof h.length || h.length > 0 && "number" != typeof h[0].nodeType)
                              throw new Error("Template engine must return an array of DOM nodes");
                          var p = !1;
                          switch (o) {
                          case "replaceChildren":
                              n.virtualElements.setDomNodeChildren(e, h),
                              p = !0;
                              break;
                          case "replaceNode":
                              n.utils.replaceDomNodes(e, h),
                              p = !0;
                              break;
                          case "ignoreTargetNode":
                              break;
                          default:
                              throw new Error("Unknown renderMode: " + o)
                          }
                          return p && (r(h, a),
                          u.afterRender && n.dependencyDetection.ignore(u.afterRender, null, [h, a.$data])),
                          h
                      }
                      function a(t, e, r) {
                          return n.isObservable(t) ? t() : "function" == typeof t ? t(e, r) : t
                      }
                      n.setTemplateEngine = function(e) {
                          if (e != o && !(e instanceof n.templateEngine))
                              throw new Error("templateEngine must inherit from ko.templateEngine");
                          t = e
                      }
                      ,
                      n.renderTemplate = function(e, r, u, l, c) {
                          if (((u = u || {}).templateEngine || t) == o)
                              throw new Error("Set a template engine before calling renderTemplate");
                          if (c = c || "replaceChildren",
                          l) {
                              var h = i(l)
                                , p = h && "replaceNode" == c ? h.parentNode : h;
                              return n.dependentObservable((function() {
                                  var t = r && r instanceof n.bindingContext ? r : new n.bindingContext(n.utils.unwrapObservable(r))
                                    , o = a(e, t.$data, t)
                                    , p = s(l, c, o, t, u);
                                  "replaceNode" == c && (h = i(l = p))
                              }
                              ), null, {
                                  disposeWhen: function() {
                                      return !h || !n.utils.domNodeIsAttachedToDocument(h)
                                  },
                                  disposeWhenNodeIsRemoved: p
                              })
                          }
                          return n.memoization.memoize((function(t) {
                              n.renderTemplate(e, r, u, t, "replaceNode")
                          }
                          ))
                      }
                      ,
                      n.renderTemplateForEach = function(t, e, i, u, l) {
                          var c, h = function(e, n) {
                              return c = l.createChildContext(e, i.as, (function(t) {
                                  t.$index = n
                              }
                              )),
                              s(null, "ignoreTargetNode", a(t, e, c), c, i)
                          }, p = function(t, e, n) {
                              r(e, c),
                              i.afterRender && i.afterRender(e, t),
                              c = null
                          };
                          return n.dependentObservable((function() {
                              var t = n.utils.unwrapObservable(e) || [];
                              void 0 === t.length && (t = [t]);
                              var r = n.utils.arrayFilter(t, (function(t) {
                                  return i.includeDestroyed || t === o || null === t || !n.utils.unwrapObservable(t._destroy)
                              }
                              ));
                              n.dependencyDetection.ignore(n.utils.setDomNodeChildrenFromArrayMapping, null, [u, r, h, i, p])
                          }
                          ), null, {
                              disposeWhenNodeIsRemoved: u
                          })
                      }
                      ;
                      var u = n.utils.domData.nextKey();
                      n.bindingHandlers.template = {
                          init: function(t, e) {
                              var r = n.utils.unwrapObservable(e());
                              if ("string" == typeof r || r.name)
                                  n.virtualElements.emptyNode(t);
                              else if ("nodes"in r) {
                                  var i = r.nodes || [];
                                  if (n.isObservable(i))
                                      throw new Error('The "nodes" option must be a plain, non-observable array.');
                                  var o = n.utils.moveCleanedNodesToContainerElement(i);
                                  new n.templateSources.anonymousTemplate(t).nodes(o)
                              } else {
                                  var s = n.virtualElements.childNodes(t);
                                  o = n.utils.moveCleanedNodesToContainerElement(s),
                                  new n.templateSources.anonymousTemplate(t).nodes(o)
                              }
                              return {
                                  controlsDescendantBindings: !0
                              }
                          },
                          update: function(t, e, r, i, s) {
                              var a, l, c = e(), h = n.utils.unwrapObservable(c), p = !0, f = null;
                              if ("string" == typeof h ? (l = c,
                              h = {}) : (l = h.name,
                              "if"in h && (p = n.utils.unwrapObservable(h.if)),
                              p && "ifnot"in h && (p = !n.utils.unwrapObservable(h.ifnot)),
                              a = n.utils.unwrapObservable(h.data)),
                              "foreach"in h) {
                                  var d = p && h.foreach || [];
                                  f = n.renderTemplateForEach(l || t, d, h, t, s)
                              } else if (p) {
                                  var m = "data"in h ? s.createChildContext(a, h.as) : s;
                                  f = n.renderTemplate(l || t, m, h, t)
                              } else
                                  n.virtualElements.emptyNode(t);
                              !function(t, e) {
                                  var r = n.utils.domData.get(t, u);
                                  r && "function" == typeof r.dispose && r.dispose(),
                                  n.utils.domData.set(t, u, e && e.isActive() ? e : o)
                              }(t, f)
                          }
                      },
                      n.expressionRewriting.bindingRewriteValidators.template = function(t) {
                          var e = n.expressionRewriting.parseObjectLiteral(t);
                          return 1 == e.length && e[0].unknown ? null : n.expressionRewriting.keyValueArrayContainsKey(e, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                      }
                      ,
                      n.virtualElements.allowedBindings.template = !0
                  }(),
                  n.exportSymbol("setTemplateEngine", n.setTemplateEngine),
                  n.exportSymbol("renderTemplate", n.renderTemplate),
                  n.utils.findMovesInArrayComparison = function(t, e, n) {
                      var r, i, o, s, a;
                      if (t.length && e.length)
                          for (r = i = 0; (!n || r < n) && (s = t[i]); ++i) {
                              for (o = 0; a = e[o]; ++o)
                                  if (s.value === a.value) {
                                      s.moved = a.index,
                                      a.moved = s.index,
                                      e.splice(o, 1),
                                      r = o = 0;
                                      break
                                  }
                              r += o
                          }
                  }
                  ,
                  n.utils.compareArrays = function() {
                      var t = "added"
                        , e = "deleted";
                      function r(t, e, r, i, o) {
                          var s, a, u, l, c, h = Math.min, p = Math.max, f = [], d = t.length, m = e.length, v = m - d || 1, y = d + m + 1;
                          for (s = 0; s <= d; s++)
                              for (l = u,
                              f.push(u = []),
                              c = h(m, s + v),
                              a = p(0, s - 1); a <= c; a++)
                                  if (a)
                                      if (s)
                                          if (t[s - 1] === e[a - 1])
                                              u[a] = l[a - 1];
                                          else {
                                              var g = l[a] || y
                                                , _ = u[a - 1] || y;
                                              u[a] = h(g, _) + 1
                                          }
                                      else
                                          u[a] = a + 1;
                                  else
                                      u[a] = s + 1;
                          var b, w = [], x = [], E = [];
                          for (s = d,
                          a = m; s || a; )
                              b = f[s][a] - 1,
                              a && b === f[s][a - 1] ? x.push(w[w.length] = {
                                  status: r,
                                  value: e[--a],
                                  index: a
                              }) : s && b === f[s - 1][a] ? E.push(w[w.length] = {
                                  status: i,
                                  value: t[--s],
                                  index: s
                              }) : (--a,
                              --s,
                              o.sparse || w.push({
                                  status: "retained",
                                  value: e[a]
                              }));
                          return n.utils.findMovesInArrayComparison(x, E, 10 * d),
                          w.reverse()
                      }
                      return function(n, i, o) {
                          return o = "boolean" == typeof o ? {
                              dontLimitMoves: o
                          } : o || {},
                          i = i || [],
                          (n = n || []).length <= i.length ? r(n, i, t, e, o) : r(i, n, e, t, o)
                      }
                  }(),
                  n.exportSymbol("utils.compareArrays", n.utils.compareArrays),
                  function() {
                      function t(t, e, r, i, s) {
                          var a = []
                            , u = n.dependentObservable((function() {
                              var o = e(r, s, n.utils.fixUpContinuousNodeArray(a, t)) || [];
                              a.length > 0 && (n.utils.replaceDomNodes(a, o),
                              i && n.dependencyDetection.ignore(i, null, [r, o, s])),
                              a.length = 0,
                              n.utils.arrayPushAll(a, o)
                          }
                          ), null, {
                              disposeWhenNodeIsRemoved: t,
                              disposeWhen: function() {
                                  return !n.utils.anyDomNodeIsAttachedToDocument(a)
                              }
                          });
                          return {
                              mappedNodes: a,
                              dependentObservable: u.isActive() ? u : o
                          }
                      }
                      var e = n.utils.domData.nextKey();
                      n.utils.setDomNodeChildrenFromArrayMapping = function(r, i, s, a, u) {
                          i = i || [],
                          a = a || {};
                          var l, c = n.utils.domData.get(r, e) === o, h = n.utils.domData.get(r, e) || [], p = n.utils.arrayMap(h, (function(t) {
                              return t.arrayEntry
                          }
                          )), f = n.utils.compareArrays(p, i, a.dontLimitMoves), d = [], m = 0, v = 0, y = [], g = [], _ = [], b = [], w = [];
                          function x(t, e) {
                              l = h[e],
                              v !== e && (b[t] = l),
                              l.indexObservable(v++),
                              n.utils.fixUpContinuousNodeArray(l.mappedNodes, r),
                              d.push(l),
                              g.push(l)
                          }
                          function E(t, e) {
                              if (t)
                                  for (var r = 0, i = e.length; r < i; r++)
                                      e[r] && n.utils.arrayForEach(e[r].mappedNodes, (function(n) {
                                          t(n, r, e[r].arrayEntry)
                                      }
                                      ))
                          }
                          for (var M, S, T = 0; M = f[T]; T++)
                              switch (S = M.moved,
                              M.status) {
                              case "deleted":
                                  S === o && ((l = h[m]).dependentObservable && l.dependentObservable.dispose(),
                                  y.push.apply(y, n.utils.fixUpContinuousNodeArray(l.mappedNodes, r)),
                                  a.beforeRemove && (_[T] = l,
                                  g.push(l))),
                                  m++;
                                  break;
                              case "retained":
                                  x(T, m++);
                                  break;
                              case "added":
                                  S !== o ? x(T, S) : (l = {
                                      arrayEntry: M.value,
                                      indexObservable: n.observable(v++)
                                  },
                                  d.push(l),
                                  g.push(l),
                                  c || (w[T] = l))
                              }
                          E(a.beforeMove, b),
                          n.utils.arrayForEach(y, a.beforeRemove ? n.cleanNode : n.removeNode),
                          T = 0;
                          for (var C, P, O = n.virtualElements.firstChild(r); l = g[T]; T++) {
                              l.mappedNodes || n.utils.extend(l, t(r, s, l.arrayEntry, u, l.indexObservable));
                              for (var L = 0; P = l.mappedNodes[L]; O = P.nextSibling,
                              C = P,
                              L++)
                                  P !== O && n.virtualElements.insertAfter(r, P, C);
                              !l.initialized && u && (u(l.arrayEntry, l.mappedNodes, l.indexObservable),
                              l.initialized = !0)
                          }
                          E(a.beforeRemove, _),
                          E(a.afterMove, b),
                          E(a.afterAdd, w),
                          n.utils.domData.set(r, e, d)
                      }
                  }(),
                  n.exportSymbol("utils.setDomNodeChildrenFromArrayMapping", n.utils.setDomNodeChildrenFromArrayMapping),
                  n.nativeTemplateEngine = function() {
                      this.allowTemplateRewriting = !1
                  }
                  ,
                  n.nativeTemplateEngine.prototype = new n.templateEngine,
                  n.nativeTemplateEngine.prototype.constructor = n.nativeTemplateEngine,
                  n.nativeTemplateEngine.prototype.renderTemplateSource = function(t, e, r, i) {
                      var o = n.utils.ieVersion < 9 || !t.nodes ? null : t.nodes();
                      if (o)
                          return n.utils.makeArray(o.cloneNode(!0).childNodes);
                      var s = t.text();
                      return n.utils.parseHtmlFragment(s, i)
                  }
                  ,
                  n.nativeTemplateEngine.instance = new n.nativeTemplateEngine,
                  n.setTemplateEngine(n.nativeTemplateEngine.instance),
                  n.exportSymbol("nativeTemplateEngine", n.nativeTemplateEngine),
                  function() {
                      n.jqueryTmplTemplateEngine = function() {
                          var t = this.jQueryTmplVersion = function() {
                              if (!c || !c.tmpl)
                                  return 0;
                              try {
                                  if (c.tmpl.tag.tmpl.open.toString().indexOf("__") >= 0)
                                      return 2
                              } catch (t) {}
                              return 1
                          }();
                          this.renderTemplateSource = function(e, n, r, i) {
                              i = i || u,
                              r = r || {},
                              function() {
                                  if (t < 2)
                                      throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.")
                              }();
                              var o = e.data("precompiled");
                              if (!o) {
                                  var s = e.text() || "";
                                  s = "{{ko_with $item.koBindingContext}}" + s + "{{/ko_with}}",
                                  o = c.template(null, s),
                                  e.data("precompiled", o)
                              }
                              var a = function(t, e, n) {
                                  return c.tmpl(t, e, n)
                              }(o, [n.$data], c.extend({
                                  koBindingContext: n
                              }, r.templateOptions));
                              return a.appendTo(i.createElement("div")),
                              c.fragments = {},
                              a
                          }
                          ,
                          this.createJavaScriptEvaluatorBlock = function(t) {
                              return "{{ko_code ((function() { return " + t + " })()) }}"
                          }
                          ,
                          this.addTemplate = function(t, e) {
                              u.write("<script type='text/html' id='" + t + "'>" + e + "<\/script>")
                          }
                          ,
                          t > 0 && (c.tmpl.tag.ko_code = {
                              open: "__.push($1 || '');"
                          },
                          c.tmpl.tag.ko_with = {
                              open: "with($1) {",
                              close: "} "
                          })
                      }
                      ,
                      n.jqueryTmplTemplateEngine.prototype = new n.templateEngine,
                      n.jqueryTmplTemplateEngine.prototype.constructor = n.jqueryTmplTemplateEngine;
                      var t = new n.jqueryTmplTemplateEngine;
                      t.jQueryTmplVersion > 0 && n.setTemplateEngine(t),
                      n.exportSymbol("jqueryTmplTemplateEngine", n.jqueryTmplTemplateEngine)
                  }()
              }
              ,
              "function" == typeof t && t.amd ? t(["exports", "require"], s) : s("function" == typeof e && "object" == typeof r && "object" == typeof n ? n.exports || r : a.ko = {})
          }()
      }
      , {}],
      18: [function(e, n, r) {
          /*!
* Knockout ES5 plugin - https://github.com/SteveSanderson/knockout-es5
* Copyright (c) Steve Sanderson
* MIT license
*/
          !function(i, o) {
              "use strict";
              var s, a, u, l;
              function c(t, e) {
                  if (!t || "object" != typeof t)
                      throw new Error("When calling ko.track, you must pass an object as the first parameter.");
                  var n = h(t, !0);
                  return (e = e || Object.getOwnPropertyNames(t)).forEach((function(e) {
                      if (!(e in n) && !1 !== Object.getOwnPropertyDescriptor(t, e).configurable) {
                          var r = t[e]
                            , i = Array.isArray(r)
                            , a = s.isObservable(r) ? r : i ? s.observableArray(r) : s.observable(r);
                          Object.defineProperty(t, e, {
                              configurable: !0,
                              enumerable: !0,
                              get: a,
                              set: s.isWriteableObservable(a) ? a : o
                          }),
                          n[e] = a,
                          i && function(t, e) {
                              var n = null;
                              t.computed((function() {
                                  n && (n.dispose(),
                                  n = null);
                                  var r = e();
                                  r instanceof Array && (n = function(t, e, n) {
                                      return function(t, e) {
                                          u || (u = l());
                                          var n = u.get(e);
                                          if (!n) {
                                              n = new t.subscribable,
                                              u.set(e, n);
                                              var r = {};
                                              !function(t, e, n) {
                                                  ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"].forEach((function(r) {
                                                      var i = t[r];
                                                      t[r] = function() {
                                                          var t = i.apply(this, arguments);
                                                          return !0 !== n.pause && e.notifySubscribers(this),
                                                          t
                                                      }
                                                  }
                                                  ))
                                              }(e, n, r),
                                              function(t, e, n, r) {
                                                  ["remove", "removeAll", "destroy", "destroyAll", "replace"].forEach((function(i) {
                                                      Object.defineProperty(e, i, {
                                                          enumerable: !1,
                                                          value: function() {
                                                              var o;
                                                              r.pause = !0;
                                                              try {
                                                                  o = t.observableArray.fn[i].apply(t.observableArray(e), arguments)
                                                              } finally {
                                                                  r.pause = !1
                                                              }
                                                              return n.notifySubscribers(e),
                                                              o
                                                          }
                                                      })
                                                  }
                                                  ))
                                              }(t, e, n, r)
                                          }
                                          return n
                                      }(t, n).subscribe(e)
                                  }(t, e, r))
                              }
                              ))
                          }(s, a)
                      }
                  }
                  )),
                  t
              }
              function h(t, e) {
                  a || (a = l());
                  var n = a.get(t);
                  return !n && e && (n = {},
                  a.set(t, n)),
                  n
              }
              function p(t, e) {
                  if (a)
                      if (1 === arguments.length)
                          a.delete(t);
                      else {
                          var n = h(t, !1);
                          n && e.forEach((function(t) {
                              delete n[t]
                          }
                          ))
                      }
              }
              function f(t, e, n) {
                  var r = {
                      owner: t,
                      deferEvaluation: !0
                  };
                  if ("function" == typeof n)
                      r.read = n;
                  else {
                      if ("value"in n)
                          throw new Error('For ko.defineProperty, you must not specify a "value" for the property. You must provide a "get" function.');
                      if ("function" != typeof n.get)
                          throw new Error('For ko.defineProperty, the third parameter must be either an evaluator function, or an options object containing a function called "get".');
                      r.read = n.get,
                      r.write = n.set
                  }
                  return t[e] = this.computed(r),
                  c.call(this, t, [e]),
                  t
              }
              function d(t, e) {
                  if (!t || "object" != typeof t)
                      return null;
                  var n = h(t, !1);
                  return n && n[e] || null
              }
              function m(t, e) {
                  var n = d(t, e);
                  n && n.valueHasMutated()
              }
              function v(t) {
                  t.track = c,
                  t.untrack = p,
                  t.getObservable = d,
                  t.valueHasMutated = m,
                  t.defineProperty = f
              }
              !function() {
                  if ("object" == typeof r && "object" == typeof n) {
                      s = e("knockout");
                      var o = e("../lib/weakmap");
                      v(s),
                      l = function() {
                          return new o
                      }
                      ,
                      n.exports = s
                  } else
                      "function" == typeof t && t.amd ? t(["knockout"], (function(t) {
                          return s = t,
                          v(t),
                          l = function() {
                              return new i.WeakMap
                          }
                          ,
                          t
                      }
                      )) : "ko"in i && (s = i.ko,
                      v(i.ko),
                      l = function() {
                          return new i.WeakMap
                      }
                      )
              }()
          }(this)
      }
      , {
          "../lib/weakmap": 16,
          knockout: 17
      }],
      19: [function(t, e, n) {
          var r = t("../internal/baseDifference")
            , i = t("../internal/baseFlatten")
            , o = t("../lang/isArguments")
            , s = t("../lang/isArray");
          e.exports = function() {
              for (var t = -1, e = arguments.length; ++t < e; ) {
                  var n = arguments[t];
                  if (s(n) || o(n))
                      break
              }
              return r(n, i(arguments, !1, !0, ++t))
          }
      }
      , {
          "../internal/baseDifference": 39,
          "../internal/baseFlatten": 42,
          "../lang/isArguments": 83,
          "../lang/isArray": 84
      }],
      20: [function(t, e, n) {
          var r = t("../internal/baseCallback");
          e.exports = function(t, e, n) {
              var i = -1
                , o = t ? t.length : 0;
              for (e = r(e, n, 3); ++i < o; )
                  if (e(t[i], i, t))
                      return i;
              return -1
          }
      }
      , {
          "../internal/baseCallback": 37
      }],
      21: [function(t, e, n) {
          var r = t("../internal/baseFlatten")
            , i = t("../internal/isIterateeCall");
          e.exports = function(t, e, n) {
              var o = t ? t.length : 0;
              return n && i(t, e, n) && (e = !1),
              o ? r(t, e) : []
          }
      }
      , {
          "../internal/baseFlatten": 42,
          "../internal/isIterateeCall": 71
      }],
      22: [function(t, e, n) {
          var r = t("../internal/arrayMap")
            , i = t("../internal/arrayMax")
            , o = t("../internal/baseProperty")
            , s = o("length");
          e.exports = function(t) {
              for (var e = -1, n = (t && t.length && i(r(t, s))) >>> 0, a = Array(n); ++e < n; )
                  a[e] = r(t, o(e));
              return a
          }
      }
      , {
          "../internal/arrayMap": 33,
          "../internal/arrayMax": 34,
          "../internal/baseProperty": 53
      }],
      23: [function(t, e, n) {
          var r = t("./unzip");
          e.exports = function() {
              for (var t = arguments.length, e = Array(t); t--; )
                  e[t] = arguments[t];
              return r(e)
          }
      }
      , {
          "./unzip": 22
      }],
      24: [function(t, e, n) {
          var r = t("../lang/isArray");
          e.exports = function(t, e) {
              var n = -1
                , i = t ? t.length : 0
                , o = {};
              for (!i || e || r(t[0]) || (e = []); ++n < i; ) {
                  var s = t[n];
                  e ? o[s] = e[n] : s && (o[s[0]] = s[1])
              }
              return o
          }
      }
      , {
          "../lang/isArray": 84
      }],
      25: [function(t, e, n) {
          e.exports = t("./includes")
      }
      , {
          "./includes": 28
      }],
      26: [function(t, e, n) {
          var r = t("../internal/baseCallback")
            , i = t("../internal/baseEach")
            , o = t("../internal/baseFind")
            , s = t("../array/findIndex")
            , a = t("../lang/isArray");
          e.exports = function(t, e, n) {
              if (a(t)) {
                  var u = s(t, e, n);
                  return u > -1 ? t[u] : void 0
              }
              return e = r(e, n, 3),
              o(t, e, i)
          }
      }
      , {
          "../array/findIndex": 20,
          "../internal/baseCallback": 37,
          "../internal/baseEach": 40,
          "../internal/baseFind": 41,
          "../lang/isArray": 84
      }],
      27: [function(t, e, n) {
          var r = t("../internal/createAggregator")
            , i = Object.prototype.hasOwnProperty
            , o = r((function(t, e, n) {
              i.call(t, n) ? t[n].push(e) : t[n] = [e]
          }
          ));
          e.exports = o
      }
      , {
          "../internal/createAggregator": 60
      }],
      28: [function(t, e, n) {
          var r = t("../internal/baseIndexOf")
            , i = t("../lang/isArray")
            , o = t("../internal/isLength")
            , s = t("../lang/isString")
            , a = t("../object/values")
            , u = Math.max;
          e.exports = function(t, e, n) {
              var l = t ? t.length : 0;
              return o(l) || (l = (t = a(t)).length),
              !!l && (n = "number" == typeof n ? n < 0 ? u(l + n, 0) : n || 0 : 0,
              "string" == typeof t || !i(t) && s(t) ? n < l && t.indexOf(e, n) > -1 : r(t, e, n) > -1)
          }
      }
      , {
          "../internal/baseIndexOf": 46,
          "../internal/isLength": 72,
          "../lang/isArray": 84,
          "../lang/isString": 89,
          "../object/values": 96
      }],
      29: [function(t, e, n) {
          var r = t("../internal/arrayMap")
            , i = t("../internal/baseCallback")
            , o = t("../internal/baseMap")
            , s = t("../lang/isArray");
          e.exports = function(t, e, n) {
              return (s(t) ? r : o)(t, e = i(e, n, 3))
          }
      }
      , {
          "../internal/arrayMap": 33,
          "../internal/baseCallback": 37,
          "../internal/baseMap": 50,
          "../lang/isArray": 84
      }],
      30: [function(t, e, n) {
          var r = t("../internal/baseProperty")
            , i = t("./map");
          e.exports = function(t, e) {
              return i(t, r(e))
          }
      }
      , {
          "../internal/baseProperty": 53,
          "./map": 29
      }],
      31: [function(t, e, n) {
          var r = t("../internal/isLength")
            , i = t("../object/keys");
          e.exports = function(t) {
              var e = t ? t.length : 0;
              return r(e) ? e : i(t).length
          }
      }
      , {
          "../internal/isLength": 72,
          "../object/keys": 93
      }],
      32: [function(t, e, n) {
          (function(n) {
              var r = t("./cachePush")
                , i = t("../lang/isNative")
                , o = i(o = n.Set) && o
                , s = i(s = Object.create) && s;
              function a(t) {
                  var e = t ? t.length : 0;
                  for (this.data = {
                      hash: s(null),
                      set: new o
                  }; e--; )
                      this.push(t[e])
              }
              a.prototype.push = r,
              e.exports = a
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {
          "../lang/isNative": 87,
          "./cachePush": 59
      }],
      33: [function(t, e, n) {
          e.exports = function(t, e) {
              for (var n = -1, r = t.length, i = Array(r); ++n < r; )
                  i[n] = e(t[n], n, t);
              return i
          }
      }
      , {}],
      34: [function(t, e, n) {
          var r = Number.NEGATIVE_INFINITY;
          e.exports = function(t) {
              for (var e = -1, n = t.length, i = r; ++e < n; ) {
                  var o = t[e];
                  o > i && (i = o)
              }
              return i
          }
      }
      , {}],
      35: [function(t, e, n) {
          var r = Object.prototype.hasOwnProperty;
          e.exports = function(t, e, n, i) {
              return void 0 !== t && r.call(i, n) ? t : e
          }
      }
      , {}],
      36: [function(t, e, n) {
          var r = t("./baseCopy")
            , i = t("../object/keys");
          e.exports = function(t, e, n) {
              var o = i(e);
              if (!n)
                  return r(e, t, o);
              for (var s = -1, a = o.length; ++s < a; ) {
                  var u = o[s]
                    , l = t[u]
                    , c = n(l, e[u], u, t, e);
                  (c == c ? c === l : l != l) && (void 0 !== l || u in t) || (t[u] = c)
              }
              return t
          }
      }
      , {
          "../object/keys": 93,
          "./baseCopy": 38
      }],
      37: [function(t, e, n) {
          var r = t("./baseMatches")
            , i = t("./baseMatchesProperty")
            , o = t("./baseProperty")
            , s = t("./bindCallback")
            , a = t("../utility/identity")
            , u = t("./isBindable");
          e.exports = function(t, e, n) {
              var l = typeof t;
              return "function" == l ? void 0 !== e && u(t) ? s(t, e, n) : t : null == t ? a : "object" == l ? r(t) : void 0 === e ? o(t + "") : i(t + "", e)
          }
      }
      , {
          "../utility/identity": 104,
          "./baseMatches": 51,
          "./baseMatchesProperty": 52,
          "./baseProperty": 53,
          "./bindCallback": 57,
          "./isBindable": 69
      }],
      38: [function(t, e, n) {
          e.exports = function(t, e, n) {
              n || (n = e,
              e = {});
              for (var r = -1, i = n.length; ++r < i; ) {
                  var o = n[r];
                  e[o] = t[o]
              }
              return e
          }
      }
      , {}],
      39: [function(t, e, n) {
          var r = t("./baseIndexOf")
            , i = t("./cacheIndexOf")
            , o = t("./createCache");
          e.exports = function(t, e) {
              var n = t ? t.length : 0
                , s = [];
              if (!n)
                  return s;
              var a = -1
                , u = r
                , l = !0
                , c = l && e.length >= 200 && o(e)
                , h = e.length;
              c && (u = i,
              l = !1,
              e = c);
              t: for (; ++a < n; ) {
                  var p = t[a];
                  if (l && p == p) {
                      for (var f = h; f--; )
                          if (e[f] === p)
                              continue t;
                      s.push(p)
                  } else
                      u(e, p) < 0 && s.push(p)
              }
              return s
          }
      }
      , {
          "./baseIndexOf": 46,
          "./cacheIndexOf": 58,
          "./createCache": 62
      }],
      40: [function(t, e, n) {
          var r = t("./baseForOwn")
            , i = t("./isLength")
            , o = t("./toObject");
          e.exports = function(t, e) {
              var n = t ? t.length : 0;
              if (!i(n))
                  return r(t, e);
              for (var s = -1, a = o(t); ++s < n && !1 !== e(a[s], s, a); )
                  ;
              return t
          }
      }
      , {
          "./baseForOwn": 45,
          "./isLength": 72,
          "./toObject": 82
      }],
      41: [function(t, e, n) {
          e.exports = function(t, e, n, r) {
              var i;
              return n(t, (function(t, n, o) {
                  if (e(t, n, o))
                      return i = r ? n : t,
                      !1
              }
              )),
              i
          }
      }
      , {}],
      42: [function(t, e, n) {
          var r = t("../lang/isArguments")
            , i = t("../lang/isArray")
            , o = t("./isLength")
            , s = t("./isObjectLike");
          e.exports = function t(e, n, a, u) {
              for (var l = (u || 0) - 1, c = e.length, h = -1, p = []; ++l < c; ) {
                  var f = e[l];
                  if (s(f) && o(f.length) && (i(f) || r(f))) {
                      n && (f = t(f, n, a));
                      var d = -1
                        , m = f.length;
                      for (p.length += m; ++d < m; )
                          p[++h] = f[d]
                  } else
                      a || (p[++h] = f)
              }
              return p
          }
      }
      , {
          "../lang/isArguments": 83,
          "../lang/isArray": 84,
          "./isLength": 72,
          "./isObjectLike": 73
      }],
      43: [function(t, e, n) {
          var r = t("./toObject");
          e.exports = function(t, e, n) {
              for (var i = -1, o = r(t), s = n(t), a = s.length; ++i < a; ) {
                  var u = s[i];
                  if (!1 === e(o[u], u, o))
                      break
              }
              return t
          }
      }
      , {
          "./toObject": 82
      }],
      44: [function(t, e, n) {
          var r = t("./baseFor")
            , i = t("../object/keysIn");
          e.exports = function(t, e) {
              return r(t, e, i)
          }
      }
      , {
          "../object/keysIn": 94,
          "./baseFor": 43
      }],
      45: [function(t, e, n) {
          var r = t("./baseFor")
            , i = t("../object/keys");
          e.exports = function(t, e) {
              return r(t, e, i)
          }
      }
      , {
          "../object/keys": 93,
          "./baseFor": 43
      }],
      46: [function(t, e, n) {
          var r = t("./indexOfNaN");
          e.exports = function(t, e, n) {
              if (e != e)
                  return r(t, n);
              for (var i = (n || 0) - 1, o = t.length; ++i < o; )
                  if (t[i] === e)
                      return i;
              return -1
          }
      }
      , {
          "./indexOfNaN": 68
      }],
      47: [function(t, e, n) {
          var r = t("./baseIsEqualDeep");
          e.exports = function t(e, n, i, o, s, a) {
              if (e === n)
                  return 0 !== e || 1 / e == 1 / n;
              var u = typeof e
                , l = typeof n;
              return "function" != u && "object" != u && "function" != l && "object" != l || null == e || null == n ? e != e && n != n : r(e, n, t, i, o, s, a)
          }
      }
      , {
          "./baseIsEqualDeep": 48
      }],
      48: [function(t, e, n) {
          var r = t("./equalArrays")
            , i = t("./equalByTag")
            , o = t("./equalObjects")
            , s = t("../lang/isArray")
            , a = t("../lang/isTypedArray")
            , u = "[object Arguments]"
            , l = "[object Array]"
            , c = "[object Object]"
            , h = Object.prototype
            , p = h.hasOwnProperty
            , f = h.toString;
          e.exports = function(t, e, n, h, d, m, v) {
              var y = s(t)
                , g = s(e)
                , _ = l
                , b = l;
              y || ((_ = f.call(t)) == u ? _ = c : _ != c && (y = a(t))),
              g || ((b = f.call(e)) == u ? b = c : b != c && (g = a(e)));
              var w = _ == c
                , x = b == c
                , E = _ == b;
              if (E && !y && !w)
                  return i(t, e, _);
              var M = w && p.call(t, "__wrapped__")
                , S = x && p.call(e, "__wrapped__");
              if (M || S)
                  return n(M ? t.value() : t, S ? e.value() : e, h, d, m, v);
              if (!E)
                  return !1;
              m || (m = []),
              v || (v = []);
              for (var T = m.length; T--; )
                  if (m[T] == t)
                      return v[T] == e;
              m.push(t),
              v.push(e);
              var C = (y ? r : o)(t, e, n, h, d, m, v);
              return m.pop(),
              v.pop(),
              C
          }
      }
      , {
          "../lang/isArray": 84,
          "../lang/isTypedArray": 90,
          "./equalArrays": 63,
          "./equalByTag": 64,
          "./equalObjects": 65
      }],
      49: [function(t, e, n) {
          var r = t("./baseIsEqual")
            , i = Object.prototype.hasOwnProperty;
          e.exports = function(t, e, n, o, s) {
              var a = e.length;
              if (null == t)
                  return !a;
              for (var u = -1, l = !s; ++u < a; )
                  if (l && o[u] ? n[u] !== t[e[u]] : !i.call(t, e[u]))
                      return !1;
              for (u = -1; ++u < a; ) {
                  var c = e[u];
                  if (l && o[u])
                      var h = i.call(t, c);
                  else {
                      var p = t[c]
                        , f = n[u];
                      void 0 === (h = s ? s(p, f, c) : void 0) && (h = r(f, p, s, !0))
                  }
                  if (!h)
                      return !1
              }
              return !0
          }
      }
      , {
          "./baseIsEqual": 47
      }],
      50: [function(t, e, n) {
          var r = t("./baseEach");
          e.exports = function(t, e) {
              var n = [];
              return r(t, (function(t, r, i) {
                  n.push(e(t, r, i))
              }
              )),
              n
          }
      }
      , {
          "./baseEach": 40
      }],
      51: [function(t, e, n) {
          var r = t("./baseIsMatch")
            , i = t("./isStrictComparable")
            , o = t("../object/keys")
            , s = Object.prototype.hasOwnProperty;
          e.exports = function(t) {
              var e = o(t)
                , n = e.length;
              if (1 == n) {
                  var a = e[0]
                    , u = t[a];
                  if (i(u))
                      return function(t) {
                          return null != t && t[a] === u && s.call(t, a)
                      }
              }
              for (var l = Array(n), c = Array(n); n--; )
                  u = t[e[n]],
                  l[n] = u,
                  c[n] = i(u);
              return function(t) {
                  return r(t, e, l, c)
              }
          }
      }
      , {
          "../object/keys": 93,
          "./baseIsMatch": 49,
          "./isStrictComparable": 74
      }],
      52: [function(t, e, n) {
          var r = t("./baseIsEqual")
            , i = t("./isStrictComparable");
          e.exports = function(t, e) {
              return i(e) ? function(n) {
                  return null != n && n[t] === e
              }
              : function(n) {
                  return null != n && r(e, n[t], null, !0)
              }
          }
      }
      , {
          "./baseIsEqual": 47,
          "./isStrictComparable": 74
      }],
      53: [function(t, e, n) {
          e.exports = function(t) {
              return function(e) {
                  return null == e ? void 0 : e[t]
              }
          }
      }
      , {}],
      54: [function(t, e, n) {
          var r = t("../utility/identity")
            , i = t("./metaMap")
            , o = i ? function(t, e) {
              return i.set(t, e),
              t
          }
          : r;
          e.exports = o
      }
      , {
          "../utility/identity": 104,
          "./metaMap": 75
      }],
      55: [function(t, e, n) {
          e.exports = function(t) {
              return "string" == typeof t ? t : null == t ? "" : t + ""
          }
      }
      , {}],
      56: [function(t, e, n) {
          e.exports = function(t, e) {
              for (var n = -1, r = e.length, i = Array(r); ++n < r; )
                  i[n] = t[e[n]];
              return i
          }
      }
      , {}],
      57: [function(t, e, n) {
          var r = t("../utility/identity");
          e.exports = function(t, e, n) {
              if ("function" != typeof t)
                  return r;
              if (void 0 === e)
                  return t;
              switch (n) {
              case 1:
                  return function(n) {
                      return t.call(e, n)
                  }
                  ;
              case 3:
                  return function(n, r, i) {
                      return t.call(e, n, r, i)
                  }
                  ;
              case 4:
                  return function(n, r, i, o) {
                      return t.call(e, n, r, i, o)
                  }
                  ;
              case 5:
                  return function(n, r, i, o, s) {
                      return t.call(e, n, r, i, o, s)
                  }
              }
              return function() {
                  return t.apply(e, arguments)
              }
          }
      }
      , {
          "../utility/identity": 104
      }],
      58: [function(t, e, n) {
          var r = t("../lang/isObject");
          e.exports = function(t, e) {
              var n = t.data;
              return ("string" == typeof e || r(e) ? n.set.has(e) : n.hash[e]) ? 0 : -1
          }
      }
      , {
          "../lang/isObject": 88
      }],
      59: [function(t, e, n) {
          var r = t("../lang/isObject");
          e.exports = function(t) {
              var e = this.data;
              "string" == typeof t || r(t) ? e.set.add(t) : e.hash[t] = !0
          }
      }
      , {
          "../lang/isObject": 88
      }],
      60: [function(t, e, n) {
          var r = t("./baseCallback")
            , i = t("./baseEach")
            , o = t("../lang/isArray");
          e.exports = function(t, e) {
              return function(n, s, a) {
                  var u = e ? e() : {};
                  if (s = r(s, a, 3),
                  o(n))
                      for (var l = -1, c = n.length; ++l < c; ) {
                          var h = n[l];
                          t(u, h, s(h, l, n), n)
                      }
                  else
                      i(n, (function(e, n, r) {
                          t(u, e, s(e, n, r), r)
                      }
                      ));
                  return u
              }
          }
      }
      , {
          "../lang/isArray": 84,
          "./baseCallback": 37,
          "./baseEach": 40
      }],
      61: [function(t, e, n) {
          var r = t("./bindCallback")
            , i = t("./isIterateeCall");
          e.exports = function(t) {
              return function() {
                  var e = arguments.length
                    , n = arguments[0];
                  if (e < 2 || null == n)
                      return n;
                  if (e > 3 && i(arguments[1], arguments[2], arguments[3]) && (e = 2),
                  e > 3 && "function" == typeof arguments[e - 2])
                      var o = r(arguments[--e - 1], arguments[e--], 5);
                  else
                      e > 2 && "function" == typeof arguments[e - 1] && (o = arguments[--e]);
                  for (var s = 0; ++s < e; ) {
                      var a = arguments[s];
                      a && t(n, a, o)
                  }
                  return n
              }
          }
      }
      , {
          "./bindCallback": 57,
          "./isIterateeCall": 71
      }],
      62: [function(t, e, n) {
          (function(n) {
              var r = t("./SetCache")
                , i = t("../utility/constant")
                , o = t("../lang/isNative")
                , s = o(s = n.Set) && s
                , a = o(a = Object.create) && a
                , u = a && s ? function(t) {
                  return new r(t)
              }
              : i(null);
              e.exports = u
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {
          "../lang/isNative": 87,
          "../utility/constant": 103,
          "./SetCache": 32
      }],
      63: [function(t, e, n) {
          e.exports = function(t, e, n, r, i, o, s) {
              var a = -1
                , u = t.length
                , l = e.length
                , c = !0;
              if (u != l && !(i && l > u))
                  return !1;
              for (; c && ++a < u; ) {
                  var h = t[a]
                    , p = e[a];
                  if (c = void 0,
                  r && (c = i ? r(p, h, a) : r(h, p, a)),
                  void 0 === c)
                      if (i)
                          for (var f = l; f-- && (p = e[f],
                          !(c = h && h === p || n(h, p, r, i, o, s))); )
                              ;
                      else
                          c = h && h === p || n(h, p, r, i, o, s)
              }
              return !!c
          }
      }
      , {}],
      64: [function(t, e, n) {
          var r = "[object Boolean]"
            , i = "[object Date]"
            , o = "[object Error]"
            , s = "[object Number]"
            , a = "[object RegExp]"
            , u = "[object String]";
          e.exports = function(t, e, n) {
              switch (n) {
              case r:
              case i:
                  return +t == +e;
              case o:
                  return t.name == e.name && t.message == e.message;
              case s:
                  return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
              case a:
              case u:
                  return t == e + ""
              }
              return !1
          }
      }
      , {}],
      65: [function(t, e, n) {
          var r = t("../object/keys")
            , i = Object.prototype.hasOwnProperty;
          e.exports = function(t, e, n, o, s, a, u) {
              var l = r(t)
                , c = l.length;
              if (c != r(e).length && !s)
                  return !1;
              for (var h, p = -1; ++p < c; ) {
                  var f = l[p]
                    , d = i.call(e, f);
                  if (d) {
                      var m = t[f]
                        , v = e[f];
                      d = void 0,
                      o && (d = s ? o(v, m, f) : o(m, v, f)),
                      void 0 === d && (d = m && m === v || n(m, v, o, s, a, u))
                  }
                  if (!d)
                      return !1;
                  h || (h = "constructor" == f)
              }
              if (!h) {
                  var y = t.constructor
                    , g = e.constructor;
                  if (y != g && "constructor"in t && "constructor"in e && !("function" == typeof y && y instanceof y && "function" == typeof g && g instanceof g))
                      return !1
              }
              return !0
          }
      }
      , {
          "../object/keys": 93
      }],
      66: [function(t, e, n) {
          var r = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "`": "&#96;"
          };
          e.exports = function(t) {
              return r[t]
          }
      }
      , {}],
      67: [function(t, e, n) {
          var r = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029"
          };
          e.exports = function(t) {
              return "\\" + r[t]
          }
      }
      , {}],
      68: [function(t, e, n) {
          e.exports = function(t, e, n) {
              for (var r = t.length, i = n ? e || r : (e || 0) - 1; n ? i-- : ++i < r; ) {
                  var o = t[i];
                  if (o != o)
                      return i
              }
              return -1
          }
      }
      , {}],
      69: [function(t, e, n) {
          var r = t("./baseSetData")
            , i = t("../lang/isNative")
            , o = t("../support")
            , s = /^\s*function[ \n\r\t]+\w/
            , a = /\bthis\b/
            , u = Function.prototype.toString;
          e.exports = function(t) {
              var e = !(o.funcNames ? t.name : o.funcDecomp);
              if (!e) {
                  var n = u.call(t);
                  o.funcNames || (e = !s.test(n)),
                  e || (e = a.test(n) || i(t),
                  r(t, e))
              }
              return e
          }
      }
      , {
          "../lang/isNative": 87,
          "../support": 101,
          "./baseSetData": 54
      }],
      70: [function(t, e, n) {
          var r = Math.pow(2, 53) - 1;
          e.exports = function(t, e) {
              return e = null == e ? r : e,
              (t = +t) > -1 && t % 1 == 0 && t < e
          }
      }
      , {}],
      71: [function(t, e, n) {
          var r = t("./isIndex")
            , i = t("./isLength")
            , o = t("../lang/isObject");
          e.exports = function(t, e, n) {
              if (!o(n))
                  return !1;
              var s = typeof e;
              if ("number" == s)
                  var a = n.length
                    , u = i(a) && r(e, a);
              else
                  u = "string" == s && e in n;
              var l = n[e];
              return u && (t == t ? t === l : l != l)
          }
      }
      , {
          "../lang/isObject": 88,
          "./isIndex": 70,
          "./isLength": 72
      }],
      72: [function(t, e, n) {
          var r = Math.pow(2, 53) - 1;
          e.exports = function(t) {
              return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
          }
      }
      , {}],
      73: [function(t, e, n) {
          e.exports = function(t) {
              return t && "object" == typeof t || !1
          }
      }
      , {}],
      74: [function(t, e, n) {
          var r = t("../lang/isObject");
          e.exports = function(t) {
              return t == t && (0 === t ? 1 / t > 0 : !r(t))
          }
      }
      , {
          "../lang/isObject": 88
      }],
      75: [function(t, e, n) {
          (function(n) {
              var r = t("../lang/isNative")(r = n.WeakMap) && r
                , i = r && new r;
              e.exports = i
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {
          "../lang/isNative": 87
      }],
      76: [function(t, e, n) {
          var r = t("./toObject");
          e.exports = function(t, e) {
              t = r(t);
              for (var n = -1, i = e.length, o = {}; ++n < i; ) {
                  var s = e[n];
                  s in t && (o[s] = t[s])
              }
              return o
          }
      }
      , {
          "./toObject": 82
      }],
      77: [function(t, e, n) {
          var r = t("./baseForIn");
          e.exports = function(t, e) {
              var n = {};
              return r(t, (function(t, r, i) {
                  e(t, r, i) && (n[r] = t)
              }
              )),
              n
          }
      }
      , {
          "./baseForIn": 44
      }],
      78: [function(t, e, n) {
          e.exports = /<%-([\s\S]+?)%>/g
      }
      , {}],
      79: [function(t, e, n) {
          e.exports = /<%([\s\S]+?)%>/g
      }
      , {}],
      80: [function(t, e, n) {
          e.exports = /<%=([\s\S]+?)%>/g
      }
      , {}],
      81: [function(t, e, n) {
          var r = t("../lang/isArguments")
            , i = t("../lang/isArray")
            , o = t("./isIndex")
            , s = t("./isLength")
            , a = t("../object/keysIn")
            , u = t("../support")
            , l = Object.prototype.hasOwnProperty;
          e.exports = function(t) {
              for (var e = a(t), n = e.length, c = n && t.length, h = c && s(c) && (i(t) || u.nonEnumArgs && r(t)), p = -1, f = []; ++p < n; ) {
                  var d = e[p];
                  (h && o(d, c) || l.call(t, d)) && f.push(d)
              }
              return f
          }
      }
      , {
          "../lang/isArguments": 83,
          "../lang/isArray": 84,
          "../object/keysIn": 94,
          "../support": 101,
          "./isIndex": 70,
          "./isLength": 72
      }],
      82: [function(t, e, n) {
          var r = t("../lang/isObject");
          e.exports = function(t) {
              return r(t) ? t : Object(t)
          }
      }
      , {
          "../lang/isObject": 88
      }],
      83: [function(t, e, n) {
          var r = t("../internal/isLength")
            , i = t("../internal/isObjectLike")
            , o = "[object Arguments]"
            , s = Object.prototype.toString;
          e.exports = function(t) {
              var e = i(t) ? t.length : void 0;
              return r(e) && s.call(t) == o || !1
          }
      }
      , {
          "../internal/isLength": 72,
          "../internal/isObjectLike": 73
      }],
      84: [function(t, e, n) {
          var r = t("../internal/isLength")
            , i = t("./isNative")
            , o = t("../internal/isObjectLike")
            , s = Object.prototype.toString
            , a = i(a = Array.isArray) && a
            , u = a || function(t) {
              return o(t) && r(t.length) && "[object Array]" == s.call(t) || !1
          }
          ;
          e.exports = u
      }
      , {
          "../internal/isLength": 72,
          "../internal/isObjectLike": 73,
          "./isNative": 87
      }],
      85: [function(t, e, n) {
          var r = t("../internal/baseIsEqual")
            , i = t("../internal/bindCallback")
            , o = t("../internal/isStrictComparable");
          e.exports = function(t, e, n, s) {
              if (!(n = "function" == typeof n && i(n, s, 3)) && o(t) && o(e))
                  return t === e;
              var a = n ? n(t, e) : void 0;
              return void 0 === a ? r(t, e, n) : !!a
          }
      }
      , {
          "../internal/baseIsEqual": 47,
          "../internal/bindCallback": 57,
          "../internal/isStrictComparable": 74
      }],
      86: [function(t, e, n) {
          var r = t("../internal/isObjectLike")
            , i = "[object Error]"
            , o = Object.prototype.toString;
          e.exports = function(t) {
              return r(t) && "string" == typeof t.message && o.call(t) == i || !1
          }
      }
      , {
          "../internal/isObjectLike": 73
      }],
      87: [function(t, e, n) {
          var r = t("../string/escapeRegExp")
            , i = t("../internal/isObjectLike")
            , o = "[object Function]"
            , s = /^\[object .+?Constructor\]$/
            , a = Object.prototype
            , u = Function.prototype.toString
            , l = a.toString
            , c = RegExp("^" + r(l).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
          e.exports = function(t) {
              return null != t && (l.call(t) == o ? c.test(u.call(t)) : i(t) && s.test(t) || !1)
          }
      }
      , {
          "../internal/isObjectLike": 73,
          "../string/escapeRegExp": 98
      }],
      88: [function(t, e, n) {
          e.exports = function(t) {
              var e = typeof t;
              return "function" == e || t && "object" == e || !1
          }
      }
      , {}],
      89: [function(t, e, n) {
          var r = t("../internal/isObjectLike")
            , i = "[object String]"
            , o = Object.prototype.toString;
          e.exports = function(t) {
              return "string" == typeof t || r(t) && o.call(t) == i || !1
          }
      }
      , {
          "../internal/isObjectLike": 73
      }],
      90: [function(t, e, n) {
          var r = t("../internal/isLength")
            , i = t("../internal/isObjectLike")
            , o = {};
          o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0,
          o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1;
          var s = Object.prototype.toString;
          e.exports = function(t) {
              return i(t) && r(t.length) && o[s.call(t)] || !1
          }
      }
      , {
          "../internal/isLength": 72,
          "../internal/isObjectLike": 73
      }],
      91: [function(t, e, n) {
          var r = t("../internal/baseAssign")
            , i = t("../internal/createAssigner")(r);
          e.exports = i
      }
      , {
          "../internal/baseAssign": 36,
          "../internal/createAssigner": 61
      }],
      92: [function(t, e, n) {
          e.exports = t("./assign")
      }
      , {
          "./assign": 91
      }],
      93: [function(t, e, n) {
          var r = t("../internal/isLength")
            , i = t("../lang/isNative")
            , o = t("../lang/isObject")
            , s = t("../internal/shimKeys")
            , a = i(a = Object.keys) && a
            , u = a ? function(t) {
              if (t)
                  var e = t.constructor
                    , n = t.length;
              return "function" == typeof e && e.prototype === t || "function" != typeof t && n && r(n) ? s(t) : o(t) ? a(t) : []
          }
          : s;
          e.exports = u
      }
      , {
          "../internal/isLength": 72,
          "../internal/shimKeys": 81,
          "../lang/isNative": 87,
          "../lang/isObject": 88
      }],
      94: [function(t, e, n) {
          var r = t("../lang/isArguments")
            , i = t("../lang/isArray")
            , o = t("../internal/isIndex")
            , s = t("../internal/isLength")
            , a = t("../lang/isObject")
            , u = t("../support")
            , l = Object.prototype.hasOwnProperty;
          e.exports = function(t) {
              if (null == t)
                  return [];
              a(t) || (t = Object(t));
              var e = t.length;
              e = e && s(e) && (i(t) || u.nonEnumArgs && r(t)) && e || 0;
              for (var n = t.constructor, c = -1, h = "function" == typeof n && n.prototype === t, p = Array(e), f = e > 0; ++c < e; )
                  p[c] = c + "";
              for (var d in t)
                  f && o(d, e) || "constructor" == d && (h || !l.call(t, d)) || p.push(d);
              return p
          }
      }
      , {
          "../internal/isIndex": 70,
          "../internal/isLength": 72,
          "../lang/isArguments": 83,
          "../lang/isArray": 84,
          "../lang/isObject": 88,
          "../support": 101
      }],
      95: [function(t, e, n) {
          var r = t("../internal/baseFlatten")
            , i = t("../internal/bindCallback")
            , o = t("../internal/pickByArray")
            , s = t("../internal/pickByCallback");
          e.exports = function(t, e, n) {
              return null == t ? {} : "function" == typeof e ? s(t, i(e, n, 3)) : o(t, r(arguments, !1, !1, 1))
          }
      }
      , {
          "../internal/baseFlatten": 42,
          "../internal/bindCallback": 57,
          "../internal/pickByArray": 76,
          "../internal/pickByCallback": 77
      }],
      96: [function(t, e, n) {
          var r = t("../internal/baseValues")
            , i = t("./keys");
          e.exports = function(t) {
              return r(t, i(t))
          }
      }
      , {
          "../internal/baseValues": 56,
          "./keys": 93
      }],
      97: [function(t, e, n) {
          var r = t("../internal/baseToString")
            , i = t("../internal/escapeHtmlChar")
            , o = /[&<>"'`]/g
            , s = RegExp(o.source);
          e.exports = function(t) {
              return (t = r(t)) && s.test(t) ? t.replace(o, i) : t
          }
      }
      , {
          "../internal/baseToString": 55,
          "../internal/escapeHtmlChar": 66
      }],
      98: [function(t, e, n) {
          var r = t("../internal/baseToString")
            , i = /[.*+?^${}()|[\]\/\\]/g
            , o = RegExp(i.source);
          e.exports = function(t) {
              return (t = r(t)) && o.test(t) ? t.replace(i, "\\$&") : t
          }
      }
      , {
          "../internal/baseToString": 55
      }],
      99: [function(t, e, n) {
          var r = t("../internal/assignOwnDefaults")
            , i = t("../utility/attempt")
            , o = t("../internal/baseAssign")
            , s = t("../internal/baseToString")
            , a = t("../internal/baseValues")
            , u = t("../internal/escapeStringChar")
            , l = t("../lang/isError")
            , c = t("../internal/isIterateeCall")
            , h = t("../object/keys")
            , p = t("../internal/reInterpolate")
            , f = t("./templateSettings")
            , d = /\b__p \+= '';/g
            , m = /\b(__p \+=) '' \+/g
            , v = /(__e\(.*?\)|\b__t\)) \+\n'';/g
            , y = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g
            , g = /($^)/
            , _ = /['\n\r\u2028\u2029\\]/g;
          e.exports = function(t, e, n) {
              var b = f.imports._.templateSettings || f;
              n && c(t, e, n) && (e = n = null),
              t = s(t),
              e = o(o({}, n || e), b, r);
              var w, x, E = o(o({}, e.imports), b.imports, r), M = h(E), S = a(E, M), T = 0, C = e.interpolate || g, P = "__p += '", O = RegExp((e.escape || g).source + "|" + C.source + "|" + (C === p ? y : g).source + "|" + (e.evaluate || g).source + "|$", "g"), L = "sourceURL"in e ? "//# sourceURL=" + e.sourceURL + "\n" : "";
              t.replace(O, (function(e, n, r, i, o, s) {
                  return r || (r = i),
                  P += t.slice(T, s).replace(_, u),
                  n && (w = !0,
                  P += "' +\n__e(" + n + ") +\n'"),
                  o && (x = !0,
                  P += "';\n" + o + ";\n__p += '"),
                  r && (P += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                  T = s + e.length,
                  e
              }
              )),
              P += "';\n";
              var A = e.variable;
              A || (P = "with (obj) {\n" + P + "\n}\n"),
              P = (x ? P.replace(d, "") : P).replace(m, "$1").replace(v, "$1;"),
              P = "function(" + (A || "obj") + ") {\n" + (A ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (w ? ", __e = _.escape" : "") + (x ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + P + "return __p\n}";
              var k = i((function() {
                  return Function(M, L + "return " + P).apply(void 0, S)
              }
              ));
              if (k.source = P,
              l(k))
                  throw k;
              return k
          }
      }
      , {
          "../internal/assignOwnDefaults": 35,
          "../internal/baseAssign": 36,
          "../internal/baseToString": 55,
          "../internal/baseValues": 56,
          "../internal/escapeStringChar": 67,
          "../internal/isIterateeCall": 71,
          "../internal/reInterpolate": 80,
          "../lang/isError": 86,
          "../object/keys": 93,
          "../utility/attempt": 102,
          "./templateSettings": 100
      }],
      100: [function(t, e, n) {
          var r = t("./escape")
            , i = {
              escape: t("../internal/reEscape"),
              evaluate: t("../internal/reEvaluate"),
              interpolate: t("../internal/reInterpolate"),
              variable: "",
              imports: {
                  _: {
                      escape: r
                  }
              }
          };
          e.exports = i
      }
      , {
          "../internal/reEscape": 78,
          "../internal/reEvaluate": 79,
          "../internal/reInterpolate": 80,
          "./escape": 97
      }],
      101: [function(t, e, n) {
          (function(n) {
              var r = t("./lang/isNative")
                , i = /\bthis\b/
                , o = Object.prototype
                , s = (s = n.window) && s.document
                , a = o.propertyIsEnumerable
                , u = {};
              !function(t) {
                  u.funcDecomp = !r(n.WinRTError) && i.test((function() {
                      return this
                  }
                  )),
                  u.funcNames = "string" == typeof Function.name;
                  try {
                      u.dom = 11 === s.createDocumentFragment().nodeType
                  } catch (t) {
                      u.dom = !1
                  }
                  try {
                      u.nonEnumArgs = !a.call(arguments, 1)
                  } catch (t) {
                      u.nonEnumArgs = !0
                  }
              }(0, 0),
              e.exports = u
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {
          "./lang/isNative": 87
      }],
      102: [function(t, e, n) {
          var r = t("../lang/isError");
          e.exports = function() {
              var t = arguments.length
                , e = arguments[0];
              try {
                  for (var n = Array(t ? t - 1 : 0); --t > 0; )
                      n[t - 1] = arguments[t];
                  return e.apply(void 0, n)
              } catch (t) {
                  return r(t) ? t : new Error(t)
              }
          }
      }
      , {
          "../lang/isError": 86
      }],
      103: [function(t, e, n) {
          e.exports = function(t) {
              return function() {
                  return t
              }
          }
      }
      , {}],
      104: [function(t, e, n) {
          e.exports = function(t) {
              return t
          }
      }
      , {}],
      105: [function(e, n, r) {
          var i, o;
          i = this,
          o = function() {
              return function(t) {
                  var e = {};
                  function n(r) {
                      if (e[r])
                          return e[r].exports;
                      var i = e[r] = {
                          i: r,
                          l: !1,
                          exports: {}
                      };
                      return t[r].call(i.exports, i, i.exports, n),
                      i.l = !0,
                      i.exports
                  }
                  return n.m = t,
                  n.c = e,
                  n.d = function(t, e, r) {
                      n.o(t, e) || Object.defineProperty(t, e, {
                          enumerable: !0,
                          get: r
                      })
                  }
                  ,
                  n.r = function(t) {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                          value: "Module"
                      }),
                      Object.defineProperty(t, "__esModule", {
                          value: !0
                      })
                  }
                  ,
                  n.t = function(t, e) {
                      if (1 & e && (t = n(t)),
                      8 & e)
                          return t;
                      if (4 & e && "object" == typeof t && t && t.__esModule)
                          return t;
                      var r = Object.create(null);
                      if (n.r(r),
                      Object.defineProperty(r, "default", {
                          enumerable: !0,
                          value: t
                      }),
                      2 & e && "string" != typeof t)
                          for (var i in t)
                              n.d(r, i, function(e) {
                                  return t[e]
                              }
                              .bind(null, i));
                      return r
                  }
                  ,
                  n.n = function(t) {
                      var e = t && t.__esModule ? function() {
                          return t.default
                      }
                      : function() {
                          return t
                      }
                      ;
                      return n.d(e, "a", e),
                      e
                  }
                  ,
                  n.o = function(t, e) {
                      return Object.prototype.hasOwnProperty.call(t, e)
                  }
                  ,
                  n.p = "",
                  n(n.s = 90)
              }({
                  17: function(t, e, n) {
                      "use strict";
                      e.__esModule = !0,
                      e.default = void 0;
                      var r = n(18)
                        , i = function() {
                          function t() {}
                          return t.getFirstMatch = function(t, e) {
                              var n = e.match(t);
                              return n && n.length > 0 && n[1] || ""
                          }
                          ,
                          t.getSecondMatch = function(t, e) {
                              var n = e.match(t);
                              return n && n.length > 1 && n[2] || ""
                          }
                          ,
                          t.matchAndReturnConst = function(t, e, n) {
                              if (t.test(e))
                                  return n
                          }
                          ,
                          t.getWindowsVersionName = function(t) {
                              switch (t) {
                              case "NT":
                                  return "NT";
                              case "XP":
                                  return "XP";
                              case "NT 5.0":
                                  return "2000";
                              case "NT 5.1":
                                  return "XP";
                              case "NT 5.2":
                                  return "2003";
                              case "NT 6.0":
                                  return "Vista";
                              case "NT 6.1":
                                  return "7";
                              case "NT 6.2":
                                  return "8";
                              case "NT 6.3":
                                  return "8.1";
                              case "NT 10.0":
                                  return "10";
                              default:
                                  return
                              }
                          }
                          ,
                          t.getMacOSVersionName = function(t) {
                              var e = t.split(".").splice(0, 2).map((function(t) {
                                  return parseInt(t, 10) || 0
                              }
                              ));
                              if (e.push(0),
                              10 === e[0])
                                  switch (e[1]) {
                                  case 5:
                                      return "Leopard";
                                  case 6:
                                      return "Snow Leopard";
                                  case 7:
                                      return "Lion";
                                  case 8:
                                      return "Mountain Lion";
                                  case 9:
                                      return "Mavericks";
                                  case 10:
                                      return "Yosemite";
                                  case 11:
                                      return "El Capitan";
                                  case 12:
                                      return "Sierra";
                                  case 13:
                                      return "High Sierra";
                                  case 14:
                                      return "Mojave";
                                  case 15:
                                      return "Catalina";
                                  default:
                                      return
                                  }
                          }
                          ,
                          t.getAndroidVersionName = function(t) {
                              var e = t.split(".").splice(0, 2).map((function(t) {
                                  return parseInt(t, 10) || 0
                              }
                              ));
                              if (e.push(0),
                              !(1 === e[0] && e[1] < 5))
                                  return 1 === e[0] && e[1] < 6 ? "Cupcake" : 1 === e[0] && e[1] >= 6 ? "Donut" : 2 === e[0] && e[1] < 2 ? "Eclair" : 2 === e[0] && 2 === e[1] ? "Froyo" : 2 === e[0] && e[1] > 2 ? "Gingerbread" : 3 === e[0] ? "Honeycomb" : 4 === e[0] && e[1] < 1 ? "Ice Cream Sandwich" : 4 === e[0] && e[1] < 4 ? "Jelly Bean" : 4 === e[0] && e[1] >= 4 ? "KitKat" : 5 === e[0] ? "Lollipop" : 6 === e[0] ? "Marshmallow" : 7 === e[0] ? "Nougat" : 8 === e[0] ? "Oreo" : 9 === e[0] ? "Pie" : void 0
                          }
                          ,
                          t.getVersionPrecision = function(t) {
                              return t.split(".").length
                          }
                          ,
                          t.compareVersions = function(e, n, r) {
                              void 0 === r && (r = !1);
                              var i = t.getVersionPrecision(e)
                                , o = t.getVersionPrecision(n)
                                , s = Math.max(i, o)
                                , a = 0
                                , u = t.map([e, n], (function(e) {
                                  var n = s - t.getVersionPrecision(e)
                                    , r = e + new Array(n + 1).join(".0");
                                  return t.map(r.split("."), (function(t) {
                                      return new Array(20 - t.length).join("0") + t
                                  }
                                  )).reverse()
                              }
                              ));
                              for (r && (a = s - Math.min(i, o)),
                              s -= 1; s >= a; ) {
                                  if (u[0][s] > u[1][s])
                                      return 1;
                                  if (u[0][s] === u[1][s]) {
                                      if (s === a)
                                          return 0;
                                      s -= 1
                                  } else if (u[0][s] < u[1][s])
                                      return -1
                              }
                          }
                          ,
                          t.map = function(t, e) {
                              var n, r = [];
                              if (Array.prototype.map)
                                  return Array.prototype.map.call(t, e);
                              for (n = 0; n < t.length; n += 1)
                                  r.push(e(t[n]));
                              return r
                          }
                          ,
                          t.getBrowserAlias = function(t) {
                              return r.BROWSER_ALIASES_MAP[t]
                          }
                          ,
                          t.getBrowserTypeByAlias = function(t) {
                              return r.BROWSER_MAP[t] || ""
                          }
                          ,
                          t
                      }();
                      e.default = i,
                      t.exports = e.default
                  },
                  18: function(t, e, n) {
                      "use strict";
                      e.__esModule = !0,
                      e.ENGINE_MAP = e.OS_MAP = e.PLATFORMS_MAP = e.BROWSER_MAP = e.BROWSER_ALIASES_MAP = void 0,
                      e.BROWSER_ALIASES_MAP = {
                          "Amazon Silk": "amazon_silk",
                          "Android Browser": "android",
                          Bada: "bada",
                          BlackBerry: "blackberry",
                          Chrome: "chrome",
                          Chromium: "chromium",
                          Epiphany: "epiphany",
                          Firefox: "firefox",
                          Focus: "focus",
                          Generic: "generic",
                          "Google Search": "google_search",
                          Googlebot: "googlebot",
                          "Internet Explorer": "ie",
                          "K-Meleon": "k_meleon",
                          Maxthon: "maxthon",
                          "Microsoft Edge": "edge",
                          "MZ Browser": "mz",
                          "NAVER Whale Browser": "naver",
                          Opera: "opera",
                          "Opera Coast": "opera_coast",
                          PhantomJS: "phantomjs",
                          Puffin: "puffin",
                          QupZilla: "qupzilla",
                          QQ: "qq",
                          QQLite: "qqlite",
                          Safari: "safari",
                          Sailfish: "sailfish",
                          "Samsung Internet for Android": "samsung_internet",
                          SeaMonkey: "seamonkey",
                          Sleipnir: "sleipnir",
                          Swing: "swing",
                          Tizen: "tizen",
                          "UC Browser": "uc",
                          Vivaldi: "vivaldi",
                          "WebOS Browser": "webos",
                          WeChat: "wechat",
                          "Yandex Browser": "yandex",
                          Roku: "roku"
                      },
                      e.BROWSER_MAP = {
                          amazon_silk: "Amazon Silk",
                          android: "Android Browser",
                          bada: "Bada",
                          blackberry: "BlackBerry",
                          chrome: "Chrome",
                          chromium: "Chromium",
                          epiphany: "Epiphany",
                          firefox: "Firefox",
                          focus: "Focus",
                          generic: "Generic",
                          googlebot: "Googlebot",
                          google_search: "Google Search",
                          ie: "Internet Explorer",
                          k_meleon: "K-Meleon",
                          maxthon: "Maxthon",
                          edge: "Microsoft Edge",
                          mz: "MZ Browser",
                          naver: "NAVER Whale Browser",
                          opera: "Opera",
                          opera_coast: "Opera Coast",
                          phantomjs: "PhantomJS",
                          puffin: "Puffin",
                          qupzilla: "QupZilla",
                          qq: "QQ Browser",
                          qqlite: "QQ Browser Lite",
                          safari: "Safari",
                          sailfish: "Sailfish",
                          samsung_internet: "Samsung Internet for Android",
                          seamonkey: "SeaMonkey",
                          sleipnir: "Sleipnir",
                          swing: "Swing",
                          tizen: "Tizen",
                          uc: "UC Browser",
                          vivaldi: "Vivaldi",
                          webos: "WebOS Browser",
                          wechat: "WeChat",
                          yandex: "Yandex Browser"
                      },
                      e.PLATFORMS_MAP = {
                          tablet: "tablet",
                          mobile: "mobile",
                          desktop: "desktop",
                          tv: "tv"
                      },
                      e.OS_MAP = {
                          WindowsPhone: "Windows Phone",
                          Windows: "Windows",
                          MacOS: "macOS",
                          iOS: "iOS",
                          Android: "Android",
                          WebOS: "WebOS",
                          BlackBerry: "BlackBerry",
                          Bada: "Bada",
                          Tizen: "Tizen",
                          Linux: "Linux",
                          ChromeOS: "Chrome OS",
                          PlayStation4: "PlayStation 4",
                          Roku: "Roku"
                      },
                      e.ENGINE_MAP = {
                          EdgeHTML: "EdgeHTML",
                          Blink: "Blink",
                          Trident: "Trident",
                          Presto: "Presto",
                          Gecko: "Gecko",
                          WebKit: "WebKit"
                      }
                  },
                  90: function(t, e, n) {
                      "use strict";
                      e.__esModule = !0,
                      e.default = void 0;
                      var r, i = (r = n(91)) && r.__esModule ? r : {
                          default: r
                      }, o = n(18);
                      function s(t, e) {
                          for (var n = 0; n < e.length; n++) {
                              var r = e[n];
                              r.enumerable = r.enumerable || !1,
                              r.configurable = !0,
                              "value"in r && (r.writable = !0),
                              Object.defineProperty(t, r.key, r)
                          }
                      }
                      var a = function() {
                          function t() {}
                          var e, n;
                          return t.getParser = function(t, e) {
                              if (void 0 === e && (e = !1),
                              "string" != typeof t)
                                  throw new Error("UserAgent should be a string");
                              return new i.default(t,e)
                          }
                          ,
                          t.parse = function(t) {
                              return new i.default(t).getResult()
                          }
                          ,
                          e = t,
                          (n = [{
                              key: "BROWSER_MAP",
                              get: function() {
                                  return o.BROWSER_MAP
                              }
                          }, {
                              key: "ENGINE_MAP",
                              get: function() {
                                  return o.ENGINE_MAP
                              }
                          }, {
                              key: "OS_MAP",
                              get: function() {
                                  return o.OS_MAP
                              }
                          }, {
                              key: "PLATFORMS_MAP",
                              get: function() {
                                  return o.PLATFORMS_MAP
                              }
                          }]) && s(e, n),
                          t
                      }();
                      e.default = a,
                      t.exports = e.default
                  },
                  91: function(t, e, n) {
                      "use strict";
                      e.__esModule = !0,
                      e.default = void 0;
                      var r = u(n(92))
                        , i = u(n(93))
                        , o = u(n(94))
                        , s = u(n(95))
                        , a = u(n(17));
                      function u(t) {
                          return t && t.__esModule ? t : {
                              default: t
                          }
                      }
                      var l = function() {
                          function t(t, e) {
                              if (void 0 === e && (e = !1),
                              null == t || "" === t)
                                  throw new Error("UserAgent parameter can't be empty");
                              this._ua = t,
                              this.parsedResult = {},
                              !0 !== e && this.parse()
                          }
                          var e = t.prototype;
                          return e.getUA = function() {
                              return this._ua
                          }
                          ,
                          e.test = function(t) {
                              return t.test(this._ua)
                          }
                          ,
                          e.parseBrowser = function() {
                              var t = this;
                              this.parsedResult.browser = {};
                              var e = r.default.find((function(e) {
                                  if ("function" == typeof e.test)
                                      return e.test(t);
                                  if (e.test instanceof Array)
                                      return e.test.some((function(e) {
                                          return t.test(e)
                                      }
                                      ));
                                  throw new Error("Browser's test function is not valid")
                              }
                              ));
                              return e && (this.parsedResult.browser = e.describe(this.getUA())),
                              this.parsedResult.browser
                          }
                          ,
                          e.getBrowser = function() {
                              return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                          }
                          ,
                          e.getBrowserName = function(t) {
                              return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                          }
                          ,
                          e.getBrowserVersion = function() {
                              return this.getBrowser().version
                          }
                          ,
                          e.getOS = function() {
                              return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                          }
                          ,
                          e.parseOS = function() {
                              var t = this;
                              this.parsedResult.os = {};
                              var e = i.default.find((function(e) {
                                  if ("function" == typeof e.test)
                                      return e.test(t);
                                  if (e.test instanceof Array)
                                      return e.test.some((function(e) {
                                          return t.test(e)
                                      }
                                      ));
                                  throw new Error("Browser's test function is not valid")
                              }
                              ));
                              return e && (this.parsedResult.os = e.describe(this.getUA())),
                              this.parsedResult.os
                          }
                          ,
                          e.getOSName = function(t) {
                              var e = this.getOS().name;
                              return t ? String(e).toLowerCase() || "" : e || ""
                          }
                          ,
                          e.getOSVersion = function() {
                              return this.getOS().version
                          }
                          ,
                          e.getPlatform = function() {
                              return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                          }
                          ,
                          e.getPlatformType = function(t) {
                              void 0 === t && (t = !1);
                              var e = this.getPlatform().type;
                              return t ? String(e).toLowerCase() || "" : e || ""
                          }
                          ,
                          e.parsePlatform = function() {
                              var t = this;
                              this.parsedResult.platform = {};
                              var e = o.default.find((function(e) {
                                  if ("function" == typeof e.test)
                                      return e.test(t);
                                  if (e.test instanceof Array)
                                      return e.test.some((function(e) {
                                          return t.test(e)
                                      }
                                      ));
                                  throw new Error("Browser's test function is not valid")
                              }
                              ));
                              return e && (this.parsedResult.platform = e.describe(this.getUA())),
                              this.parsedResult.platform
                          }
                          ,
                          e.getEngine = function() {
                              return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                          }
                          ,
                          e.getEngineName = function(t) {
                              return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                          }
                          ,
                          e.parseEngine = function() {
                              var t = this;
                              this.parsedResult.engine = {};
                              var e = s.default.find((function(e) {
                                  if ("function" == typeof e.test)
                                      return e.test(t);
                                  if (e.test instanceof Array)
                                      return e.test.some((function(e) {
                                          return t.test(e)
                                      }
                                      ));
                                  throw new Error("Browser's test function is not valid")
                              }
                              ));
                              return e && (this.parsedResult.engine = e.describe(this.getUA())),
                              this.parsedResult.engine
                          }
                          ,
                          e.parse = function() {
                              return this.parseBrowser(),
                              this.parseOS(),
                              this.parsePlatform(),
                              this.parseEngine(),
                              this
                          }
                          ,
                          e.getResult = function() {
                              return Object.assign({}, this.parsedResult)
                          }
                          ,
                          e.satisfies = function(t) {
                              var e = this
                                , n = {}
                                , r = 0
                                , i = {}
                                , o = 0;
                              if (Object.keys(t).forEach((function(e) {
                                  var s = t[e];
                                  "string" == typeof s ? (i[e] = s,
                                  o += 1) : "object" == typeof s && (n[e] = s,
                                  r += 1)
                              }
                              )),
                              r > 0) {
                                  var s = Object.keys(n)
                                    , a = s.find((function(t) {
                                      return e.isOS(t)
                                  }
                                  ));
                                  if (a) {
                                      var u = this.satisfies(n[a]);
                                      if (void 0 !== u)
                                          return u
                                  }
                                  var l = s.find((function(t) {
                                      return e.isPlatform(t)
                                  }
                                  ));
                                  if (l) {
                                      var c = this.satisfies(n[l]);
                                      if (void 0 !== c)
                                          return c
                                  }
                              }
                              if (o > 0) {
                                  var h = Object.keys(i).find((function(t) {
                                      return e.isBrowser(t, !0)
                                  }
                                  ));
                                  if (void 0 !== h)
                                      return this.compareVersion(i[h])
                              }
                          }
                          ,
                          e.isBrowser = function(t, e) {
                              void 0 === e && (e = !1);
                              var n = this.getBrowserName().toLowerCase()
                                , r = t.toLowerCase()
                                , i = a.default.getBrowserTypeByAlias(r);
                              return e && i && (r = i.toLowerCase()),
                              r === n
                          }
                          ,
                          e.compareVersion = function(t) {
                              var e = [0]
                                , n = t
                                , r = !1
                                , i = this.getBrowserVersion();
                              if ("string" == typeof i)
                                  return ">" === t[0] || "<" === t[0] ? (n = t.substr(1),
                                  "=" === t[1] ? (r = !0,
                                  n = t.substr(2)) : e = [],
                                  ">" === t[0] ? e.push(1) : e.push(-1)) : "=" === t[0] ? n = t.substr(1) : "~" === t[0] && (r = !0,
                                  n = t.substr(1)),
                                  e.indexOf(a.default.compareVersions(i, n, r)) > -1
                          }
                          ,
                          e.isOS = function(t) {
                              return this.getOSName(!0) === String(t).toLowerCase()
                          }
                          ,
                          e.isPlatform = function(t) {
                              return this.getPlatformType(!0) === String(t).toLowerCase()
                          }
                          ,
                          e.isEngine = function(t) {
                              return this.getEngineName(!0) === String(t).toLowerCase()
                          }
                          ,
                          e.is = function(t) {
                              return this.isBrowser(t) || this.isOS(t) || this.isPlatform(t)
                          }
                          ,
                          e.some = function(t) {
                              var e = this;
                              return void 0 === t && (t = []),
                              t.some((function(t) {
                                  return e.is(t)
                              }
                              ))
                          }
                          ,
                          t
                      }();
                      e.default = l,
                      t.exports = e.default
                  },
                  92: function(t, e, n) {
                      "use strict";
                      e.__esModule = !0,
                      e.default = void 0;
                      var r, i = (r = n(17)) && r.__esModule ? r : {
                          default: r
                      }, o = /version\/(\d+(\.?_?\d+)+)/i, s = [{
                          test: [/googlebot/i],
                          describe: function(t) {
                              var e = {
                                  name: "Googlebot"
                              }
                                , n = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/opera/i],
                          describe: function(t) {
                              var e = {
                                  name: "Opera"
                              }
                                , n = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/opr\/|opios/i],
                          describe: function(t) {
                              var e = {
                                  name: "Opera"
                              }
                                , n = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/SamsungBrowser/i],
                          describe: function(t) {
                              var e = {
                                  name: "Samsung Internet for Android"
                              }
                                , n = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/Whale/i],
                          describe: function(t) {
                              var e = {
                                  name: "NAVER Whale Browser"
                              }
                                , n = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/MZBrowser/i],
                          describe: function(t) {
                              var e = {
                                  name: "MZ Browser"
                              }
                                , n = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/focus/i],
                          describe: function(t) {
                              var e = {
                                  name: "Focus"
                              }
                                , n = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/swing/i],
                          describe: function(t) {
                              var e = {
                                  name: "Swing"
                              }
                                , n = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/coast/i],
                          describe: function(t) {
                              var e = {
                                  name: "Opera Coast"
                              }
                                , n = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/yabrowser/i],
                          describe: function(t) {
                              var e = {
                                  name: "Yandex Browser"
                              }
                                , n = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/ucbrowser/i],
                          describe: function(t) {
                              var e = {
                                  name: "UC Browser"
                              }
                                , n = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/Maxthon|mxios/i],
                          describe: function(t) {
                              var e = {
                                  name: "Maxthon"
                              }
                                , n = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/epiphany/i],
                          describe: function(t) {
                              var e = {
                                  name: "Epiphany"
                              }
                                , n = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/puffin/i],
                          describe: function(t) {
                              var e = {
                                  name: "Puffin"
                              }
                                , n = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/sleipnir/i],
                          describe: function(t) {
                              var e = {
                                  name: "Sleipnir"
                              }
                                , n = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/k-meleon/i],
                          describe: function(t) {
                              var e = {
                                  name: "K-Meleon"
                              }
                                , n = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/micromessenger/i],
                          describe: function(t) {
                              var e = {
                                  name: "WeChat"
                              }
                                , n = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/qqbrowser/i],
                          describe: function(t) {
                              var e = {
                                  name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser"
                              }
                                , n = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/msie|trident/i],
                          describe: function(t) {
                              var e = {
                                  name: "Internet Explorer"
                              }
                                , n = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/\sedg\//i],
                          describe: function(t) {
                              var e = {
                                  name: "Microsoft Edge"
                              }
                                , n = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/edg([ea]|ios)/i],
                          describe: function(t) {
                              var e = {
                                  name: "Microsoft Edge"
                              }
                                , n = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/vivaldi/i],
                          describe: function(t) {
                              var e = {
                                  name: "Vivaldi"
                              }
                                , n = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/seamonkey/i],
                          describe: function(t) {
                              var e = {
                                  name: "SeaMonkey"
                              }
                                , n = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/sailfish/i],
                          describe: function(t) {
                              var e = {
                                  name: "Sailfish"
                              }
                                , n = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/silk/i],
                          describe: function(t) {
                              var e = {
                                  name: "Amazon Silk"
                              }
                                , n = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/phantom/i],
                          describe: function(t) {
                              var e = {
                                  name: "PhantomJS"
                              }
                                , n = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/slimerjs/i],
                          describe: function(t) {
                              var e = {
                                  name: "SlimerJS"
                              }
                                , n = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                          describe: function(t) {
                              var e = {
                                  name: "BlackBerry"
                              }
                                , n = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/(web|hpw)[o0]s/i],
                          describe: function(t) {
                              var e = {
                                  name: "WebOS Browser"
                              }
                                , n = i.default.getFirstMatch(o, t) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/bada/i],
                          describe: function(t) {
                              var e = {
                                  name: "Bada"
                              }
                                , n = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/tizen/i],
                          describe: function(t) {
                              var e = {
                                  name: "Tizen"
                              }
                                , n = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/qupzilla/i],
                          describe: function(t) {
                              var e = {
                                  name: "QupZilla"
                              }
                                , n = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/firefox|iceweasel|fxios/i],
                          describe: function(t) {
                              var e = {
                                  name: "Firefox"
                              }
                                , n = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/chromium/i],
                          describe: function(t) {
                              var e = {
                                  name: "Chromium"
                              }
                                , n = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/chrome|crios|crmo/i],
                          describe: function(t) {
                              var e = {
                                  name: "Chrome"
                              }
                                , n = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/GSA/i],
                          describe: function(t) {
                              var e = {
                                  name: "Google Search"
                              }
                                , n = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: function(t) {
                              var e = !t.test(/like android/i)
                                , n = t.test(/android/i);
                              return e && n
                          },
                          describe: function(t) {
                              var e = {
                                  name: "Android Browser"
                              }
                                , n = i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/playstation 4/i],
                          describe: function(t) {
                              var e = {
                                  name: "PlayStation 4"
                              }
                                , n = i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/safari|applewebkit/i],
                          describe: function(t) {
                              var e = {
                                  name: "Safari"
                              }
                                , n = i.default.getFirstMatch(o, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/.*/i],
                          describe: function(t) {
                              var e = -1 !== t.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                              return {
                                  name: i.default.getFirstMatch(e, t),
                                  version: i.default.getSecondMatch(e, t)
                              }
                          }
                      }];
                      e.default = s,
                      t.exports = e.default
                  },
                  93: function(t, e, n) {
                      "use strict";
                      e.__esModule = !0,
                      e.default = void 0;
                      var r, i = (r = n(17)) && r.__esModule ? r : {
                          default: r
                      }, o = n(18), s = [{
                          test: [/Roku\/DVP/],
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
                              return {
                                  name: o.OS_MAP.Roku,
                                  version: e
                              }
                          }
                      }, {
                          test: [/windows phone/i],
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
                              return {
                                  name: o.OS_MAP.WindowsPhone,
                                  version: e
                              }
                          }
                      }, {
                          test: [/windows/i],
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t)
                                , n = i.default.getWindowsVersionName(e);
                              return {
                                  name: o.OS_MAP.Windows,
                                  version: e,
                                  versionName: n
                              }
                          }
                      }, {
                          test: [/macintosh/i],
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, ".")
                                , n = i.default.getMacOSVersionName(e)
                                , r = {
                                  name: o.OS_MAP.MacOS,
                                  version: e
                              };
                              return n && (r.versionName = n),
                              r
                          }
                      }, {
                          test: [/(ipod|iphone|ipad)/i],
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
                              return {
                                  name: o.OS_MAP.iOS,
                                  version: e
                              }
                          }
                      }, {
                          test: function(t) {
                              var e = !t.test(/like android/i)
                                , n = t.test(/android/i);
                              return e && n
                          },
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t)
                                , n = i.default.getAndroidVersionName(e)
                                , r = {
                                  name: o.OS_MAP.Android,
                                  version: e
                              };
                              return n && (r.versionName = n),
                              r
                          }
                      }, {
                          test: [/(web|hpw)[o0]s/i],
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t)
                                , n = {
                                  name: o.OS_MAP.WebOS
                              };
                              return e && e.length && (n.version = e),
                              n
                          }
                      }, {
                          test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || i.default.getFirstMatch(/\bbb(\d+)/i, t);
                              return {
                                  name: o.OS_MAP.BlackBerry,
                                  version: e
                              }
                          }
                      }, {
                          test: [/bada/i],
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
                              return {
                                  name: o.OS_MAP.Bada,
                                  version: e
                              }
                          }
                      }, {
                          test: [/tizen/i],
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
                              return {
                                  name: o.OS_MAP.Tizen,
                                  version: e
                              }
                          }
                      }, {
                          test: [/linux/i],
                          describe: function() {
                              return {
                                  name: o.OS_MAP.Linux
                              }
                          }
                      }, {
                          test: [/CrOS/],
                          describe: function() {
                              return {
                                  name: o.OS_MAP.ChromeOS
                              }
                          }
                      }, {
                          test: [/PlayStation 4/],
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
                              return {
                                  name: o.OS_MAP.PlayStation4,
                                  version: e
                              }
                          }
                      }];
                      e.default = s,
                      t.exports = e.default
                  },
                  94: function(t, e, n) {
                      "use strict";
                      e.__esModule = !0,
                      e.default = void 0;
                      var r, i = (r = n(17)) && r.__esModule ? r : {
                          default: r
                      }, o = n(18), s = [{
                          test: [/googlebot/i],
                          describe: function() {
                              return {
                                  type: "bot",
                                  vendor: "Google"
                              }
                          }
                      }, {
                          test: [/huawei/i],
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/(can-l01)/i, t) && "Nova"
                                , n = {
                                  type: o.PLATFORMS_MAP.mobile,
                                  vendor: "Huawei"
                              };
                              return e && (n.model = e),
                              n
                          }
                      }, {
                          test: [/nexus\s*(?:7|8|9|10).*/i],
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.tablet,
                                  vendor: "Nexus"
                              }
                          }
                      }, {
                          test: [/ipad/i],
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.tablet,
                                  vendor: "Apple",
                                  model: "iPad"
                              }
                          }
                      }, {
                          test: [/kftt build/i],
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.tablet,
                                  vendor: "Amazon",
                                  model: "Kindle Fire HD 7"
                              }
                          }
                      }, {
                          test: [/silk/i],
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.tablet,
                                  vendor: "Amazon"
                              }
                          }
                      }, {
                          test: [/tablet(?! pc)/i],
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.tablet
                              }
                          }
                      }, {
                          test: function(t) {
                              var e = t.test(/ipod|iphone/i)
                                , n = t.test(/like (ipod|iphone)/i);
                              return e && !n
                          },
                          describe: function(t) {
                              var e = i.default.getFirstMatch(/(ipod|iphone)/i, t);
                              return {
                                  type: o.PLATFORMS_MAP.mobile,
                                  vendor: "Apple",
                                  model: e
                              }
                          }
                      }, {
                          test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.mobile,
                                  vendor: "Nexus"
                              }
                          }
                      }, {
                          test: [/[^-]mobi/i],
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.mobile
                              }
                          }
                      }, {
                          test: function(t) {
                              return "blackberry" === t.getBrowserName(!0)
                          },
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.mobile,
                                  vendor: "BlackBerry"
                              }
                          }
                      }, {
                          test: function(t) {
                              return "bada" === t.getBrowserName(!0)
                          },
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.mobile
                              }
                          }
                      }, {
                          test: function(t) {
                              return "windows phone" === t.getBrowserName()
                          },
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.mobile,
                                  vendor: "Microsoft"
                              }
                          }
                      }, {
                          test: function(t) {
                              var e = Number(String(t.getOSVersion()).split(".")[0]);
                              return "android" === t.getOSName(!0) && e >= 3
                          },
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.tablet
                              }
                          }
                      }, {
                          test: function(t) {
                              return "android" === t.getOSName(!0)
                          },
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.mobile
                              }
                          }
                      }, {
                          test: function(t) {
                              return "macos" === t.getOSName(!0)
                          },
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.desktop,
                                  vendor: "Apple"
                              }
                          }
                      }, {
                          test: function(t) {
                              return "windows" === t.getOSName(!0)
                          },
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.desktop
                              }
                          }
                      }, {
                          test: function(t) {
                              return "linux" === t.getOSName(!0)
                          },
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.desktop
                              }
                          }
                      }, {
                          test: function(t) {
                              return "playstation 4" === t.getOSName(!0)
                          },
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.tv
                              }
                          }
                      }, {
                          test: function(t) {
                              return "roku" === t.getOSName(!0)
                          },
                          describe: function() {
                              return {
                                  type: o.PLATFORMS_MAP.tv
                              }
                          }
                      }];
                      e.default = s,
                      t.exports = e.default
                  },
                  95: function(t, e, n) {
                      "use strict";
                      e.__esModule = !0,
                      e.default = void 0;
                      var r, i = (r = n(17)) && r.__esModule ? r : {
                          default: r
                      }, o = n(18), s = [{
                          test: function(t) {
                              return "microsoft edge" === t.getBrowserName(!0)
                          },
                          describe: function(t) {
                              if (/\sedg\//i.test(t))
                                  return {
                                      name: o.ENGINE_MAP.Blink
                                  };
                              var e = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
                              return {
                                  name: o.ENGINE_MAP.EdgeHTML,
                                  version: e
                              }
                          }
                      }, {
                          test: [/trident/i],
                          describe: function(t) {
                              var e = {
                                  name: o.ENGINE_MAP.Trident
                              }
                                , n = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: function(t) {
                              return t.test(/presto/i)
                          },
                          describe: function(t) {
                              var e = {
                                  name: o.ENGINE_MAP.Presto
                              }
                                , n = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: function(t) {
                              var e = t.test(/gecko/i)
                                , n = t.test(/like gecko/i);
                              return e && !n
                          },
                          describe: function(t) {
                              var e = {
                                  name: o.ENGINE_MAP.Gecko
                              }
                                , n = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }, {
                          test: [/(apple)?webkit\/537\.36/i],
                          describe: function() {
                              return {
                                  name: o.ENGINE_MAP.Blink
                              }
                          }
                      }, {
                          test: [/(apple)?webkit/i],
                          describe: function(t) {
                              var e = {
                                  name: o.ENGINE_MAP.WebKit
                              }
                                , n = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
                              return n && (e.version = n),
                              e
                          }
                      }];
                      e.default = s,
                      t.exports = e.default
                  }
              })
          }
          ,
          "object" == typeof r && "object" == typeof n ? n.exports = o() : "function" == typeof t && t.amd ? t([], o) : "object" == typeof r ? r.bowser = o() : i.bowser = o()
      }
      , {}],
      106: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./support/Css")
            , o = t("./util/positionAbsolutely")
            , s = t("./util/dom").setTransform
            , a = t("./util/clearOwnProperties");
          function u(t, e, n, r, o) {
              if ((o = o || {}).perspective = o.perspective || {},
              o.perspective.extraTransforms = null != o.perspective.extraTransforms ? o.perspective.extraTransforms : "",
              (o.perspective.radius || o.perspective.extraTransforms) && !i())
                  throw new Error("CSS transforms on hotspots are not supported on this browser");
              this._domElement = t,
              this._parentDomElement = e,
              this._view = n,
              this._coords = {},
              this._perspective = {},
              this.setPosition(r),
              this._parentDomElement.appendChild(this._domElement),
              this.setPerspective(o.perspective),
              this._visible = !0,
              this._position = {
                  x: 0,
                  y: 0
              }
          }
          r(u),
          u.prototype.destroy = function() {
              this._parentDomElement.removeChild(this._domElement),
              a(this)
          }
          ,
          u.prototype.domElement = function() {
              return this._domElement
          }
          ,
          u.prototype.position = function() {
              return this._coords
          }
          ,
          u.prototype.setPosition = function(t) {
              for (var e in t)
                  this._coords[e] = t[e];
              this._update()
          }
          ,
          u.prototype.perspective = function() {
              return this._perspective
          }
          ,
          u.prototype.setPerspective = function(t) {
              for (var e in t)
                  this._perspective[e] = t[e];
              this._update()
          }
          ,
          u.prototype.show = function() {
              this._visible || (this._visible = !0,
              this._update())
          }
          ,
          u.prototype.hide = function() {
              this._visible && (this._visible = !1,
              this._update())
          }
          ,
          u.prototype._update = function() {
              var t, e, n = this._domElement, r = this._coords, i = this._position, o = !1;
              if (this._visible) {
                  var s = this._view;
                  this._perspective.radius ? (o = !0,
                  this._setEmbeddedPosition(s, r)) : (s.coordinatesToScreen(r, i),
                  t = i.x,
                  e = i.y,
                  null != t && null != e && (o = !0,
                  this._setPosition(t, e)))
              }
              o ? (n.style.display = "block",
              n.style.position = "absolute") : (n.style.display = "none",
              n.style.position = "")
          }
          ,
          u.prototype._setEmbeddedPosition = function(t, e) {
              var n = t.coordinatesToPerspectiveTransform(e, this._perspective.radius, this._perspective.extraTransforms);
              s(this._domElement, n)
          }
          ,
          u.prototype._setPosition = function(t, e) {
              o(this._domElement, t, e, this._perspective.extraTransforms)
          }
          ,
          e.exports = u
      }
      , {
          "./support/Css": 173,
          "./util/clearOwnProperties": 182,
          "./util/dom": 191,
          "./util/positionAbsolutely": 202,
          "minimal-event-emitter": 210
      }],
      107: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./Hotspot")
            , o = t("./util/calcRect")
            , s = t("./support/cssPointerEvents")
            , a = t("./util/positionAbsolutely")
            , u = t("./util/dom").setAbsolute
            , l = t("./util/dom").setOverflowHidden
            , c = t("./util/dom").setOverflowVisible
            , h = t("./util/dom").setNullSize
            , p = t("./util/dom").setPixelSize
            , f = t("./util/dom").setWithVendorPrefix("pointer-events")
            , d = t("./util/clearOwnProperties");
          function m(t, e, n, r, i) {
              i = i || {},
              this._parentDomElement = t,
              this._stage = e,
              this._view = n,
              this._renderLoop = r,
              this._hotspots = [],
              this._visible = !0,
              this._rect = i.rect,
              this._visibilityOrRectChanged = !0,
              this._stageWidth = null,
              this._stageHeight = null,
              this._tmpRect = {},
              this._hotspotContainerWrapper = document.createElement("div"),
              u(this._hotspotContainerWrapper),
              f(this._hotspotContainerWrapper, "none"),
              this._parentDomElement.appendChild(this._hotspotContainerWrapper),
              this._hotspotContainer = document.createElement("div"),
              u(this._hotspotContainer),
              f(this._hotspotContainer, "all"),
              this._hotspotContainerWrapper.appendChild(this._hotspotContainer),
              this._updateHandler = this._update.bind(this),
              this._renderLoop.addEventListener("afterRender", this._updateHandler)
          }
          r(m),
          m.prototype.destroy = function() {
              for (; this._hotspots.length; )
                  this.destroyHotspot(this._hotspots[0]);
              this._parentDomElement.removeChild(this._hotspotContainerWrapper),
              this._renderLoop.removeEventListener("afterRender", this._updateHandler),
              d(this)
          }
          ,
          m.prototype.domElement = function() {
              return this._hotspotContainer
          }
          ,
          m.prototype.setRect = function(t) {
              t && !s() && "undefined" != typeof console && console.warn("Using a rect effect is not fully supported on this browser. Hotspots may not be shown."),
              this._rect = t,
              this._visibilityOrRectChanged = !0
          }
          ,
          m.prototype.rect = function() {
              return this._rect
          }
          ,
          m.prototype.createHotspot = function(t, e, n) {
              e = e || {};
              var r = new i(t,this._hotspotContainer,this._view,e,n);
              return this._hotspots.push(r),
              r._update(),
              this.emit("hotspotsChange"),
              r
          }
          ,
          m.prototype.hasHotspot = function(t) {
              return this._hotspots.indexOf(t) >= 0
          }
          ,
          m.prototype.listHotspots = function() {
              return [].concat(this._hotspots)
          }
          ,
          m.prototype.destroyHotspot = function(t) {
              var e = this._hotspots.indexOf(t);
              if (e < 0)
                  throw new Error("No such hotspot");
              this._hotspots.splice(e, 1),
              t.destroy(),
              this.emit("hotspotsChange")
          }
          ,
          m.prototype.hide = function() {
              this._visible && (this._visible = !1,
              this._visibilityOrRectChanged = !0,
              this._update())
          }
          ,
          m.prototype.show = function() {
              this._visible || (this._visible = !0,
              this._visibilityOrRectChanged = !0,
              this._update())
          }
          ,
          m.prototype._update = function() {
              var t = this._hotspotContainerWrapper
                , e = this._stage.width()
                , n = this._stage.height()
                , r = this._tmpRect;
              if (this._visibilityOrRectChanged || this._rect && (e !== this._stageWidth || n !== this._stageHeight)) {
                  var i = this._visible && !(this._rect && !s());
                  t.style.display = i ? "block" : "none",
                  i && (this._rect ? (o(e, n, this._rect, r),
                  a(t, e * r.x, n * r.y),
                  p(t, e * r.width, n * r.height),
                  l(t)) : (a(t, 0, 0),
                  h(t),
                  c(t))),
                  this._stageWidth = e,
                  this._stageHeight = n,
                  this._visibilityOrRectChanged = !1
              }
              for (var u = 0; u < this._hotspots.length; u++)
                  this._hotspots[u]._update()
          }
          ,
          e.exports = m
      }
      , {
          "./Hotspot": 106,
          "./support/cssPointerEvents": 176,
          "./util/calcRect": 178,
          "./util/clearOwnProperties": 182,
          "./util/dom": 191,
          "./util/positionAbsolutely": 202,
          "minimal-event-emitter": 210
      }],
      108: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./util/extend")
            , o = t("./util/clearOwnProperties");
          function s(t, e, n, r, i) {
              i = i || {};
              var o = this;
              this._source = t,
              this._geometry = e,
              this._view = n,
              this._textureStore = r,
              this._effects = i.effects || {},
              this._fixedLevelIndex = null,
              this._viewChangeHandler = function() {
                  o.emit("viewChange", o.view())
              }
              ,
              this._view.addEventListener("change", this._viewChangeHandler),
              this._textureStoreChangeHandler = function() {
                  o.emit("textureStoreChange", o.textureStore())
              }
              ,
              this._textureStore.addEventListener("textureLoad", this._textureStoreChangeHandler),
              this._textureStore.addEventListener("textureError", this._textureStoreChangeHandler),
              this._textureStore.addEventListener("textureInvalid", this._textureStoreChangeHandler)
          }
          r(s),
          s.prototype.destroy = function() {
              this._view.removeEventListener("change", this._viewChangeHandler),
              this._textureStore.removeEventListener("textureLoad", this._textureStoreChangeHandler),
              this._textureStore.removeEventListener("textureError", this._textureStoreChangeHandler),
              this._textureStore.removeEventListener("textureInvalid", this._textureStoreChangeHandler),
              o(this)
          }
          ,
          s.prototype.source = function() {
              return this._source
          }
          ,
          s.prototype.geometry = function() {
              return this._geometry
          }
          ,
          s.prototype.view = function() {
              return this._view
          }
          ,
          s.prototype.textureStore = function() {
              return this._textureStore
          }
          ,
          s.prototype.effects = function() {
              return this._effects
          }
          ,
          s.prototype.setEffects = function(t) {
              this._effects = t,
              this.emit("effectsChange", this._effects)
          }
          ,
          s.prototype.mergeEffects = function(t) {
              i(this._effects, t),
              this.emit("effectsChange", this._effects)
          }
          ,
          s.prototype.fixedLevel = function() {
              return this._fixedLevelIndex
          }
          ,
          s.prototype.setFixedLevel = function(t) {
              if (t !== this._fixedLevelIndex) {
                  if (null != t && (t >= this._geometry.levelList.length || t < 0))
                      throw new Error("Level index out of range: " + t);
                  this._fixedLevelIndex = t,
                  this.emit("fixedLevelChange", this._fixedLevelIndex)
              }
          }
          ,
          s.prototype._selectLevel = function() {
              return null != this._fixedLevelIndex ? this._geometry.levelList[this._fixedLevelIndex] : this._view.selectLevel(this._geometry.selectableLevelList)
          }
          ,
          s.prototype.visibleTiles = function(t) {
              var e = this._selectLevel();
              return this._geometry.visibleTiles(this._view, e, t)
          }
          ,
          s.prototype.pinLevel = function(t) {
              for (var e = this._geometry.levelList[t], n = this._geometry.levelTiles(e), r = 0; r < n.length; r++)
                  this._textureStore.pin(n[r])
          }
          ,
          s.prototype.unpinLevel = function(t) {
              for (var e = this._geometry.levelList[t], n = this._geometry.levelTiles(e), r = 0; r < n.length; r++)
                  this._textureStore.unpin(n[r])
          }
          ,
          s.prototype.pinFirstLevel = function() {
              return this.pinLevel(0)
          }
          ,
          s.prototype.unpinFirstLevel = function() {
              return this.unpinLevel(0)
          }
          ,
          e.exports = s
      }
      , {
          "./util/clearOwnProperties": 182,
          "./util/extend": 192,
          "minimal-event-emitter": 210
      }],
      109: [function(t, e, n) {
          "use strict";
          function r(t) {
              this.constructor.super_.apply(this, arguments),
              this.message = t
          }
          t("./util/inherits")(r, Error),
          e.exports = r
      }
      , {
          "./util/inherits": 195
      }],
      110: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./util/clearOwnProperties");
          function o(t) {
              var e = this;
              this._stage = t,
              this._running = !1,
              this._rendering = !1,
              this._requestHandle = null,
              this._boundLoop = this._loop.bind(this),
              this._renderInvalidHandler = function() {
                  e._rendering || e.renderOnNextFrame()
              }
              ,
              this._stage.addEventListener("renderInvalid", this._renderInvalidHandler)
          }
          r(o),
          o.prototype.destroy = function() {
              this.stop(),
              this._stage.removeEventListener("renderInvalid", this._renderInvalidHandler),
              i(this)
          }
          ,
          o.prototype.stage = function() {
              return this._stage
          }
          ,
          o.prototype.start = function() {
              this._running = !0,
              this.renderOnNextFrame()
          }
          ,
          o.prototype.stop = function() {
              this._requestHandle && (window.cancelAnimationFrame(this._requestHandle),
              this._requestHandle = null),
              this._running = !1
          }
          ,
          o.prototype.renderOnNextFrame = function() {
              this._running && !this._requestHandle && (this._requestHandle = window.requestAnimationFrame(this._boundLoop))
          }
          ,
          o.prototype._loop = function() {
              if (!this._running)
                  throw new Error("Render loop running while in stopped state");
              this._requestHandle = null,
              this._rendering = !0,
              this.emit("beforeRender"),
              this._rendering = !1,
              this._stage.render(),
              this.emit("afterRender")
          }
          ,
          e.exports = o
      }
      , {
          "./util/clearOwnProperties": 182,
          "minimal-event-emitter": 210
      }],
      111: [function(t, e, n) {
          "use strict";
          var r = t("./Layer")
            , i = t("./TextureStore")
            , o = t("./HotspotContainer")
            , s = t("minimal-event-emitter")
            , a = t("./util/now")
            , u = t("./util/noop")
            , l = t("./util/type")
            , c = t("./util/defaults")
            , h = t("./util/clearOwnProperties");
          function p(t, e) {
              this._viewer = t,
              this._view = e,
              this._layers = [],
              this._hotspotContainer = new o(t._controlContainer,t.stage(),this._view,t.renderLoop()),
              this._movement = null,
              this._movementStartTime = null,
              this._movementStep = null,
              this._movementParams = null,
              this._movementCallback = null,
              this._updateMovementHandler = this._updateMovement.bind(this),
              this._updateHotspotContainerHandler = this._updateHotspotContainer.bind(this),
              this._viewer.addEventListener("sceneChange", this._updateHotspotContainerHandler),
              this._viewChangeHandler = this.emit.bind(this, "viewChange"),
              this._view.addEventListener("change", this._viewChangeHandler),
              this._updateHotspotContainer()
          }
          s(p),
          p.prototype.destroy = function() {
              this._view.removeEventListener("change", this._viewChangeHandler),
              this._viewer.removeEventListener("sceneChange", this._updateHotspotContainerHandler),
              this._movement && this.stopMovement(),
              this._hotspotContainer.destroy(),
              this.destroyAllLayers(),
              h(this)
          }
          ,
          p.prototype.hotspotContainer = function() {
              return this._hotspotContainer
          }
          ,
          p.prototype.layer = function() {
              return this._layers[0]
          }
          ,
          p.prototype.listLayers = function() {
              return [].concat(this._layers)
          }
          ,
          p.prototype.view = function() {
              return this._view
          }
          ,
          p.prototype.viewer = function() {
              return this._viewer
          }
          ,
          p.prototype.visible = function() {
              return this._viewer.scene() === this
          }
          ,
          p.prototype.createLayer = function(t) {
              var e = (t = t || {}).textureStoreOpts || {}
                , n = t.layerOpts || {}
                , o = t.source
                , s = t.geometry
                , a = this._view
                , u = this._viewer.stage()
                , l = new i(o,u,e)
                , c = new r(o,s,a,l,n);
              return this._layers.push(c),
              t.pinFirstLevel && c.pinFirstLevel(),
              this.emit("layerChange"),
              c
          }
          ,
          p.prototype.destroyLayer = function(t) {
              var e = this._layers.indexOf(t);
              if (e < 0)
                  throw new Error("No such layer in scene");
              this._layers.splice(e, 1),
              this.emit("layerChange"),
              t.textureStore().destroy(),
              t.destroy()
          }
          ,
          p.prototype.destroyAllLayers = function() {
              for (; this._layers.length > 0; )
                  this.destroyLayer(this._layers[0])
          }
          ,
          p.prototype.switchTo = function(t, e) {
              return this._viewer.switchScene(this, t, e)
          }
          ,
          p.prototype.lookTo = function(t, e, n) {
              if (e = e || {},
              n = n || u,
              "object" !== l(t))
                  throw new Error("Target view parameters must be an object");
              var r = null != e.ease ? e.ease : function(t) {
                  return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
              }
                , i = null != e.controlsInterrupt && e.controlsInterrupt
                , o = null != e.transitionDuration ? e.transitionDuration : 1e3
                , s = null == e.shortest || e.shortest
                , a = this._view
                , h = a.parameters()
                , p = {};
              c(p, t),
              c(p, h),
              s && a.normalizeToClosest && a.normalizeToClosest(p, p);
              var f = this._viewer.controls().enabled();
              i || this._viewer.controls().disable(),
              this.startMovement((function() {
                  var t = !1;
                  return function(e, n) {
                      if (n >= o && t)
                          return null;
                      var i = Math.min(n / o, 1);
                      for (var s in e) {
                          var a = h[s]
                            , u = p[s];
                          e[s] = a + r(i) * (u - a)
                      }
                      return t = n >= o,
                      e
                  }
              }
              ), (function() {
                  f && this._viewer.controls().enable(),
                  n()
              }
              ))
          }
          ,
          p.prototype.startMovement = function(t, e) {
              var n = this._viewer.renderLoop();
              this._movement && this.stopMovement();
              var r = t();
              if ("function" != typeof r)
                  throw new Error("Bad movement");
              this._movement = t,
              this._movementStep = r,
              this._movementStartTime = a(),
              this._movementParams = {},
              this._movementCallback = e,
              n.addEventListener("beforeRender", this._updateMovementHandler),
              n.renderOnNextFrame()
          }
          ,
          p.prototype.stopMovement = function() {
              var t = this._viewer.renderLoop();
              this._movement && (this._movementCallback && this._movementCallback(),
              t.removeEventListener("beforeRender", this._updateMovementHandler),
              this._movement = null,
              this._movementStep = null,
              this._movementStartTime = null,
              this._movementParams = null,
              this._movementCallback = null)
          }
          ,
          p.prototype.movement = function() {
              return this._movement
          }
          ,
          p.prototype._updateMovement = function() {
              if (!this._movement)
                  throw new Error("Should not call update");
              var t = this._viewer.renderLoop()
                , e = this._view
                , n = a() - this._movementStartTime
                , r = this._movementStep
                , i = this._movementParams;
              null == (i = r(i = e.parameters(i), n)) ? this.stopMovement() : (e.setParameters(i),
              t.renderOnNextFrame())
          }
          ,
          p.prototype._updateHotspotContainer = function() {
              this.visible() ? this._hotspotContainer.show() : this._hotspotContainer.hide()
          }
          ,
          e.exports = p
      }
      , {
          "./HotspotContainer": 107,
          "./Layer": 108,
          "./TextureStore": 112,
          "./util/clearOwnProperties": 182,
          "./util/defaults": 187,
          "./util/noop": 198,
          "./util/now": 199,
          "./util/type": 207,
          "minimal-event-emitter": 210
      }],
      112: [function(t, e, n) {
          "use strict";
          var r = t("./collections/Map")
            , i = t("./collections/Set")
            , o = t("./collections/LruSet")
            , s = t("minimal-event-emitter")
            , a = t("./util/defaults")
            , u = t("./util/retry")
            , l = t("./util/chain")
            , c = t("./util/inherits")
            , h = t("./util/clearOwnProperties")
            , p = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.textureStore
            , f = {
              IDLE: 0,
              START: 1,
              MARK: 2,
              END: 3
          }
            , d = {
              previouslyVisibleCacheSize: 512
          }
            , m = 0;
          function v() {}
          function y(t, e) {
              var n = this
                , r = m++;
              n._id = r,
              n._store = t,
              n._tile = e,
              n._asset = null,
              n._texture = null,
              n._changeHandler = function() {
                  t.emit("textureInvalid", e)
              }
              ;
              var i = t.source()
                , o = t.stage()
                , s = i.loadAsset.bind(i)
                , a = o.createTexture.bind(o)
                , c = l(u(s), a);
              t.emit("textureStartLoad", e),
              p && console.log("loading", r, e),
              n._cancel = c(o, e, (function(i, o, s, a) {
                  if (n._cancel = null,
                  i)
                      return s && s.destroy(),
                      a && a.destroy(),
                      void (i instanceof v ? (t.emit("textureCancel", e),
                      p && console.log("cancel", r, e)) : (t.emit("textureError", e, i),
                      p && console.log("error", r, e)));
                  n._texture = a,
                  s.isDynamic() ? (n._asset = s,
                  s.addEventListener("change", n._changeHandler)) : s.destroy(),
                  t.emit("textureLoad", e),
                  p && console.log("load", r, e)
              }
              ))
          }
          function g(t, e, n) {
              n = a(n || {}, d),
              this._source = t,
              this._stage = e,
              this._state = f.IDLE,
              this._delimCount = 0,
              this._itemMap = new r,
              this._visible = new i,
              this._previouslyVisible = new o(n.previouslyVisibleCacheSize),
              this._pinMap = new r,
              this._newVisible = new i,
              this._noLongerVisible = [],
              this._visibleAgain = [],
              this._evicted = []
          }
          c(v, Error),
          y.prototype.asset = function() {
              return this._asset
          }
          ,
          y.prototype.texture = function() {
              return this._texture
          }
          ,
          y.prototype.destroy = function() {
              var t = this._id
                , e = this._store
                , n = this._tile
                , r = this._asset
                , i = this._texture
                , o = this._cancel;
              o ? o(new v("Texture load cancelled")) : (r && (r.removeEventListener("change", this._changeHandler),
              r.destroy()),
              i && i.destroy(),
              e.emit("textureUnload", n),
              p && console.log("unload", t, n),
              h(this))
          }
          ,
          s(y),
          s(g),
          g.prototype.destroy = function() {
              this.clear(),
              h(this)
          }
          ,
          g.prototype.stage = function() {
              return this._stage
          }
          ,
          g.prototype.source = function() {
              return this._source
          }
          ,
          g.prototype.clear = function() {
              var t = this;
              t._evicted.length = 0,
              t._itemMap.forEach((function(e) {
                  t._evicted.push(e)
              }
              )),
              t._evicted.forEach((function(e) {
                  t._unloadTile(e)
              }
              )),
              t._itemMap.clear(),
              t._visible.clear(),
              t._previouslyVisible.clear(),
              t._pinMap.clear(),
              t._newVisible.clear(),
              t._noLongerVisible.length = 0,
              t._visibleAgain.length = 0,
              t._evicted.length = 0
          }
          ,
          g.prototype.clearNotPinned = function() {
              var t = this;
              t._evicted.length = 0,
              t._itemMap.forEach((function(e) {
                  t._pinMap.has(e) || t._evicted.push(e)
              }
              )),
              t._evicted.forEach((function(e) {
                  t._unloadTile(e)
              }
              )),
              t._visible.clear(),
              t._previouslyVisible.clear(),
              t._evicted.length = 0
          }
          ,
          g.prototype.startFrame = function() {
              if (this._state !== f.IDLE && this._state !== f.START)
                  throw new Error("TextureStore: startFrame called out of sequence");
              this._state = f.START,
              this._delimCount++
          }
          ,
          g.prototype.markTile = function(t) {
              if (this._state !== f.START && this._state !== f.MARK)
                  throw new Error("TextureStore: markTile called out of sequence");
              this._state = f.MARK;
              var e = this._itemMap.get(t)
                , n = e && e.texture()
                , r = e && e.asset();
              n && r && n.refresh(t, r),
              this._newVisible.add(t)
          }
          ,
          g.prototype.endFrame = function() {
              if (this._state !== f.START && this._state !== f.MARK && this._state !== f.END)
                  throw new Error("TextureStore: endFrame called out of sequence");
              this._state = f.END,
              this._delimCount--,
              this._delimCount || (this._update(),
              this._state = f.IDLE)
          }
          ,
          g.prototype._update = function() {
              var t = this;
              t._noLongerVisible.length = 0,
              t._visible.forEach((function(e) {
                  t._newVisible.has(e) || t._noLongerVisible.push(e)
              }
              )),
              t._visibleAgain.length = 0,
              t._newVisible.forEach((function(e) {
                  t._previouslyVisible.has(e) && t._visibleAgain.push(e)
              }
              )),
              t._visibleAgain.forEach((function(e) {
                  t._previouslyVisible.remove(e)
              }
              )),
              t._evicted.length = 0,
              t._noLongerVisible.forEach((function(e) {
                  var n = t._itemMap.get(e);
                  if (n && n.texture()) {
                      var r = t._previouslyVisible.add(e);
                      null != r && t._evicted.push(r)
                  } else
                      n && t._unloadTile(e)
              }
              )),
              t._evicted.forEach((function(e) {
                  t._pinMap.has(e) || t._unloadTile(e)
              }
              )),
              t._newVisible.forEach((function(e) {
                  t._itemMap.get(e) || t._loadTile(e)
              }
              ));
              var e = t._visible;
              t._visible = t._newVisible,
              t._newVisible = e,
              t._newVisible.clear(),
              t._noLongerVisible.length = 0,
              t._visibleAgain.length = 0,
              t._evicted.length = 0
          }
          ,
          g.prototype._loadTile = function(t) {
              if (this._itemMap.has(t))
                  throw new Error("TextureStore: loading texture already in cache");
              var e = new y(this,t);
              this._itemMap.set(t, e)
          }
          ,
          g.prototype._unloadTile = function(t) {
              var e = this._itemMap.del(t);
              if (!e)
                  throw new Error("TextureStore: unloading texture not in cache");
              e.destroy()
          }
          ,
          g.prototype.asset = function(t) {
              var e = this._itemMap.get(t);
              return e ? e.asset() : null
          }
          ,
          g.prototype.texture = function(t) {
              var e = this._itemMap.get(t);
              return e ? e.texture() : null
          }
          ,
          g.prototype.pin = function(t) {
              var e = (this._pinMap.get(t) || 0) + 1;
              return this._pinMap.set(t, e),
              this._itemMap.has(t) || this._loadTile(t),
              e
          }
          ,
          g.prototype.unpin = function(t) {
              var e = this._pinMap.get(t);
              if (!e)
                  throw new Error("TextureStore: unpin when not pinned");
              return --e > 0 ? this._pinMap.set(t, e) : (this._pinMap.del(t),
              this._visible.has(t) || this._previouslyVisible.has(t) || this._unloadTile(t)),
              e
          }
          ,
          g.prototype.query = function(t) {
              var e = this._itemMap.get(t)
                , n = this._pinMap.get(t) || 0;
              return {
                  visible: this._visible.has(t),
                  previouslyVisible: this._previouslyVisible.has(t),
                  hasAsset: null != e && null != e.asset(),
                  hasTexture: null != e && null != e.texture(),
                  pinned: 0 !== n,
                  pinCount: n
              }
          }
          ,
          e.exports = g
      }
      , {
          "./collections/LruSet": 121,
          "./collections/Map": 122,
          "./collections/Set": 123,
          "./util/chain": 180,
          "./util/clearOwnProperties": 182,
          "./util/defaults": 187,
          "./util/inherits": 195,
          "./util/retry": 205,
          "minimal-event-emitter": 210
      }],
      113: [function(t, e, n) {
          "use strict";
          var r = t("./collections/Set");
          function i() {
              this._stack = [],
              this._visited = new r,
              this._vertices = null
          }
          i.prototype.search = function(t, e, n) {
              var r = this._stack
                , i = this._visited
                , o = this._vertices
                , s = 0;
              for (this._clear(),
              r.push(e); r.length > 0; ) {
                  var a = r.pop();
                  if (!i.has(a) && t.intersects(a.vertices(o))) {
                      i.add(a);
                      for (var u = a.neighbors(), l = 0; l < u.length; l++)
                          r.push(u[l]);
                      n.push(a),
                      s++
                  }
              }
              return this._vertices = o,
              this._clear(),
              s
          }
          ,
          i.prototype._clear = function() {
              this._stack.length = 0,
              this._visited.clear()
          }
          ,
          e.exports = i
      }
      , {
          "./collections/Set": 123
      }],
      114: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./util/defaults")
            , o = t("./util/now")
            , s = {
              duration: 1 / 0
          };
          function a(t) {
              t = i(t || {}, s),
              this._duration = t.duration,
              this._startTime = null,
              this._handle = null,
              this._check = this._check.bind(this)
          }
          r(a),
          a.prototype.start = function() {
              this._startTime = o(),
              null == this._handle && this._duration < 1 / 0 && this._setup(this._duration)
          }
          ,
          a.prototype.started = function() {
              return null != this._startTime
          }
          ,
          a.prototype.stop = function() {
              this._startTime = null,
              null != this._handle && (clearTimeout(this._handle),
              this._handle = null)
          }
          ,
          a.prototype._setup = function(t) {
              this._handle = setTimeout(this._check, t)
          }
          ,
          a.prototype._teardown = function() {
              clearTimeout(this._handle),
              this._handle = null
          }
          ,
          a.prototype._check = function() {
              var t = o() - this._startTime
                , e = this._duration - t;
              this._teardown(),
              e <= 0 ? (this.emit("timeout"),
              this._startTime = null) : e < 1 / 0 && this._setup(e)
          }
          ,
          a.prototype.duration = function() {
              return this._duration
          }
          ,
          a.prototype.setDuration = function(t) {
              this._duration = t,
              null != this._startTime && this._check()
          }
          ,
          e.exports = a
      }
      , {
          "./util/defaults": 187,
          "./util/now": 199,
          "minimal-event-emitter": 210
      }],
      115: [function(t, e, n) {
          "use strict";
          var r = t("bowser")
            , i = t("minimal-event-emitter")
            , o = t("./RenderLoop")
            , s = t("./controls/Controls")
            , a = t("./Scene")
            , u = t("./Timer")
            , l = t("./stages/WebGl")
            , c = t("./stages/Css")
            , h = t("./stages/Flash")
            , p = t("./controls/ControlCursor")
            , f = t("./controls/HammerGestures")
            , d = t("./controls/registerDefaultControls")
            , m = t("./renderers/registerDefaultRenderers")
            , v = t("./util/dom").setOverflowHidden
            , y = t("./util/dom").setAbsolute
            , g = t("./util/dom").setFullSize
            , _ = t("./util/dom").setBlocking
            , b = t("./util/tween")
            , w = t("./util/noop")
            , x = t("./util/clearOwnProperties")
            , E = {
              webgl: l,
              css: c,
              flash: h
          }
            , M = [l, c, h];
          function S(t, e) {
              var n;
              if (e = e || {},
              this._domElement = t,
              v(t),
              e.stageType) {
                  if (!(n = E[e.stageType]))
                      throw new Error("Unknown stage type: " + e.stageType)
              } else {
                  for (var i = 0; i < M.length; i++)
                      if (M[i].supported()) {
                          n = M[i];
                          break
                      }
                  if (!n)
                      throw new Error("None of the stage types are supported")
              }
              this._stage = new n(e.stage),
              m(this._stage),
              this._domElement.appendChild(this._stage.domElement()),
              this._controlContainer = document.createElement("div"),
              y(this._controlContainer),
              g(this._controlContainer),
              r.ios && this._controlContainer.addEventListener("touchmove", (function(t) {
                  t.preventDefault()
              }
              ));
              var a = document.createElement("div");
              y(a),
              g(a),
              _(a),
              this._controlContainer.appendChild(a),
              t.appendChild(this._controlContainer),
              this._size = {},
              this.updateSize(),
              this._updateSizeListener = this.updateSize.bind(this),
              window.addEventListener("resize", this._updateSizeListener),
              this._renderLoop = new o(this._stage),
              this._controls = new s,
              this._controlMethods = d(this._controls, this._controlContainer, e.controls),
              this._controls.attach(this._renderLoop),
              this._hammerManagerTouch = f.get(this._controlContainer, "touch"),
              this._hammerManagerMouse = f.get(this._controlContainer, "mouse"),
              this._dragCursor = new p(this._controls,"mouseViewDrag",t,e.cursors && e.cursors.drag || {}),
              this._renderLoop.start(),
              this._scenes = [],
              this._currentScene = null,
              this._replacedScene = null,
              this._cancelCurrentTween = null,
              this._layerChangeHandler = this._updateSceneLayers.bind(this),
              this._viewChangeHandler = this.emit.bind(this, "viewChange"),
              this._idleTimer = new u,
              this._idleTimer.start(),
              this._resetIdleTimerHandler = this._resetIdleTimer.bind(this),
              this.addEventListener("viewChange", this._resetIdleTimerHandler),
              this._triggerIdleTimerHandler = this._triggerIdleTimer.bind(this),
              this._idleTimer.addEventListener("timeout", this._triggerIdleTimerHandler),
              this._stopMovementHandler = this.stopMovement.bind(this),
              this._controls.addEventListener("active", this._stopMovementHandler),
              this.addEventListener("sceneChange", this._stopMovementHandler),
              this._idleMovement = null
          }
          i(S),
          S.prototype.destroy = function() {
              for (var t in window.removeEventListener("resize", this._updateSizeListener),
              this._currentScene && this._removeSceneEventListeners(this._currentScene),
              this._replacedScene && this._removeSceneEventListeners(this._replacedScene),
              this._dragCursor.destroy(),
              this._controlMethods)
                  this._controlMethods[t].destroy();
              for (; this._scenes.length; )
                  this.destroyScene(this._scenes[0]);
              this._domElement.removeChild(this._stage.domElement()),
              this._stage.destroy(),
              this._renderLoop.destroy(),
              this._controls.destroy(),
              this._controls = null,
              this._cancelCurrentTween && this._cancelCurrentTween(),
              x(this)
          }
          ,
          S.prototype.updateSize = function() {
              var t = this._size;
              t.width = this._domElement.clientWidth,
              t.height = this._domElement.clientHeight,
              this._stage.setSize(t)
          }
          ,
          S.prototype.stage = function() {
              return this._stage
          }
          ,
          S.prototype.renderLoop = function() {
              return this._renderLoop
          }
          ,
          S.prototype.controls = function() {
              return this._controls
          }
          ,
          S.prototype.domElement = function() {
              return this._domElement
          }
          ,
          S.prototype.createScene = function(t) {
              t = t || {};
              var e = this.createEmptyScene({
                  view: t.view
              });
              return e.createLayer({
                  source: t.source,
                  geometry: t.geometry,
                  pinFirstLevel: t.pinFirstLevel,
                  textureStoreOpts: t.textureStoreOpts,
                  layerOpts: t.layerOpts
              }),
              e
          }
          ,
          S.prototype.createEmptyScene = function(t) {
              var e = new a(this,(t = t || {}).view);
              return this._scenes.push(e),
              e
          }
          ,
          S.prototype._updateSceneLayers = function() {
              var t, e, n = this._stage, r = this._currentScene, i = this._replacedScene, o = n.listLayers(), s = [];
              if (i && (s = s.concat(i.listLayers())),
              r && (s = s.concat(r.listLayers())),
              1 !== Math.abs(o.length - s.length))
                  throw new Error("Stage and scene out of sync");
              if (s.length < o.length)
                  for (t = 0; t < o.length; t++)
                      if (e = o[t],
                      s.indexOf(e) < 0) {
                          this._removeLayerFromStage(e);
                          break
                      }
              if (s.length > o.length)
                  for (t = 0; t < s.length; t++)
                      e = s[t],
                      o.indexOf(e) < 0 && this._addLayerToStage(e, t)
          }
          ,
          S.prototype._addLayerToStage = function(t, e) {
              t.pinFirstLevel(),
              this._stage.addLayer(t, e)
          }
          ,
          S.prototype._removeLayerFromStage = function(t) {
              this._stage.removeLayer(t),
              t.unpinFirstLevel(),
              t.textureStore().clearNotPinned()
          }
          ,
          S.prototype._addSceneEventListeners = function(t) {
              t.addEventListener("layerChange", this._layerChangeHandler),
              t.addEventListener("viewChange", this._viewChangeHandler)
          }
          ,
          S.prototype._removeSceneEventListeners = function(t) {
              t.removeEventListener("layerChange", this._layerChangeHandler),
              t.removeEventListener("viewChange", this._viewChangeHandler)
          }
          ,
          S.prototype.destroyScene = function(t) {
              var e, n, r = this._scenes.indexOf(t);
              if (r < 0)
                  throw new Error("No such scene in viewer");
              if (this._currentScene === t) {
                  for (this._removeSceneEventListeners(t),
                  n = t.listLayers(),
                  e = 0; e < n.length; e++)
                      this._removeLayerFromStage(n[e]);
                  this._cancelCurrentTween && (this._cancelCurrentTween(),
                  this._cancelCurrentTween = null),
                  this._currentScene = null,
                  this.emit("sceneChange")
              }
              if (this._replacedScene === t) {
                  for (this._removeSceneEventListeners(t),
                  n = t.listLayers(),
                  e = 0; e < n.length; e++)
                      this._removeLayerFromStage(n[e]);
                  this._replacedScene = null
              }
              this._scenes.splice(r, 1),
              t.destroy()
          }
          ,
          S.prototype.destroyAllScenes = function() {
              for (; this._scenes.length > 0; )
                  this.destroyScene(this._scenes[0])
          }
          ,
          S.prototype.hasScene = function(t) {
              return this._scenes.indexOf(t) >= 0
          }
          ,
          S.prototype.listScenes = function() {
              return [].concat(this._scenes)
          }
          ,
          S.prototype.scene = function() {
              return this._currentScene
          }
          ,
          S.prototype.view = function() {
              var t = this._currentScene;
              return t ? t.view() : null
          }
          ,
          S.prototype.lookTo = function(t, e, n) {
              var r = this._currentScene;
              r && r.lookTo(t, e, n)
          }
          ,
          S.prototype.startMovement = function(t, e) {
              var n = this._currentScene;
              n && n.startMovement(t, e)
          }
          ,
          S.prototype.stopMovement = function() {
              var t = this._currentScene;
              t && t.stopMovement()
          }
          ,
          S.prototype.movement = function() {
              var t = this._currentScene;
              if (t)
                  return t.movement()
          }
          ,
          S.prototype.setIdleMovement = function(t, e) {
              this._idleTimer.setDuration(t),
              this._idleMovement = e
          }
          ,
          S.prototype.breakIdleMovement = function() {
              this.stopMovement(),
              this._resetIdleTimer()
          }
          ,
          S.prototype._resetIdleTimer = function() {
              this._idleTimer.start()
          }
          ,
          S.prototype._triggerIdleTimer = function() {
              var t = this._idleMovement;
              t && this.startMovement(t)
          }
          ;
          function T(t, e, n) {
              e.listLayers().forEach((function(e) {
                  e.mergeEffects({
                      opacity: t
                  })
              }
              )),
              e._hotspotContainer.domElement().style.opacity = t
          }
          S.prototype.switchScene = function(t, e, n) {
              var r = this;
              e = e || {},
              n = n || w;
              var i = this._stage
                , o = this._currentScene;
              if (o !== t) {
                  if (this._scenes.indexOf(t) < 0)
                      throw new Error("No such scene in viewer");
                  this._cancelCurrentTween && (this._cancelCurrentTween(),
                  this._cancelCurrentTween = null);
                  var s = o ? o.listLayers() : []
                    , a = t.listLayers()
                    , u = i.listLayers();
                  if (o && (u.length !== s.length || u.length > 1 && u[0] != s[0]))
                      throw new Error("Stage not in sync with viewer");
                  for (var l = null != e.transitionDuration ? e.transitionDuration : 1e3, c = null != e.transitionUpdate ? e.transitionUpdate : T, h = 0; h < a.length; h++)
                      this._addLayerToStage(a[h]);
                  this._cancelCurrentTween = b(l, (function(e) {
                      c(e, t, o)
                  }
                  ), (function() {
                      if (r._replacedScene) {
                          r._removeSceneEventListeners(r._replacedScene),
                          s = r._replacedScene.listLayers();
                          for (var t = 0; t < s.length; t++)
                              r._removeLayerFromStage(s[t]);
                          r._replacedScene = null
                      }
                      r._cancelCurrentTween = null,
                      n()
                  }
                  )),
                  this._currentScene = t,
                  this._replacedScene = o,
                  this.emit("sceneChange"),
                  this.emit("viewChange"),
                  this._addSceneEventListeners(t)
              } else
                  n()
          }
          ,
          e.exports = S
      }
      , {
          "./RenderLoop": 110,
          "./Scene": 111,
          "./Timer": 114,
          "./controls/ControlCursor": 128,
          "./controls/Controls": 129,
          "./controls/HammerGestures": 133,
          "./controls/registerDefaultControls": 140,
          "./renderers/registerDefaultRenderers": 161,
          "./stages/Css": 168,
          "./stages/Flash": 169,
          "./stages/WebGl": 172,
          "./util/clearOwnProperties": 182,
          "./util/dom": 191,
          "./util/noop": 198,
          "./util/tween": 206,
          bowser: 105,
          "minimal-event-emitter": 210
      }],
      116: [function(t, e, n) {
          "use strict";
          var r = t("./Static")
            , i = t("../util/inherits")
            , o = t("minimal-event-emitter")
            , s = t("../util/clearOwnProperties");
          function a(t) {
              this.constructor.super_.call(this, t),
              this._timestamp = 0
          }
          i(a, r),
          o(a),
          a.prototype.destroy = function() {
              s(this)
          }
          ,
          a.prototype.timestamp = function() {
              return this._timestamp
          }
          ,
          a.prototype.isDynamic = function() {
              return !0
          }
          ,
          a.prototype.markDirty = function() {
              this._timestamp++,
              this.emit("change")
          }
          ,
          e.exports = a
      }
      , {
          "../util/clearOwnProperties": 182,
          "../util/inherits": 195,
          "./Static": 118,
          "minimal-event-emitter": 210
      }],
      117: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("../util/clearOwnProperties");
          function o(t, e) {
              this._flashElement = t,
              this._imageId = e
          }
          r(o),
          o.prototype.destroy = function() {
              this._flashElement.unloadImage(this._imageId),
              i(this)
          }
          ,
          o.prototype.element = function() {
              return this._imageId
          }
          ,
          o.prototype.width = function() {
              return 0
          }
          ,
          o.prototype.height = function() {
              return 0
          }
          ,
          o.prototype.timestamp = function() {
              return 0
          }
          ,
          o.prototype.isDynamic = function() {
              return !1
          }
          ,
          e.exports = o
      }
      , {
          "../util/clearOwnProperties": 182,
          "minimal-event-emitter": 210
      }],
      118: [function(t, e, n) {
          "use strict";
          var r = t("../util/global")
            , i = t("minimal-event-emitter")
            , o = t("../util/clearOwnProperties")
            , s = {
              HTMLImageElement: ["naturalWidth", "naturalHeight"],
              HTMLCanvasElement: ["width", "height"],
              ImageBitmap: ["width", "height"]
          };
          function a(t) {
              var e = !1;
              for (var n in s)
                  if (r[n] && t instanceof r[n]) {
                      e = !0,
                      this._widthProp = s[n][0],
                      this._heightProp = s[n][1];
                      break
                  }
              if (!e)
                  throw new Error("Unsupported pixel source");
              this._element = t
          }
          i(a),
          a.prototype.destroy = function() {
              o(this)
          }
          ,
          a.prototype.element = function() {
              return this._element
          }
          ,
          a.prototype.width = function() {
              return this._element[this._widthProp]
          }
          ,
          a.prototype.height = function() {
              return this._element[this._heightProp]
          }
          ,
          a.prototype.timestamp = function() {
              return 0
          }
          ,
          a.prototype.isDynamic = function() {
              return !1
          }
          ,
          e.exports = a
      }
      , {
          "../util/clearOwnProperties": 182,
          "../util/global": 193,
          "minimal-event-emitter": 210
      }],
      119: [function(t, e, n) {
          "use strict";
          var r = t("./util/defaults")
            , i = {
              yawSpeed: .1,
              pitchSpeed: .1,
              fovSpeed: .1,
              yawAccel: .01,
              pitchAccel: .01,
              fovAccel: .01,
              targetPitch: 0,
              targetFov: null
          };
          e.exports = function(t) {
              var e = (t = r(t || {}, i)).yawSpeed
                , n = t.pitchSpeed
                , o = t.fovSpeed
                , s = t.yawAccel
                , a = t.pitchAccel
                , u = t.fovAccel
                , l = t.targetPitch
                , c = t.targetFov;
              return function() {
                  var t, r, i, h, p = 0, f = 0, d = 0, m = 0, v = 0, y = 0, g = 0;
                  return function(_, b) {
                      if (t = (b - p) / 1e3,
                      v = Math.min(f + t * s, e),
                      r = v * t,
                      _.yaw = _.yaw + r,
                      null != l && _.pitch !== l) {
                          var w = .5 * d * d / a;
                          y = Math.abs(l - _.pitch) > w ? Math.min(d + t * a, n) : Math.max(d - t * a, 0),
                          i = y * t,
                          l < _.pitch && (_.pitch = Math.max(l, _.pitch - i)),
                          l > _.pitch && (_.pitch = Math.min(l, _.pitch + i))
                      }
                      if (null != c && _.fov !== l) {
                          var x = .5 * m * m / u;
                          g = Math.abs(c - _.fov) > x ? Math.min(m + t * u, o) : Math.max(m - t * u, 0),
                          h = g * t,
                          c < _.fov && (_.fov = Math.max(c, _.fov - h)),
                          c > _.fov && (_.fov = Math.min(c, _.fov + h))
                      }
                      return p = b,
                      f = v,
                      d = y,
                      m = g,
                      _
                  }
              }
          }
      }
      , {
          "./util/defaults": 187
      }],
      120: [function(t, e, n) {
          "use strict";
          var r = t("../util/mod");
          function i(t) {
              if (!isFinite(t) || Math.floor(t) !== t || t < 0)
                  throw new Error("LruMap: invalid capacity");
              this._capacity = t,
              this._keys = new Array(this._capacity),
              this._values = new Array(this._capacity),
              this._start = 0,
              this._size = 0
          }
          i.prototype._index = function(t) {
              return r(this._start + t, this._capacity)
          }
          ,
          i.prototype.get = function(t) {
              for (var e = 0; e < this._size; e++) {
                  var n = this._keys[this._index(e)];
                  if (t.equals(n))
                      return this._values[this._index(e)]
              }
              return null
          }
          ,
          i.prototype.set = function(t, e) {
              if (0 === this._capacity)
                  return t;
              this.del(t);
              var n = this._size === this._capacity ? this._keys[this._index(0)] : null;
              return this._keys[this._index(this._size)] = t,
              this._values[this._index(this._size)] = e,
              this._size < this._capacity ? this._size++ : this._start = this._index(1),
              n
          }
          ,
          i.prototype.del = function(t) {
              for (var e = 0; e < this._size; e++)
                  if (t.equals(this._keys[this._index(e)])) {
                      for (var n = this._values[this._index(e)], r = e; r < this._size - 1; r++)
                          this._keys[this._index(r)] = this._keys[this._index(r + 1)],
                          this._values[this._index(r)] = this._values[this._index(r + 1)];
                      return this._size--,
                      n
                  }
              return null
          }
          ,
          i.prototype.has = function(t) {
              for (var e = 0; e < this._size; e++)
                  if (t.equals(this._keys[this._index(e)]))
                      return !0;
              return !1
          }
          ,
          i.prototype.size = function() {
              return this._size
          }
          ,
          i.prototype.clear = function() {
              this._keys.length = 0,
              this._values.length = 0,
              this._start = 0,
              this._size = 0
          }
          ,
          i.prototype.forEach = function(t) {
              for (var e = 0, n = 0; n < this._size; n++)
                  t(this._keys[this._index(n)], this._values[this._index(n)]),
                  e += 1;
              return e
          }
          ,
          e.exports = i
      }
      , {
          "../util/mod": 197
      }],
      121: [function(t, e, n) {
          "use strict";
          var r = t("../util/mod");
          function i(t) {
              if (!isFinite(t) || Math.floor(t) !== t || t < 0)
                  throw new Error("LruSet: invalid capacity");
              this._capacity = t,
              this._elements = new Array(this._capacity),
              this._start = 0,
              this._size = 0
          }
          i.prototype._index = function(t) {
              return r(this._start + t, this._capacity)
          }
          ,
          i.prototype.add = function(t) {
              if (0 === this._capacity)
                  return t;
              this.remove(t);
              var e = this._size === this._capacity ? this._elements[this._index(0)] : null;
              return this._elements[this._index(this._size)] = t,
              this._size < this._capacity ? this._size++ : this._start = this._index(1),
              e
          }
          ,
          i.prototype.remove = function(t) {
              for (var e = 0; e < this._size; e++) {
                  var n = this._elements[this._index(e)];
                  if (t.equals(n)) {
                      for (var r = e; r < this._size - 1; r++)
                          this._elements[this._index(r)] = this._elements[this._index(r + 1)];
                      return this._size--,
                      n
                  }
              }
              return null
          }
          ,
          i.prototype.has = function(t) {
              for (var e = 0; e < this._size; e++)
                  if (t.equals(this._elements[this._index(e)]))
                      return !0;
              return !1
          }
          ,
          i.prototype.size = function() {
              return this._size
          }
          ,
          i.prototype.clear = function() {
              this._elements.length = 0,
              this._start = 0,
              this._size = 0
          }
          ,
          i.prototype.forEach = function(t) {
              for (var e = 0, n = 0; n < this._size; n++)
                  t(this._elements[this._index(n)]),
                  e += 1;
              return e
          }
          ,
          e.exports = i
      }
      , {
          "../util/mod": 197
      }],
      122: [function(t, e, n) {
          "use strict";
          var r = t("../util/mod")
            , i = 64;
          function o(t) {
              if (null != t && (!isFinite(t) || Math.floor(t) !== t || t < 1))
                  throw new Error("Map: invalid capacity");
              this._capacity = t || i,
              this._keyBuckets = [],
              this._valBuckets = [];
              for (var e = 0; e < this._capacity; e++)
                  this._keyBuckets.push([]),
                  this._valBuckets.push([]);
              this._size = 0
          }
          o.prototype.get = function(t) {
              for (var e = r(t.hash(), this._capacity), n = this._keyBuckets[e], i = 0; i < n.length; i++) {
                  var o = n[i];
                  if (t.equals(o))
                      return this._valBuckets[e][i]
              }
              return null
          }
          ,
          o.prototype.set = function(t, e) {
              for (var n = r(t.hash(), this._capacity), i = this._keyBuckets[n], o = this._valBuckets[n], s = 0; s < i.length; s++) {
                  var a = i[s];
                  if (t.equals(a)) {
                      var u = o[s];
                      return i[s] = t,
                      o[s] = e,
                      u
                  }
              }
              return i.push(t),
              o.push(e),
              this._size++,
              null
          }
          ,
          o.prototype.del = function(t) {
              for (var e = r(t.hash(), this._capacity), n = this._keyBuckets[e], i = this._valBuckets[e], o = 0; o < n.length; o++) {
                  var s = n[o];
                  if (t.equals(s)) {
                      for (var a = i[o], u = o; u < n.length - 1; u++)
                          n[u] = n[u + 1],
                          i[u] = i[u + 1];
                      return n.length = n.length - 1,
                      i.length = i.length - 1,
                      this._size--,
                      a
                  }
              }
              return null
          }
          ,
          o.prototype.has = function(t) {
              for (var e = r(t.hash(), this._capacity), n = this._keyBuckets[e], i = 0; i < n.length; i++) {
                  var o = n[i];
                  if (t.equals(o))
                      return !0
              }
              return !1
          }
          ,
          o.prototype.size = function() {
              return this._size
          }
          ,
          o.prototype.clear = function() {
              for (var t = 0; t < this._capacity; t++)
                  this._keyBuckets[t].length = 0,
                  this._valBuckets[t].length = 0;
              this._size = 0
          }
          ,
          o.prototype.forEach = function(t) {
              for (var e = 0, n = 0; n < this._capacity; n++)
                  for (var r = this._keyBuckets[n], i = this._valBuckets[n], o = 0; o < r.length; o++)
                      t(r[o], i[o]),
                      e += 1;
              return e
          }
          ,
          e.exports = o
      }
      , {
          "../util/mod": 197
      }],
      123: [function(t, e, n) {
          "use strict";
          var r = t("../util/mod")
            , i = 64;
          function o(t) {
              if (null != t && (!isFinite(t) || Math.floor(t) !== t || t < 1))
                  throw new Error("Set: invalid capacity");
              this._capacity = this._capacity || i,
              this._buckets = [];
              for (var e = 0; e < this._capacity; e++)
                  this._buckets.push([]);
              this._size = 0
          }
          o.prototype.add = function(t) {
              for (var e = r(t.hash(), this._capacity), n = this._buckets[e], i = 0; i < n.length; i++) {
                  var o = n[i];
                  if (t.equals(o))
                      return n[i] = t,
                      o
              }
              return n.push(t),
              this._size++,
              null
          }
          ,
          o.prototype.remove = function(t) {
              for (var e = r(t.hash(), this._capacity), n = this._buckets[e], i = 0; i < n.length; i++) {
                  var o = n[i];
                  if (t.equals(o)) {
                      for (var s = i; s < n.length - 1; s++)
                          n[s] = n[s + 1];
                      return n.length = n.length - 1,
                      this._size--,
                      o
                  }
              }
              return null
          }
          ,
          o.prototype.has = function(t) {
              for (var e = r(t.hash(), this._capacity), n = this._buckets[e], i = 0; i < n.length; i++) {
                  var o = n[i];
                  if (t.equals(o))
                      return !0
              }
              return !1
          }
          ,
          o.prototype.size = function() {
              return this._size
          }
          ,
          o.prototype.clear = function() {
              for (var t = 0; t < this._capacity; t++)
                  this._buckets[t].length = 0;
              this._size = 0
          }
          ,
          o.prototype.forEach = function(t) {
              for (var e = 0, n = 0; n < this._capacity; n++)
                  for (var r = this._buckets[n], i = 0; i < r.length; i++)
                      t(r[i]),
                      e += 1;
              return e
          }
          ,
          e.exports = o
      }
      , {
          "../util/mod": 197
      }],
      124: [function(t, e, n) {
          "use strict";
          var r = t("./WorkQueue")
            , i = t("../util/mod");
          function o(t) {
              this._concurrency = t && t.concurrency || 1,
              this._paused = t && !!t.paused || !1,
              this._pool = [];
              for (var e = 0; e < this._concurrency; e++)
                  this._pool.push(new r(t));
              this._next = 0
          }
          o.prototype.length = function() {
              for (var t = 0, e = 0; e < this._pool.length; e++)
                  t += this._pool[e].length();
              return t
          }
          ,
          o.prototype.push = function(t, e) {
              var n = this._next
                , r = this._pool[n].push(t, e);
              return this._next = i(this._next + 1, this._concurrency),
              r
          }
          ,
          o.prototype.pause = function() {
              if (!this._paused) {
                  this._paused = !0;
                  for (var t = 0; t < this._concurrency; t++)
                      this._pool[t].pause()
              }
          }
          ,
          o.prototype.resume = function() {
              if (this._paused) {
                  this._paused = !1;
                  for (var t = 0; t < this._concurrency; t++)
                      this._pool[t].resume()
              }
          }
          ,
          e.exports = o
      }
      , {
          "../util/mod": 197,
          "./WorkQueue": 125
      }],
      125: [function(t, e, n) {
          "use strict";
          var r = t("../util/now");
          function i(t, e) {
              this.fn = t,
              this.cb = e,
              this.cfn = null
          }
          function o(t) {
              this._queue = [],
              this._delay = t && t.delay || 0,
              this._paused = t && !!t.paused || !1,
              this._currentTask = null,
              this._lastFinished = null
          }
          o.prototype.length = function() {
              return this._queue.length
          }
          ,
          o.prototype.push = function(t, e) {
              var n = new i(t,e)
                , r = this._cancel.bind(this, n);
              return this._queue.push(n),
              this._next(),
              r
          }
          ,
          o.prototype.pause = function() {
              this._paused || (this._paused = !0)
          }
          ,
          o.prototype.resume = function() {
              this._paused && (this._paused = !1,
              this._next())
          }
          ,
          o.prototype._start = function(t) {
              if (this._currentTask)
                  throw new Error("WorkQueue: called start while running task");
              this._currentTask = t;
              var e = this._finish.bind(this, t);
              if (t.cfn = t.fn(e),
              "function" != typeof t.cfn)
                  throw new Error("WorkQueue: function is not cancellable")
          }
          ,
          o.prototype._finish = function(t) {
              var e = Array.prototype.slice.call(arguments, 1);
              if (this._currentTask !== t)
                  throw new Error("WorkQueue: called finish on wrong task");
              t.cb.apply(null, e),
              this._currentTask = null,
              this._lastFinished = r(),
              this._next()
          }
          ,
          o.prototype._cancel = function(t) {
              var e = Array.prototype.slice.call(arguments, 1);
              if (this._currentTask === t)
                  t.cfn.apply(null, e);
              else {
                  var n = this._queue.indexOf(t);
                  n >= 0 && (this._queue.splice(n, 1),
                  t.cb.apply(null, e))
              }
          }
          ,
          o.prototype._next = function() {
              if (!this._paused && this._queue.length && !this._currentTask) {
                  if (null != this._lastFinished) {
                      var t = r() - this._lastFinished
                        , e = this._delay - t;
                      if (e > 0)
                          return void setTimeout(this._next.bind(this), e)
                  }
                  var n = this._queue.shift();
                  this._start(n)
              }
          }
          ,
          e.exports = o
      }
      , {
          "../util/now": 199
      }],
      126: [function(t, e, n) {
          "use strict";
          var r = t("gl-matrix").vec4
            , i = t("gl-matrix").mat4;
          function o(t, e, n) {
              var i, o, s, a, u, l, c;
              i = n,
              o = t,
              s = e.colorMatrix,
              a = o[0],
              u = o[1],
              l = o[2],
              c = o[3],
              i[0] = s[0] * a + s[1] * u + s[2] * l + s[3] * c,
              i[1] = s[4] * a + s[5] * u + s[6] * l + s[7] * c,
              i[2] = s[8] * a + s[9] * u + s[10] * l + s[11] * c,
              i[3] = s[12] * a + s[13] * u + s[14] * l + s[15] * c,
              r.add(n, n, e.colorOffset)
          }
          var s = r.create();
          e.exports = {
              identity: function(t) {
                  var e = t || {};
                  return e.colorOffset = e.colorOffset || r.create(),
                  e.colorMatrix = e.colorMatrix || i.create(),
                  e
              },
              applyToPixel: o,
              applyToImageData: function(t, e) {
                  for (var n = t.width, i = t.height, a = t.data, u = 0; u < n * i; u++)
                      r.set(s, a[4 * u + 0] / 255, a[4 * u + 1] / 255, a[4 * u + 2] / 255, a[4 * u + 3] / 255),
                      o(s, e, s),
                      a[4 * u + 0] = 255 * s[0],
                      a[4 * u + 1] = 255 * s[1],
                      a[4 * u + 2] = 255 * s[2],
                      a[4 * u + 3] = 255 * s[3]
              }
          }
      }
      , {
          "gl-matrix": 5
      }],
      127: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./Dynamics")
            , o = t("../util/now")
            , s = t("../util/clearOwnProperties");
          function a(t) {
              t = t || {},
              this._methods = [],
              this._parameters = ["x", "y", "axisScaledX", "axisScaledY", "zoom", "yaw", "pitch", "roll"],
              this._now = t.nowForTesting || o,
              this._composedOffsets = {},
              this._composeReturn = {
                  offsets: this._composedOffsets,
                  changing: null
              }
          }
          r(a),
          a.prototype.add = function(t) {
              if (!this.has(t)) {
                  var e = {};
                  this._parameters.forEach((function(t) {
                      e[t] = {
                          dynamics: new i,
                          time: null
                      }
                  }
                  ));
                  var n = this._updateDynamics.bind(this, e)
                    , r = {
                      instance: t,
                      dynamics: e,
                      parameterDynamicsHandler: n
                  };
                  t.addEventListener("parameterDynamics", n),
                  this._methods.push(r)
              }
          }
          ,
          a.prototype.remove = function(t) {
              var e = this._indexOfInstance(t);
              if (e >= 0) {
                  var n = this._methods.splice(e, 1)[0];
                  n.instance.removeEventListener("parameterDynamics", n.parameterDynamicsHandler)
              }
          }
          ,
          a.prototype.has = function(t) {
              return this._indexOfInstance(t) >= 0
          }
          ,
          a.prototype._indexOfInstance = function(t) {
              for (var e = 0; e < this._methods.length; e++)
                  if (this._methods[e].instance === t)
                      return e;
              return -1
          }
          ,
          a.prototype.list = function() {
              for (var t = [], e = 0; e < this._methods.length; e++)
                  t.push(this._methods[e].instance);
              return t
          }
          ,
          a.prototype._updateDynamics = function(t, e, n) {
              var r = t[e];
              if (!r)
                  throw new Error("Unknown control parameter " + e);
              var i = this._now();
              r.dynamics.update(n, (i - r.time) / 1e3),
              r.time = i,
              this.emit("change")
          }
          ,
          a.prototype._resetComposedOffsets = function() {
              for (var t = 0; t < this._parameters.length; t++)
                  this._composedOffsets[this._parameters[t]] = 0
          }
          ,
          a.prototype.offsets = function() {
              var t, e = !1, n = this._now();
              this._resetComposedOffsets();
              for (var r = 0; r < this._methods.length; r++)
                  for (var i = this._methods[r].dynamics, o = 0; o < this._parameters.length; o++) {
                      var s = i[t = this._parameters[o]]
                        , a = s.dynamics;
                      null != a.offset && (this._composedOffsets[t] += a.offset,
                      a.offset = null);
                      var u = (n - s.time) / 1e3
                        , l = a.offsetFromVelocity(u);
                      l && (this._composedOffsets[t] += l);
                      var c = a.velocityAfter(u);
                      a.velocity = c,
                      c && (e = !0),
                      s.time = n
                  }
              return this._composeReturn.changing = e,
              this._composeReturn
          }
          ,
          a.prototype.destroy = function() {
              for (var t = this.list(), e = 0; e < t.length; e++)
                  this.remove(t[e]);
              s(this)
          }
          ,
          e.exports = a
      }
      , {
          "../util/clearOwnProperties": 182,
          "../util/now": 199,
          "./Dynamics": 131,
          "minimal-event-emitter": 210
      }],
      128: [function(t, e, n) {
          "use strict";
          var r = t("../util/defaults")
            , i = t("../util/clearOwnProperties")
            , o = {
              active: "move",
              inactive: "default",
              disabled: "default"
          };
          function s(t, e, n, i) {
              i = r(i || {}, o),
              this._element = n,
              this._controls = t,
              this._id = e,
              this._attached = !1,
              this._setActiveCursor = this._setCursor.bind(this, i.active),
              this._setInactiveCursor = this._setCursor.bind(this, i.inactive),
              this._setDisabledCursor = this._setCursor.bind(this, i.disabled),
              this._setOriginalCursor = this._setCursor.bind(this, this._element.style.cursor),
              this._updateAttachmentHandler = this._updateAttachment.bind(this),
              t.addEventListener("methodEnabled", this._updateAttachmentHandler),
              t.addEventListener("methodDisabled", this._updateAttachmentHandler),
              t.addEventListener("enabled", this._updateAttachmentHandler),
              t.addEventListener("disabled", this._updateAttachmentHandler),
              this._updateAttachment()
          }
          s.prototype.destroy = function() {
              this._detachFromControlMethod(this._controls.method(this._id)),
              this._setOriginalCursor(),
              this._controls.removeEventListener("methodEnabled", this._updateAttachmentHandler),
              this._controls.removeEventListener("methodDisabled", this._updateAttachmentHandler),
              this._controls.removeEventListener("enabled", this._updateAttachmentHandler),
              this._controls.removeEventListener("disabled", this._updateAttachmentHandler),
              i(this)
          }
          ,
          s.prototype._updateAttachment = function() {
              var t = this._controls
                , e = this._id;
              t.enabled() && t.method(e).enabled ? this._attachToControlMethod(t.method(e)) : this._detachFromControlMethod(t.method(e))
          }
          ,
          s.prototype._attachToControlMethod = function(t) {
              this._attached || (t.instance.addEventListener("active", this._setActiveCursor),
              t.instance.addEventListener("inactive", this._setInactiveCursor),
              t.active ? this._setActiveCursor() : this._setInactiveCursor(),
              this._attached = !0)
          }
          ,
          s.prototype._detachFromControlMethod = function(t) {
              this._attached && (t.instance.removeEventListener("active", this._setActiveCursor),
              t.instance.removeEventListener("inactive", this._setInactiveCursor),
              this._setDisabledCursor(),
              this._attached = !1)
          }
          ,
          s.prototype._setCursor = function(t) {
              this._element.style.cursor = t
          }
          ,
          e.exports = s
      }
      , {
          "../util/clearOwnProperties": 182,
          "../util/defaults": 187
      }],
      129: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./Composer")
            , o = t("../util/clearOwnProperties")
            , s = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.controls;
          function a(t) {
              t = t || {},
              this._methods = {},
              this._methodGroups = {},
              this._composer = new i,
              this._enabled = !t || !t.enabled || !!t.enabled,
              this._activeCount = 0,
              this.updatedViews_ = [],
              this._attachedRenderLoop = null
          }
          r(a),
          a.prototype.destroy = function() {
              this.detach(),
              this._composer.destroy(),
              o(this)
          }
          ,
          a.prototype.methods = function() {
              var t = {};
              for (var e in this._methods)
                  t[e] = this._methods[e];
              return t
          }
          ,
          a.prototype.method = function(t) {
              return this._methods[t]
          }
          ,
          a.prototype.registerMethod = function(t, e, n) {
              if (this._methods[t])
                  throw new Error("Control method already registered with id " + t);
              this._methods[t] = {
                  instance: e,
                  enabled: !1,
                  active: !1,
                  activeHandler: this._handleActive.bind(this, t),
                  inactiveHandler: this._handleInactive.bind(this, t)
              },
              n && this.enableMethod(t, e)
          }
          ,
          a.prototype.unregisterMethod = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("No control method registered with id " + t);
              e.enabled && this.disableMethod(t),
              delete this._methods[t]
          }
          ,
          a.prototype.enableMethod = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("No control method registered with id " + t);
              e.enabled || (e.enabled = !0,
              e.active && this._incrementActiveCount(),
              this._listen(t),
              this._updateComposer(),
              this.emit("methodEnabled", t))
          }
          ,
          a.prototype.disableMethod = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("No control method registered with id " + t);
              e.enabled && (e.enabled = !1,
              e.active && this._decrementActiveCount(),
              this._unlisten(t),
              this._updateComposer(),
              this.emit("methodDisabled", t))
          }
          ,
          a.prototype.addMethodGroup = function(t, e) {
              this._methodGroups[t] = e
          }
          ,
          a.prototype.removeMethodGroup = function(t) {
              delete this._methodGroups[t]
          }
          ,
          a.prototype.methodGroups = function() {
              var t = {};
              for (var e in this._methodGroups)
                  t[e] = this._methodGroups[e];
              return t
          }
          ,
          a.prototype.enableMethodGroup = function(t) {
              var e = this;
              e._methodGroups[t].forEach((function(t) {
                  e.enableMethod(t)
              }
              ))
          }
          ,
          a.prototype.disableMethodGroup = function(t) {
              var e = this;
              e._methodGroups[t].forEach((function(t) {
                  e.disableMethod(t)
              }
              ))
          }
          ,
          a.prototype.enabled = function() {
              return this._enabled
          }
          ,
          a.prototype.enable = function() {
              this._enabled || (this._enabled = !0,
              this._activeCount > 0 && this.emit("active"),
              this.emit("enabled"),
              this._updateComposer())
          }
          ,
          a.prototype.disable = function() {
              this._enabled && (this._enabled = !1,
              this._activeCount > 0 && this.emit("inactive"),
              this.emit("disabled"),
              this._updateComposer())
          }
          ,
          a.prototype.attach = function(t) {
              this._attachedRenderLoop && this.detach(),
              this._attachedRenderLoop = t,
              this._beforeRenderHandler = this._updateViewsWithControls.bind(this),
              this._changeHandler = t.renderOnNextFrame.bind(t),
              this._attachedRenderLoop.addEventListener("beforeRender", this._beforeRenderHandler),
              this._composer.addEventListener("change", this._changeHandler)
          }
          ,
          a.prototype.detach = function() {
              this._attachedRenderLoop && (this._attachedRenderLoop.removeEventListener("beforeRender", this._beforeRenderHandler),
              this._composer.removeEventListener("change", this._changeHandler),
              this._beforeRenderHandler = null,
              this._changeHandler = null,
              this._attachedRenderLoop = null)
          }
          ,
          a.prototype.attached = function() {
              return null != this._attachedRenderLoop
          }
          ,
          a.prototype._listen = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("Bad method id");
              e.instance.addEventListener("active", e.activeHandler),
              e.instance.addEventListener("inactive", e.inactiveHandler)
          }
          ,
          a.prototype._unlisten = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("Bad method id");
              e.instance.removeEventListener("active", e.activeHandler),
              e.instance.removeEventListener("inactive", e.inactiveHandler)
          }
          ,
          a.prototype._handleActive = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("Bad method id");
              if (!e.enabled)
                  throw new Error("Should not receive event from disabled control method");
              e.active || (e.active = !0,
              this._incrementActiveCount())
          }
          ,
          a.prototype._handleInactive = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("Bad method id");
              if (!e.enabled)
                  throw new Error("Should not receive event from disabled control method");
              e.active && (e.active = !1,
              this._decrementActiveCount())
          }
          ,
          a.prototype._incrementActiveCount = function() {
              this._activeCount++,
              s && this._checkActiveCount(),
              this._enabled && 1 === this._activeCount && this.emit("active")
          }
          ,
          a.prototype._decrementActiveCount = function() {
              this._activeCount--,
              s && this._checkActiveCount(),
              this._enabled && 0 === this._activeCount && this.emit("inactive")
          }
          ,
          a.prototype._checkActiveCount = function() {
              var t = 0;
              for (var e in this._methods) {
                  var n = this._methods[e];
                  n.enabled && n.active && t++
              }
              if (t != this._activeCount)
                  throw new Error("Bad control state")
          }
          ,
          a.prototype._updateComposer = function() {
              var t = this._composer;
              for (var e in this._methods) {
                  var n = this._methods[e]
                    , r = this._enabled && n.enabled;
                  r && !t.has(n.instance) && t.add(n.instance),
                  !r && t.has(n.instance) && t.remove(n.instance)
              }
          }
          ,
          a.prototype._updateViewsWithControls = function() {
              var t = this._composer.offsets();
              t.changing && this._attachedRenderLoop.renderOnNextFrame(),
              this.updatedViews_.length = 0;
              for (var e = this._attachedRenderLoop.stage().listLayers(), n = 0; n < e.length; n++) {
                  var r = e[n].view();
                  this.updatedViews_.indexOf(r) < 0 && (e[n].view().updateWithControlParameters(t.offsets),
                  this.updatedViews_.push(r))
              }
          }
          ,
          e.exports = a
      }
      , {
          "../util/clearOwnProperties": 182,
          "./Composer": 127,
          "minimal-event-emitter": 210
      }],
      130: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./Dynamics")
            , o = t("./HammerGestures")
            , s = t("../util/defaults")
            , a = t("./util").maxFriction
            , u = t("../util/clearOwnProperties")
            , l = {
              friction: 6,
              maxFrictionTime: .3
          }
            , c = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.controls;
          function h(t, e, n) {
              this._element = t,
              this._opts = s(n || {}, l),
              this._startEvent = null,
              this._lastEvent = null,
              this._active = !1,
              this._dynamics = {
                  x: new i,
                  y: new i
              },
              this._hammer = o.get(t, e),
              this._hammer.on("hammer.input", this._handleHammerEvent.bind(this)),
              this._hammer.on("panstart", this._handleStart.bind(this)),
              this._hammer.on("panmove", this._handleMove.bind(this)),
              this._hammer.on("panend", this._handleEnd.bind(this)),
              this._hammer.on("pancancel", this._handleEnd.bind(this))
          }
          r(h),
          h.prototype.destroy = function() {
              this._hammer.release(),
              u(this)
          }
          ,
          h.prototype._handleHammerEvent = function(t) {
              if (t.isFirst) {
                  if (c && this._active)
                      throw new Error("DragControlMethod active detected when already active");
                  this._active = !0,
                  this.emit("active")
              }
              if (t.isFinal) {
                  if (c && !this._active)
                      throw new Error("DragControlMethod inactive detected when already inactive");
                  this._active = !1,
                  this.emit("inactive")
              }
          }
          ,
          h.prototype._handleStart = function(t) {
              t.preventDefault(),
              this._startEvent = t
          }
          ,
          h.prototype._handleMove = function(t) {
              t.preventDefault(),
              this._startEvent && (this._updateDynamicsMove(t),
              this.emit("parameterDynamics", "axisScaledX", this._dynamics.x),
              this.emit("parameterDynamics", "axisScaledY", this._dynamics.y))
          }
          ,
          h.prototype._handleEnd = function(t) {
              t.preventDefault(),
              this._startEvent && (this._updateDynamicsRelease(t),
              this.emit("parameterDynamics", "axisScaledX", this._dynamics.x),
              this.emit("parameterDynamics", "axisScaledY", this._dynamics.y)),
              this._startEvent = !1,
              this._lastEvent = !1
          }
          ,
          h.prototype._updateDynamicsMove = function(t) {
              var e = t.deltaX
                , n = t.deltaY
                , r = this._lastEvent || this._startEvent;
              r && (e -= r.deltaX,
              n -= r.deltaY);
              var i = this._element.getBoundingClientRect();
              e /= i.right - i.left,
              n /= i.bottom - i.top,
              this._dynamics.x.reset(),
              this._dynamics.y.reset(),
              this._dynamics.x.offset = -e,
              this._dynamics.y.offset = -n,
              this._lastEvent = t
          }
          ;
          var p = [null, null];
          h.prototype._updateDynamicsRelease = function(t) {
              var e = this._element.getBoundingClientRect()
                , n = e.right - e.left
                , r = e.bottom - e.top
                , i = 1e3 * t.velocityX / n
                , o = 1e3 * t.velocityY / r;
              this._dynamics.x.reset(),
              this._dynamics.y.reset(),
              this._dynamics.x.velocity = i,
              this._dynamics.y.velocity = o,
              a(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, p),
              this._dynamics.x.friction = p[0],
              this._dynamics.y.friction = p[1]
          }
          ,
          e.exports = h
      }
      , {
          "../util/clearOwnProperties": 182,
          "../util/defaults": 187,
          "./Dynamics": 131,
          "./HammerGestures": 133,
          "./util": 141,
          "minimal-event-emitter": 210
      }],
      131: [function(t, e, n) {
          "use strict";
          function r() {
              this.velocity = null,
              this.friction = null,
              this.offset = null
          }
          r.equals = function(t, e) {
              return t.velocity === e.velocity && t.friction === e.friction && t.offset === e.offset
          }
          ,
          r.prototype.equals = function(t) {
              return r.equals(this, t)
          }
          ,
          r.prototype.update = function(t, e) {
              t.offset && (this.offset = this.offset || 0,
              this.offset += t.offset);
              var n = this.offsetFromVelocity(e);
              n && (this.offset = this.offset || 0,
              this.offset += n),
              this.velocity = t.velocity,
              this.friction = t.friction
          }
          ,
          r.prototype.reset = function() {
              this.velocity = null,
              this.friction = null,
              this.offset = null
          }
          ,
          r.prototype.velocityAfter = function(t) {
              return this.velocity ? this.friction ? function(t, e) {
                  if (t < 0)
                      return Math.min(0, t + e);
                  if (t > 0)
                      return Math.max(0, t - e);
                  return 0
              }(this.velocity, this.friction * t) : this.velocity : null
          }
          ,
          r.prototype.offsetFromVelocity = function(t) {
              t = Math.min(t, this.nullVelocityTime());
              var e = this.velocityAfter(t);
              return (this.velocity + e) / 2 * t
          }
          ,
          r.prototype.nullVelocityTime = function() {
              return null == this.velocity ? 0 : this.velocity && !this.friction ? 1 / 0 : Math.abs(this.velocity / this.friction)
          }
          ,
          e.exports = r
      }
      , {}],
      132: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./Dynamics")
            , o = t("../util/clearOwnProperties");
          function s(t, e, n, r) {
              if (!t)
                  throw new Error("ElementPressControlMethod: element must be defined");
              if (!e)
                  throw new Error("ElementPressControlMethod: parameter must be defined");
              if (!n)
                  throw new Error("ElementPressControlMethod: velocity must be defined");
              if (!r)
                  throw new Error("ElementPressControlMethod: friction must be defined");
              this._element = t,
              this._pressHandler = this._handlePress.bind(this),
              this._releaseHandler = this._handleRelease.bind(this),
              t.addEventListener("mousedown", this._pressHandler),
              t.addEventListener("mouseup", this._releaseHandler),
              t.addEventListener("mouseleave", this._releaseHandler),
              t.addEventListener("touchstart", this._pressHandler),
              t.addEventListener("touchmove", this._releaseHandler),
              t.addEventListener("touchend", this._releaseHandler),
              this._parameter = e,
              this._velocity = n,
              this._friction = r,
              this._dynamics = new i,
              this._pressing = !1
          }
          r(s),
          s.prototype.destroy = function() {
              this._element.removeEventListener("mousedown", this._pressHandler),
              this._element.removeEventListener("mouseup", this._releaseHandler),
              this._element.removeEventListener("mouseleave", this._releaseHandler),
              this._element.removeEventListener("touchstart", this._pressHandler),
              this._element.removeEventListener("touchmove", this._releaseHandler),
              this._element.removeEventListener("touchend", this._releaseHandler),
              o(this)
          }
          ,
          s.prototype._handlePress = function() {
              this._pressing = !0,
              this._dynamics.velocity = this._velocity,
              this._dynamics.friction = 0,
              this.emit("parameterDynamics", this._parameter, this._dynamics),
              this.emit("active")
          }
          ,
          s.prototype._handleRelease = function() {
              this._pressing && (this._dynamics.friction = this._friction,
              this.emit("parameterDynamics", this._parameter, this._dynamics),
              this.emit("inactive")),
              this._pressing = !1
          }
          ,
          e.exports = s
      }
      , {
          "../util/clearOwnProperties": 182,
          "./Dynamics": 131,
          "minimal-event-emitter": 210
      }],
      133: [function(t, e, n) {
          "use strict";
          var r = t("hammerjs")
            , i = t("bowser")
            , o = 1
            , s = "MarzipanoHammerElementId";
          function a(t, e) {
              return t[s] || (t[s] = o++),
              e + t[s]
          }
          function u() {
              this._managers = {},
              this._refCount = {}
          }
          function l(t, e, n, r) {
              this._manager = e,
              this._element = n,
              this._type = r,
              this._hammerGestures = t,
              this._eventHandlers = []
          }
          u.prototype.get = function(t, e) {
              var n = a(t, e);
              return this._managers[n] || (this._managers[n] = this._createManager(t, e),
              this._refCount[n] = 0),
              this._refCount[n]++,
              new l(this,this._managers[n],t,e)
          }
          ,
          u.prototype._createManager = function(t, e) {
              var n = new r.Manager(t);
              return "mouse" === e ? n.add(new r.Pan({
                  direction: r.DIRECTION_ALL,
                  threshold: 0
              })) : "touch" !== e && "pen" !== e && "kinect" !== e || (n.add(new r.Pan({
                  direction: r.DIRECTION_ALL,
                  threshold: 20,
                  pointers: 1
              })),
              i.msie && parseFloat(i.version) < 10 || n.add(new r.Pinch)),
              n
          }
          ,
          u.prototype._releaseHandle = function(t, e) {
              var n = a(t, e);
              this._refCount[n] && (this._refCount[n]--,
              this._refCount[n] || (this._managers[n].destroy(),
              delete this._managers[n],
              delete this._refCount[n]))
          }
          ,
          l.prototype.on = function(t, e) {
              var n = this._type
                , r = function(t) {
                  n === t.pointerType && e(t)
              };
              this._eventHandlers.push({
                  events: t,
                  handler: r
              }),
              this._manager.on(t, r)
          }
          ,
          l.prototype.release = function() {
              for (var t = 0; t < this._eventHandlers.length; t++) {
                  var e = this._eventHandlers[t];
                  this._manager.off(e.events, e.handler)
              }
              this._hammerGestures._releaseHandle(this._element, this._type),
              this._manager = null,
              this._element = null,
              this._type = null,
              this._hammerGestures = null
          }
          ,
          l.prototype.manager = function() {
              return this._manager
          }
          ,
          e.exports = new u
      }
      , {
          bowser: 105,
          hammerjs: 15
      }],
      134: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./Dynamics")
            , o = t("../util/clearOwnProperties");
          function s(t, e, n, r, o) {
              if (!t)
                  throw new Error("KeyControlMethod: keyCode must be defined");
              if (!e)
                  throw new Error("KeyControlMethod: parameter must be defined");
              if (!n)
                  throw new Error("KeyControlMethod: velocity must be defined");
              if (!r)
                  throw new Error("KeyControlMethod: friction must be defined");
              o = o || document,
              this._keyCode = t,
              this._parameter = e,
              this._velocity = n,
              this._friction = r,
              this._element = o,
              this._keydownHandler = this._handlePress.bind(this),
              this._keyupHandler = this._handleRelease.bind(this),
              this._blurHandler = this._handleBlur.bind(this),
              this._element.addEventListener("keydown", this._keydownHandler),
              this._element.addEventListener("keyup", this._keyupHandler),
              window.addEventListener("blur", this._blurHandler),
              this._dynamics = new i,
              this._pressing = !1
          }
          r(s),
          s.prototype.destroy = function() {
              this._element.removeEventListener("keydown", this._keydownHandler),
              this._element.removeEventListener("keyup", this._keyupHandler),
              window.removeEventListener("blur", this._blurHandler),
              o(this)
          }
          ,
          s.prototype._handlePress = function(t) {
              t.keyCode === this._keyCode && (this._pressing = !0,
              this._dynamics.velocity = this._velocity,
              this._dynamics.friction = 0,
              this.emit("parameterDynamics", this._parameter, this._dynamics),
              this.emit("active"))
          }
          ,
          s.prototype._handleRelease = function(t) {
              t.keyCode === this._keyCode && (this._pressing && (this._dynamics.friction = this._friction,
              this.emit("parameterDynamics", this._parameter, this._dynamics),
              this.emit("inactive")),
              this._pressing = !1)
          }
          ,
          s.prototype._handleBlur = function() {
              this._dynamics.velocity = 0,
              this.emit("parameterDynamics", this._parameter, this._dynamics),
              this.emit("inactive"),
              this._pressing = !1
          }
          ,
          e.exports = s
      }
      , {
          "../util/clearOwnProperties": 182,
          "./Dynamics": 131,
          "minimal-event-emitter": 210
      }],
      135: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./Dynamics")
            , o = t("./HammerGestures")
            , s = t("../util/clearOwnProperties");
          function a(t, e, n) {
              this._hammer = o.get(t, e),
              this._lastEvent = null,
              this._active = !1,
              this._dynamics = new i,
              this._hammer.on("pinchstart", this._handleStart.bind(this)),
              this._hammer.on("pinch", this._handleEvent.bind(this)),
              this._hammer.on("pinchend", this._handleEnd.bind(this)),
              this._hammer.on("pinchcancel", this._handleEnd.bind(this))
          }
          r(a),
          a.prototype.destroy = function() {
              this._hammer.release(),
              s(this)
          }
          ,
          a.prototype._handleStart = function() {
              this._active || (this._active = !0,
              this.emit("active"))
          }
          ,
          a.prototype._handleEnd = function() {
              this._lastEvent = null,
              this._active && (this._active = !1,
              this.emit("inactive"))
          }
          ,
          a.prototype._handleEvent = function(t) {
              var e = t.scale;
              this._lastEvent && (e /= this._lastEvent.scale),
              this._dynamics.offset = -1 * (e - 1),
              this.emit("parameterDynamics", "zoom", this._dynamics),
              this._lastEvent = t
          }
          ,
          e.exports = a
      }
      , {
          "../util/clearOwnProperties": 182,
          "./Dynamics": 131,
          "./HammerGestures": 133,
          "minimal-event-emitter": 210
      }],
      136: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./Dynamics")
            , o = t("./HammerGestures")
            , s = t("../util/defaults")
            , a = t("./util").maxFriction
            , u = t("../util/clearOwnProperties")
            , l = {
              speed: 8,
              friction: 6,
              maxFrictionTime: .3
          };
          function c(t, e, n) {
              this._element = t,
              this._opts = s(n || {}, l),
              this._active = !1,
              this._hammer = o.get(t, e),
              this._dynamics = {
                  x: new i,
                  y: new i
              },
              this._hammer.on("panstart", this._handleStart.bind(this)),
              this._hammer.on("panmove", this._handleMove.bind(this)),
              this._hammer.on("panend", this._handleRelease.bind(this)),
              this._hammer.on("pancancel", this._handleRelease.bind(this))
          }
          r(c),
          c.prototype.destroy = function() {
              this._hammer.release(),
              u(this)
          }
          ,
          c.prototype._handleStart = function(t) {
              t.preventDefault(),
              this._active || (this._active = !0,
              this.emit("active"))
          }
          ,
          c.prototype._handleMove = function(t) {
              t.preventDefault(),
              this._updateDynamics(t, !1)
          }
          ,
          c.prototype._handleRelease = function(t) {
              t.preventDefault(),
              this._updateDynamics(t, !0),
              this._active && (this._active = !1,
              this.emit("inactive"))
          }
          ;
          var h = [null, null];
          c.prototype._updateDynamics = function(t, e) {
              var n = this._element.getBoundingClientRect()
                , r = n.right - n.left
                , i = n.bottom - n.top
                , o = Math.max(r, i)
                , s = t.deltaX / o * this._opts.speed
                , u = t.deltaY / o * this._opts.speed;
              this._dynamics.x.reset(),
              this._dynamics.y.reset(),
              this._dynamics.x.velocity = s,
              this._dynamics.y.velocity = u,
              e && (a(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, h),
              this._dynamics.x.friction = h[0],
              this._dynamics.y.friction = h[1]),
              this.emit("parameterDynamics", "x", this._dynamics.x),
              this.emit("parameterDynamics", "y", this._dynamics.y)
          }
          ,
          e.exports = c
      }
      , {
          "../util/clearOwnProperties": 182,
          "../util/defaults": 187,
          "./Dynamics": 131,
          "./HammerGestures": 133,
          "./util": 141,
          "minimal-event-emitter": 210
      }],
      137: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./Dynamics")
            , o = t("./WheelListener")
            , s = t("../util/defaults")
            , a = t("../util/clearOwnProperties")
            , u = {
              frictionTime: .2,
              zoomDelta: .001
          };
          function l(t, e) {
              this._opts = s(e || {}, u),
              this._dynamics = new i,
              this._eventList = [];
              var n = this._opts.frictionTime ? this.withSmoothing : this.withoutSmoothing;
              this._wheelListener = new o(t,n.bind(this))
          }
          function c(t) {
              var e = 1 == t.deltaMode ? 20 : 1;
              return t.deltaY * e
          }
          r(l),
          l.prototype.destroy = function() {
              this._wheelListener.destroy(),
              a(this)
          }
          ,
          l.prototype.withoutSmoothing = function(t) {
              this._dynamics.offset = c(t) * this._opts.zoomDelta,
              this.emit("parameterDynamics", "zoom", this._dynamics),
              t.preventDefault(),
              this.emit("active"),
              this.emit("inactive")
          }
          ,
          l.prototype.withSmoothing = function(t) {
              var e = t.timeStamp;
              for (this._eventList.push(t); this._eventList[0].timeStamp < e - 1e3 * this._opts.frictionTime; )
                  this._eventList.shift(0);
              for (var n = 0, r = 0; r < this._eventList.length; r++) {
                  n += c(this._eventList[r]) * this._opts.zoomDelta / this._opts.frictionTime
              }
              this._dynamics.velocity = n,
              this._dynamics.friction = Math.abs(n) / this._opts.frictionTime,
              this.emit("parameterDynamics", "zoom", this._dynamics),
              t.preventDefault(),
              this.emit("active"),
              this.emit("inactive")
          }
          ,
          e.exports = l
      }
      , {
          "../util/clearOwnProperties": 182,
          "../util/defaults": 187,
          "./Dynamics": 131,
          "./WheelListener": 139,
          "minimal-event-emitter": 210
      }],
      138: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("./Dynamics")
            , o = t("../util/clearOwnProperties");
          function s(t) {
              if (!t)
                  throw new Error("VelocityControlMethod: parameter must be defined");
              this._parameter = t,
              this._dynamics = new i
          }
          r(s),
          s.prototype.destroy = function() {
              o(this)
          }
          ,
          s.prototype.setVelocity = function(t) {
              this._dynamics.velocity = t,
              this.emit("parameterDynamics", this._parameter, this._dynamics)
          }
          ,
          s.prototype.setFriction = function(t) {
              this._dynamics.friction = t,
              this.emit("parameterDynamics", this._parameter, this._dynamics)
          }
          ,
          e.exports = s
      }
      , {
          "../util/clearOwnProperties": 182,
          "./Dynamics": 131,
          "minimal-event-emitter": 210
      }],
      139: [function(t, e, n) {
          "use strict";
          var r, i = t("../util/clearOwnProperties");
          function o(t, e, n) {
              var r = s();
              if ("wheel" === r)
                  this._fun = e,
                  this._elem = t,
                  this._elem.addEventListener("wheel", this._fun, n);
              else {
                  if ("mousewheel" !== r)
                      throw new Error("Browser does not support mouse wheel events");
                  this._fun = function(t) {
                      return function(e) {
                          e || (e = window.event);
                          var n = {
                              originalEvent: e,
                              target: e.target || e.srcElement,
                              type: "wheel",
                              deltaMode: 1,
                              deltaX: 0,
                              deltaZ: 0,
                              timeStamp: e.timeStamp || Date.now(),
                              preventDefault: e.preventDefault.bind(e)
                          };
                          return n.deltaY = -.025 * e.wheelDelta,
                          e.wheelDeltaX && (n.deltaX = -.025 * e.wheelDeltaX),
                          t(n)
                      }
                  }(e),
                  this._elem = t,
                  this._elem.addEventListener("mousewheel", this._fun, n)
              }
          }
          function s() {
              return void 0 !== r ? r : r = "onwheel"in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : null
          }
          o.prototype.destroy = function() {
              this._elem.removeEventListener(s(), this._fun),
              i(this)
          }
          ,
          e.exports = o
      }
      , {
          "../util/clearOwnProperties": 182
      }],
      140: [function(t, e, n) {
          "use strict";
          var r = t("../util/defaults")
            , i = t("./Drag")
            , o = t("./Qtvr")
            , s = t("./ScrollZoom")
            , a = t("./PinchZoom")
            , u = t("./Key")
            , l = {
              mouseViewMode: "drag"
          };
          e.exports = function(t, e, n) {
              n = r(n || {}, l);
              var c = {
                  mouseViewDrag: new i(e,"mouse"),
                  mouseViewQtvr: new o(e,"mouse"),
                  touchView: new i(e,"touch"),
                  pinch: new a(e,"touch"),
                  leftArrowKey: new u(37,"x",-.7,3),
                  rightArrowKey: new u(39,"x",.7,3),
                  upArrowKey: new u(38,"y",-.7,3),
                  downArrowKey: new u(40,"y",.7,3),
                  plusKey: new u(107,"zoom",-.7,3),
                  minusKey: new u(109,"zoom",.7,3),
                  wKey: new u(87,"y",-.7,3),
                  aKey: new u(65,"x",-.7,3),
                  sKey: new u(83,"y",.7,3),
                  dKey: new u(68,"x",.7,3),
                  qKey: new u(81,"roll",.7,3),
                  eKey: new u(69,"roll",-.7,3)
              };
              !1 !== n.scrollZoom && (c.scrollZoom = new s(e));
              var h = {
                  arrowKeys: ["leftArrowKey", "rightArrowKey", "upArrowKey", "downArrowKey"],
                  plusMinusKeys: ["plusKey", "minusKey"],
                  wasdKeys: ["wKey", "aKey", "sKey", "dKey"],
                  qeKeys: ["qKey", "eKey"]
              }
                , p = ["scrollZoom", "touchView", "pinch"];
              switch (n.mouseViewMode) {
              case "drag":
                  p.push("mouseViewDrag");
                  break;
              case "qtvr":
                  p.push("mouseViewQtvr");
                  break;
              default:
                  throw new Error("Unknown mouse view mode: " + n.mouseViewMode)
              }
              for (var f in c) {
                  var d = c[f];
                  t.registerMethod(f, d),
                  p.indexOf(f) >= 0 && t.enableMethod(f)
              }
              for (var m in h) {
                  var v = h[m];
                  t.addMethodGroup(m, v)
              }
              return c
          }
      }
      , {
          "../util/defaults": 187,
          "./Drag": 130,
          "./Key": 134,
          "./PinchZoom": 135,
          "./Qtvr": 136,
          "./ScrollZoom": 137
      }],
      141: [function(t, e, n) {
          "use strict";
          function r(t, e, n, r) {
              var i = Math.atan(e / t);
              r[0] = n * Math.cos(i),
              r[1] = n * Math.sin(i)
          }
          e.exports = {
              maxFriction: function(t, e, n, i, o) {
                  var s = Math.sqrt(Math.pow(e, 2) + Math.pow(n, 2));
                  r(e, n, t = Math.max(t, s / i), o),
                  o[0] = Math.abs(o[0]),
                  o[1] = Math.abs(o[1])
              },
              changeVectorNorm: r
          }
      }
      , {}],
      142: [function(t, e, n) {
          "use strict";
          var r = t("../util/inherits")
            , i = t("../util/hash")
            , o = t("../TileSearcher")
            , s = t("../collections/LruMap")
            , a = t("./Level")
            , u = t("./common").makeLevelList
            , l = t("./common").makeSelectableLevelList
            , c = t("../util/clamp")
            , h = t("../util/cmp")
            , p = t("../util/type")
            , f = t("gl-matrix").vec3
            , d = t("gl-matrix").vec4
            , m = 64
            , v = {
              f: {
                  x: 0,
                  y: 0
              },
              b: {
                  x: 0,
                  y: Math.PI
              },
              l: {
                  x: 0,
                  y: Math.PI / 2
              },
              r: {
                  x: 0,
                  y: -Math.PI / 2
              },
              u: {
                  x: Math.PI / 2,
                  y: 0
              },
              d: {
                  x: -Math.PI / 2,
                  y: 0
              }
          }
            , y = f.create();
          function g(t, e, n, r) {
              e && f.rotateZ(t, t, y, e),
              n && f.rotateX(t, t, y, n),
              r && f.rotateY(t, t, y, r)
          }
          for (var _ = {}, b = 0; b < "fudlrb".length; b++) {
              var w = "fudlrb"[b]
                , x = v[w]
                , E = f.fromValues(0, 0, -1);
              g(E, 0, x.x, x.y),
              _[w] = E
          }
          var M = {
              f: ["l", "r", "u", "d"],
              b: ["r", "l", "u", "d"],
              l: ["b", "f", "u", "d"],
              r: ["f", "b", "u", "d"],
              u: ["l", "r", "b", "f"],
              d: ["l", "r", "f", "b"]
          }
            , S = [[0, 1], [1, 0], [0, -1], [-1, 0]];
          function T(t, e, n, r, i) {
              this.face = t,
              this.x = e,
              this.y = n,
              this.z = r,
              this._geometry = i,
              this._level = i.levelList[r]
          }
          function C(t) {
              if (this.constructor.super_.call(this, t),
              this._size = t.size,
              this._tileSize = t.tileSize,
              this._size % this._tileSize != 0)
                  throw new Error("Level size is not multiple of tile size: " + this._size + " " + this._tileSize)
          }
          function P(t) {
              if ("array" !== p(t))
                  throw new Error("Level list must be an array");
              this.levelList = u(t, C),
              this.selectableLevelList = l(this.levelList);
              for (var e = 1; e < this.levelList.length; e++)
                  this.levelList[e]._validateWithParentLevel(this.levelList[e - 1]);
              this._tileSearcher = new o(this),
              this._neighborsCache = new s(m),
              this._vec = d.create(),
              this._viewSize = {}
          }
          T.prototype.rotX = function() {
              return v[this.face].x
          }
          ,
          T.prototype.rotY = function() {
              return v[this.face].y
          }
          ,
          T.prototype.centerX = function() {
              return (this.x + .5) / this._level.numHorizontalTiles() - .5
          }
          ,
          T.prototype.centerY = function() {
              return .5 - (this.y + .5) / this._level.numVerticalTiles()
          }
          ,
          T.prototype.scaleX = function() {
              return 1 / this._level.numHorizontalTiles()
          }
          ,
          T.prototype.scaleY = function() {
              return 1 / this._level.numVerticalTiles()
          }
          ,
          T.prototype.width = function() {
              return this._level.tileWidth()
          }
          ,
          T.prototype.height = function() {
              return this._level.tileHeight()
          }
          ,
          T.prototype.levelWidth = function() {
              return this._level.width()
          }
          ,
          T.prototype.levelHeight = function() {
              return this._level.height()
          }
          ,
          T.prototype.atTopLevel = function() {
              return 0 === this.z
          }
          ,
          T.prototype.atBottomLevel = function() {
              return this.z === this._geometry.levelList.length - 1
          }
          ,
          T.prototype.atTopEdge = function() {
              return 0 === this.y
          }
          ,
          T.prototype.atBottomEdge = function() {
              return this.y === this._level.numVerticalTiles() - 1
          }
          ,
          T.prototype.atLeftEdge = function() {
              return 0 === this.x
          }
          ,
          T.prototype.atRightEdge = function() {
              return this.x === this._level.numHorizontalTiles() - 1
          }
          ,
          T.prototype.padTop = function() {
              return this.atTopEdge() && /[fu]/.test(this.face)
          }
          ,
          T.prototype.padBottom = function() {
              return !this.atBottomEdge() || /[fd]/.test(this.face)
          }
          ,
          T.prototype.padLeft = function() {
              return this.atLeftEdge() && /[flud]/.test(this.face)
          }
          ,
          T.prototype.padRight = function() {
              return !this.atRightEdge() || /[frud]/.test(this.face)
          }
          ,
          T.prototype.vertices = function(t) {
              t || (t = [f.create(), f.create(), f.create(), f.create()]);
              var e = v[this.face];
              function n(t, n, r) {
                  f.set(t, n, r, -.5),
                  g(t, 0, e.x, e.y)
              }
              var r = this.centerX() - this.scaleX() / 2
                , i = this.centerX() + this.scaleX() / 2
                , o = this.centerY() - this.scaleY() / 2
                , s = this.centerY() + this.scaleY() / 2;
              return n(t[0], r, s),
              n(t[1], i, s),
              n(t[2], i, o),
              n(t[3], r, o),
              t
          }
          ,
          T.prototype.parent = function() {
              if (this.atTopLevel())
                  return null;
              var t = this.face
                , e = this.z
                , n = this.x
                , r = this.y
                , i = this._geometry
                , o = i.levelList[e]
                , s = i.levelList[e - 1];
              return new T(t,Math.floor(n / o.numHorizontalTiles() * s.numHorizontalTiles()),Math.floor(r / o.numVerticalTiles() * s.numVerticalTiles()),e - 1,i)
          }
          ,
          T.prototype.children = function(t) {
              if (this.atBottomLevel())
                  return null;
              var e = this.face
                , n = this.z
                , r = this.x
                , i = this.y
                , o = this._geometry
                , s = o.levelList[n]
                , a = o.levelList[n + 1]
                , u = a.numHorizontalTiles() / s.numHorizontalTiles()
                , l = a.numVerticalTiles() / s.numVerticalTiles();
              t = t || [];
              for (var c = 0; c < u; c++)
                  for (var h = 0; h < l; h++) {
                      var p = u * r + c
                        , f = l * i + h
                        , d = n + 1;
                      t.push(new T(e,p,f,d,o))
                  }
              return t
          }
          ,
          T.prototype.neighbors = function() {
              var t = this._geometry
                , e = t._neighborsCache
                , n = e.get(this);
              if (n)
                  return n;
              for (var r = t._vec, i = this.face, o = this.x, s = this.y, a = this.z, u = this._level, l = u.numHorizontalTiles(), h = u.numVerticalTiles(), p = [], d = 0; d < S.length; d++) {
                  var m = o + S[d][0]
                    , y = s + S[d][1]
                    , _ = a
                    , b = i;
                  if (m < 0 || m >= l || y < 0 || y >= h) {
                      var w, x = this.centerX(), E = this.centerY();
                      m < 0 ? (f.set(r, -.5, E, -.5),
                      b = M[i][0]) : m >= l ? (f.set(r, .5, E, -.5),
                      b = M[i][1]) : y < 0 ? (f.set(r, x, .5, -.5),
                      b = M[i][2]) : y >= h && (f.set(r, x, -.5, -.5),
                      b = M[i][3]),
                      g(r, 0, (w = v[i]).x, w.y),
                      g(r, 0, -(w = v[b]).x, -w.y),
                      m = c(Math.floor((.5 + r[0]) * l), 0, l - 1),
                      y = c(Math.floor((.5 - r[1]) * h), 0, h - 1)
                  }
                  p.push(new T(b,m,y,_,t))
              }
              return e.set(this, p),
              p
          }
          ,
          T.prototype.hash = function() {
              return i("fudlrb".indexOf(this.face), this.z, this.y, this.x)
          }
          ,
          T.prototype.equals = function(t) {
              return this.geometry === t.geometry && this.face === t.face && this.z === t.z && this.y === t.y && this.x === t.x
          }
          ,
          T.prototype.cmp = function(t) {
              return h(this.z, t.z) || h("fudlrb".indexOf(this.face), "fudlrb".indexOf(t.face)) || h(this.y, t.y) || h(this.x, t.x)
          }
          ,
          T.prototype.str = function() {
              return "CubeTile(" + tile.face + ", " + tile.x + ", " + tile.y + ", " + tile.z + ")"
          }
          ,
          r(C, a),
          C.prototype.width = function() {
              return this._size
          }
          ,
          C.prototype.height = function() {
              return this._size
          }
          ,
          C.prototype.tileWidth = function() {
              return this._tileSize
          }
          ,
          C.prototype.tileHeight = function() {
              return this._tileSize
          }
          ,
          C.prototype._validateWithParentLevel = function(t) {
              var e = this.width()
                , n = this.height()
                , r = this.tileWidth()
                , i = this.tileHeight()
                , o = this.numHorizontalTiles()
                , s = this.numVerticalTiles()
                , a = t.width()
                , u = t.height()
                , l = t.tileWidth()
                , c = t.tileHeight()
                , h = t.numHorizontalTiles()
                , p = t.numVerticalTiles();
              if (e % a != 0)
                  throw new Error("Level width must be multiple of parent level: " + e + " vs. " + a);
              if (n % u != 0)
                  throw new Error("Level height must be multiple of parent level: " + n + " vs. " + u);
              if (o % h != 0)
                  throw new Error("Number of horizontal tiles must be multiple of parent level: " + o + " (" + e + "/" + r + ") vs. " + h + " (" + a + "/" + l + ")");
              if (s % p != 0)
                  throw new Error("Number of vertical tiles must be multiple of parent level: " + s + " (" + n + "/" + i + ") vs. " + p + " (" + u + "/" + c + ")")
          }
          ,
          P.prototype.maxTileSize = function() {
              for (var t = 0, e = 0; e < this.levelList.length; e++) {
                  var n = this.levelList[e];
                  t = Math.max(t, n.tileWidth, n.tileHeight)
              }
              return t
          }
          ,
          P.prototype.levelTiles = function(t, e) {
              var n = this.levelList.indexOf(t)
                , r = t.numHorizontalTiles() - 1
                , i = t.numVerticalTiles() - 1;
              e = e || [];
              for (var o = 0; o < "fudlrb".length; o++)
                  for (var s = "fudlrb"[o], a = 0; a <= r; a++)
                      for (var u = 0; u <= i; u++)
                          e.push(new T(s,a,u,n,this));
              return e
          }
          ,
          P.prototype._closestTile = function(t, e) {
              var n = this._vec;
              d.set(n, 0, 0, 1, 1),
              d.transformMat4(n, n, t.inverseProjection());
              var r = 1 / 0
                , i = null;
              for (var o in _) {
                  var s = _[o]
                    , a = 1 - f.dot(s, n);
                  a < r && (r = a,
                  i = o)
              }
              for (var u = Math.max(Math.abs(n[0]), Math.abs(n[1]), Math.abs(n[2])) / .5, l = 0; l < 3; l++)
                  n[l] = n[l] / u;
              var h = v[i];
              g(n, 0, -h.x, -h.y);
              var p = this.levelList.indexOf(e)
                , m = e.numHorizontalTiles()
                , y = e.numVerticalTiles();
              return new T(i,c(Math.floor((.5 + n[0]) * m), 0, m - 1),c(Math.floor((.5 - n[1]) * y), 0, y - 1),p,this)
          }
          ,
          P.prototype.visibleTiles = function(t, e, n) {
              var r = this._viewSize
                , i = this._tileSearcher;
              if (n = n || [],
              t.size(r),
              0 === r.width || 0 === r.height)
                  return n;
              var o = this._closestTile(t, e);
              if (!i.search(t, o, n))
                  throw new Error("Starting tile is not visible");
              return n
          }
          ,
          P.Tile = P.prototype.Tile = T,
          P.type = P.prototype.type = "cube",
          T.type = T.prototype.type = "cube",
          e.exports = P
      }
      , {
          "../TileSearcher": 113,
          "../collections/LruMap": 120,
          "../util/clamp": 181,
          "../util/cmp": 183,
          "../util/hash": 194,
          "../util/inherits": 195,
          "../util/type": 207,
          "./Level": 145,
          "./common": 146,
          "gl-matrix": 5
      }],
      143: [function(t, e, n) {
          "use strict";
          var r = t("../util/inherits")
            , i = t("../util/hash")
            , o = t("../util/cmp")
            , s = t("./common")
            , a = t("./Level")
            , u = t("../util/type");
          function l(t, e) {
              this.z = t,
              this._geometry = e,
              this._level = e.levelList[t]
          }
          function c(t) {
              this.constructor.super_.call(this, t),
              this._width = t.width
          }
          function h(t) {
              if ("array" !== u(t))
                  throw new Error("Level list must be an array");
              this.levelList = s.makeLevelList(t, c),
              this.selectableLevelList = s.makeSelectableLevelList(this.levelList)
          }
          l.prototype.rotX = function() {
              return 0
          }
          ,
          l.prototype.rotY = function() {
              return 0
          }
          ,
          l.prototype.centerX = function() {
              return .5
          }
          ,
          l.prototype.centerY = function() {
              return .5
          }
          ,
          l.prototype.scaleX = function() {
              return 1
          }
          ,
          l.prototype.scaleY = function() {
              return 1
          }
          ,
          l.prototype.width = function() {
              return this._level.tileWidth()
          }
          ,
          l.prototype.height = function() {
              return this._level.tileHeight()
          }
          ,
          l.prototype.levelWidth = function() {
              return this._level.width()
          }
          ,
          l.prototype.levelHeight = function() {
              return this._level.height()
          }
          ,
          l.prototype.atTopLevel = function() {
              return 0 === this.z
          }
          ,
          l.prototype.atBottomLevel = function() {
              return this.z === this._geometry.levelList.length - 1
          }
          ,
          l.prototype.atTopEdge = function() {
              return !0
          }
          ,
          l.prototype.atBottomEdge = function() {
              return !0
          }
          ,
          l.prototype.atLeftEdge = function() {
              return !0
          }
          ,
          l.prototype.atRightEdge = function() {
              return !0
          }
          ,
          l.prototype.padTop = function() {
              return !1
          }
          ,
          l.prototype.padBottom = function() {
              return !1
          }
          ,
          l.prototype.padLeft = function() {
              return !1
          }
          ,
          l.prototype.padRight = function() {
              return !1
          }
          ,
          l.prototype.parent = function() {
              return this.atTopLevel() ? null : new l(this.z - 1,this._geometry)
          }
          ,
          l.prototype.children = function(t) {
              return this.atBottomLevel() ? null : ((t = t || []).push(new l(this.z + 1,this._geometry)),
              t)
          }
          ,
          l.prototype.neighbors = function() {
              return []
          }
          ,
          l.prototype.hash = function() {
              return i(this.z)
          }
          ,
          l.prototype.equals = function(t) {
              return this.geometry === t.geometry && this.z === t.z
          }
          ,
          l.prototype.cmp = function(t) {
              return o(this.z, t.z)
          }
          ,
          l.prototype.str = function() {
              return "EquirectTile(" + tile.z + ")"
          }
          ,
          r(c, a),
          c.prototype.width = function() {
              return this._width
          }
          ,
          c.prototype.height = function() {
              return this._width / 2
          }
          ,
          c.prototype.tileWidth = function() {
              return this._width
          }
          ,
          c.prototype.tileHeight = function() {
              return this._width / 2
          }
          ,
          h.prototype.maxTileSize = function() {
              for (var t = 0, e = 0; e < this.levelList.length; e++) {
                  var n = this.levelList[e];
                  t = Math.max(t, n.tileWidth, n.tileHeight)
              }
              return t
          }
          ,
          h.prototype.levelTiles = function(t, e) {
              var n = this.levelList.indexOf(t);
              return (e = e || []).push(new l(n,this)),
              e
          }
          ,
          h.prototype.visibleTiles = function(t, e, n) {
              var r = new l(this.levelList.indexOf(e),this);
              (n = n || []).length = 0,
              n.push(r)
          }
          ,
          h.Tile = h.prototype.Tile = l,
          h.type = h.prototype.type = "equirect",
          l.type = l.prototype.type = "equirect",
          e.exports = h
      }
      , {
          "../util/cmp": 183,
          "../util/hash": 194,
          "../util/inherits": 195,
          "../util/type": 207,
          "./Level": 145,
          "./common": 146
      }],
      144: [function(t, e, n) {
          "use strict";
          var r = t("../util/inherits")
            , i = t("../util/hash")
            , o = t("../TileSearcher")
            , s = t("../collections/LruMap")
            , a = t("./Level")
            , u = t("./common").makeLevelList
            , l = t("./common").makeSelectableLevelList
            , c = t("../util/clamp")
            , h = t("../util/mod")
            , p = t("../util/cmp")
            , f = t("../util/type")
            , d = t("gl-matrix").vec2
            , m = t("gl-matrix").vec4
            , v = 64
            , y = [[0, 1], [1, 0], [0, -1], [-1, 0]];
          function g(t, e, n, r) {
              this.x = t,
              this.y = e,
              this.z = n,
              this._geometry = r,
              this._level = r.levelList[n]
          }
          function _(t) {
              this.constructor.super_.call(this, t),
              this._width = t.width,
              this._height = t.height,
              this._tileWidth = t.tileWidth,
              this._tileHeight = t.tileHeight
          }
          function b(t) {
              if ("array" !== f(t))
                  throw new Error("Level list must be an array");
              this.levelList = u(t, _),
              this.selectableLevelList = l(this.levelList);
              for (var e = 1; e < this.levelList.length; e++)
                  this.levelList[e]._validateWithParentLevel(this.levelList[e - 1]);
              this._tileSearcher = new o(this),
              this._neighborsCache = new s(v),
              this._vec = m.create(),
              this._viewSize = {}
          }
          g.prototype.rotX = function() {
              return 0
          }
          ,
          g.prototype.rotY = function() {
              return 0
          }
          ,
          g.prototype.centerX = function() {
              var t = this._level.width()
                , e = this._level.tileWidth();
              return (this.x * e + .5 * this.width()) / t - .5
          }
          ,
          g.prototype.centerY = function() {
              var t = this._level.height()
                , e = this._level.tileHeight();
              return .5 - (this.y * e + .5 * this.height()) / t
          }
          ,
          g.prototype.scaleX = function() {
              var t = this._level.width();
              return this.width() / t
          }
          ,
          g.prototype.scaleY = function() {
              var t = this._level.height();
              return this.height() / t
          }
          ,
          g.prototype.width = function() {
              var t = this._level.width()
                , e = this._level.tileWidth();
              return this.atRightEdge() && h(t, e) || e
          }
          ,
          g.prototype.height = function() {
              var t = this._level.height()
                , e = this._level.tileHeight();
              return this.atBottomEdge() && h(t, e) || e
          }
          ,
          g.prototype.levelWidth = function() {
              return this._level.width()
          }
          ,
          g.prototype.levelHeight = function() {
              return this._level.height()
          }
          ,
          g.prototype.atTopLevel = function() {
              return 0 === this.z
          }
          ,
          g.prototype.atBottomLevel = function() {
              return this.z === this._geometry.levelList.length - 1
          }
          ,
          g.prototype.atTopEdge = function() {
              return 0 === this.y
          }
          ,
          g.prototype.atBottomEdge = function() {
              return this.y === this._level.numVerticalTiles() - 1
          }
          ,
          g.prototype.atLeftEdge = function() {
              return 0 === this.x
          }
          ,
          g.prototype.atRightEdge = function() {
              return this.x === this._level.numHorizontalTiles() - 1
          }
          ,
          g.prototype.padTop = function() {
              return !1
          }
          ,
          g.prototype.padBottom = function() {
              return !this.atBottomEdge()
          }
          ,
          g.prototype.padLeft = function() {
              return !1
          }
          ,
          g.prototype.padRight = function() {
              return !this.atRightEdge()
          }
          ,
          g.prototype.vertices = function(t) {
              t || (t = [d.create(), d.create(), d.create(), d.create()]);
              var e = this.centerX() - this.scaleX() / 2
                , n = this.centerX() + this.scaleX() / 2
                , r = this.centerY() - this.scaleY() / 2
                , i = this.centerY() + this.scaleY() / 2;
              return d.set(t[0], e, i),
              d.set(t[1], n, i),
              d.set(t[2], n, r),
              d.set(t[3], e, r),
              t
          }
          ,
          g.prototype.parent = function() {
              if (this.atTopLevel())
                  return null;
              var t = this._geometry
                , e = this.z - 1;
              return new g(Math.floor(this.x / 2),Math.floor(this.y / 2),e,t)
          }
          ,
          g.prototype.children = function(t) {
              if (this.atBottomLevel())
                  return null;
              var e = this._geometry
                , n = this.z + 1;
              return (t = t || []).push(new g(2 * this.x,2 * this.y,n,e)),
              t.push(new g(2 * this.x,2 * this.y + 1,n,e)),
              t.push(new g(2 * this.x + 1,2 * this.y,n,e)),
              t.push(new g(2 * this.x + 1,2 * this.y + 1,n,e)),
              t
          }
          ,
          g.prototype.neighbors = function() {
              var t = this._geometry
                , e = t._neighborsCache
                , n = e.get(this);
              if (n)
                  return n;
              for (var r = this.x, i = this.y, o = this.z, s = this._level, a = s.numHorizontalTiles() - 1, u = s.numVerticalTiles() - 1, l = [], c = 0; c < y.length; c++) {
                  var h = r + y[c][0]
                    , p = i + y[c][1]
                    , f = o;
                  0 <= h && h <= a && 0 <= p && p <= u && l.push(new g(h,p,f,t))
              }
              return e.set(this, l),
              l
          }
          ,
          g.prototype.hash = function() {
              return i(this.z, this.y, this.x)
          }
          ,
          g.prototype.equals = function(t) {
              return this.geometry === t.geometry && this.z === t.z && this.y === t.y && this.x === t.x
          }
          ,
          g.prototype.cmp = function(t) {
              return p(this.z, t.z) || p(this.y, t.y) || p(this.x, t.x)
          }
          ,
          g.prototype.str = function() {
              return "FlatTile(" + tile.x + ", " + tile.y + ", " + tile.z + ")"
          }
          ,
          r(_, a),
          _.prototype.width = function() {
              return this._width
          }
          ,
          _.prototype.height = function() {
              return this._height
          }
          ,
          _.prototype.tileWidth = function() {
              return this._tileWidth
          }
          ,
          _.prototype.tileHeight = function() {
              return this._tileHeight
          }
          ,
          _.prototype._validateWithParentLevel = function(t) {
              var e = this.width()
                , n = this.height()
                , r = this.tileWidth()
                , i = this.tileHeight()
                , o = t.width()
                , s = t.height()
                , a = t.tileWidth()
                , u = t.tileHeight();
              return e % o != 0 ? new Error("Level width must be multiple of parent level: " + e + " vs. " + o) : n % s != 0 ? new Error("Level height must be multiple of parent level: " + n + " vs. " + s) : r % a != 0 ? new Error("Level tile width must be multiple of parent level: " + r + " vs. " + a) : i % u != 0 ? new Error("Level tile height must be multiple of parent level: " + i + " vs. " + u) : void 0
          }
          ,
          b.prototype.maxTileSize = function() {
              for (var t = 0, e = 0; e < this.levelList.length; e++) {
                  var n = this.levelList[e];
                  t = Math.max(t, n.tileWidth, n.tileHeight)
              }
              return t
          }
          ,
          b.prototype.levelTiles = function(t, e) {
              var n = this.levelList.indexOf(t)
                , r = t.numHorizontalTiles() - 1
                , i = t.numVerticalTiles() - 1;
              e || (e = []);
              for (var o = 0; o <= r; o++)
                  for (var s = 0; s <= i; s++)
                      e.push(new g(o,s,n,this));
              return e
          }
          ,
          b.prototype._closestTile = function(t, e) {
              var n = this._vec;
              m.set(n, 0, 0, 1, 1),
              m.transformMat4(n, n, t.inverseProjection());
              var r = .5 + n[0]
                , i = .5 - n[1]
                , o = this.levelList.indexOf(e)
                , s = e.width()
                , a = e.height()
                , u = e.tileWidth()
                , l = e.tileHeight()
                , h = e.numHorizontalTiles()
                , p = e.numVerticalTiles();
              return new g(c(Math.floor(r * s / u), 0, h - 1),c(Math.floor(i * a / l), 0, p - 1),o,this)
          }
          ,
          b.prototype.visibleTiles = function(t, e, n) {
              var r = this._viewSize
                , i = this._tileSearcher;
              if (n = n || [],
              t.size(r),
              0 === r.width || 0 === r.height)
                  return n;
              var o = this._closestTile(t, e);
              if (!i.search(t, o, n))
                  throw new Error("Starting tile is not visible");
              return n
          }
          ,
          b.Tile = b.prototype.Tile = g,
          b.type = b.prototype.type = "flat",
          g.type = g.prototype.type = "flat",
          e.exports = b
      }
      , {
          "../TileSearcher": 113,
          "../collections/LruMap": 120,
          "../util/clamp": 181,
          "../util/cmp": 183,
          "../util/hash": 194,
          "../util/inherits": 195,
          "../util/mod": 197,
          "../util/type": 207,
          "./Level": 145,
          "./common": 146,
          "gl-matrix": 5
      }],
      145: [function(t, e, n) {
          "use strict";
          function r(t) {
              this._fallbackOnly = !!t.fallbackOnly
          }
          r.prototype.numHorizontalTiles = function() {
              return Math.ceil(this.width() / this.tileWidth())
          }
          ,
          r.prototype.numVerticalTiles = function() {
              return Math.ceil(this.height() / this.tileHeight())
          }
          ,
          r.prototype.fallbackOnly = function() {
              return this._fallbackOnly
          }
          ,
          e.exports = r
      }
      , {}],
      146: [function(t, e, n) {
          "use strict";
          var r = t("../util/cmp");
          e.exports = {
              makeLevelList: function(t, e) {
                  for (var n = [], i = 0; i < t.length; i++)
                      n.push(new e(t[i]));
                  return n.sort((function(t, e) {
                      return r(t.width(), e.width())
                  }
                  )),
                  n
              },
              makeSelectableLevelList: function(t) {
                  for (var e = [], n = 0; n < t.length; n++)
                      t[n]._fallbackOnly || e.push(t[n]);
                  if (!e.length)
                      throw new Error("No selectable levels in list");
                  return e
              }
          }
      }
      , {
          "../util/cmp": 183
      }],
      147: [function(t, e, n) {
          "use strict";
          e.exports = {
              WebGlStage: t("./stages/WebGl"),
              CssStage: t("./stages/Css"),
              FlashStage: t("./stages/Flash"),
              WebGlCubeRenderer: t("./renderers/WebGlCube"),
              WebGlFlatRenderer: t("./renderers/WebGlFlat"),
              WebGlEquirectRenderer: t("./renderers/WebGlEquirect"),
              CssCubeRenderer: t("./renderers/CssCube"),
              CssFlatRenderer: t("./renderers/CssFlat"),
              FlashCubeRenderer: t("./renderers/FlashCube"),
              FlashFlatRenderer: t("./renderers/FlashFlat"),
              registerDefaultRenderers: t("./renderers/registerDefaultRenderers"),
              CubeGeometry: t("./geometries/Cube"),
              FlatGeometry: t("./geometries/Flat"),
              EquirectGeometry: t("./geometries/Equirect"),
              RectilinearView: t("./views/Rectilinear"),
              FlatView: t("./views/Flat"),
              ImageUrlSource: t("./sources/ImageUrl"),
              SingleAssetSource: t("./sources/SingleAsset"),
              StaticAsset: t("./assets/Static"),
              DynamicAsset: t("./assets/Dynamic"),
              TextureStore: t("./TextureStore"),
              Layer: t("./Layer"),
              RenderLoop: t("./RenderLoop"),
              KeyControlMethod: t("./controls/Key"),
              DragControlMethod: t("./controls/Drag"),
              QtvrControlMethod: t("./controls/Qtvr"),
              ScrollZoomControlMethod: t("./controls/ScrollZoom"),
              PinchZoomControlMethod: t("./controls/PinchZoom"),
              VelocityControlMethod: t("./controls/Velocity"),
              ElementPressControlMethod: t("./controls/ElementPress"),
              Controls: t("./controls/Controls"),
              Dynamics: t("./controls/Dynamics"),
              Viewer: t("./Viewer"),
              Scene: t("./Scene"),
              Hotspot: t("./Hotspot"),
              HotspotContainer: t("./HotspotContainer"),
              colorEffects: t("./colorEffects"),
              registerDefaultControls: t("./controls/registerDefaultControls"),
              autorotate: t("./autorotate"),
              util: {
                  async: t("./util/async"),
                  cancelize: t("./util/cancelize"),
                  chain: t("./util/chain"),
                  clamp: t("./util/clamp"),
                  clearOwnProperties: t("./util/clearOwnProperties"),
                  cmp: t("./util/cmp"),
                  compose: t("./util/compose"),
                  convertFov: t("./util/convertFov"),
                  decimal: t("./util/decimal"),
                  defaults: t("./util/defaults"),
                  defer: t("./util/defer"),
                  degToRad: t("./util/degToRad"),
                  delay: t("./util/delay"),
                  dom: t("./util/dom"),
                  extend: t("./util/extend"),
                  hash: t("./util/hash"),
                  inherits: t("./util/inherits"),
                  mod: t("./util/mod"),
                  noop: t("./util/noop"),
                  now: t("./util/now"),
                  once: t("./util/once"),
                  pixelRatio: t("./util/pixelRatio"),
                  radToDeg: t("./util/radToDeg"),
                  real: t("./util/real"),
                  retry: t("./util/retry"),
                  tween: t("./util/tween"),
                  type: t("./util/type")
              },
              dependencies: {
                  bowser: t("bowser"),
                  glMatrix: t("gl-matrix"),
                  eventEmitter: t("minimal-event-emitter"),
                  hammerjs: t("hammerjs")
              }
          }
      }
      , {
          "./Hotspot": 106,
          "./HotspotContainer": 107,
          "./Layer": 108,
          "./RenderLoop": 110,
          "./Scene": 111,
          "./TextureStore": 112,
          "./Viewer": 115,
          "./assets/Dynamic": 116,
          "./assets/Static": 118,
          "./autorotate": 119,
          "./colorEffects": 126,
          "./controls/Controls": 129,
          "./controls/Drag": 130,
          "./controls/Dynamics": 131,
          "./controls/ElementPress": 132,
          "./controls/Key": 134,
          "./controls/PinchZoom": 135,
          "./controls/Qtvr": 136,
          "./controls/ScrollZoom": 137,
          "./controls/Velocity": 138,
          "./controls/registerDefaultControls": 140,
          "./geometries/Cube": 142,
          "./geometries/Equirect": 143,
          "./geometries/Flat": 144,
          "./renderers/CssCube": 151,
          "./renderers/CssFlat": 152,
          "./renderers/FlashCube": 154,
          "./renderers/FlashFlat": 155,
          "./renderers/WebGlCube": 158,
          "./renderers/WebGlEquirect": 159,
          "./renderers/WebGlFlat": 160,
          "./renderers/registerDefaultRenderers": 161,
          "./sources/ImageUrl": 166,
          "./sources/SingleAsset": 167,
          "./stages/Css": 168,
          "./stages/Flash": 169,
          "./stages/WebGl": 172,
          "./util/async": 177,
          "./util/cancelize": 179,
          "./util/chain": 180,
          "./util/clamp": 181,
          "./util/clearOwnProperties": 182,
          "./util/cmp": 183,
          "./util/compose": 184,
          "./util/convertFov": 185,
          "./util/decimal": 186,
          "./util/defaults": 187,
          "./util/defer": 188,
          "./util/degToRad": 189,
          "./util/delay": 190,
          "./util/dom": 191,
          "./util/extend": 192,
          "./util/hash": 194,
          "./util/inherits": 195,
          "./util/mod": 197,
          "./util/noop": 198,
          "./util/now": 199,
          "./util/once": 200,
          "./util/pixelRatio": 201,
          "./util/radToDeg": 203,
          "./util/real": 204,
          "./util/retry": 205,
          "./util/tween": 206,
          "./util/type": 207,
          "./views/Flat": 208,
          "./views/Rectilinear": 209,
          bowser: 105,
          "gl-matrix": 5,
          hammerjs: 15,
          "minimal-event-emitter": 210
      }],
      148: [function(t, e, n) {
          "use strict";
          var r = t("../assets/Flash")
            , i = t("../NetworkError")
            , o = t("../util/once");
          function s(t) {
              if ("flash" !== t.type)
                  throw new Error("Stage type incompatible with loader");
              this._stage = t
          }
          s.prototype.loadImage = function(t, e, n) {
              var s = this._stage
                , a = s.flashElement()
                , u = e && e.x || 0
                , l = e && e.y || 0
                , c = e && e.width || 1
                , h = e && e.height || 1
                , p = a.loadImage(t, c, h, u, l);
              function f(e, o) {
                  o === p && (s.removeFlashCallbackListener("imageLoaded", f),
                  e ? n(new i("Network error: " + t)) : n(null, new r(a,p)))
              }
              return n = o(n),
              s.addFlashCallbackListener("imageLoaded", f),
              function() {
                  a.cancelImage(p),
                  s.removeFlashCallbackListener("imageLoaded", f),
                  n.apply(null, arguments)
              }
          }
          ,
          e.exports = s
      }
      , {
          "../NetworkError": 109,
          "../assets/Flash": 117,
          "../util/once": 200
      }],
      149: [function(t, e, n) {
          "use strict";
          var r = t("../assets/Static")
            , i = t("../NetworkError")
            , o = t("../util/once");
          function s(t) {
              if ("webgl" !== t.type && "css" !== t.type)
                  throw new Error("Stage type incompatible with loader");
              this._stage = t
          }
          s.prototype.loadImage = function(t, e, n) {
              var s = new Image;
              s.crossOrigin = "anonymous";
              var a = e && e.x || 0
                , u = e && e.y || 0
                , l = e && e.width || 1
                , c = e && e.height || 1;
              return n = o(n),
              s.onload = function() {
                  if (0 === a && 0 === u && 1 === l && 1 === c)
                      n(null, new r(s));
                  else {
                      a *= s.naturalWidth,
                      u *= s.naturalHeight,
                      l *= s.naturalWidth,
                      c *= s.naturalHeight;
                      var t = document.createElement("canvas");
                      t.width = l,
                      t.height = c,
                      t.getContext("2d").drawImage(s, a, u, l, c, 0, 0, l, c),
                      n(null, new r(t))
                  }
              }
              ,
              s.onerror = function() {
                  n(new i("Network error: " + t))
              }
              ,
              s.src = t,
              function() {
                  s.onload = s.onerror = null,
                  s.src = "",
                  n.apply(null, arguments)
              }
          }
          ,
          e.exports = s
      }
      , {
          "../NetworkError": 109,
          "../assets/Static": 118,
          "../util/once": 200
      }],
      150: [function(t, e, n) {
          "use strict";
          var r = t("../collections/Map")
            , i = t("../util/decimal")
            , o = t("../util/dom").setOverflowHidden
            , s = t("../util/dom").setNoPointerEvents
            , a = t("../util/dom").setNullTransform
            , u = t("../util/dom").setTransform
            , l = t("../util/clearOwnProperties")
            , c = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.css;
          function h(t, e) {
              return t.cmp(e)
          }
          function p(t, e, n) {
              this._root = t,
              this._browserQuirks = e;
              var i = document.createElement("div");
              t.appendChild(i),
              i.style.position = "absolute",
              o(i),
              s(i),
              this._browserQuirks.useNullTransform && a(i),
              this.domElement = i,
              this._oldTileList = [],
              this._newTileList = [],
              this._textureMap = new r
          }
          p.prototype.destroy = function() {
              this._root.removeChild(this.domElement),
              l(this)
          }
          ,
          p.prototype.startLayer = function(t, e) {
              var n = this.domElement
                , r = this._root.clientWidth
                , o = this._root.clientHeight;
              n.style.left = i(r * e.left) + "px",
              n.style.top = i(o * e.top) + "px",
              n.style.width = i(r * e.width) + "px",
              n.style.height = i(o * e.height) + "px";
              var s = 1
                , a = t.effects();
              a && null != a.opacity && (s = a.opacity),
              n.style.opacity = s,
              this._newTileList.length = 0,
              this._textureMap.clear()
          }
          ,
          p.prototype.renderTile = function(t, e) {
              this._newTileList.push(t),
              this._textureMap.set(t, e)
          }
          ,
          p.prototype.endLayer = function(t, e) {
              var n, r, i, o, s, a, l, p, f = this.domElement, d = this._oldTileList, m = this._newTileList, v = this._textureMap, y = t.view();
              if (f.children.length !== d.length)
                  throw new Error("DOM not in sync with tile list");
              for (m.sort(h),
              i = d[n = 0],
              l = f.firstChild,
              r = 0; r < m.length; r++) {
                  for (o = m[r]; n < d.length && !(i.cmp(o) >= 0); )
                      p = l.nextSibling,
                      f.removeChild(l),
                      l = p,
                      i = d[++n];
                  if (!(a = (s = v.get(o)) ? s._canvas : null))
                      throw new Error("Rendering tile with missing texture");
                  if (i && 0 === i.cmp(o)) {
                      if (a != l)
                          throw new Error("DOM not in sync with tile list");
                      l = l.nextSibling,
                      i = d[++n]
                  } else
                      f.insertBefore(a, l);
                  u(a, this.calculateTransform(o, s, y)),
                  c && a.setAttribute("data-tile", o.str())
              }
              for (; l; )
                  p = l.nextSibling,
                  f.removeChild(l),
                  l = p;
              if (f.children.length !== m.length)
                  throw new Error("DOM not in sync with tile list");
              var g = this._oldTileList;
              this._oldTileList = this._newTileList,
              this._newTileList = g
          }
          ,
          e.exports = p
      }
      , {
          "../collections/Map": 122,
          "../util/clearOwnProperties": 182,
          "../util/decimal": 186,
          "../util/dom": 191
      }],
      151: [function(t, e, n) {
          "use strict";
          var r = t("../geometries/Cube").Tile
            , i = t("./CssBase")
            , o = t("../util/decimal");
          function s(t, e) {
              this.constructor.super_.call(this, t, e, r)
          }
          t("../util/inherits")(s, i),
          s.prototype.calculateTransform = function(t, e, n) {
              var r = this._browserQuirks.padSize
                , i = this._browserQuirks.reverseLevelDepth
                , s = this._browserQuirks.perspectiveNudge
                , a = ""
                , u = i ? 256 - t.z : t.levelWidth()
                , l = n.size()
                , c = l.width
                , h = l.height;
              a += "translate3d(" + o(c / 2) + "px, " + o(h / 2) + "px, 0px) ";
              var p = .5 * h / Math.tan(n.fov() / 2)
                , f = p + s;
              a += "perspective(" + o(p) + "px) translateZ(" + o(f) + "px) ";
              var d = -n.roll()
                , m = -n.pitch()
                , v = n.yaw();
              a += "rotateZ(" + o(d) + "rad) rotateX(" + o(m) + "rad) rotateY(" + o(v) + "rad) ";
              var y = -t.rotX()
                , g = t.rotY();
              a += "rotateX(" + o(y) + "rad) rotateY(" + o(g) + "rad) ";
              var _ = t.centerX() - t.scaleX() / 2
                , b = -(t.centerY() + t.scaleY() / 2) * u
                , w = -u / 2;
              if (a += "translate3d(" + o(_ * u) + "px, " + o(b) + "px, " + o(w) + "px) ",
              i) {
                  var x = u * t.scaleX() / t.width()
                    , E = u * t.scaleY() / t.height();
                  a += "scale(" + o(x) + ", " + o(E) + ") "
              }
              var M = t.padLeft() ? r : 0
                , S = t.padTop() ? r : 0;
              return 0 === M && 0 === S || (a += "translate3d(" + o(-M) + "px, " + o(-S) + "px, 0) "),
              a
          }
          ,
          e.exports = s
      }
      , {
          "../geometries/Cube": 142,
          "../util/decimal": 186,
          "../util/inherits": 195,
          "./CssBase": 150
      }],
      152: [function(t, e, n) {
          "use strict";
          var r = t("../geometries/Flat").Tile
            , i = t("./CssBase")
            , o = t("../util/decimal");
          function s(t, e) {
              this.constructor.super_.call(this, t, e, r)
          }
          t("../util/inherits")(s, i),
          s.prototype.calculateTransform = function(t, e, n) {
              var r = this._browserQuirks.padSize
                , i = ""
                , s = n.width()
                , a = n.height();
              i += "translateX(" + o(s / 2) + "px) translateY(" + o(a / 2) + "px) ";
              var u = s / n._zoomX()
                , l = a / n._zoomY()
                , c = t.centerX() - t.scaleX() / 2 + .5
                , h = (.5 - t.centerY() - t.scaleY() / 2) * l;
              i += "translateX(" + o(c * u) + "px) translateY(" + o(h) + "px) ";
              var p = -n.x() * u
                , f = -n.y() * l;
              i += "translateX(" + o(p) + "px) translateY(" + o(f) + "px) ";
              var d = t.padLeft() ? r : 0
                , m = t.padTop() ? r : 0;
              0 === d && 0 === m || (i += "translateX(" + o(-d) + "px) translateY(" + o(-m) + "px) ");
              var v = u / t.levelWidth()
                , y = l / t.levelHeight();
              return i += "scale(" + o(v) + ", " + o(y) + ") "
          }
          ,
          e.exports = s
      }
      , {
          "../geometries/Flat": 144,
          "../util/decimal": 186,
          "../util/inherits": 195,
          "./CssBase": 150
      }],
      153: [function(t, e, n) {
          "use strict";
          var r = t("../collections/Map")
            , i = t("../util/clearOwnProperties");
          function o(t, e) {
              return t.cmp(e)
          }
          function s(t, e, n, i) {
              this._flashElement = t,
              this._layerId = e,
              this._quirks = n,
              this._tileList = [],
              this._textureMap = new r,
              this._layerCreated = !1
          }
          s.prototype.destroy = function() {
              this._layerCreated && this._flashElement.destroyLayer(this._layerId),
              i(this)
          }
          ,
          s.prototype.startLayer = function(t, e) {
              this._flashElement.isReady && this._flashElement.isReady() && (this._layerCreated || (this._flashElement.createLayer(this._layerId),
              this._layerCreated = !0),
              this._tileList.length = 0,
              this._textureMap.clear())
          }
          ,
          s.prototype.renderTile = function(t, e) {
              this._tileList.push(t),
              this._textureMap.set(t, e)
          }
          ,
          s.prototype.endLayer = function(t, e) {
              this._flashElement.isReady && this._flashElement.isReady() && (this._tileList.sort(o),
              this._renderOnFlash(t, e))
          }
          ,
          e.exports = s
      }
      , {
          "../collections/Map": 122,
          "../util/clearOwnProperties": 182
      }],
      154: [function(t, e, n) {
          "use strict";
          var r = t("./FlashBase")
            , i = t("../geometries/Cube").Tile
            , o = t("../util/inherits")
            , s = t("../util/radToDeg");
          function a(t, e, n) {
              this.constructor.super_.call(this, t, e, n, i),
              this._flashTileList = []
          }
          o(a, r),
          a.prototype._renderOnFlash = function(t, e) {
              var n = this._flashElement
                , r = this._layerId
                , i = this._quirks.padSize
                , o = this._tileList
                , a = this._textureMap
                , u = this._flashTileList;
              u.length = 0;
              for (var l = 0; l < o.length; l++) {
                  var c = o[l]
                    , h = a.get(c);
                  if (!h)
                      throw new Error("Rendering tile with missing texture");
                  var p = c.padTop() ? i : 0
                    , f = c.padBottom() ? i : 0
                    , d = c.padLeft() ? i : 0
                    , m = c.padRight() ? i : 0;
                  u.push({
                      textureId: h._textureId,
                      face: c.face,
                      width: c.width(),
                      height: c.height(),
                      centerX: c.centerX(),
                      centerY: c.centerY(),
                      rotX: s(c.rotX()),
                      rotY: s(c.rotY()),
                      levelSize: c.levelWidth(),
                      padTop: p,
                      padBottom: f,
                      padLeft: d,
                      padRight: m
                  })
              }
              var v = this._flashElement.clientWidth
                , y = this._flashElement.clientHeight
                , g = v * e.x
                , _ = y * e.y
                , b = v * e.width
                , w = y * e.height
                , x = 1
                , E = t.effects();
              E && null != E.opacity && (x = E.opacity);
              var M = t.view()
                , S = M.yaw()
                , T = M.pitch()
                , C = M.roll()
                , P = M.fov();
              n.drawCubeTiles(r, b, w, g, _, x, S, T, C, P, u)
          }
          ,
          e.exports = a
      }
      , {
          "../geometries/Cube": 142,
          "../util/inherits": 195,
          "../util/radToDeg": 203,
          "./FlashBase": 153
      }],
      155: [function(t, e, n) {
          "use strict";
          var r = t("./FlashBase")
            , i = t("../geometries/Flat").Tile;
          function o(t, e, n) {
              this.constructor.super_.call(this, t, e, n, i),
              this._flashTileList = []
          }
          t("../util/inherits")(o, r),
          o.prototype._renderOnFlash = function(t, e) {
              var n = this._flashElement
                , r = this._layerId
                , i = this._quirks.padSize
                , o = this._tileList
                , s = this._textureMap
                , a = this._flashTileList;
              a.length = 0;
              for (var u = 0; u < o.length; u++) {
                  var l = o[u]
                    , c = s.get(l);
                  if (!c)
                      throw new Error("Rendering tile with missing texture");
                  var h = l.padTop() ? i : 0
                    , p = l.padBottom() ? i : 0
                    , f = l.padLeft() ? i : 0
                    , d = l.padRight() ? i : 0;
                  a.push({
                      textureId: c._textureId,
                      width: l.width(),
                      height: l.height(),
                      centerX: l.centerX(),
                      centerY: l.centerY(),
                      scaleX: l.scaleX(),
                      scaleY: l.scaleY(),
                      levelWidth: l.levelWidth(),
                      levelHeight: l.levelHeight(),
                      padTop: h,
                      padBottom: p,
                      padLeft: f,
                      padRight: d
                  })
              }
              var m = this._flashElement.clientWidth
                , v = this._flashElement.clientHeight
                , y = m * e.x
                , g = v * e.y
                , _ = m * e.width
                , b = v * e.height
                , w = 1
                , x = t.effects();
              x && null != x.opacity && (w = x.opacity);
              var E = t.view()
                , M = E.x()
                , S = E.y()
                , T = E._zoomX()
                , C = E._zoomY();
              n.drawFlatTiles(r, _, b, y, g, w, M, S, T, C, a)
          }
          ,
          e.exports = o
      }
      , {
          "../geometries/Flat": 144,
          "../util/inherits": 195,
          "./FlashBase": 153
      }],
      156: [function(t, e, n) {
          "use strict";
          var r = t("gl-matrix").mat4
            , i = t("gl-matrix").vec3
            , o = t("../util/clearOwnProperties")
            , s = t("./WebGlCommon")
            , a = s.createConstantBuffers
            , u = s.destroyConstantBuffers
            , l = s.createShaderProgram
            , c = s.destroyShaderProgram
            , h = s.enableAttributes
            , p = s.disableAttributes
            , f = s.setViewport
            , d = s.setupPixelEffectUniforms
            , m = s.setDepth
            , v = s.setTexture
            , y = t("../shaders/vertexNormal")
            , g = t("../shaders/fragmentNormal")
            , _ = [0, 1, 2, 0, 2, 3]
            , b = [-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]
            , w = [0, 0, 1, 0, 1, 1, 0, 1]
            , x = ["aVertexPosition", "aTextureCoord"]
            , E = ["uDepth", "uOpacity", "uSampler", "uProjMatrix", "uViewportMatrix", "uColorOffset", "uColorMatrix"];
          function M(t) {
              this.gl = t,
              this.projMatrix = r.create(),
              this.viewportMatrix = r.create(),
              this.translateVector = i.create(),
              this.scaleVector = i.create(),
              this.constantBuffers = a(t, _, b, w),
              this.shaderProgram = l(t, y, g, x, E)
          }
          M.prototype.destroy = function() {
              u(this.gl, this.constantBuffers),
              c(this.gl, this.shaderProgram),
              o(this)
          }
          ,
          M.prototype.startLayer = function(t, e) {
              var n = this.gl
                , r = this.shaderProgram
                , i = this.constantBuffers
                , o = this.viewportMatrix;
              n.useProgram(r),
              h(n, r),
              f(n, t, e, o),
              n.uniformMatrix4fv(r.uViewportMatrix, !1, o),
              n.bindBuffer(n.ARRAY_BUFFER, i.vertexPositions),
              n.vertexAttribPointer(r.aVertexPosition, 3, n.FLOAT, n.FALSE, 0, 0),
              n.bindBuffer(n.ARRAY_BUFFER, i.textureCoords),
              n.vertexAttribPointer(r.aTextureCoord, 2, n.FLOAT, n.FALSE, 0, 0),
              d(n, t.effects(), {
                  opacity: r.uOpacity,
                  colorOffset: r.uColorOffset,
                  colorMatrix: r.uColorMatrix
              })
          }
          ,
          M.prototype.endLayer = function(t, e) {
              var n = this.gl
                , r = this.shaderProgram;
              p(n, r)
          }
          ,
          M.prototype.renderTile = function(t, e, n, i) {
              var o = this.gl
                , s = this.shaderProgram
                , a = this.constantBuffers
                , u = this.projMatrix
                , l = this.translateVector
                , c = this.scaleVector;
              l[0] = t.centerX(),
              l[1] = t.centerY(),
              l[2] = -.5,
              c[0] = t.scaleX(),
              c[1] = t.scaleY(),
              c[2] = 1,
              r.copy(u, n.view().projection()),
              r.rotateX(u, u, t.rotX()),
              r.rotateY(u, u, t.rotY()),
              r.translate(u, u, l),
              r.scale(u, u, c),
              o.uniformMatrix4fv(s.uProjMatrix, !1, u),
              m(o, s, i, t.z),
              v(o, s, e),
              o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, a.vertexIndices),
              o.drawElements(o.TRIANGLES, _.length, o.UNSIGNED_SHORT, 0)
          }
          ,
          e.exports = M
      }
      , {
          "../shaders/fragmentNormal": 163,
          "../shaders/vertexNormal": 165,
          "../util/clearOwnProperties": 182,
          "./WebGlCommon": 157,
          "gl-matrix": 5
      }],
      157: [function(t, e, n) {
          "use strict";
          var r = 256
            , i = 256
            , o = t("../util/clamp")
            , s = t("gl-matrix").vec4
            , a = t("gl-matrix").vec3
            , u = t("gl-matrix").mat4;
          function l(t, e, n) {
              var r = t.createShader(e);
              if (t.shaderSource(r, n),
              t.compileShader(r),
              !t.getShaderParameter(r, t.COMPILE_STATUS))
                  throw t.getShaderInfoLog(r);
              return r
          }
          function c(t, e, n, r) {
              var i = t.createBuffer();
              return t.bindBuffer(e, i),
              t.bufferData(e, r, n),
              i
          }
          var h = 1
            , p = s.create()
            , f = u.create();
          u.identity(f);
          var d = a.create()
            , m = a.create();
          e.exports = {
              createShaderProgram: function(t, e, n, r, i) {
                  var o = l(t, t.VERTEX_SHADER, e)
                    , s = l(t, t.FRAGMENT_SHADER, n)
                    , a = t.createProgram();
                  if (t.attachShader(a, o),
                  t.attachShader(a, s),
                  t.linkProgram(a),
                  !t.getProgramParameter(a, t.LINK_STATUS))
                      throw t.getProgramInfoLog(a);
                  for (var u = 0; u < r.length; u++) {
                      var c = r[u];
                      if (a[c] = t.getAttribLocation(a, c),
                      -1 === a[c])
                          throw new Error("Shader program has no " + c + " attribute")
                  }
                  for (var h = 0; h < i.length; h++) {
                      var p = i[h];
                      if (a[p] = t.getUniformLocation(a, p),
                      -1 === a[p])
                          throw new Error("Shader program has no " + p + " uniform")
                  }
                  return a
              },
              destroyShaderProgram: function(t, e) {
                  for (var n = t.getAttachedShaders(e), r = 0; r < n.length; r++) {
                      var i = n[r];
                      t.detachShader(e, i),
                      t.deleteShader(i)
                  }
                  t.deleteProgram(e)
              },
              createConstantBuffers: function(t, e, n, r) {
                  return {
                      vertexIndices: c(t, t.ELEMENT_ARRAY_BUFFER, t.STATIC_DRAW, new Uint16Array(e)),
                      vertexPositions: c(t, t.ARRAY_BUFFER, t.STATIC_DRAW, new Float32Array(n)),
                      textureCoords: c(t, t.ARRAY_BUFFER, t.STATIC_DRAW, new Float32Array(r))
                  }
              },
              destroyConstantBuffers: function(t, e) {
                  t.deleteBuffer(e.vertexIndices),
                  t.deleteBuffer(e.vertexPositions),
                  t.deleteBuffer(e.textureCoords)
              },
              enableAttributes: function(t, e) {
                  for (var n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < n; r++)
                      t.enableVertexAttribArray(r)
              },
              disableAttributes: function(t, e) {
                  for (var n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < n; r++)
                      t.disableVertexAttribArray(r)
              },
              setTexture: function(t, e, n) {
                  t.activeTexture(t.TEXTURE0),
                  t.bindTexture(t.TEXTURE_2D, n._texture),
                  t.uniform1i(e.uSampler, 0)
              },
              setDepth: function(t, e, n, o) {
                  var s = ((n + 1) * i - o) / (i * r);
                  t.uniform1f(e.uDepth, s)
              },
              setViewport: function(t, e, n, r) {
                  if (0 === n.x && 1 === n.width && 0 === n.y && 1 === n.height)
                      return t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight),
                      void u.identity(r);
                  var i = n.x
                    , s = o(i, 0, 1)
                    , l = s - i
                    , c = 1 - s
                    , h = o(n.width - l, 0, c)
                    , p = n.width - h
                    , f = 1 - n.height - n.y
                    , v = o(f, 0, 1)
                    , y = v - f
                    , g = 1 - v
                    , _ = o(n.height - y, 0, g)
                    , b = n.height - _;
                  a.set(m, n.width / h, n.height / _, 1),
                  a.set(d, (p - l) / h, (b - y) / _, 0),
                  u.identity(r),
                  u.translate(r, r, d),
                  u.scale(r, r, m),
                  t.viewport(t.drawingBufferWidth * s, t.drawingBufferHeight * v, t.drawingBufferWidth * h, t.drawingBufferHeight * _)
              },
              setupPixelEffectUniforms: function(t, e, n) {
                  var r = h;
                  e && null != e.opacity && (r = e.opacity),
                  t.uniform1f(n.opacity, r);
                  var i = p;
                  e && e.colorOffset && (i = e.colorOffset),
                  t.uniform4fv(n.colorOffset, i);
                  var o = f;
                  e && e.colorMatrix && (o = e.colorMatrix),
                  t.uniformMatrix4fv(n.colorMatrix, !1, o)
              }
          }
      }
      , {
          "../util/clamp": 181,
          "gl-matrix": 5
      }],
      158: [function(t, e, n) {
          "use strict";
          var r = t("./WebGlBase");
          function i() {
              this.constructor.super_.apply(this, arguments)
          }
          t("../util/inherits")(i, r),
          e.exports = i
      }
      , {
          "../util/inherits": 195,
          "./WebGlBase": 156
      }],
      159: [function(t, e, n) {
          "use strict";
          var r = t("gl-matrix").mat4
            , i = t("../util/clearOwnProperties")
            , o = t("./WebGlCommon")
            , s = o.createConstantBuffers
            , a = o.destroyConstantBuffers
            , u = o.createShaderProgram
            , l = o.destroyShaderProgram
            , c = o.enableAttributes
            , h = o.disableAttributes
            , p = o.setViewport
            , f = o.setupPixelEffectUniforms
            , d = o.setDepth
            , m = o.setTexture
            , v = t("../shaders/vertexEquirect")
            , y = t("../shaders/fragmentEquirect")
            , g = [0, 1, 2, 0, 2, 3]
            , _ = [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]
            , b = [0, 0, 1, 0, 1, 1, 0, 1]
            , w = ["aVertexPosition"]
            , x = ["uDepth", "uOpacity", "uSampler", "uInvProjMatrix", "uViewportMatrix", "uColorOffset", "uColorMatrix", "uTextureX", "uTextureY", "uTextureWidth", "uTextureHeight"];
          function E(t) {
              this.gl = t,
              this.invProjMatrix = r.create(),
              this.viewportMatrix = r.create(),
              this.constantBuffers = s(t, g, _, b),
              this.shaderProgram = u(t, v, y, w, x)
          }
          E.prototype.destroy = function() {
              a(this.gl, this.constantBuffers),
              l(this.gl, this.shaderProgram),
              i(this)
          }
          ,
          E.prototype.startLayer = function(t, e) {
              var n = this.gl
                , i = this.shaderProgram
                , o = this.constantBuffers
                , s = this.invProjMatrix
                , a = this.viewportMatrix;
              n.useProgram(i),
              c(n, i),
              p(n, t, e, a),
              n.uniformMatrix4fv(i.uViewportMatrix, !1, a),
              n.bindBuffer(n.ARRAY_BUFFER, o.vertexPositions),
              n.vertexAttribPointer(i.aVertexPosition, 3, n.FLOAT, n.FALSE, 0, 0),
              n.bindBuffer(n.ARRAY_BUFFER, o.textureCoords),
              r.copy(s, t.view().projection()),
              r.invert(s, s),
              n.uniformMatrix4fv(i.uInvProjMatrix, !1, s);
              var u = t.effects().textureCrop || {}
                , l = null != u.x ? u.x : 0
                , h = null != u.y ? u.y : 0
                , d = null != u.width ? u.width : 1
                , m = null != u.height ? u.height : 1;
              n.uniform1f(i.uTextureX, l),
              n.uniform1f(i.uTextureY, h),
              n.uniform1f(i.uTextureWidth, d),
              n.uniform1f(i.uTextureHeight, m),
              f(n, t.effects(), {
                  opacity: i.uOpacity,
                  colorOffset: i.uColorOffset,
                  colorMatrix: i.uColorMatrix
              })
          }
          ,
          E.prototype.endLayer = function(t, e) {
              var n = this.gl
                , r = this.shaderProgram;
              h(n, r)
          }
          ,
          E.prototype.renderTile = function(t, e, n, r) {
              var i = this.gl
                , o = this.shaderProgram
                , s = this.constantBuffers;
              d(i, o, r, t.z),
              m(i, o, e),
              i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, s.vertexIndices),
              i.drawElements(i.TRIANGLES, g.length, i.UNSIGNED_SHORT, 0)
          }
          ,
          e.exports = E
      }
      , {
          "../shaders/fragmentEquirect": 162,
          "../shaders/vertexEquirect": 164,
          "../util/clearOwnProperties": 182,
          "./WebGlCommon": 157,
          "gl-matrix": 5
      }],
      160: [function(t, e, n) {
          "use strict";
          var r = t("./WebGlBase");
          function i() {
              this.constructor.super_.apply(this, arguments)
          }
          t("../util/inherits")(i, r),
          e.exports = i
      }
      , {
          "../util/inherits": 195,
          "./WebGlBase": 156
      }],
      161: [function(t, e, n) {
          "use strict";
          var r = t("./WebGlCube")
            , i = t("./WebGlFlat")
            , o = t("./WebGlEquirect")
            , s = t("./CssCube")
            , a = t("./CssFlat")
            , u = t("./FlashCube")
            , l = t("./FlashFlat");
          e.exports = function(t) {
              switch (t.type) {
              case "webgl":
                  t.registerRenderer("flat", "flat", i),
                  t.registerRenderer("cube", "rectilinear", r),
                  t.registerRenderer("equirect", "rectilinear", o);
                  break;
              case "css":
                  t.registerRenderer("flat", "flat", a),
                  t.registerRenderer("cube", "rectilinear", s);
                  break;
              case "flash":
                  t.registerRenderer("flat", "flat", l),
                  t.registerRenderer("cube", "rectilinear", u);
                  break;
              default:
                  throw new Error("Unknown stage type: " + t.type)
              }
          }
      }
      , {
          "./CssCube": 151,
          "./CssFlat": 152,
          "./FlashCube": 154,
          "./FlashFlat": 155,
          "./WebGlCube": 158,
          "./WebGlEquirect": 159,
          "./WebGlFlat": 160
      }],
      162: [function(t, e, n) {
          "use strict";
          e.exports = ["#ifdef GL_FRAGMENT_PRECISION_HIGH", "precision highp float;", "#else", "precision mediump float", "#endif", "uniform sampler2D uSampler;", "uniform float uOpacity;", "uniform float uTextureX;", "uniform float uTextureY;", "uniform float uTextureWidth;", "uniform float uTextureHeight;", "uniform vec4 uColorOffset;", "uniform mat4 uColorMatrix;", "varying vec4 vRay;", "const float PI = 3.14159265358979323846264;", "void main(void) {", "  float r = inversesqrt(vRay.x * vRay.x + vRay.y * vRay.y + vRay.z * vRay.z);", "  float phi  = acos(vRay.y * r);", "  float theta = atan(vRay.x, -1.0*vRay.z);", "  float s = 0.5 + 0.5 * theta / PI;", "  float t = 1.0 - phi / PI;", "  s = s * uTextureWidth + uTextureX;", "  t = t * uTextureHeight + uTextureY;", "  vec4 color = texture2D(uSampler, vec2(s, t)) * uColorMatrix + uColorOffset;", "  gl_FragColor = vec4(color.rgba * uOpacity);", "}"].join("\n")
      }
      , {}],
      163: [function(t, e, n) {
          "use strict";
          e.exports = ["#ifdef GL_FRAGMENT_PRECISION_HIGH", "precision highp float;", "#else", "precision mediump float;", "#endif", "uniform sampler2D uSampler;", "uniform float uOpacity;", "uniform vec4 uColorOffset;", "uniform mat4 uColorMatrix;", "varying vec2 vTextureCoord;", "void main(void) {", "  vec4 color = texture2D(uSampler, vTextureCoord) * uColorMatrix + uColorOffset;", "  gl_FragColor = vec4(color.rgba * uOpacity);", "}"].join("\n")
      }
      , {}],
      164: [function(t, e, n) {
          "use strict";
          e.exports = ["attribute vec3 aVertexPosition;", "uniform float uDepth;", "uniform mat4 uViewportMatrix;", "uniform mat4 uInvProjMatrix;", "varying vec4 vRay;", "void main(void) {", "  vRay = uInvProjMatrix * vec4(aVertexPosition.xy, 1.0, 1.0);", "  gl_Position = uViewportMatrix * vec4(aVertexPosition.xy, uDepth, 1.0);", "}"].join("\n")
      }
      , {}],
      165: [function(t, e, n) {
          "use strict";
          e.exports = ["attribute vec3 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float uDepth;", "uniform mat4 uViewportMatrix;", "uniform mat4 uProjMatrix;", "varying vec2 vTextureCoord;", "void main(void) {", "  gl_Position = uViewportMatrix * uProjMatrix * vec4(aVertexPosition.xy, 0.0, 1.0);", "  gl_Position.z = uDepth * gl_Position.w;", "  vTextureCoord = aTextureCoord;", "}"].join("\n")
      }
      , {}],
      166: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("../NetworkError")
            , o = t("../collections/WorkPool")
            , s = t("../util/chain")
            , a = t("../util/delay")
            , u = t("../util/now")
            , l = {
              x: "x",
              y: "y",
              z: "z",
              f: "face"
          }
            , c = 4
            , h = 1e4;
          function p(t, e) {
              e = e || {},
              this._loadPool = new o({
                  concurrency: e.concurrency || c
              }),
              this._retryDelay = e.retryDelay || h,
              this._retryMap = {},
              this._sourceFromTile = t
          }
          function f(t) {
              return new RegExp("\\{(" + t + ")\\}","g")
          }
          r(p),
          p.prototype.loadAsset = function(t, e, n) {
              var r, o = this, l = this._retryDelay, c = this._retryMap, h = this._sourceFromTile(e), p = h.url, f = h.rect, d = t.loadImage.bind(t, p, f), m = c[p];
              if (null != m) {
                  var v = u() - m;
                  v < l ? r = l - v : (r = 0,
                  delete c[p])
              }
              var y = a.bind(null, r);
              return s(y, (function(t) {
                  return o._loadPool.push(d, (function(n, r) {
                      n ? (n instanceof i && (c[p] = u(),
                      o.emit("networkError", r, n)),
                      t(n, e)) : (delete c[p],
                      t(null, e, r))
                  }
                  ))
              }
              ))(n)
          }
          ,
          p.fromString = function(t, e) {
              var n = (e = e || {}) && e.cubeMapPreviewFaceOrder || "bdflru";
              return new p(e.cubeMapPreviewUrl ? function(t) {
                  return 0 === t.z ? function(t) {
                      var r = n.indexOf(t.face) / 6;
                      return {
                          url: e.cubeMapPreviewUrl,
                          rect: {
                              x: 0,
                              y: r,
                              width: 1,
                              height: 1 / 6
                          }
                      }
                  }(t) : r(t)
              }
              : r,e);
              function r(e) {
                  var n = t;
                  for (var r in l) {
                      var i = l[r]
                        , o = f(r)
                        , s = e.hasOwnProperty(i) ? e[i] : "";
                      n = n.replace(o, s)
                  }
                  return {
                      url: n
                  }
              }
          }
          ,
          e.exports = p
      }
      , {
          "../NetworkError": 109,
          "../collections/WorkPool": 124,
          "../util/chain": 180,
          "../util/delay": 190,
          "../util/now": 199,
          "minimal-event-emitter": 210
      }],
      167: [function(t, e, n) {
          "use strict";
          function r(t) {
              this._asset = t
          }
          r.prototype.asset = function() {
              return this._asset
          }
          ,
          r.prototype.loadAsset = function(t, e, n) {
              var r = this
                , i = setTimeout((function() {
                  n(null, e, r._asset)
              }
              ), 0);
              return function() {
                  clearTimeout(i),
                  n.apply(null, arguments)
              }
          }
          ,
          e.exports = r
      }
      , {}],
      168: [function(t, e, n) {
          "use strict";
          var r = t("./Stage")
            , i = t("../loaders/HtmlImage")
            , o = t("../support/Css")
            , s = t("bowser")
            , a = t("../util/inherits")
            , u = t("../util/dom").setAbsolute
            , l = t("../util/dom").setFullSize
            , c = t("../util/dom").setNullTransformOrigin
            , h = t("../util/clearOwnProperties")
            , p = {
              padSize: s.ios ? 0 : 3,
              reverseLevelDepth: s.ios,
              useNullTransform: s.ios,
              perspectiveNudge: s.webkit || s.gecko ? .001 : 0
          };
          function f(t) {
              this.constructor.super_.call(this, t),
              this._loader = new i(this),
              this._domElement = document.createElement("div"),
              u(this._domElement),
              l(this._domElement)
          }
          function d(t, e, n) {
              var r = document.createElement("canvas");
              u(r),
              c(r),
              this._canvas = r,
              this._timestamp = null,
              this.refresh(e, n)
          }
          a(f, r),
          f.prototype.destroy = function() {
              this.constructor.super_.prototype.destroy.call(this)
          }
          ,
          f.supported = function() {
              return o()
          }
          ,
          f.prototype.domElement = function() {
              return this._domElement
          }
          ,
          f.prototype.setSizeForType = function() {}
          ,
          f.prototype.loadImage = function(t, e, n) {
              return this._loader.loadImage(t, e, n)
          }
          ,
          f.prototype.validateLayer = function(t) {}
          ,
          f.prototype.createRenderer = function(t) {
              return new t(this._domElement,p)
          }
          ,
          f.prototype.destroyRenderer = function(t) {
              t.destroy()
          }
          ,
          f.prototype.startFrame = function() {}
          ,
          f.prototype.endFrame = function() {}
          ,
          f.prototype.takeSnapshot = function() {
              throw new Error("CssStage: takeSnapshot not implemented")
          }
          ,
          f.type = f.prototype.type = "css",
          d.prototype.refresh = function(t, e) {
              var n = e.timestamp();
              if (n !== this._timestamp) {
                  this._timestamp = n;
                  var r, i = this._canvas, o = i.getContext("2d"), s = e.element(), a = t.width(), u = t.height(), l = p.padSize, c = t.padTop() ? l : 0, h = t.padBottom() ? l : 0, f = t.padLeft() ? l : 0, d = t.padRight() ? l : 0;
                  for (i.width = f + a + d,
                  i.height = c + u + h,
                  o.drawImage(s, f, c, a, u),
                  r = 0; r < c; r++)
                      o.drawImage(i, f, c, a, 1, f, r, a, 1);
                  for (r = 0; r < f; r++)
                      o.drawImage(i, f, c, 1, u, r, c, 1, u);
                  for (r = 0; r < h; r++)
                      o.drawImage(i, f, c + u - 1, a, 1, f, c + u + r, a, 1);
                  for (r = 0; r < d; r++)
                      o.drawImage(i, f + a - 1, c, 1, u, f + a + r, c, 1, u)
              }
          }
          ,
          d.prototype.destroy = function() {
              h(this)
          }
          ,
          f.TextureClass = f.prototype.TextureClass = d,
          e.exports = f
      }
      , {
          "../loaders/HtmlImage": 149,
          "../support/Css": 173,
          "../util/clearOwnProperties": 182,
          "../util/dom": 191,
          "../util/inherits": 195,
          "./Stage": 171,
          bowser: 105
      }],
      169: [function(t, e, n) {
          "use strict";
          var r = t("./Stage")
            , i = t("../loaders/FlashImage")
            , o = t("../support/Flash")
            , s = t("../collections/WorkQueue")
            , a = t("../util/inherits")
            , u = t("../util/defer")
            , l = t("../util/dom").setAbsolute
            , c = t("../util/dom").setFullSize
            , h = t("../util/dom").setBlocking
            , p = t("../util/clearOwnProperties")
            , f = "transparent"
            , d = function() {
              var t = document.currentScript;
              if (!t) {
                  var e = document.getElementsByTagName("script");
                  t = e.length ? e[e.length - 1] : null
              }
              if (!t)
                  return null;
              var n = t.src
                , r = n.lastIndexOf("/");
              return (n = r >= 0 ? n.slice(0, r + 1) : "") + "marzipano.swf"
          }()
            , m = "MarzipanoFlashCallbackMap";
          m in window || (window[m] = {
              __next: 0
          });
          var v = ["imageLoaded"]
            , y = {
              padSize: 3
          };
          function g(t) {
              if (this.constructor.super_.call(this, t),
              this._wmode = t && t.wmode || f,
              this._swfPath = t && t.swfPath || d,
              !d)
                  throw new Error("Missing SWF path");
              this._flashStageId = window[m].__next++,
              this._callbacksObj = window[m][this._flashStageId] = {},
              this._stageCallbacksObjVarName = m + "[" + this._flashStageId + "]",
              this._callbackListeners = {};
              for (var e = 0; e < v.length; e++)
                  this._callbacksObj[v[e]] = this._callListeners(v[e]);
              this._loader = new i(this),
              this._loadImageQueue = new s,
              this._loadImageQueue.pause(),
              this._flashReady = !1,
              this._nextLayerId = 0;
              var n = function(t, e, n) {
                  var r = document.createElement("div");
                  l(r),
                  c(r);
                  var i = "marzipano-flash-stage-" + e
                    , o = '<object id="' + i + '" name="' + i + '" type="application/x-shockwave-flash" data="' + t + '">'
                    , s = "";
                  s += '<param name="movie" value="' + t + '" />',
                  s += '<param name="allowscriptaccess" value="always" />',
                  s += '<param name="flashvars" value="callbacksObjName=' + n + '" />',
                  o += s += '<param name="wmode" value="transparent" />',
                  o += "</object>";
                  var a = document.createElement("div");
                  a.innerHTML = o;
                  var u = a.firstChild;
                  l(u),
                  c(u),
                  r.appendChild(u);
                  var p = document.createElement("div");
                  return l(p),
                  c(p),
                  h(p),
                  r.appendChild(p),
                  {
                      root: r,
                      flash: u,
                      blocking: p
                  }
              }(this._swfPath, this._flashStageId, this._stageCallbacksObjVarName);
              this._domElement = n.root,
              this._blockingElement = n.blocking,
              this._flashElement = n.flash,
              this._checkReadyTimer = setInterval(this._checkReady.bind(this), 50)
          }
          function _(t, e, n) {
              var r = n.element()
                , i = e.width()
                , o = e.height()
                , s = y.padSize
                , a = e.padTop() ? s : 0
                , u = e.padBottom() ? s : 0
                , l = e.padLeft() ? s : 0
                , c = e.padRight() ? s : 0
                , h = t._flashElement.createTexture(r, i, o, a, u, l, c);
              this._stage = t,
              this._textureId = h
          }
          a(g, r),
          g.prototype.destroy = function() {
              window[m][this._flashStageId] = null,
              null != this._checkReadyTimer && clearInterval(this._checkReadyTimer),
              this.constructor.super_.prototype.destroy.call(this)
          }
          ,
          g.supported = function() {
              return o()
          }
          ,
          g.prototype.domElement = function() {
              return this._domElement
          }
          ,
          g.prototype.flashElement = function() {
              return this._flashElement
          }
          ,
          g.prototype.setSizeForType = function() {}
          ,
          g.prototype.loadImage = function(t, e, n) {
              var r = this._loader.loadImage.bind(this._loader, t, e);
              return this._loadImageQueue.push(r, n)
          }
          ,
          g.prototype.validateLayer = function(t) {}
          ,
          g.prototype.addFlashCallbackListener = function(t, e) {
              this._callbackListeners[t] = this._callbackListeners[t] || [],
              this._callbackListeners[t].push(e)
          }
          ,
          g.prototype.removeFlashCallbackListener = function(t, e) {
              var n = this._callbackListeners[t] || []
                , r = n.indexOf(e);
              r >= 0 && n.splice(r, 1)
          }
          ,
          g.prototype._callListeners = function(t) {
              var e = this;
              return function() {
                  for (var n = e._callbackListeners[t] || [], r = 0; r < n.length; r++) {
                      var i = n[r];
                      u(i, arguments)
                  }
              }
          }
          ,
          g.prototype._checkReady = function() {
              return !!(this._flashElement && this._flashElement.isReady && this._flashElement.isReady()) && (this._flashReady = !0,
              clearTimeout(this._checkReadyTimer),
              this._checkReadyTimer = null,
              this._loadImageQueue.resume(),
              this.emit("renderInvalid"),
              !0)
          }
          ,
          g.prototype.createRenderer = function(t) {
              return new t(this._flashElement,++this._nextLayerId,y)
          }
          ,
          g.prototype.destroyRenderer = function(t) {
              t.destroy()
          }
          ,
          g.prototype.startFrame = function() {}
          ,
          g.prototype.endFrame = function() {}
          ,
          g.prototype.takeSnapshot = function(t) {
              "object" == typeof t && null != t || (t = {});
              var e = t.quality;
              if (void 0 === e && (e = 75),
              "number" != typeof e || e < 0 || e > 100)
                  throw new Error("FlashStage: Snapshot quality needs to be a number between 0 and 100");
              return this._flashElement.takeSnapshot(e)
          }
          ,
          g.type = g.prototype.type = "flash",
          _.prototype.refresh = function(t, e) {}
          ,
          _.prototype.destroy = function() {
              this._stage._flashElement.destroyTexture(this._textureId),
              p(this)
          }
          ,
          g.TextureClass = g.prototype.TextureClass = _,
          e.exports = g
      }
      , {
          "../collections/WorkQueue": 125,
          "../loaders/FlashImage": 148,
          "../support/Flash": 174,
          "../util/clearOwnProperties": 182,
          "../util/defer": 188,
          "../util/dom": 191,
          "../util/inherits": 195,
          "./Stage": 171
      }],
      170: [function(t, e, n) {
          "use strict";
          function r() {
              this._renderers = {}
          }
          r.prototype.set = function(t, e, n) {
              this._renderers[t] || (this._renderers[t] = {}),
              this._renderers[t][e] = n
          }
          ,
          r.prototype.get = function(t, e) {
              return this._renderers[t] && this._renderers[t][e] || null
          }
          ,
          e.exports = r
      }
      , {}],
      171: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("../collections/WorkQueue")
            , o = t("../util/calcRect")
            , s = t("../util/async")
            , a = t("../util/cancelize")
            , u = t("../util/clearOwnProperties")
            , l = t("./RendererRegistry");
          function c(t, e) {
              return t.cmp(e)
          }
          function h(t, e) {
              return -t.cmp(e)
          }
          function p(t) {
              this._progressive = !(!t || !t.progressive),
              this._layers = [],
              this._renderers = [],
              this._tilesToLoad = [],
              this._tilesToRender = [],
              this._tmpVisible = [],
              this._tmpChildren = [],
              this._width = 0,
              this._height = 0,
              this._tmpRect = {},
              this._tmpSize = {},
              this._createTextureWorkQueue = new i,
              this._emitRenderInvalid = this._emitRenderInvalid.bind(this),
              this._rendererRegistry = new l
          }
          r(p),
          p.prototype.destroy = function() {
              this.removeAllLayers(),
              u(this)
          }
          ,
          p.prototype.registerRenderer = function(t, e, n) {
              return this._rendererRegistry.set(t, e, n)
          }
          ,
          p.prototype.domElement = function() {
              throw new Error("Stage implementation must override domElement")
          }
          ,
          p.prototype.width = function() {
              return this._width
          }
          ,
          p.prototype.height = function() {
              return this._height
          }
          ,
          p.prototype.size = function(t) {
              return (t = t || {}).width = this._width,
              t.height = this._height,
              t
          }
          ,
          p.prototype.setSize = function(t) {
              this._width = t.width,
              this._height = t.height,
              this.setSizeForType(),
              this.emit("resize"),
              this._emitRenderInvalid()
          }
          ,
          p.prototype.setSizeForType = function(t) {
              throw new Error("Stage implementation must override setSizeForType")
          }
          ,
          p.prototype.loadImage = function() {
              throw new Error("Stage implementation must override loadImage")
          }
          ,
          p.prototype._emitRenderInvalid = function() {
              this.emit("renderInvalid")
          }
          ,
          p.prototype.validateLayer = function(t) {
              throw new Error("Stage implementation must override validateLayer")
          }
          ,
          p.prototype.listLayers = function() {
              return [].concat(this._layers)
          }
          ,
          p.prototype.hasLayer = function(t) {
              return this._layers.indexOf(t) >= 0
          }
          ,
          p.prototype.addLayer = function(t, e) {
              if (this._layers.indexOf(t) >= 0)
                  throw new Error("Layer already in stage");
              if (null == e && (e = this._layers.length),
              e < 0 || e > this._layers.length)
                  throw new Error("Invalid layer position");
              this.validateLayer(t);
              var n = t.geometry().type
                , r = t.view().type
                , i = this._rendererRegistry.get(n, r);
              if (!i)
                  throw new Error("No " + this.type + " renderer avaiable for " + n + " geometry and " + r + " view");
              var o = this.createRenderer(i);
              this._layers.splice(e, 0, t),
              this._renderers.splice(e, 0, o),
              t.addEventListener("viewChange", this._emitRenderInvalid),
              t.addEventListener("effectsChange", this._emitRenderInvalid),
              t.addEventListener("fixedLevelChange", this._emitRenderInvalid),
              t.addEventListener("textureStoreChange", this._emitRenderInvalid),
              this._emitRenderInvalid()
          }
          ,
          p.prototype.moveLayer = function(t, e) {
              var n = this._layers.indexOf(t);
              if (n < 0)
                  throw new Error("No such layer in stage");
              if (e < 0 || e >= this._layers.length)
                  throw new Error("Invalid layer position");
              t = this._layers.splice(n, 1)[0];
              var r = this._renderers.splice(n, 1)[0];
              this._layers.splice(e, 0, t),
              this._renderers.splice(e, 0, r),
              this._emitRenderInvalid()
          }
          ,
          p.prototype.removeLayer = function(t) {
              var e = this._layers.indexOf(t);
              if (e < 0)
                  throw new Error("No such layer in stage");
              var n = this._layers.splice(e, 1)[0]
                , r = this._renderers.splice(e, 1)[0];
              this.destroyRenderer(r),
              n.removeEventListener("viewChange", this._emitRenderInvalid),
              n.removeEventListener("effectsChange", this._emitRenderInvalid),
              n.removeEventListener("fixedLevelChange", this._emitRenderInvalid),
              n.removeEventListener("textureStoreChange", this._emitRenderInvalid),
              this._emitRenderInvalid()
          }
          ,
          p.prototype.removeAllLayers = function() {
              for (; this._layers.length > 0; )
                  this.removeLayer(this._layers[0])
          }
          ,
          p.prototype.startFrame = function() {
              throw new Error("Stage implementation must override startFrame")
          }
          ,
          p.prototype.endFrame = function() {
              throw new Error("Stage implementation must override endFrame")
          }
          ,
          p.prototype.render = function() {
              var t, e, n, r = this._tilesToLoad, i = this._tilesToRender, s = !0, a = this._width, u = this._height, l = this._tmpRect, c = this._tmpSize;
              if (!(a <= 0 || u <= 0)) {
                  for (this.startFrame(),
                  t = 0; t < this._layers.length; t++)
                      this._layers[t].textureStore().startFrame();
                  for (t = 0; t < this._layers.length; t++) {
                      var h, p, f = this._layers[t], d = f.effects(), m = f.view(), v = f.textureStore(), y = this._renderers[t], g = this._layers.length - t;
                      if (o(a, u, d && d.rect, l),
                      !(l.width <= 0 || l.height <= 0)) {
                          for (c.width = l.width * this._width,
                          c.height = l.height * this._height,
                          m.setSize(c),
                          y.startLayer(f, l),
                          n = this._collectTiles(f, v),
                          e = 0; e < r.length; e++)
                              h = r[e],
                              v.markTile(h);
                          for (e = 0; e < i.length; e++)
                              h = i[e],
                              p = v.texture(h),
                              y.renderTile(h, p, f, g);
                          f.emit("renderComplete", n),
                          n || (s = !1),
                          y.endLayer(f, l)
                      }
                  }
                  for (t = 0; t < this._layers.length; t++)
                      this._layers[t].textureStore().endFrame();
                  this.endFrame(),
                  this.emit("renderComplete", s)
              }
          }
          ,
          p.prototype._collectTiles = function(t, e) {
              var n = this._tilesToLoad
                , r = this._tilesToRender
                , i = this._tmpVisible;
              n.length = 0,
              r.length = 0,
              i.length = 0,
              t.visibleTiles(i);
              for (var o = !0, s = 0; s < i.length; s++) {
                  var a, u = i[s];
                  this._collectTileToLoad(u),
                  e.texture(u) ? (a = !1,
                  this._collectTileToRender(u)) : (a = this._collectChildren(u, e),
                  o = !1),
                  this._collectParents(u, e, a)
              }
              return n.sort(c),
              r.sort(h),
              o
          }
          ,
          p.prototype._collectChildren = function(t, e) {
              var n = this._tmpChildren
                , r = !0;
              do {
                  if (n.length = 0,
                  !t.children(n))
                      break;
                  r = !1;
                  for (var i = 0; i < n.length; i++)
                      t = n[i],
                      e.texture(t) ? (this._collectTileToLoad(t),
                      this._collectTileToRender(t)) : r = !0
              } while (r && 1 === n.length);
              return r
          }
          ,
          p.prototype._collectParents = function(t, e, n) {
              for (var r = this._progressive; (r || n) && null != (t = t.parent()); ) {
                  if (n)
                      if (e.texture(t))
                          this._collectTileToRender(t),
                          n = !1;
                      else if (!this._progressive)
                          continue;
                  this._collectTileToLoad(t) || (r = !1)
              }
              return n
          }
          ,
          p.prototype._collectTileToLoad = function(t) {
              return this._collectTileIntoList(t, this._tilesToLoad)
          }
          ,
          p.prototype._collectTileToRender = function(t) {
              return this._collectTileIntoList(t, this._tilesToRender)
          }
          ,
          p.prototype._collectTileIntoList = function(t, e) {
              for (var n = !1, r = 0; r < e.length; r++)
                  if (t.equals(e[r])) {
                      n = !0;
                      break
                  }
              return n || e.push(t),
              !n
          }
          ,
          p.prototype.createTexture = function(t, e, n) {
              var r = this;
              var i = a(s((function() {
                  return new r.TextureClass(r,t,e)
              }
              )));
              return this._createTextureWorkQueue.push(i, (function(r, i) {
                  n(r, t, e, i)
              }
              ))
          }
          ,
          e.exports = p
      }
      , {
          "../collections/WorkQueue": 125,
          "../util/async": 177,
          "../util/calcRect": 178,
          "../util/cancelize": 179,
          "../util/clearOwnProperties": 182,
          "./RendererRegistry": 170,
          "minimal-event-emitter": 210
      }],
      172: [function(t, e, n) {
          "use strict";
          var r = t("./Stage")
            , i = t("../loaders/HtmlImage")
            , o = t("../support/WebGl")
            , s = t("bowser")
            , a = t("../util/inherits")
            , u = t("../util/pixelRatio")
            , l = t("../util/ispot")
            , c = t("../util/dom").setAbsolute
            , h = t("../util/dom").setFullSize
            , p = t("../util/clearOwnProperties")
            , f = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.webGl
            , d = s.chrome;
          function m(t) {
              t = t || {};
              var e = this;
              this.constructor.super_.call(this, t),
              this._generateMipmaps = null != t.generateMipmaps && t.generateMipmaps,
              this._loader = new i(this),
              this._domElement = document.createElement("canvas"),
              c(this._domElement),
              h(this._domElement),
              this._gl = function(t, e) {
                  var n = {
                      alpha: !0,
                      premultipliedAlpha: !0,
                      antialias: !(!e || !e.antialias),
                      preserveDrawingBuffer: !(!e || !e.preserveDrawingBuffer)
                  };
                  f && "undefined" != typeof WebGLDebugUtils && (console.log("Using WebGL lost context simulator"),
                  t = WebGLDebugUtils.makeLostContextSimulatingCanvas(t));
                  var r = t.getContext && (t.getContext("webgl", n) || t.getContext("experimental-webgl", n));
                  if (!r)
                      throw new Error("Could not get WebGL context");
                  return f && "undefined" != typeof WebGLDebugUtils && (r = WebGLDebugUtils.makeDebugContext(r),
                  console.log("Using WebGL debug context")),
                  r
              }(this._domElement, t),
              this._handleContextLoss = function() {
                  e.emit("webglcontextlost"),
                  e._gl = null
              }
              ,
              this._domElement.addEventListener("webglcontextlost", this._handleContextLoss),
              this._rendererInstances = []
          }
          function v(t, e, n) {
              this._stage = t,
              this._gl = t._gl,
              this._texture = null,
              this._timestamp = null,
              this._width = this._height = null,
              this.refresh(e, n)
          }
          a(m, r),
          m.prototype.destroy = function() {
              this._domElement.removeEventListener("webglcontextlost", this._handleContextLoss),
              this.constructor.super_.prototype.destroy.call(this)
          }
          ,
          m.supported = function() {
              return o()
          }
          ,
          m.prototype.domElement = function() {
              return this._domElement
          }
          ,
          m.prototype.webGlContext = function() {
              return this._gl
          }
          ,
          m.prototype.setSizeForType = function() {
              var t = u();
              this._domElement.width = t * this._width,
              this._domElement.height = t * this._height
          }
          ,
          m.prototype.loadImage = function(t, e, n) {
              return this._loader.loadImage(t, e, n)
          }
          ,
          m.prototype.maxTextureSize = function() {
              return this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE)
          }
          ,
          m.prototype.validateLayer = function(t) {
              var e = t.geometry().maxTileSize()
                , n = this.maxTextureSize();
              if (e > n)
                  throw new Error("Layer has level with tile size larger than maximum texture size (" + e + " vs. " + n + ")")
          }
          ,
          m.prototype.createRenderer = function(t) {
              for (var e = this._rendererInstances, n = 0; n < e.length; n++)
                  if (e[n]instanceof t)
                      return e[n];
              var r = new t(this._gl);
              return e.push(r),
              r
          }
          ,
          m.prototype.destroyRenderer = function(t) {
              var e = this._rendererInstances;
              if (this._renderers.indexOf(t) < 0) {
                  t.destroy();
                  var n = e.indexOf(t);
                  n >= 0 && e.splice(n, 1)
              }
          }
          ,
          m.prototype.startFrame = function() {
              var t = this._gl;
              if (!t)
                  throw new Error("Bad WebGL context - maybe context was lost?");
              t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight),
              t.clearColor(0, 0, 0, 0),
              t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
              t.enable(t.DEPTH_TEST),
              t.enable(t.BLEND),
              t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA)
          }
          ,
          m.prototype.endFrame = function() {}
          ,
          m.prototype.takeSnapshot = function(t) {
              "object" == typeof t && null != t || (t = {});
              var e = t.quality;
              if (void 0 === e && (e = 75),
              "number" != typeof e || e < 0 || e > 100)
                  throw new Error("WebGLStage: Snapshot quality needs to be a number between 0 and 100");
              return this.render(),
              this._domElement.toDataURL("image/jpeg", parseFloat(document.getElementById("quality").value / 100))
          }
          ,
          m.type = m.prototype.type = "webgl",
          v.prototype.refresh = function(t, e) {
              var n, r = this._gl, i = this._stage, o = e.timestamp();
              if (o !== this._timestamp) {
                  var s = e.element()
                    , a = e.width()
                    , u = e.height();
                  if (a !== this._width || u !== this._height) {
                      var c = i.maxTextureSize();
                      if (a > c)
                          throw new Error("Texture width larger than max size (" + a + " vs. " + c + ")");
                      if (u > c)
                          throw new Error("Texture height larger than max size (" + u + " vs. " + c + ")");
                      this._texture && r.deleteTexture(n),
                      n = this._texture = r.createTexture(),
                      r.bindTexture(r.TEXTURE_2D, n),
                      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0),
                      r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                      r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, s)
                  } else
                      n = this._texture,
                      r.bindTexture(r.TEXTURE_2D, n),
                      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0),
                      r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                      s instanceof HTMLVideoElement && d ? r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, s) : r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, r.RGBA, r.UNSIGNED_BYTE, s);
                  i._generateMipmaps && l(a) && l(u) ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
                  r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR),
                  r.generateMipmap(r.TEXTURE_2D)) : (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
                  r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR)),
                  r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
                  r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
                  r.bindTexture(r.TEXTURE_2D, null),
                  this._timestamp = o,
                  this._width = a,
                  this._height = u
              }
          }
          ,
          v.prototype.destroy = function() {
              this._texture && this._gl.deleteTexture(this._texture),
              p(this)
          }
          ,
          m.TextureClass = m.prototype.TextureClass = v,
          e.exports = m
      }
      , {
          "../loaders/HtmlImage": 149,
          "../support/WebGl": 175,
          "../util/clearOwnProperties": 182,
          "../util/dom": 191,
          "../util/inherits": 195,
          "../util/ispot": 196,
          "../util/pixelRatio": 201,
          "./Stage": 171,
          bowser: 105
      }],
      173: [function(t, e, n) {
          "use strict";
          var r, i = t("../util/dom").prefixProperty;
          e.exports = function() {
              return void 0 !== r ? r : r = function() {
                  var t = i("perspective")
                    , e = document.createElement("div")
                    , n = void 0 !== e.style[t];
                  if (n && "WebkitPerspective" === t) {
                      var r = "__marzipano_test_css3d_support__"
                        , o = document.createElement("style");
                      o.textContent = "@media(-webkit-transform-3d){#" + r + "{height: 3px;})",
                      document.getElementsByTagName("head")[0].appendChild(o),
                      e.id = r,
                      document.body.appendChild(e),
                      n = e.offsetHeight > 0,
                      o.parentNode.removeChild(o),
                      e.parentNode.removeChild(e)
                  }
                  return n
              }()
          }
      }
      , {
          "../util/dom": 191
      }],
      174: [function(t, e, n) {
          "use strict";
          function r() {
              var t = function() {
                  var t = null
                    , e = navigator.plugins
                    , n = navigator.mimeTypes
                    , r = null;
                  if (e && e["Shockwave Flash"] && n && n["application/x-shockwave-flash"] && n["application/x-shockwave-flash"].enabledPlugin)
                      r = (r = e["Shockwave Flash"].description).replace(/^.*\s+(\S+\s+\S+$)/, "$1"),
                      (t = [0, 0, 0])[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10),
                      t[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10),
                      t[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
                  else if (window.ActiveXObject)
                      try {
                          var i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                          i && (r = i.GetVariable("$version")) && (r = r.split(" ")[1].split(","),
                          t = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)])
                      } catch (t) {}
                  return t
              }();
              return t && (t[0] >= 11 || 10 === t[0] && t[1] >= 1)
          }
          var i;
          e.exports = function() {
              return void 0 !== i ? i : i = r()
          }
      }
      , {}],
      175: [function(t, e, n) {
          "use strict";
          var r;
          e.exports = function() {
              return void 0 !== r ? r : (t = document.createElement("canvas"),
              r = !(!t.getContext || !t.getContext("webgl") && !t.getContext("experimental-webgl")));
              var t
          }
      }
      , {}],
      176: [function(t, e, n) {
          "use strict";
          var r, i = t("bowser");
          e.exports = function() {
              return void 0 !== r ? r : r = function() {
                  var t = document.createElement("a").style;
                  t.cssText = "pointer-events:auto";
                  var e = "auto" === t.pointerEvents
                    , n = i.msie && parseFloat(i.version) < 11;
                  return e && !n
              }()
          }
      }
      , {
          bowser: 105
      }],
      177: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return function(e) {
                  var n, r;
                  try {
                      r = t()
                  } catch (t) {
                      n = t
                  } finally {
                      n ? e(n) : e(null, r)
                  }
              }
          }
      }
      , {}],
      178: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e, n, r) {
              var i, o, s, a;
              return r = r || {},
              i = null != n && null != n.absoluteWidth ? n.absoluteWidth / t : null != n && null != n.relativeWidth ? n.relativeWidth : 1,
              o = n && null != n.absoluteHeight ? n.absoluteHeight / e : null != n && null != n.relativeHeight ? n.relativeHeight : 1,
              s = null != n && null != n.absoluteX ? n.absoluteX / t : null != n && null != n.relativeX ? n.relativeX : 0,
              a = null != n && null != n.absoluteY ? n.absoluteY / e : null != n && null != n.relativeY ? n.relativeY : 0,
              r.x = s,
              r.y = a,
              r.width = i,
              r.height = o,
              r
          }
      }
      , {}],
      179: [function(t, e, n) {
          "use strict";
          var r = t("./once");
          e.exports = function(t) {
              return function() {
                  if (!arguments.length)
                      throw new Error("cancelized: expected at least one argument");
                  var e = Array.prototype.slice.call(arguments, 0)
                    , n = e[e.length - 1] = r(e[e.length - 1]);
                  function i() {
                      n.apply(null, arguments)
                  }
                  return t.apply(null, e),
                  i
              }
          }
      }
      , {
          "./once": 200
      }],
      180: [function(t, e, n) {
          "use strict";
          var r = t("./noop");
          e.exports = function() {
              var t = Array.prototype.slice.call(arguments, 0);
              return function() {
                  var e = t.slice(0)
                    , n = null
                    , i = null
                    , o = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : []
                    , s = arguments.length ? arguments[arguments.length - 1] : r;
                  function a() {
                      if (arguments[0])
                          return n = i = null,
                          void s.apply(null, arguments);
                      if (!e.length)
                          return n = i = null,
                          void s.apply(null, arguments);
                      var t = n = e.shift()
                        , r = Array.prototype.slice.call(arguments, 1);
                      r.push(a);
                      var o = n.apply(null, r);
                      if (t === n) {
                          if ("function" != typeof o)
                              throw new Error("chain: chaining on non-cancellable function");
                          i = o
                      }
                  }
                  function u() {
                      i && i.apply(null, arguments)
                  }
                  return o.unshift(null),
                  a.apply(null, o),
                  u
              }
          }
      }
      , {
          "./noop": 198
      }],
      181: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e, n) {
              return Math.min(Math.max(t, e), n)
          }
      }
      , {}],
      182: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              for (var e in t)
                  t.hasOwnProperty(e) && (t[e] = void 0)
          }
      }
      , {}],
      183: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              return t < e ? -1 : t > e ? 1 : 0
          }
      }
      , {}],
      184: [function(t, e, n) {
          "use strict";
          e.exports = function() {
              var t = arguments;
              return function(e) {
                  for (var n = e, r = 0; r < t.length; r++) {
                      n = t[r].call(null, n)
                  }
                  return n
              }
          }
      }
      , {}],
      185: [function(t, e, n) {
          "use strict";
          function r(t, e, n) {
              return 2 * Math.atan(n * Math.tan(t / 2) / e)
          }
          e.exports = {
              convert: r,
              htov: function(t, e, n) {
                  return r(t, e, n)
              },
              htod: function(t, e, n) {
                  return r(t, e, Math.sqrt(e * e + n * n))
              },
              vtoh: function(t, e, n) {
                  return r(t, n, e)
              },
              vtod: function(t, e, n) {
                  return r(t, n, Math.sqrt(e * e + n * n))
              },
              dtoh: function(t, e, n) {
                  return r(t, Math.sqrt(e * e + n * n), e)
              },
              dtov: function(t, e, n) {
                  return r(t, Math.sqrt(e * e + n * n), n)
              }
          }
      }
      , {}],
      186: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return t.toPrecision(15)
          }
      }
      , {}],
      187: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              for (var n in e)
                  n in t || (t[n] = e[n]);
              return t
          }
      }
      , {}],
      188: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              setTimeout((function() {
                  e && e.length > 0 ? t.apply(null, e) : t()
              }
              ), 0)
          }
      }
      , {}],
      189: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return t * Math.PI / 180
          }
      }
      , {}],
      190: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              var n = null;
              return n = setTimeout((function() {
                  null != n && (n = null,
                  e(null))
              }
              ), t),
              function() {
                  null != n && (clearTimeout(n),
                  n = null,
                  e.apply(null, arguments))
              }
          }
      }
      , {}],
      191: [function(t, e, n) {
          "use strict";
          function r(t) {
              for (var e = document.documentElement.style, n = ["Moz", "Webkit", "Khtml", "O", "ms"], r = 0; r < n.length; r++) {
                  var i = n[r] + (t[0].toUpperCase() + t.slice(1));
                  if (i in e)
                      return i
              }
              return t
          }
          function i(t) {
              var e = r(t);
              return function(t, n) {
                  return t.style[e] = n
              }
          }
          var o = i("transform")
            , s = i("transformOrigin");
          e.exports = {
              prefixProperty: r,
              getWithVendorPrefix: function(t) {
                  var e = r(t);
                  return function(t) {
                      return t.style[e]
                  }
              },
              setWithVendorPrefix: i,
              setTransform: o,
              setTransformOrigin: s,
              setNullTransform: function(t) {
                  o(t, "translateZ(0)")
              },
              setNullTransformOrigin: function(t) {
                  s(t, "0 0 0")
              },
              setAbsolute: function(t) {
                  t.style.position = "absolute"
              },
              setPixelPosition: function(t, e, n) {
                  t.style.left = e + "px",
                  t.style.top = n + "px"
              },
              setPixelSize: function(t, e, n) {
                  t.style.width = e + "px",
                  t.style.height = n + "px"
              },
              setNullSize: function(t) {
                  t.style.width = t.style.height = 0
              },
              setFullSize: function(t) {
                  t.style.width = t.style.height = "100%"
              },
              setOverflowHidden: function(t) {
                  t.style.overflow = "hidden"
              },
              setOverflowVisible: function(t) {
                  t.style.overflow = "visible"
              },
              setNoPointerEvents: function(t) {
                  t.style.pointerEvents = "none"
              },
              setBlocking: function(t) {
                  t.style.backgroundColor = "#000",
                  t.style.opacity = "0",
                  t.style.filter = "alpha(opacity=0)"
              }
          }
      }
      , {}],
      192: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              for (var n in e)
                  t[n] = e[n];
              return t
          }
      }
      , {}],
      193: [function(t, e, n) {
          (function(t) {
              "use strict";
              var n = "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== t ? t : null;
              e.exports = n
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {}],
      194: [function(t, e, n) {
          "use strict";
          e.exports = function() {
              for (var t = 0, e = 0; e < arguments.length; e++) {
                  var n = arguments[e];
                  t += n,
                  t += n << 10,
                  t ^= n >> 6
              }
              return t += t << 3,
              t ^= t >> 11,
              (t += t << 15) >= 0 ? t : -t
          }
      }
      , {}],
      195: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              t.super_ = e;
              var n = function() {};
              n.prototype = e.prototype,
              t.prototype = new n,
              t.prototype.constructor = t
          }
      }
      , {}],
      196: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return 0 == (t & t - 1)
          }
      }
      , {}],
      197: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              return (+t % (e = +e) + e) % e
          }
      }
      , {}],
      198: [function(t, e, n) {
          "use strict";
          e.exports = function() {}
      }
      , {}],
      199: [function(t, e, n) {
          "use strict";
          e.exports = "undefined" != typeof performance && performance.now ? function() {
              return performance.now()
          }
          : function() {
              return Date.now()
          }
      }
      , {}],
      200: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              var e, n = !1;
              return function() {
                  return n || (n = !0,
                  e = t.apply(null, arguments)),
                  e
              }
          }
      }
      , {}],
      201: [function(t, e, n) {
          "use strict";
          var r = 1;
          e.exports = function() {
              if ("undefined" != typeof window) {
                  if (window.devicePixelRatio)
                      return window.devicePixelRatio;
                  var t = window.screen;
                  if (t && t.deviceXDPI && t.logicalXDPI)
                      return t.deviceXDPI / t.logicalXDPI;
                  if (t && t.systemXDPI && t.logicalXDPI)
                      return t.systemXDPI / t.logicalXDPI
              }
              return r
          }
      }
      , {}],
      202: [function(t, e, n) {
          "use strict";
          var r = t("../support/Css")
            , i = t("./dom").setTransform
            , o = t("./dom").setPixelPosition
            , s = t("./decimal");
          e.exports = function(t, e, n, a) {
              if (a = a || "",
              r()) {
                  var u = "translateX(" + s(e) + "px) translateY(" + s(n) + "px) translateZ(0) " + a;
                  i(t, u)
              } else
                  o(t, e, n)
          }
      }
      , {
          "../support/Css": 173,
          "./decimal": 186,
          "./dom": 191
      }],
      203: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return 180 * t / Math.PI
          }
      }
      , {}],
      204: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return "number" == typeof t && isFinite(t)
          }
      }
      , {}],
      205: [function(t, e, n) {
          "use strict";
          var r = t("./noop");
          e.exports = function(t) {
              return function() {
                  var e = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : []
                    , n = arguments.length ? arguments[arguments.length - 1] : r
                    , i = null
                    , o = !1;
                  function s() {
                      !arguments[0] || o ? n.apply(null, arguments) : i = t.apply(null, e)
                  }
                  return e.push(s),
                  s(!0),
                  function() {
                      o = !0,
                      i.apply(null, arguments)
                  }
              }
          }
      }
      , {
          "./noop": 198
      }],
      206: [function(t, e, n) {
          "use strict";
          var r = t("./now");
          e.exports = function(t, e, n) {
              var i = !1
                , o = r();
              return e(0),
              requestAnimationFrame((function s() {
                  if (!i) {
                      var a = (r() - o) / t;
                      a < 1 ? (e(a),
                      requestAnimationFrame(s)) : (e(1),
                      n())
                  }
              }
              )),
              function() {
                  i = !0,
                  n.apply(null, arguments)
              }
          }
      }
      , {
          "./now": 199
      }],
      207: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              var e = typeof t;
              if ("object" === e) {
                  if (null === t)
                      return "null";
                  if ("[object Array]" === Object.prototype.toString.call(t))
                      return "array";
                  if ("[object RegExp]" === Object.prototype.toString.call(t))
                      return "regexp"
              }
              return e
          }
      }
      , {}],
      208: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("gl-matrix").mat4
            , o = t("gl-matrix").vec4
            , s = t("../util/pixelRatio")
            , a = t("../util/real")
            , u = t("../util/clamp")
            , l = t("../util/clearOwnProperties")
            , c = 0
            , h = 0
            , p = .5
            , f = .5
            , d = 1
            , m = [1, 0, 1, 0]
            , v = [-1, -1, 1, 1];
          function y(t, e) {
              if (!t || null == t.mediaAspectRatio)
                  throw new Error("mediaAspectRatio must be defined");
              this._x = t && null != t.x ? t.x : p,
              this._y = t && null != t.y ? t.y : f,
              this._zoom = t && null != t.zoom ? t.zoom : d,
              this._mediaAspectRatio = t.mediaAspectRatio,
              this._width = t && null != t.width ? t.width : c,
              this._height = t && null != t.height ? t.height : h,
              this._limiter = e || null,
              this._projMatrix = i.create(),
              this._invProjMatrix = i.create(),
              this._frustum = [0, 0, 0, 0],
              this._projectionChanged = !0,
              this._params = {},
              this._vec = o.create(),
              this._update()
          }
          r(y),
          y.prototype.destroy = function() {
              l(this)
          }
          ,
          y.prototype.x = function() {
              return this._x
          }
          ,
          y.prototype.y = function() {
              return this._y
          }
          ,
          y.prototype.zoom = function() {
              return this._zoom
          }
          ,
          y.prototype.mediaAspectRatio = function() {
              return this._mediaAspectRatio
          }
          ,
          y.prototype.width = function() {
              return this._width
          }
          ,
          y.prototype.height = function() {
              return this._height
          }
          ,
          y.prototype.size = function(t) {
              return (t = t || {}).width = this._width,
              t.height = this._height,
              t
          }
          ,
          y.prototype.parameters = function(t) {
              return (t = t || {}).x = this._x,
              t.y = this._y,
              t.zoom = this._zoom,
              t.mediaAspectRatio = this._mediaAspectRatio,
              t
          }
          ,
          y.prototype.limiter = function() {
              return this._limiter
          }
          ,
          y.prototype.setX = function(t) {
              this._resetParams(),
              this._params.x = t,
              this._update(this._params)
          }
          ,
          y.prototype.setY = function(t) {
              this._resetParams(),
              this._params.y = t,
              this._update(this._params)
          }
          ,
          y.prototype.setZoom = function(t) {
              this._resetParams(),
              this._params.zoom = t,
              this._update(this._params)
          }
          ,
          y.prototype.offsetX = function(t) {
              this.setX(this._x + t)
          }
          ,
          y.prototype.offsetY = function(t) {
              this.setY(this._y + t)
          }
          ,
          y.prototype.offsetZoom = function(t) {
              this.setZoom(this._zoom + t)
          }
          ,
          y.prototype.setMediaAspectRatio = function(t) {
              this._resetParams(),
              this._params.mediaAspectRatio = t,
              this._update(this._params)
          }
          ,
          y.prototype.setSize = function(t) {
              this._resetParams(),
              this._params.width = t.width,
              this._params.height = t.height,
              this._update(this._params)
          }
          ,
          y.prototype.setParameters = function(t) {
              this._resetParams(),
              this._params.x = t.x,
              this._params.y = t.y,
              this._params.zoom = t.zoom,
              this._params.mediaAspectRatio = t.mediaAspectRatio,
              this._update(this._params)
          }
          ,
          y.prototype.setLimiter = function(t) {
              this._limiter = t || null,
              this._update()
          }
          ,
          y.prototype._resetParams = function() {
              var t = this._params;
              t.x = null,
              t.y = null,
              t.zoom = null,
              t.mediaAspectRatio = null,
              t.width = null,
              t.height = null
          }
          ,
          y.prototype._update = function(t) {
              null == t && (this._resetParams(),
              t = this._params);
              var e = this._x
                , n = this._y
                , r = this._zoom
                , i = this._mediaAspectRatio
                , o = this._width
                , s = this._height;
              if (t.x = null != t.x ? t.x : e,
              t.y = null != t.y ? t.y : n,
              t.zoom = null != t.zoom ? t.zoom : r,
              t.mediaAspectRatio = null != t.mediaAspectRatio ? t.mediaAspectRatio : i,
              t.width = null != t.width ? t.width : o,
              t.height = null != t.height ? t.height : s,
              this._limiter && !(t = this._limiter(t)))
                  throw new Error("Bad view limiter");
              var l = t.x
                , c = t.y
                , h = t.zoom
                , p = t.mediaAspectRatio
                , f = t.width
                , d = t.height;
              if (!(a(l) && a(c) && a(h) && a(p) && a(f) && a(d)))
                  throw new Error("Bad view - suspect a broken limiter");
              h = u(h, 1e-6, 1 / 0),
              this._x = l,
              this._y = c,
              this._zoom = h,
              this._mediaAspectRatio = p,
              this._width = f,
              this._height = d,
              l === e && c === n && h === r && p === i && f === o && d === s || (this._projectionChanged = !0,
              this.emit("change")),
              f === o && d === s || this.emit("resize")
          }
          ,
          y.prototype._zoomX = function() {
              return this._zoom
          }
          ,
          y.prototype._zoomY = function() {
              var t = this._mediaAspectRatio
                , e = this._width / this._height
                , n = this._zoom
                , r = n * t / e;
              return isNaN(r) && (r = n),
              r
          }
          ,
          y.prototype.updateWithControlParameters = function(t) {
              var e = this.zoom()
                , n = this._zoomX()
                , r = this._zoomY();
              this.offsetX(t.axisScaledX * n + t.x * e),
              this.offsetY(t.axisScaledY * r + t.y * e),
              this.offsetZoom(t.zoom * e)
          }
          ,
          y.prototype._updateProjection = function() {
              var t = this._projMatrix
                , e = this._invProjMatrix
                , n = this._frustum;
              if (this._projectionChanged) {
                  var r = this._x
                    , o = this._y
                    , s = this._zoomX()
                    , a = this._zoomY()
                    , u = n[0] = .5 - o + .5 * a
                    , l = n[1] = r - .5 + .5 * s
                    , c = n[2] = .5 - o - .5 * a
                    , h = n[3] = r - .5 - .5 * s;
                  i.ortho(t, h, l, c, u, -1, 1),
                  i.invert(e, t),
                  this._projectionChanged = !1
              }
          }
          ,
          y.prototype.projection = function() {
              return this._updateProjection(),
              this._projMatrix
          }
          ,
          y.prototype.inverseProjection = function() {
              return this._updateProjection(),
              this._invProjMatrix
          }
          ,
          y.prototype.intersects = function(t) {
              this._updateProjection();
              for (var e = this._frustum, n = 0; n < e.length; n++) {
                  for (var r = e[n], i = m[n], o = v[n], s = !1, a = 0; a < t.length; a++) {
                      var u = t[a];
                      if (o < 0 && u[i] < r || o > 0 && u[i] > r) {
                          s = !0;
                          break
                      }
                  }
                  if (!s)
                      return !1
              }
              return !0
          }
          ,
          y.prototype.selectLevel = function(t) {
              for (var e = s() * this.width(), n = this._zoom, r = 0; r < t.length; r++) {
                  var i = t[r];
                  if (n * i.width() >= e)
                      return i
              }
              return t[t.length - 1]
          }
          ,
          y.prototype.coordinatesToScreen = function(t, e) {
              var n = this._vec;
              e || (e = {});
              var r = this._width
                , i = this._height;
              if (r <= 0 || i <= 0)
                  return e.x = null,
                  e.y = null,
                  null;
              var s = t && null != t.x ? t.x : p
                , a = t && null != t.y ? t.y : f;
              o.set(n, s - .5, .5 - a, -1, 1),
              o.transformMat4(n, n, this.projection());
              for (var u = 0; u < 3; u++)
                  n[u] /= n[3];
              return e.x = r * (n[0] + 1) / 2,
              e.y = i * (1 - n[1]) / 2,
              e
          }
          ,
          y.prototype.screenToCoordinates = function(t, e) {
              var n = this._vec;
              e || (e = {});
              var r = this._width
                , i = this._height
                , s = 2 * t.x / r - 1
                , a = 1 - 2 * t.y / i;
              return o.set(n, s, a, 1, 1),
              o.transformMat4(n, n, this.inverseProjection()),
              e.x = .5 + n[0],
              e.y = .5 - n[1],
              e
          }
          ,
          y.limit = {
              x: function(t, e) {
                  return function(n) {
                      return n.x = u(n.x, t, e),
                      n
                  }
              },
              y: function(t, e) {
                  return function(n) {
                      return n.y = u(n.y, t, e),
                      n
                  }
              },
              zoom: function(t, e) {
                  return function(n) {
                      return n.zoom = u(n.zoom, t, e),
                      n
                  }
              },
              resolution: function(t) {
                  return function(e) {
                      if (e.width <= 0 || e.height <= 0)
                          return e;
                      var n = e.width
                        , r = s() * n / t;
                      return e.zoom = u(e.zoom, r, 1 / 0),
                      e
                  }
              },
              visibleX: function(t, e) {
                  return function(n) {
                      var r = e - t;
                      n.zoom > r && (n.zoom = r);
                      var i = t + .5 * n.zoom
                        , o = e - .5 * n.zoom;
                      return n.x = u(n.x, i, o),
                      n
                  }
              },
              visibleY: function(t, e) {
                  return function(n) {
                      if (n.width <= 0 || n.height <= 0)
                          return n;
                      var r = n.width / n.height / n.mediaAspectRatio
                        , i = (e - t) * r;
                      n.zoom > i && (n.zoom = i);
                      var o = t + .5 * n.zoom / r
                        , s = e - .5 * n.zoom / r;
                      return n.y = u(n.y, o, s),
                      n
                  }
              },
              letterbox: function() {
                  return function(t) {
                      if (t.width <= 0 || t.height <= 0)
                          return t;
                      var e, n, r, i, o = t.width / t.height, s = o / t.mediaAspectRatio;
                      return t.mediaAspectRatio >= o && (t.zoom = Math.min(t.zoom, 1)),
                      t.mediaAspectRatio <= o && (t.zoom = Math.min(t.zoom, s)),
                      t.zoom > 1 ? e = n = .5 : (e = 0 + .5 * t.zoom / 1,
                      n = 1 - .5 * t.zoom / 1),
                      t.zoom > s ? r = i = .5 : (r = 0 + .5 * t.zoom / s,
                      i = 1 - .5 * t.zoom / s),
                      t.x = u(t.x, e, n),
                      t.y = u(t.y, r, i),
                      t
                  }
              }
          },
          y.type = y.prototype.type = "flat",
          e.exports = y
      }
      , {
          "../util/clamp": 181,
          "../util/clearOwnProperties": 182,
          "../util/pixelRatio": 201,
          "../util/real": 204,
          "gl-matrix": 5,
          "minimal-event-emitter": 210
      }],
      209: [function(t, e, n) {
          "use strict";
          var r = t("minimal-event-emitter")
            , i = t("gl-matrix").mat4
            , o = t("gl-matrix").vec4
            , s = t("../util/pixelRatio")
            , a = t("../util/convertFov")
            , u = t("../util/mod")
            , l = t("../util/real")
            , c = t("../util/clamp")
            , h = t("../util/decimal")
            , p = t("../util/compose")
            , f = t("../util/clearOwnProperties")
            , d = 0
            , m = 0
            , v = 0
            , y = 0
            , g = 0
            , _ = Math.PI / 4
            , b = 0
            , w = 0;
          function x(t, e) {
              this._yaw = t && null != t.yaw ? t.yaw : v,
              this._pitch = t && null != t.pitch ? t.pitch : y,
              this._roll = t && null != t.roll ? t.roll : g,
              this._fov = t && null != t.fov ? t.fov : _,
              this._width = t && null != t.width ? t.width : d,
              this._height = t && null != t.height ? t.height : m,
              this._projectionCenterX = t && null != t.projectionCenterX ? t.projectionCenterX : b,
              this._projectionCenterY = t && null != t.projectionCenterY ? t.projectionCenterY : w,
              this._limiter = e || null,
              this._projMatrix = i.create(),
              this._invProjMatrix = i.create(),
              this._frustum = [o.create(), o.create(), o.create(), o.create(), o.create()],
              this._projectionChanged = !0,
              this._params = {},
              this._fovs = {},
              this._tmpVec = o.create(),
              this._update()
          }
          r(x),
          x.prototype.destroy = function() {
              f(this)
          }
          ,
          x.prototype.yaw = function() {
              return this._yaw
          }
          ,
          x.prototype.pitch = function() {
              return this._pitch
          }
          ,
          x.prototype.roll = function() {
              return this._roll
          }
          ,
          x.prototype.projectionCenterX = function() {
              return this._projectionCenterX
          }
          ,
          x.prototype.projectionCenterY = function() {
              return this._projectionCenterY
          }
          ,
          x.prototype.fov = function() {
              return this._fov
          }
          ,
          x.prototype.width = function() {
              return this._width
          }
          ,
          x.prototype.height = function() {
              return this._height
          }
          ,
          x.prototype.size = function(t) {
              return (t = t || {}).width = this._width,
              t.height = this._height,
              t
          }
          ,
          x.prototype.parameters = function(t) {
              return (t = t || {}).yaw = this._yaw,
              t.pitch = this._pitch,
              t.roll = this._roll,
              t.fov = this._fov,
              t
          }
          ,
          x.prototype.limiter = function() {
              return this._limiter
          }
          ,
          x.prototype.setYaw = function(t) {
              this._resetParams(),
              this._params.yaw = t,
              this._update(this._params)
          }
          ,
          x.prototype.setPitch = function(t) {
              this._resetParams(),
              this._params.pitch = t,
              this._update(this._params)
          }
          ,
          x.prototype.setRoll = function(t) {
              this._resetParams(),
              this._params.roll = t,
              this._update(this._params)
          }
          ,
          x.prototype.setFov = function(t) {
              this._resetParams(),
              this._params.fov = t,
              this._update(this._params)
          }
          ,
          x.prototype.setProjectionCenterX = function(t) {
              this._resetParams(),
              this._params.projectionCenterX = t,
              this._update(this._params)
          }
          ,
          x.prototype.setProjectionCenterY = function(t) {
              this._resetParams(),
              this._params.projectionCenterY = t,
              this._update(this._params)
          }
          ,
          x.prototype.offsetYaw = function(t) {
              this.setYaw(this._yaw + t)
          }
          ,
          x.prototype.offsetPitch = function(t) {
              this.setPitch(this._pitch + t)
          }
          ,
          x.prototype.offsetRoll = function(t) {
              this.setRoll(this._roll + t)
          }
          ,
          x.prototype.offsetFov = function(t) {
              this.setFov(this._fov + t)
          }
          ,
          x.prototype.setSize = function(t) {
              this._resetParams(),
              this._params.width = t.width,
              this._params.height = t.height,
              this._update(this._params)
          }
          ,
          x.prototype.setParameters = function(t) {
              this._resetParams(),
              this._params.yaw = t.yaw,
              this._params.pitch = t.pitch,
              this._params.roll = t.roll,
              this._params.fov = t.fov,
              this._params.projectionCenterX = t.projectionCenterX,
              this._params.projectionCenterY = t.projectionCenterY,
              this._update(this._params)
          }
          ,
          x.prototype.setLimiter = function(t) {
              this._limiter = t || null,
              this._update()
          }
          ,
          x.prototype._resetParams = function() {
              var t = this._params;
              t.yaw = null,
              t.pitch = null,
              t.roll = null,
              t.fov = null,
              t.width = null,
              t.height = null
          }
          ,
          x.prototype._update = function(t) {
              null == t && (this._resetParams(),
              t = this._params);
              var e = this._yaw
                , n = this._pitch
                , r = this._roll
                , i = this._fov
                , o = this._projectionCenterX
                , s = this._projectionCenterY
                , a = this._width
                , u = this._height;
              if (t.yaw = null != t.yaw ? t.yaw : e,
              t.pitch = null != t.pitch ? t.pitch : n,
              t.roll = null != t.roll ? t.roll : r,
              t.fov = null != t.fov ? t.fov : i,
              t.width = null != t.width ? t.width : a,
              t.height = null != t.height ? t.height : u,
              t.projectionCenterX = null != t.projectionCenterX ? t.projectionCenterX : o,
              t.projectionCenterY = null != t.projectionCenterY ? t.projectionCenterY : s,
              this._limiter && !(t = this._limiter(t)))
                  throw new Error("Bad view limiter");
              var c = (t = this._normalize(t)).yaw
                , h = t.pitch
                , p = t.roll
                , f = t.fov
                , d = t.width
                , m = t.height
                , v = t.projectionCenterX
                , y = t.projectionCenterY;
              if (!(l(c) && l(h) && l(p) && l(f) && l(d) && l(m) && l(v) && l(y)))
                  throw new Error("Bad view - suspect a broken limiter");
              this._yaw = c,
              this._pitch = h,
              this._roll = p,
              this._fov = f,
              this._width = d,
              this._height = m,
              this._projectionCenterX = v,
              this._projectionCenterY = y,
              c === e && h === n && p === r && f === i && d === a && m === u && v === o && y === s || (this._projectionChanged = !0,
              this.emit("change")),
              d === a && m === u || this.emit("resize")
          }
          ,
          x.prototype._normalize = function(t) {
              this._normalizeCoordinates(t);
              var e = a.htov(Math.PI, t.width, t.height)
                , n = isNaN(e) ? Math.PI : Math.min(Math.PI, e);
              return t.fov = c(t.fov, 1e-6, n - 1e-6),
              t
          }
          ,
          x.prototype._normalizeCoordinates = function(t) {
              return "yaw"in t && (t.yaw = u(t.yaw - Math.PI, -2 * Math.PI) + Math.PI),
              "pitch"in t && (t.pitch = u(t.pitch - Math.PI, -2 * Math.PI) + Math.PI),
              "roll"in t && (t.roll = u(t.roll - Math.PI, -2 * Math.PI) + Math.PI),
              t
          }
          ,
          x.prototype.normalizeToClosest = function(t, e) {
              var n = this._yaw
                , r = this._pitch
                , i = t.yaw
                , o = t.pitch
                , s = i - 2 * Math.PI
                , a = i + 2 * Math.PI;
              Math.abs(s - n) < Math.abs(i - n) ? i = s : Math.abs(a - n) < Math.abs(i - n) && (i = a);
              var u = o - 2 * Math.PI
                , l = o + 2 * Math.PI;
              return Math.abs(u - r) < Math.abs(o - r) ? o = u : Math.abs(u - r) < Math.abs(o - r) && (o = l),
              (e = e || {}).yaw = i,
              e.pitch = o,
              e
          }
          ,
          x.prototype.updateWithControlParameters = function(t) {
              var e = this._fov
                , n = a.vtoh(e, this._width, this._height);
              isNaN(n) && (n = e),
              this.offsetYaw(t.axisScaledX * n + 2 * t.x * n + t.yaw),
              this.offsetPitch(t.axisScaledY * e + 2 * t.y * n + t.pitch),
              this.offsetRoll(-t.roll),
              this.offsetFov(t.zoom * e)
          }
          ,
          x.prototype._updateProjection = function() {
              var t = this._projMatrix
                , e = this._invProjMatrix
                , n = this._frustum;
              if (this._projectionChanged) {
                  var r = this._width
                    , o = this._height
                    , s = this._fov
                    , u = a.vtoh(s, r, o)
                    , l = r / o
                    , c = this._projectionCenterX
                    , h = this._projectionCenterY;
                  if (0 !== c || 0 !== h) {
                      var p = Math.atan(2 * c * Math.tan(u / 2))
                        , f = Math.atan(2 * h * Math.tan(s / 2))
                        , d = this._fovs;
                      d.leftDegrees = 180 * (u / 2 + p) / Math.PI,
                      d.rightDegrees = 180 * (u / 2 - p) / Math.PI,
                      d.upDegrees = 180 * (s / 2 + f) / Math.PI,
                      d.downDegrees = 180 * (s / 2 - f) / Math.PI,
                      i.perspectiveFromFieldOfView(t, d, -1, 1)
                  } else
                      i.perspective(t, s, l, -1, 1);
                  i.rotateZ(t, t, this._roll),
                  i.rotateX(t, t, this._pitch),
                  i.rotateY(t, t, this._yaw),
                  i.invert(e, t),
                  this._matrixToFrustum(t, n),
                  this._projectionChanged = !1
              }
          }
          ,
          x.prototype._matrixToFrustum = function(t, e) {
              o.set(e[0], t[3] + t[0], t[7] + t[4], t[11] + t[8], 0),
              o.set(e[1], t[3] - t[0], t[7] - t[4], t[11] - t[8], 0),
              o.set(e[2], t[3] + t[1], t[7] + t[5], t[11] + t[9], 0),
              o.set(e[3], t[3] - t[1], t[7] - t[5], t[11] - t[9], 0),
              o.set(e[4], t[3] + t[2], t[7] + t[6], t[11] + t[10], 0)
          }
          ,
          x.prototype.projection = function() {
              return this._updateProjection(),
              this._projMatrix
          }
          ,
          x.prototype.inverseProjection = function() {
              return this._updateProjection(),
              this._invProjMatrix
          }
          ,
          x.prototype.intersects = function(t) {
              this._updateProjection();
              for (var e = this._frustum, n = this._tmpVec, r = 0; r < e.length; r++) {
                  for (var i = e[r], s = !1, a = 0; a < t.length; a++) {
                      var u = t[a];
                      o.set(n, u[0], u[1], u[2], 0),
                      o.dot(i, n) >= 0 && (s = !0)
                  }
                  if (!s)
                      return !1
              }
              return !0
          }
          ,
          x.prototype.selectLevel = function(t) {
              for (var e = s() * this._height, n = Math.tan(.5 * this._fov), r = 0; r < t.length; r++) {
                  var i = t[r];
                  if (n * i.height() >= e)
                      return i
              }
              return t[t.length - 1]
          }
          ,
          x.prototype.coordinatesToScreen = function(t, e) {
              var n = this._tmpVec;
              e || (e = {});
              var r = this._width
                , i = this._height;
              if (r <= 0 || i <= 0)
                  return e.x = null,
                  e.y = null,
                  null;
              var s = t.yaw
                , a = t.pitch
                , u = Math.sin(s) * Math.cos(a)
                , l = -Math.sin(t.pitch)
                , c = -Math.cos(s) * Math.cos(a);
              return o.set(n, u, l, c, 1),
              o.transformMat4(n, n, this.projection()),
              n[3] >= 0 ? (e.x = r * (n[0] / n[3] + 1) / 2,
              e.y = i * (1 - n[1] / n[3]) / 2,
              e) : (e.x = null,
              e.y = null,
              null)
          }
          ,
          x.prototype.screenToCoordinates = function(t, e) {
              var n = this._tmpVec;
              e || (e = {});
              var r = this._width
                , i = this._height
                , s = 2 * t.x / r - 1
                , a = 1 - 2 * t.y / i;
              o.set(n, s, a, 1, 1),
              o.transformMat4(n, n, this.inverseProjection());
              var u = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
              return e.yaw = Math.atan2(n[0], -n[2]),
              e.pitch = Math.acos(n[1] / u) - Math.PI / 2,
              this._normalizeCoordinates(e),
              e
          }
          ,
          x.prototype.coordinatesToPerspectiveTransform = function(t, e, n) {
              n = n || "";
              var r = this._height
                , i = this._width
                , o = this._fov
                , s = .5 * r / Math.tan(o / 2)
                , a = "";
              return a += "translateX(" + h(i / 2) + "px) ",
              a += "translateY(" + h(r / 2) + "px) ",
              a += "translateX(-50%) translateY(-50%) ",
              a += "perspective(" + h(s) + "px) ",
              a += "translateZ(" + h(s) + "px) ",
              a += "rotateZ(" + h(-this._roll) + "rad) ",
              a += "rotateX(" + h(-this._pitch) + "rad) ",
              a += "rotateY(" + h(this._yaw) + "rad) ",
              a += "rotateY(" + h(-t.yaw) + "rad) ",
              a += "rotateX(" + h(t.pitch) + "rad) ",
              a += "translateZ(" + h(-e) + "px) ",
              a += n + " "
          }
          ,
          x.limit = {
              yaw: function(t, e) {
                  return function(n) {
                      return n.yaw = c(n.yaw, t, e),
                      n
                  }
              },
              pitch: function(t, e) {
                  return function(n) {
                      return n.pitch = c(n.pitch, t, e),
                      n
                  }
              },
              roll: function(t, e) {
                  return function(n) {
                      return n.roll = c(n.roll, t, e),
                      n
                  }
              },
              hfov: function(t, e) {
                  return function(n) {
                      var r = n.width
                        , i = n.height;
                      if (r > 0 && i > 0) {
                          var o = a.htov(t, r, i)
                            , s = a.htov(e, r, i);
                          n.fov = c(n.fov, o, s)
                      }
                      return n
                  }
              },
              vfov: function(t, e) {
                  return function(n) {
                      return n.fov = c(n.fov, t, e),
                      n
                  }
              },
              resolution: function(t) {
                  return function(e) {
                      var n = e.height;
                      if (n) {
                          var r = s() * n
                            , i = 2 * Math.atan(r / t);
                          e.fov = c(e.fov, i, 1 / 0)
                      }
                      return e
                  }
              },
              traditional: function(t, e, n) {
                  return n = null != n ? n : e,
                  p(x.limit.resolution(t), x.limit.vfov(0, e), x.limit.hfov(0, n), x.limit.pitch(-Math.PI / 2, Math.PI / 2))
              }
          },
          x.type = x.prototype.type = "rectilinear",
          e.exports = x
      }
      , {
          "../util/clamp": 181,
          "../util/clearOwnProperties": 182,
          "../util/compose": 184,
          "../util/convertFov": 185,
          "../util/decimal": 186,
          "../util/mod": 197,
          "../util/pixelRatio": 201,
          "../util/real": 204,
          "gl-matrix": 5,
          "minimal-event-emitter": 210
      }],
      210: [function(t, e, n) {
          "use strict";
          function r() {}
          r.prototype.addEventListener = function(t, e) {
              var n = this.__events = this.__events || {}
                , r = n[t] = n[t] || [];
              r.indexOf(e) < 0 && r.push(e)
          }
          ,
          r.prototype.removeEventListener = function(t, e) {
              var n = (this.__events = this.__events || {})[t];
              if (n) {
                  var r = n.indexOf(e);
                  r >= 0 && n.splice(r, 1)
              }
          }
          ,
          r.prototype.emit = function(t, e) {
              var n = this.__events = this.__events || {}
                , r = n[t]
                , i = Array.prototype.slice.call(arguments, 1);
              if (r)
                  for (var o = 0; o < r.length; o++) {
                      var s = r[o];
                      s.apply(this, i)
                  }
          }
          ,
          e.exports = function(t) {
              for (var e in r.prototype)
                  r.prototype.hasOwnProperty(e) && (t.prototype[e] = r.prototype[e])
          }
      }
      , {}],
      211: [function(t, e, n) {
          var r, i, o = e.exports = {};
          function s() {
              throw new Error("setTimeout has not been defined")
          }
          function a() {
              throw new Error("clearTimeout has not been defined")
          }
          function u(t) {
              if (r === setTimeout)
                  return setTimeout(t, 0);
              if ((r === s || !r) && setTimeout)
                  return r = setTimeout,
                  setTimeout(t, 0);
              try {
                  return r(t, 0)
              } catch (e) {
                  try {
                      return r.call(null, t, 0)
                  } catch (e) {
                      return r.call(this, t, 0)
                  }
              }
          }
          !function() {
              try {
                  r = "function" == typeof setTimeout ? setTimeout : s
              } catch (t) {
                  r = s
              }
              try {
                  i = "function" == typeof clearTimeout ? clearTimeout : a
              } catch (t) {
                  i = a
              }
          }();
          var l, c = [], h = !1, p = -1;
          function f() {
              h && l && (h = !1,
              l.length ? c = l.concat(c) : p = -1,
              c.length && d())
          }
          function d() {
              if (!h) {
                  var t = u(f);
                  h = !0;
                  for (var e = c.length; e; ) {
                      for (l = c,
                      c = []; ++p < e; )
                          l && l[p].run();
                      p = -1,
                      e = c.length
                  }
                  l = null,
                  h = !1,
                  function(t) {
                      if (i === clearTimeout)
                          return clearTimeout(t);
                      if ((i === a || !i) && clearTimeout)
                          return i = clearTimeout,
                          clearTimeout(t);
                      try {
                          i(t)
                      } catch (e) {
                          try {
                              return i.call(null, t)
                          } catch (e) {
                              return i.call(this, t)
                          }
                      }
                  }(t)
              }
          }
          function m(t, e) {
              this.fun = t,
              this.array = e
          }
          function v() {}
          o.nextTick = function(t) {
              var e = new Array(arguments.length - 1);
              if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                      e[n - 1] = arguments[n];
              c.push(new m(t,e)),
              1 !== c.length || h || u(d)
          }
          ,
          m.prototype.run = function() {
              this.fun.apply(null, this.array)
          }
          ,
          o.title = "browser",
          o.browser = !0,
          o.env = {},
          o.argv = [],
          o.version = "",
          o.versions = {},
          o.on = v,
          o.addListener = v,
          o.once = v,
          o.off = v,
          o.removeListener = v,
          o.removeAllListeners = v,
          o.emit = v,
          o.prependListener = v,
          o.prependOnceListener = v,
          o.listeners = function(t) {
              return []
          }
          ,
          o.binding = function(t) {
              throw new Error("process.binding is not supported")
          }
          ,
          o.cwd = function() {
              return "/"
          }
          ,
          o.chdir = function(t) {
              throw new Error("process.chdir is not supported")
          }
          ,
          o.umask = function() {
              return 0
          }
      }
      , {}],
      212: [function(t, e, n) {
          (function(t) {
              !function(e, n) {
                  "use strict";
                  if (!e.setImmediate) {
                      var r, i, o, s, a, u = 1, l = {}, c = !1, h = e.document, p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                      p = p && p.setTimeout ? p : e,
                      "[object process]" === {}.toString.call(e.process) ? r = function() {
                          var e = f(arguments);
                          return t.nextTick(d(m, e)),
                          e
                      }
                      : !function() {
                          if (e.postMessage && !e.importScripts) {
                              var t = !0
                                , n = e.onmessage;
                              return e.onmessage = function() {
                                  t = !1
                              }
                              ,
                              e.postMessage("", "*"),
                              e.onmessage = n,
                              t
                          }
                      }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(t) {
                          m(t.data)
                      }
                      ,
                      r = function() {
                          var t = f(arguments);
                          return o.port2.postMessage(t),
                          t
                      }
                      ) : h && "onreadystatechange"in h.createElement("script") ? (i = h.documentElement,
                      r = function() {
                          var t = f(arguments)
                            , e = h.createElement("script");
                          return e.onreadystatechange = function() {
                              m(t),
                              e.onreadystatechange = null,
                              i.removeChild(e),
                              e = null
                          }
                          ,
                          i.appendChild(e),
                          t
                      }
                      ) : r = function() {
                          var t = f(arguments);
                          return setTimeout(d(m, t), 0),
                          t
                      }
                      : (s = "setImmediate$" + Math.random() + "$",
                      a = function(t) {
                          t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && m(+t.data.slice(s.length))
                      }
                      ,
                      e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a),
                      r = function() {
                          var t = f(arguments);
                          return e.postMessage(s + t, "*"),
                          t
                      }
                      ),
                      p.setImmediate = r,
                      p.clearImmediate = v
                  }
                  function f(t) {
                      return l[u] = d.apply(n, t),
                      u++
                  }
                  function d(t) {
                      var e = [].slice.call(arguments, 1);
                      return function() {
                          "function" == typeof t ? t.apply(n, e) : new Function("" + t)()
                      }
                  }
                  function m(t) {
                      if (c)
                          setTimeout(d(m, t), 0);
                      else {
                          var e = l[t];
                          if (e) {
                              c = !0;
                              try {
                                  e()
                              } finally {
                                  v(t),
                                  c = !1
                              }
                          }
                      }
                  }
                  function v(t) {
                      delete l[t]
                  }
              }(new Function("return this")())
          }
          ).call(this, t("_process"))
      }
      , {
          _process: 211
      }],
      213: [function(e, n, r) {
          /**!
* Sortable
* @author	RubaXa   <trash@rubaxa.org>
* @license MIT
*/
          !function(e) {
              "use strict";
              "function" == typeof t && t.amd ? t(e) : void 0 !== n && void 0 !== n.exports ? n.exports = e() : window.Sortable = e()
          }((function() {
              "use strict";
              if ("undefined" == typeof window || !window.document)
                  return function() {
                      throw new Error("Sortable.js requires a window with a document")
                  }
                  ;
              var t, e, n, r, i, o, s, a, u, l, c, h, p, f, d, m, v, y, g, _, b, w = {}, x = /\s+/g, E = /left|right|inline/, M = "Sortable" + (new Date).getTime(), S = window, T = S.document, C = S.parseInt, P = S.setTimeout, O = S.jQuery || S.Zepto, L = S.Polymer, A = !1, k = "draggable"in T.createElement("div"), R = !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && ((b = T.createElement("x")).style.cssText = "pointer-events:auto",
              "auto" === b.style.pointerEvents), D = !1, I = Math.abs, N = Math.min, F = [], j = [], z = rt((function(t, e, n) {
                  if (n && e.scroll) {
                      var r, i, o, s, c, h, p = n[M], f = e.scrollSensitivity, d = e.scrollSpeed, m = t.clientX, v = t.clientY, y = window.innerWidth, g = window.innerHeight;
                      if (u !== n && (a = e.scroll,
                      u = n,
                      l = e.scrollFn,
                      !0 === a)) {
                          a = n;
                          do {
                              if (a.offsetWidth < a.scrollWidth || a.offsetHeight < a.scrollHeight)
                                  break
                          } while (a = a.parentNode)
                      }
                      a && (r = a,
                      i = a.getBoundingClientRect(),
                      o = (I(i.right - m) <= f) - (I(i.left - m) <= f),
                      s = (I(i.bottom - v) <= f) - (I(i.top - v) <= f)),
                      o || s || (s = (g - v <= f) - (v <= f),
                      ((o = (y - m <= f) - (m <= f)) || s) && (r = S)),
                      w.vx === o && w.vy === s && w.el === r || (w.el = r,
                      w.vx = o,
                      w.vy = s,
                      clearInterval(w.pid),
                      r && (w.pid = setInterval((function() {
                          if (h = s ? s * d : 0,
                          c = o ? o * d : 0,
                          "function" == typeof l)
                              return l.call(p, c, h, t);
                          r === S ? S.scrollTo(S.pageXOffset + c, S.pageYOffset + h) : (r.scrollTop += h,
                          r.scrollLeft += c)
                      }
                      ), 24)))
                  }
              }
              ), 30), H = function(t) {
                  function e(t, e) {
                      return void 0 !== t && !0 !== t || (t = n.name),
                      "function" == typeof t ? t : function(n, r) {
                          var i = r.options.group.name;
                          return e ? t : t && (t.join ? t.indexOf(i) > -1 : i == t)
                      }
                  }
                  var n = {}
                    , r = t.group;
                  r && "object" == typeof r || (r = {
                      name: r
                  }),
                  n.name = r.name,
                  n.checkPull = e(r.pull, !0),
                  n.checkPut = e(r.put),
                  n.revertClone = r.revertClone,
                  t.group = n
              };
              try {
                  window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                      get: function() {
                          A = {
                              capture: !1,
                              passive: !1
                          }
                      }
                  }))
              } catch (t) {}
              function B(t, e) {
                  if (!t || !t.nodeType || 1 !== t.nodeType)
                      throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(t);
                  this.el = t,
                  this.options = e = it({}, e),
                  t[M] = this;
                  var n = {
                      group: Math.random(),
                      sort: !0,
                      disabled: !1,
                      store: null,
                      handle: null,
                      scroll: !0,
                      scrollSensitivity: 30,
                      scrollSpeed: 10,
                      draggable: /[uo]l/i.test(t.nodeName) ? "li" : ">*",
                      ghostClass: "sortable-ghost",
                      chosenClass: "sortable-chosen",
                      dragClass: "sortable-drag",
                      ignore: "a, img",
                      filter: null,
                      preventOnFilter: !0,
                      animation: 0,
                      setData: function(t, e) {
                          t.setData("Text", e.textContent)
                      },
                      dropBubble: !1,
                      dragoverBubble: !1,
                      dataIdAttr: "data-id",
                      delay: 0,
                      forceFallback: !1,
                      fallbackClass: "sortable-fallback",
                      fallbackOnBody: !1,
                      fallbackTolerance: 0,
                      fallbackOffset: {
                          x: 0,
                          y: 0
                      },
                      supportPointer: !1 !== B.supportPointer
                  };
                  for (var r in n)
                      !(r in e) && (e[r] = n[r]);
                  for (var i in H(e),
                  this)
                      "_" === i.charAt(0) && "function" == typeof this[i] && (this[i] = this[i].bind(this));
                  this.nativeDraggable = !e.forceFallback && k,
                  Y(t, "mousedown", this._onTapStart),
                  Y(t, "touchstart", this._onTapStart),
                  e.supportPointer && Y(t, "pointerdown", this._onTapStart),
                  this.nativeDraggable && (Y(t, "dragover", this),
                  Y(t, "dragenter", this)),
                  j.push(this._onDragOver),
                  e.store && this.sort(e.store.get(this))
              }
              function V(e, n) {
                  "clone" !== e.lastPullMode && (n = !0),
                  r && r.state !== n && (G(r, "display", n ? "none" : ""),
                  n || r.state && (e.options.group.revertClone ? (i.insertBefore(r, o),
                  e._animate(t, r)) : i.insertBefore(r, t)),
                  r.state = n)
              }
              function q(t, e, n) {
                  if (t) {
                      n = n || T;
                      do {
                          if (">*" === e && t.parentNode === n || nt(t, e))
                              return t
                      } while (t = W(t))
                  }
                  return null
              }
              function W(t) {
                  var e = t.host;
                  return e && e.nodeType ? e : t.parentNode
              }
              function Y(t, e, n) {
                  t.addEventListener(e, n, A)
              }
              function X(t, e, n) {
                  t.removeEventListener(e, n, A)
              }
              function U(t, e, n) {
                  if (t)
                      if (t.classList)
                          t.classList[n ? "add" : "remove"](e);
                      else {
                          var r = (" " + t.className + " ").replace(x, " ").replace(" " + e + " ", " ");
                          t.className = (r + (n ? " " + e : "")).replace(x, " ")
                      }
              }
              function G(t, e, n) {
                  var r = t && t.style;
                  if (r) {
                      if (void 0 === n)
                          return T.defaultView && T.defaultView.getComputedStyle ? n = T.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle),
                          void 0 === e ? n : n[e];
                      e in r || (e = "-webkit-" + e),
                      r[e] = n + ("string" == typeof n ? "" : "px")
                  }
              }
              function K(t, e, n) {
                  if (t) {
                      var r = t.getElementsByTagName(e)
                        , i = 0
                        , o = r.length;
                      if (n)
                          for (; i < o; i++)
                              n(r[i], i);
                      return r
                  }
                  return []
              }
              function $(t, e, n, i, o, s, a, u) {
                  t = t || e[M];
                  var l = T.createEvent("Event")
                    , c = t.options
                    , h = "on" + n.charAt(0).toUpperCase() + n.substr(1);
                  l.initEvent(n, !0, !0),
                  l.to = o || e,
                  l.from = s || e,
                  l.item = i || e,
                  l.clone = r,
                  l.oldIndex = a,
                  l.newIndex = u,
                  e.dispatchEvent(l),
                  c[h] && c[h].call(t, l)
              }
              function Q(t, e, n, r, i, o, s, a) {
                  var u, l, c = t[M], h = c.options.onMove;
                  return (u = T.createEvent("Event")).initEvent("move", !0, !0),
                  u.to = e,
                  u.from = t,
                  u.dragged = n,
                  u.draggedRect = r,
                  u.related = i || e,
                  u.relatedRect = o || e.getBoundingClientRect(),
                  u.willInsertAfter = a,
                  t.dispatchEvent(u),
                  h && (l = h.call(c, u, s)),
                  l
              }
              function Z(t) {
                  t.draggable = !1
              }
              function J() {
                  D = !1
              }
              function tt(t) {
                  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--; )
                      r += e.charCodeAt(n);
                  return r.toString(36)
              }
              function et(t, e) {
                  var n = 0;
                  if (!t || !t.parentNode)
                      return -1;
                  for (; t && (t = t.previousElementSibling); )
                      "TEMPLATE" === t.nodeName.toUpperCase() || ">*" !== e && !nt(t, e) || n++;
                  return n
              }
              function nt(t, e) {
                  if (t) {
                      var n = (e = e.split(".")).shift().toUpperCase()
                        , r = new RegExp("\\s(" + e.join("|") + ")(?=\\s)","g");
                      return !("" !== n && t.nodeName.toUpperCase() != n || e.length && ((" " + t.className + " ").match(r) || []).length != e.length)
                  }
                  return !1
              }
              function rt(t, e) {
                  var n, r;
                  return function() {
                      void 0 === n && (n = arguments,
                      r = this,
                      P((function() {
                          1 === n.length ? t.call(r, n[0]) : t.apply(r, n),
                          n = void 0
                      }
                      ), e))
                  }
              }
              function it(t, e) {
                  if (t && e)
                      for (var n in e)
                          e.hasOwnProperty(n) && (t[n] = e[n]);
                  return t
              }
              function ot(t) {
                  return L && L.dom ? L.dom(t).cloneNode(!0) : O ? O(t).clone(!0)[0] : t.cloneNode(!0)
              }
              function st(t) {
                  return P(t, 0)
              }
              function at(t) {
                  return clearTimeout(t)
              }
              return B.prototype = {
                  constructor: B,
                  _onTapStart: function(e) {
                      var n, r = this, i = this.el, o = this.options, a = o.preventOnFilter, u = e.type, l = e.touches && e.touches[0], c = (l || e).target, h = e.target.shadowRoot && e.path && e.path[0] || c, p = o.filter;
                      if (function(t) {
                          var e = t.getElementsByTagName("input")
                            , n = e.length;
                          for (; n--; ) {
                              var r = e[n];
                              r.checked && F.push(r)
                          }
                      }(i),
                      !t && !(/mousedown|pointerdown/.test(u) && 0 !== e.button || o.disabled) && !h.isContentEditable && (c = q(c, o.draggable, i)) && s !== c) {
                          if (n = et(c, o.draggable),
                          "function" == typeof p) {
                              if (p.call(this, e, c, this))
                                  return $(r, h, "filter", c, i, i, n),
                                  void (a && e.preventDefault())
                          } else if (p && (p = p.split(",").some((function(t) {
                              if (t = q(h, t.trim(), i))
                                  return $(r, t, "filter", c, i, i, n),
                                  !0
                          }
                          ))))
                              return void (a && e.preventDefault());
                          o.handle && !q(h, o.handle, i) || this._prepareDragStart(e, l, c, n)
                      }
                  },
                  _prepareDragStart: function(n, r, a, u) {
                      var l, c = this, h = c.el, p = c.options, d = h.ownerDocument;
                      a && !t && a.parentNode === h && (y = n,
                      i = h,
                      e = (t = a).parentNode,
                      o = t.nextSibling,
                      s = a,
                      m = p.group,
                      f = u,
                      this._lastX = (r || n).clientX,
                      this._lastY = (r || n).clientY,
                      t.style["will-change"] = "all",
                      l = function() {
                          c._disableDelayedDrag(),
                          t.draggable = c.nativeDraggable,
                          U(t, p.chosenClass, !0),
                          c._triggerDragStart(n, r),
                          $(c, i, "choose", t, i, i, f)
                      }
                      ,
                      p.ignore.split(",").forEach((function(e) {
                          K(t, e.trim(), Z)
                      }
                      )),
                      Y(d, "mouseup", c._onDrop),
                      Y(d, "touchend", c._onDrop),
                      Y(d, "touchcancel", c._onDrop),
                      Y(d, "selectstart", c),
                      p.supportPointer && Y(d, "pointercancel", c._onDrop),
                      p.delay ? (Y(d, "mouseup", c._disableDelayedDrag),
                      Y(d, "touchend", c._disableDelayedDrag),
                      Y(d, "touchcancel", c._disableDelayedDrag),
                      Y(d, "mousemove", c._disableDelayedDrag),
                      Y(d, "touchmove", c._disableDelayedDrag),
                      p.supportPointer && Y(d, "pointermove", c._disableDelayedDrag),
                      c._dragStartTimer = P(l, p.delay)) : l())
                  },
                  _disableDelayedDrag: function() {
                      var t = this.el.ownerDocument;
                      clearTimeout(this._dragStartTimer),
                      X(t, "mouseup", this._disableDelayedDrag),
                      X(t, "touchend", this._disableDelayedDrag),
                      X(t, "touchcancel", this._disableDelayedDrag),
                      X(t, "mousemove", this._disableDelayedDrag),
                      X(t, "touchmove", this._disableDelayedDrag),
                      X(t, "pointermove", this._disableDelayedDrag)
                  },
                  _triggerDragStart: function(e, n) {
                      (n = n || ("touch" == e.pointerType ? e : null)) ? (y = {
                          target: t,
                          clientX: n.clientX,
                          clientY: n.clientY
                      },
                      this._onDragStart(y, "touch")) : this.nativeDraggable ? (Y(t, "dragend", this),
                      Y(i, "dragstart", this._onDragStart)) : this._onDragStart(y, !0);
                      try {
                          T.selection ? st((function() {
                              T.selection.empty()
                          }
                          )) : window.getSelection().removeAllRanges()
                      } catch (t) {}
                  },
                  _dragStarted: function() {
                      if (i && t) {
                          var e = this.options;
                          U(t, e.ghostClass, !0),
                          U(t, e.dragClass, !1),
                          B.active = this,
                          $(this, i, "start", t, i, i, f)
                      } else
                          this._nulling()
                  },
                  _emulateDragOver: function() {
                      if (g) {
                          if (this._lastX === g.clientX && this._lastY === g.clientY)
                              return;
                          this._lastX = g.clientX,
                          this._lastY = g.clientY,
                          R || G(n, "display", "none");
                          var t = T.elementFromPoint(g.clientX, g.clientY)
                            , e = t
                            , r = j.length;
                          if (t && t.shadowRoot && (e = t = t.shadowRoot.elementFromPoint(g.clientX, g.clientY)),
                          e)
                              do {
                                  if (e[M]) {
                                      for (; r--; )
                                          j[r]({
                                              clientX: g.clientX,
                                              clientY: g.clientY,
                                              target: t,
                                              rootEl: e
                                          });
                                      break
                                  }
                                  t = e
                              } while (e = e.parentNode);
                          R || G(n, "display", "")
                      }
                  },
                  _onTouchMove: function(t) {
                      if (y) {
                          var e = this.options
                            , r = e.fallbackTolerance
                            , i = e.fallbackOffset
                            , o = t.touches ? t.touches[0] : t
                            , s = o.clientX - y.clientX + i.x
                            , a = o.clientY - y.clientY + i.y
                            , u = t.touches ? "translate3d(" + s + "px," + a + "px,0)" : "translate(" + s + "px," + a + "px)";
                          if (!B.active) {
                              if (r && N(I(o.clientX - this._lastX), I(o.clientY - this._lastY)) < r)
                                  return;
                              this._dragStarted()
                          }
                          this._appendGhost(),
                          _ = !0,
                          g = o,
                          G(n, "webkitTransform", u),
                          G(n, "mozTransform", u),
                          G(n, "msTransform", u),
                          G(n, "transform", u),
                          t.preventDefault()
                      }
                  },
                  _appendGhost: function() {
                      if (!n) {
                          var e, r = t.getBoundingClientRect(), o = G(t), s = this.options;
                          U(n = t.cloneNode(!0), s.ghostClass, !1),
                          U(n, s.fallbackClass, !0),
                          U(n, s.dragClass, !0),
                          G(n, "top", r.top - C(o.marginTop, 10)),
                          G(n, "left", r.left - C(o.marginLeft, 10)),
                          G(n, "width", r.width),
                          G(n, "height", r.height),
                          G(n, "opacity", "0.8"),
                          G(n, "position", "fixed"),
                          G(n, "zIndex", "100000"),
                          G(n, "pointerEvents", "none"),
                          s.fallbackOnBody && T.body.appendChild(n) || i.appendChild(n),
                          e = n.getBoundingClientRect(),
                          G(n, "width", 2 * r.width - e.width),
                          G(n, "height", 2 * r.height - e.height)
                      }
                  },
                  _onDragStart: function(e, n) {
                      var o = this
                        , s = e.dataTransfer
                        , a = o.options;
                      o._offUpEvents(),
                      m.checkPull(o, o, t, e) && ((r = ot(t)).draggable = !1,
                      r.style["will-change"] = "",
                      G(r, "display", "none"),
                      U(r, o.options.chosenClass, !1),
                      o._cloneId = st((function() {
                          i.insertBefore(r, t),
                          $(o, i, "clone", t)
                      }
                      ))),
                      U(t, a.dragClass, !0),
                      n ? ("touch" === n ? (Y(T, "touchmove", o._onTouchMove),
                      Y(T, "touchend", o._onDrop),
                      Y(T, "touchcancel", o._onDrop),
                      a.supportPointer && (Y(T, "pointermove", o._onTouchMove),
                      Y(T, "pointerup", o._onDrop))) : (Y(T, "mousemove", o._onTouchMove),
                      Y(T, "mouseup", o._onDrop)),
                      o._loopId = setInterval(o._emulateDragOver, 50)) : (s && (s.effectAllowed = "move",
                      a.setData && a.setData.call(o, s, t)),
                      Y(T, "drop", o),
                      o._dragStartId = st(o._dragStarted))
                  },
                  _onDragOver: function(s) {
                      var a, u, l, f, d = this.el, y = this.options, g = y.group, b = B.active, w = m === g, x = !1, S = y.sort;
                      if (void 0 !== s.preventDefault && (s.preventDefault(),
                      !y.dragoverBubble && s.stopPropagation()),
                      !t.animated && (_ = !0,
                      b && !y.disabled && (w ? S || (f = !i.contains(t)) : v === this || (b.lastPullMode = m.checkPull(this, b, t, s)) && g.checkPut(this, b, t, s)) && (void 0 === s.rootEl || s.rootEl === this.el))) {
                          if (z(s, y, this.el),
                          D)
                              return;
                          if (a = q(s.target, y.draggable, d),
                          u = t.getBoundingClientRect(),
                          v !== this && (v = this,
                          x = !0),
                          f)
                              return V(b, !0),
                              e = i,
                              void (r || o ? i.insertBefore(t, r || o) : S || i.appendChild(t));
                          if (0 === d.children.length || d.children[0] === n || d === s.target && function(t, e) {
                              var n = t.lastElementChild.getBoundingClientRect();
                              return e.clientY - (n.top + n.height) > 5 || e.clientX - (n.left + n.width) > 5
                          }(d, s)) {
                              if (0 !== d.children.length && d.children[0] !== n && d === s.target && (a = d.lastElementChild),
                              a) {
                                  if (a.animated)
                                      return;
                                  l = a.getBoundingClientRect()
                              }
                              V(b, w),
                              !1 !== Q(i, d, t, u, a, l, s) && (t.contains(d) || (d.appendChild(t),
                              e = d),
                              this._animate(u, t),
                              a && this._animate(l, a))
                          } else if (a && !a.animated && a !== t && void 0 !== a.parentNode[M]) {
                              c !== a && (c = a,
                              h = G(a),
                              p = G(a.parentNode));
                              var T = (l = a.getBoundingClientRect()).right - l.left
                                , C = l.bottom - l.top
                                , O = E.test(h.cssFloat + h.display) || "flex" == p.display && 0 === p["flex-direction"].indexOf("row")
                                , L = a.offsetWidth > t.offsetWidth
                                , A = a.offsetHeight > t.offsetHeight
                                , k = (O ? (s.clientX - l.left) / T : (s.clientY - l.top) / C) > .5
                                , R = a.nextElementSibling
                                , I = !1;
                              if (O) {
                                  var N = t.offsetTop
                                    , F = a.offsetTop;
                                  I = N === F ? a.previousElementSibling === t && !L || k && L : a.previousElementSibling === t || t.previousElementSibling === a ? (s.clientY - l.top) / C > .5 : F > N
                              } else
                                  x || (I = R !== t && !A || k && A);
                              var j = Q(i, d, t, u, a, l, s, I);
                              !1 !== j && (1 !== j && -1 !== j || (I = 1 === j),
                              D = !0,
                              P(J, 30),
                              V(b, w),
                              t.contains(d) || (I && !R ? d.appendChild(t) : a.parentNode.insertBefore(t, I ? R : a)),
                              e = t.parentNode,
                              this._animate(u, t),
                              this._animate(l, a))
                          }
                      }
                  },
                  _animate: function(t, e) {
                      var n = this.options.animation;
                      if (n) {
                          var r = e.getBoundingClientRect();
                          1 === t.nodeType && (t = t.getBoundingClientRect()),
                          G(e, "transition", "none"),
                          G(e, "transform", "translate3d(" + (t.left - r.left) + "px," + (t.top - r.top) + "px,0)"),
                          e.offsetWidth,
                          G(e, "transition", "all " + n + "ms"),
                          G(e, "transform", "translate3d(0,0,0)"),
                          clearTimeout(e.animated),
                          e.animated = P((function() {
                              G(e, "transition", ""),
                              G(e, "transform", ""),
                              e.animated = !1
                          }
                          ), n)
                      }
                  },
                  _offUpEvents: function() {
                      var t = this.el.ownerDocument;
                      X(T, "touchmove", this._onTouchMove),
                      X(T, "pointermove", this._onTouchMove),
                      X(t, "mouseup", this._onDrop),
                      X(t, "touchend", this._onDrop),
                      X(t, "pointerup", this._onDrop),
                      X(t, "touchcancel", this._onDrop),
                      X(t, "pointercancel", this._onDrop),
                      X(t, "selectstart", this)
                  },
                  _onDrop: function(s) {
                      var a = this.el
                        , u = this.options;
                      clearInterval(this._loopId),
                      clearInterval(w.pid),
                      clearTimeout(this._dragStartTimer),
                      at(this._cloneId),
                      at(this._dragStartId),
                      X(T, "mouseover", this),
                      X(T, "mousemove", this._onTouchMove),
                      this.nativeDraggable && (X(T, "drop", this),
                      X(a, "dragstart", this._onDragStart)),
                      this._offUpEvents(),
                      s && (_ && (s.preventDefault(),
                      !u.dropBubble && s.stopPropagation()),
                      n && n.parentNode && n.parentNode.removeChild(n),
                      i !== e && "clone" === B.active.lastPullMode || r && r.parentNode && r.parentNode.removeChild(r),
                      t && (this.nativeDraggable && X(t, "dragend", this),
                      Z(t),
                      t.style["will-change"] = "",
                      U(t, this.options.ghostClass, !1),
                      U(t, this.options.chosenClass, !1),
                      $(this, i, "unchoose", t, e, i, f),
                      i !== e ? (d = et(t, u.draggable)) >= 0 && ($(null, e, "add", t, e, i, f, d),
                      $(this, i, "remove", t, e, i, f, d),
                      $(null, e, "sort", t, e, i, f, d),
                      $(this, i, "sort", t, e, i, f, d)) : t.nextSibling !== o && (d = et(t, u.draggable)) >= 0 && ($(this, i, "update", t, e, i, f, d),
                      $(this, i, "sort", t, e, i, f, d)),
                      B.active && (null != d && -1 !== d || (d = f),
                      $(this, i, "end", t, e, i, f, d),
                      this.save()))),
                      this._nulling()
                  },
                  _nulling: function() {
                      i = t = e = n = o = r = s = a = u = y = g = _ = d = c = h = v = m = B.active = null,
                      F.forEach((function(t) {
                          t.checked = !0
                      }
                      )),
                      F.length = 0
                  },
                  handleEvent: function(e) {
                      switch (e.type) {
                      case "drop":
                      case "dragend":
                          this._onDrop(e);
                          break;
                      case "dragover":
                      case "dragenter":
                          t && (this._onDragOver(e),
                          function(t) {
                              t.dataTransfer && (t.dataTransfer.dropEffect = "move");
                              t.preventDefault()
                          }(e));
                          break;
                      case "mouseover":
                          this._onDrop(e);
                          break;
                      case "selectstart":
                          e.preventDefault()
                      }
                  },
                  toArray: function() {
                      for (var t, e = [], n = this.el.children, r = 0, i = n.length, o = this.options; r < i; r++)
                          q(t = n[r], o.draggable, this.el) && e.push(t.getAttribute(o.dataIdAttr) || tt(t));
                      return e
                  },
                  sort: function(t) {
                      var e = {}
                        , n = this.el;
                      this.toArray().forEach((function(t, r) {
                          var i = n.children[r];
                          q(i, this.options.draggable, n) && (e[t] = i)
                      }
                      ), this),
                      t.forEach((function(t) {
                          e[t] && (n.removeChild(e[t]),
                          n.appendChild(e[t]))
                      }
                      ))
                  },
                  save: function() {
                      var t = this.options.store;
                      t && t.set(this)
                  },
                  closest: function(t, e) {
                      return q(t, e || this.options.draggable, this.el)
                  },
                  option: function(t, e) {
                      var n = this.options;
                      if (void 0 === e)
                          return n[t];
                      n[t] = e,
                      "group" === t && H(n)
                  },
                  destroy: function() {
                      var t = this.el;
                      t[M] = null,
                      X(t, "mousedown", this._onTapStart),
                      X(t, "touchstart", this._onTapStart),
                      X(t, "pointerdown", this._onTapStart),
                      this.nativeDraggable && (X(t, "dragover", this),
                      X(t, "dragenter", this)),
                      Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), (function(t) {
                          t.removeAttribute("draggable")
                      }
                      )),
                      j.splice(j.indexOf(this._onDragOver), 1),
                      this._onDrop(),
                      this.el = t = null
                  }
              },
              Y(T, "touchmove", (function(t) {
                  B.active && t.preventDefault()
              }
              )),
              B.utils = {
                  on: Y,
                  off: X,
                  css: G,
                  find: K,
                  is: function(t, e) {
                      return !!q(t, e, t)
                  },
                  extend: it,
                  throttle: rt,
                  closest: q,
                  toggleClass: U,
                  clone: ot,
                  index: et,
                  nextTick: st,
                  cancelNextTick: at
              },
              B.create = function(t, e) {
                  return new B(t,e)
              }
              ,
              B.version = "1.7.0",
              B
          }
          ))
      }
      , {}],
      214: [function(t, e, n) {
          "use strict";
          var r = t("./util/eventEmitter")
            , i = t("knockout-es5");
          function o(t, e, n, r) {
              this.yaw = t,
              this.pitch = e,
              this.title = n,
              this.text = r,
              this.initialTitle = n,
              this.initialText = r,
              this.getObservable = function(t) {
                  return i.getObservable(this, t)
              }
              .bind(this),
              i.track(this)
          }
          r(o),
          o.prototype.setCoordinates = function(t) {
              this.yaw = t.yaw,
              this.pitch = t.pitch,
              this.emit("coordinatesChanged")
          }
          ,
          o.prototype.isUnchanged = function() {
              return this.title === this.initialTitle && this.text === this.initialText
          }
          ,
          o.prototype.toObject = function() {
              return {
                  yaw: this.yaw,
                  pitch: this.pitch,
                  title: this.title,
                  text: this.text
              }
          }
          ,
          e.exports = o
      }
      , {
          "./util/eventEmitter": 251,
          "knockout-es5": 18
      }],
      215: [function(t, e, n) {
          "use strict";
          var r = t("./util/eventEmitter")
            , i = t("knockout-es5");
          function o(t, e, n) {
              this.yaw = t,
              this.pitch = e,
              this.target = n,
              this.rotation = 0,
              i.track(this)
          }
          r(o),
          o.prototype.setCoordinates = function(t) {
              this.yaw = t.yaw,
              this.pitch = t.pitch,
              this.emit("coordinatesChanged")
          }
          ,
          o.prototype.offsetRotation = function(t) {
              this.rotation += t,
              this.emit("rotationChanged")
          }
          ,
          o.prototype.setTarget = function(t) {
              this.target = t,
              this.emit("targetChanged")
          }
          ,
          o.prototype.toObject = function() {
              return {
                  yaw: this.yaw,
                  pitch: this.pitch,
                  rotation: this.rotation,
                  target: this.target.uniqueId()
              }
          }
          ,
          o.prototype.hasValidTarget = function() {
              return this.target && !this.target.removed()
          }
          ,
          e.exports = o
      }
      , {
          "./util/eventEmitter": 251,
          "knockout-es5": 18
      }],
      216: [function(t, e, n) {
          "use strict";
          var r = t("knockout-es5")
            , i = 5e3;
          function o() {
              this.list = [],
              r.track(this)
          }
          function s(t, e) {
              this.html = t,
              this.level = e,
              this.time = Date.now(),
              this.notifying = !0,
              this.read = !1;
              var n = this;
              setTimeout((function() {
                  n.notifying = !1
              }
              ), i),
              r.track(this)
          }
          o.prototype.push = function(t, e) {
              var n = new s(t,e);
              this.list.unshift(n)
          }
          ,
          o.prototype.all = function() {
              return this.list
          }
          ,
          o.prototype.notifying = function() {
              return this.list.filter((function(t) {
                  return t.notifying
              }
              ))
          }
          ,
          o.prototype.setAllNotNotifying = function() {
              this.list.forEach((function(t) {
                  t.notifying = !1
              }
              ))
          }
          ,
          o.prototype.setAllRead = function() {
              this.list.forEach((function(t) {
                  t.read = !0
              }
              ))
          }
          ,
          o.prototype.numNotRead = function() {
              return this.list.reduce((function(t, e) {
                  return e.read ? t : t + 1
              }
              ), 0)
          }
          ,
          s.prototype.isWarning = function() {
              return "warning" === this.level
          }
          ,
          e.exports = o
      }
      , {
          "knockout-es5": 18
      }],
      217: [function(t, e, n) {
          "use strict";
          var r = t("lodash/collection/find")
            , i = t("lodash/object/values")
            , o = t("./TileStore")
            , s = t("./processPanorama")
            , a = t("./processingState/ProcessingState")
            , u = t("./util/eventEmitter")
            , l = t("./oneShotEdit")
            , c = t("knockout-es5")
            , h = (t("./util/endianess"),
          t("./util/errorToObject"))
            , p = t("./util/slug");
          function f() {
              this.list = [],
              this.selected = null,
              this._processing = null,
              c.track(this)
          }
          function d(t, e, n, r, i, s) {
              this.panoramasList = t,
              this.type = e,
              this.name = n,
              this.fileData = r,
              this.width = i,
              this.height = s,
              this.processingState = new a("panorama",{
                  type: e,
                  name: n,
                  width: i,
                  height: s
              }),
              this.tileStore = new o,
              this.cubeMapPreview = null,
              this.faceSize = null,
              this.levels = null,
              this.cubeMapPreviewSize = null,
              this.settings = {
                  initialViewParameters: {
                      pitch: 0,
                      yaw: 0,
                      fov: Math.PI / 2
                  },
                  linkHotspots: [],
                  infoHotspots: []
              },
              c.track(this),
              c.track(this.settings.linkHotspots)
          }
          f.prototype.push = function(t, e, n, r, i) {
              var o = new d(this,t,e,n,r,i);
              this.list.push(o);
              var s = this;
              o.processingState.addEventListener("changed", (function() {
                  s.emit("changed")
              }
              )),
              this.emit("changed"),
              this._handleListChange(),
              this.selected || o.select()
          }
          ,
          f.prototype._handleListChange = function() {
              if (!this._processing) {
                  var t = r(this.list, (function(t) {
                      return t.processingState.isQueued()
                  }
                  ));
                  if (t) {
                      t.processingState.started();
                      var e = this
                        , n = s(t, (function(n) {
                          n && "cancelled" === n.message ? t.processingState.cancelled() : n ? (t.processingState.failed(h(n)),
                          e.emit("processingFailed", t)) : t.processingState.successful(),
                          e._processing = null,
                          e._handleListChange()
                      }
                      ));
                      this._processing = {
                          panorama: t,
                          cancel: n
                      }
                  }
              }
          }
          ,
          f.prototype._remove = function(t) {
              if ((t.processingState.isSuccessful() || t.processingState.isStarted()) && !window.confirm("Are you sure you want to remove this panorama?"))
                  return;
              var e = this.list.indexOf(t);
              e < 0 || (this.list.splice(e, 1),
              this._processing && this._processing.panorama === t && this._processing.cancel(),
              this.emit("changed"),
              this._handleListChange(),
              this.selected === t && (this.list.length > 0 ? this.list[0].select() : this.selected = null))
          }
          ,
          f.prototype._setSelected = function(t) {
              this.selected = t,
              this.emit("selectedPanoramaChanged", t)
          }
          ,
          u(f),
          u(d),
          d.prototype.addTile = function(t, e, n, r, i) {
              this.tileStore.put(t, e, n, r, i)
          }
          ,
          d.prototype.setCubeMapPreview = function(t) {
              if (this.cubeMapPreview)
                  throw new Error("CubeMapPreview already set");
              if (!this.cubeMapPreviewSize)
                  throw new Error("Cannot set CubeMapPreview on Panorama without cubeMapPreviewSize");
              this.cubeMapPreview = t
          }
          ,
          d.prototype.setLevels = function(t, e) {
              if (e = e || {},
              this.levels)
                  throw new Error("Levels already set");
              var n = t.slice();
              e.cubeMapPreviewSize && n.unshift({
                  tileSize: e.cubeMapPreviewSize,
                  size: e.cubeMapPreviewSize,
                  fallbackOnly: !0
              }),
              this.levels = n,
              this.cubeMapPreviewSize = e.cubeMapPreviewSize;
              var r = n[n.length - 1].size;
              this.faceSize = e.faceSize ? Math.min(e.faceSize, r) : r,
              this.emit("levelsSet", null)
          }
          ,
          d.prototype.edit = function() {
              var t = this.uniqueId()
                , e = document.querySelector('[data-panorama-id="' + t + '"] .name');
              l(e)
          }
          ,
          d.prototype.remove = function(t, e) {
              this.panoramasList._remove(this),
              e.stopPropagation()
          }
          ,
          d.prototype.removed = function() {
              return this.panoramasList.list.indexOf(this) < 0
          }
          ,
          d.prototype.select = function() {
              this.panoramasList._setSelected(this)
          }
          ,
          d.prototype.isSelected = function() {
              return this.panoramasList.selected === this
          }
          ,
          d.prototype.uniqueId = function() {
              var t = this.panoramasList.list.indexOf(this);
              return t >= 0 ? t + "-" + p(this.name) : p(this.name)
          }
          ,
          d.prototype.files = function() {
              return "equirectangular" === this.type ? [this.fileData] : "cube" === this.type ? i(this.fileData) : void 0
          }
          ,
          d.prototype.addLinkHotspot = function(t) {
              this.settings.linkHotspots.push(t),
              this.emit("linkHotspotAdded", t)
          }
          ,
          d.prototype.removeLinkHotspot = function(t) {
              var e = this.settings.linkHotspots.indexOf(t);
              this.settings.linkHotspots.splice(e, 1),
              this.emit("linkHotspotRemoved", t)
          }
          ,
          d.prototype.addInfoHotspot = function(t) {
              this.settings.infoHotspots.push(t),
              this.emit("infoHotspotAdded", t)
          }
          ,
          d.prototype.removeInfoHotspot = function(t) {
              var e = this.settings.infoHotspots.indexOf(t);
              this.settings.infoHotspots.splice(e, 1),
              this.emit("infoHotspotRemoved", t)
          }
          ,
          e.exports = f
      }
      , {
          "./TileStore": 218,
          "./oneShotEdit": 229,
          "./processPanorama": 237,
          "./processingState/ProcessingState": 240,
          "./util/endianess": 249,
          "./util/errorToObject": 250,
          "./util/eventEmitter": 251,
          "./util/slug": 256,
          "knockout-es5": 18,
          "lodash/collection/find": 26,
          "lodash/object/values": 96
      }],
      218: [function(t, e, n) {
          "use strict";
          var r = t("async")
            , i = t("./util/delay");
          function o() {
              this._store = {}
          }
          t("./util/eventEmitter")(o),
          o.prototype.put = function(t, e, n, r, i) {
              if (this._store[t] || (this._store[t] = {}),
              this._store[t][e] || (this._store[t][e] = {}),
              this._store[t][e][n] || (this._store[t][e][n] = {}),
              this._store[t][e][n][r])
                  throw new Error("Tile already in store");
              this._store[t][e][n][r] = i,
              this.emit("tileAdded", t, e, n, r, i)
          }
          ,
          o.prototype.get = function(t, e, n, r) {
              return this._store[t] && this._store[t][e] && this._store[t][e][n] ? this._store[t][e][n][r] : null
          }
          ,
          o.prototype.forEach = function(t, e) {
              var n = this
                , o = 0;
              r.eachSeries(Object.keys(n._store), (function(e, s) {
                  r.eachSeries(Object.keys(n._store[e]), (function(s, a) {
                      r.eachSeries(Object.keys(n._store[e][s]), (function(a, u) {
                          r.eachSeries(Object.keys(n._store[e][s][a]), (function(r, u) {
                              var l = n._store[e][s][a][r];
                              t(e, s, a, r, l, (function(t) {
                                  if (t)
                                      return u(t);
                                  o++,
                                  i(u)
                              }
                              ))
                          }
                          ), u)
                      }
                      ), a)
                  }
                  ), s)
              }
              ), (function(t) {
                  if (t)
                      return e(t);
                  e(null, o)
              }
              ))
          }
          ,
          e.exports = o
      }
      , {
          "./util/delay": 248,
          "./util/eventEmitter": 251,
          async: 1
      }],
      219: [function(t, e, n) {
          "use strict";
          if (t("./supported")) {
              var r = t("knockout-es5");
              t("./knockout/alignOnBlur"),
              t("./knockout/stopKeyPropagation"),
              t("./knockout/contenteditable");
              var i = t("./matchFilesToPanoramas")
                , o = t("./oneShotEdit")
                , s = t("./setFileDrop")
                , a = t("./getArchive")
                , u = t("./generateData")
                , l = t("./getTemplate")
                , c = t("./Panoramas")
                , h = t("./panoramaView/Previewer")
                , p = t("sortablejs")
                , f = t("./workers")
                , d = t("../tmp/version")
                , m = t("./setFavicon")
                , v = t("./ignoredFilesMessageHtml")
                , y = t("./imageSizeLimits")
                , g = t("./LinkHotspot")
                , _ = t("./InfoHotspot")
                , b = {
                  mouseViewMode: r.observable("drag"),
                  autorotateEnabled: r.observable(0),
                  fullscreenButton: r.observable(!0),
                  viewControlButtons: r.observable(!0)
              }
                , w = new c
                , x = r.observable();
              s(window, W);
              var E = document.getElementById("selectFilesInput");
              [".more-files", "#startup .select"].forEach((function(t) {
                  document.querySelector(t).addEventListener("click", (function() {
                      return E.click(),
                      !1
                  }
                  ))
              }
              )),
              document.getElementById("selectFilesInput").addEventListener("change", (function() {
                  this.files && this.files.length > 0 && W(this.files),
                  this.value = null
              }
              ));
              var M = new h(document.getElementById("pano"),w);
              w.addEventListener("selectedPanoramaChanged", (function(t) {
                  M.preview(t),
                  U()
              }
              )),
              l("template", (function(t, e) {
                  if (t)
                      throw t;
                  x(e)
              }
              ));
              var S = r.computed((function() {
                  return w.list.every((function(t) {
                      return t.processingState.isEnded()
                  }
                  )) && w.list.length > 0
              }
              ))
                , T = r.computed((function() {
                  return S() && w.list.filter((function(t) {
                      return t.processingState.isSuccessful()
                  }
                  )).length > 0
              }
              ))
                , C = {
                  settings: !0,
                  panoramaList: !0
              };
              r.track(C);
              var P = null
                , O = document.querySelector(".initial-view-hint");
              M._viewer.controls().addEventListener("active", U),
              new p(document.querySelector(".panorama-list"),{
                  ghostClass: "ghost",
                  handle: ".handle",
                  onSort: function(t) {
                      var e = w.list
                        , n = e.splice(t.oldIndex, 1)[0];
                      e.splice(t.newIndex, 0, n);
                      var r = e;
                      w.list = [],
                      t.item.parentElement && t.item.parentElement.removeChild(t.item),
                      w.list = r
                  }
              });
              var L = r.observable(null)
                , A = r.observable(!0)
                , k = r.computed((function() {
                  return w.list.length <= 0 && !A()
              }
              ))
                , R = r.computed((function() {
                  return !!L()
              }
              ))
                , D = r.computed((function() {
                  return k() || R() || A()
              }
              ))
                , I = t("./Messages")
                , N = t("./processingFailedMessageHtml")
                , F = t("./processingCompleteMessageHtml")
                , j = new I
                , z = r.observable(!1)
                , H = r.computed((function() {
                  return z() ? j.all() : j.notifying()
              }
              ));
              z.subscribe((function(t) {
                  t ? j.setAllRead() : j.setAllNotNotifying()
              }
              )),
              w.addEventListener("processingFailed", (function(t) {
                  j.push(N(t), "error")
              }
              )),
              T.subscribe((function(t) {
                  t && setTimeout((function() {
                      j.push(F(), "success")
                  }
                  ), 0)
              }
              ));
              var B = r.observable(!1)
                , V = {
                  panoramas: w,
                  getPanoramasArchive: G,
                  readyToDownload: X,
                  projectName: "Project Title",
                  editProjectName: function() {
                      var t = document.querySelector(".project-name .input");
                      o(t)
                  },
                  settings: b,
                  accordionToggle: function(t) {
                      C[t] = !C[t]
                  },
                  accordionsOpen: C,
                  setInitialView: function() {
                      if (!Y()) {
                          var t = M.currentViewParams();
                          t && (w.selected.settings.initialViewParameters = t,
                          O.style.opacity = 1,
                          null != P && (clearTimeout(P),
                          P = null),
                          P = setTimeout(U, 3e3),
                          M.interruptAutorotate())
                      }
                  },
                  addLinkHotspot: function() {
                      if (!Y()) {
                          var t = M.currentViewParams()
                            , e = new g(t.yaw,t.pitch,null);
                          w.selected.addLinkHotspot(e),
                          U()
                      }
                  },
                  addInfoHotspot: function() {
                      if (!Y()) {
                          var t = M.currentViewParams()
                            , e = new _(t.yaw,t.pitch,"Title","Text");
                          w.selected.addInfoHotspot(e),
                          U()
                      }
                  },
                  zipProcessingState: L,
                  closeZipState: function() {
                      L(null)
                  },
                  cancelZip: function() {
                      console.log("TODO: cancel zip archive")
                  },
                  startupVisible: k,
                  downloadVisible: R,
                  shadeVisible: D,
                  previewVisible: function() {
                      return w.selected
                  },
                  introVisible: A,
                  hideIntro: function() {
                      A(!1)
                  },
                  messages: j,
                  messagesExpanded: z,
                  messagesVisible: H,
                  toggleMessagesExpanded: function() {
                      z(!z())
                  },
                  showMessages: function() {
                      return z(!0),
                      !0
                  },
                  closeMessages: function() {
                      return z(!1),
                      !1
                  },
                  previewedFailed: Y,
                  helpVisible: B,
                  toggleHelp: function() {
                      B(!B())
                  },
                  closeHelp: function() {
                      B(!1)
                  },
                  previewFailedMessage: function() {
                      return w.selected && w.selected.processingState.data.message
                  },
                  equirectangularSizeLimit: function() {
                      return y.equirectangularWidth + "x" + y.equirectangularWidth / 2 + "px"
                  },
                  cubeSizeLimit: function() {
                      return y.cubeFaceWidth + "x" + y.cubeFaceWidth + "px"
                  },
                  hotspots: M.hotspots
              };
              window.addEventListener("beforeunload", (function(t) {
                  if (w.list.length > 0) {
                      return (t || window.event).returnValue = "Your work is lost when you leave the application",
                      "Your work is lost when you leave the application"
                  }
              }
              ));
              var q = r.computed((function() {
                  if (w.list.length <= 0)
                      return null;
                  var t = w.list.map((function(t) {
                      return t.processingState.isFailed() ? 1 : t.processingState.userProgress()
                  }
                  ));
                  return t.reduce((function(e, n) {
                      return e + n / t.length
                  }
                  ), 0)
              }
              ));
              q.subscribe(K),
              q.subscribe($),
              K(),
              $(),
              window.setFavicon = m,
              b.mouseViewMode.subscribe((function(t) {
                  "drag" === t ? M.setDragMode() : "qtvr" === t && M.setQtvrMode()
              }
              )),
              b.autorotateEnabled.subscribe((function(t) {
                  M.setAutorotate(t)
              }
              )),
              b.mouseViewMode.notifySubscribers(b.mouseViewMode()),
              b.autorotateEnabled.notifySubscribers(b.autorotateEnabled()),
              r.track(V),
              r.applyBindings(V),
              e.exports = {
                  version: d,
                  viewModel: V,
                  getPanoramasArchiveFromNotification: function(t) {
                      G()
                  }
              }
          }
          function W(t) {
              i(t, (function(t, e) {
                  function n(t) {
                      w.push(t.type, t.name, t.fileData, t.width, t.height)
                  }
                  e.equirectangulars.forEach(n),
                  e.cubes.forEach(n);
                  var r = v(e);
                  r && j.push(r, "warning")
              }
              ))
          }
          function Y() {
              return w.selected && w.selected.processingState.isFailed()
          }
          function X() {
              return T() && !!x
          }
          function U() {
              O.style.opacity = 0
          }
          function G() {
              if (X()) {
                  var t = w.list.filter((function(t) {
                      return t.processingState.isSuccessful()
                  }
                  ))
                    , e = u(t, V.projectName, r.toJS(b))
                    , n = a(e, t, x(), {
                      workerSource: f.zip
                  });
                  L(n)
              }
          }
          function K() {
              var t = "Marzipano Tool";
              null != q() && q() < 1 && (t = "(" + (100 * q()).toFixed(0) + "%) " + t);
              document.title = t
          }
          function $() {
              m(q())
          }
      }
      , {
          "../tmp/version": 259,
          "./InfoHotspot": 214,
          "./LinkHotspot": 215,
          "./Messages": 216,
          "./Panoramas": 217,
          "./generateData": 220,
          "./getArchive": 221,
          "./getTemplate": 222,
          "./ignoredFilesMessageHtml": 223,
          "./imageSizeLimits": 224,
          "./knockout/alignOnBlur": 225,
          "./knockout/contenteditable": 226,
          "./knockout/stopKeyPropagation": 227,
          "./matchFilesToPanoramas": 228,
          "./oneShotEdit": 229,
          "./panoramaView/Previewer": 231,
          "./processingCompleteMessageHtml": 238,
          "./processingFailedMessageHtml": 239,
          "./setFavicon": 244,
          "./setFileDrop": 245,
          "./supported": 246,
          "./workers": 257,
          "knockout-es5": 18,
          sortablejs: 213
      }],
      220: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e, n) {
              return {
                  scenes: t.map((function(t) {
                      var e = t.settings.linkHotspots.filter((function(t) {
                          return t.hasValidTarget()
                      }
                      )).map((function(t) {
                          return t.toObject()
                      }
                      ))
                        , n = t.settings.infoHotspots.map((function(t) {
                          return t.toObject()
                      }
                      ));
                      return {
                          id: t.uniqueId(),
                          name: t.name,
                          levels: t.levels,
                          faceSize: t.faceSize,
                          initialViewParameters: t.settings.initialViewParameters,
                          linkHotspots: e,
                          infoHotspots: n
                      }
                  }
                  )),
                  name: e,
                  settings: n
              }
          }
      }
      , {}],
      221: [function(t, e, n) {
          "use strict";
          var r = t("async")
            , i = t("./zip/Zip")
            , o = t("./util/delay")
            , s = t("lodash/string/template")
            , a = t("./util/fileExt")
            , u = t("./util/fileNoExt")
            , l = t("filesaver.js")
            , c = t("./processingState/ProcessingState")
            , h = (t("./util/endianess"),
          t("./util/slug"))
            , p = "application/zip";
          e.exports = function(t, e, n, f) {
              f = f || {};
              var d = new c("zip",{
                  panoramaNum: e.length
              }).started()
                , m = new i({
                  workerSource: f.workerSource
              })
                , v = d.addChild("add_data").started();
              !function(t, e) {
                  var n = JSON.stringify(t, null, 2)
                    , r = "var APP_DATA = " + (n = (n = n.replace(/\u2028/g, "\\u2028")).replace(/\u2029/g, "\\u2029")) + ";\n";
                  e.add(["app-files"], "data.js", r)
              }(t, m),
              v.successful({
                  tourData: t
              });
              var y = d.addChild("add_template_files").started();
              return function(t, e, n, i) {
                  if (!t)
                      throw new Error("Template files not loaded");
                  r.eachSeries(t, (function(t, r) {
                      var i = t.name
                        , l = t.data;
                      if ("tpl" === a(t.name)) {
                          try {
                              l = s(t.data)(e)
                          } catch (t) {
                              return void r(t)
                          }
                          i = u(t.name)
                      }
                      n.add([], i, l),
                      o(r)
                  }
                  ), i)
              }(n, t, m, (function(n) {
                  if (n)
                      throw n;
                  y.successful();
                  var i = d.addChild("add_tiles").started();
                  !function(t, e, n) {
                      var i = 0;
                      r.eachSeries(t, (function(t, n) {
                          var r = ["app-files", "tiles", t.uniqueId()];
                          t.cubeMapPreview && e.add(r, "preview.jpg", t.cubeMapPreview, {
                              binary: !0
                          }),
                          t.tileStore.forEach((function(t, n, o, s, a, u) {
                              var l = [t, n, o].map((function(t) {
                                  return t.toString(10)
                              }
                              ))
                                , c = r.concat(l);
                              e.add(c, s.toString(10) + ".jpg", a, {
                                  binary: !0
                              }),
                              i++,
                              u()
                          }
                          ), n)
                      }
                      ), (function(t) {
                          if (t)
                              return n(t);
                          n(null, i)
                      }
                      ))
                  }(e, m, (function(e, n) {
                      if (e)
                          throw e;
                      i.successful({
                          tileNum: n
                      });
                      var r = d.addChild("generate_zip").started();
                      m.generate({
                          type: "uint8array"
                      }, (function(e, n) {
                          if (e)
                              throw e;
                          r.successful(),
                          m.destroy();
                          var i = d.addChild("create_blob").started()
                            , o = new Blob([n],{
                              type: p
                          });
                          i.successful();
                          var s = d.addChild("save_blob").started()
                            , a = (h(t.name) || "marzipano-tour") + ".zip";
                          l(o, a),
                          s.successful(),
                          d.successful({
                              byteLength: n.byteLength
                          })
                      }
                      ))
                  }
                  ))
              }
              )),
              d
          }
      }
      , {
          "./processingState/ProcessingState": 240,
          "./util/delay": 248,
          "./util/endianess": 249,
          "./util/fileExt": 252,
          "./util/fileNoExt": 253,
          "./util/slug": 256,
          "./zip/Zip": 258,
          async: 1,
          "filesaver.js": 3,
          "lodash/string/template": 99
      }],
      222: [function(t, e, n) {
          "use strict";
          var r = t("async")
            , i = t("lodash/array/zip")
            , o = t("./util/loadFileXhr")
            , s = t("./util/fileExt")
            , a = t("../tmp/version");
          e.exports = function(t, e) {
              o(t + "/files.json?" + a, "json", (function(n, u) {
                  if (n)
                      return e(n);
                  var l = u.map((function(e) {
                      return t + "/" + e
                  }
                  ));
                  r.mapLimit(l, 5, (function(t, e) {
                      var n = "tpl" === s(t) ? "text" : "arraybuffer";
                      o(t + "?" + a, n, e)
                  }
                  ), (function(t, n) {
                      if (t)
                          return e(t);
                      var r = i(u, n).map((function(t) {
                          return {
                              name: t[0],
                              data: t[1]
                          }
                      }
                      ));
                      e(null, r)
                  }
                  ))
              }
              ))
          }
      }
      , {
          "../tmp/version": 259,
          "./util/fileExt": 252,
          "./util/loadFileXhr": 254,
          async: 1,
          "lodash/array/zip": 23
      }],
      223: [function(t, e, n) {
          "use strict";
          var r = t("lodash/collection/map")
            , i = t("lodash/array/flatten")
            , o = t("lodash/collection/pluck")
            , s = t("lodash/object/values")
            , a = t("./imageSizeLimits");
          e.exports = function(t) {
              var e = t.badCubes
                , n = t.badFiles
                , u = t.badSizedImages
                , l = t.imagesWithoutSize
                , c = t.equirectangularsOverLimit
                , h = t.cubesOverLimit
                , p = r(e, (function(t) {
                  return {
                      name: t.name,
                      width: t.width,
                      height: t.height,
                      files: s(t.fileData)
                  }
              }
              ))
                , f = i(o(p, "files"))
                , d = f.length + n.length + u.length + l.length + c.length + 6 * h.length
                , m = "";
              if (m += "<p class='title'>" + d + " files ignored</p>",
              d <= 0)
                  return !1;
              var v = [e, n, u, l, c, h].filter((function(t) {
                  return t.length > 0
              }
              )).length > 1;
              return n.length > 0 && (m += "<details>",
              m += v ? "<summary>" + n.length + " not recognized as images</summary>" : "<summary>Files not recognized as images</summary>",
              m += "  <ul>",
              n.forEach((function(t) {
                  m += "  <li>" + t.name + "</li>"
              }
              )),
              m += "  </ul>",
              m += "</details>"),
              l.length > 0 && (m += "<details>",
              m += v ? "<summary>" + l.length + " images corrupted</summary>" : "<summary>Corrupted images</summary>",
              m += "  <ul>",
              l.forEach((function(t) {
                  m += "  <li>" + t.name + "</li>"
              }
              )),
              m += "  </ul>",
              m += "</details>"),
              u.length > 0 && (m += "<details>",
              m += v ? "<summary>" + u.length + " not 1:1 cube faces or 2:1 spheres</summary>" : "<summary>Images not 1:1 cube faces or 2:1 spheres</summary>",
              m += "  <ul>",
              u.forEach((function(t) {
                  m += "  <li>" + t.file.name + " (" + t.width + "x" + t.height + "px)</li>"
              }
              )),
              m += "  </ul>",
              m += "</details>"),
              f.length > 0 && (m += "<details>",
              m += v ? "<summary>" + f.length + " not matched to cubes</summary>" : "<summary>Files not matched to cubes</summary>",
              m += "  <ul>",
              p.forEach((function(t) {
                  m += "  <li>",
                  m += "    <b>" + t.name + " (" + t.width + "x" + t.height + ")</b>",
                  m += "    <ul>",
                  t.files.forEach((function(t) {
                      m += "    <li>" + t.file.name + "</li>"
                  }
                  )),
                  m += "    </ul>",
                  m += "  </li>"
              }
              )),
              m += "  </ul>",
              m += "</details>"),
              c.length > 0 && (m += "<details>",
              m += v ? "<summary>" + c.length + " spheres larger than the size limit</summary>" : "<summary>Spheres larger than the size limit</summary>",
              m += "<p>Maximum size is <b>" + a.equirectangularWidth + "x" + a.equirectangularWidth / 2 + "px</b></p>",
              m += "  <ul>",
              c.forEach((function(t) {
                  m += "  <li>" + t.name + " (" + t.width + "x" + t.height + "px)</li>"
              }
              )),
              m += "  </ul>",
              m += "</details>"),
              h.length > 0 && (m += "<details>",
              m += v ? "<summary>" + h.length + " cubes larger than the size limit</summary>" : "<summary>Cubes larger than the size limit</summary>",
              m += "<p>Maximum size is <b>" + a.cubeFaceWidth + "x" + a.cubeFaceWidth + "px</b></p>",
              m += "  <ul>",
              h.forEach((function(t) {
                  m += "  <li>" + t.name + " (" + t.width + "x" + t.height + "px)</li>"
              }
              )),
              m += "  </ul>",
              m += "</details>"),
              m
          }
      }
      , {
          "./imageSizeLimits": 224,
          "lodash/array/flatten": 21,
          "lodash/collection/map": 29,
          "lodash/collection/pluck": 30,
          "lodash/object/values": 96
      }],
      224: [function(t, e, n) {
          "use strict";
          e.exports = {
              equirectangularWidth: 23e3,
              cubeFaceWidth: 16e3
          }
      }
      , {}],
      225: [function(t, e, n) {
          "use strict";
          var r = t("knockout-es5");
          r.bindingHandlers.alignOnBlur = {
              update: function(t) {
                  r.applyBindingsToNode(t, {
                      event: {
                          blur: function() {
                              t.scrollLeft = 0,
                              t.scrollTop = 0
                          }
                      }
                  })
              }
          }
      }
      , {
          "knockout-es5": 18
      }],
      226: [function(t, e, n) {
          "use strict";
          var r = t("knockout-es5");
          r.bindingHandlers.contenteditable = {
              init: function(t, e, n) {
                  var i = e();
                  t.innerHTML = r.utils.unwrapObservable(i),
                  i.subscribe((function(e) {
                      t.innerHTML !== e && (t.innerHTML = e)
                  }
                  )),
                  t.addEventListener("keyup", (function() {
                      e()(t.innerHTML)
                  }
                  ))
              },
              update: function(t, e) {
                  var n = r.utils.unwrapObservable(e());
                  null == n && (n = "")
              }
          }
      }
      , {
          "knockout-es5": 18
      }],
      227: [function(t, e, n) {
          "use strict";
          var r = t("knockout-es5");
          r.bindingHandlers.stopKeyPropagation = {
              update: function(t) {
                  r.applyBindingsToNode(t, {
                      event: {
                          keydown: function(t, e) {
                              return e.stopPropagation(),
                              !0
                          }
                      }
                  })
              }
          }
      }
      , {
          "knockout-es5": 18
      }],
      228: [function(t, e, n) {
          "use strict";
          var r = t("async")
            , i = t("../../vendor/imgsize")
            , o = t("lodash/collection/groupBy")
            , s = t("lodash/collection/contains")
            , a = t("lodash/array/difference")
            , u = t("lodash/array/zipObject")
            , l = t("lodash/array/zip")
            , c = t("./util/fileExt")
            , h = t("./util/fileNoExt")
            , p = t("./imageSizeLimits")
            , f = ["tif", "tiff", "jpg", "jpeg"]
            , d = /^(.*)_([udfblr])\.[^\.]+$/i;
          function m(t) {
              return t.match(d)[1]
          }
          function v(t, e, n) {
              this.file = t,
              this.width = e,
              this.height = n
          }
          function y(t, e) {
              i.async(t, (function(t, n) {
                  e(null, t ? null : n)
              }
              ))
          }
          e.exports = function(t, e) {
              var n = o(t, (function(t) {
                  var e = c(t.name);
                  return s(f, e)
              }
              ))
                , i = n[!0] || [];
              r.mapLimit(i, 3, y, (function(t, r) {
                  if (t)
                      return e(t);
                  var s = l(i, r)
                    , c = o(s, (function(t) {
                      return !!t[1]
                  }
                  ))
                    , f = c[!1] || []
                    , y = c[!0] || []
                    , g = f.map((function(t) {
                      return t[0]
                  }
                  ))
                    , _ = y.map((function(t) {
                      return new v(t[0],t[1].width,t[1].height)
                  }
                  ))
                    , b = o(_, (function(t) {
                      return d.test(t.file.name) && t.width === t.height
                  }
                  ))
                    , w = b[!0] || []
                    , x = b[!1] || []
                    , E = o(x, (function(t) {
                      return t.width === 2 * t.height
                  }
                  ))
                    , M = E[!1] || []
                    , S = (E[!0] || []).map((function(t) {
                      return {
                          type: "equirectangular",
                          name: h(t.file.name),
                          fileData: t,
                          width: t.width,
                          height: t.height
                      }
                  }
                  ))
                    , T = o(w, (function(t) {
                      return m(t.file.name) + "~" + t.width + "~" + t.height
                  }
                  ))
                    , C = Object.keys(T).map((function(t) {
                      var e = T[t]
                        , n = e.map((function(t) {
                          return t.file.name.match(d)[2].toLowerCase()
                      }
                      ))
                        , r = u(n, e);
                      return {
                          type: "cube",
                          name: m(e[0].file.name),
                          fileData: r,
                          width: e[0].width,
                          height: e[0].height
                      }
                  }
                  ))
                    , P = o(C, (function(t) {
                      if (6 !== Object.keys(t.fileData).length)
                          return !1;
                      var e = Object.keys(t.fileData);
                      return 0 === a(e, ["f", "b", "l", "r", "u", "d"]).length
                  }
                  ))
                    , O = o(S, (function(t) {
                      return t.width <= p.equirectangularWidth
                  }
                  ))
                    , L = O[!1] || []
                    , A = O[!0] || []
                    , k = o(P[!0] || [], (function(t) {
                      return t.width <= p.cubeFaceWidth
                  }
                  ))
                    , R = k[!1] || []
                    , D = k[!0] || [];
                  e(null, {
                      cubes: D,
                      equirectangulars: A,
                      badCubes: P[!1] || [],
                      badFiles: n[!1] || [],
                      imagesWithoutSize: g,
                      badSizedImages: M,
                      equirectangularsOverLimit: L,
                      cubesOverLimit: R
                  })
              }
              ))
          }
      }
      , {
          "../../vendor/imgsize": 260,
          "./imageSizeLimits": 224,
          "./util/fileExt": 252,
          "./util/fileNoExt": 253,
          async: 1,
          "lodash/array/difference": 19,
          "lodash/array/zip": 23,
          "lodash/array/zipObject": 24,
          "lodash/collection/contains": 25,
          "lodash/collection/groupBy": 27
      }],
      229: [function(t, e, n) {
          "use strict";
          function r() {
              this.setAttribute("disabled", "disabled"),
              this.removeEventListener("blur", r)
          }
          function i() {
              this.removeAttribute("disabled"),
              this.select()
          }
          e.exports = function(t) {
              i.apply(t),
              t.addEventListener("blur", r)
          }
      }
      , {}],
      230: [function(t, e, n) {
          "use strict";
          function r() {
              this.removeAttribute("contenteditable"),
              window.getSelection().removeAllRanges(),
              this.removeEventListener("blur", r)
          }
          function i() {
              this.setAttribute("contenteditable", !0);
              var t = document.createRange();
              t.selectNodeContents(this);
              var e = window.getSelection();
              e.removeAllRanges(),
              e.addRange(t),
              this.focus()
          }
          e.exports = function(t, e) {
              i.apply(t),
              t.addEventListener("blur", (function() {
                  r.apply(this),
                  e()
              }
              ))
          }
      }
      , {}],
      231: [function(t, e, n) {
          "use strict";
          var r = t("marzipano")
            , i = r.Viewer
            , o = r.CubeGeometry
            , s = r.RectilinearView
            , a = t("./TileStoreSource")
            , u = t("./PreviewerHotspots")
            , l = t("../util/eventEmitter")
            , c = [{
              tileSize: 512,
              size: 512
          }, {
              tileSize: 512,
              size: 1024
          }, {
              tileSize: 512,
              size: 2048
          }, {
              tileSize: 512,
              size: 4096
          }, {
              tileSize: 512,
              size: 8192
          }];
          function h(t, e) {
              this._viewer = new i(t),
              this._panorama = null,
              this._panoramaChangedHandler = this.updatePreview.bind(this),
              this.hotspots = new u(this)
          }
          l(h),
          h.prototype.preview = function(t) {
              if (setTimeout(this._viewer.updateSize.bind(this._viewer), 0),
              t && t === this._panorama) {
                  var e = t.settings.initialViewParameters;
                  e && this._viewer.lookTo(e, {
                      transitionDuration: 0
                  })
              } else {
                  var n = this._panorama
                    , r = t;
                  n && n.removeEventListener("levelsSet", this._panoramaChangedHandler),
                  this._panorama = r,
                  this._panoramaChangedHandler(),
                  r && r.addEventListener("levelsSet", this._panoramaChangedHandler)
              }
          }
          ,
          h.prototype.updatePreview = function() {
              var t = this._panorama;
              if (this._viewer.destroyAllScenes(),
              t) {
                  var e = t.levels || c
                    , n = new o(e)
                    , r = new a(t.tileStore)
                    , i = t.faceSize || e[e.length - 1].size
                    , u = s.limit.traditional(i, 120 * Math.PI / 180)
                    , l = new s(t.settings.initialViewParameters,u)
                    , h = this._viewer.createScene({
                      source: r,
                      geometry: n,
                      view: l
                  });
                  this.hotspots.useScene(h, t),
                  h.switchTo({
                      transitionDuration: 0
                  })
              }
          }
          ,
          h.prototype.currentViewParams = function() {
              var t = this._viewer.view();
              return t ? {
                  yaw: t.yaw(),
                  pitch: t.pitch(),
                  fov: t.fov()
              } : null
          }
          ,
          h.prototype.setDragMode = function() {
              this._viewer.controls().disableMethod("mouseViewQtvr"),
              this._viewer.controls().enableMethod("mouseViewDrag")
          }
          ,
          h.prototype.setQtvrMode = function() {
              this._viewer.controls().disableMethod("mouseViewDrag"),
              this._viewer.controls().enableMethod("mouseViewQtvr")
          }
          ,
          h.prototype.setAutorotate = function(t) {
              if (t) {
                  var e = r.autorotate({
                      yawSpeed: .1,
                      targetPitch: 0,
                      targetFov: Math.PI / 2
                  });
                  this._viewer.setIdleMovement(3e3, e),
                  this._viewer.startMovement(e)
              } else
                  this._viewer.setIdleMovement(1 / 0),
                  this._viewer.stopMovement()
          }
          ,
          h.prototype.interruptAutorotate = function() {
              this._viewer.breakIdleMovement()
          }
          ,
          e.exports = h
      }
      , {
          "../util/eventEmitter": 251,
          "./PreviewerHotspots": 232,
          "./TileStoreSource": 235,
          marzipano: 147
      }],
      232: [function(t, e, n) {
          "use strict";
          var r = t("knockout-es5")
            , i = t("./PreviewerLinkHotspot")
            , o = t("./PreviewerInfoHotspot");
          function s(t) {
              this.list = [],
              this._previewer = t,
              this._panorama = null,
              this._scene = null,
              this._hotspotChangeHandler = this._update.bind(this),
              r.track(this)
          }
          s.prototype.useScene = function(t, e) {
              this._panorama && (this._panorama.removeEventListener("linkHotspotAdded", this._hotspotChangeHandler),
              this._panorama.removeEventListener("linkHotspotRemoved", this._hotspotChangeHandler),
              this._panorama.removeEventListener("infoHotspotAdded", this._hotspotChangeHandler),
              this._panorama.removeEventListener("infoHotspotRemoved", this._hotspotChangeHandler)),
              this._panorama = e,
              this._scene = t,
              e.addEventListener("linkHotspotAdded", this._hotspotChangeHandler),
              e.addEventListener("linkHotspotRemoved", this._hotspotChangeHandler),
              e.addEventListener("infoHotspotAdded", this._hotspotChangeHandler),
              e.addEventListener("infoHotspotRemoved", this._hotspotChangeHandler),
              this._hotspotChangeHandler()
          }
          ,
          s.prototype._update = function() {
              var t = this;
              this._previewer.interruptAutorotate(),
              this.list.forEach((function(t) {
                  t.destroy()
              }
              ));
              var e = this._panorama.settings.linkHotspots.map((function(e) {
                  return new i(e,t._panorama,t._scene,t._previewer)
              }
              ))
                , n = this._panorama.settings.infoHotspots.map((function(e) {
                  return new o(e,t._panorama,t._scene,t._previewer)
              }
              ));
              this.list = [].concat(e, n)
          }
          ,
          e.exports = s
      }
      , {
          "./PreviewerInfoHotspot": 233,
          "./PreviewerLinkHotspot": 234,
          "knockout-es5": 18
      }],
      233: [function(t, e, n) {
          "use strict";
          var r = t("knockout-es5")
            , i = t("../oneShotEditContentEditable");
          function o(t, e, n, i) {
              this._hotspot = t,
              this._panorama = e,
              this._scene = n,
              this._previewer = i,
              this._view = n.view(),
              this.left = null,
              this.top = null,
              this.visible = !1,
              this._updateTransform(),
              this._positionChangeHandler = this._updateTransform.bind(this),
              this._view.addEventListener("change", this._positionChangeHandler),
              this._hotspot.addEventListener("coordinatesChanged", this._positionChangeHandler),
              this.dragging = !1,
              this._mouseUpHandler = this._stopDrag.bind(this),
              window.addEventListener("mouseup", this._mouseUpHandler),
              this._mouseMoveHandler = this._drag.bind(this),
              window.addEventListener("mousemove", this._mouseMoveHandler),
              this.editingTitle = !1,
              this.editingText = !1,
              r.track(this)
          }
          o.prototype.destroy = function() {
              this._view.removeEventListener("change", this._positionChangeHandler),
              this._hotspot.removeEventListener("coordinatesChanged", this._positionChangeHandler),
              window.removeEventListener("mouseup", this._mouseUpHandler),
              window.removeEventListener("mousemove", this._mouseMoveHandler),
              this.left = null,
              this.top = null,
              this.visible = null,
              this.targetSelectorVisible = null
          }
          ,
          o.prototype._updateTransform = function() {
              var t = this._view.coordinatesToScreen({
                  yaw: this._hotspot.yaw,
                  pitch: this._hotspot.pitch
              });
              t ? (this.left = t.x + "px",
              this.top = t.y + "px",
              this.visible = !0) : this.visible = !1
          }
          ,
          o.prototype.editTitle = function() {
              var t = this;
              this.editingTitle = !0;
              var e = document.querySelector(".info-hotspot.editingTitle .title");
              i(e, (function() {
                  t.editingTitle = !1
              }
              ))
          }
          ,
          o.prototype.finishEditTitle = function() {
              this.editingTitle && document.querySelector(".info-hotspot.editingTitle .title").blur()
          }
          ,
          o.prototype.editText = function() {
              var t = this;
              this.editingText = !0;
              var e = document.querySelector(".info-hotspot.editingText .text");
              i(e, (function() {
                  t.editingText = !1
              }
              ))
          }
          ,
          o.prototype.finishEditText = function() {
              if (this.editingText)
                  return element = document.querySelector(".info-hotspot.editingText .text"),
                  void element.blur()
          }
          ,
          o.prototype.isUnchanged = function() {
              return this._hotspot.isUnchanged()
          }
          ,
          o.prototype.startDrag = function(t, e) {
              this._previewer.interruptAutorotate(),
              this.dragging = e
          }
          ,
          o.prototype.click = function() {
              this._hotspot.target && this._hotspot.target.select()
          }
          ,
          o.prototype.remove = function() {
              this._previewer.interruptAutorotate(),
              window.confirm("Delete this hotspot?") && this._panorama.removeInfoHotspot(this._hotspot)
          }
          ,
          o.prototype._stopDrag = function() {
              this.dragging = !1
          }
          ,
          o.prototype.interruptAutorotate = function() {
              return this._previewer.interruptAutorotate(),
              !0
          }
          ,
          o.prototype._drag = function(t) {
              if (this.dragging) {
                  this._previewer.interruptAutorotate();
                  var e = this._view.coordinatesToScreen({
                      yaw: this._hotspot.yaw,
                      pitch: this._hotspot.pitch
                  })
                    , n = t.clientX - this.dragging.clientX
                    , r = t.clientY - this.dragging.clientY;
                  e.x += n,
                  e.y += r;
                  var i = this._view.screenToCoordinates(e);
                  this._hotspot.setCoordinates(i),
                  this.dragging = t
              }
          }
          ,
          o.prototype.hotspotInstance = function() {
              return this._hotspot
          }
          ,
          o.prototype.hotspotType = function() {
              return "info"
          }
          ,
          e.exports = o
      }
      , {
          "../oneShotEditContentEditable": 230,
          "knockout-es5": 18
      }],
      234: [function(t, e, n) {
          "use strict";
          var r = t("knockout-es5");
          function i(t, e, n, i) {
              this._hotspot = t,
              this._panorama = e,
              this._scene = n,
              this._previewer = i,
              this._view = n.view(),
              this.left = null,
              this.top = null,
              this.visible = !1,
              this.targetSelectorVisible = !this._hotspot.hasValidTarget(),
              this._updateTransform(),
              this._positionChangeHandler = this._updateTransform.bind(this),
              this._view.addEventListener("change", this._positionChangeHandler),
              this._hotspot.addEventListener("coordinatesChanged", this._positionChangeHandler),
              this.dragging = !1,
              this._mouseUpHandler = this._stopDrag.bind(this),
              window.addEventListener("mouseup", this._mouseUpHandler),
              this._mouseMoveHandler = this._drag.bind(this),
              window.addEventListener("mousemove", this._mouseMoveHandler),
              r.track(this)
          }
          i.prototype.destroy = function() {
              this._view.removeEventListener("change", this._positionChangeHandler),
              this._hotspot.removeEventListener("coordinatesChanged", this._positionChangeHandler),
              window.removeEventListener("mouseup", this._mouseUpHandler),
              window.removeEventListener("mousemove", this._mouseMoveHandler),
              this.left = null,
              this.top = null,
              this.visible = null,
              this.targetSelectorVisible = null
          }
          ,
          i.prototype._updateTransform = function() {
              var t = this._view.coordinatesToScreen({
                  yaw: this._hotspot.yaw,
                  pitch: this._hotspot.pitch
              });
              t ? (this.left = t.x + "px",
              this.top = t.y + "px",
              this.visible = !0) : this.visible = !1
          }
          ,
          i.prototype.imageTransform = function() {
              return "rotate(" + this._hotspot.rotation + "rad)"
          }
          ,
          i.prototype.targetName = function() {
              return this._hotspot.hasValidTarget() && this._hotspot.target.name
          }
          ,
          i.prototype.startDrag = function(t, e) {
              this._previewer.interruptAutorotate(),
              this.dragging = e
          }
          ,
          i.prototype.goToTarget = function() {
              this._hotspot.target && this._hotspot.target.select()
          }
          ,
          i.prototype.remove = function() {
              this._previewer.interruptAutorotate(),
              window.confirm("Delete this hotspot?") && this._panorama.removeLinkHotspot(this._hotspot)
          }
          ,
          i.prototype.editTarget = function() {
              this._previewer.interruptAutorotate(),
              this.targetSelectorVisible = !this.targetSelectorVisible
          }
          ,
          i.prototype.closeTargetSelector = function() {
              this.targetSelectorVisible = !1
          }
          ,
          i.prototype.selectTarget = function(t) {
              this._hotspot.setTarget(t)
          }
          ,
          i.prototype.targetIs = function(t) {
              return this._hotspot.target === t
          }
          ,
          i.prototype.rotateRight = function() {
              this._previewer.interruptAutorotate(),
              this._hotspot.offsetRotation(Math.PI / 4)
          }
          ,
          i.prototype.rotateLeft = function() {
              this._previewer.interruptAutorotate(),
              this._hotspot.offsetRotation(-Math.PI / 4)
          }
          ,
          i.prototype._stopDrag = function() {
              this.dragging = !1
          }
          ,
          i.prototype.interruptAutorotate = function() {
              this._previewer.interruptAutorotate()
          }
          ,
          i.prototype._drag = function(t) {
              if (this.dragging) {
                  this._previewer.interruptAutorotate();
                  var e = this._view.coordinatesToScreen({
                      yaw: this._hotspot.yaw,
                      pitch: this._hotspot.pitch
                  })
                    , n = t.clientX - this.dragging.clientX
                    , r = t.clientY - this.dragging.clientY;
                  e.x += n,
                  e.y += r;
                  var i = this._view.screenToCoordinates(e);
                  this._hotspot.setCoordinates(i),
                  this.dragging = t
              }
          }
          ,
          i.prototype.hotspotType = function() {
              return "link"
          }
          ,
          e.exports = i
      }
      , {
          "knockout-es5": 18
      }],
      235: [function(t, e, n) {
          "use strict";
          var r = t("marzipano")
            , i = r.DynamicAsset
            , o = r.util.cancelize;
          function s(t) {
              this._tileStore = t
          }
          s.prototype.loadAsset = function(t, e, n) {
              var r = this;
              return o((function(t) {
                  var n = !1
                    , o = document.createElement("canvas");
                  o.width = e.width(),
                  o.height = e.height(),
                  function(t, e) {
                      var n = t.getContext("2d")
                        , r = function(t) {
                          var e = t._level;
                          if (1 == e.numHorizontalTiles() && 1 == e.numVerticalTiles())
                              return 112 + 16 * a.indexOf(t.face);
                          var n = 144 + t.x % 2 * 16 + t.y % 2 * 32;
                          return "u" !== t.face && "d" !== t.face || (n += 5),
                          n
                      }(e).toString(16)
                        , i = "#" + r + r + r;
                      n.fillStyle = i,
                      n.fillRect(0, 0, t.width, t.height)
                  }(o, e);
                  var s = new i(o);
                  r._tileStore.addEventListener("tileAdded", l),
                  l();
                  var u = s.destroy.bind(s);
                  function l() {
                      if (!n) {
                          var t = r._tileStore.get(e.z, e.face, e.y, e.x);
                          if (t) {
                              n = !0;
                              var i = new Blob([t],{
                                  type: "image/jpeg"
                              })
                                , a = URL.createObjectURL(i)
                                , u = document.createElement("img");
                              u.src = a,
                              u.onload = function() {
                                  URL.revokeObjectURL(a),
                                  o.getContext("2d").drawImage(u, 0, 0),
                                  s.markDirty()
                              }
                              ,
                              u.onerror = function() {
                                  throw new Error("Bad JPEG data for tile")
                              }
                          }
                      }
                  }
                  s.destroy = function() {
                      r._tileStore.removeEventListener("tileAdded", l),
                      u()
                  }
                  ,
                  setTimeout((function() {
                      t(null, e, s)
                  }
                  ), 0)
              }
              ))(n)
          }
          ,
          s.prototype.unload = function() {}
          ;
          var a = "bdflru";
          e.exports = s
      }
      , {
          marzipano: 147
      }],
      236: [function(t, e, n) {
          "use strict";
          var r = t("../processingState/ProcessingStateFromWebworker");
          e.exports = function(t, e, n, i, o) {
              (n = n || {}).equirectangularWorkerSource = n.equirectangularWorkerSource || "equirect.worker.js",
              n.cubeWorkerSource = n.cubeWorkerSource || "cube.worker.js";
              var s = null;
              if ("equirectangular" === t.type)
                  s = n.equirectangularWorkerSource;
              else {
                  if ("cube" !== t.type)
                      return void o(new Error("Unknown panorama type " + t.type));
                  s = n.cubeWorkerSource
              }
              var a = new Worker(s)
                , u = new r(a,t.processingState);
              function l(t) {
                  var e = t.data;
                  if ("tile" === e.msg && i(e.tileArray, e.level, e.face, e.v, e.h),
                  "done" === e.msg) {
                      h();
                      var n = {
                          count: e.count,
                          cubeMapPreview: e.cubeMapPreviewArray
                      };
                      o(null, n)
                  }
              }
              function c(t) {
                  t.message || t.target !== a || (t = new Error("Failed to initialize WebWorker")),
                  h(),
                  o(t)
              }
              function h() {
                  u.destroy(),
                  a.removeEventListener("message", l),
                  a.removeEventListener("error", c),
                  a.terminate()
              }
              return a.addEventListener("message", l),
              a.addEventListener("error", c),
              a.postMessage({
                  fileData: t.fileData,
                  levels: e,
                  cubeMapPreviewSize: n.cubeMapPreviewSize,
                  cubeMapPreviewFaceOrder: n.cubeMapPreviewFaceOrder,
                  quality: parseInt(document.getElementById('quality').value, 10)
              }),
              function() {
                  h(),
                  o(new Error("cancelled"))
              }
          }
      }
      , {
          "../processingState/ProcessingStateFromWebworker": 241
      }],
      237: [function(t, e, n) {
          "use strict";
          var r = t("./process/processEquirect")
            , i = t("lodash/lang/isEqual")
            , o = (t("../../vendor/imgsize"),
          t("./workers"))
            , s = t("./util/once");
          e.exports = function(t, e) {
              e = s(e);
              var n = null
                , a = function(t) {
                  if ("cube" === t.type) {
                      if (t.width !== t.height)
                          return new Error("Invalid size for cube face image: " + t.width + "x" + t.height)
                  } else if ("equirectangular" === t.type && t.width !== 2 * t.height)
                      return new Error("Invalid size for equirectangular image: " + t.width + "x" + t.height);
                  return null
              }(t);
              if (a)
                  return e(a);
              var u = function(t, e) {
                  if ("cube" === t.type)
                      return e;
                  if ("equirectangular" === t.type)
                      return e / 4
              }(t, t.width)
                , l = function(t) {
                  var e, n = 512, r = [];
                  function i(t) {
                      return n * Math.pow(2, t)
                  }
                  for (e = 0; i(e) <= t; e++)
                      r.push({
                          tileSize: n,
                          size: i(e)
                      });
                  1.25 * i(e - 1) < t && r.push({
                      tileSize: n,
                      size: i(e)
                  });
                  0 === r.length && r.push({
                      tileSize: n,
                      size: n
                  });
                  return r
              }(u);
              t.setLevels(l, {
                  cubeMapPreviewSize: 256,
                  faceSize: u
              });
              var c = {
                  cubeMapPreviewSize: 256,
                  cubeMapPreviewFaceOrder: "bdflru",
                  cubeWorkerSource: o.cube,
                  equirectangularWorkerSource: o.equirect
              };
              return n = r(t, l, c, (function(e, n, r, o, s) {
                  t.addTile(function(t, e) {
                      for (var n = 0; n < t.length; n++)
                          if (i(t[n], e))
                              return n;
                      return null
                  }(t.levels, n), r, o, s, e)
              }
              ), (function(n, r) {
                  if (n)
                      return e(n);
                  t.setCubeMapPreview(r.cubeMapPreview),
                  e()
              }
              )),
              function() {
                  n && n(),
                  e.apply(null, arguments)
              }
          }
      }
      , {
          "../../vendor/imgsize": 260,
          "./process/processEquirect": 236,
          "./util/once": 255,
          "./workers": 257,
          "lodash/lang/isEqual": 85
      }],
      238: [function(t, e, n) {
          "use strict";
          e.exports = function() {
              return "<p class='title'>Processing complete!</p>",
              "<p>You may now <a href='javascript:app.getPanoramasArchiveFromNotification()'>export</a> your application</p>",
              "<p class='title'>Processing complete!</p><p>You may now <a href='javascript:app.getPanoramasArchiveFromNotification()'>export</a> your application</p>"
          }
      }
      , {}],
      239: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return "<p class='title'>Failed to process panorama " + t.name + "</p>"
          }
      }
      , {}],
      240: [function(t, e, n) {
          "use strict";
          var r = t("../util/eventEmitter")
            , i = t("../util/clock")
            , o = t("lodash/object/extend")
            , s = t("lodash/collection/size")
            , a = t("./processingStateUserMessage")
            , u = t("./processingStateUserProgress")
            , l = t("knockout-es5")
            , c = "queued";
          function h(t, e) {
              if (!t)
                  throw new Error("ProcessingStateNode name is required");
              this.name = t,
              this.status = c,
              this.startTime = null,
              this.endTime = null,
              this.data = o({}, e),
              this._children = [],
              l.track(this),
              l.track(this.data)
          }
          h.prototype.started = function(t) {
              if (this.status !== c)
                  throw new Error("Trying to set started on status " + this.status);
              return this.status = "started",
              this.startTime = i(),
              o(this.data, t),
              this.emit("statusChanged"),
              this.emit("changed"),
              this
          }
          ,
          h.prototype.updateData = function(t) {
              return o(this.data, t),
              this.emit("dataChanged"),
              this.emit("changed"),
              this
          }
          ,
          h.prototype.successful = function(t) {
              return this._setEnded("successful", t)
          }
          ,
          h.prototype.failed = function(t) {
              return this._setEnded("failed", t)
          }
          ,
          h.prototype.cancelled = function(t) {
              return this._setEnded("cancelled", t)
          }
          ,
          h.prototype.isQueued = function() {
              return this.status === c
          }
          ,
          h.prototype.isStarted = function() {
              return "started" === this.status
          }
          ,
          h.prototype.isSuccessful = function() {
              return "successful" === this.status
          }
          ,
          h.prototype.isFailed = function() {
              return "failed" === this.status
          }
          ,
          h.prototype.isCancelled = function() {
              return "cancelled" === this.status
          }
          ,
          h.prototype.isEnded = function() {
              return this.isSuccessful() || this.isFailed() || this.isCancelled()
          }
          ,
          h.prototype._setEnded = function(t, e) {
              if ("started" !== this.status)
                  throw new Error("Trying to set " + t + " on status " + this.status);
              return o(this.data, e),
              this.endTime = i(),
              this.status = t,
              this.emit("statusChanged"),
              this.emit("changed"),
              this
          }
          ,
          h.prototype.addChildNode = function(t) {
              this._children.push(t),
              this.emit("childAdded"),
              this.emit("changed");
              var e = this;
              return t.addEventListener("changed", (function() {
                  e.emit("childChanged"),
                  e.emit("changed")
              }
              )),
              t
          }
          ,
          h.prototype.addChild = function(t, e) {
              var n = new h(t,e);
              return this.addChildNode(n),
              n
          }
          ,
          h.prototype.time = function() {
              return this.endTime - this.startTime
          }
          ,
          h.prototype.getChildrenByStatus = function(t) {
              return this._children.filter((function(e) {
                  return e.status === t
              }
              ))
          }
          ,
          h.prototype.getChildByStatus = function(t) {
              var e = this.getChildrenByStatus(t);
              return e.length > 0 ? e[0] : null
          }
          ,
          h.prototype.getStartedBranch = function() {
              var t = []
                , e = this;
              do {
                  e.isStarted() && (t.push(e),
                  e = e.getChildByStatus("started"))
              } while (e);
              return t
          }
          ,
          h.prototype.toString = function() {
              var t = this.name + ": " + this.status;
              return this.endTime && (t += " (" + this.time().toFixed(1) + "ms)"),
              s(this.data) > 0 && (t += " " + JSON.stringify(this.data)),
              t
          }
          ,
          h.prototype.toStringTree = function(t) {
              t = t || 0;
              for (var e = "", n = 0; n < t; n++)
                  e += " ";
              return e += this.toString(),
              e += "\n",
              this._children.forEach((function(n) {
                  e += n.toStringTree(t + 2)
              }
              )),
              e
          }
          ,
          h.prototype.userMessage = function() {
              return a(this)
          }
          ,
          h.prototype.userProgress = function() {
              return this._progress = this._progress || 0,
              this._progress = Math.max(this._progress, u(this)),
              this._progress
          }
          ,
          h.prototype.toObject = function() {
              return {
                  name: this.name,
                  status: this.status,
                  startTime: this.startTime,
                  endTime: this.endTime,
                  data: this.data,
                  children: this._children.map((function(t) {
                      return t.toObject()
                  }
                  ))
              }
          }
          ,
          r(h),
          e.exports = h
      }
      , {
          "../util/clock": 247,
          "../util/eventEmitter": 251,
          "./processingStateUserMessage": 242,
          "./processingStateUserProgress": 243,
          "knockout-es5": 18,
          "lodash/collection/size": 31,
          "lodash/object/extend": 92
      }],
      241: [function(t, e, n) {
          "use strict";
          var r = t("./ProcessingState");
          function i(t, e) {
              this._root = e,
              this._nodes = {},
              this._worker = t;
              var n = this;
              this._handleMessage = function(t) {
                  var e = t.data
                    , i = t.data.msg;
                  if ("processing_state_create" === i)
                      n._nodes[e.id] = new r(e.name,e.createData);
                  else if ("processing_state" === i)
                      n._nodes[e.id][e.method](e.data);
                  else if ("processing_state_add_child_node_to_root" === i) {
                      var o = n._nodes[e.childId];
                      n._root.addChildNode(o)
                  } else if ("processing_state_add_child_node" === i) {
                      var s = n._nodes[e.childId];
                      n._nodes[e.parentId].addChildNode(s)
                  }
              }
              ,
              this._worker.addEventListener("message", this._handleMessage)
          }
          i.prototype.destroy = function() {
              this._worker.removeEventListener("message", this._handleMessage)
          }
          ,
          e.exports = i
      }
      , {
          "./ProcessingState": 240
      }],
      242: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              var e = t.status;
              return "queued" === e ? "Queued for processing" : "successful" === e ? "Successfully processed" : "failed" === e ? "Processing failed" : "cancelled" === e ? "Cancelled" : "started" === e ? function(t) {
                  var e = t.getChildByStatus("started");
                  if (!e)
                      return "Starting processing";
                  if ("read_and_decode_file" === e.name)
                      return "Loading file";
                  if ("process_faces" === e.name) {
                      var n = "Face " + (e.data.processedFaces + 1) + "/6: "
                        , r = e.getChildByStatus("started");
                      if (!r)
                          return "";
                      var i = r.getChildByStatus("started");
                      return i ? ("read_and_decode_file" === i.name && (n += "loading file"),
                      "equirectangular_to_face" === i.name && (n += "converting to cube"),
                      "generate_preview" === i.name && (n += "generating preview"),
                      "process_levels" === i.name && (n += function(t) {
                          var e = t.getChildByStatus("started");
                          if (!e)
                              return "";
                          var n = e.data.level.size
                            , r = e.data.generatedTiles
                            , i = e.data.totalTiles;
                          return "level " + n + " (" + (r + 1) + "/" + i + " tiles)"
                      }(i)),
                      n) : ""
                  }
                  return ""
              }(t) : ""
          }
      }
      , {}],
      243: [function(t, e, n) {
          "use strict";
          function r(t) {
              return t.data.generatedTiles / t.data.totalTiles
          }
          e.exports = function(t) {
              var e = t.status
                , n = t.data.type;
              if ("successful" === e)
                  return 1;
              if ("queued" === e || "cancelled" === e || "failed" === e)
                  return null;
              if ("started" === e) {
                  if ("cube" === n)
                      return function(t) {
                          var e = t.getChildByStatus("started");
                          if (!e)
                              return 0;
                          if ("process_faces" === e.name) {
                              var n = e.data.totalFaces
                                , i = e.data.processedFaces
                                , o = e.getChildByStatus("started");
                              return o ? (i + function(t) {
                                  var e = t.getChildByStatus("started");
                                  if (!e)
                                      return 0;
                                  if ("read_and_decode_file" === e.name)
                                      return 0;
                                  if ("generate_preview" === e.name)
                                      return .25;
                                  if ("process_levels" === e.name) {
                                      var n, i = e.data.levelList, o = e.data.totalLevels, s = e.data.processedLevels, a = [];
                                      for (n = 0; n < o; n++)
                                          a.push(i[n].size * i[n].size);
                                      var u = 0;
                                      for (n = 0; n < o; n++)
                                          u += a[n];
                                      var l = 0;
                                      for (n = 0; n < s; n++)
                                          l += a[n];
                                      var c = e.getChildByStatus("started");
                                      if (!c)
                                          return .25 + .75 * l / u;
                                      var h = a[s];
                                      return .25 + .75 * (l + r(c) * h) / u
                                  }
                                  return 0
                              }(o)) / n : i / n
                          }
                          return 0
                      }(t);
                  if ("equirectangular" === n)
                      return function(t) {
                          var e = t.getChildByStatus("started");
                          if (!e)
                              return 0;
                          if ("read_and_decode_file" === e.name)
                              return 0;
                          if ("process_faces" === e.name) {
                              var n = e.data.totalFaces
                                , i = e.data.processedFaces
                                , o = e.getChildByStatus("started");
                              return o ? (i + function(t) {
                                  var e = t.getChildByStatus("started");
                                  if (!e)
                                      return 0;
                                  if ("equirectangular_to_face" === e.name)
                                      return 0;
                                  if ("generate_preview" === e.name)
                                      return .25;
                                  if ("process_levels" === e.name) {
                                      var n, i = e.data.levelList, o = e.data.totalLevels, s = e.data.processedLevels, a = [];
                                      for (n = 0; n < o; n++)
                                          a.push(i[n].size * i[n].size);
                                      var u = 0;
                                      for (n = 0; n < o; n++)
                                          u += a[n];
                                      var l = 0;
                                      for (n = 0; n < s; n++)
                                          l += a[n];
                                      var c = e.getChildByStatus("started");
                                      if (!c)
                                          return .25 + .75 * l / u;
                                      var h = a[s];
                                      return .25 + .75 * (l + r(c) * h) / u
                                  }
                                  return 0
                              }(o)) / n : i / n
                          }
                          return 0
                      }(t)
              }
              return null
          }
      }
      , {}],
      244: [function(t, e, n) {
          "use strict";
          var r = document.querySelector('link[rel="icon"]')
            , i = r.getAttribute("href")
            , o = null
            , s = null
            , a = new Image;
          a.onload = function() {
              (o = document.createElement("canvas")).width = a.naturalWidth,
              o.height = a.naturalHeight;
              var t = o.getContext("2d");
              t.drawImage(a, 0, 0),
              s = t.getImageData(0, 0, o.width, o.height)
          }
          ,
          a.src = r.getAttribute("href");
          var u = document.createElement("canvas")
            , l = u.getContext("2d");
          e.exports = function(t) {
              s && (null != t && t < 1 ? function(t) {
                  var e = o.width
                    , n = o.height;
                  u.width = e,
                  u.height = n;
                  for (var i = l.getImageData(0, 0, e, n), a = Math.floor(n * (1 - t)), c = 0; c < n; c++)
                      for (var h = 0; h < e; h++) {
                          var p = 4 * (c * e + h)
                            , f = s.data[p]
                            , d = s.data[p + 1]
                            , m = s.data[p + 2]
                            , v = s.data[p + 3];
                          if (c < a) {
                              var y = .2126 * f + .7152 * d + .0722 * m;
                              i.data[p] = y,
                              i.data[p + 1] = y,
                              i.data[p + 2] = y,
                              i.data[p + 3] = v
                          } else
                              i.data[p] = f,
                              i.data[p + 1] = d,
                              i.data[p + 2] = m,
                              i.data[p + 3] = v
                      }
                  l.putImageData(i, 0, 0),
                  r.href = u.toDataURL('image/jpeg', parseFloat(document.getElementById("quality").value / 100))
              }(t) : r.href = i)
          }
      }
      , {}],
      245: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              t.addEventListener("dragenter", (function(t) {
                  t.preventDefault()
              }
              )),
              t.addEventListener("dragleave", (function(t) {
                  t.preventDefault()
              }
              )),
              t.addEventListener("dragover", (function(t) {
                  t.preventDefault()
              }
              )),
              t.addEventListener("drop", (function(t) {
                  t.preventDefault();
                  var n = function(t) {
                      return t.dataTransfer && t.dataTransfer.files && t.dataTransfer.files && t.dataTransfer.files.length > 0 ? t.dataTransfer.files : null
                  }(t);
                  n && e(n)
              }
              ))
          }
      }
      , {}],
      246: [function(t, e, n) {
          "use strict";
          var r = t("bowser").browser
            , i = t("./util/endianess");
          function o() {
              var t = parseFloat(r.version);
              return r.chrome && t >= 40 || r.firefox && t >= 35
          }
          function s() {
              var t = document.createElement("canvas");
              return !!(t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl")))
          }
          function a() {
              return "LE" === i()
          }
          var u = o() && s() && a();
          u || (document.getElementById("unsupported").style.display = "block"),
          o() || (document.getElementById("unsupported-browser").style.display = "block"),
          o() && !s() && (document.getElementById("unsupported-webgl").style.display = "block"),
          o() && s() && !a() && (document.getElementById("unsupported-endianess").style.display = "block"),
          e.exports = u
      }
      , {
          "./util/endianess": 249,
          bowser: 2
      }],
      247: [function(t, e, n) {
          "use strict";
          var r = (window.performance && window.performance.now ? function() {
              return window.performance.now()
          }
          : null) || function() {
              return Date.now()
          }
          ;
          e.exports = r
      }
      , {}],
      248: [function(t, e, n) {
          t("setimmediate"),
          e.exports = setImmediate
      }
      , {
          setimmediate: 212
      }],
      249: [function(t, e, n) {
          e.exports = function() {
              var t = new ArrayBuffer(4)
                , e = new Uint32Array(t)
                , n = new Uint8Array(t);
              if (e[0] = 3735928559,
              239 == n[0])
                  return "LE";
              if (222 == n[0])
                  return "BE";
              throw new Error("unknown endianness")
          }
      }
      , {}],
      250: [function(t, e, n) {
          "use strict";
          var r = t("lodash/object/pick");
          e.exports = function(t) {
              return r(t, ["message", "colno", "lineno", "filename"])
          }
      }
      , {
          "lodash/object/pick": 95
      }],
      251: [function(t, e, n) {
          "use strict";
          function r() {}
          r.prototype.addEventListener = function(t, e) {
              var n = this.__events = this.__events || {};
              (n[t] = n[t] || []).push(e)
          }
          ,
          r.prototype.removeEventListener = function(t, e) {
              var n = (this.__events = this.__events || {})[t];
              if (n) {
                  var r = n.indexOf(e);
                  r >= 0 && n.splice(r, 1)
              }
          }
          ,
          r.prototype.emit = function(t, e, n, r, i, o) {
              var s = (this.__events = this.__events || {})[t];
              if (s)
                  for (var a = 0; a < s.length; a++) {
                      s[a].call(this, e, n, r, i, o)
                  }
          }
          ,
          e.exports = function(t) {
              for (var e = Object.keys(r.prototype), n = 0; n < e.length; n++) {
                  var i = e[n];
                  t.prototype[i] = r.prototype[i]
              }
          }
      }
      , {}],
      252: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              var e = /\.([^\.]*)$/.exec(t);
              return e ? e[1].toLowerCase() : ""
          }
      }
      , {}],
      253: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              var e = /^(.*)\.[^\.]*$/.exec(t);
              return e ? e[1] : ""
          }
      }
      , {}],
      254: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e, n) {
              var r = new XMLHttpRequest;
              r.open("GET", t, !0),
              r.responseType = e,
              r.onload = function() {
                  200 <= this.status && this.status < 300 ? n(null, this.response) : n(new Error("Error loading " + t + " via XHR"))
              }
              ,
              r.onerror = function(t) {
                  n(t)
              }
              ,
              r.send()
          }
      }
      , {}],
      255: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              var e, n = !1;
              return function() {
                  return n || (n = !0,
                  e = t.apply(null, arguments)),
                  e
              }
          }
      }
      , {}],
      256: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return t.replace(/ /g, "-").replace(/[^A-Za-z0-9\-\_]/g, "").toLowerCase()
          }
      }
      , {}],
      257: [function(t, e, n) {
          e.exports = {
              zip: document.querySelector('script[type="x-worker-zip"]').src,
              cube: document.querySelector('script[type="x-worker-cube"]').src,
              equirect: document.querySelector('script[type="x-worker-equirect"]').src
          }
      }
      , {}],
      258: [function(t, e, n) {
          "use strict";
          function r(t) {
              (t = t || {}).workerSource = t.workerSource,
              this._worker = new Worker(t.workerSource)
          }
          r.prototype.add = function(t, e, n, r) {
              this._worker.postMessage({
                  cmd: "file",
                  folders: t,
                  name: e,
                  data: n,
                  opts: r,
                  quality: parseInt(document.getElementById('quality').value, 10)
              })
          }
          ,
          r.prototype.generate = function(t, e) {
              this._worker.onmessage = function(t) {
                  var n = t.data.zipFile;
                  e(null, n)
              }
              ,
              this._worker.postMessage({
                  cmd: "generate",
                  opts: t,
                  quality: parseInt(document.getElementById('quality').value, 10)
              })
          }
          ,
          r.prototype.destroy = function() {
              this._worker.terminate()
          }
          ,
          e.exports = r
      }
      , {}],
      259: [function(t, e, n) {
          e.exports = "b804ad7"
      }
      , {}],
      260: [function(e, n, r) {
          (function(i) {
              !function(e) {
                  if ("object" == typeof r && void 0 !== n)
                      n.exports = e();
                  else if ("function" == typeof t && t.amd)
                      t([], e);
                  else {
                      ("undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : this).imgsize = e()
                  }
              }((function() {
                  return function t(n, r, i) {
                      function o(a, u) {
                          if (!r[a]) {
                              if (!n[a]) {
                                  var l = "function" == typeof e && e;
                                  if (!u && l)
                                      return l(a, !0);
                                  if (s)
                                      return s(a, !0);
                                  var c = new Error("Cannot find module '" + a + "'");
                                  throw c.code = "MODULE_NOT_FOUND",
                                  c
                              }
                              var h = r[a] = {
                                  exports: {}
                              };
                              n[a][0].call(h.exports, (function(t) {
                                  var e = n[a][1][t];
                                  return o(e || t)
                              }
                              ), h, h.exports, t, n, r, i)
                          }
                          return r[a].exports
                      }
                      for (var s = "function" == typeof e && e, a = 0; a < i.length; a++)
                          o(i[a]);
                      return o
                  }({
                      1: [function(t, e) {
                          "use strict";
                          function n(t, e, n) {
                              var r = i(t);
                              r ? r(e(t), n) : n(new Error("Unsupported file type"))
                          }
                          var r = t("./src/reader")
                            , i = t("./src/handler");
                          e.exports = {
                              sync: function(t) {
                                  var e, i;
                                  if (n(t, r.sync, (function(t, n) {
                                      e = t,
                                      i = n
                                  }
                                  )),
                                  e)
                                      throw e;
                                  return i
                              },
                              async: function(t, e) {
                                  n(t, r.async, e)
                              }
                          }
                      }
                      , {
                          "./src/handler": 2,
                          "./src/reader": 5
                      }],
                      2: [function(t, e) {
                          "use strict";
                          var n = t("./jpeg")
                            , r = t("./tiff");
                          e.exports = function(t) {
                              var e = t.type
                                , i = function(t) {
                                  var e = /\.([^\.]*)$/.exec(t);
                                  return e ? e[1].toLowerCase() : ""
                              }(t.name);
                              return "image/jpeg" === e ? n : "image/tiff" === e ? r : "jpg" === i || "jpeg" === i ? n : "tif" === i || "tiff" === i ? r : null
                          }
                      }
                      , {
                          "./jpeg": 3,
                          "./tiff": 6
                      }],
                      3: [function(t, e) {
                          "use strict";
                          function n(t, e, i) {
                              t(e, 4, (function(o, s) {
                                  if (o)
                                      i(o);
                                  else if (s.length < 2 || 255 !== s[0])
                                      i(new Error("Not a valid JPEG file"));
                                  else {
                                      var a = s[1];
                                      if (255 !== a)
                                          if (192 > a || a > 207 || 196 === a || 204 === a) {
                                              if (1 === a || 216 === a || 217 === a || a >= 208 && 215 >= a)
                                                  return void n(t, e + 2, i);
                                              if (s.length < 4)
                                                  return void i(new Error("Not a valid JPEG file"));
                                              var u = r(s, 2);
                                              n(t, e + 2 + u, i)
                                          } else
                                              !function(t, e, n) {
                                                  t(e, 9, (function(t, e) {
                                                      if (t)
                                                          n(t);
                                                      else if (e.length < 9)
                                                          n(new Error("Not a valid JPEG file"));
                                                      else {
                                                          var i = {
                                                              height: r(e, 5),
                                                              width: r(e, 7)
                                                          };
                                                          n(null, i)
                                                      }
                                                  }
                                                  ))
                                              }(t, e, i);
                                      else
                                          n(t, e + 1, i)
                                  }
                              }
                              ))
                          }
                          var r = t("./parse").be16;
                          e.exports = function(t, e) {
                              n(t, 0, e)
                          }
                      }
                      , {
                          "./parse": 4
                      }],
                      4: [function(t, e) {
                          "use strict";
                          e.exports = {
                              be16: function(t, e) {
                                  return (t[e] << 8) + t[e + 1]
                              },
                              le16: function(t, e) {
                                  return (t[e + 1] << 8) + t[e]
                              },
                              be32: function(t, e) {
                                  return (t[e] << 24) + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3]
                              },
                              le32: function(t, e) {
                                  return (t[e + 3] << 24) + (t[e + 2] << 16) + (t[e + 1] << 8) + t[e]
                              }
                          }
                      }
                      , {}],
                      5: [function(t, e) {
                          "use strict";
                          e.exports = {
                              sync: function(t) {
                                  return function(e, n, r) {
                                      var i, o, s = t.slice(e, e + n), a = new FileReaderSync;
                                      try {
                                          o = new Uint8Array(a.readAsArrayBuffer(s))
                                      } catch (t) {
                                          i = t
                                      } finally {
                                          r(i, i ? o : null)
                                      }
                                  }
                              },
                              async: function(t) {
                                  return function(e, n, r) {
                                      var i = t.slice(e, e + n)
                                        , o = new FileReader;
                                      o.addEventListener("error", (function() {
                                          r(o.error)
                                      }
                                      )),
                                      o.addEventListener("load", (function() {
                                          r(null, new Uint8Array(o.result))
                                      }
                                      )),
                                      o.readAsArrayBuffer(i)
                                  }
                              }
                          }
                      }
                      , {}],
                      6: [function(t, e) {
                          "use strict";
                          function n(t, e, n) {
                              var u = e[0]
                                , l = e[1]
                                , c = 77 === u
                                , h = {
                                  short: c ? i : o,
                                  long: c ? a : s
                              };
                              if (73 !== u && 77 !== u || u !== l || 42 !== h.short(e, 2))
                                  n(new Error("Not a valid TIFF file"));
                              else {
                                  var p = h.long(e, 4);
                                  r(t, h, p, 2, n)
                              }
                          }
                          function r(t, e, n, i, o) {
                              t(n, i, (function(s, a) {
                                  if (s)
                                      o(s);
                                  else if (a.length < i)
                                      o(new Error("Not a valid TIFF file"));
                                  else {
                                      var u = e.short(a, 0)
                                        , l = 2 + 12 * u;
                                      l > i ? r(t, e, n, l, o) : function(t, e, n, r, i) {
                                          for (var o = null, s = null, a = 0; n > a; a++) {
                                              var u = 12 * a
                                                , l = e.short(r, u)
                                                , c = 3 === e.short(r, u + 2) ? e.short : e.long;
                                              256 === l && (o = c(r, u + 8)),
                                              257 === l && (s = c(r, u + 8))
                                          }
                                          if (null === o && null === s)
                                              return void i(new Error("Not a valid TIFF file"));
                                          i(null, {
                                              width: o,
                                              height: s
                                          })
                                      }(0, e, u, a.subarray(2), o)
                                  }
                              }
                              ))
                          }
                          var i = t("./parse").be16
                            , o = t("./parse").le16
                            , s = t("./parse").le32
                            , a = t("./parse").be32;
                          e.exports = function(t, e) {
                              !function(t, e) {
                                  t(0, 8, (function(r, i) {
                                      return r ? void e(r) : i.length < 8 ? void e(new Error("Not a valid TIFF file")) : void n(t, i, e)
                                  }
                                  ))
                              }(t, e)
                          }
                      }
                      , {
                          "./parse": 4
                      }]
                  }, {}, [1])(1)
              }
              ))
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {}]
  }, {}, [219])(219)
}
));
