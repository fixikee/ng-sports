import {Injectable} from '@angular/core';
import {ILogin, IRegister} from '../dtos';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public isAuthenticated(): boolean {
    return true;
  }

  public login(data: ILogin) {
    // TODO: Kazu write code here
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(true);
      }, 300);
    });
  }

  public register(data: IRegister) {
    // TODO: Kazu write code here
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(true);
      }, 300);
    });
  }

  public logout(): void {
    // TODO: Kazu write code here, change return type if needed
  }

  public getCurrentUser(): void {
    // TODO: Kazu write code here, change return type if needed

  }

  public getAllUsers(): void {
    // TODO: Kazu write code here, change return type if needed
  }
}
