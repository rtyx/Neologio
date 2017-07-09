import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propuestas-recientes',
  templateUrl: './propuestas-recientes.component.html',
  styleUrls: ['./propuestas-recientes.component.sass']
})
export class PropuestasRecientesComponent implements OnInit {

  minilista = {
    'titulo': 'Propuestas recientes',
    'filas': [
      {
        'contenido': 'Miau miau miau miau',
        'autor': 'Mario',
        'enlace': '#'
      },
      {
        'contenido': 'Miau miau miau miau',
        'autor': 'Mario',
        'enlace': '#'
      },
      {
        'contenido': 'Miau miau miau miau',
        'autor': 'Mario',
        'enlace': '#'
      },
      {
        'contenido': 'Miau miau miau miau',
        'autor': 'Mario',
        'enlace': '#'
      },
      {
        'contenido': 'Miau miau miau miau',
        'autor': 'Mario',
        'enlace': '#'
      }
    ],
    'enlace': '#'
  };

  constructor() { }

  ngOnInit() {
  }

}
