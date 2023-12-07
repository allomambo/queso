import "../assets/components/QuesoCollapsible.css";
import { getCurrentScope as U, onScopeDispose as Z, unref as ee, onMounted as N, nextTick as te, getCurrentInstance as G, computed as M, watch as $, ref as g, reactive as z, defineComponent as oe, useCssVars as ne, onBeforeMount as se, openBlock as le, createElementBlock as re, normalizeClass as ie, renderSlot as E, createElementVNode as L, createTextVNode as ue } from "vue";
function X(e) {
  return U() ? (Z(e), !0) : !1;
}
function _(e) {
  return typeof e == "function" ? e() : ee(e);
}
const Q = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ae = Object.prototype.toString, ce = (e) => ae.call(e) === "[object Object]", C = () => {
}, fe = /* @__PURE__ */ de();
function de() {
  var e, l;
  return Q && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((l = window == null ? void 0 : window.navigator) == null ? void 0 : l.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Y(e, l) {
  function s(...t) {
    return new Promise((c, i) => {
      Promise.resolve(e(() => l.apply(this, t), { fn: l, thisArg: this, args: t })).then(c).catch(i);
    });
  }
  return s;
}
function pe(e, l = {}) {
  let s, t, c = C;
  const i = (a) => {
    clearTimeout(a), c(), c = C;
  };
  return (a) => {
    const m = _(e), d = _(l.maxWait);
    return s && i(s), m <= 0 || d !== void 0 && d <= 0 ? (t && (i(t), t = null), Promise.resolve(a())) : new Promise((f, p) => {
      c = l.rejectOnCancel ? p : f, d && !t && (t = setTimeout(() => {
        s && i(s), t = null, f(a());
      }, d)), s = setTimeout(() => {
        t && i(t), t = null, f(a());
      }, m);
    });
  };
}
function ve(e, l = !0, s = !0, t = !1) {
  let c = 0, i, r = !0, a = C, m;
  const d = () => {
    i && (clearTimeout(i), i = void 0, a(), a = C);
  };
  return (p) => {
    const o = _(e), u = Date.now() - c, n = () => m = p();
    return d(), o <= 0 ? (c = Date.now(), n()) : (u > o && (s || !r) ? (c = Date.now(), n()) : l && (m = new Promise((b, h) => {
      a = t ? h : b, i = setTimeout(() => {
        c = Date.now(), r = !0, b(n()), d();
      }, Math.max(0, o - u));
    })), !s && !i && (i = setTimeout(() => r = !0, o)), r = !1, m);
  };
}
function me(e) {
  return e || G();
}
function he(e, l = 200, s = {}) {
  return Y(
    pe(l, s),
    e
  );
}
function be(e, l = 200, s = !1, t = !0, c = !1) {
  return Y(
    ve(l, s, t, c),
    e
  );
}
function J(e, l = !0, s) {
  const t = me(s);
  t ? N(e, t) : l ? e() : te(e);
}
function T(e) {
  var l;
  const s = _(e);
  return (l = s == null ? void 0 : s.$el) != null ? l : s;
}
const k = Q ? window : void 0;
function O(...e) {
  let l, s, t, c;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([s, t, c] = e, l = k) : [l, s, t, c] = e, !l)
    return C;
  Array.isArray(s) || (s = [s]), Array.isArray(t) || (t = [t]);
  const i = [], r = () => {
    i.forEach((f) => f()), i.length = 0;
  }, a = (f, p, o, u) => (f.addEventListener(p, o, u), () => f.removeEventListener(p, o, u)), m = $(
    () => [T(l), _(c)],
    ([f, p]) => {
      if (r(), !f)
        return;
      const o = ce(p) ? { ...p } : p;
      i.push(
        ...s.flatMap((u) => t.map((n) => a(f, u, n, o)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    m(), r();
  };
  return X(d), d;
}
let F = !1;
function Ae(e, l, s = {}) {
  const { window: t = k, ignore: c = [], capture: i = !0, detectIframe: r = !1 } = s;
  if (!t)
    return;
  fe && !F && (F = !0, Array.from(t.document.body.children).forEach((o) => o.addEventListener("click", C)), t.document.documentElement.addEventListener("click", C));
  let a = !0;
  const m = (o) => c.some((u) => {
    if (typeof u == "string")
      return Array.from(t.document.querySelectorAll(u)).some((n) => n === o.target || o.composedPath().includes(n));
    {
      const n = T(u);
      return n && (o.target === n || o.composedPath().includes(n));
    }
  }), f = [
    O(t, "click", (o) => {
      const u = T(e);
      if (!(!u || u === o.target || o.composedPath().includes(u))) {
        if (o.detail === 0 && (a = !m(o)), !a) {
          a = !0;
          return;
        }
        l(o);
      }
    }, { passive: !0, capture: i }),
    O(t, "pointerdown", (o) => {
      const u = T(e);
      a = !m(o) && !!(u && !o.composedPath().includes(u));
    }, { passive: !0 }),
    r && O(t, "blur", (o) => {
      setTimeout(() => {
        var u;
        const n = T(e);
        ((u = t.document.activeElement) == null ? void 0 : u.tagName) === "IFRAME" && !(n != null && n.contains(t.document.activeElement)) && l(o);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((o) => o());
}
function ge() {
  const e = g(!1);
  return G() && N(() => {
    e.value = !0;
  }), e;
}
function we(e) {
  const l = ge();
  return M(() => (l.value, !!e()));
}
function _e(e, l, s = {}) {
  const { window: t = k, ...c } = s;
  let i;
  const r = we(() => t && "ResizeObserver" in t), a = () => {
    i && (i.disconnect(), i = void 0);
  }, m = M(() => Array.isArray(e) ? e.map((p) => T(p)) : [T(e)]), d = $(
    m,
    (p) => {
      if (a(), r.value && t) {
        i = new ResizeObserver(l);
        for (const o of p)
          o && i.observe(o, c);
      }
    },
    { immediate: !0, flush: "post", deep: !0 }
  ), f = () => {
    a(), d();
  };
  return X(f), {
    isSupported: r,
    stop: f
  };
}
function ye(e, l = {}) {
  const {
    reset: s = !0,
    windowResize: t = !0,
    windowScroll: c = !0,
    immediate: i = !0
  } = l, r = g(0), a = g(0), m = g(0), d = g(0), f = g(0), p = g(0), o = g(0), u = g(0);
  function n() {
    const b = T(e);
    if (!b) {
      s && (r.value = 0, a.value = 0, m.value = 0, d.value = 0, f.value = 0, p.value = 0, o.value = 0, u.value = 0);
      return;
    }
    const h = b.getBoundingClientRect();
    r.value = h.height, a.value = h.bottom, m.value = h.left, d.value = h.right, f.value = h.top, p.value = h.width, o.value = h.x, u.value = h.y;
  }
  return _e(e, n), $(() => T(e), (b) => !b && n()), c && O("scroll", n, { capture: !0, passive: !0 }), t && O("resize", n, { passive: !0 }), J(() => {
    i && n();
  }), {
    height: r,
    bottom: a,
    left: m,
    right: d,
    top: f,
    width: p,
    x: o,
    y: u,
    update: n
  };
}
const V = 1;
function Oe(e, l = {}) {
  const {
    throttle: s = 0,
    idle: t = 200,
    onStop: c = C,
    onScroll: i = C,
    offset: r = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: a = {
      capture: !1,
      passive: !0
    },
    behavior: m = "auto",
    window: d = k
  } = l, f = g(0), p = g(0), o = M({
    get() {
      return f.value;
    },
    set(v) {
      n(v, void 0);
    }
  }), u = M({
    get() {
      return p.value;
    },
    set(v) {
      n(void 0, v);
    }
  });
  function n(v, x) {
    var w, P, D;
    if (!d)
      return;
    const S = _(e);
    S && ((D = S instanceof Document ? d.document.body : S) == null || D.scrollTo({
      top: (w = _(x)) != null ? w : u.value,
      left: (P = _(v)) != null ? P : o.value,
      behavior: _(m)
    }));
  }
  const b = g(!1), h = z({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), y = z({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), I = (v) => {
    b.value && (b.value = !1, y.left = !1, y.right = !1, y.top = !1, y.bottom = !1, c(v));
  }, K = he(I, s + t), R = (v) => {
    var x;
    if (!d)
      return;
    const w = v.document ? v.document.documentElement : (x = v.documentElement) != null ? x : v, { display: P, flexDirection: D } = getComputedStyle(w), S = w.scrollLeft;
    y.left = S < f.value, y.right = S > f.value;
    const B = Math.abs(S) <= 0 + (r.left || 0), H = Math.abs(S) + w.clientWidth >= w.scrollWidth - (r.right || 0) - V;
    P === "flex" && D === "row-reverse" ? (h.left = H, h.right = B) : (h.left = B, h.right = H), f.value = S;
    let A = w.scrollTop;
    v === d.document && !A && (A = d.document.body.scrollTop), y.top = A < p.value, y.bottom = A > p.value;
    const j = Math.abs(A) <= 0 + (r.top || 0), q = Math.abs(A) + w.clientHeight >= w.scrollHeight - (r.bottom || 0) - V;
    P === "flex" && D === "column-reverse" ? (h.top = q, h.bottom = j) : (h.top = j, h.bottom = q), p.value = A;
  }, W = (v) => {
    var x;
    if (!d)
      return;
    const w = (x = v.target.documentElement) != null ? x : v.target;
    R(w), b.value = !0, K(v), i(v);
  };
  return O(
    e,
    "scroll",
    s ? be(W, s, !0, !1) : W,
    a
  ), J(() => {
    const v = _(e);
    v && R(v);
  }), O(
    e,
    "scrollend",
    I,
    a
  ), {
    x: o,
    y: u,
    isScrolling: b,
    arrivedState: h,
    directions: y,
    measure() {
      const v = _(e);
      d && v && R(v);
    }
  };
}
const Se = { class: "queso-collapsible__header__text" }, Ee = { class: "queso-collapsible__header__icon" }, Te = ["aria-expanded"], Me = /* @__PURE__ */ oe({
  __name: "QuesoCollapsible",
  props: {
    expandOnMount: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: l, emit: s }) {
    ne((n) => ({
      "3263d5a2": f.value
    }));
    const t = e, c = s, i = g(), r = g(!1), a = g(t.expandOnMount);
    se(() => {
      a.value && (r.value = !0);
    });
    const m = M(() => ({
      "is-collapsible-open": r.value,
      "is-collapsible-close": !r.value
    })), { height: d } = ye(i), f = M(() => a.value ? "none" : r.value ? `${d.value}px` : "0px"), p = () => {
      r.value = !0;
    }, o = () => {
      a.value = !1, setTimeout(() => {
        r.value = !1;
      }, 1);
    }, u = (n = !1) => {
      n ? p() : o();
    };
    return $(r, (n) => {
      c(n ? "open" : "close"), c("toggle", n);
    }), l({ isCollapsibleOpen: r, open: p, close: o, toggle: u }), (n, b) => (le(), re("div", {
      class: ie(["queso-collapsible", m.value])
    }, [
      E(n.$slots, "beforeHeader"),
      L("div", {
        class: "queso-collapsible__header",
        onClick: b[0] || (b[0] = (h) => u(!r.value))
      }, [
        E(n.$slots, "headerPrefix"),
        L("div", Se, [
          E(n.$slots, "headerText")
        ]),
        E(n.$slots, "headerSuffix"),
        L("div", Ee, [
          E(n.$slots, "headerIcon", {}, () => [
            ue("↓")
          ])
        ])
      ]),
      E(n.$slots, "afterHeader"),
      E(n.$slots, "beforeContent"),
      L("div", {
        class: "queso-collapsible__content",
        "aria-expanded": r.value
      }, [
        L("div", {
          ref_key: "collapsibleContent",
          ref: i,
          class: "queso-collapsible__content__inner"
        }, [
          E(n.$slots, "content")
        ], 512)
      ], 8, Te),
      E(n.$slots, "afterContent")
    ], 2));
  }
});
export {
  Me as _,
  _e as a,
  Ae as o,
  Oe as u
};
