import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice.service';
import { AppSettings, baseUrl } from '../constant/constant';
import { CustomHttpService } from '../customHttp.service';

import {iUser} from "../models/index"

@Component({
  selector: 'dashboard',
  templateUrl: './dshboard.component.html',
  styleUrls: ['./dshboard.component.scss'],
})
export class DashBoardComponent implements OnInit {
  userList: iUser;
  isLoading: boolean = false;
  public isUserRole:string;
  constructor(private http: CustomHttpService, private authService: AuthService) {
    this.authService.currentUserRole.subscribe(val=>{
      this.isUserRole = val;
    })
  }

  get isAdmin(){
    if(this.isUserRole){
      return this.isUserRole
    }else{
      return this.isUserRole = "Anonymous User" 
    }
    
  }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    let url = baseUrl + AppSettings.endPoint_AllUsers();
    this.isLoading = true;
    this.http.get<iUser>(url).subscribe(
      (res) => {
        this.userList = res;
      },
      (error) => {
        console.error('Request failed with error');
        this.isLoading = false;
      },
      () => {
        //console.log('Request completed');
        this.isLoading = false;
      }
    );
  }
}
