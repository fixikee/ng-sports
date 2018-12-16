import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  setToken(token) {
    localStorage.setItem('ng-sports', token);
  }

  getToken() {
    return localStorage.getItem('ng-sports');
  }

  clear() {
    localStorage.clear();
  }
}
