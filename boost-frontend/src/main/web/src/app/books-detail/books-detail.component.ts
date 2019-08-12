import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../books/book";
import {AuthenticationService} from "../login/authenticationservice";
import {HttpClient} from "@angular/common/http";
import {Location} from '@angular/common';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  static ENDPOINT='/book';

  public book: Book;
  public editMode;

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService,
              private location: Location,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = params.id;
      const title = params.title;
      console.log(id);
      const editMode = params.editMode;
      this.http.request<any>('get', environment.backendUrl + BooksDetailComponent.ENDPOINT+ '/' + id, {}).subscribe(
        (datas) => {
          this.book = datas;
          this.editMode = editMode !== null && editMode !== undefined && editMode === 'edit';
        },
        (err) => {
          console.log(err);
        },
        () => {
        },
      );
    });
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

  ngOnInit() {
  }
}

