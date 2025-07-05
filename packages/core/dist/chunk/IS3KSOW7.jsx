var n=new WeakMap;function r(t){let e=n.get(t);if(e!=null)return e;e=0;for(let o of t)o.type==="item"&&e++;return n.set(t,e),e}export{r as a};
