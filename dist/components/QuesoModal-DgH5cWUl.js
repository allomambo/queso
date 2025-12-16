import { defineComponent as k, inject as E, openBlock as f, createElementBlock as $, unref as v, ref as _, computed as h, provide as q, watch as w, onMounted as N, reactive as P, Fragment as Q, renderSlot as a, normalizeProps as l, guardReactiveProps as s, createBlock as V, Teleport as j, createElementVNode as M, mergeProps as g, createVNode as x, createCommentVNode as D } from "vue";
import { u as K } from "./QuesoDropdown-Dxd1nopn.js";
import { o as L } from "./QuesoCollapsible-BAoVzf7E.js";
import '../assets/components/QuesoModal.css';const C = Symbol(), T = /* @__PURE__ */ k({
  __name: "QuesoModalOverlay",
  setup(b) {
    const { closeModal: n } = E(C);
    return (y, r) => (f(), $("div", {
      class: "queso-modal__overlay",
      onClick: r[0] || (r[0] = //@ts-ignore
      (...d) => v(n) && v(n)(...d))
    }));
  }
}), z = ["aria-expanded"], R = { class: "queso-modal__content" }, J = /* @__PURE__ */ k({
  __name: "QuesoModal",
  props: {
    hasOverlay: { type: Boolean, default: !0 },
    isScrollLocked: { type: Boolean, default: !0 }
  },
  emits: ["modal:open", "modal:close"],
  setup(b, { expose: n, emit: y }) {
    const r = b, d = y, c = _(null), { activate: O, deactivate: S } = K(c), F = [
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
    ], B = h(() => c.value === null ? !1 : F.some((e) => c.value.querySelector(e) !== null)), u = (e) => {
      B.value && (e ? O() : S());
    }, o = _(!1), i = () => {
      o.value = !0;
    }, m = () => {
      o.value = !1;
    };
    q(C, { openModal: i, closeModal: m });
    const p = (e = !0) => {
      r.isScrollLocked && (document.documentElement.style.overflow = e ? "hidden" : "");
    };
    w(o, (e) => {
      e ? (u(!0), p(!0), d("modal:open")) : (u(!1), p(!1), d("modal:close"));
    }), N(() => {
      o.value && (u(!0), p(!0));
    }), L("Escape", () => {
      o.value && (o.value = !1);
    });
    const t = P({
      // States
      isModalOpen: o,
      // Methods
      openModal: i,
      closeModal: m
    });
    return n({
      isModalOpen: h(() => o.value),
      openModal: i,
      closeModal: m
    }), (e, A) => (f(), $(Q, null, [
      a(e.$slots, "trigger", l(s(t))),
      (f(), V(j, { to: "body" }, [
        M("div", g({
          ref_key: "modalContainer",
          ref: c,
          class: ["queso-modal", { "is-modal-open": o.value }],
          "aria-expanded": o.value
        }, e.$attrs), [
          a(e.$slots, "beforeContent", l(s(t))),
          M("div", R, [
            a(e.$slots, "content", l(s(t)), () => [
              a(e.$slots, "default", l(s(t)))
            ])
          ]),
          a(e.$slots, "afterContent", l(s(t))),
          e.hasOverlay ? a(e.$slots, "overlay", l(g({ key: 0 }, t)), () => [
            x(v(T))
          ]) : D("", !0)
        ], 16, z)
      ]))
    ], 64));
  }
});
export {
  J as _
};
