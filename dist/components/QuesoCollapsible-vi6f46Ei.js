import "../assets/components/QuesoCollapsible.css";
import { getCurrentScope as ee, onScopeDispose as te, unref as oe, onMounted as X, nextTick as ne, getCurrentInstance as Q, computed as M, watch as $, ref as g, reactive as V, defineComponent as se, useCssVars as le, onBeforeMount as re, openBlock as ie, createElementBlock as ue, normalizeClass as ae, renderSlot as y, createElementVNode as L, normalizeProps as I, guardReactiveProps as W, createTextVNode as ce } from "vue";
function Y(e) {
  return ee() ? (te(e), !0) : !1;
}
function _(e) {
  return typeof e == "function" ? e() : oe(e);
}
const J = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const fe = Object.prototype.toString, de = (e) => fe.call(e) === "[object Object]", C = () => {
}, pe = /* @__PURE__ */ ve();
function ve() {
  var e, l;
  return J && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((l = window == null ? void 0 : window.navigator) == null ? void 0 : l.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function K(e, l) {
  function s(...t) {
    return new Promise((c, i) => {
      Promise.resolve(e(() => l.apply(this, t), { fn: l, thisArg: this, args: t })).then(c).catch(i);
    });
  }
  return s;
}
function me(e, l = {}) {
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
function he(e, l = !0, s = !0, t = !1) {
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
function be(e) {
  return e || Q();
}
function ge(e, l = 200, s = {}) {
  return K(
    me(l, s),
    e
  );
}
function we(e, l = 200, s = !1, t = !0, c = !1) {
  return K(
    he(l, s, t, c),
    e
  );
}
function U(e, l = !0, s) {
  const t = be(s);
  t ? X(e, t) : l ? e() : ne(e);
}
function T(e) {
  var l;
  const s = _(e);
  return (l = s == null ? void 0 : s.$el) != null ? l : s;
}
const R = J ? window : void 0;
function A(...e) {
  let l, s, t, c;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([s, t, c] = e, l = R) : [l, s, t, c] = e, !l)
    return C;
  Array.isArray(s) || (s = [s]), Array.isArray(t) || (t = [t]);
  const i = [], r = () => {
    i.forEach((f) => f()), i.length = 0;
  }, a = (f, p, o, u) => (f.addEventListener(p, o, u), () => f.removeEventListener(p, o, u)), m = $(
    () => [T(l), _(c)],
    ([f, p]) => {
      if (r(), !f)
        return;
      const o = de(p) ? { ...p } : p;
      i.push(
        ...s.flatMap((u) => t.map((n) => a(f, u, n, o)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    m(), r();
  };
  return Y(d), d;
}
let N = !1;
function Me(e, l, s = {}) {
  const { window: t = R, ignore: c = [], capture: i = !0, detectIframe: r = !1 } = s;
  if (!t)
    return;
  pe && !N && (N = !0, Array.from(t.document.body.children).forEach((o) => o.addEventListener("click", C)), t.document.documentElement.addEventListener("click", C));
  let a = !0;
  const m = (o) => c.some((u) => {
    if (typeof u == "string")
      return Array.from(t.document.querySelectorAll(u)).some((n) => n === o.target || o.composedPath().includes(n));
    {
      const n = T(u);
      return n && (o.target === n || o.composedPath().includes(n));
    }
  }), f = [
    A(t, "click", (o) => {
      const u = T(e);
      if (!(!u || u === o.target || o.composedPath().includes(u))) {
        if (o.detail === 0 && (a = !m(o)), !a) {
          a = !0;
          return;
        }
        l(o);
      }
    }, { passive: !0, capture: i }),
    A(t, "pointerdown", (o) => {
      const u = T(e);
      a = !m(o) && !!(u && !o.composedPath().includes(u));
    }, { passive: !0 }),
    r && A(t, "blur", (o) => {
      setTimeout(() => {
        var u;
        const n = T(e);
        ((u = t.document.activeElement) == null ? void 0 : u.tagName) === "IFRAME" && !(n != null && n.contains(t.document.activeElement)) && l(o);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((o) => o());
}
function _e() {
  const e = g(!1);
  return Q() && X(() => {
    e.value = !0;
  }), e;
}
function ye(e) {
  const l = _e();
  return M(() => (l.value, !!e()));
}
function Se(e, l, s = {}) {
  const { window: t = R, ...c } = s;
  let i;
  const r = ye(() => t && "ResizeObserver" in t), a = () => {
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
  return Y(f), {
    isSupported: r,
    stop: f
  };
}
function Ee(e, l = {}) {
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
  return Se(e, n), $(() => T(e), (b) => !b && n()), c && A("scroll", n, { capture: !0, passive: !0 }), t && A("resize", n, { passive: !0 }), U(() => {
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
const G = 1;
function Pe(e, l = {}) {
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
    window: d = R
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
  function n(v, O) {
    var w, P, D;
    if (!d)
      return;
    const E = _(e);
    E && ((D = E instanceof Document ? d.document.body : E) == null || D.scrollTo({
      top: (w = _(O)) != null ? w : u.value,
      left: (P = _(v)) != null ? P : o.value,
      behavior: _(m)
    }));
  }
  const b = g(!1), h = V({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), S = V({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), B = (v) => {
    b.value && (b.value = !1, S.left = !1, S.right = !1, S.top = !1, S.bottom = !1, c(v));
  }, Z = ge(B, s + t), k = (v) => {
    var O;
    if (!d)
      return;
    const w = v.document ? v.document.documentElement : (O = v.documentElement) != null ? O : v, { display: P, flexDirection: D } = getComputedStyle(w), E = w.scrollLeft;
    S.left = E < f.value, S.right = E > f.value;
    const j = Math.abs(E) <= 0 + (r.left || 0), q = Math.abs(E) + w.clientWidth >= w.scrollWidth - (r.right || 0) - G;
    P === "flex" && D === "row-reverse" ? (h.left = q, h.right = j) : (h.left = j, h.right = q), f.value = E;
    let x = w.scrollTop;
    v === d.document && !x && (x = d.document.body.scrollTop), S.top = x < p.value, S.bottom = x > p.value;
    const z = Math.abs(x) <= 0 + (r.top || 0), F = Math.abs(x) + w.clientHeight >= w.scrollHeight - (r.bottom || 0) - G;
    P === "flex" && D === "column-reverse" ? (h.top = F, h.bottom = z) : (h.top = z, h.bottom = F), p.value = x;
  }, H = (v) => {
    var O;
    if (!d)
      return;
    const w = (O = v.target.documentElement) != null ? O : v.target;
    k(w), b.value = !0, Z(v), i(v);
  };
  return A(
    e,
    "scroll",
    s ? we(H, s, !0, !1) : H,
    a
  ), U(() => {
    const v = _(e);
    v && k(v);
  }), A(
    e,
    "scrollend",
    B,
    a
  ), {
    x: o,
    y: u,
    isScrolling: b,
    arrivedState: h,
    directions: S,
    measure() {
      const v = _(e);
      d && v && k(v);
    }
  };
}
const Te = { class: "queso-collapsible__header__text" }, Ce = { class: "queso-collapsible__header__icon" }, Oe = ["aria-expanded"], De = /* @__PURE__ */ se({
  __name: "QuesoCollapsible",
  props: {
    expandOnMount: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(e, { expose: l, emit: s }) {
    le((n) => ({
      "78b86712": f.value
    }));
    const t = e, c = s, i = g(), r = g(!1), a = g(t.expandOnMount);
    re(() => {
      a.value && (r.value = !0);
    });
    const m = M(() => ({
      "is-collapsible-open": r.value,
      "is-collapsible-close": !r.value
    })), { height: d } = Ee(i), f = M(() => a.value ? "none" : r.value ? `${d.value}px` : "0px"), p = () => {
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
    }), l({ isCollapsibleOpen: r, open: p, close: o, toggle: u }), (n, b) => (ie(), ue("div", {
      class: ae(["queso-collapsible", m.value])
    }, [
      y(n.$slots, "beforeHeader"),
      L("div", {
        class: "queso-collapsible__header",
        onClick: b[0] || (b[0] = (h) => u(!r.value))
      }, [
        y(n.$slots, "header", I(W({ isCollapsibleOpen: r.value })), () => [
          y(n.$slots, "headerPrefix"),
          L("div", Te, [
            y(n.$slots, "headerText", I(W({ isCollapsibleOpen: r.value })))
          ]),
          y(n.$slots, "headerSuffix"),
          L("div", Ce, [
            y(n.$slots, "headerIcon", I(W({ isCollapsibleOpen: r.value })), () => [
              ce("↓")
            ])
          ])
        ])
      ]),
      y(n.$slots, "afterHeader"),
      y(n.$slots, "beforeContent"),
      L("div", {
        class: "queso-collapsible__content",
        "aria-expanded": r.value
      }, [
        L("div", {
          ref_key: "collapsibleContent",
          ref: i,
          class: "queso-collapsible__content__inner"
        }, [
          y(n.$slots, "content")
        ], 512)
      ], 8, Oe),
      y(n.$slots, "afterContent")
    ], 2));
  }
});
export {
  De as _,
  Se as a,
  Me as o,
  Pe as u
};
