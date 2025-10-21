import { computed as q, defineComponent as M, mergeModels as C, useModel as P, openBlock as m, createBlock as x, unref as v, mergeProps as _, withCtx as l, renderSlot as s, normalizeProps as r, guardReactiveProps as a, resolveDynamicComponent as V, normalizeClass as E, createElementVNode as c, createTextVNode as F, createCommentVNode as $, withDirectives as D, createElementBlock as N, vModelCheckbox as T } from "vue";
import { _ as w } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckbox.css';const z = ["id", "name", "label", "isError", "isRequired", "isDisabled", "isReadOnly"];
function Q(t) {
  return z.includes(t);
}
const R = (t) => q(() => {
  const i = {};
  for (const n in t)
    Q(n) && (i[n] = t[n]);
  return i;
}), S = { class: "queso-checkbox__box" }, A = { class: "queso-checkbox__box__symbol" }, H = { class: "queso-checkbox__label" }, I = ["innerHTML"], K = /* @__PURE__ */ c("span", { class: "queso-checkbox__label__required" }, "*", -1), U = ["id", "name", "required", "disabled", "onFocus", "onBlur"], J = /* @__PURE__ */ M({
  __name: "QuesoCheckbox",
  props: /* @__PURE__ */ C({
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
    const n = R(t), d = P(t, "modelValue"), y = q(() => !!d.value);
    return (o, f) => (m(), x(v(w), _({
      class: "-checkbox",
      "static-label": ""
    }, v(n)), {
      beforeLabel: l((e) => [
        s(o.$slots, "beforeLabel", r(a({ ...e })))
      ]),
      label: l((e) => [
        s(o.$slots, "label", r(a({ ...e })))
      ]),
      required: l((e) => [
        s(o.$slots, "required", r(a({ ...e })))
      ]),
      afterLabel: l((e) => [
        s(o.$slots, "afterLabel", r(a({ ...e })))
      ]),
      beforeInput: l((e) => [
        s(o.$slots, "beforeInput", r(a({ ...e })))
      ]),
      input: l(({ fieldID: e, fieldName: B, isRequired: b, isDisabled: L, isReadOnly: p, toggleIsActive: h, toggleIsHover: k }) => [
        (m(), x(V(p ? "div" : "label"), {
          class: E(["queso-checkbox", { "is-checked": y.value }]),
          for: p ? null : e,
          onMouseover: (u) => k(!0),
          onMouseleave: (u) => k(!1)
        }, {
          default: l(() => [
            s(o.$slots, "checkboxBox", {}, () => [
              c("span", S, [
                c("span", A, [
                  s(o.$slots, "checkboxBoxSymbol", {}, () => [
                    F("✔︎")
                  ])
                ])
              ])
            ]),
            s(o.$slots, "checkboxLabel", {}, () => [
              c("span", H, [
                c("span", {
                  class: "queso-checkbox__label__text",
                  innerHTML: o.boxLabel
                }, null, 8, I),
                b ? s(o.$slots, "checkboxLabelRequired", r(_({ key: 0 }, { isRequired: b })), () => [
                  K
                ]) : $("", !0)
              ])
            ]),
            p ? $("", !0) : D((m(), N("input", _({
              key: 0,
              class: "queso-checkbox__native",
              type: "checkbox",
              id: e,
              name: B,
              required: b,
              disabled: L,
              onFocus: (u) => h(!0),
              onBlur: (u) => h(!1)
            }, o.extraAttributes, {
              "onUpdate:modelValue": f[0] || (f[0] = (u) => d.value = u)
            }), null, 16, U)), [
              [T, d.value]
            ])
          ]),
          _: 2
        }, 1064, ["class", "for", "onMouseover", "onMouseleave"]))
      ]),
      afterInput: l((e) => [
        s(o.$slots, "afterInput", r(a({ ...e })))
      ]),
      error: l((e) => [
        s(o.$slots, "error", r(a({ ...e })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  J as _,
  R as u
};
