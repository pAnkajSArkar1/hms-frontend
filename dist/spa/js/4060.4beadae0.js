"use strict";(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[4060],{64060:(e,a,l)=>{l.r(a),l.d(a,{default:()=>F});var t=l(59835);const o={class:"row q-col-gutter-md"},s={class:"col-12 col-md-6 col-lg-6"},r={class:"col-12 col-md-6 col-lg-6"},d={class:"col-12"},n={key:0},i={class:"q-col-gutter-md q-py-md"},m={class:"row q-col-gutter-md q-pt-md q-pb-md"},u={class:"col-12 col-md-6 col-lg-6"},c={class:"row items-center justify-end"},p={class:"col-12 col-md-6 col-lg-6"},f={class:"row q-col-gutter-md q-pb-md"},_={class:"col-12 col-md-6 col-lg-6"},g={class:"col-12 col-md-6 col-lg-6"};function b(e,a,l,b,v,y){const V=(0,t.up)("q-input"),h=(0,t.up)("QSearch"),w=(0,t.up)("q-checkbox"),D=(0,t.up)("q-item"),q=(0,t.up)("q-list"),S=(0,t.up)("q-btn"),k=(0,t.up)("q-date"),A=(0,t.up)("q-popup-proxy"),W=(0,t.up)("q-icon"),Q=(0,t.up)("q-select"),Z=(0,t.up)("q-uploader"),z=(0,t.up)("q-field"),U=(0,t.up)("QCreateForm"),E=(0,t.Q2)("ripple"),$=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(U,{useStore:l.useStore,title:"New Risk Assessment"},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t._)("div",s,[(0,t.Wm)(V,{dense:"",outlined:"",label:"Assessment Name",clearable:"",modelValue:b.formData.assessment_name,"onUpdate:modelValue":a[0]||(a[0]=e=>b.formData.assessment_name=e),rules:[e=>e&&e.length||"Please enter assessment"],"error-message":e.$getValidationErrors("assessment_name"),error:e.$hasValidationErrors("assessment_name")},null,8,["modelValue","rules","error-message","error"])]),(0,t._)("div",r,[(0,t.Wm)(h,{"auto-load":"false",label:"Select Activity",modelValue:b.formData.activity_id,"onUpdate:modelValue":[a[1]||(a[1]=e=>b.formData.activity_id=e),b.onActivitySelect],useStore:b.useActivity,optionValue:"id",optionLabel:"name",clearable:"","error-message":e.$getValidationErrors("activity_id"),error:e.$hasValidationErrors("activity_id")},null,8,["modelValue","useStore","onUpdate:modelValue","error-message","error"])])]),(0,t._)("div",d,[(0,t.Wm)(h,{"auto-load":"false",label:"Select Hazard",modelValue:b.formData.hazard_ids,"onUpdate:modelValue":[a[2]||(a[2]=e=>b.formData.hazard_ids=e),b.onHazardSelect],useStore:b.useHazard,optionValue:"id",optionLabel:"name",multiple:!0,"error-message":e.$getValidationErrors("hazard_ids"),error:e.$hasValidationErrors("hazard_ids")},null,8,["modelValue","useStore","onUpdate:modelValue","error-message","error"])]),""!=b.formData.hazard_ids?((0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("div",i,[(0,t._)("div",null,[(0,t.Wm)(q,{bordered:"",separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(b.riskOptions,(e=>(0,t.wy)(((0,t.wg)(),(0,t.j4)(D,{key:e.id,clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{modelValue:b.formData.risk_ids,"onUpdate:modelValue":a[3]||(a[3]=e=>b.formData.risk_ids=e),dense:"",val:e.id,label:e.name},null,8,["modelValue","val","label"])])),_:2},1024)),[[E]]))),128))])),_:1})])])])):(0,t.kq)("",!0),(0,t._)("div",null,[(0,t.Wm)(V,{dense:"",outlined:"",type:"textarea",label:"Comments / Remarks",modelValue:b.formData.comment,"onUpdate:modelValue":a[4]||(a[4]=e=>b.formData.comment=e)},null,8,["modelValue"])]),(0,t._)("div",m,[(0,t._)("div",u,[(0,t.Wm)(V,{dense:"",outlined:"",modelValue:b.formData.action_date,"onUpdate:modelValue":a[6]||(a[6]=e=>b.formData.action_date=e),label:"Action Date",rules:[e=>e&&e.length||"Please choose the action date"],"error-message":e.$getValidationErrors("action_date"),error:e.$hasValidationErrors("action_date")},{prepend:(0,t.w5)((()=>[(0,t.Wm)(W,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{modelValue:b.formData.action_date,"onUpdate:modelValue":a[5]||(a[5]=e=>b.formData.action_date=e)},{default:(0,t.w5)((()=>[(0,t._)("div",c,[(0,t.wy)((0,t.Wm)(S,{label:"Close",color:"primary",flat:""},null,512),[[$]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","rules","error-message","error"])]),(0,t._)("div",p,[(0,t.Wm)(Q,{options:b.Actioned_By,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"actioned_by",outlined:"",modelValue:b.formData.actioned_by,"onUpdate:modelValue":a[7]||(a[7]=e=>b.formData.actioned_by=e),dense:"",clearable:"",label:"Responsible Person",rules:[e=>e&&e.length||"Please select Responsible Person"],"error-message":e.$getValidationErrors("actioned_by"),error:e.$hasValidationErrors("actioned_by")},null,8,["options","modelValue","rules","error-message","error"])])]),(0,t._)("div",f,[(0,t._)("div",_,[(0,t.Wm)(z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{label:"Upload Image",square:"",flat:"",multiple:"",bordered:"","no-thumbnails":"","auto-upload":"",accept:"image/*",class:"full-width",factory:b.setAssessmentImg},null,8,["factory"])])),_:1})]),(0,t._)("div",g,[(0,t.Wm)(z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Z,{label:"Upload Document",square:"",flat:"",multiple:"",bordered:"","auto-upload":"",accept:".pdf,.txt,.doc,.docx",class:"full-width",factory:b.setAssessmentDoc,onRejected:b.onRejected},null,8,["factory","onRejected"])])),_:1})])])])),_:1},8,["useStore"])}var v=l(60499),y=l(3746),V=l(70865),h=l(51269),w=l(78725),D=l(94432),q=l(68982);const S={name:"CreateAssessment",props:{useStore:null},setup(e){const a=(0,v.iH)([]),l=(0,v.iH)([]),{useStore:t}=(0,v.qj)(e),{formData:o}=(0,y.Jk)(t),s=(0,V.j)(),r=(0,h.A)(),d=(0,w.H)(),n=(0,q.u)(),{setAssessmentImage:i}=n,{setAssessmentDocument:m}=n,{getItems:u}=r,{getItems:c}=d,p=(0,D.Z)(),{uploadItem:f}=p,_=e=>{let a=new FormData;return a.append("attachment_type","image"),a.append("file",e[0]),new Promise((e=>{f(a).then((a=>{i({id:a.data.media_id}),e({url:null})})).finally((()=>{}))}))},g=e=>{let a=new FormData;return a.append("attachment_type","document"),a.append("file",e[0]),new Promise((e=>{f(a).then((a=>{m({id:a.data.media_id}),e({url:null})})).finally((()=>{}))}))};function b(e){$q.notify({type:"negative",message:`${e.length} file(s) did not pass validation constraints`})}function S(e){null!==e&&u({all:!0,activity_id:e}).then((e=>{a.value=e.data}))}function k(e){console.error("onHazardSelect",e),null!==e&&c({all:!0,filter:{hazard_ids:e}}).then((e=>{l.value=e.data}))}return{formData:o,useActivity:s,useHazard:r,useRisk:d,setAssessmentImg:_,setAssessmentDoc:g,onRejected:b,assessment:n,onActivitySelect:S,onHazardSelect:k,hazardsOptions:a,riskOptions:l,Actioned_By:[{label:"Manager",value:"Manager"},{label:"Safety Officer",value:"Safety Officer"},{label:"CEO",value:"CEO"}],options:["Google","Facebook","Twitter","Apple","Oracle"]}}};var k=l(11639),A=l(66611),W=l(13246),Q=l(490),Z=l(11221),z=l(22857),U=l(52765),E=l(14351),$=l(68879),C=l(32259),H=l(18149),I=l(97534),P=l(51136),R=l(62146),j=l(69984),O=l.n(j);const x=(0,k.Z)(S,[["render",b]]),F=x;O()(S,"components",{QInput:A.Z,QList:W.Z,QItem:Q.Z,QCheckbox:Z.Z,QIcon:z.Z,QPopupProxy:U.Z,QDate:E.Z,QBtn:$.Z,QSelect:C.Z,QField:H.Z,QUploader:I.Z}),O()(S,"directives",{Ripple:P.Z,ClosePopup:R.Z})}}]);