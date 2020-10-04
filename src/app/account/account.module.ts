import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        SharedModule,
    ],
    declarations: [
        AccountComponent,
        LoginComponent,
        RegisterComponent,
    ]
})
export class AccountModule {}