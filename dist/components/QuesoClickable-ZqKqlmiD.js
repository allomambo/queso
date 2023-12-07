import "../assets/components/QuesoClickable.css";
import { defineComponent as b, computed as a, openBlock as p, createBlock as k, resolveDynamicComponent as g, normalizeClass as f, withCtx as m, renderSlot as v } from "vue";
const C = /* @__PURE__ */ b({
  __name: "QuesoClickable",
  props: {
    tag: { default: "button" },
    url: {},
    isDisabled: { type: Boolean },
    isExternal: { type: Boolean },
    isDownload: { type: Boolean },
    ariaLabel: {}
  },
  setup(t) {
    const l = t, s = a(() => ({
      "is-disabled": l.isDisabled
    })), o = a(() => l.isDisabled ? !0 : null), n = a(() => l.tag === "a" || l.tag === "router-link" ? l.url : null), i = a(() => l.tag === "router-link" ? l.url : null), r = a(() => l.isExternal ? "_blank" : "_self"), c = a(() => l.tag === "a" ? r.value : null), u = a(() => l.tag === "a" ? "noopener" : null), d = a(() => l.tag === "a" && l.isDownload ? "" : null);
    return (e, D) => (p(), k(g(e.tag), {
      class: f(["queso-clickable", s.value]),
      rel: u.value,
      href: n.value,
      to: i.value,
      target: c.value,
      download: d.value,
      disabled: o.value,
      "aria-disabled": o.value,
      "aria-label": e.ariaLabel
    }, {
      default: m(() => [
        v(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "rel", "href", "to", "target", "download", "disabled", "aria-disabled", "aria-label"]));
  }
});
export {
  C as _
};
