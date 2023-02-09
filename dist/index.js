import { unref as I, getCurrentScope as Z, onScopeDispose as ee, ref as S, computed as D, reactive as j, watch as te, defineComponent as oe, onMounted as ne, openBlock as P, createElementBlock as E, normalizeClass as R, createElementVNode as A, renderSlot as b, normalizeProps as F, guardReactiveProps as H, createTextVNode as x, toDisplayString as q, createCommentVNode as M, Fragment as re, renderList as se } from "vue";
var U;
const $ = typeof window < "u", le = (e) => typeof e == "string", k = () => {
};
$ && ((U = window == null ? void 0 : window.navigator) != null && U.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function T(e) {
  return typeof e == "function" ? e() : I(e);
}
function Y(e, o) {
  function t(...n) {
    return new Promise((s, l) => {
      Promise.resolve(e(() => o.apply(this, n), { fn: o, thisArg: this, args: n })).then(s).catch(l);
    });
  }
  return t;
}
function ie(e, o = {}) {
  let t, n, s = k;
  const l = (i) => {
    clearTimeout(i), s(), s = k;
  };
  return (i) => {
    const h = T(e), _ = T(o.maxWait);
    return t && l(t), h <= 0 || _ !== void 0 && _ <= 0 ? (n && (l(n), n = null), Promise.resolve(i())) : new Promise((c, m) => {
      s = o.rejectOnCancel ? m : c, _ && !n && (n = setTimeout(() => {
        t && l(t), n = null, c(i());
      }, _)), t = setTimeout(() => {
        n && l(n), n = null, c(i());
      }, h);
    });
  };
}
function ae(e, o = !0, t = !0, n = !1) {
  let s = 0, l, u = !0, i = k, h;
  const _ = () => {
    l && (clearTimeout(l), l = void 0, i(), i = k);
  };
  return (m) => {
    const v = T(e), r = Date.now() - s, a = () => h = m();
    if (_(), v <= 0)
      return s = Date.now(), a();
    if (r > v && (t || !u))
      s = Date.now(), a();
    else if (o)
      return new Promise((f, g) => {
        i = n ? g : f, l = setTimeout(() => {
          s = Date.now(), u = !0, f(a()), _();
        }, v - r);
      });
    return !t && !l && (l = setTimeout(() => u = !0, v)), u = !1, h;
  };
}
function ue(e) {
  return e;
}
function ce(e) {
  return Z() ? (ee(e), !0) : !1;
}
function de(e, o = 200, t = {}) {
  return Y(ie(o, t), e);
}
function pe(e, o = 200, t = !1, n = !0, s = !1) {
  return Y(ae(o, t, n, s), e);
}
function C(e) {
  var o;
  const t = T(e);
  return (o = t == null ? void 0 : t.$el) != null ? o : t;
}
const J = $ ? window : void 0;
$ && window.document;
$ && window.navigator;
$ && window.location;
function L(...e) {
  let o, t, n, s;
  if (le(e[0]) || Array.isArray(e[0]) ? ([t, n, s] = e, o = J) : [o, t, n, s] = e, !o)
    return k;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const l = [], u = () => {
    l.forEach((c) => c()), l.length = 0;
  }, i = (c, m, v) => (c.addEventListener(m, v, s), () => c.removeEventListener(m, v, s)), h = te(() => C(o), (c) => {
    u(), c && l.push(...t.flatMap((m) => n.map((v) => i(c, m, v))));
  }, { immediate: !0, flush: "post" }), _ = () => {
    h(), u();
  };
  return ce(_), _;
}
function fe(e, o, t = {}) {
  const { window: n = J, ignore: s = [], capture: l = !0, detectIframe: u = !1 } = t;
  if (!n)
    return;
  let i = !0, h;
  const _ = (r) => s.some((a) => {
    if (typeof a == "string")
      return Array.from(n.document.querySelectorAll(a)).some((f) => f === r.target || r.composedPath().includes(f));
    {
      const f = C(a);
      return f && (r.target === f || r.composedPath().includes(f));
    }
  }), c = (r) => {
    n.clearTimeout(h);
    const a = C(e);
    if (!(!a || a === r.target || r.composedPath().includes(a))) {
      if (r.detail === 0 && (i = !_(r)), !i) {
        i = !0;
        return;
      }
      o(r);
    }
  }, m = [
    L(n, "click", c, { passive: !0, capture: l }),
    L(n, "pointerdown", (r) => {
      const a = C(e);
      a && (i = !r.composedPath().includes(a) && !_(r));
    }, { passive: !0 }),
    L(n, "pointerup", (r) => {
      if (r.button === 0) {
        const a = r.composedPath();
        r.composedPath = () => a, h = n.setTimeout(() => c(r), 50);
      }
    }, { passive: !0 }),
    u && L(n, "blur", (r) => {
      var a;
      const f = C(e);
      ((a = n.document.activeElement) == null ? void 0 : a.tagName) === "IFRAME" && !(f != null && f.contains(n.document.activeElement)) && o(r);
    })
  ].filter(Boolean);
  return () => m.forEach((r) => r());
}
const B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, W = "__vueuse_ssr_handlers__";
B[W] = B[W] || {};
B[W];
const z = 1;
function ve(e, o = {}) {
  const {
    throttle: t = 0,
    idle: n = 200,
    onStop: s = k,
    onScroll: l = k,
    offset: u = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: i = {
      capture: !1,
      passive: !0
    },
    behavior: h = "auto"
  } = o, _ = S(0), c = S(0), m = D({
    get() {
      return _.value;
    },
    set(d) {
      r(d, void 0);
    }
  }), v = D({
    get() {
      return c.value;
    },
    set(d) {
      r(void 0, d);
    }
  });
  function r(d, w) {
    var y, O, V;
    const Q = T(e);
    Q && ((V = Q instanceof Document ? document.body : Q) == null || V.scrollTo({
      top: (y = T(w)) != null ? y : v.value,
      left: (O = T(d)) != null ? O : m.value,
      behavior: T(h)
    }));
  }
  const a = S(!1), f = j({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), g = j({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), N = de((d) => {
    a.value = !1, g.left = !1, g.right = !1, g.top = !1, g.bottom = !1, s(d);
  }, t + n), p = (d) => {
    const w = d.target === document ? d.target.documentElement : d.target, y = w.scrollLeft;
    g.left = y < _.value, g.right = y > c.value, f.left = y <= 0 + (u.left || 0), f.right = y + w.clientWidth >= w.scrollWidth - (u.right || 0) - z, _.value = y;
    let O = w.scrollTop;
    d.target === document && !O && (O = document.body.scrollTop), g.top = O < c.value, g.bottom = O > c.value, f.top = O <= 0 + (u.top || 0), f.bottom = O + w.clientHeight >= w.scrollHeight - (u.bottom || 0) - z, c.value = O, a.value = !0, N(d), l(d);
  };
  return L(e, "scroll", t ? pe(p, t, !0, !1) : p, i), {
    x: m,
    y: v,
    isScrolling: a,
    arrivedState: f,
    directions: g
  };
}
var G;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(G || (G = {}));
var _e = Object.defineProperty, X = Object.getOwnPropertySymbols, me = Object.prototype.hasOwnProperty, we = Object.prototype.propertyIsEnumerable, K = (e, o, t) => o in e ? _e(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, he = (e, o) => {
  for (var t in o || (o = {}))
    me.call(o, t) && K(e, t, o[t]);
  if (X)
    for (var t of X(o))
      we.call(o, t) && K(e, t, o[t]);
  return e;
};
const ye = {
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
he({
  linear: ue
}, ye);
const ge = { class: "c-dropdown__selector__text" }, Oe = {
  key: 0,
  class: "c-dropdown__selector__placeholder"
}, be = {
  key: 1,
  class: "c-dropdown__selector__active-label"
}, Te = { class: "c-dropdown__selector__icon" }, Pe = { class: "c-dropdown__popover" }, Ee = {
  key: 0,
  class: "c-dropdown__popover__header"
}, Ie = ["onClick"], Se = {
  key: 1,
  class: "c-dropdown__popover__footer"
}, ke = /* @__PURE__ */ oe({
  __name: "AppDropdown",
  props: {
    defaultOptions: {
      type: Array,
      required: !1,
      default: () => []
    },
    options: {
      type: Array,
      required: !0,
      default: () => []
    },
    multiple: {
      type: Boolean,
      required: !1,
      default: !1
    },
    stayOpenOnSelection: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["update:options", "open:dropdown", "close:dropdown"],
  setup(e, { emit: o }) {
    const t = e, n = S(), s = S(), l = S(!1), u = S([]), i = D(() => u.value.length > 0 ? u.value : t.defaultOptions);
    ne(() => {
      t.multiple && (u.value = t.defaultOptions);
    });
    const h = D(() => ({
      "is-open": l.value,
      "is-close": !l.value,
      "has-value": i.value.length >= 1,
      "has-no-value": i.value.length < 1,
      "is-multiple": t.multiple
    })), _ = (p) => {
      if (t.multiple) {
        let d = 0;
        u.value = u.value.filter((w) => {
          const y = w.key !== p.key;
          return y || d++, y;
        }), d < 1 && u.value.push(p);
      } else
        u.value = [p];
      o("update:options", i.value), t.multiple || t.stayOpenOnSelection || v();
    }, c = () => {
      setTimeout(() => {
        a.value = 0;
      }, 210);
    }, m = () => {
      l.value = !0, o("open:dropdown");
    }, v = () => {
      l.value = !1, o("close:dropdown"), c();
    }, r = (p = !1) => {
      p ? m() : v();
    };
    fe(n, () => v());
    const { y: a, arrivedState: f } = ve(s, {
      offset: { top: 15, bottom: 15 }
    }), g = D(() => {
      var p, d;
      return s.value ? ((p = s.value) == null ? void 0 : p.scrollHeight) > ((d = s.value) == null ? void 0 : d.clientHeight) : !1;
    }), N = D(() => ({
      "is-scrolled-top": f.top,
      "is-scrolled-bottom": f.bottom || !g.value
    }));
    return (p, d) => (P(), E("div", {
      class: R(["c-dropdown", I(h)]),
      ref_key: "dropdown",
      ref: n
    }, [
      A("div", {
        class: "c-dropdown__selector",
        onClick: d[0] || (d[0] = (w) => r(!l.value))
      }, [
        b(p.$slots, "prefix", {}, void 0, !0),
        A("div", ge, [
          I(i).length < 1 ? (P(), E("div", Oe, [
            b(p.$slots, "placeholder", {}, void 0, !0)
          ])) : (P(), E("div", be, [
            b(p.$slots, "activeLabel", F(H({ activeOptions: I(i) })), () => [
              x(q(I(i)), 1)
            ], !0)
          ]))
        ]),
        b(p.$slots, "suffix", {}, void 0, !0),
        A("div", Te, [
          b(p.$slots, "icon", {}, () => [
            x("↓")
          ], !0)
        ])
      ]),
      A("div", Pe, [
        p.$slots.popoverHeader ? (P(), E("div", Ee, [
          b(p.$slots, "popoverHeader", F(H({ openDropdown: m, closeDropdown: v })), void 0, !0)
        ])) : M("", !0),
        A("div", {
          class: R(["c-dropdown__popover__scroll", I(N)])
        }, [
          A("ul", {
            ref_key: "dropdownPopover",
            ref: s,
            class: "c-dropdown__popover__options-list"
          }, [
            (P(!0), E(re, null, se(e.options, (w) => (P(), E("li", {
              key: w.key,
              onClick: (y) => _(w),
              class: R(["c-dropdown__popover__options-list__item", { "is-active": I(i).find((y) => y.key === w.key) }])
            }, [
              b(p.$slots, "item", F(H({ ...w, openDropdown: m, closeDropdown: v })), () => [
                x(q(w), 1)
              ], !0)
            ], 10, Ie))), 128))
          ], 512)
        ], 2),
        p.$slots.popoverFooter ? (P(), E("div", Se, [
          b(p.$slots, "popoverFooter", F(H({ openDropdown: m, closeDropdown: v })), void 0, !0)
        ])) : M("", !0)
      ])
    ], 2));
  }
});
const Ae = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of o)
    t[n] = s;
  return t;
}, Ce = /* @__PURE__ */ Ae(ke, [["__scopeId", "data-v-5c6159e4"]]);
export {
  Ce as TacosDropdown
};
