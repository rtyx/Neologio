import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-origen',
  templateUrl: './origen.component.html',
  styleUrls: ['./origen.component.sass']
})
export class OrigenComponent implements OnInit {
  @Input() origen;

  constructor() { }

  ngOnInit() {
  }

}
