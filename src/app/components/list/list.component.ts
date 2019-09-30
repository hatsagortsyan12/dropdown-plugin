import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILicense, ILicenseData } from '@interfaces/.';
import { _ } from 'lodash';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	constructor() { }

	data: ILicense[] = [];
	select: ILicense[];
	term: string = '';
	offset: number = 0;

	@Input() lazyLoad: boolean;
	@Input() limit: number = 20;
	@Input('licenses')
	set license(licenses: ILicenseData) {
		this._init(licenses);
	}

	@Output() licenseUpdate: EventEmitter<ILicense[]> = new EventEmitter<ILicense[]>();
	@Output() getLicenses: EventEmitter<object> = new EventEmitter<object>();
	@Output() searchLicenses: EventEmitter<string> = new EventEmitter<string>();

	ngOnInit() {
	}

	private _init(licenses: ILicenseData): void {
		if (licenses) {
			if (this.data.length) {
				this.data.push(...licenses.data);
				this.data = [ ...this.data ];
			} else {
				this.data = licenses.data;
			}
		}
		this.select = licenses ? licenses.select : [];
	}

	public update(index: number): void {
		this.data[index].select = !this.data[index].select;
	}

	public save(): void {
		this.licenseUpdate.emit(this.select);
	}

	public search(): void {
		if (this.term) {
			if (this.lazyLoad) {
				this.searchLicenses.emit(this.term);
			} else {
				this.data.forEach(item => {
					item.show = item.title.toLowerCase().includes(this.term.toLowerCase());
				});
			}
		} else {
			this.data.forEach(item => {
				item.show = true;
			});
		}
	}

	public scrollHandler(event): void {
		const calcs = (event.srcElement.offsetHeight + event.srcElement.scrollTop) >= event.srcElement.scrollHeight;
		if (this.lazyLoad && calcs) {
			this.getLicenses.emit({ limit: this.limit, offset: this.offset += this.limit });
		}
	}

}
