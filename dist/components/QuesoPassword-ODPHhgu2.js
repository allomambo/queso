import { defineComponent as g, mergeModels as P, useModel as I, ref as h, computed as q, openBlock as b, createBlock as B, unref as w, mergeProps as c, withCtx as i, renderSlot as s, normalizeProps as l, guardReactiveProps as r, createElementVNode as f, withDirectives as M, createElementBlock as V, vModelDynamic as L, createTextVNode as S } from "vue";
import { u as k } from "./QuesoCheckbox-DHwgNiJt.js";
import { _ as R } from "./QuesoField-DQ3NyaNX.js";
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
  setup(d) {
    const y = k(d), m = I(d, "modelValue"), t = h(!1), $ = q(() => t.value ? "text" : "password"), v = () => {
      t.value = !0;
    }, p = () => {
      t.value = !1;
    }, a = () => {
      t.value = !t.value;
    };
    return (o, n) => (b(), B(w(R), c({ class: "-password" }, w(y)), {
      beforeLabel: i((e) => [
        s(o.$slots, "beforeLabel", l(r(e)))
      ]),
      label: i((e) => [
        s(o.$slots, "label", l(r(e)))
      ]),
      required: i((e) => [
        s(o.$slots, "required", l(r(e)))
      ]),
      afterLabel: i((e) => [
        s(o.$slots, "afterLabel", l(r(e)))
      ]),
      beforeInput: i((e) => [
        s(o.$slots, "beforeInput", l(r(e)))
      ]),
      input: i((e) => [
        f("div", A, [
          s(o.$slots, "beforePasswordInput", l(r({ ...e, isPasswordShow: t.value, togglePasswordVisibility: a, showPassword: v, hidePassword: p }))),
          e.isReadOnly ? s(o.$slots, "readOnly", l(r(e)), () => [
            f("span", {
              class: "queso-password__readonly",
              innerHTML: m.value
            }, null, 8, E)
          ], void 0, 0) : M((b(), V("input", c({
            key: 1,
            class: "queso-password__input",
            type: $.value,
            id: e.fieldID,
            name: e.fieldName,
            placeholder: d.placeholder,
            required: e.isRequired,
            disabled: e.isDisabled,
            onMouseover: (u) => e.toggleIsHover(!0),
            onMouseleave: (u) => e.toggleIsHover(!1),
            onFocus: (u) => e.toggleIsActive(!0),
            onBlur: (u) => e.toggleIsActive(!1)
          }, d.extraAttributes, {
            "onUpdate:modelValue": n[0] || (n[0] = (u) => m.value = u)
          }), null, 16, H)), [
            [L, m.value]
          ]),
          s(o.$slots, "afterPasswordInput", l(r({ ...e, isPasswordShow: t.value, togglePasswordVisibility: a, showPassword: v, hidePassword: p }))),
          s(o.$slots, "toggleVisibilityButton", l(r({ ...e, isPasswordShow: t.value, togglePasswordVisibility: a, showPassword: v, hidePassword: p })), () => [
            f("button", {
              class: "queso-password__visibility-button",
              type: "button",
              onClick: n[1] || (n[1] = (u) => a())
            }, [
              s(o.$slots, "toggleVisibilityButtonIcon", l(r({
                ...e,
                isPasswordShow: t.value,
                togglePasswordVisibility: a,
                showPassword: v,
                hidePassword: p
              })), () => [
                n[2] || (n[2] = S("◎", -1))
              ])
            ])
          ])
        ])
      ]),
      afterInput: i((e) => [
        s(o.$slots, "afterInput", l(r(e)))
      ]),
      error: i((e) => [
        s(o.$slots, "error", l(r(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  T as _
};
