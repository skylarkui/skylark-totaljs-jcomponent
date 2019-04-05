/**
 * skylark-totaljs-jcomponent - A version of totaljs jcomponent that ported to running on skylarkjs
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-totaljs-jcomponent/
 * @license MIT
 */
define(["../langx","../utils/query","./func","./pathmaker","./findFormat","./Binder"],function(e,t,r,s,a,n){var i=/_{2,}/,l=[];function c(e){for(var t=arguments,r=1;r<t.length;r++)if(-1!==e.indexOf(t[r]))return!1;return!0}return function u(f,d,o,h){var b=d.split(i);if(-1!==b.indexOf("|")){if(!h){for(var g=[],p=[],v=0;v<b.length;v++){var m=b[v];"|"!==m?m&&g.push(m):(g.length&&p.push(u(f,g.join("__"),o)),g=[])}g.length&&p.push(u(f,g.join("__"),o,!0))}return p}var k=null,$=null,x=new n,O=[],w={},T=x.el=t(f);for(v=0;v<b.length;v++){var _=b[v].trim();if(_)if(v){var y;if("template"!==_&&"!template"!==_&&"strict"!==_?(-1===($=_.indexOf(":"))&&($=_.length,_+=":value"),L=_.substring(0,$).trim(),y=_.substring($+1).trim()):L=_,"selector"===L){x[L]=y;continue}var E=L.indexOf(" ");if(!(z=c(-1===E?L:L.substring(0,E),"setter","strict","track","delay","import","class","template")&&"def"!==L.substring(0,3)?-1!==y.indexOf("=>")?r(r.rebinddecode(y)):r.isValue(y)?r("(value,path,el)=>"+r.rebinddecode(y),!0):"@"===y.substring(0,1)?x.com[y.substring(1)]:GET(y):1))return null;for(var j=L.split("+"),F=0;F<j.length;F++){var G="",N=!1,q=!1,B=!1;-1!==($=(L=j[F].trim()).indexOf(" "))&&(G=L.substring($+1),L=L.substring(0,$));var R=(L=L.replace(/^(~!|!~|!|~)/,function(e){return-1!==e.indexOf("!")&&(q=!0),-1!==e.indexOf("~")&&(N=!0),""})).substring(0,1);switch("class"===L&&(L="tclass"),"."===R&&(q&&(z.$nn=1),O.push({name:L.substring(1),fn:z}),L="class"),e.isFunction(z)&&(q&&(z.$nn=1),N&&(z.$nv=1)),L){case"track":x[L]=y.split(",").trim();continue;case"strict":x[L]=!0;continue;case"hidden":L="hide";break;case"exec":L="change";break;case"disable":L="disabled",B=!0;break;case"value":L="val",B=!0;break;case"default":L="def";break;case"delay":z=+y;break;case"href":case"src":case"val":case"title":case"html":case"text":case"disabled":case"enabled":case"checked":B=!0;break;case"setter":z=e.fn("(value,path,el)=>el.SETTER("+y+")"),q&&(z.$nn=1),N&&(z.$nv=1);break;case"import":R=y.substring(0,1),z=/^(https|http):\/\//.test(y)||"/"===R||"."===R?"."===R?y.substring(1):y:r(r.rebinddecode(y));break;case"tclass":z=y;break;case"template":var S=T.find("script");S.length||(S=T),z=Tangular.compile(S.html()),q&&(z.$nn=1),N&&(z.$nv=1)}if("def"===L&&(z=new Function("return "+y)()),B&&q&&(x[L+"bk"]="src"==L||"href"==L||"title"==L?T.attr(L):"html"==L||"text"==L?T.html():"val"==L?T.val():"disabled"==L||"checked"==L?T.prop(L):""),G)if(w[G]||(w[G]={}),"class"!==L)w[G][L]=z;else{var V=O.pop();w[G].cls?w[G].cls.push(V):w[G].cls=[V]}else"class"!==L&&(x[L]=z)}}else{var z;if("!"===(R=(k=_).substring(0,1))&&(k=k.substring(1),x.notnull=!0),1===b.length)return(z=GET(k))&&z.call(x.el,x.el),z||null;if((g=a(k))&&(k=g.path,x.format=g.fn),"."===R){x.virtual=!0,k=k.substring(1);continue}if("."===k.substring(k.length-1)&&(k=k.substring(0,k.length-1)),"@"===k.substring(0,1)){var A=!1;"@"===(k=k.substring(1)).substring(0,1)&&(A=!0,k=k.substring(1)),k||(k="@");for(var C=f.parentNode;C;){if(A){if(C.$ctrl){x.com=C.$ctrl,"@"!==k||x.com.$dataw||(x.com.$dataw=1,x.com.watch(function(e,t){x.com.data("@",t)}));break}}else if(C.$com){x.com=C.$com;break}C=C.parentNode}if(!x.com)return null}}}for(j=Object.keys(w),v=0;v<j.length;v++){var D=j[v];x.child||(x.child=[]);var H=w[D];H.selector=D,x.child.push(H)}if(O.length&&(x.classes=O),x.virtual)k=s(k);else{if(-1!==(k=x.com&&"@"===k.substring(0,1)?k:s(k)).indexOf("?")){var I=initscopes(o);if(!I)return;k=k.replace(/\?/g,I.path)}var J=k.split(".");if(V="",x.com)!x.com.$data[k]&&(x.com.$data[k]={value:null,items:[]}),x.com.$data[k].items.push(x);else{v=0;for(var K=J.length;v<K;v++){V+=(V?".":"")+J[v];var L=v===K-1?V:"!"+V;binders[L]?binders[L].push(x):binders[L]=[x]}}}if(x.path=k,x.track)for(v=0;v<x.track.length;v++)x.track[v]=k+"."+x.track[v];return x.init=0,x.virtual||l.push(x),x}});
//# sourceMappingURL=../sourcemaps/binding/parsebinder.js.map