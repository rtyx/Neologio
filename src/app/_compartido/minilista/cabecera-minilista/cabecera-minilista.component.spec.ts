import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraMinilistaComponent } from './cabecera-minilista.component';

describe('CabeceraMinilistaComponent', () => {
  let component: CabeceraMinilistaComponent;
  let fixture: ComponentFixture<CabeceraMinilistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraMinilistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraMinilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
