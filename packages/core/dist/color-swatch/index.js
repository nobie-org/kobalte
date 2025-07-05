import { a as a$2 } from '../chunk/Q73XX7CS.js';
import { a as a$1 } from '../chunk/2B777EKY.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { mergeDefaultProps } from '@kobalte/utils';
import { combineStyle } from '@solid-primitives/props';
import { createUniqueId, splitProps } from 'solid-js';

var e={roleDescription:"Color Swatch",transparent:"transparent"};function a(l){let n=`colorswatch-${createUniqueId()}`,s=mergeDefaultProps({id:n,translations:e},l),[o,i]=splitProps(s,["style","value","colorName","aria-label","translations"]),c=()=>[o.colorName??(o.value.getChannelValue("alpha")===0?o.translations.transparent:o.value.getColorName(a$2)),o["aria-label"]].filter(Boolean).join(", ");return createComponent(a$1,mergeProps({as:"div",role:"img",get"aria-roledescription"(){return o.translations.roleDescription},get"aria-label"(){return c()},get style(){return combineStyle({"background-color":o.value.toString("css"),"forced-color-adjust":"none"},o.style)}},i))}var b=a;

export { b as ColorSwatch, a as Root };
