import { getCurrentScope as Re, onScopeDispose as Ce, unref as R, ref as M, computed as H, watch as Fe, defineComponent as Ie, mergeModels as pe, useModel as Ae, toRefs as _e, openBlock as A, createElementBlock as _, normalizeClass as ue, createElementVNode as $, renderSlot as S, normalizeProps as O, guardReactiveProps as P, createTextVNode as le, toDisplayString as he, createCommentVNode as ce, Fragment as xe, renderList as Be, mergeProps as Ke } from "vue";
import { o as Le, a as qe, u as $e } from "./QuesoCollapsible-BAoVzf7E.js";
import '../assets/components/QuesoDropdown.css';function je(i) {
  return Re() ? (Ce(i), !0) : !1;
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
var De = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], te = /* @__PURE__ */ De.join(","), Se = typeof Element > "u", B = Se ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, re = !Se && Element.prototype.getRootNode ? function(i) {
  var e;
  return i == null || (e = i.getRootNode) === null || e === void 0 ? void 0 : e.call(i);
} : function(i) {
  return i == null ? void 0 : i.ownerDocument;
}, ae = function i(e, t) {
  var a;
  t === void 0 && (t = !0);
  var s = e == null || (a = e.getAttribute) === null || a === void 0 ? void 0 : a.call(e, "inert"), l = s === "" || s === "true", o = l || t && e && i(e.parentNode);
  return o;
}, Ge = function(e) {
  var t, a = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
  return a === "" || a === "true";
}, ke = function(e, t, a) {
  if (ae(e))
    return [];
  var s = Array.prototype.slice.apply(e.querySelectorAll(te));
  return t && B.call(e, te) && s.unshift(e), s = s.filter(a), s;
}, Ee = function i(e, t, a) {
  for (var s = [], l = Array.from(e); l.length; ) {
    var o = l.shift();
    if (!ae(o, !1))
      if (o.tagName === "SLOT") {
        var d = o.assignedElements(), f = d.length ? d : o.children, c = i(f, !0, a);
        a.flatten ? s.push.apply(s, c) : s.push({
          scopeParent: o,
          candidates: c
        });
      } else {
        var m = B.call(o, te);
        m && a.filter(o) && (t || !e.includes(o)) && s.push(o);
        var w = o.shadowRoot || // check for an undisclosed shadow
        typeof a.getShadowRoot == "function" && a.getShadowRoot(o), p = !ae(w, !1) && (!a.shadowRootFilter || a.shadowRootFilter(o));
        if (w && p) {
          var k = i(w === !0 ? o.children : w.children, !0, a);
          a.flatten ? s.push.apply(s, k) : s.push({
            scopeParent: o,
            candidates: k
          });
        } else
          l.unshift.apply(l, o.children);
      }
  }
  return s;
}, Oe = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, x = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Ge(e)) && !Oe(e) ? 0 : e.tabIndex;
}, Ue = function(e, t) {
  var a = x(e);
  return a < 0 && t && !Oe(e) ? 0 : a;
}, We = function(e, t) {
  return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, Pe = function(e) {
  return e.tagName === "INPUT";
}, ze = function(e) {
  return Pe(e) && e.type === "hidden";
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
  var t = e.form || re(e), a = function(d) {
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
  var l = Ye(s, e.form);
  return !l || l === e;
}, Qe = function(e) {
  return Pe(e) && e.type === "radio";
}, Xe = function(e) {
  return Qe(e) && !Ze(e);
}, Je = function(e) {
  var t, a = e && re(e), s = (t = a) === null || t === void 0 ? void 0 : t.host, l = !1;
  if (a && a !== e) {
    var o, d, f;
    for (l = !!((o = s) !== null && o !== void 0 && (d = o.ownerDocument) !== null && d !== void 0 && d.contains(s) || e != null && (f = e.ownerDocument) !== null && f !== void 0 && f.contains(e)); !l && s; ) {
      var c, m, w;
      a = re(s), s = (c = a) === null || c === void 0 ? void 0 : c.host, l = !!((m = s) !== null && m !== void 0 && (w = m.ownerDocument) !== null && w !== void 0 && w.contains(s));
    }
  }
  return l;
}, ge = function(e) {
  var t = e.getBoundingClientRect(), a = t.width, s = t.height;
  return a === 0 && s === 0;
}, et = function(e, t) {
  var a = t.displayCheck, s = t.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var l = B.call(e, "details>summary:first-of-type"), o = l ? e.parentElement : e;
  if (B.call(o, "details:not([open]) *"))
    return !0;
  if (!a || a === "full" || a === "legacy-full") {
    if (typeof s == "function") {
      for (var d = e; e; ) {
        var f = e.parentElement, c = re(e);
        if (f && !f.shadowRoot && s(f) === !0)
          return ge(e);
        e.assignedSlot ? e = e.assignedSlot : !f && c !== e.ownerDocument ? e = c.host : e = f;
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
            return B.call(t, "fieldset[disabled] *") ? !0 : !s.contains(e);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, ne = function(e, t) {
  return !(t.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  ae(t) || ze(t) || et(t, e) || // For a details element with a summary, the summary element gets the focus
  He(t) || tt(t));
}, ve = function(e, t) {
  return !(Xe(t) || x(t) < 0 || !ne(e, t));
}, rt = function(e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, at = function i(e) {
  var t = [], a = [];
  return e.forEach(function(s, l) {
    var o = !!s.scopeParent, d = o ? s.scopeParent : s, f = Ue(d, o), c = o ? i(s.candidates) : d;
    f === 0 ? o ? t.push.apply(t, c) : t.push(d) : a.push({
      documentOrder: l,
      tabIndex: f,
      item: s,
      isScope: o,
      content: c
    });
  }), a.sort(We).reduce(function(s, l) {
    return l.isScope ? s.push.apply(s, l.content) : s.push(l.content), s;
  }, []).concat(t);
}, nt = function(e, t) {
  t = t || {};
  var a;
  return t.getShadowRoot ? a = Ee([e], t.includeContainer, {
    filter: ve.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: rt
  }) : a = ke(e, t.includeContainer, ve.bind(null, t)), at(a);
}, ot = function(e, t) {
  t = t || {};
  var a;
  return t.getShadowRoot ? a = Ee([e], t.includeContainer, {
    filter: ne.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : a = ke(e, t.includeContainer, ne.bind(null, t)), a;
}, j = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return B.call(e, te) === !1 ? !1 : ve(t, e);
}, it = /* @__PURE__ */ De.concat("iframe").join(","), de = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return B.call(e, it) === !1 ? !1 : ne(t, e);
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
  return e.every(function(s, l) {
    return t(s) ? (a = l, !1) : !0;
  }), a;
}, z = function(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
    a[s - 1] = arguments[s];
  return typeof e == "function" ? e.apply(void 0, a) : e;
}, ee = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, bt = [], pt = function(e, t) {
  var a = (t == null ? void 0 : t.document) || document, s = (t == null ? void 0 : t.trapStack) || bt, l = ye({
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
  }, d, f = function(r, n, u) {
    return r && r[n] !== void 0 ? r[n] : l[u || n];
  }, c = function(r, n) {
    var u = typeof (n == null ? void 0 : n.composedPath) == "function" ? n.composedPath() : void 0;
    return o.containerGroups.findIndex(function(b) {
      var v = b.container, g = b.tabbableNodes;
      return v.contains(r) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (u == null ? void 0 : u.includes(v)) || g.find(function(y) {
        return y === r;
      });
    });
  }, m = function(r) {
    var n = l[r];
    if (typeof n == "function") {
      for (var u = arguments.length, b = new Array(u > 1 ? u - 1 : 0), v = 1; v < u; v++)
        b[v - 1] = arguments[v];
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
    if (r === void 0 || !de(r, l.tabbableOptions))
      if (c(a.activeElement) >= 0)
        r = a.activeElement;
      else {
        var n = o.tabbableGroups[0], u = n && n.firstTabbableNode;
        r = u || m("fallbackFocus");
      }
    if (!r)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return r;
  }, p = function() {
    if (o.containerGroups = o.containers.map(function(r) {
      var n = nt(r, l.tabbableOptions), u = ot(r, l.tabbableOptions), b = n.length > 0 ? n[0] : void 0, v = n.length > 0 ? n[n.length - 1] : void 0, g = u.find(function(T) {
        return j(T);
      }), y = u.slice().reverse().find(function(T) {
        return j(T);
      }), N = !!n.find(function(T) {
        return x(T) > 0;
      });
      return {
        container: r,
        tabbableNodes: n,
        focusableNodes: u,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: N,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: b,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: v,
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
        nextTabbableNode: function(I) {
          var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, E = n.indexOf(I);
          return E < 0 ? U ? u.slice(u.indexOf(I) + 1).find(function(W) {
            return j(W);
          }) : u.slice(0, u.indexOf(I)).reverse().find(function(W) {
            return j(W);
          }) : n[E + (U ? 1 : -1)];
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
  }, k = function h(r) {
    var n = r.activeElement;
    if (n)
      return n.shadowRoot && n.shadowRoot.activeElement !== null ? h(n.shadowRoot) : n;
  }, F = function h(r) {
    if (r !== !1 && r !== k(document)) {
      if (!r || !r.focus) {
        h(w());
        return;
      }
      r.focus({
        preventScroll: !!l.preventScroll
      }), o.mostRecentlyFocusedNode = r, ct(r) && r.select();
    }
  }, Z = function(r) {
    var n = m("setReturnFocus", r);
    return n || (n === !1 ? !1 : r);
  }, K = function(r) {
    var n = r.target, u = r.event, b = r.isBackward, v = b === void 0 ? !1 : b;
    n = n || ee(u), p();
    var g = null;
    if (o.tabbableGroups.length > 0) {
      var y = c(n, u), N = y >= 0 ? o.containerGroups[y] : void 0;
      if (y < 0)
        v ? g = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : g = o.tabbableGroups[0].firstTabbableNode;
      else if (v) {
        var T = Te(o.tabbableGroups, function(ie) {
          var se = ie.firstTabbableNode;
          return n === se;
        });
        if (T < 0 && (N.container === n || de(n, l.tabbableOptions) && !j(n, l.tabbableOptions) && !N.nextTabbableNode(n, !1)) && (T = y), T >= 0) {
          var I = T === 0 ? o.tabbableGroups.length - 1 : T - 1, U = o.tabbableGroups[I];
          g = x(n) >= 0 ? U.lastTabbableNode : U.lastDomTabbableNode;
        } else
          Y(u) || (g = N.nextTabbableNode(n, !1));
      } else {
        var E = Te(o.tabbableGroups, function(ie) {
          var se = ie.lastTabbableNode;
          return n === se;
        });
        if (E < 0 && (N.container === n || de(n, l.tabbableOptions) && !j(n, l.tabbableOptions) && !N.nextTabbableNode(n)) && (E = y), E >= 0) {
          var W = E === o.tabbableGroups.length - 1 ? 0 : E + 1, be = o.tabbableGroups[W];
          g = x(n) >= 0 ? be.firstTabbableNode : be.firstDomTabbableNode;
        } else
          Y(u) || (g = N.nextTabbableNode(n));
      }
    } else
      g = m("fallbackFocus");
    return g;
  }, L = function(r) {
    var n = ee(r);
    if (!(c(n, r) >= 0)) {
      if (z(l.clickOutsideDeactivates, r)) {
        d.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: l.returnFocusOnDeactivate
        });
        return;
      }
      z(l.allowOutsideClick, r) || r.preventDefault();
    }
  }, Q = function(r) {
    var n = ee(r), u = c(n, r) >= 0;
    if (u || n instanceof Document)
      u && (o.mostRecentlyFocusedNode = n);
    else {
      r.stopImmediatePropagation();
      var b, v = !0;
      if (o.mostRecentlyFocusedNode)
        if (x(o.mostRecentlyFocusedNode) > 0) {
          var g = c(o.mostRecentlyFocusedNode), y = o.containerGroups[g].tabbableNodes;
          if (y.length > 0) {
            var N = y.findIndex(function(T) {
              return T === o.mostRecentlyFocusedNode;
            });
            N >= 0 && (l.isKeyForward(o.recentNavEvent) ? N + 1 < y.length && (b = y[N + 1], v = !1) : N - 1 >= 0 && (b = y[N - 1], v = !1));
          }
        } else
          o.containerGroups.some(function(T) {
            return T.tabbableNodes.some(function(I) {
              return x(I) > 0;
            });
          }) || (v = !1);
      else
        v = !1;
      v && (b = K({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: l.isKeyBackward(o.recentNavEvent)
      })), F(b || o.mostRecentlyFocusedNode || w());
    }
    o.recentNavEvent = void 0;
  }, V = function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = r;
    var u = K({
      event: r,
      isBackward: n
    });
    u && (Y(r) && r.preventDefault(), F(u));
  }, D = function(r) {
    if (dt(r) && z(l.escapeDeactivates, r) !== !1) {
      r.preventDefault(), d.deactivate();
      return;
    }
    (l.isKeyForward(r) || l.isKeyBackward(r)) && V(r, l.isKeyBackward(r));
  }, G = function(r) {
    var n = ee(r);
    c(n, r) >= 0 || z(l.clickOutsideDeactivates, r) || z(l.allowOutsideClick, r) || (r.preventDefault(), r.stopImmediatePropagation());
  }, X = function() {
    if (o.active)
      return we.activateTrap(s, d), o.delayInitialFocusTimer = l.delayInitialFocus ? Ne(function() {
        F(w());
      }) : F(w()), a.addEventListener("focusin", Q, !0), a.addEventListener("mousedown", L, {
        capture: !0,
        passive: !1
      }), a.addEventListener("touchstart", L, {
        capture: !0,
        passive: !1
      }), a.addEventListener("click", G, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", D, {
        capture: !0,
        passive: !1
      }), d;
  }, J = function() {
    if (o.active)
      return a.removeEventListener("focusin", Q, !0), a.removeEventListener("mousedown", L, !0), a.removeEventListener("touchstart", L, !0), a.removeEventListener("click", G, !0), a.removeEventListener("keydown", D, !0), d;
  }, oe = function(r) {
    var n = r.some(function(u) {
      var b = Array.from(u.removedNodes);
      return b.some(function(v) {
        return v === o.mostRecentlyFocusedNode;
      });
    });
    n && F(w());
  }, q = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(oe) : void 0, C = function() {
    q && (q.disconnect(), o.active && !o.paused && o.containers.map(function(r) {
      q.observe(r, {
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
      var n = f(r, "onActivate"), u = f(r, "onPostActivate"), b = f(r, "checkCanFocusTrap");
      b || p(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = a.activeElement, n == null || n();
      var v = function() {
        b && p(), X(), C(), u == null || u();
      };
      return b ? (b(o.containers.concat()).then(v, v), this) : (v(), this);
    },
    deactivate: function(r) {
      if (!o.active)
        return this;
      var n = ye({
        onDeactivate: l.onDeactivate,
        onPostDeactivate: l.onPostDeactivate,
        checkCanReturnFocus: l.checkCanReturnFocus
      }, r);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, J(), o.active = !1, o.paused = !1, C(), we.deactivateTrap(s, d);
      var u = f(n, "onDeactivate"), b = f(n, "onPostDeactivate"), v = f(n, "checkCanReturnFocus"), g = f(n, "returnFocus", "returnFocusOnDeactivate");
      u == null || u();
      var y = function() {
        Ne(function() {
          g && F(Z(o.nodeFocusedBeforeActivation)), b == null || b();
        });
      };
      return g && v ? (v(Z(o.nodeFocusedBeforeActivation)).then(y, y), this) : (y(), this);
    },
    pause: function(r) {
      if (o.paused || !o.active)
        return this;
      var n = f(r, "onPause"), u = f(r, "onPostPause");
      return o.paused = !0, n == null || n(), J(), C(), u == null || u(), this;
    },
    unpause: function(r) {
      if (!o.paused || !o.active)
        return this;
      var n = f(r, "onUnpause"), u = f(r, "onPostUnpause");
      return o.paused = !1, n == null || n(), p(), X(), C(), u == null || u(), this;
    },
    updateContainerElements: function(r) {
      var n = [].concat(r).filter(Boolean);
      return o.containers = n.map(function(u) {
        return typeof u == "string" ? a.querySelector(u) : u;
      }), o.active && p(), C(), this;
    }
  }, d.updateContainerElements(e), d;
};
function ht(i, e = {}) {
  let t;
  const { immediate: a, ...s } = e, l = M(!1), o = M(!1), d = (p) => t && t.activate(p), f = (p) => t && t.deactivate(p), c = () => {
    t && (t.pause(), o.value = !0);
  }, m = () => {
    t && (t.unpause(), o.value = !1);
  }, w = H(() => {
    const p = fe(i);
    return (Array.isArray(p) ? p : [p]).map((k) => {
      const F = fe(k);
      return typeof F == "string" ? F : Ve(F);
    }).filter(Me);
  });
  return Fe(
    w,
    (p) => {
      p.length && (t = pt(p, {
        ...s,
        onActivate() {
          l.value = !0, e.onActivate && e.onActivate();
        },
        onDeactivate() {
          l.value = !1, e.onDeactivate && e.onDeactivate();
        }
      }), a && d());
    },
    { flush: "post" }
  ), je(() => f()), {
    hasFocus: l,
    isPaused: o,
    activate: d,
    deactivate: f,
    pause: c,
    unpause: m
  };
}
const gt = ["aria-expanded", "tabindex"], mt = { class: "queso-dropdown__selector__text" }, yt = {
  key: 0,
  class: "queso-dropdown__selector__text__placeholder"
}, wt = {
  key: 1,
  class: "queso-dropdown__selector__text__active-label"
}, Nt = { class: "queso-dropdown__selector__icon" }, Tt = {
  key: 0,
  class: "queso-dropdown__popover__header"
}, Ft = ["tabindex", "onClick", "onKeydown"], Dt = {
  key: 1,
  class: "queso-dropdown__popover__footer"
}, Et = /* @__PURE__ */ Ie({
  __name: "QuesoDropdown",
  props: /* @__PURE__ */ pe({
    options: {},
    multiple: { type: Boolean },
    stayOpenOnSelection: { type: Boolean },
    isDisabled: { type: Boolean }
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ pe(["dropdown:open", "dropdown:close"], ["update:modelValue"]),
  setup(i, { expose: e, emit: t }) {
    const a = i, s = t, l = Ae(i, "modelValue"), o = M(null), d = M([]), f = M(null), c = M(!1), { options: m } = _e(a), w = "queso-collapsible__" + Math.random().toString(36).substring(2, 9), p = H(() => m.value.filter((r) => l.value.includes(r.value))), k = H(() => ({
      "is-multiple": a.multiple,
      "is-dropdown-open": c.value,
      "is-dropdown-close": !c.value,
      "is-disabled": a.isDisabled
    })), { activate: F, deactivate: Z } = ht(o), K = (r) => {
      a.multiple ? l.value.includes(r) ? l.value = l.value.filter((n) => n !== r) : l.value = [...l.value, r] : l.value = [r], a.multiple || a.stayOpenOnSelection || D();
    }, L = (r, n) => {
      n.preventDefault();
      const u = d.value.findIndex((N) => N === n.target), b = (u + 1) % d.value.length, v = (u - 1 + d.value.length) % d.value.length, g = d.value[b], y = d.value[v];
      n.key === "ArrowDown" || n.key === "ArrowRight" ? g.focus() : n.key === "ArrowUp" || n.key === "ArrowLeft" ? y.focus() : (n.key === "Enter" || n.key === " " || n.key === "Space") && K(r);
    }, Q = () => {
      setTimeout(() => {
        oe.value = 0;
      }, 210);
    }, V = () => {
      c.value = !0;
      const r = d.value[0];
      F(), r && r.focus(), s("dropdown:open");
    }, D = () => {
      c.value = !1, Z(), Q(), s("dropdown:close");
    }, G = () => {
      c.value ? D() : V();
    }, X = () => {
      a.isDisabled || G();
    }, J = (r) => {
      a.isDisabled || (r.key === " " || r.key === "Space") && (r.preventDefault(), G());
    };
    Le("Escape", () => {
      c.value && D();
    }), qe(o, () => D()), Fe(
      () => a.isDisabled,
      (r) => {
        r && c.value && D();
      }
    );
    const { y: oe, arrivedState: q } = $e(f, {
      offset: { top: 15, bottom: 15 }
    }), C = H(() => {
      var r, n;
      return f.value ? ((r = f.value) == null ? void 0 : r.scrollHeight) > ((n = f.value) == null ? void 0 : n.clientHeight) : !1;
    }), h = H(() => ({
      "is-scrolled-top": q.top,
      "is-scrolled-bottom": q.bottom || !C.value
    }));
    return e({ isDropdownOpen: c, openDropdown: V, closeDropdown: D }), (r, n) => R(m).length > 0 ? (A(), _("div", {
      key: 0,
      ref_key: "dropdown",
      ref: o,
      class: ue(["queso-dropdown", k.value])
    }, [
      $("div", {
        class: "queso-dropdown__selector",
        "aria-expanded": c.value,
        "aria-controls": w,
        tabindex: a.isDisabled ? -1 : 0,
        onClick: n[0] || (n[0] = (u) => X()),
        onKeydown: n[1] || (n[1] = (u) => J(u))
      }, [
        S(r.$slots, "selector", O(P({ isDropdownOpen: c.value, options: R(m), activeOptions: p.value })), () => [
          S(r.$slots, "selectorBeforeText", O(P({ isDropdownOpen: c.value, options: R(m), activeOptions: p.value }))),
          $("div", mt, [
            p.value.length < 1 ? (A(), _("div", yt, [
              S(r.$slots, "selectorPlaceholder", O(P({ isDropdownOpen: c.value })))
            ])) : (A(), _("div", wt, [
              S(r.$slots, "selectorActiveOptions", O(P({ isDropdownOpen: c.value, activeOptions: p.value })), () => [
                le(he(p.value), 1)
              ])
            ]))
          ]),
          S(r.$slots, "selectorAfterText", O(P({ isDropdownOpen: c.value, options: R(m), activeOptions: p.value }))),
          $("div", Nt, [
            S(r.$slots, "selectorIcon", O(P({ isDropdownOpen: c.value })), () => [
              le("↓")
            ])
          ])
        ])
      ], 40, gt),
      $("div", {
        class: "queso-dropdown__popover",
        id: w
      }, [
        r.$slots.popoverHeader ? (A(), _("div", Tt, [
          S(r.$slots, "popoverHeader", O(P({ options: R(m), activeOptions: p.value })))
        ])) : ce("", !0),
        $("div", {
          class: ue(["queso-dropdown__popover__scroll", h.value])
        }, [
          $("ul", {
            ref_key: "dropdownPopover",
            ref: f,
            class: "queso-dropdown__popover__options-list"
          }, [
            (A(!0), _(xe, null, Be(R(m), (u, b) => (A(), _("li", {
              key: u.value,
              ref_for: !0,
              ref_key: "optionsRefs",
              ref: d,
              class: ue(["queso-dropdown__popover__options-list__item", {
                "is-option-active": l.value.includes(u.value),
                "is-option-selected": l.value.includes(u.value)
              }]),
              tabindex: c.value ? "0" : "-1",
              onClick: (v) => K(u.value),
              onKeydown: (v) => L(u.value, v)
            }, [
              S(r.$slots, "popoverItem", Ke({ ref_for: !0 }, {
                index: b,
                ...u,
                isSelected: l.value.includes(u.value),
                openDropdown: V,
                closeDropdown: D
              }), () => [
                le(he(u), 1)
              ])
            ], 42, Ft))), 128))
          ], 512)
        ], 2),
        r.$slots.popoverFooter ? (A(), _("div", Dt, [
          S(r.$slots, "popoverFooter", O(P({ options: R(m), activeOptions: p.value })))
        ])) : ce("", !0)
      ]),
      S(r.$slots, "afterDropdown")
    ], 2)) : ce("", !0);
  }
});
export {
  Et as _,
  ht as u
};
