import { defineComponent as ce, mergeModels as U, useModel as pe, ref as $, toRefs as ve, useId as fe, computed as q, watch as Y, unref as w, openBlock as y, createElementBlock as h, normalizeClass as B, createElementVNode as _, renderSlot as u, normalizeProps as f, guardReactiveProps as b, createTextVNode as M, toDisplayString as Q, createCommentVNode as R, withModifiers as be, Fragment as me, renderList as we, mergeProps as ye, nextTick as he } from "vue";
import { o as De, u as _e } from "./QuesoCollapsible-ddhTDc1c.js";
import '../assets/components/QuesoDropdown.css';const ke = ["aria-expanded", "aria-activedescendant", "aria-label", "aria-labelledby", "aria-required", "aria-invalid", "aria-disabled", "tabindex"], ge = { class: "queso-dropdown__selector__text" }, Oe = {
  key: 0,
  class: "queso-dropdown__selector__text__placeholder"
}, $e = {
  key: 1,
  class: "queso-dropdown__selector__text__active-label"
}, qe = { class: "queso-dropdown__selector__icon" }, Ce = ["inert"], Te = {
  key: 0,
  class: "queso-dropdown__popover__header"
}, xe = ["aria-label", "aria-labelledby", "aria-multiselectable"], Ie = ["id", "aria-selected", "onClick", "onPointermove"], Pe = {
  key: 1,
  class: "queso-dropdown__popover__footer"
}, Ee = 500, Re = /* @__PURE__ */ ce({
  __name: "QuesoDropdown",
  props: /* @__PURE__ */ U({
    options: {},
    multiple: { type: Boolean },
    stayOpenOnSelection: { type: Boolean },
    isDisabled: { type: Boolean },
    isRequired: { type: Boolean },
    isError: { type: Boolean },
    ariaLabel: {},
    ariaLabelledby: {}
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ U(["dropdown:open", "dropdown:close"], ["update:modelValue"]),
  setup(i, { expose: j, emit: G }) {
    const c = i, F = G, r = pe(i, "modelValue"), C = $(null), S = $(null), D = $(null), l = $(!1), s = $(-1), { options: a } = ve(c), T = "queso-dropdown__" + fe(), p = q(() => a.value.filter((e) => r.value.includes(e.value))), J = q(() => ({
      "is-multiple": c.multiple,
      "is-dropdown-open": l.value,
      "is-dropdown-close": !l.value,
      "is-disabled": c.isDisabled
    })), x = (e) => `${T}-option-${e}`, I = () => a.value.findIndex((e) => r.value.includes(e.value)), A = (e) => l.value && s.value === e, W = q(() => l.value && s.value >= 0 ? x(s.value) : void 0), X = (e) => {
      const o = D.value, t = o == null ? void 0 : o.querySelector(`[id="${x(e)}"]`);
      if (!o || !t)
        return;
      const n = o.getBoundingClientRect(), v = t.getBoundingClientRect();
      v.top < n.top ? o.scrollTop -= n.top - v.top : v.bottom > n.bottom && (o.scrollTop += v.bottom - n.bottom);
    }, k = (e) => {
      s.value = Math.min(Math.max(e, 0), a.value.length - 1), he(() => X(s.value));
    }, Z = () => {
      const e = a.value[s.value];
      e && (r.value = [e.value]);
    }, L = (e) => {
      const o = a.value[e];
      o && (c.multiple ? r.value.includes(o.value) ? r.value = r.value.filter((t) => t !== o.value) : r.value = [...r.value, o.value] : (r.value = [o.value], c.stayOpenOnSelection || d()));
    }, ee = (e) => {
      s.value = e, L(e);
    }, oe = (e) => {
      l.value && (s.value = e);
    };
    let H;
    const P = () => {
      var e;
      (e = S.value) == null || e.focus();
    }, g = (e) => {
      c.isDisabled || (k(e), !l.value && (clearTimeout(H), l.value = !0, F("dropdown:open")));
    }, E = () => {
      g(Math.max(I(), 0)), P();
    }, d = () => {
      l.value && (l.value = !1, s.value = -1, H = setTimeout(() => {
        ie.value = 0;
      }, 210), F("dropdown:close"));
    }, te = () => {
      l.value ? d() : E();
    };
    let m = "", K;
    const le = (e, o) => e.trim().slice(0, o.length).localeCompare(o, void 0, { sensitivity: "base" }) === 0, ae = (e) => {
      clearTimeout(K), K = setTimeout(() => {
        m = "";
      }, Ee), m += e.toLowerCase();
      const t = [...m].every((O) => O === m[0]) ? m[0] : m, n = l.value ? s.value : I(), v = Math.max(n + (t.length === 1 ? 1 : 0), 0), N = a.value.length;
      for (let O = 0; O < N; O++) {
        const z = (v + O) % N;
        if (le(a.value[z].label, t)) {
          g(z);
          return;
        }
      }
    }, se = (e) => e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey, re = (e) => {
      if (c.isDisabled)
        return;
      const o = a.value.length - 1;
      if (se(e) && (e.key !== " " || m !== "")) {
        e.preventDefault(), ae(e.key);
        return;
      }
      if (!l.value) {
        switch (e.key) {
          case "ArrowDown":
          case "ArrowUp":
          case "Enter":
          case " ":
            e.preventDefault(), g(Math.max(I(), 0));
            break;
          case "Home":
            e.preventDefault(), g(0);
            break;
          case "End":
            e.preventDefault(), g(o);
            break;
        }
        return;
      }
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), e.altKey || k(s.value + 1);
          break;
        case "ArrowUp":
          e.preventDefault(), e.altKey ? d() : k(s.value - 1);
          break;
        case "Home":
          e.preventDefault(), k(0);
          break;
        case "End":
          e.preventDefault(), k(o);
          break;
        case "Enter":
        case " ":
          e.preventDefault(), L(s.value);
          break;
        case "Escape":
          e.preventDefault(), e.stopPropagation(), d();
          break;
        case "Tab":
          c.multiple || Z(), d();
          break;
      }
    }, ne = (e) => {
      var t;
      const o = e.relatedTarget;
      o && !((t = C.value) != null && t.contains(o)) && d();
    };
    De(C, () => d()), Y(
      () => c.isDisabled,
      (e) => {
        e && l.value && d();
      }
    ), Y(
      () => a.value.length,
      (e) => {
        s.value >= e && (s.value = e - 1);
      }
    );
    const { y: ie, arrivedState: V } = _e(D, {
      offset: { top: 15, bottom: 15 }
    }), de = q(() => {
      var e, o;
      return D.value ? ((e = D.value) == null ? void 0 : e.scrollHeight) > ((o = D.value) == null ? void 0 : o.clientHeight) : !1;
    }), ue = q(() => ({
      "is-scrolled-top": V.top,
      "is-scrolled-bottom": V.bottom || !de.value
    }));
    return j({ isDropdownOpen: l, openDropdown: E, closeDropdown: d, focusSelector: P }), (e, o) => w(a).length > 0 ? (y(), h("div", {
      key: 0,
      ref_key: "dropdown",
      ref: C,
      class: B(["queso-dropdown", J.value]),
      onFocusout: o[4] || (o[4] = (t) => ne(t))
    }, [
      _("div", {
        ref_key: "selector",
        ref: S,
        class: "queso-dropdown__selector",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": l.value,
        "aria-controls": T,
        "aria-activedescendant": W.value,
        "aria-label": i.ariaLabel,
        "aria-labelledby": i.ariaLabelledby,
        "aria-required": i.isRequired || void 0,
        "aria-invalid": i.isError || void 0,
        "aria-disabled": i.isDisabled || void 0,
        tabindex: i.isDisabled ? -1 : 0,
        onClick: o[0] || (o[0] = (t) => te()),
        onKeydown: o[1] || (o[1] = (t) => re(t))
      }, [
        u(e.$slots, "selector", f(b({ isDropdownOpen: l.value, options: w(a), activeOptions: p.value })), () => [
          u(e.$slots, "selectorBeforeText", f(b({ isDropdownOpen: l.value, options: w(a), activeOptions: p.value }))),
          _("div", ge, [
            p.value.length < 1 ? (y(), h("div", Oe, [
              u(e.$slots, "selectorPlaceholder", f(b({ isDropdownOpen: l.value })))
            ])) : (y(), h("div", $e, [
              u(e.$slots, "selectorActiveOptions", f(b({ isDropdownOpen: l.value, activeOptions: p.value })), () => [
                M(Q(p.value), 1)
              ])
            ]))
          ]),
          u(e.$slots, "selectorAfterText", f(b({ isDropdownOpen: l.value, options: w(a), activeOptions: p.value }))),
          _("div", qe, [
            u(e.$slots, "selectorIcon", f(b({ isDropdownOpen: l.value })), () => [
              o[5] || (o[5] = M("↓", -1))
            ])
          ])
        ])
      ], 40, ke),
      _("div", {
        class: "queso-dropdown__popover",
        inert: !l.value
      }, [
        e.$slots.popoverHeader ? (y(), h("div", Te, [
          u(e.$slots, "popoverHeader", f(b({ options: w(a), activeOptions: p.value })))
        ])) : R("", !0),
        _("div", {
          class: B(["queso-dropdown__popover__scroll", ue.value])
        }, [
          _("ul", {
            ref_key: "dropdownPopover",
            ref: D,
            class: "queso-dropdown__popover__options-list",
            role: "listbox",
            id: T,
            "aria-label": i.ariaLabel,
            "aria-labelledby": i.ariaLabelledby,
            "aria-multiselectable": i.multiple || void 0,
            tabindex: "-1",
            onFocus: o[2] || (o[2] = (t) => P()),
            onMousedown: o[3] || (o[3] = be(() => {
            }, ["prevent"]))
          }, [
            (y(!0), h(me, null, we(w(a), (t, n) => (y(), h("li", {
              key: t.value,
              class: B(["queso-dropdown__popover__options-list__item", {
                "is-option-active": r.value.includes(t.value),
                "is-option-selected": r.value.includes(t.value),
                "is-option-focused": A(n)
              }]),
              role: "option",
              id: x(n),
              "aria-selected": r.value.includes(t.value),
              onClick: (v) => ee(n),
              onPointermove: (v) => oe(n)
            }, [
              u(e.$slots, "popoverItem", ye({ ref_for: !0 }, {
                index: n,
                ...t,
                isSelected: r.value.includes(t.value),
                isFocused: A(n),
                openDropdown: E,
                closeDropdown: d
              }), () => [
                M(Q(t), 1)
              ])
            ], 42, Ie))), 128))
          ], 40, xe)
        ], 2),
        e.$slots.popoverFooter ? (y(), h("div", Pe, [
          u(e.$slots, "popoverFooter", f(b({ options: w(a), activeOptions: p.value })))
        ])) : R("", !0)
      ], 8, Ce),
      u(e.$slots, "afterDropdown")
    ], 34)) : R("", !0);
  }
});
export {
  Re as _
};
