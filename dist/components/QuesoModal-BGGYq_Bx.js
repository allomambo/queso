import { getCurrentScope as ke, onScopeDispose as Re, unref as $, ref as V, computed as H, watch as pe, defineComponent as he, inject as Oe, openBlock as _, createElementBlock as me, provide as Pe, onMounted as Ce, reactive as Ae, Fragment as Ie, renderSlot as C, normalizeProps as A, guardReactiveProps as I, createBlock as xe, Teleport as Be, createElementVNode as se, mergeProps as Le, createVNode as Ke, createCommentVNode as Me } from "vue";
import { a as je } from "./QuesoCollapsible-ddhTDc1c.js";
import '../assets/components/QuesoModal.css';function qe(o) {
  return ke() ? (Re(o), !0) : !1;
}
function ee(o) {
  return typeof o == "function" ? o() : $(o);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ge = (o) => o != null;
function $e(o) {
  var e;
  const t = ee(o);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var ge = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], U = /* @__PURE__ */ ge.join(","), ye = typeof Element > "u", P = ye ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, W = !ye && Element.prototype.getRootNode ? function(o) {
  var e;
  return o == null || (e = o.getRootNode) === null || e === void 0 ? void 0 : e.call(o);
} : function(o) {
  return o == null ? void 0 : o.ownerDocument;
}, Q = function o(e, t) {
  var a;
  t === void 0 && (t = !0);
  var u = e == null || (a = e.getAttribute) === null || a === void 0 ? void 0 : a.call(e, "inert"), s = u === "" || u === "true", r = s || t && e && o(e.parentNode);
  return r;
}, Ve = function(e) {
  var t, a = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
  return a === "" || a === "true";
}, we = function(e, t, a) {
  if (Q(e))
    return [];
  var u = Array.prototype.slice.apply(e.querySelectorAll(U));
  return t && P.call(e, U) && u.unshift(e), u = u.filter(a), u;
}, Ne = function o(e, t, a) {
  for (var u = [], s = Array.from(e); s.length; ) {
    var r = s.shift();
    if (!Q(r, !1))
      if (r.tagName === "SLOT") {
        var d = r.assignedElements(), c = d.length ? d : r.children, h = o(c, !0, a);
        a.flatten ? u.push.apply(u, h) : u.push({
          scopeParent: r,
          candidates: h
        });
      } else {
        var N = P.call(r, U);
        N && a.filter(r) && (t || !e.includes(r)) && u.push(r);
        var f = r.shadowRoot || // check for an undisclosed shadow
        typeof a.getShadowRoot == "function" && a.getShadowRoot(r), m = !Q(f, !1) && (!a.shadowRootFilter || a.shadowRootFilter(r));
        if (f && m) {
          var S = o(f === !0 ? r.children : f.children, !0, a);
          a.flatten ? u.push.apply(u, S) : u.push({
            scopeParent: r,
            candidates: S
          });
        } else
          s.unshift.apply(s, r.children);
      }
  }
  return u;
}, Te = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, O = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Ve(e)) && !Te(e) ? 0 : e.tabIndex;
}, Ue = function(e, t) {
  var a = O(e);
  return a < 0 && t && !Te(e) ? 0 : a;
}, We = function(e, t) {
  return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, Fe = function(e) {
  return e.tagName === "INPUT";
}, Qe = function(e) {
  return Fe(e) && e.type === "hidden";
}, Ye = function(e) {
  var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(a) {
    return a.tagName === "SUMMARY";
  });
  return t;
}, ze = function(e, t) {
  for (var a = 0; a < e.length; a++)
    if (e[a].checked && e[a].form === t)
      return e[a];
}, Ze = function(e) {
  if (!e.name)
    return !0;
  var t = e.form || W(e), a = function(d) {
    return t.querySelectorAll('input[type="radio"][name="' + d + '"]');
  }, u;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    u = a(window.CSS.escape(e.name));
  else
    try {
      u = a(e.name);
    } catch (r) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", r.message), !1;
    }
  var s = ze(u, e.form);
  return !s || s === e;
}, Xe = function(e) {
  return Fe(e) && e.type === "radio";
}, Je = function(e) {
  return Xe(e) && !Ze(e);
}, He = function(e) {
  var t, a = e && W(e), u = (t = a) === null || t === void 0 ? void 0 : t.host, s = !1;
  if (a && a !== e) {
    var r, d, c;
    for (s = !!((r = u) !== null && r !== void 0 && (d = r.ownerDocument) !== null && d !== void 0 && d.contains(u) || e != null && (c = e.ownerDocument) !== null && c !== void 0 && c.contains(e)); !s && u; ) {
      var h, N, f;
      a = W(u), u = (h = a) === null || h === void 0 ? void 0 : h.host, s = !!((N = u) !== null && N !== void 0 && (f = N.ownerDocument) !== null && f !== void 0 && f.contains(u));
    }
  }
  return s;
}, le = function(e) {
  var t = e.getBoundingClientRect(), a = t.width, u = t.height;
  return a === 0 && u === 0;
}, _e = function(e, t) {
  var a = t.displayCheck, u = t.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var s = P.call(e, "details>summary:first-of-type"), r = s ? e.parentElement : e;
  if (P.call(r, "details:not([open]) *"))
    return !0;
  if (!a || a === "full" || a === "legacy-full") {
    if (typeof u == "function") {
      for (var d = e; e; ) {
        var c = e.parentElement, h = W(e);
        if (c && !c.shadowRoot && u(c) === !0)
          return le(e);
        e.assignedSlot ? e = e.assignedSlot : !c && h !== e.ownerDocument ? e = h.host : e = c;
      }
      e = d;
    }
    if (He(e))
      return !e.getClientRects().length;
    if (a !== "legacy-full")
      return !0;
  } else if (a === "non-zero-area")
    return le(e);
  return !1;
}, et = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var t = e.parentElement; t; ) {
      if (t.tagName === "FIELDSET" && t.disabled) {
        for (var a = 0; a < t.children.length; a++) {
          var u = t.children.item(a);
          if (u.tagName === "LEGEND")
            return P.call(t, "fieldset[disabled] *") ? !0 : !u.contains(e);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, Y = function(e, t) {
  return !(t.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Q(t) || Qe(t) || _e(t, e) || // For a details element with a summary, the summary element gets the focus
  Ye(t) || et(t));
}, te = function(e, t) {
  return !(Je(t) || O(t) < 0 || !Y(e, t));
}, tt = function(e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, at = function o(e) {
  var t = [], a = [];
  return e.forEach(function(u, s) {
    var r = !!u.scopeParent, d = r ? u.scopeParent : u, c = Ue(d, r), h = r ? o(u.candidates) : d;
    c === 0 ? r ? t.push.apply(t, h) : t.push(d) : a.push({
      documentOrder: s,
      tabIndex: c,
      item: u,
      isScope: r,
      content: h
    });
  }), a.sort(We).reduce(function(u, s) {
    return s.isScope ? u.push.apply(u, s.content) : u.push(s.content), u;
  }, []).concat(t);
}, rt = function(e, t) {
  t = t || {};
  var a;
  return t.getShadowRoot ? a = Ne([e], t.includeContainer, {
    filter: te.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: tt
  }) : a = we(e, t.includeContainer, te.bind(null, t)), at(a);
}, nt = function(e, t) {
  t = t || {};
  var a;
  return t.getShadowRoot ? a = Ne([e], t.includeContainer, {
    filter: Y.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : a = we(e, t.includeContainer, Y.bind(null, t)), a;
}, x = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return P.call(e, U) === !1 ? !1 : te(t, e);
}, it = /* @__PURE__ */ ge.concat("iframe").join(","), J = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return P.call(e, it) === !1 ? !1 : Y(t, e);
};
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function ce(o, e) {
  var t = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(o);
    e && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(o, u).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function de(o) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ce(Object(t), !0).forEach(function(a) {
      ot(o, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : ce(Object(t)).forEach(function(a) {
      Object.defineProperty(o, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return o;
}
function ot(o, e, t) {
  return e = st(e), e in o ? Object.defineProperty(o, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[e] = t, o;
}
function ut(o, e) {
  if (typeof o != "object" || o === null)
    return o;
  var t = o[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(o, e || "default");
    if (typeof a != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(o);
}
function st(o) {
  var e = ut(o, "string");
  return typeof e == "symbol" ? e : String(e);
}
var fe = {
  activateTrap: function(e, t) {
    if (e.length > 0) {
      var a = e[e.length - 1];
      a !== t && a.pause();
    }
    var u = e.indexOf(t);
    u === -1 || e.splice(u, 1), e.push(t);
  },
  deactivateTrap: function(e, t) {
    var a = e.indexOf(t);
    a !== -1 && e.splice(a, 1), e.length > 0 && e[e.length - 1].unpause();
  }
}, lt = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, ct = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, q = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, dt = function(e) {
  return q(e) && !e.shiftKey;
}, ft = function(e) {
  return q(e) && e.shiftKey;
}, ve = function(e) {
  return setTimeout(e, 0);
}, be = function(e, t) {
  var a = -1;
  return e.every(function(u, s) {
    return t(u) ? (a = s, !1) : !0;
  }), a;
}, j = function(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
    a[u - 1] = arguments[u];
  return typeof e == "function" ? e.apply(void 0, a) : e;
}, G = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, vt = [], bt = function(e, t) {
  var a = (t == null ? void 0 : t.document) || document, u = (t == null ? void 0 : t.trapStack) || vt, s = de({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: dt,
    isKeyBackward: ft
  }, t), r = {
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
  }, d, c = function(i, n, l) {
    return i && i[n] !== void 0 ? i[n] : s[l || n];
  }, h = function(i, n) {
    var l = typeof (n == null ? void 0 : n.composedPath) == "function" ? n.composedPath() : void 0;
    return r.containerGroups.findIndex(function(v) {
      var b = v.container, g = v.tabbableNodes;
      return b.contains(i) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (l == null ? void 0 : l.includes(b)) || g.find(function(y) {
        return y === i;
      });
    });
  }, N = function(i) {
    var n = s[i];
    if (typeof n == "function") {
      for (var l = arguments.length, v = new Array(l > 1 ? l - 1 : 0), b = 1; b < l; b++)
        v[b - 1] = arguments[b];
      n = n.apply(void 0, v);
    }
    if (n === !0 && (n = void 0), !n) {
      if (n === void 0 || n === !1)
        return n;
      throw new Error("`".concat(i, "` was specified but was not a node, or did not return a node"));
    }
    var g = n;
    if (typeof n == "string" && (g = a.querySelector(n), !g))
      throw new Error("`".concat(i, "` as selector refers to no known node"));
    return g;
  }, f = function() {
    var i = N("initialFocus");
    if (i === !1)
      return !1;
    if (i === void 0 || !J(i, s.tabbableOptions))
      if (h(a.activeElement) >= 0)
        i = a.activeElement;
      else {
        var n = r.tabbableGroups[0], l = n && n.firstTabbableNode;
        i = l || N("fallbackFocus");
      }
    if (!i)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return i;
  }, m = function() {
    if (r.containerGroups = r.containers.map(function(i) {
      var n = rt(i, s.tabbableOptions), l = nt(i, s.tabbableOptions), v = n.length > 0 ? n[0] : void 0, b = n.length > 0 ? n[n.length - 1] : void 0, g = l.find(function(T) {
        return x(T);
      }), y = l.slice().reverse().find(function(T) {
        return x(T);
      }), E = !!n.find(function(T) {
        return O(T) > 0;
      });
      return {
        container: i,
        tabbableNodes: n,
        focusableNodes: l,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: E,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: v,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: b,
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
        nextTabbableNode: function(R) {
          var K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, k = n.indexOf(R);
          return k < 0 ? K ? l.slice(l.indexOf(R) + 1).find(function(M) {
            return x(M);
          }) : l.slice(0, l.indexOf(R)).reverse().find(function(M) {
            return x(M);
          }) : n[k + (K ? 1 : -1)];
        }
      };
    }), r.tabbableGroups = r.containerGroups.filter(function(i) {
      return i.tabbableNodes.length > 0;
    }), r.tabbableGroups.length <= 0 && !N("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (r.containerGroups.find(function(i) {
      return i.posTabIndexesFound;
    }) && r.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, S = function p(i) {
    var n = i.activeElement;
    if (n)
      return n.shadowRoot && n.shadowRoot.activeElement !== null ? p(n.shadowRoot) : n;
  }, F = function p(i) {
    if (i !== !1 && i !== S(document)) {
      if (!i || !i.focus) {
        p(f());
        return;
      }
      i.focus({
        preventScroll: !!s.preventScroll
      }), r.mostRecentlyFocusedNode = i, lt(i) && i.select();
    }
  }, D = function(i) {
    var n = N("setReturnFocus", i);
    return n || (n === !1 ? !1 : i);
  }, w = function(i) {
    var n = i.target, l = i.event, v = i.isBackward, b = v === void 0 ? !1 : v;
    n = n || G(l), m();
    var g = null;
    if (r.tabbableGroups.length > 0) {
      var y = h(n, l), E = y >= 0 ? r.containerGroups[y] : void 0;
      if (y < 0)
        b ? g = r.tabbableGroups[r.tabbableGroups.length - 1].lastTabbableNode : g = r.tabbableGroups[0].firstTabbableNode;
      else if (b) {
        var T = be(r.tabbableGroups, function(Z) {
          var X = Z.firstTabbableNode;
          return n === X;
        });
        if (T < 0 && (E.container === n || J(n, s.tabbableOptions) && !x(n, s.tabbableOptions) && !E.nextTabbableNode(n, !1)) && (T = y), T >= 0) {
          var R = T === 0 ? r.tabbableGroups.length - 1 : T - 1, K = r.tabbableGroups[R];
          g = O(n) >= 0 ? K.lastTabbableNode : K.lastDomTabbableNode;
        } else
          q(l) || (g = E.nextTabbableNode(n, !1));
      } else {
        var k = be(r.tabbableGroups, function(Z) {
          var X = Z.lastTabbableNode;
          return n === X;
        });
        if (k < 0 && (E.container === n || J(n, s.tabbableOptions) && !x(n, s.tabbableOptions) && !E.nextTabbableNode(n)) && (k = y), k >= 0) {
          var M = k === r.tabbableGroups.length - 1 ? 0 : k + 1, ue = r.tabbableGroups[M];
          g = O(n) >= 0 ? ue.firstTabbableNode : ue.firstDomTabbableNode;
        } else
          q(l) || (g = E.nextTabbableNode(n));
      }
    } else
      g = N("fallbackFocus");
    return g;
  }, B = function(i) {
    var n = G(i);
    if (!(h(n, i) >= 0)) {
      if (j(s.clickOutsideDeactivates, i)) {
        d.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: s.returnFocusOnDeactivate
        });
        return;
      }
      j(s.allowOutsideClick, i) || i.preventDefault();
    }
  }, ae = function(i) {
    var n = G(i), l = h(n, i) >= 0;
    if (l || n instanceof Document)
      l && (r.mostRecentlyFocusedNode = n);
    else {
      i.stopImmediatePropagation();
      var v, b = !0;
      if (r.mostRecentlyFocusedNode)
        if (O(r.mostRecentlyFocusedNode) > 0) {
          var g = h(r.mostRecentlyFocusedNode), y = r.containerGroups[g].tabbableNodes;
          if (y.length > 0) {
            var E = y.findIndex(function(T) {
              return T === r.mostRecentlyFocusedNode;
            });
            E >= 0 && (s.isKeyForward(r.recentNavEvent) ? E + 1 < y.length && (v = y[E + 1], b = !1) : E - 1 >= 0 && (v = y[E - 1], b = !1));
          }
        } else
          r.containerGroups.some(function(T) {
            return T.tabbableNodes.some(function(R) {
              return O(R) > 0;
            });
          }) || (b = !1);
      else
        b = !1;
      b && (v = w({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: r.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(r.recentNavEvent)
      })), F(v || r.mostRecentlyFocusedNode || f());
    }
    r.recentNavEvent = void 0;
  }, Se = function(i) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    r.recentNavEvent = i;
    var l = w({
      event: i,
      isBackward: n
    });
    l && (q(i) && i.preventDefault(), F(l));
  }, re = function(i) {
    if (ct(i) && j(s.escapeDeactivates, i) !== !1) {
      i.preventDefault(), d.deactivate();
      return;
    }
    (s.isKeyForward(i) || s.isKeyBackward(i)) && Se(i, s.isKeyBackward(i));
  }, ne = function(i) {
    var n = G(i);
    h(n, i) >= 0 || j(s.clickOutsideDeactivates, i) || j(s.allowOutsideClick, i) || (i.preventDefault(), i.stopImmediatePropagation());
  }, ie = function() {
    if (r.active)
      return fe.activateTrap(u, d), r.delayInitialFocusTimer = s.delayInitialFocus ? ve(function() {
        F(f());
      }) : F(f()), a.addEventListener("focusin", ae, !0), a.addEventListener("mousedown", B, {
        capture: !0,
        passive: !1
      }), a.addEventListener("touchstart", B, {
        capture: !0,
        passive: !1
      }), a.addEventListener("click", ne, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", re, {
        capture: !0,
        passive: !1
      }), d;
  }, oe = function() {
    if (r.active)
      return a.removeEventListener("focusin", ae, !0), a.removeEventListener("mousedown", B, !0), a.removeEventListener("touchstart", B, !0), a.removeEventListener("click", ne, !0), a.removeEventListener("keydown", re, !0), d;
  }, De = function(i) {
    var n = i.some(function(l) {
      var v = Array.from(l.removedNodes);
      return v.some(function(b) {
        return b === r.mostRecentlyFocusedNode;
      });
    });
    n && F(f());
  }, z = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(De) : void 0, L = function() {
    z && (z.disconnect(), r.active && !r.paused && r.containers.map(function(i) {
      z.observe(i, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return d = {
    get active() {
      return r.active;
    },
    get paused() {
      return r.paused;
    },
    activate: function(i) {
      if (r.active)
        return this;
      var n = c(i, "onActivate"), l = c(i, "onPostActivate"), v = c(i, "checkCanFocusTrap");
      v || m(), r.active = !0, r.paused = !1, r.nodeFocusedBeforeActivation = a.activeElement, n == null || n();
      var b = function() {
        v && m(), ie(), L(), l == null || l();
      };
      return v ? (v(r.containers.concat()).then(b, b), this) : (b(), this);
    },
    deactivate: function(i) {
      if (!r.active)
        return this;
      var n = de({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, i);
      clearTimeout(r.delayInitialFocusTimer), r.delayInitialFocusTimer = void 0, oe(), r.active = !1, r.paused = !1, L(), fe.deactivateTrap(u, d);
      var l = c(n, "onDeactivate"), v = c(n, "onPostDeactivate"), b = c(n, "checkCanReturnFocus"), g = c(n, "returnFocus", "returnFocusOnDeactivate");
      l == null || l();
      var y = function() {
        ve(function() {
          g && F(D(r.nodeFocusedBeforeActivation)), v == null || v();
        });
      };
      return g && b ? (b(D(r.nodeFocusedBeforeActivation)).then(y, y), this) : (y(), this);
    },
    pause: function(i) {
      if (r.paused || !r.active)
        return this;
      var n = c(i, "onPause"), l = c(i, "onPostPause");
      return r.paused = !0, n == null || n(), oe(), L(), l == null || l(), this;
    },
    unpause: function(i) {
      if (!r.paused || !r.active)
        return this;
      var n = c(i, "onUnpause"), l = c(i, "onPostUnpause");
      return r.paused = !1, n == null || n(), m(), ie(), L(), l == null || l(), this;
    },
    updateContainerElements: function(i) {
      var n = [].concat(i).filter(Boolean);
      return r.containers = n.map(function(l) {
        return typeof l == "string" ? a.querySelector(l) : l;
      }), r.active && m(), L(), this;
    }
  }, d.updateContainerElements(e), d;
};
function pt(o, e = {}) {
  let t;
  const { immediate: a, ...u } = e, s = V(!1), r = V(!1), d = (m) => t && t.activate(m), c = (m) => t && t.deactivate(m), h = () => {
    t && (t.pause(), r.value = !0);
  }, N = () => {
    t && (t.unpause(), r.value = !1);
  }, f = H(() => {
    const m = ee(o);
    return (Array.isArray(m) ? m : [m]).map((S) => {
      const F = ee(S);
      return typeof F == "string" ? F : $e(F);
    }).filter(Ge);
  });
  return pe(
    f,
    (m) => {
      m.length && (t = bt(m, {
        ...u,
        onActivate() {
          s.value = !0, e.onActivate && e.onActivate();
        },
        onDeactivate() {
          s.value = !1, e.onDeactivate && e.onDeactivate();
        }
      }), a && d());
    },
    { flush: "post" }
  ), qe(() => c()), {
    hasFocus: s,
    isPaused: r,
    activate: d,
    deactivate: c,
    pause: h,
    unpause: N
  };
}
const Ee = Symbol(), ht = /* @__PURE__ */ he({
  __name: "QuesoModalOverlay",
  setup(o) {
    const { closeModal: e } = Oe(Ee);
    return (t, a) => (_(), me("div", {
      class: "queso-modal__overlay",
      onClick: a[0] || (a[0] = //@ts-ignore
      (...u) => $(e) && $(e)(...u))
    }));
  }
}), mt = ["aria-expanded"], gt = { class: "queso-modal__content" }, Nt = /* @__PURE__ */ he({
  __name: "QuesoModal",
  props: {
    hasOverlay: { type: Boolean, default: !0 },
    isScrollLocked: { type: Boolean, default: !0 }
  },
  emits: ["modal:open", "modal:close"],
  setup(o, { expose: e, emit: t }) {
    const a = o, u = t, s = V(null), { activate: r, deactivate: d } = pt(s), c = [
      "a[href]",
      "area[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "iframe",
      "object",
      "embed",
      '[tabindex]:not([tabindex="-1"])',
      "[contenteditable]"
    ], h = H(() => s.value === null ? !1 : c.some((w) => s.value.querySelector(w) !== null)), N = (w) => {
      h.value && (w ? r() : d());
    }, f = V(!1), m = () => {
      f.value = !0;
    }, S = () => {
      f.value = !1;
    };
    Pe(Ee, { openModal: m, closeModal: S });
    const F = (w = !0) => {
      a.isScrollLocked && (document.documentElement.style.overflow = w ? "hidden" : "");
    };
    pe(f, (w) => {
      w ? (N(!0), F(!0), u("modal:open")) : (N(!1), F(!1), u("modal:close"));
    }), Ce(() => {
      f.value && (N(!0), F(!0));
    }), je("Escape", () => {
      f.value && (f.value = !1);
    });
    const D = Ae({
      // States
      isModalOpen: f,
      // Methods
      openModal: m,
      closeModal: S
    });
    return e({
      isModalOpen: H(() => f.value),
      openModal: m,
      closeModal: S
    }), (w, B) => (_(), me(Ie, null, [
      C(w.$slots, "trigger", A(I(D))),
      (_(), xe(Be, { to: "body" }, [
        se("div", Le({
          ref_key: "modalContainer",
          ref: s,
          class: ["queso-modal", { "is-modal-open": f.value }],
          "aria-expanded": f.value
        }, w.$attrs), [
          C(w.$slots, "beforeContent", A(I(D))),
          se("div", gt, [
            C(w.$slots, "content", A(I(D)), () => [
              C(w.$slots, "default", A(I(D)))
            ])
          ]),
          C(w.$slots, "afterContent", A(I(D))),
          o.hasOverlay ? C(w.$slots, "overlay", A(I(D)), () => [
            Ke($(ht))
          ], void 0, 0) : Me("", !0)
        ], 16, mt)
      ]))
    ], 64));
  }
});
export {
  Nt as _
};
