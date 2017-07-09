import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraInicioComponent } from './cabecera-inicio.component';

describe('CabeceraInicioComponent', () => {
  let component: CabeceraInicioComponent;
  let fixture: ComponentFixture<CabeceraInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
