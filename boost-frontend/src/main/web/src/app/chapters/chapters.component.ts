import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authenticationservice";
import {environment} from "../../environments/environment";
import {Chapterentity} from "./chapterentity";
import {faPlus, faSave, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import {AudioPlayerComponent} from "../audio-player/audio-player.component";


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

  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    if(this.bookId){
      this.getChapters();
    }
  }



  getChapters(event=1) {
    this.http.get<any[]>(environment.backendUrl + '/book/'+this.bookId+'/chapters'+ '?size=3&page=' + (event - 1), {}).subscribe(
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
        this.authenticationService.autoLogin();
        let currentChapterUploadId = (datas.currentChapter || {upload:{}}).upload.id;
        AudioPlayerComponent.reloadCurrentPlayer(currentChapterUploadId, (datas.currentChapter||{}).title);
        this.chapters = this.chapters.content.filter(c => c.id !== ch.id);
        alert(datas.message);
        this.getChapters();
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

  refreshChapterList($event: any) {
    setTimeout(()=>{
      this.getChapters();
    }, 1000);
  }
}
