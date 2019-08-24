import {Component, ElementRef, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../login/authenticationservice";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {

  @ViewChild('audioSource', {static: false}) audioSource: ElementRef;

  private static emitter: EventEmitter<any> = new EventEmitter();
  private static audioSources = []; // todo use redux like solution

  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {

  }

  @Input()
  public upload:any;
  @Input()
  title: string;
  @Input()
  showTitle: boolean=true;

  isLoggedIn() {
    return this.authenticationService.getUser() !== null;
  }


  getSource() {
    return environment.backendUrl + '/upload/' + this.upload.id;
  }

  ngOnInit() {
    console.log(this.upload)
    AudioPlayerComponent.emitter.subscribe((e)=>{
      AudioPlayerComponent.audioSources.filter(a=> a.audioSource !== e.audioSource).forEach(a=> {
        a.audioSource.nativeElement.pause();
      });
      AudioPlayerComponent.audioSources.push(e);
    })
  }

  propagatePlayingEvent(event:Event) {
    console.log('playing:', event);
    AudioPlayerComponent.emitter.emit({
      event: event,
      audioSource: this.audioSource
    });
    //const onPlayingReducer = createReducer(event)

  }
}
