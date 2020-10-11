// Http testing module and mocking controller
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from "@environments/environment";
import { User } from '@app/_models';

describe('appService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
        });

        // TestBed.get() was deprecated as of Angular version 9
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should call login api', () => {
        const userName = "foo";
        const password = "bar";
        httpClient.post<User>(`${environment.accountPrefix}/authenticate`, { userName, password })
            .subscribe(
                user => {
                    expect(user.firstName).toBe(userName);
                }
            );
    });
});