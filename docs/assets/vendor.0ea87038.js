const B={},se=(e,t)=>e===t,j={equals:se};let _=z;const N={},m=1,F=2,$={owned:null,cleanups:null,context:null,owner:null};var g=null;let M=null,c=null,L=null,p=null,x=null,Q=0;function D(e,t){const n=c,s=g,i=e.length===0?$:{owned:null,cleanups:null,context:null,owner:t||s};g=i,c=null;try{return J(()=>e(()=>X(i)),!0)}finally{c=n,g=s}}function ie(e,t){t=t?Object.assign({},j,t):j;const n={value:e,observers:null,observerSlots:null,pending:N,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==N?n.pending:n.value)),V(n,i));return[v.bind(n),s]}function G(e,t,n){const s=W(e,t,!1,m);P(s)}function le(e,t,n){_=ce;const s=W(e,t,!1,m);s.user=!0,x?x.push(s):queueMicrotask(()=>P(s))}function H(e,t,n){n=n?Object.assign({},j,n):j;const s=W(e,t,!0,0);return s.pending=N,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,P(s),v.bind(s)}function fe(e){if(L)return e();let t;const n=L=[];try{t=e()}finally{L=null}return J(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==N){const l=i.pending;i.pending=N,V(i,l)}}},!1),t}function O(e){let t,n=c;return c=null,t=e(),c=n,t}function de(e){le(()=>O(e))}function oe(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function v(){const e=M;if(this.sources&&(this.state||e)){const t=p;p=null,this.state===m||e?P(this):R(this),p=t}if(c){const t=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(t)):(c.sources=[this],c.sourceSlots=[t]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function V(e,t,n){if(L)return e.pending===N&&L.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&J(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&M.disposed.has(l),(s&&!l.tState||!s&&!l.state)&&(l.pure?p.push(l):x.push(l),l.observers&&ee(l)),s||(l.state=m)}if(p.length>1e6)throw p=[],new Error},!1),t}function P(e){if(!e.fn)return;X(e);const t=g,n=c,s=Q;c=g=e,re(e,e.value,s),c=n,g=t}function re(e,t,n){let s;try{s=e.fn(t)}catch(i){te(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?V(e,s):e.value=s,e.updatedAt=n)}function W(e,t,n,s=m,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==$&&(g.owned?g.owned.push(l):g.owned=[l]),l}function I(e){const t=M;if(e.state===0||t)return;if(e.state===F||t)return R(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Q);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===m||t)P(e);else if(e.state===F||t){const i=p;p=null,R(e,n[0]),p=i}}function J(e,t){if(p)return e();let n=!1;t||(p=[]),x?n=!0:x=[],Q++;try{return e()}catch(s){te(s)}finally{ue(n)}}function ue(e){p&&(z(p),p=null),!e&&(x.length?fe(()=>{_(x),x=null}):x=null)}function z(e){for(let t=0;t<e.length;t++)I(e[t])}function ce(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:I(i)}const s=e.length;for(t=0;t<n;t++)I(e[t]);for(t=s;t<e.length;t++)I(e[t])}function R(e,t){const n=M;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===m||n?i!==t&&I(i):(i.state===F||n)&&R(i,t))}}function ee(e){const t=M;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=F,s.pure?p.push(s):x.push(s),s.observers&&ee(s))}}function X(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),o=n.observerSlots.pop();s<i.length&&(l.sourceSlots[o]=s,i[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)X(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function te(e){throw e}const he=Symbol("fallback");function Y(e){for(let t=0;t<e.length;t++)e[t]()}function ae(e,t,n={}){let s=[],i=[],l=[],o=0,f=t.length>1?[]:null;return oe(()=>Y(l)),()=>{let h=e()||[],u,r;return O(()=>{let a=h.length,w,S,T,U,k,y,b,A,C;if(a===0)o!==0&&(Y(l),l=[],s=[],i=[],o=0,f&&(f=[])),n.fallback&&(s=[he],i[0]=D(ne=>(l[0]=ne,n.fallback())),o=1);else if(o===0){for(i=new Array(a),r=0;r<a;r++)s[r]=h[r],i[r]=D(d);o=a}else{for(T=new Array(a),U=new Array(a),f&&(k=new Array(a)),y=0,b=Math.min(o,a);y<b&&s[y]===h[y];y++);for(b=o-1,A=a-1;b>=y&&A>=y&&s[b]===h[A];b--,A--)T[A]=i[b],U[A]=l[b],f&&(k[A]=f[b]);for(w=new Map,S=new Array(A+1),r=A;r>=y;r--)C=h[r],u=w.get(C),S[r]=u===void 0?-1:u,w.set(C,r);for(u=y;u<=b;u++)C=s[u],r=w.get(C),r!==void 0&&r!==-1?(T[r]=i[u],U[r]=l[u],f&&(k[r]=f[u]),r=S[r],w.set(C,r)):l[u]();for(r=y;r<a;r++)r in T?(i[r]=T[r],l[r]=U[r],f&&(f[r]=k[r],f[r](r))):i[r]=D(d);i=i.slice(0,o=a),s=h.slice(0)}return i});function d(a){if(l[r]=a,f){const[w,S]=ie(r);return f[r]=S,t(h[r],w)}return t(h[r])}}}function we(e,t){return O(()=>e(t))}function ye(e){const t="fallback"in e&&{fallback:()=>e.fallback};return H(ae(()=>e.each,e.children,t||void 0))}function be(e){let t=!1;const n=H(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return H(()=>{const s=n();if(s){const i=e.children;return(t=typeof i=="function"&&i.length>0)?O(()=>i(s)):i}return e.fallback})}function ge(e,t,n){let s=n.length,i=t.length,l=s,o=0,f=0,h=t[i-1].nextSibling,u=null;for(;o<i||f<l;){if(t[o]===n[f]){o++,f++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===o){const r=l<s?f?n[f-1].nextSibling:n[l-f]:h;for(;f<l;)e.insertBefore(n[f++],r)}else if(l===f)for(;o<i;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[f]===t[i-1]){const r=t[--i].nextSibling;e.insertBefore(n[f++],t[o++].nextSibling),e.insertBefore(n[--l],r),t[i]=n[l]}else{if(!u){u=new Map;let d=f;for(;d<l;)u.set(n[d],d++)}const r=u.get(t[o]);if(r!=null)if(f<r&&r<l){let d=o,a=1,w;for(;++d<i&&d<l&&!((w=u.get(t[d]))==null||w!==r+a);)a++;if(a>r-f){const S=t[o];for(;f<r;)e.insertBefore(n[f++],S)}else e.replaceChild(n[f++],t[o++])}else o++;else t[o++].remove()}}}function xe(e,t,n){let s;return D(i=>{s=i,t===document?e():pe(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function Ae(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Se(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function me(e,t,n={}){const s=e.style;if(t==null||typeof t=="string")return s.cssText=t;typeof n=="string"&&(n={});let i,l;for(l in n)t[l]==null&&s.removeProperty(l),delete n[l];for(l in t)i=t[l],i!==n[l]&&(s.setProperty(l,i),n[l]=i);return n}function pe(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return q(e,t,s,n);G(i=>q(e,t(),i,n),s)}function q(e,t,n,s,i){for(B.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(B.context)return n;if(l==="number"&&(t=t.toString()),o){let f=n[0];f&&f.nodeType===3?f.data=t:f=document.createTextNode(t),n=E(e,n,s,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(B.context)return n;n=E(e,n,s)}else{if(l==="function")return G(()=>{let f=t();for(;typeof f=="function";)f=f();n=q(e,f,n,s)}),()=>n;if(Array.isArray(t)){const f=[];if(K(f,t,i))return G(()=>n=q(e,f,n,s,!0)),()=>n;if(B.context){for(let h=0;h<f.length;h++)if(f[h].parentNode)return n=f}if(f.length===0){if(n=E(e,n,s),o)return n}else Array.isArray(n)?n.length===0?Z(e,f,s):ge(e,n,f):(n&&E(e),Z(e,f));n=f}else if(t instanceof Node){if(B.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=E(e,n,s,t);E(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function K(e,t,n){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],f;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=K(e,o)||s;else if((f=typeof o)=="string")e.push(document.createTextNode(o));else if(f==="function")if(n){for(;typeof o=="function";)o=o();s=K(e,Array.isArray(o)?o:[o])||s}else e.push(o),s=!0;else e.push(document.createTextNode(o.toString()))}return s}function Z(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function E(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const f=t[o];if(i!==f){const h=f.parentNode===e;!l&&!o?h?e.replaceChild(i,f):e.insertBefore(i,n):h&&f.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}export{ye as F,be as S,ie as a,Se as b,G as c,we as d,pe as i,de as o,xe as r,me as s,Ae as t};
