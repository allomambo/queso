import { defineComponent as v, inject as M, openBlock as _, createElementBlock as $, unref as d, ref as f, computed as g, watch as E, onMounted as F, provide as S, createBlock as q, Teleport as x, createElementVNode as p, mergeProps as O, renderSlot as l, createVNode as w } from "vue";
import { u as B } from "./QuesoDropdown-BSeoD50h.js";
import { o as Q } from "./QuesoCollapsible-BAoVzf7E.js";
import '../assets/components/QuesoModal.css';const b = Symbol(), j = /* @__PURE__ */ v({
  __name: "QuesoModalOverlay",
  setup(y) {
    const a = M(b), s = a == null ? void 0 : a.close;
    return (n, t) => (_(), $("div", {
      class: "queso-modal__overlay",
      onClick: t[0] || (t[0] = //@ts-ignore
      (...r) => d(s) && d(s)(...r))
    }));
  }
}), K = ["aria-expanded"], N = { class: "queso-modal__content" }, z = /* @__PURE__ */ v({
  __name: "QuesoModal",
  emits: ["modal:open", "modal:close"],
  setup(y, { expose: a, emit: s }) {
    const n = s, t = f(null), { activate: r, deactivate: h } = B(t), k = [
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
    ], C = g(() => t.value === null ? !1 : k.some((e) => t.value.querySelector(e) !== null)), c = (e) => {
      C.value && (e ? r() : h());
    }, o = f(!1), i = () => {
      o.value = !0;
    }, m = () => {
      o.value = !1;
    }, u = (e = !0) => {
      document.documentElement.style.overflow = e ? "hidden" : "";
    };
    return E(o, (e) => {
      e ? (c(!0), u(!0), n("modal:open")) : (c(!1), u(!1), n("modal:close"));
    }), F(() => {
      o.value && (c(!0), u(!0));
    }), Q("Escape", () => {
      o.value && (o.value = !1);
    }), S(b, { open: i, close: m }), a({ isModalOpen: o, open: i, close: m }), (e, T) => (_(), q(x, { to: "body" }, [
      p("div", O({
        ref_key: "modalContainer",
        ref: t,
        class: ["queso-modal", { "is-modal-open": o.value }],
        "aria-expanded": o.value
      }, e.$attrs), [
        l(e.$slots, "beforeContent"),
        p("div", N, [
          l(e.$slots, "default")
        ]),
        l(e.$slots, "afterContent"),
        l(e.$slots, "overlay", {}, () => [
          w(d(j))
        ])
      ], 16, K)
    ]));
  }
});
export {
  z as _
};
