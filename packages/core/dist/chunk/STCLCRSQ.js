import { a as a$1 } from './7TUI7MGL.js';
import { a as a$2 } from './2B777EKY.js';
import { a } from './JSKF3YHK.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { mergeDefaultProps, mergeRefs } from '@kobalte/utils';
import { splitProps, createMemo } from 'solid-js';

var $={};a($,{Button:()=>R,Root:()=>s});var y=["button","color","file","image","reset","submit"];function g(r){let e=r.tagName.toLowerCase();return e==="button"?!0:e==="input"&&r.type?y.indexOf(r.type)!==-1:!1}function s(r){let e,l=mergeDefaultProps({type:"button"},r),[t,c]=splitProps(l,["ref","type","disabled"]),i=a$1(()=>e,()=>"button"),o=createMemo(()=>{let n=i();return n==null?!1:g({tagName:n,type:t.type})}),a=createMemo(()=>i()==="input"),m=createMemo(()=>i()==="a"&&e?.getAttribute("href")!=null);return createComponent(a$2,mergeProps({as:"button",ref(n){let p=mergeRefs(b=>e=b,t.ref);typeof p=="function"&&p(n);},get type(){return o()||a()?t.type:void 0},get role(){return !o()&&!m()?"button":void 0},get tabIndex(){return !o()&&!m()&&!t.disabled?0:void 0},get disabled(){return o()||a()?t.disabled:void 0},get"aria-disabled"(){return !o()&&!a()&&t.disabled?!0:void 0},get"data-disabled"(){return t.disabled?"":void 0}},c))}var R=s;

export { s as a, R as b, $ as c };
