import { defineComponent as L, mergeModels as g, useModel as I, ref as E, computed as _, openBlock as i, createBlock as C, unref as v, mergeProps as c, withCtx as s, renderSlot as o, normalizeProps as n, guardReactiveProps as u, createElementVNode as w, createElementBlock as $, withDirectives as D, vModelDynamic as F, createTextVNode as R } from "vue";
import { u as T } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ as N } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckboxMultiple.css';const S = { class: "queso-password" }, z = ["innerHTML"], A = ["type", "id", "name", "placeholder", "required", "disabled", "onMouseover", "onMouseleave", "onFocus", "onBlur"], j = /* @__PURE__ */ L({
  __name: "QuesoPassword",
  props: /* @__PURE__ */ g({
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
  setup(p) {
    const y = T(p), d = I(p, "modelValue"), l = E(!1), P = _(() => l.value ? "text" : "password"), B = () => {
      l.value = !0;
    }, q = () => {
      l.value = !1;
    }, m = () => {
      l.value = !l.value;
    };
    return (e, a) => (i(), C(v(N), c({ class: "-password" }, v(y)), {
      beforeLabel: s(() => [
        o(e.$slots, "beforeLabel")
      ]),
      label: s((t) => [
        o(e.$slots, "label", n(u({ ...t })))
      ]),
      required: s((t) => [
        o(e.$slots, "required", n(u({ ...t })))
      ]),
      afterLabel: s(() => [
        o(e.$slots, "afterLabel")
      ]),
      beforeInput: s(() => [
        o(e.$slots, "beforeInput")
      ]),
      input: s(({ fieldID: t, fieldName: M, isRequired: h, isDisabled: V, isReadOnly: k, toggleIsActive: f, toggleIsHover: b }) => [
        w("div", S, [
          o(e.$slots, "beforePasswordInput"),
          k ? (i(), $("span", {
            key: 0,
            class: "queso-password__readonly",
            innerHTML: d.value
          }, null, 8, z)) : D((i(), $("input", c({
            key: 1,
            class: "queso-password__input",
            type: P.value,
            id: t,
            name: M,
            placeholder: e.placeholder,
            required: h,
            disabled: V,
            onMouseover: (r) => b(!0),
            onMouseleave: (r) => b(!1),
            onFocus: (r) => f(!0),
            onBlur: (r) => f(!1)
          }, e.extraAttributes, {
            "onUpdate:modelValue": a[0] || (a[0] = (r) => d.value = r)
          }), null, 16, A)), [
            [F, d.value]
          ]),
          o(e.$slots, "afterPasswordInput"),
          o(e.$slots, "toggleVisibilityButton", n(u({ togglePasswordVisibility: m, showPassword: B, hidePassword: q })), () => [
            w("button", {
              class: "queso-password__visibility-button",
              onClick: a[1] || (a[1] = (r) => m())
            }, [
              o(e.$slots, "toggleVisibilityButtonIcon", {}, () => [
                R("◎")
              ])
            ])
          ])
        ])
      ]),
      afterInput: s(() => [
        o(e.$slots, "afterInput")
      ]),
      error: s((t) => [
        o(e.$slots, "error", n(u({ ...t })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  j as _
};
