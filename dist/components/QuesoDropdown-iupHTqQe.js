import { getCurrentScope as Pe, onScopeDispose as Re, unref as R, ref as j, computed as H, watch as Ie, defineComponent as Ce, mergeModels as pe, useModel as Ae, toRefs as _e, openBlock as A, createElementBlock as _, normalizeClass as ue, createElementVNode as q, renderSlot as S, normalizeProps as O, guardReactiveProps as P, createTextVNode as le, toDisplayString as he, createCommentVNode as ce, Fragment as xe, renderList as Be, mergeProps as Ke } from "vue";
import { o as Le, a as qe, u as $e } from "./QuesoCollapsible-BAoVzf7E.js";
import '../assets/components/QuesoDropdown.css';function je(i) {
  return Pe() ? (Re(i), !0) : !1;
}
function fe(i) {
  return typeof i == "function" ? i() : R(i);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Me = (i) => i != null;
function Ve(i) {
  var e;
  const t = fe(i);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Fe = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], re = /* @__PURE__ */ Fe.join(","), Se = typeof Element > "u", B = Se ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ae = !Se && Element.prototype.getRootNode ? function(i) {
  var e;
  return i == null || (e = i.getRootNode) === null || e === void 0 ? void 0 : e.call(i);
} : function(i) {
  return i == null ? void 0 : i.ownerDocument;
}, ne = function i(e, t) {
  var a;
  t === void 0 && (t = !0);
  var s = e == null || (a = e.getAttribute) === null || a === void 0 ? void 0 : a.call(e, "inert"), u = s === "" || s === "true", o = u || t && e && i(e.parentNode);
  return o;
}, Ge = function(e) {
  var t, a = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
  return a === "" || a === "true";
}, Ee = function(e, t, a) {
  if (ne(e))
    return [];
  var s = Array.prototype.slice.apply(e.querySelectorAll(re));
  return t && B.call(e, re) && s.unshift(e), s = s.filter(a), s;
}, ke = function i(e, t, a) {
  for (var s = [], u = Array.from(e); u.length; ) {
    var o = u.shift();
    if (!ne(o, !1))
      if (o.tagName === "SLOT") {
        var f = o.assignedElements(), v = f.length ? f : o.children, d = i(v, !0, a);
        a.flatten ? s.push.apply(s, d) : s.push({
          scopeParent: o,
          candidates: d
        });
      } else {
        var m = B.call(o, re);
        m && a.filter(o) && (t || !e.includes(o)) && s.push(o);
        var w = o.shadowRoot || // check for an undisclosed shadow
        typeof a.getShadowRoot == "function" && a.getShadowRoot(o), h = !ne(w, !1) && (!a.shadowRootFilter || a.shadowRootFilter(o));
        if (w && h) {
          var k = i(w === !0 ? o.children : w.children, !0, a);
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
}, x = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Ge(e)) && !De(e) ? 0 : e.tabIndex;
}, Ue = function(e, t) {
  var a = x(e);
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
  var t = e.form || ae(e), a = function(f) {
    return t.querySelectorAll('input[type="radio"][name="' + f + '"]');
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
  var t, a = e && ae(e), s = (t = a) === null || t === void 0 ? void 0 : t.host, u = !1;
  if (a && a !== e) {
    var o, f, v;
    for (u = !!((o = s) !== null && o !== void 0 && (f = o.ownerDocument) !== null && f !== void 0 && f.contains(s) || e != null && (v = e.ownerDocument) !== null && v !== void 0 && v.contains(e)); !u && s; ) {
      var d, m, w;
      a = ae(s), s = (d = a) === null || d === void 0 ? void 0 : d.host, u = !!((m = s) !== null && m !== void 0 && (w = m.ownerDocument) !== null && w !== void 0 && w.contains(s));
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
  var u = B.call(e, "details>summary:first-of-type"), o = u ? e.parentElement : e;
  if (B.call(o, "details:not([open]) *"))
    return !0;
  if (!a || a === "full" || a === "legacy-full") {
    if (typeof s == "function") {
      for (var f = e; e; ) {
        var v = e.parentElement, d = ae(e);
        if (v && !v.shadowRoot && s(v) === !0)
          return ge(e);
        e.assignedSlot ? e = e.assignedSlot : !v && d !== e.ownerDocument ? e = d.host : e = v;
      }
      e = f;
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
            return B.call(t, "fieldset[disabled] *") ? !0 : !s.contains(e);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, oe = function(e, t) {
  return !(t.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  ne(t) || ze(t) || et(t, e) || // For a details element with a summary, the summary element gets the focus
  He(t) || tt(t));
}, ve = function(e, t) {
  return !(Xe(t) || x(t) < 0 || !oe(e, t));
}, rt = function(e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, at = function i(e) {
  var t = [], a = [];
  return e.forEach(function(s, u) {
    var o = !!s.scopeParent, f = o ? s.scopeParent : s, v = Ue(f, o), d = o ? i(s.candidates) : f;
    v === 0 ? o ? t.push.apply(t, d) : t.push(f) : a.push({
      documentOrder: u,
      tabIndex: v,
      item: s,
      isScope: o,
      content: d
    });
  }), a.sort(We).reduce(function(s, u) {
    return u.isScope ? s.push.apply(s, u.content) : s.push(u.content), s;
  }, []).concat(t);
}, nt = function(e, t) {
  t = t || {};
  var a;
  return t.getShadowRoot ? a = ke([e], t.includeContainer, {
    filter: ve.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: rt
  }) : a = Ee(e, t.includeContainer, ve.bind(null, t)), at(a);
}, ot = function(e, t) {
  t = t || {};
  var a;
  return t.getShadowRoot ? a = ke([e], t.includeContainer, {
    filter: oe.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : a = Ee(e, t.includeContainer, oe.bind(null, t)), a;
}, $ = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return B.call(e, re) === !1 ? !1 : ve(t, e);
}, it = /* @__PURE__ */ Fe.concat("iframe").join(","), de = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return B.call(e, it) === !1 ? !1 : oe(t, e);
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
}, Y = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, ft = function(e) {
  return Y(e) && !e.shiftKey;
}, vt = function(e) {
  return Y(e) && e.shiftKey;
}, Ne = function(e) {
  return setTimeout(e, 0);
}, Te = function(e, t) {
  var a = -1;
  return e.every(function(s, u) {
    return t(s) ? (a = u, !1) : !0;
  }), a;
}, z = function(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
    a[s - 1] = arguments[s];
  return typeof e == "function" ? e.apply(void 0, a) : e;
}, te = function(e) {
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
  }, f, v = function(r, n, c) {
    return r && r[n] !== void 0 ? r[n] : u[c || n];
  }, d = function(r, n) {
    var c = typeof (n == null ? void 0 : n.composedPath) == "function" ? n.composedPath() : void 0;
    return o.containerGroups.findIndex(function(b) {
      var p = b.container, g = b.tabbableNodes;
      return p.contains(r) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (c == null ? void 0 : c.includes(p)) || g.find(function(y) {
        return y === r;
      });
    });
  }, m = function(r) {
    var n = u[r];
    if (typeof n == "function") {
      for (var c = arguments.length, b = new Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++)
        b[p - 1] = arguments[p];
      n = n.apply(void 0, b);
    }
    if (n === !0 && (n = void 0), !n) {
      if (n === void 0 || n === !1)
        return n;
      throw new Error("`".concat(r, "` was specified but was not a node, or did not return a node"));
    }
    var g = n;
    if (typeof n == "string" && (g = a.querySelector(n), !g))
      throw new Error("`".concat(r, "` as selector refers to no known node"));
    return g;
  }, w = function() {
    var r = m("initialFocus");
    if (r === !1)
      return !1;
    if (r === void 0 || !de(r, u.tabbableOptions))
      if (d(a.activeElement) >= 0)
        r = a.activeElement;
      else {
        var n = o.tabbableGroups[0], c = n && n.firstTabbableNode;
        r = c || m("fallbackFocus");
      }
    if (!r)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return r;
  }, h = function() {
    if (o.containerGroups = o.containers.map(function(r) {
      var n = nt(r, u.tabbableOptions), c = ot(r, u.tabbableOptions), b = n.length > 0 ? n[0] : void 0, p = n.length > 0 ? n[n.length - 1] : void 0, g = c.find(function(N) {
        return $(N);
      }), y = c.slice().reverse().find(function(N) {
        return $(N);
      }), T = !!n.find(function(N) {
        return x(N) > 0;
      });
      return {
        container: r,
        tabbableNodes: n,
        focusableNodes: c,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: T,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: b,
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
        firstDomTabbableNode: g,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: y,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(C) {
          var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, D = n.indexOf(C);
          return D < 0 ? U ? c.slice(c.indexOf(C) + 1).find(function(W) {
            return $(W);
          }) : c.slice(0, c.indexOf(C)).reverse().find(function(W) {
            return $(W);
          }) : n[D + (U ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(r) {
      return r.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !m("fallbackFocus"))
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
        l(w());
        return;
      }
      r.focus({
        preventScroll: !!u.preventScroll
      }), o.mostRecentlyFocusedNode = r, ct(r) && r.select();
    }
  }, Z = function(r) {
    var n = m("setReturnFocus", r);
    return n || (n === !1 ? !1 : r);
  }, K = function(r) {
    var n = r.target, c = r.event, b = r.isBackward, p = b === void 0 ? !1 : b;
    n = n || te(c), h();
    var g = null;
    if (o.tabbableGroups.length > 0) {
      var y = d(n, c), T = y >= 0 ? o.containerGroups[y] : void 0;
      if (y < 0)
        p ? g = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : g = o.tabbableGroups[0].firstTabbableNode;
      else if (p) {
        var N = Te(o.tabbableGroups, function(ie) {
          var se = ie.firstTabbableNode;
          return n === se;
        });
        if (N < 0 && (T.container === n || de(n, u.tabbableOptions) && !$(n, u.tabbableOptions) && !T.nextTabbableNode(n, !1)) && (N = y), N >= 0) {
          var C = N === 0 ? o.tabbableGroups.length - 1 : N - 1, U = o.tabbableGroups[C];
          g = x(n) >= 0 ? U.lastTabbableNode : U.lastDomTabbableNode;
        } else
          Y(c) || (g = T.nextTabbableNode(n, !1));
      } else {
        var D = Te(o.tabbableGroups, function(ie) {
          var se = ie.lastTabbableNode;
          return n === se;
        });
        if (D < 0 && (T.container === n || de(n, u.tabbableOptions) && !$(n, u.tabbableOptions) && !T.nextTabbableNode(n)) && (D = y), D >= 0) {
          var W = D === o.tabbableGroups.length - 1 ? 0 : D + 1, be = o.tabbableGroups[W];
          g = x(n) >= 0 ? be.firstTabbableNode : be.firstDomTabbableNode;
        } else
          Y(c) || (g = T.nextTabbableNode(n));
      }
    } else
      g = m("fallbackFocus");
    return g;
  }, L = function(r) {
    var n = te(r);
    if (!(d(n, r) >= 0)) {
      if (z(u.clickOutsideDeactivates, r)) {
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
      z(u.allowOutsideClick, r) || r.preventDefault();
    }
  }, Q = function(r) {
    var n = te(r), c = d(n, r) >= 0;
    if (c || n instanceof Document)
      c && (o.mostRecentlyFocusedNode = n);
    else {
      r.stopImmediatePropagation();
      var b, p = !0;
      if (o.mostRecentlyFocusedNode)
        if (x(o.mostRecentlyFocusedNode) > 0) {
          var g = d(o.mostRecentlyFocusedNode), y = o.containerGroups[g].tabbableNodes;
          if (y.length > 0) {
            var T = y.findIndex(function(N) {
              return N === o.mostRecentlyFocusedNode;
            });
            T >= 0 && (u.isKeyForward(o.recentNavEvent) ? T + 1 < y.length && (b = y[T + 1], p = !1) : T - 1 >= 0 && (b = y[T - 1], p = !1));
          }
        } else
          o.containerGroups.some(function(N) {
            return N.tabbableNodes.some(function(C) {
              return x(C) > 0;
            });
          }) || (p = !1);
      else
        p = !1;
      p && (b = K({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: u.isKeyBackward(o.recentNavEvent)
      })), F(b || o.mostRecentlyFocusedNode || w());
    }
    o.recentNavEvent = void 0;
  }, M = function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = r;
    var c = K({
      event: r,
      isBackward: n
    });
    c && (Y(r) && r.preventDefault(), F(c));
  }, E = function(r) {
    if (dt(r) && z(u.escapeDeactivates, r) !== !1) {
      r.preventDefault(), f.deactivate();
      return;
    }
    (u.isKeyForward(r) || u.isKeyBackward(r)) && M(r, u.isKeyBackward(r));
  }, V = function(r) {
    var n = te(r);
    d(n, r) >= 0 || z(u.clickOutsideDeactivates, r) || z(u.allowOutsideClick, r) || (r.preventDefault(), r.stopImmediatePropagation());
  }, X = function() {
    if (o.active)
      return we.activateTrap(s, f), o.delayInitialFocusTimer = u.delayInitialFocus ? Ne(function() {
        F(w());
      }) : F(w()), a.addEventListener("focusin", Q, !0), a.addEventListener("mousedown", L, {
        capture: !0,
        passive: !1
      }), a.addEventListener("touchstart", L, {
        capture: !0,
        passive: !1
      }), a.addEventListener("click", V, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", E, {
        capture: !0,
        passive: !1
      }), f;
  }, J = function() {
    if (o.active)
      return a.removeEventListener("focusin", Q, !0), a.removeEventListener("mousedown", L, !0), a.removeEventListener("touchstart", L, !0), a.removeEventListener("click", V, !0), a.removeEventListener("keydown", E, !0), f;
  }, ee = function(r) {
    var n = r.some(function(c) {
      var b = Array.from(c.removedNodes);
      return b.some(function(p) {
        return p === o.mostRecentlyFocusedNode;
      });
    });
    n && F(w());
  }, G = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(ee) : void 0, I = function() {
    G && (G.disconnect(), o.active && !o.paused && o.containers.map(function(r) {
      G.observe(r, {
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
    activate: function(r) {
      if (o.active)
        return this;
      var n = v(r, "onActivate"), c = v(r, "onPostActivate"), b = v(r, "checkCanFocusTrap");
      b || h(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = a.activeElement, n == null || n();
      var p = function() {
        b && h(), X(), I(), c == null || c();
      };
      return b ? (b(o.containers.concat()).then(p, p), this) : (p(), this);
    },
    deactivate: function(r) {
      if (!o.active)
        return this;
      var n = ye({
        onDeactivate: u.onDeactivate,
        onPostDeactivate: u.onPostDeactivate,
        checkCanReturnFocus: u.checkCanReturnFocus
      }, r);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, J(), o.active = !1, o.paused = !1, I(), we.deactivateTrap(s, f);
      var c = v(n, "onDeactivate"), b = v(n, "onPostDeactivate"), p = v(n, "checkCanReturnFocus"), g = v(n, "returnFocus", "returnFocusOnDeactivate");
      c == null || c();
      var y = function() {
        Ne(function() {
          g && F(Z(o.nodeFocusedBeforeActivation)), b == null || b();
        });
      };
      return g && p ? (p(Z(o.nodeFocusedBeforeActivation)).then(y, y), this) : (y(), this);
    },
    pause: function(r) {
      if (o.paused || !o.active)
        return this;
      var n = v(r, "onPause"), c = v(r, "onPostPause");
      return o.paused = !0, n == null || n(), J(), I(), c == null || c(), this;
    },
    unpause: function(r) {
      if (!o.paused || !o.active)
        return this;
      var n = v(r, "onUnpause"), c = v(r, "onPostUnpause");
      return o.paused = !1, n == null || n(), h(), X(), I(), c == null || c(), this;
    },
    updateContainerElements: function(r) {
      var n = [].concat(r).filter(Boolean);
      return o.containers = n.map(function(c) {
        return typeof c == "string" ? a.querySelector(c) : c;
      }), o.active && h(), I(), this;
    }
  }, f.updateContainerElements(e), f;
};
function ht(i, e = {}) {
  let t;
  const { immediate: a, ...s } = e, u = j(!1), o = j(!1), f = (h) => t && t.activate(h), v = (h) => t && t.deactivate(h), d = () => {
    t && (t.pause(), o.value = !0);
  }, m = () => {
    t && (t.unpause(), o.value = !1);
  }, w = H(() => {
    const h = fe(i);
    return (Array.isArray(h) ? h : [h]).map((k) => {
      const F = fe(k);
      return typeof F == "string" ? F : Ve(F);
    }).filter(Me);
  });
  return Ie(
    w,
    (h) => {
      h.length && (t = pt(h, {
        ...s,
        onActivate() {
          u.value = !0, e.onActivate && e.onActivate();
        },
        onDeactivate() {
          u.value = !1, e.onDeactivate && e.onDeactivate();
        }
      }), a && f());
    },
    { flush: "post" }
  ), je(() => v()), {
    hasFocus: u,
    isPaused: o,
    activate: f,
    deactivate: v,
    pause: d,
    unpause: m
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
}, Dt = /* @__PURE__ */ Ce({
  __name: "QuesoDropdown",
  props: /* @__PURE__ */ pe({
    options: {},
    multiple: { type: Boolean },
    stayOpenOnSelection: { type: Boolean }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ pe(["dropdown:open", "dropdown:close"], ["update:modelValue"]),
  setup(i, { expose: e, emit: t }) {
    const a = i, s = t, u = Ae(i, "modelValue"), o = j(null), f = j([]), v = j(null), d = j(!1), { options: m } = _e(a), w = "queso-collapsible__" + Math.random().toString(36).substring(2, 9), h = H(() => m.value.filter((l) => u.value.includes(l.value))), k = H(() => ({
      "is-multiple": a.multiple,
      "is-dropdown-open": d.value,
      "is-dropdown-close": !d.value
    })), { activate: F, deactivate: Z } = ht(o), K = (l) => {
      a.multiple ? u.value.includes(l) ? u.value = u.value.filter((r) => r !== l) : u.value = [...u.value, l] : u.value = [l], a.multiple || a.stayOpenOnSelection || E();
    }, L = (l, r) => {
      r.preventDefault();
      const n = f.value.findIndex((y) => y === r.target), c = (n + 1) % f.value.length, b = (n - 1 + f.value.length) % f.value.length, p = f.value[c], g = f.value[b];
      r.key === "ArrowDown" || r.key === "ArrowRight" ? p.focus() : r.key === "ArrowUp" || r.key === "ArrowLeft" ? g.focus() : (r.key === "Enter" || r.key === " " || r.key === "Space") && K(l);
    }, Q = () => {
      setTimeout(() => {
        J.value = 0;
      }, 210);
    }, M = () => {
      d.value = !0;
      const l = f.value[0];
      F(), l && l.focus(), s("dropdown:open");
    }, E = () => {
      d.value = !1, Z(), Q(), s("dropdown:close");
    }, V = () => {
      d.value ? E() : M();
    }, X = (l) => {
      (l.key === " " || l.key === "Space") && (l.preventDefault(), V());
    };
    Le("Escape", () => {
      d.value && E();
    }), qe(o, () => E());
    const { y: J, arrivedState: ee } = $e(v, {
      offset: { top: 15, bottom: 15 }
    }), G = H(() => {
      var l, r;
      return v.value ? ((l = v.value) == null ? void 0 : l.scrollHeight) > ((r = v.value) == null ? void 0 : r.clientHeight) : !1;
    }), I = H(() => ({
      "is-scrolled-top": ee.top,
      "is-scrolled-bottom": ee.bottom || !G.value
    }));
    return e({ isDropdownOpen: d, openDropdown: M, closeDropdown: E }), (l, r) => R(m).length > 0 ? (A(), _("div", {
      key: 0,
      ref_key: "dropdown",
      ref: o,
      class: ue(["queso-dropdown", k.value])
    }, [
      q("div", {
        class: "queso-dropdown__selector",
        "aria-expanded": d.value,
        "aria-controls": w,
        tabindex: "0",
        onClick: r[0] || (r[0] = (n) => V()),
        onKeydown: r[1] || (r[1] = (n) => X(n))
      }, [
        S(l.$slots, "selector", O(P({ isDropdownOpen: d.value, options: R(m), activeOptions: h.value })), () => [
          S(l.$slots, "selectorBeforeText", O(P({ isDropdownOpen: d.value, options: R(m), activeOptions: h.value }))),
          q("div", mt, [
            h.value.length < 1 ? (A(), _("div", yt, [
              S(l.$slots, "selectorPlaceholder", O(P({ isDropdownOpen: d.value })))
            ])) : (A(), _("div", wt, [
              S(l.$slots, "selectorActiveOptions", O(P({ isDropdownOpen: d.value, activeOptions: h.value })), () => [
                le(he(h.value), 1)
              ])
            ]))
          ]),
          S(l.$slots, "selectorAfterText", O(P({ isDropdownOpen: d.value, options: R(m), activeOptions: h.value }))),
          q("div", Nt, [
            S(l.$slots, "selectorIcon", O(P({ isDropdownOpen: d.value })), () => [
              le("↓")
            ])
          ])
        ])
      ], 40, gt),
      q("div", {
        class: "queso-dropdown__popover",
        id: w
      }, [
        l.$slots.popoverHeader ? (A(), _("div", Tt, [
          S(l.$slots, "popoverHeader", O(P({ options: R(m), activeOptions: h.value })))
        ])) : ce("", !0),
        q("div", {
          class: ue(["queso-dropdown__popover__scroll", I.value])
        }, [
          q("ul", {
            ref_key: "dropdownPopover",
            ref: v,
            class: "queso-dropdown__popover__options-list"
          }, [
            (A(!0), _(xe, null, Be(R(m), (n, c) => (A(), _("li", {
              key: n.value,
              ref_for: !0,
              ref_key: "optionsRefs",
              ref: f,
              class: ue(["queso-dropdown__popover__options-list__item", { "is-option-active": u.value.includes(n.value) }]),
              tabindex: d.value ? "0" : "-1",
              onClick: (b) => K(n.value),
              onKeydown: (b) => L(n.value, b)
            }, [
              S(l.$slots, "popoverItem", Ke({ ref_for: !0 }, { index: c, ...n, openDropdown: M, closeDropdown: E }), () => [
                le(he(n), 1)
              ])
            ], 42, Ft))), 128))
          ], 512)
        ], 2),
        l.$slots.popoverFooter ? (A(), _("div", St, [
          S(l.$slots, "popoverFooter", O(P({ options: R(m), activeOptions: h.value })))
        ])) : ce("", !0)
      ]),
      S(l.$slots, "afterDropdown")
    ], 2)) : ce("", !0);
  }
});
export {
  Dt as _,
  ht as u
};
