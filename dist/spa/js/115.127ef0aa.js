"use strict";(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[115],{50115:(e,a,r)=>{r.r(a),r.d(a,{default:()=>S});var o=r(59835);const t={class:"colomn q-py-sm"};function l(e,a,r,l,i,n){const s=(0,o.up)("QSearch"),d=(0,o.up)("q-input"),u=(0,o.up)("QCreateForm");return(0,o.wg)(),(0,o.j4)(u,{useStore:r.useStore,title:"Add Risk"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{label:"Activity",modelValue:l.newData.activity_id,"onUpdate:modelValue":a[0]||(a[0]=e=>l.newData.activity_id=e),useStore:l.activityStore,optionValue:"id",optionLabel:"name","error-message":e.$getValidationErrors("activity_id"),error:e.$hasValidationErrors("activity_id")},null,8,["modelValue","useStore","error-message","error"]),(0,o._)("div",t,[(0,o.Wm)(s,{label:"Hazard",modelValue:l.newData.hazard_id,"onUpdate:modelValue":a[1]||(a[1]=e=>l.newData.hazard_id=e),useStore:l.hazardStore,optionValue:"id",optionLabel:"name","error-message":e.$getValidationErrors("hazard_id"),error:e.$hasValidationErrors("hazard_id")},null,8,["modelValue","useStore","error-message","error"])]),(0,o.Wm)(d,{dense:"",outlined:"",modelValue:l.newData.name,"onUpdate:modelValue":a[2]||(a[2]=e=>l.newData.name=e),label:"Risk",rules:[e=>e&&e.length||"Please enter risk"],"error-message":e.$getValidationErrors("name"),error:e.$hasValidationErrors("name")},null,8,["modelValue","rules","error-message","error"])])),_:1},8,["useStore"])}var i=r(60499),n=r(3746),s=r(70865),d=r(51269);const u={name:"CreateRisk",props:{useStore:null},setup(e){const{useStore:a}=(0,i.qj)(e),{newData:r}=(0,n.Jk)(a),o=(0,s.j)(),t=(0,d.A)();return{activityStore:o,hazardStore:t,newData:r}}};var m=r(11639),c=r(66611),p=r(69984),V=r.n(p);const h=(0,m.Z)(u,[["render",l]]),S=h;V()(u,"components",{QInput:c.Z})}}]);