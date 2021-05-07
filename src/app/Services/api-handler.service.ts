import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { retry, take } from 'rxjs/operators';
import { API_URL } from '../../environments/environment';
import { UserData } from '../Interfaces/user-data';
import { UserLogin } from '../Interfaces/user-login';
import { UserLoginResponse } from '../Interfaces/user-login-response';

const baseUrl = 'https://dogsapi.origamid.dev/json';
// const baseUrl = 'http://localhost:10003/json';

@Injectable({
  providedIn: 'root',
})
export class ApiHandlerService {
  private loggedIn = false;
  private token: string;
  private loading = new BehaviorSubject<boolean>(false);
  private error = new BehaviorSubject<string>('');
  private localToken = false;

  constructor(private http: HttpClient) {}

  get getLoading() {
    return this.loading.asObservable();
  }

  set setLocalToken(state: boolean) {
    this.localToken = state;
  }

  get getLocalToken() {
    return this.localToken;
  }

  set setLoading(state: boolean) {
    this.loading.next(state);
  }

  set setError(errorMessage: string) {
    this.error.next(errorMessage);
  }

  get getError() {
    return this.error.asObservable();
  }

  setLoggedIn(loggedIn: boolean, token?: string) {
    this.loggedIn = loggedIn;
    this.token = token;
  }

  getUser(token: string) {
    return this.http.get<UserData>(API_URL + '/api/user', {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
    });
  }

  request(method: string, route: string, data?: any) {
    // if (method === 'GET') {
    //   return this.get(route, data);
    // }

    let header: { Authorization: string };

    if (this.loggedIn) {
      header = { Authorization: `Bearer ${this.token}` };
    } else if (this.localToken) {
      const userData = window.localStorage.getItem('user');
      const parserData = JSON.parse(userData);
      header = { Authorization: `Bearer ${parserData.token}` };
    } else {
      header = undefined;
    }
    return this.http.request(method, baseUrl + route, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: header,
    });
  }

  get(route: string, data?: any) {
    const header = this.loggedIn
      ? { Authorization: `Bearer ${this.token}` }
      : undefined;

    let params = new HttpParams();
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach((key) => {
        params = params.set(key, data[key]);
      });
    }
    return this.http
      .get(baseUrl + route, {
        responseType: 'json',
        headers: header,
        params,
      })
      .pipe(take(1), retry(2));
  }
}
