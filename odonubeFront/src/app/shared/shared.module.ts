import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';


@NgModule({
  declarations: [
    SharedComponent,
    LoaderComponent,
    ErrorComponent,
    ConfirmacionComponent
  ],
  exports: [
    LoaderComponent,
    ErrorComponent,
    ConfirmacionComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
