import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.sass']
})
export class PalabraComponent implements OnInit {
  @Input() palabra;

  constructor() { }

  ngOnInit() {
  }

}
