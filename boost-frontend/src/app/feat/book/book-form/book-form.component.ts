import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "@service/authentication.service";
import {faPlus, faSave, faTimes} from "@fortawesome/free-solid-svg-icons";
import { ImagePreview } from '@core/models/image.preview';
import { BookDto } from '@core/models/book';
import { Slugify } from '@core/common/slugify';
import { BookService } from '@service/book.service';

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

  public bookCopy:BookDto;

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

    constructor( private bookService: BookService,private router: Router, private authenticationService: AuthenticationService) {
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
    this.bookService.fetchCountryCode((datas) => {
      this.countryCode = datas;
    });

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

      let bookToSave = {
        id: this.bookCopy.id,
        lang: this.bookCopy.lang,
        published: this.bookCopy.published, 
        title: this.bookCopy.title,
        description: this.bookCopy.description,
        author: this.bookCopy.author,
        cover: this.coverChanged ? this.bookCopy.cover : null,
        fileName: this.coverChanged ? this.bookCopy.fileName : null,
        contentType: this.coverChanged ? this.bookCopy.contentType : null,
        category: this.bookCopy.category
      };

      this.bookService.saveBookToDb(bookToSave,(datas) => {
        this.savingButton='Saved';
        this.bookCreatedCallback.emit(datas.message);
          this.navigate(datas,'view');
      });
  }

  toggleFormVisible() {
    this.formVisible = !this.formVisible;
    this.emitter.emit(this.formVisible);
  }
}
