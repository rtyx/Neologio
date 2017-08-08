import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fila-lista',
  templateUrl: './fila-lista.component.html',
  styleUrls: ['./fila-lista.component.sass']
})
export class FilaListaComponent implements OnInit {
  @Input() titulo;
  @Input() autor;
  @Input() enlace;

  constructor() { }

  ngOnInit() {
  }

}
