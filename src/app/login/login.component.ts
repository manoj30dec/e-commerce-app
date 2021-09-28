import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomHttpService } from '../customHttp.service';
import { AppSettings } from '../constant/constant';
import { AuthService } from '../authservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  formData: FormGroup;
  returnUrl: string;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.formData = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;
    console.log('Login page: ' + this.userName);
    console.log('Login page: ' + this.password);
    this.authService.login(this.userName, this.password).subscribe((data) => {
      console.log('Is Login Success: ' + data);
      // if (data) this.router.navigate(['/']);
      if (data) this.router.navigate([this.returnUrl]);
    });
  }
}
