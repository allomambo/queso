import "../assets/components/QuesoField.css";
import { defineComponent as z, ref as _, computed as s, toRefs as H, toRef as g, reactive as N, openBlock as a, createElementBlock as i, normalizeClass as O, renderSlot as o, normalizeProps as c, guardReactiveProps as f, toDisplayString as P, createCommentVNode as p, unref as S } from "vue";
const L = ["for"], Q = {
  key: 0,
  class: "queso-field__input"
}, j = {
  key: 1,
  class: "queso-field__error"
}, K = /* @__PURE__ */ z({
  __name: "QuesoField",
  props: {
    id: {},
    name: {},
    modelValue: {},
    label: {},
    isRequired: { type: Boolean },
    isDisabled: { type: Boolean },
    isReadOnly: { type: Boolean },
    isError: { type: Boolean },
    isAutocomplete: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(B, { expose: R, emit: V }) {
    const l = B, h = V, r = _(!1), n = _(!1), v = s(() => !!d.value), { isRequired: q, isDisabled: m, isError: u, isReadOnly: b, isAutocomplete: $ } = H(l), k = (e = !1) => {
      r.value = e;
    }, A = (e = !1) => {
      n.value = e;
    }, D = (e) => {
      d.value = e.target ? e.target.value : e;
    }, d = s({
      get() {
        return l.modelValue;
      },
      set(e) {
        h("update:modelValue", e);
      }
    }), y = s(() => l.id || l.name || ""), C = g(l, "name"), F = g(l, "label"), E = s(() => $.value ? "on" : void 0), I = s(() => ({
      "is-disabled": m.value,
      "is-error": u.value,
      "has-value": v.value,
      "is-active": r.value,
      "is-hover": n.value,
      "is-read-only": b.value
    })), t = N({
      // Base
      fieldID: y,
      fieldName: C,
      fieldValue: d,
      fieldLabel: F,
      fieldAutocomplete: E,
      // States
      isRequired: q,
      isActive: r,
      isHover: n,
      isFilled: v,
      isDisabled: m,
      isError: u,
      isReadOnly: b,
      // Methods
      updateValue: D,
      toggleIsActive: k,
      toggleIsHover: A
    });
    return R({ ...t }), (e, w) => (a(), i("div", {
      class: O(["queso-field", I.value])
    }, [
      o(e.$slots, "label", c(f({ ...t })), () => [
        e.label ? (a(), i("label", {
          key: 0,
          for: y.value,
          class: "queso-field__label"
        }, P(e.label), 9, L)) : p("", !0)
      ]),
      e.$slots.field ? (a(), i("div", Q, [
        o(e.$slots, "beforeField"),
        o(e.$slots, "field", c(f({ ...t }))),
        o(e.$slots, "afterField")
      ])) : p("", !0),
      S(u) ? (a(), i("div", j, [
        o(e.$slots, "error", c(f({ ...t })))
      ])) : p("", !0)
    ], 2));
  }
});
export {
  K as _
};
