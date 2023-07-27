import "../assets/CollapsibleBase.css";
import { unref as R, getCurrentScope as X, onScopeDispose as K, getCurrentInstance as Y, onMounted as J, nextTick as Z, watch as $, ref as h, computed as x, reactive as j, defineComponent as ee, useCssVars as te, onBeforeMount as oe, openBlock as ne, createElementBlock as se, normalizeClass as re, renderSlot as O, createElementVNode as C, createTextVNode as le } from "vue";
var Q;
const S = typeof window < "u", ae = (e) => typeof e == "string", P = () => {
};
S && ((Q = window == null ? void 0 : window.navigator) != null && Q.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function E(e) {
  return typeof e == "function" ? e() : R(e);
}
function z(e, n) {
  function t(...o) {
    return new Promise((i, r) => {
      Promise.resolve(e(() => n.apply(this, o), { fn: n, thisArg: this, args: o })).then(i).catch(r);
    });
  }
  return t;
}
function ie(e, n = {}) {
  let t, o, i = P;
  const r = (c) => {
    clearTimeout(c), i(), i = P;
  };
  return (c) => {
    const v = E(e), f = E(n.maxWait);
    return t && r(t), v <= 0 || f !== void 0 && f <= 0 ? (o && (r(o), o = null), Promise.resolve(c())) : new Promise((a, d) => {
      i = n.rejectOnCancel ? d : a, f && !o && (o = setTimeout(() => {
        t && r(t), o = null, a(c());
      }, f)), t = setTimeout(() => {
        o && r(o), o = null, a(c());
      }, v);
    });
  };
}
function ue(e, n = !0, t = !0, o = !1) {
  let i = 0, r, u = !0, c = P, v;
  const f = () => {
    r && (clearTimeout(r), r = void 0, c(), c = P);
  };
  return (d) => {
    const m = E(e), s = Date.now() - i, l = () => v = d();
    if (f(), m <= 0)
      return i = Date.now(), l();
    if (s > m && (t || !u))
      i = Date.now(), l();
    else if (n)
      return new Promise((p, _) => {
        c = o ? _ : p, r = setTimeout(() => {
          i = Date.now(), u = !0, p(l()), f();
        }, m - s);
      });
    return !t && !r && (r = setTimeout(() => u = !0, m)), u = !1, v;
  };
}
function ce(e) {
  return e;
}
function V(e) {
  return X() ? (K(e), !0) : !1;
}
function fe(e, n = 200, t = {}) {
  return z(ie(n, t), e);
}
function pe(e, n = 200, t = !1, o = !0, i = !1) {
  return z(ue(n, t, o, i), e);
}
function U(e, n = !0) {
  Y() ? J(e) : n ? e() : Z(e);
}
function T(e) {
  var n;
  const t = E(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const D = S ? window : void 0;
S && window.document;
S && window.navigator;
S && window.location;
function I(...e) {
  let n, t, o, i;
  if (ae(e[0]) || Array.isArray(e[0]) ? ([t, o, i] = e, n = D) : [n, t, o, i] = e, !n)
    return P;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const r = [], u = () => {
    r.forEach((a) => a()), r.length = 0;
  }, c = (a, d, m) => (a.addEventListener(d, m, i), () => a.removeEventListener(d, m, i)), v = $(() => T(n), (a) => {
    u(), a && r.push(...t.flatMap((d) => o.map((m) => c(a, d, m))));
  }, { immediate: !0, flush: "post" }), f = () => {
    v(), u();
  };
  return V(f), f;
}
function xe(e, n, t = {}) {
  const { window: o = D, ignore: i = [], capture: r = !0, detectIframe: u = !1 } = t;
  if (!o)
    return;
  let c = !0, v;
  const f = (s) => i.some((l) => {
    if (typeof l == "string")
      return Array.from(o.document.querySelectorAll(l)).some((p) => p === s.target || s.composedPath().includes(p));
    {
      const p = T(l);
      return p && (s.target === p || s.composedPath().includes(p));
    }
  }), a = (s) => {
    o.clearTimeout(v);
    const l = T(e);
    if (!(!l || l === s.target || s.composedPath().includes(l))) {
      if (s.detail === 0 && (c = !f(s)), !c) {
        c = !0;
        return;
      }
      n(s);
    }
  }, d = [
    I(o, "click", a, { passive: !0, capture: r }),
    I(o, "pointerdown", (s) => {
      const l = T(e);
      l && (c = !s.composedPath().includes(l) && !f(s));
    }, { passive: !0 }),
    I(o, "pointerup", (s) => {
      if (s.button === 0) {
        const l = s.composedPath();
        s.composedPath = () => l, v = o.setTimeout(() => a(s), 50);
      }
    }, { passive: !0 }),
    u && I(o, "blur", (s) => {
      var l;
      const p = T(e);
      ((l = o.document.activeElement) == null ? void 0 : l.tagName) === "IFRAME" && !(p != null && p.contains(o.document.activeElement)) && n(s);
    })
  ].filter(Boolean);
  return () => d.forEach((s) => s());
}
function de(e, n = !1) {
  const t = h(), o = () => t.value = Boolean(e());
  return o(), U(o, n), t;
}
const B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, L = "__vueuse_ssr_handlers__";
B[L] = B[L] || {};
B[L];
var W = Object.getOwnPropertySymbols, ve = Object.prototype.hasOwnProperty, me = Object.prototype.propertyIsEnumerable, _e = (e, n) => {
  var t = {};
  for (var o in e)
    ve.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && W)
    for (var o of W(e))
      n.indexOf(o) < 0 && me.call(e, o) && (t[o] = e[o]);
  return t;
};
function he(e, n, t = {}) {
  const o = t, { window: i = D } = o, r = _e(o, ["window"]);
  let u;
  const c = de(() => i && "ResizeObserver" in i), v = () => {
    u && (u.disconnect(), u = void 0);
  }, f = $(() => T(e), (d) => {
    v(), c.value && i && d && (u = new ResizeObserver(n), u.observe(d, r));
  }, { immediate: !0, flush: "post" }), a = () => {
    v(), f();
  };
  return V(a), {
    isSupported: c,
    stop: a
  };
}
function be(e, n = {}) {
  const {
    reset: t = !0,
    windowResize: o = !0,
    windowScroll: i = !0,
    immediate: r = !0
  } = n, u = h(0), c = h(0), v = h(0), f = h(0), a = h(0), d = h(0), m = h(0), s = h(0);
  function l() {
    const p = T(e);
    if (!p) {
      t && (u.value = 0, c.value = 0, v.value = 0, f.value = 0, a.value = 0, d.value = 0, m.value = 0, s.value = 0);
      return;
    }
    const _ = p.getBoundingClientRect();
    u.value = _.height, c.value = _.bottom, v.value = _.left, f.value = _.right, a.value = _.top, d.value = _.width, m.value = _.x, s.value = _.y;
  }
  return he(e, l), $(() => T(e), (p) => !p && l()), i && I("scroll", l, { capture: !0, passive: !0 }), o && I("resize", l, { passive: !0 }), U(() => {
    r && l();
  }), {
    height: u,
    bottom: c,
    left: v,
    right: f,
    top: a,
    width: d,
    x: m,
    y: s,
    update: l
  };
}
const k = 1;
function $e(e, n = {}) {
  const {
    throttle: t = 0,
    idle: o = 200,
    onStop: i = P,
    onScroll: r = P,
    offset: u = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: c = {
      capture: !1,
      passive: !0
    },
    behavior: v = "auto"
  } = n, f = h(0), a = h(0), d = x({
    get() {
      return f.value;
    },
    set(b) {
      s(b, void 0);
    }
  }), m = x({
    get() {
      return a.value;
    },
    set(b) {
      s(void 0, b);
    }
  });
  function s(b, w) {
    var y, g, N;
    const A = E(e);
    A && ((N = A instanceof Document ? document.body : A) == null || N.scrollTo({
      top: (y = E(w)) != null ? y : m.value,
      left: (g = E(b)) != null ? g : d.value,
      behavior: E(v)
    }));
  }
  const l = h(!1), p = j({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), _ = j({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), G = fe((b) => {
    l.value = !1, _.left = !1, _.right = !1, _.top = !1, _.bottom = !1, i(b);
  }, t + o), H = (b) => {
    const w = b.target === document ? b.target.documentElement : b.target, y = w.scrollLeft;
    _.left = y < f.value, _.right = y > a.value, p.left = y <= 0 + (u.left || 0), p.right = y + w.clientWidth >= w.scrollWidth - (u.right || 0) - k, f.value = y;
    let g = w.scrollTop;
    b.target === document && !g && (g = document.body.scrollTop), _.top = g < a.value, _.bottom = g > a.value, p.top = g <= 0 + (u.top || 0), p.bottom = g + w.clientHeight >= w.scrollHeight - (u.bottom || 0) - k, a.value = g, l.value = !0, G(b), r(b);
  };
  return I(e, "scroll", t ? pe(H, t, !0, !1) : H, c), {
    x: d,
    y: m,
    isScrolling: l,
    arrivedState: p,
    directions: _
  };
}
var F;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(F || (F = {}));
var ge = Object.defineProperty, q = Object.getOwnPropertySymbols, Oe = Object.prototype.hasOwnProperty, we = Object.prototype.propertyIsEnumerable, M = (e, n, t) => n in e ? ge(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ye = (e, n) => {
  for (var t in n || (n = {}))
    Oe.call(n, t) && M(e, t, n[t]);
  if (q)
    for (var t of q(n))
      we.call(n, t) && M(e, t, n[t]);
  return e;
};
const Ee = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
ye({
  linear: ce
}, Ee);
const Te = { class: "queso-collapsible__header__text" }, Ie = { class: "queso-collapsible__header__icon" }, Pe = ["aria-expanded"], Ae = /* @__PURE__ */ ee({
  __name: "CollapsibleBase",
  props: {
    expandOnMount: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: n, emit: t }) {
    const o = e;
    te((s) => ({
      b95b03f4: R(f)
    }));
    const i = h(), r = h(!1), u = h(o.expandOnMount);
    oe(() => {
      u.value && (r.value = !0);
    });
    const c = x(() => ({
      "is-collapsible-open": r.value,
      "is-collapsible-close": !r.value
    })), { height: v } = be(i), f = x(() => u.value ? "none" : r.value ? `${v.value}px` : "0px"), a = () => {
      r.value = !0;
    }, d = () => {
      u.value = !1, setTimeout(() => {
        r.value = !1;
      }, 1);
    }, m = (s = !1) => {
      s ? a() : d();
    };
    return $(r, (s) => {
      t(s ? "open" : "close"), t("toggle", s);
    }), n({ isCollapsibleOpen: r, open: a, close: d, toggle: m }), (s, l) => (ne(), se("div", {
      class: re(["queso-collapsible", R(c)])
    }, [
      O(s.$slots, "beforeHeader"),
      C("div", {
        class: "queso-collapsible__header",
        onClick: l[0] || (l[0] = (p) => m(!r.value))
      }, [
        O(s.$slots, "headerPrefix"),
        C("div", Te, [
          O(s.$slots, "headerText")
        ]),
        O(s.$slots, "headerSuffix"),
        C("div", Ie, [
          O(s.$slots, "headerIcon", {}, () => [
            le("↓")
          ])
        ])
      ]),
      O(s.$slots, "afterHeader"),
      O(s.$slots, "beforeContent"),
      C("div", {
        class: "queso-collapsible__content",
        "aria-expanded": r.value
      }, [
        C("div", {
          ref_key: "collapsibleContent",
          ref: i,
          class: "queso-collapsible__content__inner"
        }, [
          O(s.$slots, "content")
        ], 512)
      ], 8, Pe),
      O(s.$slots, "afterContent")
    ], 2));
  }
});
export {
  Ae as _,
  he as a,
  xe as o,
  $e as u
};
