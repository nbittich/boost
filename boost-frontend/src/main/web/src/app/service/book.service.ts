import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authenticationservice";
import {environment} from "../../environments/environment";
import {Slugify} from "../common/slugify";
import {Router} from "@angular/router";
import {Book} from "../books/book";

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

  fetchTitles(next:any, err = e => console.log(e)){
    this.http.get<any[]>(`${environment.backendUrl}/book/titles`, {}).subscribe(
      next,err,
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

}
