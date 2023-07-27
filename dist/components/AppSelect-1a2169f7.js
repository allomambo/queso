import "../assets/AppSelect.css";
import { defineComponent as x, openBlock as o, createBlock as f, unref as k, withCtx as s, createElementBlock as a, createElementVNode as u, toDisplayString as r, renderSlot as c, normalizeProps as p, guardReactiveProps as m, createTextVNode as v, Fragment as $, renderList as q } from "vue";
import { _ as C } from "./FieldBase-03e4e23e.js";
import { _ as E } from "./DropdownBase-7175699c.js";
const N = {
  key: 0,
  class: "queso-select__read-only"
}, P = { class: "queso-select__read-only__label" }, U = { class: "text" }, w = ["name", "id", "onFocus", "onBlur", "required", "autocomplete", "multiple"], z = /* @__PURE__ */ u("option", null, null, -1), D = ["value", "selected"], j = /* @__PURE__ */ x({
  __name: "AppSelect",
  props: {
    options: { default: () => [] },
    multiple: { type: Boolean },
    placeholder: null
  },
  setup(t) {
    const B = (l, _) => {
      if (Array.isArray(l))
        return l.find((i) => i.key === _.key);
    };
    return (l, _) => (o(), f(k(C), null, {
      field: s(({
        fieldID: i,
        fieldName: b,
        fieldValue: d,
        fieldAutocomplete: S,
        updateValue: M,
        toggleIsActive: y,
        toggleIsHover: h,
        isRequired: A,
        isReadOnly: F
      }) => [
        F ? (o(), a("div", N, [
          u("span", P, r(d[0].data.label || t.placeholder), 1)
        ])) : (o(), f(k(E), {
          key: 1,
          class: "queso-select",
          options: t.options,
          "default-options": d || [],
          multiple: t.multiple,
          "onUpdate:options": (e) => M(e),
          onMouseover: (e) => h(!0),
          onMouseleave: (e) => h(!1)
        }, {
          placeholder: s(() => [
            c(l.$slots, "placeholder", p(m({ placeholder: t.placeholder })), () => [
              v(r(t.placeholder), 1)
            ])
          ]),
          selector: s(({ activeOptions: e }) => [
            c(l.$slots, "selector", p(m({ activeOptions: e })), () => [
              (o(!0), a($, null, q(e, (n) => (o(), a("span", {
                key: n.key
              }, r(n.data.label), 1))), 128))
            ])
          ]),
          icon: s(() => [
            c(l.$slots, "icon", {}, () => [
              v("↓")
            ])
          ]),
          item: s(({ key: e, data: n }) => [
            c(l.$slots, "item", p(m({ key: e, data: n })), () => [
              u("span", U, r(n.label), 1)
            ])
          ]),
          _: 2
        }, 1032, ["options", "default-options", "multiple", "onUpdate:options", "onMouseover", "onMouseleave"])),
        u("select", {
          name: b,
          id: i,
          class: "queso-select__select-native",
          onFocus: (e) => y(!0),
          onBlur: (e) => y(!1),
          required: A,
          autocomplete: S,
          multiple: t.multiple
        }, [
          z,
          (o(!0), a($, null, q(t.options, (e) => (o(), a("option", {
            value: e.key,
            key: e.key,
            selected: B(d, e)
          }, r(e.data.label), 9, D))), 128))
        ], 40, w)
      ]),
      _: 3
    }));
  }
});
export {
  j as _
};
