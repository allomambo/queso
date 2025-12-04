import { defineComponent as M, mergeModels as h, useModel as B, computed as V, openBlock as u, createBlock as g, unref as v, mergeProps as p, withCtx as s, renderSlot as r, normalizeProps as t, guardReactiveProps as n, createElementVNode as a, createTextVNode as y, toDisplayString as m, createElementBlock as c, Fragment as _, renderList as q, withDirectives as k, vModelSelect as L } from "vue";
import { u as P } from "./QuesoCheckbox-oMH7omFq.js";
import { _ as A } from "./QuesoField-DYBEGM8C.js";
import { _ as O } from "./QuesoDropdown-Dxd1nopn.js";
import '../assets/components/QuesoSelect.css';const R = { class: "queso-select__read-only" }, E = ["innerHTML"], F = { class: "text" }, H = ["id", "name", "required", "disabled", "onFocus", "onBlur"], S = /* @__PURE__ */ a("option", null, null, -1), N = ["value"], Q = /* @__PURE__ */ M({
  __name: "QuesoSelect",
  props: /* @__PURE__ */ h({
    options: {},
    placeholder: {},
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
  setup(b) {
    const I = P(b), i = B(b, "modelValue"), f = V({
      get() {
        return i.value ? [i.value] : [];
      },
      set(o) {
        i.value = o[0];
      }
    });
    return (o, d) => (u(), g(v(A), p({ class: "-select" }, v(I)), {
      beforeLabel: s((e) => [
        r(o.$slots, "beforeLabel", t(n(e)))
      ]),
      label: s((e) => [
        r(o.$slots, "label", t(n(e)))
      ]),
      required: s((e) => [
        r(o.$slots, "required", t(n(e)))
      ]),
      afterLabel: s((e) => [
        r(o.$slots, "afterLabel", t(n(e)))
      ]),
      beforeInput: s((e) => [
        r(o.$slots, "beforeInput", t(n(e)))
      ]),
      input: s((e) => [
        e.isReadOnly ? r(o.$slots, "readOnly", t(p({ key: 0 }, e)), () => [
          a("div", R, [
            a("span", {
              class: "queso-select__read-only__label",
              innerHTML: i.value
            }, null, 8, E)
          ])
        ]) : (u(), g(v(O), {
          key: 1,
          class: "queso-select",
          options: o.options,
          "is-disabled": e.isDisabled,
          onMouseover: (l) => e.toggleIsHover(!0),
          onMouseleave: (l) => e.toggleIsHover(!1),
          modelValue: f.value,
          "onUpdate:modelValue": d[1] || (d[1] = (l) => f.value = l)
        }, {
          selectorPlaceholder: s((l) => [
            r(o.$slots, "placeholder", t(n({ ...e, ...l })), () => [
              y(m(o.placeholder), 1)
            ])
          ]),
          selectorActiveOptions: s((l) => [
            r(o.$slots, "selector", t(n({ ...e, ...l })), () => [
              (u(!0), c(_, null, q(l.activeOptions, ($) => (u(), c("span", {
                key: $.value
              }, m($.label), 1))), 128))
            ])
          ]),
          selectorIcon: s((l) => [
            r(o.$slots, "icon", t(n({ ...e, ...l })), () => [
              y("+")
            ])
          ]),
          popoverItem: s((l) => [
            r(o.$slots, "item", t(n({ ...e, ...l })), () => [
              a("span", F, m(l.label), 1)
            ])
          ]),
          afterDropdown: s(() => [
            k(a("select", p({
              class: "queso-select__select-native",
              id: e.fieldID,
              name: e.fieldName,
              required: e.isRequired,
              disabled: e.isDisabled,
              onFocus: (l) => e.toggleIsActive(!0),
              onBlur: (l) => e.toggleIsActive(!1)
            }, o.extraAttributes, {
              "onUpdate:modelValue": d[0] || (d[0] = (l) => i.value = l),
              tabindex: "-1"
            }), [
              S,
              (u(!0), c(_, null, q(o.options, (l) => (u(), c("option", {
                key: l.value,
                value: l.value
              }, m(l.label), 9, N))), 128))
            ], 16, H), [
              [L, i.value]
            ])
          ]),
          _: 2
        }, 1032, ["options", "is-disabled", "onMouseover", "onMouseleave", "modelValue"]))
      ]),
      afterInput: s((e) => [
        r(o.$slots, "afterInput", t(n(e)))
      ]),
      error: s((e) => [
        r(o.$slots, "error", t(n(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  Q as _
};
