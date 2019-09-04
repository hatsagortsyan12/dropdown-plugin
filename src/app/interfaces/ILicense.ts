export interface ILicense {
	id: number;
	title?: string;
	image?: string;
	show?: boolean;
	select: boolean;
};

export interface ILicenseData {
	data?: ILicense[];
	select?: ILicense[];
}
