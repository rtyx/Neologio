import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaListaComponent } from './fila-lista.component';

describe('FilaListaComponent', () => {
  let component: FilaListaComponent;
  let fixture: ComponentFixture<FilaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
