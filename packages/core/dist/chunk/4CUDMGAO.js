import { access, getDocument, EventKey } from '@kobalte/utils';
import { createEffect, onCleanup } from 'solid-js';
import { isServer } from 'solid-js/web';

function p(o){let n=e=>{e.key===EventKey.Escape&&o.onEscapeKeyDown?.(e);};createEffect(()=>{if(isServer||access(o.isDisabled))return;let e=o.ownerDocument?.()??getDocument();e.addEventListener("keydown",n),onCleanup(()=>{e.removeEventListener("keydown",n);});});}

export { p as a };
