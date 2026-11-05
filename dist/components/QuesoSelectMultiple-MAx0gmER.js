import { defineComponent as V, mergeModels as F, useModel as k, ref as B, openBlock as a, createBlock as y, unref as f, mergeProps as $, withCtx as r, renderSlot as t, normalizeProps as i, guardReactiveProps as n, createElementVNode as b, createTextVNode as g, toDisplayString as c, createElementBlock as v, Fragment as q, renderList as I, withDirectives as E, vModelSelect as w } from "vue";
import { u as A } from "./QuesoCheckbox-DHwgNiJt.js";
import { _ as P } from "./QuesoField-DQ3NyaNX.js";
import { _ as R } from "./QuesoDropdown-wkHmnovD.js";
import '../assets/components/QuesoCheckboxMultiple.css';const O = { class: "queso-select__read-only" }, S = ["innerHTML"], T = { class: "text" }, h = ["id", "name", "required", "disabled"], H = ["value"], j = /* @__PURE__ */ V({
  __name: "QuesoSelectMultiple",
  props: /* @__PURE__ */ F({
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
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(u) {
    const L = A(u), d = k(u, "modelValue"), p = B(null), M = (o, s) => {
      o.currentTarget.contains(o.relatedTarget) || s(!1);
    };
    return (o, s) => (a(), y(f(P), $({ class: "-select-multiple" }, f(L)), {
      beforeLabel: r((e) => [
        t(o.$slots, "beforeLabel", i(n(e)))
      ]),
      label: r((e) => [
        t(o.$slots, "label", i(n(e)))
      ]),
      required: r((e) => [
        t(o.$slots, "required", i(n(e)))
      ]),
      afterLabel: r((e) => [
        t(o.$slots, "afterLabel", i(n(e)))
      ]),
      beforeInput: r((e) => [
        t(o.$slots, "beforeInput", i(n(e)))
      ]),
      input: r((e) => [
        e.isReadOnly ? t(o.$slots, "readOnly", i(n(e)), () => [
          b("div", O, [
            b("span", {
              class: "queso-select__read-only__label",
              innerHTML: d.value
            }, null, 8, S)
          ])
        ], void 0, 0) : (a(), y(f(R), {
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
          multiple: "",
          onMouseover: (l) => e.toggleIsHover(!0),
          onMouseleave: (l) => e.toggleIsHover(!1),
          onFocusin: (l) => !e.isActive && e.toggleIsActive(!0),
          onFocusout: (l) => M(l, e.toggleIsActive),
          modelValue: d.value,
          "onUpdate:modelValue": s[2] || (s[2] = (l) => d.value = l)
        }, {
          selectorPlaceholder: r((l) => [
            t(o.$slots, "placeholder", i(n({ ...e, ...l })), () => [
              g(c(u.placeholder), 1)
            ])
          ]),
          selectorActiveOptions: r((l) => [
            t(o.$slots, "selector", i(n({ ...e, ...l })), () => [
              (a(!0), v(q, null, I(l.activeOptions, (m) => (a(), v("span", {
                key: m.value
              }, c(m.label), 1))), 128))
            ])
          ]),
          selectorIcon: r((l) => [
            t(o.$slots, "icon", i(n({ ...e, ...l })), () => [
              s[3] || (s[3] = g("+", -1))
            ])
          ]),
          popoverItem: r((l) => [
            t(o.$slots, "item", i(n({ ...e, ...l })), () => [
              b("span", T, c(l.label), 1)
            ])
          ]),
          afterDropdown: r(() => [
            E(b("select", $({
              class: "queso-select__select-native",
              id: e.fieldID,
              name: e.fieldName,
              required: e.isRequired,
              disabled: e.isDisabled,
              multiple: "",
              "aria-hidden": "true",
              tabindex: "-1",
              onFocus: s[0] || (s[0] = (l) => {
                var m;
                return (m = p.value) == null ? void 0 : m.focusSelector();
              })
            }, u.extraAttributes, {
              "onUpdate:modelValue": s[1] || (s[1] = (l) => d.value = l)
            }), [
              s[4] || (s[4] = b("option", null, null, -1)),
              (a(!0), v(q, null, I(u.options, (l) => (a(), v("option", {
                key: l.value,
                value: l.value
              }, c(l.label), 9, H))), 128))
            ], 16, h), [
              [w, d.value]
            ])
          ]),
          _: 2
        }, 1032, ["options", "is-disabled", "is-required", "is-error", "aria-label", "aria-labelledby", "onMouseover", "onMouseleave", "onFocusin", "onFocusout", "modelValue"]))
      ]),
      afterInput: r((e) => [
        t(o.$slots, "afterInput", i(n(e)))
      ]),
      error: r((e) => [
        t(o.$slots, "error", i(n(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  j as _
};
