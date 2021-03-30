import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPhotosComponent } from './feed-photos.component';

describe('FeedPhotosComponent', () => {
  let component: FeedPhotosComponent;
  let fixture: ComponentFixture<FeedPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
