import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/do';

export class LoggingInterceppor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req).do(
            event=>{
                console.log('?: ', event);
            }
        );
    }
}