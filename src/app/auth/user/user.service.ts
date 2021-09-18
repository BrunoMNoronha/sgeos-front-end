import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../Auth.service';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/user/' + id);
  }
}
