import {Injectable} from '@angular/core';
import {ILogin, IRegister, IUser} from '../dtos';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const headers = new HttpHeaders()
  .set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private requestUrl = `https://alacrity.herokuapp.com/`;
  private currentUser: IUser = null;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  public setCurrentUser(currentUser: IUser): void {
    this.currentUser = currentUser;
    this.headers = this.headers.append('x-auth', this.currentUser.token);
  }

  public isLoggedIn(): boolean {
    return this.currentUser !== null;
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


  public login(data: ILogin): Observable<IUser> {
    return this.http.post<IUser>(this.requestUrl + `api/users/login`, data);
  }

  public register(data: IRegister): Observable<IUser> {
    return this.http.post<IUser>(this.requestUrl + `api/users/new`, data);
  }

  // public logout(): Observable<IUser> {
  //   return this.http.post<IUser>(this.requestUrl + `api/users/logout`, this.currentUser);
  // }

  public getCurrentUser(): Observable<IUser> {
    return this.http.get<IUser>(this.requestUrl + `api/users/current`, {headers: this.headers});
  }

  public getAllUsers(): Observable<IUser[]> {
    console.log(this.headers);
    return this.http.get<IUser[]>(this.requestUrl + `api/users/all`, {headers: this.headers});
  }
}
