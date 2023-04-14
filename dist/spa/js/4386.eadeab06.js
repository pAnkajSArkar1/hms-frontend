"use strict";(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[4386],{54386:(e,l,t)=>{t.r(l),t.d(l,{default:()=>Y});var o=t(59835),a=t(86970);const s={class:"row q-col-gutter-md q-pb-md"},r={class:"col-12"},d={class:"col-12"},i={class:"row q-col-gutter-md q-pt-md q-pb-md"},n=(0,o._)("div",{class:"text-h6"},"Assets",-1),c={class:"row q-col-gutter-md q-pt-md"},m={class:"col-12"},u={class:"text-title1 text-bold"},p={class:"row q-col-gutter-md q-pt-md"},_={class:"col-12 col-md-6 col-lg-6"},g={class:"col-12 col-md-6 col-lg-6"},V={class:"col-12 col-lg-6 col-md-6 col-sm-6"},v={class:"col-12 col-lg-6 col-md-6 col-sm-6"},f={class:"row q-col-gutter-md q-pt-md q-pt-md"},b={class:"col-12 col-md-6 col-lg-6"},h={class:"row items-center justify-end"},y={class:"col-12 col-md-6 col-lg-6"},D={class:"row q-col-gutter-md"},q={class:"col-12"},S={class:"col-12"},w={class:"col-12"};function k(e,l,t,k,W,U){const C=(0,o.up)("QSearch"),E=(0,o.up)("q-input"),T=(0,o.up)("q-separator"),$=(0,o.up)("q-select"),x=(0,o.up)("UploaderFile"),P=(0,o.up)("q-btn"),Q=(0,o.up)("q-date"),Z=(0,o.up)("q-popup-proxy"),F=(0,o.up)("q-icon"),A=(0,o.up)("QEditForm"),I=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(A,{useStore:k.useStore,title:"Edit Checklist"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("div",s,[(0,o._)("div",r,[(0,o.Wm)(C,{label:"Template Name",disable:!0,modelValue:k.formData.asset_inspection_template_id,"onUpdate:modelValue":l[0]||(l[0]=e=>k.formData.asset_inspection_template_id=e),useStore:k.templateStore,optionValue:"id",optionLabel:"title",rules:[e=>e||"Please choose a template"],"error-message":e.$getValidationErrors("asset_inspection_template_id"),error:e.$hasValidationErrors("asset_inspection_template_id")},null,8,["modelValue","useStore","rules","error-message","error"])]),(0,o._)("div",d,[(0,o.Wm)(E,{dense:"",outlined:"",label:"Checklist title",modelValue:k.formData.title,"onUpdate:modelValue":l[1]||(l[1]=e=>k.formData.title=e),rules:[e=>e&&e.length||"Please enter Checklist Title"],"error-message":e.$getValidationErrors("title"),error:e.$hasValidationErrors("title")},null,8,["modelValue","rules","error-message","error"])])]),(0,o._)("div",i,[n,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(k.formData.assets,(l=>((0,o.wg)(),(0,o.iD)("div",{class:"col-12 col-sm-12 col-md-12 col-lg-12",key:l.id},[(0,o._)("div",c,[(0,o._)("div",m,[(0,o._)("div",u,(0,a.zw)(l?.asset_details?.name),1)])]),(0,o.Wm)(T),(0,o._)("div",p,[(0,o._)("div",_,[(0,o.Wm)($,{modelValue:l.status,"onUpdate:modelValue":e=>l.status=e,options:k.statuslist,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"Status",outlined:"",dense:"",label:"Asset Status",rules:[e=>e&&e.length||"Please select Status"],"error-message":e.$getValidationErrors("status"),error:e.$hasValidationErrors("status")},null,8,["modelValue","onUpdate:modelValue","options","rules","error-message","error"])]),(0,o._)("div",g,[(0,o.Wm)($,{modelValue:l.report_defect,"onUpdate:modelValue":e=>l.report_defect=e,options:k.defectslist,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"defects",outlined:"",dense:"",label:"Select Defects",rules:[e=>e&&e.length||"Please select defects"],"error-message":e.$getValidationErrors("report_defect"),error:e.$hasValidationErrors("report_defect")},null,8,["modelValue","onUpdate:modelValue","options","rules","error-message","error"])]),(0,o._)("div",V,[(0,o.Wm)(x,{modelValue:l.image_ids,"onUpdate:modelValue":e=>l.image_ids=e,label:"Upload Image",multiple:!0,acceptFileType:"image/*"},null,8,["modelValue","onUpdate:modelValue"])]),(0,o._)("div",v,[(0,o.Wm)(x,{modelValue:l.document_ids,"onUpdate:modelValue":e=>l.document_ids=e,label:"Upload Document",multiple:!0,acceptFileType:".pdf,.txt,.doc,.docx",attachmentType:"document"},null,8,["modelValue","onUpdate:modelValue"])])])])))),128))]),(0,o.Wm)(T),(0,o._)("div",f,[(0,o._)("div",b,[(0,o.Wm)(E,{dense:"",outlined:"",modelValue:k.formData.action_date,"onUpdate:modelValue":l[3]||(l[3]=e=>k.formData.action_date=e),label:"Action Date",rules:[e=>e&&e.length||"Please choose the action date"],"error-message":e.$getValidationErrors("action_date"),error:e.$hasValidationErrors("action_date")},{prepend:(0,o.w5)((()=>[(0,o.Wm)(F,{name:"event",class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{modelValue:k.formData.action_date,"onUpdate:modelValue":l[2]||(l[2]=e=>k.formData.action_date=e)},{default:(0,o.w5)((()=>[(0,o._)("div",h,[(0,o.wy)((0,o.Wm)(P,{label:"Close",color:"primary",flat:""},null,512),[[I]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","rules","error-message","error"])]),(0,o._)("div",y,[(0,o.Wm)(E,{dense:"",outlined:"",label:"Actioned by",modelValue:k.formData.actioned_by,"onUpdate:modelValue":l[4]||(l[4]=e=>k.formData.actioned_by=e),rules:[e=>e&&e.length||"Please enter Actioned by"],"error-message":e.$getValidationErrors("actioned_by"),error:e.$hasValidationErrors("actioned_by")},null,8,["modelValue","rules","error-message","error"])])]),(0,o._)("div",D,[(0,o._)("div",q,[(0,o.Wm)(E,{modelValue:k.formData.description,"onUpdate:modelValue":l[5]||(l[5]=e=>k.formData.description=e),outlined:"",label:"Recommendations",type:"textarea"},null,8,["modelValue"])]),(0,o._)("div",S,[(0,o.Wm)(E,{modelValue:k.formData.remarks,"onUpdate:modelValue":l[6]||(l[6]=e=>k.formData.remarks=e),outlined:"",label:"Comments",type:"textarea"},null,8,["modelValue"])]),(0,o._)("div",w,[(0,o.Wm)(P,{loading:e.saveLoader,dense:"",color:"primary",icon:"cloud_upload",label:"Save Report To Safety File",class:"q-px-sm",onClick:k.uploadToSafetyFile},null,8,["loading","onClick"])])])])])),_:1},8,["useStore"])}var W=t(60499),U=t(3746),C=t(40038),E=t(65390),T=t(94432);const $={name:"CreateDashboard",components:{},setup(){const e=(0,o.FN)(),l=e.appContext.config.globalProperties.$Qnotify,t=(0,C.L)(),a=(0,E.d)(),{formData:s}=(0,U.Jk)(t),r=(0,T.Z)(),{uploadItem:d}=r,i=(0,W.iH)(!1),n=()=>{console.log("onTemplateSelect",s.value.asset_inspection_template_id),a.getItem({id:s.value.asset_inspection_template_id}).then((e=>{}))},c=()=>{i.value=!0,t.saveToSafetyFile({report_type:"asset_inspection",id:s.value.id}).then((e=>{i.value=!1,l({message:e.data.message,type:"positive"})})).catch((e=>{i.value=!1}))};return{useStore:t,formData:s,templateStore:a,onTemplateSelect:n,uploadToSafetyFile:c,defectslist:["Yes – Requires Maintenance","No","Not Required"],statuslist:["Checked – Working","Checked – Not Working","Checked – Good","Checked – Poor"]}}};var x=t(11639),P=t(66611),Q=t(50926),Z=t(32259),F=t(22857),A=t(52765),I=t(14351),N=t(68879),R=t(62146),L=t(69984),j=t.n(L);const H=(0,x.Z)($,[["render",k]]),Y=H;j()($,"components",{QInput:P.Z,QSeparator:Q.Z,QSelect:Z.Z,QIcon:F.Z,QPopupProxy:A.Z,QDate:I.Z,QBtn:N.Z}),j()($,"directives",{ClosePopup:R.Z})}}]);