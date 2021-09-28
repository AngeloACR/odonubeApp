import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescripcionesComponent } from './prescripciones.component';
import { ListaPrescripcionesComponent } from './containers/lista-prescripciones/lista-prescripciones.component';
import { ListaVisitasComponent } from './containers/lista-visitas/lista-visitas.component';
import { RegistroPrescripcionesComponent } from './containers/registro-prescripciones/registro-prescripciones.component';
import { RegistroVisitasComponent } from './containers/registro-visitas/registro-visitas.component';

const routes: Routes = [
  {
    path: '',
    component: PrescripcionesComponent,
    children: [
      {
        path: 'lista',
        component: ListaPrescripcionesComponent,
      },
      {
        path: 'registro',
        component: RegistroPrescripcionesComponent,
      },
      { path: 'visita', component: RegistroVisitasComponent },
      { path: 'visita-lista', component: ListaVisitasComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrescripcionesRoutingModule {}
