var x=require("../assets/AppSwitch.css");const e=require("vue"),k=require("./FieldBase-463abbb1.cjs"),w=e.createElementVNode("span",{class:"queso-switch__hidden-label"},null,-1),C=e.createElementVNode("span",{class:"queso-switch__box"},[e.createElementVNode("span",{class:"queso-switch__box__circle"})],-1),v={key:0,class:"queso-switch__label"},b=["innerHTML"],f=["checked","name","id","required","autocomplete","disabled","onChange","onFocus","onBlur"],q=e.defineComponent({__name:"AppSwitch",setup(B){const _=(t,n)=>{n(t.target.checked)};return(t,n)=>(e.openBlock(),e.createBlock(e.unref(k._sfc_main),null,{label:e.withCtx(()=>[w]),beforeField:e.withCtx(()=>[e.renderSlot(t.$slots,"beforeField")]),field:e.withCtx(({fieldID:s,fieldName:u,fieldValue:c,fieldLabel:l,fieldAutocomplete:d,updateValue:h,toggleIsActive:r,toggleIsHover:a,isRequired:p,isDisabled:m,isReadOnly:i})=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(i?"div":"label"),{class:e.normalizeClass(["queso-switch",{"is-selected":c}]),for:s,onMouseover:o=>a(!0),onMouseleave:o=>a(!1)},{default:e.withCtx(()=>[C,l?(e.openBlock(),e.createElementBlock("span",v,[e.createElementVNode("span",{class:"queso-switch__label__text",innerHTML:l},null,8,b)])):e.createCommentVNode("",!0)]),_:2},1064,["for","class","onMouseover","onMouseleave"])),i?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("input",{key:0,type:"checkbox",class:"queso-switch__native",checked:c,name:u,id:s,required:p,autocomplete:d,disabled:m,onChange:o=>_(o,h),onFocus:o=>r(!0),onBlur:o=>r(!1)},null,40,f))]),afterField:e.withCtx(()=>[e.renderSlot(t.$slots,"afterField")]),error:e.withCtx(s=>[e.renderSlot(t.$slots,"error",e.normalizeProps(e.guardReactiveProps({...s})))]),_:3}))}});exports._sfc_main=q;
