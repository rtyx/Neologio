import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-minilista',
  templateUrl: './pie-minilista.component.html',
  styleUrls: ['./pie-minilista.component.sass']
})
export class PieMinilistaComponent implements OnInit {
  @Input() enlace;

  constructor() { }

  ngOnInit() {
  }

}
