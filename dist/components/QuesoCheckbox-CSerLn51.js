import { computed as q, defineComponent as M, mergeModels as C, useModel as P, openBlock as p, createBlock as x, unref as v, mergeProps as m, withCtx as s, renderSlot as o, normalizeProps as u, guardReactiveProps as _, resolveDynamicComponent as V, normalizeClass as E, createElementVNode as n, createTextVNode as F, createCommentVNode as $, withDirectives as D, createElementBlock as N, vModelCheckbox as T } from "vue";
import { _ as w } from "./QuesoField-DL0yjp-z.js";
import '../assets/components/QuesoCheckbox.css';const z = ["id", "name", "label", "isError", "isRequired", "isDisabled", "isReadOnly"];
function Q(r) {
  return z.includes(r);
}
const R = (r) => q(() => {
  const c = {};
  for (const t in r)
    Q(t) && (c[t] = r[t]);
  return c;
}), S = { class: "queso-checkbox__box" }, A = { class: "queso-checkbox__box__symbol" }, H = { class: "queso-checkbox__label" }, I = ["innerHTML"], K = /* @__PURE__ */ n("span", { class: "queso-checkbox__label__required" }, "*", -1), U = ["id", "name", "required", "disabled", "onFocus", "onBlur"], J = /* @__PURE__ */ M({
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
  setup(r) {
    const t = R(r), i = P(r, "modelValue"), y = q(() => !!i.value);
    return (e, f) => (p(), x(v(w), m({
      class: "-checkbox",
      "static-label": ""
    }, v(t)), {
      beforeLabel: s(() => [
        o(e.$slots, "beforeLabel")
      ]),
      label: s((l) => [
        o(e.$slots, "label", u(_({ ...l })))
      ]),
      required: s((l) => [
        o(e.$slots, "required", u(_({ ...l })))
      ]),
      afterLabel: s(() => [
        o(e.$slots, "afterLabel")
      ]),
      beforeInput: s(() => [
        o(e.$slots, "beforeInput")
      ]),
      input: s(({ fieldID: l, fieldName: B, isRequired: d, isDisabled: L, isReadOnly: b, toggleIsActive: h, toggleIsHover: k }) => [
        (p(), x(V(b ? "div" : "label"), {
          class: E(["queso-checkbox", { "is-checked": y.value }]),
          for: b ? null : l,
          onMouseover: (a) => k(!0),
          onMouseleave: (a) => k(!1)
        }, {
          default: s(() => [
            o(e.$slots, "checkboxBox", {}, () => [
              n("span", S, [
                n("span", A, [
                  o(e.$slots, "checkboxBoxSymbol", {}, () => [
                    F("✔︎")
                  ])
                ])
              ])
            ]),
            o(e.$slots, "checkboxLabel", {}, () => [
              n("span", H, [
                n("span", {
                  class: "queso-checkbox__label__text",
                  innerHTML: e.boxLabel
                }, null, 8, I),
                d ? o(e.$slots, "checkboxLabelRequired", u(m({ key: 0 }, { isRequired: d })), () => [
                  K
                ]) : $("", !0)
              ])
            ]),
            b ? $("", !0) : D((p(), N("input", m({
              key: 0,
              class: "queso-checkbox__native",
              type: "checkbox",
              id: l,
              name: B,
              required: d,
              disabled: L,
              onFocus: (a) => h(!0),
              onBlur: (a) => h(!1)
            }, e.extraAttributes, {
              "onUpdate:modelValue": f[0] || (f[0] = (a) => i.value = a)
            }), null, 16, U)), [
              [T, i.value]
            ])
          ]),
          _: 2
        }, 1064, ["class", "for", "onMouseover", "onMouseleave"]))
      ]),
      afterInput: s(() => [
        o(e.$slots, "afterInput")
      ]),
      error: s((l) => [
        o(e.$slots, "error", u(_({ ...l })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  J as _,
  R as u
};
