import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Chapterentity} from "../chapters/chapterentity";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authenticationservice";
import {ChapterDto} from "../chapters/chapterdto";

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cd: ChangeDetectorRef,private authenticationService: AuthenticationService) {
  }

  @ViewChild('title',{read:ElementRef,static:true})
  title:ElementRef;

  @Input()
  public chapter:Chapterentity;

  @Input()
  public editMode:boolean=false;

  public editTitle:boolean;

  ngOnInit() {

  }

  getSource() {
    return environment.backendUrl + '/upload/' + this.chapter.upload.id;
  }

  updateTitle($event) {
    $event.preventDefault();
    let chap = new ChapterDto();
    chap.id = this.chapter.id;
    chap.title = this.chapter.title;

    this.http.request<any>('post', environment.backendUrl + '/book/chapter/edit', {body: chap}).subscribe(
      (datas) => {
        console.log(datas);
        this.editTitle=false;
        alert(datas.message);
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }
  public toggleTitle() {
    this.editTitle= this.editMode && !this.editTitle;
  }
}
