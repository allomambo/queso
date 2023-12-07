import "../assets/components/QuesoSelect.css";
import { defineComponent as C, openBlock as l, createBlock as y, unref as f, withCtx as t, renderSlot as n, createElementBlock as r, createElementVNode as i, toDisplayString as a, normalizeProps as c, guardReactiveProps as d, createTextVNode as k, Fragment as $, renderList as v } from "vue";
import { _ as E } from "./QuesoField-DRuioO9o.js";
import { _ as N } from "./QuesoDropdown-QP0VEkZq.js";
const P = {
  key: 0,
  class: "queso-select__read-only"
}, U = { class: "queso-select__read-only__label" }, w = { class: "text" }, z = ["name", "id", "onFocus", "onBlur", "required", "autocomplete", "multiple"], A = /* @__PURE__ */ i("option", null, null, -1), D = ["value", "selected"], G = /* @__PURE__ */ C({
  __name: "QuesoSelect",
  props: {
    options: { default: () => [] },
    multiple: { type: Boolean },
    placeholder: {}
  },
  setup(L) {
    const b = (e, m) => {
      if (Array.isArray(e))
        return e.find((p) => p.key === m.key);
    };
    return (e, m) => (l(), y(f(E), null, {
      label: t(() => [
        n(e.$slots, "label")
      ]),
      field: t(({
        fieldID: p,
        fieldName: q,
        fieldValue: u,
        fieldAutocomplete: B,
        updateValue: M,
        toggleIsActive: _,
        toggleIsHover: h,
        isRequired: S,
        isReadOnly: F
      }) => [
        F ? (l(), r("div", P, [
          i("span", U, a(u[0].data.label || e.placeholder), 1)
        ])) : (l(), y(f(N), {
          key: 1,
          class: "queso-select",
          options: e.options,
          "default-options": u || [],
          multiple: e.multiple,
          "onUpdate:options": (o) => M(o),
          onMouseover: (o) => h(!0),
          onMouseleave: (o) => h(!1)
        }, {
          placeholder: t(() => [
            n(e.$slots, "placeholder", c(d({ placeholder: e.placeholder })), () => [
              k(a(e.placeholder), 1)
            ])
          ]),
          selector: t(({ activeOptions: o }) => [
            n(e.$slots, "selector", c(d({ activeOptions: o })), () => [
              (l(!0), r($, null, v(o, (s) => (l(), r("span", {
                key: s.key
              }, a(s.data.label), 1))), 128))
            ])
          ]),
          icon: t(() => [
            n(e.$slots, "icon", {}, () => [
              k("↓")
            ])
          ]),
          item: t(({ key: o, data: s }) => [
            n(e.$slots, "item", c(d({ key: o, data: s })), () => [
              i("span", w, a(s.label), 1)
            ])
          ]),
          _: 2
        }, 1032, ["options", "default-options", "multiple", "onUpdate:options", "onMouseover", "onMouseleave"])),
        i("select", {
          name: q,
          id: p,
          class: "queso-select__select-native",
          onFocus: (o) => _(!0),
          onBlur: (o) => _(!1),
          required: S,
          autocomplete: B,
          multiple: e.multiple
        }, [
          A,
          (l(!0), r($, null, v(e.options, (o) => (l(), r("option", {
            value: o.key,
            key: o.key,
            selected: b(u, o)
          }, a(o.data.label), 9, D))), 128))
        ], 40, z)
      ]),
      _: 3
    }));
  }
});
export {
  G as _
};
