import "../assets/components/QuesoSwitch.css";
import { defineComponent as C, openBlock as n, createBlock as h, unref as $, withCtx as e, renderSlot as a, resolveDynamicComponent as F, normalizeClass as M, createElementBlock as m, createElementVNode as r, createCommentVNode as p, normalizeProps as x, guardReactiveProps as B } from "vue";
import { _ as y } from "./QuesoField-DRuioO9o.js";
const S = /* @__PURE__ */ r("span", { class: "queso-switch__hidden-label" }, null, -1), z = /* @__PURE__ */ r("span", { class: "queso-switch__box" }, [
  /* @__PURE__ */ r("span", { class: "queso-switch__box__circle" })
], -1), E = {
  key: 0,
  class: "queso-switch__label"
}, N = ["innerHTML"], P = ["checked", "name", "id", "required", "autocomplete", "disabled", "onChange", "onFocus", "onBlur"], Q = /* @__PURE__ */ C({
  __name: "QuesoSwitch",
  setup(T) {
    const f = (o, c) => {
      c(o.target.checked);
    };
    return (o, c) => (n(), h($(y), null, {
      label: e(() => [
        S
      ]),
      beforeField: e(() => [
        a(o.$slots, "beforeField")
      ]),
      field: e(({
        fieldID: t,
        fieldName: b,
        fieldValue: l,
        fieldLabel: i,
        fieldAutocomplete: k,
        updateValue: v,
        toggleIsActive: _,
        toggleIsHover: u,
        isRequired: q,
        isDisabled: w,
        isReadOnly: d
      }) => [
        (n(), h(F(d ? "div" : "label"), {
          class: M(["queso-switch", { "is-selected": l }]),
          for: t,
          onMouseover: (s) => u(!0),
          onMouseleave: (s) => u(!1)
        }, {
          default: e(() => [
            z,
            i ? (n(), m("span", E, [
              r("span", {
                class: "queso-switch__label__text",
                innerHTML: i
              }, null, 8, N)
            ])) : p("", !0)
          ]),
          _: 2
        }, 1064, ["for", "class", "onMouseover", "onMouseleave"])),
        d ? p("", !0) : (n(), m("input", {
          key: 0,
          type: "checkbox",
          class: "queso-switch__native",
          checked: l,
          name: b,
          id: t,
          required: q,
          autocomplete: k,
          disabled: w,
          onChange: (s) => f(s, v),
          onFocus: (s) => _(!0),
          onBlur: (s) => _(!1)
        }, null, 40, P))
      ]),
      afterField: e(() => [
        a(o.$slots, "afterField")
      ]),
      error: e((t) => [
        a(o.$slots, "error", x(B({ ...t })))
      ]),
      _: 3
    }));
  }
});
export {
  Q as _
};
