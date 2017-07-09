import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-neologismo',
  templateUrl: './neologismo.component.html',
  styleUrls: ['./neologismo.component.sass']
})
export class NeologismoComponent implements OnInit {
  @Input() neologismo;

  palabra;
  origen;
  acepciones;
  autores;

  constructor() { }

  ngOnInit() {
    this.palabra = this.neologismo.palabra;
    this.origen = this.neologismo.origen;
    this.acepciones = this.neologismo.acepciones;
    this.autores = this.neologismo.autores;
  }

}
