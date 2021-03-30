import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatsGraphsComponent } from './user-stats-graphs.component';

describe('UserStatsGraphsComponent', () => {
  let component: UserStatsGraphsComponent;
  let fixture: ComponentFixture<UserStatsGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatsGraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatsGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
