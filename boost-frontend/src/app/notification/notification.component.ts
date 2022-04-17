import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "@service/authentication.service";

import {Popover} from 'bootstrap';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public notifications:any= [];
  @ViewChild('notifButton', {static: false}) notifButton: ElementRef;
  public popover: any;


  constructor(private authenticationService:AuthenticationService) { }

  ngAfterViewInit(){
    this.popover=new Popover(this.notifButton.nativeElement);
  }

  ngOnInit() {
    this.authenticationService.notificationConnect(message => {
      this.notifications.push(JSON.parse(message.data));
    }, err => {
      console.log(err);
      this.notifications=[];
    });
  }

  togglePopover() {
    this.popover.toggle();
  }
}
