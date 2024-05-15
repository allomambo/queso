import { defineComponent as F, mergeModels as S, useModel as D, openBlock as t, createBlock as h, unref as f, mergeProps as y, withCtx as l, renderSlot as s, normalizeProps as a, guardReactiveProps as n, createElementBlock as d, createElementVNode as c, toDisplayString as i, createTextVNode as _, Fragment as q, renderList as B, withDirectives as I, vModelSelect as R } from "vue";
import { u as w } from "./QuesoCheckbox-CSerLn51.js";
import { _ as A } from "./QuesoField-DL0yjp-z.js";
import { _ as C } from "./QuesoDropdown-ehmLjGMW.js";
import '../assets/components/QuesoSelect.css';const N = {
  key: 0,
  class: "queso-select__read-only"
}, U = { class: "queso-select__read-only__label" }, g = { class: "text" }, z = ["id", "name", "required", "disabled", "onFocus", "onBlur"], O = /* @__PURE__ */ c("option", null, null, -1), Q = ["value"], W = /* @__PURE__ */ F({
  __name: "QuesoSelect",
  props: /* @__PURE__ */ S({
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
  setup(v) {
    const M = w(v), p = D(v, "modelValue");
    return (e, m) => (t(), h(f(A), y({ class: "-select" }, f(M)), {
      beforeLabel: l(() => [
        s(e.$slots, "beforeLabel")
      ]),
      label: l((r) => [
        s(e.$slots, "label", a(n({ ...r })))
      ]),
      required: l((r) => [
        s(e.$slots, "required", a(n({ ...r })))
      ]),
      afterLabel: l(() => [
        s(e.$slots, "afterLabel")
      ]),
      beforeInput: l(() => [
        s(e.$slots, "beforeInput")
      ]),
      input: l(({ fieldID: r, fieldName: k, isRequired: V, isDisabled: P, isReadOnly: L, toggleIsActive: b, toggleIsHover: $ }) => [
        L ? (t(), d("div", N, [
          c("span", U, i(p.value || e.placeholder), 1)
        ])) : (t(), h(f(C), {
          key: 1,
          class: "queso-select",
          options: e.options,
          "onUpdate:modelValue": m[0] || (m[0] = (o) => p.value = o[0]),
          onMouseover: (o) => $(!0),
          onMouseleave: (o) => $(!1)
        }, {
          selectorPlaceholder: l(() => [
            s(e.$slots, "placeholder", a(n({ placeholder: e.placeholder })), () => [
              _(i(e.placeholder), 1)
            ])
          ]),
          selectorActiveOptions: l(({ activeOptions: o }) => [
            s(e.$slots, "selector", a(n({ activeOptions: o })), () => [
              (t(!0), d(q, null, B(o, (u) => (t(), d("span", {
                key: u.value
              }, i(u.label), 1))), 128))
            ])
          ]),
          selectorIcon: l(() => [
            s(e.$slots, "icon", {}, () => [
              _("+")
            ])
          ]),
          item: l(({ value: o, label: u, data: E }) => [
            s(e.$slots, "item", a(n({ value: o, label: u, data: E })), () => [
              c("span", g, i(u), 1)
            ])
          ]),
          _: 2
        }, 1032, ["options", "onMouseover", "onMouseleave"])),
        I(c("select", y({
          class: "queso-select__select-native",
          id: r,
          name: k,
          required: V,
          disabled: P,
          onFocus: (o) => b(!0),
          onBlur: (o) => b(!1)
        }, e.extraAttributes, {
          "onUpdate:modelValue": m[1] || (m[1] = (o) => p.value = o)
        }), [
          O,
          (t(!0), d(q, null, B(e.options, (o) => (t(), d("option", {
            key: o.value,
            value: o.value
          }, i(o.label), 9, Q))), 128))
        ], 16, z), [
          [R, p.value]
        ])
      ]),
      afterInput: l(() => [
        s(e.$slots, "afterInput")
      ]),
      error: l((r) => [
        s(e.$slots, "error", a(n({ ...r })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  W as _
};
