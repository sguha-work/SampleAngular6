import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginHeaderComponent } from './after-login-header.component';

describe('AfterLoginHeaderComponent', () => {
  let component: AfterLoginHeaderComponent;
  let fixture: ComponentFixture<AfterLoginHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterLoginHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterLoginHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
