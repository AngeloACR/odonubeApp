import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { TratamientosRoutingModule } from './tratamientos-routing.module';
import { TratamientosComponent } from './tratamientos.component';
import { RegistroComponent } from './containers/registro/registro.component';
import { BillingComponent } from './components/billing/billing.component';
import { BajaMedicaComponent } from './containers/baja-medica/baja-medica.component';

@NgModule({
  declarations: [
    TratamientosComponent,
    RegistroComponent,
    BillingComponent,
    BajaMedicaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    TratamientosRoutingModule,
  ],
})
export class TratamientosModule {}
