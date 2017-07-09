import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestasRecientesComponent } from './propuestas-recientes.component';

describe('PropuestasRecientesComponent', () => {
  let component: PropuestasRecientesComponent;
  let fixture: ComponentFixture<PropuestasRecientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropuestasRecientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestasRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
