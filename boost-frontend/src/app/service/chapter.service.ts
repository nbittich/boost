import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthenticationService} from "@service/authentication.service";
import {environment} from "@env/environment";
import {Router} from "@angular/router";
import { ChapterHistory } from "@core/models/chapter";

@Injectable({providedIn: 'root'})
export class ChapterService {
  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
  }

  updateChapter(chap: any, next: (datas) => void, err = e => console.log(e)) {

    this.http.request<any>('post', `${environment.backendUrl}/book/chapter/edit`, {body: chap}).subscribe(
      next, err,
      () => {
      },
    );
  }

  updateCurrentChapter(chapter: any, next: (datas) => void, err = e => console.log(e)) {

    this.http.request<any>('post', `${environment.backendUrl}/user/chapter/update/current`, {params: new HttpParams().set('chapterId', chapter.id)}).subscribe(
      next, err,
      () => {
      },
    );
  }

  publish(newChapter: any, next: (datas) => void, err = e => console.log(e)) {

    this.http.request<any>('put', `${environment.backendUrl}/book/chapter/publish`, {body: newChapter}).subscribe(
      next, err,
      () => {
      },
    );
  }

  deleteChapter(ch: any, next: (datas) => void) {

    this.http.request<any>('delete', `${environment.backendUrl}/book/chapter/${ch.id}`, {}).subscribe(
      next,
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  getChapters(event: number, bookId, next: any, pageSize = 3) {

    this.http.get<any[]>(`${environment.backendUrl}/book/${bookId}/chapters?size=${pageSize}&page=${event - 1}`, {}).subscribe(
      next,
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  getCurrentChapter(next: (datas) => void) {

    this.http.get<any[]>(`${environment.backendUrl}/user/chapter/current`, {}).subscribe(
      next,
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  userHistory() {
   return this.http.get<ChapterHistory[]>(environment.backendUrl + '/user/chapter/history', {});
  }
}
