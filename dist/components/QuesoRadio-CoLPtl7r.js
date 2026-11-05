import { defineComponent as y, mergeModels as g, useModel as B, ref as I, openBlock as m, createBlock as _, unref as $, mergeProps as i, withCtx as s, renderSlot as o, normalizeProps as t, guardReactiveProps as n, createElementBlock as p, Fragment as M, renderList as R, resolveDynamicComponent as H, normalizeClass as L, withDirectives as V, vModelRadio as C, createCommentVNode as S, createElementVNode as b, createTextVNode as P } from "vue";
import { u as k } from "./QuesoCheckbox-DHwgNiJt.js";
import { _ as A } from "./QuesoField-DQ3NyaNX.js";
import '../assets/components/QuesoRadio.css';const E = ["id", "name", "required", "disabled", "value", "onFocus", "onBlur"], F = { class: "queso-radio__box" }, N = { class: "queso-radio__box__symbol" }, O = { class: "queso-radio__label" }, T = ["innerHTML"], j = /* @__PURE__ */ y({
  __name: "QuesoRadio",
  props: /* @__PURE__ */ g({
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
  setup(v) {
    const q = k(v), a = B(v, "modelValue"), u = I(null);
    return (r, f) => (m(), _($(A), i({
      class: "-radio",
      "has-static-label": ""
    }, $(q)), {
      beforeLabel: s((e) => [
        o(r.$slots, "beforeLabel", t(n(e)))
      ]),
      label: s((e) => [
        o(r.$slots, "label", t(n(e)))
      ]),
      required: s((e) => [
        o(r.$slots, "required", t(n(e)))
      ]),
      afterLabel: s((e) => [
        o(r.$slots, "afterLabel", t(n(e)))
      ]),
      beforeInput: s((e) => [
        o(r.$slots, "beforeInput", t(n(e)))
      ]),
      input: s((e) => [
        (m(!0), p(M, null, R(v.choices, (l) => (m(), _(H(e.isReadOnly ? "div" : "label"), {
          class: L(["queso-radio", {
            "is-radio-hover": u.value === l.value,
            "is-selected": a.value === l.value
          }]),
          for: e.isReadOnly ? null : `${e.fieldID}-${l.value}`,
          onMouseover: (d) => {
            u.value = l.value, e.toggleIsHover(!0);
          },
          onMouseleave: (d) => {
            u.value = null, e.toggleIsHover(!1);
          }
        }, {
          default: s(() => [
            e.isReadOnly ? S("", !0) : V((m(), p("input", i({
              key: 0,
              class: "queso-radio__native",
              type: "radio",
              id: `${e.fieldID}-${l.value}`,
              name: e.fieldName,
              required: e.isRequired,
              disabled: e.isDisabled,
              value: l.value,
              onFocus: (d) => e.toggleIsActive(!0),
              onBlur: (d) => e.toggleIsActive(!1)
            }, { ref_for: !0 }, v.extraAttributes, {
              "onUpdate:modelValue": f[0] || (f[0] = (d) => a.value = d)
            }), null, 16, E)), [
              [C, a.value]
            ]),
            o(r.$slots, "radio", i({ ref_for: !0 }, {
              ...e,
              ...l,
              isHovered: u.value === l.value,
              isSelected: a.value === l.value
            }), () => [
              o(r.$slots, "radioBox", i({ ref_for: !0 }, {
                ...e,
                ...l,
                isHovered: u.value === l.value,
                isSelected: a.value === l.value
              }), () => [
                b("span", F, [
                  b("span", N, [
                    o(r.$slots, "radioBoxSymbol", i({ ref_for: !0 }, {
                      ...e,
                      ...l,
                      isHovered: u.value === l.value,
                      isSelected: a.value === l.value
                    }), () => [
                      f[1] || (f[1] = P("✔︎", -1))
                    ])
                  ])
                ])
              ]),
              o(r.$slots, "radioLabel", i({ ref_for: !0 }, {
                ...e,
                ...l,
                isHovered: u.value === l.value,
                isSelected: a.value === l.value
              }), () => [
                b("span", O, [
                  b("span", {
                    class: "queso-radio__label__text",
                    innerHTML: l.label
                  }, null, 8, T)
                ])
              ])
            ])
          ]),
          _: 2
        }, 1064, ["class", "for", "onMouseover", "onMouseleave"]))), 256))
      ]),
      afterInput: s((e) => [
        o(r.$slots, "afterInput", t(n(e)))
      ]),
      error: s((e) => [
        o(r.$slots, "error", t(n(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  j as _
};
