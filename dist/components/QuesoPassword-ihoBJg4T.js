import { defineComponent as g, mergeModels as P, useModel as h, ref as I, computed as q, openBlock as w, createBlock as B, unref as c, mergeProps as m, withCtx as n, renderSlot as o, normalizeProps as l, guardReactiveProps as r, createElementVNode as f, withDirectives as M, createElementBlock as V, vModelDynamic as k, createTextVNode as L } from "vue";
import { u as S } from "./QuesoCheckbox-oMH7omFq.js";
import { _ as R } from "./QuesoField-DYBEGM8C.js";
import '../assets/components/QuesoCheckboxMultiple.css';const A = { class: "queso-password" }, E = ["innerHTML"], H = ["type", "id", "name", "placeholder", "required", "disabled", "onMouseover", "onMouseleave", "onFocus", "onBlur"], T = /* @__PURE__ */ g({
  __name: "QuesoPassword",
  props: /* @__PURE__ */ P({
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
    modelValue: { required: !0, default: "" },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(b) {
    const y = S(b), v = h(b, "modelValue"), t = I(!1), $ = q(() => t.value ? "text" : "password"), a = () => {
      t.value = !0;
    }, d = () => {
      t.value = !1;
    }, u = () => {
      t.value = !t.value;
    };
    return (s, p) => (w(), B(c(R), m({ class: "-password" }, c(y)), {
      beforeLabel: n((e) => [
        o(s.$slots, "beforeLabel", l(r(e)))
      ]),
      label: n((e) => [
        o(s.$slots, "label", l(r(e)))
      ]),
      required: n((e) => [
        o(s.$slots, "required", l(r(e)))
      ]),
      afterLabel: n((e) => [
        o(s.$slots, "afterLabel", l(r(e)))
      ]),
      beforeInput: n((e) => [
        o(s.$slots, "beforeInput", l(r(e)))
      ]),
      input: n((e) => [
        f("div", A, [
          o(s.$slots, "beforePasswordInput", l(r({ ...e, isPasswordShow: t.value, togglePasswordVisibility: u, showPassword: a, hidePassword: d }))),
          e.isReadOnly ? o(s.$slots, "readOnly", l(m({ key: 0 }, e)), () => [
            f("span", {
              class: "queso-password__readonly",
              innerHTML: v.value
            }, null, 8, E)
          ]) : M((w(), V("input", m({
            key: 1,
            class: "queso-password__input",
            type: $.value,
            id: e.fieldID,
            name: e.fieldName,
            placeholder: s.placeholder,
            required: e.isRequired,
            disabled: e.isDisabled,
            onMouseover: (i) => e.toggleIsHover(!0),
            onMouseleave: (i) => e.toggleIsHover(!1),
            onFocus: (i) => e.toggleIsActive(!0),
            onBlur: (i) => e.toggleIsActive(!1)
          }, s.extraAttributes, {
            "onUpdate:modelValue": p[0] || (p[0] = (i) => v.value = i)
          }), null, 16, H)), [
            [k, v.value]
          ]),
          o(s.$slots, "afterPasswordInput", l(r({ ...e, isPasswordShow: t.value, togglePasswordVisibility: u, showPassword: a, hidePassword: d }))),
          o(s.$slots, "toggleVisibilityButton", l(r({ ...e, isPasswordShow: t.value, togglePasswordVisibility: u, showPassword: a, hidePassword: d })), () => [
            f("button", {
              class: "queso-password__visibility-button",
              type: "button",
              onClick: p[1] || (p[1] = (i) => u())
            }, [
              o(s.$slots, "toggleVisibilityButtonIcon", l(r({
                ...e,
                isPasswordShow: t.value,
                togglePasswordVisibility: u,
                showPassword: a,
                hidePassword: d
              })), () => [
                L("◎")
              ])
            ])
          ])
        ])
      ]),
      afterInput: n((e) => [
        o(s.$slots, "afterInput", l(r(e)))
      ]),
      error: n((e) => [
        o(s.$slots, "error", l(r(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  T as _
};
