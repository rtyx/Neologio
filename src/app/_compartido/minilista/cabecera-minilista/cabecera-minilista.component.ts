import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera-minilista',
  templateUrl: './cabecera-minilista.component.html',
  styleUrls: ['./cabecera-minilista.component.sass']
})
export class CabeceraMinilistaComponent implements OnInit {
  @Input() titulo;

  constructor() { }

  ngOnInit() {
  }

}
