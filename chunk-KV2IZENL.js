import{e as M}from"./chunk-SPCT3XEP.js";import{D as h,Ea as m,Ha as C,I as v,Ia as S,Ja as _,La as c,Qa as y,Xa as g,Za as j,j as u,k as p,l as n,m as f,n as d,ya as q,z as r}from"./chunk-PQ76DGOU.js";var b={formId:"questmission",title:"Questmission",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill questmission title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill questmission description"},{name:"Label",value:"Description"}]}]};var I=(()=>{class e extends C{constructor(s,t,o,a){super({name:"questmission"},s,t,o,a),this.questmissions=this.getDocs(),this.questmissionsByAuthor={},this.get(),this.filteredDocuments(this.questmissionsByAuthor)}static{this.\u0275fac=function(t){return new(t||e)(n(_),n(S),n(c),n(m))}}static{this.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var x=(()=>{class e{get rows(){return this._questmissionService.questmissions}constructor(s,t,o,a,F){this._translate=s,this._questmissionService=t,this._alert=o,this._form=a,this._core=F,this.columns=["name","description"],this.form=this._form.getForm("questmission",b),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(i,l)=>{this._questmissionService.create(i),l()}})},update:i=>{this._form.modal(this.form,[],i).then(l=>{this._core.copy(l,i),this._questmissionService.update(i)})},delete:i=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this questmission?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._questmissionService.delete(i)}}]})},buttons:[{icon:"cloud_download",click:i=>{this._form.modalUnique("questmission","url",i)}}]}}static{this.\u0275fac=function(t){return new(t||e)(r(y),r(I),r(c),r(j),r(m))}}static{this.\u0275cmp=f({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Missions",3,"columns","config","rows"]],template:function(t,o){t&1&&v(0,"wtable",0),t&2&&h("columns",o.columns)("config",o.config)("rows",o.rows)},dependencies:[g]})}}return e})();var A=[{path:"",component:x}],z=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=p({imports:[q.forChild(A),M]})}}return e})();export{z as QuestmissionModule};
