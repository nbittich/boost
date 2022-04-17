import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authenticationservice";
import {faPlus, faSave, faTimes} from "@fortawesome/free-solid-svg-icons";
import {ChapterService} from "../service/chapter.service";
import { AudioPlayerComponent } from '@shared/audio-player/audio-player.component';
import { ChapterDto, ChapterEntity } from '@core/models/chapter';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {

  constructor(private chapterService:ChapterService, private router: Router, private cd: ChangeDetectorRef,private authenticationService: AuthenticationService) {
  }

  faPlus=faPlus;
  faTimes=faTimes;
  faSave=faSave;
  @ViewChild('title',{read:ElementRef,static:true})
  title:ElementRef;

  @Input()
  public chapter:ChapterEntity;


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

    this.chapterService.updateChapter(chap,  (datas) => {
      switch (updateType) {
        case 'editTitle': this.toggleTitle();break;
        case 'editDescription': this.toggleDescription();break;
      }
    });
  }
  public toggleTitle() {
    this.editTitle= this.editMode && !this.editTitle;
    this.cd.detectChanges();

  }
  public toggleDescription() {
    this.editDescription= this.editMode && !this.editDescription;
    this.cd.detectChanges();
  }

  getTimeDuration(chapter: ChapterEntity) {
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
    let next = (datas) => {
      this.authenticationService.autoLogin(true);
      let currentChapterUploadId = (datas.currentChapter || {upload:{}}).upload.id;
      AudioPlayerComponent.reloadCurrentPlayer(currentChapterUploadId, (datas.currentChapter||{}).title);

    };
    console.log(this.chapterService);

    this.chapterService.updateCurrentChapter(this.chapter, next);

  }

  isChecked() {
    return this.getCurrentChapter() !=null && this.getCurrentChapter().id === this.chapter.id;
  }
}
