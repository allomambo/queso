import { defineComponent as F, mergeModels as S, useModel as D, openBlock as r, createBlock as h, unref as f, mergeProps as y, withCtx as o, renderSlot as s, normalizeProps as a, guardReactiveProps as n, createElementBlock as i, createElementVNode as c, toDisplayString as p, createTextVNode as _, Fragment as q, renderList as B, withDirectives as I, vModelSelect as R } from "vue";
import { u as w } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ as A } from "./QuesoField-DYBEGM8C.js";
import { _ as C } from "./QuesoDropdown-DCDvSGBg.js";
import '../assets/components/QuesoCheckboxMultiple.css';const N = {
  key: 0,
  class: "queso-select__read-only"
}, U = { class: "queso-select__read-only__label" }, g = { class: "text" }, z = ["id", "name", "required", "disabled", "onFocus", "onBlur"], O = /* @__PURE__ */ c("option", null, null, -1), Q = ["value"], W = /* @__PURE__ */ F({
  __name: "QuesoSelectMultiple",
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
    modelValue: { required: !0, default: [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(v) {
    const M = w(v), u = D(v, "modelValue");
    return (e, m) => (r(), h(f(A), y({ class: "-select-multiple" }, f(M)), {
      beforeLabel: o(() => [
        s(e.$slots, "beforeLabel")
      ]),
      label: o((t) => [
        s(e.$slots, "label", a(n({ ...t })))
      ]),
      required: o((t) => [
        s(e.$slots, "required", a(n({ ...t })))
      ]),
      afterLabel: o(() => [
        s(e.$slots, "afterLabel")
      ]),
      beforeInput: o(() => [
        s(e.$slots, "beforeInput")
      ]),
      input: o(({ fieldID: t, fieldName: V, isRequired: k, isDisabled: P, isReadOnly: L, toggleIsActive: b, toggleIsHover: $ }) => [
        L ? (r(), i("div", N, [
          c("span", U, p(u.value || e.placeholder), 1)
        ])) : (r(), h(f(C), {
          key: 1,
          class: "queso-select",
          options: e.options,
          multiple: "",
          onMouseover: (l) => $(!0),
          onMouseleave: (l) => $(!1),
          modelValue: u.value,
          "onUpdate:modelValue": m[0] || (m[0] = (l) => u.value = l)
        }, {
          selectorPlaceholder: o(() => [
            s(e.$slots, "placeholder", a(n({ placeholder: e.placeholder })), () => [
              _(p(e.placeholder), 1)
            ])
          ]),
          selectorActiveOptions: o(({ activeOptions: l }) => [
            s(e.$slots, "selector", a(n({ activeOptions: l })), () => [
              (r(!0), i(q, null, B(l, (d) => (r(), i("span", {
                key: d.value
              }, p(d.label), 1))), 128))
            ])
          ]),
          selectorIcon: o(() => [
            s(e.$slots, "icon", {}, () => [
              _("+")
            ])
          ]),
          item: o(({ value: l, label: d, data: E }) => [
            s(e.$slots, "item", a(n({ value: l, label: d, data: E })), () => [
              c("span", g, p(d), 1)
            ])
          ]),
          _: 2
        }, 1032, ["options", "onMouseover", "onMouseleave", "modelValue"])),
        I(c("select", y({
          class: "queso-select__select-native",
          id: t,
          name: V,
          required: k,
          disabled: P,
          multiple: "",
          onFocus: (l) => b(!0),
          onBlur: (l) => b(!1)
        }, e.extraAttributes, {
          "onUpdate:modelValue": m[1] || (m[1] = (l) => u.value = l)
        }), [
          O,
          (r(!0), i(q, null, B(e.options, (l) => (r(), i("option", {
            key: l.value,
            value: l.value
          }, p(l.label), 9, Q))), 128))
        ], 16, z), [
          [R, u.value]
        ])
      ]),
      afterInput: o(() => [
        s(e.$slots, "afterInput")
      ]),
      error: o((t) => [
        s(e.$slots, "error", a(n({ ...t })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  W as _
};
