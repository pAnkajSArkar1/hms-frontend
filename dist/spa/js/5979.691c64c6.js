"use strict";(globalThis["webpackChunkdoctolib"]=globalThis["webpackChunkdoctolib"]||[]).push([[5979],{75979:(e,a,o)=>{o.r(a),o.d(a,{default:()=>k});var l=o(59835);const t=(0,l.Uk)(" Edit ");function n(e,a,o,n,d,u){const r=(0,l.up)("q-tooltip"),s=(0,l.up)("q-btn"),i=(0,l.up)("QDataTable"),m=(0,l.up)("CreateUser"),c=(0,l.up)("q-card"),p=(0,l.up)("q-dialog"),w=(0,l.up)("EditUser"),C=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(C,{class:"q-pa-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{aditionalActions:!0,canEdit:!1,class:"no-shadow",useStore:n.userStore,title:"Users"},{aditionalActions:(0,l.w5)((e=>[(0,l.Wm)(s,{flat:"",round:"",dense:"",color:"accent",icon:"edit",class:"q-ml-sm",onClick:a=>n.onClickEdit(e.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[t])),_:1})])),_:2},1032,["onClick"])])),_:1},8,["useStore"]),(0,l.Wm)(p,{modelValue:n.showCreateModal,"onUpdate:modelValue":a[0]||(a[0]=e=>n.showCreateModal=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{useStore:n.userStore,company:n.currentCompany},null,8,["useStore","company"])])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(p,{modelValue:n.showEditModal,"onUpdate:modelValue":a[1]||(a[1]=e=>n.showEditModal=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,{useStore:n.userStore,company:n.currentCompany},null,8,["useStore","company"])])),_:1})])),_:1},8,["modelValue"])])),_:1})}var d=o(60499),u=o(33701),r=o(61276),s=o(3746),i=o(28339);const m=(0,l.RC)((()=>o.e(9193).then(o.bind(o,49193)))),c=(0,l.RC)((()=>o.e(4604).then(o.bind(o,34604)))),p={name:"UserPage",components:{EditUser:m,CreateUser:c},setup(){const e=(0,u.L)(),a=(0,l.Fl)((()=>e.showEditModal)),o=(0,l.Fl)((()=>e.showCreateModal)),{dialogs:t,formData:n,filter:m}=(0,s.Jk)(e),c=(0,i.yj)();(0,l.wF)((()=>{m.value.company_id=c.params.id})),(0,l.YP)(c,(async(e,a)=>{void 0===e.params.id&&(m.value.company_id=null)}));const p=(0,d.iH)({}),w=(0,r.J)(),{getItem:C}=w;(0,l.bv)((()=>{C({id:c.params.id}).then((e=>{p.value=e}))}));const h=e=>{n.value.id=e.id,n.value.name=e.name,n.value.email=e.email,n.value.username=e.username,n.value.role=e.user_role.role.code,t.value.editItem=!0};return{userStore:e,showCreateModal:o,showEditModal:a,onClickEdit:h,currentCompany:p,filter:m}}};var w=o(11639),C=o(69885),h=o(68879),v=o(46858),f=o(32074),b=o(44458),y=o(69984),_=o.n(y);const g=(0,w.Z)(p,[["render",n]]),k=g;_()(p,"components",{QPage:C.Z,QBtn:h.Z,QTooltip:v.Z,QDialog:f.Z,QCard:b.Z})}}]);