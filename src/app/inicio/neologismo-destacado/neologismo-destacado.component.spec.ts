import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeologismoDestacadoComponent } from './neologismo-destacado.component';

describe('NeologismoDestacadoComponent', () => {
  let component: NeologismoDestacadoComponent;
  let fixture: ComponentFixture<NeologismoDestacadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeologismoDestacadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeologismoDestacadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
