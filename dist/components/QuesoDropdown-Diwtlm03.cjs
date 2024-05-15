"use strict";require('../assets/components/QuesoDropdown.css');const e=require("vue"),f=require("./QuesoCollapsible-CclqsMwt.cjs"),C={class:"queso-dropdown__selector__text"},E={key:0,class:"queso-dropdown__selector__text__placeholder"},$={key:1,class:"queso-dropdown__selector__text__active-label"},N={class:"queso-dropdown__selector__icon"},O=["aria-expanded"],P={key:0,class:"queso-dropdown__popover__header"},T=["onClick"],D={key:1,class:"queso-dropdown__popover__footer"},b=e.defineComponent({__name:"QuesoDropdown",props:e.mergeModels({options:{},multiple:{type:Boolean},stayOpenOnSelection:{type:Boolean}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:e.mergeModels(["open:dropdown","close:dropdown"],["update:modelValue"]),setup(u,{expose:w,emit:k}){const n=u,v=k,l=e.useModel(u,"modelValue"),{options:c}=e.toRefs(n),_=e.ref(null),d=e.ref(null),t=e.ref(!1),p=e.computed(()=>c.value.filter(o=>l.value.includes(o.value))),B=e.computed(()=>({"is-multiple":n.multiple,"is-dropdown-open":t.value,"is-dropdown-close":!t.value})),g=o=>{n.multiple?l.value.includes(o)?l.value=l.value.filter(s=>s!==o):l.value=[...l.value,o]:l.value=[o],n.multiple||n.stayOpenOnSelection||a()},y=()=>{setTimeout(()=>{V.value=0},210)},i=()=>{t.value=!0,v("open:dropdown")},a=()=>{t.value=!1,v("close:dropdown"),y()},S=(o=!1)=>{o?i():a()};f.onClickOutside(_,()=>a());const{y:V,arrivedState:m}=f.useScroll(d,{offset:{top:15,bottom:15}}),h=e.computed(()=>{var o,s;return d.value?((o=d.value)==null?void 0:o.scrollHeight)>((s=d.value)==null?void 0:s.clientHeight):!1}),q=e.computed(()=>({"is-scrolled-top":m.top,"is-scrolled-bottom":m.bottom||!h.value}));return w({isDropdownOpen:t,openDropdown:i,closeDropdown:a}),(o,s)=>e.unref(c).length>0?(e.openBlock(),e.createElementBlock("div",{key:0,ref_key:"dropdown",ref:_,class:e.normalizeClass(["queso-dropdown",B.value])},[e.createElementVNode("div",{class:"queso-dropdown__selector",onClick:s[0]||(s[0]=r=>S(!t.value))},[e.renderSlot(o.$slots,"selector",e.normalizeProps(e.guardReactiveProps({options:e.unref(c),activeOptions:p.value})),()=>[e.renderSlot(o.$slots,"selectorBeforeText"),e.createElementVNode("div",C,[p.value.length<1?(e.openBlock(),e.createElementBlock("div",E,[e.renderSlot(o.$slots,"selectorPlaceholder")])):(e.openBlock(),e.createElementBlock("div",$,[e.renderSlot(o.$slots,"selectorActiveOptions",e.normalizeProps(e.guardReactiveProps({activeOptions:p.value})),()=>[e.createTextVNode(e.toDisplayString(p.value),1)])]))]),e.renderSlot(o.$slots,"selectorAfterText"),e.createElementVNode("div",N,[e.renderSlot(o.$slots,"selectorIcon",{},()=>[e.createTextVNode("↓")])])])]),e.createElementVNode("div",{class:"queso-dropdown__popover","aria-expanded":t.value},[o.$slots.popoverHeader?(e.openBlock(),e.createElementBlock("div",P,[e.renderSlot(o.$slots,"popoverHeader")])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["queso-dropdown__popover__scroll",q.value])},[e.createElementVNode("ul",{ref_key:"dropdownPopover",ref:d,class:"queso-dropdown__popover__options-list"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(c),r=>(e.openBlock(),e.createElementBlock("li",{key:r.value,onClick:z=>g(r.value),class:e.normalizeClass(["queso-dropdown__popover__options-list__item",{"is-option-active":l.value.includes(r.value)}])},[e.renderSlot(o.$slots,"item",e.mergeProps({ref_for:!0},{...r,openDropdown:i,closeDropdown:a}),()=>[e.createTextVNode(e.toDisplayString(r),1)])],10,T))),128))],512)],2),o.$slots.popoverFooter?(e.openBlock(),e.createElementBlock("div",D,[e.renderSlot(o.$slots,"popoverFooter")])):e.createCommentVNode("",!0)],8,O)],2)):e.createCommentVNode("",!0)}});exports._sfc_main=b;
