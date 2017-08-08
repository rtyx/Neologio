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
  peticion6: Peticion ;
  peticion7: Peticion ;
  peticion8: Peticion ;
  peticion9: Peticion ;
  peticion10: Peticion ;
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

    this.peticion6 = this.peticion1;
    this.peticion7 = this.peticion2;
    this.peticion8 = this.peticion3;
    this.peticion9 = this.peticion4;
    this.peticion10 = this.peticion5;

    this.peticiones = [
      this.peticion1, this.peticion2, this.peticion3, this.peticion4, this.peticion5, this.peticion6, this.peticion7, this.peticion8, this.peticion9, this.peticion10
    ];
  }

  obtenerPeticiones() {
    return this.peticiones;
  }

}
