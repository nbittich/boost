import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';

@NgModule({
  declarations: [
    ImagePreviewComponent,
    ImageLoaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePreviewComponent,
    ImageLoaderComponent,
  ]
})
export class SharedModule { }
