import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authenticationservice";
import {environment} from "../../environments/environment";
import { AudioPlayerComponent } from '@shared/audio-player/audio-player.component';
import { BookDto } from '@core/models/book';
import { Slugify } from '@core/common/slugify';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  books: any;
  bookFormVisible: boolean;


  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.getMyBooks(1);

  }



  newBook() {
    return new BookDto();
  }

  delete(book,e) {
    e.stopPropagation();
    this.http.request<any>('delete', environment.backendUrl + "/book", {body: book}).subscribe(
      (datas) => {
        this.getMyBooks(1);
        this.authenticationService.autoLogin();
        let currentChapterUploadId = (datas.currentChapter || {upload:{}}).upload.id;

        AudioPlayerComponent.reloadCurrentPlayer(currentChapterUploadId, (datas.currentChapter||{}).title);
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  getMyBooks(event:number){
        this.books=[];
        this.http.get<any[]>(environment.backendUrl + '/user/books' + '?size=2&page=' + (event - 1), {}).subscribe(
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

  linkToBook(book: any, action) {
    return '/books/'+Slugify.slugify(book.title)+'/'+book.id+'/'+action;
  }
}
