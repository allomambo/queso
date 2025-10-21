import { defineComponent as F, mergeModels as I, useModel as S, openBlock as r, createBlock as y, unref as v, mergeProps as _, withCtx as l, renderSlot as s, normalizeProps as a, guardReactiveProps as n, createElementBlock as i, createElementVNode as f, toDisplayString as p, createTextVNode as q, Fragment as B, renderList as M, withDirectives as w, vModelSelect as R } from "vue";
import { u as A } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ as C } from "./QuesoField-DYBEGM8C.js";
import { _ as N } from "./QuesoDropdown-iupHTqQe.js";
import '../assets/components/QuesoCheckboxMultiple.css';const U = {
  key: 0,
  class: "queso-select__read-only"
}, g = { class: "queso-select__read-only__label" }, z = { class: "text" }, O = ["id", "name", "required", "disabled", "onFocus", "onBlur"], Q = /* @__PURE__ */ f("option", null, null, -1), T = ["value"], X = /* @__PURE__ */ F({
  __name: "QuesoSelectMultiple",
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
    modelValue: { required: !0, default: [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(b) {
    const V = A(b), u = S(b, "modelValue");
    return (o, m) => (r(), y(v(C), _({ class: "-select-multiple" }, v(V)), {
      beforeLabel: l(() => [
        s(o.$slots, "beforeLabel")
      ]),
      label: l((t) => [
        s(o.$slots, "label", a(n({ ...t })))
      ]),
      required: l((t) => [
        s(o.$slots, "required", a(n({ ...t })))
      ]),
      afterLabel: l(() => [
        s(o.$slots, "afterLabel")
      ]),
      beforeInput: l(() => [
        s(o.$slots, "beforeInput")
      ]),
      input: l(({ fieldID: t, fieldName: k, isRequired: P, isDisabled: L, isReadOnly: D, toggleIsActive: $, toggleIsHover: h }) => [
        D ? (r(), i("div", U, [
          f("span", g, p(u.value || o.placeholder), 1)
        ])) : (r(), y(v(N), {
          key: 1,
          class: "queso-select",
          options: o.options,
          multiple: "",
          onMouseover: (e) => h(!0),
          onMouseleave: (e) => h(!1),
          modelValue: u.value,
          "onUpdate:modelValue": m[1] || (m[1] = (e) => u.value = e)
        }, {
          selectorPlaceholder: l(({ isDropdownOpen: e }) => [
            s(o.$slots, "placeholder", a(n({ isDropdownOpen: e, placeholder: o.placeholder })), () => [
              q(p(o.placeholder), 1)
            ])
          ]),
          selectorActiveOptions: l(({ isDropdownOpen: e, activeOptions: c }) => [
            s(o.$slots, "selector", a(n({ isDropdownOpen: e, activeOptions: c })), () => [
              (r(!0), i(B, null, M(c, (d) => (r(), i("span", {
                key: d.value
              }, p(d.label), 1))), 128))
            ])
          ]),
          selectorIcon: l(({ isDropdownOpen: e }) => [
            s(o.$slots, "icon", a(n({ isDropdownOpen: e })), () => [
              q("+")
            ])
          ]),
          popoverItem: l(({ index: e, value: c, label: d, data: E }) => [
            s(o.$slots, "item", a(n({ index: e, value: c, label: d, data: E })), () => [
              f("span", z, p(d), 1)
            ])
          ]),
          afterDropdown: l(() => [
            w(f("select", _({
              class: "queso-select__select-native",
              id: t,
              name: k,
              required: P,
              disabled: L,
              multiple: "",
              onFocus: (e) => $(!0),
              onBlur: (e) => $(!1)
            }, o.extraAttributes, {
              "onUpdate:modelValue": m[0] || (m[0] = (e) => u.value = e)
            }), [
              Q,
              (r(!0), i(B, null, M(o.options, (e) => (r(), i("option", {
                key: e.value,
                value: e.value
              }, p(e.label), 9, T))), 128))
            ], 16, O), [
              [R, u.value]
            ])
          ]),
          _: 2
        }, 1032, ["options", "onMouseover", "onMouseleave", "modelValue"]))
      ]),
      afterInput: l(() => [
        s(o.$slots, "afterInput")
      ]),
      error: l((t) => [
        s(o.$slots, "error", a(n({ ...t })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  X as _
};
