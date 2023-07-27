import "../assets/ScrollableBase.css";
import { defineComponent as p, ref as l, computed as c, openBlock as _, createElementBlock as d, normalizeClass as m, unref as v, createElementVNode as b, renderSlot as h } from "vue";
import { u as g, a as S } from "./CollapsibleBase-618d5a34.js";
const C = /* @__PURE__ */ p({
  __name: "ScrollableBase",
  props: {
    shadows: { type: Boolean },
    offset: { default: 0 }
  },
  setup(i) {
    const e = i, t = l(), { arrivedState: n } = g(t, {
      offset: { top: e.offset, bottom: e.offset }
    }), r = l(0), a = l(0);
    S(t, (o) => {
      const s = o[0];
      r.value = s.target.scrollHeight, a.value = s.target.clientHeight;
    });
    const u = c(() => r.value > a.value), f = c(() => ({
      "has-shadows": e.shadows,
      "is-scrolled-top": n.top,
      "is-scrolled-bottom": n.bottom || !u.value
    }));
    return (o, s) => (_(), d("div", {
      class: m(["queso-scrollable", v(f)])
    }, [
      b("div", {
        ref_key: "content",
        ref: t,
        class: "queso-scrollable__content"
      }, [
        h(o.$slots, "default")
      ], 512)
    ], 2));
  }
});
export {
  C as _
};
