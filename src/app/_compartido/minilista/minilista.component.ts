import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-minilista',
  templateUrl: './minilista.component.html',
  styleUrls: ['./minilista.component.sass']
})
export class MinilistaComponent implements OnInit {
  @Input() titulo;
  @Input() filas;
  @Input() enlace;

  constructor() { }

  ngOnInit() {
    this.filas = this.filas.slice(0, 5)
  }

}
