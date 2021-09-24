import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DoctoresRoutingModule } from './doctores-routing.module';
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
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DoctoresRoutingModule
  ]
})
export class DoctoresModule { }
