"use strict";(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[9020],{19020:(e,l,o)=>{o.r(l),o.d(l,{default:()=>y});var t=o(59835);const a={class:"row q-col-gutter-md"},u={class:"col-12 col-md-12 col-lg-12"},n={class:"col-12 col-md-6 col-lg-6"},d={class:"col-12 col-md-6 col-lg-6"},m={class:"row q-col-gutter-md"},r={class:"row"},i=(0,t.Uk)(" Add Equipment "),c=(0,t.Uk)(" Remove Equipment ");function p(e,l,o,p,s,q){const f=(0,t.up)("q-input"),b=(0,t.up)("q-select"),v=(0,t.up)("QSearch"),S=(0,t.up)("q-btn"),_=(0,t.up)("q-card-actions"),w=(0,t.up)("QEditForm");return(0,t.wg)(),(0,t.j4)(w,{useStore:o.useStore,title:"Edit PPE Template"},{default:(0,t.w5)((()=>[(0,t._)("div",a,[(0,t._)("div",u,[(0,t.Wm)(f,{dense:"",outlined:"",modelValue:p.formData.name,"onUpdate:modelValue":l[0]||(l[0]=e=>p.formData.name=e),placeholder:"Ppe Template"},null,8,["modelValue"])]),(0,t._)("div",n,[(0,t.Wm)(b,{options:p.frequencyOptions,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"type",outlined:"",modelValue:p.formData.frequency,"onUpdate:modelValue":l[1]||(l[1]=e=>p.formData.frequency=e),dense:"",label:"Select Frequency"},null,8,["options","modelValue"])]),(0,t._)("div",d,[(0,t.Wm)(v,{label:"Select Branch",modelValue:p.formData.branch_id,"onUpdate:modelValue":l[2]||(l[2]=e=>p.formData.branch_id=e),useStore:p.branchStore,optionValue:"id",optionLabel:"name"},null,8,["modelValue","useStore"])]),(0,t._)("div",m,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(p.formData.equipments,((e,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"col-12 col-md-6 col-lg-6",key:l},[(0,t.Wm)(v,{label:"Select Equipment",useStore:p.equipmentStore,modelValue:e["equipment_id"],"onUpdate:modelValue":l=>e["equipment_id"]=l,optionValue:"id",optionLabel:"name"},null,8,["useStore","modelValue","onUpdate:modelValue"])])))),128)),(0,t._)("div",r,[(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(S,{class:"addrow",color:"primary",onClick:p.add},{default:(0,t.w5)((()=>[i])),_:1},8,["onClick"])])),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(S,{class:"deleterow",color:"primary",onClick:p.remove},{default:(0,t.w5)((()=>[c])),_:1},8,["onClick"])])),_:1})])])])])),_:1},8,["useStore"])}o(69665);var s=o(60499),q=o(3746),f=o(58641),b=o(2322);const v={name:"CreateEquipment",props:{useStore:null},setup(e){const{useStore:l}=(0,s.qj)(e),{formData:o}=(0,q.Jk)(l),t=(0,f.S)(),a=(0,b.E)(),u=()=>{o.value.equipments.push({equipment_id:""})},n=()=>{o.value.equipments.pop({equipment_id:""})};return{formData:o,branchStore:t,equipmentStore:a,add:u,remove:n,frequencyOptions:[{label:"Daily CheckList",value:"decl"}]}}};var S=o(11639),_=o(66611),w=o(32259),V=o(11821),h=o(68879),k=o(69984),D=o.n(k);const g=(0,S.Z)(v,[["render",p]]),y=g;D()(v,"components",{QInput:_.Z,QSelect:w.Z,QCardActions:V.Z,QBtn:h.Z})}}]);