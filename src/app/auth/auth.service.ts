import {Injectable} from '@angular/core';
import {ILogin, IRegister} from '../dtos';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public isLoggedIn(): boolean {
    return true;
  }

  public login(data: ILogin) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(true);
      }, 300);
    });
  }

  public register(data: IRegister) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(true);
      }, 300);
    });
  }

  public logout() {
  }

  public getCurrentUser() {

  }

  public getAllUsers() {
  }
}
