import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppService } from '@app/app.service';
import { User } from '@app/_models';
import { Observable } from 'rxjs';

import { LoginComponent } from './login.component';

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [
        FormBuilder, 
        { provide: ActivatedRoute, useValue: ActivatedRouteStub },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
