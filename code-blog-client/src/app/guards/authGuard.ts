import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  _canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.authService.checkUserIsAuthorised().subscribe({
      next: (data: boolean) => {
        console.log(data);
        if (data) {
          return true;
        }
        this.router.navigateByUrl('admin/login');
      },
    });
    // console.log(authorised);
    // if (authorised) {
    //   return true;
    // }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const decodedToken = this.getDecodeAccessToken(
      localStorage.getItem('token')
    );

    if (decodedToken !== null) {
      console.log(decodedToken);
      console.log(decodedToken.exp - Date.now());
      if (decodedToken) {
        return true;
      }
    }
    this.router.navigateByUrl('admin/login');
  }

  getDecodeAccessToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      return null;
    }
  }
}
