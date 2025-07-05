import { createComponent, Dynamic, mergeProps } from 'solid-js/web';
import { splitProps } from 'solid-js';

function f(r){let[o,e]=splitProps(r,["as"]);if(!o.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return createComponent(Dynamic,mergeProps(e,{get component(){return o.as}}))}

export { f as a };
