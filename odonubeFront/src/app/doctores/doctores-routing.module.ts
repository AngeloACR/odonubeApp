import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctoresComponent } from './doctores.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { ListaComponent } from './containers/lista/lista.component';

const routes: Routes = [
  {
    path: '',
    component: DoctoresComponent,
    children: [
      {
        path: 'registro',
        component: RegistroComponent,
      },
      { path: 'lista', component: ListaComponent },
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
export class DoctoresRoutingModule {}
