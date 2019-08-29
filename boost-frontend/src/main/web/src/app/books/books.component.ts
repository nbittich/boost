import {Component, OnInit} from '@angular/core';
import {Book} from "./book";
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authenticationservice";
import {faEdit, faEye, faSync, faTrash} from "@fortawesome/free-solid-svg-icons";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: any;
  static ENDPOINT = '/book';
  faSync = faSync;
  faEdit = faEdit;
  faTrash = faTrash;
  faEye = faEye;
  loading: boolean;
  searchText: string;
  titles: any;

  constructor( private router: Router, private authenticationService: AuthenticationService, private bookService: BookService) {

  }

  ngOnInit() {
    this.bookService.fetchTitles((datas) => {
      this.titles = datas;
    });
  }


  hasRole(expected) {
    return this.authenticationService.hasRole([expected]);
  }

  navigate(book, editMode) {
    this.bookService.bookDetailFor(book,editMode);
  }


  getBooks(event: number) {

    const next = (datas) => {
      this.books = datas;
      setTimeout(() => {
        this.loading = false;
      }, 1000);

    };

    if (this.searchText && this.searchText.length > 0) {
      this.searchBookByTitle(this.searchText, event);
    } else {
      this.loading = true;
      this.books = [];
      this.bookService.getBooks(next,event);
    }
  }

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  getUser() {
    return this.authenticationService.getUser();

  }

  getTotalDuration(book: Book) {
    return this.bookService.getTotalDuration(book);
  }

  public hasRight(book) {
    return this.authenticationService.hasRight(book);
  }

  searchBookByTitle(title, page = 1) {
    this.loading = true;
    this.books = [];

    this.bookService.searchBookByTitle(title, (datas) => {
      this.books = datas;
      this.loading = false;
    },page);

  }
}
