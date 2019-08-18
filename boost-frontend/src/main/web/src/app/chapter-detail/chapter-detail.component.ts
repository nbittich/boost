import {Component, Input, OnInit} from '@angular/core';
import {Chapterentity} from "../chapters/chapterentity";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {

  @Input()
  public chapter:Chapterentity;
  constructor() { }

  ngOnInit() {
    console.log(this.chapter);
  }

  getSource() {
    return environment.backendUrl + '/upload/' + this.chapter.upload.id;
  }
}
