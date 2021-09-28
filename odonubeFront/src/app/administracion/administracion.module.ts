import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { RegistrarUsuarioComponent } from './containers/registrar-usuario/registrar-usuario.component';
import { ListaUsuariosComponent } from './containers/lista-usuarios/lista-usuarios.component';
import { ActualizarUsuarioComponent } from './containers/actualizar-usuario/actualizar-usuario.component';
import { ClinicaComponent } from './containers/clinica/clinica.component';
import { PermisosComponent } from './containers/permisos/permisos.component';


@NgModule({
  declarations: [
    AdministracionComponent,
    RegistrarUsuarioComponent,
    ListaUsuariosComponent,
    ActualizarUsuarioComponent,
    ClinicaComponent,
    PermisosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
