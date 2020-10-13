// Http testing module and mocking controller
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from "@environments/environment";
import { User } from '@app/_models';
import { AppService } from './app.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('appService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let appSerice: AppService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
        });

        // TestBed.get() was deprecated as of Angular version 9
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        appSerice = TestBed.inject(AppService);
    });

    it('should call Login API', () => {
        const userName = "foo";
        const password = "bar";

        appSerice.login(userName, password)
            .subscribe(
                userSuccess => {
                    expect(userSuccess).toEqual(true);
                },
                fail
            );

        // authenticate mock data
        const testData: User = {
            userName: "foo_bar",
            firstName: "foo",
            lastName: "bar",
            lastLogin: new Date(),
        };

        // expect one catches only one xhr request, else would throw error
        const req = httpTestingController.expectOne(`${environment.accountPrefix}/authenticate`);
        expect(req.request.method).toEqual('POST');

        // once the request is caught
        // hand over the mock data to it
        req.flush(testData);

        // make sure no request are pending
        httpTestingController.verify();
    });
});