import { getCurrentScope as Pe, onScopeDispose as Re, unref as J, ref as L, computed as U, watch as Ce, defineComponent as Ie, mergeModels as ve, useModel as Ae, toRefs as _e, openBlock as R, createElementBlock as C, normalizeClass as ie, createElementVNode as B, renderSlot as E, normalizeProps as be, guardReactiveProps as pe, createTextVNode as se, toDisplayString as he, createCommentVNode as ue, Fragment as xe, renderList as Be, mergeProps as Ke } from "vue";
import { o as Le, a as qe, u as $e } from "./QuesoCollapsible-BAoVzf7E.js";
import '../assets/components/QuesoDropdown.css';function je(i) {
  return Pe() ? (Re(i), !0) : !1;
}
function ce(i) {
  return typeof i == "function" ? i() : J(i);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Me = (i) => i != null;
function Ve(i) {
  var e;
  const t = ce(i);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Fe = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], ee = /* @__PURE__ */ Fe.join(","), Se = typeof Element > "u", A = Se ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, te = !Se && Element.prototype.getRootNode ? function(i) {
  var e;
  return i == null || (e = i.getRootNode) === null || e === void 0 ? void 0 : e.call(i);
} : function(i) {
  return i == null ? void 0 : i.ownerDocument;
}, re = function i(e, t) {
  var a;
  t === void 0 && (t = !0);
  var s = e == null || (a = e.getAttribute) === null || a === void 0 ? void 0 : a.call(e, "inert"), u = s === "" || s === "true", o = u || t && e && i(e.parentNode);
  return o;
}, Ge = function(e) {
  var t, a = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
  return a === "" || a === "true";
}, Ee = function(e, t, a) {
  if (re(e))
    return [];
  var s = Array.prototype.slice.apply(e.querySelectorAll(ee));
  return t && A.call(e, ee) && s.unshift(e), s = s.filter(a), s;
}, ke = function i(e, t, a) {
  for (var s = [], u = Array.from(e); u.length; ) {
    var o = u.shift();
    if (!re(o, !1))
      if (o.tagName === "SLOT") {
        var d = o.assignedElements(), f = d.length ? d : o.children, b = i(f, !0, a);
        a.flatten ? s.push.apply(s, b) : s.push({
          scopeParent: o,
          candidates: b
        });
      } else {
        var w = A.call(o, ee);
        w && a.filter(o) && (t || !e.includes(o)) && s.push(o);
        var y = o.shadowRoot || // check for an undisclosed shadow
        typeof a.getShadowRoot == "function" && a.getShadowRoot(o), g = !re(y, !1) && (!a.shadowRootFilter || a.shadowRootFilter(o));
        if (y && g) {
          var k = i(y === !0 ? o.children : y.children, !0, a);
          a.flatten ? s.push.apply(s, k) : s.push({
            scopeParent: o,
            candidates: k
          });
        } else
          u.unshift.apply(u, o.children);
      }
  }
  return s;
}, De = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, I = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Ge(e)) && !De(e) ? 0 : e.tabIndex;
}, Ue = function(e, t) {
  var a = I(e);
  return a < 0 && t && !De(e) ? 0 : a;
}, We = function(e, t) {
  return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, Oe = function(e) {
  return e.tagName === "INPUT";
}, ze = function(e) {
  return Oe(e) && e.type === "hidden";
}, He = function(e) {
  var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(a) {
    return a.tagName === "SUMMARY";
  });
  return t;
}, Ye = function(e, t) {
  for (var a = 0; a < e.length; a++)
    if (e[a].checked && e[a].form === t)
      return e[a];
}, Ze = function(e) {
  if (!e.name)
    return !0;
  var t = e.form || te(e), a = function(d) {
    return t.querySelectorAll('input[type="radio"][name="' + d + '"]');
  }, s;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    s = a(window.CSS.escape(e.name));
  else
    try {
      s = a(e.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var u = Ye(s, e.form);
  return !u || u === e;
}, Qe = function(e) {
  return Oe(e) && e.type === "radio";
}, Xe = function(e) {
  return Qe(e) && !Ze(e);
}, Je = function(e) {
  var t, a = e && te(e), s = (t = a) === null || t === void 0 ? void 0 : t.host, u = !1;
  if (a && a !== e) {
    var o, d, f;
    for (u = !!((o = s) !== null && o !== void 0 && (d = o.ownerDocument) !== null && d !== void 0 && d.contains(s) || e != null && (f = e.ownerDocument) !== null && f !== void 0 && f.contains(e)); !u && s; ) {
      var b, w, y;
      a = te(s), s = (b = a) === null || b === void 0 ? void 0 : b.host, u = !!((w = s) !== null && w !== void 0 && (y = w.ownerDocument) !== null && y !== void 0 && y.contains(s));
    }
  }
  return u;
}, ge = function(e) {
  var t = e.getBoundingClientRect(), a = t.width, s = t.height;
  return a === 0 && s === 0;
}, et = function(e, t) {
  var a = t.displayCheck, s = t.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var u = A.call(e, "details>summary:first-of-type"), o = u ? e.parentElement : e;
  if (A.call(o, "details:not([open]) *"))
    return !0;
  if (!a || a === "full" || a === "legacy-full") {
    if (typeof s == "function") {
      for (var d = e; e; ) {
        var f = e.parentElement, b = te(e);
        if (f && !f.shadowRoot && s(f) === !0)
          return ge(e);
        e.assignedSlot ? e = e.assignedSlot : !f && b !== e.ownerDocument ? e = b.host : e = f;
      }
      e = d;
    }
    if (Je(e))
      return !e.getClientRects().length;
    if (a !== "legacy-full")
      return !0;
  } else if (a === "non-zero-area")
    return ge(e);
  return !1;
}, tt = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var t = e.parentElement; t; ) {
      if (t.tagName === "FIELDSET" && t.disabled) {
        for (var a = 0; a < t.children.length; a++) {
          var s = t.children.item(a);
          if (s.tagName === "LEGEND")
            return A.call(t, "fieldset[disabled] *") ? !0 : !s.contains(e);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, ae = function(e, t) {
  return !(t.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  re(t) || ze(t) || et(t, e) || // For a details element with a summary, the summary element gets the focus
  He(t) || tt(t));
}, de = function(e, t) {
  return !(Xe(t) || I(t) < 0 || !ae(e, t));
}, rt = function(e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, at = function i(e) {
  var t = [], a = [];
  return e.forEach(function(s, u) {
    var o = !!s.scopeParent, d = o ? s.scopeParent : s, f = Ue(d, o), b = o ? i(s.candidates) : d;
    f === 0 ? o ? t.push.apply(t, b) : t.push(d) : a.push({
      documentOrder: u,
      tabIndex: f,
      item: s,
      isScope: o,
      content: b
    });
  }), a.sort(We).reduce(function(s, u) {
    return u.isScope ? s.push.apply(s, u.content) : s.push(u.content), s;
  }, []).concat(t);
}, nt = function(e, t) {
  t = t || {};
  var a;
  return t.getShadowRoot ? a = ke([e], t.includeContainer, {
    filter: de.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: rt
  }) : a = Ee(e, t.includeContainer, de.bind(null, t)), at(a);
}, ot = function(e, t) {
  t = t || {};
  var a;
  return t.getShadowRoot ? a = ke([e], t.includeContainer, {
    filter: ae.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : a = Ee(e, t.includeContainer, ae.bind(null, t)), a;
}, K = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return A.call(e, ee) === !1 ? !1 : de(t, e);
}, it = /* @__PURE__ */ Fe.concat("iframe").join(","), le = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return A.call(e, it) === !1 ? !1 : ae(t, e);
};
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function me(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(i);
    e && (a = a.filter(function(s) {
      return Object.getOwnPropertyDescriptor(i, s).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function ye(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? me(Object(t), !0).forEach(function(a) {
      st(i, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : me(Object(t)).forEach(function(a) {
      Object.defineProperty(i, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return i;
}
function st(i, e, t) {
  return e = lt(e), e in i ? Object.defineProperty(i, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[e] = t, i;
}
function ut(i, e) {
  if (typeof i != "object" || i === null)
    return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(i, e || "default");
    if (typeof a != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
function lt(i) {
  var e = ut(i, "string");
  return typeof e == "symbol" ? e : String(e);
}
var we = {
  activateTrap: function(e, t) {
    if (e.length > 0) {
      var a = e[e.length - 1];
      a !== t && a.pause();
    }
    var s = e.indexOf(t);
    s === -1 || e.splice(s, 1), e.push(t);
  },
  deactivateTrap: function(e, t) {
    var a = e.indexOf(t);
    a !== -1 && e.splice(a, 1), e.length > 0 && e[e.length - 1].unpause();
  }
}, ct = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, dt = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, W = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, ft = function(e) {
  return W(e) && !e.shiftKey;
}, vt = function(e) {
  return W(e) && e.shiftKey;
}, Ne = function(e) {
  return setTimeout(e, 0);
}, Te = function(e, t) {
  var a = -1;
  return e.every(function(s, u) {
    return t(s) ? (a = u, !1) : !0;
  }), a;
}, G = function(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
    a[s - 1] = arguments[s];
  return typeof e == "function" ? e.apply(void 0, a) : e;
}, X = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, bt = [], pt = function(e, t) {
  var a = (t == null ? void 0 : t.document) || document, s = (t == null ? void 0 : t.trapStack) || bt, u = ye({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: ft,
    isKeyBackward: vt
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
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, d, f = function(r, n, c) {
    return r && r[n] !== void 0 ? r[n] : u[c || n];
  }, b = function(r, n) {
    var c = typeof (n == null ? void 0 : n.composedPath) == "function" ? n.composedPath() : void 0;
    return o.containerGroups.findIndex(function(v) {
      var p = v.container, h = v.tabbableNodes;
      return p.contains(r) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (c == null ? void 0 : c.includes(p)) || h.find(function(m) {
        return m === r;
      });
    });
  }, w = function(r) {
    var n = u[r];
    if (typeof n == "function") {
      for (var c = arguments.length, v = new Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++)
        v[p - 1] = arguments[p];
      n = n.apply(void 0, v);
    }
    if (n === !0 && (n = void 0), !n) {
      if (n === void 0 || n === !1)
        return n;
      throw new Error("`".concat(r, "` was specified but was not a node, or did not return a node"));
    }
    var h = n;
    if (typeof n == "string" && (h = a.querySelector(n), !h))
      throw new Error("`".concat(r, "` as selector refers to no known node"));
    return h;
  }, y = function() {
    var r = w("initialFocus");
    if (r === !1)
      return !1;
    if (r === void 0 || !le(r, u.tabbableOptions))
      if (b(a.activeElement) >= 0)
        r = a.activeElement;
      else {
        var n = o.tabbableGroups[0], c = n && n.firstTabbableNode;
        r = c || w("fallbackFocus");
      }
    if (!r)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return r;
  }, g = function() {
    if (o.containerGroups = o.containers.map(function(r) {
      var n = nt(r, u.tabbableOptions), c = ot(r, u.tabbableOptions), v = n.length > 0 ? n[0] : void 0, p = n.length > 0 ? n[n.length - 1] : void 0, h = c.find(function(N) {
        return K(N);
      }), m = c.slice().reverse().find(function(N) {
        return K(N);
      }), T = !!n.find(function(N) {
        return I(N) > 0;
      });
      return {
        container: r,
        tabbableNodes: n,
        focusableNodes: c,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: T,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: v,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: p,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: h,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: m,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(P) {
          var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, D = n.indexOf(P);
          return D < 0 ? M ? c.slice(c.indexOf(P) + 1).find(function(V) {
            return K(V);
          }) : c.slice(0, c.indexOf(P)).reverse().find(function(V) {
            return K(V);
          }) : n[D + (M ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(r) {
      return r.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !w("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(r) {
      return r.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, k = function l(r) {
    var n = r.activeElement;
    if (n)
      return n.shadowRoot && n.shadowRoot.activeElement !== null ? l(n.shadowRoot) : n;
  }, F = function l(r) {
    if (r !== !1 && r !== k(document)) {
      if (!r || !r.focus) {
        l(y());
        return;
      }
      r.focus({
        preventScroll: !!u.preventScroll
      }), o.mostRecentlyFocusedNode = r, ct(r) && r.select();
    }
  }, z = function(r) {
    var n = w("setReturnFocus", r);
    return n || (n === !1 ? !1 : r);
  }, _ = function(r) {
    var n = r.target, c = r.event, v = r.isBackward, p = v === void 0 ? !1 : v;
    n = n || X(c), g();
    var h = null;
    if (o.tabbableGroups.length > 0) {
      var m = b(n, c), T = m >= 0 ? o.containerGroups[m] : void 0;
      if (m < 0)
        p ? h = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : h = o.tabbableGroups[0].firstTabbableNode;
      else if (p) {
        var N = Te(o.tabbableGroups, function(ne) {
          var oe = ne.firstTabbableNode;
          return n === oe;
        });
        if (N < 0 && (T.container === n || le(n, u.tabbableOptions) && !K(n, u.tabbableOptions) && !T.nextTabbableNode(n, !1)) && (N = m), N >= 0) {
          var P = N === 0 ? o.tabbableGroups.length - 1 : N - 1, M = o.tabbableGroups[P];
          h = I(n) >= 0 ? M.lastTabbableNode : M.lastDomTabbableNode;
        } else
          W(c) || (h = T.nextTabbableNode(n, !1));
      } else {
        var D = Te(o.tabbableGroups, function(ne) {
          var oe = ne.lastTabbableNode;
          return n === oe;
        });
        if (D < 0 && (T.container === n || le(n, u.tabbableOptions) && !K(n, u.tabbableOptions) && !T.nextTabbableNode(n)) && (D = m), D >= 0) {
          var V = D === o.tabbableGroups.length - 1 ? 0 : D + 1, fe = o.tabbableGroups[V];
          h = I(n) >= 0 ? fe.firstTabbableNode : fe.firstDomTabbableNode;
        } else
          W(c) || (h = T.nextTabbableNode(n));
      }
    } else
      h = w("fallbackFocus");
    return h;
  }, x = function(r) {
    var n = X(r);
    if (!(b(n, r) >= 0)) {
      if (G(u.clickOutsideDeactivates, r)) {
        d.deactivate({
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
      G(u.allowOutsideClick, r) || r.preventDefault();
    }
  }, H = function(r) {
    var n = X(r), c = b(n, r) >= 0;
    if (c || n instanceof Document)
      c && (o.mostRecentlyFocusedNode = n);
    else {
      r.stopImmediatePropagation();
      var v, p = !0;
      if (o.mostRecentlyFocusedNode)
        if (I(o.mostRecentlyFocusedNode) > 0) {
          var h = b(o.mostRecentlyFocusedNode), m = o.containerGroups[h].tabbableNodes;
          if (m.length > 0) {
            var T = m.findIndex(function(N) {
              return N === o.mostRecentlyFocusedNode;
            });
            T >= 0 && (u.isKeyForward(o.recentNavEvent) ? T + 1 < m.length && (v = m[T + 1], p = !1) : T - 1 >= 0 && (v = m[T - 1], p = !1));
          }
        } else
          o.containerGroups.some(function(N) {
            return N.tabbableNodes.some(function(P) {
              return I(P) > 0;
            });
          }) || (p = !1);
      else
        p = !1;
      p && (v = _({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: u.isKeyBackward(o.recentNavEvent)
      })), F(v || o.mostRecentlyFocusedNode || y());
    }
    o.recentNavEvent = void 0;
  }, q = function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = r;
    var c = _({
      event: r,
      isBackward: n
    });
    c && (W(r) && r.preventDefault(), F(c));
  }, S = function(r) {
    if (dt(r) && G(u.escapeDeactivates, r) !== !1) {
      r.preventDefault(), d.deactivate();
      return;
    }
    (u.isKeyForward(r) || u.isKeyBackward(r)) && q(r, u.isKeyBackward(r));
  }, $ = function(r) {
    var n = X(r);
    b(n, r) >= 0 || G(u.clickOutsideDeactivates, r) || G(u.allowOutsideClick, r) || (r.preventDefault(), r.stopImmediatePropagation());
  }, Y = function() {
    if (o.active)
      return we.activateTrap(s, d), o.delayInitialFocusTimer = u.delayInitialFocus ? Ne(function() {
        F(y());
      }) : F(y()), a.addEventListener("focusin", H, !0), a.addEventListener("mousedown", x, {
        capture: !0,
        passive: !1
      }), a.addEventListener("touchstart", x, {
        capture: !0,
        passive: !1
      }), a.addEventListener("click", $, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", S, {
        capture: !0,
        passive: !1
      }), d;
  }, Z = function() {
    if (o.active)
      return a.removeEventListener("focusin", H, !0), a.removeEventListener("mousedown", x, !0), a.removeEventListener("touchstart", x, !0), a.removeEventListener("click", $, !0), a.removeEventListener("keydown", S, !0), d;
  }, Q = function(r) {
    var n = r.some(function(c) {
      var v = Array.from(c.removedNodes);
      return v.some(function(p) {
        return p === o.mostRecentlyFocusedNode;
      });
    });
    n && F(y());
  }, j = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Q) : void 0, O = function() {
    j && (j.disconnect(), o.active && !o.paused && o.containers.map(function(r) {
      j.observe(r, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return d = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function(r) {
      if (o.active)
        return this;
      var n = f(r, "onActivate"), c = f(r, "onPostActivate"), v = f(r, "checkCanFocusTrap");
      v || g(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = a.activeElement, n == null || n();
      var p = function() {
        v && g(), Y(), O(), c == null || c();
      };
      return v ? (v(o.containers.concat()).then(p, p), this) : (p(), this);
    },
    deactivate: function(r) {
      if (!o.active)
        return this;
      var n = ye({
        onDeactivate: u.onDeactivate,
        onPostDeactivate: u.onPostDeactivate,
        checkCanReturnFocus: u.checkCanReturnFocus
      }, r);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, Z(), o.active = !1, o.paused = !1, O(), we.deactivateTrap(s, d);
      var c = f(n, "onDeactivate"), v = f(n, "onPostDeactivate"), p = f(n, "checkCanReturnFocus"), h = f(n, "returnFocus", "returnFocusOnDeactivate");
      c == null || c();
      var m = function() {
        Ne(function() {
          h && F(z(o.nodeFocusedBeforeActivation)), v == null || v();
        });
      };
      return h && p ? (p(z(o.nodeFocusedBeforeActivation)).then(m, m), this) : (m(), this);
    },
    pause: function(r) {
      if (o.paused || !o.active)
        return this;
      var n = f(r, "onPause"), c = f(r, "onPostPause");
      return o.paused = !0, n == null || n(), Z(), O(), c == null || c(), this;
    },
    unpause: function(r) {
      if (!o.paused || !o.active)
        return this;
      var n = f(r, "onUnpause"), c = f(r, "onPostUnpause");
      return o.paused = !1, n == null || n(), g(), Y(), O(), c == null || c(), this;
    },
    updateContainerElements: function(r) {
      var n = [].concat(r).filter(Boolean);
      return o.containers = n.map(function(c) {
        return typeof c == "string" ? a.querySelector(c) : c;
      }), o.active && g(), O(), this;
    }
  }, d.updateContainerElements(e), d;
};
function ht(i, e = {}) {
  let t;
  const { immediate: a, ...s } = e, u = L(!1), o = L(!1), d = (g) => t && t.activate(g), f = (g) => t && t.deactivate(g), b = () => {
    t && (t.pause(), o.value = !0);
  }, w = () => {
    t && (t.unpause(), o.value = !1);
  }, y = U(() => {
    const g = ce(i);
    return (Array.isArray(g) ? g : [g]).map((k) => {
      const F = ce(k);
      return typeof F == "string" ? F : Ve(F);
    }).filter(Me);
  });
  return Ce(
    y,
    (g) => {
      g.length && (t = pt(g, {
        ...s,
        onActivate() {
          u.value = !0, e.onActivate && e.onActivate();
        },
        onDeactivate() {
          u.value = !1, e.onDeactivate && e.onDeactivate();
        }
      }), a && d());
    },
    { flush: "post" }
  ), je(() => f()), {
    hasFocus: u,
    isPaused: o,
    activate: d,
    deactivate: f,
    pause: b,
    unpause: w
  };
}
const gt = ["aria-expanded"], mt = { class: "queso-dropdown__selector__text" }, yt = {
  key: 0,
  class: "queso-dropdown__selector__text__placeholder"
}, wt = {
  key: 1,
  class: "queso-dropdown__selector__text__active-label"
}, Nt = { class: "queso-dropdown__selector__icon" }, Tt = {
  key: 0,
  class: "queso-dropdown__popover__header"
}, Ft = ["tabindex", "onClick", "onKeydown"], St = {
  key: 1,
  class: "queso-dropdown__popover__footer"
}, Dt = /* @__PURE__ */ Ie({
  __name: "QuesoDropdown",
  props: /* @__PURE__ */ ve({
    options: {},
    multiple: { type: Boolean },
    stayOpenOnSelection: { type: Boolean }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ ve(["open:dropdown", "close:dropdown"], ["update:modelValue"]),
  setup(i, { expose: e, emit: t }) {
    const a = i, s = t, u = Ae(i, "modelValue"), o = L(null), d = L([]), f = L(null), b = L(!1), { options: w } = _e(a), y = "queso-collapsible__" + Math.random().toString(36).substring(2, 9), g = U(() => w.value.filter((l) => u.value.includes(l.value))), k = U(() => ({
      "is-multiple": a.multiple,
      "is-dropdown-open": b.value,
      "is-dropdown-close": !b.value
    })), { activate: F, deactivate: z } = ht(o), _ = (l) => {
      a.multiple ? u.value.includes(l) ? u.value = u.value.filter((r) => r !== l) : u.value = [...u.value, l] : u.value = [l], a.multiple || a.stayOpenOnSelection || S();
    }, x = (l, r) => {
      r.preventDefault();
      const n = d.value.findIndex((m) => m === r.target), c = (n + 1) % d.value.length, v = (n - 1 + d.value.length) % d.value.length, p = d.value[c], h = d.value[v];
      r.key === "ArrowDown" || r.key === "ArrowRight" ? p.focus() : r.key === "ArrowUp" || r.key === "ArrowLeft" ? h.focus() : (r.key === "Enter" || r.key === " " || r.key === "Space") && _(l);
    }, H = () => {
      setTimeout(() => {
        Z.value = 0;
      }, 210);
    }, q = () => {
      b.value = !0;
      const l = d.value[0];
      F(), l && l.focus(), s("open:dropdown");
    }, S = () => {
      b.value = !1, z(), H(), s("close:dropdown");
    }, $ = () => {
      b.value ? S() : q();
    }, Y = (l) => {
      (l.key === " " || l.key === "Space") && (l.preventDefault(), $());
    };
    Le("Escape", () => {
      b.value && S();
    }), qe(o, () => S());
    const { y: Z, arrivedState: Q } = $e(f, {
      offset: { top: 15, bottom: 15 }
    }), j = U(() => {
      var l, r;
      return f.value ? ((l = f.value) == null ? void 0 : l.scrollHeight) > ((r = f.value) == null ? void 0 : r.clientHeight) : !1;
    }), O = U(() => ({
      "is-scrolled-top": Q.top,
      "is-scrolled-bottom": Q.bottom || !j.value
    }));
    return e({ isDropdownOpen: b, openDropdown: q, closeDropdown: S }), (l, r) => J(w).length > 0 ? (R(), C("div", {
      key: 0,
      ref_key: "dropdown",
      ref: o,
      class: ie(["queso-dropdown", k.value])
    }, [
      B("div", {
        class: "queso-dropdown__selector",
        "aria-expanded": b.value,
        "aria-controls": y,
        tabindex: "0",
        onClick: r[0] || (r[0] = (n) => $()),
        onKeydown: r[1] || (r[1] = (n) => Y(n))
      }, [
        E(l.$slots, "selector", be(pe({ options: J(w), activeOptions: g.value })), () => [
          E(l.$slots, "selectorBeforeText"),
          B("div", mt, [
            g.value.length < 1 ? (R(), C("div", yt, [
              E(l.$slots, "selectorPlaceholder")
            ])) : (R(), C("div", wt, [
              E(l.$slots, "selectorActiveOptions", be(pe({ activeOptions: g.value })), () => [
                se(he(g.value), 1)
              ])
            ]))
          ]),
          E(l.$slots, "selectorAfterText"),
          B("div", Nt, [
            E(l.$slots, "selectorIcon", {}, () => [
              se("↓")
            ])
          ])
        ])
      ], 40, gt),
      B("div", {
        class: "queso-dropdown__popover",
        id: y
      }, [
        l.$slots.popoverHeader ? (R(), C("div", Tt, [
          E(l.$slots, "popoverHeader")
        ])) : ue("", !0),
        B("div", {
          class: ie(["queso-dropdown__popover__scroll", O.value])
        }, [
          B("ul", {
            ref_key: "dropdownPopover",
            ref: f,
            class: "queso-dropdown__popover__options-list"
          }, [
            (R(!0), C(xe, null, Be(J(w), (n, c) => (R(), C("li", {
              key: n.value,
              ref_for: !0,
              ref_key: "optionsRefs",
              ref: d,
              class: ie(["queso-dropdown__popover__options-list__item", { "is-option-active": u.value.includes(n.value) }]),
              tabindex: b.value ? "0" : "-1",
              onClick: (v) => _(n.value),
              onKeydown: (v) => x(n.value, v)
            }, [
              E(l.$slots, "item", Ke({ ref_for: !0 }, { ...n, openDropdown: q, closeDropdown: S }), () => [
                se(he(n), 1)
              ])
            ], 42, Ft))), 128))
          ], 512)
        ], 2),
        l.$slots.popoverFooter ? (R(), C("div", St, [
          E(l.$slots, "popoverFooter")
        ])) : ue("", !0)
      ])
    ], 2)) : ue("", !0);
  }
});
export {
  Dt as _,
  ht as u
};
