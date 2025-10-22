import { defineComponent as g, mergeModels as P, useModel as h, ref as I, computed as q, openBlock as b, createBlock as B, unref as c, mergeProps as m, withCtx as i, renderSlot as o, normalizeProps as l, guardReactiveProps as r, createElementVNode as f, withDirectives as M, createElementBlock as V, vModelDynamic as k, createTextVNode as L } from "vue";
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
  setup(w) {
    const y = S(w), v = h(w, "modelValue"), t = I(!1), $ = q(() => t.value ? "text" : "password"), a = () => {
      t.value = !0;
    }, d = () => {
      t.value = !1;
    }, u = () => {
      t.value = !t.value;
    };
    return (s, p) => (b(), B(c(R), m({ class: "-password" }, c(y)), {
      beforeLabel: i((e) => [
        o(s.$slots, "beforeLabel", l(r(e)))
      ]),
      label: i((e) => [
        o(s.$slots, "label", l(r(e)))
      ]),
      required: i((e) => [
        o(s.$slots, "required", l(r(e)))
      ]),
      afterLabel: i((e) => [
        o(s.$slots, "afterLabel", l(r(e)))
      ]),
      beforeInput: i((e) => [
        o(s.$slots, "beforeInput", l(r(e)))
      ]),
      input: i((e) => [
        f("div", A, [
          o(s.$slots, "beforePasswordInput", l(r({ ...e, isPasswordShow: t.value, togglePasswordVisibility: u, showPassword: a, hidePassword: d }))),
          e.isReadOnly ? o(s.$slots, "readOnly", l(m({ key: 0 }, e)), () => [
            f("span", {
              class: "queso-password__readonly",
              innerHTML: v.value
            }, null, 8, E)
          ]) : M((b(), V("input", m({
            key: 1,
            class: "queso-password__input",
            type: $.value,
            id: e.fieldID,
            name: e.fieldName,
            placeholder: s.placeholder,
            required: e.isRequired,
            disabled: e.isDisabled,
            onMouseover: (n) => e.toggleIsHover(!0),
            onMouseleave: (n) => e.toggleIsHover(!1),
            onFocus: (n) => e.toggleIsActive(!0),
            onBlur: (n) => e.toggleIsActive(!1)
          }, s.extraAttributes, {
            "onUpdate:modelValue": p[0] || (p[0] = (n) => v.value = n)
          }), null, 16, H)), [
            [k, v.value]
          ]),
          o(s.$slots, "afterPasswordInput", l(r({ ...e, isPasswordShow: t.value, togglePasswordVisibility: u, showPassword: a, hidePassword: d }))),
          o(s.$slots, "toggleVisibilityButton", l(r({ ...e, isPasswordShow: t.value, togglePasswordVisibility: u, showPassword: a, hidePassword: d })), () => [
            f("button", {
              class: "queso-password__visibility-button",
              onClick: p[1] || (p[1] = (n) => u())
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
      afterInput: i((e) => [
        o(s.$slots, "afterInput", l(r(e)))
      ]),
      error: i((e) => [
        o(s.$slots, "error", l(r(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  T as _
};
