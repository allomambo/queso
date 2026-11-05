import { getCurrentScope as oe, onScopeDispose as ne, unref as le, onMounted as q, nextTick as se, isRef as re, getCurrentInstance as Y, computed as P, watch as $, ref as w, reactive as G, defineComponent as ie, useCssVars as ue, useId as ae, openBlock as ce, createElementBlock as fe, normalizeClass as de, renderSlot as O, createElementVNode as L, normalizeProps as W, guardReactiveProps as j, createTextVNode as pe } from "vue";
import '../assets/components/QuesoCollapsible.css';function z(e) {
  return oe() ? (ne(e), !0) : !1;
}
function g(e) {
  return typeof e == "function" ? e() : le(e);
}
const J = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ve = (e) => e != null, me = Object.prototype.toString, be = (e) => me.call(e) === "[object Object]", T = () => {
}, he = /* @__PURE__ */ we();
function we() {
  var e, o;
  return J && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((o = window == null ? void 0 : window.navigator) == null ? void 0 : o.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function U(e, o) {
  function n(...t) {
    return new Promise((c, r) => {
      Promise.resolve(e(() => o.apply(this, t), { fn: o, thisArg: this, args: t })).then(c).catch(r);
    });
  }
  return n;
}
function ye(e, o = {}) {
  let n, t, c = T;
  const r = (a) => {
    clearTimeout(a), c(), c = T;
  };
  return (a) => {
    const b = g(e), d = g(o.maxWait);
    return n && r(n), b <= 0 || d !== void 0 && d <= 0 ? (t && (r(t), t = null), Promise.resolve(a())) : new Promise((f, m) => {
      c = o.rejectOnCancel ? m : f, d && !t && (t = setTimeout(() => {
        n && r(n), t = null, f(a());
      }, d)), n = setTimeout(() => {
        t && r(t), t = null, f(a());
      }, b);
    });
  };
}
function ge(...e) {
  let o = 0, n, t = !0, c = T, r, s, a, b, d;
  !re(e[0]) && typeof e[0] == "object" ? { delay: s, trailing: a = !0, leading: b = !0, rejectOnCancel: d = !1 } = e[0] : [s, a = !0, b = !0, d = !1] = e;
  const f = () => {
    n && (clearTimeout(n), n = void 0, c(), c = T);
  };
  return (l) => {
    const u = g(s), p = Date.now() - o, y = () => r = l();
    return f(), u <= 0 ? (o = Date.now(), y()) : (p > u && (b || !t) ? (o = Date.now(), y()) : a && (r = new Promise((i, h) => {
      c = d ? h : i, n = setTimeout(() => {
        o = Date.now(), t = !0, i(y()), f();
      }, Math.max(0, u - p));
    })), !b && !n && (n = setTimeout(() => t = !0, u)), t = !1, r);
  };
}
function _e(e) {
  return Y();
}
function Se(e, o = 200, n = {}) {
  return U(
    ye(o, n),
    e
  );
}
function Ee(e, o = 200, n = !1, t = !0, c = !1) {
  return U(
    ge(o, n, t, c),
    e
  );
}
function Z(e, o = !0, n) {
  _e() ? q(e, n) : o ? e() : se(e);
}
function E(e) {
  var o;
  const n = g(e);
  return (o = n == null ? void 0 : n.$el) != null ? o : n;
}
const k = J ? window : void 0;
function A(...e) {
  let o, n, t, c;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, t, c] = e, o = k) : [o, n, t, c] = e, !o)
    return T;
  Array.isArray(n) || (n = [n]), Array.isArray(t) || (t = [t]);
  const r = [], s = () => {
    r.forEach((f) => f()), r.length = 0;
  }, a = (f, m, l, u) => (f.addEventListener(m, l, u), () => f.removeEventListener(m, l, u)), b = $(
    () => [E(o), g(c)],
    ([f, m]) => {
      if (s(), !f)
        return;
      const l = be(m) ? { ...m } : m;
      r.push(
        ...n.flatMap((u) => t.map((p) => a(f, u, p, l)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    b(), s();
  };
  return z(d), d;
}
let X = !1;
function De(e, o, n = {}) {
  const { window: t = k, ignore: c = [], capture: r = !0, detectIframe: s = !1 } = n;
  if (!t)
    return T;
  he && !X && (X = !0, Array.from(t.document.body.children).forEach((l) => l.addEventListener("click", T)), t.document.documentElement.addEventListener("click", T));
  let a = !0;
  const b = (l) => c.some((u) => {
    if (typeof u == "string")
      return Array.from(t.document.querySelectorAll(u)).some((p) => p === l.target || l.composedPath().includes(p));
    {
      const p = E(u);
      return p && (l.target === p || l.composedPath().includes(p));
    }
  }), f = [
    A(t, "click", (l) => {
      const u = E(e);
      if (!(!u || u === l.target || l.composedPath().includes(u))) {
        if (l.detail === 0 && (a = !b(l)), !a) {
          a = !0;
          return;
        }
        o(l);
      }
    }, { passive: !0, capture: r }),
    A(t, "pointerdown", (l) => {
      const u = E(e);
      a = !b(l) && !!(u && !l.composedPath().includes(u));
    }, { passive: !0 }),
    s && A(t, "blur", (l) => {
      setTimeout(() => {
        var u;
        const p = E(e);
        ((u = t.document.activeElement) == null ? void 0 : u.tagName) === "IFRAME" && !(p != null && p.contains(t.document.activeElement)) && o(l);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((l) => l());
}
function Oe(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (o) => o.key === e : Array.isArray(e) ? (o) => e.includes(o.key) : () => !0;
}
function Le(...e) {
  let o, n, t = {};
  e.length === 3 ? (o = e[0], n = e[1], t = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (o = !0, n = e[0], t = e[1]) : (o = e[0], n = e[1]) : (o = !0, n = e[0]);
  const {
    target: c = k,
    eventName: r = "keydown",
    passive: s = !1,
    dedupe: a = !1
  } = t, b = Oe(o);
  return A(c, r, (f) => {
    f.repeat && g(a) || b(f) && n(f);
  }, s);
}
function Te() {
  const e = w(!1), o = Y();
  return o && q(() => {
    e.value = !0;
  }, o), e;
}
function ee(e) {
  const o = Te();
  return P(() => (o.value, !!e()));
}
function Ce(e, o, n = {}) {
  const { window: t = k, ...c } = n;
  let r;
  const s = ee(() => t && "MutationObserver" in t), a = () => {
    r && (r.disconnect(), r = void 0);
  }, b = P(() => {
    const l = g(e), u = (Array.isArray(l) ? l : [l]).map(E).filter(ve);
    return new Set(u);
  }), d = $(
    () => b.value,
    (l) => {
      a(), s.value && t && l.size && (r = new MutationObserver(o), l.forEach((u) => r.observe(u, c)));
    },
    { immediate: !0, flush: "post" }
  ), f = () => r == null ? void 0 : r.takeRecords(), m = () => {
    a(), d();
  };
  return z(m), {
    isSupported: s,
    stop: m,
    takeRecords: f
  };
}
function Ae(e, o, n = {}) {
  const { window: t = k, ...c } = n;
  let r;
  const s = ee(() => t && "ResizeObserver" in t), a = () => {
    r && (r.disconnect(), r = void 0);
  }, b = P(() => Array.isArray(e) ? e.map((m) => E(m)) : [E(e)]), d = $(
    b,
    (m) => {
      if (a(), s.value && t) {
        r = new ResizeObserver(o);
        for (const l of m)
          l && r.observe(l, c);
      }
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    a(), d();
  };
  return z(f), {
    isSupported: s,
    stop: f
  };
}
function xe(e, o = {}) {
  const {
    reset: n = !0,
    windowResize: t = !0,
    windowScroll: c = !0,
    immediate: r = !0
  } = o, s = w(0), a = w(0), b = w(0), d = w(0), f = w(0), m = w(0), l = w(0), u = w(0);
  function p() {
    const y = E(e);
    if (!y) {
      n && (s.value = 0, a.value = 0, b.value = 0, d.value = 0, f.value = 0, m.value = 0, l.value = 0, u.value = 0);
      return;
    }
    const i = y.getBoundingClientRect();
    s.value = i.height, a.value = i.bottom, b.value = i.left, d.value = i.right, f.value = i.top, m.value = i.width, l.value = i.x, u.value = i.y;
  }
  return Ae(e, p), $(() => E(e), (y) => !y && p()), Ce(e, p, {
    attributeFilter: ["style", "class"]
  }), c && A("scroll", p, { capture: !0, passive: !0 }), t && A("resize", p, { passive: !0 }), Z(() => {
    r && p();
  }), {
    height: s,
    bottom: a,
    left: b,
    right: d,
    top: f,
    width: m,
    x: l,
    y: u,
    update: p
  };
}
const Q = 1;
function $e(e, o = {}) {
  const {
    throttle: n = 0,
    idle: t = 200,
    onStop: c = T,
    onScroll: r = T,
    offset: s = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: a = {
      capture: !1,
      passive: !0
    },
    behavior: b = "auto",
    window: d = k,
    onError: f = (v) => {
      console.error(v);
    }
  } = o, m = w(0), l = w(0), u = P({
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
      left: (R = g(v)) != null ? R : u.value,
      behavior: g(b)
    }));
  }
  const i = w(!1), h = G({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), _ = G({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), H = (v) => {
    i.value && (i.value = !1, _.left = !1, _.right = !1, _.top = !1, _.bottom = !1, c(v));
  }, te = Se(H, n + t), I = (v) => {
    var x;
    if (!d)
      return;
    const S = ((x = v == null ? void 0 : v.document) == null ? void 0 : x.documentElement) || (v == null ? void 0 : v.documentElement) || E(v), { display: R, flexDirection: D } = getComputedStyle(S), C = S.scrollLeft;
    _.left = C < m.value, _.right = C > m.value;
    const N = Math.abs(C) <= (s.left || 0), V = Math.abs(C) + S.clientWidth >= S.scrollWidth - (s.right || 0) - Q;
    R === "flex" && D === "row-reverse" ? (h.left = V, h.right = N) : (h.left = N, h.right = V), m.value = C;
    let M = S.scrollTop;
    v === d.document && !M && (M = d.document.body.scrollTop), _.top = M < l.value, _.bottom = M > l.value;
    const K = Math.abs(M) <= (s.top || 0), F = Math.abs(M) + S.clientHeight >= S.scrollHeight - (s.bottom || 0) - Q;
    R === "flex" && D === "column-reverse" ? (h.top = F, h.bottom = K) : (h.top = K, h.bottom = F), l.value = M;
  }, B = (v) => {
    var x;
    if (!d)
      return;
    const S = (x = v.target.documentElement) != null ? x : v.target;
    I(S), i.value = !0, te(v), r(v);
  };
  return A(
    e,
    "scroll",
    n ? Ee(B, n, !0, !1) : B,
    a
  ), Z(() => {
    try {
      const v = g(e);
      if (!v)
        return;
      I(v);
    } catch (v) {
      f(v);
    }
  }), A(
    e,
    "scrollend",
    H,
    a
  ), {
    x: u,
    y: p,
    isScrolling: i,
    arrivedState: h,
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
  setup(e, { expose: o, emit: n }) {
    ue((i) => ({
      v35a18d20: m.value
    }));
    const t = e, c = n, r = w(), s = w(t.expandOnMount), a = w(t.expandOnMount), b = "queso-collapsible__" + ae();
    q(() => {
      s.value && (c("collapsible:open"), c("collapsible:toggle", !0));
    });
    const d = P(() => ({
      "is-collapsible-open": s.value,
      "is-collapsible-close": !s.value
    })), { height: f } = xe(r), m = P(() => a.value ? "none" : s.value ? `${f.value}px` : "0px"), l = () => {
      s.value = !0;
    }, u = () => {
      a.value = !1, setTimeout(() => {
        s.value = !1;
      }, 1);
    }, p = () => {
      s.value ? u() : l();
    }, y = (i) => {
      i.target === i.currentTarget && (i.key === "Enter" || i.key === " " || i.key === "Space") && (i.preventDefault(), p());
    };
    return $(s, (i) => {
      c(i ? "collapsible:open" : "collapsible:close"), c("collapsible:toggle", i);
    }), o({ isCollapsibleOpen: s, open: l, close: u, toggle: p }), (i, h) => (ce(), fe("div", {
      class: de(["queso-collapsible", d.value])
    }, [
      O(i.$slots, "beforeHeader"),
      L("div", {
        class: "queso-collapsible__header",
        role: "button",
        "aria-expanded": s.value,
        "aria-controls": b,
        tabindex: "0",
        onClick: h[0] || (h[0] = (_) => p()),
        onKeydown: h[1] || (h[1] = (_) => y(_))
      }, [
        O(i.$slots, "header", W(j({ isCollapsibleOpen: s.value })), () => [
          O(i.$slots, "headerPrefix"),
          L("div", Pe, [
            O(i.$slots, "headerText", W(j({ isCollapsibleOpen: s.value })))
          ]),
          O(i.$slots, "headerSuffix"),
          L("div", ke, [
            O(i.$slots, "headerIcon", W(j({ isCollapsibleOpen: s.value })), () => [
              h[2] || (h[2] = pe("↓", -1))
            ])
          ])
        ])
      ], 40, Me),
      O(i.$slots, "afterHeader"),
      O(i.$slots, "beforeContent"),
      L("div", {
        class: "queso-collapsible__content",
        id: b
      }, [
        L("div", {
          ref_key: "collapsibleContent",
          ref: r,
          class: "queso-collapsible__content__inner"
        }, [
          O(i.$slots, "content")
        ], 512)
      ]),
      O(i.$slots, "afterContent")
    ], 2));
  }
});
export {
  Ie as _,
  Le as a,
  Ae as b,
  De as o,
  $e as u
};
