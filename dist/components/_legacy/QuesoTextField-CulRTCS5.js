import { defineComponent as b, openBlock as s, createBlock as h, unref as $, withCtx as t, renderSlot as r, normalizeProps as u, guardReactiveProps as i, createElementVNode as y, createElementBlock as p } from "vue";
import { Q as M } from "./QuesoField--_tAD3Z8.js";
import { _ as Q } from "./QuesoCheckbox-BupGfZ9J.js";
import '../../assets/components/QuesoTextArea.css';const k = { class: "queso-text-field" }, q = ["innerHTML"], B = ["type", "value", "name", "id", "placeholder", "required", "autocomplete", "disabled", "onInput", "onMouseover", "onMouseleave", "onFocus", "onBlur"], T = /* @__PURE__ */ b({
  __name: "QuesoTextField",
  props: {
    type: { default: "text" },
    placeholder: { default: "" }
  },
  setup(x) {
    return console.warn("<QuesoTextFieldLegacy> is deprecated. It will be removed on v1.0 version."), (e, w) => (s(), h($(M), null, {
      label: t((o) => [
        r(e.$slots, "label", u(i({ ...o })), void 0, !0)
      ]),
      beforeField: t(() => [
        r(e.$slots, "beforeField", {}, void 0, !0)
      ]),
      field: t(({
        fieldID: o,
        fieldName: c,
        fieldValue: n,
        fieldAutocomplete: f,
        updateValue: v,
        toggleIsActive: a,
        toggleIsHover: d,
        isRequired: m,
        isDisabled: _,
        isReadOnly: F
      }) => [
        y("div", k, [
          F ? (s(), p("span", {
            key: 0,
            class: "queso-text-field__readonly",
            innerHTML: n
          }, null, 8, q)) : (s(), p("input", {
            key: 1,
            type: e.type,
            value: n,
            name: c,
            id: o,
            placeholder: e.placeholder,
            class: "queso-text-field__input",
            required: m,
            autocomplete: f,
            disabled: _,
            onInput: v,
            onMouseover: (l) => d(!0),
            onMouseleave: (l) => d(!1),
            onFocus: (l) => a(!0),
            onBlur: (l) => a(!1)
          }, null, 40, B)),
          r(e.$slots, "after", {}, void 0, !0)
        ])
      ]),
      afterField: t(() => [
        r(e.$slots, "afterField", {}, void 0, !0)
      ]),
      error: t((o) => [
        r(e.$slots, "error", u(i({ ...o })), void 0, !0)
      ]),
      _: 3
    }));
  }
}), I = /* @__PURE__ */ Q(T, [["__scopeId", "data-v-47cb95bf"]]);
export {
  I as Q
};
