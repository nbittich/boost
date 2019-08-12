import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../login/authenticationservice";
import {environment} from "../../environments/environment";

class ProcessingEvent {
  public eventId:string;
  public unitId:string;
  public type:string;
  public timestamp:string;
  public thread:string;
  public instance:string;
  public status:string;
  public attributes:Object;
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input()
  public unitId:string;

  public unitEvents:ProcessingEvent[];
  showEvent: boolean;
  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.http.get<any[]>(environment.backendUrl+'/processing-unit/event/'+this.unitId, {}).subscribe(
      (datas) => {
        this.unitEvents = datas;
      },
      (err) => {
        console.log(err);
      },
      () => {
      },
    );
  }
  parse(input) {
    try{
      return JSON.parse(input);
    }catch (e) {
      console.log("couldn't parse json.",e);
      return {rawData: input};
    }
  }
}
