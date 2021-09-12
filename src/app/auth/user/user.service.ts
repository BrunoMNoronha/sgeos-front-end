import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../Auth.service';
import { User } from './user';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserById(id: string) {
    return this.http.get(this.baseUrl + '/user/' + id).subscribe(
      (response) => this.authService.setLoggedInUser(response),
      (error) => console.log(error)
    );
  }

  // const user = this.userService.getUserById(id);

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.log(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // getUserById(id: number): Observable<User> {
  //   const url = `${this.baseUrl}/user/${id}`;
  //   return this.http.get<User>(url).pipe(
  //     tap((_) => console.log(`fetched user id=${id}`)),
  //     catchError(this.handleError<User>(`getUser id=${id}`))
  //   );
  // }
}
