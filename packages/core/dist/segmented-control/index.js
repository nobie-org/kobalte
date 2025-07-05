import { d, e as e$1, f, h, i, a as a$2, k, b } from '../chunk/LDQJV5PJ.js';
export { d as ItemControl, e as ItemDescription, f as ItemIndicator, h as ItemLabel, i as Label } from '../chunk/LDQJV5PJ.js';
import { a as a$3 } from '../chunk/3USQYRTZ.js';
import { a } from '../chunk/DBH56JRW.js';
export { a as ErrorMessage } from '../chunk/DBH56JRW.js';
import { e } from '../chunk/63IHFG6C.js';
export { e as Description } from '../chunk/63IHFG6C.js';
import { a as a$1 } from '../chunk/2B777EKY.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { createContext, useContext, splitProps, createSignal, createEffect, on, batch, mergeProps as mergeProps$1 } from 'solid-js';
import { combineStyle } from '@solid-primitives/props';
import { createResizeObserver } from '@solid-primitives/resize-observer';
import { mergeRefs } from '@kobalte/utils';

var u=createContext();function c(){let t=useContext(u);if(t===void 0)throw new Error("[kobalte]: `useSegmentedControlContext` must be used within a `SegmentedControl` component");return t}function v(t){let o=c(),[a,n]=splitProps(t,["style"]),[m,s]=createSignal(),[i,e]=createSignal(!1),p=()=>{let r=o.selectedItem();if(!r){s(void 0);return}s({width:`${r.offsetWidth}px`,height:`${r.offsetHeight}px`,transform:l(r),"transition-duration":i()?"0ms":void 0});},l=r=>{let d=getComputedStyle(r.parentElement),F=r.offsetLeft-Number.parseFloat(d.paddingLeft),V=r.offsetTop-Number.parseFloat(d.paddingTop);return `translate(${F}px, ${V}px)`};return createEffect(on(o.selectedItem,()=>{e(!m()),p(),e(!1);})),createResizeObserver(o.root,()=>{batch(()=>{e(!0),p(),e(!1);});}),createComponent(a$1,mergeProps({as:"div",role:"presentation",get style(){return combineStyle(m(),a.style)},get"data-resizing"(){return i()},get"data-orientation"(){return o.orientation()}},n))}var G=t=>{let o=a$2(),a=c(),[n,m]=splitProps(t,["ref"]),[s,i]=createSignal();return createEffect(()=>{let e=s();e&&o.isSelectedValue(t.value)&&a.setSelectedItem(e);}),createComponent(k.Item,mergeProps({ref(e){let p=mergeRefs(i,n.ref);typeof p=="function"&&p(e);}},m))};var E=t=>{let o=b(),[a,n]=splitProps(t,["ref"]),[m,s]=createSignal();return a$3(m,()=>{requestAnimationFrame(()=>{o.isDefault()&&o.select();});}),createComponent(k.ItemInput,mergeProps({ref(i){let e=mergeRefs(s,a.ref);typeof e=="function"&&e(i);}},n))};var w=t=>{let o=mergeProps$1({defaultValue:t.value,orientation:"horizontal"},t),[a,n]=splitProps(o,["ref"]),[m,s]=createSignal(),[i,e]=createSignal(),p={value:()=>n.value,defaultValue:()=>n.defaultValue,orientation:()=>n.orientation,root:m,selectedItem:i,setSelectedItem:e};return createEffect(()=>{p.value()||e(void 0);}),createComponent(u.Provider,{value:p,get children(){return createComponent(k,mergeProps({ref(l){let r=mergeRefs(s,a.ref);typeof r=="function"&&r(l);}},n))}})};var We=Object.assign(w,{Description:e,ErrorMessage:a,Indicator:v,Item:G,ItemControl:d,ItemDescription:e$1,ItemIndicator:f,ItemInput:E,ItemLabel:h,Label:i});

export { v as Indicator, G as Item, E as ItemInput, w as Root, We as SegmentedControl, c as useSegmentedControlContext };
