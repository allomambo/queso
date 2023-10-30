import "../assets/TextArea.css";
import { defineComponent as b, openBlock as n, createBlock as x, unref as F, withCtx as o, renderSlot as t, normalizeProps as d, guardReactiveProps as i, createElementVNode as M, createElementBlock as _ } from "vue";
import { _ as k } from "./FieldBase-03e4e23e.js";
const q = { class: "queso-text-area" }, y = ["innerHTML"], B = ["name", "id", "value", "placeholder", "required", "autocomplete", "disabled", "onInput", "onMouseover", "onMouseleave", "onFocus", "onBlur"], P = /* @__PURE__ */ b({
  __name: "TextArea",
  props: {
    placeholder: { default: "" }
  },
  setup(c) {
    return (r, T) => (n(), x(F(k), null, {
      label: o((e) => [
        t(r.$slots, "label", d(i({ ...e })))
      ]),
      beforeField: o(() => [
        t(r.$slots, "beforeField")
      ]),
      field: o(({
        fieldID: e,
        fieldName: p,
        fieldValue: a,
        fieldAutocomplete: m,
        updateValue: f,
        toggleIsActive: s,
        toggleIsHover: u,
        isRequired: v,
        isDisabled: h,
        isReadOnly: $
      }) => [
        M("div", q, [
          $ ? (n(), _("span", {
            key: 0,
            class: "queso-text-area__readonly",
            innerHTML: a
          }, null, 8, y)) : (n(), _("textarea", {
            key: 1,
            name: p,
            id: e,
            value: a,
            class: "queso-text-area__input",
            placeholder: c.placeholder,
            required: v,
            autocomplete: m,
            disabled: h,
            onInput: f,
            onMouseover: (l) => u(!0),
            onMouseleave: (l) => u(!1),
            onFocus: (l) => s(!0),
            onBlur: (l) => s(!1)
          }, null, 40, B))
        ])
      ]),
      afterField: o(() => [
        t(r.$slots, "afterField")
      ]),
      error: o((e) => [
        t(r.$slots, "error", d(i({ ...e })))
      ]),
      _: 3
    }));
  }
});
export {
  P as _
};
