"use strict";require('../../assets/components/_legacy/QuesoSelect.css');const e=require("vue"),k=require("./QuesoField-CINSVZJW.cjs"),y=require("./QuesoDropdown-K5sAfM6N.cjs"),v=require("./QuesoCheckbox-DUw9HKSh.cjs"),S=s=>(e.pushScopeId("data-v-f1577a30"),s=s(),e.popScopeId(),s),B={key:0,class:"queso-select__read-only"},f={class:"queso-select__read-only__label"},g={class:"text"},w=["name","id","onFocus","onBlur","required","autocomplete","multiple"],q=S(()=>e.createElementVNode("option",null,null,-1)),$=["value","selected"],b=e.defineComponent({__name:"QuesoSelect",props:{options:{default:()=>[]},multiple:{type:Boolean},placeholder:{}},setup(s){console.warn("<QuesoSelectLegacy> is deprecated. It will be removed on v1.0 version.");const p=(o,a)=>{if(Array.isArray(o))return o.find(l=>l.key===a.key)};return(o,a)=>(e.openBlock(),e.createBlock(e.unref(k.QuesoField),null,{label:e.withCtx(()=>[e.renderSlot(o.$slots,"label",{},void 0,!0)]),field:e.withCtx(({fieldID:l,fieldName:u,fieldValue:n,fieldAutocomplete:d,updateValue:m,toggleIsActive:c,toggleIsHover:i,isRequired:_,isReadOnly:h})=>[h?(e.openBlock(),e.createElementBlock("div",B,[e.createElementVNode("span",f,e.toDisplayString(n[0].data.label||o.placeholder),1)])):(e.openBlock(),e.createBlock(e.unref(y._sfc_main),{key:1,class:"queso-select",options:o.options,"default-options":n||[],multiple:o.multiple,"onUpdate:options":t=>m(t),onMouseover:t=>i(!0),onMouseleave:t=>i(!1)},{placeholder:e.withCtx(()=>[e.renderSlot(o.$slots,"placeholder",e.normalizeProps(e.guardReactiveProps({placeholder:o.placeholder})),()=>[e.createTextVNode(e.toDisplayString(o.placeholder),1)],!0)]),selector:e.withCtx(({activeOptions:t})=>[e.renderSlot(o.$slots,"selector",e.normalizeProps(e.guardReactiveProps({activeOptions:t})),()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t,r=>(e.openBlock(),e.createElementBlock("span",{key:r.key},e.toDisplayString(r.data.label),1))),128))],!0)]),icon:e.withCtx(()=>[e.renderSlot(o.$slots,"icon",{},()=>[e.createTextVNode("↓")],!0)]),item:e.withCtx(({key:t,data:r})=>[e.renderSlot(o.$slots,"item",e.normalizeProps(e.guardReactiveProps({key:t,data:r})),()=>[e.createElementVNode("span",g,e.toDisplayString(r.label),1)],!0)]),_:2},1032,["options","default-options","multiple","onUpdate:options","onMouseover","onMouseleave"])),e.createElementVNode("select",{name:u,id:l,class:"queso-select__select-native",onFocus:t=>c(!0),onBlur:t=>c(!1),required:_,autocomplete:d,multiple:o.multiple},[q,(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.options,t=>(e.openBlock(),e.createElementBlock("option",{value:t.key,key:t.key,selected:p(n,t)},e.toDisplayString(t.data.label),9,$))),128))],40,w)]),error:e.withCtx(l=>[e.renderSlot(o.$slots,"error",e.normalizeProps(e.guardReactiveProps({...l})),void 0,!0)]),_:3}))}}),C=v._export_sfc(b,[["__scopeId","data-v-f1577a30"]]);exports.QuesoSelect=C;