import { Injectable } from '@angular/core';
import { Usuario } from '../_modelos/usuario.modelo';

@Injectable()
export class UsuariosService {

  usuario1: Usuario = {
    'nombre': 'Miguel',
    'apellidos': ['Cervantes', 'Saavedra']
  };

  usuario2: Usuario = {
    'nombre': 'Julia',
    'apellidos': ['Delibes']
  };

  usuario3: Usuario = {
    'nombre': 'Santiago',
    'apellidos': ['Moreno']
  };

  usuarios: Usuario[] = [
    this.usuario1, this.usuario2, this.usuario3
  ];

  constructor() { }

  obtenerUsuarios() {
    return this.usuarios;
  }

}
