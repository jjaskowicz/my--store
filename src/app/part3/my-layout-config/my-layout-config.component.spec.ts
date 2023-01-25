import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLayoutConfigComponent } from './my-layout-config.component';

describe('MyLayoutConfigComponent', () => {
  let component: MyLayoutConfigComponent;
  let fixture: ComponentFixture<MyLayoutConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLayoutConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLayoutConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
