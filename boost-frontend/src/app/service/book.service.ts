import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthenticationService} from "@service/authentication.service";
import {environment} from "@env/environment";
import {Router} from "@angular/router";
import { Book } from "@core/models/book";
import { Slugify } from "@core/common/slugify";
import { Star } from "@core/models/star";

@Injectable({providedIn: 'root'})
export class BookService {
  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
  }

  getBooks(next = datas => console.log(datas), event: number = 1, pageSize = 10, err = e => console.log(e)) {
    this.http.get<any[]>(`${environment.backendUrl}/book?size=${pageSize}&page=${event - 1}`, {}).subscribe(
      next,
      err,
      () => {
      }
    );
  }


  searchBookByTitle(title, next = datas => console.log(datas), page = 1, pageSize = 10, err = e => console.log(e)) {
    this.http.get<any[]>(`${environment.backendUrl}/book/search/title?size=${pageSize}&page=${page - 1}`, {
      params: {
        'title': title
      }
    }).subscribe(next, err,
      () => {
      },
    );
  }

  fetchTitles(next: any, err = e => console.log(e)) {
    this.http.get<any[]>(`${environment.backendUrl}/book/titles`, {}).subscribe(
      next, err,
      () => {
      },
    );
  }

  getTotalDuration(book: Book) {
    return Math.round(book.totalDuration / 1000 / 60) + ' minutes';
  }


  bookDetailFor(book, editMode) {
    this.router.navigateByUrl('/books/' + Slugify.slugify(book.title) + '/' + book.id + '/' + editMode);
  }


  fetchCountryCode(next: any, e = err => console.log(err)) {
    this.http.request<any>('get', `${environment.backendUrl}/book/country-code`, {}).subscribe(
      next,
      e,
      () => {
      },
    );

  }

  saveBookToDb(book: any, next, error = e => console.log(e)) {
    this.http.request<any>('put', `${environment.backendUrl}/book`, {body: book}).subscribe(
      next, error,
      () => {
      },
    );
  }

  fetchBook(id, title, next: any, err = e => console.log(e)) {
    this.http.request<any>('get', `${environment.backendUrl}/book/${title}/${id}`, {}).subscribe(
      next, err,
      () => {
      },
    );
  }

  rateBook($event: Star, book: Book, next, err = e => console.log(e)) {
    console.log("from book detail " + $event.star);
    let params = new HttpParams()
      .set('bookId', book.id + '')
      .set('star', $event.star + '');
    this.http.request<any>('post', `${environment.backendUrl}/user/rate`, {
      params: params
    }).subscribe(
      next, err,
      () => {
      },
    );
  }

  getLast3Books(next: (datas) => void) {
    this.http.get<any[]>(environment.backendUrl + '/book/last', {}).subscribe(
      next,
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  getTop3Books(next: (datas) => void) {
    this.http.get<any[]>(environment.backendUrl + '/book/top', {}).subscribe(
      next,
      (err) => {
        console.log(err);
      },
      () => {
      }
    );
  }
}
