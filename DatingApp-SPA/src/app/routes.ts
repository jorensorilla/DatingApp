import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent}, // do not set value in path as setting it
    // to home will redirect you to nowhere when localhost:4200 is accessed

    // dummy route with child routes
    {
        path: '', // if this has a value then localhost:4200/<path>members
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent},
            { path: 'members/:id', component: MemberDetailComponent},
            { path: 'messages', component: MemberListComponent},
            { path: 'lists', component: MemberListComponent}
        ]
    },
    // {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
    // {path: 'messages', component: MessagesComponent},
    // {path: 'lists', component: ListsComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'} // wild card route that redirects to home and matches full path of url
    // angular router operates on a first match wins basis
];
