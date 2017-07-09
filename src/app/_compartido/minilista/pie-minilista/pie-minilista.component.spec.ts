import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieMinilistaComponent } from './pie-minilista.component';

describe('PieMinilistaComponent', () => {
  let component: PieMinilistaComponent;
  let fixture: ComponentFixture<PieMinilistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieMinilistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieMinilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
