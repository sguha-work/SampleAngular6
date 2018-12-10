import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mycomponent1Component } from './mycomponent1.component';

describe('Mycomponent1Component', () => {
  let component: Mycomponent1Component;
  let fixture: ComponentFixture<Mycomponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mycomponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mycomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
