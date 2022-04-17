import {ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "@service/authentication.service";
import {faPlus, faSave, faTimes} from "@fortawesome/free-solid-svg-icons";
import {ChapterService} from "@service/chapter.service";
import { ChapterDto } from '@core/models/chapter';

@Component({
  selector: 'app-chapter-form',
  templateUrl: './chapter-form.component.html',
  styleUrls: ['./chapter-form.component.css']
})
export class ChapterFormComponent implements OnInit {

  faPlus=faPlus;
  faTimes=faTimes;
  faSave=faSave;
  @Output() emitter: EventEmitter<any> = new EventEmitter();

  @Input()
  public editMode:boolean;

  @Input()
  public bookId:number;
  @ViewChild('fileRef', {static: false}) fileRef: ElementRef;

  public newChapter:ChapterDto=new ChapterDto();
  public loadingNewFile: boolean=false;
  public newChapterFile:FileList;
  public formVisible: boolean;


  constructor(private chapterService:ChapterService, private cd:ChangeDetectorRef,private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit() {
  }
  setNewChapterFile(event:FileList) {
    if (event.length === 0)
      return;
    this.newChapterFile = event;
    this.newChapter.fileName = this.newChapterFile[0].name;
    this.newChapter.contentType = this.newChapterFile[0].type;

  }
  private setFile(file) {
    this.newChapter.file = file.split(',')[1];
  }


  public publishNewChapter($e) {
    this.cd.detectChanges();
    this.newChapter.bookId = this.bookId;
    this.loadingNewFile = true;

    let reader = new FileReader();
    reader.readAsDataURL(this.newChapterFile[0]);
    reader.onload = (_event) => {
      this.setFile(reader.result);
      this.newChapter.file = btoa(this.newChapter.file);

      this.chapterService.publish(this.newChapter, (datas) => {
        this.newChapter=new ChapterDto();
        this.formVisible=false;
        this.loadingNewFile =false;
        this.fileRef.nativeElement.value='';
        this.emitter.emit(datas);
      });
    };


  }
}
