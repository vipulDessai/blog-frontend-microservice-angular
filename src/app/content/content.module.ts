import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateLogComponent } from './create-log/create-log.component';
import { ListLogsComponent } from './list-logs/list-logs.component';
import { ViewLogComponent } from './view-log/view-log.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContentRoutingModule,
        SharedModule,
        NgbModule,  // ng-bootstrap
    ],
    declarations: [
        ContentComponent,
        HomeComponent,
        NavBarComponent,
        CreateLogComponent,
        ViewLogComponent,
        ListLogsComponent,
    ]
})
export class ContentModule {}