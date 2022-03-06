import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '@core/authentication/helpers/token.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.tokenService.haveToken()) {
      const token = this.tokenService.getToken();
      const headers = new HttpHeaders().append('x-access-token', token);
      request = request.clone({ headers });
    }

    return next.handle(request);
  }
}
