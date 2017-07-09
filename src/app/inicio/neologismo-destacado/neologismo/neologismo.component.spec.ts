import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeologismoComponent } from './neologismo.component';

describe('NeologismoComponent', () => {
  let component: NeologismoComponent;
  let fixture: ComponentFixture<NeologismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeologismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeologismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
