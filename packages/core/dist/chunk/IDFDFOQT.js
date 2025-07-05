import { a as a$1 } from './MMSSIPBC.js';
import { a as a$2 } from './2B777EKY.js';
import { a } from './JSKF3YHK.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { splitProps, createContext, useContext } from 'solid-js';
import { mergeDefaultProps } from '@kobalte/utils';

var h={};a(h,{Breadcrumbs:()=>T,Link:()=>m,Root:()=>p,Separator:()=>c,useBreadcrumbsContext:()=>n});function m(e){let[r,t]=splitProps(e,["current","disabled","aria-current"]),a=()=>{if(r.current)return r["aria-current"]||"page"};return createComponent(a$1,mergeProps({get disabled(){return r.disabled||r.current},get"aria-current"(){return a()},get"data-current"(){return r.current?"":void 0}},t))}var s=createContext();function n(){let e=useContext(s);if(e===void 0)throw new Error("[kobalte]: `useBreadcrumbsContext` must be used within a `Breadcrumbs.Root` component");return e}var u={breadcrumbs:"Breadcrumbs"};function p(e){let r=mergeDefaultProps({separator:"/",translations:u},e),[t,a]=splitProps(r,["separator","translations"]),f={separator:()=>t.separator};return createComponent(s.Provider,{value:f,get children(){return createComponent(a$2,mergeProps({as:"nav",get"aria-label"(){return t.translations.breadcrumbs}},a))}})}function c(e){let r=n();return createComponent(a$2,mergeProps({as:"span","aria-hidden":"true"},e,{get children(){return r.separator()}}))}var T=Object.assign(p,{Link:m,Separator:c});

export { m as a, n as b, p as c, c as d, T as e, h as f };
