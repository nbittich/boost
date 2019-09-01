import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authenticationservice";


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private notifications:any= [];

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.notificationConnect(message => {
      this.notifications.push(JSON.parse(message.data));
    }, err => {
      console.log(err);
      this.notifications=[];
    });
  }

}
