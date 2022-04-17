import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { PublicAreaRoutingModule } from './public-area.routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent, ErrorComponent
  ],
  imports: [
    CommonModule,
    PublicAreaRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class PublicAreaModule { }
