import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentylViewedComponent } from './recentyl-viewed.component';

describe('RecentylViewedComponent', () => {
  let component: RecentylViewedComponent;
  let fixture: ComponentFixture<RecentylViewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentylViewedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentylViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
