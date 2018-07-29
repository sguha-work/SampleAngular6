import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentercontentComponent } from './centercontent.component';

describe('CentercontentComponent', () => {
  let component: CentercontentComponent;
  let fixture: ComponentFixture<CentercontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentercontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
