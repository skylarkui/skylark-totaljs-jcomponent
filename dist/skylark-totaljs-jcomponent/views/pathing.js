/**
 * skylark-totaljs-jcomponent - A version of totaljs jcomponent that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-totaljs-jcomponent/
 * @license MIT
 */
define([],function(){var t=" + ";return function(n){var r={},e=[];return{on:function n(i,a,f,o,s){if(-1!==i.indexOf(t)){for(var u=i.split(t).trim(),h=0;h<u.length;h++)n(u[h],a,f,o,s);return this}var l=!0;"^"===i.substring(0,1)&&(l=!1,i=i.substring(1));var c=null,g=i.indexOf("#");g&&(c=i.substring(0,g).trim(),i=i.substring(g+1).trim()),langx.isFunction(a)?(f=a,a="watch"===i?"*":""):a=a.replace(".*","");var p={name:i,fn:f,owner:c||current_owner,context:s||(null==current_com?void 0:current_com)};if("watch"===i){u=[];var v=findFormat(a);if(v&&(a=v.path,p.format=v.fn),"."===a.substring(a.length-1)&&(a=a.substring(0,a.length-1)),37===a.charCodeAt(0)&&(a="jctmp."+a.substring(1)),33===(a=a.env()).charCodeAt(0))a=a.substring(1),u.push(a);else for(var m=a.split("."),d=[],b=0;b<m.length;b++){var w=m[b].lastIndexOf("[");if(-1!==w){var x=d.join(".");u.push(x+(x?".":"")+m[b].substring(0,w))}d.push(m[b]),u.push(d.join("."))}p.path=a,p.$path=u,l?e.push(p):e.unshift(p),o&&f.call(s||M,a,p.format?p.format(get(a),a,0):get(a),0)}else r[i]?l?r[i].push(p):r[i].unshift(p):r[i]=[p],!C.ready&&("ready"===i||"init"===i)&&f();return this},off:function t(n,i,a){if(-1!==n.indexOf("+")){for(var f=n.split("+").trim(),o=0;o<f.length;o++)t(f[o],i,a);return this}lang.isFunction(i)&&(a=i,i=""),void 0===i&&(i="");var s=null,u=n.indexOf("#");if(u&&(s=n.substring(0,u).trim(),n=n.substring(u+1).trim()),i){i=i.replace(".*","").trim();var h=findFormat(i);h&&(i=h.path),"."===i.substring(i.length-1)&&(i=i.substring(0,i.length-1))}var l=0;!s||i||a||n?s&&n&&!a&&!i?l=2:s&&n&&i?l=3:s&&n&&i&&a?l=4:n&&i&&a?l=5:n&&i?l=7:a&&(l=6):l=1;var c=function(t,r){return t.remove(function(t){return!(l>2&&l<5&&t.path!==i)&&(1===l?t.owner===s:2===l?r===n&&t.owner===s:3===l?r===n&&t.owner===s:4===l?r===n&&t.owner===s&&t.fn===a:5===l||6===l?r===n&&t.fn===a:6===l?t.fn===a:7===l?r===n&&t.path===i:r===n)})};return Object.keys(r).forEach(function(t){r[t]=c(r[t],t),r[t].length||delete r[t]}),e=c(e,"watch"),this},emit:function(t){var n=r[t];if(!n)return!1;for(var e=[],i=1,a=arguments.length;i<a;i++)e.push(arguments[i]);for(i=0,a=n.length;i<a;i++){var f=n[i].context;(void 0===f||null!==f&&!f.$removed)&&n[i].fn.apply(f||window,e)}return!0},watch:function n(r,e,i){if(-1!==r.indexOf(t)){for(var a=r.split(t).trim(),f=0;f<a.length;f++)n(a[f],e,i);return this}langx.isFunction(r)&&(i=e,e=r,r="*");var o="";return"^"===r.substring(0,1)&&(r=r.substring(1),o="^"),r=pathmaker(r,!0),topic.on(o+"watch",r,e,i),this},unwatch:function n(r,e){if(-1!==r.indexOf(t)){for(var i=r.split(t).trim(),a=0;a<i.length;a++)n(i[a],e);return this}return topic.off("watch",r,e)},emitwatch:function(t,r,i){for(var a=0,f=e.length;a<f;a++){var o=e[a];if("*"===o.path)o.fn.call(o.context,t,o.format?o.format(r,t,i):r,i);else if(t.length>o.path.length){var s=t.lastIndexOf(".",o.path.length);if(-1!==s&&o.path===t.substring(0,s)){var u=n.get(o.path);o.fn.call(o.context,t,o.format?o.format(u,t,i):u,i)}}else for(var h=0,l=o.$path.length;h<l;h++)if(o.$path[h]===t){u=n.get(o.path),o.fn.call(o.context,t,o.format?o.format(u,t,i):u,i);break}}}}}});
//# sourceMappingURL=../sourcemaps/views/pathing.js.map