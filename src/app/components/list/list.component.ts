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
	term: String;
	offset: number = 0;
	limit: number = 10;

	@Input('licenses')
	set license(licenses: ILicense[]) {
		this.data = licenses || [];
	}
	@Input() lazyLoad: boolean;

	@Output() licenseUpdate: EventEmitter<ILicense[]> = new EventEmitter<ILicense[]>();
	@Output() getLicenses: EventEmitter<number> = new EventEmitter<number>();

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
			this.data.forEach(item => {
				if (!item.title.toLowerCase().includes(this.term.toLowerCase())) {
					item.show = false;
				} else {
					item.show = true;
				}
			});
		} else {
			this.data.forEach(item => {
				item.show = true;
			});
		}
	}

	public scrollHandler(event): void {
		const calcs = (event.srcElement.offsetHeight + event.srcElement.scrollTop) >= event.srcElement.scrollHeight;
		if (this.lazyLoad && calcs) {
			this.getLicenses.emit(this.offset += this.limit);
		}
	}

}
