import { Component, OnInit } from '@angular/core';
import {
  Router,
} from '@angular/router';
import { AuthService } from '../authservice.service';
import { iUser, Role } from '../models';
import { UtilityService } from '../utility.service';
@Component({
  selector: 'prime-header',
  templateUrl: './prime-header.component.html',
  styleUrls: ['./prime-header.component.scss'],
})
export class PrimeHeaderComponent implements OnInit {
  public isLogout: boolean = false;
  public isUserRole:string;
  constructor(private authService: AuthService, private router: Router, private utilityService: UtilityService) {
    this.authService.currentUserRole.subscribe(val=>{
      this.isUserRole = val;
    })
  }

  ngOnInit() {
    this.isLoggedIn;
  }

  logout(){
    this.authService.logout()
  }

  get isAdmin(){
    return this.isUserRole === Role.Admin 
  }


  get isLoggedIn(){
    if(localStorage.getItem('isUserLoggedIn')){
      return true;
    }else{
      this.authService.isLoggedIn.subscribe(res=>{
        return res;
      })
    }
  }
}
