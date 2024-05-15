import { defineComponent as m, inject as f, openBlock as i, createElementBlock as v, unref as c, ref as y, watch as M, onMounted as $, provide as h, createBlock as k, Teleport as C, createElementVNode as u, mergeProps as O, renderSlot as n, createVNode as b } from "vue";
import '../assets/components/QuesoModal.css';const p = Symbol(), g = /* @__PURE__ */ m({
  __name: "QuesoModalOverlay",
  setup(_) {
    const t = f(p), s = t == null ? void 0 : t.close;
    return (a, e) => (i(), v("div", {
      class: "queso-modal__overlay",
      onClick: e[0] || (e[0] = //@ts-ignore
      (...l) => c(s) && c(s)(...l))
    }));
  }
}), q = ["aria-expanded"], w = { class: "queso-modal__content" }, Q = /* @__PURE__ */ m({
  __name: "QuesoModal",
  emits: ["modal:open", "modal:close"],
  setup(_, { expose: t, emit: s }) {
    const a = s, e = y(!1), l = () => {
      e.value = !0;
    }, d = () => {
      e.value = !1;
    }, r = (o = !0) => {
      document.documentElement.style.overflow = o ? "hidden" : "";
    };
    return M(e, (o) => {
      o ? (r(!0), a("modal:open")) : (r(!1), a("modal:close"));
    }), $(() => {
      e.value && r(!0);
    }), h(p, { open: l, close: d }), t({ isModalOpen: e, open: l, close: d }), (o, B) => (i(), k(C, { to: "body" }, [
      u("div", O({
        class: ["queso-modal", { "is-modal-open": e.value }],
        "aria-expanded": e.value
      }, o.$attrs), [
        n(o.$slots, "beforeContent"),
        u("div", w, [
          n(o.$slots, "default")
        ]),
        n(o.$slots, "afterContent"),
        n(o.$slots, "overlay", {}, () => [
          b(c(g))
        ])
      ], 16, q)
    ]));
  }
});
export {
  Q as _
};
