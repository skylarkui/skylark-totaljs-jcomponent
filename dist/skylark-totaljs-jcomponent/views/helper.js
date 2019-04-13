/**
 * skylark-totaljs-jcomponent - A version of totaljs jcomponent that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-totaljs-jcomponent/
 * @license MIT
 */
define(["../langx","../utils/query","../components/Component"],function(t,n,e){return function(t){var r="[data-jc]",a="[data-jc-url]",i="jc",o="data-jc-removed",u="data-jc-released",c="data-jc-scope",s="data-jc-comile",d=/(data-jc|data-jc-url|data-jc-import|data-bind|bind)=|COMPONENT\(/;function l(t,n,e){var r=t.childNodes,a=[];domx.inputable(t)&&n(t),null==e?e=0:e++;for(var i=0,o=r.length;i<o;i++){var u=r[i];if(u&&u.tagName&&(u.childNodes.length&&"SCRIPT"!==u.tagName&&null==u.getAttribute("data-jc")&&a.push(u),domx.inputable(u)&&null!=u.getAttribute("data-jc-bind")&&!1===n(u)))return}for(i=0,o=a.length;i<o;i++)if((u=a[i])&&!1===l(u,n,e))return}return{attrcom:function(t,n){return n=n?"-"+n:"",t.getAttribute?t.getAttribute("data-jc"+n):t.attrd("jc"+n)},attrbind:function(t){return t.getAttribute("data-bind")||t.getAttribute("bind")},attrscope:function(t){return t.getAttribute(c)},canCompile:function(t){var n=t.innerHTML?t.innerHTML:t;return d.test(n)},Component:e,findComponent:function(n,e,r){for(var a,i=t.components,o=e?e.split(" "):[],u="",c="",s="",d="",l=0,f=o.length;l<f;l++)switch(o[l].substring(0,1)){case"*":break;case".":u=o[l].substring(1);break;case"#":-1!==(a=(s=o[l].substring(1)).indexOf("["))&&(u=s.substring(a+1,s.length-1).trim(),s=s.substring(0,a));break;default:-1!==(a=(c=o[l]).indexOf("["))&&(u=c.substring(a+1,c.length-1).trim(),c=c.substring(0,a)),-1!==(a=c.lastIndexOf("@"))&&(d=c.substring(a+1),c=c.substring(0,a))}var p=r?void 0:[];if(n){var m=!1;n.find("["+t.option("elmAttrNames.com.base")+"]").each(function(){var t=this.$com;m||!t||!t.$loaded||t.$removed||s&&t.id!==s||c&&t.$name!==c||d&&t.$version!==d||u&&(t.$pp||t.path!==u&&(!t.pathscope||t.pathscope+"."+u!==t.path))||(r?!1===r(t)&&(m=!0):p.push(t))})}else for(l=0,f=i.length;l<f;l++){var h=i[l];if(!(!h||!h.$loaded||h.$removed||s&&h.id!==s||c&&h.$name!==c||d&&h.$version!==d||u&&(h.$pp||h.path!==u&&(!h.pathscope||h.pathscope+"."+u!==h.path))))if(r){if(!1===r(h))break}else p.push(h)}return p},findControl:l,findControl2:function(t,n){t.$inputcontrol&&t.$inputcontrol%2!=0?t.$inputcontrol++:l((n||t.element)[0],function(n){n.$com&&n.$com===t||(n.$com=t,t.$inputcontrol=1)})},findUrl:function(t){return n(a,t)},kill:function(t){var e=n(t);e.removeData(i),e.attr(o,"true").find(r).attr(o,"true")},makeurl:function(t,n){var e=[];return encodeURIComponent,e.length?(t+=-1==t.indexOf("?")?"?":"&")+e.join("&"):t},nested:function(t){var e=[];return n(t).find(r).each(function(){var t=n(this),r=t[0].$com;r&&!t.attr(o)&&(r instanceof Array?e.push.apply(e,r):e.push(r))}),e},nocompile:function(t,e){return void 0===e?"0"===(e=n(t).attr(s))||"false"===e:(n(t).attr(s,e),this)},released:function(t,e){return void 0===e?"0"===(e=n(t).attr(u))||"false"===e:(n(t).attr(u,e),this)},scope:function(t){var e=n(t).closest("["+s+"]");if(e&&e.length)return reesults[0]}}}});
//# sourceMappingURL=../sourcemaps/views/helper.js.map