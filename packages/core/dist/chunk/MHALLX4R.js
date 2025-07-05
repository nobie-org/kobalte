import { a as a$1 } from './2B777EKY.js';
import { a } from './JSKF3YHK.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { mergeDefaultProps } from '@kobalte/utils';
import { combineStyle } from '@solid-primitives/props';
import { createUniqueId, splitProps } from 'solid-js';

var f={};a(f,{Root:()=>t,Skeleton:()=>h});function t(o){let i=`skeleton-${createUniqueId()}`,m=mergeDefaultProps({visible:!0,animate:!0,id:i},o),[e,n]=splitProps(m,["style","radius","animate","height","width","visible","circle"]);return createComponent(a$1,mergeProps({as:"div",role:"group",get"data-animate"(){return e.animate||void 0},get"data-visible"(){return e.visible||void 0},get style(){return combineStyle({"border-radius":e.circle?"9999px":e.radius?`${e.radius}px`:void 0,width:e.circle?`${e.height}px`:e.width?`${e.width}px`:"100%",height:e.height?`${e.height}px`:"auto"},e.style)}},n))}var h=t;

export { t as a, h as b, f as c };
