"use strict";(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[6729],{26729:(e,l,a)=>{a.r(l),a.d(l,{default:()=>W});var o=a(59835);const r={class:"row q-col-gutter-md"},t={class:"col-12 col-md-6 col-lg-6"},s={class:"col-12 col-md-6 col-lg-6"},n={class:"row q-col-gutter-md"},i={class:"col-12 col-md-6 col-lg-6"},d={class:"col-12 col-md-6 col-lg-6"},u={class:"row q-col-gutter-md"},m={class:"col-12 col-md-4 col-lg-4"},c={class:"col-12 col-md-4 col-lg-4"},g={class:"col-12 col-md-4 col-lg-4"},p={class:"row q-col-gutter-md"},b={class:"col-12 col-md-6 col-lg-6"},V={class:"col-12 col-md-6 col-lg-6"},v={class:"q-pb-md"};function h(e,l,a,h,w,y){const _=(0,o.up)("q-input"),D=(0,o.up)("q-select"),E=(0,o.up)("QCreateForm");return(0,o.wg)(),(0,o.j4)(E,{useStore:a.useStore,title:"Add Lab Scientist"},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o._)("div",t,[(0,o.Wm)(_,{label:"Lab Scientist Name",dense:"",outlined:"",modelValue:h.newData.name,"onUpdate:modelValue":l[0]||(l[0]=e=>h.newData.name=e),rules:[e=>e&&e.length||"Please enter the lab scientist name"],"error-message":e.$getValidationErrors("name"),error:e.$hasValidationErrors("name")},null,8,["modelValue","rules","error-message","error"])]),(0,o._)("div",s,[(0,o.Wm)(D,{options:h.categoryList,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"category",outlined:"",clearable:"",modelValue:h.newData.category,"onUpdate:modelValue":l[1]||(l[1]=e=>h.newData.category=e),dense:"",label:"Category",rules:[e=>e&&e.length||"Please select category"],"error-message":e.$getValidationErrors("category"),error:e.$hasValidationErrors("category")},null,8,["options","modelValue","rules","error-message","error"])])]),(0,o._)("div",n,[(0,o._)("div",i,[(0,o.Wm)(D,{options:h.typeList,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"type",outlined:"",clearable:"",modelValue:h.newData.type,"onUpdate:modelValue":l[2]||(l[2]=e=>h.newData.type=e),dense:"",label:"Type",rules:[e=>e&&e.length||"Please select type"],"error-message":e.$getValidationErrors("type"),error:e.$hasValidationErrors("type")},null,8,["options","modelValue","rules","error-message","error"])]),(0,o._)("div",d,[(0,o.Wm)(_,{label:"Experience",dense:"",outlined:"",modelValue:h.newData.experience,"onUpdate:modelValue":l[3]||(l[3]=e=>h.newData.experience=e),rules:[e=>e&&e.length||"Please enter the experience"],"error-message":e.$getValidationErrors("experience"),error:e.$hasValidationErrors("experience")},null,8,["modelValue","rules","error-message","error"])])]),(0,o._)("div",u,[(0,o._)("div",m,[(0,o.Wm)(_,{label:"Age",dense:"",outlined:"",type:"number",modelValue:h.newData.age,"onUpdate:modelValue":l[4]||(l[4]=e=>h.newData.age=e),rules:[e=>e&&e.length||"Please enter the age"],"error-message":e.$getValidationErrors("age"),error:e.$hasValidationErrors("age")},null,8,["modelValue","rules","error-message","error"])]),(0,o._)("div",c,[(0,o.Wm)(D,{options:h.bloodList,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"blood",outlined:"",modelValue:h.newData.blood,"onUpdate:modelValue":l[5]||(l[5]=e=>h.newData.blood=e),dense:"",label:"Blood Group",rules:[e=>e&&e.length||"Please select blood"],"error-message":e.$getValidationErrors("blood"),error:e.$hasValidationErrors("blood")},null,8,["options","modelValue","rules","error-message","error"])]),(0,o._)("div",g,[(0,o.Wm)(D,{options:h.genderList,"map-options":"","emit-value":"","option-label":"label","option-value":"value",type:"gender",outlined:"",modelValue:h.newData.gender,"onUpdate:modelValue":l[6]||(l[6]=e=>h.newData.gender=e),dense:"",label:"Gender",rules:[e=>e&&e.length||"Please select gender"],"error-message":e.$getValidationErrors("gender"),error:e.$hasValidationErrors("gender")},null,8,["options","modelValue","rules","error-message","error"])])]),(0,o._)("div",p,[(0,o._)("div",b,[(0,o.Wm)(_,{label:"Mobile Number",dense:"",outlined:"",type:"number",modelValue:h.newData.mobile_no,"onUpdate:modelValue":l[7]||(l[7]=e=>h.newData.mobile_no=e),rules:h.noRules,"error-message":e.$getValidationErrors("mobile_no"),error:e.$hasValidationErrors("mobile_no")},null,8,["modelValue","rules","error-message","error"])]),(0,o._)("div",V,[(0,o.Wm)(_,{label:"Email ID",dense:"",outlined:"",modelValue:h.newData.email,"onUpdate:modelValue":l[8]||(l[8]=e=>h.newData.email=e),rules:[e=>e&&e.length||"Please enter the email ID"],"error-message":e.$getValidationErrors("email"),error:e.$hasValidationErrors("email")},null,8,["modelValue","rules","error-message","error"])])]),(0,o._)("div",v,[(0,o.Wm)(_,{label:"Address",dense:"",outlined:"",type:"textarea",modelValue:h.newData.address,"onUpdate:modelValue":l[9]||(l[9]=e=>h.newData.address=e)},null,8,["modelValue"])])])),_:1},8,["useStore"])}var w=a(60499),y=a(3746),_=a(61276),D=a(58641);const E={name:"CreateLabScientist",props:{useStore:null},setup(e){const{useStore:l}=(0,w.qj)(e),{newData:a}=(0,y.Jk)(l),o=(0,_.J)(),r=(0,D.S)();return{newData:a,branchStore:r,useCompany:o,noRules:[e=>null!==e&&""!==e||"Please Enter Your Number",e=>10===e.length||"Contact Number is less or more than 10 digits"],categoryList:["Cytogenetic technologists","Pathologists Assistant","Anesthesia Technician","Clinical laboratory technician"],genderList:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Others",value:"others"}],bloodList:[{label:"A+",value:"a_p"},{label:"A-",value:"a_n"},{label:"B+",value:"b_p"},{label:"B-",value:"b_n"},{label:"O+",value:"o_p"},{label:"O-",value:"o_n"},{label:"AB+",value:"ab_p"},{label:"AB-",value:"ab_n"}],typeList:["Lab Assistant","Senior Lab Assistant","Part-Time","Trainee"]}}};var $=a(11639),L=a(66611),S=a(32259),A=a(69984),P=a.n(A);const U=(0,$.Z)(E,[["render",h]]),W=U;P()(E,"components",{QInput:L.Z,QSelect:S.Z})}}]);