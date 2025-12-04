import { defineComponent as k, inject as B, openBlock as m, createElementBlock as M, unref as p, ref as _, computed as E, provide as q, watch as w, onMounted as N, reactive as P, Fragment as Q, renderSlot as a, normalizeProps as l, guardReactiveProps as s, createBlock as V, Teleport as j, createElementVNode as h, mergeProps as g, createVNode as x, createCommentVNode as D } from "vue";
import { u as K } from "./QuesoDropdown-Dxd1nopn.js";
import { o as L } from "./QuesoCollapsible-BAoVzf7E.js";
import '../assets/components/QuesoModal.css';const $ = Symbol(), T = /* @__PURE__ */ k({
  __name: "QuesoModalOverlay",
  setup(f) {
    const { closeModal: n } = B($);
    return (v, r) => (m(), M("div", {
      class: "queso-modal__overlay",
      onClick: r[0] || (r[0] = //@ts-ignore
      (...d) => p(n) && p(n)(...d))
    }));
  }
}), z = ["aria-expanded"], R = { class: "queso-modal__content" }, J = /* @__PURE__ */ k({
  __name: "QuesoModal",
  props: {
    hasOverlay: { type: Boolean, default: !0 },
    isScrollLocked: { type: Boolean, default: !0 }
  },
  emits: ["modal:open", "modal:close"],
  setup(f, { expose: n, emit: v }) {
    const r = f, d = v, c = _(null), { activate: C, deactivate: S } = K(c), F = [
      "a[href]",
      "area[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "iframe",
      "object",
      "embed",
      '[tabindex]:not([tabindex="-1"])',
      "[contenteditable]"
    ], O = E(() => c.value === null ? !1 : F.some((e) => c.value.querySelector(e) !== null)), u = (e) => {
      O.value && (e ? C() : S());
    }, o = _(!1), b = () => {
      o.value = !0;
    }, y = () => {
      o.value = !1;
    };
    q($, { openModal: b, closeModal: y });
    const i = (e = !0) => {
      r.isScrollLocked && (document.documentElement.style.overflow = e ? "hidden" : "");
    };
    w(o, (e) => {
      e ? (u(!0), i(!0), d("modal:open")) : (u(!1), i(!1), d("modal:close"));
    }), N(() => {
      o.value && (u(!0), i(!0));
    }), L("Escape", () => {
      o.value && (o.value = !1);
    });
    const t = P({
      // States
      isModalOpen: o,
      // Methods
      openModal: b,
      closeModal: y
    });
    return n({ ...t }), (e, A) => (m(), M(Q, null, [
      a(e.$slots, "trigger", l(s(t))),
      (m(), V(j, { to: "body" }, [
        h("div", g({
          ref_key: "modalContainer",
          ref: c,
          class: ["queso-modal", { "is-modal-open": o.value }],
          "aria-expanded": o.value
        }, e.$attrs), [
          a(e.$slots, "beforeContent", l(s(t))),
          h("div", R, [
            a(e.$slots, "content", l(s(t)), () => [
              a(e.$slots, "default", l(s(t)))
            ])
          ]),
          a(e.$slots, "afterContent", l(s(t))),
          e.hasOverlay ? a(e.$slots, "overlay", l(g({ key: 0 }, t)), () => [
            x(p(T))
          ]) : D("", !0)
        ], 16, z)
      ]))
    ], 64));
  }
});
export {
  J as _
};
