import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ImagePreview} from "./image.preview";

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {
  public loadingCover:boolean;
  public imagePath;
  public imgURL: any;
  public filename:string;
  public contentType:string;

  @Output()
  public emitter: EventEmitter<ImagePreview>= new EventEmitter<ImagePreview>();

  constructor() {
  }

  preview(files) {
    if (files.length === 0)
      return;
    this.loadingCover=true;
    this.filename = files[0].name;
    this.contentType = files[0].type;

    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      let imagePreview = new ImagePreview();
      imagePreview.contentType = this.contentType;
      imagePreview.fileName = this.filename;
      imagePreview.imagePath = this.imagePath;
      imagePreview.imgURL = this.imgURL;
      this.emitter.emit(imagePreview);
      this.loadingCover = false;
    }
  }
  ngOnInit() {
  }

}
