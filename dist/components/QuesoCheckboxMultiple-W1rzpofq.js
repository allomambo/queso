import { defineComponent as g, mergeModels as E, useModel as F, reactive as w, computed as v, watch as N, openBlock as n, createBlock as _, unref as $, mergeProps as C, withCtx as s, renderSlot as o, normalizeProps as c, guardReactiveProps as d, createElementBlock as x, Fragment as T, renderList as z, resolveDynamicComponent as A, normalizeClass as D, createElementVNode as r, createTextVNode as I, withDirectives as S, vModelCheckbox as U, createCommentVNode as H } from "vue";
import { u as Q } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ as R } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckboxMultiple.css';const j = { class: "queso-checkbox__box" }, G = { class: "queso-checkbox__box__symbol" }, J = { class: "queso-checkbox__label" }, K = ["innerHTML"], O = ["id", "name", "required", "disabled", "onFocus", "onBlur", "onUpdate:modelValue"], Z = /* @__PURE__ */ g({
  __name: "QuesoCheckboxMultiple",
  props: /* @__PURE__ */ E({
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
  setup(m) {
    const u = m, M = Q(u), p = F(m, "modelValue"), b = w(
      u.choices.map((e) => ({ isChecked: p.value.includes(e.value), ...e }))
    ), h = v(
      () => b.filter((e) => e.isChecked).map((e) => e.value)
    );
    N(
      h,
      (e) => {
        p.value = e;
      },
      { immediate: !0 }
    );
    const q = v(() => h.value.length > 0), B = (e) => {
      e.target.setCustomValidity(u.validationMessage);
    };
    return (e, V) => (n(), _($(R), C({
      class: "-checkbox-multiple",
      "static-label": ""
    }, $(M)), {
      beforeLabel: s(() => [
        o(e.$slots, "beforeLabel")
      ]),
      label: s((t) => [
        o(e.$slots, "label", c(d({ ...t })))
      ]),
      required: s((t) => [
        o(e.$slots, "required", c(d({ ...t })))
      ]),
      afterLabel: s(() => [
        o(e.$slots, "afterLabel")
      ]),
      beforeInput: s(() => [
        o(e.$slots, "beforeInput")
      ]),
      input: s(({ fieldID: t, fieldName: y, isRequired: L, isDisabled: P, isReadOnly: i, toggleIsActive: f, toggleIsHover: k }) => [
        (n(!0), x(T, null, z(b, (l) => (n(), _(A(i ? "div" : "label"), {
          class: D(["queso-checkbox", { "is-checked": l.isChecked }]),
          for: i ? null : `${t}-${l.value}`,
          onMouseover: (a) => k(!0),
          onMouseleave: (a) => k(!1)
        }, {
          default: s(() => [
            o(e.$slots, "checkboxBox", {}, () => [
              r("span", j, [
                r("span", G, [
                  o(e.$slots, "checkboxBoxSymbol", {}, () => [
                    I("✔︎")
                  ])
                ])
              ])
            ]),
            o(e.$slots, "checkboxLabel", {}, () => [
              r("span", J, [
                r("span", {
                  class: "queso-checkbox__label__text",
                  innerHTML: l.label
                }, null, 8, K)
              ])
            ]),
            i ? H("", !0) : S((n(), x("input", C({
              key: 0,
              class: "queso-checkbox__native",
              type: "checkbox",
              id: `${t}-${l.value}`,
              name: `${y}[]`,
              required: L && !q.value,
              disabled: P,
              onFocus: (a) => f(!0),
              onBlur: (a) => f(!1),
              onInvalid: B,
              ref_for: !0
            }, e.extraAttributes, {
              "onUpdate:modelValue": (a) => l.isChecked = a
            }), null, 16, O)), [
              [U, l.isChecked]
            ])
          ]),
          _: 2
        }, 1064, ["class", "for", "onMouseover", "onMouseleave"]))), 256))
      ]),
      afterInput: s(() => [
        o(e.$slots, "afterInput")
      ]),
      error: s((t) => [
        o(e.$slots, "error", c(d({ ...t })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  Z as _
};
