import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()


export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        const idToken=Cookie.get('token');
        if(idToken){
            const clone=req.clone({
                headers:req.headers.set('Authorization',"Bearer "+idToken)
            });
            return next.handle(clone);
        }else{
            return next.handle(req);
        }
        
    }


}

