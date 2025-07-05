import { i, l, m, n, o, p, q, r, s, t, u, w, x, y, j, g, f, k, v as v$1 } from './CI37HP6M.js';
import { a as a$1 } from './WXW2YBJJ.js';
import { c } from './U4KVQHPL.js';
import { a } from './JSKF3YHK.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { focusWithoutScrolling, mergeDefaultProps } from '@kobalte/utils';
import { splitProps, createUniqueId } from 'solid-js';

var U={};a(U,{Arrow:()=>c,CheckboxItem:()=>i,Content:()=>D,DropdownMenu:()=>v,Group:()=>l,GroupLabel:()=>m,Icon:()=>n,Item:()=>o,ItemDescription:()=>p,ItemIndicator:()=>q,ItemLabel:()=>r,Portal:()=>s,RadioGroup:()=>t,RadioItem:()=>u,Root:()=>S,Separator:()=>a$1,Sub:()=>w,SubContent:()=>x,SubTrigger:()=>y,Trigger:()=>j});function D(t){let e=g(),n=f(),[w,h]=splitProps(t,["onCloseAutoFocus","onInteractOutside"]),r=!1;return createComponent(k,mergeProps({onCloseAutoFocus:o=>{w.onCloseAutoFocus?.(o),r||focusWithoutScrolling(n.triggerRef()),r=!1,o.preventDefault();},onInteractOutside:o=>{w.onInteractOutside?.(o),(!e.isModal()||o.detail.isContextMenu)&&(r=!0);}},h))}function S(t){let e=`dropdownmenu-${createUniqueId()}`,n=mergeDefaultProps({id:e},t);return createComponent(v$1,n)}var v=Object.assign(S,{Arrow:c,CheckboxItem:i,Content:D,Group:l,GroupLabel:m,Icon:n,Item:o,ItemDescription:p,ItemIndicator:q,ItemLabel:r,Portal:s,RadioGroup:t,RadioItem:u,Separator:a$1,Sub:w,SubContent:x,SubTrigger:y,Trigger:j});

export { D as a, S as b, v as c, U as d };
