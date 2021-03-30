import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotoPostComponent } from './user-photo-post.component';

describe('UserPhotoPostComponent', () => {
  let component: UserPhotoPostComponent;
  let fixture: ComponentFixture<UserPhotoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPhotoPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhotoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
