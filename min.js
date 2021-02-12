var uce=function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}var a=function(t){return{get:function(e){return t.get(e)},set:function(e,n){return t.set(e,n),n}}},l=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,s=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,f=/<[a-z][^>]+$/i,p=/>[^<>]*$/,d=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,v=/\s+$/,h=function t(e,n){return 0<n--&&(f.test(e[n])||!p.test(e[n])&&t(e,n))},y=function(t,e,n){return s.test(e)?t:"<".concat(e).concat(n.replace(v,""),"></").concat(e,">")},b=function(t,e,n){for(var r=[],o=t.length,i=function(n){var o=t[n-1];r.push(l.test(o)&&h(t,n)?o.replace(l,(function(t,r,o){return"".concat(e).concat(n-1,"=").concat(o||'"').concat(r).concat(o?"":'"')})):"".concat(o,"\x3c!--").concat(e).concat(n-1,"--\x3e"))},c=1;c<o;c++)i(c);r.push(t[o-1]);var u=r.join("").trim();return n?u:u.replace(d,y)},g=Array.isArray,m=[],w=m.indexOf,C=m.slice,k=function(t,e){return 111===t.nodeType?1/e<0?e?function(t){var e=t.firstChild,n=t.lastChild,r=document.createRange();return r.setStartAfter(e),r.setEndAfter(n),r.deleteContents(),e}(t):t.lastChild:e?t.valueOf():t.firstChild:t},O=function(t){var e="fragment",n="template",r="content"in i(n)?function(t){var e=i(n);return e.innerHTML=t,e.content}:function(t){var r=i(e),c=i(n),u=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var a=RegExp.$1;c.innerHTML="<table>"+t+"</table>",u=c.querySelectorAll(a)}else c.innerHTML=t,u=c.childNodes;return o(r,u),r};return function(t,e){return("svg"===e?c:r)(t)};function o(t,e){for(var n=e.length;n--;)t.appendChild(e[0])}function i(n){return n===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",n)}function c(t){var n=i(e),r=i("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",o(n,r.firstChild.childNodes),n}}(document),x=function(t,e){return t.childNodes[e]},A=function(t){for(var e=[],n=t.parentNode;n;)e.push(w.call(n.childNodes,t)),n=(t=n).parentNode;return e},E=document,N=E.createTreeWalker,j=E.importNode,S=1!=j.length,T=S?function(t,e,n){return j.call(document,O(t,e,n),!0)}:O,L=S?function(t){return N.call(document,t,129,null,!1)}:function(t){return N.call(document,t,129)},M=function(t,e,n){return function(t,e,n,r,o){for(var i=n.length,c=e.length,u=i,a=0,l=0,s=null;a<c||l<u;)if(c===a)for(var f=u<i?l?r(n[l-1],-0).nextSibling:r(n[u-l],0):o;l<u;)t.insertBefore(r(n[l++],1),f);else if(u===l)for(;a<c;)s&&s.has(e[a])||t.removeChild(r(e[a],-1)),a++;else if(e[a]===n[l])a++,l++;else if(e[c-1]===n[u-1])c--,u--;else if(e[a]===n[u-1]&&n[l]===e[c-1]){var p=r(e[--c],-1).nextSibling;t.insertBefore(r(n[l++],1),r(e[a++],-1).nextSibling),t.insertBefore(r(n[--u],1),p),e[c]=n[u]}else{if(!s){s=new Map;for(var d=l;d<u;)s.set(n[d],d++)}if(s.has(e[a])){var v=s.get(e[a]);if(l<v&&v<u){for(var h=a,y=1;++h<c&&h<u&&s.get(e[h])===v+y;)y++;if(y>v-l)for(var b=r(e[a],0);l<v;)t.insertBefore(r(n[l++],1),b);else t.replaceChild(r(n[l++],1),r(e[a++],-1))}else a++}else t.removeChild(r(e[a++],-1))}return n}(t.parentNode,e,n,k,t)},P=function(t,e){switch(e[0]){case"?":return function(t,e,n){return function(r){n!==!!r&&((n=!!r)?t.setAttribute(e,""):t.removeAttribute(e))}}(t,e.slice(1),!1);case".":return function(t,e){return"dataset"===e?function(t){var e=t.dataset;return function(t){for(var n in t){var r=t[n];null==r?delete e[n]:e[n]=r}}}(t):function(n){t[e]=n}}(t,e.slice(1));case"o":if("n"===e[1])return function(t,e){var n,r=e.slice(2);return!(e in t)&&e.toLowerCase()in t&&(r=r.toLowerCase()),function(e){var o=g(e)?e:[e,!1];n!==o[0]&&(n&&t.removeEventListener(r,n,o[1]),(n=o[0])&&t.addEventListener(r,n,o[1]))}}(t,e)}switch(e){case"ref":return function(t){return function(e){"function"==typeof e?e(t):e.current=t}}(t);case"aria":return function(t){return function(e){for(var n in e){var r="role"===n?n:"aria-".concat(n),o=e[n];null==o?t.removeAttribute(r):t.setAttribute(r,o)}}}(t)}return function(t,e){var n,r=!0,o=document.createAttributeNS(null,e);return function(e){n!==e&&(null==(n=e)?r||(t.removeAttributeNode(o),r=!0):(o.value=e,r&&(t.setAttributeNodeNS(o),r=!1)))}}(t,e)};function _(t){var e=t.type,n=t.path.reduceRight(x,this);return"node"===e?function(t){var e,n,r=[];return function o(i){switch(typeof i){case"string":case"number":case"boolean":e!==i&&(e=i,n?n.textContent=i:n=document.createTextNode(i),r=M(t,r,[n]));break;case"object":case"undefined":if(null==i){e!=i&&(e=i,r=M(t,r,[]));break}if(g(i)){e=i,0===i.length?r=M(t,r,[]):"object"==typeof i[0]?r=M(t,r,i):o(String(i));break}"ELEMENT_NODE"in i&&e!==i&&(e=i,r=M(t,r,11===i.nodeType?C.call(i.childNodes):[i]))}}}(n):"attr"===e?P(n,t.name):function(t){var e;return function(n){e!=n&&(e=n,t.textContent=null==n?"":n)}}(n)}var R="isµ",$=a(new WeakMap),D=/^(?:plaintext|script|style|textarea|title|xmp)$/i,H=function(t,e){var n=$.get(e)||$.set(e,function(t,e){for(var n=b(e,R,"svg"===t),r=T(n,t),o=L(r),i=[],c=e.length-1,u=0,a="".concat(R).concat(u);u<c;){var l=o.nextNode();if(!l)throw"bad template: ".concat(n);if(8===l.nodeType)l.textContent===a&&(i.push({type:"node",path:A(l)}),a="".concat(R).concat(++u));else{for(;l.hasAttribute(a);)i.push({type:"attr",path:A(l),name:l.getAttribute(a)}),l.removeAttribute(a),a="".concat(R).concat(++u);D.test(l.tagName)&&l.textContent.trim()==="\x3c!--".concat(a,"--\x3e")&&(l.textContent="",i.push({type:"text",path:A(l)}),a="".concat(R).concat(++u))}}return{content:r,nodes:i}}(t,e)),r=n.content,o=n.nodes,i=j.call(document,r,!0);return{content:i,updates:o.map(_,i)}},W=function(t,e){var n=e.type,r=e.template,o=e.values,i=o.length;B(t,o,i);var c=t.entry;c&&c.template===r&&c.type===n||(t.entry=c=function(t,e){var n=H(t,e);return{type:t,template:e,content:n.content,updates:n.updates,wire:null}}(n,r));for(var u=c,a=u.content,l=u.updates,s=u.wire,f=0;f<i;f++)l[f](o[f]);return s||(c.wire=function(t){var e=t.childNodes,n=e.length;if(n<2)return n?e[0]:t;var r=C.call(e,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(e.length!==n)for(var o=0;o<n;)t.appendChild(r[o++]);return t}}}(a))},B=function t(e,n,r){for(var o=e.stack,i=0;i<r;i++){var c=n[i];c instanceof z?n[i]=W(o[i]||(o[i]={stack:[],entry:null,wire:null}),c):g(c)?t(o[i]||(o[i]={stack:[],entry:null,wire:null}),c,c.length):o[i]=null}r<o.length&&o.splice(r)};function z(t,e,n){this.type=t,this.template=e,this.values=n}var q=Object.create,F=Object.defineProperties,G=function(t){var e=a(new WeakMap);return F((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new z(t,e,r)}),{for:{value:function(n,r){var o=e.get(n)||e.set(n,q(null));return o[r]||(o[r]=function(e){return function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return W(e,{type:t,template:n,values:o})}}({stack:[],entry:null,wire:null}))}},node:{value:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return W({stack:[],entry:null,wire:null},{type:t,template:e,values:r}).valueOf()}}})},I=a(new WeakMap),J=function(t,e){var n="function"==typeof e?e():e,r=I.get(t)||I.set(t,{stack:[],entry:null,wire:null}),o=n instanceof z?W(r,n):n;return o!==r.wire&&(r.wire=o,t.textContent="",t.appendChild(o.valueOf())),t},K=G("html"),Q=G("svg");function U(t){for(var e=t[0],n=1,r=arguments.length;n<r;n++)e+=arguments[n]+t[n];return e}var V=Object.defineProperties,X=Object.keys,Y=function(t,e,n,r,o){return{configurable:!0,get:function(){return r},set:function(i){(t||i!==r||e&&"object"==typeof i&&i)&&(r=i,n?o.call(this,r):o.call(this))}}},Z=function(t,e,n,r,o,i){for(var c={},u=o!==tt,a=[n,r,u],l=X(t),s=0;s<l.length;s++){var f=e(t,l[s]),p=u?o(f):[f,o];i&&(p[1]=i),c[l[s]]=Y.apply(null,a.concat(p))}return c},tt=function(){},et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.all,n=void 0!==e&&e,r=t.shallow,o=void 0===r||r,i=t.useState,c=void 0===i?tt:i,u=t.getAttribute,a=void 0===u?function(t,e){return t.getAttribute(e)}:u;return function(t,e,r){var i=Z(e,(function(e,n){var r=e[n],o=typeof r;return t.hasOwnProperty(n)?(r=t[n],delete t[n]):t.hasAttribute(n)&&(r=a(t,n),"number"==o?r=+r:"boolean"==o&&(r=!/^(?:false|0|)$/.test(r))),r}),n,o,c,r);return V(t,i)}}({dom:!0}),nt=customElements,rt=nt.define,ot=Object.create,it=Object.defineProperties,ct=Object.getOwnPropertyDescriptor,ut=Object.keys,at="element",lt=a(new Map([[at,{c:HTMLElement,e:at}]])),st=function(t){return document.createElement(t)},ft=function(t){return lt.get(t)||lt.set(t,{c:st(t).constructor,e:t})},pt=function(t,n){for(var o=n.attachShadow,i=n.attributeChanged,c=n.bound,a=n.connected,l=n.disconnected,s=n.handleEvent,f=n.init,p=n.observedAttributes,d=n.props,v=n.render,h=n.style,y=new WeakMap,b={},g={},m=[],w=ot(null),C=function(t,e,n){if(!y.has(t)){y.set(t,0),it(t,{html:{configurable:!0,value:vt.bind(o?t.attachShadow(o):t)}});for(var r=0;r<S;r++){var i=m[r],u=i.type,a=i.options;t.addEventListener(u,t,a)}c&&c.forEach(dt,t),d&&et(t,d,v),(f||v)&&(f||v).call(t),e&&(t[e]=n)}},k=ut(n),O=0,x=k.length;O<x;O++){var A=k[O];if(/^on./.test(A)&&!/Options$/.test(A)){var E=n[A+"Options"]||!1,N=A.toLowerCase(),j=N.slice(2);m.push({type:j,options:E}),w[j]=A,N!==A&&(j=N.slice(2,3)+A.slice(3),w[j]=A,m.push({type:j,options:E}))}switch(A){case"attachShadow":case"observedAttributes":case"style":break;default:g[A]=ct(n,A)}}var S=m.length;if(S&&!s&&(g.handleEvent={value:function(t){this[w[t.type]](t)}}),null!==d)if(d)for(var T=function(t,e){var n=t[e];g[n]={get:function(){return C(this),d[n]},set:function(t){C(this,n,t)}}},L=ut(d),M=0;M<L.length;M++)T(L,M);else g.props={get:function(){for(var t={},e=this.attributes,n=e.length,r=0;r<n;r++){var o=e[r],i=o.name,c=o.value;t[i]=c}return t}};p&&(b.observedAttributes={value:p}),g.attributeChangedCallback={value:function(){C(this),i&&i.apply(this,arguments)}},g.connectedCallback={value:function(){C(this),a&&a.call(this)}},l&&(g.disconnectedCallback={value:l});var P=ft(n.extends||at),_=P.c,R=P.e,$=function(t){r(o,t);var n=u(o);function o(){return e(this,o),n.apply(this,arguments)}return o}(_);it($,b),it($.prototype,g);var D=[t,$];return R!==at&&D.push({extends:R}),rt.apply(nt,D),lt.set(t,{c:$,e:R}),h&&(document.head.appendChild(st("style")).textContent=h(R===at?t:R+'[is="'+t+'"]')),$};function dt(t){this[t]=this[t].bind(this)}function vt(){return J(this,K.apply(null,arguments))}return nt.get("uce-lib")||nt.define("uce-lib",function(t){r(l,t);var o,i,c,a=u(l);function l(){return e(this,l),a.apply(this,arguments)}return o=l,c=[{key:"define",get:function(){return pt}},{key:"render",get:function(){return J}},{key:"html",get:function(){return K}},{key:"svg",get:function(){return Q}},{key:"css",get:function(){return U}}],(i=null)&&n(o.prototype,i),c&&n(o,c),l}(ft(at).c)),t.css=U,t.define=pt,t.html=K,t.render=J,t.svg=Q,t}({});