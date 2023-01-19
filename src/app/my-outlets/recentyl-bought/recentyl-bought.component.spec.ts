import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentylBoughtComponent } from './recentyl-bought.component';

describe('RecentylBoughtComponent', () => {
  let component: RecentylBoughtComponent;
  let fixture: ComponentFixture<RecentylBoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentylBoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentylBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
