import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './administracion.component';
import { ClinicaComponent } from './containers/clinica/clinica.component';
import { ListaUsuariosComponent } from './containers/lista-usuarios/lista-usuarios.component';
import { PermisosComponent } from './containers/permisos/permisos.component';
import { RegistrarUsuarioComponent } from './containers/registrar-usuario/registrar-usuario.component';

const routes: Routes = [{ path: '', component: AdministracionComponent,
children: [
  {
    path: 'usuarios-lista',
    component: ListaUsuariosComponent,
  },
  {
    path: 'permisos',
    component: PermisosComponent,
  },
  { path: 'clinica', component: ClinicaComponent },
  { path: 'usuarios', component: RegistrarUsuarioComponent },
], }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
