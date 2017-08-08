import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {
  @Input() titulo;
  @Input() filas;
  @Input() enlace;

  constructor() { }

  ngOnInit() {
  }

}
