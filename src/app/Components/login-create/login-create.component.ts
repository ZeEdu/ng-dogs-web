import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { retry, take } from 'rxjs/operators';
import { UserCreate } from 'src/app/Interfaces/user-create';
import { UserLogin } from 'src/app/Interfaces/user-login';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';
import { UserContextService } from 'src/app/Services/user-context.service';

@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
  styleUrls: ['./login-create.component.css'],
})
export class LoginCreateComponent implements OnInit {
  form: FormGroup;
  loading: Observable<boolean>;
  error: Observable<string>;

  get username(): string {
    return this.form.get('username').value;
  }
  get email(): string {
    return this.form.get('email').value;
  }
  get password(): string {
    return this.form.get('password').value;
  }

  constructor(
    private fb: FormBuilder,
    private apiHandle: ApiHandlerService,
    private userContext: UserContextService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
    this.loading = this.apiHandle.getLoading;
    this.error = this.apiHandle.getError;
  }

  handleSubmit() {
    this.apiHandle.setLoading = true;
    const userCreate: UserCreate = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    this.apiHandle.request('POST', '/api/user', userCreate).subscribe(
      () => {
        this.apiHandle.setLoading = false;
        const userLogin: UserLogin = {
          username: this.username,
          password: this.password,
        };
        this.userContext.login(userLogin);
      },
      (err) => {
        this.apiHandle.setError = err.error.message;
      }
    );
  }
}
