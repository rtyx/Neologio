import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { PropuestasComponent } from './propuestas/propuestas.component';
import { Error404Component } from './error-404/error-404.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AjustesComponent } from './ajustes/ajustes.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'peticiones', component: PeticionesComponent },
  { path: 'propuestas', component: PropuestasComponent },
  { path: 'perfiles', component: PerfilComponent },
  { path: 'ajustes', component: AjustesComponent },
  { path: 'cerros-de-ubeda', component: Error404Component },
  { path: '**', redirectTo: '/cerros-de-ubeda'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule {

}
