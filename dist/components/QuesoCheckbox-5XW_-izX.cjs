var F=require("../assets/components/QuesoCheckbox.css");const e=require("vue"),k=require("./QuesoField-_tyT0XqT.cjs"),p=e.createElementVNode("span",{class:"queso-checkbox__hidden-label"},null,-1),x={class:"queso-checkbox__box"},C={class:"queso-checkbox__box__symbol"},f={class:"queso-checkbox__label"},q=["innerHTML"],v=["checked","name","id","required","autocomplete","disabled","onChange","onFocus","onBlur"],B=e.defineComponent({__name:"QuesoCheckbox",setup($){const i=(o,n)=>{n(o.target.checked)};return(o,n)=>(e.openBlock(),e.createBlock(e.unref(k._sfc_main),null,{label:e.withCtx(()=>[p]),beforeField:e.withCtx(()=>[e.renderSlot(o.$slots,"beforeField")]),field:e.withCtx(({fieldID:s,fieldName:_,fieldValue:c,fieldLabel:d,fieldAutocomplete:u,updateValue:h,toggleIsActive:l,toggleIsHover:r,isRequired:m,isDisabled:b,isReadOnly:a})=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(a?"div":"label"),{class:e.normalizeClass(["queso-checkbox",{"is-checked":c}]),for:s,onMouseover:t=>r(!0),onMouseleave:t=>r(!1)},{default:e.withCtx(()=>[e.createElementVNode("span",x,[e.createElementVNode("span",C,[e.renderSlot(o.$slots,"symbol",{},()=>[e.createTextVNode("✔︎")])])]),e.createElementVNode("span",f,[e.createElementVNode("span",{class:"queso-checkbox__label__text",innerHTML:d},null,8,q)])]),_:2},1064,["for","class","onMouseover","onMouseleave"])),a?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("input",{key:0,type:"checkbox",class:"queso-checkbox__native",checked:c,name:_,id:s,required:m,autocomplete:u,disabled:b,onChange:t=>i(t,h),onFocus:t=>l(!0),onBlur:t=>l(!1)},null,40,v))]),afterField:e.withCtx(()=>[e.renderSlot(o.$slots,"afterField")]),error:e.withCtx(s=>[e.renderSlot(o.$slots,"error",e.normalizeProps(e.guardReactiveProps({...s})))]),_:3}))}});exports._sfc_main=B;
