import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CabeceraComponent } from './_compartido/cabecera/cabecera.component';
import { NeologismoDestacadoComponent } from './inicio/neologismo-destacado/neologismo-destacado.component';
import { PropuestasComponent } from './propuestas/propuestas.component';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { RoutingModule } from './routing.module';
import { Error404Component } from './error-404/error-404.component';
import { CabeceraInicioComponent } from './inicio/cabecera-inicio/cabecera-inicio.component';
import { NeologismoComponent } from './inicio/neologismo-destacado/neologismo/neologismo.component';
import { OrigenComponent } from './inicio/neologismo-destacado/neologismo/origen/origen.component';
import { AcepcionComponent } from './inicio/neologismo-destacado/neologismo/acepcion/acepcion.component';
import { PalabraComponent } from './inicio/neologismo-destacado/neologismo/palabra/palabra.component';
import { AutorComponent } from './inicio/neologismo-destacado/neologismo/autor/autor.component';
import { PeticionesRecientesComponent } from './inicio/peticiones-recientes/peticiones-recientes.component';
import { PropuestasRecientesComponent } from './inicio/propuestas-recientes/propuestas-recientes.component';
import { MinilistaComponent } from './_compartido/minilista/minilista.component';
import { CabeceraMinilistaComponent } from './_compartido/minilista/cabecera-minilista/cabecera-minilista.component';
import { PieMinilistaComponent } from './_compartido/minilista/pie-minilista/pie-minilista.component';
import { FilaMinilistaComponent } from './_compartido/minilista/fila-minilista/fila-minilista.component';
import { PeticionesService } from './_servicios/peticiones.service';
import { PropuestasService } from './_servicios/propuestas.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabeceraComponent,
    NeologismoDestacadoComponent,
    PropuestasComponent,
    PeticionesComponent,
    Error404Component,
    CabeceraInicioComponent,
    NeologismoComponent,
    OrigenComponent,
    AcepcionComponent,
    PalabraComponent,
    AutorComponent,
    PeticionesRecientesComponent,
    PropuestasRecientesComponent,
    MinilistaComponent,
    CabeceraMinilistaComponent,
    PieMinilistaComponent,
    FilaMinilistaComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [
    PeticionesService,
    PropuestasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
