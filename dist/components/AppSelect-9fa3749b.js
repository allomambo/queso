import "../assets/AppSelect.css";
import { defineComponent as C, openBlock as o, createBlock as f, unref as k, withCtx as s, renderSlot as a, createElementBlock as r, createElementVNode as u, toDisplayString as c, normalizeProps as p, guardReactiveProps as m, createTextVNode as $, Fragment as v, renderList as b } from "vue";
import { _ as E } from "./FieldBase-03e4e23e.js";
import { _ as N } from "./DropdownBase-7175699c.js";
const P = {
  key: 0,
  class: "queso-select__read-only"
}, U = { class: "queso-select__read-only__label" }, w = { class: "text" }, x = ["name", "id", "onFocus", "onBlur", "required", "autocomplete", "multiple"], z = /* @__PURE__ */ u("option", null, null, -1), D = ["value", "selected"], j = /* @__PURE__ */ C({
  __name: "AppSelect",
  props: {
    options: { default: () => [] },
    multiple: { type: Boolean },
    placeholder: null
  },
  setup(t) {
    const q = (l, _) => {
      if (Array.isArray(l))
        return l.find((i) => i.key === _.key);
    };
    return (l, _) => (o(), f(k(E), null, {
      label: s(() => [
        a(l.$slots, "label")
      ]),
      field: s(({
        fieldID: i,
        fieldName: B,
        fieldValue: d,
        fieldAutocomplete: S,
        updateValue: M,
        toggleIsActive: y,
        toggleIsHover: h,
        isRequired: A,
        isReadOnly: F
      }) => [
        F ? (o(), r("div", P, [
          u("span", U, c(d[0].data.label || t.placeholder), 1)
        ])) : (o(), f(k(N), {
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
            a(l.$slots, "placeholder", p(m({ placeholder: t.placeholder })), () => [
              $(c(t.placeholder), 1)
            ])
          ]),
          selector: s(({ activeOptions: e }) => [
            a(l.$slots, "selector", p(m({ activeOptions: e })), () => [
              (o(!0), r(v, null, b(e, (n) => (o(), r("span", {
                key: n.key
              }, c(n.data.label), 1))), 128))
            ])
          ]),
          icon: s(() => [
            a(l.$slots, "icon", {}, () => [
              $("↓")
            ])
          ]),
          item: s(({ key: e, data: n }) => [
            a(l.$slots, "item", p(m({ key: e, data: n })), () => [
              u("span", w, c(n.label), 1)
            ])
          ]),
          _: 2
        }, 1032, ["options", "default-options", "multiple", "onUpdate:options", "onMouseover", "onMouseleave"])),
        u("select", {
          name: B,
          id: i,
          class: "queso-select__select-native",
          onFocus: (e) => y(!0),
          onBlur: (e) => y(!1),
          required: A,
          autocomplete: S,
          multiple: t.multiple
        }, [
          z,
          (o(!0), r(v, null, b(t.options, (e) => (o(), r("option", {
            value: e.key,
            key: e.key,
            selected: q(d, e)
          }, c(e.data.label), 9, D))), 128))
        ], 40, x)
      ]),
      _: 3
    }));
  }
});
export {
  j as _
};
