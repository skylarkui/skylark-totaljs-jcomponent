/**
 * skylark-totaljs-jcomponent - A version of totaljs jcomponent that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-totaljs-jcomponent/
 * @license MIT
 */
define(["../langx","skylark-utils-dom/query","skylark-utils-dom/plugins"],function(t,e,i){var n,r=t.statics,s={xs:{max:768},sm:{min:768,max:992},md:{min:992,max:1200},lg:{min:1200}},a=/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,l=0,d=[],m={INPUT:!0,TEXTAREA:!0,SELECT:!0};function h(){var t=window;if(d&&d.length)for(var i=t.orientation?90===Math.abs(t.orientation)?"landscape":"portrait":"",n=e(t),r=n.width(),a=n.height(),o=s,l=0,m=d.length;l<m;l++){var h=d[l],c=r,f=a;if(h.element&&(c=h.element.width(),f=h.element.height()),h.orientation){if(!i&&"portrait"!==h.orientation)continue;if(i!==h.orientation)continue}if(!(h.minW&&h.minW>=c)&&(!(h.maxW&&h.maxW<=c)&&!(h.minH&&h.minH>=f)&&!(h.maxH&&h.maxH<=f)&&(h.oldW!==c||h.oldH===f||h.maxH||h.minH)&&(h.oldH!==f||h.oldW===c||h.maxW||h.minW)&&(h.oldW!==c||h.oldH!==f))){var u=null;c>=o.md.min&&c<=o.md.max?u="md":c>=o.sm.min&&c<=o.sm.max?u="sm":c>o.lg.min?u="lg":c<=o.xs.max&&(u="xs"),h.oldW=c,h.oldH=f,h.fn(c,f,u,h.id)}}}function c(){h()}return e.fn.aclass=function(t){return this.addClass(t)},e.fn.rclass=function(t){return null==t?this.removeClass():this.removeClass(t)},e.fn.rattr=function(t){return this.removeAttr(t)},e.fn.rattrd=function(t){return this.removeAttr("data-"+t)},e.fn.rclass2=function(t){for(var e=(this.attr("class")||"").split(" "),i=typeof t===TYPE_O,n=0,r=e.length;n<r;n++){var s=e[n];s&&(i?t.test(s)&&this.rclass(s):-1!==s.indexOf(t)&&this.rclass(s))}return this},e.fn.hclass=function(t){return this.hasClass(t)},e.fn.tclass=function(t,e){return this.toggleClass(t,e)},e.fn.attrd=function(t,e){return t="data-"+t,null==e?this.attr(t):this.attr(t,e)},e.fn.asvg=function(t){if(-1===t.indexOf("<")){var i=document.createElementNS("http://www.w3.org/2000/svg",t);return this.append(i),e(i)}var n=document.createElementNS("http://www.w3.org/1999/xhtml","div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>";for(var r=document.createDocumentFragment();n.firstChild.firstChild;)r.appendChild(n.firstChild.firstChild);return r=e(r),this.append(r),r},e.fn.psvg=function(t){if(-1===t.indexOf("<")){var i=document.createElementNS("http://www.w3.org/2000/svg",t);return this.prepend(i),e(i)}var n=document.createElementNS("http://www.w3.org/1999/xhtml","div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>";for(var r=document.createDocumentFragment();n.firstChild.firstChild;)r.appendChild(n.firstChild.firstChild);return r=e(r),this.prepend(r),r},e.fn.rescroll=function(t,e){return this.each(function(){var i=this;if(i.scrollIntoView(!0),t)for(var n=0;i&&0==i.scrollTop&&n++<25;)if((i=i.parentNode)&&i.scrollTop){var r=i.scrollTop+t;return 0!=e&&i.scrollTop+i.getBoundingClientRect().height>=i.scrollHeight?void(i.scrollTop=i.scrollHeight):void(i.scrollTop=r)}}),this},c(),e(window).on("resize",c),e(window).on("orientationchange",h),e(function(){!0}),{devices:s,findInstance:function(t,e){if(!t.length)return null;for(var i=0;i<t.length;i++)if(t[i][e])return t[i][e];for(var n=t[0].parentElement;null!==n;){if(n[e])return n[e];n=n.parentElement}return null},inDOM:function(t){if(t){if("BODY"===t.nodeName)return!0;for(var e=t.parentNode;e;){if("BODY"===e.nodeName)return!0;e=e.parentNode}}},importscripts:function(i){for(var n,s=-1,a=i,o=[];-1!==(s=i.indexOf("<script",s));){var l=i.indexOf("<\/script>",s+8),d=i.substring(s,l+9);if(s=l+9,l=d.indexOf(">"),(-1===(n=d.substring(0,l)).indexOf("type=")||-1!==n.lastIndexOf("javascript"))&&!d.substring(l+1,d.length-9).trim()){a=a.replace(d,"").trim();var m="external"+t.hashCode(d);r[m]||(o.push(d),r[m]=!0)}}return o.length&&e("head").append(o.join("\n")),a},importstyles:function(t,i){var n=[];t=t.replace(a,function(t){return t=t.replace("<style>",'<style type="text/css">'),n.push(t.substring(23,t.length-8).trim()),""});var s="css"+(i||"");return i&&(r[s]?e("#"+s).remove():r[s]=!0),n.length&&e("<style"+(i?' id="'+s+'"':"")+">{0}</style>".format(n.join("\n"))).appendTo("head"),t},inputable:function(t){var e=t.tagName||t;return m[e]},keyPress:function(e,i,n){i||(i=300);var r=e.toString(),s=r.length-20;s<0&&(s=0);var a=n||t.hashCode(r.substring(0,20)+"X"+r.substring(s))+"_keypress";t.setTimeout2(a,e,i)},mediaquery:h,mediaWidth:function(t){t||(t=e(Window));var i=t.width(),n=s;return i>=n.md.min&&i<=n.md.max?"md":i>=n.sm.min&&i<=n.sm.max?"sm":i>n.lg.min?"lg":i<=n.xs.max?"xs":""},Plugin:i.Plugin,removescripts:function(t){return t.replace(o,function(t){var e=t.indexOf(">"),i=t.substring(0,e+1);return"<style"===i.substring(0,6)||"<script"===i.substring(0,7)&&-1===i.indexOf('type="')||-1!==i.indexOf('/javascript"')?"":t})},scrollbarWidth:function(){var t="jcscrollbarwidth";if(void 0!==n)return n;var i=document.body;e(i).append('<div id="{0}" style="width{1}height{1}overflow:scroll;position:absolute;top{2}left{2}"></div>'.format(t,":100px;",":9999px;"));var r=document.getElementById(t);return n=r.offsetWidth-r.clientWidth,i.removeChild(r),n},style:function(t,i){i&&e("#css"+i).remove(),e('<style type="text/css"'+(i?' id="css'+i+'"':"")+">"+(t instanceof Array?t.join(""):t)+"</style>").appendTo("head")},watchMedia:function e(i,n,r){if(t.isNumber(i))return d.remove("id",i),!0;if(t.isFunction(n)&&(r=n,n=null),-1!==(i=i.toLowerCase()).indexOf(",")){var a=[];return i.split(",").forEach(function(t){(t=t.trim())&&a.push(e(t,n,r))}),a}var o=s;"md"===i?i="min-width:{0}px and max-width:{1}px".format(o.md.min,o.md.max):"lg"===i?i="min-width:{0}px".format(o.lg.min):"xs"===i?i="max-width:{0}px".format(o.xs.max):"sm"===i&&(i="min-width:{0}px and max-width:{1}px".format(o.sm.min,o.sm.max));var m=i.match(/(max-width|min-width|max-device-width|min-device-width|max-height|min-height|max-device-height|height|width):(\s)\d+(px|em|in)?/gi),h={},c=function(t){var e=parseInt(t.match(/\d+/),10);return t.match(/\d+(em)/)?16*e:t.match(/\d+(in)/)?.010416667*e>>0:e};if(m)for(var f=0,u=m.length;f<u;f++){var p=(g=m[f]).indexOf(":");switch(g.substring(0,p).toLowerCase().trim()){case"min-width":case"min-device-width":case"width":h.minW=c(g);break;case"max-width":case"max-device-width":h.maxW=c(g);break;case"min-height":case"min-device-height":case"height":h.minH=c(g);break;case"max-height":case"max-device-height":h.maxH=c(g)}}if(m=i.match(/orientation:(\s)(landscape|portrait)/gi))for(f=0,u=m.length;f<u;f++){var g;-1!==(g=m[f]).toLowerCase().indexOf("portrait")?h.orientation="portrait":h.orientation="landscape"}return h.id=l++,h.fn=r,n&&(h.element=n),d.push(h),h.id}}});
//# sourceMappingURL=../sourcemaps/utils/domx.js.map
