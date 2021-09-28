import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TratamientosComponent } from './tratamientos.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { BajaMedicaComponent } from './containers/baja-medica/baja-medica.component';

const routes: Routes = [
  {
    path: '',
    component: TratamientosComponent,
    children: [
      {
        path: 'registro',
        component: RegistroComponent,
      },
      { path: 'baja', component: BajaMedicaComponent },
      /*       {
path: 'actualizar/:id',
component: ActualizarComponent 
},
*/
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TratamientosRoutingModule {}
