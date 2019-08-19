import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Chapterentity} from "../chapters/chapterentity";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authenticationservice";
import {ChapterDto} from "../chapters/chapterdto";
import {faPlus, faSave, faTimes} from "@fortawesome/free-solid-svg-icons";

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

  getSource() {
    return environment.backendUrl + '/upload/' + this.chapter.upload.id;
  }

  updateChapter($event, updateType:string) {
    $event.preventDefault();
    let chap = new ChapterDto();
    chap.id = this.chapter.id;
    chap.title = this.chapter.title;
    chap.description = this.chapter.description;

    this.http.request<any>('post', environment.backendUrl + '/book/chapter/edit', {body: chap}).subscribe(
      (datas) => {
        console.log(datas);
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
}
