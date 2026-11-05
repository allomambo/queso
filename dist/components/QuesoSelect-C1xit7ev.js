import { defineComponent as F, mergeModels as k, useModel as w, ref as B, computed as E, openBlock as d, createBlock as $, unref as f, mergeProps as g, withCtx as r, renderSlot as t, normalizeProps as n, guardReactiveProps as i, createElementVNode as m, createTextVNode as q, toDisplayString as c, createElementBlock as v, Fragment as I, renderList as L, withDirectives as A, vModelSelect as P } from "vue";
import { u as R } from "./QuesoCheckbox-DHwgNiJt.js";
import { _ as O } from "./QuesoField-DQ3NyaNX.js";
import { _ as S } from "./QuesoDropdown-wkHmnovD.js";
import '../assets/components/QuesoSelect.css';const T = { class: "queso-select__read-only" }, h = ["innerHTML"], H = { class: "text" }, N = ["id", "name", "required", "disabled"], C = ["value"], J = /* @__PURE__ */ F({
  __name: "QuesoSelect",
  props: /* @__PURE__ */ k({
    options: {},
    placeholder: {},
    ariaLabel: {},
    ariaLabelledby: {},
    id: {},
    name: {},
    label: {},
    isError: { type: Boolean },
    isRequired: { type: Boolean },
    isDisabled: { type: Boolean },
    isReadOnly: { type: Boolean },
    extraAttributes: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(u) {
    const M = R(u), a = w(u, "modelValue"), p = B(null), V = (o, s) => {
      o.currentTarget.contains(o.relatedTarget) || s(!1);
    }, y = E({
      get() {
        return a.value ? [a.value] : [];
      },
      set(o) {
        a.value = o[0];
      }
    });
    return (o, s) => (d(), $(f(O), g({ class: "-select" }, f(M)), {
      beforeLabel: r((e) => [
        t(o.$slots, "beforeLabel", n(i(e)))
      ]),
      label: r((e) => [
        t(o.$slots, "label", n(i(e)))
      ]),
      required: r((e) => [
        t(o.$slots, "required", n(i(e)))
      ]),
      afterLabel: r((e) => [
        t(o.$slots, "afterLabel", n(i(e)))
      ]),
      beforeInput: r((e) => [
        t(o.$slots, "beforeInput", n(i(e)))
      ]),
      input: r((e) => [
        e.isReadOnly ? t(o.$slots, "readOnly", n(i(e)), () => [
          m("div", T, [
            m("span", {
              class: "queso-select__read-only__label",
              innerHTML: a.value
            }, null, 8, h)
          ])
        ], void 0, 0) : (d(), $(f(S), {
          key: 1,
          ref_key: "dropdown",
          ref: p,
          class: "queso-select",
          options: u.options,
          "is-disabled": e.isDisabled,
          "is-required": e.isRequired,
          "is-error": e.isError,
          "aria-label": e.fieldLabelID ? void 0 : u.ariaLabel,
          "aria-labelledby": e.fieldLabelID || u.ariaLabelledby,
          onMouseover: (l) => e.toggleIsHover(!0),
          onMouseleave: (l) => e.toggleIsHover(!1),
          onFocusin: (l) => !e.isActive && e.toggleIsActive(!0),
          onFocusout: (l) => V(l, e.toggleIsActive),
          modelValue: y.value,
          "onUpdate:modelValue": s[2] || (s[2] = (l) => y.value = l)
        }, {
          selectorPlaceholder: r((l) => [
            t(o.$slots, "placeholder", n(i({ ...e, ...l })), () => [
              q(c(u.placeholder), 1)
            ])
          ]),
          selectorActiveOptions: r((l) => [
            t(o.$slots, "selector", n(i({ ...e, ...l })), () => [
              (d(!0), v(I, null, L(l.activeOptions, (b) => (d(), v("span", {
                key: b.value
              }, c(b.label), 1))), 128))
            ])
          ]),
          selectorIcon: r((l) => [
            t(o.$slots, "icon", n(i({ ...e, ...l })), () => [
              s[3] || (s[3] = q("+", -1))
            ])
          ]),
          popoverItem: r((l) => [
            t(o.$slots, "item", n(i({ ...e, ...l })), () => [
              m("span", H, c(l.label), 1)
            ])
          ]),
          afterDropdown: r(() => [
            A(m("select", g({
              class: "queso-select__select-native",
              id: e.fieldID,
              name: e.fieldName,
              required: e.isRequired,
              disabled: e.isDisabled,
              "aria-hidden": "true",
              tabindex: "-1",
              onFocus: s[0] || (s[0] = (l) => {
                var b;
                return (b = p.value) == null ? void 0 : b.focusSelector();
              })
            }, u.extraAttributes, {
              "onUpdate:modelValue": s[1] || (s[1] = (l) => a.value = l)
            }), [
              s[4] || (s[4] = m("option", null, null, -1)),
              (d(!0), v(I, null, L(u.options, (l) => (d(), v("option", {
                key: l.value,
                value: l.value
              }, c(l.label), 9, C))), 128))
            ], 16, N), [
              [P, a.value]
            ])
          ]),
          _: 2
        }, 1032, ["options", "is-disabled", "is-required", "is-error", "aria-label", "aria-labelledby", "onMouseover", "onMouseleave", "onFocusin", "onFocusout", "modelValue"]))
      ]),
      afterInput: r((e) => [
        t(o.$slots, "afterInput", n(i(e)))
      ]),
      error: r((e) => [
        t(o.$slots, "error", n(i(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  J as _
};
