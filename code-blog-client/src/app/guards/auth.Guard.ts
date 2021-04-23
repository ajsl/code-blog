import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // checkAuthService(): any {
  //   return this.authService.checkUserIsAuthorised().subscribe({
  //     next: (auth) => {
  //       return auth;
  //     },
  //   });
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(this.authService.loggedIn());
    if (this.authService.loggedIn()) {
      return true;
    }
    this.router.navigateByUrl('/admin/login');

    return false;
  }

  // _canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  // const decodedToken = this.getDecodeAccessToken(
  //   localStorage.getItem('token')
  // );

  // if (decodedToken !== null) {
  //   console.log(decodedToken);
  //   console.log(decodedToken.exp - Date.now());
  //   if (decodedToken) {
  //     return true;
  //   }
  // }
  // this.router.navigateByUrl('admin/login');
  // return true;
  // }

  // getDecodeAccessToken(token: string): any {
  //   try {
  //     return jwtDecode(token);
  //   } catch (error) {
  //     return null;
  //   }
  // }
}
