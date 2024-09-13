import { defineComponent as M, openBlock as l, createBlock as y, unref as v, withCtx as t, renderSlot as s, createElementBlock as a, createElementVNode as c, toDisplayString as u, normalizeProps as i, guardReactiveProps as d, createTextVNode as k, Fragment as $, renderList as S, pushScopeId as I, popScopeId as C } from "vue";
import { Q as E } from "./QuesoField--_tAD3Z8.js";
import { _ as L } from "./QuesoDropdown-C9aIKnXa.js";
import { _ as N } from "./QuesoCheckbox-BupGfZ9J.js";
import '../../assets/components/_legacy/QuesoSelect.css';const P = (p) => (I("data-v-f1577a30"), p = p(), C(), p), U = {
  key: 0,
  class: "queso-select__read-only"
}, z = { class: "queso-select__read-only__label" }, A = { class: "text" }, D = ["name", "id", "onFocus", "onBlur", "required", "autocomplete", "multiple"], R = /* @__PURE__ */ P(() => /* @__PURE__ */ c("option", null, null, -1)), T = ["value", "selected"], g = /* @__PURE__ */ M({
  __name: "QuesoSelect",
  props: {
    options: { default: () => [] },
    multiple: { type: Boolean },
    placeholder: {}
  },
  setup(p) {
    console.warn("<QuesoSelectLegacy> is deprecated. It will be removed on v1.0 version.");
    const b = (e, _) => {
      if (Array.isArray(e))
        return e.find((r) => r.key === _.key);
    };
    return (e, _) => (l(), y(v(E), null, {
      label: t(() => [
        s(e.$slots, "label", {}, void 0, !0)
      ]),
      field: t(({
        fieldID: r,
        fieldName: q,
        fieldValue: m,
        fieldAutocomplete: B,
        updateValue: Q,
        toggleIsActive: f,
        toggleIsHover: h,
        isRequired: w,
        isReadOnly: F
      }) => [
        F ? (l(), a("div", U, [
          c("span", z, u(m[0].data.label || e.placeholder), 1)
        ])) : (l(), y(v(L), {
          key: 1,
          class: "queso-select",
          options: e.options,
          "default-options": m || [],
          multiple: e.multiple,
          "onUpdate:options": (o) => Q(o),
          onMouseover: (o) => h(!0),
          onMouseleave: (o) => h(!1)
        }, {
          placeholder: t(() => [
            s(e.$slots, "placeholder", i(d({ placeholder: e.placeholder })), () => [
              k(u(e.placeholder), 1)
            ], !0)
          ]),
          selector: t(({ activeOptions: o }) => [
            s(e.$slots, "selector", i(d({ activeOptions: o })), () => [
              (l(!0), a($, null, S(o, (n) => (l(), a("span", {
                key: n.key
              }, u(n.data.label), 1))), 128))
            ], !0)
          ]),
          icon: t(() => [
            s(e.$slots, "icon", {}, () => [
              k("↓")
            ], !0)
          ]),
          item: t(({ key: o, data: n }) => [
            s(e.$slots, "item", i(d({ key: o, data: n })), () => [
              c("span", A, u(n.label), 1)
            ], !0)
          ]),
          _: 2
        }, 1032, ["options", "default-options", "multiple", "onUpdate:options", "onMouseover", "onMouseleave"])),
        c("select", {
          name: q,
          id: r,
          class: "queso-select__select-native",
          onFocus: (o) => f(!0),
          onBlur: (o) => f(!1),
          required: w,
          autocomplete: B,
          multiple: e.multiple
        }, [
          R,
          (l(!0), a($, null, S(e.options, (o) => (l(), a("option", {
            value: o.key,
            key: o.key,
            selected: b(m, o)
          }, u(o.data.label), 9, T))), 128))
        ], 40, D)
      ]),
      error: t((r) => [
        s(e.$slots, "error", i(d({ ...r })), void 0, !0)
      ]),
      _: 3
    }));
  }
}), V = /* @__PURE__ */ N(g, [["__scopeId", "data-v-f1577a30"]]);
export {
  V as Q
};
