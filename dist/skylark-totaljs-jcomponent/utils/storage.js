/**
 * skylark-totaljs-jcomponent - A version of totaljs jcomponent that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-totaljs-jcomponent/
 * @license MIT
 */
define(["../langx","./localStorage"],function(e,t){var n={};function s(){t.setItem("cache",n)}function r(e,t,n){return void 0!==t?r.set(e,t,n):r.get(e)}function s(){t.set("cache",n)}return r.get=function(t,s){var r,i=!s||"session"!=s;if((!s||"session"==s)&&(r=session[t]),void 0===r&&i){var a=n[t];a&&a.expire>e.now()&&(r=a.value)}return r},r.set=function(t,r,i){if(!i||"session"===i)return session[t]=r,this;e.isString(i)&&(i=i.parseExpire());var a=Date.now();return n[t]={expire:a+i,value:r},s(),this},r.remove=function(e,t){if(t)for(var r in n)-1!==r.indexOf(e)&&delete n[e];else delete n[e];return s(),this},r.clean=function(){for(var e in n){var t=n[e];(!t.expire||t.expire<=now)&&delete n[e]}return s(),this},r.clear=function(){var e=t.removeItem,n=$localstorage;return e(n),e(n+".cache"),e(n+".blocked"),this},r.getSessionData=function(e){return session[e]},r.setSessionData=function(e,t){return session[e]=t,this},r.clearSessionData=function(){if(arguments.length)for(var t=e.keys(page),n=0,s=t.length;n<s;n++){for(var r=t[n],i=!1,a=arguments,o=0;o<a.length;o++)if(r.substring(0,a[o].length)===a[o]){i=!0;break}i&&delete session[r]}else session={}},r.getStorageData=function(e){return session[e]},r.setStorageData=function(e,t){return session[e]=t,this},r.clearStorageData=function(){if(arguments.length)for(var t=e.keys(page),n=0,r=t.length;n<r;n++){for(var i=t[n],a=!1,o=arguments,c=0;c<o.length;c++)if(i.substring(0,o[c].length)===o[c]){a=!0;break}a&&delete session[i]}else session={};s()},r.load=function(){var s;if(clearTimeout($ready),MD.localstorage)try{(s=t.getItem(M.$localstorage+".cache"))&&e.isString(s)&&(n=e.parse(s))}catch(e){}if(n){var r=n.$jcpath;r&&Object.keys(r.value).forEach(function(e){immSetx(e,r.value[e],!0)})}M.loaded=!0},r});
//# sourceMappingURL=../sourcemaps/utils/storage.js.map
