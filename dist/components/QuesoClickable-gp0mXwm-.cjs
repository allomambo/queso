var m=require("../assets/components/QuesoClickable.css");const e=require("vue"),b=e.defineComponent({__name:"QuesoClickable",props:{tag:{default:"button"},url:{},isDisabled:{type:Boolean},isExternal:{type:Boolean},isDownload:{type:Boolean},ariaLabel:{}},setup(t){const l=t,s=e.computed(()=>({"is-disabled":l.isDisabled})),o=e.computed(()=>l.isDisabled?!0:null),n=e.computed(()=>l.tag==="a"||l.tag==="router-link"?l.url:null),c=e.computed(()=>l.tag==="router-link"?l.url:null),i=e.computed(()=>l.isExternal?"_blank":"_self"),r=e.computed(()=>l.tag==="a"?i.value:null),u=e.computed(()=>l.tag==="a"?"noopener":null),d=e.computed(()=>l.tag==="a"&&l.isDownload?"":null);return(a,p)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(a.tag),{class:e.normalizeClass(["queso-clickable",s.value]),rel:u.value,href:n.value,to:c.value,target:r.value,download:d.value,disabled:o.value,"aria-disabled":o.value,"aria-label":a.ariaLabel},{default:e.withCtx(()=>[e.renderSlot(a.$slots,"default")]),_:3},8,["class","rel","href","to","target","download","disabled","aria-disabled","aria-label"]))}});exports._sfc_main=b;