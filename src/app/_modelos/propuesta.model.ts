import { Usuario } from './usuario.modelo';
import { Neologismo } from './neologismo.modelo';

export interface Propuesta {
  titulo?: string;
  autor: Usuario;
  neologismo: Neologismo;
  imagen?: string;
  enlace?: string;
  cuerpo?: string;
  etiquetas?: string[];
  id?: string;
}
