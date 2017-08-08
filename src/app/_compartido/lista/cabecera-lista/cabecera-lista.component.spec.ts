import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraListaComponent } from './cabecera-lista.component';

describe('CabeceraListaComponent', () => {
  let component: CabeceraListaComponent;
  let fixture: ComponentFixture<CabeceraListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
