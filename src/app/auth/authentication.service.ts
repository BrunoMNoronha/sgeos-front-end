import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  authenticate(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/auth`;
    return this.httpClient.post(url, {
      username: username,
      password: password,
    });
  }
}
