import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinilistaComponent } from './minilista.component';

describe('MinilistaComponent', () => {
  let component: MinilistaComponent;
  let fixture: ComponentFixture<MinilistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinilistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
