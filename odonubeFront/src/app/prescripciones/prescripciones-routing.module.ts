import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescripcionesComponent } from './prescripciones.component';

const routes: Routes = [{ path: '', component: PrescripcionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescripcionesRoutingModule { }
