import { defineComponent as S, toRefs as B, ref as C, computed as c, reactive as N, openBlock as f, createElementBlock as D, normalizeClass as z, createBlock as A, resolveDynamicComponent as M, withCtx as O, renderSlot as l, normalizeProps as t, guardReactiveProps as a, createElementVNode as p, unref as m, createCommentVNode as b } from "vue";
import '../assets/components/QuesoField.css';const P = ["innerHTML"], T = { class: "queso-field__input" }, V = {
  key: 1,
  class: "queso-field__error"
}, F = /* @__PURE__ */ S({
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
  setup(n, { expose: I, emit: R }) {
    const o = n, i = R, { isRequired: h, isDisabled: y, isError: r, isReadOnly: _ } = B(o), u = C(!1), g = (e = !1) => {
      u.value = e, i("input:active", e), i(e ? "input:active:focus" : "input:active:blur");
    }, d = C(!1), k = (e = !1) => {
      d.value = e, i("input:hover", e), i(e ? "input:hover:enter" : "input:hover:leave");
    }, v = c(() => o.id || o.name || ""), q = c(() => o.label ? `${v.value}-label` : void 0), { name: E, label: $ } = B(o), H = c(() => ({
      "is-disabled": y.value,
      "is-error": r.value,
      "is-active": u.value,
      "is-hover": d.value,
      "is-read-only": _.value
    })), s = N({
      // Base
      fieldID: v,
      fieldLabelID: q,
      fieldName: E,
      fieldLabel: $,
      // States
      isRequired: h,
      isActive: u,
      isHover: d,
      isDisabled: y,
      isError: r,
      isReadOnly: _,
      // Methods
      toggleIsActive: g,
      toggleIsHover: k
    });
    return I({ ...s }), (e, L) => (f(), D("div", {
      class: z(["queso-field", H.value])
    }, [
      n.label ? (f(), A(M(n.hasStaticLabel ? "div" : "label"), {
        key: 0,
        id: q.value,
        for: n.hasStaticLabel ? null : v.value,
        class: "queso-field__label"
      }, {
        default: O(() => [
          l(e.$slots, "beforeLabel", t(a({ ...s }))),
          l(e.$slots, "label", t(a({ ...s })), () => [
            p("span", {
              class: "queso-field__label__text",
              innerHTML: m($)
            }, null, 8, P)
          ]),
          m(h) ? l(e.$slots, "required", t(a({ ...s })), () => [
            L[0] || (L[0] = p("span", {
              class: "queso-field__label__required",
              "aria-hidden": "true"
            }, "*", -1))
          ], void 0, 0) : b("", !0),
          l(e.$slots, "afterLabel", t(a({ ...s })))
        ]),
        _: 3
      }, 8, ["id", "for"])) : b("", !0),
      p("div", T, [
        l(e.$slots, "beforeInput", t(a({ ...s }))),
        l(e.$slots, "input", t(a({ ...s }))),
        l(e.$slots, "afterInput", t(a({ ...s })))
      ]),
      m(r) && e.$slots.error ? (f(), D("div", V, [
        l(e.$slots, "error", t(a({ ...s })))
      ])) : b("", !0)
    ], 2));
  }
});
export {
  F as _
};
