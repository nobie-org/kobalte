import { a as a$1 } from './TLMDCNHS.js';
import { a as a$2 } from './STCLCRSQ.js';
import { a } from './JSKF3YHK.js';
import { createComponent, mergeProps, memo } from 'solid-js/web';
import { callHandler, isFunction } from '@kobalte/utils';
import { splitProps, children } from 'solid-js';

var S={};a(S,{Root:()=>s,ToggleButton:()=>C});function s(o){let[e,t]=splitProps(o,["children","pressed","defaultPressed","onChange","onClick"]),r=a$1({isSelected:()=>e.pressed,defaultIsSelected:()=>e.defaultPressed,onSelectedChange:n=>e.onChange?.(n),isDisabled:()=>t.disabled});return createComponent(a$2,mergeProps({get"aria-pressed"(){return r.isSelected()},get"data-pressed"(){return r.isSelected()?"":void 0},onClick:n=>{callHandler(n,e.onClick),r.toggle();}},t,{get children(){return createComponent(h,{get state(){return {pressed:r.isSelected}},get children(){return e.children}})}}))}function h(o){let e=children(()=>{let t=o.children;return isFunction(t)?t(o.state):t});return memo(e)}var C=s;

export { s as a, C as b, S as c };
