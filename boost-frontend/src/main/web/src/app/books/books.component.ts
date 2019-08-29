import {Component, OnInit} from '@angular/core';
import {Book, BookDto} from "./book";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authenticationservice";
import {environment} from "../../environments/environment";
import {Slugify} from "../common/slugify";
import {faEdit, faEye, faSync, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: any;
  static ENDPOINT = '/book';
  faSync=faSync;
  faEdit=faEdit;
  faTrash=faTrash;
  faEye=faEye;
  bookFormVisible: boolean;
  loading: boolean;
  searchText: string;
  titles: any;
  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    //this.getBooks(1);
    this.http.get<any[]>(environment.backendUrl + BooksComponent.ENDPOINT + '/titles', {}).subscribe(
      (datas) => {
        this.titles = datas;
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }


  hasRole(expected) {
    return this.authenticationService.hasRole([expected]);
  }

  navigate(book, editMode) {
    this.router.navigateByUrl('/books/' + Slugify.slugify(book.title) + '/' + book.id + '/' + editMode);
  }


  getBooks(event: number) {
    if(this.searchText && this.searchText.length > 0) {
      this.searchBookByTitle(this.searchText, event);
    }else{
      this.loading = true;
      this.books=[];
      this.http.get<any[]>(environment.backendUrl + BooksComponent.ENDPOINT + '?size=10&page=' + (event - 1), {}).subscribe(
        (datas) => {
          this.books = datas;
          setTimeout(()=>{
            this.loading=false;

          }, 1000);

        },
        (err) => {
          console.log(err);
        },
        () => {
        },
      );
    }
  }

  isLoggedIn() {
    return this.getUser() !== null;
  }

  getUser(){
    return this.authenticationService.getUser();

  }

  newBook() {
    return new BookDto();
  }

  getTotalDuration(book: Book) {
    return Math.round(book.totalDuration/1000 / 60 ) + ' minutes';
  }

  public hasRight(book) {
    return (book || {username:'ERROR'}).username === (this.getUser() ||{username:'ANONYMOUS'}).username;
  }
  searchBookByTitle(title,page=1) {
    this.loading = true;
    this.books = [];
    this.http.get<any[]>(environment.backendUrl + BooksComponent.ENDPOINT + '/search/title' +'?size=10&page='+ (page-1), {params:{
      'title':title
      }}).subscribe(
      (datas) => {
        this.books = datas;
        this.loading = false;
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }
}
