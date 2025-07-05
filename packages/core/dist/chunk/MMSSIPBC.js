import { a as a$1 } from './7TUI7MGL.js';
import { a as a$2 } from './2B777EKY.js';
import { a } from './JSKF3YHK.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { mergeRefs } from '@kobalte/utils';
import { splitProps } from 'solid-js';

var h={};a(h,{Link:()=>b,Root:()=>r});function r(d){let o,[e,m]=splitProps(d,["ref","href","disabled"]),t=a$1(()=>o,()=>"a");return createComponent(a$2,mergeProps({as:"a",ref(f){let n=mergeRefs(s=>o=s,e.ref);typeof n=="function"&&n(f);},get role(){return t()!=="a"||e.disabled?"link":void 0},get tabIndex(){return t()!=="a"&&!e.disabled?0:void 0},get href(){return e.disabled?void 0:e.href},get"aria-disabled"(){return e.disabled?!0:void 0},get"data-disabled"(){return e.disabled?"":void 0}},m))}var b=r;

export { r as a, b, h as c };
