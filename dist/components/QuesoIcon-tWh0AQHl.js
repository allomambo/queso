import "../assets/components/QuesoIcon.css";
import { defineComponent as p, useCssVars as d, computed as s, openBlock as o, createElementBlock as t, normalizeClass as u, renderSlot as m, normalizeProps as f, guardReactiveProps as v, createElementVNode as h } from "vue";
const _ = ["innerHTML"], $ = ["href"], z = /* @__PURE__ */ p({
  __name: "QuesoIcon",
  props: {
    svg: {},
    name: {},
    prefix: {},
    size: { default: 1 },
    rotation: { default: 0 }
  },
  setup(c) {
    d((n) => ({
      fc67b87a: i.value,
      "0984073e": l.value
    }));
    const e = c, a = s(() => `#${e.prefix ? `${e.prefix}-` : ""}${e.name}`), r = s(() => {
      let n = ["queso-icon"];
      return e.name && n.push(`-${e.name}`), n;
    }), i = s(() => `${e.size}rem`), l = s(() => `${e.rotation}deg`);
    return (n, g) => n.svg ? (o(), t("span", {
      key: 0,
      class: u(r.value),
      "aria-hidden": "true",
      innerHTML: n.svg
    }, null, 10, _)) : (o(), t("span", {
      key: 1,
      class: u(r.value),
      "aria-hidden": "true"
    }, [
      m(n.$slots, "default", f(v({ ...e, width: i.value, rotation: l.value, iconID: a.value })), () => [
        (o(), t("svg", null, [
          h("use", { href: a.value }, null, 8, $)
        ]))
      ])
    ], 2));
  }
});
export {
  z as _
};
