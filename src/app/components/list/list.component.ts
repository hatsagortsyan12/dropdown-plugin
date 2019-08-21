import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILicense } from '@interfaces/.';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	constructor() { }

	data: ILicense[];

	@Input('licenses')
	set license(licenses: ILicense[]) {
		this.data = licenses || [];
	}

	@Output() licenseUpdate: EventEmitter<ILicense> = new EventEmitter<ILicense>();

	ngOnInit() {
	}

	update(index: number, status: boolean): void {
		this.data[index].select = status;
		this.licenseUpdate.emit(this.data[index]);
	}

}
