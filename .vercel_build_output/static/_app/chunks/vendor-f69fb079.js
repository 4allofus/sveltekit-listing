var Lg=Object.defineProperty;var Rl=Object.getOwnPropertySymbols;var Mg=Object.prototype.hasOwnProperty,Ug=Object.prototype.propertyIsEnumerable;var Nl=(t,e,n)=>e in t?Lg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ol=(t,e)=>{for(var n in e||(e={}))Mg.call(e,n)&&Nl(t,n,e[n]);if(Rl)for(var n of Rl(e))Ug.call(e,n)&&Nl(t,n,e[n]);return t};function bt(){}function tt(t,e){for(const n in e)t[n]=e[n];return t}function Dl(t){return t()}function Pl(){return Object.create(null)}function lt(t){t.forEach(Dl)}function xg(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ui;function US(t,e){return Ui||(Ui=document.createElement("a")),Ui.href=e,t===Ui.href}function Fg(t){return Object.keys(t).length===0}function ft(t,e,n,r){if(t){const i=Ll(t,e,n,r);return t[0](i)}}function Ll(t,e,n,r){return t[1]&&r?tt(n.ctx.slice(),t[1](r(e))):n.ctx}function dt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function pt(t,e,n,r,i,s){if(i){const o=Ll(e,n,r,s);t.p(o,i)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Ir(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function xi(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function Vg(t){const e={};for(const n in t)e[n]=!0;return e}function Ml(t){return t==null?"":t}let Fi=!1;function jg(){Fi=!0}function Bg(){Fi=!1}function $g(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function qg(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const u=e[l];u.claim_order!==void 0&&c.push(u)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,u=(i>0&&e[n[i]].claim_order<=l?i+1:$g(1,i,f=>e[n[f]].claim_order,l))-1;r[c]=n[u]+1;const h=u+1;n[h]=c,i=Math.max(h,i)}const s=[],o=[];let a=e.length-1;for(let c=n[i]+1;c!=0;c=r[c-1]){for(s.push(e[c-1]);a>=c;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<s.length&&o[c].claim_order>=s[l].claim_order;)l++;const u=l<s.length?s[l]:null;t.insertBefore(o[c],u)}}function Z(t,e){if(Fi){for(qg(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function fe(t,e,n){Fi&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode.removeChild(t)}function zg(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function oe(t){return document.createElement(t)}function Sr(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function nt(t){return document.createTextNode(t)}function Et(){return nt(" ")}function Un(){return nt("")}function K(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function q(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Tt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:q(t,r,e[r])}function xS(t){return t===""?null:+t}function ie(t){return Array.from(t.childNodes)}function Hg(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Ul(t,e,n,r,i=!1){Hg(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const c=n(a);return c===void 0?t.splice(o,1):t[o]=c,i||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const c=n(a);return c===void 0?t.splice(o,1):t[o]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function xl(t,e,n,r){return Ul(t,i=>i.nodeName===e,i=>{const s=[];for(let o=0;o<i.attributes.length;o++){const a=i.attributes[o];n[a.name]||s.push(a.name)}s.forEach(o=>i.removeAttribute(o))},()=>r(e))}function ce(t,e,n){return xl(t,e,n,oe)}function Vi(t,e,n){return xl(t,e,n,Sr)}function mt(t,e){return Ul(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>nt(e),!0)}function It(t){return mt(t," ")}function un(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function xn(t,e){t.value=e==null?"":e}function ji(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function zt(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function Bi(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];r.selected=~e.indexOf(r.__value)}}function Fl(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function W(t,e,n){t.classList[n?"add":"remove"](e)}function Gg(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}let $i;function qi(t){$i=t}function zi(){if(!$i)throw new Error("Function called outside component initialization");return $i}function FS(t){zi().$$.on_mount.push(t)}function VS(t){zi().$$.after_update.push(t)}function Hi(){const t=zi();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=Gg(e,n);r.slice().forEach(s=>{s.call(t,i)})}}}function jS(t,e){zi().$$.context.set(t,e)}function Ie(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const kr=[],Gi=[],Ki=[],xo=[],Kg=Promise.resolve();let Fo=!1;function Wg(){Fo||(Fo=!0,Kg.then(Vl))}function Ar(t){Ki.push(t)}function BS(t){xo.push(t)}let Vo=!1;const jo=new Set;function Vl(){if(!Vo){Vo=!0;do{for(let t=0;t<kr.length;t+=1){const e=kr[t];qi(e),Xg(e.$$)}for(qi(null),kr.length=0;Gi.length;)Gi.pop()();for(let t=0;t<Ki.length;t+=1){const e=Ki[t];jo.has(e)||(jo.add(e),e())}Ki.length=0}while(kr.length);for(;xo.length;)xo.pop()();Fo=!1,Vo=!1,jo.clear()}}function Xg(t){if(t.fragment!==null){t.update(),lt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ar)}}const Wi=new Set;let hn;function Cr(){hn={r:0,c:[],p:hn}}function Rr(){hn.r||lt(hn.c),hn=hn.p}function le(t,e){t&&t.i&&(Wi.delete(t),t.i(e))}function ge(t,e,n,r){if(t&&t.o){if(Wi.has(t))return;Wi.add(t),hn.c.push(()=>{Wi.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Fn(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const c in o)c in a||(r[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);t[s]=a}else for(const c in o)i[c]=1}for(const o in r)o in n||(n[o]=void 0);return n}function Yg(t){return typeof t=="object"&&t!==null?t:{}}function $S(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function jl(t){t&&t.c()}function Bl(t,e){t&&t.l(e)}function Bo(t,e,n,r){const{fragment:i,on_mount:s,on_destroy:o,after_update:a}=t.$$;i&&i.m(e,n),r||Ar(()=>{const c=s.map(Dl).filter(xg);o?o.push(...c):lt(c),t.$$.on_mount=[]}),a.forEach(Ar)}function $o(t,e){const n=t.$$;n.fragment!==null&&(lt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qg(t,e){t.$$.dirty[0]===-1&&(kr.push(t),Wg(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,r,i,s,o,a=[-1]){const c=$i;qi(t);const l=t.$$={fragment:null,ctx:null,props:s,update:bt,not_equal:i,bound:Pl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Pl(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,f,...d)=>{const m=d.length?d[0]:f;return l.ctx&&i(l.ctx[h],l.ctx[h]=m)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](m),u&&Qg(t,h)),f}):[],l.update(),u=!0,lt(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){jg();const h=ie(e.target);l.fragment&&l.fragment.l(h),h.forEach(N)}else l.fragment&&l.fragment.c();e.intro&&le(t.$$.fragment),Bo(t,e.target,e.anchor,e.customElement),Bg(),Vl()}qi(c)}class Gt{$destroy(){$o(this,1),this.$destroy=bt}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Fg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Vn=[];function qS(t,e=bt){let n;const r=new Set;function i(a){if(Dt(t,a)&&(t=a,n)){const c=!Vn.length;for(const l of r)l[1](),Vn.push(l,t);if(c){for(let l=0;l<Vn.length;l+=2)Vn[l][0](Vn[l+1]);Vn.length=0}}}function s(a){i(a(t))}function o(a,c=bt){const l=[a,c];return r.add(l),r.size===1&&(n=e(i)||bt),a(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}const Jg={size:(t,e)=>`${t}-${e}`,block:(t,e)=>`${t}-block`,type:(t,e)=>`${t}-${e}`,outline:(t,e)=>`${t}-${e}-outline`};function qo(t,e){return Object.entries(e).filter(([n,r])=>r).map(([n,r])=>Jg[n](t,r)).join(" ")}function Zg(t){let e,n,r,i;const s=t[10].default,o=ft(s,t,t[9],null);return{c(){e=oe("button"),o&&o.c(),this.h()},l(a){e=ce(a,"BUTTON",{class:!0});var c=ie(e);o&&o.l(c),c.forEach(N),this.h()},h(){q(e,"class",t[4]),e.disabled=t[0],W(e,"disabled",t[0])},m(a,c){fe(a,e,c),o&&o.m(e,null),n=!0,r||(i=K(e,"click",t[12]),r=!0)},p(a,c){o&&o.p&&(!n||c&512)&&pt(o,s,a,a[9],n?dt(s,a[9],c,null):gt(a[9]),null),(!n||c&16)&&q(e,"class",a[4]),(!n||c&1)&&(e.disabled=a[0]),c&17&&W(e,"disabled",a[0])},i(a){n||(le(o,a),n=!0)},o(a){ge(o,a),n=!1},d(a){a&&N(e),o&&o.d(a),r=!1,i()}}}function em(t){let e,n,r,i,s;const o=t[10].default,a=ft(o,t,t[9],null);return{c(){e=oe("a"),a&&a.c(),this.h()},l(c){e=ce(c,"A",{class:!0,role:!0,href:!0,target:!0});var l=ie(e);a&&a.l(l),l.forEach(N),this.h()},h(){q(e,"class",t[4]),q(e,"role","button"),q(e,"href",t[2]),q(e,"target",n=t[3]?"_blank":"_self"),W(e,"disabled",t[0])},m(c,l){fe(c,e,l),a&&a.m(e,null),r=!0,i||(s=K(e,"click",t[11]),i=!0)},p(c,l){a&&a.p&&(!r||l&512)&&pt(a,o,c,c[9],r?dt(o,c[9],l,null):gt(c[9]),null),(!r||l&16)&&q(e,"class",c[4]),(!r||l&4)&&q(e,"href",c[2]),(!r||l&8&&n!==(n=c[3]?"_blank":"_self"))&&q(e,"target",n),l&17&&W(e,"disabled",c[0])},i(c){r||(le(a,c),r=!0)},o(c){ge(a,c),r=!1},d(c){c&&N(e),a&&a.d(c),i=!1,s()}}}function tm(t){let e,n,r,i;const s=[em,Zg],o=[];function a(c,l){return c[1]||c[2]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),r=Un()},l(c){n.l(c),r=Un()},m(c,l){o[e].m(c,l),fe(c,r,l),i=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Cr(),ge(o[u],1,1,()=>{o[u]=null}),Rr(),n=o[e],n?n.p(c,l):(n=o[e]=s[e](c),n.c()),le(n,1),n.m(r.parentNode,r))},i(c){i||(le(n),i=!0)},o(c){ge(n),i=!1},d(c){o[e].d(c),c&&N(r)}}}function nm(t,e,n){let{$$slots:r={},$$scope:i}=e,{type:s=null}=e,{size:o="default"}=e,{block:a=!1}=e,{disabled:c=!1}=e,{outline:l=null}=e,{isLink:u=!1}=e,{href:h=""}=e,{external:f=!1}=e,d;function m(g){Ie.call(this,t,g)}function y(g){Ie.call(this,t,g)}return t.$$set=g=>{"type"in g&&n(5,s=g.type),"size"in g&&n(6,o=g.size),"block"in g&&n(7,a=g.block),"disabled"in g&&n(0,c=g.disabled),"outline"in g&&n(8,l=g.outline),"isLink"in g&&n(1,u=g.isLink),"href"in g&&n(2,h=g.href),"external"in g&&n(3,f=g.external),"$$scope"in g&&n(9,i=g.$$scope)},t.$$.update=()=>{t.$$.dirty&480&&n(4,d=`paper-btn ${qo("btn",{size:o,block:a,type:s,outline:l})}`)},[c,u,h,f,d,s,o,a,l,i,r,m,y]}class rm extends Gt{constructor(e){super();Ht(this,e,nm,tm,Dt,{type:5,size:6,block:7,disabled:0,outline:8,isLink:1,href:2,external:3})}}function $l(t){let e,n,r,i;return{c(){e=oe("span"),n=nt("X"),this.h()},l(s){e=ce(s,"SPAN",{class:!0});var o=ie(e);n=mt(o,"X"),o.forEach(N),this.h()},h(){q(e,"class","btn-close")},m(s,o){fe(s,e,o),Z(e,n),r||(i=K(e,"click",t[3]),r=!0)},p:bt,d(s){s&&N(e),r=!1,i()}}}function im(t){let e,n,r,i;const s=t[6].default,o=ft(s,t,t[5],null);let a=t[0]&&$l(t);return{c(){e=oe("div"),o&&o.c(),n=Et(),a&&a.c(),this.h()},l(c){e=ce(c,"DIV",{class:!0,role:!0});var l=ie(e);o&&o.l(l),n=It(l),a&&a.l(l),l.forEach(N),this.h()},h(){q(e,"class",r=""+(Ml(t[2])+" svelte-9xbwwn")),q(e,"role","alert"),W(e,"closed",t[1]),W(e,"dismissible",t[0])},m(c,l){fe(c,e,l),o&&o.m(e,null),Z(e,n),a&&a.m(e,null),i=!0},p(c,[l]){o&&o.p&&(!i||l&32)&&pt(o,s,c,c[5],i?dt(s,c[5],l,null):gt(c[5]),null),c[0]?a?a.p(c,l):(a=$l(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null),(!i||l&4&&r!==(r=""+(Ml(c[2])+" svelte-9xbwwn")))&&q(e,"class",r),l&6&&W(e,"closed",c[1]),l&5&&W(e,"dismissible",c[0])},i(c){i||(le(o,c),i=!0)},o(c){ge(o,c),i=!1},d(c){c&&N(e),o&&o.d(c),a&&a.d()}}}function sm(t,e,n){let{$$slots:r={},$$scope:i}=e,{type:s="primary"}=e,{dismissible:o=!1}=e,a=!1;function c(){n(1,a=!0)}let l;return t.$$set=u=>{"type"in u&&n(4,s=u.type),"dismissible"in u&&n(0,o=u.dismissible),"$$scope"in u&&n(5,i=u.$$scope)},t.$$.update=()=>{t.$$.dirty&16&&n(2,l=`alert ${qo("alert",{type:s})}`)},[o,a,l,c,s,i,r]}class zS extends Gt{constructor(e){super();Ht(this,e,sm,im,Dt,{type:4,dismissible:0})}}const om=t=>({}),ql=t=>({});function zl(t){let e,n;return{c(){e=oe("h4"),n=nt(t[1]),this.h()},l(r){e=ce(r,"H4",{class:!0});var i=ie(e);n=mt(i,t[1]),i.forEach(N),this.h()},h(){q(e,"class","modal-title")},m(r,i){fe(r,e,i),Z(e,n)},p(r,i){i&2&&un(n,r[1])},d(r){r&&N(e)}}}function Hl(t){let e,n;return{c(){e=oe("h5"),n=nt(t[2]),this.h()},l(r){e=ce(r,"H5",{class:!0});var i=ie(e);n=mt(i,t[2]),i.forEach(N),this.h()},h(){q(e,"class","modal-subtitle")},m(r,i){fe(r,e,i),Z(e,n)},p(r,i){i&4&&un(n,r[2])},d(r){r&&N(e)}}}function Gl(t){let e;const n=t[7].footer,r=ft(n,t,t[8],ql);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&256)&&pt(r,n,i,i[8],e?dt(n,i[8],s,om):gt(i[8]),ql)},i(i){e||(le(r,i),e=!0)},o(i){ge(r,i),e=!1},d(i){r&&r.d(i)}}}function am(t){let e;return{c(){e=nt(t[3])},l(n){e=mt(n,t[3])},m(n,r){fe(n,e,r)},p(n,r){r&8&&un(e,n[3])},d(n){n&&N(e)}}}function cm(t){let e,n,r,i,s,o,a,c,l,u,h,f,d,m,y,g=t[1]&&zl(t),b=t[2]&&Hl(t);const C=t[7].default,k=ft(C,t,t[8],null);let v=t[6].footer&&Gl(t);return f=new rm({props:{$$slots:{default:[am]},$$scope:{ctx:t}}}),f.$on("click",t[4]),{c(){e=oe("div"),n=oe("div"),r=oe("button"),i=nt("X"),s=Et(),g&&g.c(),o=Et(),b&&b.c(),a=Et(),c=oe("p"),k&&k.c(),l=Et(),u=oe("footer"),v&&v.c(),h=Et(),jl(f.$$.fragment),this.h()},l(I){e=ce(I,"DIV",{class:!0});var $=ie(e);n=ce($,"DIV",{class:!0});var se=ie(n);r=ce(se,"BUTTON",{class:!0});var pe=ie(r);i=mt(pe,"X"),pe.forEach(N),s=It(se),g&&g.l(se),o=It(se),b&&b.l(se),a=It(se),c=ce(se,"P",{class:!0});var Ee=ie(c);k&&k.l(Ee),Ee.forEach(N),l=It(se),u=ce(se,"FOOTER",{});var Re=ie(u);v&&v.l(Re),h=It(Re),Bl(f.$$.fragment,Re),Re.forEach(N),se.forEach(N),$.forEach(N),this.h()},h(){q(r,"class","btn-close svelte-1i5he0w"),q(c,"class","modal-text"),q(n,"class","modal-body svelte-1i5he0w"),q(e,"class","modal svelte-1i5he0w"),W(e,"active",t[0])},m(I,$){fe(I,e,$),Z(e,n),Z(n,r),Z(r,i),Z(n,s),g&&g.m(n,null),Z(n,o),b&&b.m(n,null),Z(n,a),Z(n,c),k&&k.m(c,null),Z(n,l),Z(n,u),v&&v.m(u,null),Z(u,h),Bo(f,u,null),d=!0,m||(y=[K(window,"keydown",t[5]),K(r,"click",t[4])],m=!0)},p(I,[$]){I[1]?g?g.p(I,$):(g=zl(I),g.c(),g.m(n,o)):g&&(g.d(1),g=null),I[2]?b?b.p(I,$):(b=Hl(I),b.c(),b.m(n,a)):b&&(b.d(1),b=null),k&&k.p&&(!d||$&256)&&pt(k,C,I,I[8],d?dt(C,I[8],$,null):gt(I[8]),null),I[6].footer?v?(v.p(I,$),$&64&&le(v,1)):(v=Gl(I),v.c(),le(v,1),v.m(u,h)):v&&(Cr(),ge(v,1,1,()=>{v=null}),Rr());const se={};$&264&&(se.$$scope={dirty:$,ctx:I}),f.$set(se),$&1&&W(e,"active",I[0])},i(I){d||(le(k,I),le(v),le(f.$$.fragment,I),d=!0)},o(I){ge(k,I),ge(v),ge(f.$$.fragment,I),d=!1},d(I){I&&N(e),g&&g.d(),b&&b.d(),k&&k.d(I),v&&v.d(),$o(f),m=!1,lt(y)}}}function lm(t,e,n){let{$$slots:r={},$$scope:i}=e;const s=Vg(r);let{active:o=!1}=e,{title:a=""}=e,{subTitle:c=""}=e,{closeBtnText:l="Close"}=e;function u(){n(0,o=!1)}function h({key:f}){f==="Escape"&&u()}return t.$$set=f=>{"active"in f&&n(0,o=f.active),"title"in f&&n(1,a=f.title),"subTitle"in f&&n(2,c=f.subTitle),"closeBtnText"in f&&n(3,l=f.closeBtnText),"$$scope"in f&&n(8,i=f.$$scope)},[o,a,c,l,u,h,s,r,i]}class Kl extends Gt{constructor(e){super();Ht(this,e,lm,cm,Dt,{active:0,title:1,subTitle:2,closeBtnText:3})}}function um(t){const e=new Kl({target:document.body,props:Ol({active:!0},t),intro:!0});return e.close=e.$destroy,e}Kl.open=um;var Kt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},hm=200,zo="__lodash_hash_undefined__",fm=1/0,Wl=9007199254740991,dm="[object Arguments]",pm="[object Function]",gm="[object GeneratorFunction]",mm="[object Symbol]",ym=/[\\^$.*+?()[\]{}|]/g,vm=/^\[object .+?Constructor\]$/,_m=/^(?:0|[1-9]\d*)$/,wm=typeof Kt=="object"&&Kt&&Kt.Object===Object&&Kt,bm=typeof self=="object"&&self&&self.Object===Object&&self,Ho=wm||bm||Function("return this")();function Em(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Tm(t,e){var n=t?t.length:0;return!!n&&km(t,e,0)>-1}function Im(t,e,n){for(var r=-1,i=t?t.length:0;++r<i;)if(n(e,t[r]))return!0;return!1}function Xl(t,e){for(var n=-1,r=t?t.length:0,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function Go(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}function Sm(t,e,n,r){for(var i=t.length,s=n+(r?1:-1);r?s--:++s<i;)if(e(t[s],s,t))return s;return-1}function km(t,e,n){if(e!==e)return Sm(t,Am,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Am(t){return t!==t}function Cm(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function Rm(t){return function(e){return t(e)}}function Nm(t,e){return t.has(e)}function Om(t,e){return t==null?void 0:t[e]}function Dm(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function Yl(t,e){return function(n){return t(e(n))}}var Pm=Array.prototype,Lm=Function.prototype,Xi=Object.prototype,Ko=Ho["__core-js_shared__"],Ql=function(){var t=/[^.]+$/.exec(Ko&&Ko.keys&&Ko.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Jl=Lm.toString,jn=Xi.hasOwnProperty,Wo=Xi.toString,Mm=RegExp("^"+Jl.call(jn).replace(ym,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Zl=Ho.Symbol,Um=Yl(Object.getPrototypeOf,Object),xm=Xi.propertyIsEnumerable,Fm=Pm.splice,eu=Zl?Zl.isConcatSpreadable:void 0,Xo=Object.getOwnPropertySymbols,tu=Math.max,Vm=ru(Ho,"Map"),Nr=ru(Object,"create");function fn(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function jm(){this.__data__=Nr?Nr(null):{}}function Bm(t){return this.has(t)&&delete this.__data__[t]}function $m(t){var e=this.__data__;if(Nr){var n=e[t];return n===zo?void 0:n}return jn.call(e,t)?e[t]:void 0}function qm(t){var e=this.__data__;return Nr?e[t]!==void 0:jn.call(e,t)}function zm(t,e){var n=this.__data__;return n[t]=Nr&&e===void 0?zo:e,this}fn.prototype.clear=jm;fn.prototype.delete=Bm;fn.prototype.get=$m;fn.prototype.has=qm;fn.prototype.set=zm;function Bn(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Hm(){this.__data__=[]}function Gm(t){var e=this.__data__,n=Qi(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Fm.call(e,n,1),!0}function Km(t){var e=this.__data__,n=Qi(e,t);return n<0?void 0:e[n][1]}function Wm(t){return Qi(this.__data__,t)>-1}function Xm(t,e){var n=this.__data__,r=Qi(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}Bn.prototype.clear=Hm;Bn.prototype.delete=Gm;Bn.prototype.get=Km;Bn.prototype.has=Wm;Bn.prototype.set=Xm;function $n(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ym(){this.__data__={hash:new fn,map:new(Vm||Bn),string:new fn}}function Qm(t){return Ji(this,t).delete(t)}function Jm(t){return Ji(this,t).get(t)}function Zm(t){return Ji(this,t).has(t)}function ey(t,e){return Ji(this,t).set(t,e),this}$n.prototype.clear=Ym;$n.prototype.delete=Qm;$n.prototype.get=Jm;$n.prototype.has=Zm;$n.prototype.set=ey;function Yi(t){var e=-1,n=t?t.length:0;for(this.__data__=new $n;++e<n;)this.add(t[e])}function ty(t){return this.__data__.set(t,zo),this}function ny(t){return this.__data__.has(t)}Yi.prototype.add=Yi.prototype.push=ty;Yi.prototype.has=ny;function ry(t,e){var n=Yo(t)||iu(t)?Cm(t.length,String):[],r=n.length,i=!!r;for(var s in t)(e||jn.call(t,s))&&!(i&&(s=="length"||gy(s,r)))&&n.push(s);return n}function Qi(t,e){for(var n=t.length;n--;)if(Ey(t[n][0],e))return n;return-1}function iy(t,e,n,r){var i=-1,s=Tm,o=!0,a=t.length,c=[],l=e.length;if(!a)return c;n&&(e=Xl(e,Rm(n))),r?(s=Im,o=!1):e.length>=hm&&(s=Nm,o=!1,e=new Yi(e));e:for(;++i<a;){var u=t[i],h=n?n(u):u;if(u=r||u!==0?u:0,o&&h===h){for(var f=l;f--;)if(e[f]===h)continue e;c.push(u)}else s(e,h,r)||c.push(u)}return c}function nu(t,e,n,r,i){var s=-1,o=t.length;for(n||(n=py),i||(i=[]);++s<o;){var a=t[s];e>0&&n(a)?e>1?nu(a,e-1,n,r,i):Go(i,a):r||(i[i.length]=a)}return i}function sy(t,e,n){var r=e(t);return Yo(t)?r:Go(r,n(t))}function oy(t){if(!Qo(t)||yy(t))return!1;var e=ou(t)||Dm(t)?Mm:vm;return e.test(by(t))}function ay(t){if(!Qo(t))return _y(t);var e=vy(t),n=[];for(var r in t)r=="constructor"&&(e||!jn.call(t,r))||n.push(r);return n}function cy(t,e){return t=Object(t),ly(t,e,function(n,r){return r in t})}function ly(t,e,n){for(var r=-1,i=e.length,s={};++r<i;){var o=e[r],a=t[o];n(a,o)&&(s[o]=a)}return s}function uy(t,e){return e=tu(e===void 0?t.length-1:e,0),function(){for(var n=arguments,r=-1,i=tu(n.length-e,0),s=Array(i);++r<i;)s[r]=n[e+r];r=-1;for(var o=Array(e+1);++r<e;)o[r]=n[r];return o[e]=s,Em(t,this,o)}}function hy(t){return sy(t,ky,dy)}function Ji(t,e){var n=t.__data__;return my(e)?n[typeof e=="string"?"string":"hash"]:n.map}function ru(t,e){var n=Om(t,e);return oy(n)?n:void 0}var fy=Xo?Yl(Xo,Object):cu,dy=Xo?function(t){for(var e=[];t;)Go(e,fy(t)),t=Um(t);return e}:cu;function py(t){return Yo(t)||iu(t)||!!(eu&&t&&t[eu])}function gy(t,e){return e=e==null?Wl:e,!!e&&(typeof t=="number"||_m.test(t))&&t>-1&&t%1==0&&t<e}function my(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function yy(t){return!!Ql&&Ql in t}function vy(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Xi;return t===n}function _y(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}function wy(t){if(typeof t=="string"||Sy(t))return t;var e=t+"";return e=="0"&&1/t==-fm?"-0":e}function by(t){if(t!=null){try{return Jl.call(t)}catch{}try{return t+""}catch{}}return""}function Ey(t,e){return t===e||t!==t&&e!==e}function iu(t){return Ty(t)&&jn.call(t,"callee")&&(!xm.call(t,"callee")||Wo.call(t)==dm)}var Yo=Array.isArray;function su(t){return t!=null&&Iy(t.length)&&!ou(t)}function Ty(t){return au(t)&&su(t)}function ou(t){var e=Qo(t)?Wo.call(t):"";return e==pm||e==gm}function Iy(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Wl}function Qo(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function au(t){return!!t&&typeof t=="object"}function Sy(t){return typeof t=="symbol"||au(t)&&Wo.call(t)==mm}function ky(t){return su(t)?ry(t,!0):ay(t)}var Ay=uy(function(t,e){return t==null?{}:(e=Xl(nu(e,1),wy),cy(t,iy(hy(t),e)))});function cu(){return[]}var Cy=Ay;function Ry(t){let e,n,r,i=[t[6]],s={};for(let o=0;o<i.length;o+=1)s=tt(s,i[o]);return{c(){e=oe("input"),this.h()},l(o){e=ce(o,"INPUT",{}),this.h()},h(){Tt(e,s),W(e,"border-danger",!t[5]&&t[0]),W(e,"border-success",t[5]&&t[0]&&t[3])},m(o,a){fe(o,e,a),e.autofocus&&e.focus(),xn(e,t[0]),n||(r=[K(e,"input",t[22]),K(e,"input",t[7]),K(e,"focus",t[17]),K(e,"blur",t[18]),K(e,"change",t[19])],n=!0)},p(o,a){Tt(e,s=Fn(i,[a&64&&o[6]])),a&1&&e.value!==o[0]&&xn(e,o[0]),W(e,"border-danger",!o[5]&&o[0]),W(e,"border-success",o[5]&&o[0]&&o[3])},d(o){o&&N(e),n=!1,lt(r)}}}function Ny(t){let e,n,r,i,s,o,a=[t[6]],c={};for(let l=0;l<a.length;l+=1)c=tt(c,a[l]);return{c(){e=oe("label"),n=nt(t[1]),r=Et(),i=oe("input"),this.h()},l(l){e=ce(l,"LABEL",{class:!0});var u=ie(e);n=mt(u,t[1]),r=It(u),i=ce(u,"INPUT",{}),u.forEach(N),this.h()},h(){Tt(i,c),W(i,"border-danger",!t[5]&&t[0]),W(i,"border-success",t[5]&&t[0]&&t[3]),q(e,"class","svelte-1g63nco")},m(l,u){fe(l,e,u),Z(e,n),Z(e,r),Z(e,i),i.autofocus&&i.focus(),xn(i,t[0]),s||(o=[K(i,"input",t[21]),K(i,"input",t[7]),K(i,"focus",t[14]),K(i,"blur",t[15]),K(i,"change",t[16])],s=!0)},p(l,u){u&2&&un(n,l[1]),Tt(i,c=Fn(a,[u&64&&l[6]])),u&1&&i.value!==l[0]&&xn(i,l[0]),W(i,"border-danger",!l[5]&&l[0]),W(i,"border-success",l[5]&&l[0]&&l[3])},d(l){l&&N(e),s=!1,lt(o)}}}function Oy(t){let e,n,r,i=[t[6]],s={};for(let o=0;o<i.length;o+=1)s=tt(s,i[o]);return{c(){e=oe("textarea"),this.h()},l(o){e=ce(o,"TEXTAREA",{}),ie(e).forEach(N),this.h()},h(){Tt(e,s),W(e,"no-resize",t[4])},m(o,a){fe(o,e,a),e.autofocus&&e.focus(),xn(e,t[0]),n||(r=[K(e,"input",t[20]),K(e,"input",t[7]),K(e,"focus",t[11]),K(e,"blur",t[12]),K(e,"change",t[13])],n=!0)},p(o,a){Tt(e,s=Fn(i,[a&64&&o[6]])),a&1&&xn(e,o[0]),W(e,"no-resize",o[4])},d(o){o&&N(e),n=!1,lt(r)}}}function Dy(t){let e;function n(s,o){return s[2]==="textarea"?Oy:s[1]?Ny:Ry}let r=n(t),i=r(t);return{c(){i.c(),e=Un()},l(s){i.l(s),e=Un()},m(s,o){i.m(s,o),fe(s,e,o)},p(s,[o]){r===(r=n(s))&&i?i.p(s,o):(i.d(1),i=r(s),i&&(i.c(),i.m(e.parentNode,e)))},i:bt,o:bt,d(s){i.d(s),s&&N(e)}}}function Py(t,e,n){const r=["label","value","block","type","valid","noResize"];let i=xi(e,r);var s;let{label:o=""}=e,{value:a=""}=e,{block:c=!1}=e,{type:l="text"}=e,{valid:u=null}=e,{noResize:h=!1}=e;const f=Hi();function d({target:P}){f("input",P.value)}let m=!0,y,g;function b(P){Ie.call(this,t,P)}function C(P){Ie.call(this,t,P)}function k(P){Ie.call(this,t,P)}function v(P){Ie.call(this,t,P)}function I(P){Ie.call(this,t,P)}function $(P){Ie.call(this,t,P)}function se(P){Ie.call(this,t,P)}function pe(P){Ie.call(this,t,P)}function Ee(P){Ie.call(this,t,P)}function Re(){a=this.value,n(0,a)}function $t(){a=this.value,n(0,a)}function ze(){a=this.value,n(0,a)}return t.$$set=P=>{n(25,e=tt(tt({},e),Ir(P))),n(24,i=xi(e,r)),"label"in P&&n(1,o=P.label),"value"in P&&n(0,a=P.value),"block"in P&&n(8,c=P.block),"type"in P&&n(2,l=P.type),"valid"in P&&n(3,u=P.valid),"noResize"in P&&n(4,h=P.noResize)},t.$$.update=()=>{t.$$.dirty&9&&u&&n(5,m=u(a)),n(10,g=`${n(9,s=i.class)!==null&&s!==void 0?s:""} ${qo("input",{block:c})}`);{const P=Cy(e,["block","value","valid","noResize"]);n(6,y=Object.assign(Object.assign({},P),{class:g}))}},e=Ir(e),[a,o,l,u,h,m,y,d,c,s,g,b,C,k,v,I,$,se,pe,Ee,Re,$t,ze]}class HS extends Gt{constructor(e){super();Ht(this,e,Py,Dy,Dt,{label:1,value:0,block:8,type:2,valid:3,noResize:4})}}function Ly(t){let e,n,r,i;const s=t[6].default,o=ft(s,t,t[5],null);let a=[t[4]],c={};for(let l=0;l<a.length;l+=1)c=tt(c,a[l]);return{c(){e=oe("select"),o&&o.c(),this.h()},l(l){e=ce(l,"SELECT",{});var u=ie(e);o&&o.l(u),u.forEach(N),this.h()},h(){Tt(e,c),t[0]===void 0&&Ar(()=>t[14].call(e))},m(l,u){fe(l,e,u),o&&o.m(e,null),(c.multiple?Bi:zt)(e,c.value),e.autofocus&&e.focus(),t[13](e),zt(e,t[0]),n=!0,r||(i=[K(e,"change",t[14]),K(e,"change",t[3]),K(e,"blur",t[9]),K(e,"focus",t[10])],r=!0)},p(l,u){o&&o.p&&(!n||u&32)&&pt(o,s,l,l[5],n?dt(s,l[5],u,null):gt(l[5]),null),Tt(e,c=Fn(a,[u&16&&l[4]])),u&16&&"value"in c&&(c.multiple?Bi:zt)(e,c.value),u&1&&zt(e,l[0])},i(l){n||(le(o,l),n=!0)},o(l){ge(o,l),n=!1},d(l){l&&N(e),o&&o.d(l),t[13](null),r=!1,lt(i)}}}function My(t){let e,n,r,i,s,o,a;const c=t[6].default,l=ft(c,t,t[5],null);let u=[t[4]],h={};for(let f=0;f<u.length;f+=1)h=tt(h,u[f]);return{c(){e=oe("label"),n=nt(t[1]),r=Et(),i=oe("select"),l&&l.c(),this.h()},l(f){e=ce(f,"LABEL",{});var d=ie(e);n=mt(d,t[1]),r=It(d),i=ce(d,"SELECT",{});var m=ie(i);l&&l.l(m),m.forEach(N),d.forEach(N),this.h()},h(){Tt(i,h),t[0]===void 0&&Ar(()=>t[12].call(i))},m(f,d){fe(f,e,d),Z(e,n),Z(e,r),Z(e,i),l&&l.m(i,null),(h.multiple?Bi:zt)(i,h.value),i.autofocus&&i.focus(),t[11](i),zt(i,t[0]),s=!0,o||(a=[K(i,"change",t[12]),K(i,"change",t[3]),K(i,"blur",t[7]),K(i,"focus",t[8])],o=!0)},p(f,d){(!s||d&2)&&un(n,f[1]),l&&l.p&&(!s||d&32)&&pt(l,c,f,f[5],s?dt(c,f[5],d,null):gt(f[5]),null),Tt(i,h=Fn(u,[d&16&&f[4]])),d&16&&"value"in h&&(h.multiple?Bi:zt)(i,h.value),d&1&&zt(i,f[0])},i(f){s||(le(l,f),s=!0)},o(f){ge(l,f),s=!1},d(f){f&&N(e),l&&l.d(f),t[11](null),o=!1,lt(a)}}}function Uy(t){let e,n,r,i;const s=[My,Ly],o=[];function a(c,l){return c[1]?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),r=Un()},l(c){n.l(c),r=Un()},m(c,l){o[e].m(c,l),fe(c,r,l),i=!0},p(c,[l]){let u=e;e=a(c),e===u?o[e].p(c,l):(Cr(),ge(o[u],1,1,()=>{o[u]=null}),Rr(),n=o[e],n?n.p(c,l):(n=o[e]=s[e](c),n.c()),le(n,1),n.m(r.parentNode,r))},i(c){i||(le(n),i=!0)},o(c){ge(n),i=!1},d(c){o[e].d(c),c&&N(r)}}}function xy(t,e,n){const r=["label","value"];let i=xi(e,r),{$$slots:s={},$$scope:o}=e,{label:a=""}=e,{value:c=""}=e,l;const u=Hi();function h({target:v}){u("change",v.value)}function f(v){Ie.call(this,t,v)}function d(v){Ie.call(this,t,v)}function m(v){Ie.call(this,t,v)}function y(v){Ie.call(this,t,v)}function g(v){Gi[v?"unshift":"push"](()=>{l=v,n(2,l)})}function b(){c=Fl(this),n(0,c)}function C(v){Gi[v?"unshift":"push"](()=>{l=v,n(2,l)})}function k(){c=Fl(this),n(0,c)}return t.$$set=v=>{e=tt(tt({},e),Ir(v)),n(4,i=xi(e,r)),"label"in v&&n(1,a=v.label),"value"in v&&n(0,c=v.value),"$$scope"in v&&n(5,o=v.$$scope)},t.$$.update=()=>{if(t.$$.dirty&5&&l&&c!==void 0){const v=l.querySelectorAll("option"),I=Array.from(v).find($=>$.value==c);I&&(I.selected=!0)}},[c,a,l,h,i,o,s,f,d,m,y,g,b,C,k]}class GS extends Gt{constructor(e){super();Ht(this,e,xy,Uy,Dt,{label:1,value:0})}}function Fy(t){let e,n,r,i,s,o,a,c;return{c(){e=oe("label"),n=oe("input"),i=Et(),s=oe("span"),o=nt(t[2]),this.h()},l(l){e=ce(l,"LABEL",{class:!0});var u=ie(e);n=ce(u,"INPUT",{type:!0,name:!0,class:!0}),i=It(u),s=ce(u,"SPAN",{class:!0});var h=ie(s);o=mt(h,t[2]),h.forEach(N),u.forEach(N),this.h()},h(){q(n,"type","checkbox"),n.value=t[3],q(n,"name",t[4]),n.disabled=t[5],n.checked=r=t[0].includes(t[3])||t[1],q(n,"class","svelte-1a71d85"),q(s,"class","svelte-1a71d85"),q(e,"class","paper-check")},m(l,u){fe(l,e,u),Z(e,n),Z(e,i),Z(e,s),Z(s,o),a||(c=[K(n,"focus",t[7]),K(n,"blur",t[8]),K(n,"change",t[6])],a=!0)},p(l,[u]){u&8&&(n.value=l[3]),u&16&&q(n,"name",l[4]),u&32&&(n.disabled=l[5]),u&11&&r!==(r=l[0].includes(l[3])||l[1])&&(n.checked=r),u&4&&un(o,l[2])},i:bt,o:bt,d(l){l&&N(e),a=!1,lt(c)}}}function Vy(t,e,n){let{label:r=""}=e,{value:i=""}=e,{name:s=""}=e,{group:o=[]}=e,{checked:a=!1}=e,{disabled:c=!1}=e;const l=Hi();function u({target:d}){const{value:m,checked:y}=d;n(1,a=y),y?n(0,o=[...o,m]):n(0,o=o.filter(g=>g!==m)),l("change",a)}function h(d){Ie.call(this,t,d)}function f(d){Ie.call(this,t,d)}return t.$$set=d=>{"label"in d&&n(2,r=d.label),"value"in d&&n(3,i=d.value),"name"in d&&n(4,s=d.name),"group"in d&&n(0,o=d.group),"checked"in d&&n(1,a=d.checked),"disabled"in d&&n(5,c=d.disabled)},[o,a,r,i,s,c,u,h,f]}class KS extends Gt{constructor(e){super();Ht(this,e,Vy,Fy,Dt,{label:2,value:3,name:4,group:0,checked:1,disabled:5})}}var jy=1/0,By=9007199254740991,$y="[object Arguments]",qy="[object Function]",zy="[object GeneratorFunction]",Hy="[object Symbol]",Gy=typeof Kt=="object"&&Kt&&Kt.Object===Object&&Kt,Ky=typeof self=="object"&&self&&self.Object===Object&&self,Wy=Gy||Ky||Function("return this")();function Xy(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Yy(t,e){for(var n=-1,r=t?t.length:0,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function Qy(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var Jo=Object.prototype,Jy=Jo.hasOwnProperty,Zo=Jo.toString,lu=Wy.Symbol,Zy=Jo.propertyIsEnumerable,uu=lu?lu.isConcatSpreadable:void 0,hu=Math.max;function fu(t,e,n,r,i){var s=-1,o=t.length;for(n||(n=rv),i||(i=[]);++s<o;){var a=t[s];e>0&&n(a)?e>1?fu(a,e-1,n,r,i):Qy(i,a):r||(i[i.length]=a)}return i}function ev(t,e){return t=Object(t),tv(t,e,function(n,r){return r in t})}function tv(t,e,n){for(var r=-1,i=e.length,s={};++r<i;){var o=e[r],a=t[o];n(a,o)&&(s[o]=a)}return s}function nv(t,e){return e=hu(e===void 0?t.length-1:e,0),function(){for(var n=arguments,r=-1,i=hu(n.length-e,0),s=Array(i);++r<i;)s[r]=n[e+r];r=-1;for(var o=Array(e+1);++r<e;)o[r]=n[r];return o[e]=s,Xy(t,this,o)}}function rv(t){return ov(t)||sv(t)||!!(uu&&t&&t[uu])}function iv(t){if(typeof t=="string"||fv(t))return t;var e=t+"";return e=="0"&&1/t==-jy?"-0":e}function sv(t){return cv(t)&&Jy.call(t,"callee")&&(!Zy.call(t,"callee")||Zo.call(t)==$y)}var ov=Array.isArray;function av(t){return t!=null&&uv(t.length)&&!lv(t)}function cv(t){return du(t)&&av(t)}function lv(t){var e=hv(t)?Zo.call(t):"";return e==qy||e==zy}function uv(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=By}function hv(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function du(t){return!!t&&typeof t=="object"}function fv(t){return typeof t=="symbol"||du(t)&&Zo.call(t)==Hy}nv(function(t,e){return t==null?{}:ev(t,Yy(fu(e,1),iv))});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),l!==64){const d=a<<4&240|l>>2;if(r.push(d),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},mv=function(t){try{return gv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function gu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vv(){return Se().indexOf("Electron/")>=0}function yu(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _v(){return Se().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="FirebaseError";class dn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=wv,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?bv(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dn(i,a,r)}}function bv(t,e){return t.replace(Ev,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ev=/\{\$([^}]+)}/g;function Tv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vu(s)&&vu(o)){if(!Zi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Iv(t,e){const n=new Sv(t,e);return n.subscribe.bind(n)}class Sv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ea),i.error===void 0&&(i.error=ea),i.complete===void 0&&(i.complete=ea);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ea(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rv(e))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gn){return this.instances.has(e)}getOptions(e=gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gn){return this.component?this.component.multipleInstances?e:gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cv(t){return t===gn?void 0:t}function Rv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Av(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Ov={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Dv=X.INFO,Pv={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Lv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Pv[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ta{constructor(e){this.name=e,this._logLevel=Dv,this._logHandler=Lv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ov[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Uv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Uv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const na="@firebase/app",_u="0.7.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new ta("@firebase/app"),xv="@firebase/app-compat",Fv="@firebase/analytics-compat",Vv="@firebase/analytics",jv="@firebase/app-check-compat",Bv="@firebase/app-check",$v="@firebase/auth",qv="@firebase/auth-compat",zv="@firebase/database",Hv="@firebase/database-compat",Gv="@firebase/functions",Kv="@firebase/functions-compat",Wv="@firebase/installations",Xv="@firebase/installations-compat",Yv="@firebase/messaging",Qv="@firebase/messaging-compat",Jv="@firebase/performance",Zv="@firebase/performance-compat",e_="@firebase/remote-config",t_="@firebase/remote-config-compat",n_="@firebase/storage",r_="@firebase/storage-compat",i_="@firebase/firestore",s_="@firebase/firestore-compat",o_="firebase",a_="9.4.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="[DEFAULT]",c_={[na]:"fire-core",[xv]:"fire-core-compat",[Vv]:"fire-analytics",[Fv]:"fire-analytics-compat",[Bv]:"fire-app-check",[jv]:"fire-app-check-compat",[$v]:"fire-auth",[qv]:"fire-auth-compat",[zv]:"fire-rtdb",[Hv]:"fire-rtdb-compat",[Gv]:"fire-fn",[Kv]:"fire-fn-compat",[Wv]:"fire-iid",[Xv]:"fire-iid-compat",[Yv]:"fire-fcm",[Qv]:"fire-fcm-compat",[Jv]:"fire-perf",[Zv]:"fire-perf-compat",[e_]:"fire-rc",[t_]:"fire-rc-compat",[n_]:"fire-gcs",[r_]:"fire-gcs-compat",[i_]:"fire-fst",[s_]:"fire-fst-compat","fire-js":"fire-js",[o_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Map,ia=new Map;function l_(t,e){try{t.container.addComponent(e)}catch(n){ra.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(ia.has(e))return ra.debug(`There were multiple attempts to register component ${e}.`),!1;ia.set(e,t);for(const n of Pr.values())l_(n,t);return!0}function es(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ts=new Or("app","Firebase",u_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=a_;function WS(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:wu,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ts.create("bad-app-name",{appName:String(r)});const i=Pr.get(r);if(i){if(Zi(t,i.options)&&Zi(n,i.config))return i;throw ts.create("duplicate-app",{appName:r})}const s=new Nv(r);for(const a of ia.values())s.addComponent(a);const o=new h_(t,n,s);return Pr.set(r,o),o}function sa(t=wu){const e=Pr.get(t);if(!e)throw ts.create("no-app",{appName:t});return e}function XS(){return Array.from(Pr.values())}function St(t,e,n){var r;let i=(r=c_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ra.warn(a.join(" "));return}qn(new pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t){qn(new pn("platform-logger",e=>new Mv(e),"PRIVATE")),St(na,_u,t),St(na,_u,"esm2017"),St("fire-js","")}f_("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function oa(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d_=bu,Eu=new Or("auth","Firebase",bu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new ta("@firebase/auth");function ns(t,...e){Tu.logLevel<=X.ERROR&&Tu.error(`Auth (${zn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,...e){throw aa(t,...e)}function At(t,...e){return aa(t,...e)}function Iu(t,e,n){const r=Object.assign(Object.assign({},d_()),{[e]:n});return new Or("auth","Firebase",r).create(e,{appName:t.name})}function p_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&kt(t,"argument-error"),Iu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function aa(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Eu.create(t,...e)}function x(t,e,...n){if(!t)throw aa(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ns(e),new Error(e)}function Lt(t,e){t||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Map;function Mt(t){Lt(t instanceof Function,"Expected a class definition");let e=Su.get(t);return e?(Lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Su.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t,e){const n=es(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zi(s,e!=null?e:{}))return i;kt(i,"already-initialized")}return n.initialize({options:e})}function m_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function y_(){return ku()==="http:"||ku()==="https:"}function ku(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(y_()||gu()||"connection"in navigator)?navigator.onLine:!0}function __(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lt(n>e,"Short delay should be less than long delay!"),this.isMobile=pu()||mu()}get(){return v_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t,e){Lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=new Lr(3e4,6e4);function E_(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rs(t,e,n,r,i={}){return Au(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Dr(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(ua.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),ua.fetch()(Cu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Au(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},w_),e);try{const i=new I_(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ha(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ha(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Iu(t,u,l);kt(t,u)}}catch(i){if(i instanceof dn)throw i;kt(t,"network-request-failed")}}async function T_(t,e,n,r,i={}){const s=await rs(t,e,n,r,i);return"mfaPendingCredential"in s&&kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Cu(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?la(t.config,i):`${t.config.apiScheme}://${i}`}class I_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"timeout")),b_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=At(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(t,e){return rs(t,"POST","/v1/accounts:delete",e)}async function k_(t,e){return rs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function A_(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=da(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mr(fa(i.auth_time)),issuedAtTime:Mr(fa(i.iat)),expirationTime:Mr(fa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fa(t){return Number(t)*1e3}function da(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ns("JWT malformed, contained fewer than 3 sections"),null;try{const i=mv(n);return i?JSON.parse(i):(ns("Failed to decode base64 JWT payload"),null)}catch(i){return ns("Caught error parsing JWT payload as JSON",i),null}}function C_(t){const e=da(t);return x(e,"internal-error"),x(typeof e.exp!="undefined","internal-error"),x(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dn&&R_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function R_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mr(this.lastLoginAt),this.creationTime=Mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ur(t,k_(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?P_(s.providerUserInfo):[],a=D_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ru(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function O_(t){const e=rt(t);await is(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function D_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function P_(t){return t.map(e=>{var{providerId:n}=e,r=oa(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(t,e){const n=await Au(t,{},()=>{const r=Dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Cu(t,i,"/v1/token",`key=${s}`);return ua.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken!="undefined","internal-error"),x(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):C_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await L_(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xr;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xr,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,e){x(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=oa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new N_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new Ru(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ur(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return A_(this,e)}reload(){return O_(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await is(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ur(this,S_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:v,isAnonymous:I,providerData:$,stsTokenManager:se}=n;x(k&&se,e,"internal-error");const pe=xr.fromJSON(this.name,se);x(typeof k=="string",e,"internal-error"),Wt(h,e.name),Wt(f,e.name),x(typeof v=="boolean",e,"internal-error"),x(typeof I=="boolean",e,"internal-error"),Wt(d,e.name),Wt(m,e.name),Wt(y,e.name),Wt(g,e.name),Wt(b,e.name),Wt(C,e.name);const Ee=new mn({uid:k,auth:e,email:f,emailVerified:v,displayName:h,isAnonymous:I,photoURL:m,phoneNumber:d,tenantId:y,stsTokenManager:pe,createdAt:b,lastLoginAt:C});return $&&Array.isArray($)&&(Ee.providerData=$.map(Re=>Object.assign({},Re))),g&&(Ee._redirectEventId=g),Ee}static async _fromIdTokenResponse(e,n,r=!1){const i=new xr;i.updateFromServerResponse(n);const s=new mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await is(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nu.type="NONE";const Ou=Nu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e,n){return`firebase:${t}:${e}:${n}`}class Hn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ss(this.userKey,i.apiKey,s),this.fullPersistenceKey=ss("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hn(Mt(Ou),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Mt(Ou);const o=ss(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=mn._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Hn(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Hn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xu(e))return"Blackberry";if(Fu(e))return"Webos";if(pa(e))return"Safari";if((e.includes("chrome/")||Lu(e))&&!e.includes("edge/"))return"Chrome";if(Uu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pu(t=Se()){return/firefox\//i.test(t)}function pa(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lu(t=Se()){return/crios\//i.test(t)}function Mu(t=Se()){return/iemobile/i.test(t)}function Uu(t=Se()){return/android/i.test(t)}function xu(t=Se()){return/blackberry/i.test(t)}function Fu(t=Se()){return/webos/i.test(t)}function os(t=Se()){return/iphone|ipad|ipod/i.test(t)}function M_(t=Se()){var e;return os(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function U_(){return yu()&&document.documentMode===10}function Vu(t=Se()){return os(t)||Uu(t)||Fu(t)||xu(t)||/windows phone/i.test(t)||Mu(t)}function x_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t,e=[]){let n;switch(t){case"Browser":n=Du(Se());break;case"Worker":n=`${Du(Se())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zn}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bu(this),this.idTokenSubscription=new Bu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var r,i;this._deleted||(this.persistenceManager=await Hn.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await is(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=__()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Hn.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ju(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ga(t){return rt(t)}class Bu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iv(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e){return T_(t,"POST","/v1/accounts:signInWithIdp",E_(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="http://localhost";class yn extends $u{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=oa(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gn(e,n)}buildRequest(){const e={requestUri:V_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Dr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends ma{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Fr{constructor(){super("facebook.com")}static credential(e){return yn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Fr{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return yn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Fr{constructor(){super("github.com")}static credential(e){return yn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Fr{constructor(){super("twitter.com")}static credential(e,n){return yn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mn._fromIdTokenResponse(e,r,i),o=qu(r);return new Kn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qu(r);return new Kn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends dn{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,as.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new as(e,n,r,i)}}function zu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?as._fromErrorAndOperation(t,s,e,r):s})}async function j_(t,e,n=!1){const r=await Ur(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ur(t,zu(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=da(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),Kn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(t,e,n=!1){const r="signIn",i=await zu(t,r,e),s=await Kn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}const cs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cs,"1"),this.storage.removeItem(cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(){const t=Se();return pa(t)||os(t)}const z_=1e3,H_=10;class Gu extends Hu{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=q_()&&x_(),this.fallbackToPolling=Vu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);U_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,H_):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},z_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gu.type="LOCAL";const G_=Gu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends Hu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ku.type="SESSION";const Wu=Ku;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ls(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await K_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ls.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=ya("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function X_(t){Ct().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(){return typeof Ct().WorkerGlobalScope!="undefined"&&typeof Ct().importScripts=="function"}async function Y_(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Q_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function J_(){return Xu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="firebaseLocalStorageDb",Z_=1,us="firebaseLocalStorage",Qu="fbase_key";class Vr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hs(t,e){return t.transaction([us],e?"readwrite":"readonly").objectStore(us)}function e0(){const t=indexedDB.deleteDatabase(Yu);return new Vr(t).toPromise()}function va(){const t=indexedDB.open(Yu,Z_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(us,{keyPath:Qu})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(us)?e(r):(r.close(),await e0(),e(await va()))})})}async function Ju(t,e,n){const r=hs(t,!0).put({[Qu]:e,value:n});return new Vr(r).toPromise()}async function t0(t,e){const n=hs(t,!1).get(e),r=await new Vr(n).toPromise();return r===void 0?null:r.value}function Zu(t,e){const n=hs(t,!0).delete(e);return new Vr(n).toPromise()}const n0=800,r0=3;class eh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await va(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>r0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ls._getInstance(J_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Y_(),!this.activeServiceWorker)return;this.sender=new W_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Q_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await va();return await Ju(e,cs,"1"),await Zu(e,cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ju(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>t0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hs(i,!1).getAll();return new Vr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),n0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eh.type="LOCAL";const i0=eh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function o0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=At("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",s0().appendChild(r)})}function a0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Lr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t,e){return e?Mt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends $u{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Gn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function c0(t){return $_(t.auth,new _a(t),t.bypassAuthState)}function l0(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),B_(n,new _a(t),t.bypassAuthState)}async function u0(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),j_(n,new _a(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return c0;case"linkViaPopup":case"linkViaRedirect":return u0;case"reauthViaPopup":case"reauthViaRedirect":return l0;default:kt(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=new Lr(2e3,1e4);async function YS(t,e,n){const r=ga(t);p_(t,e,ma);const i=th(r,n);return new vn(r,"signInViaPopup",e,i).executeNotNull()}class vn extends nh{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,h0.get())};e()}}vn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="pendingRedirect",wa=new Map;class d0 extends nh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=wa.get(this.auth._key());if(!e){try{const r=await p0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wa.set(this.auth._key(),e)}return this.bypassAuthState||wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function p0(t,e){const n=m0(e),r=g0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function g0(t){return Mt(t._redirectPersistence)}function m0(t){return ss(f0,t.config.apiKey,t.name)}async function y0(t,e,n=!1){const r=ga(t),i=th(r,e),o=await new d0(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=10*60*1e3;class _0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!w0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ih(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v0&&this.cachedEventUids.clear(),this.cachedEventUids.has(rh(e))}saveEventToCache(e){this.cachedEventUids.add(rh(e)),this.lastProcessedEventTime=Date.now()}}function rh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ih({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function w0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ih(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(t,e={}){return rs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T0=/^https?/;async function I0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await b0(t);for(const n of e)try{if(S0(n))return}catch{}kt(t,"unauthorized-domain")}function S0(t){const e=ca(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!T0.test(n))return!1;if(E0.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=new Lr(3e4,6e4);function sh(){const t=Ct().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function A0(t){return new Promise((e,n)=>{var r,i,s;function o(){sh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sh(),n(At(t,"network-request-failed"))},timeout:k0.get()})}if((i=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Ct().gapi)===null||s===void 0?void 0:s.load)o();else{const a=a0("iframefcb");return Ct()[a]=()=>{gapi.load?o():n(At(t,"network-request-failed"))},o0(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw fs=null,e})}let fs=null;function C0(t){return fs=fs||A0(t),fs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new Lr(5e3,15e3),N0="__/auth/iframe",O0="emulator/auth/iframe",D0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},P0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function L0(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?la(e,O0):`https://${t.config.authDomain}/${N0}`,r={apiKey:e.apiKey,appName:t.name,v:zn},i=P0.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Dr(r).slice(1)}`}async function M0(t){const e=await C0(t),n=Ct().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:L0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=Ct().setTimeout(()=>{s(o)},R0.get());function c(){Ct().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x0=500,F0=600,V0="_blank",j0="http://localhost";class oh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function B0(t,e,n,r=x0,i=F0){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},U0),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Se().toLowerCase();n&&(a=Lu(l)?V0:n),Pu(l)&&(e=e||j0,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,m])=>`${f}${d}=${m},`,"");if(M_(l)&&a!=="_self")return $0(e||"",a),new oh(null);const h=window.open(e||"",a,u);x(h,t,"popup-blocked");try{h.focus()}catch{}return new oh(h)}function $0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="__/auth/handler",z0="emulator/auth/handler";function ah(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zn,eventId:i};if(e instanceof ma){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Fr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${H0(t)}?${Dr(a).slice(1)}`}function H0({config:t}){return t.emulator?la(t,z0):`https://${t.authDomain}/${q0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="webStorageSupport";class G0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wu,this._completeRedirectFn=y0}async _openPopup(e,n,r,i){var s;Lt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=ah(e,n,r,ca(),i);return B0(e,o,ya())}async _openRedirect(e,n,r,i){return await this._originValidation(e),X_(ah(e,n,r,ca(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await M0(e),r=new _0(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ba,{type:ba},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ba];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=I0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vu()||pa()||os()}}const K0=G0;var ch="@firebase/auth",lh="0.19.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Y0(t){qn(new pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{x(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),x(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ju(t)},c=new F_(o,a);return m_(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qn(new pn("auth-internal",e=>{const n=ga(e.getProvider("auth").getImmediate());return(r=>new W0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(ch,lh,X0(t)),St(ch,lh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t=sa()){const e=es(t,"auth");return e.isInitialized()?e.getImmediate():g_(t,{popupRedirectResolver:K0,persistence:[i0,G_,Wu]})}Y0("Browser");var Q0="firebase",J0="9.4.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(Q0,J0,"app");var Z0=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},T,Ea=Ea||{},L=Z0||self;function ds(){}function Ta(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function jr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ew(t){return Object.prototype.hasOwnProperty.call(t,Ia)&&t[Ia]||(t[Ia]=++tw)}var Ia="closure_uid_"+(1e9*Math.random()>>>0),tw=0;function nw(t,e,n){return t.call.apply(t.bind,arguments)}function rw(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Pe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=nw:Pe=rw,Pe.apply(null,arguments)}function ps(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Zt(){this.s=this.s,this.o=this.o}var iw=0,sw={};Zt.prototype.s=!1;Zt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),iw!=0)){var t=ew(this);delete sw[t]}};Zt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},hh=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function ow(t){e:{var e=Qw;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function fh(t){return Array.prototype.concat.apply([],arguments)}function Sa(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function gs(t){return/^[\s\xa0]*$/.test(t)}var dh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function He(t,e){return t.indexOf(e)!=-1}function ka(t,e){return t<e?-1:t>e?1:0}var Ge;e:{var ph=L.navigator;if(ph){var gh=ph.userAgent;if(gh){Ge=gh;break e}}Ge=""}function Aa(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function mh(t){const e={};for(const n in t)e[n]=t[n];return e}var yh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vh(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<yh.length;s++)n=yh[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ca(t){return Ca[" "](t),t}Ca[" "]=ds;function aw(t){var e=uw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var cw=He(Ge,"Opera"),Wn=He(Ge,"Trident")||He(Ge,"MSIE"),_h=He(Ge,"Edge"),Ra=_h||Wn,wh=He(Ge,"Gecko")&&!(He(Ge.toLowerCase(),"webkit")&&!He(Ge,"Edge"))&&!(He(Ge,"Trident")||He(Ge,"MSIE"))&&!He(Ge,"Edge"),lw=He(Ge.toLowerCase(),"webkit")&&!He(Ge,"Edge");function bh(){var t=L.document;return t?t.documentMode:void 0}var ms;e:{var Na="",Oa=function(){var t=Ge;if(wh)return/rv:([^\);]+)(\)|;)/.exec(t);if(_h)return/Edge\/([\d\.]+)/.exec(t);if(Wn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(lw)return/WebKit\/(\S+)/.exec(t);if(cw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Oa&&(Na=Oa?Oa[1]:""),Wn){var Da=bh();if(Da!=null&&Da>parseFloat(Na)){ms=String(Da);break e}}ms=Na}var uw={};function hw(){return aw(function(){let t=0;const e=dh(String(ms)).split("."),n=dh("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=ka(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||ka(i[2].length==0,s[2].length==0)||ka(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Pa;if(L.document&&Wn){var Eh=bh();Pa=Eh||parseInt(ms,10)||void 0}else Pa=void 0;var fw=Pa,dw=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",ds,e),L.removeEventListener("test",ds,e)}catch{}return t}();function je(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};function Br(t,e){if(je.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wh){e:{try{Ca(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Br.Z.h.call(this)}}Le(Br,je);var pw={2:"touch",3:"pen",4:"mouse"};Br.prototype.h=function(){Br.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $r="closure_listenable_"+(1e6*Math.random()|0),gw=0;function mw(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++gw,this.ca=this.fa=!1}function ys(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function vs(t){this.src=t,this.g={},this.h=0}vs.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ma(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new mw(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function La(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=uh(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ys(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ma(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Ua="closure_lm_"+(1e6*Math.random()|0),xa={};function Th(t,e,n,r,i){if(r&&r.once)return Sh(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Th(t,e[s],n,r,i);return null}return n=Ba(n),t&&t[$r]?t.N(e,n,jr(r)?!!r.capture:!!r,i):Ih(t,e,n,!1,r,i)}function Ih(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=jr(i)?!!i.capture:!!i,a=Va(t);if(a||(t[Ua]=a=new vs(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=yw(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)dw||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ah(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yw(){function t(n){return e.call(t.src,t.listener,n)}var e=vw;return t}function Sh(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Sh(t,e[s],n,r,i);return null}return n=Ba(n),t&&t[$r]?t.O(e,n,jr(r)?!!r.capture:!!r,i):Ih(t,e,n,!0,r,i)}function kh(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)kh(t,e[s],n,r,i);else r=jr(r)?!!r.capture:!!r,n=Ba(n),t&&t[$r]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ma(s,n,r,i),-1<n&&(ys(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Va(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ma(e,n,r,i)),(n=-1<t?e[t]:null)&&Fa(n))}function Fa(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[$r])La(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ah(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Va(e))?(La(n,t),n.h==0&&(n.src=null,e[Ua]=null)):ys(t)}}}function Ah(t){return t in xa?xa[t]:xa[t]="on"+t}function vw(t,e){if(t.ca)t=!0;else{e=new Br(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Fa(t),t=n.call(r,e)}return t}function Va(t){return t=t[Ua],t instanceof vs?t:null}var ja="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ba(t){return typeof t=="function"?t:(t[ja]||(t[ja]=function(e){return t.handleEvent(e)}),t[ja])}function ke(){Zt.call(this),this.i=new vs(this),this.P=this,this.I=null}Le(ke,Zt);ke.prototype[$r]=!0;ke.prototype.removeEventListener=function(t,e,n,r){kh(this,t,e,n,r)};function Me(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new je(e,t);else if(e instanceof je)e.target=e.target||t;else{var i=e;e=new je(r,t),vh(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=_s(o,r,!0,e)&&i}if(o=e.g=t,i=_s(o,r,!0,e)&&i,i=_s(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=_s(o,r,!1,e)&&i}ke.prototype.M=function(){if(ke.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ys(n[r]);delete t.g[e],t.h--}}this.I=null};ke.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function _s(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&La(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var $a=L.JSON.stringify;function _w(){var t=Rh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ww{constructor(){this.h=this.g=null}add(e,n){const r=Ch.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ch=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new bw,t=>t.reset());class bw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ew(t){L.setTimeout(()=>{throw t},0)}function qa(t,e){za||Tw(),Ha||(za(),Ha=!0),Rh.add(t,e)}var za;function Tw(){var t=L.Promise.resolve(void 0);za=function(){t.then(Iw)}}var Ha=!1,Rh=new ww;function Iw(){for(var t;t=_w();){try{t.h.call(t.g)}catch(n){Ew(n)}var e=Ch;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ha=!1}function ws(t,e){ke.call(this),this.h=t||1,this.g=e||L,this.j=Pe(this.kb,this),this.l=Date.now()}Le(ws,ke);T=ws.prototype;T.da=!1;T.S=null;T.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Me(this,"tick"),this.da&&(Ga(this),this.start()))}};T.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ga(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}T.M=function(){ws.Z.M.call(this),Ga(this),delete this.g};function Ka(t,e,n){if(typeof t=="function")n&&(t=Pe(t,n));else if(t&&typeof t.handleEvent=="function")t=Pe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function Nh(t){t.g=Ka(()=>{t.g=null,t.i&&(t.i=!1,Nh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Sw extends Zt{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Nh(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qr(t){Zt.call(this),this.h=t,this.g={}}Le(qr,Zt);var Oh=[];function Dh(t,e,n,r){Array.isArray(n)||(n&&(Oh[0]=n.toString()),n=Oh);for(var i=0;i<n.length;i++){var s=Th(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ph(t){Aa(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fa(e)},t),t.g={}}qr.prototype.M=function(){qr.Z.M.call(this),Ph(this)};qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bs(){this.g=!0}bs.prototype.Aa=function(){this.g=!1};function kw(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Aw(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Xn(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Rw(t,n)+(r?" "+r:"")})}function Cw(t,e){t.info(function(){return"TIMEOUT: "+e})}bs.prototype.info=function(){};function Rw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return $a(n)}catch{return e}}var _n={},Lh=null;function Es(){return Lh=Lh||new ke}_n.Ma="serverreachability";function Mh(t){je.call(this,_n.Ma,t)}Le(Mh,je);function zr(t){const e=Es();Me(e,new Mh(e,t))}_n.STAT_EVENT="statevent";function Uh(t,e){je.call(this,_n.STAT_EVENT,t),this.stat=e}Le(Uh,je);function Ke(t){const e=Es();Me(e,new Uh(e,t))}_n.Na="timingevent";function xh(t,e){je.call(this,_n.Na,t),this.size=e}Le(xh,je);function Hr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var Ts={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Fh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Wa(){}Wa.prototype.h=null;function Vh(t){return t.h||(t.h=t.i())}function jh(){}var Gr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Xa(){je.call(this,"d")}Le(Xa,je);function Ya(){je.call(this,"c")}Le(Ya,je);var Qa;function Is(){}Le(Is,Wa);Is.prototype.g=function(){return new XMLHttpRequest};Is.prototype.i=function(){return{}};Qa=new Is;function Kr(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new qr(this),this.P=Nw,t=Ra?125:void 0,this.W=new ws(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Bh}function Bh(){this.i=null,this.g="",this.h=!1}var Nw=45e3,Ja={},Ss={};T=Kr.prototype;T.setTimeout=function(t){this.P=t};function Za(t,e,n){t.K=1,t.v=Ns(Ut(e)),t.s=n,t.U=!0,$h(t,null)}function $h(t,e){t.F=Date.now(),Wr(t),t.A=Ut(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Qh(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Bh,t.g=bf(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Sw(Pe(t.Ia,t,t.g),t.O)),Dh(t.V,t.g,"readystatechange",t.gb),e=t.H?mh(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),zr(1),kw(t.j,t.u,t.A,t.m,t.X,t.s)}T.gb=function(t){t=t.target;const e=this.L;e&&xt(t)==3?e.l():this.Ia(t)};T.Ia=function(t){try{if(t==this.g)e:{const u=xt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Ra||this.g&&(this.h.h||this.g.ga()||uf(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?zr(3):zr(2)),ks(this);var n=this.g.ba();this.N=n;t:if(qh(this)){var r=uf(this.g);t="";var i=r.length,s=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){wn(this),Xr(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Aw(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gs(a)){var l=a;break t}}l=null}if(n=l)Xn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ec(this,n);else{this.i=!1,this.o=3,Ke(12),wn(this),Xr(this);break e}}this.U?(zh(this,u,o),Ra&&this.i&&u==3&&(Dh(this.V,this.W,"tick",this.fb),this.W.start())):(Xn(this.j,this.m,o,null),ec(this,o)),u==4&&wn(this),this.i&&!this.I&&(u==4?yf(this.l,this):(this.i=!1,Wr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ke(12)):(this.o=0,Ke(13)),wn(this),Xr(this)}}}catch{}finally{}};function qh(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function zh(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=Ow(t,n),i==Ss){e==4&&(t.o=4,Ke(14),r=!1),Xn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ja){t.o=4,Ke(15),Xn(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Xn(t.j,t.m,i,null),ec(t,i);qh(t)&&i!=Ss&&i!=Ja&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ke(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hc(e),e.L=!0,Ke(11))):(Xn(t.j,t.m,n,"[Invalid Chunked Response]"),wn(t),Xr(t))}T.fb=function(){if(this.g){var t=xt(this.g),e=this.g.ga();this.C<e.length&&(ks(this),zh(this,t,e),this.i&&t!=4&&Wr(this))}};function Ow(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ss:(n=Number(e.substring(n,r)),isNaN(n)?Ja:(r+=1,r+n>e.length?Ss:(e=e.substr(r,n),t.C=r+n,e)))}T.cancel=function(){this.I=!0,wn(this)};function Wr(t){t.Y=Date.now()+t.P,Hh(t,t.P)}function Hh(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Hr(Pe(t.eb,t),e)}function ks(t){t.B&&(L.clearTimeout(t.B),t.B=null)}T.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Cw(this.j,this.A),this.K!=2&&(zr(3),Ke(17)),wn(this),this.o=2,Xr(this)):Hh(this,this.Y-t)};function Xr(t){t.l.G==0||t.I||yf(t.l,t)}function wn(t){ks(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ga(t.W),Ph(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ec(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||rc(n.i,t))){if(n.I=t.N,!t.J&&rc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Us(n),Ls(n);else break e;uc(n),Ke(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Hr(Pe(n.ab,n),6e3));if(1>=ef(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Tn(n,11)}else if((t.J||n.g==t)&&Us(n),!gs(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;!s.g&&(He(m,"spdy")||He(m,"quic")||He(m,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(ic(s,s.h),s.h=null))}if(r.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.sa=y,de(r.F,r.D,y))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=wf(r,r.H?r.la:null,r.W),o.J){tf(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(ks(a),Wr(a)),r.g=o}else gf(r);0<n.l.length&&Ms(n)}else l[0]!="stop"&&l[0]!="close"||Tn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Tn(n,7):cc(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}zr(4)}catch{}}function Dw(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ta(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ta(t)||typeof t=="string")hh(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ta(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Dw(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Yn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Yn)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}T=Yn.prototype;T.R=function(){nc(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};T.T=function(){return nc(this),this.g.concat()};function nc(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];bn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],bn(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}T.get=function(t,e){return bn(this.h,t)?this.h[t]:e};T.set=function(t,e){bn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};T.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function bn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Gh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Pw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function En(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof En){this.g=e!==void 0?e:t.g,As(this,t.j),this.s=t.s,Cs(this,t.i),Rs(this,t.m),this.l=t.l,e=t.h;var n=new Jr;n.i=e.i,e.g&&(n.g=new Yn(e.g),n.h=e.h),Kh(this,n),this.o=t.o}else t&&(n=String(t).match(Gh))?(this.g=!!e,As(this,n[1]||"",!0),this.s=Yr(n[2]||""),Cs(this,n[3]||"",!0),Rs(this,n[4]),this.l=Yr(n[5]||"",!0),Kh(this,n[6]||"",!0),this.o=Yr(n[7]||"")):(this.g=!!e,this.h=new Jr(null,this.g))}En.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qr(e,Wh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qr(e,Wh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Qr(n,n.charAt(0)=="/"?Fw:xw,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qr(n,jw)),t.join("")};function Ut(t){return new En(t)}function As(t,e,n){t.j=n?Yr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Cs(t,e,n){t.i=n?Yr(e,!0):e}function Rs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kh(t,e,n){e instanceof Jr?(t.h=e,Bw(t.h,t.g)):(n||(e=Qr(e,Vw)),t.h=new Jr(e,t.g))}function de(t,e,n){t.h.set(e,n)}function Ns(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Lw(t){return t instanceof En?Ut(t):new En(t,void 0)}function Mw(t,e,n,r){var i=new En(null,void 0);return t&&As(i,t),e&&Cs(i,e),n&&Rs(i,n),r&&(i.l=r),i}function Yr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Uw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Uw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wh=/[#\/\?@]/g,xw=/[#\?:]/g,Fw=/[#\?]/g,Vw=/[#\?@]/g,jw=/#/g;function Jr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function en(t){t.g||(t.g=new Yn,t.h=0,t.i&&Pw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}T=Jr.prototype;T.add=function(t,e){en(this),this.i=null,t=Qn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Xh(t,e){en(t),e=Qn(t,e),bn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,bn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&nc(t)))}function Yh(t,e){return en(t),e=Qn(t,e),bn(t.g.h,e)}T.forEach=function(t,e){en(this),this.g.forEach(function(n,r){hh(n,function(i){t.call(e,i,r,this)},this)},this)};T.T=function(){en(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};T.R=function(t){en(this);var e=[];if(typeof t=="string")Yh(this,t)&&(e=fh(e,this.g.get(Qn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=fh(e,t[n])}return e};T.set=function(t,e){return en(this),this.i=null,t=Qn(this,t),Yh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};T.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Qh(t,e,n){Xh(t,e),0<n.length&&(t.i=null,t.g.set(Qn(t,e),Sa(n)),t.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Qn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Bw(t,e){e&&!t.j&&(en(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Xh(this,r),Qh(this,i,n))},t)),t.j=e}var $w=class{constructor(t,e){this.h=t,this.g=e}};function Jh(t){this.l=t||qw,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ea&&L.g.Ea()&&L.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qw=10;function Zh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ef(t){return t.h?1:t.g?t.g.size:0}function rc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ic(t,e){t.g?t.g.add(e):t.h=e}function tf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Jh.prototype.cancel=function(){if(this.i=nf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function nf(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Sa(t.i)}function sc(){}sc.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};sc.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function zw(){this.g=new sc}function Hw(t,e,n){const r=n||"";try{tc(t,function(i,s){let o=i;jr(i)&&(o=$a(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Gw(t,e){const n=new bs;if(L.Image){const r=new Image;r.onload=ps(Os,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ps(Os,n,r,"TestLoadImage: error",!1,e),r.onabort=ps(Os,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ps(Os,n,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Os(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Zr(t){this.l=t.$b||null,this.j=t.ib||!1}Le(Zr,Wa);Zr.prototype.g=function(){return new Ds(this.l,this.j)};Zr.prototype.i=function(t){return function(){return t}}({});function Ds(t,e){ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=oc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(Ds,ke);var oc=0;T=Ds.prototype;T.open=function(t,e){if(this.readyState!=oc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ti(this)};T.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=oc};T.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof L.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rf(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function rf(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}T.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ei(this):ti(this),this.readyState==3&&rf(this)}};T.Ua=function(t){this.g&&(this.response=this.responseText=t,ei(this))};T.Ta=function(t){this.g&&(this.response=t,ei(this))};T.ha=function(){this.g&&ei(this)};function ei(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ti(t)}T.setRequestHeader=function(t,e){this.v.append(t,e)};T.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ti(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Kw=L.JSON.parse;function _e(t){ke.call(this),this.headers=new Yn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=sf,this.K=this.L=!1}Le(_e,ke);var sf="",Ww=/^https?$/i,Xw=["POST","PUT"];T=_e.prototype;T.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qa.g(),this.C=this.u?Vh(this.u):Vh(Qa),this.g.onreadystatechange=Pe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){of(this,s);return}t=n||"";const i=new Yn(this.headers);r&&tc(r,function(s,o){i.set(o,s)}),r=ow(i.T()),n=L.FormData&&t instanceof L.FormData,!(0<=uh(Xw,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{lf(this),0<this.B&&((this.K=Yw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.pa,this)):this.A=Ka(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){of(this,s)}};function Yw(t){return Wn&&hw()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Qw(t){return t.toLowerCase()=="content-type"}T.pa=function(){typeof Ea!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function of(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,af(t),Ps(t)}function af(t){t.D||(t.D=!0,Me(t,"complete"),Me(t,"error"))}T.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),Ps(this))};T.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ps(this,!0)),_e.Z.M.call(this)};T.Fa=function(){this.s||(this.F||this.v||this.l?cf(this):this.cb())};T.cb=function(){cf(this)};function cf(t){if(t.h&&typeof Ea!="undefined"&&(!t.C[1]||xt(t)!=4||t.ba()!=2)){if(t.v&&xt(t)==4)Ka(t.Fa,0,t);else if(Me(t,"readystatechange"),xt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Gh)[1]||null;if(!i&&L.self&&L.self.location){var s=L.self.location.protocol;i=s.substr(0,s.length-1)}r=!Ww.test(i?i.toLowerCase():"")}n=r}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var o=2<xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",af(t)}}finally{Ps(t)}}}}function Ps(t,e){if(t.g){lf(t);const n=t.g,r=t.C[0]?ds:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=r}catch{}}}function lf(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function xt(t){return t.g?t.g.readyState:0}T.ba=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}};T.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Kw(e)}};function uf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case sf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}T.Da=function(){return this.m};T.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jw(t){let e="";return Aa(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ac(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Jw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hf(t){this.za=0,this.l=[],this.h=new bs,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ni("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ni("baseRetryDelayMs",5e3,t),this.$a=ni("retryDelaySeedMs",1e4,t),this.Ya=ni("forwardChannelMaxRetries",2,t),this.ra=ni("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Jh(t&&t.concurrentRequestLimit),this.Ca=new zw,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}T=hf.prototype;T.ma=8;T.G=1;function cc(t){if(ff(t),t.G==3){var e=t.V++,n=Ut(t.F);de(n,"SID",t.J),de(n,"RID",e),de(n,"TYPE","terminate"),ri(t,n),e=new Kr(t,t.h,e,void 0),e.K=2,e.v=Ns(Ut(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=bf(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Wr(e)}_f(t)}T.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ls(t){t.g&&(hc(t),t.g.cancel(),t.g=null)}function ff(t){Ls(t),t.u&&(L.clearTimeout(t.u),t.u=null),Us(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function lc(t,e){t.l.push(new $w(t.Za++,e)),t.G==3&&Ms(t)}function Ms(t){Zh(t.i)||t.m||(t.m=!0,qa(t.Ha,t),t.C=0)}function Zw(t,e){return ef(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Hr(Pe(t.Ha,t,e),vf(t,t.C)),t.C++,!0)}T.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Kr(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=mh(s),vh(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=pf(this,i,e),n=Ut(this.F),de(n,"RID",t),de(n,"CVER",22),this.D&&de(n,"X-HTTP-Session-Id",this.D),ri(this,n),this.o&&s&&ac(n,this.o,s),ic(this.i,i),this.Ra&&de(n,"TYPE","init"),this.ja?(de(n,"$req",e),de(n,"SID","null"),i.$=!0,Za(i,n,null)):Za(i,n,e),this.G=2}}else this.G==3&&(t?df(this,t):this.l.length==0||Zh(this.i)||df(this))};function df(t,e){var n;e?n=e.m:n=t.V++;const r=Ut(t.F);de(r,"SID",t.J),de(r,"RID",n),de(r,"AID",t.U),ri(t,r),t.o&&t.s&&ac(r,t.o,t.s),n=new Kr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=pf(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ic(t.i,n),Za(n,r,e)}function ri(t,e){t.j&&tc({},function(n,r){de(e,r,n)})}function pf(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Pe(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{Hw(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function gf(t){t.g||t.u||(t.Y=1,qa(t.Ga,t),t.A=0)}function uc(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Hr(Pe(t.Ga,t),vf(t,t.A)),t.A++,!0)}T.Ga=function(){if(this.u=null,mf(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Hr(Pe(this.bb,this),t)}};T.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ke(10),Ls(this),mf(this))};function hc(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function mf(t){t.g=new Kr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Ut(t.oa);de(e,"RID","rpc"),de(e,"SID",t.J),de(e,"CI",t.N?"0":"1"),de(e,"AID",t.U),ri(t,e),de(e,"TYPE","xmlhttp"),t.o&&t.s&&ac(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ns(Ut(e)),n.s=null,n.U=!0,$h(n,t)}T.ab=function(){this.v!=null&&(this.v=null,Ls(this),uc(this),Ke(19))};function Us(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function yf(t,e){var n=null;if(t.g==e){Us(t),hc(t),t.g=null;var r=2}else if(rc(t.i,e))n=e.D,tf(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Es(),Me(r,new xh(r,n,e,i)),Ms(t)}else gf(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&Zw(t,e)||r==2&&uc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Tn(t,5);break;case 4:Tn(t,10);break;case 3:Tn(t,6);break;default:Tn(t,2)}}}function vf(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Tn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Pe(t.jb,t);n||(n=new En("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||As(n,"https"),Ns(n)),Gw(n.toString(),r)}else Ke(2);t.G=0,t.j&&t.j.va(e),_f(t),ff(t)}T.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ke(2)):(this.h.info("Failed to ping google.com"),Ke(1))};function _f(t){t.G=0,t.I=-1,t.j&&((nf(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Sa(t.l),t.l.length=0),t.j.ua())}function wf(t,e,n){let r=Lw(n);if(r.i!="")e&&Cs(r,e+"."+r.i),Rs(r,r.m);else{const i=L.location;r=Mw(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Aa(t.aa,function(i,s){de(r,s,i)}),e=t.D,n=t.sa,e&&n&&de(r,e,n),de(r,"VER",t.ma),ri(t,r),r}function bf(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new _e(new Zr({ib:!0})):new _e(t.qa),e.L=t.H,e}function Ef(){}T=Ef.prototype;T.xa=function(){};T.wa=function(){};T.va=function(){};T.ua=function(){};T.Oa=function(){};function xs(){if(Wn&&!(10<=Number(fw)))throw Error("Environmental error: no available transport.")}xs.prototype.g=function(t,e){return new it(t,e)};function it(t,e){ke.call(this),this.g=new hf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!gs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!gs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Jn(this)}Le(it,ke);it.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),qa(Pe(t.hb,t,e))),Ke(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=wf(t,null,t.W),Ms(t)};it.prototype.close=function(){cc(this.g)};it.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,lc(this.g,e)}else this.v?(e={},e.__data__=$a(t),lc(this.g,e)):lc(this.g,t)};it.prototype.M=function(){this.g.j=null,delete this.j,cc(this.g),delete this.g,it.Z.M.call(this)};function Tf(t){Xa.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(Tf,Xa);function If(){Ya.call(this),this.status=1}Le(If,Ya);function Jn(t){this.g=t}Le(Jn,Ef);Jn.prototype.xa=function(){Me(this.g,"a")};Jn.prototype.wa=function(t){Me(this.g,new Tf(t))};Jn.prototype.va=function(t){Me(this.g,new If(t))};Jn.prototype.ua=function(){Me(this.g,"b")};xs.prototype.createWebChannel=xs.prototype.g;it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;Ts.NO_ERROR=0;Ts.TIMEOUT=8;Ts.HTTP_ERROR=6;Fh.COMPLETE="complete";jh.EventType=Gr;Gr.OPEN="a";Gr.CLOSE="b";Gr.ERROR="c";Gr.MESSAGE="d";ke.prototype.listen=ke.prototype.N;_e.prototype.listenOnce=_e.prototype.O;_e.prototype.getLastError=_e.prototype.La;_e.prototype.getLastErrorCode=_e.prototype.Da;_e.prototype.getStatus=_e.prototype.ba;_e.prototype.getResponseJson=_e.prototype.Qa;_e.prototype.getResponseText=_e.prototype.ga;_e.prototype.send=_e.prototype.ea;var eb=function(){return new xs},tb=function(){return Es()},fc=Ts,nb=Fh,rb=_n,Sf={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ib=Zr,Fs=jh,sb=_e;const kf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn="9.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new ta("@firebase/firestore");function Af(){return In.logLevel}function O(t,...e){if(In.logLevel<=X.DEBUG){const n=e.map(dc);In.debug(`Firestore (${Zn}): ${t}`,...n)}}function tn(t,...e){if(In.logLevel<=X.ERROR){const n=e.map(dc);In.error(`Firestore (${Zn}): ${t}`,...n)}}function Cf(t,...e){if(In.logLevel<=X.WARN){const n=e.map(dc);In.warn(`Firestore (${Zn}): ${t}`,...n)}}function dc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${Zn}) INTERNAL ASSERTION FAILED: `+t;throw tn(e),new Error(e)}function ue(t,e){t||F()}function V(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class ab{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class cb{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new nn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{O("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new ob(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Qe(e)}}class lb{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class ub{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new lb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pc.T=-1;class Rf{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=hb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function er(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new st(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Of(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ii?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends ii{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const fb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends ii{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return fb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.fields=e,e.sort(Je.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return er(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Be(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Be(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const db=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(t){if(ue(!!t),typeof t=="string"){let e=0;const n=db.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function nr(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pf(t){const e=t.mapValue.fields.__previous_value__;return Df(e)?Pf(e):e}function si(t){const e=rn(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){return t==null}function Vs(t){return t===0&&1/t==-1/0}function pb(t){return typeof t=="number"&&Number.isInteger(t)&&!Vs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(me.fromString(e))}static fromName(e){return new M(me.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new me(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Df(t)?4:10:F()}function Rt(t,e){const n=Sn(t);if(n!==Sn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return si(t).isEqual(si(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=rn(r.timestampValue),o=rn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return nr(r.bytesValue).isEqual(nr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return we(r.geoPointValue.latitude)===we(i.geoPointValue.latitude)&&we(r.geoPointValue.longitude)===we(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return we(r.integerValue)===we(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=we(r.doubleValue),o=we(i.doubleValue);return s===o?Vs(s)===Vs(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return er(t.arrayValue.values||[],e.arrayValue.values||[],Rt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Nf(s)!==Nf(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Rt(s[a],o[a])))return!1;return!0}(t,e);default:return F()}}function oi(t,e){return(t.values||[]).find(n=>Rt(n,e))!==void 0}function ir(t,e){const n=Sn(t),r=Sn(e);if(n!==r)return ne(n,r);switch(n){case 0:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=we(i.integerValue||i.doubleValue),a=we(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Lf(t.timestampValue,e.timestampValue);case 4:return Lf(si(t),si(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,s){const o=nr(i),a=nr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ne(o[c],a[c]);if(l!==0)return l}return ne(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ne(we(i.latitude),we(s.latitude));return o!==0?o:ne(we(i.longitude),we(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ir(o[c],a[c]);if(l)return l}return ne(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ne(a[u],l[u]);if(h!==0)return h;const f=ir(o[a[u]],c[l[u]]);if(f!==0)return f}return ne(a.length,l.length)}(t.mapValue,e.mapValue);default:throw F()}}function Lf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=rn(t),r=rn(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function mc(t){return yc(t)}function yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=rn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?nr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=yc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${yc(r.fields[a])}`;return s+"}"}(t.mapValue):F();var e,n}function vc(t){return!!t&&"integerValue"in t}function _c(t){return!!t&&"arrayValue"in t}function Mf(t){return!!t&&"nullValue"in t}function Uf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function js(t){return!!t&&"mapValue"in t}function ai(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ai(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ai(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!js(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(n)}setAll(e){let n=Je.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ai(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());js(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];js(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){tr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(ai(this.value))}}function xf(t){const e=[];return tr(t.fields,(n,r)=>{const i=new Je([n]);if(js(r)){const s=xf(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new gc(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new $e(e,0,ee.min(),yt.empty(),0)}static newFoundDocument(e,n,r){return new $e(e,1,n,r,0)}static newNoDocument(e,n){return new $e(e,2,n,yt.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,yt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new $e(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function Ff(t,e=null,n=[],r=[],i=null,s=null,o=null){return new gb(t,e,n,r,i,s,o)}function wc(t){const e=V(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yb(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),rr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Bs(e.startAt)),e.endAt&&(n+="|ub:",n+=Bs(e.endAt)),e.A=n}return e.A}function mb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${mc(r.value)}`;var r}).join(", ")}]`),rr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Bs(t.startAt)),t.endAt&&(e+=", endAt: "+Bs(t.endAt)),`Target(${e})`}function bc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Sb(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Rt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bf(t.startAt,e.startAt)&&Bf(t.endAt,e.endAt)}function Ec(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ze extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new vb(e,n,r):n==="array-contains"?new bb(e,r):n==="in"?new Eb(e,r):n==="not-in"?new Tb(e,r):n==="array-contains-any"?new Ib(e,r):new Ze(e,n,r)}static R(e,n,r){return n==="in"?new _b(e,r):new wb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(ir(n,this.value)):n!==null&&Sn(this.value)===Sn(n)&&this.P(ir(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function yb(t){return t.field.canonicalString()+t.op.toString()+mc(t.value)}class vb extends Ze{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.P(n)}}class _b extends Ze{constructor(e,n){super(e,"in",n),this.keys=Vf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wb extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=Vf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class bb extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _c(n)&&oi(n.arrayValue,this.value)}}class Eb extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oi(this.value.arrayValue,n)}}class Tb extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!oi(this.value.arrayValue,n)}}class Ib extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_c(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>oi(this.value.arrayValue,r))}}class Tc{constructor(e,n){this.position=e,this.before=n}}function Bs(t){return`${t.before?"b":"a"}:${t.position.map(e=>mc(e)).join(",")}`}class ci{constructor(e,n="asc"){this.field=e,this.dir=n}}function Sb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function jf(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=ir(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function Bf(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function kb(t,e,n,r,i,s,o,a){return new $s(t,e,n,r,i,s,o,a)}function qs(t){return new $s(t)}function zs(t){return!rr(t.limit)&&t.limitType==="F"}function Hs(t){return!rr(t.limit)&&t.limitType==="L"}function Ab(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Cb(t){for(const e of t.filters)if(e.v())return e.field;return null}function Rb(t){return t.collectionGroup!==null}function li(t){const e=V(t);if(e.V===null){e.V=[];const n=Cb(e),r=Ab(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new ci(n)),e.V.push(new ci(Je.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new ci(Je.keyField(),s))}}}return e.V}function kn(t){const e=V(t);if(!e.S)if(e.limitType==="F")e.S=Ff(e.path,e.collectionGroup,li(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of li(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ci(s.field,o))}const r=e.endAt?new Tc(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Tc(e.startAt.position,!e.startAt.before):null;e.S=Ff(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.S}function Nb(t,e,n){return new $s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gs(t,e){return bc(kn(t),kn(e))&&t.limitType===e.limitType}function $f(t){return`${wc(kn(t))}|lt:${t.limitType}`}function Ic(t){return`Query(target=${mb(kn(t))}; limitType=${t.limitType})`}function Ks(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!jf(n.startAt,li(n),r)||n.endAt&&jf(n.endAt,li(n),r))}(t,e)}function qf(t){return(e,n)=>{let r=!1;for(const i of li(t)){const s=Ob(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ob(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?ir(a,c):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vs(e)?"-0":e}}function Hf(t){return{integerValue:""+t}}function Db(t,e){return pb(e)?Hf(e):zf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this._=void 0}}function Pb(t,e,n){return t instanceof Xs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ui?Kf(t,e):t instanceof hi?Wf(t,e):function(r,i){const s=Gf(r,i),o=Xf(s)+Xf(r.C);return vc(s)&&vc(r.C)?Hf(o):zf(r.N,o)}(t,e)}function Lb(t,e,n){return t instanceof ui?Kf(t,e):t instanceof hi?Wf(t,e):n}function Gf(t,e){return t instanceof Ys?vc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Xs extends Ws{}class ui extends Ws{constructor(e){super(),this.elements=e}}function Kf(t,e){const n=Yf(e);for(const r of t.elements)n.some(i=>Rt(i,r))||n.push(r);return{arrayValue:{values:n}}}class hi extends Ws{constructor(e){super(),this.elements=e}}function Wf(t,e){let n=Yf(e);for(const r of t.elements)n=n.filter(i=>!Rt(i,r));return{arrayValue:{values:n}}}class Ys extends Ws{constructor(e,n){super(),this.N=e,this.C=n}}function Xf(t){return we(t.integerValue||t.doubleValue)}function Yf(t){return _c(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Mb(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ui&&r instanceof ui||n instanceof hi&&r instanceof hi?er(n.elements,r.elements,Rt):n instanceof Ys&&r instanceof Ys?Rt(n.C,r.C):n instanceof Xs&&r instanceof Xs}(t.transform,e.transform)}class Ub{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Js{}function xb(t,e,n){t instanceof Zs?function(r,i,s){const o=r.value.clone(),a=ed(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof sr?function(r,i,s){if(!Qs(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=ed(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Zf(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Sc(t,e,n){t instanceof Zs?function(r,i,s){if(!Qs(r.precondition,i))return;const o=r.value.clone(),a=td(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(Jf(i),o).setHasLocalMutations()}(t,e,n):t instanceof sr?function(r,i,s){if(!Qs(r.precondition,i))return;const o=td(r.fieldTransforms,s,i),a=i.data;a.setAll(Zf(r)),a.setAll(o),i.convertToFoundDocument(Jf(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Qs(r.precondition,i)&&i.convertToNoDocument(ee.min())}(t,e)}function Fb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Gf(r.transform,i||null);s!=null&&(n==null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function Qf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&er(n,r,(i,s)=>Mb(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Jf(t){return t.isFoundDocument()?t.version:ee.min()}class Zs extends Js{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class sr extends Js{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Zf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ed(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Lb(o,a,n[i]))}return r}function td(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Pb(s,o,e))}return r}class nd extends Js{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Vb extends Js{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,z;function Bb(t){switch(t){default:return F();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function rd(t){if(t===void 0)return tn("GRPC error has no .code"),_.UNKNOWN;switch(t){case be.OK:return _.OK;case be.CANCELLED:return _.CANCELLED;case be.UNKNOWN:return _.UNKNOWN;case be.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case be.INTERNAL:return _.INTERNAL;case be.UNAVAILABLE:return _.UNAVAILABLE;case be.UNAUTHENTICATED:return _.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case be.NOT_FOUND:return _.NOT_FOUND;case be.ALREADY_EXISTS:return _.ALREADY_EXISTS;case be.PERMISSION_DENIED:return _.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case be.ABORTED:return _.ABORTED;case be.OUT_OF_RANGE:return _.OUT_OF_RANGE;case be.UNIMPLEMENTED:return _.UNIMPLEMENTED;case be.DATA_LOSS:return _.DATA_LOSS;default:return F()}}(z=be||(be={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eo(this.root,e,this.comparator,!0)}}class eo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ue.RED,this.left=i!=null?i:Ue.EMPTY,this.right=s!=null?s:Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new id(this.data.getIterator())}getIteratorFrom(e){return new id(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xe(this.comparator);return n.data=e,n}}class id{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=new qe(M.comparator);function An(){return $b}const qb=new qe(M.comparator);function kc(){return qb}const zb=new qe(M.comparator);function Hb(){return zb}const Gb=new xe(M.comparator);function he(...t){let e=Gb;for(const n of t)e=e.add(n);return e}const Kb=new xe(ne);function sd(){return Kb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,fi.createSynthesizedTargetChangeForCurrentChange(e,n)),new to(ee.min(),r,sd(),An(),he())}}class fi{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new fi(Be.EMPTY_BYTE_STRING,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,r,i){this.k=e,this.removedTargetIds=n,this.key=r,this.$=i}}class od{constructor(e,n){this.targetId=e,this.O=n}}class ad{constructor(e,n,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class cd{constructor(){this.F=0,this.M=ud(),this.L=Be.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=he(),n=he(),r=he();return this.M.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new fi(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=ud()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Wb{constructor(e){this.tt=e,this.et=new Map,this.nt=An(),this.st=ld(),this.it=new xe(ne)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,i)=>{this.ht(i)&&n(i)})}ft(e){const n=e.targetId,r=e.O.count,i=this.dt(n);if(i){const s=i.target;if(Ec(s))if(r===0){const o=new M(s.path);this.ct(n,o,$e.newNoDocument(o,ee.min()))}else ue(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Ec(a.target)){const c=new M(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.ct(o,c,$e.newNoDocument(c,e))}s.K&&(n.set(o,s.W()),s.G())}});let r=he();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.dt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new to(e,n,this.it,this.nt,r);return this.nt=An(),this.st=ld(),this.it=new xe(ne),i}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,r){if(!this.ht(e))return;const i=this.ut(e);this.gt(e,n)?i.H(n,1):i.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new cd,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new xe(ne),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new cd),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function ld(){return new qe(M.comparator)}function ud(){return new qe(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Yb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Qb{constructor(e,n){this.databaseId=e,this.D=n}}function ro(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hd(t,e){return t.D?e.toBase64():e.toUint8Array()}function Jb(t,e){return ro(t,e.toTimestamp())}function Ft(t){return ue(!!t),ee.fromTimestamp(function(e){const n=rn(e);return new st(n.seconds,n.nanos)}(t))}function Ac(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function fd(t){const e=me.fromString(t);return ue(vd(e)),e}function Cc(t,e){return Ac(t.databaseId,e.path)}function Rc(t,e){const n=fd(e);if(n.get(1)!==t.databaseId.projectId)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(dd(n))}function Nc(t,e){return Ac(t.databaseId,e)}function Zb(t){const e=fd(t);return e.length===4?me.emptyPath():dd(e)}function Oc(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dd(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pd(t,e,n){return{name:Cc(t,e),fields:n.value.mapValue.fields}}function e1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.D?(ue(l===void 0||typeof l=="string"),Be.fromBase64String(l||"")):(ue(l===void 0||l instanceof Uint8Array),Be.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?_.UNKNOWN:rd(c.code);return new D(l,c.message||"")}(o);n=new ad(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rc(t,r.document.name),s=Ft(r.document.updateTime),o=new yt({mapValue:{fields:r.document.fields}}),a=$e.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new no(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rc(t,r.document),s=r.readTime?Ft(r.readTime):ee.min(),o=$e.newNoDocument(i,s),a=r.removedTargetIds||[];n=new no([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rc(t,r.document),s=r.removedTargetIds||[];n=new no([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new jb(i),o=r.targetId;n=new od(o,s)}}return n}function t1(t,e){let n;if(e instanceof Zs)n={update:pd(t,e.key,e.value)};else if(e instanceof nd)n={delete:Cc(t,e.key)};else if(e instanceof sr)n={update:pd(t,e.key,e.data),updateMask:h1(e.fieldMask)};else{if(!(e instanceof Vb))return F();n={verify:Cc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Xs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ui)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof hi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ys)return{fieldPath:s.field.canonicalString(),increment:o.C};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Jb(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(t,e.precondition)),n}function n1(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ft(r.updateTime):Ft(i);return s.isEqual(ee.min())&&(s=Ft(i)),new Ub(s,r.transformResults||[])}(n,e))):[]}function r1(t,e){return{documents:[Nc(t,e.path)]}}function i1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Nc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(Uf(u.value))return{unaryFilter:{field:or(u.field),op:"IS_NAN"}};if(Mf(u.value))return{unaryFilter:{field:or(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Uf(u.value))return{unaryFilter:{field:or(u.field),op:"IS_NOT_NAN"}};if(Mf(u.value))return{unaryFilter:{field:or(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:or(u.field),op:c1(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:or(l.field),direction:a1(l.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,c){return a.D||rr(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=md(e.startAt)),e.endAt&&(n.structuredQuery.endAt=md(e.endAt)),n}function s1(t){let e=Zb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=gd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ci(ar(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,rr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=yd(n.startAt));let l=null;return n.endAt&&(l=yd(n.endAt)),kb(e,i,o,s,a,"F",c,l)}function o1(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function gd(t){return t?t.unaryFilter!==void 0?[u1(t)]:t.fieldFilter!==void 0?[l1(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>gd(e)).reduce((e,n)=>e.concat(n)):F():[]}function md(t){return{before:t.before,values:t.position}}function yd(t){const e=!!t.before,n=t.values||[];return new Tc(n,e)}function a1(t){return Xb[t]}function c1(t){return Yb[t]}function or(t){return{fieldPath:t.canonicalString()}}function ar(t){return Je.fromServerFormat(t.fieldPath)}function l1(t){return Ze.create(ar(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}function u1(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ar(t.unaryFilter.field);return Ze.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ar(t.unaryFilter.field);return Ze.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ar(t.unaryFilter.field);return Ze.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ar(t.unaryFilter.field);return Ze.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}function h1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vd(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const f1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class d1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function di(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&xb(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Sc(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Sc(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(ee.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&er(this.mutations,e.mutations,(n,r)=>Qf(n,r))&&er(this.baseMutations,e.baseMutations,(n,r)=>Qf(n,r))}}class Dc{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=Hb();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Dc(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,r,i,s=ee.min(),o=ee.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.Wt=e}}function m1(t){const e=s1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nb(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(){this.Gt=new v1}addToCollectionParentIndex(e,n){return this.Gt.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Gt.getEntries(n))}}class v1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new xe(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new xe(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new cr(0)}static ie(){return new cr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==f1)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){tr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Of(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(){this.changes=new gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:ee.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:$e.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}bn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Vn(e,n.path):Rb(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new M(n)).next(r=>{let i=kc();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Sn(e,n,r){const i=n.collectionGroup;let s=kc();return this.Ht.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const c=function(l,u){return new $s(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Dn(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}Dn(e,n,r){let i,s;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,i).next(a=>{i=a;for(const c of s)for(const l of c.mutations){const u=l.key;let h=i.get(u);h==null&&(h=$e.newInvalidDocument(u),i=i.insert(u,h)),Sc(l,h,c.localWriteTime),h.isFoundDocument()||(i=i.remove(u))}}))).next(()=>(i.forEach((o,a)=>{Ks(n,a)||(i=i.remove(o))}),i))}Cn(e,n,r){let i=he();for(const o of n)for(const a of o.mutations)a instanceof sr&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.He.getEntries(e,i).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(s=s.insert(a,c))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=i}static kn(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Pc(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(ee.min())?this.Fn(e,n):this.On.Pn(e,i).next(s=>{const o=this.Mn(n,s);return(zs(n)||Hs(n))&&this.Ln(n.limitType,o,i,r)?this.Fn(e,n):(Af()<=X.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ic(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let r=new xe(qf(e));return n.forEach((i,s)=>{Ks(e,s)&&(r=r.add(s))}),r}Ln(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return Af()<=X.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Ic(n)),this.On.getDocumentsMatchingQuery(e,n,ee.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n,r,i){this.persistence=e,this.Bn=n,this.N=i,this.Un=new qe(ne),this.qn=new gi(s=>wc(s),bc),this.Kn=ee.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new _d(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function E1(t,e,n,r){return new b1(t,e,n,r)}async function wd(t,e){const n=V(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),i=new _d(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=he();for(const f of a){l.push(f.batchId);for(const d of f.mutations)h=h.add(d.key)}for(const f of c){u.push(f.batchId);for(const d of f.mutations)h=h.add(d.key)}return i.Pn(o,h).next(f=>({Wn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function T1(t,e){const n=V(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=E.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(m=>{const y=c.docVersions.get(d);ue(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&l.addEntry(m,c.commitVersion))})}),f.next(()=>o.In.removeMutationBatch(a,u))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,i))})}function bd(t){const e=V(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function I1(t,e){const n=V(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const a=[];e.targetChanges.forEach((l,u)=>{const h=i.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(s,l.removedDocuments,u).next(()=>n.ze.addMatchingKeys(s,l.addedDocuments,u)));const f=l.resumeToken;if(f.approximateByteSize()>0){const d=h.withResumeToken(f,r).withSequenceNumber(s.currentSequenceNumber);i=i.insert(u,d),function(m,y,g){return ue(y.resumeToken.approximateByteSize()>0),m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,d,l)&&a.push(n.ze.updateTargetData(s,d))}});let c=An();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(S1(s,o,e.documentUpdates,r,void 0).next(l=>{c=l})),!r.isEqual(ee.min())){const l=n.ze.getLastRemoteSnapshotVersion(s).next(u=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,c)).next(()=>c)}).then(s=>(n.Un=i,s))}function S1(t,e,n,r,i){let s=he();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=An();return n.forEach((c,l)=>{const u=o.get(c),h=(i==null?void 0:i.get(c))||r;l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):O("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function k1(t,e){const n=V(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function A1(t,e){const n=V(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ze.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.ze.allocateTargetId(r).next(o=>(i=new Cn(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Un.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function Lc(t,e,n){const r=V(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!di(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Ed(t,e,n){const r=V(t);let i=ee.min(),s=he();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=V(a),h=u.qn.get(l);return h!==void 0?E.resolve(u.Un.get(h)):u.ze.getTargetData(c,l)}(r,o,kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:he())).next(a=>({documents:a,Gn:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return E.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ft(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:m1(r.bundledQuery),readTime:Ft(r.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.Zn=new xe(Ae.ts),this.es=new xe(Ae.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Ae(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Ae(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new M(new me([])),r=new Ae(n,e),i=new Ae(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new M(new me([])),r=new Ae(n,e),i=new Ae(n,e+1);let s=he();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ae(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return M.comparator(e.key,n.key)||ne(e.ls,n.ls)}static ns(e,n){return ne(e.ls,n.ls)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new xe(Ae.ts)}checkEmpty(e){return E.resolve(this.In.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new p1(s,n,r,i);this.In.push(o);for(const a of i)this.ds=this.ds.add(new Ae(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this._s(r),s=i<0?0:i;return E.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return E.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ae(n,0),i=new Ae(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this.ws(o.ls);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new xe(ne);return n.forEach(i=>{const s=new Ae(i,0),o=new Ae(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),E.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Ae(new M(s),0);let a=new xe(ne);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ls)),!0)},o),E.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this.ws(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return E.forEach(n.mutations,i=>{const s=new Ae(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new Ae(n,0),i=this.ds.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.In.length,E.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new qe(M.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.clone():$e.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.clone():$e.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=An();const s=new M(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Ks(n,c)&&(i=i.insert(c.key,c.clone()))}return E.resolve(i)}Ts(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new O1(this)}getSize(e){return E.resolve(this.size)}}class O1 extends _1{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.Se.addEntry(e,i.document,this.getReadTime(r))):this.Se.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.persistence=e,this.Es=new gi(n=>wc(n),bc),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Is=0,this.As=new Mc,this.targetCount=0,this.Rs=cr.se()}forEachTarget(e,n){return this.Es.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),E.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new cr(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.ce(n),E.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n){this.bs={},this.Le=new pc(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new D1(this),this.Ht=new y1,this.He=function(r,i){return new N1(r,i)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new g1(n),this.Je=new C1(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new R1(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new L1(this.Le.next());return this.referenceDelegate.vs(),r(i).next(s=>this.referenceDelegate.Vs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ss(e,n){return E.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class L1 extends d1{constructor(e){super(),this.currentSequenceNumber=e}}class Uc{constructor(e){this.persistence=e,this.Ds=new Mc,this.Cs=null}static Ns(e){return new Uc(e)}get xs(){if(this.Cs)return this.Cs;throw F()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),E.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.xs,r=>{const i=M.fromPath(r);return this.ks(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return E.or([()=>E.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class Td{constructor(){this.activeTargetIds=sd()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class M1{constructor(){this.yi=new Td,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Td,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{Ti(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,i){const s=this.Bi(e,n);O("RestConnection","Sending: ",s,r);const o={};return this.Ui(o,i),this.qi(e,s,o,r).then(a=>(O("RestConnection","Received: ",a),a),a=>{throw Cf("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",r),a})}Ki(e,n,r,i){return this.Li(e,n,r,i)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Zn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=x1[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,i){return new Promise((s,o)=>{const a=new sb;a.listenOnce(nb.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case fc.NO_ERROR:const l=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(l)),s(l);break;case fc.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new D(_.DEADLINE_EXCEEDED,"Request time out"));break;case fc.HTTP_ERROR:const u=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(d){const m=d.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(m)>=0?m:_.UNKNOWN}(h.status);o(new D(f,h.message))}else o(new D(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(_.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=eb(),s=tb(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ib({})),this.Ui(o.initMessageHeaders,n),pu()||mu()||vv()||yu()||_v()||gu()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");O("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let l=!1,u=!1;const h=new F1({vi:d=>{u?O("Connection","Not sending because WebChannel is closed:",d):(l||(O("Connection","Opening WebChannel transport."),c.open(),l=!0),O("Connection","WebChannel sending:",d),c.send(d))},Vi:()=>c.close()}),f=(d,m,y)=>{d.listen(m,g=>{try{y(g)}catch(b){setTimeout(()=>{throw b},0)}})};return f(c,Fs.EventType.OPEN,()=>{u||O("Connection","WebChannel transport opened.")}),f(c,Fs.EventType.CLOSE,()=>{u||(u=!0,O("Connection","WebChannel transport closed"),h.$i())}),f(c,Fs.EventType.ERROR,d=>{u||(u=!0,Cf("Connection","WebChannel transport errored:",d),h.$i(new D(_.UNAVAILABLE,"The operation could not be completed")))}),f(c,Fs.EventType.MESSAGE,d=>{var m;if(!u){const y=d.data[0];ue(!!y);const g=y,b=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(b){O("Connection","WebChannel received error:",b);const C=b.status;let k=function(I){const $=be[I];if($!==void 0)return rd($)}(C),v=b.message;k===void 0&&(k=_.INTERNAL,v="Unknown error status: "+C+" with message "+b.message),u=!0,h.$i(new D(k,v)),c.close()}else O("Connection","WebChannel received:",y),h.Oi(y)}}),f(s,rb.STAT_EVENT,d=>{d.stat===Sf.PROXY?O("Connection","Detected buffering proxy"):d.stat===Sf.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function xc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){return new Qb(t,!0)}class Sd{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=i,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n,r,i,s,o,a){this.Oe=e,this.er=r,this.nr=i,this.sr=s,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new Sd(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(tn(n.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(r=>{this.ir===n&&this.Er(r)},r=>{e(()=>{const i=new D(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ir(i)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.Ir(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class j1 extends kd{constructor(e,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s),this.N=i}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=e1(this.N,e),r=function(i){if(!("targetChange"in i))return ee.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ee.min():s.readTime?Ft(s.readTime):ee.min()}(e);return this.listener.Rr(n,r)}br(e){const n={};n.database=Oc(this.N),n.addTarget=function(i,s){let o;const a=s.target;return o=Ec(a)?{documents:r1(i,a)}:{query:i1(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=hd(i,s.resumeToken):s.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=ro(i,s.snapshotVersion.toTimestamp())),o}(this.N,e);const r=o1(this.N,e);r&&(n.labels=r),this.mr(n)}Pr(e){const n={};n.database=Oc(this.N),n.removeTarget=e,this.mr(n)}}class B1 extends kd{constructor(e,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s),this.N=i,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=n1(e.writeResults,e.commitTime),r=Ft(e.commitTime);return this.listener.Dr(r,n)}return ue(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=Oc(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>t1(this.N,r))};this.mr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1 extends class{}{constructor(e,n,r){super(),this.credentials=e,this.sr=n,this.N=r,this.kr=!1}$r(){if(this.kr)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.$r(),this.credentials.getToken().then(i=>this.sr.Li(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new D(_.UNKNOWN,i.toString())})}Ki(e,n,r){return this.$r(),this.credentials.getToken().then(i=>this.sr.Ki(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new D(_.UNKNOWN,i.toString())})}terminate(){this.kr=!0}}class q1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(tn(n),this.Mr=!1):O("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=s,this.zr.Ti(o=>{r.enqueueAndForget(async()=>{Rn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=V(a);c.Wr.add(4),await mi(c),c.Hr.set("Unknown"),c.Wr.delete(4),await so(c)}(this))})}),this.Hr=new q1(r,i)}}async function so(t){if(Rn(t))for(const e of t.Gr)await e(!0)}async function mi(t){for(const e of t.Gr)await e(!1)}function Ad(t,e){const n=V(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),jc(n)?Vc(n):lr(n).hr()&&Fc(n,e))}function Cd(t,e){const n=V(t),r=lr(n);n.Qr.delete(e),r.hr()&&Rd(n,e),n.Qr.size===0&&(r.hr()?r.wr():Rn(n)&&n.Hr.set("Unknown"))}function Fc(t,e){t.Jr.Y(e.targetId),lr(t).br(e)}function Rd(t,e){t.Jr.Y(e),lr(t).Pr(e)}function Vc(t){t.Jr=new Wb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),lr(t).start(),t.Hr.Lr()}function jc(t){return Rn(t)&&!lr(t).ur()&&t.Qr.size>0}function Rn(t){return V(t).Wr.size===0}function Nd(t){t.Jr=void 0}async function H1(t){t.Qr.forEach((e,n)=>{Fc(t,e)})}async function G1(t,e){Nd(t),jc(t)?(t.Hr.qr(e),Vc(t)):t.Hr.set("Unknown")}async function K1(t,e,n){if(t.Hr.set("Online"),e instanceof ad&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Qr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Qr.delete(o),r.Jr.removeTarget(o))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oo(t,r)}else if(e instanceof no?t.Jr.rt(e):e instanceof od?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(ee.min()))try{const r=await bd(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Jr._t(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Qr.get(c);l&&i.Qr.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.Qr.get(a);if(!c)return;i.Qr.set(a,c.withResumeToken(Be.EMPTY_BYTE_STRING,c.snapshotVersion)),Rd(i,a);const l=new Cn(c.target,a,1,c.sequenceNumber);Fc(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await oo(t,r)}}async function oo(t,e,n){if(!di(e))throw e;t.Wr.add(1),await mi(t),t.Hr.set("Offline"),n||(n=()=>bd(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await so(t)})}function Od(t,e){return e().catch(n=>oo(t,n,e))}async function ao(t){const e=V(t),n=on(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;W1(e);)try{const i=await k1(e.localStore,r);if(i===null){e.jr.length===0&&n.wr();break}r=i.batchId,X1(e,i)}catch(i){await oo(e,i)}Dd(e)&&Pd(e)}function W1(t){return Rn(t)&&t.jr.length<10}function X1(t,e){t.jr.push(e);const n=on(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function Dd(t){return Rn(t)&&!on(t).ur()&&t.jr.length>0}function Pd(t){on(t).start()}async function Y1(t){on(t).Nr()}async function Q1(t){const e=on(t);for(const n of t.jr)e.Sr(n.mutations)}async function J1(t,e,n){const r=t.jr.shift(),i=Dc.from(r,e,n);await Od(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ao(t)}async function Z1(t,e){e&&on(t).Vr&&await async function(n,r){if(i=r.code,Bb(i)&&i!==_.ABORTED){const s=n.jr.shift();on(n).dr(),await Od(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ao(n)}var i}(t,e),Dd(t)&&Pd(t)}async function eE(t,e){const n=V(t);e?(n.Wr.delete(2),await so(n)):e||(n.Wr.add(2),await mi(n),n.Hr.set("Unknown"))}function lr(t){return t.Yr||(t.Yr=function(e,n,r){const i=V(e);return i.$r(),new j1(n,i.sr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:H1.bind(null,t),Ci:G1.bind(null,t),Rr:K1.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),jc(t)?Vc(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Nd(t))})),t.Yr}function on(t){return t.Xr||(t.Xr=function(e,n,r){const i=V(e);return i.$r(),new B1(n,i.sr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:Y1.bind(null,t),Ci:Z1.bind(null,t),Cr:Q1.bind(null,t),Dr:J1.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await ao(t)):(await t.Xr.stop(),t.jr.length>0&&(O("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Bc(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $c(t,e){if(tn("AsyncQueue",`${e}: ${t}`),di(t))return new D(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=kc(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new ur(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ur)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.Zr=new qe(M.comparator)}track(e){const n=e.doc.key,r=this.Zr.get(n);r?e.type!==0&&r.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&r.type!==1?this.Zr=this.Zr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Zr=this.Zr.remove(n):e.type===1&&r.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):F():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,r)=>{e.push(r)}),e}}class hr{constructor(e,n,r,i,s,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new hr(e,n,ur.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(){this.no=void 0,this.listeners=[]}}class nE{constructor(){this.queries=new gi(e=>$f(e),Gs),this.onlineState="Unknown",this.so=new Set}}async function Md(t,e){const n=V(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new tE),i)try{s.no=await n.onListen(r)}catch(o){const a=$c(o,`Initialization of query '${Ic(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.io(n.onlineState),s.no&&e.ro(s.no)&&qc(n)}async function Ud(t,e){const n=V(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function rE(t,e){const n=V(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.ro(i)&&(r=!0);o.no=i}}r&&qc(n)}function iE(t,e,n){const r=V(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function qc(t){t.so.forEach(e=>{e.next()})}class xd{constructor(e,n,r){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=r||{}}ro(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new hr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.fo||!r)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=hr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.key=e}}class Vd{constructor(e){this.key=e}}class sE{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=he(),this.mutatedKeys=he(),this.Io=qf(e),this.Ao=new ur(this.Io)}get Ro(){return this.po}bo(e,n){const r=n?n.Po:new Ld,i=n?n.Ao:this.Ao;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=zs(this.query)&&i.size===this.query.limit?i.last():null,l=Hs(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=Ks(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let g=!1;f&&d?f.data.isEqual(d.data)?m!==y&&(r.track({type:3,doc:d}),g=!0):this.vo(f,d)||(r.track({type:2,doc:d}),g=!0,(c&&this.Io(d,c)>0||l&&this.Io(d,l)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),g=!0):f&&!d&&(r.track({type:1,doc:f}),g=!0,(c||l)&&(a=!0)),g&&(d?(o=o.add(d),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),zs(this.query)||Hs(this.query))for(;o.size>this.query.limit;){const u=zs(this.query)?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Ao:o,Po:r,Ln:a,mutatedKeys:s}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const s=e.Po.eo();s.sort((l,u)=>function(h,f){const d=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return d(h)-d(f)}(l.type,u.type)||this.Io(l.doc,u.doc)),this.Vo(r);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,c=a!==this.To;return this.To=a,s.length!==0||c?{snapshot:new hr(this.query,e.Ao,i,s,e.mutatedKeys,a===0,c,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Ld,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=he(),this.Ao.forEach(r=>{this.Co(r.key)&&(this.Eo=this.Eo.add(r.key))});const n=[];return e.forEach(r=>{this.Eo.has(r)||n.push(new Vd(r))}),this.Eo.forEach(r=>{e.has(r)||n.push(new Fd(r))}),n}No(e){this.po=e.Gn,this.Eo=he();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return hr.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class oE{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aE{constructor(e){this.key=e,this.ko=!1}}class cE{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new gi(a=>$f(a),Gs),this.Fo=new Map,this.Mo=new Set,this.Lo=new qe(M.comparator),this.Bo=new Map,this.Uo=new Mc,this.qo={},this.Ko=new Map,this.jo=cr.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function lE(t,e){const n=_E(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const o=await A1(n.localStore,kn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await uE(n,e,r,a==="current"),n.isPrimaryClient&&Ad(n.remoteStore,o)}return i}async function uE(t,e,n,r){t.Wo=(u,h,f)=>async function(d,m,y,g){let b=m.view.bo(y);b.Ln&&(b=await Ed(d.localStore,m.query,!1).then(({documents:v})=>m.view.bo(v,b)));const C=g&&g.targetChanges.get(m.targetId),k=m.view.applyChanges(b,d.isPrimaryClient,C);return Hd(d,m.targetId,k.Do),k.snapshot}(t,u,h,f);const i=await Ed(t.localStore,e,!0),s=new sE(e,i.Gn),o=s.bo(i.documents),a=fi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);Hd(t,n,c.Do);const l=new oE(e,n,s);return t.Oo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function hE(t,e){const n=V(t),r=n.Oo.get(e),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(s=>!Gs(s,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Lc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Cd(n.remoteStore,r.targetId),zc(n,r.targetId)}).catch(pi)):(zc(n,r.targetId),await Lc(n.localStore,r.targetId,!0))}async function fE(t,e,n){const r=wE(t);try{const i=await function(s,o){const a=V(s),c=st.now(),l=o.reduce((h,f)=>h.add(f.key),he());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(f=>{u=f;const d=[];for(const m of o){const y=Fb(m,u.get(m.key));y!=null&&d.push(new sr(m.key,y,xf(y.value.mapValue),sn.exists(!0)))}return a.In.addMutationBatch(h,c,d,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.qo[s.currentUser.toKey()];c||(c=new qe(ne)),c=c.insert(o,a),s.qo[s.currentUser.toKey()]=c}(r,i.batchId,n),await yi(r,i.changes),await ao(r.remoteStore)}catch(i){const s=$c(i,"Failed to persist write");n.reject(s)}}async function jd(t,e){const n=V(t);try{const r=await I1(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Bo.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ko=!0:i.modifiedDocuments.size>0?ue(o.ko):i.removedDocuments.size>0&&(ue(o.ko),o.ko=!1))}),await yi(n,r,e)}catch(r){await pi(r)}}function Bd(t,e,n){const r=V(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Oo.forEach((s,o)=>{const a=o.view.io(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=V(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.io(o)&&(c=!0)}),c&&qc(a)}(r.eventManager,e),i.length&&r.$o.Rr(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dE(t,e,n){const r=V(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Bo.get(e),s=i&&i.key;if(s){let o=new qe(M.comparator);o=o.insert(s,$e.newNoDocument(s,ee.min()));const a=he().add(s),c=new to(ee.min(),new Map,new xe(ne),o,a);await jd(r,c),r.Lo=r.Lo.remove(s),r.Bo.delete(e),Hc(r)}else await Lc(r.localStore,e,!1).then(()=>zc(r,e,n)).catch(pi)}async function pE(t,e){const n=V(t),r=e.batch.batchId;try{const i=await T1(n.localStore,e);qd(n,r,null),$d(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yi(n,i)}catch(i){await pi(i)}}async function gE(t,e,n){const r=V(t);try{const i=await function(s,o){const a=V(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.In.lookupMutationBatch(c,o).next(u=>(ue(u!==null),l=u.keys(),a.In.removeMutationBatch(c,u))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,l))})}(r.localStore,e);qd(r,e,n),$d(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yi(r,i)}catch(i){await pi(i)}}function $d(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function qd(t,e,n){const r=V(t);let i=r.qo[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qo[r.currentUser.toKey()]=i}}function zc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Oo.delete(r),n&&t.$o.Go(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(r=>{t.Uo.containsKey(r)||zd(t,r)})}function zd(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(Cd(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),Hc(t))}function Hd(t,e,n){for(const r of n)r instanceof Fd?(t.Uo.addReference(r.key,e),mE(t,r)):r instanceof Vd?(O("SyncEngine","Document no longer in limbo: "+r.key),t.Uo.removeReference(r.key,e),t.Uo.containsKey(r.key)||zd(t,r.key)):F()}function mE(t,e){const n=e.key,r=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(r)||(O("SyncEngine","New document in limbo: "+n),t.Mo.add(r),Hc(t))}function Hc(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new M(me.fromString(e)),r=t.jo.next();t.Bo.set(r,new aE(n)),t.Lo=t.Lo.insert(n,r),Ad(t.remoteStore,new Cn(kn(qs(n.path)),r,2,pc.T))}}async function yi(t,e,n){const r=V(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,c)=>{o.push(r.Wo(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=Pc.kn(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.$o.Rr(i),await async function(a,c){const l=V(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(c,h=>E.forEach(h.Nn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>E.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!di(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Un.get(h),d=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(d);l.Un=l.Un.insert(h,m)}}}(r.localStore,s))}async function yE(t,e){const n=V(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await wd(n.localStore,e);n.currentUser=e,function(i,s){i.Ko.forEach(o=>{o.forEach(a=>{a.reject(new D(_.CANCELLED,s))})}),i.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yi(n,r.Wn)}}function vE(t,e){const n=V(t),r=n.Bo.get(e);if(r&&r.ko)return he().add(r.key);{let i=he();const s=n.Fo.get(e);if(!s)return i;for(const o of s){const a=n.Oo.get(o);i=i.unionWith(a.view.Ro)}return i}}function _E(t){const e=V(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dE.bind(null,e),e.$o.Rr=rE.bind(null,e.eventManager),e.$o.Go=iE.bind(null,e.eventManager),e}function wE(t){const e=V(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gE.bind(null,e),e}class bE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=io(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return E1(this.persistence,new w1,e.initialUser,this.N)}Jo(e){return new P1(Uc.Ns,this.N)}Ho(e){return new M1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class EE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yE.bind(null,this.syncEngine),await eE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nE}createDatastore(e){const n=io(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new V1(i));var i;return function(s,o,a){return new $1(s,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Bd(this.syncEngine,a,0),o=Id.bt()?new Id:new U1,new z1(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const u=new cE(r,i,s,o,a,c);return l&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=V(e);O("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await mi(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Qe.UNAUTHENTICATED,this.clientId=Rf.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async i=>{O("FirestoreClient","Received user=",i.uid),await this.credentialListener(i),this.user=i})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=$c(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function IE(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await wd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function SE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kE(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=V(s);a.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const c=Rn(a);a.Wr.add(3),await mi(a),c&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await so(a)}(e.remoteStore,i)),t.onlineComponents=e}async function kE(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await IE(t,new bE)),t.offlineComponents}async function Kd(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await SE(t,new EE)),t.onlineComponents}function AE(t){return Kd(t).then(e=>e.syncEngine)}async function Gc(t){const e=await Kd(t),n=e.eventManager;return n.onListen=lE.bind(null,e.syncEngine),n.onUnlisten=hE.bind(null,e.syncEngine),n}function CE(t,e,n={}){const r=new nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new Gd({next:h=>{s.enqueueAndForget(()=>Ud(i,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new D(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new D(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new xd(qs(o.path),l,{includeMetadataChanges:!0,fo:!0});return Md(i,u)}(await Gc(t),t.asyncQueue,e,n,r)),r.promise}class RE{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class vi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t,e,n){if(!n)throw new D(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NE(t,e,n,r){if(e===!0&&r===!0)throw new D(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yd(t){if(!M.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qd(t){if(M.isDocumentKey(t))throw new D(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kc(t);throw new D(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new D(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,NE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jd({}),this._settingsFrozen=!1,e instanceof vi?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new D(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vi(r.options.projectId)}(e))}get app(){if(!this._app)throw new D(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jd(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new ab;switch(n.type){case"gapi":const r=n.client;return ue(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new ub(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new D(_.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Wd.get(e);n&&(O("ComponentProvider","Removing Datastore"),Wd.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class co{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new co(this.firestore,e,this._query)}}class an extends co{constructor(e,n,r){super(e,n,qs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new M(e))}withConverter(e){return new an(this.firestore,e,this._path)}}function JS(t,e,...n){if(t=rt(t),Xd("collection","path",e),t instanceof Wc){const r=me.fromString(e,...n);return Qd(r),new an(t,null,r)}{if(!(t instanceof et||t instanceof an))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Qd(r),new an(t.firestore,null,r)}}function OE(t,e,...n){if(t=rt(t),arguments.length===1&&(e=Rf.I()),Xd("doc","path",e),t instanceof Wc){const r=me.fromString(e,...n);return Yd(r),new et(t,null,new M(r))}{if(!(t instanceof et||t instanceof an))throw new D(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Yd(r),new et(t.firestore,t instanceof an?t.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new Sd(this,"async_queue_retry"),this.Rc=()=>{const n=xc();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=xc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new nn;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!di(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(r=>{this.Tc=r,this.Ec=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw tn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ec=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const i=Bc.createAndSchedule(this,e,n,r,s=>this.Vc(s));return this.yc.push(i),i}bc(){this.Tc&&F()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}function Zd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Nn extends Wc{constructor(e,n){super(e,n),this.type="firestore",this._queue=new DE,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ep(this),this._firestoreClient.terminate()}}function ZS(t=sa()){return es(t,"firestore").getImmediate()}function Xc(t){return t._firestoreClient||ep(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ep(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new RE(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new TE(t._credentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fr(Be.fromBase64String(e))}catch(n){throw new D(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fr(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=/^__.*__$/;class LE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zs(e,this.data,n,this.fieldTransforms)}}function np(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Jc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=i,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new Jc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.$c({path:r,Fc:!1});return i.Mc(e),i}Lc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.$c({path:r,Fc:!1});return i.xc(),i}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return lo(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(np(this.kc)&&PE.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class ME{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||io(e)}jc(e,n,r,i=!1){return new Jc({kc:e,methodName:n,Kc:r,path:Je.emptyPath(),Fc:!1,qc:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function rp(t){const e=t._freezeSettings(),n=io(t._databaseId);return new ME(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ip(t,e,n,r,i,s={}){const o=t.jc(s.merge||s.mergeFields?2:0,e,n,i);cp("Data must be an object, but it was:",o,r);const a=op(r,o);let c,l;if(s.merge)c=new gc(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const f=UE(e,h,n);if(!o.contains(f))throw new D(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);FE(u,f)||u.push(f)}c=new gc(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new LE(new yt(a),c,l)}function sp(t,e){if(ap(t=rt(t)))return cp("Unsupported field value:",e,t),op(t,e);if(t instanceof tp)return function(n,r){if(!np(r.kc))throw r.Uc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Uc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=sp(o,r.Bc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Db(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=st.fromDate(n);return{timestampValue:ro(r.N,i)}}if(n instanceof st){const i=new st(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ro(r.N,i)}}if(n instanceof Qc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof fr)return{bytesValue:hd(r.N,n._byteString)};if(n instanceof et){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Uc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ac(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Uc(`Unsupported field value: ${Kc(n)}`)}(t,e)}function op(t,e){const n={};return Of(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tr(t,(r,i)=>{const s=sp(i,e.Oc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ap(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Qc||t instanceof fr||t instanceof et||t instanceof tp)}function cp(t,e,n){if(!ap(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Kc(n);throw r==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+r)}}function UE(t,e,n){if((e=rt(e))instanceof Yc)return e._internalPath;if(typeof e=="string")return lp(t,e);throw lo("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const xE=new RegExp("[~\\*/\\[\\]]");function lp(t,e,n){if(e.search(xE)>=0)throw lo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yc(...e.split("."))._internalPath}catch{throw lo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new D(_.INVALID_ARGUMENT,a+t+c)}function FE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VE extends up{data(){return super.data()}}function hp(t,e){return typeof e=="string"?lp(t,e):e instanceof Yc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fp extends up{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class uo extends fp{data(e={}){return super.data(e)}}class jE{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _i(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new uo(this._firestore,this._userDataWriter,r.key,r,new _i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new uo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new _i(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new uo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new _i(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:BE(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){if(Hs(t)&&t.explicitOrderBy.length===0)throw new D(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{convertValue(e,n="none"){switch(Sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){const r={};return tr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Qc(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const n=rn(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);ue(vd(r));const i=new vi(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||tn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){t=Vt(t,et);const e=Vt(t.firestore,Nn);return CE(Xc(e),t._key).then(n=>gp(e,t,n))}class pp extends qE{constructor(e){super(),this.firestore=e}convertBytes(e){return new fr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new et(this.firestore,null,n)}}function tk(t,e,n){t=Vt(t,et);const r=Vt(t.firestore,Nn),i=dp(t.converter,e,n);return Zc(r,[ip(rp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,sn.none())])}function nk(t){return Zc(Vt(t.firestore,Nn),[new nd(t._key,sn.none())])}function rk(t,e){const n=Vt(t.firestore,Nn),r=OE(t),i=dp(t.converter,e);return Zc(n,[ip(rp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function ik(t,...e){var n,r,i;t=rt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Zd(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Zd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof et)l=Vt(t.firestore,Nn),u=qs(t._key.path),c={next:h=>{e[o]&&e[o](gp(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Vt(t,co);l=Vt(h.firestore,Nn),u=h._query;const f=new pp(l);c={next:d=>{e[o]&&e[o](new jE(l,f,h,d))},error:e[o+1],complete:e[o+2]},$E(t._query)}return function(h,f,d,m){const y=new Gd(m),g=new xd(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>Md(await Gc(h),g)),()=>{y.ec(),h.asyncQueue.enqueueAndForget(async()=>Ud(await Gc(h),g))}}(Xc(l),u,a,c)}function Zc(t,e){return function(n,r){const i=new nn;return n.asyncQueue.enqueueAndForget(async()=>fE(await AE(n),r,i)),i.promise}(Xc(t),e)}function gp(t,e,n){const r=n.docs.get(e._key),i=new pp(t);return new fp(t,i,e._key,r,new _i(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Zn=n})(zn),qn(new pn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Nn(i,new cb(n.getProvider("auth-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),St(kf,"3.3.0",t),St(kf,"3.3.0","esm2017")})();function sk({items:t,pageSize:e,currentPage:n}){return t.slice((n-1)*e,(n-1)*e+e)}const dr="PREVIOUS_PAGE",pr="NEXT_PAGE",On="ELLIPSIS";function zE({totalItems:t,pageSize:e,currentPage:n,limit:r=null,showStepOptions:i=!1}){const s=Math.ceil(t/e),o=WE({limit:r});let c=r&&s>o?GE({totalPages:s,limit:r,currentPage:n}):HE({totalPages:s});return i?KE({options:c,currentPage:n,totalPages:s}):c}function HE({totalPages:t}){return new Array(t).fill(null).map((e,n)=>({type:"number",value:n+1}))}function GE({totalPages:t,limit:e,currentPage:n}){const r=e*2+2,i=1+r,s=t-r,o=i+2;if(n<=i-e)return Array(o).fill(null).map((a,c)=>c===o-1?{type:"number",value:t}:c===o-2?{type:"symbol",symbol:On,value:i+1}:{type:"number",value:c+1});if(n>=s+e)return Array(o).fill(null).map((a,c)=>c===0?{type:"number",value:1}:c===1?{type:"symbol",symbol:On,value:s-1}:{type:"number",value:s+c-2});if(n>=i-e&&n<=s+e)return Array(o).fill(null).map((a,c)=>c===0?{type:"number",value:1}:c===1?{type:"symbol",symbol:On,value:n-e+(c-2)}:c===o-1?{type:"number",value:t}:c===o-2?{type:"symbol",symbol:On,value:n+e+1}:{type:"number",value:n-e+(c-2)})}function KE({options:t,currentPage:e,totalPages:n}){return[{type:"symbol",symbol:dr,value:e<=1?1:e-1},...t,{type:"symbol",symbol:pr,value:e>=n?n:e+1}]}function WE({limit:t}){const e=3,n=2;return t*2+e+n}function mp(t,e,n){const r=t.slice();return r[12]=e[n],r}const XE=t=>({}),yp=t=>({}),YE=t=>({}),vp=t=>({}),QE=t=>({}),_p=t=>({}),JE=t=>({value:t&4}),wp=t=>({value:t[12].value});function ZE(t){let e;const n=t[9].next,r=ft(n,t,t[8],yp),i=r||rT();return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,o){r&&r.p&&(!e||o&256)&&pt(r,n,s,s[8],e?dt(n,s[8],o,XE):gt(s[8]),yp)},i(s){e||(le(i,s),e=!0)},o(s){ge(i,s),e=!1},d(s){i&&i.d(s)}}}function eT(t){let e;const n=t[9].prev,r=ft(n,t,t[8],vp),i=r||iT();return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,o){r&&r.p&&(!e||o&256)&&pt(r,n,s,s[8],e?dt(n,s[8],o,YE):gt(s[8]),vp)},i(s){e||(le(i,s),e=!0)},o(s){ge(i,s),e=!1},d(s){i&&i.d(s)}}}function tT(t){let e;const n=t[9].ellipsis,r=ft(n,t,t[8],_p),i=r||sT();return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,o){r&&r.p&&(!e||o&256)&&pt(r,n,s,s[8],e?dt(n,s[8],o,QE):gt(s[8]),_p)},i(s){e||(le(i,s),e=!0)},o(s){ge(i,s),e=!1},d(s){i&&i.d(s)}}}function nT(t){let e;const n=t[9].number,r=ft(n,t,t[8],wp),i=r||oT(t);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),e=!0},p(s,o){r?r.p&&(!e||o&260)&&pt(r,n,s,s[8],e?dt(n,s[8],o,JE):gt(s[8]),wp):i&&i.p&&(!e||o&4)&&i.p(s,e?o:-1)},i(s){e||(le(i,s),e=!0)},o(s){ge(i,s),e=!1},d(s){i&&i.d(s)}}}function rT(t){let e,n;return{c(){e=Sr("svg"),n=Sr("path"),this.h()},l(r){e=Vi(r,"svg",{style:!0,viewBox:!0});var i=ie(e);n=Vi(i,"path",{fill:!0,d:!0}),ie(n).forEach(N),i.forEach(N),this.h()},h(){q(n,"fill","#000000"),q(n,"d","M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"),ji(e,"width","24px"),ji(e,"height","24px"),q(e,"viewBox","0 0 24 24")},m(r,i){fe(r,e,i),Z(e,n)},d(r){r&&N(e)}}}function iT(t){let e,n;return{c(){e=Sr("svg"),n=Sr("path"),this.h()},l(r){e=Vi(r,"svg",{style:!0,viewBox:!0});var i=ie(e);n=Vi(i,"path",{fill:!0,d:!0}),ie(n).forEach(N),i.forEach(N),this.h()},h(){q(n,"fill","#000000"),q(n,"d","M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"),ji(e,"width","24px"),ji(e,"height","24px"),q(e,"viewBox","0 0 24 24")},m(r,i){fe(r,e,i),Z(e,n)},d(r){r&&N(e)}}}function sT(t){let e,n;return{c(){e=oe("span"),n=nt("...")},l(r){e=ce(r,"SPAN",{});var i=ie(e);n=mt(i,"..."),i.forEach(N)},m(r,i){fe(r,e,i),Z(e,n)},d(r){r&&N(e)}}}function oT(t){let e,n=t[12].value+"",r;return{c(){e=oe("span"),r=nt(n)},l(i){e=ce(i,"SPAN",{});var s=ie(e);r=mt(s,n),s.forEach(N)},m(i,s){fe(i,e,s),Z(e,r)},p(i,s){s&4&&n!==(n=i[12].value+"")&&un(r,n)},d(i){i&&N(e)}}}function bp(t){let e,n,r,i,s,o,a;const c=[nT,tT,eT,ZE],l=[];function u(f,d){return f[12].type==="number"?0:f[12].type==="symbol"&&f[12].symbol===On?1:f[12].type==="symbol"&&f[12].symbol===dr?2:f[12].type==="symbol"&&f[12].symbol===pr?3:-1}~(n=u(t))&&(r=l[n]=c[n](t));function h(){return t[10](t[12])}return{c(){e=oe("span"),r&&r.c(),i=Et(),this.h()},l(f){e=ce(f,"SPAN",{class:!0});var d=ie(e);r&&r.l(d),i=It(d),d.forEach(N),this.h()},h(){q(e,"class","option"),W(e,"number",t[12].type==="number"),W(e,"prev",t[12].type==="symbol"&&t[12].symbol===dr),W(e,"next",t[12].type==="symbol"&&t[12].symbol===pr),W(e,"disabled",t[12].type==="symbol"&&t[12].symbol===pr&&t[0]>=t[1]||t[12].type==="symbol"&&t[12].symbol===dr&&t[0]<=1),W(e,"ellipsis",t[12].type==="symbol"&&t[12].symbol===On),W(e,"active",t[12].type==="number"&&t[12].value===t[0])},m(f,d){fe(f,e,d),~n&&l[n].m(e,null),Z(e,i),s=!0,o||(a=K(e,"click",h),o=!0)},p(f,d){t=f;let m=n;n=u(t),n===m?~n&&l[n].p(t,d):(r&&(Cr(),ge(l[m],1,1,()=>{l[m]=null}),Rr()),~n?(r=l[n],r?r.p(t,d):(r=l[n]=c[n](t),r.c()),le(r,1),r.m(e,i)):r=null),d&4&&W(e,"number",t[12].type==="number"),d&4&&W(e,"prev",t[12].type==="symbol"&&t[12].symbol===dr),d&4&&W(e,"next",t[12].type==="symbol"&&t[12].symbol===pr),d&7&&W(e,"disabled",t[12].type==="symbol"&&t[12].symbol===pr&&t[0]>=t[1]||t[12].type==="symbol"&&t[12].symbol===dr&&t[0]<=1),d&4&&W(e,"ellipsis",t[12].type==="symbol"&&t[12].symbol===On),d&5&&W(e,"active",t[12].type==="number"&&t[12].value===t[0])},i(f){s||(le(r),s=!0)},o(f){ge(r),s=!1},d(f){f&&N(e),~n&&l[n].d(),o=!1,a()}}}function aT(t){let e,n,r=t[2],i=[];for(let o=0;o<r.length;o+=1)i[o]=bp(mp(t,r,o));const s=o=>ge(i[o],1,1,()=>{i[o]=null});return{c(){e=oe("div");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=ce(o,"DIV",{class:!0});var a=ie(e);for(let c=0;c<i.length;c+=1)i[c].l(a);a.forEach(N),this.h()},h(){q(e,"class","pagination-nav")},m(o,a){fe(o,e,a);for(let c=0;c<i.length;c+=1)i[c].m(e,null);n=!0},p(o,[a]){if(a&271){r=o[2];let c;for(c=0;c<r.length;c+=1){const l=mp(o,r,c);i[c]?(i[c].p(l,a),le(i[c],1)):(i[c]=bp(l),i[c].c(),le(i[c],1),i[c].m(e,null))}for(Cr(),c=r.length;c<i.length;c+=1)s(c);Rr()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)le(i[a]);n=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)ge(i[a]);n=!1},d(o){o&&N(e),zg(i,o)}}}function cT(t,e,n){let r,i,{$$slots:s={},$$scope:o}=e;const a=Hi();let{totalItems:c=0}=e,{pageSize:l=1}=e,{currentPage:u=1}=e,{limit:h=null}=e,{showStepOptions:f=!1}=e;function d(y){a("setPage",{page:y.value})}const m=y=>d(y);return t.$$set=y=>{"totalItems"in y&&n(4,c=y.totalItems),"pageSize"in y&&n(5,l=y.pageSize),"currentPage"in y&&n(0,u=y.currentPage),"limit"in y&&n(6,h=y.limit),"showStepOptions"in y&&n(7,f=y.showStepOptions),"$$scope"in y&&n(8,o=y.$$scope)},t.$$.update=()=>{t.$$.dirty&241&&n(2,r=zE({totalItems:c,pageSize:l,currentPage:u,limit:h,showStepOptions:f})),t.$$.dirty&48&&n(1,i=Math.ceil(c/l))},[u,i,r,d,c,l,h,f,o,s,m]}class lT extends Gt{constructor(e){super();Ht(this,e,cT,aT,Dt,{totalItems:4,pageSize:5,currentPage:0,limit:6,showStepOptions:7})}}function uT(t){let e,n,r;const i=[t[0]];let s={};for(let o=0;o<i.length;o+=1)s=tt(s,i[o]);return n=new lT({props:s}),n.$on("setPage",t[1]),{c(){e=oe("div"),jl(n.$$.fragment),this.h()},l(o){e=ce(o,"DIV",{class:!0});var a=ie(e);Bl(n.$$.fragment,a),a.forEach(N),this.h()},h(){q(e,"class","light-pagination-nav svelte-s5ru8s")},m(o,a){fe(o,e,a),Bo(n,e,null),r=!0},p(o,[a]){const c=a&1?Fn(i,[Yg(o[0])]):{};n.$set(c)},i(o){r||(le(n.$$.fragment,o),r=!0)},o(o){ge(n.$$.fragment,o),r=!1},d(o){o&&N(e),$o(n)}}}function hT(t,e,n){function r(i){Ie.call(this,t,i)}return t.$$set=i=>{n(0,e=tt(tt({},e),Ir(i)))},e=Ir(e),[e,r]}class ok extends Gt{constructor(e){super();Ht(this,e,hT,uT,Dt,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="firebasestorage.googleapis.com",Tp="storageBucket",fT=2*60*1e3,dT=10*60*1e3;class Te extends dn{constructor(e,n){super(el(e),`Firebase Storage: ${n} (${el(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}_codeEquals(e){return el(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function el(t){return"storage/"+t}function tl(){const t="An unknown error occurred, please check the error payload for server response.";return new Te("unknown",t)}function pT(t){return new Te("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gT(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te("unauthenticated",t)}function mT(){return new Te("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function yT(t){return new Te("unauthorized","User does not have permission to access '"+t+"'.")}function vT(){return new Te("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function _T(){return new Te("canceled","User canceled the upload/download.")}function wT(t){return new Te("invalid-url","Invalid URL '"+t+"'.")}function bT(t){return new Te("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function ET(){return new Te("no-default-bucket","No default bucket found. Did you set the '"+Tp+"' property when initializing the app?")}function TT(){return new Te("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function nl(t){return new Te("invalid-argument",t)}function Ip(){return new Te("app-deleted","The Firebase app was deleted.")}function IT(t){return new Te("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wi(t,e){return new Te("invalid-format","String does not match format '"+t+"': "+e)}function ho(t){throw new Te("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ot.makeFromUrl(e,n)}catch{return new ot(e,"")}if(r.path==="")return r;throw bT(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(v){v.path_=decodeURIComponent(v.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},y=n===Ep?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",b=new RegExp(`^https?://${y}/${i}/${g}`,"i"),k=[{regex:a,indices:c,postModify:s},{regex:d,indices:m,postModify:l},{regex:b,indices:{bucket:1,path:2},postModify:l}];for(let v=0;v<k.length;v++){const I=k[v],$=I.regex.exec(e);if($){const se=$[I.indices.bucket];let pe=$[I.indices.path];pe||(pe=""),r=new ot(se,pe),I.postModify(r);break}}if(r==null)throw wT(e);return r}}class ST{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...g){l||(l=!0,e.apply(null,g))}function h(g){i=setTimeout(()=>{i=null,t(d,c())},g)}function f(){s&&clearTimeout(s)}function d(g,...b){if(l){f();return}if(g){f(),u.call(null,g,...b);return}if(c()||o){f(),u.call(null,g,...b);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,h(k)}let m=!1;function y(g){m||(m=!0,f(),!l&&(i!==null?(g||(a=2),clearTimeout(i),h(0)):g||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function AT(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t){return t!==void 0}function RT(t){return typeof t=="object"&&!Array.isArray(t)}function Sp(t){return typeof t=="string"||t instanceof String}function kp(t){return rl()&&t instanceof Blob}function rl(){return typeof Blob!="undefined"}function Ap(t,e,n,r){if(r<e)throw nl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw nl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function OT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Dn||(Dn={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n,r,i,s,o,a,c,l,u,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,d)=>{this.resolve_=f,this.reject_=d,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new fo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Dn.NO_ERROR,c=s.getStatus();if(!a||this.isRetryStatusCode_(c)){const u=s.getErrorCode()===Dn.ABORT;r(!1,new fo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new fo(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponseText());CT(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=tl();c.serverResponse=a.getResponseText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Ip():_T();o(c)}else{const c=vT();o(c)}};this.canceled_?n(!1,new fo(!1,null,!0)):this.backoffId_=kT(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class fo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PT(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function LT(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function MT(t,e){e&&(t["X-Firebase-GMPID"]=e)}function UT(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xT(t,e,n,r,i,s){const o=OT(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return MT(c,e),PT(c,n),LT(c,s),UT(c,r),new DT(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function VT(...t){const e=FT();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(rl())return new Blob(t);throw new Te("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function jT(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class il{constructor(e,n){this.data=e,this.contentType=n||null}}function $T(t,e){switch(t){case Nt.RAW:return new il(Cp(e));case Nt.BASE64:case Nt.BASE64URL:return new il(Rp(t,e));case Nt.DATA_URL:return new il(zT(e),HT(e))}throw tl()}function Cp(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)==56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function qT(t){let e;try{e=decodeURIComponent(t)}catch{throw wi(Nt.DATA_URL,"Malformed data URL.")}return Cp(e)}function Rp(t,e){switch(t){case Nt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw wi(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Nt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw wi(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=BT(e)}catch{throw wi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Np{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wi(Nt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=GT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}}function zT(t){const e=new Np(t);return e.base64?Rp(Nt.BASE64,e.rest):qT(e.rest)}function HT(t){return new Np(t).contentType}function GT(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){let r=0,i="";kp(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(kp(this.data_)){const r=this.data_,i=jT(r,e,n);return i===null?null:new cn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new cn(r,!0)}}static getBlob(...e){if(rl()){const n=e.map(r=>r instanceof cn?r.data_:r);return new cn(VT.apply(null,n))}else{const n=e.map(o=>Sp(o)?$T(Nt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new cn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t){let e;try{e=JSON.parse(t)}catch{return null}return RT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function XT(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Op(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(t,e){return e}class We{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||YT}}let po=null;function QT(t){return!Sp(t)||t.length<2?t:Op(t)}function JT(){if(po)return po;const t=[];t.push(new We("bucket")),t.push(new We("generation")),t.push(new We("metageneration")),t.push(new We("name","fullPath",!0));function e(s,o){return QT(o)}const n=new We("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new We("size");return i.xform=r,t.push(i),t.push(new We("timeCreated")),t.push(new We("updated")),t.push(new We("md5Hash",null,!0)),t.push(new We("cacheControl",null,!0)),t.push(new We("contentDisposition",null,!0)),t.push(new We("contentEncoding",null,!0)),t.push(new We("contentLanguage",null,!0)),t.push(new We("contentType",null,!0)),t.push(new We("metadata","customMetadata",!0)),po=t,po}function ZT(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ot(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function eI(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return ZT(r,t),r}function tI(t,e,n){const r=KT(e);return r===null?null:eI(t,r,n)}function nI(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class rI{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t){if(!t)throw tl()}function sI(t,e){function n(r,i){const s=tI(t,i,e);return iI(s!==null),s}return n}function oI(t){function e(n,r){let i;return n.getStatus()===401?n.getResponseText().includes("Firebase App Check token is invalid")?i=mT():i=gT():n.getStatus()===402?i=pT(t.bucket):n.getStatus()===403?i=yT(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function aI(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function cI(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=aI(null,e)),r}function lI(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let v=0;v<2;v++)k=k+Math.random().toString().slice(2);return k}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=cI(e,r,i),u=nI(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",d=cn.getBlob(h,r,f);if(d===null)throw TT();const m={name:l.fullPath},y=NT(s,t.host,t._protocol),g="POST",b=t.maxUploadRetryTime,C=new rI(y,g,sI(t,n),b);return C.urlParams=m,C.headers=o,C.body=d.uploadData(),C.errorHandler=oI(e),C}class uI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=Dn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Dn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Dn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ho("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ho("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ho("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponseText(){if(!this.sent_)throw ho("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}function hI(){return new uI}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n){this._service=e,n instanceof ot?this._location=n:this._location=ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Pn(e,n)}get root(){const e=new ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Op(this._location.path)}get storage(){return this._service}get parent(){const e=WT(this._location.path);if(e===null)return null;const n=new ot(this._location.bucket,e);return new Pn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw IT(e)}}function fI(t,e,n){t._throwIfRoot("uploadBytes");const r=lI(t.storage,t._location,JT(),new cn(e,!0),n);return t.storage.makeRequestWithTokens(r,hI).then(i=>({metadata:i,ref:t}))}function dI(t,e){const n=XT(t._location.path,e),r=new ot(t._location.bucket,n);return new Pn(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t){return/^[A-Za-z]+:\/\//.test(t)}function gI(t,e){return new Pn(t,e)}function Dp(t,e){if(t instanceof sl){const n=t;if(n._bucket==null)throw ET();const r=new Pn(n,n._bucket);return e!=null?Dp(r,e):r}else return e!==void 0?dI(t,e):t}function mI(t,e){if(e&&pI(e)){if(t instanceof sl)return gI(t,e);throw nl("To use ref(service, url), the first argument must be a Storage instance.")}else return Dp(t,e)}function Pp(t,e){const n=e==null?void 0:e[Tp];return n==null?null:ot.makeFromBucketSpec(n,t)}class sl{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Ep,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=fT,this._maxUploadRetryTime=dT,this._requests=new Set,i!=null?this._bucket=ot.makeFromBucketSpec(i,this._host):this._bucket=Pp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ot.makeFromBucketSpec(this._url,e):this._bucket=Pp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ap("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ap("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pn(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new ST(Ip());{const s=xT(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Lp="@firebase/storage",Mp="0.8.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="storage";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t,e,n){return t=rt(t),fI(t,e,n)}function ck(t,e){return t=rt(t),mI(t,e)}function lk(t=sa(),e){return t=rt(t),es(t,Up).getImmediate({identifier:e})}function yI(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new sl(n,r,i,e,zn)}function vI(){qn(new pn(Up,yI,"PUBLIC").setMultipleInstances(!0)),St(Lp,Mp,""),St(Lp,Mp,"esm2017")}vI();var ol={exports:{}},ae={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=60103,mo=60106,bi=60107,Ei=60108,Ti=60114,Ii=60109,Si=60110,ki=60112,Ai=60113,al=60120,Ci=60115,Ri=60116,xp=60121,Fp=60122,Vp=60117,jp=60129,Bp=60131;if(typeof Symbol=="function"&&Symbol.for){var Fe=Symbol.for;go=Fe("react.element"),mo=Fe("react.portal"),bi=Fe("react.fragment"),Ei=Fe("react.strict_mode"),Ti=Fe("react.profiler"),Ii=Fe("react.provider"),Si=Fe("react.context"),ki=Fe("react.forward_ref"),Ai=Fe("react.suspense"),al=Fe("react.suspense_list"),Ci=Fe("react.memo"),Ri=Fe("react.lazy"),xp=Fe("react.block"),Fp=Fe("react.server.block"),Vp=Fe("react.fundamental"),jp=Fe("react.debug_trace_mode"),Bp=Fe("react.legacy_hidden")}function vt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case go:switch(t=t.type,t){case bi:case Ti:case Ei:case Ai:case al:return t;default:switch(t=t&&t.$$typeof,t){case Si:case ki:case Ri:case Ci:case Ii:return t;default:return e}}case mo:return e}}}var _I=Ii,wI=go,bI=ki,EI=bi,TI=Ri,II=Ci,SI=mo,kI=Ti,AI=Ei,CI=Ai;ae.ContextConsumer=Si;ae.ContextProvider=_I;ae.Element=wI;ae.ForwardRef=bI;ae.Fragment=EI;ae.Lazy=TI;ae.Memo=II;ae.Portal=SI;ae.Profiler=kI;ae.StrictMode=AI;ae.Suspense=CI;ae.isAsyncMode=function(){return!1};ae.isConcurrentMode=function(){return!1};ae.isContextConsumer=function(t){return vt(t)===Si};ae.isContextProvider=function(t){return vt(t)===Ii};ae.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===go};ae.isForwardRef=function(t){return vt(t)===ki};ae.isFragment=function(t){return vt(t)===bi};ae.isLazy=function(t){return vt(t)===Ri};ae.isMemo=function(t){return vt(t)===Ci};ae.isPortal=function(t){return vt(t)===mo};ae.isProfiler=function(t){return vt(t)===Ti};ae.isStrictMode=function(t){return vt(t)===Ei};ae.isSuspense=function(t){return vt(t)===Ai};ae.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===bi||t===Ti||t===jp||t===Ei||t===Ai||t===al||t===Bp||typeof t=="object"&&t!==null&&(t.$$typeof===Ri||t.$$typeof===Ci||t.$$typeof===Ii||t.$$typeof===Si||t.$$typeof===ki||t.$$typeof===Vp||t.$$typeof===xp||t[0]===Fp)};ae.typeOf=vt;ol.exports=ae;var jt={exports:{}},H={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var $p=Object.getOwnPropertySymbols,RI=Object.prototype.hasOwnProperty,NI=Object.prototype.propertyIsEnumerable;function OI(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function DI(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var PI=DI()?Object.assign:function(t,e){for(var n,r=OI(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)RI.call(n,o)&&(r[o]=n[o]);if($p){i=$p(n);for(var a=0;a<i.length;a++)NI.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cl=PI,gr=60103,qp=60106;H.Fragment=60107;H.StrictMode=60108;H.Profiler=60114;var zp=60109,Hp=60110,Gp=60112;H.Suspense=60113;var Kp=60115,Wp=60116;if(typeof Symbol=="function"&&Symbol.for){var _t=Symbol.for;gr=_t("react.element"),qp=_t("react.portal"),H.Fragment=_t("react.fragment"),H.StrictMode=_t("react.strict_mode"),H.Profiler=_t("react.profiler"),zp=_t("react.provider"),Hp=_t("react.context"),Gp=_t("react.forward_ref"),H.Suspense=_t("react.suspense"),Kp=_t("react.memo"),Wp=_t("react.lazy")}var Xp=typeof Symbol=="function"&&Symbol.iterator;function LI(t){return t===null||typeof t!="object"?null:(t=Xp&&t[Xp]||t["@@iterator"],typeof t=="function"?t:null)}function Ni(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qp={};function mr(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Yp}mr.prototype.isReactComponent={};mr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Ni(85));this.updater.enqueueSetState(this,t,e,"setState")};mr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jp(){}Jp.prototype=mr.prototype;function ll(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Yp}var ul=ll.prototype=new Jp;ul.constructor=ll;cl(ul,mr.prototype);ul.isPureReactComponent=!0;var hl={current:null},Zp=Object.prototype.hasOwnProperty,eg={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zp.call(e,r)&&!eg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];i.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:gr,type:t,key:s,ref:o,props:i,_owner:hl.current}}function MI(t,e){return{$$typeof:gr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fl(t){return typeof t=="object"&&t!==null&&t.$$typeof===gr}function UI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ng=/\/+/g;function dl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UI(""+t.key):e.toString(36)}function yo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case gr:case qp:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+dl(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(ng,"$&/")+"/"),yo(i,e,n,"",function(l){return l})):i!=null&&(fl(i)&&(i=MI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ng,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var c=r+dl(s,a);o+=yo(s,e,n,c,i)}else if(c=LI(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=r+dl(s,a++),o+=yo(s,e,n,c,i);else if(s==="object")throw e=""+t,Error(Ni(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function vo(t,e,n){if(t==null)return t;var r=[],i=0;return yo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xI(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var rg={current:null};function Bt(){var t=rg.current;if(t===null)throw Error(Ni(321));return t}var FI={ReactCurrentDispatcher:rg,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:hl,IsSomeRendererActing:{current:!1},assign:cl};H.Children={map:vo,forEach:function(t,e,n){vo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vo(t,function(){e++}),e},toArray:function(t){return vo(t,function(e){return e})||[]},only:function(t){if(!fl(t))throw Error(Ni(143));return t}};H.Component=mr;H.PureComponent=ll;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FI;H.cloneElement=function(t,e,n){if(t==null)throw Error(Ni(267,t));var r=cl({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Zp.call(e,c)&&!eg.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:gr,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Hp,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:zp,_context:t},t.Consumer=t};H.createElement=tg;H.createFactory=function(t){var e=tg.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:Gp,render:t}};H.isValidElement=fl;H.lazy=function(t){return{$$typeof:Wp,_payload:{_status:-1,_result:t},_init:xI}};H.memo=function(t,e){return{$$typeof:Kp,type:t,compare:e===void 0?null:e}};H.useCallback=function(t,e){return Bt().useCallback(t,e)};H.useContext=function(t,e){return Bt().useContext(t,e)};H.useDebugValue=function(){};H.useEffect=function(t,e){return Bt().useEffect(t,e)};H.useImperativeHandle=function(t,e,n){return Bt().useImperativeHandle(t,e,n)};H.useLayoutEffect=function(t,e){return Bt().useLayoutEffect(t,e)};H.useMemo=function(t,e){return Bt().useMemo(t,e)};H.useReducer=function(t,e,n){return Bt().useReducer(t,e,n)};H.useRef=function(t){return Bt().useRef(t)};H.useState=function(t){return Bt().useState(t)};H.version="17.0.2";jt.exports=H;var Oi=jt.exports;function VI(t){function e(R,S,A,j,p){for(var Y=0,w=0,ye=0,Q=0,te,B,Ne=0,Ye=0,G,Ve=G=te=0,J=0,Oe=0,Er=0,De=0,Mi=A.length,Tr=Mi-1,ht,U="",ve="",Mo="",Uo="",qt;J<Mi;){if(B=A.charCodeAt(J),J===Tr&&w+Q+ye+Y!==0&&(w!==0&&(B=w===47?10:47),Q=ye=Y=0,Mi++,Tr++),w+Q+ye+Y===0){if(J===Tr&&(0<Oe&&(U=U.replace(f,"")),0<U.trim().length)){switch(B){case 32:case 9:case 59:case 13:case 10:break;default:U+=A.charAt(J)}B=59}switch(B){case 123:for(U=U.trim(),te=U.charCodeAt(0),G=1,De=++J;J<Mi;){switch(B=A.charCodeAt(J)){case 123:G++;break;case 125:G--;break;case 47:switch(B=A.charCodeAt(J+1)){case 42:case 47:e:{for(Ve=J+1;Ve<Tr;++Ve)switch(A.charCodeAt(Ve)){case 47:if(B===42&&A.charCodeAt(Ve-1)===42&&J+2!==Ve){J=Ve+1;break e}break;case 10:if(B===47){J=Ve+1;break e}}J=Ve}}break;case 91:B++;case 40:B++;case 34:case 39:for(;J++<Tr&&A.charCodeAt(J)!==B;);}if(G===0)break;J++}switch(G=A.substring(De,J),te===0&&(te=(U=U.replace(h,"").trim()).charCodeAt(0)),te){case 64:switch(0<Oe&&(U=U.replace(f,"")),B=U.charCodeAt(1),B){case 100:case 109:case 115:case 45:Oe=S;break;default:Oe=_r}if(G=e(S,Oe,G,B,p+1),De=G.length,0<ct&&(Oe=n(_r,U,Er),qt=a(3,G,Oe,S,P,ze,De,B,p,j),U=Oe.join(""),qt!==void 0&&(De=(G=qt.trim()).length)===0&&(B=0,G="")),0<De)switch(B){case 115:U=U.replace($,o);case 100:case 109:case 45:G=U+"{"+G+"}";break;case 107:U=U.replace(C,"$1 $2"),G=U+"{"+G+"}",G=Xe===1||Xe===2&&s("@"+G,3)?"@-webkit-"+G+"@"+G:"@"+G;break;default:G=U+G,j===112&&(G=(ve+=G,""))}else G="";break;default:G=e(S,n(S,U,Er),G,j,p+1)}Mo+=G,G=Er=Oe=Ve=te=0,U="",B=A.charCodeAt(++J);break;case 125:case 59:if(U=(0<Oe?U.replace(f,""):U).trim(),1<(De=U.length))switch(Ve===0&&(te=U.charCodeAt(0),te===45||96<te&&123>te)&&(De=(U=U.replace(" ",":")).length),0<ct&&(qt=a(1,U,S,R,P,ze,ve.length,j,p,j))!==void 0&&(De=(U=qt.trim()).length)===0&&(U="\0\0"),te=U.charCodeAt(0),B=U.charCodeAt(1),te){case 0:break;case 64:if(B===105||B===99){Uo+=U+A.charAt(J);break}default:U.charCodeAt(De-1)!==58&&(ve+=i(U,te,B,U.charCodeAt(2)))}Er=Oe=Ve=te=0,U="",B=A.charCodeAt(++J)}}switch(B){case 13:case 10:w===47?w=0:1+te===0&&j!==107&&0<U.length&&(Oe=1,U+="\0"),0<ct*Mn&&a(0,U,S,R,P,ze,ve.length,j,p,j),ze=1,P++;break;case 59:case 125:if(w+Q+ye+Y===0){ze++;break}default:switch(ze++,ht=A.charAt(J),B){case 9:case 32:if(Q+Y+w===0)switch(Ne){case 44:case 58:case 9:case 32:ht="";break;default:B!==32&&(ht=" ")}break;case 0:ht="\\0";break;case 12:ht="\\f";break;case 11:ht="\\v";break;case 38:Q+w+Y===0&&(Oe=Er=1,ht="\f"+ht);break;case 108:if(Q+w+Y+wt===0&&0<Ve)switch(J-Ve){case 2:Ne===112&&A.charCodeAt(J-3)===58&&(wt=Ne);case 8:Ye===111&&(wt=Ye)}break;case 58:Q+w+Y===0&&(Ve=J);break;case 44:w+ye+Q+Y===0&&(Oe=1,ht+="\r");break;case 34:case 39:w===0&&(Q=Q===B?0:Q===0?B:Q);break;case 91:Q+w+ye===0&&Y++;break;case 93:Q+w+ye===0&&Y--;break;case 41:Q+w+Y===0&&ye--;break;case 40:if(Q+w+Y===0){if(te===0)switch(2*Ne+3*Ye){case 533:break;default:te=1}ye++}break;case 64:w+ye+Q+Y+Ve+G===0&&(G=1);break;case 42:case 47:if(!(0<Q+Y+ye))switch(w){case 0:switch(2*B+3*A.charCodeAt(J+1)){case 235:w=47;break;case 220:De=J,w=42}break;case 42:B===47&&Ne===42&&De+2!==J&&(A.charCodeAt(De+2)===33&&(ve+=A.substring(De,J+1)),ht="",w=0)}}w===0&&(U+=ht)}Ye=Ne,Ne=B,J++}if(De=ve.length,0<De){if(Oe=S,0<ct&&(qt=a(2,ve,Oe,R,P,ze,De,j,p,j),qt!==void 0&&(ve=qt).length===0))return Uo+ve+Mo;if(ve=Oe.join(",")+"{"+ve+"}",Xe*wt!=0){switch(Xe!==2||s(ve,2)||(wt=0),wt){case 111:ve=ve.replace(v,":-moz-$1")+ve;break;case 112:ve=ve.replace(k,"::-webkit-input-$1")+ve.replace(k,"::-moz-$1")+ve.replace(k,":-ms-input-$1")+ve}wt=0}}return Uo+ve+Mo}function n(R,S,A){var j=S.trim().split(g);S=j;var p=j.length,Y=R.length;switch(Y){case 0:case 1:var w=0;for(R=Y===0?"":R[0]+" ";w<p;++w)S[w]=r(R,S[w],A).trim();break;default:var ye=w=0;for(S=[];w<p;++w)for(var Q=0;Q<Y;++Q)S[ye++]=r(R[Q]+" ",j[w],A).trim()}return S}function r(R,S,A){var j=S.charCodeAt(0);switch(33>j&&(j=(S=S.trim()).charCodeAt(0)),j){case 38:return S.replace(b,"$1"+R.trim());case 58:return R.trim()+S.replace(b,"$1"+R.trim());default:if(0<1*A&&0<S.indexOf("\f"))return S.replace(b,(R.charCodeAt(0)===58?"":"$1")+R.trim())}return R+S}function i(R,S,A,j){var p=R+";",Y=2*S+3*A+4*j;if(Y===944){R=p.indexOf(":",9)+1;var w=p.substring(R,p.length-1).trim();return w=p.substring(0,R).trim()+w+";",Xe===1||Xe===2&&s(w,1)?"-webkit-"+w+w:w}if(Xe===0||Xe===2&&!s(p,1))return p;switch(Y){case 1015:return p.charCodeAt(10)===97?"-webkit-"+p+p:p;case 951:return p.charCodeAt(3)===116?"-webkit-"+p+p:p;case 963:return p.charCodeAt(5)===110?"-webkit-"+p+p:p;case 1009:if(p.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+p+p;case 978:return"-webkit-"+p+"-moz-"+p+p;case 1019:case 983:return"-webkit-"+p+"-moz-"+p+"-ms-"+p+p;case 883:if(p.charCodeAt(8)===45)return"-webkit-"+p+p;if(0<p.indexOf("image-set(",11))return p.replace($t,"$1-webkit-$2")+p;break;case 932:if(p.charCodeAt(4)===45)switch(p.charCodeAt(5)){case 103:return"-webkit-box-"+p.replace("-grow","")+"-webkit-"+p+"-ms-"+p.replace("grow","positive")+p;case 115:return"-webkit-"+p+"-ms-"+p.replace("shrink","negative")+p;case 98:return"-webkit-"+p+"-ms-"+p.replace("basis","preferred-size")+p}return"-webkit-"+p+"-ms-"+p+p;case 964:return"-webkit-"+p+"-ms-flex-"+p+p;case 1023:if(p.charCodeAt(8)!==99)break;return w=p.substring(p.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+w+"-webkit-"+p+"-ms-flex-pack"+w+p;case 1005:return m.test(p)?p.replace(d,":-webkit-")+p.replace(d,":-moz-")+p:p;case 1e3:switch(w=p.substring(13).trim(),S=w.indexOf("-")+1,w.charCodeAt(0)+w.charCodeAt(S)){case 226:w=p.replace(I,"tb");break;case 232:w=p.replace(I,"tb-rl");break;case 220:w=p.replace(I,"lr");break;default:return p}return"-webkit-"+p+"-ms-"+w+p;case 1017:if(p.indexOf("sticky",9)===-1)break;case 975:switch(S=(p=R).length-10,w=(p.charCodeAt(S)===33?p.substring(0,S):p).substring(R.indexOf(":",7)+1).trim(),Y=w.charCodeAt(0)+(w.charCodeAt(7)|0)){case 203:if(111>w.charCodeAt(8))break;case 115:p=p.replace(w,"-webkit-"+w)+";"+p;break;case 207:case 102:p=p.replace(w,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+p.replace(w,"-webkit-"+w)+";"+p.replace(w,"-ms-"+w+"box")+";"+p}return p+";";case 938:if(p.charCodeAt(5)===45)switch(p.charCodeAt(6)){case 105:return w=p.replace("-items",""),"-webkit-"+p+"-webkit-box-"+w+"-ms-flex-"+w+p;case 115:return"-webkit-"+p+"-ms-flex-item-"+p.replace(pe,"")+p;default:return"-webkit-"+p+"-ms-flex-line-pack"+p.replace("align-content","").replace(pe,"")+p}break;case 973:case 989:if(p.charCodeAt(3)!==45||p.charCodeAt(4)===122)break;case 931:case 953:if(Re.test(R)===!0)return(w=R.substring(R.indexOf(":")+1)).charCodeAt(0)===115?i(R.replace("stretch","fill-available"),S,A,j).replace(":fill-available",":stretch"):p.replace(w,"-webkit-"+w)+p.replace(w,"-moz-"+w.replace("fill-",""))+p;break;case 962:if(p="-webkit-"+p+(p.charCodeAt(5)===102?"-ms-"+p:"")+p,A+j===211&&p.charCodeAt(13)===105&&0<p.indexOf("transform",10))return p.substring(0,p.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+p}return p}function s(R,S){var A=R.indexOf(S===1?":":"{"),j=R.substring(0,S!==3?A:10);return A=R.substring(A+1,R.length-1),wr(S!==2?j:j.replace(Ee,"$1"),A,S)}function o(R,S){var A=i(S,S.charCodeAt(0),S.charCodeAt(1),S.charCodeAt(2));return A!==S+";"?A.replace(se," or ($1)").substring(4):"("+S+")"}function a(R,S,A,j,p,Y,w,ye,Q,te){for(var B=0,Ne=S,Ye;B<ct;++B)switch(Ye=ut[B].call(u,R,Ne,A,j,p,Y,w,ye,Q,te)){case void 0:case!1:case!0:case null:break;default:Ne=Ye}if(Ne!==S)return Ne}function c(R){switch(R){case void 0:case null:ct=ut.length=0;break;default:if(typeof R=="function")ut[ct++]=R;else if(typeof R=="object")for(var S=0,A=R.length;S<A;++S)c(R[S]);else Mn=!!R|0}return c}function l(R){return R=R.prefix,R!==void 0&&(wr=null,R?typeof R!="function"?Xe=1:(Xe=2,wr=R):Xe=0),l}function u(R,S){var A=R;if(33>A.charCodeAt(0)&&(A=A.trim()),br=A,A=[br],0<ct){var j=a(-1,S,A,A,P,ze,0,0,0,0);j!==void 0&&typeof j=="string"&&(S=j)}var p=e(_r,A,S,0,0);return 0<ct&&(j=a(-2,p,A,A,P,ze,p.length,0,0,0),j!==void 0&&(p=j)),br="",wt=0,ze=P=1,p}var h=/^\0+/g,f=/[\0\r\f]/g,d=/: */g,m=/zoo|gra/,y=/([,: ])(transform)/g,g=/,\r+?/g,b=/([\t\r\n ])*\f?&/g,C=/@(k\w+)\s*(\S*)\s*/,k=/::(place)/g,v=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,$=/\(\s*(.*)\s*\)/g,se=/([\s\S]*?);/g,pe=/-self|flex-/g,Ee=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Re=/stretch|:\s*\w+\-(?:conte|avail)/,$t=/([^-])(image-set\()/,ze=1,P=1,wt=0,Xe=1,_r=[],ut=[],ct=0,wr=null,Mn=0,br="";return u.use=c,u.set=l,t!==void 0&&l(t),u}var jI={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function BI(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var $I=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ig=BI(function(t){return $I.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),sg={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,pl=Ce?Symbol.for("react.element"):60103,gl=Ce?Symbol.for("react.portal"):60106,_o=Ce?Symbol.for("react.fragment"):60107,wo=Ce?Symbol.for("react.strict_mode"):60108,bo=Ce?Symbol.for("react.profiler"):60114,Eo=Ce?Symbol.for("react.provider"):60109,To=Ce?Symbol.for("react.context"):60110,ml=Ce?Symbol.for("react.async_mode"):60111,Io=Ce?Symbol.for("react.concurrent_mode"):60111,So=Ce?Symbol.for("react.forward_ref"):60112,ko=Ce?Symbol.for("react.suspense"):60113,qI=Ce?Symbol.for("react.suspense_list"):60120,Ao=Ce?Symbol.for("react.memo"):60115,Co=Ce?Symbol.for("react.lazy"):60116,zI=Ce?Symbol.for("react.block"):60121,HI=Ce?Symbol.for("react.fundamental"):60117,GI=Ce?Symbol.for("react.responder"):60118,KI=Ce?Symbol.for("react.scope"):60119;function at(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case pl:switch(t=t.type,t){case ml:case Io:case _o:case bo:case wo:case ko:return t;default:switch(t=t&&t.$$typeof,t){case To:case So:case Co:case Ao:case Eo:return t;default:return e}}case gl:return e}}}function og(t){return at(t)===Io}re.AsyncMode=ml;re.ConcurrentMode=Io;re.ContextConsumer=To;re.ContextProvider=Eo;re.Element=pl;re.ForwardRef=So;re.Fragment=_o;re.Lazy=Co;re.Memo=Ao;re.Portal=gl;re.Profiler=bo;re.StrictMode=wo;re.Suspense=ko;re.isAsyncMode=function(t){return og(t)||at(t)===ml};re.isConcurrentMode=og;re.isContextConsumer=function(t){return at(t)===To};re.isContextProvider=function(t){return at(t)===Eo};re.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===pl};re.isForwardRef=function(t){return at(t)===So};re.isFragment=function(t){return at(t)===_o};re.isLazy=function(t){return at(t)===Co};re.isMemo=function(t){return at(t)===Ao};re.isPortal=function(t){return at(t)===gl};re.isProfiler=function(t){return at(t)===bo};re.isStrictMode=function(t){return at(t)===wo};re.isSuspense=function(t){return at(t)===ko};re.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===_o||t===Io||t===bo||t===wo||t===ko||t===qI||typeof t=="object"&&t!==null&&(t.$$typeof===Co||t.$$typeof===Ao||t.$$typeof===Eo||t.$$typeof===To||t.$$typeof===So||t.$$typeof===HI||t.$$typeof===GI||t.$$typeof===KI||t.$$typeof===zI)};re.typeOf=at;sg.exports=re;var yl=sg.exports,WI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},XI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},YI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ag={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vl={};vl[yl.ForwardRef]=YI;vl[yl.Memo]=ag;function cg(t){return yl.isMemo(t)?ag:vl[t.$$typeof]||WI}var QI=Object.defineProperty,JI=Object.getOwnPropertyNames,lg=Object.getOwnPropertySymbols,ZI=Object.getOwnPropertyDescriptor,eS=Object.getPrototypeOf,ug=Object.prototype;function hg(t,e,n){if(typeof e!="string"){if(ug){var r=eS(e);r&&r!==ug&&hg(t,r,n)}var i=JI(e);lg&&(i=i.concat(lg(e)));for(var s=cg(t),o=cg(e),a=0;a<i.length;++a){var c=i[a];if(!XI[c]&&!(n&&n[c])&&!(o&&o[c])&&!(s&&s[c])){var l=ZI(e,c);try{QI(t,c,l)}catch{}}}}return t}var tS=hg;function Ot(){return(Ot=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var fg=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},_l=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!ol.exports.typeOf(t)},Ro=Object.freeze([]),ln=Object.freeze({});function Di(t){return typeof t=="function"}function dg(t){return t.displayName||t.name||"Component"}function wl(t){return t&&typeof t.styledComponentId=="string"}var yr=typeof process!="undefined"&&{}.SC_ATTR||"data-styled",bl=typeof window!="undefined"&&"HTMLElement"in window,nS=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY:!1),rS={};function Pi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var iS=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Pi(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var c=this.indexOfGroup(n+1),l=0,u=r.length;l<u;l++)this.tag.insertRule(c,r[l])&&(this.groupSizes[n]++,c++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),No=new Map,Oo=new Map,Li=1,Do=function(t){if(No.has(t))return No.get(t);for(;Oo.has(Li);)Li++;var e=Li++;return No.set(t,e),Oo.set(e,t),e},sS=function(t){return Oo.get(t)},oS=function(t,e){e>=Li&&(Li=e+1),No.set(t,e),Oo.set(e,t)},aS="style["+yr+'][data-styled-version="5.3.3"]',cS=new RegExp("^"+yr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),lS=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},uS=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(cS);if(a){var c=0|parseInt(a[1],10),l=a[2];c!==0&&(oS(l,c),lS(t,l,a[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},hS=function(){return typeof window!="undefined"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},pg=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var c=a.childNodes,l=c.length;l>=0;l--){var u=c[l];if(u&&u.nodeType===1&&u.hasAttribute(yr))return u}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(yr,"active"),r.setAttribute("data-styled-version","5.3.3");var o=hS();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},fS=function(){function t(n){var r=this.element=pg(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var c=s[o];if(c.ownerNode===i)return c}Pi(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),dS=function(){function t(n){var r=this.element=pg(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),pS=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),gg=bl,gS={isServer:!bl,useCSSOMInjection:!nS},Po=function(){function t(n,r,i){n===void 0&&(n=ln),r===void 0&&(r={}),this.options=Ot({},gS,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&bl&&gg&&(gg=!1,function(s){for(var o=document.querySelectorAll(aS),a=0,c=o.length;a<c;a++){var l=o[a];l&&l.getAttribute(yr)!=="active"&&(uS(s,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}t.registerId=function(n){return Do(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Ot({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new pS(o):s?new fS(o):new dS(o),new iS(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Do(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Do(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Do(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=sS(o);if(a!==void 0){var c=n.names.get(a),l=r.getGroup(o);if(c&&l&&c.size){var u=yr+".g"+o+'[id="'+a+'"]',h="";c!==void 0&&c.forEach(function(f){f.length>0&&(h+=f+",")}),s+=""+l+u+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),mS=/(a)(d)/gi,mg=function(t){return String.fromCharCode(t+(t>25?39:97))};function El(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=mg(e%52)+n;return(mg(e%52)+n).replace(mS,"$1-$2")}var vr=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},yg=function(t){return vr(5381,t)};function vg(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Di(n)&&!wl(n))return!1}return!0}var yS=yg("5.3.3"),vS=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&vg(e),this.componentId=n,this.baseHash=vr(yS,n),this.baseStyle=r,Po.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Ln(this.rules,e,n,r).join(""),a=El(vr(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var c=r(o,"."+a,void 0,i);n.insertRules(i,a,c)}s.push(a),this.staticRulesId=a}else{for(var l=this.rules.length,u=vr(this.baseHash,r.hash),h="",f=0;f<l;f++){var d=this.rules[f];if(typeof d=="string")h+=d;else if(d){var m=Ln(d,e,n,r),y=Array.isArray(m)?m.join(""):m;u=vr(u,y+f),h+=y}}if(h){var g=El(u>>>0);if(!n.hasNameForId(i,g)){var b=r(h,"."+g,void 0,i);n.insertRules(i,g,b)}s.push(g)}}return s.join(" ")},t}(),_S=/^\s*\/\/.*$/gm,wS=[":","[",".","#"];function bS(t){var e,n,r,i,s=t===void 0?ln:t,o=s.options,a=o===void 0?ln:o,c=s.plugins,l=c===void 0?Ro:c,u=new VI(a),h=[],f=function(y){function g(b){if(b)try{y(b+"}")}catch{}}return function(b,C,k,v,I,$,se,pe,Ee,Re){switch(b){case 1:if(Ee===0&&C.charCodeAt(0)===64)return y(C+";"),"";break;case 2:if(pe===0)return C+"/*|*/";break;case 3:switch(pe){case 102:case 112:return y(k[0]+C),"";default:return C+(Re===0?"/*|*/":"")}case-2:C.split("/*|*/}").forEach(g)}}}(function(y){h.push(y)}),d=function(y,g,b){return g===0&&wS.indexOf(b[n.length])!==-1||b.match(i)?y:"."+e};function m(y,g,b,C){C===void 0&&(C="&");var k=y.replace(_S,""),v=g&&b?b+" "+g+" { "+k+" }":k;return e=C,n=g,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(b||!g?"":g,v)}return u.use([].concat(l,[function(y,g,b){y===2&&b.length&&b[0].lastIndexOf(n)>0&&(b[0]=b[0].replace(r,d))},f,function(y){if(y===-2){var g=h;return h=[],g}}])),m.hash=l.length?l.reduce(function(y,g){return g.name||Pi(15),vr(y,g.name)},5381).toString():"",m}var _g=Oi.createContext();_g.Consumer;var wg=Oi.createContext(),ES=(wg.Consumer,new Po),Tl=bS();function bg(){return jt.exports.useContext(_g)||ES}function Eg(){return jt.exports.useContext(wg)||Tl}var TS=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Tl);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Pi(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Tl),this.name+e.hash},t}(),IS=/([A-Z])/,SS=/([A-Z])/g,kS=/^ms-/,AS=function(t){return"-"+t.toLowerCase()};function Tg(t){return IS.test(t)?t.replace(SS,AS).replace(kS,"-ms-"):t}var Ig=function(t){return t==null||t===!1||t===""};function Ln(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Ln(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Ig(t))return"";if(wl(t))return"."+t.styledComponentId;if(Di(t)){if(typeof(l=t)!="function"||l.prototype&&l.prototype.isReactComponent||!e)return t;var c=t(e);return Ln(c,e,n,r)}var l;return t instanceof TS?n?(t.inject(n,r),t.getName(r)):t:_l(t)?function u(h,f){var d,m,y=[];for(var g in h)h.hasOwnProperty(g)&&!Ig(h[g])&&(Array.isArray(h[g])&&h[g].isCss||Di(h[g])?y.push(Tg(g)+":",h[g],";"):_l(h[g])?y.push.apply(y,u(h[g],g)):y.push(Tg(g)+": "+(d=g,(m=h[g])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||d in jI?String(m).trim():m+"px")+";"));return f?[f+" {"].concat(y,["}"]):y}(t):t.toString()}var Sg=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Il(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Di(t)||_l(t)?Sg(Ln(fg(Ro,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Sg(Ln(fg(t,n)))}var kg=function(t,e,n){return n===void 0&&(n=ln),t.theme!==n.theme&&t.theme||e||n.theme},CS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,RS=/(^-|-$)/g;function Sl(t){return t.replace(CS,"-").replace(RS,"")}var Ag=function(t){return El(yg(t)>>>0)};function Lo(t){return typeof t=="string"&&!0}var kl=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},NS=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function OS(t,e,n){var r=t[n];kl(e)&&kl(r)?Cg(r,e):t[n]=e}function Cg(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(kl(o))for(var a in o)NS(a)&&OS(t,o[a],a)}return t}var Al=Oi.createContext();Al.Consumer;var Cl={};function Rg(t,e,n){var r=wl(t),i=!Lo(t),s=e.attrs,o=s===void 0?Ro:s,a=e.componentId,c=a===void 0?function(C,k){var v=typeof C!="string"?"sc":Sl(C);Cl[v]=(Cl[v]||0)+1;var I=v+"-"+Ag("5.3.3"+v+Cl[v]);return k?k+"-"+I:I}(e.displayName,e.parentComponentId):a,l=e.displayName,u=l===void 0?function(C){return Lo(C)?"styled."+C:"Styled("+dg(C)+")"}(t):l,h=e.displayName&&e.componentId?Sl(e.displayName)+"-"+e.componentId:e.componentId||c,f=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,d=e.shouldForwardProp;r&&t.shouldForwardProp&&(d=e.shouldForwardProp?function(C,k,v){return t.shouldForwardProp(C,k,v)&&e.shouldForwardProp(C,k,v)}:t.shouldForwardProp);var m,y=new vS(n,h,r?t.componentStyle:void 0),g=y.isStatic&&o.length===0,b=function(C,k){return function(v,I,$,se){var pe=v.attrs,Ee=v.componentStyle,Re=v.defaultProps,$t=v.foldedComponentIds,ze=v.shouldForwardProp,P=v.styledComponentId,wt=v.target,Xe=function(j,p,Y){j===void 0&&(j=ln);var w=Ot({},p,{theme:j}),ye={};return Y.forEach(function(Q){var te,B,Ne,Ye=Q;for(te in Di(Ye)&&(Ye=Ye(w)),Ye)w[te]=ye[te]=te==="className"?(B=ye[te],Ne=Ye[te],B&&Ne?B+" "+Ne:B||Ne):Ye[te]}),[w,ye]}(kg(I,jt.exports.useContext(Al),Re)||ln,I,pe),_r=Xe[0],ut=Xe[1],ct=function(j,p,Y,w){var ye=bg(),Q=Eg(),te=p?j.generateAndInjectStyles(ln,ye,Q):j.generateAndInjectStyles(Y,ye,Q);return te}(Ee,se,_r),wr=$,Mn=ut.$as||I.$as||ut.as||I.as||wt,br=Lo(Mn),R=ut!==I?Ot({},I,{},ut):I,S={};for(var A in R)A[0]!=="$"&&A!=="as"&&(A==="forwardedAs"?S.as=R[A]:(ze?ze(A,ig,Mn):!br||ig(A))&&(S[A]=R[A]));return I.style&&ut.style!==I.style&&(S.style=Ot({},I.style,{},ut.style)),S.className=Array.prototype.concat($t,P,ct!==P?ct:null,I.className,ut.className).filter(Boolean).join(" "),S.ref=wr,jt.exports.createElement(Mn,S)}(m,C,k,g)};return b.displayName=u,(m=Oi.forwardRef(b)).attrs=f,m.componentStyle=y,m.displayName=u,m.shouldForwardProp=d,m.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Ro,m.styledComponentId=h,m.target=r?t.target:t,m.withComponent=function(C){var k=e.componentId,v=function($,se){if($==null)return{};var pe,Ee,Re={},$t=Object.keys($);for(Ee=0;Ee<$t.length;Ee++)pe=$t[Ee],se.indexOf(pe)>=0||(Re[pe]=$[pe]);return Re}(e,["componentId"]),I=k&&k+"-"+(Lo(C)?C:Sl(dg(C)));return Rg(C,Ot({},v,{attrs:f,componentId:I}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?Cg({},t.defaultProps,C):C}}),m.toString=function(){return"."+m.styledComponentId},i&&tS(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Ng=function(t){return function e(n,r,i){if(i===void 0&&(i=ln),!ol.exports.isValidElementType(r))return Pi(1,String(r));var s=function(){return n(r,i,Il.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Ot({},i,{},o))},s.attrs=function(o){return e(n,r,Ot({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Rg,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Ng[t]=Ng(t)});var DS=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=vg(n),Po.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(Ln(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&Po.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function PS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Il.apply(void 0,[t].concat(n)),s="sc-global-"+Ag(JSON.stringify(i)),o=new DS(i,s);function a(l){var u=bg(),h=Eg(),f=jt.exports.useContext(Al),d=jt.exports.useRef(u.allocateGSInstance(s)).current;return u.server&&c(d,l,u,f,h),jt.exports.useLayoutEffect(function(){if(!u.server)return c(d,l,u,f,h),function(){return o.removeStyles(d,u)}},[d,l,u,f,h]),null}function c(l,u,h,f,d){if(o.isStatic)o.renderStyles(l,rS,h,d);else{var m=Ot({},u,{theme:kg(u,f,a.defaultProps)});o.renderStyles(l,m,h,d)}}return Oi.memo(a)}var Og=globalThis&&globalThis.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},LS=Il(Dg||(Dg=Og([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`]))),uk=PS(Pg||(Pg=Og(["",""],["",""])),LS),Dg,Pg;export{lk as $,FS as A,tt as B,qS as C,ft as D,Z as E,K as F,pt as G,gt as H,dt as I,lt as J,QS as K,Yt as L,YS as M,zS as N,xg as O,US as P,bt as Q,HS as R,Gt as S,Gi as T,$S as U,GS as V,KS as W,rm as X,xn as Y,BS as Z,xS as _,ie as a,ck as a0,ak as a1,rk as a2,ok as a3,XS as a4,WS as a5,sa as a6,ZS as a7,JS as a8,ik as a9,sk as aa,nk as ab,OE as ac,zg as ad,ji as ae,W as af,uk as ag,ek as ah,tk as ai,q as b,ce as c,N as d,oe as e,fe as f,mt as g,un as h,Ht as i,jl as j,Et as k,Un as l,Bl as m,It as n,Bo as o,Fn as p,Yg as q,Cr as r,Dt as s,nt as t,ge as u,$o as v,Rr as w,le as x,jS as y,VS as z};
