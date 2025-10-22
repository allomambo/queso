import { defineComponent as I, mergeModels as M, useModel as h, openBlock as i, createBlock as $, unref as c, mergeProps as v, withCtx as s, renderSlot as t, normalizeProps as r, guardReactiveProps as n, createElementVNode as a, createTextVNode as y, toDisplayString as m, createElementBlock as p, Fragment as g, renderList as _, withDirectives as B, vModelSelect as V } from "vue";
import { u as k } from "./QuesoCheckbox-oMH7omFq.js";
import { _ as L } from "./QuesoField-DYBEGM8C.js";
import { _ as P } from "./QuesoDropdown-iupHTqQe.js";
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
  setup(f) {
    const q = k(f), u = h(f, "modelValue");
    return (o, d) => (i(), $(c(L), v({ class: "-select-multiple" }, c(q)), {
      beforeLabel: s((e) => [
        t(o.$slots, "beforeLabel", r(n(e)))
      ]),
      label: s((e) => [
        t(o.$slots, "label", r(n(e)))
      ]),
      required: s((e) => [
        t(o.$slots, "required", r(n(e)))
      ]),
      afterLabel: s((e) => [
        t(o.$slots, "afterLabel", r(n(e)))
      ]),
      beforeInput: s((e) => [
        t(o.$slots, "beforeInput", r(n(e)))
      ]),
      input: s((e) => [
        e.isReadOnly ? t(o.$slots, "readOnly", r(v({ key: 0 }, e)), () => [
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
          multiple: "",
          onMouseover: (l) => e.toggleIsHover(!0),
          onMouseleave: (l) => e.toggleIsHover(!1),
          modelValue: u.value,
          "onUpdate:modelValue": d[1] || (d[1] = (l) => u.value = l)
        }, {
          selectorPlaceholder: s((l) => [
            t(o.$slots, "placeholder", r(n({ ...e, ...l })), () => [
              y(m(o.placeholder), 1)
            ])
          ]),
          selectorActiveOptions: s((l) => [
            t(o.$slots, "selector", r(n({ ...e, ...l })), () => [
              (i(!0), p(g, null, _(l.activeOptions, (b) => (i(), p("span", {
                key: b.value
              }, m(b.label), 1))), 128))
            ])
          ]),
          selectorIcon: s((l) => [
            t(o.$slots, "icon", r(n({ ...e, ...l })), () => [
              y("+")
            ])
          ]),
          popoverItem: s((l) => [
            t(o.$slots, "item", r(n({ ...e, ...l })), () => [
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
        }, 1032, ["options", "onMouseover", "onMouseleave", "modelValue"]))
      ]),
      afterInput: s((e) => [
        t(o.$slots, "afterInput", r(n(e)))
      ]),
      error: s((e) => [
        t(o.$slots, "error", r(n(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  w as _
};
