import { Component, OnInit } from '@angular/core';
import { Propuesta } from '../../_modelos/propuesta.model';
import { PropuestasService } from '../../_servicios/propuestas.service';

@Component({
  selector: 'app-propuestas-recientes',
  templateUrl: './propuestas-recientes.component.html',
  styleUrls: ['./propuestas-recientes.component.sass']
})
export class PropuestasRecientesComponent implements OnInit {


  propuestas: Propuesta[];
  minilista;

  constructor(private propuestasService: PropuestasService) { }

  ngOnInit() {
    this.propuestas = this.propuestasService.obtenerPropuestas();
    this.minilista = {
      'titulo': 'Propuestas recientes',
      'filas': this.propuestas,
      'enlace': '/propuestas'
    };
  }

}
