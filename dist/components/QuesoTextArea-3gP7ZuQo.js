import { defineComponent as h, mergeModels as y, useModel as L, openBlock as u, createBlock as T, unref as f, mergeProps as b, withCtx as t, renderSlot as r, normalizeProps as s, guardReactiveProps as a, createElementVNode as _, createElementBlock as c, withDirectives as k, vModelText as x } from "vue";
import { u as P } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ as V } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckboxMultiple.css';const A = { class: "queso-text-area" }, E = ["innerHTML"], I = ["id", "name", "placeholder", "required", "disabled", "onMouseover", "onMouseleave", "onFocus", "onBlur"], D = /* @__PURE__ */ h({
  __name: "QuesoTextArea",
  props: /* @__PURE__ */ y({
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
  setup(d) {
    const $ = P(d), n = L(d, "modelValue");
    return (o, i) => (u(), T(f(V), b({ class: "-text-area" }, f($)), {
      beforeLabel: t((e) => [
        r(o.$slots, "beforeLabel", s(a({ ...e })))
      ]),
      label: t((e) => [
        r(o.$slots, "label", s(a({ ...e })))
      ]),
      required: t((e) => [
        r(o.$slots, "required", s(a({ ...e })))
      ]),
      afterLabel: t((e) => [
        r(o.$slots, "afterLabel", s(a({ ...e })))
      ]),
      beforeInput: t((e) => [
        r(o.$slots, "beforeInput", s(a({ ...e })))
      ]),
      input: t(({ fieldID: e, fieldName: v, isRequired: M, isDisabled: q, isReadOnly: B, toggleIsActive: p, toggleIsHover: m }) => [
        _("div", A, [
          r(o.$slots, "beforeTextAreaInput"),
          B ? (u(), c("span", {
            key: 0,
            class: "queso-text-area__readonly",
            innerHTML: n.value
          }, null, 8, E)) : k((u(), c("textarea", b({
            key: 1,
            class: "queso-text-area__input",
            id: e,
            name: v,
            placeholder: o.placeholder,
            required: M,
            disabled: q,
            onMouseover: (l) => m(!0),
            onMouseleave: (l) => m(!1),
            onFocus: (l) => p(!0),
            onBlur: (l) => p(!1)
          }, o.extraAttributes, {
            "onUpdate:modelValue": i[0] || (i[0] = (l) => n.value = l)
          }), null, 16, I)), [
            [x, n.value]
          ]),
          r(o.$slots, "afterTextAreaInput")
        ])
      ]),
      afterInput: t((e) => [
        r(o.$slots, "afterInput", s(a({ ...e })))
      ]),
      error: t((e) => [
        r(o.$slots, "error", s(a({ ...e })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  D as _
};
