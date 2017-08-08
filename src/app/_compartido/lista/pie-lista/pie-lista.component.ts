import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-lista',
  templateUrl: './pie-lista.component.html',
  styleUrls: ['./pie-lista.component.sass']
})
export class PieListaComponent implements OnInit {
  @Input() enlace;

  constructor() { }

  ngOnInit() {
  }

}
