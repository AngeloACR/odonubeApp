"use strict";(self.webpackChunkodonube_front=self.webpackChunkodonube_front||[]).push([[178],{8178:(z,P,l)=>{l.r(P),l.d(P,{PrescripcionesModule:()=>G});var u=l(8583),g=l(1841),s=l(665),M=l(9321),C=l(5855),e=l(639),v=l(6290),T=l(6043);let O=(()=>{class o{constructor(){this.aMenu={},this.menuOn=!1}ngOnInit(){this.menuOn=!0,this.aMenu={aMenu:this.menuOn}}tMenu(){this.menuOn=!this.menuOn,this.aMenu={aMenu:this.menuOn}}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-prescripciones"]],decls:8,vars:1,consts:[[1,"appBox"],[1,"headerBox"],[3,"menu"],[1,"panelBox"],[1,"menuBox",3,"ngClass"],[1,"contentBox"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"app-header",2),e.NdJ("menu",function(){return n.tMenu()}),e.qZA(),e.qZA(),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._UZ(5,"app-sidemenu"),e.qZA(),e.TgZ(6,"div",5),e._UZ(7,"router-outlet"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngClass",n.aMenu))},directives:[v.G,u.mk,T.x,C.lC],styles:[""]}),o})();var Z=l(8239),f=l(9976),_=l(827);let h=(()=>{class o{constructor(t){this.http=t,this.localSource="http://localhost:6800",this.productionSource="https://api.odonube.com",this.mySource=this.productionSource}create(t){let n=new g.WM;n=n.append("Content-Type","application/json");var p=this.mySource;p+="/prescripciones/";let a={};return new Promise((d,c)=>{this.http.post(p,a,{headers:n}).subscribe(m=>{d(m)},m=>{c(new Error(m.error.message))})})}update(){let t=new g.WM;t=t.append("Content-Type","application/json");var r=this.mySource;r+="/prescripciones/";let p={};return new Promise((a,d)=>{this.http.put(r,p,{headers:t}).subscribe(c=>{a(c)},c=>{d(new Error(c.error.message))})})}getOne(){let t=new g.WM;t=t.append("Content-Type","application/json");var r=this.mySource;return r+="/prescripciones/",new Promise((a,d)=>{this.http.get(r,{params:{},headers:t}).subscribe(c=>{a(c)},c=>{d(new Error(c.error.message))})})}getAll(){let t=new g.WM;t=t.append("Content-Type","application/json");var r=this.mySource;return r+="/prescripciones/",new Promise((a,d)=>{this.http.get(r,{params:{},headers:t}).subscribe(c=>{a(c)},c=>{d(new Error(c.error.message))})})}deleteOne(){let t=new g.WM;t=t.append("Content-Type","application/json");var r=this.mySource;return r+="/prescripciones/",new Promise((a,d)=>{this.http.delete(r,{params:{},headers:t}).subscribe(c=>{a(c)},c=>{d(new Error(c.error.message))})})}deleteAll(){let t=new g.WM;t=t.append("Content-Type","application/json");var r=this.mySource;return r+="/prescripciones/",new Promise((a,d)=>{this.http.delete(r,{params:{},headers:t}).subscribe(c=>{a(c)},c=>{d(new Error(c.error.message))})})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(g.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function A(o,i){if(1&o&&(e.TgZ(0,"th",20),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.Oqu(t)}}function x(o,i){if(1&o&&(e.TgZ(0,"td",26),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.qZA()),2&o){const t=i.$implicit;e.xp6(2),e.Oqu(t)}}function q(o,i){if(1&o&&(e.TgZ(0,"tr",19),e._UZ(1,"div",24),e.YNc(2,x,3,1,"td",25),e.qZA()),2&o){const t=i.$implicit;e.xp6(2),e.Q6J("ngForOf",t)}}function B(o,i){if(1&o&&(e.TgZ(0,"div",15),e.TgZ(1,"div",16),e.TgZ(2,"table",17),e.TgZ(3,"thead",18),e.TgZ(4,"tr",19),e._UZ(5,"th",20),e.YNc(6,A,2,1,"th",21),e.qZA(),e.qZA(),e.TgZ(7,"tbody",22),e.YNc(8,q,3,1,"tr",23),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const t=e.oxw();e.xp6(6),e.Q6J("ngForOf",t.fields),e.xp6(2),e.Q6J("ngForOf",t.values)}}function y(o,i){1&o&&(e.TgZ(0,"div",15),e.TgZ(1,"p"),e._uU(2,"No hay elementos para mostrar"),e.qZA(),e.qZA())}let b=(()=>{class o{constructor(t,n,r,p){this.auth=t,this.prescripciones=n,this.fb=r,this.router=p,this.faEye=f.Mdf,this.faTrash=f.I7k,this.faPdf=f.gSj,this.faEdit=f.Xcf}ngOnInit(){var t=this;return(0,Z.Z)(function*(){let n=yield t.prescripciones.getAll();t.fields=n.listKeys,t.values=n.data,t.addText="Registrar Prescripcion"})()}initForm(){this.filterForm=new s.cw({tipo:new s.NI("")})}initComponent(t,n,r,p){this.endpoint=t,this.title=n,this.addText=r,this.name=p}deleteItem(t,n){}confirmDelete(t,n){this.deletedItem=n,this.openConfirm()}openConfirm(){this.showConfirm={confirmAct:!0}}closeConfirm(){this.showConfirm={confirmAct:!1}}openUpdate(t,n){this.router.navigateByUrl("/prescripciones/actualizar/"+n)}agregar(){this.router.navigateByUrl("/prescripciones/registro")}habilitarElemento(t,n,r){}openError(t){this.errorMsg=t,this.showError={errorAct:!0}}closeError(){this.showError={errorAct:!1}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(_.e),e.Y36(h),e.Y36(s.qu),e.Y36(C.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-lista-prescripciones"]],decls:32,vars:4,consts:[[1,"modBoxC"],[1,"titleBox"],[1,"buttonBoxC",3,"click"],["class","cardBox",4,"ngIf"],[1,"filaButton"],[2,"margin","0 10px","font-size","12px"],[1,"buttonBoxC"],[1,"confirmBox",3,"ngClass"],[1,"blackBox",3,"click"],[1,"logBox2"],[1,"confirmHeader"],[1,"confirmContent"],[1,"confirmButtons"],["type","button",1,"confirm","buttonBox",3,"click"],["type","button",1,"goback","buttonBox",3,"click"],[1,"cardBox"],[1,"listBox"],[1,"classtable",2,"overflow","scroll"],[1,"classthead"],[1,"classtr"],["scope","col",1,"classth"],["class","classth","scope","col",4,"ngFor","ngForOf"],[1,"classtbody"],["class","classtr",4,"ngFor","ngForOf"],[1,"btn-details"],["class","classtd",4,"ngFor","ngForOf"],[1,"classtd"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h4"),e._uU(3,"icon Lista de prescripciones"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return n.agregar()}),e._uU(5),e.qZA(),e.qZA(),e.YNc(6,B,9,2,"div",3),e.TgZ(7,"div",4),e.TgZ(8,"div",5),e._uU(9," n item encontrados "),e.qZA(),e.TgZ(10,"div"),e.TgZ(11,"button",6),e.TgZ(12,"p"),e._uU(13,"ACTUALIZAR"),e.qZA(),e.qZA(),e.TgZ(14,"button",6),e.TgZ(15,"p"),e._uU(16,"CERRAR"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(17,y,3,0,"div",3),e.qZA(),e.TgZ(18,"div",7),e.TgZ(19,"div",8),e.NdJ("click",function(){return n.closeConfirm()}),e.qZA(),e.TgZ(20,"div",9),e.TgZ(21,"p",10),e._uU(22,"CONFIRMACI\xd3N"),e.qZA(),e.TgZ(23,"p",11),e._uU(24,"Segro que quiere eliminar este elemento"),e.qZA(),e.TgZ(25,"div",12),e.TgZ(26,"button",13),e.NdJ("click",function(p){return n.deleteItem(p,n.deletedItem)}),e.TgZ(27,"p"),e._uU(28,"S\xcd"),e.qZA(),e.qZA(),e.TgZ(29,"button",14),e.NdJ("click",function(){return n.closeConfirm()}),e.TgZ(30,"p"),e._uU(31,"NO"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.hij(" ",n.addText," "),e.xp6(1),e.Q6J("ngIf",!n.isEmpty),e.xp6(11),e.Q6J("ngIf",n.isEmpty),e.xp6(1),e.Q6J("ngClass",n.showConfirm))},directives:[u.O5,u.mk,u.sg],styles:[".modBoxC[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#cecece}.modBoxC[_ngcontent-%COMP%]   .titleBox[_ngcontent-%COMP%]{width:100%;color:#fff;background-color:#073e41;padding:16px;text-align:left;display:flex;justify-content:space-between;align-items:center}.modBoxC[_ngcontent-%COMP%]   .titleBox[_ngcontent-%COMP%]   .buttonBoxC[_ngcontent-%COMP%]{width:auto;margin:7px 10px;padding:7px 5px;cursor:pointer;font-size:12px}.modBoxC[_ngcontent-%COMP%]   .filaButton[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modBoxC[_ngcontent-%COMP%]   .filaButton[_ngcontent-%COMP%]   .buttonBoxC[_ngcontent-%COMP%]{width:auto;margin:-10px 10px;padding:10px 30px;cursor:pointer;font-size:10px}"]}),o})(),I=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-lista-visitas"]],decls:2,vars:0,template:function(t,n){1&t&&(e.TgZ(0,"p"),e._uU(1,"lista-visitas works!"),e.qZA())},styles:[""]}),o})();var w=l(3772);function U(o,i){1&o&&(e.TgZ(0,"div",30),e._uU(1," Por favor ingrese el numero de prescripcion "),e.qZA())}function N(o,i){1&o&&(e.TgZ(0,"div",30),e._uU(1," Por favor ingrese la fecha "),e.qZA())}function R(o,i){1&o&&(e.TgZ(0,"div",30),e._uU(1," Por favor ingrese el appnt "),e.qZA())}function F(o,i){1&o&&(e.TgZ(0,"div",30),e._uU(1," Por favor ingrese el numero de visita "),e.qZA())}function E(o,i){1&o&&(e.TgZ(0,"div",30),e._uU(1," Por favor ingrese el id del paciente "),e.qZA())}function J(o,i){1&o&&(e.TgZ(0,"div",30),e._uU(1," Por favor ingrese la el nombre del paciente "),e.qZA())}function k(o,i){1&o&&(e.TgZ(0,"div",30),e._uU(1," Por favor ingrese la edad del paciente "),e.qZA())}function S(o,i){1&o&&(e.TgZ(0,"div",30),e._uU(1," Por favor ingrese el genero del paciente "),e.qZA())}function Y(o,i){1&o&&(e.TgZ(0,"div",30),e._uU(1," Por favor ingrese la fecha "),e.qZA())}const L=[{path:"",component:O,children:[{path:"lista",component:b},{path:"registro",component:(()=>{class o{constructor(t,n,r,p){this.auth=t,this.prescripciones=n,this.fb=r,this.router=p,this.onData=new e.vpe}ngOnInit(){this.initForm(),this.showError={errorAct:!1}}initForm(){this.registroPrescripcion=new s.cw({prescripcion:new s.NI("",s.kI.required),date:new s.NI("",s.kI.required),appnt:new s.NI("",s.kI.required),visit:new s.NI("",s.kI.required),idPatient:new s.NI("",[s.kI.required]),patientName:new s.NI("",s.kI.required),patientAge:new s.NI("",s.kI.required),patientGender:new s.NI("",s.kI.required)})}get fPrescripcion(){return this.registroPrescripcion.controls}endRegistro(){var t=this;return(0,Z.Z)(function*(){try{var n=t.registroPrescripcion.value;let r,p={prescripcion:n.prescripcion,date:n.date,appnt:n.appnt,visit:n.visit,idPatient:n.idPatient,patientName:n.patientName,patientAge:n.patientAge,patientGender:n.patientGender};if(r=t.catchPrescripcionErrors(),r)t.openError("Algunos campos son inv\xe1lidos. Por favor, revise el formulario e intente de nuevo");else{let a=yield t.prescripciones.create(p);console.log(a),t.router.navigateByUrl("prescripciones/lista")}}catch(r){t.openError(r.message)}})()}catchPrescripcionErrors(){return!!this.fPrescripcion.prescripcion.errors&&this.fPrescripcion.prescripcion.errors.required||!!this.fPrescripcion.date.errors&&this.fPrescripcion.date.errors.required||!!this.fPrescripcion.appnt.errors&&this.fPrescripcion.appnt.errors.required||!!this.fPrescripcion.visit.errors&&this.fPrescripcion.visit.errors.required||!!this.fPrescripcion.idPatient.errors&&this.fPrescripcion.idPatient.errors.minlength||!!this.fPrescripcion.patientName.errors&&this.fPrescripcion.patientName.errors.required||!!this.fPrescripcion.patientAge.errors&&this.fPrescripcion.patientAge.errors.required||!!this.fPrescripcion.patientGender.errors&&this.fPrescripcion.patientGender.errors.required}openError(t){this.errorMsg=t,this.showError={errorAct:!0}}closeError(){this.showError={errorAct:!1}}resetForms(){this.registroPrescripcion.reset()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(_.e),e.Y36(h),e.Y36(s.qu),e.Y36(C.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-registro-prescripciones"]],inputs:{editMode:"editMode",usuario:"usuario"},outputs:{onData:"onData"},decls:110,vars:12,consts:[[1,"modBoxC"],[1,"titleBox"],[1,"cardBoxC"],[1,"formBoxC",3,"formGroup","ngSubmit"],[1,"inputsBoxC"],[1,"formContentC"],[1,"FilasInputsC"],[1,"fila"],[1,"input"],[1,"formInputC"],["for",""],["type","number","formControlName","prescripcion","name","prescripcion",1,"lInputC"],["class","errorTagC",4,"ngIf"],["type","date","formControlName","date","name","date",1,"lInputC"],["type","number","formControlName","appnt","name","appnt",1,"lInputC"],["type","number","formControlName","visit","name","visit",1,"lInputC"],["type","number","formControlName","idPatient","name","idPatient",1,"lInputC"],["type","text","formControlName","patientName","name","patientName",1,"lInputC"],["type","number","formControlName","patientAge","name","patientAge",1,"lInputC"],["formControlName","patientGender",1,"lInputC"],["value","Masculino","selected","true"],["value","Femenino"],[1,"botones"],["type","submit",1,"buttonBoxC"],[1,"buttonBoxC"],[1,"listaMedicina"],["type","text","formControlName","date","name","date",1,"lInputC"],["type","text","formControlName","appnt","name","appnt",1,"lInputC"],["type","text","formControlName","visit","name","visit",1,"lInputC"],[1,"errorBox",3,"msg","ngClass","closeError"],[1,"errorTagC"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._uU(2," icon Prescripcion "),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return n.endRegistro()}),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.TgZ(8,"div",7),e.TgZ(9,"div",8),e.TgZ(10,"div",9),e.TgZ(11,"label",10),e._uU(12,"PRESCRIPCION#*"),e.qZA(),e._UZ(13,"input",11),e.qZA(),e.YNc(14,U,2,0,"div",12),e.qZA(),e.TgZ(15,"div",8),e.TgZ(16,"div",9),e.TgZ(17,"label",10),e._uU(18,"Fecha*"),e.qZA(),e._UZ(19,"input",13),e.qZA(),e.YNc(20,N,2,0,"div",12),e.qZA(),e.TgZ(21,"div",8),e.TgZ(22,"div",9),e.TgZ(23,"label",10),e._uU(24,"APPNT#*"),e.qZA(),e._UZ(25,"input",14),e.qZA(),e.YNc(26,R,2,0,"div",12),e.qZA(),e.TgZ(27,"div",8),e.TgZ(28,"div",9),e.TgZ(29,"label",10),e._uU(30,"Visita*"),e.qZA(),e._UZ(31,"input",15),e.qZA(),e.YNc(32,F,2,0,"div",12),e.qZA(),e.qZA(),e.TgZ(33,"div",7),e.TgZ(34,"div",8),e.TgZ(35,"div",9),e.TgZ(36,"label",10),e._uU(37,"ID del paciente*"),e.qZA(),e._UZ(38,"input",16),e.qZA(),e.YNc(39,E,2,0,"div",12),e.qZA(),e.TgZ(40,"div",8),e.TgZ(41,"div",9),e.TgZ(42,"label",10),e._uU(43,"Nombre del paciente*"),e.qZA(),e._UZ(44,"input",17),e.qZA(),e.YNc(45,J,2,0,"div",12),e.qZA(),e.TgZ(46,"div",8),e.TgZ(47,"div",9),e.TgZ(48,"label",10),e._uU(49,"Edad del paciente*"),e.qZA(),e._UZ(50,"input",18),e.qZA(),e.YNc(51,k,2,0,"div",12),e.qZA(),e.TgZ(52,"div",8),e.TgZ(53,"div",9),e.TgZ(54,"label",10),e._uU(55,"G\xe9nero"),e.qZA(),e.TgZ(56,"select",19),e.TgZ(57,"option",20),e._uU(58," Masculino "),e.qZA(),e.TgZ(59,"option",21),e._uU(60,"Femenino"),e.qZA(),e.qZA(),e.qZA(),e.YNc(61,S,2,0,"div",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(62,"div",5),e.TgZ(63,"div",22),e.TgZ(64,"button",23),e.TgZ(65,"p"),e._uU(66,"REGISTRAR"),e.qZA(),e.qZA(),e.TgZ(67,"button",24),e.TgZ(68,"p"),e._uU(69,"RESET"),e.qZA(),e.qZA(),e.TgZ(70,"button",24),e.TgZ(71,"p"),e._uU(72,"CERRAR"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(73,"div",25),e.TgZ(74,"div",5),e.TgZ(75,"div",7),e.TgZ(76,"div",8),e.TgZ(77,"div",9),e.TgZ(78,"label",10),e._uU(79,"Nombre de la medicina"),e.qZA(),e.TgZ(80,"select",19),e.TgZ(81,"option",20),e._uU(82," Masculino "),e.qZA(),e.TgZ(83,"option",21),e._uU(84,"Femenino"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(85,"div",8),e.TgZ(86,"div",9),e.TgZ(87,"label",10),e._uU(88,"Dodge"),e.qZA(),e._UZ(89,"input",26),e.qZA(),e.YNc(90,Y,2,0,"div",12),e.qZA(),e.TgZ(91,"div",8),e.TgZ(92,"div",9),e.TgZ(93,"label",10),e._uU(94,"Duracion"),e.qZA(),e._UZ(95,"input",27),e.qZA(),e.qZA(),e.TgZ(96,"div",8),e.TgZ(97,"div",9),e.TgZ(98,"label",10),e._uU(99,"Cantidad"),e.qZA(),e._UZ(100,"input",15),e.qZA(),e.qZA(),e.TgZ(101,"div",8),e.TgZ(102,"div",9),e.TgZ(103,"label",10),e._uU(104,"Remark"),e.qZA(),e._UZ(105,"input",28),e.qZA(),e.qZA(),e.TgZ(106,"button"),e._uU(107," + "),e.qZA(),e.qZA(),e._UZ(108,"div",7),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(109,"app-error",29),e.NdJ("closeError",function(){return n.closeError()}),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("formGroup",n.registroPrescripcion),e.xp6(10),e.Q6J("ngIf",(null==n.fPrescripcion.prescripcion.errors?null:n.fPrescripcion.prescripcion.errors.required)&&(n.fPrescripcion.prescripcion.touched||n.fPrescripcion.prescripcion.dirty)),e.xp6(6),e.Q6J("ngIf",(null==n.fPrescripcion.date.errors?null:n.fPrescripcion.date.errors.required)&&(n.fPrescripcion.date.touched||n.fPrescripcion.date.dirty)),e.xp6(6),e.Q6J("ngIf",(null==n.fPrescripcion.appnt.errors?null:n.fPrescripcion.appnt.errors.required)&&(n.fPrescripcion.appnt.touched||n.fPrescripcion.appnt.dirty)),e.xp6(6),e.Q6J("ngIf",(null==n.fPrescripcion.visit.errors?null:n.fPrescripcion.visit.errors.required)&&(n.fPrescripcion.visit.touched||n.fPrescripcion.visit.dirty)),e.xp6(7),e.Q6J("ngIf",(null==n.fPrescripcion.idPatient.errors?null:n.fPrescripcion.idPatient.errors.required)&&(n.fPrescripcion.idPatient.touched||n.fPrescripcion.idPatient.dirty)),e.xp6(6),e.Q6J("ngIf",(null==n.fPrescripcion.patientName.errors?null:n.fPrescripcion.patientName.errors.required)&&(n.fPrescripcion.patientName.touched||n.fPrescripcion.patientName.dirty)),e.xp6(6),e.Q6J("ngIf",(null==n.fPrescripcion.patientAge.errors?null:n.fPrescripcion.patientAge.errors.required)&&(n.fPrescripcion.patientAge.touched||n.fPrescripcion.patientAge.dirty)),e.xp6(10),e.Q6J("ngIf",(null==n.fPrescripcion.patientGender.errors?null:n.fPrescripcion.patientGender.errors.required)&&(n.fPrescripcion.patientGender.touched||n.fPrescripcion.patientGender.dirty)),e.xp6(29),e.Q6J("ngIf",(null==n.fPrescripcion.date.errors?null:n.fPrescripcion.date.errors.required)&&(n.fPrescripcion.date.touched||n.fPrescripcion.date.dirty)),e.xp6(19),e.Q6J("msg",n.errorMsg)("ngClass",n.showError))},directives:[s._Y,s.JL,s.sg,s.wV,s.Fj,s.JJ,s.u,u.O5,s.EJ,s.YN,s.Kr,w.q,u.mk],styles:['.modBoxC[_ngcontent-%COMP%]{width:100%;height:100%;display:grid;grid-template-rows:10% 90%;background-color:#cecece}.modBoxC[_ngcontent-%COMP%]   .titleBox[_ngcontent-%COMP%]{width:100%;color:#fff;background-color:#073e41;padding:16px;text-align:left}.cardBoxC[_ngcontent-%COMP%]{width:100%;padding:10px 20px 30px}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr 1fr;grid-gap:10px;gap:10px}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .inputsBoxC[_ngcontent-%COMP%]{display:grid;grid-template-columns:5fr 1fr;grid-gap:10px;gap:10px;margin-top:20px}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .inputsBoxC[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]{border:1px solid #9173733b;display:flex;justify-content:center;align-items:center}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .inputsBoxC[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .FilasInputsC[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr 1fr;padding:10px}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .inputsBoxC[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .FilasInputsC[_ngcontent-%COMP%]   .fila[_ngcontent-%COMP%]{display:flex}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .inputsBoxC[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .FilasInputsC[_ngcontent-%COMP%]   .fila[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{margin:5px}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .inputsBoxC[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .FilasInputsC[_ngcontent-%COMP%]   .fila[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .formInputC[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .inputsBoxC[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .FilasInputsC[_ngcontent-%COMP%]   .fila[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .formInputC[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{white-space:nowrap;font-size:11px;font-family:"Montserrat",sans-serif}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .inputsBoxC[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .FilasInputsC[_ngcontent-%COMP%]   .fila[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .formInputC[_ngcontent-%COMP%]   .lInputC[_ngcontent-%COMP%]{width:100%;font-size:.9em;padding:2px;outline:none;margin:5px}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .inputsBoxC[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:auto;width:100%}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .inputsBoxC[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%]   .buttonBoxC[_ngcontent-%COMP%]{width:auto;margin:7px;padding:7px 0;cursor:pointer;font-size:10px}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .listaMedicina[_ngcontent-%COMP%]{width:100%}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .listaMedicina[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]{border:1px solid #9173733b;display:flex;flex-direction:column}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .listaMedicina[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .fila[_ngcontent-%COMP%]{display:flex}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .listaMedicina[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .fila[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{margin:5px}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .listaMedicina[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .fila[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .formInputC[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .listaMedicina[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .fila[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .formInputC[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{white-space:nowrap;font-size:11px;font-family:"Montserrat",sans-serif}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .listaMedicina[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .fila[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .formInputC[_ngcontent-%COMP%]   .lInputC[_ngcontent-%COMP%]{width:100%;font-size:.9em;padding:2px;outline:none;margin:5px}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .listaMedicina[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:auto;width:100%}.cardBoxC[_ngcontent-%COMP%]   .formBoxC[_ngcontent-%COMP%]   .listaMedicina[_ngcontent-%COMP%]   .formContentC[_ngcontent-%COMP%]   .botones[_ngcontent-%COMP%]   .buttonBoxC[_ngcontent-%COMP%]{width:auto;margin:7px;padding:7px 0;cursor:pointer;font-size:10px}.errorTagC[_ngcontent-%COMP%]{text-align:end;font-size:12px;font-weight:400;color:red}']}),o})()},{path:"visita",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-registro-visitas"]],decls:2,vars:0,template:function(t,n){1&t&&(e.TgZ(0,"p"),e._uU(1,"registro-visitas works!"),e.qZA())},styles:[""]}),o})()},{path:"visita-lista",component:I}]}];let Q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[C.Bz.forChild(L)],C.Bz]}),o})(),G=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.ez,s.u5,g.JF,M.SharedModule,s.UX,Q]]}),o})()}}]);