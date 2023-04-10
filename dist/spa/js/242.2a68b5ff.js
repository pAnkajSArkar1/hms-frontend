"use strict";(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[242],{70242:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var i={};a.r(i),a.d(i,{showCreateMedicines:()=>u,showEditMedicines:()=>p});var n={};a.r(n),a.d(n,{createItem:()=>w,deleteItem:()=>_,editItem:()=>b,getItems:()=>f});var s=a(59835),d=a(86970);const o={class:"q-pa-md"};function r(e,t,a,i,n,r){const l=(0,s.up)("QDataTable"),c=(0,s.up)("create-medicine"),m=(0,s.up)("q-card"),u=(0,s.up)("q-dialog"),p=(0,s.up)("edit-medicine"),h=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(h,null,{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s.Wm)(l,{useStore:i.useStore,title:"All Medicines"},null,8,["useStore"]),(0,s.Wm)(u,{modelValue:i.showCreateMedicines,"onUpdate:modelValue":t[0]||(t[0]=e=>i.showCreateMedicines=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{class:"card-width"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,d.C_)((e.$q.platform.is.desktop,""))},[(0,s.Wm)(c,{useStore:i.useStore,modal:!0},null,8,["useStore"])],2)])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(u,{modelValue:i.showEditMedicines,"onUpdate:modelValue":t[1]||(t[1]=e=>i.showEditMedicines=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{class:"card-width"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,d.C_)((e.$q.platform.is.desktop,""))},[(0,s.Wm)(p,{useStore:i.useStore,modal:!0},null,8,["useStore"])],2)])),_:1})])),_:1},8,["modelValue"])])])),_:1})}var l=a(3746),c=a(60499);a(4026);function m(){return{columns:[{name:"name",align:"left",label:"Name",field:"name",sortable:!0},{name:"mfg date",align:"left",label:"Manufacture date",field:"mfg_date",sortable:!0},{name:"exp date",align:"left",label:"Expiry date",field:"exp_date",sortable:!0},{name:"description",align:"left",label:"Description",field:"description",sortable:!0},{name:"price",align:"left",label:"Price",field:"price",sortable:!0},{name:"actions",align:"right",label:"Actions"}],filter:{search:""},items:(0,c.qj)([]),item:(0,c.qj)({}),newData:(0,c.qj)({name:"",brand:"",price:"",description:"",instruction:"",mfg_date:"",exp_date:""}),formData:(0,c.qj)({name:"",brand:"",price:"",description:"",instruction:"",mfg_date:"",exp_date:""}),created_at:"",dialogs:(0,c.qj)({createItem:!1,editItem:!1}),lastUpdated:""}}function u(e){return e.dialogs.createItem}function p(e){return e.dialogs.editItem}var h=a(91569);const g="medicine";function f(e){if(console.log("getItems",!0),1==e.pagination.descending)var t="DESC";else t="ASC";var a={sort:e.pagination.sortBy,direction:t,page:e.pagination.page,rowsPerPage:e.pagination.rowsPerPage,search:e.search?e.search:this.filter.search};return new Promise(((e,t)=>{h.axios.get(g,{params:a}).then((t=>{e(t)})).catch((e=>{t(e)}))}))}function w(){return new Promise(((e,t)=>{h.axios.post(g,this.newData).then((t=>{this.lastUpdated=new Date,this.dialogs.createItem=!1,e(t)})).catch((e=>{t(e)}))}))}function b(){return new Promise(((e,t)=>{h.axios.put(g+"/"+this.formData.id,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.editItem=!1,e(t)})).catch((e=>{t(e)}))}))}function _(e){return new Promise(((t,a)=>{h.axios["delete"](g+"/"+e.id).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}const M=(0,l.Q_)("medicine",{state:m,getters:{...i},actions:{...n}}),C=(0,s.RC)((()=>Promise.all([a.e(4736),a.e(3064),a.e(1682)]).then(a.bind(a,11682)))),D=(0,s.RC)((()=>Promise.all([a.e(4736),a.e(3064),a.e(3769)]).then(a.bind(a,73769)))),P={name:"ManageMedicine",components:{CreateMedicine:C,EditMedicine:D},setup(){const e=M(),t=(0,s.Fl)((()=>e.showCreateMedicines)),a=(0,s.Fl)((()=>e.showEditMedicines));return{useStore:e,showCreateMedicines:t,showEditMedicines:a}}};var S=a(11639),q=a(69885),v=a(32074),I=a(44458),x=a(69984),E=a.n(x);const W=(0,S.Z)(P,[["render",r]]),j=W;E()(P,"components",{QPage:q.Z,QDialog:v.Z,QCard:I.Z})}}]);