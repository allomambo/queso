import { defineComponent as C, openBlock as d, createBlock as h, unref as q, withCtx as t, renderSlot as a, resolveDynamicComponent as $, normalizeClass as F, createElementVNode as n, createTextVNode as y, createElementBlock as M, createCommentVNode as Q, normalizeProps as B, guardReactiveProps as S, pushScopeId as w, popScopeId as g } from "vue";
import { Q as L } from "./QuesoField--_tAD3Z8.js";
import '../../assets/components/_legacy/QuesoCheckbox.css';const N = (o, l) => {
  const e = o.__vccOpts || o;
  for (const [r, s] of l)
    e[r] = s;
  return e;
}, T = (o) => (w("data-v-ff164339"), o = o(), g(), o), z = /* @__PURE__ */ T(() => /* @__PURE__ */ n("span", { class: "queso-checkbox__hidden-label" }, null, -1)), E = { class: "queso-checkbox__box" }, I = { class: "queso-checkbox__box__symbol" }, P = { class: "queso-checkbox__label" }, V = ["innerHTML"], H = ["checked", "name", "id", "required", "autocomplete", "disabled", "onChange", "onFocus", "onBlur"], j = /* @__PURE__ */ C({
  __name: "QuesoCheckbox",
  setup(o) {
    console.warn("<QuesoCheckboxLegacy> is deprecated. It will be removed on v1.0 version.");
    const l = (e, r) => {
      r(e.target.checked);
    };
    return (e, r) => (d(), h(q(L), null, {
      label: t(() => [
        z
      ]),
      beforeField: t(() => [
        a(e.$slots, "beforeField", {}, void 0, !0)
      ]),
      field: t(({
        fieldID: s,
        fieldName: b,
        fieldValue: u,
        fieldLabel: m,
        fieldAutocomplete: k,
        updateValue: v,
        toggleIsActive: _,
        toggleIsHover: i,
        isRequired: f,
        isDisabled: x,
        isReadOnly: p
      }) => [
        (d(), h($(p ? "div" : "label"), {
          class: F(["queso-checkbox", { "is-checked": u }]),
          for: s,
          onMouseover: (c) => i(!0),
          onMouseleave: (c) => i(!1)
        }, {
          default: t(() => [
            n("span", E, [
              n("span", I, [
                a(e.$slots, "symbol", {}, () => [
                  y("✔︎")
                ], !0)
              ])
            ]),
            n("span", P, [
              n("span", {
                class: "queso-checkbox__label__text",
                innerHTML: m
              }, null, 8, V)
            ])
          ]),
          _: 2
        }, 1064, ["for", "class", "onMouseover", "onMouseleave"])),
        p ? Q("", !0) : (d(), M("input", {
          key: 0,
          type: "checkbox",
          class: "queso-checkbox__native",
          checked: u,
          name: b,
          id: s,
          required: f,
          autocomplete: k,
          disabled: x,
          onChange: (c) => l(c, v),
          onFocus: (c) => _(!0),
          onBlur: (c) => _(!1)
        }, null, 40, H))
      ]),
      afterField: t(() => [
        a(e.$slots, "afterField", {}, void 0, !0)
      ]),
      error: t((s) => [
        a(e.$slots, "error", B(S({ ...s })), void 0, !0)
      ]),
      _: 3
    }));
  }
}), J = /* @__PURE__ */ N(j, [["__scopeId", "data-v-ff164339"]]);
export {
  J as Q,
  N as _
};
