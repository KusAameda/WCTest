/*2021-08-19 16:31:59 */
!function(a,b){function c(a){return void 0!=a&&-1<(a.constructor+"").indexOf("String")}function d(a){return"[object Array]"==w.call(Object(a))}function e(a){return!isNaN(parseFloat(a))&&isFinite(a)}function f(a,b){c(a)&&(a=b[a]);var d=v.call(arguments,2);return function(){return a.apply(b,d.concat(v.call(arguments)))}}function g(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}function h(a){for(var b=20,c={a:1,map:1},d=0,e=a;d++<=b&&e&&e.tagName;){if(e.tagName.toLowerCase()in c)return e;e=e.parentNode}return null}function i(c){c=c||a.event;var d,e,f,g={original:c,target:c.target,pageX:c.pageX,pageY:c.pageY,timestamp:c.timestamp||+new Date};return g.target||(g.target=c.srcElement||b),g.anchorElm=h(g.target),null==g.pageX&&null!=c.clientX&&(f=g.target.ownerDocument||b,d=f.documentElement,e=f.body,g.pageX=c.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),g.pageY=c.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),g}function j(c){var d;return c=c||b,d=c.defaultView||a,c=c.compatMode&&"CSS1Compat"!=c.compatMode?c.body:c.documentElement,{x:d.pageXOffset||c.scrollLeft||0,y:d.pageYOffset||c.scrollTop||0}}function k(){var c,d;return a.innerWidth?(c=a.innerWidth,d=a.innerHeight):(c=b.documentElement.clientWidth?b.documentElement.clientWidth:b.body.clientWidth,d=b.documentElement.clientHeight?b.documentElement.clientHeight:b.body.clientHeight),{width:c||0,height:d||0}}function l(){var a="CSS1Compat"===b.compatMode,c=a?b.documentElement:b.body;return{width:Math.max(c.scrollWidth,c.offsetWidth,c.clientWidth),height:Math.max(c.scrollHeight,c.offsetHeight,c.clientHeight)}}function m(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function n(a,b){return String(a).replace(new RegExp("["+m(b.join(""))+"]","g"),"\\$&")}function o(a,b){var f=[];if((b=b||0)<u.length){if(d(a)){for(var g=0;g<a.length;g++)f.push(o(a[g],b+1));return f.join(u[b])}if(c(a))return n(a,u);if(e(a))return a}return""}function p(){var a=b.location.search||b.location.hash;if(a.indexOf("?mzhm=")>-1||a.indexOf("&mzhm=")>-1){var c=b.createElement("script");c.type="text/javascript",c.async=!0,c.charset="utf-8",c.src="https://stm-cdn.cn.miaozhen.com/plugins/webHeatMapShow.js?v="+Math.round((new Date).getTime()/1e3/300),b.body.appendChild(c)}}function q(a){a.send&&(this.tracker=a),this.duration=20,this.interval=null,this.isOpen=!1,this.data=[],this.viewport=null,this.section="",s.call(this)}function r(a){return a||this.send(),this.duration>0&&(this.interval&&clearTimeout(this.interval),this.interval=setTimeout(f(r,this),1e3*this.duration)),this}function s(){g(b,"mouseup",f(t,this))}function t(a){var b=i(a),c=b.pageX,d=b.pageY,e=l(),f=j(),g=b.anchorElm&&b.anchorElm.getAttribute("href",2),h=g&&"#"!=g&&0!==String(g).indexOf("javascript");e.width>0&&e.height>0&&c<=e.width&&d<=e.height&&this.add([c,d,f.x,f.y,h?encodeURIComponent(g):""],h)}var u=[",","#","@","&","="],v=[].slice,w={}.toString,x=q.prototype;x.on=function(a){return a>0&&(this.duration=a),r.call(this,!0),this.isOpen=!0,this},x.setSection=function(a){return this.send(),this.section=a,this},x.off=function(){return this.interval&&clearTimeout(this.interval),this.isOpen=!1,this},x.send=function(){return this.data.length>0&&(this._sendHandler(this.data),this.clear()),this},x._sendHandler=function(a){if(this.isOpen){var b=l();this.tracker.send("heatmap",{"&hm_v":b.width+"*"+b.height,"&hm_s":this.section,"&hm_p":o(a)})}return this},x.clear=function(){return this.data=[],this},x.add=function(a,b){if(this.isOpen)if(b)this._sendHandler([a]);else{var c=k();!this.viewport||this.viewport.width==c.width&&this.viewport.height==c.height||(this.viewport=c,this.send()),this.data.push(a)}return this},function(){for(var b=[a.ClickiTrackerNameVar,a._DnA_ClieNt_iD_,"dc","stm_clicki","dnax_send"],c={},d=0;d<b.length;d++){var e=b[d];"function"!=typeof a[e]||c[e]||(c[e]=1,a[e]("provide","heatmap",q))}p()}()}(window,document);