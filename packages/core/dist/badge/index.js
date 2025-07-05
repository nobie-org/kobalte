import { a } from '../chunk/2B777EKY.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { splitProps } from 'solid-js';

function t(e){let[a$1,o]=splitProps(e,["textValue"]);return createComponent(a,mergeProps({as:"span",role:"status",get"aria-label"(){return a$1.textValue}},o,{get children(){return o.children}}))}var f=t;

export { f as Badge, t as Root };
