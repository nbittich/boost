import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "@service/authentication.service";
import {Location} from '@angular/common';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { Book } from '@core/models/book';
import { Star } from '@core/models/star';
import { Slugify } from '@core/common/slugify';
import { BookService } from '@service/book.service';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  static ENDPOINT='/book';

  book: Book;
  editMode;
  faArrowLeft=faArrowLeft;

  constructor(private bookService: BookService,
              private router: Router,
              private authenticationService: AuthenticationService,
              private location: Location,
              private route: ActivatedRoute) {

  }

  back() {
    this.location.back();
  }

  fetchBook(id,title){
    this.bookService.fetchBook(id, title,(datas) => {
      this.book = datas;
      this.checkRights();
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.book = null;
      const id = params.id;
      const title = params.title;
      const editMode = params.editMode;
      this.fetchBook(id,title);
      this.editMode = editMode === 'edit';

    });
  }

  isLoggedIn() {
    return this.getUser() !== null;
  }

  getUser() {
    return this.authenticationService.getUser();
  }

  rateBook($event: Star) {
    this.bookService.rateBook($event, this.book, (datas) => {
      this.fetchBook(this.book.id, Slugify.slugify(this.book.title));
    });
  }

  hasAnyRole(...expected){
    return this.authenticationService.hasAnyRole(...expected);
  }

  hasRole(expected) {
    return this.hasAnyRole(expected);
  }

  navigate(book, editMode) {
    this.bookService.bookDetailFor(book,editMode);
  }

  private checkRights() {
    if (this.editMode && !this.hasRight()){
      this.bookService.bookDetailFor(this.book, 'view');
      if(!this.hasRight()){
        this.navigate(this.book,"view");
      }
    }
  }

  public hasRight() {
    return this.authenticationService.hasRight(this.book);
  }
}

