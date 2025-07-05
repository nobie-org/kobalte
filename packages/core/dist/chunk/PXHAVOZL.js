import { d } from './63IHFG6C.js';
import { a } from './7TUI7MGL.js';
import { a as a$1 } from './2B777EKY.js';
import { createComponent, mergeProps, memo } from 'solid-js/web';
import { mergeDefaultProps, mergeRefs } from '@kobalte/utils';
import { splitProps, createEffect, onCleanup } from 'solid-js';

function E(f){let o,e=d(),l=mergeDefaultProps({id:e.generateId("label")},f),[p,r]=splitProps(l,["ref"]),s=a(()=>o,()=>"label");return createEffect(()=>onCleanup(e.registerLabel(r.id))),createComponent(a$1,mergeProps({as:"label",ref(i){let t=mergeRefs(c=>o=c,p.ref);typeof t=="function"&&t(i);},get for(){return memo(()=>s()==="label")()?e.fieldId():void 0}},()=>e.dataset(),r))}

export { E as a };
