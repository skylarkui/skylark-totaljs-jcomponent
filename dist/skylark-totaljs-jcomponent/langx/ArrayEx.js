/**
 * skylark-totaljs-jcomponent - A version of totaljs jcomponent that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-totaljs-jcomponent/
 * @license MIT
 */
define(["skylark-langx/langx","./localCompare","./regexp"],function(t,i,n){var e=Array.prototype;function r(t,i,n,e,r){r.pending--,t.wait(i,n,e,r)}e.wait=e.waitFor=function(i,n,e,s){var a=this,u=!1;s||(t.isFunction(n)||(e=n,n=null),(s={}).pending=0,s.index=0,s.thread=e,u=!0);var h=!0===e?a.shift():a[s.index++];if(void 0===h)return s.pending||(n&&n(),s.cancel=!0),a;if(s.pending++,i.call(a,h,function(){setTimeout(r,1,a,i,n,e,s)},s.index),!u||1===s.thread)return a;for(var f=1;f<s.thread;f++)a.wait(i,n,1,s);return a},e.limit=function(t,i,n,e){void 0===e&&(e=0);for(var r=[],s=this,a=e+t,u=e;u<a;u++){var h=s[u];if(void 0===h)return r.length?(i(r,function(){n&&n()},e,e+t),s):(n&&n(),s);r.push(h)}return r.length?(i(r,function(){a<s.length?s.limit(t,i,n,a):n&&n()},e,e+t),s):(n&&n(),s)},e.async=function(i,n){if(t.isFunction(i)){var e=n;n=i,i=e}i||(i={});var r=this,s=0,a=function(){var t=r[s++];if(!t)return n&&n.call(i);t.call(i,a,s-1)};return a(),this},e.take=function(t){for(var i=[],n=this.length,e=0;e<n;e++)if(i.push(this[e]),i.length>=t)return i;return i},e.skip=function(t){for(var i=[],n=this.length,e=0;e<n;e++)e>=t&&i.push(this[e]);return i},e.takeskip=function(t,i){for(var n=[],e=this.length,r=0;r<e;r++)if(!(r<i)){if(n.length>=t)return n;n.push(this[r])}return n},e.trim=function(i){for(var n=[],e=0,r=this.length;e<r;e++)t.isString(this[e])&&(this[e]=this[e].trim()),(i||this[e])&&n.push(this[e]);return n},e.findIndex=function(i,n){for(var e=t.isFunction(i),r=void 0!==n,s=0,a=this.length;s<a;s++)if(e){if(i.call(this,this[s],s))return s}else if(r){if(this[s][i]===n)return s}else if(this[s]===i)return s;return-1},e.findAll=function(i,n){for(var e=t.isFunction(i),r=void 0!==n,s=[],a=0,u=this.length;a<u;a++)e?i.call(this,this[a],a)&&s.push(this[a]):r?this[a][i]===n&&s.push(this[a]):this[a]===i&&s.push(this[a]);return s},e.findItem=function(t,i){var n=this.findIndex(t,i);if(-1!==n)return this[n]},e.remove=function(i,n){for(var e=[],r=t.isFunction(i),s=void 0!==n,a=0,u=this.length;a<u;a++)r?!i.call(this,this[a],a)&&e.push(this[a]):s?this[a][i]!==n&&e.push(this[a]):this[a]!==i&&e.push(this[a]);return e},e.last=function(t){var i=this[this.length-1];return void 0===i?t:i},e.quicksort=function(t,n,e){var r=this.length;if(!r||1===r)return this;switch("boolean"==typeof t&&(n=t,t=void 0),null==n||"asc"===n?n=!0:"desc"===n&&(n=!1),e){case"date":e=4;break;case"string":e=1;break;case"number":e=2;break;case"bool":case"boolean":e=3;break;default:e=0}if(!e)for(var s=0;!e;){var a=this[s++];if(void 0===a)return this;switch(t&&(a=a[t]),typeof a){case"string":e=a.isJSONDate()?4:1;break;case"number":e=2;break;case"boolean":e=3;break;default:a instanceof Date&&(e=4)}}return this.sort(function(r,s){var a=t?r[t]:r,u=t?s[t]:s;if(null==a)return n?-1:1;if(null==u)return n?1:-1;if(1===e)return a&&u?n?i(a,u):i(u,a):0;if(2===e)return a>u?n?1:-1:a<u?n?-1:1:0;if(3===e)return!0===a&&!1===u?n?1:-1:!1===a&&!0===u?n?-1:1:0;if(4===e){if(!a||!u)return 0;a.getTime||(a=new Date(a)),u.getTime||(u=new Date(u));var h=a.getTime(),f=u.getTime();return h>f?n?1:-1:h<f?n?-1:1:0}return 0}),this},e.attr=function(t,i){if(2===arguments.length){if(null==i)return this}else void 0===i&&(i=t.toString());return this.push(t+'="'+i.toString().env().toString().replace(/[<>&"]/g,function(t){switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;"}return t})+'"'),this},e.scalar=function(i,n,e){for(var r=e,s=!1,a="avg"===i||"average"===i,u="distinct"===i,h=0,f=this.length;h<f;h++){var o=n?this[h][n]:this[h];if(t.isString(o)&&(o=o.parseFloat()),o instanceof Date&&(s=!0,o=o.getTime()),u)r||(r=[]),-1===r.indexOf(o)&&r.push(o);else if("median"!==i)if("sum"===i||a)r?r+=o:r=o;else switch("range"!==i?r||(r=o):r||((r=new Array(2))[0]=o,r[1]=o),i){case"range":r[0]=Math.min(r[0],o),r[1]=Math.max(r[1],o);break;case"min":r=Math.min(r,o);break;case"max":r=Math.max(r,o)}else r||(r=[]),r.push(o)}if(u)return r;if(a)return r/=this.length,s?new Date(r):r;if("median"===i){r||(r=[0]),r.sort(function(t,i){return t-i});var l=Math.floor(r.length/2);r=r.length%2?r[l]:(r[l-1]+r[l])/2}if(s){if(t.isNumber(r))return new Date(r);r[0]=new Date(r[0]),r[1]=new Date(r[1])}return r}});
//# sourceMappingURL=../sourcemaps/langx/ArrayEx.js.map
