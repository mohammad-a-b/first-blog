const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DjW5RY_n.js","./C7wWr3zd.js","./entry.DxMeCjnI.css","./CarKtOh_.js"])))=>i.map(i=>d[i]);
import{f as v,g as p,j as g,l as T,a0 as F,c as d,G as f,a1 as U,a2 as W,_ as Q}from"./C7wWr3zd.js";import{t as q}from"./CarKtOh_.js";const G=["fill"],ve={__name:"Bookmark",props:{filled:{type:Boolean,default:!1}},setup(e){return(t,r)=>(p(),v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:e.filled?"currentColor":"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-bookmark"},r[0]||(r[0]=[g("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"},null,-1)]),8,G))}},H={},K={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};function Y(e,t){return p(),v("svg",K,t[0]||(t[0]=[g("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},null,-1),g("line",{x1:"16",y1:"2",x2:"16",y2:"6"},null,-1),g("line",{x1:"8",y1:"2",x2:"8",y2:"6"},null,-1),g("line",{x1:"3",y1:"10",x2:"21",y2:"10"},null,-1)]))}const pe=T(H,[["render",Y]]),z={},J={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};function Z(e,t){return p(),v("svg",J,t[0]||(t[0]=[g("path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"},null,-1)]))}const ke=T(z,[["render",Z]]),X={},ee={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};function te(e,t){return p(),v("svg",ee,t[0]||(t[0]=[g("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},null,-1),g("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"},null,-1)]))}const $e=T(X,[["render",te]]),Te=e=>new Date(e).toLocaleDateString("fa-IR",{year:"numeric",month:"long",day:"numeric"}),xe=e=>{var t;return((t=e.meta)==null?void 0:t.readingTime)||1},ne=e=>{if(!e)return[];const t=new Set;return e.forEach(r=>{var o;return(o=r.tags)==null?void 0:o.forEach(l=>t.add(l))}),Array.from(t).sort()},re=e=>e?[...new Set(e.map(t=>{var r;return(r=t.meta)==null?void 0:r.category}).filter(Boolean))].sort():[],oe=(e,t,r)=>t?e:e==null?void 0:e.slice(0,r),se=(e,t)=>Math.max(0,((e==null?void 0:e.length)||0)-t),E={newest:(e,t)=>new Date(t.date)-new Date(e.date),oldest:(e,t)=>new Date(e.date)-new Date(t.date),title:(e,t)=>e.title.localeCompare(t.title),popular:(e,t)=>new Date(t.date)-new Date(e.date)},A={bookmarks:"bookmarkedPosts"},Ce=F("blog",()=>{const e=d(""),t=d("newest"),r=d("grid"),o=d(null),l=d(null),n=d(!1),a=d(5),i=d([]),u=d([]),w=d(null),D=()=>{{const s=localStorage.getItem(A.bookmarks);s&&(i.value=JSON.parse(s))}},N=s=>{w.value=s},x=s=>{var c,h;return typeof s=="string"?s:s&&typeof s=="object"?s.id||s._id||s.slug||((c=s.path)==null?void 0:c.replace(/^\/blog\//,""))||((h=s._path)==null?void 0:h.replace(/^\/blog\//,"")):(console.error("Invalid post or slug provided:",s),"")},C=s=>{const c=x(s);return c?i.value.includes(c):!1},I=s=>{const c=x(s);if(!c)return;const h=i.value.indexOf(c);h>-1?i.value.splice(h,1):i.value.push(c),localStorage.setItem(A.bookmarks,JSON.stringify(i.value))},k=f(()=>{if(!u.value)return[];const s=e.value.toLowerCase();return u.value.filter(c=>{var S,b,B;const h=!e.value||c.title.toLowerCase().includes(s)||((S=c.description)==null?void 0:S.toLowerCase().includes(s)),V=!o.value||((b=c.tags)==null?void 0:b.includes(o.value)),M=!l.value||((B=c.meta)==null?void 0:B.category)===l.value,P=t.value!=="popular"||C(c);return h&&V&&M&&P})}),L=f(()=>k.value?[...k.value].sort(E[t.value]||E.newest):[]),$=f(()=>ne(u.value)),R=f(()=>re(u.value)),O=f(()=>oe($.value,n.value,a.value)),j=f(()=>se($.value,a.value));return{searchQuery:e,sortOption:t,viewType:r,selectedTag:o,selectedCategory:l,showAllTags:n,maxVisibleTags:a,bookmarkedPosts:i,allPosts:u,isDarkMode:w,filteredPosts:k,sortedFilteredPosts:L,allTags:$,allCategories:R,visibleTags:O,remainingTagsCount:j,initBookmarks:D,initDarkMode:N,setAllPosts:s=>{u.value=s},isBookmarked:C,toggleBookmark:I,toggleShowAllTags:()=>{n.value=!n.value},setViewType:s=>{r.value=s},setSearchQuery:s=>{e.value=s},setSortOption:s=>{t.value=s},toggleTag:s=>{o.value=o.value===s?null:s},toggleCategory:s=>{l.value=l.value===s?null:s},resetFilters:()=>{e.value="",o.value=null,l.value=null}}}),y=(e,t)=>{const r=e._conditions;return r.length>0?`(${r.join(` ${t} `)})`:""},_=e=>{const t=[],r={_conditions:t,where(o,l,n){let a;switch(l.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(n)){const i=n.map(u=>m(u)).join(", ");a=`"${String(o)}" ${l.toUpperCase()} (${i})`}else throw new TypeError(`Value for ${l} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(n)&&n.length===2)a=`"${String(o)}" ${l.toUpperCase()} ${m(n[0])} AND ${m(n[1])}`;else throw new Error(`Value for ${l} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":a=`"${String(o)}" ${l.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":a=`"${String(o)}" ${l.toUpperCase()} ${m(n)}`;break;default:a=`"${String(o)}" ${l} ${m(typeof n=="boolean"?Number(n):n)}`}return t.push(`${a}`),r},andWhere(o){const l=o(_());return t.push(y(l,"AND")),r},orWhere(o){const l=o(_());return t.push(y(l,"OR")),r}};return r},ae=(e,t)=>{const r={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},o={__params:r,andWhere(n){const a=n(_());return r.conditions.push(y(a,"AND")),o},orWhere(n){const a=n(_());return r.conditions.push(y(a,"OR")),o},path(n){return o.where("path","=",U(n))},skip(n){return r.offset=n,o},where(n,a,i){return o.andWhere(u=>u.where(String(n),a,i)),o},limit(n){return r.limit=n,o},select(...n){return n.length&&r.selectedFields.push(...n),o},order(n,a){return r.orderBy.push(`"${String(n)}" ${a}`),o},async all(){return t(e,l()).then(n=>n||[])},async first(){return t(e,l({limit:1})).then(n=>n[0]||null)},async count(n="*",a=!1){return t(e,l({count:{field:String(n),distinct:a}})).then(i=>i[0].count)}};function l(n={}){let a="SELECT ";if(n!=null&&n.count)a+=`COUNT(${n.count.distinct?"DISTINCT ":""}${n.count.field}) as count`;else{const u=Array.from(new Set(r.selectedFields));a+=u.length>0?u.map(w=>`"${String(w)}"`).join(", "):"*"}a+=` FROM ${q[String(e)]}`,r.conditions.length>0&&(a+=` WHERE ${r.conditions.join(" AND ")}`),r.orderBy.length>0?a+=` ORDER BY ${r.orderBy.join(", ")}`:a+=" ORDER BY stem ASC";const i=(n==null?void 0:n.limit)||r.limit;return i>0&&(r.offset>0?a+=` LIMIT ${i} OFFSET ${r.offset}`:a+=` LIMIT ${i}`),a}return o};function m(e){return`'${String(e).replace(/'/g,"''")}'`}const Se=e=>{var r,o;const t=(o=(r=W())==null?void 0:r.ssrContext)==null?void 0:o.event;return ae(e,(l,n)=>le(t,l,n))};async function le(e,t,r){return ie(t,r)}async function ie(e,t){return await Q(()=>import("./DjW5RY_n.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(o=>o.loadDatabaseAdapter(e)).then(o=>o.all(t))}export{ve as _,pe as a,ke as b,xe as c,$e as d,Te as f,Se as q,Ce as u};
