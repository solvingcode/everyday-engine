/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&t(n[r],r,n)!==!1;);return n}function e(n,t){for(var r=null==n?0:n.length;r--&&t(n[r],r,n)!==!1;);return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;
return!0}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!!(null==n?0:n.length)&&y(n,t,0)>-1}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function p(n){return n.split("")}function _(n){return n.match(Bt)||[]}function v(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function g(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function y(n,t,r){return t===t?q(n,t,r):g(n,b,r)}function d(n,t,r,e){
for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function b(n){return n!==n}function w(n,t){var r=null==n?0:n.length;return r?k(n,t)/r:Sn}function m(n){return function(t){return null==t?Y:t[n]}}function x(n){return function(t){return null==n?Y:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function A(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function k(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==Y&&(r=r===Y?i:r+i);
}return r}function O(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function I(n,t){return c(t,function(t){return[t,n[t]]})}function R(n){return function(t){return n(t)}}function z(n,t){return c(t,function(t){return n[t]})}function E(n,t){return n.has(t)}function S(n,t){for(var r=-1,e=n.length;++r<e&&y(t,n[r],0)>-1;);return r}function W(n,t){for(var r=n.length;r--&&y(t,n[r],0)>-1;);return r}function L(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}function C(n){return"\\"+Gr[n]}function U(n,t){
return null==n?Y:n[t]}function B(n){return Dr.test(n)}function T(n){return Mr.test(n)}function $(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function D(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function M(n,t){return function(r){return n(t(r))}}function F(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==un||(n[r]=un,i[u++]=r)}return i}function N(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function P(n){
var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function q(n,t,r){for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function Z(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}function K(n){return B(n)?G(n):se(n)}function V(n){return B(n)?H(n):p(n)}function G(n){for(var t=Tr.lastIndex=0;Tr.test(n);)++t;return t}function H(n){return n.match(Tr)||[]}function J(n){return n.match($r)||[]}var Y,Q="4.17.20",X=200,nn="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",tn="Expected a function",rn="__lodash_hash_undefined__",en=500,un="__lodash_placeholder__",on=1,fn=2,cn=4,an=1,ln=2,sn=1,hn=2,pn=4,_n=8,vn=16,gn=32,yn=64,dn=128,bn=256,wn=512,mn=30,xn="...",jn=800,An=16,kn=1,On=2,In=3,Rn=1/0,zn=9007199254740991,En=1.7976931348623157e308,Sn=NaN,Wn=4294967295,Ln=Wn-1,Cn=Wn>>>1,Un=[["ary",dn],["bind",sn],["bindKey",hn],["curry",_n],["curryRight",vn],["flip",wn],["partial",gn],["partialRight",yn],["rearg",bn]],Bn="[object Arguments]",Tn="[object Array]",$n="[object AsyncFunction]",Dn="[object Boolean]",Mn="[object Date]",Fn="[object DOMException]",Nn="[object Error]",Pn="[object Function]",qn="[object GeneratorFunction]",Zn="[object Map]",Kn="[object Number]",Vn="[object Null]",Gn="[object Object]",Hn="[object Promise]",Jn="[object Proxy]",Yn="[object RegExp]",Qn="[object Set]",Xn="[object String]",nt="[object Symbol]",tt="[object Undefined]",rt="[object WeakMap]",et="[object WeakSet]",ut="[object ArrayBuffer]",it="[object DataView]",ot="[object Float32Array]",ft="[object Float64Array]",ct="[object Int8Array]",at="[object Int16Array]",lt="[object Int32Array]",st="[object Uint8Array]",ht="[object Uint8ClampedArray]",pt="[object Uint16Array]",_t="[object Uint32Array]",vt=/\b__p \+= '';/g,gt=/\b(__p \+=) '' \+/g,yt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,dt=/&(?:amp|lt|gt|quot|#39);/g,bt=/[&<>"']/g,wt=RegExp(dt.source),mt=RegExp(bt.source),xt=/<%-([\s\S]+?)%>/g,jt=/<%([\s\S]+?)%>/g,At=/<%=([\s\S]+?)%>/g,kt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ot=/^\w*$/,It=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rt=/[\\^$.*+?()[\]{}|]/g,zt=RegExp(Rt.source),Et=/^\s+|\s+$/g,St=/^\s+/,Wt=/\s+$/,Lt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ct=/\{\n\/\* \[wrapped with (.+)\] \*/,Ut=/,? & /,Bt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Tt=/\\(\\)?/g,$t=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Dt=/\w*$/,Mt=/^[-+]0x[0-9a-f]+$/i,Ft=/^0b[01]+$/i,Nt=/^\[object .+?Constructor\]$/,Pt=/^0o[0-7]+$/i,qt=/^(?:0|[1-9]\d*)$/,Zt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Kt=/($^)/,Vt=/['\n\r\u2028\u2029\\]/g,Gt="\\ud800-\\udfff",Ht="\\u0300-\\u036f",Jt="\\ufe20-\\ufe2f",Yt="\\u20d0-\\u20ff",Qt=Ht+Jt+Yt,Xt="\\u2700-\\u27bf",nr="a-z\\xdf-\\xf6\\xf8-\\xff",tr="\\xac\\xb1\\xd7\\xf7",rr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",er="\\u2000-\\u206f",ur=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ir="A-Z\\xc0-\\xd6\\xd8-\\xde",or="\\ufe0e\\ufe0f",fr=tr+rr+er+ur,cr="['\u2019]",ar="["+Gt+"]",lr="["+fr+"]",sr="["+Qt+"]",hr="\\d+",pr="["+Xt+"]",_r="["+nr+"]",vr="[^"+Gt+fr+hr+Xt+nr+ir+"]",gr="\\ud83c[\\udffb-\\udfff]",yr="(?:"+sr+"|"+gr+")",dr="[^"+Gt+"]",br="(?:\\ud83c[\\udde6-\\uddff]){2}",wr="[\\ud800-\\udbff][\\udc00-\\udfff]",mr="["+ir+"]",xr="\\u200d",jr="(?:"+_r+"|"+vr+")",Ar="(?:"+mr+"|"+vr+")",kr="(?:"+cr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+cr+"(?:D|LL|M|RE|S|T|VE))?",Ir=yr+"?",Rr="["+or+"]?",zr="(?:"+xr+"(?:"+[dr,br,wr].join("|")+")"+Rr+Ir+")*",Er="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Sr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Wr=Rr+Ir+zr,Lr="(?:"+[pr,br,wr].join("|")+")"+Wr,Cr="(?:"+[dr+sr+"?",sr,br,wr,ar].join("|")+")",Ur=RegExp(cr,"g"),Br=RegExp(sr,"g"),Tr=RegExp(gr+"(?="+gr+")|"+Cr+Wr,"g"),$r=RegExp([mr+"?"+_r+"+"+kr+"(?="+[lr,mr,"$"].join("|")+")",Ar+"+"+Or+"(?="+[lr,mr+jr,"$"].join("|")+")",mr+"?"+jr+"+"+kr,mr+"+"+Or,Sr,Er,hr,Lr].join("|"),"g"),Dr=RegExp("["+xr+Gt+Qt+or+"]"),Mr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Fr=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Nr=-1,Pr={};
Pr[ot]=Pr[ft]=Pr[ct]=Pr[at]=Pr[lt]=Pr[st]=Pr[ht]=Pr[pt]=Pr[_t]=!0,Pr[Bn]=Pr[Tn]=Pr[ut]=Pr[Dn]=Pr[it]=Pr[Mn]=Pr[Nn]=Pr[Pn]=Pr[Zn]=Pr[Kn]=Pr[Gn]=Pr[Yn]=Pr[Qn]=Pr[Xn]=Pr[rt]=!1;var qr={};qr[Bn]=qr[Tn]=qr[ut]=qr[it]=qr[Dn]=qr[Mn]=qr[ot]=qr[ft]=qr[ct]=qr[at]=qr[lt]=qr[Zn]=qr[Kn]=qr[Gn]=qr[Yn]=qr[Qn]=qr[Xn]=qr[nt]=qr[st]=qr[ht]=qr[pt]=qr[_t]=!0,qr[Nn]=qr[Pn]=qr[rt]=!1;var Zr={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a",
"\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae",
"\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g",
"\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O",
"\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w",
"\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},Kr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Gr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Hr=parseFloat,Jr=parseInt,Yr="object"==typeof global&&global&&global.Object===Object&&global,Qr="object"==typeof self&&self&&self.Object===Object&&self,Xr=Yr||Qr||Function("return this")(),ne="object"==typeof exports&&exports&&!exports.nodeType&&exports,te=ne&&"object"==typeof module&&module&&!module.nodeType&&module,re=te&&te.exports===ne,ee=re&&Yr.process,ue=function(){
try{var n=te&&te.require&&te.require("util").types;return n?n:ee&&ee.binding&&ee.binding("util")}catch(n){}}(),ie=ue&&ue.isArrayBuffer,oe=ue&&ue.isDate,fe=ue&&ue.isMap,ce=ue&&ue.isRegExp,ae=ue&&ue.isSet,le=ue&&ue.isTypedArray,se=m("length"),he=x(Zr),pe=x(Kr),_e=x(Vr),ve=function p(x){function q(n){if(oc(n)&&!yh(n)&&!(n instanceof Bt)){if(n instanceof H)return n;if(yl.call(n,"__wrapped__"))return to(n)}return new H(n)}function G(){}function H(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,
this.__index__=0,this.__values__=Y}function Bt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Wn,this.__views__=[]}function Gt(){var n=new Bt(this.__wrapped__);return n.__actions__=Uu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Uu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Uu(this.__views__),n}function Ht(){if(this.__filtered__){var n=new Bt(this);n.__dir__=-1,
n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Jt(){var n=this.__wrapped__.value(),t=this.__dir__,r=yh(n),e=t<0,u=r?n.length:0,i=Ai(0,u,this.__views__),o=i.start,f=i.end,c=f-o,a=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Vl(c,this.__takeCount__);if(!r||!e&&u==c&&p==c)return du(n,this.__actions__);var _=[];n:for(;c--&&h<p;){a+=t;for(var v=-1,g=n[a];++v<s;){var y=l[v],d=y.iteratee,b=y.type,w=d(g);if(b==On)g=w;else if(!w){if(b==kn)continue n;break n}}_[h++]=g}return _}function Yt(n){
var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Qt(){this.__data__=es?es(null):{},this.size=0}function Xt(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function nr(n){var t=this.__data__;if(es){var r=t[n];return r===rn?Y:r}return yl.call(t,n)?t[n]:Y}function tr(n){var t=this.__data__;return es?t[n]!==Y:yl.call(t,n)}function rr(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=es&&t===Y?rn:t,this}function er(n){
var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function ur(){this.__data__=[],this.size=0}function ir(n){var t=this.__data__,r=Er(t,n);return!(r<0)&&(r==t.length-1?t.pop():Sl.call(t,r,1),--this.size,!0)}function or(n){var t=this.__data__,r=Er(t,n);return r<0?Y:t[r][1]}function fr(n){return Er(this.__data__,n)>-1}function cr(n,t){var r=this.__data__,e=Er(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this}function ar(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){
var e=n[t];this.set(e[0],e[1])}}function lr(){this.size=0,this.__data__={hash:new Yt,map:new(Xl||er),string:new Yt}}function sr(n){var t=wi(this,n).delete(n);return this.size-=t?1:0,t}function hr(n){return wi(this,n).get(n)}function pr(n){return wi(this,n).has(n)}function _r(n,t){var r=wi(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this}function vr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new ar;++t<r;)this.add(n[t])}function gr(n){return this.__data__.set(n,rn),this}function yr(n){
return this.__data__.has(n)}function dr(n){this.size=(this.__data__=new er(n)).size}function br(){this.__data__=new er,this.size=0}function wr(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}function mr(n){return this.__data__.get(n)}function xr(n){return this.__data__.has(n)}function jr(n,t){var r=this.__data__;if(r instanceof er){var e=r.__data__;if(!Xl||e.length<X-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new ar(e)}return r.set(n,t),this.size=r.size,this}function Ar(n,t){
var r=yh(n),e=!r&&gh(n),u=!r&&!e&&bh(n),i=!r&&!e&&!u&&Ah(n),o=r||e||u||i,f=o?O(n.length,ll):[],c=f.length;for(var a in n)!t&&!yl.call(n,a)||o&&("length"==a||u&&("offset"==a||"parent"==a)||i&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||Wi(a,c))||f.push(a);return f}function kr(n){var t=n.length;return t?n[Xe(0,t-1)]:Y}function Or(n,t){return Yi(Uu(n),$r(t,0,n.length))}function Ir(n){return Yi(Uu(n))}function Rr(n,t,r){(r===Y||Kf(n[t],r))&&(r!==Y||t in n)||Cr(n,t,r)}function zr(n,t,r){var e=n[t];
yl.call(n,t)&&Kf(e,r)&&(r!==Y||t in n)||Cr(n,t,r)}function Er(n,t){for(var r=n.length;r--;)if(Kf(n[r][0],t))return r;return-1}function Sr(n,t,r,e){return vs(n,function(n,u,i){t(e,n,r(n),i)}),e}function Wr(n,t){return n&&Bu(t,Fc(t),n)}function Lr(n,t){return n&&Bu(t,Nc(t),n)}function Cr(n,t,r){"__proto__"==t&&Ul?Ul(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Tr(n,t){for(var r=-1,e=t.length,u=el(e),i=null==n;++r<e;)u[r]=i?Y:$c(n,t[r]);return u}function $r(n,t,r){return n===n&&(r!==Y&&(n=n<=r?n:r),
t!==Y&&(n=n>=t?n:t)),n}function Dr(n,t,e,u,i,o){var f,c=t&on,a=t&fn,l=t&cn;if(e&&(f=i?e(n,u,i,o):e(n)),f!==Y)return f;if(!ic(n))return n;var s=yh(n);if(s){if(f=Ii(n),!c)return Uu(n,f)}else{var h=Is(n),p=h==Pn||h==qn;if(bh(n))return ku(n,c);if(h==Gn||h==Bn||p&&!i){if(f=a||p?{}:Ri(n),!c)return a?$u(n,Lr(f,n)):Tu(n,Wr(f,n))}else{if(!qr[h])return i?n:{};f=zi(n,h,c)}}o||(o=new dr);var _=o.get(n);if(_)return _;o.set(n,f),jh(n)?n.forEach(function(r){f.add(Dr(r,t,e,r,n,o))}):mh(n)&&n.forEach(function(r,u){
f.set(u,Dr(r,t,e,u,n,o))});var v=l?a?gi:vi:a?Nc:Fc,g=s?Y:v(n);return r(g||n,function(r,u){g&&(u=r,r=n[u]),zr(f,u,Dr(r,t,e,u,n,o))}),f}function Mr(n){var t=Fc(n);return function(r){return Zr(r,n,t)}}function Zr(n,t,r){var e=r.length;if(null==n)return!e;for(n=cl(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===Y&&!(u in n)||!i(o))return!1}return!0}function Kr(n,t,r){if("function"!=typeof n)throw new sl(tn);return Es(function(){n.apply(Y,r)},t)}function Vr(n,t,r,e){var u=-1,i=o,a=!0,l=n.length,s=[],h=t.length;
if(!l)return s;r&&(t=c(t,R(r))),e?(i=f,a=!1):t.length>=X&&(i=E,a=!1,t=new vr(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p);if(p=e||0!==p?p:0,a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function Gr(n,t){var r=!0;return vs(n,function(n,e,u){return r=!!t(n,e,u)}),r}function Yr(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===Y?o===o&&!yc(o):r(o,f)))var f=o,c=i}return c}function Qr(n,t,r,e){var u=n.length;for(r=jc(r),r<0&&(r=-r>u?0:u+r),
e=e===Y||e>u?u:jc(e),e<0&&(e+=u),e=r>e?0:Ac(e);r<e;)n[r++]=t;return n}function ne(n,t){var r=[];return vs(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function te(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Si),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?te(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function ee(n,t){return n&&ys(n,t,Fc)}function ue(n,t){return n&&ds(n,t,Fc)}function se(n,t){return i(t,function(t){return rc(n[t])})}function ve(n,t){t=ju(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Qi(t[r++])];
return r&&r==e?n:Y}function ye(n,t,r){var e=t(n);return yh(n)?e:a(e,r(n))}function de(n){return null==n?n===Y?tt:Vn:Cl&&Cl in cl(n)?ji(n):qi(n)}function be(n,t){return n>t}function we(n,t){return null!=n&&yl.call(n,t)}function me(n,t){return null!=n&&t in cl(n)}function xe(n,t,r){return n>=Vl(t,r)&&n<Kl(t,r)}function je(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=el(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,R(t))),s=Vl(p.length,s),l[a]=!r&&(t||u>=120&&p.length>=120)?new vr(a&&p):Y}p=n[0];
var _=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],y=t?t(g):g;if(g=r||0!==g?g:0,!(v?E(v,y):e(h,y,r))){for(a=i;--a;){var d=l[a];if(!(d?E(d,y):e(n[a],y,r)))continue n}v&&v.push(y),h.push(g)}}return h}function Ae(n,t,r,e){return ee(n,function(n,u,i){t(e,r(n),u,i)}),e}function ke(t,r,e){r=ju(r,t),t=Ki(t,r);var u=null==t?t:t[Qi(mo(r))];return null==u?Y:n(u,t,e)}function Oe(n){return oc(n)&&de(n)==Bn}function Ie(n){return oc(n)&&de(n)==ut}function Re(n){return oc(n)&&de(n)==Mn}function ze(n,t,r,e,u){
return n===t||(null==n||null==t||!oc(n)&&!oc(t)?n!==n&&t!==t:Ee(n,t,r,e,ze,u))}function Ee(n,t,r,e,u,i){var o=yh(n),f=yh(t),c=o?Tn:Is(n),a=f?Tn:Is(t);c=c==Bn?Gn:c,a=a==Bn?Gn:a;var l=c==Gn,s=a==Gn,h=c==a;if(h&&bh(n)){if(!bh(t))return!1;o=!0,l=!1}if(h&&!l)return i||(i=new dr),o||Ah(n)?si(n,t,r,e,u,i):hi(n,t,c,r,e,u,i);if(!(r&an)){var p=l&&yl.call(n,"__wrapped__"),_=s&&yl.call(t,"__wrapped__");if(p||_){var v=p?n.value():n,g=_?t.value():t;return i||(i=new dr),u(v,g,r,e,i)}}return!!h&&(i||(i=new dr),pi(n,t,r,e,u,i));
}function Se(n){return oc(n)&&Is(n)==Zn}function We(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=cl(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++u<i;){f=r[u];var c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===Y&&!(c in n))return!1}else{var s=new dr;if(e)var h=e(a,l,c,n,t,s);if(!(h===Y?ze(l,a,an|ln,e,s):h))return!1}}return!0}function Le(n){return!(!ic(n)||Ti(n))&&(rc(n)?jl:Nt).test(Xi(n))}function Ce(n){return oc(n)&&de(n)==Yn}function Ue(n){return oc(n)&&Is(n)==Qn;
}function Be(n){return oc(n)&&uc(n.length)&&!!Pr[de(n)]}function Te(n){return"function"==typeof n?n:null==n?Sa:"object"==typeof n?yh(n)?Pe(n[0],n[1]):Ne(n):Da(n)}function $e(n){if(!$i(n))return Zl(n);var t=[];for(var r in cl(n))yl.call(n,r)&&"constructor"!=r&&t.push(r);return t}function De(n){if(!ic(n))return Pi(n);var t=$i(n),r=[];for(var e in n)("constructor"!=e||!t&&yl.call(n,e))&&r.push(e);return r}function Me(n,t){return n<t}function Fe(n,t){var r=-1,e=Vf(n)?el(n.length):[];return vs(n,function(n,u,i){
e[++r]=t(n,u,i)}),e}function Ne(n){var t=mi(n);return 1==t.length&&t[0][2]?Mi(t[0][0],t[0][1]):function(r){return r===n||We(r,n,t)}}function Pe(n,t){return Ci(n)&&Di(t)?Mi(Qi(n),t):function(r){var e=$c(r,n);return e===Y&&e===t?Mc(r,n):ze(t,e,an|ln)}}function qe(n,t,r,e,u){n!==t&&ys(t,function(i,o){if(u||(u=new dr),ic(i))Ze(n,t,o,r,qe,e,u);else{var f=e?e(Gi(n,o),i,o+"",n,t,u):Y;f===Y&&(f=i),Rr(n,o,f)}},Nc)}function Ze(n,t,r,e,u,i,o){var f=Gi(n,r),c=Gi(t,r),a=o.get(c);if(a)return Rr(n,r,a),Y;var l=i?i(f,c,r+"",n,t,o):Y,s=l===Y;
if(s){var h=yh(c),p=!h&&bh(c),_=!h&&!p&&Ah(c);l=c,h||p||_?yh(f)?l=f:Gf(f)?l=Uu(f):p?(s=!1,l=ku(c,!0)):_?(s=!1,l=Eu(c,!0)):l=[]:_c(c)||gh(c)?(l=f,gh(f)?l=Oc(f):ic(f)&&!rc(f)||(l=Ri(c))):s=!1}s&&(o.set(c,l),u(l,c,e,i,o),o.delete(c)),Rr(n,r,l)}function Ke(n,t){var r=n.length;if(r)return t+=t<0?r:0,Wi(t,r)?n[t]:Y}function Ve(n,t,r){t=t.length?c(t,function(n){return yh(n)?function(t){return ve(t,1===n.length?n[0]:n)}:n}):[Sa];var e=-1;return t=c(t,R(bi())),A(Fe(n,function(n,r,u){return{criteria:c(t,function(t){
return t(n)}),index:++e,value:n}}),function(n,t){return Wu(n,t,r)})}function Ge(n,t){return He(n,t,function(t,r){return Mc(n,r)})}function He(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=ve(n,o);r(f,o)&&iu(i,ju(o,n),f)}return i}function Je(n){return function(t){return ve(t,n)}}function Ye(n,t,r,e){var u=e?d:y,i=-1,o=t.length,f=n;for(n===t&&(t=Uu(t)),r&&(f=c(n,R(r)));++i<o;)for(var a=0,l=t[i],s=r?r(l):l;(a=u(f,s,a,e))>-1;)f!==n&&Sl.call(f,a,1),Sl.call(n,a,1);return n}function Qe(n,t){for(var r=n?t.length:0,e=r-1;r--;){
var u=t[r];if(r==e||u!==i){var i=u;Wi(u)?Sl.call(n,u,1):vu(n,u)}}return n}function Xe(n,t){return n+Ml(Jl()*(t-n+1))}function nu(n,t,r,e){for(var u=-1,i=Kl(Dl((t-n)/(r||1)),0),o=el(i);i--;)o[e?i:++u]=n,n+=r;return o}function tu(n,t){var r="";if(!n||t<1||t>zn)return r;do t%2&&(r+=n),t=Ml(t/2),t&&(n+=n);while(t);return r}function ru(n,t){return Ss(Zi(n,t,Sa),n+"")}function eu(n){return kr(na(n))}function uu(n,t){var r=na(n);return Yi(r,$r(t,0,r.length))}function iu(n,t,r,e){if(!ic(n))return n;t=ju(t,n);
for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=Qi(t[u]),a=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return n;if(u!=o){var l=f[c];a=e?e(l,c,f):Y,a===Y&&(a=ic(l)?l:Wi(t[u+1])?[]:{})}zr(f,c,a),f=f[c]}return n}function ou(n){return Yi(na(n))}function fu(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),r=r>u?u:r,r<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=el(u);++e<u;)i[e]=n[e+t];return i}function cu(n,t){var r;return vs(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function au(n,t,r){
var e=0,u=null==n?e:n.length;if("number"==typeof t&&t===t&&u<=Cn){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!yc(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return lu(n,t,Sa,r)}function lu(n,t,r,e){var u=0,i=null==n?0:n.length;if(0===i)return 0;t=r(t);for(var o=t!==t,f=null===t,c=yc(t),a=t===Y;u<i;){var l=Ml((u+i)/2),s=r(n[l]),h=s!==Y,p=null===s,_=s===s,v=yc(s);if(o)var g=e||_;else g=a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):!p&&!v&&(e?s<=t:s<t);g?u=l+1:i=l}return Vl(i,Ln)}function su(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){
var o=n[r],f=t?t(o):o;if(!r||!Kf(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function hu(n){return"number"==typeof n?n:yc(n)?Sn:+n}function pu(n){if("string"==typeof n)return n;if(yh(n))return c(n,pu)+"";if(yc(n))return ps?ps.call(n):"";var t=n+"";return"0"==t&&1/n==-Rn?"-0":t}function _u(n,t,r){var e=-1,u=o,i=n.length,c=!0,a=[],l=a;if(r)c=!1,u=f;else if(i>=X){var s=t?null:js(n);if(s)return N(s);c=!1,u=E,l=new vr}else l=t?[]:a;n:for(;++e<i;){var h=n[e],p=t?t(h):h;if(h=r||0!==h?h:0,c&&p===p){for(var _=l.length;_--;)if(l[_]===p)continue n;
t&&l.push(p),a.push(h)}else u(l,p,r)||(l!==a&&l.push(p),a.push(h))}return a}function vu(n,t){return t=ju(t,n),n=Ki(n,t),null==n||delete n[Qi(mo(t))]}function gu(n,t,r,e){return iu(n,t,r(ve(n,t)),e)}function yu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?fu(n,e?0:i,e?i+1:u):fu(n,e?i+1:0,e?u:i)}function du(n,t){var r=n;return r instanceof Bt&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function bu(n,t,r){var e=n.length;if(e<2)return e?_u(n[0]):[];
for(var u=-1,i=el(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=Vr(i[u]||o,n[f],t,r));return _u(te(i,1),t,r)}function wu(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;){r(o,n[e],e<i?t[e]:Y)}return o}function mu(n){return Gf(n)?n:[]}function xu(n){return"function"==typeof n?n:Sa}function ju(n,t){return yh(n)?n:Ci(n,t)?[n]:Ws(Rc(n))}function Au(n,t,r){var e=n.length;return r=r===Y?e:r,!t&&r>=e?n:fu(n,t,r)}function ku(n,t){if(t)return n.slice();var r=n.length,e=Il?Il(r):new n.constructor(r);
return n.copy(e),e}function Ou(n){var t=new n.constructor(n.byteLength);return new Ol(t).set(new Ol(n)),t}function Iu(n,t){return new n.constructor(t?Ou(n.buffer):n.buffer,n.byteOffset,n.byteLength)}function Ru(n){var t=new n.constructor(n.source,Dt.exec(n));return t.lastIndex=n.lastIndex,t}function zu(n){return hs?cl(hs.call(n)):{}}function Eu(n,t){return new n.constructor(t?Ou(n.buffer):n.buffer,n.byteOffset,n.length)}function Su(n,t){if(n!==t){var r=n!==Y,e=null===n,u=n===n,i=yc(n),o=t!==Y,f=null===t,c=t===t,a=yc(t);
if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Wu(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var c=Su(u[e],i[e]);if(c){if(e>=f)return c;return c*("desc"==r[e]?-1:1)}}return n.index-t.index}function Lu(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Kl(i-o,0),l=el(c+a),s=!e;++f<c;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l;
}function Cu(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Kl(i-f,0),s=el(l+a),h=!e;++u<l;)s[u]=n[u];for(var p=u;++c<a;)s[p+c]=t[c];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function Uu(n,t){var r=-1,e=n.length;for(t||(t=el(e));++r<e;)t[r]=n[r];return t}function Bu(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):Y;c===Y&&(c=n[f]),u?Cr(r,f,c):zr(r,f,c)}return r}function Tu(n,t){return Bu(n,ks(n),t)}function $u(n,t){return Bu(n,Os(n),t);
}function Du(n,r){return function(e,u){var i=yh(e)?t:Sr,o=r?r():{};return i(e,n,bi(u,2),o)}}function Mu(n){return ru(function(t,r){var e=-1,u=r.length,i=u>1?r[u-1]:Y,o=u>2?r[2]:Y;for(i=n.length>3&&"function"==typeof i?(u--,i):Y,o&&Li(r[0],r[1],o)&&(i=u<3?Y:i,u=1),t=cl(t);++e<u;){var f=r[e];f&&n(t,f,e,i)}return t})}function Fu(n,t){return function(r,e){if(null==r)return r;if(!Vf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=cl(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function Nu(n){return function(t,r,e){
for(var u=-1,i=cl(t),o=e(t),f=o.length;f--;){var c=o[n?f:++u];if(r(i[c],c,i)===!1)break}return t}}function Pu(n,t,r){function e(){return(this&&this!==Xr&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=t&sn,i=Ku(n);return e}function qu(n){return function(t){t=Rc(t);var r=B(t)?V(t):Y,e=r?r[0]:t.charAt(0),u=r?Au(r,1).join(""):t.slice(1);return e[n]()+u}}function Zu(n){return function(t){return l(Oa(oa(t).replace(Ur,"")),n,"")}}function Ku(n){return function(){var t=arguments;switch(t.length){
case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=_s(n.prototype),e=n.apply(r,t);return ic(e)?e:r}}function Vu(t,r,e){function u(){for(var o=arguments.length,f=el(o),c=o,a=di(u);c--;)f[c]=arguments[c];var l=o<3&&f[0]!==a&&f[o-1]!==a?[]:F(f,a);
return o-=l.length,o<e?ui(t,r,Ju,u.placeholder,Y,f,l,Y,Y,e-o):n(this&&this!==Xr&&this instanceof u?i:t,this,f)}var i=Ku(t);return u}function Gu(n){return function(t,r,e){var u=cl(t);if(!Vf(t)){var i=bi(r,3);t=Fc(t),r=function(n){return i(u[n],n,u)}}var o=n(t,r,e);return o>-1?u[i?t[o]:o]:Y}}function Hu(n){return _i(function(t){var r=t.length,e=r,u=H.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new sl(tn);if(u&&!o&&"wrapper"==yi(i))var o=new H([],!0)}for(e=o?e:r;++e<r;){
i=t[e];var f=yi(i),c="wrapper"==f?As(i):Y;o=c&&Bi(c[0])&&c[1]==(dn|_n|gn|bn)&&!c[4].length&&1==c[9]?o[yi(c[0])].apply(o,c[3]):1==i.length&&Bi(i)?o[f]():o.thru(i)}return function(){var n=arguments,e=n[0];if(o&&1==n.length&&yh(e))return o.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function Ju(n,t,r,e,u,i,o,f,c,a){function l(){for(var y=arguments.length,d=el(y),b=y;b--;)d[b]=arguments[b];if(_)var w=di(l),m=L(d,w);if(e&&(d=Lu(d,e,u,_)),i&&(d=Cu(d,i,o,_)),
y-=m,_&&y<a){return ui(n,t,Ju,l.placeholder,r,d,F(d,w),f,c,a-y)}var x=h?r:this,j=p?x[n]:n;return y=d.length,f?d=Vi(d,f):v&&y>1&&d.reverse(),s&&c<y&&(d.length=c),this&&this!==Xr&&this instanceof l&&(j=g||Ku(j)),j.apply(x,d)}var s=t&dn,h=t&sn,p=t&hn,_=t&(_n|vn),v=t&wn,g=p?Y:Ku(n);return l}function Yu(n,t){return function(r,e){return Ae(r,n,t(e),{})}}function Qu(n,t){return function(r,e){var u;if(r===Y&&e===Y)return t;if(r!==Y&&(u=r),e!==Y){if(u===Y)return e;"string"==typeof r||"string"==typeof e?(r=pu(r),
e=pu(e)):(r=hu(r),e=hu(e)),u=n(r,e)}return u}}function Xu(t){return _i(function(r){return r=c(r,R(bi())),ru(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ni(n,t){t=t===Y?" ":pu(t);var r=t.length;if(r<2)return r?tu(t,n):t;var e=tu(t,Dl(n/K(t)));return B(t)?Au(V(e),0,n).join(""):e.slice(0,n)}function ti(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=el(l+c),h=this&&this!==Xr&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];
return n(h,o?e:this,s)}var o=r&sn,f=Ku(t);return i}function ri(n){return function(t,r,e){return e&&"number"!=typeof e&&Li(t,r,e)&&(r=e=Y),t=xc(t),r===Y?(r=t,t=0):r=xc(r),e=e===Y?t<r?1:-1:xc(e),nu(t,r,e,n)}}function ei(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=kc(t),r=kc(r)),n(t,r)}}function ui(n,t,r,e,u,i,o,f,c,a){var l=t&_n,s=l?o:Y,h=l?Y:o,p=l?i:Y,_=l?Y:i;t|=l?gn:yn,t&=~(l?yn:gn),t&pn||(t&=~(sn|hn));var v=[n,t,u,p,s,_,h,f,c,a],g=r.apply(Y,v);return Bi(n)&&zs(g,v),g.placeholder=e,
Hi(g,n,t)}function ii(n){var t=fl[n];return function(n,r){if(n=kc(n),r=null==r?0:Vl(jc(r),292),r&&Pl(n)){var e=(Rc(n)+"e").split("e");return e=(Rc(t(e[0]+"e"+(+e[1]+r)))+"e").split("e"),+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oi(n){return function(t){var r=Is(t);return r==Zn?D(t):r==Qn?P(t):I(t,n(t))}}function fi(n,t,r,e,u,i,o,f){var c=t&hn;if(!c&&"function"!=typeof n)throw new sl(tn);var a=e?e.length:0;if(a||(t&=~(gn|yn),e=u=Y),o=o===Y?o:Kl(jc(o),0),f=f===Y?f:jc(f),a-=u?u.length:0,t&yn){var l=e,s=u;
e=u=Y}var h=c?Y:As(n),p=[n,t,r,e,u,l,s,i,o,f];if(h&&Ni(p,h),n=p[0],t=p[1],r=p[2],e=p[3],u=p[4],f=p[9]=p[9]===Y?c?0:n.length:Kl(p[9]-a,0),!f&&t&(_n|vn)&&(t&=~(_n|vn)),t&&t!=sn)_=t==_n||t==vn?Vu(n,t,f):t!=gn&&t!=(sn|gn)||u.length?Ju.apply(Y,p):ti(n,t,r,e);else var _=Pu(n,t,r);return Hi((h?bs:zs)(_,p),n,t)}function ci(n,t,r,e){return n===Y||Kf(n,_l[r])&&!yl.call(e,r)?t:n}function ai(n,t,r,e,u,i){return ic(n)&&ic(t)&&(i.set(t,n),qe(n,t,Y,ai,i),i.delete(t)),n}function li(n){return _c(n)?Y:n}function si(n,t,r,e,u,i){
var o=r&an,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return!1;var a=i.get(n),l=i.get(t);if(a&&l)return a==t&&l==n;var s=-1,p=!0,_=r&ln?new vr:Y;for(i.set(n,t),i.set(t,n);++s<f;){var v=n[s],g=t[s];if(e)var y=o?e(g,v,s,t,n,i):e(v,g,s,n,t,i);if(y!==Y){if(y)continue;p=!1;break}if(_){if(!h(t,function(n,t){if(!E(_,t)&&(v===n||u(v,n,r,e,i)))return _.push(t)})){p=!1;break}}else if(v!==g&&!u(v,g,r,e,i)){p=!1;break}}return i.delete(n),i.delete(t),p}function hi(n,t,r,e,u,i,o){switch(r){case it:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;
n=n.buffer,t=t.buffer;case ut:return!(n.byteLength!=t.byteLength||!i(new Ol(n),new Ol(t)));case Dn:case Mn:case Kn:return Kf(+n,+t);case Nn:return n.name==t.name&&n.message==t.message;case Yn:case Xn:return n==t+"";case Zn:var f=D;case Qn:var c=e&an;if(f||(f=N),n.size!=t.size&&!c)return!1;var a=o.get(n);if(a)return a==t;e|=ln,o.set(n,t);var l=si(f(n),f(t),e,u,i,o);return o.delete(n),l;case nt:if(hs)return hs.call(n)==hs.call(t)}return!1}function pi(n,t,r,e,u,i){var o=r&an,f=vi(n),c=f.length;if(c!=vi(t).length&&!o)return!1;
for(var a=c;a--;){var l=f[a];if(!(o?l in t:yl.call(t,l)))return!1}var s=i.get(n),h=i.get(t);if(s&&h)return s==t&&h==n;var p=!0;i.set(n,t),i.set(t,n);for(var _=o;++a<c;){l=f[a];var v=n[l],g=t[l];if(e)var y=o?e(g,v,l,t,n,i):e(v,g,l,n,t,i);if(!(y===Y?v===g||u(v,g,r,e,i):y)){p=!1;break}_||(_="constructor"==l)}if(p&&!_){var d=n.constructor,b=t.constructor;d!=b&&"constructor"in n&&"constructor"in t&&!("function"==typeof d&&d instanceof d&&"function"==typeof b&&b instanceof b)&&(p=!1)}return i.delete(n),
i.delete(t),p}function _i(n){return Ss(Zi(n,Y,ho),n+"")}function vi(n){return ye(n,Fc,ks)}function gi(n){return ye(n,Nc,Os)}function yi(n){for(var t=n.name+"",r=is[t],e=yl.call(is,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function di(n){return(yl.call(q,"placeholder")?q:n).placeholder}function bi(){var n=q.iteratee||Wa;return n=n===Wa?Te:n,arguments.length?n(arguments[0],arguments[1]):n}function wi(n,t){var r=n.__data__;return Ui(t)?r["string"==typeof t?"string":"hash"]:r.map;
}function mi(n){for(var t=Fc(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Di(u)]}return t}function xi(n,t){var r=U(n,t);return Le(r)?r:Y}function ji(n){var t=yl.call(n,Cl),r=n[Cl];try{n[Cl]=Y;var e=!0}catch(n){}var u=wl.call(n);return e&&(t?n[Cl]=r:delete n[Cl]),u}function Ai(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Vl(t,n+o);break;case"takeRight":n=Kl(n,t-o)}}return{start:n,end:t}}function ki(n){var t=n.match(Ct);
return t?t[1].split(Ut):[]}function Oi(n,t,r){t=ju(t,n);for(var e=-1,u=t.length,i=!1;++e<u;){var o=Qi(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&uc(u)&&Wi(o,u)&&(yh(n)||gh(n)))}function Ii(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&yl.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ri(n){return"function"!=typeof n.constructor||$i(n)?{}:_s(Rl(n))}function zi(n,t,r){var e=n.constructor;switch(t){case ut:return Ou(n);
case Dn:case Mn:return new e(+n);case it:return Iu(n,r);case ot:case ft:case ct:case at:case lt:case st:case ht:case pt:case _t:return Eu(n,r);case Zn:return new e;case Kn:case Xn:return new e(n);case Yn:return Ru(n);case Qn:return new e;case nt:return zu(n)}}function Ei(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(Lt,"{\n/* [wrapped with "+t+"] */\n")}function Si(n){return yh(n)||gh(n)||!!(Wl&&n&&n[Wl])}function Wi(n,t){var r=typeof n;
return t=null==t?zn:t,!!t&&("number"==r||"symbol"!=r&&qt.test(n))&&n>-1&&n%1==0&&n<t}function Li(n,t,r){if(!ic(r))return!1;var e=typeof t;return!!("number"==e?Vf(r)&&Wi(t,r.length):"string"==e&&t in r)&&Kf(r[t],n)}function Ci(n,t){if(yh(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!yc(n))||(Ot.test(n)||!kt.test(n)||null!=t&&n in cl(t))}function Ui(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function Bi(n){
var t=yi(n),r=q[t];if("function"!=typeof r||!(t in Bt.prototype))return!1;if(n===r)return!0;var e=As(r);return!!e&&n===e[0]}function Ti(n){return!!bl&&bl in n}function $i(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||_l)}function Di(n){return n===n&&!ic(n)}function Mi(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==Y||n in cl(r)))}}function Fi(n){var t=Wf(n,function(n){return r.size===en&&r.clear(),n}),r=t.cache;return t}function Ni(n,t){var r=n[1],e=t[1],u=r|e,i=u<(sn|hn|dn),o=e==dn&&r==_n||e==dn&&r==bn&&n[7].length<=t[8]||e==(dn|bn)&&t[7].length<=t[8]&&r==_n;
if(!i&&!o)return n;e&sn&&(n[2]=t[2],u|=r&sn?0:pn);var f=t[3];if(f){var c=n[3];n[3]=c?Lu(c,f,t[4]):f,n[4]=c?F(n[3],un):t[4]}return f=t[5],f&&(c=n[5],n[5]=c?Cu(c,f,t[6]):f,n[6]=c?F(n[5],un):t[6]),f=t[7],f&&(n[7]=f),e&dn&&(n[8]=null==n[8]?t[8]:Vl(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function Pi(n){var t=[];if(null!=n)for(var r in cl(n))t.push(r);return t}function qi(n){return wl.call(n)}function Zi(t,r,e){return r=Kl(r===Y?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Kl(u.length-r,0),f=el(o);++i<o;)f[i]=u[r+i];
i=-1;for(var c=el(r+1);++i<r;)c[i]=u[i];return c[r]=e(f),n(t,this,c)}}function Ki(n,t){return t.length<2?n:ve(n,fu(t,0,-1))}function Vi(n,t){for(var r=n.length,e=Vl(t.length,r),u=Uu(n);e--;){var i=t[e];n[e]=Wi(i,r)?u[i]:Y}return n}function Gi(n,t){if(("constructor"!==t||"function"!=typeof n[t])&&"__proto__"!=t)return n[t]}function Hi(n,t,r){var e=t+"";return Ss(n,Ei(e,no(ki(e),r)))}function Ji(n){var t=0,r=0;return function(){var e=Gl(),u=An-(e-r);if(r=e,u>0){if(++t>=jn)return arguments[0]}else t=0;
return n.apply(Y,arguments)}}function Yi(n,t){var r=-1,e=n.length,u=e-1;for(t=t===Y?e:t;++r<t;){var i=Xe(r,u),o=n[i];n[i]=n[r],n[r]=o}return n.length=t,n}function Qi(n){if("string"==typeof n||yc(n))return n;var t=n+"";return"0"==t&&1/n==-Rn?"-0":t}function Xi(n){if(null!=n){try{return gl.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function no(n,t){return r(Un,function(r){var e="_."+r[0];t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function to(n){if(n instanceof Bt)return n.clone();var t=new H(n.__wrapped__,n.__chain__);
return t.__actions__=Uu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function ro(n,t,r){t=(r?Li(n,t,r):t===Y)?1:Kl(jc(t),0);var e=null==n?0:n.length;if(!e||t<1)return[];for(var u=0,i=0,o=el(Dl(e/t));u<e;)o[i++]=fu(n,u,u+=t);return o}function eo(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u}function uo(){var n=arguments.length;if(!n)return[];for(var t=el(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return a(yh(r)?Uu(r):[r],te(t,1));
}function io(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),fu(n,t<0?0:t,e)):[]}function oo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),t=e-t,fu(n,0,t<0?0:t)):[]}function fo(n,t){return n&&n.length?yu(n,bi(t,3),!0,!0):[]}function co(n,t){return n&&n.length?yu(n,bi(t,3),!0):[]}function ao(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&Li(n,t,r)&&(r=0,e=u),Qr(n,t,r,e)):[]}function lo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:jc(r);
return u<0&&(u=Kl(e+u,0)),g(n,bi(t,3),u)}function so(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==Y&&(u=jc(r),u=r<0?Kl(e+u,0):Vl(u,e-1)),g(n,bi(t,3),u,!0)}function ho(n){return(null==n?0:n.length)?te(n,1):[]}function po(n){return(null==n?0:n.length)?te(n,Rn):[]}function _o(n,t){return(null==n?0:n.length)?(t=t===Y?1:jc(t),te(n,t)):[]}function vo(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e}function go(n){return n&&n.length?n[0]:Y}function yo(n,t,r){
var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:jc(r);return u<0&&(u=Kl(e+u,0)),y(n,t,u)}function bo(n){return(null==n?0:n.length)?fu(n,0,-1):[]}function wo(n,t){return null==n?"":ql.call(n,t)}function mo(n){var t=null==n?0:n.length;return t?n[t-1]:Y}function xo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==Y&&(u=jc(r),u=u<0?Kl(e+u,0):Vl(u,e-1)),t===t?Z(n,t,u):g(n,b,u,!0)}function jo(n,t){return n&&n.length?Ke(n,jc(t)):Y}function Ao(n,t){return n&&n.length&&t&&t.length?Ye(n,t):n;
}function ko(n,t,r){return n&&n.length&&t&&t.length?Ye(n,t,bi(r,2)):n}function Oo(n,t,r){return n&&n.length&&t&&t.length?Ye(n,t,Y,r):n}function Io(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=bi(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return Qe(n,u),r}function Ro(n){return null==n?n:Yl.call(n)}function zo(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&Li(n,t,r)?(t=0,r=e):(t=null==t?0:jc(t),r=r===Y?e:jc(r)),fu(n,t,r)):[]}function Eo(n,t){
return au(n,t)}function So(n,t,r){return lu(n,t,bi(r,2))}function Wo(n,t){var r=null==n?0:n.length;if(r){var e=au(n,t);if(e<r&&Kf(n[e],t))return e}return-1}function Lo(n,t){return au(n,t,!0)}function Co(n,t,r){return lu(n,t,bi(r,2),!0)}function Uo(n,t){if(null==n?0:n.length){var r=au(n,t,!0)-1;if(Kf(n[r],t))return r}return-1}function Bo(n){return n&&n.length?su(n):[]}function To(n,t){return n&&n.length?su(n,bi(t,2)):[]}function $o(n){var t=null==n?0:n.length;return t?fu(n,1,t):[]}function Do(n,t,r){
return n&&n.length?(t=r||t===Y?1:jc(t),fu(n,0,t<0?0:t)):[]}function Mo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),t=e-t,fu(n,t<0?0:t,e)):[]}function Fo(n,t){return n&&n.length?yu(n,bi(t,3),!1,!0):[]}function No(n,t){return n&&n.length?yu(n,bi(t,3)):[]}function Po(n){return n&&n.length?_u(n):[]}function qo(n,t){return n&&n.length?_u(n,bi(t,2)):[]}function Zo(n,t){return t="function"==typeof t?t:Y,n&&n.length?_u(n,Y,t):[]}function Ko(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){
if(Gf(n))return t=Kl(n.length,t),!0}),O(t,function(t){return c(n,m(t))})}function Vo(t,r){if(!t||!t.length)return[];var e=Ko(t);return null==r?e:c(e,function(t){return n(r,Y,t)})}function Go(n,t){return wu(n||[],t||[],zr)}function Ho(n,t){return wu(n||[],t||[],iu)}function Jo(n){var t=q(n);return t.__chain__=!0,t}function Yo(n,t){return t(n),n}function Qo(n,t){return t(n)}function Xo(){return Jo(this)}function nf(){return new H(this.value(),this.__chain__)}function tf(){this.__values__===Y&&(this.__values__=mc(this.value()));
var n=this.__index__>=this.__values__.length;return{done:n,value:n?Y:this.__values__[this.__index__++]}}function rf(){return this}function ef(n){for(var t,r=this;r instanceof G;){var e=to(r);e.__index__=0,e.__values__=Y,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function uf(){var n=this.__wrapped__;if(n instanceof Bt){var t=n;return this.__actions__.length&&(t=new Bt(this)),t=t.reverse(),t.__actions__.push({func:Qo,args:[Ro],thisArg:Y}),new H(t,this.__chain__)}return this.thru(Ro);
}function of(){return du(this.__wrapped__,this.__actions__)}function ff(n,t,r){var e=yh(n)?u:Gr;return r&&Li(n,t,r)&&(t=Y),e(n,bi(t,3))}function cf(n,t){return(yh(n)?i:ne)(n,bi(t,3))}function af(n,t){return te(vf(n,t),1)}function lf(n,t){return te(vf(n,t),Rn)}function sf(n,t,r){return r=r===Y?1:jc(r),te(vf(n,t),r)}function hf(n,t){return(yh(n)?r:vs)(n,bi(t,3))}function pf(n,t){return(yh(n)?e:gs)(n,bi(t,3))}function _f(n,t,r,e){n=Vf(n)?n:na(n),r=r&&!e?jc(r):0;var u=n.length;return r<0&&(r=Kl(u+r,0)),
gc(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&y(n,t,r)>-1}function vf(n,t){return(yh(n)?c:Fe)(n,bi(t,3))}function gf(n,t,r,e){return null==n?[]:(yh(t)||(t=null==t?[]:[t]),r=e?Y:r,yh(r)||(r=null==r?[]:[r]),Ve(n,t,r))}function yf(n,t,r){var e=yh(n)?l:j,u=arguments.length<3;return e(n,bi(t,4),r,u,vs)}function df(n,t,r){var e=yh(n)?s:j,u=arguments.length<3;return e(n,bi(t,4),r,u,gs)}function bf(n,t){return(yh(n)?i:ne)(n,Lf(bi(t,3)))}function wf(n){return(yh(n)?kr:eu)(n)}function mf(n,t,r){return t=(r?Li(n,t,r):t===Y)?1:jc(t),
(yh(n)?Or:uu)(n,t)}function xf(n){return(yh(n)?Ir:ou)(n)}function jf(n){if(null==n)return 0;if(Vf(n))return gc(n)?K(n):n.length;var t=Is(n);return t==Zn||t==Qn?n.size:$e(n).length}function Af(n,t,r){var e=yh(n)?h:cu;return r&&Li(n,t,r)&&(t=Y),e(n,bi(t,3))}function kf(n,t){if("function"!=typeof t)throw new sl(tn);return n=jc(n),function(){if(--n<1)return t.apply(this,arguments)}}function Of(n,t,r){return t=r?Y:t,t=n&&null==t?n.length:t,fi(n,dn,Y,Y,Y,Y,t)}function If(n,t){var r;if("function"!=typeof t)throw new sl(tn);
return n=jc(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=Y),r}}function Rf(n,t,r){t=r?Y:t;var e=fi(n,_n,Y,Y,Y,Y,Y,t);return e.placeholder=Rf.placeholder,e}function zf(n,t,r){t=r?Y:t;var e=fi(n,vn,Y,Y,Y,Y,Y,t);return e.placeholder=zf.placeholder,e}function Ef(n,t,r){function e(t){var r=h,e=p;return h=p=Y,d=t,v=n.apply(e,r)}function u(n){return d=n,g=Es(f,t),b?e(n):v}function i(n){var r=n-y,e=n-d,u=t-r;return w?Vl(u,_-e):u}function o(n){var r=n-y,e=n-d;return y===Y||r>=t||r<0||w&&e>=_;
}function f(){var n=ih();return o(n)?c(n):(g=Es(f,i(n)),Y)}function c(n){return g=Y,m&&h?e(n):(h=p=Y,v)}function a(){g!==Y&&xs(g),d=0,h=y=p=g=Y}function l(){return g===Y?v:c(ih())}function s(){var n=ih(),r=o(n);if(h=arguments,p=this,y=n,r){if(g===Y)return u(y);if(w)return xs(g),g=Es(f,t),e(y)}return g===Y&&(g=Es(f,t)),v}var h,p,_,v,g,y,d=0,b=!1,w=!1,m=!0;if("function"!=typeof n)throw new sl(tn);return t=kc(t)||0,ic(r)&&(b=!!r.leading,w="maxWait"in r,_=w?Kl(kc(r.maxWait)||0,t):_,m="trailing"in r?!!r.trailing:m),
s.cancel=a,s.flush=l,s}function Sf(n){return fi(n,wn)}function Wf(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new sl(tn);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(Wf.Cache||ar),r}function Lf(n){if("function"!=typeof n)throw new sl(tn);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:
return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function Cf(n){return If(2,n)}function Uf(n,t){if("function"!=typeof n)throw new sl(tn);return t=t===Y?t:jc(t),ru(n,t)}function Bf(t,r){if("function"!=typeof t)throw new sl(tn);return r=null==r?0:Kl(jc(r),0),ru(function(e){var u=e[r],i=Au(e,0,r);return u&&a(i,u),n(t,this,i)})}function Tf(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new sl(tn);return ic(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),
Ef(n,t,{leading:e,maxWait:t,trailing:u})}function $f(n){return Of(n,1)}function Df(n,t){return sh(xu(t),n)}function Mf(){if(!arguments.length)return[];var n=arguments[0];return yh(n)?n:[n]}function Ff(n){return Dr(n,cn)}function Nf(n,t){return t="function"==typeof t?t:Y,Dr(n,cn,t)}function Pf(n){return Dr(n,on|cn)}function qf(n,t){return t="function"==typeof t?t:Y,Dr(n,on|cn,t)}function Zf(n,t){return null==t||Zr(n,t,Fc(t))}function Kf(n,t){return n===t||n!==n&&t!==t}function Vf(n){return null!=n&&uc(n.length)&&!rc(n);
}function Gf(n){return oc(n)&&Vf(n)}function Hf(n){return n===!0||n===!1||oc(n)&&de(n)==Dn}function Jf(n){return oc(n)&&1===n.nodeType&&!_c(n)}function Yf(n){if(null==n)return!0;if(Vf(n)&&(yh(n)||"string"==typeof n||"function"==typeof n.splice||bh(n)||Ah(n)||gh(n)))return!n.length;var t=Is(n);if(t==Zn||t==Qn)return!n.size;if($i(n))return!$e(n).length;for(var r in n)if(yl.call(n,r))return!1;return!0}function Qf(n,t){return ze(n,t)}function Xf(n,t,r){r="function"==typeof r?r:Y;var e=r?r(n,t):Y;return e===Y?ze(n,t,Y,r):!!e;
}function nc(n){if(!oc(n))return!1;var t=de(n);return t==Nn||t==Fn||"string"==typeof n.message&&"string"==typeof n.name&&!_c(n)}function tc(n){return"number"==typeof n&&Pl(n)}function rc(n){if(!ic(n))return!1;var t=de(n);return t==Pn||t==qn||t==$n||t==Jn}function ec(n){return"number"==typeof n&&n==jc(n)}function uc(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=zn}function ic(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function oc(n){return null!=n&&"object"==typeof n}function fc(n,t){
return n===t||We(n,t,mi(t))}function cc(n,t,r){return r="function"==typeof r?r:Y,We(n,t,mi(t),r)}function ac(n){return pc(n)&&n!=+n}function lc(n){if(Rs(n))throw new il(nn);return Le(n)}function sc(n){return null===n}function hc(n){return null==n}function pc(n){return"number"==typeof n||oc(n)&&de(n)==Kn}function _c(n){if(!oc(n)||de(n)!=Gn)return!1;var t=Rl(n);if(null===t)return!0;var r=yl.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&gl.call(r)==ml}function vc(n){
return ec(n)&&n>=-zn&&n<=zn}function gc(n){return"string"==typeof n||!yh(n)&&oc(n)&&de(n)==Xn}function yc(n){return"symbol"==typeof n||oc(n)&&de(n)==nt}function dc(n){return n===Y}function bc(n){return oc(n)&&Is(n)==rt}function wc(n){return oc(n)&&de(n)==et}function mc(n){if(!n)return[];if(Vf(n))return gc(n)?V(n):Uu(n);if(Ll&&n[Ll])return $(n[Ll]());var t=Is(n);return(t==Zn?D:t==Qn?N:na)(n)}function xc(n){if(!n)return 0===n?n:0;if(n=kc(n),n===Rn||n===-Rn){return(n<0?-1:1)*En}return n===n?n:0}function jc(n){
var t=xc(n),r=t%1;return t===t?r?t-r:t:0}function Ac(n){return n?$r(jc(n),0,Wn):0}function kc(n){if("number"==typeof n)return n;if(yc(n))return Sn;if(ic(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=ic(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Et,"");var r=Ft.test(n);return r||Pt.test(n)?Jr(n.slice(2),r?2:8):Mt.test(n)?Sn:+n}function Oc(n){return Bu(n,Nc(n))}function Ic(n){return n?$r(jc(n),-zn,zn):0===n?n:0}function Rc(n){return null==n?"":pu(n)}function zc(n,t){var r=_s(n);
return null==t?r:Wr(r,t)}function Ec(n,t){return v(n,bi(t,3),ee)}function Sc(n,t){return v(n,bi(t,3),ue)}function Wc(n,t){return null==n?n:ys(n,bi(t,3),Nc)}function Lc(n,t){return null==n?n:ds(n,bi(t,3),Nc)}function Cc(n,t){return n&&ee(n,bi(t,3))}function Uc(n,t){return n&&ue(n,bi(t,3))}function Bc(n){return null==n?[]:se(n,Fc(n))}function Tc(n){return null==n?[]:se(n,Nc(n))}function $c(n,t,r){var e=null==n?Y:ve(n,t);return e===Y?r:e}function Dc(n,t){return null!=n&&Oi(n,t,we)}function Mc(n,t){return null!=n&&Oi(n,t,me);
}function Fc(n){return Vf(n)?Ar(n):$e(n)}function Nc(n){return Vf(n)?Ar(n,!0):De(n)}function Pc(n,t){var r={};return t=bi(t,3),ee(n,function(n,e,u){Cr(r,t(n,e,u),n)}),r}function qc(n,t){var r={};return t=bi(t,3),ee(n,function(n,e,u){Cr(r,e,t(n,e,u))}),r}function Zc(n,t){return Kc(n,Lf(bi(t)))}function Kc(n,t){if(null==n)return{};var r=c(gi(n),function(n){return[n]});return t=bi(t),He(n,r,function(n,r){return t(n,r[0])})}function Vc(n,t,r){t=ju(t,n);var e=-1,u=t.length;for(u||(u=1,n=Y);++e<u;){var i=null==n?Y:n[Qi(t[e])];
i===Y&&(e=u,i=r),n=rc(i)?i.call(n):i}return n}function Gc(n,t,r){return null==n?n:iu(n,t,r)}function Hc(n,t,r,e){return e="function"==typeof e?e:Y,null==n?n:iu(n,t,r,e)}function Jc(n,t,e){var u=yh(n),i=u||bh(n)||Ah(n);if(t=bi(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:ic(n)&&rc(o)?_s(Rl(n)):{}}return(i?r:ee)(n,function(n,r,u){return t(e,n,r,u)}),e}function Yc(n,t){return null==n||vu(n,t)}function Qc(n,t,r){return null==n?n:gu(n,t,xu(r))}function Xc(n,t,r,e){return e="function"==typeof e?e:Y,
null==n?n:gu(n,t,xu(r),e)}function na(n){return null==n?[]:z(n,Fc(n))}function ta(n){return null==n?[]:z(n,Nc(n))}function ra(n,t,r){return r===Y&&(r=t,t=Y),r!==Y&&(r=kc(r),r=r===r?r:0),t!==Y&&(t=kc(t),t=t===t?t:0),$r(kc(n),t,r)}function ea(n,t,r){return t=xc(t),r===Y?(r=t,t=0):r=xc(r),n=kc(n),xe(n,t,r)}function ua(n,t,r){if(r&&"boolean"!=typeof r&&Li(n,t,r)&&(t=r=Y),r===Y&&("boolean"==typeof t?(r=t,t=Y):"boolean"==typeof n&&(r=n,n=Y)),n===Y&&t===Y?(n=0,t=1):(n=xc(n),t===Y?(t=n,n=0):t=xc(t)),n>t){
var e=n;n=t,t=e}if(r||n%1||t%1){var u=Jl();return Vl(n+u*(t-n+Hr("1e-"+((u+"").length-1))),t)}return Xe(n,t)}function ia(n){return Jh(Rc(n).toLowerCase())}function oa(n){return n=Rc(n),n&&n.replace(Zt,he).replace(Br,"")}function fa(n,t,r){n=Rc(n),t=pu(t);var e=n.length;r=r===Y?e:$r(jc(r),0,e);var u=r;return r-=t.length,r>=0&&n.slice(r,u)==t}function ca(n){return n=Rc(n),n&&mt.test(n)?n.replace(bt,pe):n}function aa(n){return n=Rc(n),n&&zt.test(n)?n.replace(Rt,"\\$&"):n}function la(n,t,r){n=Rc(n),t=jc(t);
var e=t?K(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return ni(Ml(u),r)+n+ni(Dl(u),r)}function sa(n,t,r){n=Rc(n),t=jc(t);var e=t?K(n):0;return t&&e<t?n+ni(t-e,r):n}function ha(n,t,r){n=Rc(n),t=jc(t);var e=t?K(n):0;return t&&e<t?ni(t-e,r)+n:n}function pa(n,t,r){return r||null==t?t=0:t&&(t=+t),Hl(Rc(n).replace(St,""),t||0)}function _a(n,t,r){return t=(r?Li(n,t,r):t===Y)?1:jc(t),tu(Rc(n),t)}function va(){var n=arguments,t=Rc(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function ga(n,t,r){return r&&"number"!=typeof r&&Li(n,t,r)&&(t=r=Y),
(r=r===Y?Wn:r>>>0)?(n=Rc(n),n&&("string"==typeof t||null!=t&&!xh(t))&&(t=pu(t),!t&&B(n))?Au(V(n),0,r):n.split(t,r)):[]}function ya(n,t,r){return n=Rc(n),r=null==r?0:$r(jc(r),0,n.length),t=pu(t),n.slice(r,r+t.length)==t}function da(n,t,r){var e=q.templateSettings;r&&Li(n,t,r)&&(t=Y),n=Rc(n),t=zh({},t,e,ci);var u,i,o=zh({},t.imports,e.imports,ci),f=Fc(o),c=z(o,f),a=0,l=t.interpolate||Kt,s="__p += '",h=al((t.escape||Kt).source+"|"+l.source+"|"+(l===At?$t:Kt).source+"|"+(t.evaluate||Kt).source+"|$","g"),p="//# sourceURL="+(yl.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Nr+"]")+"\n";
n.replace(h,function(t,r,e,o,f,c){return e||(e=o),s+=n.slice(a,c).replace(Vt,C),r&&(u=!0,s+="' +\n__e("+r+") +\n'"),f&&(i=!0,s+="';\n"+f+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),a=c+t.length,t}),s+="';\n";var _=yl.call(t,"variable")&&t.variable;_||(s="with (obj) {\n"+s+"\n}\n"),s=(i?s.replace(vt,""):s).replace(gt,"$1").replace(yt,"$1;"),s="function("+(_||"obj")+") {\n"+(_?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";
var v=Yh(function(){return ol(f,p+"return "+s).apply(Y,c)});if(v.source=s,nc(v))throw v;return v}function ba(n){return Rc(n).toLowerCase()}function wa(n){return Rc(n).toUpperCase()}function ma(n,t,r){if(n=Rc(n),n&&(r||t===Y))return n.replace(Et,"");if(!n||!(t=pu(t)))return n;var e=V(n),u=V(t);return Au(e,S(e,u),W(e,u)+1).join("")}function xa(n,t,r){if(n=Rc(n),n&&(r||t===Y))return n.replace(Wt,"");if(!n||!(t=pu(t)))return n;var e=V(n);return Au(e,0,W(e,V(t))+1).join("")}function ja(n,t,r){if(n=Rc(n),
n&&(r||t===Y))return n.replace(St,"");if(!n||!(t=pu(t)))return n;var e=V(n);return Au(e,S(e,V(t))).join("")}function Aa(n,t){var r=mn,e=xn;if(ic(t)){var u="separator"in t?t.separator:u;r="length"in t?jc(t.length):r,e="omission"in t?pu(t.omission):e}n=Rc(n);var i=n.length;if(B(n)){var o=V(n);i=o.length}if(r>=i)return n;var f=r-K(e);if(f<1)return e;var c=o?Au(o,0,f).join(""):n.slice(0,f);if(u===Y)return c+e;if(o&&(f+=c.length-f),xh(u)){if(n.slice(f).search(u)){var a,l=c;for(u.global||(u=al(u.source,Rc(Dt.exec(u))+"g")),
u.lastIndex=0;a=u.exec(l);)var s=a.index;c=c.slice(0,s===Y?f:s)}}else if(n.indexOf(pu(u),f)!=f){var h=c.lastIndexOf(u);h>-1&&(c=c.slice(0,h))}return c+e}function ka(n){return n=Rc(n),n&&wt.test(n)?n.replace(dt,_e):n}function Oa(n,t,r){return n=Rc(n),t=r?Y:t,t===Y?T(n)?J(n):_(n):n.match(t)||[]}function Ia(t){var r=null==t?0:t.length,e=bi();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new sl(tn);return[e(n[0]),n[1]]}):[],ru(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e);
}})}function Ra(n){return Mr(Dr(n,on))}function za(n){return function(){return n}}function Ea(n,t){return null==n||n!==n?t:n}function Sa(n){return n}function Wa(n){return Te("function"==typeof n?n:Dr(n,on))}function La(n){return Ne(Dr(n,on))}function Ca(n,t){return Pe(n,Dr(t,on))}function Ua(n,t,e){var u=Fc(t),i=se(t,u);null!=e||ic(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=se(t,Fc(t)));var o=!(ic(e)&&"chain"in e&&!e.chain),f=rc(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){
var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Uu(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Ba(){return Xr._===this&&(Xr._=xl),this}function Ta(){}function $a(n){return n=jc(n),ru(function(t){return Ke(t,n)})}function Da(n){return Ci(n)?m(Qi(n)):Je(n)}function Ma(n){return function(t){return null==n?Y:ve(n,t)}}function Fa(){return[]}function Na(){return!1}function Pa(){return{};
}function qa(){return""}function Za(){return!0}function Ka(n,t){if(n=jc(n),n<1||n>zn)return[];var r=Wn,e=Vl(n,Wn);t=bi(t),n-=Wn;for(var u=O(e,t);++r<n;)t(r);return u}function Va(n){return yh(n)?c(n,Qi):yc(n)?[n]:Uu(Ws(Rc(n)))}function Ga(n){var t=++dl;return Rc(n)+t}function Ha(n){return n&&n.length?Yr(n,Sa,be):Y}function Ja(n,t){return n&&n.length?Yr(n,bi(t,2),be):Y}function Ya(n){return w(n,Sa)}function Qa(n,t){return w(n,bi(t,2))}function Xa(n){return n&&n.length?Yr(n,Sa,Me):Y}function nl(n,t){
return n&&n.length?Yr(n,bi(t,2),Me):Y}function tl(n){return n&&n.length?k(n,Sa):0}function rl(n,t){return n&&n.length?k(n,bi(t,2)):0}x=null==x?Xr:ge.defaults(Xr.Object(),x,ge.pick(Xr,Fr));var el=x.Array,ul=x.Date,il=x.Error,ol=x.Function,fl=x.Math,cl=x.Object,al=x.RegExp,ll=x.String,sl=x.TypeError,hl=el.prototype,pl=ol.prototype,_l=cl.prototype,vl=x["__core-js_shared__"],gl=pl.toString,yl=_l.hasOwnProperty,dl=0,bl=function(){var n=/[^.]+$/.exec(vl&&vl.keys&&vl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:"";
}(),wl=_l.toString,ml=gl.call(cl),xl=Xr._,jl=al("^"+gl.call(yl).replace(Rt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Al=re?x.Buffer:Y,kl=x.Symbol,Ol=x.Uint8Array,Il=Al?Al.allocUnsafe:Y,Rl=M(cl.getPrototypeOf,cl),zl=cl.create,El=_l.propertyIsEnumerable,Sl=hl.splice,Wl=kl?kl.isConcatSpreadable:Y,Ll=kl?kl.iterator:Y,Cl=kl?kl.toStringTag:Y,Ul=function(){try{var n=xi(cl,"defineProperty");return n({},"",{}),n}catch(n){}}(),Bl=x.clearTimeout!==Xr.clearTimeout&&x.clearTimeout,Tl=ul&&ul.now!==Xr.Date.now&&ul.now,$l=x.setTimeout!==Xr.setTimeout&&x.setTimeout,Dl=fl.ceil,Ml=fl.floor,Fl=cl.getOwnPropertySymbols,Nl=Al?Al.isBuffer:Y,Pl=x.isFinite,ql=hl.join,Zl=M(cl.keys,cl),Kl=fl.max,Vl=fl.min,Gl=ul.now,Hl=x.parseInt,Jl=fl.random,Yl=hl.reverse,Ql=xi(x,"DataView"),Xl=xi(x,"Map"),ns=xi(x,"Promise"),ts=xi(x,"Set"),rs=xi(x,"WeakMap"),es=xi(cl,"create"),us=rs&&new rs,is={},os=Xi(Ql),fs=Xi(Xl),cs=Xi(ns),as=Xi(ts),ls=Xi(rs),ss=kl?kl.prototype:Y,hs=ss?ss.valueOf:Y,ps=ss?ss.toString:Y,_s=function(){
function n(){}return function(t){if(!ic(t))return{};if(zl)return zl(t);n.prototype=t;var r=new n;return n.prototype=Y,r}}();q.templateSettings={escape:xt,evaluate:jt,interpolate:At,variable:"",imports:{_:q}},q.prototype=G.prototype,q.prototype.constructor=q,H.prototype=_s(G.prototype),H.prototype.constructor=H,Bt.prototype=_s(G.prototype),Bt.prototype.constructor=Bt,Yt.prototype.clear=Qt,Yt.prototype.delete=Xt,Yt.prototype.get=nr,Yt.prototype.has=tr,Yt.prototype.set=rr,er.prototype.clear=ur,er.prototype.delete=ir,
er.prototype.get=or,er.prototype.has=fr,er.prototype.set=cr,ar.prototype.clear=lr,ar.prototype.delete=sr,ar.prototype.get=hr,ar.prototype.has=pr,ar.prototype.set=_r,vr.prototype.add=vr.prototype.push=gr,vr.prototype.has=yr,dr.prototype.clear=br,dr.prototype.delete=wr,dr.prototype.get=mr,dr.prototype.has=xr,dr.prototype.set=jr;var vs=Fu(ee),gs=Fu(ue,!0),ys=Nu(),ds=Nu(!0),bs=us?function(n,t){return us.set(n,t),n}:Sa,ws=Ul?function(n,t){return Ul(n,"toString",{configurable:!0,enumerable:!1,value:za(t),
writable:!0})}:Sa,ms=ru,xs=Bl||function(n){return Xr.clearTimeout(n)},js=ts&&1/N(new ts([,-0]))[1]==Rn?function(n){return new ts(n)}:Ta,As=us?function(n){return us.get(n)}:Ta,ks=Fl?function(n){return null==n?[]:(n=cl(n),i(Fl(n),function(t){return El.call(n,t)}))}:Fa,Os=Fl?function(n){for(var t=[];n;)a(t,ks(n)),n=Rl(n);return t}:Fa,Is=de;(Ql&&Is(new Ql(new ArrayBuffer(1)))!=it||Xl&&Is(new Xl)!=Zn||ns&&Is(ns.resolve())!=Hn||ts&&Is(new ts)!=Qn||rs&&Is(new rs)!=rt)&&(Is=function(n){var t=de(n),r=t==Gn?n.constructor:Y,e=r?Xi(r):"";
if(e)switch(e){case os:return it;case fs:return Zn;case cs:return Hn;case as:return Qn;case ls:return rt}return t});var Rs=vl?rc:Na,zs=Ji(bs),Es=$l||function(n,t){return Xr.setTimeout(n,t)},Ss=Ji(ws),Ws=Fi(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(It,function(n,r,e,u){t.push(e?u.replace(Tt,"$1"):r||n)}),t}),Ls=ru(function(n,t){return Gf(n)?Vr(n,te(t,1,Gf,!0)):[]}),Cs=ru(function(n,t){var r=mo(t);return Gf(r)&&(r=Y),Gf(n)?Vr(n,te(t,1,Gf,!0),bi(r,2)):[]}),Us=ru(function(n,t){
var r=mo(t);return Gf(r)&&(r=Y),Gf(n)?Vr(n,te(t,1,Gf,!0),Y,r):[]}),Bs=ru(function(n){var t=c(n,mu);return t.length&&t[0]===n[0]?je(t):[]}),Ts=ru(function(n){var t=mo(n),r=c(n,mu);return t===mo(r)?t=Y:r.pop(),r.length&&r[0]===n[0]?je(r,bi(t,2)):[]}),$s=ru(function(n){var t=mo(n),r=c(n,mu);return t="function"==typeof t?t:Y,t&&r.pop(),r.length&&r[0]===n[0]?je(r,Y,t):[]}),Ds=ru(Ao),Ms=_i(function(n,t){var r=null==n?0:n.length,e=Tr(n,t);return Qe(n,c(t,function(n){return Wi(n,r)?+n:n}).sort(Su)),e}),Fs=ru(function(n){
return _u(te(n,1,Gf,!0))}),Ns=ru(function(n){var t=mo(n);return Gf(t)&&(t=Y),_u(te(n,1,Gf,!0),bi(t,2))}),Ps=ru(function(n){var t=mo(n);return t="function"==typeof t?t:Y,_u(te(n,1,Gf,!0),Y,t)}),qs=ru(function(n,t){return Gf(n)?Vr(n,t):[]}),Zs=ru(function(n){return bu(i(n,Gf))}),Ks=ru(function(n){var t=mo(n);return Gf(t)&&(t=Y),bu(i(n,Gf),bi(t,2))}),Vs=ru(function(n){var t=mo(n);return t="function"==typeof t?t:Y,bu(i(n,Gf),Y,t)}),Gs=ru(Ko),Hs=ru(function(n){var t=n.length,r=t>1?n[t-1]:Y;return r="function"==typeof r?(n.pop(),
r):Y,Vo(n,r)}),Js=_i(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Tr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof Bt&&Wi(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:Qo,args:[u],thisArg:Y}),new H(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(Y),n})):this.thru(u)}),Ys=Du(function(n,t,r){yl.call(n,r)?++n[r]:Cr(n,r,1)}),Qs=Gu(lo),Xs=Gu(so),nh=Du(function(n,t,r){yl.call(n,r)?n[r].push(t):Cr(n,r,[t])}),th=ru(function(t,r,e){var u=-1,i="function"==typeof r,o=Vf(t)?el(t.length):[];
return vs(t,function(t){o[++u]=i?n(r,t,e):ke(t,r,e)}),o}),rh=Du(function(n,t,r){Cr(n,r,t)}),eh=Du(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),uh=ru(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Li(n,t[0],t[1])?t=[]:r>2&&Li(t[0],t[1],t[2])&&(t=[t[0]]),Ve(n,te(t,1),[])}),ih=Tl||function(){return Xr.Date.now()},oh=ru(function(n,t,r){var e=sn;if(r.length){var u=F(r,di(oh));e|=gn}return fi(n,e,t,r,u)}),fh=ru(function(n,t,r){var e=sn|hn;if(r.length){var u=F(r,di(fh));e|=gn;
}return fi(t,e,n,r,u)}),ch=ru(function(n,t){return Kr(n,1,t)}),ah=ru(function(n,t,r){return Kr(n,kc(t)||0,r)});Wf.Cache=ar;var lh=ms(function(t,r){r=1==r.length&&yh(r[0])?c(r[0],R(bi())):c(te(r,1),R(bi()));var e=r.length;return ru(function(u){for(var i=-1,o=Vl(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);return n(t,this,u)})}),sh=ru(function(n,t){return fi(n,gn,Y,t,F(t,di(sh)))}),hh=ru(function(n,t){return fi(n,yn,Y,t,F(t,di(hh)))}),ph=_i(function(n,t){return fi(n,bn,Y,Y,Y,t)}),_h=ei(be),vh=ei(function(n,t){
return n>=t}),gh=Oe(function(){return arguments}())?Oe:function(n){return oc(n)&&yl.call(n,"callee")&&!El.call(n,"callee")},yh=el.isArray,dh=ie?R(ie):Ie,bh=Nl||Na,wh=oe?R(oe):Re,mh=fe?R(fe):Se,xh=ce?R(ce):Ce,jh=ae?R(ae):Ue,Ah=le?R(le):Be,kh=ei(Me),Oh=ei(function(n,t){return n<=t}),Ih=Mu(function(n,t){if($i(t)||Vf(t))return Bu(t,Fc(t),n),Y;for(var r in t)yl.call(t,r)&&zr(n,r,t[r])}),Rh=Mu(function(n,t){Bu(t,Nc(t),n)}),zh=Mu(function(n,t,r,e){Bu(t,Nc(t),n,e)}),Eh=Mu(function(n,t,r,e){Bu(t,Fc(t),n,e);
}),Sh=_i(Tr),Wh=ru(function(n,t){n=cl(n);var r=-1,e=t.length,u=e>2?t[2]:Y;for(u&&Li(t[0],t[1],u)&&(e=1);++r<e;)for(var i=t[r],o=Nc(i),f=-1,c=o.length;++f<c;){var a=o[f],l=n[a];(l===Y||Kf(l,_l[a])&&!yl.call(n,a))&&(n[a]=i[a])}return n}),Lh=ru(function(t){return t.push(Y,ai),n($h,Y,t)}),Ch=Yu(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=wl.call(t)),n[t]=r},za(Sa)),Uh=Yu(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=wl.call(t)),yl.call(n,t)?n[t].push(r):n[t]=[r]},bi),Bh=ru(ke),Th=Mu(function(n,t,r){
qe(n,t,r)}),$h=Mu(function(n,t,r,e){qe(n,t,r,e)}),Dh=_i(function(n,t){var r={};if(null==n)return r;var e=!1;t=c(t,function(t){return t=ju(t,n),e||(e=t.length>1),t}),Bu(n,gi(n),r),e&&(r=Dr(r,on|fn|cn,li));for(var u=t.length;u--;)vu(r,t[u]);return r}),Mh=_i(function(n,t){return null==n?{}:Ge(n,t)}),Fh=oi(Fc),Nh=oi(Nc),Ph=Zu(function(n,t,r){return t=t.toLowerCase(),n+(r?ia(t):t)}),qh=Zu(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Zh=Zu(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Kh=qu("toLowerCase"),Vh=Zu(function(n,t,r){
return n+(r?"_":"")+t.toLowerCase()}),Gh=Zu(function(n,t,r){return n+(r?" ":"")+Jh(t)}),Hh=Zu(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Jh=qu("toUpperCase"),Yh=ru(function(t,r){try{return n(t,Y,r)}catch(n){return nc(n)?n:new il(n)}}),Qh=_i(function(n,t){return r(t,function(t){t=Qi(t),Cr(n,t,oh(n[t],n))}),n}),Xh=Hu(),np=Hu(!0),tp=ru(function(n,t){return function(r){return ke(r,n,t)}}),rp=ru(function(n,t){return function(r){return ke(n,r,t)}}),ep=Xu(c),up=Xu(u),ip=Xu(h),op=ri(),fp=ri(!0),cp=Qu(function(n,t){
return n+t},0),ap=ii("ceil"),lp=Qu(function(n,t){return n/t},1),sp=ii("floor"),hp=Qu(function(n,t){return n*t},1),pp=ii("round"),_p=Qu(function(n,t){return n-t},0);return q.after=kf,q.ary=Of,q.assign=Ih,q.assignIn=Rh,q.assignInWith=zh,q.assignWith=Eh,q.at=Sh,q.before=If,q.bind=oh,q.bindAll=Qh,q.bindKey=fh,q.castArray=Mf,q.chain=Jo,q.chunk=ro,q.compact=eo,q.concat=uo,q.cond=Ia,q.conforms=Ra,q.constant=za,q.countBy=Ys,q.create=zc,q.curry=Rf,q.curryRight=zf,q.debounce=Ef,q.defaults=Wh,q.defaultsDeep=Lh,
q.defer=ch,q.delay=ah,q.difference=Ls,q.differenceBy=Cs,q.differenceWith=Us,q.drop=io,q.dropRight=oo,q.dropRightWhile=fo,q.dropWhile=co,q.fill=ao,q.filter=cf,q.flatMap=af,q.flatMapDeep=lf,q.flatMapDepth=sf,q.flatten=ho,q.flattenDeep=po,q.flattenDepth=_o,q.flip=Sf,q.flow=Xh,q.flowRight=np,q.fromPairs=vo,q.functions=Bc,q.functionsIn=Tc,q.groupBy=nh,q.initial=bo,q.intersection=Bs,q.intersectionBy=Ts,q.intersectionWith=$s,q.invert=Ch,q.invertBy=Uh,q.invokeMap=th,q.iteratee=Wa,q.keyBy=rh,q.keys=Fc,q.keysIn=Nc,
q.map=vf,q.mapKeys=Pc,q.mapValues=qc,q.matches=La,q.matchesProperty=Ca,q.memoize=Wf,q.merge=Th,q.mergeWith=$h,q.method=tp,q.methodOf=rp,q.mixin=Ua,q.negate=Lf,q.nthArg=$a,q.omit=Dh,q.omitBy=Zc,q.once=Cf,q.orderBy=gf,q.over=ep,q.overArgs=lh,q.overEvery=up,q.overSome=ip,q.partial=sh,q.partialRight=hh,q.partition=eh,q.pick=Mh,q.pickBy=Kc,q.property=Da,q.propertyOf=Ma,q.pull=Ds,q.pullAll=Ao,q.pullAllBy=ko,q.pullAllWith=Oo,q.pullAt=Ms,q.range=op,q.rangeRight=fp,q.rearg=ph,q.reject=bf,q.remove=Io,q.rest=Uf,
q.reverse=Ro,q.sampleSize=mf,q.set=Gc,q.setWith=Hc,q.shuffle=xf,q.slice=zo,q.sortBy=uh,q.sortedUniq=Bo,q.sortedUniqBy=To,q.split=ga,q.spread=Bf,q.tail=$o,q.take=Do,q.takeRight=Mo,q.takeRightWhile=Fo,q.takeWhile=No,q.tap=Yo,q.throttle=Tf,q.thru=Qo,q.toArray=mc,q.toPairs=Fh,q.toPairsIn=Nh,q.toPath=Va,q.toPlainObject=Oc,q.transform=Jc,q.unary=$f,q.union=Fs,q.unionBy=Ns,q.unionWith=Ps,q.uniq=Po,q.uniqBy=qo,q.uniqWith=Zo,q.unset=Yc,q.unzip=Ko,q.unzipWith=Vo,q.update=Qc,q.updateWith=Xc,q.values=na,q.valuesIn=ta,
q.without=qs,q.words=Oa,q.wrap=Df,q.xor=Zs,q.xorBy=Ks,q.xorWith=Vs,q.zip=Gs,q.zipObject=Go,q.zipObjectDeep=Ho,q.zipWith=Hs,q.entries=Fh,q.entriesIn=Nh,q.extend=Rh,q.extendWith=zh,Ua(q,q),q.add=cp,q.attempt=Yh,q.camelCase=Ph,q.capitalize=ia,q.ceil=ap,q.clamp=ra,q.clone=Ff,q.cloneDeep=Pf,q.cloneDeepWith=qf,q.cloneWith=Nf,q.conformsTo=Zf,q.deburr=oa,q.defaultTo=Ea,q.divide=lp,q.endsWith=fa,q.eq=Kf,q.escape=ca,q.escapeRegExp=aa,q.every=ff,q.find=Qs,q.findIndex=lo,q.findKey=Ec,q.findLast=Xs,q.findLastIndex=so,
q.findLastKey=Sc,q.floor=sp,q.forEach=hf,q.forEachRight=pf,q.forIn=Wc,q.forInRight=Lc,q.forOwn=Cc,q.forOwnRight=Uc,q.get=$c,q.gt=_h,q.gte=vh,q.has=Dc,q.hasIn=Mc,q.head=go,q.identity=Sa,q.includes=_f,q.indexOf=yo,q.inRange=ea,q.invoke=Bh,q.isArguments=gh,q.isArray=yh,q.isArrayBuffer=dh,q.isArrayLike=Vf,q.isArrayLikeObject=Gf,q.isBoolean=Hf,q.isBuffer=bh,q.isDate=wh,q.isElement=Jf,q.isEmpty=Yf,q.isEqual=Qf,q.isEqualWith=Xf,q.isError=nc,q.isFinite=tc,q.isFunction=rc,q.isInteger=ec,q.isLength=uc,q.isMap=mh,
q.isMatch=fc,q.isMatchWith=cc,q.isNaN=ac,q.isNative=lc,q.isNil=hc,q.isNull=sc,q.isNumber=pc,q.isObject=ic,q.isObjectLike=oc,q.isPlainObject=_c,q.isRegExp=xh,q.isSafeInteger=vc,q.isSet=jh,q.isString=gc,q.isSymbol=yc,q.isTypedArray=Ah,q.isUndefined=dc,q.isWeakMap=bc,q.isWeakSet=wc,q.join=wo,q.kebabCase=qh,q.last=mo,q.lastIndexOf=xo,q.lowerCase=Zh,q.lowerFirst=Kh,q.lt=kh,q.lte=Oh,q.max=Ha,q.maxBy=Ja,q.mean=Ya,q.meanBy=Qa,q.min=Xa,q.minBy=nl,q.stubArray=Fa,q.stubFalse=Na,q.stubObject=Pa,q.stubString=qa,
q.stubTrue=Za,q.multiply=hp,q.nth=jo,q.noConflict=Ba,q.noop=Ta,q.now=ih,q.pad=la,q.padEnd=sa,q.padStart=ha,q.parseInt=pa,q.random=ua,q.reduce=yf,q.reduceRight=df,q.repeat=_a,q.replace=va,q.result=Vc,q.round=pp,q.runInContext=p,q.sample=wf,q.size=jf,q.snakeCase=Vh,q.some=Af,q.sortedIndex=Eo,q.sortedIndexBy=So,q.sortedIndexOf=Wo,q.sortedLastIndex=Lo,q.sortedLastIndexBy=Co,q.sortedLastIndexOf=Uo,q.startCase=Gh,q.startsWith=ya,q.subtract=_p,q.sum=tl,q.sumBy=rl,q.template=da,q.times=Ka,q.toFinite=xc,q.toInteger=jc,
q.toLength=Ac,q.toLower=ba,q.toNumber=kc,q.toSafeInteger=Ic,q.toString=Rc,q.toUpper=wa,q.trim=ma,q.trimEnd=xa,q.trimStart=ja,q.truncate=Aa,q.unescape=ka,q.uniqueId=Ga,q.upperCase=Hh,q.upperFirst=Jh,q.each=hf,q.eachRight=pf,q.first=go,Ua(q,function(){var n={};return ee(q,function(t,r){yl.call(q.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),q.VERSION=Q,r(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){q[n].placeholder=q}),r(["drop","take"],function(n,t){Bt.prototype[n]=function(r){
r=r===Y?1:Kl(jc(r),0);var e=this.__filtered__&&!t?new Bt(this):this.clone();return e.__filtered__?e.__takeCount__=Vl(r,e.__takeCount__):e.__views__.push({size:Vl(r,Wn),type:n+(e.__dir__<0?"Right":"")}),e},Bt.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==kn||r==In;Bt.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:bi(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){
var r="take"+(t?"Right":"");Bt.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Bt.prototype[n]=function(){return this.__filtered__?new Bt(this):this[r](1)}}),Bt.prototype.compact=function(){return this.filter(Sa)},Bt.prototype.find=function(n){return this.filter(n).head()},Bt.prototype.findLast=function(n){return this.reverse().find(n)},Bt.prototype.invokeMap=ru(function(n,t){return"function"==typeof n?new Bt(this):this.map(function(r){
return ke(r,n,t)})}),Bt.prototype.reject=function(n){return this.filter(Lf(bi(n)))},Bt.prototype.slice=function(n,t){n=jc(n);var r=this;return r.__filtered__&&(n>0||t<0)?new Bt(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==Y&&(t=jc(t),r=t<0?r.dropRight(-t):r.take(t-n)),r)},Bt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Bt.prototype.toArray=function(){return this.take(Wn)},ee(Bt.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=q[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);
u&&(q.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Bt,c=o[0],l=f||yh(t),s=function(n){var t=u.apply(q,a([n],o));return e&&h?t[0]:t};l&&r&&"function"==typeof c&&1!=c.length&&(f=l=!1);var h=this.__chain__,p=!!this.__actions__.length,_=i&&!h,v=f&&!p;if(!i&&l){t=v?t:new Bt(this);var g=n.apply(t,o);return g.__actions__.push({func:Qo,args:[s],thisArg:Y}),new H(g,h)}return _&&v?n.apply(this,o):(g=this.thru(s),_?e?g.value()[0]:g.value():g)})}),r(["pop","push","shift","sort","splice","unshift"],function(n){
var t=hl[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);q.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(yh(u)?u:[],n)}return this[r](function(r){return t.apply(yh(r)?r:[],n)})}}),ee(Bt.prototype,function(n,t){var r=q[t];if(r){var e=r.name+"";yl.call(is,e)||(is[e]=[]),is[e].push({name:t,func:r})}}),is[Ju(Y,hn).name]=[{name:"wrapper",func:Y}],Bt.prototype.clone=Gt,Bt.prototype.reverse=Ht,Bt.prototype.value=Jt,q.prototype.at=Js,
q.prototype.chain=Xo,q.prototype.commit=nf,q.prototype.next=tf,q.prototype.plant=ef,q.prototype.reverse=uf,q.prototype.toJSON=q.prototype.valueOf=q.prototype.value=of,q.prototype.first=q.prototype.head,Ll&&(q.prototype[Ll]=rf),q},ge=ve();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(Xr._=ge,define(function(){return ge})):te?((te.exports=ge)._=ge,ne._=ge):Xr._=ge}).call(this);
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.decomp=e()}}(function(){return function e(f,o,n){function d(t,l){if(!o[t]){if(!f[t]){var u="function"==typeof require&&require;if(!l&&u)return u(t,!0);if(i)return i(t,!0);throw new Error("Cannot find module '"+t+"'")}var p=o[t]={exports:{}};f[t][0].call(p.exports,function(e){var o=f[t][1][e];return d(o?o:e)},p,p.exports,e,f,o,n)}return o[t].exports}for(var i="function"==typeof require&&require,t=0;t<n.length;t++)d(n[t]);return d}({1:[function(e,f,o){function n(e,f,o){o=o||0;var n,d,i,t,l,u,p,s=[0,0];return n=e[1][1]-e[0][1],d=e[0][0]-e[1][0],i=n*e[0][0]+d*e[0][1],t=f[1][1]-f[0][1],l=f[0][0]-f[1][0],u=t*f[0][0]+l*f[0][1],p=n*l-t*d,D(p,0,o)||(s[0]=(l*i-d*u)/p,s[1]=(n*u-t*i)/p),s}function d(e,f,o,n){var d=f[0]-e[0],i=f[1]-e[1],t=n[0]-o[0],l=n[1]-o[1];if(t*i-l*d===0)return!1;var u=(d*(o[1]-e[1])+i*(e[0]-o[0]))/(t*i-l*d),p=(t*(e[1]-o[1])+l*(o[0]-e[0]))/(l*d-t*i);return u>=0&&1>=u&&p>=0&&1>=p}function i(e,f,o){return(f[0]-e[0])*(o[1]-e[1])-(o[0]-e[0])*(f[1]-e[1])}function t(e,f,o){return i(e,f,o)>0}function l(e,f,o){return i(e,f,o)>=0}function u(e,f,o){return i(e,f,o)<0}function p(e,f,o){return i(e,f,o)<=0}function s(e,f,o,n){if(n){var d=F,t=G;d[0]=f[0]-e[0],d[1]=f[1]-e[1],t[0]=o[0]-f[0],t[1]=o[1]-f[1];var l=d[0]*t[0]+d[1]*t[1],u=Math.sqrt(d[0]*d[0]+d[1]*d[1]),p=Math.sqrt(t[0]*t[0]+t[1]*t[1]),s=Math.acos(l/(u*p));return n>s}return 0===i(e,f,o)}function c(e,f){var o=f[0]-e[0],n=f[1]-e[1];return o*o+n*n}function y(e,f){var o=e.length;return e[0>f?f%o+o:f%o]}function a(e){e.length=0}function m(e,f,o,n){for(var d=o;n>d;d++)e.push(f[d])}function r(e){for(var f=0,o=e,n=1;n<e.length;++n)(o[n][1]<o[f][1]||o[n][1]===o[f][1]&&o[n][0]>o[f][0])&&(f=n);return t(y(e,f-1),y(e,f),y(e,f+1))?!1:(w(e),!0)}function w(e){for(var f=[],o=e.length,n=0;n!==o;n++)f.push(e.pop());for(var n=0;n!==o;n++)e[n]=f[n]}function b(e,f){return u(y(e,f-1),y(e,f),y(e,f+1))}function g(e,f,o){var d,i,t=H,u=I;if(l(y(e,f+1),y(e,f),y(e,o))&&p(y(e,f-1),y(e,f),y(e,o)))return!1;i=c(y(e,f),y(e,o));for(var s=0;s!==e.length;++s)if((s+1)%e.length!==f&&s!==f&&l(y(e,f),y(e,o),y(e,s+1))&&p(y(e,f),y(e,o),y(e,s))&&(t[0]=y(e,f),t[1]=y(e,o),u[0]=y(e,s),u[1]=y(e,s+1),d=n(t,u),c(y(e,f),d)<i))return!1;return!0}function x(e,f,o){for(var n=0;n!==e.length;++n)if(n!==f&&n!==o&&(n+1)%e.length!==f&&(n+1)%e.length!==o&&d(y(e,f),y(e,o),y(e,n),y(e,n+1)))return!1;return!0}function j(e,f,o,n){var d=n||[];if(a(d),o>f)for(var i=f;o>=i;i++)d.push(e[i]);else{for(var i=0;o>=i;i++)d.push(e[i]);for(var i=f;i<e.length;i++)d.push(e[i])}return d}function v(e){for(var f=[],o=[],n=[],d=[],i=Number.MAX_VALUE,t=0;t<e.length;++t)if(b(e,t))for(var l=0;l<e.length;++l)if(g(e,t,l)){o=v(j(e,t,l,d)),n=v(j(e,l,t,d));for(var u=0;u<n.length;u++)o.push(n[u]);o.length<i&&(f=o,i=o.length,f.push([y(e,t),y(e,l)]))}return f}function h(e){var f=v(e);return f.length>0?k(e,f):[e]}function k(e,f){if(0===f.length)return[e];if(f instanceof Array&&f.length&&f[0]instanceof Array&&2===f[0].length&&f[0][0]instanceof Array){for(var o=[e],n=0;n<f.length;n++)for(var d=f[n],i=0;i<o.length;i++){var t=o[i],l=k(t,d);if(l){o.splice(i,1),o.push(l[0],l[1]);break}}return o}var d=f,n=e.indexOf(d[0]),i=e.indexOf(d[1]);return-1!==n&&-1!==i?[j(e,n,i),j(e,i,n)]:!1}function q(e){var f,o=e;for(f=0;f<o.length-1;f++)for(var n=0;f-1>n;n++)if(d(o[f],o[f+1],o[n],o[n+1]))return!1;for(f=1;f<o.length-2;f++)if(d(o[0],o[o.length-1],o[f],o[f+1]))return!1;return!0}function z(e,f,o,n,d){d=d||0;var i=f[1]-e[1],t=e[0]-f[0],l=i*e[0]+t*e[1],u=n[1]-o[1],p=o[0]-n[0],s=u*o[0]+p*o[1],c=i*p-u*t;return D(c,0,d)?[0,0]:[(p*l-t*s)/c,(i*s-u*l)/c]}function A(e,f,o,n,d,i,s){i=i||100,s=s||0,d=d||25,f="undefined"!=typeof f?f:[],o=o||[],n=n||[];var a=[0,0],r=[0,0],w=[0,0],g=0,j=0,v=0,h=0,k=0,q=0,B=0,C=[],D=[],E=e,F=e;if(F.length<3)return f;if(s++,s>i)return console.warn("quickDecomp: max level ("+i+") reached."),f;for(var G=0;G<e.length;++G)if(b(E,G)){o.push(E[G]),g=j=Number.MAX_VALUE;for(var H=0;H<e.length;++H)t(y(E,G-1),y(E,G),y(E,H))&&p(y(E,G-1),y(E,G),y(E,H-1))&&(w=z(y(E,G-1),y(E,G),y(E,H),y(E,H-1)),u(y(E,G+1),y(E,G),w)&&(v=c(E[G],w),j>v&&(j=v,r=w,q=H))),t(y(E,G+1),y(E,G),y(E,H+1))&&p(y(E,G+1),y(E,G),y(E,H))&&(w=z(y(E,G+1),y(E,G),y(E,H),y(E,H+1)),t(y(E,G-1),y(E,G),w)&&(v=c(E[G],w),g>v&&(g=v,a=w,k=H)));if(q===(k+1)%e.length)w[0]=(r[0]+a[0])/2,w[1]=(r[1]+a[1])/2,n.push(w),k>G?(m(C,E,G,k+1),C.push(w),D.push(w),0!==q&&m(D,E,q,E.length),m(D,E,0,G+1)):(0!==G&&m(C,E,G,E.length),m(C,E,0,k+1),C.push(w),D.push(w),m(D,E,q,G+1));else{if(q>k&&(k+=e.length),h=Number.MAX_VALUE,q>k)return f;for(var H=q;k>=H;++H)l(y(E,G-1),y(E,G),y(E,H))&&p(y(E,G+1),y(E,G),y(E,H))&&(v=c(y(E,G),y(E,H)),h>v&&x(E,G,H)&&(h=v,B=H%e.length));B>G?(m(C,E,G,B+1),0!==B&&m(D,E,B,F.length),m(D,E,0,G+1)):(0!==G&&m(C,E,G,F.length),m(C,E,0,B+1),m(D,E,B,G+1))}return C.length<D.length?(A(C,f,o,n,d,i,s),A(D,f,o,n,d,i,s)):(A(D,f,o,n,d,i,s),A(C,f,o,n,d,i,s)),f}return f.push(e),f}function B(e,f){for(var o=0,n=e.length-1;e.length>3&&n>=0;--n)s(y(e,n-1),y(e,n),y(e,n+1),f)&&(e.splice(n%e.length,1),o++);return o}function C(e,f){for(var o=e.length-1;o>=1;--o)for(var n=e[o],d=o-1;d>=0;--d)E(n,e[d],f)&&e.splice(o,1)}function D(e,f,o){return o=o||0,Math.abs(e-f)<=o}function E(e,f,o){return D(e[0],f[0],o)&&D(e[1],f[1],o)}f.exports={decomp:h,quickDecomp:A,isSimple:q,removeCollinearPoints:B,removeDuplicatePoints:C,makeCCW:r};var F=[],G=[],H=[],I=[]},{}]},{},[1])(1)});
/*!
 * matter-js 0.16.0 by @liabru 2021-01-17
 * http://brm.io/matter-js/
 * License MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("poly-decomp")):"function"==typeof define&&define.amd?define("Matter",["poly-decomp"],t):"object"==typeof exports?exports.Matter=t(require("poly-decomp")):e.Matter=t(e.decomp)}(this,(function(e){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t){var n={};e.exports=n,function(){n._nextId=0,n._seed=0,n._nowStartTime=+new Date,n.extend=function(e,t){var i,o;"boolean"==typeof t?(i=2,o=t):(i=1,o=!0);for(var r=i;r<arguments.length;r++){var s=arguments[r];if(s)for(var a in s)o&&s[a]&&s[a].constructor===Object?e[a]&&e[a].constructor!==Object?e[a]=s[a]:(e[a]=e[a]||{},n.extend(e[a],o,s[a])):e[a]=s[a]}return e},n.clone=function(e,t){return n.extend({},t,e)},n.keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)t.push(n);return t},n.values=function(e){var t=[];if(Object.keys){for(var n=Object.keys(e),i=0;i<n.length;i++)t.push(e[n[i]]);return t}for(var o in e)t.push(e[o]);return t},n.get=function(e,t,n,i){t=t.split(".").slice(n,i);for(var o=0;o<t.length;o+=1)e=e[t[o]];return e},n.set=function(e,t,i,o,r){var s=t.split(".").slice(o,r);return n.get(e,t,0,-1)[s[s.length-1]]=i,i},n.shuffle=function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(n.random()*(t+1)),o=e[t];e[t]=e[i],e[i]=o}return e},n.choose=function(e){return e[Math.floor(n.random()*e.length)]},n.isElement=function(e){return"undefined"!=typeof HTMLElement?e instanceof HTMLElement:!!(e&&e.nodeType&&e.nodeName)},n.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},n.isFunction=function(e){return"function"==typeof e},n.isPlainObject=function(e){return"object"==typeof e&&e.constructor===Object},n.isString=function(e){return"[object String]"===toString.call(e)},n.clamp=function(e,t,n){return e<t?t:e>n?n:e},n.sign=function(e){return e<0?-1:1},n.now=function(){if("undefined"!=typeof window&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return new Date-n._nowStartTime},n.random=function(t,n){return n=void 0!==n?n:1,(t=void 0!==t?t:0)+e()*(n-t)};var e=function(){return n._seed=(9301*n._seed+49297)%233280,n._seed/233280};n.colorToNumber=function(e){return 3==(e=e.replace("#","")).length&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)},n.logLevel=1,n.log=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.info=function(){console&&n.logLevel>0&&n.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.warn=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.nextId=function(){return n._nextId++},n.indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},n.map=function(e,t){if(e.map)return e.map(t);for(var n=[],i=0;i<e.length;i+=1)n.push(t(e[i]));return n},n.topologicalSort=function(e){var t=[],i=[],o=[];for(var r in e)i[r]||o[r]||n._topologicalSort(r,i,o,e,t);return t},n._topologicalSort=function(e,t,i,o,r){var s=o[e]||[];i[e]=!0;for(var a=0;a<s.length;a+=1){var l=s[a];i[l]||(t[l]||n._topologicalSort(l,t,i,o,r))}i[e]=!1,t[e]=!0,r.push(e)},n.chain=function(){for(var e=[],t=0;t<arguments.length;t+=1){var n=arguments[t];n._chained?e.push.apply(e,n._chained):e.push(n)}var i=function(){for(var t,n=new Array(arguments.length),i=0,o=arguments.length;i<o;i++)n[i]=arguments[i];for(i=0;i<e.length;i+=1){var r=e[i].apply(t,n);void 0!==r&&(t=r)}return t};return i._chained=e,i},n.chainPathBefore=function(e,t,i){return n.set(e,t,n.chain(i,n.get(e,t)))},n.chainPathAfter=function(e,t,i){return n.set(e,t,n.chain(n.get(e,t),i))}}()},function(e,t){var n={};e.exports=n,n.create=function(e){var t={min:{x:0,y:0},max:{x:0,y:0}};return e&&n.update(t,e),t},n.update=function(e,t,n){e.min.x=1/0,e.max.x=-1/0,e.min.y=1/0,e.max.y=-1/0;for(var i=0;i<t.length;i++){var o=t[i];o.x>e.max.x&&(e.max.x=o.x),o.x<e.min.x&&(e.min.x=o.x),o.y>e.max.y&&(e.max.y=o.y),o.y<e.min.y&&(e.min.y=o.y)}n&&(n.x>0?e.max.x+=n.x:e.min.x+=n.x,n.y>0?e.max.y+=n.y:e.min.y+=n.y)},n.contains=function(e,t){return t.x>=e.min.x&&t.x<=e.max.x&&t.y>=e.min.y&&t.y<=e.max.y},n.overlaps=function(e,t){return e.min.x<=t.max.x&&e.max.x>=t.min.x&&e.max.y>=t.min.y&&e.min.y<=t.max.y},n.translate=function(e,t){e.min.x+=t.x,e.max.x+=t.x,e.min.y+=t.y,e.max.y+=t.y},n.shift=function(e,t){var n=e.max.x-e.min.x,i=e.max.y-e.min.y;e.min.x=t.x,e.max.x=t.x+n,e.min.y=t.y,e.max.y=t.y+i}},function(e,t){var n={};e.exports=n,n.create=function(e,t){return{x:e||0,y:t||0}},n.clone=function(e){return{x:e.x,y:e.y}},n.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},n.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},n.rotate=function(e,t,n){var i=Math.cos(t),o=Math.sin(t);n||(n={});var r=e.x*i-e.y*o;return n.y=e.x*o+e.y*i,n.x=r,n},n.rotateAbout=function(e,t,n,i){var o=Math.cos(t),r=Math.sin(t);i||(i={});var s=n.x+((e.x-n.x)*o-(e.y-n.y)*r);return i.y=n.y+((e.x-n.x)*r+(e.y-n.y)*o),i.x=s,i},n.normalise=function(e){var t=n.magnitude(e);return 0===t?{x:0,y:0}:{x:e.x/t,y:e.y/t}},n.dot=function(e,t){return e.x*t.x+e.y*t.y},n.cross=function(e,t){return e.x*t.y-e.y*t.x},n.cross3=function(e,t,n){return(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x)},n.add=function(e,t,n){return n||(n={}),n.x=e.x+t.x,n.y=e.y+t.y,n},n.sub=function(e,t,n){return n||(n={}),n.x=e.x-t.x,n.y=e.y-t.y,n},n.mult=function(e,t){return{x:e.x*t,y:e.y*t}},n.div=function(e,t){return{x:e.x/t,y:e.y/t}},n.perp=function(e,t){return{x:(t=!0===t?-1:1)*-e.y,y:t*e.x}},n.neg=function(e){return{x:-e.x,y:-e.y}},n.angle=function(e,t){return Math.atan2(t.y-e.y,t.x-e.x)},n._temp=[n.create(),n.create(),n.create(),n.create(),n.create(),n.create()]},function(e,t,n){var i={};e.exports=i;var o=n(2),r=n(0);i.create=function(e,t){for(var n=[],i=0;i<e.length;i++){var o=e[i],r={x:o.x,y:o.y,index:i,body:t,isInternal:!1};n.push(r)}return n},i.fromPath=function(e,t){var n=[];return e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,(function(e,t,i){n.push({x:parseFloat(t),y:parseFloat(i)})})),i.create(n,t)},i.centre=function(e){for(var t,n,r,s=i.area(e,!0),a={x:0,y:0},l=0;l<e.length;l++)r=(l+1)%e.length,t=o.cross(e[l],e[r]),n=o.mult(o.add(e[l],e[r]),t),a=o.add(a,n);return o.div(a,6*s)},i.mean=function(e){for(var t={x:0,y:0},n=0;n<e.length;n++)t.x+=e[n].x,t.y+=e[n].y;return o.div(t,e.length)},i.area=function(e,t){for(var n=0,i=e.length-1,o=0;o<e.length;o++)n+=(e[i].x-e[o].x)*(e[i].y+e[o].y),i=o;return t?n/2:Math.abs(n)/2},i.inertia=function(e,t){for(var n,i,r=0,s=0,a=e,l=0;l<a.length;l++)i=(l+1)%a.length,r+=(n=Math.abs(o.cross(a[i],a[l])))*(o.dot(a[i],a[i])+o.dot(a[i],a[l])+o.dot(a[l],a[l])),s+=n;return t/6*(r/s)},i.translate=function(e,t,n){var i;if(n)for(i=0;i<e.length;i++)e[i].x+=t.x*n,e[i].y+=t.y*n;else for(i=0;i<e.length;i++)e[i].x+=t.x,e[i].y+=t.y;return e},i.rotate=function(e,t,n){if(0!==t){for(var i=Math.cos(t),o=Math.sin(t),r=0;r<e.length;r++){var s=e[r],a=s.x-n.x,l=s.y-n.y;s.x=n.x+(a*i-l*o),s.y=n.y+(a*o+l*i)}return e}},i.contains=function(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=e[(n+1)%e.length];if((t.x-i.x)*(o.y-i.y)+(t.y-i.y)*(i.x-o.x)>0)return!1}return!0},i.scale=function(e,t,n,r){if(1===t&&1===n)return e;var s,a;r=r||i.centre(e);for(var l=0;l<e.length;l++)s=e[l],a=o.sub(s,r),e[l].x=r.x+a.x*t,e[l].y=r.y+a.y*n;return e},i.chamfer=function(e,t,n,i,s){t="number"==typeof t?[t]:t||[8],n=void 0!==n?n:-1,i=i||2,s=s||14;for(var a=[],l=0;l<e.length;l++){var c=e[l-1>=0?l-1:e.length-1],d=e[l],u=e[(l+1)%e.length],p=t[l<t.length?l:t.length-1];if(0!==p){var f=o.normalise({x:d.y-c.y,y:c.x-d.x}),v=o.normalise({x:u.y-d.y,y:d.x-u.x}),m=Math.sqrt(2*Math.pow(p,2)),y=o.mult(r.clone(f),p),g=o.normalise(o.mult(o.add(f,v),.5)),x=o.sub(d,o.mult(g,m)),h=n;-1===n&&(h=1.75*Math.pow(p,.32)),(h=r.clamp(h,i,s))%2==1&&(h+=1);for(var b=Math.acos(o.dot(f,v))/h,w=0;w<h;w++)a.push(o.add(o.rotate(y,b*w),x))}else a.push(d)}return a},i.clockwiseSort=function(e){var t=i.mean(e);return e.sort((function(e,n){return o.angle(t,e)-o.angle(t,n)})),e},i.isConvex=function(e){var t,n,i,o,r=0,s=e.length;if(s<3)return null;for(t=0;t<s;t++)if(i=(t+2)%s,o=(e[n=(t+1)%s].x-e[t].x)*(e[i].y-e[n].y),(o-=(e[n].y-e[t].y)*(e[i].x-e[n].x))<0?r|=1:o>0&&(r|=2),3===r)return!1;return 0!==r||null},i.hull=function(e){var t,n,i=[],r=[];for((e=e.slice(0)).sort((function(e,t){var n=e.x-t.x;return 0!==n?n:e.y-t.y})),n=0;n<e.length;n+=1){for(t=e[n];r.length>=2&&o.cross3(r[r.length-2],r[r.length-1],t)<=0;)r.pop();r.push(t)}for(n=e.length-1;n>=0;n-=1){for(t=e[n];i.length>=2&&o.cross3(i[i.length-2],i[i.length-1],t)<=0;)i.pop();i.push(t)}return i.pop(),r.pop(),i.concat(r)}},function(e,t,n){var i={};e.exports=i;var o=n(0);i.on=function(e,t,n){for(var i,o=t.split(" "),r=0;r<o.length;r++)i=o[r],e.events=e.events||{},e.events[i]=e.events[i]||[],e.events[i].push(n);return n},i.off=function(e,t,n){if(t){"function"==typeof t&&(n=t,t=o.keys(e.events).join(" "));for(var i=t.split(" "),r=0;r<i.length;r++){var s=e.events[i[r]],a=[];if(n&&s)for(var l=0;l<s.length;l++)s[l]!==n&&a.push(s[l]);e.events[i[r]]=a}}else e.events={}},i.trigger=function(e,t,n){var i,r,s,a,l=e.events;if(l&&o.keys(l).length>0){n||(n={}),i=t.split(" ");for(var c=0;c<i.length;c++)if(s=l[r=i[c]]){(a=o.clone(n,!1)).name=r,a.source=e;for(var d=0;d<s.length;d++)s[d].apply(e,[a])}}}},function(e,t,n){var i={};e.exports=i;var o=n(4),r=n(0),s=n(1),a=n(6);i.create=function(e){return r.extend({id:r.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{}},e)},i.setModified=function(e,t,n,o){if(e.isModified=t,n&&e.parent&&i.setModified(e.parent,t,n,o),o)for(var r=0;r<e.composites.length;r++){var s=e.composites[r];i.setModified(s,t,n,o)}},i.add=function(e,t){var n=[].concat(t);o.trigger(e,"beforeAdd",{object:t});for(var s=0;s<n.length;s++){var a=n[s];switch(a.type){case"body":if(a.parent!==a){r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}i.addBody(e,a);break;case"constraint":i.addConstraint(e,a);break;case"composite":i.addComposite(e,a);break;case"mouseConstraint":i.addConstraint(e,a.constraint)}}return o.trigger(e,"afterAdd",{object:t}),e},i.remove=function(e,t,n){var r=[].concat(t);o.trigger(e,"beforeRemove",{object:t});for(var s=0;s<r.length;s++){var a=r[s];switch(a.type){case"body":i.removeBody(e,a,n);break;case"constraint":i.removeConstraint(e,a,n);break;case"composite":i.removeComposite(e,a,n);break;case"mouseConstraint":i.removeConstraint(e,a.constraint)}}return o.trigger(e,"afterRemove",{object:t}),e},i.addComposite=function(e,t){return e.composites.push(t),t.parent=e,i.setModified(e,!0,!0,!1),e},i.removeComposite=function(e,t,n){var o=r.indexOf(e.composites,t);if(-1!==o&&(i.removeCompositeAt(e,o),i.setModified(e,!0,!0,!1)),n)for(var s=0;s<e.composites.length;s++)i.removeComposite(e.composites[s],t,!0);return e},i.removeCompositeAt=function(e,t){return e.composites.splice(t,1),i.setModified(e,!0,!0,!1),e},i.addBody=function(e,t){return e.bodies.push(t),i.setModified(e,!0,!0,!1),e},i.removeBody=function(e,t,n){var o=r.indexOf(e.bodies,t);if(-1!==o&&(i.removeBodyAt(e,o),i.setModified(e,!0,!0,!1)),n)for(var s=0;s<e.composites.length;s++)i.removeBody(e.composites[s],t,!0);return e},i.removeBodyAt=function(e,t){return e.bodies.splice(t,1),i.setModified(e,!0,!0,!1),e},i.addConstraint=function(e,t){return e.constraints.push(t),i.setModified(e,!0,!0,!1),e},i.removeConstraint=function(e,t,n){var o=r.indexOf(e.constraints,t);if(-1!==o&&i.removeConstraintAt(e,o),n)for(var s=0;s<e.composites.length;s++)i.removeConstraint(e.composites[s],t,!0);return e},i.removeConstraintAt=function(e,t){return e.constraints.splice(t,1),i.setModified(e,!0,!0,!1),e},i.clear=function(e,t,n){if(n)for(var o=0;o<e.composites.length;o++)i.clear(e.composites[o],t,!0);return t?e.bodies=e.bodies.filter((function(e){return e.isStatic})):e.bodies.length=0,e.constraints.length=0,e.composites.length=0,i.setModified(e,!0,!0,!1),e},i.allBodies=function(e){for(var t=[].concat(e.bodies),n=0;n<e.composites.length;n++)t=t.concat(i.allBodies(e.composites[n]));return t},i.allConstraints=function(e){for(var t=[].concat(e.constraints),n=0;n<e.composites.length;n++)t=t.concat(i.allConstraints(e.composites[n]));return t},i.allComposites=function(e){for(var t=[].concat(e.composites),n=0;n<e.composites.length;n++)t=t.concat(i.allComposites(e.composites[n]));return t},i.get=function(e,t,n){var o,r;switch(n){case"body":o=i.allBodies(e);break;case"constraint":o=i.allConstraints(e);break;case"composite":o=i.allComposites(e).concat(e)}return o?0===(r=o.filter((function(e){return e.id.toString()===t.toString()}))).length?null:r[0]:null},i.move=function(e,t,n){return i.remove(e,t),i.add(n,t),e},i.rebase=function(e){for(var t=i.allBodies(e).concat(i.allConstraints(e)).concat(i.allComposites(e)),n=0;n<t.length;n++)t[n].id=r.nextId();return i.setModified(e,!0,!0,!1),e},i.translate=function(e,t,n){for(var o=n?i.allBodies(e):e.bodies,r=0;r<o.length;r++)a.translate(o[r],t);return i.setModified(e,!0,!0,!1),e},i.rotate=function(e,t,n,o){for(var r=Math.cos(t),s=Math.sin(t),l=o?i.allBodies(e):e.bodies,c=0;c<l.length;c++){var d=l[c],u=d.position.x-n.x,p=d.position.y-n.y;a.setPosition(d,{x:n.x+(u*r-p*s),y:n.y+(u*s+p*r)}),a.rotate(d,t)}return i.setModified(e,!0,!0,!1),e},i.scale=function(e,t,n,o,r){for(var s=r?i.allBodies(e):e.bodies,l=0;l<s.length;l++){var c=s[l],d=c.position.x-o.x,u=c.position.y-o.y;a.setPosition(c,{x:o.x+d*t,y:o.y+u*n}),a.scale(c,t,n)}return i.setModified(e,!0,!0,!1),e},i.bounds=function(e){for(var t=i.allBodies(e),n=[],o=0;o<t.length;o+=1){var r=t[o];n.push(r.bounds.min,r.bounds.max)}return s.create(n)}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2),s=n(7),a=(n(10),n(0)),l=n(1),c=n(15);!function(){i._inertiaScale=4,i._nextCollidingGroupId=1,i._nextNonCollidingGroupId=-1,i._nextCategory=1,i.create=function(t){var n={id:a.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,_original:null},i=a.extend(n,t);return e(i,t),i},i.nextGroup=function(e){return e?i._nextNonCollidingGroupId--:i._nextCollidingGroupId++},i.nextCategory=function(){return i._nextCategory=i._nextCategory<<1,i._nextCategory};var e=function(e,t){t=t||{},i.set(e,{bounds:e.bounds||l.create(e.vertices),positionPrev:e.positionPrev||r.clone(e.position),anglePrev:e.anglePrev||e.angle,vertices:e.vertices,parts:e.parts||[e],isStatic:e.isStatic,isSleeping:e.isSleeping,parent:e.parent||e}),o.rotate(e.vertices,e.angle,e.position),c.rotate(e.axes,e.angle),l.update(e.bounds,e.vertices,e.velocity),i.set(e,{axes:t.axes||e.axes,area:t.area||e.area,mass:t.mass||e.mass,inertia:t.inertia||e.inertia});var n=e.isStatic?"#14151f":a.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),s=e.isStatic?"#555":"#ccc",d=e.isStatic&&null===e.render.fillStyle?1:0;e.render.fillStyle=e.render.fillStyle||n,e.render.strokeStyle=e.render.strokeStyle||s,e.render.lineWidth=e.render.lineWidth||d,e.render.sprite.xOffset+=-(e.bounds.min.x-e.position.x)/(e.bounds.max.x-e.bounds.min.x),e.render.sprite.yOffset+=-(e.bounds.min.y-e.position.y)/(e.bounds.max.y-e.bounds.min.y)};i.set=function(e,t,n){var o;for(o in"string"==typeof t&&(o=t,(t={})[o]=n),t)if(Object.prototype.hasOwnProperty.call(t,o))switch(n=t[o],o){case"isStatic":i.setStatic(e,n);break;case"isSleeping":s.set(e,n);break;case"mass":i.setMass(e,n);break;case"density":i.setDensity(e,n);break;case"inertia":i.setInertia(e,n);break;case"vertices":i.setVertices(e,n);break;case"position":i.setPosition(e,n);break;case"angle":i.setAngle(e,n);break;case"velocity":i.setVelocity(e,n);break;case"angularVelocity":i.setAngularVelocity(e,n);break;case"parts":i.setParts(e,n);break;case"centre":i.setCentre(e,n);break;default:e[o]=n}},i.setStatic=function(e,t){for(var n=0;n<e.parts.length;n++){var i=e.parts[n];i.isStatic=t,t?(i._original={restitution:i.restitution,friction:i.friction,mass:i.mass,inertia:i.inertia,density:i.density,inverseMass:i.inverseMass,inverseInertia:i.inverseInertia},i.restitution=0,i.friction=1,i.mass=i.inertia=i.density=1/0,i.inverseMass=i.inverseInertia=0,i.positionPrev.x=i.position.x,i.positionPrev.y=i.position.y,i.anglePrev=i.angle,i.angularVelocity=0,i.speed=0,i.angularSpeed=0,i.motion=0):i._original&&(i.restitution=i._original.restitution,i.friction=i._original.friction,i.mass=i._original.mass,i.inertia=i._original.inertia,i.density=i._original.density,i.inverseMass=i._original.inverseMass,i.inverseInertia=i._original.inverseInertia,i._original=null)}},i.setMass=function(e,t){var n=e.inertia/(e.mass/6);e.inertia=n*(t/6),e.inverseInertia=1/e.inertia,e.mass=t,e.inverseMass=1/e.mass,e.density=e.mass/e.area},i.setDensity=function(e,t){i.setMass(e,t*e.area),e.density=t},i.setInertia=function(e,t){e.inertia=t,e.inverseInertia=1/e.inertia},i.setVertices=function(e,t){t[0].body===e?e.vertices=t:e.vertices=o.create(t,e),e.axes=c.fromVertices(e.vertices),e.area=o.area(e.vertices),i.setMass(e,e.density*e.area);var n=o.centre(e.vertices);o.translate(e.vertices,n,-1),i.setInertia(e,i._inertiaScale*o.inertia(e.vertices,e.mass)),o.translate(e.vertices,e.position),l.update(e.bounds,e.vertices,e.velocity)},i.setParts=function(e,t,n){var r;for(t=t.slice(0),e.parts.length=0,e.parts.push(e),e.parent=e,r=0;r<t.length;r++){var s=t[r];s!==e&&(s.parent=e,e.parts.push(s))}if(1!==e.parts.length){if(n=void 0===n||n){var a=[];for(r=0;r<t.length;r++)a=a.concat(t[r].vertices);o.clockwiseSort(a);var l=o.hull(a),c=o.centre(l);i.setVertices(e,l),o.translate(e.vertices,c)}var d=i._totalProperties(e);e.area=d.area,e.parent=e,e.position.x=d.centre.x,e.position.y=d.centre.y,e.positionPrev.x=d.centre.x,e.positionPrev.y=d.centre.y,i.setMass(e,d.mass),i.setInertia(e,d.inertia),i.setPosition(e,d.centre)}},i.setCentre=function(e,t,n){n?(e.positionPrev.x+=t.x,e.positionPrev.y+=t.y,e.position.x+=t.x,e.position.y+=t.y):(e.positionPrev.x=t.x-(e.position.x-e.positionPrev.x),e.positionPrev.y=t.y-(e.position.y-e.positionPrev.y),e.position.x=t.x,e.position.y=t.y)},i.setPosition=function(e,t){var n=r.sub(t,e.position);e.positionPrev.x+=n.x,e.positionPrev.y+=n.y;for(var i=0;i<e.parts.length;i++){var s=e.parts[i];s.position.x+=n.x,s.position.y+=n.y,o.translate(s.vertices,n),l.update(s.bounds,s.vertices,e.velocity)}},i.setAngle=function(e,t){var n=t-e.angle;e.anglePrev+=n;for(var i=0;i<e.parts.length;i++){var s=e.parts[i];s.angle+=n,o.rotate(s.vertices,n,e.position),c.rotate(s.axes,n),l.update(s.bounds,s.vertices,e.velocity),i>0&&r.rotateAbout(s.position,n,e.position,s.position)}},i.setVelocity=function(e,t){e.positionPrev.x=e.position.x-t.x,e.positionPrev.y=e.position.y-t.y,e.velocity.x=t.x,e.velocity.y=t.y,e.speed=r.magnitude(e.velocity)},i.setAngularVelocity=function(e,t){e.anglePrev=e.angle-t,e.angularVelocity=t,e.angularSpeed=Math.abs(e.angularVelocity)},i.translate=function(e,t){i.setPosition(e,r.add(e.position,t))},i.rotate=function(e,t,n){if(n){var o=Math.cos(t),r=Math.sin(t),s=e.position.x-n.x,a=e.position.y-n.y;i.setPosition(e,{x:n.x+(s*o-a*r),y:n.y+(s*r+a*o)}),i.setAngle(e,e.angle+t)}else i.setAngle(e,e.angle+t)},i.scale=function(e,t,n,r){var s=0,a=0;r=r||e.position;for(var d=0;d<e.parts.length;d++){var u=e.parts[d];o.scale(u.vertices,t,n,r),u.axes=c.fromVertices(u.vertices),u.area=o.area(u.vertices),i.setMass(u,e.density*u.area),o.translate(u.vertices,{x:-u.position.x,y:-u.position.y}),i.setInertia(u,i._inertiaScale*o.inertia(u.vertices,u.mass)),o.translate(u.vertices,{x:u.position.x,y:u.position.y}),d>0&&(s+=u.area,a+=u.inertia),u.position.x=r.x+(u.position.x-r.x)*t,u.position.y=r.y+(u.position.y-r.y)*n,l.update(u.bounds,u.vertices,e.velocity)}e.parts.length>1&&(e.area=s,e.isStatic||(i.setMass(e,e.density*s),i.setInertia(e,a))),e.circleRadius&&(t===n?e.circleRadius*=t:e.circleRadius=null)},i.update=function(e,t,n,i){var s=Math.pow(t*n*e.timeScale,2),a=1-e.frictionAir*n*e.timeScale,d=e.position.x-e.positionPrev.x,u=e.position.y-e.positionPrev.y;e.velocity.x=d*a*i+e.force.x/e.mass*s,e.velocity.y=u*a*i+e.force.y/e.mass*s,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,e.angularVelocity=(e.angle-e.anglePrev)*a*i+e.torque/e.inertia*s,e.anglePrev=e.angle,e.angle+=e.angularVelocity,e.speed=r.magnitude(e.velocity),e.angularSpeed=Math.abs(e.angularVelocity);for(var p=0;p<e.parts.length;p++){var f=e.parts[p];o.translate(f.vertices,e.velocity),p>0&&(f.position.x+=e.velocity.x,f.position.y+=e.velocity.y),0!==e.angularVelocity&&(o.rotate(f.vertices,e.angularVelocity,e.position),c.rotate(f.axes,e.angularVelocity),p>0&&r.rotateAbout(f.position,e.angularVelocity,e.position,f.position)),l.update(f.bounds,f.vertices,e.velocity)}},i.applyForce=function(e,t,n){e.force.x+=n.x,e.force.y+=n.y;var i=t.x-e.position.x,o=t.y-e.position.y;e.torque+=i*n.y-o*n.x},i._totalProperties=function(e){for(var t={mass:0,area:0,inertia:0,centre:{x:0,y:0}},n=1===e.parts.length?0:1;n<e.parts.length;n++){var i=e.parts[n],o=i.mass!==1/0?i.mass:1;t.mass+=o,t.area+=i.area,t.inertia+=i.inertia,t.centre=r.add(t.centre,r.mult(i.position,o))}return t.centre=r.div(t.centre,t.mass),t}}()},function(e,t,n){var i={};e.exports=i;var o=n(4);i._motionWakeThreshold=.18,i._motionSleepThreshold=.08,i._minBias=.9,i.update=function(e,t){for(var n=t*t*t,o=0;o<e.length;o++){var r=e[o],s=r.speed*r.speed+r.angularSpeed*r.angularSpeed;if(0===r.force.x&&0===r.force.y){var a=Math.min(r.motion,s),l=Math.max(r.motion,s);r.motion=i._minBias*a+(1-i._minBias)*l,r.sleepThreshold>0&&r.motion<i._motionSleepThreshold*n?(r.sleepCounter+=1,r.sleepCounter>=r.sleepThreshold&&i.set(r,!0)):r.sleepCounter>0&&(r.sleepCounter-=1)}else i.set(r,!1)}},i.afterCollisions=function(e,t){for(var n=t*t*t,o=0;o<e.length;o++){var r=e[o];if(r.isActive){var s=r.collision,a=s.bodyA.parent,l=s.bodyB.parent;if(!(a.isSleeping&&l.isSleeping||a.isStatic||l.isStatic)&&(a.isSleeping||l.isSleeping)){var c=a.isSleeping&&!a.isStatic?a:l,d=c===a?l:a;!c.isStatic&&d.motion>i._motionWakeThreshold*n&&i.set(c,!1)}}}},i.set=function(e,t){var n=e.isSleeping;t?(e.isSleeping=!0,e.sleepCounter=e.sleepThreshold,e.positionImpulse.x=0,e.positionImpulse.y=0,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.anglePrev=e.angle,e.speed=0,e.angularSpeed=0,e.motion=0,n||o.trigger(e,"sleepStart")):(e.isSleeping=!1,e.sleepCounter=0,n&&o.trigger(e,"sleepEnd"))}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2),s=n(7),a=n(1),l=n(15),c=n(0);i._warming=.4,i._torqueDampen=1,i._minLength=1e-6,i.create=function(e){var t=e;t.bodyA&&!t.pointA&&(t.pointA={x:0,y:0}),t.bodyB&&!t.pointB&&(t.pointB={x:0,y:0});var n=t.bodyA?r.add(t.bodyA.position,t.pointA):t.pointA,i=t.bodyB?r.add(t.bodyB.position,t.pointB):t.pointB,o=r.magnitude(r.sub(n,i));t.length=void 0!==t.length?t.length:o,t.id=t.id||c.nextId(),t.label=t.label||"Constraint",t.type="constraint",t.stiffness=t.stiffness||(t.length>0?1:.7),t.damping=t.damping||0,t.angularStiffness=t.angularStiffness||0,t.angleA=t.bodyA?t.bodyA.angle:t.angleA,t.angleB=t.bodyB?t.bodyB.angle:t.angleB,t.plugin={};var s={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return 0===t.length&&t.stiffness>.1?(s.type="pin",s.anchors=!1):t.stiffness<.9&&(s.type="spring"),t.render=c.extend(s,t.render),t},i.preSolveAll=function(e){for(var t=0;t<e.length;t+=1){var n=e[t],i=n.constraintImpulse;n.isStatic||0===i.x&&0===i.y&&0===i.angle||(n.position.x+=i.x,n.position.y+=i.y,n.angle+=i.angle)}},i.solveAll=function(e,t){for(var n=0;n<e.length;n+=1){var o=e[n],r=!o.bodyA||o.bodyA&&o.bodyA.isStatic,s=!o.bodyB||o.bodyB&&o.bodyB.isStatic;(r||s)&&i.solve(e[n],t)}for(n=0;n<e.length;n+=1)r=!(o=e[n]).bodyA||o.bodyA&&o.bodyA.isStatic,s=!o.bodyB||o.bodyB&&o.bodyB.isStatic,r||s||i.solve(e[n],t)},i.solve=function(e,t){var n=e.bodyA,o=e.bodyB,s=e.pointA,a=e.pointB;if(n||o){n&&!n.isStatic&&(r.rotate(s,n.angle-e.angleA,s),e.angleA=n.angle),o&&!o.isStatic&&(r.rotate(a,o.angle-e.angleB,a),e.angleB=o.angle);var l=s,c=a;if(n&&(l=r.add(n.position,s)),o&&(c=r.add(o.position,a)),l&&c){var d=r.sub(l,c),u=r.magnitude(d);u<i._minLength&&(u=i._minLength);var p,f,v,m,y,g=(u-e.length)/u,x=e.stiffness<1?e.stiffness*t:e.stiffness,h=r.mult(d,g*x),b=(n?n.inverseMass:0)+(o?o.inverseMass:0),w=b+((n?n.inverseInertia:0)+(o?o.inverseInertia:0));if(e.damping){var S=r.create();v=r.div(d,u),y=r.sub(o&&r.sub(o.position,o.positionPrev)||S,n&&r.sub(n.position,n.positionPrev)||S),m=r.dot(v,y)}n&&!n.isStatic&&(f=n.inverseMass/b,n.constraintImpulse.x-=h.x*f,n.constraintImpulse.y-=h.y*f,n.position.x-=h.x*f,n.position.y-=h.y*f,e.damping&&(n.positionPrev.x-=e.damping*v.x*m*f,n.positionPrev.y-=e.damping*v.y*m*f),p=r.cross(s,h)/w*i._torqueDampen*n.inverseInertia*(1-e.angularStiffness),n.constraintImpulse.angle-=p,n.angle-=p),o&&!o.isStatic&&(f=o.inverseMass/b,o.constraintImpulse.x+=h.x*f,o.constraintImpulse.y+=h.y*f,o.position.x+=h.x*f,o.position.y+=h.y*f,e.damping&&(o.positionPrev.x+=e.damping*v.x*m*f,o.positionPrev.y+=e.damping*v.y*m*f),p=r.cross(a,h)/w*i._torqueDampen*o.inverseInertia*(1-e.angularStiffness),o.constraintImpulse.angle+=p,o.angle+=p)}}},i.postSolveAll=function(e){for(var t=0;t<e.length;t++){var n=e[t],c=n.constraintImpulse;if(!(n.isStatic||0===c.x&&0===c.y&&0===c.angle)){s.set(n,!1);for(var d=0;d<n.parts.length;d++){var u=n.parts[d];o.translate(u.vertices,c),d>0&&(u.position.x+=c.x,u.position.y+=c.y),0!==c.angle&&(o.rotate(u.vertices,c.angle,n.position),l.rotate(u.axes,c.angle),d>0&&r.rotateAbout(u.position,c.angle,n.position,u.position)),a.update(u.bounds,u.vertices,n.velocity)}c.angle*=i._warming,c.x*=i._warming,c.y*=i._warming}}},i.pointAWorld=function(e){return{x:(e.bodyA?e.bodyA.position.x:0)+e.pointA.x,y:(e.bodyA?e.bodyA.position.y:0)+e.pointA.y}},i.pointBWorld=function(e){return{x:(e.bodyB?e.bodyB.position.x:0)+e.pointB.x,y:(e.bodyB?e.bodyB.position.y:0)+e.pointB.y}}},function(e,t,n){var i={};e.exports=i;var o=n(18);i.create=function(e,t){var n=e.bodyA,o=e.bodyB,r=e.parentA,s=e.parentB,a={id:i.id(n,o),bodyA:n,bodyB:o,contacts:{},activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:n.isSensor||o.isSensor,timeCreated:t,timeUpdated:t,inverseMass:r.inverseMass+s.inverseMass,friction:Math.min(r.friction,s.friction),frictionStatic:Math.max(r.frictionStatic,s.frictionStatic),restitution:Math.max(r.restitution,s.restitution),slop:Math.max(r.slop,s.slop)};return i.update(a,e,t),a},i.update=function(e,t,n){var r=e.contacts,s=t.supports,a=e.activeContacts,l=t.parentA,c=t.parentB;if(e.collision=t,e.inverseMass=l.inverseMass+c.inverseMass,e.friction=Math.min(l.friction,c.friction),e.frictionStatic=Math.max(l.frictionStatic,c.frictionStatic),e.restitution=Math.max(l.restitution,c.restitution),e.slop=Math.max(l.slop,c.slop),a.length=0,t.collided){for(var d=0;d<s.length;d++){var u=s[d],p=o.id(u),f=r[p];f?a.push(f):a.push(r[p]=o.create(u))}e.separation=t.depth,i.setActive(e,!0,n)}else!0===e.isActive&&i.setActive(e,!1,n)},i.setActive=function(e,t,n){t?(e.isActive=!0,e.timeUpdated=n):(e.isActive=!1,e.activeContacts.length=0)},i.id=function(e,t){return e.id<t.id?"A"+e.id+"B"+t.id:"A"+t.id+"B"+e.id}},function(e,t,n){var i={};e.exports=i;var o=n(0),r=n(5),s=n(1),a=n(4),l=n(11),c=n(2),d=n(14);!function(){var e,t;"undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout((function(){e(o.now())}),1e3/60)},t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),i.create=function(e){var t={controller:i,engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!e.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},r=o.extend(t,e);return r.canvas&&(r.canvas.width=r.options.width||r.canvas.width,r.canvas.height=r.options.height||r.canvas.height),r.mouse=e.mouse,r.engine=e.engine,r.canvas=r.canvas||n(r.options.width,r.options.height),r.context=r.canvas.getContext("2d"),r.textures={},r.bounds=r.bounds||{min:{x:0,y:0},max:{x:r.canvas.width,y:r.canvas.height}},1!==r.options.pixelRatio&&i.setPixelRatio(r,r.options.pixelRatio),o.isElement(r.element)?r.element.appendChild(r.canvas):r.canvas.parentNode||o.log("Render.create: options.element was undefined, render.canvas was created but not appended","warn"),r},i.run=function(t){!function n(o){t.frameRequestId=e(n),i.world(t)}()},i.stop=function(e){t(e.frameRequestId)},i.setPixelRatio=function(e,t){var n=e.options,i=e.canvas;"auto"===t&&(t=u(i)),n.pixelRatio=t,i.setAttribute("data-pixel-ratio",t),i.width=n.width*t,i.height=n.height*t,i.style.width=n.width+"px",i.style.height=n.height+"px"},i.lookAt=function(e,t,n,i){i=void 0===i||i,t=o.isArray(t)?t:[t],n=n||{x:0,y:0};for(var r={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},s=0;s<t.length;s+=1){var a=t[s],l=a.bounds?a.bounds.min:a.min||a.position||a,c=a.bounds?a.bounds.max:a.max||a.position||a;l&&c&&(l.x<r.min.x&&(r.min.x=l.x),c.x>r.max.x&&(r.max.x=c.x),l.y<r.min.y&&(r.min.y=l.y),c.y>r.max.y&&(r.max.y=c.y))}var u=r.max.x-r.min.x+2*n.x,p=r.max.y-r.min.y+2*n.y,f=e.canvas.height,v=e.canvas.width/f,m=u/p,y=1,g=1;m>v?g=m/v:y=v/m,e.options.hasBounds=!0,e.bounds.min.x=r.min.x,e.bounds.max.x=r.min.x+u*y,e.bounds.min.y=r.min.y,e.bounds.max.y=r.min.y+p*g,i&&(e.bounds.min.x+=.5*u-u*y*.5,e.bounds.max.x+=.5*u-u*y*.5,e.bounds.min.y+=.5*p-p*g*.5,e.bounds.max.y+=.5*p-p*g*.5),e.bounds.min.x-=n.x,e.bounds.max.x-=n.x,e.bounds.min.y-=n.y,e.bounds.max.y-=n.y,e.mouse&&(d.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.canvas.width,y:(e.bounds.max.y-e.bounds.min.y)/e.canvas.height}),d.setOffset(e.mouse,e.bounds.min))},i.startViewTransform=function(e){var t=e.bounds.max.x-e.bounds.min.x,n=e.bounds.max.y-e.bounds.min.y,i=t/e.options.width,o=n/e.options.height;e.context.setTransform(e.options.pixelRatio/i,0,0,e.options.pixelRatio/o,0,0),e.context.translate(-e.bounds.min.x,-e.bounds.min.y)},i.endViewTransform=function(e){e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0)},i.world=function(e){var t,n=e.engine,o=n.world,u=e.canvas,p=e.context,v=e.options,m=r.allBodies(o),y=r.allConstraints(o),g=v.wireframes?v.wireframeBackground:v.background,x=[],h=[],b={timestamp:n.timing.timestamp};if(a.trigger(e,"beforeRender",b),e.currentBackground!==g&&f(e,g),p.globalCompositeOperation="source-in",p.fillStyle="transparent",p.fillRect(0,0,u.width,u.height),p.globalCompositeOperation="source-over",v.hasBounds){for(t=0;t<m.length;t++){var w=m[t];s.overlaps(w.bounds,e.bounds)&&x.push(w)}for(t=0;t<y.length;t++){var S=y[t],A=S.bodyA,P=S.bodyB,C=S.pointA,M=S.pointB;A&&(C=c.add(A.position,S.pointA)),P&&(M=c.add(P.position,S.pointB)),C&&M&&((s.contains(e.bounds,C)||s.contains(e.bounds,M))&&h.push(S))}i.startViewTransform(e),e.mouse&&(d.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.options.width,y:(e.bounds.max.y-e.bounds.min.y)/e.options.height}),d.setOffset(e.mouse,e.bounds.min))}else h=y,x=m,1!==e.options.pixelRatio&&e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0);!v.wireframes||n.enableSleeping&&v.showSleeping?i.bodies(e,x,p):(v.showConvexHulls&&i.bodyConvexHulls(e,x,p),i.bodyWireframes(e,x,p)),v.showBounds&&i.bodyBounds(e,x,p),(v.showAxes||v.showAngleIndicator)&&i.bodyAxes(e,x,p),v.showPositions&&i.bodyPositions(e,x,p),v.showVelocity&&i.bodyVelocity(e,x,p),v.showIds&&i.bodyIds(e,x,p),v.showSeparations&&i.separations(e,n.pairs.list,p),v.showCollisions&&i.collisions(e,n.pairs.list,p),v.showVertexNumbers&&i.vertexNumbers(e,x,p),v.showMousePosition&&i.mousePosition(e,e.mouse,p),i.constraints(h,p),v.showBroadphase&&n.broadphase.controller===l&&i.grid(e,n.broadphase,p),v.showDebug&&i.debug(e,p),v.hasBounds&&i.endViewTransform(e),a.trigger(e,"afterRender",b)},i.debug=function(e,t){var n=t,i=e.engine,o=i.world,s=i.metrics,a=e.options,c=r.allBodies(o);if(i.timing.timestamp-(e.debugTimestamp||0)>=500){var d="";s.timing&&(d+="fps: "+Math.round(s.timing.fps)+"    "),s.extended&&(s.timing&&(d+="delta: "+s.timing.delta.toFixed(3)+"    ",d+="correction: "+s.timing.correction.toFixed(3)+"    "),d+="bodies: "+c.length+"    ",i.broadphase.controller===l&&(d+="buckets: "+s.buckets+"    "),d+="\n",d+="collisions: "+s.collisions+"    ",d+="pairs: "+i.pairs.list.length+"    ",d+="broad: "+s.broadEff+"    ",d+="mid: "+s.midEff+"    ",d+="narrow: "+s.narrowEff+"    "),e.debugString=d,e.debugTimestamp=i.timing.timestamp}if(e.debugString){n.font="12px Arial",a.wireframes?n.fillStyle="rgba(255,255,255,0.5)":n.fillStyle="rgba(0,0,0,0.5)";for(var u=e.debugString.split("\n"),p=0;p<u.length;p++)n.fillText(u[p],50,50+18*p)}},i.constraints=function(e,t){for(var n=t,i=0;i<e.length;i++){var r=e[i];if(r.render.visible&&r.pointA&&r.pointB){var s,a,l=r.bodyA,d=r.bodyB;if(s=l?c.add(l.position,r.pointA):r.pointA,"pin"===r.render.type)n.beginPath(),n.arc(s.x,s.y,3,0,2*Math.PI),n.closePath();else{if(a=d?c.add(d.position,r.pointB):r.pointB,n.beginPath(),n.moveTo(s.x,s.y),"spring"===r.render.type)for(var u,p=c.sub(a,s),f=c.perp(c.normalise(p)),v=Math.ceil(o.clamp(r.length/5,12,20)),m=1;m<v;m+=1)u=m%2==0?1:-1,n.lineTo(s.x+p.x*(m/v)+f.x*u*4,s.y+p.y*(m/v)+f.y*u*4);n.lineTo(a.x,a.y)}r.render.lineWidth&&(n.lineWidth=r.render.lineWidth,n.strokeStyle=r.render.strokeStyle,n.stroke()),r.render.anchors&&(n.fillStyle=r.render.strokeStyle,n.beginPath(),n.arc(s.x,s.y,3,0,2*Math.PI),n.arc(a.x,a.y,3,0,2*Math.PI),n.closePath(),n.fill())}}},i.bodyShadows=function(e,t,n){for(var i=n,o=(e.engine,0);o<t.length;o++){var r=t[o];if(r.render.visible){if(r.circleRadius)i.beginPath(),i.arc(r.position.x,r.position.y,r.circleRadius,0,2*Math.PI),i.closePath();else{i.beginPath(),i.moveTo(r.vertices[0].x,r.vertices[0].y);for(var s=1;s<r.vertices.length;s++)i.lineTo(r.vertices[s].x,r.vertices[s].y);i.closePath()}var a=r.position.x-.5*e.options.width,l=r.position.y-.2*e.options.height,c=Math.abs(a)+Math.abs(l);i.shadowColor="rgba(0,0,0,0.15)",i.shadowOffsetX=.05*a,i.shadowOffsetY=.05*l,i.shadowBlur=1+12*Math.min(1,c/1e3),i.fill(),i.shadowColor=null,i.shadowOffsetX=null,i.shadowOffsetY=null,i.shadowBlur=null}}},i.bodies=function(e,t,n){var i,o,r,s,a=n,l=(e.engine,e.options),c=l.showInternalEdges||!l.wireframes;for(r=0;r<t.length;r++)if((i=t[r]).render.visible)for(s=i.parts.length>1?1:0;s<i.parts.length;s++)if((o=i.parts[s]).render.visible){if(l.showSleeping&&i.isSleeping?a.globalAlpha=.5*o.render.opacity:1!==o.render.opacity&&(a.globalAlpha=o.render.opacity),o.render.sprite&&o.render.sprite.texture&&!l.wireframes){var d=o.render.sprite,u=p(e,d.texture);a.translate(o.position.x,o.position.y),a.rotate(o.angle),a.drawImage(u,u.width*-d.xOffset*d.xScale,u.height*-d.yOffset*d.yScale,u.width*d.xScale,u.height*d.yScale),a.rotate(-o.angle),a.translate(-o.position.x,-o.position.y)}else{if(o.circleRadius)a.beginPath(),a.arc(o.position.x,o.position.y,o.circleRadius,0,2*Math.PI);else{a.beginPath(),a.moveTo(o.vertices[0].x,o.vertices[0].y);for(var f=1;f<o.vertices.length;f++)!o.vertices[f-1].isInternal||c?a.lineTo(o.vertices[f].x,o.vertices[f].y):a.moveTo(o.vertices[f].x,o.vertices[f].y),o.vertices[f].isInternal&&!c&&a.moveTo(o.vertices[(f+1)%o.vertices.length].x,o.vertices[(f+1)%o.vertices.length].y);a.lineTo(o.vertices[0].x,o.vertices[0].y),a.closePath()}l.wireframes?(a.lineWidth=1,a.strokeStyle="#bbb",a.stroke()):(a.fillStyle=o.render.fillStyle,o.render.lineWidth&&(a.lineWidth=o.render.lineWidth,a.strokeStyle=o.render.strokeStyle,a.stroke()),a.fill())}a.globalAlpha=1}},i.bodyWireframes=function(e,t,n){var i,o,r,s,a,l=n,c=e.options.showInternalEdges;for(l.beginPath(),r=0;r<t.length;r++)if((i=t[r]).render.visible)for(a=i.parts.length>1?1:0;a<i.parts.length;a++){for(o=i.parts[a],l.moveTo(o.vertices[0].x,o.vertices[0].y),s=1;s<o.vertices.length;s++)!o.vertices[s-1].isInternal||c?l.lineTo(o.vertices[s].x,o.vertices[s].y):l.moveTo(o.vertices[s].x,o.vertices[s].y),o.vertices[s].isInternal&&!c&&l.moveTo(o.vertices[(s+1)%o.vertices.length].x,o.vertices[(s+1)%o.vertices.length].y);l.lineTo(o.vertices[0].x,o.vertices[0].y)}l.lineWidth=1,l.strokeStyle="#bbb",l.stroke()},i.bodyConvexHulls=function(e,t,n){var i,o,r,s=n;for(s.beginPath(),o=0;o<t.length;o++)if((i=t[o]).render.visible&&1!==i.parts.length){for(s.moveTo(i.vertices[0].x,i.vertices[0].y),r=1;r<i.vertices.length;r++)s.lineTo(i.vertices[r].x,i.vertices[r].y);s.lineTo(i.vertices[0].x,i.vertices[0].y)}s.lineWidth=1,s.strokeStyle="rgba(255,255,255,0.2)",s.stroke()},i.vertexNumbers=function(e,t,n){var i,o,r,s=n;for(i=0;i<t.length;i++){var a=t[i].parts;for(r=a.length>1?1:0;r<a.length;r++){var l=a[r];for(o=0;o<l.vertices.length;o++)s.fillStyle="rgba(255,255,255,0.2)",s.fillText(i+"_"+o,l.position.x+.8*(l.vertices[o].x-l.position.x),l.position.y+.8*(l.vertices[o].y-l.position.y))}}},i.mousePosition=function(e,t,n){var i=n;i.fillStyle="rgba(255,255,255,0.8)",i.fillText(t.position.x+"  "+t.position.y,t.position.x+5,t.position.y-5)},i.bodyBounds=function(e,t,n){var i=n,o=(e.engine,e.options);i.beginPath();for(var r=0;r<t.length;r++){if(t[r].render.visible)for(var s=t[r].parts,a=s.length>1?1:0;a<s.length;a++){var l=s[a];i.rect(l.bounds.min.x,l.bounds.min.y,l.bounds.max.x-l.bounds.min.x,l.bounds.max.y-l.bounds.min.y)}}o.wireframes?i.strokeStyle="rgba(255,255,255,0.08)":i.strokeStyle="rgba(0,0,0,0.1)",i.lineWidth=1,i.stroke()},i.bodyAxes=function(e,t,n){var i,o,r,s,a=n,l=(e.engine,e.options);for(a.beginPath(),o=0;o<t.length;o++){var c=t[o],d=c.parts;if(c.render.visible)if(l.showAxes)for(r=d.length>1?1:0;r<d.length;r++)for(i=d[r],s=0;s<i.axes.length;s++){var u=i.axes[s];a.moveTo(i.position.x,i.position.y),a.lineTo(i.position.x+20*u.x,i.position.y+20*u.y)}else for(r=d.length>1?1:0;r<d.length;r++)for(i=d[r],s=0;s<i.axes.length;s++)a.moveTo(i.position.x,i.position.y),a.lineTo((i.vertices[0].x+i.vertices[i.vertices.length-1].x)/2,(i.vertices[0].y+i.vertices[i.vertices.length-1].y)/2)}l.wireframes?(a.strokeStyle="indianred",a.lineWidth=1):(a.strokeStyle="rgba(255, 255, 255, 0.4)",a.globalCompositeOperation="overlay",a.lineWidth=2),a.stroke(),a.globalCompositeOperation="source-over"},i.bodyPositions=function(e,t,n){var i,o,r,s,a=n,l=(e.engine,e.options);for(a.beginPath(),r=0;r<t.length;r++)if((i=t[r]).render.visible)for(s=0;s<i.parts.length;s++)o=i.parts[s],a.arc(o.position.x,o.position.y,3,0,2*Math.PI,!1),a.closePath();for(l.wireframes?a.fillStyle="indianred":a.fillStyle="rgba(0,0,0,0.5)",a.fill(),a.beginPath(),r=0;r<t.length;r++)(i=t[r]).render.visible&&(a.arc(i.positionPrev.x,i.positionPrev.y,2,0,2*Math.PI,!1),a.closePath());a.fillStyle="rgba(255,165,0,0.8)",a.fill()},i.bodyVelocity=function(e,t,n){var i=n;i.beginPath();for(var o=0;o<t.length;o++){var r=t[o];r.render.visible&&(i.moveTo(r.position.x,r.position.y),i.lineTo(r.position.x+2*(r.position.x-r.positionPrev.x),r.position.y+2*(r.position.y-r.positionPrev.y)))}i.lineWidth=3,i.strokeStyle="cornflowerblue",i.stroke()},i.bodyIds=function(e,t,n){var i,o,r=n;for(i=0;i<t.length;i++)if(t[i].render.visible){var s=t[i].parts;for(o=s.length>1?1:0;o<s.length;o++){var a=s[o];r.font="12px Arial",r.fillStyle="rgba(255,255,255,0.5)",r.fillText(a.id,a.position.x+10,a.position.y-10)}}},i.collisions=function(e,t,n){var i,o,r,s,a=n,l=e.options;for(a.beginPath(),r=0;r<t.length;r++)if((i=t[r]).isActive)for(o=i.collision,s=0;s<i.activeContacts.length;s++){var c=i.activeContacts[s].vertex;a.rect(c.x-1.5,c.y-1.5,3.5,3.5)}for(l.wireframes?a.fillStyle="rgba(255,255,255,0.7)":a.fillStyle="orange",a.fill(),a.beginPath(),r=0;r<t.length;r++)if((i=t[r]).isActive&&(o=i.collision,i.activeContacts.length>0)){var d=i.activeContacts[0].vertex.x,u=i.activeContacts[0].vertex.y;2===i.activeContacts.length&&(d=(i.activeContacts[0].vertex.x+i.activeContacts[1].vertex.x)/2,u=(i.activeContacts[0].vertex.y+i.activeContacts[1].vertex.y)/2),o.bodyB===o.supports[0].body||!0===o.bodyA.isStatic?a.moveTo(d-8*o.normal.x,u-8*o.normal.y):a.moveTo(d+8*o.normal.x,u+8*o.normal.y),a.lineTo(d,u)}l.wireframes?a.strokeStyle="rgba(255,165,0,0.7)":a.strokeStyle="orange",a.lineWidth=1,a.stroke()},i.separations=function(e,t,n){var i,o,r,s,a,l=n,c=e.options;for(l.beginPath(),a=0;a<t.length;a++)if((i=t[a]).isActive){r=(o=i.collision).bodyA;var d=1;(s=o.bodyB).isStatic||r.isStatic||(d=.5),s.isStatic&&(d=0),l.moveTo(s.position.x,s.position.y),l.lineTo(s.position.x-o.penetration.x*d,s.position.y-o.penetration.y*d),d=1,s.isStatic||r.isStatic||(d=.5),r.isStatic&&(d=0),l.moveTo(r.position.x,r.position.y),l.lineTo(r.position.x+o.penetration.x*d,r.position.y+o.penetration.y*d)}c.wireframes?l.strokeStyle="rgba(255,165,0,0.5)":l.strokeStyle="orange",l.stroke()},i.grid=function(e,t,n){var i=n;e.options.wireframes?i.strokeStyle="rgba(255,180,0,0.1)":i.strokeStyle="rgba(255,180,0,0.5)",i.beginPath();for(var r=o.keys(t.buckets),s=0;s<r.length;s++){var a=r[s];if(!(t.buckets[a].length<2)){var l=a.split(/C|R/);i.rect(.5+parseInt(l[1],10)*t.bucketWidth,.5+parseInt(l[2],10)*t.bucketHeight,t.bucketWidth,t.bucketHeight)}}i.lineWidth=1,i.stroke()},i.inspector=function(e,t){e.engine;var n,i=e.selected,o=e.render,r=o.options;if(r.hasBounds){var s=o.bounds.max.x-o.bounds.min.x,a=o.bounds.max.y-o.bounds.min.y,l=s/o.options.width,c=a/o.options.height;t.scale(1/l,1/c),t.translate(-o.bounds.min.x,-o.bounds.min.y)}for(var d=0;d<i.length;d++){var u=i[d].data;switch(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.9)",t.setLineDash([1,2]),u.type){case"body":n=u.bounds,t.beginPath(),t.rect(Math.floor(n.min.x-3),Math.floor(n.min.y-3),Math.floor(n.max.x-n.min.x+6),Math.floor(n.max.y-n.min.y+6)),t.closePath(),t.stroke();break;case"constraint":var p=u.pointA;u.bodyA&&(p=u.pointB),t.beginPath(),t.arc(p.x,p.y,10,0,2*Math.PI),t.closePath(),t.stroke()}t.setLineDash([]),t.translate(-.5,-.5)}null!==e.selectStart&&(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.6)",t.fillStyle="rgba(255,165,0,0.1)",n=e.selectBounds,t.beginPath(),t.rect(Math.floor(n.min.x),Math.floor(n.min.y),Math.floor(n.max.x-n.min.x),Math.floor(n.max.y-n.min.y)),t.closePath(),t.stroke(),t.fill(),t.translate(-.5,-.5)),r.hasBounds&&t.setTransform(1,0,0,1,0,0)};var n=function(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,n.oncontextmenu=function(){return!1},n.onselectstart=function(){return!1},n},u=function(e){var t=e.getContext("2d");return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)},p=function(e,t){var n=e.textures[t];return n||((n=e.textures[t]=new Image).src=t,n)},f=function(e,t){var n=t;/(jpg|gif|png)$/.test(t)&&(n="url("+t+")"),e.canvas.style.background=n,e.canvas.style.backgroundSize="contain",e.currentBackground=t}}()},function(e,t,n){var i={};e.exports=i;var o=n(9),r=n(12),s=n(0);i.create=function(e){var t={controller:i,detector:r.collisions,buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return s.extend(t,e)},i.update=function(e,t,n,o){var r,s,a,l,c,d=n.world,u=e.buckets,p=!1,f=n.metrics;for(f.broadphaseTests=0,r=0;r<t.length;r++){var v=t[r];if((!v.isSleeping||o)&&!(v.bounds.max.x<d.bounds.min.x||v.bounds.min.x>d.bounds.max.x||v.bounds.max.y<d.bounds.min.y||v.bounds.min.y>d.bounds.max.y)){var m=i._getRegion(e,v);if(!v.region||m.id!==v.region.id||o){f.broadphaseTests+=1,v.region&&!o||(v.region=m);var y=i._regionUnion(m,v.region);for(s=y.startCol;s<=y.endCol;s++)for(a=y.startRow;a<=y.endRow;a++){l=u[c=i._getBucketId(s,a)];var g=s>=m.startCol&&s<=m.endCol&&a>=m.startRow&&a<=m.endRow,x=s>=v.region.startCol&&s<=v.region.endCol&&a>=v.region.startRow&&a<=v.region.endRow;!g&&x&&x&&l&&i._bucketRemoveBody(e,l,v),(v.region===m||g&&!x||o)&&(l||(l=i._createBucket(u,c)),i._bucketAddBody(e,l,v))}v.region=m,p=!0}}}p&&(e.pairsList=i._createActivePairsList(e))},i.clear=function(e){e.buckets={},e.pairs={},e.pairsList=[]},i._regionUnion=function(e,t){var n=Math.min(e.startCol,t.startCol),o=Math.max(e.endCol,t.endCol),r=Math.min(e.startRow,t.startRow),s=Math.max(e.endRow,t.endRow);return i._createRegion(n,o,r,s)},i._getRegion=function(e,t){var n=t.bounds,o=Math.floor(n.min.x/e.bucketWidth),r=Math.floor(n.max.x/e.bucketWidth),s=Math.floor(n.min.y/e.bucketHeight),a=Math.floor(n.max.y/e.bucketHeight);return i._createRegion(o,r,s,a)},i._createRegion=function(e,t,n,i){return{id:e+","+t+","+n+","+i,startCol:e,endCol:t,startRow:n,endRow:i}},i._getBucketId=function(e,t){return"C"+e+"R"+t},i._createBucket=function(e,t){return e[t]=[]},i._bucketAddBody=function(e,t,n){for(var i=0;i<t.length;i++){var r=t[i];if(!(n.id===r.id||n.isStatic&&r.isStatic)){var s=o.id(n,r),a=e.pairs[s];a?a[2]+=1:e.pairs[s]=[n,r,1]}}t.push(n)},i._bucketRemoveBody=function(e,t,n){t.splice(s.indexOf(t,n),1);for(var i=0;i<t.length;i++){var r=t[i],a=o.id(n,r),l=e.pairs[a];l&&(l[2]-=1)}},i._createActivePairsList=function(e){var t,n,i=[];t=s.keys(e.pairs);for(var o=0;o<t.length;o++)(n=e.pairs[t[o]])[2]>0?i.push(n):delete e.pairs[t[o]];return i}},function(e,t,n){var i={};e.exports=i;var o=n(13),r=n(9),s=n(1);i.collisions=function(e,t){for(var n=[],a=t.pairs.table,l=t.metrics,c=0;c<e.length;c++){var d=e[c][0],u=e[c][1];if((!d.isStatic&&!d.isSleeping||!u.isStatic&&!u.isSleeping)&&i.canCollide(d.collisionFilter,u.collisionFilter)&&(l.midphaseTests+=1,s.overlaps(d.bounds,u.bounds)))for(var p=d.parts.length>1?1:0;p<d.parts.length;p++)for(var f=d.parts[p],v=u.parts.length>1?1:0;v<u.parts.length;v++){var m=u.parts[v];if(f===d&&m===u||s.overlaps(f.bounds,m.bounds)){var y,g=a[r.id(f,m)];y=g&&g.isActive?g.collision:null;var x=o.collides(f,m,y);l.narrowphaseTests+=1,x.reused&&(l.narrowReuseCount+=1),x.collided&&(n.push(x),l.narrowDetections+=1)}}}return n},i.canCollide=function(e,t){return e.group===t.group&&0!==e.group?e.group>0:0!=(e.mask&t.category)&&0!=(t.mask&e.category)}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2);i.collides=function(e,t,n){var s,a,l,c,d=!1;if(n){var u=e.parent,p=t.parent,f=u.speed*u.speed+u.angularSpeed*u.angularSpeed+p.speed*p.speed+p.angularSpeed*p.angularSpeed;d=n&&n.collided&&f<.2,c=n}else c={collided:!1,bodyA:e,bodyB:t};if(n&&d){var v=c.axisBody,m=v===e?t:e,y=[v.axes[n.axisNumber]];if(l=i._overlapAxes(v.vertices,m.vertices,y),c.reused=!0,l.overlap<=0)return c.collided=!1,c}else{if((s=i._overlapAxes(e.vertices,t.vertices,e.axes)).overlap<=0)return c.collided=!1,c;if((a=i._overlapAxes(t.vertices,e.vertices,t.axes)).overlap<=0)return c.collided=!1,c;s.overlap<a.overlap?(l=s,c.axisBody=e):(l=a,c.axisBody=t),c.axisNumber=l.axisNumber}c.bodyA=e.id<t.id?e:t,c.bodyB=e.id<t.id?t:e,c.collided=!0,c.depth=l.overlap,c.parentA=c.bodyA.parent,c.parentB=c.bodyB.parent,e=c.bodyA,t=c.bodyB,r.dot(l.axis,r.sub(t.position,e.position))<0?c.normal={x:l.axis.x,y:l.axis.y}:c.normal={x:-l.axis.x,y:-l.axis.y},c.tangent=r.perp(c.normal),c.penetration=c.penetration||{},c.penetration.x=c.normal.x*c.depth,c.penetration.y=c.normal.y*c.depth;var g=i._findSupports(e,t,c.normal),x=[];if(o.contains(e.vertices,g[0])&&x.push(g[0]),o.contains(e.vertices,g[1])&&x.push(g[1]),x.length<2){var h=i._findSupports(t,e,r.neg(c.normal));o.contains(t.vertices,h[0])&&x.push(h[0]),x.length<2&&o.contains(t.vertices,h[1])&&x.push(h[1])}return x.length<1&&(x=[g[0]]),c.supports=x,c},i._overlapAxes=function(e,t,n){for(var o,s,a=r._temp[0],l=r._temp[1],c={overlap:Number.MAX_VALUE},d=0;d<n.length;d++){if(s=n[d],i._projectToAxis(a,e,s),i._projectToAxis(l,t,s),(o=Math.min(a.max-l.min,l.max-a.min))<=0)return c.overlap=o,c;o<c.overlap&&(c.overlap=o,c.axis=s,c.axisNumber=d)}return c},i._projectToAxis=function(e,t,n){for(var i=r.dot(t[0],n),o=i,s=1;s<t.length;s+=1){var a=r.dot(t[s],n);a>o?o=a:a<i&&(i=a)}e.min=i,e.max=o},i._findSupports=function(e,t,n){for(var i,o,s,a,l=Number.MAX_VALUE,c=r._temp[0],d=t.vertices,u=e.position,p=0;p<d.length;p++)o=d[p],c.x=o.x-u.x,c.y=o.y-u.y,(i=-r.dot(n,c))<l&&(l=i,s=o);return o=d[s.index-1>=0?s.index-1:d.length-1],c.x=o.x-u.x,c.y=o.y-u.y,l=-r.dot(n,c),a=o,o=d[(s.index+1)%d.length],c.x=o.x-u.x,c.y=o.y-u.y,(i=-r.dot(n,c))<l&&(a=o),[s,a]}},function(e,t,n){var i={};e.exports=i;var o=n(0);i.create=function(e){var t={};return e||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),t.element=e||document.body,t.absolute={x:0,y:0},t.position={x:0,y:0},t.mousedownPosition={x:0,y:0},t.mouseupPosition={x:0,y:0},t.offset={x:0,y:0},t.scale={x:1,y:1},t.wheelDelta=0,t.button=-1,t.pixelRatio=parseInt(t.element.getAttribute("data-pixel-ratio"),10)||1,t.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},t.mousemove=function(e){var n=i._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&(t.button=0,e.preventDefault()),t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.sourceEvents.mousemove=e},t.mousedown=function(e){var n=i._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches?(t.button=0,e.preventDefault()):t.button=e.button,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mousedownPosition.x=t.position.x,t.mousedownPosition.y=t.position.y,t.sourceEvents.mousedown=e},t.mouseup=function(e){var n=i._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&e.preventDefault(),t.button=-1,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mouseupPosition.x=t.position.x,t.mouseupPosition.y=t.position.y,t.sourceEvents.mouseup=e},t.mousewheel=function(e){t.wheelDelta=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail)),e.preventDefault()},i.setElement(t,t.element),t},i.setElement=function(e,t){e.element=t,t.addEventListener("mousemove",e.mousemove),t.addEventListener("mousedown",e.mousedown),t.addEventListener("mouseup",e.mouseup),t.addEventListener("mousewheel",e.mousewheel),t.addEventListener("DOMMouseScroll",e.mousewheel),t.addEventListener("touchmove",e.mousemove),t.addEventListener("touchstart",e.mousedown),t.addEventListener("touchend",e.mouseup)},i.clearSourceEvents=function(e){e.sourceEvents.mousemove=null,e.sourceEvents.mousedown=null,e.sourceEvents.mouseup=null,e.sourceEvents.mousewheel=null,e.wheelDelta=0},i.setOffset=function(e,t){e.offset.x=t.x,e.offset.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},i.setScale=function(e,t){e.scale.x=t.x,e.scale.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},i._getRelativeMousePosition=function(e,t,n){var i,o,r=t.getBoundingClientRect(),s=document.documentElement||document.body.parentNode||document.body,a=void 0!==window.pageXOffset?window.pageXOffset:s.scrollLeft,l=void 0!==window.pageYOffset?window.pageYOffset:s.scrollTop,c=e.changedTouches;return c?(i=c[0].pageX-r.left-a,o=c[0].pageY-r.top-l):(i=e.pageX-r.left-a,o=e.pageY-r.top-l),{x:i/(t.clientWidth/(t.width||t.clientWidth)*n),y:o/(t.clientHeight/(t.height||t.clientHeight)*n)}}},function(e,t,n){var i={};e.exports=i;var o=n(2),r=n(0);i.fromVertices=function(e){for(var t={},n=0;n<e.length;n++){var i=(n+1)%e.length,s=o.normalise({x:e[i].y-e[n].y,y:e[n].x-e[i].x}),a=0===s.y?1/0:s.x/s.y;t[a=a.toFixed(3).toString()]=s}return r.values(t)},i.rotate=function(e,t){if(0!==t)for(var n=Math.cos(t),i=Math.sin(t),o=0;o<e.length;o++){var r,s=e[o];r=s.x*n-s.y*i,s.y=s.x*i+s.y*n,s.x=r}}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(0),s=n(6),a=n(1),l=n(2);i.rectangle=function(e,t,n,i,a){a=a||{};var l={label:"Rectangle Body",position:{x:e,y:t},vertices:o.fromPath("L 0 0 L "+n+" 0 L "+n+" "+i+" L 0 "+i)};if(a.chamfer){var c=a.chamfer;l.vertices=o.chamfer(l.vertices,c.radius,c.quality,c.qualityMin,c.qualityMax),delete a.chamfer}return s.create(r.extend({},l,a))},i.trapezoid=function(e,t,n,i,a,l){l=l||{};var c,d=n*(a*=.5),u=d+(1-2*a)*n,p=u+d;c=a<.5?"L 0 0 L "+d+" "+-i+" L "+u+" "+-i+" L "+p+" 0":"L 0 0 L "+u+" "+-i+" L "+p+" 0";var f={label:"Trapezoid Body",position:{x:e,y:t},vertices:o.fromPath(c)};if(l.chamfer){var v=l.chamfer;f.vertices=o.chamfer(f.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete l.chamfer}return s.create(r.extend({},f,l))},i.circle=function(e,t,n,o,s){o=o||{};var a={label:"Circle Body",circleRadius:n};s=s||25;var l=Math.ceil(Math.max(10,Math.min(s,n)));return l%2==1&&(l+=1),i.polygon(e,t,l,n,r.extend({},a,o))},i.polygon=function(e,t,n,a,l){if(l=l||{},n<3)return i.circle(e,t,a,l);for(var c=2*Math.PI/n,d="",u=.5*c,p=0;p<n;p+=1){var f=u+p*c,v=Math.cos(f)*a,m=Math.sin(f)*a;d+="L "+v.toFixed(3)+" "+m.toFixed(3)+" "}var y={label:"Polygon Body",position:{x:e,y:t},vertices:o.fromPath(d)};if(l.chamfer){var g=l.chamfer;y.vertices=o.chamfer(y.vertices,g.radius,g.quality,g.qualityMin,g.qualityMax),delete l.chamfer}return s.create(r.extend({},y,l))},i.fromVertices=function(e,t,i,c,d,u,p,f){var v,m,y,g,x,h,b,w,S,A=n(27);for(c=c||{},m=[],d=void 0!==d&&d,u=void 0!==u?u:.01,p=void 0!==p?p:10,f=void 0!==f?f:.01,A||r.warn("Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull."),r.isArray(i[0])||(i=[i]),w=0;w<i.length;w+=1)if(g=i[w],(y=o.isConvex(g))||!A)g=y?o.clockwiseSort(g):o.hull(g),m.push({position:{x:e,y:t},vertices:g});else{var P=g.map((function(e){return[e.x,e.y]}));A.makeCCW(P),!1!==u&&A.removeCollinearPoints(P,u),!1!==f&&A.removeDuplicatePoints&&A.removeDuplicatePoints(P,f);var C=A.quickDecomp(P);for(x=0;x<C.length;x++){var M=C[x].map((function(e){return{x:e[0],y:e[1]}}));p>0&&o.area(M)<p||m.push({position:o.centre(M),vertices:M})}}for(x=0;x<m.length;x++)m[x]=s.create(r.extend(m[x],c));if(d)for(x=0;x<m.length;x++){var k=m[x];for(h=x+1;h<m.length;h++){var B=m[h];if(a.overlaps(k.bounds,B.bounds)){var I=k.vertices,_=B.vertices;for(b=0;b<k.vertices.length;b++)for(S=0;S<B.vertices.length;S++){var T=l.magnitudeSquared(l.sub(I[(b+1)%I.length],_[S])),R=l.magnitudeSquared(l.sub(I[b],_[(S+1)%_.length]));T<5&&R<5&&(I[b].isInternal=!0,_[S].isInternal=!0)}}}}return m.length>1?(v=s.create(r.extend({parts:m.slice(0)},c)),s.setPosition(v,{x:e,y:t}),v):m[0]}},function(e,t,n){var i={};e.exports=i;var o=n(0);i._registry={},i.register=function(e){if(i.isPlugin(e)||o.warn("Plugin.register:",i.toString(e),"does not implement all required fields."),e.name in i._registry){var t=i._registry[e.name],n=i.versionParse(e.version).number,r=i.versionParse(t.version).number;n>r?(o.warn("Plugin.register:",i.toString(t),"was upgraded to",i.toString(e)),i._registry[e.name]=e):n<r?o.warn("Plugin.register:",i.toString(t),"can not be downgraded to",i.toString(e)):e!==t&&o.warn("Plugin.register:",i.toString(e),"is already registered to different plugin object")}else i._registry[e.name]=e;return e},i.resolve=function(e){return i._registry[i.dependencyParse(e).name]},i.toString=function(e){return"string"==typeof e?e:(e.name||"anonymous")+"@"+(e.version||e.range||"0.0.0")},i.isPlugin=function(e){return e&&e.name&&e.version&&e.install},i.isUsed=function(e,t){return e.used.indexOf(t)>-1},i.isFor=function(e,t){var n=e.for&&i.dependencyParse(e.for);return!e.for||t.name===n.name&&i.versionSatisfies(t.version,n.range)},i.use=function(e,t){if(e.uses=(e.uses||[]).concat(t||[]),0!==e.uses.length){for(var n=i.dependencies(e),r=o.topologicalSort(n),s=[],a=0;a<r.length;a+=1)if(r[a]!==e.name){var l=i.resolve(r[a]);l?i.isUsed(e,l.name)||(i.isFor(l,e)||(o.warn("Plugin.use:",i.toString(l),"is for",l.for,"but installed on",i.toString(e)+"."),l._warned=!0),l.install?l.install(e):(o.warn("Plugin.use:",i.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(s.push("🔶 "+i.toString(l)),delete l._warned):s.push("✅ "+i.toString(l)),e.used.push(l.name)):s.push("❌ "+r[a])}s.length>0&&o.info(s.join("  "))}else o.warn("Plugin.use:",i.toString(e),"does not specify any dependencies to install.")},i.dependencies=function(e,t){var n=i.dependencyParse(e),r=n.name;if(!(r in(t=t||{}))){e=i.resolve(e)||e,t[r]=o.map(e.uses||[],(function(t){i.isPlugin(t)&&i.register(t);var r=i.dependencyParse(t),s=i.resolve(t);return s&&!i.versionSatisfies(s.version,r.range)?(o.warn("Plugin.dependencies:",i.toString(s),"does not satisfy",i.toString(r),"used by",i.toString(n)+"."),s._warned=!0,e._warned=!0):s||(o.warn("Plugin.dependencies:",i.toString(t),"used by",i.toString(n),"could not be resolved."),e._warned=!0),r.name}));for(var s=0;s<t[r].length;s+=1)i.dependencies(t[r][s],t);return t}},i.dependencyParse=function(e){return o.isString(e)?(/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/.test(e)||o.warn("Plugin.dependencyParse:",e,"is not a valid dependency string."),{name:e.split("@")[0],range:e.split("@")[1]||"*"}):{name:e.name,range:e.range||e.version}},i.versionParse=function(e){var t=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-]+)?$/;t.test(e)||o.warn("Plugin.versionParse:",e,"is not a valid version or range.");var n=t.exec(e),i=Number(n[4]),r=Number(n[5]),s=Number(n[6]);return{isRange:Boolean(n[1]||n[2]),version:n[3],range:e,operator:n[1]||n[2]||"",major:i,minor:r,patch:s,parts:[i,r,s],prerelease:n[7],number:1e8*i+1e4*r+s}},i.versionSatisfies=function(e,t){t=t||"*";var n=i.versionParse(t),o=i.versionParse(e);if(n.isRange){if("*"===n.operator||"*"===e)return!0;if(">"===n.operator)return o.number>n.number;if(">="===n.operator)return o.number>=n.number;if("~"===n.operator)return o.major===n.major&&o.minor===n.minor&&o.patch>=n.patch;if("^"===n.operator)return n.major>0?o.major===n.major&&o.number>=n.number:n.minor>0?o.minor===n.minor&&o.patch>=n.patch:o.patch===n.patch}return e===t||"*"===e}},function(e,t){var n={};e.exports=n,n.create=function(e){return{id:n.id(e),vertex:e,normalImpulse:0,tangentImpulse:0}},n.id=function(e){return e.body.id+"_"+e.index}},function(e,t,n){var i={};e.exports=i;var o=n(5),r=(n(8),n(0));i.create=function(e){var t=o.create(),n={label:"World",gravity:{x:0,y:1,scale:.001},bounds:{min:{x:-1/0,y:-1/0},max:{x:1/0,y:1/0}}};return r.extend(t,n,e)}},function(e,t,n){var i={};e.exports=i;var o=n(9),r=n(0);i._pairMaxIdleLife=1e3,i.create=function(e){return r.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},e)},i.update=function(e,t,n){var i,r,s,a,l=e.list,c=e.table,d=e.collisionStart,u=e.collisionEnd,p=e.collisionActive;for(d.length=0,u.length=0,p.length=0,a=0;a<l.length;a++)l[a].confirmedActive=!1;for(a=0;a<t.length;a++)(i=t[a]).collided&&((s=c[r=o.id(i.bodyA,i.bodyB)])?(s.isActive?p.push(s):d.push(s),o.update(s,i,n),s.confirmedActive=!0):(s=o.create(i,n),c[r]=s,d.push(s),l.push(s)));for(a=0;a<l.length;a++)(s=l[a]).isActive&&!s.confirmedActive&&(o.setActive(s,!1,n),u.push(s))},i.removeOld=function(e,t){var n,o,r,s,a=e.list,l=e.table,c=[];for(s=0;s<a.length;s++)(o=(n=a[s]).collision).bodyA.isSleeping||o.bodyB.isSleeping?n.timeUpdated=t:t-n.timeUpdated>i._pairMaxIdleLife&&c.push(s);for(s=0;s<c.length;s++)delete l[(n=a[r=c[s]-s]).id],a.splice(r,1)},i.clear=function(e){return e.table={},e.list.length=0,e.collisionStart.length=0,e.collisionActive.length=0,e.collisionEnd.length=0,e}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2),s=n(0),a=n(1);i._restingThresh=4,i._restingThreshTangent=6,i._positionDampen=.9,i._positionWarming=.8,i._frictionNormalMultiplier=5,i.preSolvePosition=function(e){var t,n,i;for(t=0;t<e.length;t++)(n=e[t]).isActive&&(i=n.activeContacts.length,n.collision.parentA.totalContacts+=i,n.collision.parentB.totalContacts+=i)},i.solvePosition=function(e,t){var n,o,s,a,l,c,d,u,p,f=r._temp[0],v=r._temp[1],m=r._temp[2],y=r._temp[3];for(n=0;n<e.length;n++)(o=e[n]).isActive&&!o.isSensor&&(a=(s=o.collision).parentA,l=s.parentB,c=s.normal,d=r.sub(r.add(l.positionImpulse,l.position,f),r.add(a.positionImpulse,r.sub(l.position,s.penetration,v),m),y),o.separation=r.dot(c,d));for(n=0;n<e.length;n++)(o=e[n]).isActive&&!o.isSensor&&(a=(s=o.collision).parentA,l=s.parentB,c=s.normal,p=(o.separation-o.slop)*t,(a.isStatic||l.isStatic)&&(p*=2),a.isStatic||a.isSleeping||(u=i._positionDampen/a.totalContacts,a.positionImpulse.x+=c.x*p*u,a.positionImpulse.y+=c.y*p*u),l.isStatic||l.isSleeping||(u=i._positionDampen/l.totalContacts,l.positionImpulse.x-=c.x*p*u,l.positionImpulse.y-=c.y*p*u))},i.postSolvePosition=function(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.totalContacts=0,0!==n.positionImpulse.x||0!==n.positionImpulse.y){for(var s=0;s<n.parts.length;s++){var l=n.parts[s];o.translate(l.vertices,n.positionImpulse),a.update(l.bounds,l.vertices,n.velocity),l.position.x+=n.positionImpulse.x,l.position.y+=n.positionImpulse.y}n.positionPrev.x+=n.positionImpulse.x,n.positionPrev.y+=n.positionImpulse.y,r.dot(n.positionImpulse,n.velocity)<0?(n.positionImpulse.x=0,n.positionImpulse.y=0):(n.positionImpulse.x*=i._positionWarming,n.positionImpulse.y*=i._positionWarming)}}},i.preSolveVelocity=function(e){var t,n,i,o,s,a,l,c,d,u,p,f,v,m,y=r._temp[0],g=r._temp[1];for(t=0;t<e.length;t++)if((i=e[t]).isActive&&!i.isSensor)for(o=i.activeContacts,a=(s=i.collision).parentA,l=s.parentB,c=s.normal,d=s.tangent,n=0;n<o.length;n++)p=(u=o[n]).vertex,f=u.normalImpulse,v=u.tangentImpulse,0===f&&0===v||(y.x=c.x*f+d.x*v,y.y=c.y*f+d.y*v,a.isStatic||a.isSleeping||(m=r.sub(p,a.position,g),a.positionPrev.x+=y.x*a.inverseMass,a.positionPrev.y+=y.y*a.inverseMass,a.anglePrev+=r.cross(m,y)*a.inverseInertia),l.isStatic||l.isSleeping||(m=r.sub(p,l.position,g),l.positionPrev.x-=y.x*l.inverseMass,l.positionPrev.y-=y.y*l.inverseMass,l.anglePrev-=r.cross(m,y)*l.inverseInertia))},i.solveVelocity=function(e,t){for(var n=t*t,o=r._temp[0],a=r._temp[1],l=r._temp[2],c=r._temp[3],d=r._temp[4],u=r._temp[5],p=0;p<e.length;p++){var f=e[p];if(f.isActive&&!f.isSensor){var v=f.collision,m=v.parentA,y=v.parentB,g=v.normal,x=v.tangent,h=f.activeContacts,b=1/h.length;m.velocity.x=m.position.x-m.positionPrev.x,m.velocity.y=m.position.y-m.positionPrev.y,y.velocity.x=y.position.x-y.positionPrev.x,y.velocity.y=y.position.y-y.positionPrev.y,m.angularVelocity=m.angle-m.anglePrev,y.angularVelocity=y.angle-y.anglePrev;for(var w=0;w<h.length;w++){var S=h[w],A=S.vertex,P=r.sub(A,m.position,a),C=r.sub(A,y.position,l),M=r.add(m.velocity,r.mult(r.perp(P),m.angularVelocity),c),k=r.add(y.velocity,r.mult(r.perp(C),y.angularVelocity),d),B=r.sub(M,k,u),I=r.dot(g,B),_=r.dot(x,B),T=Math.abs(_),R=s.sign(_),L=(1+f.restitution)*I,O=s.clamp(f.separation+I,0,1)*i._frictionNormalMultiplier,V=_,E=1/0;T>f.friction*f.frictionStatic*O*n&&(E=T,V=s.clamp(f.friction*R*n,-E,E));var F=r.cross(P,g),W=r.cross(C,g),q=b/(m.inverseMass+y.inverseMass+m.inverseInertia*F*F+y.inverseInertia*W*W);if(L*=q,V*=q,I<0&&I*I>i._restingThresh*n)S.normalImpulse=0;else{var j=S.normalImpulse;S.normalImpulse=Math.min(S.normalImpulse+L,0),L=S.normalImpulse-j}if(_*_>i._restingThreshTangent*n)S.tangentImpulse=0;else{var D=S.tangentImpulse;S.tangentImpulse=s.clamp(S.tangentImpulse+V,-E,E),V=S.tangentImpulse-D}o.x=g.x*L+x.x*V,o.y=g.y*L+x.y*V,m.isStatic||m.isSleeping||(m.positionPrev.x+=o.x*m.inverseMass,m.positionPrev.y+=o.y*m.inverseMass,m.anglePrev+=r.cross(P,o)*m.inverseInertia),y.isStatic||y.isSleeping||(y.positionPrev.x-=o.x*y.inverseMass,y.positionPrev.y-=o.y*y.inverseMass,y.anglePrev-=r.cross(C,o)*y.inverseInertia)}}}}},function(e,t,n){var i={};e.exports=i;var o=n(19),r=n(7),s=n(21),a=n(10),l=n(20),c=n(23),d=n(11),u=n(4),p=n(5),f=n(8),v=n(0),m=n(6);i.create=function(e,t){t=(t=v.isElement(e)?t:e)||{},((e=v.isElement(e)?e:null)||t.render)&&v.warn("Engine.create: engine.render is deprecated (see docs)");var n={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},timing:{timestamp:0,timeScale:1},broadphase:{controller:d}},i=v.extend(n,t);if(e||i.render){var r={element:e,controller:a};i.render=v.extend(r,i.render)}return i.render&&i.render.controller&&(i.render=i.render.controller.create(i.render)),i.render&&(i.render.engine=i),i.world=t.world||o.create(i.world),i.pairs=l.create(),i.broadphase=i.broadphase.controller.create(i.broadphase),i.metrics=i.metrics||{extended:!1},i.metrics=c.create(i.metrics),i},i.update=function(e,t,n){t=t||1e3/60,n=n||1;var o,a=e.world,d=e.timing,v=e.broadphase,m=[];d.timestamp+=t*d.timeScale;var y={timestamp:d.timestamp};u.trigger(e,"beforeUpdate",y);var g=p.allBodies(a),x=p.allConstraints(a);for(c.reset(e.metrics),e.enableSleeping&&r.update(g,d.timeScale),i._bodiesApplyGravity(g,a.gravity),i._bodiesUpdate(g,t,d.timeScale,n,a.bounds),f.preSolveAll(g),o=0;o<e.constraintIterations;o++)f.solveAll(x,d.timeScale);f.postSolveAll(g),v.controller?(a.isModified&&v.controller.clear(v),v.controller.update(v,g,e,a.isModified),m=v.pairsList):m=g,a.isModified&&p.setModified(a,!1,!1,!0);var h=v.detector(m,e),b=e.pairs,w=d.timestamp;for(l.update(b,h,w),l.removeOld(b,w),e.enableSleeping&&r.afterCollisions(b.list,d.timeScale),b.collisionStart.length>0&&u.trigger(e,"collisionStart",{pairs:b.collisionStart}),s.preSolvePosition(b.list),o=0;o<e.positionIterations;o++)s.solvePosition(b.list,d.timeScale);for(s.postSolvePosition(g),f.preSolveAll(g),o=0;o<e.constraintIterations;o++)f.solveAll(x,d.timeScale);for(f.postSolveAll(g),s.preSolveVelocity(b.list),o=0;o<e.velocityIterations;o++)s.solveVelocity(b.list,d.timeScale);return b.collisionActive.length>0&&u.trigger(e,"collisionActive",{pairs:b.collisionActive}),b.collisionEnd.length>0&&u.trigger(e,"collisionEnd",{pairs:b.collisionEnd}),c.update(e.metrics,e),i._bodiesClearForces(g),u.trigger(e,"afterUpdate",y),e},i.merge=function(e,t){if(v.extend(e,t),t.world){e.world=t.world,i.clear(e);for(var n=p.allBodies(e.world),o=0;o<n.length;o++){var s=n[o];r.set(s,!1),s.id=v.nextId()}}},i.clear=function(e){var t=e.world;l.clear(e.pairs);var n=e.broadphase;if(n.controller){var i=p.allBodies(t);n.controller.clear(n),n.controller.update(n,i,e,!0)}},i._bodiesClearForces=function(e){for(var t=0;t<e.length;t++){var n=e[t];n.force.x=0,n.force.y=0,n.torque=0}},i._bodiesApplyGravity=function(e,t){var n=void 0!==t.scale?t.scale:.001;if((0!==t.x||0!==t.y)&&0!==n)for(var i=0;i<e.length;i++){var o=e[i];o.isStatic||o.isSleeping||(o.force.y+=o.mass*t.y*n,o.force.x+=o.mass*t.x*n)}},i._bodiesUpdate=function(e,t,n,i,o){for(var r=0;r<e.length;r++){var s=e[r];s.isStatic||s.isSleeping||m.update(s,t,n,i)}}},function(e,t,n){var i={};e.exports=i;var o=n(5),r=n(0);i.create=function(e){return r.extend({extended:!1,narrowDetections:0,narrowphaseTests:0,narrowReuse:0,narrowReuseCount:0,midphaseTests:0,broadphaseTests:0,narrowEff:1e-4,midEff:1e-4,broadEff:1e-4,collisions:0,buckets:0,bodies:0,pairs:0},!1,e)},i.reset=function(e){e.extended&&(e.narrowDetections=0,e.narrowphaseTests=0,e.narrowReuse=0,e.narrowReuseCount=0,e.midphaseTests=0,e.broadphaseTests=0,e.narrowEff=0,e.midEff=0,e.broadEff=0,e.collisions=0,e.buckets=0,e.pairs=0,e.bodies=0)},i.update=function(e,t){if(e.extended){var n=t.world,i=o.allBodies(n);e.collisions=e.narrowDetections,e.pairs=t.pairs.list.length,e.bodies=i.length,e.midEff=(e.narrowDetections/(e.midphaseTests||1)).toFixed(2),e.narrowEff=(e.narrowDetections/(e.narrowphaseTests||1)).toFixed(2),e.broadEff=(1-e.broadphaseTests/(i.length||1)).toFixed(2),e.narrowReuse=(e.narrowReuseCount/(e.narrowphaseTests||1)).toFixed(2)}}},function(e,t,n){var i=e.exports=n(25);i.Body=n(6),i.Composite=n(5),i.World=n(19),i.Contact=n(18),i.Detector=n(12),i.Grid=n(11),i.Pairs=n(20),i.Pair=n(9),i.Query=n(26),i.Resolver=n(21),i.SAT=n(13),i.Constraint=n(8),i.MouseConstraint=n(28),i.Common=n(0),i.Engine=n(22),i.Events=n(4),i.Mouse=n(14),i.Runner=n(29),i.Sleeping=n(7),i.Plugin=n(17),i.Metrics=n(23),i.Bodies=n(16),i.Composites=n(30),i.Axes=n(15),i.Bounds=n(1),i.Svg=n(31),i.Vector=n(2),i.Vertices=n(3),i.Render=n(10),i.RenderPixi=n(32),i.World.add=i.Composite.add,i.World.remove=i.Composite.remove,i.World.addComposite=i.Composite.addComposite,i.World.addBody=i.Composite.addBody,i.World.addConstraint=i.Composite.addConstraint,i.World.clear=i.Composite.clear,i.Engine.run=i.Runner.run},function(e,t,n){var i={};e.exports=i;var o=n(17),r=n(0);i.name="matter-js",i.version="0.16.0",i.uses=[],i.used=[],i.use=function(){o.use(i,Array.prototype.slice.call(arguments))},i.before=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathBefore(i,e,t)},i.after=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathAfter(i,e,t)}},function(e,t,n){var i={};e.exports=i;var o=n(2),r=n(13),s=n(1),a=n(16),l=n(3);i.collides=function(e,t){for(var n=[],i=0;i<t.length;i++){var o=t[i];if(s.overlaps(o.bounds,e.bounds))for(var a=1===o.parts.length?0:1;a<o.parts.length;a++){var l=o.parts[a];if(s.overlaps(l.bounds,e.bounds)){var c=r.collides(l,e);if(c.collided){n.push(c);break}}}}return n},i.ray=function(e,t,n,r){r=r||1e-100;for(var s=o.angle(t,n),l=o.magnitude(o.sub(t,n)),c=.5*(n.x+t.x),d=.5*(n.y+t.y),u=a.rectangle(c,d,l,r,{angle:s}),p=i.collides(u,e),f=0;f<p.length;f+=1){var v=p[f];v.body=v.bodyB=v.bodyA}return p},i.region=function(e,t,n){for(var i=[],o=0;o<e.length;o++){var r=e[o],a=s.overlaps(r.bounds,t);(a&&!n||!a&&n)&&i.push(r)}return i},i.point=function(e,t){for(var n=[],i=0;i<e.length;i++){var o=e[i];if(s.contains(o.bounds,t))for(var r=1===o.parts.length?0:1;r<o.parts.length;r++){var a=o.parts[r];if(s.contains(a.bounds,t)&&l.contains(a.vertices,t)){n.push(o);break}}}return n}},function(t,n){t.exports=e},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(7),s=n(14),a=n(4),l=n(12),c=n(8),d=n(5),u=n(0),p=n(1);i.create=function(e,t){var n=(e?e.mouse:null)||(t?t.mouse:null);n||(e&&e.render&&e.render.canvas?n=s.create(e.render.canvas):t&&t.element?n=s.create(t.element):(n=s.create(),u.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var o={type:"mouseConstraint",mouse:n,element:null,body:null,constraint:c.create({label:"Mouse Constraint",pointA:n.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),collisionFilter:{category:1,mask:4294967295,group:0}},r=u.extend(o,t);return a.on(e,"beforeUpdate",(function(){var t=d.allBodies(e.world);i.update(r,t),i._triggerEvents(r)})),r},i.update=function(e,t){var n=e.mouse,i=e.constraint,s=e.body;if(0===n.button){if(i.bodyB)r.set(i.bodyB,!1),i.pointA=n.position;else for(var c=0;c<t.length;c++)if(s=t[c],p.contains(s.bounds,n.position)&&l.canCollide(s.collisionFilter,e.collisionFilter))for(var d=s.parts.length>1?1:0;d<s.parts.length;d++){var u=s.parts[d];if(o.contains(u.vertices,n.position)){i.pointA=n.position,i.bodyB=e.body=s,i.pointB={x:n.position.x-s.position.x,y:n.position.y-s.position.y},i.angleB=s.angle,r.set(s,!1),a.trigger(e,"startdrag",{mouse:n,body:s});break}}}else i.bodyB=e.body=null,i.pointB=null,s&&a.trigger(e,"enddrag",{mouse:n,body:s})},i._triggerEvents=function(e){var t=e.mouse,n=t.sourceEvents;n.mousemove&&a.trigger(e,"mousemove",{mouse:t}),n.mousedown&&a.trigger(e,"mousedown",{mouse:t}),n.mouseup&&a.trigger(e,"mouseup",{mouse:t}),s.clearSourceEvents(t)}},function(e,t,n){var i={};e.exports=i;var o=n(4),r=n(22),s=n(0);!function(){var e,t,n;("undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),e)||(e=function(e){n=setTimeout((function(){e(s.now())}),1e3/60)},t=function(){clearTimeout(n)});i.create=function(e){var t=s.extend({fps:60,correction:1,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,timeScalePrev:1,frameRequestId:null,isFixed:!1,enabled:!0},e);return t.delta=t.delta||1e3/t.fps,t.deltaMin=t.deltaMin||1e3/t.fps,t.deltaMax=t.deltaMax||1e3/(.5*t.fps),t.fps=1e3/t.delta,t},i.run=function(t,n){return void 0!==t.positionIterations&&(n=t,t=i.create()),function o(r){t.frameRequestId=e(o),r&&t.enabled&&i.tick(t,n,r)}(),t},i.tick=function(e,t,n){var i,s=t.timing,a=1,l={timestamp:s.timestamp};o.trigger(e,"beforeTick",l),o.trigger(t,"beforeTick",l),e.isFixed?i=e.delta:(i=n-e.timePrev||e.delta,e.timePrev=n,e.deltaHistory.push(i),e.deltaHistory=e.deltaHistory.slice(-e.deltaSampleSize),a=(i=(i=(i=Math.min.apply(null,e.deltaHistory))<e.deltaMin?e.deltaMin:i)>e.deltaMax?e.deltaMax:i)/e.delta,e.delta=i),0!==e.timeScalePrev&&(a*=s.timeScale/e.timeScalePrev),0===s.timeScale&&(a=0),e.timeScalePrev=s.timeScale,e.correction=a,e.frameCounter+=1,n-e.counterTimestamp>=1e3&&(e.fps=e.frameCounter*((n-e.counterTimestamp)/1e3),e.counterTimestamp=n,e.frameCounter=0),o.trigger(e,"tick",l),o.trigger(t,"tick",l),t.world.isModified&&t.render&&t.render.controller&&t.render.controller.clear&&t.render.controller.clear(t.render),o.trigger(e,"beforeUpdate",l),r.update(t,i,a),o.trigger(e,"afterUpdate",l),t.render&&t.render.controller&&(o.trigger(e,"beforeRender",l),o.trigger(t,"beforeRender",l),t.render.controller.world(t.render),o.trigger(e,"afterRender",l),o.trigger(t,"afterRender",l)),o.trigger(e,"afterTick",l),o.trigger(t,"afterTick",l)},i.stop=function(e){t(e.frameRequestId)},i.start=function(e,t){i.run(e,t)}}()},function(e,t,n){var i={};e.exports=i;var o=n(5),r=n(8),s=n(0),a=n(6),l=n(16);i.stack=function(e,t,n,i,r,s,l){for(var c,d=o.create({label:"Stack"}),u=e,p=t,f=0,v=0;v<i;v++){for(var m=0,y=0;y<n;y++){var g=l(u,p,y,v,c,f);if(g){var x=g.bounds.max.y-g.bounds.min.y,h=g.bounds.max.x-g.bounds.min.x;x>m&&(m=x),a.translate(g,{x:.5*h,y:.5*x}),u=g.bounds.max.x+r,o.addBody(d,g),c=g,f+=1}else u+=r}p+=m+s,u=e}return d},i.chain=function(e,t,n,i,a,l){for(var c=e.bodies,d=1;d<c.length;d++){var u=c[d-1],p=c[d],f=u.bounds.max.y-u.bounds.min.y,v=u.bounds.max.x-u.bounds.min.x,m=p.bounds.max.y-p.bounds.min.y,y={bodyA:u,pointA:{x:v*t,y:f*n},bodyB:p,pointB:{x:(p.bounds.max.x-p.bounds.min.x)*i,y:m*a}},g=s.extend(y,l);o.addConstraint(e,r.create(g))}return e.label+=" Chain",e},i.mesh=function(e,t,n,i,a){var l,c,d,u,p,f=e.bodies;for(l=0;l<n;l++){for(c=1;c<t;c++)d=f[c-1+l*t],u=f[c+l*t],o.addConstraint(e,r.create(s.extend({bodyA:d,bodyB:u},a)));if(l>0)for(c=0;c<t;c++)d=f[c+(l-1)*t],u=f[c+l*t],o.addConstraint(e,r.create(s.extend({bodyA:d,bodyB:u},a))),i&&c>0&&(p=f[c-1+(l-1)*t],o.addConstraint(e,r.create(s.extend({bodyA:p,bodyB:u},a)))),i&&c<t-1&&(p=f[c+1+(l-1)*t],o.addConstraint(e,r.create(s.extend({bodyA:p,bodyB:u},a))))}return e.label+=" Mesh",e},i.pyramid=function(e,t,n,o,r,s,l){return i.stack(e,t,n,o,r,s,(function(t,i,s,c,d,u){var p=Math.min(o,Math.ceil(n/2)),f=d?d.bounds.max.x-d.bounds.min.x:0;if(!(c>p||s<(c=p-c)||s>n-1-c))return 1===u&&a.translate(d,{x:(s+(n%2==1?1:-1))*f,y:0}),l(e+(d?s*f:0)+s*r,i,s,c,d,u)}))},i.newtonsCradle=function(e,t,n,i,s){for(var a=o.create({label:"Newtons Cradle"}),c=0;c<n;c++){var d=l.circle(e+c*(1.9*i),t+s,i,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),u=r.create({pointA:{x:e+c*(1.9*i),y:t},bodyB:d});o.addBody(a,d),o.addConstraint(a,u)}return a},i.car=function(e,t,n,i,s){var c=a.nextGroup(!0),d=.5*-n+20,u=.5*n-20,p=o.create({label:"Car"}),f=l.rectangle(e,t,n,i,{collisionFilter:{group:c},chamfer:{radius:.5*i},density:2e-4}),v=l.circle(e+d,t+0,s,{collisionFilter:{group:c},friction:.8}),m=l.circle(e+u,t+0,s,{collisionFilter:{group:c},friction:.8}),y=r.create({bodyB:f,pointB:{x:d,y:0},bodyA:v,stiffness:1,length:0}),g=r.create({bodyB:f,pointB:{x:u,y:0},bodyA:m,stiffness:1,length:0});return o.addBody(p,f),o.addBody(p,v),o.addBody(p,m),o.addConstraint(p,y),o.addConstraint(p,g),p},i.softBody=function(e,t,n,o,r,a,c,d,u,p){u=s.extend({inertia:1/0},u),p=s.extend({stiffness:.2,render:{type:"line",anchors:!1}},p);var f=i.stack(e,t,n,o,r,a,(function(e,t){return l.circle(e,t,d,u)}));return i.mesh(f,n,o,c,p),f.label="Soft Body",f}},function(e,t,n){var i={};e.exports=i;n(1);var o=n(0);i.pathToVertices=function(e,t){"undefined"==typeof window||"SVGPathSeg"in window||o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var n,r,s,a,l,c,d,u,p,f,v,m=[],y=0,g=0,x=0;t=t||15;var h=function(e,t,n){var i=n%2==1&&n>1;if(!p||e!=p.x||t!=p.y){p&&i?(f=p.x,v=p.y):(f=0,v=0);var o={x:f+e,y:v+t};!i&&p||(p=o),m.push(o),g=f+e,x=v+t}},b=function(e){var t=e.pathSegTypeAsLetter.toUpperCase();if("Z"!==t){switch(t){case"M":case"L":case"T":case"C":case"S":case"Q":g=e.x,x=e.y;break;case"H":g=e.x;break;case"V":x=e.y}h(g,x,e.pathSegType)}};for(i._svgPathToAbsolute(e),s=e.getTotalLength(),c=[],n=0;n<e.pathSegList.numberOfItems;n+=1)c.push(e.pathSegList.getItem(n));for(d=c.concat();y<s;){if((l=c[e.getPathSegAtLength(y)])!=u){for(;d.length&&d[0]!=l;)b(d.shift());u=l}switch(l.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":a=e.getPointAtLength(y),h(a.x,a.y,0)}y+=t}for(n=0,r=d.length;n<r;++n)b(d[n]);return m},i._svgPathToAbsolute=function(e){for(var t,n,i,o,r,s,a=e.pathSegList,l=0,c=0,d=a.numberOfItems,u=0;u<d;++u){var p=a.getItem(u),f=p.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(f))"x"in p&&(l=p.x),"y"in p&&(c=p.y);else switch("x1"in p&&(i=l+p.x1),"x2"in p&&(r=l+p.x2),"y1"in p&&(o=c+p.y1),"y2"in p&&(s=c+p.y2),"x"in p&&(l+=p.x),"y"in p&&(c+=p.y),f){case"m":a.replaceItem(e.createSVGPathSegMovetoAbs(l,c),u);break;case"l":a.replaceItem(e.createSVGPathSegLinetoAbs(l,c),u);break;case"h":a.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(l),u);break;case"v":a.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c),u);break;case"c":a.replaceItem(e.createSVGPathSegCurvetoCubicAbs(l,c,i,o,r,s),u);break;case"s":a.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(l,c,r,s),u);break;case"q":a.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(l,c,i,o),u);break;case"t":a.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(l,c),u);break;case"a":a.replaceItem(e.createSVGPathSegArcAbs(l,c,p.r1,p.r2,p.angle,p.largeArcFlag,p.sweepFlag),u);break;case"z":case"Z":l=t,c=n}"M"!=f&&"m"!=f||(t=l,n=c)}}},function(e,t,n){var i={};e.exports=i;var o=n(1),r=n(5),s=n(0),a=n(4),l=n(2);!function(){var e,t;"undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout((function(){e(s.now())}),1e3/60)},t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),i.create=function(e){s.warn("RenderPixi.create: Matter.RenderPixi is deprecated (see docs)");var t={controller:i,engine:null,element:null,frameRequestId:null,canvas:null,renderer:null,container:null,spriteContainer:null,pixiOptions:null,options:{width:800,height:600,background:"#fafafa",wireframeBackground:"#222",hasBounds:!1,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1}},n=s.extend(t,e),o=!n.options.wireframes&&"transparent"===n.options.background;return n.pixiOptions=n.pixiOptions||{view:n.canvas,transparent:o,antialias:!0,backgroundColor:e.background},n.mouse=e.mouse,n.engine=e.engine,n.renderer=n.renderer||new PIXI.WebGLRenderer(n.options.width,n.options.height,n.pixiOptions),n.container=n.container||new PIXI.Container,n.spriteContainer=n.spriteContainer||new PIXI.Container,n.canvas=n.canvas||n.renderer.view,n.bounds=n.bounds||{min:{x:0,y:0},max:{x:n.options.width,y:n.options.height}},a.on(n.engine,"beforeUpdate",(function(){i.clear(n)})),n.textures={},n.sprites={},n.primitives={},n.container.addChild(n.spriteContainer),s.isElement(n.element)?n.element.appendChild(n.canvas):s.warn('No "render.element" passed, "render.canvas" was not inserted into document.'),n.canvas.oncontextmenu=function(){return!1},n.canvas.onselectstart=function(){return!1},n},i.run=function(t){!function n(o){t.frameRequestId=e(n),i.world(t)}()},i.stop=function(e){t(e.frameRequestId)},i.clear=function(e){for(var t=e.container,n=e.spriteContainer;t.children[0];)t.removeChild(t.children[0]);for(;n.children[0];)n.removeChild(n.children[0]);var i=e.sprites["bg-0"];e.textures={},e.sprites={},e.primitives={},e.sprites["bg-0"]=i,i&&t.addChildAt(i,0),e.container.addChild(e.spriteContainer),e.currentBackground=null,t.scale.set(1,1),t.position.set(0,0)},i.setBackground=function(e,t){if(e.currentBackground!==t){var n=t.indexOf&&-1!==t.indexOf("#"),i=e.sprites["bg-0"];if(n){var o=s.colorToNumber(t);e.renderer.backgroundColor=o,i&&e.container.removeChild(i)}else if(!i){var r=d(e,t);(i=e.sprites["bg-0"]=new PIXI.Sprite(r)).position.x=0,i.position.y=0,e.container.addChildAt(i,0)}e.currentBackground=t}},i.world=function(e){var t,n=e.engine.world,s=e.renderer,a=e.container,c=e.options,d=r.allBodies(n),u=r.allConstraints(n),p=[];c.wireframes?i.setBackground(e,c.wireframeBackground):i.setBackground(e,c.background);var f=e.bounds.max.x-e.bounds.min.x,v=e.bounds.max.y-e.bounds.min.y,m=f/e.options.width,y=v/e.options.height;if(c.hasBounds){for(t=0;t<d.length;t++){var g=d[t];g.render.sprite.visible=o.overlaps(g.bounds,e.bounds)}for(t=0;t<u.length;t++){var x=u[t],h=x.bodyA,b=x.bodyB,w=x.pointA,S=x.pointB;h&&(w=l.add(h.position,x.pointA)),b&&(S=l.add(b.position,x.pointB)),w&&S&&((o.contains(e.bounds,w)||o.contains(e.bounds,S))&&p.push(x))}a.scale.set(1/m,1/y),a.position.set(-e.bounds.min.x*(1/m),-e.bounds.min.y*(1/y))}else p=u;for(t=0;t<d.length;t++)i.body(e,d[t]);for(t=0;t<p.length;t++)i.constraint(e,p[t]);s.render(a)},i.constraint=function(e,t){e.engine;var n=t.bodyA,i=t.bodyB,o=t.pointA,r=t.pointB,a=e.container,l=t.render,c="c-"+t.id,d=e.primitives[c];d||(d=e.primitives[c]=new PIXI.Graphics),l.visible&&t.pointA&&t.pointB?(-1===s.indexOf(a.children,d)&&a.addChild(d),d.clear(),d.beginFill(0,0),d.lineStyle(l.lineWidth,s.colorToNumber(l.strokeStyle),1),n?d.moveTo(n.position.x+o.x,n.position.y+o.y):d.moveTo(o.x,o.y),i?d.lineTo(i.position.x+r.x,i.position.y+r.y):d.lineTo(r.x,r.y),d.endFill()):d.clear()},i.body=function(e,t){e.engine;var i=t.render;if(i.visible)if(i.sprite&&i.sprite.texture){var o="b-"+t.id,r=e.sprites[o],a=e.spriteContainer;r||(r=e.sprites[o]=n(e,t)),-1===s.indexOf(a.children,r)&&a.addChild(r),r.position.x=t.position.x,r.position.y=t.position.y,r.rotation=t.angle,r.scale.x=i.sprite.xScale||1,r.scale.y=i.sprite.yScale||1}else{var l="b-"+t.id,d=e.primitives[l],u=e.container;d||((d=e.primitives[l]=c(e,t)).initialAngle=t.angle),-1===s.indexOf(u.children,d)&&u.addChild(d),d.position.x=t.position.x,d.position.y=t.position.y,d.rotation=t.angle-d.initialAngle}};var n=function(e,t){var n=t.render.sprite.texture,i=d(e,n),o=new PIXI.Sprite(i);return o.anchor.x=t.render.sprite.xOffset,o.anchor.y=t.render.sprite.yOffset,o},c=function(e,t){var n,i=t.render,o=e.options,r=new PIXI.Graphics,a=s.colorToNumber(i.fillStyle),l=s.colorToNumber(i.strokeStyle),c=s.colorToNumber(i.strokeStyle),d=s.colorToNumber("#bbb"),u=s.colorToNumber("#CD5C5C");r.clear();for(var p=t.parts.length>1?1:0;p<t.parts.length;p++){n=t.parts[p],o.wireframes?(r.beginFill(0,0),r.lineStyle(1,d,1)):(r.beginFill(a,1),r.lineStyle(i.lineWidth,l,1)),r.moveTo(n.vertices[0].x-t.position.x,n.vertices[0].y-t.position.y);for(var f=1;f<n.vertices.length;f++)r.lineTo(n.vertices[f].x-t.position.x,n.vertices[f].y-t.position.y);r.lineTo(n.vertices[0].x-t.position.x,n.vertices[0].y-t.position.y),r.endFill(),(o.showAngleIndicator||o.showAxes)&&(r.beginFill(0,0),o.wireframes?r.lineStyle(1,u,1):r.lineStyle(1,c),r.moveTo(n.position.x-t.position.x,n.position.y-t.position.y),r.lineTo((n.vertices[0].x+n.vertices[n.vertices.length-1].x)/2-t.position.x,(n.vertices[0].y+n.vertices[n.vertices.length-1].y)/2-t.position.y),r.endFill())}return r},d=function(e,t){var n=e.textures[t];return n||(n=e.textures[t]=PIXI.Texture.fromImage(t)),n}}()}])}));
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
},{}],2:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
},{"./arrayLikeToArray":1}],3:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],4:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],5:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],6:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

var isNativeReflectConstruct = require("./isNativeReflectConstruct");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
},{"./isNativeReflectConstruct":14,"./setPrototypeOf":18}],7:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],8:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],9:[function(require,module,exports){
var superPropBase = require("./superPropBase");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
},{"./superPropBase":19}],10:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],11:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":18}],12:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],13:[function(require,module,exports){
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
},{}],14:[function(require,module,exports){
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
},{}],15:[function(require,module,exports){
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],16:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
},{}],17:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"./assertThisInitialized":3,"@babel/runtime/helpers/typeof":21}],18:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],19:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
},{"./getPrototypeOf":10}],20:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":2,"./iterableToArray":15,"./nonIterableSpread":16,"./unsupportedIterableToArray":22}],21:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],22:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":1}],23:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf");

var setPrototypeOf = require("./setPrototypeOf");

var isNativeFunction = require("./isNativeFunction");

var construct = require("./construct");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
},{"./construct":6,"./getPrototypeOf":10,"./isNativeFunction":13,"./setPrototypeOf":18}],24:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],25:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":24}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Maths = _interopRequireDefault(require("../utils/Maths.js"));

var _AssetData2 = _interopRequireDefault(require("../project/data/AssetData.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {Asset}
 */
var Asset = /*#__PURE__*/function (_AssetData) {
  (0, _inherits2["default"])(Asset, _AssetData);

  var _super = _createSuper(Asset);

  function Asset() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Asset);
    _this = _super.call(this);
    _this.id = _Maths["default"].generateId();
    _this.name = props.name || 'Asset';
    _this.selected = false;
    _this.folderId = null;
    _this.type = null;
    return _this;
  }

  (0, _createClass2["default"])(Asset, [{
    key: "isSelected",
    value: function isSelected() {
      return this.selected;
    }
  }, {
    key: "select",
    value: function select() {
      this.setSelected(true);
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this.setSelected(false);
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setSelected",
    value: function setSelected(value) {
      this.selected = value;
    }
    /**
     * @param {*} data
     * @return {boolean}
     */

  }, {
    key: "load",
    value: function () {
      var _load = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.type.load(data));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load(_x) {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }]);
  return Asset;
}(_AssetData2["default"]);

exports["default"] = Asset;

},{"../project/data/AssetData.js":157,"../utils/Maths.js":202,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17,"@babel/runtime/regenerator":25}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Maths = _interopRequireDefault(require("../utils/Maths.js"));

var _FolderData2 = _interopRequireDefault(require("../project/data/FolderData.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Folder = /*#__PURE__*/function (_FolderData) {
  (0, _inherits2["default"])(Folder, _FolderData);

  var _super = _createSuper(Folder);

  function Folder(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, Folder);
    _this = _super.call(this);
    _this.id = _Maths["default"].generateId();
    _this.name = name;
    _this.folderId = null;
    _this.selected = false;
    return _this;
  }
  /**
   * @return {boolean}
   */


  (0, _createClass2["default"])(Folder, [{
    key: "isSelected",
    value: function isSelected() {
      return this.selected;
    }
  }, {
    key: "select",
    value: function select() {
      this.setSelected(true);
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this.setSelected(false);
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setSelected",
    value: function setSelected(value) {
      this.selected = value;
    }
  }]);
  return Folder;
}(_FolderData2["default"]);

exports["default"] = Folder;

},{"../project/data/FolderData.js":165,"../utils/Maths.js":202,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _AssetType2 = _interopRequireDefault(require("./AssetType.js"));

var _Mesh = _interopRequireDefault(require("../../core/Mesh.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {AssetImage}
 */
var AssetImage = /*#__PURE__*/function (_AssetType) {
  (0, _inherits2["default"])(AssetImage, _AssetType);

  var _super = _createSuper(AssetImage);

  function AssetImage() {
    var _this;

    (0, _classCallCheck2["default"])(this, AssetImage);
    _this = _super.call(this);
    _this.data = new _Mesh["default"]();
    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(AssetImage, [{
    key: "load",
    value: function () {
      var _load = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(image) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.data.fromImage(image));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load(_x) {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }]);
  return AssetImage;
}(_AssetType2["default"]);

exports["default"] = AssetImage;

},{"../../core/Mesh.js":48,"./AssetType.js":29,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17,"@babel/runtime/regenerator":25}],29:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/**
 * @class {AssetType}
 * @abstract
 */
var AssetType = /*#__PURE__*/function () {
  function AssetType() {
    (0, _classCallCheck2["default"])(this, AssetType);
    (0, _defineProperty2["default"])(this, "data", void 0);
  }

  (0, _createClass2["default"])(AssetType, [{
    key: "setData",

    /**
     * @param {*} data
     */
    value: function setData(data) {
      this.data = data;
    }
    /**
     * @return {*}
     */

  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
    /**
     * @abstract
     */

  }, {
    key: "load",
    value: function () {
      var _load = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                throw new TypeError("".concat(this.constructor.name, ".load must be implemented"));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load(_x) {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }]);
  return AssetType;
}();

exports["default"] = AssetType;

},{"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/regenerator":25}],30:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _BlobData2 = _interopRequireDefault(require("../../project/data/BlobData.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AssetTypeData = /*#__PURE__*/function (_BlobData) {
  (0, _inherits2["default"])(AssetTypeData, _BlobData);

  var _super = _createSuper(AssetTypeData);

  function AssetTypeData() {
    (0, _classCallCheck2["default"])(this, AssetTypeData);
    return _super.apply(this, arguments);
  }

  return AssetTypeData;
}(_BlobData2["default"]);

exports["default"] = AssetTypeData;

},{"../../project/data/BlobData.js":159,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],31:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ComponentData2 = _interopRequireDefault(require("../project/data/ComponentData.js"));

var _ComponentAttribute = _interopRequireDefault(require("../pobject/ComponentAttribute.js"));

var _AttributeType = require("../pobject/AttributeType.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @abstract
 */
var Component = /*#__PURE__*/function (_ComponentData) {
  (0, _inherits2["default"])(Component, _ComponentData);

  var _super = _createSuper(Component);

  function Component(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, Component);
    _this = _super.call(this, name);

    _this.init();

    return _this;
  }
  /**
   * @abstract
   * @return {FormField[]}
   */


  (0, _createClass2["default"])(Component, [{
    key: "getFormFields",
    value: function getFormFields() {
      throw new TypeError("".concat(this.constructor.name, ".getFormFields must be implement"));
    }
    /**
     * @private
     */

  }, {
    key: "init",
    value: function init() {
      this.add('enabled', _AttributeType.TYPES.BOOLEAN, true);
      this.initAttributes();
    }
    /**
     * @abstract
     */

  }, {
    key: "initAttributes",
    value: function initAttributes() {
      throw new TypeError("".concat(this.constructor.name, ".initAttributes must be implement"));
    }
    /**
     * @protected
     * @param {string} name
     * @param {string} type
     * @param {*} defaultValue
     */

  }, {
    key: "add",
    value: function add(name, type) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (!this.tryGet(name)) {
        var componentAttribute = new _ComponentAttribute["default"]();
        componentAttribute.setAttrName(name);
        componentAttribute.setAttrType(type);
        componentAttribute.setAttrValue(defaultValue);
        this.attributes.push(componentAttribute);
      } else {
        throw new TypeError("Attribute ".concat(name, " already defined for ").concat(this.name, "Component"));
      }
    }
    /**
     * @protected
     * @param {string} name
     * @return {ComponentAttribute}
     */

  }, {
    key: "get",
    value: function get(name) {
      var componentAttribute = this.tryGet(name);

      if (!componentAttribute) {
        throw new TypeError("Attribute ".concat(name, " not supported by ").concat(this.name, "Component"));
      }

      return componentAttribute;
    }
    /**
     * @protected
     * @param {string} name
     * @return {ComponentAttribute}
     */

  }, {
    key: "tryGet",
    value: function tryGet(name) {
      return this.attributes.find(function (attribute) {
        return attribute.getAttrName() === name;
      });
    }
    /**
     * @protected
     * @param {string} name
     * @param {*} value
     */

  }, {
    key: "setValue",
    value: function setValue(name, value) {
      var attribute = this.get(name);
      attribute.setAttrValue(value);
    }
    /**
     * @protected
     * @param {string} name
     * @return {*}
     */

  }, {
    key: "getValue",
    value: function getValue(name) {
      return this.get(name).getAttrValue();
    }
  }]);
  return Component;
}(_ComponentData2["default"]);

exports["default"] = Component;

},{"../pobject/AttributeType.js":150,"../pobject/ComponentAttribute.js":151,"../project/data/ComponentData.js":161,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],32:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../Component.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CameraComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CameraComponent, _Component);

  var _super = _createSuper(CameraComponent);

  function CameraComponent() {
    (0, _classCallCheck2["default"])(this, CameraComponent);
    return _super.call(this, 'Camera');
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(CameraComponent, [{
    key: "getFormFields",
    value: function getFormFields() {
      return [];
    }
    /**
     * @override
     */

  }, {
    key: "initAttributes",
    value: function initAttributes() {}
  }]);
  return CameraComponent;
}(_Component2["default"]);

exports["default"] = CameraComponent;

},{"../Component.js":31,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],33:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../Component.js"));

var _Style = _interopRequireDefault(require("../../pobject/Style.js"));

var _Layout = _interopRequireDefault(require("../../layout/Layout.js"));

var _Size = _interopRequireDefault(require("../../pobject/Size.js"));

var _Unit = require("../../unit/Unit.js");

var _AttributeType = require("../../pobject/AttributeType.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MeshComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MeshComponent, _Component);

  var _super = _createSuper(MeshComponent);

  function MeshComponent() {
    (0, _classCallCheck2["default"])(this, MeshComponent);
    return _super.call(this, 'Mesh');
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(MeshComponent, [{
    key: "initAttributes",
    value: function initAttributes() {
      this.add('shape', _AttributeType.TYPES.STRING, _Unit.PrimitiveShape.RECT);
      this.add('style', _AttributeType.TYPES.STYLE, new _Style["default"]());
      this.add('size', _AttributeType.TYPES.SIZE, new _Size["default"](0));
      this.add('vertices', _AttributeType.TYPES.ARRAY_VECTOR, []);
      this.add('shapeVertices', _AttributeType.TYPES.ARRAY_VECTOR, []);
      this.add('generated', _AttributeType.TYPES.BOOLEAN, false);
      this.add('assetId', _AttributeType.TYPES.NUMBER);
      this.add('imageRepeat', _AttributeType.TYPES.BOOLEAN, false);
      this.add('version', _AttributeType.TYPES.NUMBER, 0);
    }
    /**
     * @override
     */

  }, {
    key: "getFormFields",
    value: function getFormFields() {
      return [{
        bind: 'size.width',
        label: 'Width',
        type: _Layout["default"].form.TEXT
      }, {
        bind: 'size.height',
        label: 'Height',
        type: _Layout["default"].form.TEXT
      }, {
        bind: 'imageRepeat',
        label: 'Repeat texture',
        type: _Layout["default"].form.CHECKBOX
      }];
    }
    /**
     * @return {string}
     */

  }, {
    key: "getShape",
    value: function getShape() {
      return this.getValue('shape');
    }
    /**
     * @param {string} shape
     */

  }, {
    key: "setShape",
    value: function setShape(shape) {
      this.setValue('shape', shape);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getVersion",
    value: function getVersion() {
      return this.getValue('version');
    }
    /**
     * @param {number} version
     */

  }, {
    key: "setVersion",
    value: function setVersion(version) {
      this.setValue('version', version);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getAssetId",
    value: function getAssetId() {
      return this.getValue('assetId');
    }
    /**
     * @param {number} assetId
     */

  }, {
    key: "setAssetId",
    value: function setAssetId(assetId) {
      this.setValue('assetId', assetId);
    }
    /**
     * @return {Style}
     */

  }, {
    key: "getStyle",
    value: function getStyle() {
      return this.getValue('style');
    }
    /**
     * @param {Style} style
     */

  }, {
    key: "setStyle",
    value: function setStyle(style) {
      this.setValue('style', style);
    }
    /**
     * @param {Size} size
     */

  }, {
    key: "setSize",
    value: function setSize(size) {
      this.setValue('size', size);
    }
    /**
     * @return {Size}
     */

  }, {
    key: "getSize",
    value: function getSize() {
      return this.getValue('size');
    }
    /**
     * @param {boolean} generated
     */

  }, {
    key: "setGenerated",
    value: function setGenerated(generated) {
      this.setValue('generated', generated);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getGenerated",
    value: function getGenerated() {
      return this.getValue('generated');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isGenerated",
    value: function isGenerated() {
      return this.getGenerated();
    }
    /**
     * @param {boolean} enabled
     */

  }, {
    key: "setEnabled",
    value: function setEnabled(enabled) {
      this.setValue('enabled', enabled);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getEnabled",
    value: function getEnabled() {
      return this.getValue('enabled');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return this.getEnabled();
    }
    /**
     * @param {Vector[]} vertices
     */

  }, {
    key: "setVertices",
    value: function setVertices(vertices) {
      this.setValue('vertices', vertices);
    }
    /**
     * @return {Vector[]}
     */

  }, {
    key: "getVertices",
    value: function getVertices() {
      return this.getValue('vertices');
    }
    /**
     * @param {Vector[]} shapeVertices
     */

  }, {
    key: "setShapeVertices",
    value: function setShapeVertices(shapeVertices) {
      this.setValue('shapeVertices', shapeVertices);
    }
    /**
     * @return {Vector[]}
     */

  }, {
    key: "getShapeVertices",
    value: function getShapeVertices() {
      return this.getValue('shapeVertices');
    }
    /**
     * @param {boolean} imageRepeat
     */

  }, {
    key: "setImageRepeat",
    value: function setImageRepeat(imageRepeat) {
      this.setValue('imageRepeat', imageRepeat);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getImageRepeat",
    value: function getImageRepeat() {
      return this.getValue('imageRepeat');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isImageRepeat",
    value: function isImageRepeat() {
      return this.getImageRepeat();
    }
  }]);
  return MeshComponent;
}(_Component2["default"]);

exports["default"] = MeshComponent;

},{"../../layout/Layout.js":74,"../../pobject/AttributeType.js":150,"../../pobject/Size.js":155,"../../pobject/Style.js":156,"../../unit/Unit.js":182,"../Component.js":31,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],34:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../Component.js"));

var _AttributeType = require("../../pobject/AttributeType.js");

var _Style = _interopRequireDefault(require("../../pobject/Style.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyleComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(StyleComponent, _Component);

  var _super = _createSuper(StyleComponent);

  function StyleComponent() {
    (0, _classCallCheck2["default"])(this, StyleComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(StyleComponent, [{
    key: "initAttributes",

    /**
     * @override
     */
    value: function initAttributes() {
      this.add('style', _AttributeType.TYPES.STYLE, new _Style["default"]());
    }
    /**
     * @override
     */

  }, {
    key: "getFormFields",
    value: function getFormFields() {
      return [];
    }
    /**
     * @param {Style} style
     */

  }, {
    key: "setStyle",
    value: function setStyle(style) {
      this.setValue('style', style);
    }
    /**
     * @return {Style}
     */

  }, {
    key: "getStyle",
    value: function getStyle() {
      return this.getValue('style');
    }
  }]);
  return StyleComponent;
}(_Component2["default"]);

exports["default"] = StyleComponent;

},{"../../pobject/AttributeType.js":150,"../../pobject/Style.js":156,"../Component.js":31,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],35:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../Component.js"));

var _Layout = _interopRequireDefault(require("../../layout/Layout.js"));

var _Vector = _interopRequireDefault(require("../../utils/Vector.js"));

var _AttributeType = require("../../pobject/AttributeType.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TransformComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TransformComponent, _Component);

  var _super = _createSuper(TransformComponent);

  function TransformComponent() {
    (0, _classCallCheck2["default"])(this, TransformComponent);
    return _super.call(this, 'Transform');
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(TransformComponent, [{
    key: "initAttributes",
    value: function initAttributes() {
      this.add('position', _AttributeType.TYPES.VECTOR, new _Vector["default"]());
      this.add('scale', _AttributeType.TYPES.VECTOR, new _Vector["default"]());
      this.add('rotation', _AttributeType.TYPES.NUMBER, 0);
    }
    /**
     * @override
     */

  }, {
    key: "getFormFields",
    value: function getFormFields() {
      return [{
        bind: 'position.x',
        label: 'Position X',
        type: _Layout["default"].form.TEXT
      }, {
        bind: 'position.y',
        label: 'Position Y',
        type: _Layout["default"].form.TEXT
      }, {
        bind: 'position.z',
        label: 'Position Z',
        type: _Layout["default"].form.TEXT
      }, {
        bind: 'scale.x',
        label: 'Scale X',
        type: _Layout["default"].form.TEXT
      }, {
        bind: 'scale.y',
        label: 'Scale Y',
        type: _Layout["default"].form.TEXT
      }, {
        bind: 'rotation',
        label: 'Rotation (rad)',
        type: _Layout["default"].form.RANGE,
        options: {
          min: 0,
          max: Math.PI,
          step: 0.01
        }
      }];
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.getValue('position');
    }
    /**
     * @param {Vector} position
     */

  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.setValue('position', position);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getRotation",
    value: function getRotation() {
      return this.getValue('rotation');
    }
    /**
     * @param {number} rotation
     */

  }, {
    key: "setRotation",
    value: function setRotation(rotation) {
      this.setValue('rotation', rotation);
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getScale",
    value: function getScale() {
      return this.getValue('scale');
    }
    /**
     * @param {Vector} scale
     */

  }, {
    key: "setScale",
    value: function setScale(scale) {
      this.setValue('scale', scale);
    }
  }]);
  return TransformComponent;
}(_Component2["default"]);

exports["default"] = TransformComponent;

},{"../../layout/Layout.js":74,"../../pobject/AttributeType.js":150,"../../utils/Vector.js":206,"../Component.js":31,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],36:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../../Component.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GUIPendingComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GUIPendingComponent, _Component);

  var _super = _createSuper(GUIPendingComponent);

  function GUIPendingComponent() {
    (0, _classCallCheck2["default"])(this, GUIPendingComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GUIPendingComponent, [{
    key: "isHidden",

    /**
     * @override
     */
    value: function isHidden() {
      return true;
    }
    /**
     * @override
     */

  }, {
    key: "getFormFields",
    value: function getFormFields() {
      return [];
    }
    /**
     * @override
     */

  }, {
    key: "initAttributes",
    value: function initAttributes() {}
  }]);
  return GUIPendingComponent;
}(_Component2["default"]);

exports["default"] = GUIPendingComponent;

},{"../../Component.js":31,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],37:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../../../Component.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GUIGridComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GUIGridComponent, _Component);

  var _super = _createSuper(GUIGridComponent);

  function GUIGridComponent() {
    (0, _classCallCheck2["default"])(this, GUIGridComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GUIGridComponent, [{
    key: "getFormFields",

    /**
     * @override
     */
    value: function getFormFields() {
      return [];
    }
    /**
     * @override
     */

  }, {
    key: "initAttributes",
    value: function initAttributes() {}
  }]);
  return GUIGridComponent;
}(_Component2["default"]);

exports["default"] = GUIGridComponent;

},{"../../../Component.js":31,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],38:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../../../Component.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GUIGridXComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GUIGridXComponent, _Component);

  var _super = _createSuper(GUIGridXComponent);

  function GUIGridXComponent() {
    (0, _classCallCheck2["default"])(this, GUIGridXComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GUIGridXComponent, [{
    key: "getFormFields",

    /**
     * @override
     */
    value: function getFormFields() {
      return [];
    }
    /**
     * @override
     */

  }, {
    key: "initAttributes",
    value: function initAttributes() {}
  }]);
  return GUIGridXComponent;
}(_Component2["default"]);

exports["default"] = GUIGridXComponent;

},{"../../../Component.js":31,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],39:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../../../Component.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GUIGridYComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GUIGridYComponent, _Component);

  var _super = _createSuper(GUIGridYComponent);

  function GUIGridYComponent() {
    (0, _classCallCheck2["default"])(this, GUIGridYComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GUIGridYComponent, [{
    key: "getFormFields",

    /**
     * @override
     */
    value: function getFormFields() {
      return [];
    }
    /**
     * @override
     */

  }, {
    key: "initAttributes",
    value: function initAttributes() {}
  }]);
  return GUIGridYComponent;
}(_Component2["default"]);

exports["default"] = GUIGridYComponent;

},{"../../../Component.js":31,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],40:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Component2 = _interopRequireDefault(require("../../../Component.js"));

var _AttributeType = require("../../../../pobject/AttributeType.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GUIPropertyComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GUIPropertyComponent, _Component);

  var _super = _createSuper(GUIPropertyComponent);

  function GUIPropertyComponent() {
    (0, _classCallCheck2["default"])(this, GUIPropertyComponent);
    return _super.call(this, 'Edit Properties');
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(GUIPropertyComponent, [{
    key: "initAttributes",
    value: function initAttributes() {
      this.add('selectable', _AttributeType.TYPES.BOOLEAN, true);
      this.add('selected', _AttributeType.TYPES.BOOLEAN, false);
      this.add('locked', _AttributeType.TYPES.BOOLEAN, false);
      this.add('visible', _AttributeType.TYPES.BOOLEAN, true);
      this.add('focused', _AttributeType.TYPES.BOOLEAN, false);
      this.add('rank', _AttributeType.TYPES.NUMBER, 0);
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setSelected",
    value: function setSelected(value) {
      this.setValue('selected', value);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getSelected",
    value: function getSelected() {
      return this.getValue('selected');
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setFocused",
    value: function setFocused(value) {
      this.setValue('focused', value);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getFocused",
    value: function getFocused() {
      return this.getValue('focused');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isFocused",
    value: function isFocused() {
      return this.getFocused();
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.getSelected();
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getSelectable",
    value: function getSelectable() {
      return this.getValue('selectable');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isSelectable",
    value: function isSelectable() {
      return this.getSelectable();
    }
    /**
     * @param {boolean} visible
     */

  }, {
    key: "setVisible",
    value: function setVisible(visible) {
      this.setValue('visible', visible);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.getValue('visible');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.getVisible();
    }
    /**
     * @param {boolean} locked
     */

  }, {
    key: "setLocked",
    value: function setLocked(locked) {
      this.setValue('locked', locked);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getLocked",
    value: function getLocked() {
      return this.getValue('locked');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isLocked",
    value: function isLocked() {
      return this.getLocked();
    }
    /**
     * @param {number} rank
     */

  }, {
    key: "setRank",
    value: function setRank(rank) {
      this.setValue('rank', rank);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getRank",
    value: function getRank() {
      return this.getValue('rank');
    }
    /**
     * @override
     */

  }, {
    key: "getFormFields",
    value: function getFormFields() {
      return [];
    }
  }]);
  return GUIPropertyComponent;
}(_Component2["default"]);

exports["default"] = GUIPropertyComponent;

},{"../../../../pobject/AttributeType.js":150,"../../../Component.js":31,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],41:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Define the action to be executed when an event is triggered
 */
var Action = /*#__PURE__*/function () {
  function Action() {
    (0, _classCallCheck2["default"])(this, Action);
    this.queue = [];
  }

  (0, _createClass2["default"])(Action, [{
    key: "add",

    /**
     * Add action to the queue.
     * @param {Object} object the object must define the method "execute"
     * @param {...any} args
     */
    value: function add(object) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.queue.push({
        object: object,
        args: args
      });
    }
    /**
     * Run all actions. stop the execution if the "execute" return true.
     */

  }, {
    key: "run",
    value: function run() {
      for (var iQueue in this.queue) {
        if (this.queue.hasOwnProperty(iQueue)) {
          var _action$object;

          var action = this.queue[iQueue];

          if ((_action$object = action.object).execute.apply(_action$object, (0, _toConsumableArray2["default"])(action.args))) {
            break;
          }
        }
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.queue = [];
    }
  }], [{
    key: "get",
    value: function get() {
      if (!Action.instance) {
        Action.instance = new Action();
      }

      return Action.instance;
    }
  }]);
  return Action;
}();

Action.instance = null;
var _default = Action;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/toConsumableArray":20}],42:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Window = _interopRequireDefault(require("./Window.js"));

var _EventHandler = _interopRequireDefault(require("./EventHandler.js"));

var _ExceptionHandler = _interopRequireDefault(require("../exception/ExceptionHandler.js"));

/**
 * Define the application main
 */
var Application = /*#__PURE__*/function () {
  /**
   * @param {Class<Loop>[]} loops
   */
  function Application(loops) {
    (0, _classCallCheck2["default"])(this, Application);
    this.loops = loops;
    this.exceptionHandler = _ExceptionHandler["default"].get();
    this.window = _Window["default"].get();
    this.loop = this.loop.bind(this);
  }

  (0, _createClass2["default"])(Application, [{
    key: "start",
    value: function () {
      var _start = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.window.init();
                _context.next = 3;
                return Promise.all(this.loops.map(function (loop) {
                  return loop.get().init();
                }));

              case 3:
                this.loop();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
    /**
     * @private
     */

  }, {
    key: "loop",
    value: function loop() {
      try {
        this.loops.forEach(function (loop) {
          var loopInstance = loop.get();

          _EventHandler["default"].get().handle(_Window["default"].get(), loopInstance.getRunners());

          loopInstance.loop();
        });
      } catch (e) {
        this.exceptionHandler.handle(e);
      }

      this.window.clear();
      requestAnimationFrame(this.loop);
    }
  }]);
  return Application;
}();

var _default = Application;
exports["default"] = _default;

},{"../exception/ExceptionHandler.js":56,"./EventHandler.js":46,"./Window.js":51,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/regenerator":25}],43:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _CameraData2 = _interopRequireDefault(require("../project/data/CameraData.js"));

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

var _Size = _interopRequireDefault(require("../pobject/Size.js"));

var _MeshComponent = _interopRequireDefault(require("../component/internal/MeshComponent.js"));

var _TransformComponent = _interopRequireDefault(require("../component/internal/TransformComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {Camera}
 * Define the camera
 * @property {Vector} position
 */
var Camera = /*#__PURE__*/function (_CameraData) {
  (0, _inherits2["default"])(Camera, _CameraData);

  var _super = _createSuper(Camera);

  function Camera(position) {
    var _this;

    (0, _classCallCheck2["default"])(this, Camera);
    _this = _super.call(this);
    _this.initPosition = position;
    _this.position = _this.initPosition;
    _this.scaleFactor = 0.2;
    _this.cameraUnitId = null;
    return _this;
  }
  /**
   * Update camera position
   * @param {Vector} position
   */


  (0, _createClass2["default"])(Camera, [{
    key: "update",
    value: function update(position) {
      this.position = position;
    }
    /**
     * Reset camera position
     */

  }, {
    key: "reset",
    value: function reset() {
      this.position = this.initPosition;
    }
    /**
     * Calculate and return the camera view
     */

  }, {
    key: "getCameraView",
    value: function getCameraView() {
      var cameraViewX = this.position.x;
      var cameraViewY = this.position.y;
      var cameraViewZ = this.position.z || 0;
      return {
        cameraViewX: cameraViewX,
        cameraViewY: cameraViewY,
        cameraViewZ: cameraViewZ
      };
    }
    /**
     * Convert a position to canvas coordination
     * @param {Vector} position
     */

  }, {
    key: "toCanvasCoord",
    value: function toCanvasCoord(position) {
      var _this$getCameraView = this.getCameraView(),
          cameraViewX = _this$getCameraView.cameraViewX,
          cameraViewY = _this$getCameraView.cameraViewY;

      var x = parseInt(position.x) - cameraViewX;
      var y = parseInt(position.y) - cameraViewY;
      return new _Vector["default"]({
        x: x,
        y: y
      });
    }
    /**
     * Get the canvas coordination from the given position
     * @param {Vector} position
     */

  }, {
    key: "fromCanvasCoord",
    value: function fromCanvasCoord(position) {
      var _this$getCameraView2 = this.getCameraView(),
          cameraViewX = _this$getCameraView2.cameraViewX,
          cameraViewY = _this$getCameraView2.cameraViewY;

      var x = position.x + cameraViewX;
      var y = position.y + cameraViewY;
      var z = position.z;
      return new _Vector["default"]({
        x: x,
        y: y,
        z: z
      });
    }
    /**
     * @param {Vector} position
     * @return {Vector}
     */

  }, {
    key: "toCameraScale",
    value: function toCameraScale(position) {
      var scale = this.getScale(position);
      var x = position.x * scale;
      var y = position.y * scale;
      var z = position.z || 0;
      return new _Vector["default"]({
        x: x,
        y: y,
        z: z
      });
    }
    /**
     * @param {Vector} position
     * @return {Vector}
     */

  }, {
    key: "fromCameraScale",
    value: function fromCameraScale(position) {
      var scale = this.getScale(position);
      var x = position.x / scale;
      var y = position.y / scale;
      var z = position.z || 0;
      return new _Vector["default"]({
        x: x,
        y: y,
        z: z
      });
    }
    /**
     * @param {Vector} position
     * @return {number}
     */

  }, {
    key: "getScale",
    value: function getScale(position) {
      var _this$getCameraView3 = this.getCameraView(),
          cameraViewZ = _this$getCameraView3.cameraViewZ;

      var distanceZ = cameraViewZ - (position.z || 0);
      return 1 + distanceZ * this.scaleFactor;
    }
    /**
     * @param {number} scale
     */

  }, {
    key: "setScale",
    value: function setScale(scale) {
      var distanceZ = (scale - 1) / this.scaleFactor;
      this.setPositionZ(distanceZ);
    }
    /**
     * @param {Size} size
     * @param {Vector} position
     * @return {Size}
     */

  }, {
    key: "toScaleSize",
    value: function toScaleSize(size) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Vector["default"]();
      var scale = this.getScale(position);
      return new _Size["default"]({
        width: size.width * scale,
        height: size.height * scale
      });
    }
    /**
     * @param {number} value
     * @param {Vector} position
     * @return {number}
     */

  }, {
    key: "toScaleNumber",
    value: function toScaleNumber(value) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Vector["default"]();
      return value * this.getScale(position);
    }
    /**
     * @param {Size} size
     * @param {Vector} position
     * @return {Size}
     */

  }, {
    key: "fromScaleSize",
    value: function fromScaleSize(size) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Vector["default"]();
      var scale = this.getScale(position);
      return new _Size["default"]({
        width: size.width / scale,
        height: size.height / scale
      });
    }
    /**
     * @param {number} value
     * @param {Vector} position
     * @return {number}
     */

  }, {
    key: "fromScaleNumber",
    value: function fromScaleNumber(value) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Vector["default"]();
      return value / this.getScale(position);
    }
    /**
     * @param {number} cameraUnitId
     * @param {World} world
     */

  }, {
    key: "setup",
    value: function setup(cameraUnitId, world) {
      this.cameraUnitId = cameraUnitId;
      var unit = this.getUnit(world.getUnitManager());

      if (!unit) {
        throw new TypeError("Error Setup camera (Unit ID: ".concat(cameraUnitId, ")"));
      }

      var meshComponent = unit.getComponent(_MeshComponent["default"]);
      var scale = world.getResolution().getWidth() / meshComponent.getSize().getWidth();
      var unitPosition = unit.getComponent(_TransformComponent["default"]).getPosition();
      this.update(unitPosition);
      this.setScale(scale);
      meshComponent.setEnabled(false);
    }
    /**
     * @param {UnitManager} unitManager
     */

  }, {
    key: "getUnit",
    value: function getUnit(unitManager) {
      return unitManager.findUnitById(this.cameraUnitId);
    }
    /**
     * @param {Vector} position
     */

  }, {
    key: "setInitPosition",
    value: function setInitPosition(position) {
      this.initPosition = position;
    }
  }]);
  return Camera;
}(_CameraData2["default"]);

var _default = Camera;
exports["default"] = _default;

},{"../component/internal/MeshComponent.js":33,"../component/internal/TransformComponent.js":35,"../pobject/Size.js":155,"../project/data/CameraData.js":160,"../utils/Vector.js":206,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PREVIEW_URL = exports.STYLE_THEME = exports.CANVAS_CONTEXT_TYPE = exports.HTML_ID_PREFIX = exports.SCENE_HEIGHT = exports.SCENE_WIDTH = void 0;
var SCENE_WIDTH = window.innerWidth;
exports.SCENE_WIDTH = SCENE_WIDTH;
var SCENE_HEIGHT = window.innerHeight;
exports.SCENE_HEIGHT = SCENE_HEIGHT;
var HTML_ID_PREFIX = 'app-el-';
exports.HTML_ID_PREFIX = HTML_ID_PREFIX;
var CANVAS_CONTEXT_TYPE = '2d';
exports.CANVAS_CONTEXT_TYPE = CANVAS_CONTEXT_TYPE;
var STYLE_THEME = 'dark';
exports.STYLE_THEME = STYLE_THEME;
var PREVIEW_URL = '/src/preview/';
exports.PREVIEW_URL = PREVIEW_URL;

},{}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectContext = exports.objectCanvas = void 0;
var objectCanvas = document.getElementById('object');
exports.objectCanvas = objectCanvas;
var objectContext = objectCanvas && objectCanvas.getContext('2d');
exports.objectContext = objectContext;

},{}],46:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Menu = _interopRequireDefault(require("../layout/Menu.js"));

var _Action = _interopRequireDefault(require("./Action.js"));

/**
 * Handle global events triggered by the user (click , mouse move)
 * and define related action (Runner) to be executed
 */
var EventHandler = /*#__PURE__*/function () {
  function EventHandler() {
    (0, _classCallCheck2["default"])(this, EventHandler);
  }

  (0, _createClass2["default"])(EventHandler, [{
    key: "handle",

    /**
     * Apply actions when event is triggered onto the window (Mouse and Keyboard events, ...)
     * @param {Window} window
     * @param {Class[]} runners
     */
    value: function handle(window, runners) {
      var mouse = window.mouse;

      var action = _Action["default"].get();

      var menu = _Menu["default"].get();

      action.reset();
      runners.forEach(function (runner) {
        var runnerInstance = runner.get();

        if (runnerInstance.isHandle(window)) {
          action.add(runnerInstance, mouse, menu);
        }
      });
      action.run();
    }
  }], [{
    key: "get",
    value: function get() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);
  return EventHandler;
}();

EventHandler.instance = null;
var _default = EventHandler;
exports["default"] = _default;

},{"../layout/Menu.js":75,"./Action.js":41,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],47:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Define the keyboard inputs (key pressed, released)
 * @property {number[]} keys
 */
var Keyboard = /*#__PURE__*/function () {
  function Keyboard() {
    (0, _classCallCheck2["default"])(this, Keyboard);
    this.keys = [];
  }
  /**
   * @param {number} key
   */


  (0, _createClass2["default"])(Keyboard, [{
    key: "setKeyPressed",
    value: function setKeyPressed(key) {
      if (!this.isKeyPressed(key)) {
        this.keys.push(key);
      }
    }
    /**
     * @param {number} key
     */

  }, {
    key: "setKeyReleased",
    value: function setKeyReleased(key) {
      if (this.isKeyPressed(key)) {
        var index = this.keys.indexOf(key);
        this.keys.splice(index, 1);
      }
    }
    /**
     * @param {number} key
     * @return {Boolean}
     */

  }, {
    key: "isKeyPressed",
    value: function isKeyPressed(key) {
      var index = this.keys.indexOf(key);
      return index !== -1;
    }
  }]);
  return Keyboard;
}();

Keyboard.Keys = {
  CTRL: 17
};
var _default = Keyboard;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],48:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ImageHelper = _interopRequireDefault(require("../utils/ImageHelper.js"));

var _Size = _interopRequireDefault(require("../pobject/Size.js"));

var _Constant = require("./Constant.js");

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

var _AssetTypeData2 = _interopRequireDefault(require("../asset/types/AssetTypeData.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Define a block of pixels loaded to the VRAM.
 * Attached to an entity, and used to draw pixels by the GPU
 * @extends {AssetTypeData}
 * @property {Vector} position
 * @property {{width: number, height: number}} size
 * @property {OffscreenCanvasRenderingContext2D} context
 */
var Mesh = /*#__PURE__*/function (_AssetTypeData) {
  (0, _inherits2["default"])(Mesh, _AssetTypeData);

  var _super = _createSuper(Mesh);

  function Mesh() {
    var _this;

    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _Vector["default"]();
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    (0, _classCallCheck2["default"])(this, Mesh);
    _this = _super.call(this);
    _this.size = _this.initSize(size);
    _this.position = position;

    _this.initCanvas();

    return _this;
  }
  /**
   * @param {number|Size} size
   * @return {Size}
   */


  (0, _createClass2["default"])(Mesh, [{
    key: "initSize",
    value: function initSize(size) {
      return _.isNumber(size) ? new _Size["default"]({
        width: size,
        height: size
      }) : size;
    }
    /**
     * Initialize the canvas and the context for the current Mesh
     */

  }, {
    key: "initCanvas",
    value: function initCanvas() {
      var canvas = new OffscreenCanvas(this.size.width, this.size.height);
      this.context = canvas.getContext(_Constant.CANVAS_CONTEXT_TYPE);
    }
    /**
     * Copy a given canvas to the mesh
     * @param {OffscreenCanvas | HTMLImageElement} canvas
     * @param {Number} x
     * @param {Number} y
     * @param {Number} sw
     * @param {Number} sh
     */

  }, {
    key: "copy",
    value: function copy(canvas, x, y, sw, sh) {
      this.context.drawImage(canvas, x, y, sw, sh);
    }
    /**
     * Clear the Mesh
     * @param {number|Size} size
     */

  }, {
    key: "clear",
    value: function clear() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.size = this.initSize(size || this.size);

      if (this.size.width > 0 && this.size.height > 0) {
        this.context.canvas.width = this.size.width;
        this.context.canvas.height = this.size.height;
        return true;
      }

      return false;
    }
    /**
     * Create a mesh from another Mesh
     * @param {Mesh} mesh
     */

  }, {
    key: "copyFromMesh",
    value: function copyFromMesh(mesh) {
      this.copy(mesh.context.canvas, 0, 0, this.size.width, this.size.height);
    }
    /**
     * Create a mesh from a image URL
     * @param {string} imageInput Image url or blob
     * @return {boolean}
     */

  }, {
    key: "fromImage",
    value: function () {
      var _fromImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(imageInput) {
        var image, width, height;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!imageInput) {
                  _context.next = 10;
                  break;
                }

                image = new Image();
                image.src = imageInput;
                _context.next = 5;
                return image.decode();

              case 5:
                width = image.width, height = image.height;

                if (!(width && height)) {
                  _context.next = 10;
                  break;
                }

                this.clear(new _Size["default"]({
                  width: width,
                  height: height
                }));
                this.copy(image, 0, 0, width, height);
                return _context.abrupt("return", true);

              case 10:
                return _context.abrupt("return", false);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fromImage(_x) {
        return _fromImage.apply(this, arguments);
      }

      return fromImage;
    }()
    /**
     * @override
     */

  }, {
    key: "setDataUrl",
    value: function () {
      var _setDataUrl = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(dataUrl) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fromImage(dataUrl);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setDataUrl(_x2) {
        return _setDataUrl.apply(this, arguments);
      }

      return setDataUrl;
    }()
    /**
     * @override
     */

  }, {
    key: "getDataUrl",
    value: function getDataUrl() {
      return _ImageHelper["default"].getDataURL(this.context.canvas, this.size);
    }
    /**
     * @param {OffscreenCanvasRenderingContext2D} context
     */

  }, {
    key: "setContext",
    value: function setContext(context) {
      this.context = context;
    }
    /**
     * Instantiate new Mesh from image URL
     * @param {string} imageInput Image url or blob
     * @return {Mesh}
     */

  }], [{
    key: "fromImage",
    value: function () {
      var _fromImage2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(imageInput) {
        var mesh;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                mesh = new Mesh();
                _context3.next = 3;
                return mesh.fromImage(imageInput);

              case 3:
                return _context3.abrupt("return", mesh);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function fromImage(_x3) {
        return _fromImage2.apply(this, arguments);
      }

      return fromImage;
    }()
  }]);
  return Mesh;
}(_AssetTypeData2["default"]);

var _default = Mesh;
exports["default"] = _default;

},{"../asset/types/AssetTypeData.js":30,"../pobject/Size.js":155,"../utils/ImageHelper.js":201,"../utils/Vector.js":206,"./Constant.js":44,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17,"@babel/runtime/regenerator":25}],49:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Context = require("./Context.js");

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

var _Size = _interopRequireDefault(require("../pobject/Size.js"));

/**
 * Define the mouse inputs (pressed, clicked, mouse position, ...)
 */
var Mouse = /*#__PURE__*/function () {
  function Mouse() {
    (0, _classCallCheck2["default"])(this, Mouse);
    this.keydowns = [];
    this.keyclicks = [];
    this.keydbclicks = [];
    this.position = new _Vector["default"]();
    this.scenePosition = new _Vector["default"]();
    this.target = null;
    this.currentPosition = new _Vector["default"]();
    this.currentScenePosition = new _Vector["default"]();
    this.lastPosition = this.currentPosition;
    this.mouseWheel = {
      y: 0
    };
  }
  /**
   * @param {MouseEvent} event
   * @return {Vector}
   */


  (0, _createClass2["default"])(Mouse, [{
    key: "getPosition",
    value: function getPosition(event) {
      return new _Vector["default"]({
        x: event.clientX,
        y: event.clientY
      });
    }
    /**
     * @param {MouseEvent} event
     * @return {EventTarget}
     */

  }, {
    key: "getTarget",
    value: function getTarget(event) {
      return event.target;
    }
    /**
     * @param {MouseEvent} event
     * @return {EventTarget[]}
     */

  }, {
    key: "getPath",
    value: function getPath(event) {
      return event.composedPath();
    }
    /**
     * @param {number} key
     */

  }, {
    key: "setButtonPressed",
    value: function setButtonPressed(key) {
      if (!this.isButtonPressed(key)) {
        this.keydowns.push(key);
      }

      this.position = this.getPosition(event);
      this.target = this.getTarget(event);
      this.path = this.getPath(event);
      this.scenePosition = this.toSceneCoord(this.position);
    }
    /**
     * @param {number} key
     */

  }, {
    key: "setButtonClicked",
    value: function setButtonClicked(key) {
      if (!this.isButtonClicked(key)) {
        this.keyclicks.push(key);
      }
    }
    /**
     * @param {number} key
     */

  }, {
    key: "setButtonDoubleClicked",
    value: function setButtonDoubleClicked(key) {
      if (!this.isButtonDoubleClicked(key)) {
        this.keydbclicks.push(key);
      }
    }
    /**
     * @param {number} key
     */

  }, {
    key: "setButtonReleased",
    value: function setButtonReleased(key) {
      if (this.isButtonPressed(key)) {
        var index = this.keydowns.indexOf(key);
        this.keydowns.splice(index, 1);
      }
    }
    /**
     * @param {number} deltaY
     */

  }, {
    key: "setMouseWheel",
    value: function setMouseWheel(deltaY) {
      this.mouseWheel.y = deltaY;
      this.target = this.getTarget(event);
    }
    /**
     * Return the distance between the currentPosition and the position
     * of the mouse on the click
     * @returns {Vector}
     */

  }, {
    key: "getDragDistance",
    value: function getDragDistance() {
      var x = this.currentPosition.x - this.position.x;
      var y = this.currentPosition.y - this.position.y;
      return new _Vector["default"]({
        x: x,
        y: y,
        z: 0
      });
    }
    /**
     * @param {Camera} camera
     * @returns {Vector}
     */

  }, {
    key: "getDragDistanceCamera",
    value: function getDragDistanceCamera(camera) {
      var x = this.currentPosition.x - this.position.x;
      var y = this.currentPosition.y - this.position.y;
      return camera.fromCameraScale(new _Vector["default"]({
        x: x,
        y: y,
        z: 0
      }));
    }
    /**
     * Calculate and return the area of drag (selection)
     * @param {Camera} camera
     * @return {{position: Vector, size: Size}}
     */

  }, {
    key: "getDragArea",
    value: function getDragArea(camera) {
      var dragDistance = this.getDragDistanceCamera(camera);
      var scenePosition = camera.fromCameraScale(this.scenePosition);
      var newX = scenePosition.x;
      var newY = scenePosition.y;

      if (dragDistance.x <= 0) {
        newX += dragDistance.x;
      }

      if (dragDistance.y <= 0) {
        newY += dragDistance.y;
      }

      return {
        position: new _Vector["default"]({
          x: newX,
          y: newY
        }),
        size: new _Size["default"]({
          width: Math.abs(dragDistance.x),
          height: Math.abs(dragDistance.y)
        })
      };
    }
    /**
     * Drag and drop (return the drag distance and update the initial position)
     * @param {Camera} camera
     * @return {Vector}
     */

  }, {
    key: "dragAndDrop",
    value: function dragAndDrop(camera) {
      var dragDistance = this.getDragDistanceCamera(camera);
      this.position = this.currentPosition;
      this.scenePosition = this.currentScenePosition;
      return dragDistance;
    }
    /**
     * @param {number} key
     * @return {Boolean}
     */

  }, {
    key: "isButtonPressed",
    value: function isButtonPressed(key) {
      var index = this.keydowns.indexOf(key);
      return index !== -1;
    }
    /**
     * @param {number} key
     * @return {Boolean}
     */

  }, {
    key: "isButtonClicked",
    value: function isButtonClicked(key) {
      var index = this.keyclicks.indexOf(key);
      return index !== -1;
    }
    /**
     * @param {number} key
     * @return {Boolean}
     */

  }, {
    key: "isButtonDoubleClicked",
    value: function isButtonDoubleClicked(key) {
      var index = this.keydbclicks.indexOf(key);
      return index !== -1;
    }
    /**
     * @return {Boolean}
     */

  }, {
    key: "isMouseMove",
    value: function isMouseMove() {
      return this.lastPosition.x !== this.currentPosition.x || this.lastPosition.y !== this.currentPosition.y;
    }
    /**
     * @return {{y: number}}
     */

  }, {
    key: "getMouseWheel",
    value: function getMouseWheel() {
      return this.mouseWheel;
    }
    /**
     * Convert position to scene coordinates
     * @param {Vector} position
     * @return {Vector}
     */

  }, {
    key: "toSceneCoord",
    value: function toSceneCoord(_ref) {
      var x = _ref.x,
          y = _ref.y;

      var _objectContext$canvas = _Context.objectContext.canvas.getBoundingClientRect(),
          sceneCanvasX = _objectContext$canvas.left,
          sceneCanvasY = _objectContext$canvas.top;

      return new _Vector["default"]({
        x: x - sceneCanvasX,
        y: y - sceneCanvasY
      });
    }
  }, {
    key: "setMouseMove",
    value: function setMouseMove() {
      this.lastPosition = this.currentPosition;
      this.currentPosition = this.getPosition(event);
      this.currentScenePosition = this.toSceneCoord(this.currentPosition);
    }
  }, {
    key: "clearKeyClicked",
    value: function clearKeyClicked() {
      this.keyclicks = [];
      this.keydbclicks = [];
    }
  }, {
    key: "clear",
    value: function clear() {
      this.clearKeyClicked();
      this.mouseWheel.y = 0;
    }
  }]);
  return Mouse;
}();

Mouse.MouseButton = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2
};
Mouse.CURSOR = {
  DEFAULT: 'default',
  CROSSHAIR: 'crosshair',
  POINTER: 'pointer',
  MOVE: 'move',
  MOVE_ENTITY: 'moveentity',
  RESIZE: 'ew-resize'
};
var _default = Mouse;
exports["default"] = _default;

},{"../pobject/Size.js":155,"../utils/Vector.js":206,"./Context.js":45,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],50:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _XmlSerDe = _interopRequireDefault(require("../serde/XmlSerDe.js"));

var _JsSerDe = _interopRequireDefault(require("../serde/JsSerDe.js"));

var _SchemaValidator = _interopRequireDefault(require("../schema/SchemaValidator.js"));

/**
 * Utils to manage the storage of data over time.
 * Handle clones and manage conflicts
 * @property {Map<string, *>} data
 */
var Storage = /*#__PURE__*/function () {
  /**
   * @type {Storage}
   */
  function Storage() {
    (0, _classCallCheck2["default"])(this, Storage);
    this.data = {};
  }
  /**
   * @returns {Storage}
   */


  (0, _createClass2["default"])(Storage, [{
    key: "update",

    /**
     * Update the storage (merge data)
     * @param {string} type
     * @param {Object|Array} data
     */
    value: function update(type, data) {
      this.data[type] = _.cloneDeep(data);
      return this;
    }
    /**
     * Update the storage and validate data
     * @param {string} type
     * @param {Object|Array} data
     * @param {boolean} serialize
     */

  }, {
    key: "updateAndValidate",
    value: function () {
      var _updateAndValidate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(type, data) {
        var serialize,
            validData,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                serialize = _args.length > 2 && _args[2] !== undefined ? _args[2] : true;
                _context.next = 3;
                return _SchemaValidator["default"].get().validate(type, data);

              case 3:
                validData = _context.sent;
                this.data[type] = _.cloneDeep(validData);
                return _context.abrupt("return", this);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateAndValidate(_x, _x2) {
        return _updateAndValidate.apply(this, arguments);
      }

      return updateAndValidate;
    }()
    /**
     * Load and validate data to the given target
     * @param {string} type
     * @param {Object|Array} data
     * @param {Object} target
     */

  }, {
    key: "load",
    value: function () {
      var _load = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(type, data, target) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.updateAndValidate(type, data, false);

              case 2:
                target.set(_.cloneDeep(this.data[type]));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function load(_x3, _x4, _x5) {
        return _load.apply(this, arguments);
      }

      return load;
    }()
    /**
     * Validate and save given data to the storage
     * @param {string} type
     * @param {Object|Array} data
     */

  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(type, data) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.updateAndValidate(type, data);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function save(_x6, _x7) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
    /**
     * Get data from the storage
     * @param {String} type
     * @return {Object}
     */

  }, {
    key: "fetch",
    value: function fetch(type) {
      var data = this.data[type];
      return data && _.cloneDeep(data);
    }
    /**
     * Export all data to the given format
     * @param {string} key
     * @param {Storage.format} format
     * @return {string|Object}
     */

  }, {
    key: "export",
    value: function _export(key, format) {
      var serde = this.getSerDe(format);
      return new serde().serialize(this.data[key]);
    }
    /**
     * Import data from the given data and format
     * @param {string} data
     * @param {Storage.format} format
     * @return {Map<string, *>}
     */

  }, {
    key: "import",
    value: function _import(data, format) {
      var serde = this.getSerDe(format);
      return new serde().deserialize(data);
    }
    /**
     * Save data to local storage
     * @param {string} key
     * @param {Object|Array} data
     */

  }, {
    key: "saveLocal",
    value: function () {
      var _saveLocal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(key, data) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.save(key, data);

              case 2:
                localStorage.setItem(key, JSON.stringify(this.data[key]));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function saveLocal(_x8, _x9) {
        return _saveLocal.apply(this, arguments);
      }

      return saveLocal;
    }()
    /**
     * Load data from local storage to the target object
     * @param {string} key
     * @param {Object} target
     * @return {Object}
     */

  }, {
    key: "loadLocal",
    value: function () {
      var _loadLocal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(key, target) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.loadJson(key, target, localStorage.getItem(key));

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function loadLocal(_x10, _x11) {
        return _loadLocal.apply(this, arguments);
      }

      return loadLocal;
    }()
    /**
     * Load data from the given json string
     * @param {string} key
     * @param {Object} target
     * @param {string} jsonString
     * @return {Object}
     */

  }, {
    key: "loadJson",
    value: function () {
      var _loadJson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(key, target, jsonString) {
        var data;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = JSON.parse(jsonString);
                _context6.next = 3;
                return this.load(key, data, target);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function loadJson(_x12, _x13, _x14) {
        return _loadJson.apply(this, arguments);
      }

      return loadJson;
    }()
  }, {
    key: "reset",
    value: function reset() {
      localStorage.clear();
    }
    /**
     * @param {Storage.format} format
     * @return {Class}
     */

  }, {
    key: "getSerDe",
    value: function getSerDe(format) {
      switch (format) {
        case Storage.format.XML:
          return _XmlSerDe["default"];

        case Storage.format.WEB:
          return _JsSerDe["default"];

        case Storage.format.BIN:
          return BinSerDe;

        default:
          throw new TypeError("Export format ".concat(format, " not recognized"));
      }
    }
  }], [{
    key: "get",
    value: function get() {
      if (!Storage.instance) {
        Storage.instance = new Storage();
      }

      return Storage.instance;
    }
  }]);
  return Storage;
}();

(0, _defineProperty2["default"])(Storage, "instance", void 0);
Storage.type = {
  ENTITY: 'entities',
  WORLD: 'world'
};
Storage.format = {
  XML: 'xml',
  WEB: 'web',
  BIN: 'bin'
};
var _default = Storage;
exports["default"] = _default;

},{"../schema/SchemaValidator.js":176,"../serde/JsSerDe.js":177,"../serde/XmlSerDe.js":179,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/regenerator":25}],51:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Keyboard = _interopRequireDefault(require("./Keyboard.js"));

var _Mouse = _interopRequireDefault(require("./Mouse.js"));

var _Constant = require("./Constant.js");

var _Size = _interopRequireDefault(require("../pobject/Size.js"));

var _Context = require("./Context.js");

/**
 * Handle the window event listeners (keyboard, mouse, ...)
 * @property {Keyboard} keyboard
 * @property {Mouse} mouse
 */
var Window = /*#__PURE__*/function () {
  /**
   * @type {Window}
   */
  function Window() {
    (0, _classCallCheck2["default"])(this, Window);
    this.keyboard = new _Keyboard["default"]();
    this.mouse = new _Mouse["default"]();
    this.size = new _Size["default"]({
      width: _Constant.SCENE_WIDTH,
      height: _Constant.SCENE_HEIGHT
    });
  }

  (0, _createClass2["default"])(Window, [{
    key: "init",
    value: function init() {
      this.initEvents();
      this.initCanvas();
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      _Context.objectContext.canvas.width = this.size.width;
      _Context.objectContext.canvas.height = this.size.height;
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this = this;

      document.addEventListener('keydown', function (event) {
        var key = event.keyCode;

        _this.keyboard.setKeyPressed(key);
      });
      document.addEventListener('keyup', function (event) {
        var key = event.keyCode;

        _this.keyboard.setKeyReleased(key);
      });
      document.addEventListener('click', function (event) {
        var key = event.button;

        _this.mouse.setButtonClicked(key);
      });
      document.addEventListener('dblclick', function (event) {
        var key = event.button;

        _this.mouse.setButtonDoubleClicked(key);
      });
      document.addEventListener('mousedown', function (event) {
        var key = event.button;

        _this.mouse.setButtonPressed(key);
      });
      document.addEventListener('mouseup', function (event) {
        var key = event.button;

        _this.mouse.setButtonReleased(key);
      });
      document.addEventListener('mousemove', function () {
        _this.mouse.setMouseMove();
      });
      document.addEventListener('wheel', function (event) {
        _this.mouse.setMouseWheel(event.deltaY);
      });
    }
    /**
     * @param {Size} size
     */

  }, {
    key: "setSize",
    value: function setSize(size) {
      this.size = size;
      this.initCanvas();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.mouse.clear();
    }
    /**
     * @return {Window}
     */

  }], [{
    key: "get",
    value: function get() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);
  return Window;
}();

(0, _defineProperty2["default"])(Window, "instance", null);
var _default = Window;
exports["default"] = _default;

},{"../pobject/Size.js":155,"./Constant.js":44,"./Context.js":45,"./Keyboard.js":47,"./Mouse.js":49,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],52:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Mesh = _interopRequireDefault(require("../core/Mesh.js"));

var _Window = _interopRequireDefault(require("../core/Window.js"));

var _Vertex = _interopRequireDefault(require("../utils/Vertex.js"));

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

var _EntityData2 = _interopRequireDefault(require("../project/data/EntityData.js"));

var _Style = _interopRequireDefault(require("../pobject/Style.js"));

var _Constant = require("../core/Constant.js");

var _Size = _interopRequireDefault(require("../pobject/Size.js"));

var _DataContext = _interopRequireDefault(require("../pobject/DataContext.js"));

var _Maths = _interopRequireDefault(require("../utils/Maths.js"));

var _Color = _interopRequireDefault(require("../utils/Color.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Abstract Entity class
 * @abstract
 * @extends {EntityData}
 * @todo Think to use a MeshManager for performance
 *
 * @property {Mesh} mesh
 * @property {number} id
 * @property {string} shape
 * @property {string} name
 * @property {Style} advancedStyle
 */
var Entity = /*#__PURE__*/function (_EntityData) {
  (0, _inherits2["default"])(Entity, _EntityData);

  var _super = _createSuper(Entity);

  /**
   * @param {EntityProps} props
   */
  function Entity(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Entity);
    _this = _super.call(this, props);

    if (_this.constructor === Entity) {
      throw new TypeError('Abstract class Entity cannot be instantiated directly');
    }

    _this.isBuffered = false;
    _this.isPhyiscsLoaded = false;
    _this.mesh = new _Mesh["default"](_this.position, _this.size);
    _this.meshBgColor = new _Mesh["default"]();
    _this.selected = false;
    _this.focused = false;
    _this.attachedEntities = null;
    _this.generated = true;
    _this.loading = false;
    _this.scalable = true;
    _this.rank = 20;
    return _this;
  }
  /**
   * Build the Entity (generate mesh, set properties ...)
   * @param {World} world
   * @return {boolean}
   */


  (0, _createClass2["default"])(Entity, [{
    key: "build",
    value: function build(world) {
      return this.init(world) && this.regenerate(world);
    }
    /**
     * End the build of the Entity
     */

  }, {
    key: "end",
    value: function end() {}
    /**
     * @param {World} world
     */

  }, {
    key: "update",
    value: function update(world) {}
    /**
     * Generate mesh for the rect
     * @param {World} world
     * @return {boolean}
     */

  }, {
    key: "generateMesh",
    value: function generateMesh(world) {
      var dataContext = this.startContext(world);

      if (dataContext) {
        this.drawContext(dataContext);
        return this.closeContext(dataContext);
      }
    }
    /**
     * Called before starting drawing entities (calculate size, init mesh position, ...)
     * @abstract
     * @param {World} world
     * @return {boolean}
     */

  }, {
    key: "init",
    value: function init(world) {
      throw new TypeError('Entity.init must be implemented');
    }
    /**
     * Draw the context
     * @param {DataContext} dataContext
     */

  }, {
    key: "drawContext",
    value: function drawContext(dataContext) {
      throw new TypeError('Entity.drawContext method must be implemented');
    }
    /**
     * Start the context
     * @param {World} world
     * @return {DataContext | null}
     */

  }, {
    key: "startContext",
    value: function startContext(world) {
      var scaleSize = this.getScaleSize(world.getCamera());

      var _this$getLargestRecta = this.getLargestRectangle(this.rotation, scaleSize),
          width = _this$getLargestRecta.width,
          height = _this$getLargestRecta.height;

      if (width > 0 && height > 0) {
        var center = new _Vector["default"]({
          x: scaleSize.width / 2,
          y: scaleSize.height / 2
        });
        var canvas = new OffscreenCanvas(width, height);
        var context = canvas.getContext(_Constant.CANVAS_CONTEXT_TYPE);
        var fillColor = this.getFillColor();

        var _this$getStyle = this.getStyle(),
            opacity = _this$getStyle.opacity,
            borderSize = _this$getStyle.borderSize;

        context.strokeStyle = this.getColor();

        if (fillColor) {
          context.fillStyle = fillColor;
        }

        if (_.isNumber(opacity)) {
          context.globalAlpha = opacity;
        }

        context.lineWidth = borderSize || 1;
        context.translate(width / 2, height / 2);
        context.rotate(this.rotation);
        context.translate(-center.x, -center.y);
        return new _DataContext["default"](center, context, scaleSize, world.getCamera(), world);
      }

      return null;
    }
    /**
     * @param {Camera} camera
     * @return {Size}
     */

  }, {
    key: "getScaleSize",
    value: function getScaleSize(camera) {
      return camera.toScaleSize(this.size, this.position);
    }
    /**
     * @param {Camera} camera
     * @return {Vector[]}
     */

  }, {
    key: "getScaleVertices",
    value: function getScaleVertices(camera) {
      return this.vertices.map(function (vertex) {
        return camera.toCameraScale(vertex);
      });
    }
    /**
     * Close drawing context
     * @param {DataContext} dataContext
     * @return {boolean}
     */

  }, {
    key: "closeContext",
    value: function closeContext(dataContext) {
      var fillColor = this.getFillColor();

      var _this$getStyle2 = this.getStyle(),
          borderSize = _this$getStyle2.borderSize;

      var context = dataContext.context,
          scaleSize = dataContext.scaleSize;

      if (this.getTextureId()) {
        borderSize && context.stroke();

        if (fillColor) {
          context.fill();
          context.globalCompositeOperation = 'destination-over';
        }

        context.clip();
        var canvasBg = this.meshBgColor.context.canvas;

        if (this.isBackgroundImageRepeat()) {
          context.fillStyle = context.createPattern(canvasBg, 'repeat');
          context.fill();
        } else {
          context.drawImage(this.meshBgColor.context.canvas, 0, 0, scaleSize.width, scaleSize.height);
        }
      } else if (fillColor) {
        context.stroke();
        context.fill();
      } else {
        context.stroke();
      }

      return this.updateMeshFromContext(context);
    }
    /**
     * Calculate the largest rectangle for given rotation and size
     * @param {number} angleRadian
     * @param {Size} size
     */

  }, {
    key: "getLargestRectangle",
    value: function getLargestRectangle(angleRadian, size) {
      var cosA = Math.cos(angleRadian);
      var sinA = Math.sin(angleRadian);
      var points = [{
        x: 0,
        y: 0
      }, {
        x: size.width,
        y: 0
      }, {
        x: size.width,
        y: size.height
      }, {
        x: 0,
        y: size.height
      }];
      var rotatedPoints = points.map(function (_ref) {
        var x = _ref.x,
            y = _ref.y;
        return {
          x: x * cosA - y * sinA,
          y: x * sinA + y * cosA
        };
      });
      var minX = rotatedPoints.reduce(function (mnX, current) {
        return mnX > current.x && current.x || mnX;
      }, rotatedPoints[0].x);
      var maxX = rotatedPoints.reduce(function (mxX, current) {
        return mxX < current.x && current.x || mxX;
      }, rotatedPoints[0].x);
      var minY = rotatedPoints.reduce(function (mnY, current) {
        return mnY > current.y && current.y || mnY;
      }, rotatedPoints[0].y);
      var maxY = rotatedPoints.reduce(function (mxY, current) {
        return mxY < current.y && current.y || mxY;
      }, rotatedPoints[0].y);
      return {
        width: Math.ceil(maxX - minX),
        height: Math.ceil(maxY - minY)
      };
    }
    /**
     * Generate the entity
     * @param {World} world
     */

  }, {
    key: "generate",
    value: function generate(world) {
      return this.isCanGenerate() && this.generateMesh(world);
    }
    /**
     * Regenerate the mesh
     * @param {World} world
     */

  }, {
    key: "regenerate",
    value: function regenerate(world) {
      return this.clearBuffer() && this.generate(world);
    }
    /**
     * Clone the entity (can be redefined for each type)
     */

  }, {
    key: "clone",
    value: function clone() {
      var cloned = _.cloneDeep(this);

      cloned.attachedEntities = null;
      return cloned;
    }
    /**
     * Close the build of the Entity
     * @param {World} world
     */

  }, {
    key: "close",
    value: function close(world) {
      this.position = this.mesh.position;
      this.loading = false;
    }
    /**
     * Send the Mesh to the renderer for drawing
     * @param {Renderer} renderer
     */

  }, {
    key: "draw",
    value: function draw(renderer) {
      if (this.isBuffered) {
        renderer.draw(this);
      }
    }
    /**
     * @override
     */

  }, {
    key: "setPosition",
    value: function setPosition(position) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Entity.prototype), "setPosition", this).call(this, position);
      this.mesh.position = position;
    }
    /**
     * Set the entity's position and generate the Mesh
     * @param {Vector} position
     */

  }, {
    key: "setPositionAndGenerate",
    value: function setPositionAndGenerate(position) {
      this.setPosition(position);

      if (!_.isEqual(this.position, position)) {
        this.setGenerated(false);
      }
    }
    /**
     * Set the entity's rotation
     * @param {Number} angle
     */

  }, {
    key: "setRotationAndGenerate",
    value: function setRotationAndGenerate(angle) {
      if (this.rotation !== angle) {
        (0, _get2["default"])((0, _getPrototypeOf2["default"])(Entity.prototype), "setRotation", this).call(this, angle);
        this.setGenerated(false);
      }
    }
    /**
     * @param {number} angleRadian
     */

  }, {
    key: "rotate",
    value: function rotate(angleRadian) {
      var newAngleRadian = this.rotation + angleRadian;
      this.setRotationDegree(_Maths["default"].toDegree(newAngleRadian));
    }
    /**
     * Set the entity's style and re-Generate the Mesh
     * @param {Style} style
     */

  }, {
    key: "setStyleAndGenerate",
    value: function setStyleAndGenerate(style) {
      this.setStyle(style);
      this.setGenerated(false);
    }
    /**
     * Set the entity's size
     * @param {Size} size
     */

  }, {
    key: "setSizeAndGenerate",
    value: function setSizeAndGenerate(size) {
      if (!_.isEqual(this.size, size)) {
        this.setGenerated(false);
      }

      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Entity.prototype), "setSize", this).call(this, size);
    }
    /**
     * Select the current entity (apply styles, ...).
     * Return true if the entity is selected
     * @return {boolean}
     */

  }, {
    key: "select",
    value: function select() {
      if (this.isSelectable()) {
        this.selected = true;
        var style = new _Style["default"]();
        style.setColor('#FFAE00');
        style.setBorderSize(3);
        style.setFillColorOpacity(this.props.getStyle().getFillColorOpacity());
        this.setStyleAndGenerate(style);
        return this.selected;
      }
    }
    /**
     * Focus the current entity (apply styles, ...)
     */

  }, {
    key: "focus",
    value: function focus() {
      this.focused = true;
      var style = new _Style["default"]();
      style.setBorderSize(3);
      style.setColor('#FFFFFF');
      style.setFillColorOpacity(this.props.getStyle().getFillColorOpacity());
      !this.selected && this.setStyleAndGenerate(style);
    }
    /**
     * Unfocus the current entity (apply styles, ...)
     */

  }, {
    key: "unfocus",
    value: function unfocus() {
      !this.selected && this.focused && this.setStyleAndGenerate(this.defineStyle());
      this.focused = false;
    }
    /**
     * Unselect the current entity (apply styles, ...)
     */

  }, {
    key: "unselect",
    value: function unselect() {
      this.selected && this.setStyleAndGenerate(this.defineStyle());
      this.selected = false;
    }
    /**
     * Lock/Unlock the entity for modification
     * @param {Boolean} lock
     */

  }, {
    key: "lock",
    value: function lock(_lock) {
      this.locked = _lock;
      this.setStyleAndGenerate(this.defineStyle());
    }
    /**
     * Show the entity
     * @param {boolean} visible
     */

  }, {
    key: "show",
    value: function show(visible) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Entity.prototype), "setVisible", this).call(this, visible);
    }
    /**
     * @override
     */

  }, {
    key: "defineStyle",
    value: function defineStyle() {
      var styleLocked = new _Style["default"]();
      styleLocked.setColor('#AAAAAA');
      styleLocked.setFillColor('#000000');
      styleLocked.setFillColorOpacity(0.01);
      return this.locked && styleLocked || this.props.style;
    }
    /**
     * Set new position for the Mesh
     * @param {Vector} position
     */

  }, {
    key: "setMeshPosition",
    value: function setMeshPosition(position) {
      this.mesh.position = position;
    }
    /**
     * Calculate the centroid (based on entity's size)
     * @return {Vector}
     */

  }, {
    key: "getCenter",
    value: function getCenter() {
      return new _Vector["default"]({
        x: this.size.width / 2,
        y: this.size.height / 2
      });
    }
    /**
     * Calculate centroid (based on entity's rotation)
     * @return {Vector}
     */

  }, {
    key: "getLargeCenter",
    value: function getLargeCenter() {
      var size = this.getLargestRectangle(this.rotation, this.size);
      return new _Vector["default"]({
        x: size.width / 2,
        y: size.height / 2
      });
    }
    /**
     * Convert current position to center position
     * @return {Vector}
     */

  }, {
    key: "toCenterPosition",
    value: function toCenterPosition() {
      var center = this.getLargeCenter();
      return new _Vector["default"]({
        x: this.position.x + center.x,
        y: this.position.y + center.y
      });
    }
    /**
     * Convert current position to large center position
     * @return {Vector}
     */

  }, {
    key: "toLargeCenterPosition",
    value: function toLargeCenterPosition() {
      var center = this.getLargeCenter();
      return new _Vector["default"]({
        x: this.position.x + center.x,
        y: this.position.y + center.y
      });
    }
    /**
     * Get current position from center position
     * @param {Vector} position
     * @return {Vector}
     */

  }, {
    key: "fromCenterPosition",
    value: function fromCenterPosition(position) {
      var center = this.getLargeCenter();
      return new _Vector["default"]({
        x: position.x - center.x,
        y: position.y - center.y
      });
    }
    /**
     * Move current entity from point A to B
     * @param {Vector} pointA absolute position
     * @param {Vector} pointB absolute position
     */

  }, {
    key: "movePointTo",
    value: function movePointTo(pointA, pointB) {
      var x = this.position.x + pointB.x - pointA.x;
      var y = this.position.y + pointB.y - pointA.y;
      this.setPosition(new _Vector["default"]({
        x: x,
        y: y
      }));
    }
    /**
     * Convert relative coordinate to absolute coordinate
     * @param {Vector} point Relative coordinate
     * @return {Vector}
     */

  }, {
    key: "toAbsolutePosition",
    value: function toAbsolutePosition(point) {
      return new _Vector["default"]({
        x: point.x + this.mesh.position.x,
        y: point.y + this.mesh.position.y,
        z: point.z
      });
    }
    /**
     * Convert absolute coordinate to relative coordinate
     * @param {Vector} point Absolute coordinate
     * @return {Vector}
     */

  }, {
    key: "fromAbsolutePosition",
    value: function fromAbsolutePosition(point) {
      return new _Vector["default"]({
        x: point.x - this.mesh.position.x,
        y: point.y - this.mesh.position.y
      });
    }
    /**
     * Convert absolute coordinate to relative coordinate
     * based to the center of the object
     * @param {Vector} point Absolute coordinate
     * @return {Vector}
     */

  }, {
    key: "toRelativeCenterPosition",
    value: function toRelativeCenterPosition(point) {
      var _this$toCenterPositio = this.toCenterPosition(),
          x = _this$toCenterPositio.x,
          y = _this$toCenterPositio.y;

      return new _Vector["default"]({
        x: point.x - x,
        y: point.y - y,
        z: point.z
      });
    }
    /**fromRelativeCenterPosition
     * Convert relative coordinate (based to the center) to absolute coordinate
     * @param {Vector} point relative coordinate
     */

  }, {
    key: "fromRelativeCenterPosition",
    value: function fromRelativeCenterPosition(point) {
      var _this$toCenterPositio2 = this.toCenterPosition(),
          x = _this$toCenterPositio2.x,
          y = _this$toCenterPositio2.y;

      return {
        x: x + point.x,
        y: y + point.y
      };
    }
    /**
     * Convert relative coordinate to absolute coordinate
     * @param {Vector} point Absolute coordinate
     */

  }, {
    key: "fromRelativePosition",
    value: function fromRelativePosition(point) {
      var _this$position = this.position,
          x = _this$position.x,
          y = _this$position.y;
      return {
        x: x + point.x,
        y: y + point.y
      };
    }
    /**
     * Update the Mesh position related to the distance
     * between the click mouse position and the actual
     * position of the mouse, and return the drag distance
     * @param {World} world
     * @return {Vector}
     */

  }, {
    key: "setMeshPositionByDragDistance",
    value: function setMeshPositionByDragDistance(world) {
      var window = _Window["default"].get();

      var dragDistance = window.mouse.getDragDistanceCamera(world.getCamera());
      this.setMeshPositionByVertex(dragDistance);
      return dragDistance;
    }
    /**
     * Update the mesh position using the given vertex, it used to adjusted the position of the entity if the vertex
     * is negated through X or Y axis
     * @param {Vector} vertex
     */

  }, {
    key: "setMeshPositionByVertex",
    value: function setMeshPositionByVertex(vertex) {
      var newX = this.position.x;
      var newY = this.position.y;

      if (vertex.x <= 0) {
        newX += vertex.x;
      }

      if (vertex.y <= 0) {
        newY += vertex.y;
      }

      this.setMeshPosition(new _Vector["default"]({
        x: newX,
        y: newY,
        z: this.position.z
      }));
    }
    /**
     * Update the mesh from a given context
     * @param {OffscreenCanvasRenderingContext2D} context
     */

  }, {
    key: "updateMeshFromContext",
    value: function updateMeshFromContext(context) {
      var sw = context.canvas.width,
          sh = context.canvas.height;

      if (sw && sh) {
        this.mesh.clear(new _Size["default"]({
          width: sw,
          height: sh
        }));
        this.mesh.context = context;
        return true;
      }

      return false;
    }
    /**
     * Clear the buffer and the Mesh
     */

  }, {
    key: "clearBuffer",
    value: function clearBuffer() {
      this.isBuffered = false;
      return this.mesh.clear();
    }
    /**
     * Set the buffer flag
     */

  }, {
    key: "addToBuffer",
    value: function addToBuffer() {
      if (!this.isBuffered) {
        this.isBuffered = true;
        return true;
      }

      return false;
    }
    /**
     * @param {World} world
     */

  }, {
    key: "delete",
    value: function _delete(world) {
      world.getPhysics().unloadEntity(this);
      world.getEntityManager()["delete"](this);
      this.entityChildIds.forEach(function (childId) {
        return world.removeEntityById(childId);
      });
    }
    /**
     * Unload physics for the entity
     * @param {PhysicsEngine} physicsEngine
     */

  }, {
    key: "unloadPhysics",
    value: function unloadPhysics(physicsEngine) {
      if (this.isPhyiscsLoaded) {
        physicsEngine.removeShape(this);
      }

      this.isPhyiscsLoaded = false;
    }
    /**
     * Add entity to physics Engine
     * @param {PhysicsEngine} physicsEngine
     * @param {World} world
     */

  }, {
    key: "loadPhysics",
    value: function loadPhysics(physicsEngine, world) {
      if (!this.isPhyiscsLoaded) {
        physicsEngine.add(this, world);
        this.isPhyiscsLoaded = true;
      }
    }
    /**
     * Check if point is inside the entity (using size)
     * Method can be overwrite by the sub-entities for more precision
     * @param {Vector} point absolute coordinate
     */

  }, {
    key: "includes",
    value: function includes(point) {
      var vertices = this.generateVertices();
      return _Vertex["default"].contains(vertices, this.fromAbsolutePosition(point));
    }
    /**
     * @return {Vector[]}
     */

  }, {
    key: "loadVertices",
    value: function loadVertices() {
      var _this$size = this.size,
          width = _this$size.width,
          height = _this$size.height;
      return [new _Vector["default"]({
        x: 0,
        y: 0
      }), new _Vector["default"]({
        x: width,
        y: 0
      }), new _Vector["default"]({
        x: width,
        y: height
      }), new _Vector["default"]({
        x: 0,
        y: height
      })];
    }
    /**
     * Generate vertices for the current entity (relative coordinates)
     * @return {Vector[]}
     */

  }, {
    key: "generateVertices",
    value: function generateVertices() {
      var vertices = this.loadVertices();
      return this.rotateVertices(vertices, this.rotation);
    }
    /**
     * @param {Vector[]} vertices
     * @param {number} rotation
     * @param {Vector} rotateCenter
     * @return {Vector[]}
     */

  }, {
    key: "rotateVertices",
    value: function rotateVertices(vertices, rotation) {
      var rotateCenter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _Vector["default"]();

      var _this$getLargestRecta2 = this.getLargestRectangle(rotation, this.size),
          mWidth = _this$getLargestRecta2.width,
          mHeight = _this$getLargestRecta2.height;

      var center = new _Vector["default"]({
        x: this.size.width / 2,
        y: this.size.height / 2
      });
      var mCenter = new _Vector["default"]({
        x: mWidth / 2,
        y: mHeight / 2
      });
      var newVertices = vertices;
      newVertices = _Vertex["default"].translate(newVertices, center, -1);
      newVertices = _Vertex["default"].rotate(newVertices, rotation, rotateCenter);
      newVertices = _Vertex["default"].translate(newVertices, mCenter);
      return newVertices;
    }
    /**
     * Is entity valid (not in loading mode, ...)
     */

  }, {
    key: "isValid",
    value: function isValid() {
      return !this.loading;
    }
    /**
     * Is entity active (valid, unlocked, ...)
     */

  }, {
    key: "isActive",
    value: function isActive() {
      return this.isValid() && !this.isLocked() && this.isVisible() && !this.isSubEntity();
    }
    /**
     * is the generate hook must be disabled
     */

  }, {
    key: "isCanGenerate",
    value: function isCanGenerate() {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Entity.prototype), "isVisible", this).call(this);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isGenerated",
    value: function isGenerated() {
      return this.generated;
    }
    /**
     * @param {boolean} generated
     */

  }, {
    key: "setGenerated",
    value: function setGenerated(generated) {
      this.generated = generated;
    }
    /**
     * @override
     */

  }, {
    key: "setTextureId",
    value: function setTextureId(textureId) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Entity.prototype), "setTextureId", this).call(this, textureId);
      this.setGenerated(false);
    }
    /**
     * @param {World} world
     */

  }, {
    key: "updateTexture",
    value: function updateTexture(world) {
      this.meshBgColor = this.getTexture(world);
    }
    /**
     * @param {World} world
     * @return {Mesh}
     */

  }, {
    key: "getTexture",
    value: function getTexture(world) {
      var texture = world.getAssetsManager().findAssetById(this.getTextureId());

      if (texture) {
        return texture.getType().getData();
      }

      return null;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isLoading",
    value: function isLoading() {
      return this.loading;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isScalable",
    value: function isScalable() {
      return this.scalable;
    }
    /**
     * @param {boolean} loading
     */

  }, {
    key: "setLoading",
    value: function setLoading(loading) {
      this.loading = loading;
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setIsBuffered",
    value: function setIsBuffered(value) {
      this.isBuffered = value;
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setIsPhyiscsLoaded",
    value: function setIsPhyiscsLoaded(value) {
      this.isPhyiscsLoaded = value;
    }
    /**
     * @param {Mesh} value
     */

  }, {
    key: "setMesh",
    value: function setMesh(value) {
      this.mesh = value;
    }
    /**
     * @param {Mesh} value
     */

  }, {
    key: "setMeshBgColor",
    value: function setMeshBgColor(value) {
      this.meshBgColor = value;
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setSelected",
    value: function setSelected(value) {
      this.selected = value;
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setFocused",
    value: function setFocused(value) {
      this.focused = value;
    }
    /**
     * @param {Entity[]} entities
     */

  }, {
    key: "setAttachedEntities",
    value: function setAttachedEntities(entities) {
      this.attachedEntities = entities;
    }
    /**
     * @param {number} index
     * @param {World} world
     * @return {Entity}
     */

  }, {
    key: "getLinkedEntityAt",
    value: function getLinkedEntityAt(index, world) {
      return world.findEntityById(this.entityLinkIds[index]);
    }
    /**
     * @param {Entity} entityA
     * @param {Entity} entityB
     */

  }, {
    key: "setLinkEntities",
    value: function setLinkEntities(entityA, entityB) {
      this.entityLinkIds[0] = entityA && entityA.id;
      this.entityLinkIds[1] = entityB && entityB.id;
    }
    /**
     * @param {Entity} entity
     */

  }, {
    key: "addEntityChild",
    value: function addEntityChild(entity) {
      this.entityChildIds.push(entity.id);
    }
    /**
     * @param {number} index
     * @param {Entity} entity
     */

  }, {
    key: "setLinkEntity",
    value: function setLinkEntity(index, entity) {
      this.entityLinkIds[index] = entity && entity.id;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getFillColor",
    value: function getFillColor() {
      var fillColor = this.style.getFillColor() || this.props.getStyle().getFillColor();
      var fillColorOpacity = this.style.getFillColorOpacity() || this.props.getStyle().getFillColorOpacity();
      return _Color["default"].hexToRgba(fillColor, fillColorOpacity);
    }
    /**
     * @return {string}
     */

  }, {
    key: "getColor",
    value: function getColor() {
      var color = this.style.getColor() || this.props.getStyle().getColor();
      var colorOpacity = this.style.getColorOpacity() || this.props.getStyle().getColorOpacity();
      return _Color["default"].hexToRgba(color, colorOpacity);
    }
  }]);
  return Entity;
}(_EntityData2["default"]);

var _default = Entity;
exports["default"] = _default;

},{"../core/Constant.js":44,"../core/Mesh.js":48,"../core/Window.js":51,"../pobject/DataContext.js":152,"../pobject/Size.js":155,"../pobject/Style.js":156,"../project/data/EntityData.js":164,"../utils/Color.js":197,"../utils/Maths.js":202,"../utils/Vector.js":206,"../utils/Vertex.js":207,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],53:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Entity2 = _interopRequireDefault(require("./Entity.js"));

var _AppState = _interopRequireDefault(require("../state/AppState.js"));

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Abstract EntityMotion class
 * @abstract
 * @extends {Entity}
 * @todo Refactor collision properties
 */
var EntityMotion = /*#__PURE__*/function (_Entity) {
  (0, _inherits2["default"])(EntityMotion, _Entity);

  var _super = _createSuper(EntityMotion);

  function EntityMotion() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, EntityMotion);
    _this = _super.call(this, props);

    if (_this.constructor === EntityMotion) {
      throw new TypeError('Abstract class EntityMotion cannot be instantiated directly');
    }

    _this.physics = _objectSpread({
      velocity: new _Vector["default"]({
        x: 0,
        y: 0
      }),
      angularVelocity: 0,
      speed: 0.7,
      density: 0.001,
      force: {
        x: 0,
        y: 0
      },
      fixed: false,
      motion: true
    }, props.physics);
    _this.condition = {
      die: {
        collisionWith: null
      }
    };
    _this.collision = {
      group: 0,
      category: 1,
      mask: 1
    };
    _this.die = false;
    _this.controlled = false;
    _this.visible = true;
    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(EntityMotion, [{
    key: "init",
    value: function init(world) {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(EntityMotion.prototype), "init", this).call(this, world);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isFixed",
    value: function isFixed() {
      return this.physics.fixed;
    }
    /**
     * If the entity is fixed, is automatically motionless
     * @param {boolean} isFixed
     */

  }, {
    key: "setFixed",
    value: function setFixed(isFixed) {
      this.physics.fixed = isFixed;
      isFixed && this.setMotion(false);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isMotion",
    value: function isMotion() {
      return this.physics.motion;
    }
    /**
     * @param {boolean} isMotion
     */

  }, {
    key: "setMotion",
    value: function setMotion(isMotion) {
      this.physics.motion = isMotion;
      isMotion && this.setFixed(false);
    }
    /**
     * Is the entity controlled
     * @return {boolean}
     */

  }, {
    key: "isControlled",
    value: function isControlled() {
      return this.controlled;
    }
    /**
     * Set the controlled flag
     * @param {boolean} value
     */

  }, {
    key: "setControlled",
    value: function setControlled(value) {
      this.controlled = value;
    }
    /**
     * Set velocity for physics props
     * @param {Vector} velocity
     */

  }, {
    key: "setVelocity",
    value: function setVelocity(_ref) {
      var x = _ref.x,
          y = _ref.y;
      this.physics.velocity = new _Vector["default"]({
        x: x,
        y: y
      });
    }
    /**
     * Set the force for physics props
     * @param {Vector} force
     */

  }, {
    key: "setForce",
    value: function setForce(force) {
      this.physics.force = force;
    }
    /**
     * Set angular velocity for physics props
     * @param {Vector} velocity
     */

  }, {
    key: "setAngularVelocity",
    value: function setAngularVelocity(velocity) {
      this.physics.angularVelocity = velocity;
    }
    /**
     * Get condition for dying (collision with another entity)
     */

  }, {
    key: "getDieCondition",
    value: function getDieCondition() {
      return this.condition.die.collisionWith;
    }
    /**
     * Set condition for dying (collision with another entity)
     */

  }, {
    key: "setDieCondition",
    value: function setDieCondition(entityId) {
      this.condition.die.collisionWith = entityId;
    }
    /**
     * Decide if the entity have to die
     * @param {PhysicsEngine} physicsEngine
     */

  }, {
    key: "haveToDie",
    value: function haveToDie(physicsEngine) {
      var entityId = this.getDieCondition();
      this.die |= entityId && physicsEngine.isCollide(this.getWorldId(), entityId);
    }
    /**
     * Is the entity dead
     */

  }, {
    key: "isDead",
    value: function isDead() {
      return this.die;
    }
    /**
     * Set the die flag
     * @param {Boolean} die
     */

  }, {
    key: "setDie",
    value: function setDie(die) {
      this.die = die;
    }
    /**
     * Get the WorldId (can be used by Engines to apply same
     * conditions for entities with th same worldId)
     * @return {number}
     */

  }, {
    key: "getWorldId",
    value: function getWorldId() {
      return this.worldId || this.id;
    }
    /**
     * Get the force position (center of the entity by default)
     */

  }, {
    key: "getForcePosition",
    value: function getForcePosition() {
      return new _Vector["default"]();
    }
    /**
     * Move the entity by distance related to a given point.
     * Move also attached entities
     * @param {EntityManager} entityManager
     * @param {Vector} point relative position
     * @param {Vector} target absolute position
     */

  }, {
    key: "moveRelativePointTo",
    value: function moveRelativePointTo(entityManager, point, target) {
      var diffDistance = new _Vector["default"]({
        x: target.x - this.position.x - point.x,
        y: target.y - this.position.y - point.y
      });
      this.setPositionX(this.position.x + diffDistance.x);
      this.setPositionY(this.position.y + diffDistance.y);
    }
    /**
     * Get attached entities
     * @param {EntityManager} entityManager
     */

  }, {
    key: "getAttachedEntities",
    value: function getAttachedEntities(entityManager) {
      if (this.attachedEntities === null) {
        this.attachedEntities = entityManager.getAttachedEntities(this);
      }

      return this.attachedEntities;
    }
    /**
     * Update collision filters for the physic engine
     * @param {PhysicsEngine} physicsEngine
     */

  }, {
    key: "updateCollisionFilters",
    value: function updateCollisionFilters(physicsEngine) {
      if (this.isPhyiscsLoaded) {
        physicsEngine.updateCollisionFilters(this);
      }
    }
    /**
     * Set the collision group
     * @param {Number} collisionGroup
     */

  }, {
    key: "setCollisionGroup",
    value: function setCollisionGroup(collisionGroup) {
      this.collision.group = collisionGroup;
    }
    /**
     * Set the collision mask
     * @param {Number} collisionMask
     */

  }, {
    key: "setCollisionMask",
    value: function setCollisionMask(collisionMask) {
      this.collision.mask = collisionMask;
    }
    /**
     * Update position for entities attached
     * @param {World} world
     * @param {PhysicsEngine} physicsEngine
     */

  }, {
    key: "updateJointPosition",
    value: function updateJointPosition(world, physicsEngine) {
      if (!this.isPhyiscsLoaded) {
        physicsEngine.updateJointPosition(world, this);
      }
    }
    /**
     * Get the relative position of a point inside the current entity
     * from a relative point inside a given entity
     * @param {Entity} entity
     * @param {Vector} point
     */

  }, {
    key: "getRelativeCenterPosition",
    value: function getRelativeCenterPosition(entity, point) {
      return this.toRelativeCenterPosition(entity.toAbsolutePosition(point));
    }
    /**
     * Update the style of the entity using data available on
     * tha application state (color, ...)
     */

  }, {
    key: "updateStyle",
    value: function updateStyle() {
      var color = _AppState["default"].get().data.color;

      color && this.props.getStyle().setFillColor(color);
      return this;
    }
    /**
     * @param {Object} value
     */

  }, {
    key: "setCondition",
    value: function setCondition(value) {
      this.condition = value;
    }
    /**
     * @param {Object} value
     */

  }, {
    key: "setCollision",
    value: function setCollision(value) {
      this.collision = value;
    }
  }]);
  return EntityMotion;
}(_Entity2["default"]);

var _default = EntityMotion;
exports["default"] = _default;

},{"../state/AppState.js":180,"../utils/Vector.js":206,"./Entity.js":52,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],54:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _LineEntity2 = _interopRequireDefault(require("../shape/LineEntity.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Attach Entity (abstract class) used to attach two entities
 * Different type of attach are possible (constraint, point, ...)
 * @abstract
 */
var AttachEntity = /*#__PURE__*/function (_LineEntity) {
  (0, _inherits2["default"])(AttachEntity, _LineEntity);

  var _super = _createSuper(AttachEntity);

  function AttachEntity(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AttachEntity);
    var physics = {
      stiffness: 1,
      angleA: null,
      angleB: null,
      angularStiffness: null
    };
    _this = _super.call(this, _objectSpread(_objectSpread({}, props), {}, {
      physics: physics
    }));
    _this.shape = _LineEntity2["default"].shapes.ATTACH;
    return _this;
  }

  return AttachEntity;
}(_LineEntity2["default"]);

var _default = AttachEntity;
exports["default"] = _default;

},{"../shape/LineEntity.js":55,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],55:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _EntityMotion2 = _interopRequireDefault(require("../../EntityMotion.js"));

var _Vector = _interopRequireDefault(require("../../../utils/Vector.js"));

var _Size = _interopRequireDefault(require("../../../pobject/Size.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LineEntity = /*#__PURE__*/function (_EntityMotion) {
  (0, _inherits2["default"])(LineEntity, _EntityMotion);

  var _super = _createSuper(LineEntity);

  function LineEntity(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, LineEntity);
    _this = _super.call(this, _objectSpread({
      name: 'Line'
    }, props));
    _this.shape = _EntityMotion2["default"].shapes.LINE;
    _this.vertices = [];
    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(LineEntity, [{
    key: "init",
    value: function init(world) {
      var dragDistance = this.setMeshPositionByDragDistance(world);
      this.size = new _Size["default"]({
        width: Math.abs(dragDistance.x),
        height: Math.abs(dragDistance.y)
      });

      if (dragDistance.x * dragDistance.y < 0) {
        this.vertices = [new _Vector["default"]({
          x: this.size.width,
          y: 0
        }), new _Vector["default"]({
          x: 0,
          y: this.size.height
        })];
      } else {
        this.vertices = [new _Vector["default"]({
          x: 0,
          y: 0
        }), new _Vector["default"]({
          x: this.size.width,
          y: this.size.height
        })];
      }

      return true;
    }
    /**
     * @override
     */

  }, {
    key: "drawContext",
    value: function drawContext(dataContext) {
      var context = dataContext.context,
          camera = dataContext.camera;

      var _camera$toCameraScale = camera.toCameraScale(this.vertices[0]),
          x0 = _camera$toCameraScale.x,
          y0 = _camera$toCameraScale.y;

      var _camera$toCameraScale2 = camera.toCameraScale(this.vertices[1]),
          x1 = _camera$toCameraScale2.x,
          y1 = _camera$toCameraScale2.y;

      context.beginPath();
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getLineWidth",
    value: function getLineWidth() {
      return Math.abs(this.vertices[1].x - this.vertices[0].x);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getLineHeight",
    value: function getLineHeight() {
      return Math.abs(this.vertices[1].y - this.vertices[0].y);
    }
  }]);
  return LineEntity;
}(_EntityMotion2["default"]);

var _default = LineEntity;
exports["default"] = _default;

},{"../../../pobject/Size.js":155,"../../../utils/Vector.js":206,"../../EntityMotion.js":53,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],56:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _StateManager = _interopRequireDefault(require("../state/StateManager.js"));

var ExceptionHandler = /*#__PURE__*/function () {
  function ExceptionHandler() {
    (0, _classCallCheck2["default"])(this, ExceptionHandler);
  }

  (0, _createClass2["default"])(ExceptionHandler, [{
    key: "handle",

    /**
     * @type {ExceptionHandler}
     */

    /**
     * @param {Error} e
     */
    value: function handle(e) {
      try {
        _StateManager["default"].get().stopAll();
      } catch (e) {
        _StateManager["default"].get().reset();
      }

      if (e instanceof TypeError) {
        throw e;
      }

      alert(e.message);
    }
    /**
     * @return {ExceptionHandler}
     */

  }], [{
    key: "get",
    value: function get() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);
  return ExceptionHandler;
}();

(0, _defineProperty2["default"])(ExceptionHandler, "instance", void 0);
var _default = ExceptionHandler;
exports["default"] = _default;

},{"../state/StateManager.js":181,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],57:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {PhysicError}
 * @extends {Error}
 */
var PhysicError = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(PhysicError, _Error);

  var _super = _createSuper(PhysicError);

  function PhysicError(message) {
    (0, _classCallCheck2["default"])(this, PhysicError);
    return _super.call(this, message);
  }

  return PhysicError;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

var _default = PhysicError;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17,"@babel/runtime/helpers/wrapNativeSuper":23}],58:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var ComponentExecutor = /*#__PURE__*/function () {
  /**
   * @private
   * @param {Component[]} targetComponents
   */
  function ComponentExecutor(targetComponents) {
    (0, _classCallCheck2["default"])(this, ComponentExecutor);
    this.targetComponents = targetComponents;
  }
  /**
   * @override
   * @param {Unit} unit
   */


  (0, _createClass2["default"])(ComponentExecutor, [{
    key: "execute",
    value: function execute(unit) {
      throw new TypeError("".concat(this.constructor.name, ".execute must be implemented"));
    }
    /**
     * @return {Component[]}
     */

  }, {
    key: "getTargetComponents",
    value: function getTargetComponents() {
      return this.targetComponents;
    }
  }], [{
    key: "get",
    value: function get() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);
  return ComponentExecutor;
}();

exports["default"] = ComponentExecutor;
(0, _defineProperty2["default"])(ComponentExecutor, "instance", void 0);

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],59:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var ExecutorRegistry = /*#__PURE__*/function () {
  /**
   * @private
   */
  function ExecutorRegistry() {
    (0, _classCallCheck2["default"])(this, ExecutorRegistry);

    /**
     * @private
     * @type {ComponentExecutor[]}
     */
    this.registry = [];
  }
  /**
   * @param {ComponentExecutor[]} registry
   */


  (0, _createClass2["default"])(ExecutorRegistry, [{
    key: "register",
    value: function register(registry) {
      this.registry = registry;
    }
    /**
     * @param {World} world
     */

  }, {
    key: "execute",
    value: function execute(world) {
      var unitManager = world.getUnitManager();
      this.registry.forEach(function (executor) {
        unitManager.getUnitsHasComponents(executor.getTargetComponents()).forEach(function (unit) {
          return executor.execute(unit);
        });
      });
    }
    /**
     * @return {ExecutorRegistry}
     */

  }], [{
    key: "get",
    value: function get() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);
  return ExecutorRegistry;
}();

exports["default"] = ExecutorRegistry;
(0, _defineProperty2["default"])(ExecutorRegistry, "instance", void 0);

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],60:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ComponentExecutor2 = _interopRequireDefault(require("./ComponentExecutor.js"));

var _MeshComponent = _interopRequireDefault(require("../component/internal/MeshComponent.js"));

var _World = _interopRequireDefault(require("../world/World.js"));

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

var _Constant = require("../core/Constant.js");

var _DataContext = _interopRequireDefault(require("../pobject/DataContext.js"));

var _TransformComponent = _interopRequireDefault(require("../component/internal/TransformComponent.js"));

var _GeometryHelper = _interopRequireDefault(require("../utils/GeometryHelper.js"));

var _Size = _interopRequireDefault(require("../pobject/Size.js"));

var _ShapeGenerator = _interopRequireDefault(require("../generator/ShapeGenerator.js"));

var _UnitHelper = _interopRequireDefault(require("../unit/UnitHelper.js"));

var _Mesh = _interopRequireDefault(require("../core/Mesh.js"));

var _Maths = _interopRequireDefault(require("../utils/Maths.js"));

var _GUIPropertyComponent = _interopRequireDefault(require("../component/internal/gui/property/GUIPropertyComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MeshGenerationExecutor = /*#__PURE__*/function (_ComponentExecutor) {
  (0, _inherits2["default"])(MeshGenerationExecutor, _ComponentExecutor);

  var _super = _createSuper(MeshGenerationExecutor);

  function MeshGenerationExecutor() {
    (0, _classCallCheck2["default"])(this, MeshGenerationExecutor);
    return _super.call(this, [_MeshComponent["default"], _TransformComponent["default"]]);
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(MeshGenerationExecutor, [{
    key: "execute",
    value: function execute(unit) {
      var meshComponent = unit.getComponent(_MeshComponent["default"]);
      var transformComponent = unit.getComponent(_TransformComponent["default"]);
      var propertyComponent = unit.getComponent(_GUIPropertyComponent["default"]);

      var world = _World["default"].get();

      if (!meshComponent.isGenerated()) {
        meshComponent.setVertices(_UnitHelper["default"].generateVertices(unit));

        if (!meshComponent.isEnabled() || !propertyComponent.isVisible() || !this.generate(unit.getId(), meshComponent, transformComponent, world)) {
          world.getMeshManager().clear(unit.getId());
        }

        meshComponent.setGenerated(true);
        meshComponent.setVersion(_Maths["default"].generateId());
      }
    }
    /**
     * @param {number} unitId
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {World} world
     */

  }, {
    key: "generate",
    value: function generate(unitId, meshComponent, transformComponent, world) {
      var dataContext = this.startContext(unitId, meshComponent, transformComponent, world);

      if (dataContext) {
        this.drawContext(meshComponent, transformComponent, dataContext);
        return this.closeContext(meshComponent, transformComponent, dataContext);
      }
    }
    /**
     * @param {number} unitId
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {World} world
     * @return {DataContext | null}
     */

  }, {
    key: "startContext",
    value: function startContext(unitId, meshComponent, transformComponent, world) {
      var camera = world.getCamera();
      var scaleSize = this.getScaleSize(camera, meshComponent, transformComponent);
      var rotation = transformComponent.getRotation();

      var _GeometryHelper$getLa = _GeometryHelper["default"].getLargestRectangle(rotation, scaleSize),
          width = _GeometryHelper$getLa.width,
          height = _GeometryHelper$getLa.height;

      if (width > 0 && height > 0) {
        var center = new _Vector["default"]({
          x: scaleSize.width / 2,
          y: scaleSize.height / 2
        });
        var canvas = new OffscreenCanvas(width, height);
        var context = canvas.getContext(_Constant.CANVAS_CONTEXT_TYPE);

        var _meshComponent$getSty = meshComponent.getStyle(),
            opacity = _meshComponent$getSty.opacity,
            borderSize = _meshComponent$getSty.borderSize,
            fillColor = _meshComponent$getSty.fillColor,
            color = _meshComponent$getSty.color;

        context.strokeStyle = color;

        if (fillColor) {
          context.fillStyle = fillColor;
        }

        if (_.isNumber(opacity)) {
          context.globalAlpha = opacity;
        }

        context.lineWidth = borderSize || 1;
        context.translate(width / 2, height / 2);
        context.rotate(rotation);
        context.translate(-center.x, -center.y);
        return new _DataContext["default"](unitId, center, context, scaleSize, world.getCamera(), world);
      }

      return null;
    }
    /**
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {DataContext} dataContext
     */

  }, {
    key: "drawContext",
    value: function drawContext(meshComponent, transformComponent, dataContext) {
      _ShapeGenerator["default"].get().draw(meshComponent, transformComponent, dataContext);
    }
    /**
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {DataContext} dataContext
     * @return {boolean}
     */

  }, {
    key: "closeContext",
    value: function closeContext(meshComponent, transformComponent, dataContext) {
      var _meshComponent$getSty2 = meshComponent.getStyle(),
          fillColor = _meshComponent$getSty2.fillColor,
          borderSize = _meshComponent$getSty2.borderSize;

      var context = dataContext.context,
          scaleSize = dataContext.scaleSize,
          world = dataContext.world,
          unitId = dataContext.unitId;

      if (meshComponent.getAssetId()) {
        var asset = dataContext.world.getAssetsManager().findAssetById(meshComponent.getAssetId());

        if (fillColor) {
          context.fill();
          context.globalCompositeOperation = 'destination-over';
        }

        context.clip();
        var canvasBg = asset.getType().getData().context.canvas;

        if (meshComponent.isImageRepeat()) {
          context.fillStyle = context.createPattern(canvasBg, 'repeat');
          context.fill();
        } else {
          context.drawImage(canvasBg, 0, 0, scaleSize.width, scaleSize.height);
        }

        borderSize && context.stroke();
      } else if (fillColor) {
        context.stroke();
        context.fill();
      } else {
        context.stroke();
      }

      return this.updateMeshFromContext(unitId, world.getMeshManager(), context);
    }
    /**
     * @param {World} world
     * @return {Mesh}
     */

  }, {
    key: "getTexture",
    value: function getTexture(world) {
      var texture = world.getAssetsManager().findAssetById(this.getTextureId());

      if (texture) {
        return texture.getType().getData();
      }

      return null;
    }
    /**
     * @param {number} unitId
     * @param {MeshManager} meshManager
     * @param {OffscreenCanvasRenderingContext2D} context
     */

  }, {
    key: "updateMeshFromContext",
    value: function updateMeshFromContext(unitId, meshManager, context) {
      var sw = context.canvas.width,
          sh = context.canvas.height;

      if (sw && sh) {
        var mesh = meshManager.get(unitId);

        if (!mesh) {
          mesh = new _Mesh["default"]();
        }

        mesh.clear(new _Size["default"]({
          width: sw,
          height: sh
        }));
        mesh.context = context;
        meshManager.set(unitId, mesh);
        return true;
      }

      return false;
    }
    /**
     * @param {Camera} camera
     * @param {MeshComponent} meshComponent
     * @param transformComponent
     * @return {Size}
     */

  }, {
    key: "getScaleSize",
    value: function getScaleSize(camera, meshComponent, transformComponent) {
      return camera.toScaleSize(meshComponent.getSize(), transformComponent.getPosition());
    }
  }]);
  return MeshGenerationExecutor;
}(_ComponentExecutor2["default"]);

exports["default"] = MeshGenerationExecutor;

},{"../component/internal/MeshComponent.js":33,"../component/internal/TransformComponent.js":35,"../component/internal/gui/property/GUIPropertyComponent.js":40,"../core/Constant.js":44,"../core/Mesh.js":48,"../generator/ShapeGenerator.js":61,"../pobject/DataContext.js":152,"../pobject/Size.js":155,"../unit/UnitHelper.js":183,"../utils/GeometryHelper.js":200,"../utils/Maths.js":202,"../utils/Vector.js":206,"../world/World.js":208,"./ComponentExecutor.js":58,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],61:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Unit = require("../unit/Unit.js");

var _RectShapeGenerator = _interopRequireDefault(require("./shape/rect/RectShapeGenerator.js"));

var _ArrowRightShapeGenerator = _interopRequireDefault(require("./shape/arrow/ArrowRightShapeGenerator.js"));

var _ArrowDownShapeGenerator = _interopRequireDefault(require("./shape/arrow/ArrowDownShapeGenerator.js"));

var _CircleShapeGenerator = _interopRequireDefault(require("./shape/circle/CircleShapeGenerator.js"));

var _ArrowRectRightShapeGenerator = _interopRequireDefault(require("./shape/arrowrect/ArrowRectRightShapeGenerator.js"));

var _ArrowRectDownShapeGenerator = _interopRequireDefault(require("./shape/arrowrect/ArrowRectDownShapeGenerator.js"));

var _GridShapeGenerator = _interopRequireDefault(require("./shape/grid/GridShapeGenerator.js"));

var _LineShapeGenerator = _interopRequireDefault(require("./shape/line/LineShapeGenerator.js"));

var _RectCrossShapeGenerator = _interopRequireDefault(require("./shape/rect/RectCrossShapeGenerator.js"));

/**
 * @abstract
 */
var ShapeGenerator = /*#__PURE__*/function () {
  function ShapeGenerator() {
    (0, _classCallCheck2["default"])(this, ShapeGenerator);
  }

  (0, _createClass2["default"])(ShapeGenerator, [{
    key: "draw",

    /**
     * @abstract
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {DataContext} dataContext
     */
    value: function draw(meshComponent, transformComponent, dataContext) {
      var type = this.getShapeTypeGenerator(meshComponent.getShape());
      new type().draw(meshComponent, transformComponent, dataContext);
    }
    /**
     * @param {string} shape
     * @return {Class<TypeShapeGenerator>}
     */

  }, {
    key: "getShapeTypeGenerator",
    value: function getShapeTypeGenerator(shape) {
      switch (shape) {
        case _Unit.PrimitiveShape.RECT:
          return _RectShapeGenerator["default"];

        case _Unit.PrimitiveShape.RECT_CROSS:
          return _RectCrossShapeGenerator["default"];

        case _Unit.PrimitiveShape.ARROW_RIGHT:
          return _ArrowRightShapeGenerator["default"];

        case _Unit.PrimitiveShape.ARROW_DOWN:
          return _ArrowDownShapeGenerator["default"];

        case _Unit.PrimitiveShape.ARROW_RECT_RIGHT:
          return _ArrowRectRightShapeGenerator["default"];

        case _Unit.PrimitiveShape.ARROW_RECT_DOWN:
          return _ArrowRectDownShapeGenerator["default"];

        case _Unit.PrimitiveShape.CIRCLE:
          return _CircleShapeGenerator["default"];

        case _Unit.PrimitiveShape.GRID:
          return _GridShapeGenerator["default"];

        case _Unit.PrimitiveShape.LINE:
          return _LineShapeGenerator["default"];

        default:
          throw new TypeError("".concat(shape, " not supported by ShapeGenerator"));
      }
    }
    /**
     * @return {ShapeGenerator}
     */

  }], [{
    key: "get",
    value: function get() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);
  return ShapeGenerator;
}();

exports["default"] = ShapeGenerator;
(0, _defineProperty2["default"])(ShapeGenerator, "instance", void 0);

},{"../unit/Unit.js":182,"./shape/arrow/ArrowDownShapeGenerator.js":63,"./shape/arrow/ArrowRightShapeGenerator.js":64,"./shape/arrowrect/ArrowRectDownShapeGenerator.js":66,"./shape/arrowrect/ArrowRectRightShapeGenerator.js":67,"./shape/circle/CircleShapeGenerator.js":69,"./shape/grid/GridShapeGenerator.js":70,"./shape/line/LineShapeGenerator.js":71,"./shape/rect/RectCrossShapeGenerator.js":72,"./shape/rect/RectShapeGenerator.js":73,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],62:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @abstract
 */
var TypeShapeGenerator = /*#__PURE__*/function () {
  function TypeShapeGenerator() {
    (0, _classCallCheck2["default"])(this, TypeShapeGenerator);
  }

  (0, _createClass2["default"])(TypeShapeGenerator, [{
    key: "draw",

    /**
     * @abstract
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {DataContext} dataContext
     */
    value: function draw(meshComponent, transformComponent, dataContext) {
      throw new TypeError("".concat(this.constructor.name, ".draw must be implemented"));
    }
  }]);
  return TypeShapeGenerator;
}();

exports["default"] = TypeShapeGenerator;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],63:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Vector = _interopRequireDefault(require("../../../utils/Vector.js"));

var _ArrowShapeGenerator2 = _interopRequireDefault(require("./ArrowShapeGenerator.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ArrowDownShapeGenerator = /*#__PURE__*/function (_ArrowShapeGenerator) {
  (0, _inherits2["default"])(ArrowDownShapeGenerator, _ArrowShapeGenerator);

  var _super = _createSuper(ArrowDownShapeGenerator);

  function ArrowDownShapeGenerator() {
    (0, _classCallCheck2["default"])(this, ArrowDownShapeGenerator);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ArrowDownShapeGenerator, [{
    key: "convertVertices",

    /**
     * @override
     */
    value: function convertVertices(vertices, size) {
      return [new _Vector["default"]({
        x: size.width / 2,
        y: 0
      }), new _Vector["default"]({
        x: size.width / 2,
        y: size.height
      })];
    }
  }]);
  return ArrowDownShapeGenerator;
}(_ArrowShapeGenerator2["default"]);

exports["default"] = ArrowDownShapeGenerator;

},{"../../../utils/Vector.js":206,"./ArrowShapeGenerator.js":65,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],64:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Vector = _interopRequireDefault(require("../../../utils/Vector.js"));

var _ArrowShapeGenerator2 = _interopRequireDefault(require("./ArrowShapeGenerator.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ArrowRightShapeGenerator = /*#__PURE__*/function (_ArrowShapeGenerator) {
  (0, _inherits2["default"])(ArrowRightShapeGenerator, _ArrowShapeGenerator);

  var _super = _createSuper(ArrowRightShapeGenerator);

  function ArrowRightShapeGenerator() {
    (0, _classCallCheck2["default"])(this, ArrowRightShapeGenerator);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ArrowRightShapeGenerator, [{
    key: "convertVertices",

    /**
     * @override
     */
    value: function convertVertices(vertices, size) {
      return vertices.map(function (_ref) {
        var x = _ref.x,
            y = _ref.y,
            z = _ref.z;
        return new _Vector["default"]({
          x: x,
          y: y + size.getHeight() / 2,
          z: z
        });
      });
    }
  }]);
  return ArrowRightShapeGenerator;
}(_ArrowShapeGenerator2["default"]);

exports["default"] = ArrowRightShapeGenerator;

},{"../../../utils/Vector.js":206,"./ArrowShapeGenerator.js":65,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],65:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _TypeShapeGenerator2 = _interopRequireDefault(require("../TypeShapeGenerator.js"));

var _UnitHelper = _interopRequireDefault(require("../../../unit/UnitHelper.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @abstract
 */
var ArrowShapeGenerator = /*#__PURE__*/function (_TypeShapeGenerator) {
  (0, _inherits2["default"])(ArrowShapeGenerator, _TypeShapeGenerator);

  var _super = _createSuper(ArrowShapeGenerator);

  function ArrowShapeGenerator() {
    (0, _classCallCheck2["default"])(this, ArrowShapeGenerator);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ArrowShapeGenerator, [{
    key: "draw",

    /**
     * @override
     */
    value: function draw(meshComponent, transformComponent, dataContext) {
      var context = dataContext.context;
      var vertices = this.convertVertices(meshComponent.getVertices(), meshComponent.getSize());
      context.beginPath();
      this.drawLine(dataContext, vertices);
      this.drawArrow(dataContext, vertices);
    }
    /**
     * @return {{headLength: number, headAngle: number}}
     */

  }, {
    key: "getArrowProps",
    value: function getArrowProps() {
      return {
        headLength: 20,
        headAngle: Math.PI / 12
      };
    }
    /**
     * @abstract
     * @param {Vector[]} vertices
     * @param {Size} size
     * @return {Vector[]}
     */

  }, {
    key: "convertVertices",
    value: function convertVertices(vertices, size) {
      throw new TypeError("".concat(this.constructor.name, ".convertVertices must be implemented"));
    }
    /**
     * @param {DataContext} dataContext
     * @param {Vector[]} vertices
     */

  }, {
    key: "drawLine",
    value: function drawLine(dataContext, vertices) {
      var context = dataContext.context,
          camera = dataContext.camera;

      var scaleVertices = _UnitHelper["default"].scaleVertices(camera, vertices);

      context.moveTo(scaleVertices[0].x, scaleVertices[0].y);
      context.lineTo(scaleVertices[1].x, scaleVertices[1].y);
    }
    /**
     * @param {DataContext} dataContext
     * @param {Vector[]} vertices
     */

  }, {
    key: "drawArrow",
    value: function drawArrow(dataContext, vertices) {
      var context = dataContext.context,
          camera = dataContext.camera;

      var scaleVertices = _UnitHelper["default"].scaleVertices(camera, vertices);

      var arrowProps = this.getArrowProps();
      var pointFrom = scaleVertices[0];
      var pointTo = scaleVertices[1];
      var dx = pointTo.x - pointFrom.x;
      var dy = pointTo.y - pointFrom.y;
      var angle = Math.atan2(dy, dx);
      context.moveTo(pointTo.x, pointTo.y);
      context.lineTo(pointTo.x - arrowProps.headLength * Math.cos(angle - arrowProps.headAngle), pointTo.y - arrowProps.headLength * Math.sin(angle - arrowProps.headAngle));
      context.moveTo(pointTo.x, pointTo.y);
      context.lineTo(pointTo.x - arrowProps.headLength * Math.cos(angle + arrowProps.headAngle), pointTo.y - arrowProps.headLength * Math.sin(angle + arrowProps.headAngle));
    }
  }]);
  return ArrowShapeGenerator;
}(_TypeShapeGenerator2["default"]);

exports["default"] = ArrowShapeGenerator;

},{"../../../unit/UnitHelper.js":183,"../TypeShapeGenerator.js":62,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],66:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ArrowRectShapeGenerator = _interopRequireDefault(require("./ArrowRectShapeGenerator.js"));

var _UnitHelper = _interopRequireDefault(require("../../../unit/UnitHelper.js"));

var _Vector = _interopRequireDefault(require("../../../utils/Vector.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ArrowRectDownShapeGenerator = /*#__PURE__*/function (_ArrowRectShapeGenera) {
  (0, _inherits2["default"])(ArrowRectDownShapeGenerator, _ArrowRectShapeGenera);

  var _super = _createSuper(ArrowRectDownShapeGenerator);

  function ArrowRectDownShapeGenerator() {
    (0, _classCallCheck2["default"])(this, ArrowRectDownShapeGenerator);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ArrowRectDownShapeGenerator, [{
    key: "drawScaleRect",

    /**
     * @override
     */
    value: function drawScaleRect(dataContext, vertices) {
      var context = dataContext.context,
          camera = dataContext.camera;

      var scaleVertices = _UnitHelper["default"].scaleVertices(camera, vertices);

      var _this$getArrowProps = this.getArrowProps(),
          headSize = _this$getArrowProps.headSize;

      var _scaleVertices$ = scaleVertices[1],
          x = _scaleVertices$.x,
          y = _scaleVertices$.y;
      context.rect(x - headSize / 2, y - headSize, headSize, headSize);
    }
    /**
     * @override
     */

  }, {
    key: "convertVertices",
    value: function convertVertices(vertices, size) {
      return [new _Vector["default"]({
        x: size.width / 2,
        y: 0
      }), new _Vector["default"]({
        x: size.width / 2,
        y: size.height
      })];
    }
  }]);
  return ArrowRectDownShapeGenerator;
}(_ArrowRectShapeGenerator["default"]);

exports["default"] = ArrowRectDownShapeGenerator;

},{"../../../unit/UnitHelper.js":183,"../../../utils/Vector.js":206,"./ArrowRectShapeGenerator.js":68,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],67:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ArrowRectShapeGenerator = _interopRequireDefault(require("./ArrowRectShapeGenerator.js"));

var _UnitHelper = _interopRequireDefault(require("../../../unit/UnitHelper.js"));

var _Vector = _interopRequireDefault(require("../../../utils/Vector.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ArrowRectRightShapeGenerator = /*#__PURE__*/function (_ArrowRectShapeGenera) {
  (0, _inherits2["default"])(ArrowRectRightShapeGenerator, _ArrowRectShapeGenera);

  var _super = _createSuper(ArrowRectRightShapeGenerator);

  function ArrowRectRightShapeGenerator() {
    (0, _classCallCheck2["default"])(this, ArrowRectRightShapeGenerator);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ArrowRectRightShapeGenerator, [{
    key: "drawScaleRect",

    /**
     * @override
     */
    value: function drawScaleRect(dataContext, vertices) {
      var context = dataContext.context,
          camera = dataContext.camera;

      var scaleVertices = _UnitHelper["default"].scaleVertices(camera, vertices);

      var _this$getArrowProps = this.getArrowProps(),
          headSize = _this$getArrowProps.headSize;

      var _scaleVertices$ = scaleVertices[1],
          x = _scaleVertices$.x,
          y = _scaleVertices$.y;
      context.rect(x - headSize, y - headSize / 2, headSize, headSize);
    }
    /**
     * @override
     */

  }, {
    key: "convertVertices",
    value: function convertVertices(vertices, size) {
      return vertices.map(function (_ref) {
        var x = _ref.x,
            y = _ref.y,
            z = _ref.z;
        return new _Vector["default"]({
          x: x,
          y: y + size.getHeight() / 2,
          z: z
        });
      });
    }
  }]);
  return ArrowRectRightShapeGenerator;
}(_ArrowRectShapeGenerator["default"]);

exports["default"] = ArrowRectRightShapeGenerator;

},{"../../../unit/UnitHelper.js":183,"../../../utils/Vector.js":206,"./ArrowRectShapeGenerator.js":68,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],68:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _TypeShapeGenerator2 = _interopRequireDefault(require("../TypeShapeGenerator.js"));

var _UnitHelper = _interopRequireDefault(require("../../../unit/UnitHelper.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @abstract
 */
var ArrowRectShapeGenerator = /*#__PURE__*/function (_TypeShapeGenerator) {
  (0, _inherits2["default"])(ArrowRectShapeGenerator, _TypeShapeGenerator);

  var _super = _createSuper(ArrowRectShapeGenerator);

  function ArrowRectShapeGenerator() {
    (0, _classCallCheck2["default"])(this, ArrowRectShapeGenerator);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ArrowRectShapeGenerator, [{
    key: "draw",

    /**
     * @override
     */
    value: function draw(meshComponent, transformComponent, dataContext) {
      var context = dataContext.context;
      var vertices = this.convertVertices(meshComponent.getVertices(), meshComponent.getSize());
      context.beginPath();
      this.drawLine(dataContext, vertices);
      this.drawScaleRect(dataContext, vertices);
    }
    /**
     * @return {{headSize: number}}
     */

  }, {
    key: "getArrowProps",
    value: function getArrowProps() {
      return {
        headSize: 10
      };
    }
    /**
     * @param {DataContext} dataContext
     * @param {Vector[]} vertices
     */

  }, {
    key: "drawLine",
    value: function drawLine(dataContext, vertices) {
      var context = dataContext.context,
          camera = dataContext.camera;

      var scaleVertices = _UnitHelper["default"].scaleVertices(camera, vertices);

      context.moveTo(scaleVertices[0].x, scaleVertices[0].y);
      context.lineTo(scaleVertices[1].x, scaleVertices[1].y);
    }
    /**
     * @abstract
     * @param {DataContext} dataContext
     * @param {Vector[]} vertices
     */

  }, {
    key: "drawScaleRect",
    value: function drawScaleRect(dataContext, vertices) {
      throw new TypeError("".concat(this.constructor.name, ".drawRect must be implemented"));
    }
    /**
     * @abstract
     * @param {Vector[]} vertices
     * @param {Size} size
     * @return {Vector[]}
     */

  }, {
    key: "convertVertices",
    value: function convertVertices(vertices, size) {
      throw new TypeError("".concat(this.constructor.name, ".convertVertices must be implemented"));
    }
  }]);
  return ArrowRectShapeGenerator;
}(_TypeShapeGenerator2["default"]);

exports["default"] = ArrowRectShapeGenerator;

},{"../../../unit/UnitHelper.js":183,"../TypeShapeGenerator.js":62,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],69:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _TypeShapeGenerator2 = _interopRequireDefault(require("../TypeShapeGenerator.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CircleShapeGenerator = /*#__PURE__*/function (_TypeShapeGenerator) {
  (0, _inherits2["default"])(CircleShapeGenerator, _TypeShapeGenerator);

  var _super = _createSuper(CircleShapeGenerator);

  function CircleShapeGenerator() {
    (0, _classCallCheck2["default"])(this, CircleShapeGenerator);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(CircleShapeGenerator, [{
    key: "draw",

    /**
     * @override
     */
    value: function draw(meshComponent, transformComponent, dataContext) {
      var center = dataContext.center,
          context = dataContext.context,
          scaleSize = dataContext.scaleSize;
      var sw = scaleSize.width;
      var radiusScale = Math.abs(sw / 2 - 1);
      context.ellipse(center.x, center.y, radiusScale, radiusScale, 0, 0, 2 * Math.PI);
    }
  }]);
  return CircleShapeGenerator;
}(_TypeShapeGenerator2["default"]);

exports["default"] = CircleShapeGenerator;

},{"../TypeShapeGenerator.js":62,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],70:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _TypeShapeGenerator2 = _interopRequireDefault(require("../TypeShapeGenerator.js"));

var _Size = _interopRequireDefault(require("../../../pobject/Size.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GridShapeGenerator = /*#__PURE__*/function (_TypeShapeGenerator) {
  (0, _inherits2["default"])(GridShapeGenerator, _TypeShapeGenerator);

  var _super = _createSuper(GridShapeGenerator);

  function GridShapeGenerator() {
    (0, _classCallCheck2["default"])(this, GridShapeGenerator);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GridShapeGenerator, [{
    key: "draw",

    /**
     * @override
     */
    value: function draw(meshComponent, transformComponent, dataContext) {
      var context = dataContext.context,
          scaleSize = dataContext.scaleSize;
      var sizeScaleRate = scaleSize.width / meshComponent.getSize().getWidth();
      var chunkEachSize = 40 * sizeScaleRate;
      var chunkNbrX = Math.ceil(scaleSize.width / chunkEachSize);
      var chunkNbrY = Math.ceil(scaleSize.height / chunkEachSize);
      var chunkSize = new _Size["default"]({
        width: chunkEachSize,
        height: chunkEachSize
      });
      context.rect(0, 0, scaleSize.width, scaleSize.height);
      Array.from(Array(chunkNbrX * chunkNbrY).keys()).forEach(function (iChunk) {
        context.rect(chunkSize.width * (iChunk % chunkNbrX), chunkSize.height * Math.floor(iChunk / chunkNbrX), chunkSize.width, chunkSize.height);
      });
    }
  }]);
  return GridShapeGenerator;
}(_TypeShapeGenerator2["default"]);

exports["default"] = GridShapeGenerator;

},{"../../../pobject/Size.js":155,"../TypeShapeGenerator.js":62,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],71:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _TypeShapeGenerator2 = _interopRequireDefault(require("../TypeShapeGenerator.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LineShapeGenerator = /*#__PURE__*/function (_TypeShapeGenerator) {
  (0, _inherits2["default"])(LineShapeGenerator, _TypeShapeGenerator);

  var _super = _createSuper(LineShapeGenerator);

  function LineShapeGenerator() {
    (0, _classCallCheck2["default"])(this, LineShapeGenerator);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LineShapeGenerator, [{
    key: "draw",

    /**
     * @override
     */
    value: function draw(meshComponent, transformComponent, dataContext) {
      var context = dataContext.context,
          camera = dataContext.camera;
      var vertices = meshComponent.getShapeVertices();

      var _camera$toCameraScale = camera.toCameraScale(vertices[0]),
          x0 = _camera$toCameraScale.x,
          y0 = _camera$toCameraScale.y;

      var _camera$toCameraScale2 = camera.toCameraScale(vertices[1]),
          x1 = _camera$toCameraScale2.x,
          y1 = _camera$toCameraScale2.y;

      context.beginPath();
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
    }
  }]);
  return LineShapeGenerator;
}(_TypeShapeGenerator2["default"]);

exports["default"] = LineShapeGenerator;

},{"../TypeShapeGenerator.js":62,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],72:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _TypeShapeGenerator2 = _interopRequireDefault(require("../TypeShapeGenerator.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RectCrossShapeGenerator = /*#__PURE__*/function (_TypeShapeGenerator) {
  (0, _inherits2["default"])(RectCrossShapeGenerator, _TypeShapeGenerator);

  var _super = _createSuper(RectCrossShapeGenerator);

  function RectCrossShapeGenerator() {
    (0, _classCallCheck2["default"])(this, RectCrossShapeGenerator);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(RectCrossShapeGenerator, [{
    key: "draw",

    /**
     * @override
     */
    value: function draw(meshComponent, transformComponent, dataContext) {
      var context = dataContext.context,
          scaleSize = dataContext.scaleSize;
      var width = scaleSize.width,
          height = scaleSize.height;
      context.beginPath();
      context.rect(0, 0, width, height);
      context.moveTo(0, 0);
      context.lineTo(width, height);
      context.moveTo(width, 0);
      context.lineTo(0, height);
    }
  }]);
  return RectCrossShapeGenerator;
}(_TypeShapeGenerator2["default"]);

exports["default"] = RectCrossShapeGenerator;

},{"../TypeShapeGenerator.js":62,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],73:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _TypeShapeGenerator2 = _interopRequireDefault(require("../TypeShapeGenerator.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RectShapeGenerator = /*#__PURE__*/function (_TypeShapeGenerator) {
  (0, _inherits2["default"])(RectShapeGenerator, _TypeShapeGenerator);

  var _super = _createSuper(RectShapeGenerator);

  function RectShapeGenerator() {
    (0, _classCallCheck2["default"])(this, RectShapeGenerator);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(RectShapeGenerator, [{
    key: "draw",

    /**
     * @override
     */
    value: function draw(meshComponent, transformComponent, dataContext) {
      var context = dataContext.context,
          scaleSize = dataContext.scaleSize;
      context.rect(0, 0, scaleSize.width, scaleSize.height);
    }
  }]);
  return RectShapeGenerator;
}(_TypeShapeGenerator2["default"]);

exports["default"] = RectShapeGenerator;

},{"../TypeShapeGenerator.js":62,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],74:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/**
 * Define the layout of the screen
 */
var Layout = function Layout() {
  (0, _classCallCheck2["default"])(this, Layout);
};

Layout.zone = {
  LEFT: 'left',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  FOOTER: 'footer'
};
Layout.type = {
  DRAW: 'draw',
  ACTION: 'action',
  STYLE: 'style',
  PANEL: 'panel',
  PANEL_ACTION: 'panel_action',
  STYLE_COLOR: 'style_color',
  ENTITY_ELEMENT: 'entity_element',
  UNIT_ELEMENT: 'unit_element',
  LAYER_ACTION: 'layer_action',
  LIST_ELEMENT: 'list_element',
  TEXT: 'text',
  FORM: 'form',
  FORM_ELEMENT: 'form_element',
  FORM_INLINE: 'form_inline',
  GRAPH: 'graph',
  ICON: 'icon',
  TREE: 'tree',
  ASSETS: 'assets',
  WRAPPER: 'wrapper',
  FOLDER_ELEMENT: 'folder_element',
  ASSET_ELEMENT: 'asset_element'
};
Layout.form = {
  CHECKBOX: 'checkbox',
  TEXT: 'text',
  DROPDOWN: 'dropdown',
  FILE: 'file',
  COLOR: 'color',
  RANGE: 'range'
};
var _default = Layout;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":12}],75:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _SelectorMenuItem = _interopRequireDefault(require("./items/edit/SelectorMenuItem.js"));

var _CameraMenuItem = _interopRequireDefault(require("./items/edit/CameraMenuItem.js"));

var _ScaleMenuItem = _interopRequireDefault(require("./items/edit/ScaleMenuItem.js"));

var _NewProjectMenuItem = _interopRequireDefault(require("./items/project/NewProjectMenuItem.js"));

var _SaveProjectMenuItem = _interopRequireDefault(require("./items/project/SaveProjectMenuItem.js"));

var _LoadProjectMenuItem = _interopRequireDefault(require("./items/project/LoadProjectMenuItem.js"));

var _ExportProjectMenuItem = _interopRequireDefault(require("./items/project/ExportProjectMenuItem.js"));

var _SimulateStartMenuItem = _interopRequireDefault(require("./items/action/SimulateStartMenuItem.js"));

var _SimulateStopMenuItem = _interopRequireDefault(require("./items/action/SimulateStopMenuItem.js"));

var _DeleteMenuItem = _interopRequireDefault(require("./items/action/DeleteMenuItem.js"));

var _DuplicateMenuItem = _interopRequireDefault(require("./items/action/DuplicateMenuItem.js"));

var _UndoMenuItem = _interopRequireDefault(require("./items/action/UndoMenuItem.js"));

var _MoveUpMenuItem = _interopRequireDefault(require("./items/action/MoveUpMenuItem.js"));

var _MoveDownMenuItem = _interopRequireDefault(require("./items/action/MoveDownMenuItem.js"));

var _MenuItemUI = _interopRequireDefault(require("../renderer/ui/MenuItemUI.js"));

var _AppMenuItem = _interopRequireDefault(require("./items/app/AppMenuItem.js"));

var _SceneMenuItem = _interopRequireDefault(require("./items/scene/SceneMenuItem.js"));

var _WorldMenuItem = _interopRequireDefault(require("./items/world/WorldMenuItem.js"));

var _RotateMenuItem = _interopRequireDefault(require("./items/edit/RotateMenuItem.js"));

var _MoveMenuItem = _interopRequireDefault(require("./items/edit/MoveMenuItem.js"));

var _AssetsMenuItem = _interopRequireDefault(require("./items/assets/AssetsMenuItem.js"));

var _UnitMenuItem = _interopRequireDefault(require("./items/unit/UnitMenuItem.js"));

/**
 * Define all menu items
 * @property {MenuItem[]} types
 * @property {MenuItemUI[]} items
 */
var Menu = /*#__PURE__*/function () {
  function Menu() {
    (0, _classCallCheck2["default"])(this, Menu);
    this.types = [//LEFT
    new _SelectorMenuItem["default"](), new _MoveMenuItem["default"](), new _ScaleMenuItem["default"](), new _RotateMenuItem["default"](), new _SimulateStartMenuItem["default"](), new _SimulateStopMenuItem["default"](), //TOP
    new _NewProjectMenuItem["default"](), new _LoadProjectMenuItem["default"](), new _SaveProjectMenuItem["default"](), new _ExportProjectMenuItem["default"](), new _DeleteMenuItem["default"](), new _DuplicateMenuItem["default"](), new _UndoMenuItem["default"](), new _MoveUpMenuItem["default"](), new _MoveDownMenuItem["default"](), new _CameraMenuItem["default"](), //RIGHT
    new _UnitMenuItem["default"](), new _WorldMenuItem["default"](), new _SceneMenuItem["default"](), //BOTTOM
    new _AssetsMenuItem["default"](), //FOOTER
    new _AppMenuItem["default"]()];
    this.items = [];
    this.setup();
  }
  /**
   * Setup the items list which calculate the position of each item
   * in the screen.
   */


  (0, _createClass2["default"])(Menu, [{
    key: "setup",
    value: function setup() {
      this.items = [];

      for (var iType in this.types) {
        var type = this.types[iType];
        type.menu = this;
        this.prepare(type);
      }
    }
    /**
     * Prepare the Menu and sub menu for rendering
     * @param {MenuItem} item
     * @param {Object} parent
     */

  }, {
    key: "prepare",
    value: function prepare(item) {
      var _this = this;

      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (item.isValid()) {
        var itemsZone = this.items.filter(function (pItem) {
          return pItem.element.zone === item.zone;
        });
        var existItem = this.items.find(function (pItem) {
          return pItem.element === item;
        });
        var lastIndex = itemsZone.length;

        if (existItem) {
          existItem.index = itemsZone.findIndex(function (pItem) {
            return pItem.element === item;
          });
        }

        var resultItem = existItem || new _MenuItemUI["default"](item, lastIndex, parent);
        !existItem && this.items.push(resultItem);

        if (item.items) {
          item.items.forEach(function (pItem) {
            return _this.prepare(pItem, resultItem);
          });
        }
      }
    }
    /**
     * Find menu item by index and zone
     * @param {Number} index (must start from 0)
     * @param {String} zone
     */

  }, {
    key: "findItemByZone",
    value: function findItemByZone(index, zone) {
      var itemsZone = this.items.filter(function (pItem) {
        return pItem.element.zone === zone;
      });
      return itemsZone[index];
    }
    /**
     * @param {MenuItem} element
     */

  }, {
    key: "findItemByElement",
    value: function findItemByElement(element) {
      return this.items.find(function (pItem) {
        return pItem.element === element;
      });
    }
    /**
     * Clean all menu items that is not valid anymore.
     */

  }, {
    key: "clean",
    value: function clean() {
      this.items = this.items.filter(function (item) {
        return item.element.isValid();
      });
    }
    /**
     * Select item in the menu.
     * @param {MenuItemUI} menuItem
     */

  }, {
    key: "selectItem",
    value: function selectItem(menuItem) {
      for (var iItem in this.items) {
        var item = this.items[iItem];
        var element = item.element;

        if (element.isSelected()) {
          menuItem !== item && element.stop(menuItem.element.stateCode);
        }

        if (element === menuItem.element) {
          element.run();
        }
      }
    }
  }, {
    key: "stopActionMenuItem",
    value: function stopActionMenuItem() {
      for (var iItem in this.items) {
        var item = this.items[iItem];
        var element = item.element;

        if (element.isSelected() && element.isAction()) {
          element.stop();
        }
      }
    }
    /**
     * @return {MenuItemUI}
     */

  }, {
    key: "getSelected",
    value: function getSelected() {
      return this.items.find(function (item) {
        return item.element.isSelected();
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.types.forEach(function (type) {
        return type.isValid() && type.update();
      });
      this.setup();
    }
    /**
     * Get Previous menu item
     * @param {MenuItem} type
     */

  }, {
    key: "getPrevItem",
    value: function getPrevItem(type) {
      var index = this.types.findIndex(function (pType) {
        return pType === type;
      });
      var element = this.types[index - 1];
      return this.items.find(function (pItem) {
        return pItem.element === element;
      });
    }
    /**
     * Set the UI Renderer (used to locate items in the layout)
     * @param {UIRenderer} uiRenderer
     */

  }, {
    key: "setUIRenderer",
    value: function setUIRenderer(uiRenderer) {
      this.uiRenderer = uiRenderer;
    }
    /**
     * @return {UIRenderer}
     */

  }, {
    key: "getUIRenderer",
    value: function getUIRenderer() {
      return this.uiRenderer;
    }
  }], [{
    key: "get",
    value: function get() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);
  return Menu;
}();

Menu.instance = null;
var _default = Menu;
exports["default"] = _default;

},{"../renderer/ui/MenuItemUI.js":173,"./items/action/DeleteMenuItem.js":77,"./items/action/DuplicateMenuItem.js":78,"./items/action/MoveDownMenuItem.js":80,"./items/action/MoveUpMenuItem.js":81,"./items/action/SimulateStartMenuItem.js":83,"./items/action/SimulateStopMenuItem.js":84,"./items/action/UndoMenuItem.js":85,"./items/app/AppMenuItem.js":86,"./items/assets/AssetsMenuItem.js":92,"./items/edit/CameraMenuItem.js":97,"./items/edit/MoveMenuItem.js":98,"./items/edit/RotateMenuItem.js":99,"./items/edit/ScaleMenuItem.js":100,"./items/edit/SelectorMenuItem.js":101,"./items/project/ExportProjectMenuItem.js":114,"./items/project/LoadProjectMenuItem.js":115,"./items/project/NewProjectMenuItem.js":116,"./items/project/SaveProjectMenuItem.js":117,"./items/scene/SceneMenuItem.js":120,"./items/unit/UnitMenuItem.js":127,"./items/world/WorldMenuItem.js":131,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],76:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _StateManager = _interopRequireDefault(require("../state/StateManager.js"));

var _Maths = _interopRequireDefault(require("../utils/Maths.js"));

/**
 * Define an item in the menu
 * @abstract
 *
 * @property {MenuItem|Menu} parent
 * @property {{items: MenuItem[]}} items
 * @property {MenuItem} element
 * @property {string} stateCode
 * @property {string} zone
 * @property {string} type
 * @property {callback} value The default value
 * @property {callback} event The event bound to the field
 */
var MenuItem = /*#__PURE__*/function () {
  function MenuItem(props, parent) {
    (0, _classCallCheck2["default"])(this, MenuItem);
    this.props = props;

    if (props.stateCode === undefined) {
      throw new TypeError('State code for MenuItem is required!');
    }

    if (props.zone === undefined) {
      throw new TypeError('Zone for MenuItem is required!');
    }

    if (props.type === undefined) {
      throw new TypeError('Type for MenuItem is required!');
    }

    this.stateManager = _StateManager["default"].get();
    this.zone = props.zone;
    this.type = props.type;
    this.data = {};
    this.menu = null;
    this.id = props.id || _Maths["default"].generateId();
    this.stateCode = props.stateCode;
    this.collapsed = false;
    this.parent = parent;
  }
  /**
   * @param {{bind: Object, list: *[]}} data
   */


  (0, _createClass2["default"])(MenuItem, [{
    key: "setData",
    value: function setData(data) {
      throw new TypeError('MenuItem.setData must be implemented');
    }
    /**
     * Define if the menu is selected
     * @return {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.stateCode && this.hasState(this.stateCode, this.id);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isCollapsed",
    value: function isCollapsed() {
      return this.collapsed;
    }
    /**
     * @param {boolean} collapsed
     */

  }, {
    key: "setCollapsed",
    value: function setCollapsed(collapsed) {
      this.collapsed = collapsed;
    }
    /**
     * Run the action when the item is trigerred
     */

  }, {
    key: "run",
    value: function run() {
      this.stateCode && this.startState();
    }
    /**
     * Update the items for the menu
     */

  }, {
    key: "update",
    value: function update() {
      this.items && this.items.forEach(function (item) {
        return item.isValid() && item.update();
      });
    }
    /**
     * Is menu item valid
     * @return {boolean}
     */

  }, {
    key: "isValid",
    value: function isValid() {
      return (!this.parent || this.parent.items.includes(this)) && !this.stateManager.isRunning();
    }
    /**
     * Stop the action when the item is unselected
     * @param {string} sourceState the source state that trigger the stop
     */

  }, {
    key: "stop",
    value: function stop() {
      var sourceState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.stopState();

      if (sourceState && this.stateManager.isActionState(sourceState)) {
        if (this.stateManager.isEditState(this.stateCode)) {
          this.startState();
        }
      }
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isAction",
    value: function isAction() {
      return this.stateManager.isActionState(this.stateCode);
    }
    /**
     * Start an action by type and data (state)
     */

  }, {
    key: "startState",
    value: function startState() {
      this.stateManager.startState(this.stateCode, this.id, this.data);
    }
    /**
     * Stop an action by type (state)
     */

  }, {
    key: "stopState",
    value: function stopState() {
      this.stateManager.stopState(this.stateCode, this.id);
    }
    /**
     * Is state has action of given type/id
     * @param {string} type
     * @param {number} id
     * @return {boolean}
     */

  }, {
    key: "hasState",
    value: function hasState(type, id) {
      return this.stateManager.hasState(type, id);
    }
    /**
     * Get previous item
     * @return {MenuItem}
     */

  }, {
    key: "getPrevItem",
    value: function getPrevItem() {
      return this.menu.getPrevItem(this);
    }
  }]);
  return MenuItem;
}();
/**
 * The event to call
 * @callback callback
 */


var _default = MenuItem;
exports["default"] = _default;

},{"../state/StateManager.js":181,"../utils/Maths.js":202,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],77:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DeleteMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(DeleteMenuItem, _MenuItem);

  var _super = _createSuper(DeleteMenuItem);

  function DeleteMenuItem() {
    (0, _classCallCheck2["default"])(this, DeleteMenuItem);
    return _super.call(this, {
      name: 'trash-alt',
      title: 'Delete',
      stateCode: 'ACTION_DELETE',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.TOP
    });
  }

  return DeleteMenuItem;
}(_MenuItem2["default"]);

var _default = DeleteMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],78:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DuplicateMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(DuplicateMenuItem, _MenuItem);

  var _super = _createSuper(DuplicateMenuItem);

  function DuplicateMenuItem() {
    (0, _classCallCheck2["default"])(this, DuplicateMenuItem);
    return _super.call(this, {
      name: 'copy',
      title: 'Duplicate',
      stateCode: 'ACTION_DUPLICATE',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.TOP
    });
  }

  return DuplicateMenuItem;
}(_MenuItem2["default"]);

var _default = DuplicateMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],79:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var HideItemMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(HideItemMenuItem, _MenuItem);

  var _super = _createSuper(HideItemMenuItem);

  /**
   * @param {Unit} unit
   */
  function HideItemMenuItem(unit) {
    var _this;

    (0, _classCallCheck2["default"])(this, HideItemMenuItem);
    _this = _super.call(this, {
      name: 'eye-slash',
      title: 'Hide',
      stateCode: 'ACTION_HIDE_ITEM',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.TOP
    });
    _this.data = {
      unit: unit
    };
    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(HideItemMenuItem, [{
    key: "isValid",
    value: function isValid() {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(HideItemMenuItem.prototype), "isValid", this).call(this) && this.data.unit.isVisible();
    }
  }]);
  return HideItemMenuItem;
}(_MenuItem2["default"]);

exports["default"] = HideItemMenuItem;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],80:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Move down entities in z-index
 */
var MoveDownMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(MoveDownMenuItem, _MenuItem);

  var _super = _createSuper(MoveDownMenuItem);

  function MoveDownMenuItem() {
    (0, _classCallCheck2["default"])(this, MoveDownMenuItem);
    return _super.call(this, {
      name: 'arrow-down',
      title: 'Move down',
      stateCode: 'ACTION_MOVE_DOWN',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.TOP
    });
  }

  return MoveDownMenuItem;
}(_MenuItem2["default"]);

var _default = MoveDownMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],81:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Move up entities in z-index
 */
var MoveUpMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(MoveUpMenuItem, _MenuItem);

  var _super = _createSuper(MoveUpMenuItem);

  function MoveUpMenuItem() {
    (0, _classCallCheck2["default"])(this, MoveUpMenuItem);
    return _super.call(this, {
      name: 'arrow-up',
      title: 'Move up',
      stateCode: 'ACTION_MOVE_UP',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.TOP
    });
  }

  return MoveUpMenuItem;
}(_MenuItem2["default"]);

var _default = MoveUpMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],82:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {ShowItemMenuItem}
 */
var ShowItemMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(ShowItemMenuItem, _MenuItem);

  var _super = _createSuper(ShowItemMenuItem);

  /**
   * @param {Unit} unit
   */
  function ShowItemMenuItem(unit) {
    var _this;

    (0, _classCallCheck2["default"])(this, ShowItemMenuItem);
    _this = _super.call(this, {
      name: 'eye',
      title: 'Show',
      stateCode: 'ACTION_SHOW_ITEM',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.TOP
    });
    _this.data = {
      unit: unit
    };
    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(ShowItemMenuItem, [{
    key: "isValid",
    value: function isValid() {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(ShowItemMenuItem.prototype), "isValid", this).call(this) && !this.data.unit.isVisible();
    }
  }]);
  return ShowItemMenuItem;
}(_MenuItem2["default"]);

exports["default"] = ShowItemMenuItem;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],83:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SimulateStartMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(SimulateStartMenuItem, _MenuItem);

  var _super = _createSuper(SimulateStartMenuItem);

  function SimulateStartMenuItem() {
    (0, _classCallCheck2["default"])(this, SimulateStartMenuItem);
    return _super.call(this, {
      name: 'play',
      title: 'Start the simulation',
      stateCode: 'SIMULATE',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.LEFT
    });
  }

  return SimulateStartMenuItem;
}(_MenuItem2["default"]);

var _default = SimulateStartMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],84:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SimulateStopMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(SimulateStopMenuItem, _MenuItem);

  var _super = _createSuper(SimulateStopMenuItem);

  function SimulateStopMenuItem() {
    (0, _classCallCheck2["default"])(this, SimulateStopMenuItem);
    return _super.call(this, {
      name: 'stop-circle',
      title: 'Stop the simulation',
      stateCode: 'SIMULATE',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.LEFT
    });
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(SimulateStopMenuItem, [{
    key: "isValid",
    value: function isValid() {
      return this.stateManager.isRunning();
    }
  }]);
  return SimulateStopMenuItem;
}(_MenuItem2["default"]);

var _default = SimulateStopMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],85:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UndoMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(UndoMenuItem, _MenuItem);

  var _super = _createSuper(UndoMenuItem);

  function UndoMenuItem() {
    (0, _classCallCheck2["default"])(this, UndoMenuItem);
    return _super.call(this, {
      name: 'reply',
      title: 'Undo',
      stateCode: 'ACTION_UNDO',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.TOP
    });
  }

  return UndoMenuItem;
}(_MenuItem2["default"]);

var _default = UndoMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],86:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * AppMenuItem Menu Item
 * Menu responsible for managing application information, props, ...
 */
var AppMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(AppMenuItem, _MenuItem);

  var _super = _createSuper(AppMenuItem);

  function AppMenuItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, AppMenuItem);
    _this = _super.call(this, {
      name: 'Information',
      stateCode: '',
      type: _Layout["default"].type.TEXT,
      zone: _Layout["default"].zone.FOOTER
    });
    _this.startTimeFPS = Date.now();
    _this.nbFrame = 0;
    _this.fps = 0;
    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(AppMenuItem, [{
    key: "update",
    value: function update() {
      this.updateFPS();
      this.text = ["FPS : ".concat(this.fps)];
    }
    /**
     * Update the FPS and show it in the title
     */

  }, {
    key: "updateFPS",
    value: function updateFPS() {
      var deltaTime = (Date.now() - this.startTimeFPS) / 1000;

      if (deltaTime > 1) {
        this.fps = Math.floor(this.nbFrame / deltaTime);
        this.nbFrame = 0;
        this.startTimeFPS = Date.now();
      } else {
        this.nbFrame++;
      }
    }
    /**
     * @override
     */

  }, {
    key: "isValid",
    value: function isValid() {
      return true;
    }
  }]);
  return AppMenuItem;
}(_MenuItem2["default"]);

var _default = AppMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],87:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {AddAssetMenuItem}
 */
var AddAssetMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(AddAssetMenuItem, _MenuItem);

  var _super = _createSuper(AddAssetMenuItem);

  function AddAssetMenuItem(parent) {
    var _this;

    (0, _classCallCheck2["default"])(this, AddAssetMenuItem);
    _this = _super.call(this, {
      name: 'plus',
      title: 'Add Asset',
      stateCode: 'ACTION_ADD_ASSET',
      type: _Layout["default"].type.ICON,
      zone: parent.zone
    });
    _this.parent = parent;
    return _this;
  }

  return AddAssetMenuItem;
}(_MenuItem2["default"]);

exports["default"] = AddAssetMenuItem;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],88:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _World = _interopRequireDefault(require("../../../world/World.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AddAssetSceneMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(AddAssetSceneMenuItem, _MenuItem);

  var _super = _createSuper(AddAssetSceneMenuItem);

  function AddAssetSceneMenuItem(parent) {
    var _this;

    (0, _classCallCheck2["default"])(this, AddAssetSceneMenuItem);
    _this = _super.call(this, {
      name: 'layer-group',
      title: 'Add selected Asset to the Scene',
      stateCode: 'ACTION_ADD_ASSET_SCENE',
      type: _Layout["default"].type.ICON,
      zone: parent.zone
    });
    _this.parent = parent;
    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(AddAssetSceneMenuItem, [{
    key: "isValid",
    value: function isValid() {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(AddAssetSceneMenuItem.prototype), "isValid", this).call(this) && _World["default"].get().getAssetsManager().getSelectedAsset();
    }
  }]);
  return AddAssetSceneMenuItem;
}(_MenuItem2["default"]);

exports["default"] = AddAssetSceneMenuItem;

},{"../../../world/World.js":208,"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],89:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _ListSelectElementMenuItem = _interopRequireDefault(require("../list/ListSelectElementMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {AssetElementFormMenuItem}
 */
var AssetElementFormMenuItem = /*#__PURE__*/function (_ListSelectElementMen) {
  (0, _inherits2["default"])(AssetElementFormMenuItem, _ListSelectElementMen);

  var _super = _createSuper(AssetElementFormMenuItem);

  function AssetElementFormMenuItem(parent, data) {
    (0, _classCallCheck2["default"])(this, AssetElementFormMenuItem);
    return _super.call(this, parent, data, {
      type: _Layout["default"].type.ASSET_ELEMENT
    });
  }

  return AssetElementFormMenuItem;
}(_ListSelectElementMenuItem["default"]);

exports["default"] = AssetElementFormMenuItem;

},{"../../Layout.js":74,"../list/ListSelectElementMenuItem.js":112,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],90:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _AddAssetMenuItem = _interopRequireDefault(require("./AddAssetMenuItem.js"));

var _AddFolderMenuItem = _interopRequireDefault(require("./folder/AddFolderMenuItem.js"));

var _AddAssetSceneMenuItem = _interopRequireDefault(require("./AddAssetSceneMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AssetsActionsMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(AssetsActionsMenuItem, _MenuItem);

  var _super = _createSuper(AssetsActionsMenuItem);

  function AssetsActionsMenuItem(parent) {
    var _this;

    (0, _classCallCheck2["default"])(this, AssetsActionsMenuItem);
    _this = _super.call(this, {
      name: '',
      stateCode: '',
      type: _Layout["default"].type.PANEL_ACTION,
      zone: parent.zone
    });
    _this.parent = parent;
    _this.items = [new _AddAssetMenuItem["default"]((0, _assertThisInitialized2["default"])(_this)), new _AddFolderMenuItem["default"]((0, _assertThisInitialized2["default"])(_this)), new _AddAssetSceneMenuItem["default"]((0, _assertThisInitialized2["default"])(_this))];
    return _this;
  }

  return AssetsActionsMenuItem;
}(_MenuItem2["default"]);

exports["default"] = AssetsActionsMenuItem;

},{"../../Layout.js":74,"../../MenuItem.js":76,"./AddAssetMenuItem.js":87,"./AddAssetSceneMenuItem.js":88,"./folder/AddFolderMenuItem.js":94,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],91:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ListMenuItem2 = _interopRequireDefault(require("../list/ListMenuItem.js"));

var _World = _interopRequireDefault(require("../../../world/World.js"));

var _AssetElementFormMenuItem = _interopRequireDefault(require("./AssetElementFormMenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {AssetsListFormMenuItem}
 */
var AssetsListFormMenuItem = /*#__PURE__*/function (_ListMenuItem) {
  (0, _inherits2["default"])(AssetsListFormMenuItem, _ListMenuItem);

  var _super = _createSuper(AssetsListFormMenuItem);

  function AssetsListFormMenuItem(parent, props) {
    (0, _classCallCheck2["default"])(this, AssetsListFormMenuItem);
    return _super.call(this, _objectSpread({
      zone: parent.zone,
      type: _Layout["default"].type.ASSETS
    }, props));
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(AssetsListFormMenuItem, [{
    key: "getListElementFormClass",
    value: function getListElementFormClass() {
      return _AssetElementFormMenuItem["default"];
    }
    /**
     * @override
     */

  }, {
    key: "getFormObject",
    value: function getFormObject() {
      return _World["default"].get().getAssetsManager().findAssetsByFolderId(null);
    }
    /**
     * @override
     */

  }, {
    key: "getActions",
    value: function getActions(bindObject) {
      return [];
    }
  }]);
  return AssetsListFormMenuItem;
}(_ListMenuItem2["default"]);

exports["default"] = AssetsListFormMenuItem;

},{"../../../world/World.js":208,"../../Layout.js":74,"../list/ListMenuItem.js":111,"./AssetElementFormMenuItem.js":89,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],92:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _PanelMenuItem2 = _interopRequireDefault(require("../panel/PanelMenuItem.js"));

var _AssetsActionsMenuItem = _interopRequireDefault(require("./AssetsActionsMenuItem.js"));

var _AssetsWrapperMenuItem = _interopRequireDefault(require("./AssetsWrapperMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AssetsMenuItem = /*#__PURE__*/function (_PanelMenuItem) {
  (0, _inherits2["default"])(AssetsMenuItem, _PanelMenuItem);

  var _super = _createSuper(AssetsMenuItem);

  function AssetsMenuItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, AssetsMenuItem);
    _this = _super.call(this, {
      name: 'folder',
      title: 'Assets',
      zone: _Layout["default"].zone.BOTTOM
    });
    _this.items = [new _AssetsActionsMenuItem["default"]((0, _assertThisInitialized2["default"])(_this)), new _AssetsWrapperMenuItem["default"]((0, _assertThisInitialized2["default"])(_this))];
    return _this;
  }

  return AssetsMenuItem;
}(_PanelMenuItem2["default"]);

exports["default"] = AssetsMenuItem;

},{"../../Layout.js":74,"../panel/PanelMenuItem.js":113,"./AssetsActionsMenuItem.js":90,"./AssetsWrapperMenuItem.js":93,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],93:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _FolderTreeMenuItem = _interopRequireDefault(require("./folder/FolderTreeMenuItem.js"));

var _AssetsListFormMenuItem = _interopRequireDefault(require("./AssetsListFormMenuItem.js"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AssetsWrapperMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(AssetsWrapperMenuItem, _MenuItem);

  var _super = _createSuper(AssetsWrapperMenuItem);

  function AssetsWrapperMenuItem(parent) {
    var _this;

    (0, _classCallCheck2["default"])(this, AssetsWrapperMenuItem);
    _this = _super.call(this, {
      name: 'assets-wrapper',
      stateCode: '',
      zone: parent.zone,
      type: _Layout["default"].type.WRAPPER
    });
    _this.parent = parent;
    _this.items = [new _FolderTreeMenuItem["default"]((0, _assertThisInitialized2["default"])(_this)), new _AssetsListFormMenuItem["default"]((0, _assertThisInitialized2["default"])(_this))];
    return _this;
  }

  return AssetsWrapperMenuItem;
}(_MenuItem2["default"]);

exports["default"] = AssetsWrapperMenuItem;

},{"../../Layout.js":74,"../../MenuItem.js":76,"./AssetsListFormMenuItem.js":91,"./folder/FolderTreeMenuItem.js":96,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],94:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {AddFolderMenuItem}
 */
var AddFolderMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(AddFolderMenuItem, _MenuItem);

  var _super = _createSuper(AddFolderMenuItem);

  function AddFolderMenuItem(parent) {
    var _this;

    (0, _classCallCheck2["default"])(this, AddFolderMenuItem);
    _this = _super.call(this, {
      name: 'folder-plus',
      title: 'Add Folder',
      stateCode: 'ACTION_ADD_FOLDER',
      type: _Layout["default"].type.ICON,
      zone: parent.zone
    });
    _this.parent = parent;
    return _this;
  }

  return AddFolderMenuItem;
}(_MenuItem2["default"]);

exports["default"] = AddFolderMenuItem;

},{"../../../Layout.js":74,"../../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],95:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../../Layout.js"));

var _ListSelectElementMenuItem = _interopRequireDefault(require("../../list/ListSelectElementMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {FolderElementFormMenuItem}
 */
var FolderElementFormMenuItem = /*#__PURE__*/function (_ListSelectElementMen) {
  (0, _inherits2["default"])(FolderElementFormMenuItem, _ListSelectElementMen);

  var _super = _createSuper(FolderElementFormMenuItem);

  function FolderElementFormMenuItem(parent, data) {
    (0, _classCallCheck2["default"])(this, FolderElementFormMenuItem);
    return _super.call(this, parent, data, {
      name: 'folder',
      type: _Layout["default"].type.FOLDER_ELEMENT
    });
  }

  return FolderElementFormMenuItem;
}(_ListSelectElementMenuItem["default"]);

exports["default"] = FolderElementFormMenuItem;

},{"../../../Layout.js":74,"../../list/ListSelectElementMenuItem.js":112,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],96:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../../Layout.js"));

var _World = _interopRequireDefault(require("../../../../world/World.js"));

var _ListMenuItem2 = _interopRequireDefault(require("../../list/ListMenuItem.js"));

var _FolderElementFormMenuItem = _interopRequireDefault(require("./FolderElementFormMenuItem.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FolderTreeMenuItem = /*#__PURE__*/function (_ListMenuItem) {
  (0, _inherits2["default"])(FolderTreeMenuItem, _ListMenuItem);

  var _super = _createSuper(FolderTreeMenuItem);

  function FolderTreeMenuItem(parent, props) {
    (0, _classCallCheck2["default"])(this, FolderTreeMenuItem);
    return _super.call(this, _objectSpread({
      zone: _Layout["default"].zone.BOTTOM,
      type: _Layout["default"].type.TREE
    }, props));
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(FolderTreeMenuItem, [{
    key: "getListElementFormClass",
    value: function getListElementFormClass() {
      return _FolderElementFormMenuItem["default"];
    }
    /**
     * @override
     */

  }, {
    key: "getFormObject",
    value: function getFormObject() {
      return _World["default"].get().getAssetsManager().findFolders(null);
    }
    /**
     * @override
     */

  }, {
    key: "getActions",
    value: function getActions(bindObject) {
      return [];
    }
  }]);
  return FolderTreeMenuItem;
}(_ListMenuItem2["default"]);

exports["default"] = FolderTreeMenuItem;

},{"../../../../world/World.js":208,"../../../Layout.js":74,"../../list/ListMenuItem.js":111,"./FolderElementFormMenuItem.js":95,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],97:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CameraMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(CameraMenuItem, _MenuItem);

  var _super = _createSuper(CameraMenuItem);

  function CameraMenuItem() {
    (0, _classCallCheck2["default"])(this, CameraMenuItem);
    return _super.call(this, {
      id: 1,
      name: 'video',
      title: 'Add camera',
      stateCode: 'ACTION_ADD_CAMERA',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.TOP
    });
  }

  return CameraMenuItem;
}(_MenuItem2["default"]);

var _default = CameraMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],98:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MoveMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(MoveMenuItem, _MenuItem);

  var _super = _createSuper(MoveMenuItem);

  function MoveMenuItem() {
    (0, _classCallCheck2["default"])(this, MoveMenuItem);
    return _super.call(this, {
      id: 1,
      name: 'arrows-alt',
      title: 'Select/Move',
      stateCode: 'DRAW_MOVE',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.LEFT
    });
  }

  return MoveMenuItem;
}(_MenuItem2["default"]);

exports["default"] = MoveMenuItem;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],99:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RotateMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(RotateMenuItem, _MenuItem);

  var _super = _createSuper(RotateMenuItem);

  function RotateMenuItem() {
    (0, _classCallCheck2["default"])(this, RotateMenuItem);
    return _super.call(this, {
      id: 1,
      name: 'redo',
      title: 'Select/Rotate',
      stateCode: 'DRAW_ROTATE',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.LEFT
    });
  }

  return RotateMenuItem;
}(_MenuItem2["default"]);

exports["default"] = RotateMenuItem;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],100:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ScaleMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(ScaleMenuItem, _MenuItem);

  var _super = _createSuper(ScaleMenuItem);

  function ScaleMenuItem() {
    (0, _classCallCheck2["default"])(this, ScaleMenuItem);
    return _super.call(this, {
      id: 1,
      name: 'expand-arrows-alt',
      title: 'Select/Scale',
      stateCode: 'DRAW_SCALE',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.LEFT
    });
  }

  return ScaleMenuItem;
}(_MenuItem2["default"]);

exports["default"] = ScaleMenuItem;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],101:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SelectorMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(SelectorMenuItem, _MenuItem);

  var _super = _createSuper(SelectorMenuItem);

  function SelectorMenuItem() {
    (0, _classCallCheck2["default"])(this, SelectorMenuItem);
    return _super.call(this, {
      id: 1,
      name: 'mouse-pointer',
      title: 'Select',
      stateCode: 'DRAW_SELECT',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.LEFT
    });
  }

  return SelectorMenuItem;
}(_MenuItem2["default"]);

var _default = SelectorMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],102:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _InputMenuItem2 = _interopRequireDefault(require("./InputMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Checkbox Menu Item
 */
var CheckboxMenuItem = /*#__PURE__*/function (_InputMenuItem) {
  (0, _inherits2["default"])(CheckboxMenuItem, _InputMenuItem);

  var _super = _createSuper(CheckboxMenuItem);

  /**
   * @override
   */
  function CheckboxMenuItem(parent, props, value, event) {
    var _this;

    (0, _classCallCheck2["default"])(this, CheckboxMenuItem);
    _this = _super.call(this, parent, props, value, event);
    _this.field = _Layout["default"].form.CHECKBOX;
    return _this;
  }

  return CheckboxMenuItem;
}(_InputMenuItem2["default"]);

var _default = CheckboxMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"./InputMenuItem.js":107,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],103:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _InputMenuItem2 = _interopRequireDefault(require("./InputMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Color Input Menu Item
 */
var ColorMenuItem = /*#__PURE__*/function (_InputMenuItem) {
  (0, _inherits2["default"])(ColorMenuItem, _InputMenuItem);

  var _super = _createSuper(ColorMenuItem);

  /**
   * @param {MenuItem} parent
   * @param {Object} props
   * @param {any} value The default value
   * @param {Function} event The event binded to the field
   */
  function ColorMenuItem(parent, props, value, event) {
    var _this;

    (0, _classCallCheck2["default"])(this, ColorMenuItem);
    _this = _super.call(this, parent, props, value, event);
    _this.field = _Layout["default"].form.COLOR;
    return _this;
  }

  return ColorMenuItem;
}(_InputMenuItem2["default"]);

exports["default"] = ColorMenuItem;

},{"../../Layout.js":74,"./InputMenuItem.js":107,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],104:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _InputMenuItem2 = _interopRequireDefault(require("./InputMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Checkbox Menu Item
 */
var DropdownMenuItem = /*#__PURE__*/function (_InputMenuItem) {
  (0, _inherits2["default"])(DropdownMenuItem, _InputMenuItem);

  var _super = _createSuper(DropdownMenuItem);

  /**
   * @param {MenuItem} parent
   * @param {Object} props
   * @param {any} value The default value
   * @param {Function} event The event binded to the field
   */
  function DropdownMenuItem(parent, props, value, event) {
    var _this;

    (0, _classCallCheck2["default"])(this, DropdownMenuItem);
    _this = _super.call(this, parent, props, value, event);
    _this.field = _Layout["default"].form.DROPDOWN;
    return _this;
  }

  return DropdownMenuItem;
}(_InputMenuItem2["default"]);

var _default = DropdownMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"./InputMenuItem.js":107,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],105:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _InputMenuItem2 = _interopRequireDefault(require("./InputMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * File Menu Item
 */
var FileMenuItem = /*#__PURE__*/function (_InputMenuItem) {
  (0, _inherits2["default"])(FileMenuItem, _InputMenuItem);

  var _super = _createSuper(FileMenuItem);

  /**
   * @param {MenuItem} parent
   * @param {Object} props
   * @param {any} value The default value
   * @param {Function} event The event bound to the field
   */
  function FileMenuItem(parent, props, value, event) {
    var _this;

    (0, _classCallCheck2["default"])(this, FileMenuItem);
    _this = _super.call(this, parent, props, value, event);
    _this.field = _Layout["default"].form.FILE;
    return _this;
  }

  return FileMenuItem;
}(_InputMenuItem2["default"]);

var _default = FileMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"./InputMenuItem.js":107,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],106:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _FileMenuItem = _interopRequireDefault(require("./FileMenuItem.js"));

var _TextMenuItem = _interopRequireDefault(require("./TextMenuItem.js"));

var _CheckboxMenuItem = _interopRequireDefault(require("./CheckboxMenuItem.js"));

var _DropdownMenuItem = _interopRequireDefault(require("./DropdownMenuItem.js"));

var _Maths = _interopRequireDefault(require("../../../utils/Maths.js"));

var _ObjectHelper = _interopRequireDefault(require("../../../utils/ObjectHelper.js"));

var _ColorMenuItem = _interopRequireDefault(require("./ColorMenuItem.js"));

var _RangeMenuItem = _interopRequireDefault(require("./RangeMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Form menu item
 * @property {FormField[]} fields
 */
var FormMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(FormMenuItem, _MenuItem);

  var _super = _createSuper(FormMenuItem);

  function FormMenuItem(props, parent) {
    var _this;

    (0, _classCallCheck2["default"])(this, FormMenuItem);
    _this = _super.call(this, props, parent);

    _this.init();

    return _this;
  }
  /**
   * Init the form menu
   */


  (0, _createClass2["default"])(FormMenuItem, [{
    key: "init",
    value: function init() {
      this.bindObject = null;
      this.object = null;
      this.items = [];
      this.version = 0;
      this.updateFields();
    }
    /**
     * @return {FormField[]}
     */

  }, {
    key: "getFields",
    value: function getFields() {
      return this.fields;
    }
    /**
     * @abstract
     * GenerateFields all fields
     * @return {FormField[]}
     */

  }, {
    key: "generateFields",
    value: function generateFields() {
      throw new TypeError('"generateFields" method must be implemented');
    }
    /**
     * @param {*} value
     */

  }, {
    key: "postUpdate",
    value: function postUpdate(value) {}
    /**
     * @abstract
     * Get the object bound to the form
     * @return {*}
     */

  }, {
    key: "getFormObject",
    value: function getFormObject() {
      throw new TypeError('"getFormObject" method must be implemented');
    }
    /**
     * Check if the form has to be updated
     * @return {boolean}
     */

  }, {
    key: "shouldUpdate",
    value: function shouldUpdate() {
      return true;
    }
    /**
     * @override
     */

  }, {
    key: "update",
    value: function update() {
      var object = this.getFormObject();
      this.bindObject = object;

      if (object) {
        if (this.isFormUpdated(object)) {
          this.object = _.cloneDeep(object);
          this.shouldUpdate() && this.updateForm();
        }
      } else {
        this.init();
      }
    }
    /**
     * Update the form
     */

  }, {
    key: "updateForm",
    value: function updateForm() {
      var _this2 = this;

      this.items = [];
      this.buildFormItems();
      this.version = _Maths["default"].generateId();
      this.items.forEach(function (item) {
        return item.version = _this2.version;
      });
    }
  }, {
    key: "updateFields",
    value: function updateFields() {
      this.fields = this.generateFields();
    }
    /**
     * @param {*} object
     * @return {boolean}
     */

  }, {
    key: "isObjectUpdated",
    value: function isObjectUpdated(object) {
      for (var iField in this.fields) {
        if (this.fields.hasOwnProperty(iField)) {
          var field = this.fields[iField];
          var getterString = this.getGetterString(field);

          try {
            if (this.getGetterForObject(field, object)() !== this.getGetterForObject(field, this.object)()) {
              return true;
            }
          } catch (e) {
            throw new ReferenceError("Error comparing ".concat(getterString, " for ").concat(object.constructor.name));
          }
        }
      }

      return false;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isFieldsUpdated",
    value: function isFieldsUpdated() {
      var actualFields = this.getFields();
      var newFields = this.generateFields();
      return !!actualFields.find(function (field, iField) {
        if (_.isArray(field.list)) {
          var actualValues = field.list.map(function (elem) {
            return "".concat(elem.value, "-").concat(elem.label);
          });
          var newValues = newFields[iField].list.map(function (elem) {
            return "".concat(elem.value, "-").concat(elem.label);
          });
          return !_ObjectHelper["default"].isEqual(actualValues, newValues);
        }
      });
    }
    /**
     * @param {*} object
     * @return {boolean}
     */

  }, {
    key: "isFormUpdated",
    value: function isFormUpdated(object) {
      if (!this.object || object.id !== this.object.id) {
        return true;
      } else if (this.isFieldsUpdated()) {
        this.updateFields();
        return true;
      }

      return this.isObjectUpdated(object);
    }
    /**
     * @return {Object}
     */

  }, {
    key: "getBindObject",
    value: function getBindObject() {
      return this.bindObject;
    }
    /**
     * Build form items
     */

  }, {
    key: "buildFormItems",
    value: function buildFormItems() {
      var _this3 = this;

      this.items = this.items.concat(this.fields.map(function (field) {
        var getter = _this3.getGetter(field);

        var setter = _this3.getSetter(field);

        var typeMenuItem = _this3.getMenuItem(field);

        return new typeMenuItem(_this3, {
          name: field.label,
          list: field.list || [],
          options: field.options
        }, getter, setter);
      }));
    }
    /**
     * @param {FormField} field
     * @return {callback}
     */

  }, {
    key: "getGetter",
    value: function getGetter(field) {
      return this.getGetterForObject(field, this.bindObject);
    }
    /**
     * @param {FormField} field
     * @param {Object} bindObject
     * @return {callback}
     */

  }, {
    key: "getGetterForObject",
    value: function getGetterForObject(field, bindObject) {
      var getterString = this.getGetterString(field);

      if (field.type !== _Layout["default"].form.FILE) {
        return function (getter, object) {
          return function () {
            return getter.reduce(function (pValue, cValue) {
              return pValue[cValue]();
            }, object);
          };
        }(getterString, bindObject);
      }

      return function () {
        return null;
      };
    }
    /**
     * @param {FormField} field
     * @return {string[]}
     */

  }, {
    key: "getGetterString",
    value: function getGetterString(field) {
      var bind = field.bind,
          type = field.type;
      var prefix = type === _Layout["default"].form.CHECKBOX ? 'is' : 'get';
      return bind.split('.').map(function (eBind) {
        return "".concat(prefix).concat(eBind.charAt(0).toUpperCase() + eBind.slice(1));
      });
    }
    /**
     * @param {FormField} field
     * @return {callback}
     */

  }, {
    key: "getSetter",
    value: function getSetter(field) {
      var setterString = this.getSetterString(field);
      return function (setter, self) {
        return function (value) {
          return setter.reduce(function (pValue, cValue, iValue) {
            return iValue !== setter.length - 1 ? pValue[cValue]() : pValue[cValue](value);
          }, self.bindObject);
        };
      }(setterString, this);
    }
    /**
     * @param {FormField} field
     * @return {string[]}
     */

  }, {
    key: "getSetterString",
    value: function getSetterString(field) {
      var bind = field.bind;
      var bindArray = bind.split('.');
      return bindArray.map(function (eBind, iBind) {
        return "".concat(iBind === bindArray.length - 1 ? 'set' : 'get').concat(eBind.charAt(0).toUpperCase() + eBind.slice(1));
      });
    }
    /**
     * @param {FormField} field
     * @return {Function}
     */

  }, {
    key: "getMenuItem",
    value: function getMenuItem(field) {
      switch (field.type) {
        case _Layout["default"].form.FILE:
          return _FileMenuItem["default"];

        case _Layout["default"].form.TEXT:
          return _TextMenuItem["default"];

        case _Layout["default"].form.CHECKBOX:
          return _CheckboxMenuItem["default"];

        case _Layout["default"].form.DROPDOWN:
          return _DropdownMenuItem["default"];

        case _Layout["default"].form.COLOR:
          return _ColorMenuItem["default"];

        case _Layout["default"].form.RANGE:
          return _RangeMenuItem["default"];

        default:
          throw new TypeError("Form item \"".concat(field.type, "\" not defined"));
      }
    }
  }]);
  return FormMenuItem;
}(_MenuItem2["default"]);

var _default = FormMenuItem;
exports["default"] = _default;

},{"../../../utils/Maths.js":202,"../../../utils/ObjectHelper.js":203,"../../Layout.js":74,"../../MenuItem.js":76,"./CheckboxMenuItem.js":102,"./ColorMenuItem.js":103,"./DropdownMenuItem.js":104,"./FileMenuItem.js":105,"./RangeMenuItem.js":108,"./TextMenuItem.js":109,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],107:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Input Menu Item
 * Can be used many times by the different menu items;
 * Start/run action must be handled differently
 */
var InputMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(InputMenuItem, _MenuItem);

  var _super = _createSuper(InputMenuItem);

  /**
   * @param {MenuItem} parent
   * @param {Object} props
   * @param {callback} value The default value
   * @param {callback} event The event bound to the field
   */
  function InputMenuItem(parent, props, value, event) {
    var _this;

    (0, _classCallCheck2["default"])(this, InputMenuItem);
    _this = _super.call(this, _objectSpread({
      stateCode: 'ACTION_FORM_UPDATE',
      zone: parent.zone,
      type: _Layout["default"].type.FORM_ELEMENT
    }, props));
    _this.parent = parent;
    _this.event = _this.callbackExecute(event);
    _this.value = _this.callbackExecute(value);
    _this.data = {
      event: event,
      item: (0, _assertThisInitialized2["default"])(_this)
    };
    return _this;
  }
  /**
   * Execute callback
   */


  (0, _createClass2["default"])(InputMenuItem, [{
    key: "callbackExecute",
    value: function callbackExecute(callback) {
      return function () {
        try {
          return callback();
        } catch (e) {
          console.warn("Callback error! ", e);
        }
      };
    }
    /**
     * Input menu item must be valid as the parent keeps valid
     * @override
     */

  }, {
    key: "isValid",
    value: function isValid() {
      return this.parent.isValid();
    }
  }]);
  return InputMenuItem;
}(_MenuItem2["default"]);

var _default = InputMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],108:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _InputMenuItem2 = _interopRequireDefault(require("./InputMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Color Input Menu Item
 */
var RangeMenuItem = /*#__PURE__*/function (_InputMenuItem) {
  (0, _inherits2["default"])(RangeMenuItem, _InputMenuItem);

  var _super = _createSuper(RangeMenuItem);

  /**
   * @override
   */
  function RangeMenuItem(parent, props, value, event) {
    var _this;

    (0, _classCallCheck2["default"])(this, RangeMenuItem);
    _this = _super.call(this, parent, props, value, event);
    _this.field = _Layout["default"].form.RANGE;
    return _this;
  }

  return RangeMenuItem;
}(_InputMenuItem2["default"]);

exports["default"] = RangeMenuItem;

},{"../../Layout.js":74,"./InputMenuItem.js":107,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],109:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _InputMenuItem2 = _interopRequireDefault(require("./InputMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Text Menu Item
 */
var TextMenuItem = /*#__PURE__*/function (_InputMenuItem) {
  (0, _inherits2["default"])(TextMenuItem, _InputMenuItem);

  var _super = _createSuper(TextMenuItem);

  /**
   * @param {MenuItem} parent
   * @param {Object} props
   * @param {any} value The default value
   * @param {Function} event The event binded to the field
   */
  function TextMenuItem(parent, props, value, event) {
    var _this;

    (0, _classCallCheck2["default"])(this, TextMenuItem);
    _this = _super.call(this, parent, props, value, event);
    _this.field = _Layout["default"].form.TEXT;
    return _this;
  }

  return TextMenuItem;
}(_InputMenuItem2["default"]);

var _default = TextMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"./InputMenuItem.js":107,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],110:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _PanelMenuItem2 = _interopRequireDefault(require("../panel/PanelMenuItem.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @property {{bind: Object, list: *[]}} data
 */
var ListElementMenuItem = /*#__PURE__*/function (_PanelMenuItem) {
  (0, _inherits2["default"])(ListElementMenuItem, _PanelMenuItem);

  var _super = _createSuper(ListElementMenuItem);

  function ListElementMenuItem(parent, data, props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ListElementMenuItem);
    _this = _super.call(this, _objectSpread({
      name: '',
      zone: parent.zone
    }, props));
    _this.parent = parent;

    _this.setData(data);

    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(ListElementMenuItem, [{
    key: "setData",
    value: function setData(data) {
      this.data = data;
      this.items = this.parent.getActions(this.data.bind);
    }
    /**
     * @override
     */

  }, {
    key: "isValid",
    value: function isValid() {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(ListElementMenuItem.prototype), "isValid", this).call(this) && this.parent.getFormObject().includes(this.getDataBind());
    }
    /**
     * @return {Object}
     */

  }, {
    key: "getDataBind",
    value: function getDataBind() {
      return this.data.bind;
    }
  }]);
  return ListElementMenuItem;
}(_PanelMenuItem2["default"]);

exports["default"] = ListElementMenuItem;

},{"../panel/PanelMenuItem.js":113,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],111:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _PanelMenuItem2 = _interopRequireDefault(require("../panel/PanelMenuItem.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {ListMenuItem}
 */
var ListMenuItem = /*#__PURE__*/function (_PanelMenuItem) {
  (0, _inherits2["default"])(ListMenuItem, _PanelMenuItem);

  var _super = _createSuper(ListMenuItem);

  function ListMenuItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ListMenuItem);
    _this = _super.call(this, _objectSpread({
      name: ''
    }, props));
    _this.items = [];
    return _this;
  }
  /**
   * @return {*[]}
   * @abstract
   */


  (0, _createClass2["default"])(ListMenuItem, [{
    key: "getFormObject",
    value: function getFormObject() {
      throw new TypeError('ListMenuItem.getFormObject must be implemented');
    }
    /**
     * @return {MenuItem[]}
     * @param {*} bindObject
     * @abstract
     */

  }, {
    key: "getActions",
    value: function getActions(bindObject) {
      throw new TypeError('ListMenuItem.getActions must be implemented');
    }
    /**
     * @return {MenuItem}
     * @abstract
     */

  }, {
    key: "getListElementFormClass",
    value: function getListElementFormClass() {
      throw new TypeError("".concat(this.constructor.name, ".getListElementFormClass must be implemented"));
    }
    /**
     * @override
     */

  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      (0, _get2["default"])((0, _getPrototypeOf2["default"])(ListMenuItem.prototype), "update", this).call(this);
      var list = this.getFormObject();
      this.items = list.map(function (each, index) {
        var element = _this2.items[index];
        var data = {
          bind: each,
          list: list
        };

        var listElementClass = _this2.getListElementFormClass();

        if (element && (element.data.bind !== each || element.data.list !== list)) {
          element.setData(data);
        }

        return element || new listElementClass(_this2, data);
      });
    }
  }]);
  return ListMenuItem;
}(_PanelMenuItem2["default"]);

var _default = ListMenuItem;
exports["default"] = _default;

},{"../panel/PanelMenuItem.js":113,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],112:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ListElementMenuItem2 = _interopRequireDefault(require("./ListElementMenuItem.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ListSelectElementMenuItem = /*#__PURE__*/function (_ListElementMenuItem) {
  (0, _inherits2["default"])(ListSelectElementMenuItem, _ListElementMenuItem);

  var _super = _createSuper(ListSelectElementMenuItem);

  function ListSelectElementMenuItem(parent, data, props) {
    (0, _classCallCheck2["default"])(this, ListSelectElementMenuItem);
    return _super.call(this, parent, data, _objectSpread({
      stateCode: 'ACTION_SELECT_LIST_ELEMENT'
    }, props));
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(ListSelectElementMenuItem, [{
    key: "isSelected",
    value: function isSelected() {
      return this.getDataBind().isSelected();
    }
  }]);
  return ListSelectElementMenuItem;
}(_ListElementMenuItem2["default"]);

exports["default"] = ListSelectElementMenuItem;

},{"./ListElementMenuItem.js":110,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],113:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PanelMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(PanelMenuItem, _MenuItem);

  var _super = _createSuper(PanelMenuItem);

  function PanelMenuItem(props) {
    (0, _classCallCheck2["default"])(this, PanelMenuItem);
    return _super.call(this, _objectSpread({
      stateCode: 'ACTION_COLLAPSE_PANEL',
      type: _Layout["default"].type.PANEL
    }, props));
  }

  return PanelMenuItem;
}(_MenuItem2["default"]);

exports["default"] = PanelMenuItem;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],114:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {ExportProjectMenuItem}
 */
var ExportProjectMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(ExportProjectMenuItem, _MenuItem);

  var _super = _createSuper(ExportProjectMenuItem);

  function ExportProjectMenuItem() {
    (0, _classCallCheck2["default"])(this, ExportProjectMenuItem);
    return _super.call(this, {
      name: 'file-export',
      title: 'Export project',
      stateCode: 'ACTION_EXPORT_PROJECT',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.TOP
    });
  }

  return ExportProjectMenuItem;
}(_MenuItem2["default"]);

var _default = ExportProjectMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],115:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {LoadProjectMenuItem}
 */
var LoadProjectMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(LoadProjectMenuItem, _MenuItem);

  var _super = _createSuper(LoadProjectMenuItem);

  function LoadProjectMenuItem() {
    (0, _classCallCheck2["default"])(this, LoadProjectMenuItem);
    return _super.call(this, {
      name: 'file-upload',
      title: 'Load project',
      stateCode: 'ACTION_LOAD_PROJECT',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.TOP
    });
  }

  return LoadProjectMenuItem;
}(_MenuItem2["default"]);

var _default = LoadProjectMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],116:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Create new project
 */
var NewProjectMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(NewProjectMenuItem, _MenuItem);

  var _super = _createSuper(NewProjectMenuItem);

  function NewProjectMenuItem() {
    (0, _classCallCheck2["default"])(this, NewProjectMenuItem);
    return _super.call(this, {
      name: 'file',
      title: 'New project',
      stateCode: 'ACTION_NEW_PROJECT',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.TOP
    });
  }

  return NewProjectMenuItem;
}(_MenuItem2["default"]);

var _default = NewProjectMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],117:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Save the project
 */
var SaveProjectMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(SaveProjectMenuItem, _MenuItem);

  var _super = _createSuper(SaveProjectMenuItem);

  function SaveProjectMenuItem() {
    (0, _classCallCheck2["default"])(this, SaveProjectMenuItem);
    return _super.call(this, {
      name: 'save',
      title: 'Save project',
      stateCode: 'ACTION_SAVE_PROJECT',
      type: _Layout["default"].type.ICON,
      zone: _Layout["default"].zone.TOP
    });
  }

  return SaveProjectMenuItem;
}(_MenuItem2["default"]);

var _default = SaveProjectMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../../MenuItem.js":76,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],118:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _World = _interopRequireDefault(require("../../../world/World.js"));

var _FormMenuItem2 = _interopRequireDefault(require("../form/FormMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {GridFormMenuItem}
 */
var GridFormMenuItem = /*#__PURE__*/function (_FormMenuItem) {
  (0, _inherits2["default"])(GridFormMenuItem, _FormMenuItem);

  var _super = _createSuper(GridFormMenuItem);

  function GridFormMenuItem(parent) {
    var _this;

    (0, _classCallCheck2["default"])(this, GridFormMenuItem);
    _this = _super.call(this, {
      name: '',
      stateCode: '',
      type: _Layout["default"].type.FORM,
      zone: parent.zone
    });
    _this.parent = parent;
    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(GridFormMenuItem, [{
    key: "generateFields",
    value: function generateFields() {
      return [{
        bind: 'showGrid',
        label: 'Show Grid',
        type: _Layout["default"].form.CHECKBOX
      }];
    }
    /**
     * @override
     */

  }, {
    key: "getFormObject",
    value: function getFormObject() {
      return _World["default"].get();
    }
  }]);
  return GridFormMenuItem;
}(_FormMenuItem2["default"]);

exports["default"] = GridFormMenuItem;

},{"../../../world/World.js":208,"../../Layout.js":74,"../form/FormMenuItem.js":106,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],119:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _World = _interopRequireDefault(require("../../../world/World.js"));

var _FormMenuItem2 = _interopRequireDefault(require("../form/FormMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Form properties
 */
var PositionFormMenuItem = /*#__PURE__*/function (_FormMenuItem) {
  (0, _inherits2["default"])(PositionFormMenuItem, _FormMenuItem);

  var _super = _createSuper(PositionFormMenuItem);

  function PositionFormMenuItem(parent) {
    var _this;

    (0, _classCallCheck2["default"])(this, PositionFormMenuItem);
    _this = _super.call(this, {
      name: '',
      stateCode: '',
      type: _Layout["default"].type.FORM,
      zone: parent.zone
    });
    _this.parent = parent;
    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(PositionFormMenuItem, [{
    key: "generateFields",
    value: function generateFields() {
      return [{
        bind: 'positionX',
        label: 'X',
        type: _Layout["default"].form.TEXT
      }, {
        bind: 'positionY',
        label: 'Y',
        type: _Layout["default"].form.TEXT
      }, {
        bind: 'positionZ',
        label: 'Z',
        type: _Layout["default"].form.TEXT
      }];
    }
    /**
     * @override
     */

  }, {
    key: "getFormObject",
    value: function getFormObject() {
      return _World["default"].get().getCamera();
    }
  }]);
  return PositionFormMenuItem;
}(_FormMenuItem2["default"]);

var _default = PositionFormMenuItem;
exports["default"] = _default;

},{"../../../world/World.js":208,"../../Layout.js":74,"../form/FormMenuItem.js":106,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],120:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _PositionFormMenuItem = _interopRequireDefault(require("./PositionFormMenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _PanelMenuItem2 = _interopRequireDefault(require("../panel/PanelMenuItem.js"));

var _GridFormMenuItem = _interopRequireDefault(require("./GridFormMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Menu responsible for managing scene properties
 */
var SceneMenuItem = /*#__PURE__*/function (_PanelMenuItem) {
  (0, _inherits2["default"])(SceneMenuItem, _PanelMenuItem);

  var _super = _createSuper(SceneMenuItem);

  function SceneMenuItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, SceneMenuItem);
    _this = _super.call(this, {
      name: 'Scene',
      zone: _Layout["default"].zone.RIGHT
    });
    _this.items = [new _PositionFormMenuItem["default"]((0, _assertThisInitialized2["default"])(_this)), new _GridFormMenuItem["default"]((0, _assertThisInitialized2["default"])(_this))];
    return _this;
  }

  return SceneMenuItem;
}(_PanelMenuItem2["default"]);

var _default = SceneMenuItem;
exports["default"] = _default;

},{"../../Layout.js":74,"../panel/PanelMenuItem.js":113,"./GridFormMenuItem.js":118,"./PositionFormMenuItem.js":119,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],121:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ListElementMenuItem2 = _interopRequireDefault(require("../list/ListElementMenuItem.js"));

var _ComponentFormMenuItem = _interopRequireDefault(require("./ComponentFormMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ComponentElementMenuItem = /*#__PURE__*/function (_ListElementMenuItem) {
  (0, _inherits2["default"])(ComponentElementMenuItem, _ListElementMenuItem);

  var _super = _createSuper(ComponentElementMenuItem);

  function ComponentElementMenuItem(parent, data) {
    var _this;

    (0, _classCallCheck2["default"])(this, ComponentElementMenuItem);
    _this = _super.call(this, parent, data, {
      name: data.bind.getName()
    });
    _this.items = [new _ComponentFormMenuItem["default"]((0, _assertThisInitialized2["default"])(_this))];
    return _this;
  }

  return ComponentElementMenuItem;
}(_ListElementMenuItem2["default"]);

exports["default"] = ComponentElementMenuItem;

},{"../list/ListElementMenuItem.js":110,"./ComponentFormMenuItem.js":122,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],122:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _FormMenuItem2 = _interopRequireDefault(require("../form/FormMenuItem.js"));

var _MeshComponent = _interopRequireDefault(require("../../../component/internal/MeshComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ComponentFormMenuItem = /*#__PURE__*/function (_FormMenuItem) {
  (0, _inherits2["default"])(ComponentFormMenuItem, _FormMenuItem);

  var _super = _createSuper(ComponentFormMenuItem);

  /**
   * @param {MenuItem} parent
   */
  function ComponentFormMenuItem(parent) {
    (0, _classCallCheck2["default"])(this, ComponentFormMenuItem);
    return _super.call(this, {
      name: '',
      stateCode: '',
      type: _Layout["default"].type.FORM,
      zone: parent.zone
    }, parent);
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(ComponentFormMenuItem, [{
    key: "generateFields",
    value: function generateFields() {
      return this.getFormObject().getFormFields();
    }
    /**
     * @override
     */

  }, {
    key: "postUpdate",
    value: function postUpdate(value) {
      var formObject = this.getFormObject();

      if (formObject instanceof _MeshComponent["default"]) {
        formObject.setGenerated(false);
      }
    }
    /**
     * @override
     */

  }, {
    key: "getFormObject",
    value: function getFormObject() {
      return this.parent.data.bind;
    }
  }]);
  return ComponentFormMenuItem;
}(_FormMenuItem2["default"]);

exports["default"] = ComponentFormMenuItem;

},{"../../../component/internal/MeshComponent.js":33,"../../Layout.js":74,"../form/FormMenuItem.js":106,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],123:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _World = _interopRequireDefault(require("../../../world/World.js"));

var _ListMenuItem2 = _interopRequireDefault(require("../list/ListMenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _ComponentElementMenuItem = _interopRequireDefault(require("./ComponentElementMenuItem.js"));

var _UnitSelector = _interopRequireDefault(require("../../../manager/UnitSelector.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ComponentListMenuItem = /*#__PURE__*/function (_ListMenuItem) {
  (0, _inherits2["default"])(ComponentListMenuItem, _ListMenuItem);

  var _super = _createSuper(ComponentListMenuItem);

  function ComponentListMenuItem(parent, props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ComponentListMenuItem);
    _this = _super.call(this, _objectSpread({
      zone: _Layout["default"].zone.RIGHT
    }, props));
    _this.parent = parent;
    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(ComponentListMenuItem, [{
    key: "getListElementFormClass",
    value: function getListElementFormClass() {
      return _ComponentElementMenuItem["default"];
    }
    /**
     * @override
     */

  }, {
    key: "getFormObject",
    value: function getFormObject() {
      var selectedUnit = _UnitSelector["default"].get().getFirstSelected(_World["default"].get());

      return selectedUnit && selectedUnit.getComponents().filter(function (component) {
        return !component.isHidden();
      }) || [];
    }
    /**
     * @override
     * @param {Unit} bindObject
     */

  }, {
    key: "getActions",
    value: function getActions(bindObject) {
      return [];
    }
  }]);
  return ComponentListMenuItem;
}(_ListMenuItem2["default"]);

exports["default"] = ComponentListMenuItem;

},{"../../../manager/UnitSelector.js":139,"../../../world/World.js":208,"../../Layout.js":74,"../list/ListMenuItem.js":111,"./ComponentElementMenuItem.js":121,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],124:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _ListSelectElementMenuItem = _interopRequireDefault(require("../list/ListSelectElementMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnitElementMenuItem = /*#__PURE__*/function (_ListSelectElementMen) {
  (0, _inherits2["default"])(UnitElementMenuItem, _ListSelectElementMen);

  var _super = _createSuper(UnitElementMenuItem);

  function UnitElementMenuItem(parent, data) {
    (0, _classCallCheck2["default"])(this, UnitElementMenuItem);
    return _super.call(this, parent, data, {
      type: _Layout["default"].type.UNIT_ELEMENT
    });
  }

  return UnitElementMenuItem;
}(_ListSelectElementMenuItem["default"]);

exports["default"] = UnitElementMenuItem;

},{"../../Layout.js":74,"../list/ListSelectElementMenuItem.js":112,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],125:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _FormMenuItem2 = _interopRequireDefault(require("../form/FormMenuItem.js"));

var _World = _interopRequireDefault(require("../../../world/World.js"));

var _UnitSelector = _interopRequireDefault(require("../../../manager/UnitSelector.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnitFormMenuItem = /*#__PURE__*/function (_FormMenuItem) {
  (0, _inherits2["default"])(UnitFormMenuItem, _FormMenuItem);

  var _super = _createSuper(UnitFormMenuItem);

  /**
   * @param {MenuItem} parent
   */
  function UnitFormMenuItem(parent) {
    (0, _classCallCheck2["default"])(this, UnitFormMenuItem);
    return _super.call(this, {
      name: '',
      stateCode: '',
      type: _Layout["default"].type.FORM,
      zone: parent.zone
    }, parent);
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(UnitFormMenuItem, [{
    key: "generateFields",
    value: function generateFields() {
      return [{
        bind: 'name',
        label: 'Name',
        type: _Layout["default"].form.TEXT
      }];
    }
    /**
     * @override
     */

  }, {
    key: "getFormObject",
    value: function getFormObject() {
      return _UnitSelector["default"].get().getFirstSelected(_World["default"].get());
    }
  }]);
  return UnitFormMenuItem;
}(_FormMenuItem2["default"]);

exports["default"] = UnitFormMenuItem;

},{"../../../manager/UnitSelector.js":139,"../../../world/World.js":208,"../../Layout.js":74,"../form/FormMenuItem.js":106,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],126:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _World = _interopRequireDefault(require("../../../world/World.js"));

var _ListMenuItem2 = _interopRequireDefault(require("../list/ListMenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _UnitElementMenuItem = _interopRequireDefault(require("./UnitElementMenuItem.js"));

var _GUIPendingComponent = _interopRequireDefault(require("../../../component/internal/gui/GUIPendingComponent.js"));

var _HideItemMenuItem = _interopRequireDefault(require("../action/HideItemMenuItem.js"));

var _ShowItemMenuItem = _interopRequireDefault(require("../action/ShowItemMenuItem.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnitListMenuItem = /*#__PURE__*/function (_ListMenuItem) {
  (0, _inherits2["default"])(UnitListMenuItem, _ListMenuItem);

  var _super = _createSuper(UnitListMenuItem);

  function UnitListMenuItem(parent, props) {
    var _this;

    (0, _classCallCheck2["default"])(this, UnitListMenuItem);
    _this = _super.call(this, _objectSpread({
      zone: _Layout["default"].zone.RIGHT
    }, props));
    _this.parent = parent;
    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(UnitListMenuItem, [{
    key: "getListElementFormClass",
    value: function getListElementFormClass() {
      return _UnitElementMenuItem["default"];
    }
    /**
     * @override
     */

  }, {
    key: "getFormObject",
    value: function getFormObject() {
      return _World["default"].get().getUnitManager().getUnits().filter(function (unit) {
        return !unit.getComponent(_GUIPendingComponent["default"]);
      });
    }
    /**
     * @override
     * @param {Unit} bindObject
     */

  }, {
    key: "getActions",
    value: function getActions(bindObject) {
      return [new _HideItemMenuItem["default"](bindObject), new _ShowItemMenuItem["default"](bindObject)];
    }
  }]);
  return UnitListMenuItem;
}(_ListMenuItem2["default"]);

exports["default"] = UnitListMenuItem;

},{"../../../component/internal/gui/GUIPendingComponent.js":36,"../../../world/World.js":208,"../../Layout.js":74,"../action/HideItemMenuItem.js":79,"../action/ShowItemMenuItem.js":82,"../list/ListMenuItem.js":111,"./UnitElementMenuItem.js":124,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],127:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _PanelMenuItem2 = _interopRequireDefault(require("../panel/PanelMenuItem.js"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _UnitsWrapperMenuItem = _interopRequireDefault(require("./UnitsWrapperMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnitMenuItem = /*#__PURE__*/function (_PanelMenuItem) {
  (0, _inherits2["default"])(UnitMenuItem, _PanelMenuItem);

  var _super = _createSuper(UnitMenuItem);

  function UnitMenuItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, UnitMenuItem);
    _this = _super.call(this, {
      name: 'Layer',
      zone: _Layout["default"].zone.RIGHT
    });
    _this.items = [new _UnitsWrapperMenuItem["default"]((0, _assertThisInitialized2["default"])(_this))];
    return _this;
  }

  return UnitMenuItem;
}(_PanelMenuItem2["default"]);

exports["default"] = UnitMenuItem;

},{"../../Layout.js":74,"../panel/PanelMenuItem.js":113,"./UnitsWrapperMenuItem.js":128,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],128:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _MenuItem2 = _interopRequireDefault(require("../../MenuItem.js"));

var _UnitListMenuItem = _interopRequireDefault(require("./UnitListMenuItem.js"));

var _UnitFormMenuItem = _interopRequireDefault(require("./UnitFormMenuItem.js"));

var _ComponentListMenuItem = _interopRequireDefault(require("./ComponentListMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnitsWrapperMenuItem = /*#__PURE__*/function (_MenuItem) {
  (0, _inherits2["default"])(UnitsWrapperMenuItem, _MenuItem);

  var _super = _createSuper(UnitsWrapperMenuItem);

  function UnitsWrapperMenuItem(parent) {
    var _this;

    (0, _classCallCheck2["default"])(this, UnitsWrapperMenuItem);
    _this = _super.call(this, {
      name: 'units-wrapper',
      stateCode: '',
      zone: parent.zone,
      type: _Layout["default"].type.WRAPPER
    }, parent);
    _this.items = [new _UnitListMenuItem["default"]((0, _assertThisInitialized2["default"])(_this)), new _UnitFormMenuItem["default"]((0, _assertThisInitialized2["default"])(_this)), new _ComponentListMenuItem["default"]((0, _assertThisInitialized2["default"])(_this))];
    return _this;
  }

  return UnitsWrapperMenuItem;
}(_MenuItem2["default"]);

exports["default"] = UnitsWrapperMenuItem;

},{"../../Layout.js":74,"../../MenuItem.js":76,"./ComponentListMenuItem.js":123,"./UnitFormMenuItem.js":125,"./UnitListMenuItem.js":126,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],129:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _World = _interopRequireDefault(require("../../../world/World.js"));

var _FormMenuItem2 = _interopRequireDefault(require("../form/FormMenuItem.js"));

var _CameraComponent = _interopRequireDefault(require("../../../component/internal/CameraComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {CameraFormMenuItem}
 */
var CameraFormMenuItem = /*#__PURE__*/function (_FormMenuItem) {
  (0, _inherits2["default"])(CameraFormMenuItem, _FormMenuItem);

  var _super = _createSuper(CameraFormMenuItem);

  function CameraFormMenuItem(parent) {
    var _this;

    (0, _classCallCheck2["default"])(this, CameraFormMenuItem);
    _this = _super.call(this, {
      name: 'Camera',
      stateCode: '',
      type: _Layout["default"].type.FORM,
      zone: parent.zone
    });
    _this.parent = parent;
    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(CameraFormMenuItem, [{
    key: "generateFields",
    value: function generateFields() {
      var cameraUnits = _World["default"].get().getUnitManager().getUnitsHasComponents([_CameraComponent["default"]]).map(function (unit) {
        return {
          value: unit.getId(),
          label: unit.getName()
        };
      });

      return [{
        bind: 'cameraUnitId',
        label: 'Camera',
        type: _Layout["default"].form.DROPDOWN,
        list: cameraUnits
      }];
    }
    /**
     * @override
     */

  }, {
    key: "getFormObject",
    value: function getFormObject() {
      return _World["default"].get();
    }
  }]);
  return CameraFormMenuItem;
}(_FormMenuItem2["default"]);

exports["default"] = CameraFormMenuItem;

},{"../../../component/internal/CameraComponent.js":32,"../../../world/World.js":208,"../../Layout.js":74,"../form/FormMenuItem.js":106,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],130:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _World = _interopRequireDefault(require("../../../world/World.js"));

var _FormMenuItem2 = _interopRequireDefault(require("../form/FormMenuItem.js"));

var _Physics = _interopRequireDefault(require("../../../physics/Physics.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {PhysicsFormMenuItem}
 */
var PhysicsFormMenuItem = /*#__PURE__*/function (_FormMenuItem) {
  (0, _inherits2["default"])(PhysicsFormMenuItem, _FormMenuItem);

  var _super = _createSuper(PhysicsFormMenuItem);

  function PhysicsFormMenuItem(parent) {
    var _this;

    (0, _classCallCheck2["default"])(this, PhysicsFormMenuItem);
    _this = _super.call(this, {
      name: '',
      stateCode: '',
      type: _Layout["default"].type.FORM,
      zone: parent.zone
    });
    _this.parent = parent;

    _this.init();

    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(PhysicsFormMenuItem, [{
    key: "generateFields",
    value: function generateFields() {
      return [{
        bind: 'type',
        label: 'Physics',
        type: _Layout["default"].form.DROPDOWN,
        list: [{
          value: _Physics["default"].TYPES.MATTERJS,
          label: 'MatterJS'
        }]
      }];
    }
    /**
     * @override
     */

  }, {
    key: "getFormObject",
    value: function getFormObject() {
      return _World["default"].get().getPhysics();
    }
  }]);
  return PhysicsFormMenuItem;
}(_FormMenuItem2["default"]);

exports["default"] = PhysicsFormMenuItem;

},{"../../../physics/Physics.js":140,"../../../world/World.js":208,"../../Layout.js":74,"../form/FormMenuItem.js":106,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],131:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Layout = _interopRequireDefault(require("../../Layout.js"));

var _PhysicsFormMenuItem = _interopRequireDefault(require("./PhysicsFormMenuItem.js"));

var _CameraFormMenuItem = _interopRequireDefault(require("./CameraFormMenuItem.js"));

var _PanelMenuItem2 = _interopRequireDefault(require("../panel/PanelMenuItem.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {WorldMenuItem}
 */
var WorldMenuItem = /*#__PURE__*/function (_PanelMenuItem) {
  (0, _inherits2["default"])(WorldMenuItem, _PanelMenuItem);

  var _super = _createSuper(WorldMenuItem);

  function WorldMenuItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, WorldMenuItem);
    _this = _super.call(this, {
      name: 'World',
      zone: _Layout["default"].zone.RIGHT
    });
    _this.items = [new _PhysicsFormMenuItem["default"]((0, _assertThisInitialized2["default"])(_this)), new _CameraFormMenuItem["default"]((0, _assertThisInitialized2["default"])(_this))];
    return _this;
  }

  return WorldMenuItem;
}(_PanelMenuItem2["default"]);

exports["default"] = WorldMenuItem;

},{"../../Layout.js":74,"../panel/PanelMenuItem.js":113,"./CameraFormMenuItem.js":129,"./PhysicsFormMenuItem.js":130,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],132:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Scene2 = _interopRequireDefault(require("./Scene.js"));

var _World = _interopRequireDefault(require("../world/World.js"));

var _Window = _interopRequireDefault(require("../core/Window.js"));

var _ExecutorRegistry = _interopRequireDefault(require("../executor/ExecutorRegistry.js"));

var _MeshGenerationExecutor = _interopRequireDefault(require("../executor/MeshGenerationExecutor.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {Game}
 * @extends {Loop}
 */
var Game = /*#__PURE__*/function (_Scene) {
  (0, _inherits2["default"])(Game, _Scene);

  var _super = _createSuper(Game);

  /**
   * @type {Game}
   */
  function Game() {
    var _this;

    (0, _classCallCheck2["default"])(this, Game);
    _this = _super.call(this);

    _ExecutorRegistry["default"].get().register([new _MeshGenerationExecutor["default"]()]);

    return _this;
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(Game, [{
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var world, window;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Game.prototype), "init", this).call(this);

              case 2:
                world = _World["default"].get();
                window = _Window["default"].get();
                window.setSize(world.getResolution());
                world.getPhysics().run(world);
                world.setupCamera();
                world.regenerateAll();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
    /**
     * @override
     */

  }, {
    key: "loop",
    value: function loop() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Game.prototype), "loop", this).call(this); //const world = World.get()
      //world.getPhysics().update(world, world.getAiEngine())
    }
  }]);
  return Game;
}(_Scene2["default"]);

(0, _defineProperty2["default"])(Game, "instance", void 0);
var _default = Game;
exports["default"] = _default;

},{"../core/Window.js":51,"../executor/ExecutorRegistry.js":59,"../executor/MeshGenerationExecutor.js":60,"../world/World.js":208,"./Scene.js":135,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17,"@babel/runtime/regenerator":25}],133:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/**
 * @class {Loop}
 */
var Loop = /*#__PURE__*/function () {
  function Loop() {
    (0, _classCallCheck2["default"])(this, Loop);
    (0, _defineProperty2["default"])(this, "runners", void 0);
    this.loop = this.loop.bind(this);
    this.runners = [];
  }
  /**
   * @type {Class[]}
   */


  (0, _createClass2["default"])(Loop, [{
    key: "getRunners",

    /**
     * @return {Class[]}
     */
    value: function getRunners() {
      return this.runners;
    }
  }, {
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                throw new TypeError('Loop.init must be implemented!');

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "loop",
    value: function loop() {
      throw new TypeError('Loop.loop must be implemented!');
    }
  }], [{
    key: "get",
    value: function get() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);
  return Loop;
}();

var _default = Loop;
exports["default"] = _default;

},{"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/regenerator":25}],134:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Game2 = _interopRequireDefault(require("./Game.js"));

var _World = _interopRequireDefault(require("../world/World.js"));

var _Storage = _interopRequireDefault(require("../core/Storage.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {RunGame}
 * @extends {Game}
 */
var RunGame = /*#__PURE__*/function (_Game) {
  (0, _inherits2["default"])(RunGame, _Game);

  var _super = _createSuper(RunGame);

  function RunGame() {
    (0, _classCallCheck2["default"])(this, RunGame);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(RunGame, [{
    key: "init",

    /**
     * @type {PreviewGame}
     */

    /**
     * @override
     */
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Storage["default"].get().load(_Storage["default"].type.WORLD, EngineWorldData.world, _World["default"].get());

              case 2:
                _context.next = 4;
                return (0, _get2["default"])((0, _getPrototypeOf2["default"])(RunGame.prototype), "init", this).call(this);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);
  return RunGame;
}(_Game2["default"]);

(0, _defineProperty2["default"])(RunGame, "instance", void 0);
var _default = RunGame;
exports["default"] = _default;

},{"../core/Storage.js":50,"../world/World.js":208,"./Game.js":132,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17,"@babel/runtime/regenerator":25}],135:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Loop2 = _interopRequireDefault(require("./Loop.js"));

var _ObjectRenderer = _interopRequireDefault(require("../renderer/ObjectRenderer.js"));

var _World = _interopRequireDefault(require("../world/World.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {Scene}
 * @extends {Loop}
 */
var Scene = /*#__PURE__*/function (_Loop) {
  (0, _inherits2["default"])(Scene, _Loop);

  var _super = _createSuper(Scene);

  /**
   * @type {Scene}
   */
  function Scene() {
    var _this;

    (0, _classCallCheck2["default"])(this, Scene);
    _this = _super.call(this);
    _this.objectRenderer = new _ObjectRenderer["default"]();
    return _this;
  }

  (0, _createClass2["default"])(Scene, [{
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "loop",
    value: function loop() {
      var world = _World["default"].get();

      world.update();
      world.draw(this.objectRenderer);
      this.objectRenderer.render(world.getCamera());
    }
  }]);
  return Scene;
}(_Loop2["default"]);

(0, _defineProperty2["default"])(Scene, "instance", void 0);
var _default = Scene;
exports["default"] = _default;

},{"../renderer/ObjectRenderer.js":171,"../world/World.js":208,"./Loop.js":133,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17,"@babel/runtime/regenerator":25}],136:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _AssetsManagerData2 = _interopRequireDefault(require("../project/data/AssetsManagerData.js"));

var _Asset = _interopRequireDefault(require("../asset/Asset.js"));

var _FileHelper = _interopRequireDefault(require("../utils/FileHelper.js"));

var _AssetImage = _interopRequireDefault(require("../asset/types/AssetImage.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {AssetsManager}
 * @extends {AssetsManagerData}
 */
var AssetsManager = /*#__PURE__*/function (_AssetsManagerData) {
  (0, _inherits2["default"])(AssetsManager, _AssetsManagerData);

  var _super = _createSuper(AssetsManager);

  function AssetsManager() {
    var _this;

    (0, _classCallCheck2["default"])(this, AssetsManager);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "assets", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "folders", void 0);
    _this.assets = [];
    _this.folders = [];
    return _this;
  }
  /**
   * @param {string} data
   * @param {Class<AssetType>} type
   * @param {string} name
   */


  (0, _createClass2["default"])(AssetsManager, [{
    key: "setAsset",
    value: function () {
      var _setAsset = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data, type, name) {
        var asset;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                asset = new _Asset["default"]({});
                asset.setType(new type());
                asset.setName(name);
                _context.next = 5;
                return asset.load(data);

              case 5:
                if (!_context.sent) {
                  _context.next = 7;
                  break;
                }

                this.assets.push(asset);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setAsset(_x, _x2, _x3) {
        return _setAsset.apply(this, arguments);
      }

      return setAsset;
    }()
    /**
     * @param {File} blob
     */

  }, {
    key: "setAssetByBlob",
    value: function () {
      var _setAssetByBlob = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(blob) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  var reader = new FileReader();

                  reader.onload = function () {
                    resolve(reader.result);
                  };

                  reader.onerror = reject;
                  reader.readAsDataURL(blob);
                }).then(function (data) {
                  var type = _this2.getAssetType(blob);

                  return _this2.setAsset(data, type, _FileHelper["default"].getFilename(blob.name));
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function setAssetByBlob(_x4) {
        return _setAssetByBlob.apply(this, arguments);
      }

      return setAssetByBlob;
    }()
    /**
     * @param {Blob} blob
     * @return {Class<AssetType>}
     */

  }, {
    key: "getAssetType",
    value: function getAssetType(blob) {
      var type = blob.type;

      switch (type) {
        case _FileHelper["default"].type.IMG_JPEG:
        case _FileHelper["default"].type.IMG_PNG:
          return _AssetImage["default"];

        default:
          throw new TypeError("Asset type \"".concat(type, "\" not supported"));
      }
    }
    /**
     * @return {null}
     */

  }, {
    key: "getAsset",
    value: function getAsset() {
      return null;
    }
    /**
     * @return {Asset}
     */

  }, {
    key: "getSelectedAsset",
    value: function getSelectedAsset() {
      return this.getAssets().find(function (asset) {
        return asset.isSelected();
      });
    }
    /**
     * @return {Asset[]}
     */

  }, {
    key: "getSelectedAssets",
    value: function getSelectedAssets() {
      return this.getAssets().filter(function (asset) {
        return asset.isSelected();
      });
    }
    /**
     * @param {number|string} assetId
     * @return {Asset | null}
     */

  }, {
    key: "findAssetById",
    value: function findAssetById(assetId) {
      return this.getAssets().find(function (asset) {
        return asset.id === parseInt(assetId);
      });
    }
    /**
     * @param {number|string} folderId
     * @return {Folder | null}
     */

  }, {
    key: "findFolderById",
    value: function findFolderById(folderId) {
      return this.getFolders().find(function (folder) {
        return folder.id === parseInt(folderId);
      });
    }
    /**
     * @param {number|null} folderId
     * @return {Asset[]}
     */

  }, {
    key: "findAssetsByFolderId",
    value: function findAssetsByFolderId(folderId) {
      return this.getAssets().filter(function (asset) {
        return asset.folderId === folderId;
      });
    }
    /**
     * @param {number | null} folderId
     * @return {Folder[]}
     */

  }, {
    key: "findFolders",
    value: function findFolders(folderId) {
      return this.getFolders().filter(function (folder) {
        return folder.folderId === folderId;
      });
    }
    /**
     * @param {Folder} folder
     */

  }, {
    key: "addFolder",
    value: function addFolder(folder) {
      this.folders.push(folder);
    }
  }]);
  return AssetsManager;
}(_AssetsManagerData2["default"]);

exports["default"] = AssetsManager;

},{"../asset/Asset.js":26,"../asset/types/AssetImage.js":28,"../project/data/AssetsManagerData.js":158,"../utils/FileHelper.js":199,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17,"@babel/runtime/regenerator":25}],137:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/**
 * @class {MeshManager}
 */
var MeshManager = /*#__PURE__*/function () {
  /**
   * @type {Mesh[]}
   */
  function MeshManager() {
    (0, _classCallCheck2["default"])(this, MeshManager);
    (0, _defineProperty2["default"])(this, "meshes", void 0);
    this.meshes = [];
  }
  /**
   * @return {Mesh[]}
   */


  (0, _createClass2["default"])(MeshManager, [{
    key: "getMeshes",
    value: function getMeshes() {
      return this.meshes;
    }
    /**
     * @param {number} index
     * @return {Mesh}
     */

  }, {
    key: "get",
    value: function get(index) {
      return this.meshes[index];
    }
    /**
     * @param {number} index
     * @param {Mesh} mesh
     */

  }, {
    key: "set",
    value: function set(index, mesh) {
      this.meshes[index] = mesh;
    }
    /**
     * @param {number} index
     */

  }, {
    key: "clear",
    value: function clear(index) {
      var mesh = this.get(index);

      if (mesh) {
        mesh.clear();
      }
    }
  }]);
  return MeshManager;
}();

exports["default"] = MeshManager;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],138:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Unit = _interopRequireDefault(require("../unit/Unit.js"));

var _UnitManagerData2 = _interopRequireDefault(require("../project/data/UnitManagerData.js"));

var _MeshComponent = _interopRequireDefault(require("../component/internal/MeshComponent.js"));

var _EmptyUnit = _interopRequireDefault(require("../unit/type/EmptyUnit.js"));

var _TransformComponent = _interopRequireDefault(require("../component/internal/TransformComponent.js"));

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

var _GUIPropertyComponent = _interopRequireDefault(require("../component/internal/gui/property/GUIPropertyComponent.js"));

var _Maths = _interopRequireDefault(require("../utils/Maths.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Manage the units, components list (get, add, load, ...)
 *
 * @property {Unit[]} units
 */
var UnitManager = /*#__PURE__*/function (_UnitManagerData) {
  (0, _inherits2["default"])(UnitManager, _UnitManagerData);

  var _super = _createSuper(UnitManager);

  function UnitManager() {
    var _this;

    (0, _classCallCheck2["default"])(this, UnitManager);
    _this = _super.call(this);
    _this.units = [];
    return _this;
  }
  /**
   * @param {Unit} unit
   * @return {number}
   */


  (0, _createClass2["default"])(UnitManager, [{
    key: "getIndexOfUnit",
    value: function getIndexOfUnit(unit) {
      return this.units.findIndex(function (element) {
        return element.getId() === unit.getId();
      });
    }
    /**
     * @param {number} unitId
     * @return {Unit}
     */

  }, {
    key: "findUnitById",
    value: function findUnitById(unitId) {
      return this.units.find(function (element) {
        return element.getId() === unitId;
      });
    }
    /**
     * @param {string} name
     * @return {Unit}
     */

  }, {
    key: "findUnitByName",
    value: function findUnitByName(name) {
      return this.units.find(function (element) {
        return element.getName() === name;
      });
    }
    /**
     * @param {Class} type
     * @return {Unit[]}
     */

  }, {
    key: "findUnitsByType",
    value: function findUnitsByType(type) {
      return this.units.filter(function (element) {
        return element instanceof type;
      });
    }
    /**
     * @param {Class} type
     * @return {Unit}
     */

  }, {
    key: "findFirstUnitByType",
    value: function findFirstUnitByType(type) {
      var result = this.findUnitsByType(type);
      return result && result[0];
    }
    /**
     * @template T
     * @param {Class} T
     * @return {T}
     */

  }, {
    key: "createUnit",
    value: function createUnit(T) {
      if (!(T.prototype instanceof _Unit["default"])) {
        throw new TypeError("Unit type must be child of Unit class (".concat(type, " given)"));
      }

      var unit = new T();
      this.addUnit(unit);
      return unit;
    }
    /**
     * @template T
     * @param {Class} T
     * @param {...any} props
     * @return {T}
     */

  }, {
    key: "createUnitInstant",
    value: function createUnitInstant(T) {
      if (!(T.prototype instanceof _Unit["default"])) {
        throw new TypeError("Unit type must be child of Unit class (".concat(type, " given)"));
      }

      var unit = new T();

      for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        props[_key - 1] = arguments[_key];
      }

      unit.instantiate.apply(unit, props);
      this.addUnit(unit);
      return unit;
    }
    /**
     * @param {string} shape
     * @param {Vector} position
     * @return {Unit}
     */

  }, {
    key: "createPrimitiveUnit",
    value: function createPrimitiveUnit(shape, position) {
      var unit = this.createUnit(_EmptyUnit["default"]);
      unit.setName(shape);
      var transformComponent = unit.getComponent(_TransformComponent["default"]);
      var meshComponent = unit.getComponent(_MeshComponent["default"]);
      transformComponent.setPosition(new _Vector["default"](_.cloneDeep(position)));
      meshComponent.setShape(shape);
      return unit;
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "addUnit",
    value: function addUnit(unit) {
      this.setupName(unit);
      var rank = unit.getComponent(_GUIPropertyComponent["default"]).getRank();
      var indexBiggerRank = this.units.findIndex(function (pUnit) {
        return pUnit.getComponent(_GUIPropertyComponent["default"]).getRank() > rank;
      });

      if (indexBiggerRank >= 0) {
        this.units.splice(indexBiggerRank, 0, unit);
      } else {
        this.units.push(unit);
      }
    }
  }, {
    key: "sortUnits",
    value: function sortUnits() {
      this.units.sort(function (unitA, unitB) {
        return unitA.getComponent(_GUIPropertyComponent["default"]).getRank() > unitB.getComponent(_GUIPropertyComponent["default"]).getRank();
      });
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "deleteUnit",
    value: function deleteUnit(unit) {
      return this.units.splice(this.getIndexOfUnit(unit), 1);
    }
    /**
     * @param {number} unitId
     */

  }, {
    key: "deleteUnitById",
    value: function deleteUnitById(unitId) {
      var unit = this.findUnitById(unitId);
      this.deleteUnit(unit);
    }
    /**
     * @param {Unit} unit
     * @param {number} targetIndex
     */

  }, {
    key: "moveUnitToIndex",
    value: function moveUnitToIndex(unit, targetIndex) {
      this.deleteUnit(unit);
      this.units.splice(targetIndex, 0, unit);
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "moveUnitUp",
    value: function moveUnitUp(unit) {
      var index = this.getIndexOfUnit(unit);

      if (index > 0) {
        this.moveUnitToIndex(unit, index - 1);
      }
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "moveUnitDown",
    value: function moveUnitDown(unit) {
      var index = this.getIndexOfUnit(unit);

      if (index < this.units.length - 1) {
        this.moveUnitToIndex(unit, index + 1);
      }
    }
    /**
     * @param {number} unitId
     */

  }, {
    key: "tryDeleteUnitById",
    value: function tryDeleteUnitById(unitId) {
      var unit = this.findUnitById(unitId);
      unit && this.deleteUnit(unit);
    }
    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */

  }, {
    key: "getUnitsHasComponents",
    value: function getUnitsHasComponents(componentClasses) {
      return this.getUnits().filter(function (unit) {
        return unit.hasComponents(componentClasses);
      });
    }
    /**
     * @param {Component[]} componentClasses
     * @return {Unit}
     */

  }, {
    key: "getOneUnitHasComponents",
    value: function getOneUnitHasComponents(componentClasses) {
      var result = this.getUnitsHasComponents(componentClasses);
      return result && result[0];
    }
    /**
     * @param {Component[]} componentClasses
     * @return {Unit[]}
     */

  }, {
    key: "getUnitsHasAnyComponents",
    value: function getUnitsHasAnyComponents(componentClasses) {
      return this.getUnits().filter(function (unit) {
        return unit.hasAnyComponents(componentClasses);
      });
    }
    /**
     * @param {Unit} unit
     * @return {Unit}
     */

  }, {
    key: "clone",
    value: function clone(unit) {
      var cloneUnit = _.cloneDeep(unit);

      cloneUnit.setName("Clone of ".concat(unit.getName()));
      cloneUnit.setId(_Maths["default"].generateId());
      this.addUnit(cloneUnit);
      return cloneUnit;
    }
    /**
     * @param {Unit[]} units
     * @return {Unit[]}
     */

  }, {
    key: "cloneUnits",
    value: function cloneUnits(units) {
      var _this2 = this;

      return units.map(function (unit) {
        return _this2.clone(unit);
      });
    }
    /**
     * @param {World} world
     */

  }, {
    key: "regenerateAll",
    value: function regenerateAll(world) {
      this.units.forEach(function (unit) {
        return unit.getComponent(_MeshComponent["default"]).setGenerated(false);
      });
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "setupName",
    value: function setupName(unit) {
      var initialName = unit.getName();
      var name = initialName;
      var existUnit = null;
      var iDuplicate = 0;

      do {
        unit.setName(name);
        existUnit = this.findUnitByName(name);

        if (existUnit) {
          iDuplicate++;
          name = "".concat(initialName, " (").concat(iDuplicate, ")");
        }
      } while (existUnit);
    }
  }]);
  return UnitManager;
}(_UnitManagerData2["default"]);

exports["default"] = UnitManager;

},{"../component/internal/MeshComponent.js":33,"../component/internal/TransformComponent.js":35,"../component/internal/gui/property/GUIPropertyComponent.js":40,"../project/data/UnitManagerData.js":169,"../unit/Unit.js":182,"../unit/type/EmptyUnit.js":195,"../utils/Maths.js":202,"../utils/Vector.js":206,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],139:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _UnitHelper = _interopRequireDefault(require("../unit/UnitHelper.js"));

var _GUIPendingComponent = _interopRequireDefault(require("../component/internal/gui/GUIPendingComponent.js"));

var UnitSelector = /*#__PURE__*/function () {
  function UnitSelector() {
    (0, _classCallCheck2["default"])(this, UnitSelector);
  }

  (0, _createClass2["default"])(UnitSelector, [{
    key: "getSelected",

    /**
     * @param {World} world
     * @return {Unit[]}
     */
    value: function getSelected(world) {
      return world.getUnitManager().getUnits().filter(function (unit) {
        return unit.isSelected() && !unit.getComponent(_GUIPendingComponent["default"]);
      });
    }
    /**
     * @param {World} world
     * @return {Unit}
     */

  }, {
    key: "getFirstSelected",
    value: function getFirstSelected(world) {
      var selectedUnits = this.getSelected(world);

      if (selectedUnits.length) {
        return selectedUnits[0];
      }

      return null;
    }
    /**
     * Get the unit in a specific point (absolute position)
     * @param {World} world
     * @param {Vector} point
     */

  }, {
    key: "get",
    value: function get(world, point) {
      var units = this.getAll(world, point);
      return units.length && units[units.length - 1];
    }
    /**
     * @param {World} world
     * @param {Vector} point
     * @return {Unit}
     */

  }, {
    key: "getFirstSelectable",
    value: function getFirstSelectable(world, point) {
      var units = this.getAll(world, point).filter(function (unit) {
        return !unit.getComponent(_GUIPendingComponent["default"]);
      });
      return units.length && units[units.length - 1];
    }
    /**
     * Get all units in a specific point (absolute position)
     * @param {World} world
     * @param {Vector} point
     */

  }, {
    key: "getAll",
    value: function getAll(world, point) {
      return world.getUnitManager().getUnits().filter(function (unit) {
        return _UnitHelper["default"].isInside(unit, point);
      });
    }
    /**
     * Get all units inside a selected area
     * @param {World} world
     * @param {Vector} point
     * @param {Size} size
     * @return {Unit[]}
     */

  }, {
    key: "getInsideArea",
    value: function getInsideArea(world, point, size) {
      return world.getUnitManager().getUnits().filter(function (unit) {
        return _UnitHelper["default"].isInsideArea(unit, point, size);
      });
    }
    /**
     * Select all units inside the area of selection, and return selected units
     * @param {World} world
     * @param {Vector} point
     * @param {Size} size
     * @return {Unit[]}
     */

  }, {
    key: "select",
    value: function select(world, point, size) {
      var selectedUnits = [];

      if (!size || !size.width && !size.height) {
        var selectedUnit = this.getFirstSelectable(world, point);

        if (selectedUnit) {
          selectedUnits.push(selectedUnit);
        }
      } else {
        selectedUnits = this.getInsideArea(world, point, size);
      }

      return selectedUnits.map(function (selectedUnit) {
        return selectedUnit.select() && selectedUnit;
      }).filter(function (unit) {
        return unit;
      });
    }
    /**
     * @param {World} world
     */

  }, {
    key: "unselectAll",
    value: function unselectAll(world) {
      world.getUnitManager().getUnits().map(function (unit) {
        return unit.unselect();
      });
    }
    /**
     * Unfocus all entities.
     * Do not unfocus unit in loading mode
     * @param {World} world
     */

  }, {
    key: "unfocusAll",
    value: function unfocusAll(world) {
      world.getUnitManager().getUnits().map(function (unit) {
        return unit.unfocus();
      });
    }
    /**
     * focus all entities in a given point.
     * Do not focus unit in loading mode
     * @param {World} world
     * @param {Vector} point
     */

  }, {
    key: "focus",
    value: function focus(world, point) {
      this.getAll(world, point).map(function (unit) {
        return unit.focus();
      });
    }
    /**
     * @return {UnitSelector}
     */

  }], [{
    key: "get",
    value: function get() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);
  return UnitSelector;
}();

exports["default"] = UnitSelector;
(0, _defineProperty2["default"])(UnitSelector, "instance", void 0);

},{"../component/internal/gui/GUIPendingComponent.js":36,"../unit/UnitHelper.js":183,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],140:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _PhysicsData2 = _interopRequireDefault(require("../project/data/PhysicsData.js"));

var _MatterEngine = _interopRequireDefault(require("./engine/matter/MatterEngine.js"));

var _PhysicError = _interopRequireDefault(require("../exception/type/PhysicError.js"));

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Physics = /*#__PURE__*/function (_PhysicsData) {
  (0, _inherits2["default"])(Physics, _PhysicsData);

  var _super = _createSuper(Physics);

  function Physics() {
    var _this;

    (0, _classCallCheck2["default"])(this, Physics);
    _this = _super.call(this);
    _this.toRestart = false;
    _this.isRunning = false;
    _this.types = (0, _defineProperty2["default"])({}, Physics.TYPES.MATTERJS, _MatterEngine["default"]);
    return _this;
  }
  /**
   * Update physics, and train AI
   * @param {World} world
   * @param {AiEngine} aiEngine
   */


  (0, _createClass2["default"])(Physics, [{
    key: "update",
    value: function update(world, aiEngine) {
      if (this.isEnabled()) {
        if (this.toRestart) {
          this.restart(world);
        } else {
          this.updateEntities(world);
          this.updateEngine(world, aiEngine);
        }
      }
    }
    /**
     * Update entities props from Physics engine results
     * @param {World} world
     */

  }, {
    key: "updateEntities",
    value: function updateEntities(world) {
      var _this2 = this;

      var entityManager = world.getEntityManager();
      var bodyEntities = entityManager.getBodyEntities();
      var jointEntities = entityManager.getAttachEntities();
      this.physicsEngine.getBodies().map(function (body, index) {
        var entity = bodyEntities[index];

        var _entity$fromCenterPos = entity.fromCenterPosition(body.position),
            x = _entity$fromCenterPos.x,
            y = _entity$fromCenterPos.y;

        var rotation = body.angle ? body.angle % (Math.PI * 2) : 0;
        entity.setPosition(new _Vector["default"]({
          x: parseInt(x),
          y: parseInt(y)
        }));
        entity.setRotationAndGenerate(Math.round(rotation * 100) / 100);
        entity.setVelocity(body.velocity);
        entity.setAngularVelocity(body.angularVelocity);
        entityManager.haveToDie(entity, _this2.physicsEngine);
      });
      this.physicsEngine.getJoints().map(function (joint, index) {
        var entity = jointEntities[index];
        var entityA = entity.getLinkedEntityAt(0, world);
        var entityB = entity.getLinkedEntityAt(1, world);
        var pointA = entityA ? entityA.fromRelativeCenterPosition(joint.pointA) : joint.pointA;
        var pointB = entityB ? entityB.fromRelativeCenterPosition(joint.pointB) : joint.pointB;
        entity.updatePoints(pointA, pointB);
      });
    }
    /**
     * Update the World using AI and physics Engine
     * @param {World} world
     * @param {AiEngine} aiEngine
     * @TODO: updating the constraint entities crash the physics, to be revisited
     */

  }, {
    key: "updateEngine",
    value: function updateEngine(world, aiEngine) {
      var _this3 = this;

      var entityManager = world.getEntityManager();
      entityManager.getAttachEntities().forEach(function (entity) {
        _this3.physicsEngine.update(entity);
      });
      entityManager.getBodyEntities().forEach(function (entity) {
        _this3.physicsEngine.update(entity);
      });
      this.physicsEngine.updateEngine();
      aiEngine && aiEngine.update();
    }
    /**
     * @param {AttachEntity} entity
     * @param {Constraint} constraint
     */

  }, {
    key: "updateConstraint",
    value: function updateConstraint(entity, constraint) {
      if (this.isEnabled()) {
        var shape = this.physicsEngine.findShapeFromEntity(entity);

        if (shape) {
          this.physicsEngine.updateConstraint(entity, constraint);
        } else {
          throw new _PhysicError["default"]("Shape not founded for the constraint entity ".concat(entity.id));
        }
      }
    }
    /**
     * Get the body phyiscs from the given entity
     * @param {Entity} entity
     */

  }, {
    key: "getBodyFromEntity",
    value: function getBodyFromEntity(entity) {
      var shape = this.physicsEngine.findShapeFromEntity(entity);
      var bodies = this.physicsEngine.getBodies();
      var joints = this.physicsEngine.getJoints();

      if (!shape || !bodies.includes(shape) && !joints.includes(shape)) {
        throw new _PhysicError["default"]("Shape not founded for the entity ".concat(entity.id));
      }

      return shape;
    }
    /**
     * Get an entity from an ID
     * @param {World} world
     * @param {number} entityId
     */

  }, {
    key: "getEntityById",
    value: function getEntityById(world, entityId) {
      return world.getEntityManager().findById(entityId);
    }
    /**
     * Stop the engine
     */

  }, {
    key: "stop",
    value: function stop() {
      this.physicsEngine.stop();
      this.isRunning = false;
    }
    /**
     * Unload the physics for entities
     * @param {World} world
     */

  }, {
    key: "unload",
    value: function unload(world) {
      var _this4 = this;

      world.getEntityManager().entities.map(function (entity) {
        return entity.unloadPhysics(_this4.physicsEngine);
      });
    }
    /**
     * Load the physics for entities
     * @param {World} world
     */

  }, {
    key: "load",
    value: function load(world) {
      return this.before(world) && this.setup(world) && this.after(world);
    }
    /**
     * Init the phyiscs for entities before loading
     * @param {World} world
     */

  }, {
    key: "before",
    value: function before(world) {
      var _this5 = this;

      var jointEntities = world.getEntityManager().getAttachEntities();
      jointEntities.map(function (entity) {
        return entity.updateJointPosition(world, _this5.physicsEngine);
      });
      return true;
    }
    /**
     * Setup the physics for entities
     * @param {World} world
     */

  }, {
    key: "setup",
    value: function setup(world) {
      var _this6 = this;

      var entityManager = world.getEntityManager();
      var bodyEntities = entityManager.getBodyEntities();
      var attachEntities = entityManager.getAttachEntities();
      bodyEntities.map(function (entity) {
        return entity.loadPhysics(_this6.physicsEngine, world);
      });
      attachEntities.map(function (entity) {
        return entity.loadPhysics(_this6.physicsEngine, world);
      });
      return true;
    }
    /**
     * Complete the physics after setup
     * @param {World} world
     */

  }, {
    key: "after",
    value: function after(world) {
      var _this7 = this;

      var bodyEntities = world.getEntityManager().getBodyEntities();
      bodyEntities.map(function (entity) {
        return entity.updateCollisionFilters(_this7.physicsEngine);
      });
      return true;
    }
    /**
     * Run the physics
     * @param {World} world
     */

  }, {
    key: "run",
    value: function run(world) {
      if (this.isEnabled()) {
        this.unload(world);
        this.physicsEngine.init();
        this.load(world);
        this.physicsEngine.run(world);
        this.isRunning = true;
      }
    }
    /**
     * Remove an entity from physics engine
     * @param {Entity} entity
     */

  }, {
    key: "loadEntity",
    value: function loadEntity(entity) {
      if (this.isRunning) {
        entity.loadPhysics(this.physicsEngine);
      }
    }
    /**
     * Remove an entity from physics engine
     * @param {Entity} entity
     */

  }, {
    key: "unloadEntity",
    value: function unloadEntity(entity) {
      if (this.isRunning) {
        entity.unloadPhysics(this.physicsEngine);
      }
    }
    /**
     * Flag the physics to restart
     * @param {Boolean} toRestart
     */

  }, {
    key: "setToRestart",
    value: function setToRestart(toRestart) {
      this.toRestart = toRestart;
    }
    /**
     * @param {PhysicsEngine} physicsEngine
     */

  }, {
    key: "setPhysicsEngine",
    value: function setPhysicsEngine(physicsEngine) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Physics.prototype), "setPhysicsEngine", this).call(this, physicsEngine);
      physicsEngine && this.physicsEngine.setPhysicsManager(this);
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setIsRunning",
    value: function setIsRunning(value) {
      this.isRunning = value;
    }
    /**
     * @param {string} type
     */

  }, {
    key: "setType",
    value: function setType(type) {
      var physicsEngine = this.types[type];
      this.setPhysicsEngine(physicsEngine ? new physicsEngine() : null);
    }
    /**
     * @return {string}
     */

  }, {
    key: "getType",
    value: function getType() {
      var physicsEngine = this.getPhysicsEngine();

      for (var type in this.types) {
        if (physicsEngine instanceof this.types[type]) {
          return type;
        }
      }
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return !!this.getPhysicsEngine();
    }
    /**
     * Restart the engine
     * @param {World} world
     */

  }, {
    key: "restart",
    value: function restart(world) {
      this.stop();
      this.run(world);
      this.setToRestart(false);
    }
  }], [{
    key: "TYPES",
    get: function get() {
      return {
        MATTERJS: 'matterjs'
      };
    }
  }]);
  return Physics;
}(_PhysicsData2["default"]);

var _default = Physics;
exports["default"] = _default;

},{"../exception/type/PhysicError.js":57,"../project/data/PhysicsData.js":166,"../utils/Vector.js":206,"./engine/matter/MatterEngine.js":144,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],141:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _PhysicsEngineData2 = _interopRequireDefault(require("../../project/data/PhysicsEngineData.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Physics Engine class
 * Used as interface between the application and engine (third party Engine)
 * @abstract
 */
var PhysicsEngine = /*#__PURE__*/function (_PhysicsEngineData) {
  (0, _inherits2["default"])(PhysicsEngine, _PhysicsEngineData);

  var _super = _createSuper(PhysicsEngine);

  function PhysicsEngine() {
    var _this;

    (0, _classCallCheck2["default"])(this, PhysicsEngine);
    _this = _super.call(this);

    if (_this.constructor === PhysicsEngine) {
      throw new TypeError('Abstract class PhysicsEngine cannot be instantiated directly');
    }

    _this.mapShapeToEntity = [];
    return _this;
  }
  /**
   * Initialize the engine.
   */


  (0, _createClass2["default"])(PhysicsEngine, [{
    key: "init",
    value: function init() {
      throw new TypeError('"init" method must be implemented');
    }
    /**
     * Add physics to the entity.
     * @param {Entity} entity
     * @param {World} world
     */

  }, {
    key: "add",
    value: function add(entity, world) {
      this.mapShapeToEntity.push({
        entityId: entity.id,
        shape: this.loadShape(entity, world)
      });
    }
    /**
     * Get the shape for entity.
     * @param {Entity} entity
     * @param {World} world
     * @return {Body}
     */

  }, {
    key: "loadShape",
    value: function loadShape(entity, world) {
      throw new TypeError('"loadShape" method must be implemented');
    }
    /**
     * Update physics of the body from the entity.
     * @param {Entity} entity
     */

  }, {
    key: "update",
    value: function update(entity) {
      throw new TypeError('"update" method must be implemented');
    }
    /**
     * Get the Engine (third party)
     * @return {*}
     */

  }, {
    key: "getEngine",
    value: function getEngine() {
      throw new TypeError('"getEngine" method must be implemented');
    }
    /**
     * Run the physics engine.
     */

  }, {
    key: "run",
    value: function run() {
      throw new TypeError('"run" method must be implemented');
    }
    /**
     * Stop the physics engine and reset the mapping.
     */

  }, {
    key: "stop",
    value: function stop() {
      this.stopEngine();
      this.mapShapeToEntity = [];
    }
    /**
     * Stop the physics engine.
     */

  }, {
    key: "stopEngine",
    value: function stopEngine() {
      throw new TypeError('"stopEngine" method must be implemented');
    }
    /**
     * Update the physics engine.
     */

  }, {
    key: "updateEngine",
    value: function updateEngine() {
      throw new TypeError('"updatEngine" method must be implemented');
    }
    /**
     * Get bodies informations (position, ...)
     * @return {*[]}
     */

  }, {
    key: "getBodies",
    value: function getBodies() {
      throw new TypeError('"getBodies" method must be implemented');
    }
    /**
     * Get joints information (position, ...)
     * @return {*[]}
     */

  }, {
    key: "getJoints",
    value: function getJoints() {
      throw new TypeError('"getJoints" method must be implemented');
    }
    /**
     * Create new group of collision
     * @return {*}
     */

  }, {
    key: "newGroup",
    value: function newGroup() {
      throw new TypeError('"newGroup" method must be implemented');
    }
    /**
     * Update collision filters for the entity.
     * @param {Entity} entity
     */

  }, {
    key: "updateCollisionFilters",
    value: function updateCollisionFilters(entity) {
      throw new TypeError('"updateCollisionFilters" method must be implemented');
    }
    /**
     * Update constraint bodies using the given constraint param
     * @param {Entity} entity
     * @param {Constraint} constraint
     */

  }, {
    key: "updateConstraint",
    value: function updateConstraint(entity, constraint) {
      throw new TypeError('"updateConstraint" method must be implemented');
    }
    /**
     * Apply force to the entity
     * @param {Object} body
     * @param {EntityMotion} entity
     */

  }, {
    key: "applyPhysics",
    value: function applyPhysics(body, entity) {
      throw new TypeError('"applyForce" method must be implemented');
    }
    /**
     * Remove the entity from physics engine
     * @param {Entity} entity
     * @abstract
     */

  }, {
    key: "removeShape",
    value: function removeShape(entity) {
      throw new TypeError('"removeShape" method must be implemented');
    }
    /**
     * Check if two entity collide
     * @abstract
     * @param {Number} entityAId
     * @param {Number} entityBId
     */

  }, {
    key: "isCollide",
    value: function isCollide(entityAId, entityBId) {
      throw new TypeError('"isCollide" method must be implemented');
    }
    /**
     * Set the physics manager that loaded the phyiscs engine
     * @param {Physics} physicsManager
     */

  }, {
    key: "setPhysicsManager",
    value: function setPhysicsManager(physicsManager) {
      this.physicsManager = physicsManager;
    }
    /**
     * Get the physics manager that loaded the phyiscs engine
     */

  }, {
    key: "getPhysicsManager",
    value: function getPhysicsManager() {
      return this.physicsManager;
    }
    /**
     * Get body physics from the entity
     * @param {Entity} entity
     */

  }, {
    key: "getBodyFromEntity",
    value: function getBodyFromEntity(entity) {
      return this.physicsManager.getBodyFromEntity(entity);
    }
    /**
     * Find the shape from the entity
     * @param {Entity} entity
     */

  }, {
    key: "findShapeFromEntity",
    value: function findShapeFromEntity(entity) {
      var shapeEntity = this.mapShapeToEntity.find(function (mShape) {
        return mShape.entityId === parseInt(entity.id);
      });
      return shapeEntity && shapeEntity.shape;
    }
    /**
     * Update constraint position
     * @abstract
     * @param {World} world
     * @param {Entity} entity
     * @return {boolean}
     */

  }, {
    key: "updateJointPosition",
    value: function updateJointPosition(world, entity) {
      throw new TypeError('"updateJointPosition" method must be implemented');
    }
  }]);
  return PhysicsEngine;
}(_PhysicsEngineData2["default"]);

var _default = PhysicsEngine;
exports["default"] = _default;

},{"../../project/data/PhysicsEngineData.js":167,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],142:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _AttachEntity = _interopRequireDefault(require("../../entity/types/constraint/AttachEntity.js"));

/**
 * Shape class
 * Used as interface between an Entity (managed by the app)
 * and Body (managed by the Engine).
 * Used to synchronize information between the Body and related Entity
 * @abstract
 *
 * @property {Shape} instance
 */
var Shape = /*#__PURE__*/function () {
  function Shape(physicEngine) {
    (0, _classCallCheck2["default"])(this, Shape);

    if (this.constructor === Shape) {
      throw new TypeError('Abstract class Shape cannot be instantiated directly');
    }

    this.physicEngine = physicEngine;
  }
  /**
   * Generate the body for the given entity
   * @param {EntityMotion} entity
   * @param {World} world
   * @return {Body}
   */


  (0, _createClass2["default"])(Shape, [{
    key: "generate",
    value: function generate(entity, world) {
      throw new TypeError('"Shape.generate" method must be implemented');
    }
    /**
     * Load the body for the given entity, and update physics
     * @param {Entity} entity
     * @param {World} world
     * @return {Body}
     */

  }, {
    key: "load",
    value: function load(entity, world) {
      var body = this.generate(entity, world);
      this.setup(entity, body);
      this.update(entity, body);
      return body;
    }
    /**
     * Get the body physics from the entity
     * @param {Entity} entity
     * @return {Body | Constraint}
     */

  }, {
    key: "getBodyFromEntity",
    value: function getBodyFromEntity(entity) {
      return this.physicEngine.getBodyFromEntity(entity);
    }
    /**
     * Get the engine (third party)
     */

  }, {
    key: "getEngine",
    value: function getEngine() {
      return this.physicEngine.getEngine();
    }
    /**
     * Setup the body for the given entity
     * @param {EntityMotion} entity
     * @param {Matter.Body} body
     */

  }, {
    key: "setup",
    value: function setup(entity, body) {
      entity.isControlled() && entity.setCollisionGroup(-1);
      body.isStatic = body.isStatic || entity.isControlled() || entity.isFixed();
    }
    /**
     * Synchronize informations from entity to body
     * Do not apply force to Attach entities
     * @param {EntityMotion | AttachEntity} entity
     * @param {Body | Constraint} physicEntity
     */

  }, {
    key: "update",
    value: function update(entity, physicEntity) {
      if (!(entity instanceof _AttachEntity["default"])) {
        this.physicEngine.applyPhysics(physicEntity, entity);
      }
    }
    /**
     * Get the instance of type using the given physics engine
     * @param {Shape} type
     * @param {PhysicsEngine} physicEngine
     *
     * @return {Shape}
     */

  }], [{
    key: "get",
    value: function get(type) {
      var physicEngine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (physicEngine && !type.instance) {
        type.instance = new type(physicEngine);
      }

      return type.instance;
    }
  }]);
  return Shape;
}();

var _default = Shape;
exports["default"] = _default;

},{"../../entity/types/constraint/AttachEntity.js":54,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],143:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Entity = _interopRequireDefault(require("../../entity/Entity.js"));

var _RectangleShape = _interopRequireDefault(require("./matter/shapes/RectangleShape.js"));

var _EllipseShape = _interopRequireDefault(require("./matter/shapes/EllipseShape.js"));

var _PolyShape = _interopRequireDefault(require("./matter/shapes/PolyShape.js"));

var _CircleShape = _interopRequireDefault(require("./matter/shapes/CircleShape.js"));

var _JointShape = _interopRequireDefault(require("./matter/shapes/JointShape.js"));

var _Shape = _interopRequireDefault(require("./Shape.js"));

/**
 * Shape Loader class
 * Manage and load shapes
 *
 * @property {Object<string, Shape>} mapShapes
 */
var ShapeLoader = /*#__PURE__*/function () {
  function ShapeLoader(physicEngine) {
    var _this$mapShapes;

    (0, _classCallCheck2["default"])(this, ShapeLoader);
    this.mapShapes = (_this$mapShapes = {}, (0, _defineProperty2["default"])(_this$mapShapes, _Entity["default"].shapes.RECT, _RectangleShape["default"]), (0, _defineProperty2["default"])(_this$mapShapes, _Entity["default"].shapes.ELLIPSE, _EllipseShape["default"]), (0, _defineProperty2["default"])(_this$mapShapes, _Entity["default"].shapes.POLY, _PolyShape["default"]), (0, _defineProperty2["default"])(_this$mapShapes, _Entity["default"].shapes.CIRCLE, _CircleShape["default"]), (0, _defineProperty2["default"])(_this$mapShapes, _Entity["default"].shapes.ATTACH, _JointShape["default"]), _this$mapShapes);
    this.physicEngine = physicEngine;
  }
  /**
   * Load entity shape to the Engine world
   * @param {Entity} entity
   * @param {World} world
   *
   * @return {Body}
   */


  (0, _createClass2["default"])(ShapeLoader, [{
    key: "load",
    value: function load(entity, world) {
      if (!this.mapShapes.hasOwnProperty(entity.shape)) {
        throw new TypeError("Shape ".concat(entity.shape, " is not configured"));
      }

      var type = this.mapShapes[entity.shape];
      return type && _Shape["default"].get(type, this.physicEngine).load(entity, world);
    }
    /**
     * Update the physics props from entity
     * @param {Entity} entity
     */

  }, {
    key: "update",
    value: function update(entity) {
      var type = this.mapShapes[entity.shape];
      var body = this.physicEngine.getBodyFromEntity(entity);
      return _Shape["default"].get(type).update(entity, body);
    }
  }]);
  return ShapeLoader;
}();

var _default = ShapeLoader;
exports["default"] = _default;

},{"../../entity/Entity.js":52,"./Shape.js":142,"./matter/shapes/CircleShape.js":145,"./matter/shapes/EllipseShape.js":146,"./matter/shapes/JointShape.js":147,"./matter/shapes/PolyShape.js":148,"./matter/shapes/RectangleShape.js":149,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],144:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _PhysicsEngine2 = _interopRequireDefault(require("../PhysicsEngine.js"));

var _ShapeLoader = _interopRequireDefault(require("../ShapeLoader.js"));

var _Vector = _interopRequireDefault(require("../../../utils/Vector.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Matter Physics Engine class
 * @extends {PhysicsEngine}
 */
var MatterEngine = /*#__PURE__*/function (_PhysicsEngine) {
  (0, _inherits2["default"])(MatterEngine, _PhysicsEngine);

  var _super = _createSuper(MatterEngine);

  function MatterEngine() {
    (0, _classCallCheck2["default"])(this, MatterEngine);
    return _super.call(this);
  }
  /**
   * @override
   */


  (0, _createClass2["default"])(MatterEngine, [{
    key: "init",
    value: function init() {
      this.engine = Matter.Engine.create();
      this.shapeLoader = new _ShapeLoader["default"](this);
    }
    /**
     * @override
     */

  }, {
    key: "loadShape",
    value: function loadShape(entity, world) {
      var shape = this.shapeLoader.load(entity, world);
      Matter.World.add(this.engine.world, shape);
      return shape;
    }
    /**
     * @override
     */

  }, {
    key: "update",
    value: function update(entity) {
      this.shapeLoader.update(entity);
    }
    /**
     * Run the physics engine
     */

  }, {
    key: "run",
    value: function run() {//Matter.Engine.run(this.engine)
    }
    /**
     * Stop the physics engine
     */

  }, {
    key: "stopEngine",
    value: function stopEngine() {
      Matter.World.clear(this.engine.world);
      Matter.Engine.clear(this.engine);
      this.engine = null;
    }
    /**
     * @override
     */

  }, {
    key: "updateEngine",
    value: function updateEngine() {
      Matter.Engine.update(this.engine);
    }
    /**
     * @override
     */

  }, {
    key: "getEngine",
    value: function getEngine() {
      return Matter;
    }
    /**
     * @override
     */

  }, {
    key: "getBodies",
    value: function getBodies() {
      return Matter.Composite.allBodies(this.engine.world);
    }
    /**
     * @override
     */

  }, {
    key: "getJoints",
    value: function getJoints() {
      return Matter.Composite.allConstraints(this.engine.world);
    }
    /**
     * @override
     */

  }, {
    key: "newGroup",
    value: function newGroup() {
      return Matter.Body.nextGroup(true);
    }
    /**
     * @override
     */

  }, {
    key: "updateCollisionFilters",
    value: function updateCollisionFilters(entity) {
      var body = this.getBodyFromEntity(entity);
      body.collisionFilter = entity.collision;
      return true;
    }
    /**
     * @override
     */

  }, {
    key: "updateJointPosition",
    value: function updateJointPosition(world, entity) {
      var vertices = entity.vertices;
      var pointA = entity.toAbsolutePosition(vertices[0]);
      var pointB = entity.toAbsolutePosition(vertices[1]);

      if (entity.attached) {
        var entityA = entity.getLinkedEntityAt(0, world);
        entityA && entityA.movePointTo(pointA, pointB);
        entity.movePointTo(pointA, pointB);
        entity.updatePoints(pointB, new _Vector["default"]({
          x: pointB.x + 1,
          y: pointB.y + 1
        }));
        return true;
      }

      return false;
    }
    /**
     * @override
     */

  }, {
    key: "updateConstraint",
    value: function updateConstraint(entity, constraint) {
      var entityB = constraint.entityB,
          pointA = constraint.pointA,
          pointB = constraint.pointB;
      var body = this.getBodyFromEntity(entity);
      var bodyB = entityB && this.getBodyFromEntity(entityB);

      if (entityB && !bodyB) {
        throw new TypeError("updateConstraint failed! Body not found for entity ".concat(entity.id));
      }

      body.bodyB = bodyB;
      body.angleB = bodyB && bodyB.angle;
      body.pointA = pointA;
      body.pointB = pointB;
    }
    /**
     * @override
     * @todo Implement an intelligent controlling physics
     */

  }, {
    key: "applyPhysics",
    value: function applyPhysics(body, entity) {
      var force = entity.physics.force;

      if (entity.isControlled()) {
        var moveSpeed = 2;
        this.getEngine().Body.setPosition(body, {
          x: body.position.x + moveSpeed,
          y: body.position.y
        });
      } else {
        this.getEngine().Body.applyForce(body, entity.getForcePosition(), force);
      }
    }
    /**
     * @override
     */

  }, {
    key: "removeShape",
    value: function removeShape(entity) {
      var body = this.getBodyFromEntity(entity);
      this.getEngine().World.remove(this.engine.world, body);
    }
    /**
     * @override
     */

  }, {
    key: "isCollide",
    value: function isCollide(entityAId, entityBId) {
      var physicsManager = this.getPhysicsManager();
      var entityA = physicsManager.getEntityById(entityAId);
      var entityB = physicsManager.getEntityById(entityBId);

      if (!entityA || !entityB) {
        throw new TypeError("Cannot check collision - entity not founded (A: ".concat(!!entityA, ", B: ").concat(!!entityB, ")"));
      }

      var bodyA = this.getBodyFromEntity(entityA);
      var bodyB = this.getBodyFromEntity(entityB);

      if (!bodyA || !bodyB) {
        throw new TypeError("Cannot check collision - body not founded (A: ".concat(!!bodyA, ", B: ").concat(!!bodyB, ")"));
      }

      var collision = Matter.SAT.collides(bodyA, bodyB);
      return collision.collided;
    }
  }]);
  return MatterEngine;
}(_PhysicsEngine2["default"]);

var _default = MatterEngine;
exports["default"] = _default;

},{"../../../utils/Vector.js":206,"../PhysicsEngine.js":141,"../ShapeLoader.js":143,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],145:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Shape2 = _interopRequireDefault(require("../../Shape.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Circle Shape class
 * Define the shape for circles (CircleEntity)
 */
var CircleShape = /*#__PURE__*/function (_Shape) {
  (0, _inherits2["default"])(CircleShape, _Shape);

  var _super = _createSuper(CircleShape);

  function CircleShape() {
    (0, _classCallCheck2["default"])(this, CircleShape);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(CircleShape, [{
    key: "generate",

    /**
     * @override
     */
    value: function generate(entity, world) {
      var centerPosition = entity.toCenterPosition();
      var engine = this.getEngine();
      return engine.Bodies.circle(centerPosition.x, centerPosition.y, entity.radius);
    }
  }]);
  return CircleShape;
}(_Shape2["default"]);

var _default = CircleShape;
exports["default"] = _default;

},{"../../Shape.js":142,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],146:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Shape2 = _interopRequireDefault(require("../../Shape.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var EllipseShape = /*#__PURE__*/function (_Shape) {
  (0, _inherits2["default"])(EllipseShape, _Shape);

  var _super = _createSuper(EllipseShape);

  function EllipseShape() {
    (0, _classCallCheck2["default"])(this, EllipseShape);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(EllipseShape, [{
    key: "generate",
    value: function generate(entity, bodies) {
      var centerPosition = entity.toCenterPosition();
      var maxRadiusSqr = Math.pow(Math.max(entity.radius.x, entity.radius.y), 2);
      var minRadiusSqr = Math.pow(Math.min(entity.radius.x, entity.radius.y), 2);

      var ellipseFunc = function ellipseFunc(x) {
        return Math.sqrt((maxRadiusSqr * minRadiusSqr - minRadiusSqr * Math.pow(x, 2)) / maxRadiusSqr);
      };

      var vertices = [];

      for (var x = 0; x < entity.size.width; x += 1) {
        vertices.push({
          x: x,
          y: Math.ceil(ellipseFunc(x - entity.size.width / 2) || 0)
        });
      }

      for (var _x = entity.size.width - 2; _x > 0; _x -= 1) {
        vertices.push({
          x: _x,
          y: Math.ceil(ellipseFunc(_x - entity.size.width / 2) || 0) * -1
        });
      }

      return bodies.fromVertices(centerPosition.x, centerPosition.y, vertices);
    }
  }]);
  return EllipseShape;
}(_Shape2["default"]);

var _default = EllipseShape;
exports["default"] = _default;

},{"../../Shape.js":142,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],147:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Shape2 = _interopRequireDefault(require("../../Shape.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Joint Shape class
 * Define a Shape for AttachEntity type
 */
var JointShape = /*#__PURE__*/function (_Shape) {
  (0, _inherits2["default"])(JointShape, _Shape);

  var _super = _createSuper(JointShape);

  function JointShape() {
    (0, _classCallCheck2["default"])(this, JointShape);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(JointShape, [{
    key: "generate",

    /**
     * @override
     */
    value: function generate(entity, world) {
      var engine = this.getEngine();
      entity.attached && this.addGroup(entity, world);
      return engine.Constraint.create(this.getConstraint(entity, world));
    }
    /**
     * @param {EntityMotion} entity
     * @param {World} world
     * @return {Object}
     */

  }, {
    key: "getConstraint",
    value: function getConstraint(entity, world) {
      var vertices = entity.vertices;
      var entityA = entity.getLinkedEntityAt(0, world);
      var entityB = entity.getLinkedEntityAt(1, world);
      var bodyA = entityA && this.getBodyFromEntity(entityA);
      var bodyB = entityB && this.getBodyFromEntity(entityB);
      var pointA = entityA ? entityA.getRelativeCenterPosition(entity, vertices[0]) : entity.fromRelativePosition(vertices[0]);
      var pointB = entityB ? entityB.getRelativeCenterPosition(entity, vertices[1]) : entity.fromRelativePosition(vertices[1]);
      var _entity$physics = entity.physics,
          stiffness = _entity$physics.stiffness,
          angularStiffness = _entity$physics.angularStiffness,
          angleA = _entity$physics.angleA,
          angleB = _entity$physics.angleB;

      if (entityA && !bodyA || entityB && !bodyB) {
        throw new ReferenceError('Body not yet created or entity not founded');
      }

      return {
        bodyA: bodyA,
        pointA: pointA,
        bodyB: bodyB,
        pointB: pointB,
        stiffness: stiffness,
        angularStiffness: angularStiffness,
        angleA: angleA,
        angleB: angleB
      };
    }
    /**
     * Add the constraint and the attached entities to the same collision group
     * (disable collision between attached bodies)
     * @param {Entity} entity
     * @param {World} world
     */

  }, {
    key: "addGroup",
    value: function addGroup(entity, world) {
      var entityA = entity.getLinkedEntityAt(0, world);
      var entityB = entity.getLinkedEntityAt(1, world);
      var collisionGroup = entity.collision.group || entityA && entityA.collision.group || entityB && entityB.collision.group || this.physicEngine.newGroup();
      entity.collision.group = collisionGroup;

      if (entityA) {
        entityA.collision.group = collisionGroup;
      }

      if (entityB) {
        entityB.collision.group = collisionGroup;
      }
    }
  }]);
  return JointShape;
}(_Shape2["default"]);

var _default = JointShape;
exports["default"] = _default;

},{"../../Shape.js":142,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],148:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Shape2 = _interopRequireDefault(require("../../Shape.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PolyShape = /*#__PURE__*/function (_Shape) {
  (0, _inherits2["default"])(PolyShape, _Shape);

  var _super = _createSuper(PolyShape);

  function PolyShape() {
    (0, _classCallCheck2["default"])(this, PolyShape);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(PolyShape, [{
    key: "generate",

    /**
     * @override
     */
    value: function generate(entity) {
      var centerPosition = entity.toCenterPosition();
      var engine = this.getEngine();
      return engine.Bodies.fromVertices(centerPosition.x, centerPosition.y, entity.vertices);
    }
  }]);
  return PolyShape;
}(_Shape2["default"]);

var _default = PolyShape;
exports["default"] = _default;

},{"../../Shape.js":142,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],149:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Shape2 = _interopRequireDefault(require("../../Shape.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Rectangle Shape class
 * Define the shape for rectangles (RectEntity)
 */
var RectangleShape = /*#__PURE__*/function (_Shape) {
  (0, _inherits2["default"])(RectangleShape, _Shape);

  var _super = _createSuper(RectangleShape);

  function RectangleShape() {
    (0, _classCallCheck2["default"])(this, RectangleShape);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(RectangleShape, [{
    key: "generate",

    /**
     * @override
     */
    value: function generate(entity, world) {
      var centerPosition = entity.toCenterPosition();
      var engine = this.getEngine();
      return engine.Bodies.rectangle(centerPosition.x, centerPosition.y, entity.size.width, entity.size.height, {
        density: entity.physics.density,
        angle: entity.rotation
      });
    }
  }]);
  return RectangleShape;
}(_Shape2["default"]);

var _default = RectangleShape;
exports["default"] = _default;

},{"../../Shape.js":142,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],150:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPES = exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Style = _interopRequireDefault(require("./Style.js"));

var _Size = _interopRequireDefault(require("./Size.js"));

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

var _AssetTypeData = _interopRequireDefault(require("../asset/types/AssetTypeData.js"));

var AttributeType = /*#__PURE__*/function () {
  function AttributeType() {
    (0, _classCallCheck2["default"])(this, AttributeType);
  }

  (0, _createClass2["default"])(AttributeType, null, [{
    key: "extractPrototype",

    /**
     * @param {string} prototype
     * @param {Object} parentPathData
     * @return {string|Class}
     */
    value: function extractPrototype(prototype, parentPathData) {
      if (_.isString(prototype)) {
        var dynamicPrototype = this.extractDynamicPrototypeName(prototype, parentPathData);
        return this.mapPrototype(dynamicPrototype || prototype);
      }

      return prototype;
    }
    /**
     * @param {string} prototype
     * @param {Object} parentPathData
     * @return {string|null}
     */

  }, {
    key: "extractDynamicPrototypeName",
    value: function extractDynamicPrototypeName(prototype, parentPathData) {
      if (_.isObject(parentPathData)) {
        var dynamicTypeRegex = /^\[([a-zA-Z]+)]$/.exec(prototype);
        var dynamicType = dynamicTypeRegex && dynamicTypeRegex[1];

        if (dynamicType) {
          return parentPathData[dynamicType];
        }
      }
    }
    /**
     * @return {string|Class}
     */

  }, {
    key: "mapPrototype",
    value: function mapPrototype(prototype) {
      switch (prototype) {
        case TYPES.STRING:
          return 'string';

        case TYPES.BOOLEAN:
          return 'boolean';

        case TYPES.NUMBER:
          return 'number';

        case TYPES.RANGE:
          return 'range';

        case TYPES.MESH:
          return _AssetTypeData["default"];

        case TYPES.STYLE:
          return _Style["default"];

        case TYPES.SIZE:
          return _Size["default"];

        case TYPES.VECTOR:
          return _Vector["default"];

        default:
          if (this.isArrayType(prototype)) {
            return Array;
          }

          throw new TypeError("AttributeType not supported (".concat(prototype, ")"));
      }
    }
    /**
     * @param {string} type
     * @return {boolean}
     */

  }, {
    key: "isArrayType",
    value: function isArrayType(type) {
      return _.isString(type) && !!type.match(/^3[0-9]+$/);
    }
  }]);
  return AttributeType;
}();
/**
 * Define attribute types :
 * 0XX: Primitive
 * 1XX: Advanced Primitive
 * 2XX: Simple Object
 * 3XX: Arrays
 * 5XX: Advanced Object (Blob, ...)
 * @type {Object}
 */


exports["default"] = AttributeType;
var TYPES = {
  STRING: '001',
  BOOLEAN: '003',
  NUMBER: '004',
  RANGE: '101',
  STYLE: '202',
  SIZE: '203',
  VECTOR: '204',
  ARRAY_STRING: '301',
  ARRAY_NUMBER: '302',
  ARRAY_VECTOR: '303',
  MESH: '501'
};
exports.TYPES = TYPES;

},{"../asset/types/AssetTypeData.js":30,"../utils/Vector.js":206,"./Size.js":155,"./Style.js":156,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],151:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var ComponentAttribute = /*#__PURE__*/function () {
  function ComponentAttribute() {
    (0, _classCallCheck2["default"])(this, ComponentAttribute);
    (0, _defineProperty2["default"])(this, "attrName", void 0);
    (0, _defineProperty2["default"])(this, "attrType", void 0);
    (0, _defineProperty2["default"])(this, "attrValue", void 0);
  }

  (0, _createClass2["default"])(ComponentAttribute, [{
    key: "setAttrName",

    /**
     * @param {string} name
     */
    value: function setAttrName(name) {
      this.attrName = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getAttrName",
    value: function getAttrName() {
      return this.attrName;
    }
    /**
     * @param {string} type
     */

  }, {
    key: "setAttrType",
    value: function setAttrType(type) {
      this.attrType = type;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getAttrType",
    value: function getAttrType() {
      return this.attrType;
    }
    /**
     * @param {*} value
     */

  }, {
    key: "setAttrValue",
    value: function setAttrValue(value) {
      this.attrValue = value;
    }
    /**
     * @return {*}
     */

  }, {
    key: "getAttrValue",
    value: function getAttrValue() {
      return this.attrValue;
    }
    /**
     * @param {*[]} values
     */

  }, {
    key: "concatAttrValue",
    value: function concatAttrValue(values) {
      this.setAttrValue(values);
    }
  }]);
  return ComponentAttribute;
}();

exports["default"] = ComponentAttribute;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],152:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/**
 * @class {DataContext}
 */
var DataContext =
/**
 * @param {number} unitId
 * @param {Vector} center
 * @param {OffscreenCanvasRenderingContext2D} context
 * @param {Size} scaleSize
 * @param {Camera} camera
 * @param {World} world
 */
function DataContext(unitId, center, context, scaleSize, camera, world) {
  (0, _classCallCheck2["default"])(this, DataContext);
  this.unitId = unitId;
  this.center = center;
  this.context = context;
  this.scaleSize = scaleSize;
  this.camera = camera;
  this.world = world;
};

exports["default"] = DataContext;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/interopRequireDefault":12}],153:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

var _Size = _interopRequireDefault(require("./Size.js"));

var _Style = _interopRequireDefault(require("./Style.js"));

var _PerlinNoiseConfig = _interopRequireDefault(require("./PerlinNoiseConfig.js"));

var EntityProps = /*#__PURE__*/function () {
  function EntityProps() {
    (0, _classCallCheck2["default"])(this, EntityProps);
    (0, _defineProperty2["default"])(this, "style", void 0);
    (0, _defineProperty2["default"])(this, "name", void 0);
    (0, _defineProperty2["default"])(this, "position", void 0);
    (0, _defineProperty2["default"])(this, "rotation", void 0);
    (0, _defineProperty2["default"])(this, "size", void 0);
    (0, _defineProperty2["default"])(this, "advancedStyle", void 0);
    (0, _defineProperty2["default"])(this, "noiseConfigs", void 0);
    (0, _defineProperty2["default"])(this, "textureId", void 0);
    this.position = new _Vector["default"]();
    this.size = new _Size["default"](1);
    this.style = new _Style["default"]();
    this.advancedStyle = new _Style["default"]();
    this.noiseConfigs = new _PerlinNoiseConfig["default"]();
  }
  /**
   * @param {Style} advancedStyle
   */


  (0, _createClass2["default"])(EntityProps, [{
    key: "setAdvancedStyle",
    value: function setAdvancedStyle(advancedStyle) {
      this.advancedStyle = advancedStyle;
    }
    /**
     * @return {Style}
     */

  }, {
    key: "getAdvancedStyle",
    value: function getAdvancedStyle() {
      return this.advancedStyle;
    }
    /**
     * @param {PerlinNoiseConfig} noiseConfigs
     */

  }, {
    key: "setNoiseConfigs",
    value: function setNoiseConfigs(noiseConfigs) {
      this.noiseConfigs = noiseConfigs;
    }
    /**
     * @return {PerlinNoiseConfig}
     */

  }, {
    key: "getNoiseConfigs",
    value: function getNoiseConfigs() {
      return this.noiseConfigs;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * Set the entity's position
     * @param {Vector} position
     */

  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.position = position;
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
    /**
     * @param {Size} value
     */

  }, {
    key: "setSize",
    value: function setSize(value) {
      this.size = value;
    }
    /**
     * @return {Size}
     */

  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
    /**
     * @param {Style} style
     */

  }, {
    key: "setStyle",
    value: function setStyle(style) {
      this.style = style;
    }
    /**
     * @return {Style}
     */

  }, {
    key: "getStyle",
    value: function getStyle() {
      return this.style;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setRotation",
    value: function setRotation(value) {
      this.rotation = value;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getRotation",
    value: function getRotation() {
      return this.rotation;
    }
    /**
     * @param {number} textureId
     */

  }, {
    key: "setTextureId",
    value: function setTextureId(textureId) {
      this.textureId = textureId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getTextureId",
    value: function getTextureId() {
      return this.textureId;
    }
  }]);
  return EntityProps;
}();

var _default = EntityProps;
exports["default"] = _default;

},{"../utils/Vector.js":206,"./PerlinNoiseConfig.js":154,"./Size.js":155,"./Style.js":156,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],154:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @class {PerlinNoiseConfig}
 */
var PerlinNoiseConfig = /*#__PURE__*/function () {
  function PerlinNoiseConfig() {
    (0, _classCallCheck2["default"])(this, PerlinNoiseConfig);
    this.seed = null;
    this.octaves = null;
    this.amplitude = null;
    this.persistence = null;
    this.smoothness = null;
  }
  /**
   * @param {number} value
   */


  (0, _createClass2["default"])(PerlinNoiseConfig, [{
    key: "setSeed",
    value: function setSeed(value) {
      this.seed = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getSeed",
    value: function getSeed() {
      return this.seed;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setOctaves",
    value: function setOctaves(value) {
      this.octaves = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getOctaves",
    value: function getOctaves() {
      return this.octaves;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setAmplitude",
    value: function setAmplitude(value) {
      this.amplitude = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getAmplitude",
    value: function getAmplitude() {
      return this.amplitude;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setPersistence",
    value: function setPersistence(value) {
      this.persistence = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getPersistence",
    value: function getPersistence() {
      return this.persistence;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setSmoothness",
    value: function setSmoothness(value) {
      this.smoothness = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getSmoothness",
    value: function getSmoothness() {
      return this.smoothness;
    }
  }]);
  return PerlinNoiseConfig;
}();

var _default = PerlinNoiseConfig;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],155:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @class {Size}
 */
var Size = /*#__PURE__*/function () {
  /**
   * @param {number|{width: number, height: number}} size
   */
  function Size(size) {
    (0, _classCallCheck2["default"])(this, Size);
    var width = 0,
        height = 0;

    if ((0, _typeof2["default"])(size) !== 'object') {
      width = size;
      height = size;
    } else if (size) {
      width = size.width || width;
      height = size.height || height;
    }

    this.width = width;
    this.height = height;
  }
  /**
   * @param {number|string} width
   */


  (0, _createClass2["default"])(Size, [{
    key: "setWidth",
    value: function setWidth(width) {
      this.width = parseInt(width);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
    /**
     * @param {number|string} height
     */

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.height = parseInt(height);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }]);
  return Size;
}();

var _default = Size;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/typeof":21}],156:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/**
 * @class {Style}
 */
var Style = /*#__PURE__*/function () {
  function Style() {
    (0, _classCallCheck2["default"])(this, Style);
    (0, _defineProperty2["default"])(this, "color", void 0);
    (0, _defineProperty2["default"])(this, "colorOpacity", 1);
    (0, _defineProperty2["default"])(this, "fillColor", void 0);
    (0, _defineProperty2["default"])(this, "fillColorOpacity", 1);
    (0, _defineProperty2["default"])(this, "opacity", void 0);
    (0, _defineProperty2["default"])(this, "borderSize", void 0);
  }

  (0, _createClass2["default"])(Style, [{
    key: "setColor",

    /**
     * @param {string} color
     */
    value: function setColor(color) {
      this.color = color;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
    /**
     * @param {number} colorOpacity
     */

  }, {
    key: "setColorOpacity",
    value: function setColorOpacity(colorOpacity) {
      this.colorOpacity = colorOpacity;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getColorOpacity",
    value: function getColorOpacity() {
      return this.colorOpacity;
    }
    /**
     * @param {string} fillColor
     */

  }, {
    key: "setFillColor",
    value: function setFillColor(fillColor) {
      this.fillColor = fillColor;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getFillColor",
    value: function getFillColor() {
      return this.fillColor;
    }
    /**
     * @param {number} fillColorOpacity
     */

  }, {
    key: "setFillColorOpacity",
    value: function setFillColorOpacity(fillColorOpacity) {
      this.fillColorOpacity = fillColorOpacity;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getFillColorOpacity",
    value: function getFillColorOpacity() {
      return this.fillColorOpacity;
    }
    /**
     * @param {number} opacity
     */

  }, {
    key: "setOpacity",
    value: function setOpacity(opacity) {
      this.opacity = opacity;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getOpacity",
    value: function getOpacity() {
      return this.opacity;
    }
    /**
     * @param {number} borderSize
     */

  }, {
    key: "setBorderSize",
    value: function setBorderSize(borderSize) {
      this.borderSize = borderSize;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getBorderSize",
    value: function getBorderSize() {
      return this.borderSize;
    }
  }]);
  return Style;
}();

var _default = Style;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],157:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @abstract
 * @extends {Data}
 */
var AssetData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(AssetData, _Data);

  var _super = _createSuper(AssetData);

  function AssetData() {
    var _this;

    (0, _classCallCheck2["default"])(this, AssetData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "type", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "folderId", void 0);
    return _this;
  }

  (0, _createClass2["default"])(AssetData, [{
    key: "setId",

    /**
     * @param {number} id
     */
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @param {AssetType} type
     */

  }, {
    key: "setType",
    value: function setType(type) {
      this.type = type;
    }
    /**
     * @return {AssetType}
     */

  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
    /**
     * @param {number} folderId
     */

  }, {
    key: "setFolderId",
    value: function setFolderId(folderId) {
      this.folderId = folderId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getFolderId",
    value: function getFolderId() {
      return this.folderId;
    }
  }]);
  return AssetData;
}(_Data2["default"]);

var _default = AssetData;
exports["default"] = _default;

},{"./Data.js":162,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],158:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {AssetsManagerData}
 * @extends {Data}
 */
var AssetsManagerData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(AssetsManagerData, _Data);

  var _super = _createSuper(AssetsManagerData);

  function AssetsManagerData() {
    var _this;

    (0, _classCallCheck2["default"])(this, AssetsManagerData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "assets", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "folders", void 0);
    return _this;
  }

  (0, _createClass2["default"])(AssetsManagerData, [{
    key: "getAssets",

    /**
     * @return {Asset[]}
     */
    value: function getAssets() {
      return this.assets;
    }
    /**
     * @param {Asset[]} assets
     */

  }, {
    key: "setAssets",
    value: function setAssets(assets) {
      this.assets = assets;
    }
    /**
     * @return {Folder[]}
     */

  }, {
    key: "getFolders",
    value: function getFolders() {
      return this.folders;
    }
    /**
     * @param {Folder[]} folders
     */

  }, {
    key: "setFolders",
    value: function setFolders(folders) {
      this.folders = folders;
    }
    /**
     * @param {Asset[]} assets
     */

  }, {
    key: "concatAssets",
    value: function concatAssets(assets) {
      this.setAssets(assets);
    }
    /**
     * @param {Folder[]} folders
     */

  }, {
    key: "concatFolders",
    value: function concatFolders(folders) {
      this.concat(this.folders, folders, function (tItem, sItem) {
        return tItem.getName() === sItem.getName();
      });
    }
  }]);
  return AssetsManagerData;
}(_Data2["default"]);

exports["default"] = AssetsManagerData;

},{"./Data.js":162,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],159:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BlobData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(BlobData, _Data);

  var _super = _createSuper(BlobData);

  function BlobData() {
    var _this;

    (0, _classCallCheck2["default"])(this, BlobData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "size", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "position", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dataUrl", void 0);
    return _this;
  }

  (0, _createClass2["default"])(BlobData, [{
    key: "setSize",

    /**
     * @param {Size} size
     */
    value: function setSize(size) {
      this.size = size;
    }
    /**
     * @return {Size}
     */

  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
    /**
     * @param {Vector} position
     */

  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.position = position;
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
    /**
     * @param {string} dataUrl
     */

  }, {
    key: "setDataUrl",
    value: function () {
      var _setDataUrl = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(dataUrl) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.dataUrl = dataUrl;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setDataUrl(_x) {
        return _setDataUrl.apply(this, arguments);
      }

      return setDataUrl;
    }()
    /**
     * @return {string}
     */

  }, {
    key: "getDataUrl",
    value: function getDataUrl() {
      return this.dataUrl;
    }
  }]);
  return BlobData;
}(_Data2["default"]);

var _default = BlobData;
exports["default"] = _default;

},{"./Data.js":162,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17,"@babel/runtime/regenerator":25}],160:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {CameraData}
 * @extends {Data}
 */
var CameraData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(CameraData, _Data);

  var _super = _createSuper(CameraData);

  function CameraData() {
    var _this;

    (0, _classCallCheck2["default"])(this, CameraData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "position", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "entityId", void 0);
    return _this;
  }

  (0, _createClass2["default"])(CameraData, [{
    key: "setPosition",

    /**
     * @param {Vector} position
     */
    value: function setPosition(position) {
      this.position = position;
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
    /**
     * @param {number} entityId
     */

  }, {
    key: "setEntityId",
    value: function setEntityId(entityId) {
      this.entityId = entityId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getEntityId",
    value: function getEntityId() {
      return this.entityId;
    }
    /**
     * @param {string|number} x
     */

  }, {
    key: "setPositionX",
    value: function setPositionX(x) {
      this.position.x = parseFloat(x);
    }
    /**
     * @param {string|number} y
     */

  }, {
    key: "setPositionY",
    value: function setPositionY(y) {
      this.position.y = parseFloat(y);
    }
    /**
     * @param {string|number} z
     */

  }, {
    key: "setPositionZ",
    value: function setPositionZ(z) {
      this.position.z = parseFloat(z);
    }
    /**
     * @return {number}
     */

  }, {
    key: "getPositionX",
    value: function getPositionX() {
      return this.position.x;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getPositionY",
    value: function getPositionY() {
      return this.position.y;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getPositionZ",
    value: function getPositionZ() {
      return this.position.z;
    }
  }]);
  return CameraData;
}(_Data2["default"]);

var _default = CameraData;
exports["default"] = _default;

},{"./Data.js":162,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],161:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ComponentData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(ComponentData, _Data);

  var _super = _createSuper(ComponentData);

  /**
   * @type {ComponentAttribute[]}
   */
  function ComponentData(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, ComponentData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "attributes", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name || 'Custom Component';
    _this.attributes = [];
    return _this;
  }
  /**
   * @param {number} id
   */


  (0, _createClass2["default"])(ComponentData, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isHidden",
    value: function isHidden() {
      return false;
    }
    /**
     * @param {ComponentAttribute[]} attributes
     */

  }, {
    key: "setAttributes",
    value: function setAttributes(attributes) {
      this.attributes = attributes;
    }
    /**
     * @return {ComponentAttribute[]}
     */

  }, {
    key: "getAttributes",
    value: function getAttributes() {
      return this.attributes;
    }
    /**
     * @param {ComponentAttribute[]} attributes
     */

  }, {
    key: "concatAttributes",
    value: function concatAttributes(attributes) {
      this.concat(this.attributes, attributes, function (tItem, sItem) {
        return tItem.getAttrName() === sItem.getAttrName();
      });
    }
  }]);
  return ComponentData;
}(_Data2["default"]);

exports["default"] = ComponentData;

},{"../../utils/Maths.js":202,"./Data.js":162,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],162:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/**
 * @class {Data}
 */
var Data = /*#__PURE__*/function () {
  function Data() {
    (0, _classCallCheck2["default"])(this, Data);
    (0, _defineProperty2["default"])(this, "dataId", void 0);
  }

  (0, _createClass2["default"])(Data, [{
    key: "setDataId",

    /**
     * Generated when serializing object
     * @param {number|null} id
     */
    value: function setDataId(id) {
      this.dataId = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getDataId",
    value: function getDataId() {
      return this.dataId;
    }
    /**
     * Exportable data will be added to the exported object (ex: world)
     * @return {boolean}
     */

  }, {
    key: "isExportable",
    value: function isExportable() {
      return true;
    }
    /**
     * @param {Object[]} target
     * @param {Object[]} source
     * @param {Function} criteria
     */

  }, {
    key: "concat",
    value: function concat(target, source, criteria) {
      if (target && source) {
        source.forEach(function (sItem) {
          var existIndex = target.findIndex(function (tItem) {
            return criteria(tItem, sItem);
          });

          if (existIndex >= 0) {
            target[existIndex] = _.cloneDeep(sItem);
          } else {
            target.push(_.cloneDeep(sItem));
          }
        });
      }
    }
  }]);
  return Data;
}();

(0, _defineProperty2["default"])(Data, "instance", void 0);
var _default = Data;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],163:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _World = _interopRequireDefault(require("../../world/World.js"));

var _Camera = _interopRequireDefault(require("../../core/Camera.js"));

var _Physics = _interopRequireDefault(require("../../physics/Physics.js"));

var _AssetsManager = _interopRequireDefault(require("../../manager/AssetsManager.js"));

var _Asset = _interopRequireDefault(require("../../asset/Asset.js"));

var _MatterEngine = _interopRequireDefault(require("../../physics/engine/matter/MatterEngine.js"));

var _Folder = _interopRequireDefault(require("../../asset/Folder.js"));

var _Mesh = _interopRequireDefault(require("../../core/Mesh.js"));

var _UnitManager = _interopRequireDefault(require("../../manager/UnitManager.js"));

var _EmptyUnit = _interopRequireDefault(require("../../unit/type/EmptyUnit.js"));

var _GUIPropertyComponent = _interopRequireDefault(require("../../component/internal/gui/property/GUIPropertyComponent.js"));

var _MeshComponent = _interopRequireDefault(require("../../component/internal/MeshComponent.js"));

var _TransformComponent = _interopRequireDefault(require("../../component/internal/TransformComponent.js"));

var _MoveXUnitInstant = _interopRequireDefault(require("../../unit/instant/type/internal/move/MoveXUnitInstant.js"));

var _MoveYUnitInstant = _interopRequireDefault(require("../../unit/instant/type/internal/move/MoveYUnitInstant.js"));

var _MoveFreeUnitInstant = _interopRequireDefault(require("../../unit/instant/type/internal/move/MoveFreeUnitInstant.js"));

var _GridUnitInstant = _interopRequireDefault(require("../../unit/instant/type/internal/grid/GridUnitInstant.js"));

var _AssetUnitInstant = _interopRequireDefault(require("../../unit/instant/type/internal/asset/AssetUnitInstant.js"));

var _GridXUnitInstant = _interopRequireDefault(require("../../unit/instant/type/internal/grid/GridXUnitInstant.js"));

var _GridYUnitInstant = _interopRequireDefault(require("../../unit/instant/type/internal/grid/GridYUnitInstant.js"));

var _CameraUnitInstant = _interopRequireDefault(require("../../unit/instant/type/internal/camera/CameraUnitInstant.js"));

var _ComponentAttribute = _interopRequireDefault(require("../../pobject/ComponentAttribute.js"));

var _CameraComponent = _interopRequireDefault(require("../../component/internal/CameraComponent.js"));

var _SelectionUnitInstant = _interopRequireDefault(require("../../unit/instant/type/internal/edit/SelectionUnitInstant.js"));

var _StyleComponent = _interopRequireDefault(require("../../component/internal/StyleComponent.js"));

/**
 * @class {DataSchema}
 * Used to protect loading data when importing a project
 * the dataId will be generated when the project is saved, and used to instantiate data and check the validity
 */
var DataSchema = /*#__PURE__*/function () {
  function DataSchema() {
    (0, _classCallCheck2["default"])(this, DataSchema);
  }

  (0, _createClass2["default"])(DataSchema, null, [{
    key: "getId",

    /**
     * @param {Class} type
     * @return {number}
     */
    value: function getId(type) {
      var schemaType = this.schema.find(function (vSchema) {
        return vSchema.type === type;
      });

      if (!schemaType) {
        throw new TypeError("Type ".concat(type.name, " not found in DataSchema!"));
      }

      return schemaType.id;
    }
    /**
     * @param {Class} type
     * @return {boolean}
     */

  }, {
    key: "isExcluded",
    value: function isExcluded(type) {
      return this.exclude.includes(type);
    }
    /**
     * @param {number|string} pDataId
     * @param {Data} prototype
     * @return {Data}
     */

  }, {
    key: "newInstance",
    value: function newInstance(pDataId, prototype) {
      var dataId = parseInt(pDataId);
      if (!dataId) return null;
      var schemaType = this.schema.find(function (vSchema) {
        return vSchema.id === dataId;
      });

      if (!schemaType) {
        throw new TypeError("ID ".concat(dataId, " not found in DataSchema!"));
      }

      var type = schemaType.type;

      if (type !== prototype && !(type.prototype instanceof prototype)) {
        throw new TypeError("Type ".concat(type.name, " attached to ID ").concat(dataId, " not match the given prototype ").concat(prototype.name, " !"));
      }

      return new type();
    }
  }]);
  return DataSchema;
}();

(0, _defineProperty2["default"])(DataSchema, "schema", [{
  id: 10,
  type: _World["default"]
}, {
  id: 20,
  type: _UnitManager["default"]
}, {
  id: 30,
  type: _EmptyUnit["default"]
}, {
  id: 40,
  type: _MeshComponent["default"]
}, {
  id: 50,
  type: _TransformComponent["default"]
}, {
  id: 60,
  type: _AssetUnitInstant["default"]
}, {
  id: 70,
  type: _CameraUnitInstant["default"]
}, {
  id: 80,
  type: _CameraComponent["default"]
}, {
  id: 90,
  type: _StyleComponent["default"]
}, {
  id: 4,
  type: _Camera["default"]
}, {
  id: 5,
  type: _Physics["default"]
}, {
  id: 16,
  type: _AssetsManager["default"]
}, {
  id: 17,
  type: _Asset["default"]
}, {
  id: 19,
  type: _MatterEngine["default"]
}, {
  id: 23,
  type: _Folder["default"]
}, {
  id: 24,
  type: _Mesh["default"]
}, {
  id: 25,
  type: _ComponentAttribute["default"]
}]);
(0, _defineProperty2["default"])(DataSchema, "exclude", [_GUIPropertyComponent["default"], _MoveXUnitInstant["default"], _MoveYUnitInstant["default"], _MoveFreeUnitInstant["default"], _GridUnitInstant["default"], _GridXUnitInstant["default"], _GridYUnitInstant["default"], _SelectionUnitInstant["default"]]);
var _default = DataSchema;
exports["default"] = _default;

},{"../../asset/Asset.js":26,"../../asset/Folder.js":27,"../../component/internal/CameraComponent.js":32,"../../component/internal/MeshComponent.js":33,"../../component/internal/StyleComponent.js":34,"../../component/internal/TransformComponent.js":35,"../../component/internal/gui/property/GUIPropertyComponent.js":40,"../../core/Camera.js":43,"../../core/Mesh.js":48,"../../manager/AssetsManager.js":136,"../../manager/UnitManager.js":138,"../../physics/Physics.js":140,"../../physics/engine/matter/MatterEngine.js":144,"../../pobject/ComponentAttribute.js":151,"../../unit/instant/type/internal/asset/AssetUnitInstant.js":186,"../../unit/instant/type/internal/camera/CameraUnitInstant.js":187,"../../unit/instant/type/internal/edit/SelectionUnitInstant.js":188,"../../unit/instant/type/internal/grid/GridUnitInstant.js":189,"../../unit/instant/type/internal/grid/GridXUnitInstant.js":190,"../../unit/instant/type/internal/grid/GridYUnitInstant.js":191,"../../unit/instant/type/internal/move/MoveFreeUnitInstant.js":192,"../../unit/instant/type/internal/move/MoveXUnitInstant.js":193,"../../unit/instant/type/internal/move/MoveYUnitInstant.js":194,"../../unit/type/EmptyUnit.js":195,"../../world/World.js":208,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],164:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

var _Size = _interopRequireDefault(require("../../pobject/Size.js"));

var _Vector = _interopRequireDefault(require("../../utils/Vector.js"));

var _EntityProps = _interopRequireDefault(require("../../pobject/EntityProps.js"));

var _ObjectHelper = _interopRequireDefault(require("../../utils/ObjectHelper.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Class define all entity's data and props (getters and setters)
 * @abstract
 * @extends {Data}
 */
var EntityData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(EntityData, _Data);

  var _super = _createSuper(EntityData);

  /**
   * Used by constraint component
   * @type {number[]}
   */

  /**
   * Used by group component
   * @type {number[]}
   */

  /**
   * @param {EntityProps} props
   */
  function EntityData() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, EntityData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "position", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rotation", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "shape", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "radius", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "vertices", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "physics", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "textureId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectable", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "locked", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "visible", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clonable", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "subEntity", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "style", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "entityLinkIds", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "entityChildIds", void 0);
    _this.id = _Maths["default"].generateId();
    _this.selectable = true;
    _this.locked = false;
    _this.visible = false;
    _this.clonable = true;
    _this.subEntity = false;
    _this.entityLinkIds = [];
    _this.entityChildIds = [];

    _this.setProps(props);

    return _this;
  }
  /**
   * @param {number} id
   */


  (0, _createClass2["default"])(EntityData, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @param {string} shape
     */

  }, {
    key: "setShape",
    value: function setShape(shape) {
      this.shape = shape;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getShape",
    value: function getShape() {
      return this.shape;
    }
    /**
     * @param {number} radius
     */

  }, {
    key: "setRadius",
    value: function setRadius(radius) {
      this.radius = radius;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getRadius",
    value: function getRadius() {
      return this.radius;
    }
    /**
     * @param {number[]} vertices
     */

  }, {
    key: "setVertices",
    value: function setVertices(vertices) {
      this.vertices = vertices;
    }
    /**
     * @return {number[]}
     */

  }, {
    key: "getVertices",
    value: function getVertices() {
      return this.vertices;
    }
    /**
     * @param {StyleUtil} advancedStyle
     */

  }, {
    key: "setAdvancedStyle",
    value: function setAdvancedStyle(advancedStyle) {
      this.advancedStyle = advancedStyle;
    }
    /**
     * @return {StyleUtil}
     */

  }, {
    key: "getAdvancedStyle",
    value: function getAdvancedStyle() {
      return this.advancedStyle;
    }
    /**
     * @param {PerlinNoiseConfig} noiseConfigs
     */

  }, {
    key: "setNoiseConfigs",
    value: function setNoiseConfigs(noiseConfigs) {
      this.noiseConfigs = noiseConfigs;
    }
    /**
     * @return {PerlinNoiseConfig}
     */

  }, {
    key: "getNoiseConfigs",
    value: function getNoiseConfigs() {
      return this.noiseConfigs;
    }
    /**
     * @param {EntityProps} props
     */

  }, {
    key: "setProps",
    value: function setProps(props) {
      this.props = new _EntityProps["default"]();

      _ObjectHelper["default"].assign(this.props, props);

      var style = this.props.getStyle();

      if (style.getColor() === undefined) {
        style.setColor('#000000');
      }

      if (style.getFillColor() === undefined) {
        style.setFillColor('#555555');
      }

      this.name = this.props.name;
      this.textureId = this.props.textureId;
      this.position = this.props.position;
      this.rotation = this.props.rotation || 0;
      this.size = this.props.size || new _Size["default"](1);
      this.style = this.props.style;
      this.advancedStyle = Object.assign({
        backgroundImageBlob: '',
        backgroundImageRepeat: false
      }, this.props.advancedStyle || {});
      this.noiseConfigs = this.props.noiseConfigs || {};
    }
    /**
     * @return {EntityProps}
     */

  }, {
    key: "getProps",
    value: function getProps() {
      return this.props;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @param {string} backgroundImageBlob
     */

  }, {
    key: "setBackgroundImageBlob",
    value: function setBackgroundImageBlob(backgroundImageBlob) {
      this.advancedStyle.backgroundImageBlob = backgroundImageBlob;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getBackgroundImageBlob",
    value: function getBackgroundImageBlob() {
      return this.advancedStyle.backgroundImageBlob;
    }
    /**
     * @param {boolean} repeat
     */

  }, {
    key: "setBackgroundImageRepeat",
    value: function setBackgroundImageRepeat(repeat) {
      this.advancedStyle.backgroundImageRepeat = repeat;
      this.setGenerated(false);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getBackgroundImageRepeat",
    value: function getBackgroundImageRepeat() {
      return this.advancedStyle.backgroundImageRepeat;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isBackgroundImageRepeat",
    value: function isBackgroundImageRepeat() {
      return this.getBackgroundImageRepeat();
    }
    /**
     * Set the entity's position
     * @param {Vector} position
     */

  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.position = position;
    }
    /**
     * @return {Vector}
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
    /**
     * @param {string} x
     */

  }, {
    key: "setPositionX",
    value: function setPositionX(x) {
      var _this$position = this.position,
          y = _this$position.y,
          z = _this$position.z;
      this.setPositionAndGenerate(new _Vector["default"]({
        x: parseInt(x),
        y: y,
        z: z
      }));
    }
    /**
     * @param {string} y
     */

  }, {
    key: "setPositionY",
    value: function setPositionY(y) {
      var _this$position2 = this.position,
          x = _this$position2.x,
          z = _this$position2.z;
      this.setPositionAndGenerate(new _Vector["default"]({
        x: x,
        y: parseInt(y),
        z: z
      }));
    }
    /**
     * @param {string} z
     */

  }, {
    key: "setPositionZ",
    value: function setPositionZ(z) {
      var _this$position3 = this.position,
          x = _this$position3.x,
          y = _this$position3.y;
      this.setPositionAndGenerate({
        x: x,
        y: y,
        z: parseInt(z)
      });
    }
    /**
     * @return {number}
     */

  }, {
    key: "getPositionX",
    value: function getPositionX() {
      return this.position.x;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getPositionY",
    value: function getPositionY() {
      return this.position.y;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getPositionZ",
    value: function getPositionZ() {
      return this.position.z;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setRotation",
    value: function setRotation(value) {
      this.rotation = value;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getRotation",
    value: function getRotation() {
      return this.rotation;
    }
    /**
     * @param {{width: number, height: number}} value
     */

  }, {
    key: "setSize",
    value: function setSize(value) {
      this.size = value;
    }
    /**
     * @return {Size}
     */

  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.size.width;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.size.height;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getRotationDegree",
    value: function getRotationDegree() {
      return _Maths["default"].toDegree(this.rotation);
    }
    /**
     * @param {string|number} width
     */

  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.setSizeAndGenerate({
        width: parseInt(width),
        height: this.size.height
      });
    }
    /**
     * @param {string|number} height
     */

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.setSizeAndGenerate({
        width: this.size.width,
        height: parseInt(height)
      });
    }
    /**
     * @param {number} angle
     */

  }, {
    key: "setRotationDegree",
    value: function setRotationDegree(angle) {
      this.setRotationAndGenerate(_Maths["default"].fromDegree(angle));
    }
    /**
     * @param {string} style
     */

  }, {
    key: "setStyle",
    value: function setStyle(style) {
      this.style = style;
    }
    /**
     * @return {StyleUtil}
     */

  }, {
    key: "getStyle",
    value: function getStyle() {
      return this.style;
    }
    /**
     * @param {boolean} value
     */

  }, {
    key: "setVisible",
    value: function setVisible(value) {
      this.visible = value;
    }
    /**
     * @param {boolean} selectable
     */

  }, {
    key: "setSelectable",
    value: function setSelectable(selectable) {
      this.selectable = selectable;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getSelectable",
    value: function getSelectable() {
      return this.selectable;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isSelectable",
    value: function isSelectable() {
      return this.getSelectable();
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.selected;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.visible;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.getVisible();
    }
    /**
     * @param {boolean} locked
     */

  }, {
    key: "setLocked",
    value: function setLocked(locked) {
      this.locked = locked;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getLocked",
    value: function getLocked() {
      return this.locked;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isLocked",
    value: function isLocked() {
      return this.getLocked();
    }
    /**
     * @param {boolean} clonable
     */

  }, {
    key: "setClonable",
    value: function setClonable(clonable) {
      this.clonable = clonable;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getClonable",
    value: function getClonable() {
      return this.clonable;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setSeed",
    value: function setSeed(value) {
      this.noiseConfigs.seed = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getSeed",
    value: function getSeed() {
      return this.noiseConfigs.seed;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setOctaves",
    value: function setOctaves(value) {
      this.noiseConfigs.octaves = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getOctaves",
    value: function getOctaves() {
      return this.noiseConfigs.octaves;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setAmplitude",
    value: function setAmplitude(value) {
      this.noiseConfigs.amplitude = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getAmplitude",
    value: function getAmplitude() {
      return this.noiseConfigs.amplitude;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setPersistence",
    value: function setPersistence(value) {
      this.noiseConfigs.persistence = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getPersistence",
    value: function getPersistence() {
      return this.noiseConfigs.persistence;
    }
    /**
     * @param {number} value
     */

  }, {
    key: "setSmoothness",
    value: function setSmoothness(value) {
      this.noiseConfigs.smoothness = value;
    }
    /**
     * @returns {number}
     */

  }, {
    key: "getSmoothness",
    value: function getSmoothness() {
      return this.noiseConfigs.smoothness;
    }
    /**
     * @param {PhysicsProps} physics
     */

  }, {
    key: "setPhysics",
    value: function setPhysics(physics) {
      this.physics = physics;
    }
    /**
     * @return {PhysicsProps}
     */

  }, {
    key: "getPhysics",
    value: function getPhysics() {
      return this.physics;
    }
    /**
     * @param {number} textureId
     */

  }, {
    key: "setTextureId",
    value: function setTextureId(textureId) {
      this.textureId = textureId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getTextureId",
    value: function getTextureId() {
      return this.textureId;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getSubEntity",
    value: function getSubEntity() {
      return this.subEntity;
    }
    /**
     * @param {boolean} subEntity
     */

  }, {
    key: "setSubEntity",
    value: function setSubEntity(subEntity) {
      this.subEntity = subEntity;
    }
    /**
     * subEntity will not be show in the layers panel, and will be inactive (not selected, not focusable)
     * @return {boolean}
     */

  }, {
    key: "isSubEntity",
    value: function isSubEntity() {
      return this.getSubEntity();
    }
    /**
     * @return {number[]}
     */

  }, {
    key: "getEntityLinkIds",
    value: function getEntityLinkIds() {
      return this.entityLinkIds;
    }
    /**
     * @param {number[]} ids
     */

  }, {
    key: "setEntityLinkIds",
    value: function setEntityLinkIds(ids) {
      this.entityLinkIds = ids;
    }
    /**
     * @return {number[]}
     */

  }, {
    key: "getEntityChildIds",
    value: function getEntityChildIds() {
      return this.entityChildIds;
    }
    /**
     * @param {number[]} ids
     */

  }, {
    key: "setEntityChildIds",
    value: function setEntityChildIds(ids) {
      this.entityChildIds = ids;
    }
  }]);
  return EntityData;
}(_Data2["default"]);

EntityData.shapes = {
  ELLIPSE: 'ellipse',
  RECT: 'rect',
  LINE: 'line',
  POLY: 'poly',
  CIRCLE: 'circle',
  ATTACH: 'attach',
  GROUP: 'group',
  VIRTUAL: 'virtual',
  COMPONENT: 'component'
};
var _default = EntityData;
exports["default"] = _default;

},{"../../pobject/EntityProps.js":153,"../../pobject/Size.js":155,"../../utils/Maths.js":202,"../../utils/ObjectHelper.js":203,"../../utils/Vector.js":206,"./Data.js":162,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],165:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @abstract
 * @extends {Data}
 */
var FolderData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(FolderData, _Data);

  var _super = _createSuper(FolderData);

  function FolderData() {
    var _this;

    (0, _classCallCheck2["default"])(this, FolderData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "folderId", void 0);
    return _this;
  }

  (0, _createClass2["default"])(FolderData, [{
    key: "setId",

    /**
     * @param {number} id
     */
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number|null}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @param {number} folderId
     */

  }, {
    key: "setFolderId",
    value: function setFolderId(folderId) {
      this.folderId = folderId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getFolderId",
    value: function getFolderId() {
      return this.folderId;
    }
  }]);
  return FolderData;
}(_Data2["default"]);

exports["default"] = FolderData;

},{"./Data.js":162,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],166:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {PhysicsData}
 * @extends {Data}
 */
var PhysicsData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(PhysicsData, _Data);

  var _super = _createSuper(PhysicsData);

  function PhysicsData() {
    var _this;

    (0, _classCallCheck2["default"])(this, PhysicsData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "physicsEngine", void 0);
    return _this;
  }

  (0, _createClass2["default"])(PhysicsData, [{
    key: "setPhysicsEngine",

    /**
     * @param {PhysicsEngine} physicsEngine
     */
    value: function setPhysicsEngine(physicsEngine) {
      this.physicsEngine = physicsEngine;
    }
    /**
     * @return {PhysicsEngine}
     */

  }, {
    key: "getPhysicsEngine",
    value: function getPhysicsEngine() {
      return this.physicsEngine;
    }
  }]);
  return PhysicsData;
}(_Data2["default"]);

exports["default"] = PhysicsData;

},{"./Data.js":162,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],167:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {PhysicsEngineData}
 * @extends {Data}
 */
var PhysicsEngineData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(PhysicsEngineData, _Data);

  var _super = _createSuper(PhysicsEngineData);

  function PhysicsEngineData() {
    (0, _classCallCheck2["default"])(this, PhysicsEngineData);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(PhysicsEngineData, [{
    key: "setPhysicsManager",

    /**
     * Set the physics manager that loaded the phyiscs engine
     * @param {PhysicsData} physicsManager
     */
    value: function setPhysicsManager(physicsManager) {
      this.physicsManager = physicsManager;
    }
    /**
     * Get the physics manager that loaded the phyiscs engine
     */

  }, {
    key: "getPhysicsManager",
    value: function getPhysicsManager() {
      return this.physicsManager;
    }
  }]);
  return PhysicsEngineData;
}(_Data2["default"]);

exports["default"] = PhysicsEngineData;

},{"./Data.js":162,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],168:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ComponentData = _interopRequireDefault(require("./ComponentData.js"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

var _Maths = _interopRequireDefault(require("../../utils/Maths.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnitData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(UnitData, _Data);

  var _super = _createSuper(UnitData);

  function UnitData(name) {
    var _this;

    (0, _classCallCheck2["default"])(this, UnitData);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "components", void 0);
    _this.id = _Maths["default"].generateId();
    _this.name = name || 'Custom Component';
    _this.components = [];
    return _this;
  }
  /**
   * @param {number} id
   */


  (0, _createClass2["default"])(UnitData, [{
    key: "setId",
    value: function setId(id) {
      this.id = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
    /**
     * @param {string} name
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
    /**
     * @return {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * @param {ComponentData[]} components
     */

  }, {
    key: "setComponents",
    value: function setComponents(components) {
      this.components = components;
    }
    /**
     * @return {ComponentData[]}
     */

  }, {
    key: "getComponents",
    value: function getComponents() {
      return this.components;
    }
    /**
     * @template T
     * @param {T} type
     * @return {T}
     */

  }, {
    key: "getComponent",
    value: function getComponent(type) {
      if (!(type.prototype instanceof _ComponentData["default"])) {
        throw new TypeError("Component type must be instance of ComponentData (".concat(type.name, " given)"));
      }

      return this.getComponents().find(function (component) {
        return component instanceof type;
      });
    }
    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */

  }, {
    key: "hasComponents",
    value: function hasComponents(componentClasses) {
      for (var iComponentClass in componentClasses) {
        var componentClass = componentClasses[iComponentClass];

        if (componentClasses.hasOwnProperty(iComponentClass) && !this.getComponent(componentClass)) {
          return false;
        }
      }

      return true;
    }
    /**
     * @param {ComponentData[]} componentClasses
     * @return {boolean}
     */

  }, {
    key: "hasAnyComponents",
    value: function hasAnyComponents(componentClasses) {
      for (var iComponentClass in componentClasses) {
        var componentClass = componentClasses[iComponentClass];

        if (componentClasses.hasOwnProperty(iComponentClass) && this.getComponent(componentClass)) {
          return true;
        }
      }

      return false;
    }
    /**
     * @param {Class<ComponentData>} componentClass
     */

  }, {
    key: "createComponent",
    value: function createComponent(componentClass) {
      if (!this.getComponent(componentClass)) {
        this.components.push(new componentClass());
      } else {
        throw new TypeError("Component ".concat(componentClass.name, " already created!"));
      }
    }
    /**
     * @param {number} componentId
     */

  }, {
    key: "deleteComponent",
    value: function deleteComponent(componentId) {
      var iComponent = this.findIndexComponentById(componentId);
      this.components.splice(iComponent, 1);
    }
    /**
     * @param {number} componentId
     * @return {number}
     */

  }, {
    key: "findIndexComponentById",
    value: function findIndexComponentById(componentId) {
      return this.components.findIndex(function (component) {
        return component.id === componentId;
      });
    }
    /**
     * @param {ComponentData[]} components
     */

  }, {
    key: "concatComponents",
    value: function concatComponents(components) {
      this.concat(this.components, components, function (tItem, sItem) {
        return tItem.getName() === sItem.getName();
      });
    }
  }]);
  return UnitData;
}(_Data2["default"]);

exports["default"] = UnitData;

},{"../../utils/Maths.js":202,"./ComponentData.js":161,"./Data.js":162,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],169:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @extends {Data}
 */
var UnitManagerData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(UnitManagerData, _Data);

  var _super = _createSuper(UnitManagerData);

  function UnitManagerData() {
    var _this;

    (0, _classCallCheck2["default"])(this, UnitManagerData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "units", void 0);
    return _this;
  }

  (0, _createClass2["default"])(UnitManagerData, [{
    key: "setUnits",

    /**
     * @param {Unit[]} units
     */
    value: function setUnits(units) {
      this.units = units;
    }
    /**
     * @return {Unit[]}
     */

  }, {
    key: "getUnits",
    value: function getUnits() {
      return this.units;
    }
    /**
     * @param {Unit[]} units
     */

  }, {
    key: "concatUnits",
    value: function concatUnits(units) {
      this.setUnits(units);
    }
  }]);
  return UnitManagerData;
}(_Data2["default"]);

exports["default"] = UnitManagerData;

},{"./Data.js":162,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],170:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Data2 = _interopRequireDefault(require("./Data.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {WorldData}
 * @extends {Data}
 *
 * @property {Camera} camera
 */
var WorldData = /*#__PURE__*/function (_Data) {
  (0, _inherits2["default"])(WorldData, _Data);

  var _super = _createSuper(WorldData);

  function WorldData() {
    var _this;

    (0, _classCallCheck2["default"])(this, WorldData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unitManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "camera", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "physics", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "assetsManager", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cameraUnitId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "resolution", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showGrid", void 0);
    return _this;
  }

  (0, _createClass2["default"])(WorldData, [{
    key: "set",

    /**
     * @param {World} data
     */
    value: function set(data) {
      var _this2 = this;

      if (data instanceof WorldData) {
        Object.getOwnPropertyNames(this).map(function (prop) {
          return _this2[prop] = data[prop];
        });
        this.reload();
      } else {
        throw new TypeError('Cannot set the new world, data must be instance of World class');
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      throw new TypeError('World.reload must be implemented!');
    }
    /**
     * @param {UnitManagerData} unitManager
     */

  }, {
    key: "setUnitManager",
    value: function setUnitManager(unitManager) {
      this.unitManager = unitManager;
    }
    /**
     * @param {CameraData} camera
     */

  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
    }
    /**
     * @param {PhysicsData} physics
     */

  }, {
    key: "setPhysics",
    value: function setPhysics(physics) {
      this.physics = physics;
    }
    /**
     * @param {TerrainManagerData} terrainManager
     */

  }, {
    key: "setTerrainManager",
    value: function setTerrainManager(terrainManager) {
      this.terrainManager = terrainManager;
    }
    /**
     * @param {AssetsManagerData} assetsManager
     */

  }, {
    key: "setAssetsManager",
    value: function setAssetsManager(assetsManager) {
      this.assetsManager = assetsManager;
    }
    /**
     * Get the physics manager
     * @return {Physics}
     */

  }, {
    key: "getPhysics",
    value: function getPhysics() {
      return this.physics;
    }
    /**
     * @return {UnitManager}
     */

  }, {
    key: "getUnitManager",
    value: function getUnitManager() {
      return this.unitManager;
    }
    /**
     * @return {TerrainManager}
     */

  }, {
    key: "getTerrainManager",
    value: function getTerrainManager() {
      return this.terrainManager;
    }
    /**
     * @return {AssetsManager}
     */

  }, {
    key: "getAssetsManager",
    value: function getAssetsManager() {
      return this.assetsManager;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getCameraUnitId",
    value: function getCameraUnitId() {
      return this.cameraUnitId;
    }
    /**
     * @param {number} id
     */

  }, {
    key: "setCameraUnitId",
    value: function setCameraUnitId(id) {
      this.cameraUnitId = id;
    }
    /**
     * Get the principal camera (active)
     * @return {Camera}
     */

  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }
    /**
     * @return {Size}
     */

  }, {
    key: "getResolution",
    value: function getResolution() {
      return this.resolution;
    }
    /**
     * @param {Size} resolution
     */

  }, {
    key: "setResolution",
    value: function setResolution(resolution) {
      this.resolution = resolution;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "getShowGrid",
    value: function getShowGrid() {
      return this.showGrid;
    }
    /**
     * @param {boolean} showGrid
     */

  }, {
    key: "setShowGrid",
    value: function setShowGrid(showGrid) {
      this.showGrid = showGrid;
    }
  }], [{
    key: "new",
    value: function _new() {
      this.instance = new this();
    }
  }]);
  return WorldData;
}(_Data2["default"]);

(0, _defineProperty2["default"])(WorldData, "instance", void 0);
var _default = WorldData;
exports["default"] = _default;

},{"./Data.js":162,"@babel/runtime/helpers/assertThisInitialized":3,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],171:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Renderer2 = _interopRequireDefault(require("./Renderer.js"));

var _Constant = require("../core/Constant.js");

var _Context = require("../core/Context.js");

var _Window = _interopRequireDefault(require("../core/Window.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * ObjectRenderer class
 * Manager the renderer for entities
 * @extends {Renderer}
 */
var ObjectRenderer = /*#__PURE__*/function (_Renderer) {
  (0, _inherits2["default"])(ObjectRenderer, _Renderer);

  var _super = _createSuper(ObjectRenderer);

  function ObjectRenderer() {
    var _this;

    (0, _classCallCheck2["default"])(this, ObjectRenderer);
    _this = _super.call(this);
    /**
     * @type {{mesh: Mesh, position: Vector}[]}
     */

    _this.meshes = [];

    _this.initCanvas();

    return _this;
  }

  (0, _createClass2["default"])(ObjectRenderer, [{
    key: "initCanvas",
    value: function initCanvas() {
      var _Window$get = _Window["default"].get(),
          size = _Window$get.size;

      this.canvas = new OffscreenCanvas(size.width, size.height);
      this.context = this.canvas.getContext(_Constant.CANVAS_CONTEXT_TYPE);
    }
    /**
     * @override
     */

  }, {
    key: "draw",
    value: function draw(mesh, position) {
      this.add(mesh, position);
    }
    /**
     * @override
     */

  }, {
    key: "clear",
    value: function clear() {
      var _Window$get2 = _Window["default"].get(),
          size = _Window$get2.size;

      _Context.objectContext.canvas.width = size.width;
      this.context.canvas.width = size.width;
    }
    /**
     * Render the meshes to the screen
     * @param {Camera} camera
     * @todo Optimize this to not delete all meshes (rerender just entities updated)
     */

  }, {
    key: "render",
    value: function render(camera) {
      this.clear();

      for (var iMesh in this.meshes) {
        if (this.meshes.hasOwnProperty(iMesh)) {
          var _this$meshes$iMesh = this.meshes[iMesh],
              mesh = _this$meshes$iMesh.mesh,
              position = _this$meshes$iMesh.position;

          var _camera$toCameraScale = camera.toCameraScale(camera.toCanvasCoord(position)),
              x = _camera$toCameraScale.x,
              y = _camera$toCameraScale.y;

          _Context.objectContext.drawImage(mesh.context.canvas, x, y);
        }
      }

      this.meshes = [];
    }
    /**
     * @param {Mesh} mesh
     * @param {Vector} position
     */

  }, {
    key: "add",
    value: function add(mesh, position) {
      this.meshes.push({
        mesh: mesh,
        position: position
      });
    }
  }]);
  return ObjectRenderer;
}(_Renderer2["default"]);

var _default = ObjectRenderer;
exports["default"] = _default;

},{"../core/Constant.js":44,"../core/Context.js":45,"../core/Window.js":51,"./Renderer.js":172,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],172:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @abstract
 * Renderer class
 * Render elements (entities, menus, ...) to the screen
 */
var Renderer = /*#__PURE__*/function () {
  function Renderer() {
    (0, _classCallCheck2["default"])(this, Renderer);
  }

  (0, _createClass2["default"])(Renderer, [{
    key: "draw",

    /**
     * @abstract
     * @param {Mesh} mesh
     * @param {Vector} position
     */
    value: function draw(mesh, position) {
      throw new TypeError('Renderer.draw must be implemented');
    }
    /**
     * @abstract
     */

  }, {
    key: "clear",
    value: function clear() {
      throw new TypeError('Renderer.clear must be implemented');
    }
    /**
     * @abstract
     * Render the meshes to the screen (layout, entities, ...)
     * @param {Camera|Menu} object
     */

  }, {
    key: "render",
    value: function render(object) {
      throw new TypeError('Renderer.render must be implemented');
    }
  }]);
  return Renderer;
}();

var _default = Renderer;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],173:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Constant = require("../../core/Constant.js");

/**
 * @class {MenuItemUI}
 * @property {MenuItem} element
 * @property {MenuItemUI} parent
 * @property {number} version
 */
var MenuItemUI = /*#__PURE__*/function () {
  function MenuItemUI(item, index, parent) {
    (0, _classCallCheck2["default"])(this, MenuItemUI);
    this.element = item;
    this.index = index;
    this.parent = parent;
    this.version = 0;
  }
  /**
   * @param {UIRenderer} uiRenderer
   */


  (0, _createClass2["default"])(MenuItemUI, [{
    key: "draw",
    value: function draw(uiRenderer) {
      uiRenderer.getType(this).draw(this, uiRenderer);
    }
    /**
     * @return {string}
     */

  }, {
    key: "getId",
    value: function getId() {
      var zone = this.element.zone;
      var parentIndex = this.parent && this.parent.index || 0;
      return "".concat(_Constant.HTML_ID_PREFIX).concat(zone, "-").concat(parentIndex, "-").concat(this.index);
    }
  }]);
  return MenuItemUI;
}();

var _default = MenuItemUI;
exports["default"] = _default;

},{"../../core/Constant.js":44,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],174:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _SchemaMeta = _interopRequireDefault(require("./SchemaMeta.js"));

/**
 * @class {Schema}
 */
var Schema = /*#__PURE__*/function () {
  function Schema() {
    (0, _classCallCheck2["default"])(this, Schema);
  }

  (0, _createClass2["default"])(Schema, null, [{
    key: "getMeta",

    /**
     * @param {string} prefix
     * @param {SchemaMeta} rootMeta
     * @returns {SchemaMeta}
     */
    value: function getMeta() {
      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var rootMeta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      !rootMeta && (rootMeta = _SchemaMeta["default"]);
      var resultMeta = {};

      for (var eMetaData in rootMeta) {
        if (rootMeta.hasOwnProperty(eMetaData)) {
          var _rootMeta$eMetaData = rootMeta[eMetaData],
              type = _rootMeta$eMetaData.type,
              meta = _rootMeta$eMetaData.meta,
              prototype = _rootMeta$eMetaData.prototype;
          var metaPrefix = "".concat(prefix).concat(eMetaData);
          resultMeta[metaPrefix] = {
            prototype: prototype || this.getPrototypeOf(type),
            type: type || prototype
          };
          var subMeta = meta;

          if (subMeta) {
            resultMeta = Object.assign(resultMeta, this.getMeta("".concat(metaPrefix, "."), subMeta));
          }
        }
      }

      return resultMeta;
    }
    /**
     * Get the prototype from the given type
     * @param {Class|string} type
     * @return {Class|string|null}
     */

  }, {
    key: "getPrototypeOf",
    value: function getPrototypeOf(type) {
      var prototype = type;

      if (!_.isString(type) && type !== Array) {
        prototype = this.findDataPrototypeOf(type);

        if (!prototype) {
          throw new TypeError("".concat(type.name, " must extends Data type class!"));
        }
      }

      return prototype;
    }
    /**
     * Find parent Data class
     * @param {Class} type
     * @return {Class|null}
     */

  }, {
    key: "findDataPrototypeOf",
    value: function findDataPrototypeOf(type) {
      var prototype = Object.getPrototypeOf(type);

      if (prototype && prototype.name) {
        if (prototype.name.match(/^[a-zA-Z]+Data$/)) {
          return prototype;
        } else {
          return this.findDataPrototypeOf(prototype);
        }
      }

      return null;
    }
    /**
     * @param {string} path
     * @return {string}
     */

  }, {
    key: "getParentPath",
    value: function getParentPath(path) {
      var arrPath = path.split('.');

      if (arrPath.length) {
        arrPath.splice(arrPath.length - 1, 1);
        return arrPath.join('.');
      }
    }
    /**
     * @param {string} path
     * @return {string}
     */

  }, {
    key: "getPathKey",
    value: function getPathKey(path) {
      var arrPath = path.split('.');

      if (arrPath.length) {
        return arrPath[arrPath.length - 1];
      }
    }
  }]);
  return Schema;
}();

var _default = Schema;
exports["default"] = _default;

},{"./SchemaMeta.js":175,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],175:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PrefSchema = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _World = _interopRequireDefault(require("../world/World.js"));

var _AssetsManager = _interopRequireDefault(require("../manager/AssetsManager.js"));

var _Camera = _interopRequireDefault(require("../core/Camera.js"));

var _Physics = _interopRequireDefault(require("../physics/Physics.js"));

var _Asset = _interopRequireDefault(require("../asset/Asset.js"));

var _PhysicsEngine = _interopRequireDefault(require("../physics/engine/PhysicsEngine.js"));

var _Folder = _interopRequireDefault(require("../asset/Folder.js"));

var _AssetType = _interopRequireDefault(require("../asset/types/AssetType.js"));

var _AssetTypeData = _interopRequireDefault(require("../asset/types/AssetTypeData.js"));

var _Unit = _interopRequireDefault(require("../unit/Unit.js"));

var _UnitManager = _interopRequireDefault(require("../manager/UnitManager.js"));

var _Component = _interopRequireDefault(require("../component/Component.js"));

var _ComponentAttribute = _interopRequireDefault(require("../pobject/ComponentAttribute.js"));

var _AttributeType = require("../pobject/AttributeType.js");

var _PrefSchema;

/**
 * Define the schema of project data.
 * Used to serialize/deserialize all data when saving/loading the project.
 * the schema of each data can be defined using type or prototype properties :
 *      - Type: the type can be a string (like TYPES.NUMBER), Array, or a Class of Data type.
 *              if type defined as Data, the Data parent class will be used for serializing,
 *              and the type for deserializing
 *      - Prototype: the prototype can be a string, Array or any Class
 *                   if prototype is specified, it will be used for serializing and deserializing
 */
var PrefSchema = (_PrefSchema = {}, (0, _defineProperty2["default"])(_PrefSchema, _AttributeType.TYPES.VECTOR, {
  x: {
    type: _AttributeType.TYPES.NUMBER
  },
  y: {
    type: _AttributeType.TYPES.NUMBER
  },
  z: {
    type: _AttributeType.TYPES.NUMBER
  }
}), (0, _defineProperty2["default"])(_PrefSchema, _AttributeType.TYPES.SIZE, {
  width: {
    type: _AttributeType.TYPES.NUMBER
  },
  height: {
    type: _AttributeType.TYPES.NUMBER
  }
}), (0, _defineProperty2["default"])(_PrefSchema, _AttributeType.TYPES.MESH, {
  dataId: {
    type: _AttributeType.TYPES.NUMBER
  },
  size: {
    type: _AttributeType.TYPES.SIZE
  },
  position: {
    type: _AttributeType.TYPES.VECTOR
  },
  dataUrl: {
    type: _AttributeType.TYPES.STRING
  }
}), (0, _defineProperty2["default"])(_PrefSchema, _AttributeType.TYPES.STYLE, {
  color: {
    type: _AttributeType.TYPES.STRING
  },
  colorOpacity: {
    type: _AttributeType.TYPES.NUMBER
  },
  fillColor: {
    type: _AttributeType.TYPES.STRING
  },
  fillColorOpacity: {
    type: _AttributeType.TYPES.NUMBER
  },
  borderSize: {
    type: _AttributeType.TYPES.NUMBER
  },
  opacity: {
    type: _AttributeType.TYPES.NUMBER
  }
}), (0, _defineProperty2["default"])(_PrefSchema, _AttributeType.TYPES.ARRAY_VECTOR, {
  element: {
    type: _AttributeType.TYPES.VECTOR
  }
}), (0, _defineProperty2["default"])(_PrefSchema, _AttributeType.TYPES.ARRAY_NUMBER, {
  element: {
    type: _AttributeType.TYPES.NUMBER
  }
}), (0, _defineProperty2["default"])(_PrefSchema, _AttributeType.TYPES.ARRAY_STRING, {
  element: {
    type: _AttributeType.TYPES.STRING
  }
}), _PrefSchema);
exports.PrefSchema = PrefSchema;
var _default = {
  world: {
    type: _World["default"],
    meta: {
      dataId: {
        type: _AttributeType.TYPES.NUMBER
      },
      mouseConstraintId: {
        type: _AttributeType.TYPES.NUMBER
      },
      cameraUnitId: {
        type: _AttributeType.TYPES.NUMBER
      },
      showGrid: {
        type: _AttributeType.TYPES.BOOLEAN
      },
      unitManager: {
        type: _UnitManager["default"],
        meta: {
          dataId: {
            type: _AttributeType.TYPES.NUMBER
          },
          units: {
            type: Array,
            meta: {
              element: {
                type: _Unit["default"],
                meta: {
                  dataId: {
                    type: _AttributeType.TYPES.NUMBER
                  },
                  id: {
                    type: _AttributeType.TYPES.NUMBER
                  },
                  name: {
                    type: _AttributeType.TYPES.STRING
                  },
                  components: {
                    type: Array,
                    meta: {
                      element: {
                        type: _Component["default"],
                        meta: {
                          dataId: {
                            type: _AttributeType.TYPES.NUMBER
                          },
                          id: {
                            type: _AttributeType.TYPES.NUMBER
                          },
                          name: {
                            type: _AttributeType.TYPES.STRING
                          },
                          attributes: {
                            type: Array,
                            meta: {
                              element: {
                                prototype: _ComponentAttribute["default"],
                                meta: {
                                  attrName: {
                                    type: _AttributeType.TYPES.STRING
                                  },
                                  attrType: {
                                    type: _AttributeType.TYPES.STRING
                                  },
                                  attrValue: {
                                    type: '[attrType]'
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      camera: {
        type: _Camera["default"],
        meta: {
          dataId: {
            type: _AttributeType.TYPES.NUMBER
          },
          entityId: {
            type: _AttributeType.TYPES.NUMBER
          },
          position: {
            prototype: _AttributeType.TYPES.VECTOR
          }
        }
      },
      physics: {
        type: _Physics["default"],
        meta: {
          dataId: {
            type: _AttributeType.TYPES.NUMBER
          },
          physicsEngine: {
            type: _PhysicsEngine["default"],
            meta: {
              dataId: {
                type: _AttributeType.TYPES.NUMBER
              }
            }
          }
        }
      },
      resolution: {
        prototype: _AttributeType.TYPES.SIZE
      },
      assetsManager: {
        type: _AssetsManager["default"],
        meta: {
          dataId: {
            type: _AttributeType.TYPES.NUMBER
          },
          assets: {
            type: Array,
            meta: {
              element: {
                type: _Asset["default"],
                meta: {
                  dataId: {
                    type: _AttributeType.TYPES.NUMBER
                  },
                  id: {
                    type: _AttributeType.TYPES.NUMBER
                  },
                  folderId: {
                    type: _AttributeType.TYPES.NUMBER
                  },
                  name: {
                    type: _AttributeType.TYPES.STRING
                  },
                  type: {
                    prototype: _AssetType["default"],
                    meta: {
                      data: {
                        type: _AssetTypeData["default"],
                        meta: {
                          dataId: {
                            type: _AttributeType.TYPES.NUMBER
                          },
                          size: {
                            prototype: _AttributeType.TYPES.SIZE
                          },
                          position: {
                            prototype: _AttributeType.TYPES.VECTOR
                          },
                          dataUrl: {
                            type: _AttributeType.TYPES.STRING
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          folders: {
            type: Array,
            meta: {
              element: {
                type: _Folder["default"],
                meta: {
                  dataId: {
                    type: _AttributeType.TYPES.NUMBER
                  },
                  id: {
                    type: _AttributeType.TYPES.NUMBER
                  },
                  name: {
                    type: _AttributeType.TYPES.STRING
                  },
                  folderId: {
                    type: _AttributeType.TYPES.NUMBER
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
exports["default"] = _default;

},{"../asset/Asset.js":26,"../asset/Folder.js":27,"../asset/types/AssetType.js":29,"../asset/types/AssetTypeData.js":30,"../component/Component.js":31,"../core/Camera.js":43,"../manager/AssetsManager.js":136,"../manager/UnitManager.js":138,"../physics/Physics.js":140,"../physics/engine/PhysicsEngine.js":141,"../pobject/AttributeType.js":150,"../pobject/ComponentAttribute.js":151,"../unit/Unit.js":182,"../world/World.js":208,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],176:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Schema = _interopRequireDefault(require("./Schema.js"));

var _PrimitiveHelper = _interopRequireDefault(require("../utils/PrimitiveHelper.js"));

var _ObjectHelper = _interopRequireDefault(require("../utils/ObjectHelper.js"));

var _DataHelper = _interopRequireDefault(require("../utils/DataHelper.js"));

var _AttributeType = _interopRequireDefault(require("../pobject/AttributeType.js"));

var _SchemaMeta = require("./SchemaMeta.js");

var _Data = _interopRequireDefault(require("../project/data/Data.js"));

var SchemaValidator = /*#__PURE__*/function () {
  function SchemaValidator() {
    (0, _classCallCheck2["default"])(this, SchemaValidator);
    this.schema = _Schema["default"].getMeta();
  }
  /**
   * @param {string} path
   * @param {*} data
   * @param {*} parentPathData
   * @return {*}
   */


  (0, _createClass2["default"])(SchemaValidator, [{
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(path, data) {
        var parentPathData,
            pathPrototype,
            pathDynamicPrototypeName,
            dataValidated,
            props,
            iProp,
            prop,
            childPath,
            childDataValidated,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                parentPathData = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
                pathPrototype = this.getPathPrototype(path, parentPathData);
                pathDynamicPrototypeName = this.getPathDynamicPrototypeName(path, parentPathData);
                _context.next = 5;
                return this.validateByPrototype(data, pathPrototype);

              case 5:
                dataValidated = _context.sent;

                if (!(!_.isString(pathPrototype) && dataValidated)) {
                  _context.next = 21;
                  break;
                }

                props = _ObjectHelper["default"].getProperties(data, pathPrototype);
                _context.t0 = _regenerator["default"].keys(props);

              case 9:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 21;
                  break;
                }

                iProp = _context.t1.value;
                prop = props[iProp];
                childPath = "".concat(path, ".").concat(prop.key) + (pathDynamicPrototypeName ? "[".concat(pathDynamicPrototypeName, "]") : '');
                _context.next = 15;
                return this.validate(childPath, prop.value, data);

              case 15:
                childDataValidated = _context.sent;

                if (!(childDataValidated !== null && childDataValidated !== undefined && prop.key !== 'dataId')) {
                  _context.next = 19;
                  break;
                }

                _context.next = 19;
                return _ObjectHelper["default"].setProperty(dataValidated, prop.key, childDataValidated);

              case 19:
                _context.next = 9;
                break;

              case 21:
                return _context.abrupt("return", dataValidated);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function validate(_x, _x2) {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
    /**
     * @param {*} data
     * @param {*} prototype
     * @return {*}
     */

  }, {
    key: "validateByPrototype",
    value: function () {
      var _validateByPrototype = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data, prototype) {
        var dataValidated;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_.isString(prototype)) {
                  dataValidated = _PrimitiveHelper["default"].validate(data, prototype);
                } else if (prototype.prototype instanceof _Data["default"]) {
                  dataValidated = _DataHelper["default"].validate(data, prototype);
                } else {
                  dataValidated = new prototype();
                }

                return _context2.abrupt("return", dataValidated);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function validateByPrototype(_x3, _x4) {
        return _validateByPrototype.apply(this, arguments);
      }

      return validateByPrototype;
    }()
    /**
     * @param {string} path
     * @param {*} parentPathData
     * @return {string|Class}
     */

  }, {
    key: "getPathPrototype",
    value: function getPathPrototype(path, parentPathData) {
      var pathSchema = this.getPathSchema(path);
      var prototype;

      if (pathSchema) {
        prototype = pathSchema.prototype;
      } else {
        throw new TypeError("".concat(path, " must be defined in the schema"));
      }

      return _AttributeType["default"].extractPrototype(prototype, parentPathData);
    }
    /**
     * @param {string} path
     * @param {*} parentPathData
     * @return {string}
     */

  }, {
    key: "getPathDynamicPrototypeName",
    value: function getPathDynamicPrototypeName(path, parentPathData) {
      var pathSchema = this.getPathSchema(path);

      if (pathSchema) {
        return _AttributeType["default"].extractDynamicPrototypeName(pathSchema.prototype, parentPathData);
      }
    }
    /**
     * @param {string} path
     * @return {{type: *, prototype: *}}
     */

  }, {
    key: "getPathSchema",
    value: function getPathSchema(path) {
      var pathSchema = this.schema[path];

      if (!pathSchema) {
        var pathParentSchema = this.getPathSchema(_Schema["default"].getParentPath(path));

        if (pathParentSchema) {
          var preParentSchema = _SchemaMeta.PrefSchema[pathParentSchema.prototype] || _SchemaMeta.PrefSchema[path.match(/\[(\d+)]/)[1]];

          if (preParentSchema) {
            var preSchema = preParentSchema[_Schema["default"].getPathKey(path).replace(/\[\d+]/, '')];

            if (preSchema) {
              return {
                type: preSchema.type,
                prototype: preSchema.type
              };
            }
          }
        }
      }

      return pathSchema;
    }
    /**
     * @return {SchemaValidator}
     */

  }], [{
    key: "get",
    value: function get() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);
  return SchemaValidator;
}();

(0, _defineProperty2["default"])(SchemaValidator, "instance", void 0);
var _default = SchemaValidator;
exports["default"] = _default;

},{"../pobject/AttributeType.js":150,"../project/data/Data.js":162,"../utils/DataHelper.js":198,"../utils/ObjectHelper.js":203,"../utils/PrimitiveHelper.js":204,"./Schema.js":174,"./SchemaMeta.js":175,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/regenerator":25}],177:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Schema = _interopRequireDefault(require("../schema/Schema.js"));

var _SerDe2 = _interopRequireDefault(require("./SerDe.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {JsSerDe}
 * @extends {SerDe}
 */
var JsSerDe = /*#__PURE__*/function (_SerDe) {
  (0, _inherits2["default"])(JsSerDe, _SerDe);

  var _super = _createSuper(JsSerDe);

  function JsSerDe() {
    (0, _classCallCheck2["default"])(this, JsSerDe);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(JsSerDe, [{
    key: "serialize",

    /**
     * @override
     */
    value: function serialize(data) {
      if (_.isArray(data)) {
        throw new TypeError('Data to export must be an Object');
      }

      var schema = _Schema["default"].getMeta();

      var result = this.exportData('world', data, schema);
      return result.concat('var EngineWorldData = {world}').join('');
    }
    /**
     * @override
     */

  }, {
    key: "deserialize",
    value: function deserialize(data) {
      return null;
    }
    /**
     * @param {string} key
     * @param {Object|Array} data
     * @param {Object} schema
     * @param {string} varname
     * @param {string} schemaPrefix
     *
     * @returns {string[]}
     */

  }, {
    key: "exportData",
    value: function exportData(key, data, schema) {
      var varname = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var instr = [];
      varname = varname ? varname : key;

      if (_.isObject(data) || _.isArray(data)) {
        instr.push("var ".concat(varname, " = new ").concat(!_.isArray(data) ? 'EngineData.' : '').concat(data.constructor.name, "();"));

        for (var iData in data) {
          if (data.hasOwnProperty(iData)) {
            var pKey = "".concat(varname).concat(iData);
            var pSchemaKey = _.isArray(data) ? 'element' : iData;
            var pValue = void 0;
            var subInstr = this.exportData(pSchemaKey, data[iData], schema, pKey);

            if (subInstr.length) {
              instr = instr.concat(subInstr);
              pValue = pKey;
            } else {
              pValue = data[iData];
              pValue = _.isString(pValue) ? "\"".concat(pValue, "\"") : pValue;
            }

            if (data.constructor === Array) {
              instr.push("".concat(varname, "[").concat(iData, "] = ").concat(pValue, ";"));
            } else {
              instr.push("".concat(varname, ".").concat(iData, " = ").concat(pValue, ";"));
            }
          }
        }
      }

      return instr;
    }
  }]);
  return JsSerDe;
}(_SerDe2["default"]);

var _default = JsSerDe;
exports["default"] = _default;

},{"../schema/Schema.js":174,"./SerDe.js":178,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],178:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @abstract
 * @class {SerDe}
 */
var SerDe = /*#__PURE__*/function () {
  function SerDe() {
    (0, _classCallCheck2["default"])(this, SerDe);
  }

  (0, _createClass2["default"])(SerDe, [{
    key: "serialize",

    /**
     * @abstract
     * @param {Object} data
     * @return {string}
     */
    value: function serialize(data) {
      throw new TypeError('SerDe.serialize must be implemented');
    }
    /**
     * @abstract
     * @param {Object|string} data
     * @return {Object|Map<string, *>}
     */

  }, {
    key: "deserialize",
    value: function deserialize(data) {
      throw new TypeError('SerDe.deserialize must be implemented');
    }
  }]);
  return SerDe;
}();

var _default = SerDe;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],179:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _SerDe2 = _interopRequireDefault(require("./SerDe.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {XmlSerDe}
 * @extends {SerDe}
 */
var XmlSerDe = /*#__PURE__*/function (_SerDe) {
  (0, _inherits2["default"])(XmlSerDe, _SerDe);

  var _super = _createSuper(XmlSerDe);

  function XmlSerDe() {
    (0, _classCallCheck2["default"])(this, XmlSerDe);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(XmlSerDe, [{
    key: "serialize",

    /**
     * @override
     */
    value: function serialize(data) {
      if (_.isArray(data)) {
        throw new TypeError('Data to export must be an Object');
      }

      var xmlSerializer = new XMLSerializer();
      var root = document.implementation.createDocument('', '', null);
      var dataNode = this.exportData('project', data, root);
      root.appendChild(dataNode);
      return xmlSerializer.serializeToString(root);
    }
    /**
     * @override
     */

  }, {
    key: "deserialize",
    value: function deserialize(data) {
      if (_.isArray(data)) {
        throw new TypeError('Data to export must be an Object');
      }

      var parser = new DOMParser();
      var node = parser.parseFromString(data, 'application/xml');
      return this.importData('project', node.documentElement);
    }
    /**
     * @private
     * @param {string} key
     * @param {HTMLElement|ChildNode} node
     * @return {Map<string, *>}
     */

  }, {
    key: "importData",
    value: function importData(key, node) {
      var _this = this;

      var isArray = key === 'element';
      var data = {};
      var attributes = node.attributes;

      for (var nodeAttr in attributes) {
        if (attributes.hasOwnProperty(nodeAttr)) {
          var attribute = attributes[nodeAttr].name;
          var attrValue = attributes[attribute].nodeValue;

          if (attribute === 'value') {
            data = attrValue;
          } else {
            data[attribute] = attrValue;
          }
        }
      }

      node.childNodes.forEach(function (cNode) {
        var subObject = _this.importData(cNode.nodeName, cNode);

        if (subObject) {
          if (_.isArray(subObject)) {
            data = !Object.keys(data).length ? [] : data;
            data = data.concat(subObject);
          } else {
            data = Object.assign(data, subObject);
          }
        }
      });
      return isArray ? [data] : (0, _defineProperty2["default"])({}, key, data);
    }
    /**
     * @private
     * @param {string} key
     * @param {Object|Array|number|string} data
     * @param {Document} root
     *
     * @returns {HTMLElement}
     */

  }, {
    key: "exportData",
    value: function exportData(key, data, root) {
      var isArray = _.isArray(data);

      if (_.isObject(data) || _.isArray(data)) {
        var node = root.createElement(key);

        for (var iData in data) {
          if (data.hasOwnProperty(iData)) {
            var pKey = isArray ? 'element' : iData;
            var pValue = data[iData];
            var subNode = this.exportData(pKey, pValue, root);

            if (subNode) {
              node.appendChild(subNode);
            } else {
              if (pValue !== null) {
                node.setAttribute(pKey, pValue);
              }
            }
          }
        }

        return node;
      } else if (key === 'element') {
        var _node = root.createElement(key);

        _node.setAttribute('value', data);

        return _node;
      }

      return null;
    }
  }]);
  return XmlSerDe;
}(_SerDe2["default"]);

var _default = XmlSerDe;
exports["default"] = _default;

},{"./SerDe.js":178,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],180:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Mouse = _interopRequireDefault(require("../core/Mouse.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CURSOR = _Mouse["default"].CURSOR;
/**
 * @typedef {{code: string, id: number}} StateType
 */

/**
 * Manage the state of the application over time
 * @property {StateType[]} stateList
 */

var AppState = /*#__PURE__*/function () {
  function AppState() {
    (0, _classCallCheck2["default"])(this, AppState);
    this.reset();
  }
  /**
   * Get the state of the application (drawing ellipse,
   * starting/pausing simulation, moving object, ...).
   */


  (0, _createClass2["default"])(AppState, [{
    key: "getState",
    value: function getState() {
      return this.state;
    }
    /**
     * Get all data associated to a topic.
     * Used to access data related to a state
     * @param {String} topic
     */

  }, {
    key: "getData",
    value: function getData(topic) {
      return this.data && this.data[topic];
    }
    /**
     * Set data.
     * Used to set data for a given state
     * @param {Object} data
     */

  }, {
    key: "setData",
    value: function setData(data) {
      this.data = _.merge(this.data, data);
      return this;
    }
    /**
     * Set data associated to a topic
     * @param {string} topic
     * @param {Object|Array} data
     */

  }, {
    key: "setDataByTopic",
    value: function setDataByTopic(topic, data) {
      var dataTopic = this.data[topic];

      if (dataTopic) {
        if (_.isArray(dataTopic)) {
          this.data[topic] = dataTopic.concat(data);
        } else {
          this.data[topic] = _objectSpread({
            dataTopic: dataTopic
          }, data);
        }
      } else {
        this.data[topic] = data;
      }

      return this;
    }
    /**
     * Verify if Application has a state.
     * @param {String} state
     */

  }, {
    key: "hasState",
    value: function hasState(state) {
      return this.state.indexOf(state) >= 0;
    }
    /**
     * Verify if Application has a data state.
     * @param {Object} data
     */

  }, {
    key: "hasData",
    value: function hasData(data) {
      for (var pIndex in data) {
        if (data[pIndex] !== this.data[pIndex]) {
          return false;
        }
      }

      return true;
    }
    /**
     * Add a state to the states list.
     * @param {string} state
     */

  }, {
    key: "addState",
    value: function addState(state) {
      if (this.state.indexOf(state) === -1) {
        if (Object.keys(AppState.States).indexOf(state) >= 0) {
          this.state.push(state);
          var cursor = AppState.States[state].cursor;
          cursor && this.setData({
            cursor: cursor
          });
        } else {
          throw new TypeError("".concat(state, " is not recognized as Application State"));
        }
      }
    }
    /**
     * Is the state can trigger history
     * @param {string} state
     * @return {boolean}
     */

  }, {
    key: "getIsHistory",
    value: function getIsHistory(state) {
      var history = AppState.States[state].history;
      return history;
    }
    /**
     * Find all indices for a specific state or state pattern, use exact param to search for
     * state within the same pattern
     * @param {String} state
     * @param {Boolean} exact
     */

  }, {
    key: "findStateIndex",
    value: function findStateIndex(state) {
      var exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var indices = [];

      if (exact) {
        var index = this.state.indexOf(state);

        if (index >= 0) {
          indices.push(index);
        }
      } else {
        var regExpState = new RegExp("^".concat(state));
        this.state.map(function (state_, index) {
          return state_.match(regExpState) && indices.push(index);
        });
      }

      return indices;
    }
    /**
     * Remove a state from the application, use exact param to search for
     * state within the same pattern
     * @param {String} state
     * @param {Boolean} exact
     */

  }, {
    key: "removeState",
    value: function removeState(state) {
      var _this = this;

      var exact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var indices = this.findStateIndex(state, exact);
      indices.map(function (index) {
        return _this.state.splice(index, 1);
      });
    }
    /**
     * Remove data state
     * @param {string} state
     */

  }, {
    key: "removeData",
    value: function removeData(state) {
      delete this.data[state];
    }
    /**
     * Remove all states from the application
     */

  }, {
    key: "removeAllState",
    value: function removeAllState() {
      this.state = [];
    }
    /**
     * Set an uniq state for a specific group (
     * Remove all state which contains the same prefix
     * value and add the new state to the same group.
     * @param {String} stateGroup
     * @param {String} type
     */

  }, {
    key: "setUniqStateByGroup",
    value: function setUniqStateByGroup(stateGroup, type) {
      var state = "".concat(stateGroup, "_").concat(type);
      var isHistory = !this.findStateIndex(state, true).length;
      this.removeState(stateGroup, false);
      this.addState(state, isHistory);
    }
    /**
     * Set a state.
     * @param {String} state
     */

  }, {
    key: "setState",
    value: function setState(state) {
      var isHistory = !this.findStateIndex(state, true).length;
      this.addState(state, isHistory);
    }
    /**
     * Reset the state of the application
     */

  }, {
    key: "reset",
    value: function reset() {
      this.state = [];
      this.data = {};
    }
  }], [{
    key: "get",
    value: function get() {
      if (!AppState.instance) {
        AppState.instance = new AppState();
      }

      return AppState.instance;
    }
  }]);
  return AppState;
}();

AppState.instance = null;
AppState.Categories = {
  ACTION: 'ACTION_',
  DRAW: 'DRAW_'
};
/**
 * @todo: Think to externalize the states configuration
 */

AppState.States = {
  DRAW_RECT_START: {
    history: false,
    cursor: CURSOR.CROSSHAIR
  },
  DRAW_JOINT_START: {
    history: false,
    cursor: CURSOR.CROSSHAIR
  },
  DRAW_SELECT_START: {
    history: false,
    cursor: CURSOR.DEFAULT
  },
  DRAW_MOVE_START: {
    history: false,
    cursor: CURSOR.DEFAULT
  },
  DRAW_SCALE_START: {
    history: false,
    cursor: CURSOR.DEFAULT
  },
  DRAW_SCALE_PROGRESS: {
    history: false,
    cursor: CURSOR.DEFAULT
  },
  DRAW_SCALE_STOP: {
    history: false,
    cursor: CURSOR.DEFAULT
  },
  DRAW_ROTATE_START: {
    history: false,
    cursor: CURSOR.DEFAULT
  },
  DRAW_ROTATE_PROGRESS: {
    history: false,
    cursor: CURSOR.DEFAULT
  },
  DRAW_ROTATE_STOP: {
    history: false,
    cursor: CURSOR.DEFAULT
  },
  DRAW_CIRCLE_START: {
    history: false,
    cursor: CURSOR.CROSSHAIR
  },
  DRAW_RECT_PROGRESS: {
    history: false,
    cursor: CURSOR.CROSSHAIR
  },
  DRAW_JOINT_PROGRESS: {
    history: false,
    cursor: CURSOR.CROSSHAIR
  },
  DRAW_ATTACH_POINT_PROGRESS: {
    history: false,
    cursor: CURSOR.POINTER
  },
  DRAW_SELECT_PROGRESS: {
    history: false,
    cursor: CURSOR.DEFAULT
  },
  DRAW_MOVE_PROGRESS: {
    history: false,
    cursor: CURSOR.DEFAULT
  },
  DRAW_CIRCLE_PROGRESS: {
    history: false,
    cursor: CURSOR.CROSSHAIR
  },
  DRAW_CIRCLE_STOP: {
    history: true,
    cursor: CURSOR.DEFAULT
  },
  DRAW_RECT_STOP: {
    history: true,
    cursor: CURSOR.DEFAULT
  },
  DRAW_JOINT_STOP: {
    history: true,
    cursor: CURSOR.DEFAULT
  },
  DRAW_ATTACH_POINT_STOP: {
    history: true
  },
  DRAW_CAMERA_START: {
    history: false,
    cursor: CURSOR.CROSSHAIR
  },
  DRAW_CAMERA_PROGRESS: {
    history: false,
    cursor: CURSOR.CROSSHAIR
  },
  DRAW_CAMERA_STOP: {
    history: true,
    cursor: CURSOR.DEFAULT
  },
  DRAW_SELECT_STOP: {
    history: false
  },
  DRAW_MOVE_STOP: {
    history: false
  },
  SIMULATE_START: {
    history: false,
    cursor: CURSOR.DEFAULT
  },
  SIMULATE_PROGRESS: {
    history: false
  },
  SIMULATE_STOP: {
    history: false
  },
  ACTION_DELETE_START: {
    history: true
  },
  ACTION_DELETE_PROGRESS: {
    history: false
  },
  ACTION_DELETE_STOP: {
    history: false
  },
  ACTION_DUPLICATE_START: {
    history: true
  },
  ACTION_DUPLICATE_PROGRESS: {
    history: false
  },
  ACTION_DUPLICATE_STOP: {
    history: false
  },
  ACTION_UNDO_START: {
    history: false
  },
  ACTION_UNDO_PROGRESS: {
    history: false
  },
  ACTION_UNDO_STOP: {
    history: false
  },
  ACTION_MOVE_START: {
    history: true,
    cursor: CURSOR.MOVE
  },
  ACTION_MOVE_PROGRESS: {
    history: false
  },
  ACTION_MOVE_STOP: {
    history: false
  },
  ACTION_SCALE_START: {
    history: true,
    cursor: CURSOR.RESIZE
  },
  ACTION_SCALE_PROGRESS: {
    history: false
  },
  ACTION_SCALE_STOP: {
    history: false
  },
  ACTION_ROTATE_START: {
    history: true,
    cursor: CURSOR.MOVE
  },
  ACTION_ROTATE_PROGRESS: {
    history: false
  },
  ACTION_ROTATE_STOP: {
    history: false
  },
  ACTION_MOVE_UP_START: {
    history: true
  },
  ACTION_MOVE_UP_PROGRESS: {
    history: false
  },
  ACTION_MOVE_UP_STOP: {
    history: false
  },
  ACTION_MOVE_DOWN_START: {
    history: true
  },
  ACTION_MOVE_DOWN_PROGRESS: {
    history: false
  },
  ACTION_MOVE_DOWN_STOP: {
    history: false
  },
  ACTION_LOCK_START: {
    history: true
  },
  ACTION_LOCK_PROGRESS: {
    history: false
  },
  ACTION_LOCK_STOP: {
    history: false
  },
  ACTION_UNLOCK_START: {
    history: true
  },
  ACTION_UNLOCK_PROGRESS: {
    history: false
  },
  ACTION_UNLOCK_STOP: {
    history: false
  },
  ACTION_HIDE_START: {
    history: true
  },
  ACTION_HIDE_PROGRESS: {
    history: false
  },
  ACTION_HIDE_STOP: {
    history: false
  },
  ACTION_SHOW_START: {
    history: true
  },
  ACTION_SHOW_PROGRESS: {
    history: false
  },
  ACTION_SHOW_STOP: {
    history: false
  },
  ACTION_ROTATE_UP_START: {
    history: true
  },
  ACTION_ROTATE_UP_PROGRESS: {
    history: false
  },
  ACTION_ROTATE_UP_STOP: {
    history: false
  },
  ACTION_SELECT_ENTITY_START: {
    history: true
  },
  ACTION_SELECT_ENTITY_PROGRESS: {
    history: false
  },
  ACTION_SELECT_ENTITY_STOP: {
    history: false
  },
  ACTION_HISTORY_PUSH_START: {
    history: false
  },
  ACTION_HISTORY_PUSH_PROGRESS: {
    history: false
  },
  ACTION_HISTORY_PUSH_STOP: {
    history: false
  },
  ACTION_PHYSICS_STATIC_START: {
    history: true
  },
  ACTION_PHYSICS_STATIC_PROGRESS: {
    history: false
  },
  ACTION_PHYSICS_STATIC_STOP: {
    history: false
  },
  ACTION_PHYSICS_NOT_STATIC_START: {
    history: true
  },
  ACTION_PHYSICS_NOT_STATIC_PROGRESS: {
    history: false
  },
  ACTION_PHYSICS_NOT_STATIC_STOP: {
    history: false
  },
  ACTION_FORM_UPDATE_START: {
    history: false
  },
  ACTION_FORM_UPDATE_PROGRESS: {
    history: false
  },
  ACTION_FORM_UPDATE_STOP: {
    history: false
  },
  ACTION_MOVE_CAMERA_START: {
    history: false
  },
  ACTION_MOVE_CAMERA_PROGRESS: {
    history: false
  },
  ACTION_MOVE_CAMERA_STOP: {
    history: false
  },
  ACTION_ZOOM_CAMERA_START: {
    history: false
  },
  ACTION_ZOOM_CAMERA_PROGRESS: {
    history: false
  },
  ACTION_ZOOM_CAMERA_STOP: {
    history: false
  },
  ACTION_SAVE_PROJECT_START: {
    history: false
  },
  ACTION_SAVE_PROJECT_PROGRESS: {
    history: false
  },
  ACTION_SAVE_PROJECT_STOP: {
    history: false
  },
  ACTION_LOAD_PROJECT_START: {
    history: false
  },
  ACTION_LOAD_PROJECT_PROGRESS: {
    history: false
  },
  ACTION_ADD_ASSET_STOP: {
    history: false
  },
  ACTION_ADD_ASSET_START: {
    history: false
  },
  ACTION_ADD_ASSET_PROGRESS: {
    history: false
  },
  ACTION_ADD_ASSET_SCENE_STOP: {
    history: false
  },
  ACTION_ADD_ASSET_SCENE_START: {
    history: false
  },
  ACTION_ADD_ASSET_SCENE_PROGRESS: {
    history: false
  },
  ACTION_LOAD_PROJECT_STOP: {
    history: false
  },
  ACTION_NEW_PROJECT_START: {
    history: false
  },
  ACTION_NEW_PROJECT_PROGRESS: {
    history: false
  },
  ACTION_NEW_PROJECT_STOP: {
    history: false
  },
  ACTION_EXPORT_PROJECT_START: {
    history: false
  },
  ACTION_EXPORT_PROJECT_PROGRESS: {
    history: false
  },
  ACTION_EXPORT_PROJECT_STOP: {
    history: false
  },
  ACTION_SELECT_LIST_ELEMENT_START: {
    history: false
  },
  ACTION_SELECT_LIST_ELEMENT_PROGRESS: {
    history: false
  },
  ACTION_SELECT_LIST_ELEMENT_STOP: {
    history: false
  },
  ACTION_COLLAPSE_PANEL_START: {
    history: false
  },
  ACTION_COLLAPSE_PANEL_PROGRESS: {
    history: false
  },
  ACTION_COLLAPSE_PANEL_STOP: {
    history: false
  },
  ACTION_HIDE_ITEM_START: {
    history: false
  },
  ACTION_HIDE_ITEM_PROGRESS: {
    history: false
  },
  ACTION_HIDE_ITEM_STOP: {
    history: false
  },
  ACTION_SHOW_ITEM_START: {
    history: false
  },
  ACTION_SHOW_ITEM_PROGRESS: {
    history: false
  },
  ACTION_SHOW_ITEM_STOP: {
    history: false
  },
  ACTION_LOCK_ITEM_START: {
    history: false
  },
  ACTION_LOCK_ITEM_PROGRESS: {
    history: false
  },
  ACTION_LOCK_ITEM_STOP: {
    history: false
  },
  ACTION_UNLOCK_ITEM_START: {
    history: false
  },
  ACTION_UNLOCK_ITEM_PROGRESS: {
    history: false
  },
  ACTION_UNLOCK_ITEM_STOP: {
    history: false
  },
  ACTION_ADD_CAMERA_START: {
    history: false
  },
  ACTION_ADD_CAMERA_PROGRESS: {
    history: false
  },
  ACTION_ADD_CAMERA_STOP: {
    history: false
  }
};
var _default = AppState;
exports["default"] = _default;

},{"../core/Mouse.js":49,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],181:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _AppState = _interopRequireDefault(require("./AppState.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Manage the state of the application
 * @property {AppState} appState
 */
var StateManager = /*#__PURE__*/function () {
  /**
   * @type {StateManager}
   */
  function StateManager() {
    (0, _classCallCheck2["default"])(this, StateManager);
    this.appState = _AppState["default"].get();
  }
  /**
   * @param {string} state
   * @return {string|null}
   */


  (0, _createClass2["default"])(StateManager, [{
    key: "getType",
    value: function getType(state) {
      var stepPrefix = ['START', 'PROGRESS', 'STOP'];

      for (var iStep in stepPrefix) {
        if (stepPrefix.hasOwnProperty(iStep)) {
          var regex = new RegExp("([A-Z_]+)_".concat(stepPrefix[iStep], "$"));

          if (state.match(regex)) {
            return state.replace(regex, '$1');
          }
        }
      }

      return null;
    }
    /**
     * @param {string} state
     * @return {boolean}
     */

  }, {
    key: "isActionState",
    value: function isActionState(state) {
      var catMatch = new RegExp("^".concat(_AppState["default"].Categories.ACTION));
      return !!state.match(catMatch);
    }
    /**
     * @param {string} state
     * @return {boolean}
     */

  }, {
    key: "isEditState",
    value: function isEditState(state) {
      var catMatch = new RegExp("^".concat(_AppState["default"].Categories.DRAW));
      return !!state.match(catMatch);
    }
    /**
     * Is the state type a start action
     * @param {string} type
     */

  }, {
    key: "isStart",
    value: function isStart(type) {
      return this.appState.hasState("".concat(type, "_START")) && this.getNextStartData(type);
    }
    /**
     * Is the state type in progress
     * @param {string} type
     */

  }, {
    key: "isProgress",
    value: function isProgress(type) {
      return this.appState.hasState("".concat(type, "_PROGRESS")) && this.getNextProgressData(type);
    }
    /**
     * Is the action type a stop action
     * @param {string} type
     */

  }, {
    key: "isStop",
    value: function isStop(type) {
      return this.appState.hasState("".concat(type, "_STOP")) && this.getNextStopData(type);
    }
    /**
     * Start an action by type and data (state)
     * @param {string} type
     * @param {number} id
     * @param {Object} data
     * @TODO Add history (call addHistory(state))
     */

  }, {
    key: "startState",
    value: function startState(type, id) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!id) {
        throw new TypeError('Action id must be defined');
      }

      var state = "".concat(type, "_START");
      this.appState.addState(state);
      this.appState.setDataByTopic(state, [_objectSpread({
        id: id
      }, data)]);
    }
    /**
     * Progress an action (state)
     * @param {string} type
     * @param {number} id
     * @TODO Add history (call addHistory(state))
     */

  }, {
    key: "progressState",
    value: function progressState(type, id) {
      if (!id) {
        throw new TypeError('Action id must be defined');
      }

      var state = "".concat(type, "_PROGRESS");
      var data = this.getStartData(type, id);
      this.appState.addState(state);
      data && this.appState.setData((0, _defineProperty2["default"])({}, state, [data]));
      this.removeStartState(type, id);
    }
    /**
     * Stop an action (state)
     * @param {string} type
     * @param {number} id
     * @TODO Add history (call addHistory(state))
     */

  }, {
    key: "stopState",
    value: function stopState(type, id) {
      if (!id) {
        throw new TypeError('Action id must be defined');
      }

      var state = "".concat(type, "_STOP");
      var data = this.getProgressData(type, id);
      this.appState.addState(state);
      data && this.appState.setData((0, _defineProperty2["default"])({}, state, [data]));
      this.removeStartState(type, id);
      this.removeProgressState(type, id);
    }
    /**
     * Delete the stop action (end action)
     * @param {string} type
     * @param {number} id
     */

  }, {
    key: "endState",
    value: function endState(type, id) {
      if (!id) {
        throw new TypeError('Action id must be defined');
      }

      this.removeProgressState(type, id);
      this.removeStopState(type, id);
    }
    /**
     * @param {string} type
     */

  }, {
    key: "progressNextState",
    value: function progressNextState(type) {
      var data = this.getNextStartData(type);

      if (data) {
        this.progressState(type, data.id);
      } else {
        throw new TypeError("Progress data state not found for ".concat(type));
      }
    }
    /**
     * @param {string} type
     */

  }, {
    key: "stopNextState",
    value: function stopNextState(type) {
      var data = this.getNextProgressData(type) || this.getNextStartData(type);

      if (data) {
        this.stopState(type, data.id);
      } else {
        throw new TypeError("Stop data state not found for ".concat(type));
      }
    }
    /**
     * @param {string} type
     */

  }, {
    key: "endNextState",
    value: function endNextState(type) {
      var data = this.getNextStopData(type);

      if (data) {
        this.endState(type, data.id);
      } else {
        throw new TypeError("End data state not found for ".concat(type));
      }
    }
    /**
     * Is state has action of given type/id
     * @param {string} type
     * @param {number} id
     * @return {boolean}
     */

  }, {
    key: "hasState",
    value: function hasState(type, id) {
      return (this.isStart(type) || this.isStop(type) || this.isProgress(type)) && (this.getStartData(type, id) || this.getProgressData(type, id) || this.getStartData(type, id));
    }
    /**
     * Is state has action of given type (even if state data is not set)
     * @param {string} type
     * @return {boolean}
     */

  }, {
    key: "hasAnyState",
    value: function hasAnyState(type) {
      return this.isStart(type) || this.isStop(type) || this.isProgress(type);
    }
    /**
     * Is running states in progress
     * @return {boolean}
     */

  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.isProgress('SIMULATE');
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isFormUpdating",
    value: function isFormUpdating() {
      return this.isProgress('ACTION_FORM_UPDATE');
    }
    /**
     * Add data to history (state)
     * @param {string} state
     * @TODO check we can not pass an ID
     */

  }, {
    key: "addHistory",
    value: function addHistory(state) {
      var isHistory = this.appState.getIsHistory(state);

      if (isHistory) {
        this.startState('ACTION_HISTORY_PUSH', 1);
      }
    }
    /**
     * Get the start state data
     * @param {string} type
     * @param {number} id
     * @return {Object|null}
     */

  }, {
    key: "getStartData",
    value: function getStartData(type, id) {
      if (!id) {
        throw new TypeError('Action id must be defined');
      }

      return this.getStateData("".concat(type, "_START"), id);
    }
    /**
     * Get the progress state data
     * @param {string} type
     * @param {number} id
     * @return {Object|null}
     */

  }, {
    key: "getProgressData",
    value: function getProgressData(type, id) {
      if (!id) {
        throw new TypeError('Action id must be defined');
      }

      return this.getStateData("".concat(type, "_PROGRESS"), id);
    }
    /**
     * Get the start state data
     * @param {string} type
     * @param {number} id
     * @return {Object|null}
     */

  }, {
    key: "getStopData",
    value: function getStopData(type, id) {
      if (!id) {
        throw new TypeError('Action id must be defined');
      }

      return this.getStateData("".concat(type, "_STOP"), id);
    }
    /**
     * Get the next progress state data
     * @param {string} type
     * @return {Object|null}
     */

  }, {
    key: "getNextStartData",
    value: function getNextStartData(type) {
      return this.getNextData("".concat(type, "_START"));
    }
    /**
     * Get the next progress state data
     * @param {string} type
     * @return {Object|null}
     */

  }, {
    key: "getNextProgressData",
    value: function getNextProgressData(type) {
      return this.getNextData("".concat(type, "_PROGRESS"));
    }
    /**
     * Get the next progress state data
     * @param {string} type
     * @return {Object|null}
     */

  }, {
    key: "getNextStopData",
    value: function getNextStopData(type) {
      return this.getNextData("".concat(type, "_STOP"));
    }
    /**
     * Remove the start state
     * @param {string} type
     * @param {number} id
     */

  }, {
    key: "removeStartState",
    value: function removeStartState(type, id) {
      this.removeState("".concat(type, "_START"), id);
    }
    /**
     * Remove the progress state
     * @param {string} type
     * @param {number} id
     */

  }, {
    key: "removeProgressState",
    value: function removeProgressState(type, id) {
      this.removeState("".concat(type, "_PROGRESS"), id);
    }
    /**
     * Remove the stop state
     * @param {string} type
     * @param {number} id
     */

  }, {
    key: "removeStopState",
    value: function removeStopState(type, id) {
      this.removeState("".concat(type, "_STOP"), id);
    }
    /**
     * Get the data by State/Id
     * @private
     * @param {string} type
     * @param {number} id
     */

  }, {
    key: "getDataById",
    value: function getDataById(type, id) {
      var data = this.getData(type);
      return data && data.find(function (value) {
        return value && value.id === id;
      });
    }
    /**
     * Get the data state for the given type
     * @private
     * @param {string} state
     * @return {Array}
     */

  }, {
    key: "getData",
    value: function getData(state) {
      return this.appState.getData(state);
    }
    /**
     * Get the next data state for the given type
     * @private
     * @param {string} state
     * @return {Object}
     */

  }, {
    key: "getNextData",
    value: function getNextData(state) {
      var data = this.getData(state);
      return data && data[0];
    }
    /**
     * Remove the state
     * @private
     * @param {string} state
     * @param {number} id
     */

  }, {
    key: "removeState",
    value: function removeState(state, id) {
      this.removeStateData(state, id);
    }
    /**
     * Remove the state data
     * @private
     * @param {string} state
     * @param {number} id
     */

  }, {
    key: "removeStateData",
    value: function removeStateData(state, id) {
      var dataList = this.getData(state);
      var data = this.getDataById(state, id);

      if (data) {
        dataList.splice(dataList.indexOf(data), 1);
      }

      if (dataList && !dataList.length) {
        this.appState.removeState(state);
        this.appState.removeData(state);
      }
    }
    /**
     * Get the state data
     * @private
     * @param {string} state
     * @param {number} id
     * @return {Object|null}
     */

  }, {
    key: "getStateData",
    value: function getStateData(state, id) {
      return this.getDataById(state, id);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.appState.reset();
    }
    /**
     * Search for all states and stop them all
     */

  }, {
    key: "stopAll",
    value: function stopAll() {
      this.stopStates(this.appState.getState());
    }
    /**
     * Search for all action states (Category ACTION) and stop them all
     */

  }, {
    key: "stopAllAction",
    value: function stopAllAction() {
      var _this = this;

      var states = this.appState.getState().filter(function (state) {
        return _this.hasAnyState(_this.getType(state)) && _this.isActionState(state);
      });
      this.stopStates(states);
    }
    /**
     * @param {string[]} states
     */

  }, {
    key: "stopStates",
    value: function stopStates(states) {
      var _this2 = this;

      states.forEach(function (state) {
        var type = _this2.getType(state);

        type && _this2.stopNextState(type);
      });
    }
    /**
     * @return {StateManager}
     */

  }], [{
    key: "get",
    value: function get() {
      if (!StateManager.instance) {
        StateManager.instance = new StateManager();
      }

      return StateManager.instance;
    }
  }]);
  return StateManager;
}();

(0, _defineProperty2["default"])(StateManager, "instance", null);
var _default = StateManager;
exports["default"] = _default;

},{"./AppState.js":180,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],182:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimitiveShape = exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _UnitData2 = _interopRequireDefault(require("../project/data/UnitData.js"));

var _GUIPropertyComponent = _interopRequireDefault(require("../component/internal/gui/property/GUIPropertyComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Unit = /*#__PURE__*/function (_UnitData) {
  (0, _inherits2["default"])(Unit, _UnitData);

  var _super = _createSuper(Unit);

  function Unit(defaultComponentClasses) {
    var _this;

    (0, _classCallCheck2["default"])(this, Unit);
    _this = _super.call(this);

    _this.init(defaultComponentClasses || []);

    return _this;
  }
  /**
   * @param {Class<ComponentData>[]} defaultComponentClasses
   */


  (0, _createClass2["default"])(Unit, [{
    key: "init",
    value: function init(defaultComponentClasses) {
      var _this2 = this;

      defaultComponentClasses.forEach(function (componentClass) {
        return _this2.createComponent(componentClass);
      });
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.getComponent(_GUIPropertyComponent["default"]).isSelected();
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.getComponent(_GUIPropertyComponent["default"]).isVisible();
    }
  }, {
    key: "select",
    value: function select() {
      this.getComponent(_GUIPropertyComponent["default"]).setSelected(true);
    }
  }, {
    key: "unselect",
    value: function unselect() {
      this.getComponent(_GUIPropertyComponent["default"]).setSelected(false);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.getComponent(_GUIPropertyComponent["default"]).setFocused(true);
    }
  }, {
    key: "unfocus",
    value: function unfocus() {
      this.getComponent(_GUIPropertyComponent["default"]).setFocused(false);
    }
  }]);
  return Unit;
}(_UnitData2["default"]);

exports["default"] = Unit;
var PrimitiveShape = {
  RECT: 'rect',
  CIRCLE: 'circle',
  LINE: 'line',
  ARROW_RIGHT: 'arrow_right',
  ARROW_DOWN: 'arrow_down',
  ARROW_RECT_RIGHT: 'arrow_rect_right',
  ARROW_RECT_DOWN: 'arrow_rect_down',
  GRID: 'grid',
  RECT_CROSS: 'rect_cross'
};
exports.PrimitiveShape = PrimitiveShape;

},{"../component/internal/gui/property/GUIPropertyComponent.js":40,"../project/data/UnitData.js":168,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],183:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Vertex = _interopRequireDefault(require("../utils/Vertex.js"));

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

var _MeshComponent = _interopRequireDefault(require("../component/internal/MeshComponent.js"));

var _TransformComponent = _interopRequireDefault(require("../component/internal/TransformComponent.js"));

var _GeometryHelper = _interopRequireDefault(require("../utils/GeometryHelper.js"));

var UnitHelper = /*#__PURE__*/function () {
  function UnitHelper() {
    (0, _classCallCheck2["default"])(this, UnitHelper);
  }

  (0, _createClass2["default"])(UnitHelper, null, [{
    key: "isInside",

    /**
     * @param {Unit} unit
     * @param {Vector} point
     * @return {boolean}
     */
    value: function isInside(unit, point) {
      return _Vertex["default"].contains(this.generateVertices(unit), this.fromAbsolutePosition(unit, point));
    }
    /**
     * @param {Unit} unit
     * @param {Vector} point
     * @param {Size} size
     * @return {boolean}
     */

  }, {
    key: "isInsideArea",
    value: function isInsideArea(unit, point, size) {
      var transform = unit.getComponent(_TransformComponent["default"]);
      var meshSize = unit.getComponent(_MeshComponent["default"]).getSize();
      var position = transform.getPosition();
      return position.getX() >= point.x && position.getX() + meshSize.getWidth() <= point.x + size.width && position.getY() >= point.y && position.getY() + meshSize.getHeight() <= point.y + size.height;
    }
    /**
     * Convert absolute coordinate to relative coordinate
     * @param {Unit} unit
     * @param {Vector} point Absolute coordinate
     * @return {Vector}
     */

  }, {
    key: "fromAbsolutePosition",
    value: function fromAbsolutePosition(unit, point) {
      var position = unit.getComponent(_TransformComponent["default"]).getPosition();
      return new _Vector["default"]({
        x: point.x - position.getX(),
        y: point.y - position.getY()
      });
    }
    /**
     * Move the unit by distance related to a given point.
     * Move also attached entities
     * @param {Unit} unit
     * @param {Vector} point relative position
     * @param {Vector} target absolute position
     */

  }, {
    key: "moveRelativePointTo",
    value: function moveRelativePointTo(unit, point, target) {
      var transformComponent = unit.getComponent(_TransformComponent["default"]);
      var position = transformComponent.getPosition();
      var diffDistance = new _Vector["default"]({
        x: target.x - position.x - point.x,
        y: target.y - position.y - point.y
      });
      var newPosition = new _Vector["default"]({
        x: position.x + diffDistance.x,
        y: position.y + diffDistance.y,
        z: position.z
      });
      transformComponent.setPosition(newPosition);
    }
    /**
     * Generate vertices (relative coordinates)
     * @param {Unit} unit
     * @return {Vector[]}
     */

  }, {
    key: "generateVertices",
    value: function generateVertices(unit) {
      var meshComponent = unit.getComponent(_MeshComponent["default"]);
      var transformComponent = unit.getComponent(_TransformComponent["default"]);
      var vertices = this.loadVertices(meshComponent.getSize());
      return this.rotateVertices(vertices, transformComponent.getRotation(), meshComponent.getSize());
    }
    /**
     * @param {Size} size
     * @return {Vector[]}
     */

  }, {
    key: "loadVertices",
    value: function loadVertices(size) {
      var width = size.width,
          height = size.height;
      return [new _Vector["default"]({
        x: 0,
        y: 0
      }), new _Vector["default"]({
        x: width,
        y: 0
      }), new _Vector["default"]({
        x: width,
        y: height
      }), new _Vector["default"]({
        x: 0,
        y: height
      })];
    }
    /**
     * @param {Vector[]} vertices
     * @param {number} rotation
     * @param {Size} size
     * @param {Vector} rotateCenter
     * @return {Vector[]}
     */

  }, {
    key: "rotateVertices",
    value: function rotateVertices(vertices, rotation, size) {
      var rotateCenter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _Vector["default"]();

      var _GeometryHelper$getLa = _GeometryHelper["default"].getLargestRectangle(rotation || 0, size),
          mWidth = _GeometryHelper$getLa.width,
          mHeight = _GeometryHelper$getLa.height;

      var center = new _Vector["default"]({
        x: size.width / 2,
        y: size.height / 2
      });
      var mCenter = new _Vector["default"]({
        x: mWidth / 2,
        y: mHeight / 2
      });
      var newVertices = vertices;
      newVertices = _Vertex["default"].translate(newVertices, center, -1);
      newVertices = _Vertex["default"].rotate(newVertices, rotation || 0, rotateCenter);
      newVertices = _Vertex["default"].translate(newVertices, mCenter);
      return newVertices;
    }
    /**
     * Convert current position to large center position
     * @param {Unit} unit
     * @return {Vector}
     */

  }, {
    key: "toLargeCenterPosition",
    value: function toLargeCenterPosition(unit) {
      var transformComponent = unit.getComponent(_TransformComponent["default"]);
      var center = this.getLargeCenter(unit);
      return new _Vector["default"]({
        x: transformComponent.getPosition().getX() + center.x,
        y: transformComponent.getPosition().getY() + center.y
      });
    }
    /**
     * Calculate centroid (based on entity's rotation)
     * @param {Unit} unit
     * @return {Vector}
     */

  }, {
    key: "getLargeCenter",
    value: function getLargeCenter(unit) {
      var transformComponent = unit.getComponent(_TransformComponent["default"]);
      var meshComponent = unit.getComponent(_MeshComponent["default"]);

      var size = _GeometryHelper["default"].getLargestRectangle(transformComponent.getRotation(), meshComponent.getSize());

      return new _Vector["default"]({
        x: size.width / 2,
        y: size.height / 2
      });
    }
    /**
     * @param {Camera} camera
     * @param {Vector[]} vertices
     * @return {Vector[]}
     */

  }, {
    key: "scaleVertices",
    value: function scaleVertices(camera, vertices) {
      return vertices.map(function (vertex) {
        return camera.toCameraScale(vertex);
      });
    }
  }]);
  return UnitHelper;
}();

exports["default"] = UnitHelper;

},{"../component/internal/MeshComponent.js":33,"../component/internal/TransformComponent.js":35,"../utils/GeometryHelper.js":200,"../utils/Vector.js":206,"../utils/Vertex.js":207,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],184:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _EmptyUnit2 = _interopRequireDefault(require("../type/EmptyUnit.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnitInstant = /*#__PURE__*/function (_EmptyUnit) {
  (0, _inherits2["default"])(UnitInstant, _EmptyUnit);

  var _super = _createSuper(UnitInstant);

  function UnitInstant() {
    var _this;

    (0, _classCallCheck2["default"])(this, UnitInstant);
    _this = _super.call(this);

    _this.setup();

    return _this;
  }
  /**
   * @abstract
   */


  (0, _createClass2["default"])(UnitInstant, [{
    key: "setup",
    value: function setup() {
      throw new TypeError("".concat(this.constructor.name, ".setup must be implemented"));
    }
    /**
     * @abstract
     */

  }, {
    key: "instantiate",
    value: function instantiate() {
      throw new TypeError("".concat(this.constructor.name, ".instantiate must be implemented"));
    }
  }]);
  return UnitInstant;
}(_EmptyUnit2["default"]);

exports["default"] = UnitInstant;

},{"../type/EmptyUnit.js":195,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],185:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _UnitInstant2 = _interopRequireDefault(require("../../UnitInstant.js"));

var _Vector = _interopRequireDefault(require("../../../../utils/Vector.js"));

var _TransformComponent = _interopRequireDefault(require("../../../../component/internal/TransformComponent.js"));

var _MeshComponent = _interopRequireDefault(require("../../../../component/internal/MeshComponent.js"));

var _GUIPendingComponent = _interopRequireDefault(require("../../../../component/internal/gui/GUIPendingComponent.js"));

var _GUIPropertyComponent = _interopRequireDefault(require("../../../../component/internal/gui/property/GUIPropertyComponent.js"));

var _StyleComponent = _interopRequireDefault(require("../../../../component/internal/StyleComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TransformUnitInstant = /*#__PURE__*/function (_UnitInstant) {
  (0, _inherits2["default"])(TransformUnitInstant, _UnitInstant);

  var _super = _createSuper(TransformUnitInstant);

  function TransformUnitInstant() {
    (0, _classCallCheck2["default"])(this, TransformUnitInstant);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TransformUnitInstant, [{
    key: "instantiate",

    /**
     * @param {Class} moveComponentClass
     * @param {Size} size
     * @param {StyleUtil} style
     * @param {string} shape
     * @param {Vector} position
     */
    value: function instantiate(moveComponentClass, size, style, shape, position) {
      this.createComponent(moveComponentClass);
      this.createComponent(_GUIPendingComponent["default"]);
      var transformComponent = this.getComponent(_TransformComponent["default"]);
      var meshComponent = this.getComponent(_MeshComponent["default"]);
      transformComponent.setPosition(new _Vector["default"](_.cloneDeep(position)));
      meshComponent.setShape(shape);
      this.getComponent(_StyleComponent["default"]).setStyle(style);
      this.getComponent(_MeshComponent["default"]).setStyle(style);
      this.getComponent(_MeshComponent["default"]).setSize(size);
    }
    /**
     * @override
     */

  }, {
    key: "setup",
    value: function setup() {
      this.getComponent(_GUIPropertyComponent["default"]).setRank(70);
    }
  }]);
  return TransformUnitInstant;
}(_UnitInstant2["default"]);

exports["default"] = TransformUnitInstant;

},{"../../../../component/internal/MeshComponent.js":33,"../../../../component/internal/StyleComponent.js":34,"../../../../component/internal/TransformComponent.js":35,"../../../../component/internal/gui/GUIPendingComponent.js":36,"../../../../component/internal/gui/property/GUIPropertyComponent.js":40,"../../../../utils/Vector.js":206,"../../UnitInstant.js":184,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],186:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _UnitInstant2 = _interopRequireDefault(require("../../../UnitInstant.js"));

var _TransformComponent = _interopRequireDefault(require("../../../../../component/internal/TransformComponent.js"));

var _MeshComponent = _interopRequireDefault(require("../../../../../component/internal/MeshComponent.js"));

var _GUIPropertyComponent = _interopRequireDefault(require("../../../../../component/internal/gui/property/GUIPropertyComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AssetUnitInstant = /*#__PURE__*/function (_UnitInstant) {
  (0, _inherits2["default"])(AssetUnitInstant, _UnitInstant);

  var _super = _createSuper(AssetUnitInstant);

  function AssetUnitInstant() {
    (0, _classCallCheck2["default"])(this, AssetUnitInstant);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(AssetUnitInstant, [{
    key: "instantiate",

    /**
     * @param {Vector} position
     * @param {Asset} asset
     */
    value: function instantiate(position, asset) {
      this.setName(asset.getName());
      var meshComponent = this.getComponent(_MeshComponent["default"]);
      var transformComponent = this.getComponent(_TransformComponent["default"]);
      meshComponent.setSize(_.cloneDeep(asset.getType().getData().size));
      meshComponent.setAssetId(asset.getId());
      transformComponent.setPosition(position);
    }
    /**
     * @override
     */

  }, {
    key: "setup",
    value: function setup() {
      this.getComponent(_GUIPropertyComponent["default"]).setRank(20);
    }
  }]);
  return AssetUnitInstant;
}(_UnitInstant2["default"]);

exports["default"] = AssetUnitInstant;

},{"../../../../../component/internal/MeshComponent.js":33,"../../../../../component/internal/TransformComponent.js":35,"../../../../../component/internal/gui/property/GUIPropertyComponent.js":40,"../../../UnitInstant.js":184,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],187:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _UnitInstant2 = _interopRequireDefault(require("../../../UnitInstant.js"));

var _MeshComponent = _interopRequireDefault(require("../../../../../component/internal/MeshComponent.js"));

var _TransformComponent = _interopRequireDefault(require("../../../../../component/internal/TransformComponent.js"));

var _GUIPropertyComponent = _interopRequireDefault(require("../../../../../component/internal/gui/property/GUIPropertyComponent.js"));

var _Style = _interopRequireDefault(require("../../../../../pobject/Style.js"));

var _Unit = require("../../../../Unit.js");

var _CameraComponent = _interopRequireDefault(require("../../../../../component/internal/CameraComponent.js"));

var _StyleComponent = _interopRequireDefault(require("../../../../../component/internal/StyleComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CameraUnitInstant = /*#__PURE__*/function (_UnitInstant) {
  (0, _inherits2["default"])(CameraUnitInstant, _UnitInstant);

  var _super = _createSuper(CameraUnitInstant);

  function CameraUnitInstant() {
    (0, _classCallCheck2["default"])(this, CameraUnitInstant);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(CameraUnitInstant, [{
    key: "instantiate",

    /**
     * @override
     * @param {Vector} position
     * @param {Size} size
     */
    value: function instantiate(position, size) {
      this.setName('Camera');
      var style = new _Style["default"]();
      style.setColor('#AAAAAA');
      style.setBorderSize(3);
      this.createComponent(_CameraComponent["default"]);
      var meshComponent = this.getComponent(_MeshComponent["default"]);
      var transformComponent = this.getComponent(_TransformComponent["default"]);
      var styleComponent = this.getComponent(_StyleComponent["default"]);
      styleComponent.setStyle(style);
      transformComponent.setPosition(position);
      meshComponent.setSize(size);
      meshComponent.setShape(_Unit.PrimitiveShape.RECT_CROSS);
    }
    /**
     * @override
     */

  }, {
    key: "setup",
    value: function setup() {
      this.getComponent(_GUIPropertyComponent["default"]).setRank(40);
    }
  }]);
  return CameraUnitInstant;
}(_UnitInstant2["default"]);

exports["default"] = CameraUnitInstant;

},{"../../../../../component/internal/CameraComponent.js":32,"../../../../../component/internal/MeshComponent.js":33,"../../../../../component/internal/StyleComponent.js":34,"../../../../../component/internal/TransformComponent.js":35,"../../../../../component/internal/gui/property/GUIPropertyComponent.js":40,"../../../../../pobject/Style.js":156,"../../../../Unit.js":182,"../../../UnitInstant.js":184,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],188:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _GUIGridComponent = _interopRequireDefault(require("../../../../../component/internal/gui/grid/GUIGridComponent.js"));

var _UnitInstant2 = _interopRequireDefault(require("../../../UnitInstant.js"));

var _TransformComponent = _interopRequireDefault(require("../../../../../component/internal/TransformComponent.js"));

var _MeshComponent = _interopRequireDefault(require("../../../../../component/internal/MeshComponent.js"));

var _GUIPendingComponent = _interopRequireDefault(require("../../../../../component/internal/gui/GUIPendingComponent.js"));

var _Style = _interopRequireDefault(require("../../../../../pobject/Style.js"));

var _GUIPropertyComponent = _interopRequireDefault(require("../../../../../component/internal/gui/property/GUIPropertyComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SelectionUnitInstant = /*#__PURE__*/function (_UnitInstant) {
  (0, _inherits2["default"])(SelectionUnitInstant, _UnitInstant);

  var _super = _createSuper(SelectionUnitInstant);

  function SelectionUnitInstant() {
    (0, _classCallCheck2["default"])(this, SelectionUnitInstant);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SelectionUnitInstant, [{
    key: "instantiate",

    /**
     * @param {Vector} position
     * @param {Size} size
     */
    value: function instantiate(position, size) {
      this.createComponent(_GUIGridComponent["default"]);
      this.createComponent(_GUIPendingComponent["default"]);
      var transformComponent = this.getComponent(_TransformComponent["default"]);
      var meshComponent = this.getComponent(_MeshComponent["default"]);
      transformComponent.setPosition(position);
      meshComponent.setSize(size);
      var style = new _Style["default"]();
      style.setColor('#FFFFFF');
      style.setBorderSize(3);
      meshComponent.setStyle(style);
    }
    /**
     * @override
     */

  }, {
    key: "setup",
    value: function setup() {
      this.getComponent(_GUIPropertyComponent["default"]).setRank(60);
    }
  }]);
  return SelectionUnitInstant;
}(_UnitInstant2["default"]);

exports["default"] = SelectionUnitInstant;

},{"../../../../../component/internal/MeshComponent.js":33,"../../../../../component/internal/TransformComponent.js":35,"../../../../../component/internal/gui/GUIPendingComponent.js":36,"../../../../../component/internal/gui/grid/GUIGridComponent.js":37,"../../../../../component/internal/gui/property/GUIPropertyComponent.js":40,"../../../../../pobject/Style.js":156,"../../../UnitInstant.js":184,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],189:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _GUIGridComponent = _interopRequireDefault(require("../../../../../component/internal/gui/grid/GUIGridComponent.js"));

var _Unit = require("../../../../Unit.js");

var _UnitInstant2 = _interopRequireDefault(require("../../../UnitInstant.js"));

var _TransformComponent = _interopRequireDefault(require("../../../../../component/internal/TransformComponent.js"));

var _MeshComponent = _interopRequireDefault(require("../../../../../component/internal/MeshComponent.js"));

var _GUIPropertyComponent = _interopRequireDefault(require("../../../../../component/internal/gui/property/GUIPropertyComponent.js"));

var _GUIPendingComponent = _interopRequireDefault(require("../../../../../component/internal/gui/GUIPendingComponent.js"));

var _Vector = _interopRequireDefault(require("../../../../../utils/Vector.js"));

var _Style = _interopRequireDefault(require("../../../../../pobject/Style.js"));

var _StyleComponent = _interopRequireDefault(require("../../../../../component/internal/StyleComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GridUnitInstant = /*#__PURE__*/function (_UnitInstant) {
  (0, _inherits2["default"])(GridUnitInstant, _UnitInstant);

  var _super = _createSuper(GridUnitInstant);

  function GridUnitInstant() {
    (0, _classCallCheck2["default"])(this, GridUnitInstant);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GridUnitInstant, [{
    key: "instantiate",

    /**
     * @param {Vector} position
     * @param {Size} size
     */
    value: function instantiate(position, size) {
      this.createComponent(_GUIGridComponent["default"]);
      this.createComponent(_GUIPendingComponent["default"]);
      var transformComponent = this.getComponent(_TransformComponent["default"]);
      var meshComponent = this.getComponent(_MeshComponent["default"]);
      transformComponent.setPosition(new _Vector["default"](_.cloneDeep(position)));
      meshComponent.setShape(_Unit.PrimitiveShape.GRID);
      var style = new _Style["default"]();
      style.setColor('#3e3e3e');
      this.getComponent(_StyleComponent["default"]).setStyle(style);
      this.getComponent(_MeshComponent["default"]).setStyle(style);
      this.getComponent(_MeshComponent["default"]).setSize(size);
    }
    /**
     * @override
     */

  }, {
    key: "setup",
    value: function setup() {
      this.getComponent(_GUIPropertyComponent["default"]).setRank(0);
    }
  }]);
  return GridUnitInstant;
}(_UnitInstant2["default"]);

exports["default"] = GridUnitInstant;

},{"../../../../../component/internal/MeshComponent.js":33,"../../../../../component/internal/StyleComponent.js":34,"../../../../../component/internal/TransformComponent.js":35,"../../../../../component/internal/gui/GUIPendingComponent.js":36,"../../../../../component/internal/gui/grid/GUIGridComponent.js":37,"../../../../../component/internal/gui/property/GUIPropertyComponent.js":40,"../../../../../pobject/Style.js":156,"../../../../../utils/Vector.js":206,"../../../../Unit.js":182,"../../../UnitInstant.js":184,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],190:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _UnitInstant2 = _interopRequireDefault(require("../../../UnitInstant.js"));

var _MeshComponent = _interopRequireDefault(require("../../../../../component/internal/MeshComponent.js"));

var _GUIPendingComponent = _interopRequireDefault(require("../../../../../component/internal/gui/GUIPendingComponent.js"));

var _Vector = _interopRequireDefault(require("../../../../../utils/Vector.js"));

var _GUIGridXComponent = _interopRequireDefault(require("../../../../../component/internal/gui/grid/GUIGridXComponent.js"));

var _Unit = require("../../../../Unit.js");

var _TransformComponent = _interopRequireDefault(require("../../../../../component/internal/TransformComponent.js"));

var _Style = _interopRequireDefault(require("../../../../../pobject/Style.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GridXUnitInstant = /*#__PURE__*/function (_UnitInstant) {
  (0, _inherits2["default"])(GridXUnitInstant, _UnitInstant);

  var _super = _createSuper(GridXUnitInstant);

  function GridXUnitInstant() {
    (0, _classCallCheck2["default"])(this, GridXUnitInstant);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GridXUnitInstant, [{
    key: "instantiate",

    /**
     * @param {Vector} position
     * @param {Size} size
     */
    value: function instantiate(position, size) {
      this.createComponent(_GUIGridXComponent["default"]);
      this.createComponent(_GUIPendingComponent["default"]);
      var transformComponent = this.getComponent(_TransformComponent["default"]);
      var meshComponent = this.getComponent(_MeshComponent["default"]);
      transformComponent.setPosition(new _Vector["default"](_.cloneDeep(position)));
      var style = new _Style["default"]();
      style.setColor(position.getY() === 0 ? '#FF0000' : '#555555');
      style.setBorderSize(3);
      meshComponent.setShape(_Unit.PrimitiveShape.LINE);
      meshComponent.setShapeVertices([new _Vector["default"](), new _Vector["default"]({
        x: size.getWidth(),
        y: 0
      })]);
      meshComponent.setSize(size);
      meshComponent.setStyle(style);
    }
    /**
     * @override
     */

  }, {
    key: "setup",
    value: function setup() {}
  }]);
  return GridXUnitInstant;
}(_UnitInstant2["default"]);

exports["default"] = GridXUnitInstant;

},{"../../../../../component/internal/MeshComponent.js":33,"../../../../../component/internal/TransformComponent.js":35,"../../../../../component/internal/gui/GUIPendingComponent.js":36,"../../../../../component/internal/gui/grid/GUIGridXComponent.js":38,"../../../../../pobject/Style.js":156,"../../../../../utils/Vector.js":206,"../../../../Unit.js":182,"../../../UnitInstant.js":184,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],191:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _UnitInstant2 = _interopRequireDefault(require("../../../UnitInstant.js"));

var _MeshComponent = _interopRequireDefault(require("../../../../../component/internal/MeshComponent.js"));

var _GUIPendingComponent = _interopRequireDefault(require("../../../../../component/internal/gui/GUIPendingComponent.js"));

var _Vector = _interopRequireDefault(require("../../../../../utils/Vector.js"));

var _Unit = require("../../../../Unit.js");

var _TransformComponent = _interopRequireDefault(require("../../../../../component/internal/TransformComponent.js"));

var _Style = _interopRequireDefault(require("../../../../../pobject/Style.js"));

var _GUIGridYComponent = _interopRequireDefault(require("../../../../../component/internal/gui/grid/GUIGridYComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GridYUnitInstant = /*#__PURE__*/function (_UnitInstant) {
  (0, _inherits2["default"])(GridYUnitInstant, _UnitInstant);

  var _super = _createSuper(GridYUnitInstant);

  function GridYUnitInstant() {
    (0, _classCallCheck2["default"])(this, GridYUnitInstant);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GridYUnitInstant, [{
    key: "instantiate",

    /**
     * @param {Vector} position
     * @param {Size} size
     */
    value: function instantiate(position, size) {
      this.createComponent(_GUIGridYComponent["default"]);
      this.createComponent(_GUIPendingComponent["default"]);
      var transformComponent = this.getComponent(_TransformComponent["default"]);
      var meshComponent = this.getComponent(_MeshComponent["default"]);
      transformComponent.setPosition(new _Vector["default"](_.cloneDeep(position)));
      var style = new _Style["default"]();
      style.setColor(position.getX() === 0 ? '#0000FF' : '#555555');
      style.setBorderSize(3);
      meshComponent.setShape(_Unit.PrimitiveShape.LINE);
      meshComponent.setShapeVertices([new _Vector["default"](), new _Vector["default"]({
        x: 0,
        y: size.getHeight()
      })]);
      meshComponent.setSize(size);
      meshComponent.setStyle(style);
    }
    /**
     * @override
     */

  }, {
    key: "setup",
    value: function setup() {}
  }]);
  return GridYUnitInstant;
}(_UnitInstant2["default"]);

exports["default"] = GridYUnitInstant;

},{"../../../../../component/internal/MeshComponent.js":33,"../../../../../component/internal/TransformComponent.js":35,"../../../../../component/internal/gui/GUIPendingComponent.js":36,"../../../../../component/internal/gui/grid/GUIGridYComponent.js":39,"../../../../../pobject/Style.js":156,"../../../../../utils/Vector.js":206,"../../../../Unit.js":182,"../../../UnitInstant.js":184,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],192:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Vector = _interopRequireDefault(require("../../../../../utils/Vector.js"));

var _TransformUnitInstant2 = _interopRequireDefault(require("../TransformUnitInstant.js"));

var _Size = _interopRequireDefault(require("../../../../../pobject/Size.js"));

var _Style = _interopRequireDefault(require("../../../../../pobject/Style.js"));

var _Unit = require("../../../../Unit.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MoveFreeUnitInstant = /*#__PURE__*/function (_TransformUnitInstant) {
  (0, _inherits2["default"])(MoveFreeUnitInstant, _TransformUnitInstant);

  var _super = _createSuper(MoveFreeUnitInstant);

  function MoveFreeUnitInstant() {
    (0, _classCallCheck2["default"])(this, MoveFreeUnitInstant);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MoveFreeUnitInstant, [{
    key: "instantiate",

    /**
     * @param {Class} moveComponentClass
     * @param {Vector} position
     */
    value: function instantiate(moveComponentClass, position) {
      var size = new _Size["default"]({
        width: 100,
        height: 100
      });
      var style = new _Style["default"]();
      style.setColor('#CCCCCC');
      style.setBorderSize(2);
      var shape = _Unit.PrimitiveShape.CIRCLE;
      var movePosition = new _Vector["default"]();
      movePosition.setX(position.getX() - size.getWidth() / 2);
      movePosition.setY(position.getY() - size.getHeight() / 2);
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(MoveFreeUnitInstant.prototype), "instantiate", this).call(this, moveComponentClass, size, style, shape, movePosition);
    }
  }]);
  return MoveFreeUnitInstant;
}(_TransformUnitInstant2["default"]);

exports["default"] = MoveFreeUnitInstant;

},{"../../../../../pobject/Size.js":155,"../../../../../pobject/Style.js":156,"../../../../../utils/Vector.js":206,"../../../../Unit.js":182,"../TransformUnitInstant.js":185,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],193:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Vector = _interopRequireDefault(require("../../../../../utils/Vector.js"));

var _TransformUnitInstant2 = _interopRequireDefault(require("../TransformUnitInstant.js"));

var _Size = _interopRequireDefault(require("../../../../../pobject/Size.js"));

var _Style = _interopRequireDefault(require("../../../../../pobject/Style.js"));

var _Unit = require("../../../../Unit.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MoveXUnitInstant = /*#__PURE__*/function (_TransformUnitInstant) {
  (0, _inherits2["default"])(MoveXUnitInstant, _TransformUnitInstant);

  var _super = _createSuper(MoveXUnitInstant);

  function MoveXUnitInstant() {
    (0, _classCallCheck2["default"])(this, MoveXUnitInstant);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MoveXUnitInstant, [{
    key: "instantiate",

    /**
     * @param {Class} moveComponentClass
     * @param {Vector} position
     */
    value: function instantiate(moveComponentClass, position) {
      var size = new _Size["default"]({
        width: 100,
        height: 30
      });
      var style = new _Style["default"]();
      style.setColor('#FF0000');
      style.setBorderSize(4);
      var shape = _Unit.PrimitiveShape.ARROW_RIGHT;
      var movePosition = new _Vector["default"]();
      movePosition.setX(position.getX());
      movePosition.setY(position.getY() - size.getHeight() / 2);
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(MoveXUnitInstant.prototype), "instantiate", this).call(this, moveComponentClass, size, style, shape, movePosition);
    }
  }]);
  return MoveXUnitInstant;
}(_TransformUnitInstant2["default"]);

exports["default"] = MoveXUnitInstant;

},{"../../../../../pobject/Size.js":155,"../../../../../pobject/Style.js":156,"../../../../../utils/Vector.js":206,"../../../../Unit.js":182,"../TransformUnitInstant.js":185,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],194:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Vector = _interopRequireDefault(require("../../../../../utils/Vector.js"));

var _TransformUnitInstant2 = _interopRequireDefault(require("../TransformUnitInstant.js"));

var _Size = _interopRequireDefault(require("../../../../../pobject/Size.js"));

var _Style = _interopRequireDefault(require("../../../../../pobject/Style.js"));

var _Unit = require("../../../../Unit.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MoveYUnitInstant = /*#__PURE__*/function (_TransformUnitInstant) {
  (0, _inherits2["default"])(MoveYUnitInstant, _TransformUnitInstant);

  var _super = _createSuper(MoveYUnitInstant);

  function MoveYUnitInstant() {
    (0, _classCallCheck2["default"])(this, MoveYUnitInstant);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MoveYUnitInstant, [{
    key: "instantiate",

    /**
     * @param {Class} moveComponentClass
     * @param {Vector} position
     */
    value: function instantiate(moveComponentClass, position) {
      var size = new _Size["default"]({
        width: 30,
        height: 100
      });
      var style = new _Style["default"]();
      style.setColor('#0000FF');
      style.setBorderSize(4);
      var shape = _Unit.PrimitiveShape.ARROW_DOWN;
      var movePosition = new _Vector["default"]();
      movePosition.setX(position.getX() - size.getWidth() / 2);
      movePosition.setY(position.getY());
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(MoveYUnitInstant.prototype), "instantiate", this).call(this, moveComponentClass, size, style, shape, movePosition);
    }
  }]);
  return MoveYUnitInstant;
}(_TransformUnitInstant2["default"]);

exports["default"] = MoveYUnitInstant;

},{"../../../../../pobject/Size.js":155,"../../../../../pobject/Style.js":156,"../../../../../utils/Vector.js":206,"../../../../Unit.js":182,"../TransformUnitInstant.js":185,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],195:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Unit2 = _interopRequireDefault(require("../Unit.js"));

var _GUIPropertyComponent = _interopRequireDefault(require("../../component/internal/gui/property/GUIPropertyComponent.js"));

var _MeshComponent = _interopRequireDefault(require("../../component/internal/MeshComponent.js"));

var _TransformComponent = _interopRequireDefault(require("../../component/internal/TransformComponent.js"));

var _StyleComponent = _interopRequireDefault(require("../../component/internal/StyleComponent.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var EmptyUnit = /*#__PURE__*/function (_Unit) {
  (0, _inherits2["default"])(EmptyUnit, _Unit);

  var _super = _createSuper(EmptyUnit);

  function EmptyUnit() {
    (0, _classCallCheck2["default"])(this, EmptyUnit);
    return _super.call(this, [_GUIPropertyComponent["default"], _MeshComponent["default"], _TransformComponent["default"], _StyleComponent["default"]]);
  }

  return EmptyUnit;
}(_Unit2["default"]);

exports["default"] = EmptyUnit;

},{"../../component/internal/MeshComponent.js":33,"../../component/internal/StyleComponent.js":34,"../../component/internal/TransformComponent.js":35,"../../component/internal/gui/property/GUIPropertyComponent.js":40,"../Unit.js":182,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],196:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @class {ClassHelper}
 */
var ClassHelper = /*#__PURE__*/function () {
  function ClassHelper() {
    (0, _classCallCheck2["default"])(this, ClassHelper);
  }

  (0, _createClass2["default"])(ClassHelper, null, [{
    key: "getSetter",

    /**
     * Get the setter name
     * @param {*} object
     * @param {string} key
     * @return {string}
     */
    value: function getSetter(object, key) {
      var setter;

      if (object.constructor === Array) {
        setter = 'push';
      } else {
        var prefix = 'set';
        setter = "".concat(prefix).concat(key.charAt(0).toUpperCase() + key.slice(1));

        if (typeof object[setter] !== 'function') {
          throw new TypeError("".concat(setter, " must be implemented for ").concat(object.constructor.name));
        }
      }

      return setter;
    }
    /**
     * Get the getter name
     * @param {*} object
     * @param {string} key
     * @return {string}
     */

  }, {
    key: "getGetter",
    value: function getGetter(object, key) {
      var getter;

      if (object.constructor === Array) {
        getter = key;
      } else {
        var prefix = 'get';
        getter = "".concat(prefix).concat(key.charAt(0).toUpperCase() + key.slice(1));

        if (typeof object[getter] !== 'function') {
          if (object.constructor === String) {
            throw new TypeError("".concat(key, ": Object was expected, but \"").concat(object, "\" was provided"));
          } else {
            throw new TypeError("".concat(key, ": ").concat(getter, " must be implemented for ").concat(object.constructor.name));
          }
        }
      }

      return getter;
    }
  }]);
  return ClassHelper;
}();

var _default = ClassHelper;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],197:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Color libs
 */
var Color = /*#__PURE__*/function () {
  function Color() {
    (0, _classCallCheck2["default"])(this, Color);
  }

  (0, _createClass2["default"])(Color, null, [{
    key: "fromArrayInt",

    /**
     * Generate color from integers
     */
    value: function fromArrayInt(ints) {
      var _int = ints.reduce(function (sum, num) {
        return sum + parseInt(num);
      }, 0);

      return (_int & 0x00FFFFFF).toString(16).toUpperCase();
    }
    /**
     * @param {string} hex
     * @param {number} opacity
     * @return {string|null}
     */

  }, {
    key: "hexToRgba",
    value: function hexToRgba(hex) {
      var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var colors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      var colorRgba = colors ? {
        r: parseInt(colors[1], 16),
        g: parseInt(colors[2], 16),
        b: parseInt(colors[3], 16),
        a: opacity
      } : null;

      if (colorRgba) {
        return "rgba(".concat(colorRgba.r, ", ").concat(colorRgba.g, ", ").concat(colorRgba.b, ", ").concat(colorRgba.a, ")");
      }

      return null;
    }
  }]);
  return Color;
}();

var _default = Color;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],198:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _DataSchema = _interopRequireDefault(require("../project/data/DataSchema.js"));

var DataHelper = /*#__PURE__*/function () {
  function DataHelper() {
    (0, _classCallCheck2["default"])(this, DataHelper);
  }

  (0, _createClass2["default"])(DataHelper, null, [{
    key: "validate",

    /**
     * @param {Object|Array|Data} value
     * @param {Data|Function} type
     * @return {Object|Array}
     */
    value: function validate(value, type) {
      var dataValidated;

      if (value) {
        if (value.dataId) {
          // If dataId is present, validate data for deserialization
          dataValidated = _DataSchema["default"].newInstance(value.dataId, type);
        } else if (!_DataSchema["default"].isExcluded(value.constructor)) {
          // else for serialization
          if (value instanceof type) {
            dataValidated = new type();
            dataValidated.setDataId(_DataSchema["default"].getId(value.constructor));
          }
        }
      }

      return dataValidated;
    }
  }]);
  return DataHelper;
}();

exports["default"] = DataHelper;

},{"../project/data/DataSchema.js":163,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],199:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/**
 * @class {FileHelper}
 */
var FileHelper = /*#__PURE__*/function () {
  function FileHelper() {
    (0, _classCallCheck2["default"])(this, FileHelper);
  }

  (0, _createClass2["default"])(FileHelper, null, [{
    key: "save",

    /**
     * @param {string} content
     * @param {string} type
     * @param {string} filename
     */
    value: function save(content, type) {
      var filename = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var blob = content instanceof Blob ? content : new Blob([content], {
        type: type
      });
      var a = document.createElement('a');
      a.download = filename || 'webEngine';
      a.href = window.URL.createObjectURL(blob);
      a.click();
    }
    /**
     * @param {Blob} file
     * @param {string} type
     */

  }, {
    key: "load",
    value: function load(file, type) {
      if (this.validate(file, type)) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();

          reader.onload = function () {
            resolve(reader.result);
          };

          reader.onerror = reject;
          reader.readAsText(file);
        });
      }
    }
    /**
     * @param {Blob} file
     * @param {string} type
     * @return {boolean}
     */

  }, {
    key: "validate",
    value: function validate(file, type) {
      var fileType = file.type;
      return fileType === type;
    }
    /**
     * @param {string} fileId
     * @return {Blob[]}
     */

  }, {
    key: "openFileUpload",
    value: function openFileUpload(fileId) {
      var fileInput = document.getElementById(fileId);

      if (!fileInput) {
        fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.id = fileId;
        fileInput.multiple = true;
        document.body.appendChild(fileInput);
        fileInput.click();
      }

      return fileInput.files;
    }
    /**
     * @param {string} fileId
     */

  }, {
    key: "removeFileUpload",
    value: function removeFileUpload(fileId) {
      document.body.removeChild(document.getElementById(fileId));
    }
    /**
     * @param {string} name
     * @return {string}
     */

  }, {
    key: "getFilename",
    value: function getFilename(name) {
      if (name) {
        return name.replace(/(.+)(\.[a-zA-Z]+)/, '$1');
      }

      return '';
    }
  }]);
  return FileHelper;
}();

(0, _defineProperty2["default"])(FileHelper, "type", {
  XML: 'text/xml',
  JS: 'text/javascript',
  Json: 'application/json',
  BIN: 'application/octet-binary;charset=utf-8',
  ZIP: 'application/zip',
  IMG_JPEG: 'image/jpeg',
  IMG_PNG: 'image/png'
});
var _default = FileHelper;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/interopRequireDefault":12}],200:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Size = _interopRequireDefault(require("../pobject/Size.js"));

var GeometryHelper = /*#__PURE__*/function () {
  function GeometryHelper() {
    (0, _classCallCheck2["default"])(this, GeometryHelper);
  }

  (0, _createClass2["default"])(GeometryHelper, null, [{
    key: "getLargestRectangle",

    /**
     * Calculate the largest rectangle for given rotation and size
     * @param {number} angleRadian
     * @param {Size} size
     */
    value: function getLargestRectangle(angleRadian, size) {
      var cosA = Math.cos(angleRadian || 0);
      var sinA = Math.sin(angleRadian || 0);
      var points = [{
        x: 0,
        y: 0
      }, {
        x: size.width,
        y: 0
      }, {
        x: size.width,
        y: size.height
      }, {
        x: 0,
        y: size.height
      }];
      var rotatedPoints = points.map(function (_ref) {
        var x = _ref.x,
            y = _ref.y;
        return {
          x: x * cosA - y * sinA,
          y: x * sinA + y * cosA
        };
      });
      var minX = rotatedPoints.reduce(function (mnX, current) {
        return mnX > current.x && current.x || mnX;
      }, rotatedPoints[0].x);
      var maxX = rotatedPoints.reduce(function (mxX, current) {
        return mxX < current.x && current.x || mxX;
      }, rotatedPoints[0].x);
      var minY = rotatedPoints.reduce(function (mnY, current) {
        return mnY > current.y && current.y || mnY;
      }, rotatedPoints[0].y);
      var maxY = rotatedPoints.reduce(function (mxY, current) {
        return mxY < current.y && current.y || mxY;
      }, rotatedPoints[0].y);
      return new _Size["default"]({
        width: Math.ceil(maxX - minX),
        height: Math.ceil(maxY - minY)
      });
    }
  }]);
  return GeometryHelper;
}();

exports["default"] = GeometryHelper;

},{"../pobject/Size.js":155,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],201:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Constant = require("../core/Constant.js");

/**
 * @class {ImageHelper}
 */
var ImageHelper = /*#__PURE__*/function () {
  function ImageHelper() {
    (0, _classCallCheck2["default"])(this, ImageHelper);
  }

  (0, _createClass2["default"])(ImageHelper, null, [{
    key: "getDataURL",

    /**
     * @param {OffscreenCanvas} canvas
     * @param {Size} size
     * @return {string}
     */
    value: function getDataURL(canvas, size) {
      var sizeWidth = size.width,
          sizeHeight = size.height;
      var isWidthGtHeight = canvas.width > canvas.height;
      var coefResize = isWidthGtHeight ? sizeWidth / canvas.width : sizeHeight / canvas.height;
      var width = isWidthGtHeight ? sizeWidth : canvas.width * coefResize;
      var height = isWidthGtHeight ? canvas.height * coefResize : sizeHeight;
      var canvasEl = document.createElement('canvas');
      canvasEl.width = width;
      canvasEl.height = height;
      var contextEl = canvasEl.getContext(_Constant.CANVAS_CONTEXT_TYPE);
      contextEl.drawImage(canvas, 0, 0, width, height);
      var dataUrl = canvasEl.toDataURL('image/png');
      canvasEl.remove();
      return dataUrl;
    }
  }]);
  return ImageHelper;
}();

var _default = ImageHelper;
exports["default"] = _default;

},{"../core/Constant.js":44,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],202:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Maths libs
 */
var Maths = /*#__PURE__*/function () {
  function Maths() {
    (0, _classCallCheck2["default"])(this, Maths);
  }

  (0, _createClass2["default"])(Maths, null, [{
    key: "generateId",

    /**
     * Generate an uniqu ID
     * @return {number}
     */
    value: function generateId() {
      return Date.now() + parseInt(Math.random() * 100000);
    }
    /**
     * Convert degree to randian
     * @param {Number} deg
     */

  }, {
    key: "fromDegree",
    value: function fromDegree(deg) {
      return deg * Math.PI / 180;
    }
    /**
     * Convert radian to degree
     * @param {Number} rad
     */

  }, {
    key: "toDegree",
    value: function toDegree(rad) {
      return Math.round(rad * 180 / Math.PI * 100) / 100;
    }
    /**
     * Get random value within an interval
     * @param {Number} min
     * @param {Number} max
     */

  }, {
    key: "randomInterval",
    value: function randomInterval(min, max) {
      return Math.random() * (max - min) + min;
    }
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} t
     * @return {number}
     */

  }, {
    key: "cosineInterpolate",
    value: function cosineInterpolate(a, b, t) {
      var c = (1 - Math.cos(t * 3.1415927)) * .5;
      return (1. - c) * a + c * b;
    }
  }]);
  return Maths;
}();

var _default = Maths;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],203:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _StringHelper = _interopRequireDefault(require("./StringHelper.js"));

var _ClassHelper = _interopRequireDefault(require("./ClassHelper.js"));

/**
 * @class {ObjectHelper}
 */
var ObjectHelper = /*#__PURE__*/function () {
  function ObjectHelper() {
    (0, _classCallCheck2["default"])(this, ObjectHelper);
  }

  (0, _createClass2["default"])(ObjectHelper, null, [{
    key: "isEqual",

    /**
     * @param {Object} object1
     * @param {Object} object2
     * @return {boolean}
     */
    value: function isEqual(object1, object2) {
      return !Object.getOwnPropertyNames(object1).find(function (prop) {
        return object1[prop] !== object2[prop];
      });
    }
    /**
     * @param {Object} target
     * @param {Object} source
     */

  }, {
    key: "assign",
    value: function assign(target, source) {
      var _this = this;

      Object.getOwnPropertyNames(source).forEach(function (srcProperty) {
        var setterProperty = "set".concat(_StringHelper["default"].capFirstLetter(srcProperty));
        var valProperty = source[srcProperty];

        if (_.isObject(valProperty)) {
          _this.assign(target[srcProperty], valProperty);
        } else {
          target && target[setterProperty](valProperty);
        }
      });
    }
    /**
     * @param {Object} object
     * @param {Function|ArrayConstructor} prototype
     * @returns {{key: string, value: *}[]}
     */

  }, {
    key: "getProperties",
    value: function getProperties(object, prototype) {
      if (prototype === Array) {
        return _.isArray(object) ? object.map(function (value) {
          return {
            key: 'element',
            value: value
          };
        }) : [];
      } else if (_.isObject(object)) {
        var tempPrototype = new prototype();
        return Object.getOwnPropertyNames(tempPrototype).map(function (prop) {
          var value;

          if (object) {
            if (object.constructor === Object) {
              value = object[prop];
            } else {
              var getter = _ClassHelper["default"].getGetter(object, prop);

              value = object[getter]();
            }
          }

          return {
            key: prop,
            value: value
          };
        });
      }
    }
    /**
     * @param {Object|Array} object
     * @param {string} property
     * @param {Object|Array} propertyValue
     */

  }, {
    key: "setProperty",
    value: function () {
      var _setProperty = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(object, property, propertyValue) {
        var concatAttr, setter;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_.isArray(object)) {
                  _context.next = 4;
                  break;
                }

                object.push(propertyValue);
                _context.next = 17;
                break;

              case 4:
                if (!_.isArray(propertyValue)) {
                  _context.next = 13;
                  break;
                }

                concatAttr = "concat".concat(_StringHelper["default"].capFirstLetter(property));

                if (!_.isFunction(object[concatAttr])) {
                  _context.next = 10;
                  break;
                }

                object[concatAttr](propertyValue);
                _context.next = 11;
                break;

              case 10:
                throw new TypeError("Method ".concat(concatAttr, " not defined for ").concat(object.constructor.name));

              case 11:
                _context.next = 17;
                break;

              case 13:
                if (!object) {
                  _context.next = 17;
                  break;
                }

                setter = _ClassHelper["default"].getSetter(object, property);
                _context.next = 17;
                return object[setter](propertyValue);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function setProperty(_x, _x2, _x3) {
        return _setProperty.apply(this, arguments);
      }

      return setProperty;
    }()
  }]);
  return ObjectHelper;
}();

var _default = ObjectHelper;
exports["default"] = _default;

},{"./ClassHelper.js":196,"./StringHelper.js":205,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/regenerator":25}],204:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PrimitiveHelper = /*#__PURE__*/function () {
  function PrimitiveHelper() {
    (0, _classCallCheck2["default"])(this, PrimitiveHelper);
  }

  (0, _createClass2["default"])(PrimitiveHelper, null, [{
    key: "validate",

    /**
     * @param {string|number|boolean} value
     * @param {string} type
     * @return {string|number|boolean}
     */
    value: function validate(value, type) {
      var newValue;

      switch (type) {
        case 'number':
          newValue = parseFloat(value) || null;
          break;

        case 'string':
          newValue = _.isString(value) ? value : '';
          break;

        case 'boolean':
          newValue = value === true || value === 'true';
          break;

        default:
          throw new TypeError("Primitive type ".concat(type, " not supported"));
      }

      return newValue;
    }
  }]);
  return PrimitiveHelper;
}();

exports["default"] = PrimitiveHelper;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],205:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var StringHelper = /*#__PURE__*/function () {
  function StringHelper() {
    (0, _classCallCheck2["default"])(this, StringHelper);
  }

  (0, _createClass2["default"])(StringHelper, null, [{
    key: "capFirstLetter",

    /**
     * @param {string} string
     * @return {string}
     */
    value: function capFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }]);
  return StringHelper;
}();

exports["default"] = StringHelper;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],206:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Vector class.
 * Define a vector coordinate (X, Y)
 */
var Vector = /*#__PURE__*/function () {
  function Vector() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      x: 0,
      y: 0,
      z: 0
    },
        x = _ref.x,
        y = _ref.y,
        z = _ref.z;

    (0, _classCallCheck2["default"])(this, Vector);
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }
  /**
   * @param {number|string} x
   */


  (0, _createClass2["default"])(Vector, [{
    key: "setX",
    value: function setX(x) {
      this.x = parseFloat(x) || 0;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getX",
    value: function getX() {
      return this.x;
    }
    /**
     * @param {number|string} y
     */

  }, {
    key: "setY",
    value: function setY(y) {
      this.y = parseFloat(y) || 0;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getY",
    value: function getY() {
      return this.y;
    }
    /**
     * @param {number|string} z
     */

  }, {
    key: "setZ",
    value: function setZ(z) {
      this.z = parseFloat(z) || 0;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getZ",
    value: function getZ() {
      return this.z;
    }
    /**
     * @param {Vector} vector
     * @return {boolean}
     */

  }, {
    key: "equals",
    value: function equals(vector) {
      return this.x === vector.x && this.y === vector.y && this.z === vector.z;
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {number}
     */

  }], [{
    key: "cross",
    value: function cross(vectorA, vectorB) {
      return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {number}
     */

  }, {
    key: "dot",
    value: function dot(vectorA, vectorB) {
      return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {Vector}
     */

  }, {
    key: "add",
    value: function add(vectorA, vectorB) {
      return {
        x: vectorA.x + vectorB.x,
        y: vectorA.y + vectorB.y,
        z: vectorA.z + vectorB.z
      };
    }
    /**
     * @param {Vector} vector
     * @param {number} value
     * @return {Vector}
     */

  }, {
    key: "multiply",
    value: function multiply(vector, value) {
      return new Vector({
        x: vector.x * value,
        y: vector.y * value,
        z: vector.z * value
      });
    }
    /**
     * @param {Vector} vector
     * @param {number} value
     * @return {Vector}
     */

  }, {
    key: "divide",
    value: function divide(vector, value) {
      return new Vector({
        x: vector.x / value,
        y: vector.y / value,
        z: vector.z / value
      });
    }
    /**
     * @param {Vector} vector
     * @return {number}
     */

  }, {
    key: "length",
    value: function length(vector) {
      return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
    }
    /**
     * @param {Vector} vector
     */

  }, {
    key: "normalize",
    value: function normalize(vector) {
      return this.divide(vector, this.length(vector));
    }
    /**
     * @param {Vector} vectorA
     * @param {Vector} vectorB
     * @return {number}
     */

  }, {
    key: "angle",
    value: function angle(vectorA, vectorB) {
      var signedAngleRadian = Math.atan2(vectorB.y, vectorB.x) - Math.atan2(vectorA.y, vectorA.x);
      return signedAngleRadian || 0;
    }
  }]);
  return Vector;
}();

var _default = Vector;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],207:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Vector = _interopRequireDefault(require("./Vector.js"));

/**
 * Define methods to manipulate vertices
 */
var Vertex = /*#__PURE__*/function () {
  function Vertex() {
    (0, _classCallCheck2["default"])(this, Vertex);
  }

  (0, _createClass2["default"])(Vertex, null, [{
    key: "getArea",

    /**
     * @param {{x: number, y: number}[]} vertices
     */
    value: function getArea(vertices) {
      var area = 0,
          jVertex = vertices.length - 1;
      vertices.forEach(function (vertex, iVertex) {
        area += (vertices[jVertex].x - vertex.x) * (vertices[jVertex].y + vertex.y);
        jVertex = iVertex;
      });
      return area / 2;
    }
    /**
     * Calculate the centroid of the given vertices
     * @param {{x: number, y: number}[]} vertices
     */

  }, {
    key: "getCenter",
    value: function getCenter(vertices) {
      var area = this.getArea(vertices);
      var center = {
        x: 0,
        y: 0
      };
      vertices.forEach(function (vertex, iVertex) {
        var jVertex = (iVertex + 1) % vertices.length;

        var cross = _Vector["default"].cross(vertex, vertices[jVertex]);

        var multiply = _Vector["default"].multiply(_Vector["default"].add(vertex, vertices[jVertex]), cross);

        center = _Vector["default"].add(center, multiply);
      });
      return _Vector["default"].divide(center, 6 * area);
    }
    /**
     * Check if a point is inside a set of vertices
     * @param {Vector[]} vertices
     * @param {Vector} point
     */

  }, {
    key: "contains",
    value: function contains(vertices, point) {
      for (var iVertex = 0; iVertex < vertices.length; iVertex++) {
        var vertex = vertices[iVertex];
        var nextVertex = vertices[(iVertex + 1) % vertices.length];

        if ((point.x - vertex.x) * (nextVertex.y - vertex.y) + (vertex.x - nextVertex.x) * (point.y - vertex.y) > 0) {
          return false;
        }
      }

      return true;
    }
    /**
     * Rotate a set of vertices by the given angle and point
     * @param {Vector[]} vertices
     * @param {number} angleRadian
     * @param {Vector} point
     *
     * @return {Vector[]}
     */

  }, {
    key: "rotate",
    value: function rotate(vertices, angleRadian, point) {
      var cos = Math.cos(angleRadian);
      var sin = Math.sin(angleRadian);
      return vertices.map(function (vertex) {
        var dx = vertex.x - point.x;
        var dy = vertex.y - point.y;
        return new _Vector["default"]({
          x: point.x + (dx * cos - dy * sin),
          y: point.y + (dx * sin + dy * cos)
        });
      });
    }
    /**
     * Translate a set of vertices by the given vector
     * @param {Vector[]} vertices
     * @param {Vector} vector
     * @param {number} sign
     * @return {Vector[]}
     */

  }, {
    key: "translate",
    value: function translate(vertices, vector) {
      var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      return vertices.map(function (vertex) {
        return new _Vector["default"]({
          x: vertex.x + vector.x * sign,
          y: vertex.y + vector.y * sign
        });
      });
    }
  }]);
  return Vertex;
}();

var _default = Vertex;
exports["default"] = _default;

},{"./Vector.js":206,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":12}],208:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _WorldData2 = _interopRequireDefault(require("../project/data/WorldData.js"));

var _Camera = _interopRequireDefault(require("../core/Camera.js"));

var _Physics = _interopRequireDefault(require("../physics/Physics.js"));

var _Vector = _interopRequireDefault(require("../utils/Vector.js"));

var _AssetsManager = _interopRequireDefault(require("../manager/AssetsManager.js"));

var _Window = _interopRequireDefault(require("../core/Window.js"));

var _Size = _interopRequireDefault(require("../pobject/Size.js"));

var _Constant = require("../core/Constant.js");

var _Folder = _interopRequireDefault(require("../asset/Folder.js"));

var _UnitManager = _interopRequireDefault(require("../manager/UnitManager.js"));

var _MeshComponent = _interopRequireDefault(require("../component/internal/MeshComponent.js"));

var _TransformComponent = _interopRequireDefault(require("../component/internal/TransformComponent.js"));

var _UnitSelector = _interopRequireDefault(require("../manager/UnitSelector.js"));

var _ExecutorRegistry = _interopRequireDefault(require("../executor/ExecutorRegistry.js"));

var _MeshManager = _interopRequireDefault(require("../manager/MeshManager.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @class {World}
 * @extends {WorldData}
 */
var World = /*#__PURE__*/function (_WorldData) {
  (0, _inherits2["default"])(World, _WorldData);

  var _super = _createSuper(World);

  function World() {
    var _this;

    (0, _classCallCheck2["default"])(this, World);
    _this = _super.call(this);
    _this.unitManager = new _UnitManager["default"]();
    _this.meshManager = new _MeshManager["default"]();
    _this.camera = new _Camera["default"](new _Vector["default"]({
      x: -_Constant.SCENE_WIDTH / 2,
      y: -_Constant.SCENE_HEIGHT / 2
    }));
    _this.physics = new _Physics["default"]();
    _this.assetsManager = new _AssetsManager["default"]();
    _this.cameraUnitId = null;
    _this.resolution = new _Size["default"]({
      width: _Constant.SCENE_WIDTH,
      height: _Constant.SCENE_HEIGHT
    });
    _this.gridUnitId = null;
    _this.showGrid = false;

    _this.init();

    return _this;
  }
  /**
   * Initialize the world. will erase also world's element from imported project
   */


  (0, _createClass2["default"])(World, [{
    key: "init",
    value: function init() {
      this.createRootFolder();
    }
    /**
     * Draw the entities.
     * @TODO: To optimize (rerender just entities updated)
     * @param {Renderer} renderer
     */

  }, {
    key: "draw",
    value: function draw(renderer) {
      var _this2 = this;

      this.getUnitManager().getUnitsHasComponents([_MeshComponent["default"], _TransformComponent["default"]]).forEach(function (unit) {
        return _this2.drawUnit(unit, renderer);
      });
    }
    /**
     * @param {UnitData} unit
     * @param {Renderer} renderer
     */

  }, {
    key: "drawUnit",
    value: function drawUnit(unit, renderer) {
      var meshManager = this.getMeshManager();

      var _Window$get = _Window["default"].get(),
          windowSize = _Window$get.size;

      var camera = this.getCamera();
      var _camera$position = camera.position,
          cameraX = _camera$position.x,
          cameraY = _camera$position.y;

      var _camera$fromScaleSize = camera.fromScaleSize(windowSize),
          sceneWidth = _camera$fromScaleSize.width,
          sceneHeight = _camera$fromScaleSize.height;

      var meshComponent = unit.getComponent(_MeshComponent["default"]);
      var transformComponent = unit.getComponent(_TransformComponent["default"]);
      var size = meshComponent.getSize();
      var position = transformComponent.getPosition();
      var minX = cameraX - size.getWidth();
      var maxX = cameraX + sceneWidth;
      var minY = cameraY - size.getHeight();
      var maxY = cameraY + sceneHeight;

      if (minX <= position.getX() && maxX >= position.getX() && minY <= position.getY() && maxY >= position.getY()) {
        var mesh = meshManager.get(unit.getId());
        mesh && renderer.draw(mesh, position);
      }
    }
    /**
     * Get the unit from world coordinate
     * @param {Vector} position canvas coordinates (window)
     * @return {Unit|null}
     */

  }, {
    key: "findUnit",
    value: function findUnit(position) {
      var unitSelector = _UnitSelector["default"].get();

      return unitSelector.get(this, this.getWorldPosition(position));
    }
    /**
     * @param {number} id
     * @return {Unit}
     */

  }, {
    key: "findUnitById",
    value: function findUnitById(id) {
      return this.getUnitManager().findById(id);
    }
    /**
     * Add a unit to the world
     * @param {Vector} position
     * @param {Class} type
     */

  }, {
    key: "addUnit",
    value: function addUnit(position, type) {
      var unit = this.getUnitManager().createUnit(type);
      unit.getComponent(_TransformComponent["default"]).setPosition(position);
    }
    /**
     * @param {number} unitId
     */

  }, {
    key: "removeUnitById",
    value: function removeUnitById(unitId) {
      var unit = this.getUnitManager().findById(unitId);

      if (unit) {
        this.getUnitManager().deleteUnit(unit);
      }
    }
    /**
     * @param {Unit} unit
     */

  }, {
    key: "deleteUnit",
    value: function deleteUnit(unit) {
      this.getUnitManager().deleteUnit(unit);
    }
    /**
     * @param {{position: Vector, size: Size}} dragArea
     * @return {Unit[]}
     */

  }, {
    key: "selectUnits",
    value: function selectUnits(dragArea) {
      var unitSelector = _UnitSelector["default"].get();

      unitSelector.unselectAll(this);
      return unitSelector.select(this, this.getWorldPosition(dragArea.position), dragArea.size);
    }
    /**
     * @param {Mouse} mouse
     * @return {Unit[]}
     */

  }, {
    key: "focusUnits",
    value: function focusUnits(mouse) {
      var unitSelector = _UnitSelector["default"].get();

      unitSelector.unfocusAll(this);
      var currentScenePosition = new _Vector["default"](mouse.currentScenePosition);
      var vector3d = this.getCamera().fromCameraScale(currentScenePosition);
      unitSelector.focus(this, this.getWorldPosition(vector3d));
    }
    /**
     * @param {Vector} position
     * @return {Unit[]}
     */

  }, {
    key: "findFirstUnitByPosition",
    value: function findFirstUnitByPosition(position) {
      return _UnitSelector["default"].get().get(this, position);
    }
    /**
     * Force the regeneration of all entities (regenerate meshes)
     */

  }, {
    key: "reload",
    value: function reload() {
      this.init();
      this.reloadAllUnit();
    }
  }, {
    key: "reloadAllUnit",
    value: function reloadAllUnit() {
      this.getUnitManager().sortUnits();
      this.regenerateAll();
    }
  }, {
    key: "regenerateAll",
    value: function regenerateAll() {
      this.getUnitManager().regenerateAll(this);
    }
  }, {
    key: "update",
    value: function update() {
      _ExecutorRegistry["default"].get().execute(this);
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "isShowGrid",
    value: function isShowGrid() {
      return this.getShowGrid();
    }
    /**
     * @param {boolean} showGrid
     */

  }, {
    key: "setShowGrid",
    value: function setShowGrid(showGrid) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(World.prototype), "setShowGrid", this).call(this, showGrid);
      this.setGridUnitId(null);
    }
  }, {
    key: "setupCamera",
    value: function setupCamera() {
      if (this.cameraUnitId) {
        this.getCamera().setup(this.cameraUnitId, this);
      }
    }
    /**
     * Get the world position of a given screen position
     * @param {Vector} position
     * @return {Vector}
     */

  }, {
    key: "getWorldPosition",
    value: function getWorldPosition(position) {
      return this.getCamera().fromCanvasCoord(position);
    }
    /**
     * Get the world position from the camera scale
     * @param {Vector} position
     * @return {Vector}
     */

  }, {
    key: "getWorldScalePosition",
    value: function getWorldScalePosition(position) {
      return this.getWorldPosition(this.getCamera().fromCameraScale(position));
    }
    /**
     * @return {MeshManager}
     */

  }, {
    key: "getMeshManager",
    value: function getMeshManager() {
      return this.meshManager;
    }
  }, {
    key: "createRootFolder",
    value: function createRootFolder() {
      var assetsManager = this.getAssetsManager();
      var rootFolder = assetsManager.findFolderById(0);

      if (!rootFolder) {
        rootFolder = new _Folder["default"]('Root');
        rootFolder.setId(0);
        assetsManager.addFolder(rootFolder);
      }
    }
    /**
     * @param {number} mouseConstraintId
     */

  }, {
    key: "setMouseConstraintId",
    value: function setMouseConstraintId(mouseConstraintId) {
      this.mouseConstraintId = mouseConstraintId;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getMouseConstraintId",
    value: function getMouseConstraintId() {
      return this.mouseConstraintId;
    }
    /**
     * @param {number} id
     */

  }, {
    key: "setGridUnitId",
    value: function setGridUnitId(id) {
      this.gridUnitId = id;
    }
    /**
     * @return {number}
     */

  }, {
    key: "getGridUnitId",
    value: function getGridUnitId() {
      return this.gridUnitId;
    }
  }], [{
    key: "get",
    value: function get() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);
  return World;
}(_WorldData2["default"]);

var _default = World;
exports["default"] = _default;

},{"../asset/Folder.js":27,"../component/internal/MeshComponent.js":33,"../component/internal/TransformComponent.js":35,"../core/Camera.js":43,"../core/Constant.js":44,"../core/Window.js":51,"../executor/ExecutorRegistry.js":59,"../manager/AssetsManager.js":136,"../manager/MeshManager.js":137,"../manager/UnitManager.js":138,"../manager/UnitSelector.js":139,"../physics/Physics.js":140,"../pobject/Size.js":155,"../project/data/WorldData.js":170,"../utils/Vector.js":206,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/get":9,"@babel/runtime/helpers/getPrototypeOf":10,"@babel/runtime/helpers/inherits":11,"@babel/runtime/helpers/interopRequireDefault":12,"@babel/runtime/helpers/possibleConstructorReturn":17}],209:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Application = _interopRequireDefault(require("../app/core/Application.js"));

var _RunGame = _interopRequireDefault(require("../app/loop/RunGame.js"));

new _Application["default"]([_RunGame["default"]]).start();

},{"../app/core/Application.js":42,"../app/loop/RunGame.js":134,"@babel/runtime/helpers/interopRequireDefault":12}]},{},[209]);
