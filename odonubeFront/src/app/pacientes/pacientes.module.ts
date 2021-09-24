import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesComponent } from './pacientes.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { ListaComponent } from './containers/lista/lista.component';


@NgModule({
  declarations: [
    PacientesComponent,
    RegistroComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    PacientesRoutingModule
  ]
})
export class PacientesModule { }
