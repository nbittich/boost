import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
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

  private static audioSources = []; // todo use redux like solution
  private static currentPlayerMgmt: AudioPlayerComponent; // todo use redux like solution

  constructor(private http: HttpClient, private router: Router, private cd: ChangeDetectorRef, private authenticationService: AuthenticationService) {

  }

  public updateCurrentTimeInterval;

  @Input()
  public updateCurrentTimeUrl: string = null;

  @Input()
  public currentTime: number = 0;

  @Input()
  public width: number;

  @Input()
  public currentPlayer: boolean;

  @Input()
  public linkDetail: string;

  @Input()
  public upload: any;
  @Input()
  title: string;
  @Input()
  showTitle: boolean = true;
  showPlayer: boolean = true;


  isLoggedIn() {
    return this.authenticationService.getUser() !== null;
  }


  getSource() {
    return AudioPlayerComponent.getSourceById(this.upload.id);
  }

  ngAfterViewInit() {
    this.setCurrentTime(this.currentTime);
    if (this.currentPlayer) {
      AudioPlayerComponent.currentPlayerMgmt = this;
    }

  }

  ngOnInit() {
    AudioPlayerComponent.audioSources.push(this);
  }


  propagatePlayingEvent(event: Event) {
    console.log('playing:', event);
    AudioPlayerComponent.audioSources
      .filter(a => a.audioSource.nativeElement.id !== this.audioSource.nativeElement.id)
      .forEach(a => {
        a.audioSource.nativeElement.pause();

      });
    this.updateCurrentTimeInterval = setInterval(()=>{
      let currentT = this.audioSource.nativeElement.currentTime;
      if (this.updateCurrentTimeUrl) {
        this.http.post<any[]>(environment.backendUrl + this.updateCurrentTimeUrl + currentT, {}).subscribe(
          (datas) => {
          },
          (err) => {
          },
          () => {
          },
        );
      }
    },10000);

  }

  static getSourceById(id) {
    return environment.backendUrl + '/upload/' + id;
  }

  static reloadCurrentPlayer(newId,title) {
    let currentPlayerMgmt = AudioPlayerComponent.currentPlayerMgmt;
    if (currentPlayerMgmt) {
      try {
        if (newId) {
          let audioSource = currentPlayerMgmt.audioSource;
          currentPlayerMgmt.title = title;
          audioSource.nativeElement.src = AudioPlayerComponent.getSourceById(newId);
          audioSource.nativeElement.pause();
        } else {
          AudioPlayerComponent.currentPlayerMgmt.upload = null;
        }
      } catch (e) {
        console.log("error handled ", e);
        AudioPlayerComponent.currentPlayerMgmt.upload = null;
      }
    }
  }

  propagatePauseEvent($event: Event) {
    console.log('paused');
    if(this.updateCurrentTimeInterval) {
      clearInterval(this.updateCurrentTimeInterval);
      this.updateCurrentTimeInterval = null;
    }

  }

  setCurrentTime(time: number) {
    this.audioSource.nativeElement.currentTime = time;
  }
}
