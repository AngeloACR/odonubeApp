import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TratamientosRoutingModule } from './tratamientos-routing.module';
import { TratamientosComponent } from './tratamientos.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { BillingComponent } from './containers/billing/billing.component';
import { BajaMedicaComponent } from './containers/baja-medica/baja-medica.component';


@NgModule({
  declarations: [
    TratamientosComponent,
    RegistroComponent,
    BillingComponent,
    BajaMedicaComponent
  ],
  imports: [
    CommonModule,
    TratamientosRoutingModule
  ]
})
export class TratamientosModule { }
