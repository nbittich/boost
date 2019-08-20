import {Component, OnInit} from '@angular/core';
import {Book, BookDto} from "./book";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authenticationservice";
import {environment} from "../../environments/environment";
import {Slugify} from "../common/slugify";
import {faAd, faEdit, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: any;
  static ENDPOINT = '/book';
  faAd=faAd;
  faEdit=faEdit;
  faTrash=faTrash;
  faEye=faEye;
  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.getBooks(1);
  }


  hasRole(expected) {
    return this.authenticationService.hasRole([expected]);
  }

  navigate(book, editMode) {
    this.router.navigateByUrl('/books/' + Slugify.slugify(book.title) + '/' + book.id + '/' + editMode);
  }

  delete(book) {
    this.http.request<any>('delete', environment.backendUrl + BooksComponent.ENDPOINT, {body: book}).subscribe(
      (datas) => {
        this.getBooks(1);
        alert(datas.message);
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  getBooks(event: number) {
    this.http.get<any[]>(environment.backendUrl + BooksComponent.ENDPOINT + '?page=' + (event - 1), {}).subscribe(
      (datas) => {
        this.books = datas;
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  isLoggedIn() {
    return this.authenticationService.getUser() !== null;
  }

  newBook() {
    return new BookDto();
  }

  getTotalDuration(book: Book) {
    return Math.round(book.totalDuration/1000 / 60 ) + ' minutes';
  }
}
