import { a as a$1 } from './Y2RMDDRY.js';
import { a as a$2 } from './4CUDMGAO.js';
import { b } from './KGX75ZK2.js';
import { a as a$3 } from './2B777EKY.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { getDocument, mergeRefs, contains } from '@kobalte/utils';
import { createContext, splitProps, onMount, createEffect, on, onCleanup, useContext } from 'solid-js';

var a=createContext();function l(){return useContext(a)}function q(P){let t,c=l(),[o,D]=splitProps(P,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),i=new Set([]),L=e=>{i.add(e);let s=c?.registerNestedLayer(e);return ()=>{i.delete(e),s?.();}};a$1({shouldExcludeElement:e=>t?o.excludedElements?.some(s=>contains(s(),e))||[...i].some(s=>contains(s,e)):!1,onPointerDownOutside:e=>{!t||b.isBelowPointerBlockingLayer(t)||!o.bypassTopMostLayerCheck&&!b.isTopMostLayer(t)||(o.onPointerDownOutside?.(e),o.onInteractOutside?.(e),e.defaultPrevented||o.onDismiss?.());},onFocusOutside:e=>{o.onFocusOutside?.(e),o.onInteractOutside?.(e),e.defaultPrevented||o.onDismiss?.();}},()=>t),a$2({ownerDocument:()=>getDocument(t),onEscapeKeyDown:e=>{!t||!b.isTopMostLayer(t)||(o.onEscapeKeyDown?.(e),!e.defaultPrevented&&o.onDismiss&&(e.preventDefault(),o.onDismiss()));}}),onMount(()=>{if(!t)return;b.addLayer({node:t,isPointerBlocking:o.disableOutsidePointerEvents,dismiss:o.onDismiss});let e=c?.registerNestedLayer(t);b.assignPointerEventToLayers(),b.disableBodyPointerEvents(t),onCleanup(()=>{t&&(b.removeLayer(t),e?.(),b.assignPointerEventToLayers(),b.restoreBodyPointerEvents(t));});}),createEffect(on([()=>t,()=>o.disableOutsidePointerEvents],([e,s])=>{if(!e)return;let r=b.find(e);r&&r.isPointerBlocking!==s&&(r.isPointerBlocking=s,b.assignPointerEventToLayers()),s&&b.disableBodyPointerEvents(e),onCleanup(()=>{b.restoreBodyPointerEvents(e);});},{defer:!0}));let E={registerNestedLayer:L};return createComponent(a.Provider,{value:E,get children(){return createComponent(a$3,mergeProps({as:"div",ref(e){let s=mergeRefs(r=>t=r,o.ref);typeof s=="function"&&s(e);}},D))}})}

export { q as a };
