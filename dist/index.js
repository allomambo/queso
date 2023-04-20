import { defineComponent as F, computed as q, openBlock as h, createBlock as E, resolveDynamicComponent as Z, normalizeClass as S, unref as b, withCtx as k, renderSlot as d, getCurrentScope as he, onScopeDispose as me, getCurrentInstance as be, onMounted as ee, nextTick as ye, watch as j, ref as T, reactive as K, createElementBlock as g, createElementVNode as w, normalizeProps as B, guardReactiveProps as M, createTextVNode as L, toDisplayString as I, createCommentVNode as P, Fragment as G, renderList as X, toRefs as $e, toRef as te, inject as we, provide as ge, Teleport as ke, mergeProps as Oe, createVNode as qe, useCssVars as ue, onBeforeMount as Te } from "vue";
const Io = /* @__PURE__ */ F({
  __name: "ClickableBase",
  props: {
    tag: { default: "button" },
    url: null,
    isDisabled: { type: Boolean },
    isExternal: { type: Boolean },
    isDownload: { type: Boolean },
    ariaLabel: null
  },
  setup(o) {
    const t = o, s = q(() => ({
      "is-disabled": t.isDisabled
    })), e = q(() => t.isDisabled ? !0 : null), a = q(() => t.tag === "a" ? t.url : null), n = q(() => t.tag === "router-link" ? t.url : null), r = q(() => t.isExternal ? "_blank" : "_self"), i = q(() => t.tag === "a" ? r.value : null), u = q(() => t.tag === "a" ? "noopener" : null), p = q(() => t.tag === "a" && t.isDownload ? "" : null);
    return (c, v) => (h(), E(Z(o.tag), {
      class: S(["queso-clickable", b(s)]),
      rel: b(u),
      href: b(a),
      to: b(n),
      target: b(i),
      download: b(p),
      disabled: b(e),
      "aria-disabled": b(e),
      "aria-label": o.ariaLabel
    }, {
      default: k(() => [
        d(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "rel", "href", "to", "target", "download", "disabled", "aria-disabled", "aria-label"]));
  }
});
var se;
const z = typeof window < "u", xe = (o) => typeof o == "string", Q = () => {
};
z && ((se = window == null ? void 0 : window.navigator) != null && se.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function D(o) {
  return typeof o == "function" ? o() : b(o);
}
function ce(o, t) {
  function s(...e) {
    return new Promise((a, n) => {
      Promise.resolve(o(() => t.apply(this, e), { fn: t, thisArg: this, args: e })).then(a).catch(n);
    });
  }
  return s;
}
function Ce(o, t = {}) {
  let s, e, a = Q;
  const n = (i) => {
    clearTimeout(i), a(), a = Q;
  };
  return (i) => {
    const u = D(o), p = D(t.maxWait);
    return s && n(s), u <= 0 || p !== void 0 && p <= 0 ? (e && (n(e), e = null), Promise.resolve(i())) : new Promise((c, v) => {
      a = t.rejectOnCancel ? v : c, p && !e && (e = setTimeout(() => {
        s && n(s), e = null, c(i());
      }, p)), s = setTimeout(() => {
        e && n(e), e = null, c(i());
      }, u);
    });
  };
}
function Be(o, t = !0, s = !0, e = !1) {
  let a = 0, n, r = !0, i = Q, u;
  const p = () => {
    n && (clearTimeout(n), n = void 0, i(), i = Q);
  };
  return (v) => {
    const y = D(o), l = Date.now() - a, _ = () => u = v();
    if (p(), y <= 0)
      return a = Date.now(), _();
    if (l > y && (s || !r))
      a = Date.now(), _();
    else if (t)
      return new Promise((f, O) => {
        i = e ? O : f, n = setTimeout(() => {
          a = Date.now(), r = !0, f(_()), p();
        }, y - l);
      });
    return !s && !n && (n = setTimeout(() => r = !0, y)), r = !1, u;
  };
}
function Me(o) {
  return o;
}
function de(o) {
  return he() ? (me(o), !0) : !1;
}
function Fe(o, t = 200, s = {}) {
  return ce(Ce(t, s), o);
}
function Se(o, t = 200, s = !1, e = !0, a = !1) {
  return ce(Be(t, s, e, a), o);
}
function pe(o, t = !0) {
  be() ? ee(o) : t ? o() : ye(o);
}
function H(o) {
  var t;
  const s = D(o);
  return (t = s == null ? void 0 : s.$el) != null ? t : s;
}
const oe = z ? window : void 0;
z && window.document;
z && window.navigator;
z && window.location;
function A(...o) {
  let t, s, e, a;
  if (xe(o[0]) || Array.isArray(o[0]) ? ([s, e, a] = o, t = oe) : [t, s, e, a] = o, !t)
    return Q;
  Array.isArray(s) || (s = [s]), Array.isArray(e) || (e = [e]);
  const n = [], r = () => {
    n.forEach((c) => c()), n.length = 0;
  }, i = (c, v, y) => (c.addEventListener(v, y, a), () => c.removeEventListener(v, y, a)), u = j(() => H(t), (c) => {
    r(), c && n.push(...s.flatMap((v) => e.map((y) => i(c, v, y))));
  }, { immediate: !0, flush: "post" }), p = () => {
    u(), r();
  };
  return de(p), p;
}
function Ee(o, t, s = {}) {
  const { window: e = oe, ignore: a = [], capture: n = !0, detectIframe: r = !1 } = s;
  if (!e)
    return;
  let i = !0, u;
  const p = (l) => a.some((_) => {
    if (typeof _ == "string")
      return Array.from(e.document.querySelectorAll(_)).some((f) => f === l.target || l.composedPath().includes(f));
    {
      const f = H(_);
      return f && (l.target === f || l.composedPath().includes(f));
    }
  }), c = (l) => {
    e.clearTimeout(u);
    const _ = H(o);
    if (!(!_ || _ === l.target || l.composedPath().includes(_))) {
      if (l.detail === 0 && (i = !p(l)), !i) {
        i = !0;
        return;
      }
      t(l);
    }
  }, v = [
    A(e, "click", c, { passive: !0, capture: n }),
    A(e, "pointerdown", (l) => {
      const _ = H(o);
      _ && (i = !l.composedPath().includes(_) && !p(l));
    }, { passive: !0 }),
    A(e, "pointerup", (l) => {
      if (l.button === 0) {
        const _ = l.composedPath();
        l.composedPath = () => _, u = e.setTimeout(() => c(l), 50);
      }
    }, { passive: !0 }),
    r && A(e, "blur", (l) => {
      var _;
      const f = H(o);
      ((_ = e.document.activeElement) == null ? void 0 : _.tagName) === "IFRAME" && !(f != null && f.contains(e.document.activeElement)) && t(l);
    })
  ].filter(Boolean);
  return () => v.forEach((l) => l());
}
function Pe(o, t = !1) {
  const s = T(), e = () => s.value = Boolean(o());
  return e(), pe(e, t), s;
}
const Y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, J = "__vueuse_ssr_handlers__";
Y[J] = Y[J] || {};
Y[J];
var le = Object.getOwnPropertySymbols, Ie = Object.prototype.hasOwnProperty, De = Object.prototype.propertyIsEnumerable, He = (o, t) => {
  var s = {};
  for (var e in o)
    Ie.call(o, e) && t.indexOf(e) < 0 && (s[e] = o[e]);
  if (o != null && le)
    for (var e of le(o))
      t.indexOf(e) < 0 && De.call(o, e) && (s[e] = o[e]);
  return s;
};
function _e(o, t, s = {}) {
  const e = s, { window: a = oe } = e, n = He(e, ["window"]);
  let r;
  const i = Pe(() => a && "ResizeObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, p = j(() => H(o), (v) => {
    u(), i.value && a && v && (r = new ResizeObserver(t), r.observe(v, n));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), p();
  };
  return de(c), {
    isSupported: i,
    stop: c
  };
}
function Ae(o, t = {}) {
  const {
    reset: s = !0,
    windowResize: e = !0,
    windowScroll: a = !0,
    immediate: n = !0
  } = t, r = T(0), i = T(0), u = T(0), p = T(0), c = T(0), v = T(0), y = T(0), l = T(0);
  function _() {
    const f = H(o);
    if (!f) {
      s && (r.value = 0, i.value = 0, u.value = 0, p.value = 0, c.value = 0, v.value = 0, y.value = 0, l.value = 0);
      return;
    }
    const O = f.getBoundingClientRect();
    r.value = O.height, i.value = O.bottom, u.value = O.left, p.value = O.right, c.value = O.top, v.value = O.width, y.value = O.x, l.value = O.y;
  }
  return _e(o, _), j(() => H(o), (f) => !f && _()), a && A("scroll", _, { capture: !0, passive: !0 }), e && A("resize", _, { passive: !0 }), pe(() => {
    n && _();
  }), {
    height: r,
    bottom: i,
    left: u,
    right: p,
    top: c,
    width: v,
    x: y,
    y: l,
    update: _
  };
}
const ne = 1;
function fe(o, t = {}) {
  const {
    throttle: s = 0,
    idle: e = 200,
    onStop: a = Q,
    onScroll: n = Q,
    offset: r = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: i = {
      capture: !1,
      passive: !0
    },
    behavior: u = "auto"
  } = t, p = T(0), c = T(0), v = q({
    get() {
      return p.value;
    },
    set(m) {
      l(m, void 0);
    }
  }), y = q({
    get() {
      return c.value;
    },
    set(m) {
      l(void 0, m);
    }
  });
  function l(m, C) {
    var x, $, V;
    const U = D(o);
    U && ((V = U instanceof Document ? document.body : U) == null || V.scrollTo({
      top: (x = D(C)) != null ? x : y.value,
      left: ($ = D(m)) != null ? $ : v.value,
      behavior: D(u)
    }));
  }
  const _ = T(!1), f = K({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), O = K({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), N = Fe((m) => {
    _.value = !1, O.left = !1, O.right = !1, O.top = !1, O.bottom = !1, a(m);
  }, s + e), R = (m) => {
    const C = m.target === document ? m.target.documentElement : m.target, x = C.scrollLeft;
    O.left = x < p.value, O.right = x > c.value, f.left = x <= 0 + (r.left || 0), f.right = x + C.clientWidth >= C.scrollWidth - (r.right || 0) - ne, p.value = x;
    let $ = C.scrollTop;
    m.target === document && !$ && ($ = document.body.scrollTop), O.top = $ < c.value, O.bottom = $ > c.value, f.top = $ <= 0 + (r.top || 0), f.bottom = $ + C.clientHeight >= C.scrollHeight - (r.bottom || 0) - ne, c.value = $, _.value = !0, N(m), n(m);
  };
  return A(o, "scroll", s ? Se(R, s, !0, !1) : R, i), {
    x: v,
    y,
    isScrolling: _,
    arrivedState: f,
    directions: O
  };
}
var ae;
(function(o) {
  o.UP = "UP", o.RIGHT = "RIGHT", o.DOWN = "DOWN", o.LEFT = "LEFT", o.NONE = "NONE";
})(ae || (ae = {}));
var Le = Object.defineProperty, re = Object.getOwnPropertySymbols, Qe = Object.prototype.hasOwnProperty, Re = Object.prototype.propertyIsEnumerable, ie = (o, t, s) => t in o ? Le(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[t] = s, Ne = (o, t) => {
  for (var s in t || (t = {}))
    Qe.call(t, s) && ie(o, s, t[s]);
  if (re)
    for (var s of re(t))
      Re.call(t, s) && ie(o, s, t[s]);
  return o;
};
const je = {
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
Ne({
  linear: Me
}, je);
const ze = { class: "queso-dropdown__selector__text" }, We = {
  key: 0,
  class: "queso-dropdown__selector__placeholder"
}, Ve = {
  key: 1,
  class: "queso-dropdown__selector__active-label"
}, Ue = { class: "queso-dropdown__selector__icon" }, Ke = ["aria-expanded"], Ge = {
  key: 0,
  class: "queso-dropdown__popover__header"
}, Xe = ["onClick"], Ye = {
  key: 1,
  class: "queso-dropdown__popover__footer"
}, Je = /* @__PURE__ */ F({
  __name: "DropdownBase",
  props: {
    defaultOptions: { default: () => [] },
    options: { default: () => [] },
    multiple: { type: Boolean },
    stayOpenOnSelection: { type: Boolean }
  },
  emits: ["update:options", "open:dropdown", "close:dropdown"],
  setup(o, { expose: t, emit: s }) {
    const e = o, a = T(), n = T(), r = T(!1), i = T([]), u = q(() => i.value.length > 0 ? i.value : e.defaultOptions);
    ee(() => {
      e.multiple && (i.value = e.defaultOptions);
    });
    const p = q(() => ({
      "is-dropdown-open": r.value,
      "is-dropdown-close": !r.value,
      "has-value": u.value.length >= 1,
      "has-no-value": u.value.length < 1,
      "is-multiple": e.multiple
    })), c = (m) => {
      if (e.multiple) {
        let C = 0;
        i.value = i.value.filter((x) => {
          const $ = x.key !== m.key;
          return $ || C++, $;
        }), C < 1 && i.value.push(m);
      } else
        i.value = [m];
      s("update:options", u.value), e.multiple || e.stayOpenOnSelection || l();
    }, v = () => {
      setTimeout(() => {
        f.value = 0;
      }, 210);
    }, y = () => {
      r.value = !0, s("open:dropdown");
    }, l = () => {
      r.value = !1, s("close:dropdown"), v();
    }, _ = (m = !1) => {
      m ? y() : l();
    };
    Ee(a, () => l());
    const { y: f, arrivedState: O } = fe(n, {
      offset: { top: 15, bottom: 15 }
    }), N = q(() => {
      var m, C;
      return n.value ? ((m = n.value) == null ? void 0 : m.scrollHeight) > ((C = n.value) == null ? void 0 : C.clientHeight) : !1;
    }), R = q(() => ({
      "is-scrolled-top": O.top,
      "is-scrolled-bottom": O.bottom || !N.value
    }));
    return t({ isDropdownOpen: r, openDropdown: y, closeDropdown: l }), (m, C) => o.options.length > 0 ? (h(), g("div", {
      key: 0,
      class: S(["queso-dropdown", b(p)]),
      ref_key: "dropdown",
      ref: a
    }, [
      w("div", {
        class: "queso-dropdown__selector",
        onClick: C[0] || (C[0] = (x) => _(!r.value))
      }, [
        d(m.$slots, "prefix"),
        w("div", ze, [
          b(u).length < 1 ? (h(), g("div", We, [
            d(m.$slots, "placeholder")
          ])) : (h(), g("div", Ve, [
            d(m.$slots, "selector", B(M({ activeOptions: b(u) })), () => [
              L(I(b(u)), 1)
            ])
          ]))
        ]),
        d(m.$slots, "suffix"),
        w("div", Ue, [
          d(m.$slots, "icon", {}, () => [
            L("↓")
          ])
        ])
      ]),
      w("div", {
        class: "queso-dropdown__popover",
        "aria-expanded": r.value
      }, [
        m.$slots.popoverHeader ? (h(), g("div", Ge, [
          d(m.$slots, "popoverHeader")
        ])) : P("", !0),
        w("div", {
          class: S(["queso-dropdown__popover__scroll", b(R)])
        }, [
          w("ul", {
            ref_key: "dropdownPopover",
            ref: n,
            class: "queso-dropdown__popover__options-list"
          }, [
            d(m.$slots, "beforeItems"),
            (h(!0), g(G, null, X(o.options, (x) => (h(), g("li", {
              key: x.key,
              onClick: ($) => c(x),
              class: S(["queso-dropdown__popover__options-list__item", { "is-active": b(u).find(($) => $.key === x.key) }])
            }, [
              d(m.$slots, "item", B(M({ ...x, openDropdown: y, closeDropdown: l })), () => [
                L(I(x), 1)
              ])
            ], 10, Xe))), 128)),
            d(m.$slots, "afterItems")
          ], 512)
        ], 2),
        m.$slots.popoverFooter ? (h(), g("div", Ye, [
          d(m.$slots, "popoverFooter")
        ])) : P("", !0)
      ], 8, Ke)
    ], 2)) : P("", !0);
  }
});
const Ze = ["for"], eo = {
  key: 0,
  class: "queso-field__input"
}, oo = {
  key: 1,
  class: "queso-field__error"
}, W = /* @__PURE__ */ F({
  __name: "FieldBase",
  props: {
    id: null,
    name: null,
    modelValue: null,
    label: null,
    isRequired: { type: Boolean },
    isDisabled: { type: Boolean },
    isReadOnly: { type: Boolean },
    isError: { type: Boolean },
    isAutocomplete: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(o, { expose: t, emit: s }) {
    const e = o, a = T(!1), n = T(!1), r = q(() => !!f.value), { isRequired: i, isDisabled: u, isError: p, isReadOnly: c, isAutocomplete: v } = $e(e), y = ($ = !1) => {
      a.value = $;
    }, l = ($ = !1) => {
      n.value = $;
    }, _ = ($) => {
      f.value = $.target ? $.target.value : $, s("update:modelValue", f.value);
    }, f = T(e.modelValue ?? null), O = q(() => e.id || e.name), N = te(e, "name"), R = te(e, "label"), m = q(() => v.value ? "on" : null), C = q(() => ({
      "is-disabled": u.value,
      "is-error": p.value,
      "has-value": r.value,
      "is-active": a.value,
      "is-hover": n.value,
      "is-read-only": c.value
    })), x = K({
      // Base
      fieldID: O,
      fieldName: N,
      fieldValue: f,
      fieldLabel: R,
      fieldAutocomplete: m,
      // States
      isRequired: i,
      isActive: a,
      isHover: n,
      isFilled: r,
      isDisabled: u,
      isError: p,
      isReadOnly: c,
      // Methods
      updateValue: _,
      toggleIsActive: y,
      toggleIsHover: l
    });
    return t({ ...x }), ($, V) => (h(), g("div", {
      class: S(["queso-field", b(C)])
    }, [
      d($.$slots, "label", B(M({ ...x })), () => [
        o.label ? (h(), g("label", {
          key: 0,
          for: b(O),
          class: "queso-field__label"
        }, I(o.label), 9, Ze)) : P("", !0)
      ]),
      $.$slots.field ? (h(), g("div", eo, [
        d($.$slots, "beforeField"),
        d($.$slots, "field", B(M({ ...x }))),
        d($.$slots, "afterField")
      ])) : P("", !0),
      b(p) ? (h(), g("div", oo, [
        d($.$slots, "error", B(M({ ...x })))
      ])) : P("", !0)
    ], 2));
  }
});
const ve = Symbol("ModalMethodsKey"), to = /* @__PURE__ */ F({
  __name: "ModalBaseOverlay",
  setup(o) {
    const { close: t } = we(ve);
    return (s, e) => (h(), g("div", {
      class: "queso-modal__overlay",
      onClick: e[0] || (e[0] = //@ts-ignore
      (...a) => b(t) && b(t)(...a))
    }));
  }
});
const so = ["aria-expanded"], lo = { class: "queso-modal__inner" }, Do = /* @__PURE__ */ F({
  __name: "ModalBase",
  emits: ["modal:open", "modal:close"],
  setup(o, { expose: t, emit: s }) {
    const e = T(!1), a = () => {
      e.value = !0;
    }, n = () => {
      e.value = !1;
    }, r = (i = !0) => {
      document.documentElement.style.overflow = i ? "hidden" : null;
    };
    return j(e, (i) => {
      i ? (r(!0), s("modal:open")) : (r(!1), s("modal:close"));
    }), ee(() => {
      e.value && r(!0);
    }), ge(ve, { open: a, close: n }), t({ isModalOpen: e, open: a, close: n }), (i, u) => (h(), E(ke, { to: "body" }, [
      w("div", Oe({
        class: ["queso-modal", { "is-modal-open": e.value }],
        "aria-expanded": e.value
      }, i.$attrs), [
        d(i.$slots, "before-content"),
        w("div", lo, [
          d(i.$slots, "default")
        ]),
        d(i.$slots, "after-content"),
        d(i.$slots, "overlay", {}, () => [
          qe(to)
        ])
      ], 16, so)
    ]));
  }
});
const no = { class: "queso-collapsible__header__text" }, ao = { class: "queso-collapsible__header__icon" }, ro = ["aria-expanded"], Ho = /* @__PURE__ */ F({
  __name: "CollapsibleBase",
  props: {
    expandOnMount: { type: Boolean }
  },
  emits: ["open", "close", "toggle"],
  setup(o, { expose: t, emit: s }) {
    const e = o;
    ue((l) => ({
      b95b03f4: b(p)
    }));
    const a = T(), n = T(!1), r = T(e.expandOnMount);
    Te(() => {
      r.value && (n.value = !0);
    });
    const i = q(() => ({
      "is-collapsible-open": n.value,
      "is-collapsible-close": !n.value
    })), { height: u } = Ae(a), p = q(() => r.value ? "none" : n.value ? `${u.value}px` : "0px"), c = () => {
      n.value = !0;
    }, v = () => {
      r.value = !1, setTimeout(() => {
        n.value = !1;
      }, 1);
    }, y = (l = !1) => {
      l ? c() : v();
    };
    return j(n, (l) => {
      s(l ? "open" : "close"), s("toggle", l);
    }), t({ isCollapsibleOpen: n, open: c, close: v, toggle: y }), (l, _) => (h(), g("div", {
      class: S(["queso-collapsible", b(i)])
    }, [
      d(l.$slots, "beforeHeader"),
      w("div", {
        class: "queso-collapsible__header",
        onClick: _[0] || (_[0] = (f) => y(!n.value))
      }, [
        d(l.$slots, "headerPrefix"),
        w("div", no, [
          d(l.$slots, "headerText")
        ]),
        d(l.$slots, "headerSuffix"),
        w("div", ao, [
          d(l.$slots, "headerIcon", {}, () => [
            L("↓")
          ])
        ])
      ]),
      d(l.$slots, "afterHeader"),
      d(l.$slots, "beforeContent"),
      w("div", {
        class: "queso-collapsible__content",
        "aria-expanded": n.value
      }, [
        w("div", {
          ref_key: "collapsibleContent",
          ref: a,
          class: "queso-collapsible__content__inner"
        }, [
          d(l.$slots, "content")
        ], 512)
      ], 8, ro),
      d(l.$slots, "afterContent")
    ], 2));
  }
});
const Ao = /* @__PURE__ */ F({
  __name: "ScrollableBase",
  props: {
    shadows: { type: Boolean },
    offset: { default: 0 }
  },
  setup(o) {
    const t = o, s = T(), { arrivedState: e } = fe(s, {
      offset: { top: t.offset, bottom: t.offset }
    }), a = T(0), n = T(0);
    _e(s, (u) => {
      const p = u[0];
      a.value = p.target.scrollHeight, n.value = p.target.clientHeight;
    });
    const r = q(() => a.value > n.value), i = q(() => ({
      "has-shadows": t.shadows,
      "is-scrolled-top": e.top,
      "is-scrolled-bottom": e.bottom || !r.value
    }));
    return (u, p) => (h(), g("div", {
      class: S(["queso-scrollable", b(i)])
    }, [
      w("div", {
        ref_key: "content",
        ref: s,
        class: "queso-scrollable__content"
      }, [
        d(u.$slots, "default")
      ], 512)
    ], 2));
  }
});
const io = ["innerHTML"], uo = ["href"], Lo = /* @__PURE__ */ F({
  __name: "IconBase",
  props: {
    svg: null,
    name: null,
    prefix: null,
    size: { default: 1 },
    rotation: { default: 0 }
  },
  setup(o) {
    const t = o;
    ue((r) => ({
      "8e742796": b(a),
      de79f2a2: b(n)
    }));
    const s = q(() => `#${t.prefix ? `${t.prefix}-` : ""}${t.name}`), e = q(() => ["queso-icon", t.name && `-${t.name}`]), a = q(() => `${t.size}rem`), n = q(() => `${t.rotation}deg`);
    return (r, i) => o.svg ? (h(), g("span", {
      key: 0,
      class: S(b(e)),
      "aria-hidden": "true",
      innerHTML: o.svg
    }, null, 10, io)) : (h(), g("span", {
      key: 1,
      class: S(b(e)),
      "aria-hidden": "true"
    }, [
      d(r.$slots, "default", B(M({ ...t, width: b(a), rotation: b(n), iconID: b(s) })), () => [
        (h(), g("svg", null, [
          w("use", { href: b(s) }, null, 8, uo)
        ]))
      ])
    ], 2));
  }
});
const co = { class: "queso-text-field" }, po = ["innerHTML"], _o = ["type", "value", "name", "id", "required", "autocomplete", "disabled", "onInput", "onMouseover", "onMouseleave", "onFocus", "onBlur"], Qo = /* @__PURE__ */ F({
  __name: "TextField",
  props: {
    type: { default: "text" }
  },
  setup(o) {
    return (t, s) => (h(), E(b(W), null, {
      label: k((e) => [
        d(t.$slots, "label", B(M({ ...e })))
      ]),
      beforeField: k(() => [
        d(t.$slots, "beforeField")
      ]),
      field: k(({
        fieldID: e,
        fieldName: a,
        fieldValue: n,
        fieldAutocomplete: r,
        updateValue: i,
        toggleIsActive: u,
        toggleIsHover: p,
        isRequired: c,
        isDisabled: v,
        isReadOnly: y
      }) => [
        w("div", co, [
          y ? (h(), g("span", {
            key: 0,
            class: "queso-text-field__readonly",
            innerHTML: n
          }, null, 8, po)) : (h(), g("input", {
            key: 1,
            type: o.type,
            value: n,
            name: a,
            id: e,
            class: "queso-text-field__input",
            required: c,
            autocomplete: r,
            disabled: v,
            onInput: i,
            onMouseover: (l) => p(!0),
            onMouseleave: (l) => p(!1),
            onFocus: (l) => u(!0),
            onBlur: (l) => u(!1)
          }, null, 40, _o)),
          d(t.$slots, "after")
        ])
      ]),
      afterField: k(() => [
        d(t.$slots, "afterField")
      ]),
      error: k((e) => [
        d(t.$slots, "error", B(M({ ...e })))
      ]),
      _: 3
    }));
  }
});
const fo = { class: "queso-text-area" }, vo = ["innerHTML"], ho = ["name", "id", "value", "required", "autocomplete", "disabled", "onInput", "onMouseover", "onMouseleave", "onFocus", "onBlur"], Ro = /* @__PURE__ */ F({
  __name: "TextArea",
  setup(o) {
    return (t, s) => (h(), E(b(W), null, {
      label: k((e) => [
        d(t.$slots, "label", B(M({ ...e })))
      ]),
      beforeField: k(() => [
        d(t.$slots, "beforeField")
      ]),
      field: k(({
        fieldID: e,
        fieldName: a,
        fieldValue: n,
        fieldAutocomplete: r,
        updateValue: i,
        toggleIsActive: u,
        toggleIsHover: p,
        isRequired: c,
        isDisabled: v,
        isReadOnly: y
      }) => [
        w("div", fo, [
          y ? (h(), g("span", {
            key: 0,
            class: "queso-text-area__readonly",
            innerHTML: n
          }, null, 8, vo)) : (h(), g("textarea", {
            key: 1,
            name: a,
            id: e,
            value: n,
            class: "queso-text-area__input",
            required: c,
            autocomplete: r,
            disabled: v,
            onInput: i,
            onMouseover: (l) => p(!0),
            onMouseleave: (l) => p(!1),
            onFocus: (l) => u(!0),
            onBlur: (l) => u(!1)
          }, null, 40, ho))
        ])
      ]),
      afterField: k(() => [
        d(t.$slots, "afterField")
      ]),
      error: k((e) => [
        d(t.$slots, "error", B(M({ ...e })))
      ]),
      _: 3
    }));
  }
});
const mo = /* @__PURE__ */ w("span", { class: "queso-checkbox__hidden-label" }, null, -1), bo = { class: "queso-checkbox__box" }, yo = { class: "queso-checkbox__box__symbol" }, $o = { class: "queso-checkbox__label" }, wo = ["innerHTML"], go = ["checked", "name", "id", "required", "autocomplete", "disabled", "onChange", "onFocus", "onBlur"], No = /* @__PURE__ */ F({
  __name: "AppCheckbox",
  setup(o) {
    const t = (s, e) => {
      e(s.target.checked);
    };
    return (s, e) => (h(), E(b(W), null, {
      label: k(() => [
        mo
      ]),
      beforeField: k(() => [
        d(s.$slots, "beforeField")
      ]),
      field: k(({
        fieldID: a,
        fieldName: n,
        fieldValue: r,
        fieldLabel: i,
        fieldAutocomplete: u,
        updateValue: p,
        toggleIsActive: c,
        toggleIsHover: v,
        isRequired: y,
        isDisabled: l,
        isReadOnly: _
      }) => [
        (h(), E(Z(_ ? "div" : "label"), {
          class: S(["queso-checkbox", { "is-checked": r }]),
          for: a,
          onMouseover: (f) => v(!0),
          onMouseleave: (f) => v(!1)
        }, {
          default: k(() => [
            w("span", bo, [
              w("span", yo, [
                d(s.$slots, "symbol", {}, () => [
                  L("✔︎")
                ])
              ])
            ]),
            w("span", $o, [
              w("span", {
                class: "queso-checkbox__label__text",
                innerHTML: i
              }, null, 8, wo)
            ])
          ]),
          _: 2
        }, 1064, ["for", "class", "onMouseover", "onMouseleave"])),
        _ ? P("", !0) : (h(), g("input", {
          key: 0,
          type: "checkbox",
          class: "queso-checkbox__native",
          checked: r,
          name: n,
          id: a,
          required: y,
          autocomplete: u,
          disabled: l,
          onChange: (f) => t(f, p),
          onFocus: (f) => c(!0),
          onBlur: (f) => c(!1)
        }, null, 40, go))
      ]),
      afterField: k(() => [
        d(s.$slots, "afterField")
      ]),
      error: k((a) => [
        d(s.$slots, "error", B(M({ ...a })))
      ]),
      _: 3
    }));
  }
});
const ko = {
  key: 0,
  class: "queso-select__read-only"
}, Oo = { class: "queso-select__read-only__label" }, qo = { class: "text" }, To = ["name", "id", "onFocus", "onBlur", "required", "autocomplete", "multiple"], xo = /* @__PURE__ */ w("option", null, null, -1), Co = ["value", "selected"], jo = /* @__PURE__ */ F({
  __name: "AppSelect",
  props: {
    options: { default: () => [] },
    multiple: { type: Boolean },
    placeholder: null
  },
  setup(o) {
    const t = (s, e) => {
      if (Array.isArray(s))
        return s.find((a) => a.key === e.key);
    };
    return (s, e) => (h(), E(b(W), null, {
      field: k(({
        fieldID: a,
        fieldName: n,
        fieldValue: r,
        fieldAutocomplete: i,
        updateValue: u,
        toggleIsActive: p,
        toggleIsHover: c,
        isRequired: v,
        isReadOnly: y
      }) => [
        y ? (h(), g("div", ko, [
          w("span", Oo, I(r[0].data.label || o.placeholder), 1)
        ])) : (h(), E(b(Je), {
          key: 1,
          class: "queso-select",
          options: o.options,
          "default-options": r || [],
          multiple: o.multiple,
          "onUpdate:options": (l) => u(l),
          onMouseover: (l) => c(!0),
          onMouseleave: (l) => c(!1)
        }, {
          placeholder: k(() => [
            d(s.$slots, "placeholder", B(M({ placeholder: o.placeholder })), () => [
              L(I(o.placeholder), 1)
            ])
          ]),
          selector: k(({ activeOptions: l }) => [
            d(s.$slots, "selector", B(M({ activeOptions: l })), () => [
              (h(!0), g(G, null, X(l, (_) => (h(), g("span", {
                key: _.key
              }, I(_.data.label), 1))), 128))
            ])
          ]),
          icon: k(() => [
            d(s.$slots, "icon", {}, () => [
              L("↓")
            ])
          ]),
          item: k(({ key: l, data: _ }) => [
            d(s.$slots, "item", B(M({ key: l, data: _ })), () => [
              w("span", qo, I(_.label), 1)
            ])
          ]),
          _: 2
        }, 1032, ["options", "default-options", "multiple", "onUpdate:options", "onMouseover", "onMouseleave"])),
        w("select", {
          name: n,
          id: a,
          class: "queso-select__select-native",
          onFocus: (l) => p(!0),
          onBlur: (l) => p(!1),
          required: v,
          autocomplete: i,
          multiple: o.multiple
        }, [
          xo,
          (h(!0), g(G, null, X(o.options, (l) => (h(), g("option", {
            value: l.key,
            key: l.key,
            selected: t(r, l)
          }, I(l.data.label), 9, Co))), 128))
        ], 40, To)
      ]),
      _: 3
    }));
  }
});
const Bo = /* @__PURE__ */ w("span", { class: "queso-switch__hidden-label" }, null, -1), Mo = /* @__PURE__ */ w("span", { class: "queso-switch__box" }, [
  /* @__PURE__ */ w("span", { class: "queso-switch__box__circle" })
], -1), Fo = {
  key: 0,
  class: "queso-switch__label"
}, So = ["innerHTML"], Eo = ["checked", "name", "id", "required", "autocomplete", "disabled", "onChange", "onFocus", "onBlur"], zo = /* @__PURE__ */ F({
  __name: "AppSwitch",
  setup(o) {
    const t = (s, e) => {
      e(s.target.checked);
    };
    return (s, e) => (h(), E(b(W), null, {
      label: k(() => [
        Bo
      ]),
      beforeField: k(() => [
        d(s.$slots, "beforeField")
      ]),
      field: k(({
        fieldID: a,
        fieldName: n,
        fieldValue: r,
        fieldLabel: i,
        fieldAutocomplete: u,
        updateValue: p,
        toggleIsActive: c,
        toggleIsHover: v,
        isRequired: y,
        isDisabled: l,
        isReadOnly: _
      }) => [
        (h(), E(Z(_ ? "div" : "label"), {
          class: S(["queso-switch", { "is-selected": r }]),
          for: a,
          onMouseover: (f) => v(!0),
          onMouseleave: (f) => v(!1)
        }, {
          default: k(() => [
            Mo,
            i ? (h(), g("span", Fo, [
              w("span", {
                class: "queso-switch__label__text",
                innerHTML: i
              }, null, 8, So)
            ])) : P("", !0)
          ]),
          _: 2
        }, 1064, ["for", "class", "onMouseover", "onMouseleave"])),
        _ ? P("", !0) : (h(), g("input", {
          key: 0,
          type: "checkbox",
          class: "queso-switch__native",
          checked: r,
          name: n,
          id: a,
          required: y,
          autocomplete: u,
          disabled: l,
          onChange: (f) => t(f, p),
          onFocus: (f) => c(!0),
          onBlur: (f) => c(!1)
        }, null, 40, Eo))
      ]),
      afterField: k(() => [
        d(s.$slots, "afterField")
      ]),
      error: k((a) => [
        d(s.$slots, "error", B(M({ ...a })))
      ]),
      _: 3
    }));
  }
});
export {
  No as QuesoCheckbox,
  Io as QuesoClickable,
  Ho as QuesoCollapsible,
  Je as QuesoDropdown,
  W as QuesoField,
  Lo as QuesoIcon,
  Do as QuesoModal,
  Ao as QuesoScrollable,
  jo as QuesoSelect,
  zo as QuesoSwitch,
  Ro as QuesoTextArea,
  Qo as QuesoTextField
};
