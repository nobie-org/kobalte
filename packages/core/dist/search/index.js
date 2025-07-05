import { b, f, g, h, c as c$1, d, e as e$2, i } from '../chunk/7OPHSCIV.js';
export { b as Content, f as Control, g as HiddenSelect, h as Icon, c as Input, d as Listbox, e as Portal } from '../chunk/7OPHSCIV.js';
import { b as b$1, c as c$2, e as e$1, g as g$1 } from '../chunk/QRPJCKPG.js';
export { b as Item, c as ItemDescription, e as ItemLabel, g as Section } from '../chunk/QRPJCKPG.js';
import { c } from '../chunk/U4KVQHPL.js';
export { c as Arrow } from '../chunk/U4KVQHPL.js';
import { a } from '../chunk/PXHAVOZL.js';
export { a as Label } from '../chunk/PXHAVOZL.js';
import { e } from '../chunk/63IHFG6C.js';
export { e as Description } from '../chunk/63IHFG6C.js';
import { a as a$1 } from '../chunk/2B777EKY.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { createContext, useContext, splitProps, Show, createSignal, createEffect, createMemo } from 'solid-js';

var u=createContext();function n(){let o=useContext(u);if(o===void 0)throw new Error("[kobalte]: `useSearchContext` must be used within a `Search` component");return o}function R(o){let[e,r]=splitProps(o,["loadingComponent"]),t=n();return createComponent(a$1,mergeProps({as:"span","aria-hidden":"true"},r,{get children(){return createComponent(Show,{get when(){return t.isLoadingSuggestions()===!1||!e.loadingComponent},get fallback(){return e.loadingComponent},get children(){return o.children}})}}))}function _(o){let e=n();return createComponent(Show,{get when(){return e.noResult()},get children(){return createComponent(a$1,mergeProps({as:"div"},o))}})}var L=()=>{let o=0,e=0,r;return {debounce:t=>(e>Date.now()-o&&clearTimeout(r),r=setTimeout(t,o),e=Date.now(),r),setDebounceMillisecond:(t=0)=>{o=t;}}};function F(o){let[e,r,t]=splitProps(o,["options","value","defaultValue","onChange","multiple","onInputChange","debounceOptionsMillisecond"],["defaultFilter"]),[O,a]=createSignal(!1),[y,N]=createSignal(),s=L();createEffect(()=>s.setDebounceMillisecond(e.debounceOptionsMillisecond));let k=i=>{if(e.onInputChange===void 0)return;a(!0);let A=s.debounce(async()=>{await e.onInputChange(i),a(!1);});N(A);},E=createMemo(()=>e.value!=null?e.multiple?e.value:[e.value]:e.value),B=createMemo(()=>e.defaultValue!=null?e.multiple?e.defaultValue:[e.defaultValue]:e.defaultValue),H=i=>{clearTimeout(y()),a(!1),e.multiple?e.onChange?.(i??[]):e.onChange?.(i[0]??null);},j={noResult:()=>e.options.length===0,isLoadingSuggestions:O};return createComponent(u.Provider,{value:j,get children(){return createComponent(i,mergeProps({closeOnSelection:!0,shouldFocusWrap:!0,noResetInputOnBlur:!0,allowsEmptyCollection:!0,get options(){return e.options},get value(){return E()},get defaultValue(){return B()},onInputChange:k,defaultFilter:()=>!0,onChange:H,get selectionMode(){return e.multiple?"multiple":"single"}},t))}})}var Be=Object.assign(F,{Arrow:c,Content:b,Control:f,Description:e,HiddenSelect:g,Icon:h,Input:c$1,Item:b$1,ItemDescription:c$2,ItemLabel:e$1,Label:a,Listbox:d,Portal:e$2,Section:g$1,NoResult:_,Indicator:R});

export { R as Indicator, _ as NoResult, F as Root, Be as Search, n as useSearchContext };
