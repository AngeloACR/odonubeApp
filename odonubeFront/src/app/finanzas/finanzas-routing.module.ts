import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanzasComponent } from './finanzas.component';
import { CuentasComponent } from './containers/cuentas/cuentas.component';
import { RegistroVuchersComponent } from './containers/registro-vuchers/registro-vuchers.component';
import { ListaVuchersComponent } from './containers/lista-vuchers/lista-vuchers.component';

const routes: Routes = [{ path: '', component: FinanzasComponent,
children: [
  {
    path: "voucher",
    component: RegistroVuchersComponent,
  },
  { path: "voucher-lista", component: ListaVuchersComponent },
  { path: "cuentas", component: CuentasComponent },
  /*       {
path: 'actualizar/:id',
component: ActualizarComponent 
},
*/
],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanzasRoutingModule { }
