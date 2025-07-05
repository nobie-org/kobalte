import { b, f, g, h, c as c$1, d as d$1, e as e$2, a as a$3, i } from './7OPHSCIV.js';
import { b as b$1, c as c$2, d, e as e$1, g as g$1 } from './QRPJCKPG.js';
import { c } from './U4KVQHPL.js';
import { a as a$2 } from './PXHAVOZL.js';
import { a as a$1 } from './DBH56JRW.js';
import { e, d as d$2 } from './63IHFG6C.js';
import { a as a$4 } from './STCLCRSQ.js';
import { a } from './JSKF3YHK.js';
import { createComponent, mergeProps, memo } from 'solid-js/web';
import { splitProps, createMemo } from 'solid-js';
import { mergeDefaultProps, mergeRefs, callHandler } from '@kobalte/utils';

var N={};a(N,{Arrow:()=>c,Combobox:()=>K,Content:()=>b,Control:()=>f,Description:()=>e,ErrorMessage:()=>a$1,HiddenSelect:()=>g,Icon:()=>h,Input:()=>c$1,Item:()=>b$1,ItemDescription:()=>c$2,ItemIndicator:()=>d,ItemLabel:()=>e$1,Label:()=>a$2,Listbox:()=>d$1,Portal:()=>e$2,Root:()=>L,Section:()=>g$1,Trigger:()=>R,useComboboxContext:()=>a$3});function L(i$1){let[o,e]=splitProps(i$1,["value","defaultValue","onChange","multiple"]),l=createMemo(()=>o.value!=null?o.multiple?o.value:[o.value]:o.value),r=createMemo(()=>o.defaultValue!=null?o.multiple?o.defaultValue:[o.defaultValue]:o.defaultValue);return createComponent(i,mergeProps({get value(){return l()},get defaultValue(){return r()},onChange:n=>{o.multiple?o.onChange?.(n??[]):o.onChange?.(n[0]??null);},get selectionMode(){return o.multiple?"multiple":"single"}},e))}function R(i){let o=d$2(),e=a$3(),l=mergeDefaultProps({id:e.generateId("trigger")},i),[r,m]=splitProps(l,["ref","disabled","onPointerDown","onClick","aria-labelledby"]),n=()=>r.disabled||e.isDisabled()||o.isDisabled()||o.isReadOnly(),k=t=>{callHandler(t,r.onPointerDown),t.currentTarget.dataset.pointerType=t.pointerType,!n()&&t.pointerType!=="touch"&&t.button===0&&(t.preventDefault(),e.toggle(!1,"manual"));},A=t=>{callHandler(t,r.onClick),n()||(t.currentTarget.dataset.pointerType==="touch"&&e.toggle(!1,"manual"),e.inputRef()?.focus());},F=()=>o.getAriaLabelledBy(m.id,e.triggerAriaLabel(),r["aria-labelledby"]);return createComponent(a$4,mergeProps({ref(t){let v=mergeRefs(e.setTriggerRef,r.ref);typeof v=="function"&&v(t);},get disabled(){return n()},tabIndex:-1,"aria-haspopup":"listbox",get"aria-expanded"(){return e.isOpen()},get"aria-controls"(){return memo(()=>!!e.isOpen())()?e.listboxId():void 0},get"aria-label"(){return e.triggerAriaLabel()},get"aria-labelledby"(){return F()},onPointerDown:k,onClick:A},()=>e.dataset(),m))}var K=Object.assign(L,{Arrow:c,Content:b,Control:f,Description:e,ErrorMessage:a$1,HiddenSelect:g,Icon:h,Input:c$1,Item:b$1,ItemDescription:c$2,ItemIndicator:d,ItemLabel:e$1,Label:a$2,Listbox:d$1,Portal:e$2,Section:g$1,Trigger:R});

export { L as a, R as b, K as c, N as d };
