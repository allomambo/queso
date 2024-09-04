import { defineComponent as E, toRefs as y, ref as q, computed as $, reactive as H, openBlock as d, createElementBlock as B, normalizeClass as S, createBlock as N, resolveDynamicComponent as P, withCtx as z, renderSlot as l, normalizeProps as t, guardReactiveProps as o, createElementVNode as v, unref as c, mergeProps as A, createCommentVNode as p } from "vue";
import '../assets/components/QuesoField.css';const M = ["innerHTML"], O = /* @__PURE__ */ v("span", { class: "queso-field__label__required" }, "*", -1), T = { class: "queso-field__input" }, V = {
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
  setup(L, { expose: g, emit: k }) {
    const i = L, a = k, { isRequired: f, isDisabled: m, isError: r, isReadOnly: _ } = y(i), n = q(!1), C = (e = !1) => {
      n.value = e, a("input:active", e), a(e ? "input:active:focus" : "input:active:blur");
    }, u = q(!1), R = (e = !1) => {
      u.value = e, a("input:hover", e), a(e ? "input:hover:enter" : "input:hover:leave");
    }, b = $(() => i.id || i.name || ""), { name: D, label: h } = y(i), I = $(() => ({
      "is-disabled": m.value,
      "is-error": r.value,
      "is-active": n.value,
      "is-hover": u.value,
      "is-read-only": _.value
    })), s = H({
      // Base
      fieldID: b,
      fieldName: D,
      fieldLabel: h,
      // States
      isRequired: f,
      isActive: n,
      isHover: u,
      isDisabled: m,
      isError: r,
      isReadOnly: _,
      // Methods
      toggleIsActive: C,
      toggleIsHover: R
    });
    return g({ ...s }), (e, w) => (d(), B("div", {
      class: S(["queso-field", I.value])
    }, [
      e.label ? (d(), N(P(e.hasStaticLabel ? "div" : "label"), {
        key: 0,
        for: e.hasStaticLabel ? null : b.value,
        class: "queso-field__label"
      }, {
        default: z(() => [
          l(e.$slots, "beforeLabel", t(o({ ...s }))),
          l(e.$slots, "label", t(o({ ...s })), () => [
            v("span", {
              class: "queso-field__label__text",
              innerHTML: c(h)
            }, null, 8, M)
          ]),
          c(f) ? l(e.$slots, "required", t(A({ key: 0 }, { ...s })), () => [
            O
          ]) : p("", !0),
          l(e.$slots, "afterLabel", t(o({ ...s })))
        ]),
        _: 3
      }, 8, ["for"])) : p("", !0),
      v("div", T, [
        l(e.$slots, "beforeInput", t(o({ ...s }))),
        l(e.$slots, "input", t(o({ ...s }))),
        l(e.$slots, "afterInput", t(o({ ...s })))
      ]),
      c(r) && e.$slots.error ? (d(), B("div", V, [
        l(e.$slots, "error", t(o({ ...s })))
      ])) : p("", !0)
    ], 2));
  }
});
export {
  Q as _
};
