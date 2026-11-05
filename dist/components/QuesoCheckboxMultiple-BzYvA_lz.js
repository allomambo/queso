import { defineComponent as V, mergeModels as L, useModel as H, ref as y, reactive as R, computed as h, watch as _, openBlock as f, createBlock as g, unref as M, mergeProps as i, withCtx as t, renderSlot as o, normalizeProps as u, guardReactiveProps as n, createElementBlock as q, Fragment as S, renderList as O, resolveDynamicComponent as E, normalizeClass as N, withDirectives as P, vModelCheckbox as A, createCommentVNode as x, createElementVNode as m, createTextVNode as F } from "vue";
import { u as w } from "./QuesoCheckbox-DHwgNiJt.js";
import { _ as T } from "./QuesoField-DQ3NyaNX.js";
import '../assets/components/QuesoCheckboxMultiple.css';const z = ["id", "name", "required", "disabled", "onFocus", "onBlur", "onUpdate:modelValue"], J = { class: "queso-checkbox__box" }, U = { class: "queso-checkbox__box__symbol" }, Q = { class: "queso-checkbox__label" }, j = ["innerHTML"], X = /* @__PURE__ */ V({
  __name: "QuesoCheckboxMultiple",
  props: /* @__PURE__ */ L({
    choices: {},
    validationMessage: { default: "Please select at least one option" },
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
  setup(b) {
    const c = b, I = w(c), v = H(b, "modelValue"), a = y(null), k = R(
      c.choices.map((l) => ({ isChecked: v.value.includes(l.value), ...l }))
    ), p = h(
      () => k.filter((l) => l.isChecked).map((l) => l.value)
    );
    _(
      p,
      (l) => {
        JSON.stringify(l) !== JSON.stringify(v.value) && (v.value = l);
      },
      { immediate: !0 }
    ), _(
      v,
      (l) => {
        k.forEach((r) => {
          r.isChecked = l.includes(r.value);
        });
      },
      { immediate: !0 }
    );
    const C = y([]), $ = h(() => p.value.length > 0), B = h(() => c.isRequired && !$.value);
    return _(
      B,
      (l) => {
        C.value.forEach((r) => {
          l ? r.setCustomValidity(c.validationMessage) : r.setCustomValidity("");
        });
      },
      { immediate: !0 }
    ), (l, r) => (f(), g(M(T), i({
      class: "-checkbox-multiple",
      "has-static-label": ""
    }, M(I)), {
      beforeLabel: t((e) => [
        o(l.$slots, "beforeLabel", u(n(e)))
      ]),
      label: t((e) => [
        o(l.$slots, "label", u(n(e)))
      ]),
      required: t((e) => [
        o(l.$slots, "required", u(n(e)))
      ]),
      afterLabel: t((e) => [
        o(l.$slots, "afterLabel", u(n(e)))
      ]),
      beforeInput: t((e) => [
        o(l.$slots, "beforeInput", u(n(e)))
      ]),
      input: t((e) => [
        (f(!0), q(S, null, O(k, (s) => (f(), g(E(e.isReadOnly ? "div" : "label"), {
          class: N(["queso-checkbox", { "is-checkbox-hover": a.value === s.value, "is-checked": s.isChecked }]),
          for: e.isReadOnly ? null : `${e.fieldID}-${s.value}`,
          onMouseover: (d) => {
            a.value = s.value, e.toggleIsHover(!0);
          },
          onMouseleave: (d) => {
            a.value = null, e.toggleIsHover(!1);
          }
        }, {
          default: t(() => [
            e.isReadOnly ? x("", !0) : P((f(), q("input", i({
              key: 0,
              ref_for: !0,
              ref_key: "checkboxInputs",
              ref: C,
              class: "queso-checkbox__native",
              type: "checkbox",
              id: `${e.fieldID}-${s.value}`,
              name: `${e.fieldName}[]`,
              required: e.isRequired && !$.value,
              disabled: e.isDisabled,
              onFocus: (d) => e.toggleIsActive(!0),
              onBlur: (d) => e.toggleIsActive(!1)
            }, { ref_for: !0 }, b.extraAttributes, {
              "onUpdate:modelValue": (d) => s.isChecked = d
            }), null, 16, z)), [
              [A, s.isChecked]
            ]),
            o(l.$slots, "checkbox", i({ ref_for: !0 }, {
              ...e,
              ...s,
              isHovered: a.value === s.value,
              isSelected: s.isChecked
            }), () => [
              o(l.$slots, "checkboxBox", i({ ref_for: !0 }, {
                ...e,
                ...s,
                isHovered: a.value === s.value,
                isSelected: s.isChecked
              }), () => [
                m("span", J, [
                  m("span", U, [
                    o(l.$slots, "checkboxBoxSymbol", i({ ref_for: !0 }, {
                      ...e,
                      ...s,
                      isHovered: a.value === s.value,
                      isSelected: s.isChecked
                    }), () => [
                      r[0] || (r[0] = F("✔︎", -1))
                    ])
                  ])
                ])
              ]),
              o(l.$slots, "checkboxLabel", i({ ref_for: !0 }, {
                ...e,
                ...s,
                isHovered: a.value === s.value,
                isSelected: s.isChecked
              }), () => [
                m("span", Q, [
                  m("span", {
                    class: "queso-checkbox__label__text",
                    innerHTML: s.label
                  }, null, 8, j)
                ])
              ])
            ])
          ]),
          _: 2
        }, 1064, ["class", "for", "onMouseover", "onMouseleave"]))), 256))
      ]),
      afterInput: t((e) => [
        o(l.$slots, "afterInput", u(n(e)))
      ]),
      error: t((e) => [
        o(l.$slots, "error", u(n(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  X as _
};
