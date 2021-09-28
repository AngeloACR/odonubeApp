"use strict";(self.webpackChunkodonube_front=self.webpackChunkodonube_front||[]).push([[526],{2526:(j,Z,u)=>{u.r(Z),u.d(Z,{PacientesModule:()=>L});var m=u(8583),i=u(665),v=u(9577),f=u(5855),e=u(639),A=u(6290),C=u(6043);let y=(()=>{class r{constructor(){this.aMenu={},this.menuOn=!1}ngOnInit(){this.menuOn=!0,this.aMenu={aMenu:this.menuOn}}tMenu(){this.menuOn=!this.menuOn,this.aMenu={aMenu:this.menuOn}}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-pacientes"]],decls:8,vars:1,consts:[[1,"appBox"],[1,"headerBox"],[3,"menu"],[1,"panelBox"],[1,"menuBox",3,"ngClass"],[1,"contentBox"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"app-header",2),e.NdJ("menu",function(){return t.tMenu()}),e.qZA(),e.qZA(),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"app-sidemenu"),e.qZA(),e.TgZ(6,"div",5),e._UZ(7,"router-outlet"),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(4),e.Q6J("ngClass",t.aMenu))},directives:[A.G,m.mk,C.x,f.lC],styles:[""]}),r})();var T=u(8239),_=u(827),p=u(1841);let P=(()=>{class r{constructor(n){this.http=n,this.localSource="http://localhost:6800",this.productionSource="https://dashboard.odonube.com",this.mySource=this.productionSource}create(n){let t=new p.WM;t=t.append("Content-Type","application/json");var s=this.mySource;s+="/pacientes/";let l=n;return new Promise((d,c)=>{this.http.post(s,l,{headers:t}).subscribe(g=>{d(g)},g=>{c(new Error(g.error.message))})})}update(){let n=new p.WM;n=n.append("Content-Type","application/json");var o=this.mySource;o+="/pacientes/";let s={};return new Promise((l,d)=>{this.http.put(o,s,{headers:n}).subscribe(c=>{l(c)},c=>{d(new Error(c.error.message))})})}getOne(){let n=new p.WM;n=n.append("Content-Type","application/json");var o=this.mySource;return o+="/pacientes/",new Promise((l,d)=>{this.http.get(o,{params:{},headers:n}).subscribe(c=>{l(c)},c=>{d(new Error(c.error.message))})})}getAll(){let n=new p.WM;n=n.append("Content-Type","application/json");var o=this.mySource;return o+="/pacientes/all",new Promise((l,d)=>{this.http.get(o,{params:{},headers:n}).subscribe(c=>{l(c)},c=>{d(new Error(c.error.message))})})}deleteOne(){let n=new p.WM;n=n.append("Content-Type","application/json");var o=this.mySource;return o+="/pacientes/",new Promise((l,d)=>{this.http.delete(o,{params:{},headers:n}).subscribe(c=>{l(c)},c=>{d(new Error(c.error.message))})})}deleteAll(){let n=new p.WM;n=n.append("Content-Type","application/json");var o=this.mySource;return o+="/pacientes/all",new Promise((l,d)=>{this.http.delete(o,{params:{},headers:n}).subscribe(c=>{l(c)},c=>{d(new Error(c.error.message))})})}}return r.\u0275fac=function(n){return new(n||r)(e.LFG(p.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function N(r,a){1&r&&(e.TgZ(0,"div",19),e._uU(1," Por favor ingrese el nombre del paciente "),e.qZA())}function b(r,a){1&r&&(e.TgZ(0,"div",19),e._uU(1," Por favor ingrese la edad del paciente "),e.qZA())}function I(r,a){1&r&&(e.TgZ(0,"div",19),e._uU(1," Por favor ingrese el nombre de los parientes del paciente "),e.qZA())}function x(r,a){1&r&&(e.TgZ(0,"div",19),e._uU(1," Por favor ingrese una direcci\xf3n "),e.qZA())}function U(r,a){1&r&&(e.TgZ(0,"div",19),e._uU(1," Por favor ingrese el n\xfamero de contacto del paciente "),e.qZA())}function w(r,a){1&r&&(e.TgZ(0,"div",19),e._uU(1," Por favor ingrese la referencia del paciente "),e.qZA())}function F(r,a){1&r&&(e.TgZ(0,"div",19),e._uU(1," Por favor ingrese una contrase\xf1a valida "),e.qZA())}function M(r,a){1&r&&(e.TgZ(0,"div",19),e._uU(1," Por favor ingrese la fecha de ingreso del paciente "),e.qZA())}let J=(()=>{class r{constructor(n,t,o,s){this.auth=n,this.pacientes=t,this.fb=o,this.router=s,this.onData=new e.vpe}ngOnInit(){this.initForm(),this.showError={errorAct:!1}}initForm(){this.registroPaciente=new i.cw({name:new i.NI("",i.kI.required),parentsNames:new i.NI("",i.kI.required),gender:new i.NI("",i.kI.required),age:new i.NI("",i.kI.required),occupation:new i.NI("",i.kI.required),address:new i.NI("",i.kI.required),contact:new i.NI("",i.kI.required),reference:new i.NI("",i.kI.required),date:new i.NI("",i.kI.required),photoPath:new i.NI("",i.kI.required)})}get fPaciente(){return this.registroPaciente.controls}endRegistro(){var n=this;return(0,T.Z)(function*(){var t=n.registroPaciente.value;let o,s={name:t.name,parentsNames:t.parentsNames,gender:t.gender,age:t.age,occupation:t.occupation,address:t.address,contact:t.contact,reference:t.reference,date:t.date,photoPath:t.photoPath};if(o=n.catchPacienteErrors(),o)n.openError("Algunos campos son inv\xe1lidos. Por favor, revise el formulario e intente de nuevo");else{let l=yield n.pacientes.create(s);console.log(l),n.router.navigateByUrl("pacientes/lista")}})()}catchPacienteErrors(){return!!this.fPaciente.name.errors&&this.fPaciente.name.errors.required||!!this.fPaciente.parentsNames.errors&&this.fPaciente.parentsNames.errors.required||!!this.fPaciente.gender.errors&&this.fPaciente.gender.errors.required||!!this.fPaciente.age.errors&&this.fPaciente.age.errors.required||!!this.fPaciente.occupation.errors&&this.fPaciente.occupation.errors.minlength||!!this.fPaciente.address.errors&&this.fPaciente.address.errors.required||!!this.fPaciente.contact.errors&&this.fPaciente.contact.errors.required||!!this.fPaciente.reference.errors&&this.fPaciente.reference.errors.required||!!this.fPaciente.date.errors&&this.fPaciente.date.errors.required}openError(n){this.errorMsg=n,this.showError={errorAct:!0}}closeError(){this.showError={errorAct:!1}}resetForms(){this.registroPaciente.reset()}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(_.e),e.Y36(P),e.Y36(i.qu),e.Y36(f.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-registro"]],inputs:{editMode:"editMode",usuario:"usuario"},outputs:{onData:"onData"},decls:55,vars:9,consts:[[1,"modBox"],[1,"cardBox"],[1,"formBox",3,"formGroup","ngSubmit"],[1,"formContent"],[1,"formInput"],["for",""],["type","text","formControlName","name","name","name",1,"lInput"],["class","errorTag",4,"ngIf"],["type","number","formControlName","age","name","age",1,"lInput"],["type","text","formControlName","parentsNames","name","parentsNames",1,"lInput"],["type","text","formControlName","address","name","address",1,"lInput"],["type","text","formControlName","contact","name","contact",1,"lInput"],["formControlName","gender",1,"lInput"],["value","Masculino","selected","true"],["value","Femenino"],["type","text","formControlName","reference","name","reference",1,"lInput"],["type","text","formControlName","occupation","name","occupation",1,"lInput"],["type","date","formControlName","date","name","date",1,"lInput"],["type","submit",1,"buttonBox"],[1,"errorTag"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"form",2),e.NdJ("ngSubmit",function(){return t.endRegistro()}),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"label",5),e._uU(6,"Nombre del paciente*"),e.qZA(),e._UZ(7,"input",6),e.qZA(),e.YNc(8,N,2,0,"div",7),e.TgZ(9,"div",4),e.TgZ(10,"label",5),e._uU(11,"Edad del paciente*"),e.qZA(),e._UZ(12,"input",8),e.qZA(),e.YNc(13,b,2,0,"div",7),e.TgZ(14,"div",4),e.TgZ(15,"label",5),e._uU(16,"Nombre de los familiares*"),e.qZA(),e._UZ(17,"input",9),e.qZA(),e.YNc(18,I,2,0,"div",7),e.TgZ(19,"div",4),e.TgZ(20,"label",5),e._uU(21,"Direcci\xf2n*"),e.qZA(),e._UZ(22,"input",10),e.qZA(),e.YNc(23,x,2,0,"div",7),e.TgZ(24,"div",4),e.TgZ(25,"label",5),e._uU(26,"N\xfamero de contacto*"),e.qZA(),e._UZ(27,"input",11),e.qZA(),e.YNc(28,U,2,0,"div",7),e.TgZ(29,"div",4),e.TgZ(30,"label",5),e._uU(31,"G\xe9nero"),e.qZA(),e.TgZ(32,"select",12),e.TgZ(33,"option",13),e._uU(34," Masculino "),e.qZA(),e.TgZ(35,"option",14),e._uU(36,"Femenino"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(37,"div",4),e.TgZ(38,"label",5),e._uU(39,"Referencia*"),e.qZA(),e._UZ(40,"input",15),e.qZA(),e.YNc(41,w,2,0,"div",7),e.TgZ(42,"div",4),e.TgZ(43,"label",5),e._uU(44,"Ocupaci\xf2n*"),e.qZA(),e._UZ(45,"input",16),e.qZA(),e.YNc(46,F,2,0,"div",7),e.TgZ(47,"div",4),e.TgZ(48,"label",5),e._uU(49,"Fecha*"),e.qZA(),e._UZ(50,"input",17),e.qZA(),e.YNc(51,M,2,0,"div",7),e.qZA(),e.TgZ(52,"button",18),e.TgZ(53,"p"),e._uU(54,"Registrar paciente"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Q6J("formGroup",t.registroPaciente),e.xp6(6),e.Q6J("ngIf",(null==t.fPaciente.name.errors?null:t.fPaciente.name.errors.required)&&(t.fPaciente.name.touched||t.fPaciente.name.dirty)),e.xp6(5),e.Q6J("ngIf",(null==t.fPaciente.age.errors?null:t.fPaciente.age.errors.required)&&(t.fPaciente.age.touched||t.fPaciente.age.dirty)),e.xp6(5),e.Q6J("ngIf",(null==t.fPaciente.parentsNames.errors?null:t.fPaciente.parentsNames.errors.required)&&(t.fPaciente.parentsNames.touched||t.fPaciente.parentsNames.dirty)),e.xp6(5),e.Q6J("ngIf",(null==t.fPaciente.address.errors?null:t.fPaciente.address.errors.required)&&(t.fPaciente.address.touched||t.fPaciente.address.dirty)),e.xp6(5),e.Q6J("ngIf",(null==t.fPaciente.contact.errors?null:t.fPaciente.contact.errors.required)&&(t.fPaciente.contact.touched||t.fPaciente.contact.dirty)),e.xp6(13),e.Q6J("ngIf",(null==t.fPaciente.reference.errors?null:t.fPaciente.reference.errors.required)&&(t.fPaciente.reference.touched||t.fPaciente.reference.dirty)),e.xp6(5),e.Q6J("ngIf",(null==t.fPaciente.occupation.errors?null:t.fPaciente.occupation.errors.required)&&(t.fPaciente.occupation.touched||t.fPaciente.occupation.dirty)),e.xp6(5),e.Q6J("ngIf",(null==t.fPaciente.date.errors?null:t.fPaciente.date.errors.required)&&(t.fPaciente.date.touched||t.fPaciente.date.dirty)))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,m.O5,i.wV,i.EJ,i.YN,i.Kr],styles:[""]}),r})();var h=u(9976);function B(r,a){if(1&r&&(e.TgZ(0,"th",16),e._uU(1),e.qZA()),2&r){const n=a.$implicit;e.xp6(1),e.Oqu(n)}}function E(r,a){if(1&r&&(e.TgZ(0,"td",24),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()),2&r){const n=a.$implicit;e.xp6(2),e.Oqu(n)}}function k(r,a){if(1&r){const n=e.EpF();e.TgZ(0,"tr",15),e.TgZ(1,"div",20),e.TgZ(2,"fa-icon",21),e.NdJ("click",function(o){const l=e.CHM(n).index;return e.oxw(2).openUpdate(o,l)}),e.qZA(),e.TgZ(3,"fa-icon",22),e.NdJ("click",function(o){const l=e.CHM(n).index;return e.oxw(2).confirmDelete(o,l)}),e.qZA(),e.qZA(),e.YNc(4,E,3,1,"td",23),e.qZA()}if(2&r){const n=a.$implicit,t=e.oxw(2);e.xp6(2),e.Q6J("icon",t.faEdit),e.xp6(1),e.Q6J("icon",t.faTrash),e.xp6(1),e.Q6J("ngForOf",n)}}function O(r,a){if(1&r&&(e.TgZ(0,"div",11),e.TgZ(1,"div",12),e.TgZ(2,"table",13),e.TgZ(3,"thead",14),e.TgZ(4,"tr",15),e.TgZ(5,"th",16),e._uU(6,"Acciones"),e.qZA(),e.YNc(7,B,2,1,"th",17),e.qZA(),e.qZA(),e.TgZ(8,"tbody",18),e.YNc(9,k,5,3,"tr",19),e.qZA(),e.qZA(),e._UZ(10,"br"),e._UZ(11,"br"),e.qZA(),e.qZA()),2&r){const n=e.oxw();e.xp6(7),e.Q6J("ngForOf",n.fields),e.xp6(2),e.Q6J("ngForOf",n.values)}}function Y(r,a){1&r&&(e.TgZ(0,"div",11),e.TgZ(1,"p"),e._uU(2,"No hay elementos para mostrar"),e.qZA(),e.qZA())}const R=[{path:"",component:y,children:[{path:"registro",component:J},{path:"lista",component:(()=>{class r{constructor(n,t,o,s){this.auth=n,this.pacientes=t,this.router=o,this.fb=s,this.faEye=h.Mdf,this.faTrash=h.I7k,this.faPdf=h.gSj,this.faEdit=h.Xcf}ngOnInit(){var n=this;return(0,T.Z)(function*(){let t=yield n.pacientes.getAll();console.log(t),n.fields=t.listKeys,n.values=t.data,n.addText="Registrar paciente"})()}initForm(){this.filterForm=new i.cw({tipo:new i.NI("")})}initComponent(n,t,o,s){this.endpoint=n,this.title=t,this.addText=o,this.name=s}deleteItem(n,t){}confirmDelete(n,t){this.deletedItem=t,this.openConfirm()}openConfirm(){this.showConfirm={confirmAct:!0}}closeConfirm(){this.showConfirm={confirmAct:!1}}openUpdate(n,t){this.router.navigateByUrl("/pacientes/actualizar/"+t)}agregar(){this.router.navigateByUrl("/pacientes/registro")}habilitarElemento(n,t,o){}openError(n){this.errorMsg=n,this.showError={errorAct:!0}}closeError(){this.showError={errorAct:!1}}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(_.e),e.Y36(P),e.Y36(f.F0),e.Y36(i.qu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-lista"]],decls:19,vars:4,consts:[[1,"btnBox"],[1,"buttonBox",3,"click"],["class","cardBox",4,"ngIf"],[1,"confirmBox",3,"ngClass"],[1,"blackBox",3,"click"],[1,"logBox2"],[1,"confirmHeader"],[1,"confirmContent"],[1,"confirmButtons"],["type","button",1,"confirm","buttonBox",3,"click"],["type","button",1,"goback","buttonBox",3,"click"],[1,"cardBox"],[1,"listBox"],[1,"classtable"],[1,"classthead"],[1,"classtr"],["scope","col",1,"classth"],["class","classth","scope","col",4,"ngFor","ngForOf"],[1,"classtbody"],["class","classtr",4,"ngFor","ngForOf"],[1,"btn-details"],["size","2x",1,"faIcon",2,"color","grey",3,"icon","click"],["size","2x",1,"faIcon",2,"color","red",3,"icon","click"],["class","classtd",4,"ngFor","ngForOf"],[1,"classtd"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e.NdJ("click",function(){return t.agregar()}),e._uU(2),e.qZA(),e.qZA(),e.YNc(3,O,12,2,"div",2),e.YNc(4,Y,3,0,"div",2),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.NdJ("click",function(){return t.closeConfirm()}),e.qZA(),e.TgZ(7,"div",5),e.TgZ(8,"p",6),e._uU(9,"CONFIRMACI\xd3N"),e.qZA(),e.TgZ(10,"p",7),e._uU(11,"Segro que quiere eliminar este elemento"),e.qZA(),e.TgZ(12,"div",8),e.TgZ(13,"button",9),e.NdJ("click",function(s){return t.deleteItem(s,t.deletedItem)}),e.TgZ(14,"p"),e._uU(15,"S\xcd"),e.qZA(),e.qZA(),e.TgZ(16,"button",10),e.NdJ("click",function(){return t.closeConfirm()}),e.TgZ(17,"p"),e._uU(18,"NO"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.hij(" ",t.addText," "),e.xp6(1),e.Q6J("ngIf",!t.isEmpty),e.xp6(1),e.Q6J("ngIf",t.isEmpty),e.xp6(1),e.Q6J("ngClass",t.showConfirm))},directives:[m.O5,m.mk,m.sg,v.BN],styles:[""]}),r})()}]}];let q=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[f.Bz.forChild(R)],f.Bz]}),r})();var S=u(9321);let L=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[m.ez,S.SharedModule,i.u5,i.UX,v.uH,q],q]}),r})()}}]);