import { defineComponent as b, ref as a, computed as t, watchEffect as h, openBlock as _, createElementBlock as g, normalizeClass as w, createElementVNode as S, renderSlot as y } from "vue";
import { u as A, a as B } from "./QuesoCollapsible-C5GrwCyj.js";
import '../assets/components/QuesoScrollable.css';const k = /* @__PURE__ */ b({
  __name: "QuesoScrollable",
  props: {
    shadows: { type: Boolean },
    offset: { default: 0 }
  },
  emits: ["scrollable:top:arrived", "scrollable:bottom:arrived"],
  setup(d, { emit: m }) {
    const o = d, c = m, l = a(), { arrivedState: e } = A(l, {
      offset: { top: o.offset, bottom: o.offset }
    }), n = a(0), i = a(0);
    B(l, (s) => {
      const r = s[0];
      n.value = r.target.scrollHeight, i.value = r.target.clientHeight;
    });
    const u = t(() => n.value > i.value), f = t(() => e.top), v = t(() => u.value && e.top ? !1 : !u.value && e.top ? !0 : e.bottom);
    h(() => {
      f.value && c("scrollable:top:arrived"), v.value && c("scrollable:bottom:arrived");
    });
    const p = t(() => ({
      "has-shadows": o.shadows,
      "is-scrolled-top": f.value,
      "is-scrolled-bottom": v.value
    }));
    return (s, r) => (_(), g("div", {
      class: w(["queso-scrollable", p.value])
    }, [
      S("div", {
        ref_key: "content",
        ref: l,
        class: "queso-scrollable__content"
      }, [
        y(s.$slots, "default")
      ], 512)
    ], 2));
  }
});
export {
  k as _
};
