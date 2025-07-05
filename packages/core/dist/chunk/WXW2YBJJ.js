import { a as a$1 } from './7TUI7MGL.js';
import { a as a$2 } from './2B777EKY.js';
import { a } from './JSKF3YHK.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { mergeDefaultProps, mergeRefs } from '@kobalte/utils';
import { splitProps } from 'solid-js';

var _={};a(_,{Root:()=>o,Separator:()=>R});function o(i){let e,m=mergeDefaultProps({orientation:"horizontal"},i),[r,p]=splitProps(m,["ref","orientation"]),f=a$1(()=>e,()=>"hr");return createComponent(a$2,mergeProps({as:"hr",ref(s){let t=mergeRefs(c=>e=c,r.ref);typeof t=="function"&&t(s);},get role(){return f()!=="hr"?"separator":void 0},get"aria-orientation"(){return r.orientation==="vertical"?"vertical":void 0},get"data-orientation"(){return r.orientation}},p))}var R=o;

export { o as a, R as b, _ as c };
