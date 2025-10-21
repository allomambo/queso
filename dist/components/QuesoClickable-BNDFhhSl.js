import { defineComponent as m, toRefs as D, computed as e, openBlock as _, createBlock as w, resolveDynamicComponent as h, unref as B, mergeProps as C, withCtx as x, renderSlot as y } from "vue";
import '../assets/components/QuesoClickable.css';const E = /* @__PURE__ */ m({
  __name: "QuesoClickable",
  props: {
    markup: { default: "button" },
    url: {},
    isDisabled: { type: Boolean },
    isExternal: { type: Boolean },
    isDownload: { type: Boolean }
  },
  setup(u) {
    const i = u, { isExternal: r, isDisabled: a, isDownload: c, markup: o, url: t } = D(i), s = e(() => o.value === "a"), d = e(() => o.value === "router-link"), v = e(() => {
      let l = {};
      return d.value ? l = {
        to: t.value
      } : s.value && (l = {
        href: t.value,
        target: b.value,
        download: n.value
      }), l;
    }), b = e(() => s.value && r.value ? "_blank" : null), p = e(() => a.value ? "" : null), k = e(() => a.value ? "true" : null), n = e(() => s.value && c.value ? "" : null), f = e(() => ({
      "is-download": n.value !== null,
      "is-disabled": a.value
    }));
    return (l, g) => (_(), w(h(B(o)), C({
      class: ["queso-clickable", f.value],
      disabled: p.value,
      "aria-disabled": k.value
    }, v.value), {
      default: x(() => [
        y(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "disabled", "aria-disabled"]));
  }
});
export {
  E as _
};
