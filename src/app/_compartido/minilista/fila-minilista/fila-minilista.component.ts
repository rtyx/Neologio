import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fila-minilista',
  templateUrl: './fila-minilista.component.html',
  styleUrls: ['./fila-minilista.component.sass']
})
export class FilaMinilistaComponent implements OnInit {
  @Input() titulo;
  @Input() autor;
  @Input() enlace;

  constructor() { }

  ngOnInit() {
  }

}
