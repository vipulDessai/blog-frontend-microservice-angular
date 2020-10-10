import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { User } from '@app/_models';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  collapsed = true;
  user: User;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.user = this.appService.userValue;
  }

  logout(event: Event) {
    event.preventDefault();
    this.appService.logout();
  }
}
