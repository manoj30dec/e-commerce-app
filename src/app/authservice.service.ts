import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Role, Password, iUser } from './models';
import { UtilityService } from './utility.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggedIn: boolean = false;
  isLoggedIn = new Subject<boolean>();
  currentUserRole: BehaviorSubject<string>;

  constructor(private utilityService: UtilityService) {
    this.currentUserRole = new BehaviorSubject<string>(
      localStorage.getItem('currentRole')
    );
  }
  login(userName: string, password: string): Observable<any> {
    this.utilityService.lowerCase(userName);
    this.utilityService.lowerCase(password);
    if (
      userName == this.utilityService.lowerCase(Role.Admin) &&
      password == this.utilityService.lowerCase(Password.Admin)
    ) {
      this.isUserLoggedIn = true;
      localStorage.setItem(
        'isUserLoggedIn',
        this.isUserLoggedIn ? 'true' : 'false'
      );
      this.isUserLoggedIn
        ? this.isLoggedIn.next(true)
        : this.isLoggedIn.next(false);
      localStorage.setItem('currentRole', Role.Admin);
      this.currentUserRole.next(localStorage.getItem('currentRole'));
      return of(this.isUserLoggedIn).pipe(
        delay(1000),
        tap((val) => {
          console.log('Is User Authentication is successful: ' + val);
        })
      );
    } else {
      this.isUserLoggedIn = true;
      localStorage.setItem(
        'isUserLoggedIn',
        this.isUserLoggedIn ? 'true' : 'false'
      );
      this.isUserLoggedIn
        ? this.isLoggedIn.next(true)
        : this.isLoggedIn.next(false);
      localStorage.setItem('currentRole', Role.User);
      this.currentUserRole.next(localStorage.getItem('currentRole'));
      return of(this.isUserLoggedIn).pipe(
        delay(1000),
        tap((val) => {
          console.log('Is User Authentication is successful: ' + val);
        })
      );
    }
  }

  logout(): void {
    this.isUserLoggedIn = false;
    this.isLoggedIn.next(false);
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('currentRole');
  }
}
