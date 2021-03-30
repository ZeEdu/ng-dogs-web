import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiHandlerService } from '../Services/api-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userData = window.localStorage.getItem('user');
    if (userData) {
      return new Promise((resolve) => {
        if (userData) {
          this.apiHandler
            .request('POST', '/jwt-auth/v1/token/validate')
            .subscribe(
              () => resolve(true),
              () => {
                this.router.navigate(['/login']);
                resolve(false);
              }
            );
        }
      });
    }
    this.router.navigate(['/login']);
    return false;
  }
  constructor(private router: Router, private apiHandler: ApiHandlerService) {}
}
