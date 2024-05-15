import { defineComponent as Q, ref as y, computed as s, toRefs as z, toRef as g, reactive as H, openBlock as a, createElementBlock as i, normalizeClass as N, renderSlot as l, normalizeProps as c, guardReactiveProps as v, toDisplayString as O, createCommentVNode as f, unref as P } from "vue";
import { _ as S } from "./QuesoCheckbox-BupGfZ9J.js";
import '../../assets/components/_legacy/QuesoField.css';const L = ["for"], j = {
  key: 0,
  class: "queso-field__input"
}, w = {
  key: 1,
  class: "queso-field__error"
}, G = /* @__PURE__ */ Q({
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
    const o = B, h = V, r = y(!1), d = y(!1), p = s(() => !!n.value), { isRequired: q, isDisabled: m, isError: u, isReadOnly: _, isAutocomplete: $ } = z(o), k = (e = !1) => {
      r.value = e;
    }, A = (e = !1) => {
      d.value = e;
    }, D = (e) => {
      n.value = e.target ? e.target.value : e;
    }, n = s({
      get() {
        return o.modelValue;
      },
      set(e) {
        h("update:modelValue", e);
      }
    }), b = s(() => o.id || o.name || ""), F = g(o, "name"), C = g(o, "label"), I = s(() => $.value ? "on" : void 0), E = s(() => ({
      "is-disabled": m.value,
      "is-error": u.value,
      "has-value": p.value,
      "is-active": r.value,
      "is-hover": d.value,
      "is-read-only": _.value
    })), t = H({
      // Base
      fieldID: b,
      fieldName: F,
      fieldValue: n,
      fieldLabel: C,
      fieldAutocomplete: I,
      // States
      isRequired: q,
      isActive: r,
      isHover: d,
      isFilled: p,
      isDisabled: m,
      isError: u,
      isReadOnly: _,
      // Methods
      updateValue: D,
      toggleIsActive: k,
      toggleIsHover: A
    });
    return R({ ...t }), (e, J) => (a(), i("div", {
      class: N(["queso-field", E.value])
    }, [
      l(e.$slots, "label", c(v({ ...t })), () => [
        e.label ? (a(), i("label", {
          key: 0,
          for: b.value,
          class: "queso-field__label"
        }, O(e.label), 9, L)) : f("", !0)
      ], !0),
      e.$slots.field ? (a(), i("div", j, [
        l(e.$slots, "beforeField", {}, void 0, !0),
        l(e.$slots, "field", c(v({ ...t })), void 0, !0),
        l(e.$slots, "afterField", {}, void 0, !0)
      ])) : f("", !0),
      P(u) ? (a(), i("div", w, [
        l(e.$slots, "error", c(v({ ...t })), void 0, !0)
      ])) : f("", !0)
    ], 2));
  }
}), T = /* @__PURE__ */ S(G, [["__scopeId", "data-v-831c9bda"]]);
export {
  T as Q
};
