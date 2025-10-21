import { defineComponent as L, mergeModels as g, useModel as I, ref as E, computed as _, openBlock as i, createBlock as C, unref as v, mergeProps as c, withCtx as s, renderSlot as o, normalizeProps as n, guardReactiveProps as u, createElementVNode as w, createElementBlock as $, withDirectives as D, vModelDynamic as F, createTextVNode as R } from "vue";
import { u as S } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ as T } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckboxMultiple.css';const N = { class: "queso-password" }, z = ["innerHTML"], A = ["type", "id", "name", "placeholder", "required", "disabled", "onMouseover", "onMouseleave", "onFocus", "onBlur"], j = /* @__PURE__ */ L({
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
    const y = S(p), d = I(p, "modelValue"), t = E(!1), P = _(() => t.value ? "text" : "password"), B = () => {
      t.value = !0;
    }, h = () => {
      t.value = !1;
    }, m = () => {
      t.value = !t.value;
    };
    return (e, a) => (i(), C(v(T), c({ class: "-password" }, v(y)), {
      beforeLabel: s(() => [
        o(e.$slots, "beforeLabel")
      ]),
      label: s((r) => [
        o(e.$slots, "label", n(u({ ...r })))
      ]),
      required: s((r) => [
        o(e.$slots, "required", n(u({ ...r })))
      ]),
      afterLabel: s(() => [
        o(e.$slots, "afterLabel")
      ]),
      beforeInput: s(() => [
        o(e.$slots, "beforeInput")
      ]),
      input: s(({ fieldID: r, fieldName: q, isRequired: M, isDisabled: V, isReadOnly: k, toggleIsActive: f, toggleIsHover: b }) => [
        w("div", N, [
          o(e.$slots, "beforePasswordInput"),
          k ? (i(), $("span", {
            key: 0,
            class: "queso-password__readonly",
            innerHTML: d.value
          }, null, 8, z)) : D((i(), $("input", c({
            key: 1,
            class: "queso-password__input",
            type: P.value,
            id: r,
            name: q,
            placeholder: e.placeholder,
            required: M,
            disabled: V,
            onMouseover: (l) => b(!0),
            onMouseleave: (l) => b(!1),
            onFocus: (l) => f(!0),
            onBlur: (l) => f(!1)
          }, e.extraAttributes, {
            "onUpdate:modelValue": a[0] || (a[0] = (l) => d.value = l)
          }), null, 16, A)), [
            [F, d.value]
          ]),
          o(e.$slots, "afterPasswordInput"),
          o(e.$slots, "toggleVisibilityButton", n(u({ isPasswordShow: t.value, togglePasswordVisibility: m, showPassword: B, hidePassword: h })), () => [
            w("button", {
              class: "queso-password__visibility-button",
              onClick: a[1] || (a[1] = (l) => m())
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
      error: s((r) => [
        o(e.$slots, "error", n(u({ ...r })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  j as _
};
