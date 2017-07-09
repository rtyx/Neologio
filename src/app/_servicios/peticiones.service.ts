import { Injectable } from '@angular/core';
import { Peticion } from '../_modelos/peticion.model';
import { Usuario } from '../_modelos/usuario.modelo';
import { UsuariosService } from './usuarios.service';

@Injectable()
export class PeticionesService {

  peticion1: Peticion ;
  peticion2: Peticion ;
  peticion3: Peticion ;
  peticion4: Peticion ;
  peticion5: Peticion ;
  autores: Usuario[];
  peticiones: Peticion[] ;

  constructor(private usuariosService: UsuariosService) {
    this.autores = usuariosService.obtenerUsuarios();

    this.peticion1 = {
      'titulo': 'La sensación de vacío al perder un testículo',
      'autor': this.autores[0],
      'enlace': '',
      'cuerpo': ''
    };

    this.peticion2 = {
      'titulo': 'Un ciudadano europeo de otro país distinto al propio',
      'autor': this.autores[0],
      'enlace': '',
      'cuerpo': ''
    };

    this.peticion3 = {
      'titulo': 'El sentimiento de amor y odio al mismo tiempo',
      'autor': this.autores[0],
      'enlace': '',
      'cuerpo': ''
    };

    this.peticion4 = {
      'titulo': 'Commit',
      'autor': this.autores[0],
      'enlace': '',
      'cuerpo': ''
    };

    this.peticion5 = {
      'titulo': 'Un "bug" informático',
      'autor': this.autores[0],
      'enlace': '',
      'cuerpo': ''
    };

    this.peticiones = [
      this.peticion1, this.peticion2, this.peticion3, this.peticion4, this.peticion5
    ];
  }

  obtenerPeticiones() {
    return this.peticiones;
  }

}
