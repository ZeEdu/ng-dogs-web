import { Injectable, OnDestroy } from '@angular/core';
import { UserProfileComponent } from '../Components/user-profile/user-profile.component';
import { UserData } from '../Interfaces/user-data';
import { UserLogin } from '../Interfaces/user-login';
import { UserLoginResponse } from '../Interfaces/user-login-response';
import { ApiHandlerService } from './api-handler.service';
import { take, retry } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserInfo } from '../Interfaces/user-info';
import { GetUserResponse } from '../Interfaces/get-user-response';

@Injectable({
  providedIn: 'root',
})
export class UserContextService implements OnDestroy {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string | undefined;
  private userData = new BehaviorSubject<UserInfo>(null);
  private $subscription: Subscription;

  set setUserInfo(userInfo: UserInfo) {
    this.userData.next(userInfo);
  }

  get getUserInfo(): Observable<UserInfo> {
    return this.userData.asObservable();
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  constructor(private apiHandler: ApiHandlerService, private router: Router) {
    const userData = window.localStorage.getItem('user');
    if (userData) {
      let user = JSON.parse(userData);
      this.apiHandler.setLocalToken = true;
      this.$subscription = this.apiHandler
        .request('POST', '/jwt-auth/v1/token/validate')
        .subscribe(
          () => {
            this.token = user.token;
            this.apiHandler.setLoggedIn(true, this.token);
            this.loggedIn.next(true);
            this.getUser();
          },
          () => this.logout()
        );
    }
  }
  ngOnDestroy(): void {
    if (this.$subscription) {
      this.$subscription.unsubscribe();
      console.log('UserContextService OnDestroy acionado');
    }
  }

  logout() {
    console.log('Rodando logout');
    this.apiHandler.setLoggedIn(false);
    delete this.token;
    this.apiHandler.setLocalToken = false;

    this.loggedIn.next(false);
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

  public getUser() {
    this.apiHandler
      .request('GET', '/api/user')
      .pipe(take(1))
      .subscribe((response: GetUserResponse) => {
        this.setUserInfo = response;
      });
  }

  public login(userLogin: UserLogin) {
    this.apiHandler.setLoading = true;
    if (userLogin.username !== '' && userLogin.password !== '') {
      return this.apiHandler
        .request('POST', '/jwt-auth/v1/token', userLogin)
        .pipe(take(1))
        .subscribe(
          (response: UserLoginResponse) => {
            this.token = response.token;
            this.apiHandler.setLoggedIn(true, response.token);
            this.loggedIn.next(true);
            const stringfied = JSON.stringify({ token: response.token });
            window.localStorage.setItem('user', stringfied);
            this.getUser();
            this.router.navigateByUrl('/account');
          },
          () => (this.apiHandler.setError = 'Token Inválido'),
          () => (this.apiHandler.setLoading = false)
        );
    }
  }
}
