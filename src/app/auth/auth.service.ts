import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const KEY = 'token';
const LOGGEDINUSERNAME = 'loggedInUserName';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  authenticate(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/auth`;
    return this.httpClient.post(url, {
      username: username,
      password: password,
    });
  }

  setToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  getToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  destroyToken() {
    localStorage.removeItem(KEY);
  }

  hasToken() {
    return !!this.getToken();
  }

  setLoggedInUser(user: any) {
    localStorage.setItem(LOGGEDINUSERNAME, user.username);
  }

  getLoggedInUser() {
    return localStorage.getItem(LOGGEDINUSERNAME) ?? '';
  }

  destroyLoggedInUser() {
    localStorage.removeItem(LOGGEDINUSERNAME);
  }

  hasLoggedInUser() {
    return !!this.getLoggedInUser();
  }

  logout() {
    localStorage.removeItem(KEY);
    localStorage.removeItem(LOGGEDINUSERNAME);
  }
}
