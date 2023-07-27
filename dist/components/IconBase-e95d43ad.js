import "../assets/IconBase.css";
import { defineComponent as p, useCssVars as m, unref as n, computed as t, openBlock as r, createElementBlock as a, normalizeClass as d, renderSlot as f, normalizeProps as _, guardReactiveProps as h, createElementVNode as x } from "vue";
const g = ["innerHTML"], v = ["href"], z = /* @__PURE__ */ p({
  __name: "IconBase",
  props: {
    svg: null,
    name: null,
    prefix: null,
    size: { default: 1 },
    rotation: { default: 0 }
  },
  setup(s) {
    const e = s;
    m((o) => ({
      "8e742796": n(c),
      de79f2a2: n(u)
    }));
    const i = t(() => `#${e.prefix ? `${e.prefix}-` : ""}${e.name}`), l = t(() => ["queso-icon", e.name && `-${e.name}`]), c = t(() => `${e.size}rem`), u = t(() => `${e.rotation}deg`);
    return (o, $) => s.svg ? (r(), a("span", {
      key: 0,
      class: d(n(l)),
      "aria-hidden": "true",
      innerHTML: s.svg
    }, null, 10, g)) : (r(), a("span", {
      key: 1,
      class: d(n(l)),
      "aria-hidden": "true"
    }, [
      f(o.$slots, "default", _(h({ ...e, width: n(c), rotation: n(u), iconID: n(i) })), () => [
        (r(), a("svg", null, [
          x("use", { href: n(i) }, null, 8, v)
        ]))
      ])
    ], 2));
  }
});
export {
  z as _
};
