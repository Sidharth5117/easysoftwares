import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbystatusComponent } from './viewbystatus.component';

describe('ViewbystatusComponent', () => {
  let component: ViewbystatusComponent;
  let fixture: ComponentFixture<ViewbystatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbystatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
