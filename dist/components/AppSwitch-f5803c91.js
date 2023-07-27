import "../assets/AppSwitch.css";
import { defineComponent as C, openBlock as n, createBlock as p, unref as $, withCtx as e, renderSlot as l, resolveDynamicComponent as x, normalizeClass as F, createElementBlock as h, createElementVNode as c, createCommentVNode as m, normalizeProps as M, guardReactiveProps as y } from "vue";
import { _ as B } from "./FieldBase-03e4e23e.js";
const S = /* @__PURE__ */ c("span", { class: "queso-switch__hidden-label" }, null, -1), g = /* @__PURE__ */ c("span", { class: "queso-switch__box" }, [
  /* @__PURE__ */ c("span", { class: "queso-switch__box__circle" })
], -1), z = {
  key: 0,
  class: "queso-switch__label"
}, E = ["innerHTML"], N = ["checked", "name", "id", "required", "autocomplete", "disabled", "onChange", "onFocus", "onBlur"], L = /* @__PURE__ */ C({
  __name: "AppSwitch",
  setup(P) {
    const f = (o, r) => {
      r(o.target.checked);
    };
    return (o, r) => (n(), p($(B), null, {
      label: e(() => [
        S
      ]),
      beforeField: e(() => [
        l(o.$slots, "beforeField")
      ]),
      field: e(({
        fieldID: t,
        fieldName: b,
        fieldValue: a,
        fieldLabel: _,
        fieldAutocomplete: v,
        updateValue: k,
        toggleIsActive: i,
        toggleIsHover: u,
        isRequired: w,
        isDisabled: q,
        isReadOnly: d
      }) => [
        (n(), p(x(d ? "div" : "label"), {
          class: F(["queso-switch", { "is-selected": a }]),
          for: t,
          onMouseover: (s) => u(!0),
          onMouseleave: (s) => u(!1)
        }, {
          default: e(() => [
            g,
            _ ? (n(), h("span", z, [
              c("span", {
                class: "queso-switch__label__text",
                innerHTML: _
              }, null, 8, E)
            ])) : m("", !0)
          ]),
          _: 2
        }, 1064, ["for", "class", "onMouseover", "onMouseleave"])),
        d ? m("", !0) : (n(), h("input", {
          key: 0,
          type: "checkbox",
          class: "queso-switch__native",
          checked: a,
          name: b,
          id: t,
          required: w,
          autocomplete: v,
          disabled: q,
          onChange: (s) => f(s, k),
          onFocus: (s) => i(!0),
          onBlur: (s) => i(!1)
        }, null, 40, N))
      ]),
      afterField: e(() => [
        l(o.$slots, "afterField")
      ]),
      error: e((t) => [
        l(o.$slots, "error", M(y({ ...t })))
      ]),
      _: 3
    }));
  }
});
export {
  L as _
};
