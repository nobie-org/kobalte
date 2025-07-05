import { b } from './BRRMFPGI.js';
import { access } from '@kobalte/utils';

function u(e={}){let[t,o]=b({value:()=>access(e.open),defaultValue:()=>!!access(e.defaultOpen),onChange:l=>e.onOpenChange?.(l)}),n=()=>{o(!0);},s=()=>{o(!1);};return {isOpen:t,setIsOpen:o,open:n,close:s,toggle:()=>{t()?s():n();}}}

export { u as a };
