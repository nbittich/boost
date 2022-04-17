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
import {AuthGuardService} from './service/authguardservice';
import {AuthInterceptor} from './login/authinterceptor';
import {ErrorInterceptor} from './login/errorinterceptor';
import {NgxPaginationModule} from "ngx-pagination";
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {BooksComponent} from './books/books.component';
import {BooksDetailComponent} from './books-detail/books-detail.component';
import {BookFormComponent} from './book-form/book-form.component';
import {ImagePreviewComponent} from './image-preview/image-preview.component';
import {ImageLoaderComponent} from './image-loader/image-loader.component';
import {ChaptersComponent} from './chapters/chapters.component';
import {ChapterDetailComponent} from './chapter-detail/chapter-detail.component';
import {AutosizeModule} from "ngx-autosize";
import {ChapterFormComponent} from './chapter-form/chapter-form.component';
import {AutofocusModule} from "angular-autofocus-fix";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {StarsComponent} from './stars/stars.component';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {AudioPlayerComponent} from './audio-player/audio-player.component';
import {LogoComponent} from './logo/logo.component';
import {MyBooksComponent} from './my-books/my-books.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {NotificationComponent} from './notification/notification.component';

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
    ChapterDetailComponent,
    ChapterFormComponent,
    StarsComponent,
    AudioPlayerComponent,
    LogoComponent,
    MyBooksComponent,
    UserProfileComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    NgxJsonViewerModule,
    AppRoutingModule,
    AutosizeModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    AutofocusModule,
    FontAwesomeModule
  ],

  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: AuthGuardService, useClass: AuthGuardService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks(fas, far);

  }
}
