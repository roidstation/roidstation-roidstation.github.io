"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[537],{81260:(he,Z,T)=>{T.d(Z,{f8:()=>Ke});var j=T(34413);const R=[".",",","\u0431","\u044e"],z="\xa0",F="\u2013",Y="\u2014",M="-",N="\u2212",y=[":","."];function $(e,t,n){const s=Math.min(Number(n),Math.max(Number(t),Number(e)));return e instanceof Date?new Date(s):s}const re=/[\\^$.*+?()[\]{}|]/g,Pe=new RegExp(re.source);function m(e){return e&&Pe.test(e)?e.replace(re,"\\$&"):e}function x(e){return e}function $e(e){const t=new RegExp(`${m(e)}$`);return e?({value:n,selection:s},r)=>{if(!n&&!r.value.endsWith(e))return{value:n,selection:s};if(!n.endsWith(e)&&!r.value.endsWith(e))return{selection:s,value:n+e};const o=r.value.replace(t,""),i=r.selection[1]>=o.length,c=function _e(e,t){let n="";for(let s=0;s<e.length;s++){if(e[s]!==t[s])return n;n+=e[s]}return n}(o,n);return{selection:s,value:Array.from(e).reverse().reduce((u,l,a)=>{const g=u.length-1-a,d=c[g]===l&&i;return u[g]!==l||d?u.slice(0,g+1)+l+u.slice(g+1):u},n)}}:x}function Se(e){return e?({value:t,selection:n},s)=>{if(t.startsWith(e)||!t&&!s.value.startsWith(e))return{value:t,selection:n};const[r,o]=n,i=Array.from(e).reduce((u,l,a)=>u[a]===l?u:u.slice(0,a)+l+u.slice(a),t),c=i.length-t.length;return{selection:[r+c,o+c],value:i}}:x}function A(e,t,n){return(s,r)=>{const o=()=>t(s,r);return s.addEventListener(e,o,n),()=>s.removeEventListener(e,o,n)}}new RegExp(`[${y.map(m).join("")}]$`);function de({decimalSeparator:e,isNegativeAllowed:t,precision:n,thousandSeparator:s,prefix:r,postfix:o,decimalPseudoSeparators:i=[],pseudoMinuses:c=[]}){const u=fe(r),l="\\d",a=t?`[${N}${c.map(p=>`\\${p}`).join("")}]?`:"",g=s?`[${l}${m(s).replace(/\s/g,"\\s")}]*`:`[${l}]*`,d=n>0?`([${m(e)}${i.map(m).join("")}]${l}{0,${Number.isFinite(n)?n:""}})?`:"",f=fe(o);return new RegExp(`^${u}${a}${g}${d}${f}$`)}function fe(e){return e?`${e.split("").map(t=>`${m(t)}?`).join("")}`:""}function Q(e,t="."){const n=!!e.match(new RegExp(`^\\D*[${N}\\${M}${F}${Y}]`)),s=e.replace(new RegExp(`[^\\d${m(t)}]`,"g"),"").replace(t,".");return s?Number((n?M:"")+s):NaN}function Le({decimalSeparator:e,precision:t,decimalZeroPadding:n,postfix:s}){if(t<=0||!n)return x;const r=new RegExp(`${m(s)}$`);return({value:o,selection:i})=>{if(Number.isNaN(Q(o,e)))return{value:o,selection:i};const[c,u=""]=o.replace(r,"").split(e);return{value:c+e+u.padEnd(t,"0")+s,selection:i}}}function ke({decimalSeparator:e,decimalPseudoSeparators:t,pseudoMinuses:n}){let s=!0;const r=de({decimalSeparator:e,decimalPseudoSeparators:t,pseudoMinuses:n,prefix:"",postfix:"",thousandSeparator:"",precision:1/0,isNegativeAllowed:!0});return({elementState:o,data:i})=>s?(s=!1,{elementState:(0,j.CV)(o,{mask:r}),data:i}):{elementState:o,data:i}}function Ve({min:e,max:t,decimalSeparator:n}){return({value:s,selection:r})=>{const o=Q(s,n),i=o>0?Math.min(o,t):Math.max(o,e);if(!Number.isNaN(o)&&i!==o){const c=`${i}`.replace(".",n).replace(M,N);return{value:c,selection:[c.length,c.length]}}return{value:s,selection:r}}}function Be({decimalSeparator:e,thousandSeparator:t,decimalZeroPadding:n}){return({elementState:s,data:r},o)=>{const{value:i,selection:c}=s,[u,l]=c,a=i.slice(u,l),g=n?[e,t]:[t],d=n&&u>i.indexOf(e)&&!!a.match(/^0+$/gi);return"deleteBackward"!==o&&"deleteForward"!==o||!g.includes(a)&&!d?{elementState:s,data:r}:{elementState:{value:i,selection:"deleteForward"===o?[l,l]:[u,u]},data:r}}}function We({decimalSeparator:e,precision:t}){const n=new RegExp(`^\\D*${m(e)}`);return({elementState:s,data:r})=>{const{value:o,selection:i}=s,[c]=i;if(t<=0||o.includes(e)||!r.match(n))return{elementState:s,data:r};return{elementState:s,data:o.slice(0,c).match(/\d+/)?r:`0${r}`}}}function pe(e,t){const n=new RegExp(`[${t.join("")}]`,"gi");return({elementState:s,data:r})=>{const{value:o,selection:i}=s;return{elementState:{selection:i,value:o.replace(n,e)},data:r.replace(n,e)}}}function Ge(e){return({elementState:t,data:n})=>{const{value:s,selection:r}=t,[o,i]=r;return{elementState:t,data:!s.includes(e)||s.slice(o,i+1).includes(e)?n:n.replace(new RegExp(m(e),"gi"),"")}}}function Ue({thousandSeparator:e,decimalSeparator:t,prefix:n,postfix:s}){if(!e)return x;const r=new RegExp(`^${m(n)}${N}?`),o=new RegExp(`${m(s)}$`);return({value:c,selection:u})=>{const[l,a=""]=c.split(t),[g,d]=u;let[f,p]=u;const h=l.replace(r,"").replace(o,""),[v=""]=l.match(r)||[],[E=""]=l.match(o)||[],P=Array.from(h).reduceRight((b,_,w)=>{const q=!(!w&&_===e)&&b.length&&(b.length+1)%4==0;return q&&(_===e||((...c)=>c.every(u=>/\s/.test(u)))(_,e))?e+b:_!==e||q?q?(w<=g&&f++,w<=d&&p++,_+e+b):_+b:(w&&w<=g&&f--,w&&w<=d&&p--,b)},"");return{value:v+P+E+(c.includes(t)?t:"")+a,selection:[f,p]}}}function He(e,t){if(e>0)return x;const n=new RegExp(`${m(t)}.*$`,"g");return({elementState:s,data:r})=>{const{value:o,selection:i}=s,[c,u]=i,l=o.replace(n,"");return{elementState:{selection:[Math.min(c,l.length),Math.min(u,l.length)],value:l},data:r.replace(n,"")}}}const ve=[0,0];function Ze(e,t){const n=function Fe(e,t){const n=r=>{const o=m(t);return r.replace(new RegExp(`^(\\D+)?[0${o}]+(?=0)`),"$1").replace(new RegExp(`^(\\D+)?[0${o}]+(?=[1-9])`),"$1")},s=(r,o)=>{const i=r.slice(0,o),c=r.slice(o).startsWith("0");return i.length-n(i).length+(c?1:0)};return({value:r,selection:o})=>{const[i,c]=o,u=r.includes(e),[l,a=""]=r.split(e),g=n(l);if(l===g)return{value:r,selection:o};const d=i-s(r,i),f=c-s(r,c);return{value:g+(u?e:"")+a,selection:[Math.max(d,0),Math.max(f,0)]}}}(e,t);return A("blur",s=>{const r=n({value:s.value,selection:ve},{value:"",selection:ve}).value;s.value!==r&&(s.value=r,s.dispatchEvent(new Event("input")))},{capture:!0})}function ze({min:e,max:t,decimalSeparator:n}){return A("blur",(s,r)=>{const o=Q(s.value,n),i=$(o,e,t);!Number.isNaN(o)&&o!==i&&(s.value=(0,j.CV)(function Me(e){const t=String(e),[n,s]=t.split("e-");let r=t;if(s){const[,o]=n.split("."),i=Number(s)+((null==o?void 0:o.length)||0);r=e.toFixed(i)}return r}(i),r),s.dispatchEvent(new Event("input")))},{capture:!0})}function Ye(e){return A("blur",t=>{const n=t.value.replace(new RegExp(`^(\\D+)?${m(e)}`),`$10${e}`);n!==t.value&&(t.value=n,t.dispatchEvent(new Event("input")))},{capture:!0})}function Ke({max:e=Number.MAX_SAFE_INTEGER,min:t=Number.MIN_SAFE_INTEGER,precision:n=0,thousandSeparator:s=z,decimalSeparator:r=".",decimalPseudoSeparators:o,decimalZeroPadding:i=!1,prefix:c="",postfix:u=""}={}){const l=[M,F,Y].filter(g=>g!==s&&g!==r),a=function ye({decimalSeparator:e,thousandSeparator:t,decimalPseudoSeparators:n=R}){return n.filter(s=>s!==t&&s!==e)}({decimalSeparator:r,thousandSeparator:s,decimalPseudoSeparators:o});return Object.assign(Object.assign({},j.A_),{mask:de({decimalSeparator:r,precision:n,thousandSeparator:s,prefix:c,postfix:u,isNegativeAllowed:t<0}),preprocessors:[ke({decimalSeparator:r,decimalPseudoSeparators:a,pseudoMinuses:l}),pe(N,l),pe(r,a),We({decimalSeparator:r,precision:n}),Be({decimalSeparator:r,decimalZeroPadding:i,thousandSeparator:s}),He(n,r),Ge(r)],postprocessors:[Ve({decimalSeparator:r,min:t,max:e}),Se(c),$e(u),Ue({decimalSeparator:r,thousandSeparator:s,prefix:c,postfix:u}),Le({decimalSeparator:r,decimalZeroPadding:i,precision:n,postfix:u})],plugins:[Ze(r,s),Ye(r),ze({min:t,max:e,decimalSeparator:r})],overwriteMode:i?({value:g,selection:[d]})=>d<=g.indexOf(r)?"shift":"replace":"shift"})}},82785:(he,Z,T)=>{T.d(Z,{C:()=>C});var R,j=T(19212);class C{transform(O){return parseFloat(O.toString().replace(/\s/g,""))}}(R=C).\u0275fac=function(O){return new(O||R)},R.\u0275pipe=j.Yjl({name:"stripSpaces",type:R,pure:!0,standalone:!0})}}]);