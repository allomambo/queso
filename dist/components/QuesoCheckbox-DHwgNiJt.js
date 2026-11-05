import { computed as $, defineComponent as y, mergeModels as _, useModel as C, ref as B, openBlock as f, createBlock as h, unref as k, mergeProps as q, withCtx as n, renderSlot as s, normalizeProps as l, guardReactiveProps as r, resolveDynamicComponent as g, normalizeClass as R, withDirectives as H, createElementBlock as I, vModelCheckbox as L, createCommentVNode as p, createElementVNode as b, createTextVNode as M } from "vue";
import { _ as P } from "./QuesoField-DQ3NyaNX.js";
import '../assets/components/QuesoCheckbox.css';const V = ["id", "name", "label", "isError", "isRequired", "isDisabled", "isReadOnly"];
function E(i) {
  return V.includes(i);
}
const F = (i) => $(() => {
  const v = {};
  for (const c in i)
    E(c) && (v[c] = i[c]);
  return v;
}), O = ["id", "name", "required", "disabled", "onFocus", "onBlur"], x = { class: "queso-checkbox__box" }, A = { class: "queso-checkbox__box__symbol" }, N = { class: "queso-checkbox__label" }, T = ["innerHTML"], Q = /* @__PURE__ */ y({
  __name: "QuesoCheckbox",
  props: /* @__PURE__ */ _({
    boxLabel: {},
    id: {},
    name: {},
    label: {},
    isError: { type: Boolean },
    isRequired: { type: Boolean },
    isDisabled: { type: Boolean },
    isReadOnly: { type: Boolean },
    extraAttributes: {}
  }, {
    modelValue: { type: Boolean, required: !0, default: !1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(i) {
    const c = F(i), m = C(i, "modelValue"), u = $(() => !!m.value), t = B(!1);
    return (o, a) => (f(), h(k(P), q({
      class: "-checkbox",
      "has-static-label": ""
    }, k(c)), {
      beforeLabel: n((e) => [
        s(o.$slots, "beforeLabel", l(r(e)))
      ]),
      label: n((e) => [
        s(o.$slots, "label", l(r(e)))
      ]),
      required: n((e) => [
        s(o.$slots, "required", l(r(e)))
      ]),
      afterLabel: n((e) => [
        s(o.$slots, "afterLabel", l(r(e)))
      ]),
      beforeInput: n((e) => [
        s(o.$slots, "beforeInput", l(r(e)))
      ]),
      input: n((e) => [
        (f(), h(g(e.isReadOnly ? "div" : "label"), {
          class: R(["queso-checkbox", { "is-checkbox-hover": t.value, "is-checked": u.value }]),
          for: e.isReadOnly ? null : e.fieldID,
          onMouseover: (d) => {
            t.value = !0, e.toggleIsHover(!0);
          },
          onMouseleave: (d) => {
            t.value = !1, e.toggleIsHover(!1);
          }
        }, {
          default: n(() => [
            e.isReadOnly ? p("", !0) : H((f(), I("input", q({
              key: 0,
              class: "queso-checkbox__native",
              type: "checkbox",
              id: e.fieldID,
              name: e.fieldName,
              required: e.isRequired,
              disabled: e.isDisabled,
              onFocus: (d) => e.toggleIsActive(!0),
              onBlur: (d) => e.toggleIsActive(!1)
            }, i.extraAttributes, {
              "onUpdate:modelValue": a[0] || (a[0] = (d) => m.value = d)
            }), null, 16, O)), [
              [L, m.value]
            ]),
            s(o.$slots, "checkbox", l(r({ ...e, isHovered: t.value, isChecked: u.value })), () => [
              s(o.$slots, "checkboxBox", l(r({ ...e, isHovered: t.value, isChecked: u.value })), () => [
                b("span", x, [
                  b("span", A, [
                    s(o.$slots, "checkboxBoxSymbol", l(r({ ...e, isHovered: t.value, isChecked: u.value })), () => [
                      a[1] || (a[1] = M("✔︎", -1))
                    ])
                  ])
                ])
              ]),
              s(o.$slots, "checkboxLabel", l(r({ ...e, isHovered: t.value, isChecked: u.value })), () => [
                b("span", N, [
                  b("span", {
                    class: "queso-checkbox__label__text",
                    innerHTML: i.boxLabel
                  }, null, 8, T),
                  e.isRequired ? s(o.$slots, "checkboxLabelRequired", l(r({ ...e, isHovered: t.value, isChecked: u.value })), () => [
                    a[2] || (a[2] = b("span", { class: "queso-checkbox__label__required" }, "*", -1))
                  ], void 0, 0) : p("", !0)
                ])
              ])
            ])
          ]),
          _: 2
        }, 1064, ["class", "for", "onMouseover", "onMouseleave"]))
      ]),
      afterInput: n((e) => [
        s(o.$slots, "afterInput", l(r(e)))
      ]),
      error: n((e) => [
        s(o.$slots, "error", l(r(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  Q as _,
  F as u
};
