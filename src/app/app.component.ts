import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

import { DummyData } from "./DummyData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private testService: TestService) {}
  heroes:any;
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.testService.getHeroes("api/users").subscribe(
      (heroString: DummyData) => {
        this.heroes = heroString.foo;
      }
    );
  }
}
