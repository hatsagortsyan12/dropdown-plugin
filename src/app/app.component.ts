import { Component, OnInit } from '@angular/core';

import { ILicense } from '@interfaces/.';
import { DataService } from '@services/.';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	licenses: ILicense[];

	constructor(private request: DataService) {	}

	ngOnInit() {
		this.request.get()
			.subscribe(res => {
				this.licenses = res;
			});
	}

	update(licenses: ILicense[]): void {
		this.request.update(licenses)
			.subscribe(res => {
				this.licenses = res;
			});
	}

	getLicenses(offset: number): void {
		this.request.get()
			.subscribe(res => {
				this.licenses = res;
			});
	}
}
