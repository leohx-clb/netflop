import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errMsg: string|undefined;

  password: string;
  login: string;

  constructor(private authService: AuthService,
              private router: Router) {
    this.login = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  onSubmitAuthForm() {

    this.authService
      .signin(this.login, this.password)
      .then(() => {
        this.router.navigateByUrl('home');
      })
      .catch((errMsg: string) => {
        this.errMsg = errMsg;
      });

  }

}
