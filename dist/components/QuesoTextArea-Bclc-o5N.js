import { defineComponent as h, mergeModels as y, useModel as L, openBlock as l, createBlock as T, unref as f, mergeProps as b, withCtx as r, renderSlot as o, normalizeProps as n, guardReactiveProps as u, createElementVNode as _, createElementBlock as c, withDirectives as k, vModelText as x } from "vue";
import { u as P } from "./QuesoCheckbox-CSerLn51.js";
import { _ as V } from "./QuesoField-DL0yjp-z.js";
import '../assets/components/QuesoTextArea.css';const A = { class: "queso-text-area" }, E = ["innerHTML"], I = ["id", "name", "placeholder", "required", "disabled", "onMouseover", "onMouseleave", "onFocus", "onBlur"], D = /* @__PURE__ */ h({
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
    const $ = P(d), a = L(d, "modelValue");
    return (e, i) => (l(), T(f(V), b({ class: "-text-area" }, f($)), {
      beforeLabel: r(() => [
        o(e.$slots, "beforeLabel")
      ]),
      label: r((t) => [
        o(e.$slots, "label", n(u({ ...t })))
      ]),
      required: r((t) => [
        o(e.$slots, "required", n(u({ ...t })))
      ]),
      afterLabel: r(() => [
        o(e.$slots, "afterLabel")
      ]),
      beforeInput: r(() => [
        o(e.$slots, "beforeInput")
      ]),
      input: r(({ fieldID: t, fieldName: v, isRequired: M, isDisabled: q, isReadOnly: B, toggleIsActive: p, toggleIsHover: m }) => [
        _("div", A, [
          o(e.$slots, "beforeTextAreaInput"),
          B ? (l(), c("span", {
            key: 0,
            class: "queso-text-area__readonly",
            innerHTML: a.value
          }, null, 8, E)) : k((l(), c("textarea", b({
            key: 1,
            class: "queso-text-area__input",
            id: t,
            name: v,
            placeholder: e.placeholder,
            required: M,
            disabled: q,
            onMouseover: (s) => m(!0),
            onMouseleave: (s) => m(!1),
            onFocus: (s) => p(!0),
            onBlur: (s) => p(!1)
          }, e.extraAttributes, {
            "onUpdate:modelValue": i[0] || (i[0] = (s) => a.value = s)
          }), null, 16, I)), [
            [x, a.value]
          ]),
          o(e.$slots, "afterTextAreaInput")
        ])
      ]),
      afterInput: r(() => [
        o(e.$slots, "afterInput")
      ]),
      error: r((t) => [
        o(e.$slots, "error", n(u({ ...t })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  D as _
};
