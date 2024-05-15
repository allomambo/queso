import { defineComponent as k, toRefs as m, computed as e, openBlock as _, createBlock as D, resolveDynamicComponent as w, unref as h, mergeProps as y, withCtx as B, renderSlot as C } from "vue";
import '../assets/components/QuesoClickable.css';const A = /* @__PURE__ */ k({
  __name: "QuesoClickable",
  props: {
    markup: { default: "button" },
    url: {},
    isDisabled: { type: Boolean },
    isExternal: { type: Boolean },
    isDownload: { type: Boolean }
  },
  setup(r) {
    const i = r, { isExternal: c, isDisabled: t, isDownload: d, markup: a, url: o } = m(i), s = e(() => a.value === "a"), v = e(() => a.value === "router-link" && typeof o.value == "object"), b = e(() => {
      let l = {};
      return v.value ? l = {
        to: o.value
      } : s.value && (l = {
        href: o.value,
        target: p.value,
        download: u.value
      }), l;
    }), p = e(() => s.value && c.value ? "_blank" : null), n = e(() => t.value ? "" : null), u = e(() => s.value && d.value ? "" : null), f = e(() => ({
      "is-download": u.value !== null,
      "is-disabled": t.value
    }));
    return (l, x) => (_(), D(w(h(a)), y({
      class: ["queso-clickable", f.value],
      disabled: n.value,
      "aria-disabled": n.value
    }, b.value), {
      default: B(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "disabled", "aria-disabled"]));
  }
});
export {
  A as _
};
