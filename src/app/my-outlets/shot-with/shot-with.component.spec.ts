import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotWithComponent } from './shot-with.component';

describe('ShotWithComponent', () => {
  let component: ShotWithComponent;
  let fixture: ComponentFixture<ShotWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShotWithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
