import "../assets/components/QuesoDropdown.css";
import { defineComponent as N, ref as _, computed as f, onMounted as V, openBlock as d, createElementBlock as a, normalizeClass as h, createElementVNode as i, renderSlot as o, normalizeProps as k, guardReactiveProps as y, createTextVNode as O, toDisplayString as C, createCommentVNode as $, Fragment as z, renderList as L } from "vue";
import { o as M, u as Q } from "./QuesoCollapsible-vi6f46Ei.js";
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
    const n = D, m = S, g = _(), u = _(), r = _(!1), p = _([]), s = f(() => p.value.length > 0 ? p.value : n.defaultOptions);
    V(() => {
      n.multiple && (p.value = n.defaultOptions);
    });
    const b = f(() => ({
      "is-dropdown-open": r.value,
      "is-dropdown-close": !r.value,
      "has-value": s.value.length >= 1,
      "has-no-value": s.value.length < 1,
      "is-multiple": n.multiple
    })), B = (e) => {
      if (n.multiple) {
        let t = 0;
        p.value = p.value.filter((l) => {
          const c = l.key !== e.key;
          return c || t++, c;
        }), t < 1 && p.value.push(e);
      } else
        p.value = [e];
      m("update:options", s.value), n.multiple || n.stayOpenOnSelection || v();
    }, H = () => {
      setTimeout(() => {
        E.value = 0;
      }, 210);
    }, w = () => {
      r.value = !0, m("open:dropdown");
    }, v = () => {
      r.value = !1, m("close:dropdown"), H();
    }, T = (e = !1) => {
      e ? w() : v();
    };
    M(g, () => v());
    const { y: E, arrivedState: q } = Q(u, {
      offset: { top: 15, bottom: 15 }
    }), F = f(() => {
      var e, t;
      return u.value ? ((e = u.value) == null ? void 0 : e.scrollHeight) > ((t = u.value) == null ? void 0 : t.clientHeight) : !1;
    }), I = f(() => ({
      "is-scrolled-top": q.top,
      "is-scrolled-bottom": q.bottom || !F.value
    }));
    return P({ isDropdownOpen: r, openDropdown: w, closeDropdown: v }), (e, t) => e.options.length > 0 ? (d(), a("div", {
      key: 0,
      class: h(["queso-dropdown", b.value]),
      ref_key: "dropdown",
      ref: g
    }, [
      i("div", {
        class: "queso-dropdown__selector",
        onClick: t[0] || (t[0] = (l) => T(!r.value))
      }, [
        o(e.$slots, "header", k(y({ activeOptions: s.value })), () => [
          o(e.$slots, "prefix"),
          i("div", R, [
            s.value.length < 1 ? (d(), a("div", j, [
              o(e.$slots, "placeholder")
            ])) : (d(), a("div", A, [
              o(e.$slots, "selector", k(y({ activeOptions: s.value })), () => [
                O(C(s.value), 1)
              ])
            ]))
          ]),
          o(e.$slots, "suffix"),
          i("div", G, [
            o(e.$slots, "icon", {}, () => [
              O("↓")
            ])
          ])
        ])
      ]),
      i("div", {
        class: "queso-dropdown__popover",
        "aria-expanded": r.value
      }, [
        e.$slots.popoverHeader ? (d(), a("div", K, [
          o(e.$slots, "popoverHeader")
        ])) : $("", !0),
        i("div", {
          class: h(["queso-dropdown__popover__scroll", I.value])
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
              o(e.$slots, "item", k(y({ ...l, openDropdown: w, closeDropdown: v })), () => [
                O(C(l), 1)
              ])
            ], 10, U))), 128)),
            o(e.$slots, "afterItems")
          ], 512)
        ], 2),
        e.$slots.popoverFooter ? (d(), a("div", W, [
          o(e.$slots, "popoverFooter")
        ])) : $("", !0)
      ], 8, J)
    ], 2)) : $("", !0);
  }
});
export {
  x as _
};
