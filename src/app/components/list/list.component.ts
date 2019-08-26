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
	sourceData: ILicense[];
	term: String;

	@Input('licenses')
	set license(licenses: ILicense[]) {
		this.sourceData = this.data = licenses || [];
	}

	@Output() licenseUpdate: EventEmitter<ILicense[]> = new EventEmitter<ILicense[]>();

	ngOnInit() {
	}

	update(index: number): void {
		this.data[index].select = !this.data[index].select;
	}

	save(): void {
		this.licenseUpdate.emit(this.data);
	}

	search(): void {
		if (this.term) {
			this.data = this.data.filter(item => {
				return item.title.toLowerCase().includes(this.term.toLowerCase());
			});
		} else {
			this.data = [ ...this.sourceData ];
		}
	}

}
