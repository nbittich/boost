import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksComponent } from './books/books.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import { ChapterFormComponent } from './chapter-form/chapter-form.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { Router, RouterModule } from '@angular/router';
import { BookRoutingModule } from './book.routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChaptersComponent } from './chapters/chapters.component';
import { AutosizeModule } from 'ngx-autosize';



@NgModule({
  declarations: [
    BookFormComponent,
    BooksComponent,
    BooksDetailComponent,
    ChapterDetailComponent,
    ChapterFormComponent,
    ChaptersComponent,
    ChapterDetailComponent,
    MyBooksComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    AutosizeModule, 
    SharedModule,
    NgxPaginationModule,
    RouterModule,
  ]
})
export class BookModule { }
