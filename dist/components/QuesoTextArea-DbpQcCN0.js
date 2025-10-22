import { defineComponent as b, mergeModels as c, useModel as $, openBlock as m, createBlock as g, unref as p, mergeProps as i, withCtx as t, renderSlot as r, normalizeProps as l, guardReactiveProps as s, createElementVNode as f, withDirectives as I, createElementBlock as q, vModelText as y } from "vue";
import { u as M } from "./QuesoCheckbox-oMH7omFq.js";
import { _ as B } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckboxMultiple.css';const h = { class: "queso-text-area" }, A = ["innerHTML"], L = ["id", "name", "placeholder", "required", "disabled", "onMouseover", "onMouseleave", "onFocus", "onBlur"], V = /* @__PURE__ */ b({
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
  setup(u) {
    const v = M(u), a = $(u, "modelValue");
    return (o, d) => (m(), g(p(B), i({ class: "-text-area" }, p(v)), {
      beforeLabel: t((e) => [
        r(o.$slots, "beforeLabel", l(s(e)))
      ]),
      label: t((e) => [
        r(o.$slots, "label", l(s(e)))
      ]),
      required: t((e) => [
        r(o.$slots, "required", l(s(e)))
      ]),
      afterLabel: t((e) => [
        r(o.$slots, "afterLabel", l(s(e)))
      ]),
      beforeInput: t((e) => [
        r(o.$slots, "beforeInput", l(s(e)))
      ]),
      input: t((e) => [
        f("div", h, [
          r(o.$slots, "beforeTextAreaInput", l(s(e))),
          e.isReadOnly ? r(o.$slots, "readOnly", l(i({ key: 0 }, e)), () => [
            f("span", {
              class: "queso-text-area__readonly",
              innerHTML: a.value
            }, null, 8, A)
          ]) : I((m(), q("textarea", i({
            key: 1,
            class: "queso-text-area__input",
            id: e.fieldID,
            name: e.fieldName,
            placeholder: o.placeholder,
            required: e.isRequired,
            disabled: e.isDisabled,
            onMouseover: (n) => e.toggleIsHover(!0),
            onMouseleave: (n) => e.toggleIsHover(!1),
            onFocus: (n) => e.toggleIsActive(!0),
            onBlur: (n) => e.toggleIsActive(!1)
          }, o.extraAttributes, {
            "onUpdate:modelValue": d[0] || (d[0] = (n) => a.value = n)
          }), null, 16, L)), [
            [y, a.value]
          ]),
          r(o.$slots, "afterTextAreaInput", l(s(e)))
        ])
      ]),
      afterInput: t((e) => [
        r(o.$slots, "afterInput", l(s(e)))
      ]),
      error: t((e) => [
        r(o.$slots, "error", l(s(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  V as _
};
