import { Acepcion } from './acepcion.modelo';
import { Usuario } from './usuario.modelo';

export interface Neologismo {
  palabra: string;
  autores: Usuario[];
  acepciones: Acepcion[];
  origen: string;
  id: string;
}
