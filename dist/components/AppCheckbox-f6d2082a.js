import "../assets/AppCheckbox.css";
import { defineComponent as v, openBlock as l, createBlock as d, unref as C, withCtx as o, renderSlot as c, resolveDynamicComponent as q, normalizeClass as $, createElementVNode as n, createTextVNode as y, createElementBlock as F, createCommentVNode as M, normalizeProps as B, guardReactiveProps as N } from "vue";
import { _ as T } from "./FieldBase-03e4e23e.js";
const g = /* @__PURE__ */ n("span", { class: "queso-checkbox__hidden-label" }, null, -1), z = { class: "queso-checkbox__box" }, E = { class: "queso-checkbox__box__symbol" }, L = { class: "queso-checkbox__label" }, P = ["innerHTML"], S = ["checked", "name", "id", "required", "autocomplete", "disabled", "onChange", "onFocus", "onBlur"], j = /* @__PURE__ */ v({
  __name: "AppCheckbox",
  setup(V) {
    const h = (e, a) => {
      a(e.target.checked);
    };
    return (e, a) => (l(), d(C(T), null, {
      label: o(() => [
        g
      ]),
      beforeField: o(() => [
        c(e.$slots, "beforeField")
      ]),
      field: o(({
        fieldID: t,
        fieldName: p,
        fieldValue: r,
        fieldLabel: b,
        fieldAutocomplete: m,
        updateValue: k,
        toggleIsActive: _,
        toggleIsHover: u,
        isRequired: x,
        isDisabled: f,
        isReadOnly: i
      }) => [
        (l(), d(q(i ? "div" : "label"), {
          class: $(["queso-checkbox", { "is-checked": r }]),
          for: t,
          onMouseover: (s) => u(!0),
          onMouseleave: (s) => u(!1)
        }, {
          default: o(() => [
            n("span", z, [
              n("span", E, [
                c(e.$slots, "symbol", {}, () => [
                  y("✔︎")
                ])
              ])
            ]),
            n("span", L, [
              n("span", {
                class: "queso-checkbox__label__text",
                innerHTML: b
              }, null, 8, P)
            ])
          ]),
          _: 2
        }, 1064, ["for", "class", "onMouseover", "onMouseleave"])),
        i ? M("", !0) : (l(), F("input", {
          key: 0,
          type: "checkbox",
          class: "queso-checkbox__native",
          checked: r,
          name: p,
          id: t,
          required: x,
          autocomplete: m,
          disabled: f,
          onChange: (s) => h(s, k),
          onFocus: (s) => _(!0),
          onBlur: (s) => _(!1)
        }, null, 40, S))
      ]),
      afterField: o(() => [
        c(e.$slots, "afterField")
      ]),
      error: o((t) => [
        c(e.$slots, "error", B(N({ ...t })))
      ]),
      _: 3
    }));
  }
});
export {
  j as _
};
