import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { LicenseService } from '@services/.';
import { ILicense } from '@interfaces/.';

@Injectable()
export class LicenseProvider implements HttpInterceptor {

	constructor(private licenseService: LicenseService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const { url, method, headers, body } = request;

		const that = this;

		if (!isLoggedIn()) {
			return unauthorized();
		}

		return of(null)
			.pipe(mergeMap(handleRoute))
			.pipe(materialize())
			.pipe(delay(500))
			.pipe(dematerialize());

		function handleRoute() {
			switch (true) {
				case url.endsWith('/licenses') && method === 'PUT':
					return update();
				case url.endsWith('/licenses') && method === 'GET':
					return get();
				default:
					return next.handle(request);
			}
		}


		function update() {
			const license: ILicense[] = body;
			return ok(that.licenseService.update(license));
		}

		function get() {
			return ok(that.licenseService.get());
		}

		function ok(body?) {
			return of(new HttpResponse({ status: 200, body }));
		}

		function unauthorized() {
			return throwError({ status: 401, error: { message: 'Unauthorized' } });
		}

		function error(message) {
			return throwError({ error: { message } });
		}

		function isLoggedIn() {
			return headers.get('Authorization') === 'Bearer fake-jwt-token';
		}
	}

}

export const fakeBackendProvider = {
	provide: HTTP_INTERCEPTORS,
	useClass: LicenseProvider,
	multi: true
};
