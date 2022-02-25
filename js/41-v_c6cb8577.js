(window.webpackJsonp = window.webpackJsonp || []).push([
    [41], {
        1078: function(e, t, a) {
            "use strict";
            var n, l = C(a(44)),
                i = C(a(163)),
                o = C(a(16)),
                r = C(a(21)),
                s = C(a(1)),
                c = C(a(2)),
                d = C(a(5)),
                u = C(a(6));
            a(47), a(1350);
            var m = a(0),
                f = C(m),
                p = a(46),
                v = (a(7), C(a(389))),
                g = C(a(15)),
                h = a(20),
                y = C(a(380));
            a(381);
            var w = C(a(22)),
                b = C(a(1355)),
                E = C(a(161)),
                S = a(100),
                N = C(a(14)),
                k = C(a(72));

            function C(e) { return e && e.__esModule ? e : { default: e } }
            a(1452);
            var T = (0, p.inject)("homePageV3Mod", "rootStore")(n = (0, p.observer)(n = function(e) {
                function t(e) {
                    (0, s.default)(this, t);
                    var a = (0, d.default)(this, (t.__proto__ || (0, r.default)(t)).call(this, e));
                    return a.logoBannerToUrl = function(e, t) {
                        if (stm_clicki("send", "event", t, "点击", "首页-" + t), 2 == e.redirectType && N.default.gotoUrl(e.redirectUrl), 3 == e.redirectType && e.itemId) {
                            var n = "carSeriesDetail?catalogId=" + e.itemId;
                            a.dealerId && (n += "&dealerId=" + a.dealerId), window.app.routerGoTo(n)
                        }
                    }, a.toCarDetail = function(e) {
                        var t = "/carSeriesDetail?catalogId=" + e.seriesId;
                        N.default.gotoUrl(t)
                    }, a.hoverButtonToUrl = function(e, t) { stm_clicki("send", "event", t, "点击", "首页-" + t), 2 == e.redirectType && N.default.gotoUrl(e.redirectUrl) }, a.handleColseAdvPop = function() { a.setState({ showAdsPopup: !1 }), a.rootStore.updateStore({ isOpened: !0 }), N.default.stopBodyScroll(!1) }, a.stores = a.props.homePageV3Mod, a.rootStore = a.props.rootStore, a.state = { showAdsPopup: !0, activeIndex: 0, toggle: !0 }, a.playing = !0, a.countNum = 5, AppBus.emit("loading", !0), a
                }
                return (0, u.default)(t, e), (0, c.default)(t, [{ key: "componentWillMount", value: function() {} }, {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        N.default.getCurrCity((function(t) { e.pageInit() }))
                    }
                }, { key: "componentWillUnmount", value: function() { this.setAnimation(!0), this.bannerSwiper && this.bannerSwiper.destroy(!0), this.carSwiper && this.carSwiper.destroy(!0) } }, {
                    key: "pageInit",
                    value: function() {
                        var e = this;
                        this.stores.getIndexData().finally((function() {
                            AppBus.emit("loading", !1);
                            var t = e.stores.state,
                                a = (t.hoverButtonList, t.customFloorList),
                                n = t.indexNavigationList;
                            t.currentIndex;
                            e.stores.isShowFlowBtn && e.setAnimation(), n.length && e.initScroll("#fast-navigation", "nav"), (a || []).forEach((function(t, a) {
                                (t.mallSettingsManagementVos || []).length > 1 && e.initScroll("#home-v3-page-cf-" + a, a)
                            })), e.initBannerSwiper(), setTimeout((function() { e.initCarSwiper() }), 500)
                        }))
                    }
                }, {
                    key: "initBannerSwiper",
                    value: function() {
                        var e = this;
                        this.bannerSwiper = new y.default(".home-v3-main-swiper-container", {
                            observer: !0,
                            observeParents: !0,
                            autoplay: 3e3,
                            initialSlide: 0,
                            speed: 500,
                            autoplayDisableOnInteraction: !1,
                            centeredSlides: !0,
                            loop: !0,
                            slidesPerView: 1,
                            pagination: ".dots-list",
                            paginationClickable: !1,
                            onInit: function(e) { $(".home-v3-main-swiper-container .swiper-slide").addClass("swiper-slide-custom") },
                            onSlideChangeStart: function() {
                                (0, h.isEmpty)(e.bannerSwiper) || e.setState({ activeIndex: e.bannerSwiper.realIndex })
                            },
                            onClick: function() {
                                var t = e.stores.state.bannerList,
                                    a = e.bannerSwiper.realIndex,
                                    n = t[a];
                                e.logoBannerToUrl(n, "轮播图" + (a + 1))
                            }
                        })
                    }
                }, {
                    key: "initCarSwiper",
                    value: function() {
                        var e = this,
                            t = this.stores.currentCarList;
                        t.length && 1 !== t.length && (this.carSwiper = new y.default(".home-v3-page-car-list", {
                            speed: 500,
                            initialSlide: 0,
                            autoplayDisableOnInteraction: !1,
                            loop: !0,
                            slidesPerView: "auto",
                            pagination: ".swiper-pagination-car",
                            paginationClickable: !1,
                            onClick: function() {
                                var t = e.stores.currentCarList[e.carSwiper.realIndex];
                                10 == +t.imgType && e.toCarDetail(t)
                            }
                        }))
                    }
                }, { key: "initScroll", value: function(e, t) { this["scrollWrap-" + t] && this["scrollWrap-" + t].destroy(), this["scrollWrap-" + t] = new v.default(e, { scrollX: !0, scrollY: !1, bounce: !1, eventPassthrough: "vertical" }) } }, {
                    key: "setAnimation",
                    value: function(e) {
                        var t = this,
                            a = 0,
                            n = null,
                            l = $(".home-v3-page-hover-button"),
                            i = $("#app");

                        function o() { i.scrollTop() == a && (l.removeClass("hide_icon"), n = null) }
                        e ? i.unbind("scroll") : i.on("scroll", (0, h.debounce)((function(e) { clearTimeout(n), n = setTimeout(o, 300), a = i.scrollTop(), !l.is(":hidden") && t.stores.isHideFlowBtn && l.addClass("hide_icon"), $(e.target).scrollTop() > window.innerHeight ? l.fadeIn(400) : l.fadeOut(400) }), 300, { leading: !0 }))
                    }
                }, { key: "toUrl", value: function(e, t) { t && (0, h.isString)(t) && stm_clicki("send", "event", t, "点击", "首页-" + t), window.app.routerGoTo(e) } }, { key: "toGoMap", value: function(e, t) { stm_clicki("send", "event", "经销商到这里" + t + "KBA", "点击", "首页推荐经销商-经销商到这里" + t + "KBA"), N.default.go2Map(e.address) } }, {
                    key: "countDown",
                    value: function(e, t) {
                        var a = this;
                        this[e] || (this[e] = setInterval((function() { a.countNum--, a.countNum <= 0 && (a.clearTimer(e), t && t()) }), 1e3))
                    }
                }, { key: "clearTimer", value: function(e) { this[e] && (clearInterval(this[e]), this[e] = null) } }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state,
                            a = (t.showAdsPopup, t.activeIndex),
                            n = this.stores.state,
                            r = n.bannerList,
                            s = n.tabsList,
                            c = n.carSeriesList,
                            d = n.indexNavigationList,
                            u = n.recommendDealerList,
                            p = n.customFloorList,
                            v = n.hoverButtonList,
                            y = n.adsList,
                            C = (n.currentIndex, n.showVideo),
                            T = n.currentVideoUrl,
                            I = this.stores.currentCarList;
                        return f.default.createElement("div", { className: "home-page-v3" }, f.default.createElement(b.default, { selectedTab: "homePage" }), f.default.createElement(E.default, { leftType: "menu", rightType: ["search"], onSetPosition: function() { e.stores.getRecommendDealer() } }), f.default.createElement("div", { className: "banner-block" }, f.default.createElement("section", { className: "pc-banner" }, r.map((function(e, t) { return f.default.createElement("div", { className: "banner-bg", key: t, style: { opacity: t !== a ? 0 : 1, backgroundImage: "url(" + e.imgBackgroundUrl + ")" } }) })), f.default.createElement("div", { className: "swiper-content" }, f.default.createElement("div", { className: "home-v3-main-swiper-container" }, f.default.createElement("div", { className: "swiper-wrapper" }, r.map((function(e, t) { return f.default.createElement("div", { className: "swiper-slide", key: t }, f.default.createElement("img", { src: e.imgUrl })) }))))), f.default.createElement("div", { className: "dots-list" }))), !(0, h.isEmpty)(d) && f.default.createElement("div", { className: "fast-navigation", id: "fast-navigation" }, f.default.createElement("div", { className: "fast-navigation-list" }, d.map((function(e, t) { return f.default.createElement("div", { key: t, className: "nav-item", onClick: function() { return N.default.navToUrl(e) } }, f.default.createElement("img", { src: e.imgUrl }), f.default.createElement("span", null, e.name)) })))), !(0, h.isEmpty)(s) && f.default.createElement("section", { className: "car-model-module" }, f.default.createElement("div", { className: "tab-title" }, f.default.createElement("div", { className: "name" }, (0, w.default)(c, "mallStoreyVo.name")), f.default.createElement("span", { className: "more", onClick: function() { return e.toUrl("/carType", "进入车型") } }, "查看更多")), f.default.createElement("div", { className: "tabs-wrap" }, f.default.createElement(S.YxTabs, { tabs: s, horizontalScroll: !0, useOnPan: !0, swipeable: !1, onTabClick: function(t, a) { e.stores.updateStore({ currentIndex: t.value }), e.carSwiper && e.carSwiper.destroy(!1, !0), e.setState({ toggle: !1 }, (function() { e.setState({ toggle: !0 }, (function() { return e.initCarSwiper() })) })) } })), this.state.toggle && f.default.createElement("div", { className: "home-v3-page-car-list swiper-container" }, f.default.createElement("div", { className: "series-list swiper-wrapper", style: 1 === I.length ? { transform: "translate3d(" + .09 * window.innerWidth + "px, 0, 0)" } : {} }, (I || []).map((function(t, a) {
                            var n, l = t.seriesId === e.rootStore.state.evosSeriesId;
                            return f.default.createElement("div", { className: (0, g.default)((n = {}, (0, o.default)(n, "swiper-slide", !0), (0, o.default)(n, "swiper-slide-active", 1 === I.length), n)), key: a }, f.default.createElement("div", { className: "slide-item" }, 10 == +t.imgType ? f.default.createElement(m.Fragment, null, f.default.createElement("img", { className: "tab-bg", src: k.default.img_card_ford }), f.default.createElement("img", { className: "tab-pic", src: l ? N.default.getRealImg("year2021/evos/v3/img/evos_home.png") : t.imgUrl }), f.default.createElement("div", { className: "series-details" }, f.default.createElement("div", { className: "content" }, f.default.createElement("span", null, t.catalogName), f.default.createElement("span", null, t.minDiscount && 0 != t.minDiscount ? "官方指导价" : "即将上市"), f.default.createElement("span", null, t.minDiscount && 0 != t.minDiscount ? parseFloat(l ? e.rootStore.state.evosMiniPrice : t.minDiscount) / 1e4 + "万元起" : "敬请期待")), f.default.createElement("div", { className: "go-to-detail-btn", onClick: function(a) { a.stopPropagation(), e.toCarDetail(t) } }, f.default.createElement("img", { src: k.default.into })))) : f.default.createElement(m.Fragment, null, f.default.createElement("img", {
                                className: "custom-img",
                                src: t.imgUrl,
                                onClick: function() {
                                    switch (t.type + "") {
                                        case "2":
                                            N.default.gotoUrl(t.targetUrl)
                                    }
                                }
                            }))))
                        })))), (I || []).length > 1 && f.default.createElement("div", { className: "swiper-pagination-car" })), !(0, h.isEmpty)(u) && f.default.createElement("section", { className: "recommend-dealer-module" }, f.default.createElement("div", { className: "block-title-v3 mb24" }, f.default.createElement("div", { className: "title-name" }, "启程 进入经销商"), f.default.createElement("span", { className: "more", onClick: function() { return N.default.gotoUrl("/findDealer") } }, "查看更多")), f.default.createElement("div", { className: "recommend-dealer bg-white-v3" }, f.default.createElement("img", {
                            className: "dealer-pic",
                            src: k.default.img_bg_topshop,
                            onClick: function() {
                                var e = "/cloudStore?dealerId=" + u.id;
                                N.default.gotoUrl(e)
                            }
                        }), f.default.createElement("div", { className: "dealer-details" }, f.default.createElement("div", { className: "dealer-info" }, f.default.createElement("div", null, u.dealerName), (0, w.default)(u, "shops[0].address") && f.default.createElement("div", { className: "address" }, (0, w.default)(u, "shops[0].address")), u.salePhone && f.default.createElement("div", { className: "phone" }, u.salePhone)), !!(0, w.default)(u, "shops[0].distance") && f.default.createElement("div", { className: "dealer-location", onClick: function(t) { t.stopPropagation(), e.toGoMap((0, w.default)(u, "shops[0]") || {}, u.id) } }, f.default.createElement("img", { src: k.default.nav }), !!(0, w.default)(u, "shops[0].distance") && f.default.createElement("span", null, "距您", N.default.changeDistance((0, w.default)(u, "shops[0].distance")), "km"))), f.default.createElement("div", {
                            className: "btn-to-dealer",
                            onClick: function() {
                                var e = "/cloudStore?dealerId=" + u.id;
                                N.default.gotoUrl(e)
                            }
                        }, "进入经销商"))), (p || []).map((function(t, a) {
                            return (0, h.isEmpty)(t.mallSettingsManagementVos) ? null : f.default.createElement("section", { key: a, className: "custom-floor-module" }, f.default.createElement("div", { className: "block-title-v3" }, f.default.createElement("div", { className: "title-name" }, t.mallStoreyVo.name), !!t.mallStoreyVo.more && f.default.createElement("span", { className: "more", onClick: function(e) { e.stopPropagation(), N.default.gotoUrl(t.mallStoreyVo.targetUrl) } }, "查看更多")), f.default.createElement("div", { className: "custom-floor-wrap", id: "home-v3-page-cf-" + a }, t.mallSettingsManagementVos && f.default.createElement("ul", { className: t.mallSettingsManagementVos.length > 1 ? "custom-floor-more" : "custom-floor-single" }, t.mallSettingsManagementVos && t.mallSettingsManagementVos.map((function(t, a) {
                                return f.default.createElement("li", {
                                    key: a,
                                    className: "bg-white-v3",
                                    onClick: function(a) {
                                        switch (a.stopPropagation(), t.redirect + "") {
                                            case "2":
                                                N.default.gotoUrl(t.redirectUrl);
                                                break;
                                            case "3":
                                                e.stores.updateStore({ currentVideoUrl: t.redirectUrl, showVideo: !0 }), setTimeout((function() { e.video = document.querySelector("#video_show_item"), e.video.addEventListener("playing", (function() { console.log("2222"), e.playing = !0 })), e.video.addEventListener("pause", (function() { console.log("1111"), e.playing = !1 })), e.video.play() }), 300), N.default.stopBodyScroll(!0)
                                        }
                                    }
                                }, f.default.createElement("img", { src: t.url }), f.default.createElement("span", null, t.name))
                            })))))
                        })), f.default.createElement("div", { className: "ba-wrap" }, f.default.createElement("a", { target: "_blank", href: "https://beian.miit.gov.cn/", className: "bottomViewAhref" }, f.default.createElement("p", { className: "bottomViewP" }, "沪ICP备18008778号-2")), f.default.createElement("a", { target: "_blank", href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202010549" }, f.default.createElement("p", { className: "bottomViewP" }, "沪公网安备  31011202010549号"))), this.stores.isShowFlowBtn && f.default.createElement("div", { className: "home-v3-page-hover-button", onClick: function() { return e.hoverButtonToUrl(v[0], "悬浮按钮") } }, f.default.createElement("img", { src: (0, w.default)(v, "[0].imgUrl") })), this.isShowAdv && f.default.createElement("section", { className: "ads-popup", onTouchStart: function() { e.clearTimer("advTimer") } }, f.default.createElement("div", { className: "ads-block" }, f.default.createElement("i", { className: "iconfont icon-icon_line_close1 icon-close", onClick: function() { e.handleColseAdvPop() } }), f.default.createElement(i.default, { className: "ads-list", autoplay: !0, infinite: !0 }, y.map((function(e, t) {
                            return f.default.createElement("div", {
                                key: t,
                                style: { display: "inline-block", width: "100%" },
                                className: "ads-item-wrap",
                                onClick: function() {
                                    if (e.questionnaireId) AppBus.emit("popQuestion", { show: !0, id: e.questionnaireId });
                                    else switch (e.type + "") {
                                        case "2":
                                            N.default.gotoUrl(e.targetUrl)
                                    }
                                }
                            }, f.default.createElement("img", { src: e.imgUrl, alt: "", onLoad: function() { window.dispatchEvent(new Event("resize")) } }))
                        }))))), f.default.createElement(l.default, { visible: C, transparent: !0, className: "caf-video-v3-modal", onClose: function() { e.stores.updateStore({ showVideo: !1 }), N.default.stopBodyScroll(!1) } }, f.default.createElement("video", { id: "video_show_item", width: "100%", height: "100%", src: T, autoPlay: "autoplay", "webkit-playsinline": "true", playsInline: !0, style: { objectFit: "fill" }, onClick: function(t) { e.video && (e.playing ? e.video.pause() : e.video.play()) } })))
                    }
                }, {
                    key: "isShowAdv",
                    get: function() {
                        var e = this,
                            t = this.state.showAdsPopup,
                            a = this.stores.state.adsList,
                            n = t && !!(a || []).length && !this.rootStore.state.isOpened;
                        return n && (N.default.stopBodyScroll(!0), this.countDown("advTimer", (function() { e.handleColseAdvPop() }))), n
                    }
                }]), t
            }(m.Component)) || n) || n;
            e.exports = T
        },
        1350: function(e, t, a) {
            "use strict";
            a(41), a(1352)
        },
        1352: function(e, t, a) {},
        1355: function(e, t, a) {
            "use strict";
            var n, l = y(a(166)),
                i = y(a(31)),
                o = y(a(10)),
                r = y(a(11)),
                s = y(a(21)),
                c = y(a(1)),
                d = y(a(2)),
                u = y(a(5)),
                m = y(a(6));
            a(1356);
            var f = a(0),
                p = y(f),
                v = (a(101), y(a(1360)), a(46)),
                g = y(a(14)),
                h = y(a(18));

            function y(e) { return e && e.__esModule ? e : { default: e } }
            var w = (0, v.inject)("TabBarMod", "rootStore")(n = (0, v.observer)(n = function(e) {
                function t(e) {
                    (0, c.default)(this, t);
                    var a = (0, u.default)(this, (t.__proto__ || (0, s.default)(t)).call(this, e));
                    return a.tabBarList = localStorage.getItem(h.default.locationStore.tabtar) && JSON.parse(localStorage.getItem(h.default.locationStore.tabtar)), a.state = { selectedTab: "indexTab", selectedIconClassName: "tab_page_icon", hidden: !1, fullScreen: !0, type: g.default.getQueryString("tabBarType") || 0, style: { normalColor: "rgba(0, 0, 0, 0.65)", activeColor: "#0A2284" } }, a
                }
                var a;
                return (0, m.default)(t, e), (0, d.default)(t, [{ key: "hideTabBar", value: function() { this.setState({ hidden: !this.state.hidden }) } }, {
                    key: "componentDidMount",
                    value: (a = (0, r.default)(o.default.mark((function e() {
                        return o.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    this.props.selectedTab && this.setState({ selectedTab: this.props.selectedTab, selectedIconClassName: "tab_page_icon add-animation" });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() { return a.apply(this, arguments) })
                }, {
                    key: "onTabBarClick",
                    value: function(e, t, a) {
                        stm_clicki("send", "event", a, "点击", "底部导航-" + a);
                        var n = t;
                        if ("indexTab" != e) {
                            var l = g.default.getQueryString("tabBarType"),
                                i = g.default.getQueryString("dealerId");
                            l && (n = t + "?tabBarType=" + l, i && (n += "&dealerId=" + i))
                        }
                        "kefuTab" == "" + e && (n += "&from=" + encodeURIComponent(window.location.href) + "&title=" + encodeURIComponent(document.title)), "indexTab" == "" + e && (this.title = ""), window.app.routerGoTo(n)
                    }
                }, { key: "getTabBarStyle", value: function() { var e = { position: "fixed", height: "0.98rem", width: "100%", bottom: "0" }; return g.default.isIphoneXSeries() && (e.height = "1.42rem"), e } }, { key: "getIconStyle", value: function(e, t) { return (0, i.default)({ backgroundImage: "url(" + e.icon[t] }, e.style) } }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state,
                            a = t.selectedTab,
                            n = (t.type, t.style),
                            i = (t.selectedIconClassName, this.props.rootStore.state.tabBarList);
                        return p.default.createElement("div", { className: "tab-bar-page", style: this.state.fullScreen ? {} : { height: "100%" } }, p.default.createElement(l.default, { unselectedTintColor: n.normalColor, tintColor: n.activeColor, barTintColor: "white", hidden: this.state.hidden }, i.map((function(t) { return p.default.createElement(l.default.Item, { title: t.name, key: t.activityTab, icon: p.default.createElement("div", { className: "tab_page_icon", style: e.getIconStyle(t, 0) }, " "), selectedIcon: p.default.createElement("div", { className: "tab_page_icon add-animation", style: e.getIconStyle(t, 1) }), selected: a === t.activityTab, onPress: function() { return e.onTabBarClick(t.activityTab, t.target, t.diName) } }) }))))
                    }
                }]), t
            }(f.Component)) || n) || n;
            e.exports = w
        },
        1356: function(e, t, a) {
            "use strict";
            a(41), a(378), a(1357), a(1358)
        },
        1357: function(e, t, a) {},
        1358: function(e, t, a) {
            "use strict";
            a(41), a(1359)
        },
        1359: function(e, t, a) {},
        1360: function(e, t, a) {},
        1452: function(e, t, a) {}
    }
]);
//# sourceMappingURL=41-v_c6cb8577.js.map