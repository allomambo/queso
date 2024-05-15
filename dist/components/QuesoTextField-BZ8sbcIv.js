import { defineComponent as B, mergeModels as h, useModel as F, openBlock as a, createBlock as L, unref as m, mergeProps as b, withCtx as l, renderSlot as o, normalizeProps as n, guardReactiveProps as d, createElementVNode as k, createElementBlock as c, withDirectives as P, vModelDynamic as T } from "vue";
import { u as V } from "./QuesoCheckbox-CSerLn51.js";
import { _ } from "./QuesoField-DL0yjp-z.js";
import '../assets/components/QuesoTextArea.css';const E = { class: "queso-text-field" }, I = ["innerHTML"], x = ["type", "id", "name", "placeholder", "required", "disabled", "onMouseover", "onMouseleave", "onFocus", "onBlur"], z = /* @__PURE__ */ B({
  __name: "QuesoTextField",
  props: /* @__PURE__ */ h({
    type: { default: "text" },
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
    modelValue: { required: !0, default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(u) {
    const $ = V(u), s = F(u, "modelValue");
    return (e, i) => (a(), L(m(_), b({ class: "-text-field" }, m($)), {
      beforeLabel: l(() => [
        o(e.$slots, "beforeLabel")
      ]),
      label: l((t) => [
        o(e.$slots, "label", n(d({ ...t })))
      ]),
      required: l((t) => [
        o(e.$slots, "required", n(d({ ...t })))
      ]),
      afterLabel: l(() => [
        o(e.$slots, "afterLabel")
      ]),
      beforeInput: l(() => [
        o(e.$slots, "beforeInput")
      ]),
      input: l(({ fieldID: t, fieldName: v, isRequired: y, isDisabled: M, isReadOnly: q, toggleIsActive: p, toggleIsHover: f }) => [
        k("div", E, [
          o(e.$slots, "beforeTextFieldInput"),
          q ? (a(), c("span", {
            key: 0,
            class: "queso-text-field__readonly",
            innerHTML: s.value
          }, null, 8, I)) : P((a(), c("input", b({
            key: 1,
            class: "queso-text-field__input",
            type: e.type,
            id: t,
            name: v,
            placeholder: e.placeholder,
            required: y,
            disabled: M,
            onMouseover: (r) => f(!0),
            onMouseleave: (r) => f(!1),
            onFocus: (r) => p(!0),
            onBlur: (r) => p(!1)
          }, e.extraAttributes, {
            "onUpdate:modelValue": i[0] || (i[0] = (r) => s.value = r)
          }), null, 16, x)), [
            [T, s.value]
          ]),
          o(e.$slots, "afterTextFieldInput")
        ])
      ]),
      afterInput: l(() => [
        o(e.$slots, "afterInput")
      ]),
      error: l((t) => [
        o(e.$slots, "error", n(d({ ...t })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  z as _
};
