import { defineComponent as x, openBlock as c, createBlock as h, unref as F, withCtx as e, renderSlot as a, resolveDynamicComponent as Q, normalizeClass as $, createElementBlock as m, createElementVNode as r, createCommentVNode as v, normalizeProps as M, guardReactiveProps as y, pushScopeId as B, popScopeId as z } from "vue";
import { Q as g } from "./QuesoField--_tAD3Z8.js";
import { _ as E } from "./QuesoCheckbox-BupGfZ9J.js";
import '../../assets/components/_legacy/QuesoSwitch.css';const b = (t) => (B("data-v-2edec787"), t = t(), z(), t), I = /* @__PURE__ */ b(() => /* @__PURE__ */ r("span", { class: "queso-switch__hidden-label" }, null, -1)), L = /* @__PURE__ */ b(() => /* @__PURE__ */ r("span", { class: "queso-switch__box" }, [
  /* @__PURE__ */ r("span", { class: "queso-switch__box__circle" })
], -1)), N = {
  key: 0,
  class: "queso-switch__label"
}, P = ["innerHTML"], T = ["checked", "name", "id", "required", "autocomplete", "disabled", "onChange", "onFocus", "onBlur"], H = /* @__PURE__ */ x({
  __name: "QuesoSwitch",
  setup(t) {
    console.warn(
      "<QuesoSwitchLegacy> is deprecated. It will be removed on v1.0 version. Use a stylized <QuesoCheckbox> component instead."
    );
    const f = (o, l) => {
      l(o.target.checked);
    };
    return (o, l) => (c(), h(F(g), null, {
      label: e(() => [
        I
      ]),
      beforeField: e(() => [
        a(o.$slots, "beforeField", {}, void 0, !0)
      ]),
      field: e(({
        fieldID: n,
        fieldName: w,
        fieldValue: i,
        fieldLabel: d,
        fieldAutocomplete: k,
        updateValue: q,
        toggleIsActive: u,
        toggleIsHover: _,
        isRequired: C,
        isDisabled: S,
        isReadOnly: p
      }) => [
        (c(), h(Q(p ? "div" : "label"), {
          class: $(["queso-switch", { "is-selected": i }]),
          for: n,
          onMouseover: (s) => _(!0),
          onMouseleave: (s) => _(!1)
        }, {
          default: e(() => [
            L,
            d ? (c(), m("span", N, [
              r("span", {
                class: "queso-switch__label__text",
                innerHTML: d
              }, null, 8, P)
            ])) : v("", !0)
          ]),
          _: 2
        }, 1064, ["for", "class", "onMouseover", "onMouseleave"])),
        p ? v("", !0) : (c(), m("input", {
          key: 0,
          type: "checkbox",
          class: "queso-switch__native",
          checked: i,
          name: w,
          id: n,
          required: C,
          autocomplete: k,
          disabled: S,
          onChange: (s) => f(s, q),
          onFocus: (s) => u(!0),
          onBlur: (s) => u(!1)
        }, null, 40, T))
      ]),
      afterField: e(() => [
        a(o.$slots, "afterField", {}, void 0, !0)
      ]),
      error: e((n) => [
        a(o.$slots, "error", M(y({ ...n })), void 0, !0)
      ]),
      _: 3
    }));
  }
}), D = /* @__PURE__ */ E(H, [["__scopeId", "data-v-2edec787"]]);
export {
  D as Q
};
