import { defineComponent as y, useSlots as B, ref as h, computed as o, watchEffect as q, onMounted as A, nextTick as C, openBlock as r, createElementBlock as n, normalizeClass as c, renderSlot as i, createCommentVNode as _, createElementVNode as S } from "vue";
import { u as E, b as T } from "./QuesoCollapsible-BAoVzf7E.js";
import '../assets/components/QuesoScrollable.css';const V = /* @__PURE__ */ y({
  __name: "QuesoScrollable",
  props: {
    shadows: { type: Boolean },
    offset: { default: 0 },
    hideScrollbars: { type: Boolean, default: !0 }
  },
  emits: ["scrollable:top:reached", "scrollable:bottom:reached"],
  setup(I, { emit: k }) {
    const e = I, d = k, u = B(), l = h(), m = h(), { arrivedState: b, measure: p } = E(l, {
      offset: { top: e.offset, bottom: e.offset }
    }), t = o(() => b.top), s = o(() => b.bottom), f = o(() => !!(u.topIndicator && !e.shadows)), v = o(() => !!(u.bottomIndicator && !e.shadows)), w = o(() => ({
      "has-shadows": e.shadows,
      "has-indicators": f.value || v.value,
      "has-hidden-scrollbars": e.hideScrollbars,
      "is-scrolled-top": t.value,
      "is-scrolled-bottom": s.value
    }));
    return q(() => {
      t.value && d("scrollable:top:reached"), s.value && d("scrollable:bottom:reached");
    }), T([l, m], p), A(() => {
      C(p);
    }), (a, $) => (r(), n("div", {
      class: c(["queso-scrollable", w.value])
    }, [
      f.value ? (r(), n("div", {
        key: 0,
        class: c(["queso-scrollable__indicator -top", { "is-hidden": t.value, "is-visible": !t.value }]),
        role: "presentation"
      }, [
        i(a.$slots, "topIndicator")
      ], 2)) : _("", !0),
      S("div", {
        ref_key: "content",
        ref: l,
        class: "queso-scrollable__content"
      }, [
        S("div", {
          ref_key: "contentInner",
          ref: m,
          class: "queso-scrollable__content__inner"
        }, [
          i(a.$slots, "default")
        ], 512)
      ], 512),
      v.value ? (r(), n("div", {
        key: 1,
        class: c(["queso-scrollable__indicator -bottom", { "is-hidden": s.value, "is-visible": !s.value }]),
        role: "presentation"
      }, [
        i(a.$slots, "bottomIndicator")
      ], 2)) : _("", !0)
    ], 2));
  }
});
export {
  V as _
};
