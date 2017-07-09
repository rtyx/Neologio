import { Injectable } from '@angular/core';
import { Peticion } from '../_modelos/peticion.model';
import { Usuario } from '../_modelos/usuario.modelo';

@Injectable()
export class PeticionesService {

  autor1: Usuario = {
    'nombre': 'Miguel',
    'apellidos': ['Cervantes', 'Saavedra']
  };

  autor2: Usuario = {
    'nombre': 'Miguel',
    'apellidos': ['Delibes']
  };

  peticion1: Peticion = {
    'titulo': 'La sensación de vacío al perder un testículo',
    'autor': this.autor1,
    'enlace': '',
    'cuerpo': ''
  };

  peticion2: Peticion = {
    'titulo': 'Un ciudadano europeo de otro país distinto al propio',
    'autor': this.autor2,
    'enlace': '',
    'cuerpo': ''
  };

  peticiones: Peticion[] = [
    this.peticion1, this.peticion2
  ];

  constructor() { }

  obtenerPeticiones() {
    return this.peticiones;
  }

}
