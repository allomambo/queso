import "../assets/ModalBase.css";
import { defineComponent as _, inject as p, openBlock as u, createElementBlock as v, unref as d, ref as f, watch as y, onMounted as M, provide as B, createBlock as h, Teleport as $, createElementVNode as c, mergeProps as g, renderSlot as s, createVNode as O } from "vue";
const m = Symbol("ModalMethodsKey"), k = /* @__PURE__ */ _({
  __name: "ModalBaseOverlay",
  setup(i) {
    const { close: t } = p(m);
    return (n, e) => (u(), v("div", {
      class: "queso-modal__overlay",
      onClick: e[0] || (e[0] = //@ts-ignore
      (...l) => d(t) && d(t)(...l))
    }));
  }
});
const b = ["aria-expanded"], q = { class: "queso-modal__inner" }, C = /* @__PURE__ */ _({
  __name: "ModalBase",
  emits: ["modal:open", "modal:close"],
  setup(i, { expose: t, emit: n }) {
    const e = f(!1), l = () => {
      e.value = !0;
    }, r = () => {
      e.value = !1;
    }, a = (o = !0) => {
      document.documentElement.style.overflow = o ? "hidden" : null;
    };
    return y(e, (o) => {
      o ? (a(!0), n("modal:open")) : (a(!1), n("modal:close"));
    }), M(() => {
      e.value && a(!0);
    }), B(m, { open: l, close: r }), t({ isModalOpen: e, open: l, close: r }), (o, w) => (u(), h($, { to: "body" }, [
      c("div", g({
        class: ["queso-modal", { "is-modal-open": e.value }],
        "aria-expanded": e.value
      }, o.$attrs), [
        s(o.$slots, "before-content"),
        c("div", q, [
          s(o.$slots, "default")
        ]),
        s(o.$slots, "after-content"),
        s(o.$slots, "overlay", {}, () => [
          O(k)
        ])
      ], 16, b)
    ]));
  }
});
export {
  C as _
};
