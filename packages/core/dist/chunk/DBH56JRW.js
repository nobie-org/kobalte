import { d } from './63IHFG6C.js';
import { a } from './2B777EKY.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { mergeDefaultProps } from '@kobalte/utils';
import { splitProps, createEffect, onCleanup, Show } from 'solid-js';

function _(s){let r=d(),i=mergeDefaultProps({id:r.generateId("error-message")},s),[a$1,o]=splitProps(i,["forceMount"]),e=()=>r.validationState()==="invalid";return createEffect(()=>{e()&&onCleanup(r.registerErrorMessage(o.id));}),createComponent(Show,{get when(){return a$1.forceMount||e()},get children(){return createComponent(a,mergeProps({as:"div"},()=>r.dataset(),o))}})}

export { _ as a };
