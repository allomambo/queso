import { getCurrentScope as oe, onScopeDispose as ne, unref as le, onMounted as Q, nextTick as se, isRef as re, getCurrentInstance as Y, computed as P, watch as $, ref as w, reactive as F, defineComponent as ie, useCssVars as ue, onBeforeMount as ae, openBlock as ce, createElementBlock as fe, normalizeClass as de, renderSlot as O, createElementVNode as L, normalizeProps as W, guardReactiveProps as j, createTextVNode as pe } from "vue";
import '../assets/components/QuesoCollapsible.css';function q(e) {
  return oe() ? (ne(e), !0) : !1;
}
function g(e) {
  return typeof e == "function" ? e() : le(e);
}
const J = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ve = (e) => e != null, me = Object.prototype.toString, he = (e) => me.call(e) === "[object Object]", T = () => {
}, be = /* @__PURE__ */ we();
function we() {
  var e, t;
  return J && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function U(e, t) {
  function n(...o) {
    return new Promise((f, r) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(f).catch(r);
    });
  }
  return n;
}
function ye(e, t = {}) {
  let n, o, f = T;
  const r = (u) => {
    clearTimeout(u), f(), f = T;
  };
  return (u) => {
    const h = g(e), d = g(t.maxWait);
    return n && r(n), h <= 0 || d !== void 0 && d <= 0 ? (o && (r(o), o = null), Promise.resolve(u())) : new Promise((c, m) => {
      f = t.rejectOnCancel ? m : c, d && !o && (o = setTimeout(() => {
        n && r(n), o = null, c(u());
      }, d)), n = setTimeout(() => {
        o && r(o), o = null, c(u());
      }, h);
    });
  };
}
function ge(...e) {
  let t = 0, n, o = !0, f = T, r, s, u, h, d;
  !re(e[0]) && typeof e[0] == "object" ? { delay: s, trailing: u = !0, leading: h = !0, rejectOnCancel: d = !1 } = e[0] : [s, u = !0, h = !0, d = !1] = e;
  const c = () => {
    n && (clearTimeout(n), n = void 0, f(), f = T);
  };
  return (l) => {
    const i = g(s), p = Date.now() - t, y = () => r = l();
    return c(), i <= 0 ? (t = Date.now(), y()) : (p > i && (h || !o) ? (t = Date.now(), y()) : u && (r = new Promise((a, b) => {
      f = d ? b : a, n = setTimeout(() => {
        t = Date.now(), o = !0, a(y()), c();
      }, Math.max(0, i - p));
    })), !h && !n && (n = setTimeout(() => o = !0, i)), o = !1, r);
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
function E(e) {
  var t;
  const n = g(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const k = J ? window : void 0;
function A(...e) {
  let t, n, o, f;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, f] = e, t = k) : [t, n, o, f] = e, !t)
    return T;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], s = () => {
    r.forEach((c) => c()), r.length = 0;
  }, u = (c, m, l, i) => (c.addEventListener(m, l, i), () => c.removeEventListener(m, l, i)), h = $(
    () => [E(t), g(f)],
    ([c, m]) => {
      if (s(), !c)
        return;
      const l = he(m) ? { ...m } : m;
      r.push(
        ...n.flatMap((i) => o.map((p) => u(c, i, p, l)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    h(), s();
  };
  return q(d), d;
}
let G = !1;
function De(e, t, n = {}) {
  const { window: o = k, ignore: f = [], capture: r = !0, detectIframe: s = !1 } = n;
  if (!o)
    return T;
  be && !G && (G = !0, Array.from(o.document.body.children).forEach((l) => l.addEventListener("click", T)), o.document.documentElement.addEventListener("click", T));
  let u = !0;
  const h = (l) => f.some((i) => {
    if (typeof i == "string")
      return Array.from(o.document.querySelectorAll(i)).some((p) => p === l.target || l.composedPath().includes(p));
    {
      const p = E(i);
      return p && (l.target === p || l.composedPath().includes(p));
    }
  }), c = [
    A(o, "click", (l) => {
      const i = E(e);
      if (!(!i || i === l.target || l.composedPath().includes(i))) {
        if (l.detail === 0 && (u = !h(l)), !u) {
          u = !0;
          return;
        }
        t(l);
      }
    }, { passive: !0, capture: r }),
    A(o, "pointerdown", (l) => {
      const i = E(e);
      u = !h(l) && !!(i && !l.composedPath().includes(i));
    }, { passive: !0 }),
    s && A(o, "blur", (l) => {
      setTimeout(() => {
        var i;
        const p = E(e);
        ((i = o.document.activeElement) == null ? void 0 : i.tagName) === "IFRAME" && !(p != null && p.contains(o.document.activeElement)) && t(l);
      }, 0);
    })
  ].filter(Boolean);
  return () => c.forEach((l) => l());
}
function Oe(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Le(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: f = k,
    eventName: r = "keydown",
    passive: s = !1,
    dedupe: u = !1
  } = o, h = Oe(t);
  return A(f, r, (c) => {
    c.repeat && g(u) || h(c) && n(c);
  }, s);
}
function Te() {
  const e = w(!1), t = Y();
  return t && Q(() => {
    e.value = !0;
  }, t), e;
}
function ee(e) {
  const t = Te();
  return P(() => (t.value, !!e()));
}
function Ce(e, t, n = {}) {
  const { window: o = k, ...f } = n;
  let r;
  const s = ee(() => o && "MutationObserver" in o), u = () => {
    r && (r.disconnect(), r = void 0);
  }, h = P(() => {
    const l = g(e), i = (Array.isArray(l) ? l : [l]).map(E).filter(ve);
    return new Set(i);
  }), d = $(
    () => h.value,
    (l) => {
      u(), s.value && o && l.size && (r = new MutationObserver(t), l.forEach((i) => r.observe(i, f)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => r == null ? void 0 : r.takeRecords(), m = () => {
    u(), d();
  };
  return q(m), {
    isSupported: s,
    stop: m,
    takeRecords: c
  };
}
function Ae(e, t, n = {}) {
  const { window: o = k, ...f } = n;
  let r;
  const s = ee(() => o && "ResizeObserver" in o), u = () => {
    r && (r.disconnect(), r = void 0);
  }, h = P(() => Array.isArray(e) ? e.map((m) => E(m)) : [E(e)]), d = $(
    h,
    (m) => {
      if (u(), s.value && o) {
        r = new ResizeObserver(t);
        for (const l of m)
          l && r.observe(l, f);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    u(), d();
  };
  return q(c), {
    isSupported: s,
    stop: c
  };
}
function xe(e, t = {}) {
  const {
    reset: n = !0,
    windowResize: o = !0,
    windowScroll: f = !0,
    immediate: r = !0
  } = t, s = w(0), u = w(0), h = w(0), d = w(0), c = w(0), m = w(0), l = w(0), i = w(0);
  function p() {
    const y = E(e);
    if (!y) {
      n && (s.value = 0, u.value = 0, h.value = 0, d.value = 0, c.value = 0, m.value = 0, l.value = 0, i.value = 0);
      return;
    }
    const a = y.getBoundingClientRect();
    s.value = a.height, u.value = a.bottom, h.value = a.left, d.value = a.right, c.value = a.top, m.value = a.width, l.value = a.x, i.value = a.y;
  }
  return Ae(e, p), $(() => E(e), (y) => !y && p()), Ce(e, p, {
    attributeFilter: ["style", "class"]
  }), f && A("scroll", p, { capture: !0, passive: !0 }), o && A("resize", p, { passive: !0 }), Z(() => {
    r && p();
  }), {
    height: s,
    bottom: u,
    left: h,
    right: d,
    top: c,
    width: m,
    x: l,
    y: i,
    update: p
  };
}
const X = 1;
function $e(e, t = {}) {
  const {
    throttle: n = 0,
    idle: o = 200,
    onStop: f = T,
    onScroll: r = T,
    offset: s = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: u = {
      capture: !1,
      passive: !0
    },
    behavior: h = "auto",
    window: d = k,
    onError: c = (v) => {
      console.error(v);
    }
  } = t, m = w(0), l = w(0), i = P({
    get() {
      return m.value;
    },
    set(v) {
      y(v, void 0);
    }
  }), p = P({
    get() {
      return l.value;
    },
    set(v) {
      y(void 0, v);
    }
  });
  function y(v, x) {
    var S, R, D;
    if (!d)
      return;
    const C = g(e);
    C && ((D = C instanceof Document ? d.document.body : C) == null || D.scrollTo({
      top: (S = g(x)) != null ? S : p.value,
      left: (R = g(v)) != null ? R : i.value,
      behavior: g(h)
    }));
  }
  const a = w(!1), b = F({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), _ = F({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), z = (v) => {
    a.value && (a.value = !1, _.left = !1, _.right = !1, _.top = !1, _.bottom = !1, f(v));
  }, te = Se(z, n + o), I = (v) => {
    var x;
    if (!d)
      return;
    const S = ((x = v == null ? void 0 : v.document) == null ? void 0 : x.documentElement) || (v == null ? void 0 : v.documentElement) || E(v), { display: R, flexDirection: D } = getComputedStyle(S), C = S.scrollLeft;
    _.left = C < m.value, _.right = C > m.value;
    const H = Math.abs(C) <= (s.left || 0), N = Math.abs(C) + S.clientWidth >= S.scrollWidth - (s.right || 0) - X;
    R === "flex" && D === "row-reverse" ? (b.left = N, b.right = H) : (b.left = H, b.right = N), m.value = C;
    let M = S.scrollTop;
    v === d.document && !M && (M = d.document.body.scrollTop), _.top = M < l.value, _.bottom = M > l.value;
    const V = Math.abs(M) <= (s.top || 0), K = Math.abs(M) + S.clientHeight >= S.scrollHeight - (s.bottom || 0) - X;
    R === "flex" && D === "column-reverse" ? (b.top = K, b.bottom = V) : (b.top = V, b.bottom = K), l.value = M;
  }, B = (v) => {
    var x;
    if (!d)
      return;
    const S = (x = v.target.documentElement) != null ? x : v.target;
    I(S), a.value = !0, te(v), r(v);
  };
  return A(
    e,
    "scroll",
    n ? Ee(B, n, !0, !1) : B,
    u
  ), Z(() => {
    try {
      const v = g(e);
      if (!v)
        return;
      I(v);
    } catch (v) {
      c(v);
    }
  }), A(
    e,
    "scrollend",
    z,
    u
  ), {
    x: i,
    y: p,
    isScrolling: a,
    arrivedState: b,
    directions: _,
    measure() {
      const v = g(e);
      d && v && I(v);
    }
  };
}
const Me = ["aria-expanded"], Pe = { class: "queso-collapsible__header__text" }, ke = { class: "queso-collapsible__header__icon" }, Ie = /* @__PURE__ */ ie({
  __name: "QuesoCollapsible",
  props: {
    expandOnMount: { type: Boolean }
  },
  emits: ["collapsible:open", "collapsible:close", "collapsible:toggle"],
  setup(e, { expose: t, emit: n }) {
    ue((a) => ({
      "8af02d4c": m.value
    }));
    const o = e, f = n, r = w(), s = w(!1), u = w(o.expandOnMount), h = "queso-collapsible__" + Math.random().toString(36).substring(2, 9);
    ae(() => {
      u.value && (s.value = !0);
    });
    const d = P(() => ({
      "is-collapsible-open": s.value,
      "is-collapsible-close": !s.value
    })), { height: c } = xe(r), m = P(() => u.value ? "none" : s.value ? `${c.value}px` : "0px"), l = () => {
      s.value = !0;
    }, i = () => {
      u.value = !1, setTimeout(() => {
        s.value = !1;
      }, 1);
    }, p = () => {
      s.value ? i() : l();
    }, y = (a) => {
      (a.key === " " || a.key === "Space") && (a.preventDefault(), p());
    };
    return $(s, (a) => {
      f(a ? "collapsible:open" : "collapsible:close"), f("collapsible:toggle", a);
    }), t({ isCollapsibleOpen: s, open: l, close: i, toggle: p }), (a, b) => (ce(), fe("div", {
      class: de(["queso-collapsible", d.value])
    }, [
      O(a.$slots, "beforeHeader"),
      L("div", {
        class: "queso-collapsible__header",
        "aria-expanded": s.value,
        "aria-controls": h,
        tabindex: "0",
        onClick: b[0] || (b[0] = (_) => p()),
        onKeydown: b[1] || (b[1] = (_) => y(_))
      }, [
        O(a.$slots, "header", W(j({ isCollapsibleOpen: s.value })), () => [
          O(a.$slots, "headerPrefix"),
          L("div", Pe, [
            O(a.$slots, "headerText", W(j({ isCollapsibleOpen: s.value })))
          ]),
          O(a.$slots, "headerSuffix"),
          L("div", ke, [
            O(a.$slots, "headerIcon", W(j({ isCollapsibleOpen: s.value })), () => [
              pe("↓")
            ])
          ])
        ])
      ], 40, Me),
      O(a.$slots, "afterHeader"),
      O(a.$slots, "beforeContent"),
      L("div", {
        class: "queso-collapsible__content",
        id: h
      }, [
        L("div", {
          ref_key: "collapsibleContent",
          ref: r,
          class: "queso-collapsible__content__inner"
        }, [
          O(a.$slots, "content")
        ], 512)
      ]),
      O(a.$slots, "afterContent")
    ], 2));
  }
});
export {
  Ie as _,
  De as a,
  Ae as b,
  Le as o,
  $e as u
};
