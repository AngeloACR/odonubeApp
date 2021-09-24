import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
