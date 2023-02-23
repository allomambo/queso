import { defineComponent as F, computed as q, openBlock as h, createBlock as E, resolveDynamicComponent as Z, normalizeClass as S, unref as b, withCtx as k, renderSlot as c, getCurrentInstance as fe, onMounted as ee, nextTick as ve, getCurrentScope as me, onScopeDispose as he, ref as T, watch as W, reactive as K, createElementBlock as g, createElementVNode as w, normalizeProps as B, guardReactiveProps as M, createTextVNode as H, toDisplayString as I, createCommentVNode as P, Fragment as G, renderList as X, toRefs as be, toRef as te, inject as ye, provide as $e, Teleport as we, mergeProps as ge, createVNode as ke, useCssVars as ue, onBeforeMount as Oe } from "vue";
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
    })), e = q(() => t.isDisabled ? !0 : null), n = q(() => t.tag === "a" ? t.url : null), a = q(() => t.tag === "router-link" ? t.url : null), r = q(() => t.isExternal ? "_blank" : "_self"), i = q(() => t.tag === "a" ? r.value : null), p = q(() => t.tag === "a" ? "noopener" : null), _ = q(() => t.tag === "a" && t.isDownload ? "" : null);
    return (u, v) => (h(), E(Z(o.tag), {
      class: S(["queso-clickable", b(s)]),
      rel: b(p),
      href: b(n),
      to: b(a),
      target: b(i),
      download: b(_),
      disabled: b(e),
      "aria-disabled": b(e),
      "aria-label": o.ariaLabel
    }, {
      default: k(() => [
        c(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "rel", "href", "to", "target", "download", "disabled", "aria-disabled", "aria-label"]));
  }
});
var se;
const j = typeof window < "u", qe = (o) => typeof o == "string", Q = () => {
};
j && ((se = window == null ? void 0 : window.navigator) != null && se.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function D(o) {
  return typeof o == "function" ? o() : b(o);
}
function ce(o, t) {
  function s(...e) {
    return new Promise((n, a) => {
      Promise.resolve(o(() => t.apply(this, e), { fn: t, thisArg: this, args: e })).then(n).catch(a);
    });
  }
  return s;
}
function Te(o, t = {}) {
  let s, e, n = Q;
  const a = (i) => {
    clearTimeout(i), n(), n = Q;
  };
  return (i) => {
    const p = D(o), _ = D(t.maxWait);
    return s && a(s), p <= 0 || _ !== void 0 && _ <= 0 ? (e && (a(e), e = null), Promise.resolve(i())) : new Promise((u, v) => {
      n = t.rejectOnCancel ? v : u, _ && !e && (e = setTimeout(() => {
        s && a(s), e = null, u(i());
      }, _)), s = setTimeout(() => {
        e && a(e), e = null, u(i());
      }, p);
    });
  };
}
function xe(o, t = !0, s = !0, e = !1) {
  let n = 0, a, r = !0, i = Q, p;
  const _ = () => {
    a && (clearTimeout(a), a = void 0, i(), i = Q);
  };
  return (v) => {
    const y = D(o), l = Date.now() - n, d = () => p = v();
    if (_(), y <= 0)
      return n = Date.now(), d();
    if (l > y && (s || !r))
      n = Date.now(), d();
    else if (t)
      return new Promise((f, O) => {
        i = e ? O : f, a = setTimeout(() => {
          n = Date.now(), r = !0, f(d()), _();
        }, y - l);
      });
    return !s && !a && (a = setTimeout(() => r = !0, y)), r = !1, p;
  };
}
function Ce(o) {
  return o;
}
function de(o) {
  return me() ? (he(o), !0) : !1;
}
function Be(o, t = 200, s = {}) {
  return ce(Te(t, s), o);
}
function Me(o, t = 200, s = !1, e = !0, n = !1) {
  return ce(xe(t, s, e, n), o);
}
function pe(o, t = !0) {
  fe() ? ee(o) : t ? o() : ve(o);
}
function A(o) {
  var t;
  const s = D(o);
  return (t = s == null ? void 0 : s.$el) != null ? t : s;
}
const oe = j ? window : void 0;
j && window.document;
j && window.navigator;
j && window.location;
function L(...o) {
  let t, s, e, n;
  if (qe(o[0]) || Array.isArray(o[0]) ? ([s, e, n] = o, t = oe) : [t, s, e, n] = o, !t)
    return Q;
  Array.isArray(s) || (s = [s]), Array.isArray(e) || (e = [e]);
  const a = [], r = () => {
    a.forEach((u) => u()), a.length = 0;
  }, i = (u, v, y) => (u.addEventListener(v, y, n), () => u.removeEventListener(v, y, n)), p = W(() => A(t), (u) => {
    r(), u && a.push(...s.flatMap((v) => e.map((y) => i(u, v, y))));
  }, { immediate: !0, flush: "post" }), _ = () => {
    p(), r();
  };
  return de(_), _;
}
function Fe(o, t, s = {}) {
  const { window: e = oe, ignore: n = [], capture: a = !0, detectIframe: r = !1 } = s;
  if (!e)
    return;
  let i = !0, p;
  const _ = (l) => n.some((d) => {
    if (typeof d == "string")
      return Array.from(e.document.querySelectorAll(d)).some((f) => f === l.target || l.composedPath().includes(f));
    {
      const f = A(d);
      return f && (l.target === f || l.composedPath().includes(f));
    }
  }), u = (l) => {
    e.clearTimeout(p);
    const d = A(o);
    if (!(!d || d === l.target || l.composedPath().includes(d))) {
      if (l.detail === 0 && (i = !_(l)), !i) {
        i = !0;
        return;
      }
      t(l);
    }
  }, v = [
    L(e, "click", u, { passive: !0, capture: a }),
    L(e, "pointerdown", (l) => {
      const d = A(o);
      d && (i = !l.composedPath().includes(d) && !_(l));
    }, { passive: !0 }),
    L(e, "pointerup", (l) => {
      if (l.button === 0) {
        const d = l.composedPath();
        l.composedPath = () => d, p = e.setTimeout(() => u(l), 50);
      }
    }, { passive: !0 }),
    r && L(e, "blur", (l) => {
      var d;
      const f = A(o);
      ((d = e.document.activeElement) == null ? void 0 : d.tagName) === "IFRAME" && !(f != null && f.contains(e.document.activeElement)) && t(l);
    })
  ].filter(Boolean);
  return () => v.forEach((l) => l());
}
function Se(o, t = !1) {
  const s = T(), e = () => s.value = Boolean(o());
  return e(), pe(e, t), s;
}
const Y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, J = "__vueuse_ssr_handlers__";
Y[J] = Y[J] || {};
Y[J];
var le = Object.getOwnPropertySymbols, Ee = Object.prototype.hasOwnProperty, Pe = Object.prototype.propertyIsEnumerable, Ie = (o, t) => {
  var s = {};
  for (var e in o)
    Ee.call(o, e) && t.indexOf(e) < 0 && (s[e] = o[e]);
  if (o != null && le)
    for (var e of le(o))
      t.indexOf(e) < 0 && Pe.call(o, e) && (s[e] = o[e]);
  return s;
};
function De(o, t, s = {}) {
  const e = s, { window: n = oe } = e, a = Ie(e, ["window"]);
  let r;
  const i = Se(() => n && "ResizeObserver" in n), p = () => {
    r && (r.disconnect(), r = void 0);
  }, _ = W(() => A(o), (v) => {
    p(), i.value && n && v && (r = new ResizeObserver(t), r.observe(v, a));
  }, { immediate: !0, flush: "post" }), u = () => {
    p(), _();
  };
  return de(u), {
    isSupported: i,
    stop: u
  };
}
function Ae(o, t = {}) {
  const {
    reset: s = !0,
    windowResize: e = !0,
    windowScroll: n = !0,
    immediate: a = !0
  } = t, r = T(0), i = T(0), p = T(0), _ = T(0), u = T(0), v = T(0), y = T(0), l = T(0);
  function d() {
    const f = A(o);
    if (!f) {
      s && (r.value = 0, i.value = 0, p.value = 0, _.value = 0, u.value = 0, v.value = 0, y.value = 0, l.value = 0);
      return;
    }
    const O = f.getBoundingClientRect();
    r.value = O.height, i.value = O.bottom, p.value = O.left, _.value = O.right, u.value = O.top, v.value = O.width, y.value = O.x, l.value = O.y;
  }
  return De(o, d), W(() => A(o), (f) => !f && d()), n && L("scroll", d, { capture: !0, passive: !0 }), e && L("resize", d, { passive: !0 }), pe(() => {
    a && d();
  }), {
    height: r,
    bottom: i,
    left: p,
    right: _,
    top: u,
    width: v,
    x: y,
    y: l,
    update: d
  };
}
const ne = 1;
function Le(o, t = {}) {
  const {
    throttle: s = 0,
    idle: e = 200,
    onStop: n = Q,
    onScroll: a = Q,
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
    behavior: p = "auto"
  } = t, _ = T(0), u = T(0), v = q({
    get() {
      return _.value;
    },
    set(m) {
      l(m, void 0);
    }
  }), y = q({
    get() {
      return u.value;
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
      behavior: D(p)
    }));
  }
  const d = T(!1), f = K({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), O = K({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), N = Be((m) => {
    d.value = !1, O.left = !1, O.right = !1, O.top = !1, O.bottom = !1, n(m);
  }, s + e), R = (m) => {
    const C = m.target === document ? m.target.documentElement : m.target, x = C.scrollLeft;
    O.left = x < _.value, O.right = x > u.value, f.left = x <= 0 + (r.left || 0), f.right = x + C.clientWidth >= C.scrollWidth - (r.right || 0) - ne, _.value = x;
    let $ = C.scrollTop;
    m.target === document && !$ && ($ = document.body.scrollTop), O.top = $ < u.value, O.bottom = $ > u.value, f.top = $ <= 0 + (r.top || 0), f.bottom = $ + C.clientHeight >= C.scrollHeight - (r.bottom || 0) - ne, u.value = $, d.value = !0, N(m), a(m);
  };
  return L(o, "scroll", s ? Me(R, s, !0, !1) : R, i), {
    x: v,
    y,
    isScrolling: d,
    arrivedState: f,
    directions: O
  };
}
var ae;
(function(o) {
  o.UP = "UP", o.RIGHT = "RIGHT", o.DOWN = "DOWN", o.LEFT = "LEFT", o.NONE = "NONE";
})(ae || (ae = {}));
var He = Object.defineProperty, re = Object.getOwnPropertySymbols, Qe = Object.prototype.hasOwnProperty, Re = Object.prototype.propertyIsEnumerable, ie = (o, t, s) => t in o ? He(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[t] = s, Ne = (o, t) => {
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
  linear: Ce
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
    const e = o, n = T(), a = T(), r = T(!1), i = T([]), p = q(() => i.value.length > 0 ? i.value : e.defaultOptions);
    ee(() => {
      e.multiple && (i.value = e.defaultOptions);
    });
    const _ = q(() => ({
      "is-dropdown-open": r.value,
      "is-dropdown-close": !r.value,
      "has-value": p.value.length >= 1,
      "has-no-value": p.value.length < 1,
      "is-multiple": e.multiple
    })), u = (m) => {
      if (e.multiple) {
        let C = 0;
        i.value = i.value.filter((x) => {
          const $ = x.key !== m.key;
          return $ || C++, $;
        }), C < 1 && i.value.push(m);
      } else
        i.value = [m];
      s("update:options", p.value), e.multiple || e.stayOpenOnSelection || l();
    }, v = () => {
      setTimeout(() => {
        f.value = 0;
      }, 210);
    }, y = () => {
      r.value = !0, s("open:dropdown");
    }, l = () => {
      r.value = !1, s("close:dropdown"), v();
    }, d = (m = !1) => {
      m ? y() : l();
    };
    Fe(n, () => l());
    const { y: f, arrivedState: O } = Le(a, {
      offset: { top: 15, bottom: 15 }
    }), N = q(() => {
      var m, C;
      return a.value ? ((m = a.value) == null ? void 0 : m.scrollHeight) > ((C = a.value) == null ? void 0 : C.clientHeight) : !1;
    }), R = q(() => ({
      "is-scrolled-top": O.top,
      "is-scrolled-bottom": O.bottom || !N.value
    }));
    return t({ isDropdownOpen: r, openDropdown: y, closeDropdown: l }), (m, C) => o.options.length > 0 ? (h(), g("div", {
      key: 0,
      class: S(["queso-dropdown", b(_)]),
      ref_key: "dropdown",
      ref: n
    }, [
      w("div", {
        class: "queso-dropdown__selector",
        onClick: C[0] || (C[0] = (x) => d(!r.value))
      }, [
        c(m.$slots, "prefix"),
        w("div", ze, [
          b(p).length < 1 ? (h(), g("div", We, [
            c(m.$slots, "placeholder")
          ])) : (h(), g("div", Ve, [
            c(m.$slots, "selector", B(M({ activeOptions: b(p) })), () => [
              H(I(b(p)), 1)
            ])
          ]))
        ]),
        c(m.$slots, "suffix"),
        w("div", Ue, [
          c(m.$slots, "icon", {}, () => [
            H("↓")
          ])
        ])
      ]),
      w("div", {
        class: "queso-dropdown__popover",
        "aria-expanded": r.value
      }, [
        m.$slots.popoverHeader ? (h(), g("div", Ge, [
          c(m.$slots, "popoverHeader")
        ])) : P("", !0),
        w("div", {
          class: S(["queso-dropdown__popover__scroll", b(R)])
        }, [
          w("ul", {
            ref_key: "dropdownPopover",
            ref: a,
            class: "queso-dropdown__popover__options-list"
          }, [
            c(m.$slots, "beforeItems"),
            (h(!0), g(G, null, X(o.options, (x) => (h(), g("li", {
              key: x.key,
              onClick: ($) => u(x),
              class: S(["queso-dropdown__popover__options-list__item", { "is-active": b(p).find(($) => $.key === x.key) }])
            }, [
              c(m.$slots, "item", B(M({ ...x, openDropdown: y, closeDropdown: l })), () => [
                H(I(x), 1)
              ])
            ], 10, Xe))), 128)),
            c(m.$slots, "afterItems")
          ], 512)
        ], 2),
        m.$slots.popoverFooter ? (h(), g("div", Ye, [
          c(m.$slots, "popoverFooter")
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
}, z = /* @__PURE__ */ F({
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
    const e = o, n = T(!1), a = T(!1), r = q(() => !!f.value), { isRequired: i, isDisabled: p, isError: _, isReadOnly: u, isAutocomplete: v } = be(e), y = ($ = !1) => {
      n.value = $;
    }, l = ($ = !1) => {
      a.value = $;
    }, d = ($) => {
      f.value = $.target ? $.target.value : $, s("update:modelValue", f.value);
    }, f = T(e.modelValue ?? null), O = q(() => e.id || e.name), N = te(e, "name"), R = te(e, "label"), m = q(() => v.value ? "on" : null), C = q(() => ({
      "is-disabled": p.value,
      "is-error": _.value,
      "has-value": r.value,
      "is-active": n.value,
      "is-hover": a.value,
      "is-read-only": u.value
    })), x = K({
      // Base
      fieldID: O,
      fieldName: N,
      fieldValue: f,
      fieldLabel: R,
      fieldAutocomplete: m,
      // States
      isRequired: i,
      isActive: n,
      isHover: a,
      isFilled: r,
      isDisabled: p,
      isError: _,
      isReadOnly: u,
      // Methods
      updateValue: d,
      toggleIsActive: y,
      toggleIsHover: l
    });
    return t({ ...x }), ($, V) => (h(), g("div", {
      class: S(["queso-field", b(C)])
    }, [
      c($.$slots, "label", B(M({ ...x })), () => [
        o.label ? (h(), g("label", {
          key: 0,
          for: b(O),
          class: "queso-field__label"
        }, I(o.label), 9, Ze)) : P("", !0)
      ]),
      $.$slots.field ? (h(), g("div", eo, [
        c($.$slots, "beforeField"),
        c($.$slots, "field", B(M({ ...x }))),
        c($.$slots, "afterField")
      ])) : P("", !0),
      b(_) ? (h(), g("div", oo, [
        c($.$slots, "error", B(M({ ...x })))
      ])) : P("", !0)
    ], 2));
  }
});
const _e = Symbol("ModalMethodsKey"), to = /* @__PURE__ */ F({
  __name: "ModalBaseOverlay",
  setup(o) {
    const { close: t } = ye(_e);
    return (s, e) => (h(), g("div", {
      class: "queso-modal__overlay",
      onClick: e[0] || (e[0] = //@ts-ignore
      (...n) => b(t) && b(t)(...n))
    }));
  }
});
const so = ["aria-expanded"], lo = { class: "queso-modal__inner" }, Do = /* @__PURE__ */ F({
  __name: "ModalBase",
  emits: ["modal:open", "modal:close"],
  setup(o, { expose: t, emit: s }) {
    const e = T(!1), n = () => {
      e.value = !0;
    }, a = () => {
      e.value = !1;
    }, r = (i = !0) => {
      document.documentElement.style.overflow = i ? "hidden" : null;
    };
    return W(e, (i) => {
      i ? (r(!0), s("modal:open")) : (r(!1), s("modal:close"));
    }), ee(() => {
      e.value && r(!0);
    }), $e(_e, { open: n, close: a }), t({ isModalOpen: e, open: n, close: a }), (i, p) => (h(), E(we, { to: "body" }, [
      w("div", ge({
        class: ["queso-modal", { "is-modal-open": e.value }],
        "aria-expanded": e.value
      }, i.$attrs), [
        c(i.$slots, "before-content"),
        w("div", lo, [
          c(i.$slots, "default")
        ]),
        c(i.$slots, "after-content"),
        c(i.$slots, "overlay", {}, () => [
          ke(to)
        ])
      ], 16, so)
    ]));
  }
});
const no = { class: "queso-collapsible__header__text" }, ao = { class: "queso-collapsible__header__icon" }, ro = ["aria-expanded"], Ao = /* @__PURE__ */ F({
  __name: "CollapsibleBase",
  props: {
    expandOnMount: { type: Boolean }
  },
  emits: ["open:collapsible", "close:collapsible"],
  setup(o, { expose: t, emit: s }) {
    const e = o;
    ue((l) => ({
      89062630: b(y)
    }));
    const n = T(), a = T(!1), r = T(e.expandOnMount);
    Oe(() => {
      r.value && (a.value = !0);
    });
    const i = q(() => ({
      "is-collapsible-open": a.value,
      "is-collapsible-close": !a.value
    })), p = () => {
      a.value = !0, s("open:collapsible");
    }, _ = () => {
      r.value = !1, setTimeout(() => {
        a.value = !1, s("close:collapsible");
      }, 1);
    }, u = (l = !1) => {
      l ? p() : _();
    }, { height: v } = Ae(n), y = q(() => r.value ? "none" : a.value ? `${v.value}px` : "0px");
    return t({ isCollapsibleOpen: a, open: p, close: _, toggle: u }), (l, d) => (h(), g("div", {
      class: S(["queso-collapsible", b(i)])
    }, [
      c(l.$slots, "beforeHeader"),
      w("div", {
        class: "queso-collapsible__header",
        onClick: d[0] || (d[0] = (f) => u(!a.value))
      }, [
        c(l.$slots, "headerPrefix"),
        w("div", no, [
          c(l.$slots, "headerText")
        ]),
        c(l.$slots, "headerSuffix"),
        w("div", ao, [
          c(l.$slots, "headerIcon", {}, () => [
            H("↓")
          ])
        ])
      ]),
      c(l.$slots, "afterHeader"),
      c(l.$slots, "beforeContent"),
      w("div", {
        class: "queso-collapsible__content",
        "aria-expanded": a.value
      }, [
        w("div", {
          ref_key: "collapsibleContent",
          ref: n,
          class: "queso-collapsible__content__inner"
        }, [
          c(l.$slots, "content")
        ], 512)
      ], 8, ro),
      c(l.$slots, "afterContent")
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
      "8e742796": b(n),
      de79f2a2: b(a)
    }));
    const s = q(() => `#${t.prefix ? `${t.prefix}-` : ""}${t.name}`), e = q(() => ["queso-icon", t.name && `-${t.name}`]), n = q(() => `${t.size}rem`), a = q(() => `${t.rotation}deg`);
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
      c(r.$slots, "default", B(M({ ...t, width: b(n), rotation: b(a), iconID: b(s) })), () => [
        (h(), g("svg", null, [
          w("use", { href: b(s) }, null, 8, uo)
        ]))
      ])
    ], 2));
  }
});
const co = { class: "queso-text-field" }, po = ["innerHTML"], _o = ["type", "value", "name", "id", "required", "autocomplete", "disabled", "onInput", "onMouseover", "onMouseleave", "onFocus", "onBlur"], Ho = /* @__PURE__ */ F({
  __name: "TextField",
  props: {
    type: { default: "text" }
  },
  setup(o) {
    return (t, s) => (h(), E(b(z), null, {
      label: k((e) => [
        c(t.$slots, "label", B(M({ ...e })))
      ]),
      beforeField: k(() => [
        c(t.$slots, "beforeField")
      ]),
      field: k(({
        fieldID: e,
        fieldName: n,
        fieldValue: a,
        fieldAutocomplete: r,
        updateValue: i,
        toggleIsActive: p,
        toggleIsHover: _,
        isRequired: u,
        isDisabled: v,
        isReadOnly: y
      }) => [
        w("div", co, [
          y ? (h(), g("span", {
            key: 0,
            class: "queso-text-field__readonly",
            innerHTML: a
          }, null, 8, po)) : (h(), g("input", {
            key: 1,
            type: o.type,
            value: a,
            name: n,
            id: e,
            class: "queso-text-field__input",
            required: u,
            autocomplete: r,
            disabled: v,
            onInput: i,
            onMouseover: (l) => _(!0),
            onMouseleave: (l) => _(!1),
            onFocus: (l) => p(!0),
            onBlur: (l) => p(!1)
          }, null, 40, _o)),
          c(t.$slots, "after")
        ])
      ]),
      afterField: k(() => [
        c(t.$slots, "afterField")
      ]),
      error: k((e) => [
        c(t.$slots, "error", B(M({ ...e })))
      ]),
      _: 3
    }));
  }
});
const fo = { class: "queso-text-area" }, vo = ["innerHTML"], mo = ["name", "id", "value", "required", "autocomplete", "disabled", "onInput", "onMouseover", "onMouseleave", "onFocus", "onBlur"], Qo = /* @__PURE__ */ F({
  __name: "TextArea",
  setup(o) {
    return (t, s) => (h(), E(b(z), null, {
      label: k((e) => [
        c(t.$slots, "label", B(M({ ...e })))
      ]),
      beforeField: k(() => [
        c(t.$slots, "beforeField")
      ]),
      field: k(({
        fieldID: e,
        fieldName: n,
        fieldValue: a,
        fieldAutocomplete: r,
        updateValue: i,
        toggleIsActive: p,
        toggleIsHover: _,
        isRequired: u,
        isDisabled: v,
        isReadOnly: y
      }) => [
        w("div", fo, [
          y ? (h(), g("span", {
            key: 0,
            class: "queso-text-area__readonly",
            innerHTML: a
          }, null, 8, vo)) : (h(), g("textarea", {
            key: 1,
            name: n,
            id: e,
            value: a,
            class: "queso-text-area__input",
            required: u,
            autocomplete: r,
            disabled: v,
            onInput: i,
            onMouseover: (l) => _(!0),
            onMouseleave: (l) => _(!1),
            onFocus: (l) => p(!0),
            onBlur: (l) => p(!1)
          }, null, 40, mo))
        ])
      ]),
      afterField: k(() => [
        c(t.$slots, "afterField")
      ]),
      error: k((e) => [
        c(t.$slots, "error", B(M({ ...e })))
      ]),
      _: 3
    }));
  }
});
const ho = /* @__PURE__ */ w("span", { class: "queso-checkbox__hidden-label" }, null, -1), bo = { class: "queso-checkbox__box" }, yo = { class: "queso-checkbox__box__symbol" }, $o = { class: "queso-checkbox__label" }, wo = ["innerHTML"], go = ["checked", "name", "id", "required", "autocomplete", "disabled", "onChange", "onFocus", "onBlur"], Ro = /* @__PURE__ */ F({
  __name: "AppCheckbox",
  setup(o) {
    const t = (s, e) => {
      e(s.target.checked);
    };
    return (s, e) => (h(), E(b(z), null, {
      label: k(() => [
        ho
      ]),
      beforeField: k(() => [
        c(s.$slots, "beforeField")
      ]),
      field: k(({
        fieldID: n,
        fieldName: a,
        fieldValue: r,
        fieldLabel: i,
        fieldAutocomplete: p,
        updateValue: _,
        toggleIsActive: u,
        toggleIsHover: v,
        isRequired: y,
        isDisabled: l,
        isReadOnly: d
      }) => [
        (h(), E(Z(d ? "div" : "label"), {
          class: S(["queso-checkbox", { "is-checked": r }]),
          for: n,
          onMouseover: (f) => v(!0),
          onMouseleave: (f) => v(!1)
        }, {
          default: k(() => [
            w("span", bo, [
              w("span", yo, [
                c(s.$slots, "symbol", {}, () => [
                  H("✔︎")
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
        d ? P("", !0) : (h(), g("input", {
          key: 0,
          type: "checkbox",
          class: "queso-checkbox__native",
          checked: r,
          name: a,
          id: n,
          required: y,
          autocomplete: p,
          disabled: l,
          onChange: (f) => t(f, _),
          onFocus: (f) => u(!0),
          onBlur: (f) => u(!1)
        }, null, 40, go))
      ]),
      afterField: k(() => [
        c(s.$slots, "afterField")
      ]),
      error: k((n) => [
        c(s.$slots, "error", B(M({ ...n })))
      ]),
      _: 3
    }));
  }
});
const ko = {
  key: 0,
  class: "queso-select__read-only"
}, Oo = { class: "queso-select__read-only__label" }, qo = { class: "text" }, To = ["name", "id", "onFocus", "onBlur", "required", "autocomplete", "multiple"], xo = /* @__PURE__ */ w("option", null, null, -1), Co = ["value", "selected"], No = /* @__PURE__ */ F({
  __name: "AppSelect",
  props: {
    options: { default: () => [] },
    multiple: { type: Boolean },
    placeholder: null
  },
  setup(o) {
    const t = (s, e) => {
      if (Array.isArray(s))
        return s.find((n) => n.key === e.key);
    };
    return (s, e) => (h(), E(b(z), null, {
      field: k(({
        fieldID: n,
        fieldName: a,
        fieldValue: r,
        fieldAutocomplete: i,
        updateValue: p,
        toggleIsActive: _,
        toggleIsHover: u,
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
          "onUpdate:options": (l) => p(l),
          onMouseover: (l) => u(!0),
          onMouseleave: (l) => u(!1)
        }, {
          placeholder: k(() => [
            c(s.$slots, "placeholder", B(M({ placeholder: o.placeholder })), () => [
              H(I(o.placeholder), 1)
            ])
          ]),
          selector: k(({ activeOptions: l }) => [
            c(s.$slots, "selector", B(M({ activeOptions: l })), () => [
              (h(!0), g(G, null, X(l, (d) => (h(), g("span", {
                key: d.key
              }, I(d.data.label), 1))), 128))
            ])
          ]),
          icon: k(() => [
            c(s.$slots, "icon", {}, () => [
              H("↓")
            ])
          ]),
          item: k(({ key: l, data: d }) => [
            c(s.$slots, "item", B(M({ key: l, data: d })), () => [
              w("span", qo, I(d.label), 1)
            ])
          ]),
          _: 2
        }, 1032, ["options", "default-options", "multiple", "onUpdate:options", "onMouseover", "onMouseleave"])),
        w("select", {
          name: a,
          id: n,
          class: "queso-select__select-native",
          onFocus: (l) => _(!0),
          onBlur: (l) => _(!1),
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
}, So = ["innerHTML"], Eo = ["checked", "name", "id", "required", "autocomplete", "disabled", "onChange", "onFocus", "onBlur"], jo = /* @__PURE__ */ F({
  __name: "AppSwitch",
  setup(o) {
    const t = (s, e) => {
      e(s.target.checked);
    };
    return (s, e) => (h(), E(b(z), null, {
      label: k(() => [
        Bo
      ]),
      beforeField: k(() => [
        c(s.$slots, "beforeField")
      ]),
      field: k(({
        fieldID: n,
        fieldName: a,
        fieldValue: r,
        fieldLabel: i,
        fieldAutocomplete: p,
        updateValue: _,
        toggleIsActive: u,
        toggleIsHover: v,
        isRequired: y,
        isDisabled: l,
        isReadOnly: d
      }) => [
        (h(), E(Z(d ? "div" : "label"), {
          class: S(["queso-switch", { "is-selected": r }]),
          for: n,
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
        d ? P("", !0) : (h(), g("input", {
          key: 0,
          type: "checkbox",
          class: "queso-switch__native",
          checked: r,
          name: a,
          id: n,
          required: y,
          autocomplete: p,
          disabled: l,
          onChange: (f) => t(f, _),
          onFocus: (f) => u(!0),
          onBlur: (f) => u(!1)
        }, null, 40, Eo))
      ]),
      afterField: k(() => [
        c(s.$slots, "afterField")
      ]),
      error: k((n) => [
        c(s.$slots, "error", B(M({ ...n })))
      ]),
      _: 3
    }));
  }
});
export {
  Ro as QuesoCheckbox,
  Io as QuesoClickable,
  Ao as QuesoCollapsible,
  Je as QuesoDropdown,
  z as QuesoField,
  Lo as QuesoIcon,
  Do as QuesoModal,
  No as QuesoSelect,
  jo as QuesoSwitch,
  Qo as QuesoTextArea,
  Ho as QuesoTextField
};
