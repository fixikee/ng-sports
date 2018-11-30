import {Injectable} from '@angular/core';
import {ILogin, IRegister, IUser} from '../dtos';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const headers = new HttpHeaders()
  .set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: IUser;

  constructor(private http: HttpClient) {
  }

  public isLoggedIn(): boolean {
    return true;
  }

  public getToken(): string {
    return 'abc';
  }

  /*

    this.http.put('/api/users/new',
  {
    'email': 'example@at.com',
    'displayName': 'johndoe',
    'password': 'password'
  },
  {headers})
  (resp: IUser) => this.currentUser = {
      email: resp.email,
      displayName:  resp.displayName
    });


    */


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
