import {Injectable} from '@angular/core';
import {ILogin, IRegister, IUser} from '../dtos';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private requestUrl = `https://alacrity.herokuapp.com/`;
  private currentUser: IUser = null;

  constructor(private http: HttpClient) {
  }

  public setCurrentUser(currentUser: IUser): void {
    this.currentUser = currentUser;
  }

  public isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  public getToken(): string {
    return this.currentUser ? this.currentUser.token : null;
  }

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
    return this.http.get<IUser>(this.requestUrl + `api/users/current`);
  }

  public getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.requestUrl + `api/users/all`);
  }
}
