import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcepcionComponent } from './acepcion.component';

describe('AcepcionComponent', () => {
  let component: AcepcionComponent;
  let fixture: ComponentFixture<AcepcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcepcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
