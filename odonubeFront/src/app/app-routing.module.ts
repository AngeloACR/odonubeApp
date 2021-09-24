import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctoresModule } from './doctores/doctores.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { PrescripcionesModule } from './prescripciones/prescripciones.module';
import { TratamientosModule } from './tratamientos/tratamientos.module';
import { AdministracionModule } from './administracion/administracion.module';
import { FinanzasModule } from './finanzas/finanzas.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'doctores',
    loadChildren: () =>
      import('./doctores/doctores.module').then((m) => m.DoctoresModule),
  },
  {
    path: 'pacientes',
    loadChildren: () =>
      import('./pacientes/pacientes.module').then((m) => m.PacientesModule),
  },
  {
    path: 'prescripciones',
    loadChildren: () =>
      import('./prescripciones/prescripciones.module').then(
        (m) => m.PrescripcionesModule
      ),
  },
  {
    path: 'tratamientos',
    loadChildren: () =>
      import('./tratamientos/tratamientos.module').then(
        (m) => m.TratamientosModule
      ),
  },
  {
    path: 'administracion',
    loadChildren: () =>
      import('./administracion/administracion.module').then(
        (m) => m.AdministracionModule
      ),
  },
  {
    path: 'finanzas',
    loadChildren: () =>
      import('./finanzas/finanzas.module').then((m) => m.FinanzasModule),
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
