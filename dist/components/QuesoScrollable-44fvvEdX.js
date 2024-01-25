import "../assets/components/QuesoScrollable.css";
import { defineComponent as p, ref as l, computed as c, openBlock as m, createElementBlock as d, normalizeClass as v, createElementVNode as h, renderSlot as _ } from "vue";
import { u as b, a as g } from "./QuesoCollapsible-vi6f46Ei.js";
const H = /* @__PURE__ */ p({
  __name: "QuesoScrollable",
  props: {
    shadows: { type: Boolean },
    offset: { default: 0 }
  },
  setup(i) {
    const e = i, t = l(), { arrivedState: n } = b(t, {
      offset: { top: e.offset, bottom: e.offset }
    }), r = l(0), a = l(0);
    g(t, (o) => {
      const s = o[0];
      r.value = s.target.scrollHeight, a.value = s.target.clientHeight;
    });
    const u = c(() => r.value > a.value), f = c(() => ({
      "has-shadows": e.shadows,
      "is-scrolled-top": n.top,
      "is-scrolled-bottom": n.bottom || !u.value
    }));
    return (o, s) => (m(), d("div", {
      class: v(["queso-scrollable", f.value])
    }, [
      h("div", {
        ref_key: "content",
        ref: t,
        class: "queso-scrollable__content"
      }, [
        _(o.$slots, "default")
      ], 512)
    ], 2));
  }
});
export {
  H as _
};
