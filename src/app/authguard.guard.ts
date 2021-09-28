import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './authservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    let url: string = state.url;
    let isLoggedIn: string = localStorage.getItem('isUserLoggedIn');
    if(!isLoggedIn){
      this.router.navigate(['/login']);
      return false;
    }
    // console.log("state " + state.url)
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return true;
  }
  // checkLogin(url: string): true | UrlTree {
  //   let val: string = localStorage.getItem('isUserLoggedIn');
  //   if (val != null && val == 'true') {
  //     this.router.parseUrl('/home');
  //     return true;
  //   } else {
  //     this.router.parseUrl('/login');
  //   }
  // }
}
