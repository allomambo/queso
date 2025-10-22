import { defineComponent as V, mergeModels as L, useModel as H, ref as y, reactive as R, computed as k, watch as h, openBlock as m, createBlock as g, unref as q, mergeProps as i, withCtx as t, renderSlot as o, normalizeProps as a, guardReactiveProps as u, createElementBlock as M, Fragment as S, renderList as O, resolveDynamicComponent as E, normalizeClass as N, withDirectives as P, vModelCheckbox as A, createCommentVNode as F, createElementVNode as f, createTextVNode as w } from "vue";
import { u as x } from "./QuesoCheckbox-oMH7omFq.js";
import { _ as T } from "./QuesoField-DYBEGM8C.js";
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
    modelValue: { required: !0, default: [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(_) {
    const c = _, I = x(c), v = H(_, "modelValue"), r = y(null), b = R(
      c.choices.map((l) => ({ isChecked: v.value.includes(l.value), ...l }))
    ), p = k(
      () => b.filter((l) => l.isChecked).map((l) => l.value)
    );
    h(
      p,
      (l) => {
        JSON.stringify(l) !== JSON.stringify(v.value) && (v.value = l);
      },
      { immediate: !0 }
    ), h(
      v,
      (l) => {
        b.forEach((n) => {
          n.isChecked = l.includes(n.value);
        });
      },
      { immediate: !0 }
    );
    const C = y([]), $ = k(() => p.value.length > 0), B = k(() => c.isRequired && !$.value);
    return h(
      B,
      (l) => {
        C.value.forEach((n) => {
          l ? n.setCustomValidity(c.validationMessage) : n.setCustomValidity("");
        });
      },
      { immediate: !0 }
    ), (l, n) => (m(), g(q(T), i({
      class: "-checkbox-multiple",
      "has-static-label": ""
    }, q(I)), {
      beforeLabel: t((e) => [
        o(l.$slots, "beforeLabel", a(u(e)))
      ]),
      label: t((e) => [
        o(l.$slots, "label", a(u(e)))
      ]),
      required: t((e) => [
        o(l.$slots, "required", a(u(e)))
      ]),
      afterLabel: t((e) => [
        o(l.$slots, "afterLabel", a(u(e)))
      ]),
      beforeInput: t((e) => [
        o(l.$slots, "beforeInput", a(u(e)))
      ]),
      input: t((e) => [
        (m(!0), M(S, null, O(b, (s) => (m(), g(E(e.isReadOnly ? "div" : "label"), {
          class: N(["queso-checkbox", { "is-checkbox-hover": r.value === s.value, "is-checked": s.isChecked }]),
          for: e.isReadOnly ? null : `${e.fieldID}-${s.value}`,
          onMouseover: (d) => {
            r.value = s.value, e.toggleIsHover(!0);
          },
          onMouseleave: (d) => {
            r.value = null, e.toggleIsHover(!1);
          }
        }, {
          default: t(() => [
            e.isReadOnly ? F("", !0) : P((m(), M("input", i({
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
            }, l.extraAttributes, {
              "onUpdate:modelValue": (d) => s.isChecked = d
            }), null, 16, z)), [
              [A, s.isChecked]
            ]),
            o(l.$slots, "checkbox", i({ ref_for: !0 }, {
              ...e,
              ...s,
              isHovered: r.value === s.value,
              isSelected: s.isChecked
            }), () => [
              o(l.$slots, "checkboxBox", i({ ref_for: !0 }, {
                ...e,
                ...s,
                isHovered: r.value === s.value,
                isSelected: s.isChecked
              }), () => [
                f("span", J, [
                  f("span", U, [
                    o(l.$slots, "checkboxBoxSymbol", i({ ref_for: !0 }, {
                      ...e,
                      ...s,
                      isHovered: r.value === s.value,
                      isSelected: s.isChecked
                    }), () => [
                      w("✔︎")
                    ])
                  ])
                ])
              ]),
              o(l.$slots, "checkboxLabel", i({ ref_for: !0 }, {
                ...e,
                ...s,
                isHovered: r.value === s.value,
                isSelected: s.isChecked
              }), () => [
                f("span", Q, [
                  f("span", {
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
        o(l.$slots, "afterInput", a(u(e)))
      ]),
      error: t((e) => [
        o(l.$slots, "error", a(u(e)))
      ]),
      _: 3
    }, 16));
  }
});
export {
  X as _
};
