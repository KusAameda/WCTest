! function(t, r, n) {
    try {
        var i = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
            a = function(e) { if (null == e) return String(e); var t = i.exec(Object.prototype.toString.call(Object(e))); return t ? t[1].toLowerCase() : "object" },
            o = function(e, t) { return Object.prototype.hasOwnProperty.call(Object(e), t) },
            c = function(e) { if (!e || "object" != a(e) || e.nodeType || e == e.window) return !1; try { if (e.constructor && !o(e, "constructor") && !o(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (e) { return !1 } for (var t in e); return void 0 === t || o(e, t) },
            s = function(e) { var t; for (t in e) return !1; return !0 },
            l = function(e, t) {
                var r, n = e || ("array" == a(t) ? [] : {});
                for (r in t)
                    if (o(t, r)) { var i = t[r]; "array" == a(i) ? ("array" != a(n[r]) && (n[r] = []), n[r] = l(i, n[r])) : c(i) ? (c(n[r]) || (n[r] = {}), n[r] = l(i, n[r])) : n[r] = i }
                return n
            },
            u = function(e, t) { var r, n, i = "array" == a(e) ? "[" : "{"; for (r in e) o(e, r) && (n = e[r], "array" == a(n) || "object" == a(n) ? i += "array" == t ? u(n, a(n)) + "," : '"' + r + '":' + u(n, a(n)) + "," : "string" == a(n) ? i += "array" == t ? '"' + n + '",' : '"' + r + '":"' + n + '",' : i += "array" == t ? n + "," : '"' + r + '":' + n + ","); return i += "array" == a(e) ? "]" : "}" },
            p = function(e) { var t = "array" == a(e) || "object" == a(e) ? u(e, a(e)).replace(/,}/g, "}").replace(/,]/g, "]") : e; return "{}" != t ? t : "" },
            d = function(e) { return "[object Array]" == Object.prototype.toString.call(Object(e)) },
            v = function(e, t) {
                if (void 0 == e || !d(e)) return 0;
                for (var r = 0; r < e.length; r++)
                    if (t == e[r]) return 1;
                return 0
            },
            m = function(e) {
                var t = r.getElementsByTagName("script")[0] || r.body || r.head;
                t.parentNode.insertBefore(e, t)
            },
            f = function(e, t, n) {
                var i = r.createElement("script");
                i.type = "text/javascript", i.async = !0, i.src = e, y(i, t), n && (i.onerror = n), m(i)
            },
            g = function(e, t) { var n = r.createElement("iframe"); return n.height = "0", n.width = "0", n.style.display = "none", n.style.visibility = "hidden", void 0 !== e && (n.src = e), m(n), y(n, t), n },
            y = function(e, t, r, n) { e.addEventListener ? e.addEventListener(t, r, !!n) : e.attachEvent && e.attachEvent("on" + t, r) },
            h = function(e, t, r, n) { return e.removeEventListener ? e.removeEventListener(t, r, !!n) : e.detachEvent && e.detachEvent("on" + t, r) };
        trim = function(e) { return e ? e.replace(/^[\s\uFEFF\xa0]+|[\s\uFEFF\xa0]+$/g, "") : "" }, logLevel = 0, log = function(e) { logLevel > 1 && t.console && t.console.log && t.console.log(e) }, warn = function(e) { logLevel > 2 && t.console && t.console.warn && t.console.warn(e) }, error = function(e) { logLevel > 0 && t.console && t.console.error && t.console.error(e) }, globalEval = function(e) {
            var t, e = trim(e);
            e && (t = document.createElement("script"), t.text = e, (r.body || r.head).appendChild(t).parentNode.removeChild(t))
        }, getHostName = function() {
            var e = location.hostname,
                t = /^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/,
                r = e.split("."),
                n = r.length - 2;
            if (t.test(e) || 2 === r.length) return e;
            for (; 0 <= n; --n) { if ("www" === r[n]) return r.slice(n + 1).join("."); if (-1 === ",com,net,org,gov,edu,info,name,int,mil,arpa,asia,biz,pro,coop,aero,museum,ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,az,ba,bb,bd,be,bf,bg,bh,bi,bj,bm,bn,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cf,cg,ch,ci,ck,cl,cm,cn,co,cq,cr,cu,cv,cx,cy,cz,de,dj,dk,dm,do,dz,ec,ee,eg,eh,es,et,ev,fi,fj,fk,fm,fo,fr,ga,gb,gd,ge,gf,gh,gi,gl,gm,gn,gp,gr,gt,gu,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,il,in,io,iq,ir,is,it,jm,jo,jp,ke,kg,kh,ki,km,kn,kp,kr,kw,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,ml,mm,mn,mo,mp,mq,mr,ms,mt,mv,mw,mx,my,mz,na,nc,ne,nf,ng,ni,nl,no,np,nr,nt,nu,nz,om,pa,pe,pf,pg,ph,pk,pl,pm,pn,pr,pt,pw,py,qa,re,ro,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sy,sz,tc,td,tf,tg,th,tj,tk,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,va,vc,ve,vg,vn,vu,wf,ws,ye,yu,za,zm,zr,zw,".indexOf("," + r[n] + ",")) return r.slice(n).join(".") }
            return e
        }, getBrowserData = function(e) {
            var e = {},
                r = t.navigator,
                n = t.screen;
            n && (e.sr = n.width + "x" + n.height), n && (e.sc = n.colorDepth + "-bit"), e.fv = getFlashVersion(), e.je = r && "function" == typeof r.javaEnabled && r.javaEnabled() || !1, e.lg = (r && (r.language || r.browserLanguage) || "").toLowerCase(), e.vb = pageVisibility.support ? "1" : "0";
            var i = _getDeviceInfo();
            return i ? (e.did = i.deviceid, e.dt = i.deviceType) : (e.did = ipy.getInfo("ipydeviceid"), e.dt = ipy.getInfo("ipydevicetype")), e
        }, getPageData = function() {
            var n = {},
                i = location.href,
                a = r.referrer;
            t.parent != t && (i = a, a = "");
            var o = [];
            (e = r.body) && e.scrollWidth && e.scrollHeight && (o = [e.scrollWidth, e.scrollHeight]);
            var c = 0 >= o[0] || 0 >= o[1] ? "" : o.join("x");
            n.ps = c;
            var s = r.documentElement,
                l = (e = r.body) && e.clientWidth && e.clientHeight,
                u = [];
            return s && s.clientWidth && s.clientHeight && ("CSS1Compat" === r.compatMode || !l) ? u = [s.clientWidth, s.clientHeight] : l && (u = [e.clientWidth, e.clientHeight]), s = 0 >= u[0] || 0 >= u[1] ? "" : u.join("x"), n.vp = s, n.tt = r.title, n.ec = r.characterSet || r.charset, n.u = i, n.r = a, pageVisibility.support && (n.vbt = pageVisibility.hidden ? pageVisibility.total : pageVisibility.sumTime()), n.sp = max_sp, n
        }, getFlashVersion = function() {
            var e, r, n;
            if ((n = (n = t.navigator) ? n.plugins : null) && n.length)
                for (var i = 0; i < n.length && !r; i++) { var a = n[i]; - 1 < a.name.indexOf("Shockwave Flash") && (r = a.description) }
            if (!r) try { e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), r = e.GetVariable("$version") } catch (e) {}
            if (!r) try { e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), r = "WIN 6,0,21,0", e.AllowScriptAccess = "always", r = e.GetVariable("$version") } catch (e) {}
            if (!r) try { e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), r = e.GetVariable("$version") } catch (e) {}
            return r && (e = r.match(/[\d]+/g)) && 3 <= e.length && (r = e[0] + "." + e[1] + " r" + e[2]), r || void 0
        }, _prop = function(e, t, r) { this.name = e, this.shortName = t, this.required = r }, _object = function() { this.keys = [], this.props = {}, this.values = {} }, _object.prototype.addProp = function(e, t) { this.keys.push(e), this.props[":" + e] = new _prop(e, t) }, _object.prototype.hasKey = function(e) {
            for (var t = 0; t < this.keys.length; t++)
                if (e == this.keys[t]) return !0;
            return !1
        }, _object.prototype.set = function(e, t) {
            if (this.hasKey(e)) {
                var r = this.get(e);
                c(t) ? this.values[":" + e] = l(r, t) : this.values[":" + e] = t
            } else this.addProp(e, e), this.values[":" + e] = t
        }, _object.prototype.get = function(e) { return this.values[":" + e] }, _object.prototype.merge = function(e) { for (var t in e) o(e, t) && this.set(t, e[t]) }, _object.prototype.clear = function(e) { this.values = {} }, _object.prototype.toObject = function() {
            for (var e = {}, t = 0; t < this.keys.length; t++) {
                var r = this.keys[t],
                    n = this.get(r),
                    i = this.props[":" + r].shortName;
                void 0 != n && (e[i] = n)
            }
            return e
        }, _eventObject = function(e, t) { this.prop = new _prop(e, t), this.obj = new _object }, _eventObject.prototype.addProps = function(e) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                this.obj.addProp(r[0], r[1])
            }
            return this
        }, _eventObject.prototype.addProp = function(e, t, r) { return this.obj.addProp(e, t, r), this }, _eventObject.prototype.get = function(e) { return this.obj.get(e) }, isIE678 = function() { if ("Microsoft Internet Explorer" == navigator.appName && /MSIE[678]/.test(navigator.appVersion.split(";")[1].replace(/[ ]/g, ""))) return !0; return !1 }, sEle = function(e) {
            var t = new RegExp("[a-zA-Z]*\\[\\s*name\\s*=.*\\]"),
                n = t.exec(e);
            if (null != n) {
                var i = n[0].replace(/\s+/g, "");
                e = e.replace(n[0], i)
            }
            e = e.replace(/\s+/g, " ");
            for (var a = e.split(" "), o = [], c = 0; c < a.length; c++) o = 0 == c ? r : o, o = find(a[c], o);
            return o
        }, getChild = function(e, t) {
            for (var r, n = 0; n < e.childNodes.length; n++)
                if (ch = e.childNodes[n], "#text" != ch.nodeName) {
                    if (ch.getAttribute("id") == t) return ch;
                    r = getChild(ch, t)
                }
            return r
        }, find = function(e, t) {
            switch (e.substr(0, 1)) {
                case "#":
                    var n = e.substring(1);
                    if (t.length) {
                        for (var i, a = 0; a < t.length; a++) { var o = getChild(t[a], n); if (o) { i = o; break } }
                        t = i
                    } else t = t == r ? r.getElementById(n) : getChild(t, n);
                    break;
                case ".":
                    var n = e.substring(1);
                    if (t.length) {
                        for (var c = [], a = 0; a < t.length; a++)
                            for (var i = ipy.getElementsByClassName(n, t[a]), s = 0; s < i.length; s++) c.push(i[s]);
                        t = c
                    } else t = ipy.getElementsByClassName(n, t);
                    break;
                default:
                    var l, u = new RegExp("=.*\\]"),
                        p = u.exec(e);
                    if (null != p)
                        if (p = p[0].substring(1, p[0].length - 1), l = e.substring(0, e.indexOf("[")), p = p.replace(/'/g, "").replace(/"/g, ""), t.length) {
                            for (var i, a = 0; a < t.length; a++) { var o = getNameChild(t[a], p, l); if (o) { i = o; break } }
                            t = i
                        } else t = t == r ? r.getElementsByName(p) : getNameChild(t, p, l)
            }
            return t
        }, getNameChild = function(e, t, r) {
            for (var n, i = [], a = 0; a < e.childNodes.length; a++)
                if (ch = e.childNodes[a], "#text" != ch.nodeName)
                    if (ch.localName == r && ch.getAttribute("name") == t) i.push(ch);
                    else { n = getNameChild(ch, t); for (var o = 0; o < n.length; o++) i.push(n[o]) }
            return i
        }, max_sp = 0, scrollEventFLag = !1, _scrollPercent = function() {
            var e = t.pageYOffset || r.documentElement.scrollTop || r.body.scrollTop,
                n = r.documentElement.scrollHeight || r.body.scrollHeight,
                i = r.documentElement.clientHeight || r.body.clientHeight;
            if (!(n > i)) return max_sp = 100, scrollEventFLag = !0, max_sp;
            var a = parseInt(e / (n - i) * 100);
            return max_sp < a && (max_sp = a), a
        }, scrollPercent = function() {
            var e = _scrollPercent();
            max_sp >= 100 && h(t, "scroll", scrollPercent), !scrollEventFLag && e > 80 && (globalEval(_ + "('event','scrollEvent')"), scrollEventFLag = !0)
        }, josEncode = function() {
            "use strict";

            function e(e) {
                void 0 == e && (e = "");
                var t = typeof e;
                switch (t) {
                    case "boolean":
                        return r(e);
                    case "string":
                        return a(e);
                    case "number":
                        return n(e);
                    case "object":
                        return o(e);
                    case "array":
                        return c(e);
                    default:
                        throw "Unsupported type '" + t + "'"
                }
            }

            function t(e) { for (var t = s.charAt(31 & e), r = e >>> 5; 0 != r;) t = s.charAt(31 & r | 32) + t, r >>>= 5; return t }

            function r(e) { return e ? s.charAt(1) : s.charAt(2) }

            function n(e) { if (Number.isFinite && !Number.isFinite(e) || isNaN && isNaN(e) || e == 1 / 0 || e == -1 / 0) throw "Unsupported Number: Infinity,-Infinity,NaN"; var r = e.toString(); return s.charAt(3) + t(r.length) + r.replace(/\+/g, "P").replace(/\./g, "D") }

            function i(e) {
                switch (e) {
                    case 26:
                        return 32;
                    case 27:
                        return 45;
                    case 28:
                        return 46;
                    case 29:
                        return 47;
                    case 30:
                        return 58;
                    case 31:
                        return 95;
                    case 32:
                        return 26;
                    case 45:
                        return 27;
                    case 46:
                        return 28;
                    case 47:
                        return 29;
                    case 58:
                        return 30;
                    case 95:
                        return 31;
                    default:
                        return e >= 97 && e <= 122 ? e - 97 : e >= 0 && e <= 25 ? e + 97 : e
                }
            }

            function a(e) { for (var r = !0, n = 0; n < e.length; n++) { var a = e.charCodeAt(n); if (!(a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 || 95 == a || 46 == a)) { r = !1; break } } if (r) return s.charAt(4) + t(e.length) + e.replace(/\./g, "-"); for (var o = s.charAt(5) + t(e.length), n = 0; n < e.length; n++) o += t(i(e.charCodeAt(n))); return o }

            function o(r) { if (null == r) return s.charAt(0); if (Array.isArray && Array.isArray(r) || "[object Array]" == Object.prototype.toString.call(r)) return c(r); var n = []; for (var i in r) r.hasOwnProperty(i) && (n[n.length] = i); var o = s.charAt(6) + t(n.length); for (var l in n) o += a(n[l]) + e(r[n[l]]); return o }

            function c(r) { var n = s.charAt(7) + t(r.length); for (var i in r) n += e(r[i]); return n }
            var s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-abcdefghijklmnopqrstuvwxyz_";
            return e
        }(), store = function() {
            var e, n = {},
                i = "localStorage";
            if (n.disabled = !1, n.set = function(e, t) {}, n.get = function(e, t) {}, n.has = function(e) { return void 0 !== n.get(e) }, n.remove = function(e) {}, n.clear = function() {}, n.transact = function(e, t, r) {
                    null == r && (r = t, t = null), null == t && (t = {});
                    var i = n.get(e, t);
                    r(i), n.set(e, i)
                }, n.getAll = function() { var e = {}; return n.forEach(function(t, r) { e[t] = r }), e }, n.forEach = function() {}, n.serialize = function(e) { return JSON.stringify(e) }, n.deserialize = function(e) { if ("string" == typeof e) try { return JSON.parse(e) } catch (t) { return e || void 0 } }, function() { try { return i in t && t[i] } catch (e) { return !1 } }()) e = t[i], n.set = function(t, r) { return void 0 === r ? n.remove(t) : (e.setItem(t, n.serialize(r)), r) }, n.get = function(t, r) { var i = n.deserialize(e.getItem(t)); return void 0 === i ? r : i }, n.remove = function(t) { e.removeItem(t) }, n.clear = function() { e.clear() }, n.forEach = function(t) {
                for (var r = 0; r < e.length; r++) {
                    var i = e.key(r);
                    t(i, n.get(i))
                }
            };
            else if (r && r.documentElement.addBehavior) {
                var a, o;
                try { o = new ActiveXObject("htmlfile"), o.open(), o.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>'), o.close(), a = o.w.frames[0].document, e = a.createElement("div") } catch (t) { e = r.createElement("div"), a = r.body }
                var c = function(t) {
                        return function() {
                            var r = Array.prototype.slice.call(arguments, 0);
                            r.unshift(e), a.appendChild(e), e.addBehavior("#default#userData"), e.load(i);
                            var o = t.apply(n, r);
                            return a.removeChild(e), o
                        }
                    },
                    s = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
                    l = function(e) { return e.replace(/^d/, "___$&").replace(s, "___") };
                n.set = c(function(e, t, r) { return t = l(t), void 0 === r ? n.remove(t) : (e.setAttribute(t, n.serialize(r)), e.save(i), r) }), n.get = c(function(e, t, r) { t = l(t); var i = n.deserialize(e.getAttribute(t)); return void 0 === i ? r : i }), n.remove = c(function(e, t) { t = l(t), e.removeAttribute(t), e.save(i) }), n.clear = c(function(e) {
                    var t = e.XMLDocument.documentElement.attributes;
                    e.load(i);
                    for (var r = t.length - 1; r >= 0; r--) e.removeAttribute(t[r].name);
                    e.save(i)
                }), n.forEach = c(function(e, t) { for (var r, i = e.XMLDocument.documentElement.attributes, a = 0; r = i[a]; ++a) t(r.name, n.deserialize(e.getAttribute(r.name))) })
            }
            try {
                var u = "__storejs__";
                n.set(u, u), n.get(u) != u && (n.disabled = !0), n.remove(u)
            } catch (e) { n.disabled = !0 }
            return n.enabled = !n.disabled, n
        }(), _pykey_ = "", _setPykey = function() {
            var e = ipy.cookie.get("_pykey_");
            if (store.enabled) {
                var t = store.get("_pykey_");
                _pykey_ = e || (t || ipy.guid()), ipy.setCookie("_pykey_", _pykey_), store.set("_pykey_", _pykey_)
            } else {
                if (e) ipy.setCookie("_pykey_", e), _pykey_ = e;
                else {
                    var r = ipy.guid();
                    _pykey_ = r, ipy.setCookie("_pykey_", r)
                }
                ipy.cookie.get("_pykey_") != _pykey_ && (_pykey_ = "")
            }
        }, pageVisibility = function() {
            var e, t = function(e, t) { return "" !== e ? e + t.slice(0, 1).toUpperCase() + t.slice(1) : t },
                n = function() { var r = !1; return "number" == typeof window.screenX && ["webkit", "moz", "ms", "o", ""].forEach(function(n) { 0 == r && void 0 != document[t(n, "hidden")] && (e = n, r = !0) }), r }(),
                i = function() { return !!n && document[t(e, "hidden")] },
                a = function() { if (n) return document[t(e, "visibilityState")] };
            return { hidden: i(), state: a(), support: n, change: function(t, o) { if (o = !1, n && "function" == typeof t) return k.$.addEvent(r, e + "visibilitychange", function(e) { this.hidden = i(), this.visibilityState = a(), t.call(this, e) }.bind(this), o) }, total: 0, visibilityTime: new Date, sumTime: function() { var e = new Date; return this.total = this.total + (e - this.visibilityTime), this.visibilityTime = e, this.total } }
        }(), cmf = {
            cmFun: function(e) {
                try {
                    if (!e) return;
                    var t = e.us;
                    if (t && t.length <= 0) return;
                    for (var r = P.mapping.get("mapping"), n = void 0 != r && r < t.length ? r : t.length, i = "function i(a){new Image().src = a};", a = 0; a < n; a++) i += 'i("' + t[a] + '");';
                    g("javascript:'<script>" + i + "<\/script>'", this.timeOutCm).name = "_pycmifr"
                } catch (e) {}
            },
            timeOutCm: function() { try { for (var e = r.getElementsByName("_pycmifr"), t = e.length - 1; t >= 0; t--) "IFRAME" == e[t].tagName && e[t].parentNode.removeChild(e[t]) } catch (e) {} }
        }, cvdFun = function(e) {
            for (var t = 0; t < e.t.length; t++) {
                for (var r = e.t[t].s, n = e.t[t].t, i = !0, a = 0; a < n.length; a++) switch (n[a].r) {
                    case 0:
                        i = i && !0;
                        break;
                    case 1:
                    case 2:
                        i = i && urlReg(n[a], r);
                        break;
                    case 3:
                        i = i && click(n[a], r)
                }
                if (i)
                    if (1 == i) ! function() { globalEval(r) }();
                    else
                        for (var o = 0; o < i.length; o++) ! function() {
                            var e = r;
                            y(i[o], "click", function() { try { globalEval(e) } catch (e) {} })
                        }()
            }
        }, urlReg = function(e, t) { var r = 1 == e.r ? j.u : j.r; if (1 == e.o) { var n = e.v; if (null != new RegExp(n).exec(r)) return !0 } return !1 }, click = function(e, t) { if (2 == e.o) { var r = sEle(e.v); return void 0 != r && null != r && (r = r.length ? r : [r]) } return !1 }, executeEventName = function(e) { void 0 == k.q && (k.q = []); for (var t = 0; t < k.q.length; t++) k.q[t][1] == e && execute(k.q[t]) }, execute = function(e) {
            try {
                if (e && e.length < 2) return;
                if (k.l != k.L) return void k.q.push(e);
                var t = e[0];
                if ("set" != t && "event" != t) return;
                var r, i = e[1],
                    o = P[i].obj,
                    l = o.keys,
                    u = "adv";
                "event" == t && o.clear();
                for (var v = 2; v < e.length; v++) {
                    var m = e[v];
                    if (v == e.length - 1 && c(m)) m.trackId && (e.t = m.trackId, delete m.trackId), o.merge(m);
                    else {
                        if ("trackId" == l[v - 2] && "" != m) { e.t = m; continue }
                        l.length > v - 2 && o.set(l[v - 2], m)
                    }
                }
                if ("event" == t) {
                    e.t && void 0 != (r = "array" == a(e.t) && e.t.length > 0 && e.t[0].length > 0 ? e.t[0][0] : "string" == a(e.t) ? e.t : "") && "" != r && (u = "cvt");
                    var g = P.domain.get("domain"),
                        y = void 0 == g ? ["stats.ipinyou.com"] : d(g) ? g : [g],
                        h = P.extend.get("extend"),
                        _ = ipy.getJump();
                    userInfo = P.user.obj.toObject(), siteInfo = P.site.obj.toObject(), j = getPageData(), eventParams = o.toObject();
                    var x = "";
                    if (2 == O) {
                        var t, E, I, S, N, C, F, A = j.u,
                            T = j.r,
                            z = "",
                            R = "",
                            L = "";
                        S = userInfo.ca, delete userInfo.ca;
                        for (var D in w) void 0 != w[D] && (z += "&" + D + "=" + n(w[D]));
                        if (delete j.u, delete j.r, delete j.tt, w = b(w), userInfo = b(userInfo), siteInfo = b(siteInfo), j = b(j), "viewItem" == i) {
                            "pn" in eventParams && (I = eventParams.pn);
                            var q = eventParams.pis && eventParams.pis.replace("x", "X").split("X"),
                                V = eventParams.ms && eventParams.ms.replace("x", "X").split("X");
                            delete eventParams.pis, delete eventParams.ms, q && 2 == q.length && (eventParams.pw = q[0], eventParams.ph = q[1]), V && 2 == V.length && (eventParams.mw = V[0], eventParams.mh = V[1]), E = p(eventParams), eventParams = {}
                        } else if (void 0 == r || "" == r || "order" != i && "viewCart" != i && "purchase" != i) {
                            if ("leads" == i || "custom" == i || "register" == i) {
                                if ("i" in eventParams && (N = eventParams.i, delete eventParams.i), "d" in eventParams) {
                                    F = "";
                                    for (var B in eventParams.d) F += "&" + B + "=" + eventParams.d[B];
                                    F = F.substring(1), delete eventParams.d
                                }
                                "custom" == i && "ce" in eventParams && (L = eventParams.ce, delete eventParams.ce)
                            }
                        } else if ("m" in eventParams && (C = eventParams.m, delete eventParams.m), "i" in eventParams && (N = eventParams.i, delete eventParams.i), "it" in eventParams) {
                            F = "";
                            for (var _ = 0; _ < eventParams.it.length; _++) {
                                var $ = eventParams.it[_];
                                F += ($.id ? $.id : "") + "," + ($.count ? $.count : "") + "," + ($.price ? $.price : "") + ";"
                            }
                            delete eventParams.it
                        }
                        eventParams = b(eventParams), z.length > 0 && (R += z.substring(1));
                        for (var D in j) void 0 != j[D] && (R += "&" + D + "=" + n(j[D]));
                        R += "&ur=" + n(p(userInfo)), R += "&st=" + n(p(siteInfo)), R += "&ev=" + n(P[i].prop.shortName), s(eventParams) || (R += "&ep=" + n(p(eventParams))), R += "" != L ? "&ce=" + L : "", void 0 != r && "" != r && (R += S ? "&pv=" + S : ""), x += n(void 0 != r && "" != r ? r : k.a) + (I ? "&p=" + n(I) : "") + (E ? "&pi=" + n(E) : "") + (ipy.getInfo("ipycookie") ? "&c=" + ipy.getInfo("ipycookie") : "") + (ipy.getInfo("ipymcookie") ? "&mc=" + ipy.getInfo("ipymcookie") : "") + (0 == _ ? "" : "&s=" + _) + (A ? "&u=" + n(A) : "") + (T ? "&r=" + n(T) : "") + (void 0 != r && "" != r || !S ? "" : "&pv=" + n(S)) + "&rd=" + (new Date).getTime() + (C ? "&Money=" + n(C) : "") + (N ? "&OrderNo=" + n(N) : "") + (F ? "&ProductList=" + n(F) : "") + "&v=2" + (void 0 == R ? "" : "&e=" + n(R)), x.substring(4)
                    } else x += n(k.a) + (void 0 != r && "" != r ? "&ti=" + r : "") + (ipy.getInfo("ipycookie") ? "&c=" + ipy.getInfo("ipycookie") : "") + (ipy.getInfo("ipymcookie") ? "&mc=" + ipy.getInfo("ipymcookie") : "") + (0 == _ ? "" : "&s=" + _) + "&ev=" + P[i].prop.shortName + "&v=3" + (s(userInfo) ? "" : "&" + P.user.prop.shortName + "=" + josEncode(userInfo)) + (s(siteInfo) ? "" : "&" + P.site.prop.shortName + "=" + josEncode(siteInfo)) + "&_c=" + _pykey_ + "&b=" + josEncode(w) + "&pg=" + josEncode(j) + (s(eventParams) ? "" : "&ep=" + josEncode(eventParams)) + (void 0 == h ? "" : "&e=" + n(h)) + "&rd=" + (new Date).getTime(), x.substring(4);
                    for (var v = 0; v < y.length; v++) {
                        var H = ("https:" == location.protocol ? "https" : "http") + "://" + y[v] + "/" + u + "?a=" + x;
                        f(H)
                    }
                }
            } catch (R) {}
        }, removeFun = function(e) {
            if (d(e)) {
                var t, r, n, i = [];
                for (r = e.length - 1; r >= 0; r--)
                    if (t = e[r], "remove" == t[0]) i.push(t), e.splice(r, 1);
                    else
                        for (n = 0; n < i.length; n++)
                            if (t[0] == i[n][1] && t[1] == i[n][2]) { e.splice(r, 1); break }
            }
        }, exeFun = function() {
            var e = dcpy(k.q);
            k.q = [], removeFun(e);
            for (var t = 0; t < e.length; t++)
                for (var r = t + 1; r < e.length; r++)
                    if ("set" != e[t][0] && "set" == e[r][0]) {
                        var n = e[t];
                        e[t] = e[r], e[r] = n
                    }
            for (var t = 0; t < e.length;) "mapping" != e[t][1] && "default" != e[t][1] && execute(e[t]), e.splice(t, 1)
        }, dcpy = function(e) {
            var t = "array" == a(e) ? [] : {};
            for (var r in e) {
                var n = e[r],
                    i = a(n);
                t[r] = "array" == i || "object" == i ? dcpya(n) : e[r]
            }
            return t
        }, dcpya = function(e) { for (var t = {}, r = 0; r < e.length; r++) t[r] = e[r]; return e.t && (t.t = e.t), t.length = e.length, t }, clonePy = function(e, t, r) {
            var n = function() {
                var r = arguments;
                return r.length && e[t].$.e(r), e[t].track = function(n) {
                    (r.t = []).push(arguments), n && e[t].$.t(r)
                }, e[t]
            };
            return l(n, r), n
        }, _getClickParam = function() {
            var e;
            void 0 == k.q && (k.q = []);
            for (var t = 0; t < k.q.length; t++) "clickParam" == k.q[t][1] && (e = k.q[t][2]);
            return e = e || "pyck"
        }, _setIpycookie = function() {
            var e = _getClickParam(),
                t = ipy.getQueryString(e) || ipy.getReferrerQueryString(e);
            t = t || ipy.getInfo("ipycookie"), ipy.setInfo("ipycookie", t)
        }, _setIpyMcookie = function() {
            var e = "m" + _getClickParam(),
                t = ipy.getQueryString(e) || ipy.getReferrerQueryString(e);
            t = t || ipy.getInfo("ipymcookie"), ipy.setInfo("ipymcookie", t)
        }, _getDeviceInfo = function() {
            var e, t, r = /^[0-9]{15}$/,
                n = /^([0-9a-zA-Z]{1,})(([/\s-][0-9a-zA-Z]{1,}){4})$/,
                i = /^[a-zA-Z0-9-]*$/,
                a = /^[a-zA-Z0-9]{32}$/,
                o = ipy.getQueryString("pyimei"),
                c = ipy.getQueryString("pyidfa"),
                s = ipy.getQueryString("pyoaid");
            return o || c || s || (o = ipy.getReferrerQueryString("pyimei"), c = ipy.getReferrerQueryString("pyidfa"), s = ipy.getReferrerQueryString("pyoaid")), o = r.test(o) || a.test(o) ? o : 0, c = n.test(c) || a.test(c) ? c : 0, s = i.test(s) ? s : 0, c ? (t = c, e = "idfa") : o ? (t = o, e = "imei") : s && (t = s, e = "oaid"), t ? { deviceid: josEncode(t), deviceType: e } : 0
        }, _setIpyDeviceInfo = function() {
            var e = _getDeviceInfo(),
                t = e ? e.deviceid : 0;
            t && ipy.getInfo("ipydeviceid") != t && (ipy.setInfo("ipydeviceid", t), ipy.setInfo("ipydevicetype", e.deviceType))
        }, bodyReady = function(e) { r.body ? e() : t.setTimeout(function() { bodyReady(e) }, 200) }, delayExecution = function(e) { t.setTimeout(e, 0) }, isReady = !1, readyFunctionArray = [_scrollPercent], readyFunction = function(e) {
            if (!isReady) {
                var t = r.createEventObject,
                    n = "complete" == r.readyState,
                    i = "interactive" == r.readyState;
                if (!e || "readystatechange" != e.type || n || !t && i) { isReady = !0; for (var a = 0; a < readyFunctionArray.length; a++) readyFunctionArray[a]() }
            }
        }, ieScrollCount = 0, ieReadyFunction = function() { if (!isReady && 140 > ieScrollCount) { ieScrollCount++; try { r.documentElement.doScroll("left"), readyFunction() } catch (e) { t.setTimeout(ieReadyFunction, 50) } } }, completeFlag = !1, completeFunctionArray = [], completeFunction = function() { if (!completeFlag) { completeFlag = !0; for (var e = 0; e < completeFunctionArray.length; e++) completeFunctionArray[e]() } }, t.ipy = {
            r: /(^|&)jump=(\d*)/i,
            cookie: {
                set: function(e, t, i, a, o) {
                    var c = new Date;
                    c.setTime(c.getTime() + (i || 0)), r.cookie = e + "=" + n(t || "") + (i ? "; expires=" + c.toGMTString() : "") + ";path=/; domain=" + (a || ("localhost" == location.hostname ? "" : location.hostname)) + (o ? "; secure" : "")
                },
                get: function(e) { return (e = r.cookie.match(RegExp("(^|;)\\s*" + e + "=([^;]*)", "i"))) ? decodeURIComponent(e[2]) : "" }
            },
            setCookie: function(e, t) { this.cookie.set(e, t, 31536e6, getHostName()) },
            setSession: function(e, t) { this.cookie.set(e, t, 0, getHostName()) },
            getJump: function() { try { var e = this.cookie.get("ipysession"); return e && (e = e.match(this.r)) ? parseInt(e[2]) : 0 } catch (e) { return 0 } },
            setJump: function(e) {
                var t = this.cookie.get("ipysession");
                t ? t.match(this.r) ? this.setSession("ipysession", t.replace(/jump=(\d*)/, "jump=" + e)) : this.setSession("ipysession", t + "&jump=" + e) : this.setSession("ipysession", "jump=" + e)
            },
            getInfo: function(e) { var r = this.cookie.get(e); if (r) return r; try { if (t.localStorage && localStorage.getItem(e)) return localStorage.getItem(e) } catch (e) {} return "" },
            setInfo: function(e, r) { if (null != r && "" != r) { this.setCookie(e, r); try { t.localStorage && localStorage.setItem(e, r) } catch (e) {} } },
            getQueryString: function(e) {
                var r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                    n = t.location.search.substr(1).match(r);
                return null != n ? n[2] : ""
            },
            getReferrerQueryString: function(e) {
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                    n = r.referrer,
                    i = n.indexOf("?") + 1;
                n = i ? n.substring(i) : "";
                var a = n.match(t);
                return null != a ? a[2] : ""
            },
            setJumpSession: function() {
                var e = ipy.getInfo("ipycookie") || ipy.getInfo("ipymcookie");
                if (e && null != e) {
                    var t = ipy.getJump();
                    ipy.setJump(++t)
                }
            },
            css: { hasClass: function(e, t) { for (var r = !1, n = this.getArrayOfClassNames(e), i = 0; i < n.length; i++) t == n[i] && (r = !0); return r }, getArrayOfClassNames: function(e) { var t = []; return e.className && (t = e.className.split(" ")), t } },
            getElementsByClassName: function(e, t, n) {
                if (r.getElementsByClassName) return t.getElementsByClassName(e);
                var i = null;
                i = n ? n.getElementsByTagName("*") : t.getElementsByTagName("*");
                for (var a = [], o = 0; o < i.length; o++) {
                    var c = i[o];
                    ipy.css.hasClass(c, e) && a.push(c)
                }
                return a
            },
            guid: function() { return "xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) { var t = 16 * Math.random() | 0; return ("x" == e ? t : 3 & t | 8).toString(16) }) }
        };
        var b = function(e) { return void 0 == e ? e : ("i" in e && (e.id = e.i, delete e.i), "n" in e && (e.nm = e.n, delete e.n), "t" in e && (e.tp = e.t, delete e.t), "m" in e && (e.mn = e.m, delete e.m), e) },
            _ = function(e) { return void 0 != e && -1 < (e.constructor + "").indexOf("String") }(t._CommandName_) && trim(t._CommandName_) || "py",
            k = t[_];
        if (k.L = k.l, !k.a) return;
        k.$ = { addEvent: y, removeEvent: h, selector: sEle, e: execute, t: execute, getCookie: ipy.cookie.get, setCookie: ipy.setCookie, pv: pageVisibility, encode: josEncode }, l(k.$, ipy);
        for (var w = getBrowserData(), j = getPageData(), P = {}, x = k.a, E = [], I = x && x.split(".")[0], O = 2, S = 0; S < E.length; S++)
            if (E[S] == I) { O = 3; break }
        P.domain = new _eventObject("domain", "d").addProps([
            ["domain", "d"]
        ]), P.mapping = new _eventObject("mapping", "mp").addProps([
            ["mapping", "mp"]
        ]), P.default = new _eventObject("default", "df").addProps([
            ["events", "evs"]
        ]), P.extend = new _eventObject("extend", "e").addProps([
            ["extend", "e"]
        ]), P.user = new _eventObject("user", "ur").addProps([
            ["id", "i", !0],
            ["name", "n"],
            ["cookieId", "ci"],
            ["email", "em"],
            ["type", "t"],
            ["category", "ca"]
        ]), P.clickParam = new _eventObject("clickParam", "cp").addProps([
            ["clickParam", "cp"]
        ]), P.site = new _eventObject("site", "st").addProps([
            ["type", "t"],
            ["id", "i"],
            ["industry", "ind"]
        ]), P.viewHome = new _eventObject("viewHome", "vh"), P.viewList = new _eventObject("viewList", "vl").addProps([
            ["categoryPath", "cp", !0]
        ]), P.viewItem = new _eventObject("viewItem", "vi").addProps([
            ["product_no", "pn"],
            ["area", "aa"],
            ["android_brand_schema", "abs"],
            ["activity_content", "ac"],
            ["activity_end_time", "ae"],
            ["airplane_model", "am"],
            ["addr", "ar"],
            ["activity_start_time", "as"],
            ["android_shop_schema", "ass"],
            ["android_schema_url", "asu"],
            ["start_area", "str"],
            ["start_time", "stt"],
            ["activity_url", "au"],
            ["brand", "b"],
            ["business_area", "ba"],
            ["brand_id", "bi"],
            ["brand_logo", "bl"],
            ["brand_url", "bu"],
            ["category", "ca", !0],
            ["currency_code", "cc", !0],
            ["classify", "cf"],
            ["category_id", "cid"],
            ["category_path", "cp"],
            ["city", "cty"],
            ["country", "cy"],
            ["discount", "dc"],
            ["decoration", "de"],
            ["duration", "du"],
            ["extend", "e"],
            ["end_airport", "ea"],
            ["end_area", "er"],
            ["end_time", "et"],
            ["feature", "ft"],
            ["house_area", "ha"],
            ["house_mode", "hd"],
            ["has_meals", "hm"],
            ["house_type", "ht"],
            ["ios_brand_schema", "ibs"],
            ["ios_shop_schema", "iss"],
            ["ios_schema_url", "isu"],
            ["lbs", "lb"],
            ["mobile_activity_url", "ma"],
            ["mobile_brand_logo", "mbl"],
            ["mobile_brand_url", "mbu"],
            ["mobile_pic_height", "mh"],
            ["mobile_pic_ratio", "mm"],
            ["mobile_pc_pic_url", "mpu"],
            ["mobile_shop_logo", "msl"],
            ["mobile_shop_url", "msu"],
            ["mobile_pic_url", "mu"],
            ["mobile_pic_width", "mw"],
            ["name", "n"],
            ["off_time", "oft"],
            ["orig_price", "op"],
            ["on_time", "ot"],
            ["pic_height", "ph"],
            ["punctuality_ratio", "pl"],
            ["promotion", "pm"],
            ["pc_pic_url", "ppu"],
            ["price", "pr", !0],
            ["pic_ratio", "pt"],
            ["product_url", "pu", !0],
            ["pic_width", "pw"],
            ["removed", "rm"],
            ["short_desc", "sd"],
            ["score", "se"],
            ["spu_id", "si"],
            ["shop_logo", "sl"],
            ["short_name", "sm"],
            ["shop_name", "sn"],
            ["sold_out", "so"],
            ["stock", "sk"],
            ["shop_id", "sp"],
            ["start_airport", "sta"],
            ["shop_url", "su"],
            ["star_level", "sv"],
            ["seat_type", "sy"],
            ["total_price", "tl"],
            ["type", "t"],
            ["mobile_product_url", "wap"],
            ["mobile_pic_size", "ms"],
            ["pic_size", "pis"]
        ]), P.viewSearch = new _eventObject("viewSearch", "vs").addProps([
            ["keywords", "k", !0],
            ["trackId", "ti"]
        ]), P.viewActivity = new _eventObject("viewActivity", "va").addProps([
            ["name", "n"]
        ]), P.viewChannel = new _eventObject("viewChannel", "vn").addProps([
            ["name", "n"]
        ]), P.viewUserIndex = new _eventObject("viewUserIndex", "vu").addProps([
            ["userId", "ui"]
        ]), P.viewCart = new _eventObject("viewCart", "vc").addProps([
            ["id", "i"],
            ["money", "m"],
            ["items", "it"],
            ["count", "ct"],
            ["price", "pr"],
            ["trackId", "ti"]
        ]), P.viewPage = new _eventObject("viewPage", "vg").addProps([
            ["page", "pg"]
        ]), P.collect = new _eventObject("collect", "cl").addProps([
            ["id", "i"],
            ["trackId", "ti"]
        ]), P.order = new _eventObject("order", "od").addProps([
            ["id", "i"],
            ["money", "m"],
            ["items", "it"],
            ["count", "ct"],
            ["price", "pr"],
            ["trackId", "ti"]
        ]), P.addCart = new _eventObject("addCart", "ad").addProps([
            ["id", "i"],
            ["trackId", "ti"]
        ]), P.register = new _eventObject("register", "rg").addProps([
            ["id", "i"],
            ["name", "n"],
            ["email", "em"],
            ["type", "t"],
            ["data", "d"],
            ["trackId", "ti"]
        ]), P.leads = new _eventObject("leads", "ls").addProps([
            ["id", "i"],
            ["name", "n"],
            ["email", "em"],
            ["type", "t"],
            ["data", "d"],
            ["trackId", "ti"]
        ]), P.custom = new _eventObject("custom", "cm").addProps([
            ["customEvent", "ce"],
            ["id", "i"],
            ["data", "d"],
            ["trackId", "ti"]
        ]), P.consult = new _eventObject("consult", "co").addProps([
            ["trackId", "ti"]
        ]), P.message = new _eventObject("message", "msg").addProps([
            ["trackId", "ti"]
        ]), P.purchase = new _eventObject("purchase", "pch").addProps([
            ["id", "i"],
            ["money", "m"],
            ["items", "it"],
            ["count", "ct"],
            ["price", "pr"],
            ["trackId", "ti"]
        ]), P.statistics = new _eventObject("statistics", "sts").addProps([
            ["trackId", "ti"]
        ]), P.standingTime = new _eventObject("standingTime", "ste"), P.scrollEvent = new _eventObject("scrollEvent", "se"), _setIpycookie(), _setIpyMcookie(), _setIpyDeviceInfo(), _setPykey(), ipy.setJumpSession();
        var N = function() {
            executeEventName("default");
            var e = P.default.get("events");
            if (pageVisibility.support && v(e, "standingTime")) {
                var r = null;
                pageVisibility.hidden || (r = setTimeout(_ + "('event','standingTime')", 2e4)), pageVisibility.change(function() {
                    if (clearTimeout(r), "visible" == this.visibilityState) {
                        pageVisibility.visibilityTime = new Date;
                        var e = 2e4 - pageVisibility.total;
                        e > 0 && (r = setTimeout(_ + "('event','standingTime')", e))
                    }
                    "hidden" == this.visibilityState && pageVisibility.sumTime()
                })
            }!scrollEventFLag && v(e, "scrollEvent") && y(t, "scroll", scrollPercent)
        };
        k.cb = function(e, t) { try { executeEventName("mapping"), cmf.cmFun(e), t && 0 == t.code && null != t.data && cvdFun(t.data), _setIpycookie(), _setIpyMcookie(), C() } catch (e) {} };
        var C = function() { try { k = t[_] = clonePy(t, t._CommandName_, t[_]), N(), exeFun() } catch (e) {} };
        if (k.r ? C() : f(("https:" == location.protocol ? "https" : "http") + "://stats.ipinyou.com/presadv?a=" + n(k.a) + "&cb=" + _ + ".cb", function() {}, C), "interactive" == r.readyState && !r.createEventObject || "complete" == r.readyState) readyFunction();
        else {
            if (y(r, "DOMContentLoaded", readyFunction), y(r, "readystatechange", readyFunction), r.createEventObject && r.documentElement.doScroll) {
                var F = !0;
                try { F = !t.frameElement } catch (x) {}
                F && ieReadyFunction()
            }
            y(t, "load", readyFunction)
        }
        "complete" === r.readyState ? completeFunction() : y(t, "load", completeFunction)
    } catch (e) {}
}(window, document, encodeURIComponent);