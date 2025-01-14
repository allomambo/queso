import { defineComponent as F, mergeModels as w, useModel as I, reactive as N, computed as d, watch as C, ref as T, openBlock as n, createBlock as M, unref as q, mergeProps as y, withCtx as s, renderSlot as o, normalizeProps as m, guardReactiveProps as b, createElementBlock as B, Fragment as z, renderList as A, resolveDynamicComponent as D, normalizeClass as R, createElementVNode as u, createTextVNode as S, withDirectives as U, vModelCheckbox as H, createCommentVNode as Q } from "vue";
import { u as j } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ as G } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckboxMultiple.css';const J = { class: "queso-checkbox__box" }, K = { class: "queso-checkbox__box__symbol" }, O = { class: "queso-checkbox__label" }, W = ["innerHTML"], X = ["id", "name", "required", "disabled", "onFocus", "onBlur", "onUpdate:modelValue"], oe = /* @__PURE__ */ F({
  __name: "QuesoCheckboxMultiple",
  props: /* @__PURE__ */ w({
    choices: {},
    validationMessage: { default: "Please select at least one option" },
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
  setup(p) {
    const r = p, V = j(r), h = I(p, "modelValue"), f = N(
      r.choices.map((e) => ({ isChecked: h.value.includes(e.value), ...e }))
    ), k = d(
      () => f.filter((e) => e.isChecked).map((e) => e.value)
    );
    C(
      k,
      (e) => {
        h.value = e;
      },
      { immediate: !0 }
    );
    const v = T([]), _ = d(() => k.value.length > 0), L = d(() => r.isRequired && !_.value);
    return C(
      L,
      (e) => {
        v.value.forEach((i) => {
          e ? i.setCustomValidity(r.validationMessage) : i.setCustomValidity("");
        });
      },
      { immediate: !0 }
    ), (e, i) => (n(), M(q(G), y({
      class: "-checkbox-multiple",
      "static-label": ""
    }, q(V)), {
      beforeLabel: s(() => [
        o(e.$slots, "beforeLabel")
      ]),
      label: s((t) => [
        o(e.$slots, "label", m(b({ ...t })))
      ]),
      required: s((t) => [
        o(e.$slots, "required", m(b({ ...t })))
      ]),
      afterLabel: s(() => [
        o(e.$slots, "afterLabel")
      ]),
      beforeInput: s(() => [
        o(e.$slots, "beforeInput")
      ]),
      input: s(({ fieldID: t, fieldName: P, isRequired: E, isDisabled: g, isReadOnly: c, toggleIsActive: $, toggleIsHover: x }) => [
        (n(!0), B(z, null, A(f, (l) => (n(), M(D(c ? "div" : "label"), {
          class: R(["queso-checkbox", { "is-checked": l.isChecked }]),
          for: c ? null : `${t}-${l.value}`,
          onMouseover: (a) => x(!0),
          onMouseleave: (a) => x(!1)
        }, {
          default: s(() => [
            o(e.$slots, "checkboxBox", {}, () => [
              u("span", J, [
                u("span", K, [
                  o(e.$slots, "checkboxBoxSymbol", {}, () => [
                    S("✔︎")
                  ])
                ])
              ])
            ]),
            o(e.$slots, "checkboxLabel", {}, () => [
              u("span", O, [
                u("span", {
                  class: "queso-checkbox__label__text",
                  innerHTML: l.label
                }, null, 8, W)
              ])
            ]),
            c ? Q("", !0) : U((n(), B("input", y({
              key: 0,
              ref_for: !0,
              ref_key: "checkboxInputs",
              ref: v,
              class: "queso-checkbox__native",
              type: "checkbox",
              id: `${t}-${l.value}`,
              name: `${P}[]`,
              required: E && !_.value,
              disabled: g,
              onFocus: (a) => $(!0),
              onBlur: (a) => $(!1)
            }, e.extraAttributes, {
              "onUpdate:modelValue": (a) => l.isChecked = a
            }), null, 16, X)), [
              [H, l.isChecked]
            ])
          ]),
          _: 2
        }, 1064, ["class", "for", "onMouseover", "onMouseleave"]))), 256))
      ]),
      afterInput: s(() => [
        o(e.$slots, "afterInput")
      ]),
      error: s((t) => [
        o(e.$slots, "error", m(b({ ...t })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  oe as _
};
