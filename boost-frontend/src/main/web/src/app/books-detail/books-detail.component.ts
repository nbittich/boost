import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../books/book";
import {AuthenticationService} from "../login/authenticationservice";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Location} from '@angular/common';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Star} from "../stars/star";
import {Slugify} from "../common/slugify";

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  static ENDPOINT='/book';

  public book: Book;
  public editMode;
  faArrowLeft=faArrowLeft;

  constructor(private http: HttpClient,
              private router: Router,
              private authenticationService: AuthenticationService,
              private location: Location,
              private route: ActivatedRoute) {

  }

  back() {
    this.location.back();
  }

  save() {
    this.http.request<any>('post', environment.backendUrl + BooksDetailComponent.ENDPOINT, {body: this.book}).subscribe(
      (datas) => {
        console.log(datas);
        alert(datas.message);
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  fetchBook(id,title){
    this.http.request<any>('get', environment.backendUrl + BooksDetailComponent.ENDPOINT+ '/' + title+'/'+id, {}).subscribe(
      (datas) => {
        this.book = datas;
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.book = null;
      const id = params.id;
      const title = params.title;
      console.log(id);
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
    console.log("from book detail " +$event.star);
    let params = new HttpParams()
      .set('bookId', this.book.id + '')
      .set('star', $event.star + '');
    this.http.request<any>('post', environment.backendUrl +'/user/rate', {
      params:params
    }).subscribe(
      (datas) => {
        this.fetchBook(this.book.id, Slugify.slugify(this.book.title));
        alert(datas.message);
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
}

