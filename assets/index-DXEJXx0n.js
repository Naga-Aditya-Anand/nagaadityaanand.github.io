var cc = (e) => {
  throw TypeError(e);
};
var Gs = (e, t, n) => t.has(e) || cc("Cannot " + n);
var N = (e, t, n) => (
    Gs(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  K = (e, t, n) =>
    t.has(e)
      ? cc("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  F = (e, t, n, r) => (
    Gs(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  ye = (e, t, n) => (Gs(e, t, "access private method"), n);
var Zo = (e, t, n, r) => ({
  set _(o) {
    F(e, t, o, n);
  },
  get _() {
    return N(e, t, r);
  },
});
function dg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function yf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wf = { exports: {} },
  ys = {},
  xf = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bo = Symbol.for("react.element"),
  fg = Symbol.for("react.portal"),
  pg = Symbol.for("react.fragment"),
  hg = Symbol.for("react.strict_mode"),
  mg = Symbol.for("react.profiler"),
  vg = Symbol.for("react.provider"),
  gg = Symbol.for("react.context"),
  yg = Symbol.for("react.forward_ref"),
  wg = Symbol.for("react.suspense"),
  xg = Symbol.for("react.memo"),
  Sg = Symbol.for("react.lazy"),
  dc = Symbol.iterator;
function Eg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (dc && e[dc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ef = Object.assign,
  Cf = {};
function Fr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cf),
    (this.updater = n || Sf);
}
Fr.prototype.isReactComponent = {};
Fr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kf() {}
kf.prototype = Fr.prototype;
function $a(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cf),
    (this.updater = n || Sf);
}
var Ua = ($a.prototype = new kf());
Ua.constructor = $a;
Ef(Ua, Fr.prototype);
Ua.isPureReactComponent = !0;
var fc = Array.isArray,
  Pf = Object.prototype.hasOwnProperty,
  Va = { current: null },
  Nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Pf.call(t, r) && !Nf.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Bo,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Va.current,
  };
}
function Cg(e, t) {
  return {
    $$typeof: Bo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Wa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bo;
}
function kg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pc = /\/+/g;
function Xs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? kg("" + e.key)
    : t.toString(36);
}
function ki(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Bo:
          case fg:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Xs(s, 0) : r),
      fc(o)
        ? ((n = ""),
          e != null && (n = e.replace(pc, "$&/") + "/"),
          ki(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Wa(o) &&
            (o = Cg(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(pc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), fc(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Xs(i, l);
      s += ki(i, t, n, a, o);
    }
  else if (((a = Eg(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Xs(i, l++)), (s += ki(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Jo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ki(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Pg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var be = { current: null },
  Pi = { transition: null },
  Ng = {
    ReactCurrentDispatcher: be,
    ReactCurrentBatchConfig: Pi,
    ReactCurrentOwner: Va,
  };
function Rf() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
  map: Jo,
  forEach: function (e, t, n) {
    Jo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Jo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Jo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Wa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = Fr;
V.Fragment = pg;
V.Profiler = mg;
V.PureComponent = $a;
V.StrictMode = hg;
V.Suspense = wg;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ng;
V.act = Rf;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ef({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Va.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Pf.call(t, a) &&
        !Nf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Bo, type: e.type, key: o, ref: i, props: r, _owner: s };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: gg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: vg, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Tf;
V.createFactory = function (e) {
  var t = Tf.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: yg, render: e };
};
V.isValidElement = Wa;
V.lazy = function (e) {
  return { $$typeof: Sg, _payload: { _status: -1, _result: e }, _init: Pg };
};
V.memo = function (e, t) {
  return { $$typeof: xg, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Pi.transition;
  Pi.transition = {};
  try {
    e();
  } finally {
    Pi.transition = t;
  }
};
V.unstable_act = Rf;
V.useCallback = function (e, t) {
  return be.current.useCallback(e, t);
};
V.useContext = function (e) {
  return be.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return be.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return be.current.useEffect(e, t);
};
V.useId = function () {
  return be.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return be.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return be.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return be.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return be.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return be.current.useRef(e);
};
V.useState = function (e) {
  return be.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return be.current.useTransition();
};
V.version = "18.3.1";
xf.exports = V;
var v = xf.exports;
const Qt = yf(v),
  bf = dg({ __proto__: null, default: Qt }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tg = v,
  Rg = Symbol.for("react.element"),
  bg = Symbol.for("react.fragment"),
  Ag = Object.prototype.hasOwnProperty,
  Og = Tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _g = { key: !0, ref: !0, __self: !0, __source: !0 };
function Af(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Ag.call(t, r) && !_g.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Rg,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Og.current,
  };
}
ys.Fragment = bg;
ys.jsx = Af;
ys.jsxs = Af;
wf.exports = ys;
var g = wf.exports,
  Of = { exports: {} },
  He = {},
  _f = { exports: {} },
  jf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, A) {
    var D = R.length;
    R.push(A);
    e: for (; 0 < D; ) {
      var $ = (D - 1) >>> 1,
        J = R[$];
      if (0 < o(J, A)) (R[$] = A), (R[D] = J), (D = $);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var A = R[0],
      D = R.pop();
    if (D !== A) {
      R[0] = D;
      e: for (var $ = 0, J = R.length, tt = J >>> 1; $ < tt; ) {
        var Ke = 2 * ($ + 1) - 1,
          Qr = R[Ke],
          Rt = Ke + 1,
          kn = R[Rt];
        if (0 > o(Qr, D))
          Rt < J && 0 > o(kn, Qr)
            ? ((R[$] = kn), (R[Rt] = D), ($ = Rt))
            : ((R[$] = Qr), (R[Ke] = D), ($ = Ke));
        else if (Rt < J && 0 > o(kn, D)) (R[$] = kn), (R[Rt] = D), ($ = Rt);
        else break e;
      }
    }
    return A;
  }
  function o(R, A) {
    var D = R.sortIndex - A.sortIndex;
    return D !== 0 ? D : R.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    w = !1,
    S = !1,
    m = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= R)
        r(u), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(u);
    }
  }
  function E(R) {
    if (((m = !1), y(R), !S))
      if (n(a) !== null) (S = !0), U(C);
      else {
        var A = n(u);
        A !== null && H(E, A.startTime - R);
      }
  }
  function C(R, A) {
    (S = !1), m && ((m = !1), p(T), (T = -1)), (w = !0);
    var D = h;
    try {
      for (
        y(A), d = n(a);
        d !== null && (!(d.expirationTime > A) || (R && !z()));

      ) {
        var $ = d.callback;
        if (typeof $ == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var J = $(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof J == "function" ? (d.callback = J) : d === n(a) && r(a),
            y(A);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var tt = !0;
      else {
        var Ke = n(u);
        Ke !== null && H(E, Ke.startTime - A), (tt = !1);
      }
      return tt;
    } finally {
      (d = null), (h = D), (w = !1);
    }
  }
  var k = !1,
    P = null,
    T = -1,
    L = 5,
    _ = -1;
  function z() {
    return !(e.unstable_now() - _ < L);
  }
  function M() {
    if (P !== null) {
      var R = e.unstable_now();
      _ = R;
      var A = !0;
      try {
        A = P(!0, R);
      } finally {
        A ? W() : ((k = !1), (P = null));
      }
    } else k = !1;
  }
  var W;
  if (typeof f == "function")
    W = function () {
      f(M);
    };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(),
      Q = j.port2;
    (j.port1.onmessage = M),
      (W = function () {
        Q.postMessage(null);
      });
  } else
    W = function () {
      x(M, 0);
    };
  function U(R) {
    (P = R), k || ((k = !0), W());
  }
  function H(R, A) {
    T = x(function () {
      R(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || w || ((S = !0), U(C));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = h;
      }
      var D = h;
      h = A;
      try {
        return R();
      } finally {
        h = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, A) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var D = h;
      h = R;
      try {
        return A();
      } finally {
        h = D;
      }
    }),
    (e.unstable_scheduleCallback = function (R, A, D) {
      var $ = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? $ + D : $))
          : (D = $),
        R)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = D + J),
        (R = {
          id: c++,
          callback: A,
          priorityLevel: R,
          startTime: D,
          expirationTime: J,
          sortIndex: -1,
        }),
        D > $
          ? ((R.sortIndex = D),
            t(u, R),
            n(a) === null &&
              R === n(u) &&
              (m ? (p(T), (T = -1)) : (m = !0), H(E, D - $)))
          : ((R.sortIndex = J), t(a, R), S || w || ((S = !0), U(C))),
        R
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (R) {
      var A = h;
      return function () {
        var D = h;
        h = A;
        try {
          return R.apply(this, arguments);
        } finally {
          h = D;
        }
      };
    });
})(jf);
_f.exports = jf;
var jg = _f.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lg = v,
  We = jg;
function b(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Lf = new Set(),
  wo = {};
function Wn(e, t) {
  Pr(e, t), Pr(e + "Capture", t);
}
function Pr(e, t) {
  for (wo[e] = t, e = 0; e < t.length; e++) Lf.add(t[e]);
}
var Dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Il = Object.prototype.hasOwnProperty,
  Mg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hc = {},
  mc = {};
function Dg(e) {
  return Il.call(mc, e)
    ? !0
    : Il.call(hc, e)
    ? !1
    : Mg.test(e)
    ? (mc[e] = !0)
    : ((hc[e] = !0), !1);
}
function Ig(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Fg(e, t, n, r) {
  if (t === null || typeof t > "u" || Ig(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ae(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ba = /[\-:]([a-z])/g;
function Ha(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ba, Ha);
    ge[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ba, Ha);
    ge[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ba, Ha);
  ge[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qa(e, t, n, r) {
  var o = ge.hasOwnProperty(t) ? ge[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Fg(t, n, o, r) && (n = null),
    r || o === null
      ? Dg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = Lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ei = Symbol.for("react.element"),
  Xn = Symbol.for("react.portal"),
  Yn = Symbol.for("react.fragment"),
  Ka = Symbol.for("react.strict_mode"),
  Fl = Symbol.for("react.profiler"),
  Mf = Symbol.for("react.provider"),
  Df = Symbol.for("react.context"),
  Ga = Symbol.for("react.forward_ref"),
  zl = Symbol.for("react.suspense"),
  $l = Symbol.for("react.suspense_list"),
  Xa = Symbol.for("react.memo"),
  Xt = Symbol.for("react.lazy"),
  If = Symbol.for("react.offscreen"),
  vc = Symbol.iterator;
function Gr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vc && e[vc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oe = Object.assign,
  Ys;
function oo(e) {
  if (Ys === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ys = (t && t[1]) || "";
    }
  return (
    `
` +
    Ys +
    e
  );
}
var qs = !1;
function Zs(e, t) {
  if (!e || qs) return "";
  qs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (qs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? oo(e) : "";
}
function zg(e) {
  switch (e.tag) {
    case 5:
      return oo(e.type);
    case 16:
      return oo("Lazy");
    case 13:
      return oo("Suspense");
    case 19:
      return oo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Zs(e.type, !1)), e;
    case 11:
      return (e = Zs(e.type.render, !1)), e;
    case 1:
      return (e = Zs(e.type, !0)), e;
    default:
      return "";
  }
}
function Ul(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yn:
      return "Fragment";
    case Xn:
      return "Portal";
    case Fl:
      return "Profiler";
    case Ka:
      return "StrictMode";
    case zl:
      return "Suspense";
    case $l:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Df:
        return (e.displayName || "Context") + ".Consumer";
      case Mf:
        return (e._context.displayName || "Context") + ".Provider";
      case Ga:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Xa:
        return (
          (t = e.displayName || null), t !== null ? t : Ul(e.type) || "Memo"
        );
      case Xt:
        (t = e._payload), (e = e._init);
        try {
          return Ul(e(t));
        } catch {}
    }
  return null;
}
function $g(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ul(t);
    case 8:
      return t === Ka ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ff(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ug(e) {
  var t = Ff(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ti(e) {
  e._valueTracker || (e._valueTracker = Ug(e));
}
function zf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ff(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ui(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vl(e, t) {
  var n = t.checked;
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function $f(e, t) {
  (t = t.checked), t != null && Qa(e, "checked", t, !1);
}
function Wl(e, t) {
  $f(e, t);
  var n = mn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Bl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Bl(e, t.type, mn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Bl(e, t, n) {
  (t !== "number" || Ui(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var io = Array.isArray;
function lr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function wc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(b(92));
      if (io(n)) {
        if (1 < n.length) throw Error(b(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mn(n) };
}
function Uf(e, t) {
  var n = mn(t.value),
    r = mn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function xc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ql(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ni,
  Wf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ni = ni || document.createElement("div"),
          ni.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ni.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function xo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ao = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Vg = ["Webkit", "ms", "Moz", "O"];
Object.keys(ao).forEach(function (e) {
  Vg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ao[t] = ao[e]);
  });
});
function Bf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ao.hasOwnProperty(e) && ao[e])
    ? ("" + t).trim()
    : t + "px";
}
function Hf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Bf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Wg = oe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Kl(e, t) {
  if (t) {
    if (Wg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(b(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(b(62));
  }
}
function Gl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Xl = null;
function Ya(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Yl = null,
  ar = null,
  ur = null;
function Sc(e) {
  if ((e = Ko(e))) {
    if (typeof Yl != "function") throw Error(b(280));
    var t = e.stateNode;
    t && ((t = Cs(t)), Yl(e.stateNode, e.type, t));
  }
}
function Qf(e) {
  ar ? (ur ? ur.push(e) : (ur = [e])) : (ar = e);
}
function Kf() {
  if (ar) {
    var e = ar,
      t = ur;
    if (((ur = ar = null), Sc(e), t)) for (e = 0; e < t.length; e++) Sc(t[e]);
  }
}
function Gf(e, t) {
  return e(t);
}
function Xf() {}
var Js = !1;
function Yf(e, t, n) {
  if (Js) return e(t, n);
  Js = !0;
  try {
    return Gf(e, t, n);
  } finally {
    (Js = !1), (ar !== null || ur !== null) && (Xf(), Kf());
  }
}
function So(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(b(231, t, typeof n));
  return n;
}
var ql = !1;
if (Dt)
  try {
    var Xr = {};
    Object.defineProperty(Xr, "passive", {
      get: function () {
        ql = !0;
      },
    }),
      window.addEventListener("test", Xr, Xr),
      window.removeEventListener("test", Xr, Xr);
  } catch {
    ql = !1;
  }
function Bg(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var uo = !1,
  Vi = null,
  Wi = !1,
  Zl = null,
  Hg = {
    onError: function (e) {
      (uo = !0), (Vi = e);
    },
  };
function Qg(e, t, n, r, o, i, s, l, a) {
  (uo = !1), (Vi = null), Bg.apply(Hg, arguments);
}
function Kg(e, t, n, r, o, i, s, l, a) {
  if ((Qg.apply(this, arguments), uo)) {
    if (uo) {
      var u = Vi;
      (uo = !1), (Vi = null);
    } else throw Error(b(198));
    Wi || ((Wi = !0), (Zl = u));
  }
}
function Bn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function qf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ec(e) {
  if (Bn(e) !== e) throw Error(b(188));
}
function Gg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Bn(e)), t === null)) throw Error(b(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Ec(o), e;
        if (i === r) return Ec(o), t;
        i = i.sibling;
      }
      throw Error(b(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(b(189));
      }
    }
    if (n.alternate !== r) throw Error(b(190));
  }
  if (n.tag !== 3) throw Error(b(188));
  return n.stateNode.current === n ? e : t;
}
function Zf(e) {
  return (e = Gg(e)), e !== null ? Jf(e) : null;
}
function Jf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Jf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ep = We.unstable_scheduleCallback,
  Cc = We.unstable_cancelCallback,
  Xg = We.unstable_shouldYield,
  Yg = We.unstable_requestPaint,
  ue = We.unstable_now,
  qg = We.unstable_getCurrentPriorityLevel,
  qa = We.unstable_ImmediatePriority,
  tp = We.unstable_UserBlockingPriority,
  Bi = We.unstable_NormalPriority,
  Zg = We.unstable_LowPriority,
  np = We.unstable_IdlePriority,
  ws = null,
  Ct = null;
function Jg(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == "function")
    try {
      Ct.onCommitFiberRoot(ws, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var at = Math.clz32 ? Math.clz32 : ny,
  ey = Math.log,
  ty = Math.LN2;
function ny(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ey(e) / ty) | 0)) | 0;
}
var ri = 64,
  oi = 4194304;
function so(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = so(l)) : ((i &= s), i !== 0 && (r = so(i)));
  } else (s = n & ~o), s !== 0 ? (r = so(s)) : i !== 0 && (r = so(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - at(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function ry(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function oy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - at(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = ry(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Jl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function rp() {
  var e = ri;
  return (ri <<= 1), !(ri & 4194240) && (ri = 64), e;
}
function el(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ho(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - at(t)),
    (e[t] = n);
}
function iy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - at(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Za(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var G = 0;
function op(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ip,
  Ja,
  sp,
  lp,
  ap,
  ea = !1,
  ii = [],
  ln = null,
  an = null,
  un = null,
  Eo = new Map(),
  Co = new Map(),
  qt = [],
  sy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function kc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ln = null;
      break;
    case "dragenter":
    case "dragleave":
      an = null;
      break;
    case "mouseover":
    case "mouseout":
      un = null;
      break;
    case "pointerover":
    case "pointerout":
      Eo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Co.delete(t.pointerId);
  }
}
function Yr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ko(t)), t !== null && Ja(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function ly(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (ln = Yr(ln, e, t, n, r, o)), !0;
    case "dragenter":
      return (an = Yr(an, e, t, n, r, o)), !0;
    case "mouseover":
      return (un = Yr(un, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Eo.set(i, Yr(Eo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Co.set(i, Yr(Co.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function up(e) {
  var t = Tn(e.target);
  if (t !== null) {
    var n = Bn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = qf(n)), t !== null)) {
          (e.blockedOn = t),
            ap(e.priority, function () {
              sp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ni(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ta(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Xl = r), n.target.dispatchEvent(r), (Xl = null);
    } else return (t = Ko(n)), t !== null && Ja(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Pc(e, t, n) {
  Ni(e) && n.delete(t);
}
function ay() {
  (ea = !1),
    ln !== null && Ni(ln) && (ln = null),
    an !== null && Ni(an) && (an = null),
    un !== null && Ni(un) && (un = null),
    Eo.forEach(Pc),
    Co.forEach(Pc);
}
function qr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ea ||
      ((ea = !0),
      We.unstable_scheduleCallback(We.unstable_NormalPriority, ay)));
}
function ko(e) {
  function t(o) {
    return qr(o, e);
  }
  if (0 < ii.length) {
    qr(ii[0], e);
    for (var n = 1; n < ii.length; n++) {
      var r = ii[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ln !== null && qr(ln, e),
      an !== null && qr(an, e),
      un !== null && qr(un, e),
      Eo.forEach(t),
      Co.forEach(t),
      n = 0;
    n < qt.length;
    n++
  )
    (r = qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); )
    up(n), n.blockedOn === null && qt.shift();
}
var cr = Vt.ReactCurrentBatchConfig,
  Qi = !0;
function uy(e, t, n, r) {
  var o = G,
    i = cr.transition;
  cr.transition = null;
  try {
    (G = 1), eu(e, t, n, r);
  } finally {
    (G = o), (cr.transition = i);
  }
}
function cy(e, t, n, r) {
  var o = G,
    i = cr.transition;
  cr.transition = null;
  try {
    (G = 4), eu(e, t, n, r);
  } finally {
    (G = o), (cr.transition = i);
  }
}
function eu(e, t, n, r) {
  if (Qi) {
    var o = ta(e, t, n, r);
    if (o === null) cl(e, t, r, Ki, n), kc(e, r);
    else if (ly(o, e, t, n, r)) r.stopPropagation();
    else if ((kc(e, r), t & 4 && -1 < sy.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ko(o);
        if (
          (i !== null && ip(i),
          (i = ta(e, t, n, r)),
          i === null && cl(e, t, r, Ki, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else cl(e, t, r, null, n);
  }
}
var Ki = null;
function ta(e, t, n, r) {
  if (((Ki = null), (e = Ya(r)), (e = Tn(e)), e !== null))
    if (((t = Bn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = qf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ki = e), null;
}
function cp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (qg()) {
        case qa:
          return 1;
        case tp:
          return 4;
        case Bi:
        case Zg:
          return 16;
        case np:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var on = null,
  tu = null,
  Ti = null;
function dp() {
  if (Ti) return Ti;
  var e,
    t = tu,
    n = t.length,
    r,
    o = "value" in on ? on.value : on.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Ti = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ri(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function si() {
  return !0;
}
function Nc() {
  return !1;
}
function Qe(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? si
        : Nc),
      (this.isPropagationStopped = Nc),
      this
    );
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = si));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = si));
      },
      persist: function () {},
      isPersistent: si,
    }),
    t
  );
}
var zr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  nu = Qe(zr),
  Qo = oe({}, zr, { view: 0, detail: 0 }),
  dy = Qe(Qo),
  tl,
  nl,
  Zr,
  xs = oe({}, Qo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ru,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Zr &&
            (Zr && e.type === "mousemove"
              ? ((tl = e.screenX - Zr.screenX), (nl = e.screenY - Zr.screenY))
              : (nl = tl = 0),
            (Zr = e)),
          tl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : nl;
    },
  }),
  Tc = Qe(xs),
  fy = oe({}, xs, { dataTransfer: 0 }),
  py = Qe(fy),
  hy = oe({}, Qo, { relatedTarget: 0 }),
  rl = Qe(hy),
  my = oe({}, zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vy = Qe(my),
  gy = oe({}, zr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  yy = Qe(gy),
  wy = oe({}, zr, { data: 0 }),
  Rc = Qe(wy),
  xy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Sy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ey = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Cy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ey[e]) ? !!t[e] : !1;
}
function ru() {
  return Cy;
}
var ky = oe({}, Qo, {
    key: function (e) {
      if (e.key) {
        var t = xy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ri(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ru,
    charCode: function (e) {
      return e.type === "keypress" ? Ri(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ri(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Py = Qe(ky),
  Ny = oe({}, xs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  bc = Qe(Ny),
  Ty = oe({}, Qo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ru,
  }),
  Ry = Qe(Ty),
  by = oe({}, zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ay = Qe(by),
  Oy = oe({}, xs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _y = Qe(Oy),
  jy = [9, 13, 27, 32],
  ou = Dt && "CompositionEvent" in window,
  co = null;
Dt && "documentMode" in document && (co = document.documentMode);
var Ly = Dt && "TextEvent" in window && !co,
  fp = Dt && (!ou || (co && 8 < co && 11 >= co)),
  Ac = " ",
  Oc = !1;
function pp(e, t) {
  switch (e) {
    case "keyup":
      return jy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function hp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var qn = !1;
function My(e, t) {
  switch (e) {
    case "compositionend":
      return hp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Oc = !0), Ac);
    case "textInput":
      return (e = t.data), e === Ac && Oc ? null : e;
    default:
      return null;
  }
}
function Dy(e, t) {
  if (qn)
    return e === "compositionend" || (!ou && pp(e, t))
      ? ((e = dp()), (Ti = tu = on = null), (qn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return fp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Iy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _c(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Iy[e.type] : t === "textarea";
}
function mp(e, t, n, r) {
  Qf(r),
    (t = Gi(t, "onChange")),
    0 < t.length &&
      ((n = new nu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var fo = null,
  Po = null;
function Fy(e) {
  Np(e, 0);
}
function Ss(e) {
  var t = er(e);
  if (zf(t)) return e;
}
function zy(e, t) {
  if (e === "change") return t;
}
var vp = !1;
if (Dt) {
  var ol;
  if (Dt) {
    var il = "oninput" in document;
    if (!il) {
      var jc = document.createElement("div");
      jc.setAttribute("oninput", "return;"),
        (il = typeof jc.oninput == "function");
    }
    ol = il;
  } else ol = !1;
  vp = ol && (!document.documentMode || 9 < document.documentMode);
}
function Lc() {
  fo && (fo.detachEvent("onpropertychange", gp), (Po = fo = null));
}
function gp(e) {
  if (e.propertyName === "value" && Ss(Po)) {
    var t = [];
    mp(t, Po, e, Ya(e)), Yf(Fy, t);
  }
}
function $y(e, t, n) {
  e === "focusin"
    ? (Lc(), (fo = t), (Po = n), fo.attachEvent("onpropertychange", gp))
    : e === "focusout" && Lc();
}
function Uy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ss(Po);
}
function Vy(e, t) {
  if (e === "click") return Ss(t);
}
function Wy(e, t) {
  if (e === "input" || e === "change") return Ss(t);
}
function By(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ct = typeof Object.is == "function" ? Object.is : By;
function No(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Il.call(t, o) || !ct(e[o], t[o])) return !1;
  }
  return !0;
}
function Mc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Dc(e, t) {
  var n = Mc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Mc(n);
  }
}
function yp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? yp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function wp() {
  for (var e = window, t = Ui(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ui(e.document);
  }
  return t;
}
function iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Hy(e) {
  var t = wp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && iu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Dc(n, i));
        var s = Dc(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Qy = Dt && "documentMode" in document && 11 >= document.documentMode,
  Zn = null,
  na = null,
  po = null,
  ra = !1;
function Ic(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ra ||
    Zn == null ||
    Zn !== Ui(r) ||
    ((r = Zn),
    "selectionStart" in r && iu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (po && No(po, r)) ||
      ((po = r),
      (r = Gi(na, "onSelect")),
      0 < r.length &&
        ((t = new nu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zn))));
}
function li(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Jn = {
    animationend: li("Animation", "AnimationEnd"),
    animationiteration: li("Animation", "AnimationIteration"),
    animationstart: li("Animation", "AnimationStart"),
    transitionend: li("Transition", "TransitionEnd"),
  },
  sl = {},
  xp = {};
Dt &&
  ((xp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Jn.animationend.animation,
    delete Jn.animationiteration.animation,
    delete Jn.animationstart.animation),
  "TransitionEvent" in window || delete Jn.transitionend.transition);
function Es(e) {
  if (sl[e]) return sl[e];
  if (!Jn[e]) return e;
  var t = Jn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xp) return (sl[e] = t[n]);
  return e;
}
var Sp = Es("animationend"),
  Ep = Es("animationiteration"),
  Cp = Es("animationstart"),
  kp = Es("transitionend"),
  Pp = new Map(),
  Fc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Sn(e, t) {
  Pp.set(e, t), Wn(t, [e]);
}
for (var ll = 0; ll < Fc.length; ll++) {
  var al = Fc[ll],
    Ky = al.toLowerCase(),
    Gy = al[0].toUpperCase() + al.slice(1);
  Sn(Ky, "on" + Gy);
}
Sn(Sp, "onAnimationEnd");
Sn(Ep, "onAnimationIteration");
Sn(Cp, "onAnimationStart");
Sn("dblclick", "onDoubleClick");
Sn("focusin", "onFocus");
Sn("focusout", "onBlur");
Sn(kp, "onTransitionEnd");
Pr("onMouseEnter", ["mouseout", "mouseover"]);
Pr("onMouseLeave", ["mouseout", "mouseover"]);
Pr("onPointerEnter", ["pointerout", "pointerover"]);
Pr("onPointerLeave", ["pointerout", "pointerover"]);
Wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var lo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Xy = new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));
function zc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Kg(r, t, void 0, e), (e.currentTarget = null);
}
function Np(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          zc(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          zc(o, l, u), (i = a);
        }
    }
  }
  if (Wi) throw ((e = Zl), (Wi = !1), (Zl = null), e);
}
function q(e, t) {
  var n = t[aa];
  n === void 0 && (n = t[aa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Tp(t, e, 2, !1), n.add(r));
}
function ul(e, t, n) {
  var r = 0;
  t && (r |= 4), Tp(n, e, r, t);
}
var ai = "_reactListening" + Math.random().toString(36).slice(2);
function To(e) {
  if (!e[ai]) {
    (e[ai] = !0),
      Lf.forEach(function (n) {
        n !== "selectionchange" && (Xy.has(n) || ul(n, !1, e), ul(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ai] || ((t[ai] = !0), ul("selectionchange", !1, t));
  }
}
function Tp(e, t, n, r) {
  switch (cp(t)) {
    case 1:
      var o = uy;
      break;
    case 4:
      o = cy;
      break;
    default:
      o = eu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ql ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function cl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Tn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Yf(function () {
    var u = i,
      c = Ya(n),
      d = [];
    e: {
      var h = Pp.get(e);
      if (h !== void 0) {
        var w = nu,
          S = e;
        switch (e) {
          case "keypress":
            if (Ri(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Py;
            break;
          case "focusin":
            (S = "focus"), (w = rl);
            break;
          case "focusout":
            (S = "blur"), (w = rl);
            break;
          case "beforeblur":
          case "afterblur":
            w = rl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Tc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = py;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Ry;
            break;
          case Sp:
          case Ep:
          case Cp:
            w = vy;
            break;
          case kp:
            w = Ay;
            break;
          case "scroll":
            w = dy;
            break;
          case "wheel":
            w = _y;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = yy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = bc;
        }
        var m = (t & 4) !== 0,
          x = !m && e === "scroll",
          p = m ? (h !== null ? h + "Capture" : null) : h;
        m = [];
        for (var f = u, y; f !== null; ) {
          y = f;
          var E = y.stateNode;
          if (
            (y.tag === 5 &&
              E !== null &&
              ((y = E),
              p !== null && ((E = So(f, p)), E != null && m.push(Ro(f, E, y)))),
            x)
          )
            break;
          f = f.return;
        }
        0 < m.length &&
          ((h = new w(h, S, null, n, c)), d.push({ event: h, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Xl &&
            (S = n.relatedTarget || n.fromElement) &&
            (Tn(S) || S[It]))
        )
          break e;
        if (
          (w || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          w
            ? ((S = n.relatedTarget || n.toElement),
              (w = u),
              (S = S ? Tn(S) : null),
              S !== null &&
                ((x = Bn(S)), S !== x || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((w = null), (S = u)),
          w !== S)
        ) {
          if (
            ((m = Tc),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = bc),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (x = w == null ? h : er(w)),
            (y = S == null ? h : er(S)),
            (h = new m(E, f + "leave", w, n, c)),
            (h.target = x),
            (h.relatedTarget = y),
            (E = null),
            Tn(c) === u &&
              ((m = new m(p, f + "enter", S, n, c)),
              (m.target = y),
              (m.relatedTarget = x),
              (E = m)),
            (x = E),
            w && S)
          )
            t: {
              for (m = w, p = S, f = 0, y = m; y; y = Hn(y)) f++;
              for (y = 0, E = p; E; E = Hn(E)) y++;
              for (; 0 < f - y; ) (m = Hn(m)), f--;
              for (; 0 < y - f; ) (p = Hn(p)), y--;
              for (; f--; ) {
                if (m === p || (p !== null && m === p.alternate)) break t;
                (m = Hn(m)), (p = Hn(p));
              }
              m = null;
            }
          else m = null;
          w !== null && $c(d, h, w, m, !1),
            S !== null && x !== null && $c(d, x, S, m, !0);
        }
      }
      e: {
        if (
          ((h = u ? er(u) : window),
          (w = h.nodeName && h.nodeName.toLowerCase()),
          w === "select" || (w === "input" && h.type === "file"))
        )
          var C = zy;
        else if (_c(h))
          if (vp) C = Wy;
          else {
            C = Uy;
            var k = $y;
          }
        else
          (w = h.nodeName) &&
            w.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = Vy);
        if (C && (C = C(e, u))) {
          mp(d, C, n, c);
          break e;
        }
        k && k(e, h, u),
          e === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            Bl(h, "number", h.value);
      }
      switch (((k = u ? er(u) : window), e)) {
        case "focusin":
          (_c(k) || k.contentEditable === "true") &&
            ((Zn = k), (na = u), (po = null));
          break;
        case "focusout":
          po = na = Zn = null;
          break;
        case "mousedown":
          ra = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ra = !1), Ic(d, n, c);
          break;
        case "selectionchange":
          if (Qy) break;
        case "keydown":
        case "keyup":
          Ic(d, n, c);
      }
      var P;
      if (ou)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        qn
          ? pp(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (fp &&
          n.locale !== "ko" &&
          (qn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && qn && (P = dp())
            : ((on = c),
              (tu = "value" in on ? on.value : on.textContent),
              (qn = !0))),
        (k = Gi(u, T)),
        0 < k.length &&
          ((T = new Rc(T, e, null, n, c)),
          d.push({ event: T, listeners: k }),
          P ? (T.data = P) : ((P = hp(n)), P !== null && (T.data = P)))),
        (P = Ly ? My(e, n) : Dy(e, n)) &&
          ((u = Gi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Rc("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    Np(d, t);
  });
}
function Ro(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = So(e, n)),
      i != null && r.unshift(Ro(e, i, o)),
      (i = So(e, t)),
      i != null && r.push(Ro(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Hn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function $c(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = So(n, i)), a != null && s.unshift(Ro(n, a, l)))
        : o || ((a = So(n, i)), a != null && s.push(Ro(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Yy = /\r\n?/g,
  qy = /\u0000|\uFFFD/g;
function Uc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Yy,
      `
`
    )
    .replace(qy, "");
}
function ui(e, t, n) {
  if (((t = Uc(t)), Uc(e) !== t && n)) throw Error(b(425));
}
function Xi() {}
var oa = null,
  ia = null;
function sa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var la = typeof setTimeout == "function" ? setTimeout : void 0,
  Zy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Vc = typeof Promise == "function" ? Promise : void 0,
  Jy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Vc < "u"
      ? function (e) {
          return Vc.resolve(null).then(e).catch(e0);
        }
      : la;
function e0(e) {
  setTimeout(function () {
    throw e;
  });
}
function dl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ko(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ko(t);
}
function cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Wc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $r = Math.random().toString(36).slice(2),
  xt = "__reactFiber$" + $r,
  bo = "__reactProps$" + $r,
  It = "__reactContainer$" + $r,
  aa = "__reactEvents$" + $r,
  t0 = "__reactListeners$" + $r,
  n0 = "__reactHandles$" + $r;
function Tn(e) {
  var t = e[xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[It] || n[xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wc(e); e !== null; ) {
          if ((n = e[xt])) return n;
          e = Wc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ko(e) {
  return (
    (e = e[xt] || e[It]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function er(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function Cs(e) {
  return e[bo] || null;
}
var ua = [],
  tr = -1;
function En(e) {
  return { current: e };
}
function Z(e) {
  0 > tr || ((e.current = ua[tr]), (ua[tr] = null), tr--);
}
function X(e, t) {
  tr++, (ua[tr] = e.current), (e.current = t);
}
var vn = {},
  Ce = En(vn),
  Le = En(!1),
  Dn = vn;
function Nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Me(e) {
  return (e = e.childContextTypes), e != null;
}
function Yi() {
  Z(Le), Z(Ce);
}
function Bc(e, t, n) {
  if (Ce.current !== vn) throw Error(b(168));
  X(Ce, t), X(Le, n);
}
function Rp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(b(108, $g(e) || "Unknown", o));
  return oe({}, n, r);
}
function qi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vn),
    (Dn = Ce.current),
    X(Ce, e),
    X(Le, Le.current),
    !0
  );
}
function Hc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(b(169));
  n
    ? ((e = Rp(e, t, Dn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(Le),
      Z(Ce),
      X(Ce, e))
    : Z(Le),
    X(Le, n);
}
var _t = null,
  ks = !1,
  fl = !1;
function bp(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function r0(e) {
  (ks = !0), bp(e);
}
function Cn() {
  if (!fl && _t !== null) {
    fl = !0;
    var e = 0,
      t = G;
    try {
      var n = _t;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (_t = null), (ks = !1);
    } catch (o) {
      throw (_t !== null && (_t = _t.slice(e + 1)), ep(qa, Cn), o);
    } finally {
      (G = t), (fl = !1);
    }
  }
  return null;
}
var nr = [],
  rr = 0,
  Zi = null,
  Ji = 0,
  Xe = [],
  Ye = 0,
  In = null,
  jt = 1,
  Lt = "";
function Pn(e, t) {
  (nr[rr++] = Ji), (nr[rr++] = Zi), (Zi = e), (Ji = t);
}
function Ap(e, t, n) {
  (Xe[Ye++] = jt), (Xe[Ye++] = Lt), (Xe[Ye++] = In), (In = e);
  var r = jt;
  e = Lt;
  var o = 32 - at(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - at(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (jt = (1 << (32 - at(t) + o)) | (n << o) | r),
      (Lt = i + e);
  } else (jt = (1 << i) | (n << o) | r), (Lt = e);
}
function su(e) {
  e.return !== null && (Pn(e, 1), Ap(e, 1, 0));
}
function lu(e) {
  for (; e === Zi; )
    (Zi = nr[--rr]), (nr[rr] = null), (Ji = nr[--rr]), (nr[rr] = null);
  for (; e === In; )
    (In = Xe[--Ye]),
      (Xe[Ye] = null),
      (Lt = Xe[--Ye]),
      (Xe[Ye] = null),
      (jt = Xe[--Ye]),
      (Xe[Ye] = null);
}
var Ue = null,
  $e = null,
  ee = !1,
  lt = null;
function Op(e, t) {
  var n = qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ue = e), ($e = cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ue = e), ($e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = In !== null ? { id: jt, overflow: Lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ue = e),
            ($e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ca(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function da(e) {
  if (ee) {
    var t = $e;
    if (t) {
      var n = t;
      if (!Qc(e, t)) {
        if (ca(e)) throw Error(b(418));
        t = cn(n.nextSibling);
        var r = Ue;
        t && Qc(e, t)
          ? Op(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ue = e));
      }
    } else {
      if (ca(e)) throw Error(b(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ue = e);
    }
  }
}
function Kc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function ci(e) {
  if (e !== Ue) return !1;
  if (!ee) return Kc(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !sa(e.type, e.memoizedProps))),
    t && (t = $e))
  ) {
    if (ca(e)) throw (_p(), Error(b(418)));
    for (; t; ) Op(e, t), (t = cn(t.nextSibling));
  }
  if ((Kc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(b(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = Ue ? cn(e.stateNode.nextSibling) : null;
  return !0;
}
function _p() {
  for (var e = $e; e; ) e = cn(e.nextSibling);
}
function Tr() {
  ($e = Ue = null), (ee = !1);
}
function au(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
var o0 = Vt.ReactCurrentBatchConfig;
function Jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(b(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(b(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(b(284));
    if (!n._owner) throw Error(b(290, e));
  }
  return e;
}
function di(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      b(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Gc(e) {
  var t = e._init;
  return t(e._payload);
}
function jp(e) {
  function t(p, f) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [f]), (p.flags |= 16)) : y.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function o(p, f) {
    return (p = hn(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, f, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < f ? ((p.flags |= 2), f) : y)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, f, y, E) {
    return f === null || f.tag !== 6
      ? ((f = wl(y, p.mode, E)), (f.return = p), f)
      : ((f = o(f, y)), (f.return = p), f);
  }
  function a(p, f, y, E) {
    var C = y.type;
    return C === Yn
      ? c(p, f, y.props.children, E, y.key)
      : f !== null &&
        (f.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Xt &&
            Gc(C) === f.type))
      ? ((E = o(f, y.props)), (E.ref = Jr(p, f, y)), (E.return = p), E)
      : ((E = Mi(y.type, y.key, y.props, null, p.mode, E)),
        (E.ref = Jr(p, f, y)),
        (E.return = p),
        E);
  }
  function u(p, f, y, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== y.containerInfo ||
      f.stateNode.implementation !== y.implementation
      ? ((f = xl(y, p.mode, E)), (f.return = p), f)
      : ((f = o(f, y.children || [])), (f.return = p), f);
  }
  function c(p, f, y, E, C) {
    return f === null || f.tag !== 7
      ? ((f = Mn(y, p.mode, E, C)), (f.return = p), f)
      : ((f = o(f, y)), (f.return = p), f);
  }
  function d(p, f, y) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = wl("" + f, p.mode, y)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ei:
          return (
            (y = Mi(f.type, f.key, f.props, null, p.mode, y)),
            (y.ref = Jr(p, null, f)),
            (y.return = p),
            y
          );
        case Xn:
          return (f = xl(f, p.mode, y)), (f.return = p), f;
        case Xt:
          var E = f._init;
          return d(p, E(f._payload), y);
      }
      if (io(f) || Gr(f))
        return (f = Mn(f, p.mode, y, null)), (f.return = p), f;
      di(p, f);
    }
    return null;
  }
  function h(p, f, y, E) {
    var C = f !== null ? f.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : l(p, f, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ei:
          return y.key === C ? a(p, f, y, E) : null;
        case Xn:
          return y.key === C ? u(p, f, y, E) : null;
        case Xt:
          return (C = y._init), h(p, f, C(y._payload), E);
      }
      if (io(y) || Gr(y)) return C !== null ? null : c(p, f, y, E, null);
      di(p, y);
    }
    return null;
  }
  function w(p, f, y, E, C) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(y) || null), l(f, p, "" + E, C);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case ei:
          return (p = p.get(E.key === null ? y : E.key) || null), a(f, p, E, C);
        case Xn:
          return (p = p.get(E.key === null ? y : E.key) || null), u(f, p, E, C);
        case Xt:
          var k = E._init;
          return w(p, f, y, k(E._payload), C);
      }
      if (io(E) || Gr(E)) return (p = p.get(y) || null), c(f, p, E, C, null);
      di(f, E);
    }
    return null;
  }
  function S(p, f, y, E) {
    for (
      var C = null, k = null, P = f, T = (f = 0), L = null;
      P !== null && T < y.length;
      T++
    ) {
      P.index > T ? ((L = P), (P = null)) : (L = P.sibling);
      var _ = h(p, P, y[T], E);
      if (_ === null) {
        P === null && (P = L);
        break;
      }
      e && P && _.alternate === null && t(p, P),
        (f = i(_, f, T)),
        k === null ? (C = _) : (k.sibling = _),
        (k = _),
        (P = L);
    }
    if (T === y.length) return n(p, P), ee && Pn(p, T), C;
    if (P === null) {
      for (; T < y.length; T++)
        (P = d(p, y[T], E)),
          P !== null &&
            ((f = i(P, f, T)), k === null ? (C = P) : (k.sibling = P), (k = P));
      return ee && Pn(p, T), C;
    }
    for (P = r(p, P); T < y.length; T++)
      (L = w(P, p, T, y[T], E)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? T : L.key),
          (f = i(L, f, T)),
          k === null ? (C = L) : (k.sibling = L),
          (k = L));
    return (
      e &&
        P.forEach(function (z) {
          return t(p, z);
        }),
      ee && Pn(p, T),
      C
    );
  }
  function m(p, f, y, E) {
    var C = Gr(y);
    if (typeof C != "function") throw Error(b(150));
    if (((y = C.call(y)), y == null)) throw Error(b(151));
    for (
      var k = (C = null), P = f, T = (f = 0), L = null, _ = y.next();
      P !== null && !_.done;
      T++, _ = y.next()
    ) {
      P.index > T ? ((L = P), (P = null)) : (L = P.sibling);
      var z = h(p, P, _.value, E);
      if (z === null) {
        P === null && (P = L);
        break;
      }
      e && P && z.alternate === null && t(p, P),
        (f = i(z, f, T)),
        k === null ? (C = z) : (k.sibling = z),
        (k = z),
        (P = L);
    }
    if (_.done) return n(p, P), ee && Pn(p, T), C;
    if (P === null) {
      for (; !_.done; T++, _ = y.next())
        (_ = d(p, _.value, E)),
          _ !== null &&
            ((f = i(_, f, T)), k === null ? (C = _) : (k.sibling = _), (k = _));
      return ee && Pn(p, T), C;
    }
    for (P = r(p, P); !_.done; T++, _ = y.next())
      (_ = w(P, p, T, _.value, E)),
        _ !== null &&
          (e && _.alternate !== null && P.delete(_.key === null ? T : _.key),
          (f = i(_, f, T)),
          k === null ? (C = _) : (k.sibling = _),
          (k = _));
    return (
      e &&
        P.forEach(function (M) {
          return t(p, M);
        }),
      ee && Pn(p, T),
      C
    );
  }
  function x(p, f, y, E) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Yn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case ei:
          e: {
            for (var C = y.key, k = f; k !== null; ) {
              if (k.key === C) {
                if (((C = y.type), C === Yn)) {
                  if (k.tag === 7) {
                    n(p, k.sibling),
                      (f = o(k, y.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Xt &&
                    Gc(C) === k.type)
                ) {
                  n(p, k.sibling),
                    (f = o(k, y.props)),
                    (f.ref = Jr(p, k, y)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            y.type === Yn
              ? ((f = Mn(y.props.children, p.mode, E, y.key)),
                (f.return = p),
                (p = f))
              : ((E = Mi(y.type, y.key, y.props, null, p.mode, E)),
                (E.ref = Jr(p, f, y)),
                (E.return = p),
                (p = E));
          }
          return s(p);
        case Xn:
          e: {
            for (k = y.key; f !== null; ) {
              if (f.key === k)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === y.containerInfo &&
                  f.stateNode.implementation === y.implementation
                ) {
                  n(p, f.sibling),
                    (f = o(f, y.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = xl(y, p.mode, E)), (f.return = p), (p = f);
          }
          return s(p);
        case Xt:
          return (k = y._init), x(p, f, k(y._payload), E);
      }
      if (io(y)) return S(p, f, y, E);
      if (Gr(y)) return m(p, f, y, E);
      di(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = o(f, y)), (f.return = p), (p = f))
          : (n(p, f), (f = wl(y, p.mode, E)), (f.return = p), (p = f)),
        s(p))
      : n(p, f);
  }
  return x;
}
var Rr = jp(!0),
  Lp = jp(!1),
  es = En(null),
  ts = null,
  or = null,
  uu = null;
function cu() {
  uu = or = ts = null;
}
function du(e) {
  var t = es.current;
  Z(es), (e._currentValue = t);
}
function fa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function dr(e, t) {
  (ts = e),
    (uu = or = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (je = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (uu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), or === null)) {
      if (ts === null) throw Error(b(308));
      (or = e), (ts.dependencies = { lanes: 0, firstContext: e });
    } else or = or.next = e;
  return t;
}
var Rn = null;
function fu(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e);
}
function Mp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), fu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ft(e, r)
  );
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Yt = !1;
function pu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Dp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Ft(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), fu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ft(e, n)
  );
}
function bi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Za(e, n);
  }
}
function Xc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ns(e, t, n, r) {
  var o = e.updateQueue;
  Yt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = a = null), (l = i);
    do {
      var h = l.lane,
        w = l.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var S = e,
            m = l;
          switch (((h = t), (w = n), m.tag)) {
            case 1:
              if (((S = m.payload), typeof S == "function")) {
                d = S.call(w, d, h);
                break e;
              }
              d = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = m.payload),
                (h = typeof S == "function" ? S.call(w, d, h) : S),
                h == null)
              )
                break e;
              d = oe({}, d, h);
              break e;
            case 2:
              Yt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [l]) : h.push(l));
      } else
        (w = {
          eventTime: w,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = w), (a = d)) : (c = c.next = w),
          (s |= h);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (zn |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Yc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(b(191, o));
        o.call(r);
      }
    }
}
var Go = {},
  kt = En(Go),
  Ao = En(Go),
  Oo = En(Go);
function bn(e) {
  if (e === Go) throw Error(b(174));
  return e;
}
function hu(e, t) {
  switch ((X(Oo, t), X(Ao, e), X(kt, Go), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ql(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ql(t, e));
  }
  Z(kt), X(kt, t);
}
function br() {
  Z(kt), Z(Ao), Z(Oo);
}
function Ip(e) {
  bn(Oo.current);
  var t = bn(kt.current),
    n = Ql(t, e.type);
  t !== n && (X(Ao, e), X(kt, n));
}
function mu(e) {
  Ao.current === e && (Z(kt), Z(Ao));
}
var ne = En(0);
function rs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var pl = [];
function vu() {
  for (var e = 0; e < pl.length; e++)
    pl[e]._workInProgressVersionPrimary = null;
  pl.length = 0;
}
var Ai = Vt.ReactCurrentDispatcher,
  hl = Vt.ReactCurrentBatchConfig,
  Fn = 0,
  re = null,
  de = null,
  pe = null,
  os = !1,
  ho = !1,
  _o = 0,
  i0 = 0;
function we() {
  throw Error(b(321));
}
function gu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ct(e[n], t[n])) return !1;
  return !0;
}
function yu(e, t, n, r, o, i) {
  if (
    ((Fn = i),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ai.current = e === null || e.memoizedState === null ? u0 : c0),
    (e = n(r, o)),
    ho)
  ) {
    i = 0;
    do {
      if (((ho = !1), (_o = 0), 25 <= i)) throw Error(b(301));
      (i += 1),
        (pe = de = null),
        (t.updateQueue = null),
        (Ai.current = d0),
        (e = n(r, o));
    } while (ho);
  }
  if (
    ((Ai.current = is),
    (t = de !== null && de.next !== null),
    (Fn = 0),
    (pe = de = re = null),
    (os = !1),
    t)
  )
    throw Error(b(300));
  return e;
}
function wu() {
  var e = _o !== 0;
  return (_o = 0), e;
}
function vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pe === null ? (re.memoizedState = pe = e) : (pe = pe.next = e), pe;
}
function et() {
  if (de === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = pe === null ? re.memoizedState : pe.next;
  if (t !== null) (pe = t), (de = e);
  else {
    if (e === null) throw Error(b(310));
    (de = e),
      (e = {
        memoizedState: de.memoizedState,
        baseState: de.baseState,
        baseQueue: de.baseQueue,
        queue: de.queue,
        next: null,
      }),
      pe === null ? (re.memoizedState = pe = e) : (pe = pe.next = e);
  }
  return pe;
}
function jo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ml(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = de,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((Fn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (s = r)) : (a = a.next = d),
          (re.lanes |= c),
          (zn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      ct(r, t.memoizedState) || (je = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (re.lanes |= i), (zn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vl(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    ct(i, t.memoizedState) || (je = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Fp() {}
function zp(e, t) {
  var n = re,
    r = et(),
    o = t(),
    i = !ct(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (je = !0)),
    (r = r.queue),
    xu(Vp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (pe !== null && pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Lo(9, Up.bind(null, n, r, o, t), void 0, null),
      he === null)
    )
      throw Error(b(349));
    Fn & 30 || $p(n, t, o);
  }
  return o;
}
function $p(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Up(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wp(t) && Bp(e);
}
function Vp(e, t, n) {
  return n(function () {
    Wp(t) && Bp(e);
  });
}
function Wp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function Bp(e) {
  var t = Ft(e, 1);
  t !== null && ut(t, e, 1, -1);
}
function qc(e) {
  var t = vt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = a0.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function Lo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hp() {
  return et().memoizedState;
}
function Oi(e, t, n, r) {
  var o = vt();
  (re.flags |= e),
    (o.memoizedState = Lo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ps(e, t, n, r) {
  var o = et();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (de !== null) {
    var s = de.memoizedState;
    if (((i = s.destroy), r !== null && gu(r, s.deps))) {
      o.memoizedState = Lo(t, n, i, r);
      return;
    }
  }
  (re.flags |= e), (o.memoizedState = Lo(1 | t, n, i, r));
}
function Zc(e, t) {
  return Oi(8390656, 8, e, t);
}
function xu(e, t) {
  return Ps(2048, 8, e, t);
}
function Qp(e, t) {
  return Ps(4, 2, e, t);
}
function Kp(e, t) {
  return Ps(4, 4, e, t);
}
function Gp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Xp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ps(4, 4, Gp.bind(null, t, e), n)
  );
}
function Su() {}
function Yp(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function qp(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zp(e, t, n) {
  return Fn & 21
    ? (ct(n, t) || ((n = rp()), (re.lanes |= n), (zn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n));
}
function s0(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = hl.transition;
  hl.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (hl.transition = r);
  }
}
function Jp() {
  return et().memoizedState;
}
function l0(e, t, n) {
  var r = pn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    eh(e))
  )
    th(t, n);
  else if (((n = Mp(e, t, n, r)), n !== null)) {
    var o = Te();
    ut(n, e, r, o), nh(n, t, r);
  }
}
function a0(e, t, n) {
  var r = pn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (eh(e)) th(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), ct(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), fu(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Mp(e, t, o, r)),
      n !== null && ((o = Te()), ut(n, e, r, o), nh(n, t, r));
  }
}
function eh(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function th(e, t) {
  ho = os = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function nh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Za(e, n);
  }
}
var is = {
    readContext: Je,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useInsertionEffect: we,
    useLayoutEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useMutableSource: we,
    useSyncExternalStore: we,
    useId: we,
    unstable_isNewReconciler: !1,
  },
  u0 = {
    readContext: Je,
    useCallback: function (e, t) {
      return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: Zc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Oi(4194308, 4, Gp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Oi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Oi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = vt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = vt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = l0.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = vt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: qc,
    useDebugValue: Su,
    useDeferredValue: function (e) {
      return (vt().memoizedState = e);
    },
    useTransition: function () {
      var e = qc(!1),
        t = e[0];
      return (e = s0.bind(null, e[1])), (vt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        o = vt();
      if (ee) {
        if (n === void 0) throw Error(b(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(b(349));
        Fn & 30 || $p(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Zc(Vp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Lo(9, Up.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = vt(),
        t = he.identifierPrefix;
      if (ee) {
        var n = Lt,
          r = jt;
        (n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = _o++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = i0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  c0 = {
    readContext: Je,
    useCallback: Yp,
    useContext: Je,
    useEffect: xu,
    useImperativeHandle: Xp,
    useInsertionEffect: Qp,
    useLayoutEffect: Kp,
    useMemo: qp,
    useReducer: ml,
    useRef: Hp,
    useState: function () {
      return ml(jo);
    },
    useDebugValue: Su,
    useDeferredValue: function (e) {
      var t = et();
      return Zp(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = ml(jo)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Fp,
    useSyncExternalStore: zp,
    useId: Jp,
    unstable_isNewReconciler: !1,
  },
  d0 = {
    readContext: Je,
    useCallback: Yp,
    useContext: Je,
    useEffect: xu,
    useImperativeHandle: Xp,
    useInsertionEffect: Qp,
    useLayoutEffect: Kp,
    useMemo: qp,
    useReducer: vl,
    useRef: Hp,
    useState: function () {
      return vl(jo);
    },
    useDebugValue: Su,
    useDeferredValue: function (e) {
      var t = et();
      return de === null ? (t.memoizedState = e) : Zp(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = vl(jo)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: Fp,
    useSyncExternalStore: zp,
    useId: Jp,
    unstable_isNewReconciler: !1,
  };
function rt(e, t) {
  if (e && e.defaultProps) {
    (t = oe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ns = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      o = pn(e),
      i = Mt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = dn(e, i, o)),
      t !== null && (ut(t, e, o, r), bi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      o = pn(e),
      i = Mt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = dn(e, i, o)),
      t !== null && (ut(t, e, o, r), bi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = pn(e),
      o = Mt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = dn(e, o, r)),
      t !== null && (ut(t, e, r, n), bi(t, e, r));
  },
};
function Jc(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !No(n, r) || !No(o, i)
      : !0
  );
}
function rh(e, t, n) {
  var r = !1,
    o = vn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Je(i))
      : ((o = Me(t) ? Dn : Ce.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Nr(e, o) : vn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ns),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ed(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ns.enqueueReplaceState(t, t.state, null);
}
function ha(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), pu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Je(i))
    : ((i = Me(t) ? Dn : Ce.current), (o.context = Nr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (pa(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ns.enqueueReplaceState(o, o.state, null),
      ns(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ar(e, t) {
  try {
    var n = "",
      r = t;
    do (n += zg(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ma(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var f0 = typeof WeakMap == "function" ? WeakMap : Map;
function oh(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ls || ((ls = !0), (Pa = r)), ma(e, t);
    }),
    n
  );
}
function ih(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ma(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ma(e, t),
          typeof r != "function" &&
            (fn === null ? (fn = new Set([this])) : fn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function td(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new f0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = N0.bind(null, e, t, n)), t.then(e, e));
}
function nd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Mt(-1, 1)), (t.tag = 2), dn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var p0 = Vt.ReactCurrentOwner,
  je = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? Lp(t, null, n, r) : Rr(t, e.child, n, r);
}
function od(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    dr(t, o),
    (r = yu(e, t, n, r, i, o)),
    (n = wu()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        zt(e, t, o))
      : (ee && n && su(t), (t.flags |= 1), Pe(e, t, r, o), t.child)
  );
}
function id(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !bu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), sh(e, t, i, r, o))
      : ((e = Mi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : No), n(s, r) && e.ref === t.ref)
    )
      return zt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = hn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (No(i, r) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (je = !0);
      else return (t.lanes = e.lanes), zt(e, t, o);
  }
  return va(e, t, n, r, o);
}
function lh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        X(sr, Fe),
        (Fe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          X(sr, Fe),
          (Fe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        X(sr, Fe),
        (Fe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      X(sr, Fe),
      (Fe |= r);
  return Pe(e, t, o, n), t.child;
}
function ah(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function va(e, t, n, r, o) {
  var i = Me(n) ? Dn : Ce.current;
  return (
    (i = Nr(t, i)),
    dr(t, o),
    (n = yu(e, t, n, r, i, o)),
    (r = wu()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        zt(e, t, o))
      : (ee && r && su(t), (t.flags |= 1), Pe(e, t, n, o), t.child)
  );
}
function sd(e, t, n, r, o) {
  if (Me(n)) {
    var i = !0;
    qi(t);
  } else i = !1;
  if ((dr(t, o), t.stateNode === null))
    _i(e, t), rh(t, n, r), ha(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Je(u))
      : ((u = Me(n) ? Dn : Ce.current), (u = Nr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && ed(t, s, r, u)),
      (Yt = !1);
    var h = t.memoizedState;
    (s.state = h),
      ns(t, r, s, o),
      (a = t.memoizedState),
      l !== r || h !== a || Le.current || Yt
        ? (typeof c == "function" && (pa(t, n, c, r), (a = t.memoizedState)),
          (l = Yt || Jc(t, n, l, r, h, a, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Dp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : rt(t.type, l)),
      (s.props = u),
      (d = t.pendingProps),
      (h = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Je(a))
        : ((a = Me(n) ? Dn : Ce.current), (a = Nr(t, a)));
    var w = n.getDerivedStateFromProps;
    (c =
      typeof w == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== d || h !== a) && ed(t, s, r, a)),
      (Yt = !1),
      (h = t.memoizedState),
      (s.state = h),
      ns(t, r, s, o);
    var S = t.memoizedState;
    l !== d || h !== S || Le.current || Yt
      ? (typeof w == "function" && (pa(t, n, w, r), (S = t.memoizedState)),
        (u = Yt || Jc(t, n, u, r, h, S, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, S, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, S, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (s.props = r),
        (s.state = S),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ga(e, t, n, r, i, o);
}
function ga(e, t, n, r, o, i) {
  ah(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Hc(t, n, !1), zt(e, t, i);
  (r = t.stateNode), (p0.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Rr(t, e.child, null, i)), (t.child = Rr(t, null, l, i)))
      : Pe(e, t, l, i),
    (t.memoizedState = r.state),
    o && Hc(t, n, !0),
    t.child
  );
}
function uh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bc(e, t.context, !1),
    hu(e, t.containerInfo);
}
function ld(e, t, n, r, o) {
  return Tr(), au(o), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var ya = { dehydrated: null, treeContext: null, retryLane: 0 };
function wa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ch(e, t, n) {
  var r = t.pendingProps,
    o = ne.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    X(ne, o & 1),
    e === null)
  )
    return (
      da(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = bs(s, r, 0, null)),
              (e = Mn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = wa(n)),
              (t.memoizedState = ya),
              e)
            : Eu(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return h0(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = hn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = hn(l, i)) : ((i = Mn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? wa(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ya),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = hn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Eu(e, t) {
  return (
    (t = bs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function fi(e, t, n, r) {
  return (
    r !== null && au(r),
    Rr(t, e.child, null, n),
    (e = Eu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function h0(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gl(Error(b(422)))), fi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = bs({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Mn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Rr(t, e.child, null, s),
        (t.child.memoizedState = wa(s)),
        (t.memoizedState = ya),
        i);
  if (!(t.mode & 1)) return fi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(b(419))), (r = gl(i, r, void 0)), fi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), je || l)) {
    if (((r = he), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ft(e, o), ut(r, e, o, -1));
    }
    return Ru(), (r = gl(Error(b(421)))), fi(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = T0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      ($e = cn(o.nextSibling)),
      (Ue = t),
      (ee = !0),
      (lt = null),
      e !== null &&
        ((Xe[Ye++] = jt),
        (Xe[Ye++] = Lt),
        (Xe[Ye++] = In),
        (jt = e.id),
        (Lt = e.overflow),
        (In = t)),
      (t = Eu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ad(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fa(e.return, t, n);
}
function yl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function dh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Pe(e, t, r.children, n), (r = ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ad(e, n, t);
        else if (e.tag === 19) ad(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((X(ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && rs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          yl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && rs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        yl(t, !0, n, null, i);
        break;
      case "together":
        yl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _i(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(b(153));
  if (t.child !== null) {
    for (
      e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = hn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function m0(e, t, n) {
  switch (t.tag) {
    case 3:
      uh(t), Tr();
      break;
    case 5:
      Ip(t);
      break;
    case 1:
      Me(t.type) && qi(t);
      break;
    case 4:
      hu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      X(es, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (X(ne, ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ch(e, t, n)
          : (X(ne, ne.current & 1),
            (e = zt(e, t, n)),
            e !== null ? e.sibling : null);
      X(ne, ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return dh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        X(ne, ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), lh(e, t, n);
  }
  return zt(e, t, n);
}
var fh, xa, ph, hh;
fh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
xa = function () {};
ph = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), bn(kt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Vl(e, o)), (r = Vl(e, r)), (i = []);
        break;
      case "select":
        (o = oe({}, o, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Hl(e, o)), (r = Hl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Xi);
    }
    Kl(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (wo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (wo.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && q("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
hh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function eo(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function v0(e, t, n) {
  var r = t.pendingProps;
  switch ((lu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return xe(t), null;
    case 1:
      return Me(t.type) && Yi(), xe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        br(),
        Z(Le),
        Z(Ce),
        vu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ci(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), lt !== null && (Ra(lt), (lt = null)))),
        xa(e, t),
        xe(t),
        null
      );
    case 5:
      mu(t);
      var o = bn(Oo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ph(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(b(166));
          return xe(t), null;
        }
        if (((e = bn(kt.current)), ci(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[xt] = t), (r[bo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < lo.length; o++) q(lo[o], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              gc(r, i), q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                q("invalid", r);
              break;
            case "textarea":
              wc(r, i), q("invalid", r);
          }
          Kl(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      ui(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      ui(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : wo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  q("scroll", r);
            }
          switch (n) {
            case "input":
              ti(r), yc(r, i, !0);
              break;
            case "textarea":
              ti(r), xc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Xi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[xt] = t),
            (e[bo] = r),
            fh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Gl(n, r)), n)) {
              case "dialog":
                q("cancel", e), q("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < lo.length; o++) q(lo[o], e);
                o = r;
                break;
              case "source":
                q("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (o = r);
                break;
              case "details":
                q("toggle", e), (o = r);
                break;
              case "input":
                gc(e, r), (o = Vl(e, r)), q("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = oe({}, r, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                wc(e, r), (o = Hl(e, r)), q("invalid", e);
                break;
              default:
                o = r;
            }
            Kl(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Hf(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Wf(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && xo(e, a)
                    : typeof a == "number" && xo(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (wo.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && q("scroll", e)
                      : a != null && Qa(e, i, a, s));
              }
            switch (n) {
              case "input":
                ti(e), yc(e, r, !1);
                break;
              case "textarea":
                ti(e), xc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? lr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      lr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Xi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) hh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(b(166));
        if (((n = bn(Oo.current)), bn(kt.current), ci(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xt] = t),
            (i = r.nodeValue !== n) && ((e = Ue), e !== null))
          )
            switch (e.tag) {
              case 3:
                ui(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ui(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xt] = t),
            (t.stateNode = r);
      }
      return xe(t), null;
    case 13:
      if (
        (Z(ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && $e !== null && t.mode & 1 && !(t.flags & 128))
          _p(), Tr(), (t.flags |= 98560), (i = !1);
        else if (((i = ci(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(b(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(b(317));
            i[xt] = t;
          } else
            Tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          xe(t), (i = !1);
        } else lt !== null && (Ra(lt), (lt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ne.current & 1 ? fe === 0 && (fe = 3) : Ru())),
          t.updateQueue !== null && (t.flags |= 4),
          xe(t),
          null);
    case 4:
      return (
        br(), xa(e, t), e === null && To(t.stateNode.containerInfo), xe(t), null
      );
    case 10:
      return du(t.type._context), xe(t), null;
    case 17:
      return Me(t.type) && Yi(), xe(t), null;
    case 19:
      if ((Z(ne), (i = t.memoizedState), i === null)) return xe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) eo(i, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = rs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    eo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return X(ne, (ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ue() > Or &&
            ((t.flags |= 128), (r = !0), eo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = rs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              eo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ee)
            )
              return xe(t), null;
          } else
            2 * ue() - i.renderingStartTime > Or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), eo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ue()),
          (t.sibling = null),
          (n = ne.current),
          X(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (xe(t), null);
    case 22:
    case 23:
      return (
        Tu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Fe & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function g0(e, t) {
  switch ((lu(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && Yi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        br(),
        Z(Le),
        Z(Ce),
        vu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mu(t), null;
    case 13:
      if ((Z(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(b(340));
        Tr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(ne), null;
    case 4:
      return br(), null;
    case 10:
      return du(t.type._context), null;
    case 22:
    case 23:
      return Tu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var pi = !1,
  Ee = !1,
  y0 = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function ir(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        le(e, t, r);
      }
    else n.current = null;
}
function Sa(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var ud = !1;
function w0(e, t) {
  if (((oa = Qi), (e = wp()), iu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var w;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (w = d.firstChild) !== null;

            )
              (h = d), (d = w);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === o && (l = s),
                h === i && ++c === r && (a = s),
                (w = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = w;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ia = { focusedElem: e, selectionRange: n }, Qi = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var m = S.memoizedProps,
                    x = S.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : rt(t.type, m),
                      x
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(b(163));
            }
        } catch (E) {
          le(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (S = ud), (ud = !1), S;
}
function mo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Sa(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ts(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ea(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function mh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), mh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xt], delete t[bo], delete t[aa], delete t[t0], delete t[n0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ca(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Xi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ca(e, t, n), e = e.sibling; e !== null; ) Ca(e, t, n), (e = e.sibling);
}
function ka(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ka(e, t, n), e = e.sibling; e !== null; ) ka(e, t, n), (e = e.sibling);
}
var me = null,
  st = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) gh(e, t, n), (n = n.sibling);
}
function gh(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == "function")
    try {
      Ct.onCommitFiberUnmount(ws, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || ir(n, t);
    case 6:
      var r = me,
        o = st;
      (me = null),
        Wt(e, t, n),
        (me = r),
        (st = o),
        me !== null &&
          (st
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (st
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? dl(e.parentNode, n)
              : e.nodeType === 1 && dl(e, n),
            ko(e))
          : dl(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (o = st),
        (me = n.stateNode.containerInfo),
        (st = !0),
        Wt(e, t, n),
        (me = r),
        (st = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ee &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Sa(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (
        !Ee &&
        (ir(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          le(n, t, l);
        }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), Wt(e, t, n), (Ee = r))
        : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function dd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new y0()),
      t.forEach(function (r) {
        var o = R0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function nt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (me = l.stateNode), (st = !1);
              break e;
            case 3:
              (me = l.stateNode.containerInfo), (st = !0);
              break e;
            case 4:
              (me = l.stateNode.containerInfo), (st = !0);
              break e;
          }
          l = l.return;
        }
        if (me === null) throw Error(b(160));
        gh(i, s, o), (me = null), (st = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        le(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) yh(t, e), (t = t.sibling);
}
function yh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((nt(t, e), mt(e), r & 4)) {
        try {
          mo(3, e, e.return), Ts(3, e);
        } catch (m) {
          le(e, e.return, m);
        }
        try {
          mo(5, e, e.return);
        } catch (m) {
          le(e, e.return, m);
        }
      }
      break;
    case 1:
      nt(t, e), mt(e), r & 512 && n !== null && ir(n, n.return);
      break;
    case 5:
      if (
        (nt(t, e),
        mt(e),
        r & 512 && n !== null && ir(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          xo(o, "");
        } catch (m) {
          le(e, e.return, m);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && $f(o, i),
              Gl(l, s);
            var u = Gl(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                d = a[s + 1];
              c === "style"
                ? Hf(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Wf(o, d)
                : c === "children"
                ? xo(o, d)
                : Qa(o, c, d, u);
            }
            switch (l) {
              case "input":
                Wl(o, i);
                break;
              case "textarea":
                Uf(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? lr(o, !!i.multiple, w, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? lr(o, !!i.multiple, i.defaultValue, !0)
                      : lr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[bo] = i;
          } catch (m) {
            le(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((nt(t, e), mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(b(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (m) {
          le(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (nt(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ko(t.containerInfo);
        } catch (m) {
          le(e, e.return, m);
        }
      break;
    case 4:
      nt(t, e), mt(e);
      break;
    case 13:
      nt(t, e),
        mt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Pu = ue())),
        r & 4 && dd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ee = (u = Ee) || c), nt(t, e), (Ee = u)) : nt(t, e),
        mt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (O = e, c = e.child; c !== null; ) {
            for (d = O = c; O !== null; ) {
              switch (((h = O), (w = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, h, h.return);
                  break;
                case 1:
                  ir(h, h.return);
                  var S = h.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (m) {
                      le(r, n, m);
                    }
                  }
                  break;
                case 5:
                  ir(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    pd(d);
                    continue;
                  }
              }
              w !== null ? ((w.return = h), (O = w)) : pd(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Bf("display", s)));
              } catch (m) {
                le(e, e.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (m) {
                le(e, e.return, m);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      nt(t, e), mt(e), r & 4 && dd(e);
      break;
    case 21:
      break;
    default:
      nt(t, e), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(b(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (xo(o, ""), (r.flags &= -33));
          var i = cd(e);
          ka(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = cd(e);
          Ca(e, l, s);
          break;
        default:
          throw Error(b(161));
      }
    } catch (a) {
      le(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function x0(e, t, n) {
  (O = e), wh(e);
}
function wh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || pi;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Ee;
        l = pi;
        var u = Ee;
        if (((pi = s), (Ee = a) && !u))
          for (O = o; O !== null; )
            (s = O),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? hd(o)
                : a !== null
                ? ((a.return = s), (O = a))
                : hd(o);
        for (; i !== null; ) (O = i), wh(i), (i = i.sibling);
        (O = o), (pi = l), (Ee = u);
      }
      fd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (O = i)) : fd(e);
  }
}
function fd(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || Ts(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : rt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Yc(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Yc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && ko(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(b(163));
          }
        Ee || (t.flags & 512 && Ea(t));
      } catch (h) {
        le(t, t.return, h);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function pd(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function hd(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ts(4, t);
          } catch (a) {
            le(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              le(t, o, a);
            }
          }
          var i = t.return;
          try {
            Ea(t);
          } catch (a) {
            le(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ea(t);
          } catch (a) {
            le(t, s, a);
          }
      }
    } catch (a) {
      le(t, t.return, a);
    }
    if (t === e) {
      O = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (O = l);
      break;
    }
    O = t.return;
  }
}
var S0 = Math.ceil,
  ss = Vt.ReactCurrentDispatcher,
  Cu = Vt.ReactCurrentOwner,
  Ze = Vt.ReactCurrentBatchConfig,
  B = 0,
  he = null,
  ce = null,
  ve = 0,
  Fe = 0,
  sr = En(0),
  fe = 0,
  Mo = null,
  zn = 0,
  Rs = 0,
  ku = 0,
  vo = null,
  _e = null,
  Pu = 0,
  Or = 1 / 0,
  Ot = null,
  ls = !1,
  Pa = null,
  fn = null,
  hi = !1,
  sn = null,
  as = 0,
  go = 0,
  Na = null,
  ji = -1,
  Li = 0;
function Te() {
  return B & 6 ? ue() : ji !== -1 ? ji : (ji = ue());
}
function pn(e) {
  return e.mode & 1
    ? B & 2 && ve !== 0
      ? ve & -ve
      : o0.transition !== null
      ? (Li === 0 && (Li = rp()), Li)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cp(e.type))),
        e)
    : 1;
}
function ut(e, t, n, r) {
  if (50 < go) throw ((go = 0), (Na = null), Error(b(185)));
  Ho(e, n, r),
    (!(B & 2) || e !== he) &&
      (e === he && (!(B & 2) && (Rs |= n), fe === 4 && Zt(e, ve)),
      De(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((Or = ue() + 500), ks && Cn()));
}
function De(e, t) {
  var n = e.callbackNode;
  oy(e, t);
  var r = Hi(e, e === he ? ve : 0);
  if (r === 0)
    n !== null && Cc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cc(n), t === 1))
      e.tag === 0 ? r0(md.bind(null, e)) : bp(md.bind(null, e)),
        Jy(function () {
          !(B & 6) && Cn();
        }),
        (n = null);
    else {
      switch (op(r)) {
        case 1:
          n = qa;
          break;
        case 4:
          n = tp;
          break;
        case 16:
          n = Bi;
          break;
        case 536870912:
          n = np;
          break;
        default:
          n = Bi;
      }
      n = Th(n, xh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function xh(e, t) {
  if (((ji = -1), (Li = 0), B & 6)) throw Error(b(327));
  var n = e.callbackNode;
  if (fr() && e.callbackNode !== n) return null;
  var r = Hi(e, e === he ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = us(e, r);
  else {
    t = r;
    var o = B;
    B |= 2;
    var i = Eh();
    (he !== e || ve !== t) && ((Ot = null), (Or = ue() + 500), Ln(e, t));
    do
      try {
        k0();
        break;
      } catch (l) {
        Sh(e, l);
      }
    while (!0);
    cu(),
      (ss.current = i),
      (B = o),
      ce !== null ? (t = 0) : ((he = null), (ve = 0), (t = fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Jl(e)), o !== 0 && ((r = o), (t = Ta(e, o)))), t === 1)
    )
      throw ((n = Mo), Ln(e, 0), Zt(e, r), De(e, ue()), n);
    if (t === 6) Zt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !E0(o) &&
          ((t = us(e, r)),
          t === 2 && ((i = Jl(e)), i !== 0 && ((r = i), (t = Ta(e, i)))),
          t === 1))
      )
        throw ((n = Mo), Ln(e, 0), Zt(e, r), De(e, ue()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          Nn(e, _e, Ot);
          break;
        case 3:
          if (
            (Zt(e, r), (r & 130023424) === r && ((t = Pu + 500 - ue()), 10 < t))
          ) {
            if (Hi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = la(Nn.bind(null, e, _e, Ot), t);
            break;
          }
          Nn(e, _e, Ot);
          break;
        case 4:
          if ((Zt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - at(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ue() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * S0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = la(Nn.bind(null, e, _e, Ot), r);
            break;
          }
          Nn(e, _e, Ot);
          break;
        case 5:
          Nn(e, _e, Ot);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return De(e, ue()), e.callbackNode === n ? xh.bind(null, e) : null;
}
function Ta(e, t) {
  var n = vo;
  return (
    e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
    (e = us(e, t)),
    e !== 2 && ((t = _e), (_e = n), t !== null && Ra(t)),
    e
  );
}
function Ra(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}
function E0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!ct(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Zt(e, t) {
  for (
    t &= ~ku,
      t &= ~Rs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - at(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function md(e) {
  if (B & 6) throw Error(b(327));
  fr();
  var t = Hi(e, 0);
  if (!(t & 1)) return De(e, ue()), null;
  var n = us(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Jl(e);
    r !== 0 && ((t = r), (n = Ta(e, r)));
  }
  if (n === 1) throw ((n = Mo), Ln(e, 0), Zt(e, t), De(e, ue()), n);
  if (n === 6) throw Error(b(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nn(e, _e, Ot),
    De(e, ue()),
    null
  );
}
function Nu(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((Or = ue() + 500), ks && Cn());
  }
}
function $n(e) {
  sn !== null && sn.tag === 0 && !(B & 6) && fr();
  var t = B;
  B |= 1;
  var n = Ze.transition,
    r = G;
  try {
    if (((Ze.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (Ze.transition = n), (B = t), !(B & 6) && Cn();
  }
}
function Tu() {
  (Fe = sr.current), Z(sr);
}
function Ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zy(n)), ce !== null))
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch ((lu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Yi();
          break;
        case 3:
          br(), Z(Le), Z(Ce), vu();
          break;
        case 5:
          mu(r);
          break;
        case 4:
          br();
          break;
        case 13:
          Z(ne);
          break;
        case 19:
          Z(ne);
          break;
        case 10:
          du(r.type._context);
          break;
        case 22:
        case 23:
          Tu();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (ce = e = hn(e.current, null)),
    (ve = Fe = t),
    (fe = 0),
    (Mo = null),
    (ku = Rs = zn = 0),
    (_e = vo = null),
    Rn !== null)
  ) {
    for (t = 0; t < Rn.length; t++)
      if (((n = Rn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Rn = null;
  }
  return e;
}
function Sh(e, t) {
  do {
    var n = ce;
    try {
      if ((cu(), (Ai.current = is), os)) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        os = !1;
      }
      if (
        ((Fn = 0),
        (pe = de = re = null),
        (ho = !1),
        (_o = 0),
        (Cu.current = null),
        n === null || n.return === null)
      ) {
        (fe = 1), (Mo = t), (ce = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ve),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var w = nd(s);
          if (w !== null) {
            (w.flags &= -257),
              rd(w, s, l, i, t),
              w.mode & 1 && td(i, u, t),
              (t = w),
              (a = u);
            var S = t.updateQueue;
            if (S === null) {
              var m = new Set();
              m.add(a), (t.updateQueue = m);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              td(i, u, t), Ru();
              break e;
            }
            a = Error(b(426));
          }
        } else if (ee && l.mode & 1) {
          var x = nd(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              rd(x, s, l, i, t),
              au(Ar(a, l));
            break e;
          }
        }
        (i = a = Ar(a, l)),
          fe !== 4 && (fe = 2),
          vo === null ? (vo = [i]) : vo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = oh(i, a, t);
              Xc(i, p);
              break e;
            case 1:
              l = a;
              var f = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (fn === null || !fn.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = ih(i, l, t);
                Xc(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kh(n);
    } catch (C) {
      (t = C), ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Eh() {
  var e = ss.current;
  return (ss.current = is), e === null ? is : e;
}
function Ru() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    he === null || (!(zn & 268435455) && !(Rs & 268435455)) || Zt(he, ve);
}
function us(e, t) {
  var n = B;
  B |= 2;
  var r = Eh();
  (he !== e || ve !== t) && ((Ot = null), Ln(e, t));
  do
    try {
      C0();
      break;
    } catch (o) {
      Sh(e, o);
    }
  while (!0);
  if ((cu(), (B = n), (ss.current = r), ce !== null)) throw Error(b(261));
  return (he = null), (ve = 0), fe;
}
function C0() {
  for (; ce !== null; ) Ch(ce);
}
function k0() {
  for (; ce !== null && !Xg(); ) Ch(ce);
}
function Ch(e) {
  var t = Nh(e.alternate, e, Fe);
  (e.memoizedProps = e.pendingProps),
    t === null ? kh(e) : (ce = t),
    (Cu.current = null);
}
function kh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = g0(n, t)), n !== null)) {
        (n.flags &= 32767), (ce = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (fe = 6), (ce = null);
        return;
      }
    } else if (((n = v0(n, t, Fe)), n !== null)) {
      ce = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function Nn(e, t, n) {
  var r = G,
    o = Ze.transition;
  try {
    (Ze.transition = null), (G = 1), P0(e, t, n, r);
  } finally {
    (Ze.transition = o), (G = r);
  }
  return null;
}
function P0(e, t, n, r) {
  do fr();
  while (sn !== null);
  if (B & 6) throw Error(b(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(b(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (iy(e, i),
    e === he && ((ce = he = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      hi ||
      ((hi = !0),
      Th(Bi, function () {
        return fr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ze.transition), (Ze.transition = null);
    var s = G;
    G = 1;
    var l = B;
    (B |= 4),
      (Cu.current = null),
      w0(e, n),
      yh(n, e),
      Hy(ia),
      (Qi = !!oa),
      (ia = oa = null),
      (e.current = n),
      x0(n),
      Yg(),
      (B = l),
      (G = s),
      (Ze.transition = i);
  } else e.current = n;
  if (
    (hi && ((hi = !1), (sn = e), (as = o)),
    (i = e.pendingLanes),
    i === 0 && (fn = null),
    Jg(n.stateNode),
    De(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ls) throw ((ls = !1), (e = Pa), (Pa = null), e);
  return (
    as & 1 && e.tag !== 0 && fr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Na ? go++ : ((go = 0), (Na = e))) : (go = 0),
    Cn(),
    null
  );
}
function fr() {
  if (sn !== null) {
    var e = op(as),
      t = Ze.transition,
      n = G;
    try {
      if (((Ze.transition = null), (G = 16 > e ? 16 : e), sn === null))
        var r = !1;
      else {
        if (((e = sn), (sn = null), (as = 0), B & 6)) throw Error(b(331));
        var o = B;
        for (B |= 4, O = e.current; O !== null; ) {
          var i = O,
            s = i.child;
          if (O.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (O = u; O !== null; ) {
                  var c = O;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mo(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (O = d);
                  else
                    for (; O !== null; ) {
                      c = O;
                      var h = c.sibling,
                        w = c.return;
                      if ((mh(c), c === u)) {
                        O = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = w), (O = h);
                        break;
                      }
                      O = w;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var m = S.child;
                if (m !== null) {
                  S.child = null;
                  do {
                    var x = m.sibling;
                    (m.sibling = null), (m = x);
                  } while (m !== null);
                }
              }
              O = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (O = s);
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mo(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (O = p);
                break e;
              }
              O = i.return;
            }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          s = O;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (O = y);
          else
            e: for (s = f; O !== null; ) {
              if (((l = O), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ts(9, l);
                  }
                } catch (C) {
                  le(l, l.return, C);
                }
              if (l === s) {
                O = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (O = E);
                break e;
              }
              O = l.return;
            }
        }
        if (
          ((B = o), Cn(), Ct && typeof Ct.onPostCommitFiberRoot == "function")
        )
          try {
            Ct.onPostCommitFiberRoot(ws, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (Ze.transition = t);
    }
  }
  return !1;
}
function vd(e, t, n) {
  (t = Ar(n, t)),
    (t = oh(e, t, 1)),
    (e = dn(e, t, 1)),
    (t = Te()),
    e !== null && (Ho(e, 1, t), De(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) vd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (fn === null || !fn.has(r)))
        ) {
          (e = Ar(n, e)),
            (e = ih(t, e, 1)),
            (t = dn(t, e, 1)),
            (e = Te()),
            t !== null && (Ho(t, 1, e), De(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function N0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (ve & n) === n &&
      (fe === 4 || (fe === 3 && (ve & 130023424) === ve && 500 > ue() - Pu)
        ? Ln(e, 0)
        : (ku |= n)),
    De(e, t);
}
function Ph(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = oi), (oi <<= 1), !(oi & 130023424) && (oi = 4194304))
      : (t = 1));
  var n = Te();
  (e = Ft(e, t)), e !== null && (Ho(e, t, n), De(e, n));
}
function T0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ph(e, n);
}
function R0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(b(314));
  }
  r !== null && r.delete(t), Ph(e, n);
}
var Nh;
Nh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Le.current) je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (je = !1), m0(e, t, n);
      je = !!(e.flags & 131072);
    }
  else (je = !1), ee && t.flags & 1048576 && Ap(t, Ji, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _i(e, t), (e = t.pendingProps);
      var o = Nr(t, Ce.current);
      dr(t, n), (o = yu(null, t, r, e, o, n));
      var i = wu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((i = !0), qi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            pu(t),
            (o.updater = Ns),
            (t.stateNode = o),
            (o._reactInternals = t),
            ha(t, r, e, n),
            (t = ga(null, t, r, !0, i, n)))
          : ((t.tag = 0), ee && i && su(t), Pe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_i(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = A0(r)),
          (e = rt(r, e)),
          o)
        ) {
          case 0:
            t = va(null, t, r, e, n);
            break e;
          case 1:
            t = sd(null, t, r, e, n);
            break e;
          case 11:
            t = od(null, t, r, e, n);
            break e;
          case 14:
            t = id(null, t, r, rt(r.type, e), n);
            break e;
        }
        throw Error(b(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : rt(r, o)),
        va(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : rt(r, o)),
        sd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((uh(t), e === null)) throw Error(b(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Dp(e, t),
          ns(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Ar(Error(b(423)), t)), (t = ld(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Ar(Error(b(424)), t)), (t = ld(e, t, r, n, o));
            break e;
          } else
            for (
              $e = cn(t.stateNode.containerInfo.firstChild),
                Ue = t,
                ee = !0,
                lt = null,
                n = Lp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Tr(), r === o)) {
            t = zt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ip(t),
        e === null && da(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        sa(r, o) ? (s = null) : i !== null && sa(r, i) && (t.flags |= 32),
        ah(e, t),
        Pe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && da(t), null;
    case 13:
      return ch(e, t, n);
    case 4:
      return (
        hu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Rr(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : rt(r, o)),
        od(e, t, r, o, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          X(es, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (ct(i.value, s)) {
            if (i.children === o.children && !Le.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Mt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      fa(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(b(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  fa(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Pe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        dr(t, n),
        (o = Je(o)),
        (r = r(o)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = rt(r, t.pendingProps)),
        (o = rt(r.type, o)),
        id(e, t, r, o, n)
      );
    case 15:
      return sh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : rt(r, o)),
        _i(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), qi(t)) : (e = !1),
        dr(t, n),
        rh(t, r, o),
        ha(t, r, o, n),
        ga(null, t, r, !0, e, n)
      );
    case 19:
      return dh(e, t, n);
    case 22:
      return lh(e, t, n);
  }
  throw Error(b(156, t.tag));
};
function Th(e, t) {
  return ep(e, t);
}
function b0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function qe(e, t, n, r) {
  return new b0(e, t, n, r);
}
function bu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function A0(e) {
  if (typeof e == "function") return bu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ga)) return 11;
    if (e === Xa) return 14;
  }
  return 2;
}
function hn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = qe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Mi(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) bu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Yn:
        return Mn(n.children, o, i, t);
      case Ka:
        (s = 8), (o |= 8);
        break;
      case Fl:
        return (
          (e = qe(12, n, t, o | 2)), (e.elementType = Fl), (e.lanes = i), e
        );
      case zl:
        return (e = qe(13, n, t, o)), (e.elementType = zl), (e.lanes = i), e;
      case $l:
        return (e = qe(19, n, t, o)), (e.elementType = $l), (e.lanes = i), e;
      case If:
        return bs(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Mf:
              s = 10;
              break e;
            case Df:
              s = 9;
              break e;
            case Ga:
              s = 11;
              break e;
            case Xa:
              s = 14;
              break e;
            case Xt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(b(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = qe(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Mn(e, t, n, r) {
  return (e = qe(7, e, r, t)), (e.lanes = n), e;
}
function bs(e, t, n, r) {
  return (
    (e = qe(22, e, r, t)),
    (e.elementType = If),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function wl(e, t, n) {
  return (e = qe(6, e, null, t)), (e.lanes = n), e;
}
function xl(e, t, n) {
  return (
    (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function O0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = el(0)),
    (this.expirationTimes = el(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = el(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Au(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new O0(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = qe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pu(i),
    e
  );
}
function _0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Rh(e) {
  if (!e) return vn;
  e = e._reactInternals;
  e: {
    if (Bn(e) !== e || e.tag !== 1) throw Error(b(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(b(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return Rp(e, n, t);
  }
  return t;
}
function bh(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Au(n, r, !0, e, o, i, s, l, a)),
    (e.context = Rh(null)),
    (n = e.current),
    (r = Te()),
    (o = pn(n)),
    (i = Mt(r, o)),
    (i.callback = t ?? null),
    dn(n, i, o),
    (e.current.lanes = o),
    Ho(e, o, r),
    De(e, r),
    e
  );
}
function As(e, t, n, r) {
  var o = t.current,
    i = Te(),
    s = pn(o);
  return (
    (n = Rh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dn(o, t, s)),
    e !== null && (ut(e, o, s, i), bi(e, o, s)),
    s
  );
}
function cs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ou(e, t) {
  gd(e, t), (e = e.alternate) && gd(e, t);
}
function j0() {
  return null;
}
var Ah =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _u(e) {
  this._internalRoot = e;
}
Os.prototype.render = _u.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  As(e, t, null, null);
};
Os.prototype.unmount = _u.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $n(function () {
      As(null, e, null, null);
    }),
      (t[It] = null);
  }
};
function Os(e) {
  this._internalRoot = e;
}
Os.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = lp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
    qt.splice(n, 0, e), n === 0 && up(e);
  }
};
function ju(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _s(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function yd() {}
function L0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = cs(s);
        i.call(u);
      };
    }
    var s = bh(t, r, e, 0, null, !1, !1, "", yd);
    return (
      (e._reactRootContainer = s),
      (e[It] = s.current),
      To(e.nodeType === 8 ? e.parentNode : e),
      $n(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = cs(a);
      l.call(u);
    };
  }
  var a = Au(e, 0, !1, null, null, !1, !1, "", yd);
  return (
    (e._reactRootContainer = a),
    (e[It] = a.current),
    To(e.nodeType === 8 ? e.parentNode : e),
    $n(function () {
      As(t, a, n, r);
    }),
    a
  );
}
function js(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = cs(s);
        l.call(a);
      };
    }
    As(t, s, e, o);
  } else s = L0(n, t, e, o, r);
  return cs(s);
}
ip = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = so(t.pendingLanes);
        n !== 0 &&
          (Za(t, n | 1), De(t, ue()), !(B & 6) && ((Or = ue() + 500), Cn()));
      }
      break;
    case 13:
      $n(function () {
        var r = Ft(e, 1);
        if (r !== null) {
          var o = Te();
          ut(r, e, 1, o);
        }
      }),
        Ou(e, 1);
  }
};
Ja = function (e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Te();
      ut(t, e, 134217728, n);
    }
    Ou(e, 134217728);
  }
};
sp = function (e) {
  if (e.tag === 13) {
    var t = pn(e),
      n = Ft(e, t);
    if (n !== null) {
      var r = Te();
      ut(n, e, t, r);
    }
    Ou(e, t);
  }
};
lp = function () {
  return G;
};
ap = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
Yl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Wl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Cs(r);
            if (!o) throw Error(b(90));
            zf(r), Wl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Uf(e, n);
      break;
    case "select":
      (t = n.value), t != null && lr(e, !!n.multiple, t, !1);
  }
};
Gf = Nu;
Xf = $n;
var M0 = { usingClientEntryPoint: !1, Events: [Ko, er, Cs, Qf, Kf, Nu] },
  to = {
    findFiberByHostInstance: Tn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  D0 = {
    bundleType: to.bundleType,
    version: to.version,
    rendererPackageName: to.rendererPackageName,
    rendererConfig: to.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Zf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: to.findFiberByHostInstance || j0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!mi.isDisabled && mi.supportsFiber)
    try {
      (ws = mi.inject(D0)), (Ct = mi);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M0;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ju(t)) throw Error(b(200));
  return _0(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!ju(e)) throw Error(b(299));
  var n = !1,
    r = "",
    o = Ah;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Au(e, 1, !1, null, null, n, !1, r, o)),
    (e[It] = t.current),
    To(e.nodeType === 8 ? e.parentNode : e),
    new _u(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(b(188))
      : ((e = Object.keys(e).join(",")), Error(b(268, e)));
  return (e = Zf(t)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return $n(e);
};
He.hydrate = function (e, t, n) {
  if (!_s(t)) throw Error(b(200));
  return js(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!ju(e)) throw Error(b(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Ah;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = bh(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[It] = t.current),
    To(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Os(t);
};
He.render = function (e, t, n) {
  if (!_s(t)) throw Error(b(200));
  return js(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!_s(e)) throw Error(b(40));
  return e._reactRootContainer
    ? ($n(function () {
        js(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[It] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = Nu;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_s(n)) throw Error(b(200));
  if (e == null || e._reactInternals === void 0) throw Error(b(38));
  return js(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function Oh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oh);
    } catch (e) {
      console.error(e);
    }
}
Oh(), (Of.exports = He);
var Xo = Of.exports;
const I0 = yf(Xo);
var _h,
  wd = Xo;
(_h = wd.createRoot), wd.hydrateRoot;
function F0(e, t) {
  if (e instanceof RegExp) return { keys: !1, pattern: e };
  var n,
    r,
    o,
    i,
    s = [],
    l = "",
    a = e.split("/");
  for (a[0] || a.shift(); (o = a.shift()); )
    (n = o[0]),
      n === "*"
        ? (s.push(n), (l += o[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : n === ":"
        ? ((r = o.indexOf("?", 1)),
          (i = o.indexOf(".", 1)),
          s.push(o.substring(1, ~r ? r : ~i ? i : o.length)),
          (l += ~r && !~i ? "(?:/([^/]+?))?" : "/([^/]+?)"),
          ~i && (l += (~r ? "?" : "") + "\\" + o.substring(i)))
        : (l += "/" + o);
  return {
    keys: s,
    pattern: new RegExp("^" + l + (t ? "(?=$|/)" : "/?$"), "i"),
  };
}
var jh = { exports: {} },
  Lh = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _r = v;
function z0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $0 = typeof Object.is == "function" ? Object.is : z0,
  U0 = _r.useState,
  V0 = _r.useEffect,
  W0 = _r.useLayoutEffect,
  B0 = _r.useDebugValue;
function H0(e, t) {
  var n = t(),
    r = U0({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    W0(
      function () {
        (o.value = n), (o.getSnapshot = t), Sl(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    V0(
      function () {
        return (
          Sl(o) && i({ inst: o }),
          e(function () {
            Sl(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    B0(n),
    n
  );
}
function Sl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$0(e, n);
  } catch {
    return !0;
  }
}
function Q0(e, t) {
  return t();
}
var K0 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Q0
    : H0;
Lh.useSyncExternalStore =
  _r.useSyncExternalStore !== void 0 ? _r.useSyncExternalStore : K0;
jh.exports = Lh;
var G0 = jh.exports;
const X0 = bf.useInsertionEffect,
  Y0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  q0 = Y0 ? v.useLayoutEffect : v.useEffect,
  Z0 = X0 || q0,
  Mh = (e) => {
    const t = v.useRef([e, (...n) => t[0](...n)]).current;
    return (
      Z0(() => {
        t[0] = e;
      }),
      t[1]
    );
  },
  J0 = "popstate",
  Lu = "pushState",
  Mu = "replaceState",
  ew = "hashchange",
  xd = [J0, Lu, Mu, ew],
  tw = (e) => {
    for (const t of xd) addEventListener(t, e);
    return () => {
      for (const t of xd) removeEventListener(t, e);
    };
  },
  Dh = (e, t) => G0.useSyncExternalStore(tw, e, t),
  nw = () => location.search,
  rw = ({ ssrSearch: e = "" } = {}) => Dh(nw, () => e),
  Sd = () => location.pathname,
  ow = ({ ssrPath: e } = {}) => Dh(Sd, e ? () => e : Sd),
  iw = (e, { replace: t = !1, state: n = null } = {}) =>
    history[t ? Mu : Lu](n, "", e),
  sw = (e = {}) => [ow(e), iw],
  Ed = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Ed] > "u") {
  for (const e of [Lu, Mu]) {
    const t = history[e];
    history[e] = function () {
      const n = t.apply(this, arguments),
        r = new Event(e);
      return (r.arguments = arguments), dispatchEvent(r), n;
    };
  }
  Object.defineProperty(window, Ed, { value: !0 });
}
const lw = (e, t) =>
    t.toLowerCase().indexOf(e.toLowerCase())
      ? "~" + t
      : t.slice(e.length) || "/",
  Ih = (e = "") => (e === "/" ? "" : e),
  aw = (e, t) => (e[0] === "~" ? e.slice(1) : Ih(t) + e),
  uw = (e = "", t) => lw(Cd(Ih(e)), Cd(t)),
  Cd = (e) => {
    try {
      return decodeURI(e);
    } catch {
      return e;
    }
  },
  Fh = {
    hook: sw,
    searchHook: rw,
    parser: F0,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: (e) => e,
  },
  zh = v.createContext(Fh),
  Ls = () => v.useContext(zh),
  $h = {},
  Uh = v.createContext($h),
  cw = () => v.useContext(Uh),
  Du = (e) => {
    const [t, n] = e.hook(e);
    return [uw(e.base, t), Mh((r, o) => n(aw(r, e.base), o))];
  },
  Vh = (e, t, n, r) => {
    const { pattern: o, keys: i } =
        t instanceof RegExp ? { keys: !1, pattern: t } : e(t || "*", r),
      s = o.exec(n) || [],
      [l, ...a] = s;
    return l !== void 0
      ? [
          !0,
          (() => {
            const u =
              i !== !1
                ? Object.fromEntries(i.map((d, h) => [d, a[h]]))
                : s.groups;
            let c = { ...a };
            return u && Object.assign(c, u), c;
          })(),
          ...(r ? [l] : []),
        ]
      : [!1, null];
  },
  dw = ({ children: e, ...t }) => {
    var c, d;
    const n = Ls(),
      r = t.hook ? Fh : n;
    let o = r;
    const [i, s] = ((c = t.ssrPath) == null ? void 0 : c.split("?")) ?? [];
    s && ((t.ssrSearch = s), (t.ssrPath = i)),
      (t.hrefs = t.hrefs ?? ((d = t.hook) == null ? void 0 : d.hrefs));
    let l = v.useRef({}),
      a = l.current,
      u = a;
    for (let h in r) {
      const w = h === "base" ? r[h] + (t[h] || "") : t[h] || r[h];
      a === u && w !== u[h] && (l.current = u = { ...u }),
        (u[h] = w),
        w !== r[h] && (o = u);
    }
    return v.createElement(zh.Provider, { value: o, children: e });
  },
  kd = ({ children: e, component: t }, n) =>
    t ? v.createElement(t, { params: n }) : typeof e == "function" ? e(n) : e,
  fw = (e) => {
    let t = v.useRef($h),
      n = t.current;
    for (const r in e) e[r] !== n[r] && (n = e);
    return Object.keys(e).length === 0 && (n = e), (t.current = n);
  },
  Pd = ({ path: e, nest: t, match: n, ...r }) => {
    const o = Ls(),
      [i] = Du(o),
      [s, l, a] = n ?? Vh(o.parser, e, i, t),
      u = fw({ ...cw(), ...l });
    if (!s) return null;
    const c = a ? v.createElement(dw, { base: a }, kd(r, u)) : kd(r, u);
    return v.createElement(Uh.Provider, { value: u, children: c });
  };
v.forwardRef((e, t) => {
  const n = Ls(),
    [r, o] = Du(n),
    {
      to: i = "",
      href: s = i,
      onClick: l,
      asChild: a,
      children: u,
      className: c,
      replace: d,
      state: h,
      ...w
    } = e,
    S = Mh((x) => {
      x.ctrlKey ||
        x.metaKey ||
        x.altKey ||
        x.shiftKey ||
        x.button !== 0 ||
        (l == null || l(x),
        x.defaultPrevented || (x.preventDefault(), o(s, e)));
    }),
    m = n.hrefs(s[0] === "~" ? s.slice(1) : n.base + s, n);
  return a && v.isValidElement(u)
    ? v.cloneElement(u, { onClick: S, href: m })
    : v.createElement("a", {
        ...w,
        onClick: S,
        href: m,
        className: c != null && c.call ? c(r === s) : c,
        children: u,
        ref: t,
      });
});
const Wh = (e) =>
    Array.isArray(e)
      ? e.flatMap((t) => Wh(t && t.type === v.Fragment ? t.props.children : t))
      : [e],
  pw = ({ children: e, location: t }) => {
    const n = Ls(),
      [r] = Du(n);
    for (const o of Wh(e)) {
      let i = 0;
      if (
        v.isValidElement(o) &&
        (i = Vh(n.parser, o.props.path, t || r, o.props.nest))[0]
      )
        return v.cloneElement(o, { match: i });
    }
    return null;
  };
var Ms = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Ds = typeof window > "u" || "Deno" in globalThis;
function ot() {}
function hw(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mw(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function vw(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Nd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gw(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Td(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== Iu(s, t.options)) return !1;
    } else if (!Io(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Rd(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Do(t.options.mutationKey) !== Do(i)) return !1;
    } else if (!Io(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function Iu(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Do)(e);
}
function Do(e) {
  return JSON.stringify(e, (t, n) =>
    ba(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function Io(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !Io(e[n], t[n]))
    : !1;
}
function Bh(e, t) {
  if (e === t) return e;
  const n = bd(e) && bd(t);
  if (n || (ba(e) && ba(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {};
    let a = 0;
    for (let u = 0; u < s; u++) {
      const c = n ? u : i[u];
      ((!n && r.includes(c)) || n) && e[c] === void 0 && t[c] === void 0
        ? ((l[c] = void 0), a++)
        : ((l[c] = Bh(e[c], t[c])), l[c] === e[c] && e[c] !== void 0 && a++);
    }
    return o === s && a === o ? e : l;
  }
  return t;
}
function bd(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ba(e) {
  if (!Ad(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Ad(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Ad(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function yw(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function ww(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Bh(e, t)
    : t;
}
function xw(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Sw(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Fu = Symbol();
function Hh(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Fu
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var An,
  Jt,
  vr,
  cf,
  Ew =
    ((cf = class extends Ms {
      constructor() {
        super();
        K(this, An);
        K(this, Jt);
        K(this, vr);
        F(this, vr, (t) => {
          if (!Ds && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        N(this, Jt) || this.setEventListener(N(this, vr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = N(this, Jt)) == null || t.call(this), F(this, Jt, void 0));
      }
      setEventListener(t) {
        var n;
        F(this, vr, t),
          (n = N(this, Jt)) == null || n.call(this),
          F(
            this,
            Jt,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        N(this, An) !== t && (F(this, An, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof N(this, An) == "boolean"
          ? N(this, An)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (An = new WeakMap()),
    (Jt = new WeakMap()),
    (vr = new WeakMap()),
    cf),
  Qh = new Ew(),
  gr,
  en,
  yr,
  df,
  Cw =
    ((df = class extends Ms {
      constructor() {
        super();
        K(this, gr, !0);
        K(this, en);
        K(this, yr);
        F(this, yr, (t) => {
          if (!Ds && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        N(this, en) || this.setEventListener(N(this, yr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = N(this, en)) == null || t.call(this), F(this, en, void 0));
      }
      setEventListener(t) {
        var n;
        F(this, yr, t),
          (n = N(this, en)) == null || n.call(this),
          F(this, en, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        N(this, gr) !== t &&
          (F(this, gr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return N(this, gr);
      }
    }),
    (gr = new WeakMap()),
    (en = new WeakMap()),
    (yr = new WeakMap()),
    df),
  ds = new Cw();
function kw() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function Pw(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Kh(e) {
  return (e ?? "online") === "online" ? ds.isOnline() : !0;
}
var Gh = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function El(e) {
  return e instanceof Gh;
}
function Xh(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = kw(),
    s = (m) => {
      var x;
      r || (h(new Gh(m)), (x = e.abort) == null || x.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      Qh.isFocused() &&
      (e.networkMode === "always" || ds.isOnline()) &&
      e.canRun(),
    c = () => Kh(e.networkMode) && e.canRun(),
    d = (m) => {
      var x;
      r ||
        ((r = !0),
        (x = e.onSuccess) == null || x.call(e, m),
        o == null || o(),
        i.resolve(m));
    },
    h = (m) => {
      var x;
      r ||
        ((r = !0),
        (x = e.onError) == null || x.call(e, m),
        o == null || o(),
        i.reject(m));
    },
    w = () =>
      new Promise((m) => {
        var x;
        (o = (p) => {
          (r || u()) && m(p);
        }),
          (x = e.onPause) == null || x.call(e);
      }).then(() => {
        var m;
        (o = void 0), r || (m = e.onContinue) == null || m.call(e);
      }),
    S = () => {
      if (r) return;
      let m;
      const x = n === 0 ? e.initialPromise : void 0;
      try {
        m = x ?? e.fn();
      } catch (p) {
        m = Promise.reject(p);
      }
      Promise.resolve(m)
        .then(d)
        .catch((p) => {
          var k;
          if (r) return;
          const f = e.retry ?? (Ds ? 0 : 3),
            y = e.retryDelay ?? Pw,
            E = typeof y == "function" ? y(n, p) : y,
            C =
              f === !0 ||
              (typeof f == "number" && n < f) ||
              (typeof f == "function" && f(n, p));
          if (t || !C) {
            h(p);
            return;
          }
          n++,
            (k = e.onFail) == null || k.call(e, n, p),
            yw(E)
              .then(() => (u() ? void 0 : w()))
              .then(() => {
                t ? h(p) : S();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: a,
    canStart: c,
    start: () => (c() ? S() : w().then(S), i),
  };
}
function Nw() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = (l) => setTimeout(l, 0);
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || s();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        i(() => {
          l(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var Ne = Nw(),
  On,
  ff,
  Yh =
    ((ff = class {
      constructor() {
        K(this, On);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          mw(this.gcTime) &&
            F(
              this,
              On,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Ds ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        N(this, On) && (clearTimeout(N(this, On)), F(this, On, void 0));
      }
    }),
    (On = new WeakMap()),
    ff),
  wr,
  xr,
  Ge,
  Se,
  Vo,
  _n,
  it,
  At,
  pf,
  Tw =
    ((pf = class extends Yh {
      constructor(t) {
        super();
        K(this, it);
        K(this, wr);
        K(this, xr);
        K(this, Ge);
        K(this, Se);
        K(this, Vo);
        K(this, _n);
        F(this, _n, !1),
          F(this, Vo, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          F(this, Ge, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          F(this, wr, bw(this.options)),
          (this.state = t.state ?? N(this, wr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = N(this, Se)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...N(this, Vo), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          N(this, Ge).remove(this);
      }
      setData(t, n) {
        const r = ww(this.state.data, t, this.options);
        return (
          ye(this, it, At).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        ye(this, it, At).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = N(this, Se)) == null ? void 0 : r.promise;
        return (
          (o = N(this, Se)) == null || o.cancel(t),
          n ? n.then(ot).catch(ot) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(N(this, wr));
      }
      isActive() {
        return this.observers.some((t) => gw(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Fu ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !vw(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = N(this, Se)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = N(this, Se)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          N(this, Ge).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (N(this, Se) &&
              (N(this, _n)
                ? N(this, Se).cancel({ revert: !0 })
                : N(this, Se).cancelRetry()),
            this.scheduleGc()),
          N(this, Ge).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ye(this, it, At).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var a, u, c;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (N(this, Se))
            return N(this, Se).continueRetry(), N(this, Se).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const d = this.observers.find((h) => h.options.queryFn);
          d && this.setOptions(d.options);
        }
        const r = new AbortController(),
          o = (d) => {
            Object.defineProperty(d, "signal", {
              enumerable: !0,
              get: () => (F(this, _n, !0), r.signal),
            });
          },
          i = () => {
            const d = Hh(this.options, n),
              h = { queryKey: this.queryKey, meta: this.meta };
            return (
              o(h),
              F(this, _n, !1),
              this.options.persister ? this.options.persister(d, h, this) : d(h)
            );
          },
          s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        o(s),
          (a = this.options.behavior) == null || a.onFetch(s, this),
          F(this, xr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = s.fetchOptions) == null ? void 0 : u.meta)) &&
            ye(this, it, At).call(this, {
              type: "fetch",
              meta: (c = s.fetchOptions) == null ? void 0 : c.meta,
            });
        const l = (d) => {
          var h, w, S, m;
          (El(d) && d.silent) ||
            ye(this, it, At).call(this, { type: "error", error: d }),
            El(d) ||
              ((w = (h = N(this, Ge).config).onError) == null ||
                w.call(h, d, this),
              (m = (S = N(this, Ge).config).onSettled) == null ||
                m.call(S, this.state.data, d, this)),
            this.scheduleGc();
        };
        return (
          F(
            this,
            Se,
            Xh({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: s.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (d) => {
                var h, w, S, m;
                if (d === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(d);
                } catch (x) {
                  l(x);
                  return;
                }
                (w = (h = N(this, Ge).config).onSuccess) == null ||
                  w.call(h, d, this),
                  (m = (S = N(this, Ge).config).onSettled) == null ||
                    m.call(S, d, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (d, h) => {
                ye(this, it, At).call(this, {
                  type: "failed",
                  failureCount: d,
                  error: h,
                });
              },
              onPause: () => {
                ye(this, it, At).call(this, { type: "pause" });
              },
              onContinue: () => {
                ye(this, it, At).call(this, { type: "continue" });
              },
              retry: s.options.retry,
              retryDelay: s.options.retryDelay,
              networkMode: s.options.networkMode,
              canRun: () => !0,
            })
          ),
          N(this, Se).start()
        );
      }
    }),
    (wr = new WeakMap()),
    (xr = new WeakMap()),
    (Ge = new WeakMap()),
    (Se = new WeakMap()),
    (Vo = new WeakMap()),
    (_n = new WeakMap()),
    (it = new WeakSet()),
    (At = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Rw(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = t.error;
            return El(o) && o.revert && N(this, xr)
              ? { ...N(this, xr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Ne.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            N(this, Ge).notify({ query: this, type: "updated", action: t });
        });
    }),
    pf);
function Rw(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Kh(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function bw(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var gt,
  hf,
  Aw =
    ((hf = class extends Ms {
      constructor(t = {}) {
        super();
        K(this, gt);
        (this.config = t), F(this, gt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? Iu(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new Tw({
              cache: this,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        N(this, gt).has(t.queryHash) ||
          (N(this, gt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = N(this, gt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && N(this, gt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ne.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return N(this, gt).get(t);
      }
      getAll() {
        return [...N(this, gt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Td(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Td(t, r)) : n;
      }
      notify(t) {
        Ne.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ne.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ne.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (gt = new WeakMap()),
    hf),
  yt,
  ke,
  jn,
  wt,
  Kt,
  mf,
  Ow =
    ((mf = class extends Yh {
      constructor(t) {
        super();
        K(this, wt);
        K(this, yt);
        K(this, ke);
        K(this, jn);
        (this.mutationId = t.mutationId),
          F(this, ke, t.mutationCache),
          F(this, yt, []),
          (this.state = t.state || _w()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        N(this, yt).includes(t) ||
          (N(this, yt).push(t),
          this.clearGcTimeout(),
          N(this, ke).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        F(
          this,
          yt,
          N(this, yt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          N(this, ke).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        N(this, yt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : N(this, ke).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = N(this, jn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, i, s, l, a, u, c, d, h, w, S, m, x, p, f, y, E, C, k, P;
        F(
          this,
          jn,
          Xh({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (T, L) => {
              ye(this, wt, Kt).call(this, {
                type: "failed",
                failureCount: T,
                error: L,
              });
            },
            onPause: () => {
              ye(this, wt, Kt).call(this, { type: "pause" });
            },
            onContinue: () => {
              ye(this, wt, Kt).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, ke).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !N(this, jn).canStart();
        try {
          if (!n) {
            ye(this, wt, Kt).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (o = N(this, ke).config).onMutate) == null
                ? void 0
                : i.call(o, t, this));
            const L = await ((l = (s = this.options).onMutate) == null
              ? void 0
              : l.call(s, t));
            L !== this.state.context &&
              ye(this, wt, Kt).call(this, {
                type: "pending",
                context: L,
                variables: t,
                isPaused: r,
              });
          }
          const T = await N(this, jn).start();
          return (
            await ((u = (a = N(this, ke).config).onSuccess) == null
              ? void 0
              : u.call(a, T, t, this.state.context, this)),
            await ((d = (c = this.options).onSuccess) == null
              ? void 0
              : d.call(c, T, t, this.state.context)),
            await ((w = (h = N(this, ke).config).onSettled) == null
              ? void 0
              : w.call(
                  h,
                  T,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((m = (S = this.options).onSettled) == null
              ? void 0
              : m.call(S, T, null, t, this.state.context)),
            ye(this, wt, Kt).call(this, { type: "success", data: T }),
            T
          );
        } catch (T) {
          try {
            throw (
              (await ((p = (x = N(this, ke).config).onError) == null
                ? void 0
                : p.call(x, T, t, this.state.context, this)),
              await ((y = (f = this.options).onError) == null
                ? void 0
                : y.call(f, T, t, this.state.context)),
              await ((C = (E = N(this, ke).config).onSettled) == null
                ? void 0
                : C.call(
                    E,
                    void 0,
                    T,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((P = (k = this.options).onSettled) == null
                ? void 0
                : P.call(k, void 0, T, t, this.state.context)),
              T)
            );
          } finally {
            ye(this, wt, Kt).call(this, { type: "error", error: T });
          }
        } finally {
          N(this, ke).runNext(this);
        }
      }
    }),
    (yt = new WeakMap()),
    (ke = new WeakMap()),
    (jn = new WeakMap()),
    (wt = new WeakSet()),
    (Kt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Ne.batch(() => {
          N(this, yt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            N(this, ke).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    mf);
function _w() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Ie,
  Wo,
  vf,
  jw =
    ((vf = class extends Ms {
      constructor(t = {}) {
        super();
        K(this, Ie);
        K(this, Wo);
        (this.config = t), F(this, Ie, new Map()), F(this, Wo, Date.now());
      }
      build(t, n, r) {
        const o = new Ow({
          mutationCache: this,
          mutationId: ++Zo(this, Wo)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        const n = vi(t),
          r = N(this, Ie).get(n) ?? [];
        r.push(t),
          N(this, Ie).set(n, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const n = vi(t);
        if (N(this, Ie).has(n)) {
          const o =
            (r = N(this, Ie).get(n)) == null
              ? void 0
              : r.filter((i) => i !== t);
          o && (o.length === 0 ? N(this, Ie).delete(n) : N(this, Ie).set(n, o));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = N(this, Ie).get(vi(t))) == null
            ? void 0
            : r.find((o) => o.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = N(this, Ie).get(vi(t))) == null
            ? void 0
            : r.find((o) => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        Ne.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...N(this, Ie).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Rd(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Rd(t, n));
      }
      notify(t) {
        Ne.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ne.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(ot)))
        );
      }
    }),
    (Ie = new WeakMap()),
    (Wo = new WeakMap()),
    vf);
function vi(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function Od(e) {
  return {
    onFetch: (t, n) => {
      var c, d, h, w, S;
      const r = t.options,
        o =
          (h =
            (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : h.direction,
        i = ((w = t.state.data) == null ? void 0 : w.pages) || [],
        s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let m = !1;
        const x = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (m = !0)
                  : t.signal.addEventListener("abort", () => {
                      m = !0;
                    }),
                t.signal
              ),
            });
          },
          p = Hh(t.options, t.fetchOptions),
          f = async (y, E, C) => {
            if (m) return Promise.reject();
            if (E == null && y.pages.length) return Promise.resolve(y);
            const k = {
              queryKey: t.queryKey,
              pageParam: E,
              direction: C ? "backward" : "forward",
              meta: t.options.meta,
            };
            x(k);
            const P = await p(k),
              { maxPages: T } = t.options,
              L = C ? Sw : xw;
            return {
              pages: L(y.pages, P, T),
              pageParams: L(y.pageParams, E, T),
            };
          };
        if (o && i.length) {
          const y = o === "backward",
            E = y ? Lw : _d,
            C = { pages: i, pageParams: s },
            k = E(r, C);
          l = await f(C, k, y);
        } else {
          const y = e ?? i.length;
          do {
            const E = a === 0 ? s[0] ?? r.initialPageParam : _d(r, l);
            if (a > 0 && E == null) break;
            (l = await f(l, E)), a++;
          } while (a < y);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var m, x;
            return (x = (m = t.options).persister) == null
              ? void 0
              : x.call(
                  m,
                  u,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function _d(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Lw(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var se,
  tn,
  nn,
  Sr,
  Er,
  rn,
  Cr,
  kr,
  gf,
  Mw =
    ((gf = class {
      constructor(e = {}) {
        K(this, se);
        K(this, tn);
        K(this, nn);
        K(this, Sr);
        K(this, Er);
        K(this, rn);
        K(this, Cr);
        K(this, kr);
        F(this, se, e.queryCache || new Aw()),
          F(this, tn, e.mutationCache || new jw()),
          F(this, nn, e.defaultOptions || {}),
          F(this, Sr, new Map()),
          F(this, Er, new Map()),
          F(this, rn, 0);
      }
      mount() {
        Zo(this, rn)._++,
          N(this, rn) === 1 &&
            (F(
              this,
              Cr,
              Qh.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), N(this, se).onFocus());
              })
            ),
            F(
              this,
              kr,
              ds.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), N(this, se).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Zo(this, rn)._--,
          N(this, rn) === 0 &&
            ((e = N(this, Cr)) == null || e.call(this),
            F(this, Cr, void 0),
            (t = N(this, kr)) == null || t.call(this),
            F(this, kr, void 0));
      }
      isFetching(e) {
        return N(this, se).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return N(this, tn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = N(this, se).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = N(this, se).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(Nd(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return N(this, se)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = N(this, se).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = hw(t, i);
        if (s !== void 0)
          return N(this, se)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ne.batch(() =>
          N(this, se)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = N(this, se).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = N(this, se);
        Ne.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = N(this, se),
          r = { type: "active", ...e };
        return Ne.batch(
          () => (
            n.findAll(e).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = Ne.batch(() =>
            N(this, se)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(ot).catch(ot);
      }
      invalidateQueries(e = {}, t = {}) {
        return Ne.batch(() => {
          if (
            (N(this, se)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = Ne.batch(() =>
            N(this, se)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(ot)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(ot);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, se).build(this, t);
        return n.isStaleByTime(Nd(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(ot).catch(ot);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Od(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(ot).catch(ot);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Od(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return ds.isOnline()
          ? N(this, tn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return N(this, se);
      }
      getMutationCache() {
        return N(this, tn);
      }
      getDefaultOptions() {
        return N(this, nn);
      }
      setDefaultOptions(e) {
        F(this, nn, e);
      }
      setQueryDefaults(e, t) {
        N(this, Sr).set(Do(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...N(this, Sr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Io(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        N(this, Er).set(Do(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...N(this, Er).values()];
        let n = {};
        return (
          t.forEach((r) => {
            Io(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...N(this, nn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Iu(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === Fu && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...N(this, nn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        N(this, se).clear(), N(this, tn).clear();
      }
    }),
    (se = new WeakMap()),
    (tn = new WeakMap()),
    (nn = new WeakMap()),
    (Sr = new WeakMap()),
    (Er = new WeakMap()),
    (rn = new WeakMap()),
    (Cr = new WeakMap()),
    (kr = new WeakMap()),
    gf),
  Dw = v.createContext(void 0),
  Iw = ({ client: e, children: t }) => (
    v.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    g.jsx(Dw.Provider, { value: e, children: t })
  );
async function Fw(e) {
  if (!e.ok) {
    const t = (await e.text()) || e.statusText;
    throw new Error(`${e.status}: ${t}`);
  }
}
const zw =
    ({ on401: e }) =>
    async ({ queryKey: t }) => {
      const n = await fetch(t.join("/"), { credentials: "include" });
      return e === "returnNull" && n.status === 401
        ? null
        : (await Fw(n), await n.json());
    },
  $w = new Mw({
    defaultOptions: {
      queries: {
        queryFn: zw({ on401: "throw" }),
        refetchInterval: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1 / 0,
        retry: !1,
      },
      mutations: { retry: !1 },
    },
  }),
  Uw = 1,
  Vw = 1e6;
let Cl = 0;
function Ww() {
  return (Cl = (Cl + 1) % Number.MAX_SAFE_INTEGER), Cl.toString();
}
const kl = new Map(),
  jd = (e) => {
    if (kl.has(e)) return;
    const t = setTimeout(() => {
      kl.delete(e), yo({ type: "REMOVE_TOAST", toastId: e });
    }, Vw);
    kl.set(e, t);
  },
  Bw = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Uw) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? jd(n)
            : e.toasts.forEach((r) => {
                jd(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Di = [];
let Ii = { toasts: [] };
function yo(e) {
  (Ii = Bw(Ii, e)),
    Di.forEach((t) => {
      t(Ii);
    });
}
function Hw({ ...e }) {
  const t = Ww(),
    n = (o) => yo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => yo({ type: "DISMISS_TOAST", toastId: t });
  return (
    yo({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Qw() {
  const [e, t] = v.useState(Ii);
  return (
    v.useEffect(
      () => (
        Di.push(t),
        () => {
          const n = Di.indexOf(t);
          n > -1 && Di.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: Hw,
      dismiss: (n) => yo({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function te(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Ld(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function qh(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Ld(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Ld(e[o], null);
        }
      };
  };
}
function Re(...e) {
  return v.useCallback(qh(...e), e);
}
function Kw(e, t) {
  const n = v.createContext(t),
    r = (i) => {
      const { children: s, ...l } = i,
        a = v.useMemo(() => l, Object.values(l));
      return g.jsx(n.Provider, { value: a, children: s });
    };
  r.displayName = e + "Provider";
  function o(i) {
    const s = v.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Ur(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = v.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (d) => {
      var p;
      const { scope: h, children: w, ...S } = d,
        m = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[a]) || l,
        x = v.useMemo(() => S, Object.values(S));
      return g.jsx(m.Provider, { value: x, children: w });
    };
    u.displayName = i + "Provider";
    function c(d, h) {
      var m;
      const w = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[a]) || l,
        S = v.useContext(w);
      if (S) return S;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => v.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, Gw(o, ...t)];
}
function Gw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const d = a(i)[`__scope${u}`];
        return { ...l, ...d };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Fo(e) {
  const t = Yw(e),
    n = v.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        l = v.Children.toArray(i),
        a = l.find(Zw);
      if (a) {
        const u = a.props.children,
          c = l.map((d) =>
            d === a
              ? v.Children.count(u) > 1
                ? v.Children.only(null)
                : v.isValidElement(u)
                ? u.props.children
                : null
              : d
          );
        return g.jsx(t, {
          ...s,
          ref: o,
          children: v.isValidElement(u) ? v.cloneElement(u, void 0, c) : null,
        });
      }
      return g.jsx(t, { ...s, ref: o, children: i });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var Xw = Fo("Slot");
function Yw(e) {
  const t = v.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (v.isValidElement(o)) {
      const s = ex(o),
        l = Jw(i, o.props);
      return (
        o.type !== v.Fragment && (l.ref = r ? qh(r, s) : s),
        v.cloneElement(o, l)
      );
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var Zh = Symbol("radix.slottable");
function qw(e) {
  const t = ({ children: n }) => g.jsx(g.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = Zh), t;
}
function Zw(e) {
  return (
    v.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Zh
  );
}
function Jw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            i(...l), o(...l);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ex(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function tx(e) {
  const t = e + "CollectionProvider",
    [n, r] = Ur(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (m) => {
      const { scope: x, children: p } = m,
        f = Qt.useRef(null),
        y = Qt.useRef(new Map()).current;
      return g.jsx(o, { scope: x, itemMap: y, collectionRef: f, children: p });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = Fo(l),
    u = Qt.forwardRef((m, x) => {
      const { scope: p, children: f } = m,
        y = i(l, p),
        E = Re(x, y.collectionRef);
      return g.jsx(a, { ref: E, children: f });
    });
  u.displayName = l;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    h = Fo(c),
    w = Qt.forwardRef((m, x) => {
      const { scope: p, children: f, ...y } = m,
        E = Qt.useRef(null),
        C = Re(x, E),
        k = i(c, p);
      return (
        Qt.useEffect(
          () => (
            k.itemMap.set(E, { ref: E, ...y }), () => void k.itemMap.delete(E)
          )
        ),
        g.jsx(h, { [d]: "", ref: C, children: f })
      );
    });
  w.displayName = c;
  function S(m) {
    const x = i(e + "CollectionConsumer", m);
    return Qt.useCallback(() => {
      const f = x.collectionRef.current;
      if (!f) return [];
      const y = Array.from(f.querySelectorAll(`[${d}]`));
      return Array.from(x.itemMap.values()).sort(
        (k, P) => y.indexOf(k.ref.current) - y.indexOf(P.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: w }, S, r];
}
var nx = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  ie = nx.reduce((e, t) => {
    const n = Fo(`Primitive.${t}`),
      r = v.forwardRef((o, i) => {
        const { asChild: s, ...l } = o,
          a = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          g.jsx(a, { ...l, ref: i })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function Jh(e, t) {
  e && Xo.flushSync(() => e.dispatchEvent(t));
}
function Be(e) {
  const t = v.useRef(e);
  return (
    v.useEffect(() => {
      t.current = e;
    }),
    v.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function rx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Be(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var ox = "DismissableLayer",
  Aa = "dismissableLayer.update",
  ix = "dismissableLayer.pointerDownOutside",
  sx = "dismissableLayer.focusOutside",
  Md,
  em = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Is = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = v.useContext(em),
      [c, d] = v.useState(null),
      h =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, w] = v.useState({}),
      S = Re(t, (P) => d(P)),
      m = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      p = m.indexOf(x),
      f = c ? m.indexOf(c) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      E = f >= p,
      C = ax((P) => {
        const T = P.target,
          L = [...u.branches].some((_) => _.contains(T));
        !E ||
          L ||
          (o == null || o(P),
          s == null || s(P),
          P.defaultPrevented || l == null || l());
      }, h),
      k = ux((P) => {
        const T = P.target;
        [...u.branches].some((_) => _.contains(T)) ||
          (i == null || i(P),
          s == null || s(P),
          P.defaultPrevented || l == null || l());
      }, h);
    return (
      rx((P) => {
        f === u.layers.size - 1 &&
          (r == null || r(P),
          !P.defaultPrevented && l && (P.preventDefault(), l()));
      }, h),
      v.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Md = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Dd(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = Md);
            }
          );
      }, [c, h, n, u]),
      v.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Dd());
        },
        [c, u]
      ),
      v.useEffect(() => {
        const P = () => w({});
        return (
          document.addEventListener(Aa, P),
          () => document.removeEventListener(Aa, P)
        );
      }, []),
      g.jsx(ie.div, {
        ...a,
        ref: S,
        style: {
          pointerEvents: y ? (E ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: te(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: te(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: te(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        ),
      })
    );
  });
Is.displayName = ox;
var lx = "DismissableLayerBranch",
  tm = v.forwardRef((e, t) => {
    const n = v.useContext(em),
      r = v.useRef(null),
      o = Re(t, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      g.jsx(ie.div, { ...e, ref: o })
    );
  });
tm.displayName = lx;
function ax(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Be(e),
    r = v.useRef(!1),
    o = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              nm(ix, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function ux(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Be(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          nm(sx, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Dd() {
  const e = new CustomEvent(Aa);
  document.dispatchEvent(e);
}
function nm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Jh(o, i) : o.dispatchEvent(i);
}
var cx = Is,
  dx = tm,
  dt = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  fx = "Portal",
  zu = v.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = v.useState(!1);
    dt(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? I0.createPortal(g.jsx(ie.div, { ...r, ref: t }), s) : null;
  });
zu.displayName = fx;
function px(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var Vr = (e) => {
  const { present: t, children: n } = e,
    r = hx(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    i = Re(r.ref, mx(o));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(o, { ref: i })
    : null;
};
Vr.displayName = "Presence";
function hx(e) {
  const [t, n] = v.useState(),
    r = v.useRef({}),
    o = v.useRef(e),
    i = v.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = px(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const u = gi(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    dt(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const h = i.current,
          w = gi(u);
        e
          ? a("MOUNT")
          : w === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(c && h !== w ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    dt(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (w) => {
            const m = gi(r.current).includes(w.animationName);
            if (w.target === t && m && (a("ANIMATION_END"), !o.current)) {
              const x = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                }));
            }
          },
          h = (w) => {
            w.target === t && (i.current = gi(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: v.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function gi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function mx(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function rm({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = vx({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    l = Be(n),
    a = v.useCallback(
      (u) => {
        if (i) {
          const d = typeof u == "function" ? u(e) : u;
          d !== e && l(d);
        } else o(u);
      },
      [i, e, o, l]
    );
  return [s, a];
}
function vx({ defaultProp: e, onChange: t }) {
  const n = v.useState(e),
    [r] = n,
    o = v.useRef(r),
    i = Be(t);
  return (
    v.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var gx = "VisuallyHidden",
  Fs = v.forwardRef((e, t) =>
    g.jsx(ie.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
Fs.displayName = gx;
var yx = Fs,
  $u = "ToastProvider",
  [Uu, wx, xx] = tx("Toast"),
  [om, FC] = Ur("Toast", [xx]),
  [Sx, zs] = om($u),
  im = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = v.useState(null),
      [u, c] = v.useState(0),
      d = v.useRef(!1),
      h = v.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${$u}\`. Expected non-empty \`string\`.`
        ),
      g.jsx(Uu.Provider, {
        scope: t,
        children: g.jsx(Sx, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: v.useCallback(() => c((w) => w + 1), []),
          onToastRemove: v.useCallback(() => c((w) => w - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: h,
          children: s,
        }),
      })
    );
  };
im.displayName = $u;
var sm = "ToastViewport",
  Ex = ["F8"],
  Oa = "toast.viewportPause",
  _a = "toast.viewportResume",
  lm = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = Ex,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = zs(sm, n),
      l = wx(n),
      a = v.useRef(null),
      u = v.useRef(null),
      c = v.useRef(null),
      d = v.useRef(null),
      h = Re(t, d, s.onViewportChange),
      w = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      S = s.toastCount > 0;
    v.useEffect(() => {
      const x = (p) => {
        var y;
        r.length !== 0 &&
          r.every((E) => p[E] || p.code === E) &&
          ((y = d.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [r]),
      v.useEffect(() => {
        const x = a.current,
          p = d.current;
        if (S && x && p) {
          const f = () => {
              if (!s.isClosePausedRef.current) {
                const k = new CustomEvent(Oa);
                p.dispatchEvent(k), (s.isClosePausedRef.current = !0);
              }
            },
            y = () => {
              if (s.isClosePausedRef.current) {
                const k = new CustomEvent(_a);
                p.dispatchEvent(k), (s.isClosePausedRef.current = !1);
              }
            },
            E = (k) => {
              !x.contains(k.relatedTarget) && y();
            },
            C = () => {
              x.contains(document.activeElement) || y();
            };
          return (
            x.addEventListener("focusin", f),
            x.addEventListener("focusout", E),
            x.addEventListener("pointermove", f),
            x.addEventListener("pointerleave", C),
            window.addEventListener("blur", f),
            window.addEventListener("focus", y),
            () => {
              x.removeEventListener("focusin", f),
                x.removeEventListener("focusout", E),
                x.removeEventListener("pointermove", f),
                x.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", f),
                window.removeEventListener("focus", y);
            }
          );
        }
      }, [S, s.isClosePausedRef]);
    const m = v.useCallback(
      ({ tabbingDirection: x }) => {
        const f = l().map((y) => {
          const E = y.ref.current,
            C = [E, ...Mx(E)];
          return x === "forwards" ? C : C.reverse();
        });
        return (x === "forwards" ? f.reverse() : f).flat();
      },
      [l]
    );
    return (
      v.useEffect(() => {
        const x = d.current;
        if (x) {
          const p = (f) => {
            var C, k, P;
            const y = f.altKey || f.ctrlKey || f.metaKey;
            if (f.key === "Tab" && !y) {
              const T = document.activeElement,
                L = f.shiftKey;
              if (f.target === x && L) {
                (C = u.current) == null || C.focus();
                return;
              }
              const M = m({ tabbingDirection: L ? "backwards" : "forwards" }),
                W = M.findIndex((j) => j === T);
              Pl(M.slice(W + 1))
                ? f.preventDefault()
                : L
                ? (k = u.current) == null || k.focus()
                : (P = c.current) == null || P.focus();
            }
          };
          return (
            x.addEventListener("keydown", p),
            () => x.removeEventListener("keydown", p)
          );
        }
      }, [l, m]),
      g.jsxs(dx, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", w),
        tabIndex: -1,
        style: { pointerEvents: S ? void 0 : "none" },
        children: [
          S &&
            g.jsx(ja, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const x = m({ tabbingDirection: "forwards" });
                Pl(x);
              },
            }),
          g.jsx(Uu.Slot, {
            scope: n,
            children: g.jsx(ie.ol, { tabIndex: -1, ...i, ref: h }),
          }),
          S &&
            g.jsx(ja, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const x = m({ tabbingDirection: "backwards" });
                Pl(x);
              },
            }),
        ],
      })
    );
  });
lm.displayName = sm;
var am = "ToastFocusProxy",
  ja = v.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = zs(am, n);
    return g.jsx(Fs, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
ja.displayName = am;
var $s = "Toast",
  Cx = "toast.swipeStart",
  kx = "toast.swipeMove",
  Px = "toast.swipeCancel",
  Nx = "toast.swipeEnd",
  um = v.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l = !0, a] = rm({ prop: r, defaultProp: o, onChange: i });
    return g.jsx(Vr, {
      present: n || l,
      children: g.jsx(bx, {
        open: l,
        ...s,
        ref: t,
        onClose: () => a(!1),
        onPause: Be(e.onPause),
        onResume: Be(e.onResume),
        onSwipeStart: te(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: te(e.onSwipeMove, (u) => {
          const { x: c, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`
            );
        }),
        onSwipeCancel: te(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: te(e.onSwipeEnd, (u) => {
          const { x: c, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`
            ),
            a(!1);
        }),
      }),
    });
  });
um.displayName = $s;
var [Tx, Rx] = om($s, { onClose() {} }),
  bx = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: h,
        onSwipeEnd: w,
        ...S
      } = e,
      m = zs($s, n),
      [x, p] = v.useState(null),
      f = Re(t, (j) => p(j)),
      y = v.useRef(null),
      E = v.useRef(null),
      C = o || m.duration,
      k = v.useRef(0),
      P = v.useRef(C),
      T = v.useRef(0),
      { onToastAdd: L, onToastRemove: _ } = m,
      z = Be(() => {
        var Q;
        (x == null ? void 0 : x.contains(document.activeElement)) &&
          ((Q = m.viewport) == null || Q.focus()),
          s();
      }),
      M = v.useCallback(
        (j) => {
          !j ||
            j === 1 / 0 ||
            (window.clearTimeout(T.current),
            (k.current = new Date().getTime()),
            (T.current = window.setTimeout(z, j)));
        },
        [z]
      );
    v.useEffect(() => {
      const j = m.viewport;
      if (j) {
        const Q = () => {
            M(P.current), u == null || u();
          },
          U = () => {
            const H = new Date().getTime() - k.current;
            (P.current = P.current - H),
              window.clearTimeout(T.current),
              a == null || a();
          };
        return (
          j.addEventListener(Oa, U),
          j.addEventListener(_a, Q),
          () => {
            j.removeEventListener(Oa, U), j.removeEventListener(_a, Q);
          }
        );
      }
    }, [m.viewport, C, a, u, M]),
      v.useEffect(() => {
        i && !m.isClosePausedRef.current && M(C);
      }, [i, C, m.isClosePausedRef, M]),
      v.useEffect(() => (L(), () => _()), [L, _]);
    const W = v.useMemo(() => (x ? vm(x) : null), [x]);
    return m.viewport
      ? g.jsxs(g.Fragment, {
          children: [
            W &&
              g.jsx(Ax, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: W,
              }),
            g.jsx(Tx, {
              scope: n,
              onClose: z,
              children: Xo.createPortal(
                g.jsx(Uu.ItemSlot, {
                  scope: n,
                  children: g.jsx(cx, {
                    asChild: !0,
                    onEscapeKeyDown: te(l, () => {
                      m.isFocusedToastEscapeKeyDownRef.current || z(),
                        (m.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: g.jsx(ie.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": m.swipeDirection,
                      ...S,
                      ref: f,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: te(e.onKeyDown, (j) => {
                        j.key === "Escape" &&
                          (l == null || l(j.nativeEvent),
                          j.nativeEvent.defaultPrevented ||
                            ((m.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: te(e.onPointerDown, (j) => {
                        j.button === 0 &&
                          (y.current = { x: j.clientX, y: j.clientY });
                      }),
                      onPointerMove: te(e.onPointerMove, (j) => {
                        if (!y.current) return;
                        const Q = j.clientX - y.current.x,
                          U = j.clientY - y.current.y,
                          H = !!E.current,
                          R = ["left", "right"].includes(m.swipeDirection),
                          A = ["left", "up"].includes(m.swipeDirection)
                            ? Math.min
                            : Math.max,
                          D = R ? A(0, Q) : 0,
                          $ = R ? 0 : A(0, U),
                          J = j.pointerType === "touch" ? 10 : 2,
                          tt = { x: D, y: $ },
                          Ke = { originalEvent: j, delta: tt };
                        H
                          ? ((E.current = tt), yi(kx, d, Ke, { discrete: !1 }))
                          : Id(tt, m.swipeDirection, J)
                          ? ((E.current = tt),
                            yi(Cx, c, Ke, { discrete: !1 }),
                            j.target.setPointerCapture(j.pointerId))
                          : (Math.abs(Q) > J || Math.abs(U) > J) &&
                            (y.current = null);
                      }),
                      onPointerUp: te(e.onPointerUp, (j) => {
                        const Q = E.current,
                          U = j.target;
                        if (
                          (U.hasPointerCapture(j.pointerId) &&
                            U.releasePointerCapture(j.pointerId),
                          (E.current = null),
                          (y.current = null),
                          Q)
                        ) {
                          const H = j.currentTarget,
                            R = { originalEvent: j, delta: Q };
                          Id(Q, m.swipeDirection, m.swipeThreshold)
                            ? yi(Nx, w, R, { discrete: !0 })
                            : yi(Px, h, R, { discrete: !0 }),
                            H.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                m.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  Ax = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = zs($s, t),
      [i, s] = v.useState(!1),
      [l, a] = v.useState(!1);
    return (
      jx(() => s(!0)),
      v.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : g.jsx(zu, {
            asChild: !0,
            children: g.jsx(Fs, {
              ...r,
              children:
                i && g.jsxs(g.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  Ox = "ToastTitle",
  cm = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return g.jsx(ie.div, { ...r, ref: t });
  });
cm.displayName = Ox;
var _x = "ToastDescription",
  dm = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return g.jsx(ie.div, { ...r, ref: t });
  });
dm.displayName = _x;
var fm = "ToastAction",
  pm = v.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? g.jsx(mm, {
          altText: n,
          asChild: !0,
          children: g.jsx(Vu, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${fm}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
pm.displayName = fm;
var hm = "ToastClose",
  Vu = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = Rx(hm, n);
    return g.jsx(mm, {
      asChild: !0,
      children: g.jsx(ie.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: te(e.onClick, o.onClose),
      }),
    });
  });
Vu.displayName = hm;
var mm = v.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return g.jsx(ie.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function vm(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Lx(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...vm(r));
      }
    }),
    t
  );
}
function yi(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Jh(o, i) : o.dispatchEvent(i);
}
var Id = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function jx(e = () => {}) {
  const t = Be(e);
  dt(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function Lx(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Mx(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Pl(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var Dx = im,
  gm = lm,
  ym = um,
  wm = cm,
  xm = dm,
  Sm = pm,
  Em = Vu;
function Cm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Cm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function km() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Cm(e)) && (r && (r += " "), (r += t));
  return r;
}
const Fd = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  zd = km,
  Us = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return zd(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = i == null ? void 0 : i[u];
        if (c === null) return null;
        const h = Fd(c) || Fd(d);
        return o[u][h];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, h] = c;
          return h === void 0 || (u[d] = h), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: h, ...w } = c;
              return Object.entries(w).every((S) => {
                let [m, x] = S;
                return Array.isArray(x)
                  ? x.includes({ ...i, ...l }[m])
                  : { ...i, ...l }[m] === x;
              })
                ? [...u, d, h]
                : u;
            }, []);
    return zd(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ix = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Pm = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Fx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zx = v.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    a
  ) =>
    v.createElement(
      "svg",
      {
        ref: a,
        ...Fx,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Pm("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, c]) => v.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oe = (e, t) => {
  const n = v.forwardRef(({ className: r, ...o }, i) =>
    v.createElement(zx, {
      ref: i,
      iconNode: t,
      className: Pm(`lucide-${Ix(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fs = Oe("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nm = Oe("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $x = Oe("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tm = Oe("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ux = Oe("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $d = Oe("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vx = Oe("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rm = Oe("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bm = Oe("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wx = Oe("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bx = Oe("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hx = Oe("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qx = Oe("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kx = Oe("Wrench", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = Oe("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Wu = "-",
  Gx = (e) => {
    const t = Yx(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(Wu);
        return l[0] === "" && l.length !== 1 && l.shift(), Om(l, t) || Xx(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  Om = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Om(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Wu);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Ud = /^\[(.+)\]$/,
  Xx = (e) => {
    if (Ud.test(e)) {
      const t = Ud.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Yx = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Zx(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        La(s, r, i, t);
      }),
      r
    );
  },
  La = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Vd(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (qx(o)) {
          La(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        La(s, Vd(t, i), n, r);
      });
    });
  },
  Vd = (e, t) => {
    let n = e;
    return (
      t.split(Wu).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  qx = (e) => e.isThemeGetter,
  Zx = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, l]) => [t + s, l])
                )
              : i
          );
          return [n, o];
        })
      : e,
  Jx = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  _m = "!",
  e1 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          c = 0,
          d;
        for (let x = 0; x < l.length; x++) {
          let p = l[x];
          if (u === 0) {
            if (p === o && (r || l.slice(x, x + i) === t)) {
              a.push(l.slice(c, x)), (c = x + i);
              continue;
            }
            if (p === "/") {
              d = x;
              continue;
            }
          }
          p === "[" ? u++ : p === "]" && u--;
        }
        const h = a.length === 0 ? l : l.substring(c),
          w = h.startsWith(_m),
          S = w ? h.substring(1) : h,
          m = d && d > c ? d - c : void 0;
        return {
          modifiers: a,
          hasImportantModifier: w,
          baseClassName: S,
          maybePostfixModifierPosition: m,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  t1 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  n1 = (e) => ({ cache: Jx(e.cacheSize), parseClassName: e1(e), ...Gx(e) }),
  r1 = /\s+/,
  o1 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(r1);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: h,
          maybePostfixModifierPosition: w,
        } = n(u);
      let S = !!w,
        m = r(S ? h.substring(0, w) : h);
      if (!m) {
        if (!S) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((m = r(h)), !m)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        S = !1;
      }
      const x = t1(c).join(":"),
        p = d ? x + _m : x,
        f = p + m;
      if (i.includes(f)) continue;
      i.push(f);
      const y = o(m, S);
      for (let E = 0; E < y.length; ++E) {
        const C = y[E];
        i.push(p + C);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function i1() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = jm(t)) && (r && (r += " "), (r += n));
  return r;
}
const jm = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = jm(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function s1(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((c, d) => d(c), e());
    return (n = n1(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const c = o1(a, n);
    return o(a, c), c;
  }
  return function () {
    return i(i1.apply(null, arguments));
  };
}
const Y = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Lm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  l1 = /^\d+\/\d+$/,
  a1 = new Set(["px", "full", "screen"]),
  u1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  c1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  d1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  f1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  p1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  bt = (e) => pr(e) || a1.has(e) || l1.test(e),
  Bt = (e) => Wr(e, "length", S1),
  pr = (e) => !!e && !Number.isNaN(Number(e)),
  Nl = (e) => Wr(e, "number", pr),
  no = (e) => !!e && Number.isInteger(Number(e)),
  h1 = (e) => e.endsWith("%") && pr(e.slice(0, -1)),
  I = (e) => Lm.test(e),
  Ht = (e) => u1.test(e),
  m1 = new Set(["length", "size", "percentage"]),
  v1 = (e) => Wr(e, m1, Mm),
  g1 = (e) => Wr(e, "position", Mm),
  y1 = new Set(["image", "url"]),
  w1 = (e) => Wr(e, y1, C1),
  x1 = (e) => Wr(e, "", E1),
  ro = () => !0,
  Wr = (e, t, n) => {
    const r = Lm.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  S1 = (e) => c1.test(e) && !d1.test(e),
  Mm = () => !1,
  E1 = (e) => f1.test(e),
  C1 = (e) => p1.test(e),
  k1 = () => {
    const e = Y("colors"),
      t = Y("spacing"),
      n = Y("blur"),
      r = Y("brightness"),
      o = Y("borderColor"),
      i = Y("borderRadius"),
      s = Y("borderSpacing"),
      l = Y("borderWidth"),
      a = Y("contrast"),
      u = Y("grayscale"),
      c = Y("hueRotate"),
      d = Y("invert"),
      h = Y("gap"),
      w = Y("gradientColorStops"),
      S = Y("gradientColorStopPositions"),
      m = Y("inset"),
      x = Y("margin"),
      p = Y("opacity"),
      f = Y("padding"),
      y = Y("saturate"),
      E = Y("scale"),
      C = Y("sepia"),
      k = Y("skew"),
      P = Y("space"),
      T = Y("translate"),
      L = () => ["auto", "contain", "none"],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", I, t],
      M = () => [I, t],
      W = () => ["", bt, Bt],
      j = () => ["auto", pr, I],
      Q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      U = () => ["solid", "dashed", "dotted", "double", "none"],
      H = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      R = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", I],
      D = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [pr, I];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [ro],
        spacing: [bt, Bt],
        blur: ["none", "", Ht, I],
        brightness: $(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Ht, I],
        borderSpacing: M(),
        borderWidth: W(),
        contrast: $(),
        grayscale: A(),
        hueRotate: $(),
        invert: A(),
        gap: M(),
        gradientColorStops: [e],
        gradientColorStopPositions: [h1, Bt],
        inset: z(),
        margin: z(),
        opacity: $(),
        padding: M(),
        saturate: $(),
        scale: $(),
        sepia: A(),
        skew: $(),
        space: M(),
        translate: M(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", I] }],
        container: ["container"],
        columns: [{ columns: [Ht] }],
        "break-after": [{ "break-after": D() }],
        "break-before": [{ "break-before": D() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Q(), I] }],
        overflow: [{ overflow: _() }],
        "overflow-x": [{ "overflow-x": _() }],
        "overflow-y": [{ "overflow-y": _() }],
        overscroll: [{ overscroll: L() }],
        "overscroll-x": [{ "overscroll-x": L() }],
        "overscroll-y": [{ "overscroll-y": L() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [m] }],
        "inset-x": [{ "inset-x": [m] }],
        "inset-y": [{ "inset-y": [m] }],
        start: [{ start: [m] }],
        end: [{ end: [m] }],
        top: [{ top: [m] }],
        right: [{ right: [m] }],
        bottom: [{ bottom: [m] }],
        left: [{ left: [m] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", no, I] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", I] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", no, I] }],
        "grid-cols": [{ "grid-cols": [ro] }],
        "col-start-end": [{ col: ["auto", { span: ["full", no, I] }, I] }],
        "col-start": [{ "col-start": j() }],
        "col-end": [{ "col-end": j() }],
        "grid-rows": [{ "grid-rows": [ro] }],
        "row-start-end": [{ row: ["auto", { span: [no, I] }, I] }],
        "row-start": [{ "row-start": j() }],
        "row-end": [{ "row-end": j() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", I] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", I] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...R()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...R(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...R(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [f] }],
        px: [{ px: [f] }],
        py: [{ py: [f] }],
        ps: [{ ps: [f] }],
        pe: [{ pe: [f] }],
        pt: [{ pt: [f] }],
        pr: [{ pr: [f] }],
        pb: [{ pb: [f] }],
        pl: [{ pl: [f] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [P] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [P] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", I, t] }],
        "min-w": [{ "min-w": [I, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              I,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Ht] },
              Ht,
            ],
          },
        ],
        h: [{ h: [I, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [I, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Ht, Bt] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Nl,
            ],
          },
        ],
        "font-family": [{ font: [ro] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              I,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", pr, Nl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              bt,
              I,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", I] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", I] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [p] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [p] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", bt, Bt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", bt, I] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: M() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              I,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", I] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [p] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Q(), g1] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", v1] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              w1,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [S] }],
        "gradient-via-pos": [{ via: [S] }],
        "gradient-to-pos": [{ to: [S] }],
        "gradient-from": [{ from: [w] }],
        "gradient-via": [{ via: [w] }],
        "gradient-to": [{ to: [w] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [p] }],
        "border-style": [{ border: [...U(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [p] }],
        "divide-style": [{ divide: U() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...U()] }],
        "outline-offset": [{ "outline-offset": [bt, I] }],
        "outline-w": [{ outline: [bt, Bt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: W() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [p] }],
        "ring-offset-w": [{ "ring-offset": [bt, Bt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Ht, x1] }],
        "shadow-color": [{ shadow: [ro] }],
        opacity: [{ opacity: [p] }],
        "mix-blend": [{ "mix-blend": [...H(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": H() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Ht, I] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [p] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              I,
            ],
          },
        ],
        duration: [{ duration: $() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", I] }],
        delay: [{ delay: $() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", I] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [E] }],
        "scale-x": [{ "scale-x": [E] }],
        "scale-y": [{ "scale-y": [E] }],
        rotate: [{ rotate: [no, I] }],
        "translate-x": [{ "translate-x": [T] }],
        "translate-y": [{ "translate-y": [T] }],
        "skew-x": [{ "skew-x": [k] }],
        "skew-y": [{ "skew-y": [k] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              I,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              I,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": M() }],
        "scroll-mx": [{ "scroll-mx": M() }],
        "scroll-my": [{ "scroll-my": M() }],
        "scroll-ms": [{ "scroll-ms": M() }],
        "scroll-me": [{ "scroll-me": M() }],
        "scroll-mt": [{ "scroll-mt": M() }],
        "scroll-mr": [{ "scroll-mr": M() }],
        "scroll-mb": [{ "scroll-mb": M() }],
        "scroll-ml": [{ "scroll-ml": M() }],
        "scroll-p": [{ "scroll-p": M() }],
        "scroll-px": [{ "scroll-px": M() }],
        "scroll-py": [{ "scroll-py": M() }],
        "scroll-ps": [{ "scroll-ps": M() }],
        "scroll-pe": [{ "scroll-pe": M() }],
        "scroll-pt": [{ "scroll-pt": M() }],
        "scroll-pr": [{ "scroll-pr": M() }],
        "scroll-pb": [{ "scroll-pb": M() }],
        "scroll-pl": [{ "scroll-pl": M() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", I] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [bt, Bt, Nl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  P1 = s1(k1);
function ae(...e) {
  return P1(km(e));
}
const N1 = Dx,
  Dm = v.forwardRef(({ className: e, ...t }, n) =>
    g.jsx(gm, {
      ref: n,
      className: ae(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
Dm.displayName = gm.displayName;
const T1 = Us(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Im = v.forwardRef(({ className: e, variant: t, ...n }, r) =>
    g.jsx(ym, { ref: r, className: ae(T1({ variant: t }), e), ...n })
  );
Im.displayName = ym.displayName;
const R1 = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(Sm, {
    ref: n,
    className: ae(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
R1.displayName = Sm.displayName;
const Fm = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(Em, {
    ref: n,
    className: ae(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: g.jsx(Am, { className: "h-4 w-4" }),
  })
);
Fm.displayName = Em.displayName;
const zm = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(wm, { ref: n, className: ae("text-sm font-semibold", e), ...t })
);
zm.displayName = wm.displayName;
const $m = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(xm, { ref: n, className: ae("text-sm opacity-90", e), ...t })
);
$m.displayName = xm.displayName;
function b1() {
  const { toasts: e } = Qw();
  return g.jsxs(N1, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return g.jsxs(
          Im,
          {
            ...i,
            children: [
              g.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && g.jsx(zm, { children: n }),
                  r && g.jsx($m, { children: r }),
                ],
              }),
              o,
              g.jsx(Fm, {}),
            ],
          },
          t
        );
      }),
      g.jsx(Dm, {}),
    ],
  });
}
var A1 = bf[" useId ".trim().toString()] || (() => {}),
  O1 = 0;
function Tl(e) {
  const [t, n] = v.useState(A1());
  return (
    dt(() => {
      e || n((r) => r ?? String(O1++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
const _1 = ["top", "right", "bottom", "left"],
  gn = Math.min,
  ze = Math.max,
  ps = Math.round,
  wi = Math.floor,
  Pt = (e) => ({ x: e, y: e }),
  j1 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  L1 = { start: "end", end: "start" };
function Ma(e, t, n) {
  return ze(e, gn(t, n));
}
function $t(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ut(e) {
  return e.split("-")[0];
}
function Br(e) {
  return e.split("-")[1];
}
function Bu(e) {
  return e === "x" ? "y" : "x";
}
function Hu(e) {
  return e === "y" ? "height" : "width";
}
function yn(e) {
  return ["top", "bottom"].includes(Ut(e)) ? "y" : "x";
}
function Qu(e) {
  return Bu(yn(e));
}
function M1(e, t, n) {
  n === void 0 && (n = !1);
  const r = Br(e),
    o = Qu(e),
    i = Hu(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = hs(s)), [s, hs(s)];
}
function D1(e) {
  const t = hs(e);
  return [Da(e), t, Da(t)];
}
function Da(e) {
  return e.replace(/start|end/g, (t) => L1[t]);
}
function I1(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function F1(e, t, n, r) {
  const o = Br(e);
  let i = I1(Ut(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Da)))), i
  );
}
function hs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => j1[t]);
}
function z1(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Um(e) {
  return typeof e != "number"
    ? z1(e)
    : { top: e, right: e, bottom: e, left: e };
}
function ms(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Wd(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = yn(t),
    s = Qu(t),
    l = Hu(s),
    a = Ut(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    h = r[l] / 2 - o[l] / 2;
  let w;
  switch (a) {
    case "top":
      w = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      w = { x: c, y: r.y + r.height };
      break;
    case "right":
      w = { x: r.x + r.width, y: d };
      break;
    case "left":
      w = { x: r.x - o.width, y: d };
      break;
    default:
      w = { x: r.x, y: r.y };
  }
  switch (Br(t)) {
    case "start":
      w[s] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      w[s] += h * (n && u ? -1 : 1);
      break;
  }
  return w;
}
const $1 = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: d } = Wd(u, r, a),
    h = r,
    w = {},
    S = 0;
  for (let m = 0; m < l.length; m++) {
    const { name: x, fn: p } = l[m],
      {
        x: f,
        y,
        data: E,
        reset: C,
      } = await p({
        x: c,
        y: d,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: w,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (c = f ?? c),
      (d = y ?? d),
      (w = { ...w, [x]: { ...w[x], ...E } }),
      C &&
        S <= 50 &&
        (S++,
        typeof C == "object" &&
          (C.placement && (h = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: c, y: d } = Wd(u, h, a))),
        (m = -1));
  }
  return { x: c, y: d, placement: h, strategy: o, middlewareData: w };
};
async function zo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: h = !1,
      padding: w = 0,
    } = $t(t, e),
    S = Um(w),
    x = l[h ? (d === "floating" ? "reference" : "floating") : d],
    p = ms(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: a,
      })
    ),
    f =
      d === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    E = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = ms(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: f,
            offsetParent: y,
            strategy: a,
          })
        : f
    );
  return {
    top: (p.top - C.top + S.top) / E.y,
    bottom: (C.bottom - p.bottom + S.bottom) / E.y,
    left: (p.left - C.left + S.left) / E.x,
    right: (C.right - p.right + S.right) / E.x,
  };
}
const U1 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: c = 0 } = $t(e, t) || {};
      if (u == null) return {};
      const d = Um(c),
        h = { x: n, y: r },
        w = Qu(o),
        S = Hu(w),
        m = await s.getDimensions(u),
        x = w === "y",
        p = x ? "top" : "left",
        f = x ? "bottom" : "right",
        y = x ? "clientHeight" : "clientWidth",
        E = i.reference[S] + i.reference[w] - h[w] - i.floating[S],
        C = h[w] - i.reference[w],
        k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let P = k ? k[y] : 0;
      (!P || !(await (s.isElement == null ? void 0 : s.isElement(k)))) &&
        (P = l.floating[y] || i.floating[S]);
      const T = E / 2 - C / 2,
        L = P / 2 - m[S] / 2 - 1,
        _ = gn(d[p], L),
        z = gn(d[f], L),
        M = _,
        W = P - m[S] - z,
        j = P / 2 - m[S] / 2 + T,
        Q = Ma(M, j, W),
        U =
          !a.arrow &&
          Br(o) != null &&
          j !== Q &&
          i.reference[S] / 2 - (j < M ? _ : z) - m[S] / 2 < 0,
        H = U ? (j < M ? j - M : j - W) : 0;
      return {
        [w]: h[w] + H,
        data: {
          [w]: Q,
          centerOffset: j - Q - H,
          ...(U && { alignmentOffset: H }),
        },
        reset: U,
      };
    },
  }),
  V1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: h,
              fallbackStrategy: w = "bestFit",
              fallbackAxisSideDirection: S = "none",
              flipAlignment: m = !0,
              ...x
            } = $t(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const p = Ut(o),
            f = yn(l),
            y = Ut(l) === l,
            E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            C = h || (y || !m ? [hs(l)] : D1(l)),
            k = S !== "none";
          !h && k && C.push(...F1(l, m, S, E));
          const P = [l, ...C],
            T = await zo(t, x),
            L = [];
          let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && L.push(T[p]), d)) {
            const j = M1(o, s, E);
            L.push(T[j[0]], T[j[1]]);
          }
          if (
            ((_ = [..._, { placement: o, overflows: L }]),
            !L.every((j) => j <= 0))
          ) {
            var z, M;
            const j = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1,
              Q = P[j];
            if (Q)
              return {
                data: { index: j, overflows: _ },
                reset: { placement: Q },
              };
            let U =
              (M = _.filter((H) => H.overflows[0] <= 0).sort(
                (H, R) => H.overflows[1] - R.overflows[1]
              )[0]) == null
                ? void 0
                : M.placement;
            if (!U)
              switch (w) {
                case "bestFit": {
                  var W;
                  const H =
                    (W = _.filter((R) => {
                      if (k) {
                        const A = yn(R.placement);
                        return A === f || A === "y";
                      }
                      return !0;
                    })
                      .map((R) => [
                        R.placement,
                        R.overflows
                          .filter((A) => A > 0)
                          .reduce((A, D) => A + D, 0),
                      ])
                      .sort((R, A) => R[1] - A[1])[0]) == null
                      ? void 0
                      : W[0];
                  H && (U = H);
                  break;
                }
                case "initialPlacement":
                  U = l;
                  break;
              }
            if (o !== U) return { reset: { placement: U } };
          }
          return {};
        },
      }
    );
  };
function Bd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Hd(e) {
  return _1.some((t) => e[t] >= 0);
}
const W1 = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = $t(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await zo(t, { ...o, elementContext: "reference" }),
              s = Bd(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: Hd(s) },
            };
          }
          case "escaped": {
            const i = await zo(t, { ...o, altBoundary: !0 }),
              s = Bd(i, n.floating);
            return { data: { escapedOffsets: s, escaped: Hd(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function B1(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Ut(n),
    l = Br(n),
    a = yn(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    c = i && a ? -1 : 1,
    d = $t(t, e);
  let {
    mainAxis: h,
    crossAxis: w,
    alignmentAxis: S,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    l && typeof S == "number" && (w = l === "end" ? S * -1 : S),
    a ? { x: w * c, y: h * u } : { x: h * u, y: w * c }
  );
}
const H1 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            a = await B1(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  Q1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (x) => {
                  let { x: p, y: f } = x;
                  return { x: p, y: f };
                },
              },
              ...a
            } = $t(e, t),
            u = { x: n, y: r },
            c = await zo(t, a),
            d = yn(Ut(o)),
            h = Bu(d);
          let w = u[h],
            S = u[d];
          if (i) {
            const x = h === "y" ? "top" : "left",
              p = h === "y" ? "bottom" : "right",
              f = w + c[x],
              y = w - c[p];
            w = Ma(f, w, y);
          }
          if (s) {
            const x = d === "y" ? "top" : "left",
              p = d === "y" ? "bottom" : "right",
              f = S + c[x],
              y = S - c[p];
            S = Ma(f, S, y);
          }
          const m = l.fn({ ...t, [h]: w, [d]: S });
          return {
            ...m,
            data: { x: m.x - n, y: m.y - r, enabled: { [h]: i, [d]: s } },
          };
        },
      }
    );
  },
  K1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = $t(e, t),
            c = { x: n, y: r },
            d = yn(o),
            h = Bu(d);
          let w = c[h],
            S = c[d];
          const m = $t(l, t),
            x =
              typeof m == "number"
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (a) {
            const y = h === "y" ? "height" : "width",
              E = i.reference[h] - i.floating[y] + x.mainAxis,
              C = i.reference[h] + i.reference[y] - x.mainAxis;
            w < E ? (w = E) : w > C && (w = C);
          }
          if (u) {
            var p, f;
            const y = h === "y" ? "width" : "height",
              E = ["top", "left"].includes(Ut(o)),
              C =
                i.reference[d] -
                i.floating[y] +
                ((E && ((p = s.offset) == null ? void 0 : p[d])) || 0) +
                (E ? 0 : x.crossAxis),
              k =
                i.reference[d] +
                i.reference[y] +
                (E ? 0 : ((f = s.offset) == null ? void 0 : f[d]) || 0) -
                (E ? x.crossAxis : 0);
            S < C ? (S = C) : S > k && (S = k);
          }
          return { [h]: w, [d]: S };
        },
      }
    );
  },
  G1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: a = () => {}, ...u } = $t(e, t),
            c = await zo(t, u),
            d = Ut(o),
            h = Br(o),
            w = yn(o) === "y",
            { width: S, height: m } = i.floating;
          let x, p;
          d === "top" || d === "bottom"
            ? ((x = d),
              (p =
                h ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((p = d), (x = h === "end" ? "top" : "bottom"));
          const f = m - c.top - c.bottom,
            y = S - c.left - c.right,
            E = gn(m - c[x], f),
            C = gn(S - c[p], y),
            k = !t.middlewareData.shift;
          let P = E,
            T = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (T = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (P = f),
            k && !h)
          ) {
            const _ = ze(c.left, 0),
              z = ze(c.right, 0),
              M = ze(c.top, 0),
              W = ze(c.bottom, 0);
            w
              ? (T = S - 2 * (_ !== 0 || z !== 0 ? _ + z : ze(c.left, c.right)))
              : (P =
                  m - 2 * (M !== 0 || W !== 0 ? M + W : ze(c.top, c.bottom)));
          }
          await a({ ...t, availableWidth: T, availableHeight: P });
          const L = await s.getDimensions(l.floating);
          return S !== L.width || m !== L.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Vs() {
  return typeof window < "u";
}
function Hr(e) {
  return Vm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ve(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Tt(e) {
  var t;
  return (t = (Vm(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Vm(e) {
  return Vs() ? e instanceof Node || e instanceof Ve(e).Node : !1;
}
function ft(e) {
  return Vs() ? e instanceof Element || e instanceof Ve(e).Element : !1;
}
function Nt(e) {
  return Vs() ? e instanceof HTMLElement || e instanceof Ve(e).HTMLElement : !1;
}
function Qd(e) {
  return !Vs() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ve(e).ShadowRoot;
}
function Yo(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = pt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function X1(e) {
  return ["table", "td", "th"].includes(Hr(e));
}
function Ws(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ku(e) {
  const t = Gu(),
    n = ft(e) ? pt(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function Y1(e) {
  let t = wn(e);
  for (; Nt(t) && !jr(t); ) {
    if (Ku(t)) return t;
    if (Ws(t)) return null;
    t = wn(t);
  }
  return null;
}
function Gu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function jr(e) {
  return ["html", "body", "#document"].includes(Hr(e));
}
function pt(e) {
  return Ve(e).getComputedStyle(e);
}
function Bs(e) {
  return ft(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function wn(e) {
  if (Hr(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Qd(e) && e.host) || Tt(e);
  return Qd(t) ? t.host : t;
}
function Wm(e) {
  const t = wn(e);
  return jr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Nt(t) && Yo(t)
    ? t
    : Wm(t);
}
function $o(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Wm(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = Ve(o);
  if (i) {
    const l = Ia(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Yo(o) ? o : [],
      l && n ? $o(l) : []
    );
  }
  return t.concat(o, $o(o, [], n));
}
function Ia(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Bm(e) {
  const t = pt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Nt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = ps(n) !== i || ps(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function Xu(e) {
  return ft(e) ? e : e.contextElement;
}
function hr(e) {
  const t = Xu(e);
  if (!Nt(t)) return Pt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Bm(t);
  let s = (i ? ps(n.width) : n.width) / r,
    l = (i ? ps(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const q1 = Pt(0);
function Hm(e) {
  const t = Ve(e);
  return !Gu() || !t.visualViewport
    ? q1
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Z1(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Ve(e)) ? !1 : t;
}
function Un(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Xu(e);
  let s = Pt(1);
  t && (r ? ft(r) && (s = hr(r)) : (s = hr(e)));
  const l = Z1(i, n, r) ? Hm(i) : Pt(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    c = o.width / s.x,
    d = o.height / s.y;
  if (i) {
    const h = Ve(i),
      w = r && ft(r) ? Ve(r) : r;
    let S = h,
      m = Ia(S);
    for (; m && r && w !== S; ) {
      const x = hr(m),
        p = m.getBoundingClientRect(),
        f = pt(m),
        y = p.left + (m.clientLeft + parseFloat(f.paddingLeft)) * x.x,
        E = p.top + (m.clientTop + parseFloat(f.paddingTop)) * x.y;
      (a *= x.x),
        (u *= x.y),
        (c *= x.x),
        (d *= x.y),
        (a += y),
        (u += E),
        (S = Ve(m)),
        (m = Ia(S));
    }
  }
  return ms({ width: c, height: d, x: a, y: u });
}
function Yu(e, t) {
  const n = Bs(e).scrollLeft;
  return t ? t.left + n : Un(Tt(e)).left + n;
}
function Qm(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : Yu(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function J1(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = Tt(r),
    l = t ? Ws(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Pt(1);
  const c = Pt(0),
    d = Nt(r);
  if (
    (d || (!d && !i)) &&
    ((Hr(r) !== "body" || Yo(s)) && (a = Bs(r)), Nt(r))
  ) {
    const w = Un(r);
    (u = hr(r)), (c.x = w.x + r.clientLeft), (c.y = w.y + r.clientTop);
  }
  const h = s && !d && !i ? Qm(s, a, !0) : Pt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + h.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + h.y,
  };
}
function eS(e) {
  return Array.from(e.getClientRects());
}
function tS(e) {
  const t = Tt(e),
    n = Bs(e),
    r = e.ownerDocument.body,
    o = ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Yu(e);
  const l = -n.scrollTop;
  return (
    pt(r).direction === "rtl" && (s += ze(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function nS(e, t) {
  const n = Ve(e),
    r = Tt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = Gu();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
function rS(e, t) {
  const n = Un(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Nt(e) ? hr(e) : Pt(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function Kd(e, t, n) {
  let r;
  if (t === "viewport") r = nS(e, n);
  else if (t === "document") r = tS(Tt(e));
  else if (ft(t)) r = rS(t, n);
  else {
    const o = Hm(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return ms(r);
}
function Km(e, t) {
  const n = wn(e);
  return n === t || !ft(n) || jr(n)
    ? !1
    : pt(n).position === "fixed" || Km(n, t);
}
function oS(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = $o(e, [], !1).filter((l) => ft(l) && Hr(l) !== "body"),
    o = null;
  const i = pt(e).position === "fixed";
  let s = i ? wn(e) : e;
  for (; ft(s) && !jr(s); ) {
    const l = pt(s),
      a = Ku(s);
    !a && l.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Yo(s) && !a && Km(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (o = l),
      (s = wn(s));
  }
  return t.set(e, r), r;
}
function iS(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Ws(t)
          ? []
          : oS(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce((u, c) => {
      const d = Kd(t, c, o);
      return (
        (u.top = ze(d.top, u.top)),
        (u.right = gn(d.right, u.right)),
        (u.bottom = gn(d.bottom, u.bottom)),
        (u.left = ze(d.left, u.left)),
        u
      );
    }, Kd(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function sS(e) {
  const { width: t, height: n } = Bm(e);
  return { width: t, height: n };
}
function lS(e, t, n) {
  const r = Nt(t),
    o = Tt(t),
    i = n === "fixed",
    s = Un(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Pt(0);
  if (r || (!r && !i))
    if (((Hr(t) !== "body" || Yo(o)) && (l = Bs(t)), r)) {
      const h = Un(t, !0, i, t);
      (a.x = h.x + t.clientLeft), (a.y = h.y + t.clientTop);
    } else o && (a.x = Yu(o));
  const u = o && !r && !i ? Qm(o, l) : Pt(0),
    c = s.left + l.scrollLeft - a.x - u.x,
    d = s.top + l.scrollTop - a.y - u.y;
  return { x: c, y: d, width: s.width, height: s.height };
}
function Rl(e) {
  return pt(e).position === "static";
}
function Gd(e, t) {
  if (!Nt(e) || pt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Tt(e) === n && (n = n.ownerDocument.body), n;
}
function Gm(e, t) {
  const n = Ve(e);
  if (Ws(e)) return n;
  if (!Nt(e)) {
    let o = wn(e);
    for (; o && !jr(o); ) {
      if (ft(o) && !Rl(o)) return o;
      o = wn(o);
    }
    return n;
  }
  let r = Gd(e, t);
  for (; r && X1(r) && Rl(r); ) r = Gd(r, t);
  return r && jr(r) && Rl(r) && !Ku(r) ? n : r || Y1(e) || n;
}
const aS = async function (e) {
  const t = this.getOffsetParent || Gm,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: lS(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function uS(e) {
  return pt(e).direction === "rtl";
}
const cS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: J1,
  getDocumentElement: Tt,
  getClippingRect: iS,
  getOffsetParent: Gm,
  getElementRects: aS,
  getClientRects: eS,
  getDimensions: sS,
  getScale: hr,
  isElement: ft,
  isRTL: uS,
};
function Xm(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function dS(e, t) {
  let n = null,
    r;
  const o = Tt(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(),
      { left: c, top: d, width: h, height: w } = u;
    if ((l || t(), !h || !w)) return;
    const S = wi(d),
      m = wi(o.clientWidth - (c + h)),
      x = wi(o.clientHeight - (d + w)),
      p = wi(c),
      y = {
        rootMargin: -S + "px " + -m + "px " + -x + "px " + -p + "px",
        threshold: ze(0, gn(1, a)) || 1,
      };
    let E = !0;
    function C(k) {
      const P = k[0].intersectionRatio;
      if (P !== a) {
        if (!E) return s();
        P
          ? s(!1, P)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      P === 1 && !Xm(u, e.getBoundingClientRect()) && s(), (E = !1);
    }
    try {
      n = new IntersectionObserver(C, { ...y, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function fS(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = Xu(e),
    c = o || i ? [...(u ? $o(u) : []), ...$o(t)] : [];
  c.forEach((p) => {
    o && p.addEventListener("scroll", n, { passive: !0 }),
      i && p.addEventListener("resize", n);
  });
  const d = u && l ? dS(u, n) : null;
  let h = -1,
    w = null;
  s &&
    ((w = new ResizeObserver((p) => {
      let [f] = p;
      f &&
        f.target === u &&
        w &&
        (w.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var y;
          (y = w) == null || y.observe(t);
        }))),
        n();
    })),
    u && !a && w.observe(u),
    w.observe(t));
  let S,
    m = a ? Un(e) : null;
  a && x();
  function x() {
    const p = Un(e);
    m && !Xm(m, p) && n(), (m = p), (S = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var p;
      c.forEach((f) => {
        o && f.removeEventListener("scroll", n),
          i && f.removeEventListener("resize", n);
      }),
        d == null || d(),
        (p = w) == null || p.disconnect(),
        (w = null),
        a && cancelAnimationFrame(S);
    }
  );
}
const pS = H1,
  hS = Q1,
  mS = V1,
  vS = G1,
  gS = W1,
  Xd = U1,
  yS = K1,
  wS = (e, t, n) => {
    const r = new Map(),
      o = { platform: cS, ...n },
      i = { ...o.platform, _c: r };
    return $1(e, t, { ...o, platform: i });
  };
var Fi = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function vs(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!vs(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !vs(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ym(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yd(e, t) {
  const n = Ym(e);
  return Math.round(t * n) / n;
}
function bl(e) {
  const t = v.useRef(e);
  return (
    Fi(() => {
      t.current = e;
    }),
    t
  );
}
function xS(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [c, d] = v.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, w] = v.useState(r);
  vs(h, r) || w(r);
  const [S, m] = v.useState(null),
    [x, p] = v.useState(null),
    f = v.useCallback((R) => {
      R !== k.current && ((k.current = R), m(R));
    }, []),
    y = v.useCallback((R) => {
      R !== P.current && ((P.current = R), p(R));
    }, []),
    E = i || S,
    C = s || x,
    k = v.useRef(null),
    P = v.useRef(null),
    T = v.useRef(c),
    L = a != null,
    _ = bl(a),
    z = bl(o),
    M = bl(u),
    W = v.useCallback(() => {
      if (!k.current || !P.current) return;
      const R = { placement: t, strategy: n, middleware: h };
      z.current && (R.platform = z.current),
        wS(k.current, P.current, R).then((A) => {
          const D = { ...A, isPositioned: M.current !== !1 };
          j.current &&
            !vs(T.current, D) &&
            ((T.current = D),
            Xo.flushSync(() => {
              d(D);
            }));
        });
    }, [h, t, n, z, M]);
  Fi(() => {
    u === !1 &&
      T.current.isPositioned &&
      ((T.current.isPositioned = !1), d((R) => ({ ...R, isPositioned: !1 })));
  }, [u]);
  const j = v.useRef(!1);
  Fi(
    () => (
      (j.current = !0),
      () => {
        j.current = !1;
      }
    ),
    []
  ),
    Fi(() => {
      if ((E && (k.current = E), C && (P.current = C), E && C)) {
        if (_.current) return _.current(E, C, W);
        W();
      }
    }, [E, C, W, _, L]);
  const Q = v.useMemo(
      () => ({ reference: k, floating: P, setReference: f, setFloating: y }),
      [f, y]
    ),
    U = v.useMemo(() => ({ reference: E, floating: C }), [E, C]),
    H = v.useMemo(() => {
      const R = { position: n, left: 0, top: 0 };
      if (!U.floating) return R;
      const A = Yd(U.floating, c.x),
        D = Yd(U.floating, c.y);
      return l
        ? {
            ...R,
            transform: "translate(" + A + "px, " + D + "px)",
            ...(Ym(U.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: A, top: D };
    }, [n, l, U.floating, c.x, c.y]);
  return v.useMemo(
    () => ({ ...c, update: W, refs: Q, elements: U, floatingStyles: H }),
    [c, W, Q, U, H]
  );
}
const SS = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Xd({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Xd({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  ES = (e, t) => ({ ...pS(e), options: [e, t] }),
  CS = (e, t) => ({ ...hS(e), options: [e, t] }),
  kS = (e, t) => ({ ...yS(e), options: [e, t] }),
  PS = (e, t) => ({ ...mS(e), options: [e, t] }),
  NS = (e, t) => ({ ...vS(e), options: [e, t] }),
  TS = (e, t) => ({ ...gS(e), options: [e, t] }),
  RS = (e, t) => ({ ...SS(e), options: [e, t] });
var bS = "Arrow",
  qm = v.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return g.jsx(ie.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : g.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
qm.displayName = bS;
var AS = qm;
function OS(e) {
  const [t, n] = v.useState(void 0);
  return (
    dt(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Zm = "Popper",
  [Jm, ev] = Ur(Zm),
  [zC, tv] = Jm(Zm),
  nv = "PopperAnchor",
  rv = v.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = tv(nv, n),
      s = v.useRef(null),
      l = Re(t, s);
    return (
      v.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : g.jsx(ie.div, { ...o, ref: l })
    );
  });
rv.displayName = nv;
var qu = "PopperContent",
  [_S, jS] = Jm(qu),
  ov = v.forwardRef((e, t) => {
    var kn, oc, ic, sc, lc, ac;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: w = "optimized",
        onPlaced: S,
        ...m
      } = e,
      x = tv(qu, n),
      [p, f] = v.useState(null),
      y = Re(t, (Kr) => f(Kr)),
      [E, C] = v.useState(null),
      k = OS(E),
      P = (k == null ? void 0 : k.width) ?? 0,
      T = (k == null ? void 0 : k.height) ?? 0,
      L = r + (i !== "center" ? "-" + i : ""),
      _ =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      z = Array.isArray(u) ? u : [u],
      M = z.length > 0,
      W = { padding: _, boundary: z.filter(MS), altBoundary: M },
      {
        refs: j,
        floatingStyles: Q,
        placement: U,
        isPositioned: H,
        middlewareData: R,
      } = xS({
        strategy: "fixed",
        placement: L,
        whileElementsMounted: (...Kr) =>
          fS(...Kr, { animationFrame: w === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          ES({ mainAxis: o + T, alignmentAxis: s }),
          a &&
            CS({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? kS() : void 0,
              ...W,
            }),
          a && PS({ ...W }),
          NS({
            ...W,
            apply: ({
              elements: Kr,
              rects: uc,
              availableWidth: lg,
              availableHeight: ag,
            }) => {
              const { width: ug, height: cg } = uc.reference,
                qo = Kr.floating.style;
              qo.setProperty("--radix-popper-available-width", `${lg}px`),
                qo.setProperty("--radix-popper-available-height", `${ag}px`),
                qo.setProperty("--radix-popper-anchor-width", `${ug}px`),
                qo.setProperty("--radix-popper-anchor-height", `${cg}px`);
            },
          }),
          E && RS({ element: E, padding: l }),
          DS({ arrowWidth: P, arrowHeight: T }),
          h && TS({ strategy: "referenceHidden", ...W }),
        ],
      }),
      [A, D] = lv(U),
      $ = Be(S);
    dt(() => {
      H && ($ == null || $());
    }, [H, $]);
    const J = (kn = R.arrow) == null ? void 0 : kn.x,
      tt = (oc = R.arrow) == null ? void 0 : oc.y,
      Ke = ((ic = R.arrow) == null ? void 0 : ic.centerOffset) !== 0,
      [Qr, Rt] = v.useState();
    return (
      dt(() => {
        p && Rt(window.getComputedStyle(p).zIndex);
      }, [p]),
      g.jsx("div", {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: H ? Q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Qr,
          "--radix-popper-transform-origin": [
            (sc = R.transformOrigin) == null ? void 0 : sc.x,
            (lc = R.transformOrigin) == null ? void 0 : lc.y,
          ].join(" "),
          ...(((ac = R.hide) == null ? void 0 : ac.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: g.jsx(_S, {
          scope: n,
          placedSide: A,
          onArrowChange: C,
          arrowX: J,
          arrowY: tt,
          shouldHideArrow: Ke,
          children: g.jsx(ie.div, {
            "data-side": A,
            "data-align": D,
            ...m,
            ref: y,
            style: { ...m.style, animation: H ? void 0 : "none" },
          }),
        }),
      })
    );
  });
ov.displayName = qu;
var iv = "PopperArrow",
  LS = { top: "bottom", right: "left", bottom: "top", left: "right" },
  sv = v.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = jS(iv, r),
      s = LS[i.placedSide];
    return g.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: g.jsx(AS, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
sv.displayName = iv;
function MS(e) {
  return e !== null;
}
var DS = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, p, f;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, c] = lv(n),
      d = { start: "0%", center: "50%", end: "100%" }[c],
      h = (((p = o.arrow) == null ? void 0 : p.x) ?? 0) + l / 2,
      w = (((f = o.arrow) == null ? void 0 : f.y) ?? 0) + a / 2;
    let S = "",
      m = "";
    return (
      u === "bottom"
        ? ((S = s ? d : `${h}px`), (m = `${-a}px`))
        : u === "top"
        ? ((S = s ? d : `${h}px`), (m = `${r.floating.height + a}px`))
        : u === "right"
        ? ((S = `${-a}px`), (m = s ? d : `${w}px`))
        : u === "left" &&
          ((S = `${r.floating.width + a}px`), (m = s ? d : `${w}px`)),
      { data: { x: S, y: m } }
    );
  },
});
function lv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var IS = rv,
  FS = ov,
  zS = sv,
  [Hs, $C] = Ur("Tooltip", [ev]),
  Zu = ev(),
  av = "TooltipProvider",
  $S = 700,
  qd = "tooltip.open",
  [US, uv] = Hs(av),
  cv = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = $S,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = v.useRef(!0),
      l = v.useRef(!1),
      a = v.useRef(0);
    return (
      v.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      g.jsx(US, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: v.useCallback(() => {
          window.clearTimeout(a.current), (s.current = !1);
        }, []),
        onClose: v.useCallback(() => {
          window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: v.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
cv.displayName = av;
var dv = "Tooltip",
  [UC, Qs] = Hs(dv),
  Fa = "TooltipTrigger",
  VS = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Qs(Fa, n),
      i = uv(Fa, n),
      s = Zu(n),
      l = v.useRef(null),
      a = Re(t, l, o.onTriggerChange),
      u = v.useRef(!1),
      c = v.useRef(!1),
      d = v.useCallback(() => (u.current = !1), []);
    return (
      v.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d]
      ),
      g.jsx(IS, {
        asChild: !0,
        ...s,
        children: g.jsx(ie.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: te(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: te(e.onPointerLeave, () => {
            o.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: te(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 });
          }),
          onFocus: te(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: te(e.onBlur, o.onClose),
          onClick: te(e.onClick, o.onClose),
        }),
      })
    );
  });
VS.displayName = Fa;
var WS = "TooltipPortal",
  [VC, BS] = Hs(WS, { forceMount: void 0 }),
  Lr = "TooltipContent",
  fv = v.forwardRef((e, t) => {
    const n = BS(Lr, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = Qs(Lr, e.__scopeTooltip);
    return g.jsx(Vr, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? g.jsx(pv, { side: o, ...i, ref: t })
        : g.jsx(HS, { side: o, ...i, ref: t }),
    });
  }),
  HS = v.forwardRef((e, t) => {
    const n = Qs(Lr, e.__scopeTooltip),
      r = uv(Lr, e.__scopeTooltip),
      o = v.useRef(null),
      i = Re(t, o),
      [s, l] = v.useState(null),
      { trigger: a, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: d } = r,
      h = v.useCallback(() => {
        l(null), d(!1);
      }, [d]),
      w = v.useCallback(
        (S, m) => {
          const x = S.currentTarget,
            p = { x: S.clientX, y: S.clientY },
            f = YS(p, x.getBoundingClientRect()),
            y = qS(p, f),
            E = ZS(m.getBoundingClientRect()),
            C = eE([...y, ...E]);
          l(C), d(!0);
        },
        [d]
      );
    return (
      v.useEffect(() => () => h(), [h]),
      v.useEffect(() => {
        if (a && c) {
          const S = (x) => w(x, c),
            m = (x) => w(x, a);
          return (
            a.addEventListener("pointerleave", S),
            c.addEventListener("pointerleave", m),
            () => {
              a.removeEventListener("pointerleave", S),
                c.removeEventListener("pointerleave", m);
            }
          );
        }
      }, [a, c, w, h]),
      v.useEffect(() => {
        if (s) {
          const S = (m) => {
            const x = m.target,
              p = { x: m.clientX, y: m.clientY },
              f =
                (a == null ? void 0 : a.contains(x)) ||
                (c == null ? void 0 : c.contains(x)),
              y = !JS(p, s);
            f ? h() : y && (h(), u());
          };
          return (
            document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
          );
        }
      }, [a, c, s, u, h]),
      g.jsx(pv, { ...e, ref: i })
    );
  }),
  [QS, KS] = Hs(dv, { isInside: !1 }),
  GS = qw("TooltipContent"),
  pv = v.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...l
      } = e,
      a = Qs(Lr, n),
      u = Zu(n),
      { onClose: c } = a;
    return (
      v.useEffect(
        () => (
          document.addEventListener(qd, c),
          () => document.removeEventListener(qd, c)
        ),
        [c]
      ),
      v.useEffect(() => {
        if (a.trigger) {
          const d = (h) => {
            const w = h.target;
            w != null && w.contains(a.trigger) && c();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [a.trigger, c]),
      g.jsx(Is, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: g.jsxs(FS, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            g.jsx(GS, { children: r }),
            g.jsx(QS, {
              scope: n,
              isInside: !0,
              children: g.jsx(yx, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
fv.displayName = Lr;
var hv = "TooltipArrow",
  XS = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Zu(n);
    return KS(hv, n).isInside ? null : g.jsx(zS, { ...o, ...r, ref: t });
  });
XS.displayName = hv;
function YS(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function qS(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function ZS(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function JS(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i].x,
      a = t[i].y,
      u = t[s].x,
      c = t[s].y;
    a > r != c > r && n < ((u - l) * (r - a)) / (c - a) + l && (o = !o);
  }
  return o;
}
function eE(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    tE(t)
  );
}
function tE(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var nE = cv,
  mv = fv;
const rE = nE,
  oE = v.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    g.jsx(mv, {
      ref: r,
      sideOffset: t,
      className: ae(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
        e
      ),
      ...n,
    })
  );
oE.displayName = mv.displayName;
const iE = Us(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground border border-primary-border",
          destructive:
            "bg-destructive text-destructive-foreground border border-destructive-border",
          outline:
            " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
          secondary:
            "border bg-secondary text-secondary-foreground border border-secondary-border ",
          ghost: "border border-transparent",
        },
        size: {
          default: "min-h-9 px-4 py-2",
          sm: "min-h-8 rounded-md px-3 text-xs",
          lg: "min-h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  St = v.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? Xw : "button";
      return g.jsx(s, {
        className: ae(iE({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    }
  );
St.displayName = "Button";
var Al = "focusScope.autoFocusOnMount",
  Ol = "focusScope.autoFocusOnUnmount",
  Zd = { bubbles: !1, cancelable: !0 },
  sE = "FocusScope",
  vv = v.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [l, a] = v.useState(null),
      u = Be(o),
      c = Be(i),
      d = v.useRef(null),
      h = Re(t, (m) => a(m)),
      w = v.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    v.useEffect(() => {
      if (r) {
        let m = function (y) {
            if (w.paused || !l) return;
            const E = y.target;
            l.contains(E) ? (d.current = E) : Gt(d.current, { select: !0 });
          },
          x = function (y) {
            if (w.paused || !l) return;
            const E = y.relatedTarget;
            E !== null && (l.contains(E) || Gt(d.current, { select: !0 }));
          },
          p = function (y) {
            if (document.activeElement === document.body)
              for (const C of y) C.removedNodes.length > 0 && Gt(l);
          };
        document.addEventListener("focusin", m),
          document.addEventListener("focusout", x);
        const f = new MutationObserver(p);
        return (
          l && f.observe(l, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", m),
              document.removeEventListener("focusout", x),
              f.disconnect();
          }
        );
      }
    }, [r, l, w.paused]),
      v.useEffect(() => {
        if (l) {
          ef.add(w);
          const m = document.activeElement;
          if (!l.contains(m)) {
            const p = new CustomEvent(Al, Zd);
            l.addEventListener(Al, u),
              l.dispatchEvent(p),
              p.defaultPrevented ||
                (lE(fE(gv(l)), { select: !0 }),
                document.activeElement === m && Gt(l));
          }
          return () => {
            l.removeEventListener(Al, u),
              setTimeout(() => {
                const p = new CustomEvent(Ol, Zd);
                l.addEventListener(Ol, c),
                  l.dispatchEvent(p),
                  p.defaultPrevented || Gt(m ?? document.body, { select: !0 }),
                  l.removeEventListener(Ol, c),
                  ef.remove(w);
              }, 0);
          };
        }
      }, [l, u, c, w]);
    const S = v.useCallback(
      (m) => {
        if ((!n && !r) || w.paused) return;
        const x = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
          p = document.activeElement;
        if (x && p) {
          const f = m.currentTarget,
            [y, E] = aE(f);
          y && E
            ? !m.shiftKey && p === E
              ? (m.preventDefault(), n && Gt(y, { select: !0 }))
              : m.shiftKey &&
                p === y &&
                (m.preventDefault(), n && Gt(E, { select: !0 }))
            : p === f && m.preventDefault();
        }
      },
      [n, r, w.paused]
    );
    return g.jsx(ie.div, { tabIndex: -1, ...s, ref: h, onKeyDown: S });
  });
vv.displayName = sE;
function lE(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Gt(r, { select: t }), document.activeElement !== n)) return;
}
function aE(e) {
  const t = gv(e),
    n = Jd(t, e),
    r = Jd(t.reverse(), e);
  return [n, r];
}
function gv(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Jd(e, t) {
  for (const n of e) if (!uE(n, { upTo: t })) return n;
}
function uE(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function cE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Gt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && cE(e) && t && e.select();
  }
}
var ef = dE();
function dE() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = tf(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = tf(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function tf(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function fE(e) {
  return e.filter((t) => t.tagName !== "A");
}
var _l = 0;
function pE() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? nf()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? nf()),
      _l++,
      () => {
        _l === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          _l--;
      }
    );
  }, []);
}
function nf() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Et = function () {
  return (
    (Et =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Et.apply(this, arguments)
  );
};
function yv(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function hE(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var zi = "right-scroll-bar-position",
  $i = "width-before-scroll-bar",
  mE = "with-scroll-bars-hidden",
  vE = "--removed-body-scroll-bar-size";
function jl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function gE(e, t) {
  var n = v.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var yE = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  rf = new WeakMap();
function wE(e, t) {
  var n = gE(null, function (r) {
    return e.forEach(function (o) {
      return jl(o, r);
    });
  });
  return (
    yE(
      function () {
        var r = rf.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (l) {
            i.has(l) || jl(l, null);
          }),
            i.forEach(function (l) {
              o.has(l) || jl(l, s);
            });
        }
        rf.set(n, e);
      },
      [e]
    ),
    n
  );
}
function xE(e) {
  return e;
}
function SE(e, t) {
  t === void 0 && (t = xE);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (l) {
              return l !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (l) {
            return i(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var l = n;
          (n = []), l.forEach(i), (s = n);
        }
        var a = function () {
            var c = s;
            (s = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(a);
          };
        u(),
          (n = {
            push: function (c) {
              s.push(c), u();
            },
            filter: function (c) {
              return (s = s.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function EE(e) {
  e === void 0 && (e = {});
  var t = SE(null);
  return (t.options = Et({ async: !0, ssr: !1 }, e)), t;
}
var wv = function (e) {
  var t = e.sideCar,
    n = yv(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return v.createElement(r, Et({}, n));
};
wv.isSideCarExport = !0;
function CE(e, t) {
  return e.useMedium(t), wv;
}
var xv = EE(),
  Ll = function () {},
  Ks = v.forwardRef(function (e, t) {
    var n = v.useRef(null),
      r = v.useState({
        onScrollCapture: Ll,
        onWheelCapture: Ll,
        onTouchMoveCapture: Ll,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      l = e.children,
      a = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      h = e.sideCar,
      w = e.noIsolation,
      S = e.inert,
      m = e.allowPinchZoom,
      x = e.as,
      p = x === void 0 ? "div" : x,
      f = e.gapMode,
      y = yv(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      E = h,
      C = wE([n, t]),
      k = Et(Et({}, y), o);
    return v.createElement(
      v.Fragment,
      null,
      c &&
        v.createElement(E, {
          sideCar: xv,
          removeScrollBar: u,
          shards: d,
          noIsolation: w,
          inert: S,
          setCallbacks: i,
          allowPinchZoom: !!m,
          lockRef: n,
          gapMode: f,
        }),
      s
        ? v.cloneElement(v.Children.only(l), Et(Et({}, k), { ref: C }))
        : v.createElement(p, Et({}, k, { className: a, ref: C }), l)
    );
  });
Ks.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ks.classNames = { fullWidth: $i, zeroRight: zi };
var kE = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function PE() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = kE();
  return t && e.setAttribute("nonce", t), e;
}
function NE(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function TE(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var RE = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = PE()) && (NE(t, n), TE(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  bE = function () {
    var e = RE();
    return function (t, n) {
      v.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Sv = function () {
    var e = bE(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  AE = { left: 0, top: 0, right: 0, gap: 0 },
  Ml = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  OE = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ml(n), Ml(r), Ml(o)];
  },
  _E = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return AE;
    var t = OE(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  jE = Sv(),
  mr = "data-scroll-locked",
  LE = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          mE,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          mr,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(l, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(l, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          zi,
          ` {
    right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          $i,
          ` {
    margin-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(zi, " .")
        .concat(
          zi,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat($i, " .")
        .concat(
          $i,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          mr,
          `] {
    `
        )
        .concat(vE, ": ")
        .concat(
          l,
          `px;
  }
`
        )
    );
  },
  of = function () {
    var e = parseInt(document.body.getAttribute(mr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  ME = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(mr, (of() + 1).toString()),
        function () {
          var e = of() - 1;
          e <= 0
            ? document.body.removeAttribute(mr)
            : document.body.setAttribute(mr, e.toString());
        }
      );
    }, []);
  },
  DE = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    ME();
    var i = v.useMemo(
      function () {
        return _E(o);
      },
      [o]
    );
    return v.createElement(jE, { styles: LE(i, !t, o, n ? "" : "!important") });
  },
  za = !1;
if (typeof window < "u")
  try {
    var xi = Object.defineProperty({}, "passive", {
      get: function () {
        return (za = !0), !0;
      },
    });
    window.addEventListener("test", xi, xi),
      window.removeEventListener("test", xi, xi);
  } catch {
    za = !1;
  }
var Qn = za ? { passive: !1 } : !1,
  IE = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Ev = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !IE(e) && n[t] === "visible")
    );
  },
  FE = function (e) {
    return Ev(e, "overflowY");
  },
  zE = function (e) {
    return Ev(e, "overflowX");
  },
  sf = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Cv(e, r);
      if (o) {
        var i = kv(e, r),
          s = i[1],
          l = i[2];
        if (s > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  $E = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  UE = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Cv = function (e, t) {
    return e === "v" ? FE(t) : zE(t);
  },
  kv = function (e, t) {
    return e === "v" ? $E(t) : UE(t);
  },
  VE = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  WE = function (e, t, n, r, o) {
    var i = VE(e, window.getComputedStyle(t).direction),
      s = i * r,
      l = n.target,
      a = t.contains(l),
      u = !1,
      c = s > 0,
      d = 0,
      h = 0;
    do {
      var w = kv(e, l),
        S = w[0],
        m = w[1],
        x = w[2],
        p = m - x - i * S;
      (S || p) && Cv(e, l) && ((d += p), (h += S)),
        l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
    } while ((!a && l !== document.body) || (a && (t.contains(l) || t === l)));
    return (
      ((c && (Math.abs(d) < 1 || !o)) || (!c && (Math.abs(h) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  Si = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  lf = function (e) {
    return [e.deltaX, e.deltaY];
  },
  af = function (e) {
    return e && "current" in e ? e.current : e;
  },
  BE = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  HE = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  QE = 0,
  Kn = [];
function KE(e) {
  var t = v.useRef([]),
    n = v.useRef([0, 0]),
    r = v.useRef(),
    o = v.useState(QE++)[0],
    i = v.useState(Sv)[0],
    s = v.useRef(e);
  v.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    v.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var m = hE([e.lockRef.current], (e.shards || []).map(af), !0).filter(
            Boolean
          );
          return (
            m.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                m.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var l = v.useCallback(function (m, x) {
      if (
        ("touches" in m && m.touches.length === 2) ||
        (m.type === "wheel" && m.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var p = Si(m),
        f = n.current,
        y = "deltaX" in m ? m.deltaX : f[0] - p[0],
        E = "deltaY" in m ? m.deltaY : f[1] - p[1],
        C,
        k = m.target,
        P = Math.abs(y) > Math.abs(E) ? "h" : "v";
      if ("touches" in m && P === "h" && k.type === "range") return !1;
      var T = sf(P, k);
      if (!T) return !0;
      if ((T ? (C = P) : ((C = P === "v" ? "h" : "v"), (T = sf(P, k))), !T))
        return !1;
      if (
        (!r.current && "changedTouches" in m && (y || E) && (r.current = C), !C)
      )
        return !0;
      var L = r.current || C;
      return WE(L, x, m, L === "h" ? y : E, !0);
    }, []),
    a = v.useCallback(function (m) {
      var x = m;
      if (!(!Kn.length || Kn[Kn.length - 1] !== i)) {
        var p = "deltaY" in x ? lf(x) : Si(x),
          f = t.current.filter(function (C) {
            return (
              C.name === x.type &&
              (C.target === x.target || x.target === C.shadowParent) &&
              BE(C.delta, p)
            );
          })[0];
        if (f && f.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!f) {
          var y = (s.current.shards || [])
              .map(af)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(x.target);
              }),
            E = y.length > 0 ? l(x, y[0]) : !s.current.noIsolation;
          E && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    u = v.useCallback(function (m, x, p, f) {
      var y = { name: m, delta: x, target: p, should: f, shadowParent: GE(p) };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (E) {
            return E !== y;
          });
        }, 1);
    }, []),
    c = v.useCallback(function (m) {
      (n.current = Si(m)), (r.current = void 0);
    }, []),
    d = v.useCallback(function (m) {
      u(m.type, lf(m), m.target, l(m, e.lockRef.current));
    }, []),
    h = v.useCallback(function (m) {
      u(m.type, Si(m), m.target, l(m, e.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      Kn.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: h,
      }),
      document.addEventListener("wheel", a, Qn),
      document.addEventListener("touchmove", a, Qn),
      document.addEventListener("touchstart", c, Qn),
      function () {
        (Kn = Kn.filter(function (m) {
          return m !== i;
        })),
          document.removeEventListener("wheel", a, Qn),
          document.removeEventListener("touchmove", a, Qn),
          document.removeEventListener("touchstart", c, Qn);
      }
    );
  }, []);
  var w = e.removeScrollBar,
    S = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    S ? v.createElement(i, { styles: HE(o) }) : null,
    w ? v.createElement(DE, { gapMode: e.gapMode }) : null
  );
}
function GE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const XE = CE(xv, KE);
var Pv = v.forwardRef(function (e, t) {
  return v.createElement(Ks, Et({}, e, { ref: t, sideCar: XE }));
});
Pv.classNames = Ks.classNames;
var YE = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Gn = new WeakMap(),
  Ei = new WeakMap(),
  Ci = {},
  Dl = 0,
  Nv = function (e) {
    return e && (e.host || Nv(e.parentNode));
  },
  qE = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Nv(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  ZE = function (e, t, n, r) {
    var o = qE(t, Array.isArray(e) ? e : [e]);
    Ci[n] || (Ci[n] = new WeakMap());
    var i = Ci[n],
      s = [],
      l = new Set(),
      a = new Set(o),
      u = function (d) {
        !d || l.has(d) || (l.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var c = function (d) {
      !d ||
        a.has(d) ||
        Array.prototype.forEach.call(d.children, function (h) {
          if (l.has(h)) c(h);
          else
            try {
              var w = h.getAttribute(r),
                S = w !== null && w !== "false",
                m = (Gn.get(h) || 0) + 1,
                x = (i.get(h) || 0) + 1;
              Gn.set(h, m),
                i.set(h, x),
                s.push(h),
                m === 1 && S && Ei.set(h, !0),
                x === 1 && h.setAttribute(n, "true"),
                S || h.setAttribute(r, "true");
            } catch (p) {
              console.error("aria-hidden: cannot operate on ", h, p);
            }
        });
    };
    return (
      c(t),
      l.clear(),
      Dl++,
      function () {
        s.forEach(function (d) {
          var h = Gn.get(d) - 1,
            w = i.get(d) - 1;
          Gn.set(d, h),
            i.set(d, w),
            h || (Ei.has(d) || d.removeAttribute(r), Ei.delete(d)),
            w || d.removeAttribute(n);
        }),
          Dl--,
          Dl ||
            ((Gn = new WeakMap()),
            (Gn = new WeakMap()),
            (Ei = new WeakMap()),
            (Ci = {}));
      }
    );
  },
  JE = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = YE(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        ZE(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Ju = "Dialog",
  [Tv, WC] = Ur(Ju),
  [eC, ht] = Tv(Ju),
  Rv = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: s = !0,
      } = e,
      l = v.useRef(null),
      a = v.useRef(null),
      [u = !1, c] = rm({ prop: r, defaultProp: o, onChange: i });
    return g.jsx(eC, {
      scope: t,
      triggerRef: l,
      contentRef: a,
      contentId: Tl(),
      titleId: Tl(),
      descriptionId: Tl(),
      open: u,
      onOpenChange: c,
      onOpenToggle: v.useCallback(() => c((d) => !d), [c]),
      modal: s,
      children: n,
    });
  };
Rv.displayName = Ju;
var bv = "DialogTrigger",
  Av = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ht(bv, n),
      i = Re(t, o.triggerRef);
    return g.jsx(ie.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": nc(o.open),
      ...r,
      ref: i,
      onClick: te(e.onClick, o.onOpenToggle),
    });
  });
Av.displayName = bv;
var ec = "DialogPortal",
  [tC, Ov] = Tv(ec, { forceMount: void 0 }),
  _v = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = ht(ec, t);
    return g.jsx(tC, {
      scope: t,
      forceMount: n,
      children: v.Children.map(r, (s) =>
        g.jsx(Vr, {
          present: n || i.open,
          children: g.jsx(zu, { asChild: !0, container: o, children: s }),
        })
      ),
    });
  };
_v.displayName = ec;
var gs = "DialogOverlay",
  jv = v.forwardRef((e, t) => {
    const n = Ov(gs, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = ht(gs, e.__scopeDialog);
    return i.modal
      ? g.jsx(Vr, {
          present: r || i.open,
          children: g.jsx(rC, { ...o, ref: t }),
        })
      : null;
  });
jv.displayName = gs;
var nC = Fo("DialogOverlay.RemoveScroll"),
  rC = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ht(gs, n);
    return g.jsx(Pv, {
      as: nC,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: g.jsx(ie.div, {
        "data-state": nc(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Vn = "DialogContent",
  Lv = v.forwardRef((e, t) => {
    const n = Ov(Vn, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = ht(Vn, e.__scopeDialog);
    return g.jsx(Vr, {
      present: r || i.open,
      children: i.modal
        ? g.jsx(oC, { ...o, ref: t })
        : g.jsx(iC, { ...o, ref: t }),
    });
  });
Lv.displayName = Vn;
var oC = v.forwardRef((e, t) => {
    const n = ht(Vn, e.__scopeDialog),
      r = v.useRef(null),
      o = Re(t, n.contentRef, r);
    return (
      v.useEffect(() => {
        const i = r.current;
        if (i) return JE(i);
      }, []),
      g.jsx(Mv, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: te(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: te(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent,
            l = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: te(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  iC = v.forwardRef((e, t) => {
    const n = ht(Vn, e.__scopeDialog),
      r = v.useRef(!1),
      o = v.useRef(!1);
    return g.jsx(Mv, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var s, l;
        (s = e.onCloseAutoFocus) == null || s.call(e, i),
          i.defaultPrevented ||
            (r.current || (l = n.triggerRef.current) == null || l.focus(),
            i.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (i) => {
        var a, u;
        (a = e.onInteractOutside) == null || a.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const s = i.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            o.current &&
            i.preventDefault();
      },
    });
  }),
  Mv = v.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...s
      } = e,
      l = ht(Vn, n),
      a = v.useRef(null),
      u = Re(t, a);
    return (
      pE(),
      g.jsxs(g.Fragment, {
        children: [
          g.jsx(vv, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: g.jsx(Is, {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": nc(l.open),
              ...s,
              ref: u,
              onDismiss: () => l.onOpenChange(!1),
            }),
          }),
          g.jsxs(g.Fragment, {
            children: [
              g.jsx(sC, { titleId: l.titleId }),
              g.jsx(aC, { contentRef: a, descriptionId: l.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  tc = "DialogTitle",
  Dv = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ht(tc, n);
    return g.jsx(ie.h2, { id: o.titleId, ...r, ref: t });
  });
Dv.displayName = tc;
var Iv = "DialogDescription",
  Fv = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ht(Iv, n);
    return g.jsx(ie.p, { id: o.descriptionId, ...r, ref: t });
  });
Fv.displayName = Iv;
var zv = "DialogClose",
  $v = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ht(zv, n);
    return g.jsx(ie.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: te(e.onClick, () => o.onOpenChange(!1)),
    });
  });
$v.displayName = zv;
function nc(e) {
  return e ? "open" : "closed";
}
var Uv = "DialogTitleWarning",
  [BC, Vv] = Kw(Uv, { contentName: Vn, titleName: tc, docsSlug: "dialog" }),
  sC = ({ titleId: e }) => {
    const t = Vv(Uv),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      v.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  lC = "DialogDescriptionWarning",
  aC = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      Vv(lC).contentName
    }}.`;
    return (
      v.useEffect(() => {
        var i;
        const o =
          (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  uC = Rv,
  cC = Av,
  dC = _v,
  Wv = jv,
  Bv = Lv,
  Hv = Dv,
  Qv = Fv,
  fC = $v;
const pC = uC,
  hC = cC,
  mC = dC,
  Kv = v.forwardRef(({ className: e, ...t }, n) =>
    g.jsx(Wv, {
      className: ae(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
Kv.displayName = Wv.displayName;
const vC = Us(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    }
  ),
  Gv = v.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, o) =>
      g.jsxs(mC, {
        children: [
          g.jsx(Kv, {}),
          g.jsxs(Bv, {
            ref: o,
            className: ae(vC({ side: e }), t),
            ...r,
            children: [
              n,
              g.jsxs(fC, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  g.jsx(Am, { className: "h-4 w-4" }),
                  g.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
            ],
          }),
        ],
      })
  );
Gv.displayName = Bv.displayName;
const gC = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(Hv, {
    ref: n,
    className: ae("text-lg font-semibold text-foreground", e),
    ...t,
  })
);
gC.displayName = Hv.displayName;
const yC = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(Qv, { ref: n, className: ae("text-sm text-muted-foreground", e), ...t })
);
yC.displayName = Qv.displayName;
function wC() {
  const [e, t] = v.useState(!1),
    n = [
      {
        label: "Home",
        href: "#hero",
        icon: g.jsx(Wx, { className: "w-4 h-4" }),
      },
      {
        label: "Skills",
        href: "#skills",
        icon: g.jsx(Tm, { className: "w-4 h-4" }),
      },
      {
        label: "Education",
        href: "#education",
        icon: g.jsx(bm, { className: "w-4 h-4" }),
      },
      {
        label: "Projects",
        href: "#projects",
        icon: g.jsx(Vx, { className: "w-4 h-4" }),
      },
      {
        label: "Certifications",
        href: "#certifications",
        icon: g.jsx(fs, { className: "w-4 h-4" }),
      },
    ],
    r = (o, i) => {
      console.log(`Navigation clicked: ${i} (${o})`), t(!1);
      const s = document.querySelector(o);
      s && s.scrollIntoView({ behavior: "smooth" });
    };
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx("nav", {
        className:
          "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b hidden md:block",
        children: g.jsx("div", {
          className: "max-w-6xl mx-auto px-5 py-4",
          children: g.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              g.jsx("div", {
                className: "font-bold text-xl text-primary",
                "data-testid": "text-nav-logo",
                children: "Portfolio",
              }),
              g.jsx("div", {
                className: "flex gap-1",
                children: n.map((o) =>
                  g.jsxs(
                    St,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => r(o.href, o.label),
                      "data-testid": `button-nav-${o.label.toLowerCase()}`,
                      className: "flex items-center gap-2",
                      children: [o.icon, o.label],
                    },
                    o.label
                  )
                ),
              }),
            ],
          }),
        }),
      }),
      g.jsx("nav", {
        className:
          "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b md:hidden",
        children: g.jsxs("div", {
          className: "px-5 py-4 flex items-center justify-between",
          children: [
            g.jsx("div", {
              className: "font-bold text-xl text-primary",
              "data-testid": "text-nav-logo-mobile",
              children: "Portfolio",
            }),
            g.jsxs(pC, {
              open: e,
              onOpenChange: t,
              children: [
                g.jsx(hC, {
                  asChild: !0,
                  children: g.jsx(St, {
                    variant: "ghost",
                    size: "icon",
                    "data-testid": "button-nav-menu",
                    children: g.jsx(Hx, { className: "w-5 h-5" }),
                  }),
                }),
                g.jsx(Gv, {
                  side: "right",
                  className: "w-72",
                  children: g.jsx("div", {
                    className: "flex flex-col gap-4 mt-8",
                    children: n.map((o) =>
                      g.jsxs(
                        St,
                        {
                          variant: "ghost",
                          onClick: () => r(o.href, o.label),
                          "data-testid": `button-nav-mobile-${o.label.toLowerCase()}`,
                          className:
                            "flex items-center justify-start gap-3 w-full text-left",
                          children: [o.icon, o.label],
                        },
                        o.label
                      )
                    ),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const xn = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("div", {
    ref: n,
    className: ae(
      "shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm",
      e
    ),
    ...t,
  })
);
xn.displayName = "Card";
const Mr = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("div", {
    ref: n,
    className: ae("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
Mr.displayName = "CardHeader";
const Dr = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("div", {
    ref: n,
    className: ae("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
Dr.displayName = "CardTitle";
const xC = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("div", {
    ref: n,
    className: ae("text-sm text-muted-foreground", e),
    ...t,
  })
);
xC.displayName = "CardDescription";
const Ir = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("div", { ref: n, className: ae("p-6 pt-0", e), ...t })
);
Ir.displayName = "CardContent";
const SC = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx("div", { ref: n, className: ae("flex items-center p-6 pt-0", e), ...t })
);
SC.displayName = "CardFooter";
var rc = "Avatar",
  [EC, HC] = Ur(rc),
  [CC, Xv] = EC(rc),
  Yv = v.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...r } = e,
      [o, i] = v.useState("idle");
    return g.jsx(CC, {
      scope: n,
      imageLoadingStatus: o,
      onImageLoadingStatusChange: i,
      children: g.jsx(ie.span, { ...r, ref: t }),
    });
  });
Yv.displayName = rc;
var qv = "AvatarImage",
  Zv = v.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: r,
        onLoadingStatusChange: o = () => {},
        ...i
      } = e,
      s = Xv(qv, n),
      l = kC(r, i),
      a = Be((u) => {
        o(u), s.onImageLoadingStatusChange(u);
      });
    return (
      dt(() => {
        l !== "idle" && a(l);
      }, [l, a]),
      l === "loaded" ? g.jsx(ie.img, { ...i, ref: t, src: r }) : null
    );
  });
Zv.displayName = qv;
var Jv = "AvatarFallback",
  eg = v.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e,
      i = Xv(Jv, n),
      [s, l] = v.useState(r === void 0);
    return (
      v.useEffect(() => {
        if (r !== void 0) {
          const a = window.setTimeout(() => l(!0), r);
          return () => window.clearTimeout(a);
        }
      }, [r]),
      s && i.imageLoadingStatus !== "loaded"
        ? g.jsx(ie.span, { ...o, ref: t })
        : null
    );
  });
eg.displayName = Jv;
function uf(e, t) {
  return e
    ? t
      ? (e.src !== t && (e.src = t),
        e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
      : "error"
    : "idle";
}
function kC(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = NC(),
    o = v.useRef(null),
    i = r ? (o.current || (o.current = new window.Image()), o.current) : null,
    [s, l] = v.useState(() => uf(i, e));
  return (
    dt(() => {
      l(uf(i, e));
    }, [i, e]),
    dt(() => {
      const a = (d) => () => {
        l(d);
      };
      if (!i) return;
      const u = a("loaded"),
        c = a("error");
      return (
        i.addEventListener("load", u),
        i.addEventListener("error", c),
        t && (i.referrerPolicy = t),
        typeof n == "string" && (i.crossOrigin = n),
        () => {
          i.removeEventListener("load", u), i.removeEventListener("error", c);
        }
      );
    }, [i, n, t]),
    s
  );
}
function PC() {
  return () => {};
}
function NC() {
  return v.useSyncExternalStore(
    PC,
    () => !0,
    () => !1
  );
}
var tg = Yv,
  ng = Zv,
  rg = eg;
const og = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(tg, {
    ref: n,
    className: ae(
      `
      after:content-[''] after:block after:absolute after:inset-0 after:rounded-full after:pointer-events-none after:border after:border-black/10 dark:after:border-white/10
      relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full`,
      e
    ),
    ...t,
  })
);
og.displayName = tg.displayName;
const ig = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(ng, { ref: n, className: ae("aspect-square h-full w-full", e), ...t })
);
ig.displayName = ng.displayName;
const sg = v.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(rg, {
    ref: n,
    className: ae(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t,
  })
);
sg.displayName = rg.displayName;
function TC({
  name: e,
  title: t,
  objective: n,
  email: r,
  phone: o,
  github: i,
  leetcode: s,
  linkedin: l,
  profilePhoto: a,
}) {
  const u = (c, d) => {
    console.log(`${c} contact clicked:`, d),
      c === "email"
        ? window.open(`mailto:${d}`)
        : c === "phone"
        ? window.open(`tel:${d}`)
        : window.open(d, "_blank");
  };
  return g.jsx("section", {
    className:
      "min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 p-5",
    children: g.jsx(xn, {
      className: "max-w-4xl w-full p-8 md:p-12 text-center hover-elevate",
      children: g.jsxs("div", {
        className: "space-y-6",
        children: [
          g.jsx("div", {
            className: "flex justify-center",
            children: g.jsxs(og, {
              className: "w-32 h-32 border-4 border-primary/20",
              children: [
                g.jsx(ig, { src: a, alt: e }),
                g.jsx(sg, {
                  className:
                    "text-2xl font-semibold bg-primary text-primary-foreground",
                  children: e
                    .split(" ")
                    .map((c) => c[0])
                    .join(""),
                }),
              ],
            }),
          }),
          g.jsxs("div", {
            children: [
              g.jsxs("h1", {
                className: "text-4xl md:text-5xl font-bold text-primary mb-2",
                "data-testid": "text-name",
                children: [
                  g.jsx("div", { children: "Chintalapudi" }),
                  g.jsx("div", { children: "Naga Aditya Anand" }),
                ],
              }),
              g.jsx("h2", {
                className: "text-xl md:text-2xl font-medium text-secondary",
                "data-testid": "text-title",
                children: t,
              }),
            ],
          }),
          g.jsx("p", {
            className:
              "text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed",
            "data-testid": "text-objective",
            children: n,
          }),
          g.jsxs("div", {
            className: "flex flex-wrap justify-center gap-4",
            children: [
              g.jsxs(St, {
                variant: "outline",
                size: "sm",
                onClick: () => u("email", r),
                "data-testid": "button-email",
                className: "flex items-center gap-2",
                children: [g.jsx(Bx, { className: "w-4 h-4" }), r],
              }),
              g.jsxs(St, {
                variant: "outline",
                size: "sm",
                onClick: () => u("phone", o),
                "data-testid": "button-phone",
                className: "flex items-center gap-2",
                children: [g.jsx(Qx, { className: "w-4 h-4" }), o],
              }),
            ],
          }),
          g.jsxs("div", {
            className: "flex justify-center gap-4",
            children: [
              g.jsxs(St, {
                variant: "secondary",
                size: "sm",
                onClick: () => u("github", i),
                "data-testid": "link-github",
                className: "flex items-center gap-2",
                children: [g.jsx(Rm, { className: "w-4 h-4" }), "GitHub"],
              }),
              g.jsxs(St, {
                variant: "secondary",
                size: "sm",
                onClick: () => u("leetcode", s),
                "data-testid": "link-leetcode",
                className: "flex items-center gap-2",
                children: [g.jsx($d, { className: "w-4 h-4" }), "LeetCode"],
              }),
              g.jsxs(St, {
                variant: "secondary",
                size: "sm",
                onClick: () => u("linkedin", l),
                "data-testid": "link-linkedin",
                className: "flex items-center gap-2",
                children: [g.jsx($d, { className: "w-4 h-4" }), "LinkedIn"],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const RC = Us(
  "whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-xs",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-xs",
        outline: " border [border-color:var(--badge-outline)] shadow-xs",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function Uo({ className: e, variant: t, ...n }) {
  return g.jsx("div", { className: ae(RC({ variant: t }), e), ...n });
}
function bC({ programming: e, coreCourses: t, frameworks: n }) {
  const r = [
    {
      title: "Programming Languages",
      icon: g.jsx(Tm, { className: "w-5 h-5" }),
      skills: e,
      variant: "default",
    },
    {
      title: "Core Courses",
      icon: g.jsx(Ux, { className: "w-5 h-5" }),
      skills: t,
      variant: "secondary",
    },
    {
      title: "Frameworks & Tools",
      icon: g.jsx(Kx, { className: "w-5 h-5" }),
      skills: n,
      variant: "outline",
    },
  ];
  return g.jsx("section", {
    className: "py-20 px-5 bg-muted/30",
    id: "skills",
    children: g.jsxs("div", {
      className: "max-w-6xl mx-auto",
      children: [
        g.jsxs("div", {
          className: "text-center mb-12",
          children: [
            g.jsx("h2", {
              className: "text-3xl md:text-4xl font-bold text-primary mb-4",
              "data-testid": "text-skills-title",
              children: "Technical Skills",
            }),
            g.jsx("p", {
              className: "text-lg text-muted-foreground max-w-2xl mx-auto",
              children:
                "A comprehensive overview of my technical expertise and core competencies",
            }),
          ],
        }),
        g.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          children: r.map((o, i) =>
            g.jsxs(
              xn,
              {
                className: "hover-elevate",
                "data-testid": `card-skills-${i}`,
                children: [
                  g.jsxs(Mr, {
                    className: "text-center",
                    children: [
                      g.jsx("div", {
                        className: "flex justify-center mb-2 text-primary",
                        children: o.icon,
                      }),
                      g.jsx(Dr, {
                        className: "text-lg",
                        "data-testid": `text-category-${i}`,
                        children: o.title,
                      }),
                    ],
                  }),
                  g.jsx(Ir, {
                    children: g.jsx("div", {
                      className: "flex flex-wrap gap-2 justify-center",
                      children: o.skills.map((s, l) =>
                        g.jsx(
                          Uo,
                          {
                            variant: o.variant,
                            "data-testid": `badge-skill-${i}-${l}`,
                            className: "text-sm",
                            children: s,
                          },
                          s
                        )
                      ),
                    }),
                  }),
                ],
              },
              o.title
            )
          ),
        }),
      ],
    }),
  });
}
function AC({ education: e }) {
  const t = (n) => {
    const r = parseFloat(n);
    return r >= 9 || n.includes("96.7")
      ? "default"
      : r >= 8 || n.includes("91.6")
      ? "secondary"
      : "outline";
  };
  return g.jsx("section", {
    className: "py-20 px-5",
    id: "education",
    children: g.jsxs("div", {
      className: "max-w-6xl mx-auto",
      children: [
        g.jsxs("div", {
          className: "text-center mb-12",
          children: [
            g.jsx("h2", {
              className: "text-3xl md:text-4xl font-bold text-primary mb-4",
              "data-testid": "text-education-title",
              children: "Education",
            }),
            g.jsx("p", {
              className: "text-lg text-muted-foreground max-w-2xl mx-auto",
              children: "Academic achievements and educational background",
            }),
          ],
        }),
        g.jsx("div", {
          className: "space-y-6",
          children: e.map((n, r) =>
            g.jsx(
              xn,
              {
                className: "hover-elevate",
                "data-testid": `card-education-${r}`,
                children: g.jsx(Mr, {
                  children: g.jsxs("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                      g.jsxs("div", {
                        className: "flex-1",
                        children: [
                          g.jsxs(Dr, {
                            className:
                              "text-xl text-primary mb-2 flex items-center gap-2",
                            "data-testid": `text-degree-${r}`,
                            children: [
                              g.jsx(bm, { className: "w-5 h-5" }),
                              n.degree,
                            ],
                          }),
                          g.jsxs("p", {
                            className:
                              "text-lg font-medium text-secondary mb-1",
                            "data-testid": `text-institution-${r}`,
                            children: [
                              n.institution,
                              n.board &&
                                g.jsxs("span", {
                                  className: "text-muted-foreground",
                                  children: [", ", n.board],
                                }),
                            ],
                          }),
                          g.jsxs("p", {
                            className:
                              "text-muted-foreground flex items-center gap-1",
                            "data-testid": `text-period-${r}`,
                            children: [
                              g.jsx(Nm, { className: "w-4 h-4" }),
                              n.period,
                            ],
                          }),
                        ],
                      }),
                      g.jsx("div", {
                        className: "text-right",
                        children: g.jsxs(Uo, {
                          variant: t(n.grade),
                          className: "text-sm flex items-center gap-1",
                          "data-testid": `badge-grade-${r}`,
                          children: [
                            g.jsx(fs, { className: "w-3 h-3" }),
                            n.grade,
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              },
              r
            )
          ),
        }),
      ],
    }),
  });
}
function OC({ projects: e }) {
  const t = (n) => {
    n && (console.log("Opening project link:", n), window.open(n, "_blank"));
  };
  return g.jsx("section", {
    className: "py-20 px-5 bg-muted/30",
    id: "projects",
    children: g.jsxs("div", {
      className: "max-w-6xl mx-auto",
      children: [
        g.jsxs("div", {
          className: "text-center mb-12",
          children: [
            g.jsx("h2", {
              className: "text-3xl md:text-4xl font-bold text-primary mb-4",
              "data-testid": "text-projects-title",
              children: "Projects",
            }),
            g.jsx("p", {
              className: "text-lg text-muted-foreground max-w-2xl mx-auto",
              children:
                "A showcase of my technical projects and practical applications",
            }),
          ],
        }),
        g.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: e.map((n, r) =>
            g.jsxs(
              xn,
              {
                className: "hover-elevate flex flex-col h-full",
                "data-testid": `card-project-${r}`,
                children: [
                  g.jsxs(Mr, {
                    children: [
                      g.jsxs("div", {
                        className:
                          "flex items-start justify-between gap-2 mb-2",
                        children: [
                          g.jsx(Dr, {
                            className: "text-lg text-primary flex-1",
                            "data-testid": `text-project-title-${r}`,
                            children: n.title,
                          }),
                          g.jsxs(Uo, {
                            variant: "outline",
                            className: "text-xs flex items-center gap-1",
                            "data-testid": `badge-year-${r}`,
                            children: [
                              g.jsx(Nm, { className: "w-3 h-3" }),
                              n.year,
                            ],
                          }),
                        ],
                      }),
                      g.jsx("p", {
                        className:
                          "text-muted-foreground text-sm leading-relaxed",
                        "data-testid": `text-description-${r}`,
                        children: n.description,
                      }),
                    ],
                  }),
                  g.jsxs(Ir, {
                    className: "flex-1 flex flex-col justify-between",
                    children: [
                      g.jsx("div", {
                        className: "space-y-4",
                        children: g.jsxs("div", {
                          children: [
                            g.jsx("p", {
                              className:
                                "text-sm font-medium text-secondary mb-2",
                              children: "Technologies:",
                            }),
                            g.jsx("div", {
                              className: "flex flex-wrap gap-1",
                              children: n.technologies.map((o, i) =>
                                g.jsx(
                                  Uo,
                                  {
                                    variant: "secondary",
                                    className: "text-xs",
                                    "data-testid": `badge-tech-${r}-${i}`,
                                    children: o,
                                  },
                                  o
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                      n.githubLink &&
                        g.jsx("div", {
                          className: "mt-4 pt-4 border-t",
                          children: g.jsxs(St, {
                            variant: "outline",
                            size: "sm",
                            onClick: () => t(n.githubLink),
                            "data-testid": `button-github-${r}`,
                            className: "w-full flex items-center gap-2",
                            children: [
                              g.jsx(Rm, { className: "w-4 h-4" }),
                              "View on GitHub",
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              },
              r
            )
          ),
        }),
      ],
    }),
  });
}
function _C({ certifications: e, achievements: t }) {
  return g.jsx("section", {
    className: "py-20 px-5",
    id: "certifications",
    children: g.jsxs("div", {
      className: "max-w-6xl mx-auto",
      children: [
        g.jsxs("div", {
          className: "text-center mb-12",
          children: [
            g.jsx("h2", {
              className: "text-3xl md:text-4xl font-bold text-primary mb-4",
              "data-testid": "text-certifications-title",
              children: "Certifications & Achievements",
            }),
            g.jsx("p", {
              className: "text-lg text-muted-foreground max-w-2xl mx-auto",
              children:
                "Professional certifications and recognized achievements",
            }),
          ],
        }),
        g.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8",
          children: [
            g.jsxs(xn, {
              className: "hover-elevate",
              "data-testid": "card-certifications",
              children: [
                g.jsx(Mr, {
                  children: g.jsxs(Dr, {
                    className: "text-xl text-primary flex items-center gap-2",
                    "data-testid": "text-cert-header",
                    children: [
                      g.jsx(fs, { className: "w-5 h-5" }),
                      "Certifications",
                    ],
                  }),
                }),
                g.jsx(Ir, {
                  children: g.jsx("div", {
                    className: "space-y-4",
                    children: e.map((n, r) =>
                      g.jsxs(
                        "div",
                        {
                          className: "border-l-4 border-secondary pl-4",
                          "data-testid": `cert-item-${r}`,
                          children: [
                            g.jsx("h3", {
                              className: "font-medium text-foreground",
                              "data-testid": `text-cert-title-${r}`,
                              children: n.title,
                            }),
                            g.jsxs("div", {
                              className: "text-sm text-muted-foreground",
                              "data-testid": `text-cert-issuer-${r}`,
                              children: [
                                n.issuer,
                                n.type &&
                                  g.jsx(Uo, {
                                    variant: "outline",
                                    className: "ml-2 text-xs",
                                    "data-testid": `badge-cert-type-${r}`,
                                    children: n.type,
                                  }),
                              ],
                            }),
                          ],
                        },
                        r
                      )
                    ),
                  }),
                }),
              ],
            }),
            g.jsxs(xn, {
              className: "hover-elevate",
              "data-testid": "card-achievements",
              children: [
                g.jsx(Mr, {
                  children: g.jsxs(Dr, {
                    className: "text-xl text-primary flex items-center gap-2",
                    "data-testid": "text-achievements-header",
                    children: [
                      g.jsx(fs, { className: "w-5 h-5" }),
                      "Key Achievements",
                    ],
                  }),
                }),
                g.jsx(Ir, {
                  children: g.jsx("div", {
                    className: "space-y-3",
                    children: t.map((n, r) =>
                      g.jsxs(
                        "div",
                        {
                          className: "flex items-start gap-3",
                          "data-testid": `achievement-item-${r}`,
                          children: [
                            g.jsx("div", {
                              className:
                                "w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0",
                            }),
                            g.jsx("p", {
                              className: "text-foreground",
                              "data-testid": `text-achievement-${r}`,
                              children: n,
                            }),
                          ],
                        },
                        r
                      )
                    ),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function jC() {
  const e = {
    personal: {
      name: "Chintalapudi Naga Aditya Anand",
      title: "AI & Data Science Student, IIIT Sricity",
      objective:
        "Aspiring Artificial Intelligence and Data Science Engineer (3rd year B.Tech) seeking internship opportunities to apply strong programming, problem-solving, and machine learning skills in real-world projects while gaining practical industry exposure.",
      email: "nagaadityaanand@gmail.com",
      phone: "+91-6309637248",
      github: "https://github.com/Naga-Aditya-Anand",
      leetcode: "https://leetcode.com/u/nagaadityaanand/",
      linkedin: "https://linkedin.com/in/chintalapudi-naga-aditya-anand",
    },
    skills: {
      programming: ["C", "Python", "Java", "SQL"],
      coreCourses: ["DSA", "ADSA", "OOP", "ML", "DL", "CCN"],
      frameworks: [
        "Android Studio",
        "Firebase",
        "OpenCV",
        "TensorFlow",
        "Keras",
        "Pandas",
        "NumPy",
      ],
    },
    education: [
      {
        degree: "B.Tech in Artificial Intelligence and Data Science",
        institution: "IIIT Sricity",
        period: "2023 – Present",
        grade: "CGPA: 8.20",
      },
      {
        degree: "Class XII (Intermediate)",
        institution: "Sri Chaitanya Junior College",
        board: "TGBIE",
        period: "2021 – 2023",
        grade: "96.7%",
      },
      {
        degree: "Class X (School)",
        institution: "Vignan's Bo Tree School",
        board: "CBSE",
        period: "2020 – 2021",
        grade: "91.6%",
      },
    ],
    projects: [
      {
        title: "Handy X CBSE – Android App",
        description:
          "Android app providing structured access to CBSE past papers and materials. Initially built with MIT App Inventor; redeveloped in Android Studio using Java.",
        year: "2022",
        technologies: ["Java", "Android SDK", "Google Drive API"],
        githubLink: "https://github.com/Naga-Aditya-Anand",
      },
      {
        title: "NoteLock – Encrypted Notes & Password Manager",
        description:
          "Secure Android app with AES encryption, biometric authentication, and Firebase sync for sensitive notes and credentials.",
        year: "2023",
        technologies: [
          "Java",
          "AndroidX Biometric",
          "Firebase Firestore",
          "AES",
        ],
        githubLink: "https://github.com/Naga-Aditya-Anand",
      },
      {
        title: "ClipIt – Universal Clipboard",
        description:
          "Cross-platform clipboard syncing across Android, iOS, Web, and Windows using Flutter and Firebase.",
        year: "2023",
        technologies: ["Flutter", "Dart", "Firebase"],
        githubLink: "https://github.com/Naga-Aditya-Anand",
      },
      {
        title: "Automatic Number Plate Recognition (ANPR)",
        description:
          "Computer vision pipeline for detecting and recognizing license plates with preprocessing, segmentation, and ML-based recognition.",
        year: "2025",
        technologies: [
          "Python",
          "OpenCV",
          "TensorFlow",
          "Keras",
          "Scikit-learn",
        ],
        githubLink: "https://github.com/Naga-Aditya-Anand",
      },
      {
        title: "Mini Movie Suggestions",
        description:
          "Movie recommendation system using association rule mining with Apriori algorithm and visualization of frequent patterns.",
        year: "2025",
        technologies: [
          "Python",
          "Pandas",
          "NumPy",
          "MLxtend",
          "Matplotlib",
          "Seaborn",
        ],
        githubLink: "https://github.com/Naga-Aditya-Anand",
      },
      {
        title: "ML Recognition Projects",
        description:
          "Various machine learning projects including Alphabet Recognition, Number Recognition, and other pattern recognition applications.",
        year: "2025",
        technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
        githubLink: "https://github.com/Naga-Aditya-Anand",
      },
    ],
    certifications: [
      { title: "Programming Using Java", issuer: "Infosys" },
      { title: "Data Analysis With Python", issuer: "IBM", type: "Coursera" },
      {
        title: "Databases and SQL for Data Science with Python",
        issuer: "IBM",
        type: "Coursera",
      },
      {
        title: "Machine Learning with Python",
        issuer: "IBM",
        type: "Coursera",
      },
      {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        type: "Coursera",
      },
      {
        title: "Introduction to Deep Learning & Neural Networks with Keras",
        issuer: "IBM",
        type: "Coursera",
      },
      {
        title: "Data Analytics Job Simulation Certificate",
        issuer: "Deloitte",
      },
    ],
    achievements: [
      "Current CGPA of 8.20 in AI & Data Science Engineering",
      "Achieved 96.7% in Class XII (Intermediate)",
      "Scored 91.6% in Class X (CBSE)",
      "Multiple IBM certifications in Data Science and Machine Learning",
      "Completed Deloitte Data Analytics Job Simulation",
      "Active contributor on GitHub with diverse project portfolio",
      "Strong problem-solving skills demonstrated through LeetCode solutions",
    ],
  };
  return g.jsxs("div", {
    className: "min-h-screen",
    children: [
      g.jsx(wC, {}),
      g.jsxs("main", {
        className: "pt-16 md:pt-20",
        children: [
          g.jsx("div", {
            id: "hero",
            children: g.jsx(TC, {
              name: e.personal.name,
              title: e.personal.title,
              objective: e.personal.objective,
              email: e.personal.email,
              phone: e.personal.phone,
              github: e.personal.github,
              leetcode: e.personal.leetcode,
              linkedin: e.personal.linkedin,
            }),
          }),
          g.jsx(bC, {
            programming: e.skills.programming,
            coreCourses: e.skills.coreCourses,
            frameworks: e.skills.frameworks,
          }),
          g.jsx(AC, { education: e.education }),
          g.jsx(OC, { projects: e.projects }),
          g.jsx(_C, {
            certifications: e.certifications,
            achievements: e.achievements,
          }),
        ],
      }),
    ],
  });
}
function LC() {
  return g.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: g.jsx(xn, {
      className: "w-full max-w-md mx-4",
      children: g.jsxs(Ir, {
        className: "pt-6",
        children: [
          g.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              g.jsx($x, { className: "h-8 w-8 text-red-500" }),
              g.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          g.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
function MC() {
  return g.jsxs(pw, {
    children: [
      g.jsx(Pd, { path: "/", component: jC }),
      g.jsx(Pd, { component: LC }),
    ],
  });
}
function DC() {
  return g.jsx(Iw, {
    client: $w,
    children: g.jsxs(rE, { children: [g.jsx(b1, {}), g.jsx(MC, {})] }),
  });
}
_h(document.getElementById("root")).render(g.jsx(DC, {}));
