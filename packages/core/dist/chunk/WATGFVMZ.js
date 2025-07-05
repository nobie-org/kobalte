import { createSignal, createEffect, onCleanup } from 'solid-js';

function d(r){let[o,c]=createSignal(0),[i,f]=createSignal(0);createEffect(()=>{let e=r();if(!e)return;n(e);let t=new ResizeObserver(a);t.observe(e),onCleanup(()=>{t.disconnect();});});let a=e=>{for(let t of e)t.target===r()&&n(t.target);},n=e=>{f(e.offsetWidth),c(e.offsetHeight);};return {width:i,height:o}}

export { d as a };
