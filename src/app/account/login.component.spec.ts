import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from "@angular/common";

import { LoginComponent } from './login.component';
import { Component } from '@angular/core';

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
  let fixture;// ComponentFixture<LoginComponent>;
  let router: Router;

  let location: Location;

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

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should call submit', fakeAsync(() => {
    router.navigate(['/content/home']);
    
    // We wait for all pending promises to be resolved.
    tick();

    expect(location.path()).toBe('/content/home');
  }));
});
