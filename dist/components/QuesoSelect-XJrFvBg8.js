import "../assets/components/QuesoSelect.css";
import { defineComponent as C, openBlock as l, createBlock as y, unref as f, withCtx as s, renderSlot as t, createElementBlock as a, createElementVNode as c, toDisplayString as i, normalizeProps as p, guardReactiveProps as u, createTextVNode as k, Fragment as $, renderList as v } from "vue";
import { _ as E } from "./QuesoField-DRuioO9o.js";
import { _ as N } from "./QuesoDropdown-U45mylIC.js";
const P = {
  key: 0,
  class: "queso-select__read-only"
}, U = { class: "queso-select__read-only__label" }, w = { class: "text" }, z = ["name", "id", "onFocus", "onBlur", "required", "autocomplete", "multiple"], A = /* @__PURE__ */ c("option", null, null, -1), D = ["value", "selected"], G = /* @__PURE__ */ C({
  __name: "QuesoSelect",
  props: {
    options: { default: () => [] },
    multiple: { type: Boolean },
    placeholder: {}
  },
  setup(L) {
    const b = (e, m) => {
      if (Array.isArray(e))
        return e.find((r) => r.key === m.key);
    };
    return (e, m) => (l(), y(f(E), null, {
      label: s(() => [
        t(e.$slots, "label")
      ]),
      field: s(({
        fieldID: r,
        fieldName: q,
        fieldValue: d,
        fieldAutocomplete: B,
        updateValue: M,
        toggleIsActive: _,
        toggleIsHover: h,
        isRequired: S,
        isReadOnly: F
      }) => [
        F ? (l(), a("div", P, [
          c("span", U, i(d[0].data.label || e.placeholder), 1)
        ])) : (l(), y(f(N), {
          key: 1,
          class: "queso-select",
          options: e.options,
          "default-options": d || [],
          multiple: e.multiple,
          "onUpdate:options": (o) => M(o),
          onMouseover: (o) => h(!0),
          onMouseleave: (o) => h(!1)
        }, {
          placeholder: s(() => [
            t(e.$slots, "placeholder", p(u({ placeholder: e.placeholder })), () => [
              k(i(e.placeholder), 1)
            ])
          ]),
          selector: s(({ activeOptions: o }) => [
            t(e.$slots, "selector", p(u({ activeOptions: o })), () => [
              (l(!0), a($, null, v(o, (n) => (l(), a("span", {
                key: n.key
              }, i(n.data.label), 1))), 128))
            ])
          ]),
          icon: s(() => [
            t(e.$slots, "icon", {}, () => [
              k("↓")
            ])
          ]),
          item: s(({ key: o, data: n }) => [
            t(e.$slots, "item", p(u({ key: o, data: n })), () => [
              c("span", w, i(n.label), 1)
            ])
          ]),
          _: 2
        }, 1032, ["options", "default-options", "multiple", "onUpdate:options", "onMouseover", "onMouseleave"])),
        c("select", {
          name: q,
          id: r,
          class: "queso-select__select-native",
          onFocus: (o) => _(!0),
          onBlur: (o) => _(!1),
          required: S,
          autocomplete: B,
          multiple: e.multiple
        }, [
          A,
          (l(!0), a($, null, v(e.options, (o) => (l(), a("option", {
            value: o.key,
            key: o.key,
            selected: b(d, o)
          }, i(o.data.label), 9, D))), 128))
        ], 40, z)
      ]),
      error: s((r) => [
        t(e.$slots, "error", p(u({ ...r })))
      ]),
      _: 3
    }));
  }
});
export {
  G as _
};
