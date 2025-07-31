import{l as w,p as f,m as B,a as x,c as A}from"./BiLdCT7w.js";import{e as K,i as O,a as P}from"./DT6MbhOo.js";import{o as D,q as E,I as F,ac as G,ad as y,h as W,g as m,ae as H,l as J,af as L,ag as M,p as Q,t as z,a as R,s as T,c as U,K as V,r as X,i as Y}from"./Dc9Cd6uL.js";import{b as N}from"./aor5dgAF.js";function Z(a,e,t,o,r){var i;D&&E();var s=(i=e.$$slots)==null?void 0:i[t],n=!1;s===!0&&(s=e.children,n=!0),s===void 0||s(a,n?()=>o:o)}function $(a=!1){const e=F,t=e.l.u;if(!t)return;let o=()=>H(e.s);if(a){let r=0,s={};const n=M(()=>{let i=!1;const d=e.s;for(const c in d)d[c]!==s[c]&&(s[c]=d[c],i=!0);return i&&r++,r});o=()=>m(n)}t.b.length&&G(()=>{C(e,o),y(t.b)}),W(()=>{const r=J(()=>t.m.map(L));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&W(()=>{C(e,o),y(t.a)})}function C(a,e){if(a.l.s)for(const t of a.l.s)m(t);e()}/**
 * @license lucide-svelte v0.511.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const ee={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var te=B("<svg><!><!></svg>");function ie(a,e){const t=w(e,["children","$$slots","$$events","$$legacy"]),o=w(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Q(e,!1);let r=f(e,"name",8,void 0),s=f(e,"color",8,"currentColor"),n=f(e,"size",8,24),i=f(e,"strokeWidth",8,2),d=f(e,"absoluteStrokeWidth",8,!1),c=f(e,"iconNode",24,()=>[]);const I=(...u)=>u.filter((l,_,g)=>!!l&&g.indexOf(l)===_).join(" ");$();var h=te();let v;var b=U(h);K(b,1,c,O,(u,l)=>{let _=()=>m(l)[0],g=()=>m(l)[1];var k=A(),j=Y(k);P(j,_,!0,(q,se)=>{let p;z(()=>p=N(q,p,{...g()}))}),x(u,k)});var S=T(b);Z(S,e,"default",{}),X(h),z((u,l)=>v=N(h,v,{...ee,...o,width:n(),height:n(),stroke:s(),"stroke-width":u,class:l}),[()=>d()?Number(i())*24/Number(n()):i(),()=>I("lucide-icon","lucide",r()?`lucide-${r()}`:"",t.class)],V),x(a,h),R()}export{ie as I,$ as i,Z as s};
