import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCommentsFormComponent } from './photo-comments-form.component';

describe('PhotoCommentsFormComponent', () => {
  let component: PhotoCommentsFormComponent;
  let fixture: ComponentFixture<PhotoCommentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCommentsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCommentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
