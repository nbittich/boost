import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AuthGuardService} from '@service/auth-guard.service';
import { AutofocusFixModule } from 'ngx-autofocus-fix'; // <--- new code
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faArrowLeft, faBook, faCheckCircle, faEdit, faExclamation, faExclamationCircle, faEye, faFileAudio, faHome, faPlus, fas, faSave, faSearch, faSignInAlt, faSignOutAlt, faStar, faStarHalfAlt, faSync, faTimes, faTrash, faUser, faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '@shared/shared.module';
import { AuthInterceptor } from '@core/interceptor/auth-interceptor';
import { ErrorInterceptor } from '@core/interceptor/error-interceptor';
import { LayoutModule } from '@feat/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AutofocusFixModule.forRoot(),
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
