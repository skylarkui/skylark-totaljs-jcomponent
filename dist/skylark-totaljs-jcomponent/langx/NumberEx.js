/**
 * skylark-totaljs-jcomponent - A version of totaljs jcomponent that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-totaljs-jcomponent/
 * @license MIT
 */
define(["./regexp"],function(t){var r=Number.prototype;r.pluralize=function(r,i,e,n){r instanceof Array&&(i=r[1],e=r[2],n=r[3],r=r[0]);var a=this,s="";return-1===(s=0==a?r||"":1==a?i||"":a>1&&a<5?e||"":n).indexOf("#")?s:s.replace(t.pluralize,function(t){return"##"===t?a.format():a.toString()})},r.format=function(t,r,i){var e=this.toString(),n="",a="",s="-"===e.substring(0,1)?"-":"";s&&(e=e.substring(1));var o,u=e.indexOf(".");"string"==typeof t&&("["===t.substring(0,1)?(o=ENV(t.substring(1,t.length-1)))&&(t=o.decimals,o.separator&&(r=o.separator),o.decimalseparator&&(i=o.decimalseparator)):(o=r,r=t,t=o));void 0===r&&(r=" "),-1!==u&&(n=e.substring(u+1),e=e.substring(0,u)),u=-1;for(var h=e.length-1;h>=0;h--)++u>0&&u%3==0&&(a=r+a),a=e[h]+a;return(t||n.length)&&(n=n.length>t?n.substring(0,t||0):n.padRight(t||0,"0")),n.length&&void 0===i&&(i=MD.decimalseparator),s+a+(n.length?i+n:"")},r.padLeft=function(t,r){return this.toString().padLeft(t,r||"0")},r.padRight=function(t,r){return this.toString().padRight(t,r||"0")},r.async=function(t,r){var i=this;return i>=0?t(i,function(){setTimeout(function(){(i-1).async(t,r)},1)}):r&&r(),i},r.add=r.inc=function(t,r){if(null==t)return this;if("number"==typeof t)return this+t;var i=t.charCodeAt(0),e=!1;(i<48||i>57)&&(e=!0,t=t.substring(1));var n,a=t.length;if("%"===t[a-1]){if(t=t.substring(0,a-1),e){var s=t.parseFloat();switch(i){case 42:n=this*(this/100*s);break;case 43:n=this+this/100*s;break;case 45:n=this-this/100*s;break;case 47:n=this/(this/100*s)}return void 0!==r?n.floor(r):n}return n=this/100*t.parseFloat(),void 0!==r?n.floor(r):n}switch(n=t.parseFloat(),i){case 42:n*=this;break;case 43:n=this+n;break;case 45:n=this-n;break;case 47:n=this/n;break;default:n=this}return void 0!==r?n.floor(r):n},r.floor=function(t){return Math.floor(this*Math.pow(10,t))/Math.pow(10,t)},r.parseDate=function(t){return new Date(this+(t||0))}});
//# sourceMappingURL=../sourcemaps/langx/NumberEx.js.map
