import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {ErrorComponent} from './error/error.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './login/authguardservice';
import {AuthInterceptor} from './login/authinterceptor';
import {ErrorInterceptor} from './login/errorinterceptor';
import {NgxPaginationModule} from "ngx-pagination";
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {BooksComponent} from './books/books.component';
import {BooksDetailComponent} from './books-detail/books-detail.component';
import {BookFormComponent} from './book-form/book-form.component';
import {ImagePreviewComponent} from './image-preview/image-preview.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { ChaptersComponent } from './chapters/chapters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    BooksComponent,
    BooksDetailComponent,
    BookFormComponent,
    ImagePreviewComponent,
    ImageLoaderComponent,
    ChaptersComponent,
  ],
  imports: [
    BrowserModule,
    NgxJsonViewerModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: AuthGuardService, useClass: AuthGuardService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
