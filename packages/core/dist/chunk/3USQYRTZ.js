import { createEffect, on, onCleanup } from 'solid-js';

function m(e,n){createEffect(on(e,r=>{if(r==null)return;let t=c(r);t!=null&&(t.addEventListener("reset",n,{passive:!0}),onCleanup(()=>{t.removeEventListener("reset",n);}));}));}function c(e){return i(e)?e.form:e.closest("form")}function i(e){return e.matches("textarea, input, select, button")}

export { m as a };
