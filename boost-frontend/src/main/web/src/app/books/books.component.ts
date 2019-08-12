import { Component, OnInit } from '@angular/core';
import {Book} from "./book";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authenticationservice";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: any;
  static ENDPOINT='/book'

  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    this.getBooks(1);
  }


  hasRole(expected) {
    return this.authenticationService.hasRole([expected]);
  }

  navigate(book, editMode) {
    this.router.navigateByUrl(BooksComponent.ENDPOINT  + '/' + book.id + '/' + editMode);
  }

  delete(book) {
    this.http.request<any>('delete', environment.backendUrl + BooksComponent.ENDPOINT , {body: book}).subscribe(
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
    this.http.get<any[]>(environment.backendUrl + BooksComponent.ENDPOINT  + '?page=' + (event - 1), {}).subscribe(
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

}
