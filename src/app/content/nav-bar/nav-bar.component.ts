import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  collapsed = true;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  logout(event: Event) {
    event.preventDefault();
    this.appService.logout();
  }
}
