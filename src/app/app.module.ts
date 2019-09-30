import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LicenseService } from '@services/.';
import { LicenseProvider } from '@providers/.';
import { LicenseInterceptor } from '@interceptors/.';
import { ListComponent } from '@components/.';

@NgModule({
	declarations: [
		AppComponent,
		ListComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
		LicenseService,
		{ provide: HTTP_INTERCEPTORS, useClass: LicenseInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: LicenseProvider, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
