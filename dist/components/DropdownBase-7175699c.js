import "../assets/DropdownBase.css";
import { defineComponent as N, ref as f, computed as w, onMounted as V, openBlock as p, createElementBlock as a, normalizeClass as k, unref as i, createElementVNode as u, renderSlot as o, normalizeProps as C, guardReactiveProps as D, createTextVNode as g, toDisplayString as B, createCommentVNode as O, Fragment as z, renderList as L } from "vue";
import { o as M, u as R } from "./CollapsibleBase-618d5a34.js";
const j = { class: "queso-dropdown__selector__text" }, A = {
  key: 0,
  class: "queso-dropdown__selector__placeholder"
}, G = {
  key: 1,
  class: "queso-dropdown__selector__active-label"
}, J = { class: "queso-dropdown__selector__icon" }, K = ["aria-expanded"], Q = {
  key: 0,
  class: "queso-dropdown__popover__header"
}, U = ["onClick"], W = {
  key: 1,
  class: "queso-dropdown__popover__footer"
}, x = /* @__PURE__ */ N({
  __name: "DropdownBase",
  props: {
    defaultOptions: { default: () => [] },
    options: { default: () => [] },
    multiple: { type: Boolean },
    stayOpenOnSelection: { type: Boolean }
  },
  emits: ["update:options", "open:dropdown", "close:dropdown"],
  setup(m, { expose: P, emit: y }) {
    const l = m, $ = f(), c = f(), n = f(!1), r = f([]), d = w(() => r.value.length > 0 ? r.value : l.defaultOptions);
    V(() => {
      l.multiple && (r.value = l.defaultOptions);
    });
    const S = w(() => ({
      "is-dropdown-open": n.value,
      "is-dropdown-close": !n.value,
      "has-value": d.value.length >= 1,
      "has-no-value": d.value.length < 1,
      "is-multiple": l.multiple
    })), b = (e) => {
      if (l.multiple) {
        let s = 0;
        r.value = r.value.filter((t) => {
          const _ = t.key !== e.key;
          return _ || s++, _;
        }), s < 1 && r.value.push(e);
      } else
        r.value = [e];
      y("update:options", d.value), l.multiple || l.stayOpenOnSelection || v();
    }, H = () => {
      setTimeout(() => {
        E.value = 0;
      }, 210);
    }, h = () => {
      n.value = !0, y("open:dropdown");
    }, v = () => {
      n.value = !1, y("close:dropdown"), H();
    }, T = (e = !1) => {
      e ? h() : v();
    };
    M($, () => v());
    const { y: E, arrivedState: q } = R(c, {
      offset: { top: 15, bottom: 15 }
    }), F = w(() => {
      var e, s;
      return c.value ? ((e = c.value) == null ? void 0 : e.scrollHeight) > ((s = c.value) == null ? void 0 : s.clientHeight) : !1;
    }), I = w(() => ({
      "is-scrolled-top": q.top,
      "is-scrolled-bottom": q.bottom || !F.value
    }));
    return P({ isDropdownOpen: n, openDropdown: h, closeDropdown: v }), (e, s) => m.options.length > 0 ? (p(), a("div", {
      key: 0,
      class: k(["queso-dropdown", i(S)]),
      ref_key: "dropdown",
      ref: $
    }, [
      u("div", {
        class: "queso-dropdown__selector",
        onClick: s[0] || (s[0] = (t) => T(!n.value))
      }, [
        o(e.$slots, "prefix"),
        u("div", j, [
          i(d).length < 1 ? (p(), a("div", A, [
            o(e.$slots, "placeholder")
          ])) : (p(), a("div", G, [
            o(e.$slots, "selector", C(D({ activeOptions: i(d) })), () => [
              g(B(i(d)), 1)
            ])
          ]))
        ]),
        o(e.$slots, "suffix"),
        u("div", J, [
          o(e.$slots, "icon", {}, () => [
            g("↓")
          ])
        ])
      ]),
      u("div", {
        class: "queso-dropdown__popover",
        "aria-expanded": n.value
      }, [
        e.$slots.popoverHeader ? (p(), a("div", Q, [
          o(e.$slots, "popoverHeader")
        ])) : O("", !0),
        u("div", {
          class: k(["queso-dropdown__popover__scroll", i(I)])
        }, [
          u("ul", {
            ref_key: "dropdownPopover",
            ref: c,
            class: "queso-dropdown__popover__options-list"
          }, [
            o(e.$slots, "beforeItems"),
            (p(!0), a(z, null, L(m.options, (t) => (p(), a("li", {
              key: t.key,
              onClick: (_) => b(t),
              class: k(["queso-dropdown__popover__options-list__item", { "is-active": i(d).find((_) => _.key === t.key) }])
            }, [
              o(e.$slots, "item", C(D({ ...t, openDropdown: h, closeDropdown: v })), () => [
                g(B(t), 1)
              ])
            ], 10, U))), 128)),
            o(e.$slots, "afterItems")
          ], 512)
        ], 2),
        e.$slots.popoverFooter ? (p(), a("div", W, [
          o(e.$slots, "popoverFooter")
        ])) : O("", !0)
      ], 8, K)
    ], 2)) : O("", !0);
  }
});
export {
  x as _
};
