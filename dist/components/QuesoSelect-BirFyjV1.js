import { defineComponent as S, mergeModels as w, useModel as D, computed as I, openBlock as r, createBlock as y, unref as v, mergeProps as _, withCtx as l, renderSlot as s, normalizeProps as n, guardReactiveProps as u, createElementBlock as i, createElementVNode as c, toDisplayString as p, createTextVNode as q, Fragment as B, renderList as M, withDirectives as R, vModelSelect as g } from "vue";
import { u as A } from "./QuesoCheckbox-CSerLn51.js";
import { _ as C } from "./QuesoField-DL0yjp-z.js";
import { _ as N } from "./QuesoDropdown-ehmLjGMW.js";
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
    const V = A(f), a = D(f, "modelValue"), b = I({
      get() {
        return a.value ? [a.value] : [];
      },
      set(e) {
        a.value = e[0];
      }
    });
    return (e, m) => (r(), y(v(C), _({ class: "-select" }, v(V)), {
      beforeLabel: l(() => [
        s(e.$slots, "beforeLabel")
      ]),
      label: l((t) => [
        s(e.$slots, "label", n(u({ ...t })))
      ]),
      required: l((t) => [
        s(e.$slots, "required", n(u({ ...t })))
      ]),
      afterLabel: l(() => [
        s(e.$slots, "afterLabel")
      ]),
      beforeInput: l(() => [
        s(e.$slots, "beforeInput")
      ]),
      input: l(({ fieldID: t, fieldName: k, isRequired: P, isDisabled: L, isReadOnly: E, toggleIsActive: $, toggleIsHover: h }) => [
        E ? (r(), i("div", U, [
          c("span", z, p(a.value || e.placeholder), 1)
        ])) : (r(), y(v(N), {
          key: 1,
          class: "queso-select",
          options: e.options,
          onMouseover: (o) => h(!0),
          onMouseleave: (o) => h(!1),
          modelValue: b.value,
          "onUpdate:modelValue": m[0] || (m[0] = (o) => b.value = o)
        }, {
          selectorPlaceholder: l(() => [
            s(e.$slots, "placeholder", n(u({ placeholder: e.placeholder })), () => [
              q(p(e.placeholder), 1)
            ])
          ]),
          selectorActiveOptions: l(({ activeOptions: o }) => [
            s(e.$slots, "selector", n(u({ activeOptions: o })), () => [
              (r(!0), i(B, null, M(o, (d) => (r(), i("span", {
                key: d.value
              }, p(d.label), 1))), 128))
            ])
          ]),
          selectorIcon: l(() => [
            s(e.$slots, "icon", {}, () => [
              q("+")
            ])
          ]),
          item: l(({ value: o, label: d, data: F }) => [
            s(e.$slots, "item", n(u({ value: o, label: d, data: F })), () => [
              c("span", O, p(d), 1)
            ])
          ]),
          _: 2
        }, 1032, ["options", "onMouseover", "onMouseleave", "modelValue"])),
        R(c("select", _({
          class: "queso-select__select-native",
          id: t,
          name: k,
          required: P,
          disabled: L,
          onFocus: (o) => $(!0),
          onBlur: (o) => $(!1)
        }, e.extraAttributes, {
          "onUpdate:modelValue": m[1] || (m[1] = (o) => a.value = o)
        }), [
          T,
          (r(!0), i(B, null, M(e.options, (o) => (r(), i("option", {
            key: o.value,
            value: o.value
          }, p(o.label), 9, j))), 128))
        ], 16, Q), [
          [g, a.value]
        ])
      ]),
      afterInput: l(() => [
        s(e.$slots, "afterInput")
      ]),
      error: l((t) => [
        s(e.$slots, "error", n(u({ ...t })))
      ]),
      _: 3
    }, 16));
  }
});
export {
  Y as _
};
