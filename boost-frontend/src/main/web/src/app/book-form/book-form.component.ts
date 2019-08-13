import {Component, Input, OnInit} from '@angular/core';
import {BookDto} from "../books/book";
import {ImagePreview} from "../image-preview/image.preview";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  public loadingCover:boolean;
  @Input()
  public book: BookDto;

  @Input()
  public editMode: boolean;

  @Input()
  public callbackFunction: any;

  @Input()
  public formVisible = false;

  constructor() { }

  ngOnInit() {
  }

  setCover($imagePreview: ImagePreview) {
    this.book.cover = $imagePreview.imgURL;
    this.book.fileName = $imagePreview.fileName;
    this.book.contentType= $imagePreview.contentType;
  }
}
