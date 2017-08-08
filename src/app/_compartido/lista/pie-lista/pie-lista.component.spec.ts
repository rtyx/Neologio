import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieListaComponent } from './pie-lista.component';

describe('PieListaComponent', () => {
  let component: PieListaComponent;
  let fixture: ComponentFixture<PieListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
