import { defineComponent as V, mergeModels as C, useModel as P, openBlock as t, createBlock as _, unref as $, mergeProps as c, withCtx as s, renderSlot as o, normalizeProps as i, guardReactiveProps as p, createElementBlock as q, Fragment as h, renderList as k, resolveDynamicComponent as E, normalizeClass as F, createElementVNode as n, createTextVNode as N, withDirectives as R, vModelRadio as T, createCommentVNode as w } from "vue";
import { u as z } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ as D } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoRadio.css';const S = { class: "queso-radio__box" }, x = { class: "queso-radio__box__symbol" }, A = { class: "queso-radio__label" }, H = ["innerHTML"], I = ["id", "name", "required", "disabled", "value", "onFocus", "onBlur"], G = /* @__PURE__ */ V({
  __name: "QuesoRadio",
  props: /* @__PURE__ */ C({
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
    modelValue: { required: !0, default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(m) {
    const B = z(m), u = P(m, "modelValue");
    return (e, b) => (t(), _($(D), c({
      class: "-radio",
      "static-label": ""
    }, $(B)), {
      beforeLabel: s(() => [
        o(e.$slots, "beforeLabel")
      ]),
      label: s((r) => [
        o(e.$slots, "label", i(p({ ...r })))
      ]),
      required: s((r) => [
        o(e.$slots, "required", i(p({ ...r })))
      ]),
      afterLabel: s(() => [
        o(e.$slots, "afterLabel")
      ]),
      beforeInput: s(() => [
        o(e.$slots, "beforeInput")
      ]),
      input: s(({ fieldID: r, fieldName: M, isRequired: y, isDisabled: L, isReadOnly: d, toggleIsActive: f, toggleIsHover: v }) => [
        (t(!0), q(h, null, k(e.choices, (l) => (t(), _(E(d ? "div" : "label"), {
          class: F(["queso-radio", { "is-selected": u.value === l.value }]),
          for: d ? null : `${r}-${l.value}`,
          onMouseover: (a) => v(!0),
          onMouseleave: (a) => v(!1)
        }, {
          default: s(() => [
            o(e.$slots, "radioBox", {}, () => [
              n("span", S, [
                n("span", x, [
                  o(e.$slots, "radioBoxSymbol", {}, () => [
                    N("✔︎")
                  ])
                ])
              ])
            ]),
            o(e.$slots, "radioLabel", {}, () => [
              n("span", A, [
                n("span", {
                  class: "queso-radio__label__text",
                  innerHTML: l.label
                }, null, 8, H)
              ])
            ]),
            d ? w("", !0) : R((t(), q("input", c({
              key: 0,
              class: "queso-radio__native",
              type: "radio",
              id: `${r}-${l.value}`,
              name: M,
              required: y,
              disabled: L,
              value: l.value,
              onFocus: (a) => f(!0),
              onBlur: (a) => f(!1),
              ref_for: !0
            }, e.extraAttributes, {
              "onUpdate:modelValue": b[0] || (b[0] = (a) => u.value = a)
            }), null, 16, I)), [
              [T, u.value]
            ])
          ]),
          _: 2
        }, 1064, ["class", "for", "onMouseover", "onMouseleave"]))), 256))
      ]),
      afterInput: s(() => [
        o(e.$slots, "afterInput")
      ]),
      error: s((r) => [
        o(e.$slots, "error", i(p({ ...r })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  G as _
};
