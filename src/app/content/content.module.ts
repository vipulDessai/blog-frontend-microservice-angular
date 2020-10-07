import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContentRoutingModule,
        SharedModule,
        NgbModule,  // bootstrap
    ],
    declarations: [
        ContentComponent,
        HomeComponent,
        NavBarComponent,
        BlogListComponent,
        BlogPostComponent,
    ]
})
export class ContentModule {}