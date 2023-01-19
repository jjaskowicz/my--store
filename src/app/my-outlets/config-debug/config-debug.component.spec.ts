import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigDebugComponent } from './config-debug.component';

describe('ConfigDebugComponent', () => {
  let component: ConfigDebugComponent;
  let fixture: ComponentFixture<ConfigDebugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigDebugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
