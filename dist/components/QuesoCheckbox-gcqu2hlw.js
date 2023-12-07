import "../assets/components/QuesoCheckbox.css";
import { defineComponent as v, openBlock as l, createBlock as d, unref as q, withCtx as o, renderSlot as c, resolveDynamicComponent as C, normalizeClass as $, createElementVNode as n, createTextVNode as F, createElementBlock as M, createCommentVNode as B, normalizeProps as y, guardReactiveProps as N } from "vue";
import { _ as T } from "./QuesoField-DRuioO9o.js";
const z = /* @__PURE__ */ n("span", { class: "queso-checkbox__hidden-label" }, null, -1), E = { class: "queso-checkbox__box" }, L = { class: "queso-checkbox__box__symbol" }, P = { class: "queso-checkbox__label" }, S = ["innerHTML"], V = ["checked", "name", "id", "required", "autocomplete", "disabled", "onChange", "onFocus", "onBlur"], j = /* @__PURE__ */ v({
  __name: "QuesoCheckbox",
  setup(g) {
    const h = (e, a) => {
      a(e.target.checked);
    };
    return (e, a) => (l(), d(q(T), null, {
      label: o(() => [
        z
      ]),
      beforeField: o(() => [
        c(e.$slots, "beforeField")
      ]),
      field: o(({
        fieldID: t,
        fieldName: b,
        fieldValue: r,
        fieldLabel: m,
        fieldAutocomplete: p,
        updateValue: k,
        toggleIsActive: _,
        toggleIsHover: u,
        isRequired: f,
        isDisabled: x,
        isReadOnly: i
      }) => [
        (l(), d(C(i ? "div" : "label"), {
          class: $(["queso-checkbox", { "is-checked": r }]),
          for: t,
          onMouseover: (s) => u(!0),
          onMouseleave: (s) => u(!1)
        }, {
          default: o(() => [
            n("span", E, [
              n("span", L, [
                c(e.$slots, "symbol", {}, () => [
                  F("✔︎")
                ])
              ])
            ]),
            n("span", P, [
              n("span", {
                class: "queso-checkbox__label__text",
                innerHTML: m
              }, null, 8, S)
            ])
          ]),
          _: 2
        }, 1064, ["for", "class", "onMouseover", "onMouseleave"])),
        i ? B("", !0) : (l(), M("input", {
          key: 0,
          type: "checkbox",
          class: "queso-checkbox__native",
          checked: r,
          name: b,
          id: t,
          required: f,
          autocomplete: p,
          disabled: x,
          onChange: (s) => h(s, k),
          onFocus: (s) => _(!0),
          onBlur: (s) => _(!1)
        }, null, 40, V))
      ]),
      afterField: o(() => [
        c(e.$slots, "afterField")
      ]),
      error: o((t) => [
        c(e.$slots, "error", y(N({ ...t })))
      ]),
      _: 3
    }));
  }
});
export {
  j as _
};
