const v={},se=(e,t)=>e===t,P={equals:se};let Z=z;const N={},m=1,j=2,_={owned:null,cleanups:null,context:null,owner:null};var p=null;let I=null,c=null,B=null,g=null,A=null,K=0;function D(e,t){const n=c,s=p,i=e.length===0?_:{owned:null,cleanups:null,context:null,owner:t||s};p=i,c=null;try{return W(()=>e(()=>J(i)),!0)}finally{c=n,p=s}}function ie(e,t){t=t?Object.assign({},P,t):P;const n={value:e,observers:null,observerSlots:null,pending:N,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==N?n.pending:n.value)),Q(n,i));return[$.bind(n),s]}function q(e,t,n){const s=V(e,t,!1,m);O(s)}function le(e,t,n){Z=ce;const s=V(e,t,!1,m);s.user=!0,A?A.push(s):queueMicrotask(()=>O(s))}function G(e,t,n){n=n?Object.assign({},P,n):P;const s=V(e,t,!0,0);return s.pending=N,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,O(s),$.bind(s)}function fe(e){if(B)return e();let t;const n=B=[];try{t=e()}finally{B=null}return W(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==N){const o=i.pending;i.pending=N,Q(i,o)}}},!1),t}function M(e){let t,n=c;return c=null,t=e(),c=n,t}function de(e){le(()=>M(e))}function oe(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function $(){const e=I;if(this.sources&&(this.state||e)){const t=g;g=null,this.state===m||e?O(this):F(this),g=t}if(c){const t=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(t)):(c.sources=[this],c.sourceSlots=[t]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function Q(e,t,n){if(B)return e.pending===N&&B.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&W(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i];s&&I.disposed.has(o),(s&&!o.tState||!s&&!o.state)&&(o.pure?g.push(o):A.push(o),o.observers&&ee(o)),s||(o.state=m)}if(g.length>1e6)throw g=[],new Error},!1),t}function O(e){if(!e.fn)return;J(e);const t=p,n=c,s=K;c=p=e,re(e,e.value,s),c=n,p=t}function re(e,t,n){let s;try{s=e.fn(t)}catch(i){te(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?Q(e,s):e.value=s,e.updatedAt=n)}function V(e,t,n,s=m,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==_&&(p.owned?p.owned.push(o):p.owned=[o]),o}function L(e){const t=I;if(e.state===0||t)return;if(e.state===j||t)return F(e);if(e.suspense&&M(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<K);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===m||t)O(e);else if(e.state===j||t){const i=g;g=null,F(e,n[0]),g=i}}function W(e,t){if(g)return e();let n=!1;t||(g=[]),A?n=!0:A=[],K++;try{return e()}catch(s){te(s)}finally{ue(n)}}function ue(e){g&&(z(g),g=null),!e&&(A.length?fe(()=>{Z(A),A=null}):A=null)}function z(e){for(let t=0;t<e.length;t++)L(e[t])}function ce(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:L(i)}const s=e.length;for(t=0;t<n;t++)L(e[t]);for(t=s;t<e.length;t++)L(e[t])}function F(e,t){const n=I;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===m||n?i!==t&&L(i):(i.state===j||n)&&F(i,t))}}function ee(e){const t=I;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=j,s.pure?g.push(s):A.push(s),s.observers&&ee(s))}}function J(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),f=n.observerSlots.pop();s<i.length&&(o.sourceSlots[f]=s,i[s]=o,n.observerSlots[s]=f)}}if(e.owned){for(t=0;t<e.owned.length;t++)J(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function te(e){throw e}const he=Symbol("fallback");function X(e){for(let t=0;t<e.length;t++)e[t]()}function ae(e,t,n={}){let s=[],i=[],o=[],f=0,l=t.length>1?[]:null;return oe(()=>X(o)),()=>{let h=e()||[],u,r;return M(()=>{let a=h.length,w,S,T,U,k,b,y,x,C;if(a===0)f!==0&&(X(o),o=[],s=[],i=[],f=0,l&&(l=[])),n.fallback&&(s=[he],i[0]=D(ne=>(o[0]=ne,n.fallback())),f=1);else if(f===0){for(i=new Array(a),r=0;r<a;r++)s[r]=h[r],i[r]=D(d);f=a}else{for(T=new Array(a),U=new Array(a),l&&(k=new Array(a)),b=0,y=Math.min(f,a);b<y&&s[b]===h[b];b++);for(y=f-1,x=a-1;y>=b&&x>=b&&s[y]===h[x];y--,x--)T[x]=i[y],U[x]=o[y],l&&(k[x]=l[y]);for(w=new Map,S=new Array(x+1),r=x;r>=b;r--)C=h[r],u=w.get(C),S[r]=u===void 0?-1:u,w.set(C,r);for(u=b;u<=y;u++)C=s[u],r=w.get(C),r!==void 0&&r!==-1?(T[r]=i[u],U[r]=o[u],l&&(k[r]=l[u]),r=S[r],w.set(C,r)):o[u]();for(r=b;r<a;r++)r in T?(i[r]=T[r],o[r]=U[r],l&&(l[r]=k[r],l[r](r))):i[r]=D(d);i=i.slice(0,f=a),s=h.slice(0)}return i});function d(a){if(o[r]=a,l){const[w,S]=ie(r);return l[r]=S,t(h[r],w)}return t(h[r])}}}function we(e,t){return M(()=>e(t))}function be(e){const t="fallback"in e&&{fallback:()=>e.fallback};return G(ae(()=>e.each,e.children,t||void 0))}function ye(e){let t=!1;const n=G(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return G(()=>{const s=n();if(s){const i=e.children;return(t=typeof i=="function"&&i.length>0)?M(()=>i(s)):i}return e.fallback})}function pe(e,t,n){let s=n.length,i=t.length,o=s,f=0,l=0,h=t[i-1].nextSibling,u=null;for(;f<i||l<o;){if(t[f]===n[l]){f++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===f){const r=o<s?l?n[l-1].nextSibling:n[o-l]:h;for(;l<o;)e.insertBefore(n[l++],r)}else if(o===l)for(;f<i;)(!u||!u.has(t[f]))&&t[f].remove(),f++;else if(t[f]===n[o-1]&&n[l]===t[i-1]){const r=t[--i].nextSibling;e.insertBefore(n[l++],t[f++].nextSibling),e.insertBefore(n[--o],r),t[i]=n[o]}else{if(!u){u=new Map;let d=l;for(;d<o;)u.set(n[d],d++)}const r=u.get(t[f]);if(r!=null)if(l<r&&r<o){let d=f,a=1,w;for(;++d<i&&d<o&&!((w=u.get(t[d]))==null||w!==r+a);)a++;if(a>r-l){const S=t[f];for(;l<r;)e.insertBefore(n[l++],S)}else e.replaceChild(n[l++],t[f++])}else f++;else t[f++].remove()}}}function Ae(e,t,n){let s;return D(i=>{s=i,t===document?e():ge(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function xe(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Se(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ge(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return R(e,t,s,n);q(i=>R(e,t(),i,n),s)}function R(e,t,n,s,i){for(v.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,f=s!==void 0;if(e=f&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(v.context)return n;if(o==="number"&&(t=t.toString()),f){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=E(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(v.context)return n;n=E(e,n,s)}else{if(o==="function")return q(()=>{let l=t();for(;typeof l=="function";)l=l();n=R(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[];if(H(l,t,i))return q(()=>n=R(e,l,n,s,!0)),()=>n;if(v.context){for(let h=0;h<l.length;h++)if(l[h].parentNode)return n=l}if(l.length===0){if(n=E(e,n,s),f)return n}else Array.isArray(n)?n.length===0?Y(e,l,s):pe(e,n,l):(n&&E(e),Y(e,l));n=l}else if(t instanceof Node){if(v.context&&t.parentNode)return n=f?[t]:t;if(Array.isArray(n)){if(f)return n=E(e,n,s,t);E(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function H(e,t,n){let s=!1;for(let i=0,o=t.length;i<o;i++){let f=t[i],l;if(f instanceof Node)e.push(f);else if(!(f==null||f===!0||f===!1))if(Array.isArray(f))s=H(e,f)||s;else if((l=typeof f)=="string")e.push(document.createTextNode(f));else if(l==="function")if(n){for(;typeof f=="function";)f=f();s=H(e,Array.isArray(f)?f:[f])||s}else e.push(f),s=!0;else e.push(document.createTextNode(f.toString()))}return s}function Y(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function E(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let f=t.length-1;f>=0;f--){const l=t[f];if(i!==l){const h=l.parentNode===e;!o&&!f?h?e.replaceChild(i,l):e.insertBefore(i,n):h&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}export{be as F,ye as S,ie as a,we as b,q as c,ge as i,de as o,Ae as r,Se as s,xe as t};