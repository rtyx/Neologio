import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acepcion',
  templateUrl: './acepcion.component.html',
  styleUrls: ['./acepcion.component.sass']
})
export class AcepcionComponent implements OnInit {
  @Input() acepcion;
  @Input() index;

  morfologia;
  tipo;
  definicion;

  constructor() { }

  ngOnInit() {
    this.morfologia = this.acepcion.morfologia;
    this.tipo = this.acepcion.tipo;
    this.definicion = this.acepcion.definicion;
  }

}
