import { getCurrentScope as oe, onScopeDispose as ne, unref as le, onMounted as Q, nextTick as se, isRef as re, getCurrentInstance as Y, computed as P, watch as $, ref as b, reactive as G, defineComponent as ie, useCssVars as ue, onBeforeMount as ce, openBlock as ae, createElementBlock as fe, normalizeClass as de, renderSlot as E, createElementVNode as L, normalizeProps as j, guardReactiveProps as I, createTextVNode as pe } from "vue";
import '../assets/components/QuesoCollapsible.css';function z(e) {
  return oe() ? (ne(e), !0) : !1;
}
function y(e) {
  return typeof e == "function" ? e() : le(e);
}
const J = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ve = (e) => e != null, me = Object.prototype.toString, he = (e) => me.call(e) === "[object Object]", O = () => {
}, be = /* @__PURE__ */ we();
function we() {
  var e, t;
  return J && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function U(e, t) {
  function n(...o) {
    return new Promise((f, i) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(f).catch(i);
    });
  }
  return n;
}
function ye(e, t = {}) {
  let n, o, f = O;
  const i = (c) => {
    clearTimeout(c), f(), f = O;
  };
  return (c) => {
    const m = y(e), d = y(t.maxWait);
    return n && i(n), m <= 0 || d !== void 0 && d <= 0 ? (o && (i(o), o = null), Promise.resolve(c())) : new Promise((a, p) => {
      f = t.rejectOnCancel ? p : a, d && !o && (o = setTimeout(() => {
        n && i(n), o = null, a(c());
      }, d)), n = setTimeout(() => {
        o && i(o), o = null, a(c());
      }, m);
    });
  };
}
function ge(...e) {
  let t = 0, n, o = !0, f = O, i, r, c, m, d;
  !re(e[0]) && typeof e[0] == "object" ? { delay: r, trailing: c = !0, leading: m = !0, rejectOnCancel: d = !1 } = e[0] : [r, c = !0, m = !0, d = !1] = e;
  const a = () => {
    n && (clearTimeout(n), n = void 0, f(), f = O);
  };
  return (l) => {
    const u = y(r), s = Date.now() - t, w = () => i = l();
    return a(), u <= 0 ? (t = Date.now(), w()) : (s > u && (m || !o) ? (t = Date.now(), w()) : c && (i = new Promise((h, _) => {
      f = d ? _ : h, n = setTimeout(() => {
        t = Date.now(), o = !0, h(w()), a();
      }, Math.max(0, u - s));
    })), !m && !n && (n = setTimeout(() => o = !0, u)), o = !1, i);
  };
}
function _e(e) {
  return Y();
}
function Se(e, t = 200, n = {}) {
  return U(
    ye(t, n),
    e
  );
}
function Ee(e, t = 200, n = !1, o = !0, f = !1) {
  return U(
    ge(t, n, o, f),
    e
  );
}
function Z(e, t = !0, n) {
  _e() ? Q(e, n) : t ? e() : se(e);
}
function S(e) {
  var t;
  const n = y(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const R = J ? window : void 0;
function A(...e) {
  let t, n, o, f;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, f] = e, t = R) : [t, n, o, f] = e, !t)
    return O;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const i = [], r = () => {
    i.forEach((a) => a()), i.length = 0;
  }, c = (a, p, l, u) => (a.addEventListener(p, l, u), () => a.removeEventListener(p, l, u)), m = $(
    () => [S(t), y(f)],
    ([a, p]) => {
      if (r(), !a)
        return;
      const l = he(p) ? { ...p } : p;
      i.push(
        ...n.flatMap((u) => o.map((s) => c(a, u, s, l)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    m(), r();
  };
  return z(d), d;
}
let K = !1;
function De(e, t, n = {}) {
  const { window: o = R, ignore: f = [], capture: i = !0, detectIframe: r = !1 } = n;
  if (!o)
    return O;
  be && !K && (K = !0, Array.from(o.document.body.children).forEach((l) => l.addEventListener("click", O)), o.document.documentElement.addEventListener("click", O));
  let c = !0;
  const m = (l) => f.some((u) => {
    if (typeof u == "string")
      return Array.from(o.document.querySelectorAll(u)).some((s) => s === l.target || l.composedPath().includes(s));
    {
      const s = S(u);
      return s && (l.target === s || l.composedPath().includes(s));
    }
  }), a = [
    A(o, "click", (l) => {
      const u = S(e);
      if (!(!u || u === l.target || l.composedPath().includes(u))) {
        if (l.detail === 0 && (c = !m(l)), !c) {
          c = !0;
          return;
        }
        t(l);
      }
    }, { passive: !0, capture: i }),
    A(o, "pointerdown", (l) => {
      const u = S(e);
      c = !m(l) && !!(u && !l.composedPath().includes(u));
    }, { passive: !0 }),
    r && A(o, "blur", (l) => {
      setTimeout(() => {
        var u;
        const s = S(e);
        ((u = o.document.activeElement) == null ? void 0 : u.tagName) === "IFRAME" && !(s != null && s.contains(o.document.activeElement)) && t(l);
      }, 0);
    })
  ].filter(Boolean);
  return () => a.forEach((l) => l());
}
function Oe(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Le(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: f = R,
    eventName: i = "keydown",
    passive: r = !1,
    dedupe: c = !1
  } = o, m = Oe(t);
  return A(f, i, (a) => {
    a.repeat && y(c) || m(a) && n(a);
  }, r);
}
function Te() {
  const e = b(!1), t = Y();
  return t && Q(() => {
    e.value = !0;
  }, t), e;
}
function ee(e) {
  const t = Te();
  return P(() => (t.value, !!e()));
}
function Ce(e, t, n = {}) {
  const { window: o = R, ...f } = n;
  let i;
  const r = ee(() => o && "MutationObserver" in o), c = () => {
    i && (i.disconnect(), i = void 0);
  }, m = P(() => {
    const l = y(e), u = (Array.isArray(l) ? l : [l]).map(S).filter(ve);
    return new Set(u);
  }), d = $(
    () => m.value,
    (l) => {
      c(), r.value && o && l.size && (i = new MutationObserver(t), l.forEach((u) => i.observe(u, f)));
    },
    { immediate: !0, flush: "post" }
  ), a = () => i == null ? void 0 : i.takeRecords(), p = () => {
    c(), d();
  };
  return z(p), {
    isSupported: r,
    stop: p,
    takeRecords: a
  };
}
function Ae(e, t, n = {}) {
  const { window: o = R, ...f } = n;
  let i;
  const r = ee(() => o && "ResizeObserver" in o), c = () => {
    i && (i.disconnect(), i = void 0);
  }, m = P(() => Array.isArray(e) ? e.map((p) => S(p)) : [S(e)]), d = $(
    m,
    (p) => {
      if (c(), r.value && o) {
        i = new ResizeObserver(t);
        for (const l of p)
          l && i.observe(l, f);
      }
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    c(), d();
  };
  return z(a), {
    isSupported: r,
    stop: a
  };
}
function xe(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: o = !0,
    windowScroll: f = !0,
    immediate: i = !0
  } = t, r = b(0), c = b(0), m = b(0), d = b(0), a = b(0), p = b(0), l = b(0), u = b(0);
  function s() {
    const w = S(e);
    if (!w) {
      n && (r.value = 0, c.value = 0, m.value = 0, d.value = 0, a.value = 0, p.value = 0, l.value = 0, u.value = 0);
      return;
    }
    const h = w.getBoundingClientRect();
    r.value = h.height, c.value = h.bottom, m.value = h.left, d.value = h.right, a.value = h.top, p.value = h.width, l.value = h.x, u.value = h.y;
  }
  return Ae(e, s), $(() => S(e), (w) => !w && s()), Ce(e, s, {
    attributeFilter: ["style", "class"]
  }), f && A("scroll", s, { capture: !0, passive: !0 }), o && A("resize", s, { passive: !0 }), Z(() => {
    i && s();
  }), {
    height: r,
    bottom: c,
    left: m,
    right: d,
    top: a,
    width: p,
    x: l,
    y: u,
    update: s
  };
}
const X = 1;
function $e(e, t = {}) {
  const {
    throttle: n = 0,
    idle: o = 200,
    onStop: f = O,
    onScroll: i = O,
    offset: r = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: c = {
      capture: !1,
      passive: !0
    },
    behavior: m = "auto",
    window: d = R,
    onError: a = (v) => {
      console.error(v);
    }
  } = t, p = b(0), l = b(0), u = P({
    get() {
      return p.value;
    },
    set(v) {
      w(v, void 0);
    }
  }), s = P({
    get() {
      return l.value;
    },
    set(v) {
      w(void 0, v);
    }
  });
  function w(v, x) {
    var g, k, D;
    if (!d)
      return;
    const C = y(e);
    C && ((D = C instanceof Document ? d.document.body : C) == null || D.scrollTo({
      top: (g = y(x)) != null ? g : s.value,
      left: (k = y(v)) != null ? k : u.value,
      behavior: y(m)
    }));
  }
  const h = b(!1), _ = G({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), T = G({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), B = (v) => {
    h.value && (h.value = !1, T.left = !1, T.right = !1, T.top = !1, T.bottom = !1, f(v));
  }, te = Se(B, n + o), W = (v) => {
    var x;
    if (!d)
      return;
    const g = ((x = v == null ? void 0 : v.document) == null ? void 0 : x.documentElement) || (v == null ? void 0 : v.documentElement) || S(v), { display: k, flexDirection: D } = getComputedStyle(g), C = g.scrollLeft;
    T.left = C < p.value, T.right = C > p.value;
    const q = Math.abs(C) <= (r.left || 0), N = Math.abs(C) + g.clientWidth >= g.scrollWidth - (r.right || 0) - X;
    k === "flex" && D === "row-reverse" ? (_.left = N, _.right = q) : (_.left = q, _.right = N), p.value = C;
    let M = g.scrollTop;
    v === d.document && !M && (M = d.document.body.scrollTop), T.top = M < l.value, T.bottom = M > l.value;
    const V = Math.abs(M) <= (r.top || 0), F = Math.abs(M) + g.clientHeight >= g.scrollHeight - (r.bottom || 0) - X;
    k === "flex" && D === "column-reverse" ? (_.top = F, _.bottom = V) : (_.top = V, _.bottom = F), l.value = M;
  }, H = (v) => {
    var x;
    if (!d)
      return;
    const g = (x = v.target.documentElement) != null ? x : v.target;
    W(g), h.value = !0, te(v), i(v);
  };
  return A(
    e,
    "scroll",
    n ? Ee(H, n, !0, !1) : H,
    c
  ), Z(() => {
    try {
      const v = y(e);
      if (!v)
        return;
      W(v);
    } catch (v) {
      a(v);
    }
  }), A(
    e,
    "scrollend",
    B,
    c
  ), {
    x: u,
    y: s,
    isScrolling: h,
    arrivedState: _,
    directions: T,
    measure() {
      const v = y(e);
      d && v && W(v);
    }
  };
}
const Me = { class: "queso-collapsible__header__text" }, Pe = { class: "queso-collapsible__header__icon" }, Re = ["aria-expanded"], We = /* @__PURE__ */ ie({
  __name: "QuesoCollapsible",
  props: {
    expandOnMount: { type: Boolean }
  },
  emits: ["collapsible:open", "collapsible:close", "collapsible:toggle"],
  setup(e, { expose: t, emit: n }) {
    ue((s) => ({
      "5f3fdece": a.value
    }));
    const o = e, f = n, i = b(), r = b(!1), c = b(o.expandOnMount);
    ce(() => {
      c.value && (r.value = !0);
    });
    const m = P(() => ({
      "is-collapsible-open": r.value,
      "is-collapsible-close": !r.value
    })), { height: d } = xe(i), a = P(() => c.value ? "none" : r.value ? `${d.value}px` : "0px"), p = () => {
      r.value = !0;
    }, l = () => {
      c.value = !1, setTimeout(() => {
        r.value = !1;
      }, 1);
    }, u = (s = !1) => {
      s ? p() : l();
    };
    return $(r, (s) => {
      f(s ? "collapsible:open" : "collapsible:close"), f("collapsible:toggle", s);
    }), t({ isCollapsibleOpen: r, open: p, close: l, toggle: u }), (s, w) => (ae(), fe("div", {
      class: de(["queso-collapsible", m.value])
    }, [
      E(s.$slots, "beforeHeader"),
      L("div", {
        class: "queso-collapsible__header",
        onClick: w[0] || (w[0] = (h) => u(!r.value))
      }, [
        E(s.$slots, "header", j(I({ isCollapsibleOpen: r.value })), () => [
          E(s.$slots, "headerPrefix"),
          L("div", Me, [
            E(s.$slots, "headerText", j(I({ isCollapsibleOpen: r.value })))
          ]),
          E(s.$slots, "headerSuffix"),
          L("div", Pe, [
            E(s.$slots, "headerIcon", j(I({ isCollapsibleOpen: r.value })), () => [
              pe("↓")
            ])
          ])
        ])
      ]),
      E(s.$slots, "afterHeader"),
      E(s.$slots, "beforeContent"),
      L("div", {
        class: "queso-collapsible__content",
        "aria-expanded": r.value
      }, [
        L("div", {
          ref_key: "collapsibleContent",
          ref: i,
          class: "queso-collapsible__content__inner"
        }, [
          E(s.$slots, "content")
        ], 512)
      ], 8, Re),
      E(s.$slots, "afterContent")
    ], 2));
  }
});
export {
  We as _,
  Le as a,
  Ae as b,
  De as o,
  $e as u
};
