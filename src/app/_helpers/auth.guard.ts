import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AppService } from '@app/app.service';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private appService: AppService,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.appService.userValue;
        if(user) {
            // authorised so return true
            return true;
        }

        // not logged in, so redirect to login page preserving the return url
        this.router.navigate([`/${environment.accountPrefix}/login`], { queryParams: { returnUrl: state.url } });
        return false;
    }
}