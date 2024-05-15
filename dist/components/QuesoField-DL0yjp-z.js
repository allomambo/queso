import { defineComponent as E, toRefs as _, ref as y, computed as q, reactive as H, openBlock as d, createElementBlock as $, normalizeClass as S, createBlock as N, resolveDynamicComponent as P, withCtx as z, renderSlot as s, normalizeProps as o, guardReactiveProps as p, createElementVNode as f, unref as c, mergeProps as A, createCommentVNode as v } from "vue";
import '../assets/components/QuesoField.css';const M = ["innerHTML"], O = /* @__PURE__ */ f("span", { class: "queso-field__label__required" }, "*", -1), T = { class: "queso-field__input" }, V = {
  key: 1,
  class: "queso-field__error"
}, Q = /* @__PURE__ */ E({
  __name: "QuesoField",
  props: {
    hasStaticLabel: { type: Boolean },
    id: {},
    name: {},
    label: {},
    isError: { type: Boolean },
    isRequired: { type: Boolean },
    isDisabled: { type: Boolean },
    isReadOnly: { type: Boolean }
  },
  emits: ["input:hover", "input:hover:enter", "input:hover:leave", "input:active", "input:active:focus", "input:active:blur"],
  setup(B, { expose: L, emit: R }) {
    const a = B, l = R, { isRequired: t, isDisabled: m, isError: i, isReadOnly: b } = _(a), r = y(!1), g = (e = !1) => {
      r.value = e, l("input:active", e), l(e ? "input:active:focus" : "input:active:blur");
    }, n = y(!1), k = (e = !1) => {
      n.value = e, l("input:hover", e), l(e ? "input:hover:enter" : "input:hover:leave");
    }, h = q(() => a.id || a.name || ""), { name: C, label: D } = _(a), I = q(() => ({
      "is-disabled": m.value,
      "is-error": i.value,
      "is-active": r.value,
      "is-hover": n.value,
      "is-read-only": b.value
    })), u = H({
      // Base
      fieldID: h,
      fieldName: C,
      fieldLabel: D,
      // States
      isRequired: t,
      isActive: r,
      isHover: n,
      isDisabled: m,
      isError: i,
      isReadOnly: b,
      // Methods
      toggleIsActive: g,
      toggleIsHover: k
    });
    return L({ ...u }), (e, w) => (d(), $("div", {
      class: S(["queso-field", I.value])
    }, [
      e.label ? (d(), N(P(e.hasStaticLabel ? "div" : "label"), {
        key: 0,
        for: e.hasStaticLabel ? null : h.value,
        class: "queso-field__label"
      }, {
        default: z(() => [
          s(e.$slots, "beforeLabel"),
          s(e.$slots, "label", o(p({ label: e.label })), () => [
            f("span", {
              class: "queso-field__label__text",
              innerHTML: e.label
            }, null, 8, M)
          ]),
          c(t) ? s(e.$slots, "required", o(A({ key: 0 }, { isRequired: c(t) })), () => [
            O
          ]) : v("", !0),
          s(e.$slots, "afterLabel")
        ]),
        _: 3
      }, 8, ["for"])) : v("", !0),
      f("div", T, [
        s(e.$slots, "beforeInput"),
        s(e.$slots, "input", o(p({ ...u }))),
        s(e.$slots, "afterInput")
      ]),
      c(i) && e.$slots.error ? (d(), $("div", V, [
        s(e.$slots, "error", o(p({ ...u })))
      ])) : v("", !0)
    ], 2));
  }
});
export {
  Q as _
};
