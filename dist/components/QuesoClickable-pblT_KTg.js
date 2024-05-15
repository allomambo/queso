import { defineComponent as f, toRefs as m, computed as e, openBlock as _, createBlock as D, resolveDynamicComponent as w, unref as h, mergeProps as B, withCtx as C, renderSlot as x } from "vue";
import '../assets/components/QuesoClickable.css';const A = /* @__PURE__ */ f({
  __name: "QuesoClickable",
  props: {
    markup: { default: "button" },
    url: {},
    isDisabled: { type: Boolean },
    isExternal: { type: Boolean },
    isDownload: { type: Boolean }
  },
  setup(r) {
    const i = r, { isExternal: c, isDisabled: s, isDownload: d, markup: a, url: t } = m(i), o = e(() => a.value === "a"), v = e(() => a.value === "router-link"), b = e(() => {
      let l = {};
      return v.value ? l = {
        to: t.value
      } : o.value && (l = {
        href: t.value,
        target: p.value,
        download: u.value
      }), l;
    }), p = e(() => o.value && c.value ? "_blank" : null), n = e(() => s.value ? "" : null), u = e(() => o.value && d.value ? "" : null), k = e(() => ({
      "is-download": u.value !== null,
      "is-disabled": s.value
    }));
    return (l, y) => (_(), D(w(h(a)), B({
      class: ["queso-clickable", k.value],
      disabled: n.value,
      "aria-disabled": n.value
    }, b.value), {
      default: C(() => [
        x(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "disabled", "aria-disabled"]));
  }
});
export {
  A as _
};
