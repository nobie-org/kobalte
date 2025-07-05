import { d } from './63IHFG6C.js';
import { mergeDefaultProps, access } from '@kobalte/utils';
import { createEffect, onCleanup } from 'solid-js';

var n=["id","aria-label","aria-labelledby","aria-describedby"];function m(l){let a=d(),e=mergeDefaultProps({id:a.generateId("field")},l);return createEffect(()=>onCleanup(a.registerField(access(e.id)))),{fieldProps:{id:()=>access(e.id),ariaLabel:()=>access(e["aria-label"]),ariaLabelledBy:()=>a.getAriaLabelledBy(access(e.id),access(e["aria-label"]),access(e["aria-labelledby"])),ariaDescribedBy:()=>a.getAriaDescribedBy(access(e["aria-describedby"]))}}}

export { n as a, m as b };
