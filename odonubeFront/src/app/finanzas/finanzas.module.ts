import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanzasRoutingModule } from './finanzas-routing.module';
import { FinanzasComponent } from './finanzas.component';
import { RegistroVuchersComponent } from './containers/registro-vuchers/registro-vuchers.component';
import { ListaVuchersComponent } from './containers/lista-vuchers/lista-vuchers.component';
import { CuentasComponent } from './containers/cuentas/cuentas.component';


@NgModule({
  declarations: [
    FinanzasComponent,
    RegistroVuchersComponent,
    ListaVuchersComponent,
    CuentasComponent
  ],
  imports: [
    CommonModule,
    FinanzasRoutingModule
  ]
})
export class FinanzasModule { }
