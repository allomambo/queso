"use strict";require('../assets/components/QuesoIcon.css');const e=require("vue"),c=["innerHTML"],i=["href"],u=e.defineComponent({__name:"QuesoIcon",props:{svg:{},name:{},prefix:{},size:{default:1},sizeUnit:{default:"rem"},rotation:{default:0}},setup(l){e.useCssVars(s=>({"46cfda30":a.value,"15487f1c":r.value}));const n=l,t=e.computed(()=>`#${n.prefix?`${n.prefix}-`:""}${n.name}`),o=e.computed(()=>{let s=["queso-icon"];return n.name&&s.push(`-${n.name}`),s}),a=e.computed(()=>`${n.size}${n.sizeUnit}`),r=e.computed(()=>`${n.rotation}deg`);return(s,p)=>s.svg?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(o.value),"aria-hidden":"true",innerHTML:s.svg},null,10,c)):(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(o.value),"aria-hidden":"true"},[e.renderSlot(s.$slots,"default",e.normalizeProps(e.guardReactiveProps({...n,width:a.value,rotation:r.value,iconID:t.value})),()=>[(e.openBlock(),e.createElementBlock("svg",null,[e.createElementVNode("use",{href:t.value},null,8,i)]))])],2))}});exports._sfc_main=u;
