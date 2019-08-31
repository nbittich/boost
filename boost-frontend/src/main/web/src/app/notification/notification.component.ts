import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authenticationservice";


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private notification: any;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.notificationConnect(message => {
      this.notification = JSON.parse(message.data);
      console.log(this.notification);
    });
  }

}
