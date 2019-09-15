import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
   private readonly FAKE_TOKEN = 'abcdefg';
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('intercepting and adding token');
      // We retrieve the token, if any
      const token = this.FAKE_TOKEN;
      let newHeaders = req.headers;
      if (token) {
         // If we have a token, we append it to our new headers
         newHeaders = newHeaders.append('authtoken', token);
      }
      // Finally we have to clone our request with our new headers
      // This is required because HttpRequests are immutable
      const authReq = req.clone({ headers: newHeaders });
      // Then we return an Observable that will run the request
      // or pass it to the next interceptor if any
      return next.handle(authReq);
   }
}