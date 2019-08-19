import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authenticationservice";
import {environment} from "../../environments/environment";
import {Chapterentity} from "./chapterentity";
import {faPlus, faSave, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  faPlus=faPlus;
  faTimes=faTimes;
  faTrash=faTrash;
  faSave=faSave;
  @Input()
  public editMode:boolean;

  @Input()
  public bookId:number;


  public chapters:Array<Chapterentity>;

  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    if(this.bookId){
      this.getChapters();
    }
  }



  getChapters() {
    this.http.get<any[]>(environment.backendUrl + '/book/'+this.bookId+'/chapters', {}).subscribe(
      (datas) => {
        this.chapters = datas;
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  deleteChapter(ch: Chapterentity) {
    this.http.request<any>('delete', environment.backendUrl + '/book/chapter/'+ch.id, {}).subscribe(
      (datas) => {
        this.chapters = this.chapters.filter(c => c.id !== ch.id);
        alert(datas.message);
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  refreshChapterList($event: any) {
    alert($event.message);
    this.getChapters();
  }
}
