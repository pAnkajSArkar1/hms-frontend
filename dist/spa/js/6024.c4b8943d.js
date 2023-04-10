"use strict";(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[6024],{76024:(e,l,a)=>{a.r(l),a.d(l,{default:()=>P});var o=a(59835);const r={class:"col-12"},t={class:"row q-col-gutter-md"},s={class:"col-12 col-md-6 col-lg-6"},n={class:"col-12 col-md-6 col-lg-6"},i={class:"row q-col-gutter-md"},d={class:"col-12 col-md-4 col-lg-4"},m={class:"col-12 col-md-4 col-lg-4"},u={class:"col-12 col-md-4 col-lg-4"},c={class:"row q-col-gutter-md"},p={class:"col-12 col-md-6 col-lg-6"},b={class:"col-12 col-md-6 col-lg-6"},g={class:"row q-col-gutter-md"},V={class:"col-12 col-md-6 col-lg-6"},v={class:"col-12 col-md-6 col-lg-6"},h={class:"q-pb-md"};function _(e,l,a,_,D,f){const y=(0,o.up)("q-input"),E=(0,o.up)("q-select"),$=(0,o.up)("QSearch"),S=(0,o.up)("QEditForm");return(0,o.wg)(),(0,o.j4)(S,{useStore:a.useStore,title:"Edit Doctor"},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o.Wm)(y,{label:"Doctor Name",dense:"",outlined:"",modelValue:_.formData.name,"onUpdate:modelValue":l[0]||(l[0]=e=>_.formData.name=e),rules:[e=>e&&e.length||"Please enter the doctor name"],"error-message":e.$getValidationErrors("name"),error:e.$hasValidationErrors("name")},null,8,["modelValue","rules","error-message","error"])]),(0,o._)("div",t,[(0,o._)("div",s,[(0,o.Wm)(E,{options:_.doctorList,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"speciality",outlined:"",clearable:"",modelValue:_.formData.speciality,"onUpdate:modelValue":l[1]||(l[1]=e=>_.formData.speciality=e),dense:"",label:"Speciality",rules:[e=>e&&e.length||"Please select speciality"],"error-message":e.$getValidationErrors("speciality"),error:e.$hasValidationErrors("speciality")},null,8,["options","modelValue","rules","error-message","error"])]),(0,o._)("div",n,[(0,o.Wm)($,{label:"Department",modelValue:_.formData.branch_id,"onUpdate:modelValue":l[2]||(l[2]=e=>_.formData.branch_id=e),useStore:_.branchStore,optionValue:"id",optionLabel:"name","error-message":e.$getValidationErrors("branch_id"),error:e.$hasValidationErrors("branch_id")},null,8,["modelValue","useStore","error-message","error"])])]),(0,o._)("div",i,[(0,o._)("div",d,[(0,o.Wm)(E,{options:_.typeList,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"type",outlined:"",clearable:"",modelValue:_.formData.type,"onUpdate:modelValue":l[3]||(l[3]=e=>_.formData.type=e),dense:"",label:"Type",rules:[e=>e&&e.length||"Please select type"],"error-message":e.$getValidationErrors("type"),error:e.$hasValidationErrors("type")},null,8,["options","modelValue","rules","error-message","error"])]),(0,o._)("div",m,[(0,o.Wm)(y,{label:"Experience",dense:"",outlined:"",modelValue:_.formData.experience,"onUpdate:modelValue":l[4]||(l[4]=e=>_.formData.experience=e),rules:[e=>e&&e.length||"Please enter the experience"],"error-message":e.$getValidationErrors("experience"),error:e.$hasValidationErrors("experience")},null,8,["modelValue","rules","error-message","error"])]),(0,o._)("div",u,[(0,o.Wm)(y,{label:"Age",dense:"",outlined:"",type:"number",modelValue:_.formData.age,"onUpdate:modelValue":l[5]||(l[5]=e=>_.formData.age=e),"error-message":e.$getValidationErrors("age"),error:e.$hasValidationErrors("age")},null,8,["modelValue","error-message","error"])])]),(0,o._)("div",c,[(0,o._)("div",p,[(0,o.Wm)(E,{options:_.bloodList,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"blood",outlined:"",clearable:"",modelValue:_.formData.blood,"onUpdate:modelValue":l[6]||(l[6]=e=>_.formData.blood=e),dense:"",label:"Blood Group",rules:[e=>e&&e.length||"Please select blood"],"error-message":e.$getValidationErrors("blood"),error:e.$hasValidationErrors("blood")},null,8,["options","modelValue","rules","error-message","error"])]),(0,o._)("div",b,[(0,o.Wm)(E,{options:_.genderList,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"gender",outlined:"",modelValue:_.formData.gender,"onUpdate:modelValue":l[7]||(l[7]=e=>_.formData.gender=e),dense:"",clearable:"",label:"Gender",rules:[e=>e&&e.length||"Please select gender"],"error-message":e.$getValidationErrors("gender"),error:e.$hasValidationErrors("gender")},null,8,["options","modelValue","rules","error-message","error"])])]),(0,o._)("div",g,[(0,o._)("div",V,[(0,o.Wm)(y,{label:"Mobile Number",dense:"",outlined:"",type:"number",modelValue:_.formData.mobile_no,"onUpdate:modelValue":l[8]||(l[8]=e=>_.formData.mobile_no=e),rules:_.noRules,"error-message":e.$getValidationErrors("mobile_no"),error:e.$hasValidationErrors("mobile_no")},null,8,["modelValue","rules","error-message","error"])]),(0,o._)("div",v,[(0,o.Wm)(y,{label:"Email ID",dense:"",outlined:"",modelValue:_.formData.email,"onUpdate:modelValue":l[9]||(l[9]=e=>_.formData.email=e),rules:[e=>e&&e.length||"Please enter the email ID"],"error-message":e.$getValidationErrors("email"),error:e.$hasValidationErrors("email")},null,8,["modelValue","rules","error-message","error"])])]),(0,o._)("div",h,[(0,o.Wm)(y,{label:"Address",dense:"",outlined:"",type:"textarea",modelValue:_.formData.address,"onUpdate:modelValue":l[10]||(l[10]=e=>_.formData.address=e)},null,8,["modelValue"])])])),_:1},8,["useStore"])}var D=a(60499),f=a(3746),y=a(58641);const E={name:"EditDoctor",props:{useStore:null},setup(e){const{useStore:l}=(0,D.qj)(e),{formData:a}=(0,f.Jk)(l),o=(0,y.S)();return{branchStore:o,formData:a,noRules:[e=>null!==e&&""!==e||"Please Enter Your Number",e=>10===e.length||"Contact Number is less or more than 10 digits"],doctorList:["Accident and emergency (A&E)","Anesthetics","Gastroenterology","Cardiology","Maternity"],genderList:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Others",value:"others"}],bloodList:[{label:"A+",value:"a_p"},{label:"A-",value:"a_n"},{label:"B+",value:"b_p"},{label:"B-",value:"b_n"},{label:"O+",value:"o_p"},{label:"O-",value:"o_n"},{label:"AB+",value:"ab_p"},{label:"AB-",value:"ab_n"}],typeList:[{label:"Visiting",value:"visiting"},{label:"Permanent",value:"permanent"},{label:"Trainee",value:"trainee"}]}}};var $=a(11639),S=a(66611),U=a(32259),W=a(69984),A=a.n(W);const L=(0,$.Z)(E,[["render",_]]),P=L;A()(E,"components",{QInput:S.Z,QSelect:U.Z})}}]);