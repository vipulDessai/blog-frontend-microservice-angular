import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  }
}
