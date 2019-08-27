import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../login/authenticationservice';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Slugify} from "../common/slugify";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loading: boolean;
  public books: any;
  public histories: any;
  topBooks: any;

  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
  }

  isLoggedIn() {
    return this.getUser() !== null;
  }

  getUser() {
    return this.authenticationService.getUser();
  }

  getBookDetailLink(book) {
    let link = '/books/' + Slugify.slugify(book.title) + '/' + book.id + '/' + 'view';
    return link;
  }

  ngOnInit() {
    this.loading = true;
    this.books = null;
    this.http.get<any[]>(environment.backendUrl + '/book/last', {}).subscribe(
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
    this.http.get<any[]>(environment.backendUrl + '/book/top', {}).subscribe(
      (datas) => {
        this.topBooks = datas;
        this.loading = false;
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
    this.fetchHistories();
      this.authenticationService.userEvent.subscribe(event => {
        console.log(event);
        if (event === 'logout') {
          this.histories = [];
        } else {
          this.fetchHistories();
        }
      });
  }

  getUpdateCurrentTimeUrl(currentChapter){
      return`/user/chapter/${currentChapter.id}/current-time?time=`;
  }

  fetchHistories() {
    if (this.isLoggedIn()) {
      this.http.get<any[]>(environment.backendUrl + '/user/chapter/history', {}).subscribe(
        (datas) => {
          this.histories = datas;
        },
        (err) => {
          console.log(err);
        },
        () => {
        },
      );
    }
  }

  getChapterDetailLink(chapter: any) {
      let link = '/books/' + Slugify.slugify(chapter.title) + '/' + chapter.bookId + '/' + 'view';
      return link;
  }
}
