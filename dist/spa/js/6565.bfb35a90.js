"use strict";(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[6565],{6565:(e,s,o)=>{o.r(s),o.d(s,{default:()=>V});var a=o(59835),r=o(61957);const t=e=>((0,a.dD)("data-v-48bd2c48"),e=e(),(0,a.Cn)(),e),l=t((()=>(0,a._)("div",{class:"text-h5 text-center text-weight-bold text-grey-9"}," Reset Password ",-1))),d={class:"col-12 col-sm-12 col-md-12 col-lg-12 q-pt-sm"},n={key:0,class:"col-12"};function i(e,s,o,t,i,p){const c=(0,a.up)("q-card-section"),w=(0,a.up)("q-icon"),u=(0,a.up)("q-input"),m=(0,a.up)("q-btn"),g=(0,a.up)("q-form"),f=(0,a.up)("q-card"),b=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(b,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{flat:"",class:"card-min-width"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{onSubmit:(0,r.iM)(e.submitForm,["prevent"])},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"row justify-center q-pb-xs"},{default:(0,a.w5)((()=>[l])),_:1}),(0,a.Wm)(c,{class:"q-py-xs"},{default:(0,a.w5)((()=>[(0,a._)("div",d,[(0,a.Wm)(u,{type:e.isPwd?"password":"text",dense:"",outlined:"",label:"New Password",modelValue:e.passwordReset.password,"onUpdate:modelValue":s[1]||(s[1]=s=>e.passwordReset.password=s),rules:[s=>s&&s.length||e.$t("New Password cannot be empty")],"error-message":e.$getValidationErrors("password"),error:e.$hasValidationErrors("password")},{prepend:(0,a.w5)((()=>[(0,a.Wm)(w,{name:"password"})])),append:(0,a.w5)((()=>[(0,a.Wm)(w,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[0]||(s[0]=s=>e.isPwd=!e.isPwd)},null,8,["name"])])),_:1},8,["type","modelValue","rules","error-message","error"])]),""!=e.passwordReset.password?((0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(u,{type:e.isNewPwd?"password":"text",dense:"",outlined:"",label:"Confirm Password",modelValue:e.passwordReset.password_confirmation,"onUpdate:modelValue":s[3]||(s[3]=s=>e.passwordReset.password_confirmation=s),rules:[s=>s&&s.length||e.$t("Confirm Password cannot be empty")],"error-message":e.$getValidationErrors("password_confirmation"),error:e.$hasValidationErrors("password_confirmation")},{prepend:(0,a.w5)((()=>[(0,a.Wm)(w,{name:"password"})])),append:(0,a.w5)((()=>[(0,a.Wm)(w,{name:e.isNewPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[2]||(s[2]=s=>e.isNewPwd=!e.isNewPwd)},null,8,["name"])])),_:1},8,["type","modelValue","rules","error-message","error"])])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(c,{class:"col-12 col-sm-12 col-md-12 col-lg-12 q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{color:"primary",label:"Change Password",class:"full-width",unelevated:"",loading:e.loader,outlined:"",type:"submit"},null,8,["loading"])])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})}o(69665);var p=o(60499),c=o(28339),w=o(19082),u=o(3746);const m=(0,a.aZ)({setup(){const e=(0,c.tv)(),s=(0,w.t)(),o=(0,p.iH)(!1),{passwordReset:r}=(0,u.Jk)(s),t=(0,a.FN)(),l=t.appContext.config.globalProperties.$clearValidationErrors,d=t.appContext.config.globalProperties.$Qnotify,n=t.appContext.config.globalProperties.$setValidationErrors;function i(){o.value=!0,s.resetPassword().then((s=>{o.value=!1,l(),d({message:"Password Changed",type:"positive"}),e.push("/login")})).catch((e=>{o.value=!1;let s=e.response.data.message,a={};e.response.data.errors&&(a=e.response.data.errors),n(a),d({message:s,type:"negative"})}))}return{store:s,loader:o,submitForm:i,passwordReset:r,noRules:[e=>null!==e&&""!==e||"Please Enter 6 Digit Code",e=>6===e.length||"Code must be of 6 digits"],isPwd:(0,p.iH)(!0),isNewPwd:(0,p.iH)(!0)}}});var g=o(11639),f=o(69885),b=o(44458),P=o(8326),v=o(63190),h=o(66611),y=o(22857),_=o(68879),C=o(69984),x=o.n(C);const q=(0,g.Z)(m,[["render",i],["__scopeId","data-v-48bd2c48"]]),V=q;x()(m,"components",{QPage:f.Z,QCard:b.Z,QForm:P.Z,QCardSection:v.Z,QInput:h.Z,QIcon:y.Z,QBtn:_.Z})}}]);