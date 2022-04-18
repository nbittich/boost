import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '@service/authentication.service';
import { environment } from '@env/environment';
import { AudioPlayerComponent } from '@shared/audio-player/audio-player.component';
import { Book, BookDto } from '@core/models/book';
import { Slugify } from '@core/common/slugify';
import { UserService } from '@service/user.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css'],
})
export class MyBooksComponent implements OnInit {
  books: any;
  bookFormVisible: boolean;

  constructor(private userService: UserService, private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.getMyBooks(1);
  }

  newBook() {
    return new BookDto();
  }

  delete(book, e) {
    e.stopPropagation();
    this.userService.delete(book).subscribe((data)=> {
      this.getMyBooks(1);
      this.authenticationService.autoLogin();
      let currentChapterUploadId = this.authenticationService.getUser()?.currentChapter?.upload?.id;
      if(currentChapterUploadId) {
        AudioPlayerComponent.reloadCurrentPlayer(currentChapterUploadId, (book.currentChapter || {}).title);
      }
    })
  
  }

  getMyBooks(event: number) {
    this.userService.getMyBooks(event).subscribe(books => this.books = books);
  }

  linkToBook(book: any, action) {
    return '/books/' + Slugify.slugify(book.title) + '/' + book.id + '/' + action;
  }
}
