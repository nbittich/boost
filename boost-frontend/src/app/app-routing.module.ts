import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {AuthGuardService} from '@service/auth-guard.service';
import {HomeComponent} from './home/home.component';
import {UserProfileComponent} from "./user-profile/user-profile.component";

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'error', component: ErrorComponent},
  {
    path: 'books',
    loadChildren: () => import('./feat/book/book.module').then((m) => m.BookModule),
  },
  {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuardService], data: {expectedRole: ['USER', 'ADMIN','CONTRIBUTOR']}},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
