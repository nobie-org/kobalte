import { b as b$1 } from '../chunk/Q73XX7CS.js';
import { c, e as e$1, d, b, f } from '../chunk/RQ5X4BF3.js';
export { b as DecrementTrigger, c as HiddenInput, d as IncrementTrigger, e as Input } from '../chunk/RQ5X4BF3.js';
import { a as a$1 } from '../chunk/PXHAVOZL.js';
export { a as Label } from '../chunk/PXHAVOZL.js';
import { a } from '../chunk/DBH56JRW.js';
export { a as ErrorMessage } from '../chunk/DBH56JRW.js';
import { e } from '../chunk/63IHFG6C.js';
export { e as Description } from '../chunk/63IHFG6C.js';
import { a as a$2 } from '../chunk/BRRMFPGI.js';
import { createComponent, mergeProps, memo } from 'solid-js/web';
import { mergeDefaultProps } from '@kobalte/utils';
import { createUniqueId, splitProps, createMemo } from 'solid-js';

function V(N){let F=`colorchannelfield-${createUniqueId()}`,b=mergeDefaultProps({id:F},N),[e,x]=splitProps(b,["value","defaultValue","onChange","channel","colorSpace"]),[l,R]=a$2({value:()=>e.value,defaultValue:()=>e.defaultValue??b$1("hsl(0, 100%, 50%)"),onChange:n=>e.onChange?.(n)}),r=createMemo(()=>e.colorSpace?l().toFormat(e.colorSpace):l()),o=createMemo(()=>r().getChannelRange(e.channel)),m=createMemo(()=>r().getChannelFormatOptions(e.channel)),a=createMemo(()=>m().style==="percent"&&o().maxValue===100?100:1);return createComponent(f,mergeProps({get rawValue(){return memo(()=>!!Number.isNaN(r().getChannelValue(e.channel)))()?void 0:r().getChannelValue(e.channel)/a()},get minValue(){return o().minValue/a()},get maxValue(){return o().maxValue/a()},get step(){return o().step/a()},get formatOptions(){return m()},onRawValueChange:n=>{R(r().withChannelValue(e.channel,Number.isNaN(n)?Number.NaN:Math.round(Math.max(Math.min(n*a(),o().maxValue),o().minValue))));}},x))}var z=Object.assign(V,{Description:e,ErrorMessage:a,HiddenInput:c,Input:e$1,IncrementTrigger:d,DecrementTrigger:b,Label:a$1});

export { z as ColorChannelField, V as Root };
