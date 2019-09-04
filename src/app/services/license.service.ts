import { Injectable } from '@angular/core';

import { ILicense, ILicenseData } from '@interfaces/.';
import _ from 'lodash';

@Injectable({
	providedIn: 'root'
})
export class LicenseService {

	public licenses: Array<ILicense> = [
		{
			id: 3,
			title: 'North Dakota State Bison',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/3/picture/6s2br3.png',
			show: true,
			select: false
		},
		{
			id: 5,
			title: 'Grand Valley State Lakers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/5/picture/eg52hv.png',
			show: true,
			select: false
		},
		{
			id: 6,
			title: 'Baylor Bears',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/6/picture/cc1cxf.png',
			show: true,
			select: false
		},
		{
			id: 7,
			title: 'Kansas State Wildcats',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/7/picture/531s17.png',
			show: true,
			select: false
		},
		{
			id: 8,
			title: 'Houston Cougars',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/8/picture/f8xu8n.png',
			show: true,
			select: false
		},
		{
			id: 9,
			title: 'Mississippi State Bulldogs',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/9/picture/kujmhk.png',
			show: true,
			select: false
		},
		{
			id: 10,
			title: 'Southern Miss Golden Eagles',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/10/picture/atg1zx.png',
			show: true,
			select: false
		},
		{
			id: 11,
			title: 'Wichita State Shockers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/11/picture/wqt9hx.png',
			show: true,
			select: false
		},
		{
			id: 12,
			title: 'Kentucky Wildcats',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/12/picture/aj3y2b.png',
			show: true,
			select: false
		},
		{
			id: 14,
			title: 'Hawaii Rainbow Warriors',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/14/picture/tyf6hf.png',
			show: true,
			select: false
		},
		{
			id: 17,
			title: 'Memphis Tigers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/17/picture/3h5jsh.png',
			show: true,
			select: false
		},
		{
			id: 18,
			title: 'Oregon Ducks',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/18/picture/b9sndn.png',
			show: true,
			select: false
		},
		{
			id: 19,
			title: 'Iowa State Cyclones',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/19/picture/76q69p.png',
			show: true,
			select: false
		},
		{
			id: 20,
			title: 'Indiana Hoosiers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/20/picture/ktj6ac.png',
			show: true,
			select: false
		},
		{
			id: 21,
			title: 'LSU Tigers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/21/picture/7cxuud.png',
			show: true,
			select: false
		},
		{
			id: 22,
			title: 'Michigan State Spartans',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/22/picture/fgkz7v.png',
			show: true,
			select: false
		},
		{
			id: 23,
			title: 'Miami Hurricanes',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/23/picture/42yypm.png',
			show: true,
			select: false
		},
		{
			id: 24,
			title: 'South Carolina Gamecocks',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/24/picture/k7mn3p.png',
			show: true,
			select: false
		},
		{
			id: 25,
			title: 'Tennessee Volunteers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/25/picture/13hajx.png',
			show: true,
			select: false
		},
		{
			id: 43,
			title: 'Auburn Tigers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/43/picture/duestk.png',
			show: true,
			select: false
		},
		{
			id: 44,
			title: 'Texas A&M Aggies',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/44/picture/eva2y9.png',
			show: true,
			select: false
		},
		{
			id: 45,
			title: 'West Virginia Mountaineers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/45/picture/xhxzxz.png',
			show: true,
			select: false
		},
		{
			id: 46,
			title: 'Georgia Bulldogs',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/46/picture/q59dr3.png',
			show: true,
			select: false
		},
		{
			id: 49,
			title: 'Florida State Seminoles',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/49/picture/pukvj1.png',
			show: true,
			select: false
		},
		{
			id: 52,
			title: 'Chris Kyle Frog Foundation',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/52/picture/373euw.png',
			show: true,
			select: false
		},
		{
			id: 54,
			title: 'Kansas Jayhawks',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/54/picture/pmgvgq.png',
			show: true,
			select: false
		},
		{
			id: 55,
			title: 'Texas Tech Red Raiders',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/55/picture/c9e8n1.png',
			show: true,
			select: false
		},
		{
			id: 56,
			title: 'Texas Longhorns',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/56/picture/ee426g.png',
			show: true,
			select: false
		},
		{
			id: 57,
			title: 'Oklahoma Sooners',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/57/picture/fdk69r.png',
			show: true,
			select: false
		},
		{
			id: 58,
			title: 'Oregon State Beavers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/58/picture/zzx475.png',
			show: true,
			select: false
		},
		{
			id: 59,
			title: 'Nebraska Cornhuskers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/59/picture/3kehr7.png',
			show: true,
			select: false
		},
		{
			id: 60,
			title: 'Arizona State Sun Devils',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/60/picture/4g9s5y.png',
			show: true,
			select: false
		},
		{
			id: 61,
			title: 'Montana Grizzlies',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/61/picture/gmt85n.png',
			show: true,
			select: false
		},
		{
			id: 62,
			title: 'Iowa Hawkeyes',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/62/picture/zt9rf4.png',
			show: true,
			select: false
		},
		{
			id: 63,
			title: 'Maryland Terrapins',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/63/picture/rnm3am.png',
			show: true,
			select: false
		},
		{
			id: 64,
			title: 'Wyoming Cowboys',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/64/picture/gaearp.png',
			show: true,
			select: false
		},
		{
			id: 65,
			title: 'Syracuse Orange',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/65/picture/4g8acb.png',
			show: true,
			select: false
		},
		{
			id: 66,
			title: 'Montana State Bobcats',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/66/picture/898ppj.png',
			show: true,
			select: false
		},
		{
			id: 67,
			title: 'NC State Wolfpack',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/67/picture/u3mtxd.png',
			show: true,
			select: false
		},
		{
			id: 68,
			title: 'Navy Midshipmen',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/68/picture/cejc33.png',
			show: true,
			select: false
		},
		{
			id: 69,
			title: 'Western Michigan Broncos',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/69/picture/jzv2n1.png',
			show: true,
			select: false
		},
		{
			id: 70,
			title: 'Mizzou Tigers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/70/picture/zz38js.png',
			show: true,
			select: false
		},
		{
			id: 71,
			title: 'Georgia Southern Eagles',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/71/picture/n7dykx.png',
			show: true,
			select: false
		},
		{
			id: 72,
			title: 'Gonzaga Bulldogs',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/72/picture/j1xt9d.png',
			show: true,
			select: false
		},
		{
			id: 73,
			title: 'Utah Utes',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/73/picture/8j1fhj.png',
			show: true,
			select: false
		},
		{
			id: 74,
			title: 'Texas State Bobcats',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/74/picture/1su2gn.png',
			show: true,
			select: false
		},
		{
			id: 75,
			title: 'Ole Miss Rebels',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/75/picture/ctdqsk.png',
			show: true,
			select: false
		},
		{
			id: 76,
			title: 'Colorado State Rams',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/76/picture/86pdq6.png',
			show: true,
			select: false
		},
		{
			id: 77,
			title: 'Colorado Buffaloes',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/77/picture/cg67yy.png',
			show: true,
			select: false
		},
		{
			id: 78,
			title: 'Ohio Bobcats',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/78/picture/68q2gp.png',
			show: true,
			select: false
		},
		{
			id: 79,
			title: 'Washington Huskies',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/79/picture/nk5zvx.png',
			show: true,
			select: false
		},
		{
			id: 80,
			title: 'Central Michigan Chippewas',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/80/picture/rymzsv.png',
			show: true,
			select: false
		},
		{
			id: 81,
			title: 'Appalachian State Mountaineers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/81/picture/5wcqtz.png',
			show: true,
			select: false
		},
		{
			id: 82,
			title: 'Virginia Tech Hokies',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/82/picture/95mcaq.png',
			show: true,
			select: false
		},
		{
			id: 83,
			title: 'North Dakota Fighting Hawks',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/83/picture/8xv7va.png',
			show: true,
			select: false
		},
		{
			id: 84,
			title: 'Fresno Bulldogs',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/84/picture/6w55z5.png',
			show: true,
			select: false
		},
		{
			id: 85,
			title: 'New Mexico Lobos',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/85/picture/dywgyx.png',
			show: true,
			select: false
		},
		{
			id: 86,
			title: 'East Carolina Pirates',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/86/picture/517gsw.png',
			show: true,
			select: false
		},
		{
			id: 87,
			title: 'UNLV Rebels',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/87/picture/7hxrhu.png',
			show: true,
			select: false
		},
		{
			id: 88,
			title: 'Virginia Commonwealth Rams',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/88/picture/21n35s.png',
			show: true,
			select: false
		},
		{
			id: 89,
			title: 'James Madison Dukes',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/89/picture/3rtzrr.png',
			show: true,
			select: false
		},
		{
			id: 90,
			title: 'Army Black Knights',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/90/picture/75tyyx.png',
			show: true,
			select: false
		},
		{
			id: 91,
			title: 'USC Trojans',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/91/picture/5nkwn1.png',
			show: true,
			select: false
		},
		{
			id: 92,
			title: 'Dayton Flyers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/92/picture/zxnr9r.png',
			show: true,
			select: false
		},
		{
			id: 93,
			title: 'Clemson Tigers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/93/picture/fqk9j5.png',
			show: true,
			select: false
		},
		{
			id: 94,
			title: 'Illinois Fighting Illini',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/94/picture/zbyzws.png',
			show: true,
			select: false
		},
		{
			id: 95,
			title: 'Long Beach State 49ers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/95/picture/uw8n2w.png',
			show: true,
			select: false
		},
		{
			id: 96,
			title: 'Temple Owls',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/96/picture/fwxecc.png',
			show: true,
			select: false
		},
		{
			id: 97,
			title: 'UNC Wilmington Seahawks',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/97/picture/8zy6pv.png',
			show: true,
			select: false
		},
		{
			id: 98,
			title: 'Southern Illinois Salukis',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/98/picture/5rs8yr.png',
			show: true,
			select: false
		},
		{
			id: 99,
			title: 'Bowling Green Falcons',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/99/picture/8cbxxv.png',
			show: true,
			select: false
		},
		{
			id: 100,
			title: 'Boston College Eagles',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/100/picture/xkq9ez.png',
			show: true,
			select: false
		},
		{
			id: 101,
			title: 'Northern Iowa Panthers',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/101/picture/1xgn2n.png',
			show: true,
			select: false
		},
		{
			id: 102,
			title: 'Illinois State Redbirds',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/102/picture/ej6a5m.png',
			show: true,
			select: false
		},
		{
			id: 103,
			title: 'Eastern Washington Eagles',
			image: 'https://dlpi0glski737.cloudfront.net/uploads/licenses/103/picture/967u8x.png',
			show: true,
			select: false
		}
	];

	constructor() {
		if (!localStorage.getItem('licenses')) {
			localStorage.setItem('licenses', JSON.stringify(this.licenses));
		} else {
			this.licenses = JSON.parse(localStorage.getItem('licenses'));
		}
	}

	get(): ILicenseData {
		return  { data: this.licenses, select: _.filter(this.licenses, { select: true })};
	}

	update(updateLicenses: ILicense[]): ILicenseData {
		_.forEach(updateLicenses, updatedLicense => {
			const licenseToUpdate = _.find(this.licenses, { id: updatedLicense.id });
			licenseToUpdate.select = updatedLicense.id === licenseToUpdate.id ? updatedLicense.select : licenseToUpdate.select;
		});
		localStorage.setItem('licenses', JSON.stringify(this.licenses));
		return this.get();
	}

}
