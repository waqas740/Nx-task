import { HttpRequest, HttpEvent, HttpHandlerFn } from '@angular/common/http';
import { environment } from 'apps/frontend/src/environments/environment.sandbox';
import { Observable } from 'rxjs';

export function BaseUrlInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const baseUrl = environment.API_URL;
  const fullUrl = baseUrl + req.url;
  const authReq = req.clone({ url: fullUrl });

  return next(authReq);
}
