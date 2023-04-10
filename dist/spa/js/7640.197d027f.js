"use strict";(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[7640],{67640:(e,l,a)=>{a.r(l),a.d(l,{default:()=>P});var o=a(59835);const r={class:"row q-col-gutter-md"},s={class:"col-12 col-md-6 col-lg-6"},t={class:"col-12 col-md-6 col-lg-6"},n={class:"row q-col-gutter-md"},d={class:"col-12 col-md-6 col-lg-6"},i={class:"col-12 col-md-6 col-lg-6"},m={class:"row q-col-gutter-md"},u={class:"col-12 col-md-6 col-lg-6"},c={class:"col-12 col-md-6 col-lg-6"},b={class:"q-pb-md"};function g(e,l,a,g,p,V){const h=(0,o.up)("q-input"),v=(0,o.up)("q-select"),_=(0,o.up)("QEditForm");return(0,o.wg)(),(0,o.j4)(_,{useStore:a.useStore,title:"Edit Pharmacists"},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o._)("div",s,[(0,o.Wm)(h,{label:"Pharmacist Name",dense:"",outlined:"",modelValue:g.formData.name,"onUpdate:modelValue":l[0]||(l[0]=e=>g.formData.name=e),rules:[e=>e&&e.length||"Please enter the pharmacist name"],"error-message":e.$getValidationErrors("name"),error:e.$hasValidationErrors("name")},null,8,["modelValue","rules","error-message","error"])]),(0,o._)("div",t,[(0,o.Wm)(h,{label:"Age",dense:"",outlined:"",type:"number",modelValue:g.formData.age,"onUpdate:modelValue":l[1]||(l[1]=e=>g.formData.age=e),"error-message":e.$getValidationErrors("age"),error:e.$hasValidationErrors("age")},null,8,["modelValue","error-message","error"])])]),(0,o._)("div",n,[(0,o._)("div",d,[(0,o.Wm)(v,{options:g.bloodList,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"blood",outlined:"",modelValue:g.formData.blood,"onUpdate:modelValue":l[2]||(l[2]=e=>g.formData.blood=e),dense:"",label:"Blood Group",rules:[e=>e&&e.length||"Please select blood"],"error-message":e.$getValidationErrors("blood"),error:e.$hasValidationErrors("blood")},null,8,["options","modelValue","rules","error-message","error"])]),(0,o._)("div",i,[(0,o.Wm)(v,{options:g.genderList,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"gender",outlined:"",modelValue:g.formData.gender,"onUpdate:modelValue":l[3]||(l[3]=e=>g.formData.gender=e),dense:"",label:"Gender",rules:[e=>e&&e.length||"Please select gender"],"error-message":e.$getValidationErrors("gender"),error:e.$hasValidationErrors("gender")},null,8,["options","modelValue","rules","error-message","error"])])]),(0,o._)("div",m,[(0,o._)("div",u,[(0,o.Wm)(h,{label:"Mobile Number",dense:"",outlined:"",type:"number",modelValue:g.formData.mobile_no,"onUpdate:modelValue":l[4]||(l[4]=e=>g.formData.mobile_no=e),"error-message":e.$getValidationErrors("mobile_no"),error:e.$hasValidationErrors("mobile_no")},null,8,["modelValue","error-message","error"])]),(0,o._)("div",c,[(0,o.Wm)(h,{label:"Email ID",dense:"",outlined:"",modelValue:g.formData.email,"onUpdate:modelValue":l[5]||(l[5]=e=>g.formData.email=e),rules:[e=>e&&e.length||"Please enter the email ID"],"error-message":e.$getValidationErrors("email"),error:e.$hasValidationErrors("email")},null,8,["modelValue","rules","error-message","error"])])]),(0,o._)("div",b,[(0,o.Wm)(h,{label:"Address",dense:"",outlined:"",type:"textarea",modelValue:g.formData.address,"onUpdate:modelValue":l[6]||(l[6]=e=>g.formData.address=e)},null,8,["modelValue"])])])),_:1},8,["useStore"])}var p=a(60499),V=a(3746),h=a(61276),v=a(58641);const _={name:"EditPharmacists",props:{useStore:null},setup(e){const{useStore:l}=(0,p.qj)(e),{formData:a}=(0,V.Jk)(l),o=(0,h.J)(),r=(0,v.S)();return{formData:a,branchStore:r,useCompany:o,noRules:[e=>null!==e&&""!==e||"Please Enter Your Number",e=>10===e.length||"Contact Number is less or more than 10 digits"],categoryList:["Cytogenetic technologists","Pathologists Assistant","Anesthesia Technician","Clinical laboratory technician"],genderList:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Others",value:"others"}],bloodList:[{label:"A+",value:"a_p"},{label:"A-",value:"a_n"},{label:"B+",value:"b_p"},{label:"B-",value:"b_n"},{label:"O+",value:"o_p"},{label:"O-",value:"o_n"},{label:"AB+",value:"ab_p"},{label:"AB-",value:"ab_n"}],typeList:["Lab Assistant","Senior Lab Assistant","Part-Time","Trainee"]}}};var f=a(11639),D=a(66611),E=a(32259),$=a(69984),y=a.n($);const A=(0,f.Z)(_,[["render",g]]),P=A;y()(_,"components",{QInput:D.Z,QSelect:E.Z})}}]);