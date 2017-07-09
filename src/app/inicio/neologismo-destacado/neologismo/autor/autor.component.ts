import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.sass']
})
export class AutorComponent implements OnInit {
  @Input() autor;

  constructor() { }

  ngOnInit() {
  }

}
