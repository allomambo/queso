import { defineComponent as g, useSlots as y, ref as n, onMounted as B, nextTick as q, computed as o, watchEffect as A, openBlock as c, createElementBlock as i, normalizeClass as u, renderSlot as d, createCommentVNode as w, createElementVNode as H } from "vue";
import { u as E, b as T } from "./QuesoCollapsible-BAoVzf7E.js";
import '../assets/components/QuesoScrollable.css';const N = /* @__PURE__ */ g({
  __name: "QuesoScrollable",
  props: {
    shadows: { type: Boolean },
    offset: { default: 0 }
  },
  emits: ["scrollable:top:reached", "scrollable:bottom:reached"],
  setup(I, { emit: k }) {
    const t = I, v = k, m = y(), e = n(), { arrivedState: s } = E(e, {
      offset: { top: t.offset, bottom: t.offset }
    }), p = n(0), f = n(0), b = () => {
      e.value && (p.value = e.value.scrollHeight, f.value = e.value.clientHeight);
    };
    T(e, () => {
      b();
    }), B(() => {
      q(() => {
        b();
      });
    });
    const h = o(() => p.value > f.value), l = o(() => s.top), a = o(() => h.value && s.top ? !1 : !h.value && s.top ? !0 : s.bottom), _ = o(() => !!(m.topIndicator && !t.shadows)), S = o(() => !!(m.bottomIndicator && !t.shadows)), C = o(() => ({
      "has-shadows": t.shadows,
      "has-indicators": _.value || S.value,
      "is-scrolled-top": l.value,
      "is-scrolled-bottom": a.value
    }));
    return A(() => {
      l.value && v("scrollable:top:reached"), a.value && v("scrollable:bottom:reached");
    }), (r, V) => (c(), i("div", {
      class: u(["queso-scrollable", C.value])
    }, [
      _.value ? (c(), i("div", {
        key: 0,
        class: u(["queso-scrollable__indicator -top", { "is-hidden": l.value, "is-visible": !l.value }]),
        role: "presentation"
      }, [
        d(r.$slots, "topIndicator")
      ], 2)) : w("", !0),
      H("div", {
        ref_key: "content",
        ref: e,
        class: "queso-scrollable__content"
      }, [
        d(r.$slots, "default")
      ], 512),
      S.value ? (c(), i("div", {
        key: 1,
        class: u(["queso-scrollable__indicator -bottom", { "is-hidden": a.value, "is-visible": !a.value }]),
        role: "presentation"
      }, [
        d(r.$slots, "bottomIndicator")
      ], 2)) : w("", !0)
    ], 2));
  }
});
export {
  N as _
};
