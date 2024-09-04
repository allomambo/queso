import { defineComponent as $, openBlock as s, createBlock as b, unref as F, withCtx as r, renderSlot as t, normalizeProps as d, guardReactiveProps as i, createElementVNode as x, createElementBlock as c } from "vue";
import { Q as M } from "./QuesoField--_tAD3Z8.js";
import { _ as Q } from "./QuesoCheckbox-BupGfZ9J.js";
import '../../assets/components/QuesoCheckboxMultiple.css';const k = { class: "queso-text-area" }, q = ["innerHTML"], B = ["name", "id", "value", "placeholder", "required", "autocomplete", "disabled", "onInput", "onMouseover", "onMouseleave", "onFocus", "onBlur"], T = /* @__PURE__ */ $({
  __name: "QuesoTextArea",
  props: {
    placeholder: { default: "" }
  },
  setup(y) {
    return console.warn("<QuesoTextAreaLegacy> is deprecated. It will be removed on v1.0 version."), (e, w) => (s(), b(F(M), null, {
      label: r((o) => [
        t(e.$slots, "label", d(i({ ...o })), void 0, !0)
      ]),
      beforeField: r(() => [
        t(e.$slots, "beforeField", {}, void 0, !0)
      ]),
      field: r(({
        fieldID: o,
        fieldName: p,
        fieldValue: l,
        fieldAutocomplete: _,
        updateValue: v,
        toggleIsActive: n,
        toggleIsHover: u,
        isRequired: m,
        isDisabled: f,
        isReadOnly: h
      }) => [
        x("div", k, [
          h ? (s(), c("span", {
            key: 0,
            class: "queso-text-area__readonly",
            innerHTML: l
          }, null, 8, q)) : (s(), c("textarea", {
            key: 1,
            name: p,
            id: o,
            value: l,
            class: "queso-text-area__input",
            placeholder: e.placeholder,
            required: m,
            autocomplete: _,
            disabled: f,
            onInput: v,
            onMouseover: (a) => u(!0),
            onMouseleave: (a) => u(!1),
            onFocus: (a) => n(!0),
            onBlur: (a) => n(!1)
          }, null, 40, B))
        ])
      ]),
      afterField: r(() => [
        t(e.$slots, "afterField", {}, void 0, !0)
      ]),
      error: r((o) => [
        t(e.$slots, "error", d(i({ ...o })), void 0, !0)
      ]),
      _: 3
    }));
  }
}), E = /* @__PURE__ */ Q(T, [["__scopeId", "data-v-f52f4088"]]);
export {
  E as Q
};
