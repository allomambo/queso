import { defineComponent as c, mergeModels as b, useModel as $, openBlock as a, createBlock as y, unref as f, mergeProps as m, withCtx as s, renderSlot as o, normalizeProps as t, guardReactiveProps as r, createElementVNode as p, withDirectives as g, createElementBlock as I, vModelDynamic as q } from "vue";
import { u as M } from "./QuesoCheckbox-DHwgNiJt.js";
import { _ as B } from "./QuesoField-DQ3NyaNX.js";
import '../assets/components/QuesoCheckboxMultiple.css';const h = { class: "queso-text-field" }, F = ["innerHTML"], L = ["type", "id", "name", "placeholder", "required", "disabled", "onMouseover", "onMouseleave", "onFocus", "onBlur"], k = /* @__PURE__ */ c({
  __name: "QuesoTextField",
  props: /* @__PURE__ */ b({
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
  setup(n) {
    const v = M(n), u = $(n, "modelValue");
    return (l, d) => (a(), y(f(B), m({ class: "-text-field" }, f(v)), {
      beforeLabel: s((e) => [
        o(l.$slots, "beforeLabel", t(r(e)))
      ]),
      label: s((e) => [
        o(l.$slots, "label", t(r(e)))
      ]),
      required: s((e) => [
        o(l.$slots, "required", t(r(e)))
      ]),
      afterLabel: s((e) => [
        o(l.$slots, "afterLabel", t(r(e)))
      ]),
      beforeInput: s((e) => [
        o(l.$slots, "beforeInput", t(r(e)))
      ]),
      input: s((e) => [
        p("div", h, [
          o(l.$slots, "beforeTextFieldInput", t(r(e))),
          e.isReadOnly ? o(l.$slots, "readOnly", t(r(e)), () => [
            p("span", {
              class: "queso-text-field__readonly",
              innerHTML: u.value
            }, null, 8, F)
          ], void 0, 0) : g((a(), I("input", m({
            key: 1,
            class: "queso-text-field__input",
            type: n.type,
            id: e.fieldID,
            name: e.fieldName,
            placeholder: n.placeholder,
            required: e.isRequired,
            disabled: e.isDisabled,
            onMouseover: (i) => e.toggleIsHover(!0),
            onMouseleave: (i) => e.toggleIsHover(!1),
            onFocus: (i) => e.toggleIsActive(!0),
            onBlur: (i) => e.toggleIsActive(!1)
          }, n.extraAttributes, {
            "onUpdate:modelValue": d[0] || (d[0] = (i) => u.value = i)
          }), null, 16, L)), [
            [q, u.value]
          ]),
          o(l.$slots, "afterTextFieldInput", t(r(e)))
        ])
      ]),
      afterInput: s((e) => [
        o(l.$slots, "afterInput", t(r(e)))
      ]),
      error: s((e) => [
        o(l.$slots, "error", t(r(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  k as _
};
