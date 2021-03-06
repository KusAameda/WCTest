(function(b, d, j, a, f, g) {
    b[g] = b[g] || {};
    (function() { var o; var n = function() {}; var l = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"]; var m = l.length; var k = (b.console = b.console || {}); while (m--) { o = l[m]; if (!k[o]) { k[o] = n } } }());
    var e = "tm",
        i = e + "script";
    var h = function(k, l) {
        return function() {
            try {
                if (0 < l.length) {
                    var s = l.shift(),
                        q = h(k, l);
                    var p = "text/" + i,
                        t = e + "src",
                        o = "data-" + t;
                    if ("script" == j.tagName(s) && p === s.type) {
                        var m = d.createElement("script");
                        m.type = "text/javascript";
                        m.id = s.id;
                        m.text = s.text || s.textContent || s.innerHTML || "";
                        m.async = false;
                        if (s.charset) { m.charset = v }
                        j.run(s.getAttribute(t) || s.getAttribute(o), function(u) {
                            m.src = u;
                            c(m, q);
                            k.insertBefore(m, null);
                            q()
                        }, function(u) {
                            k.insertBefore(m, null);
                            q()
                        })
                    } else {
                        if (s.innerHTML && /[<]script.*?[>]/g.test(s.innerHTML)) {
                            var n = j.elmsByHtml(s.innerHTML);
                            s.innerHTML = "";
                            k.insertBefore(s, null);
                            h(s, n)()
                        } else {
                            k.insertBefore(s, null);
                            q()
                        }
                    }
                }
            } catch (r) { q && q() }
        }
    };
    var c = function(k, l) {
        j.run(k.addEventListener, function() { k.onload = l }, function() {
            k.onreadystatechange = function() {
                var m = k.readyState;
                j.run(m in { loaded: 1, complete: 1 }, function() {
                    k.onreadystatechange = null;
                    l()
                })
            }
        })
    };
    tmDataLayer.get = function(q, n) {
        var p = this,
            m = [],
            t = [],
            r = "function" === j.callType(n);
        if (!q) { return p }
        for (var l = 0, s;
            (s = p[l++]);) { s.key === q && m.push(s) }
        if (!r) { return m }
        for (var k = 0, o; o = m[k++];) { n(o, k - 1) && t.push(o) }
        return t
    };
    j.run("release" === f, function() {
        var p = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(A) {
                    var z = Math.random() * 16 | 0,
                        y = A == "x" ? z : (z & 3 | 8);
                    return y.toString(16)
                })
            },
            u = function() { if (b.addEventListener) { return false } return true },
            s = function(y) {
                if (y.documentWrite) {
                    var A = d.createElement("div");
                    A.style.display = "none";
                    A.style.visibility = "hidden";
                    var z = A.ownerDocument;
                    z.body.appendChild(A);
                    j.postscribe(A, y.code, null, function(B) {
                        B.style.display = "block";
                        B.style.visibility = "visible"
                    })
                } else { h(k, j.elmsByHtml(j.replaceForDataLayer(y.code)))() }
            },
            m = function(K, J, B) {
                var C = true,
                    y = location.href,
                    D = false,
                    H = p();
                for (var E = 0, G;
                    (G = K.tagConditions.rules[E++]);) {
                    if (G.ruleField === "pageUrl") {
                        var z = G.ruleOperator === "un_contain" ? "^((?!" + G.ruleWord + ").)*$" : G.ruleWord;
                        z = new RegExp(z);
                        var F = z.test(y);
                        if (!F) { C = false }
                    }
                }
                var I = function(L, N) {
                    var M = (L.textContent || L.innerText || "").toLowerCase().replace(/[\r\n\t]/g, "");
                    N = (N || "").toLowerCase();
                    N = N.replace(/\\'/, "'").replace(/\\"/, '"');
                    if (M.indexOf(N) > -1) { return L }
                };
                var A = function(M, Q) {
                    var P = [],
                        O = [],
                        L, N;
                    j.each(M.tagConditions.rules, function(R, S) { if (S.ruleField === "selector" || S.ruleField === "idSelector" || S.ruleField === "classSelector") { L = S.ruleWord } if (S.ruleField === "context") { N = S.ruleWord } });
                    O = j.query(L.replace(/[\r\n\t]/g, ""), "array");
                    if (O.length) {
                        j.each(O, function(R, U) {
                            if (I(U, N)) {
                                var T = j.attr(U, q),
                                    S;
                                P.push(U);
                                if (!T) {
                                    D = true;
                                    j.attr(U, q, H)
                                } else {
                                    S = o[T].tagsIndex;
                                    S.join("").indexOf(J) === -1 ? S.push(J) : (P = [])
                                }
                            }
                        });
                        if (Q === "submit" && P.length > 0) { j.evt.ready(function() { j.evt.on(P, Q, function() { B && B.call(null, M) }, true) }) }
                        D && (o[H] = { tagsIndex: [J], callType: Q })
                    }
                };
                if (C) {
                    switch (K.tagConditionType) {
                        case "urlMatcher":
                            B && B.call(null, K);
                            break;
                        case "domClick":
                            A(K, "click");
                            break;
                        case "formSubmit":
                            A(K, "submit");
                            break
                    }
                }
                return C && K.tagConditionType !== "urlMatcher"
            },
            r = function(z, B) { tagsArr = z.tagsIndex; for (var A = 0, y = tagsArr.length; A < y; A++) { B && B.call(null, t[tagsArr[A]]) } },
            n = function(y) {
                var z = y.parentNode,
                    A;
                if (!z || z === d) { return }
                A = j.attr(z, q);
                A && A.type !== "submit" && r(o[A], s);
                n(z)
            },
            o = {},
            q = "data-tmguid";
        if ("object" == j.callType(a) && null != a) {
            var k = j.query("body"),
                x = a.tags || [],
                t = [];
            k = k.length === 0 ? j.query("html") : k;
            for (var l = 0, w;
                (w = x[l++]);) { m(w, t.length, s) && t.push(w) }
            j.evt.ready(function() {
                j.evt.on(u ? d : b, "click", function(B) {
                    if (!B) { B = b.event }
                    var A = B.srcElement || B.target,
                        C = j.attr(A, q);
                    if (!C) {
                        for (var z = 0, y;
                            (y = t[z++]);) { m(y, z - 1, s) }
                        C = j.attr(A, q)
                    }
                    C && C.type !== "submit" && r(o[C], s);
                    n(A)
                })
            })
        }
    })
})(window, document, (function() {
    var b = {},
        c = b;
    var d = Array.prototype,
        a = Object.prototype;
    (function(f, e) {
        f = document;
        if (!f.querySelectorAll) {
            e = f.createStyleSheet();
            f.querySelectorAll = function(l, m, k, h, g) {
                g = f.all, m = [], l = l.replace(/\[for\b/gi, "[htmlFor").split(",");
                for (k = l.length; k--;) {
                    e.addRule(l[k], "k:v");
                    for (h = g.length; h--;) { g[h].currentStyle.k && m.push(g[h]) }
                    e.removeRule(0)
                }
                return m
            };
            f.querySelector = function(l, m, k, h, g) { return f.querySelectorAll(l, m, k, h, g)[0] }
        }
    })();
    b.callType = function(g) { if (null === g || g === void 0) { return String(g) } var f = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/; var e = f.exec(a.toString.call(Object(g))); return e ? e[1].toLowerCase() : "object" };
    b.trim = function(e) { return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") };
    b.query = function(f, g) {
        var e = [];
        e = document.querySelectorAll(f);
        return e.length === 1 && !g ? e[0] : e
    };
    b.noop = function() {};
    b.each = function(k, j, h) { if (k == null) { return } if (k.length === +k.length) { for (var g = 0, e = k.length; g < e; g++) { if (j.call(h, g, k[g], k) == false) { return } } } else { for (var f in k) { if (k.hasOwnProperty(f)) { if (j.call(h, f, k[f], k) == false) { break } } } } };
    b.overlap = function(e, f) { c.each(f, function(g, h) { e[g] = h }); return e };
    b.isFunction = function(e) { return "function" === typeof e };
    b.isExist = function(e) { return e !== void 0 && e !== null };
    b.elmsByHtml = function(h) {
        if ("string" !== b.callType(h)) { return }
        var f = document.createElement("div");
        var e = b.trim(h);
        e = "TA<div>" + e + "</div>";
        f.innerHTML = e;
        f = f.lastChild;
        var g = [],
            i;
        while ((i = f.firstChild)) { g.push(f.removeChild(i)) }
        return g
    };
    b.tagName = function(f) { var e = f.tagName || f.nodeName; return e.toLowerCase() };
    b.addEventListener = function(h, g, f, e) { if (h.addEventListener) { h.addEventListener.call(g, f, !!e) } else { if (h.attachEvent) { h.attachEvent("on" + g, f) } else { h["on" + g] = f } } };
    b.run = function(f, g, e) { if (f) { return g(f) } else { if (e) { return e(f) } } };
    b.attr = function(f, e, g) { if (arguments.length === 2) { var h = f.getAttribute(e); return !b.isExist(h) ? h : String(h) } else { if (b.isExist(g) && g !== "") { f.setAttribute(e, g) } else { f.removeAttribute(e) } } };
    b.addClass = function(l, k) { var j = (l.getAttribute("class") || "").replace(/\s+/gi, " "); var f = j.split(" "); var g = false; for (var h = 0, e; e = f[h++];) { if (e == k) { g = true; break } } if (!g) { l.setAttribute("class", j + " " + k) } };
    b.removeClass = function(g, f) {
        var e = (g.getAttribute("class") || "").replace(new RegExp(f, "g"), "");
        g.setAttribute("class", e)
    };
    b.replaceClass = function(l, k, j) {
        var h = l.getAttribute("class").replace(/\s+/gi, " ");
        var f = h.split(" ");
        for (var g = 0, e; e = f[g++];) { if (e == k) { f[g - 1] = j; break } }
        l.setAttribute("class", f.join(" "))
    };
    b.defaults = function(e, f) {
        e = e || {};
        b.each(f, function(g, h) { if (!b.isExist(e[g])) { e[g] = h } });
        return e
    };
    b.last = function(e) { return e[e.length - 1] };
    b.toArray = function(h) {
        try { return d.slice.call(h) } catch (g) {
            var f = [];
            c.each(h, function(e, i) { f.push(i) });
            return f
        }
    };
    b.isArray = function(e) { return Object.prototype.toString.call(e) === "[object Array]" };
    b.isNodeList = function(e) { return Object.prototype.toString.call(e) === "[object  NodeList]" };
    b.replaceForDataLayer = function(j) {
        var e = j.match(/\${{(.| )+?}}/g),
            g = function(m) {
                var l = m.replace(/[(^\${{})|(}}$)]/g, "").split("."),
                    k = tmDataLayer.get(l[0]),
                    i = k.length;
                if (!i) { return "" }!!l[1] && (k = (k[i - 1])[l[1]] || "");
                return k.toString()
            };
        if (!e) { return j }
        for (var f = 0, h;
            (h = e[f++]);) { j = j.replace(h, g(h)) }
        return j
    };
    b.evt = {
        element: function(l, k) { if ("string" === typeof l) { var h = b.query(l, "array"); for (var f = 0, m; m = h[f++];) { k && k.call(null, m) } } else { if (b.isNodeList(l) || b.isArray(l)) { for (var e = 0, g; g = l[e++];) { k && k.call(null, g) } } else { k && k.call(null, l) } } },
        fix: function(e, f) {
            return function(g) {
                g.target = g.target || g.srcElement || document;
                if (g.target.nodeType === 3) { g.target = g.target.parentNode }
                if (!g.relatedTarget && g.fromElement) { g.relatedTarget = g.fromElement == g.target ? g.toElement : g.fromElement }
                g.stopPropagation = g.stopPropagation || function() { g.cancelBubble = true };
                g.preventDefault = g.preventDefault || function() { g.returnValue = false };
                g.timeStamp = g.timeStamp || +new Date();
                g.which = g.charCode || g.keyCode || 0;
                if (!g.metaKey && g.ctrlKey) { g.mataKey = g.mataKey || g.ctrlKey }
                if (!g.which && g.button !== undefined) { g.which = (g.button & 1 ? 1 : (g.button & 2 ? 3 : (g.button & 4 ? 2 : 0))) }
                e.call(f, g)
            }
        },
        handlerKey: function(f, e) { return ("__handler_" + f + "_" + e.toString() + "__").replace(/\n/gi, "").replace(/\s/gi, "") },
        isIeCustomEvt: function(g, e) { if (document.addEventListener) { return false } for (var f in g) { if (/^on/.test(f)) { if (e === f.toLowerCase()) { return false } } } return true },
        on: function(j, g, f, e) {
            var i = this,
                h = "on" + g.toLowerCase(),
                k = i.handlerKey(g, f);
            e = e || false;
            i.element(j, function(m) {
                if (m.nodeType == 3 || m.nodeType == 8) { return }
                var l = i.isIeCustomEvt(m, h);
                f = i.fix(f, m);
                if (m[k] && !e) { return }
                if (l) { f = function(n) { var o = "custom" + g; if (n.propertyName === o) { f.call(m, n) } } }
                m[k] = f;
                if (m.addEventListener) { m.addEventListener(g, f, false) } else { if (m.attachEvent) { m.attachEvent(l ? "onpropertychange" : h, f) } else { m[h] = f } }
            })
        },
        off: function(i, f, e) {
            var h = this;
            var g = "on" + f.toLowerCase(),
                j = h.handlerKey(f, e);
            h.element(i, function(k) {
                if (k.removeEventListener) { k.removeEventListener(f, k[j], false) } else { if (k.detachEvent) { if (!k[j]) { return } if (h.isIeCustomEvt(k, g)) { k.detachEvent("onpropertychange", k[j]) } else { k.detachEvent(g, k[j]) } } else { k[g] = null } }
                j && (function() { k[j] = null; try { delete k[j] } catch (l) {} })()
            })
        },
        fire: function(f, e) {
            this.element(f, function(i) {
                var g;
                if (document.createEvent) {
                    g = document.createEvent("Events");
                    g.initEvent(e, true, true);
                    i.dispatchEvent(g)
                } else {
                    if (document.createEventObject) {
                        try {
                            g = document.createEventObject();
                            i.fireEvent("on" + e, g)
                        } catch (h) { i["custom" + e] = (i["custom" + e] || 0) + 1 }
                    }
                }
            })
        },
        ready: function(p) {
            var k = false,
                m = true,
                n = document.documentElement,
                f = document.addEventListener,
                o = f ? "addEventListener" : "attachEvent",
                i = f ? "removeEventListener" : "detachEvent",
                h = f ? "" : "on",
                j = function(r) {
                    var q = r.type;
                    if (q === "readystatechange" && document.readyState !== "complete") { return }(q === "load" ? window : document)[i](h + q, j, false);
                    if (!k) {
                        k = true;
                        p.call(null, q || r)
                    }
                },
                g = function() {
                    try { n.doScroll("left") } catch (q) { setTimeout(g, 50); return }
                    j("poll")
                };
            if (document.readyState == "complete") { p.call(window, "lazy") } else {
                if (!f && n.doScroll) { try { m = !window.frameElement } catch (l) {} if (m) { g() } }
                document[o](h + "DOMContentLoaded", j, false);
                document[o](h + "readystatechange", j, false);
                window[o](h + "load", j, false)
            }
        }
    };
    return b
})(), { tags: [{ documentWrite: false, tagName: "5b8b78f", htmlCode: '{"id":"5b8b78f"}', code: "<script type=\"text/tmscript\">var _smq = _smq || []; _smq.push(['_setAccount', '5b8b78f', new Date()]); _smq.push(['pageview']); (function() { var sm = document.createElement('script'); sm.type = 'text/javascript'; sm.async = true; sm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'site.cdnmaster.cn/sitemaster/collect.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sm, s); })(); <\/script>", type: "siteCode", tagConditionType: "urlMatcher", tagId: 620911, tagConditions: { condition: "AND", rules: [{ ruleWord: ".*", ruleWordType: "string", ruleOperator: "all", ruleField: "pageUrl" }] } }], containerName: "site??????_5b8b78f", currentVersion: { versionNumber: 1 }, containerId: 17957 }, "release", "admaster_tm");