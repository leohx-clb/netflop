import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;//Observable

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  signin(login: string, password: string): Promise<void | string> {

    return new Promise<void | string>(
      (res, rej) => {

        setTimeout(() => {

          if (login === 'Administrateur' && password === 'azerty') {
            this.token.next('azertyui');
            res();
          } else {
            rej('Les identifiants sont incorrects.');
          }

        }, 300);
      }
    );
  }

  signout(): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        this.token.next('');
        res();
      }
    );
  }
}
