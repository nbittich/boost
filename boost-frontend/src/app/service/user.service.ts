import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "@env/environment";
import {Subject} from "rxjs";
import { Book } from '@core/models/book';

/**
 * @author Nordine Bittich
 */
@Injectable({providedIn: 'root'})
export class UserService {
  public userEvent = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  
    delete(book: Book) {
      return this.http.delete<any>(environment.backendUrl + '/book', { body: book });
    }

    getMyBooks(event: number) {
     return  this.http.get<Book[]>(environment.backendUrl + '/user/my-content' + '?size=2&page=' + (event - 1));
    }
}
