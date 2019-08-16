import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authenticationservice";
import {environment} from "../../environments/environment";

class ChapterDto {
}

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  @Input()
  public bookId:number;

  public chapters:Array<ChapterDto>= [];

  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
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

}