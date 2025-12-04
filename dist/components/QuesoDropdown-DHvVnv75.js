import { getCurrentScope as Ie, onScopeDispose as Pe, unref as A, ref as $, computed as z, watch as Fe, defineComponent as Re, mergeModels as ye, useModel as Ce, toRefs as xe, openBlock as R, createElementBlock as C, normalizeClass as le, createElementVNode as j, renderSlot as D, normalizeProps as O, guardReactiveProps as _, createTextVNode as ce, toDisplayString as me, createCommentVNode as de, Fragment as Be, renderList as Le, mergeProps as Ke } from "vue";
import { o as je, a as qe, u as $e } from "./QuesoCollapsible-BAoVzf7E.js";
import '../assets/components/QuesoDropdown.css';function Me(n) {
  return Ie() ? (Pe(n), !0) : !1;
}
function ve(n) {
  return typeof n == "function" ? n() : A(n);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ve = (n) => n != null;
function Ge(n) {
  var e;
  const t = ve(n);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Se = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], re = /* @__PURE__ */ Se.join(","), De = typeof Element > "u", B = De ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ne = !De && Element.prototype.getRootNode ? function(n) {
  var e;
  return n == null || (e = n.getRootNode) === null || e === void 0 ? void 0 : e.call(n);
} : function(n) {
  return n == null ? void 0 : n.ownerDocument;
}, oe = function n(e, t) {
  var r;
  t === void 0 && (t = !0);
  var s = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), u = s === "" || s === "true", o = u || t && e && n(e.parentNode);
  return o;
}, Ue = function(e) {
  var t, r = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
  return r === "" || r === "true";
}, Ee = function(e, t, r) {
  if (oe(e))
    return [];
  var s = Array.prototype.slice.apply(e.querySelectorAll(re));
  return t && B.call(e, re) && s.unshift(e), s = s.filter(r), s;
}, Oe = function n(e, t, r) {
  for (var s = [], u = Array.from(e); u.length; ) {
    var o = u.shift();
    if (!oe(o, !1))
      if (o.tagName === "SLOT") {
        var f = o.assignedElements(), v = f.length ? f : o.children, d = n(v, !0, r);
        r.flatten ? s.push.apply(s, d) : s.push({
          scopeParent: o,
          candidates: d
        });
      } else {
        var g = B.call(o, re);
        g && r.filter(o) && (t || !e.includes(o)) && s.push(o);
        var w = o.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(o), y = !oe(w, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
        if (w && y) {
          var F = n(w === !0 ? o.children : w.children, !0, r);
          r.flatten ? s.push.apply(s, F) : s.push({
            scopeParent: o,
            candidates: F
          });
        } else
          u.unshift.apply(u, o.children);
      }
  }
  return s;
}, _e = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, x = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Ue(e)) && !_e(e) ? 0 : e.tabIndex;
}, We = function(e, t) {
  var r = x(e);
  return r < 0 && t && !_e(e) ? 0 : r;
}, He = function(e, t) {
  return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, Ae = function(e) {
  return e.tagName === "INPUT";
}, ze = function(e) {
  return Ae(e) && e.type === "hidden";
}, Ye = function(e) {
  var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return t;
}, Ze = function(e, t) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === t)
      return e[r];
}, Qe = function(e) {
  if (!e.name)
    return !0;
  var t = e.form || ne(e), r = function(f) {
    return t.querySelectorAll('input[type="radio"][name="' + f + '"]');
  }, s;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    s = r(window.CSS.escape(e.name));
  else
    try {
      s = r(e.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var u = Ze(s, e.form);
  return !u || u === e;
}, Xe = function(e) {
  return Ae(e) && e.type === "radio";
}, Je = function(e) {
  return Xe(e) && !Qe(e);
}, et = function(e) {
  var t, r = e && ne(e), s = (t = r) === null || t === void 0 ? void 0 : t.host, u = !1;
  if (r && r !== e) {
    var o, f, v;
    for (u = !!((o = s) !== null && o !== void 0 && (f = o.ownerDocument) !== null && f !== void 0 && f.contains(s) || e != null && (v = e.ownerDocument) !== null && v !== void 0 && v.contains(e)); !u && s; ) {
      var d, g, w;
      r = ne(s), s = (d = r) === null || d === void 0 ? void 0 : d.host, u = !!((g = s) !== null && g !== void 0 && (w = g.ownerDocument) !== null && w !== void 0 && w.contains(s));
    }
  }
  return u;
}, ge = function(e) {
  var t = e.getBoundingClientRect(), r = t.width, s = t.height;
  return r === 0 && s === 0;
}, tt = function(e, t) {
  var r = t.displayCheck, s = t.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var u = B.call(e, "details>summary:first-of-type"), o = u ? e.parentElement : e;
  if (B.call(o, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof s == "function") {
      for (var f = e; e; ) {
        var v = e.parentElement, d = ne(e);
        if (v && !v.shadowRoot && s(v) === !0)
          return ge(e);
        e.assignedSlot ? e = e.assignedSlot : !v && d !== e.ownerDocument ? e = d.host : e = v;
      }
      e = f;
    }
    if (et(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return ge(e);
  return !1;
}, at = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var t = e.parentElement; t; ) {
      if (t.tagName === "FIELDSET" && t.disabled) {
        for (var r = 0; r < t.children.length; r++) {
          var s = t.children.item(r);
          if (s.tagName === "LEGEND")
            return B.call(t, "fieldset[disabled] *") ? !0 : !s.contains(e);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, ie = function(e, t) {
  return !(t.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  oe(t) || ze(t) || tt(t, e) || // For a details element with a summary, the summary element gets the focus
  Ye(t) || at(t));
}, be = function(e, t) {
  return !(Je(t) || x(t) < 0 || !ie(e, t));
}, rt = function(e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, nt = function n(e) {
  var t = [], r = [];
  return e.forEach(function(s, u) {
    var o = !!s.scopeParent, f = o ? s.scopeParent : s, v = We(f, o), d = o ? n(s.candidates) : f;
    v === 0 ? o ? t.push.apply(t, d) : t.push(f) : r.push({
      documentOrder: u,
      tabIndex: v,
      item: s,
      isScope: o,
      content: d
    });
  }), r.sort(He).reduce(function(s, u) {
    return u.isScope ? s.push.apply(s, u.content) : s.push(u.content), s;
  }, []).concat(t);
}, ot = function(e, t) {
  t = t || {};
  var r;
  return t.getShadowRoot ? r = Oe([e], t.includeContainer, {
    filter: be.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: rt
  }) : r = Ee(e, t.includeContainer, be.bind(null, t)), nt(r);
}, it = function(e, t) {
  t = t || {};
  var r;
  return t.getShadowRoot ? r = Oe([e], t.includeContainer, {
    filter: ie.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : r = Ee(e, t.includeContainer, ie.bind(null, t)), r;
}, q = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return B.call(e, re) === !1 ? !1 : be(t, e);
}, st = /* @__PURE__ */ Se.concat("iframe").join(","), fe = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return B.call(e, st) === !1 ? !1 : ie(t, e);
};
/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function pe(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = Array(e); t < e; t++)
    r[t] = n[t];
  return r;
}
function ut(n) {
  if (Array.isArray(n))
    return pe(n);
}
function lt(n, e, t) {
  return (e = bt(e)) in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function ct(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null)
    return Array.from(n);
}
function dt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function we(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Te(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? we(Object(t), !0).forEach(function(r) {
      lt(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : we(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function ft(n) {
  return ut(n) || ct(n) || pt(n) || dt();
}
function vt(n, e) {
  if (typeof n != "object" || !n)
    return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(n, e);
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function bt(n) {
  var e = vt(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function pt(n, e) {
  if (n) {
    if (typeof n == "string")
      return pe(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? pe(n, e) : void 0;
  }
}
var Ne = {
  activateTrap: function(e, t) {
    if (e.length > 0) {
      var r = e[e.length - 1];
      r !== t && r._setPausedState(!0);
    }
    var s = e.indexOf(t);
    s === -1 || e.splice(s, 1), e.push(t);
  },
  deactivateTrap: function(e, t) {
    var r = e.indexOf(t);
    r !== -1 && e.splice(r, 1), e.length > 0 && !e[e.length - 1]._isManuallyPaused() && e[e.length - 1]._setPausedState(!1);
  }
}, ht = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, yt = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, Y = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, mt = function(e) {
  return Y(e) && !e.shiftKey;
}, gt = function(e) {
  return Y(e) && e.shiftKey;
}, ke = function(e) {
  return setTimeout(e, 0);
}, H = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
    r[s - 1] = arguments[s];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, ae = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, wt = [], Tt = function(e, t) {
  var r = (t == null ? void 0 : t.document) || document, s = (t == null ? void 0 : t.trapStack) || wt, u = Te({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: mt,
    isKeyBackward: gt
  }, t), o = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    manuallyPaused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, f, v = function(a, i, c) {
    return a && a[i] !== void 0 ? a[i] : u[c || i];
  }, d = function(a, i) {
    var c = typeof (i == null ? void 0 : i.composedPath) == "function" ? i.composedPath() : void 0;
    return o.containerGroups.findIndex(function(b) {
      var h = b.container, m = b.tabbableNodes;
      return h.contains(a) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (c == null ? void 0 : c.includes(h)) || m.find(function(p) {
        return p === a;
      });
    });
  }, g = function(a) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = i.hasFallback, b = c === void 0 ? !1 : c, h = i.params, m = h === void 0 ? [] : h, p = u[a];
    if (typeof p == "function" && (p = p.apply(void 0, ft(m))), p === !0 && (p = void 0), !p) {
      if (p === void 0 || p === !1)
        return p;
      throw new Error("`".concat(a, "` was specified but was not a node, or did not return a node"));
    }
    var T = p;
    if (typeof p == "string") {
      try {
        T = r.querySelector(p);
      } catch (N) {
        throw new Error("`".concat(a, '` appears to be an invalid selector; error="').concat(N.message, '"'));
      }
      if (!T && !b)
        throw new Error("`".concat(a, "` as selector refers to no known node"));
    }
    return T;
  }, w = function() {
    var a = g("initialFocus", {
      hasFallback: !0
    });
    if (a === !1)
      return !1;
    if (a === void 0 || a && !fe(a, u.tabbableOptions))
      if (d(r.activeElement) >= 0)
        a = r.activeElement;
      else {
        var i = o.tabbableGroups[0], c = i && i.firstTabbableNode;
        a = c || g("fallbackFocus");
      }
    else
      a === null && (a = g("fallbackFocus"));
    if (!a)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return a;
  }, y = function() {
    if (o.containerGroups = o.containers.map(function(a) {
      var i = ot(a, u.tabbableOptions), c = it(a, u.tabbableOptions), b = i.length > 0 ? i[0] : void 0, h = i.length > 0 ? i[i.length - 1] : void 0, m = c.find(function(N) {
        return q(N);
      }), p = c.slice().reverse().find(function(N) {
        return q(N);
      }), T = !!i.find(function(N) {
        return x(N) > 0;
      });
      return {
        container: a,
        tabbableNodes: i,
        focusableNodes: c,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: T,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: b,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: h,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: m,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: p,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(P) {
          var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, E = i.indexOf(P);
          return E < 0 ? U ? c.slice(c.indexOf(P) + 1).find(function(W) {
            return q(W);
          }) : c.slice(0, c.indexOf(P)).reverse().find(function(W) {
            return q(W);
          }) : i[E + (U ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(a) {
      return a.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !g("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(a) {
      return a.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, F = function(a) {
    var i = a.activeElement;
    if (i)
      return i.shadowRoot && i.shadowRoot.activeElement !== null ? F(i.shadowRoot) : i;
  }, k = function(a) {
    if (a !== !1 && a !== F(document)) {
      if (!a || !a.focus) {
        k(w());
        return;
      }
      a.focus({
        preventScroll: !!u.preventScroll
      }), o.mostRecentlyFocusedNode = a, ht(a) && a.select();
    }
  }, Z = function(a) {
    var i = g("setReturnFocus", {
      params: [a]
    });
    return i || (i === !1 ? !1 : a);
  }, L = function(a) {
    var i = a.target, c = a.event, b = a.isBackward, h = b === void 0 ? !1 : b;
    i = i || ae(c), y();
    var m = null;
    if (o.tabbableGroups.length > 0) {
      var p = d(i, c), T = p >= 0 ? o.containerGroups[p] : void 0;
      if (p < 0)
        h ? m = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : m = o.tabbableGroups[0].firstTabbableNode;
      else if (h) {
        var N = o.tabbableGroups.findIndex(function(se) {
          var ue = se.firstTabbableNode;
          return i === ue;
        });
        if (N < 0 && (T.container === i || fe(i, u.tabbableOptions) && !q(i, u.tabbableOptions) && !T.nextTabbableNode(i, !1)) && (N = p), N >= 0) {
          var P = N === 0 ? o.tabbableGroups.length - 1 : N - 1, U = o.tabbableGroups[P];
          m = x(i) >= 0 ? U.lastTabbableNode : U.lastDomTabbableNode;
        } else
          Y(c) || (m = T.nextTabbableNode(i, !1));
      } else {
        var E = o.tabbableGroups.findIndex(function(se) {
          var ue = se.lastTabbableNode;
          return i === ue;
        });
        if (E < 0 && (T.container === i || fe(i, u.tabbableOptions) && !q(i, u.tabbableOptions) && !T.nextTabbableNode(i)) && (E = p), E >= 0) {
          var W = E === o.tabbableGroups.length - 1 ? 0 : E + 1, he = o.tabbableGroups[W];
          m = x(i) >= 0 ? he.firstTabbableNode : he.firstDomTabbableNode;
        } else
          Y(c) || (m = T.nextTabbableNode(i));
      }
    } else
      m = g("fallbackFocus");
    return m;
  }, K = function(a) {
    var i = ae(a);
    if (!(d(i, a) >= 0)) {
      if (H(u.clickOutsideDeactivates, a)) {
        f.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: u.returnFocusOnDeactivate
        });
        return;
      }
      H(u.allowOutsideClick, a) || a.preventDefault();
    }
  }, Q = function(a) {
    var i = ae(a), c = d(i, a) >= 0;
    if (c || i instanceof Document)
      c && (o.mostRecentlyFocusedNode = i);
    else {
      a.stopImmediatePropagation();
      var b, h = !0;
      if (o.mostRecentlyFocusedNode)
        if (x(o.mostRecentlyFocusedNode) > 0) {
          var m = d(o.mostRecentlyFocusedNode), p = o.containerGroups[m].tabbableNodes;
          if (p.length > 0) {
            var T = p.findIndex(function(N) {
              return N === o.mostRecentlyFocusedNode;
            });
            T >= 0 && (u.isKeyForward(o.recentNavEvent) ? T + 1 < p.length && (b = p[T + 1], h = !1) : T - 1 >= 0 && (b = p[T - 1], h = !1));
          }
        } else
          o.containerGroups.some(function(N) {
            return N.tabbableNodes.some(function(P) {
              return x(P) > 0;
            });
          }) || (h = !1);
      else
        h = !1;
      h && (b = L({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: u.isKeyBackward(o.recentNavEvent)
      })), k(b || o.mostRecentlyFocusedNode || w());
    }
    o.recentNavEvent = void 0;
  }, M = function(a) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = a;
    var c = L({
      event: a,
      isBackward: i
    });
    c && (Y(a) && a.preventDefault(), k(c));
  }, S = function(a) {
    (u.isKeyForward(a) || u.isKeyBackward(a)) && M(a, u.isKeyBackward(a));
  }, V = function(a) {
    yt(a) && H(u.escapeDeactivates, a) !== !1 && (a.preventDefault(), f.deactivate());
  }, X = function(a) {
    var i = ae(a);
    d(i, a) >= 0 || H(u.clickOutsideDeactivates, a) || H(u.allowOutsideClick, a) || (a.preventDefault(), a.stopImmediatePropagation());
  }, J = function() {
    if (o.active)
      return Ne.activateTrap(s, f), o.delayInitialFocusTimer = u.delayInitialFocus ? ke(function() {
        k(w());
      }) : k(w()), r.addEventListener("focusin", Q, !0), r.addEventListener("mousedown", K, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", K, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", X, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", S, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", V), f;
  }, ee = function() {
    if (o.active)
      return r.removeEventListener("focusin", Q, !0), r.removeEventListener("mousedown", K, !0), r.removeEventListener("touchstart", K, !0), r.removeEventListener("click", X, !0), r.removeEventListener("keydown", S, !0), r.removeEventListener("keydown", V), f;
  }, te = function(a) {
    var i = a.some(function(c) {
      var b = Array.from(c.removedNodes);
      return b.some(function(h) {
        return h === o.mostRecentlyFocusedNode;
      });
    });
    i && k(w());
  }, G = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(te) : void 0, I = function() {
    G && (G.disconnect(), o.active && !o.paused && o.containers.map(function(a) {
      G.observe(a, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return f = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function(a) {
      if (o.active)
        return this;
      var i = v(a, "onActivate"), c = v(a, "onPostActivate"), b = v(a, "checkCanFocusTrap");
      b || y(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = F(r), i == null || i();
      var h = function() {
        b && y(), J(), I(), c == null || c();
      };
      return b ? (b(o.containers.concat()).then(h, h), this) : (h(), this);
    },
    deactivate: function(a) {
      if (!o.active)
        return this;
      var i = Te({
        onDeactivate: u.onDeactivate,
        onPostDeactivate: u.onPostDeactivate,
        checkCanReturnFocus: u.checkCanReturnFocus
      }, a);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, ee(), o.active = !1, o.paused = !1, I(), Ne.deactivateTrap(s, f);
      var c = v(i, "onDeactivate"), b = v(i, "onPostDeactivate"), h = v(i, "checkCanReturnFocus"), m = v(i, "returnFocus", "returnFocusOnDeactivate");
      c == null || c();
      var p = function() {
        ke(function() {
          m && k(Z(o.nodeFocusedBeforeActivation)), b == null || b();
        });
      };
      return m && h ? (h(Z(o.nodeFocusedBeforeActivation)).then(p, p), this) : (p(), this);
    },
    pause: function(a) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, a)) : this;
    },
    unpause: function(a) {
      return o.active ? (o.manuallyPaused = !1, s[s.length - 1] !== this ? this : this._setPausedState(!1, a)) : this;
    },
    updateContainerElements: function(a) {
      var i = [].concat(a).filter(Boolean);
      return o.containers = i.map(function(c) {
        return typeof c == "string" ? r.querySelector(c) : c;
      }), o.active && y(), I(), this;
    }
  }, Object.defineProperties(f, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(a, i) {
        if (o.paused === a)
          return this;
        if (o.paused = a, a) {
          var c = v(i, "onPause"), b = v(i, "onPostPause");
          c == null || c(), ee(), I(), b == null || b();
        } else {
          var h = v(i, "onUnpause"), m = v(i, "onPostUnpause");
          h == null || h(), y(), J(), I(), m == null || m();
        }
        return this;
      }
    }
  }), f.updateContainerElements(e), f;
};
function Nt(n, e = {}) {
  let t;
  const { immediate: r, ...s } = e, u = $(!1), o = $(!1), f = (y) => t && t.activate(y), v = (y) => t && t.deactivate(y), d = () => {
    t && (t.pause(), o.value = !0);
  }, g = () => {
    t && (t.unpause(), o.value = !1);
  }, w = z(() => {
    const y = ve(n);
    return (Array.isArray(y) ? y : [y]).map((F) => {
      const k = ve(F);
      return typeof k == "string" ? k : Ge(k);
    }).filter(Ve);
  });
  return Fe(
    w,
    (y) => {
      y.length && (t = Tt(y, {
        ...s,
        onActivate() {
          u.value = !0, e.onActivate && e.onActivate();
        },
        onDeactivate() {
          u.value = !1, e.onDeactivate && e.onDeactivate();
        }
      }), r && f());
    },
    { flush: "post" }
  ), Me(() => v()), {
    hasFocus: u,
    isPaused: o,
    activate: f,
    deactivate: v,
    pause: d,
    unpause: g
  };
}
const kt = ["aria-expanded", "tabindex"], Ft = { class: "queso-dropdown__selector__text" }, St = {
  key: 0,
  class: "queso-dropdown__selector__text__placeholder"
}, Dt = {
  key: 1,
  class: "queso-dropdown__selector__text__active-label"
}, Et = { class: "queso-dropdown__selector__icon" }, Ot = {
  key: 0,
  class: "queso-dropdown__popover__header"
}, _t = ["tabindex", "onClick", "onKeydown"], At = {
  key: 1,
  class: "queso-dropdown__popover__footer"
}, Rt = /* @__PURE__ */ Re({
  __name: "QuesoDropdown",
  props: /* @__PURE__ */ ye({
    options: {},
    multiple: { type: Boolean },
    stayOpenOnSelection: { type: Boolean },
    isDisabled: { type: Boolean }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ye(["dropdown:open", "dropdown:close"], ["update:modelValue"]),
  setup(n, { expose: e, emit: t }) {
    const r = n, s = t, u = Ce(n, "modelValue"), o = $(null), f = $([]), v = $(null), d = $(!1), { options: g } = xe(r), w = "queso-collapsible__" + Math.random().toString(36).substring(2, 9), y = z(() => g.value.filter((l) => u.value.includes(l.value))), F = z(() => ({
      "is-multiple": r.multiple,
      "is-dropdown-open": d.value,
      "is-dropdown-close": !d.value,
      "is-disabled": r.isDisabled
    })), { activate: k, deactivate: Z } = Nt(o), L = (l) => {
      r.multiple ? u.value.includes(l) ? u.value = u.value.filter((a) => a !== l) : u.value = [...u.value, l] : u.value = [l], r.multiple || r.stayOpenOnSelection || S();
    }, K = (l, a) => {
      a.preventDefault();
      const i = f.value.findIndex((p) => p === a.target), c = (i + 1) % f.value.length, b = (i - 1 + f.value.length) % f.value.length, h = f.value[c], m = f.value[b];
      a.key === "ArrowDown" || a.key === "ArrowRight" ? h.focus() : a.key === "ArrowUp" || a.key === "ArrowLeft" ? m.focus() : (a.key === "Enter" || a.key === " " || a.key === "Space") && L(l);
    }, Q = () => {
      setTimeout(() => {
        ee.value = 0;
      }, 210);
    }, M = () => {
      d.value = !0;
      const l = f.value[0];
      k(), l && l.focus(), s("dropdown:open");
    }, S = () => {
      d.value = !1, Z(), Q(), s("dropdown:close");
    }, V = () => {
      d.value ? S() : M();
    }, X = () => {
      r.isDisabled || V();
    }, J = (l) => {
      r.isDisabled || (l.key === " " || l.key === "Space") && (l.preventDefault(), V());
    };
    je("Escape", () => {
      d.value && S();
    }), qe(o, () => S()), Fe(
      () => r.isDisabled,
      (l) => {
        l && d.value && S();
      }
    );
    const { y: ee, arrivedState: te } = $e(v, {
      offset: { top: 15, bottom: 15 }
    }), G = z(() => {
      var l, a;
      return v.value ? ((l = v.value) == null ? void 0 : l.scrollHeight) > ((a = v.value) == null ? void 0 : a.clientHeight) : !1;
    }), I = z(() => ({
      "is-scrolled-top": te.top,
      "is-scrolled-bottom": te.bottom || !G.value
    }));
    return e({ isDropdownOpen: d, openDropdown: M, closeDropdown: S }), (l, a) => A(g).length > 0 ? (R(), C("div", {
      key: 0,
      ref_key: "dropdown",
      ref: o,
      class: le(["queso-dropdown", F.value])
    }, [
      j("div", {
        class: "queso-dropdown__selector",
        "aria-expanded": d.value,
        "aria-controls": w,
        tabindex: r.isDisabled ? -1 : 0,
        onClick: a[0] || (a[0] = (i) => X()),
        onKeydown: a[1] || (a[1] = (i) => J(i))
      }, [
        D(l.$slots, "selector", O(_({ isDropdownOpen: d.value, options: A(g), activeOptions: y.value })), () => [
          D(l.$slots, "selectorBeforeText", O(_({ isDropdownOpen: d.value, options: A(g), activeOptions: y.value }))),
          j("div", Ft, [
            y.value.length < 1 ? (R(), C("div", St, [
              D(l.$slots, "selectorPlaceholder", O(_({ isDropdownOpen: d.value })))
            ])) : (R(), C("div", Dt, [
              D(l.$slots, "selectorActiveOptions", O(_({ isDropdownOpen: d.value, activeOptions: y.value })), () => [
                ce(me(y.value), 1)
              ])
            ]))
          ]),
          D(l.$slots, "selectorAfterText", O(_({ isDropdownOpen: d.value, options: A(g), activeOptions: y.value }))),
          j("div", Et, [
            D(l.$slots, "selectorIcon", O(_({ isDropdownOpen: d.value })), () => [
              ce("↓")
            ])
          ])
        ])
      ], 40, kt),
      j("div", {
        class: "queso-dropdown__popover",
        id: w
      }, [
        l.$slots.popoverHeader ? (R(), C("div", Ot, [
          D(l.$slots, "popoverHeader", O(_({ options: A(g), activeOptions: y.value })))
        ])) : de("", !0),
        j("div", {
          class: le(["queso-dropdown__popover__scroll", I.value])
        }, [
          j("ul", {
            ref_key: "dropdownPopover",
            ref: v,
            class: "queso-dropdown__popover__options-list"
          }, [
            (R(!0), C(Be, null, Le(A(g), (i, c) => (R(), C("li", {
              key: i.value,
              ref_for: !0,
              ref_key: "optionsRefs",
              ref: f,
              class: le(["queso-dropdown__popover__options-list__item", {
                "is-option-active": u.value.includes(i.value),
                "is-option-selected": u.value.includes(i.value)
              }]),
              tabindex: d.value ? "0" : "-1",
              onClick: (b) => L(i.value),
              onKeydown: (b) => K(i.value, b)
            }, [
              D(l.$slots, "popoverItem", Ke({ ref_for: !0 }, {
                index: c,
                ...i,
                isSelected: u.value.includes(i.value),
                openDropdown: M,
                closeDropdown: S
              }), () => [
                ce(me(i), 1)
              ])
            ], 42, _t))), 128))
          ], 512)
        ], 2),
        l.$slots.popoverFooter ? (R(), C("div", At, [
          D(l.$slots, "popoverFooter", O(_({ options: A(g), activeOptions: y.value })))
        ])) : de("", !0)
      ]),
      D(l.$slots, "afterDropdown")
    ], 2)) : de("", !0);
  }
});
export {
  Rt as _,
  Nt as u
};
