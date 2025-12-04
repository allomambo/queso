import { defineComponent as I, mergeModels as M, useModel as h, openBlock as i, createBlock as $, unref as c, mergeProps as v, withCtx as s, renderSlot as r, normalizeProps as t, guardReactiveProps as n, createElementVNode as a, createTextVNode as y, toDisplayString as m, createElementBlock as p, Fragment as g, renderList as _, withDirectives as B, vModelSelect as V } from "vue";
import { u as k } from "./QuesoCheckbox-oMH7omFq.js";
import { _ as L } from "./QuesoField-DYBEGM8C.js";
import { _ as P } from "./QuesoDropdown-DHvVnv75.js";
import '../assets/components/QuesoCheckboxMultiple.css';const A = { class: "queso-select__read-only" }, O = ["innerHTML"], R = { class: "text" }, E = ["id", "name", "required", "disabled", "onFocus", "onBlur"], F = /* @__PURE__ */ a("option", null, null, -1), H = ["value"], w = /* @__PURE__ */ I({
  __name: "QuesoSelectMultiple",
  props: /* @__PURE__ */ M({
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
    modelValue: { required: !0, default: [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(b) {
    const q = k(b), u = h(b, "modelValue");
    return (o, d) => (i(), $(c(L), v({ class: "-select-multiple" }, c(q)), {
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
        e.isReadOnly ? r(o.$slots, "readOnly", t(v({ key: 0 }, e)), () => [
          a("div", A, [
            a("span", {
              class: "queso-select__read-only__label",
              innerHTML: u.value
            }, null, 8, O)
          ])
        ]) : (i(), $(c(P), {
          key: 1,
          class: "queso-select",
          options: o.options,
          "is-disabled": e.isDisabled,
          multiple: "",
          onMouseover: (l) => e.toggleIsHover(!0),
          onMouseleave: (l) => e.toggleIsHover(!1),
          modelValue: u.value,
          "onUpdate:modelValue": d[1] || (d[1] = (l) => u.value = l)
        }, {
          selectorPlaceholder: s((l) => [
            r(o.$slots, "placeholder", t(n({ ...e, ...l })), () => [
              y(m(o.placeholder), 1)
            ])
          ]),
          selectorActiveOptions: s((l) => [
            r(o.$slots, "selector", t(n({ ...e, ...l })), () => [
              (i(!0), p(g, null, _(l.activeOptions, (f) => (i(), p("span", {
                key: f.value
              }, m(f.label), 1))), 128))
            ])
          ]),
          selectorIcon: s((l) => [
            r(o.$slots, "icon", t(n({ ...e, ...l })), () => [
              y("+")
            ])
          ]),
          popoverItem: s((l) => [
            r(o.$slots, "item", t(n({ ...e, ...l })), () => [
              a("span", R, m(l.label), 1)
            ])
          ]),
          afterDropdown: s(() => [
            B(a("select", v({
              class: "queso-select__select-native",
              id: e.fieldID,
              name: e.fieldName,
              required: e.isRequired,
              disabled: e.isDisabled,
              multiple: "",
              onFocus: (l) => e.toggleIsActive(!0),
              onBlur: (l) => e.toggleIsActive(!1)
            }, o.extraAttributes, {
              "onUpdate:modelValue": d[0] || (d[0] = (l) => u.value = l)
            }), [
              F,
              (i(!0), p(g, null, _(o.options, (l) => (i(), p("option", {
                key: l.value,
                value: l.value
              }, m(l.label), 9, H))), 128))
            ], 16, E), [
              [V, u.value]
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
  w as _
};
