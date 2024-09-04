import { defineComponent as B, mergeModels as h, useModel as F, openBlock as d, createBlock as L, unref as m, mergeProps as b, withCtx as t, renderSlot as l, normalizeProps as r, guardReactiveProps as s, createElementVNode as k, createElementBlock as c, withDirectives as P, vModelDynamic as T } from "vue";
import { u as V } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckboxMultiple.css';const E = { class: "queso-text-field" }, I = ["innerHTML"], x = ["type", "id", "name", "placeholder", "required", "disabled", "onMouseover", "onMouseleave", "onFocus", "onBlur"], z = /* @__PURE__ */ B({
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
    const $ = V(u), n = F(u, "modelValue");
    return (o, i) => (d(), L(m(_), b({ class: "-text-field" }, m($)), {
      beforeLabel: t((e) => [
        l(o.$slots, "beforeLabel", r(s({ ...e })))
      ]),
      label: t((e) => [
        l(o.$slots, "label", r(s({ ...e })))
      ]),
      required: t((e) => [
        l(o.$slots, "required", r(s({ ...e })))
      ]),
      afterLabel: t((e) => [
        l(o.$slots, "afterLabel", r(s({ ...e })))
      ]),
      beforeInput: t((e) => [
        l(o.$slots, "beforeInput", r(s({ ...e })))
      ]),
      input: t(({ fieldID: e, fieldName: v, isRequired: y, isDisabled: M, isReadOnly: q, toggleIsActive: p, toggleIsHover: f }) => [
        k("div", E, [
          l(o.$slots, "beforeTextFieldInput"),
          q ? (d(), c("span", {
            key: 0,
            class: "queso-text-field__readonly",
            innerHTML: n.value
          }, null, 8, I)) : P((d(), c("input", b({
            key: 1,
            class: "queso-text-field__input",
            type: o.type,
            id: e,
            name: v,
            placeholder: o.placeholder,
            required: y,
            disabled: M,
            onMouseover: (a) => f(!0),
            onMouseleave: (a) => f(!1),
            onFocus: (a) => p(!0),
            onBlur: (a) => p(!1)
          }, o.extraAttributes, {
            "onUpdate:modelValue": i[0] || (i[0] = (a) => n.value = a)
          }), null, 16, x)), [
            [T, n.value]
          ]),
          l(o.$slots, "afterTextFieldInput")
        ])
      ]),
      afterInput: t((e) => [
        l(o.$slots, "afterInput", r(s({ ...e })))
      ]),
      error: t((e) => [
        l(o.$slots, "error", r(s({ ...e })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  z as _
};
