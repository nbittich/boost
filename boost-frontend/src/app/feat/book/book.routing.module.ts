import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AuthGuardService} from '@service/auth-guard.service';
import {BooksComponent} from "./books/books.component";
import {MyBooksComponent} from "./my-books/my-books.component";
import {BooksDetailComponent} from "./books-detail/books-detail.component";

const routes: Route[] = [
  {path: '', component: BooksComponent, canActivate: [AuthGuardService], data: {expectedRole: ['USER','ANONYMOUS', 'ADMIN','CONTRIBUTOR']}},
  {path: '/:title/:id/:editMode', component: BooksDetailComponent, canActivate: [AuthGuardService], data: {expectedRole: ['USER','ANONYMOUS', 'ADMIN', 'CONTRIBUTOR']}},
  {path: 'my-books', component: MyBooksComponent, canActivate: [AuthGuardService], data: {expectedRole: ['USER', 'ADMIN','CONTRIBUTOR']}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
