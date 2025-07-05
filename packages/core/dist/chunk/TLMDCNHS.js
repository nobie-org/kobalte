import { b } from './BRRMFPGI.js';
import { access } from '@kobalte/utils';

function r(e={}){let[l,a]=b({value:()=>access(e.isSelected),defaultValue:()=>!!access(e.defaultIsSelected),onChange:o=>e.onSelectedChange?.(o)});return {isSelected:l,setIsSelected:o=>{!access(e.isReadOnly)&&!access(e.isDisabled)&&a(o);},toggle:()=>{!access(e.isReadOnly)&&!access(e.isDisabled)&&a(!l());}}}

export { r as a };
