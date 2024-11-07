import{e as b}from"./chunk-SPCT3XEP.js";import{D as h,Ea as c,Ha as C,I as v,Ia as S,Ja as _,La as m,Qa as y,Xa as g,Za as j,j as u,k as p,l as n,m as f,n as d,ya as q,z as s}from"./chunk-PQ76DGOU.js";var w={formId:"quest",title:"Quest",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill quest title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill quest description"},{name:"Label",value:"Description"}]}]};var x=(()=>{class e extends C{constructor(o,t,r,a){super({name:"quest"},o,t,r,a),this.quests=this.getDocs(),this.questsByAuthor={},this.get(),this.filteredDocuments(this.questsByAuthor)}static{this.\u0275fac=function(t){return new(t||e)(n(_),n(S),n(m),n(c))}}static{this.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var F=(()=>{class e{get rows(){return this._questService.quests}constructor(o,t,r,a,M){this._translate=o,this._questService=t,this._alert=r,this._form=a,this._core=M,this.columns=["name","description"],this.form=this._form.getForm("quest",w),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(i,l)=>{this._questService.create(i),l()}})},update:i=>{this._form.modal(this.form,[],i).then(l=>{this._core.copy(l,i),this._questService.update(i)})},delete:i=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this quest?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._questService.delete(i)}}]})},buttons:[{icon:"cloud_download",click:i=>{this._form.modalUnique("quest","url",i)}}]}}static{this.\u0275fac=function(t){return new(t||e)(s(y),s(x),s(m),s(j),s(c))}}static{this.\u0275cmp=f({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Quests",3,"columns","config","rows"]],template:function(t,r){t&1&&v(0,"wtable",0),t&2&&h("columns",r.columns)("config",r.config)("rows",r.rows)},dependencies:[g]})}}return e})();var T=[{path:"",component:F}],z=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=d({type:e})}static{this.\u0275inj=p({imports:[q.forChild(T),b]})}}return e})();export{z as QuestModule};