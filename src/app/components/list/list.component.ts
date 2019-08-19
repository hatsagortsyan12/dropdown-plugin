import { Component, OnInit, Input } from '@angular/core';
import { ILicense } from '@interfaces/.';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	constructor() { }

	data: ILicense[];
	selected: ILicense[];

	@Input('licenses')
	set license(licenses: ILicense[]) {
		this.data = licenses;
	}

	ngOnInit() {
	}

}
