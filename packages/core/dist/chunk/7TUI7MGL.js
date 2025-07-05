import { isString } from '@kobalte/utils';
import { createSignal, createEffect } from 'solid-js';

function f(e,n){let[r,o]=createSignal(t(n?.()));return createEffect(()=>{o(e()?.tagName.toLowerCase()||t(n?.()));}),r}function t(e){return isString(e)?e:void 0}

export { f as a };
