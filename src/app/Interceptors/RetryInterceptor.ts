import { HttpInterceptor } from "@angular/common/http";

import { Injectable } from '@angular/core';
import {  HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, delay, catchError } from 'rxjs/operators';


// @Injectable()
// export class RetryInterceptor implements HttpInterceptor{
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(request).pipe(
//           retry(3), // Intenta la petición hasta 3 veces
//           delay(3000), // Agrega un retraso de 3 segundos entre intentos
//           catchError(this.handleErrors.bind(this))
//         );
//     }
// }