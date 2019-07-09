import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.authenticationService.currentUserValue;
    if (user && user.token) {
      const updatedRequest = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + user.token
        }
      });
      // logging the updated Parameters to browser's console
      console.log('Before making api call : ', updatedRequest);
    }

    return next.handle(request).pipe(
      tap(
        event => {
          // logging the http response to browser's console in case of a success
          if (event instanceof HttpResponse) {
            console.log('api call success :', event);
          }
        },
        error => {
          // logging the http response to browser's console in case of a failuer
          if (event instanceof HttpResponse) {
            console.log('api call error :', event);
          }
        }
      )
    );
  }
}
