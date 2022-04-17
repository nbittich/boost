import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {AuthGuardService} from './service/authguardservice';
import {HomeComponent} from './home/home.component';
import {BooksComponent} from "./books/books.component";
import {MyBooksComponent} from "./my-books/my-books.component";
import {BooksDetailComponent} from "./books-detail/books-detail.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'books', component: BooksComponent, canActivate: [AuthGuardService], data: {expectedRole: ['USER','ANONYMOUS', 'ADMIN','CONTRIBUTOR']}},
  {path: 'books/:title/:id/:editMode', component: BooksDetailComponent, canActivate: [AuthGuardService], data: {expectedRole: ['USER','ANONYMOUS', 'ADMIN', 'CONTRIBUTOR']}},
  {path: 'my-books', component: MyBooksComponent, canActivate: [AuthGuardService], data: {expectedRole: ['USER', 'ADMIN','CONTRIBUTOR']}},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuardService], data: {expectedRole: ['USER', 'ADMIN','CONTRIBUTOR']}},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
