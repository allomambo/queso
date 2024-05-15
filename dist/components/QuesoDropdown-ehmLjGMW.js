import { defineComponent as A, mergeModels as C, useModel as E, toRefs as I, ref as f, computed as _, unref as w, openBlock as r, createElementBlock as n, normalizeClass as h, createElementVNode as p, renderSlot as o, normalizeProps as P, guardReactiveProps as D, createTextVNode as k, toDisplayString as S, createCommentVNode as y, Fragment as R, renderList as L, mergeProps as Q } from "vue";
import { o as j, u as x } from "./QuesoCollapsible-C5GrwCyj.js";
import '../assets/components/QuesoDropdown.css';const G = { class: "queso-dropdown__selector__text" }, J = {
  key: 0,
  class: "queso-dropdown__selector__text__placeholder"
}, K = {
  key: 1,
  class: "queso-dropdown__selector__text__active-label"
}, U = { class: "queso-dropdown__selector__icon" }, W = ["aria-expanded"], X = {
  key: 0,
  class: "queso-dropdown__popover__header"
}, Y = ["onClick"], Z = {
  key: 1,
  class: "queso-dropdown__popover__footer"
}, le = /* @__PURE__ */ A({
  __name: "QuesoDropdown",
  props: /* @__PURE__ */ C({
    options: {},
    multiple: { type: Boolean },
    stayOpenOnSelection: { type: Boolean }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ C(["open:dropdown", "close:dropdown"], ["update:modelValue"]),
  setup($, { expose: T, emit: V }) {
    const a = $, g = V, s = E($, "modelValue"), { options: c } = I(a), q = f(null), i = f(null), l = f(!1), v = _(() => c.value.filter((e) => s.value.includes(e.value))), B = _(() => ({
      "is-multiple": a.multiple,
      "is-dropdown-open": l.value,
      "is-dropdown-close": !l.value
    })), b = (e) => {
      a.multiple ? s.value.includes(e) ? s.value = s.value.filter((t) => t !== e) : s.value = [...s.value, e] : s.value = [e], a.multiple || a.stayOpenOnSelection || u();
    }, H = () => {
      setTimeout(() => {
        M.value = 0;
      }, 210);
    }, m = () => {
      l.value = !0, g("open:dropdown");
    }, u = () => {
      l.value = !1, g("close:dropdown"), H();
    }, F = (e = !1) => {
      e ? m() : u();
    };
    j(q, () => u());
    const { y: M, arrivedState: O } = x(i, {
      offset: { top: 15, bottom: 15 }
    }), N = _(() => {
      var e, t;
      return i.value ? ((e = i.value) == null ? void 0 : e.scrollHeight) > ((t = i.value) == null ? void 0 : t.clientHeight) : !1;
    }), z = _(() => ({
      "is-scrolled-top": O.top,
      "is-scrolled-bottom": O.bottom || !N.value
    }));
    return T({ isDropdownOpen: l, openDropdown: m, closeDropdown: u }), (e, t) => w(c).length > 0 ? (r(), n("div", {
      key: 0,
      ref_key: "dropdown",
      ref: q,
      class: h(["queso-dropdown", B.value])
    }, [
      p("div", {
        class: "queso-dropdown__selector",
        onClick: t[0] || (t[0] = (d) => F(!l.value))
      }, [
        o(e.$slots, "selector", P(D({ options: w(c), activeOptions: v.value })), () => [
          o(e.$slots, "selectorBeforeText"),
          p("div", G, [
            v.value.length < 1 ? (r(), n("div", J, [
              o(e.$slots, "selectorPlaceholder")
            ])) : (r(), n("div", K, [
              o(e.$slots, "selectorActiveOptions", P(D({ activeOptions: v.value })), () => [
                k(S(v.value), 1)
              ])
            ]))
          ]),
          o(e.$slots, "selectorAfterText"),
          p("div", U, [
            o(e.$slots, "selectorIcon", {}, () => [
              k("↓")
            ])
          ])
        ])
      ]),
      p("div", {
        class: "queso-dropdown__popover",
        "aria-expanded": l.value
      }, [
        e.$slots.popoverHeader ? (r(), n("div", X, [
          o(e.$slots, "popoverHeader")
        ])) : y("", !0),
        p("div", {
          class: h(["queso-dropdown__popover__scroll", z.value])
        }, [
          p("ul", {
            ref_key: "dropdownPopover",
            ref: i,
            class: "queso-dropdown__popover__options-list"
          }, [
            (r(!0), n(R, null, L(w(c), (d) => (r(), n("li", {
              key: d.value,
              onClick: (ee) => b(d.value),
              class: h(["queso-dropdown__popover__options-list__item", { "is-option-active": s.value.includes(d.value) }])
            }, [
              o(e.$slots, "item", Q({ ref_for: !0 }, { ...d, openDropdown: m, closeDropdown: u }), () => [
                k(S(d), 1)
              ])
            ], 10, Y))), 128))
          ], 512)
        ], 2),
        e.$slots.popoverFooter ? (r(), n("div", Z, [
          o(e.$slots, "popoverFooter")
        ])) : y("", !0)
      ], 8, W)
    ], 2)) : y("", !0);
  }
});
export {
  le as _
};
