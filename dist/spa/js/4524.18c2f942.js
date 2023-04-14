"use strict";(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[4524],{4524:(e,l,t)=>{t.r(l),t.d(l,{default:()=>E});var a=t(59835);const o={class:"template"},s={class:"row q-col-gutter-md"},r={class:"col-12 col-md-6 col-lg-6"},n={class:"col-12 col-md-6 col-lg-6"},i={class:"col-12"},d={class:"q-pb-md"},u={key:0},m={class:"row q-col-gutter-md"},p={class:"row"},c=(0,a.Uk)("Add Row"),v=(0,a.Uk)("Remove Row"),b={class:"Description q-pt-md"};function g(e,l,t,g,V,_){const f=(0,a.up)("q-input"),h=(0,a.up)("q-select"),D=(0,a.up)("QSearch"),w=(0,a.up)("q-btn"),y=(0,a.up)("q-card-actions"),S=(0,a.up)("QEditForm");return(0,a.wg)(),(0,a.j4)(S,{useStore:t.useStore,title:"Edit Template"},{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a._)("div",s,[(0,a._)("div",r,[(0,a.Wm)(f,{label:"Template title",dense:"",outlined:"",modelValue:g.formData.title,"onUpdate:modelValue":l[0]||(l[0]=e=>g.formData.title=e),"lazy-rules":"",rules:[e=>e&&e.length||"Please enter Template Title"],"error-message":e.$getValidationErrors("title"),error:e.$hasValidationErrors("title")},null,8,["modelValue","rules","error-message","error"])]),(0,a._)("div",n,[(0,a.Wm)(h,{options:g.typeOptions,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"type",outlined:"",modelValue:g.formData.type,"onUpdate:modelValue":l[1]||(l[1]=e=>g.formData.type=e),dense:"",label:"Select Type",rules:[e=>e&&e.length||"Please select type"],"error-message":e.$getValidationErrors("type"),error:e.$hasValidationErrors("type")},null,8,["options","modelValue","rules","error-message","error"])])]),(0,a._)("div",i,[(0,a._)("div",d,[(0,a.Wm)(D,{label:"Department Name",modelValue:g.formData.branch_id,"onUpdate:modelValue":[l[2]||(l[2]=e=>g.formData.branch_id=e),g.fetchAssestsLists],optionValue:"id",optionLabel:"name",useStore:g.branchStore},null,8,["modelValue","useStore","onUpdate:modelValue"])]),null!=g.formData.branch_id?((0,a.wg)(),(0,a.iD)("span",u,[(0,a._)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.formData.assets,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:"col-12",key:l},[(0,a.Wm)(h,{dense:"",label:"Select Asset",outlined:"",options:g.assetsOptions,modelValue:e["asset_id"],"onUpdate:modelValue":l=>e["asset_id"]=l,"option-value":"id","option-label":"name","emit-value":"","map-options":""},null,8,["options","modelValue","onUpdate:modelValue"])])))),128)),(0,a._)("div",p,[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"addrow",color:"primary",onClick:g.add},{default:(0,a.w5)((()=>[c])),_:1},8,["onClick"])])),_:1}),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"deleterow",color:"primary",onClick:g.remove},{default:(0,a.w5)((()=>[v])),_:1},8,["onClick"])])),_:1})])])])):(0,a.kq)("",!0)]),(0,a._)("div",b,[(0,a.Wm)(f,{outlined:"",label:"Description",modelValue:g.formData.description,"onUpdate:modelValue":l[3]||(l[3]=e=>g.formData.description=e),"lazy-rules":"",type:"textarea"},null,8,["modelValue"])])])])),_:1},8,["useStore"])}t(69665);var V=t(60499),_=t(3746),f=t(65390),h=t(98951),D=t(58641);const w={name:"EditTemplate",props:{useStore:null},setup(e){const{useStore:l}=(0,V.qj)(e),{formData:t}=(0,_.Jk)(l),a=(0,f.d)(),o=(0,h.a)(),s=(0,D.S)(),r=(0,V.iH)([]),n=e=>{o.getItems({all:!0,branch_id:e}).then((e=>{r.value=e.data}))},i=()=>{t.value.assets.push({asset_id:""})},d=()=>{t.value.assets.pop({asset_id:""})};return{formData:t,templateStore:a,assetStore:o,branchStore:s,fetchAssestsLists:n,assetsOptions:r,add:i,remove:d,typeOptions:[{label:"Daily CheckList",value:"decl"}],statusOptions:[{label:"Ongoing",value:"ongoing"},{label:"Done",value:"done"}]}}};var y=t(11639),S=t(66611),k=t(32259),q=t(11821),U=t(68879),W=t(69984),C=t.n(W);const T=(0,y.Z)(w,[["render",g]]),E=T;C()(w,"components",{QInput:S.Z,QSelect:k.Z,QCardActions:q.Z,QBtn:U.Z})}}]);