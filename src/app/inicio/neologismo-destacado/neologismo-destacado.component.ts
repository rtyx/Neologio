import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neologismo-destacado',
  templateUrl: './neologismo-destacado.component.html',
  styleUrls: ['./neologismo-destacado.component.sass']
})
export class NeologismoDestacadoComponent implements OnInit {
  neologismo = {
    'palabra': 'Pianostrar',
    'origen': 'Del lat. piano',
    'acepciones': [
      {
        'morfologia': 'v.',
        'tipo': 'Ling',
        'definicion': 'Dícese del acto de arrojar un piano por la ventana'
      }
    ],
    'autores': [
      'Rafael Toledano Illán'
    ]
  };

  constructor() { }

  ngOnInit() {
    console.log(this.neologismo)
  }

}
