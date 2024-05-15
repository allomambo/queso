"use strict";require('../assets/components/QuesoSelect.css');const e=require("vue"),f=require("./QuesoCheckbox-DkDTXS5v.cjs"),k=require("./QuesoField-DhCjc8JU.cjs"),S=require("./QuesoDropdown-Diwtlm03.cjs"),P={key:0,class:"queso-select__read-only"},y={class:"queso-select__read-only__label"},w={class:"text"},$=["id","name","required","disabled","onFocus","onBlur"],q=e.createElementVNode("option",null,null,-1),C=["value"],_=e.defineComponent({__name:"QuesoSelect",props:e.mergeModels({options:{},placeholder:{},id:{},name:{},label:{},isError:{type:Boolean},isRequired:{type:Boolean},isDisabled:{type:Boolean},isReadOnly:{type:Boolean},extraAttributes:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const c=a,p=f.useExtendedFieldProps(c),r=e.useModel(a,"modelValue"),i=e.computed({get(){return r.value?[r.value]:[]},set(o){r.value=o[0]}});return(o,n)=>(e.openBlock(),e.createBlock(e.unref(k._sfc_main),e.mergeProps({class:"-select"},e.unref(p)),{beforeLabel:e.withCtx(()=>[e.renderSlot(o.$slots,"beforeLabel")]),label:e.withCtx(l=>[e.renderSlot(o.$slots,"label",e.normalizeProps(e.guardReactiveProps({...l})))]),required:e.withCtx(l=>[e.renderSlot(o.$slots,"required",e.normalizeProps(e.guardReactiveProps({...l})))]),afterLabel:e.withCtx(()=>[e.renderSlot(o.$slots,"afterLabel")]),beforeInput:e.withCtx(()=>[e.renderSlot(o.$slots,"beforeInput")]),input:e.withCtx(({fieldID:l,fieldName:m,isRequired:v,isDisabled:h,isReadOnly:B,toggleIsActive:d,toggleIsHover:u})=>[B?(e.openBlock(),e.createElementBlock("div",P,[e.createElementVNode("span",y,e.toDisplayString(r.value||o.placeholder),1)])):(e.openBlock(),e.createBlock(e.unref(S._sfc_main),{key:1,class:"queso-select",options:o.options,onMouseover:t=>u(!0),onMouseleave:t=>u(!1),modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=t=>i.value=t)},{selectorPlaceholder:e.withCtx(()=>[e.renderSlot(o.$slots,"placeholder",e.normalizeProps(e.guardReactiveProps({placeholder:o.placeholder})),()=>[e.createTextVNode(e.toDisplayString(o.placeholder),1)])]),selectorActiveOptions:e.withCtx(({activeOptions:t})=>[e.renderSlot(o.$slots,"selector",e.normalizeProps(e.guardReactiveProps({activeOptions:t})),()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t,s=>(e.openBlock(),e.createElementBlock("span",{key:s.value},e.toDisplayString(s.label),1))),128))])]),selectorIcon:e.withCtx(()=>[e.renderSlot(o.$slots,"icon",{},()=>[e.createTextVNode("+")])]),item:e.withCtx(({value:t,label:s,data:b})=>[e.renderSlot(o.$slots,"item",e.normalizeProps(e.guardReactiveProps({value:t,label:s,data:b})),()=>[e.createElementVNode("span",w,e.toDisplayString(s),1)])]),_:2},1032,["options","onMouseover","onMouseleave","modelValue"])),e.withDirectives(e.createElementVNode("select",e.mergeProps({class:"queso-select__select-native",id:l,name:m,required:v,disabled:h,onFocus:t=>d(!0),onBlur:t=>d(!1)},o.extraAttributes,{"onUpdate:modelValue":n[1]||(n[1]=t=>r.value=t)}),[q,(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.options,t=>(e.openBlock(),e.createElementBlock("option",{key:t.value,value:t.value},e.toDisplayString(t.label),9,C))),128))],16,$),[[e.vModelSelect,r.value]])]),afterInput:e.withCtx(()=>[e.renderSlot(o.$slots,"afterInput")]),error:e.withCtx(l=>[e.renderSlot(o.$slots,"error",e.normalizeProps(e.guardReactiveProps({...l})))]),_:3},16))}});exports._sfc_main=_;