import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaMinilistaComponent } from './fila-minilista.component';

describe('FilaMinilistaComponent', () => {
  let component: FilaMinilistaComponent;
  let fixture: ComponentFixture<FilaMinilistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaMinilistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaMinilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
