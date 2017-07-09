import { Component, OnInit } from '@angular/core';
import { Peticion } from '../../_modelos/peticion.model';
import { PeticionesService } from '../../_servicios/peticiones.service';

@Component({
  selector: 'app-peticiones-recientes',
  templateUrl: './peticiones-recientes.component.html',
  styleUrls: ['./peticiones-recientes.component.sass']
})
export class PeticionesRecientesComponent implements OnInit {

  peticiones: Peticion[];
  minilista;

  constructor(private peticionesService: PeticionesService) { }

  ngOnInit() {
    this.peticiones = this.peticionesService.obtenerPeticiones();
    this.minilista = {
      'titulo': 'Peticiones recientes',
      'filas': this.peticiones,
      'enlace': '/peticiones'
    };
  }

}
