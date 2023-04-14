"use strict";(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[5737],{59358:(e,t,a)=>{a.d(t,{T:()=>w});var l={};a.r(l),a.d(l,{showCreateEquipment:()=>r,showEditEquipment:()=>c});var n={};a.r(n),a.d(n,{createItem:()=>p,deleteItem:()=>f,editItem:()=>h,getItems:()=>m});var s=a(3746),o=a(60499);function i(){return{columns:[{name:"date",align:"left",label:"Date",field:"name",sortable:!0},{name:"siteChecked",align:"left",label:"Checked By",field:"name",sortable:!0},{name:"inspector",align:"left",label:"Inspector",field:"name",sortable:!0},{name:"business",align:"left",label:"Business Name",field:"name",sortable:!0},{name:"project",align:"left",label:"Project Name",field:"name",sortable:!0},{name:"actions",align:"right",label:"Actions"}],filter:{search:""},items:(0,o.qj)([]),item:(0,o.qj)({}),newData:(0,o.qj)({name:"",checked_by:"",supervisor:"",address:"",primary_number:"",secondary_number:"",action_date:"",branch_id:null,user:[{user_id:null}],assets:[{asset_id:null}],comment:""}),formData:(0,o.qj)({name:""}),dialogs:(0,o.qj)({createItem:!1,editItem:!1}),lastUpdated:""}}function r(e){return e.dialogs.createItem}function c(e){return e.dialogs.editItem}var d=a(91569);const u="ppe-template";function m(e){if(console.log("getItems",!0),1==e.pagination.descending)var t="DESC";else t="ASC";var a={sort:e.pagination.sortBy,direction:t,page:e.pagination.page,rowsPerPage:e.pagination.rowsPerPage,search:e.search?e.search:this.filter.search};return new Promise(((e,t)=>{d.axios.get(u,{params:a}).then((t=>{e(t)})).catch((e=>{t(e)}))}))}function p(){return new Promise(((e,t)=>{d.axios.post(u,this.newData).then((t=>{this.lastUpdated=new Date,this.dialogs.createItem=!1,e(t)})).catch((e=>{t(e)}))}))}function h(){return new Promise(((e,t)=>{d.axios.put(u+"/"+this.formData.id,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.editItem=!1,e(t)})).catch((e=>{t(e)}))}))}function f(e){return new Promise(((t,a)=>{d.axios["delete"](u+"/"+e.id).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}const w=(0,s.Q_)("ppechecklist",{state:i,getters:{...l},actions:{...n}})},95737:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var l=a(59835);function n(e,t,a,n,s,o){const i=(0,l.up)("ppe-menu"),r=(0,l.up)("ppe-checklist"),c=(0,l.up)("q-page");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(i),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r)])),_:1})],64)}var s=a(78894),o=a(86970);const i={class:"row q-col-gutter-md"},r={class:"col-12 col-md-2 col-lg-2"},c={class:"q-pb-md"},d=(0,l._)("p",null,"Ppe Inspection",-1),u=(0,l._)("p",null,"Ppe Inspection",-1),m={class:"col-12 col-md-10 col-lg-10"},p={class:"col-12 col-md-4 col-lg-4"},h={class:"col-12 col-md-8 col-lg-8"},f=(0,l.Uk)(" Download ");function w(e,t,a,n,s,w){const g=(0,l.up)("q-card-section"),_=(0,l.up)("q-card"),b=(0,l.up)("BarChart"),C=(0,l.up)("PieChart"),q=(0,l.up)("q-tooltip"),k=(0,l.up)("q-btn"),D=(0,l.up)("QDataTable"),v=(0,l.up)("create-checklist"),W=(0,l.up)("q-dialog"),P=(0,l.up)("edit-checklist"),E=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(E,{class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l._)("div",r,[(0,l._)("div",c,[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[d])),_:1})])),_:1})]),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[u])),_:1})])),_:1})]),(0,l._)("div",m,[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b,{chartLabel:"Ppe Inspection Checklist",chartData:n.chartData,class:"barchart"},null,8,["chartData"])])),_:1})])),_:1})]),(0,l._)("div",p,[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(C,{chartData:n.chartData},null,8,["chartData"])])),_:1})])),_:1})]),(0,l._)("div",h,[(0,l.Wm)(D,{aditionalActions:!0,useStore:n.useStore,title:"PPE Checklist"},{aditionalActions:(0,l.w5)((t=>[(0,l.Wm)(k,{flat:"",round:"",dense:"",color:"secondary",icon:"file_download",class:"q-ml-sm",onClick:a=>e.onClickDownload(t.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[f])),_:1})])),_:2},1032,["onClick"])])),_:1},8,["useStore"])])]),(0,l.Wm)(W,{modelValue:n.showCreateEquipment,"onUpdate:modelValue":t[0]||(t[0]=e=>n.showCreateEquipment=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"card-width"},{default:(0,l.w5)((()=>[(0,l._)("div",{class:(0,o.C_)((e.$q.platform.is.desktop,""))},[(0,l.Wm)(v,{useStore:n.useStore,modal:!0},null,8,["useStore"])],2)])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(W,{modelValue:n.showEditEquipment,"onUpdate:modelValue":t[1]||(t[1]=e=>n.showEditEquipment=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"card-width"},{default:(0,l.w5)((()=>[(0,l._)("div",{class:(0,o.C_)((e.$q.platform.is.desktop,""))},[(0,l.Wm)(P,{useStore:n.useStore,modal:!0},null,8,["useStore"])],2)])),_:1})])),_:1},8,["modelValue"])])),_:1})}var g=a(59358);const _=(0,l.RC)((()=>Promise.all([a.e(3064),a.e(3048)]).then(a.bind(a,53048)))),b=(0,l.RC)((()=>a.e(7517).then(a.bind(a,97517)))),C={name:"PpeChecklist",components:{CreateChecklist:_,EditChecklist:b},setup(){const e=(0,g.T)(),t=(0,l.Fl)((()=>e.showCreateEquipment)),a=(0,l.Fl)((()=>e.showEditEquipment));return{useStore:e,showCreateEquipment:t,showEditEquipment:a,chartData:{labels:["Risk Rating","Frequency","Severity","Likelyhood"],datasets:[{data:[400,150,100,200],backgroundColor:["#2F8F9D","#3BACB6","#82DBD8","#B3E8E5"],hoverOffset:4}]}}}};var q=a(11639),k=a(69885),D=a(44458),v=a(63190),W=a(68879),P=a(46858),E=a(32074),I=a(69984),S=a.n(I);const y=(0,q.Z)(C,[["render",w]]),B=y;S()(C,"components",{QPage:k.Z,QCard:D.Z,QCardSection:v.Z,QBtn:W.Z,QTooltip:P.Z,QDialog:E.Z});const Q={components:{PpeMenu:s["default"],PpeChecklist:B},setup(){return{}}},Z=(0,q.Z)(Q,[["render",n],["__scopeId","data-v-605f4c7b"]]),j=Z;S()(Q,"components",{QPage:k.Z})}}]);