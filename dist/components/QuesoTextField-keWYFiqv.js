import "../assets/components/QuesoTextArea.css";
import { defineComponent as h, openBlock as n, createBlock as y, unref as F, withCtx as l, renderSlot as t, normalizeProps as d, guardReactiveProps as i, createElementVNode as b, createElementBlock as p } from "vue";
import { _ as M } from "./QuesoField-DRuioO9o.js";
const k = { class: "queso-text-field" }, q = ["innerHTML"], B = ["type", "value", "name", "id", "placeholder", "required", "autocomplete", "disabled", "onInput", "onMouseover", "onMouseleave", "onFocus", "onBlur"], w = /* @__PURE__ */ h({
  __name: "QuesoTextField",
  props: {
    type: { default: "text" },
    placeholder: { default: "" }
  },
  setup(T) {
    return (e, C) => (n(), y(F(M), null, {
      label: l((o) => [
        t(e.$slots, "label", d(i({ ...o })))
      ]),
      beforeField: l(() => [
        t(e.$slots, "beforeField")
      ]),
      field: l(({
        fieldID: o,
        fieldName: c,
        fieldValue: s,
        fieldAutocomplete: f,
        updateValue: m,
        toggleIsActive: a,
        toggleIsHover: u,
        isRequired: _,
        isDisabled: v,
        isReadOnly: $
      }) => [
        b("div", k, [
          $ ? (n(), p("span", {
            key: 0,
            class: "queso-text-field__readonly",
            innerHTML: s
          }, null, 8, q)) : (n(), p("input", {
            key: 1,
            type: e.type,
            value: s,
            name: c,
            id: o,
            placeholder: e.placeholder,
            class: "queso-text-field__input",
            required: _,
            autocomplete: f,
            disabled: v,
            onInput: m,
            onMouseover: (r) => u(!0),
            onMouseleave: (r) => u(!1),
            onFocus: (r) => a(!0),
            onBlur: (r) => a(!1)
          }, null, 40, B)),
          t(e.$slots, "after")
        ])
      ]),
      afterField: l(() => [
        t(e.$slots, "afterField")
      ]),
      error: l((o) => [
        t(e.$slots, "error", d(i({ ...o })))
      ]),
      _: 3
    }));
  }
});
export {
  w as _
};
