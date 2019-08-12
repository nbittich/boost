import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {ErrorComponent} from './error/error.component';
import {UnitsComponent} from './units/units.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './login/authguardservice';
import {UnitDetailComponent} from './unit-detail/unit-detail.component';
import {AuthInterceptor} from './login/authinterceptor';
import {ErrorInterceptor} from './login/errorinterceptor';
import {UnitSearchFormComponent} from './unit-search-form/unit-search-form.component';
import {NgxPaginationModule} from "ngx-pagination";
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {LinksComponent} from './links/links.component';
import {EventComponent} from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ErrorComponent,
    UnitsComponent,
    HomeComponent,
    UnitDetailComponent,
    UnitSearchFormComponent,
    LinksComponent,
    EventComponent
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
export class AppModule { }
