import { getCurrentScope as Ee, onScopeDispose as Se, unref as j, ref as M, computed as de, watch as fe, defineComponent as ve, inject as De, openBlock as be, createElementBlock as ke, onMounted as Re, provide as Ce, createBlock as Pe, Teleport as Oe, createElementVNode as ne, mergeProps as Ae, renderSlot as L, createVNode as Ie } from "vue";
import { a as xe } from "./QuesoCollapsible-BV0Q2a-x.js";
import '../assets/components/QuesoModal.css';function Be(o) {
  return Ee() ? (Se(o), !0) : !1;
}
function Z(o) {
  return typeof o == "function" ? o() : j(o);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Le = (o) => o != null;
function Ke(o) {
  var e;
  const t = Z(o);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var pe = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], q = /* @__PURE__ */ pe.join(","), he = typeof Element > "u", R = he ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, G = !he && Element.prototype.getRootNode ? function(o) {
  var e;
  return o == null || (e = o.getRootNode) === null || e === void 0 ? void 0 : e.call(o);
} : function(o) {
  return o == null ? void 0 : o.ownerDocument;
}, U = function o(e, t) {
  var a;
  t === void 0 && (t = !0);
  var u = e == null || (a = e.getAttribute) === null || a === void 0 ? void 0 : a.call(e, "inert"), s = u === "" || u === "true", r = s || t && e && o(e.parentNode);
  return r;
}, je = function(e) {
  var t, a = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
  return a === "" || a === "true";
}, me = function(e, t, a) {
  if (U(e))
    return [];
  var u = Array.prototype.slice.apply(e.querySelectorAll(q));
  return t && R.call(e, q) && u.unshift(e), u = u.filter(a), u;
}, ge = function o(e, t, a) {
  for (var u = [], s = Array.from(e); s.length; ) {
    var r = s.shift();
    if (!U(r, !1))
      if (r.tagName === "SLOT") {
        var d = r.assignedElements(), c = d.length ? d : r.children, b = o(c, !0, a);
        a.flatten ? u.push.apply(u, b) : u.push({
          scopeParent: r,
          candidates: b
        });
      } else {
        var m = R.call(r, q);
        m && a.filter(r) && (t || !e.includes(r)) && u.push(r);
        var w = r.shadowRoot || // check for an undisclosed shadow
        typeof a.getShadowRoot == "function" && a.getShadowRoot(r), y = !U(w, !1) && (!a.shadowRootFilter || a.shadowRootFilter(r));
        if (w && y) {
          var E = o(w === !0 ? r.children : w.children, !0, a);
          a.flatten ? u.push.apply(u, E) : u.push({
            scopeParent: r,
            candidates: E
          });
        } else
          s.unshift.apply(s, r.children);
      }
  }
  return u;
}, ye = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, k = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || je(e)) && !ye(e) ? 0 : e.tabIndex;
}, Me = function(e, t) {
  var a = k(e);
  return a < 0 && t && !ye(e) ? 0 : a;
}, qe = function(e, t) {
  return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, we = function(e) {
  return e.tagName === "INPUT";
}, Ge = function(e) {
  return we(e) && e.type === "hidden";
}, Ue = function(e) {
  var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(a) {
    return a.tagName === "SUMMARY";
  });
  return t;
}, Ve = function(e, t) {
  for (var a = 0; a < e.length; a++)
    if (e[a].checked && e[a].form === t)
      return e[a];
}, $e = function(e) {
  if (!e.name)
    return !0;
  var t = e.form || G(e), a = function(d) {
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
  var s = Ve(u, e.form);
  return !s || s === e;
}, We = function(e) {
  return we(e) && e.type === "radio";
}, _e = function(e) {
  return We(e) && !$e(e);
}, Qe = function(e) {
  var t, a = e && G(e), u = (t = a) === null || t === void 0 ? void 0 : t.host, s = !1;
  if (a && a !== e) {
    var r, d, c;
    for (s = !!((r = u) !== null && r !== void 0 && (d = r.ownerDocument) !== null && d !== void 0 && d.contains(u) || e != null && (c = e.ownerDocument) !== null && c !== void 0 && c.contains(e)); !s && u; ) {
      var b, m, w;
      a = G(u), u = (b = a) === null || b === void 0 ? void 0 : b.host, s = !!((m = u) !== null && m !== void 0 && (w = m.ownerDocument) !== null && w !== void 0 && w.contains(u));
    }
  }
  return s;
}, ie = function(e) {
  var t = e.getBoundingClientRect(), a = t.width, u = t.height;
  return a === 0 && u === 0;
}, Ye = function(e, t) {
  var a = t.displayCheck, u = t.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var s = R.call(e, "details>summary:first-of-type"), r = s ? e.parentElement : e;
  if (R.call(r, "details:not([open]) *"))
    return !0;
  if (!a || a === "full" || a === "legacy-full") {
    if (typeof u == "function") {
      for (var d = e; e; ) {
        var c = e.parentElement, b = G(e);
        if (c && !c.shadowRoot && u(c) === !0)
          return ie(e);
        e.assignedSlot ? e = e.assignedSlot : !c && b !== e.ownerDocument ? e = b.host : e = c;
      }
      e = d;
    }
    if (Qe(e))
      return !e.getClientRects().length;
    if (a !== "legacy-full")
      return !0;
  } else if (a === "non-zero-area")
    return ie(e);
  return !1;
}, Ze = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var t = e.parentElement; t; ) {
      if (t.tagName === "FIELDSET" && t.disabled) {
        for (var a = 0; a < t.children.length; a++) {
          var u = t.children.item(a);
          if (u.tagName === "LEGEND")
            return R.call(t, "fieldset[disabled] *") ? !0 : !u.contains(e);
        }
        return !0;
      }
      t = t.parentElement;
    }
  return !1;
}, V = function(e, t) {
  return !(t.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  U(t) || Ge(t) || Ye(t, e) || // For a details element with a summary, the summary element gets the focus
  Ue(t) || Ze(t));
}, z = function(e, t) {
  return !(_e(t) || k(t) < 0 || !V(e, t));
}, ze = function(e) {
  var t = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(t) || t >= 0);
}, Xe = function o(e) {
  var t = [], a = [];
  return e.forEach(function(u, s) {
    var r = !!u.scopeParent, d = r ? u.scopeParent : u, c = Me(d, r), b = r ? o(u.candidates) : d;
    c === 0 ? r ? t.push.apply(t, b) : t.push(d) : a.push({
      documentOrder: s,
      tabIndex: c,
      item: u,
      isScope: r,
      content: b
    });
  }), a.sort(qe).reduce(function(u, s) {
    return s.isScope ? u.push.apply(u, s.content) : u.push(s.content), u;
  }, []).concat(t);
}, Je = function(e, t) {
  t = t || {};
  var a;
  return t.getShadowRoot ? a = ge([e], t.includeContainer, {
    filter: z.bind(null, t),
    flatten: !1,
    getShadowRoot: t.getShadowRoot,
    shadowRootFilter: ze
  }) : a = me(e, t.includeContainer, z.bind(null, t)), Xe(a);
}, He = function(e, t) {
  t = t || {};
  var a;
  return t.getShadowRoot ? a = ge([e], t.includeContainer, {
    filter: V.bind(null, t),
    flatten: !0,
    getShadowRoot: t.getShadowRoot
  }) : a = me(e, t.includeContainer, V.bind(null, t)), a;
}, C = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return R.call(e, q) === !1 ? !1 : z(t, e);
}, et = /* @__PURE__ */ pe.concat("iframe").join(","), Y = function(e, t) {
  if (t = t || {}, !e)
    throw new Error("No node provided");
  return R.call(e, et) === !1 ? !1 : V(t, e);
};
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function oe(o, e) {
  var t = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(o);
    e && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(o, u).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function ue(o) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? oe(Object(t), !0).forEach(function(a) {
      tt(o, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : oe(Object(t)).forEach(function(a) {
      Object.defineProperty(o, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return o;
}
function tt(o, e, t) {
  return e = rt(e), e in o ? Object.defineProperty(o, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[e] = t, o;
}
function at(o, e) {
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
function rt(o) {
  var e = at(o, "string");
  return typeof e == "symbol" ? e : String(e);
}
var se = {
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
}, nt = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, it = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, x = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, ot = function(e) {
  return x(e) && !e.shiftKey;
}, ut = function(e) {
  return x(e) && e.shiftKey;
}, le = function(e) {
  return setTimeout(e, 0);
}, ce = function(e, t) {
  var a = -1;
  return e.every(function(u, s) {
    return t(u) ? (a = s, !1) : !0;
  }), a;
}, I = function(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
    a[u - 1] = arguments[u];
  return typeof e == "function" ? e.apply(void 0, a) : e;
}, K = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, st = [], lt = function(e, t) {
  var a = (t == null ? void 0 : t.document) || document, u = (t == null ? void 0 : t.trapStack) || st, s = ue({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: ot,
    isKeyBackward: ut
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
  }, b = function(i, n) {
    var l = typeof (n == null ? void 0 : n.composedPath) == "function" ? n.composedPath() : void 0;
    return r.containerGroups.findIndex(function(f) {
      var v = f.container, g = f.tabbableNodes;
      return v.contains(i) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (l == null ? void 0 : l.includes(v)) || g.find(function(N) {
        return N === i;
      });
    });
  }, m = function(i) {
    var n = s[i];
    if (typeof n == "function") {
      for (var l = arguments.length, f = new Array(l > 1 ? l - 1 : 0), v = 1; v < l; v++)
        f[v - 1] = arguments[v];
      n = n.apply(void 0, f);
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
  }, w = function() {
    var i = m("initialFocus");
    if (i === !1)
      return !1;
    if (i === void 0 || !Y(i, s.tabbableOptions))
      if (b(a.activeElement) >= 0)
        i = a.activeElement;
      else {
        var n = r.tabbableGroups[0], l = n && n.firstTabbableNode;
        i = l || m("fallbackFocus");
      }
    if (!i)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return i;
  }, y = function() {
    if (r.containerGroups = r.containers.map(function(i) {
      var n = Je(i, s.tabbableOptions), l = He(i, s.tabbableOptions), f = n.length > 0 ? n[0] : void 0, v = n.length > 0 ? n[n.length - 1] : void 0, g = l.find(function(T) {
        return C(T);
      }), N = l.slice().reverse().find(function(T) {
        return C(T);
      }), F = !!n.find(function(T) {
        return k(T) > 0;
      });
      return {
        container: i,
        tabbableNodes: n,
        focusableNodes: l,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: F,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: f,
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
        lastDomTabbableNode: N,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(D) {
          var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, S = n.indexOf(D);
          return S < 0 ? O ? l.slice(l.indexOf(D) + 1).find(function(A) {
            return C(A);
          }) : l.slice(0, l.indexOf(D)).reverse().find(function(A) {
            return C(A);
          }) : n[S + (O ? 1 : -1)];
        }
      };
    }), r.tabbableGroups = r.containerGroups.filter(function(i) {
      return i.tabbableNodes.length > 0;
    }), r.tabbableGroups.length <= 0 && !m("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (r.containerGroups.find(function(i) {
      return i.posTabIndexesFound;
    }) && r.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, E = function h(i) {
    var n = i.activeElement;
    if (n)
      return n.shadowRoot && n.shadowRoot.activeElement !== null ? h(n.shadowRoot) : n;
  }, p = function h(i) {
    if (i !== !1 && i !== E(document)) {
      if (!i || !i.focus) {
        h(w());
        return;
      }
      i.focus({
        preventScroll: !!s.preventScroll
      }), r.mostRecentlyFocusedNode = i, nt(i) && i.select();
    }
  }, $ = function(i) {
    var n = m("setReturnFocus", i);
    return n || (n === !1 ? !1 : i);
  }, X = function(i) {
    var n = i.target, l = i.event, f = i.isBackward, v = f === void 0 ? !1 : f;
    n = n || K(l), y();
    var g = null;
    if (r.tabbableGroups.length > 0) {
      var N = b(n, l), F = N >= 0 ? r.containerGroups[N] : void 0;
      if (N < 0)
        v ? g = r.tabbableGroups[r.tabbableGroups.length - 1].lastTabbableNode : g = r.tabbableGroups[0].firstTabbableNode;
      else if (v) {
        var T = ce(r.tabbableGroups, function(_) {
          var Q = _.firstTabbableNode;
          return n === Q;
        });
        if (T < 0 && (F.container === n || Y(n, s.tabbableOptions) && !C(n, s.tabbableOptions) && !F.nextTabbableNode(n, !1)) && (T = N), T >= 0) {
          var D = T === 0 ? r.tabbableGroups.length - 1 : T - 1, O = r.tabbableGroups[D];
          g = k(n) >= 0 ? O.lastTabbableNode : O.lastDomTabbableNode;
        } else
          x(l) || (g = F.nextTabbableNode(n, !1));
      } else {
        var S = ce(r.tabbableGroups, function(_) {
          var Q = _.lastTabbableNode;
          return n === Q;
        });
        if (S < 0 && (F.container === n || Y(n, s.tabbableOptions) && !C(n, s.tabbableOptions) && !F.nextTabbableNode(n)) && (S = N), S >= 0) {
          var A = S === r.tabbableGroups.length - 1 ? 0 : S + 1, re = r.tabbableGroups[A];
          g = k(n) >= 0 ? re.firstTabbableNode : re.firstDomTabbableNode;
        } else
          x(l) || (g = F.nextTabbableNode(n));
      }
    } else
      g = m("fallbackFocus");
    return g;
  }, B = function(i) {
    var n = K(i);
    if (!(b(n, i) >= 0)) {
      if (I(s.clickOutsideDeactivates, i)) {
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
      I(s.allowOutsideClick, i) || i.preventDefault();
    }
  }, J = function(i) {
    var n = K(i), l = b(n, i) >= 0;
    if (l || n instanceof Document)
      l && (r.mostRecentlyFocusedNode = n);
    else {
      i.stopImmediatePropagation();
      var f, v = !0;
      if (r.mostRecentlyFocusedNode)
        if (k(r.mostRecentlyFocusedNode) > 0) {
          var g = b(r.mostRecentlyFocusedNode), N = r.containerGroups[g].tabbableNodes;
          if (N.length > 0) {
            var F = N.findIndex(function(T) {
              return T === r.mostRecentlyFocusedNode;
            });
            F >= 0 && (s.isKeyForward(r.recentNavEvent) ? F + 1 < N.length && (f = N[F + 1], v = !1) : F - 1 >= 0 && (f = N[F - 1], v = !1));
          }
        } else
          r.containerGroups.some(function(T) {
            return T.tabbableNodes.some(function(D) {
              return k(D) > 0;
            });
          }) || (v = !1);
      else
        v = !1;
      v && (f = X({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: r.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(r.recentNavEvent)
      })), p(f || r.mostRecentlyFocusedNode || w());
    }
    r.recentNavEvent = void 0;
  }, Te = function(i) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    r.recentNavEvent = i;
    var l = X({
      event: i,
      isBackward: n
    });
    l && (x(i) && i.preventDefault(), p(l));
  }, H = function(i) {
    if (it(i) && I(s.escapeDeactivates, i) !== !1) {
      i.preventDefault(), d.deactivate();
      return;
    }
    (s.isKeyForward(i) || s.isKeyBackward(i)) && Te(i, s.isKeyBackward(i));
  }, ee = function(i) {
    var n = K(i);
    b(n, i) >= 0 || I(s.clickOutsideDeactivates, i) || I(s.allowOutsideClick, i) || (i.preventDefault(), i.stopImmediatePropagation());
  }, te = function() {
    if (r.active)
      return se.activateTrap(u, d), r.delayInitialFocusTimer = s.delayInitialFocus ? le(function() {
        p(w());
      }) : p(w()), a.addEventListener("focusin", J, !0), a.addEventListener("mousedown", B, {
        capture: !0,
        passive: !1
      }), a.addEventListener("touchstart", B, {
        capture: !0,
        passive: !1
      }), a.addEventListener("click", ee, {
        capture: !0,
        passive: !1
      }), a.addEventListener("keydown", H, {
        capture: !0,
        passive: !1
      }), d;
  }, ae = function() {
    if (r.active)
      return a.removeEventListener("focusin", J, !0), a.removeEventListener("mousedown", B, !0), a.removeEventListener("touchstart", B, !0), a.removeEventListener("click", ee, !0), a.removeEventListener("keydown", H, !0), d;
  }, Fe = function(i) {
    var n = i.some(function(l) {
      var f = Array.from(l.removedNodes);
      return f.some(function(v) {
        return v === r.mostRecentlyFocusedNode;
      });
    });
    n && p(w());
  }, W = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Fe) : void 0, P = function() {
    W && (W.disconnect(), r.active && !r.paused && r.containers.map(function(i) {
      W.observe(i, {
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
      var n = c(i, "onActivate"), l = c(i, "onPostActivate"), f = c(i, "checkCanFocusTrap");
      f || y(), r.active = !0, r.paused = !1, r.nodeFocusedBeforeActivation = a.activeElement, n == null || n();
      var v = function() {
        f && y(), te(), P(), l == null || l();
      };
      return f ? (f(r.containers.concat()).then(v, v), this) : (v(), this);
    },
    deactivate: function(i) {
      if (!r.active)
        return this;
      var n = ue({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, i);
      clearTimeout(r.delayInitialFocusTimer), r.delayInitialFocusTimer = void 0, ae(), r.active = !1, r.paused = !1, P(), se.deactivateTrap(u, d);
      var l = c(n, "onDeactivate"), f = c(n, "onPostDeactivate"), v = c(n, "checkCanReturnFocus"), g = c(n, "returnFocus", "returnFocusOnDeactivate");
      l == null || l();
      var N = function() {
        le(function() {
          g && p($(r.nodeFocusedBeforeActivation)), f == null || f();
        });
      };
      return g && v ? (v($(r.nodeFocusedBeforeActivation)).then(N, N), this) : (N(), this);
    },
    pause: function(i) {
      if (r.paused || !r.active)
        return this;
      var n = c(i, "onPause"), l = c(i, "onPostPause");
      return r.paused = !0, n == null || n(), ae(), P(), l == null || l(), this;
    },
    unpause: function(i) {
      if (!r.paused || !r.active)
        return this;
      var n = c(i, "onUnpause"), l = c(i, "onPostUnpause");
      return r.paused = !1, n == null || n(), y(), te(), P(), l == null || l(), this;
    },
    updateContainerElements: function(i) {
      var n = [].concat(i).filter(Boolean);
      return r.containers = n.map(function(l) {
        return typeof l == "string" ? a.querySelector(l) : l;
      }), r.active && y(), P(), this;
    }
  }, d.updateContainerElements(e), d;
};
function ct(o, e = {}) {
  let t;
  const { immediate: a, ...u } = e, s = M(!1), r = M(!1), d = (y) => t && t.activate(y), c = (y) => t && t.deactivate(y), b = () => {
    t && (t.pause(), r.value = !0);
  }, m = () => {
    t && (t.unpause(), r.value = !1);
  }, w = de(() => {
    const y = Z(o);
    return (Array.isArray(y) ? y : [y]).map((E) => {
      const p = Z(E);
      return typeof p == "string" ? p : Ke(p);
    }).filter(Le);
  });
  return fe(
    w,
    (y) => {
      y.length && (t = lt(y, {
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
  ), Be(() => c()), {
    hasFocus: s,
    isPaused: r,
    activate: d,
    deactivate: c,
    pause: b,
    unpause: m
  };
}
const Ne = Symbol(), dt = /* @__PURE__ */ ve({
  __name: "QuesoModalOverlay",
  setup(o) {
    const e = De(Ne), t = e == null ? void 0 : e.close;
    return (a, u) => (be(), ke("div", {
      class: "queso-modal__overlay",
      onClick: u[0] || (u[0] = //@ts-ignore
      (...s) => j(t) && j(t)(...s))
    }));
  }
}), ft = ["aria-expanded"], vt = { class: "queso-modal__content" }, ht = /* @__PURE__ */ ve({
  __name: "QuesoModal",
  emits: ["modal:open", "modal:close"],
  setup(o, { expose: e, emit: t }) {
    const a = t, u = M(null), { activate: s, deactivate: r } = ct(u), d = [
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
    ], c = de(() => u.value === null ? !1 : d.some((p) => u.value.querySelector(p) !== null)), b = (p) => {
      c.value && (p ? s() : r());
    }, m = M(!1), w = () => {
      m.value = !0;
    }, y = () => {
      m.value = !1;
    }, E = (p = !0) => {
      document.documentElement.style.overflow = p ? "hidden" : "";
    };
    return fe(m, (p) => {
      p ? (b(!0), E(!0), a("modal:open")) : (b(!1), E(!1), a("modal:close"));
    }), Re(() => {
      m.value && (b(!0), E(!0));
    }), xe("Escape", () => {
      m.value && (m.value = !1);
    }), Ce(Ne, { open: w, close: y }), e({ isModalOpen: m, open: w, close: y }), (p, $) => (be(), Pe(Oe, { to: "body" }, [
      ne("div", Ae({
        ref_key: "modalContainer",
        ref: u,
        class: ["queso-modal", { "is-modal-open": m.value }],
        "aria-expanded": m.value
      }, p.$attrs), [
        L(p.$slots, "beforeContent"),
        ne("div", vt, [
          L(p.$slots, "default")
        ]),
        L(p.$slots, "afterContent"),
        L(p.$slots, "overlay", {}, () => [
          Ie(j(dt))
        ])
      ], 16, ft)
    ]));
  }
});
export {
  ht as _
};
