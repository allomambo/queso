import "../assets/components/QuesoTextArea.css";
import { defineComponent as $, openBlock as n, createBlock as b, unref as F, withCtx as r, renderSlot as l, normalizeProps as d, guardReactiveProps as i, createElementVNode as M, createElementBlock as p } from "vue";
import { _ as k } from "./QuesoField-DRuioO9o.js";
const q = { class: "queso-text-area" }, B = ["innerHTML"], x = ["name", "id", "value", "placeholder", "required", "autocomplete", "disabled", "onInput", "onMouseover", "onMouseleave", "onFocus", "onBlur"], P = /* @__PURE__ */ $({
  __name: "QuesoTextArea",
  props: {
    placeholder: { default: "" }
  },
  setup(y) {
    return (e, T) => (n(), b(F(k), null, {
      label: r((o) => [
        l(e.$slots, "label", d(i({ ...o })))
      ]),
      beforeField: r(() => [
        l(e.$slots, "beforeField")
      ]),
      field: r(({
        fieldID: o,
        fieldName: c,
        fieldValue: t,
        fieldAutocomplete: _,
        updateValue: m,
        toggleIsActive: s,
        toggleIsHover: u,
        isRequired: f,
        isDisabled: v,
        isReadOnly: h
      }) => [
        M("div", q, [
          h ? (n(), p("span", {
            key: 0,
            class: "queso-text-area__readonly",
            innerHTML: t
          }, null, 8, B)) : (n(), p("textarea", {
            key: 1,
            name: c,
            id: o,
            value: t,
            class: "queso-text-area__input",
            placeholder: e.placeholder,
            required: f,
            autocomplete: _,
            disabled: v,
            onInput: m,
            onMouseover: (a) => u(!0),
            onMouseleave: (a) => u(!1),
            onFocus: (a) => s(!0),
            onBlur: (a) => s(!1)
          }, null, 40, x))
        ])
      ]),
      afterField: r(() => [
        l(e.$slots, "afterField")
      ]),
      error: r((o) => [
        l(e.$slots, "error", d(i({ ...o })))
      ]),
      _: 3
    }));
  }
});
export {
  P as _
};
