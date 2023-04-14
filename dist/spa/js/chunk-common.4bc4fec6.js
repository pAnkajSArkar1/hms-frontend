(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[3064],{2322:(e,t,a)=>{"use strict";a.d(t,{E:()=>_});var i={};a.r(i),a.d(i,{showCreateEquipment:()=>d,showEditPpe:()=>c});var n={};a.r(n),a.d(n,{createItem:()=>h,deleteItem:()=>p,editItem:()=>g,getItems:()=>f});var s=a(3746),r=a(60499),l=a(4026);function o(){return{columns:[{name:"created at",align:"left",label:"Date",field:e=>l.dateConvert.format(e.created_at),sortable:!0},{name:"equipments",align:"left",label:"Equipments",field:"name",sortable:!0},{name:"created_by",align:"left",label:"Created By",field:e=>e?.created_by?.name,sortable:!0},{name:"actions",align:"right",label:"Actions"}],filter:{search:""},items:(0,r.qj)([]),item:(0,r.qj)({}),newData:(0,r.qj)({name:""}),created_by:{name:""},formData:(0,r.qj)({name:""}),dialogs:(0,r.qj)({createItem:!1,editItem:!1}),lastUpdated:""}}function d(e){return e.dialogs.createItem}function c(e){return e.dialogs.editItem}var m=a(91569);const u="ppe-equipment";function f(e){if(console.log("getItems",!0),1==e.pagination.descending)var t="DESC";else t="ASC";var a={sort:e.pagination.sortBy,direction:t,page:e.pagination.page,rowsPerPage:e.pagination.rowsPerPage,search:e.search?e.search:this.filter.search};return new Promise(((e,t)=>{m.axios.get(u,{params:a}).then((t=>{e(t)})).catch((e=>{t(e)}))}))}function h(){return new Promise(((e,t)=>{m.axios.post(u,this.newData).then((t=>{this.lastUpdated=new Date,this.dialogs.createItem=!1,e(t)})).catch((e=>{t(e)}))}))}function g(){return new Promise(((e,t)=>{m.axios.put(u+"/"+this.formData.id,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.editItem=!1,e(t)})).catch((e=>{t(e)}))}))}function p(e){return new Promise(((t,a)=>{m.axios["delete"](u+"/"+e.id).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}const _=(0,s.Q_)("equipments",{state:o,getters:{...i},actions:{...n}})},70865:(e,t,a)=>{"use strict";a.d(t,{j:()=>_});var i={};a.r(i),a.d(i,{showCreateActivity:()=>d,showEditActivity:()=>c});var n={};a.r(n),a.d(n,{createItem:()=>h,deleteItem:()=>p,editItem:()=>g,getItems:()=>f});var s=a(3746),r=a(60499),l=a(4026);function o(){return{columns:[{name:"created at",align:"left",label:"Date",field:e=>l.dateConvert.format(e.created_at),sortable:!0},{name:"activity",align:"left",label:"Activities",field:"name",sortable:!0},{name:"createdby",align:"left",label:"Created By",field:e=>e?.createdby?.name,sortable:!0},{name:"actions",align:"right",label:"Actions"}],filter:{search:""},items:(0,r.qj)([]),item:(0,r.qj)({}),newData:(0,r.qj)({name:""}),formData:(0,r.qj)({name:""}),createdby:{name:""},dialogs:(0,r.qj)({createItem:!1,editItem:!1}),lastUpdated:""}}function d(e){return e.dialogs.createItem}function c(e){return e.dialogs.editItem}var m=a(91569);const u="activity";function f(e){if(console.log("getItems",!0),1==e.pagination.descending)var t="DESC";else t="ASC";var a={sort:e.pagination.sortBy,direction:t,page:e.pagination.page,rowsPerPage:e.pagination.rowsPerPage,search:e.search?e.search:this.filter.search};return new Promise(((e,t)=>{m.axios.get(u,{params:a}).then((t=>{e(t)})).catch((e=>{t(e)}))}))}function h(){return new Promise(((e,t)=>{m.axios.post(u,this.newData).then((t=>{this.lastUpdated=new Date,this.dialogs.createItem=!1,e(t)})).catch((e=>{t(e)}))}))}function g(){return new Promise(((e,t)=>{m.axios.put(u+"/"+this.formData.id,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.editItem=!1,e(t)})).catch((e=>{t(e)}))}))}function p(e){return new Promise(((t,a)=>{m.axios["delete"](u+"/"+e.id).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}const _=(0,s.Q_)("manageEvents",{state:o,getters:{...i},actions:{...n}})},68982:(e,t,a)=>{"use strict";a.d(t,{u:()=>D});var i={};a.r(i),a.d(i,{showCreateAssessment:()=>d,showEditAssessment:()=>c,viewRiskAssessment:()=>m});var n={};a.r(n),a.d(n,{createItem:()=>g,deleteItem:()=>w,editItem:()=>p,generateReportDownloadURL:()=>b,getItem:()=>_,getItems:()=>h,setAssessmentDocument:()=>y,setAssessmentImage:()=>v});var s=a(3746),r=a(60499),l=a(4026);function o(){return{columns:[{name:"action date",align:"left",label:"Action Date",field:e=>l.dateConvert.format(e.action_date),sortable:!0},{name:"actioned_by",align:"left",label:"Actioned By",field:"actioned_by",sortable:!0},{name:"assessment",align:"left",label:"Assessments",field:"assessment_name",sortable:!0},{name:"activity_id",align:"left",label:"Activities",field:"activity",sortable:!0},{name:"hazard_id",align:"left",label:"Hazards",field:"hazards",sortable:!0},{name:"risk_id",align:"left",label:"Risks",field:"risks",sortable:!0},{name:"likelyhood",align:"left",label:"Likelyhood",field:"likelyhood",sortable:!0},{name:"severity",align:"left",label:"Severity",field:"severity",sortable:!0},{name:"frequency",align:"left",label:"Frequency",field:"frequency",sortable:!0},{name:"riskRating",align:"left",label:"Risk Rating",field:"risk_rating",sortable:!0},{name:"controls",align:"left",label:"Controls",field:"controls",sortable:!0},{name:"likelyhood",align:"left",label:"Likelyhood(After)",field:"likelyhood_after_control",sortable:!0},{name:"severity",align:"left",label:"Severity(After)",field:"severity_after_control",sortable:!0},{name:"frequency",align:"left",label:"Frequency(After)",field:"frequency_after_control",sortable:!0},{name:"riskRating",align:"left",label:"Risk Rating(After)",field:"risk_rating_after_control",sortable:!0},{name:"actions",align:"right",label:"Actions"}],filter:{search:""},items:(0,r.qj)([]),item:(0,r.qj)({}),formData:(0,r.qj)({created_at:"",assessment_name:"",activity_id:"",hazard_ids:[],risk_ids:[],document_media_ids:[],image_media_ids:[],comment:"",action_date:"",actioned_by:""}),dialogs:(0,r.qj)({createItem:!1,editItem:!1,viewItem:!0}),lastUpdated:""}}function d(e){return e.dialogs.createItem}function c(e){return e.dialogs.editItem}function m(e){return e.dialogs.viewItem}a(69665);var u=a(91569);const f="risk-assessment-report";function h(e){if(console.log("getItems",!0),1==e.pagination.descending)var t="DESC";else t="ASC";var a={sort:e.pagination.sortBy,direction:t,page:e.pagination.page,rowsPerPage:e.pagination.rowsPerPage,search:e.search?e.search:this.filter.search};return new Promise(((e,t)=>{u.axios.get(f,{params:a}).then((t=>{e(t)})).catch((e=>{t(e)}))}))}function g(){return new Promise(((e,t)=>{u.axios.post(f,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.createItem=!1,e(t)})).catch((e=>{t(e)}))}))}function p(){return new Promise(((e,t)=>{u.axios.put(f+"/"+this.formData.id,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.editItem=!1,e(t)})).catch((e=>{t(e)}))}))}function _(e){return new Promise(((t,a)=>{u.axios.get(f+"/"+e).then((e=>{t(e)})).catch((e=>{a(e)}))}))}function w(e){return new Promise(((t,a)=>{u.axios["delete"](f+"/"+e.id).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}function b(e){return new Promise(((t,a)=>{u.axios.get("/risk-assessment-report-generate/"+e.id).then((e=>{t(e.data)})).catch((e=>{a(e)}))}))}function y(e){this.formData.document_media_ids.push(e.id)}function v(e){this.formData.image_media_ids.push(e.id)}const D=(0,s.Q_)("useAssessmentStore",{state:o,getters:{...i},actions:{...n}})},51269:(e,t,a)=>{"use strict";a.d(t,{A:()=>w});var i={};a.r(i),a.d(i,{showCreateHazard:()=>d,showEditHazard:()=>c});var n={};a.r(n),a.d(n,{createItem:()=>h,deleteItem:()=>p,editItem:()=>g,getHazardsofActivity:()=>_,getItems:()=>f});var s=a(3746),r=a(60499),l=a(4026);function o(){return{columns:[{name:"created at",align:"left",label:"Date",field:e=>l.dateConvert.format(e.created_at),sortable:!0},{name:"hazard",align:"left",label:"Hazards",field:"name",sortable:!0},{name:"activity",align:"left",label:"Activities",field:e=>e?.activity?.name,sortable:!0},{name:"createdby",align:"left",label:"Created By",field:e=>e?.createdby?.name,sortable:!0},{name:"actions",align:"right",label:"Actions"}],filter:{activity_id:null,search:""},items:(0,r.qj)([]),item:(0,r.qj)({}),newData:(0,r.qj)({activity_id:null,name:""}),formData:(0,r.qj)({activity:{name:""},hazard_id:"",activity_id:"",name:""}),createdby:{name:""},dialogs:(0,r.qj)({createItem:!1,editItem:!1}),lastUpdated:""}}function d(e){return e.dialogs.createItem}function c(e){return e.dialogs.editItem}var m=a(91569);const u="hazard";function f(e){if(console.log("checking props",e),!0===e.all)var t={all:e.all,activity_id:e.activity_id?e.activity_id:""};else{if(1==e?.pagination?.descending)var a="DESC";else a="ASC";var i=null;e.activity_id&&(i=e.activity_id),this.filter.activity_id&&(i=this.filter.activity_id);t={sort:e.pagination.sortBy,direction:a,page:e.pagination.page,rowsPerPage:e.pagination.rowsPerPage,search:e.search?e.search:this.filter.search,activity_id:i||""}}return new Promise(((e,a)=>{m.axios.get(u,{params:t}).then((t=>{e(t)})).catch((e=>{a(e)}))}))}function h(){return new Promise(((e,t)=>{m.axios.post(u,this.newData).then((t=>{this.lastUpdated=new Date,this.dialogs.createItem=!1,e(t)})).catch((e=>{t(e)}))}))}function g(){return new Promise(((e,t)=>{m.axios.put(u+"/"+this.formData.id,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.editItem=!1,e(t)})).catch((e=>{t(e)}))}))}function p(e){return new Promise(((t,a)=>{m.axios["delete"](u+"/"+e.id).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}function _(e){return new Promise(((t,a)=>{m.axios.get(`${endpoint}/hazards-of-activity/${e.activity_id}`).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}const w=(0,s.Q_)("hazard",{state:o,getters:{...i},actions:{...n}})},10815:(e,t,a)=>{"use strict";a.d(t,{k:()=>_});var i={};a.r(i),a.d(i,{showCreateRating:()=>d,showEditRating:()=>c});var n={};a.r(n),a.d(n,{createItem:()=>h,deleteItem:()=>p,editItem:()=>g,getItems:()=>f});var s=a(3746),r=a(60499),l=a(4026);function o(){return{columns:[{name:"createdat",align:"left",label:"Created At",field:e=>l.dateConvert.format(e.created_at),sortable:!0},{name:"activity",align:"left",label:"Activity",field:e=>e?.activity?.name,sortable:!0},{name:"hazard",align:"left",label:"Hazard",field:e=>e?.hazard_id?.name,sortable:!0},{name:"risk",align:"left",label:"Risk",field:e=>e?.risk_id?.name,sortable:!0},{name:"likelyhood",align:"left",label:"Likelyhood",field:"likelyhood_before_control_value",sortable:!0},{name:"severity",align:"left",label:"Severity",field:"severity_before_control_value",sortable:!0},{name:"frequency",align:"left",label:"Frequency",field:"frequency_before_control_value",sortable:!0},{name:"riskRating",align:"left",label:"Risk Rating",field:"riskrating",sortable:!0},{name:"control",align:"left",label:"Control",field:"control_measures",sortable:!0},{name:"likelyhood",align:"left",label:"Livelyhood(After)",field:"likelyhood_after_control_value",sortable:!0},{name:"severity",align:"left",label:"Severity(After)",field:"severity_after_control_value",sortable:!0},{name:"frequency",align:"left",label:"Frequency(After)",field:"frequency_after_control_value",sortable:!0},{name:"riskRating",align:"left",label:"Risk Rating(After)",field:"riskrating_after",sortable:!0},{name:"actions",align:"right",label:"Actions"}],filter:{search:""},items:(0,r.qj)([]),item:(0,r.qj)({}),newData:(0,r.qj)({activity_id:"",hazard_id:"",risk_id:null,control_measures:"",likelyhood_before_control_value:"",severity_before_control_value:"",frequency_before_control_value:"",riskrating:"",likelyhood_after_control_value:"",severity_after_control_value:"",frequency_after_control_value:"",riskrating_after:""}),formData:(0,r.qj)({created_at:"",activity:{name:""},hazard_id:{name:""},risk_id:{name:""},control_measures:"",likelyhood_before_control_value:"",severity_before_control_value:"",frequency_before_control_value:"",riskrating:"",likelyhood_after_control_value:"",severity_after_control_value:"",frequency_after_control_value:"",riskrating_after:""}),dialogs:(0,r.qj)({createItem:!1,editItem:!1}),lastUpdated:""}}function d(e){return e.dialogs.createItem}function c(e){return e.dialogs.editItem}var m=a(91569);const u="risk-rating";function f(e){if(console.log("getItems",!0),1==e.pagination.descending)var t="DESC";else t="ASC";var a={sort:e.pagination.sortBy,direction:t,page:e.pagination.page,rowsPerPage:e.pagination.rowsPerPage,search:e.search?e.search:this.filter.search};return new Promise(((e,t)=>{m.axios.get(u,{params:a}).then((t=>{e(t)})).catch((e=>{t(e)}))}))}function h(){return new Promise(((e,t)=>{m.axios.post(u,this.newData).then((t=>{this.lastUpdated=new Date,this.dialogs.createItem=!1,e(t)})).catch((e=>{t(e)}))}))}function g(){return new Promise(((e,t)=>{m.axios.put(u+"/"+this.formData.id,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.editItem=!1,e(t)})).catch((e=>{t(e)}))}))}function p(e){return new Promise(((t,a)=>{m.axios["delete"](u+"/"+e.id).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}const _=(0,s.Q_)("riskRating",{state:o,getters:{...i},actions:{...n}})},78725:(e,t,a)=>{"use strict";a.d(t,{H:()=>_});var i={};a.r(i),a.d(i,{showCreateRisk:()=>d,showEditRisk:()=>c});var n={};a.r(n),a.d(n,{createItem:()=>h,deleteItem:()=>p,editItem:()=>g,getItems:()=>f});var s=a(3746),r=a(60499),l=a(4026);function o(){return{columns:[{name:"createdat",align:"left",label:"Created At",field:e=>l.dateConvert.format(e.created_at),sortable:!0},{name:"risk",align:"left",label:"Risks",field:"name",sortable:!0},{name:"hazard",align:"left",label:"Hazards",field:e=>e?.hazard?.name,sortable:!0},{name:"createdby",align:"left",label:"Created By",field:e=>e?.createdby?.name,sortable:!0},{name:"actions",align:"right",label:"Actions"}],filter:{search:""},items:(0,r.qj)([]),item:(0,r.qj)({}),newData:(0,r.qj)({activity_id:null,hazard_id:null,name:""}),formData:(0,r.qj)({hazard:{name:""},name:""}),createdby:{name:""},created_at:"",dialogs:(0,r.qj)({createItem:!1,editItem:!1}),lastUpdated:""}}function d(e){return e.dialogs.createItem}function c(e){return e.dialogs.editItem}var m=a(91569);const u="risk";function f(e){var t={};if(e.all)t.all=!0;else{if(1==e.pagination.descending)var a="DESC";else a="ASC";t.sort=e.pagination.sortBy,t.direction=a,t.page=e.pagination.page,t.rowsPerPage=e.pagination.rowsPerPage,t.search=e.search?e.search:e.filter.search}return e.filter.hazard_ids&&(t.hazard_ids=e.filter.hazard_ids),e.filter.hazard_id&&(t.hazard_id=e.filter.hazard_id),console.info("Risk getItems params",t),new Promise(((e,a)=>{m.axios.get(u,{params:t}).then((t=>{e(t)})).catch((e=>{a(e)}))}))}function h(){return new Promise(((e,t)=>{m.axios.post(u,this.newData).then((t=>{this.lastUpdated=new Date,this.dialogs.createItem=!1,e(t)})).catch((e=>{t(e)}))}))}function g(){return new Promise(((e,t)=>{m.axios.put(u+"/"+this.formData.id,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.editItem=!1,e(t)})).catch((e=>{t(e)}))}))}function p(e){return new Promise(((t,a)=>{m.axios["delete"](u+"/"+e.id).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}const _=(0,s.Q_)("risk",{state:o,getters:{...i},actions:{...n}})},98951:(e,t,a)=>{"use strict";a.d(t,{a:()=>_});var i={};a.r(i),a.d(i,{showCreateAsset:()=>d,showEditAsset:()=>c});var n={};a.r(n),a.d(n,{createItem:()=>h,deleteItem:()=>p,editItem:()=>g,getItems:()=>f});var s=a(3746),r=a(60499),l=a(4026);function o(){return{columns:[{name:"createdat",align:"left",label:"Created At",field:e=>l.dateConvert.format(e.created_at),sortable:!0},{name:"asset_code",align:"left",label:"Asset Code",field:"asset_code",sortable:!0},{name:"name",align:"left",label:"Asset name",field:"name",sortable:!0},{name:"department",align:"left",label:"Department",field:e=>e?.branch?.name,sortable:!0},{name:"createdby",align:"left",label:"Created By",field:e=>e?.createdby?.name,sortable:!0},{name:"actions",align:"right",label:"Actions"}],filter:{search:"",branch_id:null},items:(0,r.qj)([]),item:(0,r.qj)({}),newData:(0,r.qj)({created_at:"",createdby:{name:""},company_id:"",asset_code:"",name:"",branch:{name:""},branch_id:"",serial_number:"",make:"",year_of_manufacture:""}),formData:(0,r.qj)({created_at:"",createdby:{name:""},company_id:"",asset_code:"",name:"",branch:{name:""},branch_id:"",serial_number:"",make:"",year_of_manufacture:""}),dialogs:(0,r.qj)({createItem:!1,editItem:!1}),lastUpdated:""}}function d(e){return e.dialogs.createItem}function c(e){return e.dialogs.editItem}var m=a(91569);const u="assets";function f(e){if(e.all)var t={all:e.all,branch_id:e.branch_id};else{if(1==e.pagination.descending)var a="DESC";else a="ASC";t={sort:e.pagination.sortBy,direction:a,page:e.pagination.page,rowsPerPage:e.pagination.rowsPerPage,search:e.search?e.search:this.filter.search,branch_id:this?.filter?.branch_id}}return new Promise(((e,a)=>{m.axios.get(u,{params:t}).then((t=>{e(t)})).catch((e=>{a(e)}))}))}function h(){return new Promise(((e,t)=>{m.axios.post(u,this.newData).then((t=>{this.lastUpdated=new Date,this.dialogs.createItem=!1,e(t)})).catch((e=>{t(e)}))}))}function g(){return new Promise(((e,t)=>{m.axios.put(u+"/"+this.formData.id,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.editItem=!1,e(t)})).catch((e=>{t(e)}))}))}function p(e){return new Promise(((t,a)=>{m.axios["delete"](u+"/"+e.id).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}const _=(0,s.Q_)("asset",{state:o,getters:{...i},actions:{...n}})},58641:(e,t,a)=>{"use strict";a.d(t,{S:()=>p});var i={};a.r(i),a.d(i,{showCreatetaskManage:()=>o,showEdittaskManage:()=>d});var n={};a.r(n),a.d(n,{createItem:()=>f,deleteItem:()=>g,editItem:()=>h,getItems:()=>u});var s=a(3746),r=a(60499);a(4026);function l(){return{columns:[{name:"code",align:"left",label:"Code",field:"code",sortable:!0},{name:"name",align:"left",label:"Hospital Name",field:e=>e?.company_name?.name,sortable:!0},{name:"department_name",align:"left",label:"Department Name",field:"name",sortable:!0},{name:"actions",align:"right",label:"Actions"}],filter:{search:""},items:(0,r.qj)([]),item:(0,r.qj)({}),newData:(0,r.qj)({company_id:null,name:"",code:null,company_name:{name:""}}),formData:(0,r.qj)({name:"",code:null}),created_at:"",dialogs:(0,r.qj)({createItem:!1,editItem:!1}),lastUpdated:""}}function o(e){return e.dialogs.createItem}function d(e){return e.dialogs.editItem}var c=a(91569);const m="branches";function u(e){if(console.log("getItems",!0),1==e.pagination.descending)var t="DESC";else t="ASC";var a={sort:e.pagination.sortBy,direction:t,page:e.pagination.page,rowsPerPage:e.pagination.rowsPerPage,search:e.search?e.search:this.filter.search};return new Promise(((e,t)=>{c.axios.get(m,{params:a}).then((t=>{e(t)})).catch((e=>{t(e)}))}))}function f(){return new Promise(((e,t)=>{c.axios.post(m,this.newData).then((t=>{this.lastUpdated=new Date,this.dialogs.createItem=!1,e(t)})).catch((e=>{t(e)}))}))}function h(){return new Promise(((e,t)=>{c.axios.put(m+"/"+this.formData.id,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.editItem=!1,e(t)})).catch((e=>{t(e)}))}))}function g(e){return new Promise(((t,a)=>{c.axios["delete"](m+"/"+e.id).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}const p=(0,s.Q_)("branch",{state:l,getters:{...i},actions:{...n}})},61276:(e,t,a)=>{"use strict";a.d(t,{J:()=>y});var i={};a.r(i),a.d(i,{companyUserGetter:()=>c,showCreateModal:()=>o,showEditModal:()=>d});var n={};a.r(n),a.d(n,{createItem:()=>g,deleteItem:()=>_,editItem:()=>p,getItem:()=>h,getItems:()=>f,setNewItemLogo:()=>b,updateCompanyDetails:()=>w});var s=a(3746),r=a(60499);a(4026);function l(){return{columns:[{name:"name",align:"left",label:"Hospital Name",field:"name",sortable:!0},{name:"company email",align:"left",label:"Hospital Email",field:"company_email",sortable:!0},{name:"primary contact",align:"left",label:"Contact No.",field:"primary_contact",sortable:!0},{name:"actions",align:"right",label:"Actions"}],filter:{search:""},allItems:(0,r.qj)([]),items:(0,r.qj)([]),item:(0,r.qj)({}),newData:(0,r.qj)({created_at:"",name:"",country:"",company_email:"",primary_contact:null,secondary_contact:null,city:"",postcode:null,street:"",address:"",com_logo:null,logo:null}),formData:(0,r.qj)({created_at:"",name:"",country:"",company_email:"",primary_contact:null,secondary_contact:null,city:"",postcode:null,street:"",address:"",com_logo:null,logo:null}),dialogs:(0,r.qj)({createItem:!1,editItem:!1}),lastUpdated:""}}function o(e){return e.dialogs.createItem}function d(e){return e.dialogs.editItem}function c(e){return e.dialogs.columns}var m=a(91569);const u="company";function f(e){if(console.log("getItems",!0),e.pagination.descending)var t="DESC";else t="ASC";var a={sort:e.pagination.sortBy,direction:t,page:e.pagination.page,rowsPerPage:e.pagination.rowsPerPage,search:e.search?e.search:this.filter.search};e.all&&(a.all=!0);const i=!!e.all;return new Promise(((e,t)=>{m.axios.get(u,{params:a}).then((t=>{this.allItems=1==i?t.data:t.data.data,e(t)})).catch((e=>{t(e)}))}))}function h(e){return new Promise(((t,a)=>{m.axios.get(u+"/"+e.id).then((e=>{t(e.data)})).catch((e=>{a(e)}))}))}function g(){return new Promise(((e,t)=>{m.axios.post(u,this.newData).then((t=>{this.lastUpdated=new Date,this.dialogs.createItem=!1,e(t)})).catch((e=>{t(e)}))}))}function p(){return new Promise(((e,t)=>{m.axios.put(u+"/"+this.formData.id,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.editItem=!1,e(t)})).catch((e=>{t(e)}))}))}function _(e){return new Promise(((t,a)=>{m.axios["delete"](u+"/"+e.id).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}function w(e){return new Promise(((t,a)=>{m.axios.put(u+"/"+e.id,e).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}function b(e){console.log("props",e),this.newData.logo=e.id,this.formData.logo=e.id}const y=(0,s.Q_)("company",{state:l,getters:{...i},actions:{...n}})},33701:(e,t,a)=>{"use strict";a.d(t,{L:()=>b});var i={};a.r(i),a.d(i,{showCreateModal:()=>d,showEditModal:()=>c});var n={};a.r(n),a.d(n,{createItem:()=>g,deleteItem:()=>_,editItem:()=>p,getItems:()=>h,setDigitalSignature:()=>w});var s=a(3746),r=a(60499),l=a(4026);function o(){return{columns:[{name:"created_at",align:"left",label:"Created At",field:e=>l.dateConvert.format(e.created_at),sortable:!0},{name:"name",align:"left",label:"Full Name",field:"name",sortable:!0},{name:"email",align:"left",label:"Email",field:"email",sortable:!0},{name:"actions",align:"right",label:"Actions"}],filter:{search:"",company_id:""},items:(0,r.qj)([]),item:(0,r.qj)({}),newData:(0,r.qj)({name:"",email:"",role:"",password:"",confirm_password:"",company_id:null,signed_by:""}),formData:(0,r.qj)({name:"",email:"",role:"",old_password:"",password:"",confirm_password:"",company_id:null,signed_by:""}),created_at:"",dialogs:(0,r.qj)({createItem:!1,editItem:!1}),lastUpdated:""}}function d(e){return e.dialogs.createItem}function c(e){return e.dialogs.editItem}var m=a(91569);const u="users",f="user-profile-update";function h(e){if(console.log("getItems",!0),1==e.pagination.descending)var t="DESC";else t="ASC";var a={sort:e.pagination.sortBy,direction:t,page:e.pagination.page,rowsPerPage:e.pagination.rowsPerPage,search:e.search?e.search:this.filter.search,company_id:this.filter?.company_id};return new Promise(((e,t)=>{m.axios.get(u,{params:a}).then((t=>{e(t)})).catch((e=>{t(e)}))}))}function g(){return new Promise(((e,t)=>{m.axios.post(u,this.newData).then((t=>{this.lastUpdated=new Date,this.dialogs.createItem=!1,e(t)})).catch((e=>{t(e)}))}))}function p(){return new Promise(((e,t)=>{m.axios.put(f+"/"+this.formData.id,this.formData).then((t=>{this.lastUpdated=new Date,this.dialogs.editItem=!1,e(t)})).catch((e=>{t(e)}))}))}function _(e){return new Promise(((t,a)=>{m.axios["delete"](u+"/"+e.id).then((e=>{this.lastUpdated=new Date,t(e)})).catch((e=>{a(e)}))}))}function w(e){this.formData.signed_by=e.id}const b=(0,s.Q_)("user",{state:o,getters:{...i},actions:{...n}})},17904:(e,t,a)=>{"use strict";a.d(t,{Z:()=>D});var i=a(59835),n=a(86970),s=a(61957);const r={class:"dd-font-weigh"};function l(e,t,a,l,o,d){const c=(0,i.up)("q-item-label"),m=(0,i.up)("q-item-section"),u=(0,i.up)("q-item"),f=(0,i.up)("q-list"),h=(0,i.up)("q-btn-dropdown"),g=(0,i.up)("q-expansion-item"),p=(0,i.up)("q-icon"),_=(0,i.Q2)("close-popup");return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.essentialLinks||e.essentialLinksAccount,(t=>((0,i.wg)(),(0,i.j4)(f,{flat:"",class:"rounded-borders",key:t.title,separator:""},{default:(0,i.w5)((()=>[e.isShowDD(t)?((0,i.wg)(),(0,i.j4)(h,{key:0,stretch:"",flat:"","no-caps":""},{label:(0,i.w5)((()=>[(0,i._)("span",r,(0,n.zw)(t.title),1)])),default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.childs,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(u,{clickable:"",to:e.link,key:e.title},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])),[[s.F8,e.show],[_]]))),128))])),_:2},1024)])),_:2},1024)):(0,i.kq)("",!0),e.isShowExpand(t)?(0,i.wy)(((0,i.wg)(),(0,i.j4)(g,{key:1,"expand-separator":"",icon:t.icon,label:t.title,class:"border-bottom-light"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.childs,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(u,{clickable:"",to:e.link,key:e.title},{default:(0,i.w5)((()=>[e.icon?((0,i.wg)(),(0,i.j4)(m,{key:0,avatar:""})):(0,i.kq)("",!0),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])),[[s.F8,e.show]]))),128))])),_:2},1032,["icon","label"])),[[s.F8,t.show]]):(0,i.kq)("",!0),e.isShowDD(t)||e.isShowExpand(t)?(0,i.kq)("",!0):(0,i.wy)(((0,i.wg)(),(0,i.j4)(u,{key:2,clickable:"",to:t.link,disable:t.disable,class:(0,n.C_)(["border-bottom-light",e.activeClass(e.$route.path,t.link)])},{default:(0,i.w5)((()=>[t.icon?((0,i.wg)(),(0,i.j4)(m,{key:0,avatar:""},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{name:t.icon},null,8,["name"])])),_:2},1024)):(0,i.kq)("",!0),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to","disable","class"])),[[s.F8,t.show]])])),_:2},1024)))),128)}var o=a(60499);const d=(0,i.aZ)({name:"EssentialLink",props:{essentialLinks:{type:Array,required:[]},essentialLinksAccount:{type:Array,required:[]},isVertical:{type:Boolean,default:!0}},setup(e){const{isVertical:t}=(0,o.qj)(e),a=e=>!t&&e.childs&&e.childs.length>0,i=e=>t&&e.childs&&e.childs.length>0,n=(e,a)=>{if(!t)return e==a?"text-green-2":"text-white"};return{isShowDD:a,isShowExpand:i,activeClass:n}}});var c=a(11639),m=a(13246),u=a(18479),f=a(490),h=a(76749),g=a(33115),p=a(61123),_=a(22857),w=a(62146),b=a(69984),y=a.n(b);const v=(0,c.Z)(d,[["render",l],["__scopeId","data-v-d8ab1e3a"]]),D=v;y()(d,"components",{QList:m.Z,QBtnDropdown:u.Z,QItem:f.Z,QItemSection:h.Z,QItemLabel:g.Z,QExpansionItem:p.Z,QIcon:_.Z}),y()(d,"directives",{ClosePopup:w.Z})},78894:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var i=a(59835);const n={class:"row bg-white q-pl-md q-lr-md secondary-header items-center"},s=(0,i._)("div",{class:"col-12 col-md-3"},[(0,i._)("div",{class:"text-subtitle1 text-bold q-py-none text-primary"}," PPE Inspection ")],-1),r={class:"col-12 col-md-9 col-lg-9"},l={class:"secondary-nav flex justify-end display-inline"},o=(0,i.Uk)(" PPE Checklist "),d=(0,i.Uk)(" PPE Templates "),c=(0,i.Uk)(" PPE Equipments ");function m(e,t){const a=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",n,[s,(0,i._)("div",r,[(0,i._)("div",l,[(0,i.Wm)(a,{to:"/ppe-inspection"},{default:(0,i.w5)((()=>[o])),_:1}),(0,i.Wm)(a,{to:"/ppe-inspection/template"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i.Wm)(a,{to:"/ppe-inspection/equipment"},{default:(0,i.w5)((()=>[c])),_:1})])])])}var u=a(11639);const f={},h=(0,u.Z)(f,[["render",m]]),g=h},64233:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>E});var i=a(59835),n=a(86970);const s={class:"row q-col-gutter-md"},r={class:"flex flex-center"},l={class:"col-12 col-md-2 col-lg-2 column"},o={class:"q-pb-sm"},d=(0,i._)("p",{class:"text-weight-bold user text-center"}," Risk Value Before ",-1),c={class:"q-ma-none text-center text-weight-bold"},m=(0,i._)("div",null,[(0,i._)("p",{class:"text-weight-bold user text-center"}," Risk Value After ")],-1),u={class:"q-ma-none text-center text-weight-bold"},f={class:"col-12 col-md-4 col-lg-4"},h={class:"col-12 col-md-3 col-lg-3"},g={class:"col-12 col-md-3 col-lg-3"},p={class:"q-pt-md"},_=(0,i.Uk)(" Download ");function w(e,t,a,w,b,y){const v=(0,i.up)("q-card-section"),D=(0,i.up)("q-card"),k=(0,i.up)("BarChart"),I=(0,i.up)("PieChart"),q=(0,i.up)("q-tooltip"),P=(0,i.up)("q-btn"),C=(0,i.up)("QDataTable"),A=(0,i.up)("create-assessment"),x=(0,i.up)("q-dialog");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[(0,i._)("div",s,[(0,i._)("div",r,[(0,i._)("div",l,[(0,i._)("div",o,[(0,i.Wm)(D,null,{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"column"},{default:(0,i.w5)((()=>[d,(0,i._)("p",c,(0,n.zw)(w.assessmentDetails?.risk_rating?w.assessmentDetails?.risk_rating:0),1)])),_:1})])),_:1})]),(0,i.Wm)(D,null,{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"column"},{default:(0,i.w5)((()=>[m,(0,i._)("div",null,[(0,i._)("p",u,(0,n.zw)(w.assessmentDetails?.risk_rating_after_control?w.assessmentDetails?.risk_rating_after_control:0),1)])])),_:1})])),_:1})])]),(0,i._)("div",f,[(0,i.Wm)(D,null,{default:(0,i.w5)((()=>[(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(k,{chartAxis:"y",chatTitle:"Risk Value Before and Risk Value After",class:"barchart",chartData:w.barChartData},null,8,["chartData"])])),_:1})])),_:1})]),(0,i._)("div",h,[(0,i.Wm)(D,null,{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"flex justify-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{chatTitle:"Risk Value Before",style:{width:"300px"},chartData:w.riskValueBefore},null,8,["chartData"])])),_:1})])),_:1})]),(0,i._)("div",g,[(0,i.Wm)(D,null,{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"flex justify-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(I,{chatTitle:"Risk Value After",style:{width:"300px"},chartData:w.riskValueAfter},null,8,["chartData"])])),_:1})])),_:1})])]),(0,i._)("div",p,[(0,i.Wm)(C,{canEdit:!1,canView:!0,useStore:w.useStore,aditionalActions:!0,viewRoute:"view-risk-assessment",title:"Risk Assessment"},{aditionalActions:(0,i.w5)((e=>[(0,i.Wm)(P,{flat:"",round:"",dense:"",color:"secondary",icon:"file_download",class:"q-ml-sm",onClick:t=>w.onClickDownload(e.row)},{default:(0,i.w5)((()=>[(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[_])),_:1})])),_:2},1032,["onClick"])])),_:1},8,["useStore"])])]),(0,i.Wm)(x,{modelValue:w.showCreateAssessment,"onUpdate:modelValue":t[0]||(t[0]=e=>w.showCreateAssessment=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(D,{class:"card-width"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:(0,n.C_)((e.$q.platform.is.desktop,""))},[(0,i.Wm)(A,{useStore:w.useStore,modal:!0},null,8,["useStore"])],2)])),_:1})])),_:1},8,["modelValue"])],64)}a(69665);var b=a(60499),y=a(68982);const v=(0,i.RC)((()=>Promise.all([a.e(4736),a.e(3064),a.e(4060)]).then(a.bind(a,64060)))),D={name:"RiskAssessment",components:{CreateAssessment:v},setup(){const e=(0,y.u)(),t=(0,i.Fl)((()=>e.showCreateAssessment)),{generateReportDownloadURL:a}=e,n=(0,b.iH)(""),s=e=>{router.push({name:props.viewRoute,params:{id:e.id}})},r=e=>{a({id:e.id}).then((e=>{window.open(e.tempUrl)}))},l=(0,b.qj)({labels:["Risk Rating","Frequency","Severity","Likelyhood"],datasets:[{data:[],backgroundColor:["#F10B0B","#F1F00B","#42CE23","#27AE60"],hoverOffset:4}]}),o=(0,b.qj)({labels:["Risk Rating Before","Frequency","Severity","Likelyhood"],datasets:[{data:[],backgroundColor:["#F10B0B","#F1F00B","#42CE23","#27AE60"],hoverOffset:4}]}),d=(0,b.qj)({labels:["Risk Rating After","Frequency","Severity","Likelyhood"],datasets:[{data:[],backgroundColor:["#F10B0B","#F1F00B","#42CE23","#27AE60"],hoverOffset:4}]}),c=t=>{e.getItem(t.id).then((e=>{n.value=e.data,l.datasets[0].data=[],l.datasets[0].data.push(e.data.risk_rating),l.datasets[0].data.push(e.data.frequency),l.datasets[0].data.push(e.data.severity),l.datasets[0].data.push(e.data.likelyhood),o.datasets[0].data=[],o.datasets[0].data.push(e.data.risk_rating),o.datasets[0].data.push(e.data.frequency),o.datasets[0].data.push(e.data.severity),o.datasets[0].data.push(e.data.likelyhood),d.datasets[0].data=[],d.datasets[0].data.push(e.data.risk_rating_after_control),d.datasets[0].data.push(e.data.frequency_after_control),d.datasets[0].data.push(e.data.severity_after_control),d.datasets[0].data.push(e.data.likelyhood_after_control)}))};return{useStore:e,showCreateAssessment:t,assessmentDetails:n,barChartData:l,riskValueBefore:o,riskValueAfter:d,onTableRowClick:c,onClickDownload:r,onClickView:s}}};var k=a(11639),I=a(44458),q=a(63190),P=a(68879),C=a(46858),A=a(31233),x=a(67220),j=a(32074),U=a(69984),S=a.n(U);const R=(0,k.Z)(D,[["render",w]]),E=R;S()(D,"components",{QCard:I.Z,QCardSection:q.Z,QBtn:P.Z,QTooltip:C.Z,QTr:A.Z,QTd:x.Z,QDialog:j.Z})},24811:(e,t,a)=>{e.exports=a.p+"img/pexels1.7caec8b1.jpg"}}]);