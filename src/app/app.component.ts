import { Component, OnInit } from '@angular/core';

import { ILicense } from '@interfaces/.';
import { DataService } from '@services/.';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Dropdown';

	licenses: ILicense[];

	constructor(private request: DataService) {	}

	ngOnInit() {
		this.request.get()
			.subscribe(res => {
				this.licenses = res;
			});
	}

	update(license: ILicense): void {
		this.request.update(license)
			.subscribe(res => {
				this.licenses = res;
			});
	}
}
