import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../services/local-storage.service';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(
        @Inject('BASE_URL') private baseUrl: string,
        private localStorageService: LocalStorageService
        ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.localStorageService.token;
        // req.headers.set('auth-token', token)
        if (token) {
            request = request.clone({
                url: `${this.baseUrl}/${request.url}`,
                setHeaders: {
                    'auth-token': token
                }
            });
        } else if (!token) {
            request = request.clone({
                url: `${this.baseUrl}/${request.url}`
            });
        }

        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errMsg = '';
                    // Client Side Error
                    if (error.error instanceof ErrorEvent) {
                        errMsg = `Error: ${error.error.message}`;
                    } else if (error.error instanceof Object) {
                        errMsg = `Error: ${error.error.message}`;
                    } else {  // Server Side Error
                        errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                    }

                    console.log(error);

                    if (!environment.production) {
                        console.log(errMsg);
                    }

                    // alert(errMsg);
                    // this.alert.error(errMsg);

                    return throwError(errMsg);
                })
            );
    }
}
