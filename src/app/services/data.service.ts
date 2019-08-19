import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { ILicense } from '@interfaces/.';

@Injectable({ providedIn: 'root' })
export class DataService {
	constructor(private http: HttpClient) { }

	get() {
		return this.http.get<ILicense[]>(`${environment.baseURL}/${environment.api.licenses}`);
	}

	update(license: ILicense) {
		return this.http.put<ILicense[]>(`${environment.baseURL}/${environment.api.licenses}`, license);
	}
}
