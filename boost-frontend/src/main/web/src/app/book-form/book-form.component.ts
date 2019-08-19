import {Component, Input, OnInit} from '@angular/core';
import {BookDto} from "../books/book";
import {ImagePreview} from "../image-preview/image.preview";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authenticationservice";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  public loadingCover:boolean;

  @Input()
  public book: BookDto;

  private bookCopy:BookDto;

  @Input()
  public editMode: boolean;


  @Input()
  public formVisible = false;

  @Input()
  showCross: boolean=true;


    constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
    }

  ngOnInit() {

    this.bookCopy = JSON.parse(JSON.stringify(this.book));
  }

  public setCover($imagePreview: ImagePreview) {
    this.bookCopy.cover = btoa($imagePreview.imgURL.split(',')[1]);
    this.bookCopy.fileName = $imagePreview.fileName;
    this.bookCopy.contentType= $imagePreview.contentType;
    console.log(this.book);
  }

  public saveBookToDB() {
      console.log(this.bookCopy);
      this.http.request<any>('put', environment.backendUrl + '/book', {body: this.bookCopy}).subscribe(
        (datas) => {
          alert(datas.message);
        },
        (err) => {
          console.log(err);
        },
        () => {
        },
      );
  }
}
