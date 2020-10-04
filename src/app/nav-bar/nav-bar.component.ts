import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  logout(event) {
    this.appService.logout();
  }
}
