import { Component, OnInit } from '@angular/core';
import { Peticion } from '../_modelos/peticion.model';
import { PeticionesService } from '../_servicios/peticiones.service';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.sass']
})
export class PeticionesComponent implements OnInit {

  peticiones: Peticion[];
  lista;

  constructor(private peticionesService: PeticionesService) { }

  ngOnInit() {
    this.peticiones = this.peticionesService.obtenerPeticiones();
    this.lista = {
      'titulo': 'Peticiones recientes',
      'filas': this.peticiones,
      'enlace': '/peticiones'
    };
  }

}
