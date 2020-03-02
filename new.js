var uce=function(e){"use strict";const t=new WeakMap,{create:n,defineProperties:s}=Object;var r=(e,t,n,s,r)=>{const o=n.length;let l=t.length,a=o,i=0,c=0,u=null;for(;i<l||c<a;)if(t[i]===n[c])i++,c++;else if(l&&a&&t[l-1]===n[a-1])l--,a--;else if(l===i){const t=a<o?c?s(n[c-1],-0).nextSibling:s(n[a-c],0):r;for(;c<a;)e.insertBefore(s(n[c++],1),t)}else if(a===c)for(;i<l;)e.removeChild(s(t[i++],-1));else if(l-i==1&&a-c==1)u&&u.has(t[i])?e.insertBefore(s(n[c],1),s(a<o?n[a]:r,0)):e.replaceChild(s(n[c],1),s(t[i],-1)),i++,c++;else if(t[i]===n[a-1]&&n[c]===t[l-1]){const r=s(t[--l],-1).nextSibling;e.insertBefore(s(n[c++],1),s(t[i++],-1).nextSibling),e.insertBefore(s(n[--a],1),r),t[l]=n[a]}else{if(!u){u=new Map;let e=c;for(;e<a;)u.set(n[e],e++)}if(u.has(t[i])){const r=u.get(t[i]);if(c<r&&r<a){let o=i,a=1;for(;++o<l&&u.has(t[o])&&u.get(t[o])===r+a;)a++;if(a>r-c){const o=s(t[i],0);for(;c<r;)e.insertBefore(s(n[c++],1),o)}else e.replaceChild(s(n[c++],1),s(t[i++],-1))}else i++}else e.removeChild(s(t[i++],-1))}return n};const{isArray:o}=Array,{indexOf:l,slice:a}=[],i=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),c=(e,t)=>("svg"===t?d:u)(e),u=e=>{const t=i("template");return t.innerHTML=e,t.content},d=e=>{const{content:t}=i("template"),n=i("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:s}=n.firstChild;let{length:r}=s;for(;r--;)t.appendChild(s[0]);return t},p=(e,t)=>e.childNodes[t],h=e=>{const t=[];let{parentNode:n}=e;for(;n;)t.unshift(l.call(n.childNodes,e)),n=(e=n).parentNode;return t},f=e=>{const{childNodes:t}=e,{length:n}=t;if(1===n)return t[0];const r=a.call(t,0);return s(e,{firstChild:{value:r[0]},lastChild:{value:r[n-1]},remove:{value(){const e=document.createRange();return e.setStartBefore(r[1]),e.setEndAfter(r[n-1]),e.deleteContents(),r[0]}},valueOf:{value(){if(t.length!==n){const t=document.createRange();t.setStartBefore(r[0]),t.setEndAfter(r[n-1]),e.appendChild(t.extractContents())}return e}}})},{createTreeWalker:m,importNode:g}=document,b=1!=g.length,v=b?(e,t)=>g.call(document,c(e,t),!0):c,w=b?e=>m.call(document,e,129,null,!1):e=>m.call(document,e,129),y=(e,t)=>11===e.nodeType?1/t<0?t?e.remove():e.lastChild:t?e.valueOf():e.firstChild:e;function C(e){const{type:t,path:n}=e,s=n.reduce(p,this);return"node"===t?((e,t)=>{let n;const s=document.createTextNode(""),l=i=>{switch(typeof i){case"string":case"number":case"boolean":n!==i&&(n=i,s.textContent=i,t=r(e.parentNode,t,[s],y,e));break;case"object":case"undefined":if(null==i){t=r(e.parentNode,t,[],y,e);break}default:if(n=i,o(i))if(0===i.length)t=r(e.parentNode,t,[],y,e);else switch(typeof i[0]){case"string":case"number":case"boolean":l(String(i));break;default:t=r(e.parentNode,t,i,y,e)}else"ELEMENT_NODE"in i&&(t=r(e.parentNode,t,11===i.nodeType?a.call(i.childNodes):[i],y,e))}};return l})(s,[]):"attr"===t?((e,t)=>{if("ref"===t)return t=>{t.current=e};if("."===t.slice(0,1)){const n=t.slice(1);return t=>{e[n]=t}}let n;if("on"===t.slice(0,2)){let s=t.slice(2);return t.toLowerCase()in e&&(s=s.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(s,n,!1),(n=t)&&e.addEventListener(s,t,!1))}}let s=!0;const r=e.ownerDocument.createAttribute(t);return t=>{n!==t&&(n=t,null==n?s||(e.removeAttributeNode(r),s=!0):(r.value=t,s&&(e.setAttributeNode(r),s=!1)))}})(s,e.name):(e=>{let t;return n=>{t!==n&&(t=n,e.textContent=null==n?"":n)}})(s)}const x=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,k=new WeakMap,N=(e,t)=>{const{wire:n,updates:s}=A(e,t);return{type:e,template:t,wire:n,updates:s}},$=(e,t)=>{for(;t--;){const n=e[t];if(/<[A-Za-z][^>]+$/.test(n))return!0;if(/>[^<>]*$/.test(n))return!1}return!1},L=(e,t)=>{const n=(e=>{const t=[];for(let n=0,{length:s}=e;n<s;n++){const r=e[n];x.test(r)&&$(e,n+1)?t.push(r.replace(x,(e,t,s)=>`isµ${n}=${s||'"'}${t}${s?"":'"'}`)):n+1<s?t.push(r,`\x3c!--isµ${n}--\x3e`):t.push(r)}return t.join("").trim().replace(/<([A-Za-z]+[A-Za-z0-9:._-]*)([^>]*?)(\/>)/g,T)})(t),s=v(n,e),r=w(s),o=[],l=t.length-1;let a=0,i=`isµ${a}`;for(;a<l;){const e=r.nextNode();if(!e)throw`bad template: ${n}`;if(8===e.nodeType)e.textContent===i&&(o.push({type:"node",path:h(e)}),i=`isµ${++a}`);else{for(;e.hasAttribute(i);)o.push({type:"attr",path:h(e),name:e.getAttribute(i)}),e.removeAttribute(i),i=`isµ${++a}`;/^(?:style|textarea)$/i.test(e.tagName)&&e.textContent.trim()===`\x3c!--${i}--\x3e`&&(o.push({type:"text",path:h(e)}),i=`isµ${++a}`)}}return{content:s,nodes:o}},A=(e,t)=>{const{content:n,nodes:s}=k.get(t)||O(e,t),r=g.call(document,n,!0),o=s.map(C,r);return{wire:f(r),updates:o}},E=(e,t)=>{const{sub:n,stack:s}=e,r={a:0,aLength:n.length,i:0,iLength:s.length},o=S(e,t,r),{a:l,i:a,aLength:i,iLength:c}=r;return l<i&&n.splice(l),a<c&&s.splice(a),o},O=(e,t)=>{const n=L(e,t);return k.set(t,n),n},S=(e,t,n)=>{const{stack:s}=e,{i:r,iLength:o}=n,{type:l,template:a,values:i}=t,c=r===o;c&&(n.iLength=s.push(N(l,a))),n.i++,M(e,i,n);let u=s[r];c||u.template===a&&u.type===l||(s[r]=u=N(l,a));const{wire:d,updates:p}=u;for(let e=0,{length:t}=p;e<t;e++)p[e](i[e]);return d},M=(e,t,n)=>{for(let s=0,{length:r}=t;s<r;s++){const r=t[s];if("object"==typeof r&&r)if(r instanceof B)t[s]=S(e,r,n);else if(o(r))for(let t=0,{length:s}=r;t<s;t++){const s=r[t];if("object"==typeof s&&s&&s instanceof B){const{sub:o}=e,{a:l,aLength:a}=n;l===a&&(n.aLength=o.push({sub:[],stack:[],wire:null})),n.a++,r[t]=E(o[l],s)}}}},T=(e,t,n)=>/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i.test(t)?e:`<${t}${n}></${t}>`;function B(e,t,n){this.type=e,this.template=t,this.values=n}const j=e=>{const t=new WeakMap;return s((t,...n)=>new B(e,t,n),{for:{value(s,r){const o=t.get(s)||t.set(s,n(null)).get(s);return o[r]||(o[r]=(l={sub:[],stack:[],wire:null},(t,...n)=>E(l,new B(e,t,n))));var l}},node:{value:(t,...n)=>E({sub:[],stack:[],wire:null},new B(e,t,n))}})},W=j("html"),z=(j("svg"),(e,n)=>{const s="function"==typeof n?n():n,r=t.get(e)||(e=>{const n={sub:[],stack:[],wire:null};return t.set(e,n),n})(e),o=s instanceof B?E(r,s):s;return o!==r.wire&&(r.wire=o,e.textContent="",e.appendChild(o.valueOf())),e}),{define:D}=customElements,{create:H,defineProperties:P,getOwnPropertyDescriptor:Z,keys:R}=Object,_=new WeakMap;function q(){return z(this,W.apply(null,arguments))}return e.define=(e,t)=>{const{attachShadow:n,attributeChanged:s,connected:r,disconnected:o,handleEvent:l,init:a,observedAttributes:i}=t,c={},u={},d=[],p=H(null);for(let e=R(t),n=0,{length:s}=e;n<s;n++){const s=e[n];if(/^on/.test(s)&&!/Options$/.test(s)){const e=t[s+"Options"]||!1,n=s.toLowerCase();let r=n.slice(2);d.push({type:r,options:e}),p[r]=s,n!==s&&(r=s.slice(2,3).toLowerCase()+s.slice(3),p[r]=s,d.push({type:r,options:e}))}switch(s){case"attachShadow":case"observedAttributes":break;default:u[s]=Z(t,s)}}const{length:h}=d;h&&!l&&(u.handleEvent={value(e){this[p[e.type]](e)}}),i&&(c.observedAttributes={value:i}),u.attributeChangedCallback={value(){b(this),s&&s.apply(this,arguments)}},u.connectedCallback={value(){b(this),r&&r.apply(this,arguments)}},o&&(u.disconnectedCallback={value:o});const f=t.extends||"element";class m extends((e=>"element"===e?HTMLElement:document.createElement(e).constructor)(f)){}P(m,c),P(m.prototype,u);const g=[e,m];function b(e){if(!_.has(e)){if(_.set(e,!0),h)for(let t=0;t<h;t++){const{type:n,options:s}=d[t];e.addEventListener(n,e,s)}P(e,{html:{value:q.bind(n?e.attachShadow(n):e)}}),a&&a.call(e)}}"element"!==f&&g.push({extends:f}),D.apply(customElements,g)},e}({});
