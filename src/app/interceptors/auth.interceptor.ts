import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'Basic ' + btoa('sys0b1_6:RT3-jnr-vjd-4ed')
    return next.handle(
      token
        ? req.clone({
          headers: req.headers
            .append('Authorization', token)
        })
        : req
    );
  }
}
