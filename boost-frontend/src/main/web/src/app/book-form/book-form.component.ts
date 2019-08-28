import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookDto} from "../books/book";
import {ImagePreview} from "../image-preview/image.preview";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authenticationservice";
import {environment} from "../../environments/environment";
import {faPlus, faSave, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Slugify} from "../common/slugify";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  faPlus=faPlus;
  faTimes=faTimes;
  faSave=faSave;
  countryCode:any;
  public loadingCover:boolean;

  @Input()
  public book: BookDto;

  private bookCopy:BookDto;

  @Input()
  public editMode: boolean;


  @Output() emitter: EventEmitter<boolean> = new EventEmitter();
  @Output() bookCreatedCallback: EventEmitter<any> = new EventEmitter();

  @Input()
  public formVisible = false;

  private coverChanged:boolean;

  @Input()
  showCross: boolean=true;

  saving: boolean;
  savingButton: string='Save';

    constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
    }

  ngOnInit() {
    this.bookCopy = JSON.parse(JSON.stringify(this.book));
    this.fetchCountryCode();
  }

  isLoggedIn() {
    return this.getUser() !== null;
  }

  getUser() {
    return this.authenticationService.getUser();
  }

  fetchCountryCode(){
    this.http.request<any>('get', environment.backendUrl + '/book/country-code', {}).subscribe(
      (datas) => {
          this.countryCode = datas;
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );

  }
  public setCover($imagePreview: ImagePreview) {
      this.coverChanged = true;
    this.bookCopy.cover = btoa($imagePreview.imgURL.split(',')[1]);
    this.bookCopy.fileName = $imagePreview.fileName;
    this.bookCopy.contentType= $imagePreview.contentType;
    console.log(this.book);
  }

  navigate(book, editMode) {
    let slug = Slugify.slugify(book.title);
      this.router.navigateByUrl('/books/' + slug + '/' + book.id + '/' + editMode);
  }

  public saveBookToDB($e) {
      $e.stopPropagation();
      this.savingButton='Saving...';
      this.saving = true;
      let b = {
        id: this.bookCopy.id,
        lang: this.bookCopy.lang,
        title: this.bookCopy.title,
        description: this.bookCopy.description,
        author: this.bookCopy.author,
        cover: this.coverChanged ? this.bookCopy.cover : null,
        fileName: this.coverChanged ? this.bookCopy.fileName : null,
        contentType: this.coverChanged ? this.bookCopy.contentType : null,
        category: this.bookCopy.category
      };
      this.http.request<any>('put', environment.backendUrl + '/book', {body: b}).subscribe(
        (datas) => {
          this.savingButton='Saved';
          this.bookCreatedCallback.emit(datas.message);
          setTimeout(()=> {
            //this.savingButton='Save';
            //this.saving = false;
            this.navigate(datas,'view');

          },1000);
        },
        (err) => {
          console.log(err);
        },
        () => {
        },
      );
  }

  toggleFormVisible() {
    this.formVisible = !this.formVisible;
    this.emitter.emit(this.formVisible);
  }
}
