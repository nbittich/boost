import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Chapterentity} from "../chapters/chapterentity";
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authenticationservice";
import {ChapterDto} from "../chapters/chapterdto";
import {faPlus, faSave, faTimes} from "@fortawesome/free-solid-svg-icons";
import {AudioPlayerComponent} from "../audio-player/audio-player.component";

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private cd: ChangeDetectorRef,private authenticationService: AuthenticationService) {
  }

  faPlus=faPlus;
  faTimes=faTimes;
  faSave=faSave;
  @ViewChild('title',{read:ElementRef,static:true})
  title:ElementRef;

  @Input()
  public chapter:Chapterentity;


  @Input()
  public editMode:boolean=false;

  public editTitle:boolean;
  editDescription: boolean;

  ngOnInit() {

  }

  updateChapter($event, updateType:string) {
    $event.preventDefault();
    let chap = new ChapterDto();
    chap.id = this.chapter.id;
    chap.title = this.chapter.title;
    chap.description = this.chapter.description;

    this.http.request<any>('post', environment.backendUrl + '/book/chapter/edit', {body: chap}).subscribe(
      (datas) => {
        switch (updateType) {
          case 'editTitle': this.toggleTitle();break;
          case 'editDescription': this.toggleDescription();break;
        }
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
    this.cd.detectChanges();

  }
  public toggleDescription() {
    this.editDescription= this.editMode && !this.editDescription;
    this.cd.detectChanges();
  }

  getTimeDuration(chapter: Chapterentity) {
      return Math.round(chapter.timeDuration/1000 / 60 ) + ' minutes';
  }


  isLoggedIn() {
    return this.getUser() !== null;
  }

  getUser() {
    return this.authenticationService.getUser();
  }

  getCurrentChapter(){
    let currentChapter = (this.getUser()||{}).currentChapter;
    return currentChapter;
  }

  updateCurrentChapter($event: Event) {
    this.http.request<any>('post', environment.backendUrl + '/user/chapter/update/current', {params: new HttpParams().set('chapterId',this.chapter.id)}).subscribe(
      (datas) => {
          this.authenticationService.autoLogin(true);
          let currentChapterUploadId = (datas.currentChapter || {upload:{}}).upload.id;
          console.log("ger"+currentChapterUploadId);
          AudioPlayerComponent.reloadCurrentPlayer(currentChapterUploadId, (datas.currentChapter||{}).title);

      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );

  }

  isChecked() {
    return this.getCurrentChapter() !=null && this.getCurrentChapter().id === this.chapter.id;
  }
}
