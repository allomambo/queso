import "../assets/TextField.css";
import { defineComponent as y, openBlock as r, createBlock as F, unref as b, withCtx as t, renderSlot as l, normalizeProps as i, guardReactiveProps as p, createElementVNode as M, createElementBlock as c } from "vue";
import { _ as k } from "./FieldBase-03e4e23e.js";
const q = { class: "queso-text-field" }, x = ["innerHTML"], B = ["type", "value", "name", "id", "placeholder", "required", "autocomplete", "disabled", "onInput", "onMouseover", "onMouseleave", "onFocus", "onBlur"], P = /* @__PURE__ */ y({
  __name: "TextField",
  props: {
    type: { default: "text" },
    placeholder: { default: "" }
  },
  setup(s) {
    return (e, T) => (r(), F(b(k), null, {
      label: t((o) => [
        l(e.$slots, "label", i(p({ ...o })))
      ]),
      beforeField: t(() => [
        l(e.$slots, "beforeField")
      ]),
      field: t(({
        fieldID: o,
        fieldName: _,
        fieldValue: a,
        fieldAutocomplete: f,
        updateValue: m,
        toggleIsActive: u,
        toggleIsHover: d,
        isRequired: v,
        isDisabled: $,
        isReadOnly: h
      }) => [
        M("div", q, [
          h ? (r(), c("span", {
            key: 0,
            class: "queso-text-field__readonly",
            innerHTML: a
          }, null, 8, x)) : (r(), c("input", {
            key: 1,
            type: s.type,
            value: a,
            name: _,
            id: o,
            placeholder: s.placeholder,
            class: "queso-text-field__input",
            required: v,
            autocomplete: f,
            disabled: $,
            onInput: m,
            onMouseover: (n) => d(!0),
            onMouseleave: (n) => d(!1),
            onFocus: (n) => u(!0),
            onBlur: (n) => u(!1)
          }, null, 40, B)),
          l(e.$slots, "after")
        ])
      ]),
      afterField: t(() => [
        l(e.$slots, "afterField")
      ]),
      error: t((o) => [
        l(e.$slots, "error", i(p({ ...o })))
      ]),
      _: 3
    }));
  }
});
export {
  P as _
};
