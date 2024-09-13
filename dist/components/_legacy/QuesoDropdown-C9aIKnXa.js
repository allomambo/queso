import { defineComponent as N, ref as _, computed as f, onMounted as V, openBlock as d, createElementBlock as a, normalizeClass as h, createElementVNode as i, renderSlot as o, normalizeProps as $, guardReactiveProps as q, createTextVNode as y, toDisplayString as C, createCommentVNode as k, Fragment as z, renderList as L, mergeProps as Q } from "vue";
import { a as M, u as R } from "../QuesoCollapsible-BAoVzf7E.js";
import '../../assets/components/QuesoDropdown.css';const j = { class: "queso-dropdown__selector__text" }, A = {
  key: 0,
  class: "queso-dropdown__selector__placeholder"
}, G = {
  key: 1,
  class: "queso-dropdown__selector__active-label"
}, J = { class: "queso-dropdown__selector__icon" }, K = ["aria-expanded"], U = {
  key: 0,
  class: "queso-dropdown__popover__header"
}, W = ["onClick"], X = {
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
  setup(D, { expose: P, emit: b }) {
    console.warn("<QuesoDropdownLegacy> is deprecated. It will be removed on v1.0 version.");
    const r = D, m = b, g = _(), u = _(), n = _(!1), p = _([]), s = f(() => p.value.length > 0 ? p.value : r.defaultOptions);
    V(() => {
      r.multiple && (p.value = r.defaultOptions);
    });
    const S = f(() => ({
      "is-dropdown-open": n.value,
      "is-dropdown-close": !n.value,
      "has-value": s.value.length >= 1,
      "has-no-value": s.value.length < 1,
      "is-multiple": r.multiple
    })), B = (e) => {
      if (r.multiple) {
        let t = 0;
        p.value = p.value.filter((l) => {
          const c = l.key !== e.key;
          return c || t++, c;
        }), t < 1 && p.value.push(e);
      } else
        p.value = [e];
      m("update:options", s.value), r.multiple || r.stayOpenOnSelection || v();
    }, H = () => {
      setTimeout(() => {
        T.value = 0;
      }, 210);
    }, w = () => {
      n.value = !0, m("open:dropdown");
    }, v = () => {
      n.value = !1, m("close:dropdown"), H();
    }, I = (e = !1) => {
      e ? w() : v();
    };
    M(g, () => v());
    const { y: T, arrivedState: O } = R(u, {
      offset: { top: 15, bottom: 15 }
    }), E = f(() => {
      var e, t;
      return u.value ? ((e = u.value) == null ? void 0 : e.scrollHeight) > ((t = u.value) == null ? void 0 : t.clientHeight) : !1;
    }), F = f(() => ({
      "is-scrolled-top": O.top,
      "is-scrolled-bottom": O.bottom || !E.value
    }));
    return P({ isDropdownOpen: n, openDropdown: w, closeDropdown: v }), (e, t) => e.options.length > 0 ? (d(), a("div", {
      key: 0,
      class: h(["queso-dropdown", S.value]),
      ref_key: "dropdown",
      ref: g
    }, [
      i("div", {
        class: "queso-dropdown__selector",
        onClick: t[0] || (t[0] = (l) => I(!n.value))
      }, [
        o(e.$slots, "header", $(q({ activeOptions: s.value })), () => [
          o(e.$slots, "prefix"),
          i("div", j, [
            s.value.length < 1 ? (d(), a("div", A, [
              o(e.$slots, "placeholder")
            ])) : (d(), a("div", G, [
              o(e.$slots, "selector", $(q({ activeOptions: s.value })), () => [
                y(C(s.value), 1)
              ])
            ]))
          ]),
          o(e.$slots, "suffix"),
          i("div", J, [
            o(e.$slots, "icon", {}, () => [
              y("↓")
            ])
          ])
        ])
      ]),
      i("div", {
        class: "queso-dropdown__popover",
        "aria-expanded": n.value
      }, [
        e.$slots.popoverHeader ? (d(), a("div", U, [
          o(e.$slots, "popoverHeader")
        ])) : k("", !0),
        i("div", {
          class: h(["queso-dropdown__popover__scroll", F.value])
        }, [
          i("ul", {
            ref_key: "dropdownPopover",
            ref: u,
            class: "queso-dropdown__popover__options-list"
          }, [
            o(e.$slots, "beforeItems"),
            (d(!0), a(z, null, L(e.options, (l) => (d(), a("li", {
              key: l.key,
              onClick: (c) => B(l),
              class: h(["queso-dropdown__popover__options-list__item", { "is-active": s.value.find((c) => c.key === l.key) }])
            }, [
              o(e.$slots, "item", Q({ ref_for: !0 }, { ...l, openDropdown: w, closeDropdown: v }), () => [
                y(C(l), 1)
              ])
            ], 10, W))), 128)),
            o(e.$slots, "afterItems")
          ], 512)
        ], 2),
        e.$slots.popoverFooter ? (d(), a("div", X, [
          o(e.$slots, "popoverFooter")
        ])) : k("", !0)
      ], 8, K)
    ], 2)) : k("", !0);
  }
});
export {
  x as _
};
