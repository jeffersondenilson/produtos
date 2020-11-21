import { Component, HostListener, OnInit } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private navService: NavService) {}

  ngOnInit(): void {
  	if(window.innerWidth > 600){
  		this.navService.isOpened = true;
  	}else{
			this.navService.isOpened = false;
		}
	}
	
	get navOpened(): boolean {
		return this.navService.isOpened;
	}

  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
		if(window.innerWidth > 600){
  		this.navService.isOpened = true;
  	}else{
			this.navService.isOpened = false;
		}
	}

  toggleSidenav(): void {
    if(window.innerWidth <= 600){
      this.navService.isOpened = !this.navService.isOpened;
    }
  }
}
