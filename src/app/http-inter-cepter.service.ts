import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpInterCepterService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //do whatever you want with the HttpRequest
    console.log(req)
    // req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }
    console.log(
      "get header " + 
      req.headers.get('Accept')
    )
    
    return next.handle(req);
  }
}
