(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/1u1":function(e,t,n){},"1tub":function(e,t,n){"use strict";n.r(t);n("07d7");var i={name:"Project",data:function(){return{index:null}},components:{Tinybox:n("doiw").a,ReadProgress:function(){return n.e(5).then(n.t.bind(null,"Xwyb",7)).then((function(e){return e.default})).catch()}},computed:{mainImage:function(){return this.$page.project.mainImage},images:function(){return[this.mainImage]}}},o=(n("fotE"),n("KHd+")),a=null,s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("ClientOnly",[n("Tinybox",{attrs:{images:e.images,"no-thumbs":""},model:{value:e.index,callback:function(t){e.index=t},expression:"index"}}),n("read-progress",{attrs:{color:"#c1c1c1"}})],1),n("section",{staticClass:"project"},[n("h2",{staticClass:"project__name"},[e._v(e._s(e.$page.project.title))]),n("div",{staticClass:"project-image-container"},[n("g-image",{staticClass:"project__image",attrs:{src:e.mainImage},on:{click:function(){return e.index=0}}})],1),n("div",{staticClass:"project-links"},[n("a",{staticClass:"link project-links__link",attrs:{href:e.$page.project.repoLink,rel:"noopener noreferrer",target:"blank"}},[e._v("Code")]),n("a",{staticClass:"link project-links__link",attrs:{href:e.$page.project.liveLink,rel:"noopener noreferrer",target:"blank"}},[e._v("Live preview")])]),n("article",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"markdown-body",domProps:{innerHTML:e._s(e.$page.project.content)}})])],1)}),[],!1,null,"5a453b8f",null);"function"==typeof a&&a(s);t.default=s.exports},doiw:function(e,t,n){"use strict";(function(e){var n={name:"Tinybox",model:{prop:"index",event:"change"},props:{images:{type:Array,default:function(){return[]}},index:{type:Number,default:null},loop:{type:Boolean,default:!1},noThumbs:{type:Boolean,default:!1}},data:function(){return{slide:"next",swipeDone:!1,swipeX:null}},computed:{open:function(){return null!=this.index},prevImage:function(){return this.index>0?this.index-1:this.loop?this.images.length-1:this.index},nextImage:function(){return this.index<this.images.length-1?this.index+1:this.loop?0:this.index}},watch:{open:function(e){e?window.addEventListener("keyup",this.keyup):window.removeEventListener("keyup",this.keyup)},index:function(e){var t=this;this.noThumbs||null==e||this.$nextTick((function(){var n=t.$refs,i=n.thumbs,o=n.thumbItems[e];if(o.offsetLeft+o.clientWidth/2>window.innerWidth/2){var a=o.offsetLeft-window.innerWidth/2;a<i.scrollWidth?i.scrollLeft=a+o.clientWidth/2:i.scrollLeft=i.scrollWidth}else i.scrollLeft=0}))}},methods:{close:function(){var e=this.index;this.goto(null),this.$emit("close",e)},prev:function(){this.$emit("prev",this.prevImage),this.goto(this.prevImage,"prev")},next:function(){this.$emit("next",this.nextImage),this.goto(this.nextImage,"next")},goto:function(e,t){this.slide=t||(this.index<e?"next":"prev"),this.$emit("change",e)},keyup:function(e){"ArrowRight"===e.code||"ArrowRight"===e.key||"Right"===e.key||39===e.keyCode?this.next():"ArrowLeft"===e.code||"ArrowLeft"===e.key||"Left"===e.key||37===e.keyCode?this.prev():"Escape"!==e.code&&"Escape"!==e.key&&"Esc"!==e.key&&27!==e.keyCode||this.close()},swipeStart:function(e){this.swipeDone=!1,1===e.changedTouches.length&&(this.swipeX=e.changedTouches[0].screenX)},swipe:function(e){if(!this.swipeDone&&1===e.changedTouches.length){var t=e.changedTouches[0].screenX-this.swipeX;t>=50?(this.prev(),this.swipeDone=!0):t<=-50&&(this.next(),this.swipeDone=!0)}}}};var i,o="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var a={};const s=function(e,t,n,i,o,a,s,r,c,d){"boolean"!=typeof s&&(c=r,r=s,s=!1);var l,p="function"==typeof n?n.options:n;if(e&&e.render&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),i&&(p._scopeId=i),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},p._ssrRegister=l):t&&(l=s?function(e){t.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),l)if(p.functional){var u=p.render;p.render=function(e,t){return l.call(t),u(e,t)}}else{var h=p.beforeCreate;p.beforeCreate=h?[].concat(h,l):[l]}return n}({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.open?n("div",{staticClass:"tinybox",on:{click:e.close,wheel:function(e){e.preventDefault()},touchmove:function(e){e.preventDefault()}}},[n("div",{staticClass:"tinybox__content",class:{"tinybox__content--no-thumbs":e.noThumbs},on:{touchstart:e.swipeStart,touchmove:e.swipe}},[n("transition",{attrs:{name:e.slide}},[n("img",{key:e.images[e.index].src||e.images[e.index]||"",staticClass:"tinybox__content__image",attrs:{src:e.images[e.index].src||e.images[e.index]||"",alt:e.images[e.index].alt||e.images[e.index].caption||""},on:{click:function(t){return t.stopPropagation(),e.next(t)}}})]),e.images[e.index].caption?n("span",{staticClass:"tinybox__content__image__caption",domProps:{textContent:e._s(e.images[e.index].caption)}}):e._e(),e.prevImage!==e.index?n("div",{staticClass:"tinybox__content__control tinybox__content__control--prev",on:{click:function(t){return t.stopPropagation(),e.prev(t)}}}):e._e(),e.nextImage!==e.index?n("div",{staticClass:"tinybox__content__control tinybox__content__control--next",on:{click:function(t){return t.stopPropagation(),e.next(t)}}}):e._e(),n("div",{staticClass:"tinybox__content__control tinybox__content__control--close",on:{click:function(t){return t.stopPropagation(),e.close(t)}}})],1),e.noThumbs?e._e():n("div",{ref:"thumbs",staticClass:"tinybox__thumbs",on:{touchmove:function(e){e.stopPropagation()},wheel:function(e){e.stopPropagation()}}},e._l(e.images,(function(t,i){return n("img",{key:i,ref:"thumbItems",refInFor:!0,staticClass:"tinybox__thumbs__item",class:{"tinybox__thumbs__item--active":e.index===i},attrs:{src:t.thumbnail||t.src||t||"",alt:e.images[e.index].alt||e.images[e.index].caption||""},on:{click:function(t){return t.stopPropagation(),e.goto(i)}}})})),0)]):e._e()])},staticRenderFns:[]},(function(e){e&&e("data-v-7c98eda5_0",{source:".tinybox[data-v-7c98eda5]{background-color:rgba(0,0,0,.9);bottom:0;left:0;position:fixed;right:0;text-align:center;top:0;z-index:1000}.tinybox__content[data-v-7c98eda5]{height:85%;position:relative;width:100%;display:flex;align-items:center;justify-content:center}.tinybox__content--no-thumbs[data-v-7c98eda5]{height:100%}.tinybox__content__image[data-v-7c98eda5]{background-color:#222;cursor:pointer;display:inline-block;max-height:90%;max-width:80%;position:absolute}.tinybox__content__image__caption[data-v-7c98eda5]{position:absolute;bottom:0;padding:.5rem .75rem;border-radius:5px;color:#fff;background-color:rgba(0,0,0,.9);opacity:.75;font-family:sans-serif;font-weight:lighter;font-size:1.2rem}.tinybox__content__control[data-v-7c98eda5]{background:no-repeat center/24px;cursor:pointer;opacity:.5;position:absolute;top:0;transition:opacity .3s ease;width:4em}.tinybox__content__control[data-v-7c98eda5]:hover{opacity:1}.tinybox__content__control--prev[data-v-7c98eda5]{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='2 -2 28 36' width='40' height='60' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3'%3E%3Cpath d='M20 30 L8 16 20 2' /%3E%3C/svg%3E\");bottom:0;left:0}.tinybox__content__control--next[data-v-7c98eda5]{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='2 -2 28 36' width='40' height='60' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3'%3E%3Cpath d='M12 30 L24 16 12 2' /%3E%3C/svg%3E\");bottom:0;right:0}.tinybox__content__control--close[data-v-7c98eda5]{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 46 46' width='40' height='40' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'%3E%3Cpath d='M2 30 L30 2 M30 30 L2 2' /%3E%3C/svg%3E\");height:2.6em;right:0}.tinybox__thumbs[data-v-7c98eda5]{bottom:0;height:15%;left:0;line-height:0;padding:0 10px;position:absolute;right:0;overflow-x:scroll;overflow-y:hidden;scroll-behavior:smooth;white-space:nowrap}.tinybox__thumbs__item[data-v-7c98eda5]{cursor:pointer;display:inline-block;height:10vh;margin:2.5vh 5px;object-fit:cover;overflow:hidden;width:10vh}.tinybox__thumbs__item--active[data-v-7c98eda5]{opacity:.3}.fade-enter[data-v-7c98eda5],.fade-leave-active[data-v-7c98eda5],.next-enter[data-v-7c98eda5],.next-leave-active[data-v-7c98eda5],.prev-enter[data-v-7c98eda5],.prev-leave-active[data-v-7c98eda5]{opacity:0}.fade-enter-active[data-v-7c98eda5],.fade-leave-active[data-v-7c98eda5],.next-leave-active[data-v-7c98eda5],.prev-leave-active[data-v-7c98eda5]{transition:opacity .3s ease}.prev-enter[data-v-7c98eda5]{transform:translateX(-40px)}.next-enter[data-v-7c98eda5]{transform:translateX(40px)}.next-enter-active[data-v-7c98eda5],.prev-enter-active[data-v-7c98eda5]{transition:opacity .3s ease,transform .3s ease}",map:void 0,media:void 0})}),n,"data-v-7c98eda5",!1,void 0,!1,(function(e){return function(e,t){return function(e,t){var n=o?t.media||"default":e,s=a[n]||(a[n]={ids:new Set,styles:[]});if(!s.ids.has(e)){s.ids.add(e);var r=t.source;if(t.map&&(r+="\n/*# sourceURL="+t.map.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",t.media&&s.element.setAttribute("media",t.media),void 0===i&&(i=document.head||document.getElementsByTagName("head")[0]),i.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(r),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{var c=s.ids.size-1,d=document.createTextNode(r),l=s.element.childNodes;l[c]&&s.element.removeChild(l[c]),l.length?s.element.insertBefore(d,l[c]):s.element.appendChild(d)}}}(e,t)}}),void 0,void 0);var r=null;"undefined"!=typeof window?r=window.Vue:void 0!==e&&(r=e.Vue),r&&r.use({install:function e(t){e.installed||(e.installed=!0,t.component(s.name,s))}}),t.a=s}).call(this,n("yLpj"))},fotE:function(e,t,n){"use strict";n("/1u1")}}]);