import "../assets/components/QuesoDropdown.css";
import { defineComponent as N, ref as _, computed as f, onMounted as V, openBlock as d, createElementBlock as a, normalizeClass as h, createElementVNode as i, renderSlot as o, normalizeProps as $, guardReactiveProps as q, createTextVNode as k, toDisplayString as C, createCommentVNode as y, Fragment as z, renderList as L } from "vue";
import { o as M, u as Q } from "./QuesoCollapsible-EgPPam5S.js";
const R = { class: "queso-dropdown__selector__text" }, j = {
  key: 0,
  class: "queso-dropdown__selector__placeholder"
}, A = {
  key: 1,
  class: "queso-dropdown__selector__active-label"
}, G = { class: "queso-dropdown__selector__icon" }, J = ["aria-expanded"], K = {
  key: 0,
  class: "queso-dropdown__popover__header"
}, U = ["onClick"], W = {
  key: 1,
  class: "queso-dropdown__popover__footer"
}, x = /* @__PURE__ */ N({
  __name: "QuesoDropdown",
  props: {
    defaultOptions: { default: () => [] },
    options: { default: () => [] },
    multiple: { type: Boolean },
    stayOpenOnSelection: { type: Boolean }
  },
  emits: ["update:options", "open:dropdown", "close:dropdown"],
  setup(D, { expose: P, emit: S }) {
    const l = D, m = S, O = _(), u = _(), n = _(!1), r = _([]), p = f(() => r.value.length > 0 ? r.value : l.defaultOptions);
    V(() => {
      l.multiple && (r.value = l.defaultOptions);
    });
    const b = f(() => ({
      "is-dropdown-open": n.value,
      "is-dropdown-close": !n.value,
      "has-value": p.value.length >= 1,
      "has-no-value": p.value.length < 1,
      "is-multiple": l.multiple
    })), B = (e) => {
      if (l.multiple) {
        let s = 0;
        r.value = r.value.filter((t) => {
          const v = t.key !== e.key;
          return v || s++, v;
        }), s < 1 && r.value.push(e);
      } else
        r.value = [e];
      m("update:options", p.value), l.multiple || l.stayOpenOnSelection || c();
    }, H = () => {
      setTimeout(() => {
        E.value = 0;
      }, 210);
    }, w = () => {
      n.value = !0, m("open:dropdown");
    }, c = () => {
      n.value = !1, m("close:dropdown"), H();
    }, T = (e = !1) => {
      e ? w() : c();
    };
    M(O, () => c());
    const { y: E, arrivedState: g } = Q(u, {
      offset: { top: 15, bottom: 15 }
    }), F = f(() => {
      var e, s;
      return u.value ? ((e = u.value) == null ? void 0 : e.scrollHeight) > ((s = u.value) == null ? void 0 : s.clientHeight) : !1;
    }), I = f(() => ({
      "is-scrolled-top": g.top,
      "is-scrolled-bottom": g.bottom || !F.value
    }));
    return P({ isDropdownOpen: n, openDropdown: w, closeDropdown: c }), (e, s) => e.options.length > 0 ? (d(), a("div", {
      key: 0,
      class: h(["queso-dropdown", b.value]),
      ref_key: "dropdown",
      ref: O
    }, [
      i("div", {
        class: "queso-dropdown__selector",
        onClick: s[0] || (s[0] = (t) => T(!n.value))
      }, [
        o(e.$slots, "prefix"),
        i("div", R, [
          p.value.length < 1 ? (d(), a("div", j, [
            o(e.$slots, "placeholder")
          ])) : (d(), a("div", A, [
            o(e.$slots, "selector", $(q({ activeOptions: p.value })), () => [
              k(C(p.value), 1)
            ])
          ]))
        ]),
        o(e.$slots, "suffix"),
        i("div", G, [
          o(e.$slots, "icon", {}, () => [
            k("↓")
          ])
        ])
      ]),
      i("div", {
        class: "queso-dropdown__popover",
        "aria-expanded": n.value
      }, [
        e.$slots.popoverHeader ? (d(), a("div", K, [
          o(e.$slots, "popoverHeader")
        ])) : y("", !0),
        i("div", {
          class: h(["queso-dropdown__popover__scroll", I.value])
        }, [
          i("ul", {
            ref_key: "dropdownPopover",
            ref: u,
            class: "queso-dropdown__popover__options-list"
          }, [
            o(e.$slots, "beforeItems"),
            (d(!0), a(z, null, L(e.options, (t) => (d(), a("li", {
              key: t.key,
              onClick: (v) => B(t),
              class: h(["queso-dropdown__popover__options-list__item", { "is-active": p.value.find((v) => v.key === t.key) }])
            }, [
              o(e.$slots, "item", $(q({ ...t, openDropdown: w, closeDropdown: c })), () => [
                k(C(t), 1)
              ])
            ], 10, U))), 128)),
            o(e.$slots, "afterItems")
          ], 512)
        ], 2),
        e.$slots.popoverFooter ? (d(), a("div", W, [
          o(e.$slots, "popoverFooter")
        ])) : y("", !0)
      ], 8, J)
    ], 2)) : y("", !0);
  }
});
export {
  x as _
};
