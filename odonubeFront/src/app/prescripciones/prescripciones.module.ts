import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PrescripcionesRoutingModule } from './prescripciones-routing.module';
import { PrescripcionesComponent } from './prescripciones.component';
import { RegistroVisitasComponent } from './containers/registro-visitas/registro-visitas.component';
import { RegistroPrescripcionesComponent } from './containers/registro-prescripciones/registro-prescripciones.component';
import { ListaVisitasComponent } from './containers/lista-visitas/lista-visitas.component';
import { ListaPrescripcionesComponent } from './containers/lista-prescripciones/lista-prescripciones.component';

@NgModule({
  declarations: [
    PrescripcionesComponent,
    RegistroVisitasComponent,
    RegistroPrescripcionesComponent,
    ListaVisitasComponent,
    ListaPrescripcionesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    PrescripcionesRoutingModule,
  ],
})
export class PrescripcionesModule {}
