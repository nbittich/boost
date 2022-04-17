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
import {ChaptersComponent} from './chapters/chapters.component';
import {ChapterDetailComponent} from './chapter-detail/chapter-detail.component';
import {AutosizeModule} from "ngx-autosize";
import {ChapterFormComponent} from './chapter-form/chapter-form.component';
import { AutofocusFixModule } from 'ngx-autofocus-fix'; // <--- new code
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {StarsComponent} from './stars/stars.component';
import {faArrowLeft, faBook, faCheckCircle, faEdit, faExclamation, faExclamationCircle, faEye, faFileAudio, faHome, faPlus, fas, faSave, faSearch, faSignInAlt, faSignOutAlt, faStar, faStarHalfAlt, faSync, faTimes, faTrash, faUser, faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import {AudioPlayerComponent} from './audio-player/audio-player.component';
import {LogoComponent} from './logo/logo.component';
import {MyBooksComponent} from './my-books/my-books.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {NotificationComponent} from './notification/notification.component';
import { SharedModule } from '@shared/shared.module';

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
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    AutofocusFixModule.forRoot(),
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
    library.addIcons(faSave, faPlus,
      faCheckCircle, faExclamationCircle, faExclamation, faStar, faStarHalfAlt,
      faHome, faFileAudio, faVolumeUp, faBook, faUser,
      faSearch, faSync,faTimes,faTrash, faSignInAlt, faSignOutAlt, faEye,faArrowLeft, faEdit)

  }
}
