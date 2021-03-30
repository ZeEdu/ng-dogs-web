import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLostPasswordComponent } from './login-lost-password.component';

describe('LoginLostPasswordComponent', () => {
  let component: LoginLostPasswordComponent;
  let fixture: ComponentFixture<LoginLostPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLostPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLostPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
