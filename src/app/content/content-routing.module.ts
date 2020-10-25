import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { CreateLogComponent } from './create-log/create-log.component';
import { HomeComponent } from './home/home.component';
import { ListLogsComponent } from './list-logs/list-logs.component';

const routes: Routes = [
    {
        path: '', component: ContentComponent,
        children: [
            { path: 'home', component: HomeComponent},
            { path: 'list', component: ListLogsComponent},
            { path: 'create', component: CreateLogComponent},
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