import "../assets/FieldBase.css";
import { defineComponent as z, ref as B, computed as s, toRefs as H, toRef as R, reactive as N, openBlock as a, createElementBlock as i, normalizeClass as O, unref as f, renderSlot as o, normalizeProps as v, guardReactiveProps as m, toDisplayString as P, createCommentVNode as p } from "vue";
const S = ["for"], L = {
  key: 0,
  class: "queso-field__input"
}, j = {
  key: 1,
  class: "queso-field__error"
}, K = /* @__PURE__ */ z({
  __name: "FieldBase",
  props: {
    id: null,
    name: null,
    modelValue: null,
    label: null,
    isRequired: { type: Boolean },
    isDisabled: { type: Boolean },
    isReadOnly: { type: Boolean },
    isError: { type: Boolean },
    isAutocomplete: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { expose: V, emit: h }) {
    const l = n, r = B(!1), u = B(!1), _ = s(() => !!c.value), { isRequired: q, isDisabled: y, isError: d, isReadOnly: b, isAutocomplete: $ } = H(l), k = (e = !1) => {
      r.value = e;
    }, A = (e = !1) => {
      u.value = e;
    }, D = (e) => {
      c.value = e.target ? e.target.value : e;
    }, c = s({
      get() {
        return l.modelValue;
      },
      set(e) {
        h("update:modelValue", e);
      }
    }), g = s(() => l.id || l.name), F = R(l, "name"), C = R(l, "label"), E = s(() => $.value ? "on" : null), I = s(() => ({
      "is-disabled": y.value,
      "is-error": d.value,
      "has-value": _.value,
      "is-active": r.value,
      "is-hover": u.value,
      "is-read-only": b.value
    })), t = N({
      // Base
      fieldID: g,
      fieldName: F,
      fieldValue: c,
      fieldLabel: C,
      fieldAutocomplete: E,
      // States
      isRequired: q,
      isActive: r,
      isHover: u,
      isFilled: _,
      isDisabled: y,
      isError: d,
      isReadOnly: b,
      // Methods
      updateValue: D,
      toggleIsActive: k,
      toggleIsHover: A
    });
    return V({ ...t }), (e, w) => (a(), i("div", {
      class: O(["queso-field", f(I)])
    }, [
      o(e.$slots, "label", v(m({ ...t })), () => [
        n.label ? (a(), i("label", {
          key: 0,
          for: f(g),
          class: "queso-field__label"
        }, P(n.label), 9, S)) : p("", !0)
      ]),
      e.$slots.field ? (a(), i("div", L, [
        o(e.$slots, "beforeField"),
        o(e.$slots, "field", v(m({ ...t }))),
        o(e.$slots, "afterField")
      ])) : p("", !0),
      f(d) ? (a(), i("div", j, [
        o(e.$slots, "error", v(m({ ...t })))
      ])) : p("", !0)
    ], 2));
  }
});
export {
  K as _
};
