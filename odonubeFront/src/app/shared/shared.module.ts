import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';


@NgModule({
  declarations: [
    SharedComponent,
    LoaderComponent,
    HeaderComponent,
    ErrorComponent,
    SidemenuComponent,
    ConfirmacionComponent
  ],
  exports: [
    LoaderComponent,
    ErrorComponent,
    ConfirmacionComponent,
    HeaderComponent,
    SidemenuComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
