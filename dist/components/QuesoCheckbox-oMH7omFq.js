import { computed as q, defineComponent as y, mergeModels as $, useModel as C, ref as B, openBlock as h, createBlock as k, unref as _, mergeProps as m, withCtx as i, renderSlot as s, normalizeProps as l, guardReactiveProps as r, resolveDynamicComponent as g, normalizeClass as R, withDirectives as H, createElementBlock as I, vModelCheckbox as L, createCommentVNode as p, createElementVNode as d, createTextVNode as M } from "vue";
import { _ as P } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckbox.css';const V = ["id", "name", "label", "isError", "isRequired", "isDisabled", "isReadOnly"];
function E(t) {
  return V.includes(t);
}
const F = (t) => q(() => {
  const b = {};
  for (const a in t)
    E(a) && (b[a] = t[a]);
  return b;
}), O = ["id", "name", "required", "disabled", "onFocus", "onBlur"], A = { class: "queso-checkbox__box" }, N = { class: "queso-checkbox__box__symbol" }, T = { class: "queso-checkbox__label" }, w = ["innerHTML"], x = /* @__PURE__ */ d("span", { class: "queso-checkbox__label__required" }, "*", -1), S = /* @__PURE__ */ y({
  __name: "QuesoCheckbox",
  props: /* @__PURE__ */ $({
    boxLabel: {},
    id: {},
    name: {},
    label: {},
    isError: { type: Boolean },
    isRequired: { type: Boolean },
    isDisabled: { type: Boolean },
    isReadOnly: { type: Boolean },
    extraAttributes: {}
  }, {
    modelValue: { type: Boolean, required: !0, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const a = F(t), v = C(t, "modelValue"), u = q(() => !!v.value), n = B(!1);
    return (o, f) => (h(), k(_(P), m({
      class: "-checkbox",
      "has-static-label": ""
    }, _(a)), {
      beforeLabel: i((e) => [
        s(o.$slots, "beforeLabel", l(r(e)))
      ]),
      label: i((e) => [
        s(o.$slots, "label", l(r(e)))
      ]),
      required: i((e) => [
        s(o.$slots, "required", l(r(e)))
      ]),
      afterLabel: i((e) => [
        s(o.$slots, "afterLabel", l(r(e)))
      ]),
      beforeInput: i((e) => [
        s(o.$slots, "beforeInput", l(r(e)))
      ]),
      input: i((e) => [
        (h(), k(g(e.isReadOnly ? "div" : "label"), {
          class: R(["queso-checkbox", { "is-checkbox-hover": n.value, "is-checked": u.value }]),
          for: e.isReadOnly ? null : e.fieldID,
          onMouseover: (c) => {
            n.value = !0, e.toggleIsHover(!0);
          },
          onMouseleave: (c) => {
            n.value = !1, e.toggleIsHover(!1);
          }
        }, {
          default: i(() => [
            e.isReadOnly ? p("", !0) : H((h(), I("input", m({
              key: 0,
              class: "queso-checkbox__native",
              type: "checkbox",
              id: e.fieldID,
              name: e.fieldName,
              required: e.isRequired,
              disabled: e.isDisabled,
              onFocus: (c) => e.toggleIsActive(!0),
              onBlur: (c) => e.toggleIsActive(!1)
            }, o.extraAttributes, {
              "onUpdate:modelValue": f[0] || (f[0] = (c) => v.value = c)
            }), null, 16, O)), [
              [L, v.value]
            ]),
            s(o.$slots, "checkbox", l(r({ ...e, isHovered: n.value, isChecked: u.value })), () => [
              s(o.$slots, "checkboxBox", l(r({ ...e, isHovered: n.value, isChecked: u.value })), () => [
                d("span", A, [
                  d("span", N, [
                    s(o.$slots, "checkboxBoxSymbol", l(r({ ...e, isHovered: n.value, isChecked: u.value })), () => [
                      M("✔︎")
                    ])
                  ])
                ])
              ]),
              s(o.$slots, "checkboxLabel", l(r({ ...e, isHovered: n.value, isChecked: u.value })), () => [
                d("span", T, [
                  d("span", {
                    class: "queso-checkbox__label__text",
                    innerHTML: o.boxLabel
                  }, null, 8, w),
                  e.isRequired ? s(o.$slots, "checkboxLabelRequired", l(m({ key: 0 }, { ...e, isHovered: n.value, isChecked: u.value })), () => [
                    x
                  ]) : p("", !0)
                ])
              ])
            ])
          ]),
          _: 2
        }, 1064, ["class", "for", "onMouseover", "onMouseleave"]))
      ]),
      afterInput: i((e) => [
        s(o.$slots, "afterInput", l(r(e)))
      ]),
      error: i((e) => [
        s(o.$slots, "error", l(r(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  S as _,
  F as u
};
