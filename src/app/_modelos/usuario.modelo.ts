import { Propuesta } from './propuesta.model';
import { Peticion } from './peticion.model';

export interface Usuario {
  nombre: string;
  apellidos?: string[];
  email?: string;
  avatar?: string;
  contrasena?: string;
  propuestas?: Propuesta[];
  peticiones?: Peticion[];
  id?: string;
}
