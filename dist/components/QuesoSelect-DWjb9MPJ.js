import { defineComponent as F, mergeModels as I, useModel as S, computed as R, openBlock as n, createBlock as _, unref as f, mergeProps as q, withCtx as s, renderSlot as t, normalizeProps as r, guardReactiveProps as a, createElementBlock as i, createElementVNode as v, toDisplayString as p, createTextVNode as B, Fragment as M, renderList as V, withDirectives as g, vModelSelect as A } from "vue";
import { u as C } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ as N } from "./QuesoField-DYBEGM8C.js";
import { _ as U } from "./QuesoDropdown-iupHTqQe.js";
import '../assets/components/QuesoSelect.css';const z = {
  key: 0,
  class: "queso-select__read-only"
}, O = { class: "queso-select__read-only__label" }, Q = { class: "text" }, T = ["id", "name", "required", "disabled", "onFocus", "onBlur"], j = /* @__PURE__ */ v("option", null, null, -1), G = ["value"], Z = /* @__PURE__ */ F({
  __name: "QuesoSelect",
  props: /* @__PURE__ */ I({
    options: {},
    placeholder: {},
    id: {},
    name: {},
    label: {},
    isError: { type: Boolean },
    isRequired: { type: Boolean },
    isDisabled: { type: Boolean },
    isReadOnly: { type: Boolean },
    extraAttributes: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(b) {
    const k = C(b), u = S(b, "modelValue"), $ = R({
      get() {
        return u.value ? [u.value] : [];
      },
      set(e) {
        u.value = e[0];
      }
    });
    return (e, m) => (n(), _(f(N), q({ class: "-select" }, f(k)), {
      beforeLabel: s((l) => [
        t(e.$slots, "beforeLabel", r(a({ ...l })))
      ]),
      label: s((l) => [
        t(e.$slots, "label", r(a({ ...l })))
      ]),
      required: s((l) => [
        t(e.$slots, "required", r(a({ ...l })))
      ]),
      afterLabel: s((l) => [
        t(e.$slots, "afterLabel", r(a({ ...l })))
      ]),
      beforeInput: s((l) => [
        t(e.$slots, "beforeInput", r(a({ ...l })))
      ]),
      input: s(({ fieldID: l, fieldName: P, isRequired: L, isDisabled: w, isReadOnly: D, toggleIsActive: h, toggleIsHover: y }) => [
        D ? (n(), i("div", z, [
          v("span", O, p(u.value || e.placeholder), 1)
        ])) : (n(), _(f(U), {
          key: 1,
          class: "queso-select",
          options: e.options,
          onMouseover: (o) => y(!0),
          onMouseleave: (o) => y(!1),
          modelValue: $.value,
          "onUpdate:modelValue": m[1] || (m[1] = (o) => $.value = o)
        }, {
          selectorPlaceholder: s(({ isDropdownOpen: o }) => [
            t(e.$slots, "placeholder", r(a({ isDropdownOpen: o, placeholder: e.placeholder })), () => [
              B(p(e.placeholder), 1)
            ])
          ]),
          selectorActiveOptions: s(({ isDropdownOpen: o, activeOptions: c }) => [
            t(e.$slots, "selector", r(a({ isDropdownOpen: o, activeOptions: c })), () => [
              (n(!0), i(M, null, V(c, (d) => (n(), i("span", {
                key: d.value
              }, p(d.label), 1))), 128))
            ])
          ]),
          selectorIcon: s(({ isDropdownOpen: o }) => [
            t(e.$slots, "icon", r(a({ isDropdownOpen: o })), () => [
              B("+")
            ])
          ]),
          popoverItem: s(({ index: o, value: c, label: d, data: E }) => [
            t(e.$slots, "item", r(a({ index: o, value: c, label: d, data: E })), () => [
              v("span", Q, p(d), 1)
            ])
          ]),
          afterDropdown: s(() => [
            g(v("select", q({
              class: "queso-select__select-native",
              id: l,
              name: P,
              required: L,
              disabled: w,
              onFocus: (o) => h(!0),
              onBlur: (o) => h(!1)
            }, e.extraAttributes, {
              "onUpdate:modelValue": m[0] || (m[0] = (o) => u.value = o),
              tabindex: "-1"
            }), [
              j,
              (n(!0), i(M, null, V(e.options, (o) => (n(), i("option", {
                key: o.value,
                value: o.value
              }, p(o.label), 9, G))), 128))
            ], 16, T), [
              [A, u.value]
            ])
          ]),
          _: 2
        }, 1032, ["options", "onMouseover", "onMouseleave", "modelValue"]))
      ]),
      afterInput: s((l) => [
        t(e.$slots, "afterInput", r(a({ ...l })))
      ]),
      error: s((l) => [
        t(e.$slots, "error", r(a({ ...l })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  Z as _
};
