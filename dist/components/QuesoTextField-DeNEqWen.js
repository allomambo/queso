import { defineComponent as b, mergeModels as c, useModel as y, openBlock as p, createBlock as $, unref as f, mergeProps as u, withCtx as s, renderSlot as o, normalizeProps as r, guardReactiveProps as t, createElementVNode as m, withDirectives as g, createElementBlock as I, vModelDynamic as q } from "vue";
import { u as M } from "./QuesoCheckbox-oMH7omFq.js";
import { _ as B } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckboxMultiple.css';const h = { class: "queso-text-field" }, F = ["innerHTML"], L = ["type", "id", "name", "placeholder", "required", "disabled", "onMouseover", "onMouseleave", "onFocus", "onBlur"], V = /* @__PURE__ */ b({
  __name: "QuesoTextField",
  props: /* @__PURE__ */ c({
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
  setup(d) {
    const v = M(d), i = y(d, "modelValue");
    return (l, a) => (p(), $(f(B), u({ class: "-text-field" }, f(v)), {
      beforeLabel: s((e) => [
        o(l.$slots, "beforeLabel", r(t(e)))
      ]),
      label: s((e) => [
        o(l.$slots, "label", r(t(e)))
      ]),
      required: s((e) => [
        o(l.$slots, "required", r(t(e)))
      ]),
      afterLabel: s((e) => [
        o(l.$slots, "afterLabel", r(t(e)))
      ]),
      beforeInput: s((e) => [
        o(l.$slots, "beforeInput", r(t(e)))
      ]),
      input: s((e) => [
        m("div", h, [
          o(l.$slots, "beforeTextFieldInput", r(t(e))),
          e.isReadOnly ? o(l.$slots, "readOnly", r(u({ key: 0 }, e)), () => [
            m("span", {
              class: "queso-text-field__readonly",
              innerHTML: i.value
            }, null, 8, F)
          ]) : g((p(), I("input", u({
            key: 1,
            class: "queso-text-field__input",
            type: l.type,
            id: e.fieldID,
            name: e.fieldName,
            placeholder: l.placeholder,
            required: e.isRequired,
            disabled: e.isDisabled,
            onMouseover: (n) => e.toggleIsHover(!0),
            onMouseleave: (n) => e.toggleIsHover(!1),
            onFocus: (n) => e.toggleIsActive(!0),
            onBlur: (n) => e.toggleIsActive(!1)
          }, l.extraAttributes, {
            "onUpdate:modelValue": a[0] || (a[0] = (n) => i.value = n)
          }), null, 16, L)), [
            [q, i.value]
          ]),
          o(l.$slots, "afterTextFieldInput", r(t(e)))
        ])
      ]),
      afterInput: s((e) => [
        o(l.$slots, "afterInput", r(t(e)))
      ]),
      error: s((e) => [
        o(l.$slots, "error", r(t(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  V as _
};
