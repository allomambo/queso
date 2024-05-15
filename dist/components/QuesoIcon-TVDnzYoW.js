import { defineComponent as p, useCssVars as d, computed as s, openBlock as t, createElementBlock as o, normalizeClass as u, renderSlot as f, normalizeProps as m, guardReactiveProps as v, createElementVNode as h } from "vue";
import '../assets/components/QuesoIcon.css';const _ = ["innerHTML"], $ = ["href"], x = /* @__PURE__ */ p({
  __name: "QuesoIcon",
  props: {
    svg: {},
    name: {},
    prefix: {},
    size: { default: 1 },
    sizeUnit: { default: "rem" },
    rotation: { default: 0 }
  },
  setup(c) {
    d((n) => ({
      "46cfda30": i.value,
      "15487f1c": l.value
    }));
    const e = c, a = s(() => `#${e.prefix ? `${e.prefix}-` : ""}${e.name}`), r = s(() => {
      let n = ["queso-icon"];
      return e.name && n.push(`-${e.name}`), n;
    }), i = s(() => `${e.size}${e.sizeUnit}`), l = s(() => `${e.rotation}deg`);
    return (n, g) => n.svg ? (t(), o("span", {
      key: 0,
      class: u(r.value),
      "aria-hidden": "true",
      innerHTML: n.svg
    }, null, 10, _)) : (t(), o("span", {
      key: 1,
      class: u(r.value),
      "aria-hidden": "true"
    }, [
      f(n.$slots, "default", m(v({ ...e, width: i.value, rotation: l.value, iconID: a.value })), () => [
        (t(), o("svg", null, [
          h("use", { href: a.value }, null, 8, $)
        ]))
      ])
    ], 2));
  }
});
export {
  x as _
};
