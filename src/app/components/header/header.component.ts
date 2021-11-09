import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @ts-ignore
  isConnected: boolean;
  // @ts-ignore
  routerEventsSub: Subscription;
  // @ts-ignore
  tokenSub: Subscription;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {

    this.tokenSub = this.authService.token.subscribe(
      (token: string) => {
        if (token) {
          this.isConnected = true;
        } else {
          this.isConnected = false;
        }

      }
    );
  }
  onClickSignout() {
    this.authService
      .signout()
      .then(() => {
        this.router.navigateByUrl('login');

      });
  }
  ngOnDestroy() {
    this.tokenSub.unsubscribe();
    this.routerEventsSub.unsubscribe();
  }

}
