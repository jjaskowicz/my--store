import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsellingComponent } from './upselling.component';

describe('UpsellingComponent', () => {
  let component: UpsellingComponent;
  let fixture: ComponentFixture<UpsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
