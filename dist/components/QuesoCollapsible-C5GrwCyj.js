import { getCurrentScope as oe, onScopeDispose as ne, unref as le, onMounted as Y, nextTick as se, isRef as re, getCurrentInstance as J, computed as P, watch as L, ref as b, reactive as G, defineComponent as ie, useCssVars as ae, onBeforeMount as ue, openBlock as ce, createElementBlock as fe, normalizeClass as de, renderSlot as E, createElementVNode as D, normalizeProps as I, guardReactiveProps as j, createTextVNode as pe } from "vue";
import '../assets/components/QuesoCollapsible.css';function z(e) {
  return oe() ? (ne(e), !0) : !1;
}
function y(e) {
  return typeof e == "function" ? e() : le(e);
}
const K = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ve = (e) => e != null, me = Object.prototype.toString, he = (e) => me.call(e) === "[object Object]", O = () => {
}, be = /* @__PURE__ */ we();
function we() {
  var e, n;
  return K && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((n = window == null ? void 0 : window.navigator) == null ? void 0 : n.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function U(e, n) {
  function l(...t) {
    return new Promise((f, i) => {
      Promise.resolve(e(() => n.apply(this, t), { fn: n, thisArg: this, args: t })).then(f).catch(i);
    });
  }
  return l;
}
function ge(e, n = {}) {
  let l, t, f = O;
  const i = (u) => {
    clearTimeout(u), f(), f = O;
  };
  return (u) => {
    const m = y(e), c = y(n.maxWait);
    return l && i(l), m <= 0 || c !== void 0 && c <= 0 ? (t && (i(t), t = null), Promise.resolve(u())) : new Promise((d, p) => {
      f = n.rejectOnCancel ? p : d, c && !t && (t = setTimeout(() => {
        l && i(l), t = null, d(u());
      }, c)), l = setTimeout(() => {
        t && i(t), t = null, d(u());
      }, m);
    });
  };
}
function ye(...e) {
  let n = 0, l, t = !0, f = O, i, r, u, m, c;
  !re(e[0]) && typeof e[0] == "object" ? { delay: r, trailing: u = !0, leading: m = !0, rejectOnCancel: c = !1 } = e[0] : [r, u = !0, m = !0, c = !1] = e;
  const d = () => {
    l && (clearTimeout(l), l = void 0, f(), f = O);
  };
  return (o) => {
    const a = y(r), s = Date.now() - n, w = () => i = o();
    return d(), a <= 0 ? (n = Date.now(), w()) : (s > a && (m || !t) ? (n = Date.now(), w()) : u && (i = new Promise((h, _) => {
      f = c ? _ : h, l = setTimeout(() => {
        n = Date.now(), t = !0, h(w()), d();
      }, Math.max(0, a - s));
    })), !m && !l && (l = setTimeout(() => t = !0, a)), t = !1, i);
  };
}
function _e(e) {
  return J();
}
function Se(e, n = 200, l = {}) {
  return U(
    ge(n, l),
    e
  );
}
function Ee(e, n = 200, l = !1, t = !0, f = !1) {
  return U(
    ye(n, l, t, f),
    e
  );
}
function Z(e, n = !0, l) {
  _e() ? Y(e, l) : n ? e() : se(e);
}
function S(e) {
  var n;
  const l = y(e);
  return (n = l == null ? void 0 : l.$el) != null ? n : l;
}
const $ = K ? window : void 0;
function M(...e) {
  let n, l, t, f;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([l, t, f] = e, n = $) : [n, l, t, f] = e, !n)
    return O;
  Array.isArray(l) || (l = [l]), Array.isArray(t) || (t = [t]);
  const i = [], r = () => {
    i.forEach((d) => d()), i.length = 0;
  }, u = (d, p, o, a) => (d.addEventListener(p, o, a), () => d.removeEventListener(p, o, a)), m = L(
    () => [S(n), y(f)],
    ([d, p]) => {
      if (r(), !d)
        return;
      const o = he(p) ? { ...p } : p;
      i.push(
        ...l.flatMap((a) => t.map((s) => u(d, a, s, o)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    m(), r();
  };
  return z(c), c;
}
let X = !1;
function ke(e, n, l = {}) {
  const { window: t = $, ignore: f = [], capture: i = !0, detectIframe: r = !1 } = l;
  if (!t)
    return O;
  be && !X && (X = !0, Array.from(t.document.body.children).forEach((o) => o.addEventListener("click", O)), t.document.documentElement.addEventListener("click", O));
  let u = !0;
  const m = (o) => f.some((a) => {
    if (typeof a == "string")
      return Array.from(t.document.querySelectorAll(a)).some((s) => s === o.target || o.composedPath().includes(s));
    {
      const s = S(a);
      return s && (o.target === s || o.composedPath().includes(s));
    }
  }), d = [
    M(t, "click", (o) => {
      const a = S(e);
      if (!(!a || a === o.target || o.composedPath().includes(a))) {
        if (o.detail === 0 && (u = !m(o)), !u) {
          u = !0;
          return;
        }
        n(o);
      }
    }, { passive: !0, capture: i }),
    M(t, "pointerdown", (o) => {
      const a = S(e);
      u = !m(o) && !!(a && !o.composedPath().includes(a));
    }, { passive: !0 }),
    r && M(t, "blur", (o) => {
      setTimeout(() => {
        var a;
        const s = S(e);
        ((a = t.document.activeElement) == null ? void 0 : a.tagName) === "IFRAME" && !(s != null && s.contains(t.document.activeElement)) && n(o);
      }, 0);
    })
  ].filter(Boolean);
  return () => d.forEach((o) => o());
}
function Oe() {
  const e = b(!1), n = J();
  return n && Y(() => {
    e.value = !0;
  }, n), e;
}
function ee(e) {
  const n = Oe();
  return P(() => (n.value, !!e()));
}
function Te(e, n, l = {}) {
  const { window: t = $, ...f } = l;
  let i;
  const r = ee(() => t && "MutationObserver" in t), u = () => {
    i && (i.disconnect(), i = void 0);
  }, m = P(() => {
    const o = y(e), a = (Array.isArray(o) ? o : [o]).map(S).filter(ve);
    return new Set(a);
  }), c = L(
    () => m.value,
    (o) => {
      u(), r.value && t && o.size && (i = new MutationObserver(n), o.forEach((a) => i.observe(a, f)));
    },
    { immediate: !0, flush: "post" }
  ), d = () => i == null ? void 0 : i.takeRecords(), p = () => {
    u(), c();
  };
  return z(p), {
    isSupported: r,
    stop: p,
    takeRecords: d
  };
}
function Ce(e, n, l = {}) {
  const { window: t = $, ...f } = l;
  let i;
  const r = ee(() => t && "ResizeObserver" in t), u = () => {
    i && (i.disconnect(), i = void 0);
  }, m = P(() => Array.isArray(e) ? e.map((p) => S(p)) : [S(e)]), c = L(
    m,
    (p) => {
      if (u(), r.value && t) {
        i = new ResizeObserver(n);
        for (const o of p)
          o && i.observe(o, f);
      }
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), c();
  };
  return z(d), {
    isSupported: r,
    stop: d
  };
}
function Ae(e, n = {}) {
  const {
    reset: l = !0,
    windowResize: t = !0,
    windowScroll: f = !0,
    immediate: i = !0
  } = n, r = b(0), u = b(0), m = b(0), c = b(0), d = b(0), p = b(0), o = b(0), a = b(0);
  function s() {
    const w = S(e);
    if (!w) {
      l && (r.value = 0, u.value = 0, m.value = 0, c.value = 0, d.value = 0, p.value = 0, o.value = 0, a.value = 0);
      return;
    }
    const h = w.getBoundingClientRect();
    r.value = h.height, u.value = h.bottom, m.value = h.left, c.value = h.right, d.value = h.top, p.value = h.width, o.value = h.x, a.value = h.y;
  }
  return Ce(e, s), L(() => S(e), (w) => !w && s()), Te(e, s, {
    attributeFilter: ["style", "class"]
  }), f && M("scroll", s, { capture: !0, passive: !0 }), t && M("resize", s, { passive: !0 }), Z(() => {
    i && s();
  }), {
    height: r,
    bottom: u,
    left: m,
    right: c,
    top: d,
    width: p,
    x: o,
    y: a,
    update: s
  };
}
const Q = 1;
function De(e, n = {}) {
  const {
    throttle: l = 0,
    idle: t = 200,
    onStop: f = O,
    onScroll: i = O,
    offset: r = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: u = {
      capture: !1,
      passive: !0
    },
    behavior: m = "auto",
    window: c = $,
    onError: d = (v) => {
      console.error(v);
    }
  } = n, p = b(0), o = b(0), a = P({
    get() {
      return p.value;
    },
    set(v) {
      w(v, void 0);
    }
  }), s = P({
    get() {
      return o.value;
    },
    set(v) {
      w(void 0, v);
    }
  });
  function w(v, A) {
    var g, R, k;
    if (!c)
      return;
    const C = y(e);
    C && ((k = C instanceof Document ? c.document.body : C) == null || k.scrollTo({
      top: (g = y(A)) != null ? g : s.value,
      left: (R = y(v)) != null ? R : a.value,
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
  }, te = Se(B, l + t), W = (v) => {
    var A;
    if (!c)
      return;
    const g = ((A = v == null ? void 0 : v.document) == null ? void 0 : A.documentElement) || (v == null ? void 0 : v.documentElement) || S(v), { display: R, flexDirection: k } = getComputedStyle(g), C = g.scrollLeft;
    T.left = C < p.value, T.right = C > p.value;
    const q = Math.abs(C) <= (r.left || 0), F = Math.abs(C) + g.clientWidth >= g.scrollWidth - (r.right || 0) - Q;
    R === "flex" && k === "row-reverse" ? (_.left = F, _.right = q) : (_.left = q, _.right = F), p.value = C;
    let x = g.scrollTop;
    v === c.document && !x && (x = c.document.body.scrollTop), T.top = x < o.value, T.bottom = x > o.value;
    const V = Math.abs(x) <= (r.top || 0), N = Math.abs(x) + g.clientHeight >= g.scrollHeight - (r.bottom || 0) - Q;
    R === "flex" && k === "column-reverse" ? (_.top = N, _.bottom = V) : (_.top = V, _.bottom = N), o.value = x;
  }, H = (v) => {
    var A;
    if (!c)
      return;
    const g = (A = v.target.documentElement) != null ? A : v.target;
    W(g), h.value = !0, te(v), i(v);
  };
  return M(
    e,
    "scroll",
    l ? Ee(H, l, !0, !1) : H,
    u
  ), Z(() => {
    try {
      const v = y(e);
      if (!v)
        return;
      W(v);
    } catch (v) {
      d(v);
    }
  }), M(
    e,
    "scrollend",
    B,
    u
  ), {
    x: a,
    y: s,
    isScrolling: h,
    arrivedState: _,
    directions: T,
    measure() {
      const v = y(e);
      c && v && W(v);
    }
  };
}
const xe = { class: "queso-collapsible__header__text" }, Me = { class: "queso-collapsible__header__icon" }, Pe = ["aria-expanded"], Le = /* @__PURE__ */ ie({
  __name: "QuesoCollapsible",
  props: {
    expandOnMount: { type: Boolean }
  },
  emits: ["collapsible:open", "collapsible:close", "collapsible:toggle"],
  setup(e, { expose: n, emit: l }) {
    ae((s) => ({
      "5f3fdece": d.value
    }));
    const t = e, f = l, i = b(), r = b(!1), u = b(t.expandOnMount);
    ue(() => {
      u.value && (r.value = !0);
    });
    const m = P(() => ({
      "is-collapsible-open": r.value,
      "is-collapsible-close": !r.value
    })), { height: c } = Ae(i), d = P(() => u.value ? "none" : r.value ? `${c.value}px` : "0px"), p = () => {
      r.value = !0;
    }, o = () => {
      u.value = !1, setTimeout(() => {
        r.value = !1;
      }, 1);
    }, a = (s = !1) => {
      s ? p() : o();
    };
    return L(r, (s) => {
      f(s ? "collapsible:open" : "collapsible:close"), f("collapsible:toggle", s);
    }), n({ isCollapsibleOpen: r, open: p, close: o, toggle: a }), (s, w) => (ce(), fe("div", {
      class: de(["queso-collapsible", m.value])
    }, [
      E(s.$slots, "beforeHeader"),
      D("div", {
        class: "queso-collapsible__header",
        onClick: w[0] || (w[0] = (h) => a(!r.value))
      }, [
        E(s.$slots, "header", I(j({ isCollapsibleOpen: r.value })), () => [
          E(s.$slots, "headerPrefix"),
          D("div", xe, [
            E(s.$slots, "headerText", I(j({ isCollapsibleOpen: r.value })))
          ]),
          E(s.$slots, "headerSuffix"),
          D("div", Me, [
            E(s.$slots, "headerIcon", I(j({ isCollapsibleOpen: r.value })), () => [
              pe("↓")
            ])
          ])
        ])
      ]),
      E(s.$slots, "afterHeader"),
      E(s.$slots, "beforeContent"),
      D("div", {
        class: "queso-collapsible__content",
        "aria-expanded": r.value
      }, [
        D("div", {
          ref_key: "collapsibleContent",
          ref: i,
          class: "queso-collapsible__content__inner"
        }, [
          E(s.$slots, "content")
        ], 512)
      ], 8, Pe),
      E(s.$slots, "afterContent")
    ], 2));
  }
});
export {
  Le as _,
  Ce as a,
  ke as o,
  De as u
};
