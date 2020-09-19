import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/_models';

import { environment } from "@environments/environment";
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  login(userName: string, password: string) {
    return this.http.post<User>(`${environment.apiPrefix}/users/authenticate`, { userName, password })
      .pipe(
        map(
          user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
          }
        )
      )
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }
}
