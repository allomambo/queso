import { defineComponent as N, mergeModels as F, useModel as S, reactive as w, computed as b, watch as p, ref as I, openBlock as u, createBlock as y, unref as M, mergeProps as q, withCtx as s, renderSlot as o, normalizeProps as f, guardReactiveProps as h, createElementBlock as B, Fragment as T, renderList as z, resolveDynamicComponent as A, normalizeClass as D, createElementVNode as c, createTextVNode as J, withDirectives as O, vModelCheckbox as R, createCommentVNode as U } from "vue";
import { u as H } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ as Q } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckboxMultiple.css';const j = { class: "queso-checkbox__box" }, G = { class: "queso-checkbox__box__symbol" }, K = { class: "queso-checkbox__label" }, W = ["innerHTML"], X = ["id", "name", "required", "disabled", "onFocus", "onBlur", "onUpdate:modelValue"], oe = /* @__PURE__ */ N({
  __name: "QuesoCheckboxMultiple",
  props: /* @__PURE__ */ F({
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
  setup(k) {
    const n = k, V = H(n), i = S(k, "modelValue"), d = w(
      n.choices.map((e) => ({ isChecked: i.value.includes(e.value), ...e }))
    ), v = b(
      () => d.filter((e) => e.isChecked).map((e) => e.value)
    );
    p(
      v,
      (e) => {
        JSON.stringify(e) !== JSON.stringify(i.value) && (i.value = e);
      },
      { immediate: !0 }
    ), p(
      i,
      (e) => {
        d.forEach((l) => {
          l.isChecked = e.includes(l.value);
        });
      },
      { immediate: !0 }
    );
    const _ = I([]), $ = b(() => v.value.length > 0), L = b(() => n.isRequired && !$.value);
    return p(
      L,
      (e) => {
        _.value.forEach((l) => {
          e ? l.setCustomValidity(n.validationMessage) : l.setCustomValidity("");
        });
      },
      { immediate: !0 }
    ), (e, l) => (u(), y(M(Q), q({
      class: "-checkbox-multiple",
      "static-label": ""
    }, M(V)), {
      beforeLabel: s(() => [
        o(e.$slots, "beforeLabel")
      ]),
      label: s((t) => [
        o(e.$slots, "label", f(h({ ...t })))
      ]),
      required: s((t) => [
        o(e.$slots, "required", f(h({ ...t })))
      ]),
      afterLabel: s(() => [
        o(e.$slots, "afterLabel")
      ]),
      beforeInput: s(() => [
        o(e.$slots, "beforeInput")
      ]),
      input: s(({ fieldID: t, fieldName: g, isRequired: E, isDisabled: P, isReadOnly: m, toggleIsActive: x, toggleIsHover: C }) => [
        (u(!0), B(T, null, z(d, (a) => (u(), y(A(m ? "div" : "label"), {
          class: D(["queso-checkbox", { "is-checked": a.isChecked }]),
          for: m ? null : `${t}-${a.value}`,
          onMouseover: (r) => C(!0),
          onMouseleave: (r) => C(!1)
        }, {
          default: s(() => [
            o(e.$slots, "checkboxBox", {}, () => [
              c("span", j, [
                c("span", G, [
                  o(e.$slots, "checkboxBoxSymbol", {}, () => [
                    J("✔︎")
                  ])
                ])
              ])
            ]),
            o(e.$slots, "checkboxLabel", {}, () => [
              c("span", K, [
                c("span", {
                  class: "queso-checkbox__label__text",
                  innerHTML: a.label
                }, null, 8, W)
              ])
            ]),
            m ? U("", !0) : O((u(), B("input", q({
              key: 0,
              ref_for: !0,
              ref_key: "checkboxInputs",
              ref: _,
              class: "queso-checkbox__native",
              type: "checkbox",
              id: `${t}-${a.value}`,
              name: `${g}[]`,
              required: E && !$.value,
              disabled: P,
              onFocus: (r) => x(!0),
              onBlur: (r) => x(!1)
            }, e.extraAttributes, {
              "onUpdate:modelValue": (r) => a.isChecked = r
            }), null, 16, X)), [
              [R, a.isChecked]
            ])
          ]),
          _: 2
        }, 1064, ["class", "for", "onMouseover", "onMouseleave"]))), 256))
      ]),
      afterInput: s(() => [
        o(e.$slots, "afterInput")
      ]),
      error: s((t) => [
        o(e.$slots, "error", f(h({ ...t })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  oe as _
};
