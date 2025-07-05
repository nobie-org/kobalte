import { accessWith } from '@kobalte/utils';
import { createSignal, createMemo, untrack } from 'solid-js';

function r(e){let[a,t]=createSignal(e.defaultValue?.()),l=createMemo(()=>e.value?.()!==void 0),o=createMemo(()=>l()?e.value?.():a());return [o,s=>{untrack(()=>{let n=accessWith(s,o());return Object.is(n,o())||(l()||t(n),e.onChange?.(n)),n});}]}function S(e){let[a,t]=r(e);return [()=>a()??!1,t]}function b(e){let[a,t]=r(e);return [()=>a()??[],t]}function d(e){let[a,t]=r(e);return [()=>a()??new Set,t]}

export { r as a, S as b, b as c, d };
