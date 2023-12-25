
/*
  * Licensed to the Apache Software Foundation (ASF) under one
  * or more contributor license agreements.  See the NOTICE file
  * distributed with this work for additional information
  * regarding copyright ownership.  The ASF licenses this file
  * to you under the Apache License, Version 2.0 (the
  * "License"); you may not use this file except in compliance
  * with the License.  You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

import{v as J,D as w,C as G,a3 as H,o as g,c as E,h as v,u as p,a5 as se,y as I,G as ie,I as re,H as le,M as q,U as X,K as te,s as P,V as W,r as B,e as x,z as L,g as $,F as V,l as ue,ad as D,q as A,aL as Z,a8 as ee,af as ce,x as ae,a7 as pe,av as fe,aM as ge,aw as _e,E as be,L as ye,P as ve,ao as he,a1 as ze,ap as Ge}from"./index-Sv1U-v8F.js";/* empty css              *//* empty css              */import{u as oe}from"./usePlaceholder-SblOBb_X.js";import{u as ne}from"./usePagination-nbhDV7a3.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{s as ke,r as de,a as me,g as Ce,b as Ie,c as $e,d as we,_ as Se,e as Te,u as Re,f as Le}from"./optimize.service-41rUEap0.js";/* empty css              *//* empty css              */const xe=J({__name:"ScaleOut",props:{groupRecord:{}},emits:["cancel","refresh"],setup(n,{emit:m}){var i;const e=m,h=n,u=w(!1),k=G(oe()),r=w(),a=G({resourceGroup:((i=h.groupRecord)==null?void 0:i.name)||"",parallelism:1});function z(){r.value.validateFields().then(async()=>{u.value=!0,await ke({optimizerGroup:a.resourceGroup||"",parallelism:Number(a.parallelism)}),r.value.resetFields(),e("cancel"),e("refresh"),u.value=!1}).catch(()=>{u.value=!1})}function _(){r.value.resetFields(),e("cancel")}return H(()=>{}),(s,f)=>{const O=ie,d=re,c=le,y=q;return g(),E(y,{visible:!0,title:s.$t("scaleOut"),confirmLoading:u.value,closable:!1,onOk:z,onCancel:_},{default:v(()=>[p(c,{ref_key:"formRef",ref:r,model:a,class:"label-120"},{default:v(()=>[p(O,{name:"resourceGroup",label:s.$t("resourceGroup")},{default:v(()=>[se(I(a.resourceGroup),1)]),_:1},8,["label"]),p(O,{name:"parallelism",label:s.$t("parallelism"),rules:[{required:!0,message:`${k.parallelismPh}`}]},{default:v(()=>[p(d,{value:a.parallelism,"onUpdate:value":f[0]||(f[0]=N=>a.parallelism=N),type:"number",placeholder:k.parallelismPh},null,8,["value","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["title","confirmLoading"])}}}),Oe={class:"list-wrap"},Ne=["title"],Me=["onClick"],De=["onClick"],Pe=["onClick"],Ee=["onClick"],qe=J({__name:"List",props:{curGroupName:{},type:{}},emits:["editGroup","refresh"],setup(n,{emit:m}){const{t:e}=X();te();const h=n,u=m,k=P({pending:{title:"pending",color:"#ffcc00"},planning:{title:"planning",color:"#076de3"},idle:{title:"idle",color:"#c9cdd4"},minor:{title:"minor",color:"#0ad787"},major:{title:"major",color:"#0ad787"},full:{title:"full",color:"#0ad787"},committing:{title:"committing",color:"#0ad787"}}),r=w(!1),a=w(!1),z=P([{dataIndex:"name",title:e("name"),ellipsis:!0},{dataIndex:"container",title:e("container"),width:"23%",ellipsis:!0},{dataIndex:"resourceOccupation",title:e("resourceOccupation"),width:"23%",ellipsis:!0},{dataIndex:"operationGroup",title:e("operation"),key:"operationGroup",ellipsis:!0,width:230,scopedSlots:{customRender:"operationGroup"}}]),_=P([{dataIndex:"index",title:e("order"),width:80,ellipsis:!0},{dataIndex:"groupName",title:e("optimizerGroup"),ellipsis:!0},{dataIndex:"container",title:e("container"),ellipsis:!0},{dataIndex:"jobStatus",title:e("status"),ellipsis:!0},{dataIndex:"resourceAllocation",title:e("resourceAllocation"),width:"20%",ellipsis:!0},{dataIndex:"operation",title:e("operation"),key:"operation",ellipsis:!0,width:160,scopedSlots:{customRender:"operationGroup"}}]),i=G(ne()),s=G([]),f=G([]),O=W(()=>h.type==="optimizers"?_:z),d=W(()=>h.type==="optimizers"?s:f);function c(o){o&&(i.current=1),h.type==="optimizers"?j():F()}function y(o){o.container!=="external"&&q.confirm({title:e("releaseOptModalTitle"),content:"",okText:"",cancelText:"",onOk:()=>{N(o)}})}async function N(o){try{a.value=!0,await de({optimizerGroup:o.groupName,jobId:o.jobId}),c(!0),u("refreshCurGroupInfo")}finally{a.value=!1}}async function j(){try{s.length=0,r.value=!0;const o={optimizerGroup:"all",page:i.current,pageSize:i.pageSize},t=await me(o),{list:b,total:U}=t;i.total=U,(b||[]).forEach((R,C)=>{R.resourceAllocation=`${R.coreNumber} ${e("core")} ${Z(R.memory)}`,R.index=(i.current-1)*i.pageSize+C+1,s.push(R)})}catch{}finally{r.value=!1}}async function F(){try{f.length=0,r.value=!0;const o=await Ce();i.total=o.length,(o||[]).forEach(t=>{t.name=t.resourceGroup.name,t.container=t.resourceGroup.container,t.resourceOccupation=`${t.occupationCore} ${e("core")} ${Z(t.occupationMemory)}`,f.push(t)})}catch{}finally{r.value=!1}}const K=o=>{u("editGroup",o)},M=async o=>{if(await Ie({name:o.name})){q.confirm({title:e("deleteGroupModalTitle"),onOk:async()=>{await $e({name:o.name}),ee.success(`${e("remove")} ${e("success")}`),c()}});return}q.warning({title:e("cannotDeleteGroupModalTitle"),content:e("cannotDeleteGroupModalContent")})},Q=w({}),l=w(!1),S=o=>{o.container!=="external"&&(Q.value={...o},l.value=!0)};function T({current:o=i.current,pageSize:t=i.pageSize}){i.current=o;const b=t!==i.pageSize;i.pageSize=t,c(b)}return H(()=>{c()}),(o,t)=>{const b=ce,U=B("u-loading");return g(),x(V,null,[L("div",Oe,[p(b,{class:"ant-table-common",columns:O.value,"data-source":d.value,pagination:i,loading:r.value,onChange:T},{bodyCell:v(({column:R,record:C})=>[R.dataIndex==="durationDisplay"?(g(),x("span",{key:0,title:C.durationDesc},I(C.durationDisplay),9,Ne)):$("",!0),R.dataIndex==="optimizeStatus"?(g(),x(V,{key:1},[L("span",{style:ue({"background-color":(D(k)[C.optimizeStatus]||{}).color}),class:"status-icon"},null,4),L("span",null,I(C.optimizeStatus),1)],64)):$("",!0),R.dataIndex==="operation"?(g(),x("span",{key:2,class:A(["primary-link",{disabled:C.container==="external"}]),onClick:Y=>y(C)},I(D(e)("release")),11,Me)):$("",!0),R.dataIndex==="operationGroup"?(g(),x(V,{key:3},[L("span",{class:A(["primary-link g-mr-12",{disabled:C.container==="external"}]),onClick:Y=>S(C)},I(D(e)("scaleOut")),11,De),L("span",{class:"primary-link g-mr-12",onClick:Y=>K(C)},I(D(e)("edit")),9,Pe),L("span",{class:"primary-link",onClick:Y=>M(C)},I(D(e)("remove")),9,Ee)],64)):$("",!0)]),_:1},8,["columns","data-source","pagination","loading"])]),l.value?(g(),E(xe,{key:0,groupRecord:Q.value,onCancel:t[0]||(t[0]=R=>l.value=!1),onRefresh:c},null,8,["groupRecord"])):$("",!0),a.value?(g(),E(U,{key:1})):$("",!0)],64)}}}),Ae=ae(qe,[["__scopeId","data-v-46b3e914"]]),je={class:"list-wrap"},Fe=["title","onClick"],Ke=["title"],Ue=["onClick"],Be=J({__name:"List",props:{curGroupName:{},type:{}},emits:["refreshCurGroupInfo"],setup(n,{emit:m}){const{t:e}=X(),h=te(),u=n,k=m,r=P({pending:{title:"pending",color:"#ffcc00"},planning:{title:"planning",color:"#076de3"},idle:{title:"idle",color:"#c9cdd4"},minor:{title:"minor",color:"#0ad787"},major:{title:"major",color:"#0ad787"},full:{title:"full",color:"#0ad787"},committing:{title:"committing",color:"#0ad787"}}),a=w(!1),z=w(!1),_=P([{dataIndex:"tableName",title:e("table"),ellipsis:!0,scopedSlots:{customRender:"tableName"}},{dataIndex:"groupName",title:e("optimizerGroup"),width:"16%",ellipsis:!0},{dataIndex:"optimizeStatus",title:e("optimizingStatus"),width:"16%",ellipsis:!0},{dataIndex:"durationDisplay",title:e("duration"),width:"10%",ellipsis:!0},{dataIndex:"fileCount",title:e("fileCount"),width:"10%",ellipsis:!0},{dataIndex:"fileSizeDesc",title:e("fileSize"),width:"10%",ellipsis:!0},{dataIndex:"quota",title:e("quota"),width:"10%",ellipsis:!0},{dataIndex:"quotaOccupationDesc",title:e("occupation"),width:120,ellipsis:!0}]),i=P([{dataIndex:"index",title:e("order"),width:80,ellipsis:!0},{dataIndex:"groupName",title:e("optimizerGroup"),ellipsis:!0},{dataIndex:"container",title:e("container"),ellipsis:!0},{dataIndex:"jobStatus",title:e("status"),ellipsis:!0},{dataIndex:"resourceAllocation",title:e("resourceAllocation"),width:"20%",ellipsis:!0},{dataIndex:"operation",title:e("operation"),key:"operation",ellipsis:!0,width:160,scopedSlots:{customRender:"operation"}}]),s=G(ne()),f=G([]),O=G([]),d=W(()=>u.type==="optimizers"?i:_),c=W(()=>u.type==="optimizers"?f:O);pe(()=>u.curGroupName,l=>{l&&y()});function y(l){l&&(s.current=1),u.type==="optimizers"?N():j()}async function N(){try{f.length=0,a.value=!0;const l={optimizerGroup:u.curGroupName,page:s.current,pageSize:s.pageSize},S=await me(l),{list:T,total:o}=S;s.total=o,(T||[]).forEach((t,b)=>{t.resourceAllocation=`${t.coreNumber} ${e("core")} ${Z(t.memory)}`,t.index=(s.current-1)*s.pageSize+b+1,f.push(t)})}catch{}finally{a.value=!1}}async function j(){try{O.length=0,a.value=!0;const l={optimizerGroup:u.curGroupName||"",page:s.current,pageSize:s.pageSize},S=await we(l),{list:T,total:o}=S;s.total=o,(T||[]).forEach(t=>{t.quotaOccupationDesc=t.quotaOccupation-5e-4>0?`${(t.quotaOccupation*100).toFixed(1)}%`:"0",t.durationDesc=fe(t.duration||0),t.durationDisplay=ge(t.duration||0),t.fileSizeDesc=_e(t.fileSize),O.push(t)})}catch{}finally{a.value=!1}}function F(l){l.container!=="external"&&q.confirm({title:e("releaseOptModalTitle"),content:"",okText:"",cancelText:"",onOk:()=>{K(l)}})}async function K(l){try{z.value=!0,await de({optimizerGroup:l.groupName,jobId:l.jobId}),y(!0),k("refreshCurGroupInfo")}finally{z.value=!1}}function M({current:l=s.current,pageSize:S=s.pageSize}){s.current=l;const T=S!==s.pageSize;s.pageSize=S,y(T)}function Q(l){const{catalog:S,database:T,tableName:o}=l.tableIdentifier;h.push({path:"/tables",query:{catalog:S,db:T,table:o}})}return H(()=>{y()}),(l,S)=>{const T=ce,o=B("u-loading");return g(),x(V,null,[L("div",je,[p(T,{class:"ant-table-common",columns:d.value,"data-source":c.value,pagination:s,loading:a.value,onChange:M},{bodyCell:v(({column:t,record:b})=>[t.dataIndex==="tableName"?(g(),x("span",{key:0,title:b.tableName,class:"primary-link",onClick:U=>Q(b)},I(b.tableName),9,Fe)):$("",!0),t.dataIndex==="durationDisplay"?(g(),x("span",{key:1,title:b.durationDesc},I(b.durationDisplay),9,Ke)):$("",!0),t.dataIndex==="optimizeStatus"?(g(),x(V,{key:2},[L("span",{style:ue({"background-color":(D(r)[b.optimizeStatus]||{}).color}),class:"status-icon"},null,4),L("span",null,I(b.optimizeStatus),1)],64)):$("",!0),t.dataIndex==="operation"?(g(),x("span",{key:3,class:A(["primary-link",{disabled:b.container==="external"}]),onClick:U=>F(b)},I(D(e)("release")),11,Ue)):$("",!0)]),_:1},8,["columns","data-source","pagination","loading"])]),z.value?(g(),E(o,{key:0})):$("",!0)],64)}}}),Ve=ae(Be,[["__scopeId","data-v-c3860f8a"]]),Je=J({__name:"GroupModal",props:{edit:{type:Boolean},editRecord:{}},emits:["cancel","refresh"],setup(n,{emit:m}){const{t:e}=X(),h=G(oe()),u=n,k=w({containerList:[]});async function r(){const c=(await Te()||[]).map(y=>({label:y,value:y}));k.value.containerList=c}const a=G({name:"",container:void 0,properties:{}}),z=w(!1),_=m,i=()=>{_("cancel")},s=w(),f=w(),O=()=>{s.value.validateFields().then(async()=>{try{const d=await f.value.getProperties(),c={name:a.name,container:a.container,properties:d};u.edit?await Re(c):await Le(c),ee.success(`${e("save")} ${e("success")}`),_("refresh")}catch{ee.error(`${e("save")} ${e("failed")}`)}})};return H(()=>{var d,c,y;r(),u.edit&&(a.name=(d=u.editRecord)==null?void 0:d.name,a.container=(c=u.editRecord)==null?void 0:c.container,a.properties=(y=u.editRecord)==null?void 0:y.resourceGroup.properties)}),(d,c)=>{const y=re,N=ie,j=be,F=le,K=q;return g(),E(K,{visible:!0,title:d.edit?d.$t("editgroup"):d.$t("addgroup"),confirmLoading:z.value,closable:!1,class:"group-modal",onOk:O,onCancel:i},{default:v(()=>[p(F,{ref_key:"formRef",ref:s,model:a,class:"label-120"},{default:v(()=>[p(N,{name:"name",label:d.$t("name"),rules:[{required:!0,message:`${h.groupNamePh}`}]},{default:v(()=>[p(y,{value:a.name,"onUpdate:value":c[0]||(c[0]=M=>a.name=M),placeholder:h.groupNamePh,disabled:d.edit},null,8,["value","placeholder","disabled"])]),_:1},8,["label","rules"]),p(N,{name:"container",label:d.$t("container"),rules:[{required:!0,message:`${h.groupContainer}`}]},{default:v(()=>[p(j,{value:a.container,"onUpdate:value":c[1]||(c[1]=M=>a.container=M),showSearch:!0,options:k.value.containerList,placeholder:h.groupContainer},null,8,["value","options","placeholder"])]),_:1},8,["label","rules"]),p(N,{label:d.$t("properties")},null,8,["label"]),p(N,null,{default:v(()=>[p(Se,{propertiesObj:a.properties,isEdit:!0,ref_key:"propertiesRef",ref:f},null,8,["propertiesObj"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title","confirmLoading"])}}}),He=J({name:"Resource",components:{List:Ae,GroupModal:Je,TableList:Ve},setup(){const{t:n}=X(),m=te(),e=ye(),h=P([{label:n("optimizergroup"),value:"optimizergroup"},{label:n("optimizers"),value:"optimizers"}]),u=G(oe()),k=G(ne()),r=G({activeTab:"optimizergroup",showGroupModal:!1,groupEdit:!1,groupEditRecord:{},groupKeyCount:1,showTab:!1});pe(()=>e.query,_=>{r.activeTab=_.tab||"tables"},{immediate:!0});const a=_=>{_?(r.groupEdit=!0,r.groupEditRecord={..._}):r.groupEdit=!1,r.showGroupModal=!0},z=_=>{const i={...e.query};i.tab=_,m.replace({query:{...i}})};return H(()=>{r.showTab=!0}),{placeholder:u,pagination:k,...ve(r),tabConfig:h,onChangeTab:z,editGroup:a,t:n}}}),Qe={class:"border-wrap"},We={class:"resource-wrap"},Xe={class:"content"};function Ye(n,m,e,h,u,k){const r=B("TableList"),a=he,z=B("List"),_=ze,i=Ge,s=B("GroupModal");return g(),x("div",Qe,[L("div",We,[L("div",Xe,[p(i,{activeKey:n.activeTab,"onUpdate:activeKey":m[1]||(m[1]=f=>n.activeTab=f),destroyInactiveTabPane:"",onChange:n.onChangeTab},{default:v(()=>[p(a,{key:"tables",tab:n.t("tables"),class:A([n.activeTab==="tables"?"active":""])},{default:v(()=>[p(r,{curGroupName:"all",type:"tables"})]),_:1},8,["tab","class"]),p(a,{key:"optimizers",tab:n.t("optimizers"),class:A([n.activeTab==="optimizers"?"active":""])},{default:v(()=>[p(z,{type:"optimizers"})]),_:1},8,["tab","class"]),p(a,{key:"optimizergroup",tab:n.t("optimizergroup"),class:A([n.activeTab==="optimizergroup"?"active":""])},{default:v(()=>[p(_,{type:"primary",class:"g-mb-16",onClick:m[0]||(m[0]=f=>n.editGroup(null))},{default:v(()=>[se(I(n.t("addgroup")),1)]),_:1}),(g(),E(z,{key:n.groupKeyCount,type:"optimizergroup",onEditGroup:n.editGroup},null,8,["onEditGroup"]))]),_:1},8,["tab","class"])]),_:1},8,["activeKey","onChange"])])]),n.showGroupModal?(g(),E(s,{key:0,edit:n.groupEdit,editRecord:n.groupEditRecord,onCancel:m[2]||(m[2]=f=>n.showGroupModal=!1),onRefresh:m[3]||(m[3]=f=>{n.groupKeyCount++,n.showGroupModal=!1})},null,8,["edit","editRecord"])):$("",!0)])}const pt=ae(He,[["render",Ye],["__scopeId","data-v-680f7fba"]]);export{pt as default};
