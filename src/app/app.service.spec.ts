// Http testing module and mocking controller
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from "@environments/environment";
import { User } from '@app/_models';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

// all routes
import appRoutes  from '@app/app-routing.module';
import accountRoutes  from '@app/account/account-routing.module';
import contentRoutes  from '@app/content/content-routing.module';

describe('appService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let appSerice: AppService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([...appRoutes, ...accountRoutes, ...contentRoutes])],
        });

        // TestBed.get() was deprecated as of Angular version 9
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        appSerice = TestBed.inject(AppService);
    });

    it('should call login api', () => {
        const userName = "foo";
        const password = "bar";

        console.log(1)


        // httpClient.post<User>(`${environment.accountPrefix}/authenticate`, { userName, password })
        //     .subscribe(
        //         user => {
        //             console.log(2)
        //             expect(user.firstName).toBe(userName);
        //         }
        //     );

        appSerice.login(userName, password)
            .subscribe(
                user => {
                    console.log(2)
                    expect(user).toEqual(true);
                },
                fail
            );

        // const req = httpTestingController.expectOne(`${environment.accountPrefix}/authenticate`);
    });
});