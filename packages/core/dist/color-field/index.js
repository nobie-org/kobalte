import { b, c } from '../chunk/JWBTKG54.js';
import { b as b$1 } from '../chunk/Q73XX7CS.js';
import { a as a$1 } from '../chunk/PXHAVOZL.js';
export { a as Label } from '../chunk/PXHAVOZL.js';
import { a } from '../chunk/DBH56JRW.js';
export { a as ErrorMessage } from '../chunk/DBH56JRW.js';
import { e } from '../chunk/63IHFG6C.js';
export { e as Description } from '../chunk/63IHFG6C.js';
import { a as a$2 } from '../chunk/BRRMFPGI.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { composeEventHandlers, mergeDefaultProps } from '@kobalte/utils';
import { createContext, useContext, splitProps, createUniqueId, createMemo, createSignal, batch } from 'solid-js';

var u=createContext();function m(){let e=useContext(u);if(e===void 0)throw new Error("[kobalte]: `useColorFieldContext` must be used within a `ColorField` component");return e}function P(e){let l=m(),[a,r]=splitProps(e,["onBlur"]);return createComponent(b,mergeProps({autoComplete:"off",autoCorrect:"off",spellCheck:"false",get onBlur(){return composeEventHandlers([a.onBlur,l.onBlur])}},r))}function v(e){let l=`colorfield-${createUniqueId()}`,a=mergeDefaultProps({id:l},e),[r,$]=splitProps(a,["value","defaultValue","onChange"]),p=createMemo(()=>{let o=r.defaultValue;try{o=b$1(o?.startsWith("#")?o:`#${o}`).toString("hex");}catch{o="";}return o}),[t,n]=a$2({value:()=>r.value,defaultValue:p,onChange:o=>r.onChange?.(o)}),[c$1,f]=createSignal(t()),b=o=>{q(o)&&n(o);},I={onBlur:o=>{if(!t().length){f("");return}let i;try{i=b$1(t().startsWith("#")?t():`#${t()}`).toString("hex");}catch{c$1()?n(c$1()):n("");return}batch(()=>{n(i),f(i);});}};return createComponent(u.Provider,{value:I,get children(){return createComponent(c,mergeProps({get value(){return t()},get defaultValue(){return p()},onChange:b},$))}})}function q(e){return e===""||!!e.match(/^#?[0-9a-f]{0,6}$/i)?.[0]}var io=Object.assign(v,{Description:e,ErrorMessage:a,Input:P,Label:a$1});

export { io as ColorField, P as Input, v as Root, m as useColorFieldContext };
