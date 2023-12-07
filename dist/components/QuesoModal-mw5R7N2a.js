import "../assets/components/QuesoModal.css";
import { defineComponent as u, inject as f, openBlock as i, createElementBlock as v, unref as c, ref as y, watch as M, onMounted as h, provide as $, createBlock as k, Teleport as O, createElementVNode as m, mergeProps as b, renderSlot as l, createVNode as g } from "vue";
const p = Symbol("ModalMethodsKey"), q = /* @__PURE__ */ u({
  __name: "QuesoModalOverlay",
  setup(_) {
    const { close: s } = f(p);
    return (a, t) => (i(), v("div", {
      class: "queso-modal__overlay",
      onClick: t[0] || (t[0] = //@ts-ignore
      (...e) => c(s) && c(s)(...e))
    }));
  }
}), w = ["aria-expanded"], B = { class: "queso-modal__inner" }, N = /* @__PURE__ */ u({
  __name: "QuesoModal",
  emits: ["modal:open", "modal:close"],
  setup(_, { expose: s, emit: a }) {
    const t = a, e = y(!1), r = () => {
      e.value = !0;
    }, d = () => {
      e.value = !1;
    }, n = (o = !0) => {
      document.documentElement.style.overflow = o ? "hidden" : "";
    };
    return M(e, (o) => {
      o ? (n(!0), t("modal:open")) : (n(!1), t("modal:close"));
    }), h(() => {
      e.value && n(!0);
    }), $(p, { open: r, close: d }), s({ isModalOpen: e, open: r, close: d }), (o, E) => (i(), k(O, { to: "body" }, [
      m("div", b({
        class: ["queso-modal", { "is-modal-open": e.value }],
        "aria-expanded": e.value
      }, o.$attrs), [
        l(o.$slots, "before-content"),
        m("div", B, [
          l(o.$slots, "default")
        ]),
        l(o.$slots, "after-content"),
        l(o.$slots, "overlay", {}, () => [
          g(q)
        ])
      ], 16, w)
    ]));
  }
});
export {
  N as _
};
