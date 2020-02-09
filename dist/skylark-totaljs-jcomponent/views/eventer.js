/**
 * skylark-totaljs-jcomponent - A version of totaljs jcomponent that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-totaljs-jcomponent/
 * @license MIT
 */
define(["../langx","../binding/findFormat"],function(t,n){var e=" + ";return function(r){var i={};function o(a,s,l,u,c){if(-1!==a.indexOf(e)){for(var h=a.split(e).trim(),g=0;g<h.length;g++)o(h[g],s,l,u,c);return this}var v=!0;"^"===a.substring(0,1)&&(v=!1,a=a.substring(1));var m=null,x=a.indexOf("#");x&&(m=a.substring(0,x).trim(),a=a.substring(x+1).trim()),t.isFunction(s)?(l=s,s="watch"===a?"*":""):s=s.replace(".*","");var p={name:a,fn:l,owner:m,context:c};if("watch"===a){h=[];var d=n(s);if(d&&(s=d.path,p.format=d.fn),"."===s.substring(s.length-1)&&(s=s.substring(0,s.length-1)),37===s.charCodeAt(0)&&(s="jctmp."+s.substring(1)),33===(s=s.env()).charCodeAt(0))s=s.substring(1),h.push(s);else for(var b=s.split("."),w=[],O=0;O<b.length;O++){var $=b[O].lastIndexOf("[");if(-1!==$){var k=w.join(".");h.push(k+(k?".":"")+b[O].substring(0,$))}w.push(b[O]),h.push(w.join("."))}p.path=s,p.$path=h,v?f.push(p):f.unshift(p),u&&l.call(c||r,s,p.format?p.format(r.storing.get(s),s,0):r.storing.get(s),0)}else i[a]?v?i[a].push(p):i[a].unshift(p):i[a]=[p];return this}function a(t,e,r){if(-1!==t.indexOf("+")){for(var o=t.split("+").trim(),s=0;s<o.length;s++)a(o[s],e,r);return this}lang.isFunction(e)&&(r=e,e=""),void 0===e&&(e="");var l=null,u=t.indexOf("#");if(u&&(l=t.substring(0,u).trim(),t=t.substring(u+1).trim()),e){e=e.replace(".*","").trim();var c=n(e);c&&(e=c.path),"."===e.substring(e.length-1)&&(e=e.substring(0,e.length-1))}var h=0;!l||e||r||t?l&&t&&!r&&!e?h=2:l&&t&&e?h=3:l&&t&&e&&r?h=4:t&&e&&r?h=5:t&&e?h=7:r&&(h=6):h=1;var g=function(n,i){return n.remove(function(n){return!(h>2&&h<5&&n.path!==e)&&(1===h?n.owner===l:2===h?i===t&&n.owner===l:3===h?i===t&&n.owner===l:4===h?i===t&&n.owner===l&&n.fn===r:5===h||6===h?i===t&&n.fn===r:6===h?n.fn===r:7===h?i===t&&n.path===e:i===t)})};return Object.keys(i).forEach(function(t){i[t]=g(i[t],t),i[t].length||delete i[t]}),f=g(f,"watch"),this}var f=[];return{clean:function(){for(topic.each(function(t,n){for(index=0;;){var e=n[index++];if(void 0===e)break;null==e.context||e.context.element&&inDOM(e.context.element[0])||(e.context&&e.context.element&&e.context.element.remove(),e.context.$removed=!0,e.context=null,n.splice(index-1,1),n.length||delete i[t],index-=2,is=!0)}}),index=0;;){var t=f[index++];if(void 0===t)break;null==t.context||t.context.element&&inDOM(t.context.element[0])||(t.context&&t.context.element&&t.context.element.remove(),t.context.$removed=!0,t.context=null,f.splice(index-1,1),index-=2,is=!0)}},on:o,off:a,emit:function(t){var n=i[t];if(!n)return!1;for(var e=[],r=1,o=arguments.length;r<o;r++)e.push(arguments[r]);for(r=0,o=n.length;r<o;r++){var a=n[r].context;(void 0===a||null!==a&&!a.$removed)&&n[r].fn.apply(a||window,e)}return!0},watch:function n(i,a,f){if(-1!==i.indexOf(e)){for(var s=i.split(e).trim(),l=0;l<s.length;l++)n(s[l],a,f);return this}t.isFunction(i)&&(f=a,a=i,i="*");var u="";return"^"===i.substring(0,1)&&(i=i.substring(1),u="^"),o(u+"watch",i=r.binding.pathmaker(i,!0),a,f),this},unwatch:function t(n,r){if(-1!==n.indexOf(e)){for(var i=n.split(e).trim(),o=0;o<i.length;o++)t(i[o],r);return this}return a("watch",n,r)},emitwatch:function(t,n,e){for(var i=0,o=f.length;i<o;i++){var a=f[i];if("*"===a.path)a.fn.call(a.context,t,a.format?a.format(n,t,e):n,e);else if(t.length>a.path.length){var s=t.lastIndexOf(".",a.path.length);if(-1!==s&&a.path===t.substring(0,s)){var l=r.storing.get(a.path);a.fn.call(a.context,t,a.format?a.format(l,t,e):l,e)}}else for(var u=0,c=a.$path.length;u<c;u++)if(a.$path[u]===t){l=r.storing.get(a.path),a.fn.call(a.context,t,a.format?a.format(l,t,e):l,e);break}}}}}});
//# sourceMappingURL=../sourcemaps/views/eventer.js.map
