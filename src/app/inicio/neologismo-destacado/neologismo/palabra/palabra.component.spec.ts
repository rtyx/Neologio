import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabraComponent } from './palabra.component';

describe('PalabraComponent', () => {
  let component: PalabraComponent;
  let fixture: ComponentFixture<PalabraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalabraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
