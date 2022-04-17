import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { RouterModule } from '@angular/router';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { StarsComponent } from './stars/stars.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    ImagePreviewComponent,
    ImageLoaderComponent,
    AudioPlayerComponent,
    StarsComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  exports: [
    ImagePreviewComponent,
    AudioPlayerComponent,
    StarsComponent,
    ImageLoaderComponent,
    LogoComponent,
    HttpClientModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
