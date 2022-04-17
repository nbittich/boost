import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { RouterModule } from '@angular/router';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

@NgModule({
  declarations: [
    ImagePreviewComponent,
    ImageLoaderComponent,
    AudioPlayerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ImagePreviewComponent,
    AudioPlayerComponent,
    ImageLoaderComponent,
  ]
})
export class SharedModule { }
