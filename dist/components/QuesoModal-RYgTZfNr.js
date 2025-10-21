import { defineComponent as b, inject as k, openBlock as M, createElementBlock as C, unref as f, ref as v, computed as E, watch as F, onMounted as S, provide as q, createBlock as w, Teleport as x, createElementVNode as _, mergeProps as B, renderSlot as n, normalizeProps as r, guardReactiveProps as u, createVNode as P } from "vue";
import { u as Q } from "./QuesoDropdown-iupHTqQe.js";
import { o as j } from "./QuesoCollapsible-BAoVzf7E.js";
import '../assets/components/QuesoModal.css';const y = Symbol(), K = /* @__PURE__ */ b({
  __name: "QuesoModalOverlay",
  setup(O) {
    const s = k(y), c = s == null ? void 0 : s.close;
    return (d, t) => (M(), C("div", {
      class: "queso-modal__overlay",
      onClick: t[0] || (t[0] = //@ts-ignore
      (...i) => f(c) && f(c)(...i))
    }));
  }
}), N = ["aria-expanded"], T = { class: "queso-modal__content" }, A = /* @__PURE__ */ b({
  __name: "QuesoModal",
  emits: ["modal:open", "modal:close"],
  setup(O, { expose: s, emit: c }) {
    const d = c, t = v(null), { activate: i, deactivate: h } = Q(t), $ = [
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
    ], g = E(() => t.value === null ? !1 : $.some((o) => t.value.querySelector(o) !== null)), m = (o) => {
      g.value && (o ? i() : h());
    }, e = v(!1), a = () => {
      e.value = !0;
    }, l = () => {
      e.value = !1;
    }, p = (o = !0) => {
      document.documentElement.style.overflow = o ? "hidden" : "";
    };
    return F(e, (o) => {
      o ? (m(!0), p(!0), d("modal:open")) : (m(!1), p(!1), d("modal:close"));
    }), S(() => {
      e.value && (m(!0), p(!0));
    }), j("Escape", () => {
      e.value && (e.value = !1);
    }), q(y, { open: a, close: l }), s({ isModalOpen: e, open: a, close: l }), (o, V) => (M(), w(x, { to: "body" }, [
      _("div", B({
        ref_key: "modalContainer",
        ref: t,
        class: ["queso-modal", { "is-modal-open": e.value }],
        "aria-expanded": e.value
      }, o.$attrs), [
        n(o.$slots, "beforeContent", r(u({ isModalOpen: e.value, open: a, close: l }))),
        _("div", T, [
          n(o.$slots, "content", r(u({ isModalOpen: e.value, open: a, close: l })), () => [
            n(o.$slots, "default", r(u({ isModalOpen: e.value, open: a, close: l })))
          ])
        ]),
        n(o.$slots, "afterContent", r(u({ isModalOpen: e.value, open: a, close: l }))),
        n(o.$slots, "overlay", r(u({ isModalOpen: e.value, open: a, close: l })), () => [
          P(f(K))
        ])
      ], 16, N)
    ]));
  }
});
export {
  A as _
};
