import "../assets/ClickableBase.css";
import { defineComponent as k, computed as a, openBlock as p, createBlock as _, resolveDynamicComponent as f, normalizeClass as g, unref as e, withCtx as m, renderSlot as D } from "vue";
const x = /* @__PURE__ */ k({
  __name: "ClickableBase",
  props: {
    tag: { default: "button" },
    url: null,
    isDisabled: { type: Boolean },
    isExternal: { type: Boolean },
    isDownload: { type: Boolean },
    ariaLabel: null
  },
  setup(t) {
    const l = t, o = a(() => ({
      "is-disabled": l.isDisabled
    })), n = a(() => l.isDisabled ? !0 : null), s = a(() => l.tag === "a" ? l.url : null), i = a(() => l.tag === "router-link" ? l.url : null), c = a(() => l.isExternal ? "_blank" : "_self"), r = a(() => l.tag === "a" ? c.value : null), d = a(() => l.tag === "a" ? "noopener" : null), u = a(() => l.tag === "a" && l.isDownload ? "" : null);
    return (b, B) => (p(), _(f(t.tag), {
      class: g(["queso-clickable", e(o)]),
      rel: e(d),
      href: e(s),
      to: e(i),
      target: e(r),
      download: e(u),
      disabled: e(n),
      "aria-disabled": e(n),
      "aria-label": t.ariaLabel
    }, {
      default: m(() => [
        D(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "rel", "href", "to", "target", "download", "disabled", "aria-disabled", "aria-label"]));
  }
});
export {
  x as _
};
