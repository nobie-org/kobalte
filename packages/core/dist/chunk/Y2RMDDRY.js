import { a } from './KGX75ZK2.js';
import { access, noop, getDocument, composeEventHandlers, contains, isCtrlKey } from '@kobalte/utils';
import { createEffect, onCleanup } from 'solid-js';
import { isServer } from 'solid-js/web';

var D="interactOutside.pointerDownOutside",T="interactOutside.focusOutside";function H(o,r){let c,a$1=noop,n=()=>getDocument(r()),p=e=>o.onPointerDownOutside?.(e),w=e=>o.onFocusOutside?.(e),d=e=>o.onInteractOutside?.(e),E=e=>{let t=e.target;return !(t instanceof HTMLElement)||t.closest(`[${a}]`)||!contains(n(),t)||contains(r(),t)?!1:!o.shouldExcludeElement?.(t)},l=e=>{function t(){let s=r(),i=e.target;if(!s||!i||!E(e))return;let u=composeEventHandlers([p,d]);i.addEventListener(D,u,{once:!0});let b=new CustomEvent(D,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:e.button===2||isCtrlKey(e)&&e.button===0}});i.dispatchEvent(b);}e.pointerType==="touch"?(n().removeEventListener("click",t),a$1=t,n().addEventListener("click",t,{once:!0})):t();},v=e=>{let t=r(),s=e.target;if(!t||!s||!E(e))return;let i=composeEventHandlers([w,d]);s.addEventListener(T,i,{once:!0});let u=new CustomEvent(T,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:!1}});s.dispatchEvent(u);};createEffect(()=>{isServer||access(o.isDisabled)||(c=window.setTimeout(()=>{n().addEventListener("pointerdown",l,!0);},0),n().addEventListener("focusin",v,!0),onCleanup(()=>{window.clearTimeout(c),n().removeEventListener("click",a$1),n().removeEventListener("pointerdown",l,!0),n().removeEventListener("focusin",v,!0);}));});}

export { H as a };
