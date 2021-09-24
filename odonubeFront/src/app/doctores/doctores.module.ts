import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DoctoresRoutingModule } from './doctores-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DoctoresComponent } from './doctores.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { ListaComponent } from './containers/lista/lista.component';


@NgModule({
  declarations: [
    DoctoresComponent,
    RegistroComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DoctoresRoutingModule
  ],
  exports: [
    DoctoresRoutingModule
  ]
})
export class DoctoresModule { }
