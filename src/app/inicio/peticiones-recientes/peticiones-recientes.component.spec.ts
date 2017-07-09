import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesRecientesComponent } from './peticiones-recientes.component';

describe('PeticionesRecientesComponent', () => {
  let component: PeticionesRecientesComponent;
  let fixture: ComponentFixture<PeticionesRecientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionesRecientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionesRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
