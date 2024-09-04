import { defineComponent as y, mergeModels as L, useModel as V, reactive as P, computed as E, watch as F, openBlock as a, createBlock as k, unref as _, mergeProps as $, withCtx as s, renderSlot as o, normalizeProps as c, guardReactiveProps as d, createElementBlock as v, Fragment as w, renderList as N, resolveDynamicComponent as T, normalizeClass as z, createElementVNode as n, createTextVNode as D, withDirectives as S, vModelCheckbox as U, createCommentVNode as A } from "vue";
import { u as H } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ as I } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckboxMultiple.css';const Q = { class: "queso-checkbox__box" }, R = { class: "queso-checkbox__box__symbol" }, g = { class: "queso-checkbox__label" }, j = ["innerHTML"], G = ["id", "name", "required", "disabled", "onFocus", "onBlur", "onUpdate:modelValue"], Y = /* @__PURE__ */ y({
  __name: "QuesoCheckboxMultiple",
  props: /* @__PURE__ */ L({
    choices: {},
    id: {},
    name: {},
    label: {},
    isError: { type: Boolean },
    isRequired: { type: Boolean },
    isDisabled: { type: Boolean },
    isReadOnly: { type: Boolean },
    extraAttributes: {}
  }, {
    modelValue: { required: !0, default: [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(i) {
    const m = i, x = H(m), b = V(i, "modelValue"), p = P(
      m.choices.map((e) => ({ isChecked: b.value.includes(e.value), ...e }))
    ), C = E(
      () => p.filter((e) => e.isChecked).map((e) => e.value)
    );
    return F(
      C,
      (e) => {
        b.value = e;
      },
      { immediate: !0 }
    ), (e, J) => (a(), k(_(I), $({
      class: "-checkbox-multiple",
      "static-label": ""
    }, _(x)), {
      beforeLabel: s(() => [
        o(e.$slots, "beforeLabel")
      ]),
      label: s((l) => [
        o(e.$slots, "label", c(d({ ...l })))
      ]),
      required: s((l) => [
        o(e.$slots, "required", c(d({ ...l })))
      ]),
      afterLabel: s(() => [
        o(e.$slots, "afterLabel")
      ]),
      beforeInput: s(() => [
        o(e.$slots, "beforeInput")
      ]),
      input: s(({ fieldID: l, fieldName: q, isRequired: B, isDisabled: M, isReadOnly: u, toggleIsActive: h, toggleIsHover: f }) => [
        (a(!0), v(w, null, N(p, (t) => (a(), k(T(u ? "div" : "label"), {
          class: z(["queso-checkbox", { "is-checked": t.isChecked }]),
          for: u ? null : `${l}-${t.value}`,
          onMouseover: (r) => f(!0),
          onMouseleave: (r) => f(!1)
        }, {
          default: s(() => [
            o(e.$slots, "checkboxBox", {}, () => [
              n("span", Q, [
                n("span", R, [
                  o(e.$slots, "checkboxBoxSymbol", {}, () => [
                    D("✔︎")
                  ])
                ])
              ])
            ]),
            o(e.$slots, "checkboxLabel", {}, () => [
              n("span", g, [
                n("span", {
                  class: "queso-checkbox__label__text",
                  innerHTML: t.label
                }, null, 8, j)
              ])
            ]),
            u ? A("", !0) : S((a(), v("input", $({
              key: 0,
              class: "queso-checkbox__native",
              type: "checkbox",
              id: `${l}-${t.value}`,
              name: `${q}[]`,
              required: B,
              disabled: M,
              onFocus: (r) => h(!0),
              onBlur: (r) => h(!1),
              ref_for: !0
            }, e.extraAttributes, {
              "onUpdate:modelValue": (r) => t.isChecked = r
            }), null, 16, G)), [
              [U, t.isChecked]
            ])
          ]),
          _: 2
        }, 1064, ["class", "for", "onMouseover", "onMouseleave"]))), 256))
      ]),
      afterInput: s(() => [
        o(e.$slots, "afterInput")
      ]),
      error: s((l) => [
        o(e.$slots, "error", c(d({ ...l })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  Y as _
};
