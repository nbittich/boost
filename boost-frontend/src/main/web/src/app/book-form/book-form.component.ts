import {Component, Input, OnInit} from '@angular/core';
import {BookDto} from "../books/book";
import {ImagePreview} from "../image-preview/image.preview";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authenticationservice";
import {environment} from "../../environments/environment";
import {faPlus, faSave, faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  faPlus=faPlus;
  faTimes=faTimes;
  faSave=faSave;
  public loadingCover:boolean;

  @Input()
  public book: BookDto;

  private bookCopy:BookDto;

  @Input()
  public editMode: boolean;


  @Input()
  public formVisible = false;

  private coverChanged:boolean;

  @Input()
  showCross: boolean=true;


    constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
    }

  ngOnInit() {
    this.bookCopy = JSON.parse(JSON.stringify(this.book));
  }

  public setCover($imagePreview: ImagePreview) {
      this.coverChanged = true;
    this.bookCopy.cover = btoa($imagePreview.imgURL.split(',')[1]);
    this.bookCopy.fileName = $imagePreview.fileName;
    this.bookCopy.contentType= $imagePreview.contentType;
    console.log(this.book);
  }

  public saveBookToDB() {
      let b = JSON.parse(JSON.stringify(this.bookCopy));
      if(!this.coverChanged) {
        b.cover = null;
      }
      this.http.request<any>('put', environment.backendUrl + '/book', {body: b}).subscribe(
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
