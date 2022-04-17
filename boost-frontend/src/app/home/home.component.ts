import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authenticationservice';
import {Router} from "@angular/router";
import {Slugify} from "@core/common/slugify";
import {ChapterService} from "../service/chapter.service";
import {BookService} from "../service/book.service";

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

  constructor(private bookService: BookService, private chapterService:ChapterService,private router: Router, private authenticationService: AuthenticationService) {
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
    this.bookService.getLast3Books((datas) => {
      this.books = datas;
      this.loading = false;
    });
    this.bookService.getTop3Books((datas) => {
      this.topBooks = datas;
      this.loading = false;
    });

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
      return`/user/chapter/${currentChapter.chapter.id}/current-time?time=`;
  }

  fetchHistories() {
    if (this.isLoggedIn()) {
      this.chapterService.userHistory((datas) => {
        this.histories = datas;
      });
    }
  }

  getChapterDetailLink(chapter: any) {
      let link = '/books/' + Slugify.slugify(chapter.title) + '/' + chapter.bookId + '/' + 'view';
      return link;
  }
}
