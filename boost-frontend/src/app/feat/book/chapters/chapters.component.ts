import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "@service/authentication.service";
import {faPlus, faSave, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import { AudioPlayerComponent } from '@shared/audio-player/audio-player.component';
import { ChapterEntity } from '@core/models/chapter';
import { ChapterService } from '@service/chapter.service';


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


  public chapters:any;

  constructor(private chapterService: ChapterService, private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    if(this.bookId){
      this.getChapters();
    }
  }



  getChapters(event=1) {
    this.chapterService.getChapters(event, this.bookId,(datas) => {
      this.chapters = datas;
    });
  }

  deleteChapter(ch: ChapterEntity) {
    let next =  (datas) => {
      this.authenticationService.autoLogin();
      let currentChapterUploadId = (datas.currentChapter || {upload:{}}).upload.id;
      AudioPlayerComponent.reloadCurrentPlayer(currentChapterUploadId, (datas.currentChapter||{}).title);
      this.chapters = this.chapters.content.filter(c => c.id !== ch.id);
      alert(datas.message);
      this.getChapters();
    };
    this.chapterService.deleteChapter(ch, next);
  }

  refreshChapterList($event: any) {
    setTimeout(()=>{
      this.getChapters();
    }, 1000);
  }
}
