import { defineComponent as S, mergeModels as w, useModel as D, computed as I, openBlock as n, createBlock as y, unref as v, mergeProps as _, withCtx as s, renderSlot as t, normalizeProps as r, guardReactiveProps as a, createElementBlock as i, createElementVNode as c, toDisplayString as p, createTextVNode as q, Fragment as B, renderList as M, withDirectives as R, vModelSelect as g } from "vue";
import { u as A } from "./QuesoCheckbox-C7EQnWOn.js";
import { _ as C } from "./QuesoField-DYBEGM8C.js";
import { _ as N } from "./QuesoDropdown-DCDvSGBg.js";
import '../assets/components/QuesoSelect.css';const U = {
  key: 0,
  class: "queso-select__read-only"
}, z = { class: "queso-select__read-only__label" }, O = { class: "text" }, Q = ["id", "name", "required", "disabled", "onFocus", "onBlur"], T = /* @__PURE__ */ c("option", null, null, -1), j = ["value"], Y = /* @__PURE__ */ S({
  __name: "QuesoSelect",
  props: /* @__PURE__ */ w({
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
  setup(f) {
    const V = A(f), u = D(f, "modelValue"), b = I({
      get() {
        return u.value ? [u.value] : [];
      },
      set(e) {
        u.value = e[0];
      }
    });
    return (e, m) => (n(), y(v(C), _({ class: "-select" }, v(V)), {
      beforeLabel: s((l) => [
        t(e.$slots, "beforeLabel", r(a({ ...l })))
      ]),
      label: s((l) => [
        t(e.$slots, "label", r(a({ ...l })))
      ]),
      required: s((l) => [
        t(e.$slots, "required", r(a({ ...l })))
      ]),
      afterLabel: s((l) => [
        t(e.$slots, "afterLabel", r(a({ ...l })))
      ]),
      beforeInput: s((l) => [
        t(e.$slots, "beforeInput", r(a({ ...l })))
      ]),
      input: s(({ fieldID: l, fieldName: k, isRequired: P, isDisabled: L, isReadOnly: E, toggleIsActive: $, toggleIsHover: h }) => [
        E ? (n(), i("div", U, [
          c("span", z, p(u.value || e.placeholder), 1)
        ])) : (n(), y(v(N), {
          key: 1,
          class: "queso-select",
          options: e.options,
          onMouseover: (o) => h(!0),
          onMouseleave: (o) => h(!1),
          modelValue: b.value,
          "onUpdate:modelValue": m[0] || (m[0] = (o) => b.value = o)
        }, {
          selectorPlaceholder: s(() => [
            t(e.$slots, "placeholder", r(a({ placeholder: e.placeholder })), () => [
              q(p(e.placeholder), 1)
            ])
          ]),
          selectorActiveOptions: s(({ activeOptions: o }) => [
            t(e.$slots, "selector", r(a({ activeOptions: o })), () => [
              (n(!0), i(B, null, M(o, (d) => (n(), i("span", {
                key: d.value
              }, p(d.label), 1))), 128))
            ])
          ]),
          selectorIcon: s(() => [
            t(e.$slots, "icon", {}, () => [
              q("+")
            ])
          ]),
          item: s(({ value: o, label: d, data: F }) => [
            t(e.$slots, "item", r(a({ value: o, label: d, data: F })), () => [
              c("span", O, p(d), 1)
            ])
          ]),
          _: 2
        }, 1032, ["options", "onMouseover", "onMouseleave", "modelValue"])),
        R(c("select", _({
          class: "queso-select__select-native",
          id: l,
          name: k,
          required: P,
          disabled: L,
          onFocus: (o) => $(!0),
          onBlur: (o) => $(!1)
        }, e.extraAttributes, {
          "onUpdate:modelValue": m[1] || (m[1] = (o) => u.value = o),
          tabindex: "-1"
        }), [
          T,
          (n(!0), i(B, null, M(e.options, (o) => (n(), i("option", {
            key: o.value,
            value: o.value
          }, p(o.label), 9, j))), 128))
        ], 16, Q), [
          [g, u.value]
        ])
      ]),
      afterInput: s((l) => [
        t(e.$slots, "afterInput", r(a({ ...l })))
      ]),
      error: s((l) => [
        t(e.$slots, "error", r(a({ ...l })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  Y as _
};
