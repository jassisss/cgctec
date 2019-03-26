import { Component } from '@angular/core';

import { GeneralService } from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
	
	title = 'CGC Tecnologia Ltda';
	showAdmin: boolean = false;
	showSite: boolean = true;
	showAuth: boolean = false;
	showGuest: boolean = false;

	constructor(private geralService: GeneralService) {}

	ngOnInit() {
		this.showAdmin = false;
		this.showSite = true;
		this.showAuth = false;
		this.showGuest = false;

	}

	ngDoCheck() {
		this.showAdmin = this.geralService.showAdmin;
		this.showSite = this.geralService.showSite;
		this.showAuth = this.geralService.showAuth;
		this.showGuest = this.geralService.showGuest;
	}

	// ngOnChanges() {
	// 	this.showAdmin = this.geralService.showAdmin;
	// 	this.showSite = this.geralService.showSite;
	// 	this.showAuth = this.geralService.showAuth;
	// 	this.showGuest = this.geralService.showGuest;
	
	// }

	// ngAfterContentInit() {
	// 	console.log('ngAfterContentInit')
	// }

	// ngAfterContentChecked() {
	// 	console.log('ngAfterContentChecked')
	// }

	// ngAfterViewInit() {
	// 	console.log('ngAfterViewInit')
	// }

	// ngAfterViewChecked() {
	// 	console.log('ngAfterViewChecked')
	// }


}
