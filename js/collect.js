/* SiteMaster_JS - v0.0.1 - Copyright (c) 2015 Admaster.inc - At: 2015-09-18 16:20:12 */
(function() {
    var a, b, c = [].slice;
    a = "0.0.1", b = {}, setTimeout(function() { var a, c, d, e, f, g, h, i; for (i = b.cookieInit({}), i = b.toolInit(i), g = b.packerInit(i), e = !1, d = !1, a = 3e3, c = 1500, f = null, h = function(a) { var b, c, d; return i.isFunction(a) ? a.call(this) : (c = a.shift(), i.isFunction(c) ? c.apply(null, a) : ("_setAccount" === c && (e = !0), e && (b = g[c]) ? (d = b.apply(null, a), i.isObject(d) && d.send === !0 ? i.request(d) : d) : void 0)) }; _smq.length;) h(_smq.shift()); return _smq.push = h, i.event.add(window, "unload", function(a) { return h(["pageClose"]) }), i.event.add(document, "click", i.throttle(function(a) { var b, c, d, e, f, j; try { if (d = i.event.event(a), j = i.event.target(d), e = d.clientX + i.scrollLeft(), f = d.clientY + i.scrollTop(), h(["clickEvent", e, f]), !(c = g.options("clickTimeout"))) return; if (b = i.findParentA(j), !b || b.target || !b.href) return; return i.isFunction(d.preventDefault) && d.preventDefault(), d.returnValue = !1, setTimeout(function() { return location.href = b.href }, c) } catch (k) {} }, a)), i.event.add(window, "scroll", i.debounce(function(a) { var b; return b = i.scrollTop(), f !== b ? (h(["pageScroll"]), f = b) : void 0 }, c)) }, 0), b.cookieInit = function(a) {
        var b, d, e, f, g, h, i, j, k, l;
        return null == a && (a = {}), f = encodeURIComponent, d = decodeURIComponent, j = /\+/g, g = function(a) { return b.raw ? a : f(a) }, e = function(a) { if (b.raw) return a; try { return d(a) } catch (c) {} }, l = function(a) { return g(String(a)) }, i = function(a) { 0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { a = d(a.replace(j, " ")) } catch (b) {} return a }, k = function(a, c) { var d; return d = b.raw ? a : i(a), ("function" == typeof c ? c(d) : void 0) || d }, h = function() { var a, b, d, e, f, g, h; for (d = 1 <= arguments.length ? c.call(arguments, 0) : [], e = d.shift(), g = 0, h = d.length; h > g; g++) { b = d[g]; for (a in b) f = b[a], e[a] = f } return e }, b = a.cookie = function(a, c, d) {
            var f, i, j, m, n, o, p, q, r, s;
            if (void 0 !== c) return d = h({}, b.defaults, d), "number" == typeof d.expires && (j = d.expires, q = d.expires = new Date, q.setDate(q.getDate() + j)), document.cookie = [g(a), "=", l(c), d.expires ? "; expires=" + d.expires.toUTCString() : "", d.path ? "; path=" + d.path : "", d.domain ? "; domain=" + d.domain.split(":")[0] : "", d.secure ? "; secure" : ""].join("");
            for (p = a ? void 0 : {}, i = document.cookie ? document.cookie.split("; ") : [], r = 0, s = i.length; s > r; r++) {
                if (m = i[r], o = m.split("="), n = e(o.shift()), f = o.join("="), a === n) { p = k(f, c); break }
                a || void 0 === (f = k(f)) || (p[n] = f)
            }
            return p
        }, b.defaults = { expires: 720, path: "/" }, a.removeCookie = function(b, c) { return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", h({}, c, { expires: -1 })), !0) }, a
    }, b.toolInit = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m;
        return null == a && (a = {}), m = window, g = document, i = encodeURIComponent, h = g.documentElement, k = navigator, e = Object.prototype, j = Array.isArray, l = e.toString, c = "_smt_uid", d = "_smta", f = function() { var b, c; return c = a.time(), b = a.intval(Math.random() * c), 1e8 > b && (b += 1e8), [c.toString(16), b.toString(16)].join(".") }, a.time = function() { return a.intval((new Date).valueOf() / 1e3) }, a.uid = function(b) { var e, g; return null == b && (b = ""), e = a.cookie(d), g = a.cookie(c), e && !g && (g = decodeURIComponent(e), g && (g = g.split(",")[0]), 2 !== g.split(".").length && (g = void 0)), g || (g = f()), a.cookie(c, g, { domain: b }), g }, a.isFunction = function(a) { return "[object Function]" === l.call(a) }, "function" != typeof /./ && "object" != typeof Int8Array && (a.isFunction = function(a) { return "function" == typeof a || !1 }), a.isArray = j || function(a) { return "[object Array]" === l.call(a) }, a.isUndefined = function(a) { return a === b }, a.isNumber = function(a) { return "[object Number]" === l.call(a) }, a.isObject = function(a) { var b; return b = typeof a, "function" === b || "object" === b && !!a }, a.map = a.collect = function(a, b, c) { var d, e, f, g, h; if (e = [], !a) return e; for (d = g = 0, h = a.length; h > g; d = ++g) f = a[d], e[e.length] = b.call(c, f, d, a); return e }, a.intval = function(a, b) { return null == b && (b = 10), parseInt(a, b) || 0 }, a.parseUrl = function(b) { var c, d, e, f, g, h; return b ? (c = new RegExp("#.*$").exec(b), d = a.isArray(c) ? c[0] : "", h = b.replace(d, "").split("?"), g = h.shift(), f = h.join("?") || "", e = f.length > 0 ? a.map(f.split("&"), function(a) { return a.split("=") }) : [], { uri: g, params: e, hash: d, qs: f }) : {} }, a.findUrl = function(b, c) { var d, e; return d = a.parseUrl(b).params, e = "", a.map(d, function(a) { return a[0] === c ? e = a[1] : void 0 }), e }, a.decodeSmtb = function(a) { var b, c, d, e, f, g, h, i; for (i = [], g = [], a = a.split("").reverse(), 23 === a.length && a.push(0), c = 0; c < a.length;) i = [], i.push(a[c + 1]), i.push(a[c]), h = i.join(""), e = parseInt(h, 16), c / 2 + 1 > e && (e += 256), e -= c / 2 + 1, g.push(e), c += 2; return f = (g[0] << 24) + (g[1] << 16) + (g[2] << 8) + g[3], b = (g[4] << 24) + (g[5] << 16) + (g[6] << 8) + g[7], d = (g[8] << 24) + (g[9] << 16) + (g[10] << 8) + g[11], isNaN(f) || isNaN(b) || isNaN(d) ? void 0 : [f, b, d] }, a.encodeSmtb = function(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p;
            j = [], f = 1, h = "";
            try {
                for (o = [a, b, c], k = 0, m = o.length; m > k; k++)
                    for (g = o[k], p = [24, 16, 8, 0], l = 0, n = p.length; n > l; l++) i = p[l], h = (g >> i & 255) + f, h = h >= 256 ? h - 256 : h, h = (h << 4 & 240) + (h >> 4), h = h.toString(16), 1 === h.length && (h = "0" + h), j.push(h), f += 1;
                return h = j.join("").split("").reverse().join("").replace(/^0+/, "").toUpperCase(), d ? d(null, h) : h
            } catch (q) { if (e = q) return d(e) }
        }, a.pageLoadTime = function() { var b, c; return (b = m.performance) && (c = b.timing) ? c.domContentLoadedEventEnd < c.fetchStart ? 0 : a.intval(c.domContentLoadedEventEnd - c.fetchStart) : 0 }, a.flashVersion = function() {
            var a, b, c, d, e, f, g;
            if (k.plugins && k.plugins.length)
                for (g = k.plugins, d = 0, f = g.length; f > d; d++)
                    if (b = g[d], -1 !== b.name.indexOf("Shockwave Flash")) return b.description.split("Shockwave Flash ")[1] || "";
            if (m.ActiveXObject)
                for (c = e = 10; e >= 2; c = --e) try { if (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + c)) return "" + c + ".0" } catch (h) {}
            return ""
        }, a.viewHeight = function() { try { return h.clientHeight || g.body.clientHeight } catch (a) {} return 0 }, a.scrollTop = function() { try { return a.intval(m.pageYOffset || h.scrollTop) } catch (b) {} return 0 }, a.scrollLeft = function() { try { return a.intval(m.pageXOffset || h.scrollLeft) } catch (b) {} return 0 }, a.throttle = function(a, b) {
            var c;
            return c = !1,
                function() { return c ? void 0 : (c = !0, setTimeout(function() { return c = !1 }, b), a.apply(null, arguments)) }
        }, a.debounce = function(a, b, c) {
            var d;
            return d = null,
                function() { var c; return c = arguments, d && clearTimeout(d), d = setTimeout(function() { return a.apply(null, c) }, b) }
        }, a.request = function(b) { var c, d, e, f, g; for (d = a.urlFormat(b), g = [], e = 0, f = d.length; f > e; e++) c = d[e], g.push(a.send(c, new Image(0, 0))); return g }, a.urlFormat = function(a) {
            var b, c, d, e;
            return c = function() {
                var c, d;
                c = a.params, d = [];
                for (b in c) e = c[b], d.push("" + b + "=" + i(e));
                return d
            }().join("&"), d = ["" + a.protocol + "//" + a.host + a.path + "?" + c], a.localPath && d.push("" + a.localPath + a.path + "?" + c), d
        }, a.send = function(b, c) { var d; return c.src = b, d = function() { return a.event.remove(c, "error", d), setTimeout(function() { return c.src = "" + b + "&retry=yes" }, 2e3) }, a.event.add(c, "error", d) }, a.random = function(a) { return null == a && (a = 8), Math.random().toString().substr(2, a) }, a.event = { add: function(a, b, c) { var d, e, f; return d = "addEventListener", e = "attachEvent", f = "on" + b, a[d] ? a[d](b, c, !1) : a[e] ? a[e](f, c) : a[f] = c }, remove: function(a, b, c) { var d, e, f; return f = "removeEventListener", d = "detachEvent", e = "on" + b, a[f] ? a[f](b, c, !1) : a[d] ? a[d](e, c) : a[e] = null }, event: function(a) { return a || window.event }, target: function(a) { return a && (a.target || a.srcElement || null) } }, a.customVars = function(b, c) { var d, e, f, g; if (null == c && (c = !1), !c) return a.map(b, function(a) { return "v" + a[0] + "=" + a[1] + "&s" + a[0] + "=" + a[2] }).join("&"); for (d = [], b.sort(function(a, b) { return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : void 0 }), f = 0, g = b.length; g > f; f++) e = b[f], 1 === +e[2] && d.push("" + e[0] + "=" + e[1]); return d.join("&") }, a.pageWidth = function() { var a, b, c, d, e, f, h, i, j, k, l; if (e = document, a = e.body, g = e.documentElement, d = a.children, c = 0, i = null, b = g.clientWidth || a.clientWidth, k = function(a) { var d, e, f, g; for (e = 0, f = 0, g = a.length; g > f; f++) d = a[f], c = d.offsetWidth, c > 600 && (b - 10 > c || c > b) && c > e && (e = c); return e }, h = function(a) { var b, c, d, e, g, h; for (c = -1, g = 0, h = a.length; h > g; g++) d = a[g], b = d.offsetHeight, b > c && (e = a[f], c = b); return e }, j = k(d)) return j; for (f = l = 0; 3 > l && (i = h(d), !(i && (d = i.children, j = k(d)))); f = ++l); return j || a.offsetWidth }, a
    }, b.packerInit = function(b, c) {
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F;
        return v = window, n = navigator, i = document, m = i.location, j = encodeURIComponent, e = "_smtv", d = "_smtb", h = [], o = {
            isSSL: "yes",
            allowLinker: !1,
            referrerSmtEnabled: !1,
            siteId: "",
            domain: m.host || m.hostname,
            heatmapEnabled: "yes",
            clickTimeout: 0,
            host: m.host || m.hostname,
            smtb: function() { var a; return a = b.findUrl(m.href, "smt_b"), a ? b.cookie(d, a) : void 0 }(),
            params: {
                sid: "",
                uid: function() {
                    var a;
                    return a = null,
                        function() { return a ? a : a = b.uid(o.domain) }
                }(),
                url: m.href,
                tl: i.title,
                cs: (i.charset || i.characterSet || "").toLowerCase(),
                rl: function() { return i.referrer },
                fv: b.flashVersion(),
                sr: [v.screen.width, v.screen.height].join("x"),
                sc: screen.colorDepth,
                tz: (new Date).getTimezoneOffset() / -60,
                je: function() { try { return "javaEnabled" in n && n.javaEnabled() ? 1 : 0 } catch (a) {} return 0 }(),
                sp: b.scrollTop,
                vh: b.viewHeight,
                pw: b.pageWidth,
                pt: b.pageLoadTime,
                vars: function() { var a, d, f, g, i, j, k; if (f = b.cookie(e), !f) return c; for (k = f.split("&"), i = 0, j = k.length; j > i; i++) g = k[i], d = g.split("="), a = b.intval(d[0]), 1 > a || a > 5 || (d.push(1), h.push(d)); return b.customVars(h) }()
            }
        }, s = o.params, r = function(a, b) { var c, d; return c = "sid,uid,url,tl,cs,rl,fv,sr,sc,tz,je,sp,vh,pt,vars", a && (s.url = "" + m.protocol + "//" + o.host + a, s.rl = function() { return "" }), b && (s.tl = b), d = t("pageview", c.split(",")) }, g = function(a, b, c, d, e) {
            var f, g, h, i, j, k;
            if (null == e && (e = 0), a) {
                if (i = t("event", ["sid", "uid", "url"]), i.params.cat = a, b && (i.params.act = b), c && (i.params.lab = c), d && (i.params.val = d), i.params.brf = e ? 1 : 0, arguments.length > 5)
                    for (f = arguments.slice(5), g = j = 0, k = f.length; k > j; g = ++j) h = f[g], i.params["l" + (g + 1)] = h;
                return i
            }
        }, f = function(a, b) { var c, d; if (o.heatmapEnabled) return c = "sid,uid,url,pw", d = t("click", c.split(",")), d.params.x = a, d.params.y = b, d }, p = function(a, b) { var c, d; return c = "sid,uid,url,sp,vh", d = t("close", c.split(",")) }, q = function() { var a; if (o.heatmapEnabled) return a = "sid,uid,url,vh,sp", t("scroll", a.split(",")) }, t = function(a, c) { return { send: !0, protocol: "yes" === o.isSSL ? "https:" : "http:", localPath: o.localPath, host: l(), path: "/p.gif", params: function() { var d, e, f, g, h, i; for (e = { type: a }, h = 0, i = c.length; i > h; h++) d = c[h], (g = o.params[d]) && (f = b.isFunction(g) ? g() : g, b.isUndefined(f) || (e[d] = f)); return e._ = b.random(), e }() } }, l = function() { return "smt.admaster.com.cn" }, u = function(b) { return "function" == typeof b && b(a), a }, F = function(a) { return o.isSSL = "yes" === a ? "yes" : "no" }, y = function(a, b) { return o.siteId = o.params.sid = a.toLowerCase() }, B = function(a) { return a === o.domain.substr(-a.length) ? o.domain = a : void 0 }, C = function(a) { return o.heatmapEnabled = "yes" === a }, z = function(a) { return o.clickTimeout = Math.max(0, b.intval(a)) }, D = function(a) { return o.localPath = a }, A = function(a, c, d) { var f, g, i, k, l, m; for (m = i = !1, k = 0, l = h.length; l > k; k++) g = h[k], +g[0] === +a && (i = !0, m = g[1] !== j(c) || +g[2] !== +d, g[1] = j(c), g[2] = d); return i === !1 && h.push([a, c, d]), m = i === !1 && 1 === +d, b.cookie.apply(null, [e, b.customVars(h, f = !0), { domain: o.domain }]), o.params.vars = b.customVars(h) }, w = function(a) { var c, e; return a ? (e = b.cookie(d)) ? (c = b.decodeSmtb(e), c ? a(null, c) : a(Error("Smtb is invalid"))) : a(Error("Smtb not found")) : console.log("decode smtb need cb") }, x = b.encodeSmtb, E = function(a) { var c; return "yes" !== a ? o.referrerSmtEnabled = !1 : (o.referrerSmtEnabled = !0, (c = b.findUrl(m.referrer, "smt_b")) ? b.cookie(d, c, o.domain) : void 0) }, k = function(a, b) { return b && b(o[a]), o[a] }, { pageview: r, custom: g, clickEvent: f, pageScroll: q, pageClose: p, version: u, _setAccount: y, _setCustomVar: A, _setDomainName: B, _setClickTimeOut: z, _setSSL: F, _setHeatmapEnabled: C, _setLocalPath: D, _decodeSmt_b: w, _encodeSmt_b: x, _setReferrerSmtEnabled: E, options: k }
    }
}).call(this);