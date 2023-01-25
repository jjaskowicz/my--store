import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLayoutConfig2Component } from './my-layout-config2.component';

describe('MyLayoutConfig2Component', () => {
  let component: MyLayoutConfig2Component;
  let fixture: ComponentFixture<MyLayoutConfig2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLayoutConfig2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLayoutConfig2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
