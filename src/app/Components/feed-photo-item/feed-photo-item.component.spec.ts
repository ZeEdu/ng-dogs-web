import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPhotoItemComponent } from './feed-photo-item.component';

describe('FeedPhotoItemComponent', () => {
  let component: FeedPhotoItemComponent;
  let fixture: ComponentFixture<FeedPhotoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedPhotoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPhotoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
