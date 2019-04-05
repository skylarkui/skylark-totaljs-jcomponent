/**
 * skylark-totaljs-jcomponent - A version of totaljs jcomponent that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-totaljs-jcomponent/
 * @license MIT
 */
define(["../langx"],function(t){var e="https://cdn.componentator.com/j-{0}.html",n={};e={$:0};function i(e,n,i,r){e.importing?t.wait(function(){return!0!==e.importing},function(){n(i,r)}):e.dependencies&&e.dependencies.length?(e.importing=!0,e.dependencies.wait(function(e,n){t.isFunction(e)?e(n):IMPORT((-1===e.indexOf("<")?"once ":"")+e,n)},function(){e.importing=!1,n(i,r)},3)):setTimeout(function(t,e,n){t(e,n)},5,n,i,r)}return function(r,c,a,o,s){var m=$(a),p=c.split(REGMETA);if(p.length?c=(p=p.trim(!0))[0]:p=null,has=!0,statics["$ST_"+c])remove(m);else{for(var u=[],f=c.split(","),l=0;l<f.length;l++){var h=!1;if(-1!==(c=f[l].trim()).indexOf("|")){for(var d=c.split("|"),g=0;g<d.length;g++){var v=d[g].trim();if(v&&M.$components[v]){c=v,h=!0;break}}h||(c=d[0].trim())}var k=!1;"lazy "===c.substring(0,5).toLowerCase()&&(c=c.substring(5),k=!0),h||-1!==c.lastIndexOf("@")||(versions[c]?c+="@"+versions[c]:MD.version&&(c+="@"+MD.version));var O=M.$components[c],b=null;if(k&&c){var N=c.substring(0,c.indexOf("@"));if(!(b=n[c])){n[c]=N&&c!==N?n[N]={state:1}:{state:1};continue}if(1===b.state)continue}if(O){1===e[c]&&(e.$--,delete e[c]);for(var E=new Component(O.name,r),x=a.parentNode;;){if(x.$com){var P=x.$com;E.owner=P,P.$children?P.$children++:P.$children=1;break}if("BODY"===x.nodeName)break;if(null==(x=x.parentNode))break}E.global=O.shared,E.element=m,E.dom=a;var T=r.attrcom(m,"path")||(p?"null"===p[1]?"":p[1]:"")||E._id;"%"===T.substring(0,1)&&(E.$noscope=!0),E.setPath(pathmaker(T,!0),1),E.config={},O.config&&E.reconfigure(O.config,NOOP);var _=attrcom(m,"config")||(p?"null"===p[2]?"":p[2]:"");for(_&&E.reconfigure(_,NOOP),E.$init||(E.$init=attrcom(m,"init")||null),E.type||(E.type=attrcom(m,"type")||""),E.id||(E.id=attrcom(m,"id")||E._id),E.siblings=f.length>1,E.$lazy=b,g=0;g<configs.length;g++){var w=configs[g];w.fn(E)&&E.reconfigure(w.config,NOOP)}caches.current.com=E,O.declaration.call(E,E,E.config),caches.current.com=null,p[3]&&m.attrd("jc-value",p[3]),E.init&&!statics[c]&&(statics[c]=!0,E.init()),a.$com=E,E.$noscope||(E.$noscope="true"===r.attrcom(m,"noscope"));var y=E.path?E.path.charCodeAt(0):0;if(!E.$noscope&&s.length&&!E.$pp){var A=initscopes(s);E.path&&33!==y&&35!==y?E.setPath("?"===E.path?A.path:-1===E.path.indexOf("?")?A.path+"."+E.path:E.path.replace(/\?/g,A.path),2):(E.$$path=EMPTYARRAY,E.path=""),E.scope=A,E.pathscope=A.path}u.push(E);var j=r.attrcom(m,"template")||E.template;if(j&&(E.template=j),"true"===r.attrcom(m,"released")&&(E.$released=!0),r.attrcom(m,"url"))warn('Components: You have to use "data-jc-template" attribute instead of "data-jc-url" for the component: {0}[{1}].'.format(E.name,E.path));else if(t.isString(j)){var C=function(e){E.prerender&&(e=E.prerender(e)),i(O,function(n,i){if(t.isFunction(n.make)){var r=caches.current.com;caches.current.com=n,n.make(e),caches.current.com=r}init(i,n)},E,m)},R=j.substring(0,1);if("."===R||"#"===R||"["===R){C($(j).html());continue}var S="TE"+HASH(j),Y=statics[S];if(Y){C(Y);continue}$.get(makeurl(j),function(t){statics[S]=t,C(t)})}else if(t.isString(E.make)){if(-1!==E.make.indexOf("<")){i(O,function(t,e){t.prerender&&(t.make=t.prerender(t.make)),e.html(t.make),init(e,t)},E,m);continue}$.get(makeurl(E.make),function(t){i(O,function(e,n){e.prerender&&(t=e.prerender(t)),n.html(t),init(n,e)},E,m)})}else O.dependencies?i(O,function(t,e){if(t.make){var n=caches.current.com;caches.current.com=t,t.make(),caches.current.com=n}init(e,t)},E,m):setTimeout(function(t,e,n){if(n.make){var i=caches.current.com;caches.current.com=n,n.make(),caches.current.com=i}t(e,n)},5,init,m,E)}else{e[c]||(e[c]=1,e.$++);var D=r.attrcom(m,"import");if(!D){!statics["$NE_"+c]&&(statics["$NE_"+c]=!0);continue}if(1===r.imports[D])continue;if(2===r.imports[D]){!statics["$NE_"+c]&&(statics["$NE_"+c]=!0);continue}r.imports[D]=1,r.importing++,r.import(D,function(){r.importing--,r.imports[D]=2})}}u.length>0&&(m.$com=u.length>1?u:u[0])}}});
//# sourceMappingURL=../sourcemaps/views/compose.js.map
