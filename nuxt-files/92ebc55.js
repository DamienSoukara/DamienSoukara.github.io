(window.webpackJsonp=window.webpackJsonp||[]).push([[35,6,10,18],{393:function(e,t,n){var r=n(16),o="["+n(394)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(l,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},394:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},395:function(e,t,n){"use strict";var r=n(11),o=n(3),l=n(64),c=n(17),d=n(12),h=n(29),f=n(148),m=n(63),v=n(5),y=n(65),I=n(101).f,C=n(38).f,_=n(18).f,w=n(393).trim,k="Number",M=o.Number,x=M.prototype,T=h(y(x))==k,E=function(e){var t,n,r,o,l,c,d,code,h=m(e,!1);if("string"==typeof h&&h.length>2)if(43===(t=(h=w(h)).charCodeAt(0))||45===t){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(h.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+h}for(c=(l=h.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+h};if(l(k,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var S,N=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof N&&(T?v((function(){x.valueOf.call(n)})):h(n)!=k)?f(new M(E(t)),n,N):E(t)},O=r?I(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;O.length>D;D++)d(M,S=O[D])&&!d(N,S)&&_(N,S,C(M,S));N.prototype=x,x.constructor=N,c(o,k,N)}},396:function(e,t,n){"use strict";n.r(t);n(62),n(48),n(100),n(103),n(395),n(66),n(147),n(30),n(67),n(102),n(49),n(39),n(40);var r={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(e){return["height","width"].includes(e)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var e=this,t=[];return Object.keys(this.cachedStyles).forEach((function(n){t.push("".concat(e.convertToCssProperty(n)," ").concat(e.duration,"ms ").concat(e.easing))})),t.join(", ")}},methods:{enter:function(e,t){this.detectAndCacheDimensions(e),this.setClosedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setOpenedDimensions(e),setTimeout(t,this.duration)},afterEnter:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions()},leave:function(e,t){this.detectAndCacheDimensions(e),this.setOpenedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setClosedDimensions(e),setTimeout(t,this.duration)},afterLeave:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions()},detectAndCacheDimensions:function(e){if(!this.cachedStyles){var t=e.style.visibility,n=e.style.display;e.style.visibility="hidden",e.style.display="",this.cachedStyles=this.detectRelevantDimensions(e),e.style.visibility=t,e.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(e){return"height"===this.dimension?{height:e.offsetHeight+"px",paddingTop:e.style.paddingTop||this.getCssValue(e,"padding-top"),paddingBottom:e.style.paddingBottom||this.getCssValue(e,"padding-bottom")}:"width"===this.dimension?{width:e.offsetWidth+"px",paddingLeft:e.style.paddingLeft||this.getCssValue(e,"padding-left"),paddingRight:e.style.paddingRight||this.getCssValue(e,"padding-right")}:{}},setTransition:function(e){e.style.transition=this.transition},unsetTransition:function(e){e.style.transition=""},hideOverflow:function(e){e.style.overflow="hidden"},unsetOverflow:function(e){e.style.overflow=""},setClosedDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]="0"}))},setOpenedDimensions:function(e){var t=this;Object.keys(this.cachedStyles).forEach((function(n){e.style[n]=t.cachedStyles[n]}))},unsetDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]=""}))},forceRepaint:function(e){getComputedStyle(e)[this.dimension]},getCssValue:function(e,style){return getComputedStyle(e,null).getPropertyValue(style)},convertToCssProperty:function(style){var e=style.match(/([A-Z])/g);if(!e)return style;for(var i=0,t=e.length;i<t;i++)style=style.replace(new RegExp(e[i]),"-"+e[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},o=n(8),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{name:e.name},on:{enter:e.enter,"after-enter":e.afterEnter,leave:e.leave,"after-leave":e.afterLeave}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},397:function(e,t,n){"use strict";var r=n(4),o=n(393).trim;r({target:"String",proto:!0,forced:n(398)("trim")},{trim:function(){return o(this)}})},398:function(e,t,n){var r=n(5),o=n(394);e.exports=function(e){return r((function(){return!!o[e]()||"​᠎"!="​᠎"[e]()||o[e].name!==e}))}},399:function(e,t,n){"use strict";n.r(t);n(100),n(397);var r={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function e(t,n){for(var r,o=new Array(1+n++).join("  "),l=new Array(n-1).join("  "),i=0;i<t.children.length;i++)r=document.createTextNode("\n"+o),t.insertBefore(r,t.children[i]),e(t.children[i],n),t.lastElementChild==t.children[i]&&(r=document.createTextNode("\n"+l),t.appendChild(r));return t}var t,div;this.sourcecode=(t=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=t.trim()+"\n",e(div,0).innerHTML)}},mounted:function(){this.setSrc()}},o=n(8),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"py-2 text-xs capitalize opacity-50"},[e.nocode?e._e():n("div",{staticClass:"inline-block select-none",on:{click:function(t){e.showcode=!e.showcode}}},[e.showcode?e._e():n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"code"}}),e._v(" "),e.showcode?n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"eye"}}):e._e()],1),e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),n("div",[n("collapse-transition",[!e.nocode&&e.showcode?n("div",[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):e._e()]),e._v(" "),n("collapse-transition",[e.showcode?e._e():n("div",[n("div",{ref:"component",class:e.classes},[e._t("default")],2)])])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:n(146).default,CollapseTransition:n(396).default})},402:function(e,t,n){"use strict";n.r(t);var r=n(8),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"badge"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},437:function(e,t,n){"use strict";n.r(t);var r=n(8),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Wrapper",{attrs:{title:"veritcal with icons",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"py-4 artboard artboard-demo bg-base-200"},[n("Menu",{staticClass:"py-3 shadow-lg bg-base-100 bg-neutral-focus rounded-box"},[n("MenuItem",{staticClass:"menu-title"},[n("span",[e._v("\n            Menu Title\n          ")])]),e._v(" "),n("MenuItem",[n("a",[e._v("\n            Item without icon\n          ")])]),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"eye"}}),e._v("\n            Item with icon\n          ")],1)]),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),e._v("\n            Item with icon\n            "),n("Badge",{staticClass:"ml-2 success"},[e._v("3")])],1)])],1)],1)]),e._v(" "),n("Wrapper",{attrs:{title:"veritcal with icons and padding",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"py-4 artboard artboard-demo bg-base-200"},[n("Menu",{staticClass:"p-4 shadow-lg bg-base-100 bg-neutral-focus rounded-box"},[n("MenuItem",{staticClass:"menu-title"},[n("span",[e._v("\n            Menu Title\n          ")])]),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"eye"}}),e._v("\n            Item with icon\n          ")],1)]),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"code"}}),e._v("\n            Item with icon\n          ")],1)]),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),e._v("\n            Item with icon\n          ")],1)])],1)],1)]),e._v(" "),n("Wrapper",{attrs:{title:"bordered, hover-bordered, disabled",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"py-4 artboard artboard-demo bg-base-200"},[n("Menu",{staticClass:"py-4 shadow-lg bg-base-100 bg-neutral-focus rounded-box"},[n("MenuItem",{staticClass:"menu-title"},[n("span",[e._v("\n            Menu Title\n          ")])]),e._v(" "),n("MenuItem",{staticClass:"bordered disabled"},[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),e._v("\n            Item is disabled\n          ")],1)]),e._v(" "),n("MenuItem",{staticClass:"bordered"},[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),e._v("\n            It has border\n          ")],1)]),e._v(" "),n("MenuItem",{staticClass:"hover-bordered"},[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),e._v("\n            It shows border on hover\n          ")],1)])],1)],1)]),e._v(" "),n("Wrapper",{attrs:{title:"horizontal",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"py-4 artboard artboard-demo bg-base-200"},[n("Menu",{staticClass:"items-stretch px-3 shadow-lg bg-base-100 bg-neutral-focus horizontal rounded-box"},[n("MenuItem",[n("a",[e._v("\n            With link\n          ")])]),e._v(" "),n("MenuItem",{staticClass:"bordered"},[n("a",[e._v("\n            Bordered\n          ")])]),e._v(" "),n("MenuItem",[n("span",[e._v("\n            With a span\n          ")])]),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-6 h-6 mr-2 stroke-current",attrs:{glyph:"eye"}}),e._v("\n            With icon\n          ")],1)])],1)],1)]),e._v(" "),n("Wrapper",{attrs:{title:"veritcal with icon",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"py-4 artboard artboard-demo bg-base-200"},[n("Menu",{staticClass:"w-16 py-3 shadow-lg bg-base-100 bg-neutral-focus rounded-box"},[n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"bell"}})],1)]),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"code"}})],1)]),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"eye"}})],1)])],1)],1)]),e._v(" "),n("Wrapper",{attrs:{title:"horizontal with icon",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"py-4 artboard artboard-demo bg-base-200"},[n("Menu",{staticClass:"px-3 shadow-lg bg-base-100 bg-neutral-focus rounded-box horizontal"},[n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"bell"}})],1)]),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"code"}})],1)]),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-6 h-6 stroke-current",attrs:{glyph:"eye"}})],1)])],1)],1)]),e._v(" "),n("Wrapper",{attrs:{title:"veritcal with submenu",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"py-4 artboard artboard-demo bg-base-200"},[n("Menu",{staticClass:"p-4 shadow-lg bg-base-100 bg-neutral-focus rounded-box"},[n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),e._v("\n            Level 1\n          ")],1)]),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),e._v("\n            Level 1\n          ")],1),e._v(" "),n("Menu",[n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),e._v("\n                Level 2\n              ")],1)]),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),e._v("\n                Level 2\n              ")],1),e._v(" "),n("Menu",[n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),e._v("\n                    Level 3\n                  ")],1)])],1)],1),e._v(" "),n("MenuItem",[n("a",[n("Icon",{staticClass:"inline-block w-5 h-5 mr-2 stroke-current",attrs:{glyph:"folder"}}),e._v("\n                Level 2\n              ")],1)])],1)],1)],1)],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{MenuItem:n(149).default,Icon:n(146).default,Badge:n(402).default,Menu:n(150).default,Wrapper:n(399).default})}}]);