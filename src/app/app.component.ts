import { Component, OnInit } from '@angular/core';

import { ILicense, ILicenseData } from '@interfaces/.';
import { DataService } from '@services/.';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	licenses: ILicenseData;

	constructor(private request: DataService) {	}

	ngOnInit() {
		// this.request.get()
		// 	.subscribe(res => {
		// 		this.licenses = res;
		// 	});

		this.getLicenses({ limit: 10, offset: 0});
	}

	update(licenses: ILicense[]): void {
		this.request.update(licenses)
			.subscribe(res => {
				this.licenses = res;
			});
	}

	getLicenses(props: any): void {
		this.request.get()
			.subscribe(res => {
				const limit = props.limit || null
					, offset = props.offset || 0
					, resData = res;

				if (limit) {
					resData.data = resData.data.slice(offset, limit + offset);
				}

				this.licenses = resData;
			});
	}

	searchLicenses(term: string): void {
		this.request.get()
			.subscribe(res => {
				const searchData = [...res.data];
				searchData.forEach(item => {
					item.show = item.title.toLowerCase().includes(term.toLowerCase());
			});
			this.licenses.data = searchData;
			this.licenses = { ...this.licenses };
		});
	}
}
