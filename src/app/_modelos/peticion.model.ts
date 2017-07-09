import { Usuario } from './usuario.modelo';

export interface Peticion {
  titulo: string;
  autor: Usuario;
  imagen?: string;
  enlace?: string;
  cuerpo?: string;
  etiquetas?: string[];
  id?: string;
}
