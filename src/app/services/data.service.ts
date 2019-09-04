import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { ILicense, ILicenseData } from '@interfaces/.';

@Injectable({ providedIn: 'root' })
export class DataService {
	constructor(private http: HttpClient) { }

	get(term: string = '') {
		return this.http.get<ILicenseData>(`${environment.baseURL}/${environment.api.licenses}`);
	}

	update(license: ILicense[]) {
		return this.http.put<ILicenseData>(`${environment.baseURL}/${environment.api.licenses}`, license);
	}

}
