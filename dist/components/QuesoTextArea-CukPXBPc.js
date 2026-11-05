import { defineComponent as b, mergeModels as c, useModel as $, openBlock as d, createBlock as g, unref as m, mergeProps as f, withCtx as s, renderSlot as r, normalizeProps as l, guardReactiveProps as t, createElementVNode as p, withDirectives as I, createElementBlock as q, vModelText as M } from "vue";
import { u as y } from "./QuesoCheckbox-DHwgNiJt.js";
import { _ as B } from "./QuesoField-DQ3NyaNX.js";
import '../assets/components/QuesoCheckboxMultiple.css';const h = { class: "queso-text-area" }, A = ["innerHTML"], L = ["id", "name", "placeholder", "required", "disabled", "onMouseover", "onMouseleave", "onFocus", "onBlur"], k = /* @__PURE__ */ b({
  __name: "QuesoTextArea",
  props: /* @__PURE__ */ c({
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
  setup(a) {
    const v = y(a), i = $(a, "modelValue");
    return (o, u) => (d(), g(m(B), f({ class: "-text-area" }, m(v)), {
      beforeLabel: s((e) => [
        r(o.$slots, "beforeLabel", l(t(e)))
      ]),
      label: s((e) => [
        r(o.$slots, "label", l(t(e)))
      ]),
      required: s((e) => [
        r(o.$slots, "required", l(t(e)))
      ]),
      afterLabel: s((e) => [
        r(o.$slots, "afterLabel", l(t(e)))
      ]),
      beforeInput: s((e) => [
        r(o.$slots, "beforeInput", l(t(e)))
      ]),
      input: s((e) => [
        p("div", h, [
          r(o.$slots, "beforeTextAreaInput", l(t(e))),
          e.isReadOnly ? r(o.$slots, "readOnly", l(t(e)), () => [
            p("span", {
              class: "queso-text-area__readonly",
              innerHTML: i.value
            }, null, 8, A)
          ], void 0, 0) : I((d(), q("textarea", f({
            key: 1,
            class: "queso-text-area__input",
            id: e.fieldID,
            name: e.fieldName,
            placeholder: a.placeholder,
            required: e.isRequired,
            disabled: e.isDisabled,
            onMouseover: (n) => e.toggleIsHover(!0),
            onMouseleave: (n) => e.toggleIsHover(!1),
            onFocus: (n) => e.toggleIsActive(!0),
            onBlur: (n) => e.toggleIsActive(!1)
          }, a.extraAttributes, {
            "onUpdate:modelValue": u[0] || (u[0] = (n) => i.value = n)
          }), null, 16, L)), [
            [M, i.value]
          ]),
          r(o.$slots, "afterTextAreaInput", l(t(e)))
        ])
      ]),
      afterInput: s((e) => [
        r(o.$slots, "afterInput", l(t(e)))
      ]),
      error: s((e) => [
        r(o.$slots, "error", l(t(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  k as _
};
