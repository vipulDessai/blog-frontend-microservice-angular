import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from "@angular/common";

import { LoginComponent } from './login.component';
import { Component, NgZone } from '@angular/core';

@Component({
  template: `fake Home`
})
export class HomeComponent {}

@Component({
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}

const routes: Routes = [
  { path: '', redirectTo: 'content/home', pathMatch: 'full' },
  { path: 'content/home', component: HomeComponent},
]

class ActivatedRouteStubClass {
  snapshot = {
    queryParams: {
      'returnUrl': '/content/home',
    }
  }
}
const ActivatedRouteStub = new ActivatedRouteStubClass();

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  let location: Location;

  let zone: NgZone;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ LoginComponent, AppComponent, HomeComponent ],
      providers: [
        FormBuilder, 
        { provide: ActivatedRoute, useValue: ActivatedRouteStub },
      ],
    })
    .compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    zone = TestBed.inject(NgZone);

    TestBed.createComponent(AppComponent);

    // navigation is to be run inside the angular ng zone
    zone.run(() => {
      router.initialNavigation();
    });
  });

  it('should create', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should navigate to /content/home', () => {
    // navigation is to be run inside the angular ng zone
    zone.run(() => {
      router.navigate(['/content/home']);
      expect(location.path()).toBe('/content/home');
    });
  });
});
