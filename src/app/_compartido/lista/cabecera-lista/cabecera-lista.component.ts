import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera-lista',
  templateUrl: './cabecera-lista.component.html',
  styleUrls: ['./cabecera-lista.component.sass']
})
export class CabeceraListaComponent implements OnInit {
  @Input() titulo;

  constructor() { }

  ngOnInit() {
  }

}
