import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './Auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.hasToken()) {
      const token = this.authService.getToken();
      const headers = new HttpHeaders().append(
        'Authorization',
        `Bearer ${token}`
      );
      request = request.clone({ headers });
    }
    return next.handle(request);
  }
}
