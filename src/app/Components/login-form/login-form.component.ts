import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserLogin } from 'src/app/Interfaces/user-login';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';
import { UserContextService } from 'src/app/Services/user-context.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  loading: Observable<boolean>;
  error: Observable<string>;

  constructor(
    private userContext: UserContextService,
    private apiHandle: ApiHandlerService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.loading = this.apiHandle.getLoading;
  }

  async handleSubmit() {
    const userLogin: UserLogin = {
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value,
    };
    this.userContext.login(userLogin);
  }
}
