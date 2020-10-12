import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '', component: ContentComponent,
        children: [
            { path: 'home', component: HomeComponent},
            { path: 'blogs', component: BlogListComponent},
            { path: 'create', component: BlogCreateComponent},
        ]
    }
];

// for testing
export default routes;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentRoutingModule {}