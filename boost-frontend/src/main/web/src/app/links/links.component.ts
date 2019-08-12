import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../login/authenticationservice";
import {environment} from "../../environments/environment";

class UnitLink {
  public id: string;
  public source: string;
  public target: string;
  public type: string;
  public timestamp: string;
  public attributes: Object;
}

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  @Input()
  public unitId: string;

  public unitLinks: UnitLink[];
  showLinks: boolean;

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  parse(input) {
    try {
      return JSON.parse(input);
    } catch (e) {
      console.log("couldn't parse json.", e);
      return {rawData: input};
    }
  }

  ngOnInit() {
    this.http.get<any[]>(environment.backendUrl + '/processing-unit/links/' + this.unitId, {}).subscribe(
      (datas) => {
        this.unitLinks = datas;
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }

}
