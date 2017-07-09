import { Injectable } from '@angular/core';
import { Usuario } from '../_modelos/usuario.modelo';
import { Propuesta } from '../_modelos/propuesta.model';
import { Neologismo } from '../_modelos/neologismo.modelo';
import { UsuariosService } from './usuarios.service';

@Injectable()
export class PropuestasService {

  usuarios: Usuario[];
  neologismo1;
  propuesta1;
  propuesta2;
  propuesta3;
  propuesta4;
  propuesta5;

  propuestas: Propuesta[];

  constructor(private usuariosService: UsuariosService) {
    this.usuarios = this.usuariosService.obtenerUsuarios();
    this.neologismo1 = {
      'palabra': 'Pianostrar',
      'autores': [this.usuarios[0]],
      'acepciones': []
    };

    this.propuesta1 = {
      'neologismo': this.neologismo1,
      'titulo': this.neologismo1.palabra,
      'autor': this.usuarios[0],
      'enlace': '',
      'cuerpo': ''
    };

    this.propuesta2 = {
      'neologismo': this.neologismo1,
      'titulo': this.neologismo1.palabra,
      'autor': this.usuarios[0],
      'enlace': '',
      'cuerpo': ''
    };

    this.propuesta3 = {
      'neologismo': this.neologismo1,
      'titulo': this.neologismo1.palabra,
      'autor': this.usuarios[0],
      'enlace': '',
      'cuerpo': ''
    };

    this.propuesta4 = {
      'neologismo': this.neologismo1,
      'titulo': this.neologismo1.palabra,
      'autor': this.usuarios[0],
      'enlace': '',
      'cuerpo': ''
    };

    this.propuesta5 = {
      'neologismo': this.neologismo1,
      'titulo': this.neologismo1.palabra,
      'autor': this.usuarios[0],
      'enlace': '',
      'cuerpo': ''
    };

    this.propuestas = [
      this.propuesta1, this.propuesta2, this.propuesta3, this.propuesta4, this.propuesta5
    ];
  }

  obtenerPropuestas() {
    return this.propuestas;
  }
}
