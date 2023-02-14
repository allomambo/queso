import { unref as q, getCurrentScope as ce, onScopeDispose as de, ref as B, computed as C, reactive as U, watch as le, defineComponent as P, onMounted as ne, openBlock as v, createElementBlock as k, normalizeClass as I, createElementVNode as g, renderSlot as _, normalizeProps as O, guardReactiveProps as F, createTextVNode as Q, toDisplayString as A, createCommentVNode as E, Fragment as K, renderList as z, toRefs as pe, toRef as J, inject as _e, provide as fe, createBlock as x, Teleport as ve, createVNode as me, withCtx as b, resolveDynamicComponent as re } from "vue";
var Z;
const W = typeof window < "u", he = (t) => typeof t == "string", L = () => {
};
W && ((Z = window == null ? void 0 : window.navigator) != null && Z.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function D(t) {
  return typeof t == "function" ? t() : q(t);
}
function ae(t, s) {
  function e(...o) {
    return new Promise((l, r) => {
      Promise.resolve(t(() => s.apply(this, o), { fn: s, thisArg: this, args: o })).then(l).catch(r);
    });
  }
  return e;
}
function ye(t, s = {}) {
  let e, o, l = L;
  const r = (n) => {
    clearTimeout(n), l(), l = L;
  };
  return (n) => {
    const h = D(t), f = D(s.maxWait);
    return e && r(e), h <= 0 || f !== void 0 && f <= 0 ? (o && (r(o), o = null), Promise.resolve(n())) : new Promise((d, u) => {
      l = s.rejectOnCancel ? u : d, f && !o && (o = setTimeout(() => {
        e && r(e), o = null, d(n());
      }, f)), e = setTimeout(() => {
        o && r(o), o = null, d(n());
      }, h);
    });
  };
}
function be(t, s = !0, e = !0, o = !1) {
  let l = 0, r, a = !0, n = L, h;
  const f = () => {
    r && (clearTimeout(r), r = void 0, n(), n = L);
  };
  return (u) => {
    const c = D(t), p = Date.now() - l, i = () => h = u();
    if (f(), c <= 0)
      return l = Date.now(), i();
    if (p > c && (e || !a))
      l = Date.now(), i();
    else if (s)
      return new Promise(($, T) => {
        n = o ? T : $, r = setTimeout(() => {
          l = Date.now(), a = !0, $(i()), f();
        }, c - p);
      });
    return !e && !r && (r = setTimeout(() => a = !0, c)), a = !1, h;
  };
}
function $e(t) {
  return t;
}
function we(t) {
  return ce() ? (de(t), !0) : !1;
}
function ke(t, s = 200, e = {}) {
  return ae(ye(s, e), t);
}
function ge(t, s = 200, e = !1, o = !0, l = !1) {
  return ae(be(s, e, o, l), t);
}
function N(t) {
  var s;
  const e = D(t);
  return (s = e == null ? void 0 : e.$el) != null ? s : e;
}
const ue = W ? window : void 0;
W && window.document;
W && window.navigator;
W && window.location;
function R(...t) {
  let s, e, o, l;
  if (he(t[0]) || Array.isArray(t[0]) ? ([e, o, l] = t, s = ue) : [s, e, o, l] = t, !s)
    return L;
  Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
  const r = [], a = () => {
    r.forEach((d) => d()), r.length = 0;
  }, n = (d, u, c) => (d.addEventListener(u, c, l), () => d.removeEventListener(u, c, l)), h = le(() => N(s), (d) => {
    a(), d && r.push(...e.flatMap((u) => o.map((c) => n(d, u, c))));
  }, { immediate: !0, flush: "post" }), f = () => {
    h(), a();
  };
  return we(f), f;
}
function qe(t, s, e = {}) {
  const { window: o = ue, ignore: l = [], capture: r = !0, detectIframe: a = !1 } = e;
  if (!o)
    return;
  let n = !0, h;
  const f = (p) => l.some((i) => {
    if (typeof i == "string")
      return Array.from(o.document.querySelectorAll(i)).some(($) => $ === p.target || p.composedPath().includes($));
    {
      const $ = N(i);
      return $ && (p.target === $ || p.composedPath().includes($));
    }
  }), d = (p) => {
    o.clearTimeout(h);
    const i = N(t);
    if (!(!i || i === p.target || p.composedPath().includes(i))) {
      if (p.detail === 0 && (n = !f(p)), !n) {
        n = !0;
        return;
      }
      s(p);
    }
  }, u = [
    R(o, "click", d, { passive: !0, capture: r }),
    R(o, "pointerdown", (p) => {
      const i = N(t);
      i && (n = !p.composedPath().includes(i) && !f(p));
    }, { passive: !0 }),
    R(o, "pointerup", (p) => {
      if (p.button === 0) {
        const i = p.composedPath();
        p.composedPath = () => i, h = o.setTimeout(() => d(p), 50);
      }
    }, { passive: !0 }),
    a && R(o, "blur", (p) => {
      var i;
      const $ = N(t);
      ((i = o.document.activeElement) == null ? void 0 : i.tagName) === "IFRAME" && !($ != null && $.contains(o.document.activeElement)) && s(p);
    })
  ].filter(Boolean);
  return () => u.forEach((p) => p());
}
const G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, X = "__vueuse_ssr_handlers__";
G[X] = G[X] || {};
G[X];
const ee = 1;
function Oe(t, s = {}) {
  const {
    throttle: e = 0,
    idle: o = 200,
    onStop: l = L,
    onScroll: r = L,
    offset: a = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: n = {
      capture: !1,
      passive: !0
    },
    behavior: h = "auto"
  } = s, f = B(0), d = B(0), u = C({
    get() {
      return f.value;
    },
    set(y) {
      p(y, void 0);
    }
  }), c = C({
    get() {
      return d.value;
    },
    set(y) {
      p(void 0, y);
    }
  });
  function p(y, m) {
    var M, S, Y;
    const j = D(t);
    j && ((Y = j instanceof Document ? document.body : j) == null || Y.scrollTo({
      top: (M = D(m)) != null ? M : c.value,
      left: (S = D(y)) != null ? S : u.value,
      behavior: D(h)
    }));
  }
  const i = B(!1), $ = U({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), T = U({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), H = ke((y) => {
    i.value = !1, T.left = !1, T.right = !1, T.top = !1, T.bottom = !1, l(y);
  }, e + o), w = (y) => {
    const m = y.target === document ? y.target.documentElement : y.target, M = m.scrollLeft;
    T.left = M < f.value, T.right = M > d.value, $.left = M <= 0 + (a.left || 0), $.right = M + m.clientWidth >= m.scrollWidth - (a.right || 0) - ee, f.value = M;
    let S = m.scrollTop;
    y.target === document && !S && (S = document.body.scrollTop), T.top = S < d.value, T.bottom = S > d.value, $.top = S <= 0 + (a.top || 0), $.bottom = S + m.clientHeight >= m.scrollHeight - (a.bottom || 0) - ee, d.value = S, i.value = !0, H(y), r(y);
  };
  return R(t, "scroll", e ? ge(w, e, !0, !1) : w, n), {
    x: u,
    y: c,
    isScrolling: i,
    arrivedState: $,
    directions: T
  };
}
var oe;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(oe || (oe = {}));
var Fe = Object.defineProperty, te = Object.getOwnPropertySymbols, Te = Object.prototype.hasOwnProperty, Me = Object.prototype.propertyIsEnumerable, se = (t, s, e) => s in t ? Fe(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e, Be = (t, s) => {
  for (var e in s || (s = {}))
    Te.call(s, e) && se(t, e, s[e]);
  if (te)
    for (var e of te(s))
      Me.call(s, e) && se(t, e, s[e]);
  return t;
};
const Se = {
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
Be({
  linear: $e
}, Se);
const Ce = { class: "queso-dropdown__selector__text" }, Ee = {
  key: 0,
  class: "queso-dropdown__selector__placeholder"
}, xe = {
  key: 1,
  class: "queso-dropdown__selector__active-label"
}, Pe = { class: "queso-dropdown__selector__icon" }, Ae = { class: "queso-dropdown__popover" }, De = {
  key: 0,
  class: "queso-dropdown__popover__header"
}, Ie = ["onClick"], Le = {
  key: 1,
  class: "queso-dropdown__popover__footer"
}, Qe = /* @__PURE__ */ P({
  __name: "DropdownBase",
  props: {
    defaultOptions: { default: () => [] },
    options: { default: () => [] },
    multiple: { type: Boolean },
    stayOpenOnSelection: { type: Boolean }
  },
  emits: ["update:options", "open:dropdown", "close:dropdown"],
  setup(t, { emit: s }) {
    const e = t, o = B(), l = B(), r = B(!1), a = B([]), n = C(() => a.value.length > 0 ? a.value : e.defaultOptions);
    ne(() => {
      e.multiple && (a.value = e.defaultOptions);
    });
    const h = C(() => ({
      "is-open": r.value,
      "is-close": !r.value,
      "has-value": n.value.length >= 1,
      "has-no-value": n.value.length < 1,
      "is-multiple": e.multiple
    })), f = (w) => {
      if (e.multiple) {
        let y = 0;
        a.value = a.value.filter((m) => {
          const M = m.key !== w.key;
          return M || y++, M;
        }), y < 1 && a.value.push(w);
      } else
        a.value = [w];
      s("update:options", n.value), e.multiple || e.stayOpenOnSelection || c();
    }, d = () => {
      setTimeout(() => {
        i.value = 0;
      }, 210);
    }, u = () => {
      r.value = !0, s("open:dropdown");
    }, c = () => {
      r.value = !1, s("close:dropdown"), d();
    }, p = (w = !1) => {
      w ? u() : c();
    };
    qe(o, () => c());
    const { y: i, arrivedState: $ } = Oe(l, {
      offset: { top: 15, bottom: 15 }
    }), T = C(() => {
      var w, y;
      return l.value ? ((w = l.value) == null ? void 0 : w.scrollHeight) > ((y = l.value) == null ? void 0 : y.clientHeight) : !1;
    }), H = C(() => ({
      "is-scrolled-top": $.top,
      "is-scrolled-bottom": $.bottom || !T.value
    }));
    return (w, y) => t.options.length > 0 ? (v(), k("div", {
      key: 0,
      class: I(["queso-dropdown", q(h)]),
      ref_key: "dropdown",
      ref: o
    }, [
      g("div", {
        class: "queso-dropdown__selector",
        onClick: y[0] || (y[0] = (m) => p(!r.value))
      }, [
        _(w.$slots, "prefix"),
        g("div", Ce, [
          q(n).length < 1 ? (v(), k("div", Ee, [
            _(w.$slots, "placeholder")
          ])) : (v(), k("div", xe, [
            _(w.$slots, "selector", O(F({ activeOptions: q(n) })), () => [
              Q(A(q(n)), 1)
            ])
          ]))
        ]),
        _(w.$slots, "suffix"),
        g("div", Pe, [
          _(w.$slots, "icon", {}, () => [
            Q("↓")
          ])
        ])
      ]),
      g("div", Ae, [
        w.$slots.popoverHeader ? (v(), k("div", De, [
          _(w.$slots, "popoverHeader", O(F({ openDropdown: u, closeDropdown: c })))
        ])) : E("", !0),
        g("div", {
          class: I(["queso-dropdown__popover__scroll", q(H)])
        }, [
          g("ul", {
            ref_key: "dropdownPopover",
            ref: l,
            class: "queso-dropdown__popover__options-list"
          }, [
            (v(!0), k(K, null, z(t.options, (m) => (v(), k("li", {
              key: m.key,
              onClick: (M) => f(m),
              class: I(["queso-dropdown__popover__options-list__item", { "is-active": q(n).find((M) => M.key === m.key) }])
            }, [
              _(w.$slots, "item", O(F({ ...m, openDropdown: u, closeDropdown: c })), () => [
                Q(A(m), 1)
              ])
            ], 10, Ie))), 128))
          ], 512)
        ], 2),
        w.$slots.popoverFooter ? (v(), k("div", Le, [
          _(w.$slots, "popoverFooter", O(F({ openDropdown: u, closeDropdown: c })))
        ])) : E("", !0)
      ])
    ], 2)) : E("", !0);
  }
});
const He = ["for"], Ne = {
  key: 0,
  class: "queso-field__input"
}, Re = {
  key: 1,
  class: "queso-field__error"
}, V = /* @__PURE__ */ P({
  __name: "FieldBase",
  props: {
    id: null,
    name: null,
    modelValue: null,
    label: null,
    isRequired: { type: Boolean },
    isDisabled: { type: Boolean },
    isReadOnly: { type: Boolean },
    isError: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { expose: s, emit: e }) {
    const o = t, l = B(!1), r = B(!1), a = C(() => !!i.value), { isRequired: n, isDisabled: h, isError: f, isReadOnly: d } = pe(o), u = (m = !1) => {
      l.value = m;
    }, c = (m = !1) => {
      r.value = m;
    }, p = (m) => {
      i.value = m.target ? m.target.value : m, e("update:modelValue", i.value);
    }, i = B(o.modelValue ?? null), $ = C(() => o.id || o.name), T = J(o, "name"), H = J(o, "label"), w = C(() => ({
      "is-disabled": h.value,
      "is-error": f.value,
      "has-value": a.value,
      "is-active": l.value,
      "is-hover": r.value,
      "is-read-only": d.value
    })), y = U({
      // Base
      fieldID: $,
      fieldName: T,
      fieldValue: i,
      fieldLabel: H,
      // States
      isRequired: n,
      isActive: l,
      isHover: r,
      isFilled: a,
      isDisabled: h,
      isError: f,
      isReadOnly: d,
      // Methods
      updateValue: p,
      toggleIsActive: u,
      toggleIsHover: c
    });
    return s({ ...y }), (m, M) => (v(), k("div", {
      class: I(["queso-field", q(w)])
    }, [
      _(m.$slots, "label", O(F({ ...y })), () => [
        t.label ? (v(), k("label", {
          key: 0,
          for: q($),
          class: "queso-field-label"
        }, A(t.label), 9, He)) : E("", !0)
      ]),
      m.$slots.field ? (v(), k("div", Ne, [
        _(m.$slots, "beforeField"),
        _(m.$slots, "field", O(F({ ...y }))),
        _(m.$slots, "afterField")
      ])) : E("", !0),
      q(f) ? (v(), k("div", Re, [
        _(m.$slots, "error", O(F({ ...y })))
      ])) : E("", !0)
    ], 2));
  }
});
const ie = Symbol("ModalMethodsKey"), We = /* @__PURE__ */ P({
  __name: "ModalBaseOverlay",
  setup(t) {
    const { close: s } = _e(ie);
    return (e, o) => (v(), k("div", {
      class: "queso-modal__overlay",
      onClick: o[0] || (o[0] = //@ts-ignore
      (...l) => q(s) && q(s)(...l))
    }));
  }
});
const Ve = { class: "queso-modal__inner" }, mo = /* @__PURE__ */ P({
  __name: "ModalBase",
  emits: ["modal:open", "modal:close"],
  setup(t, { expose: s, emit: e }) {
    const o = B(!1), l = () => {
      o.value = !0;
    }, r = () => {
      o.value = !1;
    }, a = (n = !0) => {
      document.documentElement.style.overflow = n ? "hidden" : null;
    };
    return le(o, (n) => {
      n ? (a(!0), e("modal:open")) : (a(!1), e("modal:close"));
    }), ne(() => {
      o.value && a(!0);
    }), fe(ie, { open: l, close: r }), s({ open: l, close: r }), (n, h) => (v(), x(ve, { to: "body" }, [
      g("div", {
        class: I(["queso-modal", { "is-open": o.value }])
      }, [
        _(n.$slots, "before-content"),
        g("div", Ve, [
          _(n.$slots, "default")
        ]),
        _(n.$slots, "after-content"),
        _(n.$slots, "overlay", {}, () => [
          me(We)
        ])
      ], 2)
    ]));
  }
});
const je = { class: "queso-text-field" }, Ue = ["innerHTML"], Ke = ["type", "value", "name", "id", "required", "disabled", "onInput", "onMouseover", "onMouseleave", "onFocus", "onBlur"], ho = /* @__PURE__ */ P({
  __name: "TextField",
  props: {
    type: { default: "text" }
  },
  setup(t) {
    return (s, e) => (v(), x(q(V), null, {
      label: b((o) => [
        _(s.$slots, "label", O(F({ ...o })))
      ]),
      beforeField: b(() => [
        _(s.$slots, "beforeField")
      ]),
      field: b(({
        fieldID: o,
        fieldName: l,
        fieldValue: r,
        updateValue: a,
        toggleIsActive: n,
        toggleIsHover: h,
        isRequired: f,
        isDisabled: d,
        isReadOnly: u
      }) => [
        g("div", je, [
          u ? (v(), k("span", {
            key: 0,
            class: "queso-text-field__readonly",
            innerHTML: r
          }, null, 8, Ue)) : (v(), k("input", {
            key: 1,
            type: t.type,
            value: r,
            name: l,
            id: o,
            class: "queso-text-field__input",
            required: f,
            disabled: d,
            onInput: a,
            onMouseover: (c) => h(!0),
            onMouseleave: (c) => h(!1),
            onFocus: (c) => n(!0),
            onBlur: (c) => n(!1)
          }, null, 40, Ke)),
          _(s.$slots, "after")
        ])
      ]),
      afterField: b(() => [
        _(s.$slots, "afterField")
      ]),
      error: b((o) => [
        _(s.$slots, "error", O(F({ ...o })))
      ]),
      _: 3
    }));
  }
});
const ze = { class: "queso-text-area" }, Ge = ["innerHTML"], Xe = ["name", "id", "value", "required", "disabled", "onInput", "onMouseover", "onMouseleave", "onFocus", "onBlur"], yo = /* @__PURE__ */ P({
  __name: "TextArea",
  setup(t) {
    return (s, e) => (v(), x(q(V), null, {
      label: b((o) => [
        _(s.$slots, "label", O(F({ ...o })))
      ]),
      beforeField: b(() => [
        _(s.$slots, "beforeField")
      ]),
      field: b(({
        fieldID: o,
        fieldName: l,
        fieldValue: r,
        updateValue: a,
        toggleIsActive: n,
        toggleIsHover: h,
        isRequired: f,
        isDisabled: d,
        isReadOnly: u
      }) => [
        g("div", ze, [
          u ? (v(), k("span", {
            key: 0,
            class: "queso-text-area__readonly",
            innerHTML: r
          }, null, 8, Ge)) : (v(), k("textarea", {
            key: 1,
            name: l,
            id: o,
            value: r,
            class: "queso-text-area__input",
            required: f,
            disabled: d,
            onInput: a,
            onMouseover: (c) => h(!0),
            onMouseleave: (c) => h(!1),
            onFocus: (c) => n(!0),
            onBlur: (c) => n(!1)
          }, null, 40, Xe))
        ])
      ]),
      afterField: b(() => [
        _(s.$slots, "afterField")
      ]),
      error: b((o) => [
        _(s.$slots, "error", O(F({ ...o })))
      ]),
      _: 3
    }));
  }
});
const Ye = /* @__PURE__ */ g("span", { class: "queso-checkbox__hidden-label" }, null, -1), Je = { class: "queso-checkbox__box" }, Ze = { class: "queso-checkbox__box__symbol" }, eo = { class: "queso-checkbox__label" }, oo = ["innerHTML"], to = ["checked", "name", "id", "required", "disabled", "onChange", "onFocus", "onBlur"], bo = /* @__PURE__ */ P({
  __name: "AppCheckbox",
  setup(t) {
    const s = (e, o) => {
      o(e.target.checked);
    };
    return (e, o) => (v(), x(q(V), null, {
      label: b(() => [
        Ye
      ]),
      beforeField: b(() => [
        _(e.$slots, "beforeField")
      ]),
      field: b(({
        fieldID: l,
        fieldName: r,
        fieldValue: a,
        fieldLabel: n,
        updateValue: h,
        toggleIsActive: f,
        toggleIsHover: d,
        isRequired: u,
        isDisabled: c,
        isReadOnly: p
      }) => [
        (v(), x(re(p ? "div" : "label"), {
          class: I(["queso-checkbox", { "is-checked": a }]),
          for: l,
          onMouseover: (i) => d(!0),
          onMouseleave: (i) => d(!1)
        }, {
          default: b(() => [
            g("span", Je, [
              g("span", Ze, [
                _(e.$slots, "symbol", {}, () => [
                  Q("✔︎")
                ])
              ])
            ]),
            g("span", eo, [
              g("span", {
                class: "queso-checkbox__label__text",
                innerHTML: n
              }, null, 8, oo)
            ])
          ]),
          _: 2
        }, 1064, ["for", "class", "onMouseover", "onMouseleave"])),
        p ? E("", !0) : (v(), k("input", {
          key: 0,
          type: "checkbox",
          class: "queso-checkbox__native",
          checked: a,
          name: r,
          id: l,
          required: u,
          disabled: c,
          onChange: (i) => s(i, h),
          onFocus: (i) => f(!0),
          onBlur: (i) => f(!1)
        }, null, 40, to))
      ]),
      afterField: b(() => [
        _(e.$slots, "afterField")
      ]),
      error: b((l) => [
        _(e.$slots, "error", O(F({ ...l })))
      ]),
      _: 3
    }));
  }
});
const so = {
  key: 0,
  class: "queso-select__read-only"
}, lo = { class: "queso-select__read-only__label" }, no = { class: "text" }, ro = ["name", "id", "onFocus", "onBlur", "multiple"], ao = /* @__PURE__ */ g("option", null, null, -1), uo = ["value", "selected"], $o = /* @__PURE__ */ P({
  __name: "AppSelect",
  props: {
    options: { default: () => [] },
    multiple: { type: Boolean },
    placeholder: null
  },
  setup(t) {
    const s = (e, o) => {
      if (Array.isArray(e))
        return e.find((l) => l.key === o.key);
    };
    return (e, o) => (v(), x(q(V), null, {
      field: b(({ fieldID: l, fieldName: r, fieldValue: a, updateValue: n, toggleIsActive: h, toggleIsHover: f, isReadOnly: d }) => [
        d ? (v(), k("div", so, [
          g("span", lo, A(a[0].data.label || t.placeholder), 1)
        ])) : (v(), x(q(Qe), {
          key: 1,
          class: "queso-select",
          options: t.options,
          "default-options": a || [],
          multiple: t.multiple,
          "onUpdate:options": (u) => n(u),
          onMouseover: (u) => f(!0),
          onMouseleave: (u) => f(!1)
        }, {
          placeholder: b(() => [
            _(e.$slots, "placeholder", O(F({ placeholder: t.placeholder })), () => [
              Q(A(t.placeholder), 1)
            ])
          ]),
          selector: b(({ activeOptions: u }) => [
            _(e.$slots, "selector", O(F({ activeOptions: u })), () => [
              (v(!0), k(K, null, z(u, (c) => (v(), k("span", {
                key: c.key
              }, A(c.data.label), 1))), 128))
            ])
          ]),
          icon: b(() => [
            _(e.$slots, "icon", {}, () => [
              Q("↓")
            ])
          ]),
          item: b(({ key: u, data: c }) => [
            _(e.$slots, "item", O(F({ key: u, data: c })), () => [
              g("span", no, A(c.label), 1)
            ])
          ]),
          _: 2
        }, 1032, ["options", "default-options", "multiple", "onUpdate:options", "onMouseover", "onMouseleave"])),
        g("select", {
          name: r,
          id: l,
          class: "queso-select__select-native",
          onFocus: (u) => h(!0),
          onBlur: (u) => h(!1),
          multiple: t.multiple
        }, [
          ao,
          (v(!0), k(K, null, z(t.options, (u) => (v(), k("option", {
            value: u.key,
            key: u.key,
            selected: s(a, u)
          }, A(u.data.label), 9, uo))), 128))
        ], 40, ro)
      ]),
      _: 3
    }));
  }
});
const io = /* @__PURE__ */ g("span", { class: "queso-switch__hidden-label" }, null, -1), co = /* @__PURE__ */ g("span", { class: "queso-switch__box" }, [
  /* @__PURE__ */ g("span", { class: "queso-switch__box__circle" })
], -1), po = {
  key: 0,
  class: "queso-switch__label"
}, _o = ["innerHTML"], fo = ["checked", "name", "id", "required", "disabled", "onChange", "onFocus", "onBlur"], wo = /* @__PURE__ */ P({
  __name: "AppSwitch",
  setup(t) {
    const s = (e, o) => {
      o(e.target.checked);
    };
    return (e, o) => (v(), x(q(V), null, {
      label: b(() => [
        io
      ]),
      beforeField: b(() => [
        _(e.$slots, "beforeField")
      ]),
      field: b(({
        fieldID: l,
        fieldName: r,
        fieldValue: a,
        fieldLabel: n,
        updateValue: h,
        toggleIsActive: f,
        toggleIsHover: d,
        isRequired: u,
        isDisabled: c,
        isReadOnly: p
      }) => [
        (v(), x(re(p ? "div" : "label"), {
          class: I(["queso-switch", { "is-selected": a }]),
          for: l,
          onMouseover: (i) => d(!0),
          onMouseleave: (i) => d(!1)
        }, {
          default: b(() => [
            co,
            n ? (v(), k("span", po, [
              g("span", {
                class: "queso-switch__label__text",
                innerHTML: n
              }, null, 8, _o)
            ])) : E("", !0)
          ]),
          _: 2
        }, 1064, ["for", "class", "onMouseover", "onMouseleave"])),
        p ? E("", !0) : (v(), k("input", {
          key: 0,
          type: "checkbox",
          class: "queso-switch__native",
          checked: a,
          name: r,
          id: l,
          required: u,
          disabled: c,
          onChange: (i) => s(i, h),
          onFocus: (i) => f(!0),
          onBlur: (i) => f(!1)
        }, null, 40, fo))
      ]),
      afterField: b(() => [
        _(e.$slots, "afterField")
      ]),
      error: b((l) => [
        _(e.$slots, "error", O(F({ ...l })))
      ]),
      _: 3
    }));
  }
});
export {
  bo as QuesoCheckbox,
  Qe as QuesoDropdown,
  V as QuesoField,
  mo as QuesoModal,
  $o as QuesoSelect,
  wo as QuesoSwitch,
  yo as QuesoTextArea,
  ho as QuesoTextField
};
